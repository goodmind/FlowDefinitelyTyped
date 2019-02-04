declare module 'yayson' {
        declare class Store  {
sync(obj: {}): any;
find(type: string, id: string): any;
findAll(type: string): any[];
remove(type: string, id?: string): void;
reset(): void;
records: y$y$Record[];
relations: {
[key: string]: any
}
}
	declare interface Adapter {
get(model: {}, key?: string): any,
id(model: {}): string
} 
	declare class Presenter  {
static adapter: string;
static render<T>(
instanceOrCollection: PromiseLike<T>,
options?: y$y$JsonOptions): PromiseLike<T>;
static render(instanceOrCollection: {}, options?: y$y$JsonOptions): any;
static toJSON(instanceOrCollection: {}, options?: y$y$JsonOptions): any;
render<T>(
instanceOrCollection: PromiseLike<T>,
options?: y$y$JsonOptions): PromiseLike<T>;
render(instanceOrCollection: {}, options?: y$y$JsonOptions): any;
toJSON(instanceOrCollection: {}, options?: y$y$JsonOptions): any;
id(instance: {}): string;
type: string
}
	declare interface Yayson {
Store: typeof Store,
Presenter: typeof Presenter,
Adapter: Adapter
} 
	declare interface YaysonOptions {
adapter?: "default" | "sequelize"
} 
	declare function y(arg?: YaysonOptions): Yayson

	declare interface y$JsonOptions {
[key: string]: any,
meta?: {}
} 

declare interface y$Record {
id: any,
type: string,
attributes: any,
relationships: any
} 
	declare module.exports: typeof y

    }
