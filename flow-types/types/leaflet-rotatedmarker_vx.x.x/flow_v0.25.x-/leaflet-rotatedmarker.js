declare module "leaflet" {
  declare interface MarkerOptions {
    rotationAngle?: number;
    rotationOrigin?: string;
  }
  declare interface Marker {
    setRotationAngle(newAngle: number): this;

    /**
     * Sets the rotation origin value.
     */
    setRotationOrigin(newOrigin: string): this;
  }
}
declare module "leaflet-rotatedmarker" {
  import typeof * as L from "leaflet";
}
