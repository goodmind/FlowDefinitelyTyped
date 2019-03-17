declare module "offscreencanvas" {
  declare interface CanvasDrawImage {
    drawImage(
      image: CanvasImageSource | OffscreenCanvas,
      dx: number,
      dy: number
    ): void;
    drawImage(
      image: CanvasImageSource | OffscreenCanvas,
      dx: number,
      dy: number,
      dw: number,
      dh: number
    ): void;
    drawImage(
      image: CanvasImageSource | OffscreenCanvas,
      sx: number,
      sy: number,
      sw: number,
      sh: number,
      dx: number,
      dy: number,
      dw: number,
      dh: number
    ): void;
  }
  declare function createImageBitmap(
    image: ImageBitmapSource | OffscreenCanvas
  ): Promise<ImageBitmap>;

  declare function createImageBitmap(
    image: ImageBitmapSource | OffscreenCanvas,
    sx: number,
    sy: number,
    sw: number,
    sh: number
  ): Promise<ImageBitmap>;

  declare type HTMLCanvasElement = {
    transferControlToOffscreen(): OffscreenCanvas
  } & HTMLElement;

  declare type OffscreenCanvasRenderingContext2D = {
    +canvas: OffscreenCanvas
  } & CanvasState &
    CanvasTransform &
    CanvasCompositing &
    CanvasImageSmoothing &
    CanvasFillStrokeStyles &
    CanvasShadowStyles &
    CanvasFilters &
    CanvasRect &
    CanvasDrawPath &
    CanvasText &
    CanvasDrawImage &
    CanvasImageData &
    CanvasPathDrawingStyles &
    CanvasTextDrawingStyles &
    CanvasPath;

  declare var OffscreenCanvasRenderingContext2D: {
    prototype: OffscreenCanvasRenderingContext2D,
    new(): OffscreenCanvasRenderingContext2D
  };
  declare type OffscreenCanvas = {
    width: number,
    height: number,
    getContext(
      contextId: "2d",
      contextAttributes?: CanvasRenderingContext2DSettings
    ): OffscreenCanvasRenderingContext2D | null,
    getContext(
      contextId: "webgl",
      contextAttributes?: WebGLContextAttributes
    ): WebGLRenderingContext | null,
    getContext(
      contextId: string,
      contextAttributes?: {}
    ): OffscreenCanvasRenderingContext2D | WebGLRenderingContext | null,
    transferToImageBitmap(): ImageBitmap,
    convertToBlob(options?: {
      type?: string,
      quality?: number
    }): Promise<Blob>
  } & EventTarget;

  declare var OffscreenCanvas: {
    prototype: OffscreenCanvas,
    new(width: number, height: number): OffscreenCanvas
  };
}
