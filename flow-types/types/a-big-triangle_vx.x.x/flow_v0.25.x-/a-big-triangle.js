declare module "a-big-triangle" {
  declare function createABigTriangle(gl: WebGLRenderingContext): void;

  declare module.exports: typeof createABigTriangle;
}
