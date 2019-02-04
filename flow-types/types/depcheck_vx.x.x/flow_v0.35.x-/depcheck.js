declare module 'depcheck' {
        declare function depcheck(
rootDir: string,
options: depcheck$depcheck$Options): Promise<depcheck$depcheck$Results>

	declare function depcheck<T>(
rootDir: string,
options: depcheck$depcheck$Options,
callback: (results: depcheck$depcheck$Results) => T): Promise<T>

	
      declare var npm$namespace$depcheck: {
        
        parser: typeof depcheck$parser,
detector: typeof depcheck$detector,
special: typeof depcheck$special,
      }
declare interface depcheck$Node {
[key: string]: any
} 

declare type depcheck$Parser = (
content: string,
filePath: string,
deps: $ReadOnlyArray<string>,
rootDir: string) => depcheck$Node;

declare type depcheck$Detector = (node: depcheck$Node) => $ReadOnlyArray<string> | string;

declare interface depcheck$Options {
withoutDev?: boolean,
ignoreBinPackage?: boolean,
ignoreDirs?: $ReadOnlyArray<string>,
ignoreMatches?: $ReadOnlyArray<string>,
parsers?: {
[match: string]: depcheck$Parser
},
detectors?: $ReadOnlyArray<depcheck$Detector>,
specials?: $ReadOnlyArray<depcheck$Parser>
} 

declare interface depcheck$Results {
dependencies: string[],
devDependencies: string[],
missing: string[],
using: string[],
invalidFiles: string[],
invalidDirs: string[]
} 

declare var depcheck$parser: {
coffee: depcheck$Parser,
es6: depcheck$Parser,
es7: depcheck$Parser,
jsx: depcheck$Parser,
sass: depcheck$Parser,
typescript: depcheck$Parser
};

declare var depcheck$detector: {
expressViewEngine: depcheck$Detector,
gruntLoadTaskCallExpression: depcheck$Detector,
importDeclaration: depcheck$Detector,
requireCallExpression: depcheck$Detector,
requireResolveCallExpression: depcheck$Detector
};

declare var depcheck$special: {
babel: depcheck$Parser,
bin: depcheck$Parser,
commitizen: depcheck$Parser,
eslint: depcheck$Parser,
"feross-standard": depcheck$Parser,
"gulp-load-plugins": depcheck$Parser,
mocha: depcheck$Parser,
webpack: depcheck$Parser
};
	declare module.exports: typeof depcheck

    }
