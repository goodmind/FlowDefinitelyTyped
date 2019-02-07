declare module 'redux-orm' {
        declare export interface ORMId {
id: string
} 
	declare export interface TableState<Item= any, Meta= any> {
items: string[],
itemsById: {
[index: string]: Item
},
meta: Meta
} 
	declare export interface ORMCommonState {
[index: string]: TableState
} 
	declare export type SessionWithModels<State: ORMCommonState> = Session<State> & $ObjMapi<State, <P>(P) => typeof Model>;
	declare export type ModelWithFields<Fields, Additional= {}, VirtualFields= {}> = Model<Fields, Additional, VirtualFields> & Fields & VirtualFields & Additional & ORMId;
	declare export type ModelProps = any;
	declare export interface DB {
getEmptyState: any,
query: any,
update: any,
describe: any
} 
	declare export interface SchemaSpec {
tables: any
} 
	declare export interface ORMOpts {
createDatabase: (schemaSpec: SchemaSpec) => any
} 
	declare export interface ModelFields {
[index: string]: Attribute | ForeignKey | ManyToMany | OneToOne
} 
	declare export interface ModelVirtualFields {
[index: string]: any
} 
	declare export class ORM<State: ORMCommonState= ORMCommonState>  {
constructor(opts?: ORMOpts): this;
register(...model: Array<typeof Model>): void;
register<M>(...model: Array<$ElementType<M, $Keys<M>>>): void;
registerManyToManyModelsFor(model: typeof Model): void;
get(modelName: string): typeof Model;
getModelClasses(): Array<typeof Model>;
isFieldInstalled(modelName: string, fieldName: string): boolean;
setFieldInstalled(modelName: string, fieldName: string): void;
generateSchemaSpec(): SchemaSpec;
getDatabase(): DB;
getEmptyState(): State;
session(state: State): SessionWithModels<State>;
mutableSession(state: State): SessionWithModels<State>
}
	declare export class Model<Fields, Additional= {}, VirtualFields= {}>  {
static idAttribute: string;
static session: SessionWithModels<any>;
static _sessionData: any;
static query: QuerySet<any>;
static modelName: string;
static fields: ModelFields;
static virtualFields: ModelVirtualFields;
static querySetClass: typeof QuerySet;
static toString(): string;
static options(): {[key: string]: any};
static _getTableOpts(): {[key: string]: any};
static markAccessed(): void;
static connec(session: Session<ORMCommonState>): void;
static getQuerySet(): QuerySet<any>;
static invalidateClassCache(): void;
static all(): QuerySet<any, any, any>;
static create<Fields>(props: Fields): ModelWithFields<Fields, any, any>;
static upsert<Fields>(props: $Shape<Fields>): ModelWithFields<Fields, any, any>;
static withId(id: string): ModelWithFields<any, any, any>;
static hasId(id: string): boolean;
static _findDatabaseRows(lookupObj: {[key: string]: any}): any;
static get(lookupObj: {[key: string]: any}): ModelWithFields<any, any, any>;
static reducer(
action: any,
modelClass: typeof Model,
session: SessionWithModels<ORMCommonState>): any;
ref: Fields & Additional & ORMId;
constructor(props: ModelProps): this;
getClass(): string;
getId(): string;
toString(): string;
equals(otherModel: ModelWithFields<any, any, any>): boolean;
set(propertyName: string, value: any): void;
update(userMergeObj: $Shape<Fields & Additional>): void;
refreshFromState(): void;
delete(): void
}
	declare export type QuerySetClauses = any;
	declare export type QuerySetOpts = any;
	declare export class QuerySet<Fields, Additional= {}, VirtualFields= {}>  {
static addSharedMethod(methodName: string): void;
constructor(modelClass: typeof Model, clauses: QuerySetClauses, opts: QuerySetOpts): this;
toString(): string;
toRefArray(): Array<Fields & Additional & ORMId>;
toModelArray(): Array<ModelWithFields<Fields, Additional, VirtualFields>>;
count(): number;
exists(): boolean;
at(index: string): ModelWithFields<Fields, Additional, VirtualFields> | void;
first(): ModelWithFields<Fields, Additional, VirtualFields> | void;
last(): ModelWithFields<Fields, Additional, VirtualFields> | void;
all(): QuerySet<Fields, Additional, VirtualFields>;
filter(lookupObj: {[key: string]: any}): QuerySet<Fields, Additional, VirtualFields>;
exclude(lookupObj: {[key: string]: any}): QuerySet<Fields, Additional, VirtualFields>;
orderBy(iteratees: any, orders: any): QuerySet<Fields, Additional, VirtualFields>;
update(mergeObj: $Shape<Fields & Additional>): void;
delete(): void
}
	declare export class Session<State: ORMCommonState>  {
accessedModels: string[];
schema: ORM<State>;
db: DB;
initialState: State;
withMutations: boolean;
batchToken: any;
sessionBoundModels: Array<typeof Model>;
models: Array<typeof Model>;
state: State;
constructor(schema: ORM<State>, db: DB, state: State, withMutations: boolean, batchToken: any): this;
markAccessed(modelName: string): void;
getDataForModel(modelName: string): {[key: string]: any};
applyUpdate(updateSpec: any): any;
query(querySpec: any): any
}
	declare export interface AttributeOpts {
getDefault?: () => any
} 
	declare export class Attribute  {
constructor(opts: AttributeOpts): this;
install(model: typeof Model, fieldName: string, orm: ORM): void
}
	declare export interface RelationalFieldOpts {
to: string,
relatedName?: string,
through?: string,
throughFields?: {
to: string,
from: string
}
} 
	declare export class RelationalField  {
constructor(toModelName: string, relatedName?: string): this;
constructor(opts: RelationalFieldOpts): this;
getClass: typeof RelationalField
}
	declare export class ForeignKey mixins RelationalField {
install(model: typeof Model, fieldName: string, orm: ORM): void
}
	declare export class ManyToMany mixins RelationalField {
install(model: typeof Model, fieldName: string, orm: ORM): void
}
	declare export class OneToOne mixins RelationalField {
install(model: typeof Model, fieldName: string, orm: ORM): void
}
	declare export function attr(opts?: AttributeOpts): Attribute

	declare export function fk(toModelName: string, relatedName?: string): ForeignKey

	declare export function fk(opts: RelationalFieldOpts): ForeignKey

	declare export function many(toModelName: string, relatedName?: string): ManyToMany

	declare export function oneToOne(toModelName: string, relatedName?: string): OneToOne

	declare export function oneToOne(opts: RelationalFieldOpts): OneToOne

	declare export type Updater<State: ORMCommonState> = (session: SessionWithModels<State>, action: any) => any;
	declare export function createReducer<State: ORMCommonState= ORMCommonState>(
orm: ORM<State>,
updater?: Updater<State>): (state: State, action: any) => State

	declare export type ORMSelector<State: ORMCommonState, Result= any> = (session: SessionWithModels<State>, ...args: any[]) => Result;
	declare export function createSelector<State: ORMCommonState= ORMCommonState>(
orm: ORM<State>,
...args: Array<ORMSelector<State>>): (state: State) => any

    }
