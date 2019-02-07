declare module "anybar" {
  declare function anybar(
    color: string,
    options?: {
      port: number
    }
  ): void;

  declare module.exports: typeof anybar;
}
