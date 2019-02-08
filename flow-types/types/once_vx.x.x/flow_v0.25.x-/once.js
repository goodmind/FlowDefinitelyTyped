declare module "global" {
  declare interface Function {
    once(): Function & once$once$FnProps<any>;
  }
}
declare module "once" {
  declare module.exports: typeof once;

  declare var once: Once;
  declare type Once = {
    proto(): void,
    strict: once$once$OnceFn
  } & once$once$OnceFn;

  declare interface once$OnceFn {
    <R>(f: () => R): (() => R) & once$FnProps<R>;
    <T1, R>(f: (t1: T1) => R): ((t1: T1) => R) & once$FnProps<R>;
    <T1, T2, R>(
      f: (t1: T1, t2: T2) => R
    ): ((t1: T1, t2: T2) => R) & once$FnProps<R>;
    <T1, T2, T3, R>(
      f: (t1: T1, t2: T2, t3: T3) => R
    ): ((t1: T1, t2: T2, t3: T3) => R) & once$FnProps<R>;
    <T1, T2, T3, T4, R>(
      f: (t1: T1, t2: T2, t3: T3, t4: T4) => R
    ): ((t1: T1, t2: T2, t3: T3, t4: T4) => R) & once$FnProps<R>;
    <T1, T2, T3, T4, T5, R>(
      f: (t1: T1, t2: T2, t3: T3, t4: T4, t5: T5) => R
    ): ((t1: T1, t2: T2, t3: T3, t4: T4, t5: T5) => R) & once$FnProps<R>;
    <T1, T2, T3, T4, T5, T6, R>(
      f: (t1: T1, t2: T2, t3: T3, t4: T4, t5: T5, t6: T6) => R
    ): ((t1: T1, t2: T2, t3: T3, t4: T4, t5: T5, t6: T6) => R) &
      once$FnProps<R>;
    <T1, T2, T3, T4, T5, T6, T7, R>(
      f: (t1: T1, t2: T2, t3: T3, t4: T4, t5: T5, t6: T6, t7: T7) => R
    ): ((t1: T1, t2: T2, t3: T3, t4: T4, t5: T5, t6: T6, t7: T7) => R) &
      once$FnProps<R>;
    <T1, T2, T3, T4, T5, T6, T7, T8, R>(
      f: (t1: T1, t2: T2, t3: T3, t4: T4, t5: T5, t6: T6, t7: T7, t8: T8) => R
    ): ((t1: T1, t2: T2, t3: T3, t4: T4, t5: T5, t6: T6, t7: T7, t8: T8) => R) &
      once$FnProps<R>;
    <T1, T2, T3, T4, T5, T6, T7, T8, T9, R>(
      f: (
        t1: T1,
        t2: T2,
        t3: T3,
        t4: T4,
        t5: T5,
        t6: T6,
        t7: T7,
        t8: T8,
        t9: T9
      ) => R
    ): ((
      t1: T1,
      t2: T2,
      t3: T3,
      t4: T4,
      t5: T5,
      t6: T6,
      t7: T7,
      t8: T8,
      t9: T9
    ) => R) &
      once$FnProps<R>;
    <T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, R>(
      f: (
        t1: T1,
        t2: T2,
        t3: T3,
        t4: T4,
        t5: T5,
        t6: T6,
        t7: T7,
        t8: T8,
        t9: T9,
        t10: T10
      ) => R
    ): ((
      t1: T1,
      t2: T2,
      t3: T3,
      t4: T4,
      t5: T5,
      t6: T6,
      t7: T7,
      t8: T8,
      t9: T9,
      t10: T10
    ) => R) &
      once$FnProps<R>;
    <R>(f: (...args: any[]) => R): ((...args: any[]) => R) & once$FnProps<R>;
  }

  declare interface once$FnProps<R> {
    called: boolean;
    value: R | void;
  }
}
