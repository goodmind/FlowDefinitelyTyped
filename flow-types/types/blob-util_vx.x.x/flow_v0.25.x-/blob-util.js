declare module "blob-util" {
  /**
   * Shim for new Blob() to support older browsers that use the deprecated BlobBuilder API.
   * @param parts content of the Blob
   * @param options usually just `{ type: mimeType }`
   */
  declare export function createBlob(
    parts: any[],
    options?: {
      type: string
    }
  ): Blob;

  /**
   * Shim for URL.createObjectURL() to support browsers that only have the prefixed webkitURL (e.g. Android <4.4).
   */
  declare export function createObjectURL(blob: Blob): string;

  /**
   * Shim for URL.revokeObjectURL() to support browsers that only have the prefixed webkitURL (e.g. Android <4.4).
   */
  declare export function revokeObjectURL(url: string): void;

  /**
   * Convert a Blob to a binary string.
   */
  declare export function blobToBinaryString(blob: Blob): Promise<string>;

  /**
   * Convert a binary string to a Blob.
   * @param type the content type
   */
  declare export function binaryStringToBlob(
    binary: string,
    type?: string
  ): Promise<Blob>;

  /**
   * Convert a Blob to a base-64 string.
   */
  declare export function blobToBase64String(blob: Blob): Promise<string>;

  /**
   * Convert a base-64 string to a Blob.
   * @param type the content type
   */
  declare export function base64StringToBlob(
    base64: string,
    type?: string
  ): Promise<Blob>;

  /**
   * Convert a data URL string (e.g. `'data:image/png;base64,iVBORw0KG...'`) to a Blob.
   */
  declare export function dataURLToBlob(dataURL: string): Promise<Blob>;

  /**
   * Convert a Blob to a data URL string (e.g. `'data:image/png;base64,iVBORw0KG...'`).
   */
  declare export function blobToDataURL(blob: Blob): Promise<string>;

  /**
   * Convert an image's src URL to a data URL by loading the image and painting it to a canvas.
   *
   * Note: this will coerce the image to the desired content type, and it will only paint the first frame of an animated GIF.
   * @param type the content type (optional, defaults to 'image/png')
   * @param crossOrigin for CORS-enabled images, set this to 'Anonymous' to avoid "tainted canvas" errors
   * @param quality a number between 0 and 1 indicating image quality if the requested type is 'image/jpeg' or 'image/webp'
   */
  declare export function imgSrcToDataURL(
    src: string,
    type?: string,
    crossOrigin?: string,
    quality?: number
  ): Promise<string>;

  /**
   * Convert a canvas to a Blob.
   * @param type the content type (optional, defaults to 'image/png')
   * @param quality a number between 0 and 1 indicating image quality if the requested type is 'image/jpeg' or 'image/webp'
   */
  declare export function canvasToBlob(
    canvas: HTMLCanvasElement,
    type?: string,
    quality?: number
  ): Promise<Blob>;

  /**
   * Convert an image's src URL to a Blob by loading the image and painting it to a canvas.
   *
   * Note: this will coerce the image to the desired content type, and it will only paint the first frame of an animated GIF.
   * @param type the content type (optional, defaults to 'image/png')
   * @param crossOrigin for CORS-enabled images, set this to 'Anonymous' to avoid "tainted canvas" errors
   * @param quality a number between 0 and 1 indicating image quality if the requested type is 'image/jpeg' or 'image/webp'
   */
  declare export function imgSrcToBlob(
    src: string,
    type?: string,
    crossOrigin?: string,
    quality?: number
  ): Promise<Blob>;

  /**
   * Convert an ArrayBuffer to a Blob.
   * @param type the content type
   */
  declare export function arrayBufferToBlob(
    arrayBuff: ArrayBuffer,
    type?: string
  ): Promise<Blob>;

  /**
   * Convert a Blob to an ArrayBuffer.
   */
  declare export function blobToArrayBuffer(blob: Blob): Promise<ArrayBuffer>;
}
