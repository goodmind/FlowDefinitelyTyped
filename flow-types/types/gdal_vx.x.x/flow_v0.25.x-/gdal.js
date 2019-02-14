declare module "gdal" {
  declare export type TypedArray =
    | Int8Array
    | Uint8Array
    | Uint8ClampedArray
    | Int16Array
    | Uint16Array
    | Int32Array
    | Uint32Array
    | Float32Array
    | Float64Array;
  declare export type Resampling =
    | "NEAREST"
    | "GAUSS"
    | "CUBIC"
    | "AVERAGE"
    | "MODE"
    | "AVERAGE_MAGPHASE"
    | "NONE";
  declare export interface XY {
    x: number;
    y: number;
  }
  declare export type XYZ = {
    z: number
  } & XY;

  declare export interface EnvelopeBounds {
    minX: number;
    maxX: number;
    minY: number;
    maxY: number;
  }
  declare export type Envelope3DBounds = {
    minZ: number,
    maxZ: number
  } & EnvelopeBounds;

  declare export interface RasterBandStatistics {
    min: number;
    max: number;
    mean: number;
    std_dev: number;
  }
  declare export interface RasterBandPixelsWriteOptions {
    buffer_width?: number;
    buffer_height?: number;
    pixel_space?: number;
    line_space?: number;
  }
  declare export interface RasterBandPixelsReadOptions {
    buffer_width?: number;
    buffer_height?: number;
    pixel_space?: number;
    line_space?: number;
    data_type?: string;
  }
  declare export interface ContourGenerateOptions {
    src: RasterBand;
    dst: Layer;
    offset?: number;
    interval?: number;
    fixedLevels?: number[];
    nodata?: number;
    idField?: number;
    elevField?: number;
  }
  declare export interface FillNoDataOptions {
    src: RasterBand;
    mask?: RasterBand;
    searchDist: number;
    smoothingIterations?: number;
  }
  declare export interface PolygonizeOptions {
    src: RasterBand;
    dst: Layer;
    mask?: RasterBand;
    pixValField: number;
    connectedness?: number;
    useFloats?: boolean;
  }
  declare export interface ReprojectImageOptions {
    src: Dataset;
    dst: Dataset;
    s_srs: SpatialReference;
    t_srs: SpatialReference;
    resampling?: string;
    cutline?: Geometry;
    srcBands?: number[];
    dstBands?: number[];
    srcAlphaBand?: number;
    dstAlphaBand?: number;
    srcNodata?: number;
    dstNodata?: number;
    memoryLimit?: number;
    maxError?: number;
    multi?: boolean;
    options?: string[] | { [key: string]: any };
  }
  declare export interface SieveFilterOptions {
    src: RasterBand;
    dst: RasterBand;
    mask?: RasterBand;
    threshold: number;
    connectedness?: number;
  }
  declare export interface SuggestedWarpOutputOptions {
    src: Dataset;
    s_srs: SpatialReference;
    t_srs: SpatialReference;
    maxError?: number;
  }
  declare export var CPLE_AppDefined: number;
  declare export var CPLE_AssertionFailed: number;
  declare export var CPLE_FileIO: number;
  declare export var CPLE_IllegalArg: number;
  declare export var CPLE_None: number;
  declare export var CPLE_NotSupported: number;
  declare export var CPLE_NoWriteAccess: number;
  declare export var CPLE_ObjectNull: number;
  declare export var CPLE_OpenFailed: number;
  declare export var CPLE_OutOfMemory: number;
  declare export var CPLE_UserInterrupt: number;
  declare export var CE_Debug: number;
  declare export var CE_Failure: number;
  declare export var CE_Fatal: number;
  declare export var CE_None: number;
  declare export var CE_Warning: number;
  declare export var DCAP_CREATE: string;
  declare export var DCAP_CREATECOPY: string;
  declare export var DCAP_VIRTUALIO: string;
  declare export var DMD_CREATIONDATATYPES: string;
  declare export var DMD_CREATIONOPTIONLIST: string;
  declare export var DMD_EXTENSION: string;
  declare export var DMD_HELPTOPIC: string;
  declare export var DMD_LONGNAME: string;
  declare export var DMD_MIMETYPE: string;
  declare export var GCI_AlphaBand: string;
  declare export var GCI_BlackBand: string;
  declare export var GCI_BlueBand: string;
  declare export var GCI_CyanBand: string;
  declare export var GCI_GrayIndex: string;
  declare export var GCI_GreenBand: string;
  declare export var GCI_HueBand: string;
  declare export var GCI_LightnessBand: string;
  declare export var GCI_MagentaBand: string;
  declare export var GCI_PaletteIndex: string;
  declare export var GCI_RedBand: string;
  declare export var GCI_SaturationBand: string;
  declare export var GCI_Undefined: string;
  declare export var GCI_YCbCr_CbBand: string;
  declare export var GCI_YCbCr_CrBand: string;
  declare export var GCI_YCbCr_YBand: string;
  declare export var GCI_YellowBand: string;
  declare export var GDT_Byte: string;
  declare export var GDT_CFloat32: string;
  declare export var GDT_CFloat64: string;
  declare export var GDT_CInt16: string;
  declare export var GDT_CInt32: string;
  declare export var GDT_Float32: string;
  declare export var GDT_Float64: string;
  declare export var GDT_Int16: string;
  declare export var GDT_Int32: string;
  declare export var GDT_UInt16: string;
  declare export var GDT_UInt32: string;
  declare export var GDT_Unknown: string;
  declare export var GRA_Average: string;
  declare export var GRA_Bilinear: string;
  declare export var GRA_Cubic: string;
  declare export var GRA_CubicSpline: string;
  declare export var GRA_Lanczos: string;
  declare export var GRA_Mode: string;
  declare export var GRA_NearestNeighbor: string;
  declare export var ODrCCreateDataSource: string;
  declare export var ODrCDeleteDataSource: string;
  declare export var ODsCCreateGeomFieldAfterCreateLayer: string;
  declare export var ODsCCreateLayer: string;
  declare export var ODsCDeleteLayer: string;
  declare export var OFTBinary: string;
  declare export var OFTDate: string;
  declare export var OFTDateTime: string;
  declare export var OFTInteger: string;
  declare export var OFTIntegerList: string;
  declare export var OFTReal: string;
  declare export var OFTRealList: string;
  declare export var OFTString: string;
  declare export var OFTStringList: string;
  declare export var OFTTime: string;
  declare export var OFTWideString: string;
  declare export var OFTWideStringList: string;
  declare export var OJLeft: string;
  declare export var OJRight: string;
  declare export var OJUndefined: string;
  declare export var OLCAlterFieldDefn: string;
  declare export var OLCCreateField: string;
  declare export var OLCCreateGeomField: string;
  declare export var OLCDeleteFeature: string;
  declare export var OLCDeleteField: string;
  declare export var OLCFastFeatureCount: string;
  declare export var OLCFastGetExtent: string;
  declare export var OLCFastSetNextByIndex: string;
  declare export var OLCFastSpatialFilter: string;
  declare export var OLCIgnoreFields: string;
  declare export var OLCRandomRead: string;
  declare export var OLCRandomWrite: string;
  declare export var OLCReorderFields: string;
  declare export var OLCSequentialWrite: string;
  declare export var OLCStringsAsUTF8: string;
  declare export var OLCTransactions: string;
  declare export var wkbNDR: string;
  declare export var wkbXDR: string;
  declare export var wkb25DBit: number;
  declare export var wkbGeometryCollection: number;
  declare export var wkbGeometryCollection25D: number;
  declare export var wkbLinearRing: string;
  declare export var wkbLinearRing25D: number;
  declare export var wkbLineString: number;
  declare export var wkbLineString25D: number;
  declare export var wkbMultiLineString: number;
  declare export var wkbMultiLineString25D: number;
  declare export var wkbMultiPoint: number;
  declare export var wkbMultiPoint25D: number;
  declare export var wkbMultiPolygon: number;
  declare export var wkbMultiPolygon25D: number;
  declare export var wkbNone: number;
  declare export var wkbPoint: number;
  declare export var wkbPoint25D: number;
  declare export var wkbPolygon: number;
  declare export var wkbPolygon25D: number;
  declare export var wkbUnknown: number;
  declare export var wkbVariantIso: string;
  declare export var wkbVariantOgc: string;
  declare export var wkbVariantOldOgc: string;
  declare export class CoordinateTransformation {
    constructor(
      source: SpatialReference,
      target: SpatialReference | Dataset
    ): this;
    transformPoint(x: number, y: number, z?: number): XYZ;
  }
  declare export interface Dataset {
    buildOverviews(
      resampling: Resampling,
      overviews: number[],
      bands?: number[]
    ): void;
    close(): void;
    executeSQL(
      statement: string,
      spatial_filter?: Geometry,
      dialect?: string
    ): Layer;
    flush(): void;
    getFileList(): string[];
    getGCPProjection(): string;
    getGCPs(): { [key: string]: any }[];
    getMetadata(domain?: string): { [key: string]: any };
    setGCPs(gcps: { [key: string]: any }[], projection: string): void;
    testCapability(capability: string): boolean;
    +bands: DatasetBands;
    +description: string;
    +driver: Driver;
    geoTransform: number[];
    +layers: DatasetLayers;
    +rasterSize: XY;
    srs: SpatialReference;
  }
  declare export interface DatasetBands {
    count(): number;
    create(dataType: number): RasterBand;
    forEach(callback: (band: RasterBand, i: number) => void): void;
    get(id: number): RasterBand;
    map<T>(callback: (band: RasterBand, i: number) => T): T[];
    +ds: Dataset;
  }
  declare export interface DatasetLayers {
    copy(
      src_lyr_name: string,
      dst_lyr_name: string,
      options?: { [key: string]: any } | string[]
    ): Layer;
    count(): number;
    create(
      name: string,
      srs: SpatialReference,
      geomType: number | Geometry,
      creation_options: string[] | { [key: string]: any }
    ): Layer;
    forEach(callback: (layer: Layer, i: number) => void): void;
    get(key: string | number): Layer;
    map<T>(callback: (layer: Layer, i: number) => T): T[];
    remove(index: number): void;
    +ds: Dataset;
  }
  declare export interface Driver {
    copyFiles(name_old: string, name_new: string): void;
    create(
      filename: string,
      x_size?: number,
      y_size?: number,
      band_count?: number,
      data_type?: number,
      creation_options?: string[] | { [key: string]: any }
    ): Dataset;
    createCopy(
      filename: string,
      src: Dataset,
      strict?: boolean,
      options?: string[] | { [key: string]: any }
    ): Dataset;
    deleteDataset(filename: string): void;
    getMetadata(domain?: string): { [key: string]: any };
    open(path: string, mode?: "r" | "r+"): Dataset;
    rename(new_name: string, old_name: string): void;
    +description: string;
  }
  declare export class Envelope {
    constructor(bounds: EnvelopeBounds): this;
    contains(envelope: Envelope): boolean;
    intersect(envelope: Envelope): void;
    intersects(envelope: Envelope): boolean;
    isEmpty(): boolean;
    merge(envelope: Envelope): void;
    toPolygon(): Polygon;
  }
  declare export class Envelope3D mixins Envelope {
    constructor(bounds: Envelope3DBounds): this;
  }
  declare export class Feature {
    constructor(definition: Layer | FeatureDefn): this;
    clone(): Feature;
    destroy(): void;
    equals(feature: Feature): boolean;
    getFieldDefn(index: number): FieldDefn;
    getGeometry(): Geometry;
    setFrom(feature: Feature, index_map?: number[], forgiving?: boolean): void;
    setGeometry(geometry: Geometry): void;
    defn: FeatureDefn;
    fid: number;
    fields: FeatureFields;
  }
  declare export class FeatureDefn {
    constructor(): this;
    clone(): FeatureDefn;
    fields: FeatureDefnFields;
    geomIgnored: boolean;
    geomType: number;
    name: string;
    styleIgnored: boolean;
  }
  declare export interface FeatureDefnFields {
    add(field: FieldDefn | FieldDefn[]): void;
    count(): number;
    forEach(callback: (field: FieldDefn, i: number) => void): void;
    get(key: string | number): FieldDefn;
    getNames(): string[];
    indexOf(name: string): number;
    map<T>(callback: (field: FieldDefn, i: number) => T): T[];
    remove(key: string | number): void;
    reorder(map: number[]): void;
    +featureDefn: FeatureDefn;
  }
  declare export interface FeatureFields {
    count(): number;
    forEach(callback: (value: any, key: string) => void): void;
    get(key: string | number): any;
    getNames(): string[];
    indexOf(name: string): number;
    map<T>(callback: (value: any, key: string) => T): T[];
    reset(values: { [key: string]: any }, value: any): void;
    set(key: string | number, value: any): void;
    toArray(): any[];
    toJSON(): string;
    toObject(): { [key: string]: any };
    +feature: Feature;
  }
  declare export class FieldDefn {
    constructor(name: string, type: string): this;
    ignored: boolean;
    justification: string;
    name: string;
    precision: number;
    type: string;
    width: number;
  }
  declare export interface GDALDrivers {
    count(): number;
    forEach(callback: (driver: Driver, i: number) => void): void;
    get(index: number | string): Driver;
    getNames(): string[];
    map<T>(callback: (driver: Driver, i: number) => T): T[];
  }
  declare export class Geometry {
    static create(type: number): Geometry;
    static fromWKB(wkb: number, srs?: SpatialReference): Geometry;
    static fromWKT(wkt: string, srs?: SpatialReference): Geometry;
    static getConstructor(type: number): Geometry;
    static getName(type: number): string;
    boundary(): Geometry;
    buffer(distance: number, segments: number): Geometry;
    centroid(): Point;
    clone(): Geometry;
    closeRings(): void;
    contains(geometry: Geometry): boolean;
    convexHull(): Geometry;
    crosses(geometry: Geometry): boolean;
    difference(geometry: Geometry): Geometry;
    disjoint(geometry: Geometry): boolean;
    distance(geometry: Geometry): number;
    empty(): void;
    equals(geometry: Geometry): boolean;
    getEnvelope(): Envelope;
    getEnvelope3D(): Envelope3D;
    intersection(geometry: Geometry): Geometry;
    intersects(geometry: Geometry): boolean;
    isEmpty(): boolean;
    isRing(): boolean;
    isSimple(): boolean;
    isValid(): boolean;
    overlaps(geometry: Geometry): boolean;
    segmentize(segment_length: number): number;
    simplify(tolerance: number): Geometry;
    simplifyPreserveTopology(tolerance: number): Geometry;
    swapXY(): void;
    symDifference(geometry: Geometry): Geometry;
    toGML(): Geometry;
    toJSON(): Geometry;
    toKML(): Geometry;
    toObject(): { [key: string]: any };
    touches(geometry: Geometry): boolean;
    toWKB(byte_order?: string, variant?: string): Geometry;
    toWKT(): Geometry;
    transform(transformation: CoordinateTransformation): void;
    transformTo(srs: SpatialReference): void;
    union(geometry: Geometry): Geometry;
    within(geometry: Geometry): boolean;
    coordinateDimension: number;
    dimension: number;
    name: string;
    srs: SpatialReference;
    wkbSize: number;
    wkbType: number;
  }
  declare export class GeometryCollection mixins Geometry {
    getArea(): number;
    getLength(): number;
    children: GeometryCollectionChildren;
  }
  declare export interface GeometryCollectionChildren {
    add(geometry: Geometry | Geometry[]): void;
    count(): number;
    forEach(callback: (geometry: Geometry, i: number) => void): void;
    get(index: number): Geometry;
    map<T>(callback: (geometry: Geometry, i: number) => T): T[];
    remove(index: number): void;
    toArray(): Geometry[];
    +layer: Layer;
  }
  declare export interface Layer {
    flush(): void;
    getExtent(force?: boolean): Envelope;
    getSpatialFilter(): Geometry;
    setAttributeFilter(filter: string): void;
    setSpatialFilter(filter: Geometry): void;
    setSpatialFilter(
      minX: number,
      maxX: number,
      minY: number,
      maxY: number
    ): void;
    testCapability(capability: string): boolean;
    +ds: Dataset;
    +features: LayerFeatures;
    +fidColumn: string;
    +fields: LayerFields;
    +geomColumn: string;
    +geomType: number;
    +name: string;
    +srs: SpatialReference;
  }
  declare export interface LayerFeatures {
    add(feature: Feature): void;
    count(force?: boolean): number;
    first(): Feature;
    forEach(callback: (feature: Feature, i: number) => void): void;
    get(id: number): Feature;
    map<T>(callback: (feature: Feature, i: number) => T): T[];
    next(): Feature;
    remove(id: number): void;
    set(id: number, feature: Feature): void;
    +layer: Layer;
  }
  declare export interface LayerFields {
    add(def: FieldDefn | FieldDefn[], approx?: boolean): void;
    count(): number;
    forEach(callback: (field: FieldDefn, i: number) => void): void;
    fromJSON(object: { [key: string]: any }, approx_ok?: boolean): LayerFields;
    get(field: string | number): FieldDefn;
    getNames(): string[];
    indexOf(field: string): number;
    map<T>(callback: (field: FieldDefn, i: number) => T): T[];
    remove(field: string | number): void;
    reorder(map: number[]): void;
    +layer: Layer;
  }
  declare export class LinearRing mixins LineString {
    getArea(): number;
  }
  declare export class LineString mixins Geometry {
    addSubLineString(line: LineString, start?: number, end?: number): void;
    getLength(): number;
    value(distance: number): Point;
    points: LineStringPoints;
  }
  declare export interface LineStringPoints {
    add(point: Point | Point[]): void;
    count(): number;
    forEach(callback: (point: Point, i: number) => void): void;
    get(index: number): Point;
    map<T>(callback: (point: Point, i: number) => T): T[];
    remove(index: number): void;
    resize(count: number): void;
    reverse(): void;
    set(index: number, point: Point): void;
    toArray(): Point[];
  }
  declare export class MultiLineString mixins GeometryCollection {
    polygonize(): Polygon;
  }
  declare export class MultiPoint mixins GeometryCollection {}
  declare export class MultiPolygon mixins GeometryCollection {
    getArea(): number;
    unionCascaded(): Geometry;
  }
  declare export class Point mixins Geometry {
    constructor(x: number, y: number, z?: number): this;
    x: number;
    y: number;
    z: number;
  }
  declare export class Polygon mixins Geometry {
    getArea(): number;
    rings: PolygonRings;
  }
  declare export interface PolygonRings {
    add(ring: LinearRing | LinearRing[]): void;
    count(): number;
    forEach(callback: (ring: LinearRing, i: number) => void): void;
    get(index: number): LinearRing;
    map<T>(callback: (ring: LinearRing, i: number) => T): T[];
    remove(index: number): void;
    toArray(): LinearRing[];
    +layer: Layer;
  }
  declare export interface RasterBand {
    computeStatistics(allow_approximation: boolean): RasterBandStatistics;
    createMaskBand(flags: number): void;
    fill(real_value: number, imaginary_value?: number): void;
    flush(): void;
    getMaskBand(): RasterBand;
    getMaskFlags(): number;
    getMetadata(domain?: string): { [key: string]: any };
    getStatistics(
      allow_approximation: boolean,
      force: boolean
    ): RasterBandStatistics;
    setStatistics(
      min: number,
      max: number,
      mean: number,
      std_dev: number
    ): void;
    +blockSize: XY;
    categoryNames: string[];
    colorInterpretation: string;
    +dataType: string;
    +description: string;
    +ds: Dataset;
    +hasArbitraryOverviews: boolean;
    +id: number;
    +maximum: number;
    +minimum: number;
    noDataValue: number;
    offset: number;
    +overviews: RasterBandOverviews;
    +pixels: RasterBandPixels;
    +readOnly: boolean;
    scale: number;
    +size: XY;
    unitType: string;
  }
  declare export interface RasterBandOverviews {
    count(): number;
    forEach(callback: (overviewBand: RasterBand, i: number) => void): void;
    get(index: number): RasterBand;
    getBySampleCount(samples: number): RasterBand;
    map<T>(callback: (overviewBand: RasterBand, i: number) => T): T[];
  }
  declare export interface RasterBandPixels {
    get(x: number, y: number): number;
    read(
      x: number,
      y: number,
      width: number,
      height: number,
      data?: TypedArray,
      options?: RasterBandPixelsReadOptions
    ): TypedArray;
    readBlock(x: number, y: number, data?: TypedArray): TypedArray;
    set(x: number, y: number, value: number): void;
    write(
      x: number,
      y: number,
      width: number,
      height: number,
      data: TypedArray,
      options?: RasterBandPixelsWriteOptions
    ): void;
    writeBlock(x: number, y: number, data: TypedArray): void;
  }
  declare export class SpatialReference {
    constructor(wkt?: string): this;
    autoIdentifyEPSG(): void;
    clone(): SpatialReference;
    cloneGeogCS(): SpatialReference;
    EPSGTreatsAsLatLong(): boolean;
    EPSGTreatsAsNorthingEasting(): boolean;
    getAngularUnits(): {
      value: any,
      unit: any
    };
    getAttrValue(node_name: string, attr_index?: number): string;
    getAuthorityCode(target_key: string): string;
    getAuthorityName(target_key: string): string;
    getLinearUnits(): {
      value: any,
      unit: any
    };
    isCompound(): boolean;
    isGeocentric(): boolean;
    isGeographic(): boolean;
    isLocal(): boolean;
    isProjected(): boolean;
    isSame(srs: SpatialReference): boolean;
    isSameGeogCS(srs: SpatialReference): boolean;
    isSameVertCS(srs: SpatialReference): boolean;
    isVertical(): boolean;
    morphFromESRI(): void;
    morphToESRI(): void;
    setWellKnownGeogCS(name: string): void;
    toPrettyWKT(simplify?: boolean): string;
    toProj4(): string;
    toWKT(): string;
    toXML(): string;
    validate(): string;
    static fromCRSURL(input: string): SpatialReference;
    static fromEPSG(input: string): SpatialReference;
    static fromEPSGA(input: number): SpatialReference;
    static fromESRI(input: string[]): SpatialReference;
    static fromMICoordSys(input: string): SpatialReference;
    static fromProj4(input: string): SpatialReference;
    static fromURL(url: string): SpatialReference;
    static fromURN(input: string): SpatialReference;
    static fromUserInput(input: string): SpatialReference;
    static fromWKT(wkt: string): SpatialReference;
    static fromWMSAUTO(input: string): SpatialReference;
    static fromXML(input: string): SpatialReference;
  }

  declare var npm$namespace$config: {
    get: typeof config$get,
    set: typeof config$set
  };
  declare function config$get(key: string): string;

  declare function config$set(key: string, value: string): void;

  declare export var drivers: GDALDrivers;
  declare export var lastError: {
    number: any,
    message: any,
    type: any
  };
  declare export var version: string;
  declare export function checksumImage(
    src: RasterBand,
    x?: number,
    y?: number,
    w?: number,
    h?: number
  ): number;

  declare export function contourGenerate(
    options: ContourGenerateOptions
  ): void;

  declare export function decToDMS(
    angle: number,
    axis: "lat" | "long",
    precision?: number
  ): string;

  declare export function fillNodata(options: FillNoDataOptions): void;

  declare export function open(
    path: string,
    mode?: "r" | "r+" | "w",
    drivers?: string | string[]
  ): Dataset;

  declare export function open(
    path: string,
    mode?: "w",
    drivers?: string | string[],
    x_size?: number,
    y_size?: number,
    band_count?: number,
    data_type?: number,
    creation_options?: string[] | { [key: string]: any }
  ): Dataset;

  declare export function polygonize(options: PolygonizeOptions): void;

  declare export function quiet(): void;

  declare export function reprojectImage(options: ReprojectImageOptions): void;

  declare export function sieveFilter(options: SieveFilterOptions): void;

  declare export function suggestedWarpOutput(
    options: SuggestedWarpOutputOptions
  ): {
    rasterSize: any,
    geoTransform: any
  };

  declare export function verbose(): void;
}
