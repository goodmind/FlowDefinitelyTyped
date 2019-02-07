declare module "task-graph-runner" {
  declare module.exports: typeof taskGraphRunner;

  declare function taskGraphRunner<Item, Result>(
    opts: taskGraphRunner$taskGraphRunner$Opts<Item, Result>
  ): Promise<taskGraphRunner$taskGraphRunner$Results<Item, Result>>;

  declare interface taskGraphRunner$Opts<Item, Result> {
    graph: Map<Item, Item[]>;
    task: (item: Item) => Result;
    force?: boolean;
  }

  declare interface taskGraphRunner$Results<Item, Result> {
    values: Map<Item, Result>;
    safe: boolean;
  }
}
