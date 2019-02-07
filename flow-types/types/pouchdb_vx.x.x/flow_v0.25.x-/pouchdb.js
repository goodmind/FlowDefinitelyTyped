declare module "pouchdb" {
  declare var plugin: PouchDB.Static;
  declare module.exports: typeof plugin;
}
