declare module 'react-loader' {
        import type {
          Component
        } from 'react';

	declare interface LoaderOptions {
lines?: number,
length?: number,
width?: number,
radius?: number,
scale?: number,
corners?: number,
color?: string,
opacity?: number,
rotate?: number,
direction?: number,
speed?: number,
trail?: number,
fps?: number,
zIndex?: number,
top?: string,
left?: string,
shadow?: boolean,
hwaccel?: boolean,
position?: string,
loadedClassName?: string
} 
	declare type LoaderProps = {
loaded: boolean,
options?: LoaderOptions,
className?: string
} & LoaderOptions

	declare class ReactLoader mixins Component<LoaderProps> {}
	
	declare module.exports: typeof ReactLoader

    }
