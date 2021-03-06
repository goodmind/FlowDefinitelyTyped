declare var colorbrewer: ColorBrewer$ColorBrewer$Base;
declare interface ColorBrewer$ColorScheme {
  [n: number]: string[];
}

declare type ColorBrewer$EightColorScheme = {
  3: [string, string, string],
  4: [string, string, string, string],
  5: [string, string, string, string, string],
  6: [string, string, string, string, string, string],
  7: [string, string, string, string, string, string, string],
  8: [string, string, string, string, string, string, string, string]
} & ColorBrewer$ColorScheme;

declare type ColorBrewer$NineColorScheme = {
  9: [string, string, string, string, string, string, string, string, string]
} & ColorBrewer$EightColorScheme;

declare type ColorBrewer$ElevenColorScheme = {
  10: [
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string
  ],
  11: [
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string
  ]
} & ColorBrewer$NineColorScheme;

declare type ColorBrewer$TwelveColorScheme = {
  12: [
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string
  ]
} & ColorBrewer$ElevenColorScheme;

declare interface ColorBrewer$Base {
  YlGn: ColorBrewer$NineColorScheme;
  YlGnBu: ColorBrewer$NineColorScheme;
  GnBu: ColorBrewer$NineColorScheme;
  BuGn: ColorBrewer$NineColorScheme;
  PuBuGn: ColorBrewer$NineColorScheme;
  PuBu: ColorBrewer$NineColorScheme;
  BuPu: ColorBrewer$NineColorScheme;
  RdPu: ColorBrewer$NineColorScheme;
  PuRd: ColorBrewer$NineColorScheme;
  OrRd: ColorBrewer$NineColorScheme;
  YlOrRd: ColorBrewer$NineColorScheme;
  YlOrBr: ColorBrewer$NineColorScheme;
  Purples: ColorBrewer$NineColorScheme;
  Blues: ColorBrewer$NineColorScheme;
  Greens: ColorBrewer$NineColorScheme;
  Oranges: ColorBrewer$NineColorScheme;
  Reds: ColorBrewer$NineColorScheme;
  Greys: ColorBrewer$NineColorScheme;
  PuOr: ColorBrewer$ElevenColorScheme;
  BrBG: ColorBrewer$ElevenColorScheme;
  PRGn: ColorBrewer$ElevenColorScheme;
  PiYG: ColorBrewer$ElevenColorScheme;
  RdBu: ColorBrewer$ElevenColorScheme;
  RdGy: ColorBrewer$ElevenColorScheme;
  RdYlBu: ColorBrewer$ElevenColorScheme;
  Spectral: ColorBrewer$ElevenColorScheme;
  RdYlGn: ColorBrewer$ElevenColorScheme;
  Accent: ColorBrewer$EightColorScheme;
  Dark2: ColorBrewer$EightColorScheme;
  Paired: ColorBrewer$TwelveColorScheme;
  Pastel1: ColorBrewer$NineColorScheme;
  Pastel2: ColorBrewer$EightColorScheme;
  Set1: ColorBrewer$NineColorScheme;
  Set2: ColorBrewer$EightColorScheme;
  Set3: ColorBrewer$TwelveColorScheme;
}
declare module "colorbrewer" {
  declare module.exports: typeof colorbrewer;
}
