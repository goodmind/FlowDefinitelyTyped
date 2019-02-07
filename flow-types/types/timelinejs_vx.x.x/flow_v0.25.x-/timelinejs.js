declare module "timelinejs" {
  declare function createStoryJS(
    config: knightlab$knightlab$ITimeLineConfiguration
  ): void;

  declare export interface knightlab$ITimeLineConfiguration {
    width: string;
    height: string;
    source: any;
    type?: string;
    embed_id?: string;
    start_at_end?: boolean;
    start_at_slide?: string;
    start_zoom_adjust?: string;
    hash_bookmark?: boolean;
    font?: string;
    debug?: boolean;
    lang?: string;
    css?: string;
    js?: string;
    gmap_key?: string;
    maptype?: string;
  }

  declare export interface knightlab$ITimelineModel {
    timeline: knightlab$ITimeLine;
  }

  declare export interface knightlab$ITimeLine {
    headline?: string;
    type?: string;
    text?: string;
    asset?: knightlab$ITimeLineAsset;
    date?: knightlab$ITimelineDate[];
    era?: knightlab$ITimelineEra[];
  }

  declare export interface knightlab$ITimeLineAsset {
    media: string;
    thumbnail?: string;
    credit: string;
    caption: string;
  }

  declare export type knightlab$ITimelineDate = {
    classname?: string,
    asset?: knightlab$ITimeLineAsset
  } & knightlab$ITimelineEra;

  declare export interface knightlab$ITimelineEra {
    startDate: string;
    endDate: string;
    headline: string;
    text: string;
    tag?: string;
  }
}
