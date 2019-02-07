declare module "on-change" {
  declare module.exports: typeof onChange;

  declare function onChange<T: { [key: string]: any }>(
    object: T,
    onChange: () => void
  ): T;
}
