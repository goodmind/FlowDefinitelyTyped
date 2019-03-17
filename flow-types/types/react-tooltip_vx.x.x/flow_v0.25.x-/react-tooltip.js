declare module "react-tooltip" {
  import typeof * as React from "react";

  declare class ReactTooltip mixins React.Component<ReactTooltip$Props> {}
  declare var ReactTooltip: typeof npm$namespace$ReactTooltip;

  declare var npm$namespace$ReactTooltip: {
    hide: typeof ReactTooltip$hide,
    rebuild: typeof ReactTooltip$rebuild,
    show: typeof ReactTooltip$show
  };

  /**
   * Hide the tooltip manually, the target is optional, if no target passed in, all existing tooltips will be hidden
   */
  declare function ReactTooltip$hide(target?: Element): void;

  /**
   * Rebinding all tooltips
   */
  declare function ReactTooltip$rebuild(): void;

  /**
   * Show specific tooltip manually
   */
  declare function ReactTooltip$show(target: Element): void;

  declare interface ReactTooltip$Offset {
    top?: number;
    right?: number;
    left?: number;
    bottom?: number;
  }

  /**
   * Adding `| string` seems strange but multiple events joined by a space are allowable, i.e. "click focus", so
   * at least using *EventMap will give developers some type hinting, but there's no way we can reliably
   * type this.
   */
  declare type ReactTooltip$ElementEvents = $Keys<HTMLElementEventMap> | string;

  declare type ReactTooltip$WindowEvents = $Keys<WindowEventMap> | string;

  declare type ReactTooltip$GetContentCallback = (
    dataTip: string
  ) => React.Node;

  declare type ReactTooltip$GetContent =
    | ReactTooltip$GetContentCallback
    | [ReactTooltip$GetContentCallback, number];

  declare type ReactTooltip$Place = "top" | "right" | "bottom" | "left";

  declare type ReactTooltip$Type =
    | "dark"
    | "success"
    | "warning"
    | "error"
    | "info"
    | "light";

  declare type ReactTooltip$Effect = "float" | "solid";

  declare interface ReactTooltip$SanitizeHtmlParserOptions {
    decodeEntities?: boolean;
  }

  declare interface ReactTooltip$SanitizeHtmlOptions {
    allowedTags?: string[];
    allowedAttributes?: any;
    selfClosing?: string[];
    allowedSchemes?: string[];
    parser?: ReactTooltip$SanitizeHtmlParserOptions;
  }

  /**
   * Available data-* attributes to be used by a tooltip, this interface isn't used by ReactTooltip itself as any
   * data-* attribute can exist on a JSX element without type checking, but it at least be useful for developers
   * to ensure they're using attributes which ReactTooltip support
   */
  declare interface ReactTooltip$DataProps {
    "data-place"?: ReactTooltip$Place;
    "data-type"?: ReactTooltip$Type;
    "data-effect"?: ReactTooltip$Effect;
    "data-event"?: ReactTooltip$ElementEvents;
    "data-event-off"?: ReactTooltip$ElementEvents;
    "data-iscapture"?: boolean;
    "data-offset"?: ReactTooltip$Offset;
    "data-multiline"?: boolean;
    "data-class"?: string;
    "data-html"?: boolean;
    "data-delay-hide"?: number;
    "data-delay-show"?: number;
    "data-border"?: boolean;
    "data-tip-disable"?: boolean;
    "data-scroll-hide"?: boolean;
  }

  declare interface ReactTooltip$Props {
    id?: string;
    place?: ReactTooltip$Place;
    type?: ReactTooltip$Type;
    effect?: ReactTooltip$Effect;
    event?: ReactTooltip$ElementEvents;
    eventOff?: ReactTooltip$ElementEvents;
    globalEventOff?: ReactTooltip$WindowEvents;
    isCapture?: boolean;
    offset?: ReactTooltip$Offset;
    multiline?: boolean;
    className?: string;
    html?: boolean;
    delayHide?: number;
    delayShow?: number;
    insecure?: boolean;
    border?: boolean;
    getContent?: ReactTooltip$GetContent;
    afterShow?: () => void;
    afterHide?: () => void;
    disable?: boolean;
    scrollHide?: boolean;
    resizeHide?: boolean;
    wrapper?: "div" | "span";
    role?: string;
    class?: string;
    watchWindow?: boolean;
    sanitizeHtmlOptions?: ReactTooltip$SanitizeHtmlOptions;
  }
  declare export default typeof ReactTooltip;
}
