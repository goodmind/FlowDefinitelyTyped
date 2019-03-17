declare module "trim-newlines" {
  declare function trimNewlines(input: string): string;

  declare var trimNewlines: typeof npm$namespace$trimNewlines;

  declare var npm$namespace$trimNewlines: {
    start: typeof trimNewlines$start,
    end: typeof trimNewlines$end
  };
  declare function trimNewlines$start(input: string): string;

  declare function trimNewlines$end(input: string): string;

  declare export default typeof trimNewlines;
}
