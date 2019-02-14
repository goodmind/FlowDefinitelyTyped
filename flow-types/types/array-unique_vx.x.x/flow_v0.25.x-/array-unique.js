declare module "array-unique" {
  declare function arrayUnique<T>(arr: T[]): T[];

  declare var npm$namespace$arrayUnique: {
    immutable: typeof arrayUnique$immutable
  };
  declare function arrayUnique$immutable<T>(arr: $ReadOnlyArray<T>): T[];

  declare export default typeof arrayUnique;
}
