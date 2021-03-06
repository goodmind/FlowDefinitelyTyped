declare module "precond" {
  declare export function checkArgument(
    value: any,
    message?: string,
    ...formatArgs: any[]
  ): void;

  declare export function checkState(
    value: any,
    message?: string,
    ...formatArgs: any[]
  ): void;

  declare export function checkIsDef(
    value: any,
    message?: string,
    ...formatArgs: any[]
  ): any;

  declare export function checkIsDefAndNotNull(
    value: any,
    message?: string,
    ...formatArgs: any[]
  ): any;

  declare export function checkIsString(
    value: any,
    message?: string,
    ...formatArgs: any[]
  ): any;

  declare export function checkIsArray(
    value: any,
    message?: string,
    ...formatArgs: any[]
  ): any;

  declare export function checkIsNumber(
    value: any,
    message?: string,
    ...formatArgs: any[]
  ): any;

  declare export function checkIsBoolean(
    value: any,
    message?: string,
    ...formatArgs: any[]
  ): any;

  declare export function checkIsFunction(
    value: any,
    message?: string,
    ...formatArgs: any[]
  ): any;

  declare export function checkIsObject(
    value: any,
    message?: string,
    ...formatArgs: any[]
  ): any;
}
