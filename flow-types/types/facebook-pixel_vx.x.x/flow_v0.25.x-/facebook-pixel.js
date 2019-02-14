declare module "facebook-pixel" {
  declare var fbq: facebook$Pixel$Event;
  declare interface facebook$Pixel$Event {
    (eventType: string, InitialAppId: string): void;
    (eventType: string, eventName: string): void;
    (
      eventType: string,
      eventName: string,
      parameters: facebook$Pixel$ViewContentParameters
    ): void;
    (
      eventType: string,
      eventName: string,
      parameters: DPA$ViewContentParameters
    ): void;
    (
      eventType: string,
      eventName: string,
      parameters: Pixel$SearchParameters
    ): void;
    (
      eventType: string,
      eventName: string,
      parameters: DPA$AddToCartParameters
    ): void;
    (
      eventType: string,
      eventName: string,
      parameters: Pixel$AddToWishlistParameters
    ): void;
    (
      eventType: string,
      eventName: string,
      parameters: Pixel$InitiateCheckoutParameters
    ): void;
    (
      eventType: string,
      eventName: string,
      parameters: Pixel$AddPaymentInfoParameters
    ): void;
    (
      eventType: string,
      eventName: string,
      parameters: DPA$PurchaseParameters
    ): void;
    (
      eventType: string,
      eventName: string,
      parameters: Pixel$LeadParameters
    ): void;
    (
      eventType: string,
      eventName: string,
      parameters: Pixel$CompleteRegistrationParameters
    ): void;
    (
      eventType: string,
      eventName: string,
      parameters: facebook$Pixel$DPA$AddToCartParameters
    ): void;
    (
      eventType: string,
      eventName: string,
      parameters: facebook$Pixel$DPA$PurchaseParameters
    ): void;
    (
      eventType: string,
      eventName: string,
      parameters: facebook$Pixel$DPA$ViewContentParameters
    ): void;
  }

  declare interface facebook$Pixel$ViewContentParameters {
    value?: number;
    currency?: string;
    content_name?: string;
    content_type?: string;
    content_ids?: string[];
    content_category?: string;
  }

  declare interface facebook$Pixel$SearchParameters {
    value?: number;
    currency?: string;
    content_category?: string;
    content_ids?: string[];
    search_string?: string;
  }

  declare interface facebook$Pixel$AddToCartParameters {
    value?: number;
    currency?: string;
    content_name?: string;
    content_type?: string;
    content_ids?: string[];
  }

  declare interface facebook$Pixel$AddToWishlistParameters {
    value?: number;
    currency?: string;
    content_name?: string;
    content_category?: string;
    content_ids?: string[];
  }

  declare interface facebook$Pixel$InitiateCheckoutParameters {
    value?: number;
    currency?: string;
    content_name?: string;
    content_category?: string;
    content_ids?: string[];
    num_items?: number;
  }

  declare interface facebook$Pixel$AddPaymentInfoParameters {
    value?: number;
    currency?: string;
    content_category?: string;
    content_ids?: string[];
  }

  declare interface facebook$Pixel$PurchaseParameters {
    value: number;
    currency: string;
    content_name?: string;
    content_type?: string;
    content_ids?: string[];
    num_items?: number;
    order_id?: string;
  }

  declare interface facebook$Pixel$LeadParameters {
    value?: number;
    currency?: string;
    content_name?: string;
    content_category?: string;
  }

  declare interface facebook$Pixel$CompleteRegistrationParameters {
    value?: number;
    currency?: string;
    content_name?: string;
    status?: string;
  }

  declare type facebook$Pixel$DPA$ViewContentParameters = {
    content_type: string,
    content_ids: string[]
  } & facebook$Pixel$ViewContentParameters;

  declare type facebook$Pixel$DPA$AddToCartParameters = {
    content_type: string,
    content_ids: string[]
  } & facebook$Pixel$AddToCartParameters;

  declare type facebook$Pixel$DPA$PurchaseParameters = {
    content_type: string,
    content_ids: string[]
  } & facebook$Pixel$PurchaseParameters;
}
