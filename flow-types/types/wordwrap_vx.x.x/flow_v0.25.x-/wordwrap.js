declare module "wordwrap" {
  declare type Wrap = (text: string) => string;

  /**
   * Wrap lines until column `stop`. If a word is longer than `stop` characters
   * it will overflow.
   */
  declare function wordwrap(
    stop: number,
    params?: {
      mode?: wordwrap$Mode
    }
  ): Wrap;

  /**
   * Pad out lines with spaces out to column `start` and then wrap until column
   * `stop`. If a word is longer than `stop - start` characters it will overflow.
   */
  declare function wordwrap(
    start: number,
    stop: number,
    params?: {
      mode?: wordwrap$Mode
    }
  ): Wrap;

  /**
   * Pad out lines with spaces out to column `start` and then wrap until column
   * `stop`. If a word is longer than `stop - start` characters it will overflow.
   */
  declare function wordwrap(params: wordwrap$Options): Wrap;

  declare var wordwrap: typeof npm$namespace$wordwrap;

  declare var npm$namespace$wordwrap: {
    hard: typeof wordwrap$hard
  };
  declare interface wordwrap$Options {
    stop: number;
    start: number;
    mode?: wordwrap$Mode;
  }

  /**
   * Wrap lines until column `stop`. Break up chunks longer than `stop`.
   */
  declare function wordwrap$hard(stop: number): Wrap;

  /**
   * Wrap lines until column `stop`. Break up chunks longer than `stop - start`.
   */
  declare function wordwrap$hard(start: number, stop: number): Wrap;

  /**
   * In "soft" mode, split chunks by `/(\S+\s+/` and don't break up chunks
   * which are longer than `stop - start`, in "hard" mode, split chunks with
   * `/\b/` and break up chunks longer than `stop - start`.
   */
  declare type wordwrap$Mode = "soft" | "hard";
  declare export default typeof wordwrap;
}
