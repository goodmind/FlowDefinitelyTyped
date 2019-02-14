declare module "npm-email" {
  declare export default typeof npmEmail;

  /**
   * Get the email of an npm user.
   * @param username npm username to look up.
   * @returns A promise for the user's email address.
   */
  declare function npmEmail(username: string): Promise<string>;
}
