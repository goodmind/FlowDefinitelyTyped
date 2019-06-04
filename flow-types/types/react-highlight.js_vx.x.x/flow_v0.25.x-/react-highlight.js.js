declare module "react-highlight.js" {
  import type { ComponentClass, Node } from "react";

  /**
   * Props for a Highlight component.
   */
  declare export interface HighlightProps {
    /**
     * Language name to use as a class to signal type to highlight.js.
     */
    language: string;

    /**
     * Content that will be highlighted
     */
    children?: Node;
  }

  /**
   * A lightweight React wrapper around the Highlight.js syntax highlighting library.
   */
  declare var Highlight: ComponentClass<HighlightProps>;
  declare export default typeof Highlight;
}
