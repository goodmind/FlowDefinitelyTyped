declare module "react-vertical-timeline-component" {
  import typeof * as React from "react";

  declare export interface VerticalTimelineProps {
    animate?: boolean;
    className?: string;
    layout?: "1-column" | "2-columns";
  }
  declare export interface VerticalTimelineElementProps {
    id?: string;
    className?: string;
    date?: string;
    iconOnClick?: () => void;
    iconStyle?: React.CSSProperties;
    icon?: React.Node;
    position?: string;
    style?: React.CSSProperties;
    visibilitySensorProps?: any;
  }
  declare export class VerticalTimeline
    mixins React.Component<VerticalTimelineProps> {}
  declare export class VerticalTimelineElement
    mixins React.Component<VerticalTimelineElementProps> {}
}
