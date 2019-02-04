declare module "youtube" {
    /**
     * State of a video player.
     */
    declare export class YT$PlayerState {
        constructor(...args: empty): mixed;
        static +UNSTARTED: Class<YT$PlayerState__UNSTARTED> &
            YT$PlayerState__UNSTARTED &
            -1; // -1
        static +ENDED: Class<YT$PlayerState__ENDED> & YT$PlayerState__ENDED & 0; // 0
        static +PLAYING: Class<YT$PlayerState__PLAYING> &
            YT$PlayerState__PLAYING &
            1; // 1
        static +PAUSED: Class<YT$PlayerState__PAUSED> &
            YT$PlayerState__PAUSED &
            2; // 2
        static +BUFFERING: Class<YT$PlayerState__BUFFERING> &
            YT$PlayerState__BUFFERING &
            3; // 3
        static +CUED: Class<YT$PlayerState__CUED> & YT$PlayerState__CUED & 5; // 5
    }

    declare class YT$PlayerState__UNSTARTED mixins YT$PlayerState {}
    declare class YT$PlayerState__ENDED mixins YT$PlayerState {}
    declare class YT$PlayerState__PLAYING mixins YT$PlayerState {}
    declare class YT$PlayerState__PAUSED mixins YT$PlayerState {}
    declare class YT$PlayerState__BUFFERING mixins YT$PlayerState {}
    declare class YT$PlayerState__CUED mixins YT$PlayerState {}

    /**
     * Known causes for player errors.
     */
    declare export class YT$PlayerError {
        constructor(...args: empty): mixed;
        static +InvalidParam: Class<YT$PlayerError__InvalidParam> &
            YT$PlayerError__InvalidParam &
            2; // 2
        static +Html5Error: Class<YT$PlayerError__Html5Error> &
            YT$PlayerError__Html5Error &
            5; // 5
        static +VideoNotFound: Class<YT$PlayerError__VideoNotFound> &
            YT$PlayerError__VideoNotFound &
            100; // 100
        static +EmbeddingNotAllowed: Class<YT$PlayerError__EmbeddingNotAllowed> &
            YT$PlayerError__EmbeddingNotAllowed &
            101; // 101
        static +EmbeddingNotAllowed2: Class<YT$PlayerError__EmbeddingNotAllowed2> &
            YT$PlayerError__EmbeddingNotAllowed2 &
            150; // 150
    }

    declare class YT$PlayerError__InvalidParam mixins YT$PlayerError {}
    declare class YT$PlayerError__Html5Error mixins YT$PlayerError {}
    declare class YT$PlayerError__VideoNotFound mixins YT$PlayerError {}
    declare class YT$PlayerError__EmbeddingNotAllowed mixins YT$PlayerError {}
    declare class YT$PlayerError__EmbeddingNotAllowed2 mixins YT$PlayerError {}

    /**
     * Whether to auto-hide video controls.
     */
    declare export class YT$AutoHide {
        constructor(...args: empty): mixed;
        static +AlwaysVisible: Class<YT$AutoHide__AlwaysVisible> &
            YT$AutoHide__AlwaysVisible &
            0; // 0
        static +HideAllControls: Class<YT$AutoHide__HideAllControls> &
            YT$AutoHide__HideAllControls &
            1; // 1
        static +HideProgressBar: Class<YT$AutoHide__HideProgressBar> &
            YT$AutoHide__HideProgressBar &
            2; // 2
    }

    declare class YT$AutoHide__AlwaysVisible mixins YT$AutoHide {}
    declare class YT$AutoHide__HideAllControls mixins YT$AutoHide {}
    declare class YT$AutoHide__HideProgressBar mixins YT$AutoHide {}

    /**
     * Whether to autoplay the video.
     */
    declare export class YT$AutoPlay {
        constructor(...args: empty): mixed;
        static +NoAutoPlay: Class<YT$AutoPlay__NoAutoPlay> &
            YT$AutoPlay__NoAutoPlay &
            0; // 0
        static +AutoPlay: Class<YT$AutoPlay__AutoPlay> &
            YT$AutoPlay__AutoPlay &
            1; // 1
    }

    declare class YT$AutoPlay__NoAutoPlay mixins YT$AutoPlay {}
    declare class YT$AutoPlay__AutoPlay mixins YT$AutoPlay {}

    /**
     * Whether to use user-preferred or forced caption loading.
     */
    declare export class YT$ClosedCaptionsLoadPolicy {
        constructor(...args: empty): mixed;
        static +UserDefault: Class<YT$ClosedCaptionsLoadPolicy__UserDefault> &
            YT$ClosedCaptionsLoadPolicy__UserDefault &
            0; // 0
        static +ForceOn: Class<YT$ClosedCaptionsLoadPolicy__ForceOn> &
            YT$ClosedCaptionsLoadPolicy__ForceOn &
            1; // 1
    }

    declare class YT$ClosedCaptionsLoadPolicy__UserDefault
        mixins YT$ClosedCaptionsLoadPolicy {}
    declare class YT$ClosedCaptionsLoadPolicy__ForceOn
        mixins YT$ClosedCaptionsLoadPolicy {}

    /**
     * Allowed progress bar colors.
     */
    declare export type YT$ProgressBarColor = "red" | "white";

    /**
     * How video controls are shown.
     */
    declare export class YT$Controls {
        constructor(...args: empty): mixed;
        static +Hide: Class<YT$Controls__Hide> & YT$Controls__Hide & 0; // 0
        static +ShowLoadPlayer: Class<YT$Controls__ShowLoadPlayer> &
            YT$Controls__ShowLoadPlayer &
            1; // 1
        static +ShowDelayLoadPlayer: Class<YT$Controls__ShowDelayLoadPlayer> &
            YT$Controls__ShowDelayLoadPlayer &
            2; // 2
    }

    declare class YT$Controls__Hide mixins YT$Controls {}
    declare class YT$Controls__ShowLoadPlayer mixins YT$Controls {}
    declare class YT$Controls__ShowDelayLoadPlayer mixins YT$Controls {}

    /**
     * Whether to allow keyboard controls.
     */
    declare export class YT$KeyboardControls {
        constructor(...args: empty): mixed;
        static +Enable: Class<YT$KeyboardControls__Enable> &
            YT$KeyboardControls__Enable &
            0; // 0
        static +Disable: Class<YT$KeyboardControls__Disable> &
            YT$KeyboardControls__Disable &
            1; // 1
    }

    declare class YT$KeyboardControls__Enable mixins YT$KeyboardControls {}
    declare class YT$KeyboardControls__Disable mixins YT$KeyboardControls {}

    /**
     * Whether the JavaScript API should be enabled.
     */
    declare export class YT$JsApi {
        constructor(...args: empty): mixed;
        static +Disable: Class<YT$JsApi__Disable> & YT$JsApi__Disable & 0; // 0
        static +Enable: Class<YT$JsApi__Enable> & YT$JsApi__Enable & 1; // 1
    }

    declare class YT$JsApi__Disable mixins YT$JsApi {}
    declare class YT$JsApi__Enable mixins YT$JsApi {}

    /**
     * Whether to display the full-screen button.
     */
    declare export class YT$FullscreenButton {
        constructor(...args: empty): mixed;
        static +Hide: Class<YT$FullscreenButton__Hide> &
            YT$FullscreenButton__Hide &
            0; // 0
        static +Show: Class<YT$FullscreenButton__Show> &
            YT$FullscreenButton__Show &
            1; // 1
    }

    declare class YT$FullscreenButton__Hide mixins YT$FullscreenButton {}
    declare class YT$FullscreenButton__Show mixins YT$FullscreenButton {}

    /**
     * Whether to show video annotations.
     */
    declare export class YT$IvLoadPolicy {
        constructor(...args: empty): mixed;
        static +Show: Class<YT$IvLoadPolicy__Show> & YT$IvLoadPolicy__Show & 1; // 1
        static +Hide: Class<YT$IvLoadPolicy__Hide> & YT$IvLoadPolicy__Hide & 3; // 3
    }

    declare class YT$IvLoadPolicy__Show mixins YT$IvLoadPolicy {}
    declare class YT$IvLoadPolicy__Hide mixins YT$IvLoadPolicy {}

    /**
     * Which type of content loads in the player.
     */
    declare export type YT$ListType =
        | YT$ListTypePlayer
        | YT$ListTypeSearch
        | YT$ListTypeUserUploads;

    /**
     * The requested video should be shown in the player.
     */
    declare export type YT$ListTypePlayer = "player";

    /**
     * A search area should be shown in the player.
     */
    declare export type YT$ListTypeSearch = "search";

    /**
     * The user's uploads should load in the player.
     */
    declare export type YT$ListTypeUserUploads = "user_uploads";

    /**
     * Whether a single video should be looped.
     */
    declare export class YT$Loop {
        constructor(...args: empty): mixed;
        static +SinglePlay: Class<YT$Loop__SinglePlay> &
            YT$Loop__SinglePlay &
            0; // 0
        static +Loop: Class<YT$Loop__Loop> & YT$Loop__Loop & 1; // 1
    }

    declare class YT$Loop__SinglePlay mixins YT$Loop {}
    declare class YT$Loop__Loop mixins YT$Loop {}

    /**
     * Comma separated list of video IDs to play after the URL path's video.
     */
    declare export class YT$ModestBranding {
        constructor(...args: empty): mixed;
        static +Full: Class<YT$ModestBranding__Full> &
            YT$ModestBranding__Full &
            0; // 0
        static +Modest: Class<YT$ModestBranding__Modest> &
            YT$ModestBranding__Modest &
            1; // 1
    }

    declare class YT$ModestBranding__Full mixins YT$ModestBranding {}
    declare class YT$ModestBranding__Modest mixins YT$ModestBranding {}

    /**
     * Whether to playback video inline or full-screen in an HTML5 player on iOS
     */
    declare export class YT$PlaysInline {
        constructor(...args: empty): mixed;
        static +Fullscreen: Class<YT$PlaysInline__Fullscreen> &
            YT$PlaysInline__Fullscreen &
            0; // 0
        static +Inline: Class<YT$PlaysInline__Inline> &
            YT$PlaysInline__Inline &
            1; // 1
    }

    declare class YT$PlaysInline__Fullscreen mixins YT$PlaysInline {}
    declare class YT$PlaysInline__Inline mixins YT$PlaysInline {}

    /**
     * Whether to show related videos after the video finishes.
     */
    declare export class YT$RelatedVideos {
        constructor(...args: empty): mixed;
        static +Hide: Class<YT$RelatedVideos__Hide> &
            YT$RelatedVideos__Hide &
            0; // 0
        static +Show: Class<YT$RelatedVideos__Show> &
            YT$RelatedVideos__Show &
            1; // 1
    }

    declare class YT$RelatedVideos__Hide mixins YT$RelatedVideos {}
    declare class YT$RelatedVideos__Show mixins YT$RelatedVideos {}

    /**
     * Whether to show video information before playing.
     */
    declare export class YT$ShowInfo {
        constructor(...args: empty): mixed;
        static +Hide: Class<YT$ShowInfo__Hide> & YT$ShowInfo__Hide & 0; // 0
        static +Show: Class<YT$ShowInfo__Show> & YT$ShowInfo__Show & 1; // 1
    }

    declare class YT$ShowInfo__Hide mixins YT$ShowInfo {}
    declare class YT$ShowInfo__Show mixins YT$ShowInfo {}

    /**
     * Base interface for events triggered by a player.
     */
    declare export interface YT$PlayerEvent {
        /**
         * Video player corresponding to the event.
         */
        target: YT$Player;
    }

    /**
     * Event for player state change.
     */
    declare export type YT$OnStateChangeEvent = {
        /**
         * New player state.
         */
        data: YT$PlayerState
    } & YT$PlayerEvent;

    /**
     * Event for playback quality change.
     */
    declare export type YT$OnPlaybackQualityChangeEvent = {
        /**
         * New playback quality.
         */
        data: string
    } & YT$PlayerEvent;

    /**
     * Event for playback rate change.
     */
    declare export type YT$OnPlaybackRateChangeEvent = {
        /**
         * New playback rate.
         */
        data: number
    } & YT$PlayerEvent;

    /**
     * Event for a player error.
     */
    declare export type YT$OnErrorEvent = {
        /**
         * Which type of error occurred.
         */
        data: YT$PlayerError
    } & YT$PlayerEvent;

    /**
     * Handles a player event.
     * @param event The triggering event.
     */
    declare export interface YT$PlayerEventHandler<TEvent: YT$PlayerEvent> {
        (event: TEvent): void;
    }

    /**
     * YouTube player options.
     */
    declare export interface YT$PlayerOptions {
        /**
         * Player width.
         */
        width?: string | number;

        /**
         * Player height
         */
        height?: string | number;

        /**
         * ID of the video to load.
         */
        videoId?: string;

        /**
         * Player parameters.
         */
        playerVars?: YT$PlayerVars;

        /**
         * Handlers for events fired by the player.
         */
        events?: YT$Events;

        /**
         * Points host to correct origin for CORS
         */
        host?: string;
    }

    /**
     * Allowed suggested player video qualities.
     */
    declare export type YT$SuggestedVideoQuality =
        | YT$VideoQualityDefault
        | YT$VideoQualitySmall
        | YT$VideoQualityMedium
        | YT$VideoQualityLarge
        | YT$VideoQualityHD720
        | YT$VideoQualityHD1080
        | YT$VideoQualityHighRes;

    /**
     * Default video quality chosen by YouTube.
     */
    declare export type YT$VideoQualityDefault = "default";

    /**
     * Player height is 240px, and player dimensions are at least 320px by 240px for 4:3 aspect ratio.
     */
    declare export type YT$VideoQualitySmall = "small";

    /**
     * Player height is 360px, and player dimensions are 640px by 360px (for 16:9 aspect ratio) or 480px by 360px (for 4:3 aspect ratio).
     */
    declare export type YT$VideoQualityMedium = "medium";

    /**
     * Player height is 480px, and player dimensions are 853px by 480px (for 16:9 aspect ratio) or 640px by 480px (for 4:3 aspect ratio).
     */
    declare export type YT$VideoQualityLarge = "large";

    /**
     * Player height is 720px, and player dimensions are 1280px by 720px (for 16:9 aspect ratio) or 960px by 720px (for 4:3 aspect ratio).
     */
    declare export type YT$VideoQualityHD720 = "hd720";

    /**
     * Player height is 1080px, and player dimensions are 1920px by 1080px (for 16:9 aspect ratio) or 1440px by 1080px (for 4:3 aspect ratio).
     */
    declare export type YT$VideoQualityHD1080 = "hd1080";

    /**
     * Player height is greater than 1080px, which means that the player's aspect ratio is greater than 1920px by 1080px.
     */
    declare export type YT$VideoQualityHighRes = "highres";

    /**
     * Player parameters.
     */
    declare export interface YT$PlayerVars {
        /**
         * Whether to autohide video controls (by default, HideProgressBar).
         */
        autohide?: YT$AutoHide;

        /**
         * Whether to autoplay the video (by default, NoAutoPlay).
         */
        autoplay?: YT$AutoPlay;

        /**
         * Whether to use user-preferred or forced caption loading (by default, UserDefault).
         */
        cc_load_policy?: YT$ClosedCaptionsLoadPolicy;

        /**
         * Player progress bar color
         */
        color?: YT$ProgressBarColor;

        /**
         * How video controls are shown (by default, ShowLoadPlayer).
         */
        controls?: YT$Controls;

        /**
         * Whether to allow keyboard controls (by default, Enable).
         */
        disablekb?: YT$KeyboardControls;

        /**
         * Whether the JavaScript API should be enabled (by default, Disable).
         */
        enablejsapi?: YT$JsApi;

        /**
         * Time, in seconds from the beginning of the video, when to stop playing.
         */
        end?: number;

        /**
         * Whether to display the full-screen button (by default, Show).
         */
        fs?: YT$FullscreenButton;

        /**
         * Player language as an ISO 639-1 two-letter language code or fully-specified locale.
         */
        hl?: string;

        /**
         * Whether to show video annotations (by default, Show).
         */
        iv_load_policy?: YT$IvLoadPolicy;

        /**
         * Identifies content that will load.
         * If listType is search, this is the search query.
         * If listType is user_uploads, this is the YouTube user.
         * If listType is playlist, this is the playlist ID, prepended by 'PL'.
         */
        list?: string;

        /**
         * Which type of content loads in the player.
         */
        listType?: YT$ListType;

        /**
         * Whether a single video should be looped (by default, SinglePlay).
         */
        loop?: YT$Loop;

        /**
         * Whether to hide some YouTube branding (by default, Full).
         */
        modestbranding?: YT$ModestBranding;

        /**
         * Origin domain for additional security if using the JavaScript API.
         */
        origin?: string;

        /**
         * Comma separated list of video IDs to play after the URL path's video.
         */
        playlist?: string;

        /**
         * Whether videos play inline or fullscreen in an HTML5 player on iOS. (currently by default, Fullscreen).
         */
        playsinline?: YT$PlaysInline;

        /**
         * Whether to show related videos after the video finishes (by default, Show).
         */
        rel?: YT$RelatedVideos;

        /**
         * Whether to show video information before playing (by default, Show).
         */
        showinfo?: YT$ShowInfo;

        /**
         * Time, in seconds from the beginning of the video, when to start playing.
         */
        start?: number;
    }

    /**
     * Handlers for events fired by the player.
     */
    declare export interface YT$Events {
        /**
         * Event fired when a player has finished loading and is ready to begin receiving API calls.
         */
        onReady?: YT$PlayerEventHandler<YT$PlayerEvent>;

        /**
         * Event fired when the player's state changes.
         */
        onStateChange?: YT$PlayerEventHandler<YT$OnStateChangeEvent>;

        /**
         * Event fired when the playback quality of the player changes.
         */
        onPlaybackQualityChange?: YT$PlayerEventHandler<YT$OnPlaybackQualityChangeEvent>;

        /**
         * Event fired when the playback rate of the player changes.
         */
        onPlaybackRateChange?: YT$PlayerEventHandler<YT$OnPlaybackRateChangeEvent>;

        /**
         * Event fired when an error in the player occurs
         */
        onError?: YT$PlayerEventHandler<YT$OnErrorEvent>;

        /**
         * Event fired to indicate thath the player has loaded, or unloaded, a module
         * with exposed API methods. This currently only occurs for closed captioning.
         */
        onApiChange?: YT$PlayerEventHandler<YT$PlayerEvent>;
    }

    /**
     * Settings to load, play, or queue a video or playlist.
     */
    declare export interface YT$VideoOrPlaylistSettings {
        /**
         * Time, in seconds from the beginning of the (first) video, when to start playing.
         */
        startSeconds?: number;

        /**
         * Time, in seconds from the end of the (first) video, when to end playing.
         */
        endSeconds?: number;

        /**
         * Suggested video player quality.
         */
        suggestedQuality?: YT$SuggestedVideoQuality;
    }

    /**
     * Settings to play or queue a video by ID.
     */
    declare export type YT$VideoByIdSettings = {
        /**
         * Video ID.
         */
        videoId: string
    } & YT$VideoOrPlaylistSettings;

    /**
     * Settings to play or queue a video by media content URL.
     */
    declare export type YT$VideoByMediaContentUrlSettings = {
        /**
         * Fully qualified player URL.
         */
        mediaContentUrl: string
    } & YT$VideoOrPlaylistSettings;

    /**
     * Settings to load or queue a playlist.
     */
    declare export type YT$IPlaylistSettings = {
        /**
         * Identifier for the listType videos list.
         */
        list: string,

        /**
         * Which type of content loads in the player.
         */
        listType?: YT$ListType,

        /**
         * Start index of the playlist, if not 0.
         */
        index?: number
    } & YT$VideoOrPlaylistSettings;

    /**
     * Creates and controls a YouTube player in an <iframe>.
     */
    declare export class YT$Player {
        /**
         * Initializes a new instance of the Player class.
         * @param container DOM element to insert the player's <iframe>.
         * @param options Player options.
         */
        constructor(elt: HTMLElement, options: YT$PlayerOptions): this;

        /**
         * Initializes a new instance of the Player class.
         * @param id ID of the DOM element to insert the player's <iframe>.
         * @param options Player options.
         */
        constructor(id: string, options: YT$PlayerOptions): this;

        /**
         * Queues a video by ID.
         * @param videoId Video ID.
         * @param startSeconds Time from which the video should start playing.
         * @param suggestedQuality Suggested video player quality.
         */
        cueVideoById(
            videoId: string,
            startSeconds?: number,
            suggestedQuality?: YT$SuggestedVideoQuality
        ): void;

        /**
         * Queues a video by ID.
         * @param args Settings to queue the video.
         */
        cueVideoById(args: YT$VideoByIdSettings): void;

        /**
         * Loads and plays a video by ID.
         * @param videoId Video ID.
         * @param startSeconds Time from which the video should start playing.
         * @param suggestedQuality Suggested video player quality.
         */
        loadVideoById(
            videoId: string,
            startSeconds?: number,
            suggestedQuality?: YT$SuggestedVideoQuality
        ): void;

        /**
         * Loads and plays a video by ID.
         * @param args Settings to play the video.
         */
        loadVideoById(args: YT$VideoByIdSettings): void;

        /**
         * Queues a video by media content URL.
         * @param mediaContentUrl Fully qualified player URL.
         * @param startSeconds Time from which the video should start playing.
         * @param suggestedQuality Suggested video player quality.
         */
        cueVideoByUrl(
            mediaContentUrl: string,
            startSeconds?: number,
            suggestedQuality?: YT$SuggestedVideoQuality
        ): void;

        /**
         * Queues a video by media content URL.
         * @param args Settings to play the video.
         */
        cueVideoByUrl(args: YT$VideoByMediaContentUrlSettings): void;

        /**
         * Loads a video by media content URL.
         * @param mediaContentUrl Fully qualified player URL.
         * @param startSeconds Time from which the video should start playing.
         * @param suggestedQuality Suggested video player quality.
         */
        loadVideoByUrl(
            mediaContentUrl: string,
            startSeconds?: number,
            suggestedQuality?: YT$SuggestedVideoQuality
        ): void;

        /**
         * Loads a video by media content URL.
         * @param args Settings to play the video.
         */
        loadVideoByUrl(args: {
            mediaContentUrl: string,
            startSeconds?: number,
            endSeconds?: number,
            suggestedQuality?: YT$SuggestedVideoQuality
        }): void;

        /**
         * Queues a playlist of videos.
         * @param playlist Video ID(s) to play.
         * @param index Start index of the playlist, if not 0.
         * @param startSeconds Time from which the video should start playing.
         * @param suggestedQuality Suggested video player quality.
         */
        cuePlaylist(
            playlist: string | string[],
            index?: number,
            startSeconds?: number,
            suggestedQuality?: YT$SuggestedVideoQuality
        ): void;

        /**
         * Queues a playlist of videos.
         * @param args Settings to queue the playlist.
         */
        cuePlaylist(args: YT$IPlaylistSettings): void;

        /**
         * Loads a playlist of videos.
         * @param playlist Video ID(s) to play.
         * @param index Start index of the playlist, if not 0.
         * @param startSeconds Time from which the video should start playing.
         * @param suggestedQuality Suggested video player quality.
         */
        loadPlaylist(
            playlist: string | string[],
            index?: number,
            startSeconds?: number,
            suggestedQuality?: YT$SuggestedVideoQuality
        ): void;

        /**
         * Loads a playlist of videos.
         * @param args Settings to queue the playlist.
         */
        loadPlaylist(args: YT$IPlaylistSettings): void;

        /**
         * Plays the currently cued/loaded video.
         */
        playVideo(): void;

        /**
         * Pauses the currently playing video.
         */
        pauseVideo(): void;

        /**
         * Stops and cancels loading of the current video.
         */
        stopVideo(): void;

        /**
         * Seeks to a specified time in the video.
         * @param seconds Time, in seconds from the beginning of the video.
         * @param allowSeekAhead Whether the player is allowed to make a new request for unbuffered data.
         */
        seekTo(seconds: number, allowSeekAhead: boolean): void;

        /**
         * Loads and plays the next video in the playlist.
         */
        nextVideo(): void;

        /**
         * Loads and plays the previous video in the playlist.
         */
        previousVideo(): void;

        /**
         * Loads and plays the specified video in the playlist.
         * @param index Index of the video to play.
         */
        playVideoAt(index: number): void;

        /**
         * Mutes the player.
         */
        mute(): void;

        /**
         * Unmutes the player.
         */
        unMute(): void;

        /**
         * @returns Whether the player is muted.
         */
        isMuted(): boolean;

        /**
         * Sets the player volume.
         * @param volume An integer between 0 and 100.
         */
        setVolume(volume: number): void;

        /**
         * @returns The player's current volume, an integer between 0 and 100.
         */
        getVolume(): number;

        /**
         * Sets the size in pixels of the <iframe> that contains the player.
         * @param width Width in pixels of the <iframe>.
         * @param height Height in pixels of the <iframe>.
         */
        setSize(width: number, height: number): void;

        /**
         * @returns Playback rate of the currently playing video.
         */
        getPlaybackRate(): number;

        /**
         * Sets the suggested playback rate for the current video.
         * @param suggestedRate Suggested playback rate.
         */
        setPlaybackRate(suggestedRate: number): void;

        /**
         * @returns Available playback rates for the current video.
         */
        getAvailablePlaybackRates(): number[];

        /**
         * Sets whether the player should continuously play a playlist.
         * @param loopPlaylists Whether to continuously loop playlists.
         */
        setLoop(loopPlaylists: boolean): void;

        /**
         * Sets whether a playlist's videos should be shuffled.
         * @param shufflePlaylist Whether to shuffle playlist videos.
         */
        setShuffle(shufflePlaylist: boolean): void;

        /**
         * @returns A number between 0 and 1 of how much the player has buffered.
         */
        getVideoLoadedFraction(): number;

        /**
         * @returns Current player state.
         */
        getPlayerState(): YT$PlayerState;

        /**
         * @returns Elapsed time in seconds since the video started playing.
         */
        getCurrentTime(): number;

        /**
         * @returns Actual video quality of the current video.
         */
        getPlaybackQuality(): YT$SuggestedVideoQuality;

        /**
         * Sets the suggested video quality for the current video.
         * @param suggestedQuality Suggested video quality for the current video.
         */
        setPlaybackQuality(suggestedQuality: YT$SuggestedVideoQuality): void;

        /**
         * @returns Quality formats in which the current video is available.
         */
        getAvailableQualityLevels(): YT$SuggestedVideoQuality[];

        /**
         * @returns Duration in seconds of the currently playing video.
         */
        getDuration(): number;

        /**
         * @returns YouTube.com URL for the currently loaded/playing video.
         */
        getVideoUrl(): string;

        /**
         * @returns Embed code for the currently loaded/playing video.
         */
        getVideoEmbedCode(): string;

        /**
         * @returns Video IDs in the playlist as they are currently ordered.
         */
        getPlaylist(): string[];

        /**
         * @returns Index of the playlist video that is currently playing.
         */
        getPlaylistIndex(): number;

        /**
         * Adds an event listener for the specified event.
         * @param eventName Name of the event.
         * @param listener Handler for the event.
         */
        addEventListener<TEvent: YT$PlayerEvent>(
            eventName: $Keys<YT$Events>,
            listener: (event: TEvent) => void
        ): void;

        /**
         * @returns The DOM node for the embedded <iframe>.
         */
        getIframe(): HTMLIFrameElement;

        /**
         * Removes the <iframe> containing the player.
         */
        destroy(): void;
    }
}
