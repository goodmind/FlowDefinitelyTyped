declare interface Chai$TypeComparison {
  path(msg?: string): Chai$Assertion;
  directory(msg?: string): Chai$Assertion;
  file(msg?: string): Chai$Assertion;
}

declare interface Chai$Deep {
  contents(array: any[], msg?: string): Chai$Assertion;
  files(array: any[], msg?: string): Chai$Assertion;
  subDirs(array: any[], msg?: string): Chai$Assertion;
}

declare interface Chai$Include {
  contents(array: any[], msg?: string): Chai$Assertion;
  files(array: any[], msg?: string): Chai$Assertion;
  subDirs(array: any[], msg?: string): Chai$Assertion;
}

declare interface Chai$LanguageChains {
  json: Chai$Assertion;
  using: Chai$Assertion;
}

declare type Chai$Assertion = {
  basename(path?: string, name?: string, msg?: string): Chai$Assertion,
  notBasename(path: string, name: string, msg?: string): Chai$Assertion,
  dirname(name: string, msg?: string): Chai$Assertion,
  notDirname(path: string, name: string, msg?: string): Chai$Assertion,
  extname(path: string, name?: string, msg?: string): Chai$Assertion,
  notExtname(path: string, name: string, msg?: string): Chai$Assertion,
  pathExists(path: string, msg?: string): Chai$Assertion,
  notPathExists(path: string, msg?: string): Chai$Assertion,
  isDirectory(path: string, msg?: string): Chai$Assertion,
  notIsDirectory(path: string, msg?: string): Chai$Assertion,
  isEmptyDirectory(path: string, msg?: string): Chai$Assertion,
  notIsEmptyDirectory(path: string, msg?: string): Chai$Assertion,
  contents(array: any[], msg?: string): Chai$Assertion,
  directoryContent(path: string, array: any[], msg?: string): Chai$Assertion,
  notDirectoryContent(path: string, array: any[], msg?: string): Chai$Assertion,
  directoryDeepContent(
    path: string,
    array: any[],
    msg?: string
  ): Chai$Assertion,
  notDirectoryDeepContent(
    path: string,
    array: any[],
    msg?: string
  ): Chai$Assertion,
  directoryInclude(path: string, array: any[], msg?: string): Chai$Assertion,
  notDirectoryInclude(path: string, array: any[], msg?: string): Chai$Assertion,
  files(array: any[], msg?: string): Chai$Assertion,
  directoryFiles(path: string, array: any[], msg?: string): Chai$Assertion,
  notDirectoryFiles(path: string, array: any[], msg?: string): Chai$Assertion,
  directoryDeepFiles(path: string, array: any[], msg?: string): Chai$Assertion,
  notDirectoryDeepFiles(
    path: string,
    array: any[],
    msg?: string
  ): Chai$Assertion,
  directoryIncludeFiles(
    path: string,
    array: any[],
    msg?: string
  ): Chai$Assertion,
  notDirectoryIncludeFiles(
    path: string,
    array: any[],
    msg?: string
  ): Chai$Assertion,
  subDirs(array: any[], msg?: string): Chai$Assertion,
  directorySubDirs(path: string, array: any[], msg?: string): Chai$Assertion,
  notDirectorySubDirs(path: string, array: any[], msg?: string): Chai$Assertion,
  directoryDeepSubDirs(
    path: string,
    array: any[],
    msg?: string
  ): Chai$Assertion,
  notDirectoryDeepSubDirs(
    path: string,
    array: any[],
    msg?: string
  ): Chai$Assertion,
  directoryIncludeSubDirs(
    path: string,
    array: any[],
    msg?: string
  ): Chai$Assertion,
  notDirectoryIncludeSubDirs(
    path: string,
    array: any[],
    msg?: string
  ): Chai$Assertion,
  directoryEqual(path: string, otherPath: string, msg?: string): Chai$Assertion,
  notDirectoryEqual(
    path: string,
    otherPath: string,
    msg?: string
  ): Chai$Assertion,
  directoryDeepEqual(
    path: string,
    otherPath: string,
    msg?: string
  ): Chai$Assertion,
  notDirectoryDeepEqual(
    path: string,
    otherPath: string,
    msg?: string
  ): Chai$Assertion,
  isFile(path: string, msg?: string): Chai$Assertion,
  notIsFile(path: string, msg?: string): Chai$Assertion,
  isEmptyFile(path: string, msg?: string): Chai$Assertion,
  notIsEmptyFile(path: string, msg?: string): Chai$Assertion,
  content(data: any, msg?: string): Chai$Assertion,
  fileContent(path: string, data: any, msg?: string): Chai$Assertion,
  notFileContent(path: string, data: any, msg?: string): Chai$Assertion,
  fileContentMatch(path: string, regExp: RegExp, msg?: string): Chai$Assertion,
  notFileContentMatch(
    path: string,
    regExp: RegExp,
    msg?: string
  ): Chai$Assertion,
  fileEqual(path: string, otherPath: string, msg?: string): Chai$Assertion,
  notFileEqual(path: string, otherPath: string, msg?: string): Chai$Assertion,
  jsonFile(path: string, msg?: string): Chai$Assertion,
  notJsonFile(path: string, msg?: string): Chai$Assertion,
  jsonSchemaFile(path: string, schema: any, msg?: string): Chai$Assertion,
  notJsonSchemaFile(path: string, schema: any, msg?: string): Chai$Assertion,
  schema(obj: { [key: string]: any }): Chai$Assertion
} & Chai$LanguageChains &
  NumericComparison &
  Chai$TypeComparison;

declare interface Chai$Assert {
  basename(path: string, name: string, msg?: string): void;
  notBasename(path: string, name: string, msg?: string): void;
  dirname(path: string, name?: string, msg?: string): void;
  notDirname(path: string, name: string, msg?: string): void;
  extname(path: string, name: string, msg?: string): void;
  notExtname(path: string, name: string, msg?: string): void;
  path(msg?: string): void;
  pathExists(path: string, msg?: string): void;
  notPathExists(path: string, msg?: string): void;
  directory(msg?: string): void;
  isDirectory(path: string, msg?: string): void;
  notIsDirectory(path: string, msg?: string): void;
  isEmptyDirectory(path: string, msg?: string): void;
  notIsEmptyDirectory(path: string, msg?: string): void;
  contents(array: any[], msg?: string): void;
  directoryContent(path: string, array: any[], msg?: string): void;
  notDirectoryContent(path: string, array: any[], msg?: string): void;
  directoryDeepContent(path: string, array: any[], msg?: string): void;
  notDirectoryDeepContent(path: string, array: any[], msg?: string): void;
  directoryInclude(path: string, array: any[], msg?: string): void;
  notDirectoryInclude(path: string, array: any[], msg?: string): void;
  files(array: any[], msg?: string): void;
  directoryFiles(path: string, array: any[], msg?: string): void;
  notDirectoryFiles(path: string, array: any[], msg?: string): void;
  directoryDeepFiles(path: string, array: any[], msg?: string): void;
  notDirectoryDeepFiles(path: string, array: any[], msg?: string): void;
  directoryIncludeFiles(path: string, array: any[], msg?: string): void;
  notDirectoryIncludeFiles(path: string, array: any[], msg?: string): void;
  subDirs(array: any[], msg?: string): void;
  directorySubDirs(path: string, array: any[], msg?: string): void;
  notDirectorySubDirs(path: string, array: any[], msg?: string): void;
  directoryDeepSubDirs(path: string, array: any[], msg?: string): void;
  notDirectoryDeepSubDirs(path: string, array: any[], msg?: string): void;
  directoryIncludeSubDirs(path: string, array: any[], msg?: string): void;
  notDirectoryIncludeSubDirs(path: string, array: any[], msg?: string): void;
  directoryEqual(path: string, otherPath: string, msg?: string): void;
  notDirectoryEqual(path: string, otherPath: string, msg?: string): void;
  directoryDeepEqual(path: string, otherPath: string, msg?: string): void;
  notDirectoryDeepEqual(path: string, otherPath: string, msg?: string): void;
  file(msg?: string): void;
  isFile(path: string, msg?: string): void;
  notIsFile(path: string, msg?: string): void;
  isEmptyFile(path: string, msg?: string): void;
  notIsEmptyFile(path: string, msg?: string): void;
  fileContent(path: string, data: any, msg?: string): void;
  notFileContent(path: string, data: any, msg?: string): void;
  fileContentMatch(path: string, regExp: RegExp, msg?: string): void;
  notFileContentMatch(path: string, regExp: RegExp, msg?: string): void;
  fileEqual(path: string, otherPath: string, msg?: string): void;
  notFileEqual(path: string, otherPath: string, msg?: string): void;
  jsonFile(path: string, msg?: string): void;
  notJsonFile(path: string, msg?: string): void;
  jsonSchemaFile(path: string, schema: any, msg?: string): void;
  notJsonSchemaFile(path: string, schema: any, msg?: string): void;
  schema(obj: { [key: string]: any }): void;
}
declare module "global" {
}
declare module "chai-fs" {
  declare function chaiFs(chai: any, utils: any): void;

  declare module.exports: typeof chaiFs;

  declare interface Object {
    should: Chai$Chai$Assertion;
  }
}
