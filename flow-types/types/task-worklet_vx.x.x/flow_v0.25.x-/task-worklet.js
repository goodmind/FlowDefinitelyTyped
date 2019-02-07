declare module "task-worklet" {
  declare class TaskQueue {
    constructor(options?: Options): this;
    postTask(taskName: string, ...args: any[]): Task;
    addModule(moduleURL: string): Promise<void>;
  }
  declare interface Options {
    size?: number;
  }
  declare export interface Task<T = any> {
    id: number;
    state: State;
    result: Promise<T>;
  }
  declare export type State =
    | "cancelled"
    | "completed"
    | "fulfilled"
    | "pending"
    | "scheduled";
  declare export default typeof TaskQueue;
}
