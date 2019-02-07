declare module "shallow-equals" {
  declare module.exports: typeof shallow_equals;

  declare function shallow_equals<A, B>(
    a?: A,
    b?: B,
    compare?: (objA: A, objB: B) => boolean
  ): boolean;
}
