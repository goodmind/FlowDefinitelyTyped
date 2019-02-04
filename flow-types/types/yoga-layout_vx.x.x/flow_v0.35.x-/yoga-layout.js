declare module 'yoga-layout' {
        declare export var ALIGN_AUTO: 0;
	declare export var ALIGN_COUNT: 8;
	declare export var ALIGN_FLEX_START: 1;
	declare export var ALIGN_CENTER: 2;
	declare export var ALIGN_FLEX_END: 3;
	declare export var ALIGN_STRETCH: 4;
	declare export var ALIGN_BASELINE: 5;
	declare export var ALIGN_SPACE_BETWEEN: 6;
	declare export var ALIGN_SPACE_AROUND: 7;
	declare export var DIMENSION_COUNT: 2;
	declare export var DIMENSION_WIDTH: 0;
	declare export var DIMENSION_HEIGHT: 1;
	declare export var DIRECTION_COUNT: 3;
	declare export var DIRECTION_INHERIT: 0;
	declare export var DIRECTION_LTR: 1;
	declare export var DIRECTION_RTL: 2;
	declare export var DISPLAY_COUNT: 2;
	declare export var DISPLAY_FLEX: 0;
	declare export var DISPLAY_NONE: 1;
	declare export var EDGE_COUNT: 9;
	declare export var EDGE_LEFT: 0;
	declare export var EDGE_TOP: 1;
	declare export var EDGE_RIGHT: 2;
	declare export var EDGE_BOTTOM: 3;
	declare export var EDGE_START: 4;
	declare export var EDGE_END: 5;
	declare export var EDGE_HORIZONTAL: 6;
	declare export var EDGE_VERTICAL: 7;
	declare export var EDGE_ALL: 8;
	declare export var EXPERIMENTAL_FEATURE_COUNT: 1;
	declare export var EXPERIMENTAL_FEATURE_WEB_FLEX_BASIS: 0;
	declare export var FLEX_DIRECTION_COUNT: 4;
	declare export var FLEX_DIRECTION_COLUMN: 0;
	declare export var FLEX_DIRECTION_COLUMN_REVERSE: 1;
	declare export var FLEX_DIRECTION_ROW: 2;
	declare export var FLEX_DIRECTION_ROW_REVERSE: 3;
	declare export var JUSTIFY_COUNT: 6;
	declare export var JUSTIFY_FLEX_START: 0;
	declare export var JUSTIFY_CENTER: 1;
	declare export var JUSTIFY_FLEX_END: 2;
	declare export var JUSTIFY_SPACE_BETWEEN: 3;
	declare export var JUSTIFY_SPACE_AROUND: 4;
	declare export var JUSTIFY_SPACE_EVENLY: 5;
	declare export var LOG_LEVEL_COUNT: 6;
	declare export var LOG_LEVEL_ERROR: 0;
	declare export var LOG_LEVEL_WARN: 1;
	declare export var LOG_LEVEL_INFO: 2;
	declare export var LOG_LEVEL_DEBUG: 3;
	declare export var LOG_LEVEL_VERBOSE: 4;
	declare export var LOG_LEVEL_FATAL: 5;
	declare export var MEASURE_MODE_COUNT: 3;
	declare export var MEASURE_MODE_UNDEFINED: 0;
	declare export var MEASURE_MODE_EXACTLY: 1;
	declare export var MEASURE_MODE_AT_MOST: 2;
	declare export var NODE_TYPE_COUNT: 2;
	declare export var NODE_TYPE_DEFAULT: 0;
	declare export var NODE_TYPE_TEXT: 1;
	declare export var OVERFLOW_COUNT: 3;
	declare export var OVERFLOW_VISIBLE: 0;
	declare export var OVERFLOW_HIDDEN: 1;
	declare export var OVERFLOW_SCROLL: 2;
	declare export var POSITION_TYPE_COUNT: 2;
	declare export var POSITION_TYPE_RELATIVE: 0;
	declare export var POSITION_TYPE_ABSOLUTE: 1;
	declare export var PRINT_OPTIONS_COUNT: 3;
	declare export var PRINT_OPTIONS_LAYOUT: 1;
	declare export var PRINT_OPTIONS_STYLE: 2;
	declare export var PRINT_OPTIONS_CHILDREN: 4;
	declare export var UNIT_COUNT: 4;
	declare export var UNIT_UNDEFINED: 0;
	declare export var UNIT_POINT: 1;
	declare export var UNIT_PERCENT: 2;
	declare export var UNIT_AUTO: 3;
	declare export var WRAP_COUNT: 3;
	declare export var WRAP_NO_WRAP: 0;
	declare export var WRAP_WRAP: 1;
	declare export var WRAP_WRAP_REVERSE: 2;
	declare interface ConstantsStatic {
+ALIGN_AUTO: typeof ALIGN_AUTO,
+ALIGN_COUNT: typeof ALIGN_COUNT,
+ALIGN_FLEX_START: typeof ALIGN_FLEX_START,
+ALIGN_CENTER: typeof ALIGN_CENTER,
+ALIGN_FLEX_END: typeof ALIGN_FLEX_END,
+ALIGN_STRETCH: typeof ALIGN_STRETCH,
+ALIGN_BASELINE: typeof ALIGN_BASELINE,
+ALIGN_SPACE_BETWEEN: typeof ALIGN_SPACE_BETWEEN,
+ALIGN_SPACE_AROUND: typeof ALIGN_SPACE_AROUND,
+DIMENSION_COUNT: typeof DIMENSION_COUNT,
+DIMENSION_WIDTH: typeof DIMENSION_WIDTH,
+DIMENSION_HEIGHT: typeof DIMENSION_HEIGHT,
+DIRECTION_COUNT: typeof DIRECTION_COUNT,
+DIRECTION_INHERIT: typeof DIRECTION_INHERIT,
+DIRECTION_LTR: typeof DIRECTION_LTR,
+DIRECTION_RTL: typeof DIRECTION_RTL,
+DISPLAY_COUNT: typeof DISPLAY_COUNT,
+DISPLAY_FLEX: typeof DISPLAY_FLEX,
+DISPLAY_NONE: typeof DISPLAY_NONE,
+EDGE_COUNT: typeof EDGE_COUNT,
+EDGE_LEFT: typeof EDGE_LEFT,
+EDGE_TOP: typeof EDGE_TOP,
+EDGE_RIGHT: typeof EDGE_RIGHT,
+EDGE_BOTTOM: typeof EDGE_BOTTOM,
+EDGE_START: typeof EDGE_START,
+EDGE_END: typeof EDGE_END,
+EDGE_HORIZONTAL: typeof EDGE_HORIZONTAL,
+EDGE_VERTICAL: typeof EDGE_VERTICAL,
+EDGE_ALL: typeof EDGE_ALL,
+EXPERIMENTAL_FEATURE_COUNT: typeof EXPERIMENTAL_FEATURE_COUNT,
+EXPERIMENTAL_FEATURE_WEB_FLEX_BASIS: typeof EXPERIMENTAL_FEATURE_WEB_FLEX_BASIS,
+FLEX_DIRECTION_COUNT: typeof FLEX_DIRECTION_COUNT,
+FLEX_DIRECTION_COLUMN: typeof FLEX_DIRECTION_COLUMN,
+FLEX_DIRECTION_COLUMN_REVERSE: typeof FLEX_DIRECTION_COLUMN_REVERSE,
+FLEX_DIRECTION_ROW: typeof FLEX_DIRECTION_ROW,
+FLEX_DIRECTION_ROW_REVERSE: typeof FLEX_DIRECTION_ROW_REVERSE,
+JUSTIFY_COUNT: typeof JUSTIFY_COUNT,
+JUSTIFY_FLEX_START: typeof JUSTIFY_FLEX_START,
+JUSTIFY_CENTER: typeof JUSTIFY_CENTER,
+JUSTIFY_FLEX_END: typeof JUSTIFY_FLEX_END,
+JUSTIFY_SPACE_BETWEEN: typeof JUSTIFY_SPACE_BETWEEN,
+JUSTIFY_SPACE_AROUND: typeof JUSTIFY_SPACE_AROUND,
+JUSTIFY_SPACE_EVENLY: typeof JUSTIFY_SPACE_EVENLY,
+LOG_LEVEL_COUNT: typeof LOG_LEVEL_COUNT,
+LOG_LEVEL_ERROR: typeof LOG_LEVEL_ERROR,
+LOG_LEVEL_WARN: typeof LOG_LEVEL_WARN,
+LOG_LEVEL_INFO: typeof LOG_LEVEL_INFO,
+LOG_LEVEL_DEBUG: typeof LOG_LEVEL_DEBUG,
+LOG_LEVEL_VERBOSE: typeof LOG_LEVEL_VERBOSE,
+LOG_LEVEL_FATAL: typeof LOG_LEVEL_FATAL,
+MEASURE_MODE_COUNT: typeof MEASURE_MODE_COUNT,
+MEASURE_MODE_UNDEFINED: typeof MEASURE_MODE_UNDEFINED,
+MEASURE_MODE_EXACTLY: typeof MEASURE_MODE_EXACTLY,
+MEASURE_MODE_AT_MOST: typeof MEASURE_MODE_AT_MOST,
+NODE_TYPE_COUNT: typeof NODE_TYPE_COUNT,
+NODE_TYPE_DEFAULT: typeof NODE_TYPE_DEFAULT,
+NODE_TYPE_TEXT: typeof NODE_TYPE_TEXT,
+OVERFLOW_COUNT: typeof OVERFLOW_COUNT,
+OVERFLOW_VISIBLE: typeof OVERFLOW_VISIBLE,
+OVERFLOW_HIDDEN: typeof OVERFLOW_HIDDEN,
+OVERFLOW_SCROLL: typeof OVERFLOW_SCROLL,
+POSITION_TYPE_COUNT: typeof POSITION_TYPE_COUNT,
+POSITION_TYPE_RELATIVE: typeof POSITION_TYPE_RELATIVE,
+POSITION_TYPE_ABSOLUTE: typeof POSITION_TYPE_ABSOLUTE,
+PRINT_OPTIONS_COUNT: typeof PRINT_OPTIONS_COUNT,
+PRINT_OPTIONS_LAYOUT: typeof PRINT_OPTIONS_LAYOUT,
+PRINT_OPTIONS_STYLE: typeof PRINT_OPTIONS_STYLE,
+PRINT_OPTIONS_CHILDREN: typeof PRINT_OPTIONS_CHILDREN,
+UNIT_COUNT: typeof UNIT_COUNT,
+UNIT_UNDEFINED: typeof UNIT_UNDEFINED,
+UNIT_POINT: typeof UNIT_POINT,
+UNIT_PERCENT: typeof UNIT_PERCENT,
+UNIT_AUTO: typeof UNIT_AUTO,
+WRAP_COUNT: typeof WRAP_COUNT,
+WRAP_NO_WRAP: typeof WRAP_NO_WRAP,
+WRAP_WRAP: typeof WRAP_WRAP,
+WRAP_WRAP_REVERSE: typeof WRAP_WRAP_REVERSE
} 
	declare var Constans: ConstantsStatic;
	declare export type YogaJustifyContent = typeof JUSTIFY_CENTER
| typeof JUSTIFY_FLEX_END
| typeof JUSTIFY_FLEX_START
| typeof JUSTIFY_SPACE_AROUND
| typeof JUSTIFY_SPACE_BETWEEN
| typeof JUSTIFY_SPACE_EVENLY;
	declare export type YogaAlign = typeof ALIGN_AUTO
| typeof ALIGN_BASELINE
| typeof ALIGN_CENTER
| typeof ALIGN_FLEX_END
| typeof ALIGN_FLEX_START
| typeof ALIGN_SPACE_AROUND
| typeof ALIGN_SPACE_BETWEEN
| typeof ALIGN_STRETCH;
	declare export type YogaFlexDirection = typeof FLEX_DIRECTION_COLUMN
| typeof FLEX_DIRECTION_COLUMN_REVERSE
| typeof FLEX_DIRECTION_COUNT
| typeof FLEX_DIRECTION_ROW
| typeof FLEX_DIRECTION_ROW_REVERSE;
	declare export type YogaDirection = typeof DIRECTION_INHERIT | typeof DIRECTION_LTR | typeof DIRECTION_RTL;
	declare export type YogaFlexWrap = typeof WRAP_NO_WRAP | typeof WRAP_WRAP | typeof WRAP_WRAP_REVERSE;
	declare export type YogaEdge = typeof EDGE_LEFT
| typeof EDGE_TOP
| typeof EDGE_RIGHT
| typeof EDGE_BOTTOM
| typeof EDGE_START
| typeof EDGE_END
| typeof EDGE_HORIZONTAL
| typeof EDGE_VERTICAL
| typeof EDGE_ALL;
	declare export type YogaDisplay = typeof DISPLAY_FLEX | typeof DISPLAY_NONE;
	declare export type YogaUnit = typeof UNIT_AUTO | typeof UNIT_PERCENT | typeof UNIT_POINT | typeof UNIT_UNDEFINED;
	declare export type YogaOverflow = typeof OVERFLOW_HIDDEN | typeof OVERFLOW_SCROLL | typeof OVERFLOW_VISIBLE;
	declare export type YogaPositionType = typeof POSITION_TYPE_ABSOLUTE | typeof POSITION_TYPE_RELATIVE;
	declare export type YogaExperimentalFeature = typeof EXPERIMENTAL_FEATURE_WEB_FLEX_BASIS;
	declare export interface YogaNode {
calculateLayout(width?: number, height?: number, direction?: YogaDirection): void,
copyStyle(node: YogaNode): void,
free(): void,
freeRecursive(): void,
getAlignContent(): YogaAlign,
getAlignItems(): YogaAlign,
getAlignSelf(): YogaAlign,
getAspectRatio(): number,
getBorder(edge: YogaEdge): number,
getChild(index: number): YogaNode,
getChildCount(): number,
getComputedBorder(edge: YogaEdge): number,
getComputedBottom(): number,
getComputedHeight(): number,
getComputedLayout(): Layout,
getComputedLeft(): number,
getComputedMargin(edge: YogaEdge): number,
getComputedPadding(edge: YogaEdge): number,
getComputedRight(): number,
getComputedTop(): number,
getComputedWidth(): number,
getDisplay(): YogaDisplay,
getFlexBasis(): number,
getFlexDirection(): YogaFlexDirection,
getFlexGrow(): number,
getFlexShrink(): number,
getFlexWrap(): YogaFlexWrap,
getHeight(): Value,
getJustifyContent(): YogaJustifyContent,
getMargin(edge: YogaEdge): Value,
getMaxHeight(): Value,
getMaxWidth(): Value,
getMinHeight(): Value,
getMinWidth(): Value,
getOverflow(): YogaOverflow,
getPadding(edge: YogaEdge): Value,
getParent(): YogaNode | null,
getPosition(edge: YogaEdge): Value,
getPositionType(): YogaPositionType,
getWidth(): Value,
insertChild(child: YogaNode, index: number): void,
isDirty(): boolean,
markDirty(): void,
removeChild(child: YogaNode): void,
reset(): void,
setAlignContent(alignContent: YogaAlign): void,
setAlignItems(alignItems: YogaAlign): void,
setAlignSelf(alignSelf: YogaAlign): void,
setAspectRatio(aspectRatio: number): void,
setBorder(edge: YogaEdge, borderWidth: number): void,
setDisplay(display: YogaDisplay): void,
setFlex(flex: number): void,
setFlexBasis(flexBasis: number | string): void,
setFlexBasisPercent(flexBasis: number): void,
setFlexDirection(flexDirection: YogaFlexDirection): void,
setFlexGrow(flexGrow: number): void,
setFlexShrink(flexShrink: number): void,
setFlexWrap(flexWrap: YogaFlexWrap): void,
setHeight(height: number | string): void,
setHeightAuto(): void,
setHeightPercent(height: number): void,
setJustifyContent(justifyContent: YogaJustifyContent): void,
setMargin(edge: YogaEdge, margin: number): void,
setMarginAuto(edge: YogaEdge): void,
setMarginPercent(edge: YogaEdge, margin: number): void,
setMaxHeight(maxHeight: number | string): void,
setMaxHeightPercent(maxHeight: number): void,
setMaxWidth(maxWidth: number | string): void,
setMaxWidthPercent(maxWidth: number): void,
setMeasureFunc(measureFunc: (() => any) | null): void,
setMinHeight(minHeight: number | string): void,
setMinHeightPercent(minHeight: number): void,
setMinWidth(minWidth: number | string): void,
setMinWidthPercent(minWidth: number): void,
setOverflow(overflow: YogaOverflow): void,
setPadding(edge: YogaEdge, padding: number | string): void,
setPaddingPercent(edge: YogaEdge, padding: number): void,
setPosition(edge: YogaEdge, position: number | string): void,
setPositionPercent(edge: YogaEdge, position: number): void,
setPositionType(positionType: YogaPositionType): void,
setWidth(width: number | string): void,
setWidthAuto(): void,
setWidthPercent(width: number): void,
unsetMeasureFun(): void
} 
	declare export class Layout  {
left: number;
right: number;
top: number;
bottom: number;
width: number;
height: number;
constructor(left: number, right: number, top: number, bottom: number, width: number, height: number): this;
fromJs(
expose: (
left: number,
right: number,
top: number,
bottom: number,
width: number,
height: number) => any): void;
toString(): string
}
	declare export class Size  {
static fromJS(dim: {
width: number,
height: number
}): Size;
width: number;
height: number;
constructor(width: number, height: number): this;
fromJS(expose: (width: number, height: number) => any): void;
toString(): string
}
	declare export class Value  {
unit: YogaUnit | number;
value: number;
constructor(unit: YogaUnit | number, value: number): this;
fromJS(expose: (unit: YogaUnit | number, value: number) => any): void;
toString(): string;
valueOf(): number
}
	declare export interface YogaConfig {
isExperimentalFeatureEnabled(feature: YogaExperimentalFeature): boolean,
setExperimentalFeatureEnabled(feature: YogaExperimentalFeature, enabled: boolean): void,
setPointScaleFactor(factor: number): void
} 
	declare interface NodeStatic {
create(): YogaNode,
createDefault(): YogaNode,
createWithConfig(config: YogaConfig): YogaNode,
destroy(node: YogaNode): any
} 
	declare export var Node: NodeStatic;
	declare interface ConfigStatic {
create(): YogaConfig,
destroy(config: YogaConfig): any
} 
	declare export var Config: ConfigStatic;
	declare type YogaStatic = {
Node: typeof Node,
Config: typeof Config,
Layout: typeof Layout,
Size: typeof Size,
Value: typeof Value,
getInstanceCount(): number
} & ConstantsStatic

	declare var Yoga: YogaStatic;
	declare export default typeof Yoga

    }
