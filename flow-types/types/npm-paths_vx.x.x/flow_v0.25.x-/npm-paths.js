declare module "npm-paths" {
  declare export default typeof npmPaths;

  declare function npmPaths(
    cwd?:
      | string
      | {
          cwd: string
        }
  ): string[];
}
