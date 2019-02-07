declare module "bricks.js" {
  declare function BricksFactory(options: BricksOptions): BricksInstance;

  declare export interface BricksInstance {
    pack(): BricksInstance;
    update(): BricksInstance;
    resize(flag?: boolean): BricksInstance;
    on(event: "pack" | "update", listener: () => any): BricksInstance;
    on(
      event: "resize",
      listener: (sizeDetail: SizeDetail) => any
    ): BricksInstance;
    once(event: "pack" | "update", listener: () => any): BricksInstance;
    once(
      event: "resize",
      listener: (sizeDetail: SizeDetail) => any
    ): BricksInstance;
    off(event: "pack" | "update", listener?: () => any): BricksInstance;
    off(
      event: "resize",
      listener?: (sizeDetail: SizeDetail) => any
    ): BricksInstance;
  }
  declare export interface BricksOptions {
    container: Node | string;
    packed: string;
    sizes: SizeDetail[];
    position?: boolean;
  }
  declare export interface SizeDetail {
    mq?: string;
    columns: number;
    gutter: number;
  }
  declare export default typeof BricksFactory;
}
