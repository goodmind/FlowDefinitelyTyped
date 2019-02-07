declare module "jest-plugin-set" {
  declare function set(name: string, block: () => void): void;
}
