declare module "runes" {
  declare function runes(text: string): string[];

  declare var npm$namespace$runes: {
    substr: typeof runes$substr
  };
  declare function runes$substr(text: string, index: number): string;

  declare module.exports: typeof runes;
}
