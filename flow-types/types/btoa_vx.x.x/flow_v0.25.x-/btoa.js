declare module "btoa" {
  declare function btoa(str: string): string;

  declare module.exports: typeof btoa;
}
