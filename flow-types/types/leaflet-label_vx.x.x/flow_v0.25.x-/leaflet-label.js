declare module "leaflet" {
  declare interface IconOptions {
    labelAnchor?: Point;
  }
  declare interface PathOptions {
    labelAnchor?: Point;
  }
  declare interface CircleMarkerOptions {
    labelAnchor?: Point;
  }
  declare interface Marker {
    showLabel(): Marker;
    hideLabel(): Marker;
    setLabelNoHide(noHide: boolean): void;
    bindLabel(content: string, options?: LabelOptions): Marker;
    unbindLabel(): Marker;
    updateLabelContent(content: string): void;
    getLabel(): Label;
    setOpacity(opacity: number, labelHasSemiTransparency: boolean): void;
  }
  declare interface CircleMarker {
    showLabel(): CircleMarker;
    hideLabel(): CircleMarker;
    setLabelNoHide(noHide: boolean): void;
    bindLabel(content: string, options?: LabelOptions): CircleMarker;
    unbindLabel(): CircleMarker;
    updateLabelContent(content: string): void;
    getLabel(): Label;
  }
  declare interface FeatureGroup<T: ILayer> {
    clearLayers(): FeatureGroup<T>;
    bindLabel(content: string, options?: LabelOptions): FeatureGroup<T>;
    unbindLabel(): FeatureGroup<T>;
    updateLabelContent(content: string): FeatureGroup<T>;
  }
  declare interface Path {
    bindLabel(content: string, options?: LabelOptions): Path;
    unbindLabel(): Path;
    updateLabelContent(content: string): void;
  }
  declare interface LabelOptions {
    className?: string;
    clickable?: boolean;
    direction?: string;
    pane?: string;
    noHide?: boolean;
    offset?: Point;
    opacity?: number;
    zoomAnimation?: boolean;
  }
  declare type LabelStatic = {
    new(options?: LabelOptions): Label
  } & ClassStatic;

  declare var Label: LabelStatic;
  declare type Label = {
    onAdd(map: Map): void,
    onRemove(map: Map): void,
    setLatLng(latlng: LatLng): Label,
    setContent(content: string): Label,
    close(): void,
    updateZIndex(zIndex: number): void,
    setOpacity(opacity: number): void
  } & IEventPowered<Label>;
}
declare module "leaflet-label" {
  import typeof * as L from "leaflet";
}
