declare module "activex-interop" {
  declare interface ActiveXObjectNameMap {}
  declare interface ActiveXObject {
    new<K: $Keys<ActiveXObjectNameMap>>(
      progid: K
    ): $ElementType<ActiveXObjectNameMap, K>;
    new(s: string): any;
  }
  declare var ActiveXObject: ActiveXObject;

  /**
   * Represents an Automation SAFEARRAY
   */
  declare class SafeArray<T = any> {
    constructor(): this;
  }

  /**
   * Allows enumerating over a COM collection, which may not have indexed item access.
   */
  declare interface Enumerator<T = any> {
    /**
     * Returns true if the current item is the last one in the collection, or the collection is empty,
     * or the current item is undefined.
     */
    atEnd(): boolean;

    /**
     * Returns the current item in the collection
     */
    item(): T;

    /**
     * Resets the current item in the collection to the first item. If there are no items in the collection,
     * the current item is set to undefined.
     */
    moveFirst(): void;

    /**
     * Moves the current item to the next item in the collection. If the enumerator is at the end of
     * the collection or the collection is empty, the current item is set to undefined.
     */
    moveNext(): void;
  }
  declare interface EnumeratorConstructor {
    new<T>(collection: {
      Item(index: any): T
    }): Enumerator<T>;
  }
  declare var Enumerator: EnumeratorConstructor;

  /**
   * Enables reading from a COM safe array, which might have an alternate lower bound, or multiple dimensions.
   */
  declare interface VBArray<T = any> {
    /**
     * Returns the number of dimensions (1-based).
     */
    dimensions(): number;

    /**
     * Takes an index for each dimension in the array, and returns the item at the corresponding location.
     */
    getItem(dimension1Index: number, ...dimensionNIndexes: number[]): T;

    /**
     * Returns the smallest available index for a given dimension.
     * @param dimension 1-based dimension (defaults to 1)
     */
    lbound(dimension?: number): number;

    /**
     * Returns the largest available index for a given dimension.
     * @param dimension 1-based dimension (defaults to 1)
     */
    ubound(dimension?: number): number;

    /**
     * Returns a Javascript array with all the elements in the VBArray. If there are multiple dimensions,
     * each successive dimension is appended to the end of the array.
     * Example: [[1,2,3],[4,5,6]] becomes [1,2,3,4,5,6]
     */
    toArray(): T[];
  }
  declare interface VBArrayConstructor {
    new<T>(safeArray: SafeArray<T>): VBArray<T>;
  }
  declare var VBArray: VBArrayConstructor;

  /**
   * Automation date (VT_DATE)
   */
  declare class VarDate {
    constructor(): this;
  }
  declare interface DateConstructor {
    new(vd: VarDate): Date;
  }
  declare interface Date {
    getVarDate: () => VarDate;
  }
}
