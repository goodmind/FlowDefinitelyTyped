declare module "mongoose" {
  declare type Model<T: Document> = {
    findRandom(
      conditions: Object,
      projection?: Object | null,
      options?: Object | null,
      callback?: (err: any, res?: T[]) => void
    ): void
  } & NodeJS.EventEmitter &
    ModelProperties;
}
declare module "mongoose-simple-random" {
  declare function pluginFunc(schema: mongoose.Schema): void;

  declare module.exports: typeof pluginFunc;
}
