declare module 'bgiframe' {
        declare interface BgiFrame$ISettings {
top: string,
left: string,
width: string,
height: string,
opacity: boolean,
src: string,
conditional: boolean
} 

declare interface BgiFrame$IBgiframe {
s: BgiFrame$ISettings,
createIframe(): HTMLElement,
fire(element: HTMLElement): void,
getIframe(element: HTMLElement): HTMLElement,
prop(n: any): string
} 
    }
