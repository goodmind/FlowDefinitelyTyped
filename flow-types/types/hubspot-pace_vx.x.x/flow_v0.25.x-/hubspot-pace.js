declare module "HubSpot-pace" {
  declare module.exports: typeof pace;
}
declare interface HubSpotPaceInterfaces$PaceOptions {
  /**
   * How long should it take for the bar to animate to a new point after receiving it
   */
  catchupTime?: number;

  /**
   * How quickly should the bar be moving before it has any progress info from a new source in %/ms
   */
  initialRate?: number;

  /**
   * What is the minimum amount of time the bar should be on the screen. Irrespective of this number, the bar will always be on screen for 33 * (100 / maxProgressPerFrame) + ghostTime ms.
   */
  minTime?: number;

  /**
   * What is the minimum amount of time the bar should sit after the last update before disappearing
   */
  ghostTime?: number;

  /**
   * Its easy for a bunch of the bar to be eaten in the first few frames before we know how much there is to load. This limits how much of the bar can be used per frame
   */
  maxProgressPerFrame?: number;

  /**
   * This tweaks the animation easing
   */
  easeFactor?: number;

  /**
   * Should pace automatically start when the page is loaded, or should it wait for `start` to be called? Always false if pace is loaded with AMD or CommonJS.
   */
  startOnPageLoad?: boolean;

  /**
   * Should we restart the browser when pushState or replaceState is called?  (Generally means ajax navigation has occured)
   */
  restartOnPushState?: boolean;

  /**
   * Should we show the progress bar for every ajax request (not just regular or ajax-y page navigation)? Set to false to disable. If so, how many ms does the request have to be running for before we show the progress?
   */
  restartOnRequestAfter?: boolean | number;

  /**
   * What element should the pace element be appended to on the page?
   */
  target?: string;
  document?: boolean | string;
  elements?: boolean | HubSpotPaceInterfaces$PaceElementsOptions;
  eventLag?: boolean | HubSpotPaceInterfaces$PaceEventLagOptions;
  ajax?: boolean | HubSpotPaceInterfaces$PaceAjaxOptions;
}

declare interface HubSpotPaceInterfaces$PaceElementsOptions {
  /**
   * How frequently in ms should we check for the elements being tested for using the element monitor?
   */
  checkInterval?: number;

  /**
   * What elements should we wait for before deciding the page is fully loaded (not required)
   */
  selectors?: string[];
}

declare interface HubSpotPaceInterfaces$PaceEventLagOptions {
  /**
   * When we first start measuring event lag, not much is going on in the browser yet, so it's not uncommon for the numbers to be abnormally low for the first few samples. This configures how many samples we need before we consider a low number to mean completion.
   */
  minSamples?: number;

  /**
   * How many samples should we average to decide what the current lag is?
   */
  sampleCount?: number;

  /**
   * Above how many ms of lag is the CPU considered busy?
   */
  lagThreshold?: number;
}

declare interface HubSpotPaceInterfaces$PaceAjaxOptions {
  /**
   * Which HTTP methods should we track?
   */
  trackMethods?: string[];

  /**
   * Should we track web socket connections?
   */
  trackWebSockets?: boolean;

  /**
   * A list of regular expressions or substrings of URLS we should ignore (for both tracking and restarting)
   */
  ignoreURLs?: (string | RegExp)[];
}

declare interface HubSpotPaceInterfaces$Pace {
  options: HubSpotPaceInterfaces$PaceOptions;
  start(options?: HubSpotPaceInterfaces$PaceOptions): void;
  restart(): void;
  stop(): void;
  track(fn: () => void, ...args: any[]): void;
  ignore(fn: () => void, ...args: any[]): void;
  on(event: string, handler: (...args: any[]) => void, context?: any): void;
  off(event: string, handler?: (...args: any[]) => void): void;
  once(event: string, handler: (...args: any[]) => void, context?: any): void;
}

declare class HubSpotPaceInterfaces$PaceEvent {
  constructor(...args: empty): mixed;
  static +start: Class<HubSpotPaceInterfaces$PaceEvent__start> &
    HubSpotPaceInterfaces$PaceEvent__start &
    0; // 0
  static +stop: Class<HubSpotPaceInterfaces$PaceEvent__stop> &
    HubSpotPaceInterfaces$PaceEvent__stop &
    1; // 1
  static +restart: Class<HubSpotPaceInterfaces$PaceEvent__restart> &
    HubSpotPaceInterfaces$PaceEvent__restart &
    2; // 2
  static +done: Class<HubSpotPaceInterfaces$PaceEvent__done> &
    HubSpotPaceInterfaces$PaceEvent__done &
    3; // 3
  static +hide: Class<HubSpotPaceInterfaces$PaceEvent__hide> &
    HubSpotPaceInterfaces$PaceEvent__hide &
    4; // 4
}

declare class HubSpotPaceInterfaces$PaceEvent__start
  mixins HubSpotPaceInterfaces$PaceEvent {}
declare class HubSpotPaceInterfaces$PaceEvent__stop
  mixins HubSpotPaceInterfaces$PaceEvent {}
declare class HubSpotPaceInterfaces$PaceEvent__restart
  mixins HubSpotPaceInterfaces$PaceEvent {}
declare class HubSpotPaceInterfaces$PaceEvent__done
  mixins HubSpotPaceInterfaces$PaceEvent {}
declare class HubSpotPaceInterfaces$PaceEvent__hide
  mixins HubSpotPaceInterfaces$PaceEvent {}
declare module "hubspot-pace" {
  declare var pace: HubSpotPaceInterfaces$HubSpotPaceInterfaces$Pace;
}
