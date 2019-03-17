declare module "react-resize-detector" {
  import typeof * as React from "react";

  declare type ReactResizeDetectorProps = {
    /**
     * Function that will be invoked with width and height arguments
     */
    onResize?: (width: number, height: number) => void,

    /**
     * Trigger onResize on height change. Default: false
     */
    handleHeight?: boolean,

    /**
     * Trigger onResize on width change. Default: false
     */
    handleWidth?: boolean,

    /**
     * Do not trigger onResize when a component mounts. Default: false
     */
    skipOnMount?: boolean,

    /**
     * Id of the element we want to observe. If none provided, parentElement of the component will be used. Default: ""
     */
    resizableElementId?: string,

    /**
     * Possible values: throttle and debounce
     */
    refreshMode?: "throttle" | "debounce",

    /**
     * Makes sense only when refreshMode is set. Default: 1000.
     */
    refreshRate?: number,
    render?: (props: any) => React.Node
  } & React.Props<ReactResizeDetector>;

  declare class ReactResizeDetector
    mixins React.PureComponent<ReactResizeDetectorProps> {}
  declare export function withResizeDetector(
    WrappedComponent: React.Node,
    props?: ReactResizeDetectorProps
  ): React.Component<>;

  declare export default typeof ReactResizeDetector;
}
