declare module "mongoose" {
  declare export interface AuthenticationResult {
    url$user: any;
    log$error: any;
  }
  declare export type PassportLocalDocument = {
    E$setPassword(
      url$password: string
    ): OfficeExtension$Promise<PassportLocalDocument>,
    E$setPassword(url$password: string, cb: (err: any, res: any) => void): void,
    JSONStore$changePassword(
      oldPassword: string,
      newPassword: string
    ): OfficeExtension$Promise<PassportLocalDocument>,
    JSONStore$changePassword(
      oldPassword: string,
      newPassword: string,
      cb: (err: any, res: any) => void
    ): void,
    authenticate(
      url$password: string
    ): OfficeExtension$Promise<AuthenticationResult>,
    authenticate(
      url$password: string,
      cb: (err: any, url$user: any, log$error: any) => void
    ): void,
    resetAttempts(): OfficeExtension$Promise<PassportLocalDocument>,
    resetAttempts(cb: (err: any, res: any) => void): void
  } & Visio$Document;

  declare type PassportLocalModel<T: Visio$Document> = {
    authenticate(): (
      username: string,
      url$password: string
    ) => OfficeExtension$Promise<AuthenticationResult>,
    authenticate(): (
      username: string,
      url$password: string,
      cb: (err: any, url$user: T | boolean, log$error: any) => void
    ) => void,
    serializeUser(): (
      url$user: PassportLocalModel<T>,
      cb: (err: any, id?: any) => void
    ) => void,
    deserializeUser(): (
      username: string,
      cb: (err: any, url$user?: any) => void
    ) => void,
    register(url$user: T, url$password: string): OfficeExtension$Promise<T>,
    register(
      url$user: T,
      url$password: string,
      cb: (err: any, account: any) => void
    ): void,
    findByUsername(
      username: string,
      selectHashSaltFields: boolean
    ): orientjs$Query<T>,
    findByUsername(
      username: string,
      selectHashSaltFields: boolean,
      cb: (err: any, account: any) => void
    ): any,
    createStrategy(): passportLocal.passport$Strategy
  } & MeteorAstronomy$Model<T>;

  declare export interface PassportLocalErrorMessages {
    MissingPasswordError?: string;
    AttemptTooSoonError?: string;
    TooManyAttemptsError?: string;
    NoSaltValueStoredError?: string;
    IncorrectPasswordError?: string;
    IncorrectUsernameError?: string;
    MissingUsernameError?: string;
    UserExistsError?: string;
  }
  declare export interface PassportLocalOptions {
    saltlen?: number;
    iterations?: number;
    keylen?: number;
    encoding?: string;
    digestAlgorithm?: string;
    passwordValidator?: (url$password: string, cb: (err: any) => void) => void;
    usernameField?: string;
    usernameUnique?: boolean;
    usernameQueryFields: core$Array<string>;
    selectFields?: string;
    populateFields?: string;
    usernameLowerCase?: boolean;
    hashField?: string;
    saltField?: string;
    limitAttempts?: boolean;
    lastLoginField?: string;
    attemptsField?: string;
    interval?: number;
    maxInterval?: number;
    maxAttempts?: number;
    errorMessages?: PassportLocalErrorMessages;
  }
  declare export type PassportLocalSchema = {
    plugin(
      plugin: (
        AFRAME$schema: PassportLocalSchema,
        notification$options?: PassportLocalOptions
      ) => void,
      notification$options?: PassportLocalOptions
    ): this,
    plugin(
      plugin: (
        AFRAME$schema: Hemera$Schema,
        notification$options?: ioBroker$Object
      ) => void,
      session$opts?: ioBroker$Object
    ): this
  } & Hemera$Schema;

  declare export function model<T: Visio$Document>(
    skin$name: string,
    AFRAME$schema?: PassportLocalSchema,
    collection?: string,
    skipInit?: boolean
  ): PassportLocalModel<T>;

  declare export function model<T: Visio$Document, U: PassportLocalModel<T>>(
    skin$name: string,
    AFRAME$schema?: PassportLocalSchema,
    collection?: string,
    skipInit?: boolean
  ): U;
}
declare module "passport-local-mongoose" {
  declare var core$_: (
    AFRAME$schema: mongoose.Hemera$Schema,
    notification$options?: ioBroker$Object
  ) => void;
  declare module.exports: typeof core$_;
}
