import typeof * as angular from 'angular';
declare module 'angular' {
        
/**
 * Used as optional parameter provided on definitions of permissions and roles
 */
declare export interface permission$TransitionProperties {
fromState?: angular.ui.IState,
fromParams?: angular.ui.IStateParamsService,
toState?: angular.ui.IState,
toParams?: angular.ui.IStateParamsService,
options?: angular.ui.IStateOptions
} 

declare export interface permission$PermissionStore {

/**
 * Allows to define permission on application configuration
 * @method
 * @param {String} permissionName Name of defined permission
 * @param {Function} validationFunction Function used to validate if permission is valid
 */
definePermission(
permissionName: string,
validationFunction: permission$PermissionValidationFunction): void,

/**
 * Allows to define set of permissionNames with shared validation function on application configuration
 * @method
 * @throws {TypeError}
 * @param {Array} permissionNames Set of permission names
 * @param {Function} validationFunction Function used to validate if permission is valid
 */
defineManyPermissions(
permissionNames: string[],
validationFunction: permission$PermissionValidationFunction): void,

/**
 * Removes all permissions
 * @method
 */
clearStore(): void,

/**
 * Deletes permission
 * @method
 * @param {String} permissionName Name of defined permission
 */
removePermissionDefinition(permissionName: string): void,

/**
 * Checks if permission exists
 * @method
 * @param {String} permissionName Name of defined permission
 * @returns {Boolean}
 */
hasPermissionDefinition(permissionName: string): boolean,

/**
 * Returns permission by it's name
 * @method
 * @returns {permission$permission$Permission} Permissions definition object
 */
getPermissionDefinition(permissionName: string): permission$Permission,

/**
 * Returns all permissions
 * @method
 * @returns {Object} Permissions collection
 */
getStore(): {
[permissionName: string]: permission$Permission
}
} 

declare export interface permission$RoleStore {

/**
 * Allows to define role
 * @method
 * @param {String} roleName Name of defined role
 * @param {Array} permissions Set of permission names
 * @param {Function} validationFunction Function used to validate if permissions in role are valid
 */
defineRole(
roleName: string,
permissions: string[],
validationFunction: permission$RoleValidationFunction): void,

/**
 * Allows to define role
 * @method
 * @param {String} roleName Name of defined role
 * @param {Array} permissions Set of permission names
 */
defineRole(roleName: string, permissions: string[]): void,

/**
 * Checks if role is defined in store
 * @method
 * @param {String} roleName Name of role
 * @returns {Boolean}
 */
hasRoleDefinition(roleName: string): boolean,

/**
 * Returns role definition object by it's name
 * @method
 * @returns {permission$permission$Role} Role definition object
 */
getRoleDefinition(roleName: string): permission$Role,

/**
 * Removes all role definitions
 * @method
 */
clearStore(): void,

/**
 * Deletes role from store
 * @method
 * @param {String} roleName Name of defined permission
 */
removeRoleDefinition(roleName: string): void,

/**
 * Returns all role definitions
 * @method
 * @returns {Object} Defined roles collection
 */
getStore(): {
[roleName: string]: permission$Role
}
} 

declare export interface permission$Role {
roleName: string,
permissionNames: string[],
validationFunction?: permission$RoleValidationFunction,
validateRole: () => angular.IPromise<any>
} 

declare export interface permission$Permission {
permissionName: string,
validationFunction?: permission$PermissionValidationFunction,
validatePermission: () => angular.IPromise<any>
} 

declare export type permission$RoleValidationFunction = (
roleName?: string,
transitionProperties?: permission$TransitionProperties) => boolean | angular.IPromise<any>;

declare export type permission$PermissionValidationFunction = (
permissionName?: string,
transitionProperties?: permission$TransitionProperties) => boolean | angular.IPromise<any>;

declare export type permission$IPermissionState = {
data?: any | permission$DataWithPermissions
} & undefined.IState


declare export interface permission$DataWithPermissions {
permissions?: {
only?: (() => void) | string | string[] | angular.IPromise<any>,
except?: (() => void) | string | string[] | angular.IPromise<any>,
redirectTo: string | (() => string) | (() => permission$PermissionRedirectConfigation) | {
[index: string]: permission$PermissionRedirectConfigation
}
}
} 

declare export interface permission$PermissionRedirectConfigation {
state: string,
params?: {},
options?: angular.ui.IStateOptions
} 
    }
declare module 'angular-permission' {
        declare export var permission: string;
	declare export var ngPermission: string;
	declare export var uiPermission: string;
    }
