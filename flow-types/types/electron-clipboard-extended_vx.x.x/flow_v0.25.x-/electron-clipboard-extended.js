declare module "electron-clipboard-extended" {
  import typeof * as Electron from "electron";

  declare type ClipboardExtended = {
    off: (event: string, listener?: () => void) => void,
    startWatching: () => void,
    stopWatching: () => void
  } & Electron.Clipboard;

  declare var clipboard: ClipboardExtended;
  declare export default typeof clipboard;
}
