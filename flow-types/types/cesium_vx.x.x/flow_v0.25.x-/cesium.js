declare module "cesium" {
  declare module.exports: typeof Cesium;

  declare var npm$namespace$Cesium: {
    barycentricCoordinates: typeof Cesium$barycentricCoordinates,
    binarySearch: typeof Cesium$binarySearch,
    cancelAnimationFrame: typeof Cesium$cancelAnimationFrame,
    clone: typeof Cesium$clone,
    combine: typeof Cesium$combine,
    destroyObject: typeof Cesium$destroyObject,
    formatError: typeof Cesium$formatError,
    getFilenameFromUri: typeof Cesium$getFilenameFromUri,
    getImagePixels: typeof Cesium$getImagePixels,
    isArray: typeof Cesium$isArray,
    isLeapYear: typeof Cesium$isLeapYear,
    jsonp: typeof Cesium$jsonp,
    loadArrayBuffer: typeof Cesium$loadArrayBuffer,
    loadBlob: typeof Cesium$loadBlob,
    loadImage: typeof Cesium$loadImage,
    loadImageViaBlob: typeof Cesium$loadImageViaBlob,
    loadJson: typeof Cesium$loadJson,
    loadText: typeof Cesium$loadText,
    loadWithXhr: typeof Cesium$loadWithXhr,
    loadXML: typeof Cesium$loadXML,
    mergeSort: typeof Cesium$mergeSort,
    objectToQuery: typeof Cesium$objectToQuery,
    pointInsideTriangle: typeof Cesium$pointInsideTriangle,
    queryToObject: typeof Cesium$queryToObject,
    requestAnimationFrame: typeof Cesium$requestAnimationFrame,
    sampleTerrain: typeof Cesium$sampleTerrain,
    subdivideArray: typeof Cesium$subdivideArray,
    throttleRequestByServer: typeof Cesium$throttleRequestByServer,
    createTangentSpaceDebugPrimitive: typeof Cesium$createTangentSpaceDebugPrimitive,
    viewerCesiumInspectorMixin: typeof Cesium$viewerCesiumInspectorMixin,
    viewerDragDropMixin: typeof Cesium$viewerDragDropMixin,
    viewerPerformanceWatchdogMixin: typeof Cesium$viewerPerformanceWatchdogMixin,
    createCommand: typeof Cesium$createCommand,
    createTaskProcessorWorker: typeof Cesium$createTaskProcessorWorker,
    createOpenStreetMapImageryProvider: typeof Cesium$createOpenStreetMapImageryProvider,
    createTileMapServiceImageryProvider: typeof Cesium$createTileMapServiceImageryProvider,
    createWorldImagery: typeof Cesium$createWorldImagery,
    createWorldTerrain: typeof Cesium$createWorldTerrain,
    defined: typeof Cesium$defined
  };
  declare type Cesium$RenderState = any;

  declare interface Cesium$Proxy {
    getURL(resource: string): string;
  }

  declare class Cesium$ArcGisImageServerTerrainProvider
    mixins Cesium$TerrainProvider {
    constructor(options: {
      url: string,
      token?: string,
      proxy?: any,
      tilingScheme?: Cesium$TilingScheme,
      ellipsoid?: Cesium$Ellipsoid,
      credit?: Cesium$Credit | string
    }): this;
  }

  declare class Cesium$AssociativeArray {
    length: number;
    values: any[];
    contains(key: string | number): boolean;
    set(key: string | number, value: any): void;
    get(key: string | number): any;
    remove(key: string | number): boolean;
    removeAll(): void;
  }

  declare class Cesium$AxisAlignedBoundingBox {
    minimum: Cesium$Cartesian3;
    maximum: Cesium$Cartesian3;
    center: Cesium$Cartesian3;
    constructor(
      minimum?: Cesium$Cartesian3,
      maximum?: Cesium$Cartesian3,
      center?: Cesium$Cartesian3
    ): this;
    clone(
      result?: Cesium$AxisAlignedBoundingBox
    ): Cesium$AxisAlignedBoundingBox;
    intersect(plane: Cesium$Cartesian4): Cesium$Intersect;
    equals(right?: Cesium$AxisAlignedBoundingBox): boolean;
    static fromPoints(
      positions: Cesium$Cartesian3[],
      result?: Cesium$AxisAlignedBoundingBox
    ): Cesium$AxisAlignedBoundingBox;
    static clone(
      box: Cesium$AxisAlignedBoundingBox,
      result?: Cesium$AxisAlignedBoundingBox
    ): Cesium$AxisAlignedBoundingBox;
    static equals(
      left?: Cesium$AxisAlignedBoundingBox,
      right?: Cesium$AxisAlignedBoundingBox
    ): boolean;
    static intersect(
      box: Cesium$AxisAlignedBoundingBox,
      plane: Cesium$Cartesian4
    ): Cesium$Intersect;
  }

  declare class Cesium$BoundingRectangle {
    x: number;
    y: number;
    width: number;
    height: number;
    constructor(x?: number, y?: number, width?: number, height?: number): this;
    clone(result?: Cesium$BoundingRectangle): Cesium$BoundingRectangle;
    intersect(right: Cesium$BoundingRectangle): Cesium$Intersect;
    equals(right?: Cesium$BoundingRectangle): boolean;
    static fromPoints(
      positions: Cesium$Cartesian2[],
      result?: Cesium$BoundingRectangle
    ): Cesium$BoundingRectangle;
    static fromRectangle(
      rectangle: Cesium$Rectangle,
      projection?: any,
      result?: Cesium$BoundingRectangle
    ): Cesium$BoundingRectangle;
    static clone(
      rectangle: Cesium$BoundingRectangle,
      result?: Cesium$BoundingRectangle
    ): Cesium$BoundingRectangle;
    static union(
      left: Cesium$BoundingRectangle,
      right: Cesium$BoundingRectangle,
      result?: Cesium$BoundingRectangle
    ): Cesium$BoundingRectangle;
    static expand(
      rectangle: Cesium$BoundingRectangle,
      point: Cesium$Cartesian2,
      result?: Cesium$BoundingRectangle
    ): Cesium$BoundingRectangle;
    static intersect(
      left: Cesium$BoundingRectangle,
      right: Cesium$BoundingRectangle
    ): Cesium$Intersect;
    static equals(
      left?: Cesium$BoundingRectangle,
      right?: Cesium$BoundingRectangle
    ): boolean;
  }

  declare class Cesium$BoundingSphere mixins Cesium$Packable {
    center: Cesium$Cartesian3;
    radius: number;
    constructor(center?: Cesium$Cartesian3, radius?: number): this;
    intersect(plane: Cesium$Cartesian4): Cesium$Intersect;
    equals(right?: Cesium$BoundingSphere): boolean;
    clone(result?: Cesium$BoundingSphere): Cesium$BoundingSphere;
    static fromPoints(
      positions: Cesium$Cartesian3[],
      result?: Cesium$BoundingSphere
    ): Cesium$BoundingSphere;
    static fromRectangle2D(
      rectangle: Cesium$Rectangle,
      projection?: any,
      result?: Cesium$BoundingSphere
    ): Cesium$BoundingSphere;
    static fromRectangleWithHeights2D(
      rectangle: Cesium$Rectangle,
      projection?: any,
      minimumHeight?: number,
      maximumHeight?: number,
      result?: Cesium$BoundingSphere
    ): Cesium$BoundingSphere;
    static fromRectangle3D(
      rectangle: Cesium$Rectangle,
      ellipsoid?: Cesium$Ellipsoid,
      surfaceHeight?: number,
      result?: Cesium$BoundingSphere
    ): Cesium$BoundingSphere;
    static fromVertices(
      positions: Cesium$Cartesian3[],
      center?: Cesium$Cartesian3,
      stride?: number,
      result?: Cesium$BoundingSphere
    ): Cesium$BoundingSphere;
    static fromCornerPoints(
      corner?: number,
      oppositeCorner?: number,
      result?: Cesium$BoundingSphere
    ): Cesium$BoundingSphere;
    static fromEllipsoid(
      ellipsoid: Cesium$Ellipsoid,
      result?: Cesium$BoundingSphere
    ): Cesium$BoundingSphere;
    static fromBoundingSpheres(
      boundingSpheres: Cesium$BoundingSphere[],
      result?: Cesium$BoundingSphere
    ): Cesium$BoundingSphere;
    static clone(
      sphere: Cesium$BoundingSphere,
      result?: Cesium$BoundingSphere
    ): Cesium$BoundingSphere;
    static pack(
      value: Cesium$BoundingSphere,
      array: number[],
      startingIndex?: number
    ): number[];
    static unpack(
      array: number[],
      startingIndex?: number,
      result?: Cesium$BoundingSphere
    ): Cesium$BoundingSphere;
    static union(
      left: Cesium$BoundingSphere,
      right: Cesium$BoundingSphere,
      result?: Cesium$BoundingSphere
    ): Cesium$BoundingSphere;
    static expand(
      sphere: Cesium$BoundingSphere,
      point: Cesium$Cartesian3,
      result?: Cesium$BoundingSphere
    ): Cesium$BoundingSphere;
    static intersect(
      sphere: Cesium$BoundingSphere,
      plane: Cesium$Cartesian4
    ): Cesium$Intersect;
    static transform(
      sphere: Cesium$BoundingSphere,
      transform: Cesium$Matrix4,
      result?: Cesium$BoundingSphere
    ): Cesium$BoundingSphere;
    static distanceSquaredTo(
      sphere: Cesium$BoundingSphere,
      cartesian: Cesium$Cartesian3
    ): number;
    static transformWithoutScale(
      sphere: Cesium$BoundingSphere,
      transform: Cesium$Matrix4,
      result?: Cesium$BoundingSphere
    ): Cesium$BoundingSphere;
    static computePlaneDistances(
      sphere: Cesium$BoundingSphere,
      position: Cesium$Cartesian3,
      direction: Cesium$Cartesian3,
      result?: Cesium$Cartesian2
    ): Cesium$Interval;
    static projectTo2D(
      sphere: Cesium$BoundingSphere,
      projection?: any,
      result?: Cesium$BoundingSphere
    ): Cesium$BoundingSphere;
    static equals(
      left?: Cesium$BoundingSphere,
      right?: Cesium$BoundingSphere
    ): boolean;
  }

  declare class Cesium$BoxGeometry mixins Cesium$Packable {
    constructor(options: {
      minimumCorner: Cesium$Cartesian3,
      maximumCorner: Cesium$Cartesian3,
      vertexFormat?: Cesium$VertexFormat
    }): this;
    static fromDimensions(): void;
    static unpack(
      array: number[],
      startingIndex?: number,
      result?: Cesium$BoxGeometry
    ): Cesium$BoxGeometry;
    static createGeometry(boxGeometry: Cesium$BoxGeometry): Cesium$Geometry;
  }

  declare class Cesium$BoxOutlineGeometry mixins Cesium$Packable {
    constructor(): this;
    static fromDimensions(): void;
    static unpack(
      array: number[],
      startingIndex?: number,
      result?: Cesium$BoxOutlineGeometry
    ): Cesium$BoxOutlineGeometry;
    static createGeometry(
      boxGeometry: Cesium$BoxOutlineGeometry
    ): Cesium$Geometry;
  }

  declare class Cesium$Cartesian2 mixins Cesium$Packable {
    x: number;
    y: number;
    static ZERO: Cesium$Cartesian2;
    static UNIT_X: Cesium$Cartesian2;
    static UNIT_Y: Cesium$Cartesian2;
    constructor(x?: number, y?: number): this;
    clone(result?: Cesium$Cartesian2): Cesium$Cartesian2;
    equals(right?: Cesium$Cartesian2): boolean;
    equalsEpsilon(
      right: Cesium$Cartesian2,
      relativeEpsilon: number,
      absoluteEpsilon?: number
    ): boolean;
    toString(): string;
    static fromElements(
      x: number,
      y: number,
      result?: Cesium$Cartesian2
    ): Cesium$Cartesian2;
    static clone(
      cartesian: Cesium$Cartesian2,
      result?: Cesium$Cartesian2
    ): Cesium$Cartesian2;
    static fromCartesian3(
      cartesian: Cesium$Cartesian3,
      result?: Cesium$Cartesian2
    ): Cesium$Cartesian2;
    static fromCartesian4(
      cartesian: Cesium$Cartesian4,
      result?: Cesium$Cartesian2
    ): Cesium$Cartesian2;
    static pack(
      value: Cesium$Cartesian2,
      array: number[],
      startingIndex?: number
    ): number[];
    static unpack(
      array: number[],
      startingIndex?: number,
      result?: Cesium$Cartesian2
    ): Cesium$Cartesian2;
    static fromArray(
      array: number[],
      startingIndex?: number,
      result?: Cesium$Cartesian2
    ): Cesium$Cartesian2;
    static maximumComponent(cartesian: Cesium$Cartesian2): number;
    static minimumComponent(cartesian: Cesium$Cartesian2): number;
    static minimumByComponent(
      first: Cesium$Cartesian2,
      second: Cesium$Cartesian2,
      result: Cesium$Cartesian2
    ): Cesium$Cartesian2;
    static maximumByComponent(
      first: Cesium$Cartesian2,
      second: Cesium$Cartesian2,
      result: Cesium$Cartesian2
    ): Cesium$Cartesian2;
    static magnitudeSquared(cartesian: Cesium$Cartesian2): number;
    static magnitude(cartesian: Cesium$Cartesian2): number;
    static distance(left: Cesium$Cartesian2, right: Cesium$Cartesian2): number;
    static distanceSquared(
      left: Cesium$Cartesian2,
      right: Cesium$Cartesian2
    ): number;
    static normalize(
      cartesian: Cesium$Cartesian2,
      result: Cesium$Cartesian2
    ): Cesium$Cartesian2;
    static dot(left: Cesium$Cartesian2, right: Cesium$Cartesian2): number;
    static multiplyComponents(
      left: Cesium$Cartesian2,
      right: Cesium$Cartesian2,
      result: Cesium$Cartesian2
    ): Cesium$Cartesian2;
    static add(
      left: Cesium$Cartesian2,
      right: Cesium$Cartesian2,
      result: Cesium$Cartesian2
    ): Cesium$Cartesian2;
    static subtract(
      left: Cesium$Cartesian2,
      right: Cesium$Cartesian2,
      result: Cesium$Cartesian2
    ): Cesium$Cartesian2;
    static multiplyByScalar(
      cartesian: Cesium$Cartesian2,
      scalar: number,
      result: Cesium$Cartesian2
    ): Cesium$Cartesian2;
    static divideByScalar(
      cartesian: Cesium$Cartesian2,
      scalar: number,
      result: Cesium$Cartesian2
    ): Cesium$Cartesian2;
    static negate(
      cartesian: Cesium$Cartesian2,
      result: Cesium$Cartesian2
    ): Cesium$Cartesian2;
    static abs(
      cartesian: Cesium$Cartesian2,
      result: Cesium$Cartesian2
    ): Cesium$Cartesian2;
    static lerp(
      start: Cesium$Cartesian2,
      end: Cesium$Cartesian2,
      t: number,
      result: Cesium$Cartesian2
    ): Cesium$Cartesian2;
    static angleBetween(
      left: Cesium$Cartesian2,
      right: Cesium$Cartesian2
    ): number;
    static mostOrthogonalAxis(
      cartesian: Cesium$Cartesian2,
      result: Cesium$Cartesian2
    ): Cesium$Cartesian2;
    static equals(left?: Cesium$Cartesian2, right?: Cesium$Cartesian2): boolean;
    static equalsEpsilon(
      left: Cesium$Cartesian2,
      right: Cesium$Cartesian2,
      relativeEpsilon: number,
      absoluteEpsilon?: number
    ): boolean;
  }

  declare class Cesium$Cartesian3
    mixins Cesium$Packable, Cesium$PositionProperty {
    x: number;
    y: number;
    z: number;
    static ZERO: Cesium$Cartesian3;
    static UNIT_X: Cesium$Cartesian3;
    static UNIT_Y: Cesium$Cartesian3;
    static UNIT_Z: Cesium$Cartesian3;
    constructor(x?: number, y?: number, z?: number): this;
    clone(result?: Cesium$Cartesian3): Cesium$Cartesian3;
    equals(right?: Cesium$Cartesian3): boolean;
    equalsEpsilon(
      right: Cesium$Cartesian3,
      relativeEpsilon: number,
      absoluteEpsilon?: number
    ): boolean;
    toString(): string;
    static fromSpherical(
      spherical: Cesium$Spherical,
      result?: Cesium$Cartesian3
    ): Cesium$Cartesian3;
    static fromElements(
      x: number,
      y: number,
      z: number,
      result?: Cesium$Cartesian3
    ): Cesium$Cartesian3;
    static clone(
      cartesian: Cesium$Cartesian3,
      result?: Cesium$Cartesian3
    ): Cesium$Cartesian3;
    static fromCartesian4(
      cartesian: Cesium$Cartesian4,
      result?: Cesium$Cartesian3
    ): Cesium$Cartesian3;
    static pack(
      value: Cesium$Cartesian3,
      array: number[],
      startingIndex?: number
    ): number[];
    static unpack(
      array: number[],
      startingIndex?: number,
      result?: Cesium$Cartesian3
    ): Cesium$Cartesian3;
    static fromArray(
      array: number[],
      startingIndex?: number,
      result?: Cesium$Cartesian3
    ): Cesium$Cartesian3;
    static maximumComponent(cartesian: Cesium$Cartesian3): number;
    static minimumComponent(cartesian: Cesium$Cartesian3): number;
    static minimumByComponent(
      first: Cesium$Cartesian3,
      second: Cesium$Cartesian3,
      result: Cesium$Cartesian3
    ): Cesium$Cartesian3;
    static maximumByComponent(
      first: Cesium$Cartesian3,
      second: Cesium$Cartesian3,
      result: Cesium$Cartesian3
    ): Cesium$Cartesian3;
    static magnitudeSquared(cartesian: Cesium$Cartesian3): number;
    static magnitude(cartesian: Cesium$Cartesian3): number;
    static distance(left: Cesium$Cartesian3, right: Cesium$Cartesian3): number;
    static distanceSquared(
      left: Cesium$Cartesian3,
      right: Cesium$Cartesian3
    ): number;
    static normalize(
      cartesian: Cesium$Cartesian3,
      result: Cesium$Cartesian3
    ): Cesium$Cartesian3;
    static dot(left: Cesium$Cartesian3, right: Cesium$Cartesian3): number;
    static multiplyComponents(
      left: Cesium$Cartesian3,
      right: Cesium$Cartesian3,
      result: Cesium$Cartesian3
    ): Cesium$Cartesian3;
    static add(
      left: Cesium$Cartesian3,
      right: Cesium$Cartesian3,
      result: Cesium$Cartesian3
    ): Cesium$Cartesian3;
    static subtract(
      left: Cesium$Cartesian3,
      right: Cesium$Cartesian3,
      result: Cesium$Cartesian3
    ): Cesium$Cartesian3;
    static multiplyByScalar(
      cartesian: Cesium$Cartesian3,
      scalar: number,
      result: Cesium$Cartesian3
    ): Cesium$Cartesian3;
    static divideByScalar(
      cartesian: Cesium$Cartesian3,
      scalar: number,
      result: Cesium$Cartesian3
    ): Cesium$Cartesian3;
    static negate(
      cartesian: Cesium$Cartesian3,
      result: Cesium$Cartesian3
    ): Cesium$Cartesian3;
    static abs(
      cartesian: Cesium$Cartesian3,
      result: Cesium$Cartesian3
    ): Cesium$Cartesian3;
    static lerp(
      start: Cesium$Cartesian3,
      end: Cesium$Cartesian3,
      t: number,
      result: Cesium$Cartesian3
    ): Cesium$Cartesian3;
    static angleBetween(
      left: Cesium$Cartesian3,
      right: Cesium$Cartesian3
    ): number;
    static mostOrthogonalAxis(
      cartesian: Cesium$Cartesian3,
      result: Cesium$Cartesian3
    ): Cesium$Cartesian3;
    static equals(left?: Cesium$Cartesian3, right?: Cesium$Cartesian3): boolean;
    static equalsEpsilon(
      left: Cesium$Cartesian3,
      right: Cesium$Cartesian3,
      relativeEpsilon: number,
      absoluteEpsilon?: number
    ): boolean;
    static cross(
      left: Cesium$Cartesian3,
      right: Cesium$Cartesian3,
      result: Cesium$Cartesian3
    ): Cesium$Cartesian3;
    static fromDegrees(
      longitude: number,
      latitude: number,
      height?: number,
      ellipsoid?: Cesium$Ellipsoid,
      result?: Cesium$Cartesian3
    ): Cesium$Cartesian3;
    static fromRadians(
      longitude: number,
      latitude: number,
      height?: number,
      ellipsoid?: Cesium$Ellipsoid,
      result?: Cesium$Cartesian3
    ): Cesium$Cartesian3;
    static fromDegreesArray(
      coordinates: number[],
      ellipsoid?: Cesium$Ellipsoid,
      result?: Cesium$Cartesian3[]
    ): Cesium$Cartesian3[];
    static fromRadiansArray(
      coordinates: number[],
      ellipsoid?: Cesium$Ellipsoid,
      result?: Cesium$Cartesian3[]
    ): Cesium$Cartesian3[];
    static fromDegreesArrayHeights(
      coordinates: number[],
      ellipsoid?: Cesium$Ellipsoid,
      result?: Cesium$Cartesian3[]
    ): Cesium$Cartesian3[];
    static fromRadiansArrayHeights(
      coordinates: number[],
      ellipsoid?: Cesium$Ellipsoid,
      result?: Cesium$Cartesian3[]
    ): Cesium$Cartesian3[];
    isConstant: boolean;
    definitionChanged: Cesium$Event;
    referenceFrame: Cesium$ReferenceFrame;
    getValue(
      time: Cesium$JulianDate,
      result?: Cesium$Cartesian3
    ): Cesium$Cartesian3;
    getValueInReferenceFrame(
      time: Cesium$JulianDate,
      referenceFrame: Cesium$ReferenceFrame,
      result?: Cesium$Cartesian3
    ): Cesium$Cartesian3;
  }

  declare class Cesium$Cartesian4 mixins Cesium$Packable {
    x: number;
    y: number;
    z: number;
    w: number;
    static ZERO: Cesium$Cartesian4;
    static UNIT_X: Cesium$Cartesian4;
    static UNIT_Y: Cesium$Cartesian4;
    static UNIT_Z: Cesium$Cartesian4;
    static UNIT_W: Cesium$Cartesian4;
    constructor(x?: number, y?: number, z?: number, w?: number): this;
    clone(result?: Cesium$Cartesian4): Cesium$Cartesian4;
    equals(right?: Cesium$Cartesian4): boolean;
    equalsEpsilon(
      right: Cesium$Cartesian4,
      relativeEpsilon: number,
      absoluteEpsilon?: number
    ): boolean;
    toString(): string;
    static fromElements(
      x: number,
      y: number,
      z: number,
      w: number,
      result?: Cesium$Cartesian4
    ): Cesium$Cartesian4;
    static fromColor(
      color: Cesium$Color,
      result?: Cesium$Cartesian4
    ): Cesium$Cartesian4;
    static clone(
      cartesian: Cesium$Cartesian4,
      result?: Cesium$Cartesian4
    ): Cesium$Cartesian4;
    static pack(
      value: Cesium$Cartesian4,
      array: number[],
      startingIndex?: number
    ): number[];
    static unpack(
      array: number[],
      startingIndex?: number,
      result?: Cesium$Cartesian4
    ): Cesium$Cartesian4;
    static fromArray(
      array: number[],
      startingIndex?: number,
      result?: Cesium$Cartesian4
    ): Cesium$Cartesian4;
    static maximumComponent(cartesian: Cesium$Cartesian4): number;
    static minimumComponent(cartesian: Cesium$Cartesian4): number;
    static minimumByComponent(
      first: Cesium$Cartesian4,
      second: Cesium$Cartesian4,
      result: Cesium$Cartesian4
    ): Cesium$Cartesian4;
    static maximumByComponent(
      first: Cesium$Cartesian4,
      second: Cesium$Cartesian4,
      result: Cesium$Cartesian4
    ): Cesium$Cartesian4;
    static magnitudeSquared(cartesian: Cesium$Cartesian4): number;
    static magnitude(cartesian: Cesium$Cartesian4): number;
    static distance(left: Cesium$Cartesian4, right: Cesium$Cartesian4): number;
    static distanceSquared(
      left: Cesium$Cartesian4,
      right: Cesium$Cartesian4
    ): number;
    static normalize(
      cartesian: Cesium$Cartesian4,
      result: Cesium$Cartesian4
    ): Cesium$Cartesian4;
    static dot(left: Cesium$Cartesian4, right: Cesium$Cartesian4): number;
    static multiplyComponents(
      left: Cesium$Cartesian4,
      right: Cesium$Cartesian4,
      result: Cesium$Cartesian4
    ): Cesium$Cartesian4;
    static add(
      left: Cesium$Cartesian4,
      right: Cesium$Cartesian4,
      result: Cesium$Cartesian4
    ): Cesium$Cartesian4;
    static subtract(
      left: Cesium$Cartesian4,
      right: Cesium$Cartesian4,
      result: Cesium$Cartesian4
    ): Cesium$Cartesian4;
    static multiplyByScalar(
      cartesian: Cesium$Cartesian4,
      scalar: number,
      result: Cesium$Cartesian4
    ): Cesium$Cartesian4;
    static divideByScalar(
      cartesian: Cesium$Cartesian4,
      scalar: number,
      result: Cesium$Cartesian4
    ): Cesium$Cartesian4;
    static negate(
      cartesian: Cesium$Cartesian4,
      result: Cesium$Cartesian4
    ): Cesium$Cartesian4;
    static abs(
      cartesian: Cesium$Cartesian4,
      result: Cesium$Cartesian4
    ): Cesium$Cartesian4;
    static lerp(
      start: Cesium$Cartesian4,
      end: Cesium$Cartesian4,
      t: number,
      result: Cesium$Cartesian4
    ): Cesium$Cartesian4;
    static mostOrthogonalAxis(
      cartesian: Cesium$Cartesian4,
      result: Cesium$Cartesian4
    ): Cesium$Cartesian4;
    static equals(left?: Cesium$Cartesian4, right?: Cesium$Cartesian4): boolean;
    static equalsEpsilon(
      left: Cesium$Cartesian4,
      right: Cesium$Cartesian4,
      relativeEpsilon: number,
      absoluteEpsilon?: number
    ): boolean;
  }

  declare class Cesium$Cartographic {
    longitude: number;
    latitude: number;
    height: number;
    static ZERO: Cesium$Cartographic;
    constructor(longitude?: number, latitude?: number, height?: number): this;
    clone(result?: Cesium$Cartographic): Cesium$Cartographic;
    equals(right?: Cesium$Cartographic): boolean;
    equalsEpsilon(right: Cesium$Cartographic, epsilon: number): boolean;
    toString(): string;
    static fromRadians(
      longitude: number,
      latitude: number,
      height?: number,
      result?: Cesium$Cartographic
    ): Cesium$Cartographic;
    static fromDegrees(
      longitude: number,
      latitude: number,
      height?: number,
      result?: Cesium$Cartographic
    ): Cesium$Cartographic;
    static clone(
      cartographic: Cesium$Cartographic,
      result?: Cesium$Cartographic
    ): Cesium$Cartographic;
    static equals(
      left?: Cesium$Cartographic,
      right?: Cesium$Cartographic
    ): boolean;
    static equalsEpsilon(
      left: Cesium$Cartographic,
      right: Cesium$Cartographic,
      epsilon: number
    ): boolean;
  }

  declare class Cesium$CatmullRomSpline {
    times: number[];
    points: Cesium$Cartesian3[];
    firstTangent: Cesium$Cartesian3;
    lastTangent: Cesium$Cartesian3;
    constructor(options: {
      times: number[],
      points: Cesium$Cartesian3[],
      firstTangent?: Cesium$Cartesian3,
      lastTangent?: Cesium$Cartesian3
    }): this;
    findTimeInterval(time: number): number;
    evaluate(time: number, result?: Cesium$Cartesian3): Cesium$Cartesian3;
  }

  declare class Cesium$CesiumTerrainProvider mixins Cesium$TerrainProvider {
    requestVertexNormals: boolean;
    requestWaterMask: boolean;
    constructor(options: {
      url: string,
      proxy?: Cesium$Proxy,
      requestVertexNormals?: boolean,
      requestWaterMask?: boolean,
      ellipsoid?: Cesium$Ellipsoid,
      credit?: Cesium$Credit | string
    }): this;
  }

  declare class Cesium$CircleGeometry mixins Cesium$Packable {
    constructor(options: {
      center: Cesium$Cartesian3,
      radius: number,
      ellipsoid?: Cesium$Ellipsoid,
      height?: number,
      granularity?: number,
      vertexFormat?: Cesium$VertexFormat,
      extrudedHeight?: number,
      stRotation?: number
    }): this;
    static unpack(
      array: number[],
      startingIndex?: number,
      result?: Cesium$CircleGeometry
    ): number[];
    static createGeometry(
      circleGeometry: Cesium$CircleGeometry
    ): Cesium$Geometry;
  }

  declare class Cesium$CircleOutlineGeometry mixins Cesium$Packable {
    constructor(options: {
      center: Cesium$Cartesian3,
      radius: number,
      ellipsoid?: Cesium$Ellipsoid,
      height?: number,
      granularity?: number,
      extrudedHeight?: number,
      numberOfVerticalLines?: number
    }): this;
    static unpack(
      array: number[],
      startingIndex?: number,
      result?: Cesium$CircleOutlineGeometry
    ): number[];
    static createGeometry(
      circleGeometry: Cesium$CircleOutlineGeometry
    ): Cesium$Geometry;
  }

  declare class Cesium$Clock {
    startTime: Cesium$JulianDate;
    stopTime: Cesium$JulianDate;
    currentTime: Cesium$JulianDate;
    multiplier: number;
    clockStep: Cesium$ClockStep;
    clockRange: Cesium$ClockRange;
    canAnimate: boolean;
    shouldAnimate: boolean;
    onTick: Cesium$Event;
    constructor(options: {
      startTime?: Cesium$JulianDate,
      stopTime?: Cesium$JulianDate,
      currentTime?: Cesium$JulianDate,
      multiplier?: number,
      clockStep?: Cesium$ClockStep,
      clockRange?: Cesium$ClockRange,
      canAnimate?: boolean,
      shouldAnimate?: boolean
    }): this;
    tick(): Cesium$JulianDate;
  }

  declare class Cesium$Color mixins Cesium$Packable {
    red: number;
    green: number;
    blue: number;
    alpha: number;
    static ALICEBLUE: Cesium$Color;
    static ANTIQUEWHITE: Cesium$Color;
    static AQUA: Cesium$Color;
    static AQUAMARINE: Cesium$Color;
    static AZURE: Cesium$Color;
    static BEIGE: Cesium$Color;
    static BISQUE: Cesium$Color;
    static BLACK: Cesium$Color;
    static BLANCHEDALMOND: Cesium$Color;
    static BLUE: Cesium$Color;
    static BLUEVIOLET: Cesium$Color;
    static BROWN: Cesium$Color;
    static BURLYWOOD: Cesium$Color;
    static CADETBLUE: Cesium$Color;
    static CHARTREUSE: Cesium$Color;
    static CHOCOLATE: Cesium$Color;
    static CORAL: Cesium$Color;
    static CORNFLOWERBLUE: Cesium$Color;
    static CORNSILK: Cesium$Color;
    static CRIMSON: Cesium$Color;
    static CYAN: Cesium$Color;
    static DARKBLUE: Cesium$Color;
    static DARKCYAN: Cesium$Color;
    static DARKGOLDENROD: Cesium$Color;
    static DARKGRAY: Cesium$Color;
    static DARKGREEN: Cesium$Color;
    static DARKGREY: Cesium$Color;
    static DARKKHAKI: Cesium$Color;
    static DARKMAGENTA: Cesium$Color;
    static DARKOLIVEGREEN: Cesium$Color;
    static DARKORANGE: Cesium$Color;
    static DARKORCHID: Cesium$Color;
    static DARKRED: Cesium$Color;
    static DARKSALMON: Cesium$Color;
    static DARKSEAGREEN: Cesium$Color;
    static DARKSLATEBLUE: Cesium$Color;
    static DARKSLATEGRAY: Cesium$Color;
    static DARKSLATEGREY: Cesium$Color;
    static DARKTURQUOISE: Cesium$Color;
    static DARKVIOLET: Cesium$Color;
    static DEEPPINK: Cesium$Color;
    static DEEPSKYBLUE: Cesium$Color;
    static DIMGRAY: Cesium$Color;
    static DIMGREY: Cesium$Color;
    static DODGERBLUE: Cesium$Color;
    static FIREBRICK: Cesium$Color;
    static FLORALWHITE: Cesium$Color;
    static FORESTGREEN: Cesium$Color;
    static FUSCHIA: Cesium$Color;
    static GAINSBORO: Cesium$Color;
    static GHOSTWHITE: Cesium$Color;
    static GOLD: Cesium$Color;
    static GOLDENROD: Cesium$Color;
    static GRAY: Cesium$Color;
    static GREEN: Cesium$Color;
    static GREENYELLOW: Cesium$Color;
    static GREY: Cesium$Color;
    static HONEYDEW: Cesium$Color;
    static HOTPINK: Cesium$Color;
    static INDIANRED: Cesium$Color;
    static INDIGO: Cesium$Color;
    static IVORY: Cesium$Color;
    static KHAKI: Cesium$Color;
    static LAVENDER: Cesium$Color;
    static LAVENDAR_BLUSH: Cesium$Color;
    static LAWNGREEN: Cesium$Color;
    static LEMONCHIFFON: Cesium$Color;
    static LIGHTBLUE: Cesium$Color;
    static LIGHTCORAL: Cesium$Color;
    static LIGHTCYAN: Cesium$Color;
    static LIGHTGOLDENRODYELLOW: Cesium$Color;
    static LIGHTGRAY: Cesium$Color;
    static LIGHTGREEN: Cesium$Color;
    static LIGHTGREY: Cesium$Color;
    static LIGHTPINK: Cesium$Color;
    static LIGHTSEAGREEN: Cesium$Color;
    static LIGHTSKYBLUE: Cesium$Color;
    static LIGHTSLATEGRAY: Cesium$Color;
    static LIGHTSLATEGREY: Cesium$Color;
    static LIGHTSTEELBLUE: Cesium$Color;
    static LIGHTYELLOW: Cesium$Color;
    static LIME: Cesium$Color;
    static LIMEGREEN: Cesium$Color;
    static LINEN: Cesium$Color;
    static MAGENTA: Cesium$Color;
    static MAROON: Cesium$Color;
    static MEDIUMAQUAMARINE: Cesium$Color;
    static MEDIUMBLUE: Cesium$Color;
    static MEDIUMORCHID: Cesium$Color;
    static MEDIUMPURPLE: Cesium$Color;
    static MEDIUMSEAGREEN: Cesium$Color;
    static MEDIUMSLATEBLUE: Cesium$Color;
    static MEDIUMSPRINGGREEN: Cesium$Color;
    static MEDIUMTURQUOISE: Cesium$Color;
    static MEDIUMVIOLETRED: Cesium$Color;
    static MIDNIGHTBLUE: Cesium$Color;
    static MINTCREAM: Cesium$Color;
    static MISTYROSE: Cesium$Color;
    static MOCCASIN: Cesium$Color;
    static NAVAJOWHITE: Cesium$Color;
    static NAVY: Cesium$Color;
    static OLDLACE: Cesium$Color;
    static OLIVE: Cesium$Color;
    static OLIVEDRAB: Cesium$Color;
    static ORANGE: Cesium$Color;
    static ORANGERED: Cesium$Color;
    static ORCHID: Cesium$Color;
    static PALEGOLDENROD: Cesium$Color;
    static PALEGREEN: Cesium$Color;
    static PALETURQUOISE: Cesium$Color;
    static PALEVIOLETRED: Cesium$Color;
    static PAPAYAWHIP: Cesium$Color;
    static PEACHPUFF: Cesium$Color;
    static PERU: Cesium$Color;
    static PINK: Cesium$Color;
    static PLUM: Cesium$Color;
    static POWDERBLUE: Cesium$Color;
    static PURPLE: Cesium$Color;
    static RED: Cesium$Color;
    static ROSYBROWN: Cesium$Color;
    static ROYALBLUE: Cesium$Color;
    static SADDLEBROWN: Cesium$Color;
    static SALMON: Cesium$Color;
    static SANDYBROWN: Cesium$Color;
    static SEAGREEN: Cesium$Color;
    static SEASHELL: Cesium$Color;
    static SIENNA: Cesium$Color;
    static SILVER: Cesium$Color;
    static SKYBLUE: Cesium$Color;
    static SLATEBLUE: Cesium$Color;
    static SLATEGRAY: Cesium$Color;
    static SLATEGREY: Cesium$Color;
    static SNOW: Cesium$Color;
    static SPRINGGREEN: Cesium$Color;
    static STEELBLUE: Cesium$Color;
    static TAN: Cesium$Color;
    static TEAL: Cesium$Color;
    static THISTLE: Cesium$Color;
    static TOMATO: Cesium$Color;
    static TURQUOISE: Cesium$Color;
    static VIOLET: Cesium$Color;
    static WHEAT: Cesium$Color;
    static WHITE: Cesium$Color;
    static WHITESMOKE: Cesium$Color;
    static YELLOW: Cesium$Color;
    static YELLOWGREEN: Cesium$Color;
    static TRANSPARENT: Cesium$Color;
    static add(
      left: Cesium$Color,
      right: Cesium$Color,
      result?: Cesium$Color
    ): Cesium$Color;
    static byteToFloat(number: number): number;
    static clone(color: Cesium$Color, result?: Cesium$Color): Cesium$Color;
    static divide(
      left: Cesium$Color,
      right: Cesium$Color,
      result?: Cesium$Color
    ): Cesium$Color;
    static divideByScalar(
      color: Cesium$Color,
      scalar: number,
      result?: Cesium$Color
    ): Cesium$Color;
    static equals(left: Cesium$Color, right: Cesium$Color): boolean;
    static floatToByte(number: number): number;
    static fromAlpha(
      color: Cesium$Color,
      alpha: number,
      result?: Cesium$Color
    ): Cesium$Color;
    static fromBytes(
      red?: number,
      green?: number,
      blue?: number,
      alpha?: number,
      result?: Cesium$Color
    ): Cesium$Color;
    static fromCartesian4(
      cartesian: Cesium$Cartesian4,
      result?: Cesium$Color
    ): Cesium$Color;
    static fromCssColorString(color: string): Cesium$Color;
    static fromHsl(
      hue?: number,
      saturation?: number,
      lightness?: number,
      alpha?: number
    ): Cesium$Color;
    static fromRandom(
      options?: {
        red?: number,
        minimumRed?: number,
        maximumRed?: number,
        green?: number,
        minimumGreen?: number,
        maximumGreen?: number,
        blue?: number,
        minimumBlue?: number,
        maximumBlue?: number,
        alpha?: number,
        minimumAlpha?: number,
        maximumAlpha?: number
      },
      result?: Cesium$Color
    ): Cesium$Color;
    static fromRgba(rgba: number): Cesium$Color;
    static mod(
      left: Cesium$Color,
      right: Cesium$Color,
      result?: Cesium$Color
    ): Cesium$Color;
    static multiply(
      left: Cesium$Color,
      right: Cesium$Color,
      result?: Cesium$Color
    ): Cesium$Color;
    static multiplyByScalar(
      color: Cesium$Color,
      scalar: number,
      result?: Cesium$Color
    ): Cesium$Color;
    static pack(
      value: Cesium$Color,
      array: number[],
      startingIndex?: number
    ): number[];
    static subtract(
      left: Cesium$Color,
      right: Cesium$Color,
      result?: Cesium$Color
    ): Cesium$Color;
    static unpack(
      array: number[],
      startingIndex?: number,
      result?: Cesium$Color
    ): Cesium$Color;
    constructor(
      red?: number,
      green?: number,
      blue?: number,
      alpha?: number
    ): this;
    brighten(magnitude: number, result: Cesium$Color): Cesium$Color;
    clone(result?: Cesium$Color): Cesium$Color;
    darken(magnitude: number, result: Cesium$Color): Cesium$Color;
    equals(other: Cesium$Color): boolean;
    equalsEpsilon(other: Cesium$Color, epsilon?: number): boolean;
    toBytes(result?: number[]): number[];
    toCssColorString(): string;
    toRgba(): number;
    toString(): string;
    withAlpha(alpha: number, result?: Cesium$Color): Cesium$Color;
  }

  declare class Cesium$ColorGeometryInstanceAttribute {
    value: Uint8Array;
    componentDatatype: Cesium$ComponentDatatype;
    componentsPerAttribute: number;
    normalize: boolean;
    constructor(
      red?: number,
      green?: number,
      blue?: number,
      alpha?: number
    ): this;
    static fromColor(
      color: Cesium$Color
    ): Cesium$ColorGeometryInstanceAttribute;
    static toValue(color: Cesium$Color, result?: Uint8Array): Uint8Array;
  }

  declare class Cesium$CorridorGeometry mixins Cesium$Packable {
    constructor(options: {
      positions: Cesium$Cartesian3[],
      width: number,
      ellipsoid?: Cesium$Ellipsoid,
      granularity?: number,
      height?: number,
      extrudedHeight?: number,
      vertexFormat?: Cesium$VertexFormat,
      cornerType?: Cesium$CornerType
    }): this;
    static unpack(
      array: number[],
      startingIndex?: number,
      result?: Cesium$CorridorGeometry
    ): Cesium$CorridorGeometry;
    static createGeometry(
      corridorGeometry: Cesium$CorridorGeometry
    ): Cesium$Geometry;
  }

  declare class Cesium$CorridorOutlineGeometry mixins Cesium$Packable {
    constructor(options: {
      positions: Cesium$Cartesian3[],
      width: number,
      ellipsoid?: Cesium$Ellipsoid,
      granularity?: number,
      height?: number,
      extrudedHeight?: number,
      cornerType?: Cesium$CornerType
    }): this;
    static unpack(
      array: number[],
      startingIndex?: number,
      result?: Cesium$CorridorOutlineGeometry
    ): Cesium$CorridorOutlineGeometry;
    static createGeometry(
      corridorOutlineGeometry: Cesium$CorridorOutlineGeometry
    ): Cesium$Geometry;
  }

  declare class Cesium$Credit {
    element: HTMLElement;
    html: string;
    imageUrl: string;
    link: string;
    showOnScreen: boolean;
    text: string;
    constructor(html: string, showOnScreen?: boolean): this;
    static equals(left: Cesium$Credit, right: Cesium$Credit): boolean;
    equals(credits: Cesium$Credit): boolean;
    hasImage(): boolean;
    hasLink(): boolean;
  }

  declare class Cesium$CylinderGeometry mixins Cesium$Packable {
    constructor(options: {
      length: number,
      topRadius: number,
      bottomRadius: number,
      slices?: number,
      vertexFormat?: Cesium$VertexFormat
    }): this;
    static unpack(
      array: number[],
      startingIndex?: number,
      result?: Cesium$CylinderGeometry
    ): Cesium$CylinderGeometry;
    static createGeometry(
      cylinderGeometry: Cesium$CylinderGeometry
    ): Cesium$Geometry;
  }

  declare class Cesium$CylinderOutlineGeometry mixins Cesium$Packable {
    constructor(options: {
      length: number,
      topRadius: number,
      bottomRadius: number,
      slices?: number,
      numberOfVerticalLines?: number
    }): this;
    static unpack(
      array: number[],
      startingIndex?: number,
      result?: Cesium$CylinderOutlineGeometry
    ): Cesium$CylinderOutlineGeometry;
    static createGeometry(
      cylinderGeometry: Cesium$CylinderOutlineGeometry
    ): Cesium$Geometry;
  }

  declare class Cesium$DefaultProxy {
    constructor(proxy: string): this;
    getURL(resource: string): string;
  }

  declare class Cesium$DeveloperError {
    name: string;
    message: string;
    stack: string;
    constructor(message?: string): this;
  }

  declare class Cesium$EllipseGeometry mixins Cesium$Packable {
    constructor(options: {
      center: Cesium$Cartesian3,
      semiMajorAxis: number,
      semiMinorAxis: number,
      ellipsoid?: Cesium$Ellipsoid,
      height?: number,
      extrudedHeight?: number,
      rotation?: number,
      stRotation?: number,
      granularity?: number,
      vertexFormat?: Cesium$VertexFormat
    }): this;
    static unpack(
      array: number[],
      startingIndex?: number,
      result?: Cesium$EllipseGeometry
    ): Cesium$EllipseGeometry;
    static createGeometry(
      ellipseGeometry: Cesium$EllipseGeometry
    ): Cesium$Geometry;
  }

  declare class Cesium$EllipseOutlineGeometry mixins Cesium$Packable {
    constructor(options: {
      center: Cesium$Cartesian3,
      semiMajorAxis: number,
      semiMinorAxis: number,
      ellipsoid?: Cesium$Ellipsoid,
      height?: number,
      extrudedHeight?: number,
      rotation?: number,
      granularity?: number,
      numberOfVerticalLines?: number
    }): this;
    static unpack(
      array: number[],
      startingIndex?: number,
      result?: Cesium$EllipseOutlineGeometry
    ): Cesium$EllipseOutlineGeometry;
    static createGeometry(
      ellipseGeometry: Cesium$EllipseOutlineGeometry
    ): Cesium$Geometry;
  }

  declare class Cesium$Ellipsoid mixins Cesium$Packable {
    radii: Cesium$Cartesian3;
    radiiSquared: Cesium$Cartesian3;
    radiiToTheFourth: Cesium$Cartesian3;
    oneOverRadii: Cesium$Cartesian3;
    oneOverRadiiSquared: Cesium$Cartesian3;
    minimumRadius: number;
    maximumRadius: number;
    static WGS84: Cesium$Ellipsoid;
    static UNIT_SPHERE: Cesium$Ellipsoid;
    static MOON: Cesium$Ellipsoid;
    constructor(x?: number, y?: number, z?: number): this;
    clone(result?: Cesium$Ellipsoid): Cesium$Ellipsoid;
    geocentricSurfaceNormal(
      cartesian: Cesium$Cartesian3,
      result?: Cesium$Cartesian3
    ): Cesium$Cartesian3;
    geodeticSurfaceNormalCartographic(
      cartographic: Cesium$Cartographic,
      result?: Cesium$Cartesian3
    ): Cesium$Cartesian3;
    geodeticSurfaceNormal(
      cartesian: Cesium$Cartesian3,
      result?: Cesium$Cartesian3
    ): Cesium$Cartesian3;
    cartographicToCartesian(
      cartographic: Cesium$Cartographic,
      result?: Cesium$Cartesian3
    ): Cesium$Cartesian3;
    cartographicArrayToCartesianArray(
      cartographics: Cesium$Cartographic[],
      result?: Cesium$Cartesian3[]
    ): Cesium$Cartesian3[];
    cartesianToCartographic(
      cartesian: Cesium$Cartesian3,
      result?: Cesium$Cartographic
    ): Cesium$Cartographic;
    cartesianArrayToCartographicArray(
      cartesians: Cesium$Cartesian3[],
      result?: Cesium$Cartographic[]
    ): Cesium$Cartographic[];
    scaleToGeodeticSurface(
      cartesian: Cesium$Cartesian3,
      result?: Cesium$Cartesian3
    ): Cesium$Cartesian3;
    scaleToGeocentricSurface(
      cartesian: Cesium$Cartesian3,
      result?: Cesium$Cartesian3
    ): Cesium$Cartesian3;
    transformPositionToScaledSpace(
      position: Cesium$Cartesian3,
      result?: Cesium$Cartesian3
    ): Cesium$Cartesian3;
    transformPositionFromScaledSpace(
      position: Cesium$Cartesian3,
      result?: Cesium$Cartesian3
    ): Cesium$Cartesian3;
    equals(right?: Cesium$Ellipsoid): boolean;
    toString(): string;
    static clone(
      ellipsoid: Cesium$Ellipsoid,
      result?: Cesium$Ellipsoid
    ): Cesium$Ellipsoid;
    static fromCartesian3(radii?: Cesium$Cartesian3): Cesium$Ellipsoid;
    static unpack(
      array: number[],
      startingIndex?: number,
      result?: Cesium$Ellipsoid
    ): Cesium$Ellipsoid;
  }

  declare class Cesium$EllipsoidGeodesic {
    surfaceDistance: number;
    start: Cesium$Cartographic;
    end: Cesium$Cartographic;
    startHeading: number;
    endHeading: number;
    constructor(
      start?: Cesium$Cartographic,
      end?: Cesium$Cartographic,
      ellipsoid?: Cesium$Ellipsoid
    ): this;
    setEndPoints(start: Cesium$Cartographic, end: Cesium$Cartographic): void;
    interpolateUsingFraction(fraction: number): Cesium$Cartographic;
    interpolateUsingSurfaceDistance(distance: number): Cesium$Cartographic;
  }

  declare class Cesium$EllipsoidGeometry mixins Cesium$Packable {
    constructor(options?: {
      radii?: Cesium$Cartesian3,
      stackPartitions?: number,
      slicePartitions?: number,
      vertexFormat?: Cesium$VertexFormat
    }): this;
    static unpack(
      array: number[],
      startingIndex?: number,
      result?: Cesium$EllipsoidGeometry
    ): Cesium$EllipsoidGeometry;
    static createGeometry(
      ellipsoidGeometry: Cesium$EllipsoidGeometry
    ): Cesium$Geometry;
  }

  declare class Cesium$EllipsoidOutlineGeometry mixins Cesium$Packable {
    constructor(options?: {
      radii?: Cesium$Cartesian3,
      stackPartitions?: number,
      slicePartitions?: number,
      subdivisions?: number
    }): this;
    static unpack(
      array: number[],
      startingIndex?: number,
      result?: Cesium$EllipsoidOutlineGeometry
    ): Cesium$EllipsoidOutlineGeometry;
    static createGeometry(
      ellipsoidGeometry: Cesium$EllipsoidOutlineGeometry
    ): Cesium$Geometry;
  }

  declare class Cesium$EllipsoidTangentPlane {
    ellipsoid: Cesium$Ellipsoid;
    origin: Cesium$Cartesian3;
    constructor(ellipsoid: Cesium$Ellipsoid, origin: Cesium$Cartesian3): this;
    projectPointOntoPlane(
      cartesian: Cesium$Cartesian3,
      result?: Cesium$Cartesian2
    ): Cesium$Cartesian2;
    projectPointsOntoPlane(
      cartesians: Cesium$Cartesian3[],
      result?: Cesium$Cartesian2[]
    ): Cesium$Cartesian2[];
    projectPointsOntoEllipsoid(
      cartesians: Cesium$Cartesian2[],
      result?: Cesium$Cartesian3[]
    ): Cesium$Cartesian3[];
    static fromPoints(
      ellipsoid: Cesium$Ellipsoid,
      cartesians: Cesium$Cartesian3
    ): Cesium$EllipsoidTangentPlane;
  }

  declare class Cesium$EllipsoidTerrainProvider mixins Cesium$TerrainProvider {
    constructor(options?: {
      tilingScheme?: Cesium$TilingScheme,
      ellipsoid?: Cesium$Ellipsoid
    }): this;
  }

  declare class Cesium$Event {
    numberOfListeners: number;
    addEventListener(
      listener: () => void,
      scope?: any
    ): Cesium$Event.EventHelper$RemoveCallback;
    removeEventListener(listener: () => void, scope?: any): boolean;
    raiseEvent(...args: any[]): void;
  }

  declare type Event$RemoveCallback = () => void;

  declare class Cesium$EventHelper {
    add(
      event: Cesium$Event,
      listener: () => void,
      scope?: any
    ): Cesium$EventHelper.Event$RemoveCallback;
    removeAll(): void;
  }

  declare type EventHelper$RemoveCallback = () => void;

  declare class Cesium$GeographicProjection {
    ellipsoid: Cesium$Ellipsoid;
    constructor(ellipsoid?: Cesium$Ellipsoid): this;
    project(
      cartographic: Cesium$Cartographic,
      result?: Cesium$Cartesian3
    ): Cesium$Cartesian3;
    unproject(
      cartesian: Cesium$Cartesian3,
      result?: Cesium$Cartographic
    ): Cesium$Cartographic;
  }

  declare class Cesium$GeographicTilingScheme {
    ellipsoid: Cesium$Ellipsoid;
    rectangle: Cesium$Rectangle;
    projection: Cesium$MapProjection;
    constructor(options?: {
      ellipsoid?: Cesium$Ellipsoid,
      rectangle?: Cesium$Rectangle,
      numberOfLevelZeroTilesX?: number,
      numberOfLevelZeroTilesY?: number
    }): this;
    getNumberOfXTilesAtLevel(level: number): number;
    getNumberOfYTilesAtLevel(level: number): number;
    rectangleToNativeRectangle(
      rectangle: Cesium$Rectangle,
      result?: Cesium$Rectangle
    ): Cesium$Rectangle;
    tileXYToNativeRectangle(
      x: number,
      y: number,
      level: number,
      result?: any
    ): Cesium$Rectangle;
    tileXYToRectangle(
      x: number,
      y: number,
      level: number,
      result?: any
    ): Cesium$Rectangle;
    positionToTileXY(
      position: Cesium$Cartographic,
      level: number,
      result?: Cesium$Cartesian2
    ): Cesium$Cartesian2;
  }

  declare class Cesium$Geometry {
    attributes: Cesium$GeometryAttributes;
    indices: any[];
    primitiveType: Cesium$PrimitiveType;
    boundingSphere: Cesium$BoundingSphere;
    constructor(options: {
      attributes: Cesium$GeometryAttributes,
      primitiveType?: Cesium$PrimitiveType,
      indices?: Uint16Array | Uint32Array,
      boundingSphere?: Cesium$BoundingSphere
    }): this;
    static computeNumberOfVertices(geometry: Cesium$Cartesian3): number;
  }

  declare class Cesium$GeometryAttribute {
    componentDatatype: Cesium$ComponentDatatype;
    componentsPerAttribute: number;
    normalize: boolean;
    values: any[];
    constructor(options?: {
      componentDatatype?: Cesium$ComponentDatatype,
      componentsPerAttribute?: number,
      normalize?: boolean,
      values?: number[]
    }): this;
  }

  declare class Cesium$GeometryAttributes {
    position: Cesium$GeometryAttribute;
    normal: Cesium$GeometryAttribute;
    st: Cesium$GeometryAttribute;
    binormal: Cesium$GeometryAttribute;
    tangent: Cesium$GeometryAttribute;
    color: Cesium$GeometryAttribute;
  }

  declare class Cesium$GeometryInstance {
    geometry: Cesium$Geometry;
    modelMatrix: Cesium$Matrix4;
    id: any;
    attributes: any;
    constructor(options: {
      geometry: Cesium$Geometry,
      modelMatrix?: Cesium$Matrix4,
      id?: any,
      attributes?: any
    }): this;
  }

  declare class Cesium$GeometryInstanceAttribute {
    componentDatatype: Cesium$ComponentDatatype;
    componentsPerAttribute: number;
    normalize: boolean;
    value: number[];
    constructor(options: {
      componentDatatype?: Cesium$ComponentDatatype,
      componentsPerAttribute?: number,
      normalize?: boolean,
      value?: number[]
    }): this;
  }

  declare class Cesium$GregorianDate {
    year: number;
    month: number;
    day: number;
    hour: number;
    minute: number;
    second: number;
    millisecond: number;
    isLeapSecond: boolean;
  }

  declare class Cesium$HeadingPitchRoll {
    heading: number;
    pitch: number;
    roll: number;
    constructor(heading?: number, pitch?: number, roll?: number): this;
    static clone(
      headingPitchRoll: Cesium$HeadingPitchRoll,
      result?: Cesium$HeadingPitchRoll
    ): Cesium$HeadingPitchRoll;
    static equals(
      left: Cesium$HeadingPitchRoll | null | void,
      right: Cesium$HeadingPitchRoll | null | void
    ): boolean;
    static equalsEpsilon(
      left: Cesium$HeadingPitchRoll | null | void,
      right: Cesium$HeadingPitchRoll | null | void,
      relativeEpsilon: number,
      absoluteEpsilon?: number
    ): boolean;
    static fromDegrees(
      heading: number,
      pitch: number,
      roll: number,
      result?: Cesium$HeadingPitchRoll
    ): Cesium$HeadingPitchRoll;
    static fromQuaternion(
      quaternion: Cesium$Quaternion,
      result?: Cesium$HeadingPitchRoll
    ): Cesium$HeadingPitchRoll;
    clone(result?: Cesium$HeadingPitchRoll): Cesium$HeadingPitchRoll;
    equals(right: Cesium$HeadingPitchRoll | null | void): boolean;
    equalsEpsilon(
      right: Cesium$HeadingPitchRoll | null | void,
      relativeEpsilon: number,
      absoluteEpsilon?: number
    ): boolean;
    toString(): string;
  }

  declare class Cesium$HeightmapTerrainData {
    waterMask: Uint8Array | HTMLImageElement | HTMLCanvasElement;
    constructor(options: {
      buffer:
        | Int8Array
        | Uint8Array
        | Int16Array
        | Uint16Array
        | Float32Array
        | Float64Array,
      width: number,
      height: number,
      childTileMask?: number,
      structure?: any,
      structureheightScale?: number,
      structureheightOffset?: number,
      structureelementsPerHeight?: number,
      structurestride?: number,
      structureelementMultiplier?: number,
      structureisBigEndian?: boolean,
      createdByUpsampling?: boolean
    }): this;
    createMesh(
      tilingScheme: Cesium$TilingScheme,
      x: number,
      y: number,
      level: number
    ): Promise<Cesium$TerrainMesh>;
    interpolateHeight(
      rectangle: Cesium$Rectangle,
      longitude: number,
      latitude: number
    ): number;
    upsample(
      tilingScheme: Cesium$TilingScheme,
      thisX: number,
      thisY: number,
      thisLevel: number,
      descendantX: number,
      descendantY: number,
      descendantLevel: number
    ): Promise<Cesium$HeightmapTerrainData>;
    isChildAvailable(
      thisX: number,
      thisY: number,
      childX: number,
      childY: number
    ): boolean;
    wasCreatedByUpsampling(): boolean;
  }

  declare class Cesium$HermiteSpline {
    times: number[];
    points: Cesium$Cartesian3[];
    inTangents: Cesium$Cartesian3[];
    outTangents: Cesium$Cartesian3[];
    constructor(options: {
      times: number[],
      points: Cesium$Cartesian3[],
      inTangents: Cesium$Cartesian3[],
      outTangents: Cesium$Cartesian3[]
    }): this;
    findTimeInterval(time: number): number;
    evaluate(time: number, result?: Cesium$Cartesian3): Cesium$Cartesian3;
    static createC1(): Cesium$HermiteSpline;
    static createNaturalCubic(): Cesium$HermiteSpline | Cesium$LinearSpline;
    static createClampedCubic(): Cesium$HermiteSpline | Cesium$LinearSpline;
  }

  declare class Cesium$IonImageryProvider mixins Cesium$ImageryProvider {
    constructor(options: {
      assetId: number,
      accessToken?: string,
      server?: string
    }): this;
  }

  declare class Cesium$Interval {
    start: number;
    stop: number;
    constructor(start?: number, stop?: number): this;
  }

  declare class Cesium$JulianDate {
    dayNumber: number;
    secondsOfDay: number;
    static leapSeconds: Cesium$LeapSecond[];
    constructor(
      julianDayNumber?: number,
      secondsOfDay?: number,
      timeStandard?: Cesium$TimeStandard
    ): this;
    clone(result?: Cesium$JulianDate): Cesium$JulianDate;
    equals(right?: Cesium$JulianDate): boolean;
    equalsEpsilon(right: Cesium$JulianDate, epsilon: number): boolean;
    toString(): string;
    static fromDate(date: Date, result?: Cesium$JulianDate): Cesium$JulianDate;
    static fromIso8601(
      iso8601String: string,
      result?: Cesium$JulianDate
    ): Cesium$JulianDate;
    static now(result?: Cesium$JulianDate): Cesium$JulianDate;
    static toGregorianDate(
      julianDate: Cesium$JulianDate,
      result?: Cesium$GregorianDate
    ): Cesium$GregorianDate;
    static toDate(julianDate: Cesium$JulianDate): Date;
    static toIso8601(julianDate: Cesium$JulianDate, precision?: number): string;
    static clone(
      julianDate: Cesium$JulianDate,
      result?: Cesium$JulianDate
    ): Cesium$JulianDate;
    static compare(left: Cesium$JulianDate, right: Cesium$JulianDate): number;
    static equals(left?: Cesium$JulianDate, right?: Cesium$JulianDate): boolean;
    static equalsEpsilon(
      left: Cesium$JulianDate,
      right: Cesium$JulianDate,
      epsilon: number
    ): boolean;
    static totalDays(julianDate: Cesium$JulianDate): number;
    static secondsDifference(
      left: Cesium$JulianDate,
      right: Cesium$JulianDate
    ): number;
    static daysDifference(
      left: Cesium$JulianDate,
      right: Cesium$JulianDate
    ): number;
    static computeTaiMinusUtc(julianDate: Cesium$JulianDate): number;
    static addSeconds(
      julianDate: Cesium$JulianDate,
      seconds: number,
      result: Cesium$JulianDate
    ): Cesium$JulianDate;
    static addMinutes(
      julianDate: Cesium$JulianDate,
      minutes: number,
      result: Cesium$JulianDate
    ): Cesium$JulianDate;
    static addHours(
      julianDate: Cesium$JulianDate,
      hours: number,
      result: Cesium$JulianDate
    ): Cesium$JulianDate;
    static addDays(
      julianDate: Cesium$JulianDate,
      days: number,
      result: Cesium$JulianDate
    ): Cesium$JulianDate;
    static lessThan(left: Cesium$JulianDate, right: Cesium$JulianDate): boolean;
    static lessThanOrEquals(
      left: Cesium$JulianDate,
      right: Cesium$JulianDate
    ): boolean;
    static greaterThan(
      left: Cesium$JulianDate,
      right: Cesium$JulianDate
    ): boolean;
    static greaterThanOrEquals(
      left: Cesium$JulianDate,
      right: Cesium$JulianDate
    ): boolean;
  }

  declare class Cesium$LeapSecond {
    julianDate: Cesium$JulianDate;
    offset: number;
    constructor(date?: Cesium$JulianDate, offset?: number): this;
  }

  declare class Cesium$LinearSpline {
    times: number[];
    points: Cesium$Cartesian3[];
    constructor(): this;
    findTimeInterval(time: number): number;
    evaluate(time: number, result?: Cesium$Cartesian3): Cesium$Cartesian3;
  }

  declare class Cesium$MapProjection {
    ellipsoid: Cesium$Ellipsoid;
    project(
      cartographic: Cesium$Cartographic,
      result?: Cesium$Cartesian3
    ): Cesium$Cartesian3;
    unproject(
      cartesian: Cesium$Cartesian3,
      result?: Cesium$Cartographic
    ): Cesium$Cartographic;
  }

  declare class Cesium$Matrix2 mixins Cesium$Packable {
    static IDENTITY: Cesium$Matrix2;
    static COLUMN0ROW0: number;
    static COLUMN0ROW1: number;
    static COLUMN1ROW0: number;
    static COLUMN1ROW1: number;
    constructor(
      column0Row0?: number,
      column1Row0?: number,
      column0Row1?: number,
      column1Row1?: number
    ): this;
    clone(result?: Cesium$Matrix2): Cesium$Matrix2;
    equals(right?: Cesium$Matrix2): boolean;
    equalsEpsilon(right: Cesium$Matrix2, epsilon: number): boolean;
    toString(): string;
    static pack(
      value: Cesium$Matrix2,
      array: number[],
      startingIndex?: number
    ): number[];
    static unpack(
      array: number[],
      startingIndex?: number,
      result?: Cesium$Matrix2
    ): Cesium$Matrix2;
    static clone(
      matrix: Cesium$Matrix2,
      result?: Cesium$Matrix2
    ): Cesium$Matrix2;
    static fromArray(
      array: number[],
      startingIndex?: number,
      result?: Cesium$Matrix2
    ): Cesium$Matrix2;
    static fromColumnMajorArray(
      values: number[],
      result?: Cesium$Matrix2
    ): Cesium$Matrix2;
    static fromRowMajorArray(
      values: number[],
      result?: Cesium$Matrix2
    ): Cesium$Matrix2;
    static fromScale(
      scale: Cesium$Cartesian2,
      result?: Cesium$Matrix2
    ): Cesium$Matrix2;
    static fromUniformScale(
      scale: number,
      result?: Cesium$Matrix2
    ): Cesium$Matrix2;
    static fromRotation(angle: number, result?: Cesium$Matrix2): Cesium$Matrix2;
    static toArray(matrix: Cesium$Matrix2, result?: number[]): number[];
    static getElementIndex(row: number, column: number): number;
    static getColumn(
      matrix: Cesium$Matrix2,
      index: number,
      result: Cesium$Cartesian2
    ): Cesium$Cartesian2;
    static setColumn(
      matrix: Cesium$Matrix2,
      index: number,
      cartesian: Cesium$Cartesian2,
      result: Cesium$Cartesian2
    ): Cesium$Matrix2;
    static getRow(
      matrix: Cesium$Matrix2,
      index: number,
      result: Cesium$Cartesian2
    ): Cesium$Cartesian2;
    static setRow(
      matrix: Cesium$Matrix2,
      index: number,
      cartesian: Cesium$Cartesian2,
      result: Cesium$Matrix2
    ): Cesium$Matrix2;
    static getScale(
      matrix: Cesium$Matrix2,
      result: Cesium$Cartesian2
    ): Cesium$Cartesian2;
    static getMaximumScale(matrix: Cesium$Matrix2): number;
    static multiply(
      left: Cesium$Matrix2,
      right: Cesium$Matrix2,
      result: Cesium$Matrix2
    ): Cesium$Matrix2;
    static add(
      left: Cesium$Matrix2,
      right: Cesium$Matrix2,
      result: Cesium$Matrix2
    ): Cesium$Matrix2;
    static subtract(
      left: Cesium$Matrix2,
      right: Cesium$Matrix2,
      result: Cesium$Matrix2
    ): Cesium$Matrix2;
    static multiplyByVector(
      matrix: Cesium$Matrix2,
      cartesian: Cesium$Cartesian2,
      result: Cesium$Cartesian2
    ): Cesium$Cartesian2;
    static multiplyByScalar(
      matrix: Cesium$Matrix2,
      scalar: number,
      result: Cesium$Matrix2
    ): Cesium$Matrix2;
    static negate(
      matrix: Cesium$Matrix2,
      result: Cesium$Matrix2
    ): Cesium$Matrix2;
    static transpose(
      matrix: Cesium$Matrix2,
      result: Cesium$Matrix2
    ): Cesium$Matrix2;
    static abs(matrix: Cesium$Matrix2, result: Cesium$Matrix2): Cesium$Matrix2;
    static equals(left?: Cesium$Matrix2, right?: Cesium$Matrix2): boolean;
    static equalsEpsilon(
      left: Cesium$Matrix2,
      right: Cesium$Matrix2,
      epsilon: number
    ): boolean;
  }

  declare class Cesium$Matrix3 mixins Cesium$Packable {
    static IDENTITY: Cesium$Matrix3;
    static COLUMN0ROW0: number;
    static COLUMN0ROW1: number;
    static COLUMN0ROW2: number;
    static COLUMN1ROW0: number;
    static COLUMN1ROW1: number;
    static COLUMN1ROW2: number;
    static COLUMN2ROW0: number;
    static COLUMN2ROW1: number;
    static COLUMN2ROW2: number;
    constructor(
      column0Row0?: number,
      column1Row0?: number,
      column2Row0?: number,
      column0Row1?: number,
      column1Row1?: number,
      column2Row1?: number,
      column0Row2?: number,
      column1Row2?: number,
      column2Row2?: number
    ): this;
    clone(result?: Cesium$Matrix3): Cesium$Matrix3;
    equals(right?: Cesium$Matrix3): boolean;
    equalsEpsilon(right: Cesium$Matrix3, epsilon: number): boolean;
    toString(): string;
    static pack(
      value: Cesium$Matrix3,
      array: number[],
      startingIndex?: number
    ): number[];
    static unpack(
      array: number[],
      startingIndex?: number,
      result?: Cesium$Matrix3
    ): Cesium$Matrix3;
    static clone(
      matrix: Cesium$Matrix3,
      result?: Cesium$Matrix3
    ): Cesium$Matrix3;
    static fromArray(
      array: number[],
      startingIndex?: number,
      result?: Cesium$Matrix3
    ): Cesium$Matrix3;
    static fromColumnMajorArray(
      values: number[],
      result?: Cesium$Matrix3
    ): Cesium$Matrix3;
    static fromRowMajorArray(
      values: number[],
      result?: Cesium$Matrix3
    ): Cesium$Matrix3;
    static fromHeadingPitchRoll(
      headingPitchRoll: Cesium$HeadingPitchRoll,
      result?: Cesium$Matrix3
    ): Cesium$Matrix3;
    static fromQuaternion(quaternion: Cesium$Quaternion): Cesium$Matrix3;
    static fromScale(
      scale: Cesium$Cartesian3,
      result?: Cesium$Matrix3
    ): Cesium$Matrix3;
    static fromUniformScale(
      scale: number,
      result?: Cesium$Matrix3
    ): Cesium$Matrix3;
    static fromCrossProduct(
      the: Cesium$Cartesian3,
      result?: Cesium$Matrix3
    ): Cesium$Matrix3;
    static fromRotationX(
      angle: number,
      result?: Cesium$Matrix3
    ): Cesium$Matrix3;
    static fromRotationY(
      angle: number,
      result?: Cesium$Matrix3
    ): Cesium$Matrix3;
    static fromRotationZ(
      angle: number,
      result?: Cesium$Matrix3
    ): Cesium$Matrix3;
    static toArray(matrix: Cesium$Matrix3, result?: number[]): number[];
    static getElementIndex(row: number, column: number): number;
    static getColumn(
      matrix: Cesium$Matrix3,
      index: number,
      result: Cesium$Cartesian3
    ): Cesium$Cartesian3;
    static setColumn(
      matrix: Cesium$Matrix3,
      index: number,
      cartesian: Cesium$Cartesian3,
      result: Cesium$Cartesian3
    ): Cesium$Matrix3;
    static getRow(
      matrix: Cesium$Matrix3,
      index: number,
      result: Cesium$Cartesian3
    ): Cesium$Cartesian3;
    static setRow(
      matrix: Cesium$Matrix3,
      index: number,
      cartesian: Cesium$Cartesian3,
      result: Cesium$Cartesian3
    ): Cesium$Matrix3;
    static getScale(
      matrix: Cesium$Matrix3,
      result: Cesium$Cartesian3
    ): Cesium$Cartesian3;
    static getMaximumScale(matrix: Cesium$Matrix3): number;
    static multiply(
      left: Cesium$Matrix3,
      right: Cesium$Matrix3,
      result: Cesium$Matrix3
    ): Cesium$Matrix3;
    static add(
      left: Cesium$Matrix3,
      right: Cesium$Matrix3,
      result: Cesium$Matrix3
    ): Cesium$Matrix3;
    static subtract(
      left: Cesium$Matrix3,
      right: Cesium$Matrix3,
      result: Cesium$Matrix3
    ): Cesium$Matrix3;
    static multiplyByVector(
      matrix: Cesium$Matrix3,
      cartesian: Cesium$Cartesian3,
      result: Cesium$Cartesian3
    ): Cesium$Cartesian3;
    static multiplyByScalar(
      matrix: Cesium$Matrix3,
      scalar: number,
      result: Cesium$Matrix3
    ): Cesium$Matrix3;
    static negate(
      matrix: Cesium$Matrix3,
      result: Cesium$Matrix3
    ): Cesium$Matrix3;
    static transpose(
      matrix: Cesium$Matrix3,
      result: Cesium$Matrix3
    ): Cesium$Matrix3;
    static computeEigenDecomposition(matrix: Cesium$Matrix3, result?: any): any;
    static abs(matrix: Cesium$Matrix3, result: Cesium$Matrix3): Cesium$Matrix3;
    static determinant(matrix: Cesium$Matrix3): number;
    static inverse(
      matrix: Cesium$Matrix3,
      result: Cesium$Matrix3
    ): Cesium$Matrix3;
    static equals(left?: Cesium$Matrix3, right?: Cesium$Matrix3): boolean;
    static equalsEpsilon(
      left: Cesium$Matrix3,
      right: Cesium$Matrix3,
      epsilon: number
    ): boolean;
  }

  declare class Cesium$Matrix4 mixins Cesium$Packable {
    static IDENTITY: Cesium$Matrix4;
    static COLUMN0ROW0: number;
    static COLUMN0ROW1: number;
    static COLUMN0ROW2: number;
    static COLUMN0ROW3: number;
    static COLUMN1ROW0: number;
    static COLUMN1ROW1: number;
    static COLUMN1ROW2: number;
    static COLUMN1ROW3: number;
    static COLUMN2ROW0: number;
    static COLUMN2ROW1: number;
    static COLUMN2ROW2: number;
    static COLUMN2ROW3: number;
    static COLUMN3ROW0: number;
    static COLUMN3ROW1: number;
    static COLUMN3ROW2: number;
    static COLUMN3ROW3: number;
    constructor(
      column0Row0?: number,
      column1Row0?: number,
      column2Row0?: number,
      column3Row0?: number,
      column0Row1?: number,
      column1Row1?: number,
      column2Row1?: number,
      column3Row1?: number,
      column0Row2?: number,
      column1Row2?: number,
      column2Row2?: number,
      column3Row2?: number,
      column0Row3?: number,
      column1Row3?: number,
      column2Row3?: number,
      column3Row3?: number
    ): this;
    clone(result?: Cesium$Matrix4): Cesium$Matrix4;
    equals(right?: Cesium$Matrix4): boolean;
    equalsEpsilon(right: Cesium$Matrix4, epsilon: number): boolean;
    toString(): string;
    static pack(
      value: Cesium$Matrix4,
      array: number[],
      startingIndex?: number
    ): number[];
    static unpack(
      array: number[],
      startingIndex?: number,
      result?: Cesium$Matrix4
    ): Cesium$Matrix4;
    static clone(
      matrix: Cesium$Matrix4,
      result?: Cesium$Matrix4
    ): Cesium$Matrix4;
    static fromArray(
      array: number[],
      startingIndex?: number,
      result?: Cesium$Matrix4
    ): Cesium$Matrix4;
    static fromColumnMajorArray(
      values: number[],
      result?: Cesium$Matrix4
    ): Cesium$Matrix4;
    static fromRowMajorArray(
      values: number[],
      result?: Cesium$Matrix4
    ): Cesium$Matrix4;
    static fromRotationTranslation(
      rotation: Cesium$Matrix3,
      translation?: Cesium$Cartesian3,
      result?: Cesium$Matrix4
    ): Cesium$Matrix4;
    static fromTranslationQuaternionRotationScale(
      translation: Cesium$Cartesian3,
      rotation: Cesium$Quaternion,
      scale: Cesium$Cartesian3,
      result?: Cesium$Matrix4
    ): Cesium$Matrix4;
    static fromTranslation(
      translation: Cesium$Cartesian3,
      result?: Cesium$Matrix4
    ): Cesium$Matrix4;
    static fromScale(
      scale: Cesium$Cartesian3,
      result?: Cesium$Matrix4
    ): Cesium$Matrix4;
    static fromUniformScale(
      scale: number,
      result?: Cesium$Matrix4
    ): Cesium$Matrix4;
    static fromCamera(
      camera: Cesium$Camera,
      result?: Cesium$Matrix4
    ): Cesium$Matrix4;
    static computePerspectiveFieldOfView(
      fovY: number,
      aspectRatio: number,
      near: number,
      far: number,
      result: Cesium$Matrix4
    ): Cesium$Matrix4;
    static computeOrthographicOffCenter(
      left: number,
      right: number,
      bottom: number,
      top: number,
      near: number,
      far: number,
      result: Cesium$Matrix4
    ): Cesium$Matrix4;
    static computePerspectiveOffCenter(
      left: number,
      right: number,
      bottom: number,
      top: number,
      near: number,
      far: number,
      result: Cesium$Matrix4
    ): Cesium$Matrix4;
    static computeInfinitePerspectiveOffCenter(
      left: number,
      right: number,
      bottom: number,
      top: number,
      near: number,
      far: number,
      result: Cesium$Matrix4
    ): Cesium$Matrix4;
    static computeViewportTransformation(
      viewport: any,
      nearDepthRange: number,
      farDepthRange: number,
      result: Cesium$Matrix4
    ): Cesium$Matrix4;
    static toArray(matrix: Cesium$Matrix4, result?: number[]): number[];
    static getElementIndex(row: number, column: number): number;
    static getColumn(
      matrix: Cesium$Matrix4,
      index: number,
      result: Cesium$Cartesian4
    ): Cesium$Cartesian4;
    static setColumn(
      matrix: Cesium$Matrix4,
      index: number,
      cartesian: Cesium$Cartesian4,
      result: Cesium$Cartesian4
    ): Cesium$Matrix4;
    static getRow(
      matrix: Cesium$Matrix4,
      index: number,
      result: Cesium$Cartesian4
    ): Cesium$Cartesian4;
    static setRow(
      matrix: Cesium$Matrix4,
      index: number,
      cartesian: Cesium$Cartesian4,
      result: Cesium$Cartesian4
    ): Cesium$Matrix4;
    static getScale(
      matrix: Cesium$Matrix4,
      result: Cesium$Cartesian3
    ): Cesium$Cartesian3;
    static getMaximumScale(matrix: Cesium$Matrix4): number;
    static multiply(
      left: Cesium$Matrix4,
      right: Cesium$Matrix4,
      result: Cesium$Matrix4
    ): Cesium$Matrix4;
    static add(
      left: Cesium$Matrix4,
      right: Cesium$Matrix4,
      result: Cesium$Matrix4
    ): Cesium$Matrix4;
    static subtract(
      left: Cesium$Matrix4,
      right: Cesium$Matrix4,
      result: Cesium$Matrix4
    ): Cesium$Matrix4;
    static multiplyTransformation(
      left: Cesium$Matrix4,
      right: Cesium$Matrix4,
      result: Cesium$Matrix4
    ): Cesium$Matrix4;
    static multiplyByMatrix3(
      matrix: Cesium$Matrix4,
      rotation: Cesium$Matrix3,
      result: Cesium$Matrix4
    ): Cesium$Matrix4;
    static multiplyByTranslation(
      matrix: Cesium$Matrix4,
      translation: Cesium$Cartesian3,
      result: Cesium$Matrix4
    ): Cesium$Matrix4;
    static multiplyByUniformScale(
      matrix: Cesium$Matrix4,
      scale: number,
      result: Cesium$Matrix4
    ): Cesium$Matrix4;
    static multiplyByScale(
      matrix: Cesium$Matrix4,
      scale: Cesium$Cartesian3,
      result: Cesium$Matrix4
    ): Cesium$Matrix4;
    static multiplyByVector(
      matrix: Cesium$Matrix4,
      cartesian: Cesium$Cartesian4,
      result: Cesium$Cartesian4
    ): Cesium$Cartesian4;
    static multiplyByPointAsVector(
      matrix: Cesium$Matrix4,
      cartesian: Cesium$Cartesian3,
      result: Cesium$Cartesian3
    ): Cesium$Cartesian3;
    static multiplyByPoint(
      matrix: Cesium$Matrix4,
      cartesian: Cesium$Cartesian3,
      result: Cesium$Cartesian3
    ): Cesium$Cartesian3;
    static multiplyByScalar(
      matrix: Cesium$Matrix4,
      scalar: number,
      result: Cesium$Matrix4
    ): Cesium$Matrix4;
    static negate(
      matrix: Cesium$Matrix4,
      result: Cesium$Matrix4
    ): Cesium$Matrix4;
    static transpose(
      matrix: Cesium$Matrix4,
      result: Cesium$Matrix4
    ): Cesium$Matrix4;
    static abs(matrix: Cesium$Matrix4, result: Cesium$Matrix4): Cesium$Matrix4;
    static equals(left?: Cesium$Matrix4, right?: Cesium$Matrix4): boolean;
    static equalsEpsilon(
      left: Cesium$Matrix4,
      right: Cesium$Matrix4,
      epsilon: number
    ): boolean;
    static getTranslation(
      matrix: Cesium$Matrix4,
      result: Cesium$Cartesian3
    ): Cesium$Cartesian3;
    static getRotation(
      matrix: Cesium$Matrix4,
      result: Cesium$Matrix3
    ): Cesium$Matrix3;
    static inverse(
      matrix: Cesium$Matrix4,
      result: Cesium$Matrix4
    ): Cesium$Matrix4;
    static inverseTransformation(
      matrix: Cesium$Matrix4,
      result: Cesium$Matrix4
    ): Cesium$Matrix4;
  }

  declare class Cesium$NearFarScalar mixins Cesium$Packable {
    near: number;
    nearValue: number;
    far: number;
    farValue: number;
    constructor(
      near?: number,
      nearValue?: number,
      far?: number,
      farValue?: number
    ): this;
    clone(result?: Cesium$NearFarScalar): Cesium$NearFarScalar;
    equals(right?: Cesium$NearFarScalar): boolean;
    static clone(
      nearFarScalar: Cesium$NearFarScalar,
      result?: Cesium$NearFarScalar
    ): Cesium$NearFarScalar;
    static pack(
      value: Cesium$NearFarScalar,
      array: number[],
      startingIndex?: number
    ): number[];
    static unpack(
      array: number[],
      startingIndex?: number,
      result?: Cesium$NearFarScalar
    ): Cesium$NearFarScalar;
    static equals(
      left?: Cesium$NearFarScalar,
      right?: Cesium$NearFarScalar
    ): boolean;
  }

  declare class Cesium$ObjectOrientedBoundingBox {
    rotation: Cesium$Matrix3;
    translation: Cesium$Cartesian3;
    scale: Cesium$Cartesian3;
    constructor(
      rotation?: Cesium$Matrix3,
      translation?: Cesium$Cartesian3,
      scale?: Cesium$Cartesian3
    ): this;
    clone(
      result?: Cesium$ObjectOrientedBoundingBox
    ): Cesium$ObjectOrientedBoundingBox;
    equals(right?: Cesium$ObjectOrientedBoundingBox): boolean;
    static fromPoints(
      positions: Cesium$Cartesian3[],
      result?: Cesium$ObjectOrientedBoundingBox
    ): Cesium$ObjectOrientedBoundingBox;
    static fromBoundingRectangle(
      boundingRectangle: Cesium$BoundingRectangle,
      rotation?: number
    ): Cesium$ObjectOrientedBoundingBox;
    static clone(
      box: Cesium$ObjectOrientedBoundingBox,
      result?: Cesium$ObjectOrientedBoundingBox
    ): Cesium$ObjectOrientedBoundingBox;
    static intersect(
      left: Cesium$ObjectOrientedBoundingBox,
      right: Cesium$ObjectOrientedBoundingBox
    ): boolean;
    static equals(
      left: Cesium$ObjectOrientedBoundingBox,
      right: Cesium$ObjectOrientedBoundingBox
    ): boolean;
  }

  declare class Cesium$Occluder {
    position: Cesium$Cartesian3;
    radius: number;
    cameraPosition: Cesium$Cartesian3;
    constructor(
      occluderBoundingSphere: Cesium$BoundingSphere,
      cameraPosition: Cesium$Cartesian3
    ): this;
    isPointVisible(occludee: Cesium$Cartesian3): boolean;
    isBoundingSphereVisible(occludee: Cesium$BoundingSphere): boolean;
    computeVisibility(occludeeBS: Cesium$BoundingSphere): number;
    static fromBoundingSphere(
      occluderBoundingSphere: Cesium$BoundingSphere,
      cameraPosition: Cesium$Cartesian3,
      result?: Cesium$Occluder
    ): Cesium$Occluder;
    static computeOccludeePoint(
      occluderBoundingSphere: Cesium$BoundingSphere,
      occludeePosition: Cesium$Cartesian3,
      positions: Cesium$Cartesian3[]
    ): any;
    static computeOccludeePointFromRectangle(
      rectangle: Cesium$Rectangle,
      ellipsoid?: Cesium$Ellipsoid
    ): any;
  }

  declare class Cesium$PinBuilder {
    fromColor(color: Cesium$Color, size: number): HTMLCanvasElement;
    fromUrl(
      url: string,
      color: Cesium$Color,
      size: number
    ): HTMLCanvasElement | Promise<HTMLCanvasElement>;
    fromMakiIconId(
      id: string,
      color: Cesium$Color,
      size: number
    ): HTMLCanvasElement | Promise<HTMLCanvasElement>;
    fromText(
      text: string,
      color: Cesium$Color,
      size: number
    ): HTMLCanvasElement;
  }

  declare class Cesium$Plane {
    normal: Cesium$Cartesian3;
    distance: number;
    constructor(normal: Cesium$Cartesian3, distance: number): this;
    static fromPointNormal(
      point: Cesium$Cartesian3,
      normal: Cesium$Cartesian3,
      result?: Cesium$Plane
    ): Cesium$Plane;
    static getPointDistance(
      plane: Cesium$Plane,
      point: Cesium$Cartesian3
    ): number;
  }

  declare class Cesium$PolygonGeometry mixins Cesium$Packable {
    constructor(options: {
      polygonHierarchy: Cesium$PolygonHierarchy,
      height?: number,
      extrudedHeight?: number,
      vertexFormat?: Cesium$VertexFormat,
      stRotation?: number,
      ellipsoid?: Cesium$Ellipsoid,
      granularity?: number,
      perPositionHeight?: boolean
    }): this;
    static fromPositions(options?: {
      positions: Cesium$Cartesian3[],
      height?: number,
      extrudedHeight?: number,
      vertexFormat?: Cesium$VertexFormat,
      stRotation?: number,
      ellipsoid?: Cesium$Ellipsoid,
      granularity?: number,
      perPositionHeight?: boolean,
      closeTop?: boolean,
      closeBottom?: boolean
    }): Cesium$PolygonGeometry;
    static unpack(
      array: number[],
      startingIndex?: number,
      result?: Cesium$PolygonGeometry
    ): Cesium$PolygonGeometry;
    static createGeometry(
      polygonGeometry: Cesium$PolygonGeometry
    ): Cesium$Geometry;
  }

  declare class Cesium$PolygonHierarchy mixins Cesium$Property {
    positions: Cesium$Cartesian3[];
    holes: Cesium$PolygonHierarchy[];
    constructor(
      positions?: Cesium$Cartesian3[],
      holes?: Cesium$PolygonHierarchy[]
    ): this;
  }

  declare class Cesium$PolygonOutlineGeometry mixins Cesium$Packable {
    constructor(options: {
      polygonHierarchy: any,
      height?: number,
      extrudedHeight?: number,
      vertexFormat?: Cesium$VertexFormat,
      ellipsoid?: Cesium$Ellipsoid,
      granularity?: number,
      perPositionHeight?: boolean
    }): this;
    static unpack(
      array: number[],
      startingIndex?: number,
      result?: Cesium$PolygonOutlineGeometry
    ): Cesium$PolygonOutlineGeometry;
    static fromPositions(options?: {
      positions: Cesium$Cartesian3[],
      height?: number,
      extrudedHeight?: number,
      ellipsoid?: Cesium$Ellipsoid,
      granularity?: number,
      perPositionHeight?: boolean
    }): Cesium$PolygonOutlineGeometry;
    static createGeometry(
      polygonGeometry: Cesium$PolygonOutlineGeometry
    ): Cesium$Geometry;
  }

  declare class Cesium$PolylineGeometry mixins Cesium$Packable {
    constructor(options: {
      positions: Cesium$Cartesian3[],
      width?: number,
      colors?: Cesium$Color[],
      colorsPerVertex?: boolean,
      followSurface?: boolean,
      granularity?: number,
      ellipsoid?: Cesium$Ellipsoid
    }): this;
    static unpack(
      array: number[],
      startingIndex?: number,
      result?: Cesium$PolylineGeometry
    ): Cesium$PolylineGeometry;
    static createGeometry(
      polylineGeometry: Cesium$PolylineGeometry
    ): Cesium$Geometry;
  }

  declare class Cesium$PolylineVolumeGeometry mixins Cesium$Packable {
    constructor(options: {
      polylinePositions: Cesium$Cartesian3[],
      shapePositions: Cesium$Cartesian2[],
      ellipsoid?: Cesium$Ellipsoid,
      granularity?: number,
      vertexFormat?: Cesium$VertexFormat,
      cornerType?: Cesium$CornerType
    }): this;
    static unpack(
      array: number[],
      startingIndex?: number,
      result?: Cesium$PolylineVolumeGeometry
    ): Cesium$PolylineVolumeGeometry;
    static createGeometry(
      polylineVolumeGeometry: Cesium$PolylineVolumeGeometry
    ): Cesium$Geometry;
  }

  declare class Cesium$PolylineVolumeOutlineGeometry mixins Cesium$Packable {
    constructor(options: {
      polylinePositions: Cesium$Cartesian3[],
      shapePositions: number,
      ellipsoid?: Cesium$Ellipsoid,
      granularity?: number,
      cornerType?: Cesium$CornerType
    }): this;
    static unpack(
      array: number[],
      startingIndex?: number,
      result?: Cesium$PolylineVolumeOutlineGeometry
    ): Cesium$PolylineVolumeOutlineGeometry;
    static createGeometry(
      polylineVolumeOutlineGeometry: Cesium$PolylineVolumeOutlineGeometry
    ): Cesium$Geometry;
  }

  declare class Cesium$QuantizedMeshTerrainData {
    waterMask: Uint8Array | HTMLImageElement | HTMLCanvasElement;
    constructor(options: {
      quantizedVertices: Uint16Array,
      indices: Uint16Array | Uint32Array,
      minimumHeight: number,
      maximumHeight: number,
      boundingSphere: Cesium$BoundingSphere,
      horizonOcclusionPoint: Cesium$Cartesian3,
      westIndices: number[],
      southIndices: number[],
      eastIndices: number[],
      northIndices: number[],
      westSkirtHeight: number,
      southSkirtHeight: number,
      eastSkirtHeight: number,
      northSkirtHeight: number,
      childTileMask?: number,
      createdByUpsampling?: boolean,
      encodedNormals?: Uint8Array,
      waterMask?: Uint8Array
    }): this;
    createMesh(
      tilingScheme: Cesium$TilingScheme,
      x: number,
      y: number,
      level: number
    ): Promise<Cesium$TerrainMesh>;
    upsample(
      tilingScheme: Cesium$TilingScheme,
      thisX: number,
      thisY: number,
      thisLevel: number,
      descendantX: number,
      descendantY: number,
      descendantLevel: number
    ): Promise<Cesium$QuantizedMeshTerrainData>;
    interpolateHeight(
      rectangle: Cesium$Rectangle,
      longitude: number,
      latitude: number
    ): number;
    isChildAvailable(
      thisX: number,
      thisY: number,
      childX: number,
      childY: number
    ): boolean;
    wasCreatedByUpsampling(): boolean;
  }

  declare class Cesium$Quaternion mixins Cesium$Packable {
    x: number;
    y: number;
    z: number;
    w: number;
    static packedInterpolationLength: number;
    static ZERO: Cesium$Quaternion;
    static IDENTITY: Cesium$Quaternion;
    constructor(x?: number, y?: number, z?: number, w?: number): this;
    clone(result?: Cesium$Quaternion): Cesium$Quaternion;
    equals(right?: Cesium$Quaternion): boolean;
    equalsEpsilon(right: Cesium$Quaternion, epsilon: number): boolean;
    toString(): string;
    static fromAxisAngle(
      axis: Cesium$Cartesian3,
      angle: number,
      result?: Cesium$Quaternion
    ): Cesium$Quaternion;
    static fromRotationMatrix(
      matrix: Cesium$Matrix3,
      result?: Cesium$Quaternion
    ): Cesium$Quaternion;
    static fromHeadingPitchRoll(
      headingPitchRoll: Cesium$HeadingPitchRoll,
      result?: Cesium$Quaternion
    ): Cesium$Quaternion;
    static pack(
      value: Cesium$Quaternion,
      array: number[],
      startingIndex?: number
    ): number[];
    static unpack(
      array: number[],
      startingIndex?: number,
      result?: Cesium$Quaternion
    ): Cesium$Quaternion;
    static convertPackedArrayForInterpolation(
      packedArray: number[],
      startingIndex?: number,
      lastIndex?: number,
      result?: number[]
    ): void;
    static unpackInterpolationResult(
      array: number[],
      sourceArray: number[],
      startingIndex?: number,
      lastIndex?: number,
      result?: Cesium$Quaternion
    ): Cesium$Quaternion;
    static clone(
      quaternion: Cesium$Quaternion,
      result?: Cesium$Quaternion
    ): Cesium$Quaternion;
    static conjugate(
      quaternion: Cesium$Quaternion,
      result: Cesium$Quaternion
    ): Cesium$Quaternion;
    static magnitudeSquared(quaternion: Cesium$Quaternion): number;
    static magnitude(quaternion: Cesium$Quaternion): number;
    static normalize(
      quaternion: Cesium$Quaternion,
      result: Cesium$Quaternion
    ): Cesium$Quaternion;
    static inverse(
      quaternion: Cesium$Quaternion,
      result: Cesium$Quaternion
    ): Cesium$Quaternion;
    static add(
      left: Cesium$Quaternion,
      right: Cesium$Quaternion,
      result: Cesium$Quaternion
    ): Cesium$Quaternion;
    static subtract(
      left: Cesium$Quaternion,
      right: Cesium$Quaternion,
      result: Cesium$Quaternion
    ): Cesium$Quaternion;
    static negate(
      quaternion: Cesium$Quaternion,
      result: Cesium$Quaternion
    ): Cesium$Quaternion;
    static dot(left: Cesium$Quaternion, right: Cesium$Quaternion): number;
    static multiply(
      left: Cesium$Quaternion,
      right: Cesium$Quaternion,
      result: Cesium$Quaternion
    ): Cesium$Quaternion;
    static multiplyByScalar(
      quaternion: Cesium$Quaternion,
      scalar: number,
      result: Cesium$Quaternion
    ): Cesium$Quaternion;
    static divideByScalar(
      quaternion: Cesium$Quaternion,
      scalar: number,
      result: Cesium$Quaternion
    ): Cesium$Quaternion;
    static computeAxis(
      quaternion: Cesium$Quaternion,
      result: Cesium$Cartesian3
    ): Cesium$Cartesian3;
    static computeAngle(quaternion: Cesium$Quaternion): number;
    static lerp(
      start: Cesium$Quaternion,
      end: Cesium$Quaternion,
      t: number,
      result: Cesium$Quaternion
    ): Cesium$Quaternion;
    static slerp(
      start: Cesium$Quaternion,
      end: Cesium$Quaternion,
      t: number,
      result: Cesium$Quaternion
    ): Cesium$Quaternion;
    static log(
      quaternion: Cesium$Quaternion,
      result: Cesium$Cartesian3
    ): Cesium$Cartesian3;
    static exp(
      cartesian: Cesium$Cartesian3,
      result: Cesium$Quaternion
    ): Cesium$Quaternion;
    static computeInnerQuadrangle(
      q0: Cesium$Quaternion,
      q1: Cesium$Quaternion,
      q2: Cesium$Quaternion,
      result: Cesium$Quaternion
    ): Cesium$Quaternion;
    static squad(
      q0: Cesium$Quaternion,
      q1: Cesium$Quaternion,
      s0: Cesium$Quaternion,
      s1: Cesium$Quaternion,
      t: number,
      result: Cesium$Quaternion
    ): Cesium$Quaternion;
    static fastSlerp(
      start: Cesium$Quaternion,
      end: Cesium$Quaternion,
      t: number,
      result: Cesium$Quaternion
    ): Cesium$Quaternion;
    static fastSquad(
      q0: Cesium$Quaternion,
      q1: Cesium$Quaternion,
      s0: Cesium$Quaternion,
      s1: Cesium$Quaternion,
      t: number,
      result?: Cesium$Quaternion
    ): Cesium$Quaternion;
    static equals(left?: Cesium$Quaternion, right?: Cesium$Quaternion): boolean;
    static equalsEpsilon(
      left: Cesium$Quaternion,
      right: Cesium$Quaternion,
      epsilon: number
    ): boolean;
  }

  declare class Cesium$QuaternionSpline {
    times: number[];
    points: Cesium$Quaternion[];
    innerQuadrangles: Cesium$Quaternion[];
    constructor(options: {
      times: number[],
      points: Cesium$Quaternion[],
      firstInnerQuadrangle?: Cesium$Quaternion,
      lastInnerQuadrangle?: Cesium$Quaternion
    }): this;
    findTimeInterval(time: number): number;
    evaluate(time: number, result?: Cesium$Quaternion): Cesium$Quaternion;
  }

  declare class Cesium$Queue {
    length: number;
    enqueue(item: any): void;
    dequeue(): any;
    contains(item: any): boolean;
    clear(): void;
    peek(): any;
    sort(compareFunction: Cesium$Queue.mergeSort$Comparator): void;
  }

  declare type Queue$Comparator = (a: any, b: any) => number;

  declare class Cesium$Ray {
    origin: Cesium$Cartesian3;
    direction: Cesium$Cartesian3;
    constructor(
      origin?: Cesium$Cartesian3,
      direction?: Cesium$Cartesian3
    ): this;
    static getPoint(t: number, result?: Cesium$Cartesian3): Cesium$Cartesian3;
  }

  declare class Cesium$Rectangle mixins Cesium$Packable {
    west: number;
    south: number;
    east: number;
    north: number;
    width: number;
    height: number;
    static MAX_VALUE: Cesium$Rectangle;
    constructor(
      west?: number,
      south?: number,
      east?: number,
      north?: number
    ): this;
    clone(result?: Cesium$Rectangle): Cesium$Rectangle;
    equals(other?: Cesium$Rectangle): boolean;
    equalsEpsilon(other: Cesium$Rectangle, epsilon: number): boolean;
    static pack(
      value: Cesium$Rectangle,
      array: number[],
      startingIndex?: number
    ): number[];
    static unpack(
      array: number[],
      startingIndex?: number,
      result?: Cesium$Rectangle
    ): Cesium$Rectangle;
    static computeWidth(rectangle: Cesium$Rectangle): number;
    static computeHeight(rectangle: Cesium$Rectangle): number;
    static fromDegrees(
      west?: number,
      south?: number,
      east?: number,
      north?: number,
      result?: Cesium$Rectangle
    ): Cesium$Rectangle;
    static fromCartographicArray(
      cartographics: Cesium$Cartographic[],
      result?: Cesium$Rectangle
    ): Cesium$Rectangle;
    static clone(
      rectangle: Cesium$Rectangle,
      result?: Cesium$Rectangle
    ): Cesium$Rectangle;
    static equals(left?: Cesium$Rectangle, right?: Cesium$Rectangle): boolean;
    static validate(rectangle: Cesium$Rectangle): void;
    static southwest(
      rectangle: Cesium$Rectangle,
      result?: Cesium$Cartographic
    ): Cesium$Cartographic;
    static northwest(
      rectangle: Cesium$Rectangle,
      result?: Cesium$Cartographic
    ): Cesium$Cartographic;
    static northeast(
      rectangle: Cesium$Rectangle,
      result?: Cesium$Cartographic
    ): Cesium$Cartographic;
    static southeast(
      rectangle: Cesium$Rectangle,
      result?: Cesium$Cartographic
    ): Cesium$Cartographic;
    static center(
      rectangle: Cesium$Rectangle,
      result?: Cesium$Cartographic
    ): Cesium$Cartographic;
    static intersection(
      rectangle: Cesium$Rectangle,
      otherRectangle: Cesium$Rectangle,
      result?: Cesium$Rectangle
    ): Cesium$Rectangle;
    static contains(
      rectangle: Cesium$Rectangle,
      cartographic: Cesium$Cartographic
    ): boolean;
    static subsample(
      rectangle: Cesium$Rectangle,
      ellipsoid?: Cesium$Ellipsoid,
      surfaceHeight?: number,
      result?: Cesium$Cartesian3[]
    ): Cesium$Cartesian3[];
  }

  declare class Cesium$RectangleGeometry mixins Cesium$Packable {
    constructor(options: {
      rectangle: Cesium$Rectangle,
      vertexFormat?: Cesium$VertexFormat,
      ellipsoid?: Cesium$Ellipsoid,
      granularity?: number,
      height?: number,
      rotation?: number,
      stRotation?: number,
      extrudedHeight?: number
    }): this;
    static pack(
      value: Cesium$BoundingSphere,
      array: number[],
      startingIndex?: number
    ): number[];
    static unpack(
      array: number[],
      startingIndex?: number,
      result?: Cesium$RectangleGeometry
    ): Cesium$RectangleGeometry;
    static createGeometry(
      rectangleGeometry: Cesium$RectangleGeometry
    ): Cesium$Geometry;
  }

  declare class Cesium$RectangleOutlineGeometry mixins Cesium$Packable {
    constructor(options: {
      rectangle: Cesium$Rectangle,
      ellipsoid?: Cesium$Ellipsoid,
      granularity?: number,
      height?: number,
      rotation?: number,
      extrudedHeight?: number
    }): this;
    static pack(
      value: Cesium$BoundingSphere,
      array: number[],
      startingIndex?: number
    ): number[];
    static unpack(
      array: number[],
      startingIndex?: number,
      result?: Cesium$RectangleGeometry
    ): Cesium$RectangleOutlineGeometry;
    static createGeometry(
      rectangleGeometry: Cesium$RectangleOutlineGeometry
    ): Cesium$Geometry;
  }

  declare class Cesium$RequestErrorEvent {
    statusCode: number;
    response: any;
    responseHeaders: any;
    constructor(
      statusCode?: number,
      response?: any,
      responseHeaders?: string | { [key: string]: any }
    ): this;
    toString(): string;
  }

  declare class Cesium$RuntimeError {
    name: string;
    message: string;
    stack: string;
    constructor(message?: string): this;
  }

  declare class Cesium$ScreenSpaceEventHandler {
    constructor(element?: HTMLCanvasElement): this;
    setInputAction(action: () => void, type: number, modifier?: number): void;
    getInputAction(type: number, modifier?: number): () => void;
    removeInputAction(type: number, modifier?: number): void;
    isDestroyed(): boolean;
    destroy(): void;
  }

  declare class Cesium$ShowGeometryInstanceAttribute {
    value: Uint8Array;
    componentDatatype: Cesium$ComponentDatatype;
    componentsPerAttribute: number;
    normalize: boolean;
    constructor(show?: boolean): this;
    static toValue(show: boolean, result?: Uint8Array): Uint8Array;
  }

  declare class Cesium$SimplePolylineGeometry mixins Cesium$Packable {
    constructor(options: {
      positions: Cesium$Cartesian3[],
      colors?: Cesium$Color[],
      colorsPerVertex?: boolean,
      followSurface?: boolean,
      granularity?: number,
      ellipsoid?: Cesium$Ellipsoid
    }): this;
    static unpack(
      array: number[],
      startingIndex?: number,
      result?: Cesium$SimplePolylineGeometry
    ): Cesium$SimplePolylineGeometry;
    static createGeometry(
      simplePolylineGeometry: Cesium$SimplePolylineGeometry
    ): Cesium$Geometry;
  }

  declare class Cesium$SphereGeometry mixins Cesium$Packable {
    constructor(options?: {
      radius?: number,
      stackPartitions?: number,
      slicePartitions?: number,
      vertexFormat?: Cesium$VertexFormat
    }): this;
    static unpack(
      array: number[],
      startingIndex?: number,
      result?: Cesium$SphereGeometry
    ): Cesium$SphereGeometry;
    static createGeometry(
      sphereGeometry: Cesium$SphereGeometry
    ): Cesium$Geometry;
  }

  declare class Cesium$SphereOutlineGeometry mixins Cesium$Packable {
    constructor(options?: {
      radius?: number,
      stackPartitions?: number,
      slicePartitions?: number,
      subdivisions?: number
    }): this;
    static unpack(
      array: number[],
      startingIndex?: number,
      result?: Cesium$SphereOutlineGeometry
    ): Cesium$SphereOutlineGeometry;
    static createGeometry(
      sphereGeometry: Cesium$SphereOutlineGeometry
    ): Cesium$Geometry;
  }

  declare class Cesium$Spherical {
    constructor(clock?: number, cone?: number, magnitude?: number): this;
    equals(other: Cesium$Spherical): boolean;
    clone(result?: Cesium$Spherical): Cesium$Spherical;
    equalsEpsilon(other: Cesium$Spherical, epsilon: number): boolean;
    toString(): string;
    static fromCartesian3(
      cartesian3: Cesium$Cartesian3,
      spherical?: Cesium$Spherical
    ): Cesium$Spherical;
    static clone(
      spherical: Cesium$Spherical,
      result?: Cesium$Spherical
    ): Cesium$Spherical;
    static normalize(
      spherical: Cesium$Spherical,
      result?: Cesium$Spherical
    ): Cesium$Spherical;
    static equals(left: Cesium$Spherical, right: Cesium$Spherical): boolean;
    static equalsEpsilon(
      left: Cesium$Spherical,
      right: Cesium$Spherical,
      epsilon?: number
    ): boolean;
  }

  declare class Cesium$Spline {
    times: number[];
    points: Cesium$Cartesian3[] | Cesium$Quaternion[];
    evaluate(
      time: number,
      result?: Cesium$Cartesian3 | Cesium$Quaternion
    ): Cesium$Cartesian3 | Cesium$Quaternion;
    findTimeInterval(time: number, startIndex: number): number;
  }

  declare class Cesium$TaskProcessor {
    constructor(workerName: string, maximumActiveTasks?: number): this;
    scheduleTask(parameters: any, transferableObjects?: any[]): Promise<any>;
    isDestroyed(): boolean;
    destroy(): void;
  }

  declare class Cesium$TerrainData {
    credits: Cesium$Credit[];
    waterMask: Uint8Array | HTMLImageElement | HTMLCanvasElement;
    interpolateHeight(
      rectangle: Cesium$Rectangle,
      longitude: number,
      latitude: number
    ): number;
    isChildAvailable(
      thisX: number,
      thisY: number,
      childX: number,
      childY: number
    ): boolean;
    upsample(
      tilingScheme: Cesium$TilingScheme,
      thisX: number,
      thisY: number,
      thisLevel: number,
      descendantX: number,
      descendantY: number,
      descendantLevel: number
    ): Promise<Cesium$TerrainData>;
    wasCreatedByUpsampling(): boolean;
  }

  declare class Cesium$TerrainMesh {
    center: Cesium$Cartesian3;
    vertices: Float32Array;
    stride: number;
    indices: Uint16Array | Uint32Array;
    minimumHeight: number;
    maximumHeight: number;
    boundingSphere3D: Cesium$BoundingSphere;
    occludeePointInScaledSpace: Cesium$Cartesian3;
    constructor(
      center: Cesium$Cartesian3,
      vertices: Float32Array,
      indices: Uint16Array | Uint32Array,
      minimumHeight: number,
      maximumHeight: number,
      boundingSphere3D: Cesium$BoundingSphere,
      occludeePointInScaledSpace: Cesium$Cartesian3,
      vertexStride?: number
    ): this;
  }

  declare class Cesium$TerrainProvider {
    availability: Cesium$TileAvailability;
    credit: Cesium$Credit;
    errorEvent: Cesium$Event;
    hasVertexNormals: boolean;
    hasWaterMask: boolean;
    ready: boolean;
    readyPromise: Promise<boolean>;
    tilingScheme: Cesium$TilingScheme;
    static heightmapTerrainQuality: number;
    static getEstimatedLevelZeroGeometricErrorForAHeightmap(
      ellipsoid: Cesium$Ellipsoid,
      tileImageWidth: number,
      numberOfTilesAtLevelZero: number
    ): number;
    static getRegularGridIndices(width: number, height: number): Uint16Array;
    getLevelMaximumGeometricError(level: number): number;
    getTileDataAvailable(x: number, y: number, level: number): boolean;
    requestTileGeometry(
      x: number,
      y: number,
      level: number,
      throttleRequests?: boolean
    ): Promise<Cesium$TerrainData>;
  }

  declare class Cesium$TileAvailability {
    constructor(tilingScheme: Cesium$TilingScheme, maximumLevel: number): this;
    addAvailableTileRange(
      level: number,
      startX: number,
      startY: number,
      endX: number,
      endY: number
    ): void;
    computeBestAvailableLevelOverRectangle(rectangle: Cesium$Rectangle): number;
    computeChildMaskForTile(level: number, x: number, y: number): number;
    computeMaximumLevelAtPosition(position: Cesium$Cartographic): number;
    isTileAvailable(level: number, x: number, y: number): boolean;
  }

  declare class Cesium$TileProviderError {
    provider: Cesium$ImageryProvider | Cesium$TerrainProvider;
    message: string;
    x: number;
    y: number;
    level: number;
    timesRetried: number;
    retry: boolean;
    error: Error;
    constructor(
      provider: Cesium$ImageryProvider | Cesium$TerrainProvider,
      message: string,
      x?: number,
      y?: number,
      level?: number,
      timesRetried?: number,
      error?: Error
    ): this;
    static handleError(
      previousError: Cesium$TileProviderError,
      provider: Cesium$ImageryProvider | Cesium$TerrainProvider,
      event: Cesium$Event,
      message: string,
      x: number,
      y: number,
      level: number,
      retryFunction: Cesium$TileProviderError.TileProviderError$RetryFunction,
      errorDetails?: Error
    ): Cesium$TileProviderError;
    static handleSuccess(previousError: Cesium$TileProviderError): void;
  }

  declare type TileProviderError$RetryFunction = () => void;

  declare class Cesium$TilingScheme {
    ellipsoid: Cesium$Ellipsoid;
    rectangle: Cesium$Rectangle;
    projection: Cesium$MapProjection;
    getNumberOfXTilesAtLevel(level: number): number;
    getNumberOfYTilesAtLevel(level: number): number;
    rectangleToNativeRectangle(
      rectangle: Cesium$Rectangle,
      result?: Cesium$Rectangle
    ): Cesium$Rectangle;
    tileXYToNativeRectangle(
      x: number,
      y: number,
      level: number,
      result?: any
    ): Cesium$Rectangle;
    tileXYToRectangle(
      x: number,
      y: number,
      level: number,
      result?: any
    ): Cesium$Rectangle;
    positionToTileXY(
      position: Cesium$Cartographic,
      level: number,
      result?: Cesium$Cartesian2
    ): Cesium$Cartesian2;
  }

  declare class Cesium$TimeInterval {
    start: Cesium$JulianDate;
    stop: Cesium$JulianDate;
    data: any;
    isStartIncluded: boolean;
    isStopIncluded: boolean;
    isEmpty: boolean;
    static EMPTY: Cesium$TimeInterval;
    constructor(options?: {
      start?: Cesium$JulianDate,
      stop?: Cesium$JulianDate,
      isStartIncluded?: boolean,
      isStopIncluded?: boolean,
      data?: any
    }): this;
    clone(result?: Cesium$TimeInterval): Cesium$TimeInterval;
    equals(
      right?: Cesium$TimeInterval,
      dataComparer?: Cesium$TimeInterval.TimeInterval$DataComparer
    ): boolean;
    equalsEpsilon(
      right: Cesium$TimeInterval,
      epsilon: number,
      dataComparer?: Cesium$TimeInterval.TimeInterval$DataComparer
    ): boolean;
    toString(): string;
    static fromIso8601(
      options: {
        iso8601: string,
        isStartIncluded?: boolean,
        isStopIncluded?: boolean,
        data?: any
      },
      result?: Cesium$TimeInterval
    ): Cesium$TimeInterval;
    static toIso8601(
      timeInterval: Cesium$TimeInterval,
      precision?: number
    ): string;
    static clone(
      timeInterval?: Cesium$TimeInterval,
      result?: Cesium$TimeInterval
    ): Cesium$TimeInterval;
    static equals(
      left?: Cesium$TimeInterval,
      right?: Cesium$TimeInterval,
      dataComparer?: Cesium$TimeInterval.TimeInterval$DataComparer
    ): boolean;
    static equalsEpsilon(
      left: Cesium$TimeInterval,
      right: Cesium$TimeInterval,
      epsilon: number,
      dataComparer?: Cesium$TimeInterval.TimeInterval$DataComparer
    ): boolean;
    static intersect(
      left: Cesium$TimeInterval,
      right: Cesium$TimeInterval,
      result: Cesium$TimeInterval,
      mergeCallback?: Cesium$TimeInterval.TimeInterval$MergeCallback
    ): Cesium$TimeInterval;
    static contains(
      timeInterval: Cesium$TimeInterval,
      julianDate: Cesium$JulianDate
    ): boolean;
  }

  declare type TimeInterval$MergeCallback = (
    leftData: any,
    rightData: any
  ) => any;

  declare type TimeInterval$DataComparer = (
    leftData: any,
    rightData: any
  ) => boolean;

  declare class Cesium$TimeIntervalCollection {
    changedEvent: Cesium$Event;
    start: Cesium$JulianDate;
    isStartIncluded: boolean;
    stop: Cesium$JulianDate;
    isStopIncluded: boolean;
    length: number;
    isEmpty: boolean;
    constructor(intervals?: Cesium$TimeInterval[]): this;
    equals(
      right?: Cesium$TimeIntervalCollection,
      dataComparer?: Cesium$TimeInterval.TimeInterval$DataComparer
    ): boolean;
    get(index: number): Cesium$TimeInterval;
    removeAll(): void;
    findIntervalContainingDate(
      date: Cesium$JulianDate
    ): Cesium$TimeInterval | void;
    findDataForIntervalContainingDate(date: Cesium$JulianDate): any;
    contains(julianDate: Cesium$JulianDate): boolean;
    indexOf(date: Cesium$JulianDate): number;
    findInterval(options?: {
      start?: Cesium$JulianDate,
      stop?: Cesium$JulianDate,
      isStartIncluded?: boolean,
      isStopIncluded?: boolean
    }): Cesium$TimeInterval;
    addInterval(
      interval: Cesium$TimeInterval,
      dataComparer?: Cesium$TimeInterval.TimeInterval$DataComparer
    ): void;
    removeInterval(interval: Cesium$TimeInterval): void;
    intersect(
      other: Cesium$TimeIntervalCollection,
      dataComparer?: Cesium$TimeInterval.TimeInterval$DataComparer,
      mergeCallback?: Cesium$TimeInterval.TimeInterval$MergeCallback
    ): Cesium$TimeIntervalCollection;
  }

  declare class Cesium$VRTheWorldTerrainProvider mixins Cesium$TerrainProvider {
    constructor(options: {
      url: string,
      proxy?: any,
      ellipsoid?: Cesium$Ellipsoid,
      credit?: Cesium$Credit | string
    }): this;
  }

  declare class Cesium$VertexFormat mixins Cesium$Packable {
    position: boolean;
    normal: boolean;
    st: boolean;
    binormal: boolean;
    tangent: boolean;
    color: boolean;
    static POSITION_ONLY: Cesium$VertexFormat;
    static POSITION_AND_NORMAL: Cesium$VertexFormat;
    static POSITION_NORMAL_AND_ST: Cesium$VertexFormat;
    static POSITION_AND_ST: Cesium$VertexFormat;
    static POSITION_AND_COLOR: Cesium$VertexFormat;
    static ALL: Cesium$VertexFormat;
    static DEFAULT: Cesium$VertexFormat;
    constructor(options?: any): this;
    static unpack(
      array: number[],
      startingIndex?: number,
      result?: Cesium$VertexFormat
    ): Cesium$VertexFormat;
    static clone(
      cartesian: Cesium$VertexFormat,
      result?: Cesium$VertexFormat
    ): Cesium$VertexFormat;
  }

  declare class Cesium$WallGeometry mixins Cesium$Packable {
    constructor(options: {
      positions: Cesium$Cartesian3[],
      granularity?: number,
      maximumHeights?: number[],
      minimumHeights?: number[],
      ellipsoid?: Cesium$Ellipsoid,
      vertexFormat?: Cesium$VertexFormat
    }): this;
    static unpack(
      array: number[],
      startingIndex?: number,
      result?: Cesium$WallGeometry
    ): Cesium$WallGeometry;
    static fromConstantHeights(
      positions: Cesium$Cartesian3[],
      maximumHeight?: number,
      minimumHeight?: number,
      ellipsoid?: Cesium$Ellipsoid
    ): Cesium$WallGeometry;
    static createGeometry(wallGeometry: Cesium$WallGeometry): Cesium$Geometry;
  }

  declare class Cesium$WallOutlineGeometry mixins Cesium$Packable {
    constructor(options: {
      positions: Cesium$Cartesian3[],
      granularity?: number,
      maximumHeights?: number[],
      minimumHeights?: number[],
      ellipsoid?: Cesium$Ellipsoid
    }): this;
    static unpack(
      array: number[],
      startingIndex?: number,
      result?: Cesium$WallOutlineGeometry
    ): Cesium$WallOutlineGeometry;
    static fromConstantHeights(
      positions: Cesium$Cartesian3[],
      maximumHeight?: number,
      minimumHeight?: number,
      ellipsoid?: Cesium$Ellipsoid
    ): Cesium$WallOutlineGeometry;
    static createGeometry(
      wallGeometry: Cesium$WallOutlineGeometry
    ): Cesium$Geometry;
  }

  declare class Cesium$WebMercatorProjection {
    ellipsoid: Cesium$Ellipsoid;
    static MaximumLatitude: number;
    constructor(ellipsoid?: Cesium$Ellipsoid): this;
    project(
      cartographic: Cesium$Cartographic,
      result?: Cesium$Cartesian3
    ): Cesium$Cartesian3;
    unproject(
      cartesian: Cesium$Cartesian3,
      result?: Cesium$Cartographic
    ): Cesium$Cartographic;
    static mercatorAngleToGeodeticLatitude(mercatorAngle: number): number;
    static geodeticLatitudeToMercatorAngle(latitude: number): number;
  }

  declare class Cesium$WebMercatorTilingScheme {
    ellipsoid: Cesium$Ellipsoid;
    rectangle: Cesium$Rectangle;
    projection: Cesium$MapProjection;
    constructor(options?: {
      ellipsoid?: Cesium$Ellipsoid,
      numberOfLevelZeroTilesX?: number,
      numberOfLevelZeroTilesY?: number,
      rectangleSouthwestInMeters?: Cesium$Cartesian2,
      rectangleNortheastInMeters?: Cesium$Cartesian2
    }): this;
    getNumberOfXTilesAtLevel(level: number): number;
    getNumberOfYTilesAtLevel(level: number): number;
    rectangleToNativeRectangle(
      rectangle: Cesium$Rectangle,
      result?: Cesium$Rectangle
    ): Cesium$Rectangle;
    tileXYToNativeRectangle(
      x: number,
      y: number,
      level: number,
      result?: any
    ): Cesium$Rectangle;
    tileXYToRectangle(
      x: number,
      y: number,
      level: number,
      result?: any
    ): Cesium$Rectangle;
    positionToTileXY(
      position: Cesium$Cartographic,
      level: number,
      result?: Cesium$Cartesian2
    ): Cesium$Cartesian2;
  }

  declare class Cesium$BillboardGraphics {
    definitionChanged: Cesium$Event;
    image: Cesium$Property;
    imageSubRegion: Cesium$Property;
    scale: Cesium$Property;
    rotation: Cesium$Property;
    alignedAxis: Cesium$Property;
    horizontalOrigin: Cesium$Property;
    verticalOrigin: Cesium$Property;
    color: Cesium$Property;
    eyeOffset: Cesium$Property;
    pixelOffset: Cesium$Property;
    show: Cesium$Property;
    width: Cesium$Property;
    height: Cesium$Property;
    scaleByDistance: Cesium$Property;
    translucencyByDistance: Cesium$Property;
    pixelOffsetScaleByDistance: Cesium$Property;
    constructor(options?: {
      image?: Cesium$Property,
      show?: Cesium$Property,
      scale?: Cesium$Property,
      horizontalOrigin?: Cesium$Property,
      verticalOrigin?: Cesium$Property,
      eyeOffset?: Cesium$Property,
      pixelOffset?: Cesium$Property,
      rotation?: Cesium$Property,
      alignedAxis?: Cesium$Property,
      width?: Cesium$Property,
      height?: Cesium$Property,
      color?: Cesium$Property,
      scaleByDistance?: Cesium$Property,
      translucencyByDistance?: Cesium$Property,
      pixelOffsetScaleByDistance?: Cesium$Property,
      imageSubRegion?: Cesium$Property
    }): this;
    clone(result?: Cesium$BillboardGraphics): Cesium$BillboardGraphics;
    merge(source: Cesium$BillboardGraphics): Cesium$BillboardGraphics;
  }

  declare class Cesium$BillboardVisualizer mixins Cesium$Visualizer {
    constructor(
      entityCluster: Cesium$EntityCluster,
      entityCollection: Cesium$EntityCollection
    ): this;
  }

  declare class Cesium$BoxGeometryUpdater mixins Cesium$GeometryUpdater {
    constructor(entity: Cesium$Entity, scene: Cesium$Scene): this;
  }

  declare class Cesium$BoxGraphics {
    definitionChanged: Cesium$Event;
    show: Cesium$Property;
    dimensions: Cesium$Property;
    material: Cesium$MaterialProperty;
    fill: Cesium$Property;
    outline: Cesium$Property;
    outlineColor: Cesium$Property;
    outlineWidth: Cesium$Property;
    constructor(options?: {
      dimensions?: Cesium$Property,
      show?: Cesium$Property,
      fill?: Cesium$Property,
      material?: Cesium$MaterialProperty,
      outline?: Cesium$Property,
      outlineColor?: Cesium$Property,
      outlineWidth?: Cesium$Property
    }): this;
    clone(result?: Cesium$BoxGraphics): Cesium$BoxGraphics;
    merge(source: Cesium$BoxGraphics): Cesium$BoxGraphics;
  }

  declare class Cesium$CallbackProperty mixins Cesium$Property {
    constructor(
      callback: Cesium$CallbackProperty.requestAnimationFrame$Callback,
      isConstant: boolean
    ): this;
    setCallback(
      callback: Cesium$CallbackProperty.requestAnimationFrame$Callback,
      isConstant: boolean
    ): void;
  }

  declare type CallbackProperty$Callback = (
    time?: Cesium$JulianDate,
    result?: any
  ) => any;

  declare class Cesium$CheckerboardMaterialProperty
    mixins Cesium$MaterialProperty {
    evenColor: Cesium$Color;
    oddColor: Cesium$Color;
    repeat: Cesium$Property;
    constructor(options?: {
      evenColor?: Cesium$Color,
      oddColor?: Cesium$Color,
      repeat?: Cesium$Property
    }): this;
  }

  declare class Cesium$ColorMaterialProperty mixins Cesium$MaterialProperty {
    color: Cesium$Color;
    constructor(color?: Cesium$Color): this;
  }

  declare class Cesium$CompositeEntityCollection {
    collectionChanged: Cesium$Event;
    id: string;
    values: Cesium$Entity[];
    constructor(collections?: Cesium$EntityCollection[]): this;
    addCollection(collection: Cesium$EntityCollection, index?: number): void;
    removeCollection(collection: Cesium$EntityCollection): boolean;
    removeAllCollections(): void;
    containsCollection(collection: Cesium$EntityCollection): boolean;
    contains(entity: Cesium$Entity): boolean;
    indexOfCollection(collection: Cesium$EntityCollection): number;
    getCollection(index: number): Cesium$EntityCollection;
    getCollectionsLength(): number;
    raiseCollection(collection: Cesium$EntityCollection): void;
    lowerCollection(collection: Cesium$EntityCollection): void;
    raiseCollectionToTop(collection: Cesium$EntityCollection): void;
    lowerCollectionToBottom(collection: Cesium$EntityCollection): void;
    suspendEvents(): void;
    resumeEvents(): void;
    computeAvailability(): Cesium$TimeInterval;
    getById(id: any): Cesium$Entity;
  }

  declare class Cesium$CompositeMaterialProperty
    mixins Cesium$MaterialProperty {
    intervals: Cesium$TimeIntervalCollection;
  }

  declare class Cesium$CompositePositionProperty {
    isConstant: boolean;
    definitionChanged: Cesium$Event;
    intervals: Cesium$TimeIntervalCollection;
    referenceFrame: Cesium$ReferenceFrame;
    getValue(time: Cesium$JulianDate, result?: any): any;
    getValueInReferenceFrame(
      time: Cesium$JulianDate,
      referenceFrame: Cesium$ReferenceFrame,
      result?: Cesium$Cartesian3
    ): Cesium$Cartesian3;
    equals(other?: Cesium$Property): boolean;
  }

  declare class Cesium$CompositeProperty mixins Cesium$Property {
    intervals: Cesium$TimeIntervalCollection;
  }

  declare class Cesium$ConstantPositionProperty {
    isConstant: boolean;
    definitionChanged: Cesium$Event;
    referenceFrame: Cesium$ReferenceFrame;
    constructor(
      value?: Cesium$Cartesian3,
      referenceFrame?: Cesium$ReferenceFrame
    ): this;
    getValue(time: Cesium$JulianDate, result?: any): any;
    setValue(
      value: Cesium$Cartesian3,
      referenceFrame?: Cesium$ReferenceFrame
    ): void;
    getValueInReferenceFrame(
      time: Cesium$JulianDate,
      referenceFrame: Cesium$ReferenceFrame,
      result?: Cesium$Cartesian3
    ): Cesium$Cartesian3;
    equals(other?: Cesium$Property): boolean;
  }

  declare class Cesium$ConstantProperty mixins Cesium$Property {
    constructor(value?: any): this;
    setValue(value: any): void;
  }

  declare class Cesium$CorridorGeometryUpdater mixins Cesium$GeometryUpdater {
    constructor(entity: Cesium$Entity, scene: Cesium$Scene): this;
  }

  declare class Cesium$CorridorGraphics {
    definitionChanged: Cesium$Event;
    show: Cesium$Property;
    material: Cesium$MaterialProperty;
    positions: Cesium$Property;
    height: Cesium$Property;
    extrudedHeight: Cesium$Property;
    granularity: Cesium$Property;
    width: Cesium$Property;
    fill: Cesium$Property;
    outline: Cesium$Property;
    outlineColor: Cesium$Property;
    outlineWidth: Cesium$Property;
    cornerType: Cesium$Property;
    constructor(options?: {
      positions?: Cesium$Property,
      width?: Cesium$Property,
      cornerType?: Cesium$Property,
      height?: Cesium$Property,
      extrudedHeight?: Cesium$Property,
      show?: Cesium$Property,
      fill?: Cesium$Property,
      material?: Cesium$MaterialProperty,
      outline?: Cesium$Property,
      outlineColor?: Cesium$Property,
      outlineWidth?: Cesium$Property,
      granularity?: Cesium$Property
    }): this;
    clone(result?: Cesium$CorridorGraphics): Cesium$CorridorGraphics;
    merge(source: Cesium$CorridorGraphics): Cesium$CorridorGraphics;
  }

  declare class Cesium$CustomDataSource mixins Cesium$DataSource {
    constructor(name?: string): this;
  }

  declare class Cesium$CylinderGeometryUpdater mixins Cesium$GeometryUpdater {
    constructor(entity: Cesium$Entity, scene: Cesium$Scene): this;
  }

  declare class Cesium$CylinderGraphics {
    definitionChanged: Cesium$Event;
    length: Cesium$Property;
    topRadius: Cesium$Property;
    bottomRadius: Cesium$Property;
    numberOfVerticalLines: Cesium$Property;
    slices: Cesium$Property;
    show: Cesium$Property;
    material: Cesium$MaterialProperty;
    fill: Cesium$Property;
    outline: Cesium$Property;
    outlineColor: Cesium$Property;
    outlineWidth: Cesium$Property;
    constructor(options?: {
      length?: Cesium$Property,
      topRadius?: Cesium$Property,
      bottomRadius?: Cesium$Property,
      show?: Cesium$Property,
      fill?: Cesium$Property,
      material?: Cesium$MaterialProperty,
      outline?: Cesium$Property,
      outlineColor?: Cesium$Property,
      outlineWidth?: Cesium$Property,
      numberOfVerticalLines?: Cesium$Property,
      slices?: Cesium$Property
    }): this;
    clone(result?: Cesium$CylinderGraphics): Cesium$CylinderGraphics;
    merge(source: Cesium$CylinderGraphics): Cesium$CylinderGraphics;
  }

  declare class Cesium$CzmlDataSource mixins Cesium$DataSource {
    static updaters: any[];
    static load(
      czml: Cesium$Resource | string | { [key: string]: any },
      options?: {
        sourceUri?: string
      }
    ): Promise<Cesium$CzmlDataSource>;
    static processMaterialPacketData(
      object: { [key: string]: any },
      propertyName: string,
      packetData: { [key: string]: any },
      interval: Cesium$TimeInterval,
      sourceUri: string,
      entityCollection: Cesium$EntityCollection
    ): void;
    static processPacketData(
      type: () => any,
      object: { [key: string]: any },
      propertyName: string,
      packetData: { [key: string]: any },
      interval: Cesium$TimeInterval,
      sourceUri: string,
      entityCollection: Cesium$EntityCollection
    ): void;
    static processPositionPacketData(
      object: { [key: string]: any },
      propertyName: string,
      packetData: { [key: string]: any },
      interval: Cesium$TimeInterval,
      sourceUri: string,
      entityCollection: Cesium$EntityCollection
    ): void;
    constructor(name?: string): this;
    load(
      czml: Cesium$Resource | string | { [key: string]: any },
      options?: {
        sourceUri?: string
      }
    ): Promise<Cesium$CzmlDataSource>;
    process(
      czml: Cesium$Resource | string | { [key: string]: any },
      options?: {
        sourceUri?: string
      }
    ): Promise<Cesium$CzmlDataSource>;
  }

  declare class Cesium$DataSource {
    changedEvent: Cesium$Event;
    clock: Cesium$DataSourceClock;
    clustering: Cesium$EntityCluster;
    entities: Cesium$EntityCollection;
    errorEvent: Cesium$Event;
    isLoading: boolean;
    loadingEvent: Cesium$Event;
    name: string;
    show: boolean;
    update(time: Cesium$JulianDate): boolean;
  }

  declare class Cesium$DataSourceClock {
    definitionChanged: Cesium$Event;
    startTime: Cesium$JulianDate;
    stopTime: Cesium$JulianDate;
    currentTime: Cesium$JulianDate;
    clockRange: Cesium$ClockRange;
    clockStep: Cesium$ClockStep;
    multiplier: number;
    clone(result?: Cesium$DataSourceClock): Cesium$DataSourceClock;
    equals(other: Cesium$DataSourceClock): boolean;
    merge(source: Cesium$DataSourceClock): Cesium$DataSourceClock;
    getValue(): Cesium$Clock;
  }

  declare class Cesium$DataSourceCollection {
    length: number;
    dataSourceAdded: Cesium$Event;
    dataSourceRemoved: Cesium$Event;
    add(
      dataSource: Cesium$DataSource | Promise<Cesium$DataSource>
    ): Promise<Cesium$DataSource>;
    remove(dataSource: Cesium$DataSource, destroy?: boolean): boolean;
    removeAll(destroy?: boolean): void;
    contains(dataSource: Cesium$DataSource): boolean;
    indexOf(dataSource: Cesium$DataSource): number;
    get(index: number): Cesium$DataSource;
    isDestroyed(): boolean;
    destroy(): void;
  }

  declare class Cesium$DataSourceDisplay {
    scene: Cesium$Scene;
    dataSources: Cesium$DataSourceCollection;
    defaultDataSource: Cesium$CustomDataSource;
    static defaultVisualizersCallback: Cesium$DataSourceDisplay.DataSourceDisplay$VisualizersCallback;
    constructor(options: {
      scene: Cesium$Scene,
      dataSourceCollection: Cesium$DataSourceCollection,
      visualizersCallback?: Cesium$DataSourceDisplay.DataSourceDisplay$VisualizersCallback
    }): this;
    isDestroyed(): boolean;
    destroy(): void;
    update(time: Cesium$JulianDate): boolean;
  }

  declare type DataSourceDisplay$VisualizersCallback = (
    scene: Cesium$Scene,
    dataSource: Cesium$DataSource
  ) => Cesium$Visualizer[];

  declare class Cesium$DynamicGeometryUpdater {
    update(time: Cesium$JulianDate): void;
    isDestroyed(): boolean;
    destroy(): void;
  }

  declare class Cesium$EllipseGeometryUpdater mixins Cesium$GeometryUpdater {
    onTerrain: boolean;
    constructor(entity: Cesium$Entity, scene: Cesium$Scene): this;
  }

  declare class Cesium$EllipseGraphics {
    definitionChanged: Cesium$Event;
    semiMajorAxis: Cesium$Property;
    semiMinorAxis: Cesium$Property;
    rotation: Cesium$Property;
    show: Cesium$Property;
    material: Cesium$MaterialProperty | Cesium$Color;
    height: Cesium$Property;
    extrudedHeight: Cesium$Property;
    granularity: Cesium$Property;
    stRotation: Cesium$Property;
    fill: boolean;
    outline: boolean;
    outlineColor: Cesium$Color;
    outlineWidth: number;
    numberOfVerticalLines: Cesium$Property;
    constructor(options?: {
      semiMajorAxis?: number,
      semiMinorAxis?: number,
      height?: Cesium$Property,
      extrudedHeight?: Cesium$Property,
      show?: Cesium$Property,
      fill?: boolean,
      material?: Cesium$MaterialProperty | Cesium$Color,
      outline?: boolean,
      outlineColor?: Cesium$Color,
      outlineWidth?: number,
      numberOfVerticalLines?: Cesium$Property,
      rotation?: Cesium$Property,
      stRotation?: Cesium$Property,
      granularity?: Cesium$Property
    }): this;
    clone(result?: Cesium$EllipseGraphics): Cesium$EllipseGraphics;
    merge(source: Cesium$EllipseGraphics): Cesium$EllipseGraphics;
  }

  declare class Cesium$EllipsoidGeometryUpdater mixins Cesium$GeometryUpdater {
    constructor(entity: Cesium$Entity, scene: Cesium$Scene): this;
    createFillGeometryInstance(
      time: Cesium$JulianDate,
      skipModelMatrix?: boolean,
      modelMatrixResult?: Cesium$Matrix4
    ): Cesium$GeometryInstance;
    createOutlineGeometryInstance(
      time: Cesium$JulianDate,
      skipModelMatrix?: boolean,
      modelMatrixResult?: Cesium$Matrix4
    ): Cesium$GeometryInstance;
  }

  declare class Cesium$EllipsoidGraphics {
    definitionChanged: Cesium$Event;
    show: Cesium$Property;
    radii: Cesium$Property;
    material: Cesium$MaterialProperty;
    fill: Cesium$Property;
    outline: Cesium$Property;
    outlineColor: Cesium$Property;
    outlineWidth: Cesium$Property;
    stackPartitions: Cesium$Property;
    slicePartitions: Cesium$Property;
    subdivisions: Cesium$Property;
    constructor(options?: {
      radii?: Cesium$Property,
      show?: Cesium$Property,
      fill?: Cesium$Property,
      material?: Cesium$MaterialProperty,
      outline?: Cesium$Property,
      outlineColor?: Cesium$Property,
      outlineWidth?: Cesium$Property,
      subdivisions?: Cesium$Property,
      stackPartitions?: Cesium$Property,
      slicePartitions?: Cesium$Property
    }): this;
    clone(result?: Cesium$EllipsoidGraphics): Cesium$EllipsoidGraphics;
    merge(source: Cesium$EllipsoidGraphics): Cesium$EllipsoidGraphics;
  }

  declare class Cesium$Entity {
    availability: Cesium$TimeIntervalCollection;
    billboard: Cesium$BillboardGraphics;
    box: Cesium$BoxGraphics;
    corridor: Cesium$CorridorGraphics;
    cylinder: Cesium$CylinderGraphics;
    definitionChanged: Cesium$Event;
    description: Cesium$Property;
    ellipse: Cesium$EllipseGraphics;
    ellipsoid: Cesium$EllipsoidGraphics;
    entityCollection: Cesium$EntityCollection;
    id: string;
    isShowing: boolean;
    label: Cesium$LabelGraphics;
    model: Cesium$ModelGraphics;
    name: string;
    orientation: Cesium$Property;
    parent: Cesium$Entity;
    path: Cesium$PathGraphics;
    plane: any;
    point: Cesium$PointGraphics;
    polygon: Cesium$PolygonGraphics;
    polyline: Cesium$PolylineGraphics;
    polylineVolume: Cesium$PolylineVolumeGraphics;
    position: Cesium$PositionProperty;
    properties: any;
    propertyNames: any[];
    rectangle: Cesium$RectangleGraphics;
    show: boolean;
    viewFrom: Cesium$Property;
    wall: Cesium$WallGraphics;
    constructor(options?: {
      id?: string,
      name?: string,
      availability?: Cesium$TimeIntervalCollection,
      show?: boolean,
      description?: Cesium$Property,
      position?: Cesium$PositionProperty,
      orientation?: Cesium$Property,
      viewFrom?: Cesium$Property,
      parent?: Cesium$Entity,
      billboard?: Cesium$BillboardGraphics,
      box?: Cesium$BoxGraphics,
      corridor?: Cesium$CorridorGraphics,
      cylinder?: Cesium$CylinderGraphics,
      ellipse?: Cesium$EllipseGraphics,
      ellipsoid?: Cesium$EllipsoidGraphics,
      label?: Cesium$LabelGraphics,
      model?: Cesium$ModelGraphics,
      path?: Cesium$PathGraphics,
      plane?: any,
      point?: Cesium$PointGraphics,
      polygon?: Cesium$PolygonGraphics,
      polyline?: Cesium$PolylineGraphics,
      polylineVolume?: Cesium$PolylineVolumeGraphics,
      rectangle?: Cesium$RectangleGraphics,
      wall?: Cesium$WallGraphics
    }): this;
    addProperty(propertyName: string): void;
    computeModelMatrix(
      time: Cesium$JulianDate,
      result?: Cesium$Matrix4
    ): Cesium$Matrix4;
    isAvailable(time: Cesium$JulianDate): boolean;
    merge(source: Cesium$Entity): Cesium$Entity;
    removeProperty(propertyName: string): void;
  }

  declare class Cesium$EntityCluster {
    clusterBillboards: boolean;
    clusterEvent: Cesium$Event;
    clusterLabels: boolean;
    clusterPoints: boolean;
    enabled: boolean;
    minimumClusterSize: number;
    pixelRange: number;
    constructor(options?: {
      enabled?: boolean,
      pixelRange?: number,
      minimumClusterSize?: number,
      clusterBillboards?: boolean,
      clusterLabels?: boolean,
      clusterPoints?: boolean
    }): this;
    destroy(): void;
  }

  declare class Cesium$EntityCollection {
    collectionChanged: Cesium$Event;
    id: string;
    owner: Cesium$DataSource | Cesium$CompositeEntityCollection;
    show: boolean;
    values: Cesium$Entity[];
    static collectionChangedEventCallback(
      collection: Cesium$EntityCollection,
      added: Cesium$Entity[],
      removed: Cesium$Entity[],
      changed: Cesium$Entity[]
    ): void;
    constructor(
      owner: Cesium$DataSource | Cesium$CompositeEntityCollection
    ): this;
    add(entity: Cesium$Entity): Cesium$Entity;
    computeAvailability(): Cesium$TimeInterval;
    contains(entity: Cesium$Entity): boolean;
    getById(id: string): Cesium$Entity;
    getOrCreateEntity(id: string): Cesium$Entity;
    remove(entity: Cesium$Entity): boolean;
    removeAll(): void;
    removeById(id: string): boolean;
    resumeEvents(): void;
    suspendEvents(): void;
  }

  declare class Cesium$EntityView {
    entity: Cesium$Entity;
    scene: Cesium$Scene;
    ellipsoid: Cesium$Ellipsoid;
    boundingSphere: Cesium$Entity;
    static defaultOffset3D: Cesium$Cartesian3;
    constructor(
      entity: Cesium$Entity,
      scene: Cesium$Scene,
      ellipsoid?: Cesium$Ellipsoid,
      boundingSphere?: Cesium$BoundingSphere
    ): this;
    update(time: Cesium$JulianDate): void;
  }

  declare class Cesium$GeoJsonDataSource mixins Cesium$DataSource {
    static clampToGround: boolean;
    static crsLinkHrefs: any;
    static crsLinkTypes: any;
    static crsNames: any;
    static fill: Cesium$Color;
    static markerColor: Cesium$Color;
    static markerSize: number;
    static markerSymbol: string;
    static stroke: Cesium$Color;
    static strokeWidth: number;
    static load(
      data: Cesium$Resource | string | { [key: string]: any },
      options?: {
        sourceUri?: string,
        markerSize?: number,
        markerSymbol?: string,
        markerColor?: Cesium$Color,
        stroke?: Cesium$Color,
        strokeWidth?: number,
        fill?: Cesium$Color,
        clampToGround?: boolean
      }
    ): Promise<Cesium$GeoJsonDataSource>;
    constructor(name?: string): this;
    load(
      data: Cesium$Resource | string | { [key: string]: any },
      options?: {
        sourceUri?: string,
        markerSize?: number,
        markerSymbol?: string,
        markerColor?: Cesium$Color,
        stroke?: Cesium$Color,
        strokeWidth?: number,
        fill?: Cesium$Color,
        clampToGround?: boolean
      }
    ): Promise<Cesium$GeoJsonDataSource>;
  }

  declare class Cesium$GeometryUpdater {
    classificationTypeProperty: Cesium$Property;
    readonlydistanceDisplayConditionProperty: Cesium$Property;
    entity: Cesium$Entity;
    fillEnabled: boolean;
    fillMaterialProperty: Cesium$MaterialProperty;
    geometryChanged: boolean;
    hasConstantFill: boolean;
    hasConstantOutline: boolean;
    id: string;
    isClosed: boolean;
    isDynamic: boolean;
    outlineColorProperty: Cesium$Property;
    outlineEnabled: boolean;
    outlineWidth: number;
    shadowsProperty: Cesium$Property;
    constructor(options: {
      entity: Cesium$Entity,
      scene: Cesium$Scene,
      geometryOptions: any,
      geometryPropertyName: string,
      observedPropertyNames: string[]
    }): this;
    createDynamicUpdater(
      primitives: Cesium$PrimitiveCollection,
      groundPrimitives: Cesium$PrimitiveCollection
    ): Cesium$DynamicGeometryUpdater;
    destroy(): void;
    isDestroyed(): boolean;
    isFilled(time: Cesium$JulianDate): boolean;
    isOutlineVisible(time: Cesium$JulianDate): boolean;
    createFillGeometryInstance(
      time: Cesium$JulianDate
    ): Cesium$GeometryInstance;
    createOutlineGeometryInstance(
      time: Cesium$JulianDate
    ): Cesium$GeometryInstance;
  }

  declare class Cesium$GeometryVisualizer mixins Cesium$Visualizer {
    constructor(
      scene: Cesium$Scene,
      entityCollection: Cesium$EntityCollection,
      primitives?: Cesium$PrimitiveCollection,
      groundPrimitives?: Cesium$PrimitiveCollection
    ): this;
  }

  declare class Cesium$GridMaterialProperty mixins Cesium$MaterialProperty {
    color: Cesium$Color;
    cellAlpha: Cesium$Property;
    lineCount: Cesium$Property;
    lineThickness: Cesium$Property;
    lineOffset: Cesium$Property;
    constructor(options?: {
      color?: Cesium$Property,
      cellAlpha?: Cesium$Property,
      lineCount?: Cesium$Property,
      lineThickness?: Cesium$Property,
      lineOffset?: Cesium$Property
    }): this;
  }

  declare class Cesium$ImageMaterialProperty mixins Cesium$MaterialProperty {
    image: Cesium$Property;
    repeat: Cesium$Property;
    constructor(options?: {
      image?: Cesium$Property,
      repeat?: Cesium$Property
    }): this;
  }

  declare class Cesium$KmlDataSource mixins Cesium$DataSource {
    refreshEvent: Cesium$Event;
    unsupportedNodeEvent: Cesium$Event;
    constructor(options?: {
      camera?: Cesium$Camera,
      canvas?: HTMLCanvasElement,
      ellipsoid?: Cesium$Ellipsoid
    }): this;
    static load(
      data: Cesium$Resource | string | Document | Blob,
      options?: {
        camera: Cesium$Camera,
        canvas: HTMLCanvasElement,
        sourceUri?: string,
        clampToGround?: boolean,
        ellipsoid?: Cesium$Ellipsoid
      }
    ): Promise<Cesium$KmlDataSource>;
    load(
      data: Cesium$Resource | string | Document | Blob,
      options?: {
        sourceUri?: string,
        clampToGround?: boolean,
        ellipsoid?: Cesium$Ellipsoid
      }
    ): Promise<Cesium$KmlDataSource>;
  }

  declare class Cesium$KmlFeatureData {
    author: {
      name: string,
      uri: string,
      email: string
    };
    link: {
      href: string,
      hreflang: string,
      rel: string,
      type: string,
      title: string,
      length: string
    };
    address: string;
    phoneNumber: string;
    snippet: string;
    extendedData: string;
  }

  declare class Cesium$LabelGraphics {
    definitionChanged: Cesium$Event;
    text: Cesium$Property;
    font: string;
    style: Cesium$Property;
    fillColor: Cesium$Color;
    outlineColor: Cesium$Color;
    outlineWidth: number;
    horizontalOrigin: Cesium$Property;
    verticalOrigin: Cesium$Property;
    eyeOffset: Cesium$Property;
    pixelOffset: Cesium$Property;
    scale: Cesium$Property;
    show: Cesium$Property;
    translucencyByDistance: Cesium$Property;
    pixelOffsetScaleByDistance: Cesium$Property;
    constructor(options?: {
      text?: Cesium$Property,
      font?: string,
      style?: Cesium$Property,
      fillColor?: Cesium$Color,
      outlineColor?: Cesium$Color,
      outlineWidth?: number,
      show?: Cesium$Property,
      scale?: Cesium$Property,
      horizontalOrigin?: Cesium$Property,
      verticalOrigin?: Cesium$Property,
      eyeOffset?: Cesium$Property,
      pixelOffset?: Cesium$Property,
      translucencyByDistance?: Cesium$Property,
      pixelOffsetScaleByDistance?: Cesium$Property
    }): this;
    clone(result?: Cesium$LabelGraphics): Cesium$LabelGraphics;
    merge(source: Cesium$LabelGraphics): Cesium$LabelGraphics;
  }

  declare class Cesium$LabelVisualizer mixins Cesium$Visualizer {
    constructor(
      entityCluster: Cesium$EntityCluster,
      entityCollection: Cesium$EntityCollection
    ): this;
  }

  declare class Cesium$MaterialProperty mixins Cesium$Property {
    getType(time: Cesium$JulianDate): string;
  }

  declare class Cesium$ModelGraphics {
    clampAnimations: Cesium$Property | boolean;
    clippingPlanes: Cesium$Property;
    color: Cesium$Property;
    colorBlendAmount: Cesium$Property | number;
    colorBlendMode: Cesium$Property;
    definitionChanged: Cesium$Event;
    distanceDisplayCondition: Cesium$Property;
    heightReference: Cesium$Property;
    incrementallyLoadTextures: Cesium$Property | boolean;
    maximumScale: Cesium$Property | number;
    minimumScale: Cesium$Property | number;
    minimumPixelSize: Cesium$Property | number;
    nodeTransformations: any;
    runAnimations: Cesium$Property | boolean;
    scale: Cesium$Property | number;
    shadows: Cesium$Property;
    show: Cesium$Property | boolean;
    silhouetteColor: Cesium$Property;
    silhouetteSize: Cesium$Property | number;
    uri: Cesium$Property | string;
    constructor(options?: {
      uri?: Cesium$Property | string,
      show?: Cesium$Property | boolean,
      scale?: Cesium$Property | number,
      minimumPixelSize?: Cesium$Property | number,
      maximumScale?: Cesium$Property | number,
      incrementallyLoadTextures?: Cesium$Property | boolean,
      runAnimations?: Cesium$Property | boolean,
      clampAnimations?: Cesium$Property | boolean,
      nodeTransformations?: Cesium$Property,
      shadows?: Cesium$Property,
      heightReference?: Cesium$Property,
      distanceDisplayCondition?: Cesium$Property,
      silhouetteColor?: Cesium$Property,
      silhouetteSize?: Cesium$Property | number,
      color?: Cesium$Property,
      colorBlendMode?: Cesium$Property,
      colorBlendAmount?: Cesium$Property | number,
      clippingPlanes?: Cesium$Property
    }): this;
    clone(result?: Cesium$ModelGraphics): Cesium$ModelGraphics;
    merge(source: Cesium$ModelGraphics): Cesium$ModelGraphics;
  }

  declare class Cesium$ModelVisualizer mixins Cesium$Visualizer {
    constructor(
      scene: Cesium$Scene,
      entityCollection: Cesium$EntityCollection
    ): this;
  }

  declare class Cesium$PathGraphics {
    definitionChanged: Cesium$Event;
    distanceDisplayCondition: Cesium$Property;
    leadTime: Cesium$Property | number;
    material: Cesium$MaterialProperty;
    resolution: Cesium$Property | number;
    trailTime: Cesium$Property | number;
    show: Cesium$Property | boolean;
    width: Cesium$Property | number;
    constructor(options?: {
      leadTime?: Cesium$Property | number,
      trailTime?: Cesium$Property | number,
      show?: Cesium$Property | boolean,
      width?: Cesium$Property | number,
      material?: Cesium$MaterialProperty,
      resolution?: Cesium$Property | number,
      distanceDisplayCondition?: Cesium$Property
    }): this;
    clone(result?: Cesium$PathGraphics): Cesium$PathGraphics;
    merge(source: Cesium$PathGraphics): Cesium$PathGraphics;
  }

  declare class Cesium$PathVisualizer mixins Cesium$Visualizer {
    constructor(
      scene: Cesium$Scene,
      entityCollection: Cesium$EntityCollection
    ): this;
  }

  declare class Cesium$PointGraphics {
    color: Cesium$Property;
    definitionChanged: Cesium$Event;
    disableDepthTestDistance: Cesium$Property;
    distanceDisplayCondition: Cesium$Property;
    heightReference: Cesium$Property;
    outlineColor: Cesium$Property;
    outlineWidth: Cesium$Property;
    pixelSize: Cesium$Property;
    scaleByDistance: Cesium$Property;
    show: Cesium$Property;
    translucencyByDistance: Cesium$Property;
    constructor(options?: {
      color?: Cesium$Color,
      pixelSize?: number,
      outlineColor?: Cesium$Color,
      outlineWidth?: number,
      show?: boolean,
      scaleByDistance?: Cesium$Property,
      translucencyByDistance?: Cesium$Property,
      heightReference?: Cesium$HeightReference,
      distanceDisplayCondition?: Cesium$Property,
      disableDepthTestDistance?: Cesium$Property
    }): this;
    clone(result?: Cesium$PointGraphics): Cesium$PointGraphics;
    merge(source: Cesium$PointGraphics): Cesium$PointGraphics;
  }

  declare class Cesium$PointVisualizer mixins Cesium$Visualizer {
    constructor(
      entityCluster: Cesium$EntityCluster,
      entityCollection: Cesium$EntityCollection
    ): this;
  }

  declare class Cesium$PolygonGeometryUpdater mixins Cesium$GeometryUpdater {
    constructor(entity: Cesium$Entity, scene: Cesium$Scene): this;
  }

  declare class Cesium$PolygonGraphics {
    definitionChanged: Cesium$Event;
    show: Cesium$Property;
    material: Cesium$MaterialProperty | Cesium$Color;
    positions: Cesium$Property;
    hierarchy: Cesium$Property;
    height: Cesium$Property;
    extrudedHeight: Cesium$Property;
    granularity: Cesium$Property;
    stRotation: Cesium$Property;
    fill: boolean;
    outline: Cesium$Property;
    outlineColor: Cesium$Color;
    outlineWidth: Cesium$Property;
    perPositionHeight: Cesium$Property;
    constructor(options?: {
      hierarchy?: Cesium$Property,
      height?: number,
      extrudedHeight?: Cesium$Property,
      show?: Cesium$Property,
      fill?: boolean,
      material?: Cesium$MaterialProperty | Cesium$Color,
      outline?: boolean,
      outlineColor?: Cesium$Color,
      outlineWidth?: number,
      stRotation?: Cesium$Property,
      granularity?: Cesium$Property,
      perPositionHeight?: Cesium$Property
    }): this;
    clone(result?: Cesium$PolygonGraphics): Cesium$PolygonGraphics;
    merge(source: Cesium$PolygonGraphics): Cesium$PolygonGraphics;
  }

  declare class Cesium$PolylineArrowMaterialProperty
    mixins Cesium$MaterialProperty {
    color: Cesium$Property;
    constructor(color?: Cesium$Property): this;
  }

  declare class Cesium$PolylineGeometryUpdater mixins Cesium$GeometryUpdater {
    depthFailMaterialProperty: Cesium$MaterialProperty;
    distanceDisplayConditionProperty: Cesium$Property;
    constructor(entity: Cesium$Entity, scene: Cesium$Scene): this;
  }

  declare class Cesium$PolylineGlowMaterialProperty
    mixins Cesium$MaterialProperty {
    color: Cesium$Color;
    glowPower: Cesium$Property;
    constructor(options?: {
      color?: Cesium$Property,
      glowPower?: Cesium$Property
    }): this;
  }

  declare class Cesium$PolylineGraphics {
    definitionChanged: Cesium$Event;
    show: Cesium$Property;
    material: Cesium$MaterialProperty;
    positions: Cesium$Property;
    width: number;
    followSurface: Cesium$Property;
    granularity: Cesium$Property;
    constructor(options?: {
      positions?: Cesium$Cartesian3[],
      followSurface?: Cesium$Property,
      width?: number,
      show?: Cesium$Property,
      material?: Cesium$MaterialProperty,
      granularity?: Cesium$Property
    }): this;
    clone(result?: Cesium$PolylineGraphics): Cesium$PolylineGraphics;
    merge(source: Cesium$PolylineGraphics): Cesium$PolylineGraphics;
  }

  declare class Cesium$PolylineOutlineMaterialProperty
    mixins Cesium$MaterialProperty {
    color: Cesium$Color;
    outlineColor: Cesium$Color;
    outlineWidth: Cesium$Property;
    constructor(options?: {
      color?: Cesium$Property,
      outlineColor?: Cesium$Property,
      outlineWidth?: Cesium$Property
    }): this;
  }

  declare class Cesium$PolylineVolumeGeometryUpdater
    mixins Cesium$GeometryUpdater {
    constructor(entity: Cesium$Entity, scene: Cesium$Scene): this;
  }

  declare class Cesium$PolylineVolumeGraphics {
    definitionChanged: Cesium$Event;
    show: Cesium$Property;
    material: Cesium$MaterialProperty;
    positions: Cesium$Property;
    shape: Cesium$Property;
    granularity: Cesium$Property;
    fill: Cesium$Property;
    outline: Cesium$Property;
    outlineColor: Cesium$Property;
    outlineWidth: Cesium$Property;
    cornerType: Cesium$Property;
    constructor(options?: {
      positions?: Cesium$Property,
      shape?: Cesium$Property,
      cornerType?: Cesium$Property,
      show?: Cesium$Property,
      fill?: Cesium$Property,
      material?: Cesium$MaterialProperty,
      outline?: Cesium$Property,
      outlineColor?: Cesium$Property,
      outlineWidth?: Cesium$Property,
      granularity?: Cesium$Property
    }): this;
    clone(
      result?: Cesium$PolylineVolumeGraphics
    ): Cesium$PolylineVolumeGraphics;
    merge(source: Cesium$PolylineVolumeGraphics): Cesium$PolylineVolumeGraphics;
  }

  declare class Cesium$PositionProperty mixins Cesium$Property {
    referenceFrame: Cesium$ReferenceFrame;
    getValueInReferenceFrame(
      time: Cesium$JulianDate,
      referenceFrame: Cesium$ReferenceFrame,
      result?: Cesium$Cartesian3
    ): Cesium$Cartesian3;
  }

  declare class Cesium$PositionPropertyArray mixins Cesium$PositionProperty {
    constructor(value?: Cesium$Property[]): this;
    getValue(
      time?: Cesium$JulianDate,
      result?: Cesium$Cartesian3[]
    ): Cesium$Cartesian3[];
    setValue(value: Cesium$Property[]): void;
  }

  declare class Cesium$Property {
    isConstant: boolean;
    definitionChanged: Cesium$Event;
    getValue(time: Cesium$JulianDate, result?: any): any;
    equals(other?: Cesium$Property): boolean;
  }

  declare class Cesium$PropertyArray mixins Cesium$Property {
    constructor(value?: Cesium$Property[]): this;
    getValue(time?: Cesium$JulianDate, result?: any[]): any[];
    setValue(value: Cesium$Property[]): void;
  }

  declare class Cesium$RectangleGeometryUpdater mixins Cesium$GeometryUpdater {
    constructor(entity: Cesium$Entity, scene: Cesium$Scene): this;
  }

  declare class Cesium$RectangleGraphics {
    definitionChanged: Cesium$Event;
    show: Cesium$Property;
    coordinates: Cesium$Property;
    material: Cesium$MaterialProperty;
    height: Cesium$Property;
    extrudedHeight: Cesium$Property;
    granularity: Cesium$Property;
    stRotation: Cesium$Property;
    rotation: Cesium$Property;
    fill: Cesium$Property;
    outline: Cesium$Property;
    outlineColor: Cesium$Property;
    outlineWidth: Cesium$Property;
    closeTop: Cesium$Property;
    closeBottom: Cesium$Property;
    constructor(options?: {
      coordinates?: Cesium$Property,
      height?: Cesium$Property,
      extrudedHeight?: Cesium$Property,
      closeTop?: Cesium$Property,
      closeBottom?: Cesium$Property,
      show?: Cesium$Property,
      fill?: Cesium$Property,
      material?: Cesium$MaterialProperty,
      outline?: Cesium$Property,
      outlineColor?: Cesium$Property,
      outlineWidth?: Cesium$Property,
      rotation?: Cesium$Property,
      stRotation?: Cesium$Property,
      granularity?: Cesium$Property
    }): this;
    clone(result?: Cesium$RectangleGraphics): Cesium$RectangleGraphics;
    merge(source: Cesium$RectangleGraphics): Cesium$RectangleGraphics;
  }

  declare class Cesium$ReferenceProperty mixins Cesium$Property {
    referenceFrame: Cesium$ReferenceFrame;
    targetId: string;
    targetCollection: Cesium$EntityCollection;
    targetPropertyNames: string[];
    resolvedProperty: Cesium$Property;
    constructor(
      targetCollection: Cesium$EntityCollection,
      targetId: string,
      targetPropertyNames: string
    ): this;
    getValueInReferenceFrame(
      time: Cesium$JulianDate,
      referenceFrame: Cesium$ReferenceFrame,
      result?: Cesium$Cartesian3
    ): Cesium$Cartesian3;
    getType(time: Cesium$JulianDate): string;
    static fromString(
      targetCollection: Cesium$Entity,
      referenceString: string
    ): Cesium$ReferenceProperty;
  }

  declare class Cesium$SampledPositionProperty mixins Cesium$SampledProperty {
    numberOfDerivatives: boolean;
    constructor(
      referenceFrame?: Cesium$ReferenceFrame,
      numberOfDerivatives?: number
    ): this;
    addSample(
      time: Cesium$JulianDate,
      position: Cesium$Cartesian3,
      derivatives?: Cesium$Cartesian3[]
    ): void;
    addSamples(
      times: Cesium$JulianDate[],
      positions: Cesium$Cartesian3[],
      derivatives?: any[][]
    ): void;
    addSamplesPackedArray(
      packedSamples: number[],
      epoch?: Cesium$JulianDate
    ): void;
  }

  declare class Cesium$SampledProperty mixins Cesium$PositionProperty {
    type: any;
    derivativeTypes: Cesium$Packable[];
    interpolationDegree: number;
    interpolationAlgorithm: Cesium$InterpolationAlgorithm;
    forwardExtrapolationType: Cesium$ExtrapolationType;
    forwardExtrapolationDuration: number;
    backwardExtrapolationType: Cesium$ExtrapolationType;
    backwardExtrapolationDuration: number;
    constructor(
      type: number | Cesium$Packable,
      derivativeTypes?: Cesium$Packable[]
    ): this;
    setInterpolationOptions(options?: {
      interpolationAlgorithm?: Cesium$InterpolationAlgorithm,
      interpolationDegree?: number
    }): void;
    addSample(
      time: Cesium$JulianDate,
      value: Cesium$Packable,
      derivatives?: Cesium$Packable[]
    ): void;
    addSamples(
      times: Cesium$JulianDate[],
      values: Cesium$Packable[],
      derivativeValues?: any[][]
    ): void;
    addSamplesPackedArray(
      packedSamples: number[],
      epoch?: Cesium$JulianDate
    ): void;
  }

  declare class Cesium$StripeMaterialProperty mixins Cesium$MaterialProperty {
    orientation: Cesium$Property;
    evenColor: Cesium$Color;
    oddColor: Cesium$Color;
    offset: Cesium$Property;
    repeat: number;
    constructor(options?: {
      evenColor?: Cesium$Property,
      oddColor?: Cesium$Property,
      repeat?: Cesium$Property,
      offset?: Cesium$Property,
      orientation?: Cesium$Property
    }): this;
  }

  declare class Cesium$TimeIntervalCollectionPositionProperty
    mixins Cesium$PositionProperty {
    intervals: Cesium$TimeIntervalCollection;
    constructor(referenceFrame?: Cesium$ReferenceFrame): this;
  }

  declare class Cesium$TimeIntervalCollectionProperty mixins Cesium$Property {
    intervals: Cesium$TimeIntervalCollection;
  }

  declare class Cesium$VelocityOrientationProperty mixins Cesium$Property {
    position: Cesium$Property;
    ellipsoid: Cesium$Property;
    constructor(position?: Cesium$Property, ellipsoid?: Cesium$Ellipsoid): this;
    getValue(
      time?: Cesium$JulianDate,
      result?: Cesium$Quaternion
    ): Cesium$Quaternion;
  }

  declare class Cesium$Visualizer {
    update(time: Cesium$JulianDate): boolean;
    isDestroyed(): boolean;
    destroy(): void;
  }

  declare class Cesium$WallGeometryUpdater mixins Cesium$GeometryUpdater {
    constructor(entity: Cesium$Entity, scene: Cesium$Scene): this;
  }

  declare class Cesium$WallGraphics {
    definitionChanged: Cesium$Event;
    show: Cesium$Property;
    material: Cesium$MaterialProperty;
    positions: Cesium$Property;
    minimumHeights: Cesium$Property;
    maximumHeights: Cesium$Property;
    granularity: Cesium$Property;
    fill: Cesium$Property;
    outline: Cesium$Property;
    outlineColor: Cesium$Property;
    outlineWidth: Cesium$Property;
    constructor(options?: {
      positions?: Cesium$Property,
      maximumHeights?: Cesium$Property,
      minimumHeights?: Cesium$Property,
      show?: Cesium$Property,
      fill?: Cesium$Property,
      material?: Cesium$MaterialProperty,
      outline?: Cesium$Property,
      outlineColor?: Cesium$Property,
      outlineWidth?: Cesium$Property,
      granularity?: Cesium$Property
    }): this;
    clone(result?: Cesium$WallGraphics): Cesium$WallGraphics;
    merge(source: Cesium$WallGraphics): Cesium$WallGraphics;
  }

  declare class Cesium$Appearance {
    closed: boolean;
    fragmentShaderSource: string;
    material: Cesium$Material;
    renderState: any;
    translucent: boolean;
    vertexShaderSource: string;
    constructor(options?: {
      translucent?: boolean,
      closed?: boolean,
      material?: Cesium$Material,
      vertexShaderSource?: string,
      fragmentShaderSource?: string,
      renderState?: Cesium$RenderState
    }): this;
    getFragmentShaderSource(): string;
    isTranslucent(): boolean;
    getRenderState(): any;
  }

  declare class Cesium$ArcGisMapServerImageryProvider
    mixins Cesium$ImageryProvider {
    url: string;
    usingPrecachedTiles: boolean;
    constructor(
      options: {
        url: string,
        tileDiscardPolicy?: Cesium$TileDiscardPolicy,
        proxy?: Cesium$Proxy,
        usePreCachedTilesIfAvailable?: boolean,
        enablePickFeatures?: boolean,
        rectangle?: Cesium$Rectangle,
        tilingScheme?: Cesium$TilingScheme,
        ellipsoid?: Cesium$Ellipsoid,
        tileWidth?: number,
        tileHeight?: number,
        maximumLevel?: number
      },
      layers?: string
    ): this;
  }

  declare class Cesium$DistanceDisplayCondition mixins Cesium$Packable {
    far: number;
    near: number;
    constructor(near: number, far: number): this;
    static clone(
      value?: Cesium$DistanceDisplayCondition,
      result?: Cesium$DistanceDisplayCondition
    ): Cesium$DistanceDisplayCondition;
    static equals(
      left: Cesium$DistanceDisplayCondition,
      right: Cesium$DistanceDisplayCondition
    ): boolean;
    static pack(
      value: Cesium$DistanceDisplayCondition,
      array: number[],
      startingIndex: number
    ): number[];
    static unpack(
      array: number[],
      startingIndex: number,
      result: Cesium$DistanceDisplayCondition
    ): Cesium$DistanceDisplayCondition;
    clone(
      result: Cesium$DistanceDisplayCondition
    ): Cesium$DistanceDisplayCondition;
    equals(other: Cesium$DistanceDisplayCondition): boolean;
  }

  declare class Cesium$Billboard {
    alignedAxis: Cesium$Cartesian3;
    color: Cesium$Color;
    disableDepthTestDistance: number;
    distanceDisplayCondition: Cesium$DistanceDisplayCondition;
    eyeOffset: Cesium$Cartesian3;
    height: number;
    heightReference: Cesium$HeightReference;
    horizontalOrigin: Cesium$HorizontalOrigin;
    id: any;
    image: string;
    pixelOffset: Cesium$Cartesian2;
    pixelOffsetScaleByDistance: Cesium$NearFarScalar;
    position: Cesium$Cartesian3;
    ready: boolean;
    rotation: number;
    scale: number;
    scaleByDistance: Cesium$NearFarScalar;
    show: boolean;
    sizeInMeters: boolean;
    translucencyByDistance: Cesium$NearFarScalar;
    verticalOrigin: Cesium$VerticalOrigin;
    width: number;
    computeScreenSpacePosition(
      scene: Cesium$Scene,
      result?: Cesium$Cartesian2
    ): Cesium$Cartesian2;
    equals(other: Cesium$Billboard): boolean;
    setImage(
      id: string,
      image:
        | HTMLImageElement
        | HTMLCanvasElement
        | string
        | Cesium$Billboard.Billboard$CreateImageCallback
    ): void;
    setImageSubRegion(id: string, subRegion: Cesium$BoundingRectangle): void;
  }

  declare type Billboard$CreateImageCallback = (
    id: string
  ) =>
    | HTMLImageElement
    | HTMLCanvasElement
    | Promise<HTMLImageElement | HTMLCanvasElement>;

  declare class Cesium$BillboardCollection {
    blendOption: Cesium$BlendOption;
    debugShowBoundingVolume: boolean;
    length: number;
    modelMatrix: Cesium$Matrix4;
    constructor(options?: {
      modelMatrix?: Cesium$Matrix4,
      debugShowBoundingVolume?: boolean,
      scene?: Cesium$Scene,
      blendOption?: Cesium$BlendOption
    }): this;
    add(billboard?: any): Cesium$Billboard;
    contains(billboard?: Cesium$Billboard): boolean;
    destroy(): void;
    get(index: number): Cesium$Billboard;
    isDestroyed(): boolean;
    remove(billboard: Cesium$Billboard): boolean;
    removeAll(): void;
    update(): void;
  }

  declare class Cesium$BingMapsImageryProvider mixins Cesium$ImageryProvider {
    url: string;
    key: string;
    mapStyle: Cesium$BingMapsStyle;
    culture: string;
    constructor(options: {
      url: string,
      key?: string,
      tileProtocol?: string,
      mapStyle?: string,
      culture?: string,
      ellipsoid?: Cesium$Ellipsoid,
      tileDiscardPolicy?: Cesium$TileDiscardPolicy,
      proxy?: Cesium$Proxy
    }): this;
    static tileXYToQuadKey(x: number, y: number, level: number): string;
    static quadKeyToTileXY(
      quadkey: string
    ): {
      x: number,
      y: number,
      level: number
    };
  }

  declare class Cesium$EasingFunction {
    static BACK_IN: Cesium$EasingFunction.CallbackProperty$Callback;
    static BACK_IN_OUT: Cesium$EasingFunction.CallbackProperty$Callback;
    static BACK_OUT: Cesium$EasingFunction.CallbackProperty$Callback;
    static BOUNCE_IN: Cesium$EasingFunction.CallbackProperty$Callback;
    static BOUNCE_IN_OUT: Cesium$EasingFunction.CallbackProperty$Callback;
    static BOUNCE_OUT: Cesium$EasingFunction.CallbackProperty$Callback;
    static CIRCULAR_IN: Cesium$EasingFunction.CallbackProperty$Callback;
    static CIRCULAR_IN_OUT: Cesium$EasingFunction.CallbackProperty$Callback;
    static CIRCULAR_OUT: Cesium$EasingFunction.CallbackProperty$Callback;
    static CUBIC_IN: Cesium$EasingFunction.CallbackProperty$Callback;
    static CUBIC_IN_OUT: Cesium$EasingFunction.CallbackProperty$Callback;
    static CUBIR_OUT: Cesium$EasingFunction.CallbackProperty$Callback;
    static ELASTIC_IN: Cesium$EasingFunction.CallbackProperty$Callback;
    static ELASTIC_IN_OUT: Cesium$EasingFunction.CallbackProperty$Callback;
    static ELASTIC_OUT: Cesium$EasingFunction.CallbackProperty$Callback;
    static EXPONENTIAL_IN: Cesium$EasingFunction.CallbackProperty$Callback;
    static EXPONENTIAL_IN_OUT: Cesium$EasingFunction.CallbackProperty$Callback;
    static EXPONENTIAL_OUT: Cesium$EasingFunction.CallbackProperty$Callback;
    static LINEAR_NONE: Cesium$EasingFunction.CallbackProperty$Callback;
    static QUADRATIC_IN: Cesium$EasingFunction.CallbackProperty$Callback;
    static QUADRATIC_IN_OUT: Cesium$EasingFunction.CallbackProperty$Callback;
    static QUADRATIC_OUT: Cesium$EasingFunction.CallbackProperty$Callback;
    static QUARTIC_IN: Cesium$EasingFunction.CallbackProperty$Callback;
    static QUARTIC_IN_OUT: Cesium$EasingFunction.CallbackProperty$Callback;
    static QUARTIC_OUT: Cesium$EasingFunction.CallbackProperty$Callback;
    static QUINTIC_IN: Cesium$EasingFunction.CallbackProperty$Callback;
    static QUINTIC_IN_OUT: Cesium$EasingFunction.CallbackProperty$Callback;
    static QUINTIC_OUT: Cesium$EasingFunction.CallbackProperty$Callback;
    static SINUSOIDAL_IN: Cesium$EasingFunction.CallbackProperty$Callback;
    static SINUSOIDAL_IN_OUT: Cesium$EasingFunction.CallbackProperty$Callback;
    static SINUSOIDAL_OUT: Cesium$EasingFunction.CallbackProperty$Callback;
  }

  declare type EasingFunction$Callback = (
    time?: Cesium$JulianDate,
    result?: any
  ) => any;

  declare class Cesium$Camera {
    position: Cesium$Cartesian3;
    direction: Cesium$Cartesian3;
    up: Cesium$Cartesian3;
    right: Cesium$Cartesian3;
    frustum: Cesium$Frustum;
    defaultMoveAmount: number;
    defaultLookAmount: number;
    defaultRotateAmount: number;
    defaultZoomAmount: number;
    constrainedAxis: Cesium$Cartesian3;
    maximumTranslateFactor: number;
    maximumZoomFactor: number;
    transform: Cesium$Matrix4;
    inverseTransform: Cesium$Matrix4;
    viewMatrix: Cesium$Matrix4;
    inverseViewMatrix: Cesium$Matrix4;
    positionCartographic: Cesium$Cartographic;
    positionWC: Cesium$Cartesian3;
    percentageChanged: number;
    directionWC: Cesium$Cartesian3;
    upWC: Cesium$Cartesian3;
    rightWC: Cesium$Cartesian3;
    heading: number;
    pitch: number;
    roll: number;
    moveStart: Cesium$Event;
    moveEnd: Cesium$Event;
    static DEFAULT_OFFSET: Cesium$HeadingPitchRange;
    static DEFAULT_VIEW_RECTANGLE: Cesium$Rectangle;
    static DEFAULT_VIEW_FACTOR: number;
    changed: Cesium$Event;
    constructor(scene: Cesium$Scene): this;
    cameraToWorldCoordinates(
      cartesian: Cesium$Cartesian4,
      result?: Cesium$Cartesian4
    ): Cesium$Cartesian4;
    cameraToWorldCoordinatesPoint(
      cartesian: Cesium$Cartesian3,
      result?: Cesium$Cartesian3
    ): Cesium$Cartesian3;
    cameraToWorldCoordinatesVector(
      cartesian: Cesium$Cartesian3,
      result?: Cesium$Cartesian3
    ): Cesium$Cartesian3;
    cancelFlight(): void;
    computeViewRectangle(
      ellipsoid?: Cesium$Ellipsoid,
      result?: Cesium$Rectangle
    ): Cesium$Rectangle | void;
    distanceToBoundingSphere(boundingSphere: Cesium$BoundingSphere): number;
    flyHome(duration: number): void;
    flyTo(options: {
      destination: Cesium$Cartesian3 | Cesium$Rectangle,
      orientation?: any,
      duration?: number,
      complete?: Cesium$Camera.Camera$FlightCompleteCallback,
      cancel?: Cesium$Camera.Camera$FlightCancelledCallback,
      endTransform?: Cesium$Matrix4,
      maximumHeight?: number,
      pitchAdjustHeight?: number,
      flyOverLongitude?: number,
      flyOverLongitudeWeight?: number,
      easingFunction?: Cesium$EasingFunction
    }): void;
    flyToBoundingSphere(
      boundingSphere: Cesium$BoundingSphere,
      options?: {
        duration?: number,
        offset?: Cesium$HeadingPitchRange,
        complete?: Cesium$Camera.Camera$FlightCompleteCallback,
        cancel?: Cesium$Camera.Camera$FlightCancelledCallback,
        endTransform?: Cesium$Matrix4,
        maximumHeight?: number,
        pitchAdjustHeight?: number,
        flyOverLongitude?: number,
        flyOverLongitudeWeight?: number,
        easingFunction?: Cesium$EasingFunction
      }
    ): void;
    getMagnitude(): number;
    getPickRay(
      windowPosition: Cesium$Cartesian2,
      result?: Cesium$Ray
    ): Cesium$Ray;
    getPixelSize(
      boundingSphere: Cesium$BoundingSphere,
      drawingBufferWidth: number,
      drawingBufferHeight: number
    ): number;
    getRectangleCameraCoordinates(
      rectangle: Cesium$Rectangle,
      result?: Cesium$Cartesian3
    ): Cesium$Cartesian3;
    look(axis: Cesium$Cartesian3, angle?: number): void;
    lookAt(
      target: Cesium$Cartesian3,
      offset: Cesium$Cartesian3 | Cesium$HeadingPitchRange
    ): void;
    lookAtTransform(
      transform: Cesium$Matrix4,
      offset: Cesium$Cartesian3 | Cesium$HeadingPitchRange
    ): void;
    lookDown(amount?: number): void;
    lookLeft(amount?: number): void;
    lookRight(amount?: number): void;
    lookUp(amount?: number): void;
    move(direction: Cesium$Cartesian3, amount?: number): void;
    moveBackward(amount?: number): void;
    moveDown(amount?: number): void;
    moveForward(amount?: number): void;
    moveLeft(amount?: number): void;
    moveRight(amount?: number): void;
    moveUp(amount?: number): void;
    pickEllipsoid(
      windowPosition: Cesium$Cartesian2,
      ellipsoid?: Cesium$Ellipsoid,
      result?: Cesium$Cartesian3
    ): Cesium$Cartesian3;
    rotate(axis: Cesium$Cartesian3, angle?: number): void;
    rotateDown(angle?: number): void;
    rotateLeft(angle?: number): void;
    rotateRight(angle?: number): void;
    rotateUp(angle?: number): void;
    setView(options: {
      destination?: Cesium$Cartesian3 | Cesium$Rectangle,
      orientation?: any,
      endTransform?: Cesium$Matrix4
    }): void;
    switchToOrthographicFrustum(): void;
    switchToPerspectiveFrustum(): void;
    twistLeft(amount?: number): void;
    twistRight(amount?: number): void;
    viewBoundingSphere(
      boundingSphere: Cesium$BoundingSphere,
      offset?: Cesium$HeadingPitchRange
    ): void;
    worldToCameraCoordinates(
      cartesian: Cesium$Cartesian4,
      result?: Cesium$Cartesian4
    ): Cesium$Cartesian4;
    worldToCameraCoordinatesPoint(
      cartesian: Cesium$Cartesian3,
      result?: Cesium$Cartesian3
    ): Cesium$Cartesian3;
    worldToCameraCoordinatesVector(
      cartesian: Cesium$Cartesian3,
      result?: Cesium$Cartesian3
    ): Cesium$Cartesian3;
    zoomIn(amount?: number): void;
    zoomOut(amount?: number): void;
  }

  declare type Camera$FlightCancelledCallback = () => void;

  declare type Camera$FlightCompleteCallback = () => void;

  declare class Cesium$CameraEventAggregator {
    currentMousePosition: Cesium$Cartesian2;
    anyButtonDown: boolean;
    constructor(element?: HTMLCanvasElement): this;
    isMoving(
      type: Cesium$CameraEventType,
      modifier?: Cesium$KeyboardEventModifier
    ): boolean;
    getMovement(
      type: Cesium$CameraEventType,
      modifier?: Cesium$KeyboardEventModifier
    ): any;
    getLastMovement(
      type: Cesium$CameraEventType,
      modifier?: Cesium$KeyboardEventModifier
    ): any;
    isButtonDown(
      type: Cesium$CameraEventType,
      modifier?: Cesium$KeyboardEventModifier
    ): boolean;
    getStartMousePosition(
      type: Cesium$CameraEventType,
      modifier?: Cesium$KeyboardEventModifier
    ): Cesium$Cartesian2;
    getButtonPressTime(
      type: Cesium$CameraEventType,
      modifier?: Cesium$KeyboardEventModifier
    ): Date;
    getButtonReleaseTime(
      type: Cesium$CameraEventType,
      modifier?: Cesium$KeyboardEventModifier
    ): Date;
    reset(): void;
    isDestroyed(): boolean;
    destroy(): void;
  }

  declare class Cesium$CreditDisplay {
    static cesiumCredit: Cesium$Credit;
    container: HTMLElement;
    constructor(
      container: HTMLElement,
      delimiter?: string,
      viewport?: HTMLElement
    ): this;
    addCredit(credit: Cesium$Credit): void;
    addDefaultCredit(credit: Cesium$Credit): void;
    beginFrame(credit: Cesium$Credit): void;
    destroy(): void;
    endFrame(credit: Cesium$Credit): void;
    isDestroyed(): boolean;
    removeDefaultCredit(credit: Cesium$Credit): void;
    update(): void;
  }

  declare class Cesium$CullingVolume {
    planes: Cesium$Cartesian4[];
    constructor(planes: Cesium$Cartesian4[]): this;
    computeVisibility(boundingVolume: any): Cesium$Intersect;
  }

  declare class Cesium$DebugAppearance mixins Cesium$Appearance {
    attributeName: string;
    glslDatatype: string;
    constructor(options: {
      attributeName: string,
      glslDatatype?: string,
      vertexShaderSource?: string,
      fragmentShaderSource?: string,
      renderState?: Cesium$RenderState
    }): this;
  }

  declare class Cesium$DebugModelMatrixPrimitive {
    length: number;
    width: number;
    show: boolean;
    modelMatrix: Cesium$Matrix4;
    id: any;
    constructor(options?: {
      length?: number,
      width?: number,
      modelMatrix?: Cesium$Matrix4,
      show?: boolean,
      id?: any
    }): this;
    isDestroyed(): boolean;
    destroy(): void;
  }

  declare class Cesium$DiscardMissingTileImagePolicy {
    constructor(options: {
      missingImageUrl: Cesium$Resource | string,
      pixelsToCheck: Cesium$Cartesian2[],
      disableCheckIfAllPixelsAreTransparent?: boolean
    }): this;
    isReady(): boolean;
    shouldDiscardImage(image: HTMLImageElement): boolean;
  }

  declare class Cesium$EllipsoidPrimitive {
    center: Cesium$Cartesian3;
    radii: Cesium$Cartesian3;
    modelMatrix: Cesium$Matrix4;
    show: boolean;
    material: Cesium$Material;
    id: any;
    debugShowBoundingVolume: boolean;
    constructor(options?: {
      center?: Cesium$Cartesian3,
      radii?: Cesium$Cartesian3,
      modelMatrix?: Cesium$Matrix4,
      show?: boolean,
      material?: Cesium$Material,
      id?: any,
      debugShowBoundingVolume?: boolean
    }): this;
    update(): void;
    isDestroyed(): boolean;
    destroy(): void;
  }

  declare class Cesium$EllipsoidSurfaceAppearance mixins Cesium$Appearance {
    vertexFormat: Cesium$VertexFormat;
    flat: boolean;
    faceForward: boolean;
    aboveGround: boolean;
    static VERTEX_FORMAT: Cesium$VertexFormat;
    constructor(options?: {
      flat?: boolean,
      faceForward?: boolean,
      translucent?: boolean,
      aboveGround?: boolean,
      material?: Cesium$Material,
      vertexShaderSource?: string,
      fragmentShaderSource?: string,
      renderState?: Cesium$RenderState
    }): this;
  }

  declare class Cesium$FrameRateMonitor {
    samplingWindow: number;
    quietPeriod: number;
    warmupPeriod: number;
    minimumFrameRateDuringWarmup: number;
    minimumFrameRateAfterWarmup: number;
    scene: Cesium$Scene;
    lowFrameRate: Cesium$Event;
    nominalFrameRate: Cesium$Event;
    lastFramesPerSecond: number;
    static defaultSettings: any;
    constructor(options?: {
      scene: Cesium$Scene,
      samplingWindow?: number,
      quietPeriod?: number,
      warmupPeriod?: number,
      minimumFrameRateDuringWarmup?: number,
      minimumFrameRateAfterWarmup?: number
    }): this;
    pause(): void;
    unpause(): void;
    isDestroyed(): boolean;
    destroy(): void;
    static fromScene(scene: Cesium$Scene): Cesium$FrameRateMonitor;
  }

  declare class Cesium$GetFeatureInfoFormat {
    constructor(
      type: string,
      format?: string,
      callback?: (res: any) => any
    ): this;
  }

  declare class Cesium$Globe {
    terrainProvider: Cesium$TerrainProvider;
    northPoleColor: Cesium$Cartesian3;
    southPoleColor: Cesium$Cartesian3;
    show: boolean;
    oceanNormalMapUrl: string;
    depthTestAgainstTerrain: boolean;
    maximumScreenSpaceError: number;
    tileCacheSize: number;
    enableLighting: boolean;
    lightingFadeOutDistance: number;
    lightingFadeInDistance: number;
    showWaterEffect: boolean;
    ellipsoid: Cesium$Ellipsoid;
    imageryLayers: Cesium$ImageryLayerCollection;
    baseColor: Cesium$Color;
    constructor(ellipsoid?: Cesium$Ellipsoid): this;
    pick(
      ray: Cesium$Ray,
      scene: Cesium$Scene,
      result?: Cesium$Cartesian3
    ): Cesium$Cartesian3;
    getHeight(cartographic: Cesium$Cartographic): number;
    isDestroyed(): boolean;
    destroy(): void;
  }

  declare class Cesium$GoogleEarthEnterpriseMetadata {
    imageryPresent: boolean;
    key: ArrayBuffer;
    negativeAltitudeExponentBias: number;
    negativeAltitudeThreshold: number;
    protoImagery: boolean;
    proxy: Cesium$Proxy;
    readyPromise: Promise<boolean>;
    resource: Cesium$Resource;
    terrainPresent: boolean;
    url: string;
    constructor(resourceOrUrl: Cesium$Resource | string): this;
    static quadKeyToTileXY(
      quadkey: string
    ): {
      x: number,
      y: number,
      level: number
    };
    static tileXYToQuadKey(x: number, y: number, level: number): string;
  }

  declare class Cesium$GoogleEarthEnterpriseImageryProvider
    mixins Cesium$ImageryProvider {
    url: string;
    constructor(options: {
      url: Cesium$Resource | string,
      metadata: Cesium$GoogleEarthEnterpriseMetadata,
      ellipsoid?: Cesium$Ellipsoid,
      tileDiscardPolicy?: Cesium$TileDiscardPolicy,
      credit?: Cesium$Credit | string
    }): this;
  }

  declare class Cesium$GoogleEarthEnterpriseMapsProvider
    mixins Cesium$ImageryProvider {
    channel: number;
    path: string;
    requestType: string;
    url: string;
    version: number;
    static logoUrl: string;
    constructor(options: {
      url: Cesium$Resource | string,
      channel: number,
      path?: string,
      maximumLevel?: number,
      tileDiscardPolicy?: Cesium$TileDiscardPolicy,
      ellipsoid?: Cesium$Ellipsoid
    }): this;
  }

  declare class Cesium$GoogleEarthEnterpriseTerrainData
    mixins Cesium$TerrainData {
    constructor(options: {
      buffer: ArrayBuffer,
      negativeAltitudeExponentBias: number,
      negativeElevationThreshold: number,
      childTileMask?: number,
      createdByUpsampling?: boolean,
      credits?: Cesium$Credit[]
    }): this;
  }

  declare class Cesium$GoogleEarthEnterpriseTerrainProvider {
    static heightmapTerrainQuality: number;
    availability: Cesium$TileAvailability;
    credit: Cesium$Credit;
    errorEvent: Cesium$Event;
    hasVertexNormals: boolean;
    hasWaterMask: boolean;
    ready: boolean;
    readyPromise: Promise<boolean>;
    tilingScheme: Cesium$TilingScheme;
    constructor(options: {
      url: Cesium$Resource | string,
      metadata: Cesium$GoogleEarthEnterpriseMetadata,
      ellipsoid?: Cesium$Ellipsoid,
      credit?: Cesium$Credit | string
    }): this;
    static getEstimatedLevelZeroGeometricErrorForAHeightmap(
      ellipsoid: Cesium$Ellipsoid,
      tileImageWidth: number,
      numberOfTilesAtLevelZero: number
    ): number;
    static getRegularGridIndices(width: number, height: number): Uint16Array;
    getLevelMaximumGeometricError(level: number): number;
    getTileDataAvailable(x: number, y: number, level: number): boolean;
    requestTileGeometry(
      x: number,
      y: number,
      level: number,
      request?: Request
    ): Promise<Cesium$TerrainData>;
  }

  declare class Cesium$GridImageryProvider mixins Cesium$ImageryProvider {
    constructor(
      options?: {
        tilingScheme?: Cesium$TilingScheme,
        ellipsoid?: Cesium$Ellipsoid,
        cells?: number,
        color?: Cesium$Color,
        glowColor?: Cesium$Color,
        glowWidth?: number,
        tileWidth?: number,
        tileHeight?: number,
        canvasSize?: number
      },
      backgroundColor?: Cesium$Color
    ): this;
  }

  declare class Cesium$HeadingPitchRange {
    heading: number;
    pitch: number;
    range: number;
    constructor(heading?: number, pitch?: number, range?: number): this;
    static clone(
      hpr: Cesium$HeadingPitchRange,
      result?: Cesium$HeadingPitchRange
    ): Cesium$HeadingPitchRange;
  }

  declare class Cesium$ImageryLayer {
    alpha: number;
    brightness: number;
    contrast: number;
    hue: number;
    saturation: number;
    gamma: number;
    show: boolean;
    imageryProvider: Cesium$ImageryProvider;
    rectangle: Cesium$Rectangle;
    static DEFAULT_BRIGHTNESS: number;
    static DEFAULT_CONTRAST: number;
    static DEFAULT_HUE: number;
    static DEFAULT_SATURATION: number;
    static DEFAULT_GAMMA: number;
    constructor(
      imageryProvider: Cesium$ImageryProvider,
      options?: {
        rectangle?: Cesium$Rectangle,
        alpha?: number | Cesium$ImageryLayer.ImageryLayer$ValueFunc,
        brightness?: number | Cesium$ImageryLayer.ImageryLayer$ValueFunc,
        contrast?: number | Cesium$ImageryLayer.ImageryLayer$ValueFunc,
        hue?: number | Cesium$ImageryLayer.ImageryLayer$ValueFunc,
        saturation?: number | Cesium$ImageryLayer.ImageryLayer$ValueFunc,
        gamma?: number | Cesium$ImageryLayer.ImageryLayer$ValueFunc,
        show?: boolean,
        maximumAnisotropy?: number,
        minimumTerrainLevel?: number,
        maximumTerrainLevel?: number
      }
    ): this;
    isBaseLayer(): boolean;
    isDestroyed(): boolean;
    destroy(): void;
  }

  declare type ImageryLayer$ValueFunc = (
    frameState: any,
    layer: Cesium$ImageryLayer,
    x: number,
    y: number,
    level: number
  ) => number;

  declare class Cesium$ImageryLayerCollection {
    layerAdded: Cesium$Event;
    layerRemoved: Cesium$Event;
    layerMoved: Cesium$Event;
    layerShownOrHidden: Cesium$Event;
    length: number;
    add(layer: Cesium$ImageryLayer, index?: number): void;
    addImageryProvider(
      imageryProvider: Cesium$ImageryProvider,
      index?: number
    ): Cesium$ImageryLayer;
    remove(layer: Cesium$ImageryLayer, destroy?: boolean): boolean;
    removeAll(destroy?: boolean): void;
    contains(layer: Cesium$ImageryLayer): boolean;
    indexOf(layer: Cesium$ImageryLayer): number;
    get(index: number): Cesium$ImageryLayer;
    raise(layer: Cesium$ImageryLayer): void;
    lower(layer: Cesium$ImageryLayer): void;
    raiseToTop(layer: Cesium$ImageryLayer): void;
    lowerToBottom(layer: Cesium$ImageryLayer): void;
    pickImageryLayerFeatures(
      ray: Cesium$Ray,
      scene: Cesium$Scene
    ): Promise<Cesium$ImageryLayerFeatureInfo[]> | void;
    isDestroyed(): boolean;
    destroy(): void;
  }

  declare class Cesium$ImageryLayerFeatureInfo {
    name: string;
    description: string;
    position: Cesium$Cartographic;
    data: any;
    configureNameFromProperties(properties: any): void;
    configureDescriptionFromProperties(properties: any): void;
  }

  declare class Cesium$ImageryProvider {
    credit: Cesium$Credit;
    defaultAlpha: number;
    defaultBrightness: number;
    defaultContrast: number;
    defaultGamma: number;
    defaultHue: number;
    defaultSaturation: number;
    defaultMagnificationFilter: any;
    defaultMinificationFilter: any;
    errorEvent: Cesium$Event;
    hasAlphaChannel: boolean;
    maximumLevel: number;
    minimumLevel: number;
    proxy: Cesium$Proxy;
    ready: boolean;
    readyPromise: Promise<boolean>;
    rectangle: Cesium$Rectangle;
    tileDiscardPolicy: Cesium$TileDiscardPolicy;
    tileWidth: number;
    tileHeight: number;
    tilingScheme: Cesium$TilingScheme;
    getTileCredits(x: number, y: number, level: number): Cesium$Credit[];
    requestImage(
      x: number,
      y: number,
      level: number
    ): Promise<HTMLImageElement | HTMLCanvasElement>;
    pickFeatures(
      x: number,
      y: number,
      level: number,
      longitude: number,
      latitude: number
    ): Promise<Cesium$ImageryLayerFeatureInfo[]>;
    static loadImage(
      url: string
    ): Promise<HTMLImageElement | HTMLCanvasElement>;
  }

  declare class Cesium$Label {
    show: boolean;
    position: Cesium$Cartesian3;
    text: string;
    font: string;
    fillColor: Cesium$Color;
    outlineColor: Cesium$Color;
    outlineWidth: number;
    style: Cesium$LabelStyle;
    pixelOffset: Cesium$Cartesian2;
    translucencyByDistance: Cesium$NearFarScalar;
    pixelOffsetScaleByDistance: Cesium$NearFarScalar;
    eyeOffset: Cesium$Cartesian3;
    horizontalOrigin: Cesium$HorizontalOrigin;
    verticalOrigin: Cesium$VerticalOrigin;
    scale: number;
    id: any;
    computeScreenSpacePosition(
      scene: Cesium$Scene,
      result?: Cesium$Cartesian2
    ): Cesium$Cartesian2;
    equals(other: Cesium$Label): boolean;
    isDestroyed(): boolean;
  }

  declare class Cesium$LabelCollection {
    modelMatrix: Cesium$Matrix4;
    debugShowBoundingVolume: boolean;
    length: number;
    constructor(options?: {
      modelMatrix?: Cesium$Matrix4,
      debugShowBoundingVolume?: boolean
    }): this;
    add(options?: any): Cesium$Label;
    remove(label: Cesium$Label): boolean;
    removeAll(): void;
    contains(label: Cesium$Label): boolean;
    get(index: number): Cesium$Label;
    isDestroyed(): boolean;
    destroy(): void;
  }

  declare class Cesium$Material {
    type: string;
    shaderSource: string;
    materials: any;
    uniforms: any;
    translucent: boolean;
    static DefaultImageId: string;
    static DefaultCubeMapId: string;
    static ColorType: string;
    static ImageType: string;
    static DiffuseMapType: string;
    static AlphaMapType: string;
    static SpecularMapType: string;
    static EmissionMapType: string;
    static BumpMapType: string;
    static NormalMapType: string;
    static GridType: string;
    static StripeType: string;
    static CheckerboardType: string;
    static DotType: string;
    static WaterType: string;
    static RimLightingType: string;
    static FadeType: string;
    static PolylineArrowType: string;
    static PolylineGlowType: string;
    static PolylineOutlineType: string;
    constructor(options?: {
      strict?: boolean,
      translucent?: boolean,
      fabric: any
    }): this;
    isTranslucent(): boolean;
    isDestroyed(): boolean;
    destroy(): void;
    static fromType(type: string, uniforms?: any): Cesium$Material;
  }

  declare class Cesium$MaterialAppearance mixins Cesium$Appearance {
    materialSupport: Cesium$MaterialAppearance.MaterialAppearance$MaterialSupport;
    vertexFormat: Cesium$VertexFormat;
    flat: boolean;
    faceForward: boolean;
    constructor(options?: {
      flat?: boolean,
      faceForward?: boolean,
      translucent?: boolean,
      closed?: boolean,
      materialSupport?: Cesium$MaterialAppearance.MaterialAppearance$MaterialSupport,
      material?: Cesium$Material,
      vertexShaderSource?: string,
      fragmentShaderSource?: string,
      renderState?: Cesium$RenderState
    }): this;
  }

  declare class MaterialAppearance$MaterialSupport {
    constructor(...args: empty): mixed;
    static +BASIC: Class<MaterialAppearance$MaterialSupport__BASIC> &
      MaterialAppearance$MaterialSupport__BASIC &
      0; // 0
    static +TEXTURED: Class<MaterialAppearance$MaterialSupport__TEXTURED> &
      MaterialAppearance$MaterialSupport__TEXTURED &
      1; // 1
    static +ALL: Class<MaterialAppearance$MaterialSupport__ALL> &
      MaterialAppearance$MaterialSupport__ALL &
      2; // 2
  }

  declare class MaterialAppearance$MaterialSupport__BASIC
    mixins MaterialAppearance$MaterialSupport {}
  declare class MaterialAppearance$MaterialSupport__TEXTURED
    mixins MaterialAppearance$MaterialSupport {}
  declare class MaterialAppearance$MaterialSupport__ALL
    mixins MaterialAppearance$MaterialSupport {}

  declare class Cesium$Model {
    show: boolean;
    modelMatrix: Cesium$Matrix4;
    scale: number;
    minimumPixelSize: number;
    id: any;
    activeAnimations: Cesium$ModelAnimationCollection;
    debugShowBoundingVolume: boolean;
    debugWireframe: boolean;
    gltf: any;
    basePath: string;
    boundingSphere: Cesium$BoundingSphere;
    ready: boolean;
    readyPromise: Promise<Cesium$Model>;
    asynchronous: boolean;
    allowPicking: boolean;
    constructor(options?: {
      gltf?: any,
      basePath?: string,
      show?: boolean,
      modelMatrix?: Cesium$Matrix4,
      scale?: number,
      minimumPixelSize?: number,
      id?: any,
      allowPicking?: boolean,
      asynchronous?: boolean,
      debugShowBoundingVolume?: boolean,
      debugWireframe?: boolean
    }): this;
    getNode(name: string): Cesium$ModelNode;
    getMesh(name: string): Cesium$ModelMesh;
    getMaterial(name: string): Cesium$ModelMaterial;
    update(): void;
    isDestroyed(): boolean;
    destroy(): void;
    static fromGltf(options: {
      url: string,
      headers?: any,
      show?: boolean,
      modelMatrix?: Cesium$Matrix4,
      scale?: number,
      minimumPixelSize?: number,
      allowPicking?: boolean,
      asynchronous?: boolean,
      debugShowBoundingVolume?: boolean,
      debugWireframe?: boolean
    }): Cesium$Model;
  }

  declare class Cesium$ModelAnimation {
    removeOnStop: boolean;
    start: Cesium$Event;
    update: Cesium$Event;
    stop: Cesium$Event;
    name: string;
    startTime: Cesium$JulianDate;
    delay: number;
    stopTime: Cesium$JulianDate;
    speedup: number;
    reverse: boolean;
    loop: Cesium$ModelAnimationLoop;
  }

  declare class Cesium$ModelAnimationCollection {
    animationAdded: Cesium$Event;
    animationRemoved: Cesium$Event;
    length: number;
    add(options: {
      name: string,
      startTime?: Cesium$JulianDate,
      delay?: number,
      stopTime?: Cesium$JulianDate,
      removeOnStop?: boolean,
      speedup?: number,
      reverse?: boolean,
      loop?: Cesium$ModelAnimationLoop
    }): Cesium$ModelAnimation;
    addAll(options?: {
      startTime?: Cesium$JulianDate,
      delay?: number,
      stopTime?: Cesium$JulianDate,
      removeOnStop?: boolean,
      speedup?: number,
      reverse?: boolean,
      loop?: Cesium$ModelAnimationLoop
    }): Cesium$ModelAnimation[];
    remove(animation: Cesium$ModelAnimation): boolean;
    removeAll(): void;
    contains(animation: Cesium$ModelAnimation): boolean;
    get(index: number): Cesium$ModelAnimation;
  }

  declare class Cesium$ModelMaterial {
    name: string;
    id: string;
    setValue(name: string, value?: any): void;
    getValue(name: string): any;
  }

  declare class Cesium$ModelMesh {
    name: string;
    id: string;
    materials: Cesium$ModelMaterial[];
  }

  declare class Cesium$ModelNode {
    name: string;
    id: string;
    show: boolean;
    matrix: Cesium$Matrix4;
  }

  declare class Cesium$Moon {
    show: boolean;
    textureUrl: string;
    onlySunLighting: boolean;
    ellipsoid: Cesium$Ellipsoid;
    constructor(options?: {
      show?: boolean,
      textureUrl?: string,
      ellipsoid?: Cesium$Ellipsoid,
      onlySunLighting?: boolean
    }): this;
    isDestroyed(): boolean;
    destroy(): void;
  }

  declare class Cesium$NeverTileDiscardPolicy {
    isReady(): boolean;
    shouldDiscardImage(
      image: HTMLImageElement | Promise<HTMLImageElement>
    ): Promise<boolean>;
  }

  declare class Cesium$PerInstanceColorAppearance mixins Cesium$Appearance {
    vertexFormat: Cesium$VertexFormat;
    flat: boolean;
    faceForward: boolean;
    static VERTEX_FORMAT: Cesium$VertexFormat;
    static FLAT_VERTEX_FORMAT: Cesium$VertexFormat;
    constructor(options?: {
      flat?: boolean,
      faceForward?: boolean,
      translucent?: boolean,
      closed?: boolean,
      vertexShaderSource?: string,
      fragmentShaderSource?: string,
      renderState?: Cesium$RenderState
    }): this;
  }

  declare class Cesium$Frustum {
    near: number;
    far: number;
    projectionMatrix: Cesium$Matrix4;
    computeCullingVolume(
      position: Cesium$Cartesian3,
      direction: Cesium$Cartesian3,
      up: Cesium$Cartesian3
    ): Cesium$CullingVolume;
    getPixelDimensions(
      drawingBufferWidth: number,
      drawingBufferHeight: number,
      distance: number,
      result: Cesium$Cartesian2
    ): Cesium$Cartesian2;
  }

  declare class Cesium$OrthographicFrustum mixins Cesium$Frustum {
    aspectRatio: number;
    width: number;
    static packedLength: number;
    constructor(options?: {
      width: number,
      aspectRatio: number,
      near: number,
      far: number
    }): this;
    pack(
      value: Cesium$OrthographicFrustum,
      array: number[],
      startingIndex: number
    ): number[];
    unpack(
      array: number[],
      startingIndex: number,
      result: Cesium$OrthographicFrustum
    ): Cesium$OrthographicFrustum;
    clone(result?: Cesium$OrthographicFrustum): Cesium$OrthographicFrustum;
    equals(other?: Cesium$OrthographicFrustum): boolean;
  }

  declare class Cesium$PerspectiveFrustum mixins Cesium$Frustum {
    fov: number;
    aspectRatio: number;
    xOffset: number;
    yOffset: number;
    infiniteProjectionMatrix: Cesium$Matrix4;
    fovy: number;
    static packedLength: number;
    constructor(options?: {
      fov: number,
      aspectRatio: number,
      near: number,
      far: number,
      xOffset: number,
      yOffset: number
    }): this;
    pack(
      value: Cesium$PerspectiveFrustum,
      array: number[],
      startingIndex: number
    ): number[];
    unpack(
      array: number[],
      startingIndex: number,
      result: Cesium$PerspectiveFrustum
    ): Cesium$PerspectiveFrustum;
    clone(result?: Cesium$PerspectiveFrustum): Cesium$PerspectiveFrustum;
    equals(other?: Cesium$PerspectiveFrustum): boolean;
  }

  declare class Cesium$PerspectiveOffCenterFrustum mixins Cesium$Frustum {
    left: number;
    right: number;
    top: number;
    bottom: number;
    infiniteProjectionMatrix: Cesium$Matrix4;
    constructor(options?: {
      left: number,
      right: number,
      top: number,
      bottom: number,
      near: number,
      far: number
    }): this;
    clone(
      result?: Cesium$PerspectiveOffCenterFrustum
    ): Cesium$PerspectiveOffCenterFrustum;
    equals(other?: Cesium$PerspectiveOffCenterFrustum): boolean;
  }

  declare class Cesium$PointPrimitive {
    color: Cesium$Color;
    disableDepthTestDistance: number;
    distanceDisplayCondition: Cesium$DistanceDisplayCondition;
    id: any;
    outlineColor: Cesium$Color;
    outlineWidth: number;
    pixelSize: number;
    position: Cesium$Cartesian3;
    scaleByDistance: Cesium$NearFarScalar;
    show: boolean;
    translucencyByDistance: Cesium$NearFarScalar;
    computeScreenSpacePosition(
      scene: Cesium$Scene,
      result?: Cesium$Cartesian2
    ): Cesium$Cartesian2;
    equals(other: Cesium$PointPrimitive): boolean;
  }

  declare class Cesium$PointPrimitiveCollection {
    blendOption: Cesium$BlendOption;
    debugShowBoundingVolume: boolean;
    length: number;
    modelMatrix: Cesium$Matrix4;
    constructor(options?: {
      modelMatrix?: Cesium$Matrix4,
      debugShowBoundingVolume?: boolean,
      blendOption?: Cesium$BlendOption
    }): this;
    add(pointPrimitive?: any): Cesium$PointPrimitive;
    contains(pointPrimitive?: Cesium$PointPrimitive): boolean;
    destroy(): void;
    get(index: number): Cesium$PointPrimitive;
    isDestroyed(): boolean;
    remove(pointPrimitive: Cesium$PointPrimitive): boolean;
    removeAll(): void;
  }

  declare class Cesium$Polyline {
    show: boolean;
    positions: Cesium$Cartesian3[];
    material: Cesium$Material;
    width: number;
    loop: boolean;
    id: any;
    constructor(options?: {
      show?: boolean,
      width?: number,
      loop?: boolean,
      material?: Cesium$Material,
      positions?: Cesium$Cartesian3[],
      id?: any
    }): this;
  }

  declare class Cesium$PolylineCollection {
    modelMatrix: Cesium$Matrix4;
    debugShowBoundingVolume: boolean;
    length: number;
    constructor(options?: {
      modelMatrix?: Cesium$Matrix4,
      debugShowBoundingVolume?: boolean
    }): this;
    add(polyline?: any): Cesium$Polyline;
    remove(polyline: Cesium$Polyline): boolean;
    removeAll(): void;
    contains(polyline: Cesium$Polyline): boolean;
    get(index: number): Cesium$Polyline;
    isDestroyed(): boolean;
    destroy(): void;
  }

  declare class Cesium$PolylineColorAppearance mixins Cesium$Appearance {
    vertexFormat: Cesium$VertexFormat;
    static VERTEX_FORMAT: Cesium$VertexFormat;
    constructor(options?: {
      translucent?: boolean,
      vertexShaderSource?: string,
      fragmentShaderSource?: string,
      renderState?: Cesium$RenderState
    }): this;
  }

  declare class Cesium$PolylineMaterialAppearance mixins Cesium$Appearance {
    vertexFormat: Cesium$VertexFormat;
    static VERTEX_FORMAT: Cesium$VertexFormat;
    constructor(options?: {
      translucent?: boolean,
      material?: Cesium$Material,
      vertexShaderSource?: string,
      fragmentShaderSource?: string,
      renderState?: Cesium$RenderState
    }): this;
  }

  declare class Cesium$Primitive {
    allowPicking: boolean;
    appearance: Cesium$Appearance;
    asynchronous: boolean;
    GeometryPipeline$compressVertices: boolean;
    cull: boolean;
    debugShowBoundingVolume: boolean;
    depthFailAppearance: Cesium$Appearance;
    geometryInstances: Cesium$GeometryInstance[] | Cesium$GeometryInstance;
    interleave: boolean;
    modelMatrix: Cesium$Matrix4;
    ready: boolean;
    readyPromise: Promise<Cesium$Primitive>;
    releaseGeometryInstances: boolean;
    shadows: Cesium$ShadowMode;
    show: boolean;
    vertexCacheOptimize: boolean;
    constructor(options?: {
      geometryInstances?: any[] | Cesium$GeometryInstance,
      appearance?: Cesium$Appearance,
      show?: boolean,
      modelMatrix?: Cesium$Matrix4,
      vertexCacheOptimize?: boolean,
      interleave?: boolean,
      GeometryPipeline$compressVertices?: boolean,
      releaseGeometryInstances?: boolean,
      allowPicking?: boolean,
      cull?: boolean,
      asynchronous?: boolean,
      debugShowBoundingVolume?: boolean,
      shadows?: Cesium$ShadowMode
    }): this;
    destroy(): void;
    getGeometryInstanceAttributes(id: any): any;
    isDestroyed(): boolean;
    update(): void;
  }

  declare class Cesium$PrimitiveCollection {
    show: boolean;
    destroyPrimitives: boolean;
    length: number;
    constructor(options?: {
      show?: boolean,
      destroyPrimitives?: boolean
    }): this;
    add(primitive: any): any;
    remove(primitive?: any): boolean;
    removeAll(): void;
    contains(primitive?: any): boolean;
    raise(primitive?: any): void;
    raiseToTop(primitive?: any): void;
    lower(primitive?: any): void;
    lowerToBottom(primitive?: any): void;
    get(index: number): any;
    isDestroyed(): boolean;
    destroy(): void;
  }

  declare class Cesium$RectanglePrimitive {
    ellipsoid: Cesium$Ellipsoid;
    rectangle: Cesium$Rectangle;
    granularity: number;
    height: number;
    rotation: number;
    textureRotationAngle: number;
    show: boolean;
    material: Cesium$Material;
    id: any;
    asynchronous: boolean;
    debugShowBoundingVolume: boolean;
    constructor(options?: {
      ellipsoid?: Cesium$Ellipsoid,
      rectangle?: Cesium$Rectangle,
      granularity?: number,
      height?: number,
      rotation?: number,
      textureRotationAngle?: number,
      show?: boolean,
      material?: Cesium$Material,
      id?: any,
      asynchronous?: boolean,
      debugShowBoundingVolume?: boolean
    }): this;
    update(): void;
    isDestroyed(): boolean;
    destroy(): void;
  }

  declare class Cesium$Scene {
    backgroundColor: Cesium$Color;
    camera: Cesium$Camera;
    canvas: Element;
    completeMorphOnUserInput: boolean;
    debugCommandFilter: (command: any) => boolean;
    debugFrustumStatistics: any;
    debugShowCommands: boolean;
    debugShowDepthFrustum: number;
    debugShowFramesPerSecond: boolean;
    debugShowFrustumPlanes: boolean;
    debugShowFrustums: boolean;
    drawingBufferHeight: number;
    drawingBufferWidth: number;
    eyeSeparation: number;
    farToNearRatio: number;
    focalLength: number;
    fog: Cesium$Fog;
    fxaa: boolean;
    globe: Cesium$Globe;
    groundPrimitives: Cesium$PrimitiveCollection;
    id: string;
    imageryLayers: Cesium$ImageryLayerCollection;
    imagerySplitPosition: number;
    invertClassification: boolean;
    invertClassificationColor: Cesium$Color;
    lastRenderTime: Cesium$JulianDate;
    logarithmicDepthFarToNearRatio: number;
    mapMode2D: boolean;
    mapProjection: Cesium$MapProjection;
    maximumAliasedLineWidth: number;
    maximumCubeMapSize: number;
    maximumRenderTimeChange: number;
    minimumDisableDepthTestDistance: number;
    mode: Cesium$SceneMode;
    moon: Cesium$Moon;
    morphComplete: Cesium$Event;
    morphStart: Cesium$Event;
    morphTime: number;
    nearToFarDistance2D: number;
    orderIndependentTranslucency: boolean;
    pickPositionSupported: boolean;
    pickTranslucentDepth: boolean;
    postRender: Cesium$Event;
    preRender: Cesium$Event;
    preUpdate: Cesium$Event;
    primitives: Cesium$PrimitiveCollection;
    renderError: Cesium$Event;
    requestRenderMode: boolean;
    rethrowRenderErrors: boolean;
    scene3DOnly: boolean;
    screenSpaceCameraController: Cesium$ScreenSpaceCameraController;
    shadowMap: Cesium$ShadowMap;
    skyAtmosphere: Cesium$SkyAtmosphere;
    skyBox: Cesium$SkyBox;
    sun: Cesium$Sun;
    sunBloom: boolean;
    terrainExaggeration: number;
    terrainProvider: Cesium$TerrainProvider;
    terrainProviderChanged: Cesium$Event;
    useDepthPicking: boolean;
    useWebVR: boolean;
    constructor(options?: {
      canvas: HTMLCanvasElement,
      contextOptions?: any,
      creditContainer?: Element,
      creditViewport?: Element,
      mapProjection?: Cesium$MapProjection,
      orderIndependentTranslucency?: boolean,
      scene3DOnly?: boolean,
      terrainExaggeration?: number,
      shadows?: boolean,
      mapMode2D?: Cesium$MapMode2D,
      requestRenderMode?: boolean,
      maximumRenderTimeChange?: number
    }): this;
    cartesianToCanvasCoordinates(
      position: Cesium$Cartesian3,
      result?: Cesium$Cartesian2
    ): Cesium$Cartesian2;
    completeMorph(): void;
    destroy(): void;
    drillPick(windowPosition: Cesium$Cartesian2, limit?: number): any[];
    getCompressedTextureFormatSupported(format: string): boolean;
    isDestroyed(): boolean;
    morphTo2D(duration?: number): void;
    morphTo3D(duration?: number): void;
    morphToColumbusView(duration?: number): void;
    pick(
      windowPosition: Cesium$Cartesian2,
      width?: number,
      height?: number
    ): any;
    pickPosition(
      windowPosition: Cesium$Cartesian2,
      result?: Cesium$Cartesian3
    ): Cesium$Cartesian3;
    requestRender(): void;
  }

  declare class Cesium$ScreenSpaceCameraController {
    enableInputs: boolean;
    enableTranslate: boolean;
    enableZoom: boolean;
    enableRotate: boolean;
    enableTilt: boolean;
    enableLook: boolean;
    inertiaSpin: number;
    inertiaTranslate: number;
    inertiaZoom: number;
    maximumMovementRatio: number;
    bounceAnimationTime: number;
    minimumZoomDistance: number;
    maximumZoomDistance: number;
    translateEventTypes: Cesium$CameraEventType | any[];
    zoomEventTypes: Cesium$CameraEventType | any[];
    rotateEventTypes: Cesium$CameraEventType | any[];
    tiltEventTypes: Cesium$CameraEventType | any[];
    lookEventTypes: Cesium$CameraEventType | any[];
    minimumPickingTerrainHeight: number;
    minimumCollisionTerrainHeight: number;
    minimumTrackBallHeight: number;
    enableCollisionDetection: boolean;
    constructor(scene: Cesium$Scene): this;
    isDestroyed(): boolean;
    destroy(): void;
  }

  declare class Cesium$SingleTileImageryProvider mixins Cesium$ImageryProvider {
    url: string;
    constructor(options: {
      url: string,
      rectangle?: Cesium$Rectangle,
      credit?: Cesium$Credit | string,
      ellipsoid?: Cesium$Ellipsoid,
      proxy?: any
    }): this;
  }

  declare class Cesium$SkyAtmosphere {
    show: boolean;
    ellipsoid: Cesium$Ellipsoid;
    constructor(ellipsoid?: Cesium$Ellipsoid): this;
    isDestroyed(): boolean;
    destroy(): void;
  }

  declare class Cesium$SkyBox {
    sources: any;
    show: boolean;
    constructor(options: {
      sources?: any,
      show?: boolean
    }): this;
    update(): void;
    isDestroyed(): boolean;
    destroy(): void;
  }

  declare class Cesium$Sun {
    show: boolean;
    glowFactor: number;
    isDestroyed(): boolean;
    destroy(): void;
  }

  declare class Cesium$Fog {
    density: number;
    enabled: boolean;
    minimumBrightness: number;
    screenSpaceErrorFactor: number;
  }

  declare class Cesium$TileCoordinatesImageryProvider
    mixins Cesium$ImageryProvider {
    constructor(options?: {
      tilingScheme?: Cesium$TilingScheme,
      ellipsoid?: Cesium$Ellipsoid,
      color?: Cesium$Color,
      tileWidth?: number,
      tileHeight?: number
    }): this;
  }

  declare class Cesium$TileDiscardPolicy {
    isReady(): boolean;
    shouldDiscardImage(
      image: HTMLImageElement | Promise<HTMLImageElement>
    ): Promise<boolean>;
  }

  declare class Cesium$TileMapServiceImageryProvider
    mixins Cesium$ImageryProvider {
    url: string;
    constructor(options?: {
      url?: string,
      fileExtension?: string,
      proxy?: any,
      credit?: Cesium$Credit | string,
      minimumLevel?: number,
      maximumLevel?: number,
      rectangle?: Cesium$Rectangle,
      tilingScheme?: Cesium$TilingScheme,
      ellipsoid?: Cesium$Ellipsoid,
      tileWidth?: number,
      tileHeight?: number
    }): this;
  }

  declare class Cesium$ViewportQuad {
    show: boolean;
    rectangle: Cesium$BoundingRectangle;
    material: Cesium$Material;
    constructor(
      rectangle?: Cesium$BoundingRectangle,
      material?: Cesium$Material
    ): this;
    update(): void;
    isDestroyed(): boolean;
    destroy(): void;
  }

  declare class Cesium$WebMapServiceImageryProvider
    mixins Cesium$ImageryProvider {
    url: string;
    static DefaultParameters: {
      service: string,
      version: string,
      request: string,
      styles: string,
      format: string
    };
    static GetFeatureInfoDefaultParameters: {
      service: string,
      version: string,
      request: string
    };
    constructor(options: {
      url: string,
      layers: string,
      parameters?: any,
      getFeatureInfoParameters?: any,
      enablePickFeatures?: boolean,
      getFeatureInfoFormats?: Cesium$GetFeatureInfoFormat[],
      rectangle?: Cesium$Rectangle,
      tilingScheme?: Cesium$TilingScheme,
      ellipsoid?: Cesium$Ellipsoid,
      tileWidth?: number,
      tileHeight?: number,
      minimumLevel?: number,
      maximumLevel?: number,
      crs?: string,
      srs?: string,
      credit?: Cesium$Credit | string,
      subdomains?: string | string[]
    }): this;
  }

  declare class Cesium$WebMapTileServiceImageryProvider
    mixins Cesium$ImageryProvider {
    clock: Cesium$Clock;
    dimensions: any;
    format: string;
    times: Cesium$TimeIntervalCollection;
    url: string;
    constructor(options: {
      url: string,
      format?: string,
      layer: string,
      style: string,
      tileMatrixSetID: string,
      tileMatrixLabels?: any[],
      clock?: Cesium$Clock,
      times?: Cesium$TimeIntervalCollection,
      dimensions?: any,
      tileWidth?: number,
      tileHeight?: number,
      tilingScheme?: Cesium$TilingScheme,
      rectangle?: Cesium$Rectangle,
      minimumLevel?: number,
      maximumLevel?: number,
      ellipsoid?: Cesium$Ellipsoid,
      credit?: Cesium$Credit | string,
      subdomains?: string | string[]
    }): this;
  }

  declare class Cesium$Animation {
    container: Element;
    viewModel: Cesium$AnimationViewModel;
    constructor(
      container: Element | string,
      viewModel: Cesium$AnimationViewModel
    ): this;
    isDestroyed(): boolean;
    destroy(): void;
    resize(): void;
    applyThemeChanges(): void;
  }

  declare class Cesium$AnimationViewModel {
    shuttleRingDragging: boolean;
    snapToTicks: boolean;
    timeLabel: string;
    dateLabel: string;
    multiplierLabel: string;
    shuttleRingAngle: number;
    slower: Cesium$Command;
    faster: Cesium$Command;
    clockViewModel: Cesium$ClockViewModel;
    pauseViewModel: Cesium$ToggleButtonViewModel;
    playReverseViewModel: Cesium$ToggleButtonViewModel;
    playForwardViewModel: Cesium$ToggleButtonViewModel;
    playRealtimeViewModel: Cesium$ToggleButtonViewModel;
    dateFormatter: Cesium$AnimationViewModel.AnimationViewModel$DateFormatter;
    timeFormatter: Cesium$AnimationViewModel.AnimationViewModel$TimeFormatter;
    static defaultDateFormatter: Cesium$AnimationViewModel.AnimationViewModel$DateFormatter;
    static defaultTicks: number[];
    static defaultTimeFormatter: Cesium$AnimationViewModel.AnimationViewModel$TimeFormatter;
    constructor(clockViewModel: Cesium$ClockViewModel): this;
    getShuttleRingTicks(): number[];
    setShuttleRingTicks(positiveTicks: number[]): void;
  }

  declare type AnimationViewModel$DateFormatter = (
    date: Cesium$JulianDate,
    viewModel: Cesium$AnimationViewModel
  ) => string;

  declare type AnimationViewModel$TimeFormatter = (
    date: Cesium$JulianDate,
    viewModel: Cesium$AnimationViewModel
  ) => string;

  declare class Cesium$BaseLayerPicker {
    container: Element;
    viewModel: Cesium$BaseLayerPickerViewModel;
    constructor(
      container: Element,
      options: {
        globe: Cesium$Globe,
        imageryProviderViewModels?: Cesium$ProviderViewModel[],
        selectedImageryProviderViewModel?: Cesium$ProviderViewModel,
        terrainProviderViewModels?: Cesium$ProviderViewModel[],
        selectedTerrainProviderViewModel?: Cesium$ProviderViewModel
      }
    ): this;
    isDestroyed(): boolean;
    destroy(): void;
  }

  declare class Cesium$BaseLayerPickerViewModel {
    imageryProviderViewModels: Cesium$ProviderViewModel[];
    terrainProviderViewModels: Cesium$ProviderViewModel[];
    dropDownVisible: boolean;
    buttonTooltip: string;
    buttonImageUrl: string;
    selectedImagery: Cesium$ProviderViewModel;
    selectedTerrain: Cesium$ProviderViewModel;
    toggleDropDown: Cesium$Command;
    globe: Cesium$Globe;
    constructor(options: {
      globe: Cesium$Globe,
      imageryProviderViewModels?: Cesium$ProviderViewModel[],
      selectedImageryProviderViewModel?: Cesium$ProviderViewModel,
      terrainProviderViewModels?: Cesium$ProviderViewModel[],
      selectedTerrainProviderViewModel?: Cesium$ProviderViewModel
    }): this;
  }

  declare class Cesium$ProviderViewModel {
    name: string;
    tooltip: string;
    iconUrl: string;
    creationCommand: Cesium$Command;
    constructor(options: {
      name: string,
      tooltip: string,
      iconUrl: string,
      creationFunction:
        | Cesium$ProviderViewModel.ProviderViewModel$CreationFunction
        | Cesium$Command
    }): this;
  }

  declare type ProviderViewModel$CreationFunction = () =>
    | Cesium$ImageryProvider
    | Cesium$TerrainProvider
    | Cesium$ImageryProvider[]
    | Cesium$TerrainProvider[];

  declare class Cesium$CesiumInspector {
    container: Element;
    viewModel: Cesium$CesiumInspectorViewModel;
    constructor(container: Element | string, scene: Cesium$Scene): this;
    isDestroyed(): boolean;
    destroy(): void;
  }

  declare class Cesium$CesiumInspectorViewModel {
    frustums: boolean;
    performance: boolean;
    shaderCacheText: string;
    primitiveBoundingSphere: boolean;
    primitiveReferenceFrame: boolean;
    filterPrimitive: boolean;
    tileBoundingSphere: boolean;
    filterTile: boolean;
    wireframe: boolean;
    suspendUpdates: boolean;
    tileCoordinates: boolean;
    frustumStatisticText: string;
    tileText: string;
    hasPickedPrimitive: boolean;
    hasPickedTile: boolean;
    pickPimitiveActive: boolean;
    pickTileActive: boolean;
    dropDownVisible: boolean;
    generalVisible: boolean;
    primitivesVisible: boolean;
    terrainVisible: boolean;
    generalSwitchText: string;
    primitivesSwitchText: string;
    terrainSwitchText: string;
    scene: Cesium$Scene;
    performanceContainer: Element;
    toggleDropDown: Cesium$Command;
    showFrustums: Cesium$Command;
    showPerformance: Cesium$Command;
    showPrimitiveBoundingSphere: Cesium$Command;
    showPrimitiveReferenceFrame: Cesium$Command;
    doFilterPrimitive: Cesium$Command;
    showWireframe: Cesium$Command;
    doSuspendUpdates: Cesium$Command;
    showTileCoordinates: Cesium$Command;
    showTileBoundingSphere: Cesium$Command;
    doFilterTile: Cesium$Command;
    toggleGeneral: Cesium$Command;
    togglePrimitives: Cesium$Command;
    toggleTerrain: Cesium$Command;
    pickPrimitive: Cesium$Command;
    pickTile: Cesium$Command;
    selectParent: Cesium$Command;
    selectNW: Cesium$Command;
    selectNE: Cesium$Command;
    selectSW: Cesium$Command;
    selectSE: Cesium$Command;
    primitive: Cesium$Command;
    tile: Cesium$Command;
    constructor(scene: Cesium$Scene): this;
    isDestroyed(): boolean;
    destroy(): void;
  }

  declare class Cesium$CesiumWidget {
    container: Element;
    canvas: HTMLCanvasElement;
    creditContainer: Element;
    creditViewport: Element;
    scene: Cesium$Scene;
    imageryLayers: Cesium$ImageryLayerCollection;
    terrainProvider: Cesium$TerrainProvider;
    camera: Cesium$Camera;
    clock: Cesium$Clock;
    screenSpaceEventHandler: Cesium$ScreenSpaceEventHandler;
    targetFrameRate: number;
    useDefaultRenderLoop: boolean;
    resolutionScale: number;
    constructor(
      container: Element | string,
      options?: {
        clock?: Cesium$Clock,
        imageryProvider?: Cesium$ImageryProvider,
        terrainProvider?: Cesium$TerrainProvider,
        skyBox?: Cesium$SkyBox,
        skyAtmosphere?: Cesium$SkyAtmosphere,
        sceneMode?: Cesium$SceneMode,
        scene3DOnly?: boolean,
        orderIndependentTranslucency?: boolean,
        mapProjection?: Cesium$MapProjection,
        globe?: Cesium$Globe,
        useDefaultRenderLoop?: boolean,
        targetFrameRate?: number,
        showRenderLoopErrors?: boolean,
        contextOptions?: any,
        creditContainer?: Element | string,
        creditViewport?: Element | string,
        terrainExaggeration?: number,
        shadows?: boolean,
        terrainShadows?: Cesium$ShadowMode,
        mapMode2D?: Cesium$MapMode2D,
        requestRenderMode?: boolean,
        maximumRenderTimeChange?: number
      }
    ): this;
    showErrorPanel(title: string, message: string, error?: string): void;
    isDestroyed(): boolean;
    destroy(): void;
    resize(): void;
    render(): void;
  }

  declare class Cesium$ClockViewModel {
    systemTime: Cesium$JulianDate;
    startTime: Cesium$JulianDate;
    stopTime: Cesium$JulianDate;
    currentTime: Cesium$JulianDate;
    multiplier: number;
    clockStep: Cesium$ClockStep;
    clockRange: Cesium$ClockRange;
    canAnimate: boolean;
    shouldAnimate: boolean;
    clock: Cesium$Clock;
    constructor(clock?: Cesium$Clock): this;
    synchronize(): void;
    isDestroyed(): boolean;
    destroy(): void;
  }

  declare class Cesium$Command {
    canExecute: boolean;
    beforeExecute: Cesium$Event;
    afterExecute: Cesium$Event;
  }

  declare class Cesium$FullscreenButton {
    container: Element;
    viewModel: Cesium$FullscreenButtonViewModel;
    constructor(
      container: Element | string,
      fullscreenElement?: Element | string
    ): this;
    isDestroyed(): boolean;
    destroy(): void;
  }

  declare class Cesium$FullscreenButtonViewModel {
    isFullscreen: boolean;
    isFullscreenEnabled: boolean;
    tooltip: string;
    fullscreenElement: Element;
    command: Cesium$Command;
    constructor(fullscreenElement?: Element | string): this;
    isDestroyed(): boolean;
    destroy(): void;
  }

  declare class Cesium$Geocoder {
    container: Element;
    viewModel: Cesium$GeocoderViewModel;
    constructor(options: {
      container: Element | string,
      scene: Cesium$Scene,
      url?: string,
      key?: string,
      flightDuration?: number
    }): this;
    isDestroyed(): boolean;
    destroy(): void;
  }

  declare class Cesium$GeocoderViewModel {
    isSearchInProgress: boolean;
    searchText: string;
    flightDuration: number;
    url: string;
    key: string;
    complete: Cesium$Event;
    scene: Cesium$Scene;
    search: Cesium$Command;
    constructor(options: {
      scene: Cesium$Scene,
      url?: string,
      key?: string,
      flightDuration?: number
    }): this;
  }

  declare class Cesium$HomeButton {
    container: Element;
    viewModel: Cesium$HomeButtonViewModel;
    constructor(
      container: Element | string,
      scene: Cesium$Scene,
      duration?: number
    ): this;
    isDestroyed(): boolean;
    destroy(): void;
  }

  declare class Cesium$HomeButtonViewModel {
    tooltip: string;
    scene: Cesium$Scene;
    command: Cesium$Command;
    duration: number;
    constructor(scene: Cesium$Scene, duration?: number): this;
  }

  declare class Cesium$VRButton {
    container: Element;
    viewModel: Cesium$VRButtonViewModel;
    constructor(
      container: Element | string,
      scene: Cesium$Scene,
      vrElement: Element | string
    ): this;
    destroy(): void;
    isDestroyed(): boolean;
  }

  declare class Cesium$VRButtonViewModel {
    command: Cesium$Command;
    isVREnabled: boolean;
    isVRMode: boolean;
    tooltip: string;
    vrElement: Element;
    constructor(scene: Cesium$Scene, vrElement: Element | string): this;
    destroy(): void;
    isDestroyed(): boolean;
  }

  declare class Cesium$InfoBox {
    container: Element;
    viewModel: Cesium$InfoBoxViewModel;
    frame: HTMLIFrameElement;
    constructor(container: Element | string): this;
    isDestroyed(): boolean;
    destroy(): void;
  }

  declare class Cesium$InfoBoxViewModel {
    maxHeight: number;
    enableCamera: boolean;
    isCameraTracking: boolean;
    showInfo: boolean;
    titleText: string;
    description: string;
    cameraIconPath: string;
    cameraClicked: Cesium$Event;
    closeClicked: Cesium$Event;
    maxHeightOffset(offset: number): string;
  }

  declare class Cesium$NavigationHelpButton {
    container: Element;
    viewModel: Cesium$NavigationHelpButtonViewModel;
    constructor(options: {
      container: Element | string,
      instructionsInitiallyVisible?: boolean
    }): this;
    isDestroyed(): boolean;
    destroy(): void;
  }

  declare class Cesium$NavigationHelpButtonViewModel {
    showInstructions: boolean;
    tooltip: string;
    command: Cesium$Command;
    showClick: Cesium$Command;
    showTouch: Cesium$Command;
  }

  declare class Cesium$PerformanceWatchdog {
    container: Element;
    viewModel: Cesium$PerformanceWatchdogViewModel;
    constructor(options?: {
      container: Element | string,
      scene: Cesium$Scene,
      lowFrameRateMessage?: string
    }): this;
    isDestroyed(): boolean;
    destroy(): void;
  }

  declare class Cesium$PerformanceWatchdogViewModel {
    lowFrameRateMessage: string;
    lowFrameRateMessageDismissed: boolean;
    showingLowFrameRateMessage: boolean;
    scene: Cesium$Scene;
    dismissMessage: Cesium$Command;
    constructor(options?: {
      scene: Cesium$Scene,
      lowFrameRateMessage?: string
    }): this;
  }

  declare class Cesium$ProjectionPicker {
    container: Element;
    viewModel: Cesium$ProjectionPickerViewModel;
    constructor(container: Element | string, scene: Cesium$Scene): this;
    destroy(): void;
    isDestroyed(): boolean;
  }

  declare class Cesium$ProjectionPickerViewModel {
    dropDownVisible: boolean;
    isOrthographicProjection: Cesium$Command;
    scene: Cesium$Scene;
    sceneMode: Cesium$SceneMode;
    selectedTooltip: string;
    switchToOrthographic: Cesium$Command;
    switchToPerspective: Cesium$Command;
    toggleDropdown: Cesium$Command;
    tooltipOrthographic: string;
    tooltipPerspective: string;
    constructor(scene: Cesium$Scene): this;
    destroy(): void;
    isDestroyed(): boolean;
  }

  declare class Cesium$SceneModePicker {
    container: Element;
    viewModel: Cesium$SceneModePickerViewModel;
    constructor(
      container: Element | string,
      scene: Cesium$Scene,
      duration?: number
    ): this;
    isDestroyed(): boolean;
    destroy(): void;
  }

  declare class Cesium$SceneModePickerViewModel {
    sceneMode: Cesium$SceneMode;
    dropDownVisible: boolean;
    tooltip2D: string;
    tooltip3D: string;
    tooltipColumbusView: string;
    selectedTooltip: string;
    scene: Cesium$Scene;
    duration: number;
    toggleDropDown: Cesium$Command;
    morphTo2D: Cesium$Command;
    morphTo3D: Cesium$Command;
    morphToColumbusView: Cesium$Command;
    constructor(scene: Cesium$Scene, duration?: number): this;
    isDestroyed(): boolean;
    destroy(): void;
  }

  declare class Cesium$SelectionIndicator {
    container: Element;
    viewModel: Cesium$SelectionIndicatorViewModel;
    constructor(container: Element | string, scene: Cesium$Scene): this;
    isDestroyed(): boolean;
    destroy(): void;
  }

  declare class Cesium$SelectionIndicatorViewModel {
    position: Cesium$Cartesian3;
    showSelection: boolean;
    isVisible: boolean;
    computeScreenSpacePosition: Cesium$SelectionIndicatorViewModel.SelectionIndicatorViewModel$ComputeScreenSpacePosition;
    container: Element;
    selectionIndicatorElement: Element;
    scene: Cesium$Scene;
    constructor(
      scene: Cesium$Scene,
      selectionIndicatorElement: Element,
      container: Element
    ): this;
    update(): void;
    animateAppear(): void;
    animateDepart(): void;
  }

  declare type SelectionIndicatorViewModel$ComputeScreenSpacePosition = (
    position: Cesium$Cartesian3,
    result: Cesium$Cartesian2
  ) => Cesium$Cartesian2;

  declare class Cesium$Timeline {
    container: Element;
    constructor(container: Element, clock: Cesium$Clock): this;
    isDestroyed(): boolean;
    destroy(): void;
    zoomTo(startTime: Cesium$JulianDate, stopTime: Cesium$JulianDate): void;
    resize(): void;
  }

  declare class Cesium$ToggleButtonViewModel {
    toggled: boolean;
    tooltip: string;
    command: Cesium$Command;
    constructor(
      command: Cesium$Command,
      options?: {
        toggled?: boolean,
        tooltip?: string
      }
    ): this;
  }

  declare class Cesium$Viewer {
    container: Element;
    bottomContainer: Element;
    cesiumWidget: Cesium$CesiumWidget;
    selectionIndicator: Cesium$SelectionIndicator;
    infoBox: Cesium$InfoBox;
    geocoder: Cesium$Geocoder;
    homeButton: Cesium$HomeButton;
    sceneModePicker: Cesium$SceneModePicker;
    projectionPicker: Cesium$ProjectionPicker;
    navigationHelpButton: Cesium$NavigationHelpButton;
    baseLayerPicker: Cesium$BaseLayerPicker;
    animation: Cesium$Animation;
    timeline: Cesium$Timeline;
    fullscreenButton: Cesium$FullscreenButton;
    dataSourceDisplay: Cesium$DataSourceDisplay;
    entities: Cesium$EntityCollection;
    dataSources: Cesium$DataSourceCollection;
    canvas: HTMLCanvasElement;
    scene: Cesium$Scene;
    imageryLayers: Cesium$ImageryLayerCollection;
    terrainProvider: Cesium$TerrainProvider;
    terrainShadows: Cesium$ShadowMode;
    camera: Cesium$Camera;
    clockTrackedDataSource: Cesium$DataSource;
    clockViewModel: Cesium$ClockViewModel;
    clock: Cesium$Clock;
    screenSpaceEventHandler: Cesium$ScreenSpaceEventHandler;
    targetFrameRate: number;
    useDefaultRenderLoop: boolean;
    resolutionScale: number;
    allowDataSourcesToSuspendAnimation: boolean;
    trackedEntity: Cesium$Entity;
    selectedEntity: Cesium$Entity;
    trackedEntityChanged: Cesium$Event;
    selectedEntityChanged: Cesium$Event;
    shadowMap: Cesium$ShadowMap;
    vrButton: Cesium$VRButton;
    shadows: boolean;
    constructor(
      container: Element | string,
      options?: {
        animation?: boolean,
        baseLayerPicker?: boolean,
        fullscreenButton?: boolean,
        vrButton?: boolean,
        geocoder?: boolean,
        homeButton?: boolean,
        infoBox?: boolean,
        sceneModePicker?: boolean,
        selectionIndicator?: boolean,
        timeline?: boolean,
        navigationHelpButton?: boolean,
        navigationInstructionsInitiallyVisible?: boolean,
        scene3DOnly?: boolean,
        shouldAnimate?: boolean,
        clockViewModel?: Cesium$ClockViewModel,
        selectedImageryProviderViewModel?: Cesium$ProviderViewModel,
        imageryProviderViewModels?: Cesium$ProviderViewModel[],
        selectedTerrainProviderViewModel?: Cesium$ProviderViewModel,
        terrainProviderViewModels?: Cesium$ProviderViewModel[],
        imageryProvider?: Cesium$ImageryProvider,
        terrainProvider?: Cesium$TerrainProvider,
        skyBox?: Cesium$SkyBox,
        skyAtmosphere?: Cesium$SkyAtmosphere,
        fullscreenElement?: Element | string,
        useDefaultRenderLoop?: boolean,
        targetFrameRate?: number,
        showRenderLoopErrors?: boolean,
        automaticallyTrackDataSourceClocks?: boolean,
        contextOptions?: any,
        sceneMode?: Cesium$SceneMode,
        mapProjection?: Cesium$MapProjection,
        globe?: Cesium$Globe,
        orderIndependentTranslucency?: boolean,
        creditContainer?: Element | string,
        creditViewport?: Element | string,
        dataSources?: Cesium$DataSourceCollection,
        terrainExaggeration?: number,
        shadows?: boolean,
        terrainShadows?: Cesium$ShadowMode,
        mapMode2D?: Cesium$MapMode2D,
        projectionPicker?: boolean,
        requestRenderMode?: boolean,
        maximumRenderTimeChange?: number
      }
    ): this;
    extend(mixin: Cesium$Viewer.Viewer$ViewerMixin, options: any): void;
    resize(): void;
    forceResize(): void;
    render(): void;
    isDestroyed(): boolean;
    destroy(): void;
    zoomTo(
      target:
        | Cesium$Entity
        | Cesium$Entity[]
        | Cesium$EntityCollection
        | Cesium$DataSource
        | Promise<
            | Cesium$Entity
            | Cesium$Entity[]
            | Cesium$EntityCollection
            | Cesium$DataSource
          >,
      offset?: Cesium$HeadingPitchRange
    ): Promise<boolean>;
    flyTo(
      target:
        | Cesium$Entity
        | Cesium$Entity[]
        | Cesium$EntityCollection
        | Cesium$DataSource
        | Promise<
            | Cesium$Entity
            | Cesium$Entity[]
            | Cesium$EntityCollection
            | Cesium$DataSource
          >,
      options?: {
        duration?: number,
        maximumHeight?: number,
        offset?: Cesium$HeadingPitchRange
      }
    ): Promise<boolean>;
  }

  declare type Viewer$ViewerMixin = (
    viewer: Cesium$Viewer,
    options: any
  ) => void;

  declare function Cesium$barycentricCoordinates(
    point: Cesium$Cartesian2 | Cesium$Cartesian3,
    p0: Cesium$Cartesian2 | Cesium$Cartesian3,
    p1: Cesium$Cartesian2 | Cesium$Cartesian3,
    p2: Cesium$Cartesian2 | Cesium$Cartesian3,
    result?: Cesium$Cartesian3
  ): Cesium$Cartesian3;

  declare function Cesium$binarySearch(
    array: any[],
    itemToFind: any,
    comparator: Cesium$binarySearch.Queue$Comparator
  ): number;

  declare type binarySearch$Comparator = (a: any, b: any) => number;

  declare function Cesium$cancelAnimationFrame(requestID: number): void;

  declare function Cesium$clone(object: any, deep?: boolean): any;

  declare function Cesium$combine(
    object1?: any,
    object2?: any,
    deep?: boolean
  ): any;

  declare function Cesium$destroyObject(object: any, message?: string): void;

  declare function Cesium$formatError(object: any): string;

  declare function Cesium$getFilenameFromUri(uri: string): string;

  declare function Cesium$getImagePixels(image: HTMLImageElement): number[];

  declare function Cesium$isArray(value: any): boolean;

  declare function Cesium$isLeapYear(year: number): boolean;

  declare function Cesium$jsonp(
    url: string,
    options?: {
      parameters?: any,
      callbackParameterName?: string,
      proxy?: any
    }
  ): Promise<any>;

  declare function Cesium$loadArrayBuffer(
    url: string | Promise<string>,
    headers?: any
  ): Promise<ArrayBuffer>;

  declare function Cesium$loadBlob(
    url: string | Promise<string>,
    headers?: any
  ): Promise<Blob>;

  declare function Cesium$loadImage(
    url: string | Promise<string>,
    allowCrossOrigin?: boolean
  ): Promise<HTMLImageElement>;

  declare function Cesium$loadImageViaBlob(
    url: string | Promise<string>
  ): Promise<HTMLImageElement>;

  declare function Cesium$loadJson(
    url: string | Promise<string>,
    headers?: any
  ): Promise<any>;

  declare function Cesium$loadText(
    url: string | Promise<string>,
    headers?: any
  ): Promise<string>;

  declare function Cesium$loadWithXhr(options: {
    url: string | Promise<string>,
    responseType?: string,
    method?: string,
    data?: string,
    headers?: any,
    overrideMimeType?: string
  }): Promise<any>;

  declare function Cesium$loadXML(
    url: string | Promise<string>,
    headers?: any
  ): Promise<XMLDocument>;

  declare function Cesium$mergeSort(
    array: any[],
    comparator: Cesium$mergeSort.binarySearch$Comparator,
    userDefinedObject?: any
  ): void;

  declare type mergeSort$Comparator = (a: any, b: any) => number;

  declare function Cesium$objectToQuery(obj: any): string;

  declare function Cesium$pointInsideTriangle(
    point: Cesium$Cartesian2 | Cesium$Cartesian3,
    p0: Cesium$Cartesian2 | Cesium$Cartesian3,
    p1: Cesium$Cartesian2 | Cesium$Cartesian3,
    p2: Cesium$Cartesian2 | Cesium$Cartesian3
  ): boolean;

  declare function Cesium$queryToObject(queryString: string): any;

  declare function Cesium$requestAnimationFrame(
    callback: Cesium$requestAnimationFrame.EasingFunction$Callback
  ): number;

  declare type requestAnimationFrame$Callback = (
    time?: Cesium$JulianDate,
    result?: any
  ) => any;

  declare function Cesium$sampleTerrain(
    terrainProvider: Cesium$TerrainProvider,
    level: number,
    positions: Cesium$Cartographic[]
  ): Promise<Cesium$Cartographic[]>;

  declare function Cesium$subdivideArray(
    array: any[],
    numberOfArrays: number
  ): void;

  declare function Cesium$throttleRequestByServer(
    url: string,
    requestFunction: Cesium$throttleRequestByServer.throttleRequestByServer$RequestFunction
  ): Promise<any>;

  declare type throttleRequestByServer$RequestFunction = (
    url: string
  ) => Promise<any>;

  declare function Cesium$createTangentSpaceDebugPrimitive(options: {
    geometry: Cesium$Geometry,
    length?: number,
    modelMatrix?: Cesium$Matrix4
  }): Cesium$Primitive;

  declare function Cesium$viewerCesiumInspectorMixin(
    viewer: Cesium$Viewer
  ): void;

  declare function Cesium$viewerDragDropMixin(
    viewer: Cesium$Viewer,
    options?: {
      dropTarget?: Element | string,
      clearOnDrop?: boolean,
      flyToOnDrop?: boolean,
      clampToGround?: boolean,
      proxy?: Cesium$DefaultProxy
    }
  ): void;

  declare function Cesium$viewerPerformanceWatchdogMixin(
    viewer: Cesium$Viewer
  ): void;

  declare function Cesium$createCommand(
    func: () => any,
    canExecute?: boolean
  ): Cesium$Command;

  declare function Cesium$createTaskProcessorWorker(
    workerFunction: Cesium$createTaskProcessorWorker.createTaskProcessorWorker$WorkerFunction
  ): Cesium$createTaskProcessorWorker.createTaskProcessorWorker$TaskProcessorWorkerFunction;

  declare type createTaskProcessorWorker$WorkerFunction = (
    parameters: any,
    transferableObjects: any[]
  ) => any;

  declare type createTaskProcessorWorker$TaskProcessorWorkerFunction = (
    event: any
  ) => void;

  declare class Cesium$ClockRange {
    constructor(...args: empty): mixed;
    static +UNBOUNDED: Class<Cesium$ClockRange__UNBOUNDED> &
      Cesium$ClockRange__UNBOUNDED &
      0; // 0
    static +CLAMPED: Class<Cesium$ClockRange__CLAMPED> &
      Cesium$ClockRange__CLAMPED &
      1; // 1
    static +LOOP_STOP: Class<Cesium$ClockRange__LOOP_STOP> &
      Cesium$ClockRange__LOOP_STOP &
      2; // 2
  }

  declare class Cesium$ClockRange__UNBOUNDED mixins Cesium$ClockRange {}
  declare class Cesium$ClockRange__CLAMPED mixins Cesium$ClockRange {}
  declare class Cesium$ClockRange__LOOP_STOP mixins Cesium$ClockRange {}

  declare class Cesium$ClockStep {
    constructor(...args: empty): mixed;
    static +TICK_DEPENDENT: Class<Cesium$ClockStep__TICK_DEPENDENT> &
      Cesium$ClockStep__TICK_DEPENDENT &
      0; // 0
    static +SYSTEM_CLOCK_MULTIPLIER: Class<Cesium$ClockStep__SYSTEM_CLOCK_MULTIPLIER> &
      Cesium$ClockStep__SYSTEM_CLOCK_MULTIPLIER &
      1; // 1
    static +SYSTEM_CLOCK: Class<Cesium$ClockStep__SYSTEM_CLOCK> &
      Cesium$ClockStep__SYSTEM_CLOCK &
      2; // 2
  }

  declare class Cesium$ClockStep__TICK_DEPENDENT mixins Cesium$ClockStep {}
  declare class Cesium$ClockStep__SYSTEM_CLOCK_MULTIPLIER
    mixins Cesium$ClockStep {}
  declare class Cesium$ClockStep__SYSTEM_CLOCK mixins Cesium$ClockStep {}

  declare class Cesium$ComponentDatatype {
    constructor(...args: empty): mixed;
    static +BYTE: Class<Cesium$ComponentDatatype__BYTE> &
      Cesium$ComponentDatatype__BYTE &
      0; // 0
    static +UNSIGNED_BYTE: Class<Cesium$ComponentDatatype__UNSIGNED_BYTE> &
      Cesium$ComponentDatatype__UNSIGNED_BYTE &
      1; // 1
    static +SHORT: Class<Cesium$ComponentDatatype__SHORT> &
      Cesium$ComponentDatatype__SHORT &
      2; // 2
    static +UNSIGNED_SHORT: Class<Cesium$ComponentDatatype__UNSIGNED_SHORT> &
      Cesium$ComponentDatatype__UNSIGNED_SHORT &
      3; // 3
    static +FLOAT: Class<Cesium$ComponentDatatype__FLOAT> &
      Cesium$ComponentDatatype__FLOAT &
      4; // 4
    static +DOUBLE: Class<Cesium$ComponentDatatype__DOUBLE> &
      Cesium$ComponentDatatype__DOUBLE &
      5; // 5
  }

  declare class Cesium$ComponentDatatype__BYTE
    mixins Cesium$ComponentDatatype {}
  declare class Cesium$ComponentDatatype__UNSIGNED_BYTE
    mixins Cesium$ComponentDatatype {}
  declare class Cesium$ComponentDatatype__SHORT
    mixins Cesium$ComponentDatatype {}
  declare class Cesium$ComponentDatatype__UNSIGNED_SHORT
    mixins Cesium$ComponentDatatype {}
  declare class Cesium$ComponentDatatype__FLOAT
    mixins Cesium$ComponentDatatype {}
  declare class Cesium$ComponentDatatype__DOUBLE
    mixins Cesium$ComponentDatatype {}

  declare var npm$namespace$ComponentDatatype: {
    getSizeInBytes: typeof ComponentDatatype$getSizeInBytes,
    fromTypedArray: typeof ComponentDatatype$fromTypedArray,
    validate: typeof ComponentDatatype$validate,
    createTypedArray: typeof ComponentDatatype$createTypedArray,
    createArrayBufferView: typeof ComponentDatatype$createArrayBufferView
  };
  declare function ComponentDatatype$getSizeInBytes(
    componentDatatype: Cesium$ComponentDatatype
  ): number;

  declare function ComponentDatatype$fromTypedArray(
    array:
      | Int8Array
      | Uint8Array
      | Int16Array
      | Uint16Array
      | Float32Array
      | Float64Array
  ): Cesium$ComponentDatatype;

  declare function ComponentDatatype$validate(
    componentDatatype: Cesium$ComponentDatatype
  ): boolean;

  declare function ComponentDatatype$createTypedArray(
    componentDatatype: Cesium$ComponentDatatype,
    valuesOrLength: number | any[]
  ):
    | Int8Array
    | Uint8Array
    | Int16Array
    | Uint16Array
    | Float32Array
    | Float64Array;

  declare function ComponentDatatype$createArrayBufferView(
    componentDatatype: Cesium$ComponentDatatype,
    buffer: ArrayBuffer,
    byteOffset?: number,
    length?: number
  ):
    | Int8Array
    | Uint8Array
    | Int16Array
    | Uint16Array
    | Float32Array
    | Float64Array;

  declare class Cesium$CornerType {
    constructor(...args: empty): mixed;
    static +ROUNDED: Class<Cesium$CornerType__ROUNDED> &
      Cesium$CornerType__ROUNDED &
      0; // 0
    static +MITERED: Class<Cesium$CornerType__MITERED> &
      Cesium$CornerType__MITERED &
      1; // 1
    static +BEVELED: Class<Cesium$CornerType__BEVELED> &
      Cesium$CornerType__BEVELED &
      2; // 2
  }

  declare class Cesium$CornerType__ROUNDED mixins Cesium$CornerType {}
  declare class Cesium$CornerType__MITERED mixins Cesium$CornerType {}
  declare class Cesium$CornerType__BEVELED mixins Cesium$CornerType {}

  declare var npm$namespace$CubicRealPolynomial: {
    computeDiscriminant: typeof CubicRealPolynomial$computeDiscriminant,
    computeRealRoots: typeof CubicRealPolynomial$computeRealRoots
  };
  declare function CubicRealPolynomial$computeDiscriminant(
    a: number,
    b: number,
    c: number,
    d: number
  ): number;

  declare function CubicRealPolynomial$computeRealRoots(
    a: number,
    b: number,
    c: number,
    d: number
  ): number[];

  declare class Cesium$ExtrapolationType {
    constructor(...args: empty): mixed;
    static +NONE: Class<Cesium$ExtrapolationType__NONE> &
      Cesium$ExtrapolationType__NONE &
      0; // 0
    static +HOLD: Class<Cesium$ExtrapolationType__HOLD> &
      Cesium$ExtrapolationType__HOLD &
      1; // 1
    static +EXTRAPOLATE: Class<Cesium$ExtrapolationType__EXTRAPOLATE> &
      Cesium$ExtrapolationType__EXTRAPOLATE &
      2; // 2
  }

  declare class Cesium$ExtrapolationType__NONE
    mixins Cesium$ExtrapolationType {}
  declare class Cesium$ExtrapolationType__HOLD
    mixins Cesium$ExtrapolationType {}
  declare class Cesium$ExtrapolationType__EXTRAPOLATE
    mixins Cesium$ExtrapolationType {}

  declare var npm$namespace$FeatureDetection: {
    supportsFullscreen: typeof FeatureDetection$supportsFullscreen,
    supportsTypedArrays: typeof FeatureDetection$supportsTypedArrays,
    supportsWebAssembly: typeof FeatureDetection$supportsWebAssembly,
    supportsWebWorkers: typeof FeatureDetection$supportsWebWorkers
  };
  declare function FeatureDetection$supportsFullscreen(): boolean;

  declare function FeatureDetection$supportsTypedArrays(): boolean;

  declare function FeatureDetection$supportsWebAssembly(): boolean;

  declare function FeatureDetection$supportsWebWorkers(): boolean;

  declare class Cesium$Fullscreen {
    constructor(...args: empty): mixed;
    static +element: Class<Cesium$Fullscreen__element> &
      Cesium$Fullscreen__element &
      0; // 0
    static +changeEventName: Class<Cesium$Fullscreen__changeEventName> &
      Cesium$Fullscreen__changeEventName &
      1; // 1
    static +errorEventName: Class<Cesium$Fullscreen__errorEventName> &
      Cesium$Fullscreen__errorEventName &
      2; // 2
    static +enabled: Class<Cesium$Fullscreen__enabled> &
      Cesium$Fullscreen__enabled &
      3; // 3
    static +fullscreen: Class<Cesium$Fullscreen__fullscreen> &
      Cesium$Fullscreen__fullscreen &
      4; // 4
  }

  declare class Cesium$Fullscreen__element mixins Cesium$Fullscreen {}
  declare class Cesium$Fullscreen__changeEventName mixins Cesium$Fullscreen {}
  declare class Cesium$Fullscreen__errorEventName mixins Cesium$Fullscreen {}
  declare class Cesium$Fullscreen__enabled mixins Cesium$Fullscreen {}
  declare class Cesium$Fullscreen__fullscreen mixins Cesium$Fullscreen {}

  declare var npm$namespace$Fullscreen: {
    supportsFullscreen: typeof Fullscreen$supportsFullscreen,
    requestFullscreen: typeof Fullscreen$requestFullscreen,
    exitFullscreen: typeof Fullscreen$exitFullscreen
  };
  declare function Fullscreen$supportsFullscreen(): boolean;

  declare function Fullscreen$requestFullscreen(element: any): void;

  declare function Fullscreen$exitFullscreen(): void;

  declare var npm$namespace$GeometryPipeline: {
    toWireframe: typeof GeometryPipeline$toWireframe,
    createLineSegmentsForVectors: typeof GeometryPipeline$createLineSegmentsForVectors,
    createAttributeLocations: typeof GeometryPipeline$createAttributeLocations,
    reorderForPreVertexCache: typeof GeometryPipeline$reorderForPreVertexCache,
    reorderForPostVertexCache: typeof GeometryPipeline$reorderForPostVertexCache,
    fitToUnsignedShortIndices: typeof GeometryPipeline$fitToUnsignedShortIndices,
    projectTo2D: typeof GeometryPipeline$projectTo2D,
    encodeAttribute: typeof GeometryPipeline$encodeAttribute,
    transformToWorldCoordinates: typeof GeometryPipeline$transformToWorldCoordinates,
    computeNormal: typeof GeometryPipeline$computeNormal,
    computeBinormalAndTangent: typeof GeometryPipeline$computeBinormalAndTangent,
    compressVertices: typeof GeometryPipeline$compressVertices
  };
  declare function GeometryPipeline$toWireframe(
    geometry: Cesium$Geometry
  ): Cesium$Geometry;

  declare function GeometryPipeline$createLineSegmentsForVectors(
    geometry: Cesium$Geometry,
    attributeName?: string,
    length?: number
  ): Cesium$Geometry;

  declare function GeometryPipeline$createAttributeLocations(
    geometry: Cesium$Geometry
  ): any;

  declare function GeometryPipeline$reorderForPreVertexCache(
    geometry: Cesium$Geometry
  ): Cesium$Geometry;

  declare function GeometryPipeline$reorderForPostVertexCache(
    geometry: Cesium$Geometry,
    cacheCapacity?: number
  ): Cesium$Geometry;

  declare function GeometryPipeline$fitToUnsignedShortIndices(
    geometry: Cesium$Geometry
  ): Cesium$Geometry[];

  declare function GeometryPipeline$projectTo2D(
    geometry: Cesium$Geometry,
    attributeName: string,
    attributeName3D: string,
    attributeName2D: string,
    projection?: any
  ): Cesium$Geometry;

  declare function GeometryPipeline$encodeAttribute(
    geometry: Cesium$Geometry,
    attributeName: string,
    attributeHighName: string,
    attributeLowName: string
  ): Cesium$Geometry;

  declare function GeometryPipeline$transformToWorldCoordinates(
    instance: Cesium$GeometryInstance
  ): Cesium$GeometryInstance;

  declare function GeometryPipeline$computeNormal(
    geometry: Cesium$Geometry
  ): Cesium$Geometry;

  declare function GeometryPipeline$computeBinormalAndTangent(
    geometry: Cesium$Geometry
  ): Cesium$Geometry;

  declare function GeometryPipeline$compressVertices(
    geometry: Cesium$Geometry
  ): Cesium$Geometry;

  declare class Cesium$HeightmapTessellator {
    constructor(...args: empty): mixed;
    static +DEFAULT_STRUCTURE: Class<Cesium$HeightmapTessellator__DEFAULT_STRUCTURE> &
      Cesium$HeightmapTessellator__DEFAULT_STRUCTURE &
      0; // 0
  }

  declare class Cesium$HeightmapTessellator__DEFAULT_STRUCTURE
    mixins Cesium$HeightmapTessellator {}

  declare var npm$namespace$HeightmapTessellator: {
    computeVertices: typeof HeightmapTessellator$computeVertices
  };
  declare function HeightmapTessellator$computeVertices(options: {
    vertices: any[] | Float32Array,
    heightmap:
      | Int8Array
      | Uint8Array
      | Int16Array
      | Uint16Array
      | Float32Array
      | Float64Array,
    width: number,
    height: number,
    skirtHeight: number,
    nativeRectangle: Cesium$Rectangle,
    rectangle?: Cesium$Rectangle,
    isGeographic?: boolean,
    relativetoCenter?: Cesium$Cartesian3,
    ellipsoid?: Cesium$Ellipsoid,
    structure?: any,
    structureheightScale?: number,
    structureheightOffset?: number,
    structureelementsPerHeight?: number,
    structurestride?: number,
    structureelementMultiplier?: number,
    structureisBigEndian?: boolean
  }): void;

  declare class Cesium$HeightReference {
    constructor(...args: empty): mixed;
    static +CLAMP_TO_GROUND: Class<Cesium$HeightReference__CLAMP_TO_GROUND> &
      Cesium$HeightReference__CLAMP_TO_GROUND &
      0; // 0
    static +NONE: Class<Cesium$HeightReference__NONE> &
      Cesium$HeightReference__NONE &
      1; // 1
    static +RELATIVE_TO_GROUND: Class<Cesium$HeightReference__RELATIVE_TO_GROUND> &
      Cesium$HeightReference__RELATIVE_TO_GROUND &
      2; // 2
  }

  declare class Cesium$HeightReference__CLAMP_TO_GROUND
    mixins Cesium$HeightReference {}
  declare class Cesium$HeightReference__NONE mixins Cesium$HeightReference {}
  declare class Cesium$HeightReference__RELATIVE_TO_GROUND
    mixins Cesium$HeightReference {}

  declare class Cesium$HermitePolynomialApproximation
    mixins Cesium$InterpolationAlgorithm {
    static getRequiredDataPoints(degree: number, inputOrder?: number): number;
  }

  declare class Cesium$IndexDatatype {
    constructor(...args: empty): mixed;
    static +UNSIGNED_BYTE: Class<Cesium$IndexDatatype__UNSIGNED_BYTE> &
      Cesium$IndexDatatype__UNSIGNED_BYTE &
      0; // 0
    static +UNSIGNED_SHORT: Class<Cesium$IndexDatatype__UNSIGNED_SHORT> &
      Cesium$IndexDatatype__UNSIGNED_SHORT &
      1; // 1
    static +UNSIGNED_INT: Class<Cesium$IndexDatatype__UNSIGNED_INT> &
      Cesium$IndexDatatype__UNSIGNED_INT &
      2; // 2
  }

  declare class Cesium$IndexDatatype__UNSIGNED_BYTE
    mixins Cesium$IndexDatatype {}
  declare class Cesium$IndexDatatype__UNSIGNED_SHORT
    mixins Cesium$IndexDatatype {}
  declare class Cesium$IndexDatatype__UNSIGNED_INT
    mixins Cesium$IndexDatatype {}

  declare var npm$namespace$IndexDatatype: {
    getSizeInBytes: typeof IndexDatatype$getSizeInBytes,
    validate: typeof IndexDatatype$validate,
    createTypedArray: typeof IndexDatatype$createTypedArray,
    createTypedArrayFromArrayBuffer: typeof IndexDatatype$createTypedArrayFromArrayBuffer
  };
  declare function IndexDatatype$getSizeInBytes(
    indexDatatype: Cesium$IndexDatatype
  ): number;

  declare function IndexDatatype$validate(
    indexDatatype: Cesium$IndexDatatype
  ): boolean;

  declare function IndexDatatype$createTypedArray(
    numberOfVertices: number,
    indicesLengthOrArray: any
  ): Uint16Array | Uint32Array;

  declare function IndexDatatype$createTypedArrayFromArrayBuffer(
    numberOfVertices: number,
    sourceArray: ArrayBuffer,
    byteOffset: number,
    length: number
  ): Uint16Array | Uint32Array;

  declare class Cesium$InterpolationAlgorithm {
    static type: string;
    static getRequiredDataPoints(degree: number): number;
    static interpolateOrderZero(
      x: number,
      xTable: number[],
      yTable: number[],
      yStride: number,
      result?: number[]
    ): number[];
    static interpolate(
      x: number,
      xTable: number[],
      yTable: number[],
      yStride: number,
      inputOrder: number,
      outputOrder: number,
      result?: number[]
    ): number[];
  }

  declare class Cesium$Intersect {
    constructor(...args: empty): mixed;
    static +OUTSIDE: Class<Cesium$Intersect__OUTSIDE> &
      Cesium$Intersect__OUTSIDE &
      0; // 0
    static +INTERSECTING: Class<Cesium$Intersect__INTERSECTING> &
      Cesium$Intersect__INTERSECTING &
      1; // 1
    static +INSIDE: Class<Cesium$Intersect__INSIDE> &
      Cesium$Intersect__INSIDE &
      2; // 2
  }

  declare class Cesium$Intersect__OUTSIDE mixins Cesium$Intersect {}
  declare class Cesium$Intersect__INTERSECTING mixins Cesium$Intersect {}
  declare class Cesium$Intersect__INSIDE mixins Cesium$Intersect {}

  declare var npm$namespace$IntersectionTests: {
    rayPlane: typeof IntersectionTests$rayPlane,
    rayTriangle: typeof IntersectionTests$rayTriangle,
    lineSegmentTriangle: typeof IntersectionTests$lineSegmentTriangle,
    raySphere: typeof IntersectionTests$raySphere,
    lineSegmentSphere: typeof IntersectionTests$lineSegmentSphere,
    rayEllipsoid: typeof IntersectionTests$rayEllipsoid,
    grazingAltitudeLocation: typeof IntersectionTests$grazingAltitudeLocation,
    lineSegmentPlane: typeof IntersectionTests$lineSegmentPlane,
    trianglePlaneIntersection: typeof IntersectionTests$trianglePlaneIntersection
  };
  declare function IntersectionTests$rayPlane(
    ray: Cesium$Ray,
    plane: Cesium$Plane,
    result?: Cesium$Cartesian3
  ): Cesium$Cartesian3;

  declare function IntersectionTests$rayTriangle(
    ray: Cesium$Ray,
    p0: Cesium$Cartesian3,
    p1: Cesium$Cartesian3,
    p2: Cesium$Cartesian3,
    cullBackFaces?: boolean,
    result?: Cesium$Cartesian3
  ): Cesium$Cartesian3;

  declare function IntersectionTests$lineSegmentTriangle(
    v0: Cesium$Cartesian3,
    v1: Cesium$Cartesian3,
    p0: Cesium$Cartesian3,
    p1: Cesium$Cartesian3,
    p2: Cesium$Cartesian3,
    cullBackFaces?: boolean,
    result?: Cesium$Cartesian3
  ): Cesium$Cartesian3;

  declare function IntersectionTests$raySphere(
    ray: Cesium$Ray,
    sphere: Cesium$BoundingSphere,
    result?: any
  ): any;

  declare function IntersectionTests$lineSegmentSphere(
    p0: Cesium$Cartesian3,
    p1: Cesium$Cartesian3,
    sphere: Cesium$BoundingSphere,
    result?: any
  ): any;

  declare function IntersectionTests$rayEllipsoid(
    ray: Cesium$Ray,
    ellipsoid: Cesium$Ellipsoid
  ): any;

  declare function IntersectionTests$grazingAltitudeLocation(
    ray: Cesium$Ray,
    ellipsoid: Cesium$Ellipsoid
  ): Cesium$Cartesian3;

  declare function IntersectionTests$lineSegmentPlane(
    endPoint0: Cesium$Cartesian3,
    endPoint1: Cesium$Cartesian3,
    plane: Cesium$Plane,
    result?: Cesium$Cartesian3
  ): Cesium$Cartesian3;

  declare function IntersectionTests$trianglePlaneIntersection(
    p0: Cesium$Cartesian3,
    p1: Cesium$Cartesian3,
    p2: Cesium$Cartesian3,
    plane: Cesium$Plane
  ): any;

  declare var npm$namespace$Intersections2D: {
    clipTriangleAtAxisAlignedThreshold: typeof Intersections2D$clipTriangleAtAxisAlignedThreshold,
    computeBarycentricCoordinates: typeof Intersections2D$computeBarycentricCoordinates
  };
  declare function Intersections2D$clipTriangleAtAxisAlignedThreshold(
    threshold: number,
    keepAbove: boolean,
    u0: number,
    u1: number,
    u2: number,
    result?: number[]
  ): number[];

  declare function Intersections2D$computeBarycentricCoordinates(
    x: number,
    y: number,
    x1: number,
    y1: number,
    x2: number,
    y2: number,
    x3: number,
    y3: number,
    result?: Cesium$Cartesian3
  ): Cesium$Cartesian3;

  declare class Cesium$Iso8601 {
    constructor(...args: empty): mixed;
    static +MINIMUM_VALUE: Class<Cesium$Iso8601__MINIMUM_VALUE> &
      Cesium$Iso8601__MINIMUM_VALUE &
      0; // 0
    static +MAXIMUM_VALUE: Class<Cesium$Iso8601__MAXIMUM_VALUE> &
      Cesium$Iso8601__MAXIMUM_VALUE &
      1; // 1
    static +MAXIMUM_INTERVAL: Class<Cesium$Iso8601__MAXIMUM_INTERVAL> &
      Cesium$Iso8601__MAXIMUM_INTERVAL &
      2; // 2
  }

  declare class Cesium$Iso8601__MINIMUM_VALUE mixins Cesium$Iso8601 {}
  declare class Cesium$Iso8601__MAXIMUM_VALUE mixins Cesium$Iso8601 {}
  declare class Cesium$Iso8601__MAXIMUM_INTERVAL mixins Cesium$Iso8601 {}

  declare class Cesium$KeyboardEventModifier {
    constructor(...args: empty): mixed;
    static +SHIFT: Class<Cesium$KeyboardEventModifier__SHIFT> &
      Cesium$KeyboardEventModifier__SHIFT &
      0; // 0
    static +CTRL: Class<Cesium$KeyboardEventModifier__CTRL> &
      Cesium$KeyboardEventModifier__CTRL &
      1; // 1
    static +ALT: Class<Cesium$KeyboardEventModifier__ALT> &
      Cesium$KeyboardEventModifier__ALT &
      2; // 2
  }

  declare class Cesium$KeyboardEventModifier__SHIFT
    mixins Cesium$KeyboardEventModifier {}
  declare class Cesium$KeyboardEventModifier__CTRL
    mixins Cesium$KeyboardEventModifier {}
  declare class Cesium$KeyboardEventModifier__ALT
    mixins Cesium$KeyboardEventModifier {}

  declare class Cesium$LagrangePolynomialApproximation
    mixins Cesium$InterpolationAlgorithm {}

  declare class Cesium$LinearApproximation
    mixins Cesium$InterpolationAlgorithm {}

  declare class Cesium$MapMode2D {
    constructor(...args: empty): mixed;
    static +INFINITE_SCROLL: Class<Cesium$MapMode2D__INFINITE_SCROLL> &
      Cesium$MapMode2D__INFINITE_SCROLL &
      0; // 0
    static +ROTATE: Class<Cesium$MapMode2D__ROTATE> &
      Cesium$MapMode2D__ROTATE &
      1; // 1
  }

  declare class Cesium$MapMode2D__INFINITE_SCROLL mixins Cesium$MapMode2D {}
  declare class Cesium$MapMode2D__ROTATE mixins Cesium$MapMode2D {}

  declare class Cesium$Math {
    constructor(...args: empty): mixed;
    static +EPSILON1: Class<Cesium$Math__EPSILON1> & Cesium$Math__EPSILON1 & 0; // 0
    static +EPSILON2: Class<Cesium$Math__EPSILON2> & Cesium$Math__EPSILON2 & 1; // 1
    static +EPSILON3: Class<Cesium$Math__EPSILON3> & Cesium$Math__EPSILON3 & 2; // 2
    static +EPSILON4: Class<Cesium$Math__EPSILON4> & Cesium$Math__EPSILON4 & 3; // 3
    static +EPSILON5: Class<Cesium$Math__EPSILON5> & Cesium$Math__EPSILON5 & 4; // 4
    static +EPSILON6: Class<Cesium$Math__EPSILON6> & Cesium$Math__EPSILON6 & 5; // 5
    static +EPSILON7: Class<Cesium$Math__EPSILON7> & Cesium$Math__EPSILON7 & 6; // 6
    static +EPSILON8: Class<Cesium$Math__EPSILON8> & Cesium$Math__EPSILON8 & 7; // 7
    static +EPSILON9: Class<Cesium$Math__EPSILON9> & Cesium$Math__EPSILON9 & 8; // 8
    static +EPSILON10: Class<Cesium$Math__EPSILON10> &
      Cesium$Math__EPSILON10 &
      9; // 9
    static +EPSILON11: Class<Cesium$Math__EPSILON11> &
      Cesium$Math__EPSILON11 &
      10; // 10
    static +EPSILON12: Class<Cesium$Math__EPSILON12> &
      Cesium$Math__EPSILON12 &
      11; // 11
    static +EPSILON13: Class<Cesium$Math__EPSILON13> &
      Cesium$Math__EPSILON13 &
      12; // 12
    static +EPSILON14: Class<Cesium$Math__EPSILON14> &
      Cesium$Math__EPSILON14 &
      13; // 13
    static +EPSILON15: Class<Cesium$Math__EPSILON15> &
      Cesium$Math__EPSILON15 &
      14; // 14
    static +EPSILON16: Class<Cesium$Math__EPSILON16> &
      Cesium$Math__EPSILON16 &
      15; // 15
    static +EPSILON17: Class<Cesium$Math__EPSILON17> &
      Cesium$Math__EPSILON17 &
      16; // 16
    static +EPSILON18: Class<Cesium$Math__EPSILON18> &
      Cesium$Math__EPSILON18 &
      17; // 17
    static +EPSILON19: Class<Cesium$Math__EPSILON19> &
      Cesium$Math__EPSILON19 &
      18; // 18
    static +EPSILON20: Class<Cesium$Math__EPSILON20> &
      Cesium$Math__EPSILON20 &
      19; // 19
    static +GRAVITATIONALPARAMETER: Class<Cesium$Math__GRAVITATIONALPARAMETER> &
      Cesium$Math__GRAVITATIONALPARAMETER &
      20; // 20
    static +SOLAR_RADIUS: Class<Cesium$Math__SOLAR_RADIUS> &
      Cesium$Math__SOLAR_RADIUS &
      21; // 21
    static +LUNAR_RADIUS: Class<Cesium$Math__LUNAR_RADIUS> &
      Cesium$Math__LUNAR_RADIUS &
      22; // 22
    static +SIXTY_FOUR_KILOBYTES: Class<Cesium$Math__SIXTY_FOUR_KILOBYTES> &
      Cesium$Math__SIXTY_FOUR_KILOBYTES &
      23; // 23
    static +PI: Class<Cesium$Math__PI> & Cesium$Math__PI & 24; // 24
    static +ONE_OVER_PI: Class<Cesium$Math__ONE_OVER_PI> &
      Cesium$Math__ONE_OVER_PI &
      25; // 25
    static +PI_OVER_TWO: Class<Cesium$Math__PI_OVER_TWO> &
      Cesium$Math__PI_OVER_TWO &
      26; // 26
    static +PI_OVER_THREE: Class<Cesium$Math__PI_OVER_THREE> &
      Cesium$Math__PI_OVER_THREE &
      27; // 27
    static +PI_OVER_FOUR: Class<Cesium$Math__PI_OVER_FOUR> &
      Cesium$Math__PI_OVER_FOUR &
      28; // 28
    static +PI_OVER_SIX: Class<Cesium$Math__PI_OVER_SIX> &
      Cesium$Math__PI_OVER_SIX &
      29; // 29
    static +THREE_PI_OVER_TWO: Class<Cesium$Math__THREE_PI_OVER_TWO> &
      Cesium$Math__THREE_PI_OVER_TWO &
      30; // 30
    static +TWO_PI: Class<Cesium$Math__TWO_PI> & Cesium$Math__TWO_PI & 31; // 31
    static +ONE_OVER_TWO_PI: Class<Cesium$Math__ONE_OVER_TWO_PI> &
      Cesium$Math__ONE_OVER_TWO_PI &
      32; // 32
    static +RADIANS_PER_DEGREE: Class<Cesium$Math__RADIANS_PER_DEGREE> &
      Cesium$Math__RADIANS_PER_DEGREE &
      33; // 33
    static +DEGREES_PER_RADIAN: Class<Cesium$Math__DEGREES_PER_RADIAN> &
      Cesium$Math__DEGREES_PER_RADIAN &
      34; // 34
    static +RADIANS_PER_ARCSECOND: Class<Cesium$Math__RADIANS_PER_ARCSECOND> &
      Cesium$Math__RADIANS_PER_ARCSECOND &
      35; // 35
  }

  declare class Cesium$Math__EPSILON1 mixins Cesium$Math {}
  declare class Cesium$Math__EPSILON2 mixins Cesium$Math {}
  declare class Cesium$Math__EPSILON3 mixins Cesium$Math {}
  declare class Cesium$Math__EPSILON4 mixins Cesium$Math {}
  declare class Cesium$Math__EPSILON5 mixins Cesium$Math {}
  declare class Cesium$Math__EPSILON6 mixins Cesium$Math {}
  declare class Cesium$Math__EPSILON7 mixins Cesium$Math {}
  declare class Cesium$Math__EPSILON8 mixins Cesium$Math {}
  declare class Cesium$Math__EPSILON9 mixins Cesium$Math {}
  declare class Cesium$Math__EPSILON10 mixins Cesium$Math {}
  declare class Cesium$Math__EPSILON11 mixins Cesium$Math {}
  declare class Cesium$Math__EPSILON12 mixins Cesium$Math {}
  declare class Cesium$Math__EPSILON13 mixins Cesium$Math {}
  declare class Cesium$Math__EPSILON14 mixins Cesium$Math {}
  declare class Cesium$Math__EPSILON15 mixins Cesium$Math {}
  declare class Cesium$Math__EPSILON16 mixins Cesium$Math {}
  declare class Cesium$Math__EPSILON17 mixins Cesium$Math {}
  declare class Cesium$Math__EPSILON18 mixins Cesium$Math {}
  declare class Cesium$Math__EPSILON19 mixins Cesium$Math {}
  declare class Cesium$Math__EPSILON20 mixins Cesium$Math {}
  declare class Cesium$Math__GRAVITATIONALPARAMETER mixins Cesium$Math {}
  declare class Cesium$Math__SOLAR_RADIUS mixins Cesium$Math {}
  declare class Cesium$Math__LUNAR_RADIUS mixins Cesium$Math {}
  declare class Cesium$Math__SIXTY_FOUR_KILOBYTES mixins Cesium$Math {}
  declare class Cesium$Math__PI mixins Cesium$Math {}
  declare class Cesium$Math__ONE_OVER_PI mixins Cesium$Math {}
  declare class Cesium$Math__PI_OVER_TWO mixins Cesium$Math {}
  declare class Cesium$Math__PI_OVER_THREE mixins Cesium$Math {}
  declare class Cesium$Math__PI_OVER_FOUR mixins Cesium$Math {}
  declare class Cesium$Math__PI_OVER_SIX mixins Cesium$Math {}
  declare class Cesium$Math__THREE_PI_OVER_TWO mixins Cesium$Math {}
  declare class Cesium$Math__TWO_PI mixins Cesium$Math {}
  declare class Cesium$Math__ONE_OVER_TWO_PI mixins Cesium$Math {}
  declare class Cesium$Math__RADIANS_PER_DEGREE mixins Cesium$Math {}
  declare class Cesium$Math__DEGREES_PER_RADIAN mixins Cesium$Math {}
  declare class Cesium$Math__RADIANS_PER_ARCSECOND mixins Cesium$Math {}

  declare var npm$namespace$Math: {
    sign: typeof Math$sign,
    signNotZero: typeof Math$signNotZero,
    toSNorm: typeof Math$toSNorm,
    fromSNorm: typeof Math$fromSNorm,
    sinh: typeof Math$sinh,
    cosh: typeof Math$cosh,
    lerp: typeof Math$lerp,
    toRadians: typeof Math$toRadians,
    toDegrees: typeof Math$toDegrees,
    convertLongitudeRange: typeof Math$convertLongitudeRange,
    negativePiToPi: typeof Math$negativePiToPi,
    zeroToTwoPi: typeof Math$zeroToTwoPi,
    mod: typeof Math$mod,
    equalsEpsilon: typeof Math$equalsEpsilon,
    factorial: typeof Math$factorial,
    incrementWrap: typeof Math$incrementWrap,
    isPowerOfTwo: typeof Math$isPowerOfTwo,
    nextPowerOfTwo: typeof Math$nextPowerOfTwo,
    clamp: typeof Math$clamp,
    setRandomNumberSeed: typeof Math$setRandomNumberSeed,
    nextRandomNumber: typeof Math$nextRandomNumber,
    acosClamped: typeof Math$acosClamped,
    asinClamped: typeof Math$asinClamped,
    chordLength: typeof Math$chordLength
  };
  declare function Math$sign(value: number): number;

  declare function Math$signNotZero(value: number): number;

  declare function Math$toSNorm(value: number): number;

  declare function Math$fromSNorm(value: number): number;

  declare function Math$sinh(value: number): number;

  declare function Math$cosh(value: number): number;

  declare function Math$lerp(p: number, q: number, time: number): number;

  declare function Math$toRadians(degrees: number): number;

  declare function Math$toDegrees(radians: number): number;

  declare function Math$convertLongitudeRange(angle: number): number;

  declare function Math$negativePiToPi(angle: number): number;

  declare function Math$zeroToTwoPi(angle: number): number;

  declare function Math$mod(m: number, n: number): number;

  declare function Math$equalsEpsilon(
    left: number,
    right: number,
    relativeEpsilon: number,
    absoluteEpsilon?: number
  ): boolean;

  declare function Math$factorial(n: number): number;

  declare function Math$incrementWrap(
    n?: number,
    maximumValue?: number,
    minimumValue?: number
  ): number;

  declare function Math$isPowerOfTwo(n: number): boolean;

  declare function Math$nextPowerOfTwo(n: number): number;

  declare function Math$clamp(value: number, min: number, max: number): number;

  declare function Math$setRandomNumberSeed(seed: number): void;

  declare function Math$nextRandomNumber(): number;

  declare function Math$acosClamped(value: number): number;

  declare function Math$asinClamped(value: number): number;

  declare function Math$chordLength(angle: number, radius: number): number;

  declare class Cesium$Packable {
    static packedLength: number;
    static pack(value: any, array: number[], startingIndex?: number): number[];
    static unpack(
      array: number[],
      startingIndex?: number,
      result?: any
    ): Cesium$Packable;
  }

  declare class Cesium$PackableForInterpolation {
    constructor(...args: empty): mixed;
    static +packedInterpolationLength: Class<Cesium$PackableForInterpolation__packedInterpolationLength> &
      Cesium$PackableForInterpolation__packedInterpolationLength &
      0; // 0
  }

  declare class Cesium$PackableForInterpolation__packedInterpolationLength
    mixins Cesium$PackableForInterpolation {}

  declare var npm$namespace$PackableForInterpolation: {
    convertPackedArrayForInterpolation: typeof PackableForInterpolation$convertPackedArrayForInterpolation,
    unpackInterpolationResult: typeof PackableForInterpolation$unpackInterpolationResult
  };
  declare function PackableForInterpolation$convertPackedArrayForInterpolation(
    packedArray: number[],
    startingIndex?: number,
    lastIndex?: number,
    result?: number[]
  ): number[];

  declare function PackableForInterpolation$unpackInterpolationResult(
    array: number[],
    sourceArray: number[],
    startingIndex?: number,
    lastIndex?: number,
    result?: any
  ): any;

  declare class Cesium$PixelFormat {
    constructor(...args: empty): mixed;
    static +DEPTH_COMPONENT: Class<Cesium$PixelFormat__DEPTH_COMPONENT> &
      Cesium$PixelFormat__DEPTH_COMPONENT &
      0; // 0
    static +DEPTH_STENCIL: Class<Cesium$PixelFormat__DEPTH_STENCIL> &
      Cesium$PixelFormat__DEPTH_STENCIL &
      1; // 1
    static +ALPHA: Class<Cesium$PixelFormat__ALPHA> &
      Cesium$PixelFormat__ALPHA &
      2; // 2
    static +RGB: Class<Cesium$PixelFormat__RGB> & Cesium$PixelFormat__RGB & 3; // 3
    static +RGBA: Class<Cesium$PixelFormat__RGBA> &
      Cesium$PixelFormat__RGBA &
      4; // 4
    static +LUMINANCE: Class<Cesium$PixelFormat__LUMINANCE> &
      Cesium$PixelFormat__LUMINANCE &
      5; // 5
    static +LUMINANCE_ALPHA: Class<Cesium$PixelFormat__LUMINANCE_ALPHA> &
      Cesium$PixelFormat__LUMINANCE_ALPHA &
      6; // 6
  }

  declare class Cesium$PixelFormat__DEPTH_COMPONENT mixins Cesium$PixelFormat {}
  declare class Cesium$PixelFormat__DEPTH_STENCIL mixins Cesium$PixelFormat {}
  declare class Cesium$PixelFormat__ALPHA mixins Cesium$PixelFormat {}
  declare class Cesium$PixelFormat__RGB mixins Cesium$PixelFormat {}
  declare class Cesium$PixelFormat__RGBA mixins Cesium$PixelFormat {}
  declare class Cesium$PixelFormat__LUMINANCE mixins Cesium$PixelFormat {}
  declare class Cesium$PixelFormat__LUMINANCE_ALPHA mixins Cesium$PixelFormat {}

  declare class Cesium$PrimitiveType {
    constructor(...args: empty): mixed;
    static +POINTS: Class<Cesium$PrimitiveType__POINTS> &
      Cesium$PrimitiveType__POINTS &
      0; // 0
    static +LINES: Class<Cesium$PrimitiveType__LINES> &
      Cesium$PrimitiveType__LINES &
      1; // 1
    static +LINE_LOOP: Class<Cesium$PrimitiveType__LINE_LOOP> &
      Cesium$PrimitiveType__LINE_LOOP &
      2; // 2
    static +LINE_STRIP: Class<Cesium$PrimitiveType__LINE_STRIP> &
      Cesium$PrimitiveType__LINE_STRIP &
      3; // 3
    static +TRIANGLES: Class<Cesium$PrimitiveType__TRIANGLES> &
      Cesium$PrimitiveType__TRIANGLES &
      4; // 4
    static +TRIANGLE_STRIP: Class<Cesium$PrimitiveType__TRIANGLE_STRIP> &
      Cesium$PrimitiveType__TRIANGLE_STRIP &
      5; // 5
    static +TRIANGLE_FAN: Class<Cesium$PrimitiveType__TRIANGLE_FAN> &
      Cesium$PrimitiveType__TRIANGLE_FAN &
      6; // 6
  }

  declare class Cesium$PrimitiveType__POINTS mixins Cesium$PrimitiveType {}
  declare class Cesium$PrimitiveType__LINES mixins Cesium$PrimitiveType {}
  declare class Cesium$PrimitiveType__LINE_LOOP mixins Cesium$PrimitiveType {}
  declare class Cesium$PrimitiveType__LINE_STRIP mixins Cesium$PrimitiveType {}
  declare class Cesium$PrimitiveType__TRIANGLES mixins Cesium$PrimitiveType {}
  declare class Cesium$PrimitiveType__TRIANGLE_STRIP
    mixins Cesium$PrimitiveType {}
  declare class Cesium$PrimitiveType__TRIANGLE_FAN
    mixins Cesium$PrimitiveType {}

  declare var npm$namespace$QuadraticRealPolynomial: {
    computeDiscriminant: typeof QuadraticRealPolynomial$computeDiscriminant,
    computeRealRoots: typeof QuadraticRealPolynomial$computeRealRoots
  };
  declare function QuadraticRealPolynomial$computeDiscriminant(
    a: number,
    b: number,
    c: number
  ): number;

  declare function QuadraticRealPolynomial$computeRealRoots(
    a: number,
    b: number,
    c: number
  ): number[];

  declare var npm$namespace$QuarticRealPolynomial: {
    computeDiscriminant: typeof QuarticRealPolynomial$computeDiscriminant,
    computeRealRoots: typeof QuarticRealPolynomial$computeRealRoots
  };
  declare function QuarticRealPolynomial$computeDiscriminant(
    a: number,
    b: number,
    c: number,
    d: number,
    e: number
  ): number;

  declare function QuarticRealPolynomial$computeRealRoots(
    a: number,
    b: number,
    c: number,
    d: number,
    e: number
  ): number[];

  declare class Cesium$ReferenceFrame {
    constructor(...args: empty): mixed;
    static +FIXED: Class<Cesium$ReferenceFrame__FIXED> &
      Cesium$ReferenceFrame__FIXED &
      0; // 0
    static +INERTIAL: Class<Cesium$ReferenceFrame__INERTIAL> &
      Cesium$ReferenceFrame__INERTIAL &
      1; // 1
  }

  declare class Cesium$ReferenceFrame__FIXED mixins Cesium$ReferenceFrame {}
  declare class Cesium$ReferenceFrame__INERTIAL mixins Cesium$ReferenceFrame {}

  declare class Cesium$ScreenSpaceEventType {
    constructor(...args: empty): mixed;
    static +LEFT_DOWN: Class<Cesium$ScreenSpaceEventType__LEFT_DOWN> &
      Cesium$ScreenSpaceEventType__LEFT_DOWN &
      0; // 0
    static +LEFT_UP: Class<Cesium$ScreenSpaceEventType__LEFT_UP> &
      Cesium$ScreenSpaceEventType__LEFT_UP &
      1; // 1
    static +LEFT_CLICK: Class<Cesium$ScreenSpaceEventType__LEFT_CLICK> &
      Cesium$ScreenSpaceEventType__LEFT_CLICK &
      2; // 2
    static +LEFT_DOUBLE_CLICK: Class<Cesium$ScreenSpaceEventType__LEFT_DOUBLE_CLICK> &
      Cesium$ScreenSpaceEventType__LEFT_DOUBLE_CLICK &
      3; // 3
    static +RIGHT_DOWN: Class<Cesium$ScreenSpaceEventType__RIGHT_DOWN> &
      Cesium$ScreenSpaceEventType__RIGHT_DOWN &
      4; // 4
    static +RIGHT_UP: Class<Cesium$ScreenSpaceEventType__RIGHT_UP> &
      Cesium$ScreenSpaceEventType__RIGHT_UP &
      5; // 5
    static +RIGHT_CLICK: Class<Cesium$ScreenSpaceEventType__RIGHT_CLICK> &
      Cesium$ScreenSpaceEventType__RIGHT_CLICK &
      6; // 6
    static +RIGHT_DOUBLE_CLICK: Class<Cesium$ScreenSpaceEventType__RIGHT_DOUBLE_CLICK> &
      Cesium$ScreenSpaceEventType__RIGHT_DOUBLE_CLICK &
      7; // 7
    static +MIDDLE_DOWN: Class<Cesium$ScreenSpaceEventType__MIDDLE_DOWN> &
      Cesium$ScreenSpaceEventType__MIDDLE_DOWN &
      8; // 8
    static +MIDDLE_UP: Class<Cesium$ScreenSpaceEventType__MIDDLE_UP> &
      Cesium$ScreenSpaceEventType__MIDDLE_UP &
      9; // 9
    static +MIDDLE_CLICK: Class<Cesium$ScreenSpaceEventType__MIDDLE_CLICK> &
      Cesium$ScreenSpaceEventType__MIDDLE_CLICK &
      10; // 10
    static +MIDDLE_DOUBLE_CLICK: Class<Cesium$ScreenSpaceEventType__MIDDLE_DOUBLE_CLICK> &
      Cesium$ScreenSpaceEventType__MIDDLE_DOUBLE_CLICK &
      11; // 11
    static +MOUSE_MOVE: Class<Cesium$ScreenSpaceEventType__MOUSE_MOVE> &
      Cesium$ScreenSpaceEventType__MOUSE_MOVE &
      12; // 12
    static +WHEEL: Class<Cesium$ScreenSpaceEventType__WHEEL> &
      Cesium$ScreenSpaceEventType__WHEEL &
      13; // 13
    static +PINCH_START: Class<Cesium$ScreenSpaceEventType__PINCH_START> &
      Cesium$ScreenSpaceEventType__PINCH_START &
      14; // 14
    static +PINCH_END: Class<Cesium$ScreenSpaceEventType__PINCH_END> &
      Cesium$ScreenSpaceEventType__PINCH_END &
      15; // 15
    static +PINCH_MOVE: Class<Cesium$ScreenSpaceEventType__PINCH_MOVE> &
      Cesium$ScreenSpaceEventType__PINCH_MOVE &
      16; // 16
  }

  declare class Cesium$ScreenSpaceEventType__LEFT_DOWN
    mixins Cesium$ScreenSpaceEventType {}
  declare class Cesium$ScreenSpaceEventType__LEFT_UP
    mixins Cesium$ScreenSpaceEventType {}
  declare class Cesium$ScreenSpaceEventType__LEFT_CLICK
    mixins Cesium$ScreenSpaceEventType {}
  declare class Cesium$ScreenSpaceEventType__LEFT_DOUBLE_CLICK
    mixins Cesium$ScreenSpaceEventType {}
  declare class Cesium$ScreenSpaceEventType__RIGHT_DOWN
    mixins Cesium$ScreenSpaceEventType {}
  declare class Cesium$ScreenSpaceEventType__RIGHT_UP
    mixins Cesium$ScreenSpaceEventType {}
  declare class Cesium$ScreenSpaceEventType__RIGHT_CLICK
    mixins Cesium$ScreenSpaceEventType {}
  declare class Cesium$ScreenSpaceEventType__RIGHT_DOUBLE_CLICK
    mixins Cesium$ScreenSpaceEventType {}
  declare class Cesium$ScreenSpaceEventType__MIDDLE_DOWN
    mixins Cesium$ScreenSpaceEventType {}
  declare class Cesium$ScreenSpaceEventType__MIDDLE_UP
    mixins Cesium$ScreenSpaceEventType {}
  declare class Cesium$ScreenSpaceEventType__MIDDLE_CLICK
    mixins Cesium$ScreenSpaceEventType {}
  declare class Cesium$ScreenSpaceEventType__MIDDLE_DOUBLE_CLICK
    mixins Cesium$ScreenSpaceEventType {}
  declare class Cesium$ScreenSpaceEventType__MOUSE_MOVE
    mixins Cesium$ScreenSpaceEventType {}
  declare class Cesium$ScreenSpaceEventType__WHEEL
    mixins Cesium$ScreenSpaceEventType {}
  declare class Cesium$ScreenSpaceEventType__PINCH_START
    mixins Cesium$ScreenSpaceEventType {}
  declare class Cesium$ScreenSpaceEventType__PINCH_END
    mixins Cesium$ScreenSpaceEventType {}
  declare class Cesium$ScreenSpaceEventType__PINCH_MOVE
    mixins Cesium$ScreenSpaceEventType {}

  declare var npm$namespace$Simon1994PlanetaryPositions: {
    computeSunPositionInEarthInertialFrame: typeof Simon1994PlanetaryPositions$computeSunPositionInEarthInertialFrame,
    computeMoonPositionInEarthInertialFrame: typeof Simon1994PlanetaryPositions$computeMoonPositionInEarthInertialFrame
  };
  declare function Simon1994PlanetaryPositions$computeSunPositionInEarthInertialFrame(
    julianDate?: Cesium$JulianDate,
    result?: Cesium$Cartesian3
  ): Cesium$Cartesian3;

  declare function Simon1994PlanetaryPositions$computeMoonPositionInEarthInertialFrame(
    julianDate?: Cesium$JulianDate,
    result?: Cesium$Cartesian3
  ): Cesium$Cartesian3;

  declare class Cesium$ShadowMap {
    darkness: number;
    enabled: boolean;
    maximumDistance: number;
    normalOffset: boolean;
    size: number;
    softShadows: boolean;
    constructor(obtions: {
      lightCamera: Cesium$Camera,
      enabled?: boolean,
      isPointLight?: boolean,
      pointLightRadius?: number,
      cascadesEnabled?: boolean,
      numberOfCascades?: number,
      maximumDistance?: number,
      size?: number,
      softShadows?: boolean,
      darkness?: number,
      normalOffset?: boolean
    }): this;
  }

  declare class Cesium$ShadowMode {
    constructor(...args: empty): mixed;
    static +CAST_ONLY: Class<Cesium$ShadowMode__CAST_ONLY> &
      Cesium$ShadowMode__CAST_ONLY &
      0; // 0
    static +DISABLED: Class<Cesium$ShadowMode__DISABLED> &
      Cesium$ShadowMode__DISABLED &
      1; // 1
    static +ENABLED: Class<Cesium$ShadowMode__ENABLED> &
      Cesium$ShadowMode__ENABLED &
      2; // 2
    static +RECEIVE_ONLY: Class<Cesium$ShadowMode__RECEIVE_ONLY> &
      Cesium$ShadowMode__RECEIVE_ONLY &
      3; // 3
  }

  declare class Cesium$ShadowMode__CAST_ONLY mixins Cesium$ShadowMode {}
  declare class Cesium$ShadowMode__DISABLED mixins Cesium$ShadowMode {}
  declare class Cesium$ShadowMode__ENABLED mixins Cesium$ShadowMode {}
  declare class Cesium$ShadowMode__RECEIVE_ONLY mixins Cesium$ShadowMode {}

  declare class Cesium$TimeStandard {
    constructor(...args: empty): mixed;
    static +UTC: Class<Cesium$TimeStandard__UTC> & Cesium$TimeStandard__UTC & 0; // 0
    static +TAI: Class<Cesium$TimeStandard__TAI> & Cesium$TimeStandard__TAI & 1; // 1
  }

  declare class Cesium$TimeStandard__UTC mixins Cesium$TimeStandard {}
  declare class Cesium$TimeStandard__TAI mixins Cesium$TimeStandard {}

  declare var npm$namespace$Transforms: {
    eastNorthUpToFixedFrame: typeof Transforms$eastNorthUpToFixedFrame,
    northEastDownToFixedFrame: typeof Transforms$northEastDownToFixedFrame,
    northUpEastToFixedFrame: typeof Transforms$northUpEastToFixedFrame,
    headingPitchRollToFixedFrame: typeof Transforms$headingPitchRollToFixedFrame,
    headingPitchRollQuaternion: typeof Transforms$headingPitchRollQuaternion,
    computeTemeToPseudoFixedMatrix: typeof Transforms$computeTemeToPseudoFixedMatrix,
    preloadIcrfFixed: typeof Transforms$preloadIcrfFixed,
    computeIcrfToFixedMatrix: typeof Transforms$computeIcrfToFixedMatrix,
    computeFixedToIcrfMatrix: typeof Transforms$computeFixedToIcrfMatrix,
    pointToWindowCoordinates: typeof Transforms$pointToWindowCoordinates
  };
  declare function Transforms$eastNorthUpToFixedFrame(
    origin: Cesium$Cartesian3,
    ellipsoid?: Cesium$Ellipsoid,
    result?: Cesium$Matrix4
  ): Cesium$Matrix4;

  declare function Transforms$northEastDownToFixedFrame(
    origin: Cesium$Cartesian3,
    ellipsoid?: Cesium$Ellipsoid,
    result?: Cesium$Matrix4
  ): Cesium$Matrix4;

  declare function Transforms$northUpEastToFixedFrame(
    origin: Cesium$Cartesian3,
    ellipsoid?: Cesium$Ellipsoid,
    result?: Cesium$Matrix4
  ): Cesium$Matrix4;

  declare function Transforms$headingPitchRollToFixedFrame(
    origin: Cesium$Cartesian3,
    headingPitchRoll: Cesium$HeadingPitchRoll,
    ellipsoid?: Cesium$Ellipsoid,
    fixedFrameTransform?: Transforms$LocalFrameToFixedFrame,
    result?: Cesium$Matrix4
  ): Cesium$Matrix4;

  declare function Transforms$headingPitchRollQuaternion(
    origin: Cesium$Cartesian3,
    headingPitchRoll: Cesium$HeadingPitchRoll,
    ellipsoid?: Cesium$Ellipsoid,
    fixedFrameTransform?: Transforms$LocalFrameToFixedFrame,
    result?: Cesium$Quaternion
  ): Cesium$Quaternion;

  declare function Transforms$computeTemeToPseudoFixedMatrix(
    date: Cesium$JulianDate,
    result?: Cesium$Matrix3
  ): Cesium$Matrix3;

  declare function Transforms$preloadIcrfFixed(
    timeInterval: Cesium$TimeInterval
  ): Promise<void>;

  declare function Transforms$computeIcrfToFixedMatrix(
    date: Cesium$JulianDate,
    result?: Cesium$Matrix3
  ): Cesium$Matrix3;

  declare function Transforms$computeFixedToIcrfMatrix(
    date: Cesium$JulianDate,
    result?: Cesium$Matrix3
  ): Cesium$Matrix3;

  declare function Transforms$pointToWindowCoordinates(
    modelViewProjectionMatrix: Cesium$Matrix4,
    viewportTransformation: Cesium$Matrix4,
    point: Cesium$Cartesian3,
    result?: Cesium$Cartesian2
  ): Cesium$Cartesian2;

  declare type Transforms$LocalFrameToFixedFrame = (
    origin: Cesium$Cartesian3,
    ellipsoid?: Cesium$Ellipsoid,
    result?: Cesium$Matrix4
  ) => Cesium$Matrix4;

  declare var npm$namespace$TridiagonalSystemSolver: {
    solve: typeof TridiagonalSystemSolver$solve
  };
  declare function TridiagonalSystemSolver$solve(
    diagonal: number[],
    lower: number[],
    upper: number[],
    right: Cesium$Cartesian3[]
  ): Cesium$Cartesian3[];

  declare class Cesium$Visibility {
    constructor(...args: empty): mixed;
    static +NONE: Class<Cesium$Visibility__NONE> & Cesium$Visibility__NONE & 0; // 0
    static +PARTIAL: Class<Cesium$Visibility__PARTIAL> &
      Cesium$Visibility__PARTIAL &
      1; // 1
    static +FULL: Class<Cesium$Visibility__FULL> & Cesium$Visibility__FULL & 2; // 2
  }

  declare class Cesium$Visibility__NONE mixins Cesium$Visibility {}
  declare class Cesium$Visibility__PARTIAL mixins Cesium$Visibility {}
  declare class Cesium$Visibility__FULL mixins Cesium$Visibility {}

  declare class Cesium$WindingOrder {
    constructor(...args: empty): mixed;
    static +CLOCKWISE: Class<Cesium$WindingOrder__CLOCKWISE> &
      Cesium$WindingOrder__CLOCKWISE &
      0; // 0
    static +COUNTER_CLOCKWISE: Class<Cesium$WindingOrder__COUNTER_CLOCKWISE> &
      Cesium$WindingOrder__COUNTER_CLOCKWISE &
      1; // 1
  }

  declare class Cesium$WindingOrder__CLOCKWISE mixins Cesium$WindingOrder {}
  declare class Cesium$WindingOrder__COUNTER_CLOCKWISE
    mixins Cesium$WindingOrder {}

  declare class Cesium$StripeOrientation {
    constructor(...args: empty): mixed;
    static +HORIZONTAL: Class<Cesium$StripeOrientation__HORIZONTAL> &
      Cesium$StripeOrientation__HORIZONTAL &
      0; // 0
    static +VERTICAL: Class<Cesium$StripeOrientation__VERTICAL> &
      Cesium$StripeOrientation__VERTICAL &
      1; // 1
  }

  declare class Cesium$StripeOrientation__HORIZONTAL
    mixins Cesium$StripeOrientation {}
  declare class Cesium$StripeOrientation__VERTICAL
    mixins Cesium$StripeOrientation {}

  declare class Cesium$BingMapsStyle {
    constructor(...args: empty): mixed;
    static +AERIAL: Class<Cesium$BingMapsStyle__AERIAL> &
      Cesium$BingMapsStyle__AERIAL &
      0; // 0
    static +AERIAL_WITH_LABELS: Class<Cesium$BingMapsStyle__AERIAL_WITH_LABELS> &
      Cesium$BingMapsStyle__AERIAL_WITH_LABELS &
      1; // 1
    static +ROAD: Class<Cesium$BingMapsStyle__ROAD> &
      Cesium$BingMapsStyle__ROAD &
      2; // 2
    static +ORDNANCE_SURVEY: Class<Cesium$BingMapsStyle__ORDNANCE_SURVEY> &
      Cesium$BingMapsStyle__ORDNANCE_SURVEY &
      3; // 3
    static +COLLINS_BART: Class<Cesium$BingMapsStyle__COLLINS_BART> &
      Cesium$BingMapsStyle__COLLINS_BART &
      4; // 4
  }

  declare class Cesium$BingMapsStyle__AERIAL mixins Cesium$BingMapsStyle {}
  declare class Cesium$BingMapsStyle__AERIAL_WITH_LABELS
    mixins Cesium$BingMapsStyle {}
  declare class Cesium$BingMapsStyle__ROAD mixins Cesium$BingMapsStyle {}
  declare class Cesium$BingMapsStyle__ORDNANCE_SURVEY
    mixins Cesium$BingMapsStyle {}
  declare class Cesium$BingMapsStyle__COLLINS_BART
    mixins Cesium$BingMapsStyle {}

  declare class Cesium$BlendEquation {
    constructor(...args: empty): mixed;
    static +ADD: Class<Cesium$BlendEquation__ADD> &
      Cesium$BlendEquation__ADD &
      0; // 0
    static +SUBTRACT: Class<Cesium$BlendEquation__SUBTRACT> &
      Cesium$BlendEquation__SUBTRACT &
      1; // 1
    static +REVERSE_SUBTRACT: Class<Cesium$BlendEquation__REVERSE_SUBTRACT> &
      Cesium$BlendEquation__REVERSE_SUBTRACT &
      2; // 2
  }

  declare class Cesium$BlendEquation__ADD mixins Cesium$BlendEquation {}
  declare class Cesium$BlendEquation__SUBTRACT mixins Cesium$BlendEquation {}
  declare class Cesium$BlendEquation__REVERSE_SUBTRACT
    mixins Cesium$BlendEquation {}

  declare class Cesium$BlendFunction {
    constructor(...args: empty): mixed;
    static +ZERO: Class<Cesium$BlendFunction__ZERO> &
      Cesium$BlendFunction__ZERO &
      0; // 0
    static +ONE: Class<Cesium$BlendFunction__ONE> &
      Cesium$BlendFunction__ONE &
      1; // 1
    static +SOURCE_COLOR: Class<Cesium$BlendFunction__SOURCE_COLOR> &
      Cesium$BlendFunction__SOURCE_COLOR &
      2; // 2
    static +ONE_MINUS_SOURCE_COLOR: Class<Cesium$BlendFunction__ONE_MINUS_SOURCE_COLOR> &
      Cesium$BlendFunction__ONE_MINUS_SOURCE_COLOR &
      3; // 3
    static +DESTINATION_COLOR: Class<Cesium$BlendFunction__DESTINATION_COLOR> &
      Cesium$BlendFunction__DESTINATION_COLOR &
      4; // 4
    static +ONE_MINUS_DESTINATION_COLOR: Class<Cesium$BlendFunction__ONE_MINUS_DESTINATION_COLOR> &
      Cesium$BlendFunction__ONE_MINUS_DESTINATION_COLOR &
      5; // 5
    static +SOURCE_ALPHA: Class<Cesium$BlendFunction__SOURCE_ALPHA> &
      Cesium$BlendFunction__SOURCE_ALPHA &
      6; // 6
    static +ONE_MINUS_SOURCE_ALPHA: Class<Cesium$BlendFunction__ONE_MINUS_SOURCE_ALPHA> &
      Cesium$BlendFunction__ONE_MINUS_SOURCE_ALPHA &
      7; // 7
    static +DESTINATION_ALPHA: Class<Cesium$BlendFunction__DESTINATION_ALPHA> &
      Cesium$BlendFunction__DESTINATION_ALPHA &
      8; // 8
    static +ONE_MINUS_DESTINATION_ALPHA: Class<Cesium$BlendFunction__ONE_MINUS_DESTINATION_ALPHA> &
      Cesium$BlendFunction__ONE_MINUS_DESTINATION_ALPHA &
      9; // 9
    static +CONSTANT_COLOR: Class<Cesium$BlendFunction__CONSTANT_COLOR> &
      Cesium$BlendFunction__CONSTANT_COLOR &
      10; // 10
    static +ONE_MINUS_CONSTANT_COLOR: Class<Cesium$BlendFunction__ONE_MINUS_CONSTANT_COLOR> &
      Cesium$BlendFunction__ONE_MINUS_CONSTANT_COLOR &
      11; // 11
    static +CONSTANT_ALPHA: Class<Cesium$BlendFunction__CONSTANT_ALPHA> &
      Cesium$BlendFunction__CONSTANT_ALPHA &
      12; // 12
    static +ONE_MINUS_CONSTANT_ALPHA: Class<Cesium$BlendFunction__ONE_MINUS_CONSTANT_ALPHA> &
      Cesium$BlendFunction__ONE_MINUS_CONSTANT_ALPHA &
      13; // 13
    static +SOURCE_ALPHA_SATURATE: Class<Cesium$BlendFunction__SOURCE_ALPHA_SATURATE> &
      Cesium$BlendFunction__SOURCE_ALPHA_SATURATE &
      14; // 14
  }

  declare class Cesium$BlendFunction__ZERO mixins Cesium$BlendFunction {}
  declare class Cesium$BlendFunction__ONE mixins Cesium$BlendFunction {}
  declare class Cesium$BlendFunction__SOURCE_COLOR
    mixins Cesium$BlendFunction {}
  declare class Cesium$BlendFunction__ONE_MINUS_SOURCE_COLOR
    mixins Cesium$BlendFunction {}
  declare class Cesium$BlendFunction__DESTINATION_COLOR
    mixins Cesium$BlendFunction {}
  declare class Cesium$BlendFunction__ONE_MINUS_DESTINATION_COLOR
    mixins Cesium$BlendFunction {}
  declare class Cesium$BlendFunction__SOURCE_ALPHA
    mixins Cesium$BlendFunction {}
  declare class Cesium$BlendFunction__ONE_MINUS_SOURCE_ALPHA
    mixins Cesium$BlendFunction {}
  declare class Cesium$BlendFunction__DESTINATION_ALPHA
    mixins Cesium$BlendFunction {}
  declare class Cesium$BlendFunction__ONE_MINUS_DESTINATION_ALPHA
    mixins Cesium$BlendFunction {}
  declare class Cesium$BlendFunction__CONSTANT_COLOR
    mixins Cesium$BlendFunction {}
  declare class Cesium$BlendFunction__ONE_MINUS_CONSTANT_COLOR
    mixins Cesium$BlendFunction {}
  declare class Cesium$BlendFunction__CONSTANT_ALPHA
    mixins Cesium$BlendFunction {}
  declare class Cesium$BlendFunction__ONE_MINUS_CONSTANT_ALPHA
    mixins Cesium$BlendFunction {}
  declare class Cesium$BlendFunction__SOURCE_ALPHA_SATURATE
    mixins Cesium$BlendFunction {}

  declare class Cesium$BlendingState {
    constructor(...args: empty): mixed;
    static +DISABLED: Class<Cesium$BlendingState__DISABLED> &
      Cesium$BlendingState__DISABLED &
      0; // 0
    static +ALPHA_BLEND: Class<Cesium$BlendingState__ALPHA_BLEND> &
      Cesium$BlendingState__ALPHA_BLEND &
      1; // 1
    static +PRE_MULTIPLIED_ALPHA_BLEND: Class<Cesium$BlendingState__PRE_MULTIPLIED_ALPHA_BLEND> &
      Cesium$BlendingState__PRE_MULTIPLIED_ALPHA_BLEND &
      2; // 2
    static +ADDITIVE_BLEND: Class<Cesium$BlendingState__ADDITIVE_BLEND> &
      Cesium$BlendingState__ADDITIVE_BLEND &
      3; // 3
  }

  declare class Cesium$BlendingState__DISABLED mixins Cesium$BlendingState {}
  declare class Cesium$BlendingState__ALPHA_BLEND mixins Cesium$BlendingState {}
  declare class Cesium$BlendingState__PRE_MULTIPLIED_ALPHA_BLEND
    mixins Cesium$BlendingState {}
  declare class Cesium$BlendingState__ADDITIVE_BLEND
    mixins Cesium$BlendingState {}

  declare class Cesium$BlendOption {
    constructor(...args: empty): mixed;
    static +OPAQUE: Class<Cesium$BlendOption__OPAQUE> &
      Cesium$BlendOption__OPAQUE &
      0; // 0
    static +OPAQUE_AND_TRANSLUCENT: Class<Cesium$BlendOption__OPAQUE_AND_TRANSLUCENT> &
      Cesium$BlendOption__OPAQUE_AND_TRANSLUCENT &
      1; // 1
    static +TRANSLUCENT: Class<Cesium$BlendOption__TRANSLUCENT> &
      Cesium$BlendOption__TRANSLUCENT &
      2; // 2
  }

  declare class Cesium$BlendOption__OPAQUE mixins Cesium$BlendOption {}
  declare class Cesium$BlendOption__OPAQUE_AND_TRANSLUCENT
    mixins Cesium$BlendOption {}
  declare class Cesium$BlendOption__TRANSLUCENT mixins Cesium$BlendOption {}

  declare class Cesium$CameraEventType {
    constructor(...args: empty): mixed;
    static +LEFT_DRAG: Class<Cesium$CameraEventType__LEFT_DRAG> &
      Cesium$CameraEventType__LEFT_DRAG &
      0; // 0
    static +RIGHT_DRAG: Class<Cesium$CameraEventType__RIGHT_DRAG> &
      Cesium$CameraEventType__RIGHT_DRAG &
      1; // 1
    static +MIDDLE_DRAG: Class<Cesium$CameraEventType__MIDDLE_DRAG> &
      Cesium$CameraEventType__MIDDLE_DRAG &
      2; // 2
    static +WHEEL: Class<Cesium$CameraEventType__WHEEL> &
      Cesium$CameraEventType__WHEEL &
      3; // 3
    static +PINCH: Class<Cesium$CameraEventType__PINCH> &
      Cesium$CameraEventType__PINCH &
      4; // 4
  }

  declare class Cesium$CameraEventType__LEFT_DRAG
    mixins Cesium$CameraEventType {}
  declare class Cesium$CameraEventType__RIGHT_DRAG
    mixins Cesium$CameraEventType {}
  declare class Cesium$CameraEventType__MIDDLE_DRAG
    mixins Cesium$CameraEventType {}
  declare class Cesium$CameraEventType__WHEEL mixins Cesium$CameraEventType {}
  declare class Cesium$CameraEventType__PINCH mixins Cesium$CameraEventType {}

  declare class Cesium$CullFace {
    constructor(...args: empty): mixed;
    static +FRONT: Class<Cesium$CullFace__FRONT> & Cesium$CullFace__FRONT & 0; // 0
    static +BACK: Class<Cesium$CullFace__BACK> & Cesium$CullFace__BACK & 1; // 1
    static +FRONT_AND_BACK: Class<Cesium$CullFace__FRONT_AND_BACK> &
      Cesium$CullFace__FRONT_AND_BACK &
      2; // 2
  }

  declare class Cesium$CullFace__FRONT mixins Cesium$CullFace {}
  declare class Cesium$CullFace__BACK mixins Cesium$CullFace {}
  declare class Cesium$CullFace__FRONT_AND_BACK mixins Cesium$CullFace {}

  declare class Cesium$DepthFunction {
    constructor(...args: empty): mixed;
    static +NEVER: Class<Cesium$DepthFunction__NEVER> &
      Cesium$DepthFunction__NEVER &
      0; // 0
    static +LESS: Class<Cesium$DepthFunction__LESS> &
      Cesium$DepthFunction__LESS &
      1; // 1
    static +EQUAL: Class<Cesium$DepthFunction__EQUAL> &
      Cesium$DepthFunction__EQUAL &
      2; // 2
    static +LESS_OR_EQUAL: Class<Cesium$DepthFunction__LESS_OR_EQUAL> &
      Cesium$DepthFunction__LESS_OR_EQUAL &
      3; // 3
    static +GREATER: Class<Cesium$DepthFunction__GREATER> &
      Cesium$DepthFunction__GREATER &
      4; // 4
    static +NOT_EQUAL: Class<Cesium$DepthFunction__NOT_EQUAL> &
      Cesium$DepthFunction__NOT_EQUAL &
      5; // 5
    static +GREATER_OR_EQUAL: Class<Cesium$DepthFunction__GREATER_OR_EQUAL> &
      Cesium$DepthFunction__GREATER_OR_EQUAL &
      6; // 6
    static +ALWAYS: Class<Cesium$DepthFunction__ALWAYS> &
      Cesium$DepthFunction__ALWAYS &
      7; // 7
  }

  declare class Cesium$DepthFunction__NEVER mixins Cesium$DepthFunction {}
  declare class Cesium$DepthFunction__LESS mixins Cesium$DepthFunction {}
  declare class Cesium$DepthFunction__EQUAL mixins Cesium$DepthFunction {}
  declare class Cesium$DepthFunction__LESS_OR_EQUAL
    mixins Cesium$DepthFunction {}
  declare class Cesium$DepthFunction__GREATER mixins Cesium$DepthFunction {}
  declare class Cesium$DepthFunction__NOT_EQUAL mixins Cesium$DepthFunction {}
  declare class Cesium$DepthFunction__GREATER_OR_EQUAL
    mixins Cesium$DepthFunction {}
  declare class Cesium$DepthFunction__ALWAYS mixins Cesium$DepthFunction {}

  declare class Cesium$HorizontalOrigin {
    constructor(...args: empty): mixed;
    static +CENTER: Class<Cesium$HorizontalOrigin__CENTER> &
      Cesium$HorizontalOrigin__CENTER &
      0; // 0
    static +LEFT: Class<Cesium$HorizontalOrigin__LEFT> &
      Cesium$HorizontalOrigin__LEFT &
      1; // 1
    static +RIGHT: Class<Cesium$HorizontalOrigin__RIGHT> &
      Cesium$HorizontalOrigin__RIGHT &
      2; // 2
  }

  declare class Cesium$HorizontalOrigin__CENTER
    mixins Cesium$HorizontalOrigin {}
  declare class Cesium$HorizontalOrigin__LEFT mixins Cesium$HorizontalOrigin {}
  declare class Cesium$HorizontalOrigin__RIGHT mixins Cesium$HorizontalOrigin {}

  declare class Cesium$LabelStyle {
    constructor(...args: empty): mixed;
    static +FILL: Class<Cesium$LabelStyle__FILL> & Cesium$LabelStyle__FILL & 0; // 0
    static +OUTLINE: Class<Cesium$LabelStyle__OUTLINE> &
      Cesium$LabelStyle__OUTLINE &
      1; // 1
    static +FILL_AND_OUTLINE: Class<Cesium$LabelStyle__FILL_AND_OUTLINE> &
      Cesium$LabelStyle__FILL_AND_OUTLINE &
      2; // 2
  }

  declare class Cesium$LabelStyle__FILL mixins Cesium$LabelStyle {}
  declare class Cesium$LabelStyle__OUTLINE mixins Cesium$LabelStyle {}
  declare class Cesium$LabelStyle__FILL_AND_OUTLINE mixins Cesium$LabelStyle {}

  declare class Cesium$ModelAnimationLoop {
    constructor(...args: empty): mixed;
    static +NONE: Class<Cesium$ModelAnimationLoop__NONE> &
      Cesium$ModelAnimationLoop__NONE &
      0; // 0
    static +REPEAT: Class<Cesium$ModelAnimationLoop__REPEAT> &
      Cesium$ModelAnimationLoop__REPEAT &
      1; // 1
    static +MIRRORED_REPEAT: Class<Cesium$ModelAnimationLoop__MIRRORED_REPEAT> &
      Cesium$ModelAnimationLoop__MIRRORED_REPEAT &
      2; // 2
  }

  declare class Cesium$ModelAnimationLoop__NONE
    mixins Cesium$ModelAnimationLoop {}
  declare class Cesium$ModelAnimationLoop__REPEAT
    mixins Cesium$ModelAnimationLoop {}
  declare class Cesium$ModelAnimationLoop__MIRRORED_REPEAT
    mixins Cesium$ModelAnimationLoop {}

  declare class Cesium$SceneMode {
    constructor(...args: empty): mixed;
    static +MORPHING: Class<Cesium$SceneMode__MORPHING> &
      Cesium$SceneMode__MORPHING &
      0; // 0
    static +COLUMBUS_VIEW: Class<Cesium$SceneMode__COLUMBUS_VIEW> &
      Cesium$SceneMode__COLUMBUS_VIEW &
      1; // 1
    static +SCENE2D: Class<Cesium$SceneMode__SCENE2D> &
      Cesium$SceneMode__SCENE2D &
      2; // 2
    static +SCENE3D: Class<Cesium$SceneMode__SCENE3D> &
      Cesium$SceneMode__SCENE3D &
      3; // 3
  }

  declare class Cesium$SceneMode__MORPHING mixins Cesium$SceneMode {}
  declare class Cesium$SceneMode__COLUMBUS_VIEW mixins Cesium$SceneMode {}
  declare class Cesium$SceneMode__SCENE2D mixins Cesium$SceneMode {}
  declare class Cesium$SceneMode__SCENE3D mixins Cesium$SceneMode {}

  declare var npm$namespace$SceneMode: {
    getMorphTime: typeof SceneMode$getMorphTime
  };
  declare function SceneMode$getMorphTime(value: Cesium$SceneMode): number;

  declare var npm$namespace$SceneTransforms: {
    wgs84ToWindowCoordinates: typeof SceneTransforms$wgs84ToWindowCoordinates,
    wgs84ToDrawingBufferCoordinates: typeof SceneTransforms$wgs84ToDrawingBufferCoordinates
  };
  declare function SceneTransforms$wgs84ToWindowCoordinates(
    scene: Cesium$Scene,
    position: Cesium$Cartesian3,
    result?: Cesium$Cartesian2
  ): Cesium$Cartesian2;

  declare function SceneTransforms$wgs84ToDrawingBufferCoordinates(
    scene: Cesium$Scene,
    position: Cesium$Cartesian3,
    result?: Cesium$Cartesian2
  ): Cesium$Cartesian2;

  declare class Cesium$StencilFunction {
    constructor(...args: empty): mixed;
    static +NEVER: Class<Cesium$StencilFunction__NEVER> &
      Cesium$StencilFunction__NEVER &
      0; // 0
    static +LESS: Class<Cesium$StencilFunction__LESS> &
      Cesium$StencilFunction__LESS &
      1; // 1
    static +EQUAL: Class<Cesium$StencilFunction__EQUAL> &
      Cesium$StencilFunction__EQUAL &
      2; // 2
    static +LESS_OR_EQUAL: Class<Cesium$StencilFunction__LESS_OR_EQUAL> &
      Cesium$StencilFunction__LESS_OR_EQUAL &
      3; // 3
    static +GREATER: Class<Cesium$StencilFunction__GREATER> &
      Cesium$StencilFunction__GREATER &
      4; // 4
    static +NOT_EQUAL: Class<Cesium$StencilFunction__NOT_EQUAL> &
      Cesium$StencilFunction__NOT_EQUAL &
      5; // 5
    static +GREATER_OR_EQUAL: Class<Cesium$StencilFunction__GREATER_OR_EQUAL> &
      Cesium$StencilFunction__GREATER_OR_EQUAL &
      6; // 6
    static +ALWAYS: Class<Cesium$StencilFunction__ALWAYS> &
      Cesium$StencilFunction__ALWAYS &
      7; // 7
  }

  declare class Cesium$StencilFunction__NEVER mixins Cesium$StencilFunction {}
  declare class Cesium$StencilFunction__LESS mixins Cesium$StencilFunction {}
  declare class Cesium$StencilFunction__EQUAL mixins Cesium$StencilFunction {}
  declare class Cesium$StencilFunction__LESS_OR_EQUAL
    mixins Cesium$StencilFunction {}
  declare class Cesium$StencilFunction__GREATER mixins Cesium$StencilFunction {}
  declare class Cesium$StencilFunction__NOT_EQUAL
    mixins Cesium$StencilFunction {}
  declare class Cesium$StencilFunction__GREATER_OR_EQUAL
    mixins Cesium$StencilFunction {}
  declare class Cesium$StencilFunction__ALWAYS mixins Cesium$StencilFunction {}

  declare class Cesium$StencilOperation {
    constructor(...args: empty): mixed;
    static +ZERO: Class<Cesium$StencilOperation__ZERO> &
      Cesium$StencilOperation__ZERO &
      0; // 0
    static +KEEP: Class<Cesium$StencilOperation__KEEP> &
      Cesium$StencilOperation__KEEP &
      1; // 1
    static +REPLACE: Class<Cesium$StencilOperation__REPLACE> &
      Cesium$StencilOperation__REPLACE &
      2; // 2
    static +INCREMENT: Class<Cesium$StencilOperation__INCREMENT> &
      Cesium$StencilOperation__INCREMENT &
      3; // 3
    static +DECREMENT: Class<Cesium$StencilOperation__DECREMENT> &
      Cesium$StencilOperation__DECREMENT &
      4; // 4
    static +INVERT: Class<Cesium$StencilOperation__INVERT> &
      Cesium$StencilOperation__INVERT &
      5; // 5
    static +INCREMENT_WRAP: Class<Cesium$StencilOperation__INCREMENT_WRAP> &
      Cesium$StencilOperation__INCREMENT_WRAP &
      6; // 6
    static +DECREMENT_WRAP: Class<Cesium$StencilOperation__DECREMENT_WRAP> &
      Cesium$StencilOperation__DECREMENT_WRAP &
      7; // 7
  }

  declare class Cesium$StencilOperation__ZERO mixins Cesium$StencilOperation {}
  declare class Cesium$StencilOperation__KEEP mixins Cesium$StencilOperation {}
  declare class Cesium$StencilOperation__REPLACE
    mixins Cesium$StencilOperation {}
  declare class Cesium$StencilOperation__INCREMENT
    mixins Cesium$StencilOperation {}
  declare class Cesium$StencilOperation__DECREMENT
    mixins Cesium$StencilOperation {}
  declare class Cesium$StencilOperation__INVERT
    mixins Cesium$StencilOperation {}
  declare class Cesium$StencilOperation__INCREMENT_WRAP
    mixins Cesium$StencilOperation {}
  declare class Cesium$StencilOperation__DECREMENT_WRAP
    mixins Cesium$StencilOperation {}

  declare class Cesium$VerticalOrigin {
    constructor(...args: empty): mixed;
    static +CENTER: Class<Cesium$VerticalOrigin__CENTER> &
      Cesium$VerticalOrigin__CENTER &
      0; // 0
    static +BOTTOM: Class<Cesium$VerticalOrigin__BOTTOM> &
      Cesium$VerticalOrigin__BOTTOM &
      1; // 1
    static +TOP: Class<Cesium$VerticalOrigin__TOP> &
      Cesium$VerticalOrigin__TOP &
      2; // 2
  }

  declare class Cesium$VerticalOrigin__CENTER mixins Cesium$VerticalOrigin {}
  declare class Cesium$VerticalOrigin__BOTTOM mixins Cesium$VerticalOrigin {}
  declare class Cesium$VerticalOrigin__TOP mixins Cesium$VerticalOrigin {}

  declare function Cesium$createOpenStreetMapImageryProvider(options: {
    url?: string,
    fileExtension?: string,
    rectangle?: Cesium$Rectangle,
    minimumLevel?: number,
    maximumLevel?: number,
    ellipsoid?: Cesium$Ellipsoid,
    credit?: Cesium$Credit | string
  }): Cesium$UrlTemplateImageryProvider;

  declare function Cesium$createTileMapServiceImageryProvider(options: {
    url?: string,
    fileExtension?: string,
    credit?: Cesium$Credit | string,
    minimumLevel?: number,
    maximumLevel?: number,
    rectangle?: Cesium$Rectangle,
    tilingScheme?: Cesium$TilingScheme,
    ellipsoid?: Cesium$Ellipsoid,
    tileWidth?: number,
    tileHeight?: number,
    flipXY?: boolean
  }): Cesium$UrlTemplateImageryProvider;

  declare function Cesium$createWorldImagery(options: {
    style?: any
  }): Cesium$IonImageryProvider;

  declare function Cesium$createWorldTerrain(options: {
    requestVertexNormals?: boolean,
    requestWaterMask?: boolean
  }): Cesium$CesiumTerrainProvider;

  declare class Cesium$UrlTemplateImageryProvider
    mixins Cesium$ImageryProvider {
    url: string;
    pickFeaturesUrl: string;
    urlSchemeZeroPadding: {};
    subdomains: string | string[];
    ellipsoid: Cesium$Ellipsoid;
    getFeatureInfoFormats: Cesium$GetFeatureInfoFormat[];
    enablePickFeatures: boolean;
    constructor(options: {
      url: string,
      pickFeaturesUrl?: string,
      urlSchemeZeroPadding?: {},
      subdomains?: string | string[],
      proxy?: {},
      credit?: Cesium$Credit | string,
      minimumLevel?: number,
      maximumLevel?: number,
      rectangle?: Cesium$Rectangle,
      tilingScheme?: Cesium$TilingScheme,
      ellipsoid?: Cesium$Ellipsoid,
      tileWidth?: number,
      tileHeight?: number,
      hasAlphaChannel?: boolean,
      getFeatureInfoFormats?: Cesium$GetFeatureInfoFormat[],
      enablePickFeatures?: boolean
    }): this;
    reinitialize(
      options: Promise<{ [key: string]: any }> | { [key: string]: any }
    ): void;
  }

  declare class Cesium$Resource {
    static DEFAULT: Cesium$Resource;
    static isBlobSupported: boolean;
    extension: string;
    hasHeaders: boolean;
    headers: any;
    isBlobUri: boolean;
    isCrossOriginUrl: boolean;
    isDataUri: boolean;
    proxy: Cesium$DefaultProxy;
    queryParameters: any;
    request: Request;
    retryAttempts: number;
    retryCallback: () => void;
    templateValues: any;
    url: string;
    static delete(options?: {
      url: string,
      data?: any,
      queryParameters?: any,
      templateValues?: any,
      headers?: any,
      proxy?: Cesium$DefaultProxy,
      retryCallback?: Cesium$Resource.Resource$RetryCallback,
      retryAttempts?: number,
      request?: Request,
      responseType?: string,
      overrideMimeType?: string
    }): Promise<any> | void;
    static fetch(options?: {
      url: string,
      queryParameters?: any,
      templateValues?: any,
      headers?: any,
      proxy?: Cesium$DefaultProxy,
      retryCallback?: Cesium$Resource.Resource$RetryCallback,
      retryAttempts?: number,
      request?: Request,
      responseType?: string,
      overrideMimeType?: string
    }): Promise<any> | void;
    static fetchArrayBuffer(options?: {
      url: string,
      queryParameters?: any,
      templateValues?: any,
      headers?: any,
      proxy?: Cesium$DefaultProxy,
      retryCallback?: Cesium$Resource.Resource$RetryCallback,
      retryAttempts?: number,
      request?: Request
    }): Promise<ArrayBuffer> | void;
    static fetchBlob(options?: {
      url: string,
      queryParameters?: any,
      templateValues?: any,
      headers?: any,
      proxy?: Cesium$DefaultProxy,
      retryCallback?: Cesium$Resource.Resource$RetryCallback,
      retryAttempts?: number,
      request?: Request
    }): Promise<Blob> | void;
    static fetchImage(options?: {
      url: string,
      queryParameters?: any,
      templateValues?: any,
      headers?: any,
      proxy?: Cesium$DefaultProxy,
      retryCallback?: Cesium$Resource.Resource$RetryCallback,
      retryAttempts?: number,
      request?: Request,
      preferBlob?: boolean
    }): Promise<any> | void;
    static fetchJson(options?: {
      url: string,
      queryParameters?: any,
      templateValues?: any,
      headers?: any,
      proxy?: Cesium$DefaultProxy,
      retryCallback?: Cesium$Resource.Resource$RetryCallback,
      retryAttempts?: number,
      request?: Request
    }): Promise<any> | void;
    static fetchJsonp(options?: {
      url: string,
      queryParameters?: any,
      templateValues?: any,
      headers?: any,
      proxy?: Cesium$DefaultProxy,
      retryCallback?: Cesium$Resource.Resource$RetryCallback,
      retryAttempts?: number,
      request?: Request,
      callbackParameterName?: string
    }): Promise<any> | void;
    static fetchText(options?: {
      url: string,
      queryParameters?: any,
      templateValues?: any,
      headers?: any,
      proxy?: Cesium$DefaultProxy,
      retryCallback?: Cesium$Resource.Resource$RetryCallback,
      retryAttempts?: number,
      request?: Request
    }): Promise<string> | void;
    static fetchXml(options?: {
      url: string,
      queryParameters?: any,
      templateValues?: any,
      headers?: any,
      proxy?: Cesium$DefaultProxy,
      retryCallback?: Cesium$Resource.Resource$RetryCallback,
      retryAttempts?: number,
      request?: Request
    }): Promise<XMLDocument> | void;
    static head(options?: {
      url: string,
      queryParameters?: any,
      templateValues?: any,
      headers?: any,
      proxy?: Cesium$DefaultProxy,
      retryCallback?: Cesium$Resource.Resource$RetryCallback,
      retryAttempts?: number,
      request?: Request,
      responseType?: string,
      overrideMimeType?: string
    }): Promise<any> | void;
    static options(options?: {
      url: string,
      queryParameters?: any,
      templateValues?: any,
      headers?: any,
      proxy?: Cesium$DefaultProxy,
      retryCallback?: Cesium$Resource.Resource$RetryCallback,
      retryAttempts?: number,
      request?: Request,
      responseType?: string,
      overrideMimeType?: string
    }): Promise<any> | void;
    static patch(options?: {
      url: string,
      data?: any,
      queryParameters?: any,
      templateValues?: any,
      headers?: any,
      proxy?: Cesium$DefaultProxy,
      retryCallback?: Cesium$Resource.Resource$RetryCallback,
      retryAttempts?: number,
      request?: Request,
      responseType?: string,
      overrideMimeType?: string
    }): Promise<any> | void;
    static post(options?: {
      url: string,
      data?: any,
      queryParameters?: any,
      templateValues?: any,
      headers?: any,
      proxy?: Cesium$DefaultProxy,
      retryCallback?: Cesium$Resource.Resource$RetryCallback,
      retryAttempts?: number,
      request?: Request,
      responseType?: string,
      overrideMimeType?: string
    }): Promise<any> | void;
    static put(options?: {
      url: string,
      data?: any,
      queryParameters?: any,
      templateValues?: any,
      headers?: any,
      proxy?: Cesium$DefaultProxy,
      retryCallback?: Cesium$Resource.Resource$RetryCallback,
      retryAttempts?: number,
      request?: Request,
      responseType?: string,
      overrideMimeType?: string
    }): Promise<any> | void;
    constructor(options?: {
      url: string,
      queryParameters?: any,
      templateValues?: any,
      headers?: any,
      proxy?: Cesium$DefaultProxy,
      retryCallback?: Cesium$Resource.Resource$RetryCallback,
      retryAttempts?: number,
      request?: Request
    }): this;
    addQueryParameters(params: any, useAsDefault: boolean): void;
    addTemplateValues(template: any, useAsDefault: boolean): void;
    appendForwardSlash(): void;
    appendQueryParameters(params: any): void;
    clone(result: Cesium$Resource): Cesium$Resource;
    delete(options?: {
      responseType?: string,
      headers?: any,
      overrideMimeType?: string
    }): Promise<any> | void;
    fetch(options?: {
      responseType?: string,
      headers?: any,
      overrideMimeType?: string
    }): Promise<any> | void;
    fetchArrayBuffer(): Promise<ArrayBuffer> | void;
    fetchBlob(): Promise<Blob> | void;
    fetchImage(preferBlob: boolean): Promise<any> | void;
    fetchJson(): Promise<any> | void;
    fetchJsonp(callbackParameterName: string): Promise<any> | void;
    fetchText(): Promise<string> | void;
    fetchXml(): Promise<XMLDocument> | void;
    getBaseUri(includeQuery: boolean): string;
    getDerivedResource(options: {
      url?: string,
      queryParameters?: any,
      templateValues?: any,
      headers?: any,
      proxy?: Cesium$DefaultProxy,
      retryCallback?: Cesium$Resource.Resource$RetryCallback,
      retryAttempts?: number,
      request?: Request,
      preserveQueryParameters?: boolean
    }): Cesium$Resource;
    getUrlComponent(query: boolean, proxy: boolean): string;
    head(options?: {
      responseType?: string,
      headers?: any,
      overrideMimeType?: string
    }): Promise<any> | void;
    options(options?: {
      responseType?: string,
      headers?: any,
      overrideMimeType?: string
    }): Promise<any> | void;
    patch(
      data: any,
      options?: {
        responseType?: string,
        headers?: any,
        overrideMimeType?: string
      }
    ): Promise<any> | void;
    post(
      data: any,
      options?: {
        data?: any,
        responseType?: string,
        headers?: any,
        overrideMimeType?: string
      }
    ): Promise<any> | void;
    put(
      data: any,
      options?: {
        responseType?: string,
        headers?: any,
        overrideMimeType?: string
      }
    ): Promise<any> | void;
    setQueryParameters(params: any, useAsDefault: boolean): void;
    setTemplateValues(template: any, useAsDefault: boolean): void;
  }

  declare type Resource$RetryCallback = (
    resource: Cesium$Resource,
    error: Error
  ) => void;

  declare function Cesium$defined(value: any): boolean;

  declare var npm$namespace$buildModuleUrl: {
    setBaseUrl: typeof buildModuleUrl$setBaseUrl
  };
  declare function buildModuleUrl$setBaseUrl(value: string): void;
}
