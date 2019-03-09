declare module "auto-bind" {
  declare interface autoBind$AutoBindOptions {
    include?: Array<string | RegExp>;
    exclude?: Array<string | RegExp>;
  }

  declare type autoBind$AutoBindFunction<selfT = { [key: string]: any }> = (
    self: selfT,
    options?: autoBind$AutoBindOptions
  ) => selfT;
  declare type AutoBindModule<selfT = { [key: string]: any }> = {
    react: autoBind$AutoBindFunction<selfT>
  } & autoBind$AutoBindFunction<selfT>;

  declare var autoBind: AutoBindModule<>;
  declare export default typeof autoBind;
}
