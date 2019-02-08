declare module "leaflet" {
  declare interface MapOptions {
    fullscreenControl?:
      | true
      | {
          pseudoFullscreen: boolean
        };
  }
}
declare module "leaflet-fullscreen" {
  import typeof * as L from "leaflet";
}
