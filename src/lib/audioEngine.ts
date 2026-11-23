// Procedural Web Audio API sound engine for Money Heist cinematic atmosphere and UI telemetry
// Zero external asset dependencies: 100% synthesized in real time.

class HeistAudioEngine {
  private ctx: AudioContext | null = null;
  private isMuted: boolean = true;
  private droneGain: GainNode | null = null;
  private masterGain: GainNode | null = null;
  private osc1: OscillatorNode | null = null;
  private osc2: OscillatorNode | null = null;
  private subOsc: OscillatorNode | null = null;
  private filter: BiquadFilterNode | null = null;
  private lfo: OscillatorNode | null = null;
  private lfoGain: GainNode | null = null;
  private isPlayingDrone: boolean = false;
  private listeners: Set<(muted: boolean) => void> = new Set();

  private initContext() {
    if (!this.ctx && typeof window !== "undefined") {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
        this.masterGain = this.ctx.createGain();
        this.masterGain.gain.setValueAtTime(0.7, this.ctx.currentTime);
        this.masterGain.connect(this.ctx.destination);
      }
    }
    if (this.ctx && this.ctx.state === "suspended") {
      this.ctx.resume().catch(() => {});
    }
  }

  public subscribe(callback: (muted: boolean) => void): () => void {
    this.listeners.add(callback);
    callback(this.isMuted);
    return () => this.listeners.delete(callback);
  }

  private notify() {
    this.listeners.forEach((cb) => cb(this.isMuted));
  }

  public getMuted(): boolean {
    return this.isMuted;
  }

  public toggleSound(): boolean {
    this.initContext();
    this.isMuted = !this.isMuted;
    if (this.isMuted) {
      this.stopDrone();
    } else {
      this.startDrone();
      this.playAccessGranted();
    }
    this.notify();
    return this.isMuted;
  }

  public startSound(): void {
    if (this.isMuted) {
      this.initContext();
      this.isMuted = false;
      this.startDrone();
      this.notify();
    }
  }

  public startDrone() {
    if (this.isPlayingDrone || this.isMuted) return;
    this.initContext();
    if (!this.ctx || !this.masterGain) return;

    try {
      const now = this.ctx.currentTime;

      // Filter for dark cinematic Money Heist mood
      this.filter = this.ctx.createBiquadFilter();
      this.filter.type = "lowpass";
      this.filter.frequency.setValueAtTime(220, now);
      this.filter.Q.setValueAtTime(4.0, now);

      // Low LFO to gently modulate filter cutoff (creates tension pulse)
      this.lfo = this.ctx.createOscillator();
      this.lfo.frequency.setValueAtTime(0.18, now); // ~5.5s cycle
      this.lfoGain = this.ctx.createGain();
      this.lfoGain.gain.setValueAtTime(90, now);
      this.lfo.connect(this.lfoGain);
      this.lfoGain.connect(this.filter.frequency);
      this.lfo.start();

      // Drone Gain
      this.droneGain = this.ctx.createGain();
      this.droneGain.gain.setValueAtTime(0.001, now);
      this.droneGain.gain.exponentialRampToValueAtTime(0.28, now + 3);

      // Osc 1: Deep C2 note (65.41 Hz) - cinematic tension
      this.osc1 = this.ctx.createOscillator();
      this.osc1.type = "sawtooth";
      this.osc1.frequency.setValueAtTime(65.41, now);

      // Osc 2: Detuned C2 note (65.75 Hz) - slow beat frequency
      this.osc2 = this.ctx.createOscillator();
      this.osc2.type = "sawtooth";
      this.osc2.frequency.setValueAtTime(65.75, now);

      // Sub-bass: Deep 32.7 Hz sine (C1)
      this.subOsc = this.ctx.createOscillator();
      this.subOsc.type = "sine";
      this.subOsc.frequency.setValueAtTime(32.7, now);

      // Route
      this.osc1.connect(this.filter);
      this.osc2.connect(this.filter);
      this.subOsc.connect(this.filter);

      this.filter.connect(this.droneGain);
      this.droneGain.connect(this.masterGain);

      this.osc1.start();
      this.osc2.start();
      this.subOsc.start();

      this.isPlayingDrone = true;
    } catch {
      // Audio autoplay policy catch
    }
  }

  public stopDrone() {
    if (!this.isPlayingDrone) return;
    if (this.ctx && this.droneGain) {
      try {
        const now = this.ctx.currentTime;
        this.droneGain.gain.setValueAtTime(this.droneGain.gain.value, now);
        this.droneGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.8);
        setTimeout(() => {
          this.osc1?.stop();
          this.osc2?.stop();
          this.subOsc?.stop();
          this.lfo?.stop();
          this.isPlayingDrone = false;
        }, 900);
      } catch {
        this.isPlayingDrone = false;
      }
    } else {
      this.isPlayingDrone = false;
    }
  }

  // Tactical UI sound: high-tech blip on hover
  public playBlip() {
    if (this.isMuted) return;
    this.initContext();
    if (!this.ctx || !this.masterGain) return;

    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = "sine";
      osc.frequency.setValueAtTime(880, now);
      osc.frequency.exponentialRampToValueAtTime(1440, now + 0.04);

      gain.gain.setValueAtTime(0.05, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.05);

      osc.connect(gain);
      gain.connect(this.masterGain);

      osc.start(now);
      osc.stop(now + 0.05);
    } catch {}
  }

  // Tactical click on button activate
  public playClick() {
    if (this.isMuted) return;
    this.initContext();
    if (!this.ctx || !this.masterGain) return;

    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = "triangle";
      osc.frequency.setValueAtTime(420, now);
      osc.frequency.exponentialRampToValueAtTime(180, now + 0.06);

      gain.gain.setValueAtTime(0.12, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.06);

      osc.connect(gain);
      gain.connect(this.masterGain);

      osc.start(now);
      osc.stop(now + 0.06);
    } catch {}
  }

  // Two-tone security clearance / access granted chime
  public playAccessGranted() {
    this.initContext();
    if (!this.ctx || !this.masterGain) return;

    try {
      const now = this.ctx.currentTime;

      // Note 1: 523.25 Hz (C5)
      const osc1 = this.ctx.createOscillator();
      const gain1 = this.ctx.createGain();
      osc1.type = "sine";
      osc1.frequency.setValueAtTime(523.25, now);
      gain1.gain.setValueAtTime(0.15, now);
      gain1.gain.exponentialRampToValueAtTime(0.001, now + 0.18);
      osc1.connect(gain1);
      gain1.connect(this.masterGain);
      osc1.start(now);
      osc1.stop(now + 0.18);

      // Note 2: 783.99 Hz (G5)
      const osc2 = this.ctx.createOscillator();
      const gain2 = this.ctx.createGain();
      osc2.type = "sine";
      osc2.frequency.setValueAtTime(783.99, now + 0.12);
      gain2.gain.setValueAtTime(0.18, now + 0.12);
      gain2.gain.exponentialRampToValueAtTime(0.001, now + 0.45);
      osc2.connect(gain2);
      gain2.connect(this.masterGain);
      osc2.start(now + 0.12);
      osc2.stop(now + 0.45);
    } catch {}
  }
}

export const heistAudio = new HeistAudioEngine();
