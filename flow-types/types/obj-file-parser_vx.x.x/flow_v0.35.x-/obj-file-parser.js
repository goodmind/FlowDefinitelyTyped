declare module 'obj-file-parser' {
        declare class ObjFileParser  {
constructor(fileContents: any, defaultModelName?: any): this;
parse(): ObjFileParser$ObjFileParser$ObjFile
}
	declare interface ObjFileParser$ObjFile {
models: ObjFileParser$ObjModel[],
materialLibraries: any[]
} 

declare interface ObjFileParser$ObjModel {
name: string,
vertices: ObjFileParser$Vertex[],
textureCoords: ObjFileParser$VertexTexture[],
vertexNormals: ObjFileParser$Vertex[],
faces: ObjFileParser$Face[]
} 

declare interface ObjFileParser$Face {
material: any,
group: string,
smoothingGroup: number,
vertices: ObjFileParser$FaceVertex[]
} 

declare interface ObjFileParser$FaceVertex {
vertexIndex: number,
textureCoordsIndex: number,
vertexNormalIndex: number
} 

declare interface ObjFileParser$Vertex {
x: number,
y: number,
z: number
} 

declare interface ObjFileParser$VertexTexture {
u: number,
v: number,
w: number
} 
	declare module.exports: typeof ObjFileParser

    }
