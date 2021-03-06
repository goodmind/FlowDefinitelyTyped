declare module "kineticjs" {
  declare var npm$namespace$Kinetic: {
    Node: typeof Kinetic$Node,
    Container: typeof Kinetic$Container,
    Stage: typeof Kinetic$Stage,
    Layer: typeof Kinetic$Layer,
    Shape: typeof Kinetic$Shape,
    Rect: typeof Kinetic$Rect,
    Circle: typeof Kinetic$Circle,
    Ellipse: typeof Kinetic$Ellipse,
    Group: typeof Kinetic$Group,
    Collection: typeof Kinetic$Collection,
    Image: typeof Kinetic$Image,
    Line: typeof Kinetic$Line,
    Path: typeof Kinetic$Path,
    RegularPolygon: typeof Kinetic$RegularPolygon,
    Sprite: typeof Kinetic$Sprite,
    Star: typeof Kinetic$Star,
    Text: typeof Kinetic$Text,
    TextPath: typeof Kinetic$TextPath,
    Animation: typeof Kinetic$Animation
  };
  declare var Kinetic$Node: {
    new(config: Kinetic$ObjectOptionsConfig): Kinetic$INode
  };

  declare interface Kinetic$INode {
    cache(cacheConfig?: any): Kinetic$INode;
    clone(attrs: any): Kinetic$INode;
    destroy(): void;
    draw(): Kinetic$INode;
    drawBuffer(): any;
    drawScene(): any;
    getAbsoluteOpacity(): number;
    getAbsolutePosition(): Kinetic$Vector2d;
    getAbsoluteTransform(): any;
    getAbsoluteZIndex(): number;
    getAttrs(): any;
    getDragBounds(): any;
    getDragConstraint(): any;
    getDraggable(): boolean;
    getLayer(): any;
    getLevel(): number;
    getListening(): any;
    getName(): string;
    getOffset(): Kinetic$Vector2d;
    getOpacity(): number;
    getParent(): any;
    getPosition(): Kinetic$Vector2d;
    getRotation(): number;
    getRotationDeg(): number;
    getScale(): Kinetic$Vector2d;
    getScaleX(): number;
    getScaleY(): number;
    getSize(): Kinetic$ISize;
    getStage(): Kinetic$IStage;
    getTransform(): any;
    getZIndex(): number;
    hide(): void;
    isDraggable(): boolean;
    isDragging(): boolean;
    isListening(): boolean;
    move(change: {
      x: number,
      y: number
    }): void;
    moveDown(): void;
    moveTo(newContainer: Kinetic$IContainer): void;
    moveToBottom(): void;
    moveToTop(): void;
    moveUp(): void;
    name(): string;
    name(name: string): void;
    remove(): any;
    rotate(theta: number): void;
    rotateDeg(deg: number): void;
    on(typesStr: string, handler: (data: any) => any): void;
    off(typesStr: string): void;
    fire(typeStr: string, event?: any, bubble?: boolean): any;
    setAbsolutePosition(pos: Kinetic$Vector2d): void;
    setAttrs(config: any): void;
    setDefaultAttrs(config: any): void;
    setDragBounds(bounds: any): void;
    setDragConstraint(constraint: string): void;
    setDraggable(draggable: boolean): void;
    setListening(listening: boolean): void;
    setOffset(offset: Kinetic$Vector2d): any;
    setOpacity(opacity: any): void;
    setPosition(position: Kinetic$Vector2d): void;
    setRotation(theta: number): void;
    setRotationDeg(rotDeg: number): void;
    setScale(scale: Kinetic$Vector2d): void;
    setScaleX(scale: number): void;
    setScaleY(scale: number): void;
    setSize(size: Kinetic$ISize): any;
    setZIndex(zIndex: number): void;
    show(): void;
    simulate(eventType: string): void;
    toDataURL(config: any): void;
    transitionTo(config: any): void;
    width(): number;
    width(width: number): void;
    getWidth(): any;
    setWidth(width: number): void;
    height(): number;
    height(height: number): void;
    getHeight(): any;
    setHeight(height: number): any;
    id(): string;
    id(id: string): void;
    getId(): string;
    setId(id: string): void;
    x(): number;
    x(x: number): void;
    y(): number;
    y(y: number): void;
    getX(): number;
    setX(x: number): void;
    getY(): number;
    setY(y: number): void;
  }

  declare var Kinetic$Container: {
    new(config: any): Kinetic$IContainer
  };

  declare type Kinetic$IContainer = {
    add(child: Kinetic$INode): any,
    clone(attrs: any): Kinetic$IContainer,
    destroyChildren(): Kinetic$IContainer,
    find(selector: string): any,
    get(selector: any): any,
    getChildren(): Kinetic$INode[],
    getIntersections(point: any): any,
    isAncestorOf(node: any): any,
    removeChildren(): any
  } & INode;

  declare var Kinetic$Stage: {
    new(config: Kinetic$StageConfig): Kinetic$IStage
  };

  declare type Kinetic$IStage = {
    add(layer: Kinetic$ILayer): any,
    clear(): any,
    getContainer(): HTMLElement,
    getContent(): HTMLElement,
    getDOM(): HTMLElement,
    getHeight(): number,
    getIntersection(pos: any): any,
    getMousePosition(evt?: Event): any,
    getPointerPosition(): Kinetic$Vector2d,
    getStage(): Kinetic$IStage,
    getTouchPosition(evt?: Event): any,
    getUserPosition(evt?: Event): any,
    getWidth(): number,
    load(JSON: any): any,
    reset(): any,
    setHeight(height: number): any,
    setWidth(width: number): any,
    toDataURL(config: any): any,
    toImage(config: any, callback: () => any): any,
    toJSON(): any
  } & IContainer;

  declare var Kinetic$Layer: {
    new(config?: Kinetic$LayerConfig): Kinetic$ILayer
  };

  declare type Kinetic$ILayer = {
    afterDraw(handler: () => any): any,
    beforeDraw(handler: () => any): any,
    clear(): any,
    getCanvas(): Kinetic$ICanvas,
    getClearBeforeDraw(): any,
    getContext(): CanvasRenderingContext2D,
    remove(): any,
    setClearBeforeDraw(clearBeforeDraw: boolean): any,
    toDataURL(config: any): any
  } & IContainer;

  declare interface Kinetic$ICanvas {
    _canvas: HTMLCanvasElement;
    getPixelRatio(): number;
    height: number;
    setPixelRatio(pixelRatio: number): any;
    width: number;
  }

  declare var Kinetic$Shape: {
    new(config: any): Kinetic$IShape
  };

  declare type Kinetic$IShape = {
    applyLineJoin(): void,
    drawImage(): void,
    fill(): void,
    fillText(text: string): void,
    getCanvas(): Kinetic$ICanvas,
    getContext(): any,
    getDrawFunc(): any,
    getFill(): string,
    getLineJoin(): any,
    getShadow(): any,
    getStroke(): any,
    getStrokeWidth(): number,
    intersects(point: any): boolean,
    setDrawFunc(drawFunc: () => any): any,
    setFill(fill: string): any,
    setLineJoin(): any,
    setShadow(config: any): any,
    setSize(size: Kinetic$ISize): any,
    setStroke(stroke: string): any,
    setStrokeWidth(strokeWidth: number): any,
    stroke(): any,
    strokeText(text: string): any
  } & INode;

  declare var Kinetic$Rect: {
    new(config: Kinetic$RectConfig): Kinetic$IRect
  };

  declare type Kinetic$IRect = {
    getCornerRadius(): number,
    getHeight(): number,
    getWidth(): number,
    setCornerRadius(radius: number): any,
    setHeight(height: number): any,
    setWidth(width: number): any
  } & IShape;

  declare var Kinetic$Circle: {
    new(config: Kinetic$CircleConfig): Kinetic$ICircle
  };

  declare type Kinetic$ICircle = {
    getRadius(): number,
    setRadius(radius: number): any
  } & IShape;

  declare var Kinetic$Ellipse: {
    new(config: Kinetic$CircleConfig): Kinetic$IEllipse
  };

  declare type Kinetic$IEllipse = {
    getRadius(): number,
    setRadius(radius: number): any
  } & IShape;

  declare var Kinetic$Group: {
    new(config?: Kinetic$ObjectOptionsConfig): Kinetic$IGroup
  };

  declare type Kinetic$IGroup = {} & IContainer;

  declare var Kinetic$Collection: {
    new(): Kinetic$ICollection
  };

  declare interface Kinetic$ICollection {
    apply(method: Function, val: any): any;
    each(func: () => any): any;
  }

  declare var Kinetic$Image: {
    new(config?: Kinetic$ImageConfig): Kinetic$IImage
  };

  declare type Kinetic$IImage = {
    applyFilter(config: any): any,
    clearImageBuffer(): any,
    createImageBuffer(callback: () => any): any,
    getCrop(): any,
    getFilter(): any,
    getHeight(): number,
    getImage(): Kinetic$IImage,
    getWidth(): number,
    setCrop(config: Kinetic$CropConfig): any,
    setFilter(config: any): any,
    setHeight(height: number): any,
    setImage(image: Kinetic$IImage): any,
    setWidth(width: number): any
  } & IShape;

  declare var Kinetic$Line: {
    new(config: Kinetic$LineConfig): Kinetic$ILine
  };

  declare type Kinetic$ILine = {
    getDashArray(): any,
    getLineCap(): any,
    getPoints(): any,
    setDashArray(dashArray: any): any,
    setLineCap(lineCap: string): any,
    setPoints(can: any[]): any
  } & IShape;

  declare var Kinetic$Path: {
    new(config: Kinetic$PathConfig): Kinetic$IPath,
    parsePathData(data: string): any
  };

  declare type Kinetic$IPath = {
    getData(): string,
    setData(SVG: string): any
  } & IShape;

  declare var Kinetic$RegularPolygon: {
    new(config: Kinetic$RegularPolygonConfig): Kinetic$IRegularPolygon
  };

  declare type Kinetic$IRegularPolygon = {
    getRadius(): number,
    getSides(): number,
    setRadius(radius: number): any,
    setSides(sides: number): any
  } & IShape;

  declare var Kinetic$Sprite: {
    new(config: Kinetic$SpriteConfig): Kinetic$ISprite
  };

  declare type Kinetic$ISprite = {
    afterFrame(index: number, func: () => any): any,
    getAnimation(): string,
    getAnimations(): any,
    getIndex(): number,
    setAnimation(anim: string): any,
    setAnimations(animations: any): any,
    setIndex(index: number): any,
    start(): any,
    stop(): any
  } & IShape;

  declare var Kinetic$Star: {
    new(config: Kinetic$StarConfig): Kinetic$IStar
  };

  declare type Kinetic$IStar = {
    getInnerRadius(): number,
    getNumPoints(): number,
    getOuterRadius(): number,
    setInnerRadius(radius: number): any,
    setNumPoints(points: number): any,
    setOuterRadius(radius: number): any
  } & IShape;

  declare var Kinetic$Text: {
    new(config: Kinetic$TextConfig): Kinetic$IText
  };

  declare type Kinetic$IText = {
    getAlign(): string,
    getBoxHeight(): number,
    getBoxWidth(): number,
    getFontFamily(): string,
    getFontSize(): number,
    getFontStyle(): string,
    getHeight(): number,
    getLineHeight(): number,
    getPadding(): number,
    getShadow(): any,
    getText(): string,
    getTextFill(): any,
    getTextHeight(): number,
    getTextStroke(): any,
    getTextStrokeWidth(): number,
    getTextWidth(): number,
    getWidth(): number,
    setAlign(align: string): any,
    setFontFamily(fontFamily: string): any,
    setFontSize(fontSize: number): any,
    setFontStroke(textStroke: any): any,
    setFontStyle(fontStyle: string): any,
    setHeight(height: number): any,
    setLineHeight(lineHeight: number): any,
    setPadding(padding: number): any,
    setShadow(config: any): any,
    setText(text: string): any,
    setTextFill(textFill: any): any,
    setTextStrokeWidth(textStrokeWidth: number): any,
    setWidth(width: number): any
  } & IShape;

  declare var Kinetic$TextPath: {
    new(config: any): Kinetic$ITextPath
  };

  declare type Kinetic$ITextPath = {
    getFontFamily(): string,
    getFontSize(): number,
    getFontStyle(): string,
    getText(): string,
    getTextFill(): any,
    getTextHeight(): number,
    getTextStroke(): any,
    getTextStrokeWidth(): number,
    getTextWidth(): number,
    setFontFamily(fontFamily: string): any,
    setFontSize(fontSize: number): any,
    setFontStroke(textStroke: any): any,
    setFontStyle(fontStyle: string): any,
    setText(text: string): any,
    setTextFill(textFill: any): any,
    setTextStrokeWidth(textStrokeWidth: number): any
  } & IShape;

  declare var Kinetic$Animation: {
    new(...args: any[]): Kinetic$IAnimation
  };

  declare type Kinetic$IAnimation = {
    start(): any,
    stop(): any
  } & IContainer;

  declare interface Kinetic$CropConfig {
    x: number;
    y: number;
    width: number;
    height: number;
  }

  declare type Kinetic$StageConfig = {
    container: string,
    width: number,
    height: number
  } & ObjectOptionsConfig;

  declare type Kinetic$LayerConfig = {
    clearBeforeDraw?: boolean
  } & ObjectOptionsConfig;

  declare type Kinetic$RectConfig = {
    width?: number,
    height?: number,
    cornerRadius?: number
  } & DrawOptionsConfig &
    ObjectOptionsConfig;

  declare type Kinetic$CircleConfig = {
    radius: number
  } & DrawOptionsConfig &
    ObjectOptionsConfig;

  declare type Kinetic$ImageConfig = {
    image: any,
    width?: number,
    height?: number,
    crop?: any
  } & DrawOptionsConfig &
    ObjectOptionsConfig;

  declare type Kinetic$SpriteConfig = {
    image: any,
    animations?: any,
    animation?: any,
    frameRate?: number
  } & DrawOptionsConfig &
    ObjectOptionsConfig;

  declare type Kinetic$TextConfig = {
    text: string,
    fontSize?: number,
    fontFamily?: string,
    fontStyle?: string,
    textFill?: any,
    textStroke?: any,
    textStrokeWidth?: number,
    align?: string,
    padding?: string,
    width?: number,
    height?: number,
    lineHeight?: number,
    cornerRadius?: number
  } & DrawOptionsConfig &
    ObjectOptionsConfig;

  declare type Kinetic$LineConfig = {
    points: any,
    lineCap?: string,
    dash?: number[]
  } & DrawOptionsConfig &
    ObjectOptionsConfig;

  declare type Kinetic$RegularPolygonConfig = {
    sides: number,
    radius: number
  } & DrawOptionsConfig &
    ObjectOptionsConfig;

  declare type Kinetic$PathConfig = {
    data: string
  } & DrawOptionsConfig &
    ObjectOptionsConfig;

  declare type Kinetic$StarConfig = {
    numPoints: number,
    outerRadius: number,
    innerRadius: number
  } & DrawOptionsConfig &
    ObjectOptionsConfig;

  declare type Kinetic$CustomConfig = {
    drawFunc: () => any
  } & DrawOptionsConfig &
    ObjectOptionsConfig;

  declare interface Kinetic$DrawOptionsConfig {
    fill?: string;
    stroke?: string;
    strokeWidth?: number;
    lineJoin?: string;
    shadow?: any;
  }

  declare interface Kinetic$Vector2d {
    x: number;
    y: number;
  }

  declare interface Kinetic$ObjectOptionsConfig {
    x?: number;
    y?: number;
    visible?: boolean;
    listening?: boolean;
    id?: string;
    name?: string;
    opacity?: any;
    scale?: Kinetic$Vector2d;
    rotation?: number;
    rotationDeg?: number;
    offset?: Kinetic$Vector2d;
    draggable?: boolean;
    dragConstraint?: string;
    dragBounds?: any;
    dragBoundFunc?: (pos: Kinetic$Vector2d) => Kinetic$Vector2d;
    width?: number;
    height?: number;
  }

  declare interface Kinetic$ISize {
    width: number;
    height: number;
  }
}
