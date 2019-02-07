declare module "sigmund" {
  declare module.exports: typeof sigmund;

  declare function sigmund(subject: any, maxDepth?: number): string;
}
