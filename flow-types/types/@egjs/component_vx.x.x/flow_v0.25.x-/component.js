declare module "@egjs/component" {
  declare module.exports: typeof Component;

  declare class Component {
    constructor(options?: {
      [key: string]: any
    }): this;
    trigger(
      eventName: string,
      customEvent?: {
        [key: string]: any
      }
    ): boolean;
    hasOn(eventName: string): boolean;
    on(
      eventName: string,
      handlerToAttach: (event: {
        [key: string]: any
      }) => any
    ): Component;
    on(events: {
      [key: string]: (event: {
        [key: string]: any
      }) => any
    }): Component;
    off(
      eventName?: string,
      handlerToAttach?: (event: {
        [key: string]: any
      }) => any
    ): Component;
    once(events: {
      [key: string]: (event: {
        [key: string]: any
      }) => any
    }): Component;
    once(
      eventName: string,
      handlerToAttach: (event: {
        [key: string]: any
      }) => any
    ): Component;
    options: {
      [key: string]: any
    };
  }

  declare var npm$namespace$Component: {
    trigger: typeof Component$trigger,
    hasOn: typeof Component$hasOn,
    on: typeof Component$on,
    off: typeof Component$off,
    once: typeof Component$once,
    options: typeof Component$options
  };
  declare function Component$trigger(
    eventName: string,
    customEvent?: {
      [key: string]: any
    }
  ): boolean;

  declare function Component$hasOn(eventName: string): boolean;

  declare function Component$on(
    eventName: string,
    handlerToAttach: (event: {
      [key: string]: any
    }) => any
  ): Component;

  declare function Component$on(events: {
    [key: string]: (event: {
      [key: string]: any
    }) => any
  }): Component;

  declare function Component$off(
    eventName?: string,
    handlerToAttach?: (event: {
      [key: string]: any
    }) => any
  ): Component;

  declare function Component$once(events: {
    [key: string]: (event: {
      [key: string]: any
    }) => any
  }): Component;

  declare function Component$once(
    eventName: string,
    handlerToAttach: (event: {
      [key: string]: any
    }) => any
  ): Component;

  declare var Component$options: {
    [key: string]: any
  };
}
