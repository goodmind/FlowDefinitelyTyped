declare module "paypal-rest-sdk" {
  declare export function configure(opts: ConfigureOptions): string;

  declare export interface PayPalError {
    +name: string;
    +message: string;
    +details: ErrorDetails[];
    +information_link: string;
    +debug_id: string;
  }
  declare export type CallbackFunction<T> = (err: SDKError, response: T) => any;
  declare export interface SDKError {
    httpStatusCode: number;
    message: string;
    response: PayPalError;
    response_stringified?: string;
    stack: string;
  }
  declare export interface ErrorDetails {
    +field: string;
    +issue: string;
    +field: string;
    +issue: string;
  }
  declare export interface Address {
    line1: string;
    line2?: string;
    city: string;
    country_code: string;
    postal_code: string;
    state: string;
    phone?: string;
    +normalization_status?: string;
    type?: string;
    recipient_name?: string;
  }
  declare export interface Phone {
    country_code: string;
    national_number: string;
  }
  declare export interface ConfigureOptions {
    client_id: string;
    client_secret: string;
    mode: string;
    schema?: string;
    host?: string;
    port?: string;
    openid_connect_schema?: string;
    openid_connect_host?: string;
    openid_connect_port?: string;
    authorize_url?: string;
    logout_url?: string;
    headers?: any;
  }
  declare export interface FraudManagementFiltersDetails {
    filter_type: string;
    filter_id: string;
    name: string;
    description: string;
  }
  declare export interface Response {
    +httpStatusCode: number;
    +create_time?: string;
    +count?: number;
    +total_count?: number;
  }
  declare export interface FilterOptions {
    page_size: number;
    start_time: string;
    end_time: string;
  }
  declare export interface UpdateRequest {
    op: string;
    path: string;
    value: any;
  }
  declare export interface Amount {
    currency: string;
    total: string;
    details?: {
      subtotal?: string,
      shipping?: string,
      tax?: string,
      handling_fee?: string,
      shipping_discout?: string,
      insurance?: string,
      gift_wrap?: string
    };
  }
  declare export interface Currency {
    currency: string;
    value: string;
  }
  declare export interface QueryParameters {
    count?: number;
    start_id?: string;
    start_index?: number;
    start_time?: string;
    end_time?: string;
    payee_id?: string;
    sort_by?: string;
    sort_order?: string;
    anchor_type?: string;
    page_size?: number;
    transaction_id?: string;
    event_type?: string;
    webhook_id?: string;
    page?: number;
    total_count_required?: boolean;
    status?: string[];
  }
  declare export interface Link {
    href: string;
    method: string;
    rel: string;
  }
  declare export interface Transaction {
    reference_id?: string;
    amount: Amount;
    description?: string;
    item_list?: {
      items: Item[],
      shipping_address?: Address,
      shipping_method?: string,
      shipping_phone_number?: string
    };
    payee?: Payee;
    note_to_payee?: string;
    custom?: string;
    invoice_number?: string;
    purchase_order?: string;
    soft_descriptor?: string;
    payment_options?: {
      allowed_payment_method: string
    };
    notify_url?: string;
    order_url?: string;
    +related_resources?: RelatedResources[];
  }
  declare export interface Payee {
    email: string;
    merchant_id: string;
    payee_display_metadata?: {
      email?: string,
      display_phone?: Phone,
      brand_name?: string
    };
  }
  declare export interface Payment {
    +id?: string;
    intent: string;
    payer: {
      payment_method: string
    };
    transactions: [Transaction];
    +state?: string;
    experience_profile_id?: string;
    note_to_payer?: string;
    redirect_urls?: {
      return_url?: string,
      cancel_url?: string
    };
    +failure_reason?: string;
    +create_time?: string;
    +update_time?: string;
    +links?: Link[];
  }
  declare export type PaymentResponse = {} & Payment & Response;

  declare export interface Resource {
    +id: string;
    amount: Amount;
    +payment_mode?: string;
    +state?: string;
    +reason_code?: string;
    +protection_eligibility?: string;
    +protection_eligibility_type?: string;
    +fmf_details?: FraudManagementFiltersDetails;
    +receipt_id?: string;
    +parent_payment?: string;
    +processor_response?: any;
    +create_time?: string;
    +update_time?: string;
    +links?: Link[];
  }
  declare export type SaleResource = {
    +purchase_unit_reference_id?: string,
    +clearing_time?: string,
    +payment_hold_status?: string,
    +payment_hold_reasons?: string[],
    +transaction_fee?: Currency,
    +exchange_rate?: string,
    +billing_agreement_id?: string
  } & Resource;

  declare export type AuthorizationResource = {
    +valid_until: string,
    +update_time: string,
    +reference_id?: string
  } & Resource;

  declare export type CaptureResource = {
    is_final_capture?: boolean,
    invoice_number?: string,
    transaction_fee?: Currency
  } & Resource;

  declare export type RefundResource = {
    reason?: string,
    invoice_number?: string,
    +sale_id?: string,
    +capture_id?: string,
    description?: string,
    +reason_code?: string,
    +refund_reason_code?: string,
    +refund_funding_type?: string
  } & Resource;

  declare export interface Item {
    currency: string;
    name: string;
    price: string;
    quantity: number;
    sku?: string;
    description?: string;
    tax?: string;
    url?: string;
  }
  declare export interface PayerInfo {
    email?: string;
    +salutation?: string;
    +first_name?: string;
    +middle_name?: string;
    +last_name?: string;
    +suffix?: string;
    +payer_id?: string;
    birth_date?: string;
    tax_id?: string;
    tax_id_type?: string;
    country_code?: string;
    billing_address?: Address;
    +shipping_address?: Address;
  }
  declare export interface RefundRequest {
    amount?: Amount;
    description?: string;
    refund_source?: string;
    reason?: string;
    invoice_number?: string;
    refund_advice?: boolean;
    items?: Item[];
    payer_info?: PayerInfo;
    supplementary_data?: any[];
  }
  declare export interface RelatedResources {
    sale?: SaleResource;
    authorization?: AuthorizationResource;
    order?: any;
    capture?: CaptureResource;
    refund?: RefundResource;
  }

  declare var npm$namespace$payment: {
    create: typeof payment$create,
    execute: typeof payment$execute,
    get: typeof payment$get,
    list: typeof payment$list,
    update: typeof payment$update
  };
  declare interface payment$ExecuteRequest {
    payer_id: string;
  }

  declare type payment$SaleResponse = {} & SaleResource & Response;

  declare type payment$AuthorizationResponse = {} & AuthorizationResource &
    Response;

  declare type payment$CaptureResponse = {} & CaptureResource & Response;

  declare type payment$RefundResponse = {} & RefundResource & Response;

  declare type payment$ListResponse = {
    payments: Payment[],
    count: number,
    next_id: string,
    invoices: invoice$Invoice[]
  } & Response;

  declare function payment$create(
    data: Payment,
    config: http.RequestOptions | CallbackFunction<PaymentResponse>,
    cb?: CallbackFunction<PaymentResponse>
  ): void;

  declare function payment$execute(
    id: string,
    data: payment$ExecuteRequest,
    config: http.RequestOptions | CallbackFunction<PaymentResponse>,
    cb?: CallbackFunction<PaymentResponse>
  ): void;

  declare function payment$get(
    id: string,
    config: http.RequestOptions | CallbackFunction<PaymentResponse>,
    cb?: CallbackFunction<PaymentResponse>
  ): void;

  declare function payment$list(
    data:
      | QueryParameters
      | http.RequestOptions
      | CallbackFunction<payment$ListResponse>,
    config?: http.RequestOptions | CallbackFunction<payment$ListResponse>,
    cb?: CallbackFunction<payment$ListResponse>
  ): void;

  declare function payment$update(
    id: string,
    data: UpdateRequest[],
    config?: http.RequestOptions | CallbackFunction<PaymentResponse>,
    cb?: CallbackFunction<PaymentResponse>
  ): void;

  declare var npm$namespace$notification: {
    webhook: typeof npm$namespace$notification$webhook,
    webhookEvent: typeof npm$namespace$notification$webhookEvent,
    webhookEventType: typeof npm$namespace$notification$webhookEventType
  };
  declare interface notification$NotificationEventType {
    +description?: string;
    name: string;
    status?: string;
  }

  declare type notification$EventTypesResponse = {
    +event_types: notification$NotificationEventType[]
  } & Response;

  declare var npm$namespace$notification$webhook: {
    list: typeof notification$webhook$list,
    create: typeof notification$webhook$create,
    replace: typeof notification$webhook$replace,
    del: typeof notification$webhook$del,
    get: typeof notification$webhook$get,
    eventTypes: typeof notification$webhook$eventTypes
  };
  declare interface notification$webhook$Webhook {
    event_types: notification$NotificationEventType[];
    +id?: string;
    +links?: Link[];
    url: string;
  }

  declare type notification$webhook$WebhookListResponse = {
    +webhooks: notification$webhook$Webhook[]
  } & Response;

  declare function notification$webhook$list(
    data:
      | QueryParameters
      | http.RequestOptions
      | CallbackFunction<notification$webhook$WebhookListResponse>,
    config?:
      | http.RequestOptions
      | CallbackFunction<notification$webhook$WebhookListResponse>,
    cb?: CallbackFunction<notification$webhook$WebhookListResponse>
  ): void;

  declare function notification$webhook$create(
    data: notification$webhook$Webhook,
    config:
      | http.RequestOptions
      | CallbackFunction<notification$webhook$Webhook>,
    cb?: CallbackFunction<notification$webhook$Webhook>
  ): void;

  declare function notification$webhook$replace(
    id: string,
    data: UpdateRequest[],
    config:
      | http.RequestOptions
      | CallbackFunction<notification$webhook$Webhook>,
    cb?: CallbackFunction<notification$webhook$Webhook>
  ): void;

  declare function notification$webhook$del(
    id: string,
    config:
      | http.RequestOptions
      | CallbackFunction<notification$webhook$Webhook>,
    cb?: CallbackFunction<notification$webhook$Webhook>
  ): void;

  declare function notification$webhook$get(
    id: string,
    config:
      | http.RequestOptions
      | CallbackFunction<notification$webhook$Webhook>,
    cb?: CallbackFunction<notification$webhook$Webhook>
  ): void;

  declare function notification$webhook$eventTypes(
    id: string,
    config:
      | http.RequestOptions
      | CallbackFunction<notification$EventTypesResponse>,
    cb?: CallbackFunction<notification$EventTypesResponse>
  ): void;

  declare var npm$namespace$notification$webhookEvent: {
    get: typeof notification$webhookEvent$get,
    getAndVerify: typeof notification$webhookEvent$getAndVerify,
    list: typeof notification$webhookEvent$list,
    resend: typeof notification$webhookEvent$resend,
    verify: typeof notification$webhookEvent$verify
  };
  declare interface notification$webhookEvent$WebhookEvent {
    +id?: string;
    +create_time?: string;
    +resource_type?: string;
    +event_version?: string;
    +event_type?: string;
    +summary?: string;
    +resource?: any;
  }

  declare type notification$webhookEvent$WebhookEventListResponse = {
    events: notification$webhookEvent$WebhookEvent[]
  } & Response;

  declare interface notification$webhookEvent$WebhookVerifyResponse {
    verification_status: string;
  }

  declare function notification$webhookEvent$get(
    id: string,
    config:
      | http.RequestOptions
      | CallbackFunction<notification$webhookEvent$WebhookEvent>,
    cb?: CallbackFunction<notification$webhookEvent$WebhookEvent>
  ): void;

  declare function notification$webhookEvent$getAndVerify(
    body: notification$webhookEvent$WebhookEvent,
    cb: CallbackFunction<notification$webhookEvent$WebhookEvent>
  ): void;

  declare function notification$webhookEvent$list(
    data:
      | QueryParameters
      | http.RequestOptions
      | CallbackFunction<notification$webhookEvent$WebhookEventListResponse>,
    config?:
      | http.RequestOptions
      | CallbackFunction<notification$webhookEvent$WebhookEventListResponse>,
    cb?: CallbackFunction<notification$webhookEvent$WebhookEventListResponse>
  ): void;

  declare function notification$webhookEvent$resend(
    id: string,
    config:
      | http.RequestOptions
      | CallbackFunction<notification$webhookEvent$WebhookEvent>,
    cb?: CallbackFunction<notification$webhookEvent$WebhookEvent>
  ): void;

  declare function notification$webhookEvent$verify(
    headers: any,
    body: notification$webhookEvent$WebhookEvent,
    id: string,
    cb: CallbackFunction<notification$webhookEvent$WebhookVerifyResponse>
  ): void;

  declare var npm$namespace$notification$webhookEventType: {
    list: typeof notification$webhookEventType$list
  };
  declare function notification$webhookEventType$list(
    data:
      | QueryParameters
      | http.RequestOptions
      | CallbackFunction<notification$EventTypesResponse>,
    config?:
      | http.RequestOptions
      | CallbackFunction<notification$EventTypesResponse>,
    cb?: CallbackFunction<notification$EventTypesResponse>
  ): void;

  declare var npm$namespace$authorization: {
    get: typeof authorization$get,
    capture: typeof authorization$capture,
    reauthorize: typeof authorization$reauthorize
  };
  declare interface authorization$CaptureRequest {
    amount?: Amount;
    is_final_capture?: boolean;
    invoice_number?: string;
  }

  declare function authorization$get(
    id: string,
    config: http.RequestOptions | CallbackFunction<AuthorizationResource>,
    cb?: CallbackFunction<AuthorizationResource>
  ): void;

  declare function authorization$capture(
    id: string,
    data:
      | authorization$CaptureRequest
      | http.RequestOptions
      | CallbackFunction<CaptureResource>,
    config?: http.RequestOptions | CallbackFunction<CaptureResource>,
    cb?: CallbackFunction<CaptureResource>
  ): void;

  declare function authorization$reauthorize(
    id: string,
    data:
      | Amount
      | http.RequestOptions
      | CallbackFunction<AuthorizationResource>,
    config?: http.RequestOptions | CallbackFunction<AuthorizationResource>,
    cb?: CallbackFunction<AuthorizationResource>
  ): void;

  declare var npm$namespace$capture: {
    get: typeof capture$get,
    refund: typeof capture$refund
  };
  declare function capture$get(
    id: string,
    config: http.RequestOptions | CallbackFunction<CaptureResource>,
    cb?: CallbackFunction<CaptureResource>
  ): void;

  declare function capture$refund(
    id: string,
    data:
      | invoice$RefundRequest
      | http.RequestOptions
      | CallbackFunction<RefundResource>,
    config?: http.RequestOptions | CallbackFunction<RefundResource>,
    cb?: CallbackFunction<RefundResource>
  ): void;

  declare var npm$namespace$invoice: {
    cancel: typeof invoice$cancel,
    create: typeof invoice$create,
    del: typeof invoice$del,
    deleteExternalPayment: typeof invoice$deleteExternalPayment,
    deleteExternalRefund: typeof invoice$deleteExternalRefund,
    generateNumber: typeof invoice$generateNumber,
    get: typeof invoice$get,
    list: typeof invoice$list,
    qrCode: typeof invoice$qrCode,
    recordPayment: typeof invoice$recordPayment,
    recordRefund: typeof invoice$recordRefund,
    remind: typeof invoice$remind,
    search: typeof invoice$search,
    send: typeof invoice$send,
    update: typeof invoice$update
  };
  declare interface invoice$EmailRequest {
    subject?: string;
    note?: string;
    send_to_merchant?: boolean;
    send_to_payer?: boolean;
    cc_emails?: string[];
  }

  declare interface invoice$Invoice {
    allow_tip?: boolean;
    billing_info?: [invoice$BillingInfo];
    discount?: invoice$Cost;
    shipping_cost?: invoice$ShippingCost;
    +id?: string;
    invoice_date?: string;
    items?: invoice$InvoiceItem[];
    merchant_info?: invoice$Merchant;
    +metadata?: {
      created_date?: string,
      created_by?: string,
      cancelled_date?: string,
      cancelled_by?: string,
      last_updated_date?: string,
      last_updated_by?: string,
      first_sent_date?: string,
      last_sent_date?: string,
      last_sent_by?: string,
      payer_view_url?: string
    };
    note?: string;
    number?: string;
    payment_term?: invoice$PaymentTerm;
    reference?: string;
    shipping_info?: {
      address: Address,
      business_name?: string,
      first_name: string,
      last_name: string
    };
    phone?: Phone;
    +status?: string;
    tax_calculated_after_discount?: boolean;
    tax_inclusive?: boolean;
    template_id?: string;
    +total_amount?: Currency;
    +uri?: string;
    cc_info?: invoice$Participant[];
    custom?: invoice$CustomAmount;
    allow_partial_payment?: boolean;
    minimum_amount_due?: Currency;
    terms?: string;
    merchant_memo?: string;
    logo_url?: string;
    +payments?: invoice$PaymentDetail[];
    +refunds?: invoice$Detail[];
    +payment_summary?: {
      paypal: Currency,
      other: Currency
    };
    +refunded_amount?: {
      paypal: Currency,
      other: Currency
    };
    +paid_amount?: {
      paypal: Currency,
      other: Currency
    };
    attachments?: invoice$FileAttachment[];
    +links?: Link[];
  }

  declare type invoice$InvoiceResponse = {} & Invoice & Response;

  declare interface invoice$FileAttachment {
    name: string;
    url: string;
  }

  declare type invoice$BillingInfo = {
    email?: string,
    language?: string,
    notification_channel?: string,
    additional_info?: string
  } & Person;

  declare interface invoice$InvoiceItem {
    name: string;
    description?: string;
    quantity: number;
    unit_price: Currency;
    tax?: invoice$Tax;
    date?: string;
    discount?: invoice$Cost;
    unit_of_measure?: string;
  }

  declare interface invoice$CustomAmount {
    label: string;
    amount: Currency;
  }

  declare interface invoice$ShippingCost {
    amount?: Currency;
    tax?: invoice$Tax;
  }

  declare type invoice$Tax = {
    id?: string,
    name?: string
  } & Cost;

  declare interface invoice$Cost {
    percent?: number;
    amount?: Currency;
  }

  declare interface invoice$PaymentTerm {
    term_type?: string;
    due_date?: string;
  }

  declare interface invoice$Person {
    email?: string;
    first_name?: string;
    last_name?: string;
    business_name?: string;
    phone?: Phone;
    website?: string;
    address?: Address;
  }

  declare type invoice$Merchant = {
    tax_id?: string,
    fax?: Phone,
    additional_info_label?: string,
    additional_info?: string
  } & Person;

  declare type invoice$Participant = {
    email: string,
    fax?: Phone,
    additional_info?: string
  } & Person;

  declare interface invoice$Detail {
    type: string;
    transaction_id: string;
    date: string;
    note?: string;
    amount: Currency;
  }

  declare type invoice$PaymentDetail = {
    transaction_type: string,
    method: string
  } & Detail;

  declare interface invoice$NumberResponse {
    number: string;
  }

  declare interface invoice$QrResponse {
    image: string;
  }

  declare type invoice$ListResponse = {
    payments: Payment[],
    count: number,
    next_id: string,
    invoices: invoice$Invoice[]
  } & Response;

  declare interface invoice$PayRequest {
    date: string;
    method: string;
    note?: string;
    amount: Currency;
  }

  declare interface invoice$RefundRequest {
    date: string;
    note?: string;
    amount: Currency;
  }

  declare interface invoice$SearchRequest {
    email?: string;
    recipient_first_name?: string;
    recipient_last_name?: string;
    recipient_business_name?: string;
    number?: string;
    status?: string;
    lower_total_amount?: Currency;
    upper_total_amount?: Currency;
    start_invoice_date?: string;
    end_invoice_date?: string;
    start_due_date?: string;
    end_due_date?: string;
    start_payment_date?: string;
    end_payment_date?: string;
    start_creation_date?: string;
    end_creation_date?: string;
    page?: number;
    page_size?: number;
    total_count_required?: boolean;
    archived?: boolean;
  }

  declare function invoice$cancel(
    id: string,
    data: invoice$EmailRequest | http.RequestOptions | CallbackFunction<null>,
    config?: http.RequestOptions | CallbackFunction<null>,
    cb?: CallbackFunction<null>
  ): void;

  declare function invoice$create(
    data: invoice$Invoice,
    config: http.RequestOptions | CallbackFunction<invoice$InvoiceResponse>,
    cb?: CallbackFunction<invoice$InvoiceResponse>
  ): void;

  declare function invoice$del(
    id: string,
    config: http.RequestOptions | CallbackFunction<invoice$InvoiceResponse>,
    cb?: CallbackFunction<null>
  ): void;

  declare function invoice$deleteExternalPayment(
    id: string,
    trxid: string,
    config: http.RequestOptions | CallbackFunction<null>,
    cb?: CallbackFunction<null>
  ): void;

  declare function invoice$deleteExternalRefund(
    id: string,
    trxid: string,
    config: http.RequestOptions | CallbackFunction<null>,
    cb?: CallbackFunction<null>
  ): void;

  declare function invoice$generateNumber(
    config: http.RequestOptions | CallbackFunction<invoice$NumberResponse>,
    cb?: CallbackFunction<invoice$NumberResponse>
  ): void;

  declare function invoice$get(
    id: string,
    config: http.RequestOptions | CallbackFunction<invoice$InvoiceResponse>,
    cb?: CallbackFunction<invoice$InvoiceResponse>
  ): void;

  declare function invoice$list(
    data:
      | QueryParameters
      | http.RequestOptions
      | CallbackFunction<invoice$ListResponse>,
    config?: http.RequestOptions | CallbackFunction<invoice$ListResponse>,
    cb?: CallbackFunction<invoice$ListResponse>
  ): void;

  declare function invoice$qrCode(
    id: string,
    height: number,
    width: number,
    config: http.RequestOptions | CallbackFunction<invoice$QrResponse>,
    cb?: CallbackFunction<invoice$QrResponse>
  ): void;

  declare function invoice$recordPayment(
    id: string,
    data: invoice$PayRequest,
    config: http.RequestOptions | CallbackFunction<null>,
    cb?: CallbackFunction<null>
  ): void;

  declare function invoice$recordRefund(
    id: string,
    data: invoice$RefundRequest,
    config: http.RequestOptions | CallbackFunction<null>,
    cb?: CallbackFunction<null>
  ): void;

  declare function invoice$remind(
    id: string,
    data: invoice$EmailRequest | http.RequestOptions | CallbackFunction<null>,
    config?: http.RequestOptions | CallbackFunction<null>,
    cb?: CallbackFunction<null>
  ): void;

  declare function invoice$search(
    data: invoice$SearchRequest,
    config: http.RequestOptions | CallbackFunction<invoice$ListResponse>,
    cb?: CallbackFunction<invoice$ListResponse>
  ): void;

  declare function invoice$send(
    id: string,
    config: http.RequestOptions | CallbackFunction<invoice$ListResponse>,
    cb?: CallbackFunction<null>
  ): void;

  declare function invoice$update(
    id: string,
    data: invoice$Invoice,
    config: http.RequestOptions | CallbackFunction<invoice$InvoiceResponse>,
    cb?: CallbackFunction<invoice$InvoiceResponse>
  ): void;

  declare var npm$namespace$refund: {
    get: typeof refund$get
  };
  declare function refund$get(
    id: string,
    config: http.RequestOptions | CallbackFunction<RefundResource>,
    cb?: CallbackFunction<RefundResource>
  ): void;

  declare var npm$namespace$sale: {
    get: typeof sale$get,
    refund: typeof sale$refund
  };
  declare function sale$get(
    id: string,
    config: http.RequestOptions | CallbackFunction<PaymentResponse>,
    cb?: CallbackFunction<PaymentResponse>
  ): void;

  declare function sale$refund(
    id: string,
    data:
      | invoice$RefundRequest
      | http.RequestOptions
      | CallbackFunction<RefundResource>,
    config?: http.RequestOptions | CallbackFunction<RefundResource>,
    cb?: CallbackFunction<RefundResource>
  ): void;

  declare var npm$namespace$billingAgreement: {
    billBalance: typeof billingAgreement$billBalance,
    cancel: typeof billingAgreement$cancel,
    create: typeof billingAgreement$create,
    execute: typeof billingAgreement$execute,
    get: typeof billingAgreement$get,
    reactivate: typeof billingAgreement$reactivate,
    searchTransactions: typeof billingAgreement$searchTransactions,
    setBalance: typeof billingAgreement$setBalance,
    suspend: typeof billingAgreement$suspend,
    update: typeof billingAgreement$update
  };
  declare function billingAgreement$billBalance(
    id: string,
    data: any,
    config?: any,
    cb?: any
  ): void;

  declare function billingAgreement$cancel(
    id: string,
    data: any,
    config?: any,
    cb?: any
  ): void;

  declare function billingAgreement$create(
    data: any,
    config: any,
    cb?: any
  ): void;

  declare function billingAgreement$execute(
    id: string,
    data: any,
    config?: any,
    cb?: any
  ): void;

  declare function billingAgreement$get(
    id: string,
    config: any,
    cb?: any
  ): void;

  declare function billingAgreement$reactivate(
    id: string,
    data: any,
    config?: any,
    cb?: any
  ): void;

  declare function billingAgreement$searchTransactions(
    id: string,
    start_date: any,
    end_date?: any,
    config?: any,
    cb?: any
  ): void;

  declare function billingAgreement$setBalance(
    id: string,
    data: any,
    config?: any,
    cb?: any
  ): void;

  declare function billingAgreement$suspend(
    id: string,
    data: any,
    config?: any,
    cb?: any
  ): void;

  declare function billingAgreement$update(
    id: string,
    data: any,
    config?: any,
    cb?: any
  ): void;

  declare var npm$namespace$billingPlan: {
    activate: typeof billingPlan$activate,
    create: typeof billingPlan$create,
    get: typeof billingPlan$get,
    list: typeof billingPlan$list,
    update: typeof billingPlan$update
  };
  declare function billingPlan$activate(
    id: string,
    config: any,
    cb?: any
  ): void;

  declare function billingPlan$create(data: any, config: any, cb?: any): void;

  declare function billingPlan$get(id: string, config: any, cb?: any): void;

  declare function billingPlan$list(data: any, config?: any, cb?: any): void;

  declare function billingPlan$update(
    id: string,
    data: any,
    config: any,
    cb?: any
  ): void;

  declare var npm$namespace$invoiceTemplate: {
    create: typeof invoiceTemplate$create,
    get: typeof invoiceTemplate$get,
    list: typeof invoiceTemplate$list,
    update: typeof invoiceTemplate$update
  };
  declare function invoiceTemplate$create(
    data: any,
    config: any,
    cb?: any
  ): void;

  declare function invoiceTemplate$get(id: string, config: any, cb?: any): void;

  declare function invoiceTemplate$list(
    data: any,
    config?: any,
    cb?: any
  ): void;

  declare function invoiceTemplate$update(
    id: string,
    data: any,
    config: any,
    cb?: any
  ): void;

  declare var npm$namespace$order: {
    authorize: typeof order$authorize,
    get: typeof order$get,
    capture: typeof order$capture
  };
  declare function order$authorize(
    id: string,
    data: any,
    config: any,
    cb?: any
  ): void;

  declare function order$get(id: string, config: any, cb?: any): void;

  declare function order$capture(
    id: string,
    data: any,
    config: any,
    cb?: any
  ): void;

  declare var npm$namespace$payout: {
    create: typeof payout$create,
    get: typeof payout$get
  };
  declare function payout$create(
    data: any,
    sync_mode: any,
    config?: any,
    cb?: any
  ): void;

  declare function payout$get(id: string, config: any, cb?: any): void;

  declare var npm$namespace$payoutItem: {
    cancel: typeof payoutItem$cancel,
    get: typeof payoutItem$get
  };
  declare function payoutItem$cancel(id: string, config: any, cb?: any): void;

  declare function payoutItem$get(id: string, config: any, cb?: any): void;

  declare var npm$namespace$webProfile: {
    create: typeof webProfile$create,
    del: typeof webProfile$del,
    get: typeof webProfile$get,
    list: typeof webProfile$list,
    replace: typeof webProfile$replace,
    update: typeof webProfile$update
  };
  declare function webProfile$create(data: any, config: any, cb?: any): void;

  declare function webProfile$del(id: string, config: any, cb?: any): void;

  declare function webProfile$get(id: string, config: any, cb?: any): void;

  declare function webProfile$list(data: any, config?: any, cb?: any): void;

  declare function webProfile$replace(
    id: string,
    data: any,
    config: any,
    cb?: any
  ): void;

  declare function webProfile$update(
    id: string,
    data: any,
    config: any,
    cb?: any
  ): void;
}
