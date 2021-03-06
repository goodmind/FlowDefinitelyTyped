declare module "leaflet" {
  declare var npm$namespace$AwesomeMarkers: {
    icon: typeof AwesomeMarkers$icon,
    version: typeof AwesomeMarkers$version,

    Icon: typeof AwesomeMarkers$Icon
  };
  declare var AwesomeMarkers$version: string;

  declare type AwesomeMarkers$AwesomeMarkersIconOptions = {
    /**
     * Name of the icon. See glyphicons or font-awesome.
     */
    icon?: string,

    /**
     * Select de icon library. 'fa' for font-awesome or 'glyphicon' for bootstrap 3.
     */
    prefix?: "fa" | "glyphicon",

    /**
     * Color of the marker
     */
    markerColor?:
      | "red"
      | "darkred"
      | "orange"
      | "green"
      | "darkgreen"
      | "blue"
      | "purple"
      | "darkpurple"
      | "cadetblue",

    /**
     * Color of the icon. 'white', 'black' or css code (hex, rgba etc).
     */
    iconColor?: "white" | "black" | string,

    /**
     * Make the icon spin. true or false. Font-awesome required
     */
    spin?: boolean,

    /**
     * Additional classes in the created tag
     */
    extraClasses?: string
  } & BaseIconOptions;

  declare function AwesomeMarkers$icon(
    options: AwesomeMarkers$AwesomeMarkersIconOptions
  ): AwesomeMarkers$Icon;

  declare class AwesomeMarkers$Icon
    mixins Leaflet.Icon<AwesomeMarkers$AwesomeMarkersIconOptions> {
    constructor(options?: AwesomeMarkers$AwesomeMarkersIconOptions): this;
  }
}
declare module "leaflet.awesome-markers" {
  import typeof * as Leaflet from "leaflet";
}
