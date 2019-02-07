declare module "epilogue" {
  import type {
    Sequelize,
    AssociationOptions,
    DataTypeAbstract,
    DataTypeString,
    DataTypeChar,
    DataTypeText,
    DataTypeNumber,
    DataTypeInteger,
    DataTypeBigInt,
    DataTypeFloat,
    DataTypeTime,
    DataTypeDate,
    DataTypeDateOnly,
    DataTypeBoolean,
    DataTypeNow,
    DataTypeBlob,
    DataTypeDecimal,
    DataTypeUUID,
    DataTypeUUIDv1,
    DataTypeUUIDv4,
    DataTypeHStore,
    DataTypeJSONType,
    DataTypeJSONB,
    DataTypeVirtual,
    DataTypeArray,
    DataTypeEnum,
    DataTypeRange,
    DataTypeReal,
    DataTypeDouble,
    DataTypeGeometry
  } from "sequelize";

  import type { Express, Request, Response } from "express";

  declare export class Endpoint {
    constructor(endpoint: string): this;
    string: string;
    attributes: string[];
  }
  declare export class Resource {
    constructor(options: ResourceOptions): this;
    app: Express;
    sequelize: Sequelize;
    model: any;
    include: Array<
      | {
          model: any
        }
      | string
    >;
    associationOptions: ResourceAssociationOptions;
    readOnlyAttributes: string[];
    excludeAttributes: string[];
    attributes: string[];
    actions: string[];
    endpoints: {
      singular: string,
      plural: string
    };
    updateMethod: string;
    pagination: boolean;
    search: ResourceSearchOption;
    sort: ResourceSortOption;
    reloadInstances: boolean;
    controllers: Controllers;
  }
  declare export interface Controllers {
    base: BaseController;
    create: CreateController;
    read: ReadController;
    update: UpdateController;
    delete: DeleteController;
    list: ListController;
  }
  declare class Errors$EpilogueError mixins Error {
    constructor(
      status: number | Errors$EpilogueError,
      message?: string,
      errors?: string[],
      cause?: Error
    ): this;
    name: string;
    message: string;
    errors: string[];
    status: number | Errors$EpilogueError;
    cause: Error;
  }

  declare class Errors$NotFoundError mixins Errors$EpilogueError {
    constructor(message?: string, errors?: string[], cause?: Error): this;
  }

  declare class Errors$BadRequestError mixins Errors$EpilogueError {
    constructor(message?: string, errors?: string[], cause?: Error): this;
  }

  declare class Errors$ForbiddenError mixins Errors$EpilogueError {
    constructor(message?: string, errors?: string[], cause?: Error): this;
  }

  declare class Errors$RequestCompleted mixins Error {
    constructor(): this;
  }
  declare export type ResourceAssociationOptions = {
    removeForeignKeys: boolean
  } & AssociationOptions;

  declare export interface ResourceSearchOption {
    param: string;
    operator: string;
    attributes: string[];
  }
  declare export interface ResourceSortOption {
    param: string;
    default: string;
  }
  declare export interface InitializeOptions {
    app: Express;
    sequelize: Sequelize;
    base?: string;
    updateMethod?: string;
  }
  declare export interface BaseContollerOptions {
    endpoint: string;
    model: any;
    app: Express;
    resource: Resource;
    include: Array<
      | {
          model: any
        }
      | string
    >;
  }
  declare export interface Context {
    instance: Resource;
    criteria: any;
    attributes: any;
    options: any;
    continue: () => void;
    skip: () => void;
    stop: () => void;
    error: (
      status: number | Errors$Errors$EpilogueError,
      message?: string,
      errorList?: string[],
      cause?: Error
    ) => void;
  }
  declare export class BaseController {
    constructor(options: BaseContollerOptions): this;
    endpoint: Endpoint;
    model: any;
  }
  declare export class CreateController mixins BaseController {
    write: (
      req: Request,
      res: Response,
      context: Context
    ) => Promise<() => void>;
  }
  declare export class ReadController mixins BaseController {
    fetch: (
      req: Request,
      res: Response,
      context: Context
    ) => Promise<() => void>;
  }
  declare export class UpdateController mixins BaseController {
    fetch: (
      req: Request,
      res: Response,
      context: Context
    ) => Promise<() => void>;
    write: (
      req: Request,
      res: Response,
      context: Context
    ) => Promise<() => void>;
  }
  declare export class DeleteController mixins BaseController {
    fetch: (
      req: Request,
      res: Response,
      context: Context
    ) => Promise<() => void>;
    write: (
      req: Request,
      res: Response,
      context: Context
    ) => Promise<() => void>;
  }
  declare export class ListController mixins BaseController {
    fetch: (
      req: Request,
      res: Response,
      context: Context
    ) => Promise<() => void>;
    _safeishParse: (
      value: any,
      type:
        | DataTypeAbstract
        | DataTypeString
        | DataTypeChar
        | DataTypeText
        | DataTypeNumber
        | DataTypeInteger
        | DataTypeBigInt
        | DataTypeFloat
        | DataTypeTime
        | DataTypeDate
        | DataTypeDateOnly
        | DataTypeBoolean
        | DataTypeNow
        | DataTypeBlob
        | DataTypeDecimal
        | DataTypeUUID
        | DataTypeUUIDv1
        | DataTypeUUIDv4
        | DataTypeHStore
        | DataTypeJSONType
        | DataTypeJSONB
        | DataTypeVirtual
        | DataTypeArray
        | DataTypeEnum
        | DataTypeRange
        | DataTypeReal
        | DataTypeDouble
        | DataTypeGeometry,
      sequelize: Sequelize
    ) => any;
  }
  declare export interface ResourceOptions {
    model: any;
    endpoints: string[];
    actions?: string[];
    include?: Array<
      | {
          model: any
        }
      | string
    >;
    pagination?: boolean;
    search?: ResourceSearchOption;
    sort?: ResourceSortOption;
    reloadInstances?: boolean;
    associations?: AssociationOptions;
    excludeAttributes?: string[];
    readOnlyAttributes?: string[];
    updateMethod?: string;
  }
  declare export function initialize(options?: InitializeOptions): void;

  declare export function resource(options?: ResourceOptions): Resource;
}
