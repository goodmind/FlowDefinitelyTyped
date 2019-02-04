declare module 'graphql-errors' {
        import type {
          GraphQLSchema
        } from 'graphql';

	declare export type HandlerFunction = (err: Error) => Error;
	declare export function setDefaultHandler(fn: HandlerFunction): void

	declare export function maskErrors(schema: GraphQLSchema, fn?: HandlerFunction): void

	declare export class UserError mixins Error {
constructor(message: string): this
}
    }
