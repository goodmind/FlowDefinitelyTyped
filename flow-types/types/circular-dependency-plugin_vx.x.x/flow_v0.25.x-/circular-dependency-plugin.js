declare module "circular-dependency-plugin" {
  import type { Plugin, Module, compilation } from "webpack";

  declare export default typeof CircularDependencyPlugin;

  declare class CircularDependencyPlugin mixins Plugin {
    constructor(options?: CircularDependencyPlugin$Options): this;
  }
  declare interface CircularDependencyPlugin$Options {
    allowAsyncCycles?: boolean;
    cwd?: string;
    exclude?: RegExp;
    failOnError?: boolean;
    onDetected?: (x: {
      module: Module,
      paths: string[],
      compilation: compilation.Compilation
    }) => void;
    onEnd?: (x: {
      compilation: compilation.Compilation
    }) => void;
    onStart?: (x: {
      compilation: compilation.Compilation
    }) => void;
  }
}
