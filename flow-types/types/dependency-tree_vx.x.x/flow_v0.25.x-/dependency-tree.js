declare module "dependency-tree" {
  declare var npm$namespace$dependencyTree: {
    toList: typeof dependencyTree$toList
  };
  declare interface dependencyTree$DependencyObj {
    [k: string]: dependencyTree$DependencyObj;
  }

  declare interface dependencyTree$Options {
    filename: string;
    directory?: string;
    requireConfig?: string;
    webpackConfig?: string;
    nodeModulesConfig?: any;
    detective?: any;
    visited?: dependencyTree$DependencyObj;
    filter?: (path: string) => boolean;
    nonExistent?: string[];
    isListForm?: boolean;
  }

  declare function dependencyTree$toList(
    options: dependencyTree$Options
  ): string[];

  declare function dependencyTree(
    options: dependencyTree$dependencyTree$Options
  ): dependencyTree$dependencyTree$DependencyObj;

  declare module.exports: typeof dependencyTree;
}
