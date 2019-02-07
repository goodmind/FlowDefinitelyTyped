declare module "hyperscript" {
  declare interface HyperScript {
    /**
     * Creates an Element
     */
    <T: $Keys<ElementTagNameMap>>(
      tagName: T,
      attrs?: Object,
      ...children: any[]
    ): $ElementType<ElementTagNameMap, T>;
    <T: Element>(tagName: string, attrs?: Object, ...children: any[]): T;

    /**
     * Cleans up any event handlers created by this hyperscript context
     */
    cleanup(): void;

    /**
     * Creates a new hyperscript context
     */
    context(): HyperScript;
  }
  declare var h: HyperScript;
  declare module.exports: typeof h;
}
