declare module "omit-empty" {
  declare interface OmitOptions {
    omitZero?: boolean;
  }
  declare function omitEmpty(
    obj: { [key: string]: any },
    options?: OmitOptions
  ): { [key: string]: any };

  declare export default typeof omitEmpty;
}
