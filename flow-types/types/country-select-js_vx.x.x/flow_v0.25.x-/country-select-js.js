declare module "country-select-js" {
  declare interface CountrySelectJs$Options {
    /**
     * Set the default country by it's country code. Otherwise it will just be
     * the first country in the list.
     */
    defaultCountry?: string;

    /**
     * Display only the countries you specify. Takes an array of country codes.
     */
    onlyCountries?: string[];

    /**
     * Specify the countries to appear at the top of the list. Defaults to
     * ["us", "gb"]
     */
    preferredCountries?: string[];

    /**
     * Set the dropdown's width to be the same as the input. This is
     * automatically enabled for small screens.
     */
    responsiveDropdown?: boolean;
  }

  declare interface CountrySelectJs$CountryData {
    name: string;
    iso2: string;
  }
  declare interface JQuery {
    /**
     * Remove the plugin from the input, and unbind any event listeners.
     */
    countrySelect(method: "destroy"): void;

    /**
     * Get the country data for the currently selected flag.
     */
    countrySelect(
      method: "getSelectedCountryData"
    ): CountrySelectJs$CountrySelectJs$CountryData;
    countrySelect(method: string, value: string): void;

    /**
     * initialize the plugin with optional options.
     */
    countrySelect(
      options?: CountrySelectJs$CountrySelectJs$Options
    ): JQueryDeferred<any>;
  }
}
