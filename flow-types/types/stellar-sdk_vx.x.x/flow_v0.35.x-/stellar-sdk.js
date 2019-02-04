declare module 'stellar-sdk' {
        import type {
          AssetType,Asset,Memo,MemoType,Transaction
        } from 'stellar-base';

	declare export {
          Account,Asset,AssetType,AuthFlag,AuthImmutableFlag,AuthRequiredFlag,AuthRevocableFlag,FastSigning,Keypair,Memo,MemoType,MemoValue,MemoHash,MemoID,MemoNone,MemoReturn,MemoText,Network,Networks,Operation,OperationOptions,OperationType,StrKey,Signer,SignerOptions,Transaction,TransactionBuilder,hash,sign,verify,xdr
        }from 'stellar-base';

	declare export {
          
        }

	declare type Key = string | number | Symbol;
	declare type Diff<T: Key, U: Key> = $ElementType<($ObjMapi<{[k: T]: any}, <P>(P) => P> & $ObjMapi<{[k: U]: any}, <P>(P) => empty> & {
[x: string]: empty
}), T>;
	declare type Omit<T, K: $Keys<T>> = Pick<T, Diff<$Keys<T>, K>>;
	declare export class NetworkError mixins Error {
constructor(message: string, response: any): this;
getResponse(): any
}
	declare export class NotFoundError mixins NetworkError {}
	declare export class BadRequestError mixins NetworkError {}
	declare export class BadResponseError mixins NetworkError {}
	
      declare var npm$namespace$Config: {
        setAllowHttp: typeof Config$setAllowHttp,
isAllowHttp: typeof Config$isAllowHttp,
setDefault: typeof Config$setDefault,
        
      }
declare function Config$setAllowHttp(allow: boolean): void


declare function Config$isAllowHttp(): boolean


declare function Config$setDefault(): void

	declare export class Server  {
constructor(serverURL: string, options?: Server$FederationServer$Options): this;
accounts(): Server$Server$AccountCallBuilder;
assets(): Server$Server$AssetsCallBuilder;
effects(): Server$Server$EffectCallBuilder;
ledgers(): Server$Server$LedgerCallBuilder;
loadAccount(accountId: string): Promise<Server$Horizon$AccountResponse>;
offers(resource: string, ...parameters: string[]): Server$Server$OfferCallBuilder;
operations(): Server$Server$OperationCallBuilder;
orderbook(selling: Asset, buying: Asset): Server$Server$OrderbookCallBuilder;
paths(
source: string,
destination: string,
destinationAsset: Asset,
destinationAmount: string): Server$Server$PathCallBuilder;
payments(): Server$Server$PaymentCallBuilder;
submitTransaction(transaction: Transaction): Promise<Server$Server$TransactionRecord>;
tradeAggregation(
base: Asset,
counter: Asset,
startTime: Date,
endTime: Date,
resolution: Date): Server$Server$TradeAggregationCallBuilder;
trades(): Server$Server$TradesCallBuilder;
transactions(): Server$Server$TransactionCallBuilder;
serverURL: any
}
	declare class Server$CallBuilder<T: Horizon$Horizon$BaseResponse>  {
constructor(serverUrl: string): this;
call(): Promise<Server$CollectionPage<T>>;
cursor(cursor: string): this;
limit(limit: number | string): this;
order(direction: "asc" | "desc"): this;
stream(
options?: {
onmessage?: (record: T) => void,
onerror?: (error: Error) => void
}): () => void
}

declare interface Server$CollectionPage<T: Horizon$Horizon$BaseResponse> {
records: T[],
next: () => Promise<Server$CollectionPage<T>>,
prev: () => Promise<Server$CollectionPage<T>>
} 

declare interface Server$CollectionRecord<T: Horizon$Horizon$BaseResponse> {
_links: {
next: Horizon$Horizon$ResponseLink,
prev: Horizon$Horizon$ResponseLink,
self: Horizon$Horizon$ResponseLink
},
_embedded: {
records: T[]
}
} 

declare interface Server$CallFunctionTemplateOptions {
cursor?: string | number,
limit?: number,
order?: "asc" | "desc"
} 

declare type Server$CallFunction<T: Horizon$Horizon$BaseResponse> = () => Promise<T>;

declare type Server$CallCollectionFunction<T: Horizon$Horizon$BaseResponse> = (
options?: Server$CallFunctionTemplateOptions) => Promise<Server$CollectionRecord<T>>;

declare type Server$AccountRecord = {
id: string,
paging_token: string,
account_id: string,
sequence: number,
subentry_count: number,
thresholds: Horizon$Horizon$AccountThresholds,
flags: Horizon$Horizon$Flags,
balances: Horizon$Horizon$BalanceLine[],
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
} & Horizon$Horizon$BaseResponse


declare type Server$AssetRecord = {
asset_type: AssetType.credit4 | AssetType.credit12,
asset_code: string,
asset_issuer: string,
paging_token: string,
amount: string,
num_accounts: number,
flags: Horizon$Horizon$Flags
} & Horizon$Horizon$BaseResponse


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
} & Horizon$Horizon$BaseResponse


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
} & Horizon$Horizon$BaseResponse


declare type Server$OfferRecord = {
id: string,
paging_token: string,
seller_attr: string,
selling: Asset,
buying: Asset,
amount: string,
price_r: Horizon$Horizon$PriceR,
price: string,
seller?: Server$CallFunction<Server$AccountRecord>
} & Horizon$Horizon$BaseResponse


declare type Server$BaseOperationRecord<T: Horizon$OperationResponseType, TI: Horizon$OperationResponseTypeI> = {
self: Server$CallFunction<Server$OperationRecord>,
succeeds: Server$CallFunction<Server$OperationRecord>,
precedes: Server$CallFunction<Server$OperationRecord>,
effects: Server$CallCollectionFunction<Server$EffectRecord>,
transaction: Server$CallFunction<Server$TransactionRecord>
} & Horizon$Horizon$BaseOperationResponse<T, TI>


declare type Server$CreateAccountOperationRecord = {} & Server$BaseOperationRecord<Horizon$OperationResponseType.createAccount, Horizon$OperationResponseTypeI.createAccount> & Horizon$Horizon$CreateAccountOperationResponse


declare type Server$PaymentOperationRecord = {
sender: Server$CallFunction<Server$AccountRecord>,
receiver: Server$CallFunction<Server$AccountRecord>
} & Server$BaseOperationRecord<Horizon$OperationResponseType.payment, Horizon$OperationResponseTypeI.payment> & Horizon$Horizon$PaymentOperationResponse


declare type Server$PathPaymentOperationRecord = {} & Server$BaseOperationRecord<Horizon$OperationResponseType.pathPayment, Horizon$OperationResponseTypeI.pathPayment> & Horizon$Horizon$PathPaymentOperationResponse


declare type Server$ManageOfferOperationRecord = {} & Server$BaseOperationRecord<Horizon$OperationResponseType.manageOffer, Horizon$OperationResponseTypeI.manageOffer> & Horizon$Horizon$ManageOfferOperationResponse


declare type Server$PassiveOfferOperationRecord = {} & Server$BaseOperationRecord<Horizon$OperationResponseType.createPassiveOffer, Horizon$OperationResponseTypeI.createPassiveOffer> & Horizon$Horizon$PassiveOfferOperationResponse


declare type Server$SetOptionsOperationRecord = {} & Server$BaseOperationRecord<Horizon$OperationResponseType.setOptions, Horizon$OperationResponseTypeI.setOptions> & Horizon$Horizon$SetOptionsOperationResponse


declare type Server$ChangeTrustOperationRecord = {} & Server$BaseOperationRecord<Horizon$OperationResponseType.changeTrust, Horizon$OperationResponseTypeI.changeTrust> & Horizon$Horizon$ChangeTrustOperationResponse


declare type Server$AllowTrustOperationRecord = {} & Server$BaseOperationRecord<Horizon$OperationResponseType.allowTrust, Horizon$OperationResponseTypeI.allowTrust> & Horizon$Horizon$AllowTrustOperationResponse


declare type Server$AccountMergeOperationRecord = {} & Server$BaseOperationRecord<Horizon$OperationResponseType.accountMerge, Horizon$OperationResponseTypeI.accountMerge> & Horizon$Horizon$AccountMergeOperationResponse


declare type Server$InflationOperationRecord = {} & Server$BaseOperationRecord<Horizon$OperationResponseType.inflation, Horizon$OperationResponseTypeI.inflation> & Horizon$Horizon$InflationOperationResponse


declare type Server$ManageDataOperationRecord = {} & Server$BaseOperationRecord<Horizon$OperationResponseType.manageData, Horizon$OperationResponseTypeI.manageData> & Horizon$Horizon$ManageDataOperationResponse


declare type Server$BumpSequenceOperationRecord = {} & Server$BaseOperationRecord<Horizon$OperationResponseType.bumpSequence, Horizon$OperationResponseTypeI.bumpSequence> & Horizon$Horizon$BumpSequenceOperationResponse


declare type Server$OperationRecord = Server$CreateAccountOperationRecord
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
} & Horizon$Horizon$BaseResponse


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
} & Horizon$Horizon$BaseResponse


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
} & Horizon$Horizon$BaseResponse


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
} & Horizon$Horizon$BaseResponse


declare type Server$TransactionRecord = {
ledger_attr: $ElementType<Horizon$Horizon$TransactionResponse, "ledger">,
account: Server$CallFunction<Server$AccountRecord>,
effects: Server$CallCollectionFunction<Server$EffectRecord>,
ledger: Server$CallFunction<Server$LedgerRecord>,
operations: Server$CallCollectionFunction<Server$OperationRecord>,
precedes: Server$CallFunction<Server$TransactionRecord>,
self: Server$CallFunction<Server$TransactionRecord>,
succeeds: Server$CallFunction<Server$TransactionRecord>
} & Omit<Horizon$Horizon$TransactionResponse, "ledger">


declare class Server$AccountCallBuilder mixins Server$CallBuilder<Server$AccountRecord> {
accountId(id: string): this
}

declare class Server$AccountResponse mixins Server$AccountRecord {
_links: $ObjMapi<{[k: "self"]: any}, <key>(key) => Horizon$Horizon$ResponseLink>;
id: string;
paging_token: string;
account_id: string;
sequence: number;
subentry_count: number;
thresholds: Horizon$Horizon$AccountThresholds;
flags: Horizon$Horizon$Flags;
balances: Horizon$Horizon$BalanceLine[];
signers: Horizon$Horizon$AccountSigner[];
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
incrementSequenceNumber(): void
}

declare class Server$AssetsCallBuilder mixins Server$CallBuilder<Server$AssetRecord> {
forCode(value: string): this;
forIssuer(value: string): this
}

declare class Server$EffectCallBuilder mixins Server$CallBuilder<Server$EffectRecord> {
forAccount(accountId: string): this;
forLedger(sequence: string): this;
forOperation(operationId: number): this;
forTransaction(transactionId: string): this
}

declare class Server$LedgerCallBuilder mixins Server$CallBuilder<Server$LedgerRecord> {}

declare class Server$OfferCallBuilder mixins Server$CallBuilder<Server$OfferRecord> {}

declare class Server$OperationCallBuilder mixins Server$CallBuilder<Server$OperationRecord> {
forAccount(accountId: string): this;
forLedger(sequence: string): this;
forTransaction(transactionId: string): this
}

declare class Server$OrderbookCallBuilder mixins Server$CallBuilder<Server$OrderbookRecord> {}

declare class Server$PathCallBuilder mixins Server$CallBuilder<Server$PaymentPathRecord> {}

declare class Server$PaymentCallBuilder mixins Server$CallBuilder<Server$PaymentOperationRecord> {
forAccount(accountId: string): this;
forLedger(sequence: string): this;
forTransaction(transactionId: string): this
}

declare interface Server$Options {
allowHttp: boolean,
allowHttp: boolean
} 

declare class Server$TradeAggregationCallBuilder mixins Server$CallBuilder<Server$TradeAggregationRecord> {}

declare class Server$TradesCallBuilder mixins Server$CallBuilder<Server$TradeRecord> {
forAssetPair(base: Asset, counter: Asset): this;
forOffer(offerId: string): this
}

declare class Server$TransactionCallBuilder mixins Server$CallBuilder<Server$TransactionRecord> {
transaction(transactionId: string): this;
forAccount(accountId: string): this;
forLedger(sequence: string | number): this
}
	declare export class FederationServer  {
static createForDomain(
domain: string,
options?: FederationServer$Server$Options): Promise<FederationServer>;
static resolve(
value: string,
options?: FederationServer$Server$Options): Promise<FederationServer$FederationServer$Record>;
constructor(serverURL: string, domain: string, options?: FederationServer$Server$Options): this;
resolveAccountId(account: string): Promise<FederationServer$FederationServer$Record>;
resolveAddress(address: string): Promise<FederationServer$FederationServer$Record>;
resolveTransactionId(transactionId: string): Promise<FederationServer$FederationServer$Record>
}
	declare interface FederationServer$Record {
account_id: string,
memo_type?: string,
memo?: string
} 

declare interface FederationServer$Options {
allowHttp: boolean,
allowHttp: boolean
} 
	
      declare var npm$namespace$StellarTomlResolver: {
        resolve: typeof StellarTomlResolver$resolve,
        
      }
declare interface StellarTomlResolver$StellarTomlResolveOptions {
allowHttp?: boolean,
timeout?: number
} 

declare function StellarTomlResolver$resolve(
domain: string,
options?: StellarTomlResolver$StellarTomlResolveOptions): Promise<{
[key: string]: any
}>

	declare interface Horizon$ResponseLink {
href: string,
templated?: boolean
} 

declare interface Horizon$BaseResponse<T: string> {
_links: $ObjMapi<{[k: T | "self"]: any}, <key>(key) => Horizon$ResponseLink>
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
} & Horizon$BaseResponse<"account"
| "ledger"
| "operations"
| "effects"
| "succeeds"
| "precedes">


declare interface Horizon$BalanceLineNative {
balance: string,
asset_type: AssetType.native
} 

declare interface Horizon$BalanceLineAsset<T: AssetType.credit4 | AssetType.credit12> {
balance: string,
limit: string,
asset_type: T,
asset_code: string,
asset_issuer: string
} 

declare type Horizon$BalanceLine<T: AssetType> = "There was Conditional Type, use $Call utility type";

declare interface Horizon$PriceR {
numerator: number,
denominator: number
} 

declare interface Horizon$AccountThresholds {
low_threshold: number,
med_threshold: number,
high_threshold: number
} 

declare interface Horizon$Flags {
auth_required: boolean,
auth_revocable: boolean
} 

declare interface Horizon$AccountSigner {
public_key: string,
weight: number
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
} & Horizon$BaseResponse<"transactions"
| "operations"
| "payments"
| "effects"
| "offers"
| "trades"
| "data">


declare  class Horizon$OperationResponseType {
  constructor(...args: empty): mixed;
static +createAccount: Class<Horizon$OperationResponseType__createAccount> & Horizon$OperationResponseType__createAccount & "create_account";// "create_account"
static +payment: Class<Horizon$OperationResponseType__payment> & Horizon$OperationResponseType__payment & "payment";// "payment"
static +pathPayment: Class<Horizon$OperationResponseType__pathPayment> & Horizon$OperationResponseType__pathPayment & "path_payment";// "path_payment"
static +createPassiveOffer: Class<Horizon$OperationResponseType__createPassiveOffer> & Horizon$OperationResponseType__createPassiveOffer & "create_passive_offer";// "create_passive_offer"
static +manageOffer: Class<Horizon$OperationResponseType__manageOffer> & Horizon$OperationResponseType__manageOffer & "manage_offer";// "manage_offer"
static +setOptions: Class<Horizon$OperationResponseType__setOptions> & Horizon$OperationResponseType__setOptions & "set_options";// "set_options"
static +changeTrust: Class<Horizon$OperationResponseType__changeTrust> & Horizon$OperationResponseType__changeTrust & "change_trust";// "change_trust"
static +allowTrust: Class<Horizon$OperationResponseType__allowTrust> & Horizon$OperationResponseType__allowTrust & "allow_trust";// "allow_trust"
static +accountMerge: Class<Horizon$OperationResponseType__accountMerge> & Horizon$OperationResponseType__accountMerge & "account_merge";// "account_merge"
static +inflation: Class<Horizon$OperationResponseType__inflation> & Horizon$OperationResponseType__inflation & "inflation";// "inflation"
static +manageData: Class<Horizon$OperationResponseType__manageData> & Horizon$OperationResponseType__manageData & "manage_data";// "manage_data"
static +bumpSequence: Class<Horizon$OperationResponseType__bumpSequence> & Horizon$OperationResponseType__bumpSequence & "bump_sequence";// "bump_sequence"

}

declare class Horizon$OperationResponseType__createAccount mixins Horizon$OperationResponseType {}
declare class Horizon$OperationResponseType__payment mixins Horizon$OperationResponseType {}
declare class Horizon$OperationResponseType__pathPayment mixins Horizon$OperationResponseType {}
declare class Horizon$OperationResponseType__createPassiveOffer mixins Horizon$OperationResponseType {}
declare class Horizon$OperationResponseType__manageOffer mixins Horizon$OperationResponseType {}
declare class Horizon$OperationResponseType__setOptions mixins Horizon$OperationResponseType {}
declare class Horizon$OperationResponseType__changeTrust mixins Horizon$OperationResponseType {}
declare class Horizon$OperationResponseType__allowTrust mixins Horizon$OperationResponseType {}
declare class Horizon$OperationResponseType__accountMerge mixins Horizon$OperationResponseType {}
declare class Horizon$OperationResponseType__inflation mixins Horizon$OperationResponseType {}
declare class Horizon$OperationResponseType__manageData mixins Horizon$OperationResponseType {}
declare class Horizon$OperationResponseType__bumpSequence mixins Horizon$OperationResponseType {}


declare  class Horizon$OperationResponseTypeI {
  constructor(...args: empty): mixed;
static +createAccount: Class<Horizon$OperationResponseTypeI__createAccount> & Horizon$OperationResponseTypeI__createAccount & 0;// 0
static +payment: Class<Horizon$OperationResponseTypeI__payment> & Horizon$OperationResponseTypeI__payment & 1;// 1
static +pathPayment: Class<Horizon$OperationResponseTypeI__pathPayment> & Horizon$OperationResponseTypeI__pathPayment & 2;// 2
static +createPassiveOffer: Class<Horizon$OperationResponseTypeI__createPassiveOffer> & Horizon$OperationResponseTypeI__createPassiveOffer & 3;// 3
static +manageOffer: Class<Horizon$OperationResponseTypeI__manageOffer> & Horizon$OperationResponseTypeI__manageOffer & 4;// 4
static +setOptions: Class<Horizon$OperationResponseTypeI__setOptions> & Horizon$OperationResponseTypeI__setOptions & 5;// 5
static +changeTrust: Class<Horizon$OperationResponseTypeI__changeTrust> & Horizon$OperationResponseTypeI__changeTrust & 6;// 6
static +allowTrust: Class<Horizon$OperationResponseTypeI__allowTrust> & Horizon$OperationResponseTypeI__allowTrust & 7;// 7
static +accountMerge: Class<Horizon$OperationResponseTypeI__accountMerge> & Horizon$OperationResponseTypeI__accountMerge & 8;// 8
static +inflation: Class<Horizon$OperationResponseTypeI__inflation> & Horizon$OperationResponseTypeI__inflation & 9;// 9
static +manageData: Class<Horizon$OperationResponseTypeI__manageData> & Horizon$OperationResponseTypeI__manageData & 10;// 10
static +bumpSequence: Class<Horizon$OperationResponseTypeI__bumpSequence> & Horizon$OperationResponseTypeI__bumpSequence & 11;// 11

}

declare class Horizon$OperationResponseTypeI__createAccount mixins Horizon$OperationResponseTypeI {}
declare class Horizon$OperationResponseTypeI__payment mixins Horizon$OperationResponseTypeI {}
declare class Horizon$OperationResponseTypeI__pathPayment mixins Horizon$OperationResponseTypeI {}
declare class Horizon$OperationResponseTypeI__createPassiveOffer mixins Horizon$OperationResponseTypeI {}
declare class Horizon$OperationResponseTypeI__manageOffer mixins Horizon$OperationResponseTypeI {}
declare class Horizon$OperationResponseTypeI__setOptions mixins Horizon$OperationResponseTypeI {}
declare class Horizon$OperationResponseTypeI__changeTrust mixins Horizon$OperationResponseTypeI {}
declare class Horizon$OperationResponseTypeI__allowTrust mixins Horizon$OperationResponseTypeI {}
declare class Horizon$OperationResponseTypeI__accountMerge mixins Horizon$OperationResponseTypeI {}
declare class Horizon$OperationResponseTypeI__inflation mixins Horizon$OperationResponseTypeI {}
declare class Horizon$OperationResponseTypeI__manageData mixins Horizon$OperationResponseTypeI {}
declare class Horizon$OperationResponseTypeI__bumpSequence mixins Horizon$OperationResponseTypeI {}


declare type Horizon$BaseOperationResponse<T: Horizon$OperationResponseType, TI: Horizon$OperationResponseTypeI> = {
id: string,
paging_token: string,
source_account: string,
type: T,
type_i: TI,
created_at: string,
transaction_hash: string
} & Horizon$BaseResponse<"succeeds" | "precedes" | "effects" | "transaction">


declare type Horizon$CreateAccountOperationResponse = {
account: string,
funder: string,
starting_balance: string
} & Horizon$BaseOperationResponse<Horizon$OperationResponseType.createAccount, Horizon$OperationResponseTypeI.createAccount>


declare type Horizon$PaymentOperationResponse = {
from: string,
to: string,
asset_type: AssetType,
asset_code?: string,
asset_issuer?: string,
amount: string
} & Horizon$BaseOperationResponse<Horizon$OperationResponseType.payment, Horizon$OperationResponseTypeI.payment>


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
} & Horizon$BaseOperationResponse<Horizon$OperationResponseType.pathPayment, Horizon$OperationResponseTypeI.pathPayment>


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
} & Horizon$BaseOperationResponse<Horizon$OperationResponseType.manageOffer, Horizon$OperationResponseTypeI.manageOffer>


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
} & Horizon$BaseOperationResponse<Horizon$OperationResponseType.createPassiveOffer, Horizon$OperationResponseTypeI.createPassiveOffer>


declare type Horizon$SetOptionsOperationResponse = {
signer_key?: string,
signer_weight?: number,
master_key_weight?: number,
low_threshold?: number,
med_threshold?: number,
high_threshold?: number,
home_domain?: string,
set_flags: Array<(1 | 2)>,
set_flags_s: Array<("auth_required_flag" | "auth_revocable_flag")>,
clear_flags: Array<(1 | 2)>,
clear_flags_s: Array<("auth_required_flag" | "auth_revocable_flag")>
} & Horizon$BaseOperationResponse<Horizon$OperationResponseType.setOptions, Horizon$OperationResponseTypeI.setOptions>


declare type Horizon$ChangeTrustOperationResponse = {
asset_type: AssetType.credit4 | AssetType.credit12,
asset_code: string,
asset_issuer: string,
trustee: string,
trustor: string,
limit: string
} & Horizon$BaseOperationResponse<Horizon$OperationResponseType.changeTrust, Horizon$OperationResponseTypeI.changeTrust>


declare type Horizon$AllowTrustOperationResponse = {
asset_type: AssetType,
asset_code: string,
asset_issuer: string,
authorize: boolean,
trustee: string,
trustor: string
} & Horizon$BaseOperationResponse<Horizon$OperationResponseType.allowTrust, Horizon$OperationResponseTypeI.allowTrust>


declare type Horizon$AccountMergeOperationResponse = {
into: string
} & Horizon$BaseOperationResponse<Horizon$OperationResponseType.accountMerge, Horizon$OperationResponseTypeI.accountMerge>


declare type Horizon$InflationOperationResponse = {} & Horizon$BaseOperationResponse<Horizon$OperationResponseType.inflation, Horizon$OperationResponseTypeI.inflation>


declare type Horizon$ManageDataOperationResponse = {
name: string,
value: Buffer
} & Horizon$BaseOperationResponse<Horizon$OperationResponseType.manageData, Horizon$OperationResponseTypeI.manageData>


declare type Horizon$BumpSequenceOperationResponse = {
bump_to: string
} & Horizon$BaseOperationResponse<Horizon$OperationResponseType.bumpSequence, Horizon$OperationResponseTypeI.bumpSequence>


declare interface Horizon$ResponseCollection<T: Horizon$BaseResponse> {
_links: {
self: Horizon$ResponseLink,
next: Horizon$ResponseLink,
prev: Horizon$ResponseLink
},
_embedded: {
records: T[]
}
} 

declare type Horizon$TransactionResponseCollection = {} & Horizon$ResponseCollection<Horizon$TransactionResponse>

    }
