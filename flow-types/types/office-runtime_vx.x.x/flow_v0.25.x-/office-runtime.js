declare module "office-runtime" {
  declare var npm$namespace$OfficeRuntime: {
    displayWebDialog: typeof OfficeRuntime$displayWebDialog,
    AsyncStorage: typeof OfficeRuntime$AsyncStorage
  };

  /**
   * Enables you to pop up a web dialog box.
   * @param url
   * @param options
   */
  declare function OfficeRuntime$displayWebDialog(
    url: string,
    options: OfficeRuntime$DisplayWebDialogOptions
  ): Promise<OfficeRuntime$Dialog>;

  /**
   * Asynchronous, global, and persistent key-value storage that can be used by Excel Custom Functions.
   */
  declare var OfficeRuntime$AsyncStorage: OfficeRuntime$AsyncStorage;

  /**
   * Asynchronous, global, and persistent key-value storage that can be used by Excel Custom Functions.
   * @beta
   * @remarks Each add-in instance has its own storage partition, unique to a user and their device.
   *
   * The default amount of total storage allowed per add-in is 5MB.
   *
   * Each method listed below returns a Promise object.
   */
  declare interface OfficeRuntime$AsyncStorage {
    /**
     * @beta Retrieves an object based on a key and invokes a callback when finished. Returns a Promise.
     */
    getItem(
      key: string,
      callback?: (error?: Error, result?: string) => void
    ): Promise<string>;

    /**
     * @beta Assigns the value for a key-value pair and invokes a callback when finished. Returns a Promise.
     */
    setItem(
      key: string,
      value: string,
      callback?: (error?: Error) => void
    ): Promise<void>;

    /**
     * @beta Removes an item for specified key and invokes a callback when finished. Returns a Promise.
     */
    removeItem(key: string, callback?: (error?: Error) => void): Promise<void>;

    /**
     * @beta Returns a Promise with all keys.
     */
    getAllKeys(
      callback?: (error?: Error, keys?: string[]) => void
    ): Promise<string[]>;

    /**
     * @beta Stores multiple key-value pairs in one batch. Returns a Promise. When a key doesn't exist, returns null.
     */
    multiSet(
      keyValuePairs: string[][],
      callback?: (errors?: Error[]) => void
    ): Promise<void>;

    /**
     * @beta Deletes a batch of keys, specified in the `keys` array.
     */
    multiRemove(
      keys: string[],
      callback?: (errors?: Error[]) => void
    ): Promise<void>;

    /**
     * @beta Fetches a batch of keys, specified in the `keys` array. When a key doesn't exist, returns null.
     */
    multiGet(
      keys: string[],
      callback?: (errors?: Error[], result?: string[][]) => void
    ): Promise<string[][]>;
  }

  /**
   * @beta Object representing the dialog box.
   */
  declare interface OfficeRuntime$Dialog {
    /**
     * @beta Method that closes a dialog box.
     */
    close(): Promise<void>;
  }

  /**
   * Provides options for how a dialog is displayed.
   */
  declare interface OfficeRuntime$DisplayWebDialogOptions {
    /**
     * @beta Determines whether the dialog box displays as a popup (false) or within an IFrame (true). This setting is only applicable to custom functions running on Excel Online.
     */
    displayInIFrame?: boolean;

    /**
     * @beta Defines the height of the dialog box as a percentage of the current display.
     */
    height?: string;

    /**
     * @beta Defines the width of the dialog box as a percentage of the current display.
     */
    width?: string;

    /**
     * @beta True if title is hidden from the dialog box.
     */
    hideTitle?: boolean;

    /**
     * @beta Callback that is run when the dialog box is closed.
     */
    onClose?: () => void;

    /**
     * @beta Callback that is run when the dialog sends a message to its parent.
     */
    onMessage?: (message: string, dialog?: OfficeRuntime$Dialog) => void;
    onRuntimeError?: (error: Error, dialog?: OfficeRuntime$Dialog) => void;
  }
}
