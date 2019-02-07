declare module "next-tick" {
  declare module.exports: typeof nextTick;

  declare function nextTick(callback: () => void): void;
}
