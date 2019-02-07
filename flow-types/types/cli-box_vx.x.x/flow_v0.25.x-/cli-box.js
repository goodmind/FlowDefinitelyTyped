declare module "cli-box" {
  declare module.exports: typeof Box;

  declare type MarksKeys =
    | "nw"
    | "n"
    | "ne"
    | "e"
    | "se"
    | "s"
    | "sw"
    | "w"
    | "b";
  declare type Marks = Record<MarksKeys, string>;
  declare interface Options {
    w?: number;
    width?: number;
    h?: number;
    height?: number;
    fullscreen?: boolean;
    stringify?: boolean;
    marks?: $Shape<Marks>;
  }
  declare interface Text {
    text?: string;
    stretch?: boolean;
    autoEOL?: boolean;
    hAlign?: "left" | "middle" | "right";
    vAlign?: "top" | "center" | "bottom";
  }
  declare interface Box {
    stringify(): string;
    settings: {
      width: number,
      height: number,
      marks: Marks,
      lines: Array<{
        text: string,
        offset: {
          y: number
        }
      }>
    };
    options: {
      width: number,
      height: number,
      marks: Marks,
      fullscreen: boolean,
      stringify: boolean
    };
  }
  declare interface BoxConstructor {
    new(options: Options | string, text?: Text | string): Box;
    (
      options: Exclude<Options, "stringify"> & {
        stringify: true
      },
      text?: Text | string
    ): string;
    (options: Options | string, text?: Text | string): Box;
    defaults: {
      marks: Marks
    };
  }
  declare var Box: BoxConstructor;
}
