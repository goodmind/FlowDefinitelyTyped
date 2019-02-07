declare module "pouchdb-http" {
  declare var PouchDb: PouchDB.Static;
  declare module.exports: typeof PouchDb;
}
