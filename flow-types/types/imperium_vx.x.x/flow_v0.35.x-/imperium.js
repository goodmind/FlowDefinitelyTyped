declare module 'imperium' {
        declare export type GetAcl = (req: express.Request) => Promise<boolean> | Promise<{[key: string]: any}>;
	declare export type Actions = string[] | string;
	declare export type Context = Array<"params" | "query" | "headers" | "body">;
	declare export interface RoleParams {
[key: string]: string
} 
	declare export var context: string[];
	declare export var roles: Roles;
	declare export function role(roleName: string, getAcl?: GetAcl): Role

	declare export function is(roleNames: string | string[]): Promise<express.RequestHandler>

	declare export function can(
actionS: string | string[] | Action | Action[]): Promise<express.RequestHandler>

	declare export function evaluateRouteActions(req: express.Request, action: Action[], context: Context): Actions

	declare export function evaluateRouteAction(req: express.Request, expr: string, key: string, context: Context): string

	declare export function evaluateUserActions(req: express.Request, roles: Role[]): Promise<Action[]>

	declare export function evaluateUserAction(
action: RoleParams,
context: {
[key: string]: string[]
}): {
[key: string]: string[]
}

	declare export class Imperium  {
constructor(): this;
context: string[];
roles: Roles;
role(roleName: string, getAcl?: GetAcl): Role;
is(roleNames: string | string[]): Promise<express.RequestHandler>;
can(
actionS: string | string[] | Action | Action[]): Promise<express.RequestHandler>;
evaluateRouteActions(req: express.Request, action: Action[], context: Context): Actions;
evaluateRouteAction(req: express.Request, expr: string, key: string, context: Context): string;
evaluateUserActions(req: express.Request, roles: Role[]): Promise<Action[]>;
evaluateUserAction(
action: RoleParams,
context: {
[key: string]: string[]
}): {
[key: string]: string[]
}
}
	declare export interface Roles {
[key: string]: RoleActions
} 
	declare export interface RoleActions {
actions: Action[],
getAcl?: GetAcl
} 
	declare export interface Action {
action: string,
[key: string]: string
} 
	declare export class Role  {
constructor(imperium: Imperium, roleName: string): this;
imperium: Imperium;
roleName: string;
role: RoleActions;
can(action: string, params: RoleParams): Role;
is(childRoleName: string, params: RoleParams): Role
}
	declare export class UnauthorizedError mixins Error {
constructor(message: string, status: number, context: any): this
}
    }
