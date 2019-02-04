declare module 'expo-localization' {
        declare export interface LocalizationProps {

/**
 * Native device language, returned in standard format. ex: `en-US`, `es-US`
 */
locale: string,

/**
 * List of all the native languages provided by the user settings. These are returned in the order the user defines in their native settings
 */
locales: string[],

/**
 * Country code for your device
 */
country: string | void | null,

/**
 * A list of all the supported ISO codes
 */
isoCurrencyCodes: string[] | void | null,

/**
 * The current time zone in display format. ex: `America/Los_Angeles`
 */
timezone: string,

/**
 * This will return `true` if the current language is Right-to-Left
 */
isRTL: boolean
} 
	
      declare var npm$namespace$Localization: {
        getLocalizationAsync: typeof Localization$getLocalizationAsync,
        locale: typeof Localization$locale,
locales: typeof Localization$locales,
country: typeof Localization$country,
isoCurrencyCodes: typeof Localization$isoCurrencyCodes,
timezone: typeof Localization$timezone,
isRTL: typeof Localization$isRTL,
      }

/**
 * Native device language, returned in standard format. ex: `en-US`, `es-US`
 */
declare var Localization$locale: string;


/**
 * List of all the native languages provided by the user settings. These are returned in the order the user defines in their native settings
 */
declare var Localization$locales: string[];


/**
 * Country code for your device
 */
declare var Localization$country: string | void | null;


/**
 * A list of all the supported ISO codes
 */
declare var Localization$isoCurrencyCodes: string[] | void | null;


/**
 * The current time zone in display format. ex: `America/Los_Angeles`
 */
declare var Localization$timezone: string;


/**
 * This will return `true` if the current language is Right-to-Left
 */
declare var Localization$isRTL: boolean;


/**
 * Android only, on iOS changing the locale settings will cause all the apps to reset
 */
declare function Localization$getLocalizationAsync(): Promise<LocalizationProps>

    }
