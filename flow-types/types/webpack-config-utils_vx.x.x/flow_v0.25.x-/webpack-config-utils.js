declare module "webpack-config-utils" {
  declare export function getIfUtils<E: EnvVars | string>(
    env: $ObjMapi<{ [k: E]: any }, <P>(P) => boolean | string> | E,
    vars?: Array<EnvVars | string>
  ): IfUtils;

  declare export function removeEmpty<T>(input: Array<T | void>): T[];

  declare export function removeEmpty<T>(
    input: $ObjMapi<T, <P>(P) => $ElementType<T, P>>
  ): NonEmptyObject<T>;

  declare export function propIf<E>(a: Falsy, value: any, alternate: E): E;

  declare export function propIf<I>(a: any, value: I, alternate: any): I;

  declare export function propIfNot<I>(a: Falsy, value: I, alternate: any): I;

  declare export function propIfNot<E>(a: any, value: any, alternate: E): E;

  declare export type Falsy = false | "" | "false" | void | null | 0;
  declare export type DefinedObjKeys<T> = $ElementType<
    $ObjMapi<T, <P>(P) => "There was Conditional Type, use $Call utility type">,
    $Keys<T>
  >;
  declare export type NonEmptyObject<
    T,
    P: DefinedObjKeys<T> = DefinedObjKeys<T>
  > = $ObjMapi<{ [k: P]: any }, <PP>(PP) => $ElementType<T, PP>>;
  declare export type EnvVars =
    | "production"
    | "prod"
    | "test"
    | "development"
    | "dev";
  declare export interface IfUtilsFn {
    <Y, N>(value: Y, alternate?: N): Y | N;
    (): boolean;
  }
  declare export interface IfUtils {
    ifDevelopment: IfUtilsFn;
    ifNotDevelopment: IfUtilsFn;
    ifDev: IfUtilsFn;
    ifNotDev: IfUtilsFn;
    ifProduction: IfUtilsFn;
    ifNotProduction: IfUtilsFn;
    ifProd: IfUtilsFn;
    ifNotProd: IfUtilsFn;
    ifTest: IfUtilsFn;
    ifNotTest: IfUtilsFn;
    [key: string]: IfUtilsFn;
  }
}
