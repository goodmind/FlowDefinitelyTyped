declare export  class libphonenumber$PhoneNumberFormat {
  constructor(...args: empty): mixed;
static +E164: Class<libphonenumber$PhoneNumberFormat__E164> & libphonenumber$PhoneNumberFormat__E164 & 0;// 0
static +INTERNATIONAL: Class<libphonenumber$PhoneNumberFormat__INTERNATIONAL> & libphonenumber$PhoneNumberFormat__INTERNATIONAL & 1;// 1
static +NATIONAL: Class<libphonenumber$PhoneNumberFormat__NATIONAL> & libphonenumber$PhoneNumberFormat__NATIONAL & 2;// 2
static +RFC3966: Class<libphonenumber$PhoneNumberFormat__RFC3966> & libphonenumber$PhoneNumberFormat__RFC3966 & 3;// 3

}

declare class libphonenumber$PhoneNumberFormat__E164 mixins libphonenumber$PhoneNumberFormat {}
declare class libphonenumber$PhoneNumberFormat__INTERNATIONAL mixins libphonenumber$PhoneNumberFormat {}
declare class libphonenumber$PhoneNumberFormat__NATIONAL mixins libphonenumber$PhoneNumberFormat {}
declare class libphonenumber$PhoneNumberFormat__RFC3966 mixins libphonenumber$PhoneNumberFormat {}


declare export  class libphonenumber$PhoneNumberType {
  constructor(...args: empty): mixed;
static +FIXED_LINE: Class<libphonenumber$PhoneNumberType__FIXED_LINE> & libphonenumber$PhoneNumberType__FIXED_LINE & 0;// 0
static +MOBILE: Class<libphonenumber$PhoneNumberType__MOBILE> & libphonenumber$PhoneNumberType__MOBILE & 1;// 1
static +FIXED_LINE_OR_MOBILE: Class<libphonenumber$PhoneNumberType__FIXED_LINE_OR_MOBILE> & libphonenumber$PhoneNumberType__FIXED_LINE_OR_MOBILE & 2;// 2
static +TOLL_FREE: Class<libphonenumber$PhoneNumberType__TOLL_FREE> & libphonenumber$PhoneNumberType__TOLL_FREE & 3;// 3
static +PREMIUM_RATE: Class<libphonenumber$PhoneNumberType__PREMIUM_RATE> & libphonenumber$PhoneNumberType__PREMIUM_RATE & 4;// 4
static +SHARED_COST: Class<libphonenumber$PhoneNumberType__SHARED_COST> & libphonenumber$PhoneNumberType__SHARED_COST & 5;// 5
static +VOIP: Class<libphonenumber$PhoneNumberType__VOIP> & libphonenumber$PhoneNumberType__VOIP & 6;// 6
static +PERSONAL_NUMBER: Class<libphonenumber$PhoneNumberType__PERSONAL_NUMBER> & libphonenumber$PhoneNumberType__PERSONAL_NUMBER & 7;// 7
static +PAGER: Class<libphonenumber$PhoneNumberType__PAGER> & libphonenumber$PhoneNumberType__PAGER & 8;// 8
static +UAN: Class<libphonenumber$PhoneNumberType__UAN> & libphonenumber$PhoneNumberType__UAN & 9;// 9
static +VOICEMAIL: Class<libphonenumber$PhoneNumberType__VOICEMAIL> & libphonenumber$PhoneNumberType__VOICEMAIL & 10;// 10
static +UNKNOWN: Class<libphonenumber$PhoneNumberType__UNKNOWN> & libphonenumber$PhoneNumberType__UNKNOWN & -1;// -1

}

declare class libphonenumber$PhoneNumberType__FIXED_LINE mixins libphonenumber$PhoneNumberType {}
declare class libphonenumber$PhoneNumberType__MOBILE mixins libphonenumber$PhoneNumberType {}
declare class libphonenumber$PhoneNumberType__FIXED_LINE_OR_MOBILE mixins libphonenumber$PhoneNumberType {}
declare class libphonenumber$PhoneNumberType__TOLL_FREE mixins libphonenumber$PhoneNumberType {}
declare class libphonenumber$PhoneNumberType__PREMIUM_RATE mixins libphonenumber$PhoneNumberType {}
declare class libphonenumber$PhoneNumberType__SHARED_COST mixins libphonenumber$PhoneNumberType {}
declare class libphonenumber$PhoneNumberType__VOIP mixins libphonenumber$PhoneNumberType {}
declare class libphonenumber$PhoneNumberType__PERSONAL_NUMBER mixins libphonenumber$PhoneNumberType {}
declare class libphonenumber$PhoneNumberType__PAGER mixins libphonenumber$PhoneNumberType {}
declare class libphonenumber$PhoneNumberType__UAN mixins libphonenumber$PhoneNumberType {}
declare class libphonenumber$PhoneNumberType__VOICEMAIL mixins libphonenumber$PhoneNumberType {}
declare class libphonenumber$PhoneNumberType__UNKNOWN mixins libphonenumber$PhoneNumberType {}


declare module 'PhoneNumber' {
        declare export  class CountryCodeSource {
  constructor(...args: empty): mixed;
static +FROM_NUMBER_WITH_PLUS_SIGN: Class<CountryCodeSource__FROM_NUMBER_WITH_PLUS_SIGN> & CountryCodeSource__FROM_NUMBER_WITH_PLUS_SIGN & 1;// 1
static +FROM_NUMBER_WITH_IDD: Class<CountryCodeSource__FROM_NUMBER_WITH_IDD> & CountryCodeSource__FROM_NUMBER_WITH_IDD & 5;// 5
static +FROM_NUMBER_WITHOUT_PLUS_SIGN: Class<CountryCodeSource__FROM_NUMBER_WITHOUT_PLUS_SIGN> & CountryCodeSource__FROM_NUMBER_WITHOUT_PLUS_SIGN & 10;// 10
static +FROM_DEFAULT_COUNTRY: Class<CountryCodeSource__FROM_DEFAULT_COUNTRY> & CountryCodeSource__FROM_DEFAULT_COUNTRY & 20;// 20

}

declare class CountryCodeSource__FROM_NUMBER_WITH_PLUS_SIGN mixins CountryCodeSource {}
declare class CountryCodeSource__FROM_NUMBER_WITH_IDD mixins CountryCodeSource {}
declare class CountryCodeSource__FROM_NUMBER_WITHOUT_PLUS_SIGN mixins CountryCodeSource {}
declare class CountryCodeSource__FROM_DEFAULT_COUNTRY mixins CountryCodeSource {}

    }


declare export class libphonenumber$PhoneNumber  {
getCountryCode(): number | void;
getCountryCodeOrDefault(): number;
setCountryCode(value: number): void;
hasCountryCode(): boolean;
countryCodeCount(): number;
clearCountryCode(): void;
getNationalNumber(): number | void;
getNationalNumberOrDefault(): number;
setNationalNumber(value: number): number;
hasNationalNumber(): boolean;
nationalNumberCount(): number;
clearNationalNumber(): void;
getExtension(): string | void;
getExtensionOrDefault(): string;
setExtension(value: string): void;
hasExtension(): boolean;
extensionCount(): number;
clearExtension(): void;
getItalianLeadingZero(): boolean | void;
getItalianLeadingZeroOrDefault(): boolean;
setItalianLeadingZero(value: boolean): void;
hasItalianLeadingZero(): boolean;
italianLeadingZeroCount(): number;
clearItalianLeadingZero(): void;
getNumberOfLeadingZeros(): number | void;
getNumberOfLeadingZerosOrDefault(): number;
setNumberOfLeadingZeros(value: number): void;
hasNumberOfLeadingZeros(): boolean;
numberOfLeadingZerosCount(): number;
clearNumberOfLeadingZeros(): void;
getRawInput(): string | void;
getRawInputOrDefault(): string;
setRawInput(value: string): void;
hasRawInput(): boolean;
rawInputCount(): number;
clearRawInput(): void;
getCountryCodeSource(): libphonenumber$PhoneNumber.CountryCodeSource | void;
getCountryCodeSourceOrDefault(): libphonenumber$PhoneNumber.CountryCodeSource;
setCountryCodeSource(value: libphonenumber$PhoneNumber.CountryCodeSource): void;
hasCountryCodeSource(): boolean;
countryCodeSourceCount(): number;
clearCountryCodeSource(): void;
getPreferredDomesticCarrierCode(): string | void;
getPreferredDomesticCarrierCodeOrDefault(): string;
setPreferredDomesticCarrierCode(value: string): void;
hasPreferredDomesticCarrierCode(): boolean;
preferredDomesticCarrierCodeCount(): number;
clearPreferredDomesticCarrierCode(): void
}

declare module 'PhoneNumberUtil' {
        declare export  class ValidationResult {
  constructor(...args: empty): mixed;
static +IS_POSSIBLE: Class<ValidationResult__IS_POSSIBLE> & ValidationResult__IS_POSSIBLE & 0;// 0
static +INVALID_COUNTRY_CODE: Class<ValidationResult__INVALID_COUNTRY_CODE> & ValidationResult__INVALID_COUNTRY_CODE & 1;// 1
static +TOO_SHORT: Class<ValidationResult__TOO_SHORT> & ValidationResult__TOO_SHORT & 2;// 2
static +TOO_LONG: Class<ValidationResult__TOO_LONG> & ValidationResult__TOO_LONG & 3;// 3

}

declare class ValidationResult__IS_POSSIBLE mixins ValidationResult {}
declare class ValidationResult__INVALID_COUNTRY_CODE mixins ValidationResult {}
declare class ValidationResult__TOO_SHORT mixins ValidationResult {}
declare class ValidationResult__TOO_LONG mixins ValidationResult {}

	declare export  class MatchType {
  constructor(...args: empty): mixed;
static +EXACT_MATCH: Class<MatchType__EXACT_MATCH> & MatchType__EXACT_MATCH & 0;// 0
static +NO_MATCH: Class<MatchType__NO_MATCH> & MatchType__NO_MATCH & 1;// 1
static +NOT_A_NUMBER: Class<MatchType__NOT_A_NUMBER> & MatchType__NOT_A_NUMBER & 2;// 2
static +NSN_MATCH: Class<MatchType__NSN_MATCH> & MatchType__NSN_MATCH & 3;// 3
static +SHORT_NSN_MATCH: Class<MatchType__SHORT_NSN_MATCH> & MatchType__SHORT_NSN_MATCH & 4;// 4

}

declare class MatchType__EXACT_MATCH mixins MatchType {}
declare class MatchType__NO_MATCH mixins MatchType {}
declare class MatchType__NOT_A_NUMBER mixins MatchType {}
declare class MatchType__NSN_MATCH mixins MatchType {}
declare class MatchType__SHORT_NSN_MATCH mixins MatchType {}

    }


declare class libphonenumber$StringBuffer  {
constructor(opt_a1?: any, ...var_args: any[]): this;
append(a1: any, opt_a2?: any, ...var_args: any[]): libphonenumber$StringBuffer;
toString(): string
}

declare export class libphonenumber$PhoneNumberUtil  {
static getInstance(): libphonenumber$PhoneNumberUtil;
extractCountryCode(
fullNumber: libphonenumber$StringBuffer,
nationalNumber: libphonenumber$StringBuffer): number;
format(
phoneNumber: libphonenumber$PhoneNumber,
format: libphonenumber$PhoneNumberFormat): string;
formatOutOfCountryCallingNumber(phoneNumber: libphonenumber$PhoneNumber, regionDialingFrom?: string): string;
getNddPrefixForRegion(regionCode?: string, stripNonDigits?: boolean): string | void;
getNumberType(phoneNumber: libphonenumber$PhoneNumber): libphonenumber$PhoneNumberType;
getCountryCodeForRegion(supportedRegion: string): string;
getExampleNumber(regionCode: string): libphonenumber$PhoneNumber;
getExampleNumberForType(
regionCode: string,
type: libphonenumber$PhoneNumberType): libphonenumber$PhoneNumber;
getRegionCodeForCountryCode(countryCallingCode: number): string;
getRegionCodeForNumber(phoneNumber: libphonenumber$PhoneNumber): string | void;
getSupportedRegions(): string[];
isAlphaNumber(number: string): boolean;
isLeadingZeroPossible(countryCallingCode: number): boolean;
isNANPACountry(regionCode?: string): boolean;
isPossibleNumber(number: libphonenumber$PhoneNumber): boolean;
isPossibleNumber(phoneNumber: libphonenumber$PhoneNumber): boolean;
isPossibleNumberForType(
number: libphonenumber$PhoneNumber,
type: libphonenumber$PhoneNumberType): boolean;
isPossibleNumberForTypeWithReason(
number: libphonenumber$PhoneNumber,
type: libphonenumber$PhoneNumberType): libphonenumber$PhoneNumberUtil.ValidationResult;
isPossibleNumberString(number: string, regionDialingFrom: string): boolean;
isPossibleNumberWithReason(
number: libphonenumber$PhoneNumber): libphonenumber$PhoneNumberUtil.ValidationResult;
isPossibleNumberWithReason(
phoneNumber: libphonenumber$PhoneNumber): libphonenumber$PhoneNumberUtil.ValidationResult;
isValidNumber(phoneNumber: libphonenumber$PhoneNumber): boolean;
isValidNumberForRegion(phoneNumber: libphonenumber$PhoneNumber, region?: string): boolean;
parse(number?: string, region?: string): libphonenumber$PhoneNumber;
parseAndKeepRawInput(number: string, regionCode?: string): libphonenumber$PhoneNumber;
truncateTooLongNumber(number: libphonenumber$PhoneNumber): boolean;
isNumberMatch(
firstNumber: string | libphonenumber$PhoneNumber,
secondNumber: string | libphonenumber$PhoneNumber): libphonenumber$PhoneNumberUtil.MatchType
}

declare export class libphonenumber$AsYouTypeFormatter  {
constructor(region: string): this;
inputDigit(digit: string): string;
clear(): void
}declare module 'google-libphonenumber' {
        declare module.exports: typeof libphonenumber

    }
