declare module "gapi.client.taskqueue" {
  declare var npm$namespace$gapi: {
    client: typeof npm$namespace$gapi$client
  };

  declare var npm$namespace$gapi$client: {
    load: typeof gapi$client$load,
    taskqueues: typeof gapi$client$taskqueues,
    tasks: typeof gapi$client$tasks
  };

  /**
   * Load TaskQueue API v1beta2
   */
  declare function gapi$client$load(
    name: "taskqueue",
    version: "v1beta2"
  ): PromiseLike<void>;

  declare function gapi$client$load(
    name: "taskqueue",
    version: "v1beta2",
    callback: () => any
  ): void;

  declare var gapi$client$taskqueues: taskqueue$TaskqueuesResource;

  declare var gapi$client$tasks: taskqueue$TasksResource;

  declare interface gapi$client$taskqueue$Task {
    /**
     * Time (in seconds since the epoch) at which the task was enqueued.
     */
    enqueueTimestamp?: string;

    /**
     * Name of the task.
     */
    id?: string;

    /**
     * The kind of object returned, in this case set to task.
     */
    kind?: string;

    /**
     * Time (in seconds since the epoch) at which the task lease will expire. This value is 0 if the task isnt currently leased out to a worker.
     */
    leaseTimestamp?: string;

    /**
     * A bag of bytes which is the task payload. The payload on the JSON side is always Base64 encoded.
     */
    payloadBase64?: string;

    /**
     * Name of the queue that the task is in.
     */
    queueName?: string;

    /**
     * The number of leases applied to this task.
     */
    retry_count?: number;

    /**
     * Tag for the task, could be used later to lease tasks grouped by a specific tag.
     */
    tag?: string;
  }

  declare interface gapi$client$taskqueue$TaskQueue {
    /**
     * ACLs that are applicable to this TaskQueue object.
     */
    acl?: {
      /**
       * Email addresses of users who are "admins" of the TaskQueue. This means they can control the queue, eg set ACLs for the queue.
       */
      adminEmails?: string[],

      /**
       * Email addresses of users who can "consume" tasks from the TaskQueue. This means they can Dequeue and Delete tasks from the queue.
       */
      consumerEmails?: string[],

      /**
       * Email addresses of users who can "produce" tasks into the TaskQueue. This means they can Insert tasks into the queue.
       */
      producerEmails?: string[]
    };

    /**
     * Name of the taskqueue.
     */
    id?: string;

    /**
     * The kind of REST object returned, in this case taskqueue.
     */
    kind?: string;

    /**
     * The number of times we should lease out tasks before giving up on them. If unset we lease them out forever until a worker deletes the task.
     */
    maxLeases?: number;

    /**
     * Statistics for the TaskQueue object in question.
     */
    stats?: {
      /**
       * Number of tasks leased in the last hour.
       */
      leasedLastHour?: string,

      /**
       * Number of tasks leased in the last minute.
       */
      leasedLastMinute?: string,

      /**
       * The timestamp (in seconds since the epoch) of the oldest unfinished task.
       */
      oldestTask?: string,

      /**
       * Number of tasks in the queue.
       */
      totalTasks?: number
    };
  }

  declare interface gapi$client$taskqueue$Tasks {
    /**
     * The actual list of tasks returned as a result of the lease operation.
     */
    items?: gapi$client$taskqueue$Task[];

    /**
     * The kind of object returned, a list of tasks.
     */
    kind?: string;
  }

  declare interface gapi$client$taskqueue$Tasks2 {
    /**
     * The actual list of tasks currently active in the TaskQueue.
     */
    items?: gapi$client$taskqueue$Task[];

    /**
     * The kind of object returned, a list of tasks.
     */
    kind?: string;
  }

  declare interface gapi$client$taskqueue$TaskqueuesResource {
    /**
     * Get detailed information about a TaskQueue.
     */
    get(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * Whether to get stats. Optional.
       */
      getStats?: boolean,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * The project under which the queue lies.
       */
      project: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * The id of the taskqueue to get the properties of.
       */
      taskqueue: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<gapi$client$taskqueue$TaskQueue>;
  }

  declare interface gapi$client$taskqueue$TasksResource {
    /**
     * Delete a task from a TaskQueue.
     */
    delete(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * The project under which the queue lies.
       */
      project: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * The id of the task to delete.
       */
      task: string,

      /**
       * The taskqueue to delete a task from.
       */
      taskqueue: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<void>;

    /**
     * Get a particular task from a TaskQueue.
     */
    get(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * The project under which the queue lies.
       */
      project: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * The task to get properties of.
       */
      task: string,

      /**
       * The taskqueue in which the task belongs.
       */
      taskqueue: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<gapi$client$taskqueue$Task>;

    /**
     * Insert a new task in a TaskQueue
     */
    insert(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * The project under which the queue lies
       */
      project: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * The taskqueue to insert the task into
       */
      taskqueue: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<gapi$client$taskqueue$Task>;

    /**
     * Lease 1 or more tasks from a TaskQueue.
     */
    lease(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * When true, all returned tasks will have the same tag
       */
      groupByTag?: boolean,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * The lease in seconds.
       */
      leaseSecs: number,

      /**
       * The number of tasks to lease.
       */
      numTasks: number,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * The project under which the queue lies.
       */
      project: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * The tag allowed for tasks in the response. Must only be specified if group_by_tag is true. If group_by_tag is true and tag is not specified the tag
       * will be that of the oldest task by eta, i.e. the first available tag
       */
      tag?: string,

      /**
       * The taskqueue to lease a task from.
       */
      taskqueue: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<gapi$client$taskqueue$Tasks>;

    /**
     * List Tasks in a TaskQueue
     */
    list(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * The project under which the queue lies.
       */
      project: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * The id of the taskqueue to list tasks from.
       */
      taskqueue: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<gapi$client$taskqueue$Tasks2>;

    /**
     * Update tasks that are leased out of a TaskQueue. This method supports patch semantics.
     */
    patch(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * The new lease in seconds.
       */
      newLeaseSeconds: number,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * The project under which the queue lies.
       */
      project: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,
      task: string,
      taskqueue: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<gapi$client$taskqueue$Task>;

    /**
     * Update tasks that are leased out of a TaskQueue.
     */
    update(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * The new lease in seconds.
       */
      newLeaseSeconds: number,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * The project under which the queue lies.
       */
      project: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,
      task: string,
      taskqueue: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<gapi$client$taskqueue$Task>;
  }
}
