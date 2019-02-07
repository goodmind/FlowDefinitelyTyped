declare module "get-certain" {
  declare module.exports: typeof getCertain;

  declare function getCertain<TKey, TValue>(
    map: Map<TKey, TValue>,
    key: TKey,
    message?: string
  ): TValue;
}
