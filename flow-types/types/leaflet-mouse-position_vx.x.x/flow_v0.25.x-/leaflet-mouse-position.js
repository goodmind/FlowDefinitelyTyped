declare type Control$MousePositionControlOptions = {
  separator?: string,
  emptyString?: string,
  lngFirst?: boolean,
  numDigits?: number,
  lngFormatter?: (lng: number) => string,
  latFormatter?: (lat: number) => string,
  prefix?: string
} & ControlOptions;

declare class Control$MousePosition mixins LControl {
  options: Control$MousePositionControlOptions;
  constructor(options?: Control$MousePositionControlOptions): this;
}
declare var npm$namespace$control: {
  mousePosition: typeof control$mousePosition
};
declare function control$mousePosition(
  options?: Control$Control$MousePositionControlOptions
): Control$Control$MousePosition;
declare module "leaflet" {
  declare interface MapOptions {
    positionControl?: boolean;
  }
}
declare module "leaflet-mouse-position" {
  import type { ControlOptions, Control as LControl } from "leaflet";
}
