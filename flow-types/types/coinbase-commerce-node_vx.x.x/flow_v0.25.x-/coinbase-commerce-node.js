declare module "coinbase-commerce-node" {
  /**
   * Client request options.
   */
  declare interface Options {
    url: string;
    body: string;
    method: "GET" | "POST" | "DELETE" | "PUT";
    timeout: number;
    headers: {
      [key: string]: any,
      "Content-Type": "application/json",
      Accept: "application/json",
      "User-Agent": string,
      "X-CC-Api-Key": string,
      "X-CC-Version": string
    };
  }

  /**
   * Omit a property from the given type.
   */
  declare type Omit<T, K: $Keys<T>> = Pick<T, Exclude<$Keys<T>, K>>;

  /**
   * Node callback
   */
  declare type Callback<T> = (error: any, response: T) => void;

  /**
   * Pagination callback.
   */
  declare type PaginationCallback<T> = (
    error: any,
    response: T[],
    pagination: Pagination
  ) => void;

  /**
   * Fiat currency.
   */
  declare type FiatCurrency = "USD" | "GBP" | "EUR" | string;

  /**
   * Crypto currency.
   */
  declare type CryptoCurrency = "BTC" | "ETH" | "BCH" | "LTC" | "USDC";

  /**
   * Full crypto currency name.
   */
  declare type CryptoName =
    | "bitcoin"
    | "ethereum"
    | "bitcoincash"
    | "litecoin"
    | "usdc";

  /**
   * Pricing type.
   */
  declare type PricingType = "no_price" | "fixed_price";

  /**
   * Timestamp string.
   * ISO 8601
   */
  declare type Timestamp = string;

  /**
   * Payment status.
   */
  declare type PaymentStatus =
    | "NEW"
    | "PENDING"
    | "CONFIRMED"
    | "UNRESOLVED"
    | "RESOLVED"
    | "EXPIRED"
    | "CANCELED";

  /**
   * Crypto pricing object.
   */
  declare type CryptoPricing = $ObjMapi<
    { [k: CryptoName]: any },
    <key>(key) => Price<CryptoCurrency>
  >;

  /**
   * Key-value object.
   */
  declare interface KeyVal {
    [key: string]: any;
  }

  /**
   * Price object.
   */
  declare interface Price<Currency = CryptoCurrency | FiatCurrency> {
    amount: string;
    currency: Currency;
  }

  /**
   * Pricing object.
   */
  declare type Pricing = {
    local: Price<FiatCurrency>
  } & CryptoPricing;

  /**
   * Pagination request.
   * @link https://commerce.coinbase.com/docs/api/#pagination
   */
  declare interface PaginationRequest {
    /**
     * Order of resources in the response.
     *
     * default: desc
     */
    order?: "asc" | "desc";

    /**
     * Number of results per call.
     *
     * Accepted values: 0 - 100
     * Default: 25
     */
    limit?: number;

    /**
     * A cursor for use in pagination.
     * This is a resource ID that defines your place in the list.
     */
    starting_after?: string | null;

    /**
     * A cursor for use in pagination.
     * This is a resource ID that defines your place in the list.
     */
    ending_before?: string | null;
  }

  /**
   * Pagination response.
   * @link https://commerce.coinbase.com/docs/api/#pagination
   */
  declare type Pagination = {
    total: number,
    yielded: number,
    previous_uri: null | string,
    next_uri: null | string,
    cursor_range: [string, string]
  } & Pick<
    PaginationRequest,
    "order" | "starting_after" | "ending_before" | "limit"
  >;

  /**
   * No price resource.
   */
  declare interface NoPrice {
    /**
     * Pricing type.
     */
    pricing_type: "no_price";
  }

  /**
   * Fixed price resource.
   */
  declare interface FixedPrice {
    /**
     * Pricing type
     */
    pricing_type: "fixed_price";

    /**
     * Local price in fiat currency.
     */
    local_price: Price<FiatCurrency>;
  }

  /**
   * Base charge properties.
   */
  declare interface BaseCharge {
    /**
     * Charge name.
     * 100 characters or less.
     */
    name: string;

    /**
     * More detailed description of the charge.
     * 200 characters or less.
     */
    description: string;

    /**
     * Charge pricing type.
     */
    pricing_type: PricingType;

    /**
     * Optional key value pairs for your own use.
     */
    metadata?: KeyVal;

    /**
     * Redirect the user to this URL on completion.
     */
    redirect_url?: string;

    /**
     * Redirect the user to this URL on cancel.
     */
    cancel_url?: string;
  }

  /**
   * Create a charge.
   * @link https://commerce.coinbase.com/docs/api/#charge-resource
   */
  declare type CreateCharge = BaseCharge & (FixedPrice | NoPrice);

  /**
   * Charge creation response.
   * @link https://commerce.coinbase.com/docs/api/#charge-resource
   */
  declare type ChargeResource = {
    /**
     * Charge UUID
     */
    id: string,

    /**
     * Resource name.
     */
    resource: "charge",

    /**
     * User fiendly primary key.
     */
    code: string,

    /**
     * Charge image URL.
     */
    logo_url?: string,

    /**
     * Hosted charge URL.
     */
    hosted_url: string,

    /**
     * Charge creation time.
     */
    created_at: Timestamp,

    /**
     * Charge expiration time.
     */
    expires_at: Timestamp,

    /**
     * Charge confirmation time.
     */
    confirmed_at?: Timestamp,

    /**
     * Associated checkout resource.
     */
    checkout?: {
      id: string
    },

    /**
     * Array of status update objects.
     */
    timeline: Array<{
      /**
       * Timeline entry timestamp.
       */
      time: Timestamp,

      /**
       * Timeline entry status.
       */
      status: PaymentStatus,

      /**
       * Timeline entry context.
       */
      context?:
        | "UNDERPAID"
        | "OVERPAID"
        | "DELAYED"
        | "MULTIPLE"
        | "MANUAL"
        | "OTHER"
    }>,

    /**
     * Charge metadata provided by you, the developer.
     */
    metadata: KeyVal,

    /**
     * Charge price information object.
     */
    pricing: Pricing,

    /**
     * Array of charge payment objects.
     */
    payments: Array<{
      network: CryptoName,
      transaction_id: string,
      status: PaymentStatus,
      value: {
        local: Price<FiatCurrency>,
        crypto: Price<CryptoCurrency>
      },
      block: {
        height: number,
        hash: string,
        confirmations_accumulated: number,
        confirmations_required: number
      }
    }>,

    /**
     * Set of addresses associated with the charge.
     */
    addresses: $Shape<Record<CryptoName, string>>
  } & BaseCharge;

  /**
   * Base checkout properties.
   */
  declare interface BaseCheckout {
    /**
     * Checkout name.
     * 100 characters or less.
     */
    name: string;

    /**
     * More detailed description.
     * 200 characters or less.
     */
    description: string;

    /**
     * Checkout pricing type.
     */
    pricing_type: PricingType;

    /**
     * Information to collect from the customer.
     */
    requested_info?: Array<"email" | "name">;
  }

  /**
   * Create a checkout.
   * @link https://commerce.coinbase.com/docs/api/#create-a-checkout
   */
  declare type CreateCheckout = BaseCheckout & (FixedPrice | NoPrice);

  /**
   * Update a checkout resource.
   * @link https://commerce.coinbase.com/docs/api/#update-a-checkout
   */
  declare type UpdateCheckout = Omit<CreateCheckout, "pricing_type">;

  /**
   * Checkout Resource.
   * @link https://commerce.coinbase.com/docs/api/#checkout-resource
   */
  declare type CheckoutResource = {
    /**
     * Checkout UUID.
     */
    id: string,

    /**
     * Resource name.
     */
    resource: "checkout",

    /**
     * Checkout image URL.
     */
    logo_url?: string,

    /**
     * Price in local fiat currency.
     */
    local_price?: Price<FiatCurrency>
  } & BaseCheckout;

  /**
   * Event Resource.
   * @link
   */
  declare interface EventResource<T = ChargeResource | CheckoutResource> {
    /**
     * Event UUID.
     */
    id: string;

    /**
     * Resource name.
     */
    resource: "event";

    /**
     * Event type.
     */
    type:
      | "charge:created"
      | "charge:confirmed"
      | "charge:failed"
      | "charge:delayed"
      | "charge:pending"
      | "charge:resolved";

    /**
     * Event creation time.
     */
    created_at: Timestamp;

    /**
     * API version of the `data` payload.
     */
    api_version: string;

    /**
     * Event Payload.
     * Resource of the associated object at the time of the event.
     */
    data: T;
  }
  declare var Client: typeof npm$namespace$Client;

  declare var npm$namespace$Client: {
    init: typeof Client$init
  };

  /**
   * Setup client.
   */
  declare function Client$init(
    apiKey: string,
    baseApiUrl?: string,
    apiVersion?: string,
    timeout?: number
  ): Options;

  declare var resources: typeof npm$namespace$resources;

  declare var npm$namespace$resources: {
    Resource: typeof resources$Resource,
    Charge: typeof resources$Charge,
    Checkout: typeof resources$Checkout,
    Event: typeof resources$Event
  };

  /**
   * Resource object
   * All coinbase-commerce-node resources implement the following static methods.
   * @link https://github.com/coinbase/coinbase-commerce-node#documentation
   */
  declare class resources$Resource<Request> {
    /**
     * Charge constructor.
     */
    constructor(data: Request): this;

    /**
     * Save the current resource.
     * Creates a new resource if it doesn't already exist in Coinbase Commerce's systems.
     */
    save(callback?: Callback<this>): Promise<this>;

    /**
     * Delete the current resource.
     */
    delete(callback?: Callback<this>): Promise<this>;

    /**
     * Save new resource to Coinbase Commerce.
     */
    insert(callback?: Callback<this>): Promise<this>;

    /**
     * Update the current resource.
     */
    update(callback?: Callback<this>): Promise<this>;
  }

  /**
   * Charge Class
   * @link https://github.com/coinbase/coinbase-commerce-node#charges
   */
  declare class resources$Charge mixins Resource<CreateCharge> {
    /**
     * Create a charge.
     */
    static create(
      chargeData: CreateCharge,
      callback?: Callback<resources$Charge>
    ): Promise<resources$Charge>;

    /**
     * List charges.
     */
    static list(
      paginationOptions: PaginationRequest,
      callback?: PaginationCallback<resources$Charge>
    ): Promise<[resources$Charge[], Pagination]>;

    /**
     * Fetch all charges.
     */
    static all(
      paginationOptions: PaginationRequest,
      callback?: Callback<resources$Charge[]>
    ): Promise<resources$Charge[]>;

    /**
     * Retrieve a charge by ID.
     */
    static retrieve(
      chargeId: $PropertyType<ChargeResource, "id">,
      callback?: Callback<resources$Charge>
    ): Promise<resources$Charge>;
  }

  /**
   * Checkout class.
   * @link https://github.com/coinbase/coinbase-commerce-node#checkouts
   */
  declare class resources$Checkout mixins Resource<CreateCheckout> {
    /**
     * Create a checkout.
     */
    static create(
      checkoutData: CreateCheckout,
      callback?: Callback<resources$Checkout>
    ): Promise<resources$Checkout>;

    /**
     * List checkouts.
     */
    static list(
      paginationOptions: PaginationRequest,
      callback?: PaginationCallback<resources$Checkout>
    ): Promise<[resources$Checkout[], Pagination]>;

    /**
     * Fetch all checkouts.
     */
    static all(
      paginationOptions: PaginationRequest,
      callback?: Callback<resources$Checkout[]>
    ): Promise<resources$Checkout[]>;

    /**
     * Retrieve a checkout by ID.
     */
    static retrieve(
      checkoutId: $PropertyType<CheckoutResource, "id">,
      callback?: Callback<resources$Checkout>
    ): Promise<resources$Checkout>;

    /**
     * Update a checkout by ID.
     */
    static updateById(
      checkoutId: $PropertyType<CheckoutResource, "id">,
      update: UpdateCheckout,
      callback?: Callback<resources$Checkout>
    ): Promise<resources$Checkout>;

    /**
     * Delete a checkout by ID.
     */
    static deleteById(
      checkoutId: $PropertyType<CheckoutResource, "id">,
      callback?: Callback<resources$Checkout>
    ): Promise<resources$Checkout>;
  }

  /**
   * Event class.
   * @link https://github.com/coinbase/coinbase-commerce-node#events
   */
  declare class resources$Event mixins Resource<EventResource<>> {
    /**
     * Retrieve a event by ID.
     */
    static retrieve(
      eventId: $PropertyType<EventResource<>, "id">,
      callback?: Callback<resources$Event>
    ): Promise<resources$Event>;

    /**
     * List events.
     */
    static list(
      paginationOptions: PaginationRequest,
      callback?: PaginationCallback<resources$Event>
    ): Promise<[resources$Event[], Pagination]>;

    /**
     * Fetch all events.
     */
    static all(
      paginationOptions: PaginationRequest,
      callback?: Callback<resources$Event[]>
    ): Promise<resources$Event[]>;
  }

  declare export { Event, Charge, Checkout };

  declare var Webhook: typeof npm$namespace$Webhook;

  declare var npm$namespace$Webhook: {
    verifySigHeader: typeof Webhook$verifySigHeader
  };

  /**
   * Verify a signature header.
   * @link https://github.com/coinbase/coinbase-commerce-node#verify-signature-header
   */
  declare function Webhook$verifySigHeader(
    rawBody: string,
    signature: string,
    sharedSecret: string
  ): void;

  declare export {
    Webhook,
    Pagination,
    ChargeResource,
    CheckoutResource,
    CreateCheckout,
    EventResource,
    CreateCharge
  };
}
