declare module 'settings' {
        declare class Settings  {
constructor(pathOrModule: Settings$Settings$PathOrModule, options?: Settings$Settings$Options): this;
[setting: string]: any
}
	declare interface Settings$Options {
env?: string,
root?: string,
defaults?: any
} 

declare type Settings$PathOrModule = string | {
forceEnv?: string,
common: any,
[envName: string]: any
};
	declare module.exports: typeof Settings

    }
