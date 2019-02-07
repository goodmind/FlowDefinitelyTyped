declare module "content-range" {
  declare export interface ContentRangeFormatOptions {
    first?: number;
    last?: number;
    length: number | null;
    limit?: number;
    unit: string;
  }
  declare export interface ContentRangeParts {
    first: number | null;
    last: number | null;
    length: number | null;
    unit: string;
  }
  declare export function format(options: ContentRangeFormatOptions): string;

  declare export function parse(str: string): ContentRangeParts | null;
}
