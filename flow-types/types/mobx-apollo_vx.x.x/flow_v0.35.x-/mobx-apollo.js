declare module 'mobx-apollo' {
        import type {
          ApolloClient,ObservableQuery,WatchQueryOptions,ApolloError
        } from 'apollo-client';

	declare export type MobxApolloQueryOptions<T> = {
client: ApolloClient<any>,
onFetch?: (result: T) => void,
onError?: (error: ApolloError) => void
} & WatchQueryOptions

	declare export interface MobxApolloQuery<T> {
loading: boolean,
data?: T,
error?: ApolloError,
ref: ObservableQuery<T>
} 
	declare export default function graphql<T>(options: MobxApolloQueryOptions<T>): MobxApolloQuery<T>

    }
