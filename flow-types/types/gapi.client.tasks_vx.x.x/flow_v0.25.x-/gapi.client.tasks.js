declare module "gapi.client.tasks" {
  declare var npm$namespace$gapi: {
    client: typeof npm$namespace$gapi$client
  };

  declare var npm$namespace$gapi$client: {
    load: typeof gapi$client$load,
    tasklists: typeof gapi$client$tasklists,
    tasks: typeof gapi$client$tasks
  };

  /**
   * Load Tasks API v1
   */
  declare function gapi$client$load(
    name: "tasks",
    version: "v1"
  ): PromiseLike<void>;

  declare function gapi$client$load(
    name: "tasks",
    version: "v1",
    callback: () => any
  ): void;

  declare var gapi$client$tasklists: tasks$TasklistsResource;

  declare var gapi$client$tasks: tasks$TasksResource;

  declare interface gapi$client$tasks$Task {
    /**
     * Completion date of the task (as a RFC 3339 timestamp). This field is omitted if the task has not been completed.
     */
    completed?: string;

    /**
     * Flag indicating whether the task has been deleted. The default if False.
     */
    deleted?: boolean;

    /**
     * Due date of the task (as a RFC 3339 timestamp). Optional.
     */
    due?: string;

    /**
     * ETag of the resource.
     */
    etag?: string;

    /**
     * Flag indicating whether the task is hidden. This is the case if the task had been marked completed when the task list was last cleared. The default is
     * False. This field is read-only.
     */
    hidden?: boolean;

    /**
     * Task identifier.
     */
    id?: string;

    /**
     * Type of the resource. This is always "tasks#task".
     */
    kind?: string;

    /**
     * Collection of links. This collection is read-only.
     */
    links?: Array<{
      /**
       * The description. In HTML speak: Everything between <a> and </a>.
       */
      description?: string,

      /**
       * The URL.
       */
      link?: string,

      /**
       * Type of the link, e.g. "email".
       */
      type?: string
    }>;

    /**
     * Notes describing the task. Optional.
     */
    notes?: string;

    /**
     * Parent task identifier. This field is omitted if it is a top-level task. This field is read-only. Use the "move" method to move the task under a
     * different parent or to the top level.
     */
    parent?: string;

    /**
     * String indicating the position of the task among its sibling tasks under the same parent task or at the top level. If this string is greater than
     * another task's corresponding position string according to lexicographical ordering, the task is positioned after the other task under the same parent
     * task (or at the top level). This field is read-only. Use the "move" method to move the task to another position.
     */
    position?: string;

    /**
     * URL pointing to this task. Used to retrieve, update, or delete this task.
     */
    selfLink?: string;

    /**
     * Status of the task. This is either "needsAction" or "completed".
     */
    status?: string;

    /**
     * Title of the task.
     */
    title?: string;

    /**
     * Last modification time of the task (as a RFC 3339 timestamp).
     */
    updated?: string;
  }

  declare interface gapi$client$tasks$TaskList {
    /**
     * ETag of the resource.
     */
    etag?: string;

    /**
     * Task list identifier.
     */
    id?: string;

    /**
     * Type of the resource. This is always "tasks#taskList".
     */
    kind?: string;

    /**
     * URL pointing to this task list. Used to retrieve, update, or delete this task list.
     */
    selfLink?: string;

    /**
     * Title of the task list.
     */
    title?: string;

    /**
     * Last modification time of the task list (as a RFC 3339 timestamp).
     */
    updated?: string;
  }

  declare interface gapi$client$tasks$TaskLists {
    /**
     * ETag of the resource.
     */
    etag?: string;

    /**
     * Collection of task lists.
     */
    items?: gapi$client$tasks$TaskList[];

    /**
     * Type of the resource. This is always "tasks#taskLists".
     */
    kind?: string;

    /**
     * Token that can be used to request the next page of this result.
     */
    nextPageToken?: string;
  }

  declare interface gapi$client$tasks$Tasks {
    /**
     * ETag of the resource.
     */
    etag?: string;

    /**
     * Collection of tasks.
     */
    items?: gapi$client$tasks$Task[];

    /**
     * Type of the resource. This is always "tasks#tasks".
     */
    kind?: string;

    /**
     * Token used to access the next page of this result.
     */
    nextPageToken?: string;
  }

  declare interface gapi$client$tasks$TasklistsResource {
    /**
     * Deletes the authenticated user's specified task list.
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
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * Task list identifier.
       */
      tasklist: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<void>;

    /**
     * Returns the authenticated user's specified task list.
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
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * Task list identifier.
       */
      tasklist: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<gapi$client$tasks$TaskList>;

    /**
     * Creates a new task list and adds it to the authenticated user's task lists.
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
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<gapi$client$tasks$TaskList>;

    /**
     * Returns all the authenticated user's task lists.
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
       * Maximum number of task lists returned on one page. Optional. The default is 100.
       */
      maxResults?: string,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Token specifying the result page to return. Optional.
       */
      pageToken?: string,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<gapi$client$tasks$TaskLists>;

    /**
     * Updates the authenticated user's specified task list. This method supports patch semantics.
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
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * Task list identifier.
       */
      tasklist: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<gapi$client$tasks$TaskList>;

    /**
     * Updates the authenticated user's specified task list.
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
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * Task list identifier.
       */
      tasklist: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<gapi$client$tasks$TaskList>;
  }

  declare interface gapi$client$tasks$TasksResource {
    /**
     * Clears all completed tasks from the specified task list. The affected tasks will be marked as 'hidden' and no longer be returned by default when
     * retrieving all tasks for a task list.
     */
    clear(request: {
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
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * Task list identifier.
       */
      tasklist: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<void>;

    /**
     * Deletes the specified task from the task list.
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
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * Task identifier.
       */
      task: string,

      /**
       * Task list identifier.
       */
      tasklist: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<void>;

    /**
     * Returns the specified task.
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
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * Task identifier.
       */
      task: string,

      /**
       * Task list identifier.
       */
      tasklist: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<gapi$client$tasks$Task>;

    /**
     * Creates a new task on the specified task list.
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
       * Parent task identifier. If the task is created at the top level, this parameter is omitted. Optional.
       */
      parent?: string,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * Previous sibling task identifier. If the task is created at the first position among its siblings, this parameter is omitted. Optional.
       */
      previous?: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * Task list identifier.
       */
      tasklist: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<gapi$client$tasks$Task>;

    /**
     * Returns all tasks in the specified task list.
     */
    list(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * Upper bound for a task's completion date (as a RFC 3339 timestamp) to filter by. Optional. The default is not to filter by completion date.
       */
      completedMax?: string,

      /**
       * Lower bound for a task's completion date (as a RFC 3339 timestamp) to filter by. Optional. The default is not to filter by completion date.
       */
      completedMin?: string,

      /**
       * Upper bound for a task's due date (as a RFC 3339 timestamp) to filter by. Optional. The default is not to filter by due date.
       */
      dueMax?: string,

      /**
       * Lower bound for a task's due date (as a RFC 3339 timestamp) to filter by. Optional. The default is not to filter by due date.
       */
      dueMin?: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * Maximum number of task lists returned on one page. Optional. The default is 100.
       */
      maxResults?: string,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Token specifying the result page to return. Optional.
       */
      pageToken?: string,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * Flag indicating whether completed tasks are returned in the result. Optional. The default is True.
       */
      showCompleted?: boolean,

      /**
       * Flag indicating whether deleted tasks are returned in the result. Optional. The default is False.
       */
      showDeleted?: boolean,

      /**
       * Flag indicating whether hidden tasks are returned in the result. Optional. The default is False.
       */
      showHidden?: boolean,

      /**
       * Task list identifier.
       */
      tasklist: string,

      /**
       * Lower bound for a task's last modification time (as a RFC 3339 timestamp) to filter by. Optional. The default is not to filter by last modification
       * time.
       */
      updatedMin?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<gapi$client$tasks$Tasks>;

    /**
     * Moves the specified task to another position in the task list. This can include putting it as a child task under a new parent and/or move it to a
     * different position among its sibling tasks.
     */
    move(request: {
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
       * New parent task identifier. If the task is moved to the top level, this parameter is omitted. Optional.
       */
      parent?: string,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * New previous sibling task identifier. If the task is moved to the first position among its siblings, this parameter is omitted. Optional.
       */
      previous?: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * Task identifier.
       */
      task: string,

      /**
       * Task list identifier.
       */
      tasklist: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<gapi$client$tasks$Task>;

    /**
     * Updates the specified task. This method supports patch semantics.
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
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * Task identifier.
       */
      task: string,

      /**
       * Task list identifier.
       */
      tasklist: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<gapi$client$tasks$Task>;

    /**
     * Updates the specified task.
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
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * Task identifier.
       */
      task: string,

      /**
       * Task list identifier.
       */
      tasklist: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<gapi$client$tasks$Task>;
  }
}
