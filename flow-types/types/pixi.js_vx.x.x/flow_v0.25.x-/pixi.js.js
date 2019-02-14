declare var npm$namespace$PIXI: {
  autoDetectRenderer: typeof PIXI$autoDetectRenderer,
  VERSION: typeof PIXI$VERSION,
  PI_2: typeof PIXI$PI_2,
  RAD_TO_DEG: typeof PIXI$RAD_TO_DEG,
  DEG_TO_RAD: typeof PIXI$DEG_TO_RAD,
  RENDERER_TYPE: typeof PIXI$RENDERER_TYPE,
  BLEND_MODES: typeof PIXI$BLEND_MODES,
  DRAW_MODES: typeof PIXI$DRAW_MODES,
  SCALE_MODES: typeof PIXI$SCALE_MODES,
  WRAP_MODES: typeof PIXI$WRAP_MODES,
  TRANSFORM_MODE: typeof PIXI$TRANSFORM_MODE,
  PRECISION: typeof PIXI$PRECISION,
  GC_MODES: typeof PIXI$GC_MODES,
  SHAPES: typeof PIXI$SHAPES,
  TEXT_GRADIENT: typeof PIXI$TEXT_GRADIENT,
  UPDATE_PRIORITY: typeof PIXI$UPDATE_PRIORITY,
  loader: typeof PIXI$loader,

  Application: typeof PIXI$Application,
  Bounds: typeof PIXI$Bounds,
  Container: typeof PIXI$Container,
  DisplayObject: typeof PIXI$DisplayObject,
  TransformBase: typeof PIXI$TransformBase,
  TransformStatic: typeof PIXI$TransformStatic,
  Transform: typeof PIXI$Transform,
  GraphicsData: typeof PIXI$GraphicsData,
  Graphics: typeof PIXI$Graphics,
  CanvasGraphicsRenderer: typeof PIXI$CanvasGraphicsRenderer,
  GraphicsRenderer: typeof PIXI$GraphicsRenderer,
  WebGLGraphicsData: typeof PIXI$WebGLGraphicsData,
  PrimitiveShader: typeof PIXI$PrimitiveShader,
  Matrix: typeof PIXI$Matrix,
  PointLike: typeof PIXI$PointLike,
  ObservablePoint: typeof PIXI$ObservablePoint,
  Point: typeof PIXI$Point,
  Circle: typeof PIXI$Circle,
  Ellipse: typeof PIXI$Ellipse,
  Polygon: typeof PIXI$Polygon,
  Rectangle: typeof PIXI$Rectangle,
  RoundedRectangle: typeof PIXI$RoundedRectangle,
  SystemRenderer: typeof PIXI$SystemRenderer,
  CanvasRenderer: typeof PIXI$CanvasRenderer,
  CanvasMaskManager: typeof PIXI$CanvasMaskManager,
  CanvasRenderTarget: typeof PIXI$CanvasRenderTarget,
  WebGLRenderer: typeof PIXI$WebGLRenderer,
  WebGLState: typeof PIXI$WebGLState,
  TextureManager: typeof PIXI$TextureManager,
  TextureGarbageCollector: typeof PIXI$TextureGarbageCollector,
  ObjectRenderer: typeof PIXI$ObjectRenderer,
  Quad: typeof PIXI$Quad,
  RenderTarget: typeof PIXI$RenderTarget,
  BlendModeManager: typeof PIXI$BlendModeManager,
  FilterManager: typeof PIXI$FilterManager,
  StencilMaskStack: typeof PIXI$StencilMaskStack,
  MaskManager: typeof PIXI$MaskManager,
  StencilManager: typeof PIXI$StencilManager,
  WebGLManager: typeof PIXI$WebGLManager,
  Filter: typeof PIXI$Filter,
  SpriteMaskFilter: typeof PIXI$SpriteMaskFilter,
  Sprite: typeof PIXI$Sprite,
  BatchBuffer: typeof PIXI$BatchBuffer,
  SpriteRenderer: typeof PIXI$SpriteRenderer,
  CanvasSpriteRenderer: typeof PIXI$CanvasSpriteRenderer,
  TextStyle: typeof PIXI$TextStyle,
  TextMetrics: typeof PIXI$TextMetrics,
  Text: typeof PIXI$Text,
  BaseRenderTexture: typeof PIXI$BaseRenderTexture,
  BaseTexture: typeof PIXI$BaseTexture,
  RenderTexture: typeof PIXI$RenderTexture,
  Texture: typeof PIXI$Texture,
  TextureMatrix: typeof PIXI$TextureMatrix,
  TextureUvs: typeof PIXI$TextureUvs,
  Spritesheet: typeof PIXI$Spritesheet,
  VideoBaseTexture: typeof PIXI$VideoBaseTexture,
  Shader: typeof PIXI$Shader,
  MiniSignalBinding: typeof PIXI$MiniSignalBinding,
  MiniSignal: typeof PIXI$MiniSignal,
  settings: typeof npm$namespace$PIXI$settings,
  accessibility: typeof npm$namespace$PIXI$accessibility,
  CONST: typeof npm$namespace$PIXI$CONST,
  GroupD8: typeof npm$namespace$PIXI$GroupD8,
  CanvasTinter: typeof npm$namespace$PIXI$CanvasTinter,
  ticker: typeof npm$namespace$PIXI$ticker,
  extract: typeof npm$namespace$PIXI$extract,
  extras: typeof npm$namespace$PIXI$extras,
  filters: typeof npm$namespace$PIXI$filters,
  interaction: typeof npm$namespace$PIXI$interaction,
  loaders: typeof npm$namespace$PIXI$loaders,
  mesh: typeof npm$namespace$PIXI$mesh,
  particles: typeof npm$namespace$PIXI$particles,
  prepare: typeof npm$namespace$PIXI$prepare,
  glCore: typeof npm$namespace$PIXI$glCore,
  utils: typeof npm$namespace$PIXI$utils
};
declare var PIXI$VERSION: typeof PIXI$CONST$VERSION;

declare var PIXI$PI_2: typeof PIXI$CONST$PI_2;

declare var PIXI$RAD_TO_DEG: typeof PIXI$CONST$RAD_TO_DEG;

declare var PIXI$DEG_TO_RAD: typeof PIXI$CONST$DEG_TO_RAD;

declare var PIXI$RENDERER_TYPE: typeof PIXI$CONST$RENDERER_TYPE;

declare var PIXI$BLEND_MODES: typeof PIXI$CONST$BLEND_MODES;

declare var PIXI$DRAW_MODES: typeof PIXI$CONST$DRAW_MODES;

declare var PIXI$SCALE_MODES: typeof PIXI$CONST$SCALE_MODES;

declare var PIXI$WRAP_MODES: typeof PIXI$CONST$WRAP_MODES;

declare var PIXI$TRANSFORM_MODE: typeof PIXI$CONST$TRANSFORM_MODE;

declare var PIXI$PRECISION: typeof PIXI$CONST$PRECISION;

declare var PIXI$GC_MODES: typeof PIXI$CONST$GC_MODES;

declare var PIXI$SHAPES: typeof PIXI$CONST$SHAPES;

declare var PIXI$TEXT_GRADIENT: typeof PIXI$CONST$TEXT_GRADIENT;

declare var PIXI$UPDATE_PRIORITY: typeof PIXI$CONST$UPDATE_PRIORITY;

declare function PIXI$autoDetectRenderer(
  width: number,
  height: number,
  options?: PIXI$RendererOptions,
  forceCanvas?: boolean
): PIXI$WebGLRenderer | PIXI$CanvasRenderer;

declare function PIXI$autoDetectRenderer(
  options?: PIXI$RendererOptions
): PIXI$WebGLRenderer | PIXI$CanvasRenderer;

declare var PIXI$loader: PIXI$loaders$Loader;

declare var npm$namespace$PIXI$settings: {
  TARGET_FPMS: typeof PIXI$settings$TARGET_FPMS,
  MIPMAP_TEXTURES: typeof PIXI$settings$MIPMAP_TEXTURES,
  RESOLUTION: typeof PIXI$settings$RESOLUTION,
  FILTER_RESOLUTION: typeof PIXI$settings$FILTER_RESOLUTION,
  SPRITE_MAX_TEXTURES: typeof PIXI$settings$SPRITE_MAX_TEXTURES,
  SPRITE_BATCH_SIZE: typeof PIXI$settings$SPRITE_BATCH_SIZE,
  RETINA_PREFIX: typeof PIXI$settings$RETINA_PREFIX,
  RENDER_OPTIONS: typeof PIXI$settings$RENDER_OPTIONS,
  TRANSFORM_MODE: typeof PIXI$settings$TRANSFORM_MODE,
  GC_MODE: typeof PIXI$settings$GC_MODE,
  GC_MAX_IDLE: typeof PIXI$settings$GC_MAX_IDLE,
  GC_MAX_CHECK_COUNT: typeof PIXI$settings$GC_MAX_CHECK_COUNT,
  WRAP_MODE: typeof PIXI$settings$WRAP_MODE,
  SCALE_MODE: typeof PIXI$settings$SCALE_MODE,
  PRECISION_VERTEX: typeof PIXI$settings$PRECISION_VERTEX,
  PRECISION_FRAGMENT: typeof PIXI$settings$PRECISION_FRAGMENT,
  PRECISION: typeof PIXI$settings$PRECISION,
  UPLOADS_PER_FRAME: typeof PIXI$settings$UPLOADS_PER_FRAME,
  CAN_UPLOAD_SAME_BUFFER: typeof PIXI$settings$CAN_UPLOAD_SAME_BUFFER,
  MESH_CANVAS_PADDING: typeof PIXI$settings$MESH_CANVAS_PADDING
};
declare var PIXI$settings$TARGET_FPMS: number;

declare var PIXI$settings$MIPMAP_TEXTURES: boolean;

declare var PIXI$settings$RESOLUTION: number;

declare var PIXI$settings$FILTER_RESOLUTION: number;

declare var PIXI$settings$SPRITE_MAX_TEXTURES: number;

declare var PIXI$settings$SPRITE_BATCH_SIZE: number;

declare var PIXI$settings$RETINA_PREFIX: RegExp;

declare var PIXI$settings$RENDER_OPTIONS: {
  view: HTMLCanvasElement | null,
  antialias: boolean,
  forceFXAA: boolean,
  autoResize: boolean,
  transparent: boolean,
  backgroundColor: number,
  clearBeforeRender: boolean,
  preserveDrawingBuffer: boolean,
  roundPixels: boolean,
  width: number,
  height: number,
  legacy: boolean
};

declare var PIXI$settings$TRANSFORM_MODE: number;

declare var PIXI$settings$GC_MODE: number;

declare var PIXI$settings$GC_MAX_IDLE: number;

declare var PIXI$settings$GC_MAX_CHECK_COUNT: number;

declare var PIXI$settings$WRAP_MODE: number;

declare var PIXI$settings$SCALE_MODE: number;

declare var PIXI$settings$PRECISION_VERTEX: string;

declare var PIXI$settings$PRECISION_FRAGMENT: string;

declare var PIXI$settings$PRECISION: string;

declare var PIXI$settings$UPLOADS_PER_FRAME: number;

declare var PIXI$settings$CAN_UPLOAD_SAME_BUFFER: boolean;

declare var PIXI$settings$MESH_CANVAS_PADDING: number;

/**
 * @static
 * @name PRECISION
 * @memberof PIXI.settings
 * @see PIXI.PRECISION
 * @deprecated since version 4.4.0
 */
declare type PIXI$settings$PRECISION = number;

declare var npm$namespace$PIXI$accessibility: {
  AccessibilityManager: typeof PIXI$accessibility$AccessibilityManager
};
declare class PIXI$accessibility$AccessibilityManager {
  constructor(renderer: PIXI$CanvasRenderer | PIXI$WebGLRenderer): this;
  activate(): void;
  deactivate(): void;
  div: HTMLElement;
  pool: HTMLElement[];
  renderId: number;
  debug: boolean;
  renderer: PIXI$SystemRenderer;
  children: accessibility$AccessibleTarget[];
  isActive: boolean;
  updateAccessibleObjects(displayObject: PIXI$DisplayObject): void;
  update(): void;
  capHitArea(hitArea: PIXI$HitArea): void;
  addChild(displayObject: PIXI$DisplayObject): void;
  _onClick(e: PIXI$interaction$InteractionEvent): void;
  _onFocus(e: PIXI$interaction$InteractionEvent): void;
  _onFocusOut(e: PIXI$interaction$InteractionEvent): void;
  _onKeyDown(e: PIXI$interaction$InteractionEvent): void;
  _onMouseMove(e: MouseEvent): void;
  destroy(): void;
}

declare interface PIXI$accessibility$AccessibleTarget {
  accessible: boolean;
  accessibleTitle: string | null;
  accessibleHint: string | null;
  tabIndex: number;
}

declare var npm$namespace$PIXI$CONST: {
  VERSION: typeof PIXI$CONST$VERSION,
  PI_2: typeof PIXI$CONST$PI_2,
  RAD_TO_DEG: typeof PIXI$CONST$RAD_TO_DEG,
  DEG_TO_RAD: typeof PIXI$CONST$DEG_TO_RAD,
  TARGET_FPMS: typeof PIXI$CONST$TARGET_FPMS,
  RENDERER_TYPE: typeof PIXI$CONST$RENDERER_TYPE,
  BLEND_MODES: typeof PIXI$CONST$BLEND_MODES,
  DRAW_MODES: typeof PIXI$CONST$DRAW_MODES,
  SCALE_MODES: typeof PIXI$CONST$SCALE_MODES,
  GC_MODES: typeof PIXI$CONST$GC_MODES,
  WRAP_MODES: typeof PIXI$CONST$WRAP_MODES,
  TRANSFORM_MODE: typeof PIXI$CONST$TRANSFORM_MODE,
  URL_FILE_EXTENSION: typeof PIXI$CONST$URL_FILE_EXTENSION,
  DATA_URI: typeof PIXI$CONST$DATA_URI,
  SVG_SIZE: typeof PIXI$CONST$SVG_SIZE,
  SHAPES: typeof PIXI$CONST$SHAPES,
  PRECISION: typeof PIXI$CONST$PRECISION,
  TEXT_GRADIENT: typeof PIXI$CONST$TEXT_GRADIENT,
  UPDATE_PRIORITY: typeof PIXI$CONST$UPDATE_PRIORITY
};
declare var PIXI$CONST$VERSION: string;

declare var PIXI$CONST$PI_2: number;

declare var PIXI$CONST$RAD_TO_DEG: number;

declare var PIXI$CONST$DEG_TO_RAD: number;

declare var PIXI$CONST$TARGET_FPMS: number;

declare var PIXI$CONST$RENDERER_TYPE: {
  UNKNOWN: number,
  WEBGL: number,
  CANVAS: number
};

declare var PIXI$CONST$BLEND_MODES: {
  NORMAL: number,
  ADD: number,
  MULTIPLY: number,
  SCREEN: number,
  OVERLAY: number,
  DARKEN: number,
  LIGHTEN: number,
  COLOR_DODGE: number,
  COLOR_BURN: number,
  HARD_LIGHT: number,
  SOFT_LIGHT: number,
  DIFFERENCE: number,
  EXCLUSION: number,
  HUE: number,
  SATURATION: number,
  COLOR: number,
  LUMINOSITY: number,
  NORMAL_NPM: number,
  ADD_NPM: number,
  SCREEN_NPM: number
};

declare var PIXI$CONST$DRAW_MODES: {
  POINTS: number,
  LINES: number,
  LINE_LOOP: number,
  LINE_STRIP: number,
  TRIANGLES: number,
  TRIANGLE_STRIP: number,
  TRIANGLE_FAN: number
};

declare var PIXI$CONST$SCALE_MODES: {
  LINEAR: number,
  NEAREST: number
};

declare var PIXI$CONST$GC_MODES: {
  AUTO: number,
  MANUAL: number
};

declare var PIXI$CONST$WRAP_MODES: {
  CLAMP: number,
  MIRRORED_REPEAT: number,
  REPEAT: number
};

declare var PIXI$CONST$TRANSFORM_MODE: {
  DEFAULT: number,
  DYNAMIC: number,
  STATIC: number
};

declare var PIXI$CONST$URL_FILE_EXTENSION: RegExp | string;

declare var PIXI$CONST$DATA_URI: RegExp | string;

declare var PIXI$CONST$SVG_SIZE: RegExp | string;

declare var PIXI$CONST$SHAPES: {
  POLY: number,
  RECT: number,
  CIRC: number,
  ELIP: number,
  RREC: number
};

declare var PIXI$CONST$PRECISION: {
  LOW: string,
  MEDIUM: string,
  HIGH: string
};

declare var PIXI$CONST$TEXT_GRADIENT: {
  LINEAR_VERTICAL: number,
  LINEAR_HORIZONTAL: number
};

declare var PIXI$CONST$UPDATE_PRIORITY: {
  INTERACTION: number,
  HIGH: number,
  NORMAL: number,
  LOW: number,
  UTILITY: number
};

declare interface PIXI$StageOptions {
  children?: boolean;
  texture?: boolean;
  baseTexture?: boolean;
}

declare class PIXI$Application {
  constructor(options?: PIXI$ApplicationOptions): this;
  constructor(
    width?: number,
    height?: number,
    options?: PIXI$ApplicationOptions,
    noWebGL?: boolean,
    sharedTicker?: boolean,
    sharedLoader?: boolean
  ): this;
  renderer: PIXI$WebGLRenderer | PIXI$CanvasRenderer;
  stage: PIXI$Container;
  PIXI$ticker: PIXI$ticker$Ticker;
  PIXI$loader: PIXI$loaders$Loader;
  screen: PIXI$Rectangle;
  stop(): void;
  start(): void;
  render(): void;
  destroy(
    removeView?: boolean,
    stageOptions?: PIXI$StageOptions | boolean
  ): void;
  view: HTMLCanvasElement;
}

declare interface PIXI$DestroyOptions {
  children?: boolean;
  texture?: boolean;
  baseTexture?: boolean;
}

declare class PIXI$Bounds {
  minX: number;
  minY: number;
  maxX: number;
  maxY: number;
  rect: PIXI$Rectangle;
  isEmpty(): boolean;
  clear(): void;
  getRectangle(rect?: PIXI$Rectangle): PIXI$Rectangle;
  addPoint(point: PIXI$Point): void;
  addQuad(vertices: ArrayLike<number>): PIXI$Bounds | void;
  addFrame(
    transform: PIXI$Transform,
    x0: number,
    y0: number,
    x1: number,
    y1: number
  ): void;
  addVertices(
    transform: PIXI$Transform,
    vertices: ArrayLike<number>,
    beginOffset: number,
    endOffset: number
  ): void;
  addBounds(bounds: PIXI$Bounds): void;
  addBoundsMask(bounds: PIXI$Bounds, mask: PIXI$Bounds): void;
  addBoundsArea(bounds: PIXI$Bounds, area: PIXI$Rectangle): void;
}

declare class PIXI$Container mixins DisplayObject {
  getChildByName<T: PIXI$DisplayObject>(name: string): T;
  children: PIXI$DisplayObject[];
  width: number;
  height: number;
  onChildrenChange: (...args: any[]) => void;
  addChild<T: PIXI$DisplayObject>(...children: T[]): T;
  addChildAt<T: PIXI$DisplayObject>(child: T, index: number): T;
  swapChildren(child: PIXI$DisplayObject, child2: PIXI$DisplayObject): void;
  getChildIndex(child: PIXI$DisplayObject): number;
  setChildIndex(child: PIXI$DisplayObject, index: number): void;
  getChildAt<T: PIXI$DisplayObject>(index: number): T;
  removeChild<T: PIXI$DisplayObject>(child: PIXI$DisplayObject): T;
  removeChildAt<T: PIXI$DisplayObject>(index: number): T;
  removeChildren<T: PIXI$DisplayObject>(
    beginIndex?: number,
    endIndex?: number
  ): T[];
  updateTransform(): void;
  calculateBounds(): void;
  _calculateBounds(): void;
  containerUpdateTransform(): void;
  renderWebGL(renderer: PIXI$WebGLRenderer): void;
  renderAdvancedWebGL(renderer: PIXI$WebGLRenderer): void;
  _renderWebGL(renderer: PIXI$WebGLRenderer): void;
  _renderCanvas(renderer: PIXI$CanvasRenderer): void;
  renderCanvas(renderer: PIXI$CanvasRenderer): void;
  destroy(options?: PIXI$DestroyOptions | boolean): void;
  once(
    event: PIXI$interaction$InteractionEventTypes | "added" | "removed",
    fn: (displayObject: PIXI$DisplayObject) => void,
    context?: any
  ): this;
  once(event: string, fn: Function, context?: any): this;
  on(
    event: PIXI$interaction$InteractionEventTypes | "added" | "removed",
    fn: (displayObject: PIXI$DisplayObject) => void,
    context?: any
  ): this;
  on(event: string, fn: Function, context?: any): this;
  off(event: "added" | "removed" | string, fn?: Function, context?: any): this;
}

declare class PIXI$DisplayObject
  mixins utils$EventEmitter,
    interaction$InteractiveTarget,
    accessibility$AccessibleTarget {
  _cacheAsBitmap: boolean;
  _cacheData: boolean;
  cacheAsBitmap: boolean;
  _renderCachedWebGL(renderer: PIXI$WebGLRenderer): void;
  _initCachedDisplayObject(renderer: PIXI$WebGLRenderer): void;
  _renderCachedCanvas(renderer: PIXI$CanvasRenderer): void;
  _initCachedDisplayObjectCanvas(renderer: PIXI$CanvasRenderer): void;
  _calculateCachedBounds(): PIXI$Rectangle;
  _getCachedLocalBounds(): PIXI$Rectangle;
  _destroyCachedDisplayObject(): void;
  _cacheAsBitmapDestroy(options: boolean | any): void;
  name: string | null;
  getGlobalPosition(point?: PIXI$Point, skipUpdate?: boolean): PIXI$Point;
  accessible: boolean;
  accessibleTitle: string | null;
  accessibleHint: string | null;
  tabIndex: number;
  interactive: boolean;
  interactiveChildren: boolean;
  hitArea:
    | PIXI$Rectangle
    | PIXI$Circle
    | PIXI$Ellipse
    | PIXI$Polygon
    | PIXI$RoundedRectangle
    | PIXI$HitArea;
  buttonMode: boolean;
  cursor: string;
  trackedPointers: {
    [key: number]: PIXI$interaction$InteractionTrackingData
  };
  defaultCursor: string;
  transform: PIXI$TransformBase;
  alpha: number;
  visible: boolean;
  renderable: boolean;
  parent: PIXI$Container;
  worldAlpha: number;
  filterArea: PIXI$Rectangle | null;
  _filters: Array<PIXI$Filter<any>> | null;
  _enabledFilters: Array<PIXI$Filter<any>> | null;
  _bounds: PIXI$Bounds;
  _boundsID: number;
  _lastBoundsID: number;
  _boundsRect: PIXI$Rectangle;
  _localBoundsRect: PIXI$Rectangle;
  _mask: PIXI$Graphics | PIXI$Sprite | null;
  _destroyed: boolean;
  x: number;
  y: number;
  worldTransform: PIXI$Matrix;
  localTransform: PIXI$Matrix;
  position: PIXI$Point | PIXI$ObservablePoint;
  scale: PIXI$Point | PIXI$ObservablePoint;
  pivot: PIXI$Point | PIXI$ObservablePoint;
  skew: PIXI$ObservablePoint;
  rotation: number;
  worldVisible: boolean;
  mask: PIXI$Graphics | PIXI$Sprite | null;
  PIXI$filters: Array<PIXI$Filter<any>> | null;
  updateTransform(): void;
  displayObjectUpdateTransform(): void;
  _recursivePostUpdateTransform(): void;
  getBounds(skipUpdate?: boolean, rect?: PIXI$Rectangle): PIXI$Rectangle;
  getLocalBounds(rect?: PIXI$Rectangle): PIXI$Rectangle;
  toGlobal(position: PIXI$PointLike): PIXI$Point;
  toGlobal<T: PIXI$PointLike>(
    position: PIXI$PointLike,
    point?: T,
    skipUpdate?: boolean
  ): T;
  toLocal(position: PIXI$PointLike, from?: PIXI$DisplayObject): PIXI$Point;
  toLocal<T: PIXI$PointLike>(
    position: PIXI$PointLike,
    from?: PIXI$DisplayObject,
    point?: T,
    skipUpdate?: boolean
  ): T;
  renderWebGL(renderer: PIXI$WebGLRenderer): void;
  renderCanvas(renderer: PIXI$CanvasRenderer): void;
  setParent(container: PIXI$Container): PIXI$Container;
  setTransform(
    x?: number,
    y?: number,
    scaleX?: number,
    scaleY?: number,
    rotation?: number,
    skewX?: number,
    skewY?: number,
    pivotX?: number,
    pivotY?: number
  ): PIXI$DisplayObject;
  destroy(): void;
  on(
    event: PIXI$interaction$InteractionEventTypes,
    fn: (event: PIXI$interaction$InteractionEvent) => void,
    context?: any
  ): this;
  once(
    event: PIXI$interaction$InteractionEventTypes,
    fn: (event: PIXI$interaction$InteractionEvent) => void,
    context?: any
  ): this;
  removeListener(
    event: PIXI$interaction$InteractionEventTypes,
    fn?: (event: PIXI$interaction$InteractionEvent) => void,
    context?: any
  ): this;
  removeAllListeners(event?: PIXI$interaction$InteractionEventTypes): this;
  off(
    event: PIXI$interaction$InteractionEventTypes,
    fn?: (event: PIXI$interaction$InteractionEvent) => void,
    context?: any
  ): this;
  addListener(
    event: PIXI$interaction$InteractionEventTypes,
    fn: (event: PIXI$interaction$InteractionEvent) => void,
    context?: any
  ): this;
}

declare class PIXI$TransformBase {
  static IDENTITY: PIXI$TransformBase;
  worldTransform: PIXI$Matrix;
  localTransform: PIXI$Matrix;
  _worldID: number;
  _parentID: number;
  updateLocalTransform(): void;
  updateTransform(parentTransform: PIXI$TransformBase): void;
  updateWorldTransform(parentTransform: PIXI$TransformBase): void;
}

declare class PIXI$TransformStatic mixins TransformBase {
  position: PIXI$ObservablePoint;
  scale: PIXI$ObservablePoint;
  pivot: PIXI$ObservablePoint;
  skew: PIXI$ObservablePoint;
  _rotation: number;
  _sr: number;
  _cr: number;
  _cy: number;
  _sy: number;
  _sx: number;
  _cx: number;
  _localID: number;
  _currentLocalID: number;
  onChange(): void;
  updateSkew(): void;
  setFromMatrix(matrix: PIXI$Matrix): void;
  rotation: number;
}

declare class PIXI$Transform mixins TransformBase {
  constructor(): this;
  position: PIXI$Point;
  scale: PIXI$Point;
  skew: PIXI$ObservablePoint;
  pivot: PIXI$Point;
  _rotation: number;
  _sr: number;
  _cr: number;
  _cy: number;
  _sy: number;
  _sx: number;
  _cx: number;
  updateSkew(): void;
  setFromMatrix(matrix: PIXI$Matrix): void;
  rotation: number;
}

declare class PIXI$GraphicsData {
  constructor(
    lineWidth: number,
    lineColor: number,
    lineAlpha: number,
    fillColor: number,
    fillAlpha: number,
    fill: boolean,
    nativeLines: boolean,
    shape:
      | PIXI$Circle
      | PIXI$Rectangle
      | PIXI$Ellipse
      | PIXI$Polygon
      | PIXI$RoundedRectangle
      | any,
    lineAlignment?: number
  ): this;
  lineWidth: number;
  lineAlignment: number;
  nativeLines: boolean;
  lineColor: number;
  lineAlpha: number;
  _lineTint: number;
  fillColor: number;
  fillAlpha: number;
  _fillTint: number;
  fill: boolean;
  holes:
    | PIXI$Circle[]
    | PIXI$Rectangle[]
    | PIXI$Ellipse[]
    | PIXI$Polygon[]
    | PIXI$RoundedRectangle[]
    | any[];
  shape:
    | PIXI$Circle
    | PIXI$Rectangle
    | PIXI$Ellipse
    | PIXI$Polygon
    | PIXI$RoundedRectangle
    | any;
  type: number;
  clone(): PIXI$GraphicsData;
  addHole(
    shape:
      | PIXI$Circle
      | PIXI$Rectangle
      | PIXI$Ellipse
      | PIXI$Polygon
      | PIXI$RoundedRectangle
      | any
  ): void;
  destroy(options?: PIXI$DestroyOptions | boolean): void;
}

declare class PIXI$Graphics mixins Container {
  static CURVES: {
    adaptive: boolean,
    maxLength: number,
    minSegments: number,
    maxSegments: number
  };
  constructor(nativeLines?: boolean): this;
  fillAlpha: number;
  lineWidth: number;
  nativeLines: boolean;
  lineColor: number;
  lineAlignment: number;
  graphicsData: PIXI$GraphicsData[];
  tint: number;
  _prevTint: number;
  blendMode: number;
  currentPath: PIXI$GraphicsData;
  _webGL: any;
  isMask: boolean;
  boundsPadding: number;
  _localBounds: PIXI$Bounds;
  dirty: number;
  canvasTintDirty: number;
  fastRectDirty: number;
  clearDirty: number;
  boundsDirty: number;
  cachedSpriteDirty: boolean;
  _spriteRect: PIXI$Rectangle;
  _fastRect: boolean;
  static _SPRITE_TEXTURE: PIXI$Texture;
  clone(): PIXI$Graphics;
  _quadraticCurveLength(
    fromX: number,
    fromY: number,
    cpX: number,
    cpY: number,
    toX: number,
    toY: number
  ): number;
  _bezierCurveLength(
    fromX: number,
    fromY: number,
    cpX: number,
    cpY: number,
    cpX2: number,
    cpY2: number,
    toX: number,
    toY: number
  ): number;
  _segmentsCount(length: number): number;
  lineStyle(
    lineWidth?: number,
    color?: number,
    alpha?: number,
    alignment?: number
  ): PIXI$Graphics;
  moveTo(x: number, y: number): PIXI$Graphics;
  lineTo(x: number, y: number): PIXI$Graphics;
  quadraticCurveTo(
    cpX: number,
    cpY: number,
    toX: number,
    toY: number
  ): PIXI$Graphics;
  bezierCurveTo(
    cpX: number,
    cpY: number,
    cpX2: number,
    cpY2: number,
    toX: number,
    toY: number
  ): PIXI$Graphics;
  arcTo(
    x1: number,
    y1: number,
    x2: number,
    y2: number,
    radius: number
  ): PIXI$Graphics;
  arc(
    cx: number,
    cy: number,
    radius: number,
    startAngle: number,
    endAngle: number,
    anticlockwise?: boolean
  ): PIXI$Graphics;
  beginFill(color: number, alpha?: number): PIXI$Graphics;
  endFill(): PIXI$Graphics;
  drawRect(x: number, y: number, width: number, height: number): PIXI$Graphics;
  drawRoundedRect(
    x: number,
    y: number,
    width: number,
    height: number,
    radius: number
  ): PIXI$Graphics;
  drawCircle(x: number, y: number, radius: number): PIXI$Graphics;
  drawEllipse(
    x: number,
    y: number,
    width: number,
    height: number
  ): PIXI$Graphics;
  drawPolygon(path: number[] | PIXI$Point[] | PIXI$Polygon): PIXI$Graphics;
  drawStar(
    x: number,
    y: number,
    points: number,
    radius: number,
    innerRadius: number,
    rotation?: number
  ): PIXI$Graphics;
  clear(): PIXI$Graphics;
  isFastRect(): boolean;
  _renderCanvas(renderer: PIXI$CanvasRenderer): void;
  _calculateBounds(): PIXI$Rectangle;
  _renderSpriteRect(renderer: PIXI$SystemRenderer): void;
  containsPoint(point: PIXI$Point): boolean;
  updateLocalBounds(): void;
  drawShape(
    shape:
      | PIXI$Circle
      | PIXI$Rectangle
      | PIXI$Ellipse
      | PIXI$Polygon
      | PIXI$RoundedRectangle
      | any
  ): PIXI$GraphicsData;
  generateCanvasTexture(scaleMode?: number, resolution?: number): PIXI$Texture;
  closePath(): PIXI$Graphics;
  addHole(): PIXI$Graphics;
  destroy(options?: PIXI$DestroyOptions | boolean): void;
}

declare class PIXI$CanvasGraphicsRenderer {
  constructor(renderer: PIXI$SystemRenderer): this;
  render(graphics: PIXI$Graphics): void;
  updateGraphicsTint(graphics: PIXI$Graphics): void;
  renderPolygon(
    points: PIXI$Point[],
    close: boolean,
    context: CanvasRenderingContext2D
  ): void;
  destroy(): void;
}

declare class PIXI$GraphicsRenderer mixins ObjectRenderer {
  constructor(renderer: PIXI$CanvasRenderer): this;
  graphicsDataPool: PIXI$GraphicsData[];
  primitiveShader: PIXI$PrimitiveShader;
  gl: WebGLRenderingContext;
  CONTEXT_UID: number;
  destroy(): void;
  render(graphics: PIXI$Graphics): void;
  updateGraphics(graphics: PIXI$Graphics): void;
  getWebGLData(
    webGL: WebGLRenderingContext,
    type: number,
    nativeLines: number
  ): PIXI$WebGLGraphicsData;
}

declare class PIXI$WebGLGraphicsData {
  constructor(
    gl: WebGLRenderingContext,
    shader: PIXI$glCore$GLShader,
    attribsState: PIXI$glCore$AttribState
  ): this;
  gl: WebGLRenderingContext;
  color: number[];
  points: PIXI$Point[];
  indices: number[];
  buffer: WebGLBuffer;
  indexBuffer: WebGLBuffer;
  dirty: boolean;
  glPoints: number[];
  glIndices: number[];
  shader: PIXI$glCore$GLShader;
  vao: PIXI$glCore$VertexArrayObject;
  nativeLines: boolean;
  reset(): void;
  upload(): void;
  destroy(): void;
}

declare class PIXI$PrimitiveShader mixins glCore$GLShader {}

declare var npm$namespace$PIXI$GroupD8: {
  uX: typeof PIXI$GroupD8$uX,
  uY: typeof PIXI$GroupD8$uY,
  vX: typeof PIXI$GroupD8$vX,
  vY: typeof PIXI$GroupD8$vY,
  inv: typeof PIXI$GroupD8$inv,
  add: typeof PIXI$GroupD8$add,
  sub: typeof PIXI$GroupD8$sub,
  rotate180: typeof PIXI$GroupD8$rotate180,
  isVertical: typeof PIXI$GroupD8$isVertical,
  byDirection: typeof PIXI$GroupD8$byDirection,
  matrixAppendRotationInv: typeof PIXI$GroupD8$matrixAppendRotationInv,
  isSwapWidthHeight: typeof PIXI$GroupD8$isSwapWidthHeight,
  E: typeof PIXI$GroupD8$E,
  SE: typeof PIXI$GroupD8$SE,
  S: typeof PIXI$GroupD8$S,
  SW: typeof PIXI$GroupD8$SW,
  W: typeof PIXI$GroupD8$W,
  NW: typeof PIXI$GroupD8$NW,
  N: typeof PIXI$GroupD8$N,
  NE: typeof PIXI$GroupD8$NE,
  MIRROR_HORIZONTAL: typeof PIXI$GroupD8$MIRROR_HORIZONTAL,
  MIRROR_VERTICAL: typeof PIXI$GroupD8$MIRROR_VERTICAL
};
declare var PIXI$GroupD8$E: number;

declare var PIXI$GroupD8$SE: number;

declare var PIXI$GroupD8$S: number;

declare var PIXI$GroupD8$SW: number;

declare var PIXI$GroupD8$W: number;

declare var PIXI$GroupD8$NW: number;

declare var PIXI$GroupD8$N: number;

declare var PIXI$GroupD8$NE: number;

declare var PIXI$GroupD8$MIRROR_HORIZONTAL: number;

declare var PIXI$GroupD8$MIRROR_VERTICAL: number;

declare function PIXI$GroupD8$uX(ind: number): number;

declare function PIXI$GroupD8$uY(ind: number): number;

declare function PIXI$GroupD8$vX(ind: number): number;

declare function PIXI$GroupD8$vY(ind: number): number;

declare function PIXI$GroupD8$inv(rotation: number): number;

declare function PIXI$GroupD8$add(
  rotationSecond: number,
  rotationFirst: number
): number;

declare function PIXI$GroupD8$sub(
  rotationSecond: number,
  rotationFirst: number
): number;

declare function PIXI$GroupD8$rotate180(rotation: number): number;

declare function PIXI$GroupD8$isVertical(rotation: number): boolean;

declare function PIXI$GroupD8$byDirection(dx: number, dy: number): number;

declare function PIXI$GroupD8$matrixAppendRotationInv(
  matrix: PIXI$Matrix,
  rotation: number,
  tx: number,
  ty: number
): void;

/**
 * @name PIXI.GroupD8.isSwapWidthHeight
 * @see PIXI.GroupD8.isVertical
 * @deprecated since version 4.6.0
 */
declare function PIXI$GroupD8$isSwapWidthHeight(rotation: number): boolean;

declare class PIXI$Matrix {
  constructor(
    a?: number,
    b?: number,
    c?: number,
    d?: number,
    tx?: number,
    ty?: number
  ): this;
  a: number;
  b: number;
  c: number;
  d: number;
  tx: number;
  ty: number;
  fromArray(array: number[]): void;
  set(
    a: number,
    b: number,
    c: number,
    d: number,
    tx: number,
    ty: number
  ): PIXI$Matrix;
  toArray(transpose?: boolean, out?: number[]): number[];
  apply(pos: PIXI$Point, newPos?: PIXI$Point): PIXI$Point;
  applyInverse(pos: PIXI$Point, newPos?: PIXI$Point): PIXI$Point;
  translate(x: number, y: number): PIXI$Matrix;
  scale(x: number, y: number): PIXI$Matrix;
  rotate(angle: number): PIXI$Matrix;
  append(matrix: PIXI$Matrix): PIXI$Matrix;
  setTransform(
    x: number,
    y: number,
    pivotX: number,
    pivotY: number,
    scaleX: number,
    scaleY: number,
    rotation: number,
    skewX: number,
    skewY: number
  ): PIXI$Matrix;
  prepend(matrix: PIXI$Matrix): PIXI$Matrix;
  invert(): PIXI$Matrix;
  identity(): PIXI$Matrix;
  decompose(transform: PIXI$TransformBase): PIXI$TransformBase;
  clone(): PIXI$Matrix;
  copy(matrix: PIXI$Matrix): PIXI$Matrix;
  static IDENTITY: PIXI$Matrix;
  static TEMP_MATRIX: PIXI$Matrix;
}

declare class PIXI$PointLike {
  x: number;
  y: number;
  set(x?: number, y?: number): void;
  copy(point: PIXI$PointLike): void;
}

declare class PIXI$ObservablePoint mixins PointLike {
  constructor(cb: () => any, scope?: any, x?: number, y?: number): this;
  clone(cb?: Function, scope?: any): PIXI$ObservablePoint;
  equals(p: PIXI$Point | PIXI$ObservablePoint | PIXI$PointLike): boolean;
  cb: () => any;
  scope: any;
}

declare class PIXI$Point mixins PointLike {
  constructor(x?: number, y?: number): this;
  clone(): PIXI$Point;
  equals(p: PIXI$PointLike): boolean;
}

declare interface PIXI$HitArea {
  contains(x: number, y: number): boolean;
}

declare class PIXI$Circle mixins HitArea {
  constructor(x?: number, y?: number, radius?: number): this;
  x: number;
  y: number;
  radius: number;
  type: number;
  clone(): PIXI$Circle;
  contains(x: number, y: number): boolean;
  getBounds(): PIXI$Rectangle;
}

declare class PIXI$Ellipse mixins HitArea {
  constructor(
    x?: number,
    y?: number,
    halfWidth?: number,
    halfHeight?: number
  ): this;
  x: number;
  y: number;
  width: number;
  height: number;
  type: number;
  clone(): PIXI$Ellipse;
  contains(x: number, y: number): boolean;
  getBounds(): PIXI$Rectangle;
}

declare class PIXI$Polygon mixins HitArea {
  constructor(points: PIXI$Point[] | number[]): this;
  constructor(...points: PIXI$Point[]): this;
  constructor(...points: number[]): this;
  closed: boolean;
  points: number[];
  type: number;
  clone(): PIXI$Polygon;
  contains(x: number, y: number): boolean;
  close(): void;
}

declare class PIXI$Rectangle mixins HitArea {
  constructor(x?: number, y?: number, width?: number, height?: number): this;
  x: number;
  y: number;
  width: number;
  height: number;
  type: number;
  left: number;
  right: number;
  top: number;
  bottom: number;
  static EMPTY: PIXI$Rectangle;
  clone(): PIXI$Rectangle;
  copy(rectangle: PIXI$Rectangle): PIXI$Rectangle;
  contains(x: number, y: number): boolean;
  pad(paddingX: number, paddingY: number): void;
  fit(rectangle: PIXI$Rectangle): void;
  enlarge(rectangle: PIXI$Rectangle): void;
}

declare class PIXI$RoundedRectangle mixins HitArea {
  constructor(
    x?: number,
    y?: number,
    width?: number,
    height?: number,
    radius?: number
  ): this;
  x: number;
  y: number;
  width: number;
  height: number;
  radius: number;
  type: number;
  clone(): PIXI$RoundedRectangle;
  contains(x: number, y: number): boolean;
}

declare interface PIXI$RendererOptions {
  /**
   * the width of the renderers view [default=800]
   */
  width?: number;

  /**
   * the height of the renderers view [default=600]
   */
  height?: number;

  /**
   * the canvas to use as a view, optional
   */
  view?: HTMLCanvasElement;

  /**
   * If the render view is transparent, [default=false]
   */
  transparent?: boolean;

  /**
   * sets antialias (only applicable in chrome at the moment) [default=false]
   */
  antialias?: boolean;

  /**
   * enables drawing buffer preservation, enable this if you need to call toDataUrl on the webgl context [default=false]
   */
  preserveDrawingBuffer?: boolean;

  /**
   * The resolution / device pixel ratio of the renderer, retina would be 2 [default=1]
   */
  resolution?: number;

  /**
   * prevents selection of WebGL renderer, even if such is present [default=false]
   */
  forceCanvas?: boolean;

  /**
   * The background color of the rendered area (shown if not transparent) [default=0x000000]
   */
  backgroundColor?: number;

  /**
   * This sets if the renderer will clear the canvas or not before the new render pass. [default=true]
   */
  clearBeforeRender?: boolean;

  /**
   * If true Pixi will Math.floor() x/ y values when rendering, stopping pixel interpolation. [default=false]
   */
  roundPixels?: boolean;

  /**
   * forces FXAA antialiasing to be used over native FXAA is faster, but may not always look as great ** webgl only** [default=false]
   */
  forceFXAA?: boolean;

  /**
   * `true` to ensure compatibility with older / less advanced devices. If you experience unexplained flickering try setting this to true. **webgl only** [default=false]
   */
  legacy?: boolean;

  /**
   * Deprecated
   */
  context?: WebGLRenderingContext;

  /**
   * Deprecated
   */
  autoResize?: boolean;

  /**
   * Parameter passed to webgl context, set to "high-performance" for devices with dual graphics card
   */
  powerPreference?: "high-performance";
}

declare type PIXI$ApplicationOptions = {
  /**
   * `true` to use PIXI.ticker.shared, `false` to create new ticker. [default=false]
   */
  sharedTicker?: boolean,

  /**
   * `true` to use PIXI.loaders.shared, `false` to create new Loader.
   */
  sharedLoader?: boolean,

  /**
   * automatically starts the rendering after the construction.
   * Note that setting this parameter to false does NOT stop the shared ticker even if you set
   * options.sharedTicker to true in case that it is already started. Stop it by your own.
   */
  autoStart?: boolean
} & RendererOptions;

declare interface PIXI$DefaultRendererPlugins {
  accessibility: PIXI$accessibility$AccessibilityManager;
  interaction: PIXI$interaction$InteractionManager;
}

declare type PIXI$RendererPlugins = {} & DefaultRendererPlugins;

declare class PIXI$SystemRenderer mixins utils$EventEmitter {
  constructor(system: string, options?: PIXI$RendererOptions): this;
  constructor(
    system: string,
    screenWidth?: number,
    screenHeight?: number,
    options?: PIXI$RendererOptions
  ): this;
  type: number;
  options: PIXI$RendererOptions;
  screen: PIXI$Rectangle;
  width: number;
  height: number;
  view: HTMLCanvasElement;
  resolution: number;
  transparent: boolean;
  autoResize: boolean;
  blendModes: any;
  preserveDrawingBuffer: boolean;
  clearBeforeRender: boolean;
  roundPixels: boolean;
  backgroundColor: number;
  _backgroundColor: number;
  _backgroundColorRgba: number[];
  _backgroundColorString: string;
  _tempDisplayObjectParent: PIXI$Container;
  _lastObjectRendered: PIXI$DisplayObject;
  resize(screenWidth: number, screenHeight: number): void;
  generateTexture(
    displayObject: PIXI$DisplayObject,
    scaleMode?: number,
    resolution?: number,
    region?: PIXI$Rectangle
  ): PIXI$RenderTexture;
  render(...args: any[]): void;
  destroy(removeView?: boolean): void;
}

declare interface PIXI$DefaultCanvasRendererPlugins {
  extract: PIXI$extract$CanvasExtract;
  prepare: PIXI$prepare$CanvasPrepare;
}

declare type PIXI$CanvasRendererPlugins = {} & DefaultCanvasRendererPlugins &
  RendererPlugins;

declare class PIXI$CanvasRenderer mixins SystemRenderer {
  static ___plugins: {
    [pluginName: string]: {
      new(renderer: PIXI$CanvasRenderer): any
    }
  };
  static registerPlugin(
    pluginName: string,
    ctor: {
      new(renderer: PIXI$CanvasRenderer): any
    }
  ): void;
  plugins: any;
  initPlugins(): void;
  destroyPlugins(): void;
  constructor(options?: PIXI$RendererOptions): this;
  constructor(
    screenWidth?: number,
    screenHeight?: number,
    options?: PIXI$RendererOptions
  ): this;
  _activeBlendMode: number;
  rootContext: CanvasRenderingContext2D;
  rootResolution: number;
  refresh: boolean;
  maskManager: PIXI$CanvasMaskManager;
  smoothProperty: string;
  PIXI$extract: PIXI$extract$CanvasExtract;
  context: CanvasRenderingContext2D | null;
  render(
    displayObject: PIXI$DisplayObject,
    renderTexture?: PIXI$RenderTexture,
    clear?: boolean,
    transform?: PIXI$Matrix,
    skipUpdateTransform?: boolean
  ): void;
  setBlendMode(blendMode: number): void;
  destroy(removeView?: boolean): void;
  clear(clearColor?: string): void;
  invalidateBlendMode(): void;
  on(event: "prerender" | "postrender", fn: () => void, context?: any): this;
  once(event: "prerender" | "postrender", fn: () => void, context?: any): this;
  removeListener(
    event: "prerender" | "postrender",
    fn?: () => void,
    context?: any
  ): this;
  removeAllListeners(event?: "prerender" | "postrender"): this;
  off(event: "prerender" | "postrender", fn?: () => void, context?: any): this;
  addListener(
    event: "prerender" | "postrender",
    fn: () => void,
    context?: any
  ): this;
}

declare class PIXI$CanvasMaskManager {
  constructor(renderer: PIXI$CanvasRenderer): this;
  pushMask(maskData: any): void;
  renderGraphicsShape(graphics: PIXI$Graphics): void;
  popMask(renderer: PIXI$WebGLRenderer | PIXI$CanvasRenderer): void;
  destroy(): void;
}

declare class PIXI$CanvasRenderTarget {
  constructor(width: number, height: number, resolution: number): this;
  canvas: HTMLCanvasElement;
  context: CanvasRenderingContext2D;
  resolution: number;
  width: number;
  height: number;
  clear(): void;
  resize(width: number, height: number): void;
  destroy(): void;
}

declare type PIXI$WebGLRendererOptions = {} & RendererOptions;

declare interface PIXI$DefaultWebGLRendererPlugins {
  extract: PIXI$extract$WebGLExtract;
  prepare: PIXI$prepare$WebGLPrepare;
}

declare type PIXI$WebGLRendererPlugins = {} & DefaultWebGLRendererPlugins &
  RendererPlugins;

declare class PIXI$WebGLRenderer mixins SystemRenderer {
  static ___plugins: {
    [pluginName: string]: {
      new(renderer: PIXI$WebGLRenderer): any
    }
  };
  static registerPlugin(
    pluginName: string,
    ctor: {
      new(renderer: PIXI$WebGLRenderer): any
    }
  ): void;
  plugins: any;
  initPlugins(): void;
  destroyPlugins(): void;
  constructor(options?: PIXI$WebGLRendererOptions): this;
  constructor(
    screenWidth?: number,
    screenHeight?: number,
    options?: PIXI$WebGLRendererOptions
  ): this;
  _contextOptions: {
    alpha: boolean,
    antiAlias?: boolean,
    premultipliedAlpha: boolean,
    stencil: boolean,
    preseveDrawingBuffer?: boolean
  };
  _backgroundColorRgba: number[];
  maskManager: PIXI$MaskManager;
  stencilManager: PIXI$StencilManager;
  emptyRenderer: PIXI$ObjectRenderer;
  currentRenderer: PIXI$ObjectRenderer;
  gl: WebGLRenderingContext;
  CONTEXT_UID: number;
  state: PIXI$WebGLState;
  renderingToScreen: boolean;
  boundTextures: PIXI$BaseTexture[];
  filterManager: PIXI$FilterManager;
  textureManager: PIXI$TextureManager;
  textureGC: PIXI$TextureGarbageCollector;
  PIXI$extract: PIXI$extract$WebGLExtract;
  drawModes: any;
  _activeShader: PIXI$Shader;
  _activeRenderTarget: PIXI$RenderTarget;
  _initContext(): void;
  render(
    displayObject: PIXI$DisplayObject,
    renderTexture?: PIXI$RenderTexture,
    clear?: boolean,
    transform?: PIXI$Matrix,
    skipUpdateTransform?: boolean
  ): void;
  setObjectRenderer(objectRenderer: PIXI$ObjectRenderer): void;
  flush(): void;
  setBlendMode(blendMode: number): void;
  clear(clearColor?: number): void;
  setTransform(matrix: PIXI$Matrix): void;
  clearRenderTexture(
    renderTexture: PIXI$RenderTexture,
    clearColor?: number
  ): PIXI$WebGLRenderer;
  bindRenderTexture(
    renderTexture: PIXI$RenderTexture,
    transform: PIXI$Matrix
  ): PIXI$WebGLRenderer;
  bindRenderTarget(renderTarget: PIXI$RenderTarget): PIXI$WebGLRenderer;
  bindShader(shader: PIXI$Shader, autoProject?: boolean): PIXI$WebGLRenderer;
  bindTexture(
    texture: PIXI$Texture | PIXI$BaseTexture,
    location?: number,
    forceLocation?: boolean
  ): number;
  unbindTexture(
    texture: PIXI$Texture | PIXI$BaseTexture
  ): PIXI$WebGLRenderer | void;
  createVao(): PIXI$glCore$VertexArrayObject;
  bindVao(vao: PIXI$glCore$VertexArrayObject): PIXI$WebGLRenderer;
  reset(): PIXI$WebGLRenderer;
  handleContextLost: (event: WebGLContextEvent) => void;
  handleContextRestored: () => void;
  destroy(removeView?: boolean): void;
  on(event: "prerender" | "postrender", fn: () => void, context?: any): this;
  on(
    event: "context",
    fn: (gl: WebGLRenderingContext) => void,
    context?: any
  ): this;
  once(event: "prerender" | "postrender", fn: () => void, context?: any): this;
  once(
    event: "context",
    fn: (gl: WebGLRenderingContext) => void,
    context?: any
  ): this;
  removeListener(
    event: "prerender" | "postrender",
    fn?: () => void,
    context?: any
  ): this;
  removeListener(
    event: "context",
    fn?: (gl: WebGLRenderingContext) => void,
    context?: any
  ): this;
  removeAllListeners(event?: "prerender" | "postrender" | "context"): this;
  off(event: "prerender" | "postrender", fn?: () => void, context?: any): this;
  off(
    event: "context",
    fn?: (gl: WebGLRenderingContext) => void,
    context?: any
  ): this;
  addListener(
    event: "prerender" | "postrender",
    fn: () => void,
    context?: any
  ): this;
  addListener(
    event: "context",
    fn: (gl: WebGLRenderingContext) => void,
    context?: any
  ): this;
}

declare class PIXI$WebGLState {
  constructor(gl: WebGLRenderingContext): this;
  activeState: number[];
  defaultState: number[];
  stackIndex: number;
  stack: number[];
  gl: WebGLRenderingContext;
  maxAttribs: number;
  attribState: PIXI$glCore$AttribState;
  nativeVaoExtension: any;
  push(): void;
  pop(): void;
  setState(state: number[]): void;
  setBlend(value: number): void;
  setBlendMode(value: number): void;
  setDepthTest(value: number): void;
  setCullFace(value: number): void;
  setFrontFace(value: number): void;
  resetAttributes(): void;
  resetToDefault(): void;
}

declare class PIXI$TextureManager {
  constructor(renderer: PIXI$WebGLRenderer): this;
  renderer: PIXI$WebGLRenderer;
  gl: WebGLRenderingContext;
  _managedTextures: PIXI$Texture[];
  bindTexture(): void;
  getTexture(): WebGLTexture;
  updateTexture(texture: PIXI$BaseTexture | PIXI$Texture): WebGLTexture;
  destroyTexture(texture: PIXI$BaseTexture, _skipRemove?: boolean): void;
  removeAll(): void;
  destroy(): void;
}

declare class PIXI$TextureGarbageCollector {
  constructor(renderer: PIXI$WebGLRenderer): this;
  renderer: PIXI$WebGLRenderer;
  count: number;
  checkCount: number;
  maxIdle: number;
  checkCountMax: number;
  mode: number;
  update(): void;
  run(): void;
  unload(displayObject: PIXI$DisplayObject): void;
}

declare class PIXI$ObjectRenderer mixins WebGLManager {
  constructor(renderer: PIXI$WebGLRenderer): this;
  start(): void;
  stop(): void;
  flush(): void;
  render(...args: any[]): void;
}

declare class PIXI$Quad {
  constructor(gl: WebGLRenderingContext): this;
  gl: WebGLRenderingContext;
  vertices: number[];
  uvs: number[];
  interleaved: number[];
  indices: number[];
  vertexBuffer: WebGLBuffer;
  vao: PIXI$glCore$VertexArrayObject;
  initVao(shader: PIXI$glCore$GLShader): void;
  map(
    targetTextureFrame: PIXI$Rectangle,
    destinationFrame: PIXI$Rectangle
  ): PIXI$Quad;
  upload(): PIXI$Quad;
  destroy(): void;
}

declare interface PIXI$FilterDataStackItem {
  renderTarget: PIXI$RenderTarget;
  filter: any[];
  bounds: PIXI$Rectangle;
}

declare class PIXI$RenderTarget {
  filterPoolKey: string;
  constructor(
    gl: WebGLRenderingContext,
    width: number,
    height: number,
    scaleMode: number,
    resolution: number,
    root?: boolean
  ): this;
  gl: WebGLRenderingContext;
  frameBuffer: PIXI$glCore$GLFramebuffer;
  texture: PIXI$Texture;
  clearColor: number[];
  size: PIXI$Rectangle;
  resolution: number;
  projectionMatrix: PIXI$Matrix;
  transform: PIXI$Matrix;
  frame: PIXI$Rectangle;
  defaultFrame: PIXI$Rectangle;
  destinationFrame: PIXI$Rectangle;
  sourceFrame: PIXI$Rectangle;
  stencilBuffer: PIXI$glCore$GLFramebuffer;
  stencilMaskStack: PIXI$Graphics[];
  filterData: {
    index: number,
    stack: PIXI$FilterDataStackItem[]
  };
  scaleMode: number;
  root: boolean;
  clear(clearColor?: number[]): void;
  attachStencilBuffer(): void;
  setFrame(destinationFrame: PIXI$Rectangle, sourceFrame: PIXI$Rectangle): void;
  activate(): void;
  calculateProjection(
    destinationFrame: PIXI$Rectangle,
    sourceFrame: PIXI$Rectangle
  ): void;
  resize(width: number, height: number): void;
  destroy(): void;
}

declare class PIXI$BlendModeManager mixins WebGLManager {
  constructor(renderer: PIXI$WebGLRenderer): this;
  currentBlendMode: number;
  setBlendMode(blendMode: number): boolean;
}

declare interface PIXI$FilterManagerStackItem {
  renderTarget: PIXI$RenderTarget;
  sourceFrame: PIXI$Rectangle;
  destinationFrame: PIXI$Rectangle;
  filters: Array<PIXI$Filter<any>>;
  target: any;
  resolution: number;
}

declare class PIXI$FilterManager mixins WebGLManager {
  constructor(renderer: PIXI$WebGLRenderer): this;
  _screenWidth: number;
  _screenHeight: number;
  gl: WebGLRenderingContext;
  quad: PIXI$Quad;
  stack: PIXI$FilterManagerStackItem[];
  stackIndex: number;
  shaderCache: any;
  filterData: any;
  onPrerender(): void;
  pushFilter(target: PIXI$RenderTarget, filters: Array<PIXI$Filter<any>>): void;
  popFilter(): void;
  applyFilter(
    shader: PIXI$glCore$GLShader | PIXI$Filter<any>,
    inputTarget: PIXI$RenderTarget,
    outputTarget: PIXI$RenderTarget,
    clear?: boolean
  ): void;
  syncUniforms(shader: PIXI$glCore$GLShader, filter: PIXI$Filter<any>): void;
  getRenderTarget(clear?: boolean, resolution?: number): PIXI$RenderTarget;
  returnRenderTarget(renderTarget: PIXI$RenderTarget): PIXI$RenderTarget;
  calculateScreenSpaceMatrix(outputMatrix: PIXI$Matrix): PIXI$Matrix;
  calculateNormalizedScreenSpaceMatrix(outputMatrix: PIXI$Matrix): PIXI$Matrix;
  calculateSpriteMatrix(
    outputMatrix: PIXI$Matrix,
    sprite: PIXI$Sprite
  ): PIXI$Matrix;
  destroy(contextLost?: boolean): void;
  emptyPool(): void;
  getPotRenderTarget(
    gl: WebGLRenderingContext,
    minWidth: number,
    minHeight: number,
    resolution: number
  ): PIXI$RenderTarget;
  freePotRenderTarget(renderTarget: PIXI$RenderTarget): void;
}

declare class PIXI$StencilMaskStack {
  stencilStack: any[];
  reverse: boolean;
  count: number;
}

declare class PIXI$MaskManager mixins WebGLManager {
  scissor: boolean;
  scissorData: any;
  scissorRenderTarget: PIXI$RenderTarget;
  enableScissor: boolean;
  alphaMaskPool: number[];
  alphaMaskIndex: number;
  pushMask(
    target: PIXI$RenderTarget,
    maskData: PIXI$Sprite | PIXI$Graphics
  ): void;
  popMask(
    target: PIXI$RenderTarget,
    maskData: PIXI$Sprite | PIXI$Graphics
  ): void;
  pushSpriteMask(
    target: PIXI$RenderTarget,
    maskData: PIXI$Sprite | PIXI$Graphics
  ): void;
  popSpriteMask(): void;
  pushStencilMask(maskData: PIXI$Sprite | PIXI$Graphics): void;
  popStencilMask(): void;
  pushScissorMask(
    target: PIXI$RenderTarget,
    maskData: PIXI$Sprite | PIXI$Graphics
  ): void;
  popScissorMask(): void;
}

declare class PIXI$StencilManager mixins WebGLManager {
  constructor(renderer: PIXI$WebGLRenderer): this;
  stencilMaskStack: PIXI$Graphics[];
  _useCurrent(): void;
  _getBitwiseMask(): number;
  setMaskStack(stencilMasStack: PIXI$Graphics[]): void;
  pushStencil(graphics: PIXI$Graphics): void;
  popStencil(): void;
  destroy(): void;
}

declare class PIXI$WebGLManager {
  constructor(renderer: PIXI$WebGLRenderer): this;
  renderer: PIXI$WebGLRenderer;
  onContextChange(): void;
  destroy(): void;
}

declare interface PIXI$UniformData<V> {
  type: string;
  value: V;
  name?: string;
}

declare type PIXI$UniformDataMap<U> = $ObjMapi<
  U,
  <K>(K) => PIXI$UniformData<$ElementType<U, K>>
>;

declare class PIXI$Filter<U: Object> {
  constructor(
    vertexSrc?: string,
    fragmentSrc?: string,
    uniformData?: PIXI$UniformDataMap<U>
  ): this;
  _blendMode: number;
  vertexSrc: string;
  fragmentSrc: string;
  blendMode: number;
  uniformData: PIXI$UniformDataMap<U>;
  uniforms: U;
  glShaders: any;
  glShaderKey: number;
  padding: number;
  resolution: number;
  enabled: boolean;
  autoFit: boolean;
  apply(
    filterManager: PIXI$FilterManager,
    input: PIXI$RenderTarget,
    output: PIXI$RenderTarget,
    clear?: boolean,
    currentState?: any
  ): void;
  static defaultVertexSrc: string;
  static defaultFragmentSrc: string;
}

declare interface PIXI$SpriteMaskFilterUniforms {
  mask: PIXI$Texture;
  otherMatrix: PIXI$Matrix;
  alpha: number;
}

declare class PIXI$SpriteMaskFilter
  mixins Filter<PIXI$SpriteMaskFilterUniforms> {
  constructor(sprite: PIXI$Sprite): this;
  maskSprite: PIXI$Sprite;
  maskMatrix: PIXI$Matrix;
  apply(
    filterManager: PIXI$FilterManager,
    input: PIXI$RenderTarget,
    output: PIXI$RenderTarget
  ): void;
}

declare class PIXI$Sprite mixins Container {
  constructor(texture?: PIXI$Texture): this;
  _anchor: PIXI$ObservablePoint;
  anchor: PIXI$ObservablePoint;
  _texture: PIXI$Texture;
  _transformTrimmedID: number;
  _textureTrimmedID: number;
  _width: number;
  _height: number;
  tint: number;
  _tint: number;
  _tintRGB: number;
  blendMode: number;
  pluginName: string;
  cachedTint: number;
  texture: PIXI$Texture;
  textureDirty: boolean;
  _textureID: number;
  _transformID: number;
  vertexTrimmedData: Float32Array;
  vertexData: Float32Array;
  width: number;
  height: number;
  _onTextureUpdate(): void;
  calculateVertices(): void;
  _calculateBounds(): void;
  calculateTrimmedVertices(): void;
  onAnchorUpdate(): void;
  _renderWebGL(renderer: PIXI$WebGLRenderer): void;
  _renderCanvas(renderer: PIXI$CanvasRenderer): void;
  getLocalBounds(): PIXI$Rectangle;
  containsPoint(point: PIXI$Point): boolean;
  destroy(options?: PIXI$DestroyOptions | boolean): void;
  static from(
    source:
      | number
      | string
      | PIXI$BaseTexture
      | HTMLImageElement
      | HTMLCanvasElement
      | HTMLVideoElement
  ): PIXI$Sprite;
  static fromFrame(frameId: string): PIXI$Sprite;
  static fromImage(
    imageId: string,
    crossorigin?: boolean,
    scaleMode?: number
  ): PIXI$Sprite;
}

declare class PIXI$BatchBuffer {
  vertices: ArrayBuffer;
  float32View: number[];
  uint32View: number[];
  destroy(): void;
}

declare class PIXI$SpriteRenderer mixins ObjectRenderer {
  constructor(renderer: PIXI$WebGLRenderer): this;
  vertSize: number;
  vertByteSize: number;
  size: number;
  buffers: PIXI$BatchBuffer[];
  indices: number[];
  shaders: PIXI$Shader[];
  currentIndex: number;
  tick: number;
  groups: any[];
  sprites: PIXI$Sprite[];
  vertexBuffers: number[];
  vaos: PIXI$glCore$VertexArrayObject[];
  vaoMax: number;
  vertexCount: number;
  onContextChanged: () => void;
  onPrerender: () => void;
  render(sprite: PIXI$Sprite): void;
  flush(): void;
  start(): void;
  stop(): void;
  destroy(): void;
}

declare class PIXI$CanvasSpriteRenderer mixins ObjectRenderer {
  constructor(renderer: PIXI$WebGLRenderer): this;
  render(sprite: PIXI$Sprite): void;
  destroy(): void;
}

declare var npm$namespace$PIXI$CanvasTinter: {
  getTintedTexture: typeof PIXI$CanvasTinter$getTintedTexture,
  tintWithMultiply: typeof PIXI$CanvasTinter$tintWithMultiply,
  tintWithOverlay: typeof PIXI$CanvasTinter$tintWithOverlay,
  tintWithPerPixel: typeof PIXI$CanvasTinter$tintWithPerPixel,
  roundColor: typeof PIXI$CanvasTinter$roundColor,
  cacheStepsPerColorChannel: typeof PIXI$CanvasTinter$cacheStepsPerColorChannel,
  convertTintToImage: typeof PIXI$CanvasTinter$convertTintToImage,
  canUseMultiply: typeof PIXI$CanvasTinter$canUseMultiply,
  tintMethod: typeof PIXI$CanvasTinter$tintMethod
};
declare function PIXI$CanvasTinter$getTintedTexture(
  sprite: PIXI$Sprite,
  color: number
): HTMLCanvasElement;

declare function PIXI$CanvasTinter$tintWithMultiply(
  texture: PIXI$Texture,
  color: number,
  canvas: HTMLCanvasElement
): void;

declare function PIXI$CanvasTinter$tintWithOverlay(
  texture: PIXI$Texture,
  color: number,
  canvas: HTMLCanvasElement
): void;

declare function PIXI$CanvasTinter$tintWithPerPixel(
  texture: PIXI$Texture,
  color: number,
  canvas: HTMLCanvasElement
): void;

declare function PIXI$CanvasTinter$roundColor(color: number): number;

declare var PIXI$CanvasTinter$cacheStepsPerColorChannel: number;

declare var PIXI$CanvasTinter$convertTintToImage: boolean;

declare var PIXI$CanvasTinter$canUseMultiply: boolean;

declare var PIXI$CanvasTinter$tintMethod: number;

declare interface PIXI$TextStyleOptions {
  align?: string;
  breakWords?: boolean;
  dropShadow?: boolean;
  dropShadowAlpha?: number;
  dropShadowAngle?: number;
  dropShadowBlur?: number;
  dropShadowColor?: string | number;
  dropShadowDistance?: number;
  fill?: string | string[] | number | number[] | CanvasGradient | CanvasPattern;
  fillGradientType?: number;
  fillGradientStops?: number[];
  fontFamily?: string | string[];
  fontSize?: number | string;
  fontStyle?: string;
  fontVariant?: string;
  fontWeight?: string;
  letterSpacing?: number;
  lineHeight?: number;
  lineJoin?: string;
  miterLimit?: number;
  padding?: number;
  stroke?: string | number;
  strokeThickness?: number;
  textBaseline?: string;
  trim?: boolean;
  whiteSpace?: string;
  wordWrap?: boolean;
  wordWrapWidth?: number;
  leading?: number;
}

declare class PIXI$TextStyle mixins TextStyleOptions {
  constructor(style: PIXI$TextStyleOptions): this;
  styleID: number;
  clone(): PIXI$TextStyle;
  reset(): void;
  _align: string;
  align: string;
  _breakWords: boolean;
  breakWords: boolean;
  _dropShadow: boolean;
  dropShadow: boolean;
  _dropShadowAlpha: number;
  dropShadowAlpha: number;
  _dropShadowAngle: number;
  dropShadowAngle: number;
  _dropShadowBlur: number;
  dropShadowBlur: number;
  _dropShadowColor: string | number;
  dropShadowColor: string | number;
  _dropShadowDistance: number;
  dropShadowDistance: number;
  _fill: string | string[] | number | number[] | CanvasGradient | CanvasPattern;
  fill: string | string[] | number | number[] | CanvasGradient | CanvasPattern;
  _fillGradientType: number;
  fillGradientType: number;
  _fillGradientStops: number[];
  fillGradientStops: number[];
  _fontFamily: string | string[];
  fontFamily: string | string[];
  _fontSize: number | string;
  fontSize: number | string;
  _fontStyle: string;
  fontStyle: string;
  _fontVariant: string;
  fontVariant: string;
  _fontWeight: string;
  fontWeight: string;
  _leading: number;
  leading: number;
  _letterSpacing: number;
  letterSpacing: number;
  _lineHeight: number;
  lineHeight: number;
  _lineJoin: string;
  lineJoin: string;
  _miterLimit: number;
  miterLimit: number;
  _padding: number;
  padding: number;
  _stroke: string | number;
  stroke: string | number;
  _strokeThickness: number;
  strokeThickness: number;
  _textBaseline: string;
  textBaseline: string;
  _trim: boolean;
  trim: boolean;
  _whiteSpace: string;
  whiteSpace: string;
  _wordWrap: boolean;
  wordWrap: boolean;
  _wordWrapWidth: number;
  wordWrapWidth: number;
  toFontString(): string;
}

declare class PIXI$TextMetrics {
  static METRICS_STRING: string;
  static BASELINE_SYMBOL: string;
  static BASELINE_MULTIPLIER: number;
  static _canvas: HTMLCanvasElement;
  static _context: CanvasRenderingContext2D;
  static _fonts: PIXI$FontMetrics;
  static _newLines: number[];
  static _breakingSpaces: number[];
  text: string;
  style: PIXI$TextStyle;
  width: number;
  height: number;
  lines: number[];
  lineWidths: number[];
  lineHeight: number;
  maxLineWidth: number;
  fontProperties: any;
  constructor(
    text: string,
    style: PIXI$TextStyle,
    width: number,
    height: number,
    lines: number[],
    lineWidths: number[],
    lineHeight: number,
    maxLineWidth: number,
    fontProperties: any
  ): this;
  static measureText(
    text: string,
    style: PIXI$TextStyle,
    wordWrap?: boolean,
    canvas?: HTMLCanvasElement
  ): PIXI$TextMetrics;
  static wordWrap(
    text: string,
    style: PIXI$TextStyle,
    canvas?: HTMLCanvasElement
  ): string;
  static wordWrap(
    text: string,
    style: PIXI$TextStyle,
    canvas?: HTMLCanvasElement
  ): string;
  static addLine(line: string, newLine?: boolean): string;
  static getFromCache(
    key: string,
    letterSpacing: number,
    cache: any,
    context: CanvasRenderingContext2D
  ): number;
  static collapseSpaces(whiteSpace?: string): boolean;
  static collapseNewlines(whiteSpace?: string): boolean;
  static trimRight(text?: string): string;
  static isNewline(char?: string): boolean;
  static isBreakingSpace(char?: string): boolean;
  static tokenize(text?: string): string[];
  static canBreakWords(token?: string, breakWords?: boolean): boolean;
  static canBreakChars(
    char: string,
    nextChar: string,
    token: string,
    index: number,
    breakWords?: boolean
  ): boolean;
  static measureFont(font: string): PIXI$FontMetrics;
  static clearMetrics(font: string): void;
}

declare interface PIXI$FontMetrics {
  ascent: number;
  descent: number;
  fontSize: number;
}

declare class PIXI$Text mixins Sprite {
  constructor(
    text?: string,
    style?: PIXI$TextStyleOptions,
    canvas?: HTMLCanvasElement
  ): this;
  canvas: HTMLCanvasElement;
  context: CanvasRenderingContext2D;
  resolution: number;
  _text: string;
  _style: PIXI$TextStyle;
  _styleListener: Function;
  _font: string;
  localStyleID: number;
  width: number;
  height: number;
  style: PIXI$TextStyle;
  text: string;
  updateText(respectDirty?: boolean): void;
  drawLetterSpacing(
    text: string,
    x: number,
    y: number,
    isStroke?: boolean
  ): void;
  updateTexture(): void;
  renderWebGL(renderer: PIXI$WebGLRenderer): void;
  _renderCanvas(renderer: PIXI$CanvasRenderer): void;
  getLocalBounds(rect?: PIXI$Rectangle): PIXI$Rectangle;
  _calculateBounds(): void;
  _onStyleChange: () => void;
  _generateFillStyle(
    style: PIXI$TextStyle,
    lines: string[]
  ): string | number | CanvasGradient;
  destroy(options?: PIXI$DestroyOptions | boolean): void;
  dirty: boolean;
}

declare class PIXI$BaseRenderTexture mixins BaseTexture {
  constructor(
    width?: number,
    height?: number,
    scaleMode?: number,
    resolution?: number
  ): this;
  height: number;
  width: number;
  realHeight: number;
  realWidth: number;
  resolution: number;
  scaleMode: number;
  hasLoaded: boolean;
  _glRenderTargets: {
    [n: number]: WebGLTexture
  };
  _canvasRenderTarget: {
    [n: number]: WebGLTexture
  };
  valid: boolean;
  resize(width: number, height: number): void;
  destroy(): void;
  on(
    event: "update",
    fn: (baseRenderTexture: PIXI$BaseRenderTexture) => void,
    context?: any
  ): this;
  once(
    event: "update",
    fn: (baseRenderTexture: PIXI$BaseRenderTexture) => void,
    context?: any
  ): this;
  removeListener(
    event: "update",
    fn?: (baseRenderTexture: PIXI$BaseRenderTexture) => void,
    context?: any
  ): this;
  removeAllListeners(event?: "update"): this;
  off(
    event: "update",
    fn?: (baseRenderTexture: PIXI$BaseRenderTexture) => void,
    context?: any
  ): this;
  addListener(
    event: "update",
    fn: (baseRenderTexture: PIXI$BaseRenderTexture) => void,
    context?: any
  ): this;
}

declare class PIXI$BaseTexture mixins utils$EventEmitter {
  static from(
    source: string | HTMLImageElement | HTMLCanvasElement,
    scaleMode?: number,
    sourceScale?: number
  ): PIXI$BaseTexture;
  constructor(
    source?: HTMLImageElement | HTMLCanvasElement | HTMLVideoElement,
    scaleMode?: number,
    resolution?: number
  ): this;
  uuid: number;
  touched: number;
  resolution: number;
  width: number;
  height: number;
  realWidth: number;
  realHeight: number;
  scaleMode: number;
  hasLoaded: boolean;
  isLoading: boolean;
  wrapMode: number;
  source: HTMLImageElement | HTMLCanvasElement | HTMLVideoElement | null;
  origSource: HTMLImageElement | null;
  imageType: string | null;
  sourceScale: number;
  premultipliedAlpha: boolean;
  imageUrl: string | null;
  isPowerOfTwo: boolean;
  mipmap: boolean;
  wrap: boolean;
  _glTextures: any;
  _enabled: number;
  _id: number;
  _virtualBoundId: number;
  _destroyed: boolean;
  textureCacheIds: string[];
  update(): void;
  _updateDimensions(): void;
  _updateImageType(): void;
  _loadSvgSource(): void;
  _loadSvgSourceUsingDataUri(dataUri: string): void;
  _loadSvgSourceUsingXhr(): void;
  _loadSvgSourceUsingString(svgString: string): void;
  loadSource(
    source: HTMLImageElement | HTMLCanvasElement | HTMLVideoElement
  ): void;
  _sourceLoaded(): void;
  destroy(): void;
  dispose(): void;
  updateSourceImage(newSrc: string): void;
  static fromImage(
    imageUrl: string,
    crossorigin?: boolean,
    scaleMode?: number,
    sourceScale?: number
  ): PIXI$BaseTexture;
  static fromCanvas(
    canvas: HTMLCanvasElement,
    scaleMode?: number,
    origin?: string
  ): PIXI$BaseTexture;
  static addToCache(baseTexture: PIXI$BaseTexture, id: string): void;
  static removeFromCache(
    baseTexture: string | PIXI$BaseTexture
  ): PIXI$BaseTexture;
  on(
    event: "update" | "loaded" | "error" | "dispose",
    fn: (baseTexture: PIXI$BaseTexture) => void,
    context?: any
  ): this;
  once(
    event: "update" | "loaded" | "error" | "dispose",
    fn: (baseTexture: PIXI$BaseTexture) => void,
    context?: any
  ): this;
  removeListener(
    event: "update" | "loaded" | "error" | "dispose",
    fn?: (baseTexture: PIXI$BaseTexture) => void,
    context?: any
  ): this;
  removeAllListeners(event?: "update" | "loaded" | "error" | "dispose"): this;
  off(
    event: "update" | "loaded" | "error" | "dispose",
    fn?: (baseTexture: PIXI$BaseTexture) => void,
    context?: any
  ): this;
  addListener(
    event: "update" | "loaded" | "error" | "dispose",
    fn: (baseTexture: PIXI$BaseTexture) => void,
    context?: any
  ): this;
}

declare class PIXI$RenderTexture mixins Texture {
  constructor(
    baseRenderTexture: PIXI$BaseRenderTexture,
    frame?: PIXI$Rectangle
  ): this;
  legacyRenderer: any;
  valid: boolean;
  resize(width: number, height: number, doNotResizeBaseTexture?: boolean): void;
  static create(
    width?: number,
    height?: number,
    scaleMode?: number,
    resolution?: number
  ): PIXI$RenderTexture;
}

declare class PIXI$Texture mixins utils$EventEmitter {
  constructor(
    baseTexture: PIXI$BaseTexture,
    frame?: PIXI$Rectangle,
    orig?: PIXI$Rectangle,
    trim?: PIXI$Rectangle,
    rotate?: number,
    anchor?: PIXI$Point
  ): this;
  noFrame: boolean;
  baseTexture: PIXI$BaseTexture;
  _frame: PIXI$Rectangle;
  trim: PIXI$Rectangle;
  valid: boolean;
  requiresUpdate: boolean;
  _uvs: PIXI$TextureUvs;
  orig: PIXI$Rectangle;
  defaultAnchor: PIXI$Point;
  _updateID: number;
  transform: extras$TextureMatrix;
  textureCacheIds: string[];
  update(): void;
  onBaseTextureLoaded(baseTexture: PIXI$BaseTexture): void;
  onBaseTextureUpdated(baseTexture: PIXI$BaseTexture): void;
  destroy(destroyBase?: boolean): void;
  clone(): PIXI$Texture;
  _updateUvs(): void;
  static fromImage(
    imageUrl: string,
    crossOrigin?: boolean,
    scaleMode?: number,
    sourceScale?: number
  ): PIXI$Texture;
  static fromFrame(frameId: string): PIXI$Texture;
  static fromCanvas(
    canvas: HTMLCanvasElement,
    scaleMode?: number,
    origin?: string
  ): PIXI$Texture;
  static fromVideo(
    video: HTMLVideoElement | string,
    scaleMode?: number,
    crossorigin?: boolean,
    autoPlay?: boolean
  ): PIXI$Texture;
  static fromVideoUrl(
    videoUrl: string,
    scaleMode?: number,
    crossorigin?: boolean,
    autoPlay?: boolean
  ): PIXI$Texture;
  static from(
    source:
      | number
      | string
      | HTMLImageElement
      | HTMLCanvasElement
      | HTMLVideoElement
      | PIXI$BaseTexture
  ): PIXI$Texture;
  static fromLoader(
    source: HTMLImageElement | HTMLCanvasElement,
    imageUrl: string,
    name?: string
  ): PIXI$Texture;
  static addToCache(texture: PIXI$Texture, id: string): void;
  static removeFromCache(texture: string | PIXI$Texture): PIXI$Texture;
  static addTextureToCache(texture: PIXI$Texture, id: string): void;
  static removeTextureFromCache(id: string): PIXI$Texture;
  frame: PIXI$Rectangle;
  _rotate: boolean | 0;
  rotate: number;
  width: number;
  height: number;
  static EMPTY: PIXI$Texture;
  static WHITE: PIXI$Texture;
  on(event: "update", fn: (texture: PIXI$Texture) => void, context?: any): this;
  once(
    event: "update",
    fn: (texture: PIXI$Texture) => void,
    context?: any
  ): this;
  removeListener(
    event: "update",
    fn?: (texture: PIXI$Texture) => void,
    context?: any
  ): this;
  removeAllListeners(event?: "update"): this;
  off(
    event: "update",
    fn?: (texture: PIXI$Texture) => void,
    context?: any
  ): this;
  addListener(
    event: "update",
    fn: (texture: PIXI$Texture) => void,
    context?: any
  ): this;
}

declare class PIXI$TextureMatrix {
  constructor(texture: PIXI$Texture, clampMargin?: number): this;
  _texture: PIXI$Texture;
  mapCoord: PIXI$Matrix;
  uClampFrame: Float32Array;
  uClampOffset: Float32Array;
  _lastTextureID: number;
  clampOffset: number;
  clampMargin: number;
  texture: PIXI$Texture;
  update(forceUpdate?: boolean): boolean;
  multiplyUvs(uvs: Float32Array, out?: Float32Array): Float32Array;
}

declare class PIXI$TextureUvs {
  x0: number;
  y0: number;
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  x3: number;
  y3: number;
  uvsUint32: Uint32Array;
  set(frame: PIXI$Rectangle, baseFrame: PIXI$Rectangle, rotate: number): void;
}

declare class PIXI$Spritesheet {
  static BATCH_SIZE: number;
  constructor(
    baseTexture: PIXI$BaseTexture,
    data: any,
    resolutionFilename?: string
  ): this;
  baseTexture: PIXI$BaseTexture;
  animations: {
    [key: string]: PIXI$Texture[]
  };
  textures: {
    [key: string]: PIXI$Texture
  };
  data: any;
  resolution: number;
  _frames: any;
  _frameKeys: string;
  _batchIndex: number;
  _callback: (
    spriteSheet: this,
    textures: {
      [key: string]: PIXI$Texture
    }
  ) => void;
  _updateResolution(resolutionFilename: string): number;
  parse(
    callback: (
      spriteSheet: this,
      textures: {
        [key: string]: PIXI$Texture
      }
    ) => void
  ): void;
  _processFrames(initialFrameIndex: number): void;
  _parseComplete(): void;
  _processAnimations(): void;
  _nextBatch(): void;
  destroy(destroyBase?: boolean): void;
}

declare class PIXI$VideoBaseTexture mixins BaseTexture {
  constructor(
    source: HTMLVideoElement,
    scaleMode?: number,
    autoPlay?: boolean
  ): this;
  autoUpdate: boolean;
  autoPlay: boolean;
  _isAutoUpdating: boolean;
  update(): void;
  _onCanPlay(): void;
  _onPlayStart(): void;
  _onPlayStop(): void;
  destroy(): void;
  _isSourcePlaying(): boolean;
  _isSourceReady(): boolean;
  static fromVideo(
    video: HTMLVideoElement,
    scaleMode?: number,
    autoPlay?: boolean
  ): PIXI$VideoBaseTexture;
  static fromUrl(
    videoSrc: string | any | string[] | any[],
    crossorigin?: boolean,
    autoPlay?: boolean
  ): PIXI$VideoBaseTexture;
  static fromUrls(
    videoSrc: string | any | string[] | any[]
  ): PIXI$VideoBaseTexture;
  source: HTMLVideoElement;
  loadSource(source: HTMLVideoElement): void;
}

declare var npm$namespace$PIXI$ticker: {
  shared: typeof PIXI$ticker$shared,

  TickerListener: typeof PIXI$ticker$TickerListener,
  Ticker: typeof PIXI$ticker$Ticker
};
declare var PIXI$ticker$shared: ticker$Ticker;

declare class PIXI$ticker$TickerListener {
  constructor(
    fn: (deltaTime: number) => void,
    context?: any,
    priority?: number,
    once?: boolean
  ): this;
  fn: (deltaTime: number) => void;
  context: any;
  priority: number;
  once: boolean;
  next: PIXI$ticker$TickerListener;
  previous: PIXI$ticker$TickerListener;
  _destroyed: boolean;
  match(fn: (deltaTime: number) => void, context?: any): boolean;
  emit(deltaTime: number): PIXI$ticker$TickerListener;
  connect(previous: PIXI$ticker$TickerListener): void;
  destroy(hard?: boolean): void;
}

declare class PIXI$ticker$Ticker {
  _tick: (time: number) => void;
  _head: PIXI$ticker$TickerListener;
  _requestId: number | null;
  _maxElapsedMS: number;
  autoStart: boolean;
  deltaTime: number;
  elapsedMS: number;
  lastTime: number;
  speed: number;
  started: boolean;
  _requestIfNeeded(): void;
  _cancelIfNeeded(): void;
  _startIfPossible(): void;
  add(
    fn: (deltaTime: number) => void,
    context?: any,
    priority?: number
  ): PIXI$ticker$Ticker;
  addOnce(
    fn: (deltaTime: number) => void,
    context?: any,
    priority?: number
  ): PIXI$ticker$Ticker;
  remove(fn: Function, context?: any, priority?: number): PIXI$ticker$Ticker;
  _addListener(listener: PIXI$ticker$TickerListener): PIXI$ticker$Ticker;
  FPS: number;
  minFPS: number;
  start(): void;
  stop(): void;
  destroy(): void;
  update(currentTime?: number): void;
}

declare class PIXI$Shader mixins glCore$GLShader {
  constructor(
    gl: WebGLRenderingContext,
    vertexSrc: string | string[],
    fragmentSrc: string | string[],
    attributeLocations?: {
      [key: string]: number
    },
    precision?: string
  ): this;
}

declare var npm$namespace$PIXI$extract: {
  CanvasExtract: typeof PIXI$extract$CanvasExtract,
  WebGLExtract: typeof PIXI$extract$WebGLExtract
};
declare class PIXI$extract$CanvasExtract {
  renderer: PIXI$CanvasRenderer;
  constructor(renderer: PIXI$CanvasRenderer): this;
  image(target?: PIXI$DisplayObject | PIXI$RenderTexture): HTMLImageElement;
  base64(target?: PIXI$DisplayObject | PIXI$RenderTexture): string;
  canvas(target?: PIXI$DisplayObject | PIXI$RenderTexture): HTMLCanvasElement;
  pixels(
    renderTexture?: PIXI$DisplayObject | PIXI$RenderTexture
  ): Uint8ClampedArray;
  destroy(): void;
}

declare class PIXI$extract$WebGLExtract {
  renderer: PIXI$WebGLRenderer;
  constructor(renderer: PIXI$WebGLRenderer): this;
  image(target?: PIXI$DisplayObject | PIXI$RenderTexture): HTMLImageElement;
  base64(target?: PIXI$DisplayObject | PIXI$RenderTexture): string;
  canvas(target?: PIXI$DisplayObject | PIXI$RenderTexture): HTMLCanvasElement;
  pixels(renderTexture?: PIXI$DisplayObject | PIXI$RenderTexture): Uint8Array;
  destroy(): void;
}

declare var npm$namespace$PIXI$extras: {
  BitmapText: typeof PIXI$extras$BitmapText,
  AnimatedSprite: typeof PIXI$extras$AnimatedSprite,
  TextureMatrix: typeof PIXI$extras$TextureMatrix,
  TilingSprite: typeof PIXI$extras$TilingSprite,
  TilingSpriteRenderer: typeof PIXI$extras$TilingSpriteRenderer
};
declare interface PIXI$extras$BitmapTextStyle {
  font?:
    | string
    | {
        name?: string,
        size?: number
      };
  align?: string;
  tint?: number;
}

declare class PIXI$extras$BitmapText mixins Container {
  static registerFont(
    xml: XMLDocument,
    textures:
      | PIXI$Texture
      | PIXI$Texture[]
      | {
          [key: string]: PIXI$Texture
        }
  ): any;
  constructor(text: string, style?: PIXI$extras$BitmapTextStyle): this;
  letterSpacing: number;
  _letterSpacing: number;
  _textWidth: number;
  _textHeight: number;
  textWidth: number;
  textHeight: number;
  _glyphs: PIXI$Sprite[];
  _font:
    | string
    | {
        name?: string,
        size?: number
      };
  font:
    | string
    | {
        name?: string,
        size?: number
      };
  _text: string;
  _maxWidth: number;
  maxWidth: number;
  _maxLineHeight: number;
  maxLineHeight: number;
  _anchor: PIXI$ObservablePoint;
  dirty: boolean;
  tint: number;
  align: string;
  text: string;
  anchor: PIXI$Point | number;
  updateText(): void;
  updateTransform(): void;
  getLocalBounds(): PIXI$Rectangle;
  validate(): void;
  static fonts: any;
}

declare interface PIXI$extras$AnimatedSpriteTextureTimeObject {
  texture: PIXI$Texture;
  time?: number;
}

declare class PIXI$extras$AnimatedSprite mixins Sprite {
  constructor(
    textures: PIXI$Texture[] | PIXI$extras$AnimatedSpriteTextureTimeObject[],
    autoUpdate?: boolean
  ): this;
  _autoUpdate: boolean;
  _textures: PIXI$Texture[];
  _durations: number[];
  textures: PIXI$Texture[] | PIXI$extras$AnimatedSpriteTextureTimeObject[];
  animationSpeed: number;
  loop: boolean;
  onComplete: () => void;
  onFrameChange: (currentFrame: number) => void;
  onLoop: () => void;
  _currentTime: number;
  playing: boolean;
  totalFrames: number;
  currentFrame: number;
  stop(): void;
  play(): void;
  gotoAndStop(frameNumber: number): void;
  gotoAndPlay(frameNumber: number): void;
  update(deltaTime: number): void;
  destroy(options?: PIXI$DestroyOptions | boolean): void;
  static fromFrames(frame: string[]): PIXI$extras$AnimatedSprite;
  static fromImages(images: string[]): PIXI$extras$AnimatedSprite;
}

declare class PIXI$extras$TextureMatrix {
  constructor(texture: PIXI$Texture, clampMargin?: number): this;
  _texture: PIXI$Texture;
  mapCoord: PIXI$Matrix;
  uClampFrame: Float32Array;
  uClampOffset: Float32Array;
  _lastTextureID: number;
  clampOffset: number;
  clampMargin: number;
  texture: PIXI$Texture;
  update(forceUpdate?: boolean): boolean;
  multiplyUvs(uvs: Float32Array, out?: Float32Array): Float32Array;
}

declare class PIXI$extras$TilingSprite mixins Sprite {
  constructor(texture: PIXI$Texture, width?: number, height?: number): this;
  tileTransform: PIXI$TransformStatic;
  _width: number;
  _height: number;
  _canvasPattern: CanvasPattern;
  uvTransform: PIXI$extras$TextureMatrix;
  uvRespectAnchor: boolean;
  clampMargin: number;
  tileScale: PIXI$Point | PIXI$ObservablePoint;
  tilePosition: PIXI$Point | PIXI$ObservablePoint;
  multiplyUvs(uvs: Float32Array, out: Float32Array): Float32Array;
  _onTextureUpdate(): void;
  _renderWebGL(renderer: PIXI$WebGLRenderer): void;
  _renderCanvas(renderer: PIXI$CanvasRenderer): void;
  _calculateBounds(): void;
  getLocalBounds(rect?: PIXI$Rectangle): PIXI$Rectangle;
  containsPoint(point: PIXI$Point): boolean;
  destroy(options?: PIXI$DestroyOptions | boolean): void;
  static from(
    source:
      | number
      | string
      | PIXI$BaseTexture
      | HTMLCanvasElement
      | HTMLVideoElement,
    width?: number,
    height?: number
  ): PIXI$extras$TilingSprite;
  static fromFrame(
    frameId: string,
    width?: number,
    height?: number
  ): PIXI$extras$TilingSprite;
  static fromImage(
    imageId: string,
    crossorigin?: boolean,
    scaleMode?: number
  ): PIXI$Sprite;
  static fromImage(
    imageId: string,
    width?: number,
    height?: number,
    crossorigin?: boolean,
    scaleMode?: number
  ): PIXI$extras$TilingSprite;
  width: number;
  height: number;
}

declare class PIXI$extras$TilingSpriteRenderer mixins ObjectRenderer {
  constructor(renderer: PIXI$WebGLRenderer): this;
  render(ts: PIXI$extras$TilingSprite): void;
}

/**
 * @class
 * @name MovieClip
 * @memberof PIXI.extras
 * @see PIXI.extras.AnimatedSprite
 * @deprecated since version 4.2.0
 */
declare type PIXI$extras$MovieClip = PIXI$extras$AnimatedSprite;

/**
 * @class
 * @name TextureTransform
 * @memberof PIXI.extras
 * @see PIXI.TextureMatrix
 * @deprecated since version 4.6.0
 */
declare type PIXI$extras$TextureTranform = PIXI$extras$TextureMatrix;

declare var npm$namespace$PIXI$filters: {
  FXAAFilter: typeof PIXI$filters$FXAAFilter,
  BlurFilter: typeof PIXI$filters$BlurFilter,
  BlurXFilter: typeof PIXI$filters$BlurXFilter,
  BlurYFilter: typeof PIXI$filters$BlurYFilter,
  ColorMatrixFilter: typeof PIXI$filters$ColorMatrixFilter,
  DisplacementFilter: typeof PIXI$filters$DisplacementFilter,
  AlphaFilter: typeof PIXI$filters$AlphaFilter,
  NoiseFilter: typeof PIXI$filters$NoiseFilter
};
declare class PIXI$filters$FXAAFilter mixins Filter<{}> {}

declare class PIXI$filters$BlurFilter mixins Filter<{}> {
  constructor(
    strength?: number,
    quality?: number,
    resolution?: number,
    kernelSize?: number
  ): this;
  blurXFilter: filters$BlurXFilter;
  blurYFilter: filters$BlurYFilter;
  resolution: number;
  padding: number;
  passes: number;
  blur: number;
  blurX: number;
  blurY: number;
  quality: number;
  blendMode: number;
}

declare interface PIXI$filters$BlurXFilterUniforms {
  strength: number;
}

declare class PIXI$filters$BlurXFilter
  mixins Filter<PIXI$filters$BlurXFilterUniforms> {
  constructor(
    strength?: number,
    quality?: number,
    resolution?: number,
    kernelSize?: number
  ): this;
  _quality: number;
  quality: number;
  passes: number;
  resolution: number;
  strength: number;
  firstRun: boolean;
  blur: number;
}

declare interface PIXI$filters$BlurYFilterUniforms {
  strength: number;
}

declare class PIXI$filters$BlurYFilter
  mixins Filter<PIXI$filters$BlurYFilterUniforms> {
  constructor(
    strength?: number,
    quality?: number,
    resolution?: number,
    kernelSize?: number
  ): this;
  _quality: number;
  quality: number;
  passes: number;
  resolution: number;
  strength: number;
  firstRun: boolean;
  blur: number;
}

declare interface PIXI$filters$ColorMatrixFilterUniforms {
  m: PIXI$Matrix;
  uAlpha: number;
}

declare class PIXI$filters$ColorMatrixFilter
  mixins Filter<PIXI$filters$ColorMatrixFilterUniforms> {
  constructor(): this;
  _loadMatrix(matrix: number[], multiply?: boolean): void;
  _multiply(out: number[], a: number[], b: number[]): void;
  _colorMatrix(matrix: number[]): void;
  matrix: number[];
  alpha: number;
  brightness(b: number, multiply?: boolean): void;
  greyscale(scale: number, multiply?: boolean): void;
  blackAndWhite(multiply?: boolean): void;
  hue(rotation: number, multiply?: boolean): void;
  contrast(amount: number, multiply?: boolean): void;
  saturate(amount: number, multiply?: boolean): void;
  desaturate(multiply?: boolean): void;
  negative(multiply?: boolean): void;
  sepia(multiply?: boolean): void;
  technicolor(multiply?: boolean): void;
  polaroid(multiply?: boolean): void;
  toBGR(multiply?: boolean): void;
  kodachrome(multiply?: boolean): void;
  browni(multiply?: boolean): void;
  vintage(multiply?: boolean): void;
  colorTone(
    desaturation: number,
    toned: number,
    lightColor: string,
    darkColor: string,
    multiply?: boolean
  ): void;
  night(intensity: number, multiply?: boolean): void;
  predator(amount: number, multiply?: boolean): void;
  lsd(multiply?: boolean): void;
  reset(): void;
}

declare interface PIXI$filters$DisplacementFilterUniforms {
  mapSampler: PIXI$Texture;
  filterMatrix: PIXI$Matrix;
  scale: PIXI$Point;
}

declare class PIXI$filters$DisplacementFilter
  mixins Filter<PIXI$filters$DisplacementFilterUniforms> {
  constructor(sprite: PIXI$Sprite, scale?: number): this;
  scale: PIXI$Point;
  map: PIXI$Texture;
}

declare class PIXI$filters$AlphaFilter mixins Filter<{}> {
  constructor(alpha?: number): this;
  alpha: number;
  glShaderKey: number;
}

declare interface PIXI$filters$NoiseFilterUniforms {
  uNoise: number;
  uSeed: number;
}

declare class PIXI$filters$NoiseFilter
  mixins Filter<PIXI$filters$NoiseFilterUniforms> {
  constructor(noise?: number, seed?: number): this;
  noise: number;
  seed: number;
}

/**
 * @class
 * @private
 * @name PIXI.filters.VoidFilter
 * @see PIXI.filters.AlphaFilter
 * @deprecated since version 4.5.7
 */
declare type PIXI$filters$VoidFilter = PIXI$filters$AlphaFilter;

declare var npm$namespace$PIXI$interaction: {
  InteractionData: typeof PIXI$interaction$InteractionData,
  InteractionManager: typeof PIXI$interaction$InteractionManager
};
declare interface PIXI$interaction$InteractiveTarget {
  interactive: boolean;
  interactiveChildren: boolean;
  hitArea:
    | PIXI$Rectangle
    | PIXI$Circle
    | PIXI$Ellipse
    | PIXI$Polygon
    | PIXI$RoundedRectangle
    | PIXI$HitArea;
  buttonMode: boolean;
  cursor: string;
  trackedPointers: {
    [key: number]: interaction$InteractionTrackingData
  };
  defaultCursor: string;
}

declare interface PIXI$interaction$InteractionTrackingData {
  +pointerId: number;
  flags: number;
  none: number;
  over: boolean;
  rightDown: boolean;
  leftDown: boolean;
}

declare interface PIXI$interaction$InteractionEvent {
  stopped: boolean;
  target: PIXI$DisplayObject;
  currentTarget: PIXI$DisplayObject;
  type: string;
  data: interaction$InteractionData;
  stopPropagation(): void;
  reset(): void;
}

declare class PIXI$interaction$InteractionData {
  global: PIXI$Point;
  target: PIXI$DisplayObject;
  originalEvent: MouseEvent | TouchEvent | PointerEvent;
  identifier: number;
  isPrimary: boolean;
  button: number;
  buttons: number;
  width: number;
  height: number;
  tiltX: number;
  tiltY: number;
  pointerType: string;
  pressure: number;
  rotationAngle: number;
  twist: number;
  tangentialPressure: number;
  pointerID: number;
  copyEvent(event: Touch | MouseEvent | PointerEvent): void;
  reset(): void;
  getLocalPosition(
    displayObject: PIXI$DisplayObject,
    point?: PIXI$Point,
    globalPos?: PIXI$Point
  ): PIXI$Point;
}

declare type PIXI$interaction$InteractionPointerEvents =
  | "pointerdown"
  | "pointercancel"
  | "pointerup"
  | "pointertap"
  | "pointerupoutside"
  | "pointermove"
  | "pointerover"
  | "pointerout";

declare type PIXI$interaction$InteractionTouchEvents =
  | "touchstart"
  | "touchcancel"
  | "touchend"
  | "touchendoutside"
  | "touchmove"
  | "tap";

declare type PIXI$interaction$InteractionMouseEvents =
  | "rightdown"
  | "mousedown"
  | "rightup"
  | "mouseup"
  | "rightclick"
  | "click"
  | "rightupoutside"
  | "mouseupoutside"
  | "mousemove"
  | "mouseover"
  | "mouseout"
  | "mouseover";

declare type PIXI$interaction$InteractionPixiEvents = "added" | "removed";

declare type PIXI$interaction$InteractionEventTypes =
  | PIXI$interaction$InteractionPointerEvents
  | PIXI$interaction$InteractionTouchEvents
  | PIXI$interaction$InteractionMouseEvents
  | PIXI$interaction$InteractionPixiEvents;

declare interface PIXI$interaction$InteractionManagerOptions {
  autoPreventDefault?: boolean;
  interactionFrequency?: number;
}

declare class PIXI$interaction$InteractionManager mixins utils$EventEmitter {
  constructor(
    renderer: PIXI$CanvasRenderer | PIXI$WebGLRenderer | PIXI$SystemRenderer,
    options?: PIXI$interaction$InteractionManagerOptions
  ): this;
  renderer: PIXI$SystemRenderer;
  autoPreventDefault: boolean;
  interactionFrequency: number;
  mouse: PIXI$interaction$InteractionData;
  activeInteractionData: {
    [key: number]: PIXI$interaction$InteractionData
  };
  interactionDataPool: PIXI$interaction$InteractionData[];
  eventData: PIXI$interaction$InteractionEvent;
  interactionDOMElement: HTMLElement;
  moveWhenInside: boolean;
  eventsAdded: boolean;
  mouseOverRenderer: boolean;
  supportsTouchEvents: boolean;
  supportsPointerEvents: boolean;
  onPointerUp: (event: PointerEvent) => void;
  processPointerUp: (
    interactionEvent: PIXI$interaction$InteractionEvent,
    displayObject: PIXI$Container | PIXI$Sprite | PIXI$extras$TilingSprite,
    hit: boolean
  ) => void;
  onPointerCancel: (event: PointerEvent) => void;
  processPointerCancel: (
    interactionEvent: PIXI$interaction$InteractionEvent,
    displayObject: PIXI$Container | PIXI$Sprite | PIXI$extras$TilingSprite
  ) => void;
  onPointerDown: (event: PointerEvent) => void;
  processPointerDown: (
    interactionEvent: PIXI$interaction$InteractionEvent,
    displayObject: PIXI$Container | PIXI$Sprite | PIXI$extras$TilingSprite,
    hit: boolean
  ) => void;
  onPointerMove: (event: PointerEvent) => void;
  processPointerMove: (
    interactionEvent: PIXI$interaction$InteractionEvent,
    displayObject: PIXI$Container | PIXI$Sprite | PIXI$extras$TilingSprite,
    hit: boolean
  ) => void;
  onPointerOut: (event: PointerEvent) => void;
  processPointerOverOut: (
    interactionEvent: PIXI$interaction$InteractionEvent,
    displayObject: PIXI$Container | PIXI$Sprite | PIXI$extras$TilingSprite,
    hit: boolean
  ) => void;
  onPointerOver: (event: PointerEvent) => void;
  cursorStyles: {
    default: string,
    pointer: string
  };
  currentCursorMode: string;
  cursor: string;
  _tempPoint: PIXI$Point;
  resolution: number;
  hitTest(globalPoint: PIXI$Point, root?: PIXI$Container): PIXI$DisplayObject;
  setTargetElement(element: HTMLCanvasElement, resolution?: number): void;
  addEvents(): void;
  removeEvents(): void;
  update(deltaTime?: number): void;
  setCursorMode(mode: string): void;
  dispatchEvent(
    displayObject: PIXI$Container | PIXI$Sprite | PIXI$extras$TilingSprite,
    eventString: string,
    eventData: any
  ): void;
  mapPositionToPoint(point: PIXI$Point, x: number, y: number): void;
  processInteractive(
    interactionEvent: PIXI$interaction$InteractionEvent,
    displayObject: PIXI$Container | PIXI$Sprite | PIXI$extras$TilingSprite,
    func?: Function,
    hitTest?: boolean,
    interactive?: boolean
  ): boolean;
  onPointerComplete(
    originalEvent: PointerEvent,
    cancelled: boolean,
    func: Function
  ): void;
  getInteractionDataForPointerId(
    pointerId: number
  ): PIXI$interaction$InteractionData;
  releaseInteractionDataForPointerId(event: PointerEvent): void;
  configureInteractionEventForDOMEvent(
    interactionEvent: PIXI$interaction$InteractionEvent,
    pointerEvent: PointerEvent,
    interactionData: PIXI$interaction$InteractionData
  ): PIXI$interaction$InteractionEvent;
  normalizeToPointerData(
    event: TouchEvent | MouseEvent | PointerEvent
  ): PointerEvent[];
  destroy(): void;
  defaultCursorStyle: string;
  currentCursorStyle: string;
}

declare class PIXI$MiniSignalBinding {
  constructor(fn: Function, once?: boolean, thisArg?: any): this;
  _fn: Function;
  _once: boolean;
  _thisArg: any;
  _next: PIXI$MiniSignalBinding;
  _prev: PIXI$MiniSignalBinding;
  _owner: PIXI$MiniSignal;
  detach(): boolean;
}

declare class PIXI$MiniSignal {
  constructor(): this;
  _head: PIXI$MiniSignalBinding;
  _tail: PIXI$MiniSignalBinding;
  handlers(exists?: boolean): PIXI$MiniSignalBinding[] | boolean;
  handlers(exists?: true): boolean;
  handlers(exists?: false): PIXI$MiniSignalBinding[];
  has(node: PIXI$MiniSignalBinding): boolean;
  dispatch(): boolean;
  add(fn: Function, thisArg?: any): any;
  once(fn: Function, thisArg?: any): any;
  detach(node: PIXI$MiniSignalBinding): PIXI$MiniSignal;
  detachAll(): PIXI$MiniSignal;
}

declare var npm$namespace$PIXI$loaders: {
  shared: typeof PIXI$loaders$shared,

  Loader: typeof PIXI$loaders$Loader,
  Resource: typeof PIXI$loaders$Resource
};
declare interface PIXI$loaders$LoaderOptions {
  crossOrigin?: boolean | string;
  loadType?: number;
  xhrType?: string;
  metaData?: {
    loadElement?: HTMLImageElement | HTMLAudioElement | HTMLVideoElement,
    skipSource?: boolean,
    mimeType?: string | string[]
  };
}

declare interface PIXI$loaders$ResourceDictionary {
  [index: string]: PIXI$loaders$Resource;
}

declare class PIXI$loaders$Loader mixins utils$EventEmitter {
  static addPixiMiddleware(fn: Function): void;
  static loaders$Resource: any;
  static async: any;
  static base64: any;
  constructor(baseUrl?: string, concurrency?: number): this;
  baseUrl: string;
  progress: number;
  loading: boolean;
  defaultQueryString: string;
  _beforeMiddleware: Function[];
  _afterMiddleware: Function[];
  _resourcesParsing: loaders$Resource[];
  _boundLoadResource: (r: loaders$Resource, d: Function) => void;
  _queue: any;
  resources: PIXI$loaders$ResourceDictionary;
  onProgress: PIXI$MiniSignal;
  onError: PIXI$MiniSignal;
  onLoad: PIXI$MiniSignal;
  onStart: PIXI$MiniSignal;
  onComplete: PIXI$MiniSignal;
  concurrency: number;
  add(...params: any[]): this;
  add(
    name: string,
    url: string,
    options?: PIXI$loaders$LoaderOptions,
    cb?: Function
  ): this;
  add(
    obj: string | any | any[],
    options?: PIXI$loaders$LoaderOptions,
    cb?: Function
  ): this;
  pre(fn: Function): this;
  use(fn: Function): this;
  reset(): this;
  load(cb?: Function): this;
  _prepareUrl(url: string): string;
  _loadResource(resource: loaders$Resource, dequeue: Function): void;
  _onStart(): void;
  _onComplete(): void;
  _onLoad(resource: loaders$Resource): void;
  destroy(): void;
  on(
    event: "complete",
    fn: (loader: PIXI$loaders$Loader, object: any) => void,
    context?: any
  ): this;
  on(
    event: "error",
    fn: (
      error: Error,
      loader: PIXI$loaders$Loader,
      resource: loaders$Resource
    ) => void,
    context?: any
  ): this;
  on(
    event: "load" | "progress",
    fn: (loader: PIXI$loaders$Loader, resource: loaders$Resource) => void,
    context?: any
  ): this;
  on(
    event: "start",
    fn: (loader: PIXI$loaders$Loader) => void,
    context?: any
  ): this;
  once(
    event: "complete",
    fn: (loader: PIXI$loaders$Loader, object: any) => void,
    context?: any
  ): this;
  once(
    event: "error",
    fn: (
      error: Error,
      loader: PIXI$loaders$Loader,
      resource: loaders$Resource
    ) => void,
    context?: any
  ): this;
  once(
    event: "load" | "progress",
    fn: (loader: PIXI$loaders$Loader, resource: loaders$Resource) => void,
    context?: any
  ): this;
  once(
    event: "start",
    fn: (loader: PIXI$loaders$Loader) => void,
    context?: any
  ): this;
  off(
    event: "complete" | "error" | "load" | "progress" | "start" | string,
    fn?: Function,
    context?: any
  ): this;
}

declare interface PIXI$loaders$TextureDictionary {
  [index: string]: PIXI$Texture;
}

declare class PIXI$loaders$Resource {
  static setExtensionLoadType(extname: string, loadType: number): void;
  static setExtensionXhrType(extname: string, xhrType: string): void;
  constructor(
    name: string,
    url: string | string[],
    options?: PIXI$loaders$LoaderOptions
  ): this;
  _flags: number;
  name: string;
  url: string;
  extension: string;
  data: any;
  crossOrigin: boolean | string;
  loadType: number;
  xhrType: string;
  metadata: any;
  error: Error;
  xhr: XMLHttpRequest | null;
  children: PIXI$loaders$Resource[];
  type: number;
  progressChunk: number;
  _dequeue: Function;
  _onLoadBinding: Function;
  _boundComplete: Function;
  _boundOnError: Function;
  _boundOnProgress: Function;
  _boundXhrOnError: Function;
  _boundXhrOnAbort: Function;
  _boundXhrOnLoad: Function;
  _boundXdrOnTimeout: Function;
  onStart: PIXI$MiniSignal;
  onProgress: PIXI$MiniSignal;
  onComplete: PIXI$MiniSignal;
  onAfterMiddleware: PIXI$MiniSignal;
  isDataUrl: boolean;
  isComplete: boolean;
  isLoading: boolean;
  complete(): void;
  abort(message?: string): void;
  load(cb?: Function): void;
  _hasFlag(flag: number): boolean;
  _setFlag(flag: number, value: boolean): void;
  _loadElement(type: string): void;
  _loadSourceElement(type: string): void;
  _loadXhr(): void;
  _loadXdr(): void;
  _createSource(type: string, url: string, mime?: string): HTMLSourceElement;
  _onError(event?: any): void;
  _onProgress(event?: any): void;
  _xhrOnError(): void;
  _xhrOnAbort(): void;
  _xdrOnTimeout(): void;
  _xhrOnLoad(): void;
  _determineCrossOrigin(url: string, loc: any): string;
  _determineXhrType(): number;
  _determineLoadType(): number;
  _getExtension(): string;
  _getMimeXhrType(type: number): string;
  static STATUS_FLAGS: {
    NONE: number,
    DATA_URL: number,
    COMPLETE: number,
    LOADING: number
  };
  static TYPE: {
    UNKNOWN: number,
    JSON: number,
    XML: number,
    IMAGE: number,
    AUDIO: number,
    VIDEO: number,
    TEXT: number
  };
  static LOAD_TYPE: {
    XHR: number,
    IMAGE: number,
    AUDIO: number,
    VIDEO: number
  };
  static XHR_RESPONSE_TYPE: {
    DEFAULT: string,
    BUFFER: string,
    BLOB: string,
    DOCUMENT: string,
    JSON: string,
    TEXT: string
  };
  static EMPTY_GIF: string;
  texture: PIXI$Texture;
  spineAtlas: any;
  spineData: any;
  textures: PIXI$loaders$TextureDictionary;
  spritesheet: PIXI$Spritesheet;
}

declare var PIXI$loaders$shared: PIXI$loaders$Loader;

declare var npm$namespace$PIXI$mesh: {
  Mesh: typeof PIXI$mesh$Mesh,
  CanvasMeshRenderer: typeof PIXI$mesh$CanvasMeshRenderer,
  MeshRenderer: typeof PIXI$mesh$MeshRenderer,
  Plane: typeof PIXI$mesh$Plane,
  NineSlicePlane: typeof PIXI$mesh$NineSlicePlane,
  Rope: typeof PIXI$mesh$Rope
};
declare class PIXI$mesh$Mesh mixins Container {
  constructor(
    texture: PIXI$Texture,
    vertices?: Float32Array,
    uvs?: Float32Array,
    indices?: Uint16Array,
    drawMode?: number
  ): this;
  _texture: PIXI$Texture;
  uvs: Float32Array;
  vertices: Float32Array;
  indices: Uint16Array;
  dirty: number;
  indexDirty: number;
  vertexDirty: number;
  autoUpdate: boolean;
  dirtyVertex: boolean;
  _geometryVersion: number;
  blendMode: number;
  pluginName: string;
  canvasPadding: number;
  drawMode: number;
  texture: PIXI$Texture;
  tintRgb: Float32Array;
  _glDatas: {
    [n: number]: any
  };
  _uvTransform: PIXI$extras$TextureMatrix;
  uploadUvTransform: boolean;
  multiplyUvs(): void;
  refresh(forceUpdate?: boolean): void;
  _refresh(): void;
  _renderWebGL(renderer: PIXI$WebGLRenderer): void;
  _renderCanvas(renderer: PIXI$CanvasRenderer): void;
  _onTextureUpdate(): void;
  _calculateBounds(): void;
  containsPoint(point: PIXI$Point): boolean;
  tint: number;
  static PIXI$CONST$DRAW_MODES: {
    TRIANGLE_MESH: number,
    TRIANGLES: number
  };
}

declare class PIXI$mesh$CanvasMeshRenderer {
  constructor(renderer: PIXI$CanvasRenderer): this;
  renderer: PIXI$CanvasRenderer;
  render(mesh: PIXI$mesh$Mesh): void;
  _renderTriangleMesh(mesh: PIXI$mesh$Mesh): void;
  _renderTriangles(mesh: PIXI$mesh$Mesh): void;
  _renderDrawTriangle(
    mesh: PIXI$mesh$Mesh,
    index0: number,
    index1: number,
    index2: number
  ): void;
  renderMeshFlat(mesh: PIXI$mesh$Mesh): void;
  destroy(): void;
}

declare class PIXI$mesh$MeshRenderer mixins ObjectRenderer {
  constructor(renderer: PIXI$WebGLRenderer): this;
  shader: PIXI$Shader;
  render(mesh: PIXI$mesh$Mesh): void;
}

declare class PIXI$mesh$Plane mixins Mesh {
  constructor(
    texture: PIXI$Texture,
    verticesX?: number,
    verticesY?: number
  ): this;
  _ready: boolean;
  verticesX: number;
  verticesY: number;
  drawMode: number;
  refresh(): void;
  _onTexureUpdate(): void;
}

declare class PIXI$mesh$NineSlicePlane mixins Plane {
  constructor(
    texture: PIXI$Texture,
    leftWidth?: number,
    topHeight?: number,
    rightWidth?: number,
    bottomHeight?: number
  ): this;
  width: number;
  height: number;
  leftWidth: number;
  rightWidth: number;
  topHeight: number;
  bottomHeight: number;
  _leftWidth: number;
  _rightWidth: number;
  _topHeight: number;
  _bottomHeight: number;
  _height: number;
  _width: number;
  _origHeight: number;
  _origWidth: number;
  _uvh: number;
  _uvw: number;
  updateHorizontalVertices(): void;
  updateVerticalVertices(): void;
  drawSegment(
    context: CanvasRenderingContext2D | WebGLRenderingContext,
    textureSource: any,
    w: number,
    h: number,
    x1: number,
    y1: number,
    x2: number,
    y2: number
  ): void;
  _refresh(): void;
}

declare class PIXI$mesh$Rope mixins Mesh {
  constructor(texture: PIXI$Texture, points: PIXI$Point[]): this;
  points: PIXI$Point[];
  colors: number[];
  autoUpdate: boolean;
  _refresh(): void;
  refreshVertices(): void;
}

declare var npm$namespace$PIXI$particles: {
  ParticleContainer: typeof PIXI$particles$ParticleContainer,
  ParticleBuffer: typeof PIXI$particles$ParticleBuffer,
  ParticleRenderer: typeof PIXI$particles$ParticleRenderer
};
declare interface PIXI$particles$ParticleContainerProperties {
  /**
   * DEPRECIATED - Use `vertices`
   */
  scale?: boolean;
  vertices?: boolean;
  position?: boolean;
  rotation?: boolean;
  uvs?: boolean;
  tint?: boolean;
  alpha?: boolean;
}

declare class PIXI$particles$ParticleContainer mixins Container {
  constructor(
    maxSize?: number,
    properties?: PIXI$particles$ParticleContainerProperties,
    batchSize?: number,
    autoResize?: boolean
  ): this;
  _tint: number;
  tintRgb: number | any[];
  tint: number;
  _properties: boolean[];
  _maxSize: number;
  _batchSize: number;
  _glBuffers: {
    [n: number]: WebGLBuffer
  };
  _bufferUpdateIDs: number[];
  _updateID: number;
  interactiveChildren: boolean;
  blendMode: number;
  autoSize: boolean;
  roundPixels: boolean;
  baseTexture: PIXI$BaseTexture;
  setProperties(properties: PIXI$particles$ParticleContainerProperties): void;
  onChildrenChange: (smallestChildIndex?: number) => void;
  destroy(options?: PIXI$DestroyOptions | boolean): void;
}

declare class PIXI$particles$ParticleBuffer {
  constructor(
    gl: WebGLRenderingContext,
    properties: any,
    dynamicPropertyFlags: any[],
    size: number
  ): this;
  gl: WebGLRenderingContext;
  size: number;
  dynamicProperties: any[];
  staticProperties: any[];
  staticStride: number;
  staticBuffer: any;
  staticData: any;
  staticDataUint32: any;
  dynamicStride: number;
  dynamicBuffer: any;
  dynamicData: any;
  dynamicDataUint32: any;
  _updateID: number;
  destroy(): void;
}

declare interface PIXI$particles$ParticleRendererProperty {
  attribute: number;
  size: number;
  uploadFunction(
    children: PIXI$DisplayObject[],
    startIndex: number,
    amount: number,
    array: number[],
    stride: number,
    offset: number
  ): void;
  unsignedByte: any;
  offset: number;
}

declare class PIXI$particles$ParticleRenderer mixins ObjectRenderer {
  constructor(renderer: PIXI$WebGLRenderer): this;
  shader: PIXI$glCore$GLShader;
  indexBuffer: WebGLBuffer;
  properties: PIXI$particles$ParticleRendererProperty[];
  tempMatrix: PIXI$Matrix;
  start(): void;
  generateBuffers(
    container: PIXI$particles$ParticleContainer
  ): PIXI$particles$ParticleBuffer[];
  _generateOneMoreBuffer(
    container: PIXI$particles$ParticleContainer
  ): PIXI$particles$ParticleBuffer;
  uploadVertices(
    children: PIXI$DisplayObject[],
    startIndex: number,
    amount: number,
    array: number[],
    stride: number,
    offset: number
  ): void;
  uploadPosition(
    children: PIXI$DisplayObject[],
    startIndex: number,
    amount: number,
    array: number[],
    stride: number,
    offset: number
  ): void;
  uploadRotation(
    children: PIXI$DisplayObject[],
    startIndex: number,
    amount: number,
    array: number[],
    stride: number,
    offset: number
  ): void;
  uploadUvs(
    children: PIXI$DisplayObject[],
    startIndex: number,
    amount: number,
    array: number[],
    stride: number,
    offset: number
  ): void;
  uploadTint(
    children: PIXI$DisplayObject[],
    startIndex: number,
    amount: number,
    array: number[],
    stride: number,
    offset: number
  ): void;
  uploadAlpha(
    children: PIXI$DisplayObject[],
    startIndex: number,
    amount: number,
    array: number[],
    stride: number,
    offset: number
  ): void;
  destroy(): void;
  indices: Uint16Array;
}

declare var npm$namespace$PIXI$prepare: {
  BasePrepare: typeof PIXI$prepare$BasePrepare,
  CanvasPrepare: typeof PIXI$prepare$CanvasPrepare,
  WebGLPrepare: typeof PIXI$prepare$WebGLPrepare,
  CountLimiter: typeof PIXI$prepare$CountLimiter,
  TimeLimiter: typeof PIXI$prepare$TimeLimiter
};
declare type PIXI$prepare$AddHook = (item: any, queue: any[]) => boolean;

declare type PIXI$prepare$UploadHook<UploadHookSource> = (
  prepare: UploadHookSource,
  item: any
) => boolean;

declare class PIXI$prepare$BasePrepare<UploadHookSource> {
  constructor(renderer: PIXI$SystemRenderer): this;
  limiter: prepare$CountLimiter | prepare$TimeLimiter;
  renderer: PIXI$SystemRenderer;
  uploadHookHelper: UploadHookSource;
  queue: any[];
  addHooks: PIXI$prepare$AddHook[];
  uploadHooks: Array<PIXI$prepare$UploadHook<UploadHookSource>>;
  completes: Function[];
  ticking: boolean;
  delayedTick: () => void;
  upload(
    item:
      | Function
      | PIXI$DisplayObject
      | PIXI$Container
      | PIXI$BaseTexture
      | PIXI$Texture
      | PIXI$Graphics
      | PIXI$Text
      | any,
    done?: () => void
  ): void;
  tick(): void;
  prepareItems(): void;
  registerFindHook(addHook: PIXI$prepare$AddHook): this;
  registerUploadHook(
    uploadHook: PIXI$prepare$UploadHook<UploadHookSource>
  ): this;
  findMultipleBaseTextures(item: PIXI$DisplayObject, queue: any[]): boolean;
  findBaseTexture(item: PIXI$DisplayObject, queue: any[]): boolean;
  findTexture(item: PIXI$DisplayObject, queue: any[]): boolean;
  add(
    item:
      | PIXI$DisplayObject
      | PIXI$Container
      | PIXI$BaseTexture
      | PIXI$Texture
      | PIXI$Graphics
      | PIXI$Text
      | any
  ): this;
  destroy(): void;
}

declare class PIXI$prepare$CanvasPrepare
  mixins BasePrepare<PIXI$prepare$CanvasPrepare> {
  constructor(renderer: PIXI$CanvasRenderer): this;
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
}

declare class PIXI$prepare$WebGLPrepare mixins BasePrepare<PIXI$WebGLRenderer> {
  constructor(renderer: PIXI$WebGLRenderer): this;
}

declare class PIXI$prepare$CountLimiter {
  constructor(maxItemsPerFrame: number): this;
  maxItemsPerFrame: number;
  itemsLeft: number;
  beginFrame(): void;
  allowedToUpload(): boolean;
}

declare class PIXI$prepare$TimeLimiter {
  constructor(maxMilliseconds: number): this;
  maxMilliseconds: number;
  frameStart: number;
  beginFrame(): void;
  allowedToUpload(): boolean;
}

declare var npm$namespace$PIXI$glCore: {
  createContext: typeof PIXI$glCore$createContext,
  setVertexAttribArrays: typeof PIXI$glCore$setVertexAttribArrays,

  GLBuffer: typeof PIXI$glCore$GLBuffer,
  GLFramebuffer: typeof PIXI$glCore$GLFramebuffer,
  GLShader: typeof PIXI$glCore$GLShader,
  GLTexture: typeof PIXI$glCore$GLTexture,
  VertexArrayObject: typeof PIXI$glCore$VertexArrayObject
};
declare interface PIXI$glCore$ContextOptions {
  /**
   * Boolean that indicates if the canvas contains an alpha buffer.
   */
  alpha?: boolean;

  /**
   * Boolean that indicates that the drawing buffer has a depth buffer of at least 16 bits.
   */
  depth?: boolean;

  /**
   * Boolean that indicates that the drawing buffer has a stencil buffer of at least 8 bits.
   */
  stencil?: boolean;

  /**
   * Boolean that indicates whether or not to perform anti-aliasing.
   */
  antialias?: boolean;

  /**
   * Boolean that indicates that the page compositor will assume the drawing buffer contains colors with pre-multiplied alpha.
   */
  premultipliedAlpha?: boolean;

  /**
   * If the value is true the buffers will not be cleared and will preserve their values until cleared or overwritten by the author.
   */
  preserveDrawingBuffer?: boolean;

  /**
   * Boolean that indicates if a context will be created if the system performance is low.
   */
  failIfMajorPerformanceCaveat?: boolean;
}

declare function PIXI$glCore$createContext(
  view: HTMLCanvasElement,
  options?: PIXI$glCore$ContextOptions
): WebGLRenderingContext;

declare function PIXI$glCore$setVertexAttribArrays(
  gl: WebGLRenderingContext,
  attribs: glCore$Attrib[],
  state?: PIXI$WebGLState
): WebGLRenderingContext | void;

declare class PIXI$glCore$GLBuffer {
  constructor(
    gl: WebGLRenderingContext,
    type: number,
    data: ArrayBuffer | ArrayBufferView | any,
    drawType: number
  ): this;
  _updateID: number;
  gl: WebGLRenderingContext;
  buffer: WebGLBuffer;
  type: number;
  drawType: number;
  data: ArrayBuffer | ArrayBufferView | any;
  upload(
    data?: ArrayBuffer | ArrayBufferView | any,
    offset?: number,
    dontBind?: boolean
  ): void;
  bind(): void;
  static createVertexBuffer(
    gl: WebGLRenderingContext,
    data: ArrayBuffer | ArrayBufferView | any,
    drawType: number
  ): PIXI$glCore$GLBuffer;
  static createIndexBuffer(
    gl: WebGLRenderingContext,
    data: ArrayBuffer | ArrayBufferView | any,
    drawType: number
  ): PIXI$glCore$GLBuffer;
  static create(
    gl: WebGLRenderingContext,
    type: number,
    data: ArrayBuffer | ArrayBufferView | any,
    drawType: number
  ): PIXI$glCore$GLBuffer;
  destroy(): void;
}

declare class PIXI$glCore$GLFramebuffer {
  constructor(gl: WebGLRenderingContext, width: number, height: number): this;
  gl: WebGLRenderingContext;
  frameBuffer: WebGLFramebuffer;
  stencil: WebGLRenderbuffer;
  texture: glCore$GLTexture;
  width: number;
  height: number;
  enableTexture(texture: glCore$GLTexture): void;
  enableStencil(): void;
  clear(r: number, g: number, b: number, a: number): void;
  bind(): void;
  unbind(): void;
  resize(width: number, height: number): void;
  destroy(): void;
  static createRGBA(
    gl: WebGLRenderingContext,
    width: number,
    height: number,
    data: ArrayBuffer | ArrayBufferView | any
  ): PIXI$glCore$GLFramebuffer;
  static createFloat32(
    gl: WebGLRenderingContext,
    width: number,
    height: number,
    data: ArrayBuffer | ArrayBufferView | any
  ): PIXI$glCore$GLFramebuffer;
}

declare class PIXI$glCore$GLShader {
  constructor(
    gl: WebGLRenderingContext,
    vertexSrc: string | string[],
    fragmentSrc: string | string[],
    precision?: string,
    attributeLocations?: {
      [key: string]: number
    }
  ): this;
  gl: WebGLRenderingContext;
  program: WebGLProgram | null;
  uniformData: any;
  uniforms: any;
  attributes: any;
  bind(): this;
  destroy(): void;
}

declare class PIXI$glCore$GLTexture {
  constructor(
    gl: WebGLRenderingContext,
    width?: number,
    height?: number,
    format?: number,
    type?: number
  ): this;
  gl: WebGLRenderingContext;
  texture: WebGLTexture;
  mipmap: boolean;
  premultiplyAlpha: boolean;
  width: number;
  height: number;
  format: number;
  type: number;
  upload(
    source: HTMLImageElement | ImageData | HTMLVideoElement | HTMLCanvasElement
  ): void;
  uploadData(
    data: ArrayBuffer | ArrayBufferView,
    width: number,
    height: number
  ): void;
  bind(location?: number): void;
  unbind(): void;
  minFilter(linear: boolean): void;
  magFilter(linear: boolean): void;
  enableMipmap(): void;
  enableLinearScaling(): void;
  enableNearestScaling(): void;
  enableWrapClamp(): void;
  enableWrapRepeat(): void;
  enableWrapMirrorRepeat(): void;
  destroy(): void;
  static fromSource(
    gl: WebGLRenderingContext,
    source: HTMLImageElement | ImageData | HTMLVideoElement | HTMLCanvasElement,
    premultipleAlpha?: boolean
  ): PIXI$glCore$GLTexture;
  static fromData(
    gl: WebGLRenderingContext,
    data: number[],
    width: number,
    height: number
  ): PIXI$glCore$GLTexture;
}

declare interface PIXI$glCore$Attrib {
  attribute: {
    location: number,
    size: number
  };
  normalized: boolean;
  stride: number;
  start: number;
  buffer: ArrayBuffer;
}

declare interface PIXI$glCore$WebGLRenderingContextAttribute {
  buffer: WebGLBuffer;
  attribute: any;
  type: number;
  normalized: boolean;
  stride: number;
  start: number;
}

declare interface PIXI$glCore$AttribState {
  tempAttribState: PIXI$glCore$Attrib[];
  attribState: PIXI$glCore$Attrib[];
}

declare class PIXI$glCore$VertexArrayObject {
  static FORCE_NATIVE: boolean;
  constructor(gl: WebGLRenderingContext, state?: PIXI$WebGLState): this;
  nativeVaoExtension: any;
  nativeState: PIXI$glCore$AttribState;
  nativeVao: PIXI$glCore$VertexArrayObject;
  gl: WebGLRenderingContext;
  attributes: PIXI$glCore$Attrib[];
  indexBuffer: PIXI$glCore$GLBuffer;
  dirty: boolean;
  bind(): this;
  unbind(): this;
  activate(): this;
  addAttribute(
    buffer: PIXI$glCore$GLBuffer,
    attribute: PIXI$glCore$Attrib,
    type?: number,
    normalized?: boolean,
    stride?: number,
    start?: number
  ): this;
  addIndex(buffer: PIXI$glCore$GLBuffer, options?: any): this;
  clear(): this;
  draw(type: number, size: number, start: number): this;
  destroy(): void;
}

declare interface PIXI$DecomposedDataUri {
  mediaType: string;
  subType: string;
  encoding: string;
  data: any;
}

declare var npm$namespace$PIXI$utils: {
  uid: typeof PIXI$utils$uid,
  hex2rgb: typeof PIXI$utils$hex2rgb,
  hex2string: typeof PIXI$utils$hex2string,
  rgb2hex: typeof PIXI$utils$rgb2hex,
  canUseNewCanvasBlendModes: typeof PIXI$utils$canUseNewCanvasBlendModes,
  getResolutionOfUrl: typeof PIXI$utils$getResolutionOfUrl,
  getSvgSize: typeof PIXI$utils$getSvgSize,
  decomposeDataUri: typeof PIXI$utils$decomposeDataUri,
  getUrlFileExtension: typeof PIXI$utils$getUrlFileExtension,
  sayHello: typeof PIXI$utils$sayHello,
  skipHello: typeof PIXI$utils$skipHello,
  isWebGLSupported: typeof PIXI$utils$isWebGLSupported,
  sign: typeof PIXI$utils$sign,
  removeItems: typeof PIXI$utils$removeItems,
  correctBlendMode: typeof PIXI$utils$correctBlendMode,
  clearTextureCache: typeof PIXI$utils$clearTextureCache,
  destroyTextureCache: typeof PIXI$utils$destroyTextureCache,
  premultiplyTint: typeof PIXI$utils$premultiplyTint,
  premultiplyRgba: typeof PIXI$utils$premultiplyRgba,
  premultiplyTintToRgba: typeof PIXI$utils$premultiplyTintToRgba,
  premultiplyBlendMode: typeof PIXI$utils$premultiplyBlendMode,
  TextureCache: typeof PIXI$utils$TextureCache,
  BaseTextureCache: typeof PIXI$utils$BaseTextureCache,

  EventEmitter: typeof PIXI$utils$EventEmitter,
  isMobile: typeof npm$namespace$PIXI$utils$isMobile
};
declare function PIXI$utils$uid(): number;

declare function PIXI$utils$hex2rgb(hex: number, out?: number[]): number[];

declare function PIXI$utils$hex2string(hex: number): string;

declare function PIXI$utils$rgb2hex(rgb: number[]): number;

declare function PIXI$utils$canUseNewCanvasBlendModes(): boolean;

declare function PIXI$utils$getResolutionOfUrl(
  url: string,
  defaultValue?: number
): number;

declare function PIXI$utils$getSvgSize(svgString: string): any;

declare function PIXI$utils$decomposeDataUri(
  dataUri: string
): PIXI$DecomposedDataUri | void;

declare function PIXI$utils$getUrlFileExtension(url: string): string | void;

declare function PIXI$utils$sayHello(type: string): void;

declare function PIXI$utils$skipHello(): void;

declare function PIXI$utils$isWebGLSupported(): boolean;

declare function PIXI$utils$sign(n: number): number;

declare function PIXI$utils$removeItems<T>(
  arr: T[],
  startIdx: number,
  removeCount: number
): void;

declare function PIXI$utils$correctBlendMode(
  blendMode: number,
  premultiplied: boolean
): number;

declare function PIXI$utils$clearTextureCache(): void;

declare function PIXI$utils$destroyTextureCache(): void;

declare function PIXI$utils$premultiplyTint(
  tint: number,
  alpha: number
): number;

declare function PIXI$utils$premultiplyRgba(
  rgb: Float32Array | number[],
  alpha: number,
  out?: Float32Array,
  premultiply?: boolean
): Float32Array;

declare function PIXI$utils$premultiplyTintToRgba(
  tint: number,
  alpha: number,
  out?: Float32Array,
  premultiply?: boolean
): Float32Array;

declare var PIXI$utils$premultiplyBlendMode: number[][];

declare var PIXI$utils$TextureCache: any;

declare var PIXI$utils$BaseTextureCache: any;

declare var npm$namespace$PIXI$utils$isMobile: {
  apple: typeof PIXI$utils$isMobile$apple,
  android: typeof PIXI$utils$isMobile$android,
  amazon: typeof PIXI$utils$isMobile$amazon,
  windows: typeof PIXI$utils$isMobile$windows,
  seven_inch: typeof PIXI$utils$isMobile$seven_inch,
  other: typeof PIXI$utils$isMobile$other,
  any: typeof PIXI$utils$isMobile$any,
  phone: typeof PIXI$utils$isMobile$phone,
  tablet: typeof PIXI$utils$isMobile$tablet
};
declare var PIXI$utils$isMobile$apple: {
  phone: boolean,
  ipod: boolean,
  tablet: boolean,
  device: boolean
};

declare var PIXI$utils$isMobile$android: {
  phone: boolean,
  tablet: boolean,
  device: boolean
};

declare var PIXI$utils$isMobile$amazon: {
  phone: boolean,
  tablet: boolean,
  device: boolean
};

declare var PIXI$utils$isMobile$windows: {
  phone: boolean,
  tablet: boolean,
  device: boolean
};

declare var PIXI$utils$isMobile$seven_inch: boolean;

declare var PIXI$utils$isMobile$other: {
  blackberry10: boolean,
  blackberry: boolean,
  opera: boolean,
  firefox: boolean,
  chrome: boolean,
  device: boolean
};

declare var PIXI$utils$isMobile$any: boolean;

declare var PIXI$utils$isMobile$phone: boolean;

declare var PIXI$utils$isMobile$tablet: boolean;

declare class PIXI$utils$EventEmitter {
  static prefixed: string | boolean;
  static PIXI$utils$EventEmitter: {
    new(): PIXI$utils$EventEmitter,
    prefixed: string | boolean
  };

  /**
   * Minimal EventEmitter interface that is molded against the Node.js
   * EventEmitter interface.
   * @constructor
   * @api public
   */
  constructor(): this;

  /**
   * Return an array listing the events for which the emitter has registered listeners.
   * @returns {(string | Symbol)[]}
   */
  eventNames(): Array<string | Symbol>;

  /**
   * Return the listeners registered for a given event.
   * @param {(string | Symbol)} event The event name.
   * @returns {Function[]}
   */
  listeners(event: string | Symbol): Function[];

  /**
   * Check if there listeners for a given event.
   * If `exists` argument is not `true` lists listeners.
   * @param {(string | Symbol)} event The event name.
   * @param {boolean} exists Only check if there are listeners.
   * @returns {boolean}
   */
  listeners(event: string | Symbol, exists: boolean): boolean;

  /**
   * Calls each of the listeners registered for a given event.
   * @param {(string | Symbol)} event The event name.
   * @param {"NO PRINT IMPLEMENTED: JSDocVariadicType"} args Arguments that are passed to registered listeners
   * @returns {boolean} `true` if the event had listeners, else `false`.
   */
  emit(event: string | Symbol, ...args: any[]): boolean;

  /**
   * Add a listener for a given event.
   * @param {(string | Symbol)} event The event name.
   * @param {Function} fn The listener function.
   * @param {"NO PRINT IMPLEMENTED: JSDocAllType"} context The context to invoke the listener with.
   * @returns {PIXI$utils$EventEmitter} `this`.
   */
  on(event: string | Symbol, fn: Function, context?: any): this;

  /**
   * Add a one-time listener for a given event.
   * @param {(string | Symbol)} event The event name.
   * @param {Function} fn The listener function.
   * @param {"NO PRINT IMPLEMENTED: JSDocAllType"} context The context to invoke the listener with.
   * @returns {PIXI$utils$EventEmitter} `this`.
   */
  once(event: string | Symbol, fn: Function, context?: any): this;

  /**
   * Remove the listeners of a given event.
   * @param {(string | Symbol)} event The event name.
   * @param {Function} fn Only remove the listeners that match this function.
   * @param {"NO PRINT IMPLEMENTED: JSDocAllType"} context Only remove the listeners that have this context.
   * @param {boolean} once Only remove one-time listeners.
   * @returns {PIXI$utils$EventEmitter} `this`.
   */
  removeListener(
    event: string | Symbol,
    fn?: Function,
    context?: any,
    once?: boolean
  ): this;

  /**
   * Remove all listeners, or those of the specified event.
   * @param {(string | Symbol)} event The event name.
   * @returns {PIXI$utils$EventEmitter} `this`.
   */
  removeAllListeners(event?: string | Symbol): this;

  /**
   * Alias method for `removeListener`
   */
  off(
    event: string | Symbol,
    fn?: Function,
    context?: any,
    once?: boolean
  ): this;

  /**
   * Alias method for `on`
   */
  addListener(event: string | Symbol, fn: Function, context?: any): this;

  /**
   * This function doesn"t apply anymore.
   * @deprecated
   */
  setMaxListeners(): this;
}

/**
 * @class
 * @private
 * @name SpriteBatch
 * @memberof PIXI
 * @see PIXI.ParticleContainer
 * @throws {ReferenceError} SpriteBatch does not exist any more, please use the new ParticleContainer instead.
 * @deprecated since version 3.0.0
 */
declare type PIXI$core$SpriteBatch = PIXI$particles$ParticleContainer;

/**
 * @class
 * @private
 * @name AssetLoader
 * @memberof PIXI
 * @see PIXI.loaders.Loader
 * @throws {ReferenceError} The loader system was overhauled in pixi v3, please see the new PIXI.loaders.Loader class.
 * @deprecated since version 3.0.0
 */
declare type PIXI$core$AssetLoader = PIXI$loaders$Loader;

/**
 * @class
 * @private
 * @name Stage
 * @memberof PIXI
 * @see PIXI.Container
 * @deprecated since version 3.0.0
 */
declare type PIXI$core$Stage = PIXI$Container;

/**
 * @class
 * @private
 * @name DisplayObjectContainer
 * @memberof PIXI
 * @see PIXI.Container
 * @deprecated since version 3.0.0
 */
declare type PIXI$core$DisplayObjectContainer = PIXI$Container;

/**
 * @class
 * @private
 * @name Strip
 * @memberof PIXI
 * @see PIXI.mesh.Mesh
 * @deprecated since version 3.0.0
 */
declare type PIXI$core$Strip = PIXI$mesh$Mesh;

/**
 * @class
 * @private
 * @name Rope
 * @memberof PIXI
 * @see PIXI.mesh.Rope
 * @deprecated since version 3.0.0
 */
declare type PIXI$core$Rope = PIXI$mesh$Rope;

/**
 * @class
 * @private
 * @name ParticleContainer
 * @memberof PIXI
 * @see PIXI.particles.ParticleContainer
 * @deprecated since version 4.0.0
 */
declare type PIXI$core$ParticleContainer = PIXI$particles$ParticleContainer;

/**
 * @class
 * @private
 * @name MovieClip
 * @memberof PIXI
 * @see PIXI.extras.MovieClip
 * @deprecated since version 3.0.0
 */
declare type PIXI$core$MovieClip = PIXI$extras$AnimatedSprite;

/**
 * @class
 * @private
 * @name TilingSprite
 * @memberof PIXI
 * @see PIXI.extras.TilingSprite
 * @deprecated since version 3.0.0
 */
declare type PIXI$core$TilingSprite = PIXI$extras$TilingSprite;

/**
 * @class
 * @private
 * @name BaseTextureCache
 * @memberof PIXI
 * @see PIXI.utils.BaseTextureCache
 * @deprecated since version 3.0.0
 */
declare type PIXI$core$BaseTextureCache = any;

/**
 * @class
 * @private
 * @name BitmapText
 * @memberof PIXI
 * @see PIXI.extras.BitmapText
 * @deprecated since version 3.0.0
 */
declare type PIXI$core$BitmapText = PIXI$extras$BitmapText;

/**
 * @namespace
 * @private
 * @name math
 * @memberof PIXI
 * @see PIXI
 * @deprecated since version 3.0.6
 */
declare type PIXI$core$math = any;

/**
 * @class
 * @private
 * @name PIXI.AbstractFilter
 * @see PIXI.Filter
 * @deprecated since version 3.0.6
 */
declare type PIXI$core$AbstractFilter<U: Object> = PIXI$Filter<U>;

/**
 * @class
 * @private
 * @name PIXI.TransformManual
 * @see PIXI.TransformBase
 * @deprecated since version 4.0.0
 */
declare type PIXI$core$TransformManual = PIXI$TransformBase;

/**
 * @static
 * @constant
 * @name PIXI.TARGET_FPMS
 * @see PIXI.settings.TARGET_FPMS
 * @deprecated since version 4.2.0
 */
declare type PIXI$core$TARGET_FPMS = number;

/**
 * @static
 * @constant
 * @name PIXI.FILTER_RESOLUTION
 * @see PIXI.settings.FILTER_RESOLUTION
 * @deprecated since version 4.2.0
 */
declare type PIXI$core$FILTER_RESOLUTION = number;

/**
 * @static
 * @constant
 * @name PIXI.RESOLUTION
 * @see PIXI.settings.RESOLUTION
 * @deprecated since version 4.2.0
 */
declare type PIXI$core$RESOLUTION = number;

/**
 * @static
 * @constant
 * @name PIXI.MIPMAP_TEXTURES
 * @see PIXI.settings.MIPMAP_TEXTURES
 * @deprecated since version 4.2.0
 */
declare type PIXI$core$MIPMAP_TEXTURES = any;

/**
 * @static
 * @constant
 * @name PIXI.SPRITE_BATCH_SIZE
 * @see PIXI.settings.SPRITE_BATCH_SIZE
 * @deprecated since version 4.2.0
 */
declare type PIXI$core$SPRITE_BATCH_SIZE = number;

/**
 * @static
 * @constant
 * @name PIXI.SPRITE_MAX_TEXTURES
 * @see PIXI.settings.SPRITE_MAX_TEXTURES
 * @deprecated since version 4.2.0
 */
declare type PIXI$core$SPRITE_MAX_TEXTURES = number;

/**
 * @static
 * @constant
 * @name PIXI.RETINA_PREFIX
 * @see PIXI.settings.RETINA_PREFIX
 * @deprecated since version 4.2.0
 */
declare type PIXI$core$RETINA_PREFIX = RegExp | string;

/**
 * @static
 * @constant
 * @name PIXI.DEFAULT_RENDER_OPTIONS
 * @see PIXI.settings.RENDER_OPTIONS
 * @deprecated since version 4.2.0
 */
declare type PIXI$core$DEFAULT_RENDER_OPTIONS = number;

/**
 * @static
 * @name PRECISION
 * @memberof PIXI.settings
 * @see PIXI.PRECISION
 * @deprecated since version 4.4.0
 */
declare type PIXI$core$PRECISION = string;
declare var npm$namespace$pixi: {
  gl: typeof pixi$gl
};
declare var pixi$gl: typeof PIXI$glCore;
declare module "pixi.js" {
  declare export default typeof PIXI;
}
