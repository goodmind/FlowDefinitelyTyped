declare class Stats {
  constructor(): this;
  REVISION: number;
  dom: HTMLDivElement;

  /**
   * @param value 0:fps, 1: ms, 2: mb, 3+: custom
   */
  showPanel(value: number): void;
  begin(): void;
  end(): number;
  update(): void;
  addPanel(panel: Stats$Stats$Panel): Stats$Stats$Panel;
}
declare class Stats$Panel {
  constructor(
    name: string,
    foregroundColor: string,
    backgroundColor: string
  ): this;
  dom: HTMLCanvasElement;
  update(value: number, maxValue: number): void;
}
declare module "stats.js" {
  declare module.exports: typeof Stats;
}
