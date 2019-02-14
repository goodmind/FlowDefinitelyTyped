declare module "object-refs" {
  declare export default typeof Refs;

  declare class Refs {
    /**
     * Creates a new references object defining two inversly related
     * attribute descriptors a and b.
     * @param {Refs$AttributeDescriptor} a property descriptor
     * @param {Refs$AttributeDescriptor} b property descriptor
     */
    constructor(a: Refs$AttributeDescriptor, b: Refs$AttributeDescriptor): this;

    /**
     * Binds one side of a bi-directional reference to a target object.
     * @param {"NO PRINT IMPLEMENTED: JSDocAllType"} target
     * @param {string | Refs$AttributeDescriptor} property
     */
    bind(target: any, property: string | Refs$AttributeDescriptor): void;
    ensureBound(target: any, property: string | Refs$AttributeDescriptor): void;
    ensureRefsCollection(target: any, property: Refs$AttributeDescriptor): any;
    set(
      target: any,
      property: string | Refs$AttributeDescriptor,
      value: any
    ): void;
    unset(
      target: any,
      property: string | Refs$AttributeDescriptor,
      value: any
    ): void;
  }

  declare var npm$namespace$Refs: {
    Collection: typeof npm$namespace$Refs$Collection
  };
  declare interface Refs$AttributeDescriptor {
    name: string;
    collection?: boolean;
    enumerable?: boolean;
  }

  declare var npm$namespace$Refs$Collection: {
    extend: typeof Refs$Collection$extend,
    isExtended: typeof Refs$Collection$isExtended
  };

  /**
   * Extends a collection with Refs aware methods
   */
  declare function Refs$Collection$extend(
    collection: any[],
    refs: Refs,
    property: string | Refs$AttributeDescriptor,
    target: any
  ): any;

  declare function Refs$Collection$isExtended(collection: any[]): boolean;
}
