declare module 'triple-beam' {
        declare export var LEVEL: string;
	declare export var MESSAGE: string;
	declare export var SPLAT: string;
	declare export var configs: Configs;
	declare export interface Config {
+levels: {
[k: string]: number
},
+colors: {
[k: string]: string
}
} 
	declare export interface Configs {
+cli: Config,
+npm: Config,
+syslog: Config
} 
    }
