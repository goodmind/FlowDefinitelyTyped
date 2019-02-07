declare module "gapi.client.cloudtasks" {
  declare var npm$namespace$client: {
    load: typeof client$load,
    projects: typeof client$projects
  };

  /**
   * Load Cloud Tasks API v2beta2
   */
  declare function client$load(
    name: "cloudtasks",
    version: "v2beta2"
  ): PromiseLike<void>;

  declare function client$load(
    name: "cloudtasks",
    version: "v2beta2",
    callback: () => any
  ): void;

  declare var client$projects: cloudtasks$cloudtasks$ProjectsResource;

  declare interface cloudtasks$AcknowledgeTaskRequest {
    /**
     * Required.
     *
     * The task's current schedule time, available in the Task.schedule_time
     * returned in PullTasksResponse.tasks or
     * CloudTasks.RenewLease. This restriction is to check that
     * the caller is acknowledging the correct task.
     */
    scheduleTime?: string;
  }

  declare interface cloudtasks$AppEngineHttpRequest {
    /**
     * Task-level setting for App Engine routing.
     *
     * If set, AppEngineHttpTarget.app_engine_routing_override is used for
     * all tasks in the queue, no matter what the setting is for the
     * task-level app_engine_routing.
     */
    appEngineRouting?: cloudtasks$AppEngineRouting;

    /**
     * HTTP request headers.
     *
     * This map contains the header field names and values.
     * Headers can be set when the
     * [task is created](google.cloud.tasks.v2beta2.CloudTasks.CreateTask).
     * Repeated headers are not supported but a header value can contain commas.
     *
     * Cloud Tasks sets some headers to default values:
     *
     * &#42; `User-Agent`: By default, this header is
     * `"AppEngine-Google; (+http://code.google.com/appengine)"`.
     * This header can be modified, but Cloud Tasks will append
     * `"AppEngine-Google; (+http://code.google.com/appengine)"` to the
     * modified `User-Agent`.
     *
     * If the task has an AppEngineHttpRequest.payload, Cloud Tasks sets the
     * following headers:
     *
     * &#42; `Content-Type`: By default, the `Content-Type` header is set to
     * `"application/octet-stream"`. The default can be overridden by explictly
     * setting `Content-Type` to a particular media type when the
     * [task is created](google.cloud.tasks.v2beta2.CloudTasks.CreateTask).
     * For example, `Content-Type` can be set to `"application/json"`.
     * &#42; `Content-Length`: This is computed by Cloud Tasks. This value is
     * output only. It cannot be changed.
     *
     * The headers below cannot be set or overridden:
     *
     * &#42; `Host`
     * &#42; `X-Google-&#42;`
     * &#42; `X-AppEngine-&#42;`
     *
     * In addition, some App Engine headers, which contain
     * task-specific information, are also be sent to the task handler; see
     * [request headers](/appengine/docs/python/taskqueue/push/creating-handlers#reading_request_headers).
     */
    headers?: Record<string, string>;

    /**
     * The HTTP method to use for the request. The default is POST.
     *
     * The app's request handler for the task's target URL must be able to handle
     * HTTP requests with this http_method, otherwise the task attempt will fail
     * with error code 405 (Method Not Allowed). See
     * the Request-Line is not allowed for the resource identified by the
     * Request-URI". See
     * [Writing a push task request handler](/appengine/docs/java/taskqueue/push/creating-handlers#writing_a_push_task_request_handler)
     * and the documentation for the request handlers in the language your app is
     * written in e.g.
     * [python RequestHandler](/appengine/docs/python/tools/webapp/requesthandlerclass).
     */
    httpMethod?: string;

    /**
     * Payload.
     *
     * The payload will be sent as the HTTP message body. A message
     * body, and thus a payload, is allowed only if the HTTP method is
     * POST or PUT. It is an error to set a data payload on a task with
     * an incompatible HttpMethod.
     */
    payload?: string;

    /**
     * The relative URL.
     *
     * The relative URL must begin with "/" and must be a valid HTTP relative URL.
     * It can contain a path and query string arguments.
     * If the relative URL is empty, then the root path "/" will be used.
     * No spaces are allowed, and the maximum length allowed is 2083 characters.
     */
    relativeUrl?: string;
  }

  declare interface cloudtasks$AppEngineHttpTarget {
    /**
     * Overrides for the
     * task-level app_engine_routing.
     *
     * If set, AppEngineHttpTarget.app_engine_routing_override is used for
     * all tasks in the queue, no matter what the setting is for the
     * task-level app_engine_routing.
     */
    appEngineRoutingOverride?: cloudtasks$AppEngineRouting;
  }

  declare interface cloudtasks$AppEngineQueueConfig {
    /**
     * Deprecated. Use AppEngineTarget.app_engine_routing_override.
     */
    appEngineRoutingOverride?: cloudtasks$AppEngineRouting;
  }

  declare interface cloudtasks$AppEngineRouting {
    /**
     * Output only.
     *
     * The host that the task is sent to. For more information, see
     * [How Requests are Routed](/appengine/docs/standard/python/how-requests-are-routed).
     *
     * The host is constructed as:
     *
     *
     * &#42; `host = [application_domain_name]`</br>
     * `| [service] + '.' + [application_domain_name]`</br>
     * `| [version] + '.' + [application_domain_name]`</br>
     * `| [version_dot_service]+ '.' + [application_domain_name]`</br>
     * `| [instance] + '.' + [application_domain_name]`</br>
     * `| [instance_dot_service] + '.' + [application_domain_name]`</br>
     * `| [instance_dot_version] + '.' + [application_domain_name]`</br>
     * `| [instance_dot_version_dot_service] + '.' + [application_domain_name]`
     *
     * &#42; `application_domain_name` = The domain name of the app, for
     * example <app-id>.appspot.com, which is associated with the
     * queue's project ID. Some tasks which were created using the App Engine
     * SDK use a custom domain name.
     *
     * &#42; `service =` AppEngineRouting.service
     *
     * &#42; `version =` AppEngineRouting.version
     *
     * &#42; `version_dot_service =`
     * AppEngineRouting.version `+ '.' +` AppEngineRouting.service
     *
     * &#42; `instance =` AppEngineRouting.instance
     *
     * &#42; `instance_dot_service =`
     * AppEngineRouting.instance `+ '.' +` AppEngineRouting.service
     *
     * &#42; `instance_dot_version =`
     * AppEngineRouting.instance `+ '.' +` AppEngineRouting.version
     *
     * &#42; `instance_dot_version_dot_service =`
     * AppEngineRouting.instance `+ '.' +`
     * AppEngineRouting.version `+ '.' +` AppEngineRouting.service
     *
     * If AppEngineRouting.service is empty, then the task will be sent
     * to the service which is the default service when the task is attempted.
     *
     * If AppEngineRouting.version is empty, then the task will be sent
     * to the version which is the default version when the task is attempted.
     *
     * If AppEngineRouting.instance is empty, then the task will be sent
     * to an instance which is available when the task is attempted.
     *
     * When AppEngineRouting.service is "default",
     * AppEngineRouting.version is "default", and
     * AppEngineRouting.instance is empty, AppEngineRouting.host is
     * shortened to just the `application_domain_name`.
     *
     * If AppEngineRouting.service, AppEngineRouting.version, or
     * AppEngineRouting.instance is invalid, then the task will be sent
     * to the default version of the default service when the task is attempted.
     */
    host?: string;

    /**
     * App instance.
     *
     * By default, the task is sent to an instance which is available when
     * the task is attempted.
     *
     * Requests can only be sent to a specific instance if
     * [manual scaling is used in App Engine Standard](/appengine/docs/python/an-overview-of-app-engine?hl=en_US#scaling_types_and_instance_classes).
     * App Engine Flex does not support instances. For more information, see
     * [App Engine Standard request routing](/appengine/docs/standard/python/how-requests-are-routed)
     * and [App Engine Flex request routing](/appengine/docs/flexible/python/how-requests-are-routed).
     */
    instance?: string;

    /**
     * App service.
     *
     * By default, the task is sent to the service which is the default
     * service when the task is attempted ("default").
     *
     * For some queues or tasks which were created using the App Engine Task Queue
     * API, AppEngineRouting.host is not parsable into
     * AppEngineRouting.service, AppEngineRouting.version, and
     * AppEngineRouting.instance. For example, some tasks which were created
     * using the App Engine SDK use a custom domain name; custom domains are not
     * parsed by Cloud Tasks. If AppEngineRouting.host is not parsable, then
     * AppEngineRouting.service, AppEngineRouting.version, and
     * AppEngineRouting.instance are the empty string.
     */
    service?: string;

    /**
     * App version.
     *
     * By default, the task is sent to the version which is the default
     * version when the task is attempted ("default").
     *
     * For some queues or tasks which were created using the App Engine Task Queue
     * API, AppEngineRouting.host is not parsable into
     * AppEngineRouting.service, AppEngineRouting.version, and
     * AppEngineRouting.instance. For example, some tasks which were created
     * using the App Engine SDK use a custom domain name; custom domains are not
     * parsed by Cloud Tasks. If AppEngineRouting.host is not parsable, then
     * AppEngineRouting.service, AppEngineRouting.version, and
     * AppEngineRouting.instance are the empty string.
     */
    version?: string;
  }

  declare interface cloudtasks$AppEngineTaskTarget {
    /**
     * Deprecated. Use AppEngineHttpRequest.app_engine_routing.
     */
    appEngineRouting?: cloudtasks$AppEngineRouting;

    /**
     * Deprecated. Use AppEngineHttpRequest.headers.
     */
    headers?: Record<string, string>;

    /**
     * Deprecated. Use AppEngineHttpRequest.http_method.
     */
    httpMethod?: string;

    /**
     * Deprecated. Use AppEngineHttpRequest.payload.
     */
    payload?: string;

    /**
     * Deprecated. Use AppEngineHttpRequest.relative_url.
     */
    relativeUrl?: string;
  }

  declare interface cloudtasks$AttemptStatus {
    /**
     * Output only.
     *
     * The time that this attempt was dispatched.
     *
     * `dispatch_time` will be truncated to the nearest microsecond.
     */
    dispatchTime?: string;

    /**
     * Output only.
     *
     * The response from the target for this attempt.
     *
     * If the task has not been attempted or the task is currently running
     * then the response status is google.rpc.Code.UNKNOWN.
     */
    responseStatus?: cloudtasks$Status;

    /**
     * Output only.
     *
     * The time that this attempt response was received.
     *
     * `response_time` will be truncated to the nearest microsecond.
     */
    responseTime?: string;

    /**
     * Output only.
     *
     * The time that this attempt was scheduled.
     *
     * `schedule_time` will be truncated to the nearest microsecond.
     */
    scheduleTime?: string;
  }

  declare interface cloudtasks$Binding {
    /**
     * Specifies the identities requesting access for a Cloud Platform resource.
     * `members` can have the following values:
     *
     * &#42; `allUsers`: A special identifier that represents anyone who is
     * on the internet; with or without a Google account.
     *
     * &#42; `allAuthenticatedUsers`: A special identifier that represents anyone
     * who is authenticated with a Google account or a service account.
     *
     * &#42; `user:{emailid}`: An email address that represents a specific Google
     * account. For example, `alice@gmail.com` or `joe@example.com`.
     *
     *
     * &#42; `serviceAccount:{emailid}`: An email address that represents a service
     * account. For example, `my-other-app@appspot.gserviceaccount.com`.
     *
     * &#42; `group:{emailid}`: An email address that represents a Google group.
     * For example, `admins@example.com`.
     *
     *
     * &#42; `domain:{domain}`: A Google Apps domain name that represents all the
     * users of that domain. For example, `google.com` or `example.com`.
     */
    members?: string[];

    /**
     * Role that is assigned to `members`.
     * For example, `roles/viewer`, `roles/editor`, or `roles/owner`.
     * Required
     */
    role?: string;
  }

  declare interface cloudtasks$CancelLeaseRequest {
    /**
     * The response_view specifies which subset of the Task will be
     * returned.
     *
     * By default response_view is Task.View.BASIC; not all
     * information is retrieved by default because some data, such as
     * payloads, might be desirable to return only when needed because
     * of its large size or because of the sensitivity of data that it
     * contains.
     *
     * Authorization for Task.View.FULL requires `cloudtasks.tasks.fullView`
     * [Google IAM](/iam/) permission on the
     * Task.name resource.
     */
    responseView?: string;

    /**
     * Required.
     *
     * The task's current schedule time, available in the Task.schedule_time
     * returned in PullTasksResponse.tasks or
     * CloudTasks.RenewLease. This restriction is to check that
     * the caller is canceling the correct task.
     */
    scheduleTime?: string;
  }

  declare interface cloudtasks$CreateTaskRequest {
    /**
     * The response_view specifies which subset of the Task will be
     * returned.
     *
     * By default response_view is Task.View.BASIC; not all
     * information is retrieved by default because some data, such as
     * payloads, might be desirable to return only when needed because
     * of its large size or because of the sensitivity of data that it
     * contains.
     *
     * Authorization for Task.View.FULL requires `cloudtasks.tasks.fullView`
     * [Google IAM](/iam/) permission on the
     * Task.name resource.
     */
    responseView?: string;

    /**
     * Required.
     *
     * The task to add.
     *
     * Task names have the following format:
     * `projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID/tasks/TASK_ID`.
     * The user can optionally specify a name for the task in
     * Task.name. If a name is not specified then the system will
     * generate a random unique task id, which will be returned in the
     * response's Task.name.
     *
     * If Task.schedule_time is not set or is in the past then Cloud
     * Tasks will set it to the current time.
     *
     * Task De-duplication:
     *
     * Explicitly specifying a task ID enables task de-duplication.  If
     * a task's ID is identical to that of an existing task or a task
     * that was deleted or completed recently then the call will fail
     * with google.rpc.Code.ALREADY_EXISTS. If the task's queue was
     * created using Cloud Tasks, then another task with the same name
     * can't be created for ~1hour after the original task was deleted
     * or completed. If the task's queue was created using queue.yaml or
     * queue.xml, then another task with the same name can't be created
     * for ~9days after the original task was deleted or completed.
     *
     * Because there is an extra lookup cost to identify duplicate task
     * names, these CloudTasks.CreateTask calls have significantly
     * increased latency. Using hashed strings for the task id or for
     * the prefix of the task id is recommended. Choosing task ids that
     * are sequential or have sequential prefixes, for example using a
     * timestamp, causes an increase in latency and error rates in all
     * task commands. The infrastructure relies on an approximately
     * uniform distribution of task ids to store and serve tasks
     * efficiently.
     */
    task?: cloudtasks$Task;
  }

  declare interface cloudtasks$ListLocationsResponse {
    /**
     * A list of locations that matches the specified filter in the request.
     */
    locations?: cloudtasks$Location[];

    /**
     * The standard List next-page token.
     */
    nextPageToken?: string;
  }

  declare interface cloudtasks$ListQueuesResponse {
    /**
     * A token to retrieve next page of results.
     *
     * To return the next page of results, call
     * CloudTasks.ListQueues with this value as the
     * ListQueuesRequest.page_token.
     *
     * If the next_page_token is empty, there are no more results.
     *
     * The page token is valid for only 2 hours.
     */
    nextPageToken?: string;

    /**
     * The list of queues.
     */
    queues?: cloudtasks$Queue[];
  }

  declare interface cloudtasks$ListTasksResponse {
    /**
     * A token to retrieve next page of results.
     *
     * To return the next page of results, call
     * CloudTasks.ListTasks with this value as the
     * ListTasksRequest.page_token.
     *
     * If the next_page_token is empty, there are no more results.
     */
    nextPageToken?: string;

    /**
     * The list of tasks.
     */
    tasks?: cloudtasks$Task[];
  }

  declare interface cloudtasks$Location {
    /**
     * Cross-service attributes for the location. For example
     *
     * {"cloud.googleapis.com/region": "us-east1"}
     */
    labels?: Record<string, string>;

    /**
     * The canonical id for this location. For example: `"us-east1"`.
     */
    locationId?: string;

    /**
     * Service-specific metadata. For example the available capacity at the given
     * location.
     */
    metadata?: Record<string, any>;

    /**
     * Resource name for the location, which may vary between implementations.
     * For example: `"projects/example-project/locations/us-east1"`
     */
    name?: string;
  }

  declare interface cloudtasks$Policy {
    /**
     * Associates a list of `members` to a `role`.
     * `bindings` with no members will result in an error.
     */
    bindings?: cloudtasks$Binding[];

    /**
     * `etag` is used for optimistic concurrency control as a way to help
     * prevent simultaneous updates of a policy from overwriting each other.
     * It is strongly suggested that systems make use of the `etag` in the
     * read-modify-write cycle to perform policy updates in order to avoid race
     * conditions: An `etag` is returned in the response to `getIamPolicy`, and
     * systems are expected to put that etag in the request to `setIamPolicy` to
     * ensure that their change will be applied to the same version of the policy.
     *
     * If no `etag` is provided in the call to `setIamPolicy`, then the existing
     * policy is overwritten blindly.
     */
    etag?: string;

    /**
     * Version of the `Policy`. The default version is 0.
     */
    version?: number;
  }

  declare interface cloudtasks$PullMessage {
    /**
     * A data payload consumed by the task worker to execute the task.
     */
    payload?: string;

    /**
     * A meta-data tag for this task.
     *
     * This value is used by CloudTasks.PullTasks calls when
     * PullTasksRequest.filter is `tag=<tag>`.
     *
     * The tag must be less than 500 bytes.
     */
    tag?: string;
  }

  declare interface cloudtasks$PullTaskTarget {
    /**
     * Deprecated. Use PullMessage.payload.
     */
    payload?: string;

    /**
     * Deprecated. Use PullMessage.tag.
     */
    tag?: string;
  }

  declare interface cloudtasks$PullTasksRequest {
    /**
     * `filter` can be used to specify a subset of tasks to lease.
     *
     * When `filter` is set to `tag=<my-tag>` then the
     * PullTasksResponse will contain only tasks whose
     * PullMessage.tag is equal to `<my-tag>`. `<my-tag>` must be less than
     * 500 bytes.
     *
     * When `filter` is set to `tag_function=oldest_tag()`, only tasks which have
     * the same tag as the task with the oldest schedule_time will be returned.
     *
     * Grammar Syntax:
     *
     * &#42; `filter = "tag=" tag | "tag_function=" function`
     *
     * &#42; `tag = string | bytes`
     *
     * &#42; `function = "oldest_tag()"`
     *
     * The `oldest_tag()` function returns tasks which have the same tag as the
     * oldest task (ordered by schedule time).
     */
    filter?: string;

    /**
     * The duration of the lease.
     *
     * Each task returned in the PullTasksResponse will have its
     * Task.schedule_time set to the current time plus the
     * `lease_duration`. A task that has been returned in a
     * PullTasksResponse is leased -- that task will not be
     * returned in a different PullTasksResponse before the
     * Task.schedule_time.
     *
     * After the lease holder has successfully finished the work
     * associated with the task, the lease holder must call
     * CloudTasks.AcknowledgeTask. If the task is not acknowledged
     * via CloudTasks.AcknowledgeTask before the
     * Task.schedule_time then it will be returned in a later
     * PullTasksResponse so that another lease holder can process
     * it.
     *
     * The maximum lease duration is 1 week.
     * `lease_duration` will be truncated to the nearest second.
     */
    leaseDuration?: string;

    /**
     * The maximum number of tasks to lease. The maximum that can be
     * requested is 1000.
     */
    maxTasks?: number;

    /**
     * The response_view specifies which subset of the Task will be
     * returned.
     *
     * By default response_view is Task.View.BASIC; not all
     * information is retrieved by default because some data, such as
     * payloads, might be desirable to return only when needed because
     * of its large size or because of the sensitivity of data that it
     * contains.
     *
     * Authorization for Task.View.FULL requires `cloudtasks.tasks.fullView`
     * [Google IAM](/iam/) permission on the
     * Task.name resource.
     */
    responseView?: string;
  }

  declare interface cloudtasks$PullTasksResponse {
    /**
     * The leased tasks.
     */
    tasks?: cloudtasks$Task[];
  }

  declare interface cloudtasks$Queue {
    /**
     * App Engine HTTP target.
     *
     * An App Engine queue is a queue that has an AppEngineHttpTarget.
     */
    appEngineHttpTarget?: cloudtasks$AppEngineHttpTarget;

    /**
     * Deprecated. Use Queue.app_engine_http_target.
     */
    appEngineQueueConfig?: cloudtasks$AppEngineQueueConfig;

    /**
     * The queue name.
     *
     * The queue name must have the following format:
     * `projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID`
     *
     * &#42; `PROJECT_ID` can contain uppercase and lowercase letters,
     * numbers, hyphens, colons, and periods; that is, it must match
     * the regular expression: `[a-zA-Z\\d-:\\.]+`.
     * &#42; `QUEUE_ID` can contain uppercase and lowercase letters,
     * numbers, and hyphens; that is, it must match the regular
     * expression: `[a-zA-Z\\d-]+`. The maximum length is 100
     * characters.
     *
     * Caller-specified and required in CreateQueueRequest, after which
     * it becomes output only.
     */
    name?: string;

    /**
     * Deprecated. Use Queue.pull_target.
     */
    pullQueueConfig?: any;

    /**
     * Pull target.
     *
     * A pull queue is a queue that has a PullTarget.
     */
    pullTarget?: any;

    /**
     * Output only.
     *
     * The last time this queue was purged. All tasks that were
     * created before this time were purged.
     *
     * A queue can be purged using CloudTasks.PurgeQueue, the
     * [App Engine Task Queue SDK, or the Cloud
     * Console](/appengine/docs/standard/python/taskqueue/push/deleting-tasks-and-queues#purging_all_tasks_from_a_queue).
     *
     * Purge time will be truncated to the nearest microsecond. Purge
     * time will be zero if the queue has never been purged.
     */
    purgeTime?: string;

    /**
     * Output only.
     *
     * The state of the queue.
     *
     * `queue_state` can only be changed by called
     * CloudTasks.PauseQueue, CloudTasks.ResumeQueue, or uploading
     * [queue.yaml](/appengine/docs/python/config/queueref).
     * CloudTasks.UpdateQueue cannot be used to change `queue_state`.
     */
    queueState?: string;

    /**
     * Rate limits for task dispatches.
     *
     * Queue.rate_limits and Queue.retry_config are related because they
     * both control task attempts however they control how tasks are attempted in
     * different ways:
     *
     * &#42; Queue.rate_limits controls the total rate of dispatches from a queue
     * (i.e. all traffic dispatched from the queue, regardless of whether the
     * dispatch is from a first attempt or a retry).
     * &#42; Queue.retry_config controls what happens to particular a task after
     * its first attempt fails. That is, Queue.retry_config controls task
     * retries (the second attempt, third attempt, etc).
     */
    rateLimits?: cloudtasks$RateLimits;

    /**
     * Settings that determine the retry behavior.
     *
     * &#42; For tasks created using Cloud Tasks: the queue-level retry settings
     * apply to all tasks in the queue that were created using Cloud Tasks.
     * Retry settings cannot be set on individual tasks.
     * &#42; For tasks created using the App Engine SDK: the queue-level retry
     * settings apply to all tasks in the queue which do not have retry settings
     * explicitly set on the task and were created by the App Engine SDK. See
     * [App Engine documentation](/appengine/docs/standard/python/taskqueue/push/retrying-tasks).
     */
    retryConfig?: cloudtasks$RetryConfig;
  }

  declare interface cloudtasks$RateLimits {
    /**
     * Output only.
     *
     * The max burst size limits how fast the queue is processed when
     * many tasks are in the queue and the rate is high. This field
     * allows the queue to have a high rate so processing starts shortly
     * after a task is enqueued, but still limits resource usage when
     * many tasks are enqueued in a short period of time.
     *
     * &#42; For App Engine queues, if
     * RateLimits.max_tasks_dispatched_per_second is 1, this
     * field is 10; otherwise this field is
     * RateLimits.max_tasks_dispatched_per_second / 5.
     * &#42; For pull queues, this field is output only and always 10,000.
     *
     * Note: For App Engine queues that were created through
     * `queue.yaml/xml`, `max_burst_size` might not have the same
     * settings as specified above; CloudTasks.UpdateQueue can be
     * used to set `max_burst_size` only to the values specified above.
     *
     * This field has the same meaning as
     * [bucket_size in queue.yaml](/appengine/docs/standard/python/config/queueref#bucket_size).
     */
    maxBurstSize?: number;

    /**
     * The maximum number of concurrent tasks that Cloud Tasks allows
     * to be dispatched for this queue. After this threshold has been
     * reached, Cloud Tasks stops dispatching tasks until the number of
     * concurrent requests decreases.
     *
     * The maximum allowed value is 5,000.
     *
     * &#42; For App Engine queues, this field is 10 by default.
     * &#42; For pull queues, this field is output only and always -1, which
     * indicates no limit.
     *
     * This field has the same meaning as
     * [max_concurrent_requests in queue.yaml](/appengine/docs/standard/python/config/queueref#max_concurrent_requests).
     */
    maxConcurrentTasks?: number;

    /**
     * The maximum rate at which tasks are dispatched from this
     * queue.
     *
     * The maximum allowed value is 500.
     *
     * &#42; For App Engine queues, this field is 1 by default.
     * &#42; For pull queues, this field is output only and always 10,000.
     *
     * This field has the same meaning as
     * [rate in queue.yaml](/appengine/docs/standard/python/config/queueref#rate).
     */
    maxTasksDispatchedPerSecond?: number;
  }

  declare interface cloudtasks$RenewLeaseRequest {
    /**
     * Required.
     *
     * The desired new lease duration, starting from now.
     *
     *
     * The maximum lease duration is 1 week.
     * `new_lease_duration` will be truncated to the nearest second.
     */
    newLeaseDuration?: string;

    /**
     * The response_view specifies which subset of the Task will be
     * returned.
     *
     * By default response_view is Task.View.BASIC; not all
     * information is retrieved by default because some data, such as
     * payloads, might be desirable to return only when needed because
     * of its large size or because of the sensitivity of data that it
     * contains.
     *
     * Authorization for Task.View.FULL requires `cloudtasks.tasks.fullView`
     * [Google IAM](/iam/) permission on the
     * Task.name resource.
     */
    responseView?: string;

    /**
     * Required.
     *
     * The task's current schedule time, available in the Task.schedule_time
     * returned in PullTasksResponse.tasks or
     * CloudTasks.RenewLease. This restriction is to check that
     * the caller is renewing the correct task.
     */
    scheduleTime?: string;
  }

  declare interface cloudtasks$RetryConfig {
    /**
     * The maximum number of attempts for a task.
     *
     * Cloud Tasks will attempt the task `max_attempts` times (that
     * is, if the first attempt fails, then there will be
     * `max_attempts - 1` retries).  Must be > 0.
     */
    maxAttempts?: number;

    /**
     * The maximum amount of time to wait before retrying a task after
     * it fails. The default is 1 hour.
     *
     * &#42; For [App Engine queues](google.cloud.tasks.v2beta2.AppEngineHttpTarget),
     * this field is 1 hour by default.
     * &#42; For [pull queues](google.cloud.tasks.v2beta2.PullTarget), this field
     * is output only and always 0.
     *
     * `max_backoff` will be truncated to the nearest second.
     *
     * This field has the same meaning as
     * [max_backoff_seconds in queue.yaml](/appengine/docs/standard/python/config/queueref#retry_parameters).
     */
    maxBackoff?: string;

    /**
     * The time between retries increases exponentially `max_doublings` times.
     * `max_doublings` is maximum number of times that the interval between failed
     * task retries will be doubled before the interval increases linearly.
     * After max_doublings intervals, the retry interval will be
     * 2^(max_doublings - 1) &#42; RetryConfig.min_backoff.
     *
     * &#42; For [App Engine queues](google.cloud.tasks.v2beta2.AppEngineHttpTarget),
     * this field is 16 by default.
     * &#42; For [pull queues](google.cloud.tasks.v2beta2.PullTarget), this field
     * is output only and always 0.
     *
     * This field has the same meaning as
     * [max_doublings in queue.yaml](/appengine/docs/standard/python/config/queueref#retry_parameters).
     */
    maxDoublings?: number;

    /**
     * If positive, `max_retry_duration` specifies the time limit for retrying a
     * failed task, measured from when the task was first attempted. Once
     * `max_retry_duration` time has passed &#42;and&#42; the task has been attempted
     * RetryConfig.max_attempts times, no further attempts will be made and
     * the task will be deleted.
     *
     * If zero, then the task age is unlimited.
     *
     * &#42; For [App Engine queues](google.cloud.tasks.v2beta2.AppEngineHttpTarget),
     * this field is 0 seconds by default.
     * &#42; For [pull queues](google.cloud.tasks.v2beta2.PullTarget), this
     * field is output only and always 0.
     *
     * `max_retry_duration` will be truncated to the nearest second.
     *
     * This field has the same meaning as
     * [task_age_limit in queue.yaml](/appengine/docs/standard/python/config/queueref#retry_parameters).
     */
    maxRetryDuration?: string;

    /**
     * The minimum amount of time to wait before retrying a task after
     * it fails.
     *
     * &#42; For [App Engine queues](google.cloud.tasks.v2beta2.AppEngineHttpTarget),
     * this field is 0.1 seconds by default.
     * &#42; For [pull queues](google.cloud.tasks.v2beta2.PullTarget), this
     * field is output only and always 0.
     *
     * `min_backoff` will be truncated to the nearest second.
     *
     * This field has the same meaning as
     * [min_backoff_seconds in queue.yaml](/appengine/docs/standard/python/config/queueref#retry_parameters).
     */
    minBackoff?: string;

    /**
     * If true, then the number of attempts is unlimited.
     */
    unlimitedAttempts?: boolean;
  }

  declare interface cloudtasks$RunTaskRequest {
    /**
     * The response_view specifies which subset of the Task will be
     * returned.
     *
     * By default response_view is Task.View.BASIC; not all
     * information is retrieved by default because some data, such as
     * payloads, might be desirable to return only when needed because
     * of its large size or because of the sensitivity of data that it
     * contains.
     *
     * Authorization for Task.View.FULL requires `cloudtasks.tasks.fullView`
     * [Google IAM](/iam/) permission on the
     * Task.name resource.
     */
    responseView?: string;
  }

  declare interface cloudtasks$SetIamPolicyRequest {
    /**
     * REQUIRED: The complete policy to be applied to the `resource`. The size of
     * the policy is limited to a few 10s of KB. An empty policy is a
     * valid policy but certain Cloud Platform services (such as Projects)
     * might reject them.
     */
    policy?: cloudtasks$Policy;
  }

  declare interface cloudtasks$Status {
    /**
     * The status code, which should be an enum value of google.rpc.Code.
     */
    code?: number;

    /**
     * A list of messages that carry the error details.  There is a common set of
     * message types for APIs to use.
     */
    details?: Array<Record<string, any>>;

    /**
     * A developer-facing error message, which should be in English. Any
     * user-facing error message should be localized and sent in the
     * google.rpc.Status.details field, or localized by the client.
     */
    message?: string;
  }

  declare interface cloudtasks$Task {
    /**
     * App Engine HTTP request that is sent to the task's target. Can be set
     * only if Queue.app_engine_http_target is set.
     *
     * An App Engine task is a task that has AppEngineHttpRequest set.
     */
    appEngineHttpRequest?: cloudtasks$AppEngineHttpRequest;

    /**
     * Deprecated. Use Task.app_engine_http_request.
     */
    appEngineTaskTarget?: cloudtasks$AppEngineTaskTarget;

    /**
     * Output only.
     *
     * The time that the task was created.
     *
     * `create_time` will be truncated to the nearest second.
     */
    createTime?: string;

    /**
     * The task name.
     *
     * The task name must have the following format:
     * `projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID/tasks/TASK_ID`
     *
     * &#42; `PROJECT_ID` can contain uppercase and lowercase letters,
     * numbers, hyphens, colons, and periods; that is, it must match
     * the regular expression: `[a-zA-Z\\d-:\\.]+`.
     * &#42; `QUEUE_ID` can contain uppercase and lowercase letters,
     * numbers, and hyphens; that is, it must match the regular
     * expression: `[a-zA-Z\\d-]+`. The maximum length is 100
     * characters.
     * &#42; `TASK_ID` contain uppercase and lowercase letters, numbers,
     * underscores, and hyphens; that is, it must match the regular
     * expression: `[a-zA-Z\\d_-]+`. The maximum length is 500
     * characters.
     *
     * Optionally caller-specified in CreateTaskRequest.
     */
    name?: string;

    /**
     * Pull message contains data that should be used by the caller of
     * CloudTasks.PullTasks to process the task. Can be set only if
     * Queue.pull_target is set.
     *
     * A pull task is a task that has PullMessage set.
     */
    pullMessage?: cloudtasks$PullMessage;

    /**
     * Deprecated. Use Task.pull_message.
     */
    pullTaskTarget?: cloudtasks$PullTaskTarget;

    /**
     * The time when the task is scheduled to be attempted.
     *
     * For pull queues, this is the time when the task is available to
     * be leased; if a task is currently leased, this is the time when
     * the current lease expires, that is, the time that the task was
     * leased plus the PullTasksRequest.lease_duration.
     *
     * For App Engine queues, this is when the task will be attempted or retried.
     *
     * `schedule_time` will be truncated to the nearest microsecond.
     */
    scheduleTime?: string;

    /**
     * Output only.
     *
     * Task status.
     */
    taskStatus?: cloudtasks$TaskStatus;

    /**
     * Output only.
     *
     * The view specifies which subset of the Task has been
     * returned.
     */
    view?: string;
  }

  declare interface cloudtasks$TaskStatus {
    /**
     * Output only.
     *
     * The number of attempts dispatched. This count includes tasks which have
     * been dispatched but haven't received a response.
     */
    attemptDispatchCount?: string;

    /**
     * Output only.
     *
     * The number of attempts which have received a response.
     *
     * This field is not calculated for
     * [pull tasks](google.cloud.tasks.v2beta2.PullTaskTarget).
     */
    attemptResponseCount?: string;

    /**
     * Output only.
     *
     * The status of the task's first attempt.
     *
     * Only AttemptStatus.dispatch_time will be set.
     * The other AttemptStatus information is not retained by Cloud Tasks.
     *
     * This field is not calculated for
     * [pull tasks](google.cloud.tasks.v2beta2.PullTaskTarget).
     */
    firstAttemptStatus?: cloudtasks$AttemptStatus;

    /**
     * Output only.
     *
     * The status of the task's last attempt.
     *
     * This field is not calculated for
     * [pull tasks](google.cloud.tasks.v2beta2.PullTaskTarget).
     */
    lastAttemptStatus?: cloudtasks$AttemptStatus;
  }

  declare interface cloudtasks$TestIamPermissionsRequest {
    /**
     * The set of permissions to check for the `resource`. Permissions with
     * wildcards (such as '&#42;' or 'storage.&#42;') are not allowed. For more
     * information see
     * [IAM Overview](https://cloud.google.com/iam/docs/overview#permissions).
     */
    permissions?: string[];
  }

  declare interface cloudtasks$TestIamPermissionsResponse {
    /**
     * A subset of `TestPermissionsRequest.permissions` that the caller is
     * allowed.
     */
    permissions?: string[];
  }

  declare interface cloudtasks$TasksResource {
    /**
     * Acknowledges a pull task.
     *
     * The lease holder, that is, the entity that received this task in
     * a PullTasksResponse, must call this method to indicate that
     * the work associated with the task has finished.
     *
     * The lease holder must acknowledge a task within the
     * PullTasksRequest.lease_duration or the lease will expire and
     * the task will become ready to be returned in a different
     * PullTasksResponse. After the task is acknowledged, it will
     * not be returned by a later CloudTasks.PullTasks,
     * CloudTasks.GetTask, or CloudTasks.ListTasks.
     */
    acknowledge(request: {
      /**
       * V1 error format.
       */
      "$.xgafv"?: string,

      /**
       * OAuth access token.
       */
      access_token?: string,

      /**
       * Data format for response.
       */
      alt?: string,

      /**
       * OAuth bearer token.
       */
      bearer_token?: string,

      /**
       * JSONP
       */
      callback?: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * Required.
       *
       * The task name. For example:
       * `projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID/tasks/TASK_ID`
       */
      name: string,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Pretty-print response.
       */
      pp?: boolean,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       */
      quotaUser?: string,

      /**
       * Legacy upload protocol for media (e.g. "media", "multipart").
       */
      uploadType?: string,

      /**
       * Upload protocol for media (e.g. "raw", "multipart").
       */
      upload_protocol?: string
    }): Request<{}>;

    /**
     * Cancel a pull task's lease.
     *
     * The lease holder can use this method to cancel a task's lease
     * by setting Task.schedule_time to now. This will make the task
     * available to be leased to the next caller of CloudTasks.PullTasks.
     */
    cancelLease(request: {
      /**
       * V1 error format.
       */
      "$.xgafv"?: string,

      /**
       * OAuth access token.
       */
      access_token?: string,

      /**
       * Data format for response.
       */
      alt?: string,

      /**
       * OAuth bearer token.
       */
      bearer_token?: string,

      /**
       * JSONP
       */
      callback?: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * Required.
       *
       * The task name. For example:
       * `projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID/tasks/TASK_ID`
       */
      name: string,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Pretty-print response.
       */
      pp?: boolean,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       */
      quotaUser?: string,

      /**
       * Legacy upload protocol for media (e.g. "media", "multipart").
       */
      uploadType?: string,

      /**
       * Upload protocol for media (e.g. "raw", "multipart").
       */
      upload_protocol?: string
    }): Request<cloudtasks$Task>;

    /**
     * Creates a task and adds it to a queue.
     *
     * To add multiple tasks at the same time, use
     * [HTTP batching](/storage/docs/json_api/v1/how-tos/batch)
     * or the batching documentation for your client library, for example
     * https://developers.google.com/api-client-library/python/guide/batch.
     *
     * Tasks cannot be updated after creation; there is no UpdateTask command.
     *
     * &#42; For [App Engine queues](google.cloud.tasks.v2beta2.AppEngineHttpTarget),
     * the maximum task size is 100KB.
     * &#42; For [pull queues](google.cloud.tasks.v2beta2.PullTarget), this
     * the maximum task size is 1MB.
     */
    create(request: {
      /**
       * V1 error format.
       */
      "$.xgafv"?: string,

      /**
       * OAuth access token.
       */
      access_token?: string,

      /**
       * Data format for response.
       */
      alt?: string,

      /**
       * OAuth bearer token.
       */
      bearer_token?: string,

      /**
       * JSONP
       */
      callback?: string,

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
       * Required.
       *
       * The queue name. For example:
       * `projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID`
       *
       * The queue must already exist.
       */
      parent: string,

      /**
       * Pretty-print response.
       */
      pp?: boolean,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       */
      quotaUser?: string,

      /**
       * Legacy upload protocol for media (e.g. "media", "multipart").
       */
      uploadType?: string,

      /**
       * Upload protocol for media (e.g. "raw", "multipart").
       */
      upload_protocol?: string
    }): Request<cloudtasks$Task>;

    /**
     * Deletes a task.
     *
     * A task can be deleted if it is scheduled or dispatched. A task
     * cannot be deleted if it has completed successfully or permanently
     * failed.
     */
    delete(request: {
      /**
       * V1 error format.
       */
      "$.xgafv"?: string,

      /**
       * OAuth access token.
       */
      access_token?: string,

      /**
       * Data format for response.
       */
      alt?: string,

      /**
       * OAuth bearer token.
       */
      bearer_token?: string,

      /**
       * JSONP
       */
      callback?: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * Required.
       *
       * The task name. For example:
       * `projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID/tasks/TASK_ID`
       */
      name: string,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Pretty-print response.
       */
      pp?: boolean,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       */
      quotaUser?: string,

      /**
       * Legacy upload protocol for media (e.g. "media", "multipart").
       */
      uploadType?: string,

      /**
       * Upload protocol for media (e.g. "raw", "multipart").
       */
      upload_protocol?: string
    }): Request<{}>;

    /**
     * Gets a task.
     */
    get(request: {
      /**
       * V1 error format.
       */
      "$.xgafv"?: string,

      /**
       * OAuth access token.
       */
      access_token?: string,

      /**
       * Data format for response.
       */
      alt?: string,

      /**
       * OAuth bearer token.
       */
      bearer_token?: string,

      /**
       * JSONP
       */
      callback?: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * Required.
       *
       * The task name. For example:
       * `projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID/tasks/TASK_ID`
       */
      name: string,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Pretty-print response.
       */
      pp?: boolean,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       */
      quotaUser?: string,

      /**
       * The response_view specifies which subset of the Task will be
       * returned.
       *
       * By default response_view is Task.View.BASIC; not all
       * information is retrieved by default because some data, such as
       * payloads, might be desirable to return only when needed because
       * of its large size or because of the sensitivity of data that it
       * contains.
       *
       * Authorization for Task.View.FULL requires `cloudtasks.tasks.fullView`
       * [Google IAM](/iam/) permission on the
       * Task.name resource.
       */
      responseView?: string,

      /**
       * Legacy upload protocol for media (e.g. "media", "multipart").
       */
      uploadType?: string,

      /**
       * Upload protocol for media (e.g. "raw", "multipart").
       */
      upload_protocol?: string
    }): Request<cloudtasks$Task>;

    /**
     * Lists the tasks in a queue.
     *
     * By default response_view is Task.View.BASIC; not all
     * information is retrieved by default due to performance
     * considerations; ListTasksRequest.response_view controls the
     * subset of information which is returned.
     */
    list(request: {
      /**
       * V1 error format.
       */
      "$.xgafv"?: string,

      /**
       * OAuth access token.
       */
      access_token?: string,

      /**
       * Data format for response.
       */
      alt?: string,

      /**
       * OAuth bearer token.
       */
      bearer_token?: string,

      /**
       * JSONP
       */
      callback?: string,

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
       * Sort order used for the query. The fields supported for sorting
       * are Task.schedule_time and PullMessage.tag. All results will be
       * returned in ascending order. The default ordering is by
       * Task.schedule_time.
       */
      orderBy?: string,

      /**
       * Requested page size. Fewer tasks than requested might be returned.
       *
       * The maximum page size is 1000. If unspecified, the page size will
       * be the maximum. Fewer tasks than requested might be returned,
       * even if more tasks exist; use
       * ListTasksResponse.next_page_token to determine if more tasks
       * exist.
       */
      pageSize?: number,

      /**
       * A token identifying the page of results to return.
       *
       * To request the first page results, page_token must be empty. To
       * request the next page of results, page_token must be the value of
       * ListTasksResponse.next_page_token returned from the previous
       * call to CloudTasks.ListTasks method.
       *
       * The page token is valid for only 2 hours.
       */
      pageToken?: string,

      /**
       * Required.
       *
       * The queue name. For example:
       * `projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID`
       */
      parent: string,

      /**
       * Pretty-print response.
       */
      pp?: boolean,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       */
      quotaUser?: string,

      /**
       * The response_view specifies which subset of the Task will be
       * returned.
       *
       * By default response_view is Task.View.BASIC; not all
       * information is retrieved by default because some data, such as
       * payloads, might be desirable to return only when needed because
       * of its large size or because of the sensitivity of data that it
       * contains.
       *
       * Authorization for Task.View.FULL requires `cloudtasks.tasks.fullView`
       * [Google IAM](/iam/) permission on the
       * Task.name resource.
       */
      responseView?: string,

      /**
       * Legacy upload protocol for media (e.g. "media", "multipart").
       */
      uploadType?: string,

      /**
       * Upload protocol for media (e.g. "raw", "multipart").
       */
      upload_protocol?: string
    }): Request<cloudtasks$ListTasksResponse>;

    /**
     * Pulls tasks from a pull queue and acquires a lease on them for a
     * specified PullTasksRequest.lease_duration.
     *
     * This method is invoked by the lease holder to obtain the
     * lease. The lease holder must acknowledge the task via
     * CloudTasks.AcknowledgeTask after they have performed the work
     * associated with the task.
     *
     * The payload is intended to store data that the lease holder needs
     * to perform the work associated with the task. To return the
     * payloads in the PullTasksResponse, set
     * PullTasksRequest.response_view to Task.View.FULL.
     *
     * A maximum of 10 qps of CloudTasks.PullTasks requests are allowed per
     * queue. google.rpc.Code.RESOURCE_EXHAUSTED is returned when this limit
     * is exceeded. google.rpc.Code.RESOURCE_EXHAUSTED is also returned when
     * RateLimits.max_tasks_dispatched_per_second is exceeded.
     */
    pull(request: {
      /**
       * V1 error format.
       */
      "$.xgafv"?: string,

      /**
       * OAuth access token.
       */
      access_token?: string,

      /**
       * Data format for response.
       */
      alt?: string,

      /**
       * OAuth bearer token.
       */
      bearer_token?: string,

      /**
       * JSONP
       */
      callback?: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * Required.
       *
       * The queue name. For example:
       * `projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID`
       */
      name: string,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Pretty-print response.
       */
      pp?: boolean,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       */
      quotaUser?: string,

      /**
       * Legacy upload protocol for media (e.g. "media", "multipart").
       */
      uploadType?: string,

      /**
       * Upload protocol for media (e.g. "raw", "multipart").
       */
      upload_protocol?: string
    }): Request<cloudtasks$PullTasksResponse>;

    /**
     * Renew the current lease of a pull task.
     *
     * The lease holder can use this method to extend the lease by a new
     * duration, starting from now. The new task lease will be
     * returned in Task.schedule_time.
     */
    renewLease(request: {
      /**
       * V1 error format.
       */
      "$.xgafv"?: string,

      /**
       * OAuth access token.
       */
      access_token?: string,

      /**
       * Data format for response.
       */
      alt?: string,

      /**
       * OAuth bearer token.
       */
      bearer_token?: string,

      /**
       * JSONP
       */
      callback?: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * Required.
       *
       * The task name. For example:
       * `projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID/tasks/TASK_ID`
       */
      name: string,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Pretty-print response.
       */
      pp?: boolean,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       */
      quotaUser?: string,

      /**
       * Legacy upload protocol for media (e.g. "media", "multipart").
       */
      uploadType?: string,

      /**
       * Upload protocol for media (e.g. "raw", "multipart").
       */
      upload_protocol?: string
    }): Request<cloudtasks$Task>;

    /**
     * Forces a task to run now.
     *
     * This command is meant to be used for manual debugging. For
     * example, CloudTasks.RunTask can be used to retry a failed
     * task after a fix has been made or to manually force a task to be
     * dispatched now.
     *
     * When this method is called, Cloud Tasks will dispatch the task to its
     * target, even if the queue is Queue.QueueState.PAUSED.
     *
     * The dispatched task is returned. That is, the task that is returned
     * contains the Task.task_status after the task is dispatched but
     * before the task is received by its target.
     *
     * If Cloud Tasks receives a successful response from the task's
     * handler, then the task will be deleted; otherwise the task's
     * Task.schedule_time will be reset to the time that
     * CloudTasks.RunTask was called plus the retry delay specified
     * in the queue and task's RetryConfig.
     *
     * CloudTasks.RunTask returns google.rpc.Code.NOT_FOUND when
     * it is called on a task that has already succeeded or permanently
     * failed. google.rpc.Code.FAILED_PRECONDITION is returned when
     * CloudTasks.RunTask is called on task that is dispatched or
     * already running.
     */
    run(request: {
      /**
       * V1 error format.
       */
      "$.xgafv"?: string,

      /**
       * OAuth access token.
       */
      access_token?: string,

      /**
       * Data format for response.
       */
      alt?: string,

      /**
       * OAuth bearer token.
       */
      bearer_token?: string,

      /**
       * JSONP
       */
      callback?: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * Required.
       *
       * The task name. For example:
       * `projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID/tasks/TASK_ID`
       */
      name: string,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Pretty-print response.
       */
      pp?: boolean,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       */
      quotaUser?: string,

      /**
       * Legacy upload protocol for media (e.g. "media", "multipart").
       */
      uploadType?: string,

      /**
       * Upload protocol for media (e.g. "raw", "multipart").
       */
      upload_protocol?: string
    }): Request<cloudtasks$Task>;
  }

  declare interface cloudtasks$QueuesResource {
    /**
     * Creates a queue.
     *
     * WARNING: This method is only available to whitelisted
     * users. Using this method carries some risk. Read
     * [Overview of Queue Management and queue.yaml](/cloud-tasks/docs/queue-yaml)
     * carefully and then sign up for
     * [whitelist access to this method](https://goo.gl/Fe5mUy).
     */
    create(request: {
      /**
       * V1 error format.
       */
      "$.xgafv"?: string,

      /**
       * OAuth access token.
       */
      access_token?: string,

      /**
       * Data format for response.
       */
      alt?: string,

      /**
       * OAuth bearer token.
       */
      bearer_token?: string,

      /**
       * JSONP
       */
      callback?: string,

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
       * Required.
       *
       * The location name in which the queue will be created.
       * For example: `projects/PROJECT_ID/locations/LOCATION_ID`
       *
       * The list of allowed locations can be obtained by calling Cloud
       * Tasks' implementation of
       * google.cloud.location.Locations.ListLocations.
       */
      parent: string,

      /**
       * Pretty-print response.
       */
      pp?: boolean,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       */
      quotaUser?: string,

      /**
       * Legacy upload protocol for media (e.g. "media", "multipart").
       */
      uploadType?: string,

      /**
       * Upload protocol for media (e.g. "raw", "multipart").
       */
      upload_protocol?: string
    }): Request<cloudtasks$Queue>;

    /**
     * Deletes a queue.
     *
     * This command will delete the queue even if it has tasks in it.
     *
     * Note: If you delete a queue, a queue with the same name can't be created
     * for 7 days.
     *
     * WARNING: This method is only available to whitelisted
     * users. Using this method carries some risk. Read
     * [Overview of Queue Management and queue.yaml](/cloud-tasks/docs/queue-yaml)
     * carefully and then sign up for
     * [whitelist access to this method](https://goo.gl/Fe5mUy).
     */
    delete(request: {
      /**
       * V1 error format.
       */
      "$.xgafv"?: string,

      /**
       * OAuth access token.
       */
      access_token?: string,

      /**
       * Data format for response.
       */
      alt?: string,

      /**
       * OAuth bearer token.
       */
      bearer_token?: string,

      /**
       * JSONP
       */
      callback?: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * Required.
       *
       * The queue name. For example:
       * `projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID`
       */
      name: string,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Pretty-print response.
       */
      pp?: boolean,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       */
      quotaUser?: string,

      /**
       * Legacy upload protocol for media (e.g. "media", "multipart").
       */
      uploadType?: string,

      /**
       * Upload protocol for media (e.g. "raw", "multipart").
       */
      upload_protocol?: string
    }): Request<{}>;

    /**
     * Gets a queue.
     */
    get(request: {
      /**
       * V1 error format.
       */
      "$.xgafv"?: string,

      /**
       * OAuth access token.
       */
      access_token?: string,

      /**
       * Data format for response.
       */
      alt?: string,

      /**
       * OAuth bearer token.
       */
      bearer_token?: string,

      /**
       * JSONP
       */
      callback?: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * Required.
       *
       * The resource name of the queue. For example:
       * `projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID`
       */
      name: string,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Pretty-print response.
       */
      pp?: boolean,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       */
      quotaUser?: string,

      /**
       * Legacy upload protocol for media (e.g. "media", "multipart").
       */
      uploadType?: string,

      /**
       * Upload protocol for media (e.g. "raw", "multipart").
       */
      upload_protocol?: string
    }): Request<cloudtasks$Queue>;

    /**
     * Gets the access control policy for a Queue.
     * Returns an empty policy if the resource exists and does not have a policy
     * set.
     *
     * Authorization requires the following [Google IAM](/iam) permission on the
     * specified resource parent:
     *
     * &#42; `cloudtasks.queues.getIamPolicy`
     */
    getIamPolicy(request: {
      /**
       * V1 error format.
       */
      "$.xgafv"?: string,

      /**
       * OAuth access token.
       */
      access_token?: string,

      /**
       * Data format for response.
       */
      alt?: string,

      /**
       * OAuth bearer token.
       */
      bearer_token?: string,

      /**
       * JSONP
       */
      callback?: string,

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
       * Pretty-print response.
       */
      pp?: boolean,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       */
      quotaUser?: string,

      /**
       * REQUIRED: The resource for which the policy is being requested.
       * See the operation documentation for the appropriate value for this field.
       */
      resource: string,

      /**
       * Legacy upload protocol for media (e.g. "media", "multipart").
       */
      uploadType?: string,

      /**
       * Upload protocol for media (e.g. "raw", "multipart").
       */
      upload_protocol?: string
    }): Request<cloudtasks$Policy>;

    /**
     * Lists queues.
     *
     * Queues are returned in lexicographical order.
     */
    list(request: {
      /**
       * V1 error format.
       */
      "$.xgafv"?: string,

      /**
       * OAuth access token.
       */
      access_token?: string,

      /**
       * Data format for response.
       */
      alt?: string,

      /**
       * OAuth bearer token.
       */
      bearer_token?: string,

      /**
       * JSONP
       */
      callback?: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * `filter` can be used to specify a subset of queues. Any Queue
       * field can be used as a filter and several operators as supported.
       * For example: `<=, <, >=, >, !=, =, :`. The filter syntax is the same as
       * described in
       * [Stackdriver's Advanced Logs Filters](/logging/docs/view/advanced_filters).
       *
       * Sample filter "app_engine_http_target: &#42;".
       *
       * Note that using filters might cause fewer queues than the
       * requested_page size to be returned.
       */
      filter?: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Requested page size.
       *
       * The maximum page size is 9800. If unspecified, the page size will
       * be the maximum. Fewer queues than requested might be returned,
       * even if more queues exist; use
       * ListQueuesResponse.next_page_token to determine if more
       * queues exist.
       */
      pageSize?: number,

      /**
       * A token identifying the page of results to return.
       *
       * To request the first page results, page_token must be empty. To
       * request the next page of results, page_token must be the value of
       * ListQueuesResponse.next_page_token returned from the previous
       * call to CloudTasks.ListQueues method. It is an error to
       * switch the value of ListQueuesRequest.filter while iterating
       * through pages.
       */
      pageToken?: string,

      /**
       * Required.
       *
       * The location name.
       * For example: `projects/PROJECT_ID/locations/LOCATION_ID`
       */
      parent: string,

      /**
       * Pretty-print response.
       */
      pp?: boolean,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       */
      quotaUser?: string,

      /**
       * Legacy upload protocol for media (e.g. "media", "multipart").
       */
      uploadType?: string,

      /**
       * Upload protocol for media (e.g. "raw", "multipart").
       */
      upload_protocol?: string
    }): Request<cloudtasks$ListQueuesResponse>;

    /**
     * Updates a queue.
     *
     * This method creates the queue if it does not exist and updates
     * the queue if it does exist.
     *
     * WARNING: This method is only available to whitelisted
     * users. Using this method carries some risk. Read
     * [Overview of Queue Management and queue.yaml](/cloud-tasks/docs/queue-yaml)
     * carefully and then sign up for
     * [whitelist access to this method](https://goo.gl/Fe5mUy).
     */
    patch(request: {
      /**
       * V1 error format.
       */
      "$.xgafv"?: string,

      /**
       * OAuth access token.
       */
      access_token?: string,

      /**
       * Data format for response.
       */
      alt?: string,

      /**
       * OAuth bearer token.
       */
      bearer_token?: string,

      /**
       * JSONP
       */
      callback?: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * The queue name.
       *
       * The queue name must have the following format:
       * `projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID`
       *
       * &#42; `PROJECT_ID` can contain uppercase and lowercase letters,
       * numbers, hyphens, colons, and periods; that is, it must match
       * the regular expression: `[a-zA-Z\\d-:\\.]+`.
       * &#42; `QUEUE_ID` can contain uppercase and lowercase letters,
       * numbers, and hyphens; that is, it must match the regular
       * expression: `[a-zA-Z\\d-]+`. The maximum length is 100
       * characters.
       *
       * Caller-specified and required in CreateQueueRequest, after which
       * it becomes output only.
       */
      name: string,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Pretty-print response.
       */
      pp?: boolean,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       */
      quotaUser?: string,

      /**
       * A mask used to specify which fields of the queue are being updated.
       *
       * If empty, then all fields will be updated.
       */
      updateMask?: string,

      /**
       * Legacy upload protocol for media (e.g. "media", "multipart").
       */
      uploadType?: string,

      /**
       * Upload protocol for media (e.g. "raw", "multipart").
       */
      upload_protocol?: string
    }): Request<cloudtasks$Queue>;

    /**
     * Pauses the queue.
     *
     * If a queue is paused then the system will stop executing the
     * tasks in the queue until it is resumed via
     * CloudTasks.ResumeQueue. Tasks can still be added when the
     * queue is paused. The state of the queue is stored in
     * Queue.queue_state; if paused it will be set to
     * Queue.QueueState.PAUSED.
     *
     * WARNING: This method is only available to whitelisted
     * users. Using this method carries some risk. Read
     * [Overview of Queue Management and queue.yaml](/cloud-tasks/docs/queue-yaml)
     * carefully and then sign up for
     * [whitelist access to this method](https://goo.gl/Fe5mUy).
     */
    pause(request: {
      /**
       * V1 error format.
       */
      "$.xgafv"?: string,

      /**
       * OAuth access token.
       */
      access_token?: string,

      /**
       * Data format for response.
       */
      alt?: string,

      /**
       * OAuth bearer token.
       */
      bearer_token?: string,

      /**
       * JSONP
       */
      callback?: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * Required.
       *
       * The queue name. For example:
       * `projects/PROJECT_ID/location/LOCATION_ID/queues/QUEUE_ID`
       */
      name: string,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Pretty-print response.
       */
      pp?: boolean,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       */
      quotaUser?: string,

      /**
       * Legacy upload protocol for media (e.g. "media", "multipart").
       */
      uploadType?: string,

      /**
       * Upload protocol for media (e.g. "raw", "multipart").
       */
      upload_protocol?: string
    }): Request<cloudtasks$Queue>;

    /**
     * Purges a queue by deleting all of its tasks.
     *
     * All tasks created before this method is called are permanently deleted.
     *
     * Purge operations can take up to one minute to take effect. Tasks
     * might be dispatched before the purge takes effect. A purge is irreversible.
     */
    purge(request: {
      /**
       * V1 error format.
       */
      "$.xgafv"?: string,

      /**
       * OAuth access token.
       */
      access_token?: string,

      /**
       * Data format for response.
       */
      alt?: string,

      /**
       * OAuth bearer token.
       */
      bearer_token?: string,

      /**
       * JSONP
       */
      callback?: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * Required.
       *
       * The queue name. For example:
       * `projects/PROJECT_ID/location/LOCATION_ID/queues/QUEUE_ID`
       */
      name: string,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Pretty-print response.
       */
      pp?: boolean,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       */
      quotaUser?: string,

      /**
       * Legacy upload protocol for media (e.g. "media", "multipart").
       */
      uploadType?: string,

      /**
       * Upload protocol for media (e.g. "raw", "multipart").
       */
      upload_protocol?: string
    }): Request<cloudtasks$Queue>;

    /**
     * Resume a queue.
     *
     * This method resumes a queue after it has been
     * Queue.QueueState.PAUSED or Queue.QueueState.DISABLED. The state of
     * a queue is stored in Queue.queue_state; after calling this method it
     * will be set to Queue.QueueState.RUNNING.
     *
     * WARNING: This method is only available to whitelisted
     * users. Using this method carries some risk. Read
     * [Overview of Queue Management and queue.yaml](/cloud-tasks/docs/queue-yaml)
     * carefully and then sign up for
     * [whitelist access to this method](https://goo.gl/Fe5mUy).
     *
     * WARNING: Resuming many high-QPS queues at the same time can
     * lead to target overloading. If you are resuming high-QPS
     * queues, follow the 500/50/5 pattern described in
     * [Managing Cloud Tasks Scaling Risks](/cloud-tasks/pdfs/managing-cloud-tasks-scaling-risks-2017-06-05.pdf).
     */
    resume(request: {
      /**
       * V1 error format.
       */
      "$.xgafv"?: string,

      /**
       * OAuth access token.
       */
      access_token?: string,

      /**
       * Data format for response.
       */
      alt?: string,

      /**
       * OAuth bearer token.
       */
      bearer_token?: string,

      /**
       * JSONP
       */
      callback?: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * Required.
       *
       * The queue name. For example:
       * `projects/PROJECT_ID/location/LOCATION_ID/queues/QUEUE_ID`
       */
      name: string,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Pretty-print response.
       */
      pp?: boolean,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       */
      quotaUser?: string,

      /**
       * Legacy upload protocol for media (e.g. "media", "multipart").
       */
      uploadType?: string,

      /**
       * Upload protocol for media (e.g. "raw", "multipart").
       */
      upload_protocol?: string
    }): Request<cloudtasks$Queue>;

    /**
     * Sets the access control policy for a Queue. Replaces any existing
     * policy.
     *
     * Authorization requires the following [Google IAM](/iam) permission on the
     * specified resource parent:
     *
     * &#42; `cloudtasks.queues.setIamPolicy`
     */
    setIamPolicy(request: {
      /**
       * V1 error format.
       */
      "$.xgafv"?: string,

      /**
       * OAuth access token.
       */
      access_token?: string,

      /**
       * Data format for response.
       */
      alt?: string,

      /**
       * OAuth bearer token.
       */
      bearer_token?: string,

      /**
       * JSONP
       */
      callback?: string,

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
       * Pretty-print response.
       */
      pp?: boolean,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       */
      quotaUser?: string,

      /**
       * REQUIRED: The resource for which the policy is being specified.
       * See the operation documentation for the appropriate value for this field.
       */
      resource: string,

      /**
       * Legacy upload protocol for media (e.g. "media", "multipart").
       */
      uploadType?: string,

      /**
       * Upload protocol for media (e.g. "raw", "multipart").
       */
      upload_protocol?: string
    }): Request<cloudtasks$Policy>;

    /**
     * Returns permissions that a caller has on a Queue.
     * If the resource does not exist, this will return an empty set of
     * permissions, not a google.rpc.Code.NOT_FOUND error.
     *
     * Note: This operation is designed to be used for building permission-aware
     * UIs and command-line tools, not for authorization checking. This operation
     * may "fail open" without warning.
     */
    testIamPermissions(request: {
      /**
       * V1 error format.
       */
      "$.xgafv"?: string,

      /**
       * OAuth access token.
       */
      access_token?: string,

      /**
       * Data format for response.
       */
      alt?: string,

      /**
       * OAuth bearer token.
       */
      bearer_token?: string,

      /**
       * JSONP
       */
      callback?: string,

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
       * Pretty-print response.
       */
      pp?: boolean,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       */
      quotaUser?: string,

      /**
       * REQUIRED: The resource for which the policy detail is being requested.
       * See the operation documentation for the appropriate value for this field.
       */
      resource: string,

      /**
       * Legacy upload protocol for media (e.g. "media", "multipart").
       */
      uploadType?: string,

      /**
       * Upload protocol for media (e.g. "raw", "multipart").
       */
      upload_protocol?: string
    }): Request<cloudtasks$TestIamPermissionsResponse>;
    tasks: cloudtasks$TasksResource;
  }

  declare interface cloudtasks$LocationsResource {
    /**
     * Get information about a location.
     */
    get(request: {
      /**
       * V1 error format.
       */
      "$.xgafv"?: string,

      /**
       * OAuth access token.
       */
      access_token?: string,

      /**
       * Data format for response.
       */
      alt?: string,

      /**
       * OAuth bearer token.
       */
      bearer_token?: string,

      /**
       * JSONP
       */
      callback?: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * Resource name for the location.
       */
      name: string,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Pretty-print response.
       */
      pp?: boolean,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       */
      quotaUser?: string,

      /**
       * Legacy upload protocol for media (e.g. "media", "multipart").
       */
      uploadType?: string,

      /**
       * Upload protocol for media (e.g. "raw", "multipart").
       */
      upload_protocol?: string
    }): Request<cloudtasks$Location>;

    /**
     * Lists information about the supported locations for this service.
     */
    list(request: {
      /**
       * V1 error format.
       */
      "$.xgafv"?: string,

      /**
       * OAuth access token.
       */
      access_token?: string,

      /**
       * Data format for response.
       */
      alt?: string,

      /**
       * OAuth bearer token.
       */
      bearer_token?: string,

      /**
       * JSONP
       */
      callback?: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * The standard list filter.
       */
      filter?: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * The resource that owns the locations collection, if applicable.
       */
      name: string,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * The standard list page size.
       */
      pageSize?: number,

      /**
       * The standard list page token.
       */
      pageToken?: string,

      /**
       * Pretty-print response.
       */
      pp?: boolean,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       */
      quotaUser?: string,

      /**
       * Legacy upload protocol for media (e.g. "media", "multipart").
       */
      uploadType?: string,

      /**
       * Upload protocol for media (e.g. "raw", "multipart").
       */
      upload_protocol?: string
    }): Request<cloudtasks$ListLocationsResponse>;
    queues: cloudtasks$QueuesResource;
  }

  declare interface cloudtasks$ProjectsResource {
    locations: cloudtasks$LocationsResource;
  }
}
