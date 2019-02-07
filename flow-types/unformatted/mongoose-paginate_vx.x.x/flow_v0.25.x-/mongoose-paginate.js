declare module 'mongoose' {
        declare export interface PaginateOptions {
select?: Object | string,
sort?: Object | string,
populate?: Array<Object> | Array<string> | Object | string,
lean?: boolean,
leanWithId?: boolean,
offset?: number,
page?: number,
limit?: number
} 
	declare export interface PaginateResult<T> {
docs: Array<T>,
total: number,
limit: number,
page?: number,
pages?: number,
offset?: number
} 
	declare type PaginateModel<T: Document> = {
paginate(
query?: Object,
options?: PaginateOptions,
callback?: (err: any, result: PaginateResult<T>) => void): Promise<PaginateResult<T>>
} & Model<T>

	declare export function model<T: Document>(
name: string,
schema?: Schema,
collection?: string,
skipInit?: boolean): PaginateModel<T>

	declare export function model<T: Document, U: PaginateModel<T>>(
name: string,
schema?: Schema,
collection?: string,
skipInit?: boolean): U

    }
declare module 'mongoose-paginate' {
        declare var _: (schema: mongoose.Schema) => void;
	declare module.exports: typeof _

    }
