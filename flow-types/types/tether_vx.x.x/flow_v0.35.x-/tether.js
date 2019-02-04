declare module 'tether' {
        declare module.exports: typeof Tether

	declare class Tether  {
constructor(options: Tether$Tether$ITetherOptions): this;
setOptions(options: Tether$Tether$ITetherOptions): void;
disable(): void;
enable(): void;
destroy(): void;
position(): void;
static position(): void
}
	declare interface Tether$ITetherOptions {
attachment: string,
bodyElement?: HTMLElement,
classes?: {
[className: string]: boolean | string
},
classPrefix?: string,
constraints?: Tether$ITetherConstraint[],
element?: HTMLElement | string | any,
enabled?: boolean,
offset?: string,
optimizations?: any,
target?: HTMLElement | string | any,
targetAttachment?: string,
targetOffset?: string,
targetModifier?: string
} 

declare interface Tether$ITetherConstraint {
attachment?: string,
outOfBoundsClass?: string,
pin?: boolean | string[],
pinnedClass?: string,
to?: string | HTMLElement | number[]
} 
    }
