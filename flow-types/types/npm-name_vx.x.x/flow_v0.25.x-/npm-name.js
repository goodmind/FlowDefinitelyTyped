declare module "npm-name" {
  declare module.exports: typeof npmName;

  declare function npmName(name: string): Promise<boolean>;

  declare var npm$namespace$npmName: {
    many: typeof npmName$many
  };
  declare function npmName$many<T: string>(
    names: T[]
  ): Promise<Map<T, boolean>>;
}
