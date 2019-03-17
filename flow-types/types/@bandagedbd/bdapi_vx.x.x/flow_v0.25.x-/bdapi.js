declare module "@bandagedbd/bdapi" {
  import typeof * as ReactInstance from "react";

  import typeof * as ReactDOMInstance from "react-dom";

  declare export var BdApi: typeof BdApiModule;

  /**
   * Function with no arguments and no return value that may be called to revert changes made by monkeyPatch method,
   * restoring (unpatching) original method.
   */
  declare export type CancelPatch = () => void;

  /**
   * A callback that modifies method logic.
   * This callback is called on each call of the original method and is provided all data about original call.
   * Any of the data can be modified if necessary, but do so wisely.
   */
  declare export type PatchFunction = (data: PatchData) => any;

  /**
   * A callback that modifies method logic.
   * This callback is called on each call of the original method and is provided all data about original call.
   * Any of the data can be modified if necessary, but do so wisely.
   */
  declare export interface PatchData {
    thisObject: { [key: string]: any };
    methodArguments: any[];
    CancelPatch: CancelPatch;
    originalMethod: () => void;
    callOriginalMethod: () => void;
    returnValue: any;
  }
  declare export interface MonkeyPatchOptions {
    once?: boolean;
    silent?: boolean;
    displayName?: string;
    before?: PatchFunction;
    after?: PatchFunction;
    instead?: PatchFunction;
  }
  declare export interface ToastOptions {
    type?: string;
    icon?: boolean;
    timeout?: number;
  }
  declare var BdApiModule: typeof npm$namespace$BdApiModule;

  declare var npm$namespace$BdApiModule: {
    alert: typeof BdApiModule$alert,
    clearCSS: typeof BdApiModule$clearCSS,
    deleteData: typeof BdApiModule$deleteData,
    findModule: typeof BdApiModule$findModule,
    findAllModules: typeof BdApiModule$findAllModules,
    findModuleByProps: typeof BdApiModule$findModuleByProps,
    getCore: typeof BdApiModule$getCore,
    getData: typeof BdApiModule$getData,
    getInternalInstance: typeof BdApiModule$getInternalInstance,
    getPlugin: typeof BdApiModule$getPlugin,
    injectCSS: typeof BdApiModule$injectCSS,
    linkJS: typeof BdApiModule$linkJS,
    loadData: typeof BdApiModule$loadData,
    monkeyPatch: typeof BdApiModule$monkeyPatch,
    onRemoved: typeof BdApiModule$onRemoved,
    saveData: typeof BdApiModule$saveData,
    setData: typeof BdApiModule$setData,
    showToast: typeof BdApiModule$showToast,
    suppressErrors: typeof BdApiModule$suppressErrors,
    testJSON: typeof BdApiModule$testJSON,
    unlinkJS: typeof BdApiModule$unlinkJS,
    React: typeof BdApiModule$React,
    ReactDOM: typeof BdApiModule$ReactDOM
  };

  /**
   * The React module being used inside Discord.
   */
  declare var BdApiModule$React: typeof ReactInstance;

  /**
   * The ReactDOM module being used inside Discord.
   */
  declare var BdApiModule$ReactDOM: typeof ReactDOMInstance;

  /**
   * Creates an shows an alert modal to the user. A preview of how it may look can be found [here](https://i.zackrauen.com/7qnnNC.png).
   */
  declare function BdApiModule$alert(title: string, content: string): void;

  /**
   * Removes a style added with [`injectCSS`](#injectcssid-css) below.
   */
  declare function BdApiModule$clearCSS(id: string): void;

  /**
   * Deletes some saved data for plugin `pluginName` with key `key`.
   */
  declare function BdApiModule$deleteData(
    pluginName: string,
    key: string
  ): void;

  /**
   * Searches for an internal Discord webpack module based on `filter`.
   */
  declare function BdApiModule$findModule(filter: () => void): any;

  /**
   * Searches for multiple internal Discord webpack module based on `filter`. It's the same as [`findModule`](#findmodulefilter) but will return all matches
   */
  declare function BdApiModule$findAllModules(filter: () => void): any[];

  /**
   * Searches for an internal Discord webpack module that has every property passed.
   */
  declare function BdApiModule$findModuleByProps(...props: string[]): any;

  /**
   * Returns BandagedBD's instance of the core module. Only use this if you know what you are doing.
   */
  declare function BdApiModule$getCore(): any;

  /**
   * Alias for [loadData(pluginName, key)](#loaddatapluginname-key)
   */
  declare function BdApiModule$getData(pluginName: string, key: string): any;

  /**
   * Gets the internal react instance for a particular node.
   */
  declare function BdApiModule$getInternalInstance(
    node: HTMLElement
  ): { [key: string]: any } | void;

  /**
   * Gets the instance of another plugin with the name `name`.
   */
  declare function BdApiModule$getPlugin(
    name: string
  ): { [key: string]: any } | null;

  /**
   * Adds a block of css to the current document's `head`.
   */
  declare function BdApiModule$injectCSS(
    id: string,
    css: string
  ): { [key: string]: any } | null;

  /**
   * Links some remote JavaScript to be added to the page. Useful for libraries like `Sortable.js`.
   */
  declare function BdApiModule$linkJS(id: string, url: string): void;

  /**
   * Gets some saved data for plugin `pluginName` with key `key`. Data can be saved with [`saveData`](#savedatapluginname-key-data).
   */
  declare function BdApiModule$loadData(pluginName: string, key: string): any;

  /**
   * This function monkey-patches a method on an object. The patching callback may be run before, after or instead of target method.
   * - Be careful when monkey-patching. Think not only about original functionality of target method and your changes,
   * but also about developers of other plugins, who may also patch this method before or after you.
   * Try to change target method behaviour as little as possible, and avoid changing method signatures.
   * - Display name of patched method is changed, so you can see if a function has been patched (and how many times) while debugging or in the stack trace.
   * Also, patched methods have property `__monkeyPatched` set to `true`, in case you want to check something programmatically.
   */
  declare function BdApiModule$monkeyPatch(
    module: { [key: string]: any },
    methodName: string,
    options: MonkeyPatchOptions
  ): CancelPatch;

  /**
   * Adds a listener for when the node is removed from the document body.
   */
  declare function BdApiModule$onRemoved(
    node: HTMLElement,
    callback: () => void
  ): void;

  /**
   * Saved some `data` for plugin `pluginName` under `key` key. Gets saved in the plugins folder under `pluginName.config.json`. Data can be saved with [`loadData`](#loaddatapluginname-key).
   */
  declare function BdApiModule$saveData(
    pluginName: string,
    key: string,
    data: any
  ): void;

  /**
   * Alias for [saveData(pluginName, key, data)](#savedatapluginname-key-data)
   */
  declare function BdApiModule$setData(
    pluginName: string,
    key: string,
    data: any
  ): void;

  /**
   * Shows a simple toast message similar to on Android. An example of the `success` toast can be seen [here](https://i.zackrauen.com/zIagVa.png).
   */
  declare function BdApiModule$showToast(
    content: string,
    options?: ToastOptions
  ): void;

  /**
   * Wraps a function in a try catch block.
   */
  declare function BdApiModule$suppressErrors(
    method: () => void,
    message?: string
  ): () => void;

  /**
   * Determines if the input is valid and parseable JSON.
   */
  declare function BdApiModule$testJSON(data: string): boolean;

  /**
   * Removes some previously linked JS by [`linkJS`](#linkjsid-url).
   */
  declare function BdApiModule$unlinkJS(id: string): void;
}
