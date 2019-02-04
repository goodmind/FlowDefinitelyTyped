declare module 'react-sparklines' {
        import typeof * as React from 'react';

	declare export interface Point {
x: number,
y: number
} 
	declare export interface SparklinesProps {
data?: number[],
limit?: number,
width?: number,
height?: number,
svgWidth?: $ElementType<React.SVGAttributes<React.ReactSVGElement>, "width">,
svgHeight?: $ElementType<React.SVGAttributes<React.ReactSVGElement>, "height">,
preserveAspectRatio?: $ElementType<React.SVGAttributes<React.ReactSVGElement>, "preserveAspectRatio">,
margin?: number,
min?: number,
max?: number,
style?: $ElementType<React.SVGAttributes<React.ReactSVGElement>, "style">
} 
	declare export class Sparklines mixins React.PureComponent<SparklinesProps> {}
	declare export interface SparklinesBarsProps {
points?: Point[],
height?: number,
style?: $ElementType<React.SVGAttributes<React.ReactSVGElement>, "style">,
barWidth?: number,
margin?: number,
onMouseMove?: (p: Point, event: React.MouseEvent<React.ReactSVGElement>) => void
} 
	declare export class SparklinesBars mixins React.Component<SparklinesBarsProps> {}
	declare export interface SparklinesCurveProps {
color?: $ElementType<React.SVGAttributes<React.ReactSVGElement>, "color">,
style?: $ElementType<React.SVGAttributes<React.ReactSVGElement>, "style">
} 
	declare export class SparklinesCurve mixins React.Component<SparklinesCurveProps> {}
	declare export interface SparklinesLineProps {
color?: $ElementType<React.SVGAttributes<React.ReactSVGElement>, "color">,
style?: $ElementType<React.SVGAttributes<React.ReactSVGElement>, "style">,
onMouseMove?: (event: "enter" | "click", value: number, point: Point) => void
} 
	declare export class SparklinesLine mixins React.Component<SparklinesLineProps> {}
	declare export interface SparklinesNormalBandProps {
style?: $ElementType<React.SVGAttributes<React.ReactSVGElement>, "style">
} 
	declare export class SparklinesNormalBand mixins React.Component<SparklinesNormalBandProps> {}
	declare export interface SparklinesReferenceLineProps {
type?: "max"
| "min"
| "mean"
| "avg"
| "median"
| "custom",
value?: number,
style?: $ElementType<React.SVGAttributes<React.ReactSVGElement>, "style">
} 
	declare export class SparklinesReferenceLine mixins React.Component<SparklinesReferenceLineProps> {}
	declare export interface SparklinesSpotsProps {
size?: number,
style?: $ElementType<React.SVGAttributes<React.ReactSVGElement>, "style">,
spotColors?: {
[change: string]: string
}
} 
	declare export class SparklinesSpots mixins React.Component<SparklinesSpotsProps> {}
	declare export interface SparklinesTextProps {
text?: string,
point?: Point,
fontSize?: number,
fontFamily?: string
} 
	declare export class SparklinesText mixins React.Component<SparklinesTextProps> {}
    }
