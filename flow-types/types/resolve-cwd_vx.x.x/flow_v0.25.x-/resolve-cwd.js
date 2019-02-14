declare module "resolve-cwd" {
  declare export default typeof resolveCwd;

  declare function resolveCwd(moduleId: string): string;

  declare var npm$namespace$resolveCwd: {
    silent: typeof resolveCwd$silent
  };
  declare function resolveCwd$silent(moduleId: string): string | null;
}
