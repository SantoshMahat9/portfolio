// Money Heist Audio Engine with multi-track support (Bella Ciao, Heist Remix, Procedural Synth)
// Coordinates HTML5 audio playback and Web Audio API synthesized sound effects.

export interface AudioTrack {
  id: string;
  title: string;
  artist: string;
  album: string;
  src?: string;
  badge: string;
}

export const HEIST_TRACKS: AudioTrack[] = [
  {
    id: "bella-ciao-remix",
    title: "Bella Ciao (Heist Remix)",
    artist: "La Casa De Papel",
    album: "Money Heist Official Remix",
    src: "/audio/bella-ciao-remix.mp3",
    badge: "HEIST ANTHEM",
  },
  {
    id: "bella-ciao-acoustic",
    title: "Bella Ciao (Acoustic Theme)",
    artist: "Parler",
    album: "Italian Resistance Folk",
    src: "/audio/bella-ciao.mp3",
    badge: "ORIGINAL FOLK",
  },
  {
    id: "digital-heist-synth",
    title: "Digital Heist (Tension Drone)",
    artist: "Santosh Mahato Procedural Synth",
    album: "Royal Mint Cyber Frequency",
    badge: "PROCEDURAL 432Hz",
  },
];

type AudioStateListener = (state: {
  isPlaying: boolean;
  isMuted: boolean;
  currentTrackIndex: number;
  currentTrack: AudioTrack;
  volume: number;
}) => void;

class HeistAudioEngine {
  private ctx: AudioContext | null = null;
  private isMuted: boolean = true;
  private isPlaying: boolean = false;
  private currentTrackIndex: number = 0;
  private volume: number = 0.55;

  private audioElement: HTMLAudioElement | null = null;
  private droneGain: GainNode | null = null;
  private masterGain: GainNode | null = null;
  private osc1: OscillatorNode | null = null;
  private osc2: OscillatorNode | null = null;
  private subOsc: OscillatorNode | null = null;
  private filter: BiquadFilterNode | null = null;
  private lfo: OscillatorNode | null = null;
  private lfoGain: GainNode | null = null;
  private isPlayingDrone: boolean = false;

  private listeners: Set<AudioStateListener> = new Set();

  constructor() {
    if (typeof window !== "undefined") {
      this.initAudioElement();
    }
  }

  private initAudioElement() {
    if (!this.audioElement && typeof window !== "undefined") {
      this.audioElement = new Audio();
      this.audioElement.preload = "auto";
      this.audioElement.loop = true;
      this.audioElement.volume = this.volume;

      this.audioElement.addEventListener("ended", () => {
        this.nextTrack();
      });

      this.loadTrack(this.currentTrackIndex);
    }
  }

  private initContext() {
    if (!this.ctx && typeof window !== "undefined") {
      const AudioCtx =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext })
          .webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
        this.masterGain = this.ctx.createGain();
        this.masterGain.gain.setValueAtTime(this.volume, this.ctx.currentTime);
        this.masterGain.connect(this.ctx.destination);
      }
    }
    if (this.ctx && this.ctx.state === "suspended") {
      this.ctx.resume().catch(() => {});
    }
  }

  public subscribe(callback: AudioStateListener): () => void {
    this.listeners.add(callback);
    callback(this.getState());
    return () => this.listeners.delete(callback);
  }

  private notify() {
    const state = this.getState();
    this.listeners.forEach((cb) => cb(state));
  }

  public getState() {
    return {
      isPlaying: this.isPlaying,
      isMuted: this.isMuted,
      currentTrackIndex: this.currentTrackIndex,
      currentTrack: HEIST_TRACKS[this.currentTrackIndex],
      volume: this.volume,
    };
  }

  public getMuted(): boolean {
    return this.isMuted;
  }

  public getPlaying(): boolean {
    return this.isPlaying;
  }

  public getCurrentTrack(): AudioTrack {
    return HEIST_TRACKS[this.currentTrackIndex];
  }

  private loadTrack(index: number) {
    this.currentTrackIndex = (index + HEIST_TRACKS.length) % HEIST_TRACKS.length;
    const track = HEIST_TRACKS[this.currentTrackIndex];

    if (this.audioElement) {
      if (track.src) {
        this.audioElement.src = track.src;
        this.audioElement.load();
      } else {
        this.audioElement.pause();
        this.audioElement.src = "";
      }
    }
  }

  public toggleSound(): boolean {
    this.initContext();
    this.initAudioElement();

    if (this.isPlaying && !this.isMuted) {
      this.pause();
      this.isMuted = true;
    } else {
      this.isMuted = false;
      this.play();
      this.playAccessGranted();
    }

    this.notify();
    return this.isMuted;
  }

  public startSound(): void {
    this.initContext();
    this.initAudioElement();
    if (this.isMuted || !this.isPlaying) {
      this.isMuted = false;
      this.play();
      this.notify();
    }
  }

  public play() {
    this.initContext();
    this.initAudioElement();
    this.isPlaying = true;
    this.isMuted = false;

    const track = HEIST_TRACKS[this.currentTrackIndex];

    if (track.src && this.audioElement) {
      this.stopDrone();
      this.audioElement.volume = this.volume;
      this.audioElement.play().catch(() => {
        // Fallback to procedural synth if file audio fails autoplay
        this.startDrone();
      });
    } else {
      if (this.audioElement) this.audioElement.pause();
      this.startDrone();
    }

    this.notify();
  }

  public pause() {
    this.isPlaying = false;
    if (this.audioElement) {
      this.audioElement.pause();
    }
    this.stopDrone();
    this.notify();
  }

  public setTrack(index: number) {
    const wasPlaying = this.isPlaying;
    this.pause();
    this.loadTrack(index);
    if (wasPlaying || !this.isMuted) {
      this.play();
    } else {
      this.notify();
    }
  }

  public nextTrack() {
    this.setTrack(this.currentTrackIndex + 1);
  }

  public prevTrack() {
    this.setTrack(this.currentTrackIndex - 1);
  }

  public setVolume(val: number) {
    this.volume = Math.max(0, Math.min(1, val));
    if (this.audioElement) {
      this.audioElement.volume = this.volume;
    }
    if (this.masterGain && this.ctx) {
      this.masterGain.gain.setValueAtTime(this.volume, this.ctx.currentTime);
    }
    this.notify();
  }

  // Procedural 432Hz Tension Drone (Fallback & Track 3)
  private startDrone() {
    if (this.isPlayingDrone) return;
    this.initContext();
    if (!this.ctx || !this.masterGain) return;

    try {
      const now = this.ctx.currentTime;

      this.filter = this.ctx.createBiquadFilter();
      this.filter.type = "lowpass";
      this.filter.frequency.setValueAtTime(220, now);
      this.filter.Q.setValueAtTime(4.0, now);

      this.lfo = this.ctx.createOscillator();
      this.lfo.frequency.setValueAtTime(0.18, now);
      this.lfoGain = this.ctx.createGain();
      this.lfoGain.gain.setValueAtTime(90, now);
      this.lfo.connect(this.lfoGain);
      this.lfoGain.connect(this.filter.frequency);
      this.lfo.start();

      this.droneGain = this.ctx.createGain();
      this.droneGain.gain.setValueAtTime(0.001, now);
      this.droneGain.gain.exponentialRampToValueAtTime(0.25, now + 2);

      this.osc1 = this.ctx.createOscillator();
      this.osc1.type = "sawtooth";
      this.osc1.frequency.setValueAtTime(65.41, now); // C2

      this.osc2 = this.ctx.createOscillator();
      this.osc2.type = "sawtooth";
      this.osc2.frequency.setValueAtTime(65.75, now);

      this.subOsc = this.ctx.createOscillator();
      this.subOsc.type = "sine";
      this.subOsc.frequency.setValueAtTime(32.7, now); // C1

      this.osc1.connect(this.filter);
      this.osc2.connect(this.filter);
      this.subOsc.connect(this.filter);

      this.filter.connect(this.droneGain);
      this.droneGain.connect(this.masterGain);

      this.osc1.start();
      this.osc2.start();
      this.subOsc.start();

      this.isPlayingDrone = true;
    } catch {}
  }

  private stopDrone() {
    if (!this.isPlayingDrone) return;
    if (this.ctx && this.droneGain) {
      try {
        const now = this.ctx.currentTime;
        this.droneGain.gain.setValueAtTime(this.droneGain.gain.value, now);
        this.droneGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.5);
        setTimeout(() => {
          this.osc1?.stop();
          this.osc2?.stop();
          this.subOsc?.stop();
          this.lfo?.stop();
          this.isPlayingDrone = false;
        }, 550);
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
