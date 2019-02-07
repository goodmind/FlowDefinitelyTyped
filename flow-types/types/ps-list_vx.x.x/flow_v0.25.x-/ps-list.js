declare module "ps-list" {
  declare module.exports: typeof psList;

  declare function psList(
    options?: psList$psList$Options
  ): Promise<psList$psList$ProcessDescriptor[]>;

  declare interface psList$Options {
    all?: boolean;
  }

  declare interface psList$ProcessDescriptor {
    pid: number;
    name: string;
    ppid: number;
    cmd?: string;
    cpu?: number;
    memory?: number;
  }
}
