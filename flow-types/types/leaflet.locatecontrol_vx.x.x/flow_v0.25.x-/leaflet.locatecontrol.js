declare module "leaflet" {
  declare class Control$Locate mixins Control {
    onAdd(map: Map): HTMLElement;
    start(): void;
    stop(): void;
    setView(): void;
  }

  declare interface Control$LocateOptions {
    position?: string;
    layer?: Layer;
    setView?: boolean | string;
    flyTo?: boolean;
    keepCurrentZoomLevel?: boolean;
    clickBehavior?: any;
    returnToPrevBounds?: boolean;
    cacheLocation?: boolean;
    drawCircle?: boolean;
    drawMarker?: boolean;
    markerClass?: any;
    circleStyle?: PathOptions;
    markerStyle?: PathOptions | MarkerOptions;
    followCircleStyle?: PathOptions;
    followMarkerStyle?: PathOptions;
    icon?: string;
    iconLoading?: string;
    iconElementTag?: string;
    circlePadding?: number[];
    onLocationError?: any;
    onLocationOutsideMapBounds?: any;
    showPopup?: boolean;
    strings?: any;
    locateOptions?: L.Control$LocateOptions;
  }

  declare var npm$namespace$control: {
    locate: typeof control$locate
  };

  /**
   * Creates a Leaflet.Locate control
   */
  declare function control$locate(
    options?: Control$Control$LocateOptions
  ): Control$Control$Locate;
}
declare module "leaflet.locatecontrol" {
  import typeof * as L from "leaflet";
}
