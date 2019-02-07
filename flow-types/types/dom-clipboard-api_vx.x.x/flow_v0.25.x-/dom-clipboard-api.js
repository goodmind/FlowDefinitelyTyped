declare module "dom-clipboard-api" {
  declare type Clipboard = {
    read(): Promise<DataTransfer>,
    readText(): Promise<string>,
    write(data: DataTransfer): Promise<void>,
    writeText(data: string): Promise<void>
  } & EventTarget;

  declare interface Navigator {
    +clipboard: Clipboard;
  }
}
