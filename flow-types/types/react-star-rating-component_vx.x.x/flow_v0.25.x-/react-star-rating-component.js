declare module "react-star-rating-component" {
  import typeof * as React from "react";

  declare interface StarRatingComponentProps {
    /**
     * name of the radio input
     */
    name: string;

    /**
     * the value of the star rating to display. i.e. the number of filled stars
     */
    value: number;

    /**
     * number of icons in rating, default `5`
     */
    starCount?: number;
    onStarClick?: (nextValue: number, prevValue: number, name: string) => void;
    onStarHover?: (nextValue: number, prevValue: number, name: string) => void;
    onStarHoverOut?: (
      nextValue: number,
      prevValue: number,
      name: string
    ) => void;

    /**
     * render method for the full-star icon
     */
    renderStarIcon?: (
      nextValue: number,
      prevValue: number,
      name: string
    ) => React.Node | string;

    /**
     * render method for the half-star icon
     */
    renderStarIconHalf?: (
      nextValue: number,
      prevValue: number,
      name: string
    ) => React.Node | string;

    /**
     * color of selected icons
     */
    starColor?: string;

    /**
     * color of non-selected icons
     */
    emptyStarColor?: string;

    /**
     * is component available for editing, default `true`
     */
    editing?: boolean;
  }
  declare class StarRatingComponent
    mixins React.Component<StarRatingComponentProps> {}
  declare export default typeof StarRatingComponent;
}
