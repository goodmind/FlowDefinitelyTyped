declare module "intercom-web" {
  declare interface Intercom_$IntercomSettings {
    alignment?: string;
    app_id?: string;
    email?: string;
    created_at?: number;
    hide_default_launcher?: boolean;
    name?: string;
    user_id?: string;
    user_hash?: string;
    widget?: {
      activator?: string
    };
    company?: {
      id: string | number,
      name: string,
      created_at: number,
      plan?: string,
      monthly_spend?: number,
      [index: string]: any
    };
    vertical_padding?: number;
    horizontal_padding?: number;
  }

  declare type Intercom_$IntercomCommand =
    | "boot"
    | "shutdown"
    | "update"
    | "hide"
    | "show"
    | "showMessages"
    | "showNewMessage"
    | "onHide"
    | "onShow"
    | "onUnreadCountChange"
    | "onActivatorClick"
    | "trackEvent"
    | "getVisitorId";

  declare interface Intercom_$IntercomStatic {
    (command: "boot", param: Intercom_$IntercomSettings): void;
    (command: "shutdown" | "hide" | "show" | "showMessages"): void;
    (command: "update", param?: Intercom_$IntercomSettings): void;
    (command: "showNewMessage", param?: string): void;
    (
      command: "onHide" | "onShow" | "onActivatorClick",
      param?: () => void
    ): void;
    (command: "trackEvent", tag?: string, metadata?: any): void;
    (command: "onUnreadCountChange", cb: (unreadCount: number) => void): void;
    (command: "getVisitorId"): string;
    (command: Intercom_$IntercomCommand, param1?: any, param2?: any): void;
    booted: boolean;
  }
  declare var Intercom: Intercom_$Intercom_$IntercomStatic;
  declare var intercomSettings: Intercom_$Intercom_$IntercomSettings;
  declare interface Window {
    intercomSettings: Intercom_$Intercom_$IntercomSettings;
  }
}
