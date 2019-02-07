declare module "wait-on" {
  declare module.exports: typeof waitOn;

  declare function waitOn(options: waitOn$waitOn$WaitOnOptions): Promise<void>;

  declare function waitOn(
    options: waitOn$waitOn$WaitOnOptions,
    cb: (err: any) => void
  ): void;

  declare interface waitOn$WaitOnOptions {
    /**
     * Array of string resources to wait for. prefix determines the type of resource with the default type of file:
     */
    resources: string[];

    /**
     * Initial delay in ms.
     * @default 0
     */
    delay?: number;

    /**
     * Poll resource interval in ms,
     * @default 250ms
     */
    interval?: number;

    /**
     * Flag which outputs to stdout, remaining resources waited on and when complete or any error occurs.
     */
    log?: boolean;

    /**
     * Flag to reverse operation so checks are for resources being NOT available.
     * @default false
     */
    reverse?: boolean;

    /**
     * Timeout in ms until it aborts with error.
     * @default Infinity
     */
    timeout?: number;

    /**
     * Tcp timeout in ms.
     * @default 300
     */
    tcpTimeout?: number;

    /**
     * Flag which outputs debug output.
     * @default false
     */
    verbose?: boolean;

    /**
     * Stabilization time in ms
     * Waits this amount of time for file sizes to stabilize or other resource availability to remain unchanged.
     * @default 750ms.
     */
    window?: number;

    /**
     * Https specific option.
     * see https:// github.com/request/request#readme for specific details
     */
    auth?: waitOn$WaitOnAuth;
    httpSignature?: waitOn$HttpSignature;
    strictSSL?: boolean;
    followAllRedirects?: boolean;
    followRedirect?: boolean;
    headers?: Record<string, any>;
  }

  declare interface waitOn$HttpSignature {
    keyId: string;
    key: string;
  }

  declare type waitOn$WaitOnAuth =
    | {
        username: string,
        password: string
      }
    | {
        /**
         * Alias of username
         */
        user: string,

        /**
         * Alias of password
         */
        pass: string
      };
}
