declare module "get-node-dimensions" {
  declare interface NodeDimensions {
    width: number;
    height: number;
    top: number;
    right: number;
    bottom: number;
    left: number;
  }
  declare interface NodeDimensionsOptions {
    margin?: boolean;
    clone?: boolean;
    display?: string;
    width?: string;
    height?: string;
  }
  declare function getNodeDimensions(
    element: HTMLElement,
    options?: NodeDimensionsOptions
  ): NodeDimensions;

  declare module.exports: typeof getNodeDimensions;
}
