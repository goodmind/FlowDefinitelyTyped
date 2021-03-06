declare module "swagger-express-middleware" {
  import type {
    Application,
    Router,
    RequestHandler,
    Request,
    s$Response
  } from "express";

  import typeof * as parser from "swagger-parser";

  declare type SwaggerParser = typeof undefined;
  declare var s: s$s$SwaggerMiddlewareConstructor;
  declare interface s$SwaggerMiddlewareConstructor {
    (
      apiDefinitionPathOrObject: string | s$SwaggerObject,
      appOrRouter: Application | Router,
      cb: s$SwaggerMiddlewareConstructorCallback
    ): s$SwaggerMiddleware;
  }

  declare interface s$SwaggerMiddlewareConstructorCallback {
    (
      err: any,
      middleware: s$SwaggerMiddleware,
      api: s$SwaggerObject,
      parser: SwaggerParser
    ): void;
  }

  declare export interface s$SwaggerMiddleware {
    /**
     * Annotates the HTTP request (the `req` object) with Swagger metadata.
     * This middleware populates Request.swagger
     */
    metadata: s$MetadataSignature;

    /**
     * Handles CORS preflight requests and sets CORS headers for all requests according the Swagger API definition.
     */
    CORS: s$CORSSignature;

    /**
     * Serves the Swagger API file(s) in JSON and YAML formats, so they can be used with third-party front-end tools like Swagger UI and Swagger Editor.
     */
    files: s$FilesSignature;

    /**
     * Parses the HTTP request into typed values.
     */
    parseRequest: s$ParseRequestSignature;

    /**
     * Validates the HTTP request against the Swagger API.
     * An error is sent downstream if the request is invalid for any reason.
     */
    validateRequest(): RequestHandler;

    /**
     * Implements mock behavior for HTTP requests, based on the Swagger API.
     */
    mock: s$MockSignature;
  }

  declare interface s$MockSignature {
    (router?: Application | Router, datastore?: any): RequestHandler;
  }

  declare interface s$MetadataSignature {
    (router?: Application | Router): RequestHandler;
  }

  declare interface s$CORSSignature {
    (): RequestHandler;
  }

  declare interface s$FilesSignature {
    (options?: s$FilesOptions): RequestHandler;
    (router: Application | Router, options?: s$FilesOptions): RequestHandler;
  }

  declare interface s$ParseRequestSignature {
    (options?: s$ParseRequestOptions): RequestHandler;
    (
      router: Application | Router,
      options?: s$ParseRequestOptions
    ): RequestHandler;
  }

  declare export interface s$FilesOptions {
    useBasePath?: boolean;
    apiPath?: string;
    rawFilesPath?: string;
  }

  declare export interface s$ParseRequestOptions {
    /**
     * Cookie parser options
     */
    cookie?: s$CookieParserOptionItem;

    /**
     * JSON body parser options
     */
    json?: s$JsonParseOptionItem;

    /**
     * Plain-text body parser options
     */
    text?: s$TextParserOptionItem;

    /**
     * URL-encoded body parser options
     */
    urlencoded?: s$UrlEncodedOptionItem;

    /**
     * Raw body parser options
     */
    raw?: s$RawParserOptionItem;

    /**
     * Multipart form data parser options
     */
    multipart?: s$MulterOptions;
  }

  declare interface s$MulterOptions {
    /**
     * The destination directory for the uploaded files.
     */
    dest?: string;

    /**
     * The storage engine to use for uploaded files.
     */
    storage?: s$StorageEngine;

    /**
     * An object specifying the size limits of the following optional properties. This object is passed to busboy directly, and the details of properties can be found on https://github.com/mscdex/busboy#busboy-methods
     */
    limits?: {
      /**
       * Max field name size (Default: 100 bytes)
       */
      fieldNameSize?: number,

      /**
       * Max field value size (Default: 1MB)
       */
      fieldSize?: number,

      /**
       * Max number of non- file fields (Default: Infinity)
       */
      fields?: number,

      /**
       * For multipart forms, the max file size (in bytes)(Default: Infinity)
       */
      fileSize?: number,

      /**
       * For multipart forms, the max number of file fields (Default: Infinity)
       */
      files?: number,

      /**
       * For multipart forms, the max number of parts (fields + files)(Default: Infinity)
       */
      parts?: number,

      /**
       * For multipart forms, the max number of header key=> value pairs to parse Default: 2000(same as node's http).
       */
      headerPairs?: number
    };

    /**
     * A function to control which files to upload and which to skip.
     */
    fileFilter?: (
      req: Request,
      file: s$File,
      callback: (error: Error, acceptFile: boolean) => void
    ) => void;
  }

  declare interface s$StorageEngine {
    _handleFile(
      req: Request,
      file: s$File,
      callback: (error?: any, info?: s$File) => void
    ): void;
    _removeFile(
      req: Request,
      file: s$File,
      callback: (error: Error) => void
    ): void;
  }

  declare export interface s$File {
    /**
     * Field name specified in the form
     */
    fieldname: string;

    /**
     * Name of the file on the user's computer
     */
    originalname: string;

    /**
     * Encoding type of the file
     */
    encoding: string;

    /**
     * Mime type of the file
     */
    mimetype: string;

    /**
     * Size of the file in bytes
     */
    size: number;

    /**
     * The folder to which the file has been saved (DiskStorage)
     */
    destination: string;

    /**
     * The name of the file within the destination (DiskStorage)
     */
    filename: string;

    /**
     * Location of the uploaded file (DiskStorage)
     */
    path: string;

    /**
     * A Buffer of the entire file (MemoryStorage)
     */
    buffer: Buffer;
  }

  declare interface s$RawParserOptionItem {
    /**
     * if deflated bodies will be inflated. (default: true)
     */
    inflate?: boolean;

    /**
     * Controls the maximum request body size. If this is a number, then the value specifies the number of bytes;
     * if it is a string, the value is passed to the bytes library for parsing. Defaults to '100kb'.
     */
    limit?: string | number;

    /**
     * The type option is used to determine what media type the middleware will parse.
     * This option can be a function or a string.
     * If a string, type option is passed directly to the type-is library and this can be an extension name (like bin), a mime type (like application/octet-stream), or a mime type with a wildcard (like * /* or application/*).
     * If a function, the type option is called as fn(req) and the request is parsed if it returns a truthy value.
     * Defaults to application/octet-stream.
     */
    type?: ((req: Request) => string) | string;

    /**
     * function to verify body content, the parsing can be aborted by throwing an error.
     */
    verify?: (
      req: Request,
      res: s$Response,
      buf: Buffer,
      encoding: string
    ) => void;
  }

  declare interface s$CookieParserOptionItem {
    /**
     * A string or array used for signing cookies.
     * This is optional and if not specified, will not parse signed cookies.
     * If a string is provided, this is used as the secret.
     * If an array is provided, an attempt will be made to unsign the cookie with each secret in order.
     */
    secret?: string | Array<string>;

    /**
     * an object that is passed to cookie.parse as the second option
     */
    options?: any;
  }

  declare interface s$JsonParseOptionItem {
    /**
     * if deflated bodies will be inflated. (default: true)
     */
    inflate?: boolean;

    /**
     * Controls the maximum request body size.
     * If this is a number, then the value specifies the number of bytes; if it is a string, the value is passed to the bytes library for parsing.
     * Defaults to '100kb'
     */
    limit?: string | number;

    /**
     * The type option is used to determine what media type the middleware will parse.
     * This option can be a function or a string.
     * If a string, type option is passed directly to the type-is library and this can be an extension name (like json), a mime type (like application/json), or a mime * type with a wildcard (like * /* or * /json).
     * If a function, the type option is called as fn(req) and the request is parsed if it returns a truthy value. Defaults to application/json
     */
    type?: ((req: Request) => string) | string;

    /**
     * The verify option, if supplied, is called as verify(req, res, buf, encoding), where buf is a Buffer of the raw request body and encoding is the encoding of the request.
     * The parsing can be aborted by throwing an error.
     */
    verify?: (
      req: Request,
      res: s$Response,
      buf: Buffer,
      encoding: string
    ) => void;

    /**
     * only parse objects and arrays. (default: true)
     */
    strict?: boolean;

    /**
     * passed to JSON.parse().
     */
    receiver?: (key: string, value: any) => any;
  }

  declare interface s$TextParserOptionItem {
    /**
     * if deflated bodies will be inflated. (default: true)
     */
    inflate?: boolean;

    /**
     * Controls the maximum request body size.
     * If this is a number, then the value specifies the number of bytes; if it is a string, the value is passed to the bytes library for parsing.
     * Defaults to '100kb'
     */
    limit?: string | number;

    /**
     * The type option is used to determine what media type the middleware will parse.
     * This option can be a function or a string.
     * If a string, type option is passed directly to the type-is library and this can be an extension name (like txt), a mime type (like text/plain), or a mime type * with a wildcard (like * /* or text/*).
     * If a function, the type option is called as fn(req) and the request is parsed if it returns a truthy value. Defaults to text/plain.
     */
    type?: ((req: Request) => string) | string;

    /**
     * function to verify body content, the parsing can be aborted by throwing an error.
     */
    verify?: (
      req: Request,
      res: s$Response,
      buf: Buffer,
      encoding: string
    ) => void;

    /**
     * the default charset to parse as, if not specified in content-type. (default: 'utf-8')
     */
    defaultCharset?: string;
  }

  declare interface s$UrlEncodedOptionItem {
    /**
     * if deflated bodies will be inflated. (default: true)
     */
    inflate?: boolean;

    /**
     * Controls the maximum request body size.
     * If this is a number, then the value specifies the number of bytes;
     * if it is a string, the value is passed to the bytes library for parsing.
     * Defaults to '100kb'.
     */
    limit?: string | number;

    /**
     * The type option is used to determine what media type the middleware will parse.
     * This option can be a function or a string.
     * If a string, type option is passed directly to the type-is library and this can be an extension name (like urlencoded), a mime type (like application/x-www-form-urlencoded),
     * or a mime type with a wildcard (like * /x-www-form-urlencoded). If a function, the type option is called as fn(req) and the request is parsed if it returns a truthy value.
     * Defaults to application/x-www-form-urlencoded.
     */
    type?: ((req: Request) => string) | string;

    /**
     * function to verify body content, the parsing can be aborted by throwing an error.
     */
    verify?: (
      req: Request,
      res: s$Response,
      buf: Buffer,
      encoding: string
    ) => void;

    /**
     * parse extended syntax with the qs module.
     */
    extended?: boolean;
  }

  declare export interface s$SwaggerObject {
    swagger: string;
    info: s$InfoObject;
    host?: string;
    basePath?: string;
    schemes?: string[];
    consumes?: s$MimeTypes;
    produces?: s$MimeTypes;
    paths: s$PathsObject;
    definitions?: s$DefinitionsObject;
    parameters?: s$ParametersDefinitionsObject;
    responses?: s$ResponsesDefinitionsObject;
    securityDefinitions?: s$SecurityDefinitionsObject;
    security?: s$SecurityRequirementObject[];
    tags?: s$TagObject[];
    externalDocs?: s$ExternalDocumentationObject;
  }

  declare type s$MimeTypes = string[];

  declare export interface s$InfoObject {
    title: string;
    description?: string;
    termsOfService?: string;
    contact?: s$ContactObject;
    license?: s$LicenseObject;
    version: string;
  }

  declare export interface s$ContactObject {
    name?: string;
    url?: string;
    email?: string;
  }

  declare export interface s$LicenseObject {
    name: string;
    url?: string;
  }

  declare export interface s$PathsObject {
    [index: string]: s$PathItemObject | any;
  }

  declare export interface s$PathItemObject {
    $ref?: string;
    get?: s$OperationObject;
    put?: s$OperationObject;
    post?: s$OperationObject;
    delete?: s$OperationObject;
    options?: s$OperationObject;
    head?: s$OperationObject;
    patch?: s$OperationObject;
    parameters?: s$Parameters;
  }

  declare export interface s$OperationObject {
    tags?: string[];
    summary?: string;
    description?: string;
    externalDocs?: s$ExternalDocumentationObject;
    operationId?: string;
    consumes?: s$MimeTypes;
    produces?: s$MimeTypes;
    parameters?: s$Parameters;
    responses: s$ResponsesObject;
    schemes?: string[];
    deprecated?: boolean;
    security?: s$SecurityRequirementObject[];
  }

  declare export interface s$DefinitionsObject {
    [index: string]: s$SchemaObject;
  }

  declare export interface s$ResponsesObject {
    [index: string]: s$Response | any;
    default: s$Response;
  }

  declare type s$Response = s$ResponseObject | s$ReferenceObject;

  declare export interface s$ResponsesDefinitionsObject {
    [index: string]: s$ResponseObject;
  }

  declare export interface s$ResponseObject {
    description: string;
    schema?: s$SchemaObject;
    headers?: s$HeadersObject;
    examples?: s$ExampleObject;
  }

  declare export interface s$HeadersObject {
    [index: string]: s$HeaderObject;
  }

  declare export type s$HeaderObject = {} & s$ItemsObject;

  declare export interface s$ExampleObject {
    [index: string]: any;
  }

  declare export interface s$SecurityDefinitionsObject {
    [index: string]: s$SecuritySchemeObject;
  }

  declare export interface s$SecuritySchemeObject {
    type: string;
    description?: string;
    name: string;
    in: string;
    flow: string;
    authorizationUrl: string;
    tokenUrl: string;
    scopes: s$ScopesObject;
  }

  declare export interface s$ScopesObject {
    [index: string]: any;
  }

  declare export interface s$SecurityRequirementObject {
    [index: string]: string[];
  }

  declare export interface s$TagObject {
    name: string;
    description?: string;
    externalDocs?: s$ExternalDocumentationObject;
  }

  declare export interface s$ItemsObject {
    type: string;
    format?: string;
    items?: s$ItemsObject;
    collectionFormat?: string;
    default?: any;
    maximum?: number;
    exclusiveMaximum: boolean;
    minimum?: number;
    exclusiveMinimum?: boolean;
    maxLength?: number;
    minLength?: number;
    pattern?: string;
    maxItems?: number;
    minItems?: number;
    uniqueItems?: boolean;
    enum?: any[];
    multipleOf?: number;
  }

  declare export interface s$ParametersDefinitionsObject {
    [index: string]: s$ParameterObject;
  }

  declare type s$Parameters = (s$ParameterObject | s$ReferenceObject)[];

  declare export interface s$ParameterObject {
    name: string;
    in: string;
    description?: string;
    required?: boolean;
  }

  declare export type s$InBodyParameterObject = {
    schema: s$SchemaObject
  } & s$ParameterObject;

  declare export type s$GeneralParameterObject = {
    allowEmptyValue?: boolean
  } & s$ParameterObject &
    s$ItemsObject;

  declare export interface s$ReferenceObject {
    $ref: string;
  }

  declare export interface s$ExternalDocumentationObject {
    [index: string]: any;
    description?: string;
    url: string;
  }

  declare export type s$SchemaObject = {
    [index: string]: any,
    discriminator?: string,
    readOnly?: boolean,
    xml?: s$XMLObject,
    externalDocs?: s$ExternalDocumentationObject,
    example?: any
  } & s$IJsonSchema;

  declare interface s$IJsonSchema {
    id?: string;
    $schema?: string;
    title?: string;
    description?: string;
    multipleOf?: number;
    maximum?: number;
    exclusiveMaximum?: boolean;
    minimum?: number;
    exclusiveMinimum?: boolean;
    maxLength?: number;
    minLength?: number;
    pattern?: string;
    additionalItems?: boolean | s$IJsonSchema;
    items?: s$IJsonSchema | s$IJsonSchema[];
    maxItems?: number;
    minItems?: number;
    uniqueItems?: boolean;
    maxProperties?: number;
    minProperties?: number;
    required?: string[];
    additionalProperties?: boolean | s$IJsonSchema;
    definitions?: {
      [name: string]: s$IJsonSchema
    };
    properties?: {
      [name: string]: s$IJsonSchema
    };
    patternProperties?: {
      [name: string]: s$IJsonSchema
    };
    dependencies?: {
      [name: string]: s$IJsonSchema | string[]
    };
    enum?: any[];
    type?: string | string[];
    allOf?: s$IJsonSchema[];
    anyOf?: s$IJsonSchema[];
    oneOf?: s$IJsonSchema[];
    not?: s$IJsonSchema;
    $ref?: string;
    format?: string;
  }

  declare export interface s$XMLObject {
    [index: string]: any;
    name?: string;
    namespace?: string;
    prefix?: string;
    attribute?: boolean;
    wrapped?: boolean;
  }
  declare module.exports: typeof s;
}
