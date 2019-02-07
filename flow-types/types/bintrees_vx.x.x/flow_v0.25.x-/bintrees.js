declare module "bintrees" {
  declare type Callback<T> = (item: T) => void;
  declare type Comparator<T> = (a: T, b: T) => number;
  declare class Iterator<T> {
    constructor(tree: TreeBase<T>): this;
    data(): T;
    next(): T;
    prev(): T;
  }
  declare class TreeBase<T> {
    size: number;
    clear(): void;
    find(data: T): T;
    findIter(data: T): Iterator<T>;
    lowerBound(item: T): Iterator<T>;
    upperBound(item: T): Iterator<T>;
    min(): T;
    max(): T;
    iterator(): Iterator<T>;
    each(cb: Callback<T>): void;
    reach(cb: Callback<T>): void;
  }
  declare export class RBTree<T> mixins TreeBase<T> {
    constructor(comparator: Comparator<T>): this;
    insert(item: T): boolean;
    remove(item: T): boolean;
  }
  declare export class BinTree<T> mixins TreeBase<T> {
    constructor(comparator: Comparator<T>): this;
    insert(item: T): boolean;
    remove(item: T): boolean;
  }
}
