declare type FruitDOWNAdapter$FruitDOWNAdapterConfiguration = {
adapter: "fruitdown"
} & Configuration.LocalDatabaseConfiguration


declare interface PouchDB$Static {
new <Content: {}>(
name: string | null,
options: FruitDOWNAdapter$FruitDOWNAdapter$FruitDOWNAdapterConfiguration): Database<Content>
} declare module 'pouchdb-adapter-fruitdown' {
        declare var plugin: PouchDB$Plugin;
	declare module.exports: typeof plugin

    }
