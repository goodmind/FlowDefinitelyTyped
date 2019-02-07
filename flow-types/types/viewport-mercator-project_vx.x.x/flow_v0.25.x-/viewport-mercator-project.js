declare module "viewport-mercator-project" {
  declare export interface ProjectOptions {
    topLeft?: boolean;
  }
  declare export type UnprojectOptions = {
    targetZ?: number
  } & ProjectOptions;

  declare export type Coordinates = [number, number];
  declare export type CoordinatesZ = [number, number, number];
  declare export type ViewMatrix = number[];
  declare export type ProjectionMatrix = number[];
  declare export interface ViewportOptions {
    width?: number;
    height?: number;
    viewMatrix?: ViewMatrix;
    projectionMatrix?: ProjectionMatrix;
  }
  declare export class Viewport {
    width: number;
    height: number;
    scale: number;
    viewMatrix: ViewMatrix;
    projectionMatrix: ProjectionMatrix;
    constructor(opts?: ViewportOptions): this;
    equals(viewport: Viewport): boolean;
    project(lngLat: Coordinates, opts?: ProjectOptions): Coordinates;
    project(lngLatZ: CoordinatesZ, opts?: ProjectOptions): CoordinatesZ;
    unproject(xy: Coordinates, opts?: UnprojectOptions): Coordinates;
    unproject(xyz: CoordinatesZ, opts?: UnprojectOptions): CoordinatesZ;
  }
  declare export type Padding =
    | number
    | {
        top: number,
        right: number,
        bottom: number,
        left: number
      };
  declare export type Bounds = [Coordinates, Coordinates];
  declare export interface WebMercatorViewportOptions {
    width?: number;
    height?: number;
    longitude?: number;
    latitude?: number;
    zoom?: number;
    pitch?: number;
    bearing?: number;
    altitude?: number;
    farZMultiplier?: number;
  }
  declare export class Vector3 mixins Array {}
  declare export class WebMercatorViewport mixins Viewport {
    latitude: number;
    longitude: number;
    zoom: number;
    pitch: number;
    bearing: number;
    altitude: number;
    center: Vector3;
    constructor(opts?: WebMercatorViewportOptions): this;
    projectFlat(lngLat: Coordinates, scale?: number): Coordinates;
    unprojectFlat(xy: Coordinates, scale?: number): Coordinates;
    getMapCenterByLngLatPosition(opts: {
      lngLat: Coordinates,
      pos: Coordinates
    }): Coordinates;
    fitBounds(
      bounds: Bounds,
      opts?: {
        padding?: Padding,
        offset?: Coordinates
      }
    ): WebMercatorViewport;
  }
  declare export default typeof WebMercatorViewport;

  declare export interface FittedBounds {
    latitude: number;
    longitude: number;
    zoom: number;
  }
  declare export function fitBounds(options: {
    width: number,
    height: number,
    bounds: Bounds,
    padding?: Padding,
    offset?: Coordinates
  }): FittedBounds;

  declare export interface BaseViewportProps {
    width: number;
    height: number;
    longitude: number;
    latitude: number;
    zoom: number;
  }
  declare export type ViewportProps = {
    pitch?: number,
    bearing?: number
  } & BaseViewportProps;

  declare export type NormalizedViewportProps = {
    pitch: number,
    bearing: number
  } & BaseViewportProps;

  declare export function normalizeViewportProps(
    props: ViewportProps
  ): NormalizedViewportProps;

  declare export function flyToViewport(
    startProps: BaseViewportProps,
    endProps: BaseViewportProps,
    t: number
  ): BaseViewportProps;

  declare export function lngLatToWorld(
    lngLat: Coordinates,
    scale: number
  ): Coordinates;

  declare export function worldToLngLat(
    point: Coordinates,
    scale: number
  ): Coordinates;

  declare export function worldToPixels(
    coordinates: Coordinates | CoordinatesZ,
    pixelProjectionMatrix: ProjectionMatrix
  ): CoordinatesZ;

  declare export function pixelsToWorld(
    pixels: Coordinates | CoordinatesZ,
    pixelUnprojectionMatrix: ProjectionMatrix,
    targetZ?: number
  ): CoordinatesZ;

  declare export function getMeterZoom(input: {
    latitude: number
  }): number;

  declare export interface DistanceScales {
    pixelsPerMeter: [number, number, number];
    metersPerPixel: [number, number, number];
    pixelsPerDegree: [number, number, number];
    degreesPerPixel: [number, number, number];
  }
  declare export type HighPrecisionDistanceScales = {
    pixelsPerDegree2: [number, number, number],
    pixelsPerMeter2: [number, number, number]
  } & DistanceScales;

  declare export interface BaseDistanceScalesInput {
    longitude: number;
    latitude: number;
  }
  declare export type DistanceScalesInput =
    | (BaseDistanceScalesInput & {
        zoom: number
      })
    | (BaseDistanceScalesInput & {
        scale: number
      });
  declare export type BaseHighPrecisionDistanceScalesInput = {
    highPrecision: true
  } & BaseDistanceScalesInput;

  declare export type HighPrecisionDistanceScalesInput =
    | (BaseHighPrecisionDistanceScalesInput & {
        zoom: number
      })
    | (BaseHighPrecisionDistanceScalesInput & {
        scale: number
      });
  declare export function getDistanceScales(
    input: DistanceScalesInput
  ): DistanceScales;

  declare export function getDistanceScales(
    input: HighPrecisionDistanceScalesInput
  ): HighPrecisionDistanceScales;

  declare export function getWorldPosition(input: {
    longitude: number,
    latitude: number,
    zoom: number,
    scale: number,
    meterOffset?: number,
    distanceScales?: DistanceScales
  }): Vector3;

  declare export function getViewMatrix(input: {
    height: number,
    pitch: number,
    bearing: number,
    altitude: number,
    center?: CoordinatesZ,
    flipY?: boolean
  }): ViewMatrix;

  declare export interface ProjectionParametersInput {
    width: number;
    height: number;
    pitch?: number;
    altitude?: number;
    farZMultiplier?: number;
  }
  declare export interface ProjectionParameters {
    fov: number;
    aspect: number;
    focalDistance: number;
    near: number;
    far: number;
  }
  declare export function getProjectionParameters(
    input: ProjectionParametersInput
  ): ProjectionParameters;

  declare export function getProjectionMatrix(
    input: ProjectionParametersInput
  ): ProjectionMatrix;
}
