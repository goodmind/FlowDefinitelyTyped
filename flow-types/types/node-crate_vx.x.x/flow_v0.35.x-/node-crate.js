declare module 'node-crate' {
        declare interface crate$DBResultObject {
json: {[key: string]: any}[],
duration: number,
rowcount: number,
cols: string[],
rows: {[key: string]: any}[][]
} 

declare interface crate$Crate {

/**
 * Connect to a single crate instance with host and port
 */
connect: (host: string, port?: number) => void,

/**
 * Executes a parameterized sql statement.
 */
execute: (
sql: string,
args?: Array<string | number | Date>) => Promise<crate$DBResultObject>,

/**
 * Inserts a row in table.
 */
insert: (tableName: string, data: {[key: string]: any}) => Promise<crate$DBResultObject>,

/**
 * Creates a table with the given schema.
 */
create: (schema: {[key: string]: any}) => Promise<crate$DBResultObject>,

/**
 * Creates a table if it doesn't already exist.
 */
createIfNotExists: (schema: {[key: string]: any}) => Promise<crate$DBResultObject>,

/**
 * Drops a table.
 */
drop: (tableName: string) => Promise<crate$DBResultObject>,

/**
 * Updates one or more rows in table.
 */
update: (
tableName: string,
data: {[key: string]: any},
where: string) => Promise<crate$DBResultObject>,

/**
 * Deletes one or more rows in a table.
 */
delete: (tableName: string, where: string) => Promise<crate$DBResultObject>,

/**
 * Creates a BLOB table
 */
createBlobTable: (
tableName: string,
replicas: number,
shards: number) => Promise<crate$DBResultObject>,

/**
 * Inserts a BLOB
 */
insertBlob: (tableName: string, buffer: string) => Promise<string>,

/**
 * Inserts a BLOB from the filesystem
 */
insertBlobFile: (tableName: string, filename: string) => Promise<string>,

/**
 * Retrieves a BLOB with the given hash key
 */
getBlob: (tableName: string, hashKey: string) => Promise<string>
} 
	declare var crate: crate$crate$Crate;
	declare module.exports: typeof crate

    }
