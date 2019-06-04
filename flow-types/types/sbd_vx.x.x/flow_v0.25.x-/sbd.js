declare module "sbd" {
  declare export interface Options {
    newline_boundaries?: boolean;
    html_boundaries?: boolean;
    sanitize?: boolean;
    allowed_tags?: false | string[];
    preserve_whitespace?: boolean;
    abbreviations?: string[];
  }
  declare export function sentences(text: string, options?: Options): string[];
}
