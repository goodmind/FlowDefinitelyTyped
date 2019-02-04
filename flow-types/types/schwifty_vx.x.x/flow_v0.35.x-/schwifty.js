declare module 'schwifty' {
        import typeof * as Objection from 'objection';

	import typeof * as Joi from 'joi';

	import type {
          Server,Request,ResponseToolkit,Plugin
        } from 'hapi';

	import typeof * as Knex from 'knex';

	declare export type ModelClass = typeof Model | typeof undefined;
	declare export class Model mixins Objection.Model {
static getJoiSchema(patch?: boolean): Joi.Schema;
joiSchema: Joi.Schema
}
	declare export interface RegistrationOptions {
knex?: Knex | Knex.Config,
models?: ModelClass[] | string,
migrationsDir?: string,
teardownOnStop?: boolean,
migrateOnStart?: boolean | "latest" | "rollback"
} 
	declare export function assertCompatible(ModelA: typeof Model, ModelB: typeof Model, message?: string): void | Error

	declare export var plugin: Plugin<RegistrationOptions>;
	declare module 'hapi' {
        declare interface Server {
schwifty: (
config: ModelClass | ModelClass[] | {
knex: Knex | Knex.Config,
models: ModelClass[],
migrationsDir: string
}) => void,
knex: () => Knex,
models: (all?: boolean) => {
[key: string]: typeof Model
}
} 
	declare interface Request {
knex: () => Knex,
models: (all?: boolean) => {
[key: string]: typeof Model
}
} 
	declare interface ResponseToolkit {
knex: () => Knex,
models: (all?: boolean) => {
[key: string]: typeof Model
}
} 
    }

    }
