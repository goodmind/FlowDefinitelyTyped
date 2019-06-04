declare module "amap-js-api-city-search" {
  declare var AMap: typeof npm$namespace$AMap;

  declare var npm$namespace$AMap: {
    CitySearch: typeof AMap$CitySearch
  };
  declare interface AMap$CitySearch$EventMap {
    complete: Event<"complete", AMap$CitySearch$SearchResult>;
    error: Event<
      "error",
      {
        info: string
      }
    >;
  }

  declare interface AMap$CitySearch$SearchResult {
    /**
     * 城市名称
     */
    city: string;
    rectangle: string;

    /**
     * 城市范围
     */
    bounds: Bounds;

    /**
     * 成功信息
     */
    info: string;

    /**
     * 地区编号
     */
    adcode: string;

    /**
     * 查询信息码
     */
    infocode: string;

    /**
     * 省份
     */
    province: string;

    /**
     * 查询状态
     */
    status: string;
  }

  declare type AMap$CitySearch$SearchStatus = "error" | "complete" | "no_data";

  /**
   * 根据IP返回对应城市信息
   */
  declare class AMap$CitySearch mixins EventEmitter {
    /**
     * 自动获取用户IP，回调返回当前用户所在城市
     * @param callback 查询回调
     */
    getLocalCity(
      callback: (
        status: AMap$CitySearch$SearchStatus,
        result: AMap$CitySearch$SearchResult | string
      ) => void
    ): void;

    /**
     * 根据输入IP地址返回对应城市信息
     * @param ip IP
     * @param callback 查询回调
     */
    getCityByIp(
      ip: string,
      callback: (
        status: AMap$CitySearch$SearchStatus,
        result: AMap$CitySearch$SearchResult | string
      ) => void
    ): void;
  }
}
