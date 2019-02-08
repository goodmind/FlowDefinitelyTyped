declare module 'mongoose' {
        declare interface CustomLabels {
totalDocs?: string,
limit?: string,
page?: string,
totalPages?: string,
docs?: string,
nextPage?: string,
prevPage?: string
} 
	declare interface PaginateOptions {
select?: Object | string,
sort?: Object | string,
customLabels?: CustomLabels,
collation?: CollationOptions,
populate?: Object[] | string[] | Object | string,
lean?: boolean,
leanWithId?: boolean,
offset?: number,
page?: number,
limit?: number
} 
	declare interface PaginateResult<T> {
docs: T[],
total: number,
limit: number,
page?: number,
pages?: number,
offset?: number,
[customLabel: string]: T[] | number | void
} 
	declare type PaginateModel<T: Document> = {
paginate(
query?: {[key: string]: any},
options?: PaginateOptions,
callback?: (err: any, result: PaginateResult<T>) => void): Promise<PaginateResult<T>>
} & Model<T>

	declare function model(
name: string,
schema?: Schema,
collection?: string,
skipInit?: boolean): PaginateModel<any>

    }
declare module 'mongoose-paginate-v2' {
        declare function _(schema: mongoose.Schema): void

	declare export default typeof _

    }
