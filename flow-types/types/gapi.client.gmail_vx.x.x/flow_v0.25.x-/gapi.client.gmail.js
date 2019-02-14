declare module "gapi.client.gmail" {
  declare var npm$namespace$gapi: {
    client: typeof npm$namespace$gapi$client
  };

  declare var npm$namespace$gapi$client: {
    load: typeof gapi$client$load,
    users: typeof gapi$client$users
  };

  /**
   * Load Gmail API v1
   */
  declare function gapi$client$load(
    name: "gmail",
    version: "v1"
  ): PromiseLike<void>;

  declare function gapi$client$load(
    name: "gmail",
    version: "v1",
    callback: () => any
  ): void;

  declare var gapi$client$users: gmail$UsersResource;

  declare interface gapi$client$gmail$AutoForwarding {
    /**
     * The state that a message should be left in after it has been forwarded.
     */
    disposition?: string;

    /**
     * Email address to which all incoming messages are forwarded. This email address must be a verified member of the forwarding addresses.
     */
    emailAddress?: string;

    /**
     * Whether all incoming mail is automatically forwarded to another address.
     */
    enabled?: boolean;
  }

  declare interface gapi$client$gmail$BatchDeleteMessagesRequest {
    /**
     * The IDs of the messages to delete.
     */
    ids?: string[];
  }

  declare interface gapi$client$gmail$BatchModifyMessagesRequest {
    /**
     * A list of label IDs to add to messages.
     */
    addLabelIds?: string[];

    /**
     * The IDs of the messages to modify. There is a limit of 1000 ids per request.
     */
    ids?: string[];

    /**
     * A list of label IDs to remove from messages.
     */
    removeLabelIds?: string[];
  }

  declare interface gapi$client$gmail$Draft {
    /**
     * The immutable ID of the draft.
     */
    id?: string;

    /**
     * The message content of the draft.
     */
    message?: gmail$Message;
  }

  declare interface gapi$client$gmail$Filter {
    /**
     * Action that the filter performs.
     */
    action?: gmail$FilterAction;

    /**
     * Matching criteria for the filter.
     */
    criteria?: gmail$FilterCriteria;

    /**
     * The server assigned ID of the filter.
     */
    id?: string;
  }

  declare interface gapi$client$gmail$FilterAction {
    /**
     * List of labels to add to the message.
     */
    addLabelIds?: string[];

    /**
     * Email address that the message should be forwarded to.
     */
    forward?: string;

    /**
     * List of labels to remove from the message.
     */
    removeLabelIds?: string[];
  }

  declare interface gapi$client$gmail$FilterCriteria {
    /**
     * Whether the response should exclude chats.
     */
    excludeChats?: boolean;

    /**
     * The sender's display name or email address.
     */
    from?: string;

    /**
     * Whether the message has any attachment.
     */
    hasAttachment?: boolean;

    /**
     * Only return messages not matching the specified query. Supports the same query format as the Gmail search box. For example, "from:someuser@example.com
     * rfc822msgid: is:unread".
     */
    negatedQuery?: string;

    /**
     * Only return messages matching the specified query. Supports the same query format as the Gmail search box. For example, "from:someuser@example.com
     * rfc822msgid: is:unread".
     */
    query?: string;

    /**
     * The size of the entire RFC822 message in bytes, including all headers and attachments.
     */
    size?: number;

    /**
     * How the message size in bytes should be in relation to the size field.
     */
    sizeComparison?: string;

    /**
     * Case-insensitive phrase found in the message's subject. Trailing and leading whitespace are be trimmed and adjacent spaces are collapsed.
     */
    subject?: string;

    /**
     * The recipient's display name or email address. Includes recipients in the "to", "cc", and "bcc" header fields. You can use simply the local part of the
     * email address. For example, "example" and "example@" both match "example@gmail.com". This field is case-insensitive.
     */
    to?: string;
  }

  declare interface gapi$client$gmail$ForwardingAddress {
    /**
     * An email address to which messages can be forwarded.
     */
    forwardingEmail?: string;

    /**
     * Indicates whether this address has been verified and is usable for forwarding. Read-only.
     */
    verificationStatus?: string;
  }

  declare interface gapi$client$gmail$History {
    /**
     * The mailbox sequence ID.
     */
    id?: string;

    /**
     * Labels added to messages in this history record.
     */
    labelsAdded?: gmail$HistoryLabelAdded[];

    /**
     * Labels removed from messages in this history record.
     */
    labelsRemoved?: gmail$HistoryLabelRemoved[];

    /**
     * List of messages changed in this history record. The fields for specific change types, such as messagesAdded may duplicate messages in this field. We
     * recommend using the specific change-type fields instead of this.
     */
    messages?: gmail$Message[];

    /**
     * Messages added to the mailbox in this history record.
     */
    messagesAdded?: gmail$HistoryMessageAdded[];

    /**
     * Messages deleted (not Trashed) from the mailbox in this history record.
     */
    messagesDeleted?: gmail$HistoryMessageDeleted[];
  }

  declare interface gapi$client$gmail$HistoryLabelAdded {
    /**
     * Label IDs added to the message.
     */
    labelIds?: string[];
    message?: gmail$Message;
  }

  declare interface gapi$client$gmail$HistoryLabelRemoved {
    /**
     * Label IDs removed from the message.
     */
    labelIds?: string[];
    message?: gmail$Message;
  }

  declare interface gapi$client$gmail$HistoryMessageAdded {
    message?: gmail$Message;
  }

  declare interface gapi$client$gmail$HistoryMessageDeleted {
    message?: gmail$Message;
  }

  declare interface gapi$client$gmail$ImapSettings {
    /**
     * If this value is true, Gmail will immediately expunge a message when it is marked as deleted in IMAP. Otherwise, Gmail will wait for an update from the
     * client before expunging messages marked as deleted.
     */
    autoExpunge?: boolean;

    /**
     * Whether IMAP is enabled for the account.
     */
    enabled?: boolean;

    /**
     * The action that will be executed on a message when it is marked as deleted and expunged from the last visible IMAP folder.
     */
    expungeBehavior?: string;

    /**
     * An optional limit on the number of messages that an IMAP folder may contain. Legal values are 0, 1000, 2000, 5000 or 10000. A value of zero is
     * interpreted to mean that there is no limit.
     */
    maxFolderSize?: number;
  }

  declare interface gapi$client$gmail$Label {
    /**
     * The immutable ID of the label.
     */
    id?: string;

    /**
     * The visibility of the label in the label list in the Gmail web interface.
     */
    labelListVisibility?: string;

    /**
     * The visibility of the label in the message list in the Gmail web interface.
     */
    messageListVisibility?: string;

    /**
     * The total number of messages with the label.
     */
    messagesTotal?: number;

    /**
     * The number of unread messages with the label.
     */
    messagesUnread?: number;

    /**
     * The display name of the label.
     */
    name?: string;

    /**
     * The total number of threads with the label.
     */
    threadsTotal?: number;

    /**
     * The number of unread threads with the label.
     */
    threadsUnread?: number;

    /**
     * The owner type for the label. User labels are created by the user and can be modified and deleted by the user and can be applied to any message or
     * thread. System labels are internally created and cannot be added, modified, or deleted. System labels may be able to be applied to or removed from
     * messages and threads under some circumstances but this is not guaranteed. For example, users can apply and remove the INBOX and UNREAD labels from
     * messages and threads, but cannot apply or remove the DRAFTS or SENT labels from messages or threads.
     */
    type?: string;
  }

  declare interface gapi$client$gmail$ListDraftsResponse {
    /**
     * List of drafts.
     */
    drafts?: gapi$client$gmail$Draft[];

    /**
     * Token to retrieve the next page of results in the list.
     */
    nextPageToken?: string;

    /**
     * Estimated total number of results.
     */
    resultSizeEstimate?: number;
  }

  declare interface gapi$client$gmail$ListFiltersResponse {
    /**
     * List of a user's filters.
     */
    filter?: gapi$client$gmail$Filter[];
  }

  declare interface gapi$client$gmail$ListForwardingAddressesResponse {
    /**
     * List of addresses that may be used for forwarding.
     */
    forwardingAddresses?: gapi$client$gmail$ForwardingAddress[];
  }

  declare interface gapi$client$gmail$ListHistoryResponse {
    /**
     * List of history records. Any messages contained in the response will typically only have id and threadId fields populated.
     */
    history?: gapi$client$gmail$History[];

    /**
     * The ID of the mailbox's current history record.
     */
    historyId?: string;

    /**
     * Page token to retrieve the next page of results in the list.
     */
    nextPageToken?: string;
  }

  declare interface gapi$client$gmail$ListLabelsResponse {
    /**
     * List of labels.
     */
    labels?: gapi$client$gmail$Label[];
  }

  declare interface gapi$client$gmail$ListMessagesResponse {
    /**
     * List of messages.
     */
    messages?: gmail$Message[];

    /**
     * Token to retrieve the next page of results in the list.
     */
    nextPageToken?: string;

    /**
     * Estimated total number of results.
     */
    resultSizeEstimate?: number;
  }

  declare interface gapi$client$gmail$ListSendAsResponse {
    /**
     * List of send-as aliases.
     */
    sendAs?: gmail$SendAs[];
  }

  declare interface gapi$client$gmail$ListSmimeInfoResponse {
    /**
     * List of SmimeInfo.
     */
    smimeInfo?: gmail$SmimeInfo[];
  }

  declare interface gapi$client$gmail$ListThreadsResponse {
    /**
     * Page token to retrieve the next page of results in the list.
     */
    nextPageToken?: string;

    /**
     * Estimated total number of results.
     */
    resultSizeEstimate?: number;

    /**
     * List of threads.
     */
    threads?: gmail$Thread[];
  }

  declare interface gapi$client$gmail$Message {
    /**
     * The ID of the last history record that modified this message.
     */
    historyId?: string;

    /**
     * The immutable ID of the message.
     */
    id?: string;

    /**
     * The internal message creation timestamp (epoch ms), which determines ordering in the inbox. For normal SMTP-received email, this represents the time
     * the message was originally accepted by Google, which is more reliable than the Date header. However, for API-migrated mail, it can be configured by
     * client to be based on the Date header.
     */
    internalDate?: string;

    /**
     * List of IDs of labels applied to this message.
     */
    labelIds?: string[];

    /**
     * The parsed email structure in the message parts.
     */
    payload?: gmail$MessagePart;

    /**
     * The entire email message in an RFC 2822 formatted and base64url encoded string. Returned in messages.get and drafts.get responses when the format=RAW
     * parameter is supplied.
     */
    raw?: string;

    /**
     * Estimated size in bytes of the message.
     */
    sizeEstimate?: number;

    /**
     * A short part of the message text.
     */
    snippet?: string;

    /**
     * The ID of the thread the message belongs to. To add a message or draft to a thread, the following criteria must be met:
     * - The requested threadId must be specified on the Message or Draft.Message you supply with your request.
     * - The References and In-Reply-To headers must be set in compliance with the RFC 2822 standard.
     * - The Subject headers must match.
     */
    threadId?: string;
  }

  declare interface gapi$client$gmail$MessagePart {
    /**
     * The message part body for this part, which may be empty for container MIME message parts.
     */
    body?: gmail$MessagePartBody;

    /**
     * The filename of the attachment. Only present if this message part represents an attachment.
     */
    filename?: string;

    /**
     * List of headers on this message part. For the top-level message part, representing the entire message payload, it will contain the standard RFC 2822
     * email headers such as To, From, and Subject.
     */
    headers?: gmail$MessagePartHeader[];

    /**
     * The MIME type of the message part.
     */
    mimeType?: string;

    /**
     * The immutable ID of the message part.
     */
    partId?: string;

    /**
     * The child MIME message parts of this part. This only applies to container MIME message parts, for example multipart/&#42;. For non- container MIME message
     * part types, such as text/plain, this field is empty. For more information, see RFC 1521.
     */
    parts?: gapi$client$gmail$MessagePart[];
  }

  declare interface gapi$client$gmail$MessagePartBody {
    /**
     * When present, contains the ID of an external attachment that can be retrieved in a separate messages.attachments.get request. When not present, the
     * entire content of the message part body is contained in the data field.
     */
    attachmentId?: string;

    /**
     * The body data of a MIME message part as a base64url encoded string. May be empty for MIME container types that have no message body or when the body
     * data is sent as a separate attachment. An attachment ID is present if the body data is contained in a separate attachment.
     */
    data?: string;

    /**
     * Number of bytes for the message part data (encoding notwithstanding).
     */
    size?: number;
  }

  declare interface gapi$client$gmail$MessagePartHeader {
    /**
     * The name of the header before the : separator. For example, To.
     */
    name?: string;

    /**
     * The value of the header after the : separator. For example, someuser@example.com.
     */
    value?: string;
  }

  declare interface gapi$client$gmail$ModifyMessageRequest {
    /**
     * A list of IDs of labels to add to this message.
     */
    addLabelIds?: string[];

    /**
     * A list IDs of labels to remove from this message.
     */
    removeLabelIds?: string[];
  }

  declare interface gapi$client$gmail$ModifyThreadRequest {
    /**
     * A list of IDs of labels to add to this thread.
     */
    addLabelIds?: string[];

    /**
     * A list of IDs of labels to remove from this thread.
     */
    removeLabelIds?: string[];
  }

  declare interface gapi$client$gmail$PopSettings {
    /**
     * The range of messages which are accessible via POP.
     */
    accessWindow?: string;

    /**
     * The action that will be executed on a message after it has been fetched via POP.
     */
    disposition?: string;
  }

  declare interface gapi$client$gmail$Profile {
    /**
     * The user's email address.
     */
    emailAddress?: string;

    /**
     * The ID of the mailbox's current history record.
     */
    historyId?: string;

    /**
     * The total number of messages in the mailbox.
     */
    messagesTotal?: number;

    /**
     * The total number of threads in the mailbox.
     */
    threadsTotal?: number;
  }

  declare interface gapi$client$gmail$SendAs {
    /**
     * A name that appears in the "From:" header for mail sent using this alias. For custom "from" addresses, when this is empty, Gmail will populate the
     * "From:" header with the name that is used for the primary address associated with the account.
     */
    displayName?: string;

    /**
     * Whether this address is selected as the default "From:" address in situations such as composing a new message or sending a vacation auto-reply. Every
     * Gmail account has exactly one default send-as address, so the only legal value that clients may write to this field is true. Changing this from false
     * to true for an address will result in this field becoming false for the other previous default address.
     */
    isDefault?: boolean;

    /**
     * Whether this address is the primary address used to login to the account. Every Gmail account has exactly one primary address, and it cannot be deleted
     * from the collection of send-as aliases. This field is read-only.
     */
    isPrimary?: boolean;

    /**
     * An optional email address that is included in a "Reply-To:" header for mail sent using this alias. If this is empty, Gmail will not generate a
     * "Reply-To:" header.
     */
    replyToAddress?: string;

    /**
     * The email address that appears in the "From:" header for mail sent using this alias. This is read-only for all operations except create.
     */
    sendAsEmail?: string;

    /**
     * An optional HTML signature that is included in messages composed with this alias in the Gmail web UI.
     */
    signature?: string;

    /**
     * An optional SMTP service that will be used as an outbound relay for mail sent using this alias. If this is empty, outbound mail will be sent directly
     * from Gmail's servers to the destination SMTP service. This setting only applies to custom "from" aliases.
     */
    smtpMsa?: gmail$SmtpMsa;

    /**
     * Whether Gmail should  treat this address as an alias for the user's primary email address. This setting only applies to custom "from" aliases.
     */
    treatAsAlias?: boolean;

    /**
     * Indicates whether this address has been verified for use as a send-as alias. Read-only. This setting only applies to custom "from" aliases.
     */
    verificationStatus?: string;
  }

  declare interface gapi$client$gmail$SmimeInfo {
    /**
     * Encrypted key password, when key is encrypted.
     */
    encryptedKeyPassword?: string;

    /**
     * When the certificate expires (in milliseconds since epoch).
     */
    expiration?: string;

    /**
     * The immutable ID for the SmimeInfo.
     */
    id?: string;

    /**
     * Whether this SmimeInfo is the default one for this user's send-as address.
     */
    isDefault?: boolean;

    /**
     * The S/MIME certificate issuer's common name.
     */
    issuerCn?: string;

    /**
     * PEM formatted X509 concatenated certificate string (standard base64 encoding). Format used for returning key, which includes public key as well as
     * certificate chain (not private key).
     */
    pem?: string;

    /**
     * PKCS#12 format containing a single private/public key pair and certificate chain. This format is only accepted from client for creating a new SmimeInfo
     * and is never returned, because the private key is not intended to be exported. PKCS#12 may be encrypted, in which case encryptedKeyPassword should be
     * set appropriately.
     */
    pkcs12?: string;
  }

  declare interface gapi$client$gmail$SmtpMsa {
    /**
     * The hostname of the SMTP service. Required.
     */
    host?: string;

    /**
     * The password that will be used for authentication with the SMTP service. This is a write-only field that can be specified in requests to create or
     * update SendAs settings; it is never populated in responses.
     */
    password?: string;

    /**
     * The port of the SMTP service. Required.
     */
    port?: number;

    /**
     * The protocol that will be used to secure communication with the SMTP service. Required.
     */
    securityMode?: string;

    /**
     * The username that will be used for authentication with the SMTP service. This is a write-only field that can be specified in requests to create or
     * update SendAs settings; it is never populated in responses.
     */
    username?: string;
  }

  declare interface gapi$client$gmail$Thread {
    /**
     * The ID of the last history record that modified this thread.
     */
    historyId?: string;

    /**
     * The unique ID of the thread.
     */
    id?: string;

    /**
     * The list of messages in the thread.
     */
    messages?: gapi$client$gmail$Message[];

    /**
     * A short part of the message text.
     */
    snippet?: string;
  }

  declare interface gapi$client$gmail$VacationSettings {
    /**
     * Flag that controls whether Gmail automatically replies to messages.
     */
    enableAutoReply?: boolean;

    /**
     * An optional end time for sending auto-replies (epoch ms). When this is specified, Gmail will automatically reply only to messages that it receives
     * before the end time. If both startTime and endTime are specified, startTime must precede endTime.
     */
    endTime?: string;

    /**
     * Response body in HTML format. Gmail will sanitize the HTML before storing it.
     */
    responseBodyHtml?: string;

    /**
     * Response body in plain text format.
     */
    responseBodyPlainText?: string;

    /**
     * Optional text to prepend to the subject line in vacation responses. In order to enable auto-replies, either the response subject or the response body
     * must be nonempty.
     */
    responseSubject?: string;

    /**
     * Flag that determines whether responses are sent to recipients who are not in the user's list of contacts.
     */
    restrictToContacts?: boolean;

    /**
     * Flag that determines whether responses are sent to recipients who are outside of the user's domain. This feature is only available for G Suite users.
     */
    restrictToDomain?: boolean;

    /**
     * An optional start time for sending auto-replies (epoch ms). When this is specified, Gmail will automatically reply only to messages that it receives
     * after the start time. If both startTime and endTime are specified, startTime must precede endTime.
     */
    startTime?: string;
  }

  declare interface gapi$client$gmail$WatchRequest {
    /**
     * Filtering behavior of labelIds list specified.
     */
    labelFilterAction?: string;

    /**
     * List of label_ids to restrict notifications about. By default, if unspecified, all changes are pushed out. If specified then dictates which labels are
     * required for a push notification to be generated.
     */
    labelIds?: string[];

    /**
     * A fully qualified Google Cloud Pub/Sub API topic name to publish the events to. This topic name &#42;&#42;must&#42;&#42; already exist in Cloud Pub/Sub and you
     * &#42;&#42;must&#42;&#42; have already granted gmail "publish" permission on it. For example, "projects/my-project-identifier/topics/my-topic-name" (using the Cloud
     * Pub/Sub "v1" topic naming format).
     *
     * Note that the "my-project-identifier" portion must exactly match your Google developer project id (the one executing this watch request).
     */
    topicName?: string;
  }

  declare interface gapi$client$gmail$WatchResponse {
    /**
     * When Gmail will stop sending notifications for mailbox updates (epoch millis). Call watch again before this time to renew the watch.
     */
    expiration?: string;

    /**
     * The ID of the mailbox's current history record.
     */
    historyId?: string;
  }

  declare interface gapi$client$gmail$DraftsResource {
    /**
     * Creates a new draft with the DRAFT label.
     */
    create(request: {
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
       * The user's email address. The special value me can be used to indicate the authenticated user.
       */
      userId: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<gapi$client$gmail$Draft>;

    /**
     * Immediately and permanently deletes the specified draft. Does not simply trash it.
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
       * The ID of the draft to delete.
       */
      id: string,

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
       * The user's email address. The special value me can be used to indicate the authenticated user.
       */
      userId: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<void>;

    /**
     * Gets the specified draft.
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
       * The format to return the draft in.
       */
      format?: string,

      /**
       * The ID of the draft to retrieve.
       */
      id: string,

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
       * The user's email address. The special value me can be used to indicate the authenticated user.
       */
      userId: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<gapi$client$gmail$Draft>;

    /**
     * Lists the drafts in the user's mailbox.
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
       * Include drafts from SPAM and TRASH in the results.
       */
      includeSpamTrash?: boolean,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * Maximum number of drafts to return.
       */
      maxResults?: number,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Page token to retrieve a specific page of results in the list.
       */
      pageToken?: string,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * Only return draft messages matching the specified query. Supports the same query format as the Gmail search box. For example,
       * "from:someuser@example.com rfc822msgid: is:unread".
       */
      q?: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * The user's email address. The special value me can be used to indicate the authenticated user.
       */
      userId: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<gapi$client$gmail$ListDraftsResponse>;

    /**
     * Sends the specified, existing draft to the recipients in the To, Cc, and Bcc headers.
     */
    send(request: {
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
       * The user's email address. The special value me can be used to indicate the authenticated user.
       */
      userId: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<gapi$client$gmail$Message>;

    /**
     * Replaces a draft's content.
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
       * The ID of the draft to update.
       */
      id: string,

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
       * The user's email address. The special value me can be used to indicate the authenticated user.
       */
      userId: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<gapi$client$gmail$Draft>;
  }

  declare interface gapi$client$gmail$HistoryResource {
    /**
     * Lists the history of all changes to the given mailbox. History results are returned in chronological order (increasing historyId).
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
       * History types to be returned by the function
       */
      historyTypes?: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * Only return messages with a label matching the ID.
       */
      labelId?: string,

      /**
       * The maximum number of history records to return.
       */
      maxResults?: number,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Page token to retrieve a specific page of results in the list.
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
       * Required. Returns history records after the specified startHistoryId. The supplied startHistoryId should be obtained from the historyId of a message,
       * thread, or previous list response. History IDs increase chronologically but are not contiguous with random gaps in between valid IDs. Supplying an
       * invalid or out of date startHistoryId typically returns an HTTP 404 error code. A historyId is typically valid for at least a week, but in some rare
       * circumstances may be valid for only a few hours. If you receive an HTTP 404 error response, your application should perform a full sync. If you receive
       * no nextPageToken in the response, there are no updates to retrieve and you can store the returned historyId for a future request.
       */
      startHistoryId?: string,

      /**
       * The user's email address. The special value me can be used to indicate the authenticated user.
       */
      userId: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<gapi$client$gmail$ListHistoryResponse>;
  }

  declare interface gapi$client$gmail$LabelsResource {
    /**
     * Creates a new label.
     */
    create(request: {
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
       * The user's email address. The special value me can be used to indicate the authenticated user.
       */
      userId: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<gapi$client$gmail$Label>;

    /**
     * Immediately and permanently deletes the specified label and removes it from any messages and threads that it is applied to.
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
       * The ID of the label to delete.
       */
      id: string,

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
       * The user's email address. The special value me can be used to indicate the authenticated user.
       */
      userId: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<void>;

    /**
     * Gets the specified label.
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
       * The ID of the label to retrieve.
       */
      id: string,

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
       * The user's email address. The special value me can be used to indicate the authenticated user.
       */
      userId: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<gapi$client$gmail$Label>;

    /**
     * Lists all labels in the user's mailbox.
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
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * The user's email address. The special value me can be used to indicate the authenticated user.
       */
      userId: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<gapi$client$gmail$ListLabelsResponse>;

    /**
     * Updates the specified label. This method supports patch semantics.
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
       * The ID of the label to update.
       */
      id: string,

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
       * The user's email address. The special value me can be used to indicate the authenticated user.
       */
      userId: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<gapi$client$gmail$Label>;

    /**
     * Updates the specified label.
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
       * The ID of the label to update.
       */
      id: string,

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
       * The user's email address. The special value me can be used to indicate the authenticated user.
       */
      userId: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<gapi$client$gmail$Label>;
  }

  declare interface gapi$client$gmail$AttachmentsResource {
    /**
     * Gets the specified message attachment.
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
       * The ID of the attachment.
       */
      id: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * The ID of the message containing the attachment.
       */
      messageId: string,

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
       * The user's email address. The special value me can be used to indicate the authenticated user.
       */
      userId: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<gapi$client$gmail$MessagePartBody>;
  }

  declare interface gapi$client$gmail$MessagesResource {
    /**
     * Deletes many messages by message ID. Provides no guarantees that messages were not already deleted or even existed at all.
     */
    batchDelete(request: {
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
       * The user's email address. The special value me can be used to indicate the authenticated user.
       */
      userId: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<void>;

    /**
     * Modifies the labels on the specified messages.
     */
    batchModify(request: {
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
       * The user's email address. The special value me can be used to indicate the authenticated user.
       */
      userId: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<void>;

    /**
     * Immediately and permanently deletes the specified message. This operation cannot be undone. Prefer messages.trash instead.
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
       * The ID of the message to delete.
       */
      id: string,

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
       * The user's email address. The special value me can be used to indicate the authenticated user.
       */
      userId: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<void>;

    /**
     * Gets the specified message.
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
       * The format to return the message in.
       */
      format?: string,

      /**
       * The ID of the message to retrieve.
       */
      id: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * When given and format is METADATA, only include headers specified.
       */
      metadataHeaders?: string,

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
       * The user's email address. The special value me can be used to indicate the authenticated user.
       */
      userId: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<gapi$client$gmail$Message>;

    /**
     * Imports a message into only this user's mailbox, with standard email delivery scanning and classification similar to receiving via SMTP. Does not send
     * a message.
     */
    import(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * Mark the email as permanently deleted (not TRASH) and only visible in Google Vault to a Vault administrator. Only used for G Suite accounts.
       */
      deleted?: boolean,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * Source for Gmail's internal date of the message.
       */
      internalDateSource?: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * Ignore the Gmail spam classifier decision and never mark this email as SPAM in the mailbox.
       */
      neverMarkSpam?: boolean,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * Process calendar invites in the email and add any extracted meetings to the Google Calendar for this user.
       */
      processForCalendar?: boolean,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * The user's email address. The special value me can be used to indicate the authenticated user.
       */
      userId: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<gapi$client$gmail$Message>;

    /**
     * Directly inserts a message into only this user's mailbox similar to IMAP APPEND, bypassing most scanning and classification. Does not send a message.
     */
    insert(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * Mark the email as permanently deleted (not TRASH) and only visible in Google Vault to a Vault administrator. Only used for G Suite accounts.
       */
      deleted?: boolean,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * Source for Gmail's internal date of the message.
       */
      internalDateSource?: string,

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
       * The user's email address. The special value me can be used to indicate the authenticated user.
       */
      userId: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<gapi$client$gmail$Message>;

    /**
     * Lists the messages in the user's mailbox.
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
       * Include messages from SPAM and TRASH in the results.
       */
      includeSpamTrash?: boolean,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * Only return messages with labels that match all of the specified label IDs.
       */
      labelIds?: string,

      /**
       * Maximum number of messages to return.
       */
      maxResults?: number,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Page token to retrieve a specific page of results in the list.
       */
      pageToken?: string,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * Only return messages matching the specified query. Supports the same query format as the Gmail search box. For example, "from:someuser@example.com
       * rfc822msgid:<somemsgid@example.com> is:unread". Parameter cannot be used when accessing the api using the gmail.metadata scope.
       */
      q?: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * The user's email address. The special value me can be used to indicate the authenticated user.
       */
      userId: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<gapi$client$gmail$ListMessagesResponse>;

    /**
     * Modifies the labels on the specified message.
     */
    modify(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * The ID of the message to modify.
       */
      id: string,

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
       * The user's email address. The special value me can be used to indicate the authenticated user.
       */
      userId: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<gapi$client$gmail$Message>;

    /**
     * Sends the specified message to the recipients in the To, Cc, and Bcc headers.
     */
    send(request: {
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
       * The user's email address. The special value me can be used to indicate the authenticated user.
       */
      userId: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<gapi$client$gmail$Message>;

    /**
     * Moves the specified message to the trash.
     */
    trash(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * The ID of the message to Trash.
       */
      id: string,

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
       * The user's email address. The special value me can be used to indicate the authenticated user.
       */
      userId: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<gapi$client$gmail$Message>;

    /**
     * Removes the specified message from the trash.
     */
    untrash(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * The ID of the message to remove from Trash.
       */
      id: string,

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
       * The user's email address. The special value me can be used to indicate the authenticated user.
       */
      userId: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<gapi$client$gmail$Message>;
    attachments: gapi$client$gmail$AttachmentsResource;
  }

  declare interface gapi$client$gmail$FiltersResource {
    /**
     * Creates a filter.
     */
    create(request: {
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
       * User's email address. The special value "me" can be used to indicate the authenticated user.
       */
      userId: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<gapi$client$gmail$Filter>;

    /**
     * Deletes a filter.
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
       * The ID of the filter to be deleted.
       */
      id: string,

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
       * User's email address. The special value "me" can be used to indicate the authenticated user.
       */
      userId: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<void>;

    /**
     * Gets a filter.
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
       * The ID of the filter to be fetched.
       */
      id: string,

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
       * User's email address. The special value "me" can be used to indicate the authenticated user.
       */
      userId: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<gapi$client$gmail$Filter>;

    /**
     * Lists the message filters of a Gmail user.
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
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * User's email address. The special value "me" can be used to indicate the authenticated user.
       */
      userId: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<gapi$client$gmail$ListFiltersResponse>;
  }

  declare interface gapi$client$gmail$ForwardingAddressesResource {
    /**
     * Creates a forwarding address. If ownership verification is required, a message will be sent to the recipient and the resource's verification status
     * will be set to pending; otherwise, the resource will be created with verification status set to accepted.
     *
     * This method is only available to service account clients that have been delegated domain-wide authority.
     */
    create(request: {
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
       * User's email address. The special value "me" can be used to indicate the authenticated user.
       */
      userId: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<gapi$client$gmail$ForwardingAddress>;

    /**
     * Deletes the specified forwarding address and revokes any verification that may have been required.
     *
     * This method is only available to service account clients that have been delegated domain-wide authority.
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
       * The forwarding address to be deleted.
       */
      forwardingEmail: string,

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
       * User's email address. The special value "me" can be used to indicate the authenticated user.
       */
      userId: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<void>;

    /**
     * Gets the specified forwarding address.
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
       * The forwarding address to be retrieved.
       */
      forwardingEmail: string,

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
       * User's email address. The special value "me" can be used to indicate the authenticated user.
       */
      userId: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<gapi$client$gmail$ForwardingAddress>;

    /**
     * Lists the forwarding addresses for the specified account.
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
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * User's email address. The special value "me" can be used to indicate the authenticated user.
       */
      userId: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<gapi$client$gmail$ListForwardingAddressesResponse>;
  }

  declare interface gapi$client$gmail$SmimeInfoResource {
    /**
     * Deletes the specified S/MIME config for the specified send-as alias.
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
       * The immutable ID for the SmimeInfo.
       */
      id: string,

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
       * The email address that appears in the "From:" header for mail sent using this alias.
       */
      sendAsEmail: string,

      /**
       * The user's email address. The special value me can be used to indicate the authenticated user.
       */
      userId: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<void>;

    /**
     * Gets the specified S/MIME config for the specified send-as alias.
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
       * The immutable ID for the SmimeInfo.
       */
      id: string,

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
       * The email address that appears in the "From:" header for mail sent using this alias.
       */
      sendAsEmail: string,

      /**
       * The user's email address. The special value me can be used to indicate the authenticated user.
       */
      userId: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<gapi$client$gmail$SmimeInfo>;

    /**
     * Insert (upload) the given S/MIME config for the specified send-as alias. Note that pkcs12 format is required for the key.
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
       * The email address that appears in the "From:" header for mail sent using this alias.
       */
      sendAsEmail: string,

      /**
       * The user's email address. The special value me can be used to indicate the authenticated user.
       */
      userId: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<gapi$client$gmail$SmimeInfo>;

    /**
     * Lists S/MIME configs for the specified send-as alias.
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
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * The email address that appears in the "From:" header for mail sent using this alias.
       */
      sendAsEmail: string,

      /**
       * The user's email address. The special value me can be used to indicate the authenticated user.
       */
      userId: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<gapi$client$gmail$ListSmimeInfoResponse>;

    /**
     * Sets the default S/MIME config for the specified send-as alias.
     */
    setDefault(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * The immutable ID for the SmimeInfo.
       */
      id: string,

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
       * The email address that appears in the "From:" header for mail sent using this alias.
       */
      sendAsEmail: string,

      /**
       * The user's email address. The special value me can be used to indicate the authenticated user.
       */
      userId: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<void>;
  }

  declare interface gapi$client$gmail$SendAsResource {
    /**
     * Creates a custom "from" send-as alias. If an SMTP MSA is specified, Gmail will attempt to connect to the SMTP service to validate the configuration
     * before creating the alias. If ownership verification is required for the alias, a message will be sent to the email address and the resource's
     * verification status will be set to pending; otherwise, the resource will be created with verification status set to accepted. If a signature is
     * provided, Gmail will sanitize the HTML before saving it with the alias.
     *
     * This method is only available to service account clients that have been delegated domain-wide authority.
     */
    create(request: {
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
       * User's email address. The special value "me" can be used to indicate the authenticated user.
       */
      userId: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<gapi$client$gmail$SendAs>;

    /**
     * Deletes the specified send-as alias. Revokes any verification that may have been required for using it.
     *
     * This method is only available to service account clients that have been delegated domain-wide authority.
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
       * The send-as alias to be deleted.
       */
      sendAsEmail: string,

      /**
       * User's email address. The special value "me" can be used to indicate the authenticated user.
       */
      userId: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<void>;

    /**
     * Gets the specified send-as alias. Fails with an HTTP 404 error if the specified address is not a member of the collection.
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
       * The send-as alias to be retrieved.
       */
      sendAsEmail: string,

      /**
       * User's email address. The special value "me" can be used to indicate the authenticated user.
       */
      userId: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<gapi$client$gmail$SendAs>;

    /**
     * Lists the send-as aliases for the specified account. The result includes the primary send-as address associated with the account as well as any custom
     * "from" aliases.
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
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * User's email address. The special value "me" can be used to indicate the authenticated user.
       */
      userId: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<gapi$client$gmail$ListSendAsResponse>;

    /**
     * Updates a send-as alias. If a signature is provided, Gmail will sanitize the HTML before saving it with the alias.
     *
     * Addresses other than the primary address for the account can only be updated by service account clients that have been delegated domain-wide authority.
     * This method supports patch semantics.
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
       * The send-as alias to be updated.
       */
      sendAsEmail: string,

      /**
       * User's email address. The special value "me" can be used to indicate the authenticated user.
       */
      userId: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<gapi$client$gmail$SendAs>;

    /**
     * Updates a send-as alias. If a signature is provided, Gmail will sanitize the HTML before saving it with the alias.
     *
     * Addresses other than the primary address for the account can only be updated by service account clients that have been delegated domain-wide authority.
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
       * The send-as alias to be updated.
       */
      sendAsEmail: string,

      /**
       * User's email address. The special value "me" can be used to indicate the authenticated user.
       */
      userId: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<gapi$client$gmail$SendAs>;

    /**
     * Sends a verification email to the specified send-as alias address. The verification status must be pending.
     *
     * This method is only available to service account clients that have been delegated domain-wide authority.
     */
    verify(request: {
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
       * The send-as alias to be verified.
       */
      sendAsEmail: string,

      /**
       * User's email address. The special value "me" can be used to indicate the authenticated user.
       */
      userId: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<void>;
    smimeInfo: gapi$client$gmail$SmimeInfoResource;
  }

  declare interface gapi$client$gmail$SettingsResource {
    /**
     * Gets the auto-forwarding setting for the specified account.
     */
    getAutoForwarding(request: {
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
       * User's email address. The special value "me" can be used to indicate the authenticated user.
       */
      userId: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<gapi$client$gmail$AutoForwarding>;

    /**
     * Gets IMAP settings.
     */
    getImap(request: {
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
       * User's email address. The special value "me" can be used to indicate the authenticated user.
       */
      userId: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<gapi$client$gmail$ImapSettings>;

    /**
     * Gets POP settings.
     */
    getPop(request: {
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
       * User's email address. The special value "me" can be used to indicate the authenticated user.
       */
      userId: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<gapi$client$gmail$PopSettings>;

    /**
     * Gets vacation responder settings.
     */
    getVacation(request: {
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
       * User's email address. The special value "me" can be used to indicate the authenticated user.
       */
      userId: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<gapi$client$gmail$VacationSettings>;

    /**
     * Updates the auto-forwarding setting for the specified account. A verified forwarding address must be specified when auto-forwarding is enabled.
     *
     * This method is only available to service account clients that have been delegated domain-wide authority.
     */
    updateAutoForwarding(request: {
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
       * User's email address. The special value "me" can be used to indicate the authenticated user.
       */
      userId: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<gapi$client$gmail$AutoForwarding>;

    /**
     * Updates IMAP settings.
     */
    updateImap(request: {
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
       * User's email address. The special value "me" can be used to indicate the authenticated user.
       */
      userId: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<gapi$client$gmail$ImapSettings>;

    /**
     * Updates POP settings.
     */
    updatePop(request: {
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
       * User's email address. The special value "me" can be used to indicate the authenticated user.
       */
      userId: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<gapi$client$gmail$PopSettings>;

    /**
     * Updates vacation responder settings.
     */
    updateVacation(request: {
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
       * User's email address. The special value "me" can be used to indicate the authenticated user.
       */
      userId: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<gapi$client$gmail$VacationSettings>;
    filters: gapi$client$gmail$FiltersResource;
    forwardingAddresses: gapi$client$gmail$ForwardingAddressesResource;
    sendAs: gapi$client$gmail$SendAsResource;
  }

  declare interface gapi$client$gmail$ThreadsResource {
    /**
     * Immediately and permanently deletes the specified thread. This operation cannot be undone. Prefer threads.trash instead.
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
       * ID of the Thread to delete.
       */
      id: string,

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
       * The user's email address. The special value me can be used to indicate the authenticated user.
       */
      userId: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<void>;

    /**
     * Gets the specified thread.
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
       * The format to return the messages in.
       */
      format?: string,

      /**
       * The ID of the thread to retrieve.
       */
      id: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * When given and format is METADATA, only include headers specified.
       */
      metadataHeaders?: string,

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
       * The user's email address. The special value me can be used to indicate the authenticated user.
       */
      userId: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<gapi$client$gmail$Thread>;

    /**
     * Lists the threads in the user's mailbox.
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
       * Include threads from SPAM and TRASH in the results.
       */
      includeSpamTrash?: boolean,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * Only return threads with labels that match all of the specified label IDs.
       */
      labelIds?: string,

      /**
       * Maximum number of threads to return.
       */
      maxResults?: number,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Page token to retrieve a specific page of results in the list.
       */
      pageToken?: string,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * Only return threads matching the specified query. Supports the same query format as the Gmail search box. For example, "from:someuser@example.com
       * rfc822msgid: is:unread". Parameter cannot be used when accessing the api using the gmail.metadata scope.
       */
      q?: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * The user's email address. The special value me can be used to indicate the authenticated user.
       */
      userId: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<gapi$client$gmail$ListThreadsResponse>;

    /**
     * Modifies the labels applied to the thread. This applies to all messages in the thread.
     */
    modify(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * The ID of the thread to modify.
       */
      id: string,

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
       * The user's email address. The special value me can be used to indicate the authenticated user.
       */
      userId: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<gapi$client$gmail$Thread>;

    /**
     * Moves the specified thread to the trash.
     */
    trash(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * The ID of the thread to Trash.
       */
      id: string,

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
       * The user's email address. The special value me can be used to indicate the authenticated user.
       */
      userId: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<gapi$client$gmail$Thread>;

    /**
     * Removes the specified thread from the trash.
     */
    untrash(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * The ID of the thread to remove from Trash.
       */
      id: string,

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
       * The user's email address. The special value me can be used to indicate the authenticated user.
       */
      userId: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<gapi$client$gmail$Thread>;
  }

  declare interface gapi$client$gmail$UsersResource {
    /**
     * Gets the current user's Gmail profile.
     */
    getProfile(request: {
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
       * The user's email address. The special value me can be used to indicate the authenticated user.
       */
      userId: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<gapi$client$gmail$Profile>;

    /**
     * Stop receiving push notifications for the given user mailbox.
     */
    stop(request: {
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
       * The user's email address. The special value me can be used to indicate the authenticated user.
       */
      userId: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<void>;

    /**
     * Set up or update a push notification watch on the given user mailbox.
     */
    watch(request: {
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
       * The user's email address. The special value me can be used to indicate the authenticated user.
       */
      userId: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<gapi$client$gmail$WatchResponse>;
    drafts: gapi$client$gmail$DraftsResource;
    history: gapi$client$gmail$HistoryResource;
    labels: gapi$client$gmail$LabelsResource;
    messages: gapi$client$gmail$MessagesResource;
    settings: gapi$client$gmail$SettingsResource;
    threads: gapi$client$gmail$ThreadsResource;
  }
}
