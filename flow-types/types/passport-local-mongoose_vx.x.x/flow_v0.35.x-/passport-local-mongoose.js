declare module 'mongoose' {
        declare export interface AuthenticationResult {
user: any,
error: any
} 
	declare export type PassportLocalDocument = {
setPassword(password: string): Promise<PassportLocalDocument>,
setPassword(password: string, cb: (err: any, res: any) => void): void,
changePassword(oldPassword: string, newPassword: string): Promise<PassportLocalDocument>,
changePassword(
oldPassword: string,
newPassword: string,
cb: (err: any, res: any) => void): void,
authenticate(password: string): Promise<AuthenticationResult>,
authenticate(password: string, cb: (err: any, user: any, error: any) => void): void,
resetAttempts(): Promise<PassportLocalDocument>,
resetAttempts(cb: (err: any, res: any) => void): void
} & Document

	declare type PassportLocalModel<T: Document> = {
authenticate(): (username: string, password: string) => Promise<AuthenticationResult>,
authenticate(
): (
username: string,
password: string,
cb: (err: any, user: T | boolean, error: any) => void) => void,
serializeUser(): (user: PassportLocalModel<T>, cb: (err: any, id?: any) => void) => void,
deserializeUser(): (username: string, cb: (err: any, user?: any) => void) => void,
register(user: T, password: string): Promise<T>,
register(user: T, password: string, cb: (err: any, account: any) => void): void,
findByUsername(username: string, selectHashSaltFields: boolean): Query<T>,
findByUsername(
username: string,
selectHashSaltFields: boolean,
cb: (err: any, account: any) => void): any,
createStrategy(): passportLocal.Strategy
} & Model<T>

	declare export interface PassportLocalErrorMessages {
MissingPasswordError?: string,
AttemptTooSoonError?: string,
TooManyAttemptsError?: string,
NoSaltValueStoredError?: string,
IncorrectPasswordError?: string,
IncorrectUsernameError?: string,
MissingUsernameError?: string,
UserExistsError?: string
} 
	declare export interface PassportLocalOptions {
saltlen?: number,
iterations?: number,
keylen?: number,
encoding?: string,
digestAlgorithm?: string,
passwordValidator?: (password: string, cb: (err: any) => void) => void,
usernameField?: string,
usernameUnique?: boolean,
usernameQueryFields: Array<string>,
selectFields?: string,
populateFields?: string,
usernameLowerCase?: boolean,
hashField?: string,
saltField?: string,
limitAttempts?: boolean,
lastLoginField?: string,
attemptsField?: string,
interval?: number,
maxInterval?: number,
maxAttempts?: number,
errorMessages?: PassportLocalErrorMessages
} 
	declare export type PassportLocalSchema = {
plugin(
plugin: (schema: PassportLocalSchema, options?: PassportLocalOptions) => void,
options?: PassportLocalOptions): this,
plugin(plugin: (schema: Schema, options?: Object) => void, opts?: Object): this
} & Schema

	declare export function model<T: Document>(
name: string,
schema?: PassportLocalSchema,
collection?: string,
skipInit?: boolean): PassportLocalModel<T>

	declare export function model<T: Document, U: PassportLocalModel<T>>(
name: string,
schema?: PassportLocalSchema,
collection?: string,
skipInit?: boolean): U

    }
declare module 'passport-local-mongoose' {
        declare var _: (schema: mongoose.Schema, options?: Object) => void;
	declare module.exports: typeof _

    }
