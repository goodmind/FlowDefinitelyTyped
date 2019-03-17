declare module "shipit-cli" {
  import typeof * as fs from "fs";

  import typeof * as child_process from "child_process";

  import typeof * as shipit from "./index";

  declare export type LocalOrRemoteCommand = (
    command: string,
    options?: child_process.ExecOptions,
    callback?: (error: Error, stdout: string, stderr: string) => void
  ) => PromiseLike<ShipitLocal>;
  declare export type EmptyCallback = () => void;
  declare export type TaskExecution = (
    name: string,
    depsOrFn: string[] | EmptyCallback,
    fn: () => void
  ) => any;
  declare export interface Options {
    environment: string;
    stderr: fs.WriteStream;
    stdout: fs.WriteStream;
  }
  declare export interface ShipitLocal {
    child: child_process.ChildProcess;
    stderr: fs.WriteStream;
    stdout: fs.WriteStream;
  }
  declare export interface Tasks {
    [name: string]: Task;
  }
  declare export interface Task {
    blocking: boolean;
    dep: string[];
    fn(): void;
    name: string;
  }
  declare export function blTask(
    name: string,
    depsOrFn: string[] | EmptyCallback,
    fn?: () => void
  ): any;

  declare export function emit(name: string): any;

  declare export function initConfig(config: {}): typeof shipit;

  declare export function local(
    command: string,
    options?: child_process.ExecOptions,
    callback?: (error: Error, stdout: string, stderr: string) => void
  ): PromiseLike<ShipitLocal>;

  declare export function log(log: any): void;

  declare export function log(...log: any[]): void;

  declare export function on(name: string, callback: (e: any) => void): any;

  declare export function remote(
    command: string,
    options?: child_process.ExecOptions,
    callback?: (error: Error, stdout: string, stderr: string) => void
  ): PromiseLike<ShipitLocal>;

  declare export function remoteCopy(
    src: string,
    dest: string,
    options?: child_process.ExecOptions,
    callback?: (error: Error, stdout: string, stderr: string) => void
  ): PromiseLike<ShipitLocal>;

  declare export function start(tasks: string | string[]): typeof shipit;

  declare export function start(...tasks: string[]): typeof shipit;

  declare export function task(
    name: string,
    depsOrFn: string[] | EmptyCallback,
    fn?: () => void
  ): typeof shipit;

  declare export var config: {};
  declare export var domain: any;
  declare export var doneCallback: any;
  declare export var environment: string;
  declare export var seq: any[];
  declare export var tasks: Tasks;
  declare export var isRunning: boolean;
}
