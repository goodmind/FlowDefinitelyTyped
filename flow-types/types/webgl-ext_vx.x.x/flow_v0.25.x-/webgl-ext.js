declare module "webgl-ext" {
  declare interface HTMLCanvasElement {
    getContext(
      contextId: "webgl" | "experimental-webgl",
      contextAttributes?: WebGLContextAttributes
    ): (WebGLRenderingContext & WebGL1Extensions) | null;
  }
  declare interface WebGL1Extensions {
    getExtension(
      name: "EXT_color_buffer_half_float"
    ): EXT_color_buffer_half_float;
    getExtension(
      name: "WEBGL_compressed_texture_atc"
    ): WEBGL_compressed_texture_atc;
    getExtension(
      name: "WEBGL_compressed_texture_etc1"
    ): WEBGL_compressed_texture_etc1;
    getExtension(
      name: "WEBGL_compressed_texture_pvrtc"
    ): WEBKIT_WEBGL_compressed_texture_pvrtc;
    getExtension(
      name: "WEBKIT_EXT_texture_filter_anisotropic"
    ): EXT_texture_filter_anisotropic;
    getExtension(
      name: "WEBKIT_WEBGL_compressed_texture_atc"
    ): WEBGL_compressed_texture_atc;
    getExtension(
      name: "WEBKIT_WEBGL_compressed_texture_pvrtc"
    ): WEBKIT_WEBGL_compressed_texture_pvrtc;
    getExtension(
      name: "WEBKIT_WEBGL_compressed_texture_s3tc"
    ): WEBGL_compressed_texture_s3tc;
    getExtension(name: "WEBKIT_WEBGL_depth_texture"): WEBGL_depth_texture;
    getExtension(name: "WEBKIT_WEBGL_lose_context"): WEBGL_lose_context;
  }
  declare interface WebGLObject {
    +__WebGLObject: void;
  }
  declare interface WebGLBuffer {
    +__WebGLBuffer: void;
  }
  declare interface WebGLFramebuffer {
    +__WebGLFramebuffer: void;
  }
  declare interface WebGLProgram {
    +__WebGLProgram: void;
  }
  declare interface WebGLRenderbuffer {
    +__WebGLRenderbuffer: void;
  }
  declare interface WebGLShader {
    +__WebGLShader: void;
  }
  declare interface WebGLTexture {
    +__WebGLTexture: void;
  }
  declare interface WebGLUniformLocation {
    +__WebGLUniformLocation: void;
  }
  declare type WebGLVertexArrayObjectOES = {
    +__WebGLVertexArrayObjectOES: void
  } & WebGLObject;

  declare interface EXT_frag_depth {
    +__EXT_frag_depth: void;
  }
  declare interface EXT_shader_texture_lod {
    +__EXT_shader_texture_lod: void;
  }
  declare interface OES_element_index_uint {
    +__OESElementIndexUint: void;
  }
  declare interface OES_texture_float {
    +__OES_texture_float: void;
  }
  declare interface OES_texture_float_linear {
    +__OES_texture_float_linear: void;
  }
  declare interface OES_texture_half_float_linear {
    +__OES_texture_half_float_linear: void;
  }
  declare interface EXT_color_buffer_half_float {
    +RGBA16F_EXT: number;
    +RGB16F_EXT: number;
    +FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE_EXT: number;
    +UNSIGNED_NORMALIZED_EXT: number;
  }
  declare interface OES_vertex_array_object {
    createVertexArrayOES(): WebGLVertexArrayObjectOES | null;
    deleteVertexArrayOES(arrayObject: WebGLVertexArrayObjectOES | null): void;
    isVertexArrayOES(arrayObject: WebGLVertexArrayObjectOES | null): boolean;
    bindVertexArrayOES(arrayObject: WebGLVertexArrayObjectOES | null): void;
  }
  declare interface WEBGL_compressed_texture_atc {
    +COMPRESSED_RGB_ATC_WEBGL: number;
    +COMPRESSED_RGBA_ATC_EXPLICIT_ALPHA_WEBGL: number;
    +COMPRESSED_RGBA_ATC_INTERPOLATED_ALPHA_WEBGL: number;
  }
  declare interface WEBGL_compressed_texture_etc1 {
    +COMPRESSED_RGB_ETC1_WEBGL: number;
  }
  declare interface WEBKIT_WEBGL_compressed_texture_pvrtc {
    +COMPRESSED_RGB_PVRTC_4BPPV1_IMG: number;
    +COMPRESSED_RGB_PVRTC_2BPPV1_IMG: number;
    +COMPRESSED_RGBA_PVRTC_4BPPV1_IMG: number;
    +COMPRESSED_RGBA_PVRTC_2BPPV1_IMG: number;
  }
}
