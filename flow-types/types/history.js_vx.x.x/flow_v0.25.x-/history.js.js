declare module "history.js" {
  declare interface HistoryAdapter {
    bind(element: any, event: string, callback: () => void): void;
    trigger(element: any, event: string): void;
    onDomLoad(callback: () => void): void;
  }
  declare interface Historyjs {
    enabled: boolean;
    pushState(data: any, title: string, url: string, queue?: boolean): boolean;
    replaceState(
      data: any,
      title: string,
      url: string,
      queue?: boolean
    ): boolean;
    getState(friendly?: boolean, create?: boolean): HistoryState;
    getStateId(passedState: HistoryState): string;
    getStateById(id: string): HistoryState;
    getStateByIndex(index: number): HistoryState;
    getCurrentIndex(): number;
    getHash(): string;
    Adapter: HistoryAdapter;
    back(): void;
    forward(): void;
    go(x: Number): void;
    log(...messages: any[]): void;
    debug(...messages: any[]): void;
    options: HistoryOptions;

    /**
     * History.setTitle(title)
     * Applies the title to the document
     * @param {HistoryState} newState
     * @return {Boolean}
     */
    setTitle(newState: HistoryState): boolean;
    clearQueue(): Historyjs;
    clearAllIntervals(): void;
    getRootUrl(): string;
    emulated: {
      hashChange?: any,
      pushState?: any
    };
  }
  declare interface HistoryState {
    data?: any;
    title?: string;
    url: string;
    hashedUrl?: string;
    cleanUrl?: string;
  }
  declare interface HistoryOptions {
    hashChangeInterval?: number;
    safariPollInterval?: number;
    doubleCheckInterval?: number;
    disableSuid?: boolean;
    storeInterval?: number;
    busyDelay?: number;
    debug?: boolean;
    initialTitle?: string;
    html4Mode?: boolean;
    delayInit?: number;
  }
}
