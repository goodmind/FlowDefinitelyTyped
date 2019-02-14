declare module "deprecate" {
  declare var npm$namespace$deprecate: {
    color: typeof deprecate$color,
    silence: typeof deprecate$silence,
    stream: typeof deprecate$stream
  };

  /**
   * Set to false to not output a color. Defaults to '\x1b[31;1m' which is red.
   */
  declare var deprecate$color: string;

  /**
   * Set to false to do nothing at all when the deprecate method is called. Useful in tests of the library you're deprecating things within.
   */
  declare var deprecate$silence: boolean;

  /**
   * The stream to which output is written. Defaults to process.stderr
   */
  declare var deprecate$stream: NodeJS.WriteStream;

  /**
   * Call deprecate within a function you are deprecating.
   *
   * It will spit out all the messages to the console the first time and only the first time the method is called.
   */
  declare function deprecate(methodName: string, ...message: string[]): void;

  declare export default typeof deprecate;
}
