declare module "swagger-ui-dist" {
  /**
   * get an absolute path to swagger ui for static file serving
   */
  declare export function getAbsoluteFSPath(): string;

  declare export function absolutePath(): string;

  declare export var SwaggerUIBundle: any;
  declare export var SwaggerUIStandalonePreset: any;
}
