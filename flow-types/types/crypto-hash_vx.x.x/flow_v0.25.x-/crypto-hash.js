declare module "crypto-hash" {
  declare export function sha1(
    buffer: string | ArrayBuffer | ArrayBufferView,
    options?: OptionsHexOutput
  ): Promise<string>;

  declare export function sha1(
    buffer: string | ArrayBuffer | ArrayBufferView,
    options: OptionBufferOutput
  ): Promise<ArrayBuffer>;

  declare export function sha256(
    buffer: string | ArrayBuffer | ArrayBufferView,
    options?: OptionsHexOutput
  ): Promise<string>;

  declare export function sha256(
    buffer: string | ArrayBuffer | ArrayBufferView,
    options: OptionBufferOutput
  ): Promise<ArrayBuffer>;

  declare export function sha384(
    buffer: string | ArrayBuffer | ArrayBufferView,
    options?: OptionsHexOutput
  ): Promise<string>;

  declare export function sha384(
    buffer: string | ArrayBuffer | ArrayBufferView,
    options: OptionBufferOutput
  ): Promise<ArrayBuffer>;

  declare export function sha512(
    buffer: string | ArrayBuffer | ArrayBufferView,
    options?: OptionsHexOutput
  ): Promise<string>;

  declare export function sha512(
    buffer: string | ArrayBuffer | ArrayBufferView,
    options: OptionBufferOutput
  ): Promise<ArrayBuffer>;

  declare export interface OptionsHexOutput {
    outputFormat?: "hex";
  }
  declare export interface OptionBufferOutput {
    outputFormat: "buffer";
  }
}
