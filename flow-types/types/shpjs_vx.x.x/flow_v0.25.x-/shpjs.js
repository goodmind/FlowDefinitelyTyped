declare module "shpjs" {
  declare type shpjs$ShpJSBuffer =
    | Buffer
    | ArrayBuffer
    | {
        buffer: ArrayBuffer
      };

  declare type shpjs$FeatureCollectionWithFilename = {
    fileName?: string
  } & GeoJSON.FeatureCollection;

  declare interface shpjs$ShpJS {
    (
      base: string | shpjs$ShpJSBuffer,
      whiteList?: $ReadOnlyArray<string>
    ): Promise<
      | shpjs$FeatureCollectionWithFilename
      | shpjs$FeatureCollectionWithFilename[]
    >;
    parseZip(
      buffer: shpjs$ShpJSBuffer,
      whiteList?: $ReadOnlyArray<string>
    ): Promise<
      | shpjs$FeatureCollectionWithFilename
      | shpjs$FeatureCollectionWithFilename[]
    >;
    getShapeFile(
      base: string | shpjs$ShpJSBuffer,
      whiteList?: $ReadOnlyArray<string>
    ): Promise<
      | shpjs$FeatureCollectionWithFilename
      | shpjs$FeatureCollectionWithFilename[]
    >;
    combine(
      arr: [
        $ReadOnlyArray<GeoJSON.Geometry>,
        $ReadOnlyArray<GeoJSON.GeoJsonProperties>
      ]
    ): GeoJSON.FeatureCollection;
    parseShp(shp: shpjs$ShpJSBuffer, prj: string | Buffer): GeoJSON.Geometry[];
    parseDbf(
      dbf: shpjs$ShpJSBuffer,
      cpg: shpjs$ShpJSBuffer
    ): GeoJSON.GeoJsonProperties[];
  }
  declare var shpjs: shpjs$shpjs$ShpJS;
  declare module.exports: typeof shpjs;
}
