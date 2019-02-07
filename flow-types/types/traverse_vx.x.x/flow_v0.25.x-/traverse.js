declare module "traverse" {
  declare function traverse<T>(obj: T): traverse$traverse$Traverse<T>;

  declare var npm$namespace$traverse: {
    get: typeof traverse$get,
    has: typeof traverse$has,
    set: typeof traverse$set,
    map: typeof traverse$map,
    forEach: typeof traverse$forEach,
    reduce: typeof traverse$reduce,
    paths: typeof traverse$paths,
    nodes: typeof traverse$nodes,
    clone: typeof traverse$clone
  };

  /**
   * Get the element at the array `path`.
   */
  declare function traverse$get(obj: any, path: string[]): any;

  /**
   * Return whether the element at the array `path` exists.
   */
  declare function traverse$has(obj: any, path: string[]): boolean;

  /**
   * Set the element at the array `path` to `value`.
   */
  declare function traverse$set(obj: any, path: string[], value: any): any;

  /**
   * Execute `fn` for each node in the object and return a new object with the results of the walk. To update nodes in the result use `this.update(value)`.
   */
  declare function traverse$map(obj: any, cb: (v: any) => void): any;

  /**
   * Execute `fn` for each node in the object but unlike `.map()`, when `this.update()` is called it updates the object in-place.
   */
  declare function traverse$forEach(obj: any, cb: (v: any) => void): any;

  /**
   * For each node in the object, perform a [left-fold](http://en.wikipedia.org/wiki/Fold_(higher-order_function)) with the return value of `fn(acc, node)`.
   *
   * If `init` isn't specified, `init` is set to the root object for the first step and the root element is skipped.
   */
  declare function traverse$reduce(
    obj: any,
    cb: (acc: any, v: any) => void,
    init?: any
  ): any;

  /**
   * Return an `Array` of every possible non-cyclic path in the object.
   * Paths are `Array`s of string keys.
   */
  declare function traverse$paths(obj: any): string[][];

  /**
   * Return an `Array` of every node in the object.
   */
  declare function traverse$nodes(obj: any): any[];

  /**
   * Create a deep clone of the object.
   */
  declare function traverse$clone<T>(obj: T): T;

  declare interface traverse$Traverse<T> {
    /**
     * Get the element at the array `path`.
     */
    traverse$get(path: string[]): any;

    /**
     * Return whether the element at the array `path` exists.
     */
    traverse$has(path: string[]): boolean;

    /**
     * Set the element at the array `path` to `value`.
     */
    traverse$set(path: string[], value: any): any;

    /**
     * Execute `fn` for each node in the object and return a new object with the results of the walk. To update nodes in the result use `this.update(value)`.
     */
    traverse$map(cb: (v: any) => void): any;

    /**
     * Execute `fn` for each node in the object but unlike `.map()`, when `this.update()` is called it updates the object in-place.
     */
    traverse$forEach(cb: (v: any) => void): any;

    /**
     * For each node in the object, perform a [left-fold](http://en.wikipedia.org/wiki/Fold_(higher-order_function)) with the return value of `fn(acc, node)`.
     *
     * If `init` isn't specified, `init` is set to the root object for the first step and the root element is skipped.
     */
    traverse$reduce(cb: (acc: any, v: any) => void, init?: any): any;

    /**
     * Return an `Array` of every possible non-cyclic path in the object.
     * Paths are `Array`s of string keys.
     */
    traverse$paths(): string[][];

    /**
     * Return an `Array` of every node in the object.
     */
    traverse$nodes(): any[];

    /**
     * Create a deep clone of the object.
     */
    traverse$clone(): T;
  }

  declare interface traverse$TraverseContext {
    /**
     * The present node on the recursive walk
     */
    node: any;

    /**
     * An array of string keys from the root to the present node
     */
    path: string[];

    /**
     * The context of the node's parent.
     * This is `undefined` for the root node.
     */
    parent: traverse$TraverseContext | void;

    /**
     * The contexts of the node's parents.
     */
    parents: traverse$TraverseContext[];

    /**
     * The name of the key of the present node in its parent.
     * This is `undefined` for the root node.
     */
    key: string | void;

    /**
     * Whether the present node is the root node
     */
    isRoot: boolean;

    /**
     * Whether the present node is not the root node
     */
    notRoot: boolean;

    /**
     * Whether or not the present node is a leaf node (has no children)
     */
    isLeaf: boolean;

    /**
     * Whether or not the present node is not a leaf node (has children)
     */
    notLeaf: boolean;

    /**
     * Depth of the node within the traversal
     */
    level: number;

    /**
     * If the node equals one of its parents, the `circular` attribute is set to the context of that parent and the traversal progresses no deeper.
     */
    circular: traverse$TraverseContext | void;

    /**
     * Set a new value for the present node.
     *
     * All the elements in `value` will be recursively traversed unless `stopHere` is true (false by default).
     */
    update(value: any, stopHere?: boolean): void;

    /**
     * Remove the current element from the output. If the node is in an Array it will be spliced off. Otherwise it will be deleted from its parent.
     */
    remove(stopHere?: boolean): void;

    /**
     * Delete the current element from its parent in the output. Calls `delete` even on Arrays.
     */
    delete(stopHere?: boolean): void;

    /**
     * Object keys of the node.
     */
    keys: string[] | null;

    /**
     * Call this function before all of the children are traversed.
     * You can assign into `this.keys` here to traverse in a custom order.
     */
    before(callback: (value: any) => void): void;

    /**
     * Call this function after all of the children are traversed.
     */
    after(callback: (value: any) => void): void;

    /**
     * Call this function before each of the children are traversed.
     */
    pre(callback: (child: any) => void): void;

    /**
     * Call this function after each of the children are traversed.
     */
    post(callback: (child: any) => void): void;

    /**
     * Stops traversal entirely.
     */
    stop(): void;

    /**
     * Prevents traversing descendents of the current node.
     */
    block(): void;
  }
  declare module.exports: typeof traverse;
}
