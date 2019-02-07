declare module "mongo-sanitize" {
  declare export function sanitize<T: { [key: string]: any }>(v: T): T;
}
