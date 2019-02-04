declare module '@tinajs/tina' {
        declare export function use(plugin: any): void

	declare export interface ComponentProperties {
[key: string]: any
} 
	declare export interface ComponentLifecycles {
created: () => void,
attached: () => void,
ready: () => void,
moved: () => void,
detached: () => void
} 
	declare export type ComponentDefinitions = {
properties: ComponentProperties,
data: {
[key: string]: any
},
compute: (data: {
[key: string]: any
}) => {
[key: string]: any
},
methods: {
[name: string]: () => any
},
mixins: Array<$Shape<ComponentDefinitions>>
} & ComponentLifecycles

	declare export class Component  {
static define(definitions: $Shape<ComponentDefinitions>): void;
static mixin(definitions: $Shape<ComponentDefinitions>): void;
setData(data: {
[key: string]: any
}): void;
data: {
[key: string]: any
}
}
	declare export interface PageHooks {
beforeLoad: () => void,
onLoad: () => void,
onReady: () => void,
onShow: () => void,
onHide: () => void,
onUnload: () => void
} 
	declare export interface PageEvents {
onPullDownRefresh: (event: Page) => void,
onReachBottom: (event: Page) => void,
onShareAppMessage: (event: Page) => void,
onPageScroll: (event: Page) => void
} 
	declare export type PageDefinitions = {
mixins: Array<$Shape<PageDefinitions>>
} & ComponentDefinitions & PageEvents & PageHooks

	declare export class Page mixins Component {
static define(definitions: $Shape<PageDefinitions>): void;
static mixin(definitions: $Shape<PageDefinitions>): void
}
    }
