declare module 'pg-query-stream' {
        declare interface QueryStream$Options {
highWaterMark?: number,
batchSize?: number
} 
	declare class QueryStream mixins stream.Readable, pg.Submittable {
batchSize: number;
text: string;
values: any[];
constructor(text: string, values?: any[], options?: QueryStream$QueryStream$Options): this;
submit(connection: pg.Connection): void
}
	declare module.exports: typeof QueryStream

    }
