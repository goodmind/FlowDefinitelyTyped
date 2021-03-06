declare module "observe-js" {
  declare var npm$namespace$observejs: {
    PathObserver: typeof observejs$PathObserver,
    ArrayObserver: typeof observejs$ArrayObserver,
    ObjectObserver: typeof observejs$ObjectObserver,
    CompoundObserver: typeof observejs$CompoundObserver,
    ObserverTransform: typeof observejs$ObserverTransform
  };
  declare interface observejs$Observable {
    /**
     * Begins observation.
     * @param onChange the function that gets invoked if a change is detected
     * @param the target of observation
     */
    open(onChange: (newValue: any, oldValue: any) => any, receiver?: any): void;

    /**
     * Report any changes now (does nothing if there are no changes to report).
     */
    deliver(): void;

    /**
     * If there are changes to report, ignore them. Returns the current value of the observation.
     */
    discardChanges(): void;

    /**
     * Ends observation. Frees resources and drops references to observed objects.
     */
    close(): void;
  }

  declare interface observejs$PathObserver_static {
    /**
     * Constructor
     * @param receiver the target for observation
     * @param path specifies the paht to observe. If path === '' the receiver itself gets observed.
     * @param defaultValue the defaultValue
     */
    new(
      receiver: any,
      path: string,
      defaultValue?: any
    ): observejs$PathObserver_instance;
  }

  declare type observejs$PathObserver_instance = {
    /**
     * sets the observed value without notifying about the change.
     * @param value the value to set
     */
    setValue(value: any): void
  } & Observable;

  /**
   * Observes a "value-at-a-path" from a given object:
   */
  declare var observejs$PathObserver: observejs$PathObserver_static;

  declare interface observejs$splice {
    /**
     * the index position that the change occured
     */
    index: number;

    /**
     * an array of values representing the sequence of removed elements
     */
    removed: Array<any>;

    /**
     * the number of element which were inserted
     */
    addedCount: number;
  }

  declare interface observejs$ArrayObserver_static {
    /**
     * Constructor
     * @param receiver the target for observation
     */
    new(receiver: Array<any>): observejs$ArrayObserver_instance;

    /**
     * transforms a copy of an old state of an array into a copy of its current state.
     * @param previous array of old state
     * @param current array of current state
     * @param splices splices to apply
     */
    applySplices(
      previous: Array<any>,
      current: Array<any>,
      splices: Array<observejs$splice>
    ): void;
  }

  declare type observejs$ArrayObserver_instance = {
    open(
      onChange: (
        splices: Array<observejs$splice>,
        oldSplices: Array<observejs$splice>
      ) => any
    ): void
  } & Observable;

  /**
   * ArrayObserver observes the index-positions of an Array and reports changes as the minimal set of "splices" which would have had the same effect.
   */
  declare var observejs$ArrayObserver: observejs$ArrayObserver_static;

  declare interface observejs$Properties {
    [key: string]: any;
  }

  declare interface observejs$ObjectObserver_static {
    /**
     * Constructor
     * @param receiver the target for observation
     */
    new(receiver: any): observejs$ObjectObserver_instance;
  }

  declare type observejs$ObjectObserver_instance = {
    open(
      onChange: (
        added: observejs$Properties,
        removed: observejs$Properties,
        changed: observejs$Properties,
        getOldValueFn: (property: string) => any
      ) => any
    ): void
  } & Observable;

  /**
   * Observes the set of own-properties of an object and their values
   */
  declare var observejs$ObjectObserver: observejs$ObjectObserver_static;

  declare interface observejs$CompoundObserver_static {
    /**
     * Constructor
     */
    new(): observejs$CompoundObserver_instance;
  }

  declare type observejs$CompoundObserver_instance = {
    open(onChange: (newValues: Array<any>, oldValue: Array<any>) => any): void,

    /**
     * Adds the receivers property at the specified path to the list of observables.
     * @param receiver the target for observation
     * @param path specifies the paht to observe. If path === '' the receiver itself gets observed.
     */
    addPath(receiver: any, path: string): void,

    /**
     * Adds an Observer to the list of observables.
     */
    addObserver(observer: observejs$Observable): void
  } & Observable;

  /**
   * CompoundObserver allows simultaneous observation of multiple paths and/or Observables.
   */
  declare var observejs$CompoundObserver: observejs$CompoundObserver_static;

  declare interface observejs$ObserverTransform_static {
    /**
     * Constructor
     * @param observer the observer to transform
     * @param getValue function that proxys getting a value
     * @param setValue function that proxys setting a value
     */
    new(
      observer: observejs$Observable,
      getValue: (value: any) => any,
      setValue: (value: any) => any
    ): observejs$ObserverTransform_instance;

    /**
     * Constructor
     * @param observer the observer to transform
     * @param valueFn function that gets invoked with all observed values. May return a single new value.
     */
    new(
      observer: observejs$Observable,
      valueFn: (values: Array<any>) => any
    ): observejs$ObserverTransform_instance;
  }

  declare type observejs$ObserverTransform_instance = {
    /**
     * sets the observed value without notifying about the change.
     * @param value the value to set
     */
    setValue(value: any): void
  } & Observable;

  /**
   * CompoundObserver allows simultaneous observation of multiple paths and/or Observables.
   */
  declare var observejs$ObserverTransform: observejs$ObserverTransform_static;

  declare interface observejs$Path {
    /**
     * Returns the current value of the path from the provided object. If eval() is available,
     *  a compiled getter will be used for better performance. Like PathObserver above, undefined
     *  is returned unless you provide an overriding defaultValue.
     */
    getValueFrom(object: any, defaultValue: any): any;

    /**
     * Attempts to set the value of the path from the provided object. Returns true IFF the path
     *  was reachable and set.
     */
    getValueFrom(object: any, newValue: any): any;
  }
  declare var observejs$PathObserver: typeof observejs$PathObserver;
  declare var observejs$ArrayObserver: typeof observejs$ArrayObserver;
  declare var observejs$ObjectObserver: typeof observejs$ObjectObserver;
  declare var observejs$CompoundObserver: typeof observejs$CompoundObserver;
  declare var observejs$ObserverTransform: typeof observejs$ObserverTransform;
  declare var observejs$Path: observejs$Path;
  declare export {
    PathObserver,
    ArrayObserver,
    ObjectObserver,
    CompoundObserver,
    ObserverTransform,
    Path
  };
}
