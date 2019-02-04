declare interface Core$DatabaseInfo {
sqlite_plugin?: boolean,
websql_encoding?: "UTF-8" | "UTF-16"
} 

declare type AdapterWebSql$Configuration = {

/**
 * Amount in MB to request for storage.
 */
size?: number,
adapter: "websql"
} & Configuration.LocalDatabaseConfiguration


declare interface PouchDB$Static {
new <Content: {}>(
name: string | null,
options: AdapterWebSql$AdapterWebSql$Configuration): Database<Content>
} declare module 'pouchdb-adapter-websql' {
        declare var plugin: PouchDB$Plugin;
	declare module.exports: typeof plugin

    }
