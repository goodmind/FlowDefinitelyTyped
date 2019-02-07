declare module "pouch-redux-middleware" {
  import type { Dispatch, Action, Middleware } from "redux";

  import typeof * as PouchDB from "pouchdb";

  declare export interface Document {
    _id: any;
    [field: string]: any;
  }
  declare export interface Path {
    path: string;
    db: PouchDB.Database<any>;
    scheduleRemove?: (doc: Document) => void;
    scheduleInset?: (doc: Document) => void;
    propagateDelete?: (doc: Document, dispatch: Dispatch<any>) => void;
    propagateInsert?: (doc: Document, dispatch: Dispatch<any>) => void;
    propagateUpdate?: (doc: Document, dispatch: Dispatch<any>) => void;
    handleResponse?: (
      err: Error,
      data: any,
      errorCallback: (err: Error) => void
    ) => void;
    queue?: (...args: any[]) => any;
    docs?: any;
    actions: {
      remove(doc: Document): Action,
      update(doc: Document): Action,
      insert(doc: Document): Action
    };
  }
  declare export default function PouchMiddlewareFactory(
    paths?: Path[] | Path
  ): Middleware;
}
