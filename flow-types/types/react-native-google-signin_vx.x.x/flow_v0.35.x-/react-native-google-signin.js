declare module 'react-native-google-signin' {
        import typeof * as React from 'react';

	import type {
          ViewProps
        } from 'react-native';

	declare export type GoogleSigninButtonProps = {
size?: GoogleSigninButton$GoogleSigninButton$Size,
color?: GoogleSigninButton$GoogleSigninButton$Color,
disabled?: boolean,
onPress(): void
} & ViewProps

	declare export class GoogleSigninButton mixins React.Component<GoogleSigninButtonProps> {
constructor(props: GoogleSigninButtonProps): this
}
	declare  class GoogleSigninButton$Size {
  constructor(...args: empty): mixed;
static +Standard: Class<GoogleSigninButton$Size__Standard> & GoogleSigninButton$Size__Standard & 0;// 0
static +Wide: Class<GoogleSigninButton$Size__Wide> & GoogleSigninButton$Size__Wide & 1;// 1
static +Icon: Class<GoogleSigninButton$Size__Icon> & GoogleSigninButton$Size__Icon & 2;// 2

}

declare class GoogleSigninButton$Size__Standard mixins GoogleSigninButton$Size {}
declare class GoogleSigninButton$Size__Wide mixins GoogleSigninButton$Size {}
declare class GoogleSigninButton$Size__Icon mixins GoogleSigninButton$Size {}


declare  class GoogleSigninButton$Color {
  constructor(...args: empty): mixed;
static +Light: Class<GoogleSigninButton$Color__Light> & GoogleSigninButton$Color__Light & 0;// 0
static +Dark: Class<GoogleSigninButton$Color__Dark> & GoogleSigninButton$Color__Dark & 1;// 1

}

declare class GoogleSigninButton$Color__Light mixins GoogleSigninButton$Color {}
declare class GoogleSigninButton$Color__Dark mixins GoogleSigninButton$Color {}

	declare export interface HasPlayServicesParams {

/**
 * When showPlayServicesUpdateDialog is true, the user will be prompted to
 * install Play Services if on Android and they are not installed.
 * Default is true
 */
showPlayServicesUpdateDialog?: boolean
} 
	declare export interface ConfigureParams {

/**
 * The Google API scopes to request access to. Default is email and profile.
 */
scopes?: string[],

/**
 * Web client ID from Developer Console. Required for offline access
 */
webClientId?: string,

/**
 * If you want to specify the client ID of type iOS
 */
iosClientId?: string,

/**
 * Must be true if you wish to access user APIs on behalf of the user from
 * your own server
 */
offlineAccess?: boolean,

/**
 * Specifies a hosted domain restriction
 */
hostedDomain?: string,

/**
 * ANDROID ONLY. Specifies if the consent prompt should be shown at each login.
 */
forceConsentPrompt?: boolean,

/**
 * ANDROID ONLY. An account name that should be prioritized.
 */
accountName?: string
} 
	declare export interface User {
user: {
id: string | null,
name: string | null,
email: string | null,
photo: string | null,
familyName: string | null,
givenName: string | null
},
scopes?: string[],
idToken: string | null,
accessToken: string | null,

/**
 * Deprecated
 */
accessTokenExpirationDate: number | null,

/**
 * Not null only if a valid webClientId and offlineAccess: true was
 * specified in configure().
 */
serverAuthCode: string | null
} 
	
      declare var npm$namespace$GoogleSignin: {
        hasPlayServices: typeof GoogleSignin$hasPlayServices,
configure: typeof GoogleSignin$configure,
signInSilently: typeof GoogleSignin$signInSilently,
signIn: typeof GoogleSignin$signIn,
signOut: typeof GoogleSignin$signOut,
revokeAccess: typeof GoogleSignin$revokeAccess,
isSignedIn: typeof GoogleSignin$isSignedIn,
        
      }

/**
 * Check if the device has Google Play Services installed. Always resolves
 * true on iOS
 */
declare function GoogleSignin$hasPlayServices(params?: HasPlayServicesParams): Promise<boolean>



/**
 * Configures the library for login. MUST be called before attempting login
 */
declare function GoogleSignin$configure(params?: ConfigureParams): void



/**
 * Returns a Promise that resolves with the current signed in user or rejects
 * if not signed in.
 */
declare function GoogleSignin$signInSilently(): Promise<User>



/**
 * Prompts the user to sign in with their Google account. Resolves with the
 * user if successful.
 */
declare function GoogleSignin$signIn(): Promise<User>



/**
 * Signs the user out.
 */
declare function GoogleSignin$signOut(): Promise<void>



/**
 * Removes your application from the user's authorized applications
 */
declare function GoogleSignin$revokeAccess(): Promise<void>



/**
 * Returns whether the user is currently signed in
 */
declare function GoogleSignin$isSignedIn(): Promise<boolean>

	declare export var statusCodes: {
SIGN_IN_CANCELLED: string,
IN_PROGRESS: string,
PLAY_SERVICES_NOT_AVAILABLE: string,
SIGN_IN_REQUIRED: string
};
    }
