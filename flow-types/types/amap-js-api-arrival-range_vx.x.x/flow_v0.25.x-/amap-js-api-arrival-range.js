declare module "amap-js-api-arrival-range" {
  declare var AMap: typeof npm$namespace$AMap;

  declare var npm$namespace$AMap: {
    ArrivalRange: typeof AMap$ArrivalRange
  };
  declare interface AMap$ArrivalRange$EventMap {
    error: Event<
      "error",
      {
        info: string
      }
    >;
  }

  declare interface AMap$ArrivalRange$SearchOptions {
    /**
     * 公交出行策略,可选为：地铁：SUBWAY， 公交：BUS，多策略使用逗号分隔
     */
    policy?: string;

    /**
     * 结果返回样式：polygon：返回多边形边界值，coverage：判断设定的终点坐标是否在到达圈范围内
     */
    resultType?: "polygon" | "coverage";

    /**
     * 选择一个想到达的目的地坐标，最多支持5个目的地坐标
     */
    destination?: LocationValue | LocationValue[];
  }

  declare interface AMap$ArrivalRange$SearchResult {
    /**
     * 查询状态说明
     */
    info: string;

    /**
     * 到达圈边界坐标点
     */
    bounds: string[][][][];

    /**
     * 提供的终点坐标是否在到达圈内
     */
    inRange?: boolean[];
    infocode: string;
  }

  declare type AMap$ArrivalRange$SearchStatus =
    | "complete"
    | "error"
    | "no_data";

  /**
   * 公交到达圈展示
   */
  declare class AMap$ArrivalRange mixins EventEmitter {
    /**
     * 计算某个时间段内用户通过公交出行可到达的距离范围
     * @param origin 起始点
     * @param time 时间
     * @param callback 回调
     * @param opts 选项
     */
    search(
      origin: LocationValue,
      time: number,
      callback: (
        status: AMap$ArrivalRange$SearchStatus,
        result: string | AMap$ArrivalRange$SearchResult
      ) => void,
      opts?: AMap$ArrivalRange$SearchOptions
    ): void;
  }
}
