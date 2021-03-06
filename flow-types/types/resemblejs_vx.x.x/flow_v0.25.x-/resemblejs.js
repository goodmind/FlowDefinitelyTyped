declare module "resemblejs" {
  declare export default typeof Resemble;

  /**
   * Retrieve basic analysis for a single image (add compareTo to compare with another).
   */
  declare function Resemble(
    image: string | ImageData
  ): Resemble$ResembleAnalysis;

  declare var npm$namespace$Resemble: {
    outputSettings: typeof Resemble$outputSettings
  };

  /**
   * Set the resemblance image output style
   */
  declare function Resemble$outputSettings(
    settings: Resemble$OutputSettings
  ): typeof Resemble;

  declare interface Resemble$OutputSettings {
    errorColor: {
      red: number,
      green: number,
      blue: number
    };
    errorType: string;
    transparency: number;
    largeImageThreshold: number;
  }

  declare interface Resemble$ResembleAnalysis {
    /**
     * Run the analysis on this image and get the result
     */
    onComplete(
      callback: (result: Resemble$ResembleAnalysisResult) => void
    ): void;

    /**
     * Compare this image to another image, to get resemblance data
     */
    compareTo(fileData: string | ImageData): Resemble$ResembleComparison;
  }

  declare interface Resemble$ResembleAnalysisResult {
    red: number;
    green: number;
    blue: number;
    brightness: number;
  }

  declare interface Resemble$ResembleComparison {
    /**
     * Run the analysis and get the comparison result
     */
    onComplete(
      callback: (result: Resemble$ResembleComparisonResult) => void
    ): void;
    ignoreNothing(): Resemble$ResembleComparison;
    ignoreAntialiasing(): Resemble$ResembleComparison;
    ignoreColors(): Resemble$ResembleComparison;
    repaint(): Resemble$ResembleComparison;
  }

  declare interface Resemble$ResembleComparisonResult {
    /**
     * Do the two images have the same dimensions?
     */
    isSameDimensions: boolean;

    /**
     * The difference in width and height between the dimensions of the two compared images
     */
    dimensionDifference: {
      width: number,
      height: number
    };

    /**
     * Get a data URL for the comparison image
     */
    getImageDataUrl(): string;

    /**
     * The percentage of pixels which do not match between the images
     */
    misMatchPercentage: number;
    diffBounds: {
      top: number,
      left: number,
      bottom: number,
      right: number
    };
    analysisTime: number;
  }
}
