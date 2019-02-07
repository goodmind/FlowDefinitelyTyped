declare module "sudo-block" {
  declare module.exports: typeof sudoBlock;

  declare function sudoBlock(message?: string): void;
}
