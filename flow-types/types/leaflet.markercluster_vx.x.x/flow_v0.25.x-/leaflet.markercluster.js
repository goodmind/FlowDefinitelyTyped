declare module "leaflet" {
  declare class MarkerCluster mixins Marker {
    getAllChildMarkers(): Marker[];
    getChildCount(): number;
    zoomToBounds(): void;
    getBounds(): LatLngBounds;
  }
  declare type MarkerClusterGroupOptions = {
    showCoverageOnHover?: boolean,
    zoomToBoundsOnClick?: boolean,
    spiderfyOnMaxZoom?: boolean,
    removeOutsideVisibleBounds?: boolean,
    animate?: boolean,
    animateAddingMarkers?: boolean,
    disableClusteringAtZoom?: number,
    maxClusterRadius?: number | ((zoom: number) => number),
    polygonOptions?: PolylineOptions,
    singleMarkerMode?: boolean,
    spiderLegPolylineOptions?: PolylineOptions,
    spiderfyDistanceMultiplier?: number,
    iconCreateFunction?: (cluster: MarkerCluster) => Icon | DivIcon,
    chunkedLoading?: boolean,
    chunkDelay?: number
  } & LayerOptions;

  declare class MarkerClusterGroup mixins FeatureGroup {
    addLayers(layers: Layer[]): this;
    removeLayers(layers: Layer[]): this;
    clearLayers(): this;
    getVisibleParent(marker: Marker): Marker;
    refreshClusters(
      clusters?:
        | Marker
        | Marker[]
        | LayerGroup
        | {
            [index: string]: Layer
          }
    ): this;
    getChildCount(): number;
    getAllChildMarkers(): Marker[];
    hasLayer(layer: Layer): boolean;
    zoomToShowLayer(layer: Layer, callback?: () => void): void;
  }
  declare function markerClusterGroup(
    options?: MarkerClusterGroupOptions
  ): MarkerClusterGroup;
}
declare module "leaflet.markercluster" {
  import typeof * as L from "leaflet";
}
