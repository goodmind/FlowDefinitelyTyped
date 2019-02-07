declare module "react-css-transition-replace" {
  import typeof * as React from "react";

  import typeof * as CSSTransitionGroup from "react-addons-css-transition-group";

  declare type CSSTransitionReplace$Props = {
    changeWidth?: boolean,
    overflowHidden?: boolean
  } & React.CSSTransitionGroupProps;

  declare var CSSTransitionReplace: CSSTransitionReplace;
  declare type CSSTransitionReplace = React.ComponentClass<CSSTransitionReplace$CSSTransitionReplace$Props>;
  declare module.exports: typeof CSSTransitionReplace;
}
