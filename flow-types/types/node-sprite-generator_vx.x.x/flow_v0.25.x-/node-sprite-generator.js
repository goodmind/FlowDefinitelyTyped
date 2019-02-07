declare module "node-sprite-generator" {
  import typeof * as e from "express";

  declare module.exports: typeof NodeSpriteGenerator;

  declare function NodeSpriteGenerator(
    option: NodeSpriteGenerator$NodeSpriteGenerator$Option,
    callback?: (err: Error) => void
  ): void;

  declare var npm$namespace$NodeSpriteGenerator: {
    middleware: typeof NodeSpriteGenerator$middleware
  };
  declare type NodeSpriteGenerator$BuiltinStylesheetFormats =
    | "stylus"
    | "less"
    | "sass"
    | "scss"
    | "css"
    | "prefixed-css"
    | "javascript";

  declare type NodeSpriteGenerator$BuiltinLayouts =
    | "packed"
    | "vertical"
    | "horizontal"
    | "diagonal";

  declare type NodeSpriteGenerator$BuiltinCompositors =
    | "canvas"
    | "gm"
    | "jimp";

  declare interface NodeSpriteGenerator$StylesheetOption {
    prefix?: string;
    nameMapping?: () => string;
    spritePath?: string;
    pixelRatio?: number;
  }

  declare interface NodeSpriteGenerator$LayoutOption {
    padding?: number;
    scaling?: number;
  }

  declare type NodeSpriteGenerator$CompositorFilters =
    | "all"
    | "none"
    | "sub"
    | "up"
    | "average"
    | "paeth";

  declare interface NodeSpriteGenerator$CompositorOption {
    compressionLevel?: number;
    filter?: NodeSpriteGenerator$CompositorFilters;
  }

  declare interface NodeSpriteGenerator$Image {
    width: number;
    height: number;
    data: any;
  }

  declare interface NodeSpriteGenerator$Compositor {
    readImages(
      files: string[],
      callback: (error: Error, images: NodeSpriteGenerator$Image[]) => void
    ): void;
    render(
      layout: NodeSpriteGenerator$Layout,
      spritePath: string,
      options: NodeSpriteGenerator$CompositorOption,
      callback: (error: Error) => void
    ): void;
  }

  declare interface NodeSpriteGenerator$Layout {
    width: number;
    height: number;
    images: Array<
      {
        x: number,
        y: number
      } & NodeSpriteGenerator$Image
    >;
  }

  declare type NodeSpriteGenerator$LayoutFunc = (
    images: NodeSpriteGenerator$Image[],
    options: NodeSpriteGenerator$LayoutOption,
    callback: (error: Error, layout: NodeSpriteGenerator$Layout) => void
  ) => void;

  declare type NodeSpriteGenerator$StylesheetFunc = (
    layout: NodeSpriteGenerator$Layout,
    stylesheetPath: string,
    spritePath: string,
    options: NodeSpriteGenerator$StylesheetOption,
    callback: (error: Error) => void
  ) => void;

  declare interface NodeSpriteGenerator$Option {
    src?: string[];
    spritePath?: string;
    stylesheetPath?: string;
    stylesheet?:
      | NodeSpriteGenerator$BuiltinStylesheetFormats
      | NodeSpriteGenerator$StylesheetFunc
      | string;
    stylesheetOptions?: NodeSpriteGenerator$StylesheetOption;
    layout?:
      | NodeSpriteGenerator$BuiltinLayouts
      | NodeSpriteGenerator$LayoutFunc;
    layoutOptions?: NodeSpriteGenerator$LayoutOption;
    compositor?:
      | NodeSpriteGenerator$BuiltinCompositors
      | NodeSpriteGenerator$Compositor;
    compositorOptions?: NodeSpriteGenerator$CompositorOption;
  }

  declare function NodeSpriteGenerator$middleware(
    option: NodeSpriteGenerator$Option
  ): e.RequestHandler;
}
