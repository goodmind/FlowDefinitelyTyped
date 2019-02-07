declare interface localizer {
  to(offset: number): localizer;
  returnAs(as: string): localizer;
  localize(): string;
}
declare class ISO8601Localizer mixins localizer {
  constructor(userISO8601: string): this;
  to(offset: number): localizer;
  returnAs(as: string): localizer;
  localize(): string;
}
declare module "iso8601-localizer" {
  declare module.exports: typeof ISO8601Localizer;
}
