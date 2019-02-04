declare module 'wepy' {
        import typeof component from './component';

	import typeof mixin from './mixin';

	import typeof event from './event';

	import typeof page from './page';

	import typeof app from './app';

	import typeof util from './util';

	import typeof base from './base';

	import type {
          WxEnhances
        } from './wx_enhanced';

	declare export type Event = typeof event;
	declare export type Component = typeof component;
	declare export type App = typeof app;
	declare export type Page = typeof page;
	declare export type Mixin = typeof mixin;
	declare type DefaultExport = {
event: wepy.Event,
app: wepy.App,
component: wepy.Component,
page: wepy.Page,
mixin: wepy.Mixin,
$createApp: typeof undefined,
$createPage: typeof undefined,
$isEmpty: typeof undefined,
$isEqual: typeof undefined,
$isDeepEqual: typeof undefined,
$has: typeof undefined,
$extend: typeof undefined,
$isPlainObject: typeof undefined,
$copy: typeof undefined
} & WxEnhances

	declare var defaultExport: DefaultExport;
	declare export default typeof defaultExport

    }
