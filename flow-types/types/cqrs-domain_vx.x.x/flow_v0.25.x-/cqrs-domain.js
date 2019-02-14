declare module "cqrs-domain" {
  declare var npm$namespace$Domain: {
    defineContext: typeof Domain$defineContext,
    defineAggregate: typeof Domain$defineAggregate,
    extendValidator: typeof Domain$extendValidator,
    definePreLoadCondition: typeof Domain$definePreLoadCondition,
    definePreCondition: typeof Domain$definePreCondition,
    defineCommand: typeof Domain$defineCommand,
    defineEvent: typeof Domain$defineEvent,
    defineBusinessRule: typeof Domain$defineBusinessRule,
    defineCommandHandler: typeof Domain$defineCommandHandler
  };
  declare interface Domain$AggregateModel {
    id: string;
    attributes: any;
    uncommittedEvents: any[];
    apply(event: any, data?: any, version?: number): void;

    /**
     * Sets attributes for the aggregate.
     * @example :
     * aggregate.set('firstname', 'Jack');
     * // or
     * aggregate.set({
     *   firstname: 'Jack',
     *   lastname: 'X-Man'
     * });
     */
    set(attribute: any, value?: any): void;

    /**
     * Gets an attribute of the vm.
     * @param attr The attribute name.
     * @return The result value.
     * @example :
     * aggregate.get('firstname'); // returns 'Jack'
     */
    get(attr: string): any;

    /**
     * Returns `true` if the attribute contains a value that is not null
     * or undefined.
     * @param attr The attribute name.
     * @return The result value.
     * @example :
     * aggregate.has('firstname'); // returns true or false
     */
    has(attr: string): boolean;

    /**
     * Resets the attributes for the aggregate.
     */
    reset(data: any): void;

    /**
     * Marks this aggregate as destroyed.
     */
    destroy(): void;

    /**
     * Returns true if this aggregate is destroyed.
     */
    isDestroyed(): boolean;

    /**
     * Sets the revision for this aggregate.
     * @param streamInfo The stream info.
     * @param rev The revision number.
     */
    setRevision(streamInfo: any, rev: number): void;

    /**
     * Returns the revision of this aggregate.
     * @param streamInfo The stream info.
     */
    getRevision(streamInfo: any): number;

    /**
     * Returns all uncommitted events.
     */
    getUncommittedEvents(): any[];

    /**
     * Adds/Saves an uncommitted event.
     * @param evt The event object.
     */
    addUncommittedEvent(evt: any): void;

    /**
     * Clears the internal uncomitted event list.
     */
    clearUncommittedEvents(): void;

    /**
     * The toJSON function will be called when JSON.stringify().
     * @return A clean Javascript object containing all attributes.
     */
    toJSON(): any;
  }

  declare interface Domain$Command {
    id: string;
  }

  declare interface Domain$DefineContextOptions {
    /**
     * optional, default is the directory name
     */
    name?: string;
  }

  declare function Domain$defineContext(
    options: Domain$DefineAggregateOptions
  ): void;

  declare interface Domain$DefineAggregateOptions {
    /**
     * optional, default is last part of path name
     */
    name?: string;

    /**
     * optional, default 0
     */
    version?: number;

    /**
     * optional, default ''
     */
    defaultCommandPayload?: string;

    /**
     * optional, default ''
     */
    defaultEventPayload?: string;

    /**
     * optional, default ''
     */
    defaultPreConditionPayload?: string;

    /**
     * optional, default false
     * by skipping the history, only the last event will be loaded and defaultly not applyed (just to ensure the revision number increment)
     */
    skipHistory?: boolean;

    /**
     * optional, default false
     * only optionally needed when skipHistory is set to true, only the last event will be loaded and applyed
     */
    applyLastEvent?: boolean;

    /**
     * optional, default false
     * will publish the events but will not commit them to the eventstore
     */
    disablePersistence?: boolean;
  }

  /**
   * @param loadingTime is the loading time in ms of the eventstore data
   * @param events are all loaded events in an array
   * @param aggregateData represents the aggregateData after applying the resulting events
   */
  declare type Domain$defineSnapshotNeedHandler = (
    loadingTime: number,
    events: any[],
    aggregateData: any
  ) => boolean;

  declare interface Domain$AggregateVersion {
    version: number;
  }

  declare interface Domain$DefineAggregateResult {
    /**
     * optionally, define snapshot need algorithm...
     */
    defineSnapshotNeed(
      cb: Domain$defineSnapshotNeedHandler
    ): Domain$DefineAggregateResult;

    /**
     * optionally, define if snapshot should be ignored
     * if true, the whole event stream will be loaded
     */
    defineIgnoreSnapshot(
      version: Domain$AggregateVersion,
      cb?: ((data: any) => boolean) | boolean
    ): Domain$DefineAggregateResult;

    /**
     * optionally, define conversion algorithm for older snapshots
     * always convert directly to newest version...
     * when loaded a snapshot and it's an older snapshot, a new snapshot with same revision but with newer aggregate version will be created
     */
    defineSnapshotConversion(
      version: Domain$AggregateVersion,
      cb: (data: any, aggregate: Domain$AggregateModel) => void
    ): Domain$DefineAggregateResult;

    /**
     * optionally, define idGenerator function for new aggregate ids
     */
    defineAggregateIdGenerator(
      cb: (() => string) | ((callback: Domain$generateIdCallback) => string)
    ): Domain$DefineAggregateResult;

    /**
     * optionally, define idGenerator function for new aggregate ids that are command aware
     * if you define it that way, the normal defineAggregateIdGenerator function will be replaced
     */
    defineCommandAwareAggregateIdGenerator(
      cb: (cmd: Domain$Command, callback?: Domain$generateIdCallback) => string
    ): Domain$DefineAggregateResult;
  }

  declare function Domain$defineAggregate(
    options: Domain$DefineAggregateOptions,
    initializationData?: any
  ): Domain$DefineAggregateResult;

  declare function Domain$extendValidator(cb: (validator: any) => void): void;

  declare interface Domain$DefinePreLoadConditionOptions {
    /**
     * the command name
     * optional, default is file name without extension,
     * if name is '' it will handle all commands that matches the appropriate aggregate
     * if name is an array of strings it will handle all commands that matches the appropriate name
     */
    name?: string;

    /**
     * optional, default 0
     */
    version?: number;

    /**
     * optional, if not defined it will use what is defined as default in aggregate or pass the whole command
     */
    payload?: string;

    /**
     * optional
     */
    description?: string;

    /**
     * optional, default Infinity, all pre-conditions will be sorted by this value
     */
    priority?: number;
  }

  /**
   * @param data is the command data
   * @param callback is optional, if not defined as function argument you can throw errors or return errors here (sync way)
   */
  declare type Domain$preLoadConditionHandler = (
    data: any,
    callback?: (err: string | Error) => string | Error
  ) => void | string | Error;

  declare function Domain$definePreLoadCondition(
    options: Domain$DefinePreLoadConditionOptions,
    handler: Domain$preLoadConditionHandler
  ): void;

  declare interface Domain$DefinePreConditionOptions {
    /**
     * the command name
     * optional, default is file name without extension,
     * if name is '' it will handle all commands that matches the appropriate aggregate
     * if name is an array of strings it will handle all commands that matches the appropriate name
     */
    name?: string;

    /**
     * optional, default 0
     */
    version?: number;

    /**
     * optional, if not defined it will use what is defined as default in aggregate or pass the whole command
     */
    payload?: string;

    /**
     * optional
     */
    description?: string;

    /**
     * optional, default Infinity, all pre-conditions will be sorted by this value
     */
    priority?: number;
  }

  /**
   * @param data is the command data
   * @param aggregate is the aggregate object
   * @param callback is optional, if not defined as function argument you can throw errors or return errors here (sync way)
   */
  declare type Domain$preConditionHandler = (
    data: any,
    aggregate: Domain$AggregateModel,
    callback?: (err: string | Error) => string | Error
  ) => void | string | Error;

  declare function Domain$definePreCondition(
    options: Domain$DefinePreConditionOptions,
    handler: Domain$preConditionHandler
  ): void;

  declare interface Domain$DefineCommandOptions {
    name?: string;
    version?: number;
    payload?: string;
    existing?: boolean;
  }

  declare type Domain$commandHandler = (
    data: any,
    aggregate: Domain$AggregateModel
  ) => void;

  declare type Domain$defineEventStreamsToLoadHandler = (
    cmd: any
  ) => Array<{
    context: string,
    aggregate: string,
    aggregateId: string
  }>;

  declare interface Domain$DefineCommandResult {
    defineEventStreamsToLoad(cb: Domain$defineEventStreamsToLoadHandler): void;
  }

  declare function Domain$defineCommand(
    options: Domain$DefineCommandOptions,
    handler: Domain$commandHandler
  ): Domain$DefineCommandResult;

  declare interface Domain$DefineEventOptions {
    name?: string;
    version?: number;
    payload?: string;
  }

  declare type Domain$eventHandler = (
    data: any,
    aggregate: Domain$AggregateModel
  ) => void;

  declare function Domain$defineEvent(
    options: Domain$DefineEventOptions,
    handler: Domain$eventHandler
  ): void;

  declare interface Domain$DefineBusinessRuleOptions {
    /**
     * optional, default is file name without extension
     */
    name?: string;

    /**
     * optional
     */
    description?: string;

    /**
     * optional, default Infinity, all business rules will be sorted by this value
     */
    priority?: number;
  }

  /**
   * @param changed is the new aggregate object
   * @param previous is the old aggregate object
   * @param events is the array with the resulting events
   * @param command the handling command
   * @param callback is optional, if not defined as function argument you can throw errors or return errors here (sync way)
   */
  declare type Domain$businessRuleHandler = (
    changed: Domain$AggregateModel,
    previous: Domain$AggregateModel,
    command: any,
    callback?: (err: string | Error) => string | Error
  ) => void | string | Error;

  declare function Domain$defineBusinessRule(
    options: Domain$DefineBusinessRuleOptions,
    handler: Domain$businessRuleHandler
  ): void;

  declare interface Domain$DefineCommandHandlerOptions {
    /**
     * optional, default is file name without extension
     */
    name?: string;

    /**
     * optional, default 0
     */
    version?: number;

    /**
     * optional, if not defined it will pass the whole command...
     */
    payload?: string;
  }

  /**
   * @param aggId is the aggregate id
   * @param cmd is the command data
   * @param callback is optional, if not defined as function argument you can throw errors or return errors here (sync way)
   */
  declare type Domain$commandHandlerHandler = (
    aggId: string,
    cmd: any,
    commandHandler: any,
    callback?: (err: string | Error) => string | Error
  ) => void | string | Error;

  declare function Domain$defineCommandHandler(
    options: Domain$DefineCommandHandlerOptions,
    handler: Domain$commandHandlerHandler
  ): void;

  declare interface Domain$CommandDefinition {
    /**
     * optional, default is 'id'
     */
    id?: string;

    /**
     * optional, default is 'name'
     */
    name?: string;

    /**
     * optional, default is 'aggregate.id'
     * if an aggregate id is not defined in the command, the command handler will create a new aggregate instance
     */
    aggregateId?: string;

    /**
     * optional, only makes sense if contexts are defined in the 'domainPath' structure
     */
    context?: string;

    /**
     * optional, only makes sense if aggregates with names are defined in the 'domainPath' structure
     */
    aggregate?: string;

    /**
     * optional, but recommended
     */
    payload?: string;

    /**
     * optional, if defined the command handler will check if the command can be handled
     * if you want the command to be handled in a secure/transactional way pass a revision value that matches the current aggregate revision
     */
    revision?: string;

    /**
     * optional, if defined the command handler will search for a handle that matches command name and version number
     */
    version?: string;

    /**
     * optional, if defined theses values will be copied to the event (can be used to transport information like userId, etc..)
     */
    meta?: string;
  }

  declare interface Domain$EventDefinition {
    /**
     * optional, default is 'correlationId'
     * will use the command id as correlationId, so you can match it in the sender
     */
    correlationId?: string;

    /**
     * optional, default is 'id'
     */
    id?: string;

    /**
     * optional, default is 'name'
     */
    name?: string;

    /**
     * optional, default is 'aggregate.id'
     */
    aggregateId?: string;

    /**
     * optional, only makes sense if contexts are defined in the 'domainPath' structure
     */
    context?: string;

    /**
     * optional, only makes sense if aggregates with names are defined in the 'domainPath' structure
     */
    aggregate?: string;

    /**
     * optional, default is 'payload'
     */
    payload?: string;

    /**
     * optional, default is 'revision'
     * will represent the aggregate revision, can be used in next command
     */
    revision?: string;

    /**
     * optional
     */
    version?: string;

    /**
     * optional, if defined the values of the command will be copied to the event (can be used to transport information like userId, etc..)
     */
    meta?: string;

    /**
     * optional, if defined the commit date of the eventstore will be saved in this value
     */
    commitStamp?: string;
  }

  declare type Domain$generateIdCallback = (err: any, id: string) => void;

  declare interface Domain$HandleMetaInfos {
    aggregateId: string;
    aggregate: string;
    context: string;
  }

  declare interface Domain$CqrsDomain {
    /**
     * Inject definition for command structure.
     * @param definition the definition to be injected
     * @returns to be able to chain...
     */
    defineCommand(definition: Domain$CommandDefinition): Domain$CqrsDomain;

    /**
     * Inject definition for event structure.
     * @param definition the definition to be injected
     * @returns to be able to chain...
     */
    defineEvent(definition: Domain$EventDefinition): Domain$CqrsDomain;

    /**
     * Call this function to initialize the domain.
     * @param callback the function that will be called when this action has finished [optional]
     *             `function(err, warnings){}`
     */
    init(cb: (err: Error, warnings: Error[]) => void): void;

    /**
     * Call this function to let the domain handle it.
     * @param cmd the command object
     * @param callback the function that will be called when this action has finished [optional]
     *            `function(err, evts, aggregateData, meta){}` evts is of type Array, aggregateData and meta are an object
     */
    handle(
      cmd: any,
      cb?:
        | ((err: Error) => void)
        | ((
            err: Error,
            events: any[],
            aggregateData: any,
            metaInfos: Domain$HandleMetaInfos
          ) => void)
    ): void;

    /**
     * Returns the domain information.
     */
    getInfo(): any;

    /**
     * Inject function for for event notification.
     * @param fn the function to be injected
     * @returns to be able to chain...
     */
    onEvent(
      cb: ((evt: any) => void) | ((evt: any, callback: () => void) => void)
    ): Domain$CqrsDomain;

    /**
     * Inject idGenerator function.
     * @param fn The function to be injected.
     * @returns to be able to chain...
     */
    idGenerator(
      cb: (() => string) | ((callback: Domain$generateIdCallback) => string)
    ): Domain$CqrsDomain;

    /**
     * Inject idGenerator function for aggregate id.
     * @param fn The function to be injected.
     * @returns to be able to chain...
     */
    aggregateIdGenerator(
      cb: (() => string) | ((callback: Domain$generateIdCallback) => string)
    ): Domain$CqrsDomain;

    /**
     * Converts an error to the commandRejected event
     * @param cmd The command that was handled.
     * @param err The error that occurs.
     * @returns The resulting event.
     */
    createCommandRejectedEvent(cmd: any, err: Error): any;

    /**
     * Is called when dispatched a command.
     * @param cmd the command object
     * @param err the error
     * @param eventsToDispatch the events to dispatch
     * @param aggregateData the aggregate data
     * @param meta the meta infos
     * @param callback the function that will be called when this action has finished [optional]
     *        `function(err, evts, aggregateData, meta){}` evts is of type Array, aggregateData and meta are an object
     */
    onDispatched(
      cmd: any,
      err: Error,
      eventsToDispatch: any[],
      aggregateData: any,
      meta: any,
      callback: (err: Error, evts: any[], aggregateData: any, meta: any) => void
    ): void;
  }

  declare type Domain$SupportedDBTypes =
    | "mongodb"
    | "redis"
    | "tingodb"
    | "azuretable"
    | "inmemory";

  declare interface Domain$CreateDomainOptions {
    /**
     * the path to the "working directory"
     * can be structured like
     * [set 1](https://github.com/adrai/node-cqrs-domain/tree/master/test/integration/fixture/set1) or
     * [set 2](https://github.com/adrai/node-cqrs-domain/tree/master/test/integration/fixture/set2)
     */
    domainPath: string;

    /**
     * optional, default is 'commandRejected'
     * will be used if an error occurs and an event should be generated
     */
    commandRejectedEventName?: string;

    /**
     * optional, default is 800
     * if using in scaled systems and not guaranteeing that each command for an aggregate instance
     * dispatches to the same worker process, this module tries to catch the concurrency issues and
     * retries to handle the command after a timeout between 0 and the defined value
     */
    retryOnConcurrencyTimeout?: number;

    /**
     * optional, default is 100
     * global snapshot threshold value for all aggregates
     * defines the amount of loaded events, if there are more events to load, it will do a snapshot, so next loading is faster
     * an individual snapshot threshold defining algorithm can be defined per aggregate (scroll down)
     */
    snapshotThreshold?: number;

    /**
     * optional, default is in-memory
     * currently supports: mongodb, redis, tingodb, azuretable and inmemory
     * hint: [eventstore](https://github.com/adrai/node-eventstore#provide-implementation-for-storage)
     */
    eventStore?: {
      type: Domain$SupportedDBTypes,
      host?: string,
      port?: number,
      dbName?: string,
      eventsCollectionName?: string,
      snapshotsCollectionName?: string,
      transactionsCollectionName?: string,
      timeout?: number,
      authSource?: string,
      username?: string,
      password?: string,
      url?: string
    };

    /**
     * optional, default is in-memory
     * currently supports: mongodb, redis, tingodb, couchdb, azuretable, dynamodb and inmemory
     * hint settings like: [eventstore](https://github.com/adrai/node-eventstore#provide-implementation-for-storage)
     */
    aggregateLock?: {
      type: Domain$SupportedDBTypes,
      host?: string,
      port?: number,
      db: number,
      prefix?: string,
      timeout?: number,
      password?: string
    };

    /**
     * optional, default is not set
     * checks if command was already seen in the last time -> ttl
     * currently supports: mongodb, redis, tingodb and inmemory
     * hint settings like: [eventstore](https://github.com/adrai/node-eventstore#provide-implementation-for-storage)
     */
    deduplication?: {
      type: "mongodb" | "redis" | "tingodb" | "inmemory",
      ttl?: number,
      host?: string,
      port?: number,
      db?: number,
      prefix?: string,
      timeout?: number,
      password?: string
    };

    /**
     * optional, default false
     * resolves valid file types from loader extensions instead of default values while parsing definition files
     */
    useLoaderExtensions?: true;
  }
  declare function Domain(
    options: Domain$CreateDomainOptions
  ): Domain$CqrsDomain;

  declare export default typeof Domain;
}
