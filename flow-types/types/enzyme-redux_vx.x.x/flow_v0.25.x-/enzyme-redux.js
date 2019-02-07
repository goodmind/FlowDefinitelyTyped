declare module "enzyme-redux" {
  import type { ReactWrapper, ShallowWrapper } from "enzyme";

  import type { ReactElement } from "react";

  declare export function shallowWithStore<P>(
    Component: ReactElement<P>,
    store: any
  ): ShallowWrapper<P>;

  declare export function mountWithStore<P>(
    Component: ReactElement<P>,
    store: any
  ): ReactWrapper<P>;

  declare export function shallowWithState<P>(
    Component: ReactElement<P>,
    state: any
  ): ShallowWrapper<P>;

  declare export function mountWithState<P>(
    Component: ReactElement<P>,
    state: any
  ): ReactWrapper<P>;
}
