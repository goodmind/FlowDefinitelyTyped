declare module "amap-js-sdk" {
  declare var npm$namespace$AMap: {
    plugin: typeof AMap$plugin,
    service: typeof AMap$service,
    convertFrom: typeof AMap$convertFrom
  };
  declare type AMap$EventCallback = (...args: any[]) => void;

  declare type AMap$GenericEventCallback<T> = (res: T) => void;

  /**
   * 加载插件
   * @param pluginNames
   * @param ready
   */
  declare function AMap$plugin(pluginNames: string[], ready?: () => void): void;

  /**
   * 加载服务
   * @param serviceName
   * @param ready
   */
  declare function AMap$service(serviceName: string, ready?: () => void): void;

  declare var npm$namespace$event: {
    addDomListener: typeof event$addDomListener,
    addListener: typeof event$addListener,
    addListenerOnce: typeof event$addListenerOnce,
    removeListener: typeof event$removeListener,
    trigger: typeof event$trigger
  };

  /**
   * 注册DOM对象事件：给DOM对象注册事件，并返回eventListener。运行AMap.event.removeListener(eventListener)可以删除该事件的监听器。
   * @param instance ：需注册事件的DOM对象（必填）
   * @param eventName ：事件名称（必填）
   * @param handler ：事件功能函数（必填）
   * @param context ：事件上下文（可选，缺省时，handler中this指向参数instance引用的对象，否则this指向context引用的对象）
   */
  declare var event$addDomListener: (
    instance: any,
    eventName: string,
    handler: AMap$EventCallback,
    context?: any
  ) => EventListener;

  /**
   * 注册对象事件：给对象注册事件，并返回eventListener。运行AMap.event.removeListener(eventListener)可以删除该事件的监听器。
   * @param instance ：需注册事件的对象（必填）
   * @param eventName ：事件名称（必填）
   * @param handler ：事件功能函数（必填）
   * @param context ：事件上下文（可选，缺省时，handler中this指向参数instance引用的对象，否则this指向context引用的对象）
   */
  declare var event$addListener: (
    instance: any,
    eventName: string,
    handler: AMap$EventCallback,
    context?: any
  ) => EventListener;

  /**
   * 类似于addListener，但处理程序会在处理完第一个事件后将自已移除。
   */
  declare var event$addListenerOnce: (
    instance: any,
    eventName: string,
    handler: AMap$EventCallback,
    context?: any
  ) => EventListener;

  /**
   * 删除由上述 event.addDomListener 和 event.addListener 传回的指定侦听器。
   */
  declare var event$removeListener: (listener: EventListener) => void;

  /**
   * 触发非DOM事件：触发非DOM事件eventName，extArgs将扩展到事件监听函数（handler）接受到的event参数中。如:在extArgs内写入{m:10,p:2}，eventName监听函数（handler）可以接收到包含m,p两个key值的event对象。
   */
  declare var event$trigger: (
    instance: any,
    eventName: string,
    extArgs: any
  ) => void;

  /**
   * 此对象用于表示地图、覆盖物、叠加层上的各种鼠标事件返回，包含以下字段：
   */
  declare interface AMap$MapsEventOptions {
    lnglat: AMap$LngLat;
    pixel: AMap$Pixel;
    type: string;
    target: any;
  }

  declare class AMap$EventBindable {
    on(eventName: string, callback: AMap$EventCallback): void;
    off(eventName: string, callback: AMap$EventCallback): void;
  }

  /**
   * 像素坐标，确定地图上的一个像素点。
   */
  declare class AMap$Pixel {
    /**
     * 构造一个像素坐标对象。
     */
    constructor(x: number, y: number): this;

    /**
     * 获得X方向像素坐标
     */
    getX(): number;

    /**
     * 获得Y方向像素坐标
     */
    getY(): number;

    /**
     * 当前像素坐标与传入像素坐标是否相等
     */
    equals(point: AMap$Pixel): boolean;

    /**
     * 以字符串形式返回像素坐标对象
     */
    toString(): string;
  }

  /**
   * 地物对象的像素尺寸
   */
  declare class AMap$Size {
    /**
     * 构造尺寸对象
     * @param width 宽度，单位：像素
     * @param height 高度，单位：像素
     */
    constructor(width: number, height: number): this;

    /**
     * 获得宽度
     */
    getWidth(): number;

    /**
     * 获得高度
     */
    getHeight(): number;

    /**
     * 以字符串形式返回尺寸大小对象
     */
    toString(): string;
  }

  /**
   * 经纬度坐标，确定地图上的一个点
   */
  declare class AMap$LngLat {
    /**
     * 构造一个地理坐标对象
     * @param lng 经度
     * @param lat 纬度
     */
    constructor(lng: number, lat: number): this;

    /**
     * 当前经纬度坐标值经度移动w，纬度移动s，得到新的坐标。
     * @param w 经度，向右移为正值，单位：米
     * @param s 纬度，向上移为正值，单位：米
     */
    offset(w: number, s: number): AMap$LngLat;

    /**
     * 计算当前经纬度和传入经纬度或者经纬度数组连线之间的地面距离，单位为米
     * @param lnglat 传入的经纬度
     */
    distance(lnglat: AMap$LngLat | [number, number]): number;

    /**
     * 获取经度值
     */
    getLng(): number;

    /**
     * 获取纬度值
     */
    getLat(): number;

    /**
     * 判断当前坐标对象与传入坐标对象是否相等
     * @param lnglat 传入坐标对象
     */
    equals(lnglat: AMap$LngLat): boolean;

    /**
     * LngLat对象以字符串的形式返回
     */
    toString(): string;
  }

  /**
   * 地物对象的经纬度矩形范围
   */
  declare class AMap$Bounds {
    /**
     * 构造一个矩形范围
     * @param southWest 西南角经纬度坐标
     * @param northEast 东北角经纬度坐标
     */
    constructor(southWest: AMap$LngLat, northEast: AMap$LngLat): this;

    /**
     * 判断指定点坐标是否在矩形范围内
     * @param point 指定点
     */
    contains(point: AMap$LngLat): boolean;

    /**
     * 获取当前Bounds的中心点经纬度坐标
     */
    getCenter(): AMap$LngLat;

    /**
     * 获取西南角坐标
     */
    getSouthWest(): AMap$LngLat;

    /**
     * 获取东北角坐标
     */
    getNorthEast(): AMap$LngLat;

    /**
     * 以字符串形式返回地物对象的矩形范围
     */
    toString(): string;
  }

  declare interface AMap$TileLayerOptions {
    map: AMap$Map;
    tileSize: number;
    tileUrl: string;
    errorUrl: string;
    getTileUrl: (x: number, y: number, z: number) => string;
    zIndex: number;
    opacity: number;
    zooms: number[];
    detectRetina: boolean;
  }

  declare class AMap$Layer mixins AMap$EventBindable {
    setOpacity(alpha: number): void;
    show(): void;
    hide(): void;
    getTiles(): string[];
    reload(): void;
    setTileUrl(): void;
    getZooms(): number[];
    setzIndex(index: number): void;
    setMap(map: AMap$Map): void;
  }

  declare class AMap$TileLayer mixins AMap$Layer {
    constructor(tileOpt?: {
      map: AMap$Map,
      tileSize?: number,
      tileUrl?: string,
      errorUrl?: string,
      getTileUrl?: (x: number, y: number, z: number) => string,
      zIndex?: number,
      opacity?: number,
      zooms?: number[],
      detectRetina?: boolean
    }): this;
  }

  declare class TileLayer$MapTypeLayer mixins AMap$Layer {
    constructor(options?: {
      map: AMap$Map,
      zIndex?: number,
      opacity?: number,
      zooms?: number[],
      detectRetina?: boolean
    }): this;
  }

  declare class TileLayer$Satellite mixins TileLayer$MapTypeLayer {}

  declare class TileLayer$RoadNet mixins TileLayer$MapTypeLayer {}

  declare class TileLayer$Traffic mixins TileLayer$MapTypeLayer {
    constructor(options?: {
      map: AMap$Map,
      zIndex?: number,
      opacity?: number,
      zooms?: number[],
      detectRetina?: boolean,
      autoRefresh?: boolean,
      interval?: number
    }): this;
    interval: number;
    autoRefresh: boolean;
  }

  declare class AMap$IndoorMap {
    constructor(opts: {
      zIndex?: number,
      opacity?: number,
      cursor?: string,
      hideFloorBar?: boolean,
      alwaysShow?: boolean
    }): this;
    showIndoorMap(indoorid: string, floor: number, shopid: string): void;
    showFloor(floor: number, noMove: boolean): void;
    setMap(map: AMap$Map): void;
    show(): void;
    hide(): void;
    setzIndex(): void;
    showFloorBar(): void;
    hideFloorBar(): void;
    setOpacity(alpha: number): void;
    getOpacity(): number;
    showLabels(): void;
    hideLabels(): void;
    getSelectedBuildingId(): string;
    getSelectedBuilding(): string;
  }

  declare interface AMap$MapOptions {
    view?: AMap$View2D;
    layers?: AMap$TileLayer[];
    level?: number;
    center?: AMap$LngLat;
    labelzIndex?: number;
    zooms?: number[];
    lang?: string;
    cursor?: string;
    crs?: string;
    animateEnable?: boolean;
    isHotspot?: boolean;
    defaultLayer?: AMap$TileLayer;
    rotateEnable?: boolean;
    resizeEnable?: boolean;
    showIndoorMap?: boolean;
    indoorMap?: AMap$IndoorMap;
    expandZoomRange?: boolean;
    dragEnable?: boolean;
    zoomEnable?: boolean;
    doubleClickZoom?: boolean;
    keyboardEnable?: boolean;
    jogEnable?: boolean;
    scrollWheel?: boolean;
    touchZoom?: boolean;
    mapStyle?: string;
    features?: string[];
  }

  declare class AMap$View2D {
    constructor(opt: {
      center?: AMap$LngLat,
      rotation?: number,
      zoom?: number,
      crs?: "EPSG3857" | "EPSG3395" | "EPSG4326"
    }): this;

    /**
     * To silence lint error, this class has to be exists.
     */
    toString(): string;
  }

  declare class AMap$Map mixins AMap$EventBindable {
    constructor(mapDiv: string, opts?: AMap$MapOptions): this;
    getZoom(): number;
    getLayers(): AMap$TileLayer[];
    getCenter(): AMap$LngLat;
    getCity(
      callback: (result: {
        provice: string,
        city: string,
        citycode: string,
        district: string
      }) => void
    ): void;
    getBounds(): AMap$Bounds;
    getlabelzIndex(): number;
    getLimitBounds(): AMap$Bounds;
    getLang(): string;
    getSize(): AMap$Size;
    getRotation(): number;
    getStatus(): any;
    getDefaultCursor(): string;
    getResolution(point: AMap$LngLat): number;
    getScale(dpi: number): number;
    setZoom(level: number): void;
    setlabelzIndex(index: number): void;
    setLayers(layers: AMap$TileLayer[]): void;
    add(overlayers: any[]): void;
    remove(overlayers: any[]): void;
    getAllOverlays(
      type: string
    ): AMap$Marker[] | AMap$Circle[] | AMap$Polygon[] | AMap$Polyline[];
    setCenter(position: AMap$LngLat): void;
    setZoomAndCenter(zoomLevel: number, center: AMap$LngLat): void;
    setCity(city: string, callback: () => void): void;
    setBounds(bound: AMap$Bounds): void;
    setLimitBounds(bound: AMap$Bounds): void;
    clearLimitBounds(): void;
    setLang(lang: string): void;
    setRotation(rotation: number): void;
    setStatus(status: any): void;
    setDefaultCursor(cursor: string): void;
    zoomIn(): void;
    zoomOut(): void;
    panTo(position: AMap$LngLat): void;
    panBy(x: number, y: number): void;
    setFitView(overlayList?: any[]): void;
    clearMap(): void;
    destroy(): void;
    plugin(name: string | string[], callback: () => void): void;
    addControl(obj: any): void;
    removeControl(obj: any): void;
    clearInfoWindow(): void;
    pixelToLngLat(pixel: AMap$Pixel, level: number): AMap$LngLat;
    lnglatToPixel(lnglat: AMap$LngLat, level: number): AMap$Pixel;
    containerToLngLat(pixel: AMap$Pixel, level: number): AMap$LngLat;
    lngLatToContainer(lnglat: AMap$LngLat, level: number): AMap$Pixel;
    setMapStyle(style: string): void;
    getMapStyle(): string;
    setFeatures(features: string[]): void;
    getFeatures(): string[];
    setDefaultLayer(layer: AMap$TileLayer): void;
  }

  declare class AMap$Icon {
    constructor(options?: {
      size?: AMap$Size,
      imageOffset?: AMap$Pixel,
      image?: string,
      imageSize?: AMap$Size
    }): this;
    getImageSize(): AMap$Size;
    setImageSize(size: AMap$Size): void;
  }

  /**
   * MarkerShape用于划定Marker的可点击区域范围。需要注意的是，在IE浏览器中图标透明区域默认为不触发事件，因此MarkerShape在IE中不起作用。
   */
  declare class AMap$MarkerShape {
    constructor(options: {
      /**
       * 可点击区域组成元素数组，存放图形的像素坐标等信息，该数组元素由type决定：
       * - circle:coords格式为 [x1, y1, r]，x1，y1为圆心像素坐标，r为圆半径
       * - poly: coords格式为 [x1, y1, x2, y2 … xn, yn]，各x，y表示多边形边界像素坐标
       * - rect: coords格式为 [x1, y1, x2, y2]，x1，y1为矩形左上角像素坐标，x2，y2为矩形右下角像素坐标
       * Markshape的像素坐标是指相对于marker的左上角的像素坐标偏移量
       */
      coords?: number[],

      /**
       * 可点击区域类型，可选值：
       * - circle:圆形
       * - poly:多边形
       * - rect:矩形
       */
      type?: string
    }): this;

    /**
     * To silence lint error, this class has to be exists.
     */
    toString(): string;
  }

  declare interface AMap$MarkerOptions {
    map?: AMap$Map;
    position?: AMap$LngLat;
    offset?: AMap$Pixel;
    icon?: string | AMap$Icon;
    content?: string | HTMLElement;
    topWhenClick?: boolean;
    topWhenMouseOver?: boolean;
    draggable?: boolean;
    raiseOnDrag?: boolean;
    cursor?: string;
    visible?: boolean;
    zIndex?: number;
    angle?: number;
    autoRotation?: boolean;
    animation?: string;
    shadow?: AMap$Icon;
    title?: string;
    clickable?: boolean;
    shape?: AMap$MarkerShape;
    extData?: any;
    label?: {
      content: string,
      offset: AMap$Pixel
    };
  }

  /**
   * 点标记。
   */
  declare class AMap$Marker mixins AMap$EventBindable {
    constructor(options?: AMap$MarkerOptions): this;
    markOnAMAP(obj: {
      name: string,
      position: AMap$LngLat
    }): void;
    getOffset(): AMap$Pixel;
    setOffset(offset: AMap$Pixel): void;
    setAnimation(animate: string): void;
    getAnimation(): string;
    setClickable(clickable: boolean): void;
    getClickable(): boolean;
    getPosition(): AMap$LngLat;
    setPosition(lnglat: AMap$LngLat): void;
    setAngle(angle: number): void;
    getAngle(): number;
    setLabel(label: {
      content?: string,
      offset?: AMap$Pixel
    }): void;
    getLabel(): {
      content?: string,
      offset?: AMap$Pixel
    };
    setzIndex(index: number): void;
    getIcon(): string | AMap$Icon;
    setIcon(content: string | AMap$Icon): void;
    setDraggable(draggable: boolean): void;
    getDraggable(): boolean;
    hide(): void;
    show(): void;
    setCursor(cursor: string): void;
    setContent(content: string | HTMLElement): void;
    getContent(): string;
    moveAlong(
      lnglatlist: AMap$LngLat[],
      speed?: number,
      f?: (k: number) => number,
      circlable?: boolean
    ): void;
    moveTo(
      lnglat: AMap$LngLat,
      speed?: number,
      f?: (k: number) => number
    ): void;
    stopMove(): void;
    setMap(map: AMap$Map): void;
    getMap(): AMap$Map;
    setTitle(title: string): void;
    getTitle(): string;
    setTop(isTop: boolean): void;
    getTop(): boolean;
    setShadow(icon: AMap$Icon): void;
    getShadow(): AMap$Icon;
    setShape(shape: AMap$MarkerShape): void;
    getShape(): AMap$MarkerShape;
    setExtData(ext: any): void;
    getExtData(): any;
  }

  declare interface AMap$MarkerClustererOptions {
    gridSize?: number;
    minClusterSize?: number;
    maxZoom?: number;
    averageCenter?: boolean;
    styles?: any[];
    renderCluserMarker?: (obj: any) => void;
    zoomOnClick?: boolean;
  }

  /**
   * 用于地图上加载大量点标记，提高地图的绘制和显示性能。
   */
  declare class AMap$MarkerClusterer mixins AMap$EventBindable {
    constructor(
      map: AMap$Map,
      markers: AMap$Marker[],
      opt?: AMap$MarkerClustererOptions
    ): this;

    /**
     * 添加一个需进行聚合的点标记
     * @param marker
     */
    addMarker(marker: AMap$Marker): void;

    /**
     * 删除一个聚合的点标记
     * @param marker 点标记
     */
    removeMarker(marker: AMap$Marker): void;

    /**
     * 获取聚合点的总数量
     */
    getClustersCount(): number;

    /**
     * 获取聚合网格的像素大小
     */
    getGridSize(): number;

    /**
     * 获取地图中点标记的最大聚合级别
     */
    getMaxZoom(): number;

    /**
     * 获取单个聚合的最小数量
     */
    getMinClusterSize(): number;

    /**
     * 获取聚合的样式风格集合
     */
    getStyles(): any[];

    /**
     * 设置聚合网格的像素大小
     * @param size
     */
    setGridSize(size: number): void;

    /**
     * 设置地图中点标记的最大聚合级别
     * @param zoom
     */
    setMaxZoom(zoom: number): void;

    /**
     * 设置单个聚合的最小数量
     * @param size
     */
    setMinClusterSize(size: number): void;

    /**
     * 设置聚合的样式风格
     * @param styles
     */
    setStyles(styles: any[]): void;

    /**
     * 从地图上彻底清除所有聚合点标记
     */
    clearMarkers(): void;

    /**
     * 设置将进行点聚合的地图对象
     * @param map
     */
    setMap(map: AMap$Map): void;

    /**
     * 设置将进行点聚合显示的点标记集合
     * @param markers
     */
    setMarkers(markers: AMap$Marker[]): void;

    /**
     * 获取该点聚合的地图对象
     */
    getMap(): AMap$Map;

    /**
     * 获取该点聚合中的点标记集合
     */
    getMarkers(): AMap$Marker[];

    /**
     * 添加一组需进行聚合的点标记
     */
    addMarkers(markers: AMap$Marker[]): void;

    /**
     * 删除一组聚合的点标记
     * @param markers
     */
    removeMarkers(markers: AMap$Marker[]): void;

    /**
     * 获取单个聚合点位置是否是聚合内所有标记的平均中心
     */
    isAverageCenter(): boolean;

    /**
     * 设置单个聚合点位置是否是聚合内所有标记的平均中心
     * @param averageCenter
     */
    setAverageCenter(averageCenter: boolean): void;
  }

  declare interface AMap$CircleOptions {
    map: AMap$Map;
    zIndex?: number;
    center: AMap$LngLat;
    radius?: number;
    strokeColor?: string;
    strokeOpacity?: number;
    fillColor?: string;
    fillOpacity?: string;
    strokeStyle?: string;
    extData?: any;
    strokeDasharray?: number[];
  }

  declare class AMap$Circle {
    constructor(options?: AMap$CircleOptions): this;
    setCenter(lnglat: AMap$LngLat): void;
    getCenter(): AMap$LngLat;
    getBounds(): AMap$Bounds;
    setRadius(radius: number): void;
    getRadius(): number;
    setOptions(circleopt: AMap$CircleOptions): void;
    getOptions(): AMap$CircleOptions;
    hide(): void;
    show(): void;
    setMap(map: AMap$Map): void;
    setExtData(ext: any): void;
    getExtData(): any;
    contains(point: AMap$LngLat): boolean;
  }

  declare interface AMap$PolygonOptions {
    map?: AMap$Map;
    zIndex?: number;
    path?: AMap$LngLat[] | AMap$LngLat[][];
    strokeColor?: string;
    strokeOpacity?: number;
    strokeWeight?: number;
    fillColor?: string;
    fillOpacity?: number;
    extData?: any;
    strokeStyle?: string;
    strokeDasharray?: number[];
  }

  declare class AMap$Polygon mixins AMap$EventBindable {
    constructor(options?: AMap$PolygonOptions): this;
    setPath(path: AMap$LngLat[] | AMap$LngLat[][]): void;
    getPath(): AMap$LngLat[] | AMap$LngLat[][];
    setOptions(opt: AMap$PolygonOptions): void;
    getOptions(): AMap$PolygonOptions;
    getBounds(): AMap$Bounds;
    getArea(): number;
    hide(): void;
    show(): void;
    setMap(map: AMap$Map): void;
    setExtData(ext: any): void;
    getExtData(): any;
    contains(point: AMap$LngLat): boolean;
  }

  declare interface AMap$PolylineOptions {
    map?: AMap$Map;
    zIndex?: number;
    geodesic?: boolean;
    isOutline?: boolean;
    outlineColor?: string;
    path?: AMap$LngLat[];
    strokeColor?: string;
    strokeOpacity?: number;
    strokeWeight?: number;
    strokeStyle?: string;
    strokeDasharray?: number[];
    extData?: any;
  }

  declare class AMap$Polyline mixins AMap$EventBindable {
    constructor(options?: AMap$PolylineOptions): this;
    setPath(path: AMap$LngLat[]): void;
    getPath(): AMap$LngLat[];
    setOptions(opt: AMap$PolylineOptions): void;
    getOptions(): AMap$PolylineOptions;
    getLength(): number;
    getBounds(): AMap$Bounds;
    hide(): void;
    show(): void;
    setMap(map: AMap$Map): void;
    setExtData(ext: any): void;
    getExtData(): any;
  }

  declare interface AMap$MapControl {
    show(): void;
    hide(): void;
  }

  declare class AMap$MapType mixins AMap$MapControl {
    constructor(options?: {
      defaultType?: number,
      showTraffic?: boolean,
      showRoad?: boolean
    }): this;
    show(): void;
    hide(): void;
  }

  declare class AMap$OverView mixins AMap$EventBindable, AMap$MapControl {
    constructor(options?: {
      tileLayer?: AMap$TileLayer[],
      isOpen?: boolean,
      visible?: boolean
    }): this;
    open(): void;
    close(): void;
    setTileLayer(layer: AMap$TileLayer): void;
    getTileLayer(): AMap$TileLayer;
    show(): void;
    hide(): void;
  }

  declare class AMap$Scale mixins AMap$EventBindable, AMap$MapControl {
    offset: AMap$Pixel;
    position: string;
    show(): void;
    hide(): void;
  }

  declare class AMap$ToolBar mixins AMap$EventBindable, AMap$MapControl {
    constructor(options?: {
      offset?: AMap$Pixel,
      position?: string,
      ruler?: boolean,
      noIpLocate?: boolean,
      locate?: boolean,
      liteStyle?: boolean,
      direction?: boolean,
      autoPosition?: boolean,
      locationMarker?: AMap$Marker,
      useNative?: boolean
    }): this;
    getOffset(): AMap$Pixel;
    setOffset(offset: AMap$Pixel): void;
    hideRuler(): void;
    showRuler(): void;
    hideDirection(): void;
    showDirection(): void;
    hideLocation(): void;
    showLocation(): void;
    doLocation(): void;
    getLocation(): {
      lng: number,
      lat: number
    };
    show(): void;
    hide(): void;
  }

  declare class AMap$InfoWindow mixins AMap$EventBindable {
    constructor(options?: {
      isCustom?: boolean,
      autoMove?: boolean,
      closeWhenClickMap?: boolean,
      content?: string | HTMLElement,
      size?: AMap$Size,
      offset?: AMap$Pixel,
      position?: AMap$LngLat,
      showShadow?: boolean
    }): this;
    open(map: AMap$Map, pos: AMap$LngLat): void;
    close(): void;
    getIsOpen(): boolean;
    setPosition(lnglat: AMap$LngLat): void;
    getPosition(): AMap$LngLat;
    setSize(size: AMap$Size): void;
    getSize(): AMap$Size;
    getContent(): string;
    setContent(content: string | HTMLElement): void;
  }

  declare class AMap$AdvancedInfoWindow mixins AMap$EventBindable {
    constructor(options?: {
      autoMove?: boolean,
      closeWhenClickMap?: boolean,
      content?: string | HTMLElement,
      offset?: AMap$Pixel,
      position?: AMap$LngLat,
      panel?: string | HTMLElement,
      searchRadius?: number,
      placeSearch?: boolean,
      driving?: boolean,
      walking?: boolean,
      transit?: boolean,
      asOrigin?: boolean,
      asDestination?: boolean
    }): this;
    open(map: AMap$Map, pos: AMap$LngLat): void;
    close(): void;
    getIsOpen(): boolean;
    setPosition(lnglat: AMap$LngLat): void;
    getPosition(): AMap$LngLat;
    setContent(content: string | HTMLElement): void;
    getContent(): string;
  }

  declare class AMap$Geolocation mixins AMap$EventBindable {
    constructor(options: {
      enableHighAccuracy?: boolean,
      timeout?: number,
      noIpLocate?: boolean,
      maximumAge?: number,
      convert?: boolean,
      showButton?: boolean,
      buttonDom?: string | HTMLElement,
      buttonPosition?: string,
      buttonOffset?: AMap$Pixel,
      showMarker?: boolean,
      markerOptions?: AMap$MarkerOptions,
      showCircle?: boolean,
      circleOptions?: AMap$CircleOptions,
      panToLocation?: boolean,
      zoomToAccuracy?: boolean,
      useNative?: boolean
    }): this;
    isSupported(): boolean;
    getCurrentPosition(): void;
    watchPosition(): number;
    clearWatch(watchId: number): number;
  }

  declare interface AMap$GeolocationResult {
    position: AMap$LngLat;
    accuracy: number;
    isConverted: boolean;
    info: string;
  }

  declare interface AMap$GeolocationError {
    info: string;
  }

  declare interface AMap$BusinessArea {
    id: string;
    name: string;
    location: string;
  }

  declare interface AMap$Road {
    id: string;
    name: string;
    distance: number;
    location: AMap$LngLat;
    direction: string;
  }

  declare interface AMap$Cross {
    distance: number;
    direction: string;
    location: AMap$LngLat;
    first_id: string;
    first_name: string;
    second_id: string;
    second_name: string;
  }

  declare interface AMap$AddressComponent {
    province: string;
    city: string;
    citycode: string;
    district: string;
    adcode: string;
    township: string;
    street: string;
    streetNumber: string;
    neighborhood: string;
    neighborhoodType: string;
    building: string;
    buildingType: string;
    businessAreas: AMap$BusinessArea[];
  }

  declare interface AMap$Geocode {
    addressComponent: AMap$AddressComponent;
    formattedAddress: string;
    location: AMap$LngLat;
    adcode: string;
    level: string;
  }

  declare interface AMap$ReGeocode {
    addressComponent: AMap$AddressComponent;
    formattedAddress: string;
    roads: AMap$Road[];
    crosses: AMap$Cross[];
    pois: AMap$ReGeocodePoi[];
  }

  declare interface AMap$ReGeocodePoi {
    id: string;
    name: string;
    type: string;
    tel: string;
    distance: number;
    direction: string;
    address: string;
    location: AMap$LngLat;
    businessArea: string;
  }

  declare interface AMap$GeocodeResult {
    info: string;
    geocodes: AMap$LngLat[];
    resultNum: number;
  }

  declare interface AMap$ReGeocodeResult {
    info: string;
    regeocode: AMap$ReGeocode;
  }

  declare class AMap$Geocoder {
    constructor(opts?: {
      city?: string,
      radius?: number,
      batch?: boolean,
      extensions?: string
    }): this;
    getLocation(
      address: string,
      callback?: (status?: string, result?: string | AMap$GeocodeResult) => void
    ): void;
    setCity(city: string): void;
    getAddress(
      location: AMap$LngLat | AMap$LngLat[],
      callback: (
        status?: string,
        result?: string | AMap$ReGeocodeResult
      ) => void
    ): void;
  }

  /**
   * 坐标转换结果
   */
  declare interface AMap$ConvertorResult {
    info: string;
    locations: AMap$LngLat[];
  }

  /**
   * 坐标转换
   */
  declare function AMap$convertFrom(
    lnglat: AMap$LngLat | AMap$LngLat[] | [number, number],
    type: string,
    result: (status: string, result: AMap$ConvertorResult) => void
  ): void;

  declare interface AMap$Poi {
    id: string;
    name: string;
    type: string;
    location: AMap$LngLat;
    address: string;
    distance: number;
    tel: string;
    website: string;
    pcode: string;
    citycode: string;
    adcode: string;
    postcode: string;
    pname: string;
    cityname: string;
    adname: string;
    email: string;
    entr_location: AMap$LngLat;
    exit_location: AMap$LngLat;
    groupbuy: boolean;
    discount: boolean;
  }

  declare interface AMap$CitySearchResult {
    city: string;
    bounds: AMap$Bounds;
  }

  declare class AMap$CitySearch mixins AMap$EventBindable {
    getLocalCity(
      callback: (status: string, result: string | AMap$CitySearchResult) => void
    ): void;
    getCityByIp(
      ip: string,
      callback: (status: string, result: string | AMap$CitySearchResult) => void
    ): void;
  }

  declare class AMap$DrivingPolicy {
    constructor(...args: empty): mixed;
    static +LEAST_TIME: Class<AMap$DrivingPolicy__LEAST_TIME> &
      AMap$DrivingPolicy__LEAST_TIME &
      0; // 0
    static +LEAST_FEE: Class<AMap$DrivingPolicy__LEAST_FEE> &
      AMap$DrivingPolicy__LEAST_FEE &
      1; // 1
    static +LEAST_DISTANCE: Class<AMap$DrivingPolicy__LEAST_DISTANCE> &
      AMap$DrivingPolicy__LEAST_DISTANCE &
      2; // 2
    static +REAL_TRAFFIC: Class<AMap$DrivingPolicy__REAL_TRAFFIC> &
      AMap$DrivingPolicy__REAL_TRAFFIC &
      3; // 3
  }

  declare class AMap$DrivingPolicy__LEAST_TIME mixins AMap$DrivingPolicy {}
  declare class AMap$DrivingPolicy__LEAST_FEE mixins AMap$DrivingPolicy {}
  declare class AMap$DrivingPolicy__LEAST_DISTANCE mixins AMap$DrivingPolicy {}
  declare class AMap$DrivingPolicy__REAL_TRAFFIC mixins AMap$DrivingPolicy {}

  declare interface AMap$ViaCity {
    name: string;
    citycode: string;
    adcode: string;
    districts: AMap$District[];
  }

  declare interface AMap$District {
    name: string;
    adcode: string;
    name: string;
    center: AMap$LngLat;
    citycode: string;
    adcode: string;
    level: string;
    boundaries: AMap$LngLat[];
    districtList: AMap$District[];
  }

  declare interface AMap$TMC {
    lcode: string;
    distance: number;
    status: string;
  }

  declare interface AMap$DriveStep {
    start_location: AMap$LngLat;
    end_location: AMap$LngLat;
    instruction: string;
    action: string;
    assist_action: string;
    orientation: string;
    road: string;
    distance: number;
    tolls: number;
    tolls_distance: number;
    toll_road: string;
    time: number;
    path: AMap$LngLat[];
    cities?: AMap$ViaCity[];
    tmcs?: AMap$TMC[];
  }

  declare interface AMap$DriveRoute {
    distance: number;
    time: number;
    policy: string;
    tolls: number;
    tolls_distance: number;
    steps: AMap$DriveStep[];
  }

  declare interface AMap$DrivingResult {
    info: string;
    origin: AMap$LngLat;
    destination: AMap$LngLat | AMap$Poi;
    start: AMap$Poi;
    waypoints: AMap$Poi;
    taxi_cost: number;
    routes: AMap$DriveRoute[];
  }

  declare class AMap$Driving mixins AMap$EventBindable {
    constructor(options?: {
      policy?: AMap$DrivingPolicy,
      extensions?: string,
      map?: AMap$Map,
      panel?: string | HTMLElement,
      hideMarkers?: boolean,
      showTraffic?: boolean
    }): this;
    search(
      origin: AMap$LngLat,
      destination: AMap$LngLat,
      opts?: {
        waypoints: AMap$LngLat[]
      },
      callback?: (status: string, result: string | AMap$DrivingResult) => void
    ): void;
    search(
      point: Array<{
        keyword: string,
        city: string
      }>,
      callback: (status: string, result: string | AMap$DrivingResult) => void
    ): void;
    setPolicy(policy: AMap$DrivingPolicy): void;
    setAvoidPolygons(path: AMap$LngLat[][]): void;
    setAvoidRoad(road: string): void;
    clearAvoidRoad(): void;
    clearAvoidPolygons(): void;
    getAvlidPolygons(): AMap$LngLat[][];
    getAvoidRoad(): string;
    clear(): void;
    searchOnAMAP(obj: {
      origin?: AMap$LngLat,
      originName?: string,
      destination?: AMap$LngLat,
      destinationName?: string
    }): void;
  }

  declare interface AMap$WeatherLiveResult {
    info: string;
    province: string;
    city: string;
    adcode: string;
    weather: string;
    temperature: number;
    windDirection: string;
    windPower: number;
    humidity: string;
    reportTime: string;
  }

  declare interface AMap$Forecast {
    date: string;
    week: string;
    dayWeather: string;
    nightWeather: string;
    dayTemp: number;
    nightTemp: number;
    dayWindDir: string;
    nightWindDir: string;
    dayWindPower: string;
    nightWindPower: string;
  }

  declare interface AMap$WeatherForecastResult {
    info: string;
    province: string;
    city: string;
    adcode: string;
    reportTime: string;
    forecasts: AMap$Forecast[];
  }

  declare class AMap$Weather {
    /**
     * 查询实时天气信息
     * @param district 支持城市名称/区域编码（如：“杭州市”/“330100”）
     * @param callback 当请求成功时ErrorStatus为null，当请求不成功时ErrorStatus为Obj
     */
    getLive(
      district: string,
      callback: (errorStatus: any, result: AMap$WeatherLiveResult) => void
    ): void;

    /**
     * 查询四天预报天气，包括查询当天天气信息
     * @param district 支持城市名称/区域编码（如：“杭州市”/“330100”）
     * @param callback 当请求成功时ErrorStatus为null，当请求不成功时ErrorStatus为Obj
     */
    getForecast(
      district: string,
      callback: (errorStatus: any, result: AMap$WeatherForecastResult) => void
    ): void;
  }

  declare interface AMap$Tip {
    name: string;
    district: string;
    adcode: string;
  }

  declare interface AMap$AutocompleteResult {
    info: string;
    count: number;
    tips: AMap$Tip[];
  }

  declare class AMap$Autocomplete {
    constructor(opts: {
      type?: string,
      city?: string,
      datatype?: string,
      citylimit?: boolean,
      input?: string
    }): this;
    search(
      keyword: string,
      callback: (
        status: string,
        result: string | AMap$AutocompleteResult
      ) => void
    ): void;
  }

  declare interface AMap$SelectChangeEvent {
    type: string;
    id: string;
    marker: AMap$Marker;
    listElement: HTMLLIElement;
    data: AMap$Poi;
  }

  declare interface AMap$PoiList {
    pois: AMap$Poi[];
    pageIndex: number;
    pageSize: number;
    count: number;
  }

  declare interface AMap$CityInfo {
    name: string;
    citycode: string;
    adcode: string;
    count: number;
  }

  declare interface AMap$SearchResult {
    info: string;
    poiList: AMap$PoiList;
    keywordList: string[];
    cityList: AMap$CityInfo[];
  }

  declare interface AMap$Photo {
    title: string;
    url: string;
  }

  declare interface AMap$Content {
    id: string;
    name: string;
  }

  declare interface AMap$Discount {
    title: string;
    detail: string;
    start_time: string;
    end_time: string;
    sold_num: string;
    photos: AMap$Photo[];
    url: string;
    provider: string;
  }

  declare interface AMap$Groupbuy {
    title: string;
    type_code: string;
    type: string;
    detail: string;
    stime: string;
    etime: string;
    count: number;
    sold_num: number;
    original_price: number;
    groupbuy_price: number;
    discount: number;
    ticket_address: string;
    ticket_tel: string;
    photos: AMap$Photo[];
    url: string;
    provider: string;
  }

  declare class AMap$PlaceSearch {
    constructor(opts: {
      city?: string,
      citylimit?: boolean,
      children?: number,
      type?: string,
      lang?: string,
      pageSize?: number,
      pageIndex?: number,
      extensions?: string,
      map?: AMap$Map,
      panel?: string | HTMLElement,
      showCover?: boolean,
      renderStyle?: string,
      autoFitView?: boolean
    }): this;
    search(
      keyword: string,
      callback: (status: string, result: string | AMap$SearchResult) => void
    ): void;
    searchNearBy(
      keyword: string,
      center: AMap$LngLat,
      radius: number,
      callback: (status: string, result: string | AMap$SearchResult) => void
    ): void;
    searchInBounds(
      keyword: string,
      bounds: AMap$Bounds | AMap$Polygon,
      callback: (status: string, result: string | AMap$SearchResult) => void
    ): void;
    getDetails(
      POIID: string,
      callback: (status: string, result: string | AMap$SearchResult) => void
    ): void;
    setType(type: string): void;
    setCityLimit(p: boolean): void;
    setPageIndex(pageIndex: number): void;
    setPageSize(setPageSize: number): void;
    setCity(city: string): void;
    setLang(lang: string): string;
    getLang(): string;
    clear(): void;
    poiOnAMAP(obj: any): void;
    detailOnAMAP(obj: any): void;
  }

  declare interface AMap$DistrictSearchOptions {
    level: string;
    showbiz?: boolean;
    extensions?: string;
    subdistrict?: number;
  }

  declare interface AMap$DistrictSearchResult {
    info: string;
    districtList: AMap$District[];
  }

  declare class AMap$DistrictSearch {
    constructor(opts: AMap$DistrictSearchOptions): this;
    search(
      keywords: string,
      callback?: (
        status: string,
        result: string | AMap$DistrictSearchResult
      ) => void,
      opts?: AMap$DistrictSearchOptions
    ): void;
    setLevel(level: string): void;
    setSubdistrict(district: number): void;
  }
}
