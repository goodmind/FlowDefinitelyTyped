declare module "@iopipe/iopipe" {
  declare function iopipe(
    config?: iopipe$LibraryConfig
  ): iopipe$FunctionWrapper;

  declare var npm$namespace$iopipe: {
    label: typeof iopipe$label,
    metric: typeof iopipe$metric,

    mark: typeof npm$namespace$iopipe$mark
  };
  declare function iopipe$label(label: string): void;

  declare function iopipe$metric(label: string, value: number): void;

  declare var npm$namespace$iopipe$mark: {
    start: typeof iopipe$mark$start,
    end: typeof iopipe$mark$end
  };
  declare function iopipe$mark$start(label: string): void;

  declare function iopipe$mark$end(label: string): void;

  declare interface iopipe$LibraryConfig {
    debug?: boolean;
    token?: string;
    networkTimeout?: number;
    timeoutWindow?: number;
  }

  declare type iopipe$FunctionWrapper = <T>(handler: T) => T;
  declare export default typeof iopipe;
}
