declare module "google-images" {
  declare module.exports: typeof GoogleImages;

  declare type GoogleImages$SearchImageSize =
    | "icon"
    | "small"
    | "medium"
    | "large"
    | "xlarge"
    | "xxlarge"
    | "huge";

  declare type GoogleImages$SearchImageType =
    | "clipart"
    | "face"
    | "lineart"
    | "news"
    | "photo";

  declare type GoogleImages$SearchDominantColor =
    | "black"
    | "blue"
    | "brown"
    | "gray"
    | "green"
    | "pink"
    | "purple"
    | "teal"
    | "white"
    | "yellow";

  declare type GoogleImages$SearchColorType = "color" | "gray" | "mono";

  declare type GoogleImages$SearchSafe = "high" | "medium" | "off";

  declare interface GoogleImages$SearchOptions {
    page?: number;
    size?: GoogleImages$SearchImageSize;
    type?: GoogleImages$SearchImageType;
    dominantColor?: GoogleImages$SearchDominantColor;
    colorType?: GoogleImages$SearchColorType;
    safe?: GoogleImages$SearchSafe;
  }

  declare interface GoogleImages$Image {
    url: string;
    type: string;
    width: number;
    height: number;
    size: number;
    thumbnail: {
      url: string,
      width: number,
      height: number
    };
  }
  declare class GoogleImages {
    constructor(engineId: string, apiKey: string): this;
    search(
      searchTerm: string,
      options?: GoogleImages$GoogleImages$SearchOptions
    ): Promise<GoogleImages$GoogleImages$Image[]>;
  }
}
