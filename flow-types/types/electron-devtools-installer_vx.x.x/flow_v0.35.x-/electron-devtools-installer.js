declare module 'electron-devtools-installer' {
        declare interface ExtensionReference {
id: string,
electron: string
} 
	declare export default function Promise(
extensionReference: ExtensionReference | string | Array<ExtensionReference | string>,
forceDownload?: boolean): Promise<string>

	declare export var EMBER_INSPECTOR: ExtensionReference;
	declare export var REACT_DEVELOPER_TOOLS: ExtensionReference;
	declare export var BACKBONE_DEBUGGER: ExtensionReference;
	declare export var JQUERY_DEBUGGER: ExtensionReference;
	declare export var ANGULARJS_BATARANG: ExtensionReference;
	declare export var VUEJS_DEVTOOLS: ExtensionReference;
	declare export var REDUX_DEVTOOLS: ExtensionReference;
	declare export var REACT_PERF: ExtensionReference;
	declare export var CYCLEJS_DEVTOOL: ExtensionReference;
	declare export var APOLLO_DEVELOPER_TOOLS: ExtensionReference;
	declare export var MOBX_DEVTOOLS: ExtensionReference;
    }
