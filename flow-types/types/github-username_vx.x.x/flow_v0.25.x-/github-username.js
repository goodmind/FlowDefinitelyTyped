declare module "github-username" {
  declare module.exports: typeof githubUsername;

  declare function githubUsername(
    email: string,
    token: string
  ): Promise<string>;
}
