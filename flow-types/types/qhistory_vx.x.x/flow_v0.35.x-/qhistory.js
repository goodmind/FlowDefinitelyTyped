declare module 'qhistory' {
        import type {
          History
        } from 'history';

	declare module 'history' {
        declare interface Location {
query: any
} 
	declare interface LocationDescriptorObject {
query?: {[key: string]: any}
} 
    }

	declare function qhistory(
history: History,
stringify: (query: {[key: string]: any}) => string,
parse: (search: string) => {[key: string]: any}): History

	declare export default typeof qhistory

    }
