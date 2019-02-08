declare module "content-type" {
  declare var x: ContentType$ContentType$MediaTypeStatic;
  declare module.exports: typeof x;
}
declare interface ContentType$MediaType {
  type: string;
  q?: number;
  params: any;
  toString(): string;
}

declare interface ContentType$SelectOptions {
  sortAvailable?: boolean;
  sortAccepted?: boolean;
}

declare interface ContentType$MediaTypeStatic {
  new(s: string, p?: any): ContentType$MediaType;
  parseMedia(type: string): ContentType$MediaType;
  splitQuotedString(str: string, delimiter?: string, quote?: string): string[];
  splitContentTypes(str: string): string[];
  select(
    availableTypes: ContentType$MediaType[],
    acceptedTypes: ContentType$MediaType[],
    options?: ContentType$SelectOptions
  ): string;
  mediaCmp(a: ContentType$MediaType, b: ContentType$MediaType): number;
}
declare module "deoxxa-content-type" {
}
