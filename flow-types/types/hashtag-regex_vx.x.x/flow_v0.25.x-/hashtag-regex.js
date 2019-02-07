declare module "hashtag-regex" {
  declare function createRegExp(): RegExp;

  declare module.exports: typeof createRegExp;
}
