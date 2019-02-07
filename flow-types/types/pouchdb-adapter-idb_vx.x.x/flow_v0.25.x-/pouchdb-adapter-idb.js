declare interface Core$DatabaseInfo {
  idb_attachment_format?: "base64" | "binary";
}

declare type IdbAdapter$IdbAdapterConfiguration = {
  /**
   * Configures storage persistence.
   *
   * Only works in Firefox 26+.
   */
  storage?: "persistent" | "temporary",
  adapter: "idb"
} & Configuration.LocalDatabaseConfiguration;

declare interface PouchDB$Static {
  new<Content: {}>(
    name: string | null,
    options: IdbAdapter$IdbAdapter$IdbAdapterConfiguration
  ): Database<Content>;
}
declare module "pouchdb-adapter-idb" {
  declare var plugin: PouchDB$Plugin;
  declare module.exports: typeof plugin;
}
