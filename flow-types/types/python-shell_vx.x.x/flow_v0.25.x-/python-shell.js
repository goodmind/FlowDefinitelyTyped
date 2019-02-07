declare module "python-shell" {
  import type { EventEmitter } from "events";

  declare export class PythonShell mixins EventEmitter {
    end(callback: (message: string) => void): void;
    send(message: any | string): void;
    constructor(scriptName: string, options?: InstanceOptions): this;
    defaultOptions: RunOptions;
  }
  declare export interface RunOptions {
    mode?: string;
    formatter?: string;
    parser?: string;
    encoding?: string;
    pythonPath?: string;
    pythonOptions?: string[];
    scriptPath?: string;
    args?: string[];
  }
  declare export interface InstanceOptions {
    script?: string;
    command?: string;
    stdin?: any;
    stdout?: any;
    stderr?: any;
    childProcess?: string;
    terminated?: any;
    exitCode?: any;
    args?: any[];
  }
  declare export function run(
    scriptName: string,
    RunOptions: RunOptions,
    callback: (err: Error, results?: any) => void
  ): void;

  declare export function run(
    scriptName: string,
    callback: (err: Error, results?: any) => void
  ): void;
}
