declare interface FBInitParams {
  appId?: string;
  authResponse?: string;
  cookie?: boolean;
  frictionlessRequests?: boolean;
  hideFlashCallback?: Function;
  logging?: boolean;
  status?: boolean;
  version?: string;
  xfbml?: boolean;
}
declare interface ShareDialogParams {
  method: string;
  href: string;
}
declare interface PageTabDialogParams {
  method: string;
  app_id: string;
  redirect_uri?: string;
  display?: any;
}
declare interface RequestsDialogParams {
  method: string;
  app_id?: string;
  redirect_uri?: string;
  to?: string;
  message: string;
  action_type?: string;
  object_id?: string;
  filters:
    | string[]
    | {
        name: string,
        user_ids: string[]
      };
  suggestions?: string[];
  exclude_ids?: string[];
  max_recipients?: number;
  data?: string;
  title?: string;
}
declare interface SendDialogParams {
  method: string;
  app_id: string;
  redirect_uri?: string;
  display?: any;
  to?: string;
  link: string;
}
declare interface PayDialogParams {
  method: string;
  action: string;
  product: string;
  quantity?: number;
  quantity_min?: number;
  quantity_max?: number;
  request_id?: string;
  pricepoint_id?: string;
  test_currency?: string;
}
declare interface FeedDialogParams {
  method: string;
  app_id: string;
  redirect_uri?: string;
  display?: string;
  from?: string;
  to?: string;
  link?: string;
  picture?: string;
  source?: string;
  name: string;
  caption?: string;
  description?: string;
  ref?: any;
}
declare interface LiveDialogParams {
  redirect_uri?: string;
  method: string;
  display: string;
  phase: string;
  broadcast_data?: LiveDialogResponse;
}
declare interface LiveDialogResponse {
  id: string;
  stream_url: string;
  secure_stream_url: string;
  status: string;
}
declare interface FBLoginOptions {
  auth_type?: string;
  scope?: string;
  return_scopes?: boolean;
  enable_profile_selector?: boolean;
  profile_selector_ids?: string;
}
declare interface FBSDKEvents {
  subscribe(event: string, callback: (fbResponseObject: Object) => any): void;
  unsubscribe(event: string, callback: (fbResponseObject: Object) => any): void;
}
declare interface FBSDKXFBML {
  parse(ParseElement?: Element): void;
  parse(ParseElement?: HTMLElement): void;
}
declare interface FBSDKCanvasPrefetcher {
  addStaticResource(res: string): void;
  setCollectionMode(option: string): void;
}
declare interface FBSDKCanvasSize {
  height?: Number;
  width?: Number;
}
declare interface FBSDKCanvasDoneLoading {
  time_delta_ms: Number;
}
declare interface FBSDKCanvas {
  Prefetcher: FBSDKCanvasPrefetcher;
  hideFlashElement(element: Element): void;
  hideFlashElement(element: HTMLElement): void;
  showFlashElement(element: Element): void;
  showFlashElement(element: HTMLElement): void;
  scrollTo(x: Number, y: Number): void;
  setAutoGrow(stopTimer: boolean): void;
  setAutoGrow(diffInterval: Number): void;
  setAutoGrow(stopTimer: boolean, diffInterval: Number): void;
  setSize(canvasSizeOptions: FBSDKCanvasSize): void;
  setUrlHandler(handler?: Function): string;
  setDoneLoading(handler?: Function): FBSDKCanvasDoneLoading;
  startTimer(): void;
  stopTimer(handler?: (fbResponseObject: Object) => any): void;
}
declare interface FBResponseObject {
  data: any;
  error: any;
}
declare type LoginStatus = "connected" | "not_authorized" | "unknown";
declare type ApiMethod = "get" | "post" | "delete";
declare interface AuthResponse {
  accessToken: string;
  expiresIn: number;
  signedRequest: string;
  userID: string;
}
declare interface FBError {
  type: string;
  message: string;
  code: number;
  error_subcode?: number;
  error_user_msg?: string;
  error_user_title?: string;
  fbtrace_id: string;
}
declare interface FBSDK {
  init(fbInitObject: FBInitParams): void;
  api(path: string, callback: (response: any) => void): void;
  api(path: string, method: ApiMethod, callback: (response: any) => void): void;
  api(path: string, params: any, callback: (response: any) => void): void;
  api(
    path: string,
    method: ApiMethod,
    params: any,
    callback: (response: any) => void
  ): void;
  ui(
    params: ShareDialogParams,
    handler: (fbResponseObject: Object) => any
  ): void;
  ui(
    params: PageTabDialogParams,
    handler: (fbResponseObject: Object) => any
  ): void;
  ui(
    params: RequestsDialogParams,
    handler: (fbResponseObject: Object) => any
  ): void;
  ui(
    params: SendDialogParams,
    handler: (fbResponseObject: Object) => any
  ): void;
  ui(params: PayDialogParams, handler: (fbResponseObject: Object) => any): void;
  ui(
    params: FeedDialogParams,
    handler: (fbResponseObject: Object) => any
  ): void;
  ui(
    params: LiveDialogParams,
    handler: (fbResponseObject: LiveDialogResponse) => any
  ): void;
  getLoginStatus(
    handler: (fbResponseObject: FB$FB$LoginStatusResponse) => any,
    force?: Boolean
  ): void;
  login(
    handler: (fbResponseObject: FB$FB$LoginStatusResponse) => any,
    params?: FBLoginOptions
  ): void;
  logout(handler: (fbResponseObject: Object) => any): void;
  getAuthResponse(): Object;
  Event: FBSDKEvents;
  XFBML: FBSDKXFBML;
  Canvas: FBSDKCanvas;
  Error: FBError;
}
declare interface Window {
  fbAsyncInit(): any;
}
declare module "fb" {
  declare export default typeof FB;
}
export interface FB$LoginStatusResponse {
  authResponse?: AuthResponse;
  status: LoginStatus;
}
declare var FB: FBSDK;
