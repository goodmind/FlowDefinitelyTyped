declare module "xsockets" {
  declare var npm$namespace$XSockets: {
    WebSocket: typeof XSockets$WebSocket,
    Events: typeof npm$namespace$XSockets$Events
  };
  declare export class XSockets$WebSocket {
    id: string;
    constructor(url: string, subprotocol?: string, settings?: any): this;
    on(
      event: string,
      handler: (data: any) => void,
      confirmation?: (arg: XSockets$ConfirmationArgument) => void
    ): void;
    one(
      event: string,
      handler: (data: any) => void,
      confirmation?: (arg: XSockets$ConfirmationArgument) => void
    ): void;
    many(
      event: string,
      times: number,
      handler: (data: any) => void,
      confirmation?: (arg: XSockets$ConfirmationArgument) => void
    ): void;
    unbind(event: string): void;
    publish(topic: string, data: any): void;
  }

  declare export interface XSockets$ConfirmationArgument {
    event: string;
  }

  declare var npm$namespace$XSockets$Events: {
    close: typeof XSockets$Events$close,
    onBlob: typeof XSockets$Events$onBlob,
    onError: typeof XSockets$Events$onError,
    open: typeof XSockets$Events$open,

    bindings: typeof npm$namespace$XSockets$Events$bindings,
    pubSub: typeof npm$namespace$XSockets$Events$pubSub,
    storage: typeof npm$namespace$XSockets$Events$storage
  };
  declare export var XSockets$Events$close: string;

  declare export var XSockets$Events$onBlob: string;

  declare export var XSockets$Events$onError: string;

  declare var npm$namespace$XSockets$Events$bindings: {
    completed: typeof XSockets$Events$bindings$completed
  };
  declare export var XSockets$Events$bindings$completed: string;

  declare export var XSockets$Events$open: string;

  declare var npm$namespace$XSockets$Events$pubSub: {
    subscribe: typeof XSockets$Events$pubSub$subscribe,
    unsubscribe: typeof XSockets$Events$pubSub$unsubscribe
  };
  declare export var XSockets$Events$pubSub$subscribe: string;

  declare export var XSockets$Events$pubSub$unsubscribe: string;

  declare var npm$namespace$XSockets$Events$storage: {
    get: typeof XSockets$Events$storage$get,
    getAll: typeof XSockets$Events$storage$getAll,
    remove: typeof XSockets$Events$storage$remove,
    set: typeof XSockets$Events$storage$set
  };
  declare export var XSockets$Events$storage$get: string;

  declare export var XSockets$Events$storage$getAll: string;

  declare export var XSockets$Events$storage$remove: string;

  declare export var XSockets$Events$storage$set: string;
}
