declare module 'styled-system' {
        import typeof * as CSS from 'csstype';

	declare export var defaultBreakpoints: string[];
	declare export function is(n: any): boolean

	declare export function num(n: any): boolean

	declare export function px(n: any): string

	declare export function get(obj: any, ...paths: Array<string | number>): any

	declare export function themeGet(keys: string, fallback?: string): any

	declare export function cloneFunc(fn: (...args: any[]) => any): (...args: any[]) => any

	declare export function merge(a: any, b: any): any

	declare export function compose(...funcs: Array<(...args: any[]) => any>): (...args: any[]) => any

	declare export function createMediaQuery(n: number | string): string

	declare export interface LowLevelStylefunctionArguments {
prop: string,
cssProperty?: string,
key?: string,
getter?: () => any,
transformValue?: (n: string | number) => any,
scale?: Array<string | number>
} 
	declare export function style(args: LowLevelStylefunctionArguments): {
[cssProp: string]: string
}

	declare export type TLengthStyledSystem = string | 0 | number;
	declare export type ResponsiveValue<T> = T | Array<T | null> | {
[key: string]: T
};
	
/**
 * Converts shorthand margin and padding props to margin and padding CSS declarations
 * 
 * - Numbers from 0-4 (or the length of theme.space) are converted to values on the spacing scale.
 * - Negative values can be used for negative margins.
 * - Numbers greater than the length of the theme.space array are converted to raw pixel values.
 * - String values are passed as raw CSS values.
 * - Array values are converted into responsive values.
 */
declare export interface SpaceProps<TLength> {

/**
 * Margin on top, left, bottom and right
 */
m?: ResponsiveValue<CSS.MarginProperty<TLength>>,

/**
 * Margin for the top
 */
mt?: ResponsiveValue<CSS.MarginTopProperty<TLength>>,

/**
 * Margin for the right
 */
mr?: ResponsiveValue<CSS.MarginRightProperty<TLength>>,

/**
 * Margin for the bottom
 */
mb?: ResponsiveValue<CSS.MarginBottomProperty<TLength>>,

/**
 * Margin for the left
 */
ml?: ResponsiveValue<CSS.MarginLeftProperty<TLength>>,

/**
 * Margin for the left and right
 */
mx?: ResponsiveValue<CSS.PaddingProperty<TLength>>,

/**
 * Margin for the top and bottom
 */
my?: ResponsiveValue<CSS.PaddingProperty<TLength>>,

/**
 * Padding on top, left, bottom and right
 */
p?: ResponsiveValue<CSS.PaddingProperty<TLength>>,

/**
 * Padding for the top
 */
pt?: ResponsiveValue<CSS.PaddingTopProperty<TLength>>,

/**
 * Padding for the right
 */
pr?: ResponsiveValue<CSS.PaddingRightProperty<TLength>>,

/**
 * Padding for the bottom
 */
pb?: ResponsiveValue<CSS.PaddingBottomProperty<TLength>>,

/**
 * Padding for the left
 */
pl?: ResponsiveValue<CSS.PaddingLeftProperty<TLength>>,

/**
 * Padding for the left and right
 */
px?: ResponsiveValue<CSS.PaddingProperty<TLength>>,

/**
 * Padding for the top and bottom
 */
py?: ResponsiveValue<CSS.PaddingProperty<TLength>>
} 
	declare export function space(...args: any[]): any

	declare export interface VariantArgs {
key?: string,
prop?: string
} 
	declare export function variant(props: VariantArgs): (...args: any[]) => any

	declare export type ObjectOrArray<T> = T[] | {
[K: string]: T
};
	declare export interface BaseTheme {
breakpoints?: number[],
colors?: ObjectOrArray<CSS.ColorProperty>,
fontSizes?: number[],
space?: number[]
} 
	declare export type Theme = {
borders?: ObjectOrArray<CSS.BorderProperty<{}>>,
buttons?: ObjectOrArray<CSS.StandardProperties>,
colorStyles?: ObjectOrArray<CSS.StandardProperties>,
fontWeights?: ObjectOrArray<CSS.FontWeightProperty>,
fonts?: ObjectOrArray<CSS.FontFamilyProperty>,
heights?: ObjectOrArray<CSS.HeightProperty<{}>>,
letterSpacings?: ObjectOrArray<CSS.LetterSpacingProperty<{}>>,
lineHeights?: ObjectOrArray<CSS.LineHeightProperty<{}>>,
maxHeights?: ObjectOrArray<CSS.HeightProperty<{}>>,
maxWidths?: ObjectOrArray<CSS.WidthProperty<{}>>,
minHeights?: ObjectOrArray<CSS.HeightProperty<{}>>,
minWidths?: ObjectOrArray<CSS.WidthProperty<{}>>,
opacity?: ObjectOrArray<CSS.GlobalsNumber>,
radii?: ObjectOrArray<CSS.BorderRadiusProperty<{}>>,
shadows?: ObjectOrArray<CSS.BoxShadowProperty>,
textStyles?: ObjectOrArray<CSS.StandardProperties>
} & BaseTheme

	
/**
 * Font Size
 */
declare export interface FontSizeProps<TLength> {

/**
 * The fontSize utility parses a component's `fontSize` prop and converts it into a CSS font-size declaration.
 * 
 * - Numbers from 0-8 (or `theme.fontSizes.length`) are converted to values on the [font size scale](#default-theme).
 * - Numbers greater than `theme.fontSizes.length` are converted to raw pixel values.
 * - String values are passed as raw CSS values.
 * - And array values are converted into responsive values.
 */
fontSize?: ResponsiveValue<CSS.FontSizeProperty<TLength>>
} 
	declare export function fontSize(...args: any[]): any

	
/**
 * Color
 */
declare export interface TextColorProps {

/**
 * The color utility parses a component's `color` and `bg` props and converts them into CSS declarations.
 * By default the raw value of the prop is returned.
 * 
 * Color palettes can be configured with the ThemeProvider to use keys as prop values, with support for dot notation.
 * Array values are converted into responsive values.
 * 
 * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/color)
 */
color?: ResponsiveValue<CSS.ColorProperty>
} 
	declare export function textColor(...args: any[]): any

	declare export interface BgColorProps<TLength> {

/**
 * The color utility parses a component's `color` and `bg` props and converts them into CSS declarations.
 * By default the raw value of the prop is returned.
 * 
 * Color palettes can be configured with the ThemeProvider to use keys as prop values, with support for dot notation.
 * Array values are converted into responsive values.
 * 
 * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/CSS/background-color)
 */
bg?: ResponsiveValue<CSS.BackgroundProperty<TLength>>
} 
	declare export function bgColor(...args: any[]): any

	declare export type ColorProps = {} & TextColorProps & BgColorProps

	declare export function color(...args: any[]): any

	
/**
 * Typography
 */
declare export interface FontFamilyProps {
fontFamily?: ResponsiveValue<CSS.FontFamilyProperty>
} 
	declare export function fontFamily(...args: any[]): any

	declare export interface TextAlignProps {

/**
 * The text-align CSS property specifies the horizontal alignment of an inline or table-cell box.
 * 
 * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/text-align)
 */
textAlign?: ResponsiveValue<CSS.TextAlignProperty>
} 
	declare export function textAlign(...args: any[]): any

	declare export interface LineHeightProps<TLength> {

/**
 * The line-height CSS property sets the amount of space used for lines, such as in text. On block-level elements,
 * it specifies the minimum height of line boxes within the element.
 * 
 * On non-replaced inline elements, it specifies the height that is used to calculate line box height.
 * 
 * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/line-height)
 */
lineHeight?: ResponsiveValue<CSS.LineHeightProperty<TLength>>
} 
	declare export function lineHeight(...args: any[]): any

	declare export interface FontWeightProps {

/**
 * The font-weight CSS property specifies the weight (or boldness) of the font.
 * 
 * The font weights available to you will depend on the font-family you are using. Some fonts are only available in normal and bold.
 * 
 * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/font-weight)
 */
fontWeight?: ResponsiveValue<CSS.FontWeightProperty>
} 
	declare export function fontWeight(...args: any[]): any

	declare export interface FontStyleProps {

/**
 * The font-style CSS property specifies whether a font should be styled with a normal, italic,
 * or oblique face from its font-family.
 * 
 * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/font-style)
 */
fontStyle?: ResponsiveValue<CSS.FontStyleProperty>
} 
	declare export function fontStyle(...args: any[]): any

	declare export interface LetterSpacingProps<TLength> {

/**
 * The letter-spacing CSS property sets the spacing behavior between text characters.
 * 
 * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/letter-spacing)
 */
letterSpacing?: ResponsiveValue<CSS.LetterSpacingProperty<TLength>>
} 
	declare export function letterSpacing(...args: any[]): any

	
/**
 * Layout
 */
declare export interface DisplayProps {

/**
 * The display CSS property defines the display type of an element, which consists of the two basic qualities
 * of how an element generates boxes — the outer display type defining how the box participates in flow layout,
 * and the inner display type defining how the children of the box are laid out.
 * 
 * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/display)
 */
display?: ResponsiveValue<CSS.DisplayProperty>
} 
	declare export function display(...args: any[]): any

	declare export interface MaxWidthProps<TLength> {

/**
 * The max-width CSS property sets the maximum width of an element.
 * It prevents the used value of the width property from becoming larger than the value specified by max-width.
 * 
 * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/max-width)
 */
maxWidth?: ResponsiveValue<CSS.MaxWidthProperty<TLength>>
} 
	declare export function maxWidth(...args: any[]): any

	declare export interface MinWidthProps<TLength> {

/**
 * The min-width CSS property sets the minimum width of an element.
 * It prevents the used value of the width property from becoming smaller than the value specified for min-width.
 * 
 * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/min-width)
 */
minWidth?: ResponsiveValue<CSS.MinWidthProperty<TLength>>
} 
	declare export function minWidth(...args: any[]): any

	declare export interface WidthProps<TLength> {

/**
 * The width utility parses a component's `width` prop and converts it into a CSS width declaration.
 * 
 * - Numbers from 0-1 are converted to percentage widths.
 * - Numbers greater than 1 are converted to pixel values.
 * - String values are passed as raw CSS values.
 * - And arrays are converted to responsive width styles.
 */
width?: ResponsiveValue<CSS.WidthProperty<TLength>>
} 
	declare export function width(...args: any[]): any

	declare export interface MaxHeightProps<TLength> {

/**
 * The max-height CSS property sets the maximum height of an element. It prevents the used value of the height
 * property from becoming larger than the value specified for max-height.
 * 
 * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/max-height)
 */
maxHeight?: ResponsiveValue<CSS.MaxHeightProperty<TLength>>
} 
	declare export function maxHeight(...args: any[]): any

	declare export interface MinHeightProps<TLength> {

/**
 * The min-height CSS property sets the minimum height of an element. It prevents the used value of the height
 * property from becoming smaller than the value specified for min-height.
 * 
 * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/display)
 */
minHeight?: ResponsiveValue<CSS.MinHeightProperty<TLength>>
} 
	declare export function minHeight(...args: any[]): any

	declare export interface HeightProps<TLength> {

/**
 * The height CSS property specifies the height of an element. By default, the property defines the height of the
 * content area. If box-sizing is set to border-box, however, it instead determines the height of the border area.
 * 
 * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/height)
 */
height?: ResponsiveValue<CSS.HeightProperty<TLength>>
} 
	declare export function height(...args: any[]): any

	declare export interface SizeWidthProps<TLength> {
size?: ResponsiveValue<CSS.WidthProperty<TLength>>
} 
	declare export function sizeWidth(...args: any[]): any

	declare export interface SizeHeightProps<TLength> {
size?: ResponsiveValue<CSS.HeightProperty<TLength>>
} 
	declare export function sizeHeight(...args: any[]): any

	declare export type SizeProps = {} & SizeHeightProps & SizeWidthProps

	declare export function size(...args: any[]): any

	declare export interface RatioProps {

/**
 * The ration is height: 0 & paddingBottom
 */
ratio?: ResponsiveValue<number>
} 
	declare export function ratio(...args: any[]): any

	declare export interface VerticalAlignProps<TLength> {

/**
 * The vertical-align CSS property specifies sets vertical alignment of an inline or table-cell box.
 * 
 * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/vertical-align)
 */
verticalAlign?: ResponsiveValue<CSS.VerticalAlignProperty<TLength>>
} 
	declare export function verticalAlign(...args: any[]): any

	
/**
 * Flexbox
 */
declare export interface AlignItemsProps {

/**
 * The CSS align-items property sets the align-self value on all direct children as a group. The align-self
 * property sets the alignment of an item within its containing block.
 * 
 * In Flexbox it controls the alignment of items on the Cross Axis, in Grid Layout it controls the alignment
 * of items on the Block Axis within their grid area.
 * 
 * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/align-items)
 */
alignItems?: ResponsiveValue<CSS.AlignItemsProperty>
} 
	declare export function alignItems(...args: any[]): any

	declare export interface AlignContentProps {

/**
 * The CSS align-content property sets how the browser distributes space between and around content items
 * along the cross-axis of a flexbox container, and the main-axis of a grid container.
 * 
 * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/align-content)
 */
alignContent?: ResponsiveValue<CSS.AlignContentProperty>
} 
	declare export function alignContent(...args: any[]): any

	declare export interface JustifyItemsProps {

/**
 * The CSS justify-items property defines the default justify-self for all items of the box, giving them all
 * a default way of justifying each box along the appropriate axis.
 * 
 * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/justify-items)
 */
justifyItems?: ResponsiveValue<CSS.JustifyItemsProperty>
} 
	declare export interface JustifyContentProps {

/**
 * The CSS justify-content property defines how the browser distributes space between and around content items
 * along the main-axis of a flex container, and the inline axis of a grid container.
 * 
 * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content)
 */
justifyContent?: ResponsiveValue<CSS.JustifyContentProperty>
} 
	declare export function justifyContent(...args: any[]): any

	declare export interface FlexWrapProps {

/**
 * The flex-wrap CSS property sets whether flex items are forced onto one line or can wrap onto multiple lines.
 * If wrapping is allowed, it sets the direction that lines are stacked.
 * 
 * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-wrap)
 */
flexWrap?: ResponsiveValue<CSS.FlexWrapProperty>
} 
	declare export function flexWrap(...args: any[]): any

	declare export interface FlexBasisProps<TLength> {
flexBasis?: ResponsiveValue<CSS.FlexBasisProperty<TLength>>
} 
	declare export function flexBasis(...args: any[]): any

	declare export interface FlexDirectionProps {

/**
 * The flex-direction CSS property specifies how flex items are placed in the flex container defining the main
 * axis and the direction (normal or reversed).
 * 
 * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-direction)
 */
flexDirection?: ResponsiveValue<CSS.FlexDirectionProperty>
} 
	declare export function flexDirection(...args: any[]): any

	declare export interface FlexProps<TLength> {

/**
 * The flex CSS property specifies how a flex item will grow or shrink so as to fit the space available in
 * its flex container. This is a shorthand property that sets flex-grow, flex-shrink, and flex-basis.
 * 
 * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/flex)
 */
flex?: ResponsiveValue<CSS.FlexProperty<TLength>>
} 
	declare export function flex(...args: any[]): any

	declare export interface JustifySelfProps {

/**
 * The CSS justify-self property set the way a box is justified inside its alignment container along
 * the appropriate axis.
 * 
 * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/justify-self)
 */
justifySelf?: ResponsiveValue<CSS.JustifySelfProperty>
} 
	declare export function justifySelf(...args: any[]): any

	declare export interface AlignSelfProps {

/**
 * The align-self CSS property aligns flex items of the current flex line overriding the align-items value.
 * 
 * If any of the item's cross-axis margin is set to auto, then align-self is ignored. In Grid layout align-self
 * aligns the item inside the grid area.
 * 
 * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/align-self)
 */
alignSelf?: ResponsiveValue<CSS.AlignSelfProperty>
} 
	declare export function alignSelf(...args: any[]): any

	declare export interface OrderProps {

/**
 * The order CSS property sets the order to lay out an item in a flex or grid container. Items in a container
 * are sorted by ascending order value and then by their source code order.
 * 
 * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/order)
 */
order?: ResponsiveValue<CSS.GlobalsNumber>
} 
	declare export function order(...args: any[]): any

	
/**
 * Grid Layout
 */
declare export interface GridGapProps<TLength> {

/**
 * The gap CSS property sets the gaps (gutters) between rows and columns. It is a shorthand for row-gap
 * and column-gap.
 * @deprecated use gap

[MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/gap)
 */
gridGap?: ResponsiveValue<CSS.GridGapProperty<TLength>>
} 
	declare export function gridGap(...args: any[]): any

	declare export interface GridColumnGapProps<TLength> {

/**
 * The column-gap CSS property sets the size of the gap (gutter) between an element's columns.
 * @deprecated use column-gap

[MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/column-gap)
 */
gridColumnGap?: ResponsiveValue<CSS.GridColumnGapProperty<TLength>>
} 
	declare export function gridColumnGap(...args: any[]): any

	declare export interface GridRowGapProps<TLength> {

/**
 * The row-gap CSS property sets the size of the gap (gutter) between an element's rows.
 * @deprecated use row-gap

[MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/row-gap)
 */
gridRowGap?: ResponsiveValue<CSS.GridRowGapProperty<TLength>>
} 
	declare export function gridRowGap(...args: any[]): any

	declare export interface GridColumnProps {

/**
 * The grid-column CSS property is a shorthand property for grid-column-start and grid-column-end specifying
 * a grid item's size and location within the grid column by contributing a line, a span, or nothing (automatic)
 * to its grid placement, thereby specifying the inline-start and inline-end edge of its grid area.
 * 
 * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column)
 */
gridColumn?: ResponsiveValue<CSS.GridColumnProperty>
} 
	declare export function gridColumn(...args: any[]): any

	declare export interface GridRowProps {

/**
 * The grid-row CSS property is a shorthand property for grid-row-start and grid-row-end specifying a grid item’s
 * size and location within the grid row by contributing a line, a span, or nothing (automatic) to its grid
 * placement, thereby specifying the inline-start and inline-end edge of its grid area.
 * 
 * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-row)
 */
gridRow?: ResponsiveValue<CSS.GridRowProperty>
} 
	declare export function gridRow(...args: any[]): any

	declare export interface GridAutoFlowProps {

/**
 * The grid-auto-flow CSS property controls how the auto-placement algorithm works, specifying exactly
 * how auto-placed items get flowed into the grid.
 * 
 * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-flow)
 */
gridAutoFlow?: ResponsiveValue<CSS.GridAutoFlowProperty>
} 
	declare export function gridAutoFlow(...args: any[]): any

	declare export interface GridAutoColumnsProps<TLength> {

/**
 * The grid-auto-columns CSS property specifies the size of an implicitly-created grid column track.
 * 
 * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-columns)
 */
gridAutoColumns?: ResponsiveValue<CSS.GridAutoColumnsProperty<TLength>>
} 
	declare export function gridAutoColumns(...args: any[]): any

	declare export interface GridAutoRowsProps<TLength> {

/**
 * The grid-auto-rows CSS property specifies the size of an implicitly-created grid row track.
 * 
 * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-rows)
 */
gridAutoRows?: ResponsiveValue<CSS.GridAutoRowsProperty<TLength>>
} 
	declare export function gridAutoRows(...args: any[]): any

	declare export interface GridTemplatesColumnsProps<TLength> {

/**
 * The grid-template-columns CSS property defines the line names and track sizing functions of the grid columns.
 * 
 * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-columns)
 */
gridTemplateColumns?: ResponsiveValue<CSS.GridTemplateColumnsProperty<TLength>>
} 
	declare export function gridTemplateColumns(...args: any[]): any

	declare export interface GridTemplatesRowsProps<TLength> {

/**
 * The grid-template-rows CSS property defines the line names and track sizing functions of the grid rows.
 * 
 * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/row-template-rows)
 */
gridTemplateRows?: ResponsiveValue<CSS.GridTemplateRowsProperty<TLength>>
} 
	declare export function gridTemplateRows(...args: any[]): any

	declare export interface GridTemplatesAreasProps {

/**
 * The grid-template-areas CSS property specifies named grid areas.
 * 
 * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-areas)
 */
gridTemplateAreas?: ResponsiveValue<CSS.GridTemplateAreasProperty>
} 
	declare export function gridTemplateAreas(...args: any[]): any

	declare export interface GridAreaProps {

/**
 * The grid-area CSS property is a shorthand property for grid-row-start, grid-column-start, grid-row-end
 * and grid-column-end, specifying a grid item’s size and location within the grid row by contributing a line,
 * a span, or nothing (automatic) to its grid placement, thereby specifying the edges of its grid area.
 * 
 * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-area)
 */
gridArea?: ResponsiveValue<CSS.GridAreaProperty>
} 
	declare export function gridArea(...args: any[]): any

	
/**
 * Borders
 */
declare export interface BorderProps<TLength> {

/**
 * The border CSS property sets an element's border. It's a shorthand for border-width, border-style,
 * and border-color.
 * 
 * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/border)
 */
border?: ResponsiveValue<CSS.BorderProperty<TLength>>
} 
	declare export function border(...args: any[]): any

	declare export interface BorderTopProps<TLength> {

/**
 * The border-top CSS property is a shorthand that sets the values of border-top-width, border-top-style,
 * and border-top-color. These properties describe an element's top border.
 * 
 * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/border-top)
 */
borderTop?: ResponsiveValue<CSS.BorderTopProperty<TLength>>
} 
	declare export function borderTop(...args: any[]): any

	declare export interface BorderRightProps<TLength> {

/**
 * The border-right CSS property is a shorthand that sets border-right-width, border-right-style,
 * and border-right-color. These properties set an element's right border.
 * 
 * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/border-right)
 */
borderRight?: ResponsiveValue<CSS.BorderRightProperty<TLength>>
} 
	declare export function borderRight(...args: any[]): any

	declare export interface BorderBottomProps<TLength> {

/**
 * The border-bottom CSS property sets an element's bottom border. It's a shorthand for
 * border-bottom-width, border-bottom-style and border-bottom-color.
 * 
 * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/border-bottom)
 */
borderBottom?: ResponsiveValue<CSS.BorderBottomProperty<TLength>>
} 
	declare export function borderBottom(...args: any[]): any

	declare export interface BorderLeftProps<TLength> {

/**
 * The border-left CSS property is a shorthand that sets the values of border-left-width,
 * border-left-style, and border-left-color. These properties describe an element's left border.
 * 
 * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/border-left)
 */
borderLeft?: ResponsiveValue<CSS.BorderLeftProperty<TLength>>
} 
	declare export function borderLeft(...args: any[]): any

	declare export type BordersProps = {} & BorderTopProps & BorderRightProps & BorderBottomProps & BorderLeftProps

	declare export function borders(...args: any[]): any

	declare export interface BorderColorProps {

/**
 * The border-color shorthand CSS property sets the color of all sides of an element's border.
 * 
 * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/border-color)
 */
borderColor?: ResponsiveValue<CSS.BorderColorProperty>
} 
	declare export function borderColor(...args: any[]): any

	declare export interface BorderRadiusProps<TLength> {

/**
 * The border-radius CSS property rounds the corners of an element's outer border edge. You can set a single
 * radius to make circular corners, or two radii to make elliptical corners.
 * 
 * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius)
 */
borderRadius?: ResponsiveValue<CSS.BorderRadiusProperty<TLength>>
} 
	declare export function borderRadius(...args: any[]): any

	declare export interface BoxShadowProps {

/**
 * The box-shadow CSS property adds shadow effects around an element's frame. You can set multiple effects
 * separated by commas. A box shadow is described by X and Y offsets relative to the element, blur and spread
 * radii, and color.
 * 
 * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow)
 */
boxShadow?: ResponsiveValue<CSS.BoxShadowProperty | number>
} 
	declare export function boxShadow(...arg: any[]): any

	declare export interface OpacityProps {

/**
 * The opacity CSS property sets the transparency of an element or the degree to which content
 * behind an element is visible.
 * 
 * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/opacity)
 */
opacity?: ResponsiveValue<CSS.GlobalsNumber>
} 
	declare export function opacity(...arg: any[]): any

	declare export interface OverflowProps {

/**
 * The overflow CSS property sets what to do when an element's content is too big to fit in its block
 * formatting context. It is a shorthand for overflow-x and overflow-y.
 * 
 * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/overflow)
 */
overflow?: ResponsiveValue<CSS.OverflowProperty>
} 
	declare export function overflow(...arg: any[]): any

	
/**
 * Background
 */
declare export interface BackgroundProps<TLength> {

/**
 * The background shorthand CSS property sets all background style properties at once,
 * such as color, image, origin and size, repeat method, and others.
 * 
 * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/background)
 */
background?: ResponsiveValue<CSS.BackgroundProperty<TLength>>
} 
	declare export function background(...args: any[]): any

	declare export interface BackgroundImageProps {

/**
 * The background-image CSS property sets one or more background images on an element.
 * 
 * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/background-image)
 */
backgroundImage?: ResponsiveValue<CSS.BackgroundImageProperty>
} 
	declare export function backgroundImage(...args: any[]): any

	declare export interface BackgroundSizeProps<TLength> {

/**
 * The background-size CSS property sets the size of the element's background image. The
 * image can be left to its natural size, stretched, or constrained to fit the available space.
 * 
 * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/background-size)
 */
backgroundSize?: ResponsiveValue<CSS.BackgroundSizeProperty<TLength>>
} 
	declare export function backgroundSize(...args: any[]): any

	declare export interface BackgroundPositionProps<TLength> {

/**
 * The background-position CSS property sets the initial position for each background image. The
 * position is relative to the position layer set by background-origin.
 * 
 * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/background-position)
 */
backgroundPosition?: ResponsiveValue<CSS.BackgroundPositionProperty<TLength>>
} 
	declare export function backgroundPosition(...args: any[]): any

	declare export interface BackgroundRepeatProps {

/**
 * The background-repeat CSS property sets how background images are repeated. A background
 * image can be repeated along the horizontal and vertical axes, or not repeated at all.
 * 
 * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/background-repeat)
 */
backgroundRepeat?: ResponsiveValue<CSS.BackgroundRepeatProperty>
} 
	declare export function backgroundRepeat(...args: any[]): any

	
/**
 * Position
 */
declare export interface PositionProps {

/**
 * The position CSS property specifies how an element is positioned in a document.
 * The top, right, bottom, and left properties determine the final location of positioned elements.
 * 
 * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/position)
 */
position?: ResponsiveValue<CSS.PositionProperty>
} 
	declare export function position(...args: any[]): any

	declare export interface ZIndexProps {

/**
 * The z-index CSS property sets the z-order of a positioned element and its descendants or
 * flex items. Overlapping elements with a larger z-index cover those with a smaller one.
 * 
 * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/z-index)
 */
zIndex?: ResponsiveValue<CSS.ZIndexProperty>
} 
	declare export function zIndex(...args: any[]): any

	declare export interface TopProps<TLength> {

/**
 * The top CSS property participates in specifying the vertical position of a
 * positioned element. It has no effect on non-positioned elements.
 * 
 * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/top)
 */
top?: ResponsiveValue<CSS.TopProperty<TLength>>
} 
	declare export function top(...args: any[]): any

	declare export interface RightProps<TLength> {

/**
 * The right CSS property participates in specifying the horizontal position of a
 * positioned element. It has no effect on non-positioned elements.
 * 
 * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/right)
 */
right?: ResponsiveValue<CSS.RightProperty<TLength>>
} 
	declare export function right(...args: any[]): any

	declare export interface BottomProps<TLength> {

/**
 * The bottom CSS property participates in specifying the vertical position of a
 * positioned element. It has no effect on non-positioned elements.
 * 
 * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/top)
 */
bottom?: ResponsiveValue<CSS.BottomProperty<TLength>>
} 
	declare export function bottom(...args: any[]): any

	declare export interface LeftProps<TLength> {

/**
 * The left CSS property participates in specifying the horizontal position
 * of a positioned element. It has no effect on non-positioned elements.
 * 
 * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/left)
 */
left?: ResponsiveValue<CSS.LeftProperty<TLength>>
} 
	declare export function left(...args: any[]): any

	declare export interface TextStyleProps {
textStyle?: ResponsiveValue<string>
} 
	declare export function textStyle(...args: any[]): any

	declare export interface ColorStyleProps {
colors?: ResponsiveValue<string>
} 
	declare export function colorStyle(...args: any[]): any

	declare export interface ButtonStyleProps {
variant?: ResponsiveValue<string>
} 
	declare export function buttonStyle(...args: any[]): any

	declare export interface MixedProps {
key?: any,
prop?: string
} 
	declare export function mixed(...args: any[]): any

    }
