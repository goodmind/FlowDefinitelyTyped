declare module "content-type" {
  declare export function parse(
    input: RequestLike | ResponseLike | string
  ): ParsedMediaType;

  declare export function format(obj: MediaType): string;

  declare export interface ParsedMediaType {
    type: string;
    parameters: {
      [key: string]: string
    };
  }
  declare export interface MediaType {
    type: string;
    parameters?: {
      [key: string]: string
    };
  }
  declare export interface RequestLike {
    headers: {
      [header: string]: string | string[] | void
    };
  }
  declare export interface ResponseLike {
    getHeader(name: string): number | string | string[] | void;
  }
}
