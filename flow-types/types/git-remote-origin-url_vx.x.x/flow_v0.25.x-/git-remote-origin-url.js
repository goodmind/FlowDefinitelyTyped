declare module "git-remote-origin-url" {
  declare function gitRemoteOriginUrl(cwd?: string): Promise<string>;

  declare module.exports: typeof gitRemoteOriginUrl;
}
