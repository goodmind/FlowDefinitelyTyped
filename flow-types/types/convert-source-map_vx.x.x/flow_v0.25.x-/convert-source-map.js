declare module "convert-source-map" {
  /**
   * Converts a source-map from/to different formats and allows adding/changing properties.
   * (documentation based on project's README file)
   */
  declare export interface SourceMapConverter {
    /**
     * The parsed sourcemap object
     */
    sourcemap: any;

    /**
     * Returns a copy of the underlying source map
     */
    toObject(): any;

    /**
     * Converts source map to json string. If space is given (optional), this will be passed to JSON.stringify when the JSON string is generated
     */
    toJSON(space?: string | number): string;

    /**
     * Converts source map to base64 encoded json string
     */
    toBase64(): string;

    /**
     * Converts source map to an inline comment that can be appended to the source-file.
     * By default, the comment is formatted like: //# sourceMappingURL=..., which you would normally see in a JS source file.
     * When options.multiline == true, the comment is formatted like: /*# sourceMappingURL=... *\/, which you would find in a CSS source file
     */
    toComment(options?: {
      multiline?: boolean
    }): string;

    /**
     * Adds given property to the source map. Throws an error if property already exists
     */
    addProperty(key: string, value: any): SourceMapConverter;

    /**
     * Sets given property to the source map. If property doesn't exist it is added, otherwise its value is updated
     */
    setProperty(key: string, value: any): SourceMapConverter;

    /**
     * Gets given property of the source map
     */
    getProperty(key: string): any;
  }

  /**
   * Returns source map converter from given object
   */
  declare export function fromObject(obj: any): SourceMapConverter;

  /**
   * Returns source map converter from given json string
   */
  declare export function fromJSON(json: string): SourceMapConverter;

  /**
   * Returns source map converter from given base64 encoded json string
   */
  declare export function fromBase64(base64: string): SourceMapConverter;

  /**
   * Returns source map converter from given base64 encoded json string prefixed with //# sourceMappingURL=...
   */
  declare export function fromComment(comment: string): SourceMapConverter;

  /**
   * Returns source map converter from given filename by parsing //# sourceMappingURL=filename.
   * filename must point to a file that is found inside the mapFileDir. Most tools store this file right next to the generated file, i.e. the one containing the source map.
   */
  declare export function fromMapFileComment(
    comment: string,
    commentFileDir: string
  ): SourceMapConverter;

  /**
   * Finds last sourcemap comment in file and returns source map converter or returns null if no source map comment was found.
   */
  declare export function fromSource(
    content: string
  ): SourceMapConverter | null;

  /**
   * Finds last sourcemap comment in file and returns source map converter or returns null if no source map comment was found.
   * The sourcemap will be read from the map file found by parsing # sourceMappingURL=file comment. For more info see fromMapFileComment.
   */
  declare export function fromMapFileSource(
    content: string,
    commentFileDir: string
  ): SourceMapConverter | null;

  /**
   * Returns src with all source map comments removed
   */
  declare export function removeComments(src: string): string;

  /**
   * Returns src with all source map comments pointing to map files removed
   */
  declare export function removeMapFileComments(src: string): string;

  /**
   * Returns a new regex used to find source map comments
   */
  declare export var commentRegex: RegExp;

  /**
   * Returns a new regex used to find source map comments pointing to map files
   */
  declare export var mapFileCommentRegex: RegExp;

  /**
   * Returns a comment that links to an external source map via file.
   * By default, the comment is formatted like: //# sourceMappingURL=..., which you would normally see in a JS source file.
   * When options.multiline == true, the comment is formatted like: /*# sourceMappingURL=... *\/, which you would find in a CSS source file.
   */
  declare export function generateMapFileComment(
    file: string,
    options?: {
      multiline?: boolean
    }
  ): string;
}
