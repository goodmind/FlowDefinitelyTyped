declare module 'dragster' {
        declare interface Dragster$Dragster {
removeListeners(): void,
reset(): void
} 

declare interface Dragster$DragsterStatic {
(elem: HTMLElement): Dragster$Dragster,
new (elem: HTMLElement): Dragster$Dragster
} 
	declare var Dragster$Dragster: Dragster$Dragster.Dragster$DragsterStatic;
	declare module.exports: typeof Dragster$Dragster

	declare module 'global' {
        declare interface Window {
Dragster$Dragster: Dragster$Dragster.Dragster$DragsterStatic
} 
    }

    }
