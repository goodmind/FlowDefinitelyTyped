declare module "electron-load-devtool" {
  declare interface ElectronLoadDevtool {
    (devtoolId: string, options?: ElectronLoadDevtoolOptions): void;
    REDUX_DEVTOOLS: string;
    EMBER_INSPECTOR: string;
    REACT_DEVELOPER_TOOLS: string;
    BACKBONE_DEBUGGER: string;
    JQUERY_DEBUGGER: string;
    ANGULARJS_BATARANG: string;
    VUEJS_DEVTOOLS: string;
  }
  declare interface ElectronLoadDevtoolOptions {
    enabled?: boolean;
    name?: string;
    profile?: string;
    version?: string;
  }
  declare var electronLoadDevtool: ElectronLoadDevtool;
  declare export default typeof electronLoadDevtool;
}
