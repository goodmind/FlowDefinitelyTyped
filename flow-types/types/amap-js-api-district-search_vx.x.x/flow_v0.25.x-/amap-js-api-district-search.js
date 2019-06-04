declare module "amap-js-api-district-search" {
  declare var AMap: typeof npm$namespace$AMap;

  declare var npm$namespace$AMap: {
    DistrictSearch: typeof AMap$DistrictSearch
  };
  declare interface AMap$DistrictSearch$EventMap {
    error: Event<
      "error",
      {
        info: string
      }
    >;
    complete: Event<"complete", AMap$DistrictSearch$SearchResult>;
  }

  declare type AMap$DistrictSearch$Level =
    | "country"
    | "province"
    | "city"
    | "district"
    | "biz_area";

  declare interface AMap$DistrictSearch$Options {
    /**
     * 关键字对应的行政区级别或商圈
     */
    level?: AMap$DistrictSearch$Level;

    /**
     * 是否显示商圈
     */
    showbiz?: boolean;

    /**
     * 是否返回行政区边界坐标点
     */
    extensions?: "base" | "all";

    /**
     * 显示下级行政区级数
     * 0：不返回下级行政区
     * 1：返回下一级行政区
     * 2：返回下两级行政区
     * 3：返回下三级行政区
     */
    subdistrict?: 0 | 1 | 2 | 3;
  }

  declare interface AMap$DistrictSearch$District {
    /**
     * 行政区名称
     */
    name: string;

    /**
     * 中心点经纬度坐标
     */
    center: LngLat;

    /**
     * 城市编码
     */
    citycode: string;

    /**
     * 区域编码
     */
    adcode: string;

    /**
     * 行政区划级别
     */
    level: AMap$DistrictSearch$Level;

    /**
     * 边界坐标集合
     */
    boundaries?: LngLat[][];

    /**
     * 下级行政区信息列表
     */
    districtList?: AMap$DistrictSearch$District[];
  }

  declare interface AMap$DistrictSearch$SearchResult {
    /**
     * 成功状态文字描述
     */
    info: string;

    /**
     * 行政区划列表
     */
    districtList: AMap$DistrictSearch$District[];
  }

  declare type AMap$DistrictSearch$SearchStatus =
    | "complete"
    | "error"
    | "no_data";

  declare class AMap$DistrictSearch mixins EventEmitter {
    /**
     * 行政区查询
     * @param options 选项
     */
    constructor(options?: AMap$DistrictSearch$Options): this;

    /**
     * 根据关键字查询行政区或商圈信息
     * @param keyword 关键词
     * @param callback 回调
     */
    search(
      keyword: string,
      callback: (
        status: AMap$DistrictSearch$SearchStatus,
        result: AMap$DistrictSearch$SearchResult | string
      ) => void
    ): void;

    /**
     * 设置关键字对应的行政区级别或商圈
     * @param level 级别
     */
    setLevel(level?: AMap$DistrictSearch$Level): void;

    /**
     * 设置下级行政区级数
     * @param district 级数
     */
    setSubdistrict(district?: 0 | 1 | 2 | 3): void;
    setExtensions(extensions?: boolean): void;
  }
}
