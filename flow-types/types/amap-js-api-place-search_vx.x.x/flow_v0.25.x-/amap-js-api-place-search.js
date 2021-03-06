declare module "amap-js-api-place-search" {
  declare var AMap: typeof npm$namespace$AMap;

  declare var npm$namespace$AMap: {
    PlaceSearch: typeof AMap$PlaceSearch
  };
  declare interface AMap$PlaceSearch$EventMap {
    complete: Event<"complete", AMap$PlaceSearch$SearchResult>;
    error: Event<
      "error",
      {
        info: string
      }
    >;
    selectChanged: Event<
      "selectChanged",
      {
        selected:
          | AMap$PlaceSearch$SelectChangeEventData
          | $PropertyType<AMap$PlaceSearch$EventMap, "markerClick">
          | $PropertyType<AMap$PlaceSearch$EventMap, "listElementClick">,
        lastSelected:
          | AMap$PlaceSearch$SelectChangeEventData
          | $PropertyType<AMap$PlaceSearch$EventMap, "markerClick">
          | $PropertyType<AMap$PlaceSearch$EventMap, "listElementClick">
          | null
      }
    >;
    listElementClick: AMap$PlaceSearch$SelectChangeEvent<
      "listElementClick",
      MouseEvent
    >;
    markerClick: AMap$PlaceSearch$SelectChangeEvent<
      "markerClick",
      $PropertyType<Marker.EventMap, "click">
    >;
    renderComplete: Event<
      "renderComplete",
      {
        result: AMap$PlaceSearch$SelectChangeEventData[],
        markers: Marker[],
        listElements: HTMLElement[]
      }
    >;
    infoWindowClick: Event<
      "infoWindowClick",
      AMap$PlaceSearch$SelectChangeEventData & {
        event: MouseEvent,
        infoWindow: InfoWindow,
        infoWindowContentDom: HTMLDivElement
      }
    >;
    willClear: Event<
      "willClear",
      {
        id: string,
        index: number,
        data: AMap$PlaceSearch$Poi[]
      }
    >;
    markerDestoryed: Event<
      "markerDestoryed",
      AMap$PlaceSearch$SelectChangeEventData
    >;
    listElementDetroyed: Event<
      "listElementDetroyed",
      AMap$PlaceSearch$SelectChangeEventData
    >;
  }

  declare interface AMap$PlaceSearch$SelectChangeEventData {
    /**
     * 当前选中的POI的ID
     */
    id: string;

    /**
     * 索引
     */
    index: number;

    /**
     * 当前选中的POI对应的在地图中的Marker对象
     */
    marker: Marker;

    /**
     * 当前选中的POI在结果面板中对应的列表项
     */
    listElement: HTMLLIElement;

    /**
     * 当前选中的POI的信息
     */
    data: AMap$PlaceSearch$Poi[];
  }

  declare type AMap$PlaceSearch$SelectChangeEvent<N: string, E> = Event<
    N,
    AMap$PlaceSearch$SelectChangeEventData & {
      event: E
    }
  >;

  declare interface AMap$PlaceSearch$PoiPhoto {
    /**
     * 图片名称
     */
    title: string;

    /**
     * 图片url
     */
    url: string;
  }

  declare interface AMap$PlaceSearch$PoiBase {
    /**
     * 全局唯一ID
     */
    id: string;

    /**
     * 名称
     */
    name: string;

    /**
     * 兴趣点类型
     */
    type: string;

    /**
     * 兴趣点经纬度
     */
    location: LngLat | null;

    /**
     * 地址
     */
    address: string;

    /**
     * 离中心点距离
     */
    distance: number;

    /**
     * 电话
     */
    tel: string;
    shopinfo: string;
    children?: any[];
  }

  declare interface AMap$PlaceSearch$Groupbuy {
    /**
     * 团购标题
     */
    title: string;

    /**
     * 团购分类代码
     */
    type_code: string;

    /**
     * 团购分类
     */
    type: string;

    /**
     * 团购详情
     */
    detail: string;

    /**
     * 团购开始时间
     */
    stime: string;

    /**
     * 团购结束时间
     */
    etime: string;

    /**
     * 团购总量
     */
    count: number;

    /**
     * 已卖出数量
     */
    sold_num: number;

    /**
     * 原价
     */
    original_price: number;

    /**
     * 折扣价
     */
    groupbuy_price: number;

    /**
     * 折扣
     */
    discount: number;

    /**
     * 取票地址
     */
    ticket_address: string;

    /**
     * 取票电话
     */
    ticket_tel: string;

    /**
     * 图片信息
     */
    photos: AMap$PlaceSearch$PoiPhoto[];

    /**
     * 来源url
     */
    url: string;

    /**
     * 来源标识
     */
    provider: string;
  }

  declare interface AMap$PlaceSearch$Discount {
    /**
     * 优惠标题
     */
    title: string;

    /**
     * 优惠详情
     */
    detail: string;

    /**
     * 开始时间
     */
    start_time: string;

    /**
     * 结束时间
     */
    end_time: string;

    /**
     * 已卖出数量
     */
    sold_num: number;

    /**
     * 图片信息列表
     */
    photos: AMap$PlaceSearch$PoiPhoto[];

    /**
     * 来源url
     */
    url: string;

    /**
     * 来源标识
     */
    provider: string;
  }

  declare interface AMap$PlaceSearch$Cinema {
    /**
     * 简介
     */
    intro: string;

    /**
     * 综合评分
     */
    rating: string;

    /**
     * 信息来源
     */
    deep_src: string;

    /**
     * 停车场设施
     */
    parking: string;

    /**
     * 规范格式的营业时间
     */
    opentime_GDF: string;

    /**
     * 非规范格式的营业时间
     */
    opentime: string;

    /**
     * 图片信息列表
     */
    photos: AMap$PlaceSearch$PoiPhoto[];
  }

  declare interface AMap$PlaceSearch$Dining {
    /**
     * 菜系
     */
    cuisines: string;

    /**
     * 标签
     */
    tag: string;

    /**
     * 简介
     */
    intro: string;

    /**
     * 综合评分
     */
    rating: string;

    /**
     * 单数据源的评分
     */
    cp_rating: string;

    /**
     * 信息来源
     */
    deep_src: string;

    /**
     * 口味评分
     */
    taste_rating: string;

    /**
     * 环境评分
     */
    environment_rating: string;

    /**
     * 服务评分
     */
    service_rating: string;

    /**
     * 人均消费
     */
    cost: string;

    /**
     * 特色菜
     */
    recommend: string;

    /**
     * 氛围
     */
    atmosphere: string;

    /**
     * 订餐wap链接
     */
    ordering_wap_url: string;

    /**
     * 订餐web链接
     */
    ordering_web_url: string;

    /**
     * 订餐APP URL
     */
    ordering_app_url: string;

    /**
     * 规范格式的营业时间
     */
    opentime_GDF: string;

    /**
     * 非规范格式的营业时间
     */
    opentime: string;

    /**
     * 餐厅特色
     */
    addition: string;

    /**
     * 图片信息列表
     */
    photos: AMap$PlaceSearch$PoiPhoto[];
  }

  declare interface AMap$PlaceSearch$Scenic {
    /**
     * 简介
     */
    intro: string;

    /**
     * 综合评分
     */
    rating: string;

    /**
     * 信息来源
     */
    deep_src: string;

    /**
     * 景区国标级别
     */
    level: string;

    /**
     * 门票价格
     */
    price: string;

    /**
     * 适合游玩的季节
     */
    season: string;

    /**
     * 推荐景点
     */
    recommend: string;

    /**
     * 景区主题
     */
    theme: string;

    /**
     * wap购票链接
     */
    ordering_wap_url: string;

    /**
     * web购票链接
     */
    ordering_web_url: string;

    /**
     * 规范格式的营业时间
     */
    opentime_GDF: string;

    /**
     * 非规范格式的营业时间
     */
    opentime: string;

    /**
     * 图片信息列表
     */
    photos: AMap$PlaceSearch$PoiPhoto[];
  }

  declare interface AMap$PlaceSearch$Hotel {
    /**
     * 综合评分
     */
    rating: string;

    /**
     * 星级
     */
    star: string;

    /**
     * 简介
     */
    intro: string;

    /**
     * 最低房价
     */
    lowest_price: string;

    /**
     * 设施评分
     */
    faci_rating: string;

    /**
     * 卫生评分
     */
    health_rating: string;

    /**
     * 环境评分
     */
    environment_rating: string;

    /**
     * 服务评分
     */
    service_rating: string;

    /**
     * 交通提示
     */
    traffic: string;

    /**
     * 特色服务
     */
    addition: string;

    /**
     * 信息来源
     */
    deep_src: string;

    /**
     * 图片信息列表
     */
    photos: AMap$PlaceSearch$PoiPhoto[];
  }

  declare type AMap$PlaceSearch$PoiExt = AMap$PlaceSearch$PoiBase & {
    /**
     * 网址
     */
    website: string,

    /**
     * 所在省份编码
     */
    pcode: string,

    /**
     * 所在城市编码
     */
    citycode: string,

    /**
     * 所在区域编码
     */
    adcode: string,

    /**
     * 邮编
     */
    postcode: string,

    /**
     * 所在省份
     */
    pname: string,

    /**
     * 所在城市名称
     */
    cityname: string,

    /**
     * 所在行政区名称
     */
    adname: string,

    /**
     * 电子邮箱
     */
    email: string,

    /**
     * 照片
     */
    photos: AMap$PlaceSearch$PoiPhoto[],

    /**
     * 入口经纬度
     */
    entr_location: LngLat | null,

    /**
     * 出口经纬度
     */
    exit_location: LngLat | null,

    /**
     * @deprecated 是否有团购信息
     */
    groupbuy: boolean,

    /**
     * @deprecated 是否有优惠信息
     */
    discount: boolean
  } & (
      | {
          indoor_map: true,
          indoor_data: {
            cpid: string,
            floor: string,
            truefloor: string
          }
        }
      | {
          indoor_map: false
        }
    ) & {
      /**
       * @deprecated 团购信息
       */
      groupbuys?: AMap$PlaceSearch$Groupbuy[],

      /**
       * @deprecated 优惠信息
       */
      discounts?: AMap$PlaceSearch$Discount[]
    } & (
      | {
          deep_type: "CINEMA",

          /**
           * @deprecated 影院类深度信息
           */
          cinema: AMap$PlaceSearch$Cinema
        }
      | {
          deep_type: "DINING",

          /**
           * @deprecated 餐饮类深度信息
           */
          dining: AMap$PlaceSearch$Dining
        }
      | {
          deep_type: "SCENIC",

          /**
           * @deprecated 景点类深度信息
           */
          scenic: AMap$PlaceSearch$Scenic
        }
      | {
          deep_type: "HOTEL",

          /**
           * @deprecated 酒店类深度信息
           */
          hotel: AMap$PlaceSearch$Hotel
        }
    );

  declare interface AMap$PlaceSearch$Options {
    /**
     * 兴趣点城市
     */
    city?: string;

    /**
     * 是否强制限制在设置的城市内搜索
     */
    citylimit?: boolean;

    /**
     * 是否按照层级展示子POI数据
     * children=1，展示子节点POI数据，children=0，不展示子节点数据
     */
    children?: number;

    /**
     * 兴趣点类别，多个类别用“|”分割
     */
    type?: string;

    /**
     * 检索语言类型
     */
    lang?: Lang;

    /**
     * 单页显示结果条数
     */
    pageSize?: number;

    /**
     * 页码
     */
    pageIndex?: number;

    /**
     * 是否返回详细信息
     * base返回基本地址信息；all返回基本+详细信息
     */
    extensions?: "base" | "all";

    /**
     * Map对象
     */
    map?: Map;

    /**
     * 结果列表的HTML容器id或容器元素
     */
    panel?: string | HTMLElement;

    /**
     * 是否在地图上显示周边搜索的圆或者范围搜索的多边形
     */
    showCover?: boolean;

    /**
     * 绘制的UI风格
     */
    renderStyle?: "newpc" | "default";

    /**
     * 是否自动调整地图视野使绘制的Marker点都处于视口的可见范围
     */
    autoFitView?: boolean;
    renderEngine?: string;
    rankBy?: string;
  }

  declare interface AMap$PlaceSearch$PoiList {
    /**
     * Poi列表
     */
    pois: AMap$PlaceSearch$Poi[];

    /**
     * 页码
     */
    pageIndex: number;

    /**
     * 单页结果数
     */
    pageSize: number;

    /**
     * 查询结果总数
     */
    count: number;
  }

  declare interface AMap$PlaceSearch$CityInfo {
    /**
     * 建议城市名称
     */
    name: string;

    /**
     * 城市编码
     */
    citycode: string;

    /**
     * 行政区编码
     */
    adcode: string;

    /**
     * 该城市的建议结果数目
     */
    count: number;
  }

  declare interface AMap$PlaceSearch$SearchResult {
    /**
     * 成功状态说明
     */
    info: string;

    /**
     * 兴趣点列表
     */
    poiList: AMap$PlaceSearch$PoiList;

    /**
     * 建议关键字列表
     */
    keywordList?: string[];

    /**
     * 城市建议列表
     */
    cityList?: AMap$PlaceSearch$CityInfo[];
  }

  declare type AMap$PlaceSearch$Poi =
    | AMap$PlaceSearch$PoiBase
    | AMap$PlaceSearch$PoiExt;

  declare type AMap$PlaceSearch$SearchStatus = "complete" | "error" | "no_data";

  declare class AMap$PlaceSearch mixins EventEmitter {
    /**
     * 地点搜索服务
     * @param options 选项
     */
    constructor(options?: AMap$PlaceSearch$Options): this;

    /**
     * 根据关键字搜索
     * @param keyword 根据关键字搜索
     * @param callback 回调
     */
    search(
      keyword: string,
      callback: (
        status: AMap$PlaceSearch$SearchStatus,
        result: string | AMap$PlaceSearch$SearchResult
      ) => void
    ): void;

    /**
     * 周边查询
     * @param keyword 关键字
     * @param center 搜索中心
     * @param radius 搜索半径
     * @param callback 回调
     */
    searchNearBy(
      keyword: string,
      center: LocationValue,
      radius: number,
      callback: (
        status: AMap$PlaceSearch$SearchStatus,
        result: string | AMap$PlaceSearch$SearchResult
      ) => void
    ): void;

    /**
     * 根据范围和关键词进行范围查询
     * @param keyword 关键字
     * @param bounds 搜索范围
     * @param callback 回调
     */
    searchInBounds(
      keyword: string,
      bounds: Bounds | Polygon,
      callback: (
        status: AMap$PlaceSearch$SearchStatus,
        result: string | AMap$PlaceSearch$SearchResult
      ) => void
    ): void;

    /**
     * 根据POIID 查询POI 详细信息
     * @param POIID POIID
     * @param callback 搜索回调
     */
    getDetails(
      POIID: string,
      callback: (
        status: AMap$PlaceSearch$SearchStatus,
        result: string | AMap$PlaceSearch$SearchResult
      ) => void
    ): void;

    /**
     * 设置查询类别
     * @param type 查询类别
     */
    setType(type?: string): void;

    /**
     * 设置是否强制限制城市
     * @param limit 是否强制限制城市
     */
    setCityLimit(limit?: boolean): void;

    /**
     * 设置查询结果特定页数
     * @param pageIndex 页码
     */
    setPageIndex(pageIndex?: number): void;

    /**
     * 设置查询单页结果数
     * @param pageSize 结果数
     */
    setPageSize(pageSize?: number): void;

    /**
     * 设置查询城市
     * @param city 城市
     */
    setCity(city?: string): void;

    /**
     * 设置检索语言类型
     * @param lang 语言类型
     */
    setLang(lang?: Lang): void;

    /**
     * 获取检索语言类型
     */
    getLang(): Lang | void;

    /**
     * 清除搜索结果
     */
    clear(): void;

    /**
     * 唤起高德地图客户端marker页
     * @param obj 唤起参数
     */
    poiOnAMAP(obj: {
      location?: LocationValue,
      id: string,
      name?: string
    }): void;

    /**
     * 唤起高德地图客户端POI详情页
     * @param obj 唤起参数
     */
    detailOnAMAP(obj: {
      location?: LocationValue,
      id: string,
      name?: string
    }): void;
    open(): void;
    close(): void;
  }
}
