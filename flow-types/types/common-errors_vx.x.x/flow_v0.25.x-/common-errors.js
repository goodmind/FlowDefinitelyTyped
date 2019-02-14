declare module "common-errors" {
  import typeof * as express from "express";

  declare export type GenerateMessageMethod = () => string;
  declare export interface ErrorConstructor {
    new(...params: any[]): Error;
  }

  /**
   * Modifies an error's stack to include the current stack and logs it to
   * stderr. Useful for logging errors received by a callback.
   * @param err any error or error message received from a callback
   * @param message any message you'd like to prepend
   * @returns err
   */
  declare export function log(err: Error, message?: string): Error;

  declare export function logError(err: Error, cb: () => any): void;

  /**
   * Modifies an error's stack to include the current stack without logging
   * it. Useful for logging errors received by a callback.
   * @param err any error or error message received from a callback
   * @returns err
   */
  declare export function prependCurrentStack(err: Error): Error;

  declare var npm$namespace$helpers: {
    generateClass: typeof helpers$generateClass
  };

  /**
   * Simple interface for generating a new Error class type.
   * @param name The full name of the new Error class
   * @param The base class for the new Error
   * class. Default is Error.
   * @param Boolean (default true) to store the
   * Error in global space so that the
   * Error is equivalent to others included
   * from other versions of the module.
   * @param Array of names of values to accept and
   * store from the class constructor.
   * Default is ['message', 'inner_error'].
   * @param A function for defining a custom error
   * message.
   */
  declare function helpers$generateClass(
    name: string,
    options?: {
      extends?: Error,
      globalize?: boolean,
      args?: string[],
      generateMessage?: GenerateMessageMethod
    }
  ): ErrorConstructor;

  declare var npm$namespace$middleware: {
    crashProtector: typeof middleware$crashProtector,
    errorHandler: typeof middleware$errorHandler
  };

  /**
   * Express middleware for preventing the web server from crashing when
   * an error is thrown from an asynchronous context. Any error that would
   * have caused a crash is logged to stderr.
   */
  declare function middleware$crashProtector(
    errorHandler: (
      err: Error,
      req: express.Request,
      res: express.Response
    ) => void
  ): void;

  /**
   * Express middleware that translates common errors into HTTP status
   * codes and messages.
   */
  declare function middleware$errorHandler(
    err: Error,
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ): void;

  /**
   * This is roughly the same as the native Error class. It additionally
   * supports an inner_error attribute.
   * @example throw new errors.Error("Please provide authentication.", err)
   */
  declare export class Error mixins global.Error {
    /**
     * @param message any message
     * @param inner_error the Error instance that caused the current error.
     * Stack trace will be appended.
     */
    constructor(entityName: string, inner_error?: Error): this;
  }

  /**
   * Applicable when a resource is already in use, for example unique key
   * constraints like a username.
   * @example throw new errors.AlreadyInUseError('user', 'username')
   */
  declare export class AlreadyInUseError mixins global.Error {
    /**
     * @param entityName the entity that owns the protected resource
     * @param args the fields or attributes that are already in use
     */
    constructor(entityName: string, ...args: string[]): this;
  }

  /**
   * Applicable when there's a generic problem with an argument received by a
   * function call.
   * @example throw new errors.ArgumentError('username', err)
   */
  declare export class ArgumentError mixins global.Error {
    /**
     * @param argumentName the name of the argument that has a problem
     * @param inner_error the Error instance that caused the current error.
     * Stack trace will be appended.
     */
    constructor(argumentName: string, inner_error?: Error): this;
  }

  /**
   * Applicable when an argument received by a function call is null/undefined
   * or empty.
   * @example throw new errors.ArgumentNullError('username', err)
   */
  declare export class ArgumentNullError mixins ArgumentError {
    /**
     * @param argumentName the name of the argument that is null
     * @param inner_error the Error instance that caused the current error.
     * Stack trace will be appended.
     */
    constructor(argumentName: string, inner_error?: Error): this;
  }

  /**
   * Applicable when an operation requires authentication
   * @example throw new errors.AuthenticationRequiredError("Please provide authentication.", err)
   */
  declare export class AuthenticationRequiredError mixins global.Error {
    /**
     * @param message any message
     * @param inner_error the Error instance that caused the current error.
     * Stack trace will be appended.
     */
    constructor(message: string, inner_error?: Error): this;
  }

  /**
   * Applicable when an error occurs on a connection.
   * @example throw new errors.ConnectionError('database connection no longer available', err)
   */
  declare export class ConnectionError mixins global.Error {
    /**
     * @param message any message
     * @param inner_error the Error instance that caused the current error.
     * Stack trace will be appended.
     */
    constructor(message: string, inner_error?: Error): this;
  }

  /**
   * Represents a message and a HTTP status code.
   * @example throw new errors.HttpStatusError(404, "Not Found")
   * @example throw new errors.HttpStatusError(err, req)
   */
  declare export class HttpStatusError mixins global.Error {
    /**
     * Figure out a proper status code and message from a given error. To
     * change the mappings, modify HttpStatusError.message_map and
     * HttpStatusError.code_map
     * @param status_code any HTTP status code integer
     * @param message any message
     */
    constructor(status_code: number, message?: string): this;

    /**
     * @param err any instanceof Error
     * @param req the request object
     */
    constructor(err: Error, req?: express.Request): this;

    /**
     * Status code for this error.
     */
    statusCode: number;
  }

  /**
   * Applicable when an invalid operation occurs.
   * @example throw new errors.InvalidOperationError('divide by zero', err)
   */
  declare export class InvalidOperationError mixins global.Error {
    /**
     * @param message any message
     * @param inner_error the Error instance that caused the current error.
     * Stack trace will be appended.
     */
    constructor(message: string, inner_error?: Error): this;
  }

  /**
   * Applicable when an error occurs on a socket.
   * @example throw new errors.SocketError('socket no longer available', err)
   */
  declare export class SocketError mixins global.Error {
    /**
     * @param message any message
     * @param inner_error the Error instance that caused the current error.
     * Stack trace will be appended.
     */
    constructor(message: string, inner_error?: Error): this;
  }

  /**
   * Applicable when an attempt to retrieve data yielded no result.
   * @example throw new errors.NotFoundError("User", err)
   */
  declare export class NotFoundError mixins global.Error {
    /**
     * @param entity_name a description for what was not found
     * @param inner_error the Error instance that caused the current error.
     * Stack trace will be appended.
     */
    constructor(entity_name: string, inner_error?: Error): this;
  }

  /**
   * Applicable when a requested method or operation is not implemented.
   * @example throw new errors.NotImplementedError("Method is not yet implemented.", err)
   */
  declare export class NotImplementedError mixins global.Error {
    /**
     * @param message any message
     * @param inner_error the Error instance that caused the current error.
     * Stack trace will be appended.
     */
    constructor(message: string, inner_error?: Error): this;
  }

  /**
   * Applicable when an operation is not permitted
   * @example throw new errors.NotPermittedError("username cannot be changed once set.", err)
   */
  declare export class NotPermittedError mixins global.Error {
    /**
     * @param message any message
     * @param inner_error the Error instance that caused the current error.
     * Stack trace will be appended.
     */
    constructor(message: string, inner_error?: Error): this;
  }

  /**
   * Applicable when a certain condition is not supported by your application.
   * @example throw new errors.NotSupportedError('Zero values', err)
   */
  declare export class NotSupportedError mixins global.Error {
    /**
     * @param message any message
     * @param inner_error the Error instance that caused the current error.
     * Stack trace will be appended.
     */
    constructor(message: string, inner_error?: Error): this;
  }

  /**
   * Applicable when there is not enough memory to continue the execution of a program.
   * @example throw new errors.OutOfMemoryError('Maximum mem size exceeded.', err)
   */
  declare export class OutOfMemoryError mixins global.Error {
    /**
     * @param message any message
     * @param inner_error the Error instance that caused the current error.
     * Stack trace will be appended.
     */
    constructor(message: string, inner_error?: Error): this;
  }

  /**
   * Represents an error that occurs when a numeric variable or parameter is
   * outside of its valid range. This is roughly the same as the native
   * RangeError class. It additionally supports an inner_error attribute.
   * @example throw new errors.RangeError("Value must be between " + MIN + " and " + MAX, err)
   */
  declare export class RangeError mixins global.RangeError {
    /**
     * @param message any message
     * @param inner_error the Error instance that caused the current error.
     * Stack trace will be appended.
     */
    constructor(message: string, inner_error?: Error): this;
  }

  /**
   * Represents an error when a non-existent variable is referenced. This is
   * roughly the same as the native ReferenceError class. It additionally
   * supports an inner_error attribute.
   * @example throw new errors.ReferenceError("x is not defined", err)
   */
  declare export class ReferenceError mixins global.ReferenceError {
    /**
     * @param message any message
     * @param inner_error the Error instance that caused the current error.
     * Stack trace will be appended.
     */
    constructor(message: string, inner_error?: Error): this;
  }

  /**
   * Applicable when the execution stack overflows because it contains too
   * many nested method calls.
   * @example throw new errors.StackOverflowError('Stack overflow detected.', err)
   */
  declare export class StackOverflowError mixins global.Error {
    /**
     * @param message any message
     * @param inner_error the Error instance that caused the current error.
     * Stack trace will be appended.
     */
    constructor(message: string, inner_error?: Error): this;
  }

  /**
   * Represents an error when trying to interpret syntactically invalid code.
   * This is roughly the same as the native SyntaxError class. It additionally
   * supports an inner_error attribute.
   * @example throw new errors.SyntaxError("Unexpected token a", err)
   */
  declare export class SyntaxError mixins global.SyntaxError {
    /**
     * @param message any message
     * @param inner_error the Error instance that caused the current error.
     * Stack trace will be appended.
     */
    constructor(message: string, inner_error?: Error): this;
  }

  /**
   * Applicable when an operation takes longer than the alloted amount.
   * @example throw new errors.TimeoutError('100ms', err)
   */
  declare export class TimeoutError mixins global.Error {
    /**
     * @param time a time duration
     * @param inner_error the Error instance that caused the current error.
     * Stack trace will be appended.
     */
    constructor(time: string, inner_error?: Error): this;
  }

  /**
   * Represents an error when a value is not of the expected type. This is
   * roughly the same as the native TypeError class. It additionally supports
   * an inner_error attribute.
   * @example throw new errors.TypeError("number is not a function", err)
   */
  declare export class TypeError mixins global.TypeError {
    /**
     * @param message any message
     * @param inner_error the Error instance that caused the current error.
     * Stack trace will be appended.
     */
    constructor(message: string, inner_error?: Error): this;
  }

  /**
   * Represents an error when a value is not of the expected type. This is
   * roughly the same as the native URIError class. It additionally supports
   * an inner_error attribute.
   * @example throw new errors.URIError("URI malformed", err)
   */
  declare export class URIError mixins global.URIError {
    /**
     * @param message any message
     * @param inner_error the Error instance that caused the current error.
     * Stack trace will be appended.
     */
    constructor(message: string, inner_error?: Error): this;
  }

  /**
   * Useful for denoting a problem with a user-defined value. Generally, you
   * won't throw this error. It serializes to JSON, and it can also function
   * as an envelope for multiple errors.
   * @example function validateUsername(username) {
   * var errors = new errors.ValidationError()
   * if (username.length < 3) errors.addError(new errors.ValidationError("username must be at least two characters long", "VAL_MIN_USERNAME_LENGTH", "username"))
   * if(/-%$*&!/.test(username)) errors.addError(new errors.ValidationError("username may not contain special characters", "VAL_USERNAME_SPECIALCHARS", "username"))
   * return errors
   * }
   */
  declare export class ValidationError mixins global.Error {
    /**
     * @param message any message
     * @param code an optional error code
     * @param field an optional description of the data
     */
    constructor(message: string, code?: string, field?: string): this;

    /**
     * add an error object to the errors array
     */
    addError(error: Error): this;

    /**
     * append an array of error objects to the errors array
     */
    addErrors(errors: Error[]): this;
  }

  declare var npm$namespace$data: {
    DataError: typeof data$DataError,
    MemcachedError: typeof data$MemcachedError,
    MongoDBError: typeof data$MongoDBError,
    RedisError: typeof data$RedisError,
    RollbackError: typeof data$RollbackError,
    SQLError: typeof data$SQLError,
    TransactionError: typeof data$TransactionError
  };

  /**
   * Applicable when an error occurs on or with an external data source.
   * @example throw new errors.data.DataError('Too many rows returned from database', err)
   */
  declare class data$DataError mixins global.Error {
    /**
     * @param message any message
     * @param inner_error the Error instance that caused the current
     * error. Stack trace will be appended.
     */
    constructor(message: string, inner_error?: Error): this;
  }

  /**
   * Applicable when an error occurs while using memcached.
   * @example throw new errors.data.MemcachedError('Expected value not found', err)
   */
  declare class data$MemcachedError mixins DataError {
    /**
     * @param message any message
     * @param inner_error the Error instance that caused the current
     * error. Stack trace will be appended.
     */
    constructor(message: string, inner_error?: Error): this;
  }

  /**
   * Applicable when an error occurs while using MongoDB.
   * @example throw new errors.data.MongoDBError('Retrieved value not in expected format', err)
   */
  declare class data$MongoDBError mixins DataError {
    /**
     * @param message any message
     * @param inner_error the Error instance that caused the current
     * error. Stack trace will be appended.
     */
    constructor(message: string, inner_error?: Error): this;
  }

  /**
   * Applicable when an error occurs while using redis.
   * @example throw new errors.data.RedisError('expected value not found in redis', err)
   */
  declare class data$RedisError mixins DataError {
    /**
     * @param message any message
     * @param inner_error the Error instance that caused the current
     * error. Stack trace will be appended.
     */
    constructor(message: string, inner_error?: Error): this;
  }

  /**
   * Applicable when a transaction was unexpectedly rolled back.
   * @example throw new errors.data.RollbackError('database transaction was unexpectedly rolled back', err)
   */
  declare class data$RollbackError mixins DataError {
    /**
     * @param message any message
     * @param inner_error the Error instance that caused the current
     * error. Stack trace will be appended.
     */
    constructor(message: string, inner_error?: Error): this;
  }

  /**
   * Applicable when an error occurs while using a SQL database.
   * @example throw new errors.data.SQLError('foreign key constraint violated', err)
   */
  declare class data$SQLError mixins DataError {
    /**
     * @param message any message
     * @param inner_error the Error instance that caused the current
     * error. Stack trace will be appended.
     */
    constructor(message: string, inner_error?: Error): this;
  }

  /**
   * Applicable when an error unexpectedly interrupts a transaction.
   * @example throw new errors.data.TransactionError('transaction already complete', err)
   */
  declare class data$TransactionError mixins DataError {
    /**
     * @param message any message
     * @param inner_error the Error instance that caused the current
     * error. Stack trace will be appended.
     */
    constructor(message: string, inner_error?: Error): this;
  }

  declare var npm$namespace$io: {
    IOError: typeof io$IOError,
    DirectoryNotFoundError: typeof io$DirectoryNotFoundError,
    DriveNotFoundError: typeof io$DriveNotFoundError,
    EndOfStreamError: typeof io$EndOfStreamError,
    FileLoadError: typeof io$FileLoadError,
    FileNotFoundError: typeof io$FileNotFoundError
  };

  /**
   * Base class for Errors while accessing information using streams,
   * files and directories.
   * @example throw new errors.io.IOError("Could not open file", err)
   */
  declare class io$IOError mixins global.Error {
    /**
     * @param message any message
     * @param inner_error the Error instance that caused the current
     * error. Stack trace will be appended.
     */
    constructor(message: string, inner_error?: Error): this;
  }

  /**
   * Applicable when part of a file or directory cannot be found.
   * @example throw new errors.io.DirectoryNotFoundError("/var/log", err)
   */
  declare class io$DirectoryNotFoundError mixins IOError {
    /**
     * @param message any message
     * @param inner_error the Error instance that caused the current
     * error. Stack trace will be appended.
     */
    constructor(message: string, inner_error?: Error): this;
  }

  /**
   * Applicable when trying to access a drive or share that is not
   * available.
   * @example throw new errors.io.DriveNotFoundError("c", err)
   */
  declare class io$DriveNotFoundError mixins IOError {
    /**
     * @param message any message
     * @param inner_error the Error instance that caused the current
     * error. Stack trace will be appended.
     */
    constructor(message: string, inner_error?: Error): this;
  }

  /**
   * Applicable when reading is attempted past the end of a stream.
   * @example throw new errors.io.EndOfStreamError("EOS while reading header", err)
   */
  declare class io$EndOfStreamError mixins IOError {
    /**
     * @param message any message
     * @param inner_error the Error instance that caused the current
     * error. Stack trace will be appended.
     */
    constructor(message: string, inner_error?: Error): this;
  }

  /**
   * Applicable when a file is found and read but cannot be loaded.
   * @example throw new errors.io.FileLoadError("./package.json", err)
   */
  declare class io$FileLoadError mixins IOError {
    /**
     * @param file_name any message
     * @param inner_error the Error instance that caused the current
     * error. Stack trace will be appended.
     */
    constructor(file_name: string, inner_error?: Error): this;
  }

  /**
   * Applicable when an attempt to access a file that does not exist on
   * disk fails.
   * @example throw new errors.io.FileNotFoundError("./package.json", err)
   */
  declare class io$FileNotFoundError mixins IOError {
    /**
     * @param file_name any message
     * @param inner_error the Error instance that caused the current
     * error. Stack trace will be appended.
     */
    constructor(file_name: string, inner_error?: Error): this;
  }
}
