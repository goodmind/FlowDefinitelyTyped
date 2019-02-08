declare type DomToImage$Options = Options_;

declare type DomToImage$DomToImage = DomToImage_;
declare module "global" {
  declare var DomToImage$DomToImage: DomToImage$DomToImage.DomToImage$DomToImage;
}
declare module "dom-to-image" {
  declare export interface DomToImage {
    toSvg(node: Node, options?: DomToImage$Options): Promise<string>;
    toPng(node: Node, options?: DomToImage$Options): Promise<string>;
    toJpeg(node: Node, options?: DomToImage$Options): Promise<string>;
    toBlob(node: Node, options?: DomToImage$Options): Promise<Blob>;
    toPixelData(node: Node, options?: DomToImage$Options): Promise<string>;
  }
  declare export interface Options {
    filter?: (node: Node) => boolean;
    bgcolor?: string;
    width?: number;
    height?: number;
    style?: {};
    quality?: number;
    imagePlaceholder?: string;
    cachebust?: boolean;
  }
  declare export var DomToImage$DomToImage: DomToImage$DomToImage;
  declare type DomToImage_ = DomToImage$DomToImage;
  declare type Options_ = DomToImage$Options;
  declare export default typeof DomToImage$DomToImage;
}
