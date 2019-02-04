declare module 'vue-scrollto' {
        import type {
          PluginFunction
        } from 'vue';

	declare interface VueScrollTo$Options {
el?: string | Element,
element?: string | Element,
container?: string | Element,
duration?: number,
easing?: string,
offset?: number,
cancelable?: boolean,
onDone?: (() => void) | false,
onCancel?: (() => void) | false,
x?: boolean,
y?: boolean
} 

declare interface VueScrollTo$VueStatic {
(options: VueScrollTo$Options): void,
(element: string | Element, options?: VueScrollTo$Options): void,
(element: string | Element, duration: number, options?: VueScrollTo$Options): void
} 
	declare class VueScrollTo  {
static install: PluginFunction<empty>;
scrollTo: VueScrollTo$VueScrollTo$VueStatic
}
	declare module 'vue/types/vue' {
        declare interface Vue {
$scrollTo: VueScrollTo$VueScrollTo$VueStatic
} 
    }

	declare module.exports: typeof VueScrollTo

    }
