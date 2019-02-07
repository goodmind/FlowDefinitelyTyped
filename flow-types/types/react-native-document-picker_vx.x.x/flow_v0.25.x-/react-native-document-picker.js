declare module "react-native-document-picker" {
  declare export var DocumentPicker: {
    show(
      options: Options,
      callback: (error: Error, result: Result) => void
    ): void
  };
  declare export var DocumentPickerUtil: {
    allFiles(): string,
    pdf(): string,
    audio(): string,
    plainText(): string
  };
  declare export interface Options {
    top?: number;
    left?: number;
    filetype: string[];
  }
  declare export interface Result {
    uri: string;
    type: string;
    fileName: string;
    fileSize: number;
  }
}
