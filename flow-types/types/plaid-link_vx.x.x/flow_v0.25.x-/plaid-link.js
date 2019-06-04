declare module "global" {
  declare interface Window {
    Plaid: {
      create(params: Plaid$CreateConfig): Plaid$LinkHandler,
      open(): void,
      exit(force?: boolean): void
    };
    linkHandler: Plaid$LinkHandler;
  }
}
declare module "plaid-link" {
  declare interface Plaid$CreateConfig {
    clientName: string;
    product: Plaid$Product[];
    key: string;
    env: Plaid$Environment;
    onSuccess: Plaid$OnSuccess;
    onExit?: Plaid$OnExit;
    onEvent?: Plaid$OnEvent;
    onLoad?: Plaid$OnLoad;
    language?: Plaid$Language;
    user?: Plaid$User;
    token?: string;
    isWebView?: boolean;
  }

  declare type Plaid$OnSuccess = (
    public_token: string,
    metadata: Plaid$OnSuccessMetaData
  ) => void;

  declare type Plaid$OnExit = (
    error: Plaid$Error | null,
    metadata: Plaid$OnExitMetaData
  ) => void;

  declare type Plaid$OnEvent = (
    eventName: Plaid$EventName,
    metadata: Plaid$OnEventMetaData
  ) => void;

  declare type Plaid$OnLoad = () => void;

  declare interface Plaid$LinkHandler {
    open: () => void;
    institutions: Plaid$Institution[];
  }

  declare type Plaid$Product =
    | "transactions"
    | "auth"
    | "identity"
    | "income"
    | "assets";

  declare type Plaid$Environment = "development" | "sandbox" | "production";

  declare type Plaid$Language = "en" | "fr";

  declare type Plaid$VerificationStatus =
    | "pending_automatic_verification"
    | "pending_manual_verification"
    | "manually_verified";

  declare type Plaid$EventName =
    | "ERROR"
    | "EXIT"
    | "HANDOFF"
    | "OPEN"
    | "OPEN_MY_PLAID"
    | "SEARCH_INSTITUTION"
    | "SELECT_INSTITUTION"
    | "TRANSITION_VIEW";

  declare interface Plaid$User {
    legalName: string;
    emailAddress: string;
  }

  declare interface Plaid$Institution {
    name: string;
    institution_id: string;
    auth: boolean;
    transactions: boolean;
  }

  declare interface Plaid$Account {
    id: string;
    name: string;
    mask: string;
    type: string;
    subtype: string;
    verification_status: Plaid$VerificationStatus;
  }

  declare interface Plaid$Error {
    display_message: string;
    error_code: string;
    error_message: string;
    error_type: string;
  }

  declare interface Plaid$OnSuccessMetaData {
    link_session_id: string;
    institution: {
      name: string,
      institution_id: string
    };
    accounts: Plaid$Account[];
  }

  declare interface Plaid$OnExitMetaData {
    link_session_id: string;
    request_id: string;
    institution: Plaid$Institution;
    status: string;
  }

  declare interface Plaid$OnEventMetaData {
    error_code: string;
    error_message: string;
    error_type: string;
    exit_status: string;
    institution_id: string;
    institution_name: string;
    institution_search_query: string;
    link_session_id: string;
    mfa_type: string;
    request_id: string;
    timestamp: string;
    view_name: string;
  }
}
