declare module "cesium" {
  declare export default typeof Cesium;

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
    defined: typeof Cesium$defined,

    ClockRange: typeof Cesium$ClockRange,
    ClockStep: typeof Cesium$ClockStep,
    ComponentDatatype: typeof Cesium$ComponentDatatype,
    CornerType: typeof Cesium$CornerType,
    ExtrapolationType: typeof Cesium$ExtrapolationType,
    Fullscreen: typeof Cesium$Fullscreen,
    HeightmapTessellator: typeof Cesium$HeightmapTessellator,
    HeightReference: typeof Cesium$HeightReference,
    IndexDatatype: typeof Cesium$IndexDatatype,
    Intersect: typeof Cesium$Intersect,
    Iso8601: typeof Cesium$Iso8601,
    KeyboardEventModifier: typeof Cesium$KeyboardEventModifier,
    MapMode2D: typeof Cesium$MapMode2D,
    Math: typeof Cesium$Math,
    PackableForInterpolation: typeof Cesium$PackableForInterpolation,
    PixelFormat: typeof Cesium$PixelFormat,
    PrimitiveType: typeof Cesium$PrimitiveType,
    ReferenceFrame: typeof Cesium$ReferenceFrame,
    ScreenSpaceEventType: typeof Cesium$ScreenSpaceEventType,
    ShadowMode: typeof Cesium$ShadowMode,
    TimeStandard: typeof Cesium$TimeStandard,
    Visibility: typeof Cesium$Visibility,
    WindingOrder: typeof Cesium$WindingOrder,
    StripeOrientation: typeof Cesium$StripeOrientation,
    BingMapsStyle: typeof Cesium$BingMapsStyle,
    BlendEquation: typeof Cesium$BlendEquation,
    BlendFunction: typeof Cesium$BlendFunction,
    BlendingState: typeof Cesium$BlendingState,
    BlendOption: typeof Cesium$BlendOption,
    CameraEventType: typeof Cesium$CameraEventType,
    CullFace: typeof Cesium$CullFace,
    DepthFunction: typeof Cesium$DepthFunction,
    HorizontalOrigin: typeof Cesium$HorizontalOrigin,
    LabelStyle: typeof Cesium$LabelStyle,
    ModelAnimationLoop: typeof Cesium$ModelAnimationLoop,
    SceneMode: typeof Cesium$SceneMode,
    StencilFunction: typeof Cesium$StencilFunction,
    StencilOperation: typeof Cesium$StencilOperation,
    VerticalOrigin: typeof Cesium$VerticalOrigin,
    ArcGisImageServerTerrainProvider: typeof Cesium$ArcGisImageServerTerrainProvider,
    AssociativeArray: typeof Cesium$AssociativeArray,
    AxisAlignedBoundingBox: typeof Cesium$AxisAlignedBoundingBox,
    BoundingRectangle: typeof Cesium$BoundingRectangle,
    BoundingSphere: typeof Cesium$BoundingSphere,
    BoxGeometry: typeof Cesium$BoxGeometry,
    BoxOutlineGeometry: typeof Cesium$BoxOutlineGeometry,
    Cartesian2: typeof Cesium$Cartesian2,
    Cartesian3: typeof Cesium$Cartesian3,
    Cartesian4: typeof Cesium$Cartesian4,
    Cartographic: typeof Cesium$Cartographic,
    CatmullRomSpline: typeof Cesium$CatmullRomSpline,
    CesiumTerrainProvider: typeof Cesium$CesiumTerrainProvider,
    CircleGeometry: typeof Cesium$CircleGeometry,
    CircleOutlineGeometry: typeof Cesium$CircleOutlineGeometry,
    Clock: typeof Cesium$Clock,
    Color: typeof Cesium$Color,
    ColorGeometryInstanceAttribute: typeof Cesium$ColorGeometryInstanceAttribute,
    CorridorGeometry: typeof Cesium$CorridorGeometry,
    CorridorOutlineGeometry: typeof Cesium$CorridorOutlineGeometry,
    Credit: typeof Cesium$Credit,
    CylinderGeometry: typeof Cesium$CylinderGeometry,
    CylinderOutlineGeometry: typeof Cesium$CylinderOutlineGeometry,
    DefaultProxy: typeof Cesium$DefaultProxy,
    DeveloperError: typeof Cesium$DeveloperError,
    EllipseGeometry: typeof Cesium$EllipseGeometry,
    EllipseOutlineGeometry: typeof Cesium$EllipseOutlineGeometry,
    Ellipsoid: typeof Cesium$Ellipsoid,
    EllipsoidGeodesic: typeof Cesium$EllipsoidGeodesic,
    EllipsoidGeometry: typeof Cesium$EllipsoidGeometry,
    EllipsoidOutlineGeometry: typeof Cesium$EllipsoidOutlineGeometry,
    EllipsoidTangentPlane: typeof Cesium$EllipsoidTangentPlane,
    EllipsoidTerrainProvider: typeof Cesium$EllipsoidTerrainProvider,
    Event: typeof Cesium$Event,
    EventHelper: typeof Cesium$EventHelper,
    GeographicProjection: typeof Cesium$GeographicProjection,
    GeographicTilingScheme: typeof Cesium$GeographicTilingScheme,
    Geometry: typeof Cesium$Geometry,
    GeometryAttribute: typeof Cesium$GeometryAttribute,
    GeometryAttributes: typeof Cesium$GeometryAttributes,
    GeometryInstance: typeof Cesium$GeometryInstance,
    GeometryInstanceAttribute: typeof Cesium$GeometryInstanceAttribute,
    GregorianDate: typeof Cesium$GregorianDate,
    HeadingPitchRoll: typeof Cesium$HeadingPitchRoll,
    HeightmapTerrainData: typeof Cesium$HeightmapTerrainData,
    HermiteSpline: typeof Cesium$HermiteSpline,
    IonImageryProvider: typeof Cesium$IonImageryProvider,
    Interval: typeof Cesium$Interval,
    JulianDate: typeof Cesium$JulianDate,
    LeapSecond: typeof Cesium$LeapSecond,
    LinearSpline: typeof Cesium$LinearSpline,
    MapProjection: typeof Cesium$MapProjection,
    Matrix2: typeof Cesium$Matrix2,
    Matrix3: typeof Cesium$Matrix3,
    Matrix4: typeof Cesium$Matrix4,
    NearFarScalar: typeof Cesium$NearFarScalar,
    ObjectOrientedBoundingBox: typeof Cesium$ObjectOrientedBoundingBox,
    Occluder: typeof Cesium$Occluder,
    PinBuilder: typeof Cesium$PinBuilder,
    Plane: typeof Cesium$Plane,
    PolygonGeometry: typeof Cesium$PolygonGeometry,
    PolygonHierarchy: typeof Cesium$PolygonHierarchy,
    PolygonOutlineGeometry: typeof Cesium$PolygonOutlineGeometry,
    PolylineGeometry: typeof Cesium$PolylineGeometry,
    PolylineVolumeGeometry: typeof Cesium$PolylineVolumeGeometry,
    PolylineVolumeOutlineGeometry: typeof Cesium$PolylineVolumeOutlineGeometry,
    QuantizedMeshTerrainData: typeof Cesium$QuantizedMeshTerrainData,
    Quaternion: typeof Cesium$Quaternion,
    QuaternionSpline: typeof Cesium$QuaternionSpline,
    Queue: typeof Cesium$Queue,
    Ray: typeof Cesium$Ray,
    Rectangle: typeof Cesium$Rectangle,
    RectangleGeometry: typeof Cesium$RectangleGeometry,
    RectangleOutlineGeometry: typeof Cesium$RectangleOutlineGeometry,
    RequestErrorEvent: typeof Cesium$RequestErrorEvent,
    RuntimeError: typeof Cesium$RuntimeError,
    ScreenSpaceEventHandler: typeof Cesium$ScreenSpaceEventHandler,
    ShowGeometryInstanceAttribute: typeof Cesium$ShowGeometryInstanceAttribute,
    SimplePolylineGeometry: typeof Cesium$SimplePolylineGeometry,
    SphereGeometry: typeof Cesium$SphereGeometry,
    SphereOutlineGeometry: typeof Cesium$SphereOutlineGeometry,
    Spherical: typeof Cesium$Spherical,
    Spline: typeof Cesium$Spline,
    TaskProcessor: typeof Cesium$TaskProcessor,
    TerrainData: typeof Cesium$TerrainData,
    TerrainMesh: typeof Cesium$TerrainMesh,
    TerrainProvider: typeof Cesium$TerrainProvider,
    TileAvailability: typeof Cesium$TileAvailability,
    TileProviderError: typeof Cesium$TileProviderError,
    TilingScheme: typeof Cesium$TilingScheme,
    TimeInterval: typeof Cesium$TimeInterval,
    TimeIntervalCollection: typeof Cesium$TimeIntervalCollection,
    VRTheWorldTerrainProvider: typeof Cesium$VRTheWorldTerrainProvider,
    VertexFormat: typeof Cesium$VertexFormat,
    WallGeometry: typeof Cesium$WallGeometry,
    WallOutlineGeometry: typeof Cesium$WallOutlineGeometry,
    WebMercatorProjection: typeof Cesium$WebMercatorProjection,
    WebMercatorTilingScheme: typeof Cesium$WebMercatorTilingScheme,
    BillboardGraphics: typeof Cesium$BillboardGraphics,
    BillboardVisualizer: typeof Cesium$BillboardVisualizer,
    BoxGeometryUpdater: typeof Cesium$BoxGeometryUpdater,
    BoxGraphics: typeof Cesium$BoxGraphics,
    CallbackProperty: typeof Cesium$CallbackProperty,
    CheckerboardMaterialProperty: typeof Cesium$CheckerboardMaterialProperty,
    ColorMaterialProperty: typeof Cesium$ColorMaterialProperty,
    CompositeEntityCollection: typeof Cesium$CompositeEntityCollection,
    CompositeMaterialProperty: typeof Cesium$CompositeMaterialProperty,
    CompositePositionProperty: typeof Cesium$CompositePositionProperty,
    CompositeProperty: typeof Cesium$CompositeProperty,
    ConstantPositionProperty: typeof Cesium$ConstantPositionProperty,
    ConstantProperty: typeof Cesium$ConstantProperty,
    CorridorGeometryUpdater: typeof Cesium$CorridorGeometryUpdater,
    CorridorGraphics: typeof Cesium$CorridorGraphics,
    CustomDataSource: typeof Cesium$CustomDataSource,
    CylinderGeometryUpdater: typeof Cesium$CylinderGeometryUpdater,
    CylinderGraphics: typeof Cesium$CylinderGraphics,
    CzmlDataSource: typeof Cesium$CzmlDataSource,
    DataSource: typeof Cesium$DataSource,
    DataSourceClock: typeof Cesium$DataSourceClock,
    DataSourceCollection: typeof Cesium$DataSourceCollection,
    DataSourceDisplay: typeof Cesium$DataSourceDisplay,
    DynamicGeometryUpdater: typeof Cesium$DynamicGeometryUpdater,
    EllipseGeometryUpdater: typeof Cesium$EllipseGeometryUpdater,
    EllipseGraphics: typeof Cesium$EllipseGraphics,
    EllipsoidGeometryUpdater: typeof Cesium$EllipsoidGeometryUpdater,
    EllipsoidGraphics: typeof Cesium$EllipsoidGraphics,
    Entity: typeof Cesium$Entity,
    EntityCluster: typeof Cesium$EntityCluster,
    EntityCollection: typeof Cesium$EntityCollection,
    EntityView: typeof Cesium$EntityView,
    GeoJsonDataSource: typeof Cesium$GeoJsonDataSource,
    GeometryUpdater: typeof Cesium$GeometryUpdater,
    GeometryVisualizer: typeof Cesium$GeometryVisualizer,
    GridMaterialProperty: typeof Cesium$GridMaterialProperty,
    ImageMaterialProperty: typeof Cesium$ImageMaterialProperty,
    KmlDataSource: typeof Cesium$KmlDataSource,
    KmlFeatureData: typeof Cesium$KmlFeatureData,
    LabelGraphics: typeof Cesium$LabelGraphics,
    LabelVisualizer: typeof Cesium$LabelVisualizer,
    MaterialProperty: typeof Cesium$MaterialProperty,
    ModelGraphics: typeof Cesium$ModelGraphics,
    ModelVisualizer: typeof Cesium$ModelVisualizer,
    PathGraphics: typeof Cesium$PathGraphics,
    PathVisualizer: typeof Cesium$PathVisualizer,
    PointGraphics: typeof Cesium$PointGraphics,
    PointVisualizer: typeof Cesium$PointVisualizer,
    PolygonGeometryUpdater: typeof Cesium$PolygonGeometryUpdater,
    PolygonGraphics: typeof Cesium$PolygonGraphics,
    PolylineArrowMaterialProperty: typeof Cesium$PolylineArrowMaterialProperty,
    PolylineGeometryUpdater: typeof Cesium$PolylineGeometryUpdater,
    PolylineGlowMaterialProperty: typeof Cesium$PolylineGlowMaterialProperty,
    PolylineGraphics: typeof Cesium$PolylineGraphics,
    PolylineOutlineMaterialProperty: typeof Cesium$PolylineOutlineMaterialProperty,
    PolylineVolumeGeometryUpdater: typeof Cesium$PolylineVolumeGeometryUpdater,
    PolylineVolumeGraphics: typeof Cesium$PolylineVolumeGraphics,
    PositionProperty: typeof Cesium$PositionProperty,
    PositionPropertyArray: typeof Cesium$PositionPropertyArray,
    Property: typeof Cesium$Property,
    PropertyArray: typeof Cesium$PropertyArray,
    RectangleGeometryUpdater: typeof Cesium$RectangleGeometryUpdater,
    RectangleGraphics: typeof Cesium$RectangleGraphics,
    ReferenceProperty: typeof Cesium$ReferenceProperty,
    SampledPositionProperty: typeof Cesium$SampledPositionProperty,
    SampledProperty: typeof Cesium$SampledProperty,
    StripeMaterialProperty: typeof Cesium$StripeMaterialProperty,
    TimeIntervalCollectionPositionProperty: typeof Cesium$TimeIntervalCollectionPositionProperty,
    TimeIntervalCollectionProperty: typeof Cesium$TimeIntervalCollectionProperty,
    VelocityOrientationProperty: typeof Cesium$VelocityOrientationProperty,
    Visualizer: typeof Cesium$Visualizer,
    WallGeometryUpdater: typeof Cesium$WallGeometryUpdater,
    WallGraphics: typeof Cesium$WallGraphics,
    Appearance: typeof Cesium$Appearance,
    ArcGisMapServerImageryProvider: typeof Cesium$ArcGisMapServerImageryProvider,
    DistanceDisplayCondition: typeof Cesium$DistanceDisplayCondition,
    Billboard: typeof Cesium$Billboard,
    BillboardCollection: typeof Cesium$BillboardCollection,
    BingMapsImageryProvider: typeof Cesium$BingMapsImageryProvider,
    EasingFunction: typeof Cesium$EasingFunction,
    Camera: typeof Cesium$Camera,
    CameraEventAggregator: typeof Cesium$CameraEventAggregator,
    CreditDisplay: typeof Cesium$CreditDisplay,
    CullingVolume: typeof Cesium$CullingVolume,
    DebugAppearance: typeof Cesium$DebugAppearance,
    DebugModelMatrixPrimitive: typeof Cesium$DebugModelMatrixPrimitive,
    DiscardMissingTileImagePolicy: typeof Cesium$DiscardMissingTileImagePolicy,
    EllipsoidPrimitive: typeof Cesium$EllipsoidPrimitive,
    EllipsoidSurfaceAppearance: typeof Cesium$EllipsoidSurfaceAppearance,
    FrameRateMonitor: typeof Cesium$FrameRateMonitor,
    GetFeatureInfoFormat: typeof Cesium$GetFeatureInfoFormat,
    Globe: typeof Cesium$Globe,
    GoogleEarthEnterpriseMetadata: typeof Cesium$GoogleEarthEnterpriseMetadata,
    GoogleEarthEnterpriseImageryProvider: typeof Cesium$GoogleEarthEnterpriseImageryProvider,
    GoogleEarthEnterpriseMapsProvider: typeof Cesium$GoogleEarthEnterpriseMapsProvider,
    GoogleEarthEnterpriseTerrainData: typeof Cesium$GoogleEarthEnterpriseTerrainData,
    GoogleEarthEnterpriseTerrainProvider: typeof Cesium$GoogleEarthEnterpriseTerrainProvider,
    GridImageryProvider: typeof Cesium$GridImageryProvider,
    HeadingPitchRange: typeof Cesium$HeadingPitchRange,
    ImageryLayer: typeof Cesium$ImageryLayer,
    ImageryLayerCollection: typeof Cesium$ImageryLayerCollection,
    ImageryLayerFeatureInfo: typeof Cesium$ImageryLayerFeatureInfo,
    ImageryProvider: typeof Cesium$ImageryProvider,
    Label: typeof Cesium$Label,
    LabelCollection: typeof Cesium$LabelCollection,
    Material: typeof Cesium$Material,
    MaterialAppearance: typeof Cesium$MaterialAppearance,
    Model: typeof Cesium$Model,
    ModelAnimation: typeof Cesium$ModelAnimation,
    ModelAnimationCollection: typeof Cesium$ModelAnimationCollection,
    ModelMaterial: typeof Cesium$ModelMaterial,
    ModelMesh: typeof Cesium$ModelMesh,
    ModelNode: typeof Cesium$ModelNode,
    Moon: typeof Cesium$Moon,
    NeverTileDiscardPolicy: typeof Cesium$NeverTileDiscardPolicy,
    PerInstanceColorAppearance: typeof Cesium$PerInstanceColorAppearance,
    Frustum: typeof Cesium$Frustum,
    OrthographicFrustum: typeof Cesium$OrthographicFrustum,
    PerspectiveFrustum: typeof Cesium$PerspectiveFrustum,
    PerspectiveOffCenterFrustum: typeof Cesium$PerspectiveOffCenterFrustum,
    PointPrimitive: typeof Cesium$PointPrimitive,
    PointPrimitiveCollection: typeof Cesium$PointPrimitiveCollection,
    Polyline: typeof Cesium$Polyline,
    PolylineCollection: typeof Cesium$PolylineCollection,
    PolylineColorAppearance: typeof Cesium$PolylineColorAppearance,
    PolylineMaterialAppearance: typeof Cesium$PolylineMaterialAppearance,
    Primitive: typeof Cesium$Primitive,
    PrimitiveCollection: typeof Cesium$PrimitiveCollection,
    RectanglePrimitive: typeof Cesium$RectanglePrimitive,
    Scene: typeof Cesium$Scene,
    ScreenSpaceCameraController: typeof Cesium$ScreenSpaceCameraController,
    SingleTileImageryProvider: typeof Cesium$SingleTileImageryProvider,
    SkyAtmosphere: typeof Cesium$SkyAtmosphere,
    SkyBox: typeof Cesium$SkyBox,
    Sun: typeof Cesium$Sun,
    Fog: typeof Cesium$Fog,
    TileCoordinatesImageryProvider: typeof Cesium$TileCoordinatesImageryProvider,
    TileDiscardPolicy: typeof Cesium$TileDiscardPolicy,
    TileMapServiceImageryProvider: typeof Cesium$TileMapServiceImageryProvider,
    ViewportQuad: typeof Cesium$ViewportQuad,
    WebMapServiceImageryProvider: typeof Cesium$WebMapServiceImageryProvider,
    WebMapTileServiceImageryProvider: typeof Cesium$WebMapTileServiceImageryProvider,
    Animation: typeof Cesium$Animation,
    AnimationViewModel: typeof Cesium$AnimationViewModel,
    BaseLayerPicker: typeof Cesium$BaseLayerPicker,
    BaseLayerPickerViewModel: typeof Cesium$BaseLayerPickerViewModel,
    ProviderViewModel: typeof Cesium$ProviderViewModel,
    CesiumInspector: typeof Cesium$CesiumInspector,
    CesiumInspectorViewModel: typeof Cesium$CesiumInspectorViewModel,
    CesiumWidget: typeof Cesium$CesiumWidget,
    ClockViewModel: typeof Cesium$ClockViewModel,
    Command: typeof Cesium$Command,
    FullscreenButton: typeof Cesium$FullscreenButton,
    FullscreenButtonViewModel: typeof Cesium$FullscreenButtonViewModel,
    Geocoder: typeof Cesium$Geocoder,
    GeocoderViewModel: typeof Cesium$GeocoderViewModel,
    HomeButton: typeof Cesium$HomeButton,
    HomeButtonViewModel: typeof Cesium$HomeButtonViewModel,
    VRButton: typeof Cesium$VRButton,
    VRButtonViewModel: typeof Cesium$VRButtonViewModel,
    InfoBox: typeof Cesium$InfoBox,
    InfoBoxViewModel: typeof Cesium$InfoBoxViewModel,
    NavigationHelpButton: typeof Cesium$NavigationHelpButton,
    NavigationHelpButtonViewModel: typeof Cesium$NavigationHelpButtonViewModel,
    PerformanceWatchdog: typeof Cesium$PerformanceWatchdog,
    PerformanceWatchdogViewModel: typeof Cesium$PerformanceWatchdogViewModel,
    ProjectionPicker: typeof Cesium$ProjectionPicker,
    ProjectionPickerViewModel: typeof Cesium$ProjectionPickerViewModel,
    SceneModePicker: typeof Cesium$SceneModePicker,
    SceneModePickerViewModel: typeof Cesium$SceneModePickerViewModel,
    SelectionIndicator: typeof Cesium$SelectionIndicator,
    SelectionIndicatorViewModel: typeof Cesium$SelectionIndicatorViewModel,
    Timeline: typeof Cesium$Timeline,
    ToggleButtonViewModel: typeof Cesium$ToggleButtonViewModel,
    Viewer: typeof Cesium$Viewer,
    HermitePolynomialApproximation: typeof Cesium$HermitePolynomialApproximation,
    InterpolationAlgorithm: typeof Cesium$InterpolationAlgorithm,
    LagrangePolynomialApproximation: typeof Cesium$LagrangePolynomialApproximation,
    LinearApproximation: typeof Cesium$LinearApproximation,
    Packable: typeof Cesium$Packable,
    ShadowMap: typeof Cesium$ShadowMap,
    UrlTemplateImageryProvider: typeof Cesium$UrlTemplateImageryProvider,
    Resource: typeof Cesium$Resource,
    MaterialAppearance: typeof npm$namespace$Cesium$MaterialAppearance,
    ComponentDatatype: typeof npm$namespace$Cesium$ComponentDatatype,
    CubicRealPolynomial: typeof npm$namespace$Cesium$CubicRealPolynomial,
    FeatureDetection: typeof npm$namespace$Cesium$FeatureDetection,
    Fullscreen: typeof npm$namespace$Cesium$Fullscreen,
    GeometryPipeline: typeof npm$namespace$Cesium$GeometryPipeline,
    HeightmapTessellator: typeof npm$namespace$Cesium$HeightmapTessellator,
    IndexDatatype: typeof npm$namespace$Cesium$IndexDatatype,
    IntersectionTests: typeof npm$namespace$Cesium$IntersectionTests,
    Intersections2D: typeof npm$namespace$Cesium$Intersections2D,
    Math: typeof npm$namespace$Cesium$Math,
    PackableForInterpolation: typeof npm$namespace$Cesium$PackableForInterpolation,
    QuadraticRealPolynomial: typeof npm$namespace$Cesium$QuadraticRealPolynomial,
    QuarticRealPolynomial: typeof npm$namespace$Cesium$QuarticRealPolynomial,
    Simon1994PlanetaryPositions: typeof npm$namespace$Cesium$Simon1994PlanetaryPositions,
    Transforms: typeof npm$namespace$Cesium$Transforms,
    TridiagonalSystemSolver: typeof npm$namespace$Cesium$TridiagonalSystemSolver,
    SceneMode: typeof npm$namespace$Cesium$SceneMode,
    SceneTransforms: typeof npm$namespace$Cesium$SceneTransforms,
    buildModuleUrl: typeof npm$namespace$Cesium$buildModuleUrl
  };
  declare type Cesium$RenderState = any;

  declare interface Cesium$Proxy {
    getURL(resource: string): string;
  }

  declare class Cesium$ArcGisImageServerTerrainProvider mixins TerrainProvider {
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

  declare class Cesium$BoundingSphere mixins Packable {
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

  declare class Cesium$BoxGeometry mixins Packable {
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

  declare class Cesium$BoxOutlineGeometry mixins Packable {
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

  declare class Cesium$Cartesian2 mixins Packable {
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

  declare class Cesium$Cartesian3 mixins Packable, PositionProperty {
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

  declare class Cesium$Cartesian4 mixins Packable {
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

  declare class Cesium$CesiumTerrainProvider mixins TerrainProvider {
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

  declare class Cesium$CircleGeometry mixins Packable {
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

  declare class Cesium$CircleOutlineGeometry mixins Packable {
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

  declare class Cesium$Color mixins Packable {
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

  declare class Cesium$CorridorGeometry mixins Packable {
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

  declare class Cesium$CorridorOutlineGeometry mixins Packable {
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

  declare class Cesium$CylinderGeometry mixins Packable {
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

  declare class Cesium$CylinderOutlineGeometry mixins Packable {
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

  declare class Cesium$EllipseGeometry mixins Packable {
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

  declare class Cesium$EllipseOutlineGeometry mixins Packable {
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

  declare class Cesium$Ellipsoid mixins Packable {
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

  declare class Cesium$EllipsoidGeometry mixins Packable {
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

  declare class Cesium$EllipsoidOutlineGeometry mixins Packable {
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

  declare class Cesium$EllipsoidTerrainProvider mixins TerrainProvider {
    constructor(options?: {
      tilingScheme?: Cesium$TilingScheme,
      ellipsoid?: Cesium$Ellipsoid
    }): this;
  }

  declare class Cesium$Event {
    numberOfListeners: number;
    addEventListener(listener: () => void, scope?: any): Event$RemoveCallback;
    removeEventListener(listener: () => void, scope?: any): boolean;
    raiseEvent(...args: any[]): void;
  }

  declare type Cesium$Event$RemoveCallback = () => void;

  declare class Cesium$EventHelper {
    add(
      event: Cesium$Event,
      listener: () => void,
      scope?: any
    ): EventHelper$RemoveCallback;
    removeAll(): void;
  }

  declare type Cesium$EventHelper$RemoveCallback = () => void;

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

  declare class Cesium$IonImageryProvider mixins ImageryProvider {
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

  declare class Cesium$Matrix2 mixins Packable {
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

  declare class Cesium$Matrix3 mixins Packable {
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

  declare class Cesium$Matrix4 mixins Packable {
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

  declare class Cesium$NearFarScalar mixins Packable {
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

  declare class Cesium$PolygonGeometry mixins Packable {
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

  declare class Cesium$PolygonHierarchy mixins Property {
    positions: Cesium$Cartesian3[];
    holes: Cesium$PolygonHierarchy[];
    constructor(
      positions?: Cesium$Cartesian3[],
      holes?: Cesium$PolygonHierarchy[]
    ): this;
  }

  declare class Cesium$PolygonOutlineGeometry mixins Packable {
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

  declare class Cesium$PolylineGeometry mixins Packable {
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

  declare class Cesium$PolylineVolumeGeometry mixins Packable {
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

  declare class Cesium$PolylineVolumeOutlineGeometry mixins Packable {
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

  declare class Cesium$Quaternion mixins Packable {
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
    sort(compareFunction: Queue$Comparator): void;
  }

  declare type Cesium$Queue$Comparator = (a: any, b: any) => number;

  declare class Cesium$Ray {
    origin: Cesium$Cartesian3;
    direction: Cesium$Cartesian3;
    constructor(
      origin?: Cesium$Cartesian3,
      direction?: Cesium$Cartesian3
    ): this;
    static getPoint(t: number, result?: Cesium$Cartesian3): Cesium$Cartesian3;
  }

  declare class Cesium$Rectangle mixins Packable {
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

  declare class Cesium$RectangleGeometry mixins Packable {
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

  declare class Cesium$RectangleOutlineGeometry mixins Packable {
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

  declare class Cesium$SimplePolylineGeometry mixins Packable {
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

  declare class Cesium$SphereGeometry mixins Packable {
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

  declare class Cesium$SphereOutlineGeometry mixins Packable {
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
      retryFunction: TileProviderError$RetryFunction,
      errorDetails?: Error
    ): Cesium$TileProviderError;
    static handleSuccess(previousError: Cesium$TileProviderError): void;
  }

  declare type Cesium$TileProviderError$RetryFunction = () => void;

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
      dataComparer?: TimeInterval$DataComparer
    ): boolean;
    equalsEpsilon(
      right: Cesium$TimeInterval,
      epsilon: number,
      dataComparer?: TimeInterval$DataComparer
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
      dataComparer?: TimeInterval$DataComparer
    ): boolean;
    static equalsEpsilon(
      left: Cesium$TimeInterval,
      right: Cesium$TimeInterval,
      epsilon: number,
      dataComparer?: TimeInterval$DataComparer
    ): boolean;
    static intersect(
      left: Cesium$TimeInterval,
      right: Cesium$TimeInterval,
      result: Cesium$TimeInterval,
      mergeCallback?: TimeInterval$MergeCallback
    ): Cesium$TimeInterval;
    static contains(
      timeInterval: Cesium$TimeInterval,
      julianDate: Cesium$JulianDate
    ): boolean;
  }

  declare type Cesium$TimeInterval$MergeCallback = (
    leftData: any,
    rightData: any
  ) => any;

  declare type Cesium$TimeInterval$DataComparer = (
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
      dataComparer?: TimeInterval$DataComparer
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
      dataComparer?: TimeInterval$DataComparer
    ): void;
    removeInterval(interval: Cesium$TimeInterval): void;
    intersect(
      other: Cesium$TimeIntervalCollection,
      dataComparer?: TimeInterval$DataComparer,
      mergeCallback?: TimeInterval$MergeCallback
    ): Cesium$TimeIntervalCollection;
  }

  declare class Cesium$VRTheWorldTerrainProvider mixins TerrainProvider {
    constructor(options: {
      url: string,
      proxy?: any,
      ellipsoid?: Cesium$Ellipsoid,
      credit?: Cesium$Credit | string
    }): this;
  }

  declare class Cesium$VertexFormat mixins Packable {
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

  declare class Cesium$WallGeometry mixins Packable {
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

  declare class Cesium$WallOutlineGeometry mixins Packable {
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

  declare class Cesium$BillboardVisualizer mixins Visualizer {
    constructor(
      entityCluster: Cesium$EntityCluster,
      entityCollection: Cesium$EntityCollection
    ): this;
  }

  declare class Cesium$BoxGeometryUpdater mixins GeometryUpdater {
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

  declare class Cesium$CallbackProperty mixins Property {
    constructor(callback: CallbackProperty$Callback, isConstant: boolean): this;
    setCallback(callback: CallbackProperty$Callback, isConstant: boolean): void;
  }

  declare type Cesium$CallbackProperty$Callback = (
    time?: Cesium$JulianDate,
    result?: any
  ) => any;

  declare class Cesium$CheckerboardMaterialProperty mixins MaterialProperty {
    evenColor: Cesium$Color;
    oddColor: Cesium$Color;
    repeat: Cesium$Property;
    constructor(options?: {
      evenColor?: Cesium$Color,
      oddColor?: Cesium$Color,
      repeat?: Cesium$Property
    }): this;
  }

  declare class Cesium$ColorMaterialProperty mixins MaterialProperty {
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

  declare class Cesium$CompositeMaterialProperty mixins MaterialProperty {
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

  declare class Cesium$CompositeProperty mixins Property {
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

  declare class Cesium$ConstantProperty mixins Property {
    constructor(value?: any): this;
    setValue(value: any): void;
  }

  declare class Cesium$CorridorGeometryUpdater mixins GeometryUpdater {
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

  declare class Cesium$CustomDataSource mixins DataSource {
    constructor(name?: string): this;
  }

  declare class Cesium$CylinderGeometryUpdater mixins GeometryUpdater {
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

  declare class Cesium$CzmlDataSource mixins DataSource {
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
    static defaultVisualizersCallback: DataSourceDisplay$VisualizersCallback;
    constructor(options: {
      scene: Cesium$Scene,
      dataSourceCollection: Cesium$DataSourceCollection,
      visualizersCallback?: DataSourceDisplay$VisualizersCallback
    }): this;
    isDestroyed(): boolean;
    destroy(): void;
    update(time: Cesium$JulianDate): boolean;
  }

  declare type Cesium$DataSourceDisplay$VisualizersCallback = (
    scene: Cesium$Scene,
    dataSource: Cesium$DataSource
  ) => Cesium$Visualizer[];

  declare class Cesium$DynamicGeometryUpdater {
    update(time: Cesium$JulianDate): void;
    isDestroyed(): boolean;
    destroy(): void;
  }

  declare class Cesium$EllipseGeometryUpdater mixins GeometryUpdater {
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

  declare class Cesium$EllipsoidGeometryUpdater mixins GeometryUpdater {
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

  declare class Cesium$GeoJsonDataSource mixins DataSource {
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

  declare class Cesium$GeometryVisualizer mixins Visualizer {
    constructor(
      scene: Cesium$Scene,
      entityCollection: Cesium$EntityCollection,
      primitives?: Cesium$PrimitiveCollection,
      groundPrimitives?: Cesium$PrimitiveCollection
    ): this;
  }

  declare class Cesium$GridMaterialProperty mixins MaterialProperty {
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

  declare class Cesium$ImageMaterialProperty mixins MaterialProperty {
    image: Cesium$Property;
    repeat: Cesium$Property;
    constructor(options?: {
      image?: Cesium$Property,
      repeat?: Cesium$Property
    }): this;
  }

  declare class Cesium$KmlDataSource mixins DataSource {
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

  declare class Cesium$LabelVisualizer mixins Visualizer {
    constructor(
      entityCluster: Cesium$EntityCluster,
      entityCollection: Cesium$EntityCollection
    ): this;
  }

  declare class Cesium$MaterialProperty mixins Property {
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

  declare class Cesium$ModelVisualizer mixins Visualizer {
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

  declare class Cesium$PathVisualizer mixins Visualizer {
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

  declare class Cesium$PointVisualizer mixins Visualizer {
    constructor(
      entityCluster: Cesium$EntityCluster,
      entityCollection: Cesium$EntityCollection
    ): this;
  }

  declare class Cesium$PolygonGeometryUpdater mixins GeometryUpdater {
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

  declare class Cesium$PolylineArrowMaterialProperty mixins MaterialProperty {
    color: Cesium$Property;
    constructor(color?: Cesium$Property): this;
  }

  declare class Cesium$PolylineGeometryUpdater mixins GeometryUpdater {
    depthFailMaterialProperty: Cesium$MaterialProperty;
    distanceDisplayConditionProperty: Cesium$Property;
    constructor(entity: Cesium$Entity, scene: Cesium$Scene): this;
  }

  declare class Cesium$PolylineGlowMaterialProperty mixins MaterialProperty {
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

  declare class Cesium$PolylineOutlineMaterialProperty mixins MaterialProperty {
    color: Cesium$Color;
    outlineColor: Cesium$Color;
    outlineWidth: Cesium$Property;
    constructor(options?: {
      color?: Cesium$Property,
      outlineColor?: Cesium$Property,
      outlineWidth?: Cesium$Property
    }): this;
  }

  declare class Cesium$PolylineVolumeGeometryUpdater mixins GeometryUpdater {
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

  declare class Cesium$PositionProperty mixins Property {
    referenceFrame: Cesium$ReferenceFrame;
    getValueInReferenceFrame(
      time: Cesium$JulianDate,
      referenceFrame: Cesium$ReferenceFrame,
      result?: Cesium$Cartesian3
    ): Cesium$Cartesian3;
  }

  declare class Cesium$PositionPropertyArray mixins PositionProperty {
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

  declare class Cesium$PropertyArray mixins Property {
    constructor(value?: Cesium$Property[]): this;
    getValue(time?: Cesium$JulianDate, result?: any[]): any[];
    setValue(value: Cesium$Property[]): void;
  }

  declare class Cesium$RectangleGeometryUpdater mixins GeometryUpdater {
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

  declare class Cesium$ReferenceProperty mixins Property {
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

  declare class Cesium$SampledPositionProperty mixins SampledProperty {
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

  declare class Cesium$SampledProperty mixins PositionProperty {
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

  declare class Cesium$StripeMaterialProperty mixins MaterialProperty {
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
    mixins PositionProperty {
    intervals: Cesium$TimeIntervalCollection;
    constructor(referenceFrame?: Cesium$ReferenceFrame): this;
  }

  declare class Cesium$TimeIntervalCollectionProperty mixins Property {
    intervals: Cesium$TimeIntervalCollection;
  }

  declare class Cesium$VelocityOrientationProperty mixins Property {
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

  declare class Cesium$WallGeometryUpdater mixins GeometryUpdater {
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

  declare class Cesium$ArcGisMapServerImageryProvider mixins ImageryProvider {
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

  declare class Cesium$DistanceDisplayCondition mixins Packable {
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
        | Billboard$CreateImageCallback
    ): void;
    setImageSubRegion(id: string, subRegion: Cesium$BoundingRectangle): void;
  }

  declare type Cesium$Billboard$CreateImageCallback = (
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

  declare class Cesium$BingMapsImageryProvider mixins ImageryProvider {
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
    static BACK_IN: EasingFunction$Callback;
    static BACK_IN_OUT: EasingFunction$Callback;
    static BACK_OUT: EasingFunction$Callback;
    static BOUNCE_IN: EasingFunction$Callback;
    static BOUNCE_IN_OUT: EasingFunction$Callback;
    static BOUNCE_OUT: EasingFunction$Callback;
    static CIRCULAR_IN: EasingFunction$Callback;
    static CIRCULAR_IN_OUT: EasingFunction$Callback;
    static CIRCULAR_OUT: EasingFunction$Callback;
    static CUBIC_IN: EasingFunction$Callback;
    static CUBIC_IN_OUT: EasingFunction$Callback;
    static CUBIR_OUT: EasingFunction$Callback;
    static ELASTIC_IN: EasingFunction$Callback;
    static ELASTIC_IN_OUT: EasingFunction$Callback;
    static ELASTIC_OUT: EasingFunction$Callback;
    static EXPONENTIAL_IN: EasingFunction$Callback;
    static EXPONENTIAL_IN_OUT: EasingFunction$Callback;
    static EXPONENTIAL_OUT: EasingFunction$Callback;
    static LINEAR_NONE: EasingFunction$Callback;
    static QUADRATIC_IN: EasingFunction$Callback;
    static QUADRATIC_IN_OUT: EasingFunction$Callback;
    static QUADRATIC_OUT: EasingFunction$Callback;
    static QUARTIC_IN: EasingFunction$Callback;
    static QUARTIC_IN_OUT: EasingFunction$Callback;
    static QUARTIC_OUT: EasingFunction$Callback;
    static QUINTIC_IN: EasingFunction$Callback;
    static QUINTIC_IN_OUT: EasingFunction$Callback;
    static QUINTIC_OUT: EasingFunction$Callback;
    static SINUSOIDAL_IN: EasingFunction$Callback;
    static SINUSOIDAL_IN_OUT: EasingFunction$Callback;
    static SINUSOIDAL_OUT: EasingFunction$Callback;
  }

  declare type Cesium$EasingFunction$Callback = (
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
      complete?: Camera$FlightCompleteCallback,
      cancel?: Camera$FlightCancelledCallback,
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
        complete?: Camera$FlightCompleteCallback,
        cancel?: Camera$FlightCancelledCallback,
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

  declare type Cesium$Camera$FlightCancelledCallback = () => void;

  declare type Cesium$Camera$FlightCompleteCallback = () => void;

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

  declare class Cesium$DebugAppearance mixins Appearance {
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

  declare class Cesium$EllipsoidSurfaceAppearance mixins Appearance {
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
    mixins ImageryProvider {
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
    mixins ImageryProvider {
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

  declare class Cesium$GoogleEarthEnterpriseTerrainData mixins TerrainData {
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

  declare class Cesium$GridImageryProvider mixins ImageryProvider {
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
        alpha?: number | ImageryLayer$ValueFunc,
        brightness?: number | ImageryLayer$ValueFunc,
        contrast?: number | ImageryLayer$ValueFunc,
        hue?: number | ImageryLayer$ValueFunc,
        saturation?: number | ImageryLayer$ValueFunc,
        gamma?: number | ImageryLayer$ValueFunc,
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

  declare type Cesium$ImageryLayer$ValueFunc = (
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

  declare class Cesium$MaterialAppearance mixins Appearance {
    materialSupport: MaterialAppearance$MaterialSupport;
    vertexFormat: Cesium$VertexFormat;
    flat: boolean;
    faceForward: boolean;
    constructor(options?: {
      flat?: boolean,
      faceForward?: boolean,
      translucent?: boolean,
      closed?: boolean,
      materialSupport?: MaterialAppearance$MaterialSupport,
      material?: Cesium$Material,
      vertexShaderSource?: string,
      fragmentShaderSource?: string,
      renderState?: Cesium$RenderState
    }): this;
  }

  declare var npm$namespace$Cesium$MaterialAppearance: {
    MaterialSupport: typeof Cesium$MaterialAppearance$MaterialSupport
  };

  declare var Cesium$MaterialAppearance$MaterialSupport: {|
    +BASIC: 0, // 0
    +TEXTURED: 1, // 1
    +ALL: 2 // 2
  |};

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

  declare class Cesium$PerInstanceColorAppearance mixins Appearance {
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

  declare class Cesium$OrthographicFrustum mixins Frustum {
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

  declare class Cesium$PerspectiveFrustum mixins Frustum {
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

  declare class Cesium$PerspectiveOffCenterFrustum mixins Frustum {
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

  declare class Cesium$PolylineColorAppearance mixins Appearance {
    vertexFormat: Cesium$VertexFormat;
    static VERTEX_FORMAT: Cesium$VertexFormat;
    constructor(options?: {
      translucent?: boolean,
      vertexShaderSource?: string,
      fragmentShaderSource?: string,
      renderState?: Cesium$RenderState
    }): this;
  }

  declare class Cesium$PolylineMaterialAppearance mixins Appearance {
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
      compressVertices?: boolean,
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

  declare class Cesium$SingleTileImageryProvider mixins ImageryProvider {
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

  declare class Cesium$TileCoordinatesImageryProvider mixins ImageryProvider {
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

  declare class Cesium$TileMapServiceImageryProvider mixins ImageryProvider {
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

  declare class Cesium$WebMapServiceImageryProvider mixins ImageryProvider {
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

  declare class Cesium$WebMapTileServiceImageryProvider mixins ImageryProvider {
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
    dateFormatter: AnimationViewModel$DateFormatter;
    timeFormatter: AnimationViewModel$TimeFormatter;
    static defaultDateFormatter: AnimationViewModel$DateFormatter;
    static defaultTicks: number[];
    static defaultTimeFormatter: AnimationViewModel$TimeFormatter;
    constructor(clockViewModel: Cesium$ClockViewModel): this;
    getShuttleRingTicks(): number[];
    setShuttleRingTicks(positiveTicks: number[]): void;
  }

  declare type Cesium$AnimationViewModel$DateFormatter = (
    date: Cesium$JulianDate,
    viewModel: Cesium$AnimationViewModel
  ) => string;

  declare type Cesium$AnimationViewModel$TimeFormatter = (
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
      creationFunction: ProviderViewModel$CreationFunction | Cesium$Command
    }): this;
  }

  declare type Cesium$ProviderViewModel$CreationFunction = () =>
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
    computeScreenSpacePosition: SelectionIndicatorViewModel$ComputeScreenSpacePosition;
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

  declare type Cesium$SelectionIndicatorViewModel$ComputeScreenSpacePosition = (
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
    extend(mixin: Viewer$ViewerMixin, options: any): void;
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

  declare type Cesium$Viewer$ViewerMixin = (
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
    comparator: binarySearch$Comparator
  ): number;

  declare type Cesium$binarySearch$Comparator = (a: any, b: any) => number;

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
    comparator: mergeSort$Comparator,
    userDefinedObject?: any
  ): void;

  declare type Cesium$mergeSort$Comparator = (a: any, b: any) => number;

  declare function Cesium$objectToQuery(obj: any): string;

  declare function Cesium$pointInsideTriangle(
    point: Cesium$Cartesian2 | Cesium$Cartesian3,
    p0: Cesium$Cartesian2 | Cesium$Cartesian3,
    p1: Cesium$Cartesian2 | Cesium$Cartesian3,
    p2: Cesium$Cartesian2 | Cesium$Cartesian3
  ): boolean;

  declare function Cesium$queryToObject(queryString: string): any;

  declare function Cesium$requestAnimationFrame(
    callback: requestAnimationFrame$Callback
  ): number;

  declare type Cesium$requestAnimationFrame$Callback = (
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
    requestFunction: throttleRequestByServer$RequestFunction
  ): Promise<any>;

  declare type Cesium$throttleRequestByServer$RequestFunction = (
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
    workerFunction: createTaskProcessorWorker$WorkerFunction
  ): createTaskProcessorWorker$TaskProcessorWorkerFunction;

  declare type Cesium$createTaskProcessorWorker$WorkerFunction = (
    parameters: any,
    transferableObjects: any[]
  ) => any;

  declare type Cesium$createTaskProcessorWorker$TaskProcessorWorkerFunction = (
    event: any
  ) => void;

  declare var Cesium$ClockRange: {|
    +UNBOUNDED: 0, // 0
    +CLAMPED: 1, // 1
    +LOOP_STOP: 2 // 2
  |};

  declare var Cesium$ClockStep: {|
    +TICK_DEPENDENT: 0, // 0
    +SYSTEM_CLOCK_MULTIPLIER: 1, // 1
    +SYSTEM_CLOCK: 2 // 2
  |};

  declare var Cesium$ComponentDatatype: {|
    +BYTE: 0, // 0
    +UNSIGNED_BYTE: 1, // 1
    +SHORT: 2, // 2
    +UNSIGNED_SHORT: 3, // 3
    +FLOAT: 4, // 4
    +DOUBLE: 5 // 5
  |};

  declare var npm$namespace$Cesium$ComponentDatatype: {
    getSizeInBytes: typeof Cesium$ComponentDatatype$getSizeInBytes,
    fromTypedArray: typeof Cesium$ComponentDatatype$fromTypedArray,
    validate: typeof Cesium$ComponentDatatype$validate,
    createTypedArray: typeof Cesium$ComponentDatatype$createTypedArray,
    createArrayBufferView: typeof Cesium$ComponentDatatype$createArrayBufferView
  };
  declare function Cesium$ComponentDatatype$getSizeInBytes(
    componentDatatype: Cesium$ComponentDatatype
  ): number;

  declare function Cesium$ComponentDatatype$fromTypedArray(
    array:
      | Int8Array
      | Uint8Array
      | Int16Array
      | Uint16Array
      | Float32Array
      | Float64Array
  ): Cesium$ComponentDatatype;

  declare function Cesium$ComponentDatatype$validate(
    componentDatatype: Cesium$ComponentDatatype
  ): boolean;

  declare function Cesium$ComponentDatatype$createTypedArray(
    componentDatatype: Cesium$ComponentDatatype,
    valuesOrLength: number | any[]
  ):
    | Int8Array
    | Uint8Array
    | Int16Array
    | Uint16Array
    | Float32Array
    | Float64Array;

  declare function Cesium$ComponentDatatype$createArrayBufferView(
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

  declare var Cesium$CornerType: {|
    +ROUNDED: 0, // 0
    +MITERED: 1, // 1
    +BEVELED: 2 // 2
  |};

  declare var npm$namespace$Cesium$CubicRealPolynomial: {
    computeDiscriminant: typeof Cesium$CubicRealPolynomial$computeDiscriminant,
    computeRealRoots: typeof Cesium$CubicRealPolynomial$computeRealRoots
  };
  declare function Cesium$CubicRealPolynomial$computeDiscriminant(
    a: number,
    b: number,
    c: number,
    d: number
  ): number;

  declare function Cesium$CubicRealPolynomial$computeRealRoots(
    a: number,
    b: number,
    c: number,
    d: number
  ): number[];

  declare var Cesium$ExtrapolationType: {|
    +NONE: 0, // 0
    +HOLD: 1, // 1
    +EXTRAPOLATE: 2 // 2
  |};

  declare var npm$namespace$Cesium$FeatureDetection: {
    supportsFullscreen: typeof Cesium$FeatureDetection$supportsFullscreen,
    supportsTypedArrays: typeof Cesium$FeatureDetection$supportsTypedArrays,
    supportsWebAssembly: typeof Cesium$FeatureDetection$supportsWebAssembly,
    supportsWebWorkers: typeof Cesium$FeatureDetection$supportsWebWorkers
  };
  declare function Cesium$FeatureDetection$supportsFullscreen(): boolean;

  declare function Cesium$FeatureDetection$supportsTypedArrays(): boolean;

  declare function Cesium$FeatureDetection$supportsWebAssembly(): boolean;

  declare function Cesium$FeatureDetection$supportsWebWorkers(): boolean;

  declare var Cesium$Fullscreen: {|
    +element: 0, // 0
    +changeEventName: 1, // 1
    +errorEventName: 2, // 2
    +enabled: 3, // 3
    +fullscreen: 4 // 4
  |};

  declare var npm$namespace$Cesium$Fullscreen: {
    supportsFullscreen: typeof Cesium$Fullscreen$supportsFullscreen,
    requestFullscreen: typeof Cesium$Fullscreen$requestFullscreen,
    exitFullscreen: typeof Cesium$Fullscreen$exitFullscreen
  };
  declare function Cesium$Fullscreen$supportsFullscreen(): boolean;

  declare function Cesium$Fullscreen$requestFullscreen(element: any): void;

  declare function Cesium$Fullscreen$exitFullscreen(): void;

  declare var npm$namespace$Cesium$GeometryPipeline: {
    toWireframe: typeof Cesium$GeometryPipeline$toWireframe,
    createLineSegmentsForVectors: typeof Cesium$GeometryPipeline$createLineSegmentsForVectors,
    createAttributeLocations: typeof Cesium$GeometryPipeline$createAttributeLocations,
    reorderForPreVertexCache: typeof Cesium$GeometryPipeline$reorderForPreVertexCache,
    reorderForPostVertexCache: typeof Cesium$GeometryPipeline$reorderForPostVertexCache,
    fitToUnsignedShortIndices: typeof Cesium$GeometryPipeline$fitToUnsignedShortIndices,
    projectTo2D: typeof Cesium$GeometryPipeline$projectTo2D,
    encodeAttribute: typeof Cesium$GeometryPipeline$encodeAttribute,
    transformToWorldCoordinates: typeof Cesium$GeometryPipeline$transformToWorldCoordinates,
    computeNormal: typeof Cesium$GeometryPipeline$computeNormal,
    computeBinormalAndTangent: typeof Cesium$GeometryPipeline$computeBinormalAndTangent,
    compressVertices: typeof Cesium$GeometryPipeline$compressVertices
  };
  declare function Cesium$GeometryPipeline$toWireframe(
    geometry: Cesium$Geometry
  ): Cesium$Geometry;

  declare function Cesium$GeometryPipeline$createLineSegmentsForVectors(
    geometry: Cesium$Geometry,
    attributeName?: string,
    length?: number
  ): Cesium$Geometry;

  declare function Cesium$GeometryPipeline$createAttributeLocations(
    geometry: Cesium$Geometry
  ): any;

  declare function Cesium$GeometryPipeline$reorderForPreVertexCache(
    geometry: Cesium$Geometry
  ): Cesium$Geometry;

  declare function Cesium$GeometryPipeline$reorderForPostVertexCache(
    geometry: Cesium$Geometry,
    cacheCapacity?: number
  ): Cesium$Geometry;

  declare function Cesium$GeometryPipeline$fitToUnsignedShortIndices(
    geometry: Cesium$Geometry
  ): Cesium$Geometry[];

  declare function Cesium$GeometryPipeline$projectTo2D(
    geometry: Cesium$Geometry,
    attributeName: string,
    attributeName3D: string,
    attributeName2D: string,
    projection?: any
  ): Cesium$Geometry;

  declare function Cesium$GeometryPipeline$encodeAttribute(
    geometry: Cesium$Geometry,
    attributeName: string,
    attributeHighName: string,
    attributeLowName: string
  ): Cesium$Geometry;

  declare function Cesium$GeometryPipeline$transformToWorldCoordinates(
    instance: Cesium$GeometryInstance
  ): Cesium$GeometryInstance;

  declare function Cesium$GeometryPipeline$computeNormal(
    geometry: Cesium$Geometry
  ): Cesium$Geometry;

  declare function Cesium$GeometryPipeline$computeBinormalAndTangent(
    geometry: Cesium$Geometry
  ): Cesium$Geometry;

  declare function Cesium$GeometryPipeline$compressVertices(
    geometry: Cesium$Geometry
  ): Cesium$Geometry;

  declare var Cesium$HeightmapTessellator: {|
    +DEFAULT_STRUCTURE: 0 // 0
  |};

  declare var npm$namespace$Cesium$HeightmapTessellator: {
    computeVertices: typeof Cesium$HeightmapTessellator$computeVertices
  };
  declare function Cesium$HeightmapTessellator$computeVertices(options: {
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

  declare var Cesium$HeightReference: {|
    +CLAMP_TO_GROUND: 0, // 0
    +NONE: 1, // 1
    +RELATIVE_TO_GROUND: 2 // 2
  |};

  declare class Cesium$HermitePolynomialApproximation
    mixins InterpolationAlgorithm {
    static getRequiredDataPoints(degree: number, inputOrder?: number): number;
  }

  declare var Cesium$IndexDatatype: {|
    +UNSIGNED_BYTE: 0, // 0
    +UNSIGNED_SHORT: 1, // 1
    +UNSIGNED_INT: 2 // 2
  |};

  declare var npm$namespace$Cesium$IndexDatatype: {
    getSizeInBytes: typeof Cesium$IndexDatatype$getSizeInBytes,
    validate: typeof Cesium$IndexDatatype$validate,
    createTypedArray: typeof Cesium$IndexDatatype$createTypedArray,
    createTypedArrayFromArrayBuffer: typeof Cesium$IndexDatatype$createTypedArrayFromArrayBuffer
  };
  declare function Cesium$IndexDatatype$getSizeInBytes(
    indexDatatype: Cesium$IndexDatatype
  ): number;

  declare function Cesium$IndexDatatype$validate(
    indexDatatype: Cesium$IndexDatatype
  ): boolean;

  declare function Cesium$IndexDatatype$createTypedArray(
    numberOfVertices: number,
    indicesLengthOrArray: any
  ): Uint16Array | Uint32Array;

  declare function Cesium$IndexDatatype$createTypedArrayFromArrayBuffer(
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

  declare var Cesium$Intersect: {|
    +OUTSIDE: 0, // 0
    +INTERSECTING: 1, // 1
    +INSIDE: 2 // 2
  |};

  declare var npm$namespace$Cesium$IntersectionTests: {
    rayPlane: typeof Cesium$IntersectionTests$rayPlane,
    rayTriangle: typeof Cesium$IntersectionTests$rayTriangle,
    lineSegmentTriangle: typeof Cesium$IntersectionTests$lineSegmentTriangle,
    raySphere: typeof Cesium$IntersectionTests$raySphere,
    lineSegmentSphere: typeof Cesium$IntersectionTests$lineSegmentSphere,
    rayEllipsoid: typeof Cesium$IntersectionTests$rayEllipsoid,
    grazingAltitudeLocation: typeof Cesium$IntersectionTests$grazingAltitudeLocation,
    lineSegmentPlane: typeof Cesium$IntersectionTests$lineSegmentPlane,
    trianglePlaneIntersection: typeof Cesium$IntersectionTests$trianglePlaneIntersection
  };
  declare function Cesium$IntersectionTests$rayPlane(
    ray: Cesium$Ray,
    plane: Cesium$Plane,
    result?: Cesium$Cartesian3
  ): Cesium$Cartesian3;

  declare function Cesium$IntersectionTests$rayTriangle(
    ray: Cesium$Ray,
    p0: Cesium$Cartesian3,
    p1: Cesium$Cartesian3,
    p2: Cesium$Cartesian3,
    cullBackFaces?: boolean,
    result?: Cesium$Cartesian3
  ): Cesium$Cartesian3;

  declare function Cesium$IntersectionTests$lineSegmentTriangle(
    v0: Cesium$Cartesian3,
    v1: Cesium$Cartesian3,
    p0: Cesium$Cartesian3,
    p1: Cesium$Cartesian3,
    p2: Cesium$Cartesian3,
    cullBackFaces?: boolean,
    result?: Cesium$Cartesian3
  ): Cesium$Cartesian3;

  declare function Cesium$IntersectionTests$raySphere(
    ray: Cesium$Ray,
    sphere: Cesium$BoundingSphere,
    result?: any
  ): any;

  declare function Cesium$IntersectionTests$lineSegmentSphere(
    p0: Cesium$Cartesian3,
    p1: Cesium$Cartesian3,
    sphere: Cesium$BoundingSphere,
    result?: any
  ): any;

  declare function Cesium$IntersectionTests$rayEllipsoid(
    ray: Cesium$Ray,
    ellipsoid: Cesium$Ellipsoid
  ): any;

  declare function Cesium$IntersectionTests$grazingAltitudeLocation(
    ray: Cesium$Ray,
    ellipsoid: Cesium$Ellipsoid
  ): Cesium$Cartesian3;

  declare function Cesium$IntersectionTests$lineSegmentPlane(
    endPoint0: Cesium$Cartesian3,
    endPoint1: Cesium$Cartesian3,
    plane: Cesium$Plane,
    result?: Cesium$Cartesian3
  ): Cesium$Cartesian3;

  declare function Cesium$IntersectionTests$trianglePlaneIntersection(
    p0: Cesium$Cartesian3,
    p1: Cesium$Cartesian3,
    p2: Cesium$Cartesian3,
    plane: Cesium$Plane
  ): any;

  declare var npm$namespace$Cesium$Intersections2D: {
    clipTriangleAtAxisAlignedThreshold: typeof Cesium$Intersections2D$clipTriangleAtAxisAlignedThreshold,
    computeBarycentricCoordinates: typeof Cesium$Intersections2D$computeBarycentricCoordinates
  };
  declare function Cesium$Intersections2D$clipTriangleAtAxisAlignedThreshold(
    threshold: number,
    keepAbove: boolean,
    u0: number,
    u1: number,
    u2: number,
    result?: number[]
  ): number[];

  declare function Cesium$Intersections2D$computeBarycentricCoordinates(
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

  declare var Cesium$Iso8601: {|
    +MINIMUM_VALUE: 0, // 0
    +MAXIMUM_VALUE: 1, // 1
    +MAXIMUM_INTERVAL: 2 // 2
  |};

  declare var Cesium$KeyboardEventModifier: {|
    +SHIFT: 0, // 0
    +CTRL: 1, // 1
    +ALT: 2 // 2
  |};

  declare class Cesium$LagrangePolynomialApproximation
    mixins InterpolationAlgorithm {}

  declare class Cesium$LinearApproximation mixins InterpolationAlgorithm {}

  declare var Cesium$MapMode2D: {|
    +INFINITE_SCROLL: 0, // 0
    +ROTATE: 1 // 1
  |};

  declare var Cesium$Math: {|
    +EPSILON1: 0, // 0
    +EPSILON2: 1, // 1
    +EPSILON3: 2, // 2
    +EPSILON4: 3, // 3
    +EPSILON5: 4, // 4
    +EPSILON6: 5, // 5
    +EPSILON7: 6, // 6
    +EPSILON8: 7, // 7
    +EPSILON9: 8, // 8
    +EPSILON10: 9, // 9
    +EPSILON11: 10, // 10
    +EPSILON12: 11, // 11
    +EPSILON13: 12, // 12
    +EPSILON14: 13, // 13
    +EPSILON15: 14, // 14
    +EPSILON16: 15, // 15
    +EPSILON17: 16, // 16
    +EPSILON18: 17, // 17
    +EPSILON19: 18, // 18
    +EPSILON20: 19, // 19
    +GRAVITATIONALPARAMETER: 20, // 20
    +SOLAR_RADIUS: 21, // 21
    +LUNAR_RADIUS: 22, // 22
    +SIXTY_FOUR_KILOBYTES: 23, // 23
    +PI: 24, // 24
    +ONE_OVER_PI: 25, // 25
    +PI_OVER_TWO: 26, // 26
    +PI_OVER_THREE: 27, // 27
    +PI_OVER_FOUR: 28, // 28
    +PI_OVER_SIX: 29, // 29
    +THREE_PI_OVER_TWO: 30, // 30
    +TWO_PI: 31, // 31
    +ONE_OVER_TWO_PI: 32, // 32
    +RADIANS_PER_DEGREE: 33, // 33
    +DEGREES_PER_RADIAN: 34, // 34
    +RADIANS_PER_ARCSECOND: 35 // 35
  |};

  declare var npm$namespace$Cesium$Math: {
    sign: typeof Cesium$Math$sign,
    signNotZero: typeof Cesium$Math$signNotZero,
    toSNorm: typeof Cesium$Math$toSNorm,
    fromSNorm: typeof Cesium$Math$fromSNorm,
    sinh: typeof Cesium$Math$sinh,
    cosh: typeof Cesium$Math$cosh,
    lerp: typeof Cesium$Math$lerp,
    toRadians: typeof Cesium$Math$toRadians,
    toDegrees: typeof Cesium$Math$toDegrees,
    convertLongitudeRange: typeof Cesium$Math$convertLongitudeRange,
    negativePiToPi: typeof Cesium$Math$negativePiToPi,
    zeroToTwoPi: typeof Cesium$Math$zeroToTwoPi,
    mod: typeof Cesium$Math$mod,
    equalsEpsilon: typeof Cesium$Math$equalsEpsilon,
    factorial: typeof Cesium$Math$factorial,
    incrementWrap: typeof Cesium$Math$incrementWrap,
    isPowerOfTwo: typeof Cesium$Math$isPowerOfTwo,
    nextPowerOfTwo: typeof Cesium$Math$nextPowerOfTwo,
    clamp: typeof Cesium$Math$clamp,
    setRandomNumberSeed: typeof Cesium$Math$setRandomNumberSeed,
    nextRandomNumber: typeof Cesium$Math$nextRandomNumber,
    acosClamped: typeof Cesium$Math$acosClamped,
    asinClamped: typeof Cesium$Math$asinClamped,
    chordLength: typeof Cesium$Math$chordLength
  };
  declare function Cesium$Math$sign(value: number): number;

  declare function Cesium$Math$signNotZero(value: number): number;

  declare function Cesium$Math$toSNorm(value: number): number;

  declare function Cesium$Math$fromSNorm(value: number): number;

  declare function Cesium$Math$sinh(value: number): number;

  declare function Cesium$Math$cosh(value: number): number;

  declare function Cesium$Math$lerp(p: number, q: number, time: number): number;

  declare function Cesium$Math$toRadians(degrees: number): number;

  declare function Cesium$Math$toDegrees(radians: number): number;

  declare function Cesium$Math$convertLongitudeRange(angle: number): number;

  declare function Cesium$Math$negativePiToPi(angle: number): number;

  declare function Cesium$Math$zeroToTwoPi(angle: number): number;

  declare function Cesium$Math$mod(m: number, n: number): number;

  declare function Cesium$Math$equalsEpsilon(
    left: number,
    right: number,
    relativeEpsilon: number,
    absoluteEpsilon?: number
  ): boolean;

  declare function Cesium$Math$factorial(n: number): number;

  declare function Cesium$Math$incrementWrap(
    n?: number,
    maximumValue?: number,
    minimumValue?: number
  ): number;

  declare function Cesium$Math$isPowerOfTwo(n: number): boolean;

  declare function Cesium$Math$nextPowerOfTwo(n: number): number;

  declare function Cesium$Math$clamp(
    value: number,
    min: number,
    max: number
  ): number;

  declare function Cesium$Math$setRandomNumberSeed(seed: number): void;

  declare function Cesium$Math$nextRandomNumber(): number;

  declare function Cesium$Math$acosClamped(value: number): number;

  declare function Cesium$Math$asinClamped(value: number): number;

  declare function Cesium$Math$chordLength(
    angle: number,
    radius: number
  ): number;

  declare class Cesium$Packable {
    static packedLength: number;
    static pack(value: any, array: number[], startingIndex?: number): number[];
    static unpack(
      array: number[],
      startingIndex?: number,
      result?: any
    ): Cesium$Packable;
  }

  declare var Cesium$PackableForInterpolation: {|
    +packedInterpolationLength: 0 // 0
  |};

  declare var npm$namespace$Cesium$PackableForInterpolation: {
    convertPackedArrayForInterpolation: typeof Cesium$PackableForInterpolation$convertPackedArrayForInterpolation,
    unpackInterpolationResult: typeof Cesium$PackableForInterpolation$unpackInterpolationResult
  };
  declare function Cesium$PackableForInterpolation$convertPackedArrayForInterpolation(
    packedArray: number[],
    startingIndex?: number,
    lastIndex?: number,
    result?: number[]
  ): number[];

  declare function Cesium$PackableForInterpolation$unpackInterpolationResult(
    array: number[],
    sourceArray: number[],
    startingIndex?: number,
    lastIndex?: number,
    result?: any
  ): any;

  declare var Cesium$PixelFormat: {|
    +DEPTH_COMPONENT: 0, // 0
    +DEPTH_STENCIL: 1, // 1
    +ALPHA: 2, // 2
    +RGB: 3, // 3
    +RGBA: 4, // 4
    +LUMINANCE: 5, // 5
    +LUMINANCE_ALPHA: 6 // 6
  |};

  declare var Cesium$PrimitiveType: {|
    +POINTS: 0, // 0
    +LINES: 1, // 1
    +LINE_LOOP: 2, // 2
    +LINE_STRIP: 3, // 3
    +TRIANGLES: 4, // 4
    +TRIANGLE_STRIP: 5, // 5
    +TRIANGLE_FAN: 6 // 6
  |};

  declare var npm$namespace$Cesium$QuadraticRealPolynomial: {
    computeDiscriminant: typeof Cesium$QuadraticRealPolynomial$computeDiscriminant,
    computeRealRoots: typeof Cesium$QuadraticRealPolynomial$computeRealRoots
  };
  declare function Cesium$QuadraticRealPolynomial$computeDiscriminant(
    a: number,
    b: number,
    c: number
  ): number;

  declare function Cesium$QuadraticRealPolynomial$computeRealRoots(
    a: number,
    b: number,
    c: number
  ): number[];

  declare var npm$namespace$Cesium$QuarticRealPolynomial: {
    computeDiscriminant: typeof Cesium$QuarticRealPolynomial$computeDiscriminant,
    computeRealRoots: typeof Cesium$QuarticRealPolynomial$computeRealRoots
  };
  declare function Cesium$QuarticRealPolynomial$computeDiscriminant(
    a: number,
    b: number,
    c: number,
    d: number,
    e: number
  ): number;

  declare function Cesium$QuarticRealPolynomial$computeRealRoots(
    a: number,
    b: number,
    c: number,
    d: number,
    e: number
  ): number[];

  declare var Cesium$ReferenceFrame: {|
    +FIXED: 0, // 0
    +INERTIAL: 1 // 1
  |};

  declare var Cesium$ScreenSpaceEventType: {|
    +LEFT_DOWN: 0, // 0
    +LEFT_UP: 1, // 1
    +LEFT_CLICK: 2, // 2
    +LEFT_DOUBLE_CLICK: 3, // 3
    +RIGHT_DOWN: 4, // 4
    +RIGHT_UP: 5, // 5
    +RIGHT_CLICK: 6, // 6
    +RIGHT_DOUBLE_CLICK: 7, // 7
    +MIDDLE_DOWN: 8, // 8
    +MIDDLE_UP: 9, // 9
    +MIDDLE_CLICK: 10, // 10
    +MIDDLE_DOUBLE_CLICK: 11, // 11
    +MOUSE_MOVE: 12, // 12
    +WHEEL: 13, // 13
    +PINCH_START: 14, // 14
    +PINCH_END: 15, // 15
    +PINCH_MOVE: 16 // 16
  |};

  declare var npm$namespace$Cesium$Simon1994PlanetaryPositions: {
    computeSunPositionInEarthInertialFrame: typeof Cesium$Simon1994PlanetaryPositions$computeSunPositionInEarthInertialFrame,
    computeMoonPositionInEarthInertialFrame: typeof Cesium$Simon1994PlanetaryPositions$computeMoonPositionInEarthInertialFrame
  };
  declare function Cesium$Simon1994PlanetaryPositions$computeSunPositionInEarthInertialFrame(
    julianDate?: Cesium$JulianDate,
    result?: Cesium$Cartesian3
  ): Cesium$Cartesian3;

  declare function Cesium$Simon1994PlanetaryPositions$computeMoonPositionInEarthInertialFrame(
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

  declare var Cesium$ShadowMode: {|
    +CAST_ONLY: 0, // 0
    +DISABLED: 1, // 1
    +ENABLED: 2, // 2
    +RECEIVE_ONLY: 3 // 3
  |};

  declare var Cesium$TimeStandard: {|
    +UTC: 0, // 0
    +TAI: 1 // 1
  |};

  declare var npm$namespace$Cesium$Transforms: {
    eastNorthUpToFixedFrame: typeof Cesium$Transforms$eastNorthUpToFixedFrame,
    northEastDownToFixedFrame: typeof Cesium$Transforms$northEastDownToFixedFrame,
    northUpEastToFixedFrame: typeof Cesium$Transforms$northUpEastToFixedFrame,
    headingPitchRollToFixedFrame: typeof Cesium$Transforms$headingPitchRollToFixedFrame,
    headingPitchRollQuaternion: typeof Cesium$Transforms$headingPitchRollQuaternion,
    computeTemeToPseudoFixedMatrix: typeof Cesium$Transforms$computeTemeToPseudoFixedMatrix,
    preloadIcrfFixed: typeof Cesium$Transforms$preloadIcrfFixed,
    computeIcrfToFixedMatrix: typeof Cesium$Transforms$computeIcrfToFixedMatrix,
    computeFixedToIcrfMatrix: typeof Cesium$Transforms$computeFixedToIcrfMatrix,
    pointToWindowCoordinates: typeof Cesium$Transforms$pointToWindowCoordinates
  };
  declare function Cesium$Transforms$eastNorthUpToFixedFrame(
    origin: Cesium$Cartesian3,
    ellipsoid?: Cesium$Ellipsoid,
    result?: Cesium$Matrix4
  ): Cesium$Matrix4;

  declare function Cesium$Transforms$northEastDownToFixedFrame(
    origin: Cesium$Cartesian3,
    ellipsoid?: Cesium$Ellipsoid,
    result?: Cesium$Matrix4
  ): Cesium$Matrix4;

  declare function Cesium$Transforms$northUpEastToFixedFrame(
    origin: Cesium$Cartesian3,
    ellipsoid?: Cesium$Ellipsoid,
    result?: Cesium$Matrix4
  ): Cesium$Matrix4;

  declare function Cesium$Transforms$headingPitchRollToFixedFrame(
    origin: Cesium$Cartesian3,
    headingPitchRoll: Cesium$HeadingPitchRoll,
    ellipsoid?: Cesium$Ellipsoid,
    fixedFrameTransform?: Transforms$LocalFrameToFixedFrame,
    result?: Cesium$Matrix4
  ): Cesium$Matrix4;

  declare function Cesium$Transforms$headingPitchRollQuaternion(
    origin: Cesium$Cartesian3,
    headingPitchRoll: Cesium$HeadingPitchRoll,
    ellipsoid?: Cesium$Ellipsoid,
    fixedFrameTransform?: Transforms$LocalFrameToFixedFrame,
    result?: Cesium$Quaternion
  ): Cesium$Quaternion;

  declare function Cesium$Transforms$computeTemeToPseudoFixedMatrix(
    date: Cesium$JulianDate,
    result?: Cesium$Matrix3
  ): Cesium$Matrix3;

  declare function Cesium$Transforms$preloadIcrfFixed(
    timeInterval: Cesium$TimeInterval
  ): Promise<void>;

  declare function Cesium$Transforms$computeIcrfToFixedMatrix(
    date: Cesium$JulianDate,
    result?: Cesium$Matrix3
  ): Cesium$Matrix3;

  declare function Cesium$Transforms$computeFixedToIcrfMatrix(
    date: Cesium$JulianDate,
    result?: Cesium$Matrix3
  ): Cesium$Matrix3;

  declare function Cesium$Transforms$pointToWindowCoordinates(
    modelViewProjectionMatrix: Cesium$Matrix4,
    viewportTransformation: Cesium$Matrix4,
    point: Cesium$Cartesian3,
    result?: Cesium$Cartesian2
  ): Cesium$Cartesian2;

  declare type Cesium$Transforms$LocalFrameToFixedFrame = (
    origin: Cesium$Cartesian3,
    ellipsoid?: Cesium$Ellipsoid,
    result?: Cesium$Matrix4
  ) => Cesium$Matrix4;

  declare var npm$namespace$Cesium$TridiagonalSystemSolver: {
    solve: typeof Cesium$TridiagonalSystemSolver$solve
  };
  declare function Cesium$TridiagonalSystemSolver$solve(
    diagonal: number[],
    lower: number[],
    upper: number[],
    right: Cesium$Cartesian3[]
  ): Cesium$Cartesian3[];

  declare var Cesium$Visibility: {|
    +NONE: 0, // 0
    +PARTIAL: 1, // 1
    +FULL: 2 // 2
  |};

  declare var Cesium$WindingOrder: {|
    +CLOCKWISE: 0, // 0
    +COUNTER_CLOCKWISE: 1 // 1
  |};

  declare var Cesium$StripeOrientation: {|
    +HORIZONTAL: 0, // 0
    +VERTICAL: 1 // 1
  |};

  declare var Cesium$BingMapsStyle: {|
    +AERIAL: 0, // 0
    +AERIAL_WITH_LABELS: 1, // 1
    +ROAD: 2, // 2
    +ORDNANCE_SURVEY: 3, // 3
    +COLLINS_BART: 4 // 4
  |};

  declare var Cesium$BlendEquation: {|
    +ADD: 0, // 0
    +SUBTRACT: 1, // 1
    +REVERSE_SUBTRACT: 2 // 2
  |};

  declare var Cesium$BlendFunction: {|
    +ZERO: 0, // 0
    +ONE: 1, // 1
    +SOURCE_COLOR: 2, // 2
    +ONE_MINUS_SOURCE_COLOR: 3, // 3
    +DESTINATION_COLOR: 4, // 4
    +ONE_MINUS_DESTINATION_COLOR: 5, // 5
    +SOURCE_ALPHA: 6, // 6
    +ONE_MINUS_SOURCE_ALPHA: 7, // 7
    +DESTINATION_ALPHA: 8, // 8
    +ONE_MINUS_DESTINATION_ALPHA: 9, // 9
    +CONSTANT_COLOR: 10, // 10
    +ONE_MINUS_CONSTANT_COLOR: 11, // 11
    +CONSTANT_ALPHA: 12, // 12
    +ONE_MINUS_CONSTANT_ALPHA: 13, // 13
    +SOURCE_ALPHA_SATURATE: 14 // 14
  |};

  declare var Cesium$BlendingState: {|
    +DISABLED: 0, // 0
    +ALPHA_BLEND: 1, // 1
    +PRE_MULTIPLIED_ALPHA_BLEND: 2, // 2
    +ADDITIVE_BLEND: 3 // 3
  |};

  declare var Cesium$BlendOption: {|
    +OPAQUE: 0, // 0
    +OPAQUE_AND_TRANSLUCENT: 1, // 1
    +TRANSLUCENT: 2 // 2
  |};

  declare var Cesium$CameraEventType: {|
    +LEFT_DRAG: 0, // 0
    +RIGHT_DRAG: 1, // 1
    +MIDDLE_DRAG: 2, // 2
    +WHEEL: 3, // 3
    +PINCH: 4 // 4
  |};

  declare var Cesium$CullFace: {|
    +FRONT: 0, // 0
    +BACK: 1, // 1
    +FRONT_AND_BACK: 2 // 2
  |};

  declare var Cesium$DepthFunction: {|
    +NEVER: 0, // 0
    +LESS: 1, // 1
    +EQUAL: 2, // 2
    +LESS_OR_EQUAL: 3, // 3
    +GREATER: 4, // 4
    +NOT_EQUAL: 5, // 5
    +GREATER_OR_EQUAL: 6, // 6
    +ALWAYS: 7 // 7
  |};

  declare var Cesium$HorizontalOrigin: {|
    +CENTER: 0, // 0
    +LEFT: 1, // 1
    +RIGHT: 2 // 2
  |};

  declare var Cesium$LabelStyle: {|
    +FILL: 0, // 0
    +OUTLINE: 1, // 1
    +FILL_AND_OUTLINE: 2 // 2
  |};

  declare var Cesium$ModelAnimationLoop: {|
    +NONE: 0, // 0
    +REPEAT: 1, // 1
    +MIRRORED_REPEAT: 2 // 2
  |};

  declare var Cesium$SceneMode: {|
    +MORPHING: 0, // 0
    +COLUMBUS_VIEW: 1, // 1
    +SCENE2D: 2, // 2
    +SCENE3D: 3 // 3
  |};

  declare var npm$namespace$Cesium$SceneMode: {
    getMorphTime: typeof Cesium$SceneMode$getMorphTime
  };
  declare function Cesium$SceneMode$getMorphTime(
    value: Cesium$SceneMode
  ): number;

  declare var npm$namespace$Cesium$SceneTransforms: {
    wgs84ToWindowCoordinates: typeof Cesium$SceneTransforms$wgs84ToWindowCoordinates,
    wgs84ToDrawingBufferCoordinates: typeof Cesium$SceneTransforms$wgs84ToDrawingBufferCoordinates
  };
  declare function Cesium$SceneTransforms$wgs84ToWindowCoordinates(
    scene: Cesium$Scene,
    position: Cesium$Cartesian3,
    result?: Cesium$Cartesian2
  ): Cesium$Cartesian2;

  declare function Cesium$SceneTransforms$wgs84ToDrawingBufferCoordinates(
    scene: Cesium$Scene,
    position: Cesium$Cartesian3,
    result?: Cesium$Cartesian2
  ): Cesium$Cartesian2;

  declare var Cesium$StencilFunction: {|
    +NEVER: 0, // 0
    +LESS: 1, // 1
    +EQUAL: 2, // 2
    +LESS_OR_EQUAL: 3, // 3
    +GREATER: 4, // 4
    +NOT_EQUAL: 5, // 5
    +GREATER_OR_EQUAL: 6, // 6
    +ALWAYS: 7 // 7
  |};

  declare var Cesium$StencilOperation: {|
    +ZERO: 0, // 0
    +KEEP: 1, // 1
    +REPLACE: 2, // 2
    +INCREMENT: 3, // 3
    +DECREMENT: 4, // 4
    +INVERT: 5, // 5
    +INCREMENT_WRAP: 6, // 6
    +DECREMENT_WRAP: 7 // 7
  |};

  declare var Cesium$VerticalOrigin: {|
    +CENTER: 0, // 0
    +BOTTOM: 1, // 1
    +TOP: 2 // 2
  |};

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

  declare class Cesium$UrlTemplateImageryProvider mixins ImageryProvider {
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
      retryCallback?: Resource$RetryCallback,
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
      retryCallback?: Resource$RetryCallback,
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
      retryCallback?: Resource$RetryCallback,
      retryAttempts?: number,
      request?: Request
    }): Promise<ArrayBuffer> | void;
    static fetchBlob(options?: {
      url: string,
      queryParameters?: any,
      templateValues?: any,
      headers?: any,
      proxy?: Cesium$DefaultProxy,
      retryCallback?: Resource$RetryCallback,
      retryAttempts?: number,
      request?: Request
    }): Promise<Blob> | void;
    static fetchImage(options?: {
      url: string,
      queryParameters?: any,
      templateValues?: any,
      headers?: any,
      proxy?: Cesium$DefaultProxy,
      retryCallback?: Resource$RetryCallback,
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
      retryCallback?: Resource$RetryCallback,
      retryAttempts?: number,
      request?: Request
    }): Promise<any> | void;
    static fetchJsonp(options?: {
      url: string,
      queryParameters?: any,
      templateValues?: any,
      headers?: any,
      proxy?: Cesium$DefaultProxy,
      retryCallback?: Resource$RetryCallback,
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
      retryCallback?: Resource$RetryCallback,
      retryAttempts?: number,
      request?: Request
    }): Promise<string> | void;
    static fetchXml(options?: {
      url: string,
      queryParameters?: any,
      templateValues?: any,
      headers?: any,
      proxy?: Cesium$DefaultProxy,
      retryCallback?: Resource$RetryCallback,
      retryAttempts?: number,
      request?: Request
    }): Promise<XMLDocument> | void;
    static head(options?: {
      url: string,
      queryParameters?: any,
      templateValues?: any,
      headers?: any,
      proxy?: Cesium$DefaultProxy,
      retryCallback?: Resource$RetryCallback,
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
      retryCallback?: Resource$RetryCallback,
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
      retryCallback?: Resource$RetryCallback,
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
      retryCallback?: Resource$RetryCallback,
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
      retryCallback?: Resource$RetryCallback,
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
      retryCallback?: Resource$RetryCallback,
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
      retryCallback?: Resource$RetryCallback,
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

  declare type Cesium$Resource$RetryCallback = (
    resource: Cesium$Resource,
    error: Error
  ) => void;

  declare function Cesium$defined(value: any): boolean;

  declare var npm$namespace$Cesium$buildModuleUrl: {
    setBaseUrl: typeof Cesium$buildModuleUrl$setBaseUrl
  };
  declare function Cesium$buildModuleUrl$setBaseUrl(value: string): void;
}
