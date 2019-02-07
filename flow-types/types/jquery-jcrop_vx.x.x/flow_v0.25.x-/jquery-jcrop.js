declare module "jquery-jcrop" {
  declare interface Jcrop$Options {
    /**
     * Aspect ratio of w/h (e.g. 1 for square)
     */
    aspectRatio?: number;

    /**
     * Minimum width/height, use 0 for unbounded dimension; [width, height]
     */
    minSize?: [number, number];

    /**
     * Maximum width/height, use 0 for unbounded dimension; [width, height]
     */
    maxSize?: [number, number];
    minSelect?: [number, number];

    /**
     * Set an initial selection area; [x, y, x2, y2]
     */
    setSelect?: [number, number, number, number];

    /**
     * Set color of background container @default 'black'
     */
    bgColor?: string;

    /**
     * Opacity of outer image when cropping; between 0 and 1 @default .6
     */
    bgOpacity?: number;
    baseClass?: string;
    addClass?: string;
    bgFade?: boolean;
    borderOpacity?: number;
    handleOpacity?: number;
    handleSize?: number | null;

    /**
     * Called when selection is completed
     */
    onSelect?: Jcrop$JCropEventHandler;

    /**
     * Called when the selection is moving
     */
    onChange?: Jcrop$JCropEventHandler;

    /**
     * Called when double-clicked
     */
    onDblClick?: Jcrop$JCropEventHandler;

    /**
     * Called when the selection is released
     */
    onRelease?: Jcrop$JCropEventHandler;

    /**
     * Maximum width of cropping area @default 0 (no limit)
     */
    boxWidth?: number;

    /**
     * Maximum height of cropping area @default 0 (no limit)
     */
    boxHeight?: number;
    boundary?: number;
    fadeTime?: number;
    animationDelay?: number;
    swingSpeed?: number;

    /**
     * Specify the true size of the image
     */
    trueSize?: [number, number];
    allowSelect?: boolean;
    allowMove?: boolean;
    allowResize?: boolean;
    trackDocument?: boolean;
    keySupport?: boolean;
    createHandles?: Array<
      Jcrop$CardinalDirection | Jcrop$IntermediateDirection
    >;
    createDragbars?: Jcrop$CardinalDirection[];
    createBorders?: Jcrop$CardinalDirection[];
    drawBorders?: boolean;
    dragEdges?: boolean;
    fixedSupport?: boolean;
    touchSupport?: boolean | null;
    shade?: boolean | null;
  }

  declare type Jcrop$CardinalDirection = "n" | "s" | "e" | "w";

  declare type Jcrop$IntermediateDirection = "nw" | "ne" | "se" | "sw";

  declare type Jcrop$JCropEventHandler = (c: Jcrop$SelectionInfo) => void;

  declare interface Jcrop$SelectionInfo {
    x: number;
    y: number;
    x2: number;
    y2: number;
    w: number;
    h: number;
  }

  declare interface Jcrop$Api {
    /**
     * Set selection, format: [ x,y,x2,y2 ]
     */
    setSelect: (selection: [number, number, number, number]) => void;

    /**
     * Animate selection to new selection, format: [ x,y,x2,y2 ]
     */
    animateTo: (selection: [number, number, number, number]) => void;

    /**
     * Release current selection
     */
    release: () => void;

    /**
     * Query current selection values (true size)
     */
    tellSelect: () => Jcrop$SelectionInfo;

    /**
     * Query current selection values (interface)
     */
    tellScaled: () => Jcrop$SelectionInfo;

    /**
     * Disables Jcrop interactivity
     */
    disable: () => void;

    /**
     * Enables Jcrop interactivity
     */
    enable: () => void;

    /**
     * Remove Jcrop entirely
     */
    remove: () => void;
  }
  declare interface JQuery {
    Jcrop(options?: JQuery$Jcrop.Jcrop$Options, callback?: () => void): JQuery;
  }
}
