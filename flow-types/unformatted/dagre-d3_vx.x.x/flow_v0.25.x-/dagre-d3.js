declare module 'dagre-d3' {
        import typeof * as d3 from 'd3';

	import typeof * as dagre from 'dagre';

	declare export * from 'dagre';

	declare export var render: {
new (): Render
};
	declare export var intersect: {
[shapeName: string]: (node: dagre.Node, points: Array<{}>, point: any) => void
};
	declare module 'dagre' {
        declare interface graphlib$Graph {
graph(): graphlib$Graph,
height: number,
predecessors(id: string): string[],
successors(id: string): string[],
transition?: (selection: d3.Selection<any>) => d3.Transition<any>,
width: number
} 
    }

	declare export interface Render {
arrows(
): {
[arrowStyleName: string]: (parent: d3.Selection<any>, id: string, edge: dagre.Edge, type: string) => void
},
(selection: d3.Selection<any>, g: dagre.graphlib.graphlib$Graph): void,
shapes(
): {
[shapeStyleName: string]: (parent: d3.Selection<any>, bbox: any, node: dagre.Node) => void
}
} 
    }
