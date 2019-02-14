declare module "htmlescape" {
  declare function htmlescape(o: any): string;

  declare var npm$namespace$htmlescape: {
    sanitize: typeof htmlescape$sanitize
  };
  declare function htmlescape$sanitize(s: string): string;

  declare export default typeof htmlescape;
}
