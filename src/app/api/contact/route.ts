import { NextResponse } from "next/server";

// Simple in-memory rate limiting map: ip -> timestamp[]
const rateLimitMap = new Map<string, number[]>();
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const MAX_REQUESTS_PER_WINDOW = 5;

// Clean up old rate limit entries every 15 minutes
setInterval(() => {
  const now = Date.now();
  rateLimitMap.forEach((timestamps, ip) => {
    const valid = timestamps.filter((t) => now - t < RATE_LIMIT_WINDOW_MS);
    if (valid.length === 0) {
      rateLimitMap.delete(ip);
    } else {
      rateLimitMap.set(ip, valid);
    }
  });
}, 15 * 60 * 1000).unref?.();

function sanitizeInput(str: unknown): string {
  if (typeof str !== "string") return "";
  return str
    .replace(/[<>]/g, "") // Strip raw HTML tags
    .trim();
}

function isValidEmail(email: string): boolean {
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;
  return emailRegex.test(email);
}

export async function POST(req: Request) {
  try {
    // 1. IP & Rate Limit Checking
    const forwardedFor = req.headers.get("x-forwarded-for");
    const ip = forwardedFor ? forwardedFor.split(",")[0].trim() : "127.0.0.1";

    const now = Date.now();
    const timestamps = rateLimitMap.get(ip) || [];
    const recent = timestamps.filter((t) => now - t < RATE_LIMIT_WINDOW_MS);

    if (recent.length >= MAX_REQUESTS_PER_WINDOW) {
      return NextResponse.json(
        {
          success: false,
          error: "Transmission frequency limit exceeded. Please wait a few minutes before transmitting again.",
        },
        { status: 429 }
      );
    }

    // 2. Parse and validate JSON payload
    let body;
    try {
      body = await req.json();
    } catch {
      return NextResponse.json(
        { success: false, error: "Invalid payload format. Expected JSON." },
        { status: 400 }
      );
    }

    // 3. Honeypot check for bots
    if (body.website || body.honeypot) {
      return NextResponse.json(
        { success: false, error: "Spam detection triggered." },
        { status: 400 }
      );
    }

    const rawName = body.name;
    const rawEmail = body.email;
    const rawSubject = body.subject;
    const rawMessage = body.message;

    // 4. Validate fields
    const name = sanitizeInput(rawName);
    const email = sanitizeInput(rawEmail);
    const subject = sanitizeInput(rawSubject);
    const message = sanitizeInput(rawMessage);

    if (!name || name.length < 2) {
      return NextResponse.json(
        { success: false, error: "Operative name must be at least 2 characters long." },
        { status: 400 }
      );
    }
    if (name.length > 100) {
      return NextResponse.json(
        { success: false, error: "Operative name exceeds maximum length of 100 characters." },
        { status: 400 }
      );
    }

    if (!email || !isValidEmail(email)) {
      return NextResponse.json(
        { success: false, error: "A valid communication email address is required." },
        { status: 400 }
      );
    }
    if (email.length > 120) {
      return NextResponse.json(
        { success: false, error: "Email address exceeds maximum length of 120 characters." },
        { status: 400 }
      );
    }

    if (!subject || subject.length < 3) {
      return NextResponse.json(
        { success: false, error: "Mission subject must be at least 3 characters long." },
        { status: 400 }
      );
    }
    if (subject.length > 150) {
      return NextResponse.json(
        { success: false, error: "Mission subject exceeds maximum length of 150 characters." },
        { status: 400 }
      );
    }

    if (!message || message.length < 10) {
      return NextResponse.json(
        { success: false, error: "Transmission payload must be at least 10 characters long." },
        { status: 400 }
      );
    }
    if (message.length > 3000) {
      return NextResponse.json(
        { success: false, error: "Transmission payload exceeds maximum allowed size (3,000 characters)." },
        { status: 400 }
      );
    }

    // 5. Secure relay to email endpoint
    const recipientEmail = process.env.CONTACT_RECIPIENT_EMAIL || "santoshkumarmahato284@gmail.com";
    const relayEndpoint = process.env.FORM_ENDPOINT || `https://formsubmit.co/ajax/${encodeURIComponent(recipientEmail)}`;

    // Set 8-second timeout for outbound relay
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 8000);

    let relayRes: Response;
    try {
      relayRes = await fetch(relayEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          _subject: `[HEIST TRANSMISSION] ${subject} - from ${name}`,
          subject,
          message,
          _template: "table",
          _captcha: "false",
        }),
        signal: controller.signal,
      });
    } catch (relayError: unknown) {
      clearTimeout(timeoutId);
      const isAbort = relayError instanceof Error && relayError.name === "AbortError";
      console.error("Outbound relay failed:", relayError);

      return NextResponse.json(
        {
          success: false,
          error: isAbort
            ? "Transmission relay timed out. Please try again or open the direct email client."
            : "Network error connecting to dispatch server. Please verify your connection or use direct email.",
        },
        { status: 504 }
      );
    } finally {
      clearTimeout(timeoutId);
    }

    if (!relayRes.ok) {
      const status = relayRes.status;
      console.warn(`Relay returned status ${status}`);
      return NextResponse.json(
        {
          success: false,
          error: `Dispatch service responded with status code ${status}. Please use the direct email option.`,
        },
        { status: 502 }
      );
    }

    // Track rate limit timestamp on success
    recent.push(now);
    rateLimitMap.set(ip, recent);

    return NextResponse.json(
      {
        success: true,
        message: "Encrypted payload transmitted successfully. Santosh will review your transmission shortly.",
      },
      { status: 200 }
    );
  } catch (err) {
    console.error("Unexpected error in /api/contact:", err);
    return NextResponse.json(
      {
        success: false,
        error: "Internal dispatch system error. Please contact Santosh directly via email.",
      },
      { status: 500 }
    );
  }
}
