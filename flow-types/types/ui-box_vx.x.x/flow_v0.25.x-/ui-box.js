declare module "ui-box" {
  import type { Component, ComponentClass, Node } from "react";

  import typeof * as CSS from "csstype";

  /**
   * Placeholder type for UI box props
   */
  declare type UIBoxProp = string | number | boolean | null | void;

  /**
   * A prop defining which
   */
  declare type UIBoxIsProp = string | Node;
  declare type CSSProps = CSS.StandardProperties;
  declare export interface BoxProps {
    /**
     * Callback that gets passed a ref to inner DOM node (or component if the is prop is set to a
     * React component type).
     */
    innerRef?: (node: Node) => any;

    /**
     * Lets you change the underlying element type.
     * You can pass either a string to change the DOM element type, or a React component type to
     * inherit another component. The component just needs to accept a className prop to work.
     * A good example is inheriting the react-router Link component
     */
    is?: UIBoxIsProp;

    /**
     * The className prop you know and love. Internally it gets enhanced with additional class
     * names for the CSS properties you specify.
     */
    className?: string;

    /**
     * Set to border - box by default.
     */
    boxSizing?: UIBoxProp;

    /**
     * Sets marginLeft and marginRight to the same value
     */
    marginX?: UIBoxProp;

    /**
     * Sets marginTop and marginBottom to the same value
     */
    marginY?: UIBoxProp;

    /**
     * Sets paddingLeft and paddingRight to the same value
     */
    paddingX?: UIBoxProp;

    /**
     * Sets paddingTop and paddingBottom to the same value
     */
    paddingY?: UIBoxProp;

    /**
     * Utility property for easily adding clearfix styles to the element.
     */
    clearfix?: boolean;
    [key: string]: any;
  }
  declare export type Box = Component<BoxProps | CSSProps>;
  declare export var Box: ComponentClass<BoxProps | CSSProps>;
  declare export default typeof Box;

  declare type CacheEntry = $ReadOnlyArray<[string, string]>;

  /**
   * Returns a { cache, styles } object which contains the cache entries and rendered styles
   * for server rendering. The styles can be output in a <style> tag or an external stylesheet (however you want).
   * The cache should be passed to hydrate() on the client-side before mounting the app.
   * Also useful for doing snapshot unit testing (make sure to call clearStyles() after each test though).
   */
  declare export function extractStyles(): {
    cache: $ReadOnlyArray<CacheEntry>,
    styles: string
  };

  /**
   * Hydrates the cache using the cache value returned from extractStyles().
   * This is used to prevent needing to recalculate all the class names and re-render
   * all the styles on page load when server rendering.
   */
  declare export function hydrate(cache: $ReadOnlyArray<CacheEntry>): void;

  /**
   * Clears the cache and removes the rendered styles.
   * Mainly useful for resetting the global state when using extractStyles() in unit tests.
   */
  declare export function clearStyles(): void;

  /**
   * Utility function for filtering out props based on an array of keys.
   * Returns an { matchedProps, remainingProps } object.
   */
  declare export function splitProps(
    props: { [key: string]: any },
    keys: $ReadOnlyArray<string>
  ): {
    matchedProps: { [key: string]: any },
    remainingProps: { [key: string]: any }
  };
}
