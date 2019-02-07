declare module "react-panelgroup" {
  import typeof * as React from "react";

  /**
   * Interface used to define a number of options for a panel.
   */
  declare export interface PanelWidth {
    size?: number;
    minSize?: number;
    resize?: "fixed" | "dynamic" | "stretch";
    snap?: number[];
  }
  declare export interface PropTypes {
    spacing?: number;
    borderColor?: string;
    panelColor?: string;
    direction?: "row" | "column";
    panelWidths?: Array<PanelWidth | null>;
    onUpdate?: (data: PanelWidth) => void;
  }

  /**
   * React component that allows for the creation of resizable panels.
   */
  declare export default class PanelGroup mixins React.Component<PropTypes> {}
}
