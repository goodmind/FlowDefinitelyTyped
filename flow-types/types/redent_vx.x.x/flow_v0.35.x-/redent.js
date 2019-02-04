declare module 'redent' {
        declare module.exports: typeof redent

	declare function redent(input: string, count?: number, indent?: string): string

    }
