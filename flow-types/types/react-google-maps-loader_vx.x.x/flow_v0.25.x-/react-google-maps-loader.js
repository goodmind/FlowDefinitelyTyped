declare module "react-google-maps-loader" {
  import type { Component, Node } from "react";

  declare export default typeof ReactGoogleMapsLoader;

  declare class ReactGoogleMapsLoader
    mixins Component<ReactGoogleMapsLoader$Props> {}
  declare type ReactGoogleMapsLoader$GoogleMaps = typeof google.maps;

  declare interface ReactGoogleMapsLoader$Params {
    key: string;
    libraries?: string;
  }

  declare interface ReactGoogleMapsLoader$Props {
    params: ReactGoogleMapsLoader$Params;
    render: (
      googleMaps: ReactGoogleMapsLoader$GoogleMaps,
      error?: string | null
    ) => Node;
  }
}
