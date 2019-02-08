declare class Types$GeoJSON mixins SchemaType {
  constructor(key: string, options?: { [key: string]: any }): this;
  cast(geojson: { [key: string]: any }): this;
  static schemaName: "GeoJSON";
}

declare class Types$Point mixins SchemaType {
  constructor(key: string, options?: { [key: string]: any }): this;
  cast(geojson: { [key: string]: any }): this;
  static schemaName: "Point";
}

declare class Types$MultiPoint mixins SchemaType {
  constructor(key: string, options?: { [key: string]: any }): this;
  cast(geojson: { [key: string]: any }): this;
  static schemaName: "MultiPoint";
}

declare class Types$LineString mixins SchemaType {
  constructor(key: string, options?: { [key: string]: any }): this;
  cast(geojson: { [key: string]: any }): this;
  static schemaName: "LineString";
}

declare class Types$MultiLineString mixins SchemaType {
  constructor(key: string, options?: { [key: string]: any }): this;
  cast(geojson: { [key: string]: any }): this;
  static schemaName: "MultiLineString";
}

declare class Types$Polygon mixins SchemaType {
  constructor(key: string, options?: { [key: string]: any }): this;
  cast(geojson: { [key: string]: any }): this;
  static schemaName: "Polygon";
}

declare class Types$MultiPolygon mixins SchemaType {
  constructor(key: string, options?: { [key: string]: any }): this;
  cast(geojson: { [key: string]: any }): this;
  static schemaName: "MultiPolygon";
}

declare class Types$Geometry mixins SchemaType {
  constructor(key: string, options?: { [key: string]: any }): this;
  cast(geojson: { [key: string]: any }): this;
  static schemaName: "Geometry";
}

declare class Types$GeometryCollection mixins SchemaType {
  constructor(key: string, options?: { [key: string]: any }): this;
  cast(geojson: { [key: string]: any }): this;
  static schemaName: "GeometryCollection";
}

declare class Types$Feature mixins SchemaType {
  constructor(key: string, options?: { [key: string]: any }): this;
  cast(geojson: { [key: string]: any }): this;
  static schemaName: "Feature";
}

declare class Types$FeatureCollection mixins SchemaType {
  constructor(key: string, options?: { [key: string]: any }): this;
  cast(geojson: { [key: string]: any }): this;
  static schemaName: "FeatureCollection";
}
declare module "mongoose" {
}
declare module "mongoose-geojson-schema" {
}
