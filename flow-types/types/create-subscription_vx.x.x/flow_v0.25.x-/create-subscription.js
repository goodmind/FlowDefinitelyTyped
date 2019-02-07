declare module "create-subscription" {
  import typeof * as React from "react";

  declare export type Unsubscribe = () => any;
  declare export interface SubscriptionConfig<S, T> {
    /**
     * Synchronously gets the value for the subscribed property.
     * Return undefined if the subscribable value is undefined,
     * Or does not support synchronous reading (e.g. native Promise).
     */
    getCurrentValue: (source: S) => T;

    /**
     * Set up a subscription for the subscribable value in props, and return an unsubscribe function.
     * Return false to indicate the property cannot be unsubscribed from (e.g. native Promises).
     * Due to the variety of change event types, subscribers should provide their own handlers.
     * Those handlers should not attempt to update state though;
     * They should call the callback() instead when a subscription changes.
     */
    subscribe: (source: S, callback: (newValue: T) => void) => Unsubscribe;
  }
  declare export interface SubscriptionProps<S, T> {
    children: (value: T) => React.ReactNode;
    source: S;
  }
  declare export type Subscription<S, T> = {} & React.ComponentClass<
    SubscriptionProps<S, T>
  >;

  declare export function createSubscription<S, T>(
    config: SubscriptionConfig<S, T>
  ): Subscription<S, T>;
}
