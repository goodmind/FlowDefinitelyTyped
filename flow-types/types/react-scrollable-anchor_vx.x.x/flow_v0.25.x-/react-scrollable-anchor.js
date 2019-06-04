declare module "react-scrollable-anchor" {
  import typeof * as React from "react";

  declare export interface ScrollableAnchorProps {
    id: string;
    children?: React.Node;
  }
  declare export interface ConfigureAnchorsOptions {
    offset?: number;
    scrollDuration?: number;
    keepLastAnchorHash?: boolean;
  }
  declare export default class ScrollableAnchor
    mixins React.Component<ScrollableAnchorProps> {}
  declare export function goToTop(): void;

  declare export function configureAnchors(
    options: ConfigureAnchorsOptions
  ): void;

  declare export function goToAnchor(
    anchorId: string,
    saveHashUpdate?: boolean
  ): void;

  declare export function removeHash(): void;
}
