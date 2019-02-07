declare module "chartmogul-node" {
  import type {
    Map,
    Cursor,
    CursorParams,
    Strings,
    Entries,
    EntriesSummary
  } from "./common";

  declare export class Config {
    VERSION: string;
    API_BASE: string;
    retries: number;
    constructor(token: string, secret: string, base?: string): this;
    getAccountToken(): string;
    getSecretKey(): string;
  }

  declare var npm$namespace$Ping: {
    ping: typeof Ping$ping
  };
  declare function Ping$ping(config: Config): Promise<string>;

  declare var npm$namespace$DataSource: {
    create: typeof DataSource$create,
    retrieve: typeof DataSource$retrieve,
    destroy: typeof DataSource$destroy,
    all: typeof DataSource$all
  };
  declare interface DataSource$DataSource {
    uuid?: string;
    name: string;
    created_at?: string;
    status?: string;
    system?: string;
  }

  declare interface DataSource$DataSources {
    data_sources: DataSource$DataSource[];
  }

  declare interface DataSource$ListDataSourcesParams {
    name?: string;
    system?: string;
  }

  declare function DataSource$create(
    config: Config,
    data: DataSource$DataSource
  ): Promise<DataSource$DataSource>;

  declare function DataSource$retrieve(
    config: Config,
    uuid: string
  ): Promise<DataSource$DataSource>;

  declare function DataSource$destroy(
    config: Config,
    uuid: string
  ): Promise<{}>;

  declare function DataSource$all(
    config: Config,
    params?: DataSource$ListDataSourcesParams
  ): Promise<DataSource$DataSources>;

  declare var npm$namespace$Customer: {
    create: typeof Customer$create,
    retrieve: typeof Customer$retrieve,
    modify: typeof Customer$modify,
    destroy: typeof Customer$destroy,
    all: typeof Customer$all,
    search: typeof Customer$search,
    merge: typeof Customer$merge,
    attributes: typeof Customer$attributes
  };
  declare interface Customer$Customer {
    id?: number;
    data_source_uuid?: string;
    data_source_uuids?: Strings;
    uuid?: string;
    external_id?: string;
    external_ids?: Strings;
    name?: string;
    email?: string;
    status?: string;
    "NO PRINT IMPLEMENTED: ComputedPropertyName"?: string;
    Customer$attributes?: Customer$Attributes;
    address?: {
      address_zip?: string,
      city?: string,
      state?: string,
      country?: string
    };
    Metrics$mrr?: number;
    Metrics$arr?: number;
    "NO PRINT IMPLEMENTED: ComputedPropertyName"?: string;
    "NO PRINT IMPLEMENTED: ComputedPropertyName"?: string;
    "NO PRINT IMPLEMENTED: ComputedPropertyName"?: string;
    currency?: string;
    "NO PRINT IMPLEMENTED: ComputedPropertyName"?: string;
    company?: string;
    country?: string;
    state?: string;
    city?: string;
    zip?: string;
    lead_created_at?: string;
    free_trial_started_at?: string;
  }

  declare interface Customer$NewCustomer {
    data_source_uuid: string;
    external_id: string;
    name: string;
    email?: string;
    company?: string;
    country?: string;
    state?: string;
    city?: string;
    zip?: string;
    lead_created_at?: string;
    free_trial_started_at?: string;
    Customer$attributes?: Customer$NewAttributes;
  }

  declare interface Customer$UpdateCustomer {
    name?: string;
    email?: string;
    company?: string;
    country?: string;
    state?: string;
    city?: string;
    zip?: string;
    lead_created_at?: string;
    free_trial_started_at?: string;
    Customer$attributes?: Customer$NewAttributes;
  }

  declare interface Customer$NewAttributes {
    tags?: Strings;
    custom?: Customer$NewCustomAttributes[];
  }

  declare interface Customer$NewCustomAttributes {
    type?: string;
    key: string;
    value: any;
    source?: string;
  }

  declare interface Customer$Attributes {
    tags?: Strings;
    stripe?: Map;
    clearbit?: Map;
    custom?: Map;
  }

  declare type Customer$ListCustomersParams = {
    data_source_uuid?: string,
    status?: string,
    system?: string,
    external_id?: string
  } & CursorParams;

  declare type Customer$SearchCustomersParams = {
    email: string
  } & CursorParams;

  declare interface Customer$MergeID {
    customer_uuid?: string;
    external_id?: string;
  }

  declare interface Customer$MergeCustomersParams {
    from: Customer$MergeID;
    into: Customer$MergeID;
  }

  declare function Customer$create(
    config: Config,
    data: Customer$NewCustomer
  ): Promise<Customer$Customer>;

  declare function Customer$retrieve(
    config: Config,
    uuid: string
  ): Promise<Customer$Customer>;

  declare function Customer$modify(
    config: Config,
    uuid: string,
    data: Customer$UpdateCustomer
  ): Promise<Customer$Customer>;

  declare function Customer$destroy(config: Config, uuid: string): Promise<{}>;

  declare function Customer$all(
    config: Config,
    params?: Customer$ListCustomersParams
  ): Promise<Entries<Customer$Customer>>;

  declare function Customer$search(
    config: Config,
    params?: Customer$SearchCustomersParams
  ): Promise<Entries<Customer$Customer>>;

  declare function Customer$merge(
    config: Config,
    params?: Customer$MergeCustomersParams
  ): Promise<{}>;

  declare function Customer$attributes(
    config: Config,
    uuid: string
  ): Promise<Customer$Attributes>;

  declare var npm$namespace$Plan: {
    create: typeof Plan$create,
    retrieve: typeof Plan$retrieve,
    modify: typeof Plan$modify,
    destroy: typeof Plan$destroy,
    all: typeof Plan$all
  };
  declare interface Plan$Plan {
    uuid?: string;
    data_source_uuid?: string;
    external_id?: string;
    name?: string;
    interval_count?: number;
    interval_unit?: string;
  }

  declare type Plan$ListPlansParams = {
    data_source_uuid?: string,
    system?: string,
    external_id?: string
  } & CursorParams;

  declare type Plan$Plans = {
    plans: Plan$Plan[]
  } & Cursor;

  declare function Plan$create(
    config: Config,
    data: Plan$Plan
  ): Promise<Plan$Plan>;

  declare function Plan$retrieve(
    config: Config,
    uuid: string
  ): Promise<Plan$Plan>;

  declare function Plan$modify(
    config: Config,
    uuid: string,
    data: Plan$Plan
  ): Promise<Plan$Plan>;

  declare function Plan$destroy(config: Config, uuid: string): Promise<{}>;

  declare function Plan$all(
    config: Config,
    params?: Plan$ListPlansParams
  ): Promise<Plan$Plans>;

  declare var npm$namespace$Invoice: {
    create: typeof Invoice$create,
    retrieve: typeof Invoice$retrieve,
    destroy: typeof Invoice$destroy,
    all: typeof Invoice$all
  };
  declare interface Invoice$Invoice {
    uuid?: string;
    customer_uuid?: string;
    currency?: string;
    data_source_uuid?: string;
    date?: string;
    due_date?: string;
    external_id?: string;
    line_items?: Invoice$LineItem[];
    transactions?: Transaction$Transaction[];
  }

  declare interface Invoice$LineItem {
    uuid?: string;
    account_code?: string;
    amount_in_cents?: number;
    cancelled_at?: string;
    description?: string;
    discount_amount_in_cents?: number;
    discount_code?: string;
    external_id?: string;
    plan_uuid?: string;
    prorated?: boolean;
    quantity?: number;
    service_period_end?: string;
    service_period_start?: string;
    subscription_external_id?: string;
    subscription_uuid?: string;
    tax_amount_in_cents?: number;
    transaction_fees_in_cents?: number;
    type?: string;
  }

  declare interface Invoice$Transaction {
    uuid?: string;
    date?: string;
    external_id?: string;
    result?: string;
    type?: string;
    uuid?: string;
    date: string;
    external_id?: string;
    result: string;
    type: string;
  }

  declare type Invoice$ListInvoicesParams = {
    data_source_uuid?: string,
    customer_uuid?: string,
    external_id?: string
  } & CursorParams;

  declare type Invoice$Invoices = {
    customer_uuid?: string,
    invoices: Invoice$Invoice[]
  } & Cursor;

  declare function Invoice$create(
    config: Config,
    uuid: string,
    data: {
      invoices: Invoice$Invoice[]
    }
  ): Promise<Invoice$Invoice>;

  declare function Invoice$retrieve(
    config: Config,
    uuid: string
  ): Promise<Invoice$Invoice>;

  declare function Invoice$destroy(config: Config, uuid: string): Promise<{}>;

  declare function Invoice$all(
    config: Config,
    uuid: string,
    params?: Invoice$ListInvoicesParams
  ): Promise<Invoice$Invoices>;

  declare function Invoice$all(
    config: Config,
    params?: Invoice$ListInvoicesParams
  ): Promise<Invoice$Invoices>;

  declare var npm$namespace$Transaction: {
    create: typeof Transaction$create
  };
  declare interface Transaction$Transaction {
    uuid?: string;
    date?: string;
    external_id?: string;
    result?: string;
    type?: string;
    uuid?: string;
    date: string;
    external_id?: string;
    result: string;
    type: string;
  }

  declare function Transaction$create(
    config: Config,
    uuid: string,
    data: Transaction$Transaction
  ): Promise<Transaction$Transaction>;

  declare var npm$namespace$Subscription: {
    all: typeof Subscription$all,
    cancel: typeof Subscription$cancel
  };
  declare interface Subscription$Subscription {
    uuid: string;
    external_id: string;
    customer_uuid: string;
    plan_uuid: string;
    cancellation_dates: Strings;
    data_source_uuid: string;
  }

  declare interface Subscription$CancelSubscriptionParams {
    cancelled_at?: string;
    cancellation_dates?: Strings;
  }

  declare type Subscription$Subscriptions = {
    customer_uuid?: string,
    Customer$subscriptions: Subscription$Subscription[]
  } & Cursor;

  declare function Subscription$all(
    config: Config,
    uuid: string,
    data: CursorParams
  ): Promise<Subscription$Subscriptions>;

  declare function Subscription$cancel(
    config: Config,
    uuid: string,
    data: Subscription$CancelSubscriptionParams
  ): Promise<Subscription$Subscription>;

  declare var npm$namespace$Tag: {
    add: typeof Tag$add,
    remove: typeof Tag$remove
  };
  declare interface Tag$Tags {
    tags: Strings;
  }

  declare interface Tag$TagsWithEmail {
    email: string;
    tags: Strings;
  }

  declare function Tag$add(
    config: Config,
    uuid: string,
    data: Tag$TagsWithEmail
  ): Promise<Entries<Customer$Customer.Customer$Customer>>;

  declare function Tag$add(
    config: Config,
    uuid: string,
    data: Tag$Tags
  ): Promise<Tag$Tags>;

  declare function Tag$remove(
    config: Config,
    uuid: string,
    data: Tag$Tags
  ): Promise<Tag$Tags>;

  declare var npm$namespace$CustomAttribute: {
    add: typeof CustomAttribute$add,
    update: typeof CustomAttribute$update,
    remove: typeof CustomAttribute$remove
  };
  declare interface CustomAttribute$CustomAttributes {
    custom: Map;
  }

  declare function CustomAttribute$add(
    config: Config,
    uuid: string,
    data: {
      email: string,
      custom: Customer$NewCustomAttributes[]
    }
  ): Promise<Entries<Customer$Customer.Customer$Customer>>;

  declare function CustomAttribute$add(
    config: Config,
    uuid: string,
    data: {
      custom: Customer$NewCustomAttributes[]
    }
  ): Promise<CustomAttribute$CustomAttributes>;

  declare function CustomAttribute$update(
    config: Config,
    uuid: string,
    data: CustomAttribute$CustomAttributes
  ): Promise<CustomAttribute$CustomAttributes>;

  declare function CustomAttribute$remove(
    config: Config,
    uuid: string,
    data: {
      custom: Strings
    }
  ): Promise<CustomAttribute$CustomAttributes>;

  declare var npm$namespace$Metrics: {
    all: typeof Metrics$all,
    mrr: typeof Metrics$mrr,
    arr: typeof Metrics$arr,
    asp: typeof Metrics$asp,
    arpa: typeof Metrics$arpa,
    customerCount: typeof Metrics$customerCount,
    customerChurnRate: typeof Metrics$customerChurnRate,
    mrrChurnRate: typeof Metrics$mrrChurnRate,
    ltv: typeof Metrics$ltv
  };
  declare type Metrics$Params = {
    interval?: string
  } & Metrics$ParamsNoInterval;

  declare interface Metrics$ParamsNoInterval {
    "NO PRINT IMPLEMENTED: ComputedPropertyName": string;
    "NO PRINT IMPLEMENTED: ComputedPropertyName": string;
    geo?: string;
    plans?: string;
  }

  declare interface Metrics$All {
    entries: {
      date: string,
      "NO PRINT IMPLEMENTED: ComputedPropertyName": number,
      "NO PRINT IMPLEMENTED: ComputedPropertyName": number,
      Metrics$ltv: number,
      customers: number,
      Metrics$asp: number,
      Metrics$arpa: number,
      Metrics$arr: number,
      Metrics$mrr: number
    };
  }

  declare interface Metrics$MRR {
    date: string;
    Metrics$mrr: number;
    "NO PRINT IMPLEMENTED: ComputedPropertyName": number;
    "NO PRINT IMPLEMENTED: ComputedPropertyName": number;
    "NO PRINT IMPLEMENTED: ComputedPropertyName": number;
    "NO PRINT IMPLEMENTED: ComputedPropertyName": number;
    "NO PRINT IMPLEMENTED: ComputedPropertyName": number;
  }

  declare interface Metrics$ARR {
    date: string;
    Metrics$arr: number;
  }

  declare interface Metrics$ARPA {
    date: string;
    Metrics$arpa: number;
  }

  declare interface Metrics$ASP {
    date: string;
    Metrics$asp: number;
  }

  declare interface Metrics$CustomerCount {
    date: string;
    customers: number;
  }

  declare interface Metrics$CustomerChurnRate {
    date: string;
    "NO PRINT IMPLEMENTED: ComputedPropertyName": number;
  }

  declare interface Metrics$MRRChurnRate {
    date: string;
    "NO PRINT IMPLEMENTED: ComputedPropertyName": number;
  }

  declare interface Metrics$LTV {
    date: string;
    Metrics$ltv: number;
  }

  declare function Metrics$all(
    config: Config,
    params: Metrics$Params
  ): Promise<Metrics$All>;

  declare function Metrics$mrr(
    config: Config,
    params: Metrics$Params
  ): Promise<EntriesSummary<Metrics$MRR>>;

  declare function Metrics$arr(
    config: Config,
    params: Metrics$Params
  ): Promise<EntriesSummary<Metrics$ARR>>;

  declare function Metrics$asp(
    config: Config,
    params: Metrics$Params
  ): Promise<EntriesSummary<Metrics$ASP>>;

  declare function Metrics$arpa(
    config: Config,
    params: Metrics$Params
  ): Promise<EntriesSummary<Metrics$ARPA>>;

  declare function Metrics$customerCount(
    config: Config,
    params: Metrics$Params
  ): Promise<EntriesSummary<Metrics$CustomerCount>>;

  declare function Metrics$customerChurnRate(
    config: Config,
    params: Metrics$ParamsNoInterval
  ): Promise<EntriesSummary<Metrics$CustomerChurnRate>>;

  declare function Metrics$mrrChurnRate(
    config: Config,
    params: Metrics$ParamsNoInterval
  ): Promise<EntriesSummary<Metrics$MRRChurnRate>>;

  declare function Metrics$ltv(
    config: Config,
    params: Metrics$ParamsNoInterval
  ): Promise<EntriesSummary<Metrics$LTV>>;

  declare var npm$namespace$Customer: {
    subscriptions: typeof Customer$subscriptions,
    activities: typeof Customer$activities
  };
  declare interface Customer$MetricsSubscription {
    id: number;
    external_id: string;
    plan: string;
    quantity: number;
    Metrics$mrr: number;
    Metrics$arr: number;
    status: string;
    "NO PRINT IMPLEMENTED: ComputedPropertyName": string;
    "NO PRINT IMPLEMENTED: ComputedPropertyName": number;
    "NO PRINT IMPLEMENTED: ComputedPropertyName": string;
    "NO PRINT IMPLEMENTED: ComputedPropertyName": string;
    currency: string;
    "NO PRINT IMPLEMENTED: ComputedPropertyName": string;
  }

  declare interface Customer$MetricsActivity {
    id: number;
    date: string;
    "NO PRINT IMPLEMENTED: ComputedPropertyName": number;
    "NO PRINT IMPLEMENTED: ComputedPropertyName": number;
    "NO PRINT IMPLEMENTED: ComputedPropertyName": number;
    currency: string;
    "NO PRINT IMPLEMENTED: ComputedPropertyName": string;
    description: string;
    type: string;
  }

  declare function Customer$subscriptions(
    config: Config,
    uuid: string,
    params?: CursorParams
  ): Promise<Entries<Customer$MetricsSubscription>>;

  declare function Customer$activities(
    config: Config,
    uuid: string,
    params?: CursorParams
  ): Promise<Entries<Customer$MetricsActivity>>;

  declare export class ChartMogulError mixins Error {
    response: any;
    httpStatus: number;
  }
  declare export class ConfigurationError mixins ChartMogulError {}
  declare export class ForbiddenError mixins ChartMogulError {}
  declare export class NotFoundError mixins ChartMogulError {}
  declare export class ResourceInvalidError mixins ChartMogulError {}
  declare export class SchemaInvalidError mixins ChartMogulError {}
}
