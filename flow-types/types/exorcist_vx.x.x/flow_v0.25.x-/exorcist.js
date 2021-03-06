declare module "exorcist" {
  /**
   * Externalizes the source map found inside a stream to an external .map file.
   * Works with both JavaScript and CSS input streams
   * @param file full path to the map file to which to write the extracted source map
   * @param url full URL to the map file, set as sourceMappingURL in the streaming output (default: file)
   * @param root root URL for loading relative source paths, set as sourceRoot in the source map (default: "")
   * @param base base path for calculating relative source paths (default: use absolute paths)
   * @param errorOnMissing when truthy, causes 'error' to be emitted instead of 'missing-map' if no map was found in the stream (default: falsey)
   */
  declare function exorcist(
    file: string,
    url?: string,
    root?: string,
    base?: string,
    errorOnMissing?: boolean
  ): through.ThroughStream;

  declare module.exports: typeof exorcist;
}
