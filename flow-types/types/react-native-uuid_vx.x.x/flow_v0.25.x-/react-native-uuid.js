declare module "react-native-uuid" {
  declare interface v1 {
    node: number[];
    clockseq: number;
    msecs: number | Date;
    nsecs: number;
  }
  declare interface v4 {
    random?: number[];
    rng?: (...args: any) => void;
  }
  declare interface uuid {
    v1: (options?: v1, buffer?: ArrayBuffer, offset?: number) => string;
    v4: (options?: v4, buffer?: ArrayBuffer, offset?: number) => string;
    parse: (id: string, buffer?: ArrayBuffer, offset?: number) => ArrayBuffer;
    unparse: (buffer?: ArrayBuffer, offset?: number) => string;
    noConflict: () => string;
  }
  declare var uuid: uuid;
  declare export default typeof uuid;
}
