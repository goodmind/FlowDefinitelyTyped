declare module "gradient-string" {
  declare var npm$namespace$gradient: {
    atlas: typeof gradient$atlas,
    cristal: typeof gradient$cristal,
    teen: typeof gradient$teen,
    mind: typeof gradient$mind,
    morning: typeof gradient$morning,
    vice: typeof gradient$vice,
    passion: typeof gradient$passion,
    fruit: typeof gradient$fruit,
    instagram: typeof gradient$instagram,
    retro: typeof gradient$retro,
    summer: typeof gradient$summer,
    rainbow: typeof gradient$rainbow,
    pastel: typeof gradient$pastel
  };
  declare interface gradient$PositionedColorInput {
    color: tinycolor.ColorInput;
    pos: number;
  }

  declare interface gradient$Gradient {
    (message?: string, opt?: gradient$Options): string;
    multiline(message?: string, opt?: gradient$Options): string;
  }

  declare interface gradient$Options {
    interpolation?: string;
    hsvSpin?: string;
  }

  declare var gradient$atlas: gradient$Gradient;

  declare var gradient$cristal: gradient$Gradient;

  declare var gradient$teen: gradient$Gradient;

  declare var gradient$mind: gradient$Gradient;

  declare var gradient$morning: gradient$Gradient;

  declare var gradient$vice: gradient$Gradient;

  declare var gradient$passion: gradient$Gradient;

  declare var gradient$fruit: gradient$Gradient;

  declare var gradient$instagram: gradient$Gradient;

  declare var gradient$retro: gradient$Gradient;

  declare var gradient$summer: gradient$Gradient;

  declare var gradient$rainbow: gradient$Gradient;

  declare var gradient$pastel: gradient$Gradient;
  declare function gradient(
    colors: tinycolor.ColorInput[] | gradient$PositionedColorInput[]
  ): gradient$Gradient;

  declare function gradient(
    ...colors: tinycolor.ColorInput[]
  ): gradient$Gradient;

  declare function gradient(
    ...colors: gradient$PositionedColorInput[]
  ): gradient$Gradient;

  declare export default typeof gradient;
}
