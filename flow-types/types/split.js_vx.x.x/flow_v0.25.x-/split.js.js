declare module "split.js" {
  declare module.exports: typeof Split;

  declare function Split(
    elements: Array<string | HTMLElement>,
    options?: Split$Split$Options
  ): Split$Split$Instance;

  declare type Split$Partial<T> = $ObjMapi<T, <P>(P) => $ElementType<T, P>>;

  declare type Split$CSSStyleDeclarationPartial = $Shape<CSSStyleDeclaration>;

  declare interface Split$Options {
    sizes?: number[];
    minSize?: number | number[];
    gutterSize?: number;
    snapOffset?: number;
    direction?: "horizontal" | "vertical";
    cursor?: "col-resize" | "row-resize";
    onDrag?: () => void;
    onDragStart?: () => void;
    onDragEnd?: () => void;
    gutter?: (
      index: number,
      direction: "horizontal" | "vertical"
    ) => HTMLElement;
    elementStyle?: (
      dimension: "width" | "height",
      elementSize: number,
      gutterSize: number
    ) => Split$CSSStyleDeclarationPartial;
    gutterStyle?: (
      dimension: "width" | "height",
      gutterSize: number
    ) => Split$CSSStyleDeclarationPartial;
  }

  declare interface Split$Instance {
    setSizes(sizes: number[]): void;
    getSizes(): number[];
    collapse(index: number): void;
    destroy(): void;
  }
}
