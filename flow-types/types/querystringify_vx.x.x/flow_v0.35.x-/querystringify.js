declare module 'querystringify' {
        declare export function parse(query: string): {[key: string]: any}

	declare export function stringify(obj: {[key: string]: any}, prefix?: string | boolean): string

    }
