declare module "moment-timezone" {
  declare interface Moment {
    strftime(pattern: string): string;
  }
}
declare module "moment" {
  declare interface Moment {
    strftime(pattern: string): string;
  }
}
declare module "moment-strftime2" {
  import typeof * as _moment from "moment";

  declare export interface Modifiers {
    "%": string;
    A: string;
    B: string;
    C?: string;
    D: string;
    E?: string;
    F: string;
    G?: string;
    H: string;
    I: string;
    J?: string;
    K?: string;
    L: string;
    M: string;
    N?: string;
    O?: string;
    P: string;
    Q?: string;
    R: string;
    S: string;
    T: string;
    U?: string;
    V: string;
    W: string;
    X?: string;
    Y: string;
    Z: string;
    a: string;
    b: string;
    c?: string;
    d: string;
    e: string;
    f?: string;
    g: string;
    h: string;
    i?: string;
    j: string;
    k: string;
    l: string;
    m: string;
    n?: string;
    o?: string;
    p: string;
    q?: string;
    r: string;
    s: string;
    t?: string;
    u: string;
    v?: string;
    w: string;
    x?: string;
    y: string;
    z: string;
  }
  declare export var modifiers: Modifiers;
  declare export var separator: string;
  declare export function installTo(moment: { [key: string]: any }): void;
}
