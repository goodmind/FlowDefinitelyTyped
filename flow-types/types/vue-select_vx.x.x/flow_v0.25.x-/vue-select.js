declare module "vue-select" {
  import type { VueConstructor } from "vue";

  declare export default typeof VueSelect;

  declare export var VueSelect: VueSelectConstructor;
  declare export type OptionConsumer = (option: any) => void;
  declare export interface VueSelectProps {
    value: any;
    options: any[];
    disabled: boolean;
    maxHeight: string;
    searchable: boolean;
    multiple: boolean;
    placeholder: string;
    transition: string;
    clearSearchOnSelect: boolean;
    closeOnSelect: boolean;
    label: string;
    getOptionLabel: (option: any) => string;
    onChange: OptionConsumer;
    taggable: boolean;
    tabindex: number | null;
    pushTags: boolean;
    filterable: boolean;
    createOption: (option: any) => any;
    resetOnOptionsChange: boolean;
    noDrop: boolean;
    inputId: string | null;
    dir: string;
  }
  declare export interface VueSelectData {
    search: string;
    open: boolean;
    mutableValue: any;
    mutableOptions: any[];
  }
  declare export interface VueSelectWatch {
    value: (val: any) => void;
    mutableValue: (val: any, old: any) => void;
    options: (val: any) => void;
    mutableOptions: () => void;
    multiple: (reset: boolean) => void;
    created: () => void;
  }
  declare export interface VueSelectMethods {
    select: OptionConsumer;
    deselect: OptionConsumer;
    clearSelection: () => void;
    onAfterSelect: OptionConsumer;
    toggleDropdown: (e: Event) => void;
    isOptionSelected: (option: any) => boolean;
    onEscape: () => void;
    onSearchBlur: () => void;
    onSearchFocus: () => void;
    maybeDeleteValue: () => void;
    optionExists: (option: any) => boolean;
    maybePushTag: OptionConsumer;
  }
  declare export interface VueSelectComputed {
    dropdownClasses: () => DropdownClasses;
    clearSearchOnBlur: () => boolean;
    searching: () => boolean;
    dropdownOpen: () => boolean;
    searchPlaceholder: () => boolean;
    filteredOptions: () => any[];
    isValueEmpty: () => boolean;
    valueAsArray: () => any[];
    showClearButton: () => boolean;
  }
  declare export interface DropdownClasses {
    open: boolean;
    single: boolean;
    searching: boolean;
    searchable: boolean;
    unsearchable: boolean;
    loading: boolean;
    rtl: boolean;
    disabled: boolean;
  }
  declare export type VueSelectConstructor = {
    props: VueSelectProps,
    data: () => VueSelectData,
    watch: VueSelectWatch,
    methods: VueSelectMethods,
    computed: VueSelectComputed
  } & VueConstructor;
}
