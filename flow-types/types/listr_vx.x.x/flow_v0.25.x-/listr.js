declare module "listr" {
  import typeof * as stream from "stream";

  declare interface Listr$ListrRenderer {
    nonTTY: boolean;
    render(): void;
    end(): void;
  }

  declare interface Listr$ListrOptions {
    concurrent?: boolean | number;
    exitOnError?: boolean;
    renderer?: "silent" | "default" | "verbose" | Listr$ListrRenderer;
    nonTTYRenderer?: "silent" | "default" | "verbose" | Listr$ListrRenderer;
  }

  declare interface Listr$ListrTask {
    title: string;
    output?: string;
    task: (
      ctx: any,
      task: Listr$ListrTaskWrapper
    ) => void | string | Promise<any> | stream.Readable | Listr;
    skip?: (
      ctx: any,
      task: Listr$ListrTaskWrapper
    ) => boolean | Promise<boolean> | string | void;
    enabled?: (
      ctx: any,
      task: Listr$ListrTaskWrapper
    ) => boolean | Promise<boolean>;
  }

  declare interface Listr$ListrTaskWrapper {
    title: string;
    output: any;
    report(error: Error): void;
    skip(message: string): void;
    run(ctx?: any): Promise<any>;
  }
  declare class Listr {
    constructor(
      tasks?: $ReadOnlyArray<Listr$Listr$ListrTask>,
      options?: Listr$Listr$ListrOptions
    ): this;
    constructor(options?: Listr$Listr$ListrOptions): this;
    add(
      tasks: Listr$Listr$ListrTask | $ReadOnlyArray<Listr$Listr$ListrTask>
    ): void;
    run(ctx?: any): Promise<any>;
  }
  declare module.exports: typeof Listr;
}
