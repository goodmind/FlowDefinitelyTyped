declare module "base64topdf" {
  declare export function base64Encode(file: string): void;

  declare export function base64Decode(base64str: string, file: string): void;

  declare export function rtfToText(rtfStr: string): string;

  declare export function textToRtf(textStr: string): string;

  declare export function strToBase64(str: string): string;

  declare export function base64ToStr(base64Str: string): string;
}
