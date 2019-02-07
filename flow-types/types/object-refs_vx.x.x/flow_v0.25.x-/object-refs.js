declare module "object-refs" {
  declare module.exports: typeof Refs;

  declare class Refs {
    /**
     * Creates a new references object defining two inversly related
     * attribute descriptors a and b.
     * @param {Refs$Refs$AttributeDescriptor} a property descriptor
     * @param {Refs$Refs$AttributeDescriptor} b property descriptor
     */
    constructor(
      a: Refs$Refs$AttributeDescriptor,
      b: Refs$Refs$AttributeDescriptor
    ): this;

    /**
     * Binds one side of a bi-directional reference to a target object.
     * @param {"NO PRINT IMPLEMENTED: JSDocAllType"} target
     * @param {string | Refs$Refs$AttributeDescriptor} property
     */
    bind(target: any, property: string | Refs$Refs$AttributeDescriptor): void;
    ensureBound(
      target: any,
      property: string | Refs$Refs$AttributeDescriptor
    ): void;
    ensureRefsCollection(
      target: any,
      property: Refs$Refs$AttributeDescriptor
    ): any;
    set(
      target: any,
      property: string | Refs$Refs$AttributeDescriptor,
      value: any
    ): void;
    unset(
      target: any,
      property: string | Refs$Refs$AttributeDescriptor,
      value: any
    ): void;
  }
  declare interface Refs$AttributeDescriptor {
    name: string;
    collection?: boolean;
    enumerable?: boolean;
  }

  declare var npm$namespace$Collection: {
    extend: typeof Collection$extend,
    isExtended: typeof Collection$isExtended
  };

  /**
   * Extends a collection with Refs aware methods
   */
  declare function Collection$extend(
    collection: any[],
    refs: Refs,
    property: string | Refs$AttributeDescriptor,
    target: any
  ): any;

  declare function Collection$isExtended(collection: any[]): boolean;
}
