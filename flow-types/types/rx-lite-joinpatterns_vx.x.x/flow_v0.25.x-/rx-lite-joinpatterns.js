declare interface Rx$Pattern1<T1> {
  and<T2>(other: Rx$Observable<T2>): Rx$Pattern2<T1, T2>;
  thenDo<TR>(selector: (item1: T1) => TR): Rx$Plan<TR>;
}

declare interface Rx$Pattern2<T1, T2> {
  and<T3>(other: Rx$Observable<T3>): Rx$Pattern3<T1, T2, T3>;
  thenDo<TR>(selector: (item1: T1, item2: T2) => TR): Rx$Plan<TR>;
}

declare interface Rx$Pattern3<T1, T2, T3> {
  and<T4>(other: Rx$Observable<T4>): Rx$Pattern4<T1, T2, T3, T4>;
  thenDo<TR>(selector: (item1: T1, item2: T2, item3: T3) => TR): Rx$Plan<TR>;
}

declare interface Rx$Pattern4<T1, T2, T3, T4> {
  and<T5>(other: Rx$Observable<T5>): Rx$Pattern5<T1, T2, T3, T4, T5>;
  thenDo<TR>(
    selector: (item1: T1, item2: T2, item3: T3, item4: T4) => TR
  ): Rx$Plan<TR>;
}

declare interface Rx$Pattern5<T1, T2, T3, T4, T5> {
  and<T6>(other: Rx$Observable<T6>): Rx$Pattern6<T1, T2, T3, T4, T5, T6>;
  thenDo<TR>(
    selector: (item1: T1, item2: T2, item3: T3, item4: T4, item5: T5) => TR
  ): Rx$Plan<TR>;
}

declare interface Rx$Pattern6<T1, T2, T3, T4, T5, T6> {
  and<T7>(other: Rx$Observable<T7>): Rx$Pattern7<T1, T2, T3, T4, T5, T6, T7>;
  thenDo<TR>(
    selector: (
      item1: T1,
      item2: T2,
      item3: T3,
      item4: T4,
      item5: T5,
      item6: T6
    ) => TR
  ): Rx$Plan<TR>;
}

declare interface Rx$Pattern7<T1, T2, T3, T4, T5, T6, T7> {
  and<T8>(
    other: Rx$Observable<T8>
  ): Rx$Pattern8<T1, T2, T3, T4, T5, T6, T7, T8>;
  thenDo<TR>(
    selector: (
      item1: T1,
      item2: T2,
      item3: T3,
      item4: T4,
      item5: T5,
      item6: T6,
      item7: T7
    ) => TR
  ): Rx$Plan<TR>;
}

declare interface Rx$Pattern8<T1, T2, T3, T4, T5, T6, T7, T8> {
  and<T9>(
    other: Rx$Observable<T9>
  ): Rx$Pattern9<T1, T2, T3, T4, T5, T6, T7, T8, T9>;
  thenDo<TR>(
    selector: (
      item1: T1,
      item2: T2,
      item3: T3,
      item4: T4,
      item5: T5,
      item6: T6,
      item7: T7,
      item8: T8
    ) => TR
  ): Rx$Plan<TR>;
}

declare interface Rx$Pattern9<T1, T2, T3, T4, T5, T6, T7, T8, T9> {
  thenDo<TR>(
    selector: (
      item1: T1,
      item2: T2,
      item3: T3,
      item4: T4,
      item5: T5,
      item6: T6,
      item7: T7,
      item8: T8,
      item9: T9
    ) => TR
  ): Rx$Plan<TR>;
}

declare interface Rx$Plan<T> {}

declare interface Rx$Observable<T> {
  and<T2>(other: Rx$Observable<T2>): Rx$Pattern2<T, T2>;
  thenDo<TR>(selector: (item1: T) => TR): Rx$Plan<TR>;
}

declare interface Rx$ObservableStatic {
  when<TR>(plan: Rx$Plan<TR>): Rx$Observable<TR>;
}
declare module "rx-lite-joinpatterns" {
  declare module.exports: typeof Rx;
}
