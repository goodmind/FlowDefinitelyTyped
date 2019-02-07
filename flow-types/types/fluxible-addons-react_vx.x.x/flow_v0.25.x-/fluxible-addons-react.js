declare module "fluxible-addons-react" {
  import typeof * as React from "react";

  import type { ComponentContext } from "fluxible";

  /**
 * Registers change listeners and retrieves state from stores using the `getStateFromStores`
 * method
 * @param Component component to pass state as props to.
 * @param stores List of stores to listen for changes
 * @param getStateFromStores function that receives all stores and should return
the full state object. Receives `stores` hash and component `props` as arguments
 * @param customContextTypes additional `contextTypes` that could be accessed from your `getStateFromStores`
function
 * @returns React.Component
 */
  declare export function connectToStores(
    Component: typeof undefined,
    stores: Array<typeof BaseStore> | string[],
    getStateFromStores: (context: ComponentContext, props: any) => any,
    customContextTypes?: any
  ): typeof undefined;

  /**
   * Provides context prop to all children as React context
   * @param component to wrap
   * @param customContextTypes Custom contextTypes to add
   * @returns React.Component
   */
  declare export function provideContext(
    Component: typeof undefined,
    customContextTypes?: any
  ): typeof undefined;
}
