declare type HttpAdapter$HttpAdapterConfiguration = {
  adapter: "http"
} & Configuration.RemoteDatabaseConfiguration;

declare interface PouchDB$Static {
  new<Content: {}>(
    name: string | null,
    options: HttpAdapter$HttpAdapter$HttpAdapterConfiguration
  ): Database<Content>;
}
declare module "pouchdb-adapter-http" {
  declare var plugin: PouchDB$Plugin;
  declare module.exports: typeof plugin;
}
