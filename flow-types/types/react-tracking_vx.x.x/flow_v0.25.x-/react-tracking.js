declare module "react-tracking" {
  import typeof * as React from "react";

  declare export interface TrackingProp {
    trackEvent(x: {}): any;

    /**
     * This method returns all of the contextual tracking data up until this point in the component hierarchy.
     */
    getTrackingData(): {};
  }
  declare type Falsy = false | null | void | "";
  declare interface Options<T> {
    /**
     * By default, data tracking objects are pushed to `window.dataLayer[]`. This is a good default if you use Google
     * Tag Manager. You can override this by passing in a dispatch function as a second parameter to the tracking
     * decorator `{ dispatch: fn() }` on some top-level component high up in your app (typically some root-level
     * component that wraps your entire app).
     */
    dispatch?: (data: T) => any;

    /**
     * To dispatch tracking data when a component mounts, you can pass in `{ dispatchOnMount: true }` as the second
     * parameter to `@track()`. This is useful for dispatching tracking data on "Page" components.
     *
     * If you pass in a function, the function will be called with all of the tracking data from the app's context when
     * the component mounts. The return value of this function will be dispatched in `componentDidMount()`. The object
     * returned from this function call will be merged with the context data and then dispatched. A use case for this
     * would be that you want to provide extra tracking data without adding it to the context.
     */
    dispatchOnMount?: boolean | ((contextData: T) => T);

    /**
     * When there's a need to implicitly dispatch an event with some data for every component, you can define an
     * `options.process` function. This function should be declared once, at some top-level component. It will get
     * called with each component's tracking data as the only argument. The returned object from this function will be
     * merged with all the tracking context data and dispatched in `componentDidMount()`. If a falsy value is returned
     * (`false`, `null`, `undefined`, ...), nothing will be dispatched.
     *
     * A common use case for this is to dispatch a `pageview` event for every component in the application that has a
     * `page` property on its `trackingData`.
     */
    process?: (ownTrackingData: T) => T | Falsy;
  }
  declare export type TrackingInfo<T, P, S> =
    | T
    | ((props: P, state: S, args: $ElementType<any, any>) => T);
  declare type ClassDecorator = <TFunction: Function>(
    target: TFunction
  ) => TFunction;
  declare type MethodDecorator = <T>(
    target: { [key: string]: any },
    propertyKey: string | Symbol,
    descriptor: TypedPropertyDescriptor<T>
  ) => TypedPropertyDescriptor<T>;
  declare type Decorator = ClassDecorator & MethodDecorator;

  /**
   * This is the type of the `track` function. It’s declared as an interface so that consumers can extend the typing and
   * specify defaults, such as a global analytics schema for the tracking-info.
   *
   * For examples of such extensions see: https://github.com/artsy/reaction/blob/master/src/utils/track.ts
   */
  declare export interface Track<T = any, P = any, S = any> {
    <K: $Keys<T>>(
      trackingInfo?: TrackingInfo<Pick<T, K>, P, S>,
      options?: Options<$Shape<T>>
    ): Decorator;
  }
  declare export var track: Track;
  declare export default typeof track;
}
