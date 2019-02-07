declare module "react-motion-ui-pack" {
  import typeof * as React from "react";

  import typeof * as motion from "react-motion";

  declare interface Transition$TransitionProps {
    component?: string | boolean | React.ReactElement<any>;
    runOnMount?: boolean;
    appear?: motion.Style;
    enter?: motion.Style;
    leave?: motion.Style;
    onEnter?: (style: motion.PlainStyle) => void;
    onLeave?: (style: motion.Style) => void;
  }
  declare var Transition: React.ComponentClass<Transition$Transition$TransitionProps>;
  declare export default typeof Transition;
}
