declare module "country-data" {
  declare export interface Country {
    +alpha2: string;
    +alpha3: string;
    +countryCallingCodes: $ReadOnlyArray<string>;
    +currencies: $ReadOnlyArray<string>;
    +emoji: string;
    +ioc: string;
    +languages: $ReadOnlyArray<string>;
    +name: string;
    +status: string;
  }
  declare export interface Currency {
    +code: string;
    +decimals: number;
    +name: string;
    +number: number;
  }
  declare export interface Language {
    +alpha2: string;
    +alpha3: string;
    +bibliographic: string;
    +name: string;
  }
  declare export interface Continent {
    +name: string;
    +regions: $ReadOnlyArray<string>;
    +countries: $ReadOnlyArray<Country>;
  }
  declare export interface Region {
    +name: string;
    +countries: $ReadOnlyArray<string>;
  }
  declare export var countries: {
    +all: $ReadOnlyArray<Country>
  };
  declare export var continents: {
    +africa: Continent,
    +antarctica: Continent,
    +asia: Continent,
    +europe: Continent,
    +northAmerica: Continent,
    +oceania: Continent,
    +southAmerica: Continent
  };
  declare export var callingCodes: {
    +all: $ReadOnlyArray<string>
  };
  declare export var callingCountries: {
    +all: $ReadOnlyArray<Country>
  };
  declare export var currencies: {
    +all: $ReadOnlyArray<Currency>
  };
  declare export var languages: {
    +all: $ReadOnlyArray<Language>
  };
  declare export var regions: {
    +centralAsia: Region,
    +southernAsia: Region,
    +southeastAsia: Region,
    +eastAsia: Region,
    +westernAsia: Region,
    +centralAfrica: Region,
    +northAfrica: Region,
    +southernAfrica: Region,
    +eastAfrica: Region,
    +westAfrica: Region,
    +centralAmerica: Region,
    +northernAmerica: Region,
    +caribbean: Region,
    +southAmerica: Region,
    +antarctica: Region,
    +northernEurope: Region,
    +southernEurope: Region,
    +easternEurope: Region,
    +westernEurope: Region,
    +australia: Region,
    +melanesia: Region,
    +micronesia: Region,
    +polynesia: Region
  };
  declare export var lookup: {
    +countries: (query: any) => $ReadOnlyArray<Country>,
    +currencies: (query: any) => $ReadOnlyArray<Currency>,
    +languages: (query: any) => $ReadOnlyArray<Language>
  };
}
