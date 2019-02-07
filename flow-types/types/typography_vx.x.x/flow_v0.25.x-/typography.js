declare module "typography" {
  declare export interface BaseLine {
    fontSize: string;
    lineHeight: string;
  }
  declare export interface VerticalRhythm {
    rhythm: (value: number) => string;
    scale: (value: number) => BaseLine;
    adjustFontSizeTo: (value?: number | string) => { [key: string]: any };
    linesForFontSize: (fontSize: number) => number;
    establishBaseline: () => BaseLine;
  }
  declare export interface GoogleFont {
    name: string;
    styles: string[];
  }
  declare export interface TypographyOptions {
    baseFontSize?: string;
    baseLineHeight?: number;
    scaleRatio?: number;
    googleFonts?: GoogleFont[];
    headerFontFamily?: string[];
    bodyFontFamily?: string[];
    headerColor?: string;
    bodyColor?: string;
    headerWeight?: number | string;
    bodyWeight?: number | string;
    boldWeight?: number | string;
    blockMarginBottom?: number;
    includeNormalize?: boolean;
    overrideStyles?: (
      VerticalRhythm: VerticalRhythm,
      options: TypographyOptions,
      styles: any
    ) => { [key: string]: any };
    overrideThemeStyles?: (
      VerticalRhythm: VerticalRhythm,
      options: TypographyOptions,
      styles: any
    ) => { [key: string]: any };
    plugins?: any[];
  }
  declare class Typography {
    constructor(opts: TypographyOptions): this;
    options: TypographyOptions;
    createStyles(): string;
    toJSON(): { [key: string]: any };
    injectStyles(): void;
    rhythm: $ElementType<VerticalRhythm, "rhythm">;
    scale: $ElementType<VerticalRhythm, "scale">;
    adjustFontSizeTo: $ElementType<VerticalRhythm, "adjustFontSizeTo">;
    linesForFontSize: $ElementType<VerticalRhythm, "linesForFontSize">;
    establishBaseline: $ElementType<VerticalRhythm, "establishBaseline">;
  }
  declare export default typeof Typography;
}
