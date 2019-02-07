declare module "imagemin" {
  declare function imagemin(
    input: $ReadOnlyArray<string>,
    outputOrOptions?: string | imagemin$imagemin$Options
  ): Promise<imagemin$imagemin$Result[]>;

  declare function imagemin(
    input: $ReadOnlyArray<string>,
    output?: string,
    options?: imagemin$imagemin$Options
  ): Promise<imagemin$imagemin$Result[]>;

  declare var npm$namespace$imagemin: {
    buffer: typeof imagemin$buffer
  };
  declare type imagemin$Plugin = (input: Buffer) => Promise<Buffer>;

  declare interface imagemin$Options {
    plugins: $ReadOnlyArray<imagemin$Plugin>;
  }

  declare interface imagemin$Result {
    data: Buffer;
    path: string;
  }

  declare function imagemin$buffer(
    imagemin$buffer: Buffer,
    options?: imagemin$Options
  ): Promise<Buffer>;

  declare module.exports: typeof imagemin;
}
