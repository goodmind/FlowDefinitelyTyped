declare module 'graphql-resolvers' {
        import type {
          IFieldResolver
        } from 'graphql-tools';

	declare export var skip: void;
	declare export interface TArgs {
[argument: string]: any
} 
	declare export function combineResolvers<TSource= any, TContext= any>(
...resolvers: Array<IFieldResolver<TSource, TContext, TArgs>>): IFieldResolver<TSource, TContext, TArgs>

	declare export function pipeResolvers<TSource= any, TContext= any>(
...resolvers: Array<IFieldResolver<TSource, TContext, TArgs>>): IFieldResolver<TSource, TContext, TArgs>

	declare export function allResolvers<TSource= any, TContext= any>(
resolvers: Array<IFieldResolver<TSource, TContext, TArgs>>): IFieldResolver<TSource, TContext, TArgs>

	declare export function resolveDependee(dependeeName: string): IFieldResolver<any, any, TArgs>

	declare export function resolveDependees(dependeeNames: string[]): IFieldResolver<any, any, TArgs>

	declare export function isDependee<TSource= any, TContext= any>(
resolver: IFieldResolver<TSource, TContext, TArgs>): IFieldResolver<TSource, TContext, TArgs>

    }
