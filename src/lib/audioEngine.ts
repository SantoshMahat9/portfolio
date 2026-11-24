// Audio Engine completely disabled by user preference
// Provides safe, silent no-op methods to prevent runtime errors in components

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
    id: "silent",
    title: "Audio Disabled",
    artist: "Silent Mode",
    album: "None",
    badge: "MUTED",
  },
];

type AudioStateListener = (state: {
  isPlaying: boolean;
  isMuted: boolean;
  currentTrackIndex: number;
  currentTrack: AudioTrack;
  volume: number;
}) => void;

class SilentAudioEngine {
  public play(): void {}
  public pause(): void {}
  public stop(): void {}
  public toggleSound(): void {}
  public startSound(): void {}
  public setVolume(_vol: number): void {}
  public setTrack(_idx: number): void {}
  public nextTrack(): void {}
  public prevTrack(): void {}
  public playClick(): void {}
  public playBlip(): void {}
  public playAccessGranted(): void {}
  public playAlarm(): void {}
  public playVaultUnlock(): void {}
  public subscribe(_fn: AudioStateListener): () => void {
    return () => {};
  }
  public getState() {
    return {
      isPlaying: false,
      isMuted: true,
      currentTrackIndex: 0,
      currentTrack: HEIST_TRACKS[0],
      volume: 0,
    };
  }
}

export const heistAudio = new SilentAudioEngine();
