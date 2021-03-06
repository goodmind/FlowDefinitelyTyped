declare module "tether-shepherd" {
  declare interface TetherShepherd$ShepherdStatic {
    on(eventName: string, handler: Function, context?: any): any;
    off(eventName: string, handler?: Function): any;
    once(eventName: string, handler: Function, context?: any): any;
    activeTour: TetherShepherd$IShepherdTour;
    Tour: TetherShepherd$IShepherdTour;
  }

  declare interface TetherShepherd$IShepherdTourOptions {
    steps?: TetherShepherd$IShepherdTourStep[];
    defaults?: TetherShepherd$IShepherdTourStepOptions;
  }

  declare interface TetherShepherd$IShepherdTour {
    new(
      options?: TetherShepherd$IShepherdTourOptions
    ): TetherShepherd$IShepherdTour;

    /**
     * Creates a new Step object with options, and returns the Tour object for convenient chaining when creating multiple steps. If you'd like you can also just pass an options hash which includes id as a key. If the options hash doesn't include an id, one will be generated. You can also pass an existing Step instance rather than options, but note that Shepherd does not support a Step being attached to multiple Tours.
     */
    addStep(
      id: string,
      options: TetherShepherd$IShepherdTourStepOptions
    ): TetherShepherd$IShepherdTour;
    addStep(
      id: string,
      options: TetherShepherd$IShepherdTourStep
    ): TetherShepherd$IShepherdTour;

    /**
     * Return a step with a specific id
     */
    getById(id: string): TetherShepherd$IShepherdTourStep;

    /**
     * Advance to the next step, in the order they were added
     */
    next(): void;

    /**
     * Show the previous step, in the order they were added
     */
    back(): void;

    /**
     * Trigger cancel on the current step, hiding it without advancing
     */
    cancel(): void;

    /**
     * Hide the current step
     */
    hide(): void;

    /**
     * Show the step specified by id (if it's a string), or index (if it's a number) provided. Defaults to the first step.
     */
    show(): void;
    show(id: number): void;
    show(id: string): void;

    /**
     * Show the first step and begin the tour
     */
    start(): void;

    /**
     * Returns the currently shown step
     */
    getCurrentStep(): TetherShepherd$IShepherdTourStep;

    /**
     * Bind an event
     */
    on(eventName: string, handler: Function, context?: any): any;

    /**
     * Unbind an event
     */
    off(eventName: string, handler?: Function): any;

    /**
     * Bind just the next instance of an event
     */
    once(eventName: string, handler: Function, context?: any): any;
  }

  declare interface TetherShepherd$IShepherdTourStep {
    /**
     * Show this step
     */
    show(): void;

    /**
     * Hide this step
     */
    hide(): void;

    /**
     * Hide this step and trigger the cancel event
     */
    cancel(): void;

    /**
     * Hide this step and trigger the complete event
     */
    complete(): void;

    /**
     * Scroll to this step's element
     */
    scrollTo(): void;

    /**
     * Returns true if the step is currently shown
     */
    isOpen(): boolean;

    /**
     * Remove the element
     */
    destroy(): void;

    /**
     * Bind an event
     */
    on(eventName: string, handler: Function, context?: any): any;

    /**
     * Unbind an event
     */
    off(eventName: string, handler?: Function): any;

    /**
     * Bind just the next instance of an event
     */
    once(eventName: string, handler: Function, context?: any): any;
  }

  declare interface TetherShepherd$IShepherdTourStepOptions {
    text?: any;
    title?: string;
    attachTo?: any;
    beforeShowPromise?: any;
    classes?: string;
    buttons?: TetherShepherd$IShepherdTourButton[];
    advanceOn?: any;
    showCancelLink?: boolean;
    scrollTo?: boolean;
    when?: any;
    showOn?: () => boolean;
    tetherOptions?: any;
  }

  declare interface TetherShepherd$IShepherdTourButton {
    text: string;
    classes?: string;
    action?: Function;
    events?: TetherShepherd$IShepherdTourButtonEventHash;
  }

  declare interface TetherShepherd$IShepherdTourButtonEventHash {
    [Key: string]: Function;
  }

  declare interface TetherShepherd$IShepherdTourAttachProperties {
    element: string;
    on: string;
  }
  declare var Shepherd: TetherShepherd$TetherShepherd$ShepherdStatic;
}
