declare module "js-clipper" {
  declare var npm$namespace$ClipperLib: {
    Math_Abs_Int64: typeof ClipperLib$Math_Abs_Int64,
    Math_Abs_Int32: typeof ClipperLib$Math_Abs_Int32,
    Math_Abs_Double: typeof ClipperLib$Math_Abs_Double,
    Math_Max_Int32_Int32: typeof ClipperLib$Math_Max_Int32_Int32,
    Cast_Int32: typeof ClipperLib$Cast_Int32,
    Cast_Int64: typeof ClipperLib$Cast_Int64,
    Clear: typeof ClipperLib$Clear,
    Error: typeof ClipperLib$Error,
    Clone: typeof ClipperLib$Clone,
    Clean: typeof ClipperLib$Clean,
    Lighten: typeof ClipperLib$Lighten,
    biginteger_used: typeof ClipperLib$biginteger_used,
    MaxSteps: typeof ClipperLib$MaxSteps,
    PI: typeof ClipperLib$PI,
    PI2: typeof ClipperLib$PI2,
    ClipType: typeof ClipperLib$ClipType,
    PolyType: typeof ClipperLib$PolyType,
    PolyFillType: typeof ClipperLib$PolyFillType,
    JoinType: typeof ClipperLib$JoinType,
    EdgeSide: typeof ClipperLib$EdgeSide,
    Protects: typeof ClipperLib$Protects,
    Direction: typeof ClipperLib$Direction,
    IntPoint: typeof ClipperLib$IntPoint,
    IntRect: typeof ClipperLib$IntRect,
    Polygon: typeof ClipperLib$Polygon,
    Polygons: typeof ClipperLib$Polygons,
    ExPolygon: typeof ClipperLib$ExPolygon,
    TEdge: typeof ClipperLib$TEdge,
    IntersectNode: typeof ClipperLib$IntersectNode,
    LocalMinima: typeof ClipperLib$LocalMinima,
    Scanbeam: typeof ClipperLib$Scanbeam,
    OutRec: typeof ClipperLib$OutRec,
    OutPt: typeof ClipperLib$OutPt,
    JoinRec: typeof ClipperLib$JoinRec,
    HorzJoinRec: typeof ClipperLib$HorzJoinRec,
    ClipperBase: typeof ClipperLib$ClipperBase,
    Clipper: typeof ClipperLib$Clipper,
    DoublePoint: typeof ClipperLib$DoublePoint,
    PolyOffsetBuilder: typeof ClipperLib$PolyOffsetBuilder
  };
  declare export var ClipperLib$biginteger_used: boolean;

  declare export function ClipperLib$Math_Abs_Int64(a: number): number;

  declare export function ClipperLib$Math_Abs_Int32(a: number): number;

  declare export function ClipperLib$Math_Abs_Double(a: number): number;

  declare export function ClipperLib$Math_Max_Int32_Int32(
    a: number,
    b: number
  ): number;

  declare export function ClipperLib$Cast_Int32(a: number): number;

  declare export function ClipperLib$Cast_Int64(a: number): number;

  declare export function ClipperLib$Clear(a: ArrayLike<any>): void;

  declare export var ClipperLib$MaxSteps: number;

  declare export var ClipperLib$PI: number;

  declare export var ClipperLib$PI2: number;

  declare export class ClipperLib$IntPoint {
    X: number;
    Y: number;
    constructor(): this;
    constructor(PointXY: ClipperLib$IntPoint): this;
    constructor(x: number, y: number): this;
  }

  declare export class ClipperLib$IntRect {
    left: number;
    top: number;
    right: number;
    bottom: number;
    constructor(): this;
    constructor(left: number, top: number, right: number, bottom: number): this;
  }

  declare export class ClipperLib$Polygon {
    constructor(): this;
    constructor(poly: ArrayLike<ClipperLib$IntPoint>): this;
  }

  declare export class ClipperLib$Polygons {
    constructor(): this;
    constructor(polys: ArrayLike<ArrayLike<ClipperLib$IntPoint>>): this;
  }

  declare export class ClipperLib$ExPolygon {
    outer: ArrayLike<ClipperLib$IntPoint>;
    holes: ArrayLike<ArrayLike<ClipperLib$IntPoint>>;
  }

  declare export var ClipperLib$ClipType: {|
    +ctIntersection: 0, // 0
    +ctUnion: 1, // 1
    +ctDifference: 2, // 2
    +ctXor: 3 // 3
  |};

  declare export var ClipperLib$PolyType: {|
    +ptSubject: 0, // 0
    +ptClip: 1 // 1
  |};

  declare export var ClipperLib$PolyFillType: {|
    +pftEvenOdd: 0, // 0
    +pftNonZero: 1, // 1
    +pftPositive: 2, // 2
    +pftNegative: 3 // 3
  |};

  declare export var ClipperLib$JoinType: {|
    +jtSquare: 0, // 0
    +jtRound: 1, // 1
    +jtMiter: 2 // 2
  |};

  declare export var ClipperLib$EdgeSide: {|
    +esLeft: 0, // 0
    +esRight: 1 // 1
  |};

  declare export var ClipperLib$Protects: {|
    +ipNone: 0, // 0
    +ipLeft: 1, // 1
    +ipRight: 2, // 2
    +ipBoth: 3 // 3
  |};

  declare export var ClipperLib$Direction: {|
    +dRightToLeft: 0, // 0
    +dLeftToRight: 1 // 1
  |};

  declare export class ClipperLib$TEdge {
    xbot: number;
    ybot: number;
    xcurr: number;
    ycurr: number;
    xtop: number;
    ytop: number;
    dx: number;
    deltaX: number;
    deltaY: number;
    tmpX: number;
    polyType: ClipperLib$PolyType;
    side: ClipperLib$EdgeSide;
    windDelta: number;
    windCnt: number;
    windCnt2: number;
    outIdx: number;
    next: ClipperLib$TEdge;
    prev: ClipperLib$TEdge;
    nextInLML: ClipperLib$TEdge;
    nextInAEL: ClipperLib$TEdge;
    prevInAEL: ClipperLib$TEdge;
    nextInSEL: ClipperLib$TEdge;
    prevInSEL: ClipperLib$TEdge;
  }

  declare export class ClipperLib$IntersectNode {
    edge1: ClipperLib$TEdge;
    edge2: ClipperLib$TEdge;
    pt: ClipperLib$TEdge;
    next: ClipperLib$TEdge;
  }

  declare export class ClipperLib$LocalMinima {
    Y: number;
    leftBound: ClipperLib$TEdge;
    rightBound: ClipperLib$TEdge;
    next: ClipperLib$TEdge;
  }

  declare export class ClipperLib$Scanbeam {
    Y: number;
    next: ClipperLib$TEdge;
  }

  declare export class ClipperLib$OutRec {
    idx: number;
    isHole: boolean;
    FirstLeft: ClipperLib$TEdge;
    AppendLink: ClipperLib$OutRec;
    pts: ClipperLib$OutPt;
    bottomPt: ClipperLib$OutPt;
  }

  declare export class ClipperLib$OutPt {
    idx: number;
    pt: ClipperLib$OutPt;
    next: ClipperLib$OutPt;
    prev: ClipperLib$OutPt;
  }

  declare export class ClipperLib$JoinRec {
    pt1a: ClipperLib$IntPoint;
    pt1b: ClipperLib$IntPoint;
    poly1Idx: number;
    pt2a: ClipperLib$IntPoint;
    pt2b: ClipperLib$IntPoint;
    poly2Idx: number;
  }

  declare export class ClipperLib$HorzJoinRec {
    edge: ClipperLib$TEdge;
    savedIdx: number;
  }

  declare export class ClipperLib$ClipperBase {
    m_MinimaList: ClipperLib$LocalMinima;
    m_CurrentLM: ClipperLib$LocalMinima;
    m_edges: ArrayLike<ArrayLike<ClipperLib$TEdge>>;
    m_UseFullRange: boolean;
    horizontal: number;
    loRange: number;
    hiRange: number;
    PointsEqual(pt1: ClipperLib$IntPoint, pt2: ClipperLib$IntPoint): boolean;
    PointIsVertex(pt: ClipperLib$IntPoint, pp: ClipperLib$JoinRec): boolean;
    PointInPolygon(
      pt: ClipperLib$IntPoint,
      pp: ClipperLib$JoinRec,
      UseFulllongRange: boolean
    ): boolean;
    SlopesEqual(
      e1: ClipperLib$TEdge,
      e2: ClipperLib$TEdge,
      UseFullRange: boolean
    ): boolean;
    SlopesEqual(
      pt1: ClipperLib$IntPoint,
      pt2: ClipperLib$IntPoint,
      pt3: ClipperLib$IntPoint,
      UseFullRange: boolean
    ): boolean;
    SlopesEqual(
      pt1: ClipperLib$IntPoint,
      pt2: ClipperLib$IntPoint,
      pt3: ClipperLib$IntPoint,
      pt4: ClipperLib$IntPoint,
      UseFullRange: boolean
    ): boolean;
    clear(): void;
    DisposeLocalMinimaList(): void;
    AddPolygons(
      ppg: ArrayLike<ArrayLike<ClipperLib$IntPoint>>,
      polyType: ClipperLib$PolyType
    ): boolean | string;
    AddPolygon(
      pg: ArrayLike<ClipperLib$IntPoint>,
      polyType: ClipperLib$PolyType,
      multiple: boolean
    ): boolean | string;
    InitEdge(
      e: ClipperLib$TEdge,
      eNext: ClipperLib$TEdge,
      ePrev: ClipperLib$TEdge,
      pt: ClipperLib$IntPoint,
      polyType: ClipperLib$PolyType
    ): void;
    SetDx(e: ClipperLib$TEdge): void;
    AddBoundsToLML(e: ClipperLib$TEdge): ClipperLib$TEdge;
    InsertLocalMinima(newLm: ClipperLib$LocalMinima): void;
    PopLocalMinima(): void;
    SwapX(e: ClipperLib$TEdge): void;
    Reset(): void;
    GetBounds(): ClipperLib$IntRect;
  }

  declare export class ClipperLib$Clipper mixins ClipperBase {
    m_PolyOuts: ClipperLib$TEdge | ArrayLike<ClipperLib$TEdge>;
    m_ClipType: ClipperLib$ClipType;
    m_Scanbeam: ClipperLib$Scanbeam;
    m_ActiveEdges: ClipperLib$TEdge;
    m_SortedEdges: ClipperLib$TEdge;
    m_intersectnodes: ClipperLib$IntersectNode;
    m_ExecuteLocked: boolean;
    m_ClipFillType: ClipperLib$PolyFillType;
    m_SubjFillType: ClipperLib$PolyFillType;
    m_Joins: ArrayLike<ClipperLib$JoinRec>;
    m_HorizJoins: ArrayLike<ClipperLib$HorzJoinRec>;
    m_ReverseOutput: boolean;
    m_UsingExPolygons: boolean;
    ClipperLib$DoublePoint: Function;
    ClipperLib$PolyOffsetBuilder: Function;
    DisposeScanbeamList(): void;
    get_ReverseSolution(): boolean;
    set_ReverseSolution(value: boolean): boolean;
    InsertScanbeam(Y: number): void;
    Execute(
      clipType: ClipperLib$ClipType,
      solution: ArrayLike<ClipperLib$IntPoint> | ClipperLib$ExPolygon
    ): boolean;
    Execute(
      clipType: ClipperLib$ClipType,
      solution: ArrayLike<ClipperLib$IntPoint> | ClipperLib$ExPolygon,
      subjFillType: ClipperLib$PolyFillType,
      clipFillType: ClipperLib$PolyFillType
    ): boolean;
    PolySort(or1: ClipperLib$OutRec, or2: ClipperLib$OutRec): number;
    FindAppendLinkEnd(outRec: ClipperLib$OutRec): ClipperLib$OutRec;
    FixHoleLinkage(outRec: ClipperLib$OutRec): void;
    ExecuteInternal(): boolean;
    PopScanbeam(): number;
    DisposeOutRec(index: number): void;
    DisposeOutPts(pp: ClipperLib$OutPt): void;
    AddJoin(
      e1: ClipperLib$TEdge,
      e2: ClipperLib$TEdge,
      e1OutIdx: number,
      e2OutIdx: number
    ): void;
    AddHorzJoin(e: ClipperLib$TEdge, idx: number): void;
    InsertLocalMinimaIntoAEL(botY: number): void;
    InsertEdgeIntoAEL(edge: ClipperLib$TEdge): void;
    E2InsertsBeforeE1(e1: ClipperLib$TEdge, e2: ClipperLib$TEdge): boolean;
    IsEvenOddFillType(edge: ClipperLib$TEdge): boolean;
    IsEvenOddAltFillType(edge: ClipperLib$TEdge): boolean;
    IsContributing(edge: ClipperLib$TEdge): boolean;
    SetWindingCount(edge: ClipperLib$TEdge): void;
    AddEdgeToSEL(edge: ClipperLib$TEdge): void;
    CopyAELToSEL(): void;
    SwapPositionsInAEL(edge1: ClipperLib$TEdge, edge2: ClipperLib$TEdge): void;
    SwapPositionsInSEL(edge1: ClipperLib$TEdge, edge2: ClipperLib$TEdge): void;
    AddLocalMaxPoly(
      e1: ClipperLib$TEdge,
      e2: ClipperLib$TEdge,
      pt: ClipperLib$OutPt
    ): void;
    AddLocalMinPoly(
      e1: ClipperLib$TEdge,
      e2: ClipperLib$TEdge,
      pt: ClipperLib$OutPt
    ): void;
    CreateOutRec(): ClipperLib$OutRec;
    AddOutPt(e: ClipperLib$TEdge, pt: ClipperLib$IntPoint): void;
    SwapPoints(pt1: ClipperLib$IntPoint, pt2: ClipperLib$IntPoint): void;
    GetOverlapSegment(
      pt1a: ClipperLib$IntPoint,
      pt1b: ClipperLib$IntPoint,
      pt2a: ClipperLib$IntPoint,
      pt2b: ClipperLib$IntPoint,
      pt1: ClipperLib$IntPoint,
      pt2: ClipperLib$IntPoint
    ): boolean;
    FindSegment(
      pp: ClipperLib$IntPoint,
      pt1: ClipperLib$IntPoint,
      pt2: ClipperLib$IntPoint
    ): boolean;
    Pt3IsBetweenPt1AndPt2(
      pt1: boolean,
      pt2: boolean,
      pt3: boolean
    ): ClipperLib$OutPt;
    InsertPolyPtBetween(
      p1: ClipperLib$OutPt,
      p2: ClipperLib$OutPt,
      pt: ClipperLib$OutPt
    ): ClipperLib$OutPt;
    SetHoleState(e: ClipperLib$TEdge, outRec: ClipperLib$OutRec): void;
    GetDx(pt1: ClipperLib$IntPoint, pt2: ClipperLib$IntPoint): number;
    FirstIsBottomPt(
      btmPt1: ClipperLib$OutPt,
      btmPt2: ClipperLib$OutPt
    ): boolean;
    GetBottomPt(pp: ClipperLib$OutPt): ClipperLib$OutPt;
    GetLowermostRec(
      outRec1: ClipperLib$OutRec,
      outRec2: ClipperLib$OutRec
    ): ClipperLib$OutRec;
    Param1RightOfParam2(
      outRec1: ClipperLib$OutRec,
      outRec2: ClipperLib$OutRec
    ): boolean;
    AppendPolygon(e1: ClipperLib$TEdge, e2: ClipperLib$TEdge): void;
    ReversePolyPtLinks(pp: ClipperLib$OutPt): void;
    SwapSides(edge1: ClipperLib$TEdge, edge2: ClipperLib$TEdge): void;
    SwapPolyIndexes(edge1: ClipperLib$TEdge, edge2: ClipperLib$TEdge): void;
    DoEdge1(
      edge1: ClipperLib$TEdge,
      edge2: ClipperLib$TEdge,
      pt: ClipperLib$OutPt
    ): void;
    DoEdge2(
      edge1: ClipperLib$TEdge,
      edge2: ClipperLib$TEdge,
      pt: ClipperLib$OutPt
    ): void;
    DoBothEdges(
      edge1: ClipperLib$TEdge,
      edge2: ClipperLib$TEdge,
      pt: ClipperLib$OutPt
    ): void;
    IntersectEdges(
      e1: ClipperLib$TEdge,
      e2: ClipperLib$TEdge,
      pt: ClipperLib$OutPt,
      protects: ClipperLib$Protects
    ): void;
    DeleteFromAEL(e: ClipperLib$TEdge): void;
    DeleteFromSEL(e: ClipperLib$TEdge): void;
    UpdateEdgeIntoAEL(e: ClipperLib$TEdge): void;
    ProcessHorizontals(): void;
    ProcessHorizontal(horzEdge: ClipperLib$TEdge): void;
    IsTopHorz(horzEdge: ClipperLib$TEdge, XPos: ClipperLib$IntPoint): boolean;
    GetNextInAEL(
      e: ClipperLib$TEdge,
      Direction: ClipperLib$TEdge
    ): ClipperLib$TEdge;
    IsMinima(e: ClipperLib$TEdge): boolean;
    IsMaxima(e: ClipperLib$TEdge, Y: number): boolean;
    IsIntermediate(e: ClipperLib$TEdge, Y: number): boolean;
    GetMaximaPair(e: ClipperLib$TEdge): ClipperLib$TEdge;
    ProcessIntersections(botY: number, topY: number): boolean;
    BuildIntersectList(botY: number, topY: number): void;
    FixupIntersections(): boolean;
    ProcessIntersectList(): void;
    Round(a: number): number;
    TopX(edge: ClipperLib$TEdge, currentY: number): number;
    AddIntersectNode(
      e1: ClipperLib$TEdge,
      e2: ClipperLib$TEdge,
      pt: ClipperLib$IntPoint
    ): void;
    ProcessParam1BeforeParam2(
      node1: ClipperLib$IntersectNode,
      node2: ClipperLib$IntersectNode
    ): boolean;
    SwapIntersectNodes(
      int1: ClipperLib$IntersectNode,
      int2: ClipperLib$IntersectNode
    ): void;
    IntersectPoint(
      edge1: ClipperLib$TEdge,
      edge2: ClipperLib$TEdge,
      ip: ClipperLib$IntPoint
    ): boolean;
    DisposeIntersectNodes(): void;
    ProcessEdgesAtTopOfScanbeam(topY: number): void;
    DoMaxima(e: ClipperLib$TEdge, topY: number): void;
    ReversePolygons(polys: ClipperLib$Polygons): void;
    Orientation(poly: ClipperLib$Polygon): boolean;
    PointCount(pts: ArrayLike<ClipperLib$OutPt>): number;
    BuildResult(polyg: ClipperLib$Polygon): void;
    BuildResultEx(polyg: ClipperLib$ExPolygon): void;
    FixupOutPolygon(outRec: ClipperLib$OutPt): void;
    JoinPoints(
      j: ClipperLib$JoinRec,
      p1: ClipperLib$IntPoint,
      p2: ClipperLib$IntPoint
    ): boolean;
    FixupJoinRecs(
      j: ClipperLib$JoinRec,
      pt: ClipperLib$JoinRec,
      startIdx: number
    ): void;
    JoinCommonEdges(): void;
    FullRangeNeeded(pts: ArrayLike<ClipperLib$IntPoint>): boolean;
    Area(poly: ClipperLib$Polygon): number;
    Area(outRec: ClipperLib$OutRec, UseFull64BitRange: boolean): number;
    BuildArc(
      pt: ClipperLib$IntPoint,
      a1: ClipperLib$IntPoint,
      a2: ClipperLib$IntPoint,
      r: number
    ): ClipperLib$Polygon;
    GetUnitNormal(
      pt1: ClipperLib$IntPoint,
      pt2: ClipperLib$IntPoint
    ): ClipperLib$DoublePoint;
    OffsetPolygons(
      poly: ClipperLib$Polygon,
      delta: number,
      jointype: ClipperLib$JoinType,
      MiterLimit: number,
      AutoFix: boolean
    ): ArrayLike<ArrayLike<ClipperLib$IntPoint>>;
    SimplifyPolygon(
      poly: ClipperLib$Polygon,
      fillType: ClipperLib$PolyFillType
    ): ClipperLib$Polygon;
    SimplifyPolygons(
      polys: ClipperLib$Polygons,
      fillType: ClipperLib$PolyFillType
    ): ClipperLib$Polygons;
  }

  declare export class ClipperLib$DoublePoint {
    X: number;
    Y: number;
    constructor(x: number, y: number): this;
  }

  declare export class ClipperLib$PolyOffsetBuilder {
    pts: ClipperLib$Polygons;
    currentPoly: ClipperLib$Polygon;
    normals: ArrayLike<ClipperLib$IntPoint>;
    delta: number;
    m_R: number;
    m_i: number;
    m_j: number;
    m_k: number;
    botPt: ClipperLib$PolyOffsetBuilder;
    constructor(
      pts: ClipperLib$Polygons,
      solution: {
        value: ClipperLib$Polygons
      },
      delta: number,
      jointype: ClipperLib$JoinType,
      MiterLimit: number,
      AutoFix: boolean
    ): this;
    UpdateBotPt(pt: ClipperLib$IntPoint): boolean;
    AddPoint(pt: ClipperLib$IntPoint): void;
    DoSquare(mul: number): void;
    DoMiter(): void;
    DoRound(): void;
  }

  declare export function ClipperLib$Error(message: string): void;

  declare export function ClipperLib$Clone(
    polygon:
      | ArrayLike<ClipperLib$IntPoint>
      | ArrayLike<ArrayLike<ClipperLib$IntPoint>>
  ): ArrayLike<ClipperLib$IntPoint> | ArrayLike<ArrayLike<ClipperLib$IntPoint>>;

  declare export function ClipperLib$Clean(
    polygon:
      | ArrayLike<ClipperLib$IntPoint>
      | ArrayLike<ArrayLike<ClipperLib$IntPoint>>,
    delta: number
  ): ArrayLike<ClipperLib$IntPoint> | ArrayLike<ArrayLike<ClipperLib$IntPoint>>;

  declare export function ClipperLib$Lighten(
    polygon:
      | ArrayLike<ClipperLib$IntPoint>
      | ArrayLike<ArrayLike<ClipperLib$IntPoint>>,
    tolerance: number
  ): ArrayLike<ClipperLib$IntPoint> | ArrayLike<ArrayLike<ClipperLib$IntPoint>>;
}
