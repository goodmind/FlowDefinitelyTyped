declare module "gtag.js" {
  declare var gtag: Gtag$Gtag;
  declare interface Gtag$Gtag {
    (
      command: "config",
      targetId: string,
      config?: Gtag$ControlParams | Gtag$EventParams | Gtag$CustomParams
    ): void;
    (command: "set", config: Gtag$CustomParams): void;
    (
      command: "event",
      eventName: Gtag$EventNames | string,
      eventParams?: Gtag$ControlParams | Gtag$EventParams | Gtag$CustomParams
    ): void;
  }

  declare interface Gtag$CustomParams {
    [key: string]: any;
  }

  declare interface Gtag$ControlParams {
    groups?: string | string[];
    send_to?: string | string[];
    event_callback?: () => void;
    event_timeout?: number;
  }

  declare type Gtag$EventNames =
    | "add_payment_info"
    | "add_payment_info"
    | "add_to_cart"
    | "add_to_wishlist"
    | "begin_checkout"
    | "checkout_progress"
    | "exception"
    | "generate_lead"
    | "login"
    | "page_view"
    | "purchase"
    | "refund"
    | "remove_from_cart"
    | "screen_view"
    | "search"
    | "select_content"
    | "set_checkout_option"
    | "share"
    | "sign_up"
    | "timing_complete"
    | "view_item"
    | "view_item_list"
    | "view_promotion"
    | "view_search_results";

  declare interface Gtag$EventParams {
    checkout_option?: string;
    checkout_step?: number;
    content_id?: string;
    content_type?: string;
    coupon?: string;
    currency?: string;
    description?: string;
    fatal?: boolean;
    items?: Gtag$Item[];
    method?: string;
    number?: string;
    promotions?: Gtag$Promotion[];
    screen_name?: string;
    search_term?: string;
    shipping?: Gtag$Currency;
    tax?: Gtag$Currency;
    transaction_id?: string;
    value?: number;
    event_label?: string;
    event_category: string;
  }

  declare type Gtag$Currency = string | number;

  declare interface Gtag$Item {
    brand?: string;
    category?: string;
    creative_name?: string;
    creative_slot?: string;
    id?: string;
    location_id?: string;
    name?: string;
    price?: Gtag$Currency;
    quantity?: number;
  }

  declare interface Gtag$Promotion {
    creative_name?: string;
    creative_slot?: string;
    id?: string;
    name?: string;
  }
}
