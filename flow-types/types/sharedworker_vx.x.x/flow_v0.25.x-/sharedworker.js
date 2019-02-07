declare module "sharedworker" {
  declare type SharedWorker$AbstractWorker = {
    onerror: (ev: ErrorEvent) => any
  } & EventTarget;

  declare export type SharedWorker$SharedWorker = {
    /**
     * the value it was assigned by the object's constructor.
     * It represents the MessagePort for communicating with the shared worker.
     * @type {MessagePort}
     */
    port: MessagePort
  } & SharedWorker$AbstractWorker;

  declare export type SharedWorker$SharedWorkerGlobalScope = {
    onconnect: (event: MessageEvent) => void
  } & Worker;

  declare var SharedWorker$SharedWorker: {
    prototype: SharedWorker$SharedWorker.SharedWorker$SharedWorker,

    /**
     * *
     * @param {string} stringUrl Pathname to JavaScript file
     * @param {string} name Name of the worker to execute
     */
    new(
      stringUrl: string,
      name?: string
    ): SharedWorker$SharedWorker.SharedWorker$SharedWorker
  };
}
