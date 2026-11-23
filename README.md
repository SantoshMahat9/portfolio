# SANTOSH MAHATO — PREMIUM 3D CREATIVE DEVELOPER PORTFOLIO

> **"Beyond Code. Beyond Limits."**  
> Complete production-ready portfolio for **Santosh Sanjeev Mahato** — Full Stack Developer & Computer Engineering Undergraduate.

---

## 🌟 Visual Art Direction & Identity

- **Hero Aesthetics:** Vibrant fiery orange (`#FF4D1C`) and deep vermilion (`#E93616`) atmospheric palette with warm golden highlights (`#FFC247`) over obsidian charcoal (`#171717`).
- **Oversized Typography:** High-impact display typography (`HI, I'M SANTOSH`) rendered with subtle glow, tracking, and natural depth layering.
- **3D Spatial Stage:** Central personalized 3D character portrait in a sleek black tech turtleneck with fiery rim lighting, layered naturally across the headline with mouse-responsive tilt and interactive React Three Fiber floating futuristic chrome rings and polyhedra.
- **Editorial Experience:** Seamless transition into clean, refined editorial sections showcasing verified internships, upcoming roles, project case studies, and academic honors.

---

## 🛠️ Tech Stack & Engineering Standards

| Layer | Technologies |
| :--- | :--- |
| **Framework** | [Next.js 14](https://nextjs.org/) (App Router, Server & Client Components) |
| **Language** | [TypeScript](https://www.typescriptlang.org/) (Strict mode, complete interfaces) |
| **Styling** | [Tailwind CSS](https://tailwindcss.com/) (Custom design system palette) |
| **3D & WebGL** | [Three.js](https://threejs.org/), [@react-three/fiber](https://docs.pmnd.rs/react-three-fiber), [@react-three/drei](https://github.com/pmndrs/drei) |
| **Motion** | [Framer Motion](https://www.framer.com/motion/) (Hardware-accelerated springs, gestures, accessible reduced motion) |
| **Icons** | [Lucide React](https://lucide.dev/) |
| **Feedback** | [Canvas Confetti](https://www.npmjs.com/package/canvas-confetti) |
| **Deployment** | [Vercel](https://vercel.com/) |

---

## 📂 Project Architecture

```
d:/portfolio/
├── public/
│   ├── images/
│   │   ├── profile/            # 3D character portrait (santosh-portrait.png)
│   │   ├── projects/           # Architectural SVGs (WhatsApp bot, Expense Tracker, API lab)
│   │   └── certificates/       # Credential badges
│   └── resume/                 # Direct downloadable resume
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout, JSON-LD Schema, OpenGraph metadata
│   │   ├── page.tsx            # Full single-page experience
│   │   ├── globals.css         # Global styles, Syne font, fiery glows, scrollbars
│   │   ├── sitemap.ts          # Dynamic SEO sitemap
│   │   ├── robots.ts           # Search engine crawler policies
│   │   ├── icon.tsx            # Dynamic Next.js SVG favicon
│   │   └── apple-icon.tsx      # iOS touch icon
│   ├── components/
│   │   ├── 3d/
│   │   │   ├── Scene.tsx           # React Three Fiber dynamic canvas
│   │   │   ├── FloatingObjects.tsx # Chrome rings, geometric polyhedra, parallax
│   │   │   └── HeroPortrait.tsx    # Interactive mouse-tracking 3D tilt portrait
│   │   ├── layout/
│   │   │   ├── Navbar.tsx          # Sticky blur navigation + active pills + mobile drawer
│   │   │   └── Footer.tsx          # Branded footer, dynamic year, quick links
│   │   ├── sections/
│   │   │   ├── Hero.tsx            # Oversized headline + 3D stage + CTAs
│   │   │   ├── About.tsx           # Narrative, engineering philosophy, academic card
│   │   │   ├── Experience.tsx      # Career timeline (Kantascrypt + Acelia upcoming)
│   │   │   ├── Projects.tsx        # Selected work grid + interactive modal triggers
│   │   │   ├── Skills.tsx          # Categorized toolkit filters (no arbitrary % bars)
│   │   │   ├── EducationCertifications.tsx # B.Tech + 7 verified certifications
│   │   │   └── Contact.tsx         # Interactive form, copy coords, confetti feedback
│   │   └── ui/
│   │       ├── Button.tsx          # Reusable styled buttons & links
│   │       ├── SectionHeading.tsx  # Editorial numbered section headings
│   │       └── ProjectCard.tsx     # Project preview + modal case study
│   ├── data/
│   │   ├── profile.ts          # Central contact details, bio, coords
│   │   ├── projects.ts         # Verified project case studies & data
│   │   ├── experience.ts       # Internship and upcoming role details
│   │   ├── skills.ts           # Categorized engineering toolkit
│   │   ├── education.ts        # B.Tech degree & university details
│   │   └── certifications.ts   # 7 verified certifications & achievements
│   ├── lib/
│   │   └── utils.ts            # Class merging utility (clsx + twMerge)
│   └── types/
│       └── index.ts            # Strongly typed TypeScript interfaces
├── vercel.json                 # Vercel caching, headers & deployment config
├── tailwind.config.ts          # Design system & color tokens
├── tsconfig.json               # TypeScript config with @/ path aliases
└── package.json                # Dependencies & scripts
```

---

## 👤 Santosh Mahato — Profile & Coordinates

- **Full Name:** Santosh Sanjeev Mahato
- **Professional Title:** Full Stack Developer & Computer Engineering Student
- **Location:** Boisar, Maharashtra, India
- **Email:** [santoshkumarmahato284@gmail.com](mailto:santoshkumarmahato284@gmail.com)
- **Phone:** [+91 83292 24214](tel:+918329224214)
- **LinkedIn:** [linkedin.com/in/santoshmah](https://linkedin.com/in/santoshmah)
- **GitHub:** [github.com/SantoshMahat9](https://github.com/SantoshMahat9)
- **Degree:** B.Tech in Computer Engineering (2023–2027) — St. John College of Engineering and Management, Palghar (University of Mumbai)

---

## 🚀 Local Development

1. **Clone or navigate to the directory:**
   ```bash
   cd d:/portfolio
   ```

2. **Install dependencies:**
   ```bash
   pnpm install
   ```

3. **Start local development server:**
   ```bash
   pnpm run dev
   ```
   Open `http://localhost:3000` in your browser.

4. **Build for production:**
   ```bash
   pnpm run build
   ```

5. **Start production server:**
   ```bash
   pnpm run start
   ```

---

## 🌐 Deploy to Vercel

### Option 1: Vercel CLI (Recommended)
```bash
pnpm dlx vercel
```

### Option 2: GitHub Integration
1. Push this repository to GitHub:
   ```bash
   git init
   git add .
   git commit -m "feat: complete Santosh Mahato 3D creative portfolio"
   git branch -M main
   git remote add origin https://github.com/SantoshMahat9/portfolio.git
   git push -u origin main
   ```
2. Go to [vercel.com/new](https://vercel.com/new).
3. Import your `portfolio` repository.
4. Next.js will be detected automatically. Click **Deploy**.

---

## 🎨 How to Update the 3D Portrait or Photos

- **Portrait Replacement:** Simply place any updated photograph or custom 3D model render at `public/images/profile/santosh-portrait.png`. The card, dynamic specular rim reflections, and 3D tilt effects will automatically apply to the new image.
- **Resume Replacement:** Place an updated resume PDF at `public/resume/Santosh_Mahato_Resume.pdf`.
