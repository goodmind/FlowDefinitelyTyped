declare module "hash-file" {
  declare export default typeof hash_file;

  declare function hash_file(src: string): Promise<string>;

  declare var npm$namespace$hash_file: {
    sync: typeof hash_file$sync
  };
  declare function hash_file$sync(src: string): string;
}
