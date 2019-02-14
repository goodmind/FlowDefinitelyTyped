declare module "terminal-link" {
  declare export default typeof terminalLink;

  declare function terminalLink(
    text: string,
    url: string,
    options?: terminalLink$Options
  ): string;

  declare var npm$namespace$terminalLink: {
    isSupported: typeof terminalLink$isSupported
  };
  declare function terminalLink$isSupported(): boolean;

  declare interface terminalLink$Options {
    fallback?: (text: string, url: string) => string;
  }
}
