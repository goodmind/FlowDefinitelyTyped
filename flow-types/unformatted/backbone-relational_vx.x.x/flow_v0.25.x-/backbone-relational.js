declare module 'backbone-relational' {
        import typeof * as Backbone from 'backbone';

	declare module 'backbone' {
        declare class RelationalModel mixins Model {

/**
 * Do not use, prefer TypeScript's extend functionality.
 */
relations: any;
subModelTypes: any;
subModelTypeAttribute: any;
initializeRelations(options: any): void;
updateRelations(options: any): void;
queue(func: any): void;
processQueue(): void;
getRelation(name: string): Relation;
getRelations(): Relation[];
fetchRelated(key: string, options?: any, update?: boolean): any;
toJSON(options?: any): any;
static setup(): void;
static build(attributes: any, options?: any): void;
static findOrCreate(attributes: string, options?: any): void;
static findOrCreate(attributes: number, options?: any): void;
static findOrCreate(attributes: any, options?: any): void
}
	declare export class Relation mixins Model {
options: any;
instance: any;
key: any;
keyContents: any;
relatedModel: any;
relatedCollection: any;
reverseRelation: any;
related: any;
checkPreconditions(): boolean;
setRelated(related: Model): void;
setRelated(related: Collection<Model>): void;
getReverseRelations(model: RelationalModel): Relation;
destroy(): void
}
	declare export class HasOne mixins Relation {
collectionType: any;
findRelated(options: any): Model;
setKeyContents(keyContents: string): void;
setKeyContents(keyContents: string[]): void;
setKeyContents(keyContents: number): void;
setKeyContents(keyContents: number[]): void;
setKeyContents(keyContents: Collection<Model>): void;
onChange(model: Model, attr: any, options: any): void;
handleAddition(model: Model, coll: Collection<Model>, options: any): void;
handleRemoval(model: Model, coll: Collection<Model>, options: any): void;
handleReset(coll: Collection<Model>, options: any): void;
tryAddRelated(model: Model, coll: any, options: any): void;
addRelated(model: Model, options: any): void;
removeRelated(model: Model, coll: any, options: any): void
}
	declare export class HasMany mixins Relation {
collectionType: any;
findRelated(options: any): Model;
setKeyContents(keyContents: string): void;
setKeyContents(keyContents: number): void;
setKeyContents(keyContents: Model): void;
onChange(model: Model, attr: any, options: any): void;
tryAddRelated(model: Model, coll: any, options: any): void;
addRelated(model: Model, options: any): void;
removeRelated(model: Model, coll: any, options: any): void
}
	declare export class Store mixins Events {
on(eventName: string, callback?: (...args: any[]) => void, context?: any): any;
on(eventMap: EventsHash): any;
on(eventName: any, callback?: any, context?: any): any;
off(eventName?: string, callback?: (...args: any[]) => void, context?: any): any;
trigger(eventName: string, ...args: any[]): any;
bind(eventName: string, callback: (...args: any[]) => void, context?: any): any;
unbind(eventName?: string, callback?: (...args: any[]) => void, context?: any): any;
once(events: string, callback: (...args: any[]) => void, context?: any): any;
listenTo(object: any, events: string, callback: (...args: any[]) => void): any;
listenToOnce(object: any, events: string, callback: (...args: any[]) => void): any;
stopListening(object?: any, events?: string, callback?: (...args: any[]) => void): any;
initializeRelation(
model: <<UNKNOWN PARAM FORMAT>>,
relation: <<UNKNOWN PARAM FORMAT>>,
options: <<UNKNOWN PARAM FORMAT>>): void;
addModelScope(scope: any): void;
removeModelScope(scope: <<UNKNOWN PARAM FORMAT>>): void;
addSubModels(subModelTypes: RelationalModel, superModelType: RelationalModel): void;
setupSuperModel(modelType: RelationalModel): void;
addReverseRelation(relation: any): void;
addOrphanRelation(relation: any): void;
processOrphanRelations(): void;
retroFitRelation(relation: RelationalModel, create: boolean): Collection<Model>;
getCollection(type: RelationalModel, create: boolean): Collection<Model>;
getObjectByName(name: string): any;
resolveIdForItem(type: any, item: any): any;
static find(type: any, item: string): RelationalModel;
static find(type: any, item: number): RelationalModel;
static find(type: any, item: RelationalModel): RelationalModel;
static find(type: any, item: any): RelationalModel;
register(model: RelationalModel): void;
checkId(model: RelationalModel, id: any): void;
update(model: RelationalModel): void;
unregister(model: RelationalModel, collection: Collection<Model>, options: any): void;
reset(): void
}
    }

    }
