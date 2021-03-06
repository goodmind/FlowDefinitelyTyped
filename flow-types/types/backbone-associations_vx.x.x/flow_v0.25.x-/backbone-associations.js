declare module "Associations" {
  /**
   * Defines a 1:Many relationship type
   */
  declare export var Many: string;

  /**
   * Defines a 1:1 relationship type
   */
  declare export var One: string;

  /**
   * Defines a special relationship to itself
   */
  declare export var Self: string;
  declare export var SEPARATOR: string;
  declare export function getSeparator(): any;

  declare export function setSeparator(value: any): void;

  declare export var EVENTS_BUBBLE: boolean;
  declare export var EVENTS_WILDCARD: boolean;
  declare export var EVENTS_NC: boolean;
  declare interface IRelation {
    /**
     * The type of model for this relationship
     */
    relatedModel: string | (() => AssociatedModel);

    /**
     * The key for this relationship on this model
     */
    key: string;

    /**
     * The cardinality of this relationship.
     */
    type: string;

    /**
     * Determines the type of collection used. If used, the relatedModel property is ignored
     */
    collectionType?: string | (() => Backbone.Collection<any>);

    /**
     * If set to true, then the attribute will not be serialized in toJSON() calls. Defaults to false
     */
    isTransient?: boolean;

    /**
     * Specify remoteKey to serialize the key to a different key name in toJSON() calls. Useful in ROR nested-attributes like scenarios.
     */
    remoteKey?: string;

    /**
     * the attributes to serialize when calling toJSON
     */
    serialize?: string[];

    /**
     * A transformation function to convert the value before it is assigned to the key on the relatedModel
     */
    map?: (...args: any[]) => any;
  }

  /**
   * A Backbone model with special provision for handling relations to other models
   */
  declare export class AssociatedModel mixins Backbone.Model {
    /**
     * Relations with their associated model
     */
    relations: IRelation[];
    _proxyCalls: any;

    /**
     * Reverse association lookup for objects that contain this object
     */
    parents: any[];

    /**
     * Cleans up any parent relations on other AssociatedModels
     */
    cleanup(): void;
  }
}
declare module "backbone" {
  /**
   * Defines a 1:Many relationship type
   */
  declare export var Many: string;

  /**
   * Defines a 1:1 relationship type
   */
  declare export var One: string;

  /**
   * Defines a special relationship to itself
   */
  declare export var Self: string;

  /**
   * A Backbone model with special provision for handling relations to other models
   */
  declare export class AssociatedModel mixins Backbone.Model {
    /**
     * Relations with their associated model
     */
    relations: Associations.IRelation[];
    _proxyCalls: any;

    /**
     * Reverse association lookup for objects that contain this object
     */
    parents: any[];

    /**
     * Cleans up any parent relations on other AssociatedModels
     */
    cleanup(): void;
  }
}
declare module "backbone-associations" {
  import typeof * as Backbone from "backbone";
}
