declare module "sketchapp" {
  declare type SketchMSBorderPositionEnum = 0 | 1 | 2 | 3;
  declare type SketchMSBorderLineCapStyle = 0 | 1 | 2;
  declare type SketchMSBorderLineJoinStyle = 0 | 1 | 2;
  declare type SketchMSFillTypeEnum = 0 | 1 | 4 | 5;
  declare type SketchMSPatternFillTypeEnum = 0 | 1 | 2 | 3;
  declare type SketchMSBlendModeEnum =
    | 0
    | 1
    | 2
    | 3
    | 4
    | 5
    | 6
    | 7
    | 8
    | 9
    | 10
    | 11
    | 12
    | 13
    | 14
    | 15;
  declare type SketchMSLineDecorationTypeEnum = 0 | 1 | 2 | 3;
  declare type SketchMSBooleanOperation = -1 | 0 | 1 | 2 | 3;
  declare type SketchMSCurveMode = 0 | 1 | 2 | 3 | 4;
  declare type SketchMSResizingType = 0 | 1 | 2 | 3;
  declare type SketchMSLayerListExpandedType = 0 | 1 | 2;
  declare type SketchMSEncodedBase64BinaryPlist = string;
  declare type SketchMSNSColorArchive = SketchMSKeyValueArchive;
  declare type SketchMSLayer = SketchMSPage | SketchMSSymbolMaster;
  declare interface SketchMSNestedSymbolOverride {
    symbolID: string;
  }
  declare interface SketchMSStringAttribute {
    _class: "stringAttribute";
    attributes: {
      MSAttributedStringFontAttribute: {
        _class: "fontDescriptor",
        attributes: {
          name: string,
          size: number
        }
      },
      paragraphStyle: {
        _class: "paragraphStyle",
        allowsDefaultTighteningForTruncation: number
      },
      foregroundColor: SketchMSKeyValueArchive
    };
  }
  declare interface SketchMSAttributedString {
    _class: "attributedString";
    string: string;
    attributes: SketchMSStringAttribute[];
    archivedAttributedString?: SketchMSKeyValueArchive;
  }
  declare interface SketchMSKeyValueArchive {
    _archive: SketchMSEncodedBase64BinaryPlist;
  }
  declare interface SketchMSFontAttribute {
    _class: "fontDescriptor";
    _archive?: string;
    attributes: {
      name: string,
      size: number
    };
  }
  declare interface SketchMSBorder {
    _class: "border";
    isEnabled: boolean;
    color: SketchMSColor;
    fillType: SketchMSFillTypeEnum;
    position: SketchMSBorderPositionEnum;
    thickness: number;
  }
  declare interface SketchMSBorderOptions {
    _class: "borderOptions";
    isEnabled: boolean;
    dashPattern: number[];
    lineCapStyle: SketchMSBorderLineCapStyle;
    lineJoinStyle: SketchMSBorderLineJoinStyle;
  }
  declare interface SketchMSImageDataReference {
    _class: "jSONOriginalDataReference";
    _ref: string;
    _ref_class: "imageData";
    data: {
      _data: string
    };
    sha1: {
      _data: string
    };
  }
  declare type SketchMSPointString = string;
  declare interface SketchMSPath {
    _class: "path";
    isClosed: boolean;
    points: SketchMSCurvePoint[];
  }
  declare interface SketchMSCurvePoint {
    _class: "curvePoint";
    cornerRadius: number;
    curveFrom: SketchMSPointString;
    curveMode: SketchMSCurveMode;
    curveTo: SketchMSPointString;
    hasCurveFrom: boolean;
    hasCurveTo: boolean;
    point: SketchMSPointString;
  }
  declare interface SketchMSFill {
    _class: "fill";
    isEnabled: boolean;
    color?: SketchMSColor;
    fillType: SketchMSFillTypeEnum;
    image?: SketchMSImageDataReference;
    noiseIndex: number;
    noiseIntensity: number;
    patternFillType: SketchMSPatternFillTypeEnum;
    patternTileScale: number;
  }
  declare interface SketchMSShadow {
    _class: "shadow" | "MSInnerShadow";
    isEnabled: boolean;
    blurRadius: number;
    color: SketchMSColor;
    contextSettings: SketchMSGraphicsContextSettings;
    offsetX: number;
    offsetY: number;
    spread: number;
  }
  declare interface SketchMSImageCollection {
    do_objectID?: string;
    _class: "imageCollection";
    images: any[];
  }
  declare interface SketchMSAssetCollection {
    do_objectID?: string;
    _class: "assetCollection";
    gradients: any[];
    colors: any[];
    imageCollection: SketchMSImageCollection;
    images: any[];
  }
  declare interface SketchMSStyleBorder {
    position: number;
    color: SketchMSColor;
    do_objectID?: string;
    _class: "styleBorder";
    gradient: SketchMSGradient;
    fillType: number;
    thickness: number;
    contextSettings: SketchMSGraphicsContextSettings;
    isEnabled: number;
  }
  declare interface SketchMSGradientStop {
    do_objectID?: string;
    _class: "gradientStop";
    color: SketchMSColor;
    position: number;
  }
  declare interface SketchMSGradient {
    from: {
      x: number,
      y: number
    };
    shouldSmoothenOpacity: boolean;
    gradientType: number;
    do_objectID?: string;
    _class: "gradient";
    stops: SketchMSGradientStop[];
    to: {
      x: number,
      y: number
    };
    elipseLength: number;
  }
  declare interface SketchMSStyleFill {
    contextSettings: SketchMSGraphicsContextSettings;
    color: SketchMSColor;
    do_objectID?: string;
    _class: "styleFill";
    gradient: SketchMSGradient;
    fillType: number;
    noiseIntensity: number;
    patternFillType: number;
    patternTileScale: number;
    noiseIndex: number;
    isEnabled: number;
  }
  declare interface SketchMSStyleShadow {
    spread: number;
    color: SketchMSColor;
    offsetY: number;
    offsetX: number;
    do_objectID?: string;
    _class: "styleShadow";
    blurRadius: number;
    contextSettings: SketchMSGraphicsContextSettings;
    isEnabled: number;
  }
  declare interface SketchMSSharedStyle {
    do_objectID?: string;
    _class: "sharedStyle";
    value: SketchMSStyle;
    objectID: string;
    name: string;
  }
  declare interface SketchMSTextStyle {
    _class: "textStyle";
    encodedAttributes: {
      MSAttributedStringColorAttribute?: SketchMSColor,
      NSColor: SketchMSKeyValueArchive,
      MSAttributedStringFontAttribute?: SketchMSFontAttribute,
      NSParagraphStyle?: SketchMSKeyValueArchive,
      NSKern: number
    };
  }
  declare interface SketchMSSharedStyleContainer {
    do_objectID?: string;
    _class: "sharedStyleContainer";
    objects: SketchMSSharedStyle[];
  }
  declare interface SketchMSStyleBorderOptions {
    lineJoinStyle: number;
    do_objectID?: string;
    _class: "styleBorderOptions";
    isEnabled: number;
    lineCapStyle: number;
    dashPattern: any[];
  }
  declare interface SketchMSGraphicsContextSettings {
    do_objectID?: string;
    _class: "graphicsContextSettings";
    opacity: number;
    blendMode: number;
  }
  declare interface SketchMSStyleBlur {
    radius: number;
    do_objectID?: string;
    _class: "styleBlur";
    motionAngle: number;
    isEnabled: number;
    type: number;
    center: {
      x: number,
      y: number
    };
  }
  declare interface SketchMSStyleReflection {
    do_objectID?: string;
    _class: "styleReflection";
    strength: number;
    isEnabled: number;
    distance: number;
  }
  declare interface SketchMSStyleColorControls {
    hue: number;
    do_objectID?: string;
    _class: "styleColorControls";
    brightness: number;
    contrast: number;
    isEnabled: number;
    saturation: number;
  }
  declare interface SketchMSStyle {
    startDecorationType: number;
    borderOptions: SketchMSStyleBorderOptions;
    endDecorationType: number;
    contextSettings: SketchMSGraphicsContextSettings;
    blur: SketchMSStyleBlur;
    textStyle: SketchMSTextStyle;
    reflection: SketchMSStyleReflection;
    do_objectID?: string;
    _class: "style";
    miterLimit: number;
    colorControls: SketchMSStyleColorControls;
    fills: SketchMSStyleFill[];
    borders: SketchMSStyleBorder[];
    innerShadows: SketchMSStyleShadow[];
    shadows: SketchMSStyleShadow[];
  }
  declare interface SketchMSRulerData {
    do_objectID?: string;
    _class: "rulerData";
    base: number;
    guides: any[];
  }
  declare interface SketchMSRect {
    y: number;
    do_objectID?: string;
    _class: "rect";
    constrainProportions: boolean;
    height: number;
    width: number;
    x: number;
  }
  declare interface SketchMSExportOptions {
    shouldTrim: boolean;
    do_objectID?: string;
    _class: "exportOptions";
    includedLayerIds: any[];
    layerOptions: number;
    exportFormats: any[];
  }
  declare interface SketchMSColor {
    do_objectID?: string;
    _class: "color";

    /**
     * ex: "#FFFFFF"
     * ex: rgb(1,0,1)
     */
    value: string;
    red: number;
    green: number;
    blue: number;
    alpha: number;
  }
  declare interface SketchMSSimpleGrid {
    do_objectID?: string;
    _class: "simpleGrid";
    thickGridTimes: number;
    objectID: string;
    isEnabled: number;
    gridSize: number;
  }
  declare interface SketchMSLayoutGrid {
    columnWidth: number;
    totalWidth: number;
    drawHorizontalLines: number;
    objectID: string;
    gutterWidth: number;
    horizontalOffset: number;
    isEnabled: number;
    do_objectID?: string;
    _class: "layoutGrid";
    gutterHeight: number;
    drawHorizontal: number;
    guttersOutside: number;
    numberOfColumns: number;
    drawVertical: number;
    rowHeightMultiplication: number;
  }
  declare interface SketchMSSymbolMaster {
    isFlippedHorizontal: number;
    includeBackgroundColorInInstance: number;
    objectID: string;
    horizontalRulerData: SketchMSRulerData;
    frame: SketchMSRect;
    hasClickThrough: number;
    includeInCloudUpload: number;
    exportOptions: SketchMSExportOptions;
    hasBackgroundColor: number;
    layerListExpandedType: number;
    resizesContent: number;
    backgroundColor: SketchMSColor;
    rotation: number;
    style: SketchMSStyle;
    verticalRulerData: SketchMSRulerData;
    constrainProportions: boolean;
    isFlippedVertical: number;
    do_objectID?: string;
    _class: "symbolMaster";
    attributedString: SketchMSAttributedString;
    name: string;
    layers: SketchMSLayer[];
    isVisible: boolean;
    nameIsFixed: boolean;
    grid: SketchMSSimpleGrid;
    resizingType: number;
    userInfo: any;
    isLocked: boolean;
    layout: SketchMSLayoutGrid;
    shouldBreakMaskChain: number;
    resizingConstraint: 63 | number;
    includeBackgroundColorInExport: number;
    flow?: SketchMSImmutableFlowConnection;
    css?: {
      [key: string]: string
    };
  }
  declare interface SketchMSSymbolInstanceLayer {
    _class: "symbolInstance";
    frame: SketchMSRect;
    horizontalSpacing: number;
    verticalSpacing: number;
    masterInfluenceEdgeMinXPadding?: number;
    masterInfluenceEdgeMaxXPadding?: number;
    masterInfluenceEdgeMinYPadding?: number;
    masterInfluenceEdgeMaxYPadding?: number;
    symbolID: string;
    overrides?: {
      [objectId: string]:
        | string
        | SketchMSNestedSymbolOverride
        | SketchMSImageDataReference
    };
    isFlippedHorizontal: number;
    includeBackgroundColorInInstance: number;
    objectID: string;
    horizontalRulerData: SketchMSRulerData;
    hasClickThrough: number;
    includeInCloudUpload: number;
    exportOptions: SketchMSExportOptions;
    hasBackgroundColor: number;
    layerListExpandedType: number;
    resizesContent: number;
    backgroundColor: SketchMSColor;
    rotation: number;
    style: SketchMSStyle;
    verticalRulerData: SketchMSRulerData;
    isFlippedVertical: number;
    do_objectID?: string;
    name: string;
    layers: SketchMSLayer[];
    isVisible: boolean;
    nameIsFixed: boolean;
    grid: SketchMSSimpleGrid;
    resizingType: number;
    userInfo: any;
    isLocked: boolean;
    layout: SketchMSLayoutGrid;
    shouldBreakMaskChain: number;
    resizingConstraint: 63 | number;
    includeBackgroundColorInExport: number;
    flow?: SketchMSImmutableFlowConnection;
  }
  declare interface SketchMSPage {
    isFlippedHorizontal: number;
    style: SketchMSStyle;
    horizontalRulerData: SketchMSRulerData;
    frame: SketchMSRect;
    hasClickThrough: number;
    includeInCloudUpload: number;
    exportOptions: SketchMSExportOptions;
    objectID: string;
    id: string;
    rotation: number;
    layerListExpandedType: number;
    verticalRulerData: SketchMSRulerData;
    isFlippedVertical: number;
    resizingType: number;
    do_objectID?: string;
    _class: "page" | "layer";
    layers: SketchMSLayer[];
    isVisible: boolean;
    nameIsFixed: number;
    name: string;
    constrainProportions: boolean;
    attributedString: SketchMSAttributedString;
    isLocked: boolean;
    shouldBreakMaskChain: number;
    resizingConstraint: number;
    fixedRadius: number;
    css?: {
      [key: string]: string
    };
  }
  declare interface SketchMSSharedTextStyleContainer {
    do_objectID?: string;
    _class: "sharedTextStyleContainer";
    objects: any[];
  }
  declare interface SketchMSSymbolContainers {
    do_objectID?: string;
    _class: "symbolContainer";
    objects: any[];
  }
  declare interface SketchMSDocumentData {
    assets: SketchMSAssetCollection;
    currentPageIndex: number;
    foreignSymbols: any[];
    layerStyles: SketchMSSharedStyleContainer;
    pages: SketchMSPage[];
    enableSliceInteraction: number;
    do_objectID?: string;
    _class: "documentData";
    layerTextStyles: SketchMSSharedTextStyleContainer;
    enableLayerInteraction: number;
    layerSymbols: SketchMSSymbolContainers;
    objectID: string;
  }
  declare interface SketchMSArtboards {
    name: string;
    artboards: SketchMSArtboard;
  }
  declare interface SketchMSArtboard {
    frame: SketchMSRect;
    backgroundColor: SketchMSColor;
    hasBackgroundColor: boolean;
    horizontalRulerData?: SketchMSRulerData;
    verticalRulerData?: SketchMSRulerData;
    includeBackgroundColorInExport?: boolean;
    includeInCloudUpload?: boolean;
    isFlowHome?: boolean;
  }
  declare interface SketchMSPagesAndArtboards {
    [key: string]: SketchMSArtboards;
  }
  declare interface SketchMSMetadata {
    commit: string;
    pagesAndArtboards: SketchMSPagesAndArtboards;
    version: number;
    fonts: string[];
    compatibilityVersion: number;
    app: string;
    autosaved: number;
    variant: string;
    created: {
      commit: string,
      appVersion: string,
      build: number,
      app: string,
      compatibilityVersion: number,
      version: number,
      variant: string
    };
    saveHistory: string[];
    appVersion: string;
    build: number;
  }
  declare interface SketchMSImmutableFlowConnection {
    _class: "immutableFlowConnection";
    animationType: number;
    destinationArtboardID?: string | "back";
  }
}
