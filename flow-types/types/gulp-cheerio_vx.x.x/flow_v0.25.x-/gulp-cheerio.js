declare module "gulp-cheerio" {
  declare interface cheerio$Cheerio {
    (callback: cheerio$Callback): NodeJS.ReadWriteStream;
    (option: cheerio$Option): NodeJS.ReadWriteStream;
  }

  declare interface cheerio$Callback {
    ($: CheerioStatic, file: Vinyl, done?: Function): any;
  }

  declare interface cheerio$Option {
    run?: cheerio$Callback;
    parserOptions?: CheerioOptionsInterface;
    cheerio?: CheerioStatic;
  }
  declare var cheerio: cheerio$cheerio$Cheerio;
  declare module.exports: typeof cheerio;
}
