declare module 'electron-window-state' {
        declare function windowStateKeeper(
opts: ElectronWindowState$ElectronWindowState$WindowStateKeeperOptions): ElectronWindowState$ElectronWindowState$WindowState

	declare module.exports: typeof windowStateKeeper

	declare interface ElectronWindowState$WindowState {
x: number,
y: number,
width: number,
height: number,
isMaximized: boolean,
isFullScreen: boolean,
manage(win: Electron.BrowserWindow): void,
saveState(win: Electron.BrowserWindow): void
} 

declare interface ElectronWindowState$WindowStateKeeperOptions {
defaultWidth?: number,
defaultHeight?: number,
path?: string,
file?: string,
maximize?: boolean,
fullScreen?: boolean
} 
    }
