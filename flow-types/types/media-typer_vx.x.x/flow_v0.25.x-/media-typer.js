declare module "media-typer" {
  declare export function parse(mediaType: string): MediaType;

  declare export function format(mediaTypeDescriptor: MediaType): string;

  declare export interface MediaType {
    type: string;
    subtype: string;
    suffix?: string;
  }
}
