declare module 'graphql-fields' {
        import type {
          GraphQLResolveInfo
        } from 'graphql';

	declare function graphqlFields(
info: GraphQLResolveInfo,
obj?: {[key: string]: any},
opts?: graphqlFields$graphqlFields$Options): any

	declare interface graphqlFields$Options {
processArguments?: boolean,
excludedFields?: string[]
} 
	declare module.exports: typeof graphqlFields

    }
