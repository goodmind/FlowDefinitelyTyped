declare module "safe-json-stringify" {
  declare var npm$namespace$safeJsonStringify: {
    ensureProperties: typeof safeJsonStringify$ensureProperties
  };
  declare function safeJsonStringify$ensureProperties(
    obj: any
  ): { [key: string]: any };

  declare function safeJsonStringify(data: { [key: string]: any }): string;

  declare module.exports: typeof safeJsonStringify;
}
