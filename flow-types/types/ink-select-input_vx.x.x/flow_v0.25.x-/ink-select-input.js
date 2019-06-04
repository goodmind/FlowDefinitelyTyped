declare module "ink-select-input" {
  import type { Component } from "react";

  declare export interface ItemOfSelectInput {
    label: string;
    value: any;
    key?: string | number;
  }
  declare export interface SelectInputProps<
    T: ItemOfSelectInput = ItemOfSelectInput
  > {
    focus?: boolean;
    indicatorComponent?: Component;
    itemComponent?: Component;
    items?: $ReadOnlyArray<T>;
    limit?: number;
    initialIndex?: number;
    onSelect?: (item: T) => void;
  }
  declare class SelectInput mixins Component<SelectInputProps<>> {}
  declare export default typeof SelectInput;
}
