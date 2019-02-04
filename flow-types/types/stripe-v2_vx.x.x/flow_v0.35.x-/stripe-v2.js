declare module 'stripe-v2' {
        declare var Stripe: stripe$stripe$StripeStatic;
	declare interface stripe$StripeStatic {
applePay: stripe$StripeApplePay,
setPublishableKey(key: string): void,
validateCardNumber(cardNumber: string): boolean,
validateExpiry(month: string, year: string): boolean,
validateCVC(cardCVC: string): boolean,
cardType(cardNumber: string): stripe$StripeCardDataBrand,
getToken(
token: string,
responseHandler: (status: number, response: stripe$StripeCardTokenResponse) => void): void,
card: stripe$StripeCard,
createToken(
data: stripe$StripeCardTokenData,
responseHandler: (status: number, response: stripe$StripeCardTokenResponse) => void): void,
bankAccount: stripe$StripeBankAccount
} 

declare interface stripe$StripeCardTokenData {
number: string,
exp_month?: number,
exp_year?: number,
exp?: string,
cvc?: string,
name?: string,
address_line1?: string,
address_line2?: string,
address_city?: string,
address_state?: string,
address_zip?: string,
address_country?: string
} 

declare interface stripe$StripeTokenResponse {
id: string,
client_ip: string,
created: number,
livemode: boolean,
object: string,
type: string,
used: boolean,
error?: stripe$StripeError
} 

declare type stripe$StripeCardTokenResponse = {
card: stripe$StripeCard
} & stripe$StripeTokenResponse


declare interface stripe$StripeError {
type: string,
code: string,
message: string,
param?: string
} 

declare type stripe$StripeCardDataBrand = "Visa"
| "American Express"
| "MasterCard"
| "Discover"
| "JCB"
| "Diners Club"
| "Unknown";

declare type stripe$StripeCardDataFunding = "credit" | "debit" | "prepaid" | "unknown";

declare interface stripe$StripeCard {
object: string,
last4: string,
exp_month: number,
exp_year: number,
country?: string,
name?: string,
address_line1?: string,
address_line2?: string,
address_city?: string,
address_state?: string,
address_zip?: string,
address_country?: string,
brand?: stripe$StripeCardDataBrand,
funding?: stripe$StripeCardDataFunding,
createToken(
data: stripe$StripeCardTokenData,
responseHandler: (status: number, response: stripe$StripeCardTokenResponse) => void): void,
validateCardNumber(cardNumber: string): boolean,
validateExpiry(month: string, year: string): boolean,
validateCVC(cardCVC: string): boolean
} 

declare interface stripe$StripeBankAccount {
createToken(
params: stripe$StripeBankTokenParams,
stripeResponseHandler: (status: number, response: stripe$StripeBankTokenResponse) => void): void,
validateRoutingNumber(routingNumber: number | string, countryCode: string): boolean,
validateAccountNumber(accountNumber: number | string, countryCode: string): boolean
} 

declare interface stripe$StripeBankTokenParams {
country: string,
currency: string,
account_number: number | string,
routing_number?: number | string,
account_holder_name: string,
account_holder_type: string
} 

declare type stripe$StripeBankTokenResponse = {
bank_account: {
country: string,
bank_name: string,
last4: number,
validated: boolean,
object: string
}
} & stripe$StripeTokenResponse


declare interface stripe$StripeApplePay {
checkAvailability(resopnseHandler: (result: boolean) => void): void,
buildSession(
data: stripe$StripeApplePayPaymentRequest,
onSuccessHandler: (
result: stripe$StripeApplePaySessionResult,
completion: ((value: any) => void)) => void,
onErrorHanlder: (error: {
message: string
}) => void): any
} 

declare type stripe$StripeApplePayBillingContactField = "postalAddress" | "name";

declare type stripe$StripeApplePayShippingContactField = stripe$StripeApplePayBillingContactField | "phone" | "email";

declare type stripe$StripeApplePayShipping = "shipping" | "delivery" | "storePickup" | "servicePickup";

declare interface stripe$StripeApplePayPaymentRequest {
billingContact: stripe$StripeApplePayPaymentContact,
countryCode: string,
currencyCode: string,
total: stripe$StripeApplePayLineItem,
lineItems?: stripe$StripeApplePayLineItem[],
requiredBillingContactFields?: stripe$StripeApplePayBillingContactField[],
requiredShippingContactFields?: stripe$StripeApplePayShippingContactField[],
shippingContact?: stripe$StripeApplePayPaymentContact,
shippingMethods?: stripe$StripeApplePayShippingMethod[],
shippingType?: stripe$StripeApplePayShipping[]
} 

declare interface stripe$StripeApplePayLineItem {
type: "pending" | "final",
label: string,
amount: number
} 

declare interface stripe$StripeApplePaySessionResult {
token: stripe$StripeCardTokenResponse,
shippingContact?: stripe$StripeApplePayPaymentContact,
shippingMethod?: stripe$StripeApplePayShippingMethod
} 

declare interface stripe$StripeApplePayShippingMethod {
label: string,
detail: string,
amount: number,
identifier: string
} 

declare interface stripe$StripeApplePayPaymentContact {
emailAddress: string,
phoneNumber: string,
givenName: string,
familyName: string,
addressLines: string[],
locality: string,
administrativeArea: string,
postalCode: string,
countryCode: string
} 
    }
