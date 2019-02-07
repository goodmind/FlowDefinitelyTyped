declare module "jsonapi-serializer" {
  declare export type RefFunction = (current: any, item: any) => string;
  declare export interface Relation {
    ref: string | RefFunction;
    attributes?: string[];
    included?: boolean;
  }
  declare export interface SerializerOptions {
    ref?: (() => void) | boolean | string;
    included?: boolean;
    id?: string;
    attributes?: string[];
    topLevelLinks?: string[] | Array<() => void>;
    dataLinks?: string[] | Array<() => void>;
    dataMeta?: (() => void) | { [key: string]: any };
    relationshipLinks?: { [key: string]: any };
    relationshipMeta?: { [key: string]: any };
    ignoreRelationshipData?: boolean;
    keyForAttribute?: string | KeyForAttribute;
    nullIfMissing?: boolean;
    pluralizeType?: boolean;
    typeForAttribute?: TypeForAttribute;
    meta?: { [key: string]: any };
    transform?: () => void;
  }
  declare export interface KeyForAttribute {
    (attribute: string): string;
  }
  declare export interface TypeForAttribute {
    (attribute: string, object?: any): any;
  }
  declare export interface Transform {
    (record: any): any;
  }
  declare export interface DeserializerOptions {
    id?: string;
    keyForAttribute?:
      | "dash-case"
      | "lisp-case"
      | "spinal-case"
      | "kebab-case"
      | "underscore_case"
      | "snake_case"
      | "camelCase"
      | "CamelCase";
    pluralizeType?: boolean;
    typeAsAttribute?: boolean;
    transform?: Transform;
  }
  declare export interface DeserializerConstructor {
    new(opts: DeserializerOptions): Deserializer;
  }
  declare export interface SerializerConstructor {
    new(collectionName: string, opts: SerializerOptions): Serializer;
  }
  declare export interface ErrorConstructor {
    new(opts: JSONAPIErrorOptions | JSONAPIErrorOptions[]): JSONAPIError;
  }
  declare export interface JSONAPIError {
    errors: any[];
  }
  declare export interface JSONAPIErrorOptions {
    id?: string;
    status?: string;
    code?: string;
    title?: string;
    detail?: string;
    source?: {
      pointer?: string,
      parameter?: string
    };
    links?: {
      about?: string
    };
    meta?: any;
  }
  declare export interface Serializer {
    serialize(data: any): any;
  }
  declare export interface Deserializer {
    deserialize(data: any, callback: Callback): void;
    deserialize(data: any): Promise<any>;
  }
  declare export interface Callback {
    (error: Error, response: any): any;
  }
  declare export var Serializer: SerializerConstructor;
  declare export var Deserializer: DeserializerConstructor;
  declare export var Error: ErrorConstructor;
}
