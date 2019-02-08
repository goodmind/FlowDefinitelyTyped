declare var npm$namespace$imageOverlay: {
  rotated: typeof imageOverlay$rotated
};
declare function imageOverlay$rotated(
  imgSrc: string | HTMLImageElement | HTMLCanvasElement,
  topleft: LatLngExpression,
  topright: LatLngExpression,
  bottomleft: LatLngExpression,
  options?: ImageOverlayOptions
): ImageOverlay$ImageOverlay$Rotated;
declare type ImageOverlay$Rotated = {
  reposition(
    topleft: LatLngExpression,
    topright: LatLngExpression,
    bottomleft: LatLngExpression
  ): void
} & ImageOverlay;
declare module "leaflet" {
}
declare module "leaflet-imageoverlay-rotated" {
  import typeof * as L from "leaflet";
}
