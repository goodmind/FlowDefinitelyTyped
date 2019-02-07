declare module "moji" {
  declare var npm$namespace$moji: {
    addMojisyu: typeof moji$addMojisyu
  };
  declare type moji$Mojisyu =
    | "ZE"
    | "HE"
    | "ZS"
    | "HS"
    | "HG"
    | "KK"
    | "ZK"
    | "HK";

  declare interface moji$MojisyuRange {
    start: number;
    end: number;
  }

  declare interface moji$MojisyuRegExp {
    regexp: RegExp;
    list: string[];
  }

  declare interface moji$Moji {
    convert(beforeType: moji$Mojisyu, afterType: moji$Mojisyu): moji$Moji;
    trim(): moji$Moji;
    filter(type: moji$Mojisyu): moji$Moji;
    reject(type: moji$Mojisyu): moji$Moji;
    toString(): string;
  }

  declare function moji$addMojisyu(
    type: string,
    mojisyu: moji$MojisyuRange | moji$MojisyuRegExp
  ): void;

  declare function moji(moji: string): moji$moji$Moji;

  declare module.exports: typeof moji;
}
