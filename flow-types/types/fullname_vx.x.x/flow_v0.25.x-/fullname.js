declare module "fullname" {
  declare function fullname(): Promise<string>;

  declare module.exports: typeof fullname;
}
