declare module "gl-shader" {
  declare interface Parameter {
    type: string;
    name: string;
  }
  declare interface Attribute {
    location: number[] | number;
    pointer(
      type?: number,
      normalized?: boolean,
      stride?: number,
      offset?: number
    ): number;
  }
  declare class Shader {
    gl: WebGLRenderingContext;
    program: WebGLProgram;
    vertShader: WebGLShader;
    fragShader: WebGLShader;
    attributes: {
      [key: string]: Attribute & any[]
    };
    uniforms: {
      [key: string]: any
    };
    constructor(gl: WebGLRenderingContext): this;
    bind(): void;
    dispose(): void;
    update(
      vertex: string,
      fragment: string,
      uniforms?: Parameter[],
      attributes?: Parameter[]
    ): void;
    update(obj: {
      vertex: string,
      fragment: string,
      uniforms: Parameter[],
      attributes: Parameter[]
    }): void;
  }
  declare function createShader(
    gl: WebGLRenderingContext,
    vertex: string,
    fragment: string,
    uniforms?: Parameter[],
    attributes?: Parameter[]
  ): Shader;

  declare function createShader(
    gl: WebGLRenderingContext,
    options: {
      vertex: string,
      fragment: string,
      uniforms?: Parameter[],
      attributes?: Parameter[]
    }
  ): Shader;

  declare module.exports: typeof createShader;
}
