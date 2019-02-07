declare module "com.darktalker.cordova.screenshot" {
  declare interface screenshot$Plugin {
    /**
     * Takes a screenshot, saves it to device as JPG and provides a path to the file.
     * @param saveCallback callback function, holds results
     * @param format format of to be taken image, possible values are 'jpg' and 'png' ('jpg' is default)
     * @param quality custom quality of to be taken image in percentage (100 is default)
     * @param filename custom filename of to be taken image, ('screenshot_<milliSecondsSince1970>.<format>' is default)
     */
    save(
      saveCallback: (
        errorMessage: string,
        successObject: {
          success: boolean,
          filePath: string
        }
      ) => void,
      format?: string,
      quality?: number,
      filename?: string
    ): void;

    /**
     * Takes a screenshot and provides it trough data URI as JPG. No data are saved in the device.
     * @param uriCallback callback function, holds results
     * @param quality custom quality of to be taken image in percentage (100 is default)
     */
    URI(
      uriCallback: (
        errorMessage: string,
        successObject: {
          URI: string
        }
      ) => void,
      quality?: number
    ): void;
  }
  declare interface Navigator {
    screenshot: com$darktalker.cordova.screenshot.screenshot$Plugin;
  }
}
