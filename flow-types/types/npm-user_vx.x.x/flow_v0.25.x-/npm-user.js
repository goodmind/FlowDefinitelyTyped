declare module "npm-user" {
  declare module.exports: typeof npmUser;

  declare function npmUser(name: string): Promise<npmUser$npmUser$UserData>;

  declare interface npmUser$UserData {
    name: string | null;
    avatar: string | null;
    email: string | null;
    github: string | null;
    twitter: string | null;
  }
}
