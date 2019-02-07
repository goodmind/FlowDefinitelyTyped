declare module "iso-3166-2" {
  declare export type InfoOrEmptyRecord<T> = T | {};
  declare interface CountryInfo$Partial {
    name: string;
    sub: SubdivisionInfo$SubdivisionInfo$Map;
    type: string;
    name: string;
  }

  declare type CountryInfo$Full = {
    code: string,
    countryName: string,
    countryCode: string,
    code: string,
    regionCode: string
  } & $Shape;

  declare interface CountryInfo$Map {
    [code: string]: CountryInfo$Full | $Shape;
    [code: string]: CountryInfo$Full | $Shape;
  }
  declare export type CountryInfo = CountryInfo$CountryInfo$Full;
  declare interface SubdivisionInfo$Partial {
    name: string;
    sub: SubdivisionInfo$CountryInfo$Map;
    type: string;
    name: string;
  }

  declare type SubdivisionInfo$Full = {
    code: string,
    countryName: string,
    countryCode: string,
    code: string,
    regionCode: string
  } & $Shape;

  declare interface SubdivisionInfo$Map {
    [code: string]: SubdivisionInfo$Full | $Shape;
    [code: string]: SubdivisionInfo$Full | $Shape;
  }
  declare export type SubdivisionInfo = SubdivisionInfo$SubdivisionInfo$Full;
  declare export function subdivision(
    countryCodeOrFullSubdivisionCode: string,
    subdivisionCodeOrName?: string
  ): InfoOrEmptyRecord<SubdivisionInfo>;

  declare export function country(
    countryCodeOrName: string
  ): InfoOrEmptyRecord<CountryInfo>;

  declare export var data: CountryInfo$SubdivisionInfo$Map;
  declare export var codes: {
    [alpha3: string]: string
  };
}
