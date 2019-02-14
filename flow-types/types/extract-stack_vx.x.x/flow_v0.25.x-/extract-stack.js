declare module "extract-stack" {
  declare export default typeof extractStack;

  declare function extractStack(input: Error | string | void): string;

  declare var npm$namespace$extractStack: {
    lines: typeof extractStack$lines
  };
  declare function extractStack$lines(input: Error | string | void): string[];
}
