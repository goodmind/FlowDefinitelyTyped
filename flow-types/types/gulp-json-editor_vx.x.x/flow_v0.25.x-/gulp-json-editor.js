declare module "gulp-json-editor" {
  declare interface JEditor {
    (
      mergeWith: any | ((json: any) => any),
      jsBeautifyOptions?: JsBeautifyOptions
    ): NodeJS.ReadWriteStream;
  }
  declare var jeditor: JEditor;
  declare module.exports: typeof jeditor;
}
