declare module "global" {
  declare class FontFace {
    constructor(
      family: string,
      source: string | BinaryData,
      descriptors?: FontFaceDescriptors
    ): this;
    load(): Promise<FontFace>;
    family: string;
    style: string;
    weight: string;
    stretch: string;
    unicodeRange: string;
    variant: string;
    featureSettings: string;
    variationSettings: string;
    display: string;
    status: FontFaceLoadStatus;
    loaded: Promise<FontFace>;
  }
  declare interface Document {
    fonts: FontFaceSet;
  }
}
declare module "css-font-loading-module" {
  declare export type FontFaceLoadStatus =
    | "unloaded"
    | "loading"
    | "loaded"
    | "error";
  declare export type FontFaceSetLoadStatus = "loading" | "loaded";
  declare export type BinaryData = ArrayBuffer | ArrayBufferView;
  declare export type EventHandler = (event: Event) => void;
  declare export interface FontFaceDescriptors {
    style?: string;
    weight?: string;
    stretch?: string;
    unicodeRange?: string;
    variant?: string;
    featureSettings?: string;
  }
  declare export type FontFaceSet = {
    onloading: EventHandler,
    onloadingdone: EventHandler,
    onloadingerror: EventHandler,
    load(font: string, text?: string): Promise<FontFace[]>,
    check(font: string, text?: string): boolean,
    +ready: Promise<FontFaceSet>,
    +status: FontFaceSetLoadStatus
  } & Set<FontFace>;
}
