declare module "svg-injector" {
  declare interface SVGInjector$SVGInjector {
    /**
     * Replace the given elements with their full inline SVG DOM elements.
     * @param elements Array of or single DOM element.
     * @param options Injector options.
     * @param done Callback that receives the injected element count as parameter.
     */
    (
      elements: Node | NodeList | Array<Node>,
      options?: SVGInjector$SVGInjectorOptions,
      done?: (elementCount: number) => void
    ): void;
  }

  declare interface SVGInjector$SVGInjectorOptions {
    /**
     * Whether to run scripts blocks found in the SVG.
     *
     * Possible values:
     * 'always' — Run scripts every time.
     * 'once' — Only run scripts once for each SVG.
     * 'never' — Ignore scripts (default)
     */
    evalScripts?: string;

    /**
     * Location of fallback pngs, if desired.
     */
    pngFallback?: string;

    /**
     * Callback to run during each SVG injection. The SVG element is passed if
     * the injection was successful.
     */
    each?: (svg: SVGElement | string) => void;
  }
  declare var SVGInjector$SVGInjector: SVGInjector$SVGInjector.SVGInjector$SVGInjector;
  declare module.exports: typeof SVGInjector$SVGInjector;
}
