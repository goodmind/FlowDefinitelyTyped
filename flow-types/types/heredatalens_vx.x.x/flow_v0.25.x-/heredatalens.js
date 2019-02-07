declare module "heredatalens" {
  /**
   * HERE Maps API and Data Lens JavaScript API can be used to visualize data from different network sources.
   * For each network source type, a service class is required. The service also stores API connection credentials.
   * The service instance must be configured with a service.Platform instance.
   */
  declare class datalens$Service mixins service.IConfigurable {
    /**
     * Constructor
     * @param options - Overrides the configuration from the service.Platform instance
     */
    constructor(options?: datalens$Service.SpatialTileProvider$Options): this;

    /**
     * This method makes an HTTP request to the Data Lens REST API.
     * It makes any CRUD request (GET, PUT, POST, DELETE).
     * This method can be used when implementing a custom provider or implementing data management.
     * Otherwise existing providers are used to get data from the Data Lens REST API.
     * @param method - Any HTTP method (GET, PUT, POST, etc.)
     * @param endpoint - The REST API endpoint
     * @param params - URL parameters
     * @param body - The payload of the request
     * @param onResult - Callback called on a successful request with response data
     * @param onError - Callback called on an unsuccessful request with the Error object
     * @returns - Response Promise
     */
    request(
      method: string,
      endpoint: string,
      params?: any,
      body?: any,
      onResult?: (result: any) => void,
      onError?: (error: any) => void
    ): Promise<any>;

    /**
     * This method fetches query data for a given query ID.
     * This method can be used when implementing a custom provider.
     * Otherwise existing providers are used to get data from the Data Lens REST API.
     * @param queryId - The ID of the Data Lens REST API query
     * @param params - Query dynamic parameters
     * @param onResult - Callback called on a successful request with response data
     * @param onError - Callback called on an unsuccessful request with the Error object
     * @returns - Response Promise
     */
    fetchQueryData(
      queryId: string,
      params?: any,
      onResult?: (result: any) => void,
      onError?: (error: any) => void
    ): Promise<any>;

    /**
     * This method fetches statistical data for the Data Lens query (eg minimum and maximum values for the query metric).
     * It can be used to define visualization boundaries, scales and legends.
     * @param queryId - The ID of the Data Lens REST API query
     * @param statsQuery - A JSON object which defines a statistics query for the Data Lens query
     * @param onResult - Callback called on a successful request with response data
     * @param onError - Callback called on an unsuccessful request with the Error object
     * @returns - Response Promise
     */
    fetchQueryStats(
      queryId: string,
      statsQuery: any,
      onResult?: (result: any) => void,
      onError?: (error: any) => void
    ): Promise<any>;

    /**
     * This method fetches a layer of geometries (eg buildings or administrative boundaries).
     * @param layerName - The name of the layer
     * @param params - URL parameters (eg bounding box)
     * @param onResult - Callback called on a successful request with response data
     * @param onError - Callback called on an unsuccessful request with the Error object
     * @returns - Response Promise
     */
    fetchLayer(
      layerName: string,
      params?: any,
      onResult?: (result: any) => void,
      onError?: (error: any) => void
    ): Promise<any>;

    /**
     * This method fetches vector tile data from the layer.
     * @param x - Tile columns
     * @param y - Tile row
     * @param z - zoom level
     * @param params - URL parameters (eg bounding box)
     * @param onResult - Callback called on a successful request with response data
     * @param onError - Callback called on an unsuccessful request with the Error object
     * @returns - Typed array with tile data
     */
    fetchLayerTile(
      layerName: string,
      x: datalens$QueryTileProvider.HeatmapLayer$X,
      y: datalens$QueryTileProvider.HeatmapLayer$Y,
      z: datalens$QueryTileProvider.QueryTileProvider$Zoom,
      params?: any,
      onResult?: (result: any) => void,
      onError?: (error: any) => void
    ): Promise<Uint8Array>;

    /**
 * Sets the access and refresh tokens used to authenticate all requests against the Data Lens REST API.
 * Use this method to implement custom authentication to the Data Lens REST API.
 * @param accessToken - The token used to authenticate all requests
 * @param refreshToken - The token used to fetch a new access token after the previous access token has expired.
When refreshToken is provided, Service will automatically update the expired accessToken.
 */
    setTokens(accessToken: string, refreshToken: string): void;

    /**
     * This method implements service.IConfigurable interface. It is called by the service.Platform instance.
     * @param appId - The appId
     * @param appCode - The appCode
     * @param useHTTPS - A flag to use HTTPS or not
     * @param useCIT - A flag to use the staging server (CIT) or not
     * @param baseUrl - The base URL for all requests to the Data Lens REST API
     */
    configure(
      appId: string,
      appCode: string,
      useHTTPS: boolean,
      useCIT: boolean,
      baseUrl?: service.Url
    ): datalens$Service;
  }

  /**
   * Overrides the Service configuration
   * Normally the Service instance is configured with the service.Platform instance.
   * This configuration can be overridden by specifying these options.
   * It can be useful when the Data Lens environment is different from the HERE Platform environment.
   */
  declare interface Service$Options {
    /**
     * Subdomain of the Data Lens REST API URL
     */
    subDomain?: string;

    /**
     * Pathname prefix of the Data Lens REST API endpoints
     */
    version?: string;

    /**
     * The token used to authenticate all requests
     */
    access_token?: string;

    /**
     * The token used to fetch a new access token after the previous access token has expired.
     * When refresh_token is provided, Service will automatically update the expired access_token.
     */
    refresh_token?: string;

    /**
     * To increase the number of simultaneous requests to the Data Lens REST API, domain sharding is used.
     * This option can be used when the Data Lens environment does not support domain sharding.
     */
    domainSharding?: string[];

    /**
     * Defines an alternative host for the Data Lens REST API URL
     */
    baseUrl?: string;

    /**
     * The ID of the Data Lens REST API query
     */
    queryId: string;

    /**
     * The query's dynamic parameters. The dynamic parameters can be used to filter data provided by the query.
     */
    queryParams?: any;

    /**
     * Names of the URI parameters that control the x/y/z of a tiled query
     */
    tileParamNames: QueryTileProvider$TileParamNames;

    /**
     * The ID for the Data Lens REST API query
     */
    queryId: string;

    /**
     * The query's dynamic parameters. The dynamic parameters can be used to filter data provided by the query.
     */
    queryParams?: string;

    /**
     * Defines how the input tile data is split by rows. You can specify this callback to define client-side aggregation and filtering. This callback is called for each tile.
     */
    dataToRows?: (
      data: datalens$Service.Service$Data,
      x: datalens$QueryTileProvider.HeatmapLayer$X,
      y: datalens$QueryTileProvider.HeatmapLayer$Y,
      zoom: datalens$QueryTileProvider.QueryTileProvider$Zoom
    ) => SpatialLayer$Row[];

    /**
     * Defines how the row is translated to the RasterLayer.TilePoint. This callback is called for each row that is returned from dataToRows.
     */
    rowToTilePoint?: (
      row: SpatialLayer$Row,
      x: HeatmapLayer$X,
      y: HeatmapLayer$Y
    ) => HeatmapLayer$TilePoint;

    /**
     * The buffer is a value (in pixels) that defines an extra area around each tile to capture data points from.
     * This is done to avoid drawing edges between tiles. For example, if data points represented with circles with a maximum radius of 10 pixels, then the buffer must be 10 pixels.
     */
    buffer?: (
      zoom: datalens$QueryTileProvider.QueryTileProvider$Zoom
    ) => number;

    /**
     * Defines how tile data is represented on a canvas. Input points for each tile are collected with respect to the buffer.
     * For progressive rendering this callback may be called more than once for the tile.
     */
    renderTile?: (
      points: HeatmapLayer$TilePoint[],
      canvas: HTMLCanvasElement,
      zoom: datalens$QueryTileProvider.QueryTileProvider$Zoom
    ) => void;

    /**
     * Defines how the input tile data is split by rows. You can specify this callback to define client-side aggregation and filtering. This callback is called for each tile.
     */
    dataToRows?: (
      data: datalens$Service.Service$Data,
      x: datalens$QueryTileProvider.HeatmapLayer$X,
      y: datalens$QueryTileProvider.HeatmapLayer$Y,
      zoom: datalens$QueryTileProvider.QueryTileProvider$Zoom
    ) => SpatialLayer$Row[];

    /**
     * Defines how the row is translated to the HeatmapLayer.TilePoint. This callback is called for each row that is returned from dataToRows.
     */
    rowToTilePoint(
      row: SpatialLayer$Row,
      x: HeatmapLayer$X,
      y: HeatmapLayer$Y
    ): HeatmapLayer$TilePoint;

    /**
     * Describes the bandwidth behavior in relation to current zoom level A numeric value sets it static across all levels
     * An Object with zoom, value and optional zoomIncrementFactor (1 equals doubling on every zoom increment) defines a behavior across all zoom levels
     * An Array of one or more zoom, value objects describes the behavior between the two defined levels and extrapolates the implied change outside of the defined range
     * Alternatively defines the level of smoothing as a function of the zoom level. The callback must return a value in pixels.
     * The cut-off of the Gaussian kernel is defined as 3 * bandwidth , a multiple (default 3) of bandwidth.
     */
    bandwidth?:
      | HeatmapLayer$Bandwidth
      | HeatmapLayer$BandwidthStop
      | HeatmapLayer$BandwidthStop[]
      | HeatmapLayer$BandwidthCallback;

    /**
     * Defines the range for the color scale as a function of the zoom level.
     * The returned value must be an array of 2 numbers.
     */
    valueRange?: (
      zoom: datalens$QueryTileProvider.QueryTileProvider$Zoom
    ) => number[];

    /**
     * Defines the range for the density alpha mask as a function of the zoom level.
     * When defined, the density alpha mask is applied. The returned value must be an array of 2 numbers.
     */
    countRange?: (
      zoom: datalens$QueryTileProvider.QueryTileProvider$Zoom
    ) => number[];

    /**
     * Defines a color palette as a function of the normalized value.
     * You can use D3.js library scale functions with the domain [0, 1].
     */
    colorScale?: (scale: number) => string;

    /**
     * Defines the alpha mask value as a function of the normalized count.
     * You can use D3.js library scale functions with the domain [0, 1] and the range [0, 1].
     */
    alphaScale?: (scale: number) => number;

    /**
     * Specifies which type of aggregation was applied (eg. type of aggregation function for bucket in the Data Lens query).
     * Possible values are SUM or AVERAGE. If the aggregation type is AVERAGE , then an averaged heat map is rendered.
     */
    aggregation?: HeatmapLayer$Aggregation;

    /**
     * Defines the scale (eg logarithmic scale) of the TilePoint value.
     * Note: if the value is not in a linear scale, then the aggregation in the source query must be defined with respect to the scale type.
     * For example, before applying the average aggregation function in a query, the value must be transformed to the linear scale. This guarantees correct linear averaging of values.
     */
    inputScale?: HeatmapLayer$InputScale;

    /**
     * Defines how the input data is split by rows. You can specify this callback to define client-side aggregation and filtering.
     */
    dataToRows?: (data: datalens$Service.Service$Data) => SpatialLayer$Row[];

    /**
     * Defines how each row is presented on the map (eg marker, polygon)
     */
    rowToMapObject(
      row: SpatialLayer$Row,
      z: datalens$QueryTileProvider.QueryTileProvider$Zoom
    ): map.Object;

    /**
     * Defines map object style and icon according to data row and zoom level.
     * Also it can define different styles depending on the StyleState (eg hovered, selected).
     */
    rowToStyle?: (
      row: SpatialLayer$Row,
      z: datalens$QueryTileProvider.QueryTileProvider$Zoom,
      styleState: SpatialLayer$StyleState
    ) => ObjectLayer$ObjectStyleOptions;

    /**
     * Defines quantization of data for improving data-driven styling performance
     */
    dataDomains?: ObjectLayer$DataDomains;

    /**
     * When present, client-side clustering is applied
     */
    clustering?: ObjectLayer$Clustering;

    /**
     * The data url to fetch
     */
    dataUrl?: string;

    /**
     * Defines how the input data is mapped to an array of GeoJSON features
     */
    dataToFeatures?: (obj: any) => SpatialLayer$Feature[];

    /**
     * Defines how GeoJSON features on a tile should be mapped to data rows, which are inputs to layers such as ObjectLayer and HeatmapLayer
     */
    featuresToRows?: (
      features: SpatialLayer$Feature[],
      x: datalens$QueryTileProvider.HeatmapLayer$X,
      y: datalens$QueryTileProvider.HeatmapLayer$Y,
      z: datalens$QueryTileProvider.QueryTileProvider$Zoom,
      tileSize: RawDataProvider$TileSize,
      helpers: RawDataProvider$Helpers
    ) => datalens$ObjectLayer.SpatialLayer$Row[];

    /**
     * Defines how the input tile data is split by rows. You can specify this callback to define client-side aggregation and filtering. This callback is called for each tile.
     */
    dataToRows?: (
      data: datalens$Service.Service$Data,
      x: datalens$QueryTileProvider.HeatmapLayer$X,
      y: datalens$QueryTileProvider.HeatmapLayer$Y,
      z: datalens$QueryTileProvider.QueryTileProvider$Zoom
    ) => SpatialLayer$Row[];

    /**
     * Defines how to get the spatial ID from a data row. This callback is called for each row that is returned from dataToRows.
     */
    rowToSpatialId(row: SpatialLayer$Row): string;

    /**
     * Defines how to get the spatial ID from a geometry feature. This callback is called for each geometry feature in the vector tile.
     */
    featureToSpatialId(feature: SpatialLayer$Feature): string;

    /**
     * Defines how the row is translated to map object style. This callback is called for each row that is returned from dataToRows.
     */
    rowToStyle(
      row: SpatialLayer$Row,
      z: datalens$QueryTileProvider.QueryTileProvider$Zoom,
      styleState: SpatialLayer$StyleState
    ): any;

    /**
     * Defines the default map object style.
     */
    defaultStyle(
      z: datalens$QueryTileProvider.QueryTileProvider$Zoom,
      styleState: SpatialLayer$StyleState
    ): any;

    /**
     * Defines how to transform the features.
     */
    SpatialLayer$transformFeature: SpatialLayer$transformFeature;

    /**
     * The name of the layer to fetch with the Data Lens REST API query
     */
    layerName: string;

    /**
     * The query's dynamic parameters. The dynamic parameters can be used to filter data provided by the query.
     */
    queryParams?: any;
  }

  /**
   * The format of Data Lens query data.
   * The Data Lens query data has a table-like structure with named columns and rows.
   */
  declare interface Service$Data {
    /**
     * Column names
     */
    columns: string[];

    /**
     * Rows of data
     */
    rows: any[][];
  }

  /**
   * Providers define interfaces for layers to access data.
   * The input data can be stored locally or loaded from the network. Data can be loaded by tiles or in one chunk.
   * This provider allows you to supply data stored locally or fetched using external tools.
   */
  declare class datalens$Provider mixins undefined.datalens$Provider {
    /**
     * Constructor
     * @param data - JSON object
     * @param options - Configures data accessibility parameters
     */
    constructor(
      data?: datalens$Service.Service$Data,
      options?: map.provider.datalens$Provider.Service$Options
    ): this;

    /**
     * Updates the provider data. When data is updated, the update event is triggered so that the consuming layers are redrawn.
     * @param data - JSON object
     */
    setData(data: datalens$Service.Service$Data): void;

    /**
     * Retrieves the provider data.
     * @returns - JSON object
     */
    getData(): datalens$Service.Service$Data;
  }

  /**
   * Defines the source of the data for layers from a Data Lens query.
   * Providers define interfaces for layers to access data.  The input data can be stored locally or loaded from the network.
   * Data can be loaded by tiles or in one chunk. This provider loads query data with the Data Lens REST API.
   * Note that this provider must be used only for non-tiled queries.
   */
  declare class datalens$QueryProvider mixins datalens$Provider {
    /**
     * Constructor
     * @param service - Data Lens REST API service
     * @param options - Configures source query and data accessibility parameters
     */
    constructor(
      data: datalens$Service.Service$Data,
      options?: datalens$QueryProvider.Service$Options
    ): this;

    /**
     * Updates the query ID to be used in the next call of the Data Lens REST API.
     * Note that new data will be fetched only after the reload method is called.
     */
    setQueryId(queryId: string): void;

    /**
     * Updates the query's dynamic parameters to be used in the next call of the Data Lens REST API.
     * Note that new data will be fetched only after the reload method is called.
     * This method is normally used when updating your visualization.
     * @param queryParams - Query dynamic parameters
     */
    setQueryParams(queryParams: any | null): void;

    /**
     * Fetches new data from the Data Lens REST API.
     * When data is fetched, the update event is triggered so that the consuming layers are redrawn.
     */
    reload(): void;

    /**
     * Updates the provider data.
     * When data is updated, the update event is triggered so that the consuming layers are redrawn.
     * @param data - JSON object
     */
    setData(data: datalens$Service.Service$Data): void;

    /**
     * Retrieves the provider data.
     * @returns - JSON object
     */
    getData(): datalens$Service.Service$Data;
  }

  /**
   * Overrides the Service configuration
   * Normally the Service instance is configured with the service.Platform instance.
   * This configuration can be overridden by specifying these options.
   * It can be useful when the Data Lens environment is different from the HERE Platform environment.
   */
  declare interface QueryProvider$Options {
    /**
     * Subdomain of the Data Lens REST API URL
     */
    subDomain?: string;

    /**
     * Pathname prefix of the Data Lens REST API endpoints
     */
    version?: string;

    /**
     * The token used to authenticate all requests
     */
    access_token?: string;

    /**
     * The token used to fetch a new access token after the previous access token has expired.
     * When refresh_token is provided, Service will automatically update the expired access_token.
     */
    refresh_token?: string;

    /**
     * To increase the number of simultaneous requests to the Data Lens REST API, domain sharding is used.
     * This option can be used when the Data Lens environment does not support domain sharding.
     */
    domainSharding?: string[];

    /**
     * Defines an alternative host for the Data Lens REST API URL
     */
    baseUrl?: string;

    /**
     * The ID of the Data Lens REST API query
     */
    queryId: string;

    /**
     * The query's dynamic parameters. The dynamic parameters can be used to filter data provided by the query.
     */
    queryParams?: any;

    /**
     * Names of the URI parameters that control the x/y/z of a tiled query
     */
    tileParamNames: QueryTileProvider$TileParamNames;

    /**
     * The ID for the Data Lens REST API query
     */
    queryId: string;

    /**
     * The query's dynamic parameters. The dynamic parameters can be used to filter data provided by the query.
     */
    queryParams?: string;

    /**
     * Defines how the input tile data is split by rows. You can specify this callback to define client-side aggregation and filtering. This callback is called for each tile.
     */
    dataToRows?: (
      data: datalens$Service.Service$Data,
      x: datalens$QueryTileProvider.HeatmapLayer$X,
      y: datalens$QueryTileProvider.HeatmapLayer$Y,
      zoom: datalens$QueryTileProvider.QueryTileProvider$Zoom
    ) => SpatialLayer$Row[];

    /**
     * Defines how the row is translated to the RasterLayer.TilePoint. This callback is called for each row that is returned from dataToRows.
     */
    rowToTilePoint?: (
      row: SpatialLayer$Row,
      x: HeatmapLayer$X,
      y: HeatmapLayer$Y
    ) => HeatmapLayer$TilePoint;

    /**
     * The buffer is a value (in pixels) that defines an extra area around each tile to capture data points from.
     * This is done to avoid drawing edges between tiles. For example, if data points represented with circles with a maximum radius of 10 pixels, then the buffer must be 10 pixels.
     */
    buffer?: (
      zoom: datalens$QueryTileProvider.QueryTileProvider$Zoom
    ) => number;

    /**
     * Defines how tile data is represented on a canvas. Input points for each tile are collected with respect to the buffer.
     * For progressive rendering this callback may be called more than once for the tile.
     */
    renderTile?: (
      points: HeatmapLayer$TilePoint[],
      canvas: HTMLCanvasElement,
      zoom: datalens$QueryTileProvider.QueryTileProvider$Zoom
    ) => void;

    /**
     * Defines how the input tile data is split by rows. You can specify this callback to define client-side aggregation and filtering. This callback is called for each tile.
     */
    dataToRows?: (
      data: datalens$Service.Service$Data,
      x: datalens$QueryTileProvider.HeatmapLayer$X,
      y: datalens$QueryTileProvider.HeatmapLayer$Y,
      zoom: datalens$QueryTileProvider.QueryTileProvider$Zoom
    ) => SpatialLayer$Row[];

    /**
     * Defines how the row is translated to the HeatmapLayer.TilePoint. This callback is called for each row that is returned from dataToRows.
     */
    rowToTilePoint(
      row: SpatialLayer$Row,
      x: HeatmapLayer$X,
      y: HeatmapLayer$Y
    ): HeatmapLayer$TilePoint;

    /**
     * Describes the bandwidth behavior in relation to current zoom level A numeric value sets it static across all levels
     * An Object with zoom, value and optional zoomIncrementFactor (1 equals doubling on every zoom increment) defines a behavior across all zoom levels
     * An Array of one or more zoom, value objects describes the behavior between the two defined levels and extrapolates the implied change outside of the defined range
     * Alternatively defines the level of smoothing as a function of the zoom level. The callback must return a value in pixels.
     * The cut-off of the Gaussian kernel is defined as 3 * bandwidth , a multiple (default 3) of bandwidth.
     */
    bandwidth?:
      | HeatmapLayer$Bandwidth
      | HeatmapLayer$BandwidthStop
      | HeatmapLayer$BandwidthStop[]
      | HeatmapLayer$BandwidthCallback;

    /**
     * Defines the range for the color scale as a function of the zoom level.
     * The returned value must be an array of 2 numbers.
     */
    valueRange?: (
      zoom: datalens$QueryTileProvider.QueryTileProvider$Zoom
    ) => number[];

    /**
     * Defines the range for the density alpha mask as a function of the zoom level.
     * When defined, the density alpha mask is applied. The returned value must be an array of 2 numbers.
     */
    countRange?: (
      zoom: datalens$QueryTileProvider.QueryTileProvider$Zoom
    ) => number[];

    /**
     * Defines a color palette as a function of the normalized value.
     * You can use D3.js library scale functions with the domain [0, 1].
     */
    colorScale?: (scale: number) => string;

    /**
     * Defines the alpha mask value as a function of the normalized count.
     * You can use D3.js library scale functions with the domain [0, 1] and the range [0, 1].
     */
    alphaScale?: (scale: number) => number;

    /**
     * Specifies which type of aggregation was applied (eg. type of aggregation function for bucket in the Data Lens query).
     * Possible values are SUM or AVERAGE. If the aggregation type is AVERAGE , then an averaged heat map is rendered.
     */
    aggregation?: HeatmapLayer$Aggregation;

    /**
     * Defines the scale (eg logarithmic scale) of the TilePoint value.
     * Note: if the value is not in a linear scale, then the aggregation in the source query must be defined with respect to the scale type.
     * For example, before applying the average aggregation function in a query, the value must be transformed to the linear scale. This guarantees correct linear averaging of values.
     */
    inputScale?: HeatmapLayer$InputScale;

    /**
     * Defines how the input data is split by rows. You can specify this callback to define client-side aggregation and filtering.
     */
    dataToRows?: (data: datalens$Service.Service$Data) => SpatialLayer$Row[];

    /**
     * Defines how each row is presented on the map (eg marker, polygon)
     */
    rowToMapObject(
      row: SpatialLayer$Row,
      z: datalens$QueryTileProvider.QueryTileProvider$Zoom
    ): map.Object;

    /**
     * Defines map object style and icon according to data row and zoom level.
     * Also it can define different styles depending on the StyleState (eg hovered, selected).
     */
    rowToStyle?: (
      row: SpatialLayer$Row,
      z: datalens$QueryTileProvider.QueryTileProvider$Zoom,
      styleState: SpatialLayer$StyleState
    ) => ObjectLayer$ObjectStyleOptions;

    /**
     * Defines quantization of data for improving data-driven styling performance
     */
    dataDomains?: ObjectLayer$DataDomains;

    /**
     * When present, client-side clustering is applied
     */
    clustering?: ObjectLayer$Clustering;

    /**
     * The data url to fetch
     */
    dataUrl?: string;

    /**
     * Defines how the input data is mapped to an array of GeoJSON features
     */
    dataToFeatures?: (obj: any) => SpatialLayer$Feature[];

    /**
     * Defines how GeoJSON features on a tile should be mapped to data rows, which are inputs to layers such as ObjectLayer and HeatmapLayer
     */
    featuresToRows?: (
      features: SpatialLayer$Feature[],
      x: datalens$QueryTileProvider.HeatmapLayer$X,
      y: datalens$QueryTileProvider.HeatmapLayer$Y,
      z: datalens$QueryTileProvider.QueryTileProvider$Zoom,
      tileSize: RawDataProvider$TileSize,
      helpers: RawDataProvider$Helpers
    ) => datalens$ObjectLayer.SpatialLayer$Row[];

    /**
     * Defines how the input tile data is split by rows. You can specify this callback to define client-side aggregation and filtering. This callback is called for each tile.
     */
    dataToRows?: (
      data: datalens$Service.Service$Data,
      x: datalens$QueryTileProvider.HeatmapLayer$X,
      y: datalens$QueryTileProvider.HeatmapLayer$Y,
      z: datalens$QueryTileProvider.QueryTileProvider$Zoom
    ) => SpatialLayer$Row[];

    /**
     * Defines how to get the spatial ID from a data row. This callback is called for each row that is returned from dataToRows.
     */
    rowToSpatialId(row: SpatialLayer$Row): string;

    /**
     * Defines how to get the spatial ID from a geometry feature. This callback is called for each geometry feature in the vector tile.
     */
    featureToSpatialId(feature: SpatialLayer$Feature): string;

    /**
     * Defines how the row is translated to map object style. This callback is called for each row that is returned from dataToRows.
     */
    rowToStyle(
      row: SpatialLayer$Row,
      z: datalens$QueryTileProvider.QueryTileProvider$Zoom,
      styleState: SpatialLayer$StyleState
    ): any;

    /**
     * Defines the default map object style.
     */
    defaultStyle(
      z: datalens$QueryTileProvider.QueryTileProvider$Zoom,
      styleState: SpatialLayer$StyleState
    ): any;

    /**
     * Defines how to transform the features.
     */
    SpatialLayer$transformFeature: SpatialLayer$transformFeature;

    /**
     * The name of the layer to fetch with the Data Lens REST API query
     */
    layerName: string;

    /**
     * The query's dynamic parameters. The dynamic parameters can be used to filter data provided by the query.
     */
    queryParams?: any;
  }

  /**
   * Providers define interfaces for layers to access data.
   * The input data can be stored locally or loaded from the network. Data can be loaded by tiles or in one chunk.
   * This provider loads tiled query data with the Data Lens REST API. Tiled queries are used to load data only for the current viewport.
   * This optimizes memory and network usage and enables progressive rendering.
   */
  declare class datalens$QueryTileProvider mixins undefined.RemoteTileProvider {
    /**
     * Constructor
     * @param service - Data Lens REST API service
     * @param options - Configures source query and data accessibility parameters
     */
    constructor(
      service: datalens$Service,
      options: datalens$QueryTileProvider.QueryProvider$Options
    ): this;

    /**
     * Updates the query ID to be used in the next call of the Data Lens REST API.
     * Note that new data will be fetched only after the reload method is called.
     */
    setQueryId(queryId: string): void;

    /**
     * Updates the query's dynamic parameters to be used in the next call of the Data Lens REST API.
     * Note that new data will be fetched only after the reload method is called. This method is normally used when updating your visualization.
     */
    setQueryParams(queryParams: any | null): void;

    /**
     * Updates the names of the dynamic parameters that defines tiles. This method is only needed when the query ID is updated.
     * Note that new data will be fetched only after the reload method is called.
     * @param tileParamNames - Names of the URI parameters that control the x/y/z of a tiled query
     */
    setTileParamNames(
      tileParamNames: datalens$QueryTileProvider.QueryTileProvider$TileParamNames
    ): void;
  }

  /**
   * Represents the names of the URI parameters that control the x/y/z of tiled query.
   * When defining the Data Lens query, dynamic parameters that control tiling can be arbitrarily named.
   * Names of these parameters must be specified to fetch tiles.
   */
  declare interface QueryTileProvider$TileParamNames {
    /**
     * Name of the dynamic parameter that defines tile column
     */
    x: string;

    /**
     * Name of the dynamic parameter that defines tile row
     */
    y: string;

    /**
     * Name of the dynamic parameter that defines zoom level
     */
    z: string;
  }

  /**
   * Overrides the Service configuration
   * Normally the Service instance is configured with the service.Platform instance.
   * This configuration can be overridden by specifying these options.
   * It can be useful when the Data Lens environment is different from the HERE Platform environment.
   */
  declare interface QueryTileProvider$Options {
    /**
     * Subdomain of the Data Lens REST API URL
     */
    subDomain?: string;

    /**
     * Pathname prefix of the Data Lens REST API endpoints
     */
    version?: string;

    /**
     * The token used to authenticate all requests
     */
    access_token?: string;

    /**
     * The token used to fetch a new access token after the previous access token has expired.
     * When refresh_token is provided, Service will automatically update the expired access_token.
     */
    refresh_token?: string;

    /**
     * To increase the number of simultaneous requests to the Data Lens REST API, domain sharding is used.
     * This option can be used when the Data Lens environment does not support domain sharding.
     */
    domainSharding?: string[];

    /**
     * Defines an alternative host for the Data Lens REST API URL
     */
    baseUrl?: string;

    /**
     * The ID of the Data Lens REST API query
     */
    queryId: string;

    /**
     * The query's dynamic parameters. The dynamic parameters can be used to filter data provided by the query.
     */
    queryParams?: any;

    /**
     * Names of the URI parameters that control the x/y/z of a tiled query
     */
    tileParamNames: QueryTileProvider$TileParamNames;

    /**
     * The ID for the Data Lens REST API query
     */
    queryId: string;

    /**
     * The query's dynamic parameters. The dynamic parameters can be used to filter data provided by the query.
     */
    queryParams?: string;

    /**
     * Defines how the input tile data is split by rows. You can specify this callback to define client-side aggregation and filtering. This callback is called for each tile.
     */
    dataToRows?: (
      data: datalens$Service.Service$Data,
      x: datalens$QueryTileProvider.HeatmapLayer$X,
      y: datalens$QueryTileProvider.HeatmapLayer$Y,
      zoom: datalens$QueryTileProvider.QueryTileProvider$Zoom
    ) => SpatialLayer$Row[];

    /**
     * Defines how the row is translated to the RasterLayer.TilePoint. This callback is called for each row that is returned from dataToRows.
     */
    rowToTilePoint?: (
      row: SpatialLayer$Row,
      x: HeatmapLayer$X,
      y: HeatmapLayer$Y
    ) => HeatmapLayer$TilePoint;

    /**
     * The buffer is a value (in pixels) that defines an extra area around each tile to capture data points from.
     * This is done to avoid drawing edges between tiles. For example, if data points represented with circles with a maximum radius of 10 pixels, then the buffer must be 10 pixels.
     */
    buffer?: (
      zoom: datalens$QueryTileProvider.QueryTileProvider$Zoom
    ) => number;

    /**
     * Defines how tile data is represented on a canvas. Input points for each tile are collected with respect to the buffer.
     * For progressive rendering this callback may be called more than once for the tile.
     */
    renderTile?: (
      points: HeatmapLayer$TilePoint[],
      canvas: HTMLCanvasElement,
      zoom: datalens$QueryTileProvider.QueryTileProvider$Zoom
    ) => void;

    /**
     * Defines how the input tile data is split by rows. You can specify this callback to define client-side aggregation and filtering. This callback is called for each tile.
     */
    dataToRows?: (
      data: datalens$Service.Service$Data,
      x: datalens$QueryTileProvider.HeatmapLayer$X,
      y: datalens$QueryTileProvider.HeatmapLayer$Y,
      zoom: datalens$QueryTileProvider.QueryTileProvider$Zoom
    ) => SpatialLayer$Row[];

    /**
     * Defines how the row is translated to the HeatmapLayer.TilePoint. This callback is called for each row that is returned from dataToRows.
     */
    rowToTilePoint(
      row: SpatialLayer$Row,
      x: HeatmapLayer$X,
      y: HeatmapLayer$Y
    ): HeatmapLayer$TilePoint;

    /**
     * Describes the bandwidth behavior in relation to current zoom level A numeric value sets it static across all levels
     * An Object with zoom, value and optional zoomIncrementFactor (1 equals doubling on every zoom increment) defines a behavior across all zoom levels
     * An Array of one or more zoom, value objects describes the behavior between the two defined levels and extrapolates the implied change outside of the defined range
     * Alternatively defines the level of smoothing as a function of the zoom level. The callback must return a value in pixels.
     * The cut-off of the Gaussian kernel is defined as 3 * bandwidth , a multiple (default 3) of bandwidth.
     */
    bandwidth?:
      | HeatmapLayer$Bandwidth
      | HeatmapLayer$BandwidthStop
      | HeatmapLayer$BandwidthStop[]
      | HeatmapLayer$BandwidthCallback;

    /**
     * Defines the range for the color scale as a function of the zoom level.
     * The returned value must be an array of 2 numbers.
     */
    valueRange?: (
      zoom: datalens$QueryTileProvider.QueryTileProvider$Zoom
    ) => number[];

    /**
     * Defines the range for the density alpha mask as a function of the zoom level.
     * When defined, the density alpha mask is applied. The returned value must be an array of 2 numbers.
     */
    countRange?: (
      zoom: datalens$QueryTileProvider.QueryTileProvider$Zoom
    ) => number[];

    /**
     * Defines a color palette as a function of the normalized value.
     * You can use D3.js library scale functions with the domain [0, 1].
     */
    colorScale?: (scale: number) => string;

    /**
     * Defines the alpha mask value as a function of the normalized count.
     * You can use D3.js library scale functions with the domain [0, 1] and the range [0, 1].
     */
    alphaScale?: (scale: number) => number;

    /**
     * Specifies which type of aggregation was applied (eg. type of aggregation function for bucket in the Data Lens query).
     * Possible values are SUM or AVERAGE. If the aggregation type is AVERAGE , then an averaged heat map is rendered.
     */
    aggregation?: HeatmapLayer$Aggregation;

    /**
     * Defines the scale (eg logarithmic scale) of the TilePoint value.
     * Note: if the value is not in a linear scale, then the aggregation in the source query must be defined with respect to the scale type.
     * For example, before applying the average aggregation function in a query, the value must be transformed to the linear scale. This guarantees correct linear averaging of values.
     */
    inputScale?: HeatmapLayer$InputScale;

    /**
     * Defines how the input data is split by rows. You can specify this callback to define client-side aggregation and filtering.
     */
    dataToRows?: (data: datalens$Service.Service$Data) => SpatialLayer$Row[];

    /**
     * Defines how each row is presented on the map (eg marker, polygon)
     */
    rowToMapObject(
      row: SpatialLayer$Row,
      z: datalens$QueryTileProvider.QueryTileProvider$Zoom
    ): map.Object;

    /**
     * Defines map object style and icon according to data row and zoom level.
     * Also it can define different styles depending on the StyleState (eg hovered, selected).
     */
    rowToStyle?: (
      row: SpatialLayer$Row,
      z: datalens$QueryTileProvider.QueryTileProvider$Zoom,
      styleState: SpatialLayer$StyleState
    ) => ObjectLayer$ObjectStyleOptions;

    /**
     * Defines quantization of data for improving data-driven styling performance
     */
    dataDomains?: ObjectLayer$DataDomains;

    /**
     * When present, client-side clustering is applied
     */
    clustering?: ObjectLayer$Clustering;

    /**
     * The data url to fetch
     */
    dataUrl?: string;

    /**
     * Defines how the input data is mapped to an array of GeoJSON features
     */
    dataToFeatures?: (obj: any) => SpatialLayer$Feature[];

    /**
     * Defines how GeoJSON features on a tile should be mapped to data rows, which are inputs to layers such as ObjectLayer and HeatmapLayer
     */
    featuresToRows?: (
      features: SpatialLayer$Feature[],
      x: datalens$QueryTileProvider.HeatmapLayer$X,
      y: datalens$QueryTileProvider.HeatmapLayer$Y,
      z: datalens$QueryTileProvider.QueryTileProvider$Zoom,
      tileSize: RawDataProvider$TileSize,
      helpers: RawDataProvider$Helpers
    ) => datalens$ObjectLayer.SpatialLayer$Row[];

    /**
     * Defines how the input tile data is split by rows. You can specify this callback to define client-side aggregation and filtering. This callback is called for each tile.
     */
    dataToRows?: (
      data: datalens$Service.Service$Data,
      x: datalens$QueryTileProvider.HeatmapLayer$X,
      y: datalens$QueryTileProvider.HeatmapLayer$Y,
      z: datalens$QueryTileProvider.QueryTileProvider$Zoom
    ) => SpatialLayer$Row[];

    /**
     * Defines how to get the spatial ID from a data row. This callback is called for each row that is returned from dataToRows.
     */
    rowToSpatialId(row: SpatialLayer$Row): string;

    /**
     * Defines how to get the spatial ID from a geometry feature. This callback is called for each geometry feature in the vector tile.
     */
    featureToSpatialId(feature: SpatialLayer$Feature): string;

    /**
     * Defines how the row is translated to map object style. This callback is called for each row that is returned from dataToRows.
     */
    rowToStyle(
      row: SpatialLayer$Row,
      z: datalens$QueryTileProvider.QueryTileProvider$Zoom,
      styleState: SpatialLayer$StyleState
    ): any;

    /**
     * Defines the default map object style.
     */
    defaultStyle(
      z: datalens$QueryTileProvider.QueryTileProvider$Zoom,
      styleState: SpatialLayer$StyleState
    ): any;

    /**
     * Defines how to transform the features.
     */
    SpatialLayer$transformFeature: SpatialLayer$transformFeature;

    /**
     * The name of the layer to fetch with the Data Lens REST API query
     */
    layerName: string;

    /**
     * The query's dynamic parameters. The dynamic parameters can be used to filter data provided by the query.
     */
    queryParams?: any;
  }

  /**
   * Tile X coordinate (column)
   * Coordinate in XYZ tile numbering scheme.
   */
  declare type QueryTileProvider$X = number;

  /**
   * Tile Y coordinate (row)
   * Coordinate in XYZ tile numbering scheme.
   */
  declare type QueryTileProvider$Y = number;

  /**
   * Zoom level
   * Coordinate in XYZ tile numbering scheme. May vary within range 1 to 20.
   */
  declare type QueryTileProvider$Zoom = number;

  /**
   * Provides pixel-wise rendering of data.
   * Layer used when you need to visualize more than 10k points. The layer requires source data to be located in pixel coordinates.
   * The rendering is implemented by drawing directly on a canvas.  The layer is often used together with a Data Lens query which groups rows by pixels.
   * This reduces the amount of data delivered to the client.
   */
  declare class datalens$RasterLayer mixins undefined.TileLayer {
    /**
     * Constructor
     */
    constructor(): this;

    /**
     * Default value for dataToRows callback option.
     * It represents each row as an object where property names correspond to data column names.
     */
    static defaultDataToRows: any;

    /**
     * Force re-rendering of the layer.
     * In the case where the callbacks passed to the layer options are not pure functions, you can call this method to force re-rendering.
     */
    redraw(): void;

    /**
     * This is a default implementation of renderTile callback. This method represents each point as a black 1x1 pixel square.
     * @param points - Input data points within a tile
     * @param canvas - The target canvas
     */
    static defaultRenderTile(
      points: datalens$RasterLayer.HeatmapLayer$TilePoint[],
      canvas: HTMLCanvasElement
    ): void;
  }

  /**
   * Overrides the Service configuration
   * Normally the Service instance is configured with the service.Platform instance.
   * This configuration can be overridden by specifying these options.
   * It can be useful when the Data Lens environment is different from the HERE Platform environment.
   */
  declare interface RasterLayer$Options {
    /**
     * Subdomain of the Data Lens REST API URL
     */
    subDomain?: string;

    /**
     * Pathname prefix of the Data Lens REST API endpoints
     */
    version?: string;

    /**
     * The token used to authenticate all requests
     */
    access_token?: string;

    /**
     * The token used to fetch a new access token after the previous access token has expired.
     * When refresh_token is provided, Service will automatically update the expired access_token.
     */
    refresh_token?: string;

    /**
     * To increase the number of simultaneous requests to the Data Lens REST API, domain sharding is used.
     * This option can be used when the Data Lens environment does not support domain sharding.
     */
    domainSharding?: string[];

    /**
     * Defines an alternative host for the Data Lens REST API URL
     */
    baseUrl?: string;

    /**
     * The ID of the Data Lens REST API query
     */
    queryId: string;

    /**
     * The query's dynamic parameters. The dynamic parameters can be used to filter data provided by the query.
     */
    queryParams?: any;

    /**
     * Names of the URI parameters that control the x/y/z of a tiled query
     */
    tileParamNames: QueryTileProvider$TileParamNames;

    /**
     * The ID for the Data Lens REST API query
     */
    queryId: string;

    /**
     * The query's dynamic parameters. The dynamic parameters can be used to filter data provided by the query.
     */
    queryParams?: string;

    /**
     * Defines how the input tile data is split by rows. You can specify this callback to define client-side aggregation and filtering. This callback is called for each tile.
     */
    dataToRows?: (
      data: datalens$Service.Service$Data,
      x: datalens$QueryTileProvider.QueryTileProvider$X,
      y: datalens$QueryTileProvider.QueryTileProvider$Y,
      zoom: datalens$QueryTileProvider.QueryTileProvider$Zoom
    ) => SpatialLayer$Row[];

    /**
     * Defines how the row is translated to the RasterLayer.TilePoint. This callback is called for each row that is returned from dataToRows.
     */
    rowToTilePoint?: (
      row: SpatialLayer$Row,
      x: QueryTileProvider$X,
      y: QueryTileProvider$Y
    ) => HeatmapLayer$TilePoint;

    /**
     * The buffer is a value (in pixels) that defines an extra area around each tile to capture data points from.
     * This is done to avoid drawing edges between tiles. For example, if data points represented with circles with a maximum radius of 10 pixels, then the buffer must be 10 pixels.
     */
    buffer?: (
      zoom: datalens$QueryTileProvider.QueryTileProvider$Zoom
    ) => number;

    /**
     * Defines how tile data is represented on a canvas. Input points for each tile are collected with respect to the buffer.
     * For progressive rendering this callback may be called more than once for the tile.
     */
    renderTile?: (
      points: HeatmapLayer$TilePoint[],
      canvas: HTMLCanvasElement,
      zoom: datalens$QueryTileProvider.QueryTileProvider$Zoom
    ) => void;

    /**
     * Defines how the input tile data is split by rows. You can specify this callback to define client-side aggregation and filtering. This callback is called for each tile.
     */
    dataToRows?: (
      data: datalens$Service.Service$Data,
      x: datalens$QueryTileProvider.QueryTileProvider$X,
      y: datalens$QueryTileProvider.QueryTileProvider$Y,
      zoom: datalens$QueryTileProvider.QueryTileProvider$Zoom
    ) => SpatialLayer$Row[];

    /**
     * Defines how the row is translated to the HeatmapLayer.TilePoint. This callback is called for each row that is returned from dataToRows.
     */
    rowToTilePoint(
      row: SpatialLayer$Row,
      x: QueryTileProvider$X,
      y: QueryTileProvider$Y
    ): HeatmapLayer$TilePoint;

    /**
     * Describes the bandwidth behavior in relation to current zoom level A numeric value sets it static across all levels
     * An Object with zoom, value and optional zoomIncrementFactor (1 equals doubling on every zoom increment) defines a behavior across all zoom levels
     * An Array of one or more zoom, value objects describes the behavior between the two defined levels and extrapolates the implied change outside of the defined range
     * Alternatively defines the level of smoothing as a function of the zoom level. The callback must return a value in pixels.
     * The cut-off of the Gaussian kernel is defined as 3 * bandwidth , a multiple (default 3) of bandwidth.
     */
    bandwidth?:
      | HeatmapLayer$Bandwidth
      | HeatmapLayer$BandwidthStop
      | HeatmapLayer$BandwidthStop[]
      | HeatmapLayer$BandwidthCallback;

    /**
     * Defines the range for the color scale as a function of the zoom level.
     * The returned value must be an array of 2 numbers.
     */
    valueRange?: (
      zoom: datalens$QueryTileProvider.QueryTileProvider$Zoom
    ) => number[];

    /**
     * Defines the range for the density alpha mask as a function of the zoom level.
     * When defined, the density alpha mask is applied. The returned value must be an array of 2 numbers.
     */
    countRange?: (
      zoom: datalens$QueryTileProvider.QueryTileProvider$Zoom
    ) => number[];

    /**
     * Defines a color palette as a function of the normalized value.
     * You can use D3.js library scale functions with the domain [0, 1].
     */
    colorScale?: (scale: number) => string;

    /**
     * Defines the alpha mask value as a function of the normalized count.
     * You can use D3.js library scale functions with the domain [0, 1] and the range [0, 1].
     */
    alphaScale?: (scale: number) => number;

    /**
     * Specifies which type of aggregation was applied (eg. type of aggregation function for bucket in the Data Lens query).
     * Possible values are SUM or AVERAGE. If the aggregation type is AVERAGE , then an averaged heat map is rendered.
     */
    aggregation?: HeatmapLayer$Aggregation;

    /**
     * Defines the scale (eg logarithmic scale) of the TilePoint value.
     * Note: if the value is not in a linear scale, then the aggregation in the source query must be defined with respect to the scale type.
     * For example, before applying the average aggregation function in a query, the value must be transformed to the linear scale. This guarantees correct linear averaging of values.
     */
    inputScale?: HeatmapLayer$InputScale;

    /**
     * Defines how the input data is split by rows. You can specify this callback to define client-side aggregation and filtering.
     */
    dataToRows?: (data: datalens$Service.Service$Data) => SpatialLayer$Row[];

    /**
     * Defines how each row is presented on the map (eg marker, polygon)
     */
    rowToMapObject(
      row: SpatialLayer$Row,
      z: datalens$QueryTileProvider.QueryTileProvider$Zoom
    ): map.Object;

    /**
     * Defines map object style and icon according to data row and zoom level.
     * Also it can define different styles depending on the StyleState (eg hovered, selected).
     */
    rowToStyle?: (
      row: SpatialLayer$Row,
      z: datalens$QueryTileProvider.QueryTileProvider$Zoom,
      styleState: SpatialLayer$StyleState
    ) => ObjectLayer$ObjectStyleOptions;

    /**
     * Defines quantization of data for improving data-driven styling performance
     */
    dataDomains?: ObjectLayer$DataDomains;

    /**
     * When present, client-side clustering is applied
     */
    clustering?: ObjectLayer$Clustering;

    /**
     * The data url to fetch
     */
    dataUrl?: string;

    /**
     * Defines how the input data is mapped to an array of GeoJSON features
     */
    dataToFeatures?: (obj: any) => SpatialLayer$Feature[];

    /**
     * Defines how GeoJSON features on a tile should be mapped to data rows, which are inputs to layers such as ObjectLayer and HeatmapLayer
     */
    featuresToRows?: (
      features: SpatialLayer$Feature[],
      x: datalens$QueryTileProvider.QueryTileProvider$X,
      y: datalens$QueryTileProvider.QueryTileProvider$Y,
      z: datalens$QueryTileProvider.QueryTileProvider$Zoom,
      tileSize: RawDataProvider$TileSize,
      helpers: RawDataProvider$Helpers
    ) => datalens$ObjectLayer.SpatialLayer$Row[];

    /**
     * Defines how the input tile data is split by rows. You can specify this callback to define client-side aggregation and filtering. This callback is called for each tile.
     */
    dataToRows?: (
      data: datalens$Service.Service$Data,
      x: datalens$QueryTileProvider.QueryTileProvider$X,
      y: datalens$QueryTileProvider.QueryTileProvider$Y,
      z: datalens$QueryTileProvider.QueryTileProvider$Zoom
    ) => SpatialLayer$Row[];

    /**
     * Defines how to get the spatial ID from a data row. This callback is called for each row that is returned from dataToRows.
     */
    rowToSpatialId(row: SpatialLayer$Row): string;

    /**
     * Defines how to get the spatial ID from a geometry feature. This callback is called for each geometry feature in the vector tile.
     */
    featureToSpatialId(feature: SpatialLayer$Feature): string;

    /**
     * Defines how the row is translated to map object style. This callback is called for each row that is returned from dataToRows.
     */
    rowToStyle(
      row: SpatialLayer$Row,
      z: datalens$QueryTileProvider.QueryTileProvider$Zoom,
      styleState: SpatialLayer$StyleState
    ): any;

    /**
     * Defines the default map object style.
     */
    defaultStyle(
      z: datalens$QueryTileProvider.QueryTileProvider$Zoom,
      styleState: SpatialLayer$StyleState
    ): any;

    /**
     * Defines how to transform the features.
     */
    SpatialLayer$transformFeature: SpatialLayer$transformFeature;

    /**
     * The name of the layer to fetch with the Data Lens REST API query
     */
    layerName: string;

    /**
     * The query's dynamic parameters. The dynamic parameters can be used to filter data provided by the query.
     */
    queryParams?: any;
  }

  /**
   * Defines the input data format for heat map rendering.
   * To collect data rows for each tile with respect to the buffer, each row must be represented as a point within the map tile.
   */
  declare interface RasterLayer$TilePoint {
    /**
     * Row relative to tile
     */
    x: number;

    /**
     * Column relative to tile
     */
    y: number;

    /**
     * Reference to source data row
     */
    data?: SpatialLayer$Row;

    /**
     * Row relative to tile
     */
    x: number;

    /**
     * Column relative to tile
     */
    y: number;

    /**
     * Value at the point (eg aggregated bucket value)
     */
    value: number;

    /**
     * Number of contributors to the value at the point (eg number of rows in a bucket)
     */
    count: number;

    /**
     * Reference to source data row
     */
    data?: SpatialLayer$Row;
  }

  /**
   * Tile X coordinate (column)
   * Coordinate in XYZ tile numbering scheme.
   */
  declare type RasterLayer$X = number;

  /**
   * Tile Y coordinate (row)
   * Coordinate in XYZ tile numbering scheme.
   */
  declare type RasterLayer$Y = number;

  /**
   * Slice of data (eg Data Lens query data row) that represents a data point.
   * Each row is transformed into TilePoint and passed to renderTile callback. By default each row is an Object where property names correspond to data column names.
   * This representation can be changed with the dataToRows callback.
   */
  declare type RasterLayer$Row = number;

  /**
   * Provides functionality of value-based heat map with density alpha mask.
   * Layer support different types of blending, including weighted average. Also it allows to apply alpha mask calculated by density.
   * In most cases, the layer consumes data grouped by 1x1 pixels buckets. For proper averaging it requires aggregated value and count (number of rows in bucket) for each bucket.
   * Blending of buckets is implemented via kernel density estimation (KDE) with a Gaussian kernel.
   */
  declare class datalens$HeatmapLayer mixins datalens$RasterLayer {
    /**
     * Constructor
     * @param provider - Source of tiled data
     * @param options - Configuration for data processing and rendering
     */
    constructor(
      provider: datalens$QueryTileProvider,
      options: datalens$HeatmapLayer.RasterLayer$Options
    ): this;

    /**
     * Default value for dataToRows callback option. It represents each row as an object where property names correspond to data column names.
     */
    static defaultDataToRows: (
      data: datalens$Service.Service$Data,
      x: datalens$QueryTileProvider.RasterLayer$X,
      y: datalens$QueryTileProvider.RasterLayer$Y,
      zoom: datalens$QueryTileProvider.QueryTileProvider$Zoom
    ) => datalens$HeatmapLayer.RasterLayer$Row[];

    /**
     * Set of possible values for the inputScale option
     */
    static inputScale: datalens$HeatmapLayer.HeatmapLayer$InputScale;

    /**
     * Set of possible values for the aggregation option
     */
    static aggregation: datalens$HeatmapLayer.HeatmapLayer$Aggregation;

    /**
     * @param zoom - zoom level
     */
    getOptionsPerZoom(zoom: number): datalens$HeatmapLayer.RasterLayer$Options;

    /**
     * Removes listeners, and references to memory consuming objects, from this layer. Call this method when you no longer need the layer.
     */
    dispose(): void;

    /**
     * Force re-rendering of the layer. In the case where the callbacks passed to the layer options are not pure functions, you can call this method to force re-rendering.
     */
    redraw(): void;
  }

  /**
   * Overrides the Service configuration
   * Normally the Service instance is configured with the service.Platform instance.
   * This configuration can be overridden by specifying these options.
   * It can be useful when the Data Lens environment is different from the HERE Platform environment.
   */
  declare interface HeatmapLayer$Options {
    /**
     * Subdomain of the Data Lens REST API URL
     */
    subDomain?: string;

    /**
     * Pathname prefix of the Data Lens REST API endpoints
     */
    version?: string;

    /**
     * The token used to authenticate all requests
     */
    access_token?: string;

    /**
     * The token used to fetch a new access token after the previous access token has expired.
     * When refresh_token is provided, Service will automatically update the expired access_token.
     */
    refresh_token?: string;

    /**
     * To increase the number of simultaneous requests to the Data Lens REST API, domain sharding is used.
     * This option can be used when the Data Lens environment does not support domain sharding.
     */
    domainSharding?: string[];

    /**
     * Defines an alternative host for the Data Lens REST API URL
     */
    baseUrl?: string;

    /**
     * The ID of the Data Lens REST API query
     */
    queryId: string;

    /**
     * The query's dynamic parameters. The dynamic parameters can be used to filter data provided by the query.
     */
    queryParams?: any;

    /**
     * Names of the URI parameters that control the x/y/z of a tiled query
     */
    tileParamNames: QueryTileProvider$TileParamNames;

    /**
     * The ID for the Data Lens REST API query
     */
    queryId: string;

    /**
     * The query's dynamic parameters. The dynamic parameters can be used to filter data provided by the query.
     */
    queryParams?: string;

    /**
     * Defines how the input tile data is split by rows. You can specify this callback to define client-side aggregation and filtering. This callback is called for each tile.
     */
    dataToRows?: (
      data: datalens$Service.Service$Data,
      x: datalens$QueryTileProvider.RasterLayer$X,
      y: datalens$QueryTileProvider.RasterLayer$Y,
      zoom: datalens$QueryTileProvider.QueryTileProvider$Zoom
    ) => RasterLayer$Row[];

    /**
     * Defines how the row is translated to the RasterLayer.TilePoint. This callback is called for each row that is returned from dataToRows.
     */
    rowToTilePoint?: (
      row: RasterLayer$Row,
      x: RasterLayer$X,
      y: RasterLayer$Y
    ) => RasterLayer$TilePoint;

    /**
     * The buffer is a value (in pixels) that defines an extra area around each tile to capture data points from.
     * This is done to avoid drawing edges between tiles. For example, if data points represented with circles with a maximum radius of 10 pixels, then the buffer must be 10 pixels.
     */
    buffer?: (
      zoom: datalens$QueryTileProvider.QueryTileProvider$Zoom
    ) => number;

    /**
     * Defines how tile data is represented on a canvas. Input points for each tile are collected with respect to the buffer.
     * For progressive rendering this callback may be called more than once for the tile.
     */
    renderTile?: (
      points: RasterLayer$TilePoint[],
      canvas: HTMLCanvasElement,
      zoom: datalens$QueryTileProvider.QueryTileProvider$Zoom
    ) => void;

    /**
     * Defines how the input tile data is split by rows. You can specify this callback to define client-side aggregation and filtering. This callback is called for each tile.
     */
    dataToRows?: (
      data: datalens$Service.Service$Data,
      x: datalens$QueryTileProvider.RasterLayer$X,
      y: datalens$QueryTileProvider.RasterLayer$Y,
      zoom: datalens$QueryTileProvider.QueryTileProvider$Zoom
    ) => RasterLayer$Row[];

    /**
     * Defines how the row is translated to the HeatmapLayer.TilePoint. This callback is called for each row that is returned from dataToRows.
     */
    rowToTilePoint(
      row: RasterLayer$Row,
      x: RasterLayer$X,
      y: RasterLayer$Y
    ): RasterLayer$TilePoint;

    /**
     * Describes the bandwidth behavior in relation to current zoom level A numeric value sets it static across all levels
     * An Object with zoom, value and optional zoomIncrementFactor (1 equals doubling on every zoom increment) defines a behavior across all zoom levels
     * An Array of one or more zoom, value objects describes the behavior between the two defined levels and extrapolates the implied change outside of the defined range
     * Alternatively defines the level of smoothing as a function of the zoom level. The callback must return a value in pixels.
     * The cut-off of the Gaussian kernel is defined as 3 * bandwidth , a multiple (default 3) of bandwidth.
     */
    bandwidth?:
      | HeatmapLayer$Bandwidth
      | HeatmapLayer$BandwidthStop
      | HeatmapLayer$BandwidthStop[]
      | HeatmapLayer$BandwidthCallback;

    /**
     * Defines the range for the color scale as a function of the zoom level.
     * The returned value must be an array of 2 numbers.
     */
    valueRange?: (
      zoom: datalens$QueryTileProvider.QueryTileProvider$Zoom
    ) => number[];

    /**
     * Defines the range for the density alpha mask as a function of the zoom level.
     * When defined, the density alpha mask is applied. The returned value must be an array of 2 numbers.
     */
    countRange?: (
      zoom: datalens$QueryTileProvider.QueryTileProvider$Zoom
    ) => number[];

    /**
     * Defines a color palette as a function of the normalized value.
     * You can use D3.js library scale functions with the domain [0, 1].
     */
    colorScale?: (scale: number) => string;

    /**
     * Defines the alpha mask value as a function of the normalized count.
     * You can use D3.js library scale functions with the domain [0, 1] and the range [0, 1].
     */
    alphaScale?: (scale: number) => number;

    /**
     * Specifies which type of aggregation was applied (eg. type of aggregation function for bucket in the Data Lens query).
     * Possible values are SUM or AVERAGE. If the aggregation type is AVERAGE , then an averaged heat map is rendered.
     */
    aggregation?: HeatmapLayer$Aggregation;

    /**
     * Defines the scale (eg logarithmic scale) of the TilePoint value.
     * Note: if the value is not in a linear scale, then the aggregation in the source query must be defined with respect to the scale type.
     * For example, before applying the average aggregation function in a query, the value must be transformed to the linear scale. This guarantees correct linear averaging of values.
     */
    inputScale?: HeatmapLayer$InputScale;

    /**
     * Defines how the input data is split by rows. You can specify this callback to define client-side aggregation and filtering.
     */
    dataToRows?: (data: datalens$Service.Service$Data) => RasterLayer$Row[];

    /**
     * Defines how each row is presented on the map (eg marker, polygon)
     */
    rowToMapObject(
      row: RasterLayer$Row,
      z: datalens$QueryTileProvider.QueryTileProvider$Zoom
    ): map.Object;

    /**
     * Defines map object style and icon according to data row and zoom level.
     * Also it can define different styles depending on the StyleState (eg hovered, selected).
     */
    rowToStyle?: (
      row: RasterLayer$Row,
      z: datalens$QueryTileProvider.QueryTileProvider$Zoom,
      styleState: SpatialLayer$StyleState
    ) => ObjectLayer$ObjectStyleOptions;

    /**
     * Defines quantization of data for improving data-driven styling performance
     */
    dataDomains?: ObjectLayer$DataDomains;

    /**
     * When present, client-side clustering is applied
     */
    clustering?: ObjectLayer$Clustering;

    /**
     * The data url to fetch
     */
    dataUrl?: string;

    /**
     * Defines how the input data is mapped to an array of GeoJSON features
     */
    dataToFeatures?: (obj: any) => SpatialLayer$Feature[];

    /**
     * Defines how GeoJSON features on a tile should be mapped to data rows, which are inputs to layers such as ObjectLayer and HeatmapLayer
     */
    featuresToRows?: (
      features: SpatialLayer$Feature[],
      x: datalens$QueryTileProvider.RasterLayer$X,
      y: datalens$QueryTileProvider.RasterLayer$Y,
      z: datalens$QueryTileProvider.QueryTileProvider$Zoom,
      tileSize: RawDataProvider$TileSize,
      helpers: RawDataProvider$Helpers
    ) => datalens$ObjectLayer.RasterLayer$Row[];

    /**
     * Defines how the input tile data is split by rows. You can specify this callback to define client-side aggregation and filtering. This callback is called for each tile.
     */
    dataToRows?: (
      data: datalens$Service.Service$Data,
      x: datalens$QueryTileProvider.RasterLayer$X,
      y: datalens$QueryTileProvider.RasterLayer$Y,
      z: datalens$QueryTileProvider.QueryTileProvider$Zoom
    ) => RasterLayer$Row[];

    /**
     * Defines how to get the spatial ID from a data row. This callback is called for each row that is returned from dataToRows.
     */
    rowToSpatialId(row: RasterLayer$Row): string;

    /**
     * Defines how to get the spatial ID from a geometry feature. This callback is called for each geometry feature in the vector tile.
     */
    featureToSpatialId(feature: SpatialLayer$Feature): string;

    /**
     * Defines how the row is translated to map object style. This callback is called for each row that is returned from dataToRows.
     */
    rowToStyle(
      row: RasterLayer$Row,
      z: datalens$QueryTileProvider.QueryTileProvider$Zoom,
      styleState: SpatialLayer$StyleState
    ): any;

    /**
     * Defines the default map object style.
     */
    defaultStyle(
      z: datalens$QueryTileProvider.QueryTileProvider$Zoom,
      styleState: SpatialLayer$StyleState
    ): any;

    /**
     * Defines how to transform the features.
     */
    SpatialLayer$transformFeature: SpatialLayer$transformFeature;

    /**
     * The name of the layer to fetch with the Data Lens REST API query
     */
    layerName: string;

    /**
     * The query's dynamic parameters. The dynamic parameters can be used to filter data provided by the query.
     */
    queryParams?: any;
  }

  /**
   * Tile X coordinate (column)
   * Coordinate in XYZ tile numbering scheme.
   */
  declare type HeatmapLayer$X = number;

  /**
   * Tile Y coordinate (row)
   * Coordinate in XYZ tile numbering scheme.
   */
  declare type HeatmapLayer$Y = number;

  /**
   * Slice of data (eg Data Lens query data row) that represents a data point.
   * Each row is transformed into TilePoint and passed to renderTile callback. By default each row is an Object where property names correspond to data column names.
   * This representation can be changed with the dataToRows callback.
   */
  declare type HeatmapLayer$Row = number;

  /**
   * Defines a constant for the bandwidth
   * A number that sets a constant for the bandwidth across all zoom levels.
   */
  declare type HeatmapLayer$Bandwidth = number;

  /**
   * Sets the bandwidth for a given zoom level and uses this to calculate the increment or decrement of the bandwidth at other zoom levels
   * This object defines the behavior of the bandwidth value across all zoom levels, initialized by a reference zoom level and its value at that level.
   * The default behavior with zoomIncrementFactor = 1 doubles the bandwidth with every increasing zoom level and halves it on every decrease in zoom level.
   * For example, a bandwidth of 10@zoom1 turns to 20@zoom2 and 5@zoom0. A zoomIncrementFactor of 0 effectively equals the bandwidth number, ignoring the provided zoom level.
   * A zoomIncrementFactor of 0.5 mean a bandwidth increase of 50% compared to a factor of 1. So a bandwidth of 10@zoom1 computes to 15@zoom2.
   */
  declare interface HeatmapLayer$BandwidthStop {
    zoom: number;
    value: number;
    zoomIncrementFactor?: number;
  }

  /**
   * TODO: this is missing in the documentation: https://developer.here.com/visualization/documentation/datalens/h-datalens-heatmaplayer-options.html
   */
  declare type HeatmapLayer$BandwidthCallback = () => void;

  /**
   * Defines the input data format for heat map rendering.
   * To collect data rows for each tile with respect to the buffer, each row must be represented as a point within the map tile.
   */
  declare interface HeatmapLayer$TilePoint {
    /**
     * Row relative to tile
     */
    x: number;

    /**
     * Column relative to tile
     */
    y: number;

    /**
     * Reference to source data row
     */
    data?: HeatmapLayer$Row;

    /**
     * Row relative to tile
     */
    x: number;

    /**
     * Column relative to tile
     */
    y: number;

    /**
     * Value at the point (eg aggregated bucket value)
     */
    value: number;

    /**
     * Number of contributors to the value at the point (eg number of rows in a bucket)
     */
    count: number;

    /**
     * Reference to source data row
     */
    data?: HeatmapLayer$Row;
  }

  /**
   * Set of possible values for the aggregation option.
   * If the heat map input data is buckets, then different types of aggregation can be applied to the rows in a bucket.
   * The aggregation type is required for proper blending mode of the heat map. For the AVERAGE aggregation type, an averaged heat map is rendered.
   */
  declare class HeatmapLayer$Aggregation {
    constructor(...args: empty): mixed;
    static +SUM: Class<HeatmapLayer$Aggregation__SUM> &
      HeatmapLayer$Aggregation__SUM &
      0; // 0
    static +AVERAGE: Class<HeatmapLayer$Aggregation__AVERAGE> &
      HeatmapLayer$Aggregation__AVERAGE &
      1; // 1
  }

  declare class HeatmapLayer$Aggregation__SUM mixins HeatmapLayer$Aggregation {}
  declare class HeatmapLayer$Aggregation__AVERAGE
    mixins HeatmapLayer$Aggregation {}

  /**
   * Set of possible values for the inputScale option.
   * The input scale is required for proper heat map blending. If the input scale is not linear, then the TilePoint.value is converted to linear scale before calculating the sum or average.
   */
  declare class HeatmapLayer$InputScale {
    constructor(...args: empty): mixed;
    static +DB: Class<HeatmapLayer$InputScale__DB> &
      HeatmapLayer$InputScale__DB &
      0; // 0
    static +LINEAR: Class<HeatmapLayer$InputScale__LINEAR> &
      HeatmapLayer$InputScale__LINEAR &
      1; // 1
    static +LOG: Class<HeatmapLayer$InputScale__LOG> &
      HeatmapLayer$InputScale__LOG &
      2; // 2
  }

  declare class HeatmapLayer$InputScale__DB mixins HeatmapLayer$InputScale {}
  declare class HeatmapLayer$InputScale__LINEAR
    mixins HeatmapLayer$InputScale {}
  declare class HeatmapLayer$InputScale__LOG mixins HeatmapLayer$InputScale {}

  /**
   * Presents data as points or spatial map objects with data-driven styles and client-side clustering.
   * Applicable for drawing interactive map objects like markers, polygons, circles and other instances of map.Object. Source of data can be either tiled or not tiled.
   * Styles for objects can be parametrized with data rows and zoom level. Allows to create data-driven icons for markers like donuts or bars.
   * Also enables clustering and data domains for visualizing up to 100k points or more.
   */
  declare class datalens$ObjectLayer mixins undefined.datalens$ObjectLayer {
    /**
     * Constructor
     * @param provider - Data source (tiled or not)
     * @param options - Defines data processing, clustering and data-driven styling
     */
    constructor(
      provider:
        | map.provider.RemoteTileProvider
        | datalens$Provider
        | datalens$QueryProvider
        | datalens$QueryTileProvider,
      options: datalens$ObjectLayer.HeatmapLayer$Options
    ): this;

    /**
     * Default value for dataToRows callback option. It represents each row as an object where property names correspond to data column names.
     */
    static defaultDataToRows(
      data: datalens$Service.Service$Data
    ): datalens$ObjectLayer.HeatmapLayer$Row[];

    /**
     * A factory method for data-driven icons. The method allows you to build an icon from SVG markup or JsonML object. Provides caching of icons with the same markup.
     * @param svg - SVG presented as markup or JsonML Array
     * @param options - Icon options (eg size and anchor). Note that the default anchor is in the middle.
     * @param - When the icon is a square, you can define the size as a number in pixels
     * @returns - Icon which can be used for marker or cluster
     */
    static createIcon(
      svg: string | any[],
      options?: map.Icon.HeatmapLayer$Options
    ): map.Icon;

    /**
     * Returns cache of icons created with the createIcon method. Can be used to clean the icon cache.
     * @return - Icon cache
     */
    static getIconCache(): util.Cache;

    /**
     * Force re-rendering of the layer. In the case where the callbacks passed to the layer options are not pure functions, you can call this method to force re-rendering.
     */
    redraw(): void;

    /**
     * Recalculates the style and applies it to the map object based on the new StyleState
     * @param object - Map object
     * @param state - New state
     */
    updateObjectStyle(
      any: map.Object,
      state: datalens$ObjectLayer.SpatialLayer$StyleState
    ): void;
  }

  /**
   * Overrides the Service configuration
   * Normally the Service instance is configured with the service.Platform instance.
   * This configuration can be overridden by specifying these options.
   * It can be useful when the Data Lens environment is different from the HERE Platform environment.
   */
  declare interface ObjectLayer$Options {
    /**
     * Subdomain of the Data Lens REST API URL
     */
    subDomain?: string;

    /**
     * Pathname prefix of the Data Lens REST API endpoints
     */
    version?: string;

    /**
     * The token used to authenticate all requests
     */
    access_token?: string;

    /**
     * The token used to fetch a new access token after the previous access token has expired.
     * When refresh_token is provided, Service will automatically update the expired access_token.
     */
    refresh_token?: string;

    /**
     * To increase the number of simultaneous requests to the Data Lens REST API, domain sharding is used.
     * This option can be used when the Data Lens environment does not support domain sharding.
     */
    domainSharding?: string[];

    /**
     * Defines an alternative host for the Data Lens REST API URL
     */
    baseUrl?: string;

    /**
     * The ID of the Data Lens REST API query
     */
    queryId: string;

    /**
     * The query's dynamic parameters. The dynamic parameters can be used to filter data provided by the query.
     */
    queryParams?: any;

    /**
     * Names of the URI parameters that control the x/y/z of a tiled query
     */
    tileParamNames: QueryTileProvider$TileParamNames;

    /**
     * The ID for the Data Lens REST API query
     */
    queryId: string;

    /**
     * The query's dynamic parameters. The dynamic parameters can be used to filter data provided by the query.
     */
    queryParams?: string;

    /**
     * Defines how the input tile data is split by rows. You can specify this callback to define client-side aggregation and filtering. This callback is called for each tile.
     */
    dataToRows?: (
      data: datalens$Service.Service$Data,
      x: datalens$QueryTileProvider.HeatmapLayer$X,
      y: datalens$QueryTileProvider.HeatmapLayer$Y,
      zoom: datalens$QueryTileProvider.QueryTileProvider$Zoom
    ) => HeatmapLayer$Row[];

    /**
     * Defines how the row is translated to the RasterLayer.TilePoint. This callback is called for each row that is returned from dataToRows.
     */
    rowToTilePoint?: (
      row: HeatmapLayer$Row,
      x: HeatmapLayer$X,
      y: HeatmapLayer$Y
    ) => HeatmapLayer$TilePoint;

    /**
     * The buffer is a value (in pixels) that defines an extra area around each tile to capture data points from.
     * This is done to avoid drawing edges between tiles. For example, if data points represented with circles with a maximum radius of 10 pixels, then the buffer must be 10 pixels.
     */
    buffer?: (
      zoom: datalens$QueryTileProvider.QueryTileProvider$Zoom
    ) => number;

    /**
     * Defines how tile data is represented on a canvas. Input points for each tile are collected with respect to the buffer.
     * For progressive rendering this callback may be called more than once for the tile.
     */
    renderTile?: (
      points: HeatmapLayer$TilePoint[],
      canvas: HTMLCanvasElement,
      zoom: datalens$QueryTileProvider.QueryTileProvider$Zoom
    ) => void;

    /**
     * Defines how the input tile data is split by rows. You can specify this callback to define client-side aggregation and filtering. This callback is called for each tile.
     */
    dataToRows?: (
      data: datalens$Service.Service$Data,
      x: datalens$QueryTileProvider.HeatmapLayer$X,
      y: datalens$QueryTileProvider.HeatmapLayer$Y,
      zoom: datalens$QueryTileProvider.QueryTileProvider$Zoom
    ) => HeatmapLayer$Row[];

    /**
     * Defines how the row is translated to the HeatmapLayer.TilePoint. This callback is called for each row that is returned from dataToRows.
     */
    rowToTilePoint(
      row: HeatmapLayer$Row,
      x: HeatmapLayer$X,
      y: HeatmapLayer$Y
    ): HeatmapLayer$TilePoint;

    /**
     * Describes the bandwidth behavior in relation to current zoom level A numeric value sets it static across all levels
     * An Object with zoom, value and optional zoomIncrementFactor (1 equals doubling on every zoom increment) defines a behavior across all zoom levels
     * An Array of one or more zoom, value objects describes the behavior between the two defined levels and extrapolates the implied change outside of the defined range
     * Alternatively defines the level of smoothing as a function of the zoom level. The callback must return a value in pixels.
     * The cut-off of the Gaussian kernel is defined as 3 * bandwidth , a multiple (default 3) of bandwidth.
     */
    bandwidth?:
      | HeatmapLayer$Bandwidth
      | HeatmapLayer$BandwidthStop
      | HeatmapLayer$BandwidthStop[]
      | HeatmapLayer$BandwidthCallback;

    /**
     * Defines the range for the color scale as a function of the zoom level.
     * The returned value must be an array of 2 numbers.
     */
    valueRange?: (
      zoom: datalens$QueryTileProvider.QueryTileProvider$Zoom
    ) => number[];

    /**
     * Defines the range for the density alpha mask as a function of the zoom level.
     * When defined, the density alpha mask is applied. The returned value must be an array of 2 numbers.
     */
    countRange?: (
      zoom: datalens$QueryTileProvider.QueryTileProvider$Zoom
    ) => number[];

    /**
     * Defines a color palette as a function of the normalized value.
     * You can use D3.js library scale functions with the domain [0, 1].
     */
    colorScale?: (scale: number) => string;

    /**
     * Defines the alpha mask value as a function of the normalized count.
     * You can use D3.js library scale functions with the domain [0, 1] and the range [0, 1].
     */
    alphaScale?: (scale: number) => number;

    /**
     * Specifies which type of aggregation was applied (eg. type of aggregation function for bucket in the Data Lens query).
     * Possible values are SUM or AVERAGE. If the aggregation type is AVERAGE , then an averaged heat map is rendered.
     */
    aggregation?: HeatmapLayer$Aggregation;

    /**
     * Defines the scale (eg logarithmic scale) of the TilePoint value.
     * Note: if the value is not in a linear scale, then the aggregation in the source query must be defined with respect to the scale type.
     * For example, before applying the average aggregation function in a query, the value must be transformed to the linear scale. This guarantees correct linear averaging of values.
     */
    inputScale?: HeatmapLayer$InputScale;

    /**
     * Defines how the input data is split by rows. You can specify this callback to define client-side aggregation and filtering.
     */
    dataToRows?: (data: datalens$Service.Service$Data) => HeatmapLayer$Row[];

    /**
     * Defines how each row is presented on the map (eg marker, polygon)
     */
    rowToMapObject(
      row: HeatmapLayer$Row,
      z: datalens$QueryTileProvider.QueryTileProvider$Zoom
    ): map.Object;

    /**
     * Defines map object style and icon according to data row and zoom level.
     * Also it can define different styles depending on the StyleState (eg hovered, selected).
     */
    rowToStyle?: (
      row: HeatmapLayer$Row,
      z: datalens$QueryTileProvider.QueryTileProvider$Zoom,
      styleState: SpatialLayer$StyleState
    ) => ObjectLayer$ObjectStyleOptions;

    /**
     * Defines quantization of data for improving data-driven styling performance
     */
    dataDomains?: ObjectLayer$DataDomains;

    /**
     * When present, client-side clustering is applied
     */
    clustering?: ObjectLayer$Clustering;

    /**
     * The data url to fetch
     */
    dataUrl?: string;

    /**
     * Defines how the input data is mapped to an array of GeoJSON features
     */
    dataToFeatures?: (obj: any) => SpatialLayer$Feature[];

    /**
     * Defines how GeoJSON features on a tile should be mapped to data rows, which are inputs to layers such as ObjectLayer and HeatmapLayer
     */
    featuresToRows?: (
      features: SpatialLayer$Feature[],
      x: datalens$QueryTileProvider.HeatmapLayer$X,
      y: datalens$QueryTileProvider.HeatmapLayer$Y,
      z: datalens$QueryTileProvider.QueryTileProvider$Zoom,
      tileSize: RawDataProvider$TileSize,
      helpers: RawDataProvider$Helpers
    ) => datalens$ObjectLayer.HeatmapLayer$Row[];

    /**
     * Defines how the input tile data is split by rows. You can specify this callback to define client-side aggregation and filtering. This callback is called for each tile.
     */
    dataToRows?: (
      data: datalens$Service.Service$Data,
      x: datalens$QueryTileProvider.HeatmapLayer$X,
      y: datalens$QueryTileProvider.HeatmapLayer$Y,
      z: datalens$QueryTileProvider.QueryTileProvider$Zoom
    ) => HeatmapLayer$Row[];

    /**
     * Defines how to get the spatial ID from a data row. This callback is called for each row that is returned from dataToRows.
     */
    rowToSpatialId(row: HeatmapLayer$Row): string;

    /**
     * Defines how to get the spatial ID from a geometry feature. This callback is called for each geometry feature in the vector tile.
     */
    featureToSpatialId(feature: SpatialLayer$Feature): string;

    /**
     * Defines how the row is translated to map object style. This callback is called for each row that is returned from dataToRows.
     */
    rowToStyle(
      row: HeatmapLayer$Row,
      z: datalens$QueryTileProvider.QueryTileProvider$Zoom,
      styleState: SpatialLayer$StyleState
    ): any;

    /**
     * Defines the default map object style.
     */
    defaultStyle(
      z: datalens$QueryTileProvider.QueryTileProvider$Zoom,
      styleState: SpatialLayer$StyleState
    ): any;

    /**
     * Defines how to transform the features.
     */
    SpatialLayer$transformFeature: SpatialLayer$transformFeature;

    /**
     * The name of the layer to fetch with the Data Lens REST API query
     */
    layerName: string;

    /**
     * The query's dynamic parameters. The dynamic parameters can be used to filter data provided by the query.
     */
    queryParams?: any;
  }

  /**
   * Defines client-side clustering in the ObjectLayer.
   * When the clustering option is provided, rows returned from dataToRows go to the clustering.rowToDataPoint callback to be transformed to data points.
   * Then, the data points are clustered according to clustering.options. Clustering produces clusters and noise points (data points that are not clustered).
   * Clusters and noise points must be presented as map objects with the rowToMapObject callback and can be styled with the rowToStyle callback.
   */
  declare interface ObjectLayer$Clustering {
    /**
     * Defines data points from rows
     */
    rowToDataPoint(row: HeatmapLayer$Row): clustering.DataPoint;

    /**
     * Defines clustering options as a function of the zoom level
     */
    options(
      zoom: datalens$QueryTileProvider.QueryTileProvider$Zoom
    ): clustering.datalens$Provider.ClusteringOptions;
  }

  /**
   * Slice of data (eg Data Lens query data row) that represents a data point.
   * Each row is transformed into TilePoint and passed to renderTile callback. By default each row is an Object where property names correspond to data column names.
   * This representation can be changed with the dataToRows callback.
   */
  declare type ObjectLayer$Row = number;

  /**
   * User defined modification of a data-driven style
   * StyleState appears as a parameter in the rowToStyle callback. By default it is 'DEFAULT_STATE'. To change StyleState, use the ObjectLayer.updateObjectStyle method.
   */
  declare type ObjectLayer$StyleState = any;

  /**
   * Output from the rowToStyle callback.
   * Defines the styles or the icon that is applied to the map object.
   */
  declare interface ObjectLayer$ObjectStyleOptions {
    /**
     * Marker icon
     */
    icon: map.Icon;

    /**
     * Spatial style
     */
    style?: map.SpatialStyle.ObjectLayer$Options;

    /**
     * Style of arrows to render along a polyline
     */
    arrows?: map.ArrowStyle.ObjectLayer$Options;

    /**
     * The z-index value of the map object, default is 0
     */
    zIndex?: number;
  }

  /**
   * Input data quantization domain, used to optimize styling performance.
   * The option must have properties corresponding to the properties of ObjectLayer.Row. Values must be represented as an Array of Numbers that defines the quantization domain.
   * When provided, the input data will be quantized, and rowToStyle will be called only for quantized values.
   */
  declare type ObjectLayer$DataDomains = any;

  /**
   * Defines how to load data from a raw data file
   * This provider defines the interface for loading data, such as geometries or coordinates, from a local or remote data file in GeoJSON or CSV format
   */
  declare class datalens$RawDataProvider mixins undefined.RemoteTileProvider {
    /**
     * Constructor
     * @param options - Configures options
     */
    constructor(options: datalens$RawDataProvider.ObjectLayer$Options): this;

    /**
     * Updates the data url. Note that new data will be fetched only after the reload method is called.
     */
    setDataUrl(dataUrl: string): void;
  }

  /**
   * Overrides the Service configuration
   * Normally the Service instance is configured with the service.Platform instance.
   * This configuration can be overridden by specifying these options.
   * It can be useful when the Data Lens environment is different from the HERE Platform environment.
   */
  declare interface RawDataProvider$Options {
    /**
     * Subdomain of the Data Lens REST API URL
     */
    subDomain?: string;

    /**
     * Pathname prefix of the Data Lens REST API endpoints
     */
    version?: string;

    /**
     * The token used to authenticate all requests
     */
    access_token?: string;

    /**
     * The token used to fetch a new access token after the previous access token has expired.
     * When refresh_token is provided, Service will automatically update the expired access_token.
     */
    refresh_token?: string;

    /**
     * To increase the number of simultaneous requests to the Data Lens REST API, domain sharding is used.
     * This option can be used when the Data Lens environment does not support domain sharding.
     */
    domainSharding?: string[];

    /**
     * Defines an alternative host for the Data Lens REST API URL
     */
    baseUrl?: string;

    /**
     * The ID of the Data Lens REST API query
     */
    queryId: string;

    /**
     * The query's dynamic parameters. The dynamic parameters can be used to filter data provided by the query.
     */
    queryParams?: any;

    /**
     * Names of the URI parameters that control the x/y/z of a tiled query
     */
    tileParamNames: QueryTileProvider$TileParamNames;

    /**
     * The ID for the Data Lens REST API query
     */
    queryId: string;

    /**
     * The query's dynamic parameters. The dynamic parameters can be used to filter data provided by the query.
     */
    queryParams?: string;

    /**
     * Defines how the input tile data is split by rows. You can specify this callback to define client-side aggregation and filtering. This callback is called for each tile.
     */
    dataToRows?: (
      data: datalens$Service.Service$Data,
      x: datalens$QueryTileProvider.HeatmapLayer$X,
      y: datalens$QueryTileProvider.HeatmapLayer$Y,
      zoom: datalens$QueryTileProvider.QueryTileProvider$Zoom
    ) => ObjectLayer$Row[];

    /**
     * Defines how the row is translated to the RasterLayer.TilePoint. This callback is called for each row that is returned from dataToRows.
     */
    rowToTilePoint?: (
      row: ObjectLayer$Row,
      x: HeatmapLayer$X,
      y: HeatmapLayer$Y
    ) => HeatmapLayer$TilePoint;

    /**
     * The buffer is a value (in pixels) that defines an extra area around each tile to capture data points from.
     * This is done to avoid drawing edges between tiles. For example, if data points represented with circles with a maximum radius of 10 pixels, then the buffer must be 10 pixels.
     */
    buffer?: (
      zoom: datalens$QueryTileProvider.QueryTileProvider$Zoom
    ) => number;

    /**
     * Defines how tile data is represented on a canvas. Input points for each tile are collected with respect to the buffer.
     * For progressive rendering this callback may be called more than once for the tile.
     */
    renderTile?: (
      points: HeatmapLayer$TilePoint[],
      canvas: HTMLCanvasElement,
      zoom: datalens$QueryTileProvider.QueryTileProvider$Zoom
    ) => void;

    /**
     * Defines how the input tile data is split by rows. You can specify this callback to define client-side aggregation and filtering. This callback is called for each tile.
     */
    dataToRows?: (
      data: datalens$Service.Service$Data,
      x: datalens$QueryTileProvider.HeatmapLayer$X,
      y: datalens$QueryTileProvider.HeatmapLayer$Y,
      zoom: datalens$QueryTileProvider.QueryTileProvider$Zoom
    ) => ObjectLayer$Row[];

    /**
     * Defines how the row is translated to the HeatmapLayer.TilePoint. This callback is called for each row that is returned from dataToRows.
     */
    rowToTilePoint(
      row: ObjectLayer$Row,
      x: HeatmapLayer$X,
      y: HeatmapLayer$Y
    ): HeatmapLayer$TilePoint;

    /**
     * Describes the bandwidth behavior in relation to current zoom level A numeric value sets it static across all levels
     * An Object with zoom, value and optional zoomIncrementFactor (1 equals doubling on every zoom increment) defines a behavior across all zoom levels
     * An Array of one or more zoom, value objects describes the behavior between the two defined levels and extrapolates the implied change outside of the defined range
     * Alternatively defines the level of smoothing as a function of the zoom level. The callback must return a value in pixels.
     * The cut-off of the Gaussian kernel is defined as 3 * bandwidth , a multiple (default 3) of bandwidth.
     */
    bandwidth?:
      | HeatmapLayer$Bandwidth
      | HeatmapLayer$BandwidthStop
      | HeatmapLayer$BandwidthStop[]
      | HeatmapLayer$BandwidthCallback;

    /**
     * Defines the range for the color scale as a function of the zoom level.
     * The returned value must be an array of 2 numbers.
     */
    valueRange?: (
      zoom: datalens$QueryTileProvider.QueryTileProvider$Zoom
    ) => number[];

    /**
     * Defines the range for the density alpha mask as a function of the zoom level.
     * When defined, the density alpha mask is applied. The returned value must be an array of 2 numbers.
     */
    countRange?: (
      zoom: datalens$QueryTileProvider.QueryTileProvider$Zoom
    ) => number[];

    /**
     * Defines a color palette as a function of the normalized value.
     * You can use D3.js library scale functions with the domain [0, 1].
     */
    colorScale?: (scale: number) => string;

    /**
     * Defines the alpha mask value as a function of the normalized count.
     * You can use D3.js library scale functions with the domain [0, 1] and the range [0, 1].
     */
    alphaScale?: (scale: number) => number;

    /**
     * Specifies which type of aggregation was applied (eg. type of aggregation function for bucket in the Data Lens query).
     * Possible values are SUM or AVERAGE. If the aggregation type is AVERAGE , then an averaged heat map is rendered.
     */
    aggregation?: HeatmapLayer$Aggregation;

    /**
     * Defines the scale (eg logarithmic scale) of the TilePoint value.
     * Note: if the value is not in a linear scale, then the aggregation in the source query must be defined with respect to the scale type.
     * For example, before applying the average aggregation function in a query, the value must be transformed to the linear scale. This guarantees correct linear averaging of values.
     */
    inputScale?: HeatmapLayer$InputScale;

    /**
     * Defines how the input data is split by rows. You can specify this callback to define client-side aggregation and filtering.
     */
    dataToRows?: (data: datalens$Service.Service$Data) => ObjectLayer$Row[];

    /**
     * Defines how each row is presented on the map (eg marker, polygon)
     */
    rowToMapObject(
      row: ObjectLayer$Row,
      z: datalens$QueryTileProvider.QueryTileProvider$Zoom
    ): map.Object;

    /**
     * Defines map object style and icon according to data row and zoom level.
     * Also it can define different styles depending on the StyleState (eg hovered, selected).
     */
    rowToStyle?: (
      row: ObjectLayer$Row,
      z: datalens$QueryTileProvider.QueryTileProvider$Zoom,
      styleState: ObjectLayer$StyleState
    ) => ObjectLayer$ObjectStyleOptions;

    /**
     * Defines quantization of data for improving data-driven styling performance
     */
    dataDomains?: ObjectLayer$DataDomains;

    /**
     * When present, client-side clustering is applied
     */
    clustering?: ObjectLayer$Clustering;

    /**
     * The data url to fetch
     */
    dataUrl?: string;

    /**
     * Defines how the input data is mapped to an array of GeoJSON features
     */
    dataToFeatures?: (obj: any) => SpatialLayer$Feature[];

    /**
     * Defines how GeoJSON features on a tile should be mapped to data rows, which are inputs to layers such as ObjectLayer and HeatmapLayer
     */
    featuresToRows?: (
      features: SpatialLayer$Feature[],
      x: datalens$QueryTileProvider.HeatmapLayer$X,
      y: datalens$QueryTileProvider.HeatmapLayer$Y,
      z: datalens$QueryTileProvider.QueryTileProvider$Zoom,
      tileSize: RawDataProvider$TileSize,
      helpers: RawDataProvider$Helpers
    ) => datalens$ObjectLayer.ObjectLayer$Row[];

    /**
     * Defines how the input tile data is split by rows. You can specify this callback to define client-side aggregation and filtering. This callback is called for each tile.
     */
    dataToRows?: (
      data: datalens$Service.Service$Data,
      x: datalens$QueryTileProvider.HeatmapLayer$X,
      y: datalens$QueryTileProvider.HeatmapLayer$Y,
      z: datalens$QueryTileProvider.QueryTileProvider$Zoom
    ) => ObjectLayer$Row[];

    /**
     * Defines how to get the spatial ID from a data row. This callback is called for each row that is returned from dataToRows.
     */
    rowToSpatialId(row: ObjectLayer$Row): string;

    /**
     * Defines how to get the spatial ID from a geometry feature. This callback is called for each geometry feature in the vector tile.
     */
    featureToSpatialId(feature: SpatialLayer$Feature): string;

    /**
     * Defines how the row is translated to map object style. This callback is called for each row that is returned from dataToRows.
     */
    rowToStyle(
      row: ObjectLayer$Row,
      z: datalens$QueryTileProvider.QueryTileProvider$Zoom,
      styleState: ObjectLayer$StyleState
    ): any;

    /**
     * Defines the default map object style.
     */
    defaultStyle(
      z: datalens$QueryTileProvider.QueryTileProvider$Zoom,
      styleState: ObjectLayer$StyleState
    ): any;

    /**
     * Defines how to transform the features.
     */
    SpatialLayer$transformFeature: SpatialLayer$transformFeature;

    /**
     * The name of the layer to fetch with the Data Lens REST API query
     */
    layerName: string;

    /**
     * The query's dynamic parameters. The dynamic parameters can be used to filter data provided by the query.
     */
    queryParams?: any;
  }

  /**
   * A GeoJSON feature
   * A GeoJSON feature object which conforms to the standard GeoJSON spec
   */
  declare type RawDataProvider$Feature = any;

  /**
   * Tile size
   * The tile size in pixels.
   */
  declare type RawDataProvider$TileSize = any;

  /**
   * A helper class used in the worker thread
   * This helper class provides convenience functions you can use in the worker thread
   */
  declare interface RawDataProvider$Helpers {
    /**
     * Translates geographical coordinates (latitude, longitude) to world pixel coordinates.
     */
    latLngToPixel?: (
      latitude: RawDataProvider$Latitude,
      longitude: RawDataProvider$Longitude,
      z: datalens$QueryTileProvider.QueryTileProvider$Zoom,
      tileSize: RawDataProvider$TileSize
    ) => RawDataProvider$PixelCoordinates;

    /**
     * Translates world pixel coordinates to geographical coordinates (latitude, longitude).
     */
    pixelToLatLng?: (
      x: RawDataProvider$PX,
      y: RawDataProvider$PY,
      z: datalens$QueryTileProvider.QueryTileProvider$Zoom,
      tileSize: RawDataProvider$TileSize
    ) => RawDataProvider$GeoCoordinates;

    /**
     * Takes CSV data as input, parses it, and return the parsed result.
     */
    parseCSV?: (obj: any) => any[];
  }

  /**
   * Geographic coordinates
   * A geographic coordinates pair [lat, lng]
   */
  declare type RawDataProvider$GeoCoordinates = [number, number];

  /**
   * Latitude coordinate
   * The latitude in the geographic coordinates pair
   */
  declare type RawDataProvider$Latitude = number;

  /**
   * Longitude coordinate
   * The longitude in the geographic coordinates pair
   */
  declare type RawDataProvider$Longitude = number;

  /**
   * Pixel coordinates
   * Pixel coordinates [px, py] pair
   */
  declare type RawDataProvider$PixelCoordinates = [number, number];

  /**
   * Pixel coordinate in the x direction
   * The x coordinate of the pixel coordinates pair [px, py]
   */
  declare type RawDataProvider$PX = number;

  /**
   * Pixel coordinate in the y direction
   * The y coordinate of the pixel coordinates pair [px, py]
   */
  declare type RawDataProvider$PY = number;

  /**
   * Renders vector tiles using data-driven styles
   * This layer binds the spatial data and user data, all provided by the Data Lens REST API. The layer renders geometry features using data-driven styles.
   */
  declare class datalens$SpatialLayer mixins undefined.TileLayer {
    /**
     * Constructor
     * @param dataProvider - Source of tiled data (pass in null if data come from feature properties)
     * @param spatialProvider - Source of geometry data
     * @param options - Configuration for data processing and rendering
     */
    constructor(
      dataProvider: datalens$Provider,
      spatialProvider: datalens$SpatialTileProvider,
      options: datalens$SpatialLayer.RawDataProvider$Options
    ): this;
    static DEFAULT_STATE: any;
    static Spatial: any;

    /**
     * Default value for dataToRows callback option. It represents each row as an object where property names correspond to data column names.
     */
    static defaultDataToRows: any;

    /**
     * Forces re-rendering of the layer. When the callbacks passed to the layer options are not pure functions, you can call this method to force re-rendering.
     */
    redraw(): void;

    /**
     * This method changes the state of a map object; for example, style on mouse event.
     */
    updateSpatialStyle(
      spatial: map.Object,
      state: datalens$SpatialLayer.ObjectLayer$StyleState
    ): void;
  }

  /**
   * Overrides the Service configuration
   * Normally the Service instance is configured with the service.Platform instance.
   * This configuration can be overridden by specifying these options.
   * It can be useful when the Data Lens environment is different from the HERE Platform environment.
   */
  declare interface SpatialLayer$Options {
    /**
     * Subdomain of the Data Lens REST API URL
     */
    subDomain?: string;

    /**
     * Pathname prefix of the Data Lens REST API endpoints
     */
    version?: string;

    /**
     * The token used to authenticate all requests
     */
    access_token?: string;

    /**
     * The token used to fetch a new access token after the previous access token has expired.
     * When refresh_token is provided, Service will automatically update the expired access_token.
     */
    refresh_token?: string;

    /**
     * To increase the number of simultaneous requests to the Data Lens REST API, domain sharding is used.
     * This option can be used when the Data Lens environment does not support domain sharding.
     */
    domainSharding?: string[];

    /**
     * Defines an alternative host for the Data Lens REST API URL
     */
    baseUrl?: string;

    /**
     * The ID of the Data Lens REST API query
     */
    queryId: string;

    /**
     * The query's dynamic parameters. The dynamic parameters can be used to filter data provided by the query.
     */
    queryParams?: any;

    /**
     * Names of the URI parameters that control the x/y/z of a tiled query
     */
    tileParamNames: QueryTileProvider$TileParamNames;

    /**
     * The ID for the Data Lens REST API query
     */
    queryId: string;

    /**
     * The query's dynamic parameters. The dynamic parameters can be used to filter data provided by the query.
     */
    queryParams?: string;

    /**
     * Defines how the input tile data is split by rows. You can specify this callback to define client-side aggregation and filtering. This callback is called for each tile.
     */
    dataToRows?: (
      data: datalens$Service.Service$Data,
      x: datalens$QueryTileProvider.HeatmapLayer$X,
      y: datalens$QueryTileProvider.HeatmapLayer$Y,
      zoom: datalens$QueryTileProvider.QueryTileProvider$Zoom
    ) => ObjectLayer$Row[];

    /**
     * Defines how the row is translated to the RasterLayer.TilePoint. This callback is called for each row that is returned from dataToRows.
     */
    rowToTilePoint?: (
      row: ObjectLayer$Row,
      x: HeatmapLayer$X,
      y: HeatmapLayer$Y
    ) => HeatmapLayer$TilePoint;

    /**
     * The buffer is a value (in pixels) that defines an extra area around each tile to capture data points from.
     * This is done to avoid drawing edges between tiles. For example, if data points represented with circles with a maximum radius of 10 pixels, then the buffer must be 10 pixels.
     */
    buffer?: (
      zoom: datalens$QueryTileProvider.QueryTileProvider$Zoom
    ) => number;

    /**
     * Defines how tile data is represented on a canvas. Input points for each tile are collected with respect to the buffer.
     * For progressive rendering this callback may be called more than once for the tile.
     */
    renderTile?: (
      points: HeatmapLayer$TilePoint[],
      canvas: HTMLCanvasElement,
      zoom: datalens$QueryTileProvider.QueryTileProvider$Zoom
    ) => void;

    /**
     * Defines how the input tile data is split by rows. You can specify this callback to define client-side aggregation and filtering. This callback is called for each tile.
     */
    dataToRows?: (
      data: datalens$Service.Service$Data,
      x: datalens$QueryTileProvider.HeatmapLayer$X,
      y: datalens$QueryTileProvider.HeatmapLayer$Y,
      zoom: datalens$QueryTileProvider.QueryTileProvider$Zoom
    ) => ObjectLayer$Row[];

    /**
     * Defines how the row is translated to the HeatmapLayer.TilePoint. This callback is called for each row that is returned from dataToRows.
     */
    rowToTilePoint(
      row: ObjectLayer$Row,
      x: HeatmapLayer$X,
      y: HeatmapLayer$Y
    ): HeatmapLayer$TilePoint;

    /**
     * Describes the bandwidth behavior in relation to current zoom level A numeric value sets it static across all levels
     * An Object with zoom, value and optional zoomIncrementFactor (1 equals doubling on every zoom increment) defines a behavior across all zoom levels
     * An Array of one or more zoom, value objects describes the behavior between the two defined levels and extrapolates the implied change outside of the defined range
     * Alternatively defines the level of smoothing as a function of the zoom level. The callback must return a value in pixels.
     * The cut-off of the Gaussian kernel is defined as 3 * bandwidth , a multiple (default 3) of bandwidth.
     */
    bandwidth?:
      | HeatmapLayer$Bandwidth
      | HeatmapLayer$BandwidthStop
      | HeatmapLayer$BandwidthStop[]
      | HeatmapLayer$BandwidthCallback;

    /**
     * Defines the range for the color scale as a function of the zoom level.
     * The returned value must be an array of 2 numbers.
     */
    valueRange?: (
      zoom: datalens$QueryTileProvider.QueryTileProvider$Zoom
    ) => number[];

    /**
     * Defines the range for the density alpha mask as a function of the zoom level.
     * When defined, the density alpha mask is applied. The returned value must be an array of 2 numbers.
     */
    countRange?: (
      zoom: datalens$QueryTileProvider.QueryTileProvider$Zoom
    ) => number[];

    /**
     * Defines a color palette as a function of the normalized value.
     * You can use D3.js library scale functions with the domain [0, 1].
     */
    colorScale?: (scale: number) => string;

    /**
     * Defines the alpha mask value as a function of the normalized count.
     * You can use D3.js library scale functions with the domain [0, 1] and the range [0, 1].
     */
    alphaScale?: (scale: number) => number;

    /**
     * Specifies which type of aggregation was applied (eg. type of aggregation function for bucket in the Data Lens query).
     * Possible values are SUM or AVERAGE. If the aggregation type is AVERAGE , then an averaged heat map is rendered.
     */
    aggregation?: HeatmapLayer$Aggregation;

    /**
     * Defines the scale (eg logarithmic scale) of the TilePoint value.
     * Note: if the value is not in a linear scale, then the aggregation in the source query must be defined with respect to the scale type.
     * For example, before applying the average aggregation function in a query, the value must be transformed to the linear scale. This guarantees correct linear averaging of values.
     */
    inputScale?: HeatmapLayer$InputScale;

    /**
     * Defines how the input data is split by rows. You can specify this callback to define client-side aggregation and filtering.
     */
    dataToRows?: (data: datalens$Service.Service$Data) => ObjectLayer$Row[];

    /**
     * Defines how each row is presented on the map (eg marker, polygon)
     */
    rowToMapObject(
      row: ObjectLayer$Row,
      z: datalens$QueryTileProvider.QueryTileProvider$Zoom
    ): map.Object;

    /**
     * Defines map object style and icon according to data row and zoom level.
     * Also it can define different styles depending on the StyleState (eg hovered, selected).
     */
    rowToStyle?: (
      row: ObjectLayer$Row,
      z: datalens$QueryTileProvider.QueryTileProvider$Zoom,
      styleState: ObjectLayer$StyleState
    ) => ObjectLayer$ObjectStyleOptions;

    /**
     * Defines quantization of data for improving data-driven styling performance
     */
    dataDomains?: ObjectLayer$DataDomains;

    /**
     * When present, client-side clustering is applied
     */
    clustering?: ObjectLayer$Clustering;

    /**
     * The data url to fetch
     */
    dataUrl?: string;

    /**
     * Defines how the input data is mapped to an array of GeoJSON features
     */
    dataToFeatures?: (obj: any) => RawDataProvider$Feature[];

    /**
     * Defines how GeoJSON features on a tile should be mapped to data rows, which are inputs to layers such as ObjectLayer and HeatmapLayer
     */
    featuresToRows?: (
      features: RawDataProvider$Feature[],
      x: datalens$QueryTileProvider.HeatmapLayer$X,
      y: datalens$QueryTileProvider.HeatmapLayer$Y,
      z: datalens$QueryTileProvider.QueryTileProvider$Zoom,
      tileSize: RawDataProvider$TileSize,
      helpers: RawDataProvider$Helpers
    ) => datalens$ObjectLayer.ObjectLayer$Row[];

    /**
     * Defines how the input tile data is split by rows. You can specify this callback to define client-side aggregation and filtering. This callback is called for each tile.
     */
    dataToRows?: (
      data: datalens$Service.Service$Data,
      x: datalens$QueryTileProvider.HeatmapLayer$X,
      y: datalens$QueryTileProvider.HeatmapLayer$Y,
      z: datalens$QueryTileProvider.QueryTileProvider$Zoom
    ) => ObjectLayer$Row[];

    /**
     * Defines how to get the spatial ID from a data row. This callback is called for each row that is returned from dataToRows.
     */
    rowToSpatialId(row: ObjectLayer$Row): string;

    /**
     * Defines how to get the spatial ID from a geometry feature. This callback is called for each geometry feature in the vector tile.
     */
    featureToSpatialId(feature: RawDataProvider$Feature): string;

    /**
     * Defines how the row is translated to map object style. This callback is called for each row that is returned from dataToRows.
     */
    rowToStyle(
      row: ObjectLayer$Row,
      z: datalens$QueryTileProvider.QueryTileProvider$Zoom,
      styleState: ObjectLayer$StyleState
    ): any;

    /**
     * Defines the default map object style.
     */
    defaultStyle(
      z: datalens$QueryTileProvider.QueryTileProvider$Zoom,
      styleState: ObjectLayer$StyleState
    ): any;

    /**
     * Defines how to transform the features.
     */
    SpatialLayer$transformFeature: SpatialLayer$transformFeature;

    /**
     * The name of the layer to fetch with the Data Lens REST API query
     */
    layerName: string;

    /**
     * The query's dynamic parameters. The dynamic parameters can be used to filter data provided by the query.
     */
    queryParams?: any;
  }

  /**
   * User defined modification of a data-driven style
   * StyleState appears as a parameter in the rowToStyle callback. By default it is 'DEFAULT_STATE'. To change StyleState, use the ObjectLayer.updateObjectStyle method.
   */
  declare type SpatialLayer$StyleState = any;

  /**
   * Slice of data (eg Data Lens query data row) that represents a data point.
   * Each row is transformed into TilePoint and passed to renderTile callback. By default each row is an Object where property names correspond to data column names.
   * This representation can be changed with the dataToRows callback.
   */
  declare type SpatialLayer$Row = number;

  /**
   * A GeoJSON feature
   * A GeoJSON feature object which conforms to the standard GeoJSON spec
   */
  declare type SpatialLayer$Feature = any;

  /**
   * TODO: missing in documentation: https://developer.here.com/visualization/documentation/datalens/h-datalens-spatiallayer-options.html
   */
  declare type SpatialLayer$transformFeature = any;

  /**
   * Specifies how to access layer data (shapes, geometries) using the Data Lens REST API.
   * This provider defines the interface for accessing shape layers via the Data Lens REST API. The input data is provided as vector tiles in the MapBox format (Protobuf).
   * Data is loaded by tiles.
   */
  declare class datalens$SpatialTileProvider
    mixins undefined.RemoteTileProvider {
    /**
     * Constructor
     * @param service - Data Lens REST API service
     * @param options - Configures layer name
     */
    constructor(
      service: datalens$Service,
      options: datalens$SpatialTileProvider.SpatialLayer$Options
    ): this;
    static VectorTile: any;

    /**
     * Updates the layer name to be used in the next call of the Data Lens REST API. Note that new data will be fetched only after the reload method is called.
     */
    setLayerName(layerName: string): void;

    /**
     * Updates the query's dynamic parameters to be used in the next call of the Data Lens REST API. Note that new data will be fetched only after the reload method is called.
     * This method is normally used when updating your visualization.
     */
    setQueryParams(queryParams: any | null): void;
  }

  /**
   * Overrides the Service configuration
   * Normally the Service instance is configured with the service.Platform instance.
   * This configuration can be overridden by specifying these options.
   * It can be useful when the Data Lens environment is different from the HERE Platform environment.
   */
  declare interface SpatialTileProvider$Options {
    /**
     * Subdomain of the Data Lens REST API URL
     */
    subDomain?: string;

    /**
     * Pathname prefix of the Data Lens REST API endpoints
     */
    version?: string;

    /**
     * The token used to authenticate all requests
     */
    access_token?: string;

    /**
     * The token used to fetch a new access token after the previous access token has expired.
     * When refresh_token is provided, Service will automatically update the expired access_token.
     */
    refresh_token?: string;

    /**
     * To increase the number of simultaneous requests to the Data Lens REST API, domain sharding is used.
     * This option can be used when the Data Lens environment does not support domain sharding.
     */
    domainSharding?: string[];

    /**
     * Defines an alternative host for the Data Lens REST API URL
     */
    baseUrl?: string;

    /**
     * The ID of the Data Lens REST API query
     */
    queryId: string;

    /**
     * The query's dynamic parameters. The dynamic parameters can be used to filter data provided by the query.
     */
    queryParams?: any;

    /**
     * Names of the URI parameters that control the x/y/z of a tiled query
     */
    tileParamNames: QueryTileProvider$TileParamNames;

    /**
     * The ID for the Data Lens REST API query
     */
    queryId: string;

    /**
     * The query's dynamic parameters. The dynamic parameters can be used to filter data provided by the query.
     */
    queryParams?: string;

    /**
     * Defines how the input tile data is split by rows. You can specify this callback to define client-side aggregation and filtering. This callback is called for each tile.
     */
    dataToRows?: (
      data: datalens$Service.Service$Data,
      x: datalens$QueryTileProvider.HeatmapLayer$X,
      y: datalens$QueryTileProvider.HeatmapLayer$Y,
      zoom: datalens$QueryTileProvider.QueryTileProvider$Zoom
    ) => SpatialLayer$Row[];

    /**
     * Defines how the row is translated to the RasterLayer.TilePoint. This callback is called for each row that is returned from dataToRows.
     */
    rowToTilePoint?: (
      row: SpatialLayer$Row,
      x: HeatmapLayer$X,
      y: HeatmapLayer$Y
    ) => HeatmapLayer$TilePoint;

    /**
     * The buffer is a value (in pixels) that defines an extra area around each tile to capture data points from.
     * This is done to avoid drawing edges between tiles. For example, if data points represented with circles with a maximum radius of 10 pixels, then the buffer must be 10 pixels.
     */
    buffer?: (
      zoom: datalens$QueryTileProvider.QueryTileProvider$Zoom
    ) => number;

    /**
     * Defines how tile data is represented on a canvas. Input points for each tile are collected with respect to the buffer.
     * For progressive rendering this callback may be called more than once for the tile.
     */
    renderTile?: (
      points: HeatmapLayer$TilePoint[],
      canvas: HTMLCanvasElement,
      zoom: datalens$QueryTileProvider.QueryTileProvider$Zoom
    ) => void;

    /**
     * Defines how the input tile data is split by rows. You can specify this callback to define client-side aggregation and filtering. This callback is called for each tile.
     */
    dataToRows?: (
      data: datalens$Service.Service$Data,
      x: datalens$QueryTileProvider.HeatmapLayer$X,
      y: datalens$QueryTileProvider.HeatmapLayer$Y,
      zoom: datalens$QueryTileProvider.QueryTileProvider$Zoom
    ) => SpatialLayer$Row[];

    /**
     * Defines how the row is translated to the HeatmapLayer.TilePoint. This callback is called for each row that is returned from dataToRows.
     */
    rowToTilePoint(
      row: SpatialLayer$Row,
      x: HeatmapLayer$X,
      y: HeatmapLayer$Y
    ): HeatmapLayer$TilePoint;

    /**
     * Describes the bandwidth behavior in relation to current zoom level A numeric value sets it static across all levels
     * An Object with zoom, value and optional zoomIncrementFactor (1 equals doubling on every zoom increment) defines a behavior across all zoom levels
     * An Array of one or more zoom, value objects describes the behavior between the two defined levels and extrapolates the implied change outside of the defined range
     * Alternatively defines the level of smoothing as a function of the zoom level. The callback must return a value in pixels.
     * The cut-off of the Gaussian kernel is defined as 3 * bandwidth , a multiple (default 3) of bandwidth.
     */
    bandwidth?:
      | HeatmapLayer$Bandwidth
      | HeatmapLayer$BandwidthStop
      | HeatmapLayer$BandwidthStop[]
      | HeatmapLayer$BandwidthCallback;

    /**
     * Defines the range for the color scale as a function of the zoom level.
     * The returned value must be an array of 2 numbers.
     */
    valueRange?: (
      zoom: datalens$QueryTileProvider.QueryTileProvider$Zoom
    ) => number[];

    /**
     * Defines the range for the density alpha mask as a function of the zoom level.
     * When defined, the density alpha mask is applied. The returned value must be an array of 2 numbers.
     */
    countRange?: (
      zoom: datalens$QueryTileProvider.QueryTileProvider$Zoom
    ) => number[];

    /**
     * Defines a color palette as a function of the normalized value.
     * You can use D3.js library scale functions with the domain [0, 1].
     */
    colorScale?: (scale: number) => string;

    /**
     * Defines the alpha mask value as a function of the normalized count.
     * You can use D3.js library scale functions with the domain [0, 1] and the range [0, 1].
     */
    alphaScale?: (scale: number) => number;

    /**
     * Specifies which type of aggregation was applied (eg. type of aggregation function for bucket in the Data Lens query).
     * Possible values are SUM or AVERAGE. If the aggregation type is AVERAGE , then an averaged heat map is rendered.
     */
    aggregation?: HeatmapLayer$Aggregation;

    /**
     * Defines the scale (eg logarithmic scale) of the TilePoint value.
     * Note: if the value is not in a linear scale, then the aggregation in the source query must be defined with respect to the scale type.
     * For example, before applying the average aggregation function in a query, the value must be transformed to the linear scale. This guarantees correct linear averaging of values.
     */
    inputScale?: HeatmapLayer$InputScale;

    /**
     * Defines how the input data is split by rows. You can specify this callback to define client-side aggregation and filtering.
     */
    dataToRows?: (data: datalens$Service.Service$Data) => SpatialLayer$Row[];

    /**
     * Defines how each row is presented on the map (eg marker, polygon)
     */
    rowToMapObject(
      row: SpatialLayer$Row,
      z: datalens$QueryTileProvider.QueryTileProvider$Zoom
    ): map.Object;

    /**
     * Defines map object style and icon according to data row and zoom level.
     * Also it can define different styles depending on the StyleState (eg hovered, selected).
     */
    rowToStyle?: (
      row: SpatialLayer$Row,
      z: datalens$QueryTileProvider.QueryTileProvider$Zoom,
      styleState: SpatialLayer$StyleState
    ) => ObjectLayer$ObjectStyleOptions;

    /**
     * Defines quantization of data for improving data-driven styling performance
     */
    dataDomains?: ObjectLayer$DataDomains;

    /**
     * When present, client-side clustering is applied
     */
    clustering?: ObjectLayer$Clustering;

    /**
     * The data url to fetch
     */
    dataUrl?: string;

    /**
     * Defines how the input data is mapped to an array of GeoJSON features
     */
    dataToFeatures?: (obj: any) => SpatialLayer$Feature[];

    /**
     * Defines how GeoJSON features on a tile should be mapped to data rows, which are inputs to layers such as ObjectLayer and HeatmapLayer
     */
    featuresToRows?: (
      features: SpatialLayer$Feature[],
      x: datalens$QueryTileProvider.HeatmapLayer$X,
      y: datalens$QueryTileProvider.HeatmapLayer$Y,
      z: datalens$QueryTileProvider.QueryTileProvider$Zoom,
      tileSize: RawDataProvider$TileSize,
      helpers: RawDataProvider$Helpers
    ) => datalens$ObjectLayer.SpatialLayer$Row[];

    /**
     * Defines how the input tile data is split by rows. You can specify this callback to define client-side aggregation and filtering. This callback is called for each tile.
     */
    dataToRows?: (
      data: datalens$Service.Service$Data,
      x: datalens$QueryTileProvider.HeatmapLayer$X,
      y: datalens$QueryTileProvider.HeatmapLayer$Y,
      z: datalens$QueryTileProvider.QueryTileProvider$Zoom
    ) => SpatialLayer$Row[];

    /**
     * Defines how to get the spatial ID from a data row. This callback is called for each row that is returned from dataToRows.
     */
    rowToSpatialId(row: SpatialLayer$Row): string;

    /**
     * Defines how to get the spatial ID from a geometry feature. This callback is called for each geometry feature in the vector tile.
     */
    featureToSpatialId(feature: SpatialLayer$Feature): string;

    /**
     * Defines how the row is translated to map object style. This callback is called for each row that is returned from dataToRows.
     */
    rowToStyle(
      row: SpatialLayer$Row,
      z: datalens$QueryTileProvider.QueryTileProvider$Zoom,
      styleState: SpatialLayer$StyleState
    ): any;

    /**
     * Defines the default map object style.
     */
    defaultStyle(
      z: datalens$QueryTileProvider.QueryTileProvider$Zoom,
      styleState: SpatialLayer$StyleState
    ): any;

    /**
     * Defines how to transform the features.
     */
    SpatialLayer$transformFeature: SpatialLayer$transformFeature;

    /**
     * The name of the layer to fetch with the Data Lens REST API query
     */
    layerName: string;

    /**
     * The query's dynamic parameters. The dynamic parameters can be used to filter data provided by the query.
     */
    queryParams?: any;
  }
}
