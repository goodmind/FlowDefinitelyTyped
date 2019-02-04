declare module 'dagre-layout' {
        declare class graphlib$Graph  {
edges(): Edge[];
edge(id: any): any;
nodes(): string[];
node(id: any): any;
setDefaultEdgeLabel(callback: string | (() => string | {[key: string]: any})): graphlib$Graph;
setDefaultNodeLabel(callback: string | (() => string | {[key: string]: any})): graphlib$Graph;
setEdge(
sourceId: string,
targetId: string,
options?: {
[key: string]: any
},
value?: string): graphlib$Graph;
setEdge(
params: {
v: string,
w: string,
name?: string
},
value?: string): graphlib$Graph;
setGraph(label: GraphLabel): graphlib$Graph;
setNode(id: string, node: {
[key: string]: any
}): graphlib$Graph;
graph(): GraphLabel;
constructor(opt?: {
directed?: boolean,
multigraph?: boolean,
compound?: boolean
}): this;
setParent(name: string, parentName: string): void;
hasNode(name: string): boolean
}
	declare export interface GraphLabel {
width?: number,
height?: number,
compound?: boolean,
rankdir?: string,
align?: string,
nodesep?: number,
edgesep?: number,
ranksep?: number,
marginx?: number,
marginy?: number,
acyclicer?: string,
ranker?: string
} 
	declare export function layout(graph: graphlib$graphlib$Graph): void

	declare export interface Edge {
v: string,
w: string,
name?: string
} 
    }
