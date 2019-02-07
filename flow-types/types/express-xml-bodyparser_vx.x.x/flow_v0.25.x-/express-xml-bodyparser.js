declare module "express-xml-bodyparser" {
  import type { Handler } from "express";

  import type { Options as XmlParserOptions } from "xml2js";

  declare function xmlparser(options?: XmlParserOptions): Handler;

  declare var npm$namespace$xmlparser: {
    regexp: typeof xmlparser$regexp
  };
  declare var xmlparser$regexp: RegExp;
  declare module.exports: typeof xmlparser;
}
