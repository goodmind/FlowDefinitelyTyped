declare module "loud-rejection" {
  declare module.exports: typeof loudRejection;

  declare function loudRejection(log?: (stack: string) => void): void;
}
