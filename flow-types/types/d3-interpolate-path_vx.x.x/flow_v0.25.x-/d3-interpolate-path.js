declare module "d3-interpolate-path" {
  declare export interface PathCommandObject {
    type: string;
    x: number;
    y: number;
  }
  declare export function interpolatePath(
    a: string,
    b: string,
    excludeSegment?: (a: PathCommandObject, b: PathCommandObject) => boolean
  ): (t: number) => string;
}
