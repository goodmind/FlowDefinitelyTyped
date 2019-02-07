declare module "consul" {
  import type { IncomingMessage as HttpIncomingMessage } from "http";

  declare interface Consul$Thenable<T> {
    then<U>(
      onFulfilled?: (value: T) => U | Consul$Thenable<U>,
      onRejected?: (error: any) => U | Consul$Thenable<U>
    ): Consul$Thenable<U>;
    then<U>(
      onFulfilled?: (value: T) => U | Consul$Thenable<U>,
      onRejected?: (error: any) => void
    ): Consul$Thenable<U>;
    catch<U>(
      onRejected?: (error: any) => U | Consul$Thenable<U>
    ): Consul$Thenable<U>;
  }

  declare interface Consul$CommonOptions {
    consistent?: boolean;
    dc?: string;
    stale?: boolean;
    token?: string;
    wait?: string;
    wan?: boolean;
    ctx?: NodeJS.EventEmitter;
    timeout?: number;
  }

  declare type Consul$Response = {
    body?: Object | string | Buffer
  } & HttpIncomingMessage;

  declare interface Consul$Callback<TData> {
    (err?: Error, data?: TData, res?: Consul$Response): any;
  }

  declare type Acl$CreateOptions = {
    name?: string,
    type?: string,
    rules?: string,
    dc?: string,
    lockdelay?: string,
    name?: string,
    node?: string,
    checks?: string[],
    behavior?: string,
    ttl?: string
  } & Consul$CommonOptions;

  declare type Acl$UpdateOptions = {
    id: string,
    name?: string,
    type?: string,
    rules?: string
  } & Consul$CommonOptions;

  declare type Acl$DestroyOptions = {
    id: string,
    id: string,
    dc?: string
  } & Consul$CommonOptions;

  declare type Acl$InfoOptions = {
    id: string,
    id: string,
    dc?: string
  } & Consul$CommonOptions;

  declare type Acl$GetOptions = {
    key: string,
    dc?: string,
    recurse?: boolean,
    index?: string,
    wait?: string,
    raw?: boolean,
    buffer?: boolean
  } & Acl$InfoOptions;

  declare type Acl$CloneOptions = {
    id: string
  } & Consul$CommonOptions;

  declare type Acl$ListOptions = {
    dc?: string,
    dc?: string,
    name?: string,
    dc?: string
  } & Consul$CommonOptions;

  declare interface Consul$Acl {
    consul: Consul$Consul;

    /**
     * Creates a new token with policy
     */
    create: {
      <TData>(
        opts: Consul$Acl.Acl$CreateOptions,
        callback: Consul$Callback<TData>
      ): void,
      <TData>(callback: Consul$Callback<TData>): void,
      <TData>(opts?: Consul$Acl.Acl$CreateOptions): Consul$Thenable<TData>
    };

    /**
     * Update the policy of a token
     */
    update: {
      <TData>(
        opts: Consul$Acl.Acl$UpdateOptions,
        callback: Consul$Callback<TData>
      ): void,
      <TData>(opts: Consul$Acl.Acl$UpdateOptions): Consul$Thenable<TData>
    };

    /**
     * Destroys a given token
     */
    destroy: {
      <TData>(id: string, callback: Consul$Callback<TData>): void,
      <TData>(
        opts: Consul$Acl.Acl$DestroyOptions,
        callback: Consul$Callback<TData>
      ): void,
      <TData>(id: string): Consul$Thenable<TData>,
      <TData>(opts: Consul$Acl.Acl$DestroyOptions): Consul$Thenable<TData>
    };

    /**
     * Queries the policy of a given token
     */
    info: {
      <TData>(id: string, callback: Consul$Callback<TData>): void,
      <TData>(
        opts: Consul$Acl.Acl$InfoOptions,
        callback: Consul$Callback<TData>
      ): void,
      <TData>(id: string): Consul$Thenable<TData>,
      <TData>(opts: Consul$Acl.Acl$InfoOptions): Consul$Thenable<TData>
    };
    get: {
      <TData>(id: string, callback: Consul$Callback<TData>): void,
      <TData>(
        opts: Consul$Acl.Acl$GetOptions,
        callback: Consul$Callback<TData>
      ): void,
      <TData>(id: string): Consul$Thenable<TData>,
      <TData>(opts: Consul$Acl.Acl$GetOptions): Consul$Thenable<TData>
    };

    /**
     * Creates a new token by cloning an existing token
     */
    clone: {
      <TData>(id: string, callback: Consul$Callback<TData>): void,
      <TData>(
        opts: Consul$Acl.Acl$CloneOptions,
        callback: Consul$Callback<TData>
      ): void,
      <TData>(id: string): Consul$Thenable<TData>,
      <TData>(opts: Consul$Acl.Acl$CloneOptions): Consul$Thenable<TData>
    };

    /**
     * Lists all the active tokens
     */
    list: {
      <TData>(
        opts: Consul$Acl.Acl$ListOptions,
        callback: Consul$Callback<TData>
      ): void,
      <TData>(callback: Consul$Callback<TData>): void,
      <TData>(opts?: Consul$Acl.Acl$ListOptions): Consul$Thenable<TData>
    };
  }

  declare interface Consul$AclStatic {
    new(consul: Consul$Consul): Consul$Acl;
  }

  declare type Check$ListOptions = {
    dc?: string,
    dc?: string,
    name?: string,
    dc?: string
  } & Consul$CommonOptions;

  declare type Check$RegisterOptions = {
    name: string,
    id?: string,
    serviceid?: string,
    http?: string,
    script?: string,
    interval?: string,
    ttl?: string,
    notes?: string,
    status?: string,
    name: string,
    id?: string,
    tags?: string[],
    address?: string,
    port?: number,
    check?: Service$RegisterCheck,
    checks?: Service$RegisterCheck[]
  } & Consul$CommonOptions;

  declare type Check$DeregisterOptions = {
    id: string,
    id: string
  } & Consul$CommonOptions;

  declare type Check$PassOptions = {
    id: string,
    note?: string
  } & Consul$CommonOptions;

  declare type Check$WarnOptions = {
    id: string,
    note?: string
  } & Consul$CommonOptions;

  declare type Check$FailOptions = {
    id: string,
    note?: string
  } & Consul$CommonOptions;

  declare interface Agent$Check {
    consul: Consul$Consul;

    /**
     * Returns the checks the local agent is managing
     */
    list: {
      <TData>(
        opts: Agent$Check.Check$ListOptions,
        callback: Consul$Callback<TData>
      ): void,
      <TData>(callback: Consul$Callback<TData>): void,
      <TData>(opts?: Agent$Check.Check$ListOptions): Consul$Thenable<TData>
    };

    /**
     * Registers a new local check
     */
    register: {
      <TData>(
        opts: Agent$Check.Check$RegisterOptions,
        callback: Consul$Callback<TData>
      ): void,
      <TData>(opts: Agent$Check.Check$RegisterOptions): Consul$Thenable<TData>
    };

    /**
     * Deregister a local check
     */
    deregister: {
      <TData>(id: string, callback: Consul$Callback<TData>): void,
      <TData>(
        opts: Agent$Check.Check$DeregisterOptions,
        callback: Consul$Callback<TData>
      ): void,
      <TData>(id: string): Consul$Thenable<TData>,
      <TData>(opts: Agent$Check.Check$DeregisterOptions): Consul$Thenable<TData>
    };

    /**
     * Mark a local test as passing
     */
    pass: {
      <TData>(id: string, callback: Consul$Callback<TData>): void,
      <TData>(
        opts: Agent$Check.Check$PassOptions,
        callback: Consul$Callback<TData>
      ): void,
      <TData>(id: string): Consul$Thenable<TData>,
      <TData>(opts: Agent$Check.Check$PassOptions): Consul$Thenable<TData>
    };

    /**
     * Mark a local test as warning
     */
    warn: {
      <TData>(id: string, callback: Consul$Callback<TData>): void,
      <TData>(
        opts: Agent$Check.Check$WarnOptions,
        callback: Consul$Callback<TData>
      ): void,
      <TData>(id: string): Consul$Thenable<TData>,
      <TData>(opts: Agent$Check.Check$WarnOptions): Consul$Thenable<TData>
    };

    /**
     * Mark a local test as critical
     */
    fail: {
      <TData>(id: string, callback: Consul$Callback<TData>): void,
      <TData>(
        opts: Agent$Check.Check$FailOptions,
        callback: Consul$Callback<TData>
      ): void,
      <TData>(id: string): Consul$Thenable<TData>,
      <TData>(opts: Agent$Check.Check$FailOptions): Consul$Thenable<TData>
    };
  }

  declare interface Agent$CheckStatic {
    new(consul: Consul$Consul): Agent$Check;
  }

  declare interface Service$RegisterCheck {
    http?: string;
    script?: string;
    interval?: string;
    ttl?: string;
    notes?: string;
    status?: string;
  }

  declare type Service$ListOptions = {
    dc?: string,
    dc?: string,
    name?: string,
    dc?: string
  } & Consul$CommonOptions;

  declare type Service$RegisterOptions = {
    name: string,
    id?: string,
    serviceid?: string,
    http?: string,
    script?: string,
    interval?: string,
    ttl?: string,
    notes?: string,
    status?: string,
    name: string,
    id?: string,
    tags?: string[],
    address?: string,
    port?: number,
    check?: Service$RegisterCheck,
    checks?: Service$RegisterCheck[]
  } & Consul$CommonOptions;

  declare type Service$DeregisterOptions = {
    id: string,
    id: string
  } & Consul$CommonOptions;

  declare type Service$MaintenanceOptions = {
    id: string,
    enable: boolean,
    reason?: string,
    enable: boolean,
    reason?: string
  } & Consul$CommonOptions;

  declare interface Agent$Service {
    consul: Consul$Consul;

    /**
     * Returns the services local agent is managing
     */
    list: {
      <TData>(
        opts: Agent$Service.Service$ListOptions,
        callback: Consul$Callback<TData>
      ): void,
      <TData>(callback: Consul$Callback<TData>): void,
      <TData>(opts?: Agent$Service.Service$ListOptions): Consul$Thenable<TData>
    };

    /**
     * Registers a new local service
     */
    register: {
      <TData>(name: string, callback: Consul$Callback<TData>): void,
      <TData>(
        opts: Agent$Service.Service$RegisterOptions,
        callback: Consul$Callback<TData>
      ): void,
      <TData>(name: string): Consul$Thenable<TData>,
      <TData>(
        opts: Agent$Service.Service$RegisterOptions
      ): Consul$Thenable<TData>
    };

    /**
     * Deregister a local service
     */
    deregister: {
      <TData>(id: string, callback: Consul$Callback<TData>): void,
      <TData>(
        opts: Agent$Service.Service$DeregisterOptions,
        callback: Consul$Callback<TData>
      ): void,
      <TData>(id: string): Consul$Thenable<TData>,
      <TData>(
        opts: Agent$Service.Service$DeregisterOptions
      ): Consul$Thenable<TData>
    };

    /**
     * Manages node maintenance mode
     */
    maintenance: {
      <TData>(
        opts: Agent$Service.Service$MaintenanceOptions,
        callback: Consul$Callback<TData>
      ): void,
      <TData>(
        opts: Agent$Service.Service$MaintenanceOptions
      ): Consul$Thenable<TData>
    };
    consul: Consul$Consul;

    /**
     * Lists services in a given DC
     */
    list: {
      <TData>(dc: string, callback: Consul$Callback<TData>): void,
      <TData>(
        opts: Agent$Service.Service$ListOptions,
        callback: Consul$Callback<TData>
      ): void,
      <TData>(callback: Consul$Callback<TData>): void,
      <TData>(dc?: string): Consul$Thenable<TData>,
      <TData>(opts?: Agent$Service.Service$ListOptions): Consul$Thenable<TData>
    };

    /**
     * Lists the nodes in a given service
     */
    nodes: {
      <TData>(service: string, callback: Consul$Callback<TData>): void,
      <TData>(
        opts: Agent$Service.Catalog$NodesOptions,
        callback: Consul$Callback<TData>
      ): void,
      <TData>(service: string): Consul$Thenable<TData>,
      <TData>(opts: Agent$Service.Catalog$NodesOptions): Consul$Thenable<TData>
    };
  }

  declare interface Agent$ServiceStatic {
    new(consul: Consul$Consul): Agent$Service;
    new(consul: Consul$Consul): Agent$Service;
  }

  declare type Agent$ChecksOptions = {
    service: string,
    dc?: string
  } & Check$Service$ListOptions;

  declare type Agent$ServicesOptions = {
    node: string
  } & Service$Service$ListOptions;

  declare type Agent$MembersOptions = {
    wan?: boolean
  } & Consul$CommonOptions;

  declare type Agent$SelfOptions = {} & Consul$CommonOptions;

  declare type Agent$MaintenanceOptions = {
    id: string,
    enable: boolean,
    reason?: string,
    enable: boolean,
    reason?: string
  } & Consul$CommonOptions;

  declare type Agent$JoinOptions = {
    address: string,
    wan?: boolean
  } & Consul$CommonOptions;

  declare type Agent$ForceLeaveOptions = {
    node: string
  } & Consul$CommonOptions;

  declare interface Consul$Agent {
    consul: Consul$Consul;
    check: Consul$Agent.Agent$Check;
    service: Consul$Agent.Agent$Service;

    /**
     * Returns the checks the local agent is managing
     */
    checks: {
      <TData>(
        opts: Consul$Agent.Agent$ChecksOptions,
        callback: Consul$Callback<TData>
      ): void,
      <TData>(callback: Consul$Callback<TData>): void,
      <TData>(opts?: Consul$Agent.Agent$ChecksOptions): Consul$Thenable<TData>
    };

    /**
     * Returns the services local agent is managing
     */
    services: {
      <TData>(
        opts: Consul$Agent.Agent$ServicesOptions,
        callback: Consul$Callback<TData>
      ): void,
      <TData>(callback: Consul$Callback<TData>): void,
      <TData>(opts?: Consul$Agent.Agent$ServicesOptions): Consul$Thenable<TData>
    };

    /**
     * Returns the members as seen by the local consul agent
     */
    members: {
      <TData>(
        opts: Consul$Agent.Agent$MembersOptions,
        callback: Consul$Callback<TData>
      ): void,
      <TData>(callback: Consul$Callback<TData>): void,
      <TData>(opts?: Consul$Agent.Agent$MembersOptions): Consul$Thenable<TData>
    };

    /**
     * Returns the local node configuration
     */
    self: {
      <TData>(
        opts: Consul$Agent.Agent$SelfOptions,
        callback: Consul$Callback<TData>
      ): void,
      <TData>(callback: Consul$Callback<TData>): void,
      <TData>(opts?: Consul$Agent.Agent$SelfOptions): Consul$Thenable<TData>
    };

    /**
     * Manages node maintenance mode
     */
    maintenance: {
      <TData>(enable: boolean, callback: Consul$Callback<TData>): void,
      <TData>(
        opts: Consul$Agent.Agent$MaintenanceOptions,
        callback: Consul$Callback<TData>
      ): void,
      <TData>(enable: boolean): Consul$Thenable<TData>,
      <TData>(
        opts: Consul$Agent.Agent$MaintenanceOptions
      ): Consul$Thenable<TData>
    };

    /**
     * Trigger local agent to join a node
     */
    join: {
      <TData>(address: string, callback: Consul$Callback<TData>): void,
      <TData>(
        opts: Consul$Agent.Agent$JoinOptions,
        callback: Consul$Callback<TData>
      ): void,
      <TData>(address: string): Consul$Thenable<TData>,
      <TData>(opts: Consul$Agent.Agent$JoinOptions): Consul$Thenable<TData>
    };

    /**
     * Force remove node
     */
    forceLeave: {
      <TData>(node: string, callback: Consul$Callback<TData>): void,
      <TData>(
        opts: Consul$Agent.Agent$ForceLeaveOptions,
        callback: Consul$Callback<TData>
      ): void,
      <TData>(node: string): Consul$Thenable<TData>,
      <TData>(
        opts: Consul$Agent.Agent$ForceLeaveOptions
      ): Consul$Thenable<TData>
    };
  }

  declare interface Consul$AgentStatic {
    new(consul: Consul$Consul): Consul$Agent;
    Agent$Check: Consul$Agent.Agent$CheckStatic;
    Agent$Service: Consul$Agent.Agent$ServiceStatic;
  }

  declare type Node$ListOptions = {
    dc?: string,
    dc?: string,
    name?: string,
    dc?: string
  } & Consul$CommonOptions;

  declare type Node$ServicesOptions = {
    node: string
  } & Service$Node$ListOptions;

  declare interface Catalog$Node {
    consul: Consul$Consul;

    /**
     * Lists nodes in a given DC
     */
    list: {
      <TData>(dc: string, callback: Consul$Callback<TData>): void,
      <TData>(
        opts: Catalog$Node.Node$ListOptions,
        callback: Consul$Callback<TData>
      ): void,
      <TData>(callback: Consul$Callback<TData>): void,
      <TData>(dc?: string): Consul$Thenable<TData>,
      <TData>(opts?: Catalog$Node.Node$ListOptions): Consul$Thenable<TData>
    };

    /**
     * Lists the services provided by a node
     */
    services: {
      <TData>(node: string, callback: Consul$Callback<TData>): void,
      <TData>(
        opts: Catalog$Node.Node$ServicesOptions,
        callback: Consul$Callback<TData>
      ): void,
      <TData>(node: string): Consul$Thenable<TData>,
      <TData>(opts: Catalog$Node.Node$ServicesOptions): Consul$Thenable<TData>
    };
  }

  declare interface Catalog$NodeStatic {
    new(consul: Consul$Consul): Catalog$Node;
  }

  declare type Service$ListOptions = {
    dc?: string,
    dc?: string,
    name?: string,
    dc?: string
  } & Consul$CommonOptions;

  declare type Service$NodesOptions = {
    service: string,
    dc?: string,
    tag?: string
  } & Consul$CommonOptions;

  declare interface Catalog$Service {
    consul: Consul$Consul;

    /**
     * Returns the services local agent is managing
     */
    list: {
      <TData>(
        opts: Catalog$Service.Service$ListOptions,
        callback: Consul$Callback<TData>
      ): void,
      <TData>(callback: Consul$Callback<TData>): void,
      <TData>(
        opts?: Catalog$Service.Service$ListOptions
      ): Consul$Thenable<TData>
    };

    /**
     * Registers a new local service
     */
    register: {
      <TData>(name: string, callback: Consul$Callback<TData>): void,
      <TData>(
        opts: Catalog$Service.Service$RegisterOptions,
        callback: Consul$Callback<TData>
      ): void,
      <TData>(name: string): Consul$Thenable<TData>,
      <TData>(
        opts: Catalog$Service.Service$RegisterOptions
      ): Consul$Thenable<TData>
    };

    /**
     * Deregister a local service
     */
    deregister: {
      <TData>(id: string, callback: Consul$Callback<TData>): void,
      <TData>(
        opts: Catalog$Service.Service$DeregisterOptions,
        callback: Consul$Callback<TData>
      ): void,
      <TData>(id: string): Consul$Thenable<TData>,
      <TData>(
        opts: Catalog$Service.Service$DeregisterOptions
      ): Consul$Thenable<TData>
    };

    /**
     * Manages node maintenance mode
     */
    maintenance: {
      <TData>(
        opts: Catalog$Service.Agent$MaintenanceOptions,
        callback: Consul$Callback<TData>
      ): void,
      <TData>(
        opts: Catalog$Service.Agent$MaintenanceOptions
      ): Consul$Thenable<TData>
    };
    consul: Consul$Consul;

    /**
     * Lists services in a given DC
     */
    list: {
      <TData>(dc: string, callback: Consul$Callback<TData>): void,
      <TData>(
        opts: Catalog$Service.Service$ListOptions,
        callback: Consul$Callback<TData>
      ): void,
      <TData>(callback: Consul$Callback<TData>): void,
      <TData>(dc?: string): Consul$Thenable<TData>,
      <TData>(
        opts?: Catalog$Service.Service$ListOptions
      ): Consul$Thenable<TData>
    };

    /**
     * Lists the nodes in a given service
     */
    nodes: {
      <TData>(service: string, callback: Consul$Callback<TData>): void,
      <TData>(
        opts: Catalog$Service.Service$NodesOptions,
        callback: Consul$Callback<TData>
      ): void,
      <TData>(service: string): Consul$Thenable<TData>,
      <TData>(
        opts: Catalog$Service.Service$NodesOptions
      ): Consul$Thenable<TData>
    };
  }

  declare interface Catalog$ServiceStatic {
    new(consul: Consul$Consul): Catalog$Service;
    new(consul: Consul$Consul): Catalog$Service;
  }

  declare type Catalog$DatacentersOptions = {} & Consul$CommonOptions;

  declare type Catalog$NodesOptions = {
    service: string,
    dc?: string,
    tag?: string
  } & Consul$CommonOptions;

  declare type Catalog$ServicesOptions = {
    node: string
  } & Service$Service$ListOptions;

  declare interface Consul$Catalog {
    consul: Consul$Consul;
    node: Consul$Catalog.Catalog$Node;
    service: Consul$Catalog.Catalog$Service;

    /**
     * Lists known datacenters
     */
    datacenters: {
      <TData>(
        opts: Consul$Catalog.Catalog$DatacentersOptions,
        callback: Consul$Callback<TData>
      ): void,
      <TData>(callback: Consul$Callback<TData>): void,
      <TData>(
        opts?: Consul$Catalog.Catalog$DatacentersOptions
      ): Consul$Thenable<TData>
    };

    /**
     * Lists nodes in a given DC
     */
    nodes: {
      <TData>(dc: string, callback: Consul$Callback<TData>): void,
      <TData>(
        opts: Consul$Catalog.Catalog$NodesOptions,
        callback: Consul$Callback<TData>
      ): void,
      <TData>(callback: Consul$Callback<TData>): void,
      <TData>(dc?: string): Consul$Thenable<TData>,
      <TData>(
        opts?: Consul$Catalog.Catalog$NodesOptions
      ): Consul$Thenable<TData>
    };

    /**
     * Lists services in a given DC
     */
    services: {
      <TData>(dc: string, callback: Consul$Callback<TData>): void,
      <TData>(
        opts: Consul$Catalog.Catalog$ServicesOptions,
        callback: Consul$Callback<TData>
      ): void,
      <TData>(callback: Consul$Callback<TData>): void,
      <TData>(dc?: string): Consul$Thenable<TData>,
      <TData>(
        opts?: Consul$Catalog.Catalog$ServicesOptions
      ): Consul$Thenable<TData>
    };
  }

  declare interface Consul$CatalogStatic {
    new(consul: Consul$Consul): Consul$Catalog;
    Catalog$Node: Consul$Catalog.Catalog$NodeStatic;
    Catalog$Service: Consul$Catalog.Catalog$ServiceStatic;
  }

  declare type Event$FireOptions = {
    name: string,
    payload: string | Buffer,
    node?: string,
    service?: string,
    tag?: string
  } & Consul$CommonOptions;

  declare type Event$ListOptions = {
    dc?: string,
    dc?: string,
    name?: string,
    dc?: string
  } & Consul$CommonOptions;

  declare interface Consul$Event {
    consul: Consul$Consul;

    /**
     * Fires a new user event
     */
    fire: {
      <TData>(
        name: string,
        payload: string | Buffer,
        callback: Consul$Callback<TData>
      ): void,
      <TData>(name: string, callback: Consul$Callback<TData>): void,
      <TData>(
        opts: Consul$Event.Event$FireOptions,
        callback: Consul$Callback<TData>
      ): void,
      <TData>(name: string, payload: string | Buffer): Consul$Thenable<TData>,
      <TData>(name: string): Consul$Thenable<TData>,
      <TData>(opts: Consul$Event.Event$FireOptions): Consul$Thenable<TData>
    };

    /**
     * Lists the most recent events an agent has seen
     */
    list: {
      <TData>(name: string, callback: Consul$Callback<TData>): void,
      <TData>(
        opts: Consul$Event.Event$ListOptions,
        callback: Consul$Callback<TData>
      ): void,
      <TData>(callback: Consul$Callback<TData>): void,
      <TData>(name?: string): Consul$Thenable<TData>,
      <TData>(opts?: Consul$Event.Event$ListOptions): Consul$Thenable<TData>
    };
  }

  declare interface Consul$EventStatic {
    new(consul: Consul$Consul): Consul$Event;
  }

  declare type Health$NodeOptions = {
    node: string,
    dc?: string,
    node: string,
    dc?: string
  } & Consul$CommonOptions;

  declare type Health$ChecksOptions = {
    service: string,
    dc?: string
  } & Check$Event$ListOptions;

  declare type Health$ServiceOptions = {
    service: string,
    dc?: string,
    tag?: string,
    passing?: boolean,
    near?: string
  } & Consul$CommonOptions;

  declare type Health$StateOptions = {
    state: string,
    dc?: string
  } & Consul$CommonOptions;

  declare interface Consul$Health {
    consul: Consul$Consul;

    /**
     * Returns the health info of a node
     */
    node: {
      <TData>(node: string, callback: Consul$Callback<TData>): void,
      <TData>(
        opts: Consul$Health.Health$NodeOptions,
        callback: Consul$Callback<TData>
      ): void,
      <TData>(node: string): Consul$Thenable<TData>,
      <TData>(opts: Consul$Health.Health$NodeOptions): Consul$Thenable<TData>
    };

    /**
     * Returns the checks of a service
     */
    checks: {
      <TData>(service: string, callback: Consul$Callback<TData>): void,
      <TData>(
        opts: Consul$Health.Health$ChecksOptions,
        callback: Consul$Callback<TData>
      ): void,
      <TData>(service: string): Consul$Thenable<TData>,
      <TData>(opts: Consul$Health.Health$ChecksOptions): Consul$Thenable<TData>
    };

    /**
     * Returns the nodes and health info of a service
     */
    service: {
      <TData>(service: string, callback: Consul$Callback<TData>): void,
      <TData>(
        opts: Consul$Health.Health$ServiceOptions,
        callback: Consul$Callback<TData>
      ): void,
      <TData>(service: string): Consul$Thenable<TData>,
      <TData>(opts: Consul$Health.Health$ServiceOptions): Consul$Thenable<TData>
    };

    /**
     * Returns the checks in a given state
     */
    state: {
      <TData>(state: string, callback: Consul$Callback<TData>): void,
      <TData>(
        opts: Consul$Health.Health$StateOptions,
        callback: Consul$Callback<TData>
      ): void,
      <TData>(state: string): Consul$Thenable<TData>,
      <TData>(opts: Consul$Health.Health$StateOptions): Consul$Thenable<TData>
    };
  }

  declare interface Consul$HealthStatic {
    new(consul: Consul$Consul): Consul$Health;
  }

  declare type Kv$GetOptions = {
    key: string,
    dc?: string,
    recurse?: boolean,
    index?: string,
    wait?: string,
    raw?: boolean,
    buffer?: boolean
  } & Acl$InfoOptions;

  declare type Kv$KeysOptions = {
    key: string,
    dc?: string,
    separator?: string
  } & Consul$CommonOptions;

  declare type Kv$SetOptions = {
    key: string,
    value: string | Buffer,
    dc?: string,
    flags?: number,
    cas?: string,
    acquire?: string,
    release?: string
  } & Consul$CommonOptions;

  declare type Kv$DelOptions = {
    key: string,
    dc?: string,
    recurse?: boolean,
    cas?: string
  } & Consul$CommonOptions;

  declare type Kv$DeleteOptions = {} & Kv$DelOptions;

  declare interface Consul$Kv {
    consul: Consul$Consul;

    /**
     * Get
     */
    get: {
      <TData>(key: string, callback: Consul$Callback<TData>): void,
      <TData>(
        opts: Consul$Kv.Kv$GetOptions,
        callback: Consul$Callback<TData>
      ): void,
      <TData>(key: string): Consul$Thenable<TData>,
      <TData>(opts: Consul$Kv.Kv$GetOptions): Consul$Thenable<TData>
    };

    /**
     * Keys
     */
    keys: {
      <TData>(key: string, callback: Consul$Callback<TData>): void,
      <TData>(
        opts: Consul$Kv.Kv$KeysOptions,
        callback: Consul$Callback<TData>
      ): void,
      <TData>(callback: Consul$Callback<TData>): void,
      <TData>(key?: string): Consul$Thenable<TData>,
      <TData>(opts?: Consul$Kv.Kv$KeysOptions): Consul$Thenable<TData>
    };

    /**
     * Set
     */
    set: {
      <TData>(
        key: string,
        value: string | Buffer,
        opts: Consul$Kv.Kv$SetOptions,
        callback: Consul$Callback<TData>
      ): void,
      <TData>(
        key: string,
        value: string | Buffer,
        callback: Consul$Callback<TData>
      ): void,
      <TData>(
        opts: Consul$Kv.Kv$SetOptions,
        callback: Consul$Callback<TData>
      ): void,
      <TData>(
        key: string,
        value: string | Buffer,
        opts: Consul$Kv.Kv$SetOptions
      ): Consul$Thenable<TData>,
      <TData>(key: string, value: string | Buffer): Consul$Thenable<TData>,
      <TData>(opts: Consul$Kv.Kv$SetOptions): Consul$Thenable<TData>
    };

    /**
     * Delete
     */
    del: {
      <TData>(key: string, callback: Consul$Callback<TData>): void,
      <TData>(
        opts: Consul$Kv.Kv$DelOptions,
        callback: Consul$Callback<TData>
      ): void,
      <TData>(key: string): Consul$Thenable<TData>,
      <TData>(opts: Consul$Kv.Kv$DelOptions): Consul$Thenable<TData>
    };
    delete: {
      <TData>(key: string, callback: Consul$Callback<TData>): void,
      <TData>(
        opts: Consul$Kv.Kv$DeleteOptions,
        callback: Consul$Callback<TData>
      ): void,
      <TData>(key: string): Consul$Thenable<TData>,
      <TData>(opts: Consul$Kv.Kv$DeleteOptions): Consul$Thenable<TData>
    };
  }

  declare interface Consul$KvStatic {
    new(consul: Consul$Consul): Consul$Kv;
  }

  declare interface Lock$Options {
    key: string;
    session?: Object | string;
    value?: string | Buffer;
    lockwaittime?: string;
    lockretrytime?: string;
    method: Function;
    options?: Consul$CommonOptions & Watch$WatchOptions;
  }

  declare type Consul$Lock = {
    consul: Consul$Consul,

    /**
     * Acquire lock
     */
    acquire(): void,

    /**
     * Release lock
     */
    release(): void
  } & NodeJS.EventEmitter;

  declare interface Consul$LockStatic {
    new(consul: Consul$Consul, opts: Consul$Lock.Lock$Options): Consul$Lock;
  }

  declare type Session$CreateOptions = {
    name?: string,
    type?: string,
    rules?: string,
    dc?: string,
    lockdelay?: string,
    name?: string,
    node?: string,
    checks?: string[],
    behavior?: string,
    ttl?: string
  } & Consul$CommonOptions;

  declare type Session$DestroyOptions = {
    id: string,
    id: string,
    dc?: string
  } & Consul$CommonOptions;

  declare type Session$InfoOptions = {
    id: string,
    id: string,
    dc?: string
  } & Consul$CommonOptions;

  declare type Session$GetOptions = {
    key: string,
    dc?: string,
    recurse?: boolean,
    index?: string,
    wait?: string,
    raw?: boolean,
    buffer?: boolean
  } & Session$InfoOptions;

  declare type Session$NodeOptions = {
    node: string,
    dc?: string,
    node: string,
    dc?: string
  } & Consul$CommonOptions;

  declare type Session$ListOptions = {
    dc?: string,
    dc?: string,
    name?: string,
    dc?: string
  } & Consul$CommonOptions;

  declare type Session$RenewOptions = {
    id: string,
    dc?: string
  } & Consul$CommonOptions;

  declare interface Consul$Session {
    consul: Consul$Consul;

    /**
     * Creates a new session
     */
    create: {
      <TData>(
        opts: Consul$Session.Session$CreateOptions,
        callback: Consul$Callback<TData>
      ): void,
      <TData>(callback: Consul$Callback<TData>): void,
      <TData>(
        opts?: Consul$Session.Session$CreateOptions
      ): Consul$Thenable<TData>
    };

    /**
     * Destroys a given session
     */
    destroy: {
      <TData>(id: string, callback: Consul$Callback<TData>): void,
      <TData>(
        opts: Consul$Session.Session$DestroyOptions,
        callback: Consul$Callback<TData>
      ): void,
      <TData>(id: string): Consul$Thenable<TData>,
      <TData>(
        opts: Consul$Session.Session$DestroyOptions
      ): Consul$Thenable<TData>
    };

    /**
     * Queries a given session
     */
    info: {
      <TData>(id: string, callback: Consul$Callback<TData>): void,
      <TData>(
        opts: Consul$Session.Session$InfoOptions,
        callback: Consul$Callback<TData>
      ): void,
      <TData>(id: string): Consul$Thenable<TData>,
      <TData>(opts: Consul$Session.Session$InfoOptions): Consul$Thenable<TData>
    };
    get: {
      <TData>(id: string, callback: Consul$Callback<TData>): void,
      <TData>(
        opts: Consul$Session.Session$GetOptions,
        callback: Consul$Callback<TData>
      ): void,
      <TData>(id: string): Consul$Thenable<TData>,
      <TData>(opts: Consul$Session.Session$GetOptions): Consul$Thenable<TData>
    };

    /**
     * Lists sessions belonging to a node
     */
    node: {
      <TData>(node: string, callback: Consul$Callback<TData>): void,
      <TData>(
        opts: Consul$Session.Session$NodeOptions,
        callback: Consul$Callback<TData>
      ): void,
      <TData>(node: string): Consul$Thenable<TData>,
      <TData>(opts: Consul$Session.Session$NodeOptions): Consul$Thenable<TData>
    };

    /**
     * Lists all the active sessions
     */
    list: {
      <TData>(
        opts: Consul$Session.Session$ListOptions,
        callback: Consul$Callback<TData>
      ): void,
      <TData>(callback: Consul$Callback<TData>): void,
      <TData>(opts?: Consul$Session.Session$ListOptions): Consul$Thenable<TData>
    };

    /**
     * Renews a TTL-based session
     */
    renew: {
      <TData>(id: string, callback: Consul$Callback<TData>): void,
      <TData>(
        opts: Consul$Session.Session$RenewOptions,
        callback: Consul$Callback<TData>
      ): void,
      <TData>(id: string): Consul$Thenable<TData>,
      <TData>(opts: Consul$Session.Session$RenewOptions): Consul$Thenable<TData>
    };
  }

  declare interface Consul$SessionStatic {
    new(consul: Consul$Consul): Consul$Session;
  }

  declare type Status$LeaderOptions = {} & Consul$CommonOptions;

  declare type Status$PeersOptions = {} & Consul$CommonOptions;

  declare interface Consul$Status {
    consul: Consul$Consul;

    /**
     * Returns the current Raft leader.
     */
    leader: {
      <TData>(
        opts: Consul$Status.Status$LeaderOptions,
        callback: Consul$Callback<TData>
      ): void,
      <TData>(callback: Consul$Callback<TData>): void,
      <TData>(opts?: Consul$Status.Status$LeaderOptions): Consul$Thenable<TData>
    };

    /**
     * Returns the current Raft peer set
     */
    peers: {
      <TData>(
        opts: Consul$Status.Status$PeersOptions,
        callback: Consul$Callback<TData>
      ): void,
      <TData>(callback: Consul$Callback<TData>): void,
      <TData>(opts?: Consul$Status.Status$PeersOptions): Consul$Thenable<TData>
    };
  }

  declare interface Consul$StatusStatic {
    new(consul: Consul$Consul): Consul$Status;
  }

  declare interface Watch$WatchOptions {
    key?: string;
  }

  declare interface Watch$Options {
    key: string;
    session?: Object | string;
    value?: string | Buffer;
    lockwaittime?: string;
    lockretrytime?: string;
    method: Function;
    options?: Consul$CommonOptions & Watch$WatchOptions;
  }

  declare type Consul$Watch = {
    consul: Consul$Consul,

    /**
     * Is running
     */
    isRunning(): boolean,

    /**
     * Update time
     */
    updateTime(): number,

    /**
     * End watch
     */
    end(): void
  } & NodeJS.EventEmitter;

  declare interface Consul$WatchStatic {
    new(consul: Consul$Consul, opts: Consul$Watch.Watch$Options): Consul$Watch;
  }

  declare interface Consul$ConsulOptions {
    host?: string;
    port?: string;
    secure?: boolean;
    ca?: string[];
    defaults?: Consul$CommonOptions;
    promisify?: boolean | Function;
  }

  declare interface Consul$Consul {
    acl: Consul$Acl;
    agent: Consul$Agent;
    catalog: Consul$Catalog;
    event: Consul$Event;
    health: Consul$Health;
    kv: Consul$Kv;
    session: Consul$Session;
    status: Consul$Status;

    /**
     * Lock helper.
     */
    lock(opts: Consul$Lock.Watch$Options): Consul$Lock;

    /**
     * Watch helper.
     */
    watch(opts: Consul$Watch.Watch$Options): Consul$Watch;
  }

  declare interface Consul$ConsulStatic {
    (opts?: Consul$ConsulOptions): Consul$Consul;
    new(opts?: Consul$ConsulOptions): Consul$Consul;
    Consul$Acl: Consul$AclStatic;
    Consul$Agent: Consul$AgentStatic;
    Consul$Catalog: Consul$CatalogStatic;
    Consul$Event: Consul$EventStatic;
    Consul$Health: Consul$HealthStatic;
    Consul$Kv: Consul$KvStatic;
    Consul$Lock: Consul$LockStatic;
    Consul$Session: Consul$SessionStatic;
    Consul$Status: Consul$StatusStatic;
    Consul$Watch: Consul$WatchStatic;
  }
  declare var Consul$Consul: Consul$Consul.Consul$ConsulStatic;
  declare module.exports: typeof Consul$Consul;
}
