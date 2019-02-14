declare module "skin-tone" {
  declare export default typeof skinTone;

  declare function skinTone(emoji: string, type: 0 | 1 | 2 | 3 | 4 | 5): string;

  declare var npm$namespace$skinTone: {
    NONE: typeof skinTone$NONE,
    WHITE: typeof skinTone$WHITE,
    CREAM_WHITE: typeof skinTone$CREAM_WHITE,
    LIGHT_BROWN: typeof skinTone$LIGHT_BROWN,
    BROWN: typeof skinTone$BROWN,
    DARK_BROWN: typeof skinTone$DARK_BROWN
  };
  declare var skinTone$NONE: 0;

  declare var skinTone$WHITE: 1;

  declare var skinTone$CREAM_WHITE: 2;

  declare var skinTone$LIGHT_BROWN: 3;

  declare var skinTone$BROWN: 4;

  declare var skinTone$DARK_BROWN: 5;
}
