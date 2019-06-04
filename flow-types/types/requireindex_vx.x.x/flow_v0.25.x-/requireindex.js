declare module "requireindex" {
  declare function requireindex(
    path: string,
    basenames?: $ReadOnlyArray<string>
  ): {
    [filename: string]: any
  };

  declare export default typeof requireindex;
}
