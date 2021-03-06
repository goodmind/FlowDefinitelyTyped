declare module "google.feeds" {
  declare export class feeds$Feed {
    constructor(): this;
    constructor(url: string): this;
    findFeeds(query?: string, callback?: (result: findResult) => void): void;
    getElementsByTagNameNS(node: string, ns: string, localName: string): any[];
    includeHistoricalEntries(): void;
    load(callback?: (result: feedResult) => void): void;
    setNumEntries(num: number): void;
    setResultFormat(format: string): void;
  }
  declare interface feedResult {
    error?: feedError;
    xmlDocument?: string;
    feed: feedJSON;
  }
  declare interface findResult {
    error?: feedError;
    xmlDocument?: string;
    findEntries: findEntry[];
  }
  declare interface feedError {
    code: string;
    message: string;
  }
  declare interface feedJSON {
    feedURL: string;
    link: string;
    author: string;
    description: string;
    entries: feedEntry[];
  }
  declare interface feedEntry {
    mediaGroup: MediaGroup[];
    title: string;
    link: string;
    content: string;
    contentSnippet: string;
    publishedDate: string;
    categories: string[];
  }
  declare interface findEntry {
    title: string;
    link: string;
    contentSnippet: string;
    url: string;
  }
  declare interface MediaGroup {
    content: MediaContent[];
  }
  declare interface MediaContent {
    url: string;
    fileSize: number;
    type: string;
    medium: string;
    isDefault: boolean;
    expression: string;
    bitrate: number;
    framerate: number;
    samplingrate: number;
    channels: string;
    duration: number;
    height: number;
    width: number;
    lang: string;
  }
}
