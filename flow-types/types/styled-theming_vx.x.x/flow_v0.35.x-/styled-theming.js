declare module 'styled-theming' {
        declare function theme(name: string, values: theme$theme$ThemeMap): theme$theme$ThemeSet

	
      declare var npm$namespace$theme: {
        variants: typeof theme$variants,
        
      }
declare type theme$ThemeValueFn = (props: {[key: string]: any}) => string;

declare type theme$ThemeValue = string | theme$ThemeValueFn;

declare interface theme$ThemeMap {
[key: string]: theme$ThemeValue
} 

declare interface theme$VariantMap {
[key: string]: theme$ThemeMap
} 

declare type theme$ThemeSet = (props: {[key: string]: any}) => string;

declare type theme$VariantSet = (props: {[key: string]: any}) => string;

declare function theme$variants(name: string, prop: string, values: theme$VariantMap): theme$VariantSet

	declare module.exports: typeof theme

    }
