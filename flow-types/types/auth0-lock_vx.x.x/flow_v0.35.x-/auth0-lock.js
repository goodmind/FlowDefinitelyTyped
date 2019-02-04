declare interface Auth0LockAdditionalSignUpFieldOption {
value: string,
label: string
} declare type Auth0LockAdditionalSignUpFieldOptionsCallback = (
error: auth0.Auth0Error,
options: Auth0LockAdditionalSignUpFieldOption[]) => void;declare type Auth0LockAdditionalSignUpFieldOptionsFunction = (callback: Auth0LockAdditionalSignUpFieldOptionsCallback) => void;declare type Auth0LockAdditionalSignUpFieldPrefillCallback = (error: auth0.Auth0Error, prefill: string) => void;declare type Auth0LockAdditionalSignUpFieldPrefillFunction = (callback: Auth0LockAdditionalSignUpFieldPrefillCallback) => void;declare interface Auth0LockAdditionalTextSignUpField {
type?: "text",
icon?: string,
name: string,
options?: Auth0LockAdditionalSignUpFieldOption[] | Auth0LockAdditionalSignUpFieldOptionsFunction,
placeholder: string,
prefill?: string | Auth0LockAdditionalSignUpFieldPrefillFunction,
validator?: (input: string) => {
valid: boolean,
hint?: string
}
} declare interface Auth0LockAdditionalSelectSignUpField {
type?: "select",
icon?: string,
name: string,
options?: Auth0LockAdditionalSignUpFieldOption[] | Auth0LockAdditionalSignUpFieldOptionsFunction,
placeholder: string,
prefill?: string | Auth0LockAdditionalSignUpFieldPrefillFunction,
validator?: (input: string) => {
valid: boolean,
hint?: string
}
} declare interface Auth0LockAdditionalCheckboxSignUpField {
type?: "checkbox",
icon?: string,
name: string,
placeholder: string,
prefill: "true" | "false",
validator?: (input: string) => {
valid: boolean,
hint?: string
}
} declare type Auth0LockAdditionalSignUpField = Auth0LockAdditionalSelectSignUpField | Auth0LockAdditionalTextSignUpField | Auth0LockAdditionalCheckboxSignUpField;declare type Auth0LockAvatarUrlCallback = (error: auth0.Auth0Error, url: string) => void;declare type Auth0LockAvatarDisplayNameCallback = (error: auth0.Auth0Error, displayName: string) => void;declare interface Auth0LockAvatarOptions {
url: (email: string, callback: Auth0LockAvatarUrlCallback) => void,
displayName: (email: string, callback: Auth0LockAvatarDisplayNameCallback) => void
} declare interface Auth0LockThemeButton {
displayName: string,
primaryColor?: string,
foregroundColor?: string,
icon?: string
} declare interface Auth0LockThemeButtonOptions {
[provider: string]: Auth0LockThemeButton
} declare interface Auth0LockThemeOptions {
authButtons?: Auth0LockThemeButtonOptions,
hideMainScreenTitle?: boolean,
labeledSubmitButton?: boolean,
logo?: string,
primaryColor?: string
} declare interface Auth0LockAuthParamsOptions {
access_token?: any,
connection_scopes?: any,
device?: any,
nonce?: any,
protocol?: any,
request_id?: any,
scope?: string,
state?: string
} declare interface Auth0LockAuthOptions {
params?: Auth0LockAuthParamsOptions,
redirect?: boolean,
redirectUrl?: string,
responseMode?: string,
responseType?: string,
sso?: boolean,
audience?: string
} declare interface Auth0LockPopupOptions {
width: number,
height: number,
left: number,
top: number
} declare interface Auth0LockConstructorOptions {
additionalSignUpFields?: Auth0LockAdditionalSignUpField[],
allowedConnections?: string[],
allowAutocomplete?: boolean,
allowForgotPassword?: boolean,
allowLogin?: boolean,
allowPasswordAutocomplete?: boolean,
allowSignUp?: boolean,
allowShowPassword?: boolean,
assetsUrl?: string,
auth?: Auth0LockAuthOptions,
autoclose?: boolean,
autofocus?: boolean,
avatar?: Auth0LockAvatarOptions | null,
clientBaseUrl?: string,
closable?: boolean,
configurationBaseUrl?: string,
container?: string,
defaultADUsernameFromEmailPrefix?: boolean,
defaultDatabaseConnection?: string,
defaultEnterpriseConnection?: string,
flashMessage?: Auth0LockFlashMessageOptions,
forgotPasswordLink?: string,
hashCleanup?: boolean,
initialScreen?: "login" | "signUp" | "forgotPassword",
language?: string,
languageBaseUrl?: string,
languageDictionary?: any,
leeway?: number,
loginAfterSignUp?: boolean,
mustAcceptTerms?: boolean,
oidcConformant?: boolean,
popupOptions?: Auth0LockPopupOptions,
prefill?: {
email?: string,
username?: string
},
rememberLastLogin?: boolean,
scrollGlobalMessagesIntoView?: boolean,
signupLink?: string,
socialButtonStyle?: "big" | "small",
theme?: Auth0LockThemeOptions,
usernameStyle?: string,
_enableImpersonation?: boolean,
_enableIdPInitiatedLogin?: boolean
} declare interface Auth0LockFlashMessageOptions {
type: "success" | "error",
text: string
} declare interface Auth0LockShowOptions {
allowedConnections?: string[],
allowForgotPassword?: boolean,
allowLogin?: boolean,
allowSignUp?: boolean,
auth?: Auth0LockAuthOptions,
initialScreen?: "login" | "signUp" | "forgotPassword",
flashMessage?: Auth0LockFlashMessageOptions,
rememberLastLogin?: boolean,
languageDictionary?: any
} declare interface AuthResult {
accessToken: string,
appState?: any,
expiresIn: number,
idToken: string,
idTokenPayload: {
aud: string,
exp: number,
iat: number,
iss: string,
sub: string
},
refreshToken?: string,
scope?: string,
state: string,
tokenType: string
} declare interface Auth0LockStatic {
new (
clientId: string,
domain: string,
options?: Auth0LockConstructorOptions): Auth0LockStatic,
getProfile(
token: string,
callback: (error: auth0.Auth0Error, profile: auth0.Auth0UserProfile) => void): void,
getUserInfo(
token: string,
callback: (error: auth0.Auth0Error, profile: auth0.Auth0UserProfile) => void): void,
checkSession(
options: any,
callback: (error: auth0.Auth0Error, authResult: AuthResult | void) => void): void,
resumeAuth(
hash: string,
callback: (error: auth0.Auth0Error, authResult: AuthResult) => void): void,
show(options?: Auth0LockShowOptions): void,
hide(): void,
logout(query: any): void,
on(event: "show" | "hide", callback: () => void): void,
on(
event: "unrecoverable_error" | "authorization_error",
callback: (error: auth0.Auth0Error) => void): void,
on(event: "authenticated", callback: (authResult: AuthResult) => void): void,
on(event: string, callback: (...args: any[]) => void): void
} declare var Auth0Lock: Auth0LockStatic;declare module 'auth0-lock' {
        declare export default typeof Auth0Lock

    }
