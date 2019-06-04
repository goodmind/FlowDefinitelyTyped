declare module "styletron-standard" {
  import typeof * as CSS from "csstype";

  declare export type Properties = CSS.Properties<string | number>;
  declare export type FontFace = CSS.FontFace;
  declare export interface KeyframesPercentageObject {
    [key: string]: Properties;
  }
  declare export type KeyframesObject = KeyframesPercentageObject & {
    from?: Properties,
    to?: Properties
  };
  declare export type StyleObject = Properties &
    $ObjMapi<
      { [k: string]: any },
      <key>(key) => $ElementType<Properties, $Keys<Properties>> | StyleObject
    >;
  declare export interface StandardEngine {
    renderStyle(style: StyleObject): string;
    renderKeyframes(keyframes: KeyframesObject): string;
    renderFontFace(fontFace: FontFace): string;
  }
  declare export function driver(
    style: StyleObject,
    styletron: StandardEngine
  ): string;

  declare export function getInitialStyle(): StyleObject;

  declare export function renderDeclarativeRules(
    style: StyleObject,
    styletrong: StandardEngine
  ): StyleObject;
}
