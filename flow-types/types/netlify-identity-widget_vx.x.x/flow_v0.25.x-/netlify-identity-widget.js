declare module "netlify-identity-widget" {
  declare export interface InitOptions {
    container?: string;
    APIUrl?: string;
  }
  declare export interface Token {
    access_token: string;
    expires_at: string | number;
    expires_in: string | number;
    refresh_token: string;
    token_type: string;
  }
  declare export interface User {
    api: {
      _sameOrigin?: boolean,
      apiURL: string,
      defaultHeaders: {
        [header: string]: string | string[] | void
      }
    };
    app_metadata: {
      provider: string
    };
    aud: string;
    audience?: any;
    confirmed_at: string;
    created_at: string;
    updated_at: string;
    email: string;
    id: string;
    role: string;
    token?: Token;
    url: string;
    user_metadata: {
      avatar_url: string,
      full_name: string
    };
  }

  /**
   * Initialises the netlify identity widget.
   */
  declare export function init(opts?: InitOptions): void;

  /**
   * Opens the netlify login modal to the corresponding tab.
   */
  declare export function open(tabName?: "signup" | "login"): void;

  /**
   * Closes the netlify login modal.
   */
  declare export function close(): void;

  /**
   * Retrieves the current logged in user information.
   */
  declare export function currentUser(): User | null;

  /**
   * Registers callbacks to corresponding events on the widget.
   */
  declare export function on(
    event: "init",
    cb: (user: User | null) => void
  ): void;

  declare export function on(event: "login", cb: (user: User) => void): void;

  declare export function on(
    event: "logout" | "open" | "close",
    cb: () => void
  ): void;

  declare export function on(event: "error", cb: (err: Error) => void): void;

  /**
   * Logs out the current user. Returns a Promise<void> when a user is
   * logged in, else returns undefined.
   */
  declare export function logout(): Promise<void> | void;
}
