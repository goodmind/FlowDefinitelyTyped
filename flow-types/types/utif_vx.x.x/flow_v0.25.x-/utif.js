declare module "utif" {
  declare export type TiffTag = string[] | number[];

  /**
   * Each IFD is an object, keys are "tXYZ" (XYZ is a TIFF tag number), values are values of these tags.
   * You can get the the dimension (and other properties, "metadata") of the image without decompressing pixel data.
   * For more information on what each tag means, refer https://github.com/photopea/UTIF.js/blob/master/UTIF.js#L742 or TIFF 6 specification.
   */
  declare export interface IFD {
    [property: string]: TiffTag | number | Uint8Array;
    data: Uint8Array;
    width: number;
    height: number;
  }

  /**
   * Returns an array of "IFDs" (image file directories).
   * @param buffer A Buffer or ArrayBuffer containing TIFF or EXIF data.
   */
  declare export function decode(buffer: Buffer | ArrayBuffer): IFD[];

  /**
   * If there is an image inside the IFD, it is decoded and three new properties are added to the IFD: width, height and data.
   * Note: TIFF files may have various number of channels and various color depth. The interpretation of data depends on many tags (see the TIFF 6 specification).
   * @param buffer A Buffer or ArrayBuffer containing TIFF or EXIF data
   * @param ifd The element of the output of UTIF.decode()
   */
  declare export function decodeImage(
    buffer: Buffer | ArrayBuffer,
    ifd: IFD
  ): void;

  /**
   * Returns Uint8Array of the image in RGBA format, 8 bits per channel (ready to use in context2d.putImageData() etc.)
   * @param ifd An image file directory
   */
  declare export function toRGBA8(ifd: IFD): Uint8Array;

  /**
   * Returns an ArrayBuffer of the binary TIFF file.
   * Note: No compression available right now.
   * @param rgba A Uint8Array containing RGBA pixel data.
   * @param w Width of the image.
   * @param h Height of the image.
   * @param metadata [optional] The image file directory which should be encoded.
   */
  declare export function encodeImage(
    rgba: Uint8Array,
    w: number,
    h: number,
    metadata?: IFD
  ): ArrayBuffer;

  /**
   * Returns ArrayBuffer of binary data which can be used to encode EXIF data.
   * @param ifds The array of IFDs (image file directories) to be encoded.
   */
  declare export function encode(ifds: IFD[]): ArrayBuffer;

  /**
   * Replaces all Image elements in the document with Canvas elements.
   * The attributes "id", "class" and "style" will be copied from the original Image to the new Canvas.
   */
  declare export function replaceIMG(): void;
}
