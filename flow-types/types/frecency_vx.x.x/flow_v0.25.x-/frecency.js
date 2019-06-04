declare module "frecency" {
  declare export type idAttrFn = (result: string) => string;
  declare export default class Frecency<T = any> {
    constructor(constructOpts: {
      key: string,
      idAttribute?: string | idAttrFn,
      timeStampsLimit?: number,
      recentSelectionsLimit?: number,
      storageProvider?: { [key: string]: any },
      exactQueryMatchWeight?: number,
      subQueryMatchWeight?: number,
      recentSelectionsMatchWeight?: number
    }): this;
    save: (arg: {
      searchQuery: T,
      selectedId: string
    }) => void;
    sort:
      | ((arg: {
          searchQuery: T,
          searchResults: T[]
        }) => T[])
      | ((arg: {
          searchQuery: T,
          searchResults: T[],
          keepScores?: boolean
        }) => Array<
          T & {
            _frecencyScore?: number
          }
        >);
  }
}
