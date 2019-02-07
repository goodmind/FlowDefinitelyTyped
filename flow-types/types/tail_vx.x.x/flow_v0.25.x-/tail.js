declare module "tail" {
  declare interface Tail$TailOptions {
    separator?: string | RegExp;
    fromBeginning?: boolean;
    fsWatchOptions?: Record<string, any>;
    follow?: boolean;
    logger?: any;
    encoding?: string;
    useWatchFile?: boolean;
  }

  declare interface Tail$Tail {
    /**
     * Callback to listen for newlines appended to file
     */
    on(eventType: "line", cb: (data: any) => void): void;

    /**
     * Error callback
     */
    on(eventType: "error", cb: (error: any) => void): void;

    /**
     * Stop watching file
     */
    unwatch(): void;

    /**
     * Start watching file if previously stopped
     */
    watch(): void;
  }

  declare interface Tail$TailConstructor {
    /**
     * Creates a new Tail object that starts watching the specified file immediately.
     */
    new(filename: string, options?: Tail$TailOptions): Tail$Tail;
  }

  declare interface Tail$Static {
    Tail$Tail: Tail$TailConstructor;
  }
  declare var Tail$Tail: Tail$Tail.Tail$Static;
  declare module.exports: typeof Tail$Tail;
}
