declare module 'gl' {
        declare interface StackGLExtension {
getExtension(
extensionName: "STACKGL_resize_drawingbuffer"): STACKGL_resize_drawingbuffer | null,
getExtension(extensionName: "STACKGL_destroy_context"): STACKGL_destroy_context | null
} 
	declare interface STACKGL_resize_drawingbuffer {
resize(width: GLint, height: GLint): void
} 
	declare interface STACKGL_destroy_context {
destroy(): void
} 
	declare function createContext(
width: number,
height: number,
options?: WebGLContextAttributes): WebGLRenderingContext & StackGLExtension

	declare module.exports: typeof createContext

    }
