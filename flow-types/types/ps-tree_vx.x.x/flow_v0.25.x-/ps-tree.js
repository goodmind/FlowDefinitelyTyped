declare module "ps-tree" {
  declare var npm$namespace$ps_tree: {
    prototype: typeof ps_tree$prototype
  };
  declare interface ps_tree$PS {
    COMMAND: string;
    PPID: string;
    PID: string;
    STAT: string;
  }

  declare var ps_tree$prototype: {};
  declare function ps_tree(
    pid: number,
    callback: (error: Error, children: $ReadOnlyArray<ps_tree$PS>) => void
  ): void;

  declare export default typeof ps_tree;
}
