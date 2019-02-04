declare type MemoryAdapter$MemoryAdapterConfiguration = {
adapter: "memory"
} & Configuration.LocalDatabaseConfiguration


declare interface PouchDB$Static {
new <Content: {}>(
name: string | null,
options: MemoryAdapter$MemoryAdapter$MemoryAdapterConfiguration): Database<Content>
} declare module 'pouchdb-adapter-memory' {
        declare var plugin: PouchDB$Plugin;
	declare module.exports: typeof plugin

    }
