declare module "Insert" {
}

declare var npm$namespace$Insert: {
  prepend: typeof Insert$prepend,
  append: typeof Insert$append,
  wrap: typeof Insert$wrap,
  transform: typeof Insert$transform
};

/**
 * Prepends a string onto the contents
 * @param {string} content
 * @returns {NodeJS.ReadWriteStream}
 */
declare function Insert$prepend(content: string): NodeJS.ReadWriteStream;

/**
 * Appends a string onto the contents
 * @param {string} content
 * @returns {NodeJS.ReadWriteStream}
 */
declare function Insert$append(content: string): NodeJS.ReadWriteStream;

/**
 * Wraps the contents with two strings
 * @param {string} prepend
 * @param {string} append
 * @returns {NodeJS.ReadWriteStream}
 */
declare function Insert$wrap(
  Insert$prepend: string,
  Insert$append: string
): NodeJS.ReadWriteStream;

/**
 * Calls a function with the contents of the file
 * @param {Transformer} transformer
 * @returns {NodeJS.ReadWriteStream}
 */
declare function Insert$transform(
  transformer: Transformer
): NodeJS.ReadWriteStream;
declare module "gulp-insert" {
  declare interface Transformer {
    (contents: string, file: File): string;
  }
  declare module.exports: typeof Insert;
}
