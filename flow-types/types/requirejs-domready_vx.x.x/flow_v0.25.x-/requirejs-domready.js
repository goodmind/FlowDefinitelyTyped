declare module "requirejs-domready" {
  declare interface DomReady {
    (callback: () => any): DomReady;
    version: string;
  }
  declare var domReady: DomReady;
  declare module.exports: typeof domReady;
}
