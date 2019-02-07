declare module "@ember/service" {
  import typeof EmberObject from "@ember/object";

  import typeof ComputedProperty from "@ember/object/computed";

  declare export default class Service mixins EmberObject {}

  /**
   * Creates a property that lazily looks up a service in the container. There
   * are no restrictions as to what objects a service can be injected into.
   */
  declare export function inject(): ComputedProperty<Service>;

  declare export function inject<K: $Keys<Registry>>(
    name: K
  ): ComputedProperty<$ElementType<Registry, K>>;

  declare interface Registry {}
}
