declare module "universal-analytics" {
  declare var npm$namespace$ua: {
    createFromSession: typeof ua$createFromSession,
    middleware: typeof ua$middleware,

    Visitor: typeof ua$Visitor
  };
  declare type ua$Callback = (error: Error | null, count: number) => void;

  declare interface ua$VisitorOptions {
    hostname?: string;
    path?: string;
    https?: boolean;
    enableBatching?: boolean;
    batchSize?: number;
    tid?: string;
    cid?: string;
    uid?: string;
    debug?: boolean;
    strictCidFormat?: boolean;
    requestOptions?: {
      [key: string]: any
    };
    headers?: {
      [key: string]: string
    };
  }

  declare type ua$MiddlewareOptions = {
    cookieName?: string
  } & VisitorOptions;

  declare interface ua$PageviewParams {
    dp?: string;
    dh?: string;
    dt?: string;
    dl?: string;
    [key: string]: any;
  }

  declare interface ua$ScreenviewParams {
    cd?: string;
    an?: string;
    av?: string;
    aid?: string;
    aiid?: string;
    [key: string]: any;
  }

  declare interface ua$EventParams {
    ec?: string;
    ea?: string;
    el?: string;
    ev?: string | number;
    p?: string;
    dp?: string;
    [key: string]: any;
  }

  declare interface ua$TransactionParams {
    ti?: string;
    tr?: string | number;
    ts?: string | number;
    tt?: string | number;
    ta?: string;
    p?: string;
    [key: string]: any;
  }

  declare interface ua$ItemParams {
    ip?: string | number;
    iq?: string | number;
    ic?: string;
    in?: string;
    iv?: string;
    p?: string;
    ti?: string;
    [key: string]: any;
  }

  declare interface ua$ExceptionParams {
    exd?: string;
    exf?: boolean;
    [key: string]: any;
  }

  declare interface ua$TimingParams {
    utc?: string;
    utv?: string;
    utt?: string | number;
    utl?: string;
    [key: string]: any;
  }

  declare interface ua$Session {
    cid?: string;
  }

  declare class ua$Visitor {
    constructor(accountID: ua$VisitorOptions | string): this;
    constructor(
      accountID: string,
      uuid: ua$VisitorOptions | string,
      context?: {
        [key: string]: any
      },
      persistentParams?: {
        [key: string]: any
      }
    ): this;
    debug(debug?: boolean): ua$Visitor;
    reset(): ua$Visitor;
    set(key: string | number, value: any): void;
    pageview(
      path: ua$PageviewParams | string,
      callback?: ua$Callback
    ): ua$Visitor;
    pageview(
      path: string,
      hostname: string,
      callback?: ua$Callback
    ): ua$Visitor;
    pageview(
      path: string,
      hostname: string,
      title: string,
      callback?: ua$Callback
    ): ua$Visitor;
    pageview(
      path: string,
      hostname: string,
      title: string,
      params: ua$PageviewParams,
      callback?: ua$Callback
    ): ua$Visitor;
    pv(path: ua$PageviewParams | string, callback?: ua$Callback): ua$Visitor;
    pv(path: string, hostname: string, callback?: ua$Callback): ua$Visitor;
    pv(
      path: string,
      hostname: string,
      title: string,
      callback?: ua$Callback
    ): ua$Visitor;
    pv(
      path: string,
      hostname: string,
      title: string,
      params: ua$PageviewParams,
      callback?: ua$Callback
    ): ua$Visitor;
    screenview(params: ua$ScreenviewParams, callback?: ua$Callback): ua$Visitor;
    screenview(
      screenName: string,
      appName: string,
      callback?: ua$Callback
    ): ua$Visitor;
    screenview(
      screenName: string,
      appName: string,
      appVersion: string,
      callback?: ua$Callback
    ): ua$Visitor;
    screenview(
      screenName: string,
      appName: string,
      appVersion: string,
      appId: string,
      callback?: ua$Callback
    ): ua$Visitor;
    screenview(
      screenName: string,
      appName: string,
      appVersion: string,
      appId: string,
      appInstallerId: string,
      callback?: ua$Callback
    ): ua$Visitor;
    screenview(
      screenName: string,
      appName: string,
      appVersion: string,
      appId: string,
      appInstallerId: string,
      params: ua$ScreenviewParams,
      callback?: ua$Callback
    ): ua$Visitor;
    event(params: ua$EventParams, callback?: ua$Callback): ua$Visitor;
    event(category: string, action: string, callback?: ua$Callback): ua$Visitor;
    event(
      category: string,
      action: string,
      label: string,
      callback?: ua$Callback
    ): ua$Visitor;
    event(
      category: string,
      action: string,
      label: string,
      value: string | number,
      callback?: ua$Callback
    ): ua$Visitor;
    event(
      category: string,
      action: string,
      label: string,
      value: string | number,
      params: ua$EventParams,
      callback?: ua$Callback
    ): ua$Visitor;
    e(params: ua$EventParams, callback?: ua$Callback): ua$Visitor;
    e(category: string, action: string, callback?: ua$Callback): ua$Visitor;
    e(
      category: string,
      action: string,
      label: string,
      callback?: ua$Callback
    ): ua$Visitor;
    e(
      category: string,
      action: string,
      label: string,
      value: string | number,
      callback?: ua$Callback
    ): ua$Visitor;
    e(
      category: string,
      action: string,
      label: string,
      value: string | number,
      params: ua$EventParams,
      callback?: ua$Callback
    ): ua$Visitor;
    transaction(
      id: ua$TransactionParams | string,
      callback?: ua$Callback
    ): ua$Visitor;
    transaction(
      id: string,
      revenue: string | number,
      callback?: ua$Callback
    ): ua$Visitor;
    transaction(
      id: string,
      revenue: string | number,
      shipping: string | number,
      callback?: ua$Callback
    ): ua$Visitor;
    transaction(
      id: string,
      revenue: string | number,
      shipping: string | number,
      tax: string | number,
      callback?: ua$Callback
    ): ua$Visitor;
    transaction(
      id: string,
      revenue: string | number,
      shipping: string | number,
      tax: string | number,
      affiliation: string,
      callback?: ua$Callback
    ): ua$Visitor;
    transaction(
      id: string,
      revenue: string | number,
      shipping: string | number,
      tax: string | number,
      affiliation: string,
      params: ua$TransactionParams,
      callback?: ua$Callback
    ): ua$Visitor;
    t(id: ua$TransactionParams | string, callback?: ua$Callback): ua$Visitor;
    t(id: string, revenue: string | number, callback?: ua$Callback): ua$Visitor;
    t(
      id: string,
      revenue: string | number,
      shipping: string | number,
      callback?: ua$Callback
    ): ua$Visitor;
    t(
      id: string,
      revenue: string | number,
      shipping: string | number,
      tax: string | number,
      callback?: ua$Callback
    ): ua$Visitor;
    t(
      id: string,
      revenue: string | number,
      shipping: string | number,
      tax: string | number,
      affiliation: string,
      callback?: ua$Callback
    ): ua$Visitor;
    t(
      id: string,
      revenue: string | number,
      shipping: string | number,
      tax: string | number,
      affiliation: string,
      params: ua$TransactionParams,
      callback?: ua$Callback
    ): ua$Visitor;
    item(
      price: ua$ItemParams | string | number,
      callback?: ua$Callback
    ): ua$Visitor;
    item(
      price: string | number,
      quantity: string | number,
      callback?: ua$Callback
    ): ua$Visitor;
    item(
      price: string | number,
      quantity: string | number,
      sku: string,
      callback?: ua$Callback
    ): ua$Visitor;
    item(
      price: string | number,
      quantity: string | number,
      sku: string,
      name: string,
      callback?: ua$Callback
    ): ua$Visitor;
    item(
      price: string | number,
      quantity: string | number,
      sku: string,
      name: string,
      variation: string,
      callback?: ua$Callback
    ): ua$Visitor;
    item(
      price: string | number,
      quantity: string | number,
      sku: string,
      name: string,
      variation: string,
      params: ua$ItemParams,
      callback?: ua$Callback
    ): ua$Visitor;
    i(
      price: ua$ItemParams | string | number,
      callback?: ua$Callback
    ): ua$Visitor;
    i(
      price: string | number,
      quantity: string | number,
      callback?: ua$Callback
    ): ua$Visitor;
    i(
      price: string | number,
      quantity: string | number,
      sku: string,
      callback?: ua$Callback
    ): ua$Visitor;
    i(
      price: string | number,
      quantity: string | number,
      sku: string,
      name: string,
      callback?: ua$Callback
    ): ua$Visitor;
    i(
      price: string | number,
      quantity: string | number,
      sku: string,
      name: string,
      variation: string,
      callback?: ua$Callback
    ): ua$Visitor;
    i(
      price: string | number,
      quantity: string | number,
      sku: string,
      name: string,
      variation: string,
      params: ua$ItemParams,
      callback?: ua$Callback
    ): ua$Visitor;
    exception(
      description: ua$ExceptionParams | string,
      callback?: ua$Callback
    ): ua$Visitor;
    exception(
      description: string,
      fatal: boolean,
      callback?: ua$Callback
    ): ua$Visitor;
    exception(
      description: string,
      fatal: boolean,
      params: ua$ExceptionParams,
      callback?: ua$Callback
    ): ua$Visitor;
    timing(
      category: ua$TimingParams | string,
      callback?: ua$Callback
    ): ua$Visitor;
    timing(
      category: string,
      variable: string,
      callback?: ua$Callback
    ): ua$Visitor;
    timing(
      category: string,
      variable: string,
      time: string | number,
      callback?: ua$Callback
    ): ua$Visitor;
    timing(
      category: string,
      variable: string,
      time: string | number,
      label: string,
      callback?: ua$Callback
    ): ua$Visitor;
    timing(
      category: string,
      variable: string,
      time: string | number,
      label: string,
      params: ua$TimingParams,
      callback?: ua$Callback
    ): ua$Visitor;
    send(fn?: (error: any, response: any, body: any) => void): void;
  }

  declare function ua$createFromSession(session?: ua$Session): ua$Visitor;

  declare function ua$middleware(
    tid: string,
    options?: ua$MiddlewareOptions
  ): (req: any, res: any, next: (err: any) => void) => void;

  declare function ua(accountID: ua$VisitorOptions | string): ua$Visitor;

  declare function ua(
    accountID: string,
    uuid: ua$VisitorOptions | string
  ): ua$Visitor;

  declare function ua(
    accountID: string,
    uuid: string,
    options: ua$VisitorOptions
  ): ua$Visitor;

  declare export default typeof ua;
}
