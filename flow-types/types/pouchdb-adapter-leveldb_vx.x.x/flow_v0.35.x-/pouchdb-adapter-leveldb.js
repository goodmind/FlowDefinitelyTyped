declare type LevelDbAdapter$LevelDbAdapterConfiguration = {
adapter: "leveldb"
} & Configuration.LocalDatabaseConfiguration


declare interface PouchDB$Static {
new <Content: {}>(
name: string | null,
options: LevelDbAdapter$LevelDbAdapter$LevelDbAdapterConfiguration): Database<Content>
} declare module 'pouchdb-adapter-leveldb' {
        declare var plugin: PouchDB$Plugin;
	declare module.exports: typeof plugin

    }
