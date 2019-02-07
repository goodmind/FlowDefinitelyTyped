declare module "domready" {
  declare function domready(callback: () => void): void;

  declare module.exports: typeof domready;
}
