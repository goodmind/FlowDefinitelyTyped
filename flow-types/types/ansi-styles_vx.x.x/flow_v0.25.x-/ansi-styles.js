declare module "ansi-styles" {
  import type { EscapeCode } from "./escape-code";

  declare export var reset: EscapeCode.CodePair;
  declare export var bold: EscapeCode.CodePair;
  declare export var dim: EscapeCode.CodePair;

  /**
   * Not widely supported
   */
  declare export var italic: EscapeCode.CodePair;
  declare export var underline: EscapeCode.CodePair;
  declare export var inverse: EscapeCode.CodePair;
  declare export var hidden: EscapeCode.CodePair;

  /**
   * Not widely supported
   */
  declare export var strikethrough: EscapeCode.CodePair;
  declare export var black: EscapeCode.CodePair;
  declare export var red: EscapeCode.CodePair;
  declare export var green: EscapeCode.CodePair;
  declare export var yellow: EscapeCode.CodePair;
  declare export var blue: EscapeCode.CodePair;
  declare export var magenta: EscapeCode.CodePair;
  declare export var cyan: EscapeCode.CodePair;
  declare export var white: EscapeCode.CodePair;

  /**
   * bright black
   */
  declare export var gray: EscapeCode.CodePair;
  declare export var grey: EscapeCode.CodePair;
  declare export var redBright: EscapeCode.CodePair;
  declare export var greenBright: EscapeCode.CodePair;
  declare export var yellowBright: EscapeCode.CodePair;
  declare export var blueBright: EscapeCode.CodePair;
  declare export var magentaBright: EscapeCode.CodePair;
  declare export var cyanBright: EscapeCode.CodePair;
  declare export var whiteBright: EscapeCode.CodePair;
  declare export var bgBlack: EscapeCode.CodePair;
  declare export var bgRed: EscapeCode.CodePair;
  declare export var bgGreen: EscapeCode.CodePair;
  declare export var bgYellow: EscapeCode.CodePair;
  declare export var bgBlue: EscapeCode.CodePair;
  declare export var bgMagenta: EscapeCode.CodePair;
  declare export var bgCyan: EscapeCode.CodePair;
  declare export var bgWhite: EscapeCode.CodePair;
  declare export var bgBlackBright: EscapeCode.CodePair;
  declare export var bgRedBright: EscapeCode.CodePair;
  declare export var bgGreenBright: EscapeCode.CodePair;
  declare export var bgYellowBright: EscapeCode.CodePair;
  declare export var bgBlueBright: EscapeCode.CodePair;
  declare export var bgMagentaBright: EscapeCode.CodePair;
  declare export var bgCyanBright: EscapeCode.CodePair;
  declare export var bgWhiteBright: EscapeCode.CodePair;

  /**
   * Raw escape codes (i.e. without the CSI escape prefix \u001B[ and render mode postfix m) are available.
   *
   * This is a Map with the open codes as keys and close codes as values.
   */
  declare export var codes: Map<number, number>;
  declare export var modifier: EscapeCode.Modifier;
  declare export var color: EscapeCode.Color &
    EscapeCode.ColorType & {
      close: string
    };
  declare export var bgColor: EscapeCode.BackgroundColor &
    EscapeCode.ColorType & {
      close: string
    };
}
