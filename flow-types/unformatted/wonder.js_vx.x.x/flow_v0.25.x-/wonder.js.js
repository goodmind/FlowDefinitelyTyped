declare module 'wonder.js/dist/es2015/renderer/shader/chunk/ShaderChunk' {
        declare export var empty: GLSLChunk;
	declare export var NULL: number;
	declare export var basic_materialColor_fragment: GLSLChunk;
	declare export var end_basic_fragment: GLSLChunk;
	declare export var common_define: GLSLChunk;
	declare export var common_fragment: GLSLChunk;
	declare export var common_function: GLSLChunk;
	declare export var common_vertex: GLSLChunk;
	declare export var highp_fragment: GLSLChunk;
	declare export var lowp_fragment: GLSLChunk;
	declare export var mediump_fragment: GLSLChunk;
	declare export type GLSLChunk = {
top?: string,
define?: string,
varDeclare?: string,
funcDeclare?: string,
funcDefine?: string,
body?: string
};
    }
declare module 'wonder.js/dist/es2015/event/interface/IEventData' {
        declare export interface IEventData {
returnValue: boolean,
preventDefault: () => void,
returnValue: boolean,
preventDefault: () => void
} 
	declare export type IKeyboardEventData = {
ctrlKey: number,
altKey: number,
shiftKey: number,
metaKey: number,
keyCode: number,
ctrlKey: number,
altKey: number,
shiftKey: number,
metaKey: number,
keyCode: number
} & IEventData

	declare export type IMouseEventData = {
clientX: number,
clientY: number,
pageX: number,
pageY: number,
button: number,
detail?: number,
wheelDelta?: number,
movementX?: number,
webkitMovementX?: number,
mozMovementX?: number,
movementY?: number,
webkitMovementY?: number,
mozMovementY?: number,
target: HTMLElement,
currentTarget: HTMLElement,
clientX: number,
clientY: number,
pageX: number,
pageY: number,
button: number,
detail?: number,
wheelDelta?: number,
movementX?: number,
webkitMovementX?: number,
mozMovementX?: number,
movementY?: number,
webkitMovementY?: number,
mozMovementY?: number,
target: HTMLElement,
currentTarget: HTMLElement
} & IEventData

	declare export type ITouchEventData = {
touches: Array<ITouchData>,
changedTouches: Array<ITouchData>,
targetTouches: Array<ITouchData>,
target: HTMLElement,
currentTarget: HTMLElement | null,
touches: Array<ITouchData>,
changedTouches: Array<ITouchData>,
targetTouches: Array<ITouchData>,
target: HTMLElement,
currentTarget: HTMLElement | null
} & IEventData

	declare export interface ITouchData {
clientX: number,
clientY: number,
identifier: number,
pageX: number,
pageY: number,
screenX: number,
screenY: number,
radiusX: number,
radiusY: number,
rotationAngle: number,
force: number,
target: HTMLElement,
clientX: number,
clientY: number,
identifier: number,
pageX: number,
pageY: number,
screenX: number,
screenY: number,
radiusX: number,
radiusY: number,
rotationAngle: number,
force: number,
target: HTMLElement
} 
	declare export type IPointEventData = {
clientX: number,
clientY: number,
pageX: number,
pageY: number,
button?: number,
detail?: number,
wheelDelta?: number,
movementX?: number,
webkitMovementX?: number,
mozMovementX?: number,
movementY?: number,
webkitMovementY?: number,
mozMovementY?: number,
target: HTMLElement,
currentTarget: HTMLElement | null,
clientX: number,
clientY: number,
pageX: number,
pageY: number,
button?: number,
detail?: number,
wheelDelta?: number,
movementX?: number,
webkitMovementX?: number,
mozMovementX?: number,
movementY?: number,
webkitMovementY?: number,
mozMovementY?: number,
target: HTMLElement,
currentTarget: HTMLElement | null
} & IEventData

    }
declare module 'wonder.js/dist/es2015/config/CompileConfig' {
        declare export var CompileConfig: {
isCompileTest: boolean,
closeContractTest: boolean
};
    }
declare module 'wonder.js/dist/es2015/utils/time/TimeController' {
        declare export class TimeController  {
elapsed: number;
pauseElapsed: number;
pauseTime: number;
startTime: number;
start(): void;
stop(): void;
pause(): void;
resume(): void;
computeElapseTime(time: number): number;
getNow(): any
}
    }
declare module 'wonder.js/dist/es2015/utils/time/DirectorTimeController' {
        import type {
          TimeController
        } from 'wonder.js/dist/es2015/utils/time/TimeController';

	declare export class DirectorTimeController mixins TimeController {
static create(): DirectorTimeController;
gameTime: number;
fps: number;
isTimeChange: boolean;
deltaTime: number;
tick(time: number): void;
start(): void;
resume(): void;
getNow(): any
}
    }
declare module 'wonder.js/dist/es2015/utils/time/CommonTimeController' {
        import type {
          TimeController
        } from 'wonder.js/dist/es2015/utils/time/TimeController';

	declare export class CommonTimeController mixins TimeController {
static create(): CommonTimeController;
getNow(): any
}
    }
declare module 'wonder.js/dist/es2015/utils/SortUtils' {
        declare export class SortUtils  {
static insertSort(
targetArr: Array<any>,
compareFunc: (a: any, b: any) => boolean,
isChangeSelf?: boolean): Array<any>;
static quickSort(
targetArr: Array<any>,
compareFunc: (a: any, b: any) => boolean,
isChangeSelf?: boolean): Array<any>
}
    }
declare module 'wonder.js/dist/es2015/utils/ShaderLibUtils' {
        import type {
          Geometry
        } from 'wonder.js/dist/es2015/component/geometry/Geometry';

	import type {
          Shader
        } from 'wonder.js/dist/es2015/renderer/shader/shader/Shader';

	declare export class ShaderLibUtils  {
static addVerticeShaderLib(geometry: Geometry, shader: Shader): void
}
    }
declare module 'wonder.js/dist/es2015/utils/RenderUtils' {
        import type {
          Collection
        } from 'wonder-commonlib/dist/es2015/Collection';

	import type {
          GameObject
        } from 'wonder.js/dist/es2015/core/entityObject/gameObject/GameObject';

	declare export class RenderUtils  {
static getGameObjectRenderList(sourceList: Collection<GameObject>): Collection<GameObject>
}
    }
declare module 'wonder.js/dist/es2015/utils/MathUtils' {
        declare export class MathUtils  {
static clamp(num: number, below: number, up: number): number;
static bigThan(num: number, below: number): number;
static generateZeroToOne(): number;
static generateMinToMax(min: number, max: number): number;
static generateInteger(min: number, max: number): number;
static mod(a: number, b: number): number;
static maxFloorIntegralMultiple(a: number, b: number): number
}
    }
declare module 'wonder.js/dist/es2015/utils/Log' {
        import type {
          Log as Log$
        } from 'wonder-commonlib/dist/es2015/Log';

	declare export class Log mixins Log$ {}
    }
declare module 'wonder.js/dist/es2015/utils/JudgeUtils' {
        import type {
          JudgeUtils as JudgeUtils$
        } from 'wonder-commonlib/dist/es2015/utils/JudgeUtils';

	import type {
          Entity
        } from 'wonder.js/dist/es2015/core/Entity';

	import type {
          Component
        } from 'wonder.js/dist/es2015/core/Component';

	import type {
          Collection
        } from 'wonder-commonlib/dist/es2015/Collection';

	declare export class JudgeUtils mixins JudgeUtils$ {
static isView(obj: any): boolean;
static isEqual(target1: any, target2: any): boolean;
static isPowerOfTwo(value: number): boolean;
static isFloatArray(data: any): boolean;
static isInterface(target: any, memberOfInterface: string): boolean;
static isSelf(self: Entity, entityObject: Entity): boolean;
static isComponenet(component: Component): boolean;
static isDom(obj: any): boolean;
static isCollection(list: Collection<any>): boolean;
static isClass(objInstance: any, className: string): boolean
}
    }
declare module 'wonder.js/dist/es2015/utils/ClassUtils' {
        declare export class ClassUtils  {
static getClassNameByInstance(obj: any): any;
static addClass(className: string, _class: any): void;
static addClassNameAttributeToClass(className: string, _class: any): void;
static getClass(className: string): any
}
    }
declare module 'wonder.js/dist/es2015/utils/BufferUtils' {
        import type {
          EVariableType
        } from 'wonder.js/dist/es2015/renderer/shader/variable/EVariableType';

	import type {
          ArrayBuffer
        } from 'wonder.js/dist/es2015/renderer/buffer/ArrayBuffer';

	declare export class BufferUtils  {
static convertArrayToArrayBuffer(type: EVariableType, value: Array<any>): ArrayBuffer
}
    }
declare module 'wonder.js/dist/es2015/utils/ArrayUtils' {
        import type {
          ArrayUtils as ArrayUtils$
        } from 'wonder-commonlib/dist/es2015/utils/ArrayUtils';

	declare export class ArrayUtils mixins ArrayUtils$ {
static hasRepeatItems(arr: Array<any>): boolean;
static contain(arr: Array<any>, item: any): boolean
}
    }
declare module 'wonder.js/dist/es2015/structure/View' {
        import type {
          ContextConfigData
        } from 'wonder.js/dist/es2015/core/data/MainData';

	declare export class ViewWebGL mixins IView {
static create(view: any): ViewWebGL;
constructor(dom: any): this;
offset: {
x: any,
y: any
};
dom: any;
width: number;
height: number;
styleWidth: string;
styleHeight: string;
x: number;
y: number;
initCanvas(): void;
getContext(contextConfig: ContextConfigData): WebGLRenderingContext
}
	declare export interface IView {
offset: {
x: number,
y: number
},
x: number,
y: number,
width: number,
height: number,
styleWidth: string,
styleHeight: string,
dom: any,
getContext(contextConfig: ContextConfigData): WebGLRenderingContext,
initCanvas(): void,
offset: {
x: number,
y: number
},
x: number,
y: number,
width: number,
height: number,
styleWidth: string,
styleHeight: string,
dom: any,
getContext(contextConfig: ContextConfigData): WebGLRenderingContext,
initCanvas(): void
} 
    }
declare module 'wonder.js/dist/es2015/structure/RectRegion' {
        import type {
          Vector4
        } from 'wonder.js/dist/es2015/math/Vector4';

	declare export class RectRegion mixins Vector4 {
width: number;
height: number;
clone(): RectRegion;
isNotEmpty(): boolean
}
    }
declare module 'wonder.js/dist/es2015/structure/Point' {
        declare export class Point  {
x: number;
y: number;
constructor(x?: number, y?: number): this;
static create(x?: number, y?: number): Point
}
    }
declare module 'wonder.js/dist/es2015/structure/Face3' {
        import type {
          Vector3
        } from 'wonder.js/dist/es2015/math/Vector3';

	import type {
          Collection
        } from 'wonder-commonlib/dist/es2015/Collection';

	declare export class Face3  {
static create(
aIndex: number,
bIndex: number,
cIndex: number,
faceNormal?: Vector3,
vertexNormals?: Collection<Vector3>): Face3;
constructor(aIndex: number, bIndex: number, cIndex: number, faceNormal: Vector3, vertexNormals: Collection<Vector3>): this;
faceNormal: Vector3;
aIndex: number;
bIndex: number;
cIndex: number;
vertexNormals: Collection<Vector3>;
clone(): this;
hasFaceNormal(): boolean;
hasVertexNormal(): boolean
}
    }
declare module 'wonder.js/dist/es2015/structure/Color' {
        import type {
          Vector3
        } from 'wonder.js/dist/es2015/math/Vector3';

	declare export class Color  {
static create(colorVal?: string): Color;
dirty: boolean;
r: number;
g: number;
b: number;
a: number;
initWhenCreate(colorVal?: string): void;
toVector3(): Vector3;
toVector4(): any;
toString(): string;
clone(): Color;
isEqual(color: Color): boolean
}
    }
declare module 'wonder.js/dist/es2015/renderer/state/WebGLState' {
        import type {
          Material
        } from 'wonder.js/dist/es2015/material/Material';

	declare export class WebGLState  {
setState(material: Material): void
}
    }
declare module 'wonder.js/dist/es2015/renderer/state/BasicState' {
        import type {
          WebGLState
        } from 'wonder.js/dist/es2015/renderer/state/WebGLState';

	import type {
          Material
        } from 'wonder.js/dist/es2015/material/Material';

	declare export class BasicState mixins WebGLState {
static create(): BasicState;
setState(material: Material): void
}
    }
declare module 'wonder.js/dist/es2015/renderer/shader/variable/VariableTypeTable' {
        import type {
          EVariableType
        } from 'wonder.js/dist/es2015/renderer/shader/variable/EVariableType';

	declare export class VariableTypeTable  {
static getVariableType(type: EVariableType): string
}
    }
declare module 'wonder.js/dist/es2015/renderer/shader/variable/VariableNameTable' {
        declare export class VariableNameTable  {
static getVariableName(name: string): string
}
    }
declare module 'wonder.js/dist/es2015/renderer/shader/variable/VariableLib' {
        import type {
          EVariableType
        } from 'wonder.js/dist/es2015/renderer/shader/variable/EVariableType';

	declare export class VariableLib  {
static a_position: ShaderVariable;
static a_positionVec2: ShaderVariable;
static a_currentFramePosition: ShaderVariable;
static a_nextFramePosition: ShaderVariable;
static a_normal: ShaderVariable;
static a_currentFrameNormal: ShaderVariable;
static a_nextFrameNormal: ShaderVariable;
static a_color: ShaderVariable;
static a_texCoord: ShaderVariable;
static a_tangent: ShaderVariable;
static u_color: ShaderVariable;
static u_mMatrix: ShaderVariable;
static u_vMatrix: ShaderVariable;
static u_pMatrix: ShaderVariable;
static u_mvpMatrix: ShaderVariable;
static u_vpMatrix: ShaderVariable;
static u_normalMatrix: ShaderVariable;
static u_samplerCube0: ShaderVariable;
static u_sampler2D0: ShaderVariable;
static u_sampler2D1: ShaderVariable;
static u_lightMapSampler: ShaderVariable;
static u_diffuseMapSampler: ShaderVariable;
static u_diffuseMap1Sampler: ShaderVariable;
static u_diffuseMap2Sampler: ShaderVariable;
static u_diffuseMap3Sampler: ShaderVariable;
static u_specularMapSampler: ShaderVariable;
static u_emissionMapSampler: ShaderVariable;
static u_normalMapSampler: ShaderVariable;
static u_reflectionMapSampler: ShaderVariable;
static u_refractionMapSampler: ShaderVariable;
static u_cameraPos: ShaderVariable;
static u_refractionRatio: ShaderVariable;
static u_reflectivity: ShaderVariable;
static u_map0SourceRegion: ShaderVariable;
static u_map1SourceRegion: ShaderVariable;
static u_diffuseMapSourceRegion: ShaderVariable;
static u_map0RepeatRegion: ShaderVariable;
static u_map1RepeatRegion: ShaderVariable;
static u_diffuseMapRepeatRegion: ShaderVariable;
static u_combineMode: ShaderVariable;
static u_mixRatio: ShaderVariable;
static u_lightMapIntensity: ShaderVariable;
static u_diffuse: ShaderVariable;
static u_specular: ShaderVariable;
static u_emission: ShaderVariable;
static u_shininess: ShaderVariable;
static u_lightModel: ShaderVariable;
static u_isBothSide: ShaderVariable;
static u_opacity: ShaderVariable;
static u_ambient: ShaderVariable;
static u_directionLights: ShaderVariable;
static u_pointLights: ShaderVariable;
static u_vpMatrixFromLight: ShaderVariable;
static u_lightPos: ShaderVariable;
static u_farPlane: ShaderVariable;
static u_interpolation: ShaderVariable;
static u_tilesHeightNumber: ShaderVariable;
static u_tilesWidthNumber: ShaderVariable;
static u_amplitude: ShaderVariable;
static u_jointColor: ShaderVariable;
static u_time: ShaderVariable;
static u_speed: ShaderVariable;
static u_shift: ShaderVariable;
static u_alphaThreshold: ShaderVariable;
static u_fireColor: ShaderVariable;
static u_layerHeightDatas: ShaderVariable;
static u_layerSampler2Ds: ShaderVariable;
static u_herb1Color: ShaderVariable;
static u_herb2Color: ShaderVariable;
static u_herb3Color: ShaderVariable;
static u_groundColor: ShaderVariable;
static u_ampScale: ShaderVariable;
static u_woodColor: ShaderVariable;
static u_roadColor: ShaderVariable;
static u_skyColor: ShaderVariable;
static u_cloudColor: ShaderVariable;
static u_brickColor: ShaderVariable;
static u_waveData: ShaderVariable;
static u_windMatrix: ShaderVariable;
static u_bumpMapSampler: ShaderVariable;
static u_bumpMap1Sampler: ShaderVariable;
static u_bumpMap2Sampler: ShaderVariable;
static u_bumpMap3Sampler: ShaderVariable;
static u_levelData: ShaderVariable;
static a_mVec4_0: ShaderVariable;
static a_mVec4_1: ShaderVariable;
static a_mVec4_2: ShaderVariable;
static a_mVec4_3: ShaderVariable;
static a_normalVec4_0: ShaderVariable;
static a_normalVec4_1: ShaderVariable;
static a_normalVec4_2: ShaderVariable;
static u_isRenderListEmpty: ShaderVariable;
static u_isReflectionRenderListEmpty: ShaderVariable;
static u_isRefractionRenderListEmpty: ShaderVariable;
static u_bitmapSampler: ShaderVariable;
static a_page: ShaderVariable;
static u_pageSampler2Ds: ShaderVariable;
static u_mixMapSampler: ShaderVariable;
static u_diffuseMap1RepeatRegion: ShaderVariable;
static u_diffuseMap2RepeatRegion: ShaderVariable;
static u_diffuseMap3RepeatRegion: ShaderVariable;
static u_grassMapDatas: ShaderVariable;
static a_quadIndex: ShaderVariable;
static u_grassMapSampler: ShaderVariable;
static u_windData: ShaderVariable;
static a_vertexIndex: ShaderVariable;
static u_grassRangeWidth: ShaderVariable;
static u_grassRangeHeight: ShaderVariable;
static u_terrainRangeWidth: ShaderVariable;
static u_terrainRangeHeight: ShaderVariable;
static u_terrainMinHeight: ShaderVariable;
static u_terrainMaxHeight: ShaderVariable;
static u_terrainSubdivisions: ShaderVariable;
static u_terrainScaleY: ShaderVariable;
static u_terrainPositionY: ShaderVariable;
static u_heightMapSampler: ShaderVariable;
static u_lightColor: ShaderVariable;
static a_jointIndice: ShaderVariable;
static a_jointWeight: ShaderVariable;
static u_jointMatrices: ShaderVariable
}
	declare export type ShaderVariable = {
type: EVariableType,
value: any
};
    }
declare module 'wonder.js/dist/es2015/renderer/shader/variable/EVariableType' {
        declare export  class EVariableType {
  constructor(...args: empty): mixed;
static +FLOAT_1: Class<EVariableType__FLOAT_1> & EVariableType__FLOAT_1 & 0;// 0
static +FLOAT_2: Class<EVariableType__FLOAT_2> & EVariableType__FLOAT_2 & 1;// 1
static +FLOAT_3: Class<EVariableType__FLOAT_3> & EVariableType__FLOAT_3 & 2;// 2
static +FLOAT_4: Class<EVariableType__FLOAT_4> & EVariableType__FLOAT_4 & 3;// 3
static +VECTOR_2: Class<EVariableType__VECTOR_2> & EVariableType__VECTOR_2 & 4;// 4
static +VECTOR_3: Class<EVariableType__VECTOR_3> & EVariableType__VECTOR_3 & 5;// 5
static +VECTOR_4: Class<EVariableType__VECTOR_4> & EVariableType__VECTOR_4 & 6;// 6
static +COLOR_3: Class<EVariableType__COLOR_3> & EVariableType__COLOR_3 & 7;// 7
static +FLOAT_MAT3: Class<EVariableType__FLOAT_MAT3> & EVariableType__FLOAT_MAT3 & 8;// 8
static +FLOAT_MAT4: Class<EVariableType__FLOAT_MAT4> & EVariableType__FLOAT_MAT4 & 9;// 9
static +BUFFER: Class<EVariableType__BUFFER> & EVariableType__BUFFER & 10;// 10
static +SAMPLER_CUBE: Class<EVariableType__SAMPLER_CUBE> & EVariableType__SAMPLER_CUBE & 11;// 11
static +SAMPLER_2D: Class<EVariableType__SAMPLER_2D> & EVariableType__SAMPLER_2D & 12;// 12
static +NUMBER_1: Class<EVariableType__NUMBER_1> & EVariableType__NUMBER_1 & 13;// 13
static +STRUCTURE: Class<EVariableType__STRUCTURE> & EVariableType__STRUCTURE & 14;// 14
static +STRUCTURES: Class<EVariableType__STRUCTURES> & EVariableType__STRUCTURES & 15;// 15
static +SAMPLER_ARRAY: Class<EVariableType__SAMPLER_ARRAY> & EVariableType__SAMPLER_ARRAY & 16;// 16
static +FLOAT_MAT4_ARRAY: Class<EVariableType__FLOAT_MAT4_ARRAY> & EVariableType__FLOAT_MAT4_ARRAY & 17;// 17

}

declare class EVariableType__FLOAT_1 mixins EVariableType {}
declare class EVariableType__FLOAT_2 mixins EVariableType {}
declare class EVariableType__FLOAT_3 mixins EVariableType {}
declare class EVariableType__FLOAT_4 mixins EVariableType {}
declare class EVariableType__VECTOR_2 mixins EVariableType {}
declare class EVariableType__VECTOR_3 mixins EVariableType {}
declare class EVariableType__VECTOR_4 mixins EVariableType {}
declare class EVariableType__COLOR_3 mixins EVariableType {}
declare class EVariableType__FLOAT_MAT3 mixins EVariableType {}
declare class EVariableType__FLOAT_MAT4 mixins EVariableType {}
declare class EVariableType__BUFFER mixins EVariableType {}
declare class EVariableType__SAMPLER_CUBE mixins EVariableType {}
declare class EVariableType__SAMPLER_2D mixins EVariableType {}
declare class EVariableType__NUMBER_1 mixins EVariableType {}
declare class EVariableType__STRUCTURE mixins EVariableType {}
declare class EVariableType__STRUCTURES mixins EVariableType {}
declare class EVariableType__SAMPLER_ARRAY mixins EVariableType {}
declare class EVariableType__FLOAT_MAT4_ARRAY mixins EVariableType {}

    }
declare module 'wonder.js/dist/es2015/renderer/shader/variable/EVariableSemantic' {
        declare export  class EVariableSemantic {
  constructor(...args: empty): mixed;
static +POSITION: Class<EVariableSemantic__POSITION> & EVariableSemantic__POSITION & 0;// 0
static +NORMAL: Class<EVariableSemantic__NORMAL> & EVariableSemantic__NORMAL & 1;// 1
static +TEXCOORD: Class<EVariableSemantic__TEXCOORD> & EVariableSemantic__TEXCOORD & 2;// 2
static +TANGENT: Class<EVariableSemantic__TANGENT> & EVariableSemantic__TANGENT & 3;// 3
static +COLOR: Class<EVariableSemantic__COLOR> & EVariableSemantic__COLOR & 4;// 4
static +MODEL: Class<EVariableSemantic__MODEL> & EVariableSemantic__MODEL & 5;// 5
static +VIEW: Class<EVariableSemantic__VIEW> & EVariableSemantic__VIEW & 6;// 6
static +PROJECTION: Class<EVariableSemantic__PROJECTION> & EVariableSemantic__PROJECTION & 7;// 7
static +MODEL_VIEW: Class<EVariableSemantic__MODEL_VIEW> & EVariableSemantic__MODEL_VIEW & 8;// 8
static +MODEL_VIEW_PROJECTION: Class<EVariableSemantic__MODEL_VIEW_PROJECTION> & EVariableSemantic__MODEL_VIEW_PROJECTION & 9;// 9
static +MODEL_INVERSE: Class<EVariableSemantic__MODEL_INVERSE> & EVariableSemantic__MODEL_INVERSE & 10;// 10
static +VIEW_INVERSE: Class<EVariableSemantic__VIEW_INVERSE> & EVariableSemantic__VIEW_INVERSE & 11;// 11
static +PROJECTION_INVERSE: Class<EVariableSemantic__PROJECTION_INVERSE> & EVariableSemantic__PROJECTION_INVERSE & 12;// 12
static +MODEL_VIEW_INVERSE: Class<EVariableSemantic__MODEL_VIEW_INVERSE> & EVariableSemantic__MODEL_VIEW_INVERSE & 13;// 13
static +MODEL_VIEW_PROJECTION_INVERSE: Class<EVariableSemantic__MODEL_VIEW_PROJECTION_INVERSE> & EVariableSemantic__MODEL_VIEW_PROJECTION_INVERSE & 14;// 14
static +MODEL_INVERSE_TRANSPOSE: Class<EVariableSemantic__MODEL_INVERSE_TRANSPOSE> & EVariableSemantic__MODEL_INVERSE_TRANSPOSE & 15;// 15
static +MODEL_VIEW_INVERSE_TRANSPOSE: Class<EVariableSemantic__MODEL_VIEW_INVERSE_TRANSPOSE> & EVariableSemantic__MODEL_VIEW_INVERSE_TRANSPOSE & 16;// 16
static +VIEWPORT: Class<EVariableSemantic__VIEWPORT> & EVariableSemantic__VIEWPORT & 17;// 17

}

declare class EVariableSemantic__POSITION mixins EVariableSemantic {}
declare class EVariableSemantic__NORMAL mixins EVariableSemantic {}
declare class EVariableSemantic__TEXCOORD mixins EVariableSemantic {}
declare class EVariableSemantic__TANGENT mixins EVariableSemantic {}
declare class EVariableSemantic__COLOR mixins EVariableSemantic {}
declare class EVariableSemantic__MODEL mixins EVariableSemantic {}
declare class EVariableSemantic__VIEW mixins EVariableSemantic {}
declare class EVariableSemantic__PROJECTION mixins EVariableSemantic {}
declare class EVariableSemantic__MODEL_VIEW mixins EVariableSemantic {}
declare class EVariableSemantic__MODEL_VIEW_PROJECTION mixins EVariableSemantic {}
declare class EVariableSemantic__MODEL_INVERSE mixins EVariableSemantic {}
declare class EVariableSemantic__VIEW_INVERSE mixins EVariableSemantic {}
declare class EVariableSemantic__PROJECTION_INVERSE mixins EVariableSemantic {}
declare class EVariableSemantic__MODEL_VIEW_INVERSE mixins EVariableSemantic {}
declare class EVariableSemantic__MODEL_VIEW_PROJECTION_INVERSE mixins EVariableSemantic {}
declare class EVariableSemantic__MODEL_INVERSE_TRANSPOSE mixins EVariableSemantic {}
declare class EVariableSemantic__MODEL_VIEW_INVERSE_TRANSPOSE mixins EVariableSemantic {}
declare class EVariableSemantic__VIEWPORT mixins EVariableSemantic {}

    }
declare module 'wonder.js/dist/es2015/renderer/shader/variable/EVariableCategory' {
        declare export  class EVariableCategory {
  constructor(...args: empty): mixed;
static +ENGINE: Class<EVariableCategory__ENGINE> & EVariableCategory__ENGINE & 0;// 0
static +CUSTOM: Class<EVariableCategory__CUSTOM> & EVariableCategory__CUSTOM & 1;// 1

}

declare class EVariableCategory__ENGINE mixins EVariableCategory {}
declare class EVariableCategory__CUSTOM mixins EVariableCategory {}

    }
declare module 'wonder.js/dist/es2015/renderer/shader/sourceBuilder/ShaderSourceBuilder' {
        import type {
          Hash
        } from 'wonder-commonlib/dist/es2015/Hash';

	import type {
          ShaderData
        } from 'wonder.js/dist/es2015/renderer/shader/shader/Shader';

	declare export class ShaderSourceBuilder  {
attributes: Hash<ShaderData>;
uniforms: Hash<ShaderData>;
vsSource: string;
fsSource: string;
build(...args: any[]): void;
clearShaderDefinition(): void;
dispose(): void;
convertAttributesData(): void
}
	declare export type SourceDefine = {
name: string,
value: any
};
    }
declare module 'wonder.js/dist/es2015/renderer/shader/sourceBuilder/EngineShaderSourceBuilder' {
        import type {
          ShaderSourceBuilder,SourceDefine
        } from 'wonder.js/dist/es2015/renderer/shader/sourceBuilder/ShaderSourceBuilder';

	import type {
          Collection
        } from 'wonder-commonlib/dist/es2015/Collection';

	import type {
          EngineShaderLib
        } from 'wonder.js/dist/es2015/renderer/shader/lib/EngineShaderLib';

	declare export class EngineShaderSourceBuilder mixins ShaderSourceBuilder {
static create(): EngineShaderSourceBuilder;
vsSourceTop: string;
vsSourceDefine: string;
vsSourceVarDeclare: string;
vsSourceFuncDeclare: string;
vsSourceFuncDefine: string;
vsSourceBody: string;
fsSourceTop: string;
fsSourceDefine: string;
fsSourceVarDeclare: string;
fsSourceFuncDeclare: string;
fsSourceFuncDefine: string;
fsSourceBody: string;
vsSourceDefineList: Collection<SourceDefine>;
fsSourceDefineList: Collection<SourceDefine>;
vsSourceExtensionList: Collection<string>;
fsSourceExtensionList: Collection<string>;
build(libs: Collection<EngineShaderLib>): void;
clearShaderDefinition(): void
}
    }
declare module 'wonder.js/dist/es2015/renderer/shader/shader/Shader' {
        import type {
          Hash
        } from 'wonder-commonlib/dist/es2015/Hash';

	import type {
          Program
        } from 'wonder.js/dist/es2015/renderer/program/Program';

	import type {
          Collection
        } from 'wonder-commonlib/dist/es2015/Collection';

	import type {
          ShaderLib
        } from 'wonder.js/dist/es2015/renderer/shader/lib/ShaderLib';

	import type {
          ShaderSourceBuilder
        } from 'wonder.js/dist/es2015/renderer/shader/sourceBuilder/ShaderSourceBuilder';

	import type {
          RenderCommand
        } from 'wonder.js/dist/es2015/renderer/command/RenderCommand';

	import type {
          Material
        } from 'wonder.js/dist/es2015/material/Material';

	import type {
          EVariableType
        } from 'wonder.js/dist/es2015/renderer/shader/variable/EVariableType';

	declare export class Shader  {
attributes: Hash<ShaderData>;
uniforms: Hash<ShaderData>;
vsSource: string;
fsSource: string;
dirty: boolean;
program: Program;
libDirty: boolean;
definitionDataDirty: boolean;
libs: Collection<ShaderLib>;
sourceBuilder: ShaderSourceBuilder;
update(cmd: RenderCommand, material: Material): any;
createVsShader(): any;
createFsShader(): any;
init(material: Material): void;
dispose(): void;
hasLib(lib: ShaderLib): any;
hasLib(_class: Function): any;
addLib(lib: ShaderLib): void;
addShaderLibToTop(lib: ShaderLib): void;
getLib(libClass: Function): ShaderLib;
getLibs(): Collection<ShaderLib>;
removeLib(lib: ShaderLib): any;
removeLib(func: Function): any;
removeAllLibs(): void;
sortLib(func: (a: ShaderLib, b: ShaderLib) => any): void;
createShaderSourceBuilder(): ShaderSourceBuilder;
buildDefinitionData(cmd: RenderCommand, material: Material): void;
judgeRefreshShader(cmd: RenderCommand, material: Material): void
}
	declare export type ShaderData = {
type: EVariableType,
value?: any,
textureId?: string
};
    }
declare module 'wonder.js/dist/es2015/renderer/shader/shader/EngineShader' {
        import type {
          Shader
        } from 'wonder.js/dist/es2015/renderer/shader/shader/Shader';

	import type {
          EngineShaderSourceBuilder
        } from 'wonder.js/dist/es2015/renderer/shader/sourceBuilder/EngineShaderSourceBuilder';

	import type {
          Collection
        } from 'wonder-commonlib/dist/es2015/Collection';

	import type {
          EngineShaderLib
        } from 'wonder.js/dist/es2015/renderer/shader/lib/EngineShaderLib';

	import type {
          RenderCommand
        } from 'wonder.js/dist/es2015/renderer/command/RenderCommand';

	import type {
          Material
        } from 'wonder.js/dist/es2015/material/Material';

	import type {
          ShaderSourceBuilder
        } from 'wonder.js/dist/es2015/renderer/shader/sourceBuilder/ShaderSourceBuilder';

	declare export class EngineShader mixins Shader {
sourceBuilder: EngineShaderSourceBuilder;
libs: Collection<EngineShaderLib>;
buildDefinitionData(cmd: RenderCommand, material: Material): void;
createShaderSourceBuilder(): ShaderSourceBuilder
}
    }
declare module 'wonder.js/dist/es2015/renderer/shader/shader/CommonShader' {
        import type {
          EngineShader
        } from 'wonder.js/dist/es2015/renderer/shader/shader/EngineShader';

	import type {
          QuadCommand
        } from 'wonder.js/dist/es2015/renderer/command/QuadCommand';

	import type {
          Material
        } from 'wonder.js/dist/es2015/material/Material';

	declare export class CommonShader mixins EngineShader {
static create(): CommonShader;
update(cmd: QuadCommand, material: Material): void
}
    }
declare module 'wonder.js/dist/es2015/renderer/shader/lib/ShaderLib' {
        import type {
          Shader
        } from 'wonder.js/dist/es2015/renderer/shader/shader/Shader';

	import type {
          Program
        } from 'wonder.js/dist/es2015/renderer/program/Program';

	import type {
          RenderCommand
        } from 'wonder.js/dist/es2015/renderer/command/RenderCommand';

	import type {
          Material
        } from 'wonder.js/dist/es2015/material/Material';

	declare export class ShaderLib  {
shader: Shader;
sendShaderVariables(program: Program, cmd: RenderCommand, material: Material): void;
init(): void;
dispose(): void
}
    }
declare module 'wonder.js/dist/es2015/renderer/shader/lib/EngineShaderLib' {
        import type {
          ShaderLib
        } from 'wonder.js/dist/es2015/renderer/shader/lib/ShaderLib';

	import type {
          EngineShader
        } from 'wonder.js/dist/es2015/renderer/shader/shader/EngineShader';

	import type {
          Hash
        } from 'wonder-commonlib/dist/es2015/Hash';

	import type {
          ShaderVariable
        } from 'wonder.js/dist/es2015/renderer/shader/variable/VariableLib';

	import type {
          Collection
        } from 'wonder-commonlib/dist/es2015/Collection';

	import type {
          RenderCommand
        } from 'wonder.js/dist/es2015/renderer/command/RenderCommand';

	import type {
          Material
        } from 'wonder.js/dist/es2015/material/Material';

	import type {
          Program
        } from 'wonder.js/dist/es2015/renderer/program/Program';

	import type {
          GLSLChunk
        } from 'wonder.js/dist/es2015/renderer/shader/chunk/ShaderChunk';

	declare export class EngineShaderLib mixins ShaderLib {
shader: EngineShader;
vsChunk: GLSLChunk;
fsChunk: GLSLChunk;
attributes: Hash<ShaderVariable>;
uniforms: Hash<ShaderVariable>;
vsSourceTop: string;
vsSourceDefine: string;
vsSourceVarDeclare: string;
vsSourceFuncDeclare: string;
vsSourceFuncDefine: string;
vsSourceBody: string;
vsSource: string;
fsSourceTop: string;
fsSourceDefine: string;
fsSourceVarDeclare: string;
fsSourceFuncDeclare: string;
fsSourceFuncDefine: string;
fsSourceBody: string;
fsSource: string;
vsSourceDefineList: Collection<any>;
fsSourceDefineList: Collection<any>;
vsSourceExtensionList: Collection<string>;
fsSourceExtensionList: Collection<string>;
setShaderDefinition(cmd: RenderCommand, material: Material): void;
sendAttributeBuffer(program: Program, name: string, data: any): void;
sendUniformData(program: Program, name: string, data: any): void;
getVsChunk(): any;
getVsChunk(chunk: GLSLChunk): any;
getFsChunk(): any;
getFsChunk(chunk: GLSLChunk): any;
setVsSource(vs: GLSLChunk | string, operator?: string): void;
setFsSource(fs: GLSLChunk | string, operator?: string): void;
addAttributeVariable(variableArr: Array<string>): void;
addUniformVariable(variableArr: Array<string>): void
}
    }
declare module 'wonder.js/dist/es2015/renderer/shader/lib/common/VerticeCommonShaderLib' {
        import type {
          EngineShaderLib
        } from 'wonder.js/dist/es2015/renderer/shader/lib/EngineShaderLib';

	import type {
          Program
        } from 'wonder.js/dist/es2015/renderer/program/Program';

	import type {
          QuadCommand
        } from 'wonder.js/dist/es2015/renderer/command/QuadCommand';

	import type {
          EngineMaterial
        } from 'wonder.js/dist/es2015/material/EngineMaterial';

	import type {
          GLSLChunk
        } from 'wonder.js/dist/es2015/renderer/shader/chunk/ShaderChunk';

	declare export class VerticeCommonShaderLib mixins EngineShaderLib {
static create(): VerticeCommonShaderLib;
vsChunk: GLSLChunk;
fsChunk: GLSLChunk;
sendShaderVariables(program: Program, cmd: QuadCommand, material: EngineMaterial): void;
setShaderDefinition(cmd: QuadCommand, material: EngineMaterial): void
}
    }
declare module 'wonder.js/dist/es2015/renderer/shader/lib/common/EndShaderLib' {
        import type {
          EngineShaderLib
        } from 'wonder.js/dist/es2015/renderer/shader/lib/EngineShaderLib';

	import type {
          Program
        } from 'wonder.js/dist/es2015/renderer/program/Program';

	import type {
          QuadCommand
        } from 'wonder.js/dist/es2015/renderer/command/QuadCommand';

	import type {
          EngineMaterial
        } from 'wonder.js/dist/es2015/material/EngineMaterial';

	import type {
          GLSLChunk
        } from 'wonder.js/dist/es2015/renderer/shader/chunk/ShaderChunk';

	declare export class EndShaderLib mixins EngineShaderLib {
static create(): EndShaderLib;
vsChunk: GLSLChunk;
fsChunk: GLSLChunk;
sendShaderVariables(program: Program, cmd: QuadCommand, material: EngineMaterial): void
}
    }
declare module 'wonder.js/dist/es2015/renderer/shader/lib/common/CommonShaderLib' {
        import type {
          EngineShaderLib
        } from 'wonder.js/dist/es2015/renderer/shader/lib/EngineShaderLib';

	import type {
          Program
        } from 'wonder.js/dist/es2015/renderer/program/Program';

	import type {
          QuadCommand
        } from 'wonder.js/dist/es2015/renderer/command/QuadCommand';

	import type {
          EngineMaterial
        } from 'wonder.js/dist/es2015/material/EngineMaterial';

	import type {
          GLSLChunk
        } from 'wonder.js/dist/es2015/renderer/shader/chunk/ShaderChunk';

	declare export class CommonShaderLib mixins EngineShaderLib {
static create(): CommonShaderLib;
vsChunk: GLSLChunk;
fsChunk: GLSLChunk;
sendShaderVariables(program: Program, cmd: QuadCommand, material: EngineMaterial): void;
setShaderDefinition(cmd: QuadCommand, material: EngineMaterial): void
}
    }
declare module 'wonder.js/dist/es2015/renderer/shader/lib/basic/EndBasicShaderLib' {
        import type {
          EngineShaderLib
        } from 'wonder.js/dist/es2015/renderer/shader/lib/EngineShaderLib';

	import type {
          QuadCommand
        } from 'wonder.js/dist/es2015/renderer/command/QuadCommand';

	import type {
          StandardBasicMaterial
        } from 'wonder.js/dist/es2015/material/StandardBasicMaterial';

	import type {
          GLSLChunk
        } from 'wonder.js/dist/es2015/renderer/shader/chunk/ShaderChunk';

	declare export class EndBasicShaderLib mixins EngineShaderLib {
static create(): EndBasicShaderLib;
vsChunk: GLSLChunk;
fsChunk: GLSLChunk;
setShaderDefinition(cmd: QuadCommand, material: StandardBasicMaterial): void
}
    }
declare module 'wonder.js/dist/es2015/renderer/shader/lib/basic/BasicShaderLib' {
        import type {
          EngineShaderLib
        } from 'wonder.js/dist/es2015/renderer/shader/lib/EngineShaderLib';

	import type {
          Program
        } from 'wonder.js/dist/es2015/renderer/program/Program';

	import type {
          QuadCommand
        } from 'wonder.js/dist/es2015/renderer/command/QuadCommand';

	import type {
          BasicMaterial
        } from 'wonder.js/dist/es2015/material/BasicMaterial';

	import type {
          GLSLChunk
        } from 'wonder.js/dist/es2015/renderer/shader/chunk/ShaderChunk';

	declare export class BasicShaderLib mixins EngineShaderLib {
static create(): BasicShaderLib;
vsChunk: GLSLChunk;
fsChunk: GLSLChunk;
sendShaderVariables(program: Program, cmd: QuadCommand, material: BasicMaterial): void;
setShaderDefinition(cmd: QuadCommand, material: BasicMaterial): void
}
    }
declare module 'wonder.js/dist/es2015/renderer/shader/lib/basic/BasicMaterialColorShaderLib' {
        import type {
          EngineShaderLib
        } from 'wonder.js/dist/es2015/renderer/shader/lib/EngineShaderLib';

	import type {
          Program
        } from 'wonder.js/dist/es2015/renderer/program/Program';

	import type {
          QuadCommand
        } from 'wonder.js/dist/es2015/renderer/command/QuadCommand';

	import type {
          BasicMaterial
        } from 'wonder.js/dist/es2015/material/BasicMaterial';

	import type {
          GLSLChunk
        } from 'wonder.js/dist/es2015/renderer/shader/chunk/ShaderChunk';

	declare export class BasicMaterialColorShaderLib mixins EngineShaderLib {
static create(): BasicMaterialColorShaderLib;
vsChunk: GLSLChunk;
fsChunk: GLSLChunk;
sendShaderVariables(program: Program, cmd: QuadCommand, material: BasicMaterial): void;
setShaderDefinition(cmd: QuadCommand, material: BasicMaterial): void
}
    }
declare module 'wonder.js/dist/es2015/renderer/renderer/WebGLRenderer' {
        import type {
          Renderer
        } from 'wonder.js/dist/es2015/renderer/renderer/Renderer';

	import type {
          RenderCommand
        } from 'wonder.js/dist/es2015/renderer/command/RenderCommand';

	import type {
          Color
        } from 'wonder.js/dist/es2015/structure/Color';

	declare export class WebGLRenderer mixins Renderer {
static create(): WebGLRenderer;
addCommand(command: RenderCommand): void;
hasCommand(): boolean;
clear(): void;
render(): void;
init(): void;
setClearColor(color: Color): void
}
    }
declare module 'wonder.js/dist/es2015/renderer/renderer/Renderer' {
        import type {
          WebGLState
        } from 'wonder.js/dist/es2015/renderer/state/WebGLState';

	import type {
          RenderCommand
        } from 'wonder.js/dist/es2015/renderer/command/RenderCommand';

	declare export class Renderer  {
webglState: WebGLState;
addCommand(command: RenderCommand): void;
hasCommand(): boolean;
render(): void;
clear(): void;
init(): void
}
    }
declare module 'wonder.js/dist/es2015/renderer/program/Program' {
        import type {
          Entity
        } from 'wonder.js/dist/es2015/core/Entity';

	import type {
          EVariableType
        } from 'wonder.js/dist/es2015/renderer/shader/variable/EVariableType';

	import type {
          ArrayBuffer
        } from 'wonder.js/dist/es2015/renderer/buffer/ArrayBuffer';

	import type {
          Shader
        } from 'wonder.js/dist/es2015/renderer/shader/shader/Shader';

	declare export class Program mixins Entity {
static create(): Program;
glProgram: any;
use(): void;
getAttribLocation(name: string): any;
getUniformLocation(name: string): any;
sendUniformData(name: string, type: EVariableType, data: any): void;
sendAttributeBuffer(name: string, type: EVariableType, buffer: ArrayBuffer): void;
sendStructureData(name: string, type: EVariableType, data: any): void;
sendFloat1(name: string, data: any): void;
sendFloat2(name: string, data: any): void;
sendFloat3(name: string, data: any): void;
sendFloat4(name: string, data: any): void;
sendVector2(name: string, data: any): void;
sendVector3(name: string, data: any): void;
sendVector4(name: string, data: any): void;
sendColor3(name: string, data: any): void;
sendNum1(name: string, data: any): void;
sendMatrix3(name: string, data: any): void;
sendMatrix4(name: string, data: any): void;
sendMatrix4Array(name: string, data: Float32Array): void;
sendSampleArray(name: string, data: any): void;
sendAllBufferData(): void;
initWithShader(shader: Shader): this;
dispose(): void
}
    }
declare module 'wonder.js/dist/es2015/renderer/program/GLSLDataSender' {
        import type {
          Program
        } from 'wonder.js/dist/es2015/renderer/program/Program';

	import type {
          ArrayBuffer
        } from 'wonder.js/dist/es2015/renderer/buffer/ArrayBuffer';

	import type {
          Color
        } from 'wonder.js/dist/es2015/structure/Color';

	import type {
          Matrix3
        } from 'wonder.js/dist/es2015/math/Matrix3';

	import type {
          Matrix4
        } from 'wonder.js/dist/es2015/math/Matrix4';

	declare export class GLSLDataSender  {
static create(program: Program): GLSLDataSender;
constructor(program: Program): this;
sendFloat1(name: string, data: any): void;
sendFloat2(name: string, data: any): void;
sendFloat3(name: string, data: any): void;
sendFloat4(name: string, data: any): void;
sendVector2(name: string, data: any): void;
sendVector3(name: string, data: any): void;
sendVector4(name: string, data: any): void;
sendColor3(name: string, data: Color): void;
sendNum1(name: string, data: number): void;
sendMatrix3(name: string, data: Matrix3): void;
sendMatrix4(name: string, data: Matrix4): void;
sendMatrix4Array(name: string, data: Array<number> | Float32Array): void;
sendSampleArray(name: string, data: Array<number>): void;
getUniformLocation(name: string): any;
addBufferToToSendList(pos: number, buffer: ArrayBuffer): void;
sendAllBufferData(): void;
clearBufferList(): void;
sendBuffer(pos: number, buffer: ArrayBuffer): void;
disableVertexAttribArray(): void;
clearAllCache(): void;
dispose(): void
}
    }
declare module 'wonder.js/dist/es2015/renderer/GlUtils' {
        declare export class GlUtils  {
static drawElements(mode: any, count: number, type: any, offset: number): void;
static drawArrays(mode: any, first: number, count: number): void
}
    }
declare module 'wonder.js/dist/es2015/renderer/EDrawMode' {
        declare export  class EDrawMode {
  constructor(...args: empty): mixed;
static +POINTS: Class<EDrawMode__POINTS> & EDrawMode__POINTS & 0;// 0
static +LINES: Class<EDrawMode__LINES> & EDrawMode__LINES & 1;// 1
static +LINE_LOOP: Class<EDrawMode__LINE_LOOP> & EDrawMode__LINE_LOOP & 2;// 2
static +LINE_STRIP: Class<EDrawMode__LINE_STRIP> & EDrawMode__LINE_STRIP & 3;// 3
static +TRIANGLES: Class<EDrawMode__TRIANGLES> & EDrawMode__TRIANGLES & 4;// 4
static +TRIANGLE_STRIP: Class<EDrawMode__TRIANGLE_STRIP> & EDrawMode__TRIANGLE_STRIP & 5;// 5
static +TRANGLE_FAN: Class<EDrawMode__TRANGLE_FAN> & EDrawMode__TRANGLE_FAN & 6;// 6

}

declare class EDrawMode__POINTS mixins EDrawMode {}
declare class EDrawMode__LINES mixins EDrawMode {}
declare class EDrawMode__LINE_LOOP mixins EDrawMode {}
declare class EDrawMode__LINE_STRIP mixins EDrawMode {}
declare class EDrawMode__TRIANGLES mixins EDrawMode {}
declare class EDrawMode__TRIANGLE_STRIP mixins EDrawMode {}
declare class EDrawMode__TRANGLE_FAN mixins EDrawMode {}

    }
declare module 'wonder.js/dist/es2015/renderer/command/SingleDrawCommand' {
        import type {
          QuadCommand
        } from 'wonder.js/dist/es2015/renderer/command/QuadCommand';

	import type {
          Matrix3
        } from 'wonder.js/dist/es2015/math/Matrix3';

	import type {
          Material
        } from 'wonder.js/dist/es2015/material/Material';

	declare export class SingleDrawCommand mixins QuadCommand {
static create(): SingleDrawCommand;
normalMatrix: Matrix3;
draw(material: Material): void
}
    }
declare module 'wonder.js/dist/es2015/renderer/command/RenderCommand' {
        import type {
          WebGLState
        } from 'wonder.js/dist/es2015/renderer/state/WebGLState';

	import type {
          EDrawMode
        } from 'wonder.js/dist/es2015/renderer/EDrawMode';

	import type {
          ElementBuffer
        } from 'wonder.js/dist/es2015/renderer/buffer/ElementBuffer';

	import type {
          ArrayBuffer
        } from 'wonder.js/dist/es2015/renderer/buffer/ArrayBuffer';

	declare export class RenderCommand  {
webglState: WebGLState;
drawMode: EDrawMode;
execute(): void;
init(): void;
dispose(): void;
drawElements(indexBuffer: ElementBuffer): void;
drawArray(vertexBuffer: ArrayBuffer): void
}
    }
declare module 'wonder.js/dist/es2015/renderer/command/QuadCommand' {
        import type {
          RenderCommand
        } from 'wonder.js/dist/es2015/renderer/command/RenderCommand';

	import type {
          Matrix4
        } from 'wonder.js/dist/es2015/math/Matrix4';

	import type {
          BufferContainer
        } from 'wonder.js/dist/es2015/component/geometry/data/BufferContainer';

	import type {
          Material
        } from 'wonder.js/dist/es2015/material/Material';

	import type {
          GameObject
        } from 'wonder.js/dist/es2015/core/entityObject/gameObject/GameObject';

	import type {
          Program
        } from 'wonder.js/dist/es2015/renderer/program/Program';

	declare export class QuadCommand mixins RenderCommand {
program: Program;
mvpMatrix: Matrix4;
vpMatrix: Matrix4;
mMatrix: Matrix4;
vMatrix: Matrix4;
pMatrix: Matrix4;
buffers: BufferContainer;
material: Material;
target: GameObject;
sortId: number;
execute(): void;
draw(material: Material): void
}
    }
declare module 'wonder.js/dist/es2015/renderer/buffer/ElementBuffer' {
        import type {
          CommonBuffer
        } from 'wonder.js/dist/es2015/renderer/buffer/CommonBuffer';

	import type {
          EBufferType
        } from 'wonder.js/dist/es2015/renderer/buffer/EBufferType';

	import type {
          EBufferUsage
        } from 'wonder.js/dist/es2015/renderer/buffer/EBufferUsage';

	declare export class ElementBuffer mixins CommonBuffer {
static create(data: Array<number>, type?: EBufferType, usage?: EBufferUsage): ElementBuffer;
typeSize: number;
data: Uint16Array | Uint32Array;
initWhenCreate(data: Array<number>, type: EBufferType, usage: EBufferUsage): any;
resetData(data: Array<number>, type?: EBufferType, offset?: number): this
}
    }
declare module 'wonder.js/dist/es2015/renderer/buffer/EBufferUsage' {
        declare export  class EBufferUsage {
  constructor(...args: empty): mixed;
static +STREAM_DRAW: Class<EBufferUsage__STREAM_DRAW> & EBufferUsage__STREAM_DRAW & 0;// 0
static +STATIC_DRAW: Class<EBufferUsage__STATIC_DRAW> & EBufferUsage__STATIC_DRAW & 1;// 1
static +DYNAMIC_DRAW: Class<EBufferUsage__DYNAMIC_DRAW> & EBufferUsage__DYNAMIC_DRAW & 2;// 2

}

declare class EBufferUsage__STREAM_DRAW mixins EBufferUsage {}
declare class EBufferUsage__STATIC_DRAW mixins EBufferUsage {}
declare class EBufferUsage__DYNAMIC_DRAW mixins EBufferUsage {}

    }
declare module 'wonder.js/dist/es2015/renderer/buffer/EBufferType' {
        declare export  class EBufferType {
  constructor(...args: empty): mixed;
static +BYTE: Class<EBufferType__BYTE> & EBufferType__BYTE & 0;// 0
static +UNSIGNED_BYTE: Class<EBufferType__UNSIGNED_BYTE> & EBufferType__UNSIGNED_BYTE & 1;// 1
static +SHORT: Class<EBufferType__SHORT> & EBufferType__SHORT & 2;// 2
static +UNSIGNED_SHORT: Class<EBufferType__UNSIGNED_SHORT> & EBufferType__UNSIGNED_SHORT & 3;// 3
static +INT: Class<EBufferType__INT> & EBufferType__INT & 4;// 4
static +UNSIGNED_INT: Class<EBufferType__UNSIGNED_INT> & EBufferType__UNSIGNED_INT & 5;// 5
static +FLOAT: Class<EBufferType__FLOAT> & EBufferType__FLOAT & 6;// 6

}

declare class EBufferType__BYTE mixins EBufferType {}
declare class EBufferType__UNSIGNED_BYTE mixins EBufferType {}
declare class EBufferType__SHORT mixins EBufferType {}
declare class EBufferType__UNSIGNED_SHORT mixins EBufferType {}
declare class EBufferType__INT mixins EBufferType {}
declare class EBufferType__UNSIGNED_INT mixins EBufferType {}
declare class EBufferType__FLOAT mixins EBufferType {}

    }
declare module 'wonder.js/dist/es2015/renderer/buffer/EBufferDataType' {
        declare export  class EBufferDataType {
  constructor(...args: empty): mixed;
static +VERTICE: Class<EBufferDataType__VERTICE> & EBufferDataType__VERTICE & 0;// 0
static +INDICE: Class<EBufferDataType__INDICE> & EBufferDataType__INDICE & 1;// 1

}

declare class EBufferDataType__VERTICE mixins EBufferDataType {}
declare class EBufferDataType__INDICE mixins EBufferDataType {}

    }
declare module 'wonder.js/dist/es2015/renderer/buffer/CommonBuffer' {
        import type {
          Buffer
        } from 'wonder.js/dist/es2015/renderer/buffer/Buffer';

	import type {
          EBufferType
        } from 'wonder.js/dist/es2015/renderer/buffer/EBufferType';

	import type {
          EBufferUsage
        } from 'wonder.js/dist/es2015/renderer/buffer/EBufferUsage';

	declare export class CommonBuffer mixins Buffer {
type: EBufferType;
count: number;
usage: EBufferUsage;
resetBufferData(glBufferTargetStr: string, typedData: any, offset?: number): void
}
    }
declare module 'wonder.js/dist/es2015/renderer/buffer/BufferDataTable' {
        import type {
          EBufferDataType
        } from 'wonder.js/dist/es2015/renderer/buffer/EBufferDataType';

	declare export class BufferDataTable  {
static getGeometryDataName(type: EBufferDataType): string
}
    }
declare module 'wonder.js/dist/es2015/renderer/buffer/Buffer' {
        import type {
          Entity
        } from 'wonder.js/dist/es2015/core/Entity';

	declare export class Buffer mixins Entity {
buffer: any;
resetData(data: any, ...args: any[]): void;
dispose(): void
}
    }
declare module 'wonder.js/dist/es2015/renderer/buffer/ArrayBuffer' {
        import type {
          CommonBuffer
        } from 'wonder.js/dist/es2015/renderer/buffer/CommonBuffer';

	import type {
          EBufferType
        } from 'wonder.js/dist/es2015/renderer/buffer/EBufferType';

	import type {
          EBufferUsage
        } from 'wonder.js/dist/es2015/renderer/buffer/EBufferUsage';

	declare export class ArrayBuffer mixins CommonBuffer {
static create(
data: Array<number>,
size: number,
type?: EBufferType,
usage?: EBufferUsage): ArrayBuffer;
size: number;
data: Float32Array;
initWhenCreate(data: Array<number>, size: number, type: EBufferType, usage: EBufferUsage): any;
resetData(data: Array<number>, size?: number, type?: EBufferType, offset?: number): this
}
    }
declare module 'wonder.js/dist/es2015/math/Vector4' {
        import type {
          Vector3
        } from 'wonder.js/dist/es2015/math/Vector3';

	declare export class Vector4  {
static create(x: any, y: any, z: any, w: any): any;
static create(): any;
constructor(x: any, y: any, z: any, w: any): this;
constructor(): this;
x: number;
y: number;
z: number;
w: number;
values: Float32Array;
normalize(): Vector4;
isEqual(v: Vector4): boolean;
clone(): Vector4;
toVector3(): Vector3;
lengthManhattan(): any;
multiplyScalar(scalar: number): this;
dot(v: Vector4): number;
set(x: number, y: number, z: number, w: number): void;
copyHelper(vector4: Vector4): any
}
    }
declare module 'wonder.js/dist/es2015/math/Vector3' {
        import type {
          Vector4
        } from 'wonder.js/dist/es2015/math/Vector4';

	import type {
          Matrix3
        } from 'wonder.js/dist/es2015/math/Matrix3';

	import type {
          Matrix4
        } from 'wonder.js/dist/es2015/math/Matrix4';

	declare export class Vector3  {
static up: any;
static forward: any;
static right: any;
static create(x: number, y: number, z: number): Vector3;
static create(): Vector3;
constructor(x: number, y: number, z: number): this;
constructor(): this;
x: number;
y: number;
z: number;
values: Float32Array;
normalize(): Vector3;
isZero(): boolean;
scale(scalar: number): any;
scale(x: number, y: number, z: number): any;
set(v: Vector3): any;
set(x: number, y: number, z: number): any;
sub(v: Vector3): Vector3;
sub2(v1: Vector3, v2: Vector3): this;
add(v: Vector3): this;
add2(v1: Vector3, v2: Vector3): this;
mul(v: Vector3): this;
mul2(v1: Vector3, v2: Vector3): this;
reverse(): Vector3;
clone(): Vector3;
toVector4(): Vector4;
length(): any;
cross(lhs: Vector3, rhs: Vector3): this;
lerp(lhs: Vector3, rhs: Vector3, alpha: number): this;
dot(rhs: any): number;
calAngleCos(v1: Vector3): number;
min(v: Vector3): this;
max(v: Vector3): this;
isEqual(v: Vector3): boolean;
toArray(): number[];
applyMatrix3(m: Matrix3): this;
applyMatrix4(m: Matrix4): this;
distanceTo(v: Vector3): any;
distanceToSquared(v: Vector3): number
}
    }
declare module 'wonder.js/dist/es2015/math/Vector2' {
        declare export class Vector2  {
static create(x: any, y: any): Vector2;
static create(): Vector2;
constructor(x: any, y: any): this;
constructor(): this;
x: number;
y: number;
values: Float32Array;
set(x: number, y: number): void;
add(v: Vector2): this;
mul(v: Vector2): this;
isEqual(v: Vector2): boolean;
clone(): Vector2
}
    }
declare module 'wonder.js/dist/es2015/math/Quaternion' {
        import type {
          Vector3
        } from 'wonder.js/dist/es2015/math/Vector3';

	import type {
          Matrix4
        } from 'wonder.js/dist/es2015/math/Matrix4';

	declare export class Quaternion  {
static create(x?: number, y?: number, z?: number, w?: number): Quaternion;
constructor(x?: number, y?: number, z?: number, w?: number): this;
x: number;
y: number;
z: number;
w: number;
setFromEulerAngles(eulerAngles: Vector3): this;
multiply(rhs: Quaternion): any;
multiply(rhs1: Quaternion, rhs2: Quaternion): any;
setFromMatrix(matrix: Matrix4): this;
setFromAxisAngle(angle: number, axis: Vector3): this;
invert(): this;
conjugate(): this;
clone(): Quaternion;
normalize(): this;
length(): any;
multiplyVector3(vector: Vector3): Vector3;
set(x: number, y: number, z: number, w: number): void;
sub(quat: Quaternion): this;
getEulerAngles(): any;
slerp(left: Quaternion, right: Quaternion, amount: number): Quaternion
}
    }
declare module 'wonder.js/dist/es2015/math/Matrix4' {
        import type {
          Matrix3
        } from 'wonder.js/dist/es2015/math/Matrix3';

	import type {
          Vector3
        } from 'wonder.js/dist/es2015/math/Vector3';

	import type {
          Vector4
        } from 'wonder.js/dist/es2015/math/Vector4';

	import type {
          Quaternion
        } from 'wonder.js/dist/es2015/math/Quaternion';

	declare export class Matrix4  {
static create(mat: Float32Array): Matrix4;
static create(): Matrix4;
constructor(mat: Float32Array): this;
constructor(): this;
values: Float32Array;
push(): void;
pop(): void;
set(
initialM11: number,
initialM12: number,
initialM13: number,
initialM14: number,
initialM21: number,
initialM22: number,
initialM23: number,
initialM24: number,
initialM31: number,
initialM32: number,
initialM33: number,
initialM34: number,
initialM41: number,
initialM42: number,
initialM43: number,
initialM44: number): any;
set(matrix: Matrix4): any;
setIdentity(): Matrix4;
invert(): Matrix4;
invertTo3x3(): Matrix3;
transpose(): Matrix4;
setTranslate(x: any, y: any, z: any): Matrix4;
translate(x: any, y: any, z: any): Matrix4;
setRotate(angle: number, x: number, y: number, z: number): Matrix4;
rotate(angle: any, vector3: Vector3): Matrix4;
rotate(angle: any, x: any, y: any, z: any): Matrix4;
setScale(x: any, y: any, z: any): Matrix4;
scale(x: any, y: any, z: any): Matrix4;
setLookAt(eye: Vector3, center: Vector3, up: Vector3): Matrix4;
setLookAt(
eyeX: number,
eyeY: number,
eyeZ: number,
centerX: number,
centerY: number,
centerZ: number,
upX: number,
upY: number,
upZ: number): Matrix4;
lookAt(eye: Vector3, center: Vector3, up: Vector3): Matrix4;
lookAt(
eyeX: number,
eyeY: number,
eyeZ: number,
centerX: number,
centerY: number,
centerZ: number,
upX: number,
upY: number,
upZ: number): Matrix4;
setOrtho(
left: number,
right: number,
bottom: number,
top: number,
near: number,
far: number): Matrix4;
ortho(
left: number,
right: number,
bottom: number,
top: number,
near: number,
far: number): Matrix4;
setPerspective(fovy: number, aspect: number, near: number, far: number): Matrix4;
perspective(fovy: number, aspect: number, near: number, far: number): Matrix4;
applyMatrix(other: Matrix4, notChangeSelf?: boolean): Matrix4;
multiply(matrix: Matrix4): Matrix4;
multiply(matrix1: Matrix4, matrix2: Matrix4): Matrix4;
multiplyVector4(vector: Vector4): Vector4;
multiplyVector3(vector: Vector3): Vector3;
multiplyPoint(vector: Vector3): Vector3;
clone(): Matrix4;
cloneToArray(array: Float32Array, offset?: number): Matrix4;
getX(): Vector3;
getY(): Vector3;
getZ(): Vector3;
getTranslation(): Vector3;
getScale(): Vector3;
getRotation(): Quaternion;
getEulerAngles(): any;
setTRS(t: Vector3, r: Quaternion, s: Vector3): this
}
    }
declare module 'wonder.js/dist/es2015/math/Matrix3' {
        import type {
          Vector2
        } from 'wonder.js/dist/es2015/math/Vector2';

	declare export class Matrix3  {
static create(mat: Float32Array): Matrix3;
static create(): Matrix3;
constructor(mat: Float32Array): this;
constructor(): this;
a: number;
c: number;
b: number;
d: number;
tx: number;
ty: number;
values: Float32Array;
setIdentity(): Matrix3;
invert(): Matrix3;
multiplyScalar(s: number): this;
multiplyVector2(vector: Vector2): Vector2;
multiplyPoint(vector: Vector2): Vector2;
multiply(matrix: Matrix3): this;
transpose(): Matrix3;
clone(): Matrix3;
cloneToArray(array: Float32Array, offset?: number): Matrix3;
set(matrix: Matrix3): this;
setTS(t: Vector2, s: Vector2): void;
rotate(angle: number): this;
setRotation(angle: number): this;
translate(x: number, y: number): void;
setPosition(x: number, y: number): void;
scale(x: number, y: number): this;
setScale(x: number, y: number): this;
getTranslation(): Vector2;
getScale(): Vector2;
getRotation(): number;
getSkew(): Vector2
}
    }
declare module 'wonder.js/dist/es2015/math/Global' {
        declare export var DEG_TO_RAD: number;
	declare export var RAD_TO_DEG: number;
    }
declare module 'wonder.js/dist/es2015/material/StandardBasicMaterial' {
        import type {
          EngineMaterial
        } from 'wonder.js/dist/es2015/material/EngineMaterial';

	declare export class StandardBasicMaterial mixins EngineMaterial {
opacity: number;
alphaTest: number;
addExtendShaderLib(): void;
addShaderLib(): void
}
    }
declare module 'wonder.js/dist/es2015/material/ShaderManager' {
        import type {
          Material
        } from 'wonder.js/dist/es2015/material/Material';

	import type {
          Shader
        } from 'wonder.js/dist/es2015/renderer/shader/shader/Shader';

	import type {
          QuadCommand
        } from 'wonder.js/dist/es2015/renderer/command/QuadCommand';

	declare export class ShaderManager  {
static create(material: Material): ShaderManager;
constructor(material: Material): this;
shader: Shader;
setShader(shader: Shader): void;
init(): void;
dispose(): void;
update(quadCmd: QuadCommand): void
}
    }
declare module 'wonder.js/dist/es2015/material/Material' {
        import type {
          Color
        } from 'wonder.js/dist/es2015/structure/Color';

	import type {
          Geometry
        } from 'wonder.js/dist/es2015/component/geometry/Geometry';

	import type {
          QuadCommand
        } from 'wonder.js/dist/es2015/renderer/command/QuadCommand';

	import type {
          Shader
        } from 'wonder.js/dist/es2015/renderer/shader/shader/Shader';

	import type {
          Program
        } from 'wonder.js/dist/es2015/renderer/program/Program';

	declare export class Material  {
program: Program;
color: Color;
shader: Shader;
geometry: Geometry;
clone(): this;
initWhenCreate(): void;
init(): void;
dispose(): void;
updateShader(quadCmd: QuadCommand): void;
createShader(): Shader
}
    }
declare module 'wonder.js/dist/es2015/material/EngineMaterial' {
        import type {
          Material
        } from 'wonder.js/dist/es2015/material/Material';

	import type {
          Shader
        } from 'wonder.js/dist/es2015/renderer/shader/shader/Shader';

	declare export class EngineMaterial mixins Material {
init(): void;
addShaderLib(): void;
createShader(): Shader
}
    }
declare module 'wonder.js/dist/es2015/material/BasicMaterial' {
        import type {
          StandardBasicMaterial
        } from 'wonder.js/dist/es2015/material/StandardBasicMaterial';

	declare export class BasicMaterial mixins StandardBasicMaterial {
static create(): BasicMaterial
}
    }
declare module 'wonder.js/dist/es2015/event/utils/EventUtils' {
        import type {
          EntityObject
        } from 'wonder.js/dist/es2015/core/entityObject/EntityObject';

	declare export class EventUtils  {
static isEvent(arg: any): boolean;
static isEntityObject(arg: EntityObject): boolean
}
    }
declare module 'wonder.js/dist/es2015/event/structure/EventListenerMap' {
        import type {
          Collection
        } from 'wonder-commonlib/dist/es2015/Collection';

	import type {
          EEventName
        } from 'wonder.js/dist/es2015/event/object/EventNameHandler';

	import type {
          EntityObject
        } from 'wonder.js/dist/es2015/core/entityObject/EntityObject';

	declare export class EventListenerMap  {
getChild(...args: any[]): Collection<any>;
removeChild(...args: any[]): any;
hasChild(...args: any[]): boolean;
appendChild(...args: any[]): void;
forEachAll(func: (list: Collection<any>, eventName: EEventName) => void): void;
forEachEventName(func: (list: Collection<any>, eventName: EEventName) => void): void;
clear(): void;
buildFirstLevelKey(target: EntityObject | HTMLElement): string;
buildSecondLevelKey(eventName: EEventName): string
}
    }
declare module 'wonder.js/dist/es2015/event/structure/DomEventListenerMap' {
        import type {
          EventListenerMap
        } from 'wonder.js/dist/es2015/event/structure/EventListenerMap';

	import type {
          Collection
        } from 'wonder-commonlib/dist/es2015/Collection';

	import type {
          DomEventRegisterData
        } from 'wonder.js/dist/es2015/event/binder/DomEventRegister';

	import type {
          EEventName
        } from 'wonder.js/dist/es2015/event/object/EventNameHandler';

	declare export class DomEventListenerMap mixins EventListenerMap {
static create(): DomEventListenerMap;
hasChild(dom: HTMLElement, eventName: EEventName): boolean;
appendChild(dom: HTMLElement, eventName: EEventName, data: any): void;
forEachAll(
func: (list: Collection<DomEventRegisterData>, eventName: EEventName) => void): void;
forEachEventName(
func: (list: Collection<DomEventRegisterData>, eventName: EEventName) => void): void;
clear(): void;
getChild(dom: HTMLElement): Collection<DomEventRegisterData>;
getChild(dom: HTMLElement, eventName: EEventName): Collection<DomEventRegisterData>;
removeChild(eventName: EEventName): Collection<DomEventOffData>;
removeChild(eventName: EEventName, handler: Function): Collection<DomEventOffData>;
removeChild(dom: HTMLElement, eventName: EEventName): Collection<DomEventOffData>;
removeChild(
dom: HTMLElement,
eventName: EEventName,
handler: Function): Collection<DomEventOffData>;
buildFirstLevelKey(dom: HTMLElement): string
}
	declare export type DomEventOffData = {
dom: HTMLElement,
eventName: EEventName,
domHandler: Function
};
    }
declare module 'wonder.js/dist/es2015/event/structure/CustomEventListenerMap' {
        import type {
          EventListenerMap
        } from 'wonder.js/dist/es2015/event/structure/EventListenerMap';

	import type {
          Collection
        } from 'wonder-commonlib/dist/es2015/Collection';

	import type {
          CustomEventRegisterData
        } from 'wonder.js/dist/es2015/event/binder/CustomEventRegister';

	import type {
          EntityObject
        } from 'wonder.js/dist/es2015/core/entityObject/EntityObject';

	import type {
          EEventName
        } from 'wonder.js/dist/es2015/event/object/EventNameHandler';

	declare export class CustomEventListenerMap mixins EventListenerMap {
static create(): CustomEventListenerMap;
hasChild(target: EntityObject): boolean;
appendChild(eventName: EEventName, data: any): any;
appendChild(target: EntityObject, eventName: EEventName, data: any): any;
forEachAll(
func: (list: Collection<CustomEventRegisterData>, eventName: EEventName) => void): void;
forEachEventName(
func: (list: Collection<CustomEventRegisterData>, eventName: EEventName) => void): void;
clear(): void;
getChild(eventName: EEventName): Collection<CustomEventRegisterData>;
getChild(target: EntityObject): Collection<CustomEventRegisterData>;
getChild(
target: EntityObject,
eventName: EEventName): Collection<CustomEventRegisterData>;
removeChild(eventName: EEventName): void;
removeChild(target: EntityObject): void;
removeChild(eventName: EEventName, handler: Function): void;
removeChild(uid: number, eventName: EEventName): void;
removeChild(target: EntityObject, eventName: EEventName): void;
removeChild(target: EntityObject, eventName: EEventName, handler: Function): void;
buildFirstLevelKey(target: EntityObject): any;
buildFirstLevelKey(uid: number): any
}
    }
declare module 'wonder.js/dist/es2015/event/object/TouchPointEvent' {
        import type {
          PointEvent
        } from 'wonder.js/dist/es2015/event/object/PointEvent';

	import type {
          EEventName
        } from 'wonder.js/dist/es2015/event/object/EventNameHandler';

	import type {
          TouchEvent
        } from 'wonder.js/dist/es2015/event/object/TouchEvent';

	import type {
          Point
        } from 'wonder.js/dist/es2015/structure/Point';

	declare export class TouchPointEvent mixins PointEvent {
static create(eventName: EEventName): TouchPointEvent;
eventObj: TouchEvent;
location: Point;
locationInView: Point;
wheel: any;
movementDelta: {
x: any,
y: any
};
button: number;
getDataFromEventObj(e: TouchEvent): void;
clone(): any
}
    }
declare module 'wonder.js/dist/es2015/event/object/TouchEvent' {
        import type {
          DomEvent
        } from 'wonder.js/dist/es2015/event/object/DomEvent';

	import type {
          ITouchEventData,ITouchData
        } from 'wonder.js/dist/es2015/event/interface/IEventData';

	import type {
          EEventName
        } from 'wonder.js/dist/es2015/event/object/EventNameHandler';

	import type {
          Point
        } from 'wonder.js/dist/es2015/structure/Point';

	import type {
          EEventType
        } from 'wonder.js/dist/es2015/event/object/EEventType';

	declare export class TouchEvent mixins DomEvent {
static create(event: ITouchEventData, eventName: EEventName): TouchEvent;
event: ITouchEventData;
location: Point;
touchData: ITouchData;
locationInView: Point;
movementDelta: {
x: any,
y: any
};
type: EEventType;
lastX: number;
lastY: number;
clone(): TouchEvent
}
    }
declare module 'wonder.js/dist/es2015/event/object/PointEvent' {
        import type {
          DomEvent
        } from 'wonder.js/dist/es2015/event/object/DomEvent';

	import type {
          IPointEventData
        } from 'wonder.js/dist/es2015/event/interface/IEventData';

	import type {
          Point
        } from 'wonder.js/dist/es2015/structure/Point';

	import type {
          EEventType
        } from 'wonder.js/dist/es2015/event/object/EEventType';

	import type {
          MouseEvent
        } from 'wonder.js/dist/es2015/event/object/MouseEvent';

	import type {
          TouchEvent
        } from 'wonder.js/dist/es2015/event/object/TouchEvent';

	declare export class PointEvent mixins DomEvent {
event: IPointEventData;
location: Point;
locationInView: Point;
button: number | null;
wheel: number | null;
movementDelta: Point;
lastX: number;
lastY: number;
type: EEventType;
eventObj: MouseEvent | TouchEvent;
getDataFromEventObj(eventObj: TouchEvent | MouseEvent): void;
cloneHelper(eventObj: PointEvent): PointEvent
}
    }
declare module 'wonder.js/dist/es2015/event/object/MousePointEvent' {
        import type {
          PointEvent
        } from 'wonder.js/dist/es2015/event/object/PointEvent';

	import type {
          EEventName
        } from 'wonder.js/dist/es2015/event/object/EventNameHandler';

	import type {
          MouseEvent
        } from 'wonder.js/dist/es2015/event/object/MouseEvent';

	import type {
          Point
        } from 'wonder.js/dist/es2015/structure/Point';

	declare export class MousePointEvent mixins PointEvent {
static create(eventName: EEventName): MousePointEvent;
eventObj: MouseEvent;
location: Point;
locationInView: Point;
button: number;
wheel: number;
movementDelta: {
x: any,
y: any
};
getDataFromEventObj(e: MouseEvent): void;
clone(): any
}
    }
declare module 'wonder.js/dist/es2015/event/object/MouseEvent' {
        import type {
          DomEvent
        } from 'wonder.js/dist/es2015/event/object/DomEvent';

	import type {
          IMouseEventData
        } from 'wonder.js/dist/es2015/event/interface/IEventData';

	import type {
          EEventName
        } from 'wonder.js/dist/es2015/event/object/EventNameHandler';

	import type {
          Point
        } from 'wonder.js/dist/es2015/structure/Point';

	import type {
          EEventType
        } from 'wonder.js/dist/es2015/event/object/EEventType';

	declare export class MouseEvent mixins DomEvent {
static create(event: IMouseEventData, eventName: EEventName): MouseEvent;
event: IMouseEventData;
location: Point;
locationInView: Point;
button: number;
wheel: number;
movementDelta: {
x: any,
y: any
};
type: EEventType;
lastX: number;
lastY: number;
clone(): MouseEvent
}
    }
declare module 'wonder.js/dist/es2015/event/object/KeyboardEvent' {
        import type {
          DomEvent
        } from 'wonder.js/dist/es2015/event/object/DomEvent';

	import type {
          EEventName
        } from 'wonder.js/dist/es2015/event/object/EventNameHandler';

	import type {
          IKeyboardEventData
        } from 'wonder.js/dist/es2015/event/interface/IEventData';

	import type {
          EEventType
        } from 'wonder.js/dist/es2015/event/object/EEventType';

	declare export class KeyboardEvent mixins DomEvent {
static create(event: any, eventName: EEventName): KeyboardEvent;
event: IKeyboardEventData;
ctrlKey: number;
altKey: number;
shiftKey: number;
metaKey: number;
keyCode: number;
key: any;
type: EEventType;
keyState: any;
clone(): KeyboardEvent
}
    }
declare module 'wonder.js/dist/es2015/event/object/EventTable' {
        import type {
          EEventType
        } from 'wonder.js/dist/es2015/event/object/EEventType';

	import type {
          EEventName
        } from 'wonder.js/dist/es2015/event/object/EventNameHandler';

	declare export class EventTable  {
static getEventType(eventName: EEventName): EEventType
}
    }
declare module 'wonder.js/dist/es2015/event/object/EventNameHandler' {
        declare export  class EEventName {
  constructor(...args: empty): mixed;
static +CLICK: Class<EEventName__CLICK> & EEventName__CLICK & 0;// 0
static +MOUSEOVER: Class<EEventName__MOUSEOVER> & EEventName__MOUSEOVER & 1;// 1
static +MOUSEUP: Class<EEventName__MOUSEUP> & EEventName__MOUSEUP & 2;// 2
static +MOUSEOUT: Class<EEventName__MOUSEOUT> & EEventName__MOUSEOUT & 3;// 3
static +MOUSEMOVE: Class<EEventName__MOUSEMOVE> & EEventName__MOUSEMOVE & 4;// 4
static +MOUSEDOWN: Class<EEventName__MOUSEDOWN> & EEventName__MOUSEDOWN & 5;// 5
static +MOUSEWHEEL: Class<EEventName__MOUSEWHEEL> & EEventName__MOUSEWHEEL & 6;// 6
static +MOUSEDRAG: Class<EEventName__MOUSEDRAG> & EEventName__MOUSEDRAG & 7;// 7
static +TOUCHUP: Class<EEventName__TOUCHUP> & EEventName__TOUCHUP & 8;// 8
static +TOUCHMOVE: Class<EEventName__TOUCHMOVE> & EEventName__TOUCHMOVE & 9;// 9
static +TOUCHDOWN: Class<EEventName__TOUCHDOWN> & EEventName__TOUCHDOWN & 10;// 10
static +KEYDOWN: Class<EEventName__KEYDOWN> & EEventName__KEYDOWN & 11;// 11
static +KEYUP: Class<EEventName__KEYUP> & EEventName__KEYUP & 12;// 12
static +KEYPRESS: Class<EEventName__KEYPRESS> & EEventName__KEYPRESS & 13;// 13

}

declare class EEventName__CLICK mixins EEventName {}
declare class EEventName__MOUSEOVER mixins EEventName {}
declare class EEventName__MOUSEUP mixins EEventName {}
declare class EEventName__MOUSEOUT mixins EEventName {}
declare class EEventName__MOUSEMOVE mixins EEventName {}
declare class EEventName__MOUSEDOWN mixins EEventName {}
declare class EEventName__MOUSEWHEEL mixins EEventName {}
declare class EEventName__MOUSEDRAG mixins EEventName {}
declare class EEventName__TOUCHUP mixins EEventName {}
declare class EEventName__TOUCHMOVE mixins EEventName {}
declare class EEventName__TOUCHDOWN mixins EEventName {}
declare class EEventName__KEYDOWN mixins EEventName {}
declare class EEventName__KEYUP mixins EEventName {}
declare class EEventName__KEYPRESS mixins EEventName {}

	declare export class EventNameHandler  {
static handleEventName(domEventName: EEventName): any
}
    }
declare module 'wonder.js/dist/es2015/event/object/Event' {
        import type {
          EEventName
        } from 'wonder.js/dist/es2015/event/object/EventNameHandler';

	import type {
          EEventType
        } from 'wonder.js/dist/es2015/event/object/EEventType';

	import type {
          EEngineEvent
        } from 'wonder.js/dist/es2015/event/EEngineEvent';

	import type {
          EntityObject
        } from 'wonder.js/dist/es2015/core/entityObject/EntityObject';

	import type {
          EEventPhase
        } from 'wonder.js/dist/es2015/event/object/EEventPhase';

	declare export class Event  {
constructor(eventName: EEventName): this;
type: EEventType;
name: string | EEventName | EEngineEvent;
target: HTMLElement | EntityObject;
currentTarget: HTMLElement | EntityObject;
isStopPropagation: boolean;
phase: EEventPhase;
clone(): any;
stopPropagation(): void;
copyMember(destination: Event, source: Event, memberArr: [any]): Event
}
    }
declare module 'wonder.js/dist/es2015/event/object/EMouseButton' {
        declare export  class EMouseButton {
  constructor(...args: empty): mixed;
static +LEFT: Class<EMouseButton__LEFT> & EMouseButton__LEFT & 0;// 0
static +RIGHT: Class<EMouseButton__RIGHT> & EMouseButton__RIGHT & 1;// 1
static +CENTER: Class<EMouseButton__CENTER> & EMouseButton__CENTER & 2;// 2

}

declare class EMouseButton__LEFT mixins EMouseButton {}
declare class EMouseButton__RIGHT mixins EMouseButton {}
declare class EMouseButton__CENTER mixins EMouseButton {}

    }
declare module 'wonder.js/dist/es2015/event/object/EEventType' {
        declare export  class EEventType {
  constructor(...args: empty): mixed;
static +MOUSE: Class<EEventType__MOUSE> & EEventType__MOUSE & 0;// 0
static +TOUCH: Class<EEventType__TOUCH> & EEventType__TOUCH & 1;// 1
static +POINT: Class<EEventType__POINT> & EEventType__POINT & 2;// 2
static +KEYBOARD: Class<EEventType__KEYBOARD> & EEventType__KEYBOARD & 3;// 3
static +CUSTOM: Class<EEventType__CUSTOM> & EEventType__CUSTOM & 4;// 4

}

declare class EEventType__MOUSE mixins EEventType {}
declare class EEventType__TOUCH mixins EEventType {}
declare class EEventType__POINT mixins EEventType {}
declare class EEventType__KEYBOARD mixins EEventType {}
declare class EEventType__CUSTOM mixins EEventType {}

    }
declare module 'wonder.js/dist/es2015/event/object/EEventPhase' {
        declare export  class EEventPhase {
  constructor(...args: empty): mixed;
static +BROADCAST: Class<EEventPhase__BROADCAST> & EEventPhase__BROADCAST & 0;// 0
static +EMIT: Class<EEventPhase__EMIT> & EEventPhase__EMIT & 1;// 1

}

declare class EEventPhase__BROADCAST mixins EEventPhase {}
declare class EEventPhase__EMIT mixins EEventPhase {}

    }
declare module 'wonder.js/dist/es2015/event/object/DomEvent' {
        import type {
          Event
        } from 'wonder.js/dist/es2015/event/object/Event';

	import type {
          EEventName
        } from 'wonder.js/dist/es2015/event/object/EventNameHandler';

	import type {
          CustomEvent
        } from 'wonder.js/dist/es2015/event/object/CustomEvent';

	declare export class DomEvent mixins Event {
constructor(event: any, eventName: EEventName): this;
event: any;
preventDefault(): void;
getDataFromCustomEvent(event: CustomEvent): void
}
    }
declare module 'wonder.js/dist/es2015/event/object/CustomEvent' {
        import type {
          Event
        } from 'wonder.js/dist/es2015/event/object/Event';

	import type {
          EEventType
        } from 'wonder.js/dist/es2015/event/object/EEventType';

	import type {
          DomEvent
        } from 'wonder.js/dist/es2015/event/object/DomEvent';

	declare export class CustomEvent mixins Event {
static create(eventName: string): any;
static create(eventName: string, userData: any): any;
constructor(eventName: string): this;
constructor(eventName: string, userData: any): this;
type: EEventType;
userData: any;
copyPublicAttri(destination: any, source: any): any;
clone(): CustomEvent;
getDataFromDomEvent(event: DomEvent): void
}
    }
declare module 'wonder.js/dist/es2015/event/handler/TouchEventHandler' {
        import type {
          PointEventHandler
        } from 'wonder.js/dist/es2015/event/handler/PointEventHandler';

	import type {
          EEventName
        } from 'wonder.js/dist/es2015/event/object/EventNameHandler';

	import type {
          TouchEvent
        } from 'wonder.js/dist/es2015/event/object/TouchEvent';

	import type {
          ITouchEventData
        } from 'wonder.js/dist/es2015/event/interface/IEventData';

	declare export class TouchEventHandler mixins PointEventHandler {
static getInstance(): any;
addEngineHandler(eventName: EEventName, handler: (event: TouchEvent) => void): any;
createEventObject(dom: HTMLElement, event: ITouchEventData, eventName: EEventName): TouchEvent
}
    }
declare module 'wonder.js/dist/es2015/event/handler/PointEventHandler' {
        import type {
          DomEventHandler
        } from 'wonder.js/dist/es2015/event/handler/DomEventHandler';

	import type {
          EEventName
        } from 'wonder.js/dist/es2015/event/object/EventNameHandler';

	import type {
          DomEvent
        } from 'wonder.js/dist/es2015/event/object/DomEvent';

	import type {
          IEventData
        } from 'wonder.js/dist/es2015/event/interface/IEventData';

	import type {
          Hash
        } from 'wonder-commonlib/dist/es2015/Hash';

	import type {
          MouseEvent
        } from 'wonder.js/dist/es2015/event/object/MouseEvent';

	import type {
          TouchEvent
        } from 'wonder.js/dist/es2015/event/object/TouchEvent';

	declare export class PointEventHandler mixins DomEventHandler {
on(
eventName: EEventName,
handler: (event: DomEvent) => void,
priority: number): any;
on(
dom: HTMLElement,
eventName: EEventName,
handler: (event: DomEvent) => void,
priority: number): any;
createEventObject(dom: HTMLElement, event: IEventData, eventName: EEventName): DomEvent;
getDefaultDom(): HTMLElement;
triggerDomEvent(dom: HTMLElement, event: IEventData, eventName: EEventName): void;
createEventData(): Hash<any>;
handleMove(
handler: (event: MouseEvent | TouchEvent) => void): (event: MouseEvent | TouchEvent, eventData: Hash<any>) => void
}
    }
declare module 'wonder.js/dist/es2015/event/handler/MouseEventHandler' {
        import type {
          PointEventHandler
        } from 'wonder.js/dist/es2015/event/handler/PointEventHandler';

	import type {
          EEventName
        } from 'wonder.js/dist/es2015/event/object/EventNameHandler';

	import type {
          MouseEvent
        } from 'wonder.js/dist/es2015/event/object/MouseEvent';

	import type {
          IMouseEventData
        } from 'wonder.js/dist/es2015/event/interface/IEventData';

	declare export class MouseEventHandler mixins PointEventHandler {
static getInstance(): any;
addEngineHandler(eventName: EEventName, handler: (event: MouseEvent) => void): any;
createEventObject(dom: HTMLElement, event: IMouseEventData, eventName: EEventName): MouseEvent
}
    }
declare module 'wonder.js/dist/es2015/event/handler/KeyboardEventHandler' {
        import type {
          DomEventHandler
        } from 'wonder.js/dist/es2015/event/handler/DomEventHandler';

	import type {
          EEventName
        } from 'wonder.js/dist/es2015/event/object/EventNameHandler';

	import type {
          KeyboardEvent
        } from 'wonder.js/dist/es2015/event/object/KeyboardEvent';

	import type {
          IKeyboardEventData
        } from 'wonder.js/dist/es2015/event/interface/IEventData';

	import type {
          Hash
        } from 'wonder-commonlib/dist/es2015/Hash';

	declare export class KeyboardEventHandler mixins DomEventHandler {
static getInstance(): any;
on(
eventName: EEventName,
handler: (event: KeyboardEvent) => void,
priority: number): any;
on(
dom: HTMLElement,
eventName: EEventName,
handler: (event: KeyboardEvent) => void,
priority: number): any;
triggerDomEvent(dom: HTMLElement, event: IKeyboardEventData, eventName: EEventName): void;
getDefaultDom(): HTMLElement;
addEngineHandler(eventName: EEventName, handler: (event: KeyboardEvent) => void): any;
createEventData(): Hash<any>
}
    }
declare module 'wonder.js/dist/es2015/event/handler/EventHandler' {
        declare export class EventHandler  {
on(...args: any[]): any;
off(...args: any[]): any;
trigger(...args: any[]): any
}
    }
declare module 'wonder.js/dist/es2015/event/handler/DomEventHandler' {
        import type {
          EventHandler
        } from 'wonder.js/dist/es2015/event/handler/EventHandler';

	import type {
          EEventName
        } from 'wonder.js/dist/es2015/event/object/EventNameHandler';

	import type {
          Event
        } from 'wonder.js/dist/es2015/event/object/Event';

	import type {
          IEventData
        } from 'wonder.js/dist/es2015/event/interface/IEventData';

	import type {
          Hash
        } from 'wonder-commonlib/dist/es2015/Hash';

	declare export class DomEventHandler mixins EventHandler {
off(): void;
off(eventName: EEventName): void;
off(eventName: EEventName, handler: Function): void;
off(dom: HTMLElement, eventName: EEventName): void;
off(dom: HTMLElement, eventName: EEventName, handler: Function): void;
trigger(event: Event): void;
trigger(dom: HTMLElement, event: Event): void;
triggerDomEvent(dom: HTMLElement, event: IEventData, eventName: EEventName): any;
addEngineHandler(eventName: EEventName, handler: Function): any;
getDefaultDom(): HTMLElement;
createEventData(): Hash<any>;
clearHandler(): void;
buildDomHandler(dom: HTMLElement, eventName: EEventName): (event: any) => any;
handler(
dom: HTMLElement,
eventName: EEventName,
handler: Function,
priority: number): void
}
    }
declare module 'wonder.js/dist/es2015/event/handler/CustomEventHandler' {
        import type {
          EventHandler
        } from 'wonder.js/dist/es2015/event/handler/EventHandler';

	import type {
          EntityObject
        } from 'wonder.js/dist/es2015/core/entityObject/EntityObject';

	import type {
          Event
        } from 'wonder.js/dist/es2015/event/object/Event';

	declare export class CustomEventHandler mixins EventHandler {
static getInstance(): any;
on(eventName: string, handler: Function, priority: number): void;
on(
target: EntityObject,
eventName: string,
handler: Function,
priority: number): void;
off(eventName: string): void;
off(uid: number, eventName: string): void;
off(eventName: string, handler: Function): void;
off(target: EntityObject, eventName: string, handler: Function): void;
trigger(event: Event): boolean;
trigger(event: Event, userData: any): boolean;
trigger(target: EntityObject, event: Event, notSetTarget: boolean): boolean;
trigger(
target: EntityObject,
event: Event,
userData: any,
notSetTarget: boolean): boolean
}
    }
declare module 'wonder.js/dist/es2015/event/factory/EventHandlerFactory' {
        import type {
          EEventType
        } from 'wonder.js/dist/es2015/event/object/EEventType';

	declare export class EventHandlerFactory  {
static createEventHandler(eventType: EEventType): any
}
    }
declare module 'wonder.js/dist/es2015/event/factory/EventDispatcherFactory' {
        import type {
          Event
        } from 'wonder.js/dist/es2015/event/object/Event';

	declare export class EventDispatcherFactory  {
static createEventDispatcher(event: Event): any
}
    }
declare module 'wonder.js/dist/es2015/event/factory/EventBinderFactory' {
        import type {
          EEventName
        } from 'wonder.js/dist/es2015/event/object/EventNameHandler';

	declare export class EventBinderFactory  {
static createEventBinder(eventName: EEventName): any
}
    }
declare module 'wonder.js/dist/es2015/event/EventManager' {
        import type {
          EEventName
        } from 'wonder.js/dist/es2015/event/object/EventNameHandler';

	import type {
          EEngineEvent
        } from 'wonder.js/dist/es2015/event/EEngineEvent';

	import type {
          EntityObject
        } from 'wonder.js/dist/es2015/core/entityObject/EntityObject';

	import type {
          Event
        } from 'wonder.js/dist/es2015/event/object/Event';

	import type {
          FromEventPatternStream
        } from 'wonder-frp/dist/es2015/stream/FromEventPatternStream';

	declare export class EventManager  {
static on(eventName: EEventName | EEngineEvent | string, handler: Function): void;
static on(
eventName: EEventName | EEngineEvent | string,
handler: Function,
priority: number): void;
static on(
target: EntityObject,
eventName: EEventName | EEngineEvent | string,
handler: Function): void;
static on(
dom: HTMLElement,
eventName: EEventName | EEngineEvent | string,
handler: Function): void;
static on(
target: EntityObject,
eventName: EEventName | EEngineEvent | string,
handler: Function,
priority: number): void;
static on(
dom: HTMLElement,
eventName: EEventName | EEngineEvent | string,
handler: Function,
priority: number): void;
static off(): void;
static off(eventName: EEventName | EEngineEvent | string): void;
static off(target: EntityObject): void;
static off(dom: HTMLElement): void;
static off(eventName: EEventName | EEngineEvent | string, handler: Function): void;
static off(target: EntityObject, eventName: EEventName | EEngineEvent | string): void;
static off(dom: HTMLElement, eventName: EEventName): void;
static off(
target: EntityObject,
eventName: EEventName | EEngineEvent | string,
handler: Function): void;
static off(dom: HTMLElement, eventName: EEventName, handler: Function): void;
static trigger(event: Event): void;
static trigger(event: Event, userData: any): void;
static trigger(target: EntityObject, event: Event): void;
static trigger(dom: HTMLElement, event: Event): void;
static trigger(target: EntityObject, event: Event, userData: any): void;
static trigger(target: EntityObject, event: Event, userData: any, notSetTarget: boolean): void;
static broadcast(target: EntityObject, event: Event): any;
static broadcast(target: EntityObject, event: Event, userData: any): any;
static emit(target: EntityObject, event: Event): any;
static emit(target: EntityObject, event: Event, userData: any): any;
static fromEvent(eventName: EEventName | EEngineEvent | string): FromEventPatternStream;
static fromEvent(
eventName: EEventName | EEngineEvent | string,
priority: number): FromEventPatternStream;
static fromEvent(
target: EntityObject,
eventName: EEventName | EEngineEvent | string): FromEventPatternStream;
static fromEvent(
dom: HTMLElement,
eventName: EEventName | EEngineEvent | string): FromEventPatternStream;
static fromEvent(
target: EntityObject,
eventName: EEventName | EEngineEvent | string,
priority: number): FromEventPatternStream;
static fromEvent(
dom: HTMLElement,
eventName: EEventName | EEngineEvent | string,
priority: number): FromEventPatternStream;
static setBubbleParent(target: EntityObject, parent: any): void
}
    }
declare module 'wonder.js/dist/es2015/event/EEngineEvent' {
        declare export  class EEngineEvent {
  constructor(...args: empty): mixed;
static +STARTLOOP: Class<EEngineEvent__STARTLOOP> & EEngineEvent__STARTLOOP & 0;// 0
static +ENDLOOP: Class<EEngineEvent__ENDLOOP> & EEngineEvent__ENDLOOP & 1;// 1
static +POINT_TAP: Class<EEngineEvent__POINT_TAP> & EEngineEvent__POINT_TAP & 2;// 2
static +POINT_DOWN: Class<EEngineEvent__POINT_DOWN> & EEngineEvent__POINT_DOWN & 3;// 3
static +POINT_UP: Class<EEngineEvent__POINT_UP> & EEngineEvent__POINT_UP & 4;// 4
static +POINT_MOVE: Class<EEngineEvent__POINT_MOVE> & EEngineEvent__POINT_MOVE & 5;// 5
static +POINT_OVER: Class<EEngineEvent__POINT_OVER> & EEngineEvent__POINT_OVER & 6;// 6
static +POINT_OUT: Class<EEngineEvent__POINT_OUT> & EEngineEvent__POINT_OUT & 7;// 7
static +POINT_SCALE: Class<EEngineEvent__POINT_SCALE> & EEngineEvent__POINT_SCALE & 8;// 8
static +POINT_DRAG: Class<EEngineEvent__POINT_DRAG> & EEngineEvent__POINT_DRAG & 9;// 9
static +TRANSFORM_TRANSLATE: Class<EEngineEvent__TRANSFORM_TRANSLATE> & EEngineEvent__TRANSFORM_TRANSLATE & 10;// 10
static +TRANSFORM_ROTATE: Class<EEngineEvent__TRANSFORM_ROTATE> & EEngineEvent__TRANSFORM_ROTATE & 11;// 11
static +TRANSFORM_SCALE: Class<EEngineEvent__TRANSFORM_SCALE> & EEngineEvent__TRANSFORM_SCALE & 12;// 12

}

declare class EEngineEvent__STARTLOOP mixins EEngineEvent {}
declare class EEngineEvent__ENDLOOP mixins EEngineEvent {}
declare class EEngineEvent__POINT_TAP mixins EEngineEvent {}
declare class EEngineEvent__POINT_DOWN mixins EEngineEvent {}
declare class EEngineEvent__POINT_UP mixins EEngineEvent {}
declare class EEngineEvent__POINT_MOVE mixins EEngineEvent {}
declare class EEngineEvent__POINT_OVER mixins EEngineEvent {}
declare class EEngineEvent__POINT_OUT mixins EEngineEvent {}
declare class EEngineEvent__POINT_SCALE mixins EEngineEvent {}
declare class EEngineEvent__POINT_DRAG mixins EEngineEvent {}
declare class EEngineEvent__TRANSFORM_TRANSLATE mixins EEngineEvent {}
declare class EEngineEvent__TRANSFORM_ROTATE mixins EEngineEvent {}
declare class EEngineEvent__TRANSFORM_SCALE mixins EEngineEvent {}

    }
declare module 'wonder.js/dist/es2015/event/dispatcher/EventDispatcher' {
        declare export class EventDispatcher  {
trigger(...args: any[]): any
}
    }
declare module 'wonder.js/dist/es2015/event/dispatcher/DomEventDispatcher' {
        import type {
          EventDispatcher
        } from 'wonder.js/dist/es2015/event/dispatcher/EventDispatcher';

	import type {
          Event
        } from 'wonder.js/dist/es2015/event/object/Event';

	declare export class DomEventDispatcher mixins EventDispatcher {
static getInstance(): any;
trigger(event: Event): void;
trigger(dom: HTMLElement, event: Event): void
}
    }
declare module 'wonder.js/dist/es2015/event/dispatcher/CustomEventDispatcher' {
        import type {
          EventDispatcher
        } from 'wonder.js/dist/es2015/event/dispatcher/EventDispatcher';

	import type {
          Event
        } from 'wonder.js/dist/es2015/event/object/Event';

	import type {
          EntityObject
        } from 'wonder.js/dist/es2015/core/entityObject/EntityObject';

	declare export class CustomEventDispatcher mixins EventDispatcher {
static getInstance(): any;
trigger(event: Event): boolean;
trigger(event: Event, userData: any): boolean;
trigger(target: EntityObject, event: Event): boolean;
trigger(target: EntityObject, event: Event, notSetTarget: boolean): boolean;
trigger(target: EntityObject, event: Event, userData: any): boolean;
trigger(
target: EntityObject,
event: Event,
userData: any,
notSetTarget: boolean): boolean;
emit(target: EntityObject, eventObject: Event, userData?: any): void;
broadcast(target: EntityObject, eventObject: Event, userData?: any): void
}
    }
declare module 'wonder.js/dist/es2015/event/binder/EventRegister' {
        import type {
          EventListenerMap
        } from 'wonder.js/dist/es2015/event/structure/EventListenerMap';

	import type {
          EEventName
        } from 'wonder.js/dist/es2015/event/object/EventNameHandler';

	import type {
          EntityObject
        } from 'wonder.js/dist/es2015/core/entityObject/EntityObject';

	import type {
          Collection
        } from 'wonder-commonlib/dist/es2015/Collection';

	declare export class EventRegister  {
listenerMap: EventListenerMap;
register(...args: any[]): void;
remove(...args: any[]): any;
getEventRegisterDataList(eventName: EEventName): any;
getEventRegisterDataList(currentTarget: EntityObject, eventName: EEventName): any;
getEventRegisterDataList(dom: HTMLElement, eventName: EEventName): any;
forEachAll(func: (list: Collection<any>, eventName: EEventName) => void): void;
forEachEventName(
func: (list: Collection<EventRegisterData>, eventName: EEventName) => void): void;
clear(): void;
getChild(target: EntityObject): any;
getChild(dom: HTMLElement): any;
getChild(target: EntityObject, eventName: EEventName): any;
getChild(dom: HTMLElement, eventName: EEventName): any
}
	declare export type EventRegisterData = {
originHandler: Function,
handler: Function,
domHandler: Function,
priority: number
};
    }
declare module 'wonder.js/dist/es2015/event/binder/EventBinder' {
        declare export class EventBinder  {
on(...args: any[]): void;
off(...args: any[]): void
}
    }
declare module 'wonder.js/dist/es2015/event/binder/DomEventRegister' {
        import type {
          EventRegister
        } from 'wonder.js/dist/es2015/event/binder/EventRegister';

	import type {
          DomEventListenerMap
        } from 'wonder.js/dist/es2015/event/structure/DomEventListenerMap';

	import type {
          EEventName
        } from 'wonder.js/dist/es2015/event/object/EventNameHandler';

	import type {
          Hash
        } from 'wonder-commonlib/dist/es2015/Hash';

	import type {
          EntityObject
        } from 'wonder.js/dist/es2015/core/entityObject/EntityObject';

	declare export class DomEventRegister mixins EventRegister {
static getInstance(): any;
listenerMap: DomEventListenerMap;
register(
dom: HTMLElement,
eventName: EEventName,
eventData: Hash<any>,
handler: Function,
originHandler: Function,
domHandler: Function,
priority: number): void;
remove(eventName: EEventName): any;
remove(eventName: EEventName, handler: Function): any;
remove(dom: HTMLElement, eventName: EEventName): any;
remove(dom: HTMLElement, eventName: EEventName, handler: Function): any;
isBinded(dom: HTMLElement, eventName: EEventName): boolean;
getDomHandler(dom: HTMLElement, eventName: EEventName): Function
}
	declare export type DomEventRegisterData = {
dom?: HTMLElement,
target?: EntityObject,
eventData: Hash<any>,
originHandler: Function,
handler: Function,
domHandler: Function,
priority: number
};
    }
declare module 'wonder.js/dist/es2015/event/binder/DomEventBinder' {
        import type {
          EventBinder
        } from 'wonder.js/dist/es2015/event/binder/EventBinder';

	import type {
          EEventName
        } from 'wonder.js/dist/es2015/event/object/EventNameHandler';

	declare export class DomEventBinder mixins EventBinder {
static getInstance(): any;
on(eventName: EEventName | string, handler: Function): void;
on(eventName: EEventName | string, handler: Function, priority: number): void;
on(dom: HTMLElement, eventName: EEventName | string, handler: Function): void;
on(
dom: HTMLElement,
eventName: EEventName | string,
handler: Function,
priority: number): void;
off(): void;
off(eventName: EEventName | string): void;
off(dom: HTMLElement): void;
off(eventName: EEventName | string, handler: Function): void;
off(dom: HTMLElement, eventName: EEventName): void;
off(dom: HTMLElement, eventName: EEventName, handler: Function): void
}
    }
declare module 'wonder.js/dist/es2015/event/binder/CustomEventRegister' {
        import type {
          EventRegister
        } from 'wonder.js/dist/es2015/event/binder/EventRegister';

	import type {
          CustomEventListenerMap
        } from 'wonder.js/dist/es2015/event/structure/CustomEventListenerMap';

	import type {
          EEventName
        } from 'wonder.js/dist/es2015/event/object/EventNameHandler';

	import type {
          EntityObject
        } from 'wonder.js/dist/es2015/core/entityObject/EntityObject';

	declare export class CustomEventRegister mixins EventRegister {
static getInstance(): any;
listenerMap: CustomEventListenerMap;
register(
eventName: EEventName,
handler: Function,
originHandler: Function,
domHandler: Function,
priority: number): any;
register(
target: EntityObject,
eventName: EEventName,
handler: Function,
originHandler: Function,
domHandler: Function,
priority: number): any;
remove(eventName: EEventName): any;
remove(target: EntityObject): any;
remove(eventName: EEventName, handler: Function): any;
remove(uid: number, eventName: EEventName): any;
remove(target: EntityObject, eventName: EEventName): any;
remove(target: EntityObject, eventName: EEventName, handler: Function): any;
setBubbleParent(target: EntityObject, parent: EntityObject): void
}
	declare export type CustomEventRegisterData = {
target: EntityObject,
originHandler: Function,
handler: Function,
domHandler: Function,
priority: number
};
    }
declare module 'wonder.js/dist/es2015/event/binder/CustomEventBinder' {
        import type {
          EventBinder
        } from 'wonder.js/dist/es2015/event/binder/EventBinder';

	import type {
          EEventName
        } from 'wonder.js/dist/es2015/event/object/EventNameHandler';

	import type {
          EntityObject
        } from 'wonder.js/dist/es2015/core/entityObject/EntityObject';

	declare export class CustomEventBinder mixins EventBinder {
static getInstance(): any;
on(eventName: EEventName | string, handler: Function): void;
on(eventName: EEventName | string, handler: Function, priority: number): void;
on(target: EntityObject, eventName: EEventName | string, handler: Function): void;
on(
target: EntityObject,
eventName: EEventName | string,
handler: Function,
priority: number): void;
off(): void;
off(eventName: EEventName | string): void;
off(target: EntityObject): void;
off(eventName: EEventName | string, handler: Function): void;
off(target: EntityObject, eventName: EEventName | string): void;
off(target: EntityObject, eventName: EEventName | string, handler: Function): void
}
    }
declare module 'wonder.js/dist/es2015/device/GPUDetector' {
        declare export class GPUDetector  {
static getInstance(): any;
gl: any;
maxTextureUnit: number;
maxTextureSize: number;
maxCubemapTextureSize: number;
maxAnisotropy: number;
maxBoneCount: number;
extensionCompressedTextureS3TC: any;
extensionTextureFilterAnisotropic: any;
extensionInstancedArrays: any;
extensionUintIndices: boolean;
extensionDepthTexture: boolean;
extensionVAO: any;
extensionStandardDerivatives: boolean;
precision: number;
detect(): void
}
	declare export  class EGPUPrecision {
  constructor(...args: empty): mixed;
static +HIGHP: Class<EGPUPrecision__HIGHP> & EGPUPrecision__HIGHP & 0;// 0
static +MEDIUMP: Class<EGPUPrecision__MEDIUMP> & EGPUPrecision__MEDIUMP & 1;// 1
static +LOWP: Class<EGPUPrecision__LOWP> & EGPUPrecision__LOWP & 2;// 2

}

declare class EGPUPrecision__HIGHP mixins EGPUPrecision {}
declare class EGPUPrecision__MEDIUMP mixins EGPUPrecision {}
declare class EGPUPrecision__LOWP mixins EGPUPrecision {}

    }
declare module 'wonder.js/dist/es2015/device/EScreenSize' {
        declare export  class EScreenSize {
  constructor(...args: empty): mixed;
static +FULL: Class<EScreenSize__FULL> & EScreenSize__FULL & 0;// 0

}

declare class EScreenSize__FULL mixins EScreenSize {}

    }
declare module 'wonder.js/dist/es2015/device/DeviceManager' {
        import type {
          Vector2
        } from 'wonder.js/dist/es2015/math/Vector2';

	import type {
          IView
        } from 'wonder.js/dist/es2015/structure/View';

	import type {
          ContextConfigData
        } from 'wonder.js/dist/es2015/core/data/MainData';

	import type {
          RectRegion
        } from 'wonder.js/dist/es2015/structure/RectRegion';

	declare export class DeviceManager  {
static getInstance(): any;
scissorTest: boolean;
setScissor(x: number, y: number, width: number, height: number): void;
setViewport(x: number, y: number, width: number, height: number): void;
getViewport(): RectRegion;
depthTest: boolean;
depthFunc: EDepthFunction;
side: ESide;
polygonOffset: Vector2;
polygonOffsetMode: EPolygonOffsetMode;
depthWrite: boolean;
blend: boolean;
alphaToCoverage: boolean;
view: IView;
gl: WebGLRenderingContext;
contextConfig: ContextConfigData;
setBlendFunc(blendSrc: EBlendFunc, blendDst: EBlendFunc): void;
setBlendEquation(blendEquation: EBlendEquation): void;
setBlendFuncSeparate(blendFuncSeparate: Array<EBlendFunc>): void;
setBlendEquationSeparate(blendEquationSeparate: Array<EBlendEquation>): void;
setColorWrite(writeRed: any, writeGreen: any, writeBlue: any, writeAlpha: any): void;
clear(options: any): void;
createGL(
canvasId: string,
contextConfig: ContextConfigData,
useDevicePixelRatio: boolean): void;
setScreen(): void;
setHardwareScaling(level: number): void;
setPixelRatio(pixelRatio: number): void;
getPixelRatio(): number
}
	declare export  class EDepthFunction {
  constructor(...args: empty): mixed;
static +NEVER: Class<EDepthFunction__NEVER> & EDepthFunction__NEVER & 0;// 0
static +ALWAYS: Class<EDepthFunction__ALWAYS> & EDepthFunction__ALWAYS & 1;// 1
static +LESS: Class<EDepthFunction__LESS> & EDepthFunction__LESS & 2;// 2
static +LEQUAL: Class<EDepthFunction__LEQUAL> & EDepthFunction__LEQUAL & 3;// 3
static +EQUAL: Class<EDepthFunction__EQUAL> & EDepthFunction__EQUAL & 4;// 4
static +GEQUAL: Class<EDepthFunction__GEQUAL> & EDepthFunction__GEQUAL & 5;// 5
static +GREATER: Class<EDepthFunction__GREATER> & EDepthFunction__GREATER & 6;// 6
static +NOTEQUAL: Class<EDepthFunction__NOTEQUAL> & EDepthFunction__NOTEQUAL & 7;// 7

}

declare class EDepthFunction__NEVER mixins EDepthFunction {}
declare class EDepthFunction__ALWAYS mixins EDepthFunction {}
declare class EDepthFunction__LESS mixins EDepthFunction {}
declare class EDepthFunction__LEQUAL mixins EDepthFunction {}
declare class EDepthFunction__EQUAL mixins EDepthFunction {}
declare class EDepthFunction__GEQUAL mixins EDepthFunction {}
declare class EDepthFunction__GREATER mixins EDepthFunction {}
declare class EDepthFunction__NOTEQUAL mixins EDepthFunction {}

	declare export  class ESide {
  constructor(...args: empty): mixed;
static +NONE: Class<ESide__NONE> & ESide__NONE & 0;// 0
static +BOTH: Class<ESide__BOTH> & ESide__BOTH & 1;// 1
static +BACK: Class<ESide__BACK> & ESide__BACK & 2;// 2
static +FRONT: Class<ESide__FRONT> & ESide__FRONT & 3;// 3

}

declare class ESide__NONE mixins ESide {}
declare class ESide__BOTH mixins ESide {}
declare class ESide__BACK mixins ESide {}
declare class ESide__FRONT mixins ESide {}

	declare export  class EPolygonOffsetMode {
  constructor(...args: empty): mixed;
static +NONE: Class<EPolygonOffsetMode__NONE> & EPolygonOffsetMode__NONE & 0;// 0
static +IN: Class<EPolygonOffsetMode__IN> & EPolygonOffsetMode__IN & 1;// 1
static +OUT: Class<EPolygonOffsetMode__OUT> & EPolygonOffsetMode__OUT & 2;// 2
static +CUSTOM: Class<EPolygonOffsetMode__CUSTOM> & EPolygonOffsetMode__CUSTOM & 3;// 3

}

declare class EPolygonOffsetMode__NONE mixins EPolygonOffsetMode {}
declare class EPolygonOffsetMode__IN mixins EPolygonOffsetMode {}
declare class EPolygonOffsetMode__OUT mixins EPolygonOffsetMode {}
declare class EPolygonOffsetMode__CUSTOM mixins EPolygonOffsetMode {}

	declare export  class EBlendFunc {
  constructor(...args: empty): mixed;
static +ZERO: Class<EBlendFunc__ZERO> & EBlendFunc__ZERO & 0;// 0
static +ONE: Class<EBlendFunc__ONE> & EBlendFunc__ONE & 1;// 1
static +SRC_COLOR: Class<EBlendFunc__SRC_COLOR> & EBlendFunc__SRC_COLOR & 2;// 2
static +ONE_MINUS_SRC_COLOR: Class<EBlendFunc__ONE_MINUS_SRC_COLOR> & EBlendFunc__ONE_MINUS_SRC_COLOR & 3;// 3
static +DST_COLOR: Class<EBlendFunc__DST_COLOR> & EBlendFunc__DST_COLOR & 4;// 4
static +ONE_MINUS_DST_COLOR: Class<EBlendFunc__ONE_MINUS_DST_COLOR> & EBlendFunc__ONE_MINUS_DST_COLOR & 5;// 5
static +SRC_ALPHA: Class<EBlendFunc__SRC_ALPHA> & EBlendFunc__SRC_ALPHA & 6;// 6
static +SRC_ALPHA_SATURATE: Class<EBlendFunc__SRC_ALPHA_SATURATE> & EBlendFunc__SRC_ALPHA_SATURATE & 7;// 7
static +ONE_MINUS_SRC_ALPHA: Class<EBlendFunc__ONE_MINUS_SRC_ALPHA> & EBlendFunc__ONE_MINUS_SRC_ALPHA & 8;// 8
static +DST_ALPHA: Class<EBlendFunc__DST_ALPHA> & EBlendFunc__DST_ALPHA & 9;// 9
static +ONE_MINUS_DST_ALPH: Class<EBlendFunc__ONE_MINUS_DST_ALPH> & EBlendFunc__ONE_MINUS_DST_ALPH & 10;// 10

}

declare class EBlendFunc__ZERO mixins EBlendFunc {}
declare class EBlendFunc__ONE mixins EBlendFunc {}
declare class EBlendFunc__SRC_COLOR mixins EBlendFunc {}
declare class EBlendFunc__ONE_MINUS_SRC_COLOR mixins EBlendFunc {}
declare class EBlendFunc__DST_COLOR mixins EBlendFunc {}
declare class EBlendFunc__ONE_MINUS_DST_COLOR mixins EBlendFunc {}
declare class EBlendFunc__SRC_ALPHA mixins EBlendFunc {}
declare class EBlendFunc__SRC_ALPHA_SATURATE mixins EBlendFunc {}
declare class EBlendFunc__ONE_MINUS_SRC_ALPHA mixins EBlendFunc {}
declare class EBlendFunc__DST_ALPHA mixins EBlendFunc {}
declare class EBlendFunc__ONE_MINUS_DST_ALPH mixins EBlendFunc {}

	declare export  class EBlendEquation {
  constructor(...args: empty): mixed;
static +ADD: Class<EBlendEquation__ADD> & EBlendEquation__ADD & 0;// 0
static +SUBTRACT: Class<EBlendEquation__SUBTRACT> & EBlendEquation__SUBTRACT & 1;// 1
static +REVERSE_SUBTRAC: Class<EBlendEquation__REVERSE_SUBTRAC> & EBlendEquation__REVERSE_SUBTRAC & 2;// 2

}

declare class EBlendEquation__ADD mixins EBlendEquation {}
declare class EBlendEquation__SUBTRACT mixins EBlendEquation {}
declare class EBlendEquation__REVERSE_SUBTRAC mixins EBlendEquation {}

	declare export  class EBlendType {
  constructor(...args: empty): mixed;
static +NONE: Class<EBlendType__NONE> & EBlendType__NONE & 0;// 0
static +NORMAL: Class<EBlendType__NORMAL> & EBlendType__NORMAL & 1;// 1
static +ADDITIVE: Class<EBlendType__ADDITIVE> & EBlendType__ADDITIVE & 2;// 2
static +ADDITIVEALPHA: Class<EBlendType__ADDITIVEALPHA> & EBlendType__ADDITIVEALPHA & 3;// 3
static +MULTIPLICATIVE: Class<EBlendType__MULTIPLICATIVE> & EBlendType__MULTIPLICATIVE & 4;// 4
static +PREMULTIPLIED: Class<EBlendType__PREMULTIPLIED> & EBlendType__PREMULTIPLIED & 5;// 5

}

declare class EBlendType__NONE mixins EBlendType {}
declare class EBlendType__NORMAL mixins EBlendType {}
declare class EBlendType__ADDITIVE mixins EBlendType {}
declare class EBlendType__ADDITIVEALPHA mixins EBlendType {}
declare class EBlendType__MULTIPLICATIVE mixins EBlendType {}
declare class EBlendType__PREMULTIPLIED mixins EBlendType {}

	declare export  class ECanvasType {
  constructor(...args: empty): mixed;
static +TwoDUI: Class<ECanvasType__TwoDUI> & ECanvasType__TwoDUI & 0;// 0

}

declare class ECanvasType__TwoDUI mixins ECanvasType {}

	declare export type CanvasMapData = {
canvas: HTMLCanvasElement,
context: CanvasRenderingContext2D
};
    }
declare module 'wonder.js/dist/es2015/definition/Variable' {
        declare export var root: any;
    }
declare module 'wonder.js/dist/es2015/definition/typescript/decorator/virtual' {
        declare export function virtual(target: any, name: any, descriptor: any): any

	declare export function virtual(target: any, name: any, descriptor: any): any

    }
declare module 'wonder.js/dist/es2015/definition/typescript/decorator/singleton' {
        declare export function singleton(isInitWhenCreate?: boolean): (target: any) => void

	declare export function singleton(isInitWhenCreate?: boolean): (target: any) => void

    }
declare module 'wonder.js/dist/es2015/definition/typescript/decorator/registerClass' {
        declare export function registerClass(className: string): (_class: any) => void

	declare export function registerClass(className: string): (_class: any) => void

    }
declare module 'wonder.js/dist/es2015/definition/typescript/decorator/control' {
        declare export function execOnlyOnce(flagName: string): (target: any, name: any, descriptor: any) => any

	declare export function execOnlyOnce(flagName: string): (target: any, name: any, descriptor: any) => any

    }
declare module 'wonder.js/dist/es2015/definition/typescript/decorator/contract' {
        declare export function assert(cond: boolean, message?: string): void

	declare export function describe(message: string, func: Function, preCondition?: Function, context?: any): void

	declare export function it(message: string, func: Function, context?: any): void

	declare export function requireCheck(inFunc: any): (target: any, name: any, descriptor: any) => any

	declare export function ensure(outFunc: any): (target: any, name: any, descriptor: any) => any

	declare export function requireGetterAndSetter(
inGetterFunc: any,
inSetterFunc: any): (target: any, name: any, descriptor: any) => any

	declare export function requireGetter(inFunc: any): (target: any, name: any, descriptor: any) => any

	declare export function requireSetter(inFunc: any): (target: any, name: any, descriptor: any) => any

	declare export function ensureGetterAndSetter(
outGetterFunc: any,
outSetterFunc: any): (target: any, name: any, descriptor: any) => any

	declare export function ensureGetter(outFunc: any): (target: any, name: any, descriptor: any) => any

	declare export function ensureSetter(outFunc: any): (target: any, name: any, descriptor: any) => any

	declare export function invariant(func: any): (target: any) => void

	declare export function assert(cond: boolean, message?: string): void

	declare export function describe(message: string, func: Function, preCondition?: Function, context?: any): void

	declare export function it(message: string, func: Function, context?: any): void

	declare export function requireCheck(inFunc: any): (target: any, name: any, descriptor: any) => any

	declare export function ensure(outFunc: any): (target: any, name: any, descriptor: any) => any

	declare export function requireGetterAndSetter(
inGetterFunc: any,
inSetterFunc: any): (target: any, name: any, descriptor: any) => any

	declare export function requireGetter(inFunc: any): (target: any, name: any, descriptor: any) => any

	declare export function requireSetter(inFunc: any): (target: any, name: any, descriptor: any) => any

	declare export function ensureGetterAndSetter(
outGetterFunc: any,
outSetterFunc: any): (target: any, name: any, descriptor: any) => any

	declare export function ensureGetter(outFunc: any): (target: any, name: any, descriptor: any) => any

	declare export function ensureSetter(outFunc: any): (target: any, name: any, descriptor: any) => any

	declare export function invariant(func: any): (target: any) => void

    }
declare module 'wonder.js/dist/es2015/definition/typescript/decorator/clone' {
        import type {
          EntityObject
        } from 'wonder.js/dist/es2015/core/entityObject/EntityObject';

	declare export function cloneAttributeAsBasicType(
configData?: CloneAttributeAsBasicTypeConfigData): (target: any, memberName: string | Symbol) => void

	declare export function cloneAttributeAsCloneable(
configData?: CloneAttributeAsCloneableConfigData): (target: any, memberName: string | Symbol) => void

	declare export function cloneAttributeAsCustomType(
cloneFunc: (source: any, target: any, memberName: string, cloneData: any) => void,
configData?: CloneAttributeAsCustomTypeConfigData): (target: any, memberName: string | Symbol) => void

	declare export class CloneUtils  {
static clone<T>(
sourceInstance: T,
cloneData?: any,
createDataArr?: Array<any>,
target?: any): T;
static cloneArray(arr: Array<any> | null, isDeep?: boolean): any;
static markNotClone(entityObject: EntityObject): void;
static isNotClone(entityObject: EntityObject): boolean
}
	declare export type CloneAttributeAsBasicTypeConfigData = {
order?: number
};
	declare export type CloneAttributeAsCloneableConfigData = {
order?: number
};
	declare export type CloneAttributeAsCustomTypeConfigData = {
order?: number
};
	declare export  class CloneType {
  constructor(...args: empty): mixed;
static +CLONEABLE: Class<CloneType__CLONEABLE> & CloneType__CLONEABLE & 0;// 0
static +BASIC: Class<CloneType__BASIC> & CloneType__BASIC & 1;// 1
static +CUSTOM: Class<CloneType__CUSTOM> & CloneType__CUSTOM & 2;// 2

}

declare class CloneType__CLONEABLE mixins CloneType {}
declare class CloneType__BASIC mixins CloneType {}
declare class CloneType__CUSTOM mixins CloneType {}

	declare export function cloneAttributeAsBasicType(
configData?: CloneAttributeAsBasicTypeConfigData): (target: any, memberName: string | Symbol) => void

	declare export function cloneAttributeAsCloneable(
configData?: CloneAttributeAsCloneableConfigData): (target: any, memberName: string | Symbol) => void

	declare export function cloneAttributeAsCustomType(
cloneFunc: (source: any, target: any, memberName: string, cloneData: any) => void,
configData?: CloneAttributeAsCustomTypeConfigData): (target: any, memberName: string | Symbol) => void

    }
declare module 'wonder.js/dist/es2015/definition/typescript/decorator/cache' {
        declare export function cacheGetter(
judgeFunc: () => boolean,
returnCacheValueFunc: () => any,
setCacheFunc: (returnVal: any) => void): (target: any, name: any, descriptor: any) => any

	declare export function cache(
judgeFunc: any,
returnCacheValueFunc: any,
setCacheFunc: any): (target: any, name: any, descriptor: any) => any

	declare export function cacheBufferForBufferContainer(): (target: any, name: any, descriptor: any) => any

	declare export function cacheBufferForBufferContainerWithFuncParam(setDataNameFuncName: string): (target: any, name: any, descriptor: any) => any

	declare export function cacheGetter(
judgeFunc: () => boolean,
returnCacheValueFunc: () => any,
setCacheFunc: (returnVal: any) => void): (target: any, name: any, descriptor: any) => any

	declare export function cache(
judgeFunc: any,
returnCacheValueFunc: any,
setCacheFunc: any): (target: any, name: any, descriptor: any) => any

	declare export function cacheBufferForBufferContainer(): (target: any, name: any, descriptor: any) => any

	declare export function cacheBufferForBufferContainerWithFuncParam(setDataNameFuncName: string): (target: any, name: any, descriptor: any) => any

    }
declare module 'wonder.js/dist/es2015/core/data/MainData' {
        import type {
          EScreenSize
        } from 'wonder.js/dist/es2015/device/EScreenSize';

	import type {
          RectRegion
        } from 'wonder.js/dist/es2015/structure/RectRegion';

	declare export class MainData  {
static isTest: boolean;
static screenSize: EScreenSize & RectRegion
}
	declare export type ContextConfigData = {
options: {
alpha: boolean,
depth: boolean,
stencil: boolean,
antialias: boolean,
premultipliedAlpha: boolean,
preserveDrawingBuffer: boolean
}
};
    }
declare module 'wonder.js/dist/es2015/core/Main' {
        import type {
          EScreenSize
        } from 'wonder.js/dist/es2015/device/EScreenSize';

	declare export class Main  {
static setConfig(
x: {
canvasId?: null,
isTest?: boolean,
screenSize?: EScreenSize,
useDevicePixelRatio?: boolean,
contextConfig?: {
options: {
alpha: boolean,
depth: boolean,
stencil: boolean,
antialias: boolean,
premultipliedAlpha: boolean,
preserveDrawingBuffer: boolean
}
}
}): typeof Main;
static init(): typeof Main
}
    }
declare module 'wonder.js/dist/es2015/core/entityObject/scene/SceneDispatcher' {
        import type {
          EntityObject
        } from 'wonder.js/dist/es2015/core/entityObject/EntityObject';

	import type {
          GameObject
        } from 'wonder.js/dist/es2015/core/entityObject/gameObject/GameObject';

	import type {
          GameObjectScene
        } from 'wonder.js/dist/es2015/core/entityObject/scene/gameObjectScene/GameObjectScene';

	import type {
          Collection
        } from 'wonder-commonlib/dist/es2015/Collection';

	declare export class SceneDispatcher mixins EntityObject {
static create(): SceneDispatcher;
currentCamera: GameObject;
name: string;
gameObjectScene: GameObjectScene;
addChild(child: EntityObject): EntityObject;
dispose(): void;
hasChild(child: EntityObject): boolean;
addChildren(children: EntityObject): any;
addChildren(children: Array<EntityObject>): any;
addChildren(children: Collection<EntityObject>): any;
getChildren(): Collection<any>;
createTransform(): any
}
    }
declare module 'wonder.js/dist/es2015/core/entityObject/scene/Scene' {
        import type {
          EntityObject
        } from 'wonder.js/dist/es2015/core/entityObject/EntityObject';

	declare export class Scene mixins EntityObject {}
    }
declare module 'wonder.js/dist/es2015/core/entityObject/scene/gameObjectScene/GameObjectScene' {
        import type {
          Scene
        } from 'wonder.js/dist/es2015/core/entityObject/scene/Scene';

	import type {
          GameObject
        } from 'wonder.js/dist/es2015/core/entityObject/gameObject/GameObject';

	import type {
          Collection
        } from 'wonder-commonlib/dist/es2015/Collection';

	import type {
          Renderer
        } from 'wonder.js/dist/es2015/renderer/renderer/Renderer';

	declare export class GameObjectScene mixins Scene {
static create(): GameObjectScene;
currentCamera: any;
addChild(child: GameObject): GameObject;
update(elapsed: number): void;
render(renderer: Renderer): void;
getRenderList(): Collection<GameObject>;
createTransform(): any
}
    }
declare module 'wonder.js/dist/es2015/core/entityObject/scene/cache/ProgramTable' {
        import type {
          Program
        } from 'wonder.js/dist/es2015/renderer/program/Program';

	declare export class ProgramTable  {
static lastUsedProgram: Program;
static hasProgram(key: string): boolean;
static addProgram(key: string, program: Program): void;
static getProgram(key: string): Program;
static dispose(): void;
static clearAll(): void
}
    }
declare module 'wonder.js/dist/es2015/core/entityObject/scene/cache/BufferTable' {
        import type {
          ElementBuffer
        } from 'wonder.js/dist/es2015/renderer/buffer/ElementBuffer';

	import type {
          Buffer
        } from 'wonder.js/dist/es2015/renderer/buffer/Buffer';

	declare export class BufferTable  {
static lastBindedArrayBufferListUidStr: string;
static lastBindedElementBuffer: ElementBuffer;
static bindIndexBuffer(indexBuffer: ElementBuffer): void;
static hasBuffer(key: string): boolean;
static addBuffer(key: string, buffer: Buffer): void;
static getBuffer<T>(key: string): T;
static dispose(): void;
static clearAll(): void;
static resetBindedArrayBuffer(): void;
static resetBindedElementBuffer(): void
}
	declare export  class BufferTableKey {
  constructor(...args: empty): mixed;
static +PROCEDURAL_VERTEX: Class<BufferTableKey__PROCEDURAL_VERTEX> & BufferTableKey__PROCEDURAL_VERTEX & 0;// 0
static +PROCEDURAL_INDEX: Class<BufferTableKey__PROCEDURAL_INDEX> & BufferTableKey__PROCEDURAL_INDEX & 1;// 1

}

declare class BufferTableKey__PROCEDURAL_VERTEX mixins BufferTableKey {}
declare class BufferTableKey__PROCEDURAL_INDEX mixins BufferTableKey {}

    }
declare module 'wonder.js/dist/es2015/core/entityObject/manager/EntityObjectManager' {
        import type {
          EntityObject
        } from 'wonder.js/dist/es2015/core/entityObject/EntityObject';

	import type {
          Collection
        } from 'wonder-commonlib/dist/es2015/Collection';

	declare export class EntityObjectManager  {
static create(entityObject: EntityObject): EntityObjectManager;
constructor(entityObject: EntityObject): this;
init(): void;
dispose(): void;
hasChild(child: EntityObject): boolean;
addChild(child: EntityObject): this;
addChildren(children: EntityObject): any;
addChildren(children: Array<EntityObject>): any;
addChildren(children: Collection<EntityObject>): any;
forEach(func: (entityObject: EntityObject, index: number) => void): this;
filter(func: (entityObject: EntityObject) => boolean): Collection<any>;
sort(
func: (a: EntityObject, b: EntityObject) => any,
isSortSelf?: boolean): Collection<any>;
getChildren(): Collection<any>;
getAllChildren(): Collection<EntityObject>;
getChild(index: number): any;
findChildByUid(uid: number): any;
findChildByTag(tag: string): any;
findChildByName(name: string): any;
findChildrenByName(name: string): Collection<EntityObject>;
removeChild(child: EntityObject): this;
removeAllChildren(): void
}
    }
declare module 'wonder.js/dist/es2015/core/entityObject/manager/ComponentManager' {
        import type {
          EntityObject
        } from 'wonder.js/dist/es2015/core/entityObject/EntityObject';

	import type {
          Transform
        } from 'wonder.js/dist/es2015/component/transform/Transform';

	import type {
          Collection
        } from 'wonder-commonlib/dist/es2015/Collection';

	import type {
          RendererComponent
        } from 'wonder.js/dist/es2015/component/renderer/RendererComponent';

	import type {
          Geometry
        } from 'wonder.js/dist/es2015/component/geometry/Geometry';

	import type {
          Component
        } from 'wonder.js/dist/es2015/core/Component';

	declare export class ComponentManager  {
static create(entityObject: EntityObject): ComponentManager;
constructor(entityObject: EntityObject): this;
transform: Transform;
init(): void;
dispose(): void;
removeAllComponent(): Collection<Component>;
getComponent<T>(_class: any): T;
getComponents(): Collection<any>;
findComponentByUid(uid: number): any;
forEachComponent(func: (component: Component) => void): this;
hasComponent(component: Component): boolean;
hasComponent(_class: Function): boolean;
addComponent(component: Component, isShareComponent?: boolean): this;
removeComponent(component: Component): any;
removeComponent(_class: Function): any;
getComponentCount(_class: Function): number;
getGeometry(): Geometry;
getRendererComponent(): RendererComponent
}
    }
declare module 'wonder.js/dist/es2015/core/entityObject/gameObject/GameObject' {
        import type {
          EntityObject
        } from 'wonder.js/dist/es2015/core/entityObject/EntityObject';

	import type {
          ThreeDTransform
        } from 'wonder.js/dist/es2015/component/transform/ThreeDTransform';

	import type {
          Collection
        } from 'wonder-commonlib/dist/es2015/Collection';

	declare export class GameObject mixins EntityObject {
static create(): GameObject;
transform: ThreeDTransform;
parent: GameObject;
renderGroup: number;
renderPriority: number;
isVisible: boolean;
children: Collection<GameObject>;
initWhenCreate(): void;
createTransform(): ThreeDTransform;
getRenderList(): Collection<GameObject>
}
    }
declare module 'wonder.js/dist/es2015/core/entityObject/EntityObject' {
        import type {
          Entity
        } from 'wonder.js/dist/es2015/core/Entity';

	import type {
          Hash
        } from 'wonder-commonlib/dist/es2015/Hash';

	import type {
          Collection
        } from 'wonder-commonlib/dist/es2015/Collection';

	import type {
          CustomEventRegisterData
        } from 'wonder.js/dist/es2015/event/binder/CustomEventRegister';

	import type {
          ComponentManager
        } from 'wonder.js/dist/es2015/core/entityObject/manager/ComponentManager';

	import type {
          Component
        } from 'wonder.js/dist/es2015/core/Component';

	import type {
          Geometry
        } from 'wonder.js/dist/es2015/component/geometry/Geometry';

	import type {
          Renderer
        } from 'wonder.js/dist/es2015/renderer/renderer/Renderer';

	import type {
          GameObject
        } from 'wonder.js/dist/es2015/core/entityObject/gameObject/GameObject';

	import type {
          Transform
        } from 'wonder.js/dist/es2015/component/transform/Transform';

	declare export class EntityObject mixins Entity {
bubbleParent: EntityObject;
componentDirty: boolean;
transform: Transform;
name: string;
parent: EntityObject;
customEventMap: Hash<Collection<CustomEventRegisterData>>;
componentManager: ComponentManager;
initWhenCreate(): void;
clone(config?: CloneEntityObjectConfigData): any;
init(): this;
dispose(): void;
hasChild(child: EntityObject): boolean;
addChild(child: EntityObject): EntityObject;
getChildren(): Collection<any>;
removeChild(child: EntityObject): EntityObject;
forEach(func: (entityObject: EntityObject, index: number) => void): this;
getComponent<T>(_class: any): T;
hasComponent(component: Component): boolean;
hasComponent(_class: Function): boolean;
addComponent(component: Component, isShareComponent?: boolean): this;
removeComponent(component: Component): any;
removeComponent(_class: Function): any;
forEachComponent(func: (component: Component) => void): this;
render(renderer: Renderer, camera: GameObject): void;
update(elapsed: number): void;
clearCache(): void;
getGeometry(): Geometry;
createTransform(): Transform;
afterInitChildren(): void;
getRenderList(): Collection<any>
}
	declare export type CloneEntityObjectConfigData = {
cloneChildren?: boolean,
shareGeometry?: boolean,
cloneGeometry?: boolean
};
    }
declare module 'wonder.js/dist/es2015/core/Entity' {
        import type {
          Collection
        } from 'wonder-commonlib/dist/es2015/Collection';

	declare export class Entity  {
constructor(): this;
uid: number;
data: any;
addTag(tag: string): void;
removeTag(tag: string): void;
getTagList(): Collection<string>;
hasTag(tag: string): boolean;
containTag(tag: string): boolean
}
    }
declare module 'wonder.js/dist/es2015/core/Director' {
        
	
	
	import type {
          SceneDispatcher
        } from 'wonder.js/dist/es2015/core/entityObject/scene/SceneDispatcher';

	import type {
          Renderer
        } from 'wonder.js/dist/es2015/renderer/renderer/Renderer';

	declare export class Director  {
static getInstance(): any;
gameTime: number;
fps: number;
isNormal: boolean;
isStop: boolean;
isPause: boolean;
isTimeChange: boolean;
elapsed: number;
view: any;
scene: SceneDispatcher;
renderer: Renderer;
initWhenCreate(): void;
start(): void;
stop(): void;
pause(): void;
resume(): void;
getDeltaTime(): number
}
    }
declare module 'wonder.js/dist/es2015/core/Component' {
        import type {
          Entity
        } from 'wonder.js/dist/es2015/core/Entity';

	import type {
          Transform
        } from 'wonder.js/dist/es2015/component/transform/Transform';

	import type {
          EntityObject
        } from 'wonder.js/dist/es2015/core/entityObject/EntityObject';

	declare export class Component mixins Entity {
transform: Transform;
entityObject: EntityObject;
init(): void;
dispose(): void;
clone(): any;
addToObject(entityObject: EntityObject, isShareComponent?: boolean): void;
addToComponentContainer(): void;
removeFromObject(entityObject: EntityObject): void;
removeFromComponentContainer(): void
}
    }
declare module 'wonder.js/dist/es2015/config/DebugConfig' {
        declare export var DebugConfig: {
isTest: boolean,
debugCollision: boolean,
showDebugPanel: boolean
};
    }
declare module 'wonder.js/dist/es2015/component/transform/Transform' {
        import type {
          Component
        } from 'wonder.js/dist/es2015/core/Component';

	import type {
          ETransformState
        } from 'wonder.js/dist/es2015/component/transform/ETransformState';

	import type {
          Collection
        } from 'wonder-commonlib/dist/es2015/Collection';

	declare export class Transform mixins Component {
p_parent: Transform;
parent: Transform;
isTransform: boolean;
isTranslate: boolean;
isRotate: boolean;
isScale: boolean;
isLocalTranslate: boolean;
isLocalRotate: boolean;
isLocalScale: boolean;
dirtyLocal: boolean;
children: Collection<Transform>;
init(): void;
dispose(): void;
addChild(child: Transform): void;
removeChild(child: Transform): void;
setChildrenTransformState(state: boolean): any;
setChildrenTransformState(transformState: ETransformState, state: boolean): any;
clearCache(): void;
handleWhenSetTransformState(transformState?: ETransformState): void;
setParent(parent: Transform): void;
getMatrix<T>(syncMethod: string, matrixAttriName: string): T
}
    }
declare module 'wonder.js/dist/es2015/component/transform/ThreeDTransform' {
        import type {
          Transform
        } from 'wonder.js/dist/es2015/component/transform/Transform';

	import type {
          Matrix4
        } from 'wonder.js/dist/es2015/math/Matrix4';

	import type {
          Vector3
        } from 'wonder.js/dist/es2015/math/Vector3';

	import type {
          Quaternion
        } from 'wonder.js/dist/es2015/math/Quaternion';

	import type {
          Collection
        } from 'wonder-commonlib/dist/es2015/Collection';

	import type {
          Matrix3
        } from 'wonder.js/dist/es2015/math/Matrix3';

	import type {
          ETransformState
        } from 'wonder.js/dist/es2015/component/transform/ETransformState';

	declare export class ThreeDTransform mixins Transform {
static create(): ThreeDTransform;
localToWorldMatrix: Matrix4;
normalMatrix: Matrix3;
position: Vector3;
rotation: Quaternion;
scale: Vector3;
eulerAngles: Vector3;
localPosition: Vector3;
localRotation: Quaternion;
localEulerAngles: Vector3;
localScale: Vector3;
up: Vector3;
right: Vector3;
forward: any;
dirtyWorld: boolean;
p_parent: ThreeDTransform;
children: Collection<ThreeDTransform>;
sync(): void;
translateLocal(translation: Vector3): any;
translateLocal(x: number, y: number, z: number): any;
translate(translation: Vector3): any;
translate(x: number, y: number, z: number): any;
rotate(eulerAngles: Vector3): any;
rotate(x: number, y: number, z: number): any;
rotateLocal(eulerAngles: Vector3): any;
rotateLocal(x: number, y: number, z: number): any;
rotateAround(angle: number, center: Vector3, axis: Vector3): any;
rotateAround(
angle: number,
centerX: number,
centerY: number,
centerZ: number,
axisX: number,
axisY: number,
axisZ: number): any;
lookAt(target: Vector3): any;
lookAt(targetX: number, targetY: number, targetZ: number): any;
lookAt(target: Vector3, up: Vector3): any;
lookAt(
targetX: number,
targetY: number,
targetZ: number,
upX: number,
upY: number,
upZ: number): any;
clearCache(): void;
handleWhenSetTransformState(transformState?: ETransformState): void
}
    }
declare module 'wonder.js/dist/es2015/component/transform/ETransformState' {
        declare export  class ETransformState {
  constructor(...args: empty): mixed;
static +ISTRANSLATE: Class<ETransformState__ISTRANSLATE> & ETransformState__ISTRANSLATE & 0;// 0
static +ISROTATE: Class<ETransformState__ISROTATE> & ETransformState__ISROTATE & 1;// 1
static +ISSCALE: Class<ETransformState__ISSCALE> & ETransformState__ISSCALE & 2;// 2
static +ISLOCALTRANSLATE: Class<ETransformState__ISLOCALTRANSLATE> & ETransformState__ISLOCALTRANSLATE & 3;// 3
static +ISLOCALROTATE: Class<ETransformState__ISLOCALROTATE> & ETransformState__ISLOCALROTATE & 4;// 4
static +ISLOCALSCALE: Class<ETransformState__ISLOCALSCALE> & ETransformState__ISLOCALSCALE & 5;// 5

}

declare class ETransformState__ISTRANSLATE mixins ETransformState {}
declare class ETransformState__ISROTATE mixins ETransformState {}
declare class ETransformState__ISSCALE mixins ETransformState {}
declare class ETransformState__ISLOCALTRANSLATE mixins ETransformState {}
declare class ETransformState__ISLOCALROTATE mixins ETransformState {}
declare class ETransformState__ISLOCALSCALE mixins ETransformState {}

    }
declare module 'wonder.js/dist/es2015/component/renderer/RendererComponent' {
        import type {
          Component
        } from 'wonder.js/dist/es2015/core/Component';

	import type {
          Renderer
        } from 'wonder.js/dist/es2015/renderer/renderer/Renderer';

	import type {
          EntityObject
        } from 'wonder.js/dist/es2015/core/entityObject/EntityObject';

	import type {
          GameObject
        } from 'wonder.js/dist/es2015/core/entityObject/gameObject/GameObject';

	declare export class RendererComponent mixins Component {
render(renderer: Renderer, target: EntityObject, camera: GameObject): any
}
    }
declare module 'wonder.js/dist/es2015/component/renderer/MeshRenderer' {
        import type {
          RendererComponent
        } from 'wonder.js/dist/es2015/component/renderer/RendererComponent';

	import type {
          GameObject
        } from 'wonder.js/dist/es2015/core/entityObject/gameObject/GameObject';

	import type {
          Renderer
        } from 'wonder.js/dist/es2015/renderer/renderer/Renderer';

	import type {
          Geometry
        } from 'wonder.js/dist/es2015/component/geometry/Geometry';

	import type {
          QuadCommand
        } from 'wonder.js/dist/es2015/renderer/command/QuadCommand';

	declare export class MeshRenderer mixins RendererComponent {
static create(): MeshRenderer;
entityObject: GameObject;
render(renderer: Renderer, target: GameObject, camera: GameObject): void;
createDrawCommand(target: GameObject, geometry: Geometry, camera: GameObject): QuadCommand
}
    }
declare module 'wonder.js/dist/es2015/component/geometry/GeometryUtils' {
        import type {
          Face3
        } from 'wonder.js/dist/es2015/structure/Face3';

	import type {
          Vector3
        } from 'wonder.js/dist/es2015/math/Vector3';

	declare export class GeometryUtils  {
static convertToFaces(indices: Array<number>, normals?: Array<number>): Array<Face3>;
static hasData(data: any): boolean;
static getThreeComponent(sourceData: Array<number>, index: number): Vector3;
static iterateThreeComponent(dataArr: Array<number>, iterator: (v: Vector3) => void): void;
static setThreeComponent(targetData: Array<number>, sourceData: Vector3, index: number): any;
static setThreeComponent(targetData: Array<number>, sourceData: Array<number>, index: number): any
}
    }
declare module 'wonder.js/dist/es2015/component/geometry/Geometry' {
        import type {
          Component
        } from 'wonder.js/dist/es2015/core/Component';

	import type {
          Material
        } from 'wonder.js/dist/es2015/material/Material';

	import type {
          GameObject
        } from 'wonder.js/dist/es2015/core/entityObject/gameObject/GameObject';

	import type {
          BufferContainer
        } from 'wonder.js/dist/es2015/component/geometry/data/BufferContainer';

	import type {
          EDrawMode
        } from 'wonder.js/dist/es2015/renderer/EDrawMode';

	import type {
          GeometryData
        } from 'wonder.js/dist/es2015/component/geometry/data/GeometryData';

	import type {
          BasicGeometryData
        } from 'wonder.js/dist/es2015/component/geometry/data/BasicGeometryData';

	import type {
          Face3
        } from 'wonder.js/dist/es2015/structure/Face3';

	declare export class Geometry mixins Component {
material: Material;
geometryData: GeometryData;
entityObject: GameObject;
buffers: BufferContainer;
drawMode: EDrawMode;
computeData(): GeometryDataType;
init(): void;
dispose(): void;
createBuffersFromGeometryData(): void;
createBufferContainer(): BufferContainer;
createGeometryData(computedData: GeometryDataType): GeometryData;
createBasicGeometryData(computedData: GeometryDataType): BasicGeometryData
}
	declare export type GeometryDataType = {
vertices: Array<number>,
faces?: Array<Face3>
};
    }
declare module 'wonder.js/dist/es2015/component/geometry/data/GeometryData' {
        import type {
          Geometry
        } from 'wonder.js/dist/es2015/component/geometry/Geometry';

	import type {
          Face3
        } from 'wonder.js/dist/es2015/structure/Face3';

	declare export class GeometryData  {
constructor(geometry: Geometry): this;
vertices: Array<number>;
indices: Array<number>;
faces: Array<Face3>;
geometry: Geometry;
dispose(): void;
onChangeFace(): void
}
    }
declare module 'wonder.js/dist/es2015/component/geometry/data/CommonBufferContainer' {
        import type {
          BufferContainer
        } from 'wonder.js/dist/es2015/component/geometry/data/BufferContainer';

	import type {
          BasicGeometryData
        } from 'wonder.js/dist/es2015/component/geometry/data/BasicGeometryData';

	import type {
          ArrayBuffer
        } from 'wonder.js/dist/es2015/renderer/buffer/ArrayBuffer';

	import type {
          EBufferDataType
        } from 'wonder.js/dist/es2015/renderer/buffer/EBufferDataType';

	declare export class CommonBufferContainer mixins BufferContainer {
geometryData: BasicGeometryData;
getVertice(type: EBufferDataType): ArrayBuffer
}
    }
declare module 'wonder.js/dist/es2015/component/geometry/data/BufferContainer' {
        import type {
          GameObject
        } from 'wonder.js/dist/es2015/core/entityObject/gameObject/GameObject';

	import type {
          GeometryData
        } from 'wonder.js/dist/es2015/component/geometry/data/GeometryData';

	import type {
          Hash
        } from 'wonder-commonlib/dist/es2015/Hash';

	import type {
          Buffer
        } from 'wonder.js/dist/es2015/renderer/buffer/Buffer';

	import type {
          EBufferDataType
        } from 'wonder.js/dist/es2015/renderer/buffer/EBufferDataType';

	import type {
          EBufferType
        } from 'wonder.js/dist/es2015/renderer/buffer/EBufferType';

	import type {
          EBufferUsage
        } from 'wonder.js/dist/es2015/renderer/buffer/EBufferUsage';

	declare export class BufferContainer  {
constructor(entityObject: GameObject): this;
geometryData: GeometryData;
entityObject: GameObject;
container: Hash<Buffer>;
createBuffersFromGeometryData(): void;
removeCache(type: EBufferDataType): any;
removeCache(name: string): any;
getChild(type: EBufferDataType): any;
getChild(type: EBufferDataType, dataName: string): any;
init(): void;
dispose(): void;
getVertice(type: EBufferDataType): any;
createOnlyOnceAndUpdateArrayBuffer(
bufferAttriName: string,
data: Array<number>,
size: number,
type?: EBufferType,
offset?: number,
usage?: EBufferUsage): void;
createOnlyOnceAndUpdateElememntBuffer(
bufferAttriName: string,
data: Array<number>,
type?: EBufferType,
offset?: number,
usage?: EBufferUsage): void;
hasData(data: Array<number> | null): boolean
}
    }
declare module 'wonder.js/dist/es2015/component/geometry/data/BasicGeometryData' {
        import type {
          GeometryData
        } from 'wonder.js/dist/es2015/component/geometry/data/GeometryData';

	import type {
          Geometry
        } from 'wonder.js/dist/es2015/component/geometry/Geometry';

	declare export class BasicGeometryData mixins GeometryData {
static create(geometry: Geometry): BasicGeometryData
}
    }
declare module 'wonder.js/dist/es2015/component/geometry/data/BasicBufferContainer' {
        import type {
          CommonBufferContainer
        } from 'wonder.js/dist/es2015/component/geometry/data/CommonBufferContainer';

	import type {
          GameObject
        } from 'wonder.js/dist/es2015/core/entityObject/gameObject/GameObject';

	declare export class BasicBufferContainer mixins CommonBufferContainer {
static create(entityObject: GameObject): BasicBufferContainer
}
    }
declare module 'wonder.js/dist/es2015/component/geometry/BoxGeometry' {
        import type {
          Geometry
        } from 'wonder.js/dist/es2015/component/geometry/Geometry';

	import type {
          Face3
        } from 'wonder.js/dist/es2015/structure/Face3';

	declare export class BoxGeometry mixins Geometry {
static create(): BoxGeometry;
width: number;
height: number;
depth: number;
widthSegments: number;
heightSegments: number;
depthSegments: number;
computeData(): {
vertices: any[],
faces: Face3[]
}
}
    }
declare module 'wonder.js/dist/es2015/component/data/ComponentInitOrderTable' {
        import type {
          Component
        } from 'wonder.js/dist/es2015/core/Component';

	declare export class ComponentInitOrderTable  {
static getOrder(component: Component): 4 | 5
}
    }
declare module 'wonder.js/dist/es2015/component/camera/PerspectiveCamera' {
        import type {
          Camera
        } from 'wonder.js/dist/es2015/component/camera/Camera';

	declare export class PerspectiveCamera mixins Camera {
static create(): PerspectiveCamera;
fovy: number;
aspect: number;
zoomIn(speed: number, min?: number): void;
zoomOut(speed: number, max?: number): void;
updateProjectionMatrix(): void
}
    }
declare module 'wonder.js/dist/es2015/component/camera/controller/CameraController' {
        
	import type {
          Component
        } from 'wonder.js/dist/es2015/core/Component';

	import type {
          Camera
        } from 'wonder.js/dist/es2015/component/camera/Camera';

	import type {
          Matrix4
        } from 'wonder.js/dist/es2015/math/Matrix4';

	import type {
          GameObject
        } from 'wonder.js/dist/es2015/core/entityObject/gameObject/GameObject';

	declare export class CameraController mixins Component {
constructor(cameraComponent: Camera): this;
cameraToWorldMatrix: Matrix4;
worldToCameraMatrix: Matrix4;
pMatrix: Matrix4;
entityObject: GameObject;
camera: Camera;
init(): void;
update(elapsed: number): void;
dispose(): void;
clone(): this;
bindClearCacheEvent(): void;
disposeClearCacheEvent(): void
}
    }
declare module 'wonder.js/dist/es2015/component/camera/controller/basic/BasicCameraController' {
        import type {
          CameraController
        } from 'wonder.js/dist/es2015/component/camera/controller/CameraController';

	import type {
          Camera
        } from 'wonder.js/dist/es2015/component/camera/Camera';

	declare export class BasicCameraController mixins CameraController {
static create(cameraComponent: Camera): BasicCameraController
}
    }
declare module 'wonder.js/dist/es2015/component/camera/Camera' {
        import type {
          Matrix4
        } from 'wonder.js/dist/es2015/math/Matrix4';

	import type {
          GameObject
        } from 'wonder.js/dist/es2015/core/entityObject/gameObject/GameObject';

	declare export class Camera  {
cameraToWorldMatrix: Matrix4;
worldToCameraMatrix: Matrix4;
near: number;
far: number;
pMatrix: Matrix4;
entityObject: GameObject;
pMatrixDirty: boolean;
init(): void;
dispose(): void;
clone(): this;
update(elapsed: number): void;
updateProjectionMatrix(): any;
getInvViewProjMat(): Matrix4
}
    }
declare module 'wonder.js/dist/es2015' {
        declare export {
        Camera
      }from 'wonder.js/dist/es2015/component/camera/Camera';

	declare export {
        BasicCameraController
      }from 'wonder.js/dist/es2015/component/camera/controller/basic/BasicCameraController';

	declare export {
        CameraController
      }from 'wonder.js/dist/es2015/component/camera/controller/CameraController';

	declare export {
        PerspectiveCamera
      }from 'wonder.js/dist/es2015/component/camera/PerspectiveCamera';

	declare export {
        ComponentInitOrderTable
      }from 'wonder.js/dist/es2015/component/data/ComponentInitOrderTable';

	declare export {
        BoxGeometry
      }from 'wonder.js/dist/es2015/component/geometry/BoxGeometry';

	declare export {
        BasicBufferContainer
      }from 'wonder.js/dist/es2015/component/geometry/data/BasicBufferContainer';

	declare export {
        BasicGeometryData
      }from 'wonder.js/dist/es2015/component/geometry/data/BasicGeometryData';

	declare export {
        BufferContainer
      }from 'wonder.js/dist/es2015/component/geometry/data/BufferContainer';

	declare export {
        CommonBufferContainer
      }from 'wonder.js/dist/es2015/component/geometry/data/CommonBufferContainer';

	declare export {
        GeometryData
      }from 'wonder.js/dist/es2015/component/geometry/data/GeometryData';

	declare export {
        Geometry
      }from 'wonder.js/dist/es2015/component/geometry/Geometry';

	declare export {
        GeometryUtils
      }from 'wonder.js/dist/es2015/component/geometry/GeometryUtils';

	declare export {
        MeshRenderer
      }from 'wonder.js/dist/es2015/component/renderer/MeshRenderer';

	declare export {
        RendererComponent
      }from 'wonder.js/dist/es2015/component/renderer/RendererComponent';

	declare export {
        ETransformState
      }from 'wonder.js/dist/es2015/component/transform/ETransformState';

	declare export {
        ThreeDTransform
      }from 'wonder.js/dist/es2015/component/transform/ThreeDTransform';

	declare export {
        Transform
      }from 'wonder.js/dist/es2015/component/transform/Transform';

	declare export {
        DebugConfig
      }from 'wonder.js/dist/es2015/config/DebugConfig';

	declare export {
        Component
      }from 'wonder.js/dist/es2015/core/Component';

	declare export {
        Director
      }from 'wonder.js/dist/es2015/core/Director';

	declare export {
        Entity
      }from 'wonder.js/dist/es2015/core/Entity';

	declare export {
        EntityObject
      }from 'wonder.js/dist/es2015/core/entityObject/EntityObject';

	declare export {
        GameObject
      }from 'wonder.js/dist/es2015/core/entityObject/gameObject/GameObject';

	declare export {
        ComponentManager
      }from 'wonder.js/dist/es2015/core/entityObject/manager/ComponentManager';

	declare export {
        EntityObjectManager
      }from 'wonder.js/dist/es2015/core/entityObject/manager/EntityObjectManager';

	declare export {
        BufferTable,BufferTableKey
      }from 'wonder.js/dist/es2015/core/entityObject/scene/cache/BufferTable';

	declare export {
        ProgramTable
      }from 'wonder.js/dist/es2015/core/entityObject/scene/cache/ProgramTable';

	declare export {
        GameObjectScene
      }from 'wonder.js/dist/es2015/core/entityObject/scene/gameObjectScene/GameObjectScene';

	declare export {
        Scene
      }from 'wonder.js/dist/es2015/core/entityObject/scene/Scene';

	declare export {
        SceneDispatcher
      }from 'wonder.js/dist/es2015/core/entityObject/scene/SceneDispatcher';

	declare export {
        Main
      }from 'wonder.js/dist/es2015/core/Main';

	declare export {
        MainData
      }from 'wonder.js/dist/es2015/core/data/MainData';

	declare export {
        cacheGetter,cache,cacheBufferForBufferContainer,cacheBufferForBufferContainerWithFuncParam
      }from 'wonder.js/dist/es2015/definition/typescript/decorator/cache';

	declare export {
        cloneAttributeAsBasicType,cloneAttributeAsCloneable,cloneAttributeAsCustomType,CloneUtils,CloneType
      }from 'wonder.js/dist/es2015/definition/typescript/decorator/clone';

	declare export {
        assert,describe,it,requireCheck,ensure,requireGetterAndSetter,requireGetter,requireSetter,ensureGetterAndSetter,ensureGetter,ensureSetter,invariant
      }from 'wonder.js/dist/es2015/definition/typescript/decorator/contract';

	declare export {
        execOnlyOnce
      }from 'wonder.js/dist/es2015/definition/typescript/decorator/control';

	declare export {
        registerClass
      }from 'wonder.js/dist/es2015/definition/typescript/decorator/registerClass';

	declare export {
        singleton
      }from 'wonder.js/dist/es2015/definition/typescript/decorator/singleton';

	declare export {
        virtual
      }from 'wonder.js/dist/es2015/definition/typescript/decorator/virtual';

	declare export {
        root
      }from 'wonder.js/dist/es2015/definition/Variable';

	declare export {
        DeviceManager,EDepthFunction,ESide,EPolygonOffsetMode,EBlendFunc,EBlendEquation,EBlendType,ECanvasType
      }from 'wonder.js/dist/es2015/device/DeviceManager';

	declare export {
        EScreenSize
      }from 'wonder.js/dist/es2015/device/EScreenSize';

	declare export {
        GPUDetector,EGPUPrecision
      }from 'wonder.js/dist/es2015/device/GPUDetector';

	declare export {
        CustomEventBinder
      }from 'wonder.js/dist/es2015/event/binder/CustomEventBinder';

	declare export {
        CustomEventRegister
      }from 'wonder.js/dist/es2015/event/binder/CustomEventRegister';

	declare export {
        DomEventBinder
      }from 'wonder.js/dist/es2015/event/binder/DomEventBinder';

	declare export {
        DomEventRegister
      }from 'wonder.js/dist/es2015/event/binder/DomEventRegister';

	declare export {
        EventBinder
      }from 'wonder.js/dist/es2015/event/binder/EventBinder';

	declare export {
        EventRegister
      }from 'wonder.js/dist/es2015/event/binder/EventRegister';

	declare export {
        CustomEventDispatcher
      }from 'wonder.js/dist/es2015/event/dispatcher/CustomEventDispatcher';

	declare export {
        DomEventDispatcher
      }from 'wonder.js/dist/es2015/event/dispatcher/DomEventDispatcher';

	declare export {
        EventDispatcher
      }from 'wonder.js/dist/es2015/event/dispatcher/EventDispatcher';

	declare export {
        EEngineEvent
      }from 'wonder.js/dist/es2015/event/EEngineEvent';

	declare export {
        EventManager
      }from 'wonder.js/dist/es2015/event/EventManager';

	declare export {
        EventBinderFactory
      }from 'wonder.js/dist/es2015/event/factory/EventBinderFactory';

	declare export {
        EventDispatcherFactory
      }from 'wonder.js/dist/es2015/event/factory/EventDispatcherFactory';

	declare export {
        EventHandlerFactory
      }from 'wonder.js/dist/es2015/event/factory/EventHandlerFactory';

	declare export {
        CustomEventHandler
      }from 'wonder.js/dist/es2015/event/handler/CustomEventHandler';

	declare export {
        DomEventHandler
      }from 'wonder.js/dist/es2015/event/handler/DomEventHandler';

	declare export {
        EventHandler
      }from 'wonder.js/dist/es2015/event/handler/EventHandler';

	declare export {
        KeyboardEventHandler
      }from 'wonder.js/dist/es2015/event/handler/KeyboardEventHandler';

	declare export {
        MouseEventHandler
      }from 'wonder.js/dist/es2015/event/handler/MouseEventHandler';

	declare export {
        PointEventHandler
      }from 'wonder.js/dist/es2015/event/handler/PointEventHandler';

	declare export {
        TouchEventHandler
      }from 'wonder.js/dist/es2015/event/handler/TouchEventHandler';

	declare export {
        CustomEvent
      }from 'wonder.js/dist/es2015/event/object/CustomEvent';

	declare export {
        DomEvent
      }from 'wonder.js/dist/es2015/event/object/DomEvent';

	declare export {
        EEventPhase
      }from 'wonder.js/dist/es2015/event/object/EEventPhase';

	declare export {
        EEventType
      }from 'wonder.js/dist/es2015/event/object/EEventType';

	declare export {
        EMouseButton
      }from 'wonder.js/dist/es2015/event/object/EMouseButton';

	declare export {
        Event
      }from 'wonder.js/dist/es2015/event/object/Event';

	declare export {
        EEventName,EventNameHandler
      }from 'wonder.js/dist/es2015/event/object/EventNameHandler';

	declare export {
        EventTable
      }from 'wonder.js/dist/es2015/event/object/EventTable';

	declare export {
        KeyboardEvent
      }from 'wonder.js/dist/es2015/event/object/KeyboardEvent';

	declare export {
        MouseEvent
      }from 'wonder.js/dist/es2015/event/object/MouseEvent';

	declare export {
        MousePointEvent
      }from 'wonder.js/dist/es2015/event/object/MousePointEvent';

	declare export {
        PointEvent
      }from 'wonder.js/dist/es2015/event/object/PointEvent';

	declare export {
        TouchEvent
      }from 'wonder.js/dist/es2015/event/object/TouchEvent';

	declare export {
        TouchPointEvent
      }from 'wonder.js/dist/es2015/event/object/TouchPointEvent';

	declare export {
        CustomEventListenerMap
      }from 'wonder.js/dist/es2015/event/structure/CustomEventListenerMap';

	declare export {
        DomEventListenerMap
      }from 'wonder.js/dist/es2015/event/structure/DomEventListenerMap';

	declare export {
        EventListenerMap
      }from 'wonder.js/dist/es2015/event/structure/EventListenerMap';

	declare export {
        EventUtils
      }from 'wonder.js/dist/es2015/event/utils/EventUtils';

	declare export {
        BasicMaterial
      }from 'wonder.js/dist/es2015/material/BasicMaterial';

	declare export {
        EngineMaterial
      }from 'wonder.js/dist/es2015/material/EngineMaterial';

	declare export {
        Material
      }from 'wonder.js/dist/es2015/material/Material';

	declare export {
        ShaderManager
      }from 'wonder.js/dist/es2015/material/ShaderManager';

	declare export {
        StandardBasicMaterial
      }from 'wonder.js/dist/es2015/material/StandardBasicMaterial';

	declare export {
        DEG_TO_RAD,RAD_TO_DEG
      }from 'wonder.js/dist/es2015/math/Global';

	declare export {
        Matrix3
      }from 'wonder.js/dist/es2015/math/Matrix3';

	declare export {
        Matrix4
      }from 'wonder.js/dist/es2015/math/Matrix4';

	declare export {
        Quaternion
      }from 'wonder.js/dist/es2015/math/Quaternion';

	declare export {
        Vector2
      }from 'wonder.js/dist/es2015/math/Vector2';

	declare export {
        Vector3
      }from 'wonder.js/dist/es2015/math/Vector3';

	declare export {
        Vector4
      }from 'wonder.js/dist/es2015/math/Vector4';

	declare export {
        ArrayBuffer
      }from 'wonder.js/dist/es2015/renderer/buffer/ArrayBuffer';

	declare export {
        Buffer
      }from 'wonder.js/dist/es2015/renderer/buffer/Buffer';

	declare export {
        BufferDataTable
      }from 'wonder.js/dist/es2015/renderer/buffer/BufferDataTable';

	declare export {
        CommonBuffer
      }from 'wonder.js/dist/es2015/renderer/buffer/CommonBuffer';

	declare export {
        EBufferDataType
      }from 'wonder.js/dist/es2015/renderer/buffer/EBufferDataType';

	declare export {
        EBufferType
      }from 'wonder.js/dist/es2015/renderer/buffer/EBufferType';

	declare export {
        EBufferUsage
      }from 'wonder.js/dist/es2015/renderer/buffer/EBufferUsage';

	declare export {
        ElementBuffer
      }from 'wonder.js/dist/es2015/renderer/buffer/ElementBuffer';

	declare export {
        QuadCommand
      }from 'wonder.js/dist/es2015/renderer/command/QuadCommand';

	declare export {
        RenderCommand
      }from 'wonder.js/dist/es2015/renderer/command/RenderCommand';

	declare export {
        SingleDrawCommand
      }from 'wonder.js/dist/es2015/renderer/command/SingleDrawCommand';

	declare export {
        EDrawMode
      }from 'wonder.js/dist/es2015/renderer/EDrawMode';

	declare export {
        GlUtils
      }from 'wonder.js/dist/es2015/renderer/GlUtils';

	declare export {
        GLSLDataSender
      }from 'wonder.js/dist/es2015/renderer/program/GLSLDataSender';

	declare export {
        Program
      }from 'wonder.js/dist/es2015/renderer/program/Program';

	declare export {
        Renderer
      }from 'wonder.js/dist/es2015/renderer/renderer/Renderer';

	declare export {
        WebGLRenderer
      }from 'wonder.js/dist/es2015/renderer/renderer/WebGLRenderer';

	declare export {
        BasicMaterialColorShaderLib
      }from 'wonder.js/dist/es2015/renderer/shader/lib/basic/BasicMaterialColorShaderLib';

	declare export {
        BasicShaderLib
      }from 'wonder.js/dist/es2015/renderer/shader/lib/basic/BasicShaderLib';

	declare export {
        EndBasicShaderLib
      }from 'wonder.js/dist/es2015/renderer/shader/lib/basic/EndBasicShaderLib';

	declare export {
        CommonShaderLib
      }from 'wonder.js/dist/es2015/renderer/shader/lib/common/CommonShaderLib';

	declare export {
        EndShaderLib
      }from 'wonder.js/dist/es2015/renderer/shader/lib/common/EndShaderLib';

	declare export {
        VerticeCommonShaderLib
      }from 'wonder.js/dist/es2015/renderer/shader/lib/common/VerticeCommonShaderLib';

	declare export {
        EngineShaderLib
      }from 'wonder.js/dist/es2015/renderer/shader/lib/EngineShaderLib';

	declare export {
        ShaderLib
      }from 'wonder.js/dist/es2015/renderer/shader/lib/ShaderLib';

	declare export {
        CommonShader
      }from 'wonder.js/dist/es2015/renderer/shader/shader/CommonShader';

	declare export {
        EngineShader
      }from 'wonder.js/dist/es2015/renderer/shader/shader/EngineShader';

	declare export {
        Shader
      }from 'wonder.js/dist/es2015/renderer/shader/shader/Shader';

	declare export {
        EngineShaderSourceBuilder
      }from 'wonder.js/dist/es2015/renderer/shader/sourceBuilder/EngineShaderSourceBuilder';

	declare export {
        ShaderSourceBuilder
      }from 'wonder.js/dist/es2015/renderer/shader/sourceBuilder/ShaderSourceBuilder';

	declare export {
        EVariableCategory
      }from 'wonder.js/dist/es2015/renderer/shader/variable/EVariableCategory';

	declare export {
        EVariableSemantic
      }from 'wonder.js/dist/es2015/renderer/shader/variable/EVariableSemantic';

	declare export {
        EVariableType
      }from 'wonder.js/dist/es2015/renderer/shader/variable/EVariableType';

	declare export {
        VariableLib
      }from 'wonder.js/dist/es2015/renderer/shader/variable/VariableLib';

	declare export {
        VariableNameTable
      }from 'wonder.js/dist/es2015/renderer/shader/variable/VariableNameTable';

	declare export {
        VariableTypeTable
      }from 'wonder.js/dist/es2015/renderer/shader/variable/VariableTypeTable';

	declare export {
        BasicState
      }from 'wonder.js/dist/es2015/renderer/state/BasicState';

	declare export {
        WebGLState
      }from 'wonder.js/dist/es2015/renderer/state/WebGLState';

	declare export {
        Color
      }from 'wonder.js/dist/es2015/structure/Color';

	declare export {
        Face3
      }from 'wonder.js/dist/es2015/structure/Face3';

	declare export {
        Point
      }from 'wonder.js/dist/es2015/structure/Point';

	declare export {
        RectRegion
      }from 'wonder.js/dist/es2015/structure/RectRegion';

	declare export {
        ViewWebGL
      }from 'wonder.js/dist/es2015/structure/View';

	declare export {
        ArrayUtils
      }from 'wonder.js/dist/es2015/utils/ArrayUtils';

	declare export {
        BufferUtils
      }from 'wonder.js/dist/es2015/utils/BufferUtils';

	declare export {
        ClassUtils
      }from 'wonder.js/dist/es2015/utils/ClassUtils';

	declare export {
        JudgeUtils
      }from 'wonder.js/dist/es2015/utils/JudgeUtils';

	declare export {
        Log
      }from 'wonder.js/dist/es2015/utils/Log';

	declare export {
        MathUtils
      }from 'wonder.js/dist/es2015/utils/MathUtils';

	declare export {
        RenderUtils
      }from 'wonder.js/dist/es2015/utils/RenderUtils';

	declare export {
        ShaderLibUtils
      }from 'wonder.js/dist/es2015/utils/ShaderLibUtils';

	declare export {
        SortUtils
      }from 'wonder.js/dist/es2015/utils/SortUtils';

	declare export {
        CommonTimeController
      }from 'wonder.js/dist/es2015/utils/time/CommonTimeController';

	declare export {
        DirectorTimeController
      }from 'wonder.js/dist/es2015/utils/time/DirectorTimeController';

	declare export {
        TimeController
      }from 'wonder.js/dist/es2015/utils/time/TimeController';

	declare export {
        CompileConfig
      }from 'wonder.js/dist/es2015/config/CompileConfig';

    }
declare module 'wonder.js' {
        declare module 'wonder.js/dist/es2015/component/camera/Camera' {
        import type {
          Matrix4
        } from 'wonder.js/dist/es2015/math/Matrix4';

	import type {
          GameObject
        } from 'wonder.js/dist/es2015/core/entityObject/gameObject/GameObject';

	declare export class Camera  {
cameraToWorldMatrix: Matrix4;
worldToCameraMatrix: Matrix4;
near: number;
far: number;
pMatrix: Matrix4;
entityObject: GameObject;
pMatrixDirty: boolean;
init(): void;
dispose(): void;
clone(): this;
update(elapsed: number): void;
updateProjectionMatrix(): any;
getInvViewProjMat(): Matrix4
}
    }

	declare module 'wonder.js/dist/es2015/component/camera/controller/basic/BasicCameraController' {
        import type {
          CameraController
        } from 'wonder.js/dist/es2015/component/camera/controller/CameraController';

	import type {
          Camera
        } from 'wonder.js/dist/es2015/component/camera/Camera';

	declare export class BasicCameraController mixins CameraController {
static create(cameraComponent: Camera): BasicCameraController
}
    }

	declare module 'wonder.js/dist/es2015/component/camera/controller/CameraController' {
        
	import type {
          Component
        } from 'wonder.js/dist/es2015/core/Component';

	import type {
          Camera
        } from 'wonder.js/dist/es2015/component/camera/Camera';

	import type {
          Matrix4
        } from 'wonder.js/dist/es2015/math/Matrix4';

	import type {
          GameObject
        } from 'wonder.js/dist/es2015/core/entityObject/gameObject/GameObject';

	declare export class CameraController mixins Component {
constructor(cameraComponent: Camera): this;
cameraToWorldMatrix: Matrix4;
worldToCameraMatrix: Matrix4;
pMatrix: Matrix4;
entityObject: GameObject;
camera: Camera;
init(): void;
update(elapsed: number): void;
dispose(): void;
clone(): this;
bindClearCacheEvent(): void;
disposeClearCacheEvent(): void
}
    }

	declare module 'wonder.js/dist/es2015/component/camera/PerspectiveCamera' {
        import type {
          Camera
        } from 'wonder.js/dist/es2015/component/camera/Camera';

	declare export class PerspectiveCamera mixins Camera {
static create(): PerspectiveCamera;
fovy: number;
aspect: number;
zoomIn(speed: number, min?: number): void;
zoomOut(speed: number, max?: number): void;
updateProjectionMatrix(): void
}
    }

	declare module 'wonder.js/dist/es2015/component/data/ComponentInitOrderTable' {
        import type {
          Component
        } from 'wonder.js/dist/es2015/core/Component';

	declare export class ComponentInitOrderTable  {
static getOrder(component: Component): 4 | 5
}
    }

	declare module 'wonder.js/dist/es2015/component/geometry/BoxGeometry' {
        import type {
          Geometry
        } from 'wonder.js/dist/es2015/component/geometry/Geometry';

	import type {
          Face3
        } from 'wonder.js/dist/es2015/structure/Face3';

	declare export class BoxGeometry mixins Geometry {
static create(): BoxGeometry;
width: number;
height: number;
depth: number;
widthSegments: number;
heightSegments: number;
depthSegments: number;
computeData(): {
vertices: any[],
faces: Face3[]
}
}
    }

	declare module 'wonder.js/dist/es2015/component/geometry/data/BasicBufferContainer' {
        import type {
          CommonBufferContainer
        } from 'wonder.js/dist/es2015/component/geometry/data/CommonBufferContainer';

	import type {
          GameObject
        } from 'wonder.js/dist/es2015/core/entityObject/gameObject/GameObject';

	declare export class BasicBufferContainer mixins CommonBufferContainer {
static create(entityObject: GameObject): BasicBufferContainer
}
    }

	declare module 'wonder.js/dist/es2015/component/geometry/data/BasicGeometryData' {
        import type {
          GeometryData
        } from 'wonder.js/dist/es2015/component/geometry/data/GeometryData';

	import type {
          Geometry
        } from 'wonder.js/dist/es2015/component/geometry/Geometry';

	declare export class BasicGeometryData mixins GeometryData {
static create(geometry: Geometry): BasicGeometryData
}
    }

	declare module 'wonder.js/dist/es2015/component/geometry/data/BufferContainer' {
        import type {
          GameObject
        } from 'wonder.js/dist/es2015/core/entityObject/gameObject/GameObject';

	import type {
          GeometryData
        } from 'wonder.js/dist/es2015/component/geometry/data/GeometryData';

	import type {
          Hash
        } from 'wonder-commonlib/dist/es2015/Hash';

	import type {
          Buffer
        } from 'wonder.js/dist/es2015/renderer/buffer/Buffer';

	import type {
          EBufferDataType
        } from 'wonder.js/dist/es2015/renderer/buffer/EBufferDataType';

	import type {
          EBufferType
        } from 'wonder.js/dist/es2015/renderer/buffer/EBufferType';

	import type {
          EBufferUsage
        } from 'wonder.js/dist/es2015/renderer/buffer/EBufferUsage';

	declare export class BufferContainer  {
constructor(entityObject: GameObject): this;
geometryData: GeometryData;
entityObject: GameObject;
container: Hash<Buffer>;
createBuffersFromGeometryData(): void;
removeCache(type: EBufferDataType): any;
removeCache(name: string): any;
getChild(type: EBufferDataType): any;
getChild(type: EBufferDataType, dataName: string): any;
init(): void;
dispose(): void;
getVertice(type: EBufferDataType): any;
createOnlyOnceAndUpdateArrayBuffer(
bufferAttriName: string,
data: Array<number>,
size: number,
type?: EBufferType,
offset?: number,
usage?: EBufferUsage): void;
createOnlyOnceAndUpdateElememntBuffer(
bufferAttriName: string,
data: Array<number>,
type?: EBufferType,
offset?: number,
usage?: EBufferUsage): void;
hasData(data: Array<number> | null): boolean
}
    }

	declare module 'wonder.js/dist/es2015/component/geometry/data/CommonBufferContainer' {
        import type {
          BufferContainer
        } from 'wonder.js/dist/es2015/component/geometry/data/BufferContainer';

	import type {
          BasicGeometryData
        } from 'wonder.js/dist/es2015/component/geometry/data/BasicGeometryData';

	import type {
          ArrayBuffer
        } from 'wonder.js/dist/es2015/renderer/buffer/ArrayBuffer';

	import type {
          EBufferDataType
        } from 'wonder.js/dist/es2015/renderer/buffer/EBufferDataType';

	declare export class CommonBufferContainer mixins BufferContainer {
geometryData: BasicGeometryData;
getVertice(type: EBufferDataType): ArrayBuffer
}
    }

	declare module 'wonder.js/dist/es2015/component/geometry/data/GeometryData' {
        import type {
          Geometry
        } from 'wonder.js/dist/es2015/component/geometry/Geometry';

	import type {
          Face3
        } from 'wonder.js/dist/es2015/structure/Face3';

	declare export class GeometryData  {
constructor(geometry: Geometry): this;
vertices: Array<number>;
indices: Array<number>;
faces: Array<Face3>;
geometry: Geometry;
dispose(): void;
onChangeFace(): void
}
    }

	declare module 'wonder.js/dist/es2015/component/geometry/Geometry' {
        import type {
          Component
        } from 'wonder.js/dist/es2015/core/Component';

	import type {
          Material
        } from 'wonder.js/dist/es2015/material/Material';

	import type {
          GameObject
        } from 'wonder.js/dist/es2015/core/entityObject/gameObject/GameObject';

	import type {
          BufferContainer
        } from 'wonder.js/dist/es2015/component/geometry/data/BufferContainer';

	import type {
          EDrawMode
        } from 'wonder.js/dist/es2015/renderer/EDrawMode';

	import type {
          GeometryData
        } from 'wonder.js/dist/es2015/component/geometry/data/GeometryData';

	import type {
          BasicGeometryData
        } from 'wonder.js/dist/es2015/component/geometry/data/BasicGeometryData';

	import type {
          Face3
        } from 'wonder.js/dist/es2015/structure/Face3';

	declare export class Geometry mixins Component {
material: Material;
geometryData: GeometryData;
entityObject: GameObject;
buffers: BufferContainer;
drawMode: EDrawMode;
computeData(): GeometryDataType;
init(): void;
dispose(): void;
createBuffersFromGeometryData(): void;
createBufferContainer(): BufferContainer;
createGeometryData(computedData: GeometryDataType): GeometryData;
createBasicGeometryData(computedData: GeometryDataType): BasicGeometryData
}
	declare export type GeometryDataType = {
vertices: Array<number>,
faces?: Array<Face3>
};
    }

	declare module 'wonder.js/dist/es2015/component/geometry/GeometryUtils' {
        import type {
          Face3
        } from 'wonder.js/dist/es2015/structure/Face3';

	import type {
          Vector3
        } from 'wonder.js/dist/es2015/math/Vector3';

	declare export class GeometryUtils  {
static convertToFaces(indices: Array<number>, normals?: Array<number>): Array<Face3>;
static hasData(data: any): boolean;
static getThreeComponent(sourceData: Array<number>, index: number): Vector3;
static iterateThreeComponent(dataArr: Array<number>, iterator: (v: Vector3) => void): void;
static setThreeComponent(targetData: Array<number>, sourceData: Vector3, index: number): any;
static setThreeComponent(targetData: Array<number>, sourceData: Array<number>, index: number): any
}
    }

	declare module 'wonder.js/dist/es2015/component/renderer/MeshRenderer' {
        import type {
          RendererComponent
        } from 'wonder.js/dist/es2015/component/renderer/RendererComponent';

	import type {
          GameObject
        } from 'wonder.js/dist/es2015/core/entityObject/gameObject/GameObject';

	import type {
          Renderer
        } from 'wonder.js/dist/es2015/renderer/renderer/Renderer';

	import type {
          Geometry
        } from 'wonder.js/dist/es2015/component/geometry/Geometry';

	import type {
          QuadCommand
        } from 'wonder.js/dist/es2015/renderer/command/QuadCommand';

	declare export class MeshRenderer mixins RendererComponent {
static create(): MeshRenderer;
entityObject: GameObject;
render(renderer: Renderer, target: GameObject, camera: GameObject): void;
createDrawCommand(target: GameObject, geometry: Geometry, camera: GameObject): QuadCommand
}
    }

	declare module 'wonder.js/dist/es2015/component/renderer/RendererComponent' {
        import type {
          Component
        } from 'wonder.js/dist/es2015/core/Component';

	import type {
          Renderer
        } from 'wonder.js/dist/es2015/renderer/renderer/Renderer';

	import type {
          EntityObject
        } from 'wonder.js/dist/es2015/core/entityObject/EntityObject';

	import type {
          GameObject
        } from 'wonder.js/dist/es2015/core/entityObject/gameObject/GameObject';

	declare export class RendererComponent mixins Component {
render(renderer: Renderer, target: EntityObject, camera: GameObject): any
}
    }

	declare module 'wonder.js/dist/es2015/component/transform/ETransformState' {
        declare export  class ETransformState {
  constructor(...args: empty): mixed;
static +ISTRANSLATE: Class<ETransformState__ISTRANSLATE> & ETransformState__ISTRANSLATE & 0;// 0
static +ISROTATE: Class<ETransformState__ISROTATE> & ETransformState__ISROTATE & 1;// 1
static +ISSCALE: Class<ETransformState__ISSCALE> & ETransformState__ISSCALE & 2;// 2
static +ISLOCALTRANSLATE: Class<ETransformState__ISLOCALTRANSLATE> & ETransformState__ISLOCALTRANSLATE & 3;// 3
static +ISLOCALROTATE: Class<ETransformState__ISLOCALROTATE> & ETransformState__ISLOCALROTATE & 4;// 4
static +ISLOCALSCALE: Class<ETransformState__ISLOCALSCALE> & ETransformState__ISLOCALSCALE & 5;// 5

}

declare class ETransformState__ISTRANSLATE mixins ETransformState {}
declare class ETransformState__ISROTATE mixins ETransformState {}
declare class ETransformState__ISSCALE mixins ETransformState {}
declare class ETransformState__ISLOCALTRANSLATE mixins ETransformState {}
declare class ETransformState__ISLOCALROTATE mixins ETransformState {}
declare class ETransformState__ISLOCALSCALE mixins ETransformState {}

    }

	declare module 'wonder.js/dist/es2015/component/transform/ThreeDTransform' {
        import type {
          Transform
        } from 'wonder.js/dist/es2015/component/transform/Transform';

	import type {
          Matrix4
        } from 'wonder.js/dist/es2015/math/Matrix4';

	import type {
          Vector3
        } from 'wonder.js/dist/es2015/math/Vector3';

	import type {
          Quaternion
        } from 'wonder.js/dist/es2015/math/Quaternion';

	import type {
          Collection
        } from 'wonder-commonlib/dist/es2015/Collection';

	import type {
          Matrix3
        } from 'wonder.js/dist/es2015/math/Matrix3';

	import type {
          ETransformState
        } from 'wonder.js/dist/es2015/component/transform/ETransformState';

	declare export class ThreeDTransform mixins Transform {
static create(): ThreeDTransform;
localToWorldMatrix: Matrix4;
normalMatrix: Matrix3;
position: Vector3;
rotation: Quaternion;
scale: Vector3;
eulerAngles: Vector3;
localPosition: Vector3;
localRotation: Quaternion;
localEulerAngles: Vector3;
localScale: Vector3;
up: Vector3;
right: Vector3;
forward: any;
dirtyWorld: boolean;
p_parent: ThreeDTransform;
children: Collection<ThreeDTransform>;
sync(): void;
translateLocal(translation: Vector3): any;
translateLocal(x: number, y: number, z: number): any;
translate(translation: Vector3): any;
translate(x: number, y: number, z: number): any;
rotate(eulerAngles: Vector3): any;
rotate(x: number, y: number, z: number): any;
rotateLocal(eulerAngles: Vector3): any;
rotateLocal(x: number, y: number, z: number): any;
rotateAround(angle: number, center: Vector3, axis: Vector3): any;
rotateAround(
angle: number,
centerX: number,
centerY: number,
centerZ: number,
axisX: number,
axisY: number,
axisZ: number): any;
lookAt(target: Vector3): any;
lookAt(targetX: number, targetY: number, targetZ: number): any;
lookAt(target: Vector3, up: Vector3): any;
lookAt(
targetX: number,
targetY: number,
targetZ: number,
upX: number,
upY: number,
upZ: number): any;
clearCache(): void;
handleWhenSetTransformState(transformState?: ETransformState): void
}
    }

	declare module 'wonder.js/dist/es2015/component/transform/Transform' {
        import type {
          Component
        } from 'wonder.js/dist/es2015/core/Component';

	import type {
          ETransformState
        } from 'wonder.js/dist/es2015/component/transform/ETransformState';

	import type {
          Collection
        } from 'wonder-commonlib/dist/es2015/Collection';

	declare export class Transform mixins Component {
p_parent: Transform;
parent: Transform;
isTransform: boolean;
isTranslate: boolean;
isRotate: boolean;
isScale: boolean;
isLocalTranslate: boolean;
isLocalRotate: boolean;
isLocalScale: boolean;
dirtyLocal: boolean;
children: Collection<Transform>;
init(): void;
dispose(): void;
addChild(child: Transform): void;
removeChild(child: Transform): void;
setChildrenTransformState(state: boolean): any;
setChildrenTransformState(transformState: ETransformState, state: boolean): any;
clearCache(): void;
handleWhenSetTransformState(transformState?: ETransformState): void;
setParent(parent: Transform): void;
getMatrix<T>(syncMethod: string, matrixAttriName: string): T
}
    }

	declare module 'wonder.js/dist/es2015/config/DebugConfig' {
        declare export var DebugConfig: {
isTest: boolean,
debugCollision: boolean,
showDebugPanel: boolean
};
    }

	declare module 'wonder.js/dist/es2015/core/Component' {
        import type {
          Entity
        } from 'wonder.js/dist/es2015/core/Entity';

	import type {
          Transform
        } from 'wonder.js/dist/es2015/component/transform/Transform';

	import type {
          EntityObject
        } from 'wonder.js/dist/es2015/core/entityObject/EntityObject';

	declare export class Component mixins Entity {
transform: Transform;
entityObject: EntityObject;
init(): void;
dispose(): void;
clone(): any;
addToObject(entityObject: EntityObject, isShareComponent?: boolean): void;
addToComponentContainer(): void;
removeFromObject(entityObject: EntityObject): void;
removeFromComponentContainer(): void
}
    }

	declare module 'wonder.js/dist/es2015/core/Director' {
        
	
	
	import type {
          SceneDispatcher
        } from 'wonder.js/dist/es2015/core/entityObject/scene/SceneDispatcher';

	import type {
          Renderer
        } from 'wonder.js/dist/es2015/renderer/renderer/Renderer';

	declare export class Director  {
static getInstance(): any;
gameTime: number;
fps: number;
isNormal: boolean;
isStop: boolean;
isPause: boolean;
isTimeChange: boolean;
elapsed: number;
view: any;
scene: SceneDispatcher;
renderer: Renderer;
initWhenCreate(): void;
start(): void;
stop(): void;
pause(): void;
resume(): void;
getDeltaTime(): number
}
    }

	declare module 'wonder.js/dist/es2015/core/Entity' {
        import type {
          Collection
        } from 'wonder-commonlib/dist/es2015/Collection';

	declare export class Entity  {
constructor(): this;
uid: number;
data: any;
addTag(tag: string): void;
removeTag(tag: string): void;
getTagList(): Collection<string>;
hasTag(tag: string): boolean;
containTag(tag: string): boolean
}
    }

	declare module 'wonder.js/dist/es2015/core/entityObject/EntityObject' {
        import type {
          Entity
        } from 'wonder.js/dist/es2015/core/Entity';

	import type {
          Hash
        } from 'wonder-commonlib/dist/es2015/Hash';

	import type {
          Collection
        } from 'wonder-commonlib/dist/es2015/Collection';

	import type {
          CustomEventRegisterData
        } from 'wonder.js/dist/es2015/event/binder/CustomEventRegister';

	import type {
          ComponentManager
        } from 'wonder.js/dist/es2015/core/entityObject/manager/ComponentManager';

	import type {
          Component
        } from 'wonder.js/dist/es2015/core/Component';

	import type {
          Geometry
        } from 'wonder.js/dist/es2015/component/geometry/Geometry';

	import type {
          Renderer
        } from 'wonder.js/dist/es2015/renderer/renderer/Renderer';

	import type {
          GameObject
        } from 'wonder.js/dist/es2015/core/entityObject/gameObject/GameObject';

	import type {
          Transform
        } from 'wonder.js/dist/es2015/component/transform/Transform';

	declare export class EntityObject mixins Entity {
bubbleParent: EntityObject;
componentDirty: boolean;
transform: Transform;
name: string;
parent: EntityObject;
customEventMap: Hash<Collection<CustomEventRegisterData>>;
componentManager: ComponentManager;
initWhenCreate(): void;
clone(config?: CloneEntityObjectConfigData): any;
init(): this;
dispose(): void;
hasChild(child: EntityObject): boolean;
addChild(child: EntityObject): EntityObject;
getChildren(): Collection<any>;
removeChild(child: EntityObject): EntityObject;
forEach(func: (entityObject: EntityObject, index: number) => void): this;
getComponent<T>(_class: any): T;
hasComponent(component: Component): boolean;
hasComponent(_class: Function): boolean;
addComponent(component: Component, isShareComponent?: boolean): this;
removeComponent(component: Component): any;
removeComponent(_class: Function): any;
forEachComponent(func: (component: Component) => void): this;
render(renderer: Renderer, camera: GameObject): void;
update(elapsed: number): void;
clearCache(): void;
getGeometry(): Geometry;
createTransform(): Transform;
afterInitChildren(): void;
getRenderList(): Collection<any>
}
	declare export type CloneEntityObjectConfigData = {
cloneChildren?: boolean,
shareGeometry?: boolean,
cloneGeometry?: boolean
};
    }

	declare module 'wonder.js/dist/es2015/core/entityObject/gameObject/GameObject' {
        import type {
          EntityObject
        } from 'wonder.js/dist/es2015/core/entityObject/EntityObject';

	import type {
          ThreeDTransform
        } from 'wonder.js/dist/es2015/component/transform/ThreeDTransform';

	import type {
          Collection
        } from 'wonder-commonlib/dist/es2015/Collection';

	declare export class GameObject mixins EntityObject {
static create(): GameObject;
transform: ThreeDTransform;
parent: GameObject;
renderGroup: number;
renderPriority: number;
isVisible: boolean;
children: Collection<GameObject>;
initWhenCreate(): void;
createTransform(): ThreeDTransform;
getRenderList(): Collection<GameObject>
}
    }

	declare module 'wonder.js/dist/es2015/core/entityObject/manager/ComponentManager' {
        import type {
          EntityObject
        } from 'wonder.js/dist/es2015/core/entityObject/EntityObject';

	import type {
          Transform
        } from 'wonder.js/dist/es2015/component/transform/Transform';

	import type {
          Collection
        } from 'wonder-commonlib/dist/es2015/Collection';

	import type {
          RendererComponent
        } from 'wonder.js/dist/es2015/component/renderer/RendererComponent';

	import type {
          Geometry
        } from 'wonder.js/dist/es2015/component/geometry/Geometry';

	import type {
          Component
        } from 'wonder.js/dist/es2015/core/Component';

	declare export class ComponentManager  {
static create(entityObject: EntityObject): ComponentManager;
constructor(entityObject: EntityObject): this;
transform: Transform;
init(): void;
dispose(): void;
removeAllComponent(): Collection<Component>;
getComponent<T>(_class: any): T;
getComponents(): Collection<any>;
findComponentByUid(uid: number): any;
forEachComponent(func: (component: Component) => void): this;
hasComponent(component: Component): boolean;
hasComponent(_class: Function): boolean;
addComponent(component: Component, isShareComponent?: boolean): this;
removeComponent(component: Component): any;
removeComponent(_class: Function): any;
getComponentCount(_class: Function): number;
getGeometry(): Geometry;
getRendererComponent(): RendererComponent
}
    }

	declare module 'wonder.js/dist/es2015/core/entityObject/manager/EntityObjectManager' {
        import type {
          EntityObject
        } from 'wonder.js/dist/es2015/core/entityObject/EntityObject';

	import type {
          Collection
        } from 'wonder-commonlib/dist/es2015/Collection';

	declare export class EntityObjectManager  {
static create(entityObject: EntityObject): EntityObjectManager;
constructor(entityObject: EntityObject): this;
init(): void;
dispose(): void;
hasChild(child: EntityObject): boolean;
addChild(child: EntityObject): this;
addChildren(children: EntityObject): any;
addChildren(children: Array<EntityObject>): any;
addChildren(children: Collection<EntityObject>): any;
forEach(func: (entityObject: EntityObject, index: number) => void): this;
filter(func: (entityObject: EntityObject) => boolean): Collection<any>;
sort(
func: (a: EntityObject, b: EntityObject) => any,
isSortSelf?: boolean): Collection<any>;
getChildren(): Collection<any>;
getAllChildren(): Collection<EntityObject>;
getChild(index: number): any;
findChildByUid(uid: number): any;
findChildByTag(tag: string): any;
findChildByName(name: string): any;
findChildrenByName(name: string): Collection<EntityObject>;
removeChild(child: EntityObject): this;
removeAllChildren(): void
}
    }

	declare module 'wonder.js/dist/es2015/core/entityObject/scene/cache/BufferTable' {
        import type {
          ElementBuffer
        } from 'wonder.js/dist/es2015/renderer/buffer/ElementBuffer';

	import type {
          Buffer
        } from 'wonder.js/dist/es2015/renderer/buffer/Buffer';

	declare export class BufferTable  {
static lastBindedArrayBufferListUidStr: string;
static lastBindedElementBuffer: ElementBuffer;
static bindIndexBuffer(indexBuffer: ElementBuffer): void;
static hasBuffer(key: string): boolean;
static addBuffer(key: string, buffer: Buffer): void;
static getBuffer<T>(key: string): T;
static dispose(): void;
static clearAll(): void;
static resetBindedArrayBuffer(): void;
static resetBindedElementBuffer(): void
}
	declare export  class BufferTableKey {
  constructor(...args: empty): mixed;
static +PROCEDURAL_VERTEX: Class<BufferTableKey__PROCEDURAL_VERTEX> & BufferTableKey__PROCEDURAL_VERTEX & 0;// 0
static +PROCEDURAL_INDEX: Class<BufferTableKey__PROCEDURAL_INDEX> & BufferTableKey__PROCEDURAL_INDEX & 1;// 1

}

declare class BufferTableKey__PROCEDURAL_VERTEX mixins BufferTableKey {}
declare class BufferTableKey__PROCEDURAL_INDEX mixins BufferTableKey {}

    }

	declare module 'wonder.js/dist/es2015/core/entityObject/scene/cache/ProgramTable' {
        import type {
          Program
        } from 'wonder.js/dist/es2015/renderer/program/Program';

	declare export class ProgramTable  {
static lastUsedProgram: Program;
static hasProgram(key: string): boolean;
static addProgram(key: string, program: Program): void;
static getProgram(key: string): Program;
static dispose(): void;
static clearAll(): void
}
    }

	declare module 'wonder.js/dist/es2015/core/entityObject/scene/gameObjectScene/GameObjectScene' {
        import type {
          Scene
        } from 'wonder.js/dist/es2015/core/entityObject/scene/Scene';

	import type {
          GameObject
        } from 'wonder.js/dist/es2015/core/entityObject/gameObject/GameObject';

	import type {
          Collection
        } from 'wonder-commonlib/dist/es2015/Collection';

	import type {
          Renderer
        } from 'wonder.js/dist/es2015/renderer/renderer/Renderer';

	declare export class GameObjectScene mixins Scene {
static create(): GameObjectScene;
currentCamera: any;
addChild(child: GameObject): GameObject;
update(elapsed: number): void;
render(renderer: Renderer): void;
getRenderList(): Collection<GameObject>;
createTransform(): any
}
    }

	declare module 'wonder.js/dist/es2015/core/entityObject/scene/Scene' {
        import type {
          EntityObject
        } from 'wonder.js/dist/es2015/core/entityObject/EntityObject';

	declare export class Scene mixins EntityObject {}
    }

	declare module 'wonder.js/dist/es2015/core/entityObject/scene/SceneDispatcher' {
        import type {
          EntityObject
        } from 'wonder.js/dist/es2015/core/entityObject/EntityObject';

	import type {
          GameObject
        } from 'wonder.js/dist/es2015/core/entityObject/gameObject/GameObject';

	import type {
          GameObjectScene
        } from 'wonder.js/dist/es2015/core/entityObject/scene/gameObjectScene/GameObjectScene';

	import type {
          Collection
        } from 'wonder-commonlib/dist/es2015/Collection';

	declare export class SceneDispatcher mixins EntityObject {
static create(): SceneDispatcher;
currentCamera: GameObject;
name: string;
gameObjectScene: GameObjectScene;
addChild(child: EntityObject): EntityObject;
dispose(): void;
hasChild(child: EntityObject): boolean;
addChildren(children: EntityObject): any;
addChildren(children: Array<EntityObject>): any;
addChildren(children: Collection<EntityObject>): any;
getChildren(): Collection<any>;
createTransform(): any
}
    }

	declare module 'wonder.js/dist/es2015/core/Main' {
        import type {
          EScreenSize
        } from 'wonder.js/dist/es2015/device/EScreenSize';

	declare export class Main  {
static setConfig(
x: {
canvasId?: null,
isTest?: boolean,
screenSize?: EScreenSize,
useDevicePixelRatio?: boolean,
contextConfig?: {
options: {
alpha: boolean,
depth: boolean,
stencil: boolean,
antialias: boolean,
premultipliedAlpha: boolean,
preserveDrawingBuffer: boolean
}
}
}): typeof Main;
static init(): typeof Main
}
    }

	declare module 'wonder.js/dist/es2015/core/data/MainData' {
        import type {
          EScreenSize
        } from 'wonder.js/dist/es2015/device/EScreenSize';

	import type {
          RectRegion
        } from 'wonder.js/dist/es2015/structure/RectRegion';

	declare export class MainData  {
static isTest: boolean;
static screenSize: EScreenSize & RectRegion
}
	declare export type ContextConfigData = {
options: {
alpha: boolean,
depth: boolean,
stencil: boolean,
antialias: boolean,
premultipliedAlpha: boolean,
preserveDrawingBuffer: boolean
}
};
    }

	declare module 'wonder.js/dist/es2015/definition/typescript/decorator/cache' {
        declare export function cacheGetter(
judgeFunc: () => boolean,
returnCacheValueFunc: () => any,
setCacheFunc: (returnVal: any) => void): (target: any, name: any, descriptor: any) => any

	declare export function cache(
judgeFunc: any,
returnCacheValueFunc: any,
setCacheFunc: any): (target: any, name: any, descriptor: any) => any

	declare export function cacheBufferForBufferContainer(): (target: any, name: any, descriptor: any) => any

	declare export function cacheBufferForBufferContainerWithFuncParam(setDataNameFuncName: string): (target: any, name: any, descriptor: any) => any

	declare export function cacheGetter(
judgeFunc: () => boolean,
returnCacheValueFunc: () => any,
setCacheFunc: (returnVal: any) => void): (target: any, name: any, descriptor: any) => any

	declare export function cache(
judgeFunc: any,
returnCacheValueFunc: any,
setCacheFunc: any): (target: any, name: any, descriptor: any) => any

	declare export function cacheBufferForBufferContainer(): (target: any, name: any, descriptor: any) => any

	declare export function cacheBufferForBufferContainerWithFuncParam(setDataNameFuncName: string): (target: any, name: any, descriptor: any) => any

    }

	declare module 'wonder.js/dist/es2015/definition/typescript/decorator/clone' {
        import type {
          EntityObject
        } from 'wonder.js/dist/es2015/core/entityObject/EntityObject';

	declare export function cloneAttributeAsBasicType(
configData?: CloneAttributeAsBasicTypeConfigData): (target: any, memberName: string | Symbol) => void

	declare export function cloneAttributeAsCloneable(
configData?: CloneAttributeAsCloneableConfigData): (target: any, memberName: string | Symbol) => void

	declare export function cloneAttributeAsCustomType(
cloneFunc: (source: any, target: any, memberName: string, cloneData: any) => void,
configData?: CloneAttributeAsCustomTypeConfigData): (target: any, memberName: string | Symbol) => void

	declare export class CloneUtils  {
static clone<T>(
sourceInstance: T,
cloneData?: any,
createDataArr?: Array<any>,
target?: any): T;
static cloneArray(arr: Array<any> | null, isDeep?: boolean): any;
static markNotClone(entityObject: EntityObject): void;
static isNotClone(entityObject: EntityObject): boolean
}
	declare export type CloneAttributeAsBasicTypeConfigData = {
order?: number
};
	declare export type CloneAttributeAsCloneableConfigData = {
order?: number
};
	declare export type CloneAttributeAsCustomTypeConfigData = {
order?: number
};
	declare export  class CloneType {
  constructor(...args: empty): mixed;
static +CLONEABLE: Class<CloneType__CLONEABLE> & CloneType__CLONEABLE & 0;// 0
static +BASIC: Class<CloneType__BASIC> & CloneType__BASIC & 1;// 1
static +CUSTOM: Class<CloneType__CUSTOM> & CloneType__CUSTOM & 2;// 2

}

declare class CloneType__CLONEABLE mixins CloneType {}
declare class CloneType__BASIC mixins CloneType {}
declare class CloneType__CUSTOM mixins CloneType {}

	declare export function cloneAttributeAsBasicType(
configData?: CloneAttributeAsBasicTypeConfigData): (target: any, memberName: string | Symbol) => void

	declare export function cloneAttributeAsCloneable(
configData?: CloneAttributeAsCloneableConfigData): (target: any, memberName: string | Symbol) => void

	declare export function cloneAttributeAsCustomType(
cloneFunc: (source: any, target: any, memberName: string, cloneData: any) => void,
configData?: CloneAttributeAsCustomTypeConfigData): (target: any, memberName: string | Symbol) => void

    }

	declare module 'wonder.js/dist/es2015/definition/typescript/decorator/contract' {
        declare export function assert(cond: boolean, message?: string): void

	declare export function describe(message: string, func: Function, preCondition?: Function, context?: any): void

	declare export function it(message: string, func: Function, context?: any): void

	declare export function requireCheck(inFunc: any): (target: any, name: any, descriptor: any) => any

	declare export function ensure(outFunc: any): (target: any, name: any, descriptor: any) => any

	declare export function requireGetterAndSetter(
inGetterFunc: any,
inSetterFunc: any): (target: any, name: any, descriptor: any) => any

	declare export function requireGetter(inFunc: any): (target: any, name: any, descriptor: any) => any

	declare export function requireSetter(inFunc: any): (target: any, name: any, descriptor: any) => any

	declare export function ensureGetterAndSetter(
outGetterFunc: any,
outSetterFunc: any): (target: any, name: any, descriptor: any) => any

	declare export function ensureGetter(outFunc: any): (target: any, name: any, descriptor: any) => any

	declare export function ensureSetter(outFunc: any): (target: any, name: any, descriptor: any) => any

	declare export function invariant(func: any): (target: any) => void

	declare export function assert(cond: boolean, message?: string): void

	declare export function describe(message: string, func: Function, preCondition?: Function, context?: any): void

	declare export function it(message: string, func: Function, context?: any): void

	declare export function requireCheck(inFunc: any): (target: any, name: any, descriptor: any) => any

	declare export function ensure(outFunc: any): (target: any, name: any, descriptor: any) => any

	declare export function requireGetterAndSetter(
inGetterFunc: any,
inSetterFunc: any): (target: any, name: any, descriptor: any) => any

	declare export function requireGetter(inFunc: any): (target: any, name: any, descriptor: any) => any

	declare export function requireSetter(inFunc: any): (target: any, name: any, descriptor: any) => any

	declare export function ensureGetterAndSetter(
outGetterFunc: any,
outSetterFunc: any): (target: any, name: any, descriptor: any) => any

	declare export function ensureGetter(outFunc: any): (target: any, name: any, descriptor: any) => any

	declare export function ensureSetter(outFunc: any): (target: any, name: any, descriptor: any) => any

	declare export function invariant(func: any): (target: any) => void

    }

	declare module 'wonder.js/dist/es2015/definition/typescript/decorator/control' {
        declare export function execOnlyOnce(flagName: string): (target: any, name: any, descriptor: any) => any

	declare export function execOnlyOnce(flagName: string): (target: any, name: any, descriptor: any) => any

    }

	declare module 'wonder.js/dist/es2015/definition/typescript/decorator/registerClass' {
        declare export function registerClass(className: string): (_class: any) => void

	declare export function registerClass(className: string): (_class: any) => void

    }

	declare module 'wonder.js/dist/es2015/definition/typescript/decorator/singleton' {
        declare export function singleton(isInitWhenCreate?: boolean): (target: any) => void

	declare export function singleton(isInitWhenCreate?: boolean): (target: any) => void

    }

	declare module 'wonder.js/dist/es2015/definition/typescript/decorator/virtual' {
        declare export function virtual(target: any, name: any, descriptor: any): any

	declare export function virtual(target: any, name: any, descriptor: any): any

    }

	declare module 'wonder.js/dist/es2015/definition/Variable' {
        declare export var root: any;
    }

	declare module 'wonder.js/dist/es2015/device/DeviceManager' {
        import type {
          Vector2
        } from 'wonder.js/dist/es2015/math/Vector2';

	import type {
          IView
        } from 'wonder.js/dist/es2015/structure/View';

	import type {
          ContextConfigData
        } from 'wonder.js/dist/es2015/core/data/MainData';

	import type {
          RectRegion
        } from 'wonder.js/dist/es2015/structure/RectRegion';

	declare export class DeviceManager  {
static getInstance(): any;
scissorTest: boolean;
setScissor(x: number, y: number, width: number, height: number): void;
setViewport(x: number, y: number, width: number, height: number): void;
getViewport(): RectRegion;
depthTest: boolean;
depthFunc: EDepthFunction;
side: ESide;
polygonOffset: Vector2;
polygonOffsetMode: EPolygonOffsetMode;
depthWrite: boolean;
blend: boolean;
alphaToCoverage: boolean;
view: IView;
gl: WebGLRenderingContext;
contextConfig: ContextConfigData;
setBlendFunc(blendSrc: EBlendFunc, blendDst: EBlendFunc): void;
setBlendEquation(blendEquation: EBlendEquation): void;
setBlendFuncSeparate(blendFuncSeparate: Array<EBlendFunc>): void;
setBlendEquationSeparate(blendEquationSeparate: Array<EBlendEquation>): void;
setColorWrite(writeRed: any, writeGreen: any, writeBlue: any, writeAlpha: any): void;
clear(options: any): void;
createGL(
canvasId: string,
contextConfig: ContextConfigData,
useDevicePixelRatio: boolean): void;
setScreen(): void;
setHardwareScaling(level: number): void;
setPixelRatio(pixelRatio: number): void;
getPixelRatio(): number
}
	declare export  class EDepthFunction {
  constructor(...args: empty): mixed;
static +NEVER: Class<EDepthFunction__NEVER> & EDepthFunction__NEVER & 0;// 0
static +ALWAYS: Class<EDepthFunction__ALWAYS> & EDepthFunction__ALWAYS & 1;// 1
static +LESS: Class<EDepthFunction__LESS> & EDepthFunction__LESS & 2;// 2
static +LEQUAL: Class<EDepthFunction__LEQUAL> & EDepthFunction__LEQUAL & 3;// 3
static +EQUAL: Class<EDepthFunction__EQUAL> & EDepthFunction__EQUAL & 4;// 4
static +GEQUAL: Class<EDepthFunction__GEQUAL> & EDepthFunction__GEQUAL & 5;// 5
static +GREATER: Class<EDepthFunction__GREATER> & EDepthFunction__GREATER & 6;// 6
static +NOTEQUAL: Class<EDepthFunction__NOTEQUAL> & EDepthFunction__NOTEQUAL & 7;// 7

}

declare class EDepthFunction__NEVER mixins EDepthFunction {}
declare class EDepthFunction__ALWAYS mixins EDepthFunction {}
declare class EDepthFunction__LESS mixins EDepthFunction {}
declare class EDepthFunction__LEQUAL mixins EDepthFunction {}
declare class EDepthFunction__EQUAL mixins EDepthFunction {}
declare class EDepthFunction__GEQUAL mixins EDepthFunction {}
declare class EDepthFunction__GREATER mixins EDepthFunction {}
declare class EDepthFunction__NOTEQUAL mixins EDepthFunction {}

	declare export  class ESide {
  constructor(...args: empty): mixed;
static +NONE: Class<ESide__NONE> & ESide__NONE & 0;// 0
static +BOTH: Class<ESide__BOTH> & ESide__BOTH & 1;// 1
static +BACK: Class<ESide__BACK> & ESide__BACK & 2;// 2
static +FRONT: Class<ESide__FRONT> & ESide__FRONT & 3;// 3

}

declare class ESide__NONE mixins ESide {}
declare class ESide__BOTH mixins ESide {}
declare class ESide__BACK mixins ESide {}
declare class ESide__FRONT mixins ESide {}

	declare export  class EPolygonOffsetMode {
  constructor(...args: empty): mixed;
static +NONE: Class<EPolygonOffsetMode__NONE> & EPolygonOffsetMode__NONE & 0;// 0
static +IN: Class<EPolygonOffsetMode__IN> & EPolygonOffsetMode__IN & 1;// 1
static +OUT: Class<EPolygonOffsetMode__OUT> & EPolygonOffsetMode__OUT & 2;// 2
static +CUSTOM: Class<EPolygonOffsetMode__CUSTOM> & EPolygonOffsetMode__CUSTOM & 3;// 3

}

declare class EPolygonOffsetMode__NONE mixins EPolygonOffsetMode {}
declare class EPolygonOffsetMode__IN mixins EPolygonOffsetMode {}
declare class EPolygonOffsetMode__OUT mixins EPolygonOffsetMode {}
declare class EPolygonOffsetMode__CUSTOM mixins EPolygonOffsetMode {}

	declare export  class EBlendFunc {
  constructor(...args: empty): mixed;
static +ZERO: Class<EBlendFunc__ZERO> & EBlendFunc__ZERO & 0;// 0
static +ONE: Class<EBlendFunc__ONE> & EBlendFunc__ONE & 1;// 1
static +SRC_COLOR: Class<EBlendFunc__SRC_COLOR> & EBlendFunc__SRC_COLOR & 2;// 2
static +ONE_MINUS_SRC_COLOR: Class<EBlendFunc__ONE_MINUS_SRC_COLOR> & EBlendFunc__ONE_MINUS_SRC_COLOR & 3;// 3
static +DST_COLOR: Class<EBlendFunc__DST_COLOR> & EBlendFunc__DST_COLOR & 4;// 4
static +ONE_MINUS_DST_COLOR: Class<EBlendFunc__ONE_MINUS_DST_COLOR> & EBlendFunc__ONE_MINUS_DST_COLOR & 5;// 5
static +SRC_ALPHA: Class<EBlendFunc__SRC_ALPHA> & EBlendFunc__SRC_ALPHA & 6;// 6
static +SRC_ALPHA_SATURATE: Class<EBlendFunc__SRC_ALPHA_SATURATE> & EBlendFunc__SRC_ALPHA_SATURATE & 7;// 7
static +ONE_MINUS_SRC_ALPHA: Class<EBlendFunc__ONE_MINUS_SRC_ALPHA> & EBlendFunc__ONE_MINUS_SRC_ALPHA & 8;// 8
static +DST_ALPHA: Class<EBlendFunc__DST_ALPHA> & EBlendFunc__DST_ALPHA & 9;// 9
static +ONE_MINUS_DST_ALPH: Class<EBlendFunc__ONE_MINUS_DST_ALPH> & EBlendFunc__ONE_MINUS_DST_ALPH & 10;// 10

}

declare class EBlendFunc__ZERO mixins EBlendFunc {}
declare class EBlendFunc__ONE mixins EBlendFunc {}
declare class EBlendFunc__SRC_COLOR mixins EBlendFunc {}
declare class EBlendFunc__ONE_MINUS_SRC_COLOR mixins EBlendFunc {}
declare class EBlendFunc__DST_COLOR mixins EBlendFunc {}
declare class EBlendFunc__ONE_MINUS_DST_COLOR mixins EBlendFunc {}
declare class EBlendFunc__SRC_ALPHA mixins EBlendFunc {}
declare class EBlendFunc__SRC_ALPHA_SATURATE mixins EBlendFunc {}
declare class EBlendFunc__ONE_MINUS_SRC_ALPHA mixins EBlendFunc {}
declare class EBlendFunc__DST_ALPHA mixins EBlendFunc {}
declare class EBlendFunc__ONE_MINUS_DST_ALPH mixins EBlendFunc {}

	declare export  class EBlendEquation {
  constructor(...args: empty): mixed;
static +ADD: Class<EBlendEquation__ADD> & EBlendEquation__ADD & 0;// 0
static +SUBTRACT: Class<EBlendEquation__SUBTRACT> & EBlendEquation__SUBTRACT & 1;// 1
static +REVERSE_SUBTRAC: Class<EBlendEquation__REVERSE_SUBTRAC> & EBlendEquation__REVERSE_SUBTRAC & 2;// 2

}

declare class EBlendEquation__ADD mixins EBlendEquation {}
declare class EBlendEquation__SUBTRACT mixins EBlendEquation {}
declare class EBlendEquation__REVERSE_SUBTRAC mixins EBlendEquation {}

	declare export  class EBlendType {
  constructor(...args: empty): mixed;
static +NONE: Class<EBlendType__NONE> & EBlendType__NONE & 0;// 0
static +NORMAL: Class<EBlendType__NORMAL> & EBlendType__NORMAL & 1;// 1
static +ADDITIVE: Class<EBlendType__ADDITIVE> & EBlendType__ADDITIVE & 2;// 2
static +ADDITIVEALPHA: Class<EBlendType__ADDITIVEALPHA> & EBlendType__ADDITIVEALPHA & 3;// 3
static +MULTIPLICATIVE: Class<EBlendType__MULTIPLICATIVE> & EBlendType__MULTIPLICATIVE & 4;// 4
static +PREMULTIPLIED: Class<EBlendType__PREMULTIPLIED> & EBlendType__PREMULTIPLIED & 5;// 5

}

declare class EBlendType__NONE mixins EBlendType {}
declare class EBlendType__NORMAL mixins EBlendType {}
declare class EBlendType__ADDITIVE mixins EBlendType {}
declare class EBlendType__ADDITIVEALPHA mixins EBlendType {}
declare class EBlendType__MULTIPLICATIVE mixins EBlendType {}
declare class EBlendType__PREMULTIPLIED mixins EBlendType {}

	declare export  class ECanvasType {
  constructor(...args: empty): mixed;
static +TwoDUI: Class<ECanvasType__TwoDUI> & ECanvasType__TwoDUI & 0;// 0

}

declare class ECanvasType__TwoDUI mixins ECanvasType {}

	declare export type CanvasMapData = {
canvas: HTMLCanvasElement,
context: CanvasRenderingContext2D
};
    }

	declare module 'wonder.js/dist/es2015/device/EScreenSize' {
        declare export  class EScreenSize {
  constructor(...args: empty): mixed;
static +FULL: Class<EScreenSize__FULL> & EScreenSize__FULL & 0;// 0

}

declare class EScreenSize__FULL mixins EScreenSize {}

    }

	declare module 'wonder.js/dist/es2015/device/GPUDetector' {
        declare export class GPUDetector  {
static getInstance(): any;
gl: any;
maxTextureUnit: number;
maxTextureSize: number;
maxCubemapTextureSize: number;
maxAnisotropy: number;
maxBoneCount: number;
extensionCompressedTextureS3TC: any;
extensionTextureFilterAnisotropic: any;
extensionInstancedArrays: any;
extensionUintIndices: boolean;
extensionDepthTexture: boolean;
extensionVAO: any;
extensionStandardDerivatives: boolean;
precision: number;
detect(): void
}
	declare export  class EGPUPrecision {
  constructor(...args: empty): mixed;
static +HIGHP: Class<EGPUPrecision__HIGHP> & EGPUPrecision__HIGHP & 0;// 0
static +MEDIUMP: Class<EGPUPrecision__MEDIUMP> & EGPUPrecision__MEDIUMP & 1;// 1
static +LOWP: Class<EGPUPrecision__LOWP> & EGPUPrecision__LOWP & 2;// 2

}

declare class EGPUPrecision__HIGHP mixins EGPUPrecision {}
declare class EGPUPrecision__MEDIUMP mixins EGPUPrecision {}
declare class EGPUPrecision__LOWP mixins EGPUPrecision {}

    }

	declare module 'wonder.js/dist/es2015/event/binder/CustomEventBinder' {
        import type {
          EventBinder
        } from 'wonder.js/dist/es2015/event/binder/EventBinder';

	import type {
          EEventName
        } from 'wonder.js/dist/es2015/event/object/EventNameHandler';

	import type {
          EntityObject
        } from 'wonder.js/dist/es2015/core/entityObject/EntityObject';

	declare export class CustomEventBinder mixins EventBinder {
static getInstance(): any;
on(eventName: EEventName | string, handler: Function): void;
on(eventName: EEventName | string, handler: Function, priority: number): void;
on(target: EntityObject, eventName: EEventName | string, handler: Function): void;
on(
target: EntityObject,
eventName: EEventName | string,
handler: Function,
priority: number): void;
off(): void;
off(eventName: EEventName | string): void;
off(target: EntityObject): void;
off(eventName: EEventName | string, handler: Function): void;
off(target: EntityObject, eventName: EEventName | string): void;
off(target: EntityObject, eventName: EEventName | string, handler: Function): void
}
    }

	declare module 'wonder.js/dist/es2015/event/binder/CustomEventRegister' {
        import type {
          EventRegister
        } from 'wonder.js/dist/es2015/event/binder/EventRegister';

	import type {
          CustomEventListenerMap
        } from 'wonder.js/dist/es2015/event/structure/CustomEventListenerMap';

	import type {
          EEventName
        } from 'wonder.js/dist/es2015/event/object/EventNameHandler';

	import type {
          EntityObject
        } from 'wonder.js/dist/es2015/core/entityObject/EntityObject';

	declare export class CustomEventRegister mixins EventRegister {
static getInstance(): any;
listenerMap: CustomEventListenerMap;
register(
eventName: EEventName,
handler: Function,
originHandler: Function,
domHandler: Function,
priority: number): any;
register(
target: EntityObject,
eventName: EEventName,
handler: Function,
originHandler: Function,
domHandler: Function,
priority: number): any;
remove(eventName: EEventName): any;
remove(target: EntityObject): any;
remove(eventName: EEventName, handler: Function): any;
remove(uid: number, eventName: EEventName): any;
remove(target: EntityObject, eventName: EEventName): any;
remove(target: EntityObject, eventName: EEventName, handler: Function): any;
setBubbleParent(target: EntityObject, parent: EntityObject): void
}
	declare export type CustomEventRegisterData = {
target: EntityObject,
originHandler: Function,
handler: Function,
domHandler: Function,
priority: number
};
    }

	declare module 'wonder.js/dist/es2015/event/binder/DomEventBinder' {
        import type {
          EventBinder
        } from 'wonder.js/dist/es2015/event/binder/EventBinder';

	import type {
          EEventName
        } from 'wonder.js/dist/es2015/event/object/EventNameHandler';

	declare export class DomEventBinder mixins EventBinder {
static getInstance(): any;
on(eventName: EEventName | string, handler: Function): void;
on(eventName: EEventName | string, handler: Function, priority: number): void;
on(dom: HTMLElement, eventName: EEventName | string, handler: Function): void;
on(
dom: HTMLElement,
eventName: EEventName | string,
handler: Function,
priority: number): void;
off(): void;
off(eventName: EEventName | string): void;
off(dom: HTMLElement): void;
off(eventName: EEventName | string, handler: Function): void;
off(dom: HTMLElement, eventName: EEventName): void;
off(dom: HTMLElement, eventName: EEventName, handler: Function): void
}
    }

	declare module 'wonder.js/dist/es2015/event/binder/DomEventRegister' {
        import type {
          EventRegister
        } from 'wonder.js/dist/es2015/event/binder/EventRegister';

	import type {
          DomEventListenerMap
        } from 'wonder.js/dist/es2015/event/structure/DomEventListenerMap';

	import type {
          EEventName
        } from 'wonder.js/dist/es2015/event/object/EventNameHandler';

	import type {
          Hash
        } from 'wonder-commonlib/dist/es2015/Hash';

	import type {
          EntityObject
        } from 'wonder.js/dist/es2015/core/entityObject/EntityObject';

	declare export class DomEventRegister mixins EventRegister {
static getInstance(): any;
listenerMap: DomEventListenerMap;
register(
dom: HTMLElement,
eventName: EEventName,
eventData: Hash<any>,
handler: Function,
originHandler: Function,
domHandler: Function,
priority: number): void;
remove(eventName: EEventName): any;
remove(eventName: EEventName, handler: Function): any;
remove(dom: HTMLElement, eventName: EEventName): any;
remove(dom: HTMLElement, eventName: EEventName, handler: Function): any;
isBinded(dom: HTMLElement, eventName: EEventName): boolean;
getDomHandler(dom: HTMLElement, eventName: EEventName): Function
}
	declare export type DomEventRegisterData = {
dom?: HTMLElement,
target?: EntityObject,
eventData: Hash<any>,
originHandler: Function,
handler: Function,
domHandler: Function,
priority: number
};
    }

	declare module 'wonder.js/dist/es2015/event/binder/EventBinder' {
        declare export class EventBinder  {
on(...args: any[]): void;
off(...args: any[]): void
}
    }

	declare module 'wonder.js/dist/es2015/event/binder/EventRegister' {
        import type {
          EventListenerMap
        } from 'wonder.js/dist/es2015/event/structure/EventListenerMap';

	import type {
          EEventName
        } from 'wonder.js/dist/es2015/event/object/EventNameHandler';

	import type {
          EntityObject
        } from 'wonder.js/dist/es2015/core/entityObject/EntityObject';

	import type {
          Collection
        } from 'wonder-commonlib/dist/es2015/Collection';

	declare export class EventRegister  {
listenerMap: EventListenerMap;
register(...args: any[]): void;
remove(...args: any[]): any;
getEventRegisterDataList(eventName: EEventName): any;
getEventRegisterDataList(currentTarget: EntityObject, eventName: EEventName): any;
getEventRegisterDataList(dom: HTMLElement, eventName: EEventName): any;
forEachAll(func: (list: Collection<any>, eventName: EEventName) => void): void;
forEachEventName(
func: (list: Collection<EventRegisterData>, eventName: EEventName) => void): void;
clear(): void;
getChild(target: EntityObject): any;
getChild(dom: HTMLElement): any;
getChild(target: EntityObject, eventName: EEventName): any;
getChild(dom: HTMLElement, eventName: EEventName): any
}
	declare export type EventRegisterData = {
originHandler: Function,
handler: Function,
domHandler: Function,
priority: number
};
    }

	declare module 'wonder.js/dist/es2015/event/dispatcher/CustomEventDispatcher' {
        import type {
          EventDispatcher
        } from 'wonder.js/dist/es2015/event/dispatcher/EventDispatcher';

	import type {
          Event
        } from 'wonder.js/dist/es2015/event/object/Event';

	import type {
          EntityObject
        } from 'wonder.js/dist/es2015/core/entityObject/EntityObject';

	declare export class CustomEventDispatcher mixins EventDispatcher {
static getInstance(): any;
trigger(event: Event): boolean;
trigger(event: Event, userData: any): boolean;
trigger(target: EntityObject, event: Event): boolean;
trigger(target: EntityObject, event: Event, notSetTarget: boolean): boolean;
trigger(target: EntityObject, event: Event, userData: any): boolean;
trigger(
target: EntityObject,
event: Event,
userData: any,
notSetTarget: boolean): boolean;
emit(target: EntityObject, eventObject: Event, userData?: any): void;
broadcast(target: EntityObject, eventObject: Event, userData?: any): void
}
    }

	declare module 'wonder.js/dist/es2015/event/dispatcher/DomEventDispatcher' {
        import type {
          EventDispatcher
        } from 'wonder.js/dist/es2015/event/dispatcher/EventDispatcher';

	import type {
          Event
        } from 'wonder.js/dist/es2015/event/object/Event';

	declare export class DomEventDispatcher mixins EventDispatcher {
static getInstance(): any;
trigger(event: Event): void;
trigger(dom: HTMLElement, event: Event): void
}
    }

	declare module 'wonder.js/dist/es2015/event/dispatcher/EventDispatcher' {
        declare export class EventDispatcher  {
trigger(...args: any[]): any
}
    }

	declare module 'wonder.js/dist/es2015/event/EEngineEvent' {
        declare export  class EEngineEvent {
  constructor(...args: empty): mixed;
static +STARTLOOP: Class<EEngineEvent__STARTLOOP> & EEngineEvent__STARTLOOP & 0;// 0
static +ENDLOOP: Class<EEngineEvent__ENDLOOP> & EEngineEvent__ENDLOOP & 1;// 1
static +POINT_TAP: Class<EEngineEvent__POINT_TAP> & EEngineEvent__POINT_TAP & 2;// 2
static +POINT_DOWN: Class<EEngineEvent__POINT_DOWN> & EEngineEvent__POINT_DOWN & 3;// 3
static +POINT_UP: Class<EEngineEvent__POINT_UP> & EEngineEvent__POINT_UP & 4;// 4
static +POINT_MOVE: Class<EEngineEvent__POINT_MOVE> & EEngineEvent__POINT_MOVE & 5;// 5
static +POINT_OVER: Class<EEngineEvent__POINT_OVER> & EEngineEvent__POINT_OVER & 6;// 6
static +POINT_OUT: Class<EEngineEvent__POINT_OUT> & EEngineEvent__POINT_OUT & 7;// 7
static +POINT_SCALE: Class<EEngineEvent__POINT_SCALE> & EEngineEvent__POINT_SCALE & 8;// 8
static +POINT_DRAG: Class<EEngineEvent__POINT_DRAG> & EEngineEvent__POINT_DRAG & 9;// 9
static +TRANSFORM_TRANSLATE: Class<EEngineEvent__TRANSFORM_TRANSLATE> & EEngineEvent__TRANSFORM_TRANSLATE & 10;// 10
static +TRANSFORM_ROTATE: Class<EEngineEvent__TRANSFORM_ROTATE> & EEngineEvent__TRANSFORM_ROTATE & 11;// 11
static +TRANSFORM_SCALE: Class<EEngineEvent__TRANSFORM_SCALE> & EEngineEvent__TRANSFORM_SCALE & 12;// 12

}

declare class EEngineEvent__STARTLOOP mixins EEngineEvent {}
declare class EEngineEvent__ENDLOOP mixins EEngineEvent {}
declare class EEngineEvent__POINT_TAP mixins EEngineEvent {}
declare class EEngineEvent__POINT_DOWN mixins EEngineEvent {}
declare class EEngineEvent__POINT_UP mixins EEngineEvent {}
declare class EEngineEvent__POINT_MOVE mixins EEngineEvent {}
declare class EEngineEvent__POINT_OVER mixins EEngineEvent {}
declare class EEngineEvent__POINT_OUT mixins EEngineEvent {}
declare class EEngineEvent__POINT_SCALE mixins EEngineEvent {}
declare class EEngineEvent__POINT_DRAG mixins EEngineEvent {}
declare class EEngineEvent__TRANSFORM_TRANSLATE mixins EEngineEvent {}
declare class EEngineEvent__TRANSFORM_ROTATE mixins EEngineEvent {}
declare class EEngineEvent__TRANSFORM_SCALE mixins EEngineEvent {}

    }

	declare module 'wonder.js/dist/es2015/event/EventManager' {
        import type {
          EEventName
        } from 'wonder.js/dist/es2015/event/object/EventNameHandler';

	import type {
          EEngineEvent
        } from 'wonder.js/dist/es2015/event/EEngineEvent';

	import type {
          EntityObject
        } from 'wonder.js/dist/es2015/core/entityObject/EntityObject';

	import type {
          Event
        } from 'wonder.js/dist/es2015/event/object/Event';

	import type {
          FromEventPatternStream
        } from 'wonder-frp/dist/es2015/stream/FromEventPatternStream';

	declare export class EventManager  {
static on(eventName: EEventName | EEngineEvent | string, handler: Function): void;
static on(
eventName: EEventName | EEngineEvent | string,
handler: Function,
priority: number): void;
static on(
target: EntityObject,
eventName: EEventName | EEngineEvent | string,
handler: Function): void;
static on(
dom: HTMLElement,
eventName: EEventName | EEngineEvent | string,
handler: Function): void;
static on(
target: EntityObject,
eventName: EEventName | EEngineEvent | string,
handler: Function,
priority: number): void;
static on(
dom: HTMLElement,
eventName: EEventName | EEngineEvent | string,
handler: Function,
priority: number): void;
static off(): void;
static off(eventName: EEventName | EEngineEvent | string): void;
static off(target: EntityObject): void;
static off(dom: HTMLElement): void;
static off(eventName: EEventName | EEngineEvent | string, handler: Function): void;
static off(target: EntityObject, eventName: EEventName | EEngineEvent | string): void;
static off(dom: HTMLElement, eventName: EEventName): void;
static off(
target: EntityObject,
eventName: EEventName | EEngineEvent | string,
handler: Function): void;
static off(dom: HTMLElement, eventName: EEventName, handler: Function): void;
static trigger(event: Event): void;
static trigger(event: Event, userData: any): void;
static trigger(target: EntityObject, event: Event): void;
static trigger(dom: HTMLElement, event: Event): void;
static trigger(target: EntityObject, event: Event, userData: any): void;
static trigger(target: EntityObject, event: Event, userData: any, notSetTarget: boolean): void;
static broadcast(target: EntityObject, event: Event): any;
static broadcast(target: EntityObject, event: Event, userData: any): any;
static emit(target: EntityObject, event: Event): any;
static emit(target: EntityObject, event: Event, userData: any): any;
static fromEvent(eventName: EEventName | EEngineEvent | string): FromEventPatternStream;
static fromEvent(
eventName: EEventName | EEngineEvent | string,
priority: number): FromEventPatternStream;
static fromEvent(
target: EntityObject,
eventName: EEventName | EEngineEvent | string): FromEventPatternStream;
static fromEvent(
dom: HTMLElement,
eventName: EEventName | EEngineEvent | string): FromEventPatternStream;
static fromEvent(
target: EntityObject,
eventName: EEventName | EEngineEvent | string,
priority: number): FromEventPatternStream;
static fromEvent(
dom: HTMLElement,
eventName: EEventName | EEngineEvent | string,
priority: number): FromEventPatternStream;
static setBubbleParent(target: EntityObject, parent: any): void
}
    }

	declare module 'wonder.js/dist/es2015/event/factory/EventBinderFactory' {
        import type {
          EEventName
        } from 'wonder.js/dist/es2015/event/object/EventNameHandler';

	declare export class EventBinderFactory  {
static createEventBinder(eventName: EEventName): any
}
    }

	declare module 'wonder.js/dist/es2015/event/factory/EventDispatcherFactory' {
        import type {
          Event
        } from 'wonder.js/dist/es2015/event/object/Event';

	declare export class EventDispatcherFactory  {
static createEventDispatcher(event: Event): any
}
    }

	declare module 'wonder.js/dist/es2015/event/factory/EventHandlerFactory' {
        import type {
          EEventType
        } from 'wonder.js/dist/es2015/event/object/EEventType';

	declare export class EventHandlerFactory  {
static createEventHandler(eventType: EEventType): any
}
    }

	declare module 'wonder.js/dist/es2015/event/handler/CustomEventHandler' {
        import type {
          EventHandler
        } from 'wonder.js/dist/es2015/event/handler/EventHandler';

	import type {
          EntityObject
        } from 'wonder.js/dist/es2015/core/entityObject/EntityObject';

	import type {
          Event
        } from 'wonder.js/dist/es2015/event/object/Event';

	declare export class CustomEventHandler mixins EventHandler {
static getInstance(): any;
on(eventName: string, handler: Function, priority: number): void;
on(
target: EntityObject,
eventName: string,
handler: Function,
priority: number): void;
off(eventName: string): void;
off(uid: number, eventName: string): void;
off(eventName: string, handler: Function): void;
off(target: EntityObject, eventName: string, handler: Function): void;
trigger(event: Event): boolean;
trigger(event: Event, userData: any): boolean;
trigger(target: EntityObject, event: Event, notSetTarget: boolean): boolean;
trigger(
target: EntityObject,
event: Event,
userData: any,
notSetTarget: boolean): boolean
}
    }

	declare module 'wonder.js/dist/es2015/event/handler/DomEventHandler' {
        import type {
          EventHandler
        } from 'wonder.js/dist/es2015/event/handler/EventHandler';

	import type {
          EEventName
        } from 'wonder.js/dist/es2015/event/object/EventNameHandler';

	import type {
          Event
        } from 'wonder.js/dist/es2015/event/object/Event';

	import type {
          IEventData
        } from 'wonder.js/dist/es2015/event/interface/IEventData';

	import type {
          Hash
        } from 'wonder-commonlib/dist/es2015/Hash';

	declare export class DomEventHandler mixins EventHandler {
off(): void;
off(eventName: EEventName): void;
off(eventName: EEventName, handler: Function): void;
off(dom: HTMLElement, eventName: EEventName): void;
off(dom: HTMLElement, eventName: EEventName, handler: Function): void;
trigger(event: Event): void;
trigger(dom: HTMLElement, event: Event): void;
triggerDomEvent(dom: HTMLElement, event: IEventData, eventName: EEventName): any;
addEngineHandler(eventName: EEventName, handler: Function): any;
getDefaultDom(): HTMLElement;
createEventData(): Hash<any>;
clearHandler(): void;
buildDomHandler(dom: HTMLElement, eventName: EEventName): (event: any) => any;
handler(
dom: HTMLElement,
eventName: EEventName,
handler: Function,
priority: number): void
}
    }

	declare module 'wonder.js/dist/es2015/event/handler/EventHandler' {
        declare export class EventHandler  {
on(...args: any[]): any;
off(...args: any[]): any;
trigger(...args: any[]): any
}
    }

	declare module 'wonder.js/dist/es2015/event/handler/KeyboardEventHandler' {
        import type {
          DomEventHandler
        } from 'wonder.js/dist/es2015/event/handler/DomEventHandler';

	import type {
          EEventName
        } from 'wonder.js/dist/es2015/event/object/EventNameHandler';

	import type {
          KeyboardEvent
        } from 'wonder.js/dist/es2015/event/object/KeyboardEvent';

	import type {
          IKeyboardEventData
        } from 'wonder.js/dist/es2015/event/interface/IEventData';

	import type {
          Hash
        } from 'wonder-commonlib/dist/es2015/Hash';

	declare export class KeyboardEventHandler mixins DomEventHandler {
static getInstance(): any;
on(
eventName: EEventName,
handler: (event: KeyboardEvent) => void,
priority: number): any;
on(
dom: HTMLElement,
eventName: EEventName,
handler: (event: KeyboardEvent) => void,
priority: number): any;
triggerDomEvent(dom: HTMLElement, event: IKeyboardEventData, eventName: EEventName): void;
getDefaultDom(): HTMLElement;
addEngineHandler(eventName: EEventName, handler: (event: KeyboardEvent) => void): any;
createEventData(): Hash<any>
}
    }

	declare module 'wonder.js/dist/es2015/event/handler/MouseEventHandler' {
        import type {
          PointEventHandler
        } from 'wonder.js/dist/es2015/event/handler/PointEventHandler';

	import type {
          EEventName
        } from 'wonder.js/dist/es2015/event/object/EventNameHandler';

	import type {
          MouseEvent
        } from 'wonder.js/dist/es2015/event/object/MouseEvent';

	import type {
          IMouseEventData
        } from 'wonder.js/dist/es2015/event/interface/IEventData';

	declare export class MouseEventHandler mixins PointEventHandler {
static getInstance(): any;
addEngineHandler(eventName: EEventName, handler: (event: MouseEvent) => void): any;
createEventObject(dom: HTMLElement, event: IMouseEventData, eventName: EEventName): MouseEvent
}
    }

	declare module 'wonder.js/dist/es2015/event/handler/PointEventHandler' {
        import type {
          DomEventHandler
        } from 'wonder.js/dist/es2015/event/handler/DomEventHandler';

	import type {
          EEventName
        } from 'wonder.js/dist/es2015/event/object/EventNameHandler';

	import type {
          DomEvent
        } from 'wonder.js/dist/es2015/event/object/DomEvent';

	import type {
          IEventData
        } from 'wonder.js/dist/es2015/event/interface/IEventData';

	import type {
          Hash
        } from 'wonder-commonlib/dist/es2015/Hash';

	import type {
          MouseEvent
        } from 'wonder.js/dist/es2015/event/object/MouseEvent';

	import type {
          TouchEvent
        } from 'wonder.js/dist/es2015/event/object/TouchEvent';

	declare export class PointEventHandler mixins DomEventHandler {
on(
eventName: EEventName,
handler: (event: DomEvent) => void,
priority: number): any;
on(
dom: HTMLElement,
eventName: EEventName,
handler: (event: DomEvent) => void,
priority: number): any;
createEventObject(dom: HTMLElement, event: IEventData, eventName: EEventName): DomEvent;
getDefaultDom(): HTMLElement;
triggerDomEvent(dom: HTMLElement, event: IEventData, eventName: EEventName): void;
createEventData(): Hash<any>;
handleMove(
handler: (event: MouseEvent | TouchEvent) => void): (event: MouseEvent | TouchEvent, eventData: Hash<any>) => void
}
    }

	declare module 'wonder.js/dist/es2015/event/handler/TouchEventHandler' {
        import type {
          PointEventHandler
        } from 'wonder.js/dist/es2015/event/handler/PointEventHandler';

	import type {
          EEventName
        } from 'wonder.js/dist/es2015/event/object/EventNameHandler';

	import type {
          TouchEvent
        } from 'wonder.js/dist/es2015/event/object/TouchEvent';

	import type {
          ITouchEventData
        } from 'wonder.js/dist/es2015/event/interface/IEventData';

	declare export class TouchEventHandler mixins PointEventHandler {
static getInstance(): any;
addEngineHandler(eventName: EEventName, handler: (event: TouchEvent) => void): any;
createEventObject(dom: HTMLElement, event: ITouchEventData, eventName: EEventName): TouchEvent
}
    }

	declare module 'wonder.js/dist/es2015/event/object/CustomEvent' {
        import type {
          Event
        } from 'wonder.js/dist/es2015/event/object/Event';

	import type {
          EEventType
        } from 'wonder.js/dist/es2015/event/object/EEventType';

	import type {
          DomEvent
        } from 'wonder.js/dist/es2015/event/object/DomEvent';

	declare export class CustomEvent mixins Event {
static create(eventName: string): any;
static create(eventName: string, userData: any): any;
constructor(eventName: string): this;
constructor(eventName: string, userData: any): this;
type: EEventType;
userData: any;
copyPublicAttri(destination: any, source: any): any;
clone(): CustomEvent;
getDataFromDomEvent(event: DomEvent): void
}
    }

	declare module 'wonder.js/dist/es2015/event/object/DomEvent' {
        import type {
          Event
        } from 'wonder.js/dist/es2015/event/object/Event';

	import type {
          EEventName
        } from 'wonder.js/dist/es2015/event/object/EventNameHandler';

	import type {
          CustomEvent
        } from 'wonder.js/dist/es2015/event/object/CustomEvent';

	declare export class DomEvent mixins Event {
constructor(event: any, eventName: EEventName): this;
event: any;
preventDefault(): void;
getDataFromCustomEvent(event: CustomEvent): void
}
    }

	declare module 'wonder.js/dist/es2015/event/object/EEventPhase' {
        declare export  class EEventPhase {
  constructor(...args: empty): mixed;
static +BROADCAST: Class<EEventPhase__BROADCAST> & EEventPhase__BROADCAST & 0;// 0
static +EMIT: Class<EEventPhase__EMIT> & EEventPhase__EMIT & 1;// 1

}

declare class EEventPhase__BROADCAST mixins EEventPhase {}
declare class EEventPhase__EMIT mixins EEventPhase {}

    }

	declare module 'wonder.js/dist/es2015/event/object/EEventType' {
        declare export  class EEventType {
  constructor(...args: empty): mixed;
static +MOUSE: Class<EEventType__MOUSE> & EEventType__MOUSE & 0;// 0
static +TOUCH: Class<EEventType__TOUCH> & EEventType__TOUCH & 1;// 1
static +POINT: Class<EEventType__POINT> & EEventType__POINT & 2;// 2
static +KEYBOARD: Class<EEventType__KEYBOARD> & EEventType__KEYBOARD & 3;// 3
static +CUSTOM: Class<EEventType__CUSTOM> & EEventType__CUSTOM & 4;// 4

}

declare class EEventType__MOUSE mixins EEventType {}
declare class EEventType__TOUCH mixins EEventType {}
declare class EEventType__POINT mixins EEventType {}
declare class EEventType__KEYBOARD mixins EEventType {}
declare class EEventType__CUSTOM mixins EEventType {}

    }

	declare module 'wonder.js/dist/es2015/event/object/EMouseButton' {
        declare export  class EMouseButton {
  constructor(...args: empty): mixed;
static +LEFT: Class<EMouseButton__LEFT> & EMouseButton__LEFT & 0;// 0
static +RIGHT: Class<EMouseButton__RIGHT> & EMouseButton__RIGHT & 1;// 1
static +CENTER: Class<EMouseButton__CENTER> & EMouseButton__CENTER & 2;// 2

}

declare class EMouseButton__LEFT mixins EMouseButton {}
declare class EMouseButton__RIGHT mixins EMouseButton {}
declare class EMouseButton__CENTER mixins EMouseButton {}

    }

	declare module 'wonder.js/dist/es2015/event/object/Event' {
        import type {
          EEventName
        } from 'wonder.js/dist/es2015/event/object/EventNameHandler';

	import type {
          EEventType
        } from 'wonder.js/dist/es2015/event/object/EEventType';

	import type {
          EEngineEvent
        } from 'wonder.js/dist/es2015/event/EEngineEvent';

	import type {
          EntityObject
        } from 'wonder.js/dist/es2015/core/entityObject/EntityObject';

	import type {
          EEventPhase
        } from 'wonder.js/dist/es2015/event/object/EEventPhase';

	declare export class Event  {
constructor(eventName: EEventName): this;
type: EEventType;
name: string | EEventName | EEngineEvent;
target: HTMLElement | EntityObject;
currentTarget: HTMLElement | EntityObject;
isStopPropagation: boolean;
phase: EEventPhase;
clone(): any;
stopPropagation(): void;
copyMember(destination: Event, source: Event, memberArr: [any]): Event
}
    }

	declare module 'wonder.js/dist/es2015/event/object/EventNameHandler' {
        declare export  class EEventName {
  constructor(...args: empty): mixed;
static +CLICK: Class<EEventName__CLICK> & EEventName__CLICK & 0;// 0
static +MOUSEOVER: Class<EEventName__MOUSEOVER> & EEventName__MOUSEOVER & 1;// 1
static +MOUSEUP: Class<EEventName__MOUSEUP> & EEventName__MOUSEUP & 2;// 2
static +MOUSEOUT: Class<EEventName__MOUSEOUT> & EEventName__MOUSEOUT & 3;// 3
static +MOUSEMOVE: Class<EEventName__MOUSEMOVE> & EEventName__MOUSEMOVE & 4;// 4
static +MOUSEDOWN: Class<EEventName__MOUSEDOWN> & EEventName__MOUSEDOWN & 5;// 5
static +MOUSEWHEEL: Class<EEventName__MOUSEWHEEL> & EEventName__MOUSEWHEEL & 6;// 6
static +MOUSEDRAG: Class<EEventName__MOUSEDRAG> & EEventName__MOUSEDRAG & 7;// 7
static +TOUCHUP: Class<EEventName__TOUCHUP> & EEventName__TOUCHUP & 8;// 8
static +TOUCHMOVE: Class<EEventName__TOUCHMOVE> & EEventName__TOUCHMOVE & 9;// 9
static +TOUCHDOWN: Class<EEventName__TOUCHDOWN> & EEventName__TOUCHDOWN & 10;// 10
static +KEYDOWN: Class<EEventName__KEYDOWN> & EEventName__KEYDOWN & 11;// 11
static +KEYUP: Class<EEventName__KEYUP> & EEventName__KEYUP & 12;// 12
static +KEYPRESS: Class<EEventName__KEYPRESS> & EEventName__KEYPRESS & 13;// 13

}

declare class EEventName__CLICK mixins EEventName {}
declare class EEventName__MOUSEOVER mixins EEventName {}
declare class EEventName__MOUSEUP mixins EEventName {}
declare class EEventName__MOUSEOUT mixins EEventName {}
declare class EEventName__MOUSEMOVE mixins EEventName {}
declare class EEventName__MOUSEDOWN mixins EEventName {}
declare class EEventName__MOUSEWHEEL mixins EEventName {}
declare class EEventName__MOUSEDRAG mixins EEventName {}
declare class EEventName__TOUCHUP mixins EEventName {}
declare class EEventName__TOUCHMOVE mixins EEventName {}
declare class EEventName__TOUCHDOWN mixins EEventName {}
declare class EEventName__KEYDOWN mixins EEventName {}
declare class EEventName__KEYUP mixins EEventName {}
declare class EEventName__KEYPRESS mixins EEventName {}

	declare export class EventNameHandler  {
static handleEventName(domEventName: EEventName): any
}
    }

	declare module 'wonder.js/dist/es2015/event/object/EventTable' {
        import type {
          EEventType
        } from 'wonder.js/dist/es2015/event/object/EEventType';

	import type {
          EEventName
        } from 'wonder.js/dist/es2015/event/object/EventNameHandler';

	declare export class EventTable  {
static getEventType(eventName: EEventName): EEventType
}
    }

	declare module 'wonder.js/dist/es2015/event/object/KeyboardEvent' {
        import type {
          DomEvent
        } from 'wonder.js/dist/es2015/event/object/DomEvent';

	import type {
          EEventName
        } from 'wonder.js/dist/es2015/event/object/EventNameHandler';

	import type {
          IKeyboardEventData
        } from 'wonder.js/dist/es2015/event/interface/IEventData';

	import type {
          EEventType
        } from 'wonder.js/dist/es2015/event/object/EEventType';

	declare export class KeyboardEvent mixins DomEvent {
static create(event: any, eventName: EEventName): KeyboardEvent;
event: IKeyboardEventData;
ctrlKey: number;
altKey: number;
shiftKey: number;
metaKey: number;
keyCode: number;
key: any;
type: EEventType;
keyState: any;
clone(): KeyboardEvent
}
    }

	declare module 'wonder.js/dist/es2015/event/object/MouseEvent' {
        import type {
          DomEvent
        } from 'wonder.js/dist/es2015/event/object/DomEvent';

	import type {
          IMouseEventData
        } from 'wonder.js/dist/es2015/event/interface/IEventData';

	import type {
          EEventName
        } from 'wonder.js/dist/es2015/event/object/EventNameHandler';

	import type {
          Point
        } from 'wonder.js/dist/es2015/structure/Point';

	import type {
          EEventType
        } from 'wonder.js/dist/es2015/event/object/EEventType';

	declare export class MouseEvent mixins DomEvent {
static create(event: IMouseEventData, eventName: EEventName): MouseEvent;
event: IMouseEventData;
location: Point;
locationInView: Point;
button: number;
wheel: number;
movementDelta: {
x: any,
y: any
};
type: EEventType;
lastX: number;
lastY: number;
clone(): MouseEvent
}
    }

	declare module 'wonder.js/dist/es2015/event/object/MousePointEvent' {
        import type {
          PointEvent
        } from 'wonder.js/dist/es2015/event/object/PointEvent';

	import type {
          EEventName
        } from 'wonder.js/dist/es2015/event/object/EventNameHandler';

	import type {
          MouseEvent
        } from 'wonder.js/dist/es2015/event/object/MouseEvent';

	import type {
          Point
        } from 'wonder.js/dist/es2015/structure/Point';

	declare export class MousePointEvent mixins PointEvent {
static create(eventName: EEventName): MousePointEvent;
eventObj: MouseEvent;
location: Point;
locationInView: Point;
button: number;
wheel: number;
movementDelta: {
x: any,
y: any
};
getDataFromEventObj(e: MouseEvent): void;
clone(): any
}
    }

	declare module 'wonder.js/dist/es2015/event/object/PointEvent' {
        import type {
          DomEvent
        } from 'wonder.js/dist/es2015/event/object/DomEvent';

	import type {
          IPointEventData
        } from 'wonder.js/dist/es2015/event/interface/IEventData';

	import type {
          Point
        } from 'wonder.js/dist/es2015/structure/Point';

	import type {
          EEventType
        } from 'wonder.js/dist/es2015/event/object/EEventType';

	import type {
          MouseEvent
        } from 'wonder.js/dist/es2015/event/object/MouseEvent';

	import type {
          TouchEvent
        } from 'wonder.js/dist/es2015/event/object/TouchEvent';

	declare export class PointEvent mixins DomEvent {
event: IPointEventData;
location: Point;
locationInView: Point;
button: number | null;
wheel: number | null;
movementDelta: Point;
lastX: number;
lastY: number;
type: EEventType;
eventObj: MouseEvent | TouchEvent;
getDataFromEventObj(eventObj: TouchEvent | MouseEvent): void;
cloneHelper(eventObj: PointEvent): PointEvent
}
    }

	declare module 'wonder.js/dist/es2015/event/object/TouchEvent' {
        import type {
          DomEvent
        } from 'wonder.js/dist/es2015/event/object/DomEvent';

	import type {
          ITouchEventData,ITouchData
        } from 'wonder.js/dist/es2015/event/interface/IEventData';

	import type {
          EEventName
        } from 'wonder.js/dist/es2015/event/object/EventNameHandler';

	import type {
          Point
        } from 'wonder.js/dist/es2015/structure/Point';

	import type {
          EEventType
        } from 'wonder.js/dist/es2015/event/object/EEventType';

	declare export class TouchEvent mixins DomEvent {
static create(event: ITouchEventData, eventName: EEventName): TouchEvent;
event: ITouchEventData;
location: Point;
touchData: ITouchData;
locationInView: Point;
movementDelta: {
x: any,
y: any
};
type: EEventType;
lastX: number;
lastY: number;
clone(): TouchEvent
}
    }

	declare module 'wonder.js/dist/es2015/event/object/TouchPointEvent' {
        import type {
          PointEvent
        } from 'wonder.js/dist/es2015/event/object/PointEvent';

	import type {
          EEventName
        } from 'wonder.js/dist/es2015/event/object/EventNameHandler';

	import type {
          TouchEvent
        } from 'wonder.js/dist/es2015/event/object/TouchEvent';

	import type {
          Point
        } from 'wonder.js/dist/es2015/structure/Point';

	declare export class TouchPointEvent mixins PointEvent {
static create(eventName: EEventName): TouchPointEvent;
eventObj: TouchEvent;
location: Point;
locationInView: Point;
wheel: any;
movementDelta: {
x: any,
y: any
};
button: number;
getDataFromEventObj(e: TouchEvent): void;
clone(): any
}
    }

	declare module 'wonder.js/dist/es2015/event/structure/CustomEventListenerMap' {
        import type {
          EventListenerMap
        } from 'wonder.js/dist/es2015/event/structure/EventListenerMap';

	import type {
          Collection
        } from 'wonder-commonlib/dist/es2015/Collection';

	import type {
          CustomEventRegisterData
        } from 'wonder.js/dist/es2015/event/binder/CustomEventRegister';

	import type {
          EntityObject
        } from 'wonder.js/dist/es2015/core/entityObject/EntityObject';

	import type {
          EEventName
        } from 'wonder.js/dist/es2015/event/object/EventNameHandler';

	declare export class CustomEventListenerMap mixins EventListenerMap {
static create(): CustomEventListenerMap;
hasChild(target: EntityObject): boolean;
appendChild(eventName: EEventName, data: any): any;
appendChild(target: EntityObject, eventName: EEventName, data: any): any;
forEachAll(
func: (list: Collection<CustomEventRegisterData>, eventName: EEventName) => void): void;
forEachEventName(
func: (list: Collection<CustomEventRegisterData>, eventName: EEventName) => void): void;
clear(): void;
getChild(eventName: EEventName): Collection<CustomEventRegisterData>;
getChild(target: EntityObject): Collection<CustomEventRegisterData>;
getChild(
target: EntityObject,
eventName: EEventName): Collection<CustomEventRegisterData>;
removeChild(eventName: EEventName): void;
removeChild(target: EntityObject): void;
removeChild(eventName: EEventName, handler: Function): void;
removeChild(uid: number, eventName: EEventName): void;
removeChild(target: EntityObject, eventName: EEventName): void;
removeChild(target: EntityObject, eventName: EEventName, handler: Function): void;
buildFirstLevelKey(target: EntityObject): any;
buildFirstLevelKey(uid: number): any
}
    }

	declare module 'wonder.js/dist/es2015/event/structure/DomEventListenerMap' {
        import type {
          EventListenerMap
        } from 'wonder.js/dist/es2015/event/structure/EventListenerMap';

	import type {
          Collection
        } from 'wonder-commonlib/dist/es2015/Collection';

	import type {
          DomEventRegisterData
        } from 'wonder.js/dist/es2015/event/binder/DomEventRegister';

	import type {
          EEventName
        } from 'wonder.js/dist/es2015/event/object/EventNameHandler';

	declare export class DomEventListenerMap mixins EventListenerMap {
static create(): DomEventListenerMap;
hasChild(dom: HTMLElement, eventName: EEventName): boolean;
appendChild(dom: HTMLElement, eventName: EEventName, data: any): void;
forEachAll(
func: (list: Collection<DomEventRegisterData>, eventName: EEventName) => void): void;
forEachEventName(
func: (list: Collection<DomEventRegisterData>, eventName: EEventName) => void): void;
clear(): void;
getChild(dom: HTMLElement): Collection<DomEventRegisterData>;
getChild(dom: HTMLElement, eventName: EEventName): Collection<DomEventRegisterData>;
removeChild(eventName: EEventName): Collection<DomEventOffData>;
removeChild(eventName: EEventName, handler: Function): Collection<DomEventOffData>;
removeChild(dom: HTMLElement, eventName: EEventName): Collection<DomEventOffData>;
removeChild(
dom: HTMLElement,
eventName: EEventName,
handler: Function): Collection<DomEventOffData>;
buildFirstLevelKey(dom: HTMLElement): string
}
	declare export type DomEventOffData = {
dom: HTMLElement,
eventName: EEventName,
domHandler: Function
};
    }

	declare module 'wonder.js/dist/es2015/event/structure/EventListenerMap' {
        import type {
          Collection
        } from 'wonder-commonlib/dist/es2015/Collection';

	import type {
          EEventName
        } from 'wonder.js/dist/es2015/event/object/EventNameHandler';

	import type {
          EntityObject
        } from 'wonder.js/dist/es2015/core/entityObject/EntityObject';

	declare export class EventListenerMap  {
getChild(...args: any[]): Collection<any>;
removeChild(...args: any[]): any;
hasChild(...args: any[]): boolean;
appendChild(...args: any[]): void;
forEachAll(func: (list: Collection<any>, eventName: EEventName) => void): void;
forEachEventName(func: (list: Collection<any>, eventName: EEventName) => void): void;
clear(): void;
buildFirstLevelKey(target: EntityObject | HTMLElement): string;
buildSecondLevelKey(eventName: EEventName): string
}
    }

	declare module 'wonder.js/dist/es2015/event/utils/EventUtils' {
        import type {
          EntityObject
        } from 'wonder.js/dist/es2015/core/entityObject/EntityObject';

	declare export class EventUtils  {
static isEvent(arg: any): boolean;
static isEntityObject(arg: EntityObject): boolean
}
    }

	declare module 'wonder.js/dist/es2015/material/BasicMaterial' {
        import type {
          StandardBasicMaterial
        } from 'wonder.js/dist/es2015/material/StandardBasicMaterial';

	declare export class BasicMaterial mixins StandardBasicMaterial {
static create(): BasicMaterial
}
    }

	declare module 'wonder.js/dist/es2015/material/EngineMaterial' {
        import type {
          Material
        } from 'wonder.js/dist/es2015/material/Material';

	import type {
          Shader
        } from 'wonder.js/dist/es2015/renderer/shader/shader/Shader';

	declare export class EngineMaterial mixins Material {
init(): void;
addShaderLib(): void;
createShader(): Shader
}
    }

	declare module 'wonder.js/dist/es2015/material/Material' {
        import type {
          Color
        } from 'wonder.js/dist/es2015/structure/Color';

	import type {
          Geometry
        } from 'wonder.js/dist/es2015/component/geometry/Geometry';

	import type {
          QuadCommand
        } from 'wonder.js/dist/es2015/renderer/command/QuadCommand';

	import type {
          Shader
        } from 'wonder.js/dist/es2015/renderer/shader/shader/Shader';

	import type {
          Program
        } from 'wonder.js/dist/es2015/renderer/program/Program';

	declare export class Material  {
program: Program;
color: Color;
shader: Shader;
geometry: Geometry;
clone(): this;
initWhenCreate(): void;
init(): void;
dispose(): void;
updateShader(quadCmd: QuadCommand): void;
createShader(): Shader
}
    }

	declare module 'wonder.js/dist/es2015/material/ShaderManager' {
        import type {
          Material
        } from 'wonder.js/dist/es2015/material/Material';

	import type {
          Shader
        } from 'wonder.js/dist/es2015/renderer/shader/shader/Shader';

	import type {
          QuadCommand
        } from 'wonder.js/dist/es2015/renderer/command/QuadCommand';

	declare export class ShaderManager  {
static create(material: Material): ShaderManager;
constructor(material: Material): this;
shader: Shader;
setShader(shader: Shader): void;
init(): void;
dispose(): void;
update(quadCmd: QuadCommand): void
}
    }

	declare module 'wonder.js/dist/es2015/material/StandardBasicMaterial' {
        import type {
          EngineMaterial
        } from 'wonder.js/dist/es2015/material/EngineMaterial';

	declare export class StandardBasicMaterial mixins EngineMaterial {
opacity: number;
alphaTest: number;
addExtendShaderLib(): void;
addShaderLib(): void
}
    }

	declare module 'wonder.js/dist/es2015/math/Global' {
        declare export var DEG_TO_RAD: number;
	declare export var RAD_TO_DEG: number;
    }

	declare module 'wonder.js/dist/es2015/math/Matrix3' {
        import type {
          Vector2
        } from 'wonder.js/dist/es2015/math/Vector2';

	declare export class Matrix3  {
static create(mat: Float32Array): Matrix3;
static create(): Matrix3;
constructor(mat: Float32Array): this;
constructor(): this;
a: number;
c: number;
b: number;
d: number;
tx: number;
ty: number;
values: Float32Array;
setIdentity(): Matrix3;
invert(): Matrix3;
multiplyScalar(s: number): this;
multiplyVector2(vector: Vector2): Vector2;
multiplyPoint(vector: Vector2): Vector2;
multiply(matrix: Matrix3): this;
transpose(): Matrix3;
clone(): Matrix3;
cloneToArray(array: Float32Array, offset?: number): Matrix3;
set(matrix: Matrix3): this;
setTS(t: Vector2, s: Vector2): void;
rotate(angle: number): this;
setRotation(angle: number): this;
translate(x: number, y: number): void;
setPosition(x: number, y: number): void;
scale(x: number, y: number): this;
setScale(x: number, y: number): this;
getTranslation(): Vector2;
getScale(): Vector2;
getRotation(): number;
getSkew(): Vector2
}
    }

	declare module 'wonder.js/dist/es2015/math/Matrix4' {
        import type {
          Matrix3
        } from 'wonder.js/dist/es2015/math/Matrix3';

	import type {
          Vector3
        } from 'wonder.js/dist/es2015/math/Vector3';

	import type {
          Vector4
        } from 'wonder.js/dist/es2015/math/Vector4';

	import type {
          Quaternion
        } from 'wonder.js/dist/es2015/math/Quaternion';

	declare export class Matrix4  {
static create(mat: Float32Array): Matrix4;
static create(): Matrix4;
constructor(mat: Float32Array): this;
constructor(): this;
values: Float32Array;
push(): void;
pop(): void;
set(
initialM11: number,
initialM12: number,
initialM13: number,
initialM14: number,
initialM21: number,
initialM22: number,
initialM23: number,
initialM24: number,
initialM31: number,
initialM32: number,
initialM33: number,
initialM34: number,
initialM41: number,
initialM42: number,
initialM43: number,
initialM44: number): any;
set(matrix: Matrix4): any;
setIdentity(): Matrix4;
invert(): Matrix4;
invertTo3x3(): Matrix3;
transpose(): Matrix4;
setTranslate(x: any, y: any, z: any): Matrix4;
translate(x: any, y: any, z: any): Matrix4;
setRotate(angle: number, x: number, y: number, z: number): Matrix4;
rotate(angle: any, vector3: Vector3): Matrix4;
rotate(angle: any, x: any, y: any, z: any): Matrix4;
setScale(x: any, y: any, z: any): Matrix4;
scale(x: any, y: any, z: any): Matrix4;
setLookAt(eye: Vector3, center: Vector3, up: Vector3): Matrix4;
setLookAt(
eyeX: number,
eyeY: number,
eyeZ: number,
centerX: number,
centerY: number,
centerZ: number,
upX: number,
upY: number,
upZ: number): Matrix4;
lookAt(eye: Vector3, center: Vector3, up: Vector3): Matrix4;
lookAt(
eyeX: number,
eyeY: number,
eyeZ: number,
centerX: number,
centerY: number,
centerZ: number,
upX: number,
upY: number,
upZ: number): Matrix4;
setOrtho(
left: number,
right: number,
bottom: number,
top: number,
near: number,
far: number): Matrix4;
ortho(
left: number,
right: number,
bottom: number,
top: number,
near: number,
far: number): Matrix4;
setPerspective(fovy: number, aspect: number, near: number, far: number): Matrix4;
perspective(fovy: number, aspect: number, near: number, far: number): Matrix4;
applyMatrix(other: Matrix4, notChangeSelf?: boolean): Matrix4;
multiply(matrix: Matrix4): Matrix4;
multiply(matrix1: Matrix4, matrix2: Matrix4): Matrix4;
multiplyVector4(vector: Vector4): Vector4;
multiplyVector3(vector: Vector3): Vector3;
multiplyPoint(vector: Vector3): Vector3;
clone(): Matrix4;
cloneToArray(array: Float32Array, offset?: number): Matrix4;
getX(): Vector3;
getY(): Vector3;
getZ(): Vector3;
getTranslation(): Vector3;
getScale(): Vector3;
getRotation(): Quaternion;
getEulerAngles(): any;
setTRS(t: Vector3, r: Quaternion, s: Vector3): this
}
    }

	declare module 'wonder.js/dist/es2015/math/Quaternion' {
        import type {
          Vector3
        } from 'wonder.js/dist/es2015/math/Vector3';

	import type {
          Matrix4
        } from 'wonder.js/dist/es2015/math/Matrix4';

	declare export class Quaternion  {
static create(x?: number, y?: number, z?: number, w?: number): Quaternion;
constructor(x?: number, y?: number, z?: number, w?: number): this;
x: number;
y: number;
z: number;
w: number;
setFromEulerAngles(eulerAngles: Vector3): this;
multiply(rhs: Quaternion): any;
multiply(rhs1: Quaternion, rhs2: Quaternion): any;
setFromMatrix(matrix: Matrix4): this;
setFromAxisAngle(angle: number, axis: Vector3): this;
invert(): this;
conjugate(): this;
clone(): Quaternion;
normalize(): this;
length(): any;
multiplyVector3(vector: Vector3): Vector3;
set(x: number, y: number, z: number, w: number): void;
sub(quat: Quaternion): this;
getEulerAngles(): any;
slerp(left: Quaternion, right: Quaternion, amount: number): Quaternion
}
    }

	declare module 'wonder.js/dist/es2015/math/Vector2' {
        declare export class Vector2  {
static create(x: any, y: any): Vector2;
static create(): Vector2;
constructor(x: any, y: any): this;
constructor(): this;
x: number;
y: number;
values: Float32Array;
set(x: number, y: number): void;
add(v: Vector2): this;
mul(v: Vector2): this;
isEqual(v: Vector2): boolean;
clone(): Vector2
}
    }

	declare module 'wonder.js/dist/es2015/math/Vector3' {
        import type {
          Vector4
        } from 'wonder.js/dist/es2015/math/Vector4';

	import type {
          Matrix3
        } from 'wonder.js/dist/es2015/math/Matrix3';

	import type {
          Matrix4
        } from 'wonder.js/dist/es2015/math/Matrix4';

	declare export class Vector3  {
static up: any;
static forward: any;
static right: any;
static create(x: number, y: number, z: number): Vector3;
static create(): Vector3;
constructor(x: number, y: number, z: number): this;
constructor(): this;
x: number;
y: number;
z: number;
values: Float32Array;
normalize(): Vector3;
isZero(): boolean;
scale(scalar: number): any;
scale(x: number, y: number, z: number): any;
set(v: Vector3): any;
set(x: number, y: number, z: number): any;
sub(v: Vector3): Vector3;
sub2(v1: Vector3, v2: Vector3): this;
add(v: Vector3): this;
add2(v1: Vector3, v2: Vector3): this;
mul(v: Vector3): this;
mul2(v1: Vector3, v2: Vector3): this;
reverse(): Vector3;
clone(): Vector3;
toVector4(): Vector4;
length(): any;
cross(lhs: Vector3, rhs: Vector3): this;
lerp(lhs: Vector3, rhs: Vector3, alpha: number): this;
dot(rhs: any): number;
calAngleCos(v1: Vector3): number;
min(v: Vector3): this;
max(v: Vector3): this;
isEqual(v: Vector3): boolean;
toArray(): number[];
applyMatrix3(m: Matrix3): this;
applyMatrix4(m: Matrix4): this;
distanceTo(v: Vector3): any;
distanceToSquared(v: Vector3): number
}
    }

	declare module 'wonder.js/dist/es2015/math/Vector4' {
        import type {
          Vector3
        } from 'wonder.js/dist/es2015/math/Vector3';

	declare export class Vector4  {
static create(x: any, y: any, z: any, w: any): any;
static create(): any;
constructor(x: any, y: any, z: any, w: any): this;
constructor(): this;
x: number;
y: number;
z: number;
w: number;
values: Float32Array;
normalize(): Vector4;
isEqual(v: Vector4): boolean;
clone(): Vector4;
toVector3(): Vector3;
lengthManhattan(): any;
multiplyScalar(scalar: number): this;
dot(v: Vector4): number;
set(x: number, y: number, z: number, w: number): void;
copyHelper(vector4: Vector4): any
}
    }

	declare module 'wonder.js/dist/es2015/renderer/buffer/ArrayBuffer' {
        import type {
          CommonBuffer
        } from 'wonder.js/dist/es2015/renderer/buffer/CommonBuffer';

	import type {
          EBufferType
        } from 'wonder.js/dist/es2015/renderer/buffer/EBufferType';

	import type {
          EBufferUsage
        } from 'wonder.js/dist/es2015/renderer/buffer/EBufferUsage';

	declare export class ArrayBuffer mixins CommonBuffer {
static create(
data: Array<number>,
size: number,
type?: EBufferType,
usage?: EBufferUsage): ArrayBuffer;
size: number;
data: Float32Array;
initWhenCreate(data: Array<number>, size: number, type: EBufferType, usage: EBufferUsage): any;
resetData(data: Array<number>, size?: number, type?: EBufferType, offset?: number): this
}
    }

	declare module 'wonder.js/dist/es2015/renderer/buffer/Buffer' {
        import type {
          Entity
        } from 'wonder.js/dist/es2015/core/Entity';

	declare export class Buffer mixins Entity {
buffer: any;
resetData(data: any, ...args: any[]): void;
dispose(): void
}
    }

	declare module 'wonder.js/dist/es2015/renderer/buffer/BufferDataTable' {
        import type {
          EBufferDataType
        } from 'wonder.js/dist/es2015/renderer/buffer/EBufferDataType';

	declare export class BufferDataTable  {
static getGeometryDataName(type: EBufferDataType): string
}
    }

	declare module 'wonder.js/dist/es2015/renderer/buffer/CommonBuffer' {
        import type {
          Buffer
        } from 'wonder.js/dist/es2015/renderer/buffer/Buffer';

	import type {
          EBufferType
        } from 'wonder.js/dist/es2015/renderer/buffer/EBufferType';

	import type {
          EBufferUsage
        } from 'wonder.js/dist/es2015/renderer/buffer/EBufferUsage';

	declare export class CommonBuffer mixins Buffer {
type: EBufferType;
count: number;
usage: EBufferUsage;
resetBufferData(glBufferTargetStr: string, typedData: any, offset?: number): void
}
    }

	declare module 'wonder.js/dist/es2015/renderer/buffer/EBufferDataType' {
        declare export  class EBufferDataType {
  constructor(...args: empty): mixed;
static +VERTICE: Class<EBufferDataType__VERTICE> & EBufferDataType__VERTICE & 0;// 0
static +INDICE: Class<EBufferDataType__INDICE> & EBufferDataType__INDICE & 1;// 1

}

declare class EBufferDataType__VERTICE mixins EBufferDataType {}
declare class EBufferDataType__INDICE mixins EBufferDataType {}

    }

	declare module 'wonder.js/dist/es2015/renderer/buffer/EBufferType' {
        declare export  class EBufferType {
  constructor(...args: empty): mixed;
static +BYTE: Class<EBufferType__BYTE> & EBufferType__BYTE & 0;// 0
static +UNSIGNED_BYTE: Class<EBufferType__UNSIGNED_BYTE> & EBufferType__UNSIGNED_BYTE & 1;// 1
static +SHORT: Class<EBufferType__SHORT> & EBufferType__SHORT & 2;// 2
static +UNSIGNED_SHORT: Class<EBufferType__UNSIGNED_SHORT> & EBufferType__UNSIGNED_SHORT & 3;// 3
static +INT: Class<EBufferType__INT> & EBufferType__INT & 4;// 4
static +UNSIGNED_INT: Class<EBufferType__UNSIGNED_INT> & EBufferType__UNSIGNED_INT & 5;// 5
static +FLOAT: Class<EBufferType__FLOAT> & EBufferType__FLOAT & 6;// 6

}

declare class EBufferType__BYTE mixins EBufferType {}
declare class EBufferType__UNSIGNED_BYTE mixins EBufferType {}
declare class EBufferType__SHORT mixins EBufferType {}
declare class EBufferType__UNSIGNED_SHORT mixins EBufferType {}
declare class EBufferType__INT mixins EBufferType {}
declare class EBufferType__UNSIGNED_INT mixins EBufferType {}
declare class EBufferType__FLOAT mixins EBufferType {}

    }

	declare module 'wonder.js/dist/es2015/renderer/buffer/EBufferUsage' {
        declare export  class EBufferUsage {
  constructor(...args: empty): mixed;
static +STREAM_DRAW: Class<EBufferUsage__STREAM_DRAW> & EBufferUsage__STREAM_DRAW & 0;// 0
static +STATIC_DRAW: Class<EBufferUsage__STATIC_DRAW> & EBufferUsage__STATIC_DRAW & 1;// 1
static +DYNAMIC_DRAW: Class<EBufferUsage__DYNAMIC_DRAW> & EBufferUsage__DYNAMIC_DRAW & 2;// 2

}

declare class EBufferUsage__STREAM_DRAW mixins EBufferUsage {}
declare class EBufferUsage__STATIC_DRAW mixins EBufferUsage {}
declare class EBufferUsage__DYNAMIC_DRAW mixins EBufferUsage {}

    }

	declare module 'wonder.js/dist/es2015/renderer/buffer/ElementBuffer' {
        import type {
          CommonBuffer
        } from 'wonder.js/dist/es2015/renderer/buffer/CommonBuffer';

	import type {
          EBufferType
        } from 'wonder.js/dist/es2015/renderer/buffer/EBufferType';

	import type {
          EBufferUsage
        } from 'wonder.js/dist/es2015/renderer/buffer/EBufferUsage';

	declare export class ElementBuffer mixins CommonBuffer {
static create(data: Array<number>, type?: EBufferType, usage?: EBufferUsage): ElementBuffer;
typeSize: number;
data: Uint16Array | Uint32Array;
initWhenCreate(data: Array<number>, type: EBufferType, usage: EBufferUsage): any;
resetData(data: Array<number>, type?: EBufferType, offset?: number): this
}
    }

	declare module 'wonder.js/dist/es2015/renderer/command/QuadCommand' {
        import type {
          RenderCommand
        } from 'wonder.js/dist/es2015/renderer/command/RenderCommand';

	import type {
          Matrix4
        } from 'wonder.js/dist/es2015/math/Matrix4';

	import type {
          BufferContainer
        } from 'wonder.js/dist/es2015/component/geometry/data/BufferContainer';

	import type {
          Material
        } from 'wonder.js/dist/es2015/material/Material';

	import type {
          GameObject
        } from 'wonder.js/dist/es2015/core/entityObject/gameObject/GameObject';

	import type {
          Program
        } from 'wonder.js/dist/es2015/renderer/program/Program';

	declare export class QuadCommand mixins RenderCommand {
program: Program;
mvpMatrix: Matrix4;
vpMatrix: Matrix4;
mMatrix: Matrix4;
vMatrix: Matrix4;
pMatrix: Matrix4;
buffers: BufferContainer;
material: Material;
target: GameObject;
sortId: number;
execute(): void;
draw(material: Material): void
}
    }

	declare module 'wonder.js/dist/es2015/renderer/command/RenderCommand' {
        import type {
          WebGLState
        } from 'wonder.js/dist/es2015/renderer/state/WebGLState';

	import type {
          EDrawMode
        } from 'wonder.js/dist/es2015/renderer/EDrawMode';

	import type {
          ElementBuffer
        } from 'wonder.js/dist/es2015/renderer/buffer/ElementBuffer';

	import type {
          ArrayBuffer
        } from 'wonder.js/dist/es2015/renderer/buffer/ArrayBuffer';

	declare export class RenderCommand  {
webglState: WebGLState;
drawMode: EDrawMode;
execute(): void;
init(): void;
dispose(): void;
drawElements(indexBuffer: ElementBuffer): void;
drawArray(vertexBuffer: ArrayBuffer): void
}
    }

	declare module 'wonder.js/dist/es2015/renderer/command/SingleDrawCommand' {
        import type {
          QuadCommand
        } from 'wonder.js/dist/es2015/renderer/command/QuadCommand';

	import type {
          Matrix3
        } from 'wonder.js/dist/es2015/math/Matrix3';

	import type {
          Material
        } from 'wonder.js/dist/es2015/material/Material';

	declare export class SingleDrawCommand mixins QuadCommand {
static create(): SingleDrawCommand;
normalMatrix: Matrix3;
draw(material: Material): void
}
    }

	declare module 'wonder.js/dist/es2015/renderer/EDrawMode' {
        declare export  class EDrawMode {
  constructor(...args: empty): mixed;
static +POINTS: Class<EDrawMode__POINTS> & EDrawMode__POINTS & 0;// 0
static +LINES: Class<EDrawMode__LINES> & EDrawMode__LINES & 1;// 1
static +LINE_LOOP: Class<EDrawMode__LINE_LOOP> & EDrawMode__LINE_LOOP & 2;// 2
static +LINE_STRIP: Class<EDrawMode__LINE_STRIP> & EDrawMode__LINE_STRIP & 3;// 3
static +TRIANGLES: Class<EDrawMode__TRIANGLES> & EDrawMode__TRIANGLES & 4;// 4
static +TRIANGLE_STRIP: Class<EDrawMode__TRIANGLE_STRIP> & EDrawMode__TRIANGLE_STRIP & 5;// 5
static +TRANGLE_FAN: Class<EDrawMode__TRANGLE_FAN> & EDrawMode__TRANGLE_FAN & 6;// 6

}

declare class EDrawMode__POINTS mixins EDrawMode {}
declare class EDrawMode__LINES mixins EDrawMode {}
declare class EDrawMode__LINE_LOOP mixins EDrawMode {}
declare class EDrawMode__LINE_STRIP mixins EDrawMode {}
declare class EDrawMode__TRIANGLES mixins EDrawMode {}
declare class EDrawMode__TRIANGLE_STRIP mixins EDrawMode {}
declare class EDrawMode__TRANGLE_FAN mixins EDrawMode {}

    }

	declare module 'wonder.js/dist/es2015/renderer/GlUtils' {
        declare export class GlUtils  {
static drawElements(mode: any, count: number, type: any, offset: number): void;
static drawArrays(mode: any, first: number, count: number): void
}
    }

	declare module 'wonder.js/dist/es2015/renderer/program/GLSLDataSender' {
        import type {
          Program
        } from 'wonder.js/dist/es2015/renderer/program/Program';

	import type {
          ArrayBuffer
        } from 'wonder.js/dist/es2015/renderer/buffer/ArrayBuffer';

	import type {
          Color
        } from 'wonder.js/dist/es2015/structure/Color';

	import type {
          Matrix3
        } from 'wonder.js/dist/es2015/math/Matrix3';

	import type {
          Matrix4
        } from 'wonder.js/dist/es2015/math/Matrix4';

	declare export class GLSLDataSender  {
static create(program: Program): GLSLDataSender;
constructor(program: Program): this;
sendFloat1(name: string, data: any): void;
sendFloat2(name: string, data: any): void;
sendFloat3(name: string, data: any): void;
sendFloat4(name: string, data: any): void;
sendVector2(name: string, data: any): void;
sendVector3(name: string, data: any): void;
sendVector4(name: string, data: any): void;
sendColor3(name: string, data: Color): void;
sendNum1(name: string, data: number): void;
sendMatrix3(name: string, data: Matrix3): void;
sendMatrix4(name: string, data: Matrix4): void;
sendMatrix4Array(name: string, data: Array<number> | Float32Array): void;
sendSampleArray(name: string, data: Array<number>): void;
getUniformLocation(name: string): any;
addBufferToToSendList(pos: number, buffer: ArrayBuffer): void;
sendAllBufferData(): void;
clearBufferList(): void;
sendBuffer(pos: number, buffer: ArrayBuffer): void;
disableVertexAttribArray(): void;
clearAllCache(): void;
dispose(): void
}
    }

	declare module 'wonder.js/dist/es2015/renderer/program/Program' {
        import type {
          Entity
        } from 'wonder.js/dist/es2015/core/Entity';

	import type {
          EVariableType
        } from 'wonder.js/dist/es2015/renderer/shader/variable/EVariableType';

	import type {
          ArrayBuffer
        } from 'wonder.js/dist/es2015/renderer/buffer/ArrayBuffer';

	import type {
          Shader
        } from 'wonder.js/dist/es2015/renderer/shader/shader/Shader';

	declare export class Program mixins Entity {
static create(): Program;
glProgram: any;
use(): void;
getAttribLocation(name: string): any;
getUniformLocation(name: string): any;
sendUniformData(name: string, type: EVariableType, data: any): void;
sendAttributeBuffer(name: string, type: EVariableType, buffer: ArrayBuffer): void;
sendStructureData(name: string, type: EVariableType, data: any): void;
sendFloat1(name: string, data: any): void;
sendFloat2(name: string, data: any): void;
sendFloat3(name: string, data: any): void;
sendFloat4(name: string, data: any): void;
sendVector2(name: string, data: any): void;
sendVector3(name: string, data: any): void;
sendVector4(name: string, data: any): void;
sendColor3(name: string, data: any): void;
sendNum1(name: string, data: any): void;
sendMatrix3(name: string, data: any): void;
sendMatrix4(name: string, data: any): void;
sendMatrix4Array(name: string, data: Float32Array): void;
sendSampleArray(name: string, data: any): void;
sendAllBufferData(): void;
initWithShader(shader: Shader): this;
dispose(): void
}
    }

	declare module 'wonder.js/dist/es2015/renderer/renderer/Renderer' {
        import type {
          WebGLState
        } from 'wonder.js/dist/es2015/renderer/state/WebGLState';

	import type {
          RenderCommand
        } from 'wonder.js/dist/es2015/renderer/command/RenderCommand';

	declare export class Renderer  {
webglState: WebGLState;
addCommand(command: RenderCommand): void;
hasCommand(): boolean;
render(): void;
clear(): void;
init(): void
}
    }

	declare module 'wonder.js/dist/es2015/renderer/renderer/WebGLRenderer' {
        import type {
          Renderer
        } from 'wonder.js/dist/es2015/renderer/renderer/Renderer';

	import type {
          RenderCommand
        } from 'wonder.js/dist/es2015/renderer/command/RenderCommand';

	import type {
          Color
        } from 'wonder.js/dist/es2015/structure/Color';

	declare export class WebGLRenderer mixins Renderer {
static create(): WebGLRenderer;
addCommand(command: RenderCommand): void;
hasCommand(): boolean;
clear(): void;
render(): void;
init(): void;
setClearColor(color: Color): void
}
    }

	declare module 'wonder.js/dist/es2015/renderer/shader/lib/basic/BasicMaterialColorShaderLib' {
        import type {
          EngineShaderLib
        } from 'wonder.js/dist/es2015/renderer/shader/lib/EngineShaderLib';

	import type {
          Program
        } from 'wonder.js/dist/es2015/renderer/program/Program';

	import type {
          QuadCommand
        } from 'wonder.js/dist/es2015/renderer/command/QuadCommand';

	import type {
          BasicMaterial
        } from 'wonder.js/dist/es2015/material/BasicMaterial';

	import type {
          GLSLChunk
        } from 'wonder.js/dist/es2015/renderer/shader/chunk/ShaderChunk';

	declare export class BasicMaterialColorShaderLib mixins EngineShaderLib {
static create(): BasicMaterialColorShaderLib;
vsChunk: GLSLChunk;
fsChunk: GLSLChunk;
sendShaderVariables(program: Program, cmd: QuadCommand, material: BasicMaterial): void;
setShaderDefinition(cmd: QuadCommand, material: BasicMaterial): void
}
    }

	declare module 'wonder.js/dist/es2015/renderer/shader/lib/basic/BasicShaderLib' {
        import type {
          EngineShaderLib
        } from 'wonder.js/dist/es2015/renderer/shader/lib/EngineShaderLib';

	import type {
          Program
        } from 'wonder.js/dist/es2015/renderer/program/Program';

	import type {
          QuadCommand
        } from 'wonder.js/dist/es2015/renderer/command/QuadCommand';

	import type {
          BasicMaterial
        } from 'wonder.js/dist/es2015/material/BasicMaterial';

	import type {
          GLSLChunk
        } from 'wonder.js/dist/es2015/renderer/shader/chunk/ShaderChunk';

	declare export class BasicShaderLib mixins EngineShaderLib {
static create(): BasicShaderLib;
vsChunk: GLSLChunk;
fsChunk: GLSLChunk;
sendShaderVariables(program: Program, cmd: QuadCommand, material: BasicMaterial): void;
setShaderDefinition(cmd: QuadCommand, material: BasicMaterial): void
}
    }

	declare module 'wonder.js/dist/es2015/renderer/shader/lib/basic/EndBasicShaderLib' {
        import type {
          EngineShaderLib
        } from 'wonder.js/dist/es2015/renderer/shader/lib/EngineShaderLib';

	import type {
          QuadCommand
        } from 'wonder.js/dist/es2015/renderer/command/QuadCommand';

	import type {
          StandardBasicMaterial
        } from 'wonder.js/dist/es2015/material/StandardBasicMaterial';

	import type {
          GLSLChunk
        } from 'wonder.js/dist/es2015/renderer/shader/chunk/ShaderChunk';

	declare export class EndBasicShaderLib mixins EngineShaderLib {
static create(): EndBasicShaderLib;
vsChunk: GLSLChunk;
fsChunk: GLSLChunk;
setShaderDefinition(cmd: QuadCommand, material: StandardBasicMaterial): void
}
    }

	declare module 'wonder.js/dist/es2015/renderer/shader/lib/common/CommonShaderLib' {
        import type {
          EngineShaderLib
        } from 'wonder.js/dist/es2015/renderer/shader/lib/EngineShaderLib';

	import type {
          Program
        } from 'wonder.js/dist/es2015/renderer/program/Program';

	import type {
          QuadCommand
        } from 'wonder.js/dist/es2015/renderer/command/QuadCommand';

	import type {
          EngineMaterial
        } from 'wonder.js/dist/es2015/material/EngineMaterial';

	import type {
          GLSLChunk
        } from 'wonder.js/dist/es2015/renderer/shader/chunk/ShaderChunk';

	declare export class CommonShaderLib mixins EngineShaderLib {
static create(): CommonShaderLib;
vsChunk: GLSLChunk;
fsChunk: GLSLChunk;
sendShaderVariables(program: Program, cmd: QuadCommand, material: EngineMaterial): void;
setShaderDefinition(cmd: QuadCommand, material: EngineMaterial): void
}
    }

	declare module 'wonder.js/dist/es2015/renderer/shader/lib/common/EndShaderLib' {
        import type {
          EngineShaderLib
        } from 'wonder.js/dist/es2015/renderer/shader/lib/EngineShaderLib';

	import type {
          Program
        } from 'wonder.js/dist/es2015/renderer/program/Program';

	import type {
          QuadCommand
        } from 'wonder.js/dist/es2015/renderer/command/QuadCommand';

	import type {
          EngineMaterial
        } from 'wonder.js/dist/es2015/material/EngineMaterial';

	import type {
          GLSLChunk
        } from 'wonder.js/dist/es2015/renderer/shader/chunk/ShaderChunk';

	declare export class EndShaderLib mixins EngineShaderLib {
static create(): EndShaderLib;
vsChunk: GLSLChunk;
fsChunk: GLSLChunk;
sendShaderVariables(program: Program, cmd: QuadCommand, material: EngineMaterial): void
}
    }

	declare module 'wonder.js/dist/es2015/renderer/shader/lib/common/VerticeCommonShaderLib' {
        import type {
          EngineShaderLib
        } from 'wonder.js/dist/es2015/renderer/shader/lib/EngineShaderLib';

	import type {
          Program
        } from 'wonder.js/dist/es2015/renderer/program/Program';

	import type {
          QuadCommand
        } from 'wonder.js/dist/es2015/renderer/command/QuadCommand';

	import type {
          EngineMaterial
        } from 'wonder.js/dist/es2015/material/EngineMaterial';

	import type {
          GLSLChunk
        } from 'wonder.js/dist/es2015/renderer/shader/chunk/ShaderChunk';

	declare export class VerticeCommonShaderLib mixins EngineShaderLib {
static create(): VerticeCommonShaderLib;
vsChunk: GLSLChunk;
fsChunk: GLSLChunk;
sendShaderVariables(program: Program, cmd: QuadCommand, material: EngineMaterial): void;
setShaderDefinition(cmd: QuadCommand, material: EngineMaterial): void
}
    }

	declare module 'wonder.js/dist/es2015/renderer/shader/lib/EngineShaderLib' {
        import type {
          ShaderLib
        } from 'wonder.js/dist/es2015/renderer/shader/lib/ShaderLib';

	import type {
          EngineShader
        } from 'wonder.js/dist/es2015/renderer/shader/shader/EngineShader';

	import type {
          Hash
        } from 'wonder-commonlib/dist/es2015/Hash';

	import type {
          ShaderVariable
        } from 'wonder.js/dist/es2015/renderer/shader/variable/VariableLib';

	import type {
          Collection
        } from 'wonder-commonlib/dist/es2015/Collection';

	import type {
          RenderCommand
        } from 'wonder.js/dist/es2015/renderer/command/RenderCommand';

	import type {
          Material
        } from 'wonder.js/dist/es2015/material/Material';

	import type {
          Program
        } from 'wonder.js/dist/es2015/renderer/program/Program';

	import type {
          GLSLChunk
        } from 'wonder.js/dist/es2015/renderer/shader/chunk/ShaderChunk';

	declare export class EngineShaderLib mixins ShaderLib {
shader: EngineShader;
vsChunk: GLSLChunk;
fsChunk: GLSLChunk;
attributes: Hash<ShaderVariable>;
uniforms: Hash<ShaderVariable>;
vsSourceTop: string;
vsSourceDefine: string;
vsSourceVarDeclare: string;
vsSourceFuncDeclare: string;
vsSourceFuncDefine: string;
vsSourceBody: string;
vsSource: string;
fsSourceTop: string;
fsSourceDefine: string;
fsSourceVarDeclare: string;
fsSourceFuncDeclare: string;
fsSourceFuncDefine: string;
fsSourceBody: string;
fsSource: string;
vsSourceDefineList: Collection<any>;
fsSourceDefineList: Collection<any>;
vsSourceExtensionList: Collection<string>;
fsSourceExtensionList: Collection<string>;
setShaderDefinition(cmd: RenderCommand, material: Material): void;
sendAttributeBuffer(program: Program, name: string, data: any): void;
sendUniformData(program: Program, name: string, data: any): void;
getVsChunk(): any;
getVsChunk(chunk: GLSLChunk): any;
getFsChunk(): any;
getFsChunk(chunk: GLSLChunk): any;
setVsSource(vs: GLSLChunk | string, operator?: string): void;
setFsSource(fs: GLSLChunk | string, operator?: string): void;
addAttributeVariable(variableArr: Array<string>): void;
addUniformVariable(variableArr: Array<string>): void
}
    }

	declare module 'wonder.js/dist/es2015/renderer/shader/lib/ShaderLib' {
        import type {
          Shader
        } from 'wonder.js/dist/es2015/renderer/shader/shader/Shader';

	import type {
          Program
        } from 'wonder.js/dist/es2015/renderer/program/Program';

	import type {
          RenderCommand
        } from 'wonder.js/dist/es2015/renderer/command/RenderCommand';

	import type {
          Material
        } from 'wonder.js/dist/es2015/material/Material';

	declare export class ShaderLib  {
shader: Shader;
sendShaderVariables(program: Program, cmd: RenderCommand, material: Material): void;
init(): void;
dispose(): void
}
    }

	declare module 'wonder.js/dist/es2015/renderer/shader/shader/CommonShader' {
        import type {
          EngineShader
        } from 'wonder.js/dist/es2015/renderer/shader/shader/EngineShader';

	import type {
          QuadCommand
        } from 'wonder.js/dist/es2015/renderer/command/QuadCommand';

	import type {
          Material
        } from 'wonder.js/dist/es2015/material/Material';

	declare export class CommonShader mixins EngineShader {
static create(): CommonShader;
update(cmd: QuadCommand, material: Material): void
}
    }

	declare module 'wonder.js/dist/es2015/renderer/shader/shader/EngineShader' {
        import type {
          Shader
        } from 'wonder.js/dist/es2015/renderer/shader/shader/Shader';

	import type {
          EngineShaderSourceBuilder
        } from 'wonder.js/dist/es2015/renderer/shader/sourceBuilder/EngineShaderSourceBuilder';

	import type {
          Collection
        } from 'wonder-commonlib/dist/es2015/Collection';

	import type {
          EngineShaderLib
        } from 'wonder.js/dist/es2015/renderer/shader/lib/EngineShaderLib';

	import type {
          RenderCommand
        } from 'wonder.js/dist/es2015/renderer/command/RenderCommand';

	import type {
          Material
        } from 'wonder.js/dist/es2015/material/Material';

	import type {
          ShaderSourceBuilder
        } from 'wonder.js/dist/es2015/renderer/shader/sourceBuilder/ShaderSourceBuilder';

	declare export class EngineShader mixins Shader {
sourceBuilder: EngineShaderSourceBuilder;
libs: Collection<EngineShaderLib>;
buildDefinitionData(cmd: RenderCommand, material: Material): void;
createShaderSourceBuilder(): ShaderSourceBuilder
}
    }

	declare module 'wonder.js/dist/es2015/renderer/shader/shader/Shader' {
        import type {
          Hash
        } from 'wonder-commonlib/dist/es2015/Hash';

	import type {
          Program
        } from 'wonder.js/dist/es2015/renderer/program/Program';

	import type {
          Collection
        } from 'wonder-commonlib/dist/es2015/Collection';

	import type {
          ShaderLib
        } from 'wonder.js/dist/es2015/renderer/shader/lib/ShaderLib';

	import type {
          ShaderSourceBuilder
        } from 'wonder.js/dist/es2015/renderer/shader/sourceBuilder/ShaderSourceBuilder';

	import type {
          RenderCommand
        } from 'wonder.js/dist/es2015/renderer/command/RenderCommand';

	import type {
          Material
        } from 'wonder.js/dist/es2015/material/Material';

	import type {
          EVariableType
        } from 'wonder.js/dist/es2015/renderer/shader/variable/EVariableType';

	declare export class Shader  {
attributes: Hash<ShaderData>;
uniforms: Hash<ShaderData>;
vsSource: string;
fsSource: string;
dirty: boolean;
program: Program;
libDirty: boolean;
definitionDataDirty: boolean;
libs: Collection<ShaderLib>;
sourceBuilder: ShaderSourceBuilder;
update(cmd: RenderCommand, material: Material): any;
createVsShader(): any;
createFsShader(): any;
init(material: Material): void;
dispose(): void;
hasLib(lib: ShaderLib): any;
hasLib(_class: Function): any;
addLib(lib: ShaderLib): void;
addShaderLibToTop(lib: ShaderLib): void;
getLib(libClass: Function): ShaderLib;
getLibs(): Collection<ShaderLib>;
removeLib(lib: ShaderLib): any;
removeLib(func: Function): any;
removeAllLibs(): void;
sortLib(func: (a: ShaderLib, b: ShaderLib) => any): void;
createShaderSourceBuilder(): ShaderSourceBuilder;
buildDefinitionData(cmd: RenderCommand, material: Material): void;
judgeRefreshShader(cmd: RenderCommand, material: Material): void
}
	declare export type ShaderData = {
type: EVariableType,
value?: any,
textureId?: string
};
    }

	declare module 'wonder.js/dist/es2015/renderer/shader/sourceBuilder/EngineShaderSourceBuilder' {
        import type {
          ShaderSourceBuilder,SourceDefine
        } from 'wonder.js/dist/es2015/renderer/shader/sourceBuilder/ShaderSourceBuilder';

	import type {
          Collection
        } from 'wonder-commonlib/dist/es2015/Collection';

	import type {
          EngineShaderLib
        } from 'wonder.js/dist/es2015/renderer/shader/lib/EngineShaderLib';

	declare export class EngineShaderSourceBuilder mixins ShaderSourceBuilder {
static create(): EngineShaderSourceBuilder;
vsSourceTop: string;
vsSourceDefine: string;
vsSourceVarDeclare: string;
vsSourceFuncDeclare: string;
vsSourceFuncDefine: string;
vsSourceBody: string;
fsSourceTop: string;
fsSourceDefine: string;
fsSourceVarDeclare: string;
fsSourceFuncDeclare: string;
fsSourceFuncDefine: string;
fsSourceBody: string;
vsSourceDefineList: Collection<SourceDefine>;
fsSourceDefineList: Collection<SourceDefine>;
vsSourceExtensionList: Collection<string>;
fsSourceExtensionList: Collection<string>;
build(libs: Collection<EngineShaderLib>): void;
clearShaderDefinition(): void
}
    }

	declare module 'wonder.js/dist/es2015/renderer/shader/sourceBuilder/ShaderSourceBuilder' {
        import type {
          Hash
        } from 'wonder-commonlib/dist/es2015/Hash';

	import type {
          ShaderData
        } from 'wonder.js/dist/es2015/renderer/shader/shader/Shader';

	declare export class ShaderSourceBuilder  {
attributes: Hash<ShaderData>;
uniforms: Hash<ShaderData>;
vsSource: string;
fsSource: string;
build(...args: any[]): void;
clearShaderDefinition(): void;
dispose(): void;
convertAttributesData(): void
}
	declare export type SourceDefine = {
name: string,
value: any
};
    }

	declare module 'wonder.js/dist/es2015/renderer/shader/variable/EVariableCategory' {
        declare export  class EVariableCategory {
  constructor(...args: empty): mixed;
static +ENGINE: Class<EVariableCategory__ENGINE> & EVariableCategory__ENGINE & 0;// 0
static +CUSTOM: Class<EVariableCategory__CUSTOM> & EVariableCategory__CUSTOM & 1;// 1

}

declare class EVariableCategory__ENGINE mixins EVariableCategory {}
declare class EVariableCategory__CUSTOM mixins EVariableCategory {}

    }

	declare module 'wonder.js/dist/es2015/renderer/shader/variable/EVariableSemantic' {
        declare export  class EVariableSemantic {
  constructor(...args: empty): mixed;
static +POSITION: Class<EVariableSemantic__POSITION> & EVariableSemantic__POSITION & 0;// 0
static +NORMAL: Class<EVariableSemantic__NORMAL> & EVariableSemantic__NORMAL & 1;// 1
static +TEXCOORD: Class<EVariableSemantic__TEXCOORD> & EVariableSemantic__TEXCOORD & 2;// 2
static +TANGENT: Class<EVariableSemantic__TANGENT> & EVariableSemantic__TANGENT & 3;// 3
static +COLOR: Class<EVariableSemantic__COLOR> & EVariableSemantic__COLOR & 4;// 4
static +MODEL: Class<EVariableSemantic__MODEL> & EVariableSemantic__MODEL & 5;// 5
static +VIEW: Class<EVariableSemantic__VIEW> & EVariableSemantic__VIEW & 6;// 6
static +PROJECTION: Class<EVariableSemantic__PROJECTION> & EVariableSemantic__PROJECTION & 7;// 7
static +MODEL_VIEW: Class<EVariableSemantic__MODEL_VIEW> & EVariableSemantic__MODEL_VIEW & 8;// 8
static +MODEL_VIEW_PROJECTION: Class<EVariableSemantic__MODEL_VIEW_PROJECTION> & EVariableSemantic__MODEL_VIEW_PROJECTION & 9;// 9
static +MODEL_INVERSE: Class<EVariableSemantic__MODEL_INVERSE> & EVariableSemantic__MODEL_INVERSE & 10;// 10
static +VIEW_INVERSE: Class<EVariableSemantic__VIEW_INVERSE> & EVariableSemantic__VIEW_INVERSE & 11;// 11
static +PROJECTION_INVERSE: Class<EVariableSemantic__PROJECTION_INVERSE> & EVariableSemantic__PROJECTION_INVERSE & 12;// 12
static +MODEL_VIEW_INVERSE: Class<EVariableSemantic__MODEL_VIEW_INVERSE> & EVariableSemantic__MODEL_VIEW_INVERSE & 13;// 13
static +MODEL_VIEW_PROJECTION_INVERSE: Class<EVariableSemantic__MODEL_VIEW_PROJECTION_INVERSE> & EVariableSemantic__MODEL_VIEW_PROJECTION_INVERSE & 14;// 14
static +MODEL_INVERSE_TRANSPOSE: Class<EVariableSemantic__MODEL_INVERSE_TRANSPOSE> & EVariableSemantic__MODEL_INVERSE_TRANSPOSE & 15;// 15
static +MODEL_VIEW_INVERSE_TRANSPOSE: Class<EVariableSemantic__MODEL_VIEW_INVERSE_TRANSPOSE> & EVariableSemantic__MODEL_VIEW_INVERSE_TRANSPOSE & 16;// 16
static +VIEWPORT: Class<EVariableSemantic__VIEWPORT> & EVariableSemantic__VIEWPORT & 17;// 17

}

declare class EVariableSemantic__POSITION mixins EVariableSemantic {}
declare class EVariableSemantic__NORMAL mixins EVariableSemantic {}
declare class EVariableSemantic__TEXCOORD mixins EVariableSemantic {}
declare class EVariableSemantic__TANGENT mixins EVariableSemantic {}
declare class EVariableSemantic__COLOR mixins EVariableSemantic {}
declare class EVariableSemantic__MODEL mixins EVariableSemantic {}
declare class EVariableSemantic__VIEW mixins EVariableSemantic {}
declare class EVariableSemantic__PROJECTION mixins EVariableSemantic {}
declare class EVariableSemantic__MODEL_VIEW mixins EVariableSemantic {}
declare class EVariableSemantic__MODEL_VIEW_PROJECTION mixins EVariableSemantic {}
declare class EVariableSemantic__MODEL_INVERSE mixins EVariableSemantic {}
declare class EVariableSemantic__VIEW_INVERSE mixins EVariableSemantic {}
declare class EVariableSemantic__PROJECTION_INVERSE mixins EVariableSemantic {}
declare class EVariableSemantic__MODEL_VIEW_INVERSE mixins EVariableSemantic {}
declare class EVariableSemantic__MODEL_VIEW_PROJECTION_INVERSE mixins EVariableSemantic {}
declare class EVariableSemantic__MODEL_INVERSE_TRANSPOSE mixins EVariableSemantic {}
declare class EVariableSemantic__MODEL_VIEW_INVERSE_TRANSPOSE mixins EVariableSemantic {}
declare class EVariableSemantic__VIEWPORT mixins EVariableSemantic {}

    }

	declare module 'wonder.js/dist/es2015/renderer/shader/variable/EVariableType' {
        declare export  class EVariableType {
  constructor(...args: empty): mixed;
static +FLOAT_1: Class<EVariableType__FLOAT_1> & EVariableType__FLOAT_1 & 0;// 0
static +FLOAT_2: Class<EVariableType__FLOAT_2> & EVariableType__FLOAT_2 & 1;// 1
static +FLOAT_3: Class<EVariableType__FLOAT_3> & EVariableType__FLOAT_3 & 2;// 2
static +FLOAT_4: Class<EVariableType__FLOAT_4> & EVariableType__FLOAT_4 & 3;// 3
static +VECTOR_2: Class<EVariableType__VECTOR_2> & EVariableType__VECTOR_2 & 4;// 4
static +VECTOR_3: Class<EVariableType__VECTOR_3> & EVariableType__VECTOR_3 & 5;// 5
static +VECTOR_4: Class<EVariableType__VECTOR_4> & EVariableType__VECTOR_4 & 6;// 6
static +COLOR_3: Class<EVariableType__COLOR_3> & EVariableType__COLOR_3 & 7;// 7
static +FLOAT_MAT3: Class<EVariableType__FLOAT_MAT3> & EVariableType__FLOAT_MAT3 & 8;// 8
static +FLOAT_MAT4: Class<EVariableType__FLOAT_MAT4> & EVariableType__FLOAT_MAT4 & 9;// 9
static +BUFFER: Class<EVariableType__BUFFER> & EVariableType__BUFFER & 10;// 10
static +SAMPLER_CUBE: Class<EVariableType__SAMPLER_CUBE> & EVariableType__SAMPLER_CUBE & 11;// 11
static +SAMPLER_2D: Class<EVariableType__SAMPLER_2D> & EVariableType__SAMPLER_2D & 12;// 12
static +NUMBER_1: Class<EVariableType__NUMBER_1> & EVariableType__NUMBER_1 & 13;// 13
static +STRUCTURE: Class<EVariableType__STRUCTURE> & EVariableType__STRUCTURE & 14;// 14
static +STRUCTURES: Class<EVariableType__STRUCTURES> & EVariableType__STRUCTURES & 15;// 15
static +SAMPLER_ARRAY: Class<EVariableType__SAMPLER_ARRAY> & EVariableType__SAMPLER_ARRAY & 16;// 16
static +FLOAT_MAT4_ARRAY: Class<EVariableType__FLOAT_MAT4_ARRAY> & EVariableType__FLOAT_MAT4_ARRAY & 17;// 17

}

declare class EVariableType__FLOAT_1 mixins EVariableType {}
declare class EVariableType__FLOAT_2 mixins EVariableType {}
declare class EVariableType__FLOAT_3 mixins EVariableType {}
declare class EVariableType__FLOAT_4 mixins EVariableType {}
declare class EVariableType__VECTOR_2 mixins EVariableType {}
declare class EVariableType__VECTOR_3 mixins EVariableType {}
declare class EVariableType__VECTOR_4 mixins EVariableType {}
declare class EVariableType__COLOR_3 mixins EVariableType {}
declare class EVariableType__FLOAT_MAT3 mixins EVariableType {}
declare class EVariableType__FLOAT_MAT4 mixins EVariableType {}
declare class EVariableType__BUFFER mixins EVariableType {}
declare class EVariableType__SAMPLER_CUBE mixins EVariableType {}
declare class EVariableType__SAMPLER_2D mixins EVariableType {}
declare class EVariableType__NUMBER_1 mixins EVariableType {}
declare class EVariableType__STRUCTURE mixins EVariableType {}
declare class EVariableType__STRUCTURES mixins EVariableType {}
declare class EVariableType__SAMPLER_ARRAY mixins EVariableType {}
declare class EVariableType__FLOAT_MAT4_ARRAY mixins EVariableType {}

    }

	declare module 'wonder.js/dist/es2015/renderer/shader/variable/VariableLib' {
        import type {
          EVariableType
        } from 'wonder.js/dist/es2015/renderer/shader/variable/EVariableType';

	declare export class VariableLib  {
static a_position: ShaderVariable;
static a_positionVec2: ShaderVariable;
static a_currentFramePosition: ShaderVariable;
static a_nextFramePosition: ShaderVariable;
static a_normal: ShaderVariable;
static a_currentFrameNormal: ShaderVariable;
static a_nextFrameNormal: ShaderVariable;
static a_color: ShaderVariable;
static a_texCoord: ShaderVariable;
static a_tangent: ShaderVariable;
static u_color: ShaderVariable;
static u_mMatrix: ShaderVariable;
static u_vMatrix: ShaderVariable;
static u_pMatrix: ShaderVariable;
static u_mvpMatrix: ShaderVariable;
static u_vpMatrix: ShaderVariable;
static u_normalMatrix: ShaderVariable;
static u_samplerCube0: ShaderVariable;
static u_sampler2D0: ShaderVariable;
static u_sampler2D1: ShaderVariable;
static u_lightMapSampler: ShaderVariable;
static u_diffuseMapSampler: ShaderVariable;
static u_diffuseMap1Sampler: ShaderVariable;
static u_diffuseMap2Sampler: ShaderVariable;
static u_diffuseMap3Sampler: ShaderVariable;
static u_specularMapSampler: ShaderVariable;
static u_emissionMapSampler: ShaderVariable;
static u_normalMapSampler: ShaderVariable;
static u_reflectionMapSampler: ShaderVariable;
static u_refractionMapSampler: ShaderVariable;
static u_cameraPos: ShaderVariable;
static u_refractionRatio: ShaderVariable;
static u_reflectivity: ShaderVariable;
static u_map0SourceRegion: ShaderVariable;
static u_map1SourceRegion: ShaderVariable;
static u_diffuseMapSourceRegion: ShaderVariable;
static u_map0RepeatRegion: ShaderVariable;
static u_map1RepeatRegion: ShaderVariable;
static u_diffuseMapRepeatRegion: ShaderVariable;
static u_combineMode: ShaderVariable;
static u_mixRatio: ShaderVariable;
static u_lightMapIntensity: ShaderVariable;
static u_diffuse: ShaderVariable;
static u_specular: ShaderVariable;
static u_emission: ShaderVariable;
static u_shininess: ShaderVariable;
static u_lightModel: ShaderVariable;
static u_isBothSide: ShaderVariable;
static u_opacity: ShaderVariable;
static u_ambient: ShaderVariable;
static u_directionLights: ShaderVariable;
static u_pointLights: ShaderVariable;
static u_vpMatrixFromLight: ShaderVariable;
static u_lightPos: ShaderVariable;
static u_farPlane: ShaderVariable;
static u_interpolation: ShaderVariable;
static u_tilesHeightNumber: ShaderVariable;
static u_tilesWidthNumber: ShaderVariable;
static u_amplitude: ShaderVariable;
static u_jointColor: ShaderVariable;
static u_time: ShaderVariable;
static u_speed: ShaderVariable;
static u_shift: ShaderVariable;
static u_alphaThreshold: ShaderVariable;
static u_fireColor: ShaderVariable;
static u_layerHeightDatas: ShaderVariable;
static u_layerSampler2Ds: ShaderVariable;
static u_herb1Color: ShaderVariable;
static u_herb2Color: ShaderVariable;
static u_herb3Color: ShaderVariable;
static u_groundColor: ShaderVariable;
static u_ampScale: ShaderVariable;
static u_woodColor: ShaderVariable;
static u_roadColor: ShaderVariable;
static u_skyColor: ShaderVariable;
static u_cloudColor: ShaderVariable;
static u_brickColor: ShaderVariable;
static u_waveData: ShaderVariable;
static u_windMatrix: ShaderVariable;
static u_bumpMapSampler: ShaderVariable;
static u_bumpMap1Sampler: ShaderVariable;
static u_bumpMap2Sampler: ShaderVariable;
static u_bumpMap3Sampler: ShaderVariable;
static u_levelData: ShaderVariable;
static a_mVec4_0: ShaderVariable;
static a_mVec4_1: ShaderVariable;
static a_mVec4_2: ShaderVariable;
static a_mVec4_3: ShaderVariable;
static a_normalVec4_0: ShaderVariable;
static a_normalVec4_1: ShaderVariable;
static a_normalVec4_2: ShaderVariable;
static u_isRenderListEmpty: ShaderVariable;
static u_isReflectionRenderListEmpty: ShaderVariable;
static u_isRefractionRenderListEmpty: ShaderVariable;
static u_bitmapSampler: ShaderVariable;
static a_page: ShaderVariable;
static u_pageSampler2Ds: ShaderVariable;
static u_mixMapSampler: ShaderVariable;
static u_diffuseMap1RepeatRegion: ShaderVariable;
static u_diffuseMap2RepeatRegion: ShaderVariable;
static u_diffuseMap3RepeatRegion: ShaderVariable;
static u_grassMapDatas: ShaderVariable;
static a_quadIndex: ShaderVariable;
static u_grassMapSampler: ShaderVariable;
static u_windData: ShaderVariable;
static a_vertexIndex: ShaderVariable;
static u_grassRangeWidth: ShaderVariable;
static u_grassRangeHeight: ShaderVariable;
static u_terrainRangeWidth: ShaderVariable;
static u_terrainRangeHeight: ShaderVariable;
static u_terrainMinHeight: ShaderVariable;
static u_terrainMaxHeight: ShaderVariable;
static u_terrainSubdivisions: ShaderVariable;
static u_terrainScaleY: ShaderVariable;
static u_terrainPositionY: ShaderVariable;
static u_heightMapSampler: ShaderVariable;
static u_lightColor: ShaderVariable;
static a_jointIndice: ShaderVariable;
static a_jointWeight: ShaderVariable;
static u_jointMatrices: ShaderVariable
}
	declare export type ShaderVariable = {
type: EVariableType,
value: any
};
    }

	declare module 'wonder.js/dist/es2015/renderer/shader/variable/VariableNameTable' {
        declare export class VariableNameTable  {
static getVariableName(name: string): string
}
    }

	declare module 'wonder.js/dist/es2015/renderer/shader/variable/VariableTypeTable' {
        import type {
          EVariableType
        } from 'wonder.js/dist/es2015/renderer/shader/variable/EVariableType';

	declare export class VariableTypeTable  {
static getVariableType(type: EVariableType): string
}
    }

	declare module 'wonder.js/dist/es2015/renderer/state/BasicState' {
        import type {
          WebGLState
        } from 'wonder.js/dist/es2015/renderer/state/WebGLState';

	import type {
          Material
        } from 'wonder.js/dist/es2015/material/Material';

	declare export class BasicState mixins WebGLState {
static create(): BasicState;
setState(material: Material): void
}
    }

	declare module 'wonder.js/dist/es2015/renderer/state/WebGLState' {
        import type {
          Material
        } from 'wonder.js/dist/es2015/material/Material';

	declare export class WebGLState  {
setState(material: Material): void
}
    }

	declare module 'wonder.js/dist/es2015/structure/Color' {
        import type {
          Vector3
        } from 'wonder.js/dist/es2015/math/Vector3';

	declare export class Color  {
static create(colorVal?: string): Color;
dirty: boolean;
r: number;
g: number;
b: number;
a: number;
initWhenCreate(colorVal?: string): void;
toVector3(): Vector3;
toVector4(): any;
toString(): string;
clone(): Color;
isEqual(color: Color): boolean
}
    }

	declare module 'wonder.js/dist/es2015/structure/Face3' {
        import type {
          Vector3
        } from 'wonder.js/dist/es2015/math/Vector3';

	import type {
          Collection
        } from 'wonder-commonlib/dist/es2015/Collection';

	declare export class Face3  {
static create(
aIndex: number,
bIndex: number,
cIndex: number,
faceNormal?: Vector3,
vertexNormals?: Collection<Vector3>): Face3;
constructor(aIndex: number, bIndex: number, cIndex: number, faceNormal: Vector3, vertexNormals: Collection<Vector3>): this;
faceNormal: Vector3;
aIndex: number;
bIndex: number;
cIndex: number;
vertexNormals: Collection<Vector3>;
clone(): this;
hasFaceNormal(): boolean;
hasVertexNormal(): boolean
}
    }

	declare module 'wonder.js/dist/es2015/structure/Point' {
        declare export class Point  {
x: number;
y: number;
constructor(x?: number, y?: number): this;
static create(x?: number, y?: number): Point
}
    }

	declare module 'wonder.js/dist/es2015/structure/RectRegion' {
        import type {
          Vector4
        } from 'wonder.js/dist/es2015/math/Vector4';

	declare export class RectRegion mixins Vector4 {
width: number;
height: number;
clone(): RectRegion;
isNotEmpty(): boolean
}
    }

	declare module 'wonder.js/dist/es2015/structure/View' {
        import type {
          ContextConfigData
        } from 'wonder.js/dist/es2015/core/data/MainData';

	declare export class ViewWebGL mixins IView {
static create(view: any): ViewWebGL;
constructor(dom: any): this;
offset: {
x: any,
y: any
};
dom: any;
width: number;
height: number;
styleWidth: string;
styleHeight: string;
x: number;
y: number;
initCanvas(): void;
getContext(contextConfig: ContextConfigData): WebGLRenderingContext
}
	declare export interface IView {
offset: {
x: number,
y: number
},
x: number,
y: number,
width: number,
height: number,
styleWidth: string,
styleHeight: string,
dom: any,
getContext(contextConfig: ContextConfigData): WebGLRenderingContext,
initCanvas(): void,
offset: {
x: number,
y: number
},
x: number,
y: number,
width: number,
height: number,
styleWidth: string,
styleHeight: string,
dom: any,
getContext(contextConfig: ContextConfigData): WebGLRenderingContext,
initCanvas(): void
} 
    }

	declare module 'wonder.js/dist/es2015/utils/ArrayUtils' {
        import type {
          ArrayUtils as ArrayUtils$
        } from 'wonder-commonlib/dist/es2015/utils/ArrayUtils';

	declare export class ArrayUtils mixins ArrayUtils$ {
static hasRepeatItems(arr: Array<any>): boolean;
static contain(arr: Array<any>, item: any): boolean
}
    }

	declare module 'wonder.js/dist/es2015/utils/BufferUtils' {
        import type {
          EVariableType
        } from 'wonder.js/dist/es2015/renderer/shader/variable/EVariableType';

	import type {
          ArrayBuffer
        } from 'wonder.js/dist/es2015/renderer/buffer/ArrayBuffer';

	declare export class BufferUtils  {
static convertArrayToArrayBuffer(type: EVariableType, value: Array<any>): ArrayBuffer
}
    }

	declare module 'wonder.js/dist/es2015/utils/ClassUtils' {
        declare export class ClassUtils  {
static getClassNameByInstance(obj: any): any;
static addClass(className: string, _class: any): void;
static addClassNameAttributeToClass(className: string, _class: any): void;
static getClass(className: string): any
}
    }

	declare module 'wonder.js/dist/es2015/utils/JudgeUtils' {
        import type {
          JudgeUtils as JudgeUtils$
        } from 'wonder-commonlib/dist/es2015/utils/JudgeUtils';

	import type {
          Entity
        } from 'wonder.js/dist/es2015/core/Entity';

	import type {
          Component
        } from 'wonder.js/dist/es2015/core/Component';

	import type {
          Collection
        } from 'wonder-commonlib/dist/es2015/Collection';

	declare export class JudgeUtils mixins JudgeUtils$ {
static isView(obj: any): boolean;
static isEqual(target1: any, target2: any): boolean;
static isPowerOfTwo(value: number): boolean;
static isFloatArray(data: any): boolean;
static isInterface(target: any, memberOfInterface: string): boolean;
static isSelf(self: Entity, entityObject: Entity): boolean;
static isComponenet(component: Component): boolean;
static isDom(obj: any): boolean;
static isCollection(list: Collection<any>): boolean;
static isClass(objInstance: any, className: string): boolean
}
    }

	declare module 'wonder.js/dist/es2015/utils/Log' {
        import type {
          Log as Log$
        } from 'wonder-commonlib/dist/es2015/Log';

	declare export class Log mixins Log$ {}
    }

	declare module 'wonder.js/dist/es2015/utils/MathUtils' {
        declare export class MathUtils  {
static clamp(num: number, below: number, up: number): number;
static bigThan(num: number, below: number): number;
static generateZeroToOne(): number;
static generateMinToMax(min: number, max: number): number;
static generateInteger(min: number, max: number): number;
static mod(a: number, b: number): number;
static maxFloorIntegralMultiple(a: number, b: number): number
}
    }

	declare module 'wonder.js/dist/es2015/utils/RenderUtils' {
        import type {
          Collection
        } from 'wonder-commonlib/dist/es2015/Collection';

	import type {
          GameObject
        } from 'wonder.js/dist/es2015/core/entityObject/gameObject/GameObject';

	declare export class RenderUtils  {
static getGameObjectRenderList(sourceList: Collection<GameObject>): Collection<GameObject>
}
    }

	declare module 'wonder.js/dist/es2015/utils/ShaderLibUtils' {
        import type {
          Geometry
        } from 'wonder.js/dist/es2015/component/geometry/Geometry';

	import type {
          Shader
        } from 'wonder.js/dist/es2015/renderer/shader/shader/Shader';

	declare export class ShaderLibUtils  {
static addVerticeShaderLib(geometry: Geometry, shader: Shader): void
}
    }

	declare module 'wonder.js/dist/es2015/utils/SortUtils' {
        declare export class SortUtils  {
static insertSort(
targetArr: Array<any>,
compareFunc: (a: any, b: any) => boolean,
isChangeSelf?: boolean): Array<any>;
static quickSort(
targetArr: Array<any>,
compareFunc: (a: any, b: any) => boolean,
isChangeSelf?: boolean): Array<any>
}
    }

	declare module 'wonder.js/dist/es2015/utils/time/CommonTimeController' {
        import type {
          TimeController
        } from 'wonder.js/dist/es2015/utils/time/TimeController';

	declare export class CommonTimeController mixins TimeController {
static create(): CommonTimeController;
getNow(): any
}
    }

	declare module 'wonder.js/dist/es2015/utils/time/DirectorTimeController' {
        import type {
          TimeController
        } from 'wonder.js/dist/es2015/utils/time/TimeController';

	declare export class DirectorTimeController mixins TimeController {
static create(): DirectorTimeController;
gameTime: number;
fps: number;
isTimeChange: boolean;
deltaTime: number;
tick(time: number): void;
start(): void;
resume(): void;
getNow(): any
}
    }

	declare module 'wonder.js/dist/es2015/utils/time/TimeController' {
        declare export class TimeController  {
elapsed: number;
pauseElapsed: number;
pauseTime: number;
startTime: number;
start(): void;
stop(): void;
pause(): void;
resume(): void;
computeElapseTime(time: number): number;
getNow(): any
}
    }

	declare module 'wonder.js/dist/es2015/config/CompileConfig' {
        declare export var CompileConfig: {
isCompileTest: boolean,
closeContractTest: boolean
};
    }

	declare module 'wonder.js/dist/es2015/event/interface/IEventData' {
        declare export interface IEventData {
returnValue: boolean,
preventDefault: () => void,
returnValue: boolean,
preventDefault: () => void
} 
	declare export type IKeyboardEventData = {
ctrlKey: number,
altKey: number,
shiftKey: number,
metaKey: number,
keyCode: number,
ctrlKey: number,
altKey: number,
shiftKey: number,
metaKey: number,
keyCode: number
} & IEventData

	declare export type IMouseEventData = {
clientX: number,
clientY: number,
pageX: number,
pageY: number,
button: number,
detail?: number,
wheelDelta?: number,
movementX?: number,
webkitMovementX?: number,
mozMovementX?: number,
movementY?: number,
webkitMovementY?: number,
mozMovementY?: number,
target: HTMLElement,
currentTarget: HTMLElement,
clientX: number,
clientY: number,
pageX: number,
pageY: number,
button: number,
detail?: number,
wheelDelta?: number,
movementX?: number,
webkitMovementX?: number,
mozMovementX?: number,
movementY?: number,
webkitMovementY?: number,
mozMovementY?: number,
target: HTMLElement,
currentTarget: HTMLElement
} & IEventData

	declare export type ITouchEventData = {
touches: Array<ITouchData>,
changedTouches: Array<ITouchData>,
targetTouches: Array<ITouchData>,
target: HTMLElement,
currentTarget: HTMLElement | null,
touches: Array<ITouchData>,
changedTouches: Array<ITouchData>,
targetTouches: Array<ITouchData>,
target: HTMLElement,
currentTarget: HTMLElement | null
} & IEventData

	declare export interface ITouchData {
clientX: number,
clientY: number,
identifier: number,
pageX: number,
pageY: number,
screenX: number,
screenY: number,
radiusX: number,
radiusY: number,
rotationAngle: number,
force: number,
target: HTMLElement,
clientX: number,
clientY: number,
identifier: number,
pageX: number,
pageY: number,
screenX: number,
screenY: number,
radiusX: number,
radiusY: number,
rotationAngle: number,
force: number,
target: HTMLElement
} 
	declare export type IPointEventData = {
clientX: number,
clientY: number,
pageX: number,
pageY: number,
button?: number,
detail?: number,
wheelDelta?: number,
movementX?: number,
webkitMovementX?: number,
mozMovementX?: number,
movementY?: number,
webkitMovementY?: number,
mozMovementY?: number,
target: HTMLElement,
currentTarget: HTMLElement | null,
clientX: number,
clientY: number,
pageX: number,
pageY: number,
button?: number,
detail?: number,
wheelDelta?: number,
movementX?: number,
webkitMovementX?: number,
mozMovementX?: number,
movementY?: number,
webkitMovementY?: number,
mozMovementY?: number,
target: HTMLElement,
currentTarget: HTMLElement | null
} & IEventData

    }

	declare module 'wonder.js/dist/es2015/renderer/shader/chunk/ShaderChunk' {
        declare export var empty: GLSLChunk;
	declare export var NULL: number;
	declare export var basic_materialColor_fragment: GLSLChunk;
	declare export var end_basic_fragment: GLSLChunk;
	declare export var common_define: GLSLChunk;
	declare export var common_fragment: GLSLChunk;
	declare export var common_function: GLSLChunk;
	declare export var common_vertex: GLSLChunk;
	declare export var highp_fragment: GLSLChunk;
	declare export var lowp_fragment: GLSLChunk;
	declare export var mediump_fragment: GLSLChunk;
	declare export type GLSLChunk = {
top?: string,
define?: string,
varDeclare?: string,
funcDeclare?: string,
funcDefine?: string,
body?: string
};
    }

    }
