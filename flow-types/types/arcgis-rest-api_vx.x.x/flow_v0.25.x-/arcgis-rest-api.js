declare module "arcgis-rest-api" {
  declare export interface Feature {
    geometry: Geometry;
    attributes: any;
  }
  declare export interface Field {
    name: string;
    type: string;
    alias?: string;
    length?: number;
  }
  declare export type FeatureSet = {
    objectIdFieldName?: string,
    globalIdFieldName?: string,
    displayFieldName?: string,
    geometryType?: esriGeometryType,
    spatialReference?: SpatialReference,
    fields?: Field[],
    features: Feature[]
  } & HasZM;

  declare export type Position2D = [number, number];
  declare export type Position =
    | Position2D
    | [number, number, number]
    | [number, number, number, number];
  declare export interface CircularArc {
    c: [Position, Position2D];
  }
  declare export interface Arc {
    a: [Position, Position2D, number, number, number, number, number];
  }
  declare export type ElipticArc = Arc;
  declare export interface OldCircularArc {
    a: [Position, Position2D, number, number];
  }
  declare export interface BezierCurve {
    b: [Position, Position2D, Position2D];
  }
  declare export type JsonCurve =
    | CircularArc
    | Arc
    | OldCircularArc
    | BezierCurve;
  declare export interface SpatialReferenceWkid {
    wkid?: number;
    latestWkid?: number;
    vcsWkid?: number;
    latestVcsWkid?: number;
  }
  declare export interface SpatialReferenceWkt {
    wkt?: string;
    latestWkt?: string;
  }
  declare export type SpatialReference =
    | SpatialReferenceWkt
    | SpatialReferenceWkid;
  declare export interface Geometry {
    spatialReference?: SpatialReference;
  }
  declare export interface HasZM {
    hasZ?: boolean;
    hasM?: boolean;
  }
  declare export type Point = {
    x: number,
    y: number,
    z?: number,
    m?: number
  } & Geometry;

  declare export type Polyline = {
    paths: Position[][]
  } & HasZM &
    Geometry;

  declare export type PolylineWithCurves = {
    curvePaths: Array<Array<Position | JsonCurve>>
  } & HasZM &
    Geometry;

  declare export type Polygon = {
    rings: Position[][]
  } & HasZM &
    Geometry;

  declare export type PolygonWithCurves = {
    curveRings: Array<Array<Position | JsonCurve>>
  } & HasZM &
    Geometry;

  declare export type Multipoint = {
    points: Position[]
  } & HasZM &
    Geometry;

  declare export type Envelope = {
    xmin: number,
    xmax: number,
    ymin: number,
    ymax: number,
    zmin?: number,
    zmax?: number,
    mmin?: number,
    mmax?: number
  } & Geometry;

  declare export type esriGeometryType =
    | "esriGeometryPoint"
    | "esriGeometryMultipoint"
    | "esriGeometryPolyline"
    | "esriGeometryPolygon"
    | "esriGeometryEnvelope";
  declare export type Color = [number, number, number, number];
  declare export type SimpleMarkerSymbolStyle =
    | "esriSMSCircle"
    | "esriSMSCross"
    | "esriSMSDiamond"
    | "esriSMSSquare"
    | "esriSMSX"
    | "esriSMSTriangle";
  declare export type SimpleLineSymbolStyle =
    | "esriSLSDash"
    | "esriSLSDashDot"
    | "esriSLSDashDotDot"
    | "esriSLSDot"
    | "esriSLSNull"
    | "esriSLSSolid";
  declare export type SimpleFillSymbolStyle =
    | "esriSFSBackwardDiagonal"
    | "esriSFSCross"
    | "esriSFSDiagonalCross"
    | "esriSFSForwardDiagonal"
    | "esriSFSHorizontal"
    | "esriSFSNull"
    | "esriSFSSolid"
    | "esriSFSVertical";
  declare export type SymbolType =
    | "esriSLS"
    | "esriSMS"
    | "esriSFS"
    | "esriPMS"
    | "esriPFS"
    | "esriTS";
  declare export interface Symbol {
    type: SymbolType;
    style?: string;
  }
  declare export type SimpleLineSymbol = {
    type: "esriSLS",
    style?: SimpleLineSymbolStyle,
    color?: Color,
    width?: number
  } & Symbol;

  declare export type MarkerSymbol = {
    angle?: number,
    xoffset?: number,
    yoffset?: number
  } & Symbol;

  declare export type SimpleMarkerSymbol = {
    type: "esriSMS",
    style?: SimpleMarkerSymbolStyle,
    color?: Color,
    size?: number,
    outline?: SimpleLineSymbol
  } & MarkerSymbol;

  declare export type SimpleFillSymbol = {
    type: "esriSFS",
    style?: SimpleFillSymbolStyle,
    color?: Color,
    outline?: SimpleLineSymbol
  } & Symbol;

  declare export interface PictureSourced {
    url?: string;
    imageData?: string;
    contentType?: string;
    width?: number;
    height?: number;
    angle?: number;
    xoffset?: number;
    yoffset?: number;
  }
  declare export type PictureMarkerSymbol = {
    type: "esriPMS"
  } & MarkerSymbol &
    PictureSourced;

  declare export type PictureFillSymbol = {
    type: "esriPFS",
    outline?: SimpleLineSymbol,
    xscale?: number,
    yscale?: number
  } & Symbol &
    PictureSourced;

  declare export interface Font {
    family?: string;
    size?: number;
    style?: "italic" | "normal" | "oblique";
    weight?: "bold" | "bolder" | "lighter" | "normal";
    decoration?: "line-through" | "underline" | "none";
  }
  declare export type TextSymbol = {
    type: "esriTS",
    color?: Color,
    backgroundColor?: Color,
    borderLineSize?: number,
    borderLineColor?: Color,
    haloSize?: number,
    haloColor?: Color,
    verticalAlignment?: "baseline" | "top" | "middle" | "bottom",
    horizontalAlignment?: "left" | "right" | "center" | "justify",
    rightToLeft?: boolean,
    kerning?: boolean,
    font?: Font,
    text?: string
  } & MarkerSymbol;
}
