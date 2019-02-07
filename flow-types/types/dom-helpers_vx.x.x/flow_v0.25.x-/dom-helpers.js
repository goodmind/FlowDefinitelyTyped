declare module "dom-helpers" {
  import type { default as events } from "./events";

  import type { default as query } from "./query";

  import typeof * as style from "./style";

  import typeof * as activeElement from "./activeElement";

  import typeof * as ownerDocument from "./ownerDocument";

  import typeof * as ownerWindow from "./ownerWindow";

  import typeof * as requestAnimationFrame from "./util/requestAnimationFrame";

  declare var _default: typeof events &
    typeof query & {
      style: typeof style,
      activeElement: typeof activeElement,
      ownerDocument: typeof ownerDocument,
      ownerWindow: typeof ownerWindow,
      requestAnimationFrame: typeof requestAnimationFrame
    };
  declare var _export: {
    style: typeof style,
    activeElement: typeof activeElement,
    ownerDocument: typeof ownerDocument,
    ownerWindow: typeof ownerWindow,
    requestAnimationFrame: typeof requestAnimationFrame,
    default: typeof _default
  };
  declare module.exports: typeof _export;
}
