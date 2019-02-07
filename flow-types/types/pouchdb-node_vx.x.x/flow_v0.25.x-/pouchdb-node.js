declare interface Core$DatabaseInfo {
  /**
   * The backend *DOWN adapter being used (MemDOWN, RiakDOWN, …).
   */
  backend_adapter?: string;
}
declare module "pouchdb-node" {
  declare var PouchDb: PouchDB$Static;
  declare module.exports: typeof PouchDb;
}
