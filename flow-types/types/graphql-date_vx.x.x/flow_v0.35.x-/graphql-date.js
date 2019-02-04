declare module 'graphql-date' {
        import type {
          GraphQLScalarType
        } from 'graphql';

	declare var date: GraphQLScalarType;
	declare module.exports: typeof date

    }
