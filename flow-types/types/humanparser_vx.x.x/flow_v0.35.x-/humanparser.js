declare module 'humanparser' {
        declare interface humanparser$NameOutput {
firstName: string,
lastName: string,
fullName: string,
suffix?: string,
middleName?: string,
salutation?: string
} 

declare interface humanparser$FullerNameOutput {
fullName: string
} 

declare interface humanparser$AddressOutput {
address: string,
state: string,
fullAddress: string,
zip: string,
city: string
} 

declare interface humanparser$HumanparserStatic {
parseName(name: string): humanparser$NameOutput,
getFullestName(name: string): humanparser$FullerNameOutput,
parseAddress(address: string): humanparser$AddressOutput
} 
	declare var humanparser: humanparser$humanparser$HumanparserStatic;
	declare module.exports: typeof humanparser

    }
