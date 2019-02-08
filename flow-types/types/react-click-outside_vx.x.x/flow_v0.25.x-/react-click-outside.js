declare module "react-click-outside" {
  import typeof * as React from "react";

  declare function enhanceWithClickOutside<P>(
    wrappedComponent: React$React$ComponentClass<P>
  ): React$React$ComponentClass<P>;

  declare module.exports: typeof enhanceWithClickOutside;
}
