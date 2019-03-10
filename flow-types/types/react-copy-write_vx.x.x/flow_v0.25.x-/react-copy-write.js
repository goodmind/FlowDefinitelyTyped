declare module "react-copy-write" {
  import type { Component } from "react";

  declare type AnyDeepMemberOfState<T> = any;
  declare type MutateFn<T> = (draft: T, state: $ReadOnly<T>) => void;
  declare type Mutator<T> = (mutator: MutateFn<T>) => void;
  declare type SelectorFn<T> = (state: T) => AnyDeepMemberOfState<T>;
  declare type RenderFn<T> = (
    ...state: Array<$ReadOnly<$Call<SelectorFn<T>>>>
  ) => React$Node | React$Node[] | null;
  declare interface ConsumerPropsBase<T> {
    select?: Array<SelectorFn<T>>;
  }
  declare type ConsumerPropsExplicitRender<T> = {
    render?: RenderFn<T>
  } & ConsumerPropsBase<T>;

  declare type ConsumerPropsImplicitRender<T> = {
    children?: RenderFn<T>
  } & ConsumerPropsBase<T>;

  declare type ConsumerProps<T> =
    | ConsumerPropsExplicitRender<T>
    | ConsumerPropsImplicitRender<T>;
  declare class Consumer<T> mixins Component<ConsumerProps<T>> {}
  declare interface ProviderProps<T> {
    children: React$Node | React$Node[];
    initialState?: $Shape<T>;
  }
  declare class Provider<T> mixins Component<ProviderProps<T>> {}
  declare function create<T: { [key: string]: any }>(
    state: T
  ): {
    Provider: () => Provider<T>,
    Consumer: () => Consumer<T>,
    createSelector: SelectorFn<T>,
    mutate: Mutator<T>
  };

  declare export default typeof create;
}
