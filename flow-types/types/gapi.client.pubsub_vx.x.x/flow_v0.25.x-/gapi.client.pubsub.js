declare module "gapi.client.pubsub" {
  declare var npm$namespace$gapi: {
    client: typeof npm$namespace$gapi$client
  };

  declare var npm$namespace$gapi$client: {
    load: typeof gapi$client$load,
    projects: typeof gapi$client$projects
  };

  /**
   * Load Google Cloud Pub/Sub API v1
   */
  declare function gapi$client$load(
    name: "pubsub",
    version: "v1"
  ): PromiseLike<void>;

  declare function gapi$client$load(
    name: "pubsub",
    version: "v1",
    callback: () => any
  ): void;

  declare var gapi$client$projects: pubsub$ProjectsResource;

  declare interface gapi$client$pubsub$AcknowledgeRequest {
    /**
     * The acknowledgment ID for the messages being acknowledged that was returned
     * by the Pub/Sub system in the `Pull` response. Must not be empty.
     */
    ackIds?: string[];
  }

  declare interface gapi$client$pubsub$Binding {
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

  declare interface gapi$client$pubsub$ListSubscriptionsResponse {
    /**
     * If not empty, indicates that there may be more subscriptions that match
     * the request; this value should be passed in a new
     * `ListSubscriptionsRequest` to get more subscriptions.
     */
    nextPageToken?: string;

    /**
     * The subscriptions that match the request.
     */
    subscriptions?: pubsub$Subscription[];
  }

  declare interface gapi$client$pubsub$ListTopicSubscriptionsResponse {
    /**
     * If not empty, indicates that there may be more subscriptions that match
     * the request; this value should be passed in a new
     * `ListTopicSubscriptionsRequest` to get more subscriptions.
     */
    nextPageToken?: string;

    /**
     * The names of the subscriptions that match the request.
     */
    subscriptions?: string[];
  }

  declare interface gapi$client$pubsub$ListTopicsResponse {
    /**
     * If not empty, indicates that there may be more topics that match the
     * request; this value should be passed in a new `ListTopicsRequest`.
     */
    nextPageToken?: string;

    /**
     * The resulting topics.
     */
    topics?: pubsub$Topic[];
  }

  declare interface gapi$client$pubsub$ModifyAckDeadlineRequest {
    /**
     * The new ack deadline with respect to the time this request was sent to
     * the Pub/Sub system. For example, if the value is 10, the new
     * ack deadline will expire 10 seconds after the `ModifyAckDeadline` call
     * was made. Specifying zero may immediately make the message available for
     * another pull request.
     * The minimum deadline you can specify is 0 seconds.
     * The maximum deadline you can specify is 600 seconds (10 minutes).
     */
    ackDeadlineSeconds?: number;

    /**
     * List of acknowledgment IDs.
     */
    ackIds?: string[];
  }

  declare interface gapi$client$pubsub$ModifyPushConfigRequest {
    /**
     * The push configuration for future deliveries.
     *
     * An empty `pushConfig` indicates that the Pub/Sub system should
     * stop pushing messages from the given subscription and allow
     * messages to be pulled and acknowledged - effectively pausing
     * the subscription if `Pull` or `StreamingPull` is not called.
     */
    pushConfig?: pubsub$PushConfig;
  }

  declare interface gapi$client$pubsub$Policy {
    /**
     * Associates a list of `members` to a `role`.
     * `bindings` with no members will result in an error.
     */
    bindings?: gapi$client$pubsub$Binding[];

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

  declare interface gapi$client$pubsub$PublishRequest {
    /**
     * The messages to publish.
     */
    messages?: pubsub$PubsubMessage[];
  }

  declare interface gapi$client$pubsub$PublishResponse {
    /**
     * The server-assigned ID of each published message, in the same order as
     * the messages in the request. IDs are guaranteed to be unique within
     * the topic.
     */
    messageIds?: string[];
  }

  declare interface gapi$client$pubsub$PubsubMessage {
    /**
     * Optional attributes for this message.
     */
    attributes?: Record<string, string>;

    /**
     * The message payload.
     */
    data?: string;

    /**
     * ID of this message, assigned by the server when the message is published.
     * Guaranteed to be unique within the topic. This value may be read by a
     * subscriber that receives a `PubsubMessage` via a `Pull` call or a push
     * delivery. It must not be populated by the publisher in a `Publish` call.
     */
    messageId?: string;

    /**
     * The time at which the message was published, populated by the server when
     * it receives the `Publish` call. It must not be populated by the
     * publisher in a `Publish` call.
     */
    publishTime?: string;
  }

  declare interface gapi$client$pubsub$PullRequest {
    /**
     * The maximum number of messages returned for this request. The Pub/Sub
     * system may return fewer than the number specified.
     */
    maxMessages?: number;

    /**
     * If this field set to true, the system will respond immediately even if
     * it there are no messages available to return in the `Pull` response.
     * Otherwise, the system may wait (for a bounded amount of time) until at
     * least one message is available, rather than returning no messages. The
     * client may cancel the request if it does not wish to wait any longer for
     * the response.
     */
    returnImmediately?: boolean;
  }

  declare interface gapi$client$pubsub$PullResponse {
    /**
     * Received Pub/Sub messages. The Pub/Sub system will return zero messages if
     * there are no more available in the backlog. The Pub/Sub system may return
     * fewer than the `maxMessages` requested even if there are more messages
     * available in the backlog.
     */
    receivedMessages?: pubsub$ReceivedMessage[];
  }

  declare interface gapi$client$pubsub$PushConfig {
    /**
     * Endpoint configuration attributes.
     *
     * Every endpoint has a set of API supported attributes that can be used to
     * control different aspects of the message delivery.
     *
     * The currently supported attribute is `x-goog-version`, which you can
     * use to change the format of the pushed message. This attribute
     * indicates the version of the data expected by the endpoint. This
     * controls the shape of the pushed message (i.e., its fields and metadata).
     * The endpoint version is based on the version of the Pub/Sub API.
     *
     * If not present during the `CreateSubscription` call, it will default to
     * the version of the API used to make such call. If not present during a
     * `ModifyPushConfig` call, its value will not be changed. `GetSubscription`
     * calls will always return a valid version, even if the subscription was
     * created without this attribute.
     *
     * The possible values for this attribute are:
     *
     * &#42; `v1beta1`: uses the push format defined in the v1beta1 Pub/Sub API.
     * &#42; `v1` or `v1beta2`: uses the push format defined in the v1 Pub/Sub API.
     */
    attributes?: Record<string, string>;

    /**
     * A URL locating the endpoint to which messages should be pushed.
     * For example, a Webhook endpoint might use "https://example.com/push".
     */
    pushEndpoint?: string;
  }

  declare interface gapi$client$pubsub$ReceivedMessage {
    /**
     * This ID can be used to acknowledge the received message.
     */
    ackId?: string;

    /**
     * The message.
     */
    message?: gapi$client$pubsub$PubsubMessage;
  }

  declare interface gapi$client$pubsub$SetIamPolicyRequest {
    /**
     * REQUIRED: The complete policy to be applied to the `resource`. The size of
     * the policy is limited to a few 10s of KB. An empty policy is a
     * valid policy but certain Cloud Platform services (such as Projects)
     * might reject them.
     */
    policy?: gapi$client$pubsub$Policy;
  }

  declare interface gapi$client$pubsub$Subscription {
    /**
     * This value is the maximum time after a subscriber receives a message
     * before the subscriber should acknowledge the message. After message
     * delivery but before the ack deadline expires and before the message is
     * acknowledged, it is an outstanding message and will not be delivered
     * again during that time (on a best-effort basis).
     *
     * For pull subscriptions, this value is used as the initial value for the ack
     * deadline. To override this value for a given message, call
     * `ModifyAckDeadline` with the corresponding `ack_id` if using
     * non-streaming pull or send the `ack_id` in a
     * `StreamingModifyAckDeadlineRequest` if using streaming pull.
     * The minimum custom deadline you can specify is 10 seconds.
     * The maximum custom deadline you can specify is 600 seconds (10 minutes).
     * If this parameter is 0, a default value of 10 seconds is used.
     *
     * For push delivery, this value is also used to set the request timeout for
     * the call to the push endpoint.
     *
     * If the subscriber never acknowledges the message, the Pub/Sub
     * system will eventually redeliver the message.
     */
    ackDeadlineSeconds?: number;

    /**
     * The name of the subscription. It must have the format
     * `"projects/{project}/subscriptions/{subscription}"`. `{subscription}` must
     * start with a letter, and contain only letters (`[A-Za-z]`), numbers
     * (`[0-9]`), dashes (`-`), underscores (`_`), periods (`.`), tildes (`~`),
     * plus (`+`) or percent signs (`%`). It must be between 3 and 255 characters
     * in length, and it must not start with `"goog"`.
     */
    name?: string;

    /**
     * If push delivery is used with this subscription, this field is
     * used to configure it. An empty `pushConfig` signifies that the subscriber
     * will pull and ack messages using API methods.
     */
    pushConfig?: gapi$client$pubsub$PushConfig;

    /**
     * The name of the topic from which this subscription is receiving messages.
     * Format is `projects/{project}/topics/{topic}`.
     * The value of this field will be `_deleted-topic_` if the topic has been
     * deleted.
     */
    topic?: string;
  }

  declare interface gapi$client$pubsub$TestIamPermissionsRequest {
    /**
     * The set of permissions to check for the `resource`. Permissions with
     * wildcards (such as '&#42;' or 'storage.&#42;') are not allowed. For more
     * information see
     * [IAM Overview](https://cloud.google.com/iam/docs/overview#permissions).
     */
    permissions?: string[];
  }

  declare interface gapi$client$pubsub$TestIamPermissionsResponse {
    /**
     * A subset of `TestPermissionsRequest.permissions` that the caller is
     * allowed.
     */
    permissions?: string[];
  }

  declare interface gapi$client$pubsub$Topic {
    /**
     * The name of the topic. It must have the format
     * `"projects/{project}/topics/{topic}"`. `{topic}` must start with a letter,
     * and contain only letters (`[A-Za-z]`), numbers (`[0-9]`), dashes (`-`),
     * underscores (`_`), periods (`.`), tildes (`~`), plus (`+`) or percent
     * signs (`%`). It must be between 3 and 255 characters in length, and it
     * must not start with `"goog"`.
     */
    name?: string;
  }

  declare interface gapi$client$pubsub$SnapshotsResource {
    /**
     * Gets the access control policy for a resource.
     * Returns an empty policy if the resource exists and does not have a policy
     * set.
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
    }): Request<gapi$client$pubsub$Policy>;

    /**
     * Sets the access control policy on the specified resource. Replaces any
     * existing policy.
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
    }): Request<gapi$client$pubsub$Policy>;

    /**
     * Returns permissions that a caller has on the specified resource.
     * If the resource does not exist, this will return an empty set of
     * permissions, not a NOT_FOUND error.
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
    }): Request<gapi$client$pubsub$TestIamPermissionsResponse>;
  }

  declare interface gapi$client$pubsub$SubscriptionsResource {
    /**
     * Acknowledges the messages associated with the `ack_ids` in the
     * `AcknowledgeRequest`. The Pub/Sub system can remove the relevant messages
     * from the subscription.
     *
     * Acknowledging a message whose ack deadline has expired may succeed,
     * but such a message may be redelivered later. Acknowledging a message more
     * than once will not result in an error.
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
       * The subscription whose message is being acknowledged.
       * Format is `projects/{project}/subscriptions/{sub}`.
       */
      subscription: string,

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
     * Creates a subscription to a given topic.
     * If the subscription already exists, returns `ALREADY_EXISTS`.
     * If the corresponding topic doesn't exist, returns `NOT_FOUND`.
     *
     * If the name is not provided in the request, the server will assign a random
     * name for this subscription on the same project as the topic, conforming
     * to the
     * [resource name format](https://cloud.google.com/pubsub/docs/overview#names).
     * The generated name is populated in the returned Subscription object.
     * Note that for REST API requests, you must specify a name in the request.
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
       * The name of the subscription. It must have the format
       * `"projects/{project}/subscriptions/{subscription}"`. `{subscription}` must
       * start with a letter, and contain only letters (`[A-Za-z]`), numbers
       * (`[0-9]`), dashes (`-`), underscores (`_`), periods (`.`), tildes (`~`),
       * plus (`+`) or percent signs (`%`). It must be between 3 and 255 characters
       * in length, and it must not start with `"goog"`.
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
    }): Request<gapi$client$pubsub$Subscription>;

    /**
     * Deletes an existing subscription. All messages retained in the subscription
     * are immediately dropped. Calls to `Pull` after deletion will return
     * `NOT_FOUND`. After a subscription is deleted, a new one may be created with
     * the same name, but the new one has no association with the old
     * subscription or its topic unless the same topic is specified.
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
       * The subscription to delete.
       * Format is `projects/{project}/subscriptions/{sub}`.
       */
      subscription: string,

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
     * Gets the configuration details of a subscription.
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
       * The name of the subscription to get.
       * Format is `projects/{project}/subscriptions/{sub}`.
       */
      subscription: string,

      /**
       * Legacy upload protocol for media (e.g. "media", "multipart").
       */
      uploadType?: string,

      /**
       * Upload protocol for media (e.g. "raw", "multipart").
       */
      upload_protocol?: string
    }): Request<gapi$client$pubsub$Subscription>;

    /**
     * Gets the access control policy for a resource.
     * Returns an empty policy if the resource exists and does not have a policy
     * set.
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
    }): Request<gapi$client$pubsub$Policy>;

    /**
     * Lists matching subscriptions.
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
       * Maximum number of subscriptions to return.
       */
      pageSize?: number,

      /**
       * The value returned by the last `ListSubscriptionsResponse`; indicates that
       * this is a continuation of a prior `ListSubscriptions` call, and that the
       * system should return the next page of data.
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
       * The name of the cloud project that subscriptions belong to.
       * Format is `projects/{project}`.
       */
      project: string,

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
    }): Request<gapi$client$pubsub$ListSubscriptionsResponse>;

    /**
     * Modifies the ack deadline for a specific message. This method is useful
     * to indicate that more time is needed to process a message by the
     * subscriber, or to make the message available for redelivery if the
     * processing was interrupted. Note that this does not modify the
     * subscription-level `ackDeadlineSeconds` used for subsequent messages.
     */
    modifyAckDeadline(request: {
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
       * The name of the subscription.
       * Format is `projects/{project}/subscriptions/{sub}`.
       */
      subscription: string,

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
     * Modifies the `PushConfig` for a specified subscription.
     *
     * This may be used to change a push subscription to a pull one (signified by
     * an empty `PushConfig`) or vice versa, or change the endpoint URL and other
     * attributes of a push subscription. Messages will accumulate for delivery
     * continuously through the call regardless of changes to the `PushConfig`.
     */
    modifyPushConfig(request: {
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
       * The name of the subscription.
       * Format is `projects/{project}/subscriptions/{sub}`.
       */
      subscription: string,

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
     * Pulls messages from the server. Returns an empty list if there are no
     * messages available in the backlog. The server may return `UNAVAILABLE` if
     * there are too many concurrent pull requests pending for the given
     * subscription.
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
       * The subscription from which messages should be pulled.
       * Format is `projects/{project}/subscriptions/{sub}`.
       */
      subscription: string,

      /**
       * Legacy upload protocol for media (e.g. "media", "multipart").
       */
      uploadType?: string,

      /**
       * Upload protocol for media (e.g. "raw", "multipart").
       */
      upload_protocol?: string
    }): Request<gapi$client$pubsub$PullResponse>;

    /**
     * Sets the access control policy on the specified resource. Replaces any
     * existing policy.
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
    }): Request<gapi$client$pubsub$Policy>;

    /**
     * Returns permissions that a caller has on the specified resource.
     * If the resource does not exist, this will return an empty set of
     * permissions, not a NOT_FOUND error.
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
    }): Request<gapi$client$pubsub$TestIamPermissionsResponse>;

    /**
     * Lists the name of the subscriptions for this topic.
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
       * Maximum number of subscription names to return.
       */
      pageSize?: number,

      /**
       * The value returned by the last `ListTopicSubscriptionsResponse`; indicates
       * that this is a continuation of a prior `ListTopicSubscriptions` call, and
       * that the system should return the next page of data.
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
       * The name of the topic that subscriptions are attached to.
       * Format is `projects/{project}/topics/{topic}`.
       */
      topic: string,

      /**
       * Legacy upload protocol for media (e.g. "media", "multipart").
       */
      uploadType?: string,

      /**
       * Upload protocol for media (e.g. "raw", "multipart").
       */
      upload_protocol?: string
    }): Request<gapi$client$pubsub$ListTopicSubscriptionsResponse>;
  }

  declare interface gapi$client$pubsub$TopicsResource {
    /**
     * Creates the given topic with the given name.
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
       * The name of the topic. It must have the format
       * `"projects/{project}/topics/{topic}"`. `{topic}` must start with a letter,
       * and contain only letters (`[A-Za-z]`), numbers (`[0-9]`), dashes (`-`),
       * underscores (`_`), periods (`.`), tildes (`~`), plus (`+`) or percent
       * signs (`%`). It must be between 3 and 255 characters in length, and it
       * must not start with `"goog"`.
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
    }): Request<gapi$client$pubsub$Topic>;

    /**
     * Deletes the topic with the given name. Returns `NOT_FOUND` if the topic
     * does not exist. After a topic is deleted, a new topic may be created with
     * the same name; this is an entirely new topic with none of the old
     * configuration or subscriptions. Existing subscriptions to this topic are
     * not deleted, but their `topic` field is set to `_deleted-topic_`.
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
       * Name of the topic to delete.
       * Format is `projects/{project}/topics/{topic}`.
       */
      topic: string,

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
     * Gets the configuration of a topic.
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
       * The name of the topic to get.
       * Format is `projects/{project}/topics/{topic}`.
       */
      topic: string,

      /**
       * Legacy upload protocol for media (e.g. "media", "multipart").
       */
      uploadType?: string,

      /**
       * Upload protocol for media (e.g. "raw", "multipart").
       */
      upload_protocol?: string
    }): Request<gapi$client$pubsub$Topic>;

    /**
     * Gets the access control policy for a resource.
     * Returns an empty policy if the resource exists and does not have a policy
     * set.
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
    }): Request<gapi$client$pubsub$Policy>;

    /**
     * Lists matching topics.
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
       * Maximum number of topics to return.
       */
      pageSize?: number,

      /**
       * The value returned by the last `ListTopicsResponse`; indicates that this is
       * a continuation of a prior `ListTopics` call, and that the system should
       * return the next page of data.
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
       * The name of the cloud project that topics belong to.
       * Format is `projects/{project}`.
       */
      project: string,

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
    }): Request<gapi$client$pubsub$ListTopicsResponse>;

    /**
     * Adds one or more messages to the topic. Returns `NOT_FOUND` if the topic
     * does not exist. The message payload must not be empty; it must contain
     * either a non-empty data field, or at least one attribute.
     */
    publish(request: {
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
       * The messages in the request will be published on this topic.
       * Format is `projects/{project}/topics/{topic}`.
       */
      topic: string,

      /**
       * Legacy upload protocol for media (e.g. "media", "multipart").
       */
      uploadType?: string,

      /**
       * Upload protocol for media (e.g. "raw", "multipart").
       */
      upload_protocol?: string
    }): Request<gapi$client$pubsub$PublishResponse>;

    /**
     * Sets the access control policy on the specified resource. Replaces any
     * existing policy.
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
    }): Request<gapi$client$pubsub$Policy>;

    /**
     * Returns permissions that a caller has on the specified resource.
     * If the resource does not exist, this will return an empty set of
     * permissions, not a NOT_FOUND error.
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
    }): Request<gapi$client$pubsub$TestIamPermissionsResponse>;
    subscriptions: gapi$client$pubsub$SubscriptionsResource;
  }

  declare interface gapi$client$pubsub$ProjectsResource {
    snapshots: gapi$client$pubsub$SnapshotsResource;
    subscriptions: gapi$client$pubsub$SubscriptionsResource;
    topics: gapi$client$pubsub$TopicsResource;
  }
}
