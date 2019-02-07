declare module "pouchdb-browser" {
  declare var PouchDb: PouchDB.Static;
  declare module.exports: typeof PouchDb;
}
