declare module "temp-write" {
  declare module.exports: typeof tempWrite;

  declare function tempWrite(
    input: string | Buffer | NodeJS.ReadableStream,
    filepath?: string
  ): Promise<string>;

  declare var npm$namespace$tempWrite: {
    sync: typeof tempWrite$sync
  };
  declare function tempWrite$sync(
    input: string | Buffer,
    filepath?: string
  ): string;
}
