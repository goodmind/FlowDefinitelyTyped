declare module 'fs-finder' {
        declare type FsFinder$AsyncFunction = (paths: string | string[]) => void;

declare type FsFinder$Type = string;

declare type FsFinder$Mask = string;

declare type FsFinder$Directory = string;

declare export class FsFinder$Finder mixins FsFinder$Base {
static TIME_FORMAT: string;
static in(path: string): FsFinder$Finder;
static from(path: string): FsFinder$Finder;
static find(
path: string,
fn?: FsFinder$AsyncFunction,
type?: FsFinder$Type): FsFinder$Finder;
static findFiles(path?: string, fn?: FsFinder$AsyncFunction): FsFinder$Finder;
static findDirectories(path?: string, fn?: FsFinder$AsyncFunction): FsFinder$Finder;
static findFile(path?: string, fn?: FsFinder$AsyncFunction): FsFinder$Finder;
static findDirectory(path?: string, fn?: FsFinder$AsyncFunction): FsFinder$Finder;
find(
mask?: FsFinder$Mask,
fn?: FsFinder$AsyncFunction,
type?: FsFinder$Type): string[];
findFiles(mask?: FsFinder$Mask, fn?: FsFinder$AsyncFunction): string[];
findDirectories(mask?: FsFinder$Mask, fn?: FsFinder$AsyncFunction): string[];
findFile(mask?: FsFinder$Mask, fn?: FsFinder$AsyncFunction): string[];
findDirectory(mask?: FsFinder$Mask, fn?: FsFinder$AsyncFunction): string[];
size(operation?: any, value?: any): FsFinder$Finder;
date(operation?: any, value?: any): FsFinder$Finder
}

declare export class FsFinder$Base  {
recursively(recursive?: boolean): FsFinder$Finder;
exclude(excludes: string | string[], exactly?: boolean): FsFinder$Finder;
showSystemFiles(systemFiles?: boolean): FsFinder$Finder;
lookUp(up?: boolean): FsFinder$Finder;
findFirst(findFirst?: boolean): FsFinder$Finder;
filter(fn: Function): FsFinder$Finder;
getPathsSync(type?: FsFinder$Type, mask?: FsFinder$Mask, dir?: FsFinder$Directory): string[];
getPathsAsync(
fn: FsFinder$AsyncFunction,
type?: FsFinder$Type,
mask?: FsFinder$Mask,
dir?: FsFinder$Directory): void;
checkExcludes(path: string): boolean;
checkSystemFiles(path: string): boolean;
checkFilters(path: string, stats: any): boolean;
checkFile(path: string, stats: any, mask: FsFinder$Mask, type: FsFinder$Type): number;
getPathsFromParentsSync(mask?: FsFinder$Mask, type?: FsFinder$Type): string[];
getPathsFromParentsAsync(fn: FsFinder$AsyncFunction, mask?: FsFinder$Mask, type?: FsFinder$Type): void
}
	declare module.exports: typeof FsFinder$Finder

    }
