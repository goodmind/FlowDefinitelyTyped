declare type zrender$X = number;

declare type zrender$Y = number;

declare type zrender$X2 = number;

declare type zrender$Y2 = number;

declare type zrender$GlobalCoords = boolean;

declare type zrender$ColorStops = Array<{
    offset: number,
    color: string
}>;

/**
 * x, y, x2, y2 are all percent from 0 to 1
 */
declare interface zrender$LinearGradient {
    new(
        x?: zrender$X,
        y?: zrender$Y,
        x2?: zrender$X2,
        y2?: zrender$Y2,
        colorStops?: zrender$ColorStops,
        globalCoord?: zrender$GlobalCoords
    ): {
        type: "linear",
        x: zrender$X,
        y: zrender$Y,
        x2: zrender$X2,
        y2: zrender$Y2,
        colorStops: zrender$ColorStops,
        globalCoord: zrender$GlobalCoords,
        addColorStop(offset: number, color: string): void
    };
}
declare module "zrender" {
    declare module.exports: typeof zrender;
}
