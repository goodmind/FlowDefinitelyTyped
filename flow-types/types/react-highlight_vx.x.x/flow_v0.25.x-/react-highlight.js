declare module "react-highlight" {
  import typeof * as React from "react";

  /**
   * Props for a Highlight component.
   */
  declare export interface HighlightProps {
    /**
     * Language name to use as a class to signal type to highlight.js.
     */
    className: string;
  }

  /**
   * Visually prettifies child code with highlight.js.
   */
  declare var Highlight: React.ComponentClass<HighlightProps>;
  declare export default typeof Highlight;
}
