declare module "detect-newline" {
  declare export default typeof detectNewline;

  declare function detectNewline(str: string): "\r\n" | "\n" | null;

  declare var npm$namespace$detectNewline: {
    graceful: typeof detectNewline$graceful
  };
  declare function detectNewline$graceful(str: string): "\r\n" | "\n";
}
