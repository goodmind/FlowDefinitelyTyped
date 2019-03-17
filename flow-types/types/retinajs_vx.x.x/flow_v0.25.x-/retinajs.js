declare module "retinajs" {
  declare export default typeof retinajs$retina;

  declare var retinajs: typeof npm$namespace$retinajs;

  declare var npm$namespace$retinajs: {
    retina: typeof retinajs$retina
  };
  declare function retinajs$retina(images?: any): void;
}
