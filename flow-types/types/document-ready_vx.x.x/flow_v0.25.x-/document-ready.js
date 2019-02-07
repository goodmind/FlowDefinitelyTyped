declare module "document-ready" {
  declare function ready(callback: () => void): void;

  declare module.exports: typeof ready;
}
