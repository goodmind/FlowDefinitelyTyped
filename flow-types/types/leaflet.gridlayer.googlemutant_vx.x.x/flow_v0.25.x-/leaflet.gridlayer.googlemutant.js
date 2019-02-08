declare module "leaflet" {
  declare var npm$namespace$gridLayer: {
    googleMutant: typeof gridLayer$googleMutant
  };
  declare type gridLayer$GoogleMutant = {
    setElementSize(e: HTMLElement, size: Point): void
  } & GridLayer;

  declare type gridLayer$GoogleMutantType =
    | "roadmap"
    | "satellite"
    | "terrain"
    | "hybrid";

  declare interface gridLayer$GoogleMutantStyler {
    hue?: string;
    lightness?: number;
    saturation?: number;
    gamma?: number;
    invert_lightness?: boolean;
    visibility?: string;
    color?: string;
    weight?: number;
  }

  /**
   * Google's map style.
   *
   * https://developers.google.com/maps/documentation/javascript/style-reference
   */
  declare interface gridLayer$GoogleMutantStyle {
    /**
     * https://developers.google.com/maps/documentation/javascript/style-reference#style-features
     */
    featureType?: string;

    /**
     * https://developers.google.com/maps/documentation/javascript/style-reference#style-elements
     */
    elementType?: string;

    /**
     * https://developers.google.com/maps/documentation/javascript/style-reference#stylers
     */
    stylers?: gridLayer$GoogleMutantStyler[];
  }

  declare type gridLayer$GoogleMutantOptions = {
    minZoom?: number,
    maxZoom?: number,
    maxNativeZoom?: number,
    tileSize?: number | Point,
    subdomains?: string | string[],
    errorTileUrl?: string,

    /**
     * The mutant container will add its own attribution anyways.
     */
    attribution?: string,
    opacity?: number,
    continuousWorld?: boolean,
    noWrap?: boolean,

    /**
     * Google's map type. 'hybrid' is not really supported.
     */
    type?: gridLayer$GoogleMutantType,

    /**
     * Google's map styles.
     */
    styles?: gridLayer$GoogleMutantStyle[]
  } & TileLayerOptions;

  declare function gridLayer$googleMutant(
    options?: gridLayer$GoogleMutantOptions
  ): gridLayer$GoogleMutant;
}
declare module "leaflet.gridlayer.googlemutant" {
  import typeof * as L from "leaflet";
}
