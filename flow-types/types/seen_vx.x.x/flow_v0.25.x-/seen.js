declare module "seen" {
  /**
   * The animator class is useful for creating an animation loop. We supply pre and post events for apply animation changes between frames.
   */
  declare export class Animator {
    dispatch: Events$Dispatcher;
    timestamp: number;
    frameDelay: number | null;
    constructor(): this;
    animateFrame(): this;
    frame(t?: boolean): this;
    onAfter(handler: FrameHandler): this;
    onBefore(handler: FrameHandler): this;
    onFrame(handler: FrameHandler): this;
    start(): this;
    stop(): this;
  }
  declare export interface FrameHandler {
    (timestamp: number, deltaTimestamp: number): void;
  }

  /**
   * The Bounds object contains an axis-aligned bounding box.
   */
  declare export class Bounds {
    constructor(): this;
    add(p: Point): this;
    center(): Point;
    contains(p: Point): boolean;
    copy(): this;
    depth(): number;
    height(): number;
    intersect(box: Bounds): this;
    maxX(): number;
    maxY(): number;
    maxZ(): number;
    minX(): number;
    minY(): number;
    minZ(): number;
    pad(x: number, y: number, z: number): this;
    reset(): this;
    valid(): boolean;
    width(): number;
    static points(points: Point[]): Bounds;
    static xywh(x: number, y: number, w: number, h: number): Bounds;
    static xyzwhd(
      x: number,
      y: number,
      z: number,
      w: number,
      h: number,
      d: number
    ): Bounds;
  }

  /**
   * The Camera model contains all three major components of the 3D to 2D tranformation.
   *
   * First, we transform object from world-space (the same space that the coordinates of surface points are in after all their transforms are applied) to camera space. Typically, this will place all
   * viewable objects into a cube with coordinates: x = -1 to 1, y = -1 to 1, z = 1 to 2
   *
   * Second, we apply the projection trasform to create perspective parallax and what not.
   *
   * Finally, we rescale to the viewport size.
   *
   * These three steps allow us to easily create shapes whose coordinates match up to screen coordinates in the z = 0 plane.
   */
  declare export class Camera mixins Transformable {
    projection: Matrix;
    defaults: {
      projection: Matrix
    };
    constructor(transform?: Matrix): this;
  }
  declare export class CanvasCirclePainter mixins CanvasStyler {
    circle(
      center: {
        x: number,
        y: number
      },
      radius: number
    ): CanvasCirclePainter;
  }
  declare export class CanvasLayerRenderContext mixins RenderLayerContext {
    constructor(ctx: CanvasRenderingContext2D): this;
    circle(): CanvasCirclePainter;
    path(): CanvasPathPainter;
    rect(): CanvasRectPainter;
    text(): CanvasTextPainter;
  }
  declare export class CanvasPathPainter mixins CanvasStyler {
    path(points: Point[]): this;
  }
  declare export class CanvasRectPainter mixins CanvasStyler {
    rect(width: number, height: number): this;
  }
  declare export class CanvasRenderContext mixins RenderContext {
    el: HTMLCanvasElement;
    ctx: CanvasRenderingContext2D;
    constructor(elementOrId: string | HTMLElement): this;
    layer(layer: RenderLayerContext): this;
    reset(): void;
  }
  declare export class CanvasStyler {
    constructor(ctx: CanvasRenderingContext2D): this;
    draw(style?: {
      stroke?: string,
      "stroke-width"?: number,
      "text-anchor"?: string
    }): this;
    fill(style?: {
      fill?: string,
      "fill-opacity"?: number,
      "text-anchor"?: string
    }): this;
  }
  declare export class CanvasTextPainter {
    constructor(ctx: CanvasRenderingContext2D): this;
    fillText(
      m: Matrix,
      text: string,
      style?: {
        font: string,
        fill?: string,
        "text-anchor"?: string
      }
    ): this;
  }

  /**
   * Color objects store RGB and Alpha values from 0 to 255.
   */
  declare export class Color {
    r: number;
    g: number;
    b: number;
    a: number;
    constructor(r?: number, g?: number, b?: number, a?: number): this;
    addChannels(c: Color): this;
    clamp(min?: number, max?: number): this;
    copy(): this;
    hex(): string;
    minChannels(c: Color): this;
    multiplyChannels(c: Color): this;
    offset(n: number): this;
    scale(n: number): this;
    style(): string;
  }

  /**
   * Adds simple mouse drag eventing to a DOM element. A ‘drag’ event is emitted as the user is dragging their mouse. This is the easiest way to add mouse- look or mouse-rotate to a scene.
   */
  declare export class Drag {
    el: HTMLElement;
    inertia: boolean;
    dispatch: Events$Dispatcher;
    defaults: {
      inertia: boolean
    };
    constructor(
      elementOrId: string | HTMLElement,
      options?: {
        inertia?: boolean
      }
    ): this;
    on(
      type: string,
      listener: (e: {
        offset: number[],
        offsetRelative: number[]
      }) => void
    ): Events$Dispatcher;
  }
  declare export class FillLayer mixins RenderLayer {
    constructor(width: number, height: number, fill: string): this;
    render(context: RenderLayerContext): void;
  }
  declare export class Grad {
    x: number;
    y: number;
    z: number;
    constructor(x: number, y: number, z: number): this;
    dot(x: number, y: number, z: number): number;
  }

  /**
   * A class for computing mouse interia for interial scrolling
   */
  declare export class InertialMouse {
    xy: number[];
    constructor(): this;
    damp(): this;
    get(): [number, number];
    reset(): this;
    update(xy: [number, number]): this;
    static inertiaExtinction: number;
    static inertiaMsecDelay: number;
    static smoothingTimeout: number;
  }
  declare export interface LightOptions {
    point?: Point;
    color?: Color;
    intensity?: number;
    normal?: Point;
    enabled?: boolean;
  }

  /**
   * This model object holds the attributes and transformation of a light source.
   */
  declare export class Light mixins Transformable {
    type: string;
    point: Point;
    color: Color;
    intensity: number;
    normal: Point;
    enabled: boolean;
    id: string;
    defaults: LightOptions;
    constructor(
      type: "point" | "directional" | "ambient",
      options?: LightOptions
    ): this;
    render(): void;
  }

  /**
   * The LightRenderModel stores pre-computed values necessary for shading surfaces with the supplied Light.
   */
  declare export class LightRenderModel {
    colorIntensity: Color;
    type: string;
    intensity: number;
    point: Point;
    origin: Point;
    normal: Point;
    constructor(light: Light, transform: Matrix): this;
  }
  declare export interface MaterialOptions {
    color?: Color;
    metallic?: boolean;
    specularColor?: Color;
    specularExponent?: number;
    shader?: Shader;
  }

  /**
   * Material objects hold the attributes that desribe the color and finish of a surface.
   */
  declare export class Material {
    color: Color;
    metallic: boolean;
    specularColor: Color;
    specularExponent: number;
    shader: Shader;
    defaults: MaterialOptions;
    constructor(color?: Color, options?: MaterialOptions): this;
    render(lights?: Light[], shader?: Shader, renderData?: RenderModel): Color;
    static create(value?: Material | Color | string): Material;
  }

  /**
   * The Matrix class stores transformations in the scene. These include: (1) Camera Projection and Viewport transformations. (2) Transformations of any Transformable type object, such as Shapes or
   * Models
   *
   * Most of the methods on Matrix are destructive, so be sure to use .copy() when you want to preserve an object’s value.
   */
  declare export class Matrix {
    m: number[];
    baked: number[];
    constructor(m?: number[]): this;
    bake(m?: number[]): this;
    copy(): this;
    matrix(m: number[]): this;
    multiply(b: Matrix): this;
    reset(): this;
    rotx(theta: number): this;
    roty(theta: number): this;
    rotz(theta: number): this;
    scale(x?: number, y?: number, z?: number): this;
    translate(x?: number, y?: number, z?: number): this;
    transpose(): this;
  }
  declare export class Mocap {
    bvh: any;
    constructor(bvh?: any): this;
    createMocapModel(shapeFactory?: () => Shape): MocapModel;
    static DEFAULT_SHAPE_FACTORY(joint?: any, endpoint?: Point): Shape;
    static parse(source: string): Mocap;
  }
  declare export class MocapAnimator mixins Animator {
    constructor(mocap: MocapModel): this;
    renderFrame(): void;
  }
  declare export class MocapModel {
    constructor(model: Model, frames: any[], frameDelay?: number): this;
    applyFrameTransforms(frameIndex: number): number;
  }

  /**
   * The object model class. It stores Shapes, Lights, and other Models as well as a transformation matrix.
   *
   * Notably, models are hierarchical, like a tree. This means you can isolate the transformation of groups of shapes in the scene, as well as create chains of transformations for creating, for
   * example, articulated skeletons.
   */
  declare export class Model mixins Transformable {
    constructor(): this;
    add(...args: Array<Shape | Model | Light>): this;
    append(): this;
    eachRenderable(
      lightFn: (light: Light, matrix?: Matrix) => Model,
      shapeFn: (
        item: Shape | Model,
        lightModels?: Model[],
        matrix?: Matrix
      ) => any
    ): void;
    eachShape(f: (shape: Shape) => any): void;
    remove(...args: Array<Shape | Model | Light>): void;
  }
  declare export interface MouseEventOptions {
    dragStart?: EventListener;
    drag?: EventListener;
    dragEnd?: EventListener;
    mouseMove?: EventListener;
    mouseDown?: EventListener;
    mouseUp?: EventListener;
    mouseWheel?: EventListener;
  }

  /**
   * An event dispatcher for mouse and drag events on a single dom element. The available events are 'dragStart', 'drag', 'dragEnd', 'mouseMove', 'mouseDown', 'mouseUp', 'mouseWheel'
   */
  declare export class MouseEvents {
    el: HTMLElement;
    dispatch: Events$Dispatcher;
    constructor(
      elementOrId: string | HTMLElement,
      options?: MouseEventOptions
    ): this;
    attach(): void;
    detach(): void;
  }

  /**
   * Parser for Wavefront .obj files
   *
   * Note: Wavefront .obj array indicies are 1-based.
   */
  declare export class ObjParser {
    vertices: number[][];
    faces: number[][];
    commands: {
      v: (v: any) => any,
      f: (f: any) => any
    };
    constructor(): this;
    mapFacePoints(faceMap: (points: Point[]) => any): void;
    parse(contents: string): void;
  }

  /**
   * Each Painter overrides the paint method. It uses the supplied RenderLayerContext‘s builders to create and style the geometry on screen.
   */
  declare export class Painter {
    constructor(): this;
    paint(renderModel: RenderModel, context: RenderLayerContext): void;
  }
  declare export class PathPainter mixins Painter {}

  /**
   * The Point object contains x,y,z, and w coordinates. Points support various arithmetic operations with other Points, scalars, or Matrices.
   *
   * Most of the methods on Point are destructive, so be sure to use .copy() when you want to preserve an object’s value.
   */
  declare export class Point {
    x: number;
    y: number;
    z: number;
    w: number;
    constructor(x?: number, y?: number, z?: number, w?: number): this;
    add(q: Point): this;
    copy(): this;
    cross(q: Point): this;
    divide(n: number): this;
    dot(q: Point): number;
    magnitude(): number;
    magnitudeSquared(): number;
    multiply(n: number): this;
    normalize(): this;
    perpendicular(): this;
    round(): this;
    set(p: Point): this;
    subtract(q: Point): this;
    transform(matrix: Matrix): this;
    translate(x: number, y: number, z: number): this;
  }

  /**
   * A Quaterionion class for computing quaterion multiplications. This creates more natural mouse rotations.
   */
  declare export class Quaternion {
    q: Point;
    constructor(): this;
    multiply(q: Point): this;
    toMatrix(): Matrix;
    static axisAngle(
      x: number,
      y: number,
      z: number,
      angleRads: number
    ): Quaternion;
    static pixelsPerRadian: number;
    static pointAngle(p: Point, angleRads: number): Quaternion;
    static xyToTransform(x: number, y: number): Matrix;
  }
  declare export class RenderAnimator mixins Animator {}

  /**
   * The RenderContext uses RenderModels produced by the scene’s render method to paint the shapes into an HTML element. Since we support both SVG and Canvas painters, the RenderContext and
   * RenderLayerContext define a common interface.
   */
  declare export class RenderContext {
    layers: RenderLayerContext[];
    constructor(): this;
    animate(): RenderAnimator;
    cleanup(): void;
    layer(layer: RenderLayerContext): this;
    render(): this;
    reset(): void;
    sceneLayer(scene: Scene): this;
  }
  declare export class RenderLayer {
    constructor(): this;
    render(context: RenderLayerContext): void;
  }

  /**
   * The RenderLayerContext defines the interface for producing painters that can paint various things into the current layer.
   */
  declare export class RenderLayerContext {
    constructor(): this;
    circle(): any;
    cleanup(): void;
    path(): any;
    rect(): any;
    reset(): void;
    text(): any;
  }

  /**
   * The RenderModel object contains the transformed and projected points as well as various data needed to shade and paint a Surface.
   *
   * Once initialized, the object will have a constant memory footprint down to Number primitives. Also, we compare each transform and projection to prevent unnecessary re-computation.
   *
   * If you need to force a re-computation, mark the surface as ‘dirty’.
   */
  declare export class RenderModel {
    constructor(
      surface: Surface,
      transform: Matrix,
      projection: Matrix,
      viewport: Matrix
    ): this;
    update(transform: Matrix, projection: Matrix, viewport: Matrix): void;
  }

  /**
   * A Scene is the main object for a view of a scene.
   */
  declare export class Scene {
    constructor(options?: SceneOptions): this;
    defaults(): SceneOptions;
    flushCache(): void;
    render(): Transformable[];
  }
  declare export interface SceneOptions {
    model?: Model;
    camera?: Camera;
    viewport?: Viewport;
    shader?: Shader;
    cullBackfaces?: boolean;
    fractionalPoints?: boolean;
    cache?: boolean;
  }
  declare export class SceneLayer mixins RenderLayer {
    model: Model;
    camera: Camera;
    viewport: Viewport;
    shader: Shader;
    cullBackfaces: boolean;
    fractionalPoints: boolean;
    cache: boolean;
    constructor(scene: Scene): this;
    render(context: RenderLayerContext): void;
  }

  /**
   * The Shader class is the base class for all shader objects.
   */
  declare export class Shader {
    constructor(): this;
    shade(lights: Light[], renderModel: RenderModel, material: Material): void;
  }

  /**
   * The Phong shader implements the Phong shading model with a diffuse, specular, and ambient term.
   *
   * See https://en.wikipedia.org/wiki/Phong_reflection_model for more information
   */
  declare export class Phong mixins Shader {}

  /**
   * The DiffusePhong shader implements the Phong shading model with a diffuse and ambient term (no specular).
   */
  declare export class DiffusePhong mixins Shader {}

  /**
   * The Ambient shader colors surfaces from ambient light only.
   */
  declare export class Ambient mixins Shader {}

  /**
   * The Flat shader colors surfaces with the material color, disregarding all light sources.
   */
  declare export class Flat mixins Shader {}

  /**
   * A Shape contains a collection of surface. They may create a closed 3D shape, but not necessarily. For example, a cube is a closed shape, but a patch is not.
   */
  declare export class Shape mixins Transformable {
    type: string;
    surfaces: Surface[];
    constructor(type: string, surfaces: Surface[]): this;
    eachSurface(f: (s: Surface) => void): this;
    fill(fill: string | Color): this;
    stroke(stroke: string | Color): this;
  }
  declare export class Simplex3D {
    perm: number[];
    gradP: Grad[];
    constructor(seed?: number): this;
    noise(x: number, y: number, z: number): number;
    seed(seed: number): void;
  }

  /**
   * A Surface is a defined as a planar object in 3D space. These paths don’t necessarily need to be convex, but they should be non-degenerate. This library does not support shapes with holes.
   */
  declare export class Surface {
    points: Point[];
    painter: Painter;
    id: string;
    cullBackfaces: boolean;
    dirty: boolean | null;
    fillMaterial: Material;
    strokeMaterial: Material;
    constructor(points: Point[], painter?: Painter): this;
    fill(fill: string | Color): this;
    stroke(stroke: string | Color): this;
  }
  declare export class SvgCirclePainter mixins SvgStyler {
    circle(center: Point, radius: number): this;
  }
  declare export class SvgLayerRenderContext mixins RenderLayerContext {
    constructor(group: SVGGElement): this;
    circle(): SvgCirclePainter;
    path(): SvgPathPainter;
    rect(): SvgRectPainter;
    text(): SvgTextPainter;
  }
  declare export class SvgPathPainter mixins SvgStyler {
    path(points: Point[]): this;
  }
  declare export class SvgRectPainter mixins SvgStyler {
    rect(width: number, height: number): this;
  }
  declare export class SvgRenderContext mixins RenderContext {
    svg: SVGSVGElement;
    layers: SvgLayerRenderContext[];
    constructor(svgElementOrId: string | HTMLElement): this;
  }
  declare export class SvgStyler {
    constructor(elementFactory: (name: string) => HTMLElement): this;
    clear(): this;
    draw(style?: $Shape<CSSStyleDeclaration>): this;
    fill(style?: $Shape<CSSStyleDeclaration>): this;
  }
  declare export class SvgTextPainter {
    constructor(elementFactory: (name: string) => HTMLElement): this;
    fillText(
      m: number[],
      text: string,
      style?: $Shape<CSSStyleDeclaration>
    ): void;
  }
  declare export class TextPainter mixins Painter {}

  /**
   * Transformable base class extended by Shape and Model.
   *
   * The advantages of keeping transforms in Matrix form are (1) lazy computation of point position (2) ability combine hierarchical transformations easily (3) ability to reset transformations to an
   * original state.
   *
   * Resetting transformations is especially useful when you want to animate interpolated values. Instead of computing the difference at each animation step, you can compute the global interpolated
   * value for that time step and apply that value directly to a matrix (once it is reset).
   */
  declare export class Transformable {
    baked: number[];
    m: Matrix;
    constructor(): this;
    transform(m: Matrix): this;
    bake(m?: number[]): this;
    matrix(m: number[]): this;
    reset(): this;
    rotx(theta: number): this;
    roty(theta: number): this;
    rotz(theta: number): this;
    scale(x?: number, y?: number, z?: number): this;
    translate(x?: number, y?: number, z?: number): this;
  }

  /**
   * A transition object to manage to animation of shapes
   */
  declare export class Transition {
    duration: number;
    defaults: {
      duration: number
    };
    constructor(options?: {
      duration?: number
    }): this;
    firstFrame(): void;
    frame(): void;
    lastFrame(): void;
    update(t?: number): boolean;
  }

  /**
   * A seen.Animator for updating seen.Transtions. We include keyframing to make sure we wait for one transition to finish before starting the next one.
   */
  declare export class TransitionAnimator mixins Animator {
    dispatch: Events$Dispatcher;
    timestamp: number;
    frameDelay: number | null;
    queue: Transition[][];
    transitions: Transition[];
    add(txn: Transition): void;
    keyframe(): void;
    update(t?: number): void;
  }

  /**
   * Adds simple mouse wheel eventing to a DOM element. A ‘zoom’ event is emitted as the user is scrolls their mouse wheel.
   */
  declare export class Zoom {
    el: HTMLElement;
    speed: number;
    dispatch: Events$Dispatcher;
    defaults: {
      smooth: boolean
    };
    constructor(
      elementOrId: string | HTMLElement,
      options?: {
        smooth?: boolean
      }
    ): this;
  }
  declare export var Painters: {
    path: PathPainter,
    text: TextPainter
  };
  declare export function C(
    r?: number,
    g?: number,
    b?: number,
    a?: number
  ): Color;

  declare export function CanvasContext(
    elementOrId: string | HTMLElement,
    scene?: Scene
  ): CanvasRenderContext;

  /**
   * Create a render context for the element with the specified elementId. elementId should correspond to either an SVG or Canvas element.
   */
  declare export function Context(
    elementOrId: string | HTMLElement,
    scene?: Scene
  ): RenderContext;

  declare export function M(m?: number[]): Matrix;

  declare export function P(
    x?: number,
    y?: number,
    z?: number,
    w?: number
  ): Point;

  declare export function SvgContext(
    elementOrId: string | HTMLElement,
    scene?: Scene
  ): SvgRenderContext;

  /**
   * It is not possible exactly render text in a scene with a perspective projection because Canvas and SVG support only affine transformations. So, in order to fake it, we create an affine transform
   * that approximates the linear effects of a perspective projection on an unrendered planar surface that represents the text’s shape. We can use this transform directly in the text painter to warp
   * the text.
   *
   * This fake projection will produce unrealistic results with large strings of text that are not broken into their own shapes.
   */
  declare export var Affine: {
    INITIAL_STATE_MATRIX: number[][],
    ORTHONORMAL_BASIS(): Point[],
    solveForAffineTransform(points: Point[]): number[]
  };
  declare export var BvhParser: {
    SyntaxError(
      message: string,
      expected: string,
      found: string,
      location: any
    ): void,
    parse(input: string): any
  };
  declare export var Colors: {
    CSS_RGBA_STRING_REGEX: RegExp,
    black(): Color,
    gray(): Color,
    hex(hex: string): Color,
    hsl(h: number, s: number, l: number, a?: number): Color,
    parse(str: string): Color,
    randomShape(shape: Shape, sat?: number, lit?: number): void,
    randomSurfaces(shape: Shape, sat?: number, lit?: number): void,
    randomSurfaces2(
      shape: Shape,
      drift?: number,
      sat?: number,
      lit?: number
    ): void,
    rgb(r: number, g: number, b: number, a?: number): Color,
    white(): Color
  };
  declare var Events: typeof npm$namespace$Events;

  declare var npm$namespace$Events: {
    dispatch: typeof Events$dispatch,
    Event: typeof Events$Event,

    Dispatcher: typeof Events$Dispatcher
  };

  /**
   * The Dispatcher class. These objects have methods that can be invoked like dispatch.eventName(). Listeners can be registered with dispatch.on('eventName.uniqueId', callback). Listeners can be
   * removed with dispatch.on('eventName.uniqueId', null). Listeners can also be registered and removed with dispatch.eventName.on('name', callback).
   *
   * Note that only one listener with the name event name and id can be registered at once. If you to generate unique ids, you can use the seen.Util.uniqueId() method.
   */
  declare class Events$Dispatcher {
    constructor(): this;
    on(type: string, listener: EventListener): Events$Dispatcher;
  }

  /**
   * Return a new dispatcher that creates event types using the supplied string argument list. The returned Dispatcher will have methods with the names of the event types.
   */
  declare function Events$dispatch(): Events$Dispatcher;

  declare function Events$Event(): void;

  declare export var Lights: {
    ambient(opts?: LightOptions): Light,
    directional(opts?: LightOptions): Light,
    point(opts?: LightOptions): Light
  };

  /**
   * A few useful Matrix objects.
   */
  declare export var Matrices: {
    flipX(): Matrix,
    flipY(): Matrix,
    flipZ(): Matrix,
    identity(): Matrix
  };
  declare export var Models: {
    default(): Model
  };

  /**
   * A few useful Point objects. Be sure that you don’t invoke destructive methods on these objects.
   */
  declare export var Points: {
    X(): Point,
    Y(): Point,
    Z(): Point,
    ZERO(): Point
  };

  /**
   * These projection methods return a 3D to 2D Matrix transformation. Each projection assumes the camera is located at (0,0,0).
   */
  declare export var Projections: {
    ortho(
      left?: number,
      right?: number,
      bottom?: number,
      top?: number,
      near?: number,
      far?: number
    ): Matrix,
    perspective(
      left?: number,
      right?: number,
      bottom?: number,
      top?: number,
      near?: number,
      far?: number
    ): Matrix,
    perspectiveFov(fovyInDegrees?: number, front?: number): Matrix
  };

  /**
   * These shading functions compute the shading for a surface. To reduce code duplication, we aggregate them in a utils object.
   */
  declare export var ShaderUtils: {
    applyAmbient(c: Color, light: Light): void,
    applyDiffuse(
      c: Color,
      light: Light,
      lightNormal: Point,
      surfaceNormal: Point,
      material?: Material
    ): void,
    applyDiffuseAndSpecular(
      c: Color,
      light: Light,
      lightNormal: Point,
      surfaceNormal: Point,
      material: Material
    ): void
  };
  declare export var Shaders: {
    ambient(): Ambient,
    diffuse(): DiffusePhong,
    flat(): Flat,
    phong(): Phong
  };

  /**
   * Shape primitives and shape-making methods
   */
  declare export var Shapes: {
    arrow(
      thickness?: number,
      tailLength?: number,
      tailWidth?: number,
      headLength?: number,
      headPointiness?: number
    ): Shape,
    cube(): Shape,
    custom(s: Shape): Shape,
    extrude(points: Point[], offset: Point): Shape,
    icosahedron(): Shape,
    mapPointsToSurfaces(points: Point[], coordinateMap: number[][]): Surface[],
    obj(objContents: string, cullBackfaces?: boolean): Shape,
    patch(nx?: number, ny?: number): Shape,
    path(points: Point[]): Shape,
    pipe(
      point1: Point,
      point2: Point,
      radius?: number,
      segments?: number
    ): Shape,
    pyramid(): Shape,
    rectangle(point1: Point, point2: Point): Shape,
    sphere(subdivisions?: number): Shape,
    tetrahedron(): Shape,
    text(text: string, surfaceOptions?: $Shape<Surface>): Shape,
    unitcube(): Shape
  };

  /**
   * Utility methods
   */
  declare export var Util: {
    arraysEqual<T>(a: T[], b: T[]): boolean,
    defaults<T>(obj: T, opts: $Shape<T>, defaults: $Shape<T>): void,
    element(elementOrId: string | HTMLElement): HTMLElement,
    uniqueId(prefix?: string): string
  };
  declare export interface Viewport {
    prescale: Matrix;
    postscale: Matrix;
  }
  declare export var Viewports: {
    center(width?: number, height?: number, x?: number, y?: number): Viewport,
    origin(width?: number, height?: number, x?: number, y?: number): Viewport
  };

  /**
   * A global window event dispatcher. Attaches listeners only if window is defined.
   */
  declare export var WindowEvents: {
    on(type: string, listener: EventListener): Events$Dispatcher
  };
}
