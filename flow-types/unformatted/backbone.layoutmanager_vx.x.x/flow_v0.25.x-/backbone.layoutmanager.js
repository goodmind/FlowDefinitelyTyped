declare module 'backbone.layoutmanager' {
        import typeof * as Backbone from 'backbone';

	declare module 'backbone' {
        declare type LayoutOptions<TModel: Model> = {
template?: string,
views?: {
[viewName: string]: View<TModel>
}
} & ViewOptions<TModel>

	declare interface LayoutManagerOptions {
manage?: boolean,
el?: boolean
} 
	declare class Layout<TModel: Model> mixins View<TModel> {
template: string;
constructor(options?: LayoutOptions<TModel>): this;
beforeRender(): void;
afterRender(): void;
cleanup(): void;
fetchTemplate(path: string): (context: any) => string;
async(): (compiled: (context: any) => void) => void;
promise(): JQueryPromise<any>;
getAllOptions(): LayoutOptions<TModel>;
getView(fn?: any): any;
getViews(fn?: any): any[];
insertView(selector: any, view?: any): any;
insertViews(views: any): Layout<TModel>;
remove(): Layout<TModel>;
removeView(fn: any): Layout<TModel>;
render(): Layout<TModel>;
renderViews(): Layout<TModel>;
setView<U>(name: any, view: U, insert?: boolean): U;
setViews(views: any): Layout<TModel>;
then(fn: () => void): void;
static cache(path: string, contents?: any): any;
static cleanViews(views: any): void;
static configure(options: LayoutManagerOptions): void;
static setupView(views: any, options?: LayoutOptions<Model>): void
}
    }

    }
