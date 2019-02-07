declare module "@material/drawer" {
  import typeof MDCComponent from "material__base/component";

  import type { MDCDismissibleDrawerFoundation } from "./dismissible/foundation";

  import type { MDCModalDrawerFoundation } from "./modal/foundation";

  import type { MDCDrawerAdapter } from "./adapter";

  import type { MDCList, MDCListFoundation } from "material__list/index";

  import type { strings } from "./constants";

  import typeof * as util from "./util";

  import type createFocusTrap, { FocusTrap } from "./focus-trap";

  declare export class MDCDrawer
    mixins MDCComponent<
        MDCDrawer,
        MDCDismissibleDrawerFoundation | MDCModalDrawerFoundation
      > {
    constructor(...args: any[]): this;
    static attachTo(root: Element): MDCDrawer;

    /**
     * Returns true if drawer is in the open position.
     */
    open: boolean;
    initialize(focusTrapFactory: FocusTrap, listFactory: MDCList): void;
    initialSyncWithDOM(): void;
    destroy(): void;
    getDefaultFoundation():
      | MDCDismissibleDrawerFoundation
      | MDCModalDrawerFoundation;
  }
  declare export {
    MDCDismissibleDrawerFoundation,
    MDCModalDrawerFoundation,
    util
  };
}
