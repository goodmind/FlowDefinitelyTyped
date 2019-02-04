declare module 'gl-react' {
        import typeof * as React from 'react';

	declare export type Vec2 = [number, number];
	declare export type Vec4 = [number, number, number, number];
	declare export interface BusProps {
children?: any,
uniform?: string,
index: number
} 
	declare export class Bus mixins React.Component<BusProps> {
id: number;
context: {
glParent: Surface<any> | Node,
glSurface: Surface<any>
};
dependents: Array<Node | Surface<any>>;
glNode: Node;
glBusRootNode: any;
static defaultProps: BusProps;
static contextTypes: {
glParent: any,
glSurface: any
};
static childContextTypes: {
glParent: any
};
getChildContext(): {
glParent: Bus
};
getGLRenderableNode(): Node;
getGLRenderableContent(): any;
getGLName(): string;
getGLShortName(): string;
capture(x?: number, y?: number, w?: number, h?: number): any[];
onRef: (ref: any) => void;
redraw: () => void
}
	declare export type connectSize = (GLComponent: any) => any;
	declare export interface SurfaceProps {
children?: any,
style?: any,
preload?: any[],
visitor?: Visitor,
onLoad?: () => void,
onLoadError?: (e: Error) => void
} 
	declare export interface SurfaceState {
ready: boolean,
rebootId: number,
debug: boolean
} 
	declare export class Surface<T> mixins React.Component<SurfaceProps, SurfaceState> {
id: number;
gl: WebGLRenderingContext;
buffer: WebGLBuffer;
loaderResolver: any;
glView: T;
root: Node;
shaders: {
[key: string]: any
};
mapRenderableContent(inst: any): any;
getVisitors(): Visitor[];
getGLSize(): [number, number];
getGLName(): string;
getGLShortName(): string;
captureAsDataURL(...args: any[]): string;
captureAsBlob(...args: any[]): Promise<Blob>;
capture(x?: number, y?: number, w?: number, h?: number): any[];
redraw(): void;
flush(): void;
getEmptyTexture(): WebGLTexture;
glIsAvailable(): boolean;
rebootForDebug(): void
}
	declare export type createSurface = (
GLView: any,
RenderLessElement: any,
mapRenderableContent: any,
requestFrame: (callback: (time: number) => void) => number,
cancelFrame: (id: number) => void) => Surface<typeof GLView>;
	declare export type listSurfaces = () => Array<Surface<any>>;
	declare export function GLSL(strings: TemplateStringsArray, ...values: any[]): string

	declare export interface LinearCopyProps {
children?: any
} 
	declare export class LinearCopy mixins React.Component<LinearCopyProps> {
getNodeRef(): Node
}
	declare export interface NearestCopyProps {
children?: any
} 
	declare export class NearestCopy mixins React.Component<NearestCopyProps> {
getNodeRef(): Node
}
	declare export interface SurfaceContext {
glParent: Node | Surface<any> | Bus,
glSurface: Surface<any>,
glSizable: {
getGLSize: () => [number, number]
}
} 
	declare export interface Framebuffer {
handle: WebGLFramebuffer,
color: WebGLTexture,
bind: () => void,
dispose: () => void,
syncSize: (w: number, h: number) => void
} 
	declare export interface NodeProps {
shader: ShaderIdentifier | ShaderDefinition,
uniformsOptions?: any,
uniforms?: {
[key: string]: any
},
ignoreUnusedUniforms?: string[] | boolean,
sync?: boolean,
width?: number,
height?: number,
children?: any,
backbuffering?: boolean,
blendFunc?: {
src: () => void,
dst: () => void
},
clear?: {
color: Vec4
},
onDraw?: () => void
} 
	declare export class Node mixins React.Component<NodeProps> {
drawProps: NodeProps;
context: SurfaceContext;
framebuffer: Framebuffer;
backbuffer: Framebuffer;
capturePixelsArray: Uint8Array;
id: number;
uniformsBus: {
[key: string]: Array<Bus | void>
};
dependencies: Array<Node | Bus>;
dependents: Array<Node | Surface<any>>
}
	declare export interface ShaderIdentifier {
type: string,
id: string
} 
	declare export interface ShaderDefinition {
frag: string,
vert?: string
} 
	declare export interface ShaderInfo {
frag: string,
vert: string
} 
	declare export interface ShadersSheet {
[key: string]: ShaderIdentifier
} 
	
      declare var npm$namespace$Shaders: {
        create: typeof Shaders$create,
getName: typeof Shaders$getName,
getShortName: typeof Shaders$getShortName,
get: typeof Shaders$get,
        
      }
declare function Shaders$create(shaders: {
[key: string]: ShaderDefinition
}): ShadersSheet


declare function Shaders$getName(shaderIdentifier: ShaderIdentifier): string


declare function Shaders$getShortName(shaderIdentifier: ShaderIdentifier): string


declare function Shaders$get(shaderIdentifier: ShaderIdentifier): ShaderInfo

	
      declare var npm$namespace$Uniform: {
        backbufferFrom: typeof Uniform$backbufferFrom,
textureSize: typeof Uniform$textureSize,
textureSizeRatio: typeof Uniform$textureSizeRatio,
        Backbuffer: typeof Uniform$Backbuffer,
Resolution: typeof Uniform$Resolution,
      }
declare var Uniform$Backbuffer: string;

declare function Uniform$backbufferFrom(node: Node | Bus): {
type: string,
node: Node | Bus
}


declare var Uniform$Resolution: string;

declare function Uniform$textureSize(obj: any): {
type: string,
obj: any
}


declare function Uniform$textureSizeRatio(obj: any): {
type: string,
obj: any,
ratio: boolean
}

	declare export class Visitor  {
onSurfaceMount(surface: Surface<any>): void;
onSurfaceUnmount(surface: Surface<any>): void;
onSurfaceGLContextChange(surface: Surface<any>, gl?: WebGLRenderingContext): void;
onSurfaceDrawSkipped(surface: Surface<any>): void;
onSurfaceDrawStart(surface: Surface<any>): void;
onSurfaceDrawError(e: Error): boolean;
onSurfaceDrawEnd(surface: Surface<any>): void;
onNodeDrawSkipped(node: Node): void;
onNodeDrawStart(node: Node): void;
onNodeSyncDeps(node: Node, additions: Array<Node | Bus>, deletions: Array<Node | Bus>): void;
onNodeDraw(node: Node, preparedUniforms: any[]): void;
onNodeDrawEnd(node: Node): void
}
	declare export class VisitorLogger mixins Visitor {
groupNestedLvl: number
}
	
      declare var npm$namespace$Visitors: {
        add: typeof Visitors$add,
remove: typeof Visitors$remove,
get: typeof Visitors$get,
        
      }
declare function Visitors$add(visitor: Visitor): void


declare function Visitors$remove(visitor: Visitor): void


declare function Visitors$get(): Visitor[]

    }
