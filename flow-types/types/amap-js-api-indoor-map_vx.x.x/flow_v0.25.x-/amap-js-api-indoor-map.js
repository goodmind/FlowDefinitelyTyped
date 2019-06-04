declare module "amap-js-api-indoor-map" {
  declare var AMap: typeof npm$namespace$AMap;

  declare var npm$namespace$AMap: {
    IndoorMap: typeof AMap$IndoorMap
  };
  declare interface AMap$IndoorMap$EventMap {
    complete: Event<"complete">;
    click: AMap$IndoorMap$MouseEvent<"click">;
    floor_complete: Event<"floor_complete", AMap$IndoorMap$SearchResult>;
    mouseover: AMap$IndoorMap$MouseEvent<"mouseover">;
    mouseout: AMap$IndoorMap$MouseEvent<"mouseout">;
  }

  declare type AMap$IndoorMap$MouseEvent<N: string> = Event<
    N,
    {
      /**
       * 店铺所属楼宇信息
       */
      building_id: string,

      /**
       * 经纬度
       */
      lnglat: LngLat,

      /**
       * 楼层
       */
      floor: number,

      /**
       * 商店
       */
      shop: AMap$IndoorMap$Shop
    }
  >;

  declare type AMap$IndoorMap$Options = {
    /**
     * 图层叠加的顺序值
     */
    zIndex?: number,

    /**
     * 图层的透明度
     */
    opacity?: number,

    /**
     * 鼠标悬停到店铺面时的鼠标样式
     */
    cursor?: string,

    /**
     * 是否隐藏楼层切换控件
     */
    hideFloorBar?: boolean,

    /**
     * 是否持续显示
     */
    alaysShow?: boolean,
    visible?: boolean,
    featurezIndex?: number,
    zooms?: [number, number],
    disableIconRender?: boolean,
    disableLabelRender?: boolean,
    disableHoverMarker?: boolean,
    autoLoadBuildingsInTile?: boolean
  } & Layer.Options;

  declare interface AMap$IndoorMap$FloorDetails {
    /**
     * 各楼层索引
     */
    floor_indexs: number[];

    /**
     * 各楼层英文
     */
    floor_nonas: string[];

    /**
     * 各楼层名字
     */
    floor_names: string[];
  }

  declare type AMap$IndoorMap$ShopCategory = "public" | "connection" | "shop";

  declare interface AMap$IndoorMap$Shop {
    /**
     * 店铺的id
     */
    id: string;

    /**
     * 兴趣点ID
     */
    poiId: string;

    /**
     * 店铺所属楼宇ID
     */
    building_id: string;

    /**
     * 店铺名称
     */
    name: string;

    /**
     * 店铺的经纬度
     */
    lnglat: LngLat;

    /**
     * 分类
     */
    category: AMap$IndoorMap$ShopCategory;
  }

  declare interface AMap$IndoorMap$Building {
    /**
     * 所属楼宇ID
     */
    id: string;

    /**
     * 楼层名称
     */
    name: string;

    /**
     * 楼层的经纬度
     */
    lnglat: LngLat;

    /**
     * 所在楼层
     */
    floor: number;
    floor_details: AMap$IndoorMap$FloorDetails;
  }

  declare interface AMap$IndoorMap$SearchSuccessResult {
    /**
     * 楼层的id
     */
    id: string;
    status: 0;

    /**
     * 建筑信息
     */
    building: AMap$IndoorMap$Building;
  }

  declare interface AMap$IndoorMap$SearchErrorResult {
    /**
     * 楼宇id
     */
    id: string;
    status: 1;
    error: Error;
  }

  declare type AMap$IndoorMap$SearchResult =
    | AMap$IndoorMap$SearchSuccessResult
    | AMap$IndoorMap$SearchErrorResult;

  declare class AMap$IndoorMap mixins Layer {
    /**
     * 室内地图
     * @param options 选项
     */
    constructor(options?: AMap$IndoorMap$Options): this;

    /**
     * 显示指定室内地图信息
     * @param indoorId 建筑物ID
     * @param callback 回调
     */
    showIndoorMap(
      indoorId: string,
      callback?: (
        error: null | Error,
        result: AMap$IndoorMap$SearchResult
      ) => void
    ): void;

    /**
     * 显示指定室内地图信息
     * @param indoorId 建筑物ID
     * @param floor 楼层
     * @param callback 回调
     */
    showIndoorMap(
      indoorId: string,
      floor?: number,
      callback?: (
        error: null | Error,
        result: AMap$IndoorMap$SearchResult
      ) => void
    ): void;

    /**
     * 显示指定室内地图信息
     * @param indoorId 建筑物ID
     * @param floor 楼层
     * @param shopId 商铺ID
     * @param callback 回调
     */
    showIndoorMap(
      indoorId: string,
      floor?: number,
      shopId?: string,
      callback?: (
        error: null | Error,
        result: AMap$IndoorMap$SearchResult
      ) => void
    ): void;

    /**
     * 显示指定室内地图信息
     * @param indoorId 建筑物ID
     * @param floor 楼层
     * @param shopId 商铺ID
     * @param noMove 阻止移动
     * @param callback 回调
     */
    showIndoorMap(
      indoorId: string,
      floor?: number,
      shopId?: string,
      noMove?: boolean,
      callback?: (
        error: null | Error,
        result: AMap$IndoorMap$SearchResult
      ) => void
    ): void;

    /**
     * 显示指定的楼层
     * @param floor 楼层
     * @param noMove 禁止移动
     */
    showFloor(floor: number, noMove?: boolean): false | void;

    /**
     * 显示楼层切换控件
     */
    showFloorBar(): void;

    /**
     * 隐藏楼层切换控件
     */
    hideFloorBar(): void;

    /**
     * 显示室内地图标注
     */
    showLabels(): void;

    /**
     * 隐藏室内地图标注
     */
    hideLabels(): void;

    /**
     * 获取处于被选中状态的室内地图的ID
     */
    getSelectedBuildingId(): string | null;

    /**
     * 获取处于被选中状态的室内地图的一些基本信息
     */
    getSelectedBuilding(): AMap$IndoorMap$Building | null;
    getFloorBar(): void;
    setSelectedBuildingId(id: string): void;
  }
}
