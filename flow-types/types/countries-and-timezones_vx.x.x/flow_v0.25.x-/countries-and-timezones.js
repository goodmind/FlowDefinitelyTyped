declare module "countries-and-timezones" {
  declare export interface Country {
    id: string;
    name: string;
    timezones: string[];
  }
  declare export interface Timezone {
    name: string;
    utcOffset: number;
    offsetStr: string;
    countries: string[];
  }
  declare export function getAllCountries(): Country[];

  declare export function getAllTimezones(): Timezone[];

  declare export function getCountriesForTimezone(
    timezoneId: string
  ): Country[];

  declare export function getTimezonesForCountry(countryId: string): Timezone[];
}
