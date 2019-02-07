declare module "modular-scale" {
  declare export interface ModularScaleOptions {
    /**
     * The ratio to use in the generated type scale function. Defaults to ModularScaleRatio.goldenSection
     */
    ratio?: number;

    /**
     * The base font size (in pixels) to use for the type scale. Defaults to 16
     */
    base?: number | string;
  }
  declare export interface ModularScaleRatio {
    minorSecond: number;
    majorSecond: number;
    minorThird: number;
    majorThird: number;
    perfectFourth: number;
    augFourth: number;
    perfectFifth: number;
    minorSixth: number;
    goldenSection: number;
    majorSixth: number;
    minorSeventh: number;
    majorSeventh: number;
    octave: number;
    majorTenth: number;
    majorEleventh: number;
    majorTwelfth: number;
    doubleOctave: number;
  }
  declare export interface modularScale {
    (step: number, relative?: boolean): number;
    steps(steps: number, relative?: boolean): number[];
  }
  declare export var ratios: ModularScaleRatio;
  declare export default function ModularScale(
    options: ModularScaleOptions
  ): modularScale;
}
