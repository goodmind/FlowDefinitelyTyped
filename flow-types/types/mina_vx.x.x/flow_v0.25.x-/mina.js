declare module "mina" {
  declare function mina(
    a: number,
    A: number,
    b: number,
    B: number,
    get: () => number,
    set: (time: number) => void,
    easing?: (num: number) => number
  ): mina$AnimationDescriptor;

  declare var npm$namespace$mina: {
    backin: typeof mina$backin,
    backout: typeof mina$backout,
    bounce: typeof mina$bounce,
    easein: typeof mina$easein,
    easeinout: typeof mina$easeinout,
    easeout: typeof mina$easeout,
    elastic: typeof mina$elastic,
    getById: typeof mina$getById,
    linear: typeof mina$linear,
    time: typeof mina$time
  };
  declare interface mina$MinaAnimation {
    id: string;
    duration(): number;
    easing(): number;
    speed(): number;
    status(): number;
    stop(): void;
  }

  declare interface mina$AnimationDescriptor {
    id: string;
    start: number;
    end: number;
    b: number;
    s: number;
    dur: number;
    spd: number;
    get(): number;
    set(slave: number): number;
    easing(input: number): number;
    status(): number;
    status(newStatus: number): void;
    speed(): number;
    speed(newSpeed: number): void;
    duration(): number;
    duration(newDuration: number): void;
    stop(): void;
    pause(): void;
    resume(): void;
    update(): void;
  }

  declare function mina$backin(n: number): number;

  declare function mina$backout(n: number): number;

  declare function mina$bounce(n: number): number;

  declare function mina$easein(n: number): number;

  declare function mina$easeinout(n: number): number;

  declare function mina$easeout(n: number): number;

  declare function mina$elastic(n: number): number;

  declare function mina$getById(id: string): mina$AnimationDescriptor;

  declare function mina$linear(n: number): number;

  declare function mina$time(): number;
}
