declare module "react-leaflet" {
  import typeof * as Leaflet from "leaflet";

  import typeof * as React from "react";

  declare export type Children = React.ReactNode | React.ReactNode[];
  declare export interface MapEvents {
    onclick?: (event: Leaflet.LeafletMouseEvent) => void;
    ondblclick?: (event: Leaflet.LeafletMouseEvent) => void;
    onmousedown?: (event: Leaflet.LeafletMouseEvent) => void;
    onmouseup?: (event: Leaflet.LeafletMouseEvent) => void;
    onmouseover?: (event: Leaflet.LeafletMouseEvent) => void;
    onmouseout?: (event: Leaflet.LeafletMouseEvent) => void;
    onmousemove?: (event: Leaflet.LeafletMouseEvent) => void;
    oncontextmenu?: (event: Leaflet.LeafletMouseEvent) => void;
    onfocus?: (event: Leaflet.LeafletEvent) => void;
    onblur?: (event: Leaflet.LeafletEvent) => void;
    onpreclick?: (event: Leaflet.LeafletMouseEvent) => void;
    onload?: (event: Leaflet.LeafletEvent) => void;
    onunload?: (event: Leaflet.LeafletEvent) => void;
    onviewreset?: (event: Leaflet.LeafletEvent) => void;
    onmove?: (event: Leaflet.LeafletEvent) => void;
    onmovestart?: (event: Leaflet.LeafletEvent) => void;
    onmoveend?: (event: Leaflet.LeafletEvent) => void;
    ondragstart?: (event: Leaflet.LeafletEvent) => void;
    ondrag?: (event: Leaflet.LeafletEvent) => void;
    ondragend?: (event: Leaflet.DragEndEvent) => void;
    onzoomstart?: (event: Leaflet.LeafletEvent) => void;
    onzoomend?: (event: Leaflet.LeafletEvent) => void;
    onzoomlevelschange?: (event: Leaflet.LeafletEvent) => void;
    onresize?: (event: Leaflet.ResizeEvent) => void;
    onautopanstart?: (event: Leaflet.LeafletEvent) => void;
    onlayeradd?: (event: Leaflet.LayerEvent) => void;
    onlayerremove?: (event: Leaflet.LayerEvent) => void;
    onbaselayerchange?: (event: Leaflet.LayersControlEvent) => void;
    onoverlayadd?: (event: Leaflet.LayersControlEvent) => void;
    onoverlayremove?: (event: Leaflet.LayersControlEvent) => void;
    onlocationfound?: (event: Leaflet.LocationEvent) => void;
    onlocationerror?: (event: Leaflet.ErrorEvent) => void;
    onpopupopen?: (event: Leaflet.PopupEvent) => void;
    onpopupclose?: (event: Leaflet.PopupEvent) => void;
  }
  declare export interface MarkerEvents {
    onclick?: (event: Leaflet.LeafletMouseEvent) => void;
    ondblclick?: (event: Leaflet.LeafletMouseEvent) => void;
    onmousedown?: (event: Leaflet.LeafletMouseEvent) => void;
    onmouseover?: (event: Leaflet.LeafletMouseEvent) => void;
    onmouseout?: (event: Leaflet.LeafletMouseEvent) => void;
    oncontextmenu?: (event: Leaflet.LeafletMouseEvent) => void;
    ondragstart?: (event: Leaflet.LeafletEvent) => void;
    ondrag?: (event: Leaflet.LeafletEvent) => void;
    ondragend?: (event: Leaflet.DragEndEvent) => void;
    onmove?: (event: Leaflet.LeafletEvent) => void;
    onadd?: (event: Leaflet.LeafletEvent) => void;
    onremove?: (event: Leaflet.LeafletEvent) => void;
    onpopupopen?: (event: Leaflet.PopupEvent) => void;
    onpopupclose?: (event: Leaflet.PopupEvent) => void;
  }
  declare export interface TileLayerEvents {
    onloading?: (event: Leaflet.LeafletEvent) => void;
    onload?: (event: Leaflet.LeafletEvent) => void;
    ontileloadstart?: (event: Leaflet.TileEvent) => void;
    ontileload?: (event: Leaflet.TileEvent) => void;
    ontileunload?: (event: Leaflet.TileEvent) => void;
    ontileerror?: (event: Leaflet.TileEvent) => void;
  }
  declare export interface PathEvents {
    onclick?: (event: Leaflet.LeafletMouseEvent) => void;
    ondblclick?: (event: Leaflet.LeafletMouseEvent) => void;
    onmousedown?: (event: Leaflet.LeafletMouseEvent) => void;
    onmouseover?: (event: Leaflet.LeafletMouseEvent) => void;
    onmouseout?: (event: Leaflet.LeafletMouseEvent) => void;
    oncontextmenu?: (event: Leaflet.LeafletMouseEvent) => void;
    onadd?: (event: Leaflet.LeafletEvent) => void;
    onremove?: (event: Leaflet.LeafletEvent) => void;
    onpopupopen?: (event: Leaflet.PopupEvent) => void;
    onpopupclose?: (event: Leaflet.PopupEvent) => void;
  }
  declare export interface FeatureGroupEvents {
    onclick?: (event: Leaflet.LeafletMouseEvent) => void;
    ondblclick?: (event: Leaflet.LeafletMouseEvent) => void;
    onmouseover?: (event: Leaflet.LeafletMouseEvent) => void;
    onmouseout?: (event: Leaflet.LeafletMouseEvent) => void;
    oncontextmenu?: (event: Leaflet.LeafletMouseEvent) => void;
    onlayeradd?: (event: Leaflet.LayerEvent) => void;
    onlayerremove?: (event: Leaflet.LayerEvent) => void;
  }
  declare export interface LayersControlEvents {
    onbaselayerchange?: (event: Leaflet.LayersControlEvent) => void;
    onoverlayadd?: (event: Leaflet.LayersControlEvent) => void;
    onoverlayremove?: (event: Leaflet.LayersControlEvent) => void;
  }
  declare export type LeafletEvents = MapEvents &
    MarkerEvents &
    TileLayerEvents &
    PathEvents &
    FeatureGroupEvents &
    LayersControlEvents;
  declare export class MapComponent<P, E: Leaflet.Class>
    mixins React.Component<P> {
    _leafletEvents: LeafletEvents;
    leafletElement: E;
    extractLeafletEvents(props: P): LeafletEvents;
    bindLeafletEvents(next: LeafletEvents, prev: LeafletEvents): LeafletEvents;
    fireLeafletEvent(type: string, data: any): void;
    getOptions(props: P): P;
  }
  declare export type MapProps = {
    animate?: boolean,
    bounds?: Leaflet.LatLngBoundsExpression,
    boundsOptions?: Leaflet.FitBoundsOptions,
    center?: Leaflet.LatLngExpression,
    children?: Children,
    className?: string,
    id?: string,
    maxBounds?: Leaflet.LatLngBoundsExpression,
    maxZoom?: number,
    minZoom?: number,
    style?: React.CSSProperties,
    useFlyTo?: boolean,
    zoom?: number
  } & MapEvents &
    Leaflet.MapOptions &
    Leaflet.LocateOptions &
    Leaflet.FitBoundsOptions;

  declare export class Map<P: MapProps = MapProps, E: Leaflet.Map = Leaflet.Map>
    mixins MapComponent<P, E> {
    className: string;
    container: HTMLDivElement;
    getChildContext(): {
      layerContainer: E,
      map: E
    };
    createLeafletElement(props: P): E;
    updateLeafletElement(fromProps: P, toProps: P): void;
    bindContainer(container: HTMLDivElement): void;
    shouldUpdateCenter(
      next: Leaflet.LatLngExpression,
      prev: Leaflet.LatLngExpression
    ): boolean;
    shouldUpdateBounds(
      next: Leaflet.LatLngBoundsExpression,
      prev: Leaflet.LatLngBoundsExpression
    ): boolean;
  }
  declare export interface PaneProps {
    name?: string;
    children?: Children;
    map?: Leaflet.Map;
    className?: string;
    style?: React.CSSProperties;
    pane?: string;
  }
  declare export interface PaneState {
    name?: string;
  }
  declare export class Pane<P: PaneProps = PaneProps, S: PaneState = PaneState>
    mixins React.Component<P, S> {
    getChildContext(): {
      pane: string
    };
    createPane(props: P): void;
    removePane(): void;
    setStyle(arg: {
      style?: string,
      className?: string
    }): void;
    getParentPane(): HTMLElement | void;
    getPane(name: string): HTMLElement | void;
  }
  declare export interface MapLayerProps {
    children?: Children;
  }
  declare export interface LayerContainer {
    addLayer(layer: Leaflet.Layer): this;
    removeLayer(layer: number | Leaflet.Layer): this;
  }
  declare export class MapLayer<
    P: MapLayerProps = MapLayerProps,
    E: Leaflet.Class = Leaflet.Class
  > mixins MapComponent<P, E> {
    createLeafletElement(props: P): E;
    updateLeafletElement(fromProps: P, toProps: P): void;
    layerContainer: LayerContainer | Leaflet.Map;
  }
  declare export type GridLayerProps = {
    children?: Children
  } & Leaflet.GridLayerOptions;

  declare export class GridLayer<
    P: GridLayerProps = GridLayerProps,
    E: Leaflet.GridLayer = Leaflet.GridLayer
  > mixins MapLayer<P, E> {}
  declare export type TileLayerProps = {
    children?: Children,
    url: string
  } & TileLayerEvents &
    Leaflet.TileLayerOptions;

  declare export class TileLayer<
    P: TileLayerProps = TileLayerProps,
    E: Leaflet.TileLayer = Leaflet.TileLayer
  > mixins GridLayer<P, E> {}
  declare export type WMSTileLayerProps = {
    children?: Children,
    url: string
  } & TileLayerEvents &
    Leaflet.WMSOptions;

  declare export class WMSTileLayer<
    P: WMSTileLayerProps = WMSTileLayerProps,
    E: Leaflet.TileLayer.WMS = Leaflet.TileLayer.WMS
  > mixins GridLayer<P, E> {}
  declare export type ImageOverlayProps = {
    bounds: Leaflet.LatLngBoundsExpression,
    children?: Children,
    url: string
  } & Leaflet.ImageOverlayOptions;

  declare export class ImageOverlay<
    P: ImageOverlayProps = ImageOverlayProps,
    E: Leaflet.ImageOverlay = Leaflet.ImageOverlay
  > mixins MapLayer<P, E> {
    getChildContext(): {
      popupContainer: E
    };
  }
  declare export interface LayerGroupProps {
    children?: Children;
  }
  declare export class LayerGroup<
    P: LayerGroupProps = LayerGroupProps,
    E: Leaflet.LayerGroup = Leaflet.LayerGroup
  > mixins MapLayer<P, E> {
    getChildContext(): {
      layerContainer: E
    };
  }
  declare export type MarkerProps = {
    children?: Children,
    position: Leaflet.LatLngExpression
  } & MarkerEvents &
    Leaflet.MarkerOptions;

  declare export class Marker<
    P: MarkerProps = MarkerProps,
    E: Leaflet.Marker = Leaflet.Marker
  > mixins MapLayer<P, E> {
    getChildContext(): {
      popupContainer: E
    };
  }
  declare export type PathProps = {} & PathEvents &
    Leaflet.PathOptions &
    MapLayerProps;

  declare export class Path<P: PathProps, E> mixins MapLayer<P, E> {
    getChildContext(): {
      popupContainer: E
    };
    getPathOptions(props: P): Leaflet.PathOptions;
    setStyle(options: Leaflet.PathOptions): void;
    setStyleIfChanged(fromProps: P, toProps: P): void;
  }
  declare export type CircleProps = {
    center: Leaflet.LatLngExpression,
    children?: Children,
    radius: number
  } & PathEvents &
    Leaflet.CircleMarkerOptions;

  declare export class Circle<
    P: CircleProps = CircleProps,
    E: Leaflet.Circle = Leaflet.Circle
  > mixins Path<P, E> {}
  declare export type CircleMarkerProps = {
    center: Leaflet.LatLngExpression,
    children?: Children,
    radius: number
  } & PathEvents &
    Leaflet.CircleMarkerOptions;

  declare export class CircleMarker<
    P: CircleMarkerProps = CircleMarkerProps,
    E: Leaflet.CircleMarker = Leaflet.CircleMarker
  > mixins Path<P, E> {}
  declare export type FeatureGroupProps = {
    children?: Children
  } & FeatureGroupEvents &
    Leaflet.PathOptions;

  declare export class FeatureGroup<
    P: FeatureGroupProps = FeatureGroupProps,
    E: Leaflet.FeatureGroup = Leaflet.FeatureGroup
  > mixins Path<P, E> {
    getChildContext(): {
      layerContainer: E,
      popupContainer: E
    };
  }
  declare export type GeoJSONProps = {
    children?: Children,
    data: GeoJSON.GeoJsonObject,
    style?: Leaflet.StyleFunction
  } & FeatureGroupEvents &
    Leaflet.GeoJSONOptions;

  declare export class GeoJSON<
    P: GeoJSONProps = GeoJSONProps,
    E: Leaflet.GeoJSON = Leaflet.GeoJSON
  > mixins Path<P, E> {}
  declare export type PolylineProps = {
    children?: Children,
    positions: Leaflet.LatLngExpression[] | Leaflet.LatLngExpression[][]
  } & PathEvents &
    Leaflet.PolylineOptions;

  declare export class Polyline<
    P: PolylineProps = PolylineProps,
    E: Leaflet.Polyline = Leaflet.Polyline
  > mixins Path<P, E> {}
  declare export type PolygonProps = {
    children?: Children,
    popupContainer?: Leaflet.FeatureGroup,
    positions:
      | Leaflet.LatLngExpression[]
      | Leaflet.LatLngExpression[][]
      | Leaflet.LatLngExpression[][][]
  } & PathEvents &
    Leaflet.PolylineOptions;

  declare export class Polygon<
    P: PolygonProps = PolygonProps,
    E: Leaflet.Polygon = Leaflet.Polygon
  > mixins Path<P, E> {}
  declare export type RectangleProps = {
    children?: Children,
    bounds: Leaflet.LatLngBoundsExpression,
    popupContainer?: Leaflet.FeatureGroup
  } & PathEvents &
    Leaflet.PolylineOptions;

  declare export class Rectangle<
    P: RectangleProps = RectangleProps,
    E: Leaflet.Rectangle = Leaflet.Rectangle
  > mixins Path<P, E> {}
  declare export type PopupProps = {
    children?: Children,
    position?: Leaflet.LatLngExpression
  } & Leaflet.PopupOptions;

  declare export class Popup<
    P: PopupProps = PopupProps,
    E: Leaflet.Popup = Leaflet.Popup
  > mixins MapComponent<P, E> {
    onPopupOpen(arg: {
      popup: E
    }): void;
    onPopupClose(arg: {
      popup: E
    }): void;
    renderPopupContent(): void;
    removePopupContent(): void;
  }
  declare export type TooltipProps = {
    children?: Children
  } & Leaflet.TooltipOptions;

  declare export class Tooltip<
    P: TooltipProps = TooltipProps,
    E: Leaflet.Tooltip = Leaflet.Tooltip
  > mixins MapComponent<P, E> {
    onTooltipOpen(arg: {
      tooltip: E
    }): void;
    onTooltipClose(arg: {
      tooltip: E
    }): void;
    renderTooltipContent(): void;
    removeTooltipContent(): void;
  }
  declare export type MapControlProps = Leaflet.ControlOptions;
  declare export class MapControl<
    P: MapControlProps = MapControlProps,
    E: Leaflet.Control = Leaflet.Control
  > mixins React.Component<P> {
    leafletElement: E;
    createLeafletElement(props: P): E;
    updateLeafletElement(fromProps: P, toProps: P): void;
  }
  declare export type AttributionControlProps = Leaflet.Control.AttributionOptions;
  declare export class AttributionControl<
    P: AttributionControlProps = AttributionControlProps,
    E: Leaflet.Control.Attribution = Leaflet.Control.Attribution
  > mixins MapControl<P, E> {}
  declare export type LayersControlProps = {
    baseLayers?: Leaflet.Control.LayersObject,
    children?: Children,
    overlays?: Leaflet.Control.LayersObject
  } & LayersControlEvents &
    undefined.LayersOptions;

  declare export class LayersControl<
    P: LayersControlProps = LayersControlProps,
    E: Leaflet.Control.Layers = Leaflet.Control.Layers
  > mixins MapControl<P, E> {}

  declare var npm$namespace$LayersControl: {
    ControlledLayer: typeof LayersControl$ControlledLayer,
    BaseLayer: typeof LayersControl$BaseLayer,
    Overlay: typeof LayersControl$Overlay
  };
  declare interface LayersControl$BaseControlledLayerProps {
    checked?: boolean;
    children?: Children;
    removeLayer?: (layer: Leaflet.Layer) => void;
    removeLayerControl?: (layer: Leaflet.Layer) => void;
  }

  declare type LayersControl$ControlledLayerProps = {
    addBaseLayer?: (
      layer: Leaflet.Layer,
      name: string,
      checked: boolean
    ) => void,
    addOverlay?: (layer: Leaflet.Layer, name: string, checked: boolean) => void,
    name: string
  } & BaseControlledLayerProps;

  declare class LayersControl$ControlledLayer<
    P: LayersControl$BaseControlledLayerProps = LayersControl$BaseControlledLayerProps
  > mixins React.Component<P> {
    layer: Leaflet.Layer;
    getChildContext(): {
      layerContainer: LayerContainer
    };
    addLayer(): void;
    removeLayer(layer: Leaflet.Layer): void;
  }

  declare class LayersControl$BaseLayer<
    P: LayersControl$ControlledLayerProps = LayersControl$ControlledLayerProps
  > mixins ControlledLayer<P> {}

  declare class LayersControl$Overlay<
    P: LayersControl$ControlledLayerProps = LayersControl$ControlledLayerProps
  > mixins ControlledLayer<P> {}
  declare export type ScaleControlProps = Leaflet.Control.ScaleOptions;
  declare export class ScaleControl<
    P: ScaleControlProps = ScaleControlProps,
    E: Leaflet.Control.Scale = Leaflet.Control.Scale
  > mixins MapControl<P, E> {}
  declare export type ZoomControlProps = Leaflet.Control.ZoomOptions;
  declare export class ZoomControl<
    P: ZoomControlProps = ZoomControlProps,
    E: Leaflet.Control.Zoom = Leaflet.Control.Zoom
  > mixins MapControl<P, E> {}
}
