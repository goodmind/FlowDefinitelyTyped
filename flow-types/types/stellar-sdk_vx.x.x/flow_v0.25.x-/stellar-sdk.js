declare module "stellar-sdk" {
  import type {
    AssetType,
    Asset,
    Memo,
    MemoType,
    Transaction
  } from "stellar-base";

  declare export {
    Account,
    Asset,
    AssetType,
    AuthFlag,
    AuthImmutableFlag,
    AuthRequiredFlag,
    AuthRevocableFlag,
    FastSigning,
    Keypair,
    Memo,
    MemoType,
    MemoValue,
    MemoHash,
    MemoID,
    MemoNone,
    MemoReturn,
    MemoText,
    Network,
    Networks,
    Operation,
    OperationOptions,
    OperationType,
    StrKey,
    Signer,
    SignerOptions,
    Transaction,
    TransactionBuilder,
    hash,
    sign,
    verify,
    xdr
  } from "stellar-base";

  declare export {};

  declare type Key = string | number | Symbol;
  declare type Diff<T: Key, U: Key> = $ElementType<
    $ObjMapi<{ [k: T]: any }, <P>(P) => P> &
      $ObjMapi<{ [k: U]: any }, <P>(P) => empty> & {
        [x: string]: empty
      },
    T
  >;
  declare type Omit<T, K: $Keys<T>> = Pick<T, Diff<$Keys<T>, K>>;
  declare export class NetworkError mixins Error {
    constructor(message: string, response: any): this;
    getResponse(): any;
  }
  declare export class NotFoundError mixins NetworkError {}
  declare export class BadRequestError mixins NetworkError {}
  declare export class BadResponseError mixins NetworkError {}

  declare var npm$namespace$Config: {
    setAllowHttp: typeof Config$setAllowHttp,
    isAllowHttp: typeof Config$isAllowHttp,
    setDefault: typeof Config$setDefault
  };
  declare function Config$setAllowHttp(allow: boolean): void;

  declare function Config$isAllowHttp(): boolean;

  declare function Config$setDefault(): void;

  declare export class Server {
    constructor(serverURL: string, options?: Server$Options): this;
    accounts(): Server$AccountCallBuilder;
    assets(): Server$AssetsCallBuilder;
    effects(): Server$EffectCallBuilder;
    ledgers(): Server$LedgerCallBuilder;
    loadAccount(accountId: string): Promise<Server$AccountResponse>;
    offers(resource: string, ...parameters: string[]): Server$OfferCallBuilder;
    operations(): Server$OperationCallBuilder;
    orderbook(selling: Asset, buying: Asset): Server$OrderbookCallBuilder;
    paths(
      source: string,
      destination: string,
      destinationAsset: Asset,
      destinationAmount: string
    ): Server$PathCallBuilder;
    payments(): Server$PaymentCallBuilder;
    submitTransaction(
      transaction: Transaction
    ): Promise<Server$TransactionRecord>;
    tradeAggregation(
      base: Asset,
      counter: Asset,
      startTime: Date,
      endTime: Date,
      resolution: Date
    ): Server$TradeAggregationCallBuilder;
    trades(): Server$TradesCallBuilder;
    transactions(): Server$TransactionCallBuilder;
    serverURL: any;
  }

  declare var npm$namespace$Server: {
    CallBuilder: typeof Server$CallBuilder,
    AccountCallBuilder: typeof Server$AccountCallBuilder,
    AccountResponse: typeof Server$AccountResponse,
    AssetsCallBuilder: typeof Server$AssetsCallBuilder,
    EffectCallBuilder: typeof Server$EffectCallBuilder,
    LedgerCallBuilder: typeof Server$LedgerCallBuilder,
    OfferCallBuilder: typeof Server$OfferCallBuilder,
    OperationCallBuilder: typeof Server$OperationCallBuilder,
    OrderbookCallBuilder: typeof Server$OrderbookCallBuilder,
    PathCallBuilder: typeof Server$PathCallBuilder,
    PaymentCallBuilder: typeof Server$PaymentCallBuilder,
    TradeAggregationCallBuilder: typeof Server$TradeAggregationCallBuilder,
    TradesCallBuilder: typeof Server$TradesCallBuilder,
    TransactionCallBuilder: typeof Server$TransactionCallBuilder
  };
  declare class Server$CallBuilder<
    T: Horizon$BaseResponse = Horizon$BaseResponse
  > {
    constructor(serverUrl: string): this;
    call(): Promise<Server$CollectionPage<T>>;
    cursor(cursor: string): this;
    limit(limit: number | string): this;
    order(direction: "asc" | "desc"): this;
    stream(options?: {
      onmessage?: (record: T) => void,
      onerror?: (error: Error) => void
    }): () => void;
  }

  declare interface Server$CollectionPage<
    T: Horizon$BaseResponse = Horizon$BaseResponse
  > {
    records: T[];
    next: () => Promise<Server$CollectionPage<T>>;
    prev: () => Promise<Server$CollectionPage<T>>;
  }

  declare interface Server$CollectionRecord<
    T: Horizon$BaseResponse = Horizon$BaseResponse
  > {
    _links: {
      next: Horizon$ResponseLink,
      prev: Horizon$ResponseLink,
      self: Horizon$ResponseLink
    };
    _embedded: {
      records: T[]
    };
  }

  declare interface Server$CallFunctionTemplateOptions {
    cursor?: string | number;
    limit?: number;
    order?: "asc" | "desc";
  }

  declare type Server$CallFunction<
    T: Horizon$BaseResponse = Horizon$BaseResponse
  > = () => Promise<T>;

  declare type Server$CallCollectionFunction<
    T: Horizon$BaseResponse = Horizon$BaseResponse
  > = (
    options?: Server$CallFunctionTemplateOptions
  ) => Promise<Server$CollectionRecord<T>>;

  declare type Server$AccountRecord = {
    id: string,
    paging_token: string,
    account_id: string,
    sequence: number,
    subentry_count: number,
    thresholds: Horizon$AccountThresholds,
    flags: Horizon$Flags,
    balances: Horizon$BalanceLine[],
    signers: Array<{
      public_key: string,
      weight: number
    }>,
    data: (options: {
      value: string
    }) => Promise<{
      value: string
    }>,
    data_attr: {
      [key: string]: string
    },
    effects: Server$CallCollectionFunction<Server$EffectRecord>,
    offers: Server$CallCollectionFunction<Server$OfferRecord>,
    operations: Server$CallCollectionFunction<Server$OperationRecord>,
    payments: Server$CallCollectionFunction<Server$PaymentOperationRecord>,
    trades: Server$CallCollectionFunction<Server$TradeRecord>
  } & Horizon$BaseResponse;

  declare type Server$AssetRecord = {
    asset_type: AssetType.credit4 | AssetType.credit12,
    asset_code: string,
    asset_issuer: string,
    paging_token: string,
    amount: string,
    num_accounts: number,
    flags: Horizon$Flags
  } & Horizon$BaseResponse;

  declare type Server$EffectRecord = {
    account: string,
    paging_token: string,
    starting_balance: string,
    type_i: string,
    type: string,
    amount?: any,
    operation?: Server$CallFunction<Server$OperationRecord>,
    precedes?: Server$CallFunction<Server$EffectRecord>,
    succeeds?: Server$CallFunction<Server$EffectRecord>
  } & Horizon$BaseResponse;

  declare type Server$LedgerRecord = {
    id: string,
    paging_token: string,
    hash: string,
    prev_hash: string,
    sequence: number,
    transaction_count: number,
    operation_count: number,
    closed_at: string,
    total_coins: string,
    fee_pool: string,
    base_fee: number,
    base_reserve: string,
    max_tx_set_size: number,
    protocol_version: number,
    header_xdr: string,
    base_fee_in_stroops: number,
    base_reserve_in_stroops: number,
    effects: Server$CallCollectionFunction<Server$EffectRecord>,
    operations: Server$CallCollectionFunction<Server$OperationRecord>,
    self: Server$CallFunction<Server$LedgerRecord>,
    transactions: Server$CallCollectionFunction<Server$TransactionRecord>
  } & Horizon$BaseResponse;

  declare type Server$OfferRecord = {
    id: string,
    paging_token: string,
    seller_attr: string,
    selling: Asset,
    buying: Asset,
    amount: string,
    price_r: Horizon$PriceR,
    price: string,
    seller?: Server$CallFunction<Server$AccountRecord>
  } & Horizon$BaseResponse;

  declare type Server$BaseOperationRecord<
    T: Horizon$OperationResponseType = Horizon$OperationResponseType,
    TI: Horizon$OperationResponseTypeI = Horizon$OperationResponseTypeI
  > = {
    self: Server$CallFunction<Server$OperationRecord>,
    succeeds: Server$CallFunction<Server$OperationRecord>,
    precedes: Server$CallFunction<Server$OperationRecord>,
    effects: Server$CallCollectionFunction<Server$EffectRecord>,
    transaction: Server$CallFunction<Server$TransactionRecord>
  } & Horizon$BaseOperationResponse<T, TI>;

  declare type Server$CreateAccountOperationRecord = {} & BaseOperationRecord<
    OperationResponseType.createAccount,
    OperationResponseTypeI.createAccount
  > &
    Horizon$CreateAccountOperationResponse;

  declare type Server$PaymentOperationRecord = {
    sender: Server$CallFunction<Server$AccountRecord>,
    receiver: Server$CallFunction<Server$AccountRecord>
  } & BaseOperationRecord<
    OperationResponseType.payment,
    OperationResponseTypeI.payment
  > &
    Horizon$PaymentOperationResponse;

  declare type Server$PathPaymentOperationRecord = {} & BaseOperationRecord<
    OperationResponseType.pathPayment,
    OperationResponseTypeI.pathPayment
  > &
    Horizon$PathPaymentOperationResponse;

  declare type Server$ManageOfferOperationRecord = {} & BaseOperationRecord<
    OperationResponseType.manageOffer,
    OperationResponseTypeI.manageOffer
  > &
    Horizon$ManageOfferOperationResponse;

  declare type Server$PassiveOfferOperationRecord = {} & BaseOperationRecord<
    OperationResponseType.createPassiveOffer,
    OperationResponseTypeI.createPassiveOffer
  > &
    Horizon$PassiveOfferOperationResponse;

  declare type Server$SetOptionsOperationRecord = {} & BaseOperationRecord<
    OperationResponseType.setOptions,
    OperationResponseTypeI.setOptions
  > &
    Horizon$SetOptionsOperationResponse;

  declare type Server$ChangeTrustOperationRecord = {} & BaseOperationRecord<
    OperationResponseType.changeTrust,
    OperationResponseTypeI.changeTrust
  > &
    Horizon$ChangeTrustOperationResponse;

  declare type Server$AllowTrustOperationRecord = {} & BaseOperationRecord<
    OperationResponseType.allowTrust,
    OperationResponseTypeI.allowTrust
  > &
    Horizon$AllowTrustOperationResponse;

  declare type Server$AccountMergeOperationRecord = {} & BaseOperationRecord<
    OperationResponseType.accountMerge,
    OperationResponseTypeI.accountMerge
  > &
    Horizon$AccountMergeOperationResponse;

  declare type Server$InflationOperationRecord = {} & BaseOperationRecord<
    OperationResponseType.inflation,
    OperationResponseTypeI.inflation
  > &
    Horizon$InflationOperationResponse;

  declare type Server$ManageDataOperationRecord = {} & BaseOperationRecord<
    OperationResponseType.manageData,
    OperationResponseTypeI.manageData
  > &
    Horizon$ManageDataOperationResponse;

  declare type Server$BumpSequenceOperationRecord = {} & BaseOperationRecord<
    OperationResponseType.bumpSequence,
    OperationResponseTypeI.bumpSequence
  > &
    Horizon$BumpSequenceOperationResponse;

  declare type Server$OperationRecord =
    | Server$CreateAccountOperationRecord
    | Server$PaymentOperationRecord
    | Server$PathPaymentOperationRecord
    | Server$ManageOfferOperationRecord
    | Server$PassiveOfferOperationRecord
    | Server$SetOptionsOperationRecord
    | Server$ChangeTrustOperationRecord
    | Server$AllowTrustOperationRecord
    | Server$AccountMergeOperationRecord
    | Server$InflationOperationRecord
    | Server$ManageDataOperationRecord
    | Server$BumpSequenceOperationRecord;

  declare type Server$OrderbookRecord = {
    bids: Array<{
      price_r: {},
      price: number,
      amount: string
    }>,
    asks: Array<{
      price_r: {},
      price: number,
      amount: string
    }>,
    selling: Asset,
    buying: Asset
  } & Horizon$BaseResponse;

  declare type Server$PaymentPathRecord = {
    path: Array<{
      asset_code: string,
      asset_issuer: string,
      asset_type: string
    }>,
    source_amount: string,
    source_asset_type: string,
    source_asset_code: string,
    source_asset_issuer: string,
    destination_amount: string,
    destination_asset_type: string,
    destination_asset_code: string,
    destination_asset_issuer: string
  } & Horizon$BaseResponse;

  declare type Server$TradeRecord = {
    id: string,
    paging_token: string,
    ledger_close_time: string,
    base_account: string,
    base_amount: string,
    base_asset_type: string,
    base_asset_code: string,
    base_asset_issuer: string,
    counter_account: string,
    counter_amount: string,
    counter_asset_type: string,
    counter_asset_code: string,
    counter_asset_issuer: string,
    base_is_seller: boolean,
    base: Server$CallFunction<Server$AccountRecord>,
    counter: Server$CallFunction<Server$AccountRecord>,
    operation: Server$CallFunction<Server$OperationRecord>
  } & Horizon$BaseResponse;

  declare type Server$TradeAggregationRecord = {
    timestamp: string,
    trade_count: number,
    base_volume: string,
    counter_volume: string,
    avg: string,
    high: string,
    low: string,
    open: string,
    close: string
  } & Horizon$BaseResponse;

  declare type Server$TransactionRecord = {
    ledger_attr: $ElementType<Horizon$TransactionResponse, "ledger">,
    account: Server$CallFunction<Server$AccountRecord>,
    effects: Server$CallCollectionFunction<Server$EffectRecord>,
    ledger: Server$CallFunction<Server$LedgerRecord>,
    operations: Server$CallCollectionFunction<Server$OperationRecord>,
    precedes: Server$CallFunction<Server$TransactionRecord>,
    self: Server$CallFunction<Server$TransactionRecord>,
    succeeds: Server$CallFunction<Server$TransactionRecord>
  } & Omit<Horizon$TransactionResponse, "ledger">;

  declare class Server$AccountCallBuilder
    mixins CallBuilder<Server$AccountRecord> {
    accountId(id: string): this;
  }

  declare class Server$AccountResponse mixins AccountRecord {
    _links: $ObjMapi<{ [k: "self"]: any }, <key>(key) => Horizon$ResponseLink>;
    id: string;
    paging_token: string;
    account_id: string;
    sequence: number;
    subentry_count: number;
    thresholds: Horizon$AccountThresholds;
    flags: Horizon$Flags;
    balances: Horizon$BalanceLine[];
    signers: Horizon$AccountSigner[];
    data: (options: {
      value: string
    }) => Promise<{
      value: string
    }>;
    data_attr: {
      [key: string]: string
    };
    inflation_destination: any;
    effects: Server$CallCollectionFunction<Server$EffectRecord>;
    offers: Server$CallCollectionFunction<Server$OfferRecord>;
    operations: Server$CallCollectionFunction<Server$OperationRecord>;
    payments: Server$CallCollectionFunction<Server$PaymentOperationRecord>;
    trades: Server$CallCollectionFunction<Server$TradeRecord>;
    constructor(response: Server$AccountRecord): this;
    accountId(): string;
    sequenceNumber(): string;
    incrementSequenceNumber(): void;
  }

  declare class Server$AssetsCallBuilder
    mixins CallBuilder<Server$AssetRecord> {
    forCode(value: string): this;
    forIssuer(value: string): this;
  }

  declare class Server$EffectCallBuilder
    mixins CallBuilder<Server$EffectRecord> {
    forAccount(accountId: string): this;
    forLedger(sequence: string): this;
    forOperation(operationId: number): this;
    forTransaction(transactionId: string): this;
  }

  declare class Server$LedgerCallBuilder
    mixins CallBuilder<Server$LedgerRecord> {}

  declare class Server$OfferCallBuilder
    mixins CallBuilder<Server$OfferRecord> {}

  declare class Server$OperationCallBuilder
    mixins CallBuilder<Server$OperationRecord> {
    forAccount(accountId: string): this;
    forLedger(sequence: string): this;
    forTransaction(transactionId: string): this;
  }

  declare class Server$OrderbookCallBuilder
    mixins CallBuilder<Server$OrderbookRecord> {}

  declare class Server$PathCallBuilder
    mixins CallBuilder<Server$PaymentPathRecord> {}

  declare class Server$PaymentCallBuilder
    mixins CallBuilder<Server$PaymentOperationRecord> {
    forAccount(accountId: string): this;
    forLedger(sequence: string): this;
    forTransaction(transactionId: string): this;
  }

  declare interface Server$Options {
    allowHttp: boolean;
    allowHttp: boolean;
  }

  declare class Server$TradeAggregationCallBuilder
    mixins CallBuilder<Server$TradeAggregationRecord> {}

  declare class Server$TradesCallBuilder
    mixins CallBuilder<Server$TradeRecord> {
    forAssetPair(base: Asset, counter: Asset): this;
    forOffer(offerId: string): this;
  }

  declare class Server$TransactionCallBuilder
    mixins CallBuilder<Server$TransactionRecord> {
    transaction(transactionId: string): this;
    forAccount(accountId: string): this;
    forLedger(sequence: string | number): this;
  }
  declare export class FederationServer {
    static createForDomain(
      domain: string,
      options?: FederationServer$Options
    ): Promise<FederationServer>;
    static resolve(
      value: string,
      options?: FederationServer$Options
    ): Promise<FederationServer$Record>;
    constructor(
      serverURL: string,
      domain: string,
      options?: FederationServer$Options
    ): this;
    resolveAccountId(account: string): Promise<FederationServer$Record>;
    resolveAddress(address: string): Promise<FederationServer$Record>;
    resolveTransactionId(
      transactionId: string
    ): Promise<FederationServer$Record>;
  }
  declare interface FederationServer$Record {
    account_id: string;
    memo_type?: string;
    memo?: string;
  }

  declare interface FederationServer$Options {
    allowHttp: boolean;
    allowHttp: boolean;
  }

  declare var npm$namespace$StellarTomlResolver: {
    resolve: typeof StellarTomlResolver$resolve
  };
  declare interface StellarTomlResolver$StellarTomlResolveOptions {
    allowHttp?: boolean;
    timeout?: number;
  }

  declare function StellarTomlResolver$resolve(
    domain: string,
    options?: StellarTomlResolver$StellarTomlResolveOptions
  ): Promise<{
    [key: string]: any
  }>;

  declare var npm$namespace$Horizon: {
    OperationResponseType: typeof Horizon$OperationResponseType,
    OperationResponseTypeI: typeof Horizon$OperationResponseTypeI
  };
  declare interface Horizon$ResponseLink {
    href: string;
    templated?: boolean;
  }

  declare interface Horizon$BaseResponse<T: string = empty> {
    _links: $ObjMapi<
      { [k: T | "self"]: any },
      <key>(key) => Horizon$ResponseLink
    >;
  }

  declare type Horizon$TransactionResponse = {
    created_at: string,
    envelope_xdr: string,
    fee_meta_xdr: string,
    fee_paid: number,
    hash: string,
    id: string,
    ledger: number,
    memo_type: MemoType,
    memo?: string,
    operation_count: number,
    paging_token: string,
    result_meta_xdr: string,
    result_xdr: string,
    signatures: string[],
    source_account: string,
    source_account_sequence: string
  } & BaseResponse<
    "account" | "ledger" | "operations" | "effects" | "succeeds" | "precedes"
  >;

  declare interface Horizon$BalanceLineNative {
    balance: string;
    asset_type: AssetType.native;
  }

  declare interface Horizon$BalanceLineAsset<
    T: AssetType.credit4 | AssetType.credit12 =
      | AssetType.credit4
      | AssetType.credit12
  > {
    balance: string;
    limit: string;
    asset_type: T;
    asset_code: string;
    asset_issuer: string;
  }

  declare type Horizon$BalanceLine<T: AssetType = AssetType> =
    "There was Conditional Type, use $Call utility type";

  declare interface Horizon$PriceR {
    numerator: number;
    denominator: number;
  }

  declare interface Horizon$AccountThresholds {
    low_threshold: number;
    med_threshold: number;
    high_threshold: number;
  }

  declare interface Horizon$Flags {
    auth_required: boolean;
    auth_revocable: boolean;
  }

  declare interface Horizon$AccountSigner {
    public_key: string;
    weight: number;
  }

  declare type Horizon$AccountResponse = {
    id: string,
    paging_token: string,
    account_id: string,
    sequence: string,
    subentry_count: number,
    thresholds: Horizon$AccountThresholds,
    flags: Horizon$Flags,
    balances: Horizon$BalanceLine[],
    signers: Horizon$AccountSigner[],
    data: {
      [key: string]: string
    }
  } & BaseResponse<
    | "transactions"
    | "operations"
    | "payments"
    | "effects"
    | "offers"
    | "trades"
    | "data"
  >;

  declare var Horizon$OperationResponseType: {|
    +createAccount: "create_account", // "create_account"
    +payment: "payment", // "payment"
    +pathPayment: "path_payment", // "path_payment"
    +createPassiveOffer: "create_passive_offer", // "create_passive_offer"
    +manageOffer: "manage_offer", // "manage_offer"
    +setOptions: "set_options", // "set_options"
    +changeTrust: "change_trust", // "change_trust"
    +allowTrust: "allow_trust", // "allow_trust"
    +accountMerge: "account_merge", // "account_merge"
    +inflation: "inflation", // "inflation"
    +manageData: "manage_data", // "manage_data"
    +bumpSequence: "bump_sequence" // "bump_sequence"
  |};

  declare var Horizon$OperationResponseTypeI: {|
    +createAccount: 0, // 0
    +payment: 1, // 1
    +pathPayment: 2, // 2
    +createPassiveOffer: 3, // 3
    +manageOffer: 4, // 4
    +setOptions: 5, // 5
    +changeTrust: 6, // 6
    +allowTrust: 7, // 7
    +accountMerge: 8, // 8
    +inflation: 9, // 9
    +manageData: 10, // 10
    +bumpSequence: 11 // 11
  |};

  declare type Horizon$BaseOperationResponse<
    T: Horizon$OperationResponseType = Horizon$OperationResponseType,
    TI: Horizon$OperationResponseTypeI = Horizon$OperationResponseTypeI
  > = {
    id: string,
    paging_token: string,
    source_account: string,
    type: T,
    type_i: TI,
    created_at: string,
    transaction_hash: string
  } & BaseResponse<"succeeds" | "precedes" | "effects" | "transaction">;

  declare type Horizon$CreateAccountOperationResponse = {
    account: string,
    funder: string,
    starting_balance: string
  } & BaseOperationResponse<
    OperationResponseType.createAccount,
    OperationResponseTypeI.createAccount
  >;

  declare type Horizon$PaymentOperationResponse = {
    from: string,
    to: string,
    asset_type: AssetType,
    asset_code?: string,
    asset_issuer?: string,
    amount: string
  } & BaseOperationResponse<
    OperationResponseType.payment,
    OperationResponseTypeI.payment
  >;

  declare type Horizon$PathPaymentOperationResponse = {
    from: string,
    to: string,
    asset_type: AssetType,
    asset_code?: string,
    asset_issuer?: string,
    amount: string,
    source_asset_type: AssetType,
    source_asset_code?: string,
    source_asset_issuer?: string,
    source_max: string,
    source_amount: string
  } & BaseOperationResponse<
    OperationResponseType.pathPayment,
    OperationResponseTypeI.pathPayment
  >;

  declare type Horizon$ManageOfferOperationResponse = {
    offer_id: number,
    amount: string,
    buying_asset_type: AssetType,
    buying_asset_code?: string,
    buying_asset_issuer?: string,
    price: string,
    price_r: Horizon$PriceR,
    selling_asset_type: AssetType,
    selling_asset_code?: string,
    selling_asset_issuer?: string
  } & BaseOperationResponse<
    OperationResponseType.manageOffer,
    OperationResponseTypeI.manageOffer
  >;

  declare type Horizon$PassiveOfferOperationResponse = {
    offer_id: number,
    amount: string,
    buying_asset_type: AssetType,
    buying_asset_code?: string,
    buying_asset_issuer?: string,
    price: string,
    price_r: Horizon$PriceR,
    selling_asset_type: AssetType,
    selling_asset_code?: string,
    selling_asset_issuer?: string
  } & BaseOperationResponse<
    OperationResponseType.createPassiveOffer,
    OperationResponseTypeI.createPassiveOffer
  >;

  declare type Horizon$SetOptionsOperationResponse = {
    signer_key?: string,
    signer_weight?: number,
    master_key_weight?: number,
    low_threshold?: number,
    med_threshold?: number,
    high_threshold?: number,
    home_domain?: string,
    set_flags: Array<1 | 2>,
    set_flags_s: Array<"auth_required_flag" | "auth_revocable_flag">,
    clear_flags: Array<1 | 2>,
    clear_flags_s: Array<"auth_required_flag" | "auth_revocable_flag">
  } & BaseOperationResponse<
    OperationResponseType.setOptions,
    OperationResponseTypeI.setOptions
  >;

  declare type Horizon$ChangeTrustOperationResponse = {
    asset_type: AssetType.credit4 | AssetType.credit12,
    asset_code: string,
    asset_issuer: string,
    trustee: string,
    trustor: string,
    limit: string
  } & BaseOperationResponse<
    OperationResponseType.changeTrust,
    OperationResponseTypeI.changeTrust
  >;

  declare type Horizon$AllowTrustOperationResponse = {
    asset_type: AssetType,
    asset_code: string,
    asset_issuer: string,
    authorize: boolean,
    trustee: string,
    trustor: string
  } & BaseOperationResponse<
    OperationResponseType.allowTrust,
    OperationResponseTypeI.allowTrust
  >;

  declare type Horizon$AccountMergeOperationResponse = {
    into: string
  } & BaseOperationResponse<
    OperationResponseType.accountMerge,
    OperationResponseTypeI.accountMerge
  >;

  declare type Horizon$InflationOperationResponse = {} & BaseOperationResponse<
    OperationResponseType.inflation,
    OperationResponseTypeI.inflation
  >;

  declare type Horizon$ManageDataOperationResponse = {
    name: string,
    value: Buffer
  } & BaseOperationResponse<
    OperationResponseType.manageData,
    OperationResponseTypeI.manageData
  >;

  declare type Horizon$BumpSequenceOperationResponse = {
    bump_to: string
  } & BaseOperationResponse<
    OperationResponseType.bumpSequence,
    OperationResponseTypeI.bumpSequence
  >;

  declare interface Horizon$ResponseCollection<
    T: Horizon$BaseResponse = Horizon$BaseResponse
  > {
    _links: {
      self: Horizon$ResponseLink,
      next: Horizon$ResponseLink,
      prev: Horizon$ResponseLink
    };
    _embedded: {
      records: T[]
    };
  }

  declare type Horizon$TransactionResponseCollection = {} & ResponseCollection<Horizon$TransactionResponse>;
}
