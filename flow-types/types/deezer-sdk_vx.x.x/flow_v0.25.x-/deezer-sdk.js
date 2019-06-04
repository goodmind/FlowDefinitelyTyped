declare module "deezer-sdk" {
  /**
   * See: {@link https://developers.deezer.com/sdk/javascript | Introduction}
   */
  declare var DZ: DeezerSdk$DZ;

  /**
   * See: {@link https://developers.deezer.com/sdk/javascript/init | DZ.init}
   */
  declare var dzAsyncInit: () => void;

  /**
   * See: {@link https://developers.deezer.com/sdk/javascript | Introduction}
   */
  declare interface DeezerSdk$DZ {
    /**
     * Allows you to load and play tracks from your page.
     *
     * Before using the player, you must define PlayerOptions when initializing init(InitOptions).
     *
     * The Deezer web player requires Flash (for stream encryption purposes), the minimum required version
     * is Flash Player 10.1. On mobile, the player will automatically fall back to 30-second previews.
     *
     * See:\
     * {@link https://developers.deezer.com/sdk/javascript/player | Initialize a player}\
     * {@link https://developers.deezer.com/sdk/javascript/loadtracks | Load tracks to a player}
     */
    +player: DeezerSdk$Player;

    /**
     * See: {@link https://developers.deezer.com/sdk/javascript/events-subscribe | Subscribe to an event}
     */
    +Event: DeezerSdk$Event;

    /**
     * Initialize the JavaScript SDK in your page.
     *
     * See: {@link https://developers.deezer.com/sdk/javascript/init | DZ.init}
     */
    init(options: DeezerSdk$InitOptions): void;

    /**
     * Allows you to interact with the DZ.player object.
     *
     * To interact with the player, it needs to be loaded first otherwise you'll get an error message.
     * Once the player is loaded, the DZ.ready method is executed and you can use it to perform your
     * player actions.
     *
     * The DZ.ready methods accepts a function as argument that will be executed as soon as the
     * DZ.player object is loaded.
     *
     * Another way to make sure that the player is loaded before interacting with it is to use the
     * onload option when initializing the player with the DZ.init method.
     *
     * See: {@link https://developers.deezer.com/sdk/javascript/ready | DZ.ready}
     */
    ready(callback: (sdkOptions: DeezerSdk$SdkOptions) => void): void;

    /**
     * Make calls to the Deezer API.
     *
     * See:\
     * {@link https://developers.deezer.com/sdk/javascript/api | DZ.api}\
     * {@link https://developers.deezer.com/api | API}
     */
    api(path: string, callback: (response: any) => void): void;
    api(
      path: string,
      method: DeezerSdk$HttpMethod,
      callback: (response: any) => void
    ): void;
    api(
      path: string,
      method: DeezerSdk$HttpMethod,
      data: any,
      callback: (response: any) => void
    ): void;

    /**
     * Prompt the user to connect on Deezer, and to authorize you application.
     *
     * The DZ.login method opens up a modal window. Since most browsers block pop-up windows unless they
     * are initiated from a user event, we advise you to call DZ.login from a JavaScript onclick event.
     *
     * See: {@link https://developers.deezer.com/sdk/javascript/login | DZ.login}
     */
    login(callback: (response: DeezerSdk$LoginResponse) => void): void;

    /**
     * Destroy the current user session.
     *
     * See: {@link https://developers.deezer.com/sdk/javascript/logout | DZ.logout}
     */
    logout(callback?: () => void): void;

    /**
     * Determine if a user is logged in and connected to your app.
     *
     * See: {@link https://developers.deezer.com/sdk/javascript/getloginstatus | DZ.getLoginStatus}
     */
    getLoginStatus(
      callback: (loginStatus: DeezerSdk$LoginStatus) => void
    ): void;
  }

  /**
   * See:\
   * {@link https://developers.deezer.com/sdk/javascript/init | DZ.init}\
   * {@link https://developers.deezer.com/sdk/javascript/player | Initialize a player}
   */
  declare interface DeezerSdk$InitOptions {
    +appId: string;
    +channelUrl: string;
    +player?: DeezerSdk$PlayerOptions;
  }

  /**
   * See:\
   * {@link https://developers.deezer.com/sdk/javascript/player | Initialize a player}\
   * {@link https://developers.deezer.com/musicplugins/player | Widget player}
   */
  declare interface DeezerSdk$PlayerOptions {
    /**
     * The ID of the div that will contain the widget player
     *
     * To implement a Deezer-like player, set this to the ID attribute of HTML div you want to load
     * the widget player in.
     *
     * An invisible player allows you to create your own UI and JavaScript events.
     *
     * See: {@link https://developers.deezer.com/sdk/javascript/player#options | Player options}
     */
    +container?: string;

    /**
     * Whether to display the playlist from the player
     *
     * Default: true
     *
     * See: {@link https://developers.deezer.com/sdk/javascript/player#options | Player options}
     */
    +playlist?: boolean;

    /**
     * The layout format of the widget
     *
     * Default: classic
     *
     * See:\
     * {@link https://developers.deezer.com/sdk/javascript/player#options | Player options}\
     * {@link https://developers.deezer.com/musicplugins/player | Widget player}
     */
    +format?: DeezerSdk$WidgetFormat;

    /**
     * The general layout of the widget
     *
     * Default: dark
     *
     * See:\
     * {@link https://developers.deezer.com/sdk/javascript/player#options | Player options}\
     * {@link https://developers.deezer.com/musicplugins/player | Widget player}
     */
    +layout?: DeezerSdk$WidgetLayout;

    /**
     * The general color of the widget. Has to be a hexadecimal value without the #.
     *
     * Default: 1990DB
     *
     * See:\
     * {@link https://developers.deezer.com/sdk/javascript/player#options | Player options}\
     * {@link https://developers.deezer.com/musicplugins/player | Widget player}
     */
    +color?: string;

    /**
     * The width of the player in pixels
     *
     * Default: 100%
     *
     * See: {@link https://developers.deezer.com/sdk/javascript/player#options | Player options}
     */
    +width?: number;

    /**
     * The height of the player in pixels
     *
     * Default: 100%
     *
     * See: {@link https://developers.deezer.com/sdk/javascript/player#options | Player options}
     */
    +height?: number;

    /**
     * The layout size of the widget
     *
     * Default: medium
     *
     * See: {@link https://developers.deezer.com/sdk/javascript/player#options | Player options}
     */
    +size?: DeezerSdk$WidgetSize;

    /**
     * The callback function executed after the player has loaded.
     *
     * See: {@link https://developers.deezer.com/sdk/javascript/player#options | Player options}
     */
    onload?: (state: DeezerSdk$PlayerState) => void;
  }

  /**
   * See: {@link https://developers.deezer.com/sdk/javascript/player#options | Player options}
   */
  declare type DeezerSdk$WidgetFormat = "square" | "classic";

  /**
   * See: {@link https://developers.deezer.com/sdk/javascript/player#options | Player options}
   */
  declare type DeezerSdk$WidgetLayout = "light" | "dark";

  /**
   * See: {@link https://developers.deezer.com/sdk/javascript/player#options | Player options}
   */
  declare type DeezerSdk$WidgetSize = "small" | "medium" | "big";

  /**
   * See: {@link https://developers.deezer.com/sdk/javascript/player#options | Player options}
   */
  declare interface DeezerSdk$PlayerState {
    +muted: boolean;
    +repeat: number;
    +shuffle: boolean;
    +volume: number;
  }

  /**
   * See: {@link https://developers.deezer.com/sdk/javascript/ready | DZ.ready}
   */
  declare interface DeezerSdk$SdkOptions {
    +token: {
      +access_token: string,
      +expire: string
    };

    /**
     * In addition to the PlayerState properties,
     * {@link https://developers.deezer.com/sdk/javascript/ready | DZ.ready} also documents the
     * property current_track, but the author of this comment was not able no retrieve it.
     */
    +player: DeezerSdk$PlayerState;
  }

  /**
   * See:\
   * {@link https://developers.deezer.com/sdk/javascript/api | DZ.api}\
   * {@link https://developers.deezer.com/api | API}
   */
  declare type DeezerSdk$HttpMethod = "GET" | "POST" | "DELETE";

  /**
   * See: {@link https://developers.deezer.com/sdk/javascript/login | DZ.login}
   */
  declare interface DeezerSdk$LoginResponse {
    authResponse: {
      accessToken: string,
      expire: string
    };
    status: "connected" | "not_authorized";
    userID: string;
  }

  /**
   * See: {@link https://developers.deezer.com/sdk/javascript/getloginstatus | DZ.getLoginStatus}
   */
  declare interface DeezerSdk$LoginStatus {
    status: DeezerSdk$ConnectionStatus;
    authResponse: {
      accessToken: string,
      expire: string,
      userID: string
    };
  }

  /**
   * See: {@link https://developers.deezer.com/sdk/javascript/getloginstatus | DZ.getLoginStatus}
   */
  declare type DeezerSdk$ConnectionStatus =
    | "connected"
    | "notConnected"
    | "unknown"
    | "not_authorized";

  /**
   * See:
   * {@link https://developers.deezer.com/sdk/javascript/loadtracks | Load tracks to a player}
   * {@link https://developers.deezer.com/sdk/javascript/controls | Control a player}
   * {@link https://developers.deezer.com/sdk/javascript/player_object | The player properties}
   */
  declare interface DeezerSdk$Player {
    /**
     * Load and play a track or list of tracks into the current player.
     * @param autoplay Whether to start playing the queue when the player has loaded.
     * Default: true. Setting this to false will cancel the expected behavior of the offset parameter.
     * @param index The index of the first track to play in the list
     * @param offset The position in seconds where to start playing the track
     *
     * See: {@link https://developers.deezer.com/sdk/javascript/loadtracks | Load tracks to a player}
     */
    playTracks(
      trackIds: $ReadOnlyArray<string>,
      autoplay?: boolean,
      index?: number,
      offset?: number,
      onTracksLoaded?: (playQueue: DeezerSdk$PlayQueue) => void
    ): void;
    playTracks(
      trackIds: $ReadOnlyArray<string>,
      autoplay?: boolean,
      index?: number,
      onTracksLoaded?: (playQueue: DeezerSdk$PlayQueue) => void
    ): void;
    playTracks(
      trackIds: $ReadOnlyArray<string>,
      autoplay?: boolean,
      onTracksLoaded?: (playQueue: DeezerSdk$PlayQueue) => void
    ): void;
    playTracks(
      trackIds: $ReadOnlyArray<string>,
      onTracksLoaded?: (playQueue: DeezerSdk$PlayQueue) => void
    ): void;

    /**
     * Load and play an album into the current player.
     * @param autoplay Whether to start playing the queue when the player has loaded.
     * Default: true. Setting this to false will cancel the expected behavior of the offset parameter.
     * @param index The index of the first track to play in the list
     * @param offset The position in seconds where to start playing the track
     *
     * See: {@link https://developers.deezer.com/sdk/javascript/loadtracks | Load tracks to a player}
     */
    playAlbum(
      albumId: number,
      autoplay?: boolean,
      index?: number,
      offset?: number,
      onTracksLoaded?: (playQueue: DeezerSdk$PlayQueue) => void
    ): void;
    playAlbum(
      albumId: number,
      autoplay?: boolean,
      index?: number,
      onTracksLoaded?: (playQueue: DeezerSdk$PlayQueue) => void
    ): void;
    playAlbum(
      albumId: number,
      autoplay?: boolean,
      onTracksLoaded?: (playQueue: DeezerSdk$PlayQueue) => void
    ): void;
    playAlbum(
      albumId: number,
      onTracksLoaded?: (playQueue: DeezerSdk$PlayQueue) => void
    ): void;

    /**
     * Load and play a playlist into the current player.
     * @param autoplay Whether to start playing the queue when the player has loaded.
     * Default: true. Setting this to false will cancel the expected behavior of the offset parameter.
     * @param index The index of the first track to play in the list
     * @param offset The position in seconds where to start playing the track
     *
     * See: {@link https://developers.deezer.com/sdk/javascript/loadtracks | Load tracks to a player}
     */
    playPlaylist(
      playlistId: number,
      autoplay?: boolean,
      index?: number,
      offset?: number,
      onTracksLoaded?: (playQueue: DeezerSdk$PlayQueue) => void
    ): void;
    playPlaylist(
      playlistId: number,
      autoplay?: boolean,
      index?: number,
      onTracksLoaded?: (playQueue: DeezerSdk$PlayQueue) => void
    ): void;
    playPlaylist(
      playlistId: number,
      autoplay?: boolean,
      onTracksLoaded?: (playQueue: DeezerSdk$PlayQueue) => void
    ): void;
    playPlaylist(
      playlistId: number,
      onTracksLoaded?: (playQueue: DeezerSdk$PlayQueue) => void
    ): void;

    /**
     * Load and play a podcast into the current player.
     * @param autoplay Whether to start playing the queue when the player has loaded.
     * Default: true. Setting this to false will cancel the expected behavior of the offset parameter.
     * @param index The index of the first track to play in the list
     * @param offset The position in seconds where to start playing the track
     *
     * See: {@link https://developers.deezer.com/sdk/javascript/loadtracks | Load tracks to a player}
     */
    playPodcast(
      podcastId: number,
      autoplay?: boolean,
      index?: number,
      offset?: number,
      onTracksLoaded?: (playQueue: DeezerSdk$PlayQueue) => void
    ): void;
    playPodcast(
      podcastId: number,
      autoplay?: boolean,
      index?: number,
      onTracksLoaded?: (playQueue: DeezerSdk$PlayQueue) => void
    ): void;
    playPodcast(
      podcastId: number,
      autoplay?: boolean,
      onTracksLoaded?: (playQueue: DeezerSdk$PlayQueue) => void
    ): void;
    playPodcast(
      podcastId: number,
      onTracksLoaded?: (playQueue: DeezerSdk$PlayQueue) => void
    ): void;

    /**
     * Load and play an episode or a list of episodes into the current player.
     * @param autoplay Whether to start playing the queue when the player has loaded.
     * Default: true. Setting this to false will cancel the expected behavior of the offset parameter.
     * @param index The index of the first track to play in the list
     * @param offset The position in seconds where to start playing the track
     *
     * See: {@link https://developers.deezer.com/sdk/javascript/loadtracks | Load tracks to a player}
     */
    playEpisodes(
      episodeIds: $ReadOnlyArray<string>,
      autoplay?: boolean,
      index?: number,
      offset?: number,
      onTracksLoaded?: (playQueue: DeezerSdk$PlayQueue) => void
    ): void;
    playEpisodes(
      episodeIds: $ReadOnlyArray<string>,
      autoplay?: boolean,
      index?: number,
      onTracksLoaded?: (playQueue: DeezerSdk$PlayQueue) => void
    ): void;
    playEpisodes(
      episodeIds: $ReadOnlyArray<string>,
      autoplay?: boolean,
      onTracksLoaded?: (playQueue: DeezerSdk$PlayQueue) => void
    ): void;
    playEpisodes(
      episodeIds: $ReadOnlyArray<string>,
      onTracksLoaded?: (playQueue: DeezerSdk$PlayQueue) => void
    ): void;

    /**
     * Load and play a radio into the current player.
     * @param autoplay Whether to start playing the queue when the player has loaded.
     * Default: true. Setting this to false will cancel the expected behavior of the offset parameter.
     * @param offset The position in seconds where to start playing the track
     *
     * See: {@link https://developers.deezer.com/sdk/javascript/loadtracks | Load tracks to a player}
     */
    playRadio(
      id: number,
      radioType?: DeezerSdk$RadioType,
      autoplay?: boolean,
      offset?: number,
      onTracksLoaded?: (playQueue: DeezerSdk$PlayQueue) => void
    ): void;
    playRadio(
      id: number,
      radioType?: DeezerSdk$RadioType,
      autoplay?: boolean,
      onTracksLoaded?: (playQueue: DeezerSdk$PlayQueue) => void
    ): void;
    playRadio(
      id: number,
      radioType?: DeezerSdk$RadioType,
      onTracksLoaded?: (playQueue: DeezerSdk$PlayQueue) => void
    ): void;

    /**
     * The official docs for this method are incomplete, but the existing docs and a
     * {@link https://github.com/deezer/javascript-samples/blob/master/player_basic.html | usage example}
     * suggest the same parameters as in {@link playRadio},
     * @param autoplay Whether to start playing the queue when the player has loaded.
     * Default: true. Setting this to false will cancel the expected behavior of the offset parameter.
     * @param index The index of the first track to play in the list
     * @param offset The position in seconds where to start playing the track
     *
     * See: {@link https://developers.deezer.com/sdk/javascript/loadtracks | Load tracks to a player}
     */
    playSmartRadio(
      id: number,
      radioType?: DeezerSdk$RadioType,
      autoplay?: boolean,
      offset?: number,
      onTracksLoaded?: (playQueue: DeezerSdk$PlayQueue) => void
    ): void;
    playSmartRadio(
      id: number,
      radioType?: DeezerSdk$RadioType,
      autoplay?: boolean,
      onTracksLoaded?: (playQueue: DeezerSdk$PlayQueue) => void
    ): void;
    playSmartRadio(
      id: number,
      radioType?: DeezerSdk$RadioType,
      onTracksLoaded?: (playQueue: DeezerSdk$PlayQueue) => void
    ): void;

    /**
     * Load and play external MP3 sources into the current player.
     * @param autoplay Whether to start playing the queue when the player has loaded.
     * Default: true. Setting this to false will cancel the expected behavior of the offset parameter.
     * @param index The index of the first track to play in the list
     * @param offset The position in seconds where to start playing the track
     *
     * See: {@link https://developers.deezer.com/sdk/javascript/loadtracks | Load tracks to a player}
     */
    playExternalTracks(
      mp3Sources: $ReadOnlyArray<DeezerSdk$Mp3Source>,
      autoplay?: boolean,
      index?: number,
      offset?: number,
      onTracksLoaded?: (playQueue: DeezerSdk$PlayQueue) => void
    ): void;
    playExternalTracks(
      mp3Sources: $ReadOnlyArray<DeezerSdk$Mp3Source>,
      autoplay?: boolean,
      index?: number,
      onTracksLoaded?: (playQueue: DeezerSdk$PlayQueue) => void
    ): void;
    playExternalTracks(
      mp3Sources: $ReadOnlyArray<DeezerSdk$Mp3Source>,
      autoplay?: boolean,
      onTracksLoaded?: (playQueue: DeezerSdk$PlayQueue) => void
    ): void;
    playExternalTracks(
      mp3Sources: $ReadOnlyArray<DeezerSdk$Mp3Source>,
      onTracksLoaded?: (playQueue: DeezerSdk$PlayQueue) => void
    ): void;

    /**
     * Append a track to the queue of the current player.
     *
     * To remove a track from the queue, you will need to reset the queue using the playTracks method.
     *
     * See: {@link https://developers.deezer.com/sdk/javascript/loadtracks | Load tracks to a player}
     */
    addToQueue(
      trackIds: $ReadOnlyArray<string>,
      onTracksLoaded?: (playQueue: DeezerSdk$PlayQueue) => void
    ): void;

    /**
     * See: {@link https://developers.deezer.com/sdk/javascript/controls | Control a player}
     */
    play(): void;

    /**
     * See: {@link https://developers.deezer.com/sdk/javascript/controls | Control a player}
     */
    pause(): void;

    /**
     * Tell the player to read the next track.
     *
     * The behavior of this method will depend on the RepeatMode of the player.
     *
     * See: {@link https://developers.deezer.com/sdk/javascript/controls | Control a player}
     */
    next(): void;

    /**
     * Tell the player to read the previous track.
     *
     * The behavior of this method will depend on the RepeatMode of the player.
     *
     * See: {@link https://developers.deezer.com/sdk/javascript/controls | Control a player}
     */
    prev(): void;

    /**
     * Set the position of the reader head in the currently playing track.
     *
     * See: {@link https://developers.deezer.com/sdk/javascript/controls | Control a player}
     */
    seek(positionPercentFloat: number): void;

    /**
     * See: {@link https://developers.deezer.com/sdk/javascript/controls | Control a player}
     */
    setVolume(volumePercentInt: number): void;

    /**
     * See: {@link https://developers.deezer.com/sdk/javascript/controls | Control a player}
     */
    setMute(mute: boolean): void;

    /**
     * See: {@link https://developers.deezer.com/sdk/javascript/controls | Control a player}
     */
    setShuffle(shuffle: boolean): void;

    /**
     * See: {@link https://developers.deezer.com/sdk/javascript/controls | Control a player}
     */
    setRepeat(repeatMode: DeezerSdk$RepeatMode): void;

    /**
     * Set the order of the current list of tracks.
     *
     * Attention, this method does not add or remove tracks from the play queue.
     * Use the addToQueue method to add a track or the playTracks method to remove a track by resetting
     * the play queue.
     *
     * See: {@link https://developers.deezer.com/sdk/javascript/controls | Control a player}
     */
    changeTrackOrder(trackIds: $ReadOnlyArray<string>): void;

    /**
     * Hide the queue and current track information.
     * @param trackInfo Replaces the current track information.
     *
     * See: {@link https://developers.deezer.com/sdk/javascript/controls | Control a player}
     */
    setBlindTestMode(
      blindTestMode: boolean,
      trackInfo?: {
        title: string,
        artist: string,
        cover: string
      }
    ): void;

    /**
     * See: {@link https://developers.deezer.com/sdk/javascript/player_object | The player properties}
     */
    isPlaying(): boolean;

    /**
     * Get the tracks in the queue of the player.
     *
     * See: {@link https://developers.deezer.com/sdk/javascript/player_object | The player properties}
     */
    getTrackList(): DeezerSdk$Track[];

    /**
     * See: {@link https://developers.deezer.com/sdk/javascript/player_object | The player properties}
     */
    getCurrentTrack(): DeezerSdk$Track;

    /**
     * Get the position in the queue of the currently playing track.
     *
     * See: {@link https://developers.deezer.com/sdk/javascript/player_object | The player properties}
     */
    getCurrentIndex(): number;

    /**
     * See: {@link https://developers.deezer.com/sdk/javascript/player_object | The player properties}
     */
    getVolume(): number;

    /**
     * See: {@link https://developers.deezer.com/sdk/javascript/player_object | The player properties}
     */
    getShuffle(): boolean;

    /**
     * See: {@link https://developers.deezer.com/sdk/javascript/player_object | The player properties}
     */
    getRepeat(): DeezerSdk$RepeatMode;

    /**
     * See: {@link https://developers.deezer.com/sdk/javascript/player_object | The player properties}
     */
    getMute(): boolean;
  }

  /**
   * See: {@link https://developers.deezer.com/sdk/javascript/loadtracks | Load tracks to a player}
   */
  declare type DeezerSdk$RadioType = "radio" | "artist" | "user";

  /**
   * See: {@link https://developers.deezer.com/sdk/javascript/loadtracks | Load tracks to a player}
   */
  declare interface DeezerSdk$PlayQueue {
    +tracks: DeezerSdk$Track[];
  }

  /**
   * See: {@link https://developers.deezer.com/sdk/javascript/loadtracks | Load tracks to a player}
   */
  declare interface DeezerSdk$Mp3Source {
    +url: string;
    +title: string;
    +artist: string;
  }

  /**
   * 0: No repeat\
   * 1: Repeat all\
   * 2: Repeat one
   *
   * See:\
   * {@link https://developers.deezer.com/sdk/javascript/controls | Control a player}\
   * {@link https://developers.deezer.com/sdk/javascript/player_object | The player properties}
   */
  declare type DeezerSdk$RepeatMode = 0 | 1 | 2;

  /**
   * See: {@link https://developers.deezer.com/sdk/javascript/player_object | The player properties}
   */
  declare interface DeezerSdk$Track {
    +id: string;

    /**
     * Duration in seconds (int)
     */
    +duration: number;
    +title: string;
    +artist: DeezerSdk$Artist;
    +album: DeezerSdk$Album;
  }

  /**
   * See: {@link https://developers.deezer.com/sdk/javascript/player_object | The player properties}
   */
  declare interface DeezerSdk$Artist {
    +id: string;
    +name: string;
  }

  /**
   * See: {@link https://developers.deezer.com/sdk/javascript/player_object | The player properties}
   */
  declare interface DeezerSdk$Album {
    +id: string;
    +title: string;
  }

  /**
   * Allows you to listen to all player-related events.
   *
   * See:\
   * {@link https://developers.deezer.com/sdk/javascript/events | List of events}\
   * {@link https://developers.deezer.com/sdk/javascript/events-subscribe | Subscribe to an event}
   */
  declare interface DeezerSdk$Event {
    /**
     * See: {@link https://developers.deezer.com/sdk/javascript/events | List of events}
     */
    subscribe(
      event:
        | "player_loaded"
        | "player_play"
        | "player_paused"
        | "tracklist_changed",
      callback: () => void
    ): void;
    subscribe(
      event: "player_position",
      callback: (
        positionSecondsFloat_durationSecondsInt: [number, number]
      ) => void
    ): void;
    subscribe(
      event: "player_buffering",
      callback: (loadedPercentInt: number) => void
    ): void;
    subscribe(
      event: "volume_changed",
      callback: (volumePercentInt: number) => void
    ): void;
    subscribe(
      event: "shuffle_changed",
      callback: (shuffle: boolean) => void
    ): void;
    subscribe(
      event: "repeat_changed",
      callback: (repeatMode: DeezerSdk$RepeatMode) => void
    ): void;
    subscribe(event: "mute_changed", callback: (mute: boolean) => void): void;
    subscribe(
      event: "track_end",
      callback: (trackPosition: number) => void
    ): void;
    subscribe(
      event: "current_track",
      callback: (currentTrackInfo: {
        index: number,
        track: DeezerSdk$Track
      }) => void
    ): void;
  }

  /**
   * See:\
   * {@link https://developers.deezer.com/sdk/javascript/events | List of events}\
   * {@link https://developers.deezer.com/sdk/javascript/events-subscribe | Subscribe to an event}
   * @remarks This type is not needed to define the other types, but users may find it useful
   * in some situations anyway.
   */
  declare type DeezerSdk$PlayerEvent =
    | "player_loaded"
    | "player_play"
    | "player_paused"
    | "player_position"
    | "player_buffering"
    | "volume_changed"
    | "shuffle_changed"
    | "repeat_changed"
    | "mute_changed"
    | "tracklist_changed"
    | "track_end"
    | "current_track";
}
