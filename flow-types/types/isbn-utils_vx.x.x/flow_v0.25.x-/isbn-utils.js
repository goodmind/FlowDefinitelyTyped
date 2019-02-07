declare module "isbn-utils" {
  declare export type IGroups = any;
  declare export class ISBNcodes {
    source: string;
    prefix: string;
    group: string;
    publisher: string;
    article: string;
    check: string;
    check10: string;
    check13: string;
    groupname: string;
  }
  declare export class ISBN {
    constructor(val: string, groups: IGroups): this;
    asIsbn10(hyphenate?: boolean): string;
    asIsbn13(hyphenate?: boolean): string;
    codes: ISBNcodes;
    isIsbn10(): boolean;
    isIsbn13(): boolean;
    isValid(): boolean;
  }
  declare export function asIsbn10(isbn: string, hyphenate?: boolean): string;

  declare export function asIsbn13(isbn: string, hyphenate?: boolean): string;

  declare export function parse(isbn: string, groups?: IGroups): ISBN | null;

  declare export function hyphenate(isbn: string): string;

  declare export function isValid(isbn: string, groups?: IGroups): boolean;
}
