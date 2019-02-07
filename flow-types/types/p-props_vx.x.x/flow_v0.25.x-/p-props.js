declare module "p-props" {
  declare module.exports: typeof pProps;

  declare function pProps<
    V,
    M: {
      [key: string]: PromiseLike<V> | V
    }
  >(
    input: M
  ): Promise<Record<$Keys<M>, V>>;

  declare function pProps<K, V>(
    input: Map<K, PromiseLike<V> | V>
  ): Promise<Map<K, V>>;
}
