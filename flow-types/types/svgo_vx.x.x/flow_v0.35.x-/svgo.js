declare module 'svgo' {
        declare interface PluginCleanupAttrs {
cleanupAttrs: boolean | {[key: string]: any}
} 
	declare interface PluginRemoveDoctype {
removeDoctype: boolean | {[key: string]: any}
} 
	declare interface PluginRemoveXMLProcInst {
removeXMLProcInst: boolean | {[key: string]: any}
} 
	declare interface PluginRemoveComments {
removeComments: boolean | {[key: string]: any}
} 
	declare interface PluginRemoveMetadata {
removeMetadata: boolean | {[key: string]: any}
} 
	declare interface PluginRemoveTitle {
removeTitle: boolean | {[key: string]: any}
} 
	declare interface PluginRemoveDesc {
removeDesc: boolean | {[key: string]: any}
} 
	declare interface PluginRemoveUselessDefs {
removeUselessDefs: boolean | {[key: string]: any}
} 
	declare interface PluginRemoveXMLNS {
removeXMLNS: boolean | {[key: string]: any}
} 
	declare interface PluginRemoveEditorsNSData {
removeEditorsNSData: boolean | {[key: string]: any}
} 
	declare interface PluginRemoveEmptyAttrs {
removeEmptyAttrs: boolean | {[key: string]: any}
} 
	declare interface PluginRemoveHiddenElems {
removeHiddenElems: boolean | {[key: string]: any}
} 
	declare interface PluginRemoveEmptyText {
removeEmptyText: boolean | {[key: string]: any}
} 
	declare interface PluginRemoveEmptyContainers {
removeEmptyContainers: boolean | {[key: string]: any}
} 
	declare interface PluginRemoveViewBox {
removeViewBox: boolean | {[key: string]: any}
} 
	declare interface PluginCleanupEnableBackground {
cleanupEnableBackground: boolean | {[key: string]: any}
} 
	declare interface PluginMinifyStyles {
minifyStyles: boolean | {[key: string]: any}
} 
	declare interface PluginConvertStyleToAttrs {
convertStyleToAttrs: boolean | {[key: string]: any}
} 
	declare interface PluginConvertColors {
convertColors: boolean | {[key: string]: any}
} 
	declare interface PluginConvertPathData {
convertPathData: boolean | {[key: string]: any}
} 
	declare interface PluginConvertTransform {
convertTransform: boolean | {[key: string]: any}
} 
	declare interface PluginRemoveUnknownsAndDefaults {
removeUnknownsAndDefaults: boolean | {[key: string]: any}
} 
	declare interface PluginRemoveNonInheritableGroupAttrs {
removeNonInheritableGroupAttrs: boolean | {[key: string]: any}
} 
	declare interface PluginRemoveUselessStrokeAndFill {
removeUselessStrokeAndFill: boolean | {[key: string]: any}
} 
	declare interface PluginRemoveUnusedNS {
removeUnusedNS: boolean | {[key: string]: any}
} 
	declare interface PluginCleanupIDs {
cleanupIDs: boolean | {[key: string]: any}
} 
	declare interface PluginCleanupNumericValues {
cleanupNumericValues: boolean | {[key: string]: any}
} 
	declare interface PluginCleanupListOfValues {
cleanupListOfValues: boolean | {[key: string]: any}
} 
	declare interface PluginMoveElemsAttrsToGroup {
moveElemsAttrsToGroup: boolean | {[key: string]: any}
} 
	declare interface PluginMoveGroupAttrsToElems {
moveGroupAttrsToElems: boolean | {[key: string]: any}
} 
	declare interface PluginCollapseGroups {
collapseGroups: boolean | {[key: string]: any}
} 
	declare interface PluginRemoveRasterImages {
removeRasterImages: boolean | {[key: string]: any}
} 
	declare interface PluginMergePaths {
mergePaths: boolean | {[key: string]: any}
} 
	declare interface PluginConvertShapeToPath {
convertShapeToPath: boolean | {[key: string]: any}
} 
	declare interface PluginSortAttrs {
sortAttrs: boolean | {[key: string]: any}
} 
	declare interface PluginTransformsWithOnePath {
transformsWithOnePath: boolean | {[key: string]: any}
} 
	declare interface PluginRemoveDimensions {
removeDimensions: boolean | {[key: string]: any}
} 
	declare interface PluginRemoveAttrs {
removeAttrs: boolean | {[key: string]: any}
} 
	declare interface PluginRemoveElementsByAttr {
removeElementsByAttr: boolean | {[key: string]: any}
} 
	declare interface PluginAddClassesToSVGElement {
addClassesToSVGElement: boolean | {[key: string]: any}
} 
	declare interface PluginAddAttributesToSVGElement {
addAttributesToSVGElement: boolean | {[key: string]: any}
} 
	declare interface PluginRemoveStyleElement {
removeStyleElement: boolean | {[key: string]: any}
} 
	declare interface PluginRemoveScriptElement {
removeScriptElement: boolean | {[key: string]: any}
} 
	declare type PluginConfig = PluginCleanupAttrs
| PluginRemoveDoctype
| PluginRemoveXMLProcInst
| PluginRemoveComments
| PluginRemoveMetadata
| PluginRemoveTitle
| PluginRemoveDesc
| PluginRemoveUselessDefs
| PluginRemoveXMLNS
| PluginRemoveEditorsNSData
| PluginRemoveEmptyAttrs
| PluginRemoveHiddenElems
| PluginRemoveEmptyText
| PluginRemoveEmptyContainers
| PluginRemoveViewBox
| PluginCleanupEnableBackground
| PluginMinifyStyles
| PluginConvertStyleToAttrs
| PluginConvertColors
| PluginConvertPathData
| PluginConvertTransform
| PluginRemoveUnknownsAndDefaults
| PluginRemoveNonInheritableGroupAttrs
| PluginRemoveUselessStrokeAndFill
| PluginRemoveUnusedNS
| PluginCleanupIDs
| PluginCleanupNumericValues
| PluginCleanupListOfValues
| PluginMoveElemsAttrsToGroup
| PluginMoveGroupAttrsToElems
| PluginCollapseGroups
| PluginRemoveRasterImages
| PluginMergePaths
| PluginConvertShapeToPath
| PluginSortAttrs
| PluginTransformsWithOnePath
| PluginRemoveDimensions
| PluginRemoveAttrs
| PluginRemoveElementsByAttr
| PluginAddClassesToSVGElement
| PluginAddAttributesToSVGElement
| PluginRemoveStyleElement
| PluginRemoveScriptElement;
	declare interface Js2SvgOptions {

/**
 * @default '<!DOCTYPE'
 */
doctypeStart?: string,

/**
 * @default '>'
 */
doctypeEnd?: string,

/**
 * @default '<?'
 */
procInstStart?: string,

/**
 * @default '?>'
 */
procInstEnd?: string,

/**
 * @default '<'
 */
tagOpenStart?: string,

/**
 * @default '>'
 */
tagOpenEnd?: string,

/**
 * @default '</'
 */
tagCloseStart?: string,

/**
 * @default '>'
 */
tagCloseEnd?: string,

/**
 * @default '<'
 */
tagShortStart?: string,

/**
 * @default '/>'
 */
tagShortEnd?: string,

/**
 * @default '="'
 */
attrStart?: string,

/**
 * @default '"'
 */
attrEnd?: string,

/**
 * @default '<!--'
 */
commentStart?: string,

/**
 * @default '-->'
 */
commentEnd?: string,

/**
 * @default '<![CDATA['
 */
cdataStart?: string,

/**
 * @default ']]>'
 */
cdataEnd?: string,

/**
 * @default ''
 */
textStart?: string,

/**
 * @default ''
 */
textEnd?: string,

/**
 * @default 4
 */
indent?: number,

/**
 * @default /[&'"<>]/g
 */
regEntities?: RegExp,

/**
 * @default /[&"<>]/g
 */
regValEntities?: RegExp,

/**
 * @default encodeEntity
 */
encodeEntity?: (char?: string) => string,

/**
 * @default false
 */
pretty?: boolean,

/**
 * @default true
 */
useShortTags?: boolean
} 
	declare interface Svg2JsOptions {

/**
 * @default true
 */
strict?: boolean,

/**
 * @default false
 */
trim?: boolean,

/**
 * @default true
 */
normalize?: boolean,

/**
 * @default true
 */
lowercase?: boolean,

/**
 * @default true
 */
xmlns?: boolean,

/**
 * @default true
 */
position?: boolean
} 
	declare interface SvgInfo {
path?: string
} 
	declare interface OptimizedSvg {
data: string,
info: {[key: string]: any}
} 
	declare class SVGO  {
constructor(options?: SVGO$SVGO$Options): this;
optimize(svgString: string, info?: SvgInfo): Promise<OptimizedSvg>
}
	declare interface SVGO$Options {

/**
 * Output as Data URI string.
 */
datauri?: "base64" | "enc" | "unenc",

/**
 * Precision of floating point numbers. Will be passed to each plugin that suppors this param.
 */
floatPrecision?: number,

/**
 * Use full set of plugins.
 */
full?: boolean,

/**
 * Options for rendering optimized SVG from AST.
 */
js2svg?: Js2SvgOptions,

/**
 * Individual plugin configurations.
 * For specific options, see plugin source in https://github.com/svg/svgo/tree/master/plugins.
 */
plugins?: PluginConfig[],

/**
 * Options for parsing original SVG into AST.
 */
svg2js?: Svg2JsOptions
} 
	declare module.exports: typeof SVGO

    }
