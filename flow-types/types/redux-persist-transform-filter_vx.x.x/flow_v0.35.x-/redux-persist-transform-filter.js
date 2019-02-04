declare module 'redux-persist-transform-filter' {
        import type {
          Transform
        } from 'redux-persist';

	declare export default function createFilter<State, Raw>(
reducerName: string,
inboundPaths?: string[],
outboundPaths?: string[]): Transform<State, Raw>

    }
