declare module "pinkyswear" {
  declare interface PinkySwear$Promise {
    /**
     * Get the promise's current state; true if fulfilled, false if rejected, and undefined, otherwise.
     */
    (): boolean;

    /**
     * Fulfill or reject the promise.
     * @param fulfilled true to fulfill promise, false to reject
     * @param values Value(s) with which to fulfill or reject the promise
     * @returns PinkySwear.Promise
     */
    (fulfilled: boolean, ...values: any[]): PinkySwear$Promise;

    /**
     * onFulfilled is called when or if the promise is resolved.
     * onRejected is called when or if the promise is rejected.
     * @param onFulfilled Called when or if the promise is resolved.
     * @param onRejected Called when or if the promise is rejected.
     * @returns PinkySwear.Promise
     */
    then(
      onFulfilled?: (...values: any[]) => PinkySwear$Promise | void | any,
      onRejected?: (...values: any[]) => void
    ): PinkySwear$Promise;
  }

  declare type PinkySwear$GenericPromise<T> = {
    /**
     * Fulfill or reject the promise.
     * @param fulfilled true to fulfill promise, false to reject
     * @param value Value with which to fulfill or reject the promise
     */
    (fulfilled: boolean, value: T): boolean,

    /**
     * onFulfilled is called when or if the promise is resolved.
     * onRejected is called when or if the promise is rejected.
     * @param onFulfilled Called when or if the promise is resolved.
     * @param onRejected Called when or if the promise is rejected.
     * @returns PinkySwear.GenericPromise
     */
    then<G>(
      onFulfilled?: (value: T) => G,
      onRejected?: (value: T) => void
    ): PinkySwear$GenericPromise<G>,

    /**
     * onFulfilled is called when or if the promise is resolved.
     * onRejected is called when or if the promise is rejected.
     * @param onFulfilled Called when or if the promise is resolved.
     * @param onRejected Called when or if the promise is rejected.
     * @returns PinkySwear.GenericPromise
     */
    then<G>(
      onFulfilled?: (value: T) => PinkySwear$GenericPromise<G>,
      onRejected?: (value: T) => void
    ): PinkySwear$GenericPromise<G>,

    /**
     * onFulfilled is called when or if the promise is resolved.
     * onRejected is called when or if the promise is rejected.
     * @param onFulfilled Called when or if the promise is resolved.
     * @param onRejected Called when or if the promise is rejected.
     * @returns PinkySwear.Promise
     */
    then(
      onFulfilled?: (value: T) => void,
      onRejected?: (value: T) => void
    ): PinkySwear$Promise,

    /**
     * onFulfilled is called when or if the promise is resolved.
     * onRejected is called when or if the promise is rejected.
     * @param onFulfilled Called when or if the promise is resolved.
     * @param onRejected Called when or if the promise is rejected.
     * @returns PinkySwear.GenericPromise
     */
    then<G>(
      onFulfilled?: (value: T) => G,
      onRejected?: (error: TypeError) => void
    ): PinkySwear$GenericPromise<G>,

    /**
     * onFulfilled is called when or if the promise is resolved.
     * onRejected is called when or if the promise is rejected.
     * @param onFulfilled Called when or if the promise is resolved.
     * @param onRejected Called when or if the promise is rejected.
     * @returns PinkySwear.GenericPromise
     */
    then<G>(
      onFulfilled?: (value: T) => PinkySwear$GenericPromise<G>,
      onRejected?: (error: TypeError) => void
    ): PinkySwear$GenericPromise<G>,

    /**
     * onFulfilled is called when or if the promise is resolved.
     * onRejected is called when or if the promise is rejected.
     * @param onFulfilled Called when or if the promise is resolved.
     * @param onRejected Called when or if the promise is rejected.
     * @returns PinkySwear.Promise
     */
    then(
      onFulfilled?: (value: T) => void,
      onRejected?: (error: TypeError) => void
    ): PinkySwear$Promise
  } & PinkySwear$Promise;

  declare interface PinkySwearStatic {
    /**
     * Create a new generic promise in pending state that promises a value of a specific type and that also extends
     * the returned generic promise object as specified in an extend function.
     * @param extend Called when the promise is created and is ready to be extended.
     * @returns PinkySwear.GenericPromise
     */
    <T>(
      extend: (
        promise: PinkySwear$PinkySwear$GenericPromise<T>
      ) => PinkySwear$PinkySwear$GenericPromise<T>
    ): PinkySwear$PinkySwear$GenericPromise<T>;

    /**
     * Create a new generic promise in pending state that promises a value of a specific type.
     * @see PinkySwear.GenericPromise
     * @returns PinkySwear.GenericPromise
     */
    <T>(): PinkySwear$PinkySwear$GenericPromise<T>;

    /**
     * Create a new promise in pending state that promises a value of a specific type and that also extends the
     * returned promise object as specified in an extend function.
     * @param extend Called when the promise is created and is ready to be extended.
     * @returns PinkySwear.Promise
     */
    <T>(
      extend: (
        promise: PinkySwear$PinkySwear$Promise
      ) => PinkySwear$PinkySwear$Promise
    ): PinkySwear$PinkySwear$Promise;

    /**
     * Create a new promise in pending state that promises a value or set of values.
     * @see PinkySwear.Promise
     * @returns PinkySwear.Promise
     */
    (): PinkySwear$PinkySwear$Promise;
  }
  declare var pinkySwear: PinkySwearStatic;
}
