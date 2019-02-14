declare module "npm-user" {
  declare export default typeof npmUser;

  declare function npmUser(name: string): Promise<npmUser$UserData>;

  declare interface npmUser$UserData {
    name: string | null;
    avatar: string | null;
    email: string | null;
    github: string | null;
    twitter: string | null;
  }
}
