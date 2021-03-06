declare module "timelinejs3" {
  declare var npm$namespace$TL: {
    Timeline: typeof TL$Timeline
  };
  declare export var TL$Timeline: TL$ITimeline;

  declare export type TL$ITimeline = {
    new(containerId: string, data: string | TL$ITimelineConfig): TL$ITimeline,
    new(
      containerId: string,
      data: string | TL$ITimelineConfig,
      options: TL$ITimelineOptions
    ): TL$ITimeline,
    goToId: (id: string | number) => void,
    goTo: (n: number) => void,
    goToStart: () => void,
    goToEnd: () => void,
    goToPrev: () => void,
    goToNext: () => void,
    add: (event: TL$ITimelineSlideData) => void,
    remove: (n: number) => void,
    removeId: (id: string | number) => void,
    getData: (n: number) => TL$ITimelineSlideData,
    getDataById: (id: string | number) => TL$ITimelineSlideData,
    getSlide: (n: number) => TL$ITimelineSlide,
    getSlideById: (id: string | number) => TL$ITimelineSlide,
    getCurrentSlide: () => TL$ITimelineSlide,
    updateDisplay: () => void,
    setConfig: (config: TL$ITimelineConfig) => void,
    showMessage: (msg: string) => void,
    zoomIn: () => void,
    zoomOut: () => void,
    setZoom: (level: number) => void,
    current_id: string,
    _getSlideIndex(id: string | number): number
  } & ITimelineEvents;

  declare export interface TL$ITimelineEvents {
    addEventListener(
      type: string,
      fn: () => void,
      context?: any
    ): TL$ITimelineEvents;
    hasEventListeners(type: string): boolean;
    removeEventListener(
      type: string,
      fn: () => void,
      context?: any
    ): TL$ITimelineEvents;
    fireEvent(type: string, data?: any): TL$ITimelineEvents;
    on(type: string, fn: () => void, context?: any): TL$ITimelineEvents;
    off(type: string, fn: () => void, context?: any): TL$ITimelineEvents;
    fire(type: string, data?: any): TL$ITimelineEvents;
  }

  declare export interface TL$ITimelineSlide {
    data: TL$ITimelineSlideData;
  }

  declare export interface TL$ITimelineConfig {
    events: TL$ITimelineSlideData[];
    title?: TL$ITimelineSlideData;
    eras?: TL$ITimelineEra[];
    scale?: "human" | "cosmological";
  }

  declare export interface TL$ITimelineSlideData {
    start_date?: TL$ITimelineDate;
    end_date?: TL$ITimelineDate;
    text?: TL$ITimelineText;
    media?: TL$ITimelineMedia;
    group?: string;
    display_date?: string;
    background?: {
      url?: string,
      color?: string
    };
    autolink?: boolean;
    unique_id?: string;
  }

  declare export interface TL$ITimelineEra {
    start_date: TL$ITimelineDate;
    end_date: TL$ITimelineDate;
    text?: TL$ITimelineText;
  }

  declare export interface TL$ITimelineDate {
    year: number;
    month?: number;
    day?: number;
    hour?: number;
    minute?: number;
    second?: number;
    millisecond?: number;
    display_date?: string;
  }

  declare export interface TL$ITimelineText {
    headline?: string;
    text?: string;
  }

  declare export interface TL$ITimelineMedia {
    url: string;
    caption?: string;
    credit?: string;
    thumbnail?: string;
  }

  declare export interface TL$ITimelineOptions {
    debug?: boolean;
    height?: number;
    width?: number;
    is_embed?: boolean;
    hash_bookmark?: boolean;
    default_bg_color?: string;
    scale_factor?: number;
    initial_zoom?: number;
    zoom_sequence?: number[];
    timenav_position?: "bottom" | "top";
    optimal_tick_width?: number;
    base_class?: string;
    timenav_height?: number;
    timenav_height_percentage?: number;
    timenav_mobile_height_percentage?: number;
    timenav_height_min?: number;
    marker_height_min?: number;
    marker_width_min?: number;
    marker_padding?: number;
    start_at_slide?: number;
    start_at_end?: boolean;
    menubar_height?: number;
    use_bc?: boolean;
    duration?: number;
    ease?: () => number;
    dragging?: boolean;
    trackResize?: boolean;
    slide_padding_lr?: number;
    slide_default_fade?: string;
    language?: string;
    ga_property_id?: any;
    track_events?: (
      | "back_to_start"
      | "nav_next"
      | "nav_previous"
      | "zoom_in"
      | "zoom_out"
    )[];
    script_path?: string;
  }
}
