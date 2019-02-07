declare module "ansi-colors" {
  declare module.exports: typeof colors;

  declare var colors: colors$colors$Colors;
  declare type colors$ColorFn = ((text: string) => string) & colors$Colors;

  declare interface colors$Colors {
    enabled: boolean;
    visible: boolean;
    reset: colors$ColorFn;
    bold: colors$ColorFn;
    dim: colors$ColorFn;
    italic: colors$ColorFn;
    underline: colors$ColorFn;
    inverse: colors$ColorFn;
    hidden: colors$ColorFn;
    strikethrough: colors$ColorFn;
    black: colors$ColorFn;
    red: colors$ColorFn;
    green: colors$ColorFn;
    yellow: colors$ColorFn;
    blue: colors$ColorFn;
    magenta: colors$ColorFn;
    cyan: colors$ColorFn;
    white: colors$ColorFn;
    gray: colors$ColorFn;
    grey: colors$ColorFn;
    bgBlack: colors$ColorFn;
    bgRed: colors$ColorFn;
    bgGreen: colors$ColorFn;
    bgYellow: colors$ColorFn;
    bgBlue: colors$ColorFn;
    bgMagenta: colors$ColorFn;
    bgCyan: colors$ColorFn;
    bgWhite: colors$ColorFn;
    blackBright: colors$ColorFn;
    redBright: colors$ColorFn;
    greenBright: colors$ColorFn;
    yellowBright: colors$ColorFn;
    blueBright: colors$ColorFn;
    magentaBright: colors$ColorFn;
    cyanBright: colors$ColorFn;
    whiteBright: colors$ColorFn;
    bgBlackBright: colors$ColorFn;
    bgRedBright: colors$ColorFn;
    bgGreenBright: colors$ColorFn;
    bgYellowBright: colors$ColorFn;
    bgBlueBright: colors$ColorFn;
    bgMagentaBright: colors$ColorFn;
    bgCyanBright: colors$ColorFn;
    bgWhiteBright: colors$ColorFn;
    hasColor(text: string): boolean;
    hasAnsi(text: string): boolean;
    unstyle(text: string): string;
    stripColor(text: string): string;
    none(text: string): string;
    clear(text: string): string;
    noop(text: string): string;
    symbols: colors$Symbols & {
      windows: colors$WindowsSymbols,
      other: colors$OtherPlatformsSymbols
    };
    define(
      name: string,
      codes: [number, number],
      type: "modifier" | "color" | "bg" | "bright" | "bgBright"
    ): void;
  }

  declare interface colors$WindowsSymbols {
    bullet: string;
    check: string;
    cross: string;
    ellipsis: string;
    heart: string;
    info: string;
    line: string;
    middot: string;
    minus: string;
    plus: string;
    question: string;
    questionSmall: string;
    pointer: string;
    pointerSmall: string;
    warning: string;
  }

  declare interface colors$ExtendedSymbols {
    ballotCross: string;
    questionFull: string;
  }

  declare type colors$Symbols = colors$WindowsSymbols &
    $Shape<colors$ExtendedSymbols>;

  declare type colors$OtherPlatformsSymbols = colors$WindowsSymbols &
    colors$ExtendedSymbols;
}
