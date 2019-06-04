declare type PouchDB$LiveFind$RequestDef<Content: {}> = {
  aggregate?: boolean
} & Pick<
  Find.FindRequest<Content>,
  Exclude<$Keys<Find.FindRequest<Content>>, "use_index">
>;

declare type PouchDB$LiveFind$PaginateOptions<Content: {}> = {} & Pick<
  Find.FindRequest<Content>,
  "sort" | "skip" | "limit"
>;

declare interface PouchDB$LiveFind$UpdateEvent {
  action: "REMOVE" | "ADD" | "UPDATE";
  id: any;
  rev: any;
  doc: any;
}

declare interface PouchDB$LiveFind$LiveFeed<Content: {} = {}> {
  on(event: "ready" | "cancelled", listener: () => void): this;
  on(event: "error", listener: (err: any) => void): this;
  on(
    event: "update",
    listener: (event: PouchDB$LiveFind$UpdateEvent, list: any) => void
  ): this;
  cancel(): void;
  sort(list: []): [];
  paginate(options: PouchDB$LiveFind$PaginateOptions<Content>): [];
  then(callbackSuccess: () => any): void;
  catch(callbackFailure: () => any): void;
}

declare interface PouchDB$Database<Content: {} = {}> {
  liveFind(
    requestDef: PouchDB$LiveFind$RequestDef<Content>
  ): PouchDB$LiveFind$LiveFeed<Content>;
}
declare module "pouchdb-live-find" {
  declare var plugin: PouchDB$Plugin;
  declare export default typeof plugin;
}
