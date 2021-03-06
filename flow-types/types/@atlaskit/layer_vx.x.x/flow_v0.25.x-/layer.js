declare module "@atlaskit/layer" {
  import type { Component, Node } from "react";

  declare export default class Layer mixins Component<Props> {}
  declare export interface Props {
    /**
     * Sets whether the content auto flip when it reaches the border set it as true for default flip
     * or set the custom flip positions
     */
    autoFlip?: boolean | FlipPositionType | FlipPositionType[];

    /**
     * Element to act as a boundary for the Layer. The Layer will not sit outside this element if it
     * can help it. If, through it's normal positoning, it would end up outside the boundary the
     * layer will flip positions if the autoPosition prop is set.
     */
    boundariesElement?: BoundariesElementType;

    /**
     * Target to which layer is attached
     */
    children?: Node;

    /**
     * HTML content to display in the layer. Will be aligned to the target according to the position prop.
     */
    content?: Node;

    /**
     * String representing the offsets from the target element in the format "[x-offset][y-offset]",
     * measured in pixels.
     */
    offset?: string;

    /**
     * Callback that is used to know when the flipped state of Layer changes. This occurs when placing a
     * Layered element in the requested position would cause Layer to be rendered outside of the
     * boundariesElement (usually viewport).
     */
    onFlippedChange?: (
      flipped: boolean,
      actualPosition: CSSPositionType,
      originalPosition: CSSPositionType
    ) => void;

    /**
     * Position of a layer relative to its target. The position attribute takes two positional arguments in
     * the format position="edge edge-position", where edge specifies what edge to align the layer to, and
     * edge-position specifies where on that edge the layer should appear.
     */
    position?: PositionType;

    /**
     * z-index for the layer component
     */
    zIndex?: number;

    /**
     * Lock scrolling behind the layer
     */
    lockScroll?: boolean;
  }
  declare export type FlipPositionType = "top" | "right" | "bottom" | "left";
  declare export type PositionType =
    | "top left"
    | "top center"
    | "top right"
    | "right top"
    | "right middle"
    | "right bottom"
    | "bottom left"
    | "bottom center"
    | "bottom right"
    | "left top"
    | "left middle"
    | "left bottom";
  declare export type BoundariesElementType =
    | "viewport"
    | "window"
    | "scrollParent";
  declare export type CSSPositionType = "absolute" | "fixed";
}
