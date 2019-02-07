declare module "spotify-web-playback-sdk" {
  declare interface Window {
    onSpotifyWebPlaybackSDKReady(): void;
  }

  declare var npm$namespace$Spotify: {
    Player: typeof Spotify$Player
  };
  declare var Spotify$Player: typeof SpotifyPlayer;

  declare interface Spotify$Album {
    uri: string;
    name: string;
    images: Spotify$Image[];
  }

  declare interface Spotify$Artist {
    name: string;
    uri: string;
  }

  declare interface Spotify$Error {
    message: string;
  }

  declare type Spotify$ErrorTypes =
    | "account_error"
    | "authentication_error"
    | "initialization_error"
    | "playback_error";

  declare interface Spotify$Image {
    url: string;
  }

  declare interface Spotify$PlaybackContext {
    metadata: any;
    uri: string | null;
  }

  declare interface Spotify$PlaybackDisallows {
    pausing: boolean;
    peeking_next: boolean;
    peeking_prev: boolean;
    resuming: boolean;
    seeking: boolean;
    skipping_next: boolean;
    skipping_prev: boolean;
  }

  declare interface Spotify$PlaybackRestrictions {
    disallow_pausing_reasons: string[];
    disallow_peeking_next_reasons: string[];
    disallow_peeking_prev_reasons: string[];
    disallow_resuming_reasons: string[];
    disallow_seeking_reasons: string[];
    disallow_skipping_next_reasons: string[];
    disallow_skipping_prev_reasons: string[];
  }

  declare interface Spotify$PlaybackState {
    context: Spotify$PlaybackContext;
    disallows: Spotify$PlaybackDisallows;
    duration: number;
    paused: boolean;
    position: number;

    /**
     * 0: NO_REPEAT
     * 1: ONCE_REPEAT
     * 2: FULL_REPEAT
     */
    repeat_mode: 0 | 1 | 2;
    shuffle: boolean;
    restrictions: Spotify$PlaybackRestrictions;
    track_window: Spotify$PlaybackTrackWindow;
  }

  declare interface Spotify$PlaybackTrackWindow {
    current_track: Spotify$Track;
    previous_tracks: Spotify$Track[];
    next_tracks: Spotify$Track[];
  }

  declare interface Spotify$PlayerInit {
    name: string;
    getOAuthToken(cb: (token: string) => void): void;
    volume?: number;
  }

  declare type Spotify$ErrorListener = (err: Spotify$Error) => void;

  declare type Spotify$PlaybackInstanceListener = (
    inst: Spotify$WebPlaybackInstance
  ) => void;

  declare type Spotify$PlaybackStateListener = (
    s: Spotify$PlaybackState
  ) => void;

  declare type Spotify$AddListenerFn = ((
    event: "ready" | "not_ready",
    cb: Spotify$PlaybackInstanceListener
  ) => void) &
    ((
      event: "player_state_changed",
      cb: Spotify$PlaybackStateListener
    ) => void) &
    ((event: Spotify$ErrorTypes, cb: Spotify$ErrorListener) => void);

  declare class Spotify$SpotifyPlayer {
    constructor(options: Spotify$PlayerInit): this;
    connect(): Promise<boolean>;
    disconnect(): void;
    getCurrentState(): Promise<Spotify$PlaybackState | null>;
    getVolume(): Promise<number>;
    nextTrack(): Promise<void>;
    addListener: Spotify$AddListenerFn;
    on: Spotify$AddListenerFn;
    removeListener(
      event:
        | "ready"
        | "not_ready"
        | "player_state_changed"
        | Spotify$ErrorTypes,
      cb?:
        | Spotify$ErrorListener
        | Spotify$PlaybackInstanceListener
        | Spotify$PlaybackStateListener
    ): void;
    pause(): Promise<void>;
    previousTrack(): Promise<void>;
    resume(): Promise<void>;
    seek(pos_ms: number): Promise<void>;
    setVolume(volume: number): Promise<void>;
    togglePlay(): Promise<void>;
  }

  declare interface Spotify$Track {
    uri: string;
    id: string | null;
    type: "track" | "episode" | "ad";
    media_type: "audio" | "video";
    name: string;
    is_playable: boolean;
    album: Spotify$Album;
    artists: Spotify$Artist[];
  }

  declare interface Spotify$WebPlaybackInstance {
    device_id: string;
  }
}
