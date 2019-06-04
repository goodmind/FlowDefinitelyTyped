declare module "vue-tel-input" {
  import type { VueConstructor } from "vue";

  import type { DirectiveOptions } from "vue/types/options";

  declare export default typeof VueTelInput;

  declare export var VueTelInput: VueTelInputConstructor;
  declare export interface VueTelInputProps {
    value: string;
    placeholder: string;
    disabledFetchingCountry: boolean;
    disabled: boolean;
    disabledFormatting: boolean;
    invalidMsg: string;
    required: boolean;
    defaultCountry: string;
    enabledCountryCode: boolean;
    enabledFlags: boolean;
    preferredCountries: boolean;
    onlyCountries: any[];
    ignoredCountries: any[];
    autocomplete: string;
    name: string;
    wrapperClasses: string;
    inputClasses: string;
    dropdownOptions: VueTelInputDowndownOption;
    inputOptions: VueTelInputInputOption;
    maxLen: number;
  }
  declare export interface VueTelInputData {
    phone: string;
    activeCountry: VueTelInputCountryOption;
    open: boolean;
    selectedIndex: any;
    typeToFindInput: string;
    typeToFindTimer: any;
  }
  declare export interface VueTelInputWatch {
    state: (value: any) => void;
    value: () => void;
  }
  declare export interface VueTelInputMethods {
    initializeCountry: () => void;
    getCountries: (list: any[]) => any[];
    findCountry: (iso: string) => any[];
    getItemClass: (index: number, iso2: string) => any;
    choose: (country: any) => void;
    onInput: () => void;
    onBlur: () => void;
    toggleDropdown: () => void;
    clickedOutside: () => void;
    keyboardNav: (e: Event) => void;
    reset: () => void;
  }
  declare export interface VueTelInputComputed {
    mode: () => string;
    filteredCountries: () => string[];
    sortedCountries: () => string[];
    formattedResult: () => string;
    state: () => boolean;
    response: () => VueTelInputResponse;
  }
  declare export interface VueTelInputDirective {
    "click-outside": DirectiveOptions;
  }
  declare export interface VueTelInputResponse {
    number: string;
    isValid: boolean;
    country: VueTelInputCountryOption;
  }
  declare export interface VueTelInputCountryOption {
    iso2: string;
  }
  declare export interface VueTelInputDowndownOption {
    disabledDialCode: boolean;
  }
  declare export interface VueTelInputInputOption {
    showDialCode: boolean;
  }
  declare export type VueTelInputConstructor = {
    props: VueTelInputProps,
    data: () => VueTelInputData,
    watch: VueTelInputWatch,
    methods: VueTelInputMethods,
    computed: VueTelInputComputed,
    directives: VueTelInputDirective
  } & VueConstructor;
}
