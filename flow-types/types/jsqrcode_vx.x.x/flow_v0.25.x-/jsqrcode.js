declare module "jsqrcode" {
  declare function URShift(number: number, bits: number): number;

  declare interface ResultPointCallback {
    foundPossibleResultPoint(point: FinderPattern): void;
  }
  declare class AlignmentPattern {
    X: number;
    Y: number;
    EstimatedModuleSize: number;
    Count: number;
    constructor(posX: number, posY: number, estimatedModuleSize: number): this;
    incrementCount(): void;
    aboutEquals(moduleSize: number, i: number, j: number): boolean;
  }
  declare class AlignmentPatternFinder {
    possibleCenters: AlignmentPattern[];
    crossCheckStateCount: [number, number, number];
    image: Uint8Array;
    startX: number;
    startY: number;
    width: number;
    height: number;
    moduleSize: number;
    resultPointCallback: ResultPointCallback;
    constructor(
      image: Uint8Array,
      startX: number,
      startY: number,
      width: number,
      height: number,
      moduleSize: number,
      resultPointCallback: ResultPointCallback
    ): this;
    find(): AlignmentPattern;
  }
  declare class BitMatrix {
    Width: number;
    Height: number;
    Dimension: number;
    rowSize: number;
    bits: number[];
    constructor(width: number, height?: number): this;
    get_Renamed(x: number, y: number): boolean;
    set_Renamed(x: number, y: number): void;
    flip(x: number, y: number): void;
    clear(): void;
    setRegion(left: number, top: number, width: number, height: number): void;
  }
  declare class BitMatrixParser {
    bitMatrix: BitMatrix;
    parsedVersion: Version;
    parsedFormatInfo: FormatInformation;
    constructor(bitMatrix: BitMatrix): this;
    copyBit(i: number, j: number, versionBits: number): number;
    readFormatInformation(): FormatInformation;
    readVersion(): Version;
    readCodewords(): number[];
  }
  declare class DataBlock {
    static getDataBlocks(
      rawCodewords: number[],
      version: Version,
      ecLevel: ErrorCorrectionLevel
    ): DataBlock[];
    NumDataCodewords: number;
    Codewords: number[];
    constructor(numDataCodewords: number, codewords: number[]): this;
  }
  declare class QRCodeDataBlockReader {
    blockPointer: number;
    bitPointer: number;
    dataLength: number;
    dataLengthMode: number;
    blocks: number[];
    numErrorCorrectionCode: number;
    DataByte: Array<string | number[]>;
    constructor(
      blocks: number[],
      version: number,
      numErrorCorrectionCode: number
    ): this;
    getNextBits(numBits: number): number;
    NextMode(): number;
    getDataLength(modeIndicator: number): number;
    getRomanAndFigureString(dataLength: number): string;
    getFigureString(dataLength: number): string;
    get8bitByteArray(dataLength: number): number[];
    getKanjiString(dataLength: number): string;
    parseECIValue(): number;
  }
  declare class DataMask {
    static forReference(reference: number): DataMask;
    unmaskBitMatrix(bits: number[], dimension: number): void;
    isMasked(i: number, j: number): boolean;
  }
  declare class DataMask000 mixins DataMask {
    unmaskBitMatrix(bits: number[], dimension: number): void;
    isMasked(i: number, j: number): boolean;
  }
  declare class DataMask001 mixins DataMask {
    unmaskBitMatrix(bits: number[], dimension: number): void;
    isMasked(i: number, j: number): boolean;
  }
  declare class DataMask010 mixins DataMask {
    unmaskBitMatrix(bits: number[], dimension: number): void;
    isMasked(i: number, j: number): boolean;
  }
  declare class DataMask011 mixins DataMask {
    unmaskBitMatrix(bits: number[], dimension: number): void;
    isMasked(i: number, j: number): boolean;
  }
  declare class DataMask100 mixins DataMask {
    unmaskBitMatrix(bits: number[], dimension: number): void;
    isMasked(i: number, j: number): boolean;
  }
  declare class DataMask101 mixins DataMask {
    unmaskBitMatrix(bits: number[], dimension: number): void;
    isMasked(i: number, j: number): boolean;
  }
  declare class DataMask110 mixins DataMask {
    unmaskBitMatrix(bits: number[], dimension: number): void;
    isMasked(i: number, j: number): boolean;
  }
  declare class DataMask111 mixins DataMask {
    unmaskBitMatrix(bits: number[], dimension: number): void;
    isMasked(i: number, j: number): boolean;
  }
  declare var Decoder: {
    rsDecoder: ReedSolomonDecoder,
    correctErrors(codewordBytes: number[], numDataCodewords: number): void,
    decode(bits: BitMatrix): QRCodeDataBlockReader
  };
  declare class PerspectiveTransform {
    a11: number;
    a12: number;
    a13: number;
    a21: number;
    a22: number;
    a23: number;
    a31: number;
    a32: number;
    a33: number;
    static quadrilateralToQuadrilateral(
      x0: number,
      y0: number,
      x1: number,
      y1: number,
      x2: number,
      y2: number,
      x3: number,
      y3: number,
      x0p: number,
      y0p: number,
      x1p: number,
      y1p: number,
      x2p: number,
      y2p: number,
      x3p: number,
      y3p: number
    ): PerspectiveTransform;
    static squareToQuadrilateral(
      x0: number,
      y0: number,
      x1: number,
      y1: number,
      x2: number,
      y2: number,
      x3: number,
      y3: number
    ): PerspectiveTransform;
    static quadrilateralToSquare(
      x0: number,
      y0: number,
      x1: number,
      y1: number,
      x2: number,
      y2: number,
      x3: number,
      y3: number
    ): PerspectiveTransform;
    constructor(
      a11: number,
      a21: number,
      a31: number,
      a12: number,
      a22: number,
      a32: number,
      a13: number,
      a23: number,
      a33: number
    ): this;
    transformPoints1(points: number[]): void;
    transformPoints2(xValues: number[], yValues: number[]): void;
    buildAdjoint(): PerspectiveTransform;
    times(other: PerspectiveTransform): PerspectiveTransform;
  }
  declare class DetectorResult {
    bits: BitMatrix;
    points:
      | [DetectorResult, DetectorResult, DetectorResult]
      | [DetectorResult, DetectorResult, DetectorResult, DetectorResult];
    constructor(
      bits: BitMatrix,
      points:
        | [DetectorResult, DetectorResult, DetectorResult]
        | [DetectorResult, DetectorResult, DetectorResult, DetectorResult]
    ): this;
  }
  declare class Detector {
    image: Uint8Array;
    resultPointCallback: ResultPointCallback;
    constructor(image: Uint8Array): this;
    sizeOfBlackWhiteBlackRun(
      fromX: number,
      fromY: number,
      toX: number,
      toY: number
    ): number;
    sizeOfBlackWhiteBlackRunBothWays(
      fromX: number,
      fromY: number,
      toX: number,
      toY: number
    ): number;
    calculateModuleSizeOneWay(
      pattern: AlignmentPattern,
      otherPattern: AlignmentPattern
    ): number;
    calculateModuleSize(
      topLeft: AlignmentPattern,
      topRight: AlignmentPattern,
      bottomLeft: AlignmentPattern
    ): number;
    distance(pattern1: AlignmentPattern, pattern2: AlignmentPattern): number;
    computeDimension(
      topLeft: AlignmentPattern,
      topRight: AlignmentPattern,
      bottomLeft: AlignmentPattern,
      moduleSize: number
    ): number;
    findAlignmentInRegion(
      overallEstModuleSize: number,
      estAlignmentX: number,
      estAlignmentY: number,
      allowanceFactor: number
    ): AlignmentPattern;
    createTransform(
      topLeft: AlignmentPattern,
      topRight: AlignmentPattern,
      bottomLeft: AlignmentPattern,
      alignmentPattern: AlignmentPattern,
      dimension: number
    ): PerspectiveTransform;
    sampleGrid(
      image: Uint8Array,
      transform: PerspectiveTransform,
      dimension: number
    ): BitMatrix;
    processFinderPatternInfo(info: FinderPatternInfo): DetectorResult;
    detect(): DetectorResult;
  }
  declare var L: ErrorCorrectionLevel;
  declare var M: ErrorCorrectionLevel;
  declare var Q: ErrorCorrectionLevel;
  declare var H: ErrorCorrectionLevel;
  declare var FOR_BITS: ErrorCorrectionLevel[];
  declare class ErrorCorrectionLevel {
    Bits: number;
    Name: string;
    static forBits(bits: number): ErrorCorrectionLevel;
    constructor(ordinal: number, bits: number, name: string): this;
  }
  declare var MIN_SKIP: number;
  declare var MAX_MODULES: number;
  declare var INTEGER_MATH_SHIFT: number;
  declare var CENTER_QUORUM: number;
  declare class FinderPattern {
    X: number;
    Y: number;
    Count: number;
    EstimatedModuleSize: number;
    constructor(posX: number, posY: number, estimatedModuleSize: number): this;
    incrementCount(): void;
    aboutEquals(moduleSize: number, i: number, j: number): boolean;
  }
  declare class FinderPatternInfo {
    BottomLeft: AlignmentPattern;
    TopLeft: AlignmentPattern;
    TopRight: AlignmentPattern;
    constructor(
      patternCenters: [AlignmentPattern, AlignmentPattern, AlignmentPattern]
    ): this;
  }
  declare class FinderPatternFinder {
    image: Uint8Array;
    possibleCenters: FinderPattern[];
    hasSkipped: boolean;
    resultPointCallback: ResultPointCallback;
    CrossCheckStateCount: [number, number, number, number, number];
    foundPatternCross(
      stateCount: [number, number, number, number, number]
    ): boolean;
    centerFromEnd(
      stateCount: [number, number, number, number, number],
      end: number
    ): number;
    crossCheckVertical(
      startI: number,
      centerJ: number,
      maxCount: number,
      originalStateCountTotal: number
    ): number;
    crossCheckHorizontal(
      startJ: number,
      centerI: number,
      maxCount: number,
      originalStateCountTotal: number
    ): number;
    handlePossibleCenter(
      stateCount: [number, number, number, number, number],
      i: number,
      j: number
    ): boolean;
    selectBestPatterns(): number;
    findRowSkip(): number;
    haveMultiplyConfirmedCenters(): boolean;
    findFinderPattern(image: Uint8Array): FinderPatternInfo;
  }
  declare var FORMAT_INFO_MASK_QR: 21522;
  declare var FORMAT_INFO_DECODE_LOOKUP: [
    [21522, 0],
    [20773, 1],
    [24188, 2],
    [23371, 3],
    [17913, 4],
    [16590, 5],
    [20375, 6],
    [19104, 7],
    [30660, 8],
    [29427, 9],
    [32170, 10],
    [30877, 11],
    [26159, 12],
    [25368, 13],
    [27713, 14],
    [26998, 15],
    [5769, 16],
    [5054, 17],
    [7399, 18],
    [6608, 19],
    [1890, 20],
    [597, 21],
    [3340, 22],
    [2107, 23],
    [13663, 24],
    [12392, 25],
    [16177, 26],
    [14854, 27],
    [9396, 28],
    [8579, 29],
    [11994, 30],
    [11245, 31]
  ];
  declare var BITS_SET_IN_HALF_BYTE: [
    0,
    1,
    1,
    2,
    1,
    2,
    2,
    3,
    1,
    2,
    2,
    3,
    2,
    3,
    3,
    4
  ];
  declare class FormatInformation {
    static numBitsDiffering(a: number, b: [number, number]): number;
    static decodeFormatInformation(maskedFormatInfo: number): FormatInformation;
    ErrorCorrectionLevel: ErrorCorrectionLevel;
    DataMask: number;
    GetHashCode(): number;
    Equals(other: FormatInformation): boolean;
  }
  declare class GF256 {
    static QR_CODE_FIELD: GF256;
    static DATA_MATRIX_FIELD: GF256;
    expTable: number[];
    logTable: number[];
    Zero: GF256Poly;
    One: GF256Poly;
    static addOrSubtract(a: number, b: number): number;
    constructor(primitive: number): this;
    buildMonomial(degree: number, coefficient: number): GF256Poly;
    exp(a: number): number;
    log(a: number): number;
    inverse(a: number): number;
    multiply(a: number, b: number): number;
  }
  declare class GF256Poly {
    field: GF256;
    Zero: boolean;
    Degree: number;
    Coefficients: number[];
    constructor(field: GF256, coefficients: number[]): this;
    getCoefficient(degree: number): number;
    evaluateAt(a: number): number;
    addOrSubtract(other: GF256Poly): GF256Poly;
    multiply1(other: GF256Poly): GF256Poly;
    multiply2(scalar: number): GF256Poly;
    multiplyByMonomial(degree: number, coefficient: number): GF256Poly;
    divide(other: GF256Poly): [GF256Poly, GF256Poly];
  }
  declare var GridSampler: {
    checkAndNudgePoints(image: Uint8Array, points: number[]): void,
    sampleGrid3(
      image: Uint8Array,
      dimension: number,
      transform: PerspectiveTransform
    ): BitMatrix,
    sampleGridx(
      image: Uint8Array,
      dimension: number,
      p1ToX: number,
      p1ToY: number,
      p2ToX: number,
      p2ToY: number,
      p3ToX: number,
      p3ToY: number,
      p4ToX: number,
      p4ToY: number,
      p1FromX: number,
      p1FromY: number,
      p2FromX: number,
      p2FromY: number,
      p3FromX: number,
      p3FromY: number,
      p4FromX: number,
      p4FromY: number
    ): BitMatrix
  };
  declare class ReedSolomonDecoder {
    field: GF256;
    constructor(field: GF256): this;
    decode(received: GF256, twoS: number[]): void;
    runEuclideanAlgorithm(
      a: GF256Poly,
      b: GF256Poly,
      R: number
    ): [GF256Poly, GF256Poly];
    findErrorLocations(errorLocator: GF256Poly): number[];
    findErrorMagnitudes(
      errorEvaluator: GF256Poly,
      errorLocations: number[],
      dataMatrix: boolean
    ): number[];
  }
  declare function buildVersions(): Version[];

  declare class ECB {
    Count: number;
    DataCodewords: number;
    constructor(count: number, dataCodewords: number): this;
  }
  declare class ECBlocks {
    ECCodewordsPerBlock: number;
    TotalECCodewords: number;
    NumBlocks: number;
    constructor(
      ecCodewordsPerBlock: number,
      ecBlocks1: ECB,
      ecBlocks2?: ECB
    ): this;
    getECBlocks(): [ECB] | [ECB, ECB];
  }
  declare class Version {
    static VERSION_DECODE_INFO: [
      31892,
      34236,
      39577,
      42195,
      48118,
      51042,
      55367,
      58893,
      63784,
      68472,
      70749,
      76311,
      79154,
      84390,
      87683,
      92361,
      96236,
      102084,
      102881,
      110507,
      110734,
      117786,
      119615,
      126325,
      127568,
      133589,
      136944,
      141498,
      145311,
      150283,
      152622,
      158308,
      161089,
      167017
    ];
    static VERSIONS: Version[];
    static getVersionForNumber(versionNumber: number): Version;
    static getProvisionalVersionForDimension(dimension: number): Version;
    static decodeVersionInformation(versionBits: number): Version;
    versionNumber: number;
    alignmentPatternCenters: number[];
    ecBlocks: ECBlocks[];
    VersionNumber: number;
    AlignmentPatternCenters: number[];
    TotalCodewords: number;
    DimensionForVersion: number;
    constructor(
      versionNumber: number,
      alignmentPatternCenters: number[],
      ecBlocks1: ECBlocks,
      ecBlocks2: ECBlocks,
      ecBlocks3: ECBlocks,
      ecBlocks4: ECBlocks
    ): this;
    buildFunctionPattern(): BitMatrix;
    getECBlocksForLevel(ecLevel: ErrorCorrectionLevel): ECBlocks;
  }
  declare var qrcode: {
    imagedata: ImageData,
    width: number,
    height: number,
    qrCodeSymbol: any,
    debug: boolean,
    maxImgSize: number,
    +sizeOfDataLengthInfo: [[10, 9, 8, 8], [12, 11, 16, 10], [14, 13, 16, 12]],
    callback: (result: string) => void,
    orderBestPatterns(patterns: AlignmentPattern[]): void,
    vidError(error?: any): void,
    captureToCanvas(): void,
    setWebcam(videoId: string): void,
    decode(src?: string): void,
    isUrl(s: string): boolean,
    decode_url(s: string): string,
    decode_utf8(s: string): string,
    process(ctx: CanvasRenderingContext2D): string,
    getPixel(x: number, y: number): number,
    binarize(th: number): boolean[],
    getMiddleBrightnessPerArea(image: number[]): number[][],
    grayScaleToBitmap(grayScale: number[]): Uint8Array,
    grayscale(): Uint8Array
  };
}
