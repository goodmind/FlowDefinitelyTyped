declare module "merge-images" {
  declare module.exports: typeof mergeImages;

  declare function mergeImages(
    sources: mergeImages$mergeImages$ImageSource[],
    options?: mergeImages$mergeImages$Options
  ): Promise<string>;

  declare type mergeImages$ImageSource =
    | string
    | {
        src: string,
        x?: number,
        y?: number,
        opacity?: number
      };

  declare interface mergeImages$Options {
    format?: string;
    quality?: number;
    width?: number;
    height?: number;
    Canvas?: any;
  }
}
