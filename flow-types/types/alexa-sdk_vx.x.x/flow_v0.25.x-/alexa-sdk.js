declare module "alexa-sdk" {
  declare export function handler<T: Request>(
    event: RequestBody<T>,
    context: Context,
    callback?: (err: any, response: any) => void
  ): AlexaObject<T>;

  declare export function CreateStateHandler(state: string, obj: any): any;

  declare export var StateString: string;
  declare export type ConfirmationStatuses = "NONE" | "DENIED" | "CONFIRMED";
  declare export type DialogStates = "STARTED" | "IN_PROGRESS" | "COMPLETED";
  declare export type ListItemObjectStatus = "active" | "completed";
  declare export type ListObjectState = "active" | "archived";
  declare export type ImageSourceSize =
    | "X_SMALL"
    | "SMALL"
    | "MEDIUM"
    | "LARGE"
    | "X_LARGE";
  declare export type TemplateBackButtonVisibility = "HIDDEN" | "VISIBLE";
  declare export type TemplateType =
    | "BodyTemplate1"
    | "BodyTemplate2"
    | "BodyTemplate3"
    | "BodyTemplate6"
    | "BodyTemplate6"
    | "ListTemplate1"
    | "ListTemplate2";
  declare export type AudioPlayerActivity =
    | "IDLE"
    | "PAUSED"
    | "PLAYING"
    | "BUFFER_UNDERRUN"
    | "FINISHED"
    | "STOPPED";
  declare export type CardType =
    | "Standard"
    | "Simple"
    | "LinkAccount"
    | "AskForPermissionsConsent";
  declare export type HintType = "PlainText";
  declare export type DirectiveTypes =
    | "AudioPlayer.Play"
    | "AudioPlayer.Stop"
    | "AudioPlayer.ClearQueue"
    | "Display.RenderTemplate"
    | "Hint"
    | "VideoApp.Launch";
  declare export type TextContentType = "PlainText" | "RichText";
  declare export type MediaErrorType =
    | "MEDIA_ERROR_UNKNOWN"
    | "MEDIA_ERROR_INVALID_REQUEST"
    | "MEDIA_ERROR_SERVICE_UNAVAILABLE"
    | "MEDIA_ERROR_INTERNAL_SERVER_ERROR"
    | "MEDIA_ERROR_INTERNAL_DEVICE_ERROR";
  declare export type SystemErrorType =
    | "INVALID_RESPONSE"
    | "DEVICE_COMMUNICATION_ERROR"
    | "INTERNAL_ERROR";
  declare export interface CardImage {
    /**
     * Recommended size (in px): 720w x 480h
     */
    smallImageUrl: string;

    /**
     * Recommended size (in px): 1200w x 800h
     */
    largeImageUrl: string;
  }
  declare export interface ImageSource {
    url: string;
    widthPixels?: number;
    heightPixels?: number;

    /**
     * Recommended sizes for the following dimensions (in px):
     * 480 x 320 for X_SMALL,
     * 720 x 480 for SMALL,
     * 960 x 640 for MEDIUM,
     * 1200 x 800 for LARGE,
     * 1920 x 1280 for X_LARGE
     */
    size?: ImageSourceSize;
  }
  declare export interface Image {
    contentDescription: string;
    sources: ImageSource[];
  }
  declare export interface TextField {
    text: string;
    type: string;
  }
  declare export interface TextContent {
    primaryText?: TextField;
    secondaryText?: TextField;
    tertiaryText?: TextField;
  }
  declare export interface ListItem {
    image?: Image;
    token: string;
    textContent?: TextContent;
  }
  declare export interface Template {
    title?: string;
    token: string;
    backgroundImage?: Image;

    /**
     * Visibility of the back button.
     */
    backButton?: TemplateBackButtonVisibility;

    /**
     * Template type.
     */
    type: TemplateType;
    image?: Image;
    listItems?: ListItem[];
  }
  declare export type AlexaObject<T: Request> = {
    _event: any,
    _context: any,
    _callback: any,
    state: any,
    appId: any,
    response: any,
    resources: any,
    dynamoDBTableName: any,
    saveBeforeResponse: boolean,
    registerHandlers: (...handlers: Array<Handlers<T>>) => any,
    execute: () => void
  } & Handler<T>;

  declare export interface Handlers<T: Request> {
    [intent: string]: () => void;
  }
  declare export interface Handler<T: Request> {
    on: any;
    emit(event: string, ...args: any[]): boolean;
    emitWithState: any;
    state: any;
    handler: any;
    i18n: any;
    locale: any;
    event: RequestBody<T>;
    attributes: any;
    context: any;
    callback: (param: any) => void;
    name: any;
    isOverriden: any;
    t: (token: string, ...args: any[]) => void;
    response: ResponseBuilder;
  }
  declare export interface Context {
    callbackWaitsForEmptyEventLoop: boolean;
    logGroupName: string;
    logStreamName: string;
    functionName: string;
    memoryLimitInMB: string;
    functionVersion: string;
    invokeid: string;
    awsRequestId: string;
    System?: System;
    AudioPlayer?: AudioPlayer;
  }
  declare export interface Application {
    applicationId: string;
    [key: string]: string;
  }
  declare export interface System {
    apiAccessToken: string;
    apiEndpoint: string;
    application: Application;
    device: any;
    user: SessionUser;
  }
  declare export interface AudioPlayer {
    token: string;
    offsetInMilliseconds: number;

    /**
     * Player activity
     */
    playerActivity: AudioPlayerActivity;
  }
  declare export interface Display {
    token: string;
  }
  declare export interface Device {
    deviceId: string;
    supportedInterfaces: DeviceInterfaces;
  }
  declare export interface DeviceInterfaces {
    AudioPlayer: any;
    Display: any;
  }
  declare export interface RequestContext {
    AudioPlayer?: AudioPlayer;
    Display?: Display;
    System: System;
  }
  declare export interface RequestBody<T: Request> {
    version: string;
    session: Session;
    request: T;
    context: RequestContext;
  }
  declare export interface Session {
    new: boolean;
    sessionId: string;
    attributes: {
      [key: string]: any
    };
    application: Application;
    user: SessionUser;
  }
  declare export interface SessionUser {
    userId: string;
    accessToken?: string;
    permissions: Permissions;
  }
  declare export interface Permissions {
    /**
     * @deprecated
     */
    consentToken: string;
    [key: string]: string;
  }
  declare export type LaunchRequest = {} & Request;

  declare export type IntentRequest = {
    dialogState?: DialogStates,
    intent?: Intent
  } & Request;

  declare export type SessionEndedRequest = {
    reason?: string
  } & Request;

  declare export type AudioPlayerPlaybackRequest = {
    token: string,
    offsetInMilliseconds: number
  } & Request;

  declare export type AudioPlayerPlaybackFailedRequest = {
    token: string,
    error: MediaError,
    currentPlaybackState: AudioPlayer
  } & Request;

  declare export interface MediaError {
    type: MediaErrorType;
    message: string;
  }
  declare export type SystemExceptionEncounteredRequest = {
    error: SystemError,
    cause: ErrorCause
  } & Request;

  declare export interface SystemError {
    type: SystemErrorType;
    message: string;
  }
  declare export interface ErrorCause {
    requestId: string;
  }
  declare export type SkillAccountRequest = {
    body: SkillAccountBody
  } & Request;

  declare export interface SkillAccountBody {
    accessToken: string;
  }
  declare export type SkillPermissionRequest = {
    body: SkillPermissionBody
  } & Request;

  declare export interface SkillPermissionBody {
    acceptedPermissions: PermissionScope[];
  }
  declare export interface PermissionScope {
    scope: string;
  }
  declare export type ListEventRequest = {
    body: ListEventBody
  } & Request;

  declare export interface ListEventBody {
    listId: string;
    listItemIds?: string[];
  }
  declare export interface Request {
    type:
      | "LaunchRequest"
      | "IntentRequest"
      | "SessionEndedRequest"
      | "System.ExceptionEncountered"
      | "AudioPlayer.PlaybackStarted"
      | "AudioPlayer.PlaybackFinished"
      | "AudioPlayer.PlaybackStopped"
      | "AudioPlayer.PlaybackNearlyFinished"
      | "PlaybackController.NextCommandIssued"
      | "PlaybackController.PauseCommandIssued"
      | "PlaybackController.PlayCommandIssued"
      | "PlaybackController.PreviousCommandIssued"
      | "AlexaSkillEvent.SkillAccountLinked"
      | "AlexaSkillEvent.SkillEnabled"
      | "AlexaSkillEvent.SkillDisabled"
      | "AlexaSkillEvent.SkillPermissionAccepted"
      | "AlexaSkillEvent.SkillPermissionChanged"
      | "AlexaHouseholdListEvent.ListCreated"
      | "AlexaHouseholdListEvent.ListUpdated"
      | "AlexaHouseholdListEvent.ListDeleted"
      | "AlexaHouseholdListEvent.ItemsCreated"
      | "AlexaHouseholdListEvent.ItemsUpdated"
      | "AlexaHouseholdListEvent.ItemsDeleted";
    requestId: string;
    timestamp: string;
    locale?: string;
  }
  declare export interface ResolutionStatus {
    code: string;
  }
  declare export interface ResolutionValue {
    name: string;
    id: string;
  }
  declare export interface ResolutionValueContainer {
    value: ResolutionValue;
  }
  declare export interface Resolution {
    authority: string;
    status: ResolutionStatus;
    values: ResolutionValueContainer[];
  }
  declare export interface Resolutions {
    resolutionsPerAuthority: Resolution[];
  }
  declare export interface SlotValue {
    confirmationStatus?: ConfirmationStatuses;
    name: string;
    value?: any;
    resolutions?: Resolutions;
  }
  declare export interface Intent {
    confirmationStatus?: ConfirmationStatuses;
    name: string;
    slots: Record<string, SlotValue>;
  }
  declare export interface ResponseBody {
    version: string;
    sessionAttributes?: any;
    response: Response;
  }
  declare export interface Response {
    outputSpeech?: OutputSpeech;
    card?: Card;
    reprompt?: Reprompt;
    directives?: any;
    shouldEndSession?: boolean;
  }
  declare export interface OutputSpeech {
    type: "PlainText" | "SSML";
    text?: string;
    ssml?: string;
  }
  declare export interface Card {
    type: CardType;
    title?: string;
    content?: string;
    text?: string;
    image?: CardImage;
  }
  declare export interface Reprompt {
    outputSpeech: OutputSpeech;
  }
  declare export interface ApiClientOptions {
    hostname: string;
    port: string;
    path: string;
    protocol: string;
    headers: string;
    method: string;
  }
  declare export interface ApiClientResponse {
    statusCode: string;
    statusText: string;
    body: { [key: string]: any };
    headers: { [key: string]: any };
  }

  /**
   * Todo-ListItem class
   * Refer https://developer.amazon.com/docs/custom-skills/access-the-alexa-shopping-and-to-do-lists.html
   */
  declare export interface ListItemObject {
    /**
     * item id (String, limit 60 characters)
     */
    id: string;

    /**
     * item value (String, limit is 256 characters)
     */
    value: string;

    /**
     * item status
     */
    status?: ListItemObjectStatus;

    /**
     * item version (Positive integer)
     */
    version: number;

    /**
     * created time (ISO 8601 time format with time zone)
     */
    createdTime: Date;

    /**
     * updated time (ISO 8601 time format with time zone)
     */
    updatedTime: Date;

    /**
     * URL to retrieve the item (String)
     */
    href?: string;
  }

  /**
   * Todo-List class
   * Refer https://developer.amazon.com/docs/custom-skills/access-the-alexa-shopping-and-to-do-lists.html
   */
  declare export interface ListObject {
    /**
     * list id (String)
     */
    listId: string;

    /**
     * list name (String)
     */
    name: string;

    /**
     * state
     * "active" or "archived" (Enum)
     */
    state?: ListObjectState;

    /**
     * Possibly status of the list (or state?)
     * Fetched from commit eebba0d at https://github.com/alexa/alexa-skills-kit-sdk-for-nodejs/
     * File path: alexa-skills-kit-sdk-for-nodejs/lib/services/listManagementService.js
     */
    status?: string;

    /**
     * list version (Positive integer)
     */
    version?: number;

    /**
     * Urls to active and completed items
     * href is lint to the items having certain status.
     * The status can be "active" or "completed".
     */
    statusMap: {
      href: string,
      status: ListItemObjectStatus
    };

    /**
     * Items that belong to this list.
     */
    items: ListItemObject[];
    next?: ListLinks;
  }
  declare export interface ListLinks {
    next: string;
  }
  declare export interface ListCollection {
    lists: ListObject[];
  }
  declare export interface CreateListParams {
    name: string;
    state: "active";
  }
  declare export interface UpdateListParams {
    name: string;
    state: ListObjectState;
    version: number;
  }
  declare export interface CreateListItemParams {
    value: string;
    status: ListItemObjectStatus;
  }
  declare export interface UpdateListItemParams {
    value: string;
    status: ListItemObjectStatus;
    version: number;
  }
  declare interface templateBuilders$SetTextContent<
    T: templateBuilders$TemplateBuilder<T>
  > {
    setTextContent(
      primaryText: TextField,
      secondaryText?: TextField,
      tertiaryText?: TextField
    ): T;
  }

  declare interface templateBuilders$SetListItems<
    T: templateBuilders$TemplateBuilder<T>
  > {
    setListItems(listItems: ListItem[]): T;
  }

  /**
   * Refer https://developer.amazon.com/docs/custom-skills/display-interface-reference.html#image-sizes
   */
  declare class templateBuilders$TemplateBuilder<
    T: templateBuilders$TemplateBuilder<T>
  > {
    template: Template;
    constructor(): this;

    /**
     * Sets the title of the template
     * @param title title
     * @returns TemplateBuilder
     */
    setTitle(title: string): T;

    /**
     * Sets the token of the template
     * @param token token
     * @returns TemplateBuilder
     */
    setToken(token: string): T;

    /**
     * Sets the background image of the template
     * @param image image
     * @returns TemplateBuilder
     */
    setBackgroundImage(image: Image): T;

    /**
     * Sets the backButton behavior
     * @param backButtonBehavior "VISIBLE" or "HIDDEN"
     * @returns TemplateBuilder
     */
    setBackButtonBehavior(backButtonBehavior: string): T;

    /**
     * Builds the template JSON object
     * @returns Template
     */
    build(): Template;
  }

  /**
   * Used to build a list of ListItems for ListTemplate
   */
  declare class templateBuilders$ListItemBuilder {
    constructor(): this;
    items: ListItem[];

    /**
     * Add an item to the list of template
     * @param image image
     * @param token token
     * @param primaryText primaryText
     * @param secondaryText secondaryText
     * @param tertiaryText tertiaryText
     */
    addItem(
      image: Image,
      token: string,
      primaryText: TextField,
      secondaryText?: TextField,
      tertiaryText?: TextField
    ): templateBuilders$ListItemBuilder;
    build(): ListItem[];
  }

  /**
   * Used to create BodyTemplate1 objects
   */
  declare class templateBuilders$BodyTemplate1Builder
    mixins templateBuilders$TemplateBuilder<templateBuilders$BodyTemplate1Builder>,
      templateBuilders$SetTextContent<templateBuilders$BodyTemplate1Builder> {
    constructor(): this;

    /**
     * Sets the text content for the template
     * @param primaryText primaryText
     * @param secondaryText secondaryText
     * @param tertiaryText tertiaryText
     * @returns BodyTemplate1Builder
     */
    setTextContent(
      primaryText: TextField,
      secondaryText?: TextField,
      tertiaryText?: TextField
    ): templateBuilders$BodyTemplate1Builder;
  }

  /**
   * Used to create BodyTemplate2 objects
   */
  declare class templateBuilders$BodyTemplate2Builder
    mixins templateBuilders$TemplateBuilder<templateBuilders$BodyTemplate2Builder>,
      templateBuilders$SetTextContent<templateBuilders$BodyTemplate2Builder> {
    constructor(): this;

    /**
     * Sets the image for the template
     * @param image image
     * @returns BodyTemplate2Builder
     */
    setImage(image: Image): templateBuilders$BodyTemplate2Builder;

    /**
     * Sets the text content for the template
     * @param primaryText primaryText
     * @param secondaryText secondaryText
     * @param tertiaryText tertiaryText
     * @returns BodyTemplate2Builder
     */
    setTextContent(
      primaryText: TextField,
      secondaryText?: TextField,
      tertiaryText?: TextField
    ): templateBuilders$BodyTemplate2Builder;
  }

  /**
   * Used to create BodyTemplate3 objects
   */
  declare class templateBuilders$BodyTemplate3Builder
    mixins templateBuilders$TemplateBuilder<templateBuilders$BodyTemplate3Builder>,
      templateBuilders$SetTextContent<templateBuilders$BodyTemplate3Builder> {
    constructor(): this;

    /**
     * Sets the image for the template
     * @param image image
     * @returns BodyTemplate3Builder
     */
    setImage(image: Image): templateBuilders$BodyTemplate3Builder;

    /**
     * Sets the text content for the template
     * @param primaryText primaryText
     * @param secondaryText secondaryText
     * @param tertiaryText tertiaryText
     * @returns BodyTemplate3Builder
     */
    setTextContent(
      primaryText: TextField,
      secondaryText?: TextField,
      tertiaryText?: TextField
    ): templateBuilders$BodyTemplate3Builder;
  }

  /**
   * Used to create BodyTemplate6 objects
   */
  declare class templateBuilders$BodyTemplate6Builder
    mixins templateBuilders$TemplateBuilder<templateBuilders$BodyTemplate6Builder>,
      templateBuilders$SetTextContent<templateBuilders$BodyTemplate6Builder> {
    constructor(): this;

    /**
     * Sets the image for the template
     * @param image image
     * @returns BodyTemplate6Builder
     */
    setImage(image: Image): templateBuilders$BodyTemplate6Builder;

    /**
     * Sets the text content for the template
     * @param primaryText primaryText
     * @param secondaryText secondaryText
     * @param tertiaryText tertiaryText
     * @returns BodyTemplate6Builder
     */
    setTextContent(
      primaryText: TextField,
      secondaryText?: TextField,
      tertiaryText?: TextField
    ): templateBuilders$BodyTemplate6Builder;
  }

  /**
   * Used to create BodyTemplate7 objects
   */
  declare class templateBuilders$BodyTemplate7Builder
    mixins templateBuilders$TemplateBuilder<templateBuilders$BodyTemplate7Builder> {
    constructor(): this;

    /**
     * Sets the image for the template
     * @param image image
     * @returns BodyTemplate7Builder
     */
    setImage(image: Image): templateBuilders$BodyTemplate7Builder;
  }

  /**
   * Used to create ListTemplate1 objects
   */
  declare class templateBuilders$ListTemplate1Builder
    mixins templateBuilders$TemplateBuilder<templateBuilders$ListTemplate1Builder>,
      templateBuilders$SetListItems<templateBuilders$ListTemplate1Builder> {
    constructor(): this;

    /**
     * Set the items for the list
     * @param listItems listItems
     * @returns ListTemplate1Builder
     */
    setListItems(listItems: ListItem[]): templateBuilders$ListTemplate1Builder;
  }

  /**
   * Used to create ListTemplate2 objects
   */
  declare class templateBuilders$ListTemplate2Builder
    mixins templateBuilders$TemplateBuilder<templateBuilders$ListTemplate2Builder>,
      templateBuilders$SetListItems<templateBuilders$ListTemplate2Builder> {
    constructor(): this;

    /**
     * Set the items for the list
     * @param listItems listItems
     * @returns ListTemplate2Builder
     */
    setListItems(listItems: ListItem[]): templateBuilders$ListTemplate2Builder;
  }
  declare class services$ApiClient {
    /**
     * Make a POST API call to the specified uri with headers and optional body
     * @param uri http(s?) endpoint to call
     * @param headers Key value pair of headers
     * @param body post body to send
     * @returns Promise<ApiClientResponse>
     */
    post(
      uri: string,
      headers: { [key: string]: any },
      body?: string
    ): Promise<ApiClientResponse>;

    /**
     * Make a PUT API call to the specified uri with headers and optional body
     * @param uri http(s?) endpoint to call
     * @param headers Key value pair of headers
     * @param body post body to send
     * @returns Promise<ApiClientResponse>
     */
    put(
      uri: string,
      headers: { [key: string]: any },
      body?: string
    ): Promise<ApiClientResponse>;

    /**
     * Make a GET API call to the specified uri with headers
     * @param uri http(s?) endpoint to call
     * @param headers key value pair of headers
     * @returns Promise<ApiClientResponse>
     */
    get(
      uri: string,
      headers: { [key: string]: any }
    ): Promise<ApiClientResponse>;

    /**
     * Make a DELETE API call to the specified uri with headers
     * @param uri http(s?) endpoint to call
     * @param headers key value pair of headers
     * @returns Promise<ApiClientResponse>
     */
    delete(
      uri: string,
      headers: { [key: string]: any }
    ): Promise<ApiClientResponse>;
  }

  declare class services$DeviceAddressService {
    /**
     * Create an instance of DeviceAddressService
     * @param apiClient ApiClient
     */
    constructor(apiClient?: services$ApiClient): this;

    /**
     * Get full address information from Alexa Device Address API
     * @param deviceId deviceId from Alexa request
     * @param apiEndpoint API apiEndpoint from Alexa request
     * @param token bearer token for device address permission
     * @returns Promise<object>
     */
    getFullAddress(
      deviceId: string,
      apiEndpoint: string,
      token: string
    ): Promise<{ [key: string]: any }>;

    /**
     * Get country and postal information from Alexa Device Address API
     * @param deviceId deviceId from Alexa request
     * @param apiEndpoint API apiEndpoint from Alexa request
     * @param token bearer token for device address permission
     * @returns Promise<object>
     */
    getCountryAndPostalCode(
      deviceId: string,
      apiEndpoint: string,
      token: string
    ): Promise<{ [key: string]: any }>;
  }

  declare class services$DirectiveService {
    /**
     * Creates an instance of DirectiveService.
     * @param apiClient ApiClient
     */
    constructor(apiClient?: services$ApiClient): this;

    /**
     * Send the specified directiveObj to Alexa directive service
     * @param directive directive to send to service
     * @param apiEndpoint API endpoint from Alexa request
     * @param token bearer token for directive service
     * @returns Promise<void>
     */
    enqueue(
      directive: { [key: string]: any },
      apiEndpoint: string,
      token: string
    ): Promise<void>;
  }

  declare class services$ListManagementService {
    /**
     * Create an instance of ListManagementService
     * @param apiClient apiClient
     */
    constructor(apiClient?: services$ApiClient): this;

    /**
     * Set apiEndpoint address, default is "https://api.amazonalexa.com"
     * @param apiEndpoint apiEndpoint
     * @returns void
     */
    setApiEndpoint(apiEndpoint: string): void;

    /**
     * Get currently set apiEndpoint address
     * @returns string
     */
    getApiEndpoint(): string;

    /**
     * Retrieve the metadata for all customer lists, including the customer's default lists
     * @param token bearer token for list management permission
     * @returns Promise<ListCollection>
     */
    getListsMetadata(token: string): Promise<ListCollection>;

    /**
     * Create a custom list. The new list name must be different than any existing list name
     * @param params params
     * @param token bearer token for list management permission
     * @returns Promise<ListObject>
     */
    createList(params: CreateListParams, token: string): Promise<ListObject>;

    /**
     * Retrieve list metadata including the items in the list with requested status
     * @param listId unique Id associated with the list
     * @param itemStatus itemsStatus can be either "active" or "completed"
     * @param token bearer token for list management permission
     * @returns Promise<ListObject>
     */
    getList(
      listId: string,
      itemStatus: ListItemObjectStatus,
      token: string
    ): Promise<ListObject>;

    /**
     * Update a custom list. Only the list name or state can be updated
     * @param listId unique Id associated with the list
     * @param params params
     * @param token bearer token for list management permission
     * @returns Promise<object>
     */
    updateList(
      listId: string,
      params: UpdateListParams,
      token: string
    ): Promise<ListObject>;

    /**
     * Delete a custom list
     * @param listId unique Id associated with the list
     * @param token bearer token for list management permission
     * @returns Promise<void>
     */
    deleteList(listId: string, token: string): Promise<void>;

    /**
     * Create an item in an active list or in a default list
     * @param listId unique Id associated with the list
     * @param params params
     * @param token bearer token for list management permission
     * @returns Promise<ListItemObject>
     */
    createListItem(
      listId: string,
      params: CreateListItemParams,
      token: string
    ): Promise<ListItemObject>;

    /**
     * Retrieve single item within any list by listId and itemId
     * @param listId unique Id associated with the list
     * @param itemId unique Id associated with the item
     * @param token bearer token for list management permission
     * @returns Promise<ListItemObject>
     */
    getListItem(
      listId: string,
      itemId: string,
      token: string
    ): Promise<ListItemObject>;

    /**
     * Update an item value or item status
     * @param listId unique Id associated with the list
     * @param itemId unique Id associated with the item
     * @param params params
     * @param token bearer token for list management permission
     * @returns Promise<ListItemObject>
     */
    updateListItem(
      listId: string,
      itemId: string,
      params: UpdateListItemParams,
      token: string
    ): Promise<ListItemObject>;

    /**
     * Delete an item in the specified list
     * @param listId unique Id associated with the list
     * @param itemId unique Id associated with the item
     * @param token bearer token for list management permission
     * @returns Promise<void>
     */
    deleteListItem(
      listId: string,
      itemId: string,
      token: string
    ): Promise<void>;
  }

  /**
   * Responsible for building JSON responses as per the Alexa skills kit interface
   * https://developer.amazon.com/public/solutions/alexa/alexa-skills-kit/docs/alexa-skills-kit-interface-reference#response-body-syntax
   */
  declare export class ResponseBuilder {
    constructor(alexaHandler: Handler<Request>): this;

    /**
     * Have Alexa say the provided speechOutput to the user
     * @param speechOutput speechOutput
     * @returns ResponseBuilder
     */
    speak(speechOutput: string): ResponseBuilder;

    /**
     * Have alexa listen for speech from the user. If the user doesn't respond within 8 seconds
     * then have alexa reprompt with the provided reprompt speech
     * @param repromptSpeech repromptSpeech
     * @returns ResponseBuilder
     */
    listen(repromptSpeech: string): ResponseBuilder;

    /**
     * Render a card with the following title, content and image
     * @param cardTitle cardTitle
     * @param cardContent cardContent
     * @param cardImage cardImage
     * @returns ResponseBuilder
     */
    cardRenderer(
      cardTitle: string,
      cardContent: string,
      cardImage: CardImage
    ): ResponseBuilder;

    /**
     * Render a link account card
     * @returns ResponseBuilder
     */
    linkAccountCard(): ResponseBuilder;

    /**
     * Render a askForPermissionsConsent card
     * @param permissions permissions
     * @returns ResponseBuilder
     */
    askForPermissionsConsentCard(
      permissions: [
        {
          [key: string]: string
        }
      ]
    ): ResponseBuilder;

    /**
     * Creates a play, stop or clearQueue audioPlayer directive depending on the directive type passed in.
     * @deprecated - use audioPlayerPlay, audioPlayerStop, audioPlayerClearQueue instead
     * @param directiveType directiveType
     * @param behavior behavior
     * @param url url
     * @param token token
     * @param expectedPreviousToken expectedPreviousToken
     * @param offsetInMilliseconds offsetInMilliseconds
     * @returns ResponseBuilder
     */
    audioPlayer(
      directiveType: string,
      behavior: string,
      url: string,
      token: string,
      expectedPreviousToken: string,
      offsetInMilliseconds: number
    ): ResponseBuilder;

    /**
 * Creates an AudioPlayer play directive
 * @param behavior Describes playback behavior. Accepted values:
REPLACE_ALL: Immediately begin playback of the specified stream, and replace current and enqueued streams.
ENQUEUE: Add the specified stream to the end of the current queue. This does not impact the currently playing stream.
REPLACE_ENQUEUED: Replace all streams in the queue. This does not impact the currently playing stream.
 * @param url Identifies the location of audio content at a remote HTTPS location.
The audio file must be hosted at an Internet-accessible HTTPS endpoint. HTTPS is required, and the domain hosting the
files must present a valid, trusted SSL certificate. Self-signed certificates cannot be used.
The supported formats for the audio file include AAC/MP4, MP3, HLS, PLS and M3U. Bitrates: 16kbps to 384 kbps.
 * @param token A token that represents the audio stream. This token cannot exceed 1024 characters
 * @param expectedPreviousToken A token that represents the expected previous stream.
This property is required and allowed only when the playBehavior is ENQUEUE. This is used to prevent potential race conditions
if requests to progress through a playlist and change tracks occur at the same time.
 * @param offsetInMilliseconds The timestamp in the stream from which Alexa should begin playback.
Set to 0 to start playing the stream from the beginning. Set to any other value to start playback from that associated point in the stream
 * @returns ResponseBuilder
 */
    audioPlayerPlay(
      behavior: string,
      url: string,
      token: string,
      expectedPreviousToken: string,
      offsetInMilliseconds: number
    ): ResponseBuilder;

    /**
     * Creates an AudioPlayer Stop directive - Stops the current audio Playback
     * @returns ResponseBuilder
     */
    audioPlayerStop(): ResponseBuilder;

    /**
 * Creates an AudioPlayer ClearQueue directive - clear the queue without stopping the currently playing stream,
 * or clear the queue and stop any currently playing stream.
 * @param clearBehavior Describes the clear queue behavior. Accepted values:
CLEAR_ENQUEUED: clears the queue and continues to play the currently playing stream
CLEAR_ALL: clears the entire playback queue and stops the currently playing stream (if applicable).
 * @returns ResponseBuilder
 */
    audioPlayerClearQueue(clearBehavior: string): ResponseBuilder;

    /**
     * Creates a Display RenderTemplate Directive
     * Use a template builder to generate a template object
     * @param template template
     * @returns ResponseBuilder
     */
    renderTemplate(template: Template): ResponseBuilder;

    /**
     * Creates a hint directive - show a hint on the screen of the echo show
     * @param hintText text to show on the hint
     * @param hintType (optional) Default value : PlainText
     * @returns ResponseBuilder
     */
    hint(hintText: string, hintType?: HintType): ResponseBuilder;

    /**
 * Creates a VideoApp play directive to play a video
 * @param source Identifies the location of video content at a remote HTTPS location.
The video file must be hosted at an Internet-accessible HTTPS endpoint.
 * @param metadata (optional) Contains an object that provides the
information that can be displayed on VideoApp.
 * @returns ResponseBuilder
 */
    playVideo(
      source: string,
      metadata?: {
        title: string,
        subtitle: string
      }
    ): ResponseBuilder;
  }
  declare class directives$VoicePlayerSpeakDirective {
    header: {
      requestId: string
    };
    directive: {
      type: string,
      speech: string
    };

    /**
     * Creates an instance of VoicePlayerSpeakDirective.
     * @param requestId - requestId from which the call is originated from
     * @param speechContent - Contents of the speech directive either in plain text or SSML.
     */
    constructor(requestId: string, speechContent: string): this;
  }

  declare var npm$namespace$ImageUtils: {
    makeImage: typeof ImageUtils$makeImage,
    makeImages: typeof ImageUtils$makeImages
  };

  /**
   * Creates an image object with a single source
   * These images may be in either JPEG or PNG formats, with the appropriate file extensions.
   * An image cannot be larger than 2 MB
   * You must host the images at HTTPS URLs that are publicly accessible.
   * widthPixels and heightPixels are optional - Do not include them unless they are exactly correct.
   * By default, for Echo Show, size takes the value X_SMALL. If the other size values are included,
   * then the order of precedence for displaying images begins with X_LARGE and proceeds downward,
   * which means that larger images will be downscaled for display on Echo Show if provided.
   * example : ImageUtils.makeImage("https://url/to/my/img.png", 300, 400, "SMALL", "image description")
   * @param url url of the image
   * @param widthPixels (optional) width of the image in pixels
   * @param heightPixels (optional) height of the image in pixels
   * @param size size of the image (X_SMALL, SMALL, MEDIUM, LARGE, X_LARGE)
   * @param description text used to describe the image in a screen reader
   * @returns Image
   */
  declare function ImageUtils$makeImage(
    url: string,
    widthPixels?: number,
    heightPixels?: number,
    size?: ImageSourceSize,
    description?: string
  ): Image;

  /**
   * Creates an image object with a multiple sources, source images are provided as an array of image objects
   * These images may be in either JPEG or PNG formats, with the appropriate file extensions.
   * An image cannot be larger than 2 MB
   * You must host the images at HTTPS URLs that are publicly accessible.
   * widthPixels and heightPixels are optional - Do not include them unless they are exactly correct.
   * By default, for Echo Show, size takes the value X_SMALL. If the other size values are included,
   * then the order of precedence for displaying images begins with X_LARGE and proceeds downward,
   * which means that larger images will be downscaled for display on Echo Show if provided.
   * example :
   * let imgArr = [
   *   { "https://url/to/my/small.png", 300, 400, "SMALL" },
   *   { "https://url/to/my/large.png", 900, 1200, "LARGE" },
   * ]
   *   ImageUtils.makeImage(imgArr, "image description")
   * @param imgArr Array of Image
   * @param description text used to describe the image in a screen reader
   * @returns Image
   */
  declare function ImageUtils$makeImages(
    imgArr: Array<{
      url: string,
      widthPixels?: number,
      heightPixels?: number,
      size: ImageSourceSize
    }>,
    description: string
  ): Image;

  declare var npm$namespace$TextUtils: {
    makePlainText: typeof TextUtils$makePlainText,
    makeRichText: typeof TextUtils$makeRichText,
    makeTextContent: typeof TextUtils$makeTextContent
  };

  /**
   * Creates a plain TextField object with contents : text
   * @param text contents of plain text object
   * @returns TextField
   */
  declare function TextUtils$makePlainText(text: string): TextField;

  /**
   * Creates a rich TextField object with contents : text
   * @param text text
   * @returns TextField
   */
  declare function TextUtils$makeRichText(text: string): TextField;

  /**
   * Creates a textContent
   * @param primaryText primary Text
   * @param secondaryText secondary Text
   * @param tertiaryText tertiary Text
   * @returns TextContent
   */
  declare function TextUtils$makeTextContent(
    primaryText: {
      type: TextContentType,
      text: string
    },
    secondaryText: {
      type: TextContentType,
      text: string
    },
    tertiaryText: {
      type: TextContentType,
      text: string
    }
  ): TextContent;
}
