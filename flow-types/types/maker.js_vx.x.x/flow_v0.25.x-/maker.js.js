declare module "maker.js" {
  declare var npm$namespace$MakerJs: {
    round: typeof MakerJs$round,
    createRouteKey: typeof MakerJs$createRouteKey,
    travel: typeof MakerJs$travel,
    cloneObject: typeof MakerJs$cloneObject,
    extendObject: typeof MakerJs$extendObject,
    isFunction: typeof MakerJs$isFunction,
    isNumber: typeof MakerJs$isNumber,
    isObject: typeof MakerJs$isObject,
    isPoint: typeof MakerJs$isPoint,
    isPath: typeof MakerJs$isPath,
    isPathLine: typeof MakerJs$isPathLine,
    isPathCircle: typeof MakerJs$isPathCircle,
    isPathArc: typeof MakerJs$isPathArc,
    isPathArcInBezierCurve: typeof MakerJs$isPathArcInBezierCurve,
    isModel: typeof MakerJs$isModel,
    isChain: typeof MakerJs$isChain,
    version: typeof MakerJs$version,
    environmentTypes: typeof MakerJs$environmentTypes,
    environment: typeof MakerJs$environment,
    unitType: typeof MakerJs$unitType,
    pathType: typeof MakerJs$pathType
  };

  /**
   * Version info
   */
  declare var MakerJs$version: string;

  /**
   * Enumeration of environment types.
   */
  declare var MakerJs$environmentTypes: {
    BrowserUI: string,
    NodeJs: string,
    WebWorker: string,
    Unknown: string
  };

  /**
   * Current execution environment type, should be one of environmentTypes.
   */
  declare var MakerJs$environment: string;

  /**
   * String-based enumeration of unit types: imperial, metric or otherwise.
   * A model may specify the unit system it is using, if any. When importing a model, it may have different units.
   * Unit conversion function is makerjs.units.conversionScale().
   * Important: If you add to this, you must also add a corresponding conversion ratio in the unit.ts file!
   */
  declare var MakerJs$unitType: {
    Centimeter: string,
    Foot: string,
    Inch: string,
    Meter: string,
    Millimeter: string
  };

  /**
   * Numeric rounding
   *
   * Example: round to 3 decimal places
   * ```
   *      * makerjs.round(3.14159, .001); //returns 3.142
   *      * ```
   * @param n The number to round off.
   * @param accuracy Optional exemplar of number of decimal places.
   */
  declare function MakerJs$round(n: number, accuracy?: number): number;

  /**
   * Create a string representation of a route array.
   * @param route Array of strings which are segments of a route.
   * @returns String of the flattened array.
   */
  declare function MakerJs$createRouteKey(route: string[]): string;

  /**
   * Travel along a route inside of a model to extract a specific node in its tree.
   * @param modelContext Model to travel within.
   * @param routeKeyOrRoute String of a flattened route, or a string array of route segments.
   * @returns Model or Path object within the modelContext tree.
   */
  declare function MakerJs$travel(
    modelContext: MakerJs$IModel,
    routeKeyOrRoute: string | string[]
  ): {
    MakerJs$path: MakerJs$IPath | MakerJs$IModel,
    offset: MakerJs$IPoint
  };

  /**
   * Clone an object.
   * @param objectToClone The object to clone.
   * @returns A new clone of the original object.
   */
  declare function MakerJs$cloneObject<T>(objectToClone: T): T;

  /**
   * Copy the properties from one object to another object.
   *
   * Example:
   * ```
   *      * makerjs.extendObject({ abc: 123 }, { xyz: 789 }); //returns { abc: 123, xyz: 789 }
   *      * ```
   * @param target The object to extend. It will receive the new properties.
   * @param other An object containing properties to merge in.
   * @returns The original object after merging.
   */
  declare function MakerJs$extendObject(target: Object, other: Object): Object;

  /**
   * Test to see if a variable is a function.
   * @param value The object to test.
   * @returns True if the object is a function type.
   */
  declare function MakerJs$isFunction(value: any): boolean;

  /**
   * Test to see if a variable is a number.
   * @param value The object to test.
   * @returns True if the object is a number type.
   */
  declare function MakerJs$isNumber(value: any): boolean;

  /**
   * Test to see if a variable is an object.
   * @param value The object to test.
   * @returns True if the object is an object type.
   */
  declare function MakerJs$isObject(value: any): boolean;

  /**
   * An x-y point in a two-dimensional space.
   * Implemented as an array with 2 elements. The first element is x, the second element is y.
   *
   * Examples:
   * ```
   *      * var p: IPoint = [0, 0];   //typescript
   *      * var p = [0, 0];   //javascript
   *      * ```
   */
  declare interface MakerJs$IPoint {
    [index: number]: number;
  }

  /**
   * Test to see if an object implements the required properties of a point.
   * @param item The item to test.
   */
  declare function MakerJs$isPoint(item: any): boolean;

  /**
   * A measurement of extents, the high and low points.
   */
  declare interface MakerJs$IMeasure {
    /**
     * The point containing both the lowest x and y values of the rectangle containing the item being measured.
     */
    low: MakerJs$IPoint;

    /**
     * The point containing both the highest x and y values of the rectangle containing the item being measured.
     */
    high: MakerJs$IPoint;
  }

  /**
   * A measurement of extents, with a center point.
   */
  declare type MakerJs$IMeasureWithCenter = {
    /**
     * The center point of the rectangle containing the item being measured.
     */
    model$center: MakerJs$IPoint
  } & MakerJs$IMeasure;

  /**
   * A map of measurements.
   */
  declare interface MakerJs$IMeasureMap {
    [key: string]: MakerJs$IMeasure;
  }

  /**
   * A line, curved line or other simple two dimensional shape.
   */
  declare interface MakerJs$IPath {
    /**
     * The type of the path, e.g. "line", "circle", or "arc". These strings are enumerated in pathType.
     */
    type: string;

    /**
     * The main point of reference for this path.
     */
    origin: MakerJs$IPoint;

    /**
     * Optional layer of this path.
     */
    layer?: string;
  }

  /**
   * Test to see if an object implements the required properties of a path.
   * @param item The item to test.
   */
  declare function MakerJs$isPath(item: any): boolean;

  /**
   * A line path.
   *
   * Examples:
   * ```
   *      * var line: IPathLine = { type: 'line', origin: [0, 0], end: [1, 1] };   //typescript
   *      * var line = { type: 'line', origin: [0, 0], end: [1, 1] };   //javascript
   *      * ```
   */
  declare type MakerJs$IPathLine = {
    /**
     * The end point defining the line. The start point is the origin.
     */
    end: MakerJs$IPoint
  } & MakerJs$IPath;

  /**
   * Test to see if an object implements the required properties of a line.
   * @param item The item to test.
   */
  declare function MakerJs$isPathLine(item: any): boolean;

  /**
   * A circle path.
   *
   * Examples:
   * ```
   *      * var circle: IPathCircle = { type: 'circle', origin: [0, 0], radius: 7 };   //typescript
   *      * var circle = { type: 'circle', origin: [0, 0], radius: 7 };   //javascript
   *      * ```
   */
  declare type MakerJs$IPathCircle = {
    /**
     * The radius of the circle.
     */
    radius: number
  } & MakerJs$IPath;

  /**
   * Test to see if an object implements the required properties of a circle.
   * @param item The item to test.
   */
  declare function MakerJs$isPathCircle(item: any): boolean;

  /**
   * An arc path.
   *
   * Examples:
   * ```
   *      * var arc: IPathArc = { type: 'arc', origin: [0, 0], radius: 7, startAngle: 0, endAngle: 45 };   //typescript
   *      * var arc = { type: 'arc', origin: [0, 0], radius: 7, startAngle: 0, endAngle: 45 };   //javascript
   *      * ```
   */
  declare type MakerJs$IPathArc = {
    /**
     * The angle (in degrees) to begin drawing the arc, in polar (counter-clockwise) direction.
     */
    startAngle: number,

    /**
     * The angle (in degrees) to end drawing the arc, in polar (counter-clockwise) direction. May be less than start angle if it past 360.
     */
    endAngle: number
  } & MakerJs$IPathCircle;

  /**
   * Test to see if an object implements the required properties of an arc.
   * @param item The item to test.
   */
  declare function MakerJs$isPathArc(item: any): boolean;

  /**
   * A bezier seed defines the endpoints and control points of a bezier curve.
   */
  declare type MakerJs$IPathBezierSeed = {
    /**
     * The bezier control points. One point for quadratic, 2 points for cubic.
     */
    controls: MakerJs$IPoint[],

    /**
     * T values of the parent if this is a child that represents a split.
     */
    parentRange?: MakerJs$IBezierRange
  } & MakerJs$IPathLine;

  /**
   * Bezier t values for an arc path segment in a bezier curve.
   */
  declare interface MakerJs$IBezierRange {
    /**
     * The bezier t-value at the starting point.
     */
    startT: number;

    /**
     * The bezier t-value at the end point.
     */
    endT: number;
  }

  /**
   * An arc path segment in a bezier curve.
   */
  declare type MakerJs$IPathArcInBezierCurve = {
    bezierData: MakerJs$IBezierRange
  } & MakerJs$IPathArc;

  /**
   * Test to see if an object implements the required properties of an arc in a bezier curve.
   * @param item The item to test.
   */
  declare function MakerJs$isPathArcInBezierCurve(item: any): boolean;

  /**
   * A map of functions which accept a path as a parameter.
   */
  declare interface MakerJs$IPathFunctionMap {
    /**
     * Key is the type of a path, value is a function which accepts a path object as its parameter.
     */
    [type: string]: (pathValue: MakerJs$IPath) => void;
  }

  /**
   * A map of functions which accept a path and an origin point as parameters.
   */
  declare interface MakerJs$IPathOriginFunctionMap {
    /**
     * Key is the type of a path, value is a function which accepts a path object a point object as its parameters.
     */
    [type: string]: (
      id: string,
      pathValue: MakerJs$IPath,
      origin: MakerJs$IPoint,
      layer: string
    ) => void;
  }

  /**
   * String-based enumeration of all paths types.
   *
   * Examples: use pathType instead of string literal when creating a circle.
   * ```
   *      * var circle: IPathCircle = { type: pathType.Circle, origin: [0, 0], radius: 7 };   //typescript
   *      * var circle = { type: pathType.Circle, origin: [0, 0], radius: 7 };   //javascript
   *      * ```
   */
  declare var MakerJs$pathType: {
    paths$Line: string,
    paths$Circle: string,
    paths$Arc: string,
    BezierSeed: string
  };

  /**
   * Slope and y-intercept of a line.
   */
  declare interface MakerJs$ISlope {
    /**
     * Boolean to see if line has slope or is vertical.
     */
    hasSlope: boolean;

    /**
     * Optional value of non-vertical slope.
     */
    slope?: number;

    /**
     * Line used to calculate this slope.
     */
    line: MakerJs$IPathLine;

    /**
     * Optional value of y when x = 0.
     */
    yIntercept?: number;
  }

  /**
   * Options to pass to path.intersection()
   */
  declare interface MakerJs$IPathIntersectionBaseOptions {
    /**
     * Optional boolean to only return deep intersections, i.e. not on an end point or tangent.
     */
    excludeTangents?: boolean;

    /**
     * Optional output variable which will be set to true if the paths are overlapped.
     */
    out_AreOverlapped?: boolean;
  }

  /**
   * Options to pass to path.intersection()
   */
  declare type MakerJs$IPathIntersectionOptions = {
    /**
     * Optional boolean to only return deep intersections, i.e. not on an end point or tangent.
     */
    path1Offset?: MakerJs$IPoint,

    /**
     * Optional output variable which will be set to true if the paths are overlapped.
     */
    path2Offset?: MakerJs$IPoint
  } & MakerJs$IPathIntersectionBaseOptions;

  /**
   * An intersection of two paths.
   */
  declare interface MakerJs$IPathIntersection {
    /**
     * Array of points where the two paths intersected. The length of the array may be either 1 or 2 points.
     */
    intersectionPoints: MakerJs$IPoint[];

    /**
     * This Array property will only be defined if the first parameter passed to pathIntersection is either an Arc or a Circle.
     * It contains the angles of intersection relative to the first path parameter.
     * The length of the array may be either 1 or 2.
     */
    path1Angles?: number[];

    /**
     * This Array property will only be defined if the second parameter passed to pathIntersection is either an Arc or a Circle.
     * It contains the angles of intersection relative to the second path parameter.
     * The length of the array may be either 1 or 2.
     */
    path2Angles?: number[];
  }

  /**
   * Options when matching points
   */
  declare interface MakerJs$IPointMatchOptions {
    /**
     * Max distance to consider two points as the same.
     */
    pointMatchingDistance?: number;
  }

  /**
   * Options to pass to model.combine.
   */
  declare type MakerJs$ICombineOptions = {
    /**
     * Flag to remove paths which are not part of a loop.
     */
    trimDeadEnds?: boolean,

    /**
     * Point which is known to be outside of the model.
     */
    farPoint?: MakerJs$IPoint,

    /**
     * Cached measurements for model A.
     */
    measureA?: MakerJs$measure.measure$Atlas,

    /**
     * Cached measurements for model B.
     */
    measureB?: MakerJs$measure.measure$Atlas
  } & MakerJs$IPointMatchOptions;

  /**
   * Options to pass to model.findLoops.
   */
  declare type MakerJs$IFindLoopsOptions = {
    /**
     * Flag to remove looped paths from the original model.
     */
    removeFromOriginal?: boolean
  } & MakerJs$IPointMatchOptions;

  /**
   * Options to pass to model.simplify()
   */
  declare interface MakerJs$ISimplifyOptions {
    /**
     * Optional
     */
    pointMatchingDistance?: number;

    /**
     * Optional
     */
    scalarMatchingDistance?: number;
  }

  /**
   * A path that may be indicated to "flow" in either direction between its endpoints.
   */
  declare type MakerJs$IPathDirectional = {
    /**
     * The endpoints of the path.
     */
    endPoints: MakerJs$IPoint[],

    /**
     * Path flows forwards or reverse.
     */
    reversed?: boolean
  } & MakerJs$IPath;

  /**
   * Path objects by id.
   */
  declare interface MakerJs$IPathMap {
    [id: string]: MakerJs$IPath;
  }

  /**
   * Model objects by id.
   */
  declare interface MakerJs$IModelMap {
    [id: string]: MakerJs$IModel;
  }

  /**
   * A model is a composite object which may contain an array of paths, or an array of models recursively.
   *
   * Example:
   * ```
   *      * var m = {
   *      *   paths: {
   *      *     "line1": { type: 'line', origin: [0, 0], end: [1, 1] },
   *      *     "line2": { type: 'line', origin: [0, 0], end: [-1, -1] }
   *      *   }
   *      * };
   *      * ```
   */
  declare interface MakerJs$IModel {
    /**
     * Optional origin location of this model.
     */
    origin?: MakerJs$IPoint;

    /**
     * A model may want to specify its type, but this value is not employed yet.
     */
    type?: string;

    /**
     * Optional array of path objects in this model.
     */
    MakerJs$paths?: MakerJs$IPathMap;

    /**
     * Optional array of models within this model.
     */
    MakerJs$models?: MakerJs$IModelMap;

    /**
     * Optional unit system of this model. See UnitType for possible values.
     */
    MakerJs$units?: string;

    /**
     * An author may wish to add notes to this model instance.
     */
    notes?: string;

    /**
     * Optional layer of this model.
     */
    layer?: string;

    /**
     * Optional exporter options for this model.
     */
    exporterOptions?: {
      [exporterName: string]: any
    };
  }

  /**
   * Callback signature for model.walkPaths().
   */
  declare interface MakerJs$IModelPathCallback {
    (
      modelContext: MakerJs$IModel,
      pathId: string,
      pathContext: MakerJs$IPath
    ): void;
  }

  /**
   * Test to see if an object implements the required properties of a model.
   */
  declare function MakerJs$isModel(item: any): boolean;

  /**
   * Reference to a path id within a model.
   */
  declare interface MakerJs$IRefPathIdInModel {
    modelContext: MakerJs$IModel;
    pathId: string;
  }

  /**
   * A route to either a path or a model, and the absolute offset of it.
   */
  declare interface MakerJs$IRouteOffset {
    layer: string;
    offset: MakerJs$IPoint;
    route: string[];
    routeKey: string;
  }

  /**
   * A path reference in a walk.
   */
  declare type MakerJs$IWalkPath = {
    pathContext: MakerJs$IPath
  } & MakerJs$IRefPathIdInModel &
    MakerJs$IRouteOffset;

  /**
   * Callback signature for path in model.walk().
   */
  declare interface MakerJs$IWalkPathCallback {
    (context: MakerJs$IWalkPath): void;
  }

  /**
   * Callback for returning a boolean from an IWalkPath.
   */
  declare interface MakerJs$IWalkPathBooleanCallback {
    (context: MakerJs$IWalkPath): boolean;
  }

  /**
   * A link in a chain, with direction of flow.
   */
  declare interface MakerJs$IChainLink {
    /**
     * Reference to the path.
     */
    walkedPath: MakerJs$IWalkPath;

    /**
     * Path flows forwards or reverse.
     */
    reversed: boolean;

    /**
     * The endpoints of the path, in absolute coords.
     */
    endPoints: MakerJs$IPoint[];

    /**
     * Length of the path.
     */
    measure$pathLength: number;
  }

  /**
   * A chain of paths which connect end to end.
   */
  declare interface MakerJs$IChain {
    /**
     * The links in this chain.
     */
    links: MakerJs$IChainLink[];

    /**
     * Flag if this chain forms a loop end to end.
     */
    endless?: boolean;

    /**
     * Total length of all paths in the chain.
     */
    measure$pathLength: number;
  }

  /**
   * Test to see if an object implements the required properties of a chain.
   * @param item The item to test.
   */
  declare function MakerJs$isChain(item: any): boolean;

  /**
   * Callback to model.findChains() with resulting array of chains and unchained paths.
   */
  declare interface MakerJs$IChainCallback {
    (chains: MakerJs$IChain[], loose: MakerJs$IWalkPath[], layer: string): void;
  }

  /**
   * Options to pass to model.findLoops.
   */
  declare type MakerJs$IFindChainsOptions = {
    /**
     * Flag to separate chains by layers.
     */
    byLayers?: boolean,

    /**
     * Flag to not recurse models, look only within current model's immediate paths.
     */
    shallow?: boolean
  } & MakerJs$IPointMatchOptions;

  /**
   * Reference to a model within a model.
   */
  declare interface MakerJs$IRefModelInModel {
    parentModel: MakerJs$IModel;
    childId: string;
    childModel: MakerJs$IModel;
  }

  /**
   * A model reference in a walk.
   */
  declare type MakerJs$IWalkModel = {} & MakerJs$IRefModelInModel &
    MakerJs$IRouteOffset;

  /**
   * Callback signature for model.walk().
   */
  declare interface MakerJs$IWalkModelCallback {
    (context: MakerJs$IWalkModel): void;
  }

  /**
   * Callback signature for model.walk(), which may return false to halt any further walking.
   */
  declare interface MakerJs$IWalkModelCancellableCallback {
    (context: MakerJs$IWalkModel): boolean;
  }

  /**
   * Options to pass to model.walk().
   */
  declare interface MakerJs$IWalkOptions {
    onPath?: MakerJs$IWalkPathCallback;
    beforeChildWalk?: MakerJs$IWalkModelCancellableCallback;
    afterChildWalk?: MakerJs$IWalkModelCallback;
  }

  /**
   * Describes a parameter and its limits.
   */
  declare interface MakerJs$IMetaParameter {
    /**
     * Display text of the parameter.
     */
    title: string;

    /**
     * Type of the parameter. Currently supports "range".
     */
    type: string;

    /**
     * Optional minimum value of the range.
     */
    min?: number;

    /**
     * Optional maximum value of the range.
     */
    max?: number;

    /**
     * Optional step value between min and max.
     */
    step?: number;

    /**
     * Initial sample value for this parameter.
     */
    value: any;
  }

  /**
   * An IKit is a model-producing class with some sample parameters. Think of it as a packaged model with instructions on how to best use it.
   */
  declare interface MakerJs$IKit {
    /**
     * The constructor. The kit must be "new-able" and it must produce an IModel.
     * It can have any number of any type of parameters.
     */
    new(...args: any[]): MakerJs$IModel;

    /**
     * Attached to the constructor is a property named metaParameters which is an array of IMetaParameter objects.
     * Each element of the array corresponds to a parameter of the constructor, in order.
     */
    metaParameters?: MakerJs$IMetaParameter[];

    /**
     * Information about this kit, in plain text or markdown format.
     */
    notes?: string;
  }

  declare var npm$namespace$angle: {
    noRevolutions: typeof angle$noRevolutions,
    toRadians: typeof angle$toRadians,
    toDegrees: typeof angle$toDegrees,
    ofArcEnd: typeof angle$ofArcEnd,
    ofArcMiddle: typeof angle$ofArcMiddle,
    ofArcSpan: typeof angle$ofArcSpan,
    ofLineInDegrees: typeof angle$ofLineInDegrees,
    ofPointInDegrees: typeof angle$ofPointInDegrees,
    ofPointInRadians: typeof angle$ofPointInRadians,
    mirror: typeof angle$mirror
  };

  /**
   * Ensures an angle is not greater than 360
   * @param angleInDegrees Angle in degrees.
   * @retiurns Same polar angle but not greater than 360 degrees.
   */
  declare function angle$noRevolutions(angleInDegrees: number): number;

  /**
   * Convert an angle from degrees to radians.
   * @param angleInDegrees Angle in degrees.
   * @returns Angle in radians.
   */
  declare function angle$toRadians(angleInDegrees: number): number;

  /**
   * Convert an angle from radians to degrees.
   * @param angleInRadians Angle in radians.
   * @returns Angle in degrees.
   */
  declare function angle$toDegrees(angleInRadians: number): number;

  /**
   * Get an arc's end angle, ensured to be greater than its start angle.
   * @param arc An arc path object.
   * @returns End angle of arc.
   */
  declare function angle$ofArcEnd(arc: MakerJs$IPathArc): number;

  /**
   * Get the angle in the middle of an arc's start and end angles.
   * @param arc An arc path object.
   * @param ratio Optional number between 0 and 1 specifying percentage between start and end angles. Default is .5
   * @returns Middle angle of arc.
   */
  declare function angle$ofArcMiddle(
    arc: MakerJs$IPathArc,
    ratio?: number
  ): number;

  /**
   * Total angle of an arc between its start and end angles.
   * @param arc The arc to measure.
   * @returns Angle of arc.
   */
  declare function angle$ofArcSpan(arc: MakerJs$IPathArc): number;

  /**
   * Angle of a line path.
   * @param line The line path to find the angle of.
   * @returns Angle of the line path, in degrees.
   */
  declare function angle$ofLineInDegrees(line: MakerJs$IPathLine): number;

  /**
   * Angle of a line through a point, in degrees.
   * @param pointToFindAngle The point to find the angle.
   * @param origin Point of origin of the angle.
   * @returns Angle of the line throught the point, in degrees.
   */
  declare function angle$ofPointInDegrees(
    origin: MakerJs$IPoint,
    pointToFindAngle: MakerJs$IPoint
  ): number;

  /**
   * Angle of a line through a point, in radians.
   * @param pointToFindAngle The point to find the angle.
   * @param origin Point of origin of the angle.
   * @returns Angle of the line throught the point, in radians.
   */
  declare function angle$ofPointInRadians(
    origin: MakerJs$IPoint,
    pointToFindAngle: MakerJs$IPoint
  ): number;

  /**
   * Mirror an angle on either or both x and y axes.
   * @param angleInDegrees The angle to mirror.
   * @param mirrorX Boolean to mirror on the x axis.
   * @param mirrorY Boolean to mirror on the y axis.
   * @returns Mirrored angle.
   */
  declare function angle$mirror(
    angleInDegrees: number,
    mirrorX: boolean,
    mirrorY: boolean
  ): number;

  declare var npm$namespace$point: {
    add: typeof point$add,
    average: typeof point$average,
    clone: typeof point$clone,
    closest: typeof point$closest,
    fromPolar: typeof point$fromPolar,
    fromAngleOnCircle: typeof point$fromAngleOnCircle,
    fromArc: typeof point$fromArc,
    fromPathEnds: typeof point$fromPathEnds,
    fromSlopeIntersection: typeof point$fromSlopeIntersection,
    middle: typeof point$middle,
    mirror: typeof point$mirror,
    rounded: typeof point$rounded,
    rotate: typeof point$rotate,
    scale: typeof point$scale,
    distort: typeof point$distort,
    subtract: typeof point$subtract,
    zero: typeof point$zero
  };

  /**
   * Add two points together and return the result as a new point object.
   * @param a First point.
   * @param b Second point.
   * @param subtract Optional boolean to subtract instead of add.
   * @returns A new point object.
   */
  declare function point$add(
    a: MakerJs$IPoint,
    b: MakerJs$IPoint,
    point$subtract?: boolean
  ): MakerJs$IPoint;

  /**
   * Get the average of two points.
   * @param a First point.
   * @param b Second point.
   * @returns New point object which is the average of a and b.
   */
  declare function point$average(
    a: MakerJs$IPoint,
    b: MakerJs$IPoint
  ): MakerJs$IPoint;

  /**
   * Clone a point into a new point.
   * @param pointToClone The point to clone.
   * @returns A new point with same values as the original.
   */
  declare function point$clone(pointToClone: MakerJs$IPoint): MakerJs$IPoint;

  /**
   * From an array of points, find the closest point to a given reference point.
   * @param referencePoint The reference point.
   * @param pointOptions Array of points to choose from.
   * @returns The first closest point from the pointOptions.
   */
  declare function point$closest(
    referencePoint: MakerJs$IPoint,
    pointOptions: MakerJs$IPoint[]
  ): MakerJs$IPoint;

  /**
   * Get a point from its polar coordinates.
   * @param angleInRadians The angle of the polar coordinate, in radians.
   * @param radius The radius of the polar coordinate.
   * @returns A new point object.
   */
  declare function point$fromPolar(
    angleInRadians: number,
    radius: number
  ): MakerJs$IPoint;

  /**
   * Get a point on a circle or arc path, at a given angle.
   * @param angleInDegrees The angle at which you want to find the point, in degrees.
   * @param circle A circle or arc.
   * @returns A new point object.
   */
  declare function point$fromAngleOnCircle(
    angleInDegrees: number,
    circle: MakerJs$IPathCircle
  ): MakerJs$IPoint;

  /**
   * Get the two end points of an arc path.
   * @param arc The arc path object.
   * @returns Array with 2 elements: [0] is the point object corresponding to the start angle, [1] is the point object corresponding to the end angle.
   */
  declare function point$fromArc(arc: MakerJs$IPathArc): MakerJs$IPoint[];

  /**
   * Get the two end points of a path.
   * @param pathContext The path object.
   * @returns Array with 2 elements: [0] is the point object corresponding to the origin, [1] is the point object corresponding to the end.
   */
  declare function point$fromPathEnds(
    pathContext: MakerJs$IPath,
    pathOffset?: MakerJs$IPoint
  ): MakerJs$IPoint[];

  /**
   * Calculates the intersection of slopes of two lines.
   * @param lineA First line to use for slope.
   * @param lineB Second line to use for slope.
   * @param options Optional IPathIntersectionOptions.
   * @returns point of intersection of the two slopes, or null if the slopes did not intersect.
   */
  declare function point$fromSlopeIntersection(
    lineA: MakerJs$IPathLine,
    lineB: MakerJs$IPathLine,
    options?: MakerJs$IPathIntersectionBaseOptions
  ): MakerJs$IPoint;

  /**
   * Get the middle point of a path.
   * @param pathContext The path object.
   * @param ratio Optional ratio (between 0 and 1) of point along the path. Default is .5 for middle.
   * @returns Point on the path, in the middle of the path.
   */
  declare function point$middle(
    pathContext: MakerJs$IPath,
    ratio?: number
  ): MakerJs$IPoint;

  /**
   * Create a clone of a point, mirrored on either or both x and y axes.
   * @param pointToMirror The point to mirror.
   * @param mirrorX Boolean to mirror on the x axis.
   * @param mirrorY Boolean to mirror on the y axis.
   * @returns Mirrored point.
   */
  declare function point$mirror(
    pointToMirror: MakerJs$IPoint,
    mirrorX: boolean,
    mirrorY: boolean
  ): MakerJs$IPoint;

  /**
   * Round the values of a point.
   * @param pointContext The point to serialize.
   * @param accuracy Optional exemplar number of decimal places.
   * @returns A new point with the values rounded.
   */
  declare function point$rounded(
    pointContext: MakerJs$IPoint,
    accuracy?: number
  ): MakerJs$IPoint;

  /**
   * Rotate a point.
   * @param pointToRotate The point to rotate.
   * @param angleInDegrees The amount of rotation, in degrees.
   * @param rotationOrigin The center point of rotation.
   * @returns A new point.
   */
  declare function point$rotate(
    pointToRotate: MakerJs$IPoint,
    angleInDegrees: number,
    rotationOrigin?: MakerJs$IPoint
  ): MakerJs$IPoint;

  /**
   * Scale a point's coordinates.
   * @param pointToScale The point to scale.
   * @param scaleValue The amount of scaling.
   * @returns A new point.
   */
  declare function point$scale(
    pointToScale: MakerJs$IPoint,
    scaleValue: number
  ): MakerJs$IPoint;

  /**
   * Distort a point's coordinates.
   * @param pointToDistort The point to distort.
   * @param scaleX The amount of x scaling.
   * @param scaleY The amount of y scaling.
   * @returns A new point.
   */
  declare function point$distort(
    pointToDistort: MakerJs$IPoint,
    scaleX: number,
    scaleY: number
  ): MakerJs$IPoint;

  /**
   * Subtract a point from another point, and return the result as a new point. Shortcut to Add(a, b, subtract = true).
   * @param a First point.
   * @param b Second point.
   * @returns A new point object.
   */
  declare function point$subtract(
    a: MakerJs$IPoint,
    b: MakerJs$IPoint
  ): MakerJs$IPoint;

  /**
   * A point at 0,0 coordinates.
   * NOTE: It is important to call this as a method, with the empty parentheses.
   * @returns A new point.
   */
  declare function point$zero(): MakerJs$IPoint;

  declare var npm$namespace$path: {
    dogbone: typeof path$dogbone,
    fillet: typeof path$fillet
  };

  /**
   * Adds a round corner to the outside angle between 2 lines. The lines must meet at one point.
   * @param lineA First line to fillet, which will be modified to fit the fillet.
   * @param lineB Second line to fillet, which will be modified to fit the fillet.
   * @returns Arc path object of the new fillet.
   */
  declare function path$dogbone(
    lineA: MakerJs$IPathLine,
    lineB: MakerJs$IPathLine,
    filletRadius: number,
    options?: MakerJs$IPointMatchOptions
  ): MakerJs$IPathArc;

  /**
   * Adds a round corner to the inside angle between 2 paths. The paths must meet at one point.
   * @param pathA First path to fillet, which will be modified to fit the fillet.
   * @param pathB Second path to fillet, which will be modified to fit the fillet.
   * @param filletRadius Radius of the fillet.
   * @param options Optional IPointMatchOptions object to specify pointMatchingDistance.
   * @returns Arc path object of the new fillet.
   */
  declare function path$fillet(
    pathA: MakerJs$IPath,
    pathB: MakerJs$IPath,
    filletRadius: number,
    options?: MakerJs$IPointMatchOptions
  ): MakerJs$IPathArc;

  /**
   * Class for arc path.
   */
  declare class paths$Arc mixins MakerJs$IPathArc {
    origin: MakerJs$IPoint;
    radius: number;
    startAngle: number;
    endAngle: number;
    type: string;

    /**
     * Class for arc path, created from origin point, radius, start angle, and end angle.
     * @param origin The center point of the arc.
     * @param radius The radius of the arc.
     * @param startAngle The start angle of the arc.
     * @param endAngle The end angle of the arc.
     */
    constructor(
      origin: MakerJs$IPoint,
      radius: number,
      startAngle: number,
      endAngle: number
    ): this;

    /**
     * Class for arc path, created from 2 points, radius, large Arc flag, and clockwise flag.
     * @param pointA First end point of the arc.
     * @param pointB Second end point of the arc.
     * @param radius The radius of the arc.
     * @param largeArc Boolean flag to indicate clockwise direction.
     * @param clockwise Boolean flag to indicate clockwise direction.
     */
    constructor(
      pointA: MakerJs$IPoint,
      pointB: MakerJs$IPoint,
      radius: number,
      largeArc: boolean,
      clockwise: boolean
    ): this;

    /**
     * Class for arc path, created from 2 points and optional boolean flag indicating clockwise.
     * @param pointA First end point of the arc.
     * @param pointB Second end point of the arc.
     * @param clockwise Boolean flag to indicate clockwise direction.
     */
    constructor(
      pointA: MakerJs$IPoint,
      pointB: MakerJs$IPoint,
      clockwise?: boolean
    ): this;

    /**
     * Class for arc path, created from 3 points.
     * @param pointA First end point of the arc.
     * @param pointB Middle point on the arc.
     * @param pointC Second end point of the arc.
     */
    constructor(
      pointA: MakerJs$IPoint,
      pointB: MakerJs$IPoint,
      pointC: MakerJs$IPoint
    ): this;
  }

  /**
   * Class for circle path.
   */
  declare class paths$Circle mixins MakerJs$IPathCircle {
    type: string;
    origin: MakerJs$IPoint;
    radius: number;

    /**
     * Class for circle path, created from radius. Origin will be [0, 0].
     *
     * Example:
     * ```
     *          * var c = new makerjs.paths.Circle(7);
     *          * ```
     * @param radius The radius of the circle.
     */
    constructor(radius: number): this;

    /**
     * Class for circle path, created from origin point and radius.
     *
     * Example:
     * ```
     *          * var c = new makerjs.paths.Circle([10, 10], 7);
     *          * ```
     * @param origin The center point of the circle.
     * @param radius The radius of the circle.
     */
    constructor(origin: MakerJs$IPoint, radius: number): this;

    /**
     * Class for circle path, created from 2 points.
     *
     * Example:
     * ```
     *          * var c = new makerjs.paths.Circle([5, 15], [25, 15]);
     *          * ```
     * @param pointA First point on the circle.
     * @param pointB Second point on the circle.
     */
    constructor(pointA: MakerJs$IPoint, pointB: MakerJs$IPoint): this;

    /**
     * Class for circle path, created from 3 points.
     *
     * Example:
     * ```
     *          * var c = new makerjs.paths.Circle([0, 0], [0, 10], [20, 0]);
     *          * ```
     * @param pointA First point on the circle.
     * @param pointB Second point on the circle.
     * @param pointC Third point on the circle.
     */
    constructor(
      pointA: MakerJs$IPoint,
      pointB: MakerJs$IPoint,
      pointC: MakerJs$IPoint
    ): this;
  }

  /**
   * Class for line path.
   */
  declare class paths$Line mixins MakerJs$IPathLine {
    type: string;
    origin: MakerJs$IPoint;
    end: MakerJs$IPoint;

    /**
     * Class for line path, constructed from array of 2 points.
     * @param points Array of 2 points.
     */
    constructor(points: MakerJs$IPoint[]): this;

    /**
     * Class for line path, constructed from 2 points.
     * @param origin The origin point of the line.
     * @param end The end point of the line.
     */
    constructor(origin: MakerJs$IPoint, end: MakerJs$IPoint): this;
  }

  /**
   * Class for chord, which is simply a line path that connects the endpoints of an arc.
   * @param arc Arc to use as the basic for the chord.
   */
  declare class paths$Chord mixins MakerJs$IPathLine {
    type: string;
    origin: MakerJs$IPoint;
    end: MakerJs$IPoint;
    constructor(arc: MakerJs$IPathArc): this;
  }

  /**
   * Class for a parallel line path.
   * @param toLine A line to be parallel to.
   * @param distance Distance between parallel and original line.
   * @param nearPoint Any point to determine which side of the line to place the parallel.
   */
  declare class paths$Parallel mixins MakerJs$IPathLine {
    type: string;
    origin: MakerJs$IPoint;
    end: MakerJs$IPoint;
    constructor(
      toLine: MakerJs$IPathLine,
      distance: number,
      nearPoint: MakerJs$IPoint
    ): this;
  }

  declare var npm$namespace$model: {
    findLoops: typeof model$findLoops,
    detachLoop: typeof model$detachLoop,
    removeDeadEnds: typeof model$removeDeadEnds
  };

  /**
   * Find paths that have common endpoints and form loops.
   * @param modelContext The model to search for loops.
   * @param options Optional options object.
   * @returns A new model with child models ranked according to their containment within other found loops. The paths of models will be IPathDirectionalWithPrimeContext.
   */
  declare function model$findLoops(
    modelContext: MakerJs$IModel,
    options?: MakerJs$IFindLoopsOptions
  ): MakerJs$IModel;

  /**
   * Remove all paths in a loop model from the model(s) which contained them.
   * @param loopToDetach The model to search for loops.
   */
  declare function model$detachLoop(loopToDetach: MakerJs$IModel): void;

  /**
   * Remove paths from a model which have endpoints that do not connect to other paths.
   * @param modelContext The model to search for dead ends.
   * @param options Optional options object.
   * @returns The input model (for cascading).
   */
  declare function model$removeDeadEnds(
    modelContext: MakerJs$IModel,
    pointMatchingDistance?: any,
    keep?: MakerJs$IWalkPathBooleanCallback
  ): MakerJs$IModel;

  /**
   * Compare keys to see if they are equal.
   */
  declare interface MakerJs$ICollectionKeyComparer<K> {
    (a: K, b: K): boolean;
  }

  /**
   * A collection for items that share a common key.
   */
  declare interface MakerJs$ICollection<K, T> {
    key: K;
    items: T[];
  }

  /**
   * Collects items that share a common key.
   */
  declare class MakerJs$Collector<K, T> {
    collections: MakerJs$ICollection<K, T>[];
    constructor(comparer?: MakerJs$ICollectionKeyComparer<K>): this;
    addItemToCollection(key: K, item: T): void;
    findCollection(key: K, action?: (index: number) => void): T[];
    removeCollection(key: K): boolean;
    removeItemFromCollection(key: K, item: T): boolean;
    getCollectionsOfMultiple(cb: (key: K, items: T[]) => void): void;
  }

  declare var npm$namespace$units: {
    conversionScale: typeof units$conversionScale
  };

  /**
   * Get a conversion ratio between a source unit and a destination unit.
   * @param srcUnitType unitType converting from.
   * @param destUnitType unitType converting to.
   * @returns Numeric ratio of the conversion.
   */
  declare function units$conversionScale(
    srcUnitType: string,
    destUnitType: string
  ): number;

  declare var npm$namespace$measure: {
    increase: typeof measure$increase,
    isArcConcaveTowardsPoint: typeof measure$isArcConcaveTowardsPoint,
    isArcOverlapping: typeof measure$isArcOverlapping,
    isBetween: typeof measure$isBetween,
    isBetweenArcAngles: typeof measure$isBetweenArcAngles,
    isBetweenPoints: typeof measure$isBetweenPoints,
    isBezierSeedLinear: typeof measure$isBezierSeedLinear,
    isLineOverlapping: typeof measure$isLineOverlapping,
    isMeasurementOverlapping: typeof measure$isMeasurementOverlapping,
    lineSlope: typeof measure$lineSlope,
    pointDistance: typeof measure$pointDistance,
    pathExtents: typeof measure$pathExtents,
    pathLength: typeof measure$pathLength,
    modelExtents: typeof measure$modelExtents,
    boundingHexagon: typeof measure$boundingHexagon
  };

  /**
   * Increase a measurement by an additional measurement.
   * @param baseMeasure The measurement to increase.
   * @param addMeasure The additional measurement.
   * @param addOffset Optional offset point of the additional measurement.
   * @returns The increased original measurement (for cascading).
   */
  declare function measure$increase(
    baseMeasure: MakerJs$IMeasure,
    addMeasure: MakerJs$IMeasure
  ): MakerJs$IMeasure;

  /**
   * Check for arc being concave or convex towards a given point.
   * @param arc The arc to test.
   * @param towardsPoint The point to test.
   * @returns Boolean true if arc is concave towards point.
   */
  declare function measure$isArcConcaveTowardsPoint(
    arc: MakerJs$IPathArc,
    towardsPoint: MakerJs$IPoint
  ): boolean;

  /**
   * Check for arc overlapping another arc.
   * @param arcA The arc to test.
   * @param arcB The arc to check for overlap.
   * @param excludeTangents Boolean to exclude exact endpoints and only look for deep overlaps.
   * @returns Boolean true if arcA is overlapped with arcB.
   */
  declare function measure$isArcOverlapping(
    arcA: MakerJs$IPathArc,
    arcB: MakerJs$IPathArc,
    excludeTangents: boolean
  ): boolean;

  /**
   * Check if a given number is between two given limits.
   * @param valueInQuestion The number to test.
   * @param limitA First limit.
   * @param limitB Second limit.
   * @param exclusive Flag to exclude equaling the limits.
   * @returns Boolean true if value is between (or equal to) the limits.
   */
  declare function measure$isBetween(
    valueInQuestion: number,
    limitA: number,
    limitB: number,
    exclusive: boolean
  ): boolean;

  /**
   * Check if a given angle is between an arc's start and end angles.
   * @param angleInQuestion The angle to test.
   * @param arc Arc to test against.
   * @param exclusive Flag to exclude equaling the start or end angles.
   * @returns Boolean true if angle is between (or equal to) the arc's start and end angles.
   */
  declare function measure$isBetweenArcAngles(
    angleInQuestion: number,
    arc: MakerJs$IPathArc,
    exclusive: boolean
  ): boolean;

  /**
   * Check if a given point is between a line's end points.
   * @param pointInQuestion The point to test.
   * @param line Line to test against.
   * @param exclusive Flag to exclude equaling the origin or end points.
   * @returns Boolean true if point is between (or equal to) the line's origin and end points.
   */
  declare function measure$isBetweenPoints(
    pointInQuestion: MakerJs$IPoint,
    line: MakerJs$IPathLine,
    exclusive: boolean
  ): boolean;

  /**
   * Check if a given bezier seed is simply a line.
   * @param seed The bezier seed to test.
   * @returns Boolean true if bezier seed has control points on the line slope and between the line endpoints.
   */
  declare function measure$isBezierSeedLinear(
    seed: MakerJs$IPathBezierSeed
  ): boolean;

  /**
   * Check for line overlapping another line.
   * @param lineA The line to test.
   * @param lineB The line to check for overlap.
   * @param excludeTangents Boolean to exclude exact endpoints and only look for deep overlaps.
   * @returns Boolean true if lineA is overlapped with lineB.
   */
  declare function measure$isLineOverlapping(
    lineA: MakerJs$IPathLine,
    lineB: MakerJs$IPathLine,
    excludeTangents: boolean
  ): boolean;

  /**
   * Check for measurement overlapping another measurement.
   * @param measureA The measurement to test.
   * @param measureB The measurement to check for overlap.
   * @returns Boolean true if measureA is overlapped with measureB.
   */
  declare function measure$isMeasurementOverlapping(
    measureA: MakerJs$IMeasure,
    measureB: MakerJs$IMeasure
  ): boolean;

  /**
   * Gets the slope of a line.
   */
  declare function measure$lineSlope(line: MakerJs$IPathLine): MakerJs$ISlope;

  /**
   * Calculates the distance between two points.
   * @param a First point.
   * @param b Second point.
   * @returns Distance between points.
   */
  declare function measure$pointDistance(
    a: MakerJs$IPoint,
    b: MakerJs$IPoint
  ): number;

  /**
   * Calculates the smallest rectangle which contains a path.
   * @param pathToMeasure The path to measure.
   * @returns object with low and high points.
   */
  declare function measure$pathExtents(
    pathToMeasure: MakerJs$IPath,
    addOffset?: MakerJs$IPoint
  ): MakerJs$IMeasure;

  /**
   * Measures the length of a path.
   * @param pathToMeasure The path to measure.
   * @returns Length of the path.
   */
  declare function measure$pathLength(pathToMeasure: MakerJs$IPath): number;

  /**
   * Measures the smallest rectangle which contains a model.
   * @param modelToMeasure The model to measure.
   * @param atlas Optional atlas to save measurements.
   * @returns object with low and high points.
   */
  declare function measure$modelExtents(
    modelToMeasure: MakerJs$IModel,
    atlas?: MakerJs$measure.measure$Atlas
  ): MakerJs$IMeasureWithCenter;

  /**
   * A list of maps of measurements.
   * @param modelToMeasure The model to measure.
   * @param atlas Optional atlas to save measurements.
   * @returns object with low and high points.
   */
  declare class measure$Atlas {
    modelContext: MakerJs$IModel;

    /**
     * Flag that models have been measured.
     */
    modelsMeasured: boolean;

    /**
     * Map of model measurements, mapped by routeKey.
     */
    modelMap: MakerJs$IMeasureMap;

    /**
     * Map of path measurements, mapped by routeKey.
     */
    pathMap: MakerJs$IMeasureMap;

    /**
     * Constructor.
     * @param modelContext The model to measure.
     */
    constructor(modelContext: MakerJs$IModel): this;
    measureModels(): void;
  }

  /**
   * A hexagon which surrounds a model.
   */
  declare type measure$IBoundingHex = {
    /**
     * Radius of the hexagon, which is also the length of a side.
     */
    radius: number
  } & MakerJs$IModel;

  /**
   * Measures the minimum bounding hexagon surrounding a model. The hexagon is oriented such that the right and left sides are vertical, and the top and bottom are pointed.
   * @param modelToMeasure The model to measure.
   * @returns IBoundingHex object which is a hexagon model, with an additional radius property.
   */
  declare function measure$boundingHexagon(
    modelToMeasure: MakerJs$IModel
  ): measure$IBoundingHex;

  declare var npm$namespace$exporter: {
    chainToSVGPathData: typeof exporter$chainToSVGPathData,
    pathToSVGPathData: typeof exporter$pathToSVGPathData,
    toSVGPathData: typeof exporter$toSVGPathData,
    toSVG: typeof exporter$toSVG,
    svgUnit: typeof exporter$svgUnit
  };

  /**
   * Map of SVG Path Data by layer name.
   */
  declare interface exporter$IPathDataByLayerMap {
    [layer: string]: string;
  }

  /**
   * Convert a chain to SVG path data.
   */
  declare function exporter$chainToSVGPathData(
    MakerJs$chain: MakerJs$IChain,
    offset: MakerJs$IPoint
  ): string;

  /**
   * Convert a path to SVG path data.
   */
  declare function exporter$pathToSVGPathData(
    pathToExport: MakerJs$IPath,
    offset: MakerJs$IPoint,
    offset2: MakerJs$IPoint
  ): string;

  /**
   * Convert a model to SVG path data.
   * @param modelToExport Model to export.
   * @param byLayers Boolean flag (default true) to return a map of path data by layer.
   * @param origin Optional reference origin.
   * @returns String of SVG path data (if byLayers is false) or an object map of path data by layer .
   */
  declare function exporter$toSVGPathData(
    modelToExport: MakerJs$IModel,
    byLayers?: boolean,
    origin?: MakerJs$IPoint
  ): exporter$IPathDataByLayerMap | string;

  declare function exporter$toSVG(
    modelToExport: MakerJs$IModel,
    options?: exporter$ISVGRenderOptions
  ): string;

  declare function exporter$toSVG(
    pathsToExport: MakerJs$IPath[],
    options?: exporter$ISVGRenderOptions
  ): string;

  declare function exporter$toSVG(
    pathToExport: MakerJs$IPath,
    options?: exporter$ISVGRenderOptions
  ): string;

  /**
   * Map of MakerJs unit system to SVG unit system
   */
  declare interface exporter$svgUnitConversion {
    [MakerJs$unitType: string]: {
      svgUnitType: string,
      scaleConversion: number
    };
  }

  /**
   * Map of MakerJs unit system to SVG unit system
   */
  declare var exporter$svgUnit: exporter$svgUnitConversion;

  /**
   * SVG rendering options.
   */
  declare type exporter$ISVGRenderOptions = {
    /**
     * Optional attributes to add to the root svg tag.
     */
    svgAttrs?: exporter$IXmlTagAttrs,

    /**
     * SVG fill color.
     */
    fill?: string,

    /**
     * SVG font size and font size units.
     */
    fontSize?: string,

    /**
     * SVG stroke width of paths. This may have a unit type suffix, if not, the value will be in the same unit system as the units property.
     */
    strokeWidth?: string,

    /**
     * SVG color of the rendered paths.
     */
    stroke?: string,

    /**
     * Scale of the SVG rendering.
     */
    point$scale?: number,

    /**
     * Indicate that the id's of paths should be rendered as SVG text elements.
     */
    annotate?: boolean,

    /**
     * Rendered reference origin.
     */
    origin?: MakerJs$IPoint,

    /**
     * Use SVG < path > elements instead of < line >, < circle > etc.
     */
    useSvgPathOnly?: boolean,

    /**
     * Flag to use SVG viewbox.
     */
    viewBox?: boolean
  } & exporter$IExportOptions;

  declare var npm$namespace$importer: {
    fromSVGPathData: typeof importer$fromSVGPathData
  };
  declare function importer$fromSVGPathData(pathData: string): MakerJs$IModel;

  declare var npm$namespace$solvers: {
    solveTriangleSSS: typeof solvers$solveTriangleSSS,
    solveTriangleASA: typeof solvers$solveTriangleASA
  };

  /**
   * Solves for the angle of a triangle when you know lengths of 3 sides.
   * @param lengthA Length of side of triangle, opposite of the angle you are trying to find.
   * @param lengthB Length of any other side of the triangle.
   * @param lengthC Length of the remaining side of the triangle.
   * @returns Angle opposite of the side represented by the first parameter.
   */
  declare function solvers$solveTriangleSSS(
    lengthA: number,
    lengthB: number,
    lengthC: number
  ): number;

  /**
   * Solves for the length of a side of a triangle when you know length of one side and 2 angles.
   * @param oppositeAngleInDegrees Angle which is opposite of the side you are trying to find.
   * @param lengthOfSideBetweenAngles Length of one side of the triangle which is between the provided angles.
   * @param otherAngleInDegrees An other angle of the triangle.
   * @returns Length of the side of the triangle which is opposite of the first angle parameter.
   */
  declare function solvers$solveTriangleASA(
    oppositeAngleInDegrees: number,
    lengthOfSideBetweenAngles: number,
    otherAngleInDegrees: number
  ): number;

  declare var npm$namespace$chain: {
    cycle: typeof chain$cycle,
    reverse: typeof chain$reverse,
    startAt: typeof chain$startAt,
    toPoints: typeof chain$toPoints,
    toKeyPoints: typeof chain$toKeyPoints
  };

  /**
   * Shift the links of an endless chain.
   * @param chainContext Chain to cycle through. Must be endless.
   * @param amount Optional number of links to shift. May be negative to cycle backwards.
   * @returns The chainContext for cascading.
   */
  declare function chain$cycle(
    chainContext: MakerJs$IChain,
    amount?: number
  ): MakerJs$IChain;

  /**
   * Reverse the links of a chain.
   * @param chainContext Chain to reverse.
   * @returns The chainContext for cascading.
   */
  declare function chain$reverse(chainContext: MakerJs$IChain): MakerJs$IChain;

  /**
   * Set the beginning of an endless chain to a known routeKey of a path.
   * @param chainContext Chain to cycle through. Must be endless.
   * @param routeKey RouteKey of the desired path to start the chain with.
   * @returns The chainContext for cascading.
   */
  declare function chain$startAt(
    chainContext: MakerJs$IChain,
    routeKey: string
  ): MakerJs$IChain;

  /**
   * Get points along a chain of paths.
   * @param chainContext Chain of paths to get points from.
   * @param distance Distance along the chain between points.
   * @param maxPoints Maximum number of points to retrieve.
   * @returns Array of points which are on the chain spread at a uniform interval.
   */
  declare function chain$toPoints(
    chainContext: MakerJs$IChain,
    distance: number,
    maxPoints?: number
  ): MakerJs$IPoint[];

  /**
   * Get key points (a minimal a number of points) along a chain of paths.
   * @param chainContext Chain of paths to get points from.
   * @param maxArcFacet The maximum length between points on an arc or circle.
   * @returns Array of points which are on the chain.
   */
  declare function chain$toKeyPoints(
    chainContext: MakerJs$IChain,
    maxArcFacet?: number
  ): MakerJs$IPoint[];

  declare var npm$namespace$kit: {
    construct: typeof kit$construct,
    getParameterValues: typeof kit$getParameterValues
  };

  /**
   * Helper function to use the JavaScript "apply" function in conjunction with the "new" keyword.
   * @param ctor The constructor for the class which is an IKit.
   * @param args The array of parameters passed to the constructor.
   * @returns A new instance of the class, which implements the IModel interface.
   */
  declare function kit$construct(ctor: MakerJs$IKit, args: any): MakerJs$IModel;

  /**
   * Extract just the initial sample values from a kit.
   * @param ctor The constructor for the class which is an IKit.
   * @returns Array of the inital sample values provided in the metaParameters array.
   */
  declare function kit$getParameterValues(ctor: MakerJs$IKit): any[];

  declare class models$Text mixins MakerJs$IModel {
    MakerJs$models: MakerJs$IModelMap;
    constructor(
      font: opentype.Font,
      text: string,
      fontSize: number,
      model$combine?: boolean,
      centerCharacterOrigin?: boolean,
      bezierAccuracy?: number
    ): this;
  }
  declare var Bezier: typeof undefined;
}
