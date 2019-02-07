declare module "react-flags-select" {
  import type { Component } from "react";

  declare interface Props {
    countries?: string[];
    blackList?: boolean;
    customLabels?: {
      [propName: string]: string
    };
    selectedSize?: number;
    optionsSize?: number;
    defaultCountry?: string;
    placeholder?: string;
    className?: string;
    showSelectedLabel?: boolean;
    showOptionLabel?: boolean;
    alignOptions?: string;
    onSelect?: (countryCode: string) => void;
    disabled?: boolean;
    searchable?: boolean;
  }
  declare class ReactFlagsSelect mixins Component<Props> {
    updateSelected(countryCode: string): void;
  }
  declare export default typeof ReactFlagsSelect;
}
