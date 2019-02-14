declare module "uuid-validate" {
  declare function validate(uuid: string, version?: number): boolean;

  declare var npm$namespace$validate: {
    version: typeof validate$version
  };
  declare function validate$version(uuid: string): number;

  declare export default typeof validate;
}
