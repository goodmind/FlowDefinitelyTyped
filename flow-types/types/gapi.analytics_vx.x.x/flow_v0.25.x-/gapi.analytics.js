declare module "gapi.analytics" {
  declare var npm$namespace$gapi: {
    client: typeof npm$namespace$gapi$client
  };

  declare var npm$namespace$gapi$client: {
    analytics: typeof npm$namespace$gapi$client$analytics
  };

  declare var npm$namespace$gapi$client$analytics: {
    metadata: typeof npm$namespace$gapi$client$analytics$metadata
  };

  declare var npm$namespace$gapi$client$analytics$metadata: {
    column: typeof npm$namespace$gapi$client$analytics$metadata$column
  };

  declare var npm$namespace$gapi$client$analytics$metadata$column: {
    list: typeof gapi$client$analytics$metadata$column$list
  };
  declare export function gapi$client$analytics$metadata$column$list(): Promise<any>;

  declare interface DataQuery {
    ids?: string;
    "start-date"?: string;
    "30daysAgo"?: string;
    "end-date"?: string;
    yesterday?: string;
    metrics?: string;
    dimensions?: string;
    sort?: string;
    filters?: string;
    segment?: string;
    samplingLevel?: string;
    "include-empty-rows"?: string;
    "start-index"?: string;
    "max-results"?: string;
  }
  declare interface View {
    accountId?: string;
    webPropertyId?: string;
    webViewId?: string;
  }
}
