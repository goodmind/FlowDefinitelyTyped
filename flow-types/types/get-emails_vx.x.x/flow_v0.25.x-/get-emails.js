declare module "get-emails" {
  declare module.exports: typeof getEmails;

  declare function getEmails(text: string): Set<string>;
}
