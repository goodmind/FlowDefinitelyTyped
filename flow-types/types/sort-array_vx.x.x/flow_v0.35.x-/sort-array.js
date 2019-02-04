declare module 'sort-array' {
        declare type ColumnNames<T> = $Keys<T> | Array<$Keys<T>>;
	declare type CustomOrderTypes<T> = Array<$ElementType<T, $Keys<T>>>;
	declare type CustomOrder<T> = Record<$Keys<T>, CustomOrderTypes<T>>;
	declare function sortArray<T>(
recordset: T[],
columnNames: ColumnNames<T>,
customOrder?: $Shape<CustomOrder<T>>): T[]

	declare function sortArray(
recordset: {[key: string]: any}[],
columnNames: string | string[],
customOrder?: Record<string, any[]>): {[key: string]: any}[]

	declare module.exports: typeof sortArray

    }
