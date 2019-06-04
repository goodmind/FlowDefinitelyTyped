declare module "gulp-html-prettify" {
  declare interface GulpHtmlPrettifyOptions {
    indent_char?: string;
    indent_size?: number;
  }
  declare interface GulpHtmlPrettify {
    (options?: GulpHtmlPrettifyOptions): NodeJS$ReadWriteStream;
  }
  declare var gulpHtmlPrettify: GulpHtmlPrettify;
  declare export default typeof gulpHtmlPrettify;
}
