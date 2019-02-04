declare type LocalStorageAdapter$LocalStorageAdapterConfiguration = {
adapter: "localstorage"
} & Configuration.LocalDatabaseConfiguration


declare interface PouchDB$Static {
new <Content: {}>(
name: string | null,
options: LocalStorageAdapter$LocalStorageAdapter$LocalStorageAdapterConfiguration): Database<Content>
} declare module 'pouchdb-adapter-localstorage' {
        declare var plugin: PouchDB$Plugin;
	declare module.exports: typeof plugin

    }
