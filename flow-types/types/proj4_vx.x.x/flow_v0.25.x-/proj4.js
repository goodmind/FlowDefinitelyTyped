declare module "proj4" {
  declare var npm$namespace$proj4: {
    Proj: typeof proj4$Proj,
    Point: typeof proj4$Point,
    toPoint: typeof proj4$toPoint,
    defs: typeof proj4$defs,
    transform: typeof proj4$transform,
    mgrs: typeof proj4$mgrs,
    defaultDatum: typeof proj4$defaultDatum,
    WGS84: typeof proj4$WGS84,
    version: typeof proj4$version
  };
  declare type proj4$TemplateCoordinates =
    | number[]
    | proj4$InterfaceCoordinates;

  declare interface proj4$InterfaceCoordinates {
    x: number;
    y: number;
    z?: number;
    m?: number;
  }

  declare interface proj4$InterfaceDatum {
    datum_type: number;
    a: number;
    b: number;
    es: number;
    ep2: number;
  }

  declare interface proj4$Converter {
    forward<T: proj4$TemplateCoordinates>(coordinates: T): T;
    inverse<T: proj4$TemplateCoordinates>(coordinates: T): T;
  }

  declare interface proj4$InterfaceProjection {
    datum: string;
    b: number;
    rf: number;
    sphere: number;
    es: number;
    e: number;
    ep2: number;
    forward(coordinates: proj4$TemplateCoordinates): number[];
    inverse(coordinates: proj4$TemplateCoordinates): number[];
  }

  declare interface proj4$ProjectionDefinition {
    title: string;
    projName?: string;
    ellps?: string;
    datum?: string;
    datumName?: string;
    rf?: number;
    lat0?: number;
    lat1?: number;
    lat2?: number;
    lat_ts?: number;
    long0?: number;
    long1?: number;
    long2?: number;
    alpha?: number;
    longc?: number;
    x0?: number;
    y0?: number;
    k0?: number;
    a?: number;
    b?: number;
    R_A?: true;
    zone?: number;
    utmSouth?: true;
    datum_params?: string | number[];
    to_meter?: number;
    units?: string;
    from_greenwich?: number;
    datumCode?: string;
    natGrids?: string;
    axis?: string;
  }

  declare var proj4$defaultDatum: string;

  declare function proj4$Proj(
    srsCode: any,
    callback?: any
  ): proj4$InterfaceProjection;

  declare var proj4$WGS84: any;

  /**
   * @deprecated v3
   */
  declare function proj4$Point(
    x: number,
    y: number,
    z?: number
  ): proj4$InterfaceCoordinates;

  declare function proj4$Point(
    coordinates: proj4$TemplateCoordinates | string
  ): proj4$InterfaceCoordinates;

  declare function proj4$toPoint(array: number[]): proj4$InterfaceCoordinates;

  declare function proj4$defs(
    name: string,
    projection: string | proj4$ProjectionDefinition
  ): void;

  declare function proj4$defs(name: string[][]): void[];

  declare function proj4$defs(name: string): proj4$ProjectionDefinition;

  declare function proj4$transform(
    source: proj4$InterfaceProjection,
    dest: proj4$InterfaceProjection,
    point: proj4$TemplateCoordinates
  ): any;

  declare function proj4$mgrs(coordinates: number[], accuracy: number): string;

  declare var proj4$version: string;
  declare function proj4(
    fromProjection: string,
    toProjection?: string
  ): proj4$Converter;

  declare function proj4<T: proj4$TemplateCoordinates>(
    toProjection: string,
    coordinates: T
  ): T;

  declare function proj4<T: proj4$TemplateCoordinates>(
    fromProjection: string,
    toProjection: string,
    coordinates: T
  ): T;

  declare export default typeof proj4;
}
