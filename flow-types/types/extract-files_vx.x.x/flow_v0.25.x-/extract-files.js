declare module "extract-files" {
  declare export interface ReactNativeFileOptions {
    uri: string;
    type: string;
    name: string;
  }
  declare export class ReactNativeFile {
    uri: string;
    type: string;
    name: string;
    constructor(options: ReactNativeFileOptions): this;
    static list(files: ReactNativeFileOptions[]): ReactNativeFile[];
  }
}
