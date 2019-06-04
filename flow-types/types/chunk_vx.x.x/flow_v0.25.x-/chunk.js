declare module "chunk" {
  declare function chunk<T>(array: ArrayLike<T>, size?: number): T[][];

  declare export default typeof chunk;
}
