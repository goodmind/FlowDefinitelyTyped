declare module "gl-texture2d" {
  declare type GLenum = number;
  declare type InputType =
    | ImageData
    | HTMLCanvasElement
    | HTMLImageElement
    | HTMLVideoElement;
  declare interface RawObject {
    width: number;
    height: number;
    raw: ArrayBufferView | InputType | ImageBitmap;
  }
  declare class Texture {
    shape: [number, number];
    wrap: [GLenum, GLenum];
    magFilter: GLenum;
    minFilter: GLenum;
    mipSamples: GLenum;
    gl: WebGLRenderingContext;
    handle: WebGLTexture;
    format: GLenum;
    type: GLenum;
    bind(id?: number): number;
    dispose(): void;
    generateMipmap(): void;
    setPixels(
      data: InputType | RawObject | ndarray,
      offset?: [number, number],
      mipLevel?: GLenum
    ): void;
  }
  declare function texture2d(
    gl: WebGLRenderingContext,
    array: ndarray
  ): Texture;

  declare function texture2d(
    gl: WebGLRenderingContext,
    input: InputType | RawObject | [number, number],
    format?: GLenum,
    type?: GLenum
  ): Texture;

  declare module.exports: typeof texture2d;
}
