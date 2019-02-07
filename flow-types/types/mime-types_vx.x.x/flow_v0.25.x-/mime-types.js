declare module "mime-types" {
  declare export function lookup(filenameOrExt: string): string | false;

  declare export function contentType(filenameOrExt: string): string | false;

  declare export function extension(typeString: string): string | false;

  declare export function charset(typeString: string): string | false;

  declare export var types: {
    [key: string]: string
  };
  declare export var extensions: {
    [key: string]: string[]
  };
}
