declare module "@iopipe/iopipe" {
  declare function iopipe(
    config?: iopipe$iopipe$LibraryConfig
  ): iopipe$iopipe$FunctionWrapper;

  declare var npm$namespace$iopipe: {
    label: typeof iopipe$label,
    metric: typeof iopipe$metric
  };
  declare function iopipe$label(iopipe$label: string): void;

  declare function iopipe$metric(iopipe$label: string, value: number): void;

  declare var npm$namespace$mark: {
    start: typeof mark$start,
    end: typeof mark$end
  };
  declare function mark$start(iopipe$label: string): void;

  declare function mark$end(iopipe$label: string): void;

  declare interface iopipe$LibraryConfig {
    debug?: boolean;
    token?: string;
    networkTimeout?: number;
    timeoutWindow?: number;
  }

  declare type iopipe$FunctionWrapper = <T>(handler: T) => T;
  declare module.exports: typeof iopipe;
}
