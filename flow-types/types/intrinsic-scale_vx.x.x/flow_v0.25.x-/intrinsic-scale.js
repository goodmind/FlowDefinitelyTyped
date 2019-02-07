declare module "intrinsic-scale" {
  declare export function contain(
    parentWidth: number,
    parentHeight: number,
    childWidth: number,
    childHeight: number
  ): IntrinsicScale;

  declare export function cover(
    parentWidth: number,
    parentHeight: number,
    childWidth: number,
    childHeight: number
  ): IntrinsicScale;

  declare export interface IntrinsicScale {
    width: number;
    height: number;
    x: number;
    y: number;
  }
}
