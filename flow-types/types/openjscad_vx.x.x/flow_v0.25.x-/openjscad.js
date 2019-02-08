declare var npm$namespace$CSG: {
  interpolateBetween2DPointsForY: typeof CSG$interpolateBetween2DPointsForY,
  reTesselateCoplanarPolygons: typeof CSG$reTesselateCoplanarPolygons,
  getTag: typeof CSG$getTag,
  fnNumberSort: typeof CSG$fnNumberSort,
  parseOption: typeof CSG$parseOption,
  parseOptionAs3DVector: typeof CSG$parseOptionAs3DVector,
  parseOptionAs3DVectorList: typeof CSG$parseOptionAs3DVectorList,
  parseOptionAs2DVector: typeof CSG$parseOptionAs2DVector,
  parseOptionAsFloat: typeof CSG$parseOptionAsFloat,
  parseOptionAsInt: typeof CSG$parseOptionAsInt,
  parseOptionAsBool: typeof CSG$parseOptionAsBool,
  cube: typeof CSG$cube,
  sphere: typeof CSG$sphere,
  cylinder: typeof CSG$cylinder,
  roundedCylinder: typeof CSG$roundedCylinder,
  roundedCube: typeof CSG$roundedCube,
  polyhedron: typeof CSG$polyhedron,
  IsFloat: typeof CSG$IsFloat,
  solve2Linear: typeof CSG$solve2Linear,
  staticTag: typeof CSG$staticTag
};
declare class CSG$Polygon2D mixins CAG {
  constructor(points: CSG$Vector2D[]): this;
}

declare class CSG$PolygonTreeNode {
  parent: any;
  children: any;
  polygon: CSG$Polygon;
  removed: boolean;
  constructor(): this;
  addPolygons(polygons: any): void;
  remove(): void;
  isRemoved(): boolean;
  isRootNode(): boolean;
  invert(): void;
  getPolygon(): CSG$Polygon;
  getPolygons(result: CSG$Polygon[]): void;
  splitByPlane(
    plane: any,
    coplanarfrontnodes: any,
    coplanarbacknodes: any,
    frontnodes: any,
    backnodes: any
  ): void;
  _splitByPlane(
    plane: any,
    coplanarfrontnodes: any,
    coplanarbacknodes: any,
    frontnodes: any,
    backnodes: any
  ): void;
  addChild(polygon: CSG$Polygon): CSG$PolygonTreeNode;
  invertSub(): void;
  recursivelyInvalidatePolygon(): void;
}

declare class CSG$Tree {
  polygonTree: CSG$PolygonTreeNode;
  rootnode: CSG$Node;
  constructor(polygons: CSG$Polygon[]): this;
  invert(): void;
  clipTo(tree: CSG$Tree, alsoRemovecoplanarFront?: boolean): void;
  allPolygons(): CSG$Polygon[];
  addPolygons(polygons: CSG$Polygon[]): void;
}

declare class CSG$Node {
  parent: CSG$Node;
  plane: CSG$Plane;
  front: any;
  back: any;
  polygontreenodes: CSG$PolygonTreeNode[];
  constructor(parent: CSG$Node): this;
  invert(): void;
  clipPolygons(
    polygontreenodes: CSG$PolygonTreeNode[],
    alsoRemovecoplanarFront: boolean
  ): void;
  clipTo(tree: CSG$Tree, alsoRemovecoplanarFront: boolean): void;
  addPolygonTreeNodes(polygontreenodes: CSG$PolygonTreeNode[]): void;
  getParentPlaneNormals(normals: CSG$Vector3D[], maxdepth: number): void;
}

declare class CSG$Matrix4x4 {
  elements: number[];
  constructor(elements?: number[]): this;
  plus(m: CSG$Matrix4x4): CSG$Matrix4x4;
  minus(m: CSG$Matrix4x4): CSG$Matrix4x4;
  multiply(m: CSG$Matrix4x4): CSG$Matrix4x4;
  clone(): CSG$Matrix4x4;
  rightMultiply1x3Vector(v: CSG$Vector3D): CSG$Vector3D;
  leftMultiply1x3Vector(v: CSG$Vector3D): CSG$Vector3D;
  rightMultiply1x2Vector(v: CSG$Vector2D): CSG$Vector2D;
  leftMultiply1x2Vector(v: CSG$Vector2D): CSG$Vector2D;
  isMirroring(): boolean;
  static unity(): CSG$Matrix4x4;
  static rotationX(degrees: number): CSG$Matrix4x4;
  static rotationY(degrees: number): CSG$Matrix4x4;
  static rotationZ(degrees: number): CSG$Matrix4x4;
  static rotation(
    rotationCenter: CSG$CSG$Vector3D,
    rotationAxis: CSG$CSG$Vector3D,
    degrees: number
  ): CSG$Matrix4x4;
  static translation(v: number[]): CSG$Matrix4x4;
  static translation(v: CSG$Vector3D): CSG$Matrix4x4;
  static mirroring(plane: CSG$Plane): CSG$Matrix4x4;
  static scaling(v: number[]): CSG$Matrix4x4;
  static scaling(v: CSG$Vector3D): CSG$Matrix4x4;
}

declare class CSG$Vector2D mixins CxG {
  x: number;
  y: number;
  constructor(x: number, y: number): this;
  constructor(x: number[]): this;
  constructor(x: CSG$Vector2D): this;
  static fromAngle(radians: number): CSG$Vector2D;
  static fromAngleDegrees(degrees: number): CSG$Vector2D;
  static fromAngleRadians(radians: number): CSG$Vector2D;
  static Create(x: number, y: number): CSG$Vector2D;
  toVector3D(z: number): CSG$Vector3D;
  equals(a: CSG$Vector2D): boolean;
  clone(): CSG$Vector2D;
  negated(): CSG$Vector2D;
  plus(a: CSG$Vector2D): CSG$Vector2D;
  minus(a: CSG$Vector2D): CSG$Vector2D;
  times(a: number): CSG$Vector2D;
  dividedBy(a: number): CSG$Vector2D;
  dot(a: CSG$Vector2D): number;
  lerp(a: CSG$Vector2D, t: number): CSG$Vector2D;
  length(): number;
  distanceTo(a: CSG$Vector2D): number;
  distanceToSquared(a: CSG$Vector2D): number;
  lengthSquared(): number;
  unit(): CSG$Vector2D;
  cross(a: CSG$Vector2D): number;
  normal(): CSG$Vector2D;
  multiply4x4(matrix4x4: CSG$Matrix4x4): CSG$Vector2D;
  transform(matrix4x4: CSG$Matrix4x4): CSG$Vector2D;
  angle(): number;
  angleDegrees(): number;
  angleRadians(): number;
  min(p: CSG$Vector2D): CSG$Vector2D;
  max(p: CSG$Vector2D): CSG$Vector2D;
  toString(): string;
  abs(): CSG$Vector2D;
}

declare class CSG$Line2D mixins CxG {
  normal: CSG$Vector2D;
  w: number;
  constructor(normal: CSG$Vector2D, w: number): this;
  static fromPoints(p1: CSG$Vector2D, p2: CSG$Vector2D): CSG$Line2D;
  reverse(): CSG$Line2D;
  equals(l: CSG$Line2D): boolean;
  origin(): CSG$Vector2D;
  direction(): CSG$Vector2D;
  xAtY(y: number): number;
  absDistanceToPoint(point: CSG$Vector2D): number;
  intersectWithLine(line2d: CSG$Line2D): CSG$Vector2D;
  transform(matrix4x4: CSG$Matrix4x4): CSG$Line2D;
}

declare class CSG$Line3D mixins CxG {
  point: CSG$Vector3D;
  direction: CSG$Vector3D;
  constructor(point: CSG$Vector3D, direction: CSG$Vector3D): this;
  static fromPoints(p1: CSG$Vector3D, p2: CSG$Vector3D): CSG$Line3D;
  static fromPlanes(p1: CSG$Plane, p2: CSG$Plane): CSG$Line3D;
  intersectWithPlane(plane: CSG$Plane): CSG$Vector3D;
  clone(): CSG$Line3D;
  reverse(): CSG$Line3D;
  transform(matrix4x4: CSG$Matrix4x4): CSG$Line3D;
  closestPointOnLine(point: CSG$Vector3D): CSG$Vector3D;
  distanceToPoint(point: CSG$Vector3D): number;
  equals(line3d: CSG$Line3D): boolean;
}

declare class CSG$OrthoNormalBasis mixins CxG {
  v: CSG$Vector3D;
  u: CSG$Vector3D;
  plane: CSG$Plane;
  planeorigin: CSG$Vector3D;
  constructor(plane: CSG$Plane, rightvector?: CSG$Vector3D): this;
  static GetCartesian(xaxisid: string, yaxisid: string): CSG$OrthoNormalBasis;
  static Z0Plane(): CSG$OrthoNormalBasis;
  getProjectionMatrix(): CSG$Matrix4x4;
  getInverseProjectionMatrix(): CSG$Matrix4x4;
  to2D(vec3: CSG$Vector3D): CSG$Vector2D;
  to3D(vec2: CSG$Vector2D): CSG$Vector3D;
  line3Dto2D(line3d: CSG$Line3D): CSG$Line2D;
  line2Dto3D(line2d: CSG$Line2D): CSG$Line3D;
  transform(matrix4x4: CSG$Matrix4x4): CSG$OrthoNormalBasis;
}

declare function CSG$interpolateBetween2DPointsForY(
  point1: CSG$Vector2D,
  point2: CSG$Vector2D,
  y: number
): number;

declare function CSG$reTesselateCoplanarPolygons(
  sourcepolygons: CSG$CSG$Polygon[],
  destpolygons: CSG$CSG$Polygon[]
): void;

declare class CSG$fuzzyFactory {
  multiplier: number;
  lookuptable: any;
  constructor(numdimensions: number, tolerance: number): this;
  lookupOrCreate(els: any, creatorCallback: any): any;
}

declare class CSG$fuzzyCSGFactory {
  vertexfactory: CSG$fuzzyFactory;
  planefactory: CSG$fuzzyFactory;
  polygonsharedfactory: any;
  constructor(): this;
  getPolygonShared(
    sourceshared: CSG$Polygon.Polygon$Shared
  ): CSG$Polygon.Polygon$Shared;
  getVertex(sourcevertex: CSG$Vertex): CSG$Vertex;
  getPlane(sourceplane: CSG$Plane): CSG$Plane;
  getPolygon(sourcepolygon: CSG$Polygon): CSG$Polygon;
  getCSG(sourcecsg: CSG): CSG;
}

declare var CSG$staticTag: number;

declare function CSG$getTag(): number;

declare class CSG$Properties {
  CSG$cube: CSG$Properties;
  center: any;
  facecenters: any[];
  CSG$roundedCube: CSG$Properties;
  CSG$cylinder: CSG$Properties;
  start: any;
  end: any;
  facepointH: any;
  facepointH90: any;
  CSG$sphere: CSG$Properties;
  facepoint: any;
  CSG$roundedCylinder: any;
  _transform(matrix4x4: CSG$Matrix4x4): CSG$Properties;
  _merge(otherproperties: CSG$Properties): CSG$Properties;
  static transformObj(source: any, result: any, matrix4x4: CSG$Matrix4x4): void;
  static cloneObj(source: any, result: any): void;
  static addFrom(result: any, otherproperties: CSG$Properties): void;
}

declare class CSG$Connector mixins CxG {
  point: CSG$Vector3D;
  axisvector: CSG$Vector3D;
  normalvector: CSG$Vector3D;
  constructor(
    point: number[],
    axisvector: CSG$Vector3D,
    normalvector: number[]
  ): this;
  constructor(
    point: number[],
    axisvector: number[],
    normalvector: number[]
  ): this;
  constructor(
    point: number[],
    axisvector: number[],
    normalvector: CSG$Vector3D
  ): this;
  constructor(
    point: CSG$Vector3D,
    axisvector: number[],
    normalvector: CSG$Vector3D
  ): this;
  constructor(
    point: CSG$Vector3D,
    axisvector: number[],
    normalvector: number[]
  ): this;
  constructor(
    point: CSG$Vector3D,
    axisvector: CSG$Vector3D,
    normalvector: CSG$Vector3D
  ): this;
  normalized(): CSG$Connector;
  transform(matrix4x4: CSG$Matrix4x4): CSG$Connector;
  getTransformationTo(
    other: CSG$Connector,
    mirror: boolean,
    normalrotation: number
  ): CSG$Matrix4x4;
  axisLine(): CSG$Line3D;
  extend(distance: number): CSG$Connector;
}

declare class CSG$ConnectorList {
  connectors_: CSG$Connector[];
  closed: boolean;
  constructor(connectors: CSG$Connector[]): this;
  static defaultNormal: number[];
  static fromPath2D(
    path2D: CSG$CSG$Path2D,
    arg1: any,
    arg2: any
  ): CSG$ConnectorList;
  static _fromPath2DTangents(
    path2D: any,
    start: any,
    end: any
  ): CSG$ConnectorList;
  static _fromPath2DExplicit(path2D: any, angleIsh: any): CSG$ConnectorList;
  setClosed(bool: boolean): void;
  appendConnector(conn: CSG$Connector): void;
  followWith(cagish: any): CSG;
  verify(): void;
}

declare interface CSG$IRadiusOptions {
  radius?: number;
  resolution?: number;
}

declare type CSG$ICircleOptions = {
  center?: CSG$Vector2D | number[]
} & CSG$IRadiusOptions;

declare type CSG$IArcOptions = {
  startangle?: number,
  endangle?: number,
  maketangent?: boolean
} & CSG$ICircleOptions;

declare type CSG$IEllpiticalArcOptions = {
  clockwise?: boolean,
  large?: boolean,
  xaxisrotation?: number,
  xradius?: number,
  yradius?: number
} & CSG$IRadiusOptions;

declare interface CSG$IRectangleOptions {
  center?: CSG$Vector2D;
  corner1?: CSG$Vector2D;
  corner2?: CSG$Vector2D;
  radius?: CSG$Vector2D;
}

declare interface CSG$IRoundRectangleOptions {
  roundradius: number;
  resolution?: number;
}

declare class CSG$Path2D mixins CxG {
  closed: boolean;
  points: CSG$Vector2D[];
  lastBezierControlPoint: CSG$Vector2D;
  constructor(points: number[], closed?: boolean): this;
  constructor(points: CSG$Vector2D[], closed?: boolean): this;
  static arc(options: CSG$IArcOptions): CSG$Path2D;
  concat(otherpath: CSG$Path2D): CSG$Path2D;
  appendPoint(point: CSG$Vector2D): CSG$Path2D;
  appendPoints(points: CSG$Vector2D[]): CSG$Path2D;
  close(): CSG$Path2D;
  rectangularExtrude(width: number, height: number, resolution: number): CSG;
  expandToCAG(pathradius: number, resolution: number): CAG;
  innerToCAG(): CAG;
  transform(matrix4x4: CSG$Matrix4x4): CSG$Path2D;
  appendBezier(controlpoints: any, options: any): CSG$Path2D;
  appendArc(
    endpoint: CSG$Vector2D,
    options: CSG$IEllpiticalArcOptions
  ): CSG$Path2D;
}

declare class Polygon$Shared {
  color: any;
  tag: any;
  constructor(color: any): this;
  static fromObject(obj: any): Polygon$Shared;
  static fromColor(args: any): Polygon$Shared;
  getTag(): any;
  getHash(): any;
}

declare function CSG$fnNumberSort(a: any, b: any): number;

declare function CSG$parseOption(
  options: any,
  optionname: any,
  defaultvalue: any
): any;

declare function CSG$parseOptionAs3DVector(
  options: any,
  optionname: any,
  defaultvalue: any
): CSG$Vector3D;

declare function CSG$parseOptionAs3DVectorList(
  options: any,
  optionname: any,
  defaultvalue: any
): any;

declare function CSG$parseOptionAs2DVector(
  options: any,
  optionname: any,
  defaultvalue: any
): any;

declare function CSG$parseOptionAsFloat(
  options: any,
  optionname: any,
  defaultvalue: any
): any;

declare function CSG$parseOptionAsInt(
  options: any,
  optionname: any,
  defaultvalue: any
): any;

declare function CSG$parseOptionAsBool(
  options: any,
  optionname: any,
  defaultvalue: any
): any;

declare function CSG$cube(options: any): CSG;

declare function CSG$sphere(options: any): CSG;

declare function CSG$cylinder(options: any): CSG;

declare function CSG$roundedCylinder(options: any): CSG;

declare function CSG$roundedCube(options: any): CSG;

/**
 * polyhedron accepts openscad style arguments. I.e. define face vertices clockwise looking from outside
 */
declare function CSG$polyhedron(options: any): CSG;

declare function CSG$IsFloat(n: any): boolean;

declare function CSG$solve2Linear(
  a: any,
  b: any,
  c: any,
  d: any,
  u: any,
  v: any
): number[];

declare class CSG$Vector3D mixins CxG {
  x: number;
  y: number;
  z: number;
  constructor(v3: CSG$Vector3D): this;
  constructor(v2: CSG$Vector2D): this;
  constructor(v2: number[]): this;
  constructor(x: number, y: number): this;
  constructor(x: number, y: number, z: number): this;
  static Create(x: number, y: number, z: number): CSG$Vector3D;
  clone(): CSG$Vector3D;
  negated(): CSG$Vector3D;
  abs(): CSG$Vector3D;
  plus(a: CSG$Vector3D): CSG$Vector3D;
  minus(a: CSG$Vector3D): CSG$Vector3D;
  times(a: number): CSG$Vector3D;
  dividedBy(a: number): CSG$Vector3D;
  dot(a: CSG$Vector3D): number;
  lerp(a: CSG$Vector3D, t: number): CSG$Vector3D;
  lengthSquared(): number;
  length(): number;
  unit(): CSG$Vector3D;
  cross(a: CSG$Vector3D): CSG$Vector3D;
  distanceTo(a: CSG$Vector3D): number;
  distanceToSquared(a: CSG$Vector3D): number;
  equals(a: CSG$Vector3D): boolean;
  multiply4x4(matrix4x4: CSG$Matrix4x4): CSG$Vector3D;
  transform(matrix4x4: CSG$Matrix4x4): CSG$Vector3D;
  toString(): string;
  randomNonParallelVector(): CSG$Vector3D;
  min(p: CSG$Vector3D): CSG$Vector3D;
  max(p: CSG$Vector3D): CSG$Vector3D;
  toStlString(): string;
  toAMFString(): string;
}

declare class CSG$Vertex mixins CxG {
  pos: CSG$Vector3D;
  tag: number;
  constructor(pos: CSG$Vector3D): this;
  static fromObject(obj: any): CSG$Vertex;
  flipped(): CSG$Vertex;
  getTag(): number;
  interpolate(other: CSG$Vertex, t: number): CSG$Vertex;
  transform(matrix4x4: CSG$Matrix4x4): CSG$Vertex;
  toString(): string;
  toStlString(): string;
  toAMFString(): string;
}

declare class CSG$Plane mixins CxG {
  normal: CSG$Vector3D;
  w: number;
  tag: number;
  constructor(normal: CSG$Vector3D, w: number): this;
  static fromObject(obj: any): CSG$Plane;
  static EPSILON: number;
  static fromVector3Ds(
    a: CSG$Vector3D,
    b: CSG$Vector3D,
    c: CSG$Vector3D
  ): CSG$Plane;
  static anyPlaneFromVector3Ds(
    a: CSG$Vector3D,
    b: CSG$Vector3D,
    c: CSG$Vector3D
  ): CSG$Plane;
  static fromPoints(
    a: CSG$Vector3D,
    b: CSG$Vector3D,
    c: CSG$Vector3D
  ): CSG$Plane;
  static fromNormalAndPoint(
    normal: CSG$Vector3D,
    point: CSG$Vector3D
  ): CSG$Plane;
  static fromNormalAndPoint(normal: number[], point: number[]): CSG$Plane;
  flipped(): CSG$Plane;
  getTag(): number;
  equals(n: CSG$Plane): boolean;
  transform(matrix4x4: CSG$Matrix4x4): CSG$Plane;
  splitPolygon(
    polygon: CSG$Polygon
  ): {
    type: any,
    front: any,
    back: any
  };
  splitLineBetweenPoints(p1: CSG$Vector3D, p2: CSG$Vector3D): CSG$Vector3D;
  intersectWithLine(line3d: CSG$Line3D): CSG$Vector3D;
  intersectWithPlane(plane: CSG$Plane): CSG$Line3D;
  signedDistanceToPoint(point: CSG$Vector3D): number;
  toString(): string;
  mirrorPoint(point3d: CSG$Vector3D): CSG$Vector3D;
}

declare class CSG$Polygon mixins CxG {
  vertices: CSG$Vertex[];
  shared: CSG$Polygon.Polygon$Shared;
  plane: CSG$Plane;
  cachedBoundingSphere: any;
  cachedBoundingBox: CSG$Vector3D[];
  static defaultShared: CSG$CSG$Polygon.Polygon$Shared;
  constructor(
    vertices: CSG$Vector3D,
    shared?: CSG$Polygon.Polygon$Shared,
    plane?: CSG$Plane
  ): this;
  constructor(
    vertices: CSG$Vertex[],
    shared?: CSG$Polygon.Polygon$Shared,
    plane?: CSG$Plane
  ): this;
  static fromObject(obj: any): CSG$Polygon;
  checkIfConvex(): void;
  setColor(args: any): CSG$Polygon;
  getSignedVolume(): number;
  getArea(): number;
  getTetraFeatures(features: any): any[];
  extrude(offsetvector: any): CSG;
  boundingSphere(): any;
  boundingBox(): CSG$Vector3D[];
  flipped(): CSG$Polygon;
  transform(matrix4x4: CSG$Matrix4x4): CSG$Polygon;
  toString(): string;
  projectToOrthoNormalBasis(orthobasis: CSG$OrthoNormalBasis): CAG;

  /**
 * Creates solid from slices (CSG.Polygon) by generating walls
 * @param {Object} options Solid generating options
- numslices {Number} Number of slices to be generated
- callback(t, slice) {Function} Callback function generating slices.
arguments: t = [0..1], slice = [0..numslices - 1]
return: CSG.Polygon or null to skip
- loop {Boolean} no flats, only walls, it's used to generate solids like a tor
 */
  solidFromSlices(options: any): CSG;
  static verticesConvex(vertices: CSG$Vertex[], planenormal: any): boolean;
  static createFromPoints(
    points: number[][],
    shared?: CSG$CSG$Polygon.Polygon$Shared,
    plane?: CSG$Plane
  ): CSG$Polygon;
  static isConvexPoint(
    prevpoint: any,
    point: any,
    nextpoint: any,
    normal: any
  ): boolean;
  static isStrictlyConvexPoint(
    prevpoint: any,
    point: any,
    nextpoint: any,
    normal: any
  ): boolean;
  toStlString(): string;
}
declare class CAG$Vertex {
  pos: CSG$CSG$Vector2D;
  tag: number;
  constructor(pos: CSG$CSG$Vector2D): this;
  toString(): string;
  getTag(): number;
}

declare class CAG$Side mixins CxG {
  vertex0: CAG$Vertex;
  vertex1: CAG$Vertex;
  tag: number;
  constructor(vertex0: CAG$Vertex, vertex1: CAG$Vertex): this;
  static _fromFakePolygon(polygon: CSG$CSG$Polygon): CAG$Side;
  toString(): string;
  toPolygon3D(z0: any, z1: any): CSG$CSG$Polygon;
  transform(matrix4x4: CSG$CSG$Matrix4x4): CAG$Side;
  flipped(): CAG$Side;
  direction(): CSG$CSG$Vector2D;
  getTag(): number;
  lengthSquared(): number;
  length(): number;
}

declare class CAG$fuzzyCAGFactory {
  vertexfactory: CSG$CSG$fuzzyFactory;
  constructor(): this;
  getVertex(sourcevertex: CAG$Vertex): CAG$Vertex;
  getSide(sourceside: CAG$Side): CAG$Side;
  getCAG(sourcecag: CAG): CAG;
}
declare var npm$namespace$OpenJsCad: {
  makeAbsoluteUrl: typeof OpenJsCad$makeAbsoluteUrl,
  isChrome: typeof OpenJsCad$isChrome,
  runMainInWorker: typeof OpenJsCad$runMainInWorker,
  expandResultObjectArray: typeof OpenJsCad$expandResultObjectArray,
  checkResult: typeof OpenJsCad$checkResult,
  resultToCompactBinary: typeof OpenJsCad$resultToCompactBinary,
  resultFromCompactBinary: typeof OpenJsCad$resultFromCompactBinary,
  parseJsCadScriptSync: typeof OpenJsCad$parseJsCadScriptSync,
  parseJsCadScriptASync: typeof OpenJsCad$parseJsCadScriptASync,
  getWindowURL: typeof OpenJsCad$getWindowURL,
  textToBlobUrl: typeof OpenJsCad$textToBlobUrl,
  revokeBlobUrl: typeof OpenJsCad$revokeBlobUrl,
  FileSystemApiErrorHandler: typeof OpenJsCad$FileSystemApiErrorHandler,
  AlertUserOfUncaughtExceptions: typeof OpenJsCad$AlertUserOfUncaughtExceptions,
  getParamDefinitions: typeof OpenJsCad$getParamDefinitions,
  log: typeof OpenJsCad$log
};
declare interface OpenJsCad$ILog {
  (x: string): void;
  prevLogTime?: number;
}

declare var OpenJsCad$log: OpenJsCad$ILog;

declare interface OpenJsCad$IViewerOptions {
  drawLines?: boolean;
  drawFaces?: boolean;
  color?: number[];
  bgColor?: number;
  noWebGL?: boolean;
}

declare type OpenJsCad$ProcessorOptions = {
  verbose?: boolean,
  viewerwidth?: number,
  viewerheight?: number,
  viewerheightratio?: number
} & OpenJsCad$IViewerOptions;

declare class OpenJsCad$Viewer {
  constructor(
    containerElm: any,
    size: any,
    options: OpenJsCad$IViewerOptions
  ): this;
  createScene(drawAxes: any, axLen: any): void;
  createCamera(): void;
  createControls(canvas: any): void;
  webGLAvailable(): boolean;
  createRenderer(bool_noWebGL: any): void;
  render(): void;
  animate(): void;
  cancelAnimate(): void;
  refreshRenderer(bool_noWebGL: any): void;
  drawAxes(axLen: any): void;
  setCsg(csg: any, resetZoom: any): void;
  applyDrawOptions(): void;
  clear(): void;
  getUserMeshes(str?: any): THREE.Object3D[];
  resetZoom(r: any): void;
  parseSizeParams(): void;
  handleResize(): void;
}

declare function OpenJsCad$makeAbsoluteUrl(url: any, baseurl: any): any;

declare function OpenJsCad$isChrome(): boolean;

declare function OpenJsCad$runMainInWorker(mainParameters: any): void;

declare function OpenJsCad$expandResultObjectArray(result: any): any;

declare function OpenJsCad$checkResult(result: any): void;

declare function OpenJsCad$resultToCompactBinary(resultin: any): any;

declare function OpenJsCad$resultFromCompactBinary(resultin: any): any;

declare function OpenJsCad$parseJsCadScriptSync(
  script: any,
  mainParameters: any,
  debugging: any
): any;

declare function OpenJsCad$parseJsCadScriptASync(
  script: any,
  mainParameters: any,
  options: any,
  callback: any
): Worker;

declare function OpenJsCad$getWindowURL(): URL;

declare function OpenJsCad$textToBlobUrl(txt: any): string;

declare function OpenJsCad$revokeBlobUrl(url: any): void;

declare function OpenJsCad$FileSystemApiErrorHandler(
  fileError: any,
  operation: any
): void;

declare function OpenJsCad$AlertUserOfUncaughtExceptions(): void;

declare function OpenJsCad$getParamDefinitions(script: any): any[];

declare interface OpenJsCad$EventHandler {
  (ev?: Event): any;
}

/**
 * options parameter:
 * - drawLines: display wireframe lines
 * - drawFaces: display surfaces
 * - bgColor: canvas background color
 * - color: object color
 * - viewerwidth, viewerheight: set rendering size. Works with any css unit.
 *      viewerheight can also be specified as a ratio to width, ie number e (0, 1]
 * - noWebGL: force render without webGL
 * - verbose: show additional info (currently only time used for rendering)
 */
declare interface OpenJsCad$ViewerSize {
  widthDefault: string;
  heightDefault: string;
  width: number;
  height: number;
  heightratio: number;
}

declare class OpenJsCad$Processor {
  constructor(
    containerdiv: HTMLDivElement,
    options?: OpenJsCad$ProcessorOptions,
    onchange?: OpenJsCad$EventHandler
  ): this;
  static convertToSolid(obj: any): any;
  cleanOption(option: any, deflt: any): any;
  toggleDrawOption(str: any): boolean;
  setDrawOption(str: any, bool: any): void;
  handleResize(): void;
  createElements(): void;
  getFilenameForRenderedObject(): string;
  setRenderedObjects(obj: any): void;
  setSelectedObjectIndex(index: number): void;
  selectedFormat(): any;
  selectedFormatInfo(): any;
  updateDownloadLink(): void;
  clearViewer(): void;
  abort(): void;
  enableItems(): void;
  setOpenJsCadPath(path: string): void;
  addLibrary(lib: any): void;
  setError(txt: string): void;
  setDebugging(debugging: boolean): void;
  setJsCad(script: string, filename?: string): void;
  getParamValues(): {};
  rebuildSolid(): void;
  hasSolid(): boolean;
  isProcessing(): boolean;
  clearOutputFile(): void;
  generateOutputFile(): void;
  currentObjectToBlob(): any;
  supportedFormatsForCurrentObject(): string[];
  formatInfo(format: any): any;
  downloadLinkTextForCurrentObject(): string;
  generateOutputFileBlobUrl(): void;
  generateOutputFileFileSystem(): void;
  createParamControls(): void;
}
declare module "three" {
  declare var CSG: {
    fromCSG: (
      csg: CSG,
      defaultColor: any
    ) => {
      colorMesh: THREE.Mesh,
      wireframe: THREE.Mesh,
      boundLen: number
    },
    getGeometryVertex: (geometry: any, vertex_position: any) => number
  };
  declare interface ICanvasRendererOptions {
    canvas?: HTMLCanvasElement;
    alpha?: boolean;
  }
}
declare module "openjscad" {
  declare interface Window {
    Worker: Worker;
    webkitURL: URL;
    requestFileSystem: any;
    webkitRequestFileSystem: any;
  }
  declare interface IAMFStringOptions {
    unit: string;
  }
  declare class CxG {
    toStlString(): string;
    toStlBinary(): void;
    toAMFString(AMFStringOptions?: IAMFStringOptions): void;
    getBounds(): CxG[];
    transform(matrix4x4: CSG$CSG$Matrix4x4): CxG;
    mirrored(plane: CSG$CSG$Plane): CxG;
    mirroredX(): CxG;
    mirroredY(): CxG;
    mirroredZ(): CxG;
    translate(v: number[]): CxG;
    translate(v: CSG$CSG$Vector3D): CxG;
    scale(f: CSG$CSG$Vector3D): CxG;
    rotateX(deg: number): CxG;
    rotateY(deg: number): CxG;
    rotateZ(deg: number): CxG;
    rotate(
      rotationCenter: CSG$CSG$Vector3D,
      rotationAxis: CSG$CSG$Vector3D,
      degrees: number
    ): CxG;
    rotateEulerAngles(
      alpha: number,
      beta: number,
      gamma: number,
      position: number[]
    ): CxG;
  }
  declare interface ICenter {
    center(cAxes: string[]): CxG;
  }
  declare class CSG mixins CxG, ICenter {
    polygons: CSG$CSG$Polygon[];
    properties: CSG$CSG$Properties;
    isCanonicalized: boolean;
    isRetesselated: boolean;
    cachedBoundingBox: CSG$CSG$Vector3D[];
    static defaultResolution2D: number;
    static defaultResolution3D: number;
    static fromPolygons(polygons: CSG$CSG$Polygon[]): CSG;
    static fromSlices(options: any): CSG;
    static fromObject(obj: any): CSG;
    static fromCompactBinary(bin: any): CSG;
    toPolygons(): CSG$CSG$Polygon[];
    union(csg: CSG[]): CSG;
    union(csg: CSG): CSG;
    unionSub(csg: CSG, retesselate?: boolean, canonicalize?: boolean): CSG;
    unionForNonIntersecting(csg: CSG): CSG;
    subtract(csg: CSG[]): CSG;
    subtract(csg: CSG): CSG;
    subtractSub(csg: CSG, retesselate: boolean, canonicalize: boolean): CSG;
    intersect(csg: CSG[]): CSG;
    intersect(csg: CSG): CSG;
    intersectSub(csg: CSG, retesselate?: boolean, canonicalize?: boolean): CSG;
    invert(): CSG;
    transform1(matrix4x4: CSG$CSG$Matrix4x4): CSG;
    transform(matrix4x4: CSG$CSG$Matrix4x4): CSG;
    toString(): string;
    expand(radius: number, resolution: number): CSG;
    contract(radius: number, resolution: number): CSG;
    stretchAtPlane(normal: number[], point: number[], length: number): CSG;
    expandedShell(
      radius: number,
      resolution: number,
      unionWithThis: boolean
    ): CSG;
    canonicalized(): CSG;
    reTesselated(): CSG;
    getBounds(): CSG$CSG$Vector3D[];
    mayOverlap(csg: CSG): boolean;
    cutByPlane(plane: CSG$CSG$Plane): CSG;
    connectTo(
      myConnector: CSG$CSG$Connector,
      otherConnector: CSG$CSG$Connector,
      mirror: boolean,
      normalrotation: number
    ): CSG;
    setShared(shared: CSG$CSG$Polygon.Polygon$Shared): CSG;
    setColor(args: any): CSG;
    toCompactBinary(): {
      class: string,
      numPolygons: number,
      numVerticesPerPolygon: Uint32Array,
      polygonPlaneIndexes: Uint32Array,
      polygonSharedIndexes: Uint32Array,
      polygonVertices: Uint32Array,
      vertexData: Float64Array,
      planeData: Float64Array,
      shared: CSG$CSG$Polygon.Polygon$Shared[]
    };
    toPointCloud(cuberadius: any): CSG;
    getTransformationAndInverseTransformationToFlatLying(): any;
    getTransformationToFlatLying(): any;
    lieFlat(): CSG;
    projectToOrthoNormalBasis(orthobasis: CSG$CSG$OrthoNormalBasis): CAG;
    sectionCut(orthobasis: CSG$CSG$OrthoNormalBasis): CAG;
    fixTJunctions(): CSG;
    toTriangles(): any[];
    getFeatures(features: any): any;
    center(cAxes: string[]): CxG;
    toX3D(): Blob;
    toStlBinary(): Blob;
    toStlString(): string;
    toAMFString(m: IAMFStringOptions): Blob;
  }
  declare class CAG mixins CxG, ICenter {
    sides: CAG$CAG$Side[];
    isCanonicalized: boolean;
    constructor(): this;
    static fromSides(sides: CAG$CAG$Side[]): CAG;
    static fromPoints(points: CSG$CSG$Vector2D[]): CAG;
    static fromPointsNoCheck(points: CSG$CSG$Vector2D[]): CAG;
    static fromFakeCSG(csg: CSG): CAG;
    static linesIntersect(
      p0start: CSG$CSG$Vector2D,
      p0end: CSG$CSG$Vector2D,
      p1start: CSG$CSG$Vector2D,
      p1end: CSG$CSG$Vector2D
    ): boolean;
    static circle(options: CSG$CSG$ICircleOptions): CAG;
    static rectangle(options: CSG$CSG$IRectangleOptions): CAG;
    static roundedRectangle(options: any): CAG;
    static fromCompactBinary(bin: any): CAG;
    toString(): string;
    _toCSGWall(z0: any, z1: any): CSG;
    _toVector3DPairs(m: CSG$CSG$Matrix4x4): CSG$CSG$Vector3D[][];
    _toPlanePolygons(options: any): CSG$CSG$Polygon[];
    _toWallPolygons(options: any): any[];
    union(cag: CAG[]): CAG;
    union(cag: CAG): CAG;
    subtract(cag: CAG[]): CAG;
    subtract(cag: CAG): CAG;
    intersect(cag: CAG[]): CAG;
    intersect(cag: CAG): CAG;
    transform(matrix4x4: CSG$CSG$Matrix4x4): CAG;
    area(): number;
    flipped(): CAG;
    getBounds(): CSG$CSG$Vector2D[];
    isSelfIntersecting(): boolean;
    expandedShell(radius: number, resolution: number): CAG;
    expand(radius: number, resolution: number): CAG;
    contract(radius: number, resolution: number): CAG;
    extrudeInOrthonormalBasis(
      orthonormalbasis: CSG$CSG$OrthoNormalBasis,
      depth: number,
      options?: any
    ): CSG;
    extrudeInPlane(axis1: any, axis2: any, depth: any, options: any): CSG;
    extrude(options: CAG_extrude_options): CSG;
    rotateExtrude(options: any): CSG;
    check(): void;
    canonicalized(): CAG;
    toCompactBinary(): {
      class: string,
      sideVertexIndices: Uint32Array,
      vertexData: Float64Array
    };
    getOutlinePaths(): CSG$CSG$Path2D[];
    overCutInsideCorners(cutterradius: any): CAG;
    center(cAxes: string[]): CxG;
    toDxf(): Blob;
    static PathsToDxf(paths: CSG$CSG$Path2D[]): Blob;
  }
  declare interface CAG_extrude_options {
    offset?: number[];
    twistangle?: number;
    twiststeps?: number;
  }
}
