declare module "dropbox-chooser" {
  declare interface Dropbox$Chooser {
    choose(options: Dropbox$ChooserOptions): void;
  }

  declare interface Dropbox$ChooserOptions {
    success(files: $ReadOnlyArray<Dropbox$ChooserFile>): void;
    cancel?: () => void;
    linkType?: "preview" | "direct";
    multiselect?: boolean;
    extensions?: string[];
    folderselect?: boolean;
    sizeLimit?: number;
  }

  declare interface Dropbox$ChooserFile {
    id: string;
    name: string;
    link: string;
    bytes: number;
    icon: string;
    thumbnailLink?: string;
    isDir: boolean;
  }

  declare type Dropbox$ChooserFileBoundingBox = 75 | 256 | 800 | 1280 | 2048;

  declare type Dropbox$ChooserFileMode =
    | "fit"
    | "crop"
    | "fit_one_and_overflow";
  declare interface Window {
    Dropbox?: Dropbox$Dropbox$Chooser;
  }
}
