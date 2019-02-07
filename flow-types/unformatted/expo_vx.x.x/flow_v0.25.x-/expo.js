declare module 'expo' {
        declare export {
        default as MapView
      }from 'react-native-maps';

	import type {
          EventSubscription
        } from 'fbemitter';

	import type {
          Component,ComponentClass,Ref,ComponentType
        } from 'react';

	import type {
          ColorPropType,ImageRequireSource,ImageURISource,LinkingStatic as ReactNativeLinkingStatic,NativeEventEmitter,ViewProps,ViewStyle,Permission,StyleProp
        } from 'react-native';

	declare export type Axis = number;
	declare export type BarCodeScannedCallback = (result: {
type: string,
data: string
}) => void;
	declare export type Md5 = string;
	declare export type Orientation = "portrait" | "landscape";
	declare export type RequireSource = ImageRequireSource;
	declare export type ResizeModeContain = "contain";
	declare export type ResizeModeCover = "cover";
	declare export type ResizeModeStretch = "stretch";
	declare export type URISource = ImageURISource;
	declare export interface HashMap {
[key: string]: any
} 
	declare export interface StringHashMap {
[key: string]: string
} 
	
      declare var npm$namespace$Accelerometer: {
        addListener: typeof Accelerometer$addListener,
removeAllListeners: typeof Accelerometer$removeAllListeners,
setUpdateInterval: typeof Accelerometer$setUpdateInterval,
        
      }
declare interface Accelerometer$AccelerometerObject {
x: Axis,
y: Axis,
z: Axis
} 


/**
 * Subscribe for updates to the accelerometer.
 * @param listener A callback that is invoked when an accelerometer update is available. When invoked, the listener is provided a single argumument that is an object containing keys x, y, z.
 * @returns An EventSubscription object that you can call remove() on when you would like to unsubscribe the listener.
 */
declare function Accelerometer$addListener(listener: (obj: Accelerometer$AccelerometerObject) => any): EventSubscription



/**
 * Remove all listeners.
 */
declare function Accelerometer$removeAllListeners(): void



/**
 * Subscribe for updates to the accelerometer.
 * @param intervalMs Desired interval in milliseconds between accelerometer updates.
 */
declare function Accelerometer$setUpdateInterval(intervalMs: number): void

	
/**
 * Admob
 */
declare export type AdMobBannerSize = "banner"
| "largeBanner"
| "mediumRectangle"
| "fullBanner"
| "leaderboard"
| "smartBannerPortrait"
| "smartBannerLandscape";
	declare export type AdMobBannerProperties = {
bannerSize?: AdMobBannerSize,
adUnitID?: string,
testDeviceID?: string,
didFailToReceiveAdWithError?: (errorDescription: string) => void,
adViewDidReceiveAd?: () => void,
adViewWillPresentScreen?: () => void,
adViewWillDismissScreen?: () => void,
adViewDidDismissScreen?: () => void,
adViewWillLeaveApplication?: () => void
} & ViewProps

	declare export class AdMobBanner mixins Component<AdMobBannerProperties> {}
	declare export interface AdMobAppEvent {
name: string,
info: string
} 
	declare export type PublisherBannerProperties = {
onAdMobDispatchAppEvent?: (event: AdMobAppEvent) => void
} & AdMobBannerProperties

	declare export class PublisherBanner mixins Component<PublisherBannerProperties> {}
	declare export type AdMobInterstitialEmptyEvent = "interstitialDidLoad" | "interstitialDidOpen" | "interstitialDidClose" | "interstitialWillLeaveApplication";
	declare export type AdMobInterstitialEvent = AdMobInterstitialEmptyEvent | "interstitialDidFailToLoad";
	
      declare var npm$namespace$AdMobInterstitial: {
        setAdUnitID: typeof AdMobInterstitial$setAdUnitID,
setTestDeviceID: typeof AdMobInterstitial$setTestDeviceID,
requestAdAsync: typeof AdMobInterstitial$requestAdAsync,
showAdAsync: typeof AdMobInterstitial$showAdAsync,
dismissAdAsync: typeof AdMobInterstitial$dismissAdAsync,
getIsReadyAsync: typeof AdMobInterstitial$getIsReadyAsync,
addEventListener: typeof AdMobInterstitial$addEventListener,
removeEventListener: typeof AdMobInterstitial$removeEventListener,
removeAllListeners: typeof AdMobInterstitial$removeAllListeners,
        
      }
declare function AdMobInterstitial$setAdUnitID(id: string): void


declare function AdMobInterstitial$setTestDeviceID(id: string): void


declare function AdMobInterstitial$requestAdAsync(): Promise<void>


declare function AdMobInterstitial$showAdAsync(): Promise<void>


declare function AdMobInterstitial$dismissAdAsync(): Promise<void>


declare function AdMobInterstitial$getIsReadyAsync(): Promise<boolean>


declare function AdMobInterstitial$addEventListener(event: "interstitialDidFailToLoad", handler: (error: string) => void): void


declare function AdMobInterstitial$addEventListener(event: AdMobInterstitialEmptyEvent, handler: () => void): void


declare function AdMobInterstitial$removeEventListener(event: "interstitialDidFailToLoad", handler: (error: string) => void): void


declare function AdMobInterstitial$removeEventListener(event: AdMobInterstitialEmptyEvent, handler: () => void): void


declare function AdMobInterstitial$removeAllListeners(): void

	declare export type AdMobRewardedEmptyEvent = "rewardedVideoDidLoad"
| "rewardedVideoDidOpen"
| "rewardedVideoDidStart"
| "rewardedVideoDidClose"
| "rewardedVideoWillLeaveApplication";
	declare export type AdMobRewardedEvent = AdMobRewardedEmptyEvent | "rewardedVideoDidRewardUser" | "rewardedVideoDidFailToLoad";
	
      declare var npm$namespace$AdMobRewarded: {
        setAdUnitID: typeof AdMobRewarded$setAdUnitID,
setTestDeviceID: typeof AdMobRewarded$setTestDeviceID,
requestAdAsync: typeof AdMobRewarded$requestAdAsync,
showAdAsync: typeof AdMobRewarded$showAdAsync,
dismissAdAsync: typeof AdMobRewarded$dismissAdAsync,
getIsReadyAsync: typeof AdMobRewarded$getIsReadyAsync,
addEventListener: typeof AdMobRewarded$addEventListener,
removeEventListener: typeof AdMobRewarded$removeEventListener,
removeAllListeners: typeof AdMobRewarded$removeAllListeners,
        
      }
declare function AdMobRewarded$setAdUnitID(id: string): void


declare function AdMobRewarded$setTestDeviceID(id: string): void


declare function AdMobRewarded$requestAdAsync(): Promise<void>


declare function AdMobRewarded$showAdAsync(): Promise<void>


declare function AdMobRewarded$dismissAdAsync(): Promise<void>


declare function AdMobRewarded$getIsReadyAsync(): Promise<boolean>


declare function AdMobRewarded$addEventListener(
event: "rewardedVideoDidRewardUser",
handler: (type: string, amount: number) => void): void


declare function AdMobRewarded$addEventListener(event: "rewardedVideoDidFailToLoad", handler: (error: string) => void): void


declare function AdMobRewarded$addEventListener(event: AdMobRewardedEmptyEvent, handler: () => void): void


declare function AdMobRewarded$removeEventListener(
event: "rewardedVideoDidRewardUser",
handler: (type: string, amount: number) => void): void


declare function AdMobRewarded$removeEventListener(event: "rewardedVideoDidFailToLoad", handler: (error: string) => void): void


declare function AdMobRewarded$removeEventListener(event: AdMobRewardedEmptyEvent, handler: () => void): void


declare function AdMobRewarded$removeAllListeners(): void

	
      declare var npm$namespace$Amplitude: {
        initialize: typeof Amplitude$initialize,
setUserId: typeof Amplitude$setUserId,
setUserProperties: typeof Amplitude$setUserProperties,
clearUserProperties: typeof Amplitude$clearUserProperties,
logEvent: typeof Amplitude$logEvent,
logEventWithProperties: typeof Amplitude$logEventWithProperties,
setGroup: typeof Amplitude$setGroup,
        
      }

/**
 * Initializes Amplitude with your Amplitude API key.
 */
declare function Amplitude$initialize(apiKey: string): void



/**
 * Assign a user ID to the current user. If you don’t have a system for user IDs you don’t need to call this.
 */
declare function Amplitude$setUserId(userId: string): void



/**
 * Set properties for the current user.
 */
declare function Amplitude$setUserProperties(userProperties: HashMap): void



/**
 * Clear properties set by `setUserProperties()`.
 */
declare function Amplitude$clearUserProperties(): void



/**
 * Log an event to Amplitude.
 */
declare function Amplitude$logEvent(eventName: string): void



/**
 * Log an event to Amplitude with custom properties.
 */
declare function Amplitude$logEventWithProperties(eventName: string, properties: HashMap): void



/**
 * Add the current user to a group.
 */
declare function Amplitude$setGroup(groupType: string, groupNames: string[]): void

	
/**
 * The following props are recommended, but optional for the sake of backwards compatibility (they were introduced in SDK21). If you do not provide any props, you are responsible for coordinating loading assets, handling errors, and updating state to unmount the `AppLoading` component.
 */
declare export interface AppLoadingProps {

/**
 * A `function` that returns a `Promise`. The `Promise` should resolve when the app is done loading data and assets.
 */
AuthSession$startAsync?: () => Promise<void>,

/**
 * Required if you provide `startAsync`. Called when `startAsync` resolves or rejects. This should be used to set state and unmount the `AppLoading` component.
 */
onFinish?: () => void,

/**
 * If `startAsync` throws an error, it is caught and passed into the function provided to `onError`.
 */
onError?: (error: EventType$Error) => void
} 
	
/**
 * A React component that tells Expo to keep the app loading screen open if it is the first and only component rendered in your app. When it is removed, the loading screen will disappear and your app will be visible.
 * 
 * This is incredibly useful to let you download and cache fonts, logo and icon images and other assets that you want to be sure the user has on their device for an optimal experience before rendering they start using the app.
 */
declare export class AppLoading mixins Component<AppLoadingProps> {}
	
/**
 * This module provides an interface to Expo’s asset system. An asset is any file that lives alongside the source code of your app that the app needs at runtime. Examples include images, fonts and sounds. Expo’s asset system integrates with React Native’s, so that you can refer to files with require('path/to/file'). This is how you refer to static image files in React Native for use in an Image component, for example.
 */
declare export class Asset  {
constructor({name, type, hash, uri, width, height}: {
name: string,
type: string,
hash: string,
uri: string,
width?: number,
height?: number
}): this;

/**
 * The MD5 hash of the asset’s data.
 */
hash: Md5;

/**
 * The name of the asset file without the extension. Also without the part from @ onward in the filename (used to specify scale factor for images).
 */
name: string;

/**
 * The extension of the asset filename.
 */
type: string;

/**
 * A URI that points to the asset’s data on the remote server. When running the published version of your app, this refers to the the location on Expo’s asset server where Expo has stored your asset. When running the app from XDE during development, this URI points to XDE’s server running on your computer and the asset is served directly from your computer.
 */
uri: string;

/**
 * If the asset has been downloaded (by calling `downloadAsync()`), the `file://` URI pointing to the local file on the device that contains the asset data.
 */
localUri: string;

/**
 * If the asset is an image, the width of the image data divided by the scale factor. The scale factor is the number after `@` in the filename, or `1` if not present.
 */
width: number;

/**
 * If the asset is an image, the height of the image data divided by the scale factor. The scale factor is the number after `@` in the filename, or `1` if not present.
 */
height: number;
downloading: boolean;
downloaded: boolean;
downloadCallbacks: Array<{
resolve: () => any,
reject: (e?: any) => any
}>;

/**
 * Downloads the asset data to a local file in the device’s cache directory. Once the returned promise is fulfilled without error, the localUri field of this asset points to a local file containing the asset data. The asset is only downloaded if an up-to-date local file for the asset isn’t already present due to an earlier download.
 */
downloadAsync(): Promise<void>;

/**
 * Returns the `Expo.Asset` instance representing an asset given its module.
 */
static fromModule(module: RequireSource): MediaLibrary$Asset;

/**
 * A helper that wraps `Expo.Asset.fromModule(module).downloadAsync` for convenience.
 * @param moduleIds An array of `require('path/to/file')`. Can also be just one module without an Array.
 */
static loadAsync(module: RequireSource[] | RequireSource): Promise<void>
}
	
      declare var npm$namespace$Audio: {
        setIsEnabledAsync: typeof Audio$setIsEnabledAsync,
setAudioModeAsync: typeof Audio$setAudioModeAsync,
        INTERRUPTION_MODE_IOS_MIX_WITH_OTHERS: typeof Audio$INTERRUPTION_MODE_IOS_MIX_WITH_OTHERS,
INTERRUPTION_MODE_IOS_DO_NOT_MIX: typeof Audio$INTERRUPTION_MODE_IOS_DO_NOT_MIX,
INTERRUPTION_MODE_IOS_DUCK_OTHERS: typeof Audio$INTERRUPTION_MODE_IOS_DUCK_OTHERS,
INTERRUPTION_MODE_ANDROID_DO_NOT_MIX: typeof Audio$INTERRUPTION_MODE_ANDROID_DO_NOT_MIX,
INTERRUPTION_MODE_ANDROID_DUCK_OTHERS: typeof Audio$INTERRUPTION_MODE_ANDROID_DUCK_OTHERS,
RECORDING_OPTION_ANDROID_OUTPUT_FORMAT_DEFAULT: typeof Audio$RECORDING_OPTION_ANDROID_OUTPUT_FORMAT_DEFAULT,
RECORDING_OPTION_ANDROID_OUTPUT_FORMAT_THREE_GPP: typeof Audio$RECORDING_OPTION_ANDROID_OUTPUT_FORMAT_THREE_GPP,
RECORDING_OPTION_ANDROID_OUTPUT_FORMAT_MPEG_4: typeof Audio$RECORDING_OPTION_ANDROID_OUTPUT_FORMAT_MPEG_4,
RECORDING_OPTION_ANDROID_OUTPUT_FORMAT_AMR_NB: typeof Audio$RECORDING_OPTION_ANDROID_OUTPUT_FORMAT_AMR_NB,
RECORDING_OPTION_ANDROID_OUTPUT_FORMAT_AMR_WB: typeof Audio$RECORDING_OPTION_ANDROID_OUTPUT_FORMAT_AMR_WB,
RECORDING_OPTION_ANDROID_OUTPUT_FORMAT_AAC_ADIF: typeof Audio$RECORDING_OPTION_ANDROID_OUTPUT_FORMAT_AAC_ADIF,
RECORDING_OPTION_ANDROID_OUTPUT_FORMAT_AAC_ADTS: typeof Audio$RECORDING_OPTION_ANDROID_OUTPUT_FORMAT_AAC_ADTS,
RECORDING_OPTION_ANDROID_OUTPUT_FORMAT_RTP_AVP: typeof Audio$RECORDING_OPTION_ANDROID_OUTPUT_FORMAT_RTP_AVP,
RECORDING_OPTION_ANDROID_OUTPUT_FORMAT_MPEG2TS: typeof Audio$RECORDING_OPTION_ANDROID_OUTPUT_FORMAT_MPEG2TS,
RECORDING_OPTION_ANDROID_OUTPUT_FORMAT_WEBM: typeof Audio$RECORDING_OPTION_ANDROID_OUTPUT_FORMAT_WEBM,
RECORDING_OPTION_ANDROID_AUDIO_ENCODER_DEFAULT: typeof Audio$RECORDING_OPTION_ANDROID_AUDIO_ENCODER_DEFAULT,
RECORDING_OPTION_ANDROID_AUDIO_ENCODER_AMR_NB: typeof Audio$RECORDING_OPTION_ANDROID_AUDIO_ENCODER_AMR_NB,
RECORDING_OPTION_ANDROID_AUDIO_ENCODER_AMR_WB: typeof Audio$RECORDING_OPTION_ANDROID_AUDIO_ENCODER_AMR_WB,
RECORDING_OPTION_ANDROID_AUDIO_ENCODER_AAC: typeof Audio$RECORDING_OPTION_ANDROID_AUDIO_ENCODER_AAC,
RECORDING_OPTION_ANDROID_AUDIO_ENCODER_HE_AAC: typeof Audio$RECORDING_OPTION_ANDROID_AUDIO_ENCODER_HE_AAC,
RECORDING_OPTION_ANDROID_AUDIO_ENCODER_AAC_ELD: typeof Audio$RECORDING_OPTION_ANDROID_AUDIO_ENCODER_AAC_ELD,
RECORDING_OPTION_ANDROID_AUDIO_ENCODER_VORBIS: typeof Audio$RECORDING_OPTION_ANDROID_AUDIO_ENCODER_VORBIS,
RECORDING_OPTION_IOS_OUTPUT_FORMAT_LINEARPCM: typeof Audio$RECORDING_OPTION_IOS_OUTPUT_FORMAT_LINEARPCM,
RECORDING_OPTION_IOS_OUTPUT_FORMAT_AC3: typeof Audio$RECORDING_OPTION_IOS_OUTPUT_FORMAT_AC3,
RECORDING_OPTION_IOS_OUTPUT_FORMAT_60958AC3: typeof Audio$RECORDING_OPTION_IOS_OUTPUT_FORMAT_60958AC3,
RECORDING_OPTION_IOS_OUTPUT_FORMAT_APPLEIMA4: typeof Audio$RECORDING_OPTION_IOS_OUTPUT_FORMAT_APPLEIMA4,
RECORDING_OPTION_IOS_OUTPUT_FORMAT_MPEG4AAC: typeof Audio$RECORDING_OPTION_IOS_OUTPUT_FORMAT_MPEG4AAC,
RECORDING_OPTION_IOS_OUTPUT_FORMAT_MPEG4CELP: typeof Audio$RECORDING_OPTION_IOS_OUTPUT_FORMAT_MPEG4CELP,
RECORDING_OPTION_IOS_OUTPUT_FORMAT_MPEG4HVXC: typeof Audio$RECORDING_OPTION_IOS_OUTPUT_FORMAT_MPEG4HVXC,
RECORDING_OPTION_IOS_OUTPUT_FORMAT_MPEG4TWINVQ: typeof Audio$RECORDING_OPTION_IOS_OUTPUT_FORMAT_MPEG4TWINVQ,
RECORDING_OPTION_IOS_OUTPUT_FORMAT_MACE3: typeof Audio$RECORDING_OPTION_IOS_OUTPUT_FORMAT_MACE3,
RECORDING_OPTION_IOS_OUTPUT_FORMAT_MACE6: typeof Audio$RECORDING_OPTION_IOS_OUTPUT_FORMAT_MACE6,
RECORDING_OPTION_IOS_OUTPUT_FORMAT_ULAW: typeof Audio$RECORDING_OPTION_IOS_OUTPUT_FORMAT_ULAW,
RECORDING_OPTION_IOS_OUTPUT_FORMAT_ALAW: typeof Audio$RECORDING_OPTION_IOS_OUTPUT_FORMAT_ALAW,
RECORDING_OPTION_IOS_OUTPUT_FORMAT_QDESIGN: typeof Audio$RECORDING_OPTION_IOS_OUTPUT_FORMAT_QDESIGN,
RECORDING_OPTION_IOS_OUTPUT_FORMAT_QDESIGN2: typeof Audio$RECORDING_OPTION_IOS_OUTPUT_FORMAT_QDESIGN2,
RECORDING_OPTION_IOS_OUTPUT_FORMAT_QUALCOMM: typeof Audio$RECORDING_OPTION_IOS_OUTPUT_FORMAT_QUALCOMM,
RECORDING_OPTION_IOS_OUTPUT_FORMAT_MPEGLAYER1: typeof Audio$RECORDING_OPTION_IOS_OUTPUT_FORMAT_MPEGLAYER1,
RECORDING_OPTION_IOS_OUTPUT_FORMAT_MPEGLAYER2: typeof Audio$RECORDING_OPTION_IOS_OUTPUT_FORMAT_MPEGLAYER2,
RECORDING_OPTION_IOS_OUTPUT_FORMAT_MPEGLAYER3: typeof Audio$RECORDING_OPTION_IOS_OUTPUT_FORMAT_MPEGLAYER3,
RECORDING_OPTION_IOS_OUTPUT_FORMAT_APPLELOSSLESS: typeof Audio$RECORDING_OPTION_IOS_OUTPUT_FORMAT_APPLELOSSLESS,
RECORDING_OPTION_IOS_OUTPUT_FORMAT_MPEG4AAC_HE: typeof Audio$RECORDING_OPTION_IOS_OUTPUT_FORMAT_MPEG4AAC_HE,
RECORDING_OPTION_IOS_OUTPUT_FORMAT_MPEG4AAC_LD: typeof Audio$RECORDING_OPTION_IOS_OUTPUT_FORMAT_MPEG4AAC_LD,
RECORDING_OPTION_IOS_OUTPUT_FORMAT_MPEG4AAC_ELD: typeof Audio$RECORDING_OPTION_IOS_OUTPUT_FORMAT_MPEG4AAC_ELD,
RECORDING_OPTION_IOS_OUTPUT_FORMAT_MPEG4AAC_ELD_SBR: typeof Audio$RECORDING_OPTION_IOS_OUTPUT_FORMAT_MPEG4AAC_ELD_SBR,
RECORDING_OPTION_IOS_OUTPUT_FORMAT_MPEG4AAC_ELD_V2: typeof Audio$RECORDING_OPTION_IOS_OUTPUT_FORMAT_MPEG4AAC_ELD_V2,
RECORDING_OPTION_IOS_OUTPUT_FORMAT_MPEG4AAC_HE_V2: typeof Audio$RECORDING_OPTION_IOS_OUTPUT_FORMAT_MPEG4AAC_HE_V2,
RECORDING_OPTION_IOS_OUTPUT_FORMAT_MPEG4AAC_SPATIAL: typeof Audio$RECORDING_OPTION_IOS_OUTPUT_FORMAT_MPEG4AAC_SPATIAL,
RECORDING_OPTION_IOS_OUTPUT_FORMAT_AMR: typeof Audio$RECORDING_OPTION_IOS_OUTPUT_FORMAT_AMR,
RECORDING_OPTION_IOS_OUTPUT_FORMAT_AMR_WB: typeof Audio$RECORDING_OPTION_IOS_OUTPUT_FORMAT_AMR_WB,
RECORDING_OPTION_IOS_OUTPUT_FORMAT_AUDIBLE: typeof Audio$RECORDING_OPTION_IOS_OUTPUT_FORMAT_AUDIBLE,
RECORDING_OPTION_IOS_OUTPUT_FORMAT_ILBC: typeof Audio$RECORDING_OPTION_IOS_OUTPUT_FORMAT_ILBC,
RECORDING_OPTION_IOS_OUTPUT_FORMAT_DVIINTELIMA: typeof Audio$RECORDING_OPTION_IOS_OUTPUT_FORMAT_DVIINTELIMA,
RECORDING_OPTION_IOS_OUTPUT_FORMAT_MICROSOFTGSM: typeof Audio$RECORDING_OPTION_IOS_OUTPUT_FORMAT_MICROSOFTGSM,
RECORDING_OPTION_IOS_OUTPUT_FORMAT_AES3: typeof Audio$RECORDING_OPTION_IOS_OUTPUT_FORMAT_AES3,
RECORDING_OPTION_IOS_OUTPUT_FORMAT_ENHANCEDAC3: typeof Audio$RECORDING_OPTION_IOS_OUTPUT_FORMAT_ENHANCEDAC3,
RECORDING_OPTION_IOS_AUDIO_QUALITY_MIN: typeof Audio$RECORDING_OPTION_IOS_AUDIO_QUALITY_MIN,
RECORDING_OPTION_IOS_AUDIO_QUALITY_LOW: typeof Audio$RECORDING_OPTION_IOS_AUDIO_QUALITY_LOW,
RECORDING_OPTION_IOS_AUDIO_QUALITY_MEDIUM: typeof Audio$RECORDING_OPTION_IOS_AUDIO_QUALITY_MEDIUM,
RECORDING_OPTION_IOS_AUDIO_QUALITY_HIGH: typeof Audio$RECORDING_OPTION_IOS_AUDIO_QUALITY_HIGH,
RECORDING_OPTION_IOS_AUDIO_QUALITY_MAX: typeof Audio$RECORDING_OPTION_IOS_AUDIO_QUALITY_MAX,
RECORDING_OPTION_IOS_BIT_RATE_STRATEGY_CONSTANT: typeof Audio$RECORDING_OPTION_IOS_BIT_RATE_STRATEGY_CONSTANT,
RECORDING_OPTION_IOS_BIT_RATE_STRATEGY_LONG_TERM_AVERAGE: typeof Audio$RECORDING_OPTION_IOS_BIT_RATE_STRATEGY_LONG_TERM_AVERAGE,
RECORDING_OPTION_IOS_BIT_RATE_STRATEGY_VARIABLE_CONSTRAINED: typeof Audio$RECORDING_OPTION_IOS_BIT_RATE_STRATEGY_VARIABLE_CONSTRAINED,
RECORDING_OPTION_IOS_BIT_RATE_STRATEGY_VARIABLE: typeof Audio$RECORDING_OPTION_IOS_BIT_RATE_STRATEGY_VARIABLE,
RECORDING_OPTIONS_PRESET_HIGH_QUALITY: typeof Audio$RECORDING_OPTIONS_PRESET_HIGH_QUALITY,
RECORDING_OPTIONS_PRESET_LOW_QUALITY: typeof Audio$RECORDING_OPTIONS_PRESET_LOW_QUALITY,
      }
declare  class Audio$InterruptionModeIos {
  constructor(...args: empty): mixed;
static +INTERRUPTION_MODE_IOS_MIX_WITH_OTHERS: Class<Audio$InterruptionModeIos__INTERRUPTION_MODE_IOS_MIX_WITH_OTHERS> & Audio$InterruptionModeIos__INTERRUPTION_MODE_IOS_MIX_WITH_OTHERS & 0;// 0
static +INTERRUPTION_MODE_IOS_DO_NOT_MIX: Class<Audio$InterruptionModeIos__INTERRUPTION_MODE_IOS_DO_NOT_MIX> & Audio$InterruptionModeIos__INTERRUPTION_MODE_IOS_DO_NOT_MIX & 1;// 1
static +INTERRUPTION_MODE_IOS_DUCK_OTHERS: Class<Audio$InterruptionModeIos__INTERRUPTION_MODE_IOS_DUCK_OTHERS> & Audio$InterruptionModeIos__INTERRUPTION_MODE_IOS_DUCK_OTHERS & 2;// 2

}

declare class Audio$InterruptionModeIos__INTERRUPTION_MODE_IOS_MIX_WITH_OTHERS mixins Audio$InterruptionModeIos {}
declare class Audio$InterruptionModeIos__INTERRUPTION_MODE_IOS_DO_NOT_MIX mixins Audio$InterruptionModeIos {}
declare class Audio$InterruptionModeIos__INTERRUPTION_MODE_IOS_DUCK_OTHERS mixins Audio$InterruptionModeIos {}


declare var Audio$INTERRUPTION_MODE_IOS_MIX_WITH_OTHERS: 0;

declare var Audio$INTERRUPTION_MODE_IOS_DO_NOT_MIX: 1;

declare var Audio$INTERRUPTION_MODE_IOS_DUCK_OTHERS: 2;

declare  class Audio$InterruptionModeAndroid {
  constructor(...args: empty): mixed;
static +INTERRUPTION_MODE_ANDROID_DO_NOT_MIX: Class<Audio$InterruptionModeAndroid__INTERRUPTION_MODE_ANDROID_DO_NOT_MIX> & Audio$InterruptionModeAndroid__INTERRUPTION_MODE_ANDROID_DO_NOT_MIX & 1;// 1
static +INTERRUPTION_MODE_ANDROID_DUCK_OTHERS: Class<Audio$InterruptionModeAndroid__INTERRUPTION_MODE_ANDROID_DUCK_OTHERS> & Audio$InterruptionModeAndroid__INTERRUPTION_MODE_ANDROID_DUCK_OTHERS & 2;// 2

}

declare class Audio$InterruptionModeAndroid__INTERRUPTION_MODE_ANDROID_DO_NOT_MIX mixins Audio$InterruptionModeAndroid {}
declare class Audio$InterruptionModeAndroid__INTERRUPTION_MODE_ANDROID_DUCK_OTHERS mixins Audio$InterruptionModeAndroid {}


declare var Audio$INTERRUPTION_MODE_ANDROID_DO_NOT_MIX: 1;

declare var Audio$INTERRUPTION_MODE_ANDROID_DUCK_OTHERS: 2;

declare var Audio$RECORDING_OPTION_ANDROID_OUTPUT_FORMAT_DEFAULT: 0;

declare var Audio$RECORDING_OPTION_ANDROID_OUTPUT_FORMAT_THREE_GPP: 1;

declare var Audio$RECORDING_OPTION_ANDROID_OUTPUT_FORMAT_MPEG_4: 2;

declare var Audio$RECORDING_OPTION_ANDROID_OUTPUT_FORMAT_AMR_NB: 3;

declare var Audio$RECORDING_OPTION_ANDROID_OUTPUT_FORMAT_AMR_WB: 4;

declare var Audio$RECORDING_OPTION_ANDROID_OUTPUT_FORMAT_AAC_ADIF: 5;

declare var Audio$RECORDING_OPTION_ANDROID_OUTPUT_FORMAT_AAC_ADTS: 6;

declare var Audio$RECORDING_OPTION_ANDROID_OUTPUT_FORMAT_RTP_AVP: 7;

declare var Audio$RECORDING_OPTION_ANDROID_OUTPUT_FORMAT_MPEG2TS: 8;

declare var Audio$RECORDING_OPTION_ANDROID_OUTPUT_FORMAT_WEBM: 9;

declare var Audio$RECORDING_OPTION_ANDROID_AUDIO_ENCODER_DEFAULT: 0;

declare var Audio$RECORDING_OPTION_ANDROID_AUDIO_ENCODER_AMR_NB: 1;

declare var Audio$RECORDING_OPTION_ANDROID_AUDIO_ENCODER_AMR_WB: 2;

declare var Audio$RECORDING_OPTION_ANDROID_AUDIO_ENCODER_AAC: 3;

declare var Audio$RECORDING_OPTION_ANDROID_AUDIO_ENCODER_HE_AAC: 4;

declare var Audio$RECORDING_OPTION_ANDROID_AUDIO_ENCODER_AAC_ELD: 5;

declare var Audio$RECORDING_OPTION_ANDROID_AUDIO_ENCODER_VORBIS: 6;

declare var Audio$RECORDING_OPTION_IOS_OUTPUT_FORMAT_LINEARPCM: "lpcm";

declare var Audio$RECORDING_OPTION_IOS_OUTPUT_FORMAT_AC3: "ac-3";

declare var Audio$RECORDING_OPTION_IOS_OUTPUT_FORMAT_60958AC3: "cac3";

declare var Audio$RECORDING_OPTION_IOS_OUTPUT_FORMAT_APPLEIMA4: "ima4";

declare var Audio$RECORDING_OPTION_IOS_OUTPUT_FORMAT_MPEG4AAC: "aac ";

declare var Audio$RECORDING_OPTION_IOS_OUTPUT_FORMAT_MPEG4CELP: "celp";

declare var Audio$RECORDING_OPTION_IOS_OUTPUT_FORMAT_MPEG4HVXC: "hvxc";

declare var Audio$RECORDING_OPTION_IOS_OUTPUT_FORMAT_MPEG4TWINVQ: "twvq";

declare var Audio$RECORDING_OPTION_IOS_OUTPUT_FORMAT_MACE3: "MAC3";

declare var Audio$RECORDING_OPTION_IOS_OUTPUT_FORMAT_MACE6: "MAC6";

declare var Audio$RECORDING_OPTION_IOS_OUTPUT_FORMAT_ULAW: "ulaw";

declare var Audio$RECORDING_OPTION_IOS_OUTPUT_FORMAT_ALAW: "alaw";

declare var Audio$RECORDING_OPTION_IOS_OUTPUT_FORMAT_QDESIGN: "QDMC";

declare var Audio$RECORDING_OPTION_IOS_OUTPUT_FORMAT_QDESIGN2: "QDM2";

declare var Audio$RECORDING_OPTION_IOS_OUTPUT_FORMAT_QUALCOMM: "Qclp";

declare var Audio$RECORDING_OPTION_IOS_OUTPUT_FORMAT_MPEGLAYER1: ".mp1";

declare var Audio$RECORDING_OPTION_IOS_OUTPUT_FORMAT_MPEGLAYER2: ".mp2";

declare var Audio$RECORDING_OPTION_IOS_OUTPUT_FORMAT_MPEGLAYER3: ".mp3";

declare var Audio$RECORDING_OPTION_IOS_OUTPUT_FORMAT_APPLELOSSLESS: "alac";

declare var Audio$RECORDING_OPTION_IOS_OUTPUT_FORMAT_MPEG4AAC_HE: "aach";

declare var Audio$RECORDING_OPTION_IOS_OUTPUT_FORMAT_MPEG4AAC_LD: "aacl";

declare var Audio$RECORDING_OPTION_IOS_OUTPUT_FORMAT_MPEG4AAC_ELD: "aace";

declare var Audio$RECORDING_OPTION_IOS_OUTPUT_FORMAT_MPEG4AAC_ELD_SBR: "aacf";

declare var Audio$RECORDING_OPTION_IOS_OUTPUT_FORMAT_MPEG4AAC_ELD_V2: "aacg";

declare var Audio$RECORDING_OPTION_IOS_OUTPUT_FORMAT_MPEG4AAC_HE_V2: "aacp";

declare var Audio$RECORDING_OPTION_IOS_OUTPUT_FORMAT_MPEG4AAC_SPATIAL: "aacs";

declare var Audio$RECORDING_OPTION_IOS_OUTPUT_FORMAT_AMR: "samr";

declare var Audio$RECORDING_OPTION_IOS_OUTPUT_FORMAT_AMR_WB: "sawb";

declare var Audio$RECORDING_OPTION_IOS_OUTPUT_FORMAT_AUDIBLE: "AUDB";

declare var Audio$RECORDING_OPTION_IOS_OUTPUT_FORMAT_ILBC: "ilbc";

declare var Audio$RECORDING_OPTION_IOS_OUTPUT_FORMAT_DVIINTELIMA: 1836253201;

declare var Audio$RECORDING_OPTION_IOS_OUTPUT_FORMAT_MICROSOFTGSM: 1836253233;

declare var Audio$RECORDING_OPTION_IOS_OUTPUT_FORMAT_AES3: "aes3";

declare var Audio$RECORDING_OPTION_IOS_OUTPUT_FORMAT_ENHANCEDAC3: "ec-3";

declare var Audio$RECORDING_OPTION_IOS_AUDIO_QUALITY_MIN: 0;

declare var Audio$RECORDING_OPTION_IOS_AUDIO_QUALITY_LOW: 32;

declare var Audio$RECORDING_OPTION_IOS_AUDIO_QUALITY_MEDIUM: 64;

declare var Audio$RECORDING_OPTION_IOS_AUDIO_QUALITY_HIGH: 96;

declare var Audio$RECORDING_OPTION_IOS_AUDIO_QUALITY_MAX: 127;

declare var Audio$RECORDING_OPTION_IOS_BIT_RATE_STRATEGY_CONSTANT: 0;

declare var Audio$RECORDING_OPTION_IOS_BIT_RATE_STRATEGY_LONG_TERM_AVERAGE: 1;

declare var Audio$RECORDING_OPTION_IOS_BIT_RATE_STRATEGY_VARIABLE_CONSTRAINED: 2;

declare var Audio$RECORDING_OPTION_IOS_BIT_RATE_STRATEGY_VARIABLE: 3;

declare type Audio$RecordingStatus = {
canRecord: false,
isDoneRecording: false
} | {
canRecord: true,
isRecording: boolean,
durationMillis: number
} | {
canRecord: false,
isDoneRecording: true,
durationMillis: number
};

declare var Audio$RECORDING_OPTIONS_PRESET_HIGH_QUALITY: Audio$RecordingOptions;

declare var Audio$RECORDING_OPTIONS_PRESET_LOW_QUALITY: Audio$RecordingOptions;

declare interface Audio$RecordingOptions {
android: {
extension: string,
outputFormat: number,
audioEncoder: number,
sampleRate?: number,
numberOfChannels?: number,
bitRate?: number,
maxFileSize?: number
},
ios: {
extension: string,
outputFormat?: string | number,
audioQuality: number,
sampleRate: number,
numberOfChannels: number,
bitRate: number,
bitRateStrategy?: number,
bitDepthHint?: number,
linearPCMBitDepth?: number,
linearPCMIsBigEndian?: boolean,
linearPCMIsFloat?: boolean
}
} 

declare interface Audio$AudioMode {

/**
 * Boolean selecting if your experience’s audio should play in silent mode on iOS. This value defaults to `false`.
 */
playsInSilentModeIOS: boolean,

/**
 * Boolean selecting if recording is enabled on iOS. This value defaults to `false`. NOTE: when this flag is set to true, playback may be routed to the phone receiver instead of to the speaker.
 */
allowsRecordingIOS: boolean,

/**
 * Enum selecting how your experience’s audio should interact with the audio from other apps on iOS.
 */
interruptionModeIOS: Audio$InterruptionModeIos,

/**
 * Boolean selecting if your experience’s audio should automatically be lowered in volume ("duck") if audio from another app interrupts your experience. This value defaults to true. If false, audio from other apps will pause your audio.
 */
shouldDuckAndroid: boolean,

/**
 * an enum selecting how your experience’s audio should interact with the audio from other apps on Android:
 */
interruptionModeAndroid: Audio$InterruptionModeAndroid
} 

declare function Audio$setIsEnabledAsync(value: boolean): Promise<void>


declare function Audio$setAudioModeAsync(mode: Audio$AudioMode): Promise<void>



/**
 * This class represents a sound corresponding to an Asset or URL.
 */
declare class Audio$Sound mixins PlaybackObject {
constructor(): this;

/**
 * Creates and loads a sound from source, with optional `initialStatus`, `onPlaybackStatusUpdate`, and `downloadFirst`.
 * @returns A `Promise` that is rejected if creation failed, or fulfilled with the following dictionary if creation succeeded:
- `sound`: The newly created and loaded Sound object.
- `status`: The PlaybackStatus of the Sound object. See the AV documentation for further information.
 */
static createAsync(
source: PlaybackSource,
initialStatus?: PlaybackStatusToSet,
onPlaybackStatusUpdate?: ((status: PlaybackStatus) => void) | null,
downloadFirst?: boolean): Promise<{
sound: Audio$Sound,
status: PlaybackStatus
}>
}

declare class Audio$Recording  {
constructor(): this;

/**
 * Gets the `status` of the `Recording`.
 */
getStatusAsync(): Promise<Audio$RecordingStatus>;

/**
 * Sets a function to be called regularly with the `status` of the `Recording`.
 */
setOnRecordingStatusUpdate(onRecordingStatusUpdate?: (status: Audio$RecordingStatus) => void): void;

/**
 * Sets the interval with which onRecordingStatusUpdate is called while the recording can record. This value defaults to 500 milliseconds.
 */
setProgressUpdateInterval(progressUpdateIntervalMillis: number): void;

/**
 * Loads the recorder into memory and prepares it for recording. This must be called before calling `startAsync()`. This method can only be called if the `Recording` instance has never yet been prepared.
 */
prepareToRecordAsync(options?: Audio$RecordingOptions): Promise<Audio$RecordingStatus>;

/**
 * Begins recording. This method can only be called if the `Recording` has been prepared.
 */
startAsync(): Promise<Audio$RecordingStatus>;

/**
 * Pauses recording. This method can only be called if the Recording has been prepared.
 * 
 * NOTE: This is only available on Android API version 24 and later.
 */
pauseAsync(): Promise<Audio$RecordingStatus>;

/**
 * Stops the recording and deallocates the recorder from memory. This reverts the Recording instance to an unprepared state, and another Recording instance must be created in order to record again. This method can only be called if the `Recording` has been prepared.
 */
stopAndUnloadAsync(): Promise<Audio$RecordingStatus>;

/**
 * Gets the local URI of the Recording. Note that this will only succeed once the Recording is prepared to record.
 * @returns A string with the local URI of the `Recording`, or `null` if the `Recording` is not prepared to record.
 */
getURI(): string | null | void;

/**
 * Creates and loads a new `Sound` object to play back the `Recording`. Note that this will only succeed once the `Recording` is done recording (once `stopAndUnloadAsync()` has been called).
 * @returns A Promise that is rejected if creation failed, or fulfilled with the following dictionary if creation succeeded:
- `sound`: the newly created and loaded Sound object.
- `status`: the PlaybackStatus of the Sound object.
 */
createNewLoadedSound(
initialStatus?: PlaybackStatusToSet,
onPlaybackStatusUpdate?: ((status: PlaybackStatus) => void) | null): Promise<{
sound: Audio$Sound,
status: PlaybackStatus
}>
}
	
      declare var npm$namespace$AuthSession: {
        startAsync: typeof AuthSession$startAsync,
dismiss: typeof AuthSession$dismiss,
getRedirectUrl: typeof AuthSession$getRedirectUrl,
        
      }
declare type AuthSession$StartAsyncResponse = {
type: "cancel"
} | {
type: "dismissed"
} | {
type: "success",
params: HashMap,
event: HashMap
} | {
type: "error",
params: HashMap,
errorCode: string,
event: HashMap
};

declare function AuthSession$startAsync(
options: {
authUrl: string,
returnUrl?: string
}): Promise<AuthSession$StartAsyncResponse>


declare function AuthSession$dismiss(): void


declare function AuthSession$getRedirectUrl(): string

	
/**
 * AV
 */
declare export type PlaybackStatus = {
isLoaded: false,
androidImplementation?: string,

/**
 * Populated exactly once when an error forces the object to unload.
 */
error?: string
} | {
isLoaded: true,
androidImplementation?: string,
uri: string,
progressUpdateIntervalMillis: number,
durationMillis?: number,
positionMillis: number,
playableDurationMillis?: number,
shouldPlay: boolean,
isPlaying: boolean,
isBuffering: boolean,
rate: number,
shouldCorrectPitch: boolean,
volume: number,
isMuted: boolean,
isLooping: boolean,

/**
 * True exactly once when the track plays to finish.
 */
didJustFinish: boolean
};
	declare export interface PlaybackStatusToSet {
androidImplementation?: string,
isLooping?: boolean,
isMuted?: boolean,
positionMillis?: number,
progressUpdateIntervalMillis?: number,

/**
 * The desired playback rate of the media. This value must be between `0.0` and `32.0`. Only available on Android API version 23 and later and iOS.
 */
rate?: number,
shouldCorrectPitch?: boolean,
shouldPlay?: boolean,

/**
 * A number between `0.0` (silence) and `1.0` (maximum volume).
 */
volume?: number
} 
	declare export type PlaybackSource = RequireSource | {
uri: string
} | MediaLibrary$Asset;
	declare export class PlaybackObject  {

/**
 * Gets the `PlaybackStatus` of the `playbackObject`.
 * 
 * Returns a `Promise` that is fulfilled with the `PlaybackStatus` of the `playbackObject`.
 */
getStatusAsync(): Promise<PlaybackStatus>;

/**
 * Loads the media from source into memory and prepares it for playing. This must be called before calling setStatusAsync() or any of the convenience set status methods. This method can only be called if the playbackObject is in an unloaded state.
 * 
 * Returns a `Promise` that is fulfilled with the `PlaybackStatus` of the `playbackObject` once it is loaded, or rejects if loading failed. The `Promise` will also reject if the `playbackObject` was already loaded. See below for details on `PlaybackStatus`.
 */
loadAsync(
source: PlaybackSource,
initialStatus?: PlaybackStatusToSet,
downloadFirst?: boolean): Promise<PlaybackStatus>;

/**
 * This is equivalent to `playbackObject.setStatusAsync({ shouldPlay: false })`.
 */
pauseAsync(): Promise<PlaybackStatus>;

/**
 * This is equivalent to `playbackObject.setStatusAsync({ shouldPlay: true })`.
 * 
 * Playback may not start immediately after calling this function for reasons such as buffering. Make sure to update your UI based on the `isPlaying` and `isBuffering` properties of the `PlaybackStatus`.
 */
playAsync(): Promise<PlaybackStatus>;

/**
 * This is equivalent to `playbackObject.setStatusAsync({ shouldPlay: true, positionMillis: millis })`.
 * 
 * Playback may not start immediately after calling this function for reasons such as buffering. Make sure to update your UI based on the isPlaying and `isBuffering` properties of the `PlaybackStatus`.
 */
playFromPositionAsync(
positionMillis: number,
tolerances?: {
toleranceMillisBefore: number,
toleranceMillisAfter: number
}): Promise<PlaybackStatus>;

/**
 * Replays the item. When using `playFromPositionAsync(0)` the item is seeked to the position at `0` ms. On iOS this method uses internal implementation of the player and is able to play the item from the beginning immediately.
 * 
 * Returns a `Promise` that is fulfilled with the `PlaybackStatus` of the `playbackObject` once the new status has been set successfully, or rejects if setting the new status failed.
 */
replayAsync(status: PlaybackStatusToSet): Promise<PlaybackStatus>;

/**
 * This is equivalent to `playbackObject.setStatusAsync({ isLooping: value })`.
 */
setIsLoopingAsync(isLooping: boolean): Promise<PlaybackStatus>;

/**
 * This is equivalent to `playbackObject.setStatusAsync({ isMuted: value })`.
 */
setIsMutedAsync(isMuted: boolean): Promise<PlaybackStatus>;

/**
 * Sets a function to be called regularly with the `PlaybackStatus` of the `playbackObject`. See below for details on `PlaybackStatus` and an example use case of this function.
 * 
 * `onPlaybackStatusUpdate` will be called whenever a call to the API for this `playbackObject` completes (such as `setStatusAsync()`, `getStatusAsync()`, or `unloadAsync()`), and will also be called at regular intervals while the media is in the loaded state. Set `progressUpdateIntervalMillis` via `setStatusAsync()` or `setProgressUpdateIntervalAsync()` to modify the interval with which `onPlaybackStatusUpdate` is called while loaded.
 */
setOnPlaybackStatusUpdate(onPlaybackStatusUpdate?: (status: PlaybackStatus) => void): void;

/**
 * This is equivalent to `playbackObject.setStatusAsync({ positionMillis: millis })`.
 */
setPositionAsync(
positionMillis: number,
tolerances?: {
toleranceMillisBefore: number,
toleranceMillisAfter: number
}): Promise<PlaybackStatus>;

/**
 * This is equivalent to `playbackObject.setStatusAsync({ progressUpdateIntervalMillis: millis })`.
 */
setProgressUpdateIntervalAsync(progressUpdateIntervalMillis: number): Promise<PlaybackStatus>;

/**
 * This is equivalent to `playbackObject.setStatusAsync({ rate: value, shouldCorrectPitch: shouldCorrectPitch })`.
 */
setRateAsync(rate: number, shouldCorrectPitch: boolean): Promise<PlaybackStatus>;

/**
 * Sets a new `PlaybackStatusToSet` on the `playbackObject`. This method can only be called if the media has been loaded. Return a `Promise` that is fulfilled with the `PlaybackStatus` of the `playbackObject` once the new status has been set successfully, or rejects if setting the new status failed.
 */
setStatusAsync(status: PlaybackStatusToSet): Promise<PlaybackStatus>;

/**
 * This is equivalent to `playbackObject.setStatusAsync({ volume: value })`.
 */
setVolumeAsync(volume: number): Promise<PlaybackStatus>;

/**
 * This is equivalent to `playbackObject.setStatusAsync({ shouldPlay: false, positionMillis: 0 })`.
 */
stopAsync(): Promise<PlaybackStatus>;

/**
 * Unloads the media from memory. `loadAsync()` must be called again in order to be able to play the media.
 * 
 * Returns a `Promise` that is fulfilled with the `PlaybackStatus` of the `playbackObject` once it is unloaded, or rejects if unloading failed. See below for details on `PlaybackStatus`.
 */
unloadAsync(): Promise<PlaybackStatus>
}
	
/**
 * BarCodeScanner
 */
declare export type BarCodeScannerProps = {
type?: "front" | "back",
torchMode?: "on" | "off",
barCodeTypes?: string[],
onBarCodeScanned?: BarCodeScannedCallback
} & ViewProps

	declare export class BarCodeScanner mixins Component<BarCodeScannerProps> {
static Constants: {
TorchMode: {
on: string,
off: string
}
} & CameraConstants
}
	
/**
 * BlurView
 */
declare export type BlurViewProps = {
tint: "light" | "default" | "dark",
intensity: number
} & ViewProps

	declare export class BlurView mixins Component<BlurViewProps> {}
	
      declare var npm$namespace$Brightness: {
        setBrightnessAsync: typeof Brightness$setBrightnessAsync,
getBrightnessAsync: typeof Brightness$getBrightnessAsync,
getSystemBrightnessAsync: typeof Brightness$getSystemBrightnessAsync,
setSystemBrightnessAsync: typeof Brightness$setSystemBrightnessAsync,
        
      }

/**
 * Sets screen brightness.
 */
declare function Brightness$setBrightnessAsync(brightnessValue: number): Promise<void>



/**
 * Gets screen brightness.
 * @returns A Promise that is resolved with a number between `0` and `1`, representing the current screen brightness.
 */
declare function Brightness$getBrightnessAsync(): Promise<number>



/**
 * Gets global system screen brightness.
 * @returns A Promise that is resolved with a number between `0` and `1`, representing the current system screen brightness.
 */
declare function Brightness$getSystemBrightnessAsync(): Promise<number>



/**
 * Sets global system screen brightness, requires `WRITE_SETTINGS` permissions on Android.
 */
declare function Brightness$setSystemBrightnessAsync(brightnessValue: number): Promise<void>

	
/**
 * Camera
 */
declare export interface PictureOptions {
quality?: number,
base64?: boolean,
exif?: boolean,
onPictureSaved?: (data: PictureResponse) => void
} 
	declare export interface PictureResponse {
uri: string,
width: number,
height: number,
exif: string,
base64: string
} 
	declare export interface RecordingOptions {
quality?: string | number,
maxDuration?: number,
maxFileSize?: number
} 
	declare export class CameraObject  {
takePictureAsync(options?: PictureOptions): Promise<PictureResponse>;
recordAsync(options: Audio$RecordingOptions): Promise<{
uri: string
}>;
stopRecording(): void;
getSupportedRatiosAsync(): Promise<string[]>
}
	declare export type CameraProps = {
zoom?: number,
ratio?: string,

/**
 * Distance to plane of sharpest focus. A value between `0` and `1`. `0`: infinity focus, `1`: focus as close as possible. Default: `0`. For Android this is available only for some devices and when `useCamera2Api` is set to `true`.
 */
focusDepth?: number,
type?: number | string,
onCameraReady?: () => void,
useCamera2Api?: boolean,
flashMode?: number | string,
whiteBalance?: number | string,
autoFocus?: string | boolean | number,
pictureSize?: string,
videoStabilizationMode?: number,
onMountError?: (error: {
message: string
}) => void,
barCodeScannerSettings?: {
barCodeTypes?: Array<string | number>
},
onBarCodeScanned?: BarCodeScannedCallback,
faceDetectorSettings?: {
mode?: number,
runClassifications?: number,
detectLandmarks?: number
},
onFacesDetected?: (options: {
faces: TrackedFaceFeature[]
}) => void,
ref?: Ref<CameraObject>
} & ViewProps

	declare export interface CameraConstants {
+Type: {
back: string,
front: string
},
+FlashMode: {
on: string,
off: string,
auto: string,
torch: string
},
+AutoFocus: {
on: string,
off: string
},
+WhiteBalance: {
auto: string,
sunny: string,
cloudy: string,
shadow: string,
fluorescent: string,
incandescent: string
},
+VideoQuality: {
[videoQuality: string]: number
},
+BarCodeType: {
aztec: string,
codabar: string,
code39: string,
code93: string,
code128: string,
code138: string,
code39mod43: string,
datamatrix: string,
ean13: string,
ean8: string,
interleaved2of5: string,
itf14: string,
maxicode: string,
pdf417: string,
rss14: string,
rssexpanded: string,
upc_a: string,
upc_e: string,
upc_ean: string,
qr: string
}
} 
	declare export class Camera mixins Component<CameraProps> {
static Constants: CameraConstants
}
	
      declare var npm$namespace$Constants: {
        getWebViewUserAgentAsync: typeof Constants$getWebViewUserAgentAsync,
        appOwnership: typeof Constants$appOwnership,
expoVersion: typeof Constants$expoVersion,
installationId: typeof Constants$installationId,
deviceId: typeof Constants$deviceId,
deviceName: typeof Constants$deviceName,
deviceYearClass: typeof Constants$deviceYearClass,
isDevice: typeof Constants$isDevice,
platform: typeof Constants$platform,
sessionId: typeof Constants$sessionId,
statusBarHeight: typeof Constants$statusBarHeight,
systemFonts: typeof Constants$systemFonts,
manifest: typeof Constants$manifest,
linkingUri: typeof Constants$linkingUri,
      }
declare var Constants$appOwnership: "expo" | "standalone" | "guest";

declare var Constants$expoVersion: string;

declare var Constants$installationId: string;

declare var Constants$deviceId: string;

declare var Constants$deviceName: string;

declare var Constants$deviceYearClass: number;

declare var Constants$isDevice: boolean;

declare interface Constants$Platform {
ios?: {
platform: string,
model: string,
userInterfaceIdiom: string,
buildNumber: string
},
android?: {
versionCode: string
}
} 

declare var Constants$platform: Constants$Platform;

declare var Constants$sessionId: string;

declare var Constants$statusBarHeight: number;

declare var Constants$systemFonts: string[];

declare interface Constants$Manifest {
name: string,
description?: string,
slug?: string,
sdkVersion?: string,
version?: string,
orientation?: Orientation,
primaryColor?: string,
privacy?: "public" | "unlisted",
scheme?: string,
icon?: string,
platforms?: string[],
githubUrl?: string,
Haptic$notification?: {
icon?: string,
color?: string,
androidMode?: "default" | "collapse",
androidCollapsedTitle?: string
},
loading?: {
icon?: string,
exponentIconColor?: "white" | "blue",
exponentIconGrayscale?: 1 | 0,
backgroundImage?: string,
backgroundColor?: string,
hideExponentText?: boolean
},
appKey?: string,
androidStatusBar?: {
barStyle?: "light-content" | "dark-content",
backgroundColor?: string
},
androidShowExponentNotificationInShellApp?: boolean,
extra?: {
[propName: string]: any
},
rnCliPath?: any,
entryPoint?: string,
packagerOpts?: {
hostType?: string,
dev?: boolean,
strict?: boolean,
minify?: boolean,
urlType?: string,
urlRandomness?: string,
lanType?: string,
[propName: string]: any
},
ignoreNodeModulesValidation?: any,
nodeModulesPath?: string,
ios?: {
bundleIdentifier?: string,
buildNumber?: string,
config?: {
usesNonExemptEncryption?: boolean,
googleSignIn?: {
reservedClientId: string
}
},
supportsTablet?: boolean,
infoPlist?: any
},
android?: {
package?: string,
versionCode?: string,
config?: {
fabric?: {
apiKey: string,
buildSecret: string
},
googleMaps?: {
apiKey: string
},
googleSignIn?: {
apiKey: string,
certificateHash: string
}
}
},
facebookScheme?: any,
facebookAppId?: string,
facebookDisplayName?: string,
splash?: {
backgroundColor?: string,
resizeMode?: ResizeModeContain | ResizeModeCover,
image?: string
},
assetBundlePatterns?: string[],
releaseChannel: string,
[propName: string]: any
} 

declare var Constants$manifest: Constants$Manifest;

declare var Constants$linkingUri: string;

declare function Constants$getWebViewUserAgentAsync(): Promise<string>

	
      declare var npm$namespace$Contacts: {
        getContactsAsync: typeof Contacts$getContactsAsync,
getContactByIdAsync: typeof Contacts$getContactByIdAsync,
addContactAsync: typeof Contacts$addContactAsync,
updateContactAsync: typeof Contacts$updateContactAsync,
removeContactAsync: typeof Contacts$removeContactAsync,
writeContactToFileAsync: typeof Contacts$writeContactToFileAsync,
presentFormAsync: typeof Contacts$presentFormAsync,
addExistingGroupToContainerAsync: typeof Contacts$addExistingGroupToContainerAsync,
createGroupAsync: typeof Contacts$createGroupAsync,
updateGroupNameAsync: typeof Contacts$updateGroupNameAsync,
removeGroupAsync: typeof Contacts$removeGroupAsync,
addExistingContactToGroupAsync: typeof Contacts$addExistingContactToGroupAsync,
removeContactFromGroupAsync: typeof Contacts$removeContactFromGroupAsync,
getGroupsAsync: typeof Contacts$getGroupsAsync,
getDefaultContainerIdAsync: typeof Contacts$getDefaultContainerIdAsync,
getContainersAsync: typeof Contacts$getContainersAsync,
        
      }

      declare var npm$namespace$Fields: {
        
        ID: typeof Fields$ID,
Name: typeof Fields$Name,
FirstName: typeof Fields$FirstName,
MiddleName: typeof Fields$MiddleName,
LastName: typeof Fields$LastName,
NamePrefix: typeof Fields$NamePrefix,
NameSuffix: typeof Fields$NameSuffix,
PhoneticFirstName: typeof Fields$PhoneticFirstName,
PhoneticMiddleName: typeof Fields$PhoneticMiddleName,
PhoneticLastName: typeof Fields$PhoneticLastName,
Birthday: typeof Fields$Birthday,
Emails: typeof Fields$Emails,
PhoneNumbers: typeof Fields$PhoneNumbers,
Addresses: typeof Fields$Addresses,
InstantMessageAddresses: typeof Fields$InstantMessageAddresses,
UrlAddresses: typeof Fields$UrlAddresses,
Company: typeof Fields$Company,
JobTitle: typeof Fields$JobTitle,
Department: typeof Fields$Department,
ImageAvailable: typeof Fields$ImageAvailable,
Image: typeof Fields$Image,
Note: typeof Fields$Note,
Dates: typeof Fields$Dates,
Relationships: typeof Fields$Relationships,
Nickname: typeof Fields$Nickname,
RawImage: typeof Fields$RawImage,
MaidenName: typeof Fields$MaidenName,
ContactType: typeof Fields$ContactType,
SocialProfiles: typeof Fields$SocialProfiles,
NonGregorianBirthday: typeof Fields$NonGregorianBirthday,
      }
declare type Fields$ID = "id";

declare type Fields$Name = "name";

declare type Fields$FirstName = "firstName";

declare type Fields$MiddleName = "middleName";

declare type Fields$LastName = "lastName";

declare type Fields$NamePrefix = "namePrefix";

declare type Fields$NameSuffix = "nameSuffix";

declare type Fields$PhoneticFirstName = "phoneticFirstName";

declare type Fields$PhoneticMiddleName = "phoneticMiddleName";

declare type Fields$PhoneticLastName = "phoneticLastName";

declare type Fields$Birthday = "birthday";

declare type Fields$Emails = "emails";

declare type Fields$PhoneNumbers = "phoneNumbers";

declare type Fields$Addresses = "addresses";

declare type Fields$InstantMessageAddresses = "instantMessageAddresses";

declare type Fields$UrlAddresses = "urlAddresses";

declare type Fields$Company = "company";

declare type Fields$JobTitle = "jobTitle";

declare type Fields$Department = "department";

declare type Fields$ImageAvailable = "imageAvailable";

declare type Fields$Image = "image";

declare type Fields$Note = "note";

declare type Fields$Dates = "dates";

declare type Fields$Relationships = "relationships";

declare type Fields$Nickname = "nickname";

declare type Fields$RawImage = "rawImage";

declare type Fields$MaidenName = "maidenName";

declare type Fields$ContactType = "contactType";

declare type Fields$SocialProfiles = "socialProfiles";

declare type Fields$NonGregorianBirthday = "nonGregorianBirthday";

declare var Fields$ID: Fields$ID;

declare var Fields$Name: Fields$Name;

declare var Fields$FirstName: Fields$FirstName;

declare var Fields$MiddleName: Fields$MiddleName;

declare var Fields$LastName: Fields$LastName;

declare var Fields$NamePrefix: Fields$NamePrefix;

declare var Fields$NameSuffix: Fields$NameSuffix;

declare var Fields$PhoneticFirstName: Fields$PhoneticFirstName;

declare var Fields$PhoneticMiddleName: Fields$PhoneticMiddleName;

declare var Fields$PhoneticLastName: Fields$PhoneticLastName;

declare var Fields$Birthday: Fields$Birthday;

declare var Fields$Emails: Fields$Emails;

declare var Fields$PhoneNumbers: Fields$PhoneNumbers;

declare var Fields$Addresses: Fields$Addresses;

declare var Fields$InstantMessageAddresses: Fields$InstantMessageAddresses;

declare var Fields$UrlAddresses: Fields$UrlAddresses;

declare var Fields$Company: Fields$Company;

declare var Fields$JobTitle: Fields$JobTitle;

declare var Fields$Department: Fields$Department;

declare var Fields$ImageAvailable: Fields$ImageAvailable;

declare var Fields$Image: Fields$Image;

declare var Fields$Note: Fields$Note;

declare var Fields$Dates: Fields$Dates;

declare var Fields$Relationships: Fields$Relationships;

declare var Fields$Nickname: Fields$Nickname;

declare var Fields$RawImage: Fields$RawImage;

declare var Fields$MaidenName: Fields$MaidenName;

declare var Fields$ContactType: Fields$ContactType;

declare var Fields$SocialProfiles: Fields$SocialProfiles;

declare var Fields$NonGregorianBirthday: Fields$NonGregorianBirthday;

declare type Contacts$Field = Fields$Fields$ID
| Fields$Fields$Name
| Fields$Fields$FirstName
| Fields$Fields$MiddleName
| Fields$Fields$LastName
| Fields$Fields$NamePrefix
| Fields$Fields$NameSuffix
| Fields$Fields$PhoneticFirstName
| Fields$Fields$PhoneticMiddleName
| Fields$Fields$PhoneticLastName
| Fields$Fields$Birthday
| Fields$Fields$Emails
| Fields$Fields$PhoneNumbers
| Fields$Fields$Addresses
| Fields$Fields$InstantMessageAddresses
| Fields$Fields$UrlAddresses
| Fields$Fields$Company
| Fields$Fields$JobTitle
| Fields$Fields$Department
| Fields$Fields$ImageAvailable
| Fields$Fields$Image
| Fields$Fields$Note
| Fields$Fields$Dates
| Fields$Fields$Relationships
| Fields$Fields$Nickname
| Fields$Fields$RawImage
| Fields$Fields$MaidenName
| Fields$Fields$ContactType
| Fields$Fields$SocialProfiles
| Fields$Fields$NonGregorianBirthday;


      declare var npm$namespace$FormTypes: {
        
        New: typeof FormTypes$New,
Unknown: typeof FormTypes$Unknown,
Default: typeof FormTypes$Default,
      }
declare type FormTypes$New = "new";

declare type FormTypes$Unknown = "unknown";

declare type FormTypes$Default = "default";

declare var FormTypes$New: FormTypes$New;

declare var FormTypes$Unknown: FormTypes$Unknown;

declare var FormTypes$Default: FormTypes$Default;

declare type Contacts$FormType = FormTypes$FormTypes$New | FormTypes$FormTypes$Unknown | FormTypes$FormTypes$Default;


      declare var npm$namespace$ContactTypes: {
        
        Person: typeof ContactTypes$Person,
Company: typeof ContactTypes$Company,
      }
declare type ContactTypes$Person = "person";

declare type ContactTypes$Company = "company";

declare var ContactTypes$Person: ContactTypes$Person;

declare var ContactTypes$Company: ContactTypes$Company;

declare type Contacts$ContactType = "contactType";


      declare var npm$namespace$SortTypes: {
        
        FirstName: typeof SortTypes$FirstName,
LastName: typeof SortTypes$LastName,
UserDefault: typeof SortTypes$UserDefault,
      }
declare type SortTypes$FirstName = "firstName";

declare type SortTypes$LastName = "lastName";

declare type SortTypes$UserDefault = "userDefault";

declare var SortTypes$FirstName: SortTypes$FirstName;

declare var SortTypes$LastName: SortTypes$LastName;

declare var SortTypes$UserDefault: SortTypes$UserDefault;

declare type Contacts$SortType = SortTypes$SortTypes$FirstName | SortTypes$SortTypes$LastName | SortTypes$SortTypes$UserDefault;


      declare var npm$namespace$ContainerTypes: {
        
        Local: typeof ContainerTypes$Local,
Exchange: typeof ContainerTypes$Exchange,
CardDAV: typeof ContainerTypes$CardDAV,
Unassigned: typeof ContainerTypes$Unassigned,
      }
declare type ContainerTypes$Local = "local";

declare type ContainerTypes$Exchange = "exchange";

declare type ContainerTypes$CardDAV = "cardDAV";

declare type ContainerTypes$Unassigned = "unassigned";

declare var ContainerTypes$Local: ContainerTypes$Local;

declare var ContainerTypes$Exchange: ContainerTypes$Exchange;

declare var ContainerTypes$CardDAV: ContainerTypes$CardDAV;

declare var ContainerTypes$Unassigned: ContainerTypes$Unassigned;

declare type Contacts$ContainerType = ContainerTypes$ContainerTypes$Local | ContainerTypes$ContainerTypes$Exchange | ContainerTypes$ContainerTypes$CardDAV | ContainerTypes$ContainerTypes$Unassigned;


      declare var npm$namespace$CalendarFormats: {
        
        Gregorian: typeof CalendarFormats$Gregorian,
Chinese: typeof CalendarFormats$Chinese,
Hebrew: typeof CalendarFormats$Hebrew,
Islamic: typeof CalendarFormats$Islamic,
      }
declare type CalendarFormats$Gregorian = "gregorian";

declare type CalendarFormats$Chinese = "chinese";

declare type CalendarFormats$Hebrew = "hebrew";

declare type CalendarFormats$Islamic = "islamic";

declare var CalendarFormats$Gregorian: CalendarFormats$Gregorian;

declare var CalendarFormats$Chinese: CalendarFormats$Chinese;

declare var CalendarFormats$Hebrew: CalendarFormats$Hebrew;

declare var CalendarFormats$Islamic: CalendarFormats$Islamic;

declare type Contacts$CalendarFormat = CalendarFormats$CalendarFormats$Gregorian | CalendarFormats$CalendarFormats$Chinese | CalendarFormats$CalendarFormats$Hebrew | CalendarFormats$CalendarFormats$Islamic;


/**
 * A set of fields that define information about a single entity.
 */
declare interface Contacts$Contact {
id: string,
name: string,
firstName?: string,
middleName?: string,
lastName?: string,
maidenName?: string,
namePrefix?: string,
nameSuffix?: string,
nickname?: string,
phoneticFirstName?: string,
phoneticMiddleName?: string,
phoneticLastName?: string,
company?: string,
jobTitle?: string,
department?: string,
note?: string,
imageAvailable?: boolean,
image?: Fields$Image,
rawImage?: Fields$Image,
contactType: Contacts$ContactType,
birthday?: Contacts$ContactDate,
dates?: Contacts$ContactDate[],
relationships?: Contacts$Relationship[],
emails?: Contacts$Email[],
phoneNumbers?: Contacts$PhoneNumber[],
addresses?: Contacts$Address[],
instantMessageAddresses?: Contacts$InstantMessageAddress[],
urlAddresses?: Contacts$UrlAddress[],

/**
 * iOS only
 */
nonGregorianBirthday?: Contacts$ContactDate,

/**
 * iOS only
 */
socialProfiles?: Contacts$SocialProfile[]
} 

declare interface Contacts$ContactDate {
day: number,
month: number,
year: number,
format: Contacts$CalendarFormat,
id: string,
label: string
} 

declare interface Contacts$Relationship {
name: string,
id: string,
label: string
} 

declare interface Contacts$Email {
email: string,
isPrimary: boolean,
id: string,
label: string
} 

declare interface Contacts$PhoneNumber {
number: string,
isPrimary: boolean,
digits: string,
countryCode: string,
id: string,
label: string
} 

declare interface Contacts$Address {
street: string,
city: string,
country: string,
region: string,
neighborhood: string,
postalCode: string,
poBox: string,
isoCountryCode: string,
id: string,
label: string
} 


/**
 * iOS only
 */
declare interface Contacts$SocialProfile {
service: string,
username: string,
localizedProfile: string,
url: string,
userId: string,
id: string,
label: string
} 

declare interface Contacts$InstantMessageAddress {
service: string,
username: string,
localizedProfile: string,
id: string,
label: string
} 

declare interface Contacts$UrlAddress {
url: string,
id: string,
label: string
} 

declare type Contacts$Image = "image";


/**
 * A parent to contacts. A contact can belong to multiple groups.
 * iOS Only
 */
declare interface Contacts$Group {
id: string,
name: string
} 


/**
 * A parent to contacts and groups.
 * iOS Only
 */
declare interface Contacts$Container {
id: string,
name: string
} 


/**
 * Denotes the functionality of a native contact form
 */
declare interface Contacts$FormOptions {
displayedPropertyKeys?: Contacts$Field[],
message?: string,
alternateName?: string,
cancelButtonTitle?: string,
groupId?: string,
allowsEditing?: boolean,
allowsActions?: boolean,
shouldShowLinkedContacts?: boolean,
isNew?: boolean,
preventAnimation?: boolean
} 


/**
 * Used to query contacts from the user's device
 */
declare interface Contacts$ContactQuery {
fields?: Contacts$Field[],
pageSize?: number,
pageOffset?: number,
id?: string,

/**
 * Android Only
 */
sort?: Contacts$SortType,

/**
 * iOS Only
 */
name?: string,

/**
 * iOS Only
 */
groupId?: string,

/**
 * iOS Only
 */
containerID?: string,

/**
 * iOS Only
 */
rawContacts?: boolean
} 

declare interface Contacts$ContactResponse {
data: Contacts$Contact[],

/**
 * This will be true if there are more contacts to retrieve beyond what is returned
 */
hasNextPage: boolean,

/**
 * `true` if there are previous contacts that weren't retrieved due to `pageOffset`
 */
hasPreviousPage: boolean
} 


/**
 * Used to query native contact groups.
 * iOS Only
 */
declare interface Contacts$GroupQuery {
groupName?: string,
groupId?: string,
containerId?: string
} 


/**
 * Used to query native contact containers.
 * iOS Only
 */
declare interface Contacts$ContainerQuery {
contactId?: string,
groupId?: string,
containerId?: string
} 


/**
 * Return a list of contacts that fit a given criteria. You can get all of the contacts by passing no criteria.
 */
declare function Contacts$getContactsAsync(contactQuery?: Contacts$ContactQuery): Promise<Contacts$ContactResponse>



/**
 * Returns a contact matching the input id. Used for gathering precise data about a contact.
 */
declare function Contacts$getContactByIdAsync(contactId: string, fields?: Contacts$Field[]): Promise<Contacts$Contact>



/**
 * Creates a new contact and adds it to the system.
 * iOS Only - temporary
 */
declare function Contacts$addContactAsync(contact: Contacts$Contact, containerId?: string): Promise<string>



/**
 * Mutate the information of an existing contact.
 * iOS Only - temporary
 */
declare function Contacts$updateContactAsync(contact: Contacts$Contact): Promise<string>



/**
 * Delete a contact from the system.
 * iOS Only - temporary
 */
declare function Contacts$removeContactAsync(contactId: string): Promise<void>



/**
 * Query a set of contacts and write them to a local uri that can be used for sharing with `ReactNative.Share`.
 * iOS Only - temporary
 */
declare function Contacts$writeContactToFileAsync(contactQuery: Contacts$ContactQuery): Promise<string>



/**
 * Present a native form for manipulating contacts.
 * iOS Only
 */
declare function Contacts$presentFormAsync(
contactId: string,
contact?: Contacts$Contact,
formOptions?: Contacts$FormOptions): Promise<void>



/**
 * Add a group to a container.
 * iOS Only
 */
declare function Contacts$addExistingGroupToContainerAsync(groupId: string, containerId: string): Promise<void>



/**
 * Create a group with a name, and add it to a container. If the container is undefined, the default container will be targeted.
 * iOS Only
 */
declare function Contacts$createGroupAsync(groupName: string, containerId?: string): Promise<string>



/**
 * Change the name of an existing group.
 * iOS Only
 */
declare function Contacts$updateGroupNameAsync(groupName: string, groupId: string): Promise<void>



/**
 * Delete a group from the device.
 * iOS Only
 */
declare function Contacts$removeGroupAsync(groupId: string): Promise<void>



/**
 * Add a contact as a member to a group. A contact can be a member of multiple groups.
 * iOS Only
 */
declare function Contacts$addExistingContactToGroupAsync(contactId: string, groupId: string): Promise<void>



/**
 * Remove a contact's membership from a given group. This will not delete the contact.
 * iOS Only
 */
declare function Contacts$removeContactFromGroupAsync(contactId: string, groupId: string): Promise<void>



/**
 * Query and return a list of system groups.
 * iOS Only
 */
declare function Contacts$getGroupsAsync(query: Contacts$GroupQuery): Promise<Contacts$Group[]>



/**
 * Get the default container's ID.
 * iOS Only
 */
declare function Contacts$getDefaultContainerIdAsync(): Promise<string>



/**
 * Query a list of system containers.
 * iOS Only
 */
declare function Contacts$getContainersAsync(containerQuery: Contacts$ContainerQuery): Promise<Contacts$Container[]>

	
      declare var npm$namespace$DocumentPicker: {
        getDocumentAsync: typeof DocumentPicker$getDocumentAsync,
        
      }
declare interface DocumentPicker$Options {
type?: string,
permissions?: string[],
behavior?: "web" | "native" | "browser" | "system"
} 

declare type DocumentPicker$Response = {
type: "success",
uri: string,
name: string,
size: number
} | {
type: "cancel"
};

declare function DocumentPicker$getDocumentAsync(options?: DocumentPicker$Options): Promise<DocumentPicker$Response>

	
      declare var npm$namespace$ErrorRecovery: {
        setRecoveryProps: typeof ErrorRecovery$setRecoveryProps,
        
      }
declare function ErrorRecovery$setRecoveryProps(props: HashMap): void

	
      declare var npm$namespace$Facebook: {
        logInWithReadPermissionsAsync: typeof Facebook$logInWithReadPermissionsAsync,
        
      }
declare interface Facebook$Options {
type?: string,
permissions?: string[],
behavior?: "web" | "native" | "browser" | "system"
} 

declare type Facebook$Response = {
type: "success",
uri: string,
name: string,
size: number
} | {
type: "cancel"
};

declare function Facebook$logInWithReadPermissionsAsync(appId: string, options?: Facebook$Options): Promise<Facebook$Response>

	
      declare var npm$namespace$FacebookAds: {
        withNativeAd: typeof FacebookAds$withNativeAd,
        
      }

      declare var npm$namespace$InterstitialAdManager: {
        showAd: typeof InterstitialAdManager$showAd,
        
      }
declare function InterstitialAdManager$showAd(placementId: string): Promise<boolean>



/**
 * Native Ads
 */
declare type FacebookAds$MediaCachePolicy = "none" | "icon" | "image" | "all";

declare class FacebookAds$NativeAdsManager  {
constructor(placementId: string, numberOfAdsToRequest?: number): this;
disableAutoRefresh(): void;
setMediaCachePolicy(cachePolicy: FacebookAds$MediaCachePolicy): void
}

declare interface FacebookAds$NativeAd {

/**
 * The headline the advertiser entered when they created their ad. This is usually the ad's main
 * title.
 */
headline?: string,

/**
 * The link description which is additional information that the advertiser may have entered
 */
linkDescription?: string,

/**
 * The name of the Facebook Page or mobile app that represents the business running the ad
 */
advertiserName?: string,

/**
 * The ad's social context, such as, "Over half a million users"
 */
socialContext?: string,

/**
 * The call-to-action phrase of the ad, such as, "Install Now"
 */
callToActionText?: string,

/**
 * The body text, truncated to 90 characters, that contains the text the advertiser entered when
 * they created their ad to tell people what the ad promotes
 */
bodyText?: string,

/**
 * The word "ad", translated into the viewer's language
 */
adTranslation?: string,

/**
 * The word "promoted", translated into the viewer's language
 */
promotedTranslation?: string,

/**
 * The word "sponsored", translated into the viewer's language
 */
sponsoredTranslation?: string
} 

declare function FacebookAds$withNativeAd<P>(
component: Component<P & {
nativeAd: FacebookAds$NativeAd
}>): Component<{
adsManager: FacebookAds$NativeAdsManager,
onAdLoaded?: ((ad: FacebookAds$NativeAd) => void) | null
} & P, {
ad: FacebookAds$NativeAd | null,
canRequestAds: boolean
}>



/**
 * Banner View
 */
declare type FacebookAds$AdType = "large" | "rectangle" | "standard";

declare interface FacebookAds$BannerViewProps {
type: FacebookAds$AdType,
placementId: string,
onPress: () => void,
onError: () => void
} 

declare class FacebookAds$BannerView mixins Component<FacebookAds$BannerViewProps> {}

declare type FacebookAds$AdTriggerViewProps<P> = {
renderInteractiveComponent?: (props: P) => React.ReactElement<P>
} & P;

declare class FacebookAds$AdTriggerView<P> mixins Component<FacebookAds$AdTriggerViewProps<P>> {}

declare class FacebookAds$AdIconView mixins Component {}

declare class FacebookAds$AdMediaView mixins Component {}


      declare var npm$namespace$AdSettings: {
        addTestDevice: typeof AdSettings$addTestDevice,
clearTestDevices: typeof AdSettings$clearTestDevices,
setLogLevel: typeof AdSettings$setLogLevel,
setIsChildDirected: typeof AdSettings$setIsChildDirected,
setMediationService: typeof AdSettings$setMediationService,
setUrlPrefix: typeof AdSettings$setUrlPrefix,
        currentDeviceHash: typeof AdSettings$currentDeviceHash,
      }
declare var AdSettings$currentDeviceHash: string;

declare function AdSettings$addTestDevice(device: string): void


declare function AdSettings$clearTestDevices(): void


declare type AdSettings$SDKLogLevel = "none"
| "debug"
| "verbose"
| "warning"
| "error"
| "notification";

declare function AdSettings$setLogLevel(logLevel: AdSettings$SDKLogLevel): void


declare function AdSettings$setIsChildDirected(isDirected: boolean): void


declare function AdSettings$setMediationService(mediationService: string): void


declare function AdSettings$setUrlPrefix(urlPrefix: string): void

	
/**
 * FaceDetector
 */
declare export interface Point {
x: Axis,
y: Axis
} 
	declare export interface FaceFeature {
bounds: {
size: {
width: number,
height: number
},
origin: Point
},
smilingProbability?: number,
leftEarPosition?: Point,
rightEarPosition?: Point,
leftEyePosition?: Point,
leftEyeOpenProbability?: number,
rightEyePosition?: Point,
rightEyeOpenProbability?: number,
leftCheekPosition?: Point,
rightCheekPosition?: Point,
leftMouthPosition?: Point,
mouthPosition?: Point,
rightMouthPosition?: Point,
bottomMouthPosition?: Point,
noseBasePosition?: Point,
yawAngle?: number,
rollAngle?: number
} 
	declare export type TrackedFaceFeature = {
faceID?: number
} & FaceFeature

	
      declare var npm$namespace$FaceDetector: {
        detectFaces: typeof FaceDetector$detectFaces,
        Constants: typeof FaceDetector$Constants,
      }
declare interface FaceDetector$DetectFaceResult {
faces: FaceFeature[],
image: {
uri: string,
width: number,
height: number,
orientation: number
}
} 

declare interface FaceDetector$Mode {
fast: "fast",
accurate: "accurate"
} 

declare interface FaceDetector$_Shared {
all: "all",
none: "none"
} 

declare type FaceDetector$Landmarks = FaceDetector$_Shared;

declare type FaceDetector$Classifications = FaceDetector$_Shared;

declare interface FaceDetector$_Constants {
FaceDetector$Mode: FaceDetector$Mode,
FaceDetector$Landmarks: FaceDetector$Landmarks,
FaceDetector$Classifications: FaceDetector$Classifications
} 

declare var FaceDetector$Constants: FaceDetector$_Constants;

declare interface FaceDetector$DetectionOptions {
mode?: $Keys<FaceDetector$Mode>,
detectLandmarks?: $Keys<FaceDetector$Landmarks>,
runClassifications?: $Keys<FaceDetector$Classifications>
} 

declare function FaceDetector$detectFaces(
uri: string,
options?: FaceDetector$DetectionOptions): Promise<FaceDetector$DetectFaceResult>

	
      declare var npm$namespace$FileSystem: {
        getInfoAsync: typeof FileSystem$getInfoAsync,
readAsStringAsync: typeof FileSystem$readAsStringAsync,
writeAsStringAsync: typeof FileSystem$writeAsStringAsync,
deleteAsync: typeof FileSystem$deleteAsync,
moveAsync: typeof FileSystem$moveAsync,
copyAsync: typeof FileSystem$copyAsync,
makeDirectoryAsync: typeof FileSystem$makeDirectoryAsync,
readDirectoryAsync: typeof FileSystem$readDirectoryAsync,
downloadAsync: typeof FileSystem$downloadAsync,
createDownloadResumable: typeof FileSystem$createDownloadResumable,
        documentDirectory: typeof FileSystem$documentDirectory,
cacheDirectory: typeof FileSystem$cacheDirectory,
      }
declare type FileSystem$EncodingType = "utf8" | "base64";

declare type FileSystem$FileInfo = {
exists: true,
isDirectory: boolean,
uri: string,
size: number,
modificationTime: number,
md5?: Md5
} | {
exists: false,
isDirectory: false
};

declare interface FileSystem$ReadingOptions {
encoding?: FileSystem$EncodingType,
position?: number,
length?: number
} 

declare interface FileSystem$WritingOptions {
encoding?: FileSystem$EncodingType
} 

declare interface FileSystem$DownloadResult {
uri: string,
status: number,
headers: {
[name: string]: string
},
md5?: Md5
} 

declare var FileSystem$documentDirectory: string;

declare var FileSystem$cacheDirectory: string;

declare function FileSystem$getInfoAsync(
fileUri: string,
options?: {
md5?: string,
size?: boolean
}): Promise<FileSystem$FileInfo>


declare function FileSystem$readAsStringAsync(fileUri: string, options?: FileSystem$ReadingOptions): Promise<string>


declare function FileSystem$writeAsStringAsync(
fileUri: string,
contents: string,
options?: FileSystem$WritingOptions): Promise<void>


declare function FileSystem$deleteAsync(fileUri: string, options?: {
idempotent: boolean
}): Promise<void>


declare function FileSystem$moveAsync(options: {
from: string,
to: string
}): Promise<void>


declare function FileSystem$copyAsync(options: {
from: string,
to: string
}): Promise<void>


declare function FileSystem$makeDirectoryAsync(dirUri: string, options?: {
intermediates: boolean
}): Promise<void>


declare function FileSystem$readDirectoryAsync(dirUri: string): Promise<string[]>


declare function FileSystem$downloadAsync(
uri: string,
fileUri: string,
options?: {
md5?: boolean
}): Promise<FileSystem$DownloadResult>


declare function FileSystem$createDownloadResumable(
uri: string,
fileUri: string,
options?: FileSystem$DownloadOptions,
callback?: (totalBytesWritten: number, totalBytesExpectedToWrite: number) => void,
resumeData?: string | null): FileSystem$DownloadResumable


declare interface FileSystem$PauseResult {
url: string,
fileUri: string,
options: {
md5: boolean
},
resumeData: string
} 

declare interface FileSystem$DownloadOptions {
md5?: boolean,
headers?: {
[name: string]: string
}
} 

declare interface FileSystem$DownloadProgressData {
totalBytesWritten: number,
totalBytesExpectedToWrite: number
} 

declare type FileSystem$DownloadProgressCallback = (data: FileSystem$DownloadProgressData) => void;

declare class FileSystem$DownloadResumable  {
constructor(url: string, fileUri: string, options: FileSystem$DownloadOptions, callback?: FileSystem$DownloadProgressCallback, resumeData?: string): this;
downloadAsync(): Promise<FileSystem$DownloadResult>;
pauseAsync(): Promise<FileSystem$PauseResult>;
resumeAsync(): Promise<FileSystem$DownloadResult>;
savable(): FileSystem$PauseResult
}
	
      declare var npm$namespace$LocalAuthentication: {
        supportedAuthenticationTypesAsync: typeof LocalAuthentication$supportedAuthenticationTypesAsync,
hasHardwareAsync: typeof LocalAuthentication$hasHardwareAsync,
isEnrolledAsync: typeof LocalAuthentication$isEnrolledAsync,
authenticateAsync: typeof LocalAuthentication$authenticateAsync,
cancelAuthenticate: typeof LocalAuthentication$cancelAuthenticate,
        
      }
declare type LocalAuthentication$LocalAuthenticationResult = {
success: true
} | {
success: false,

/**
 * Error code in the case where authentication fails.
 */
error: string
};

declare interface LocalAuthentication$AuthenticationTypeType {
FINGERPRINT: number,
FACIAL_RECOGNITION: number
} 


/**
 * Determine the auhentication types supported on the device.
 */
declare function LocalAuthentication$supportedAuthenticationTypesAsync(): Promise<LocalAuthentication$AuthenticationTypeType[]>



/**
 * Determine whether a face or fingerprint scanner is available on the device.
 */
declare function LocalAuthentication$hasHardwareAsync(): Promise<boolean>



/**
 * Determine whether the device has saved fingerprints or facial data to use for authentication.
 */
declare function LocalAuthentication$isEnrolledAsync(): Promise<boolean>



/**
 * Attempts to authenticate via Fingerprint. Android: When using the fingerprint module on Android, you need to provide a UI component to prompt the user to scan their fingerprint, as the OS has no default alert for it.
 * @param promptMessage A message that is shown alongside the TouchID/FaceID prompt. (iOS only)
 */
declare function LocalAuthentication$authenticateAsync(
promptMessageIOS?: string): Promise<LocalAuthentication$LocalAuthenticationResult>



/**
 * Cancels the fingerprint authentication flow. (Android only)
 */
declare function LocalAuthentication$cancelAuthenticate(): void

	
      declare var npm$namespace$Font: {
        loadAsync: typeof Font$loadAsync,
        
      }
declare interface Font$FontMap {
[name: string]: RequireSource
} 

declare function Font$loadAsync(name: string, url: string): Promise<void>


declare function Font$loadAsync(map: Font$FontMap): Promise<void>

	declare export type ExpoWebGLRenderingContext = {
endFrameEXP(): void
} & WebGLRenderingContext

	
/**
 * A View that acts as an OpenGL ES render target. On mounting, an OpenGL ES
 * context is created. Its drawing buffer is presented as the contents of
 * the View every frame.
 */
declare export type GLViewProps = {

/**
 * A function that will be called when the OpenGL ES context is created.
 * Passes an object with a WebGLRenderingContext interface as an argument.
 */
onContextCreate(gl: ExpoWebGLRenderingContext): void,

/**
 * Number of MSAA samples to use on iOS. Defaults to 4. Ignored on Android.
 */
msaaSamples?: number
} & ViewProps

	declare export class GLView mixins Component<GLViewProps, {
msaaSamples: number
}> {}
	
      declare var npm$namespace$Google: {
        logInAsync: typeof Google$logInAsync,
        
      }
declare interface Google$LogInConfig {
androidClientId?: string,
androidStandaloneAppClientId?: string,
iosClientId?: string,
iosStandaloneAppClientId?: string,
webClientId?: string,
behavior?: "system" | "web",
scopes?: string[]
} 

declare type Google$LogInResult = {
type: "cancel"
} | {
type: "success",
accessToken: string,
idToken?: string,
refreshToken?: string,
serverAuthCode?: string,
user: {
id: string,
name: string,
givenName: string,
familyName: string,
photoUrl?: string,
email?: string
}
};

declare function Google$logInAsync(config: Google$LogInConfig): Promise<Google$LogInResult>

	
      declare var npm$namespace$Gyroscope: {
        addListener: typeof Gyroscope$addListener,
removeAllListeners: typeof Gyroscope$removeAllListeners,
setUpdateInterval: typeof Gyroscope$setUpdateInterval,
        
      }
declare interface Gyroscope$GyroscopeObject {
x: Axis,
y: Axis,
z: Axis
} 


/**
 * A callback that is invoked when an gyroscope update is available.
 */
declare function Gyroscope$addListener(listener: (obj: Gyroscope$GyroscopeObject) => any): EventSubscription



/**
 * Remove all listeners.
 */
declare function Gyroscope$removeAllListeners(): void



/**
 * Subscribe for updates to the gyroscope.
 */
declare function Gyroscope$setUpdateInterval(intervalMs: number): void

	
      declare var npm$namespace$ImageManipulator: {
        manipulateAsync: typeof ImageManipulator$manipulateAsync,
        
      }
declare type ImageManipulator$Action = ImageManipulator$Resize | ImageManipulator$Rotate | ImageManipulator$Flip | ImageManipulator$Crop;

declare interface ImageManipulator$Resize {
resize: {
width?: number,
height?: number
}
} 

declare interface ImageManipulator$Rotate {
rotate: number
} 

declare interface ImageManipulator$Flip {
flip?: {
vertical?: boolean,
horizontal?: boolean
}
} 

declare interface ImageManipulator$Crop {
originX: number,
originY: number,
width: number,
height: number
} 

declare interface ImageManipulator$ImageResult {
uri: string,
width: number,
height: number,
base64?: string,
"NO PRINT IMPLEMENTED: function Object() { [native code] }"
} 

declare interface ImageManipulator$SaveOptions {
base64?: boolean,

/**
 * A value in range `0` - `1` specifying compression level of the result image. `1` means no compression and `0` the highest compression.
 */
compress?: number,
format?: "jpeg" | "png"
} 

declare function ImageManipulator$manipulateAsync(
uri: string,
actions: ImageManipulator$Action[],
saveOptions?: ImageManipulator$SaveOptions): Promise<ImageManipulator$ImageResult>

	
      declare var npm$namespace$ImagePicker: {
        launchImageLibraryAsync: typeof ImagePicker$launchImageLibraryAsync,
launchCameraAsync: typeof ImagePicker$launchCameraAsync,
        MediaTypeOptions: typeof ImagePicker$MediaTypeOptions,
      }
declare interface ImagePicker$ImageInfo {
uri: string,
width: number,
height: number,
type: "video" | "image",
base64?: string,
exif?: {[key: string]: any},
duration?: number
} 

declare interface ImagePicker$ImageResult {
uri: string,
width: number,
height: number,
base64?: string,
"NO PRINT IMPLEMENTED: function Object() { [native code] }"
} 

declare interface ImagePicker$_MediaTypeOptions {
All: "All",
Videos: "Videos",
Images: "Images"
} 

declare var ImagePicker$MediaTypeOptions: ImagePicker$_MediaTypeOptions;

declare interface ImagePicker$ImageLibraryOptions {
allowsEditing?: boolean,
aspect?: [number, number],
quality?: number,
base64?: boolean,
exif?: boolean,
mediaTypes?: $Keys<ImagePicker$_MediaTypeOptions>
} 


/**
 * require Permissions.CAMERA_ROLL
 */
declare function ImagePicker$launchImageLibraryAsync(options?: ImagePicker$ImageLibraryOptions): Promise<ImagePicker$ImageResult>


declare interface ImagePicker$CameraOptions {
allowsEditing?: boolean,
aspect?: [number, number],
quality?: number,
base64?: boolean,
exif?: boolean
} 


/**
 * require Permissions.CAMERA_ROLL
 */
declare function ImagePicker$launchCameraAsync(options?: ImagePicker$CameraOptions): Promise<ImagePicker$ImageResult>

	
      declare var npm$namespace$IntentLauncherAndroid: {
        startActivityAsync: typeof IntentLauncherAndroid$startActivityAsync,
        ACTION_ACCESSIBILITY_SETTINGS: typeof IntentLauncherAndroid$ACTION_ACCESSIBILITY_SETTINGS,
ACTION_APP_NOTIFICATION_REDACTION: typeof IntentLauncherAndroid$ACTION_APP_NOTIFICATION_REDACTION,
ACTION_CONDITION_PROVIDER_SETTINGS: typeof IntentLauncherAndroid$ACTION_CONDITION_PROVIDER_SETTINGS,
ACTION_NOTIFICATION_LISTENER_SETTINGS: typeof IntentLauncherAndroid$ACTION_NOTIFICATION_LISTENER_SETTINGS,
ACTION_PRINT_SETTINGS: typeof IntentLauncherAndroid$ACTION_PRINT_SETTINGS,
ACTION_ADD_ACCOUNT_SETTINGS: typeof IntentLauncherAndroid$ACTION_ADD_ACCOUNT_SETTINGS,
ACTION_AIRPLANE_MODE_SETTINGS: typeof IntentLauncherAndroid$ACTION_AIRPLANE_MODE_SETTINGS,
ACTION_APN_SETTINGS: typeof IntentLauncherAndroid$ACTION_APN_SETTINGS,
ACTION_APPLICATION_DETAILS_SETTINGS: typeof IntentLauncherAndroid$ACTION_APPLICATION_DETAILS_SETTINGS,
ACTION_APPLICATION_DEVELOPMENT_SETTINGS: typeof IntentLauncherAndroid$ACTION_APPLICATION_DEVELOPMENT_SETTINGS,
ACTION_APPLICATION_SETTINGS: typeof IntentLauncherAndroid$ACTION_APPLICATION_SETTINGS,
ACTION_APP_NOTIFICATION_SETTINGS: typeof IntentLauncherAndroid$ACTION_APP_NOTIFICATION_SETTINGS,
ACTION_APP_OPS_SETTINGS: typeof IntentLauncherAndroid$ACTION_APP_OPS_SETTINGS,
ACTION_BATTERY_SAVER_SETTINGS: typeof IntentLauncherAndroid$ACTION_BATTERY_SAVER_SETTINGS,
ACTION_BLUETOOTH_SETTINGS: typeof IntentLauncherAndroid$ACTION_BLUETOOTH_SETTINGS,
ACTION_CAPTIONING_SETTINGS: typeof IntentLauncherAndroid$ACTION_CAPTIONING_SETTINGS,
ACTION_CAST_SETTINGS: typeof IntentLauncherAndroid$ACTION_CAST_SETTINGS,
ACTION_DATA_ROAMING_SETTINGS: typeof IntentLauncherAndroid$ACTION_DATA_ROAMING_SETTINGS,
ACTION_DATE_SETTINGS: typeof IntentLauncherAndroid$ACTION_DATE_SETTINGS,
ACTION_DEVICE_INFO_SETTINGS: typeof IntentLauncherAndroid$ACTION_DEVICE_INFO_SETTINGS,
ACTION_DEVICE_NAME: typeof IntentLauncherAndroid$ACTION_DEVICE_NAME,
ACTION_DISPLAY_SETTINGS: typeof IntentLauncherAndroid$ACTION_DISPLAY_SETTINGS,
ACTION_DREAM_SETTINGS: typeof IntentLauncherAndroid$ACTION_DREAM_SETTINGS,
ACTION_HARD_KEYBOARD_SETTINGS: typeof IntentLauncherAndroid$ACTION_HARD_KEYBOARD_SETTINGS,
ACTION_HOME_SETTINGS: typeof IntentLauncherAndroid$ACTION_HOME_SETTINGS,
ACTION_IGNORE_BACKGROUND_DATA_RESTRICTIONS_SETTINGS: typeof IntentLauncherAndroid$ACTION_IGNORE_BACKGROUND_DATA_RESTRICTIONS_SETTINGS,
ACTION_IGNORE_BATTERY_OPTIMIZATION_SETTINGS: typeof IntentLauncherAndroid$ACTION_IGNORE_BATTERY_OPTIMIZATION_SETTINGS,
ACTION_INPUT_METHOD_SETTINGS: typeof IntentLauncherAndroid$ACTION_INPUT_METHOD_SETTINGS,
ACTION_INPUT_METHOD_SUBTYPE_SETTINGS: typeof IntentLauncherAndroid$ACTION_INPUT_METHOD_SUBTYPE_SETTINGS,
ACTION_INTERNAL_STORAGE_SETTINGS: typeof IntentLauncherAndroid$ACTION_INTERNAL_STORAGE_SETTINGS,
ACTION_LOCALE_SETTINGS: typeof IntentLauncherAndroid$ACTION_LOCALE_SETTINGS,
ACTION_LOCATION_SOURCE_SETTINGS: typeof IntentLauncherAndroid$ACTION_LOCATION_SOURCE_SETTINGS,
ACTION_MANAGE_ALL_APPLICATIONS_SETTINGS: typeof IntentLauncherAndroid$ACTION_MANAGE_ALL_APPLICATIONS_SETTINGS,
ACTION_MANAGE_APPLICATIONS_SETTINGS: typeof IntentLauncherAndroid$ACTION_MANAGE_APPLICATIONS_SETTINGS,
ACTION_MANAGE_DEFAULT_APPS_SETTINGS: typeof IntentLauncherAndroid$ACTION_MANAGE_DEFAULT_APPS_SETTINGS,
ACTION_MEMORY_CARD_SETTINGS: typeof IntentLauncherAndroid$ACTION_MEMORY_CARD_SETTINGS,
ACTION_MONITORING_CERT_INFO: typeof IntentLauncherAndroid$ACTION_MONITORING_CERT_INFO,
ACTION_NETWORK_OPERATOR_SETTINGS: typeof IntentLauncherAndroid$ACTION_NETWORK_OPERATOR_SETTINGS,
ACTION_NFCSHARING_SETTINGS: typeof IntentLauncherAndroid$ACTION_NFCSHARING_SETTINGS,
ACTION_NFC_PAYMENT_SETTINGS: typeof IntentLauncherAndroid$ACTION_NFC_PAYMENT_SETTINGS,
ACTION_NFC_SETTINGS: typeof IntentLauncherAndroid$ACTION_NFC_SETTINGS,
ACTION_NIGHT_DISPLAY_SETTINGS: typeof IntentLauncherAndroid$ACTION_NIGHT_DISPLAY_SETTINGS,
ACTION_NOTIFICATION_POLICY_ACCESS_SETTINGS: typeof IntentLauncherAndroid$ACTION_NOTIFICATION_POLICY_ACCESS_SETTINGS,
ACTION_NOTIFICATION_SETTINGS: typeof IntentLauncherAndroid$ACTION_NOTIFICATION_SETTINGS,
ACTION_PAIRING_SETTINGS: typeof IntentLauncherAndroid$ACTION_PAIRING_SETTINGS,
ACTION_PRIVACY_SETTINGS: typeof IntentLauncherAndroid$ACTION_PRIVACY_SETTINGS,
ACTION_QUICK_LAUNCH_SETTINGS: typeof IntentLauncherAndroid$ACTION_QUICK_LAUNCH_SETTINGS,
ACTION_REQUEST_IGNORE_BATTERY_OPTIMIZATIONS: typeof IntentLauncherAndroid$ACTION_REQUEST_IGNORE_BATTERY_OPTIMIZATIONS,
ACTION_SECURITY_SETTINGS: typeof IntentLauncherAndroid$ACTION_SECURITY_SETTINGS,
ACTION_SETTINGS: typeof IntentLauncherAndroid$ACTION_SETTINGS,
ACTION_SHOW_ADMIN_SUPPORT_DETAILS: typeof IntentLauncherAndroid$ACTION_SHOW_ADMIN_SUPPORT_DETAILS,
ACTION_SHOW_INPUT_METHOD_PICKER: typeof IntentLauncherAndroid$ACTION_SHOW_INPUT_METHOD_PICKER,
ACTION_SHOW_REGULATORY_INFO: typeof IntentLauncherAndroid$ACTION_SHOW_REGULATORY_INFO,
ACTION_SHOW_REMOTE_BUGREPORT_DIALOG: typeof IntentLauncherAndroid$ACTION_SHOW_REMOTE_BUGREPORT_DIALOG,
ACTION_SOUND_SETTINGS: typeof IntentLauncherAndroid$ACTION_SOUND_SETTINGS,
ACTION_STORAGE_MANAGER_SETTINGS: typeof IntentLauncherAndroid$ACTION_STORAGE_MANAGER_SETTINGS,
ACTION_SYNC_SETTINGS: typeof IntentLauncherAndroid$ACTION_SYNC_SETTINGS,
ACTION_SYSTEM_UPDATE_SETTINGS: typeof IntentLauncherAndroid$ACTION_SYSTEM_UPDATE_SETTINGS,
ACTION_TETHER_PROVISIONING_UI: typeof IntentLauncherAndroid$ACTION_TETHER_PROVISIONING_UI,
ACTION_TRUSTED_CREDENTIALS_USER: typeof IntentLauncherAndroid$ACTION_TRUSTED_CREDENTIALS_USER,
ACTION_USAGE_ACCESS_SETTINGS: typeof IntentLauncherAndroid$ACTION_USAGE_ACCESS_SETTINGS,
ACTION_USER_DICTIONARY_INSERT: typeof IntentLauncherAndroid$ACTION_USER_DICTIONARY_INSERT,
ACTION_USER_DICTIONARY_SETTINGS: typeof IntentLauncherAndroid$ACTION_USER_DICTIONARY_SETTINGS,
ACTION_USER_SETTINGS: typeof IntentLauncherAndroid$ACTION_USER_SETTINGS,
ACTION_VOICE_CONTROL_AIRPLANE_MODE: typeof IntentLauncherAndroid$ACTION_VOICE_CONTROL_AIRPLANE_MODE,
ACTION_VOICE_CONTROL_BATTERY_SAVER_MODE: typeof IntentLauncherAndroid$ACTION_VOICE_CONTROL_BATTERY_SAVER_MODE,
ACTION_VOICE_CONTROL_DO_NOT_DISTURB_MODE: typeof IntentLauncherAndroid$ACTION_VOICE_CONTROL_DO_NOT_DISTURB_MODE,
ACTION_VOICE_INPUT_SETTINGS: typeof IntentLauncherAndroid$ACTION_VOICE_INPUT_SETTINGS,
ACTION_VPN_SETTINGS: typeof IntentLauncherAndroid$ACTION_VPN_SETTINGS,
ACTION_VR_LISTENER_SETTINGS: typeof IntentLauncherAndroid$ACTION_VR_LISTENER_SETTINGS,
ACTION_WEBVIEW_SETTINGS: typeof IntentLauncherAndroid$ACTION_WEBVIEW_SETTINGS,
ACTION_WIFI_IP_SETTINGS: typeof IntentLauncherAndroid$ACTION_WIFI_IP_SETTINGS,
ACTION_WIFI_SETTINGS: typeof IntentLauncherAndroid$ACTION_WIFI_SETTINGS,
ACTION_WIRELESS_SETTINGS: typeof IntentLauncherAndroid$ACTION_WIRELESS_SETTINGS,
ACTION_ZEN_MODE_AUTOMATION_SETTINGS: typeof IntentLauncherAndroid$ACTION_ZEN_MODE_AUTOMATION_SETTINGS,
ACTION_ZEN_MODE_EVENT_RULE_SETTINGS: typeof IntentLauncherAndroid$ACTION_ZEN_MODE_EVENT_RULE_SETTINGS,
ACTION_ZEN_MODE_EXTERNAL_RULE_SETTINGS: typeof IntentLauncherAndroid$ACTION_ZEN_MODE_EXTERNAL_RULE_SETTINGS,
ACTION_ZEN_MODE_PRIORITY_SETTINGS: typeof IntentLauncherAndroid$ACTION_ZEN_MODE_PRIORITY_SETTINGS,
ACTION_ZEN_MODE_SCHEDULE_RULE_SETTINGS: typeof IntentLauncherAndroid$ACTION_ZEN_MODE_SCHEDULE_RULE_SETTINGS,
ACTION_ZEN_MODE_SETTINGS: typeof IntentLauncherAndroid$ACTION_ZEN_MODE_SETTINGS,
      }
declare var IntentLauncherAndroid$ACTION_ACCESSIBILITY_SETTINGS: "android.settings.ACCESSIBILITY_SETTINGS";

declare var IntentLauncherAndroid$ACTION_APP_NOTIFICATION_REDACTION: "android.settings.ACTION_APP_NOTIFICATION_REDACTION";

declare var IntentLauncherAndroid$ACTION_CONDITION_PROVIDER_SETTINGS: "android.settings.ACTION_CONDITION_PROVIDER_SETTINGS";

declare var IntentLauncherAndroid$ACTION_NOTIFICATION_LISTENER_SETTINGS: "android.settings.ACTION_NOTIFICATION_LISTENER_SETTINGS";

declare var IntentLauncherAndroid$ACTION_PRINT_SETTINGS: "android.settings.ACTION_PRINT_SETTINGS";

declare var IntentLauncherAndroid$ACTION_ADD_ACCOUNT_SETTINGS: "android.settings.ADD_ACCOUNT_SETTINGS";

declare var IntentLauncherAndroid$ACTION_AIRPLANE_MODE_SETTINGS: "android.settings.AIRPLANE_MODE_SETTINGS";

declare var IntentLauncherAndroid$ACTION_APN_SETTINGS: "android.settings.APN_SETTINGS";

declare var IntentLauncherAndroid$ACTION_APPLICATION_DETAILS_SETTINGS: "android.settings.APPLICATION_DETAILS_SETTINGS";

declare var IntentLauncherAndroid$ACTION_APPLICATION_DEVELOPMENT_SETTINGS: "android.settings.APPLICATION_DEVELOPMENT_SETTINGS";

declare var IntentLauncherAndroid$ACTION_APPLICATION_SETTINGS: "android.settings.APPLICATION_SETTINGS";

declare var IntentLauncherAndroid$ACTION_APP_NOTIFICATION_SETTINGS: "android.settings.APP_NOTIFICATION_SETTINGS";

declare var IntentLauncherAndroid$ACTION_APP_OPS_SETTINGS: "android.settings.APP_OPS_SETTINGS";

declare var IntentLauncherAndroid$ACTION_BATTERY_SAVER_SETTINGS: "android.settings.BATTERY_SAVER_SETTINGS";

declare var IntentLauncherAndroid$ACTION_BLUETOOTH_SETTINGS: "android.settings.BLUETOOTH_SETTINGS";

declare var IntentLauncherAndroid$ACTION_CAPTIONING_SETTINGS: "android.settings.CAPTIONING_SETTINGS";

declare var IntentLauncherAndroid$ACTION_CAST_SETTINGS: "android.settings.CAST_SETTINGS";

declare var IntentLauncherAndroid$ACTION_DATA_ROAMING_SETTINGS: "android.settings.DATA_ROAMING_SETTINGS";

declare var IntentLauncherAndroid$ACTION_DATE_SETTINGS: "android.settings.DATE_SETTINGS";

declare var IntentLauncherAndroid$ACTION_DEVICE_INFO_SETTINGS: "android.settings.DEVICE_INFO_SETTINGS";

declare var IntentLauncherAndroid$ACTION_DEVICE_NAME: "android.settings.DEVICE_NAME";

declare var IntentLauncherAndroid$ACTION_DISPLAY_SETTINGS: "android.settings.DISPLAY_SETTINGS";

declare var IntentLauncherAndroid$ACTION_DREAM_SETTINGS: "android.settings.DREAM_SETTINGS";

declare var IntentLauncherAndroid$ACTION_HARD_KEYBOARD_SETTINGS: "android.settings.HARD_KEYBOARD_SETTINGS";

declare var IntentLauncherAndroid$ACTION_HOME_SETTINGS: "android.settings.HOME_SETTINGS";

declare var IntentLauncherAndroid$ACTION_IGNORE_BACKGROUND_DATA_RESTRICTIONS_SETTINGS: "android.settings.IGNORE_BACKGROUND_DATA_RESTRICTIONS_SETTINGS";

declare var IntentLauncherAndroid$ACTION_IGNORE_BATTERY_OPTIMIZATION_SETTINGS: "android.settings.IGNORE_BATTERY_OPTIMIZATION_SETTINGS";

declare var IntentLauncherAndroid$ACTION_INPUT_METHOD_SETTINGS: "android.settings.INPUT_METHOD_SETTINGS";

declare var IntentLauncherAndroid$ACTION_INPUT_METHOD_SUBTYPE_SETTINGS: "android.settings.INPUT_METHOD_SUBTYPE_SETTINGS";

declare var IntentLauncherAndroid$ACTION_INTERNAL_STORAGE_SETTINGS: "android.settings.INTERNAL_STORAGE_SETTINGS";

declare var IntentLauncherAndroid$ACTION_LOCALE_SETTINGS: "android.settings.LOCALE_SETTINGS";

declare var IntentLauncherAndroid$ACTION_LOCATION_SOURCE_SETTINGS: "android.settings.LOCATION_SOURCE_SETTINGS";

declare var IntentLauncherAndroid$ACTION_MANAGE_ALL_APPLICATIONS_SETTINGS: "android.settings.MANAGE_ALL_APPLICATIONS_SETTINGS";

declare var IntentLauncherAndroid$ACTION_MANAGE_APPLICATIONS_SETTINGS: "android.settings.MANAGE_APPLICATIONS_SETTINGS";

declare var IntentLauncherAndroid$ACTION_MANAGE_DEFAULT_APPS_SETTINGS: "android.settings.MANAGE_DEFAULT_APPS_SETTINGS";

declare var IntentLauncherAndroid$ACTION_MEMORY_CARD_SETTINGS: "android.settings.MEMORY_CARD_SETTINGS";

declare var IntentLauncherAndroid$ACTION_MONITORING_CERT_INFO: "android.settings.MONITORING_CERT_INFO";

declare var IntentLauncherAndroid$ACTION_NETWORK_OPERATOR_SETTINGS: "android.settings.NETWORK_OPERATOR_SETTINGS";

declare var IntentLauncherAndroid$ACTION_NFCSHARING_SETTINGS: "android.settings.NFCSHARING_SETTINGS";

declare var IntentLauncherAndroid$ACTION_NFC_PAYMENT_SETTINGS: "android.settings.NFC_PAYMENT_SETTINGS";

declare var IntentLauncherAndroid$ACTION_NFC_SETTINGS: "android.settings.NFC_SETTINGS";

declare var IntentLauncherAndroid$ACTION_NIGHT_DISPLAY_SETTINGS: "android.settings.NIGHT_DISPLAY_SETTINGS";

declare var IntentLauncherAndroid$ACTION_NOTIFICATION_POLICY_ACCESS_SETTINGS: "android.settings.NOTIFICATION_POLICY_ACCESS_SETTINGS";

declare var IntentLauncherAndroid$ACTION_NOTIFICATION_SETTINGS: "android.settings.NOTIFICATION_SETTINGS";

declare var IntentLauncherAndroid$ACTION_PAIRING_SETTINGS: "android.settings.PAIRING_SETTINGS";

declare var IntentLauncherAndroid$ACTION_PRIVACY_SETTINGS: "android.settings.PRIVACY_SETTINGS";

declare var IntentLauncherAndroid$ACTION_QUICK_LAUNCH_SETTINGS: "android.settings.QUICK_LAUNCH_SETTINGS";

declare var IntentLauncherAndroid$ACTION_REQUEST_IGNORE_BATTERY_OPTIMIZATIONS: "android.settings.REQUEST_IGNORE_BATTERY_OPTIMIZATIONS";

declare var IntentLauncherAndroid$ACTION_SECURITY_SETTINGS: "android.settings.SECURITY_SETTINGS";

declare var IntentLauncherAndroid$ACTION_SETTINGS: "android.settings.SETTINGS";

declare var IntentLauncherAndroid$ACTION_SHOW_ADMIN_SUPPORT_DETAILS: "android.settings.SHOW_ADMIN_SUPPORT_DETAILS";

declare var IntentLauncherAndroid$ACTION_SHOW_INPUT_METHOD_PICKER: "android.settings.SHOW_INPUT_METHOD_PICKER";

declare var IntentLauncherAndroid$ACTION_SHOW_REGULATORY_INFO: "android.settings.SHOW_REGULATORY_INFO";

declare var IntentLauncherAndroid$ACTION_SHOW_REMOTE_BUGREPORT_DIALOG: "android.settings.SHOW_REMOTE_BUGREPORT_DIALOG";

declare var IntentLauncherAndroid$ACTION_SOUND_SETTINGS: "android.settings.SOUND_SETTINGS";

declare var IntentLauncherAndroid$ACTION_STORAGE_MANAGER_SETTINGS: "android.settings.STORAGE_MANAGER_SETTINGS";

declare var IntentLauncherAndroid$ACTION_SYNC_SETTINGS: "android.settings.SYNC_SETTINGS";

declare var IntentLauncherAndroid$ACTION_SYSTEM_UPDATE_SETTINGS: "android.settings.SYSTEM_UPDATE_SETTINGS";

declare var IntentLauncherAndroid$ACTION_TETHER_PROVISIONING_UI: "android.settings.TETHER_PROVISIONING_UI";

declare var IntentLauncherAndroid$ACTION_TRUSTED_CREDENTIALS_USER: "android.settings.TRUSTED_CREDENTIALS_USER";

declare var IntentLauncherAndroid$ACTION_USAGE_ACCESS_SETTINGS: "android.settings.USAGE_ACCESS_SETTINGS";

declare var IntentLauncherAndroid$ACTION_USER_DICTIONARY_INSERT: "android.settings.USER_DICTIONARY_INSERT";

declare var IntentLauncherAndroid$ACTION_USER_DICTIONARY_SETTINGS: "android.settings.USER_DICTIONARY_SETTINGS";

declare var IntentLauncherAndroid$ACTION_USER_SETTINGS: "android.settings.USER_SETTINGS";

declare var IntentLauncherAndroid$ACTION_VOICE_CONTROL_AIRPLANE_MODE: "android.settings.VOICE_CONTROL_AIRPLANE_MODE";

declare var IntentLauncherAndroid$ACTION_VOICE_CONTROL_BATTERY_SAVER_MODE: "android.settings.VOICE_CONTROL_BATTERY_SAVER_MODE";

declare var IntentLauncherAndroid$ACTION_VOICE_CONTROL_DO_NOT_DISTURB_MODE: "android.settings.VOICE_CONTROL_DO_NOT_DISTURB_MODE";

declare var IntentLauncherAndroid$ACTION_VOICE_INPUT_SETTINGS: "android.settings.VOICE_INPUT_SETTINGS";

declare var IntentLauncherAndroid$ACTION_VPN_SETTINGS: "android.settings.VPN_SETTINGS";

declare var IntentLauncherAndroid$ACTION_VR_LISTENER_SETTINGS: "android.settings.VR_LISTENER_SETTINGS";

declare var IntentLauncherAndroid$ACTION_WEBVIEW_SETTINGS: "android.settings.WEBVIEW_SETTINGS";

declare var IntentLauncherAndroid$ACTION_WIFI_IP_SETTINGS: "android.settings.WIFI_IP_SETTINGS";

declare var IntentLauncherAndroid$ACTION_WIFI_SETTINGS: "android.settings.WIFI_SETTINGS";

declare var IntentLauncherAndroid$ACTION_WIRELESS_SETTINGS: "android.settings.WIRELESS_SETTINGS";

declare var IntentLauncherAndroid$ACTION_ZEN_MODE_AUTOMATION_SETTINGS: "android.settings.ZEN_MODE_AUTOMATION_SETTINGS";

declare var IntentLauncherAndroid$ACTION_ZEN_MODE_EVENT_RULE_SETTINGS: "android.settings.ZEN_MODE_EVENT_RULE_SETTINGS";

declare var IntentLauncherAndroid$ACTION_ZEN_MODE_EXTERNAL_RULE_SETTINGS: "android.settings.ZEN_MODE_EXTERNAL_RULE_SETTINGS";

declare var IntentLauncherAndroid$ACTION_ZEN_MODE_PRIORITY_SETTINGS: "android.settings.ZEN_MODE_PRIORITY_SETTINGS";

declare var IntentLauncherAndroid$ACTION_ZEN_MODE_SCHEDULE_RULE_SETTINGS: "android.settings.ZEN_MODE_SCHEDULE_RULE_SETTINGS";

declare var IntentLauncherAndroid$ACTION_ZEN_MODE_SETTINGS: "android.settings.ZEN_MODE_SETTINGS";

declare function IntentLauncherAndroid$startActivityAsync(activity: string, data?: HashMap): Promise<boolean>

	
/**
 * KeepAwake
 */
declare export class KeepAwake mixins Component {
static activate(): void;
static deactivate(): void
}
	
/**
 * LinearGradient
 */
declare export interface LinearGradientProps {
colors: string[],
start?: [number, number],
end?: [number, number],
locations?: number[],
style?: StyleProp<ViewStyle>
} 
	declare export class LinearGradient mixins Component<LinearGradientProps> {}
	
/**
 * Linking
 */
declare export interface LinkInfo {
path: string,
queryParams: $Shape<StringHashMap>
} 
	declare export type LinkingStatic = {
makeUrl(path: string, queryParams?: HashMap): string,
parse(url: string): LinkInfo,
parseInitialURLAsync(): Promise<LinkInfo>
} & ReactNativeLinkingStatic

	declare export var Linking: LinkingStatic;
	
      declare var npm$namespace$Location: {
        getCurrentPositionAsync: typeof Location$getCurrentPositionAsync,
watchPositionAsync: typeof Location$watchPositionAsync,
getProviderStatusAsync: typeof Location$getProviderStatusAsync,
getHeadingAsync: typeof Location$getHeadingAsync,
watchHeadingAsync: typeof Location$watchHeadingAsync,
geocodeAsync: typeof Location$geocodeAsync,
reverseGeocodeAsync: typeof Location$reverseGeocodeAsync,
requestPermissionsAsync: typeof Location$requestPermissionsAsync,
hasServicesEnabledAsync: typeof Location$hasServicesEnabledAsync,
startgeocodUpdatesAsync: typeof Location$startgeocodUpdatesAsync,
stopLocationUpdatesAsync: typeof Location$stopLocationUpdatesAsync,
hasStartedLocationUpdatesAsync: typeof Location$hasStartedLocationUpdatesAsync,
startGeofencingAsync: typeof Location$startGeofencingAsync,
stopGeofencingAsync: typeof Location$stopGeofencingAsync,
hasStartedGeofencingAsync: typeof Location$hasStartedGeofencingAsync,
setApiKey: typeof Location$setApiKey,
        
      }
declare interface Location$LocationOptions {
accuracy: number,
timeInterval?: number,
distanceInterval?: number,
timeout?: number
} 

declare interface Location$LocationProps {
latitude: number,
longitude: number
} 

declare type Location$Coords = {
altitude: number,
accuracy: number
} & Location$LocationProps


declare interface Location$LocationData {
coords: {
heading: number,
speed: number
} & Location$Coords,
timestamp: number
} 

declare interface Location$ProviderStatus {
locationServicesEnabled: boolean,
gpsAvailable?: boolean,
networkAvailable?: boolean,
passiveAvailable?: boolean
} 

declare interface Location$HeadingStatus {
magHeading: number,
trueHeading: number,
accuracy: number
} 

declare interface Location$GeocodeData {
city: string,
street: string,
region: string,
postalCode: string,
country: string,
name: string
} 

declare interface Location$LocationTaskOptions {
accuracy?: number,
showsBackgroundLocationIndicator?: boolean
} 

declare interface Location$Region {
identifier?: string,
latitude: number,
longitude: number,
radius: number,
notifyOnEnter?: boolean,
notifyOnExit?: boolean
} 

declare type Location$LocationCallback = (data: Location$LocationData) => void;

declare function Location$getCurrentPositionAsync(options: Location$LocationOptions): Promise<Location$LocationData>


declare function Location$watchPositionAsync(
options: Location$LocationOptions,
callback: Location$LocationCallback): EventSubscription


declare function Location$getProviderStatusAsync(): Promise<Location$ProviderStatus>


declare function Location$getHeadingAsync(): Promise<Location$HeadingStatus>


declare function Location$watchHeadingAsync(callback: (status: Location$HeadingStatus) => void): EventSubscription


declare function Location$geocodeAsync(address: string): Promise<Location$Coords>


declare function Location$reverseGeocodeAsync(location: Location$LocationProps): Promise<Location$GeocodeData[]>


declare function Location$requestPermissionsAsync(): Promise<void>


declare function Location$hasServicesEnabledAsync(): Promise<boolean>


declare function Location$startgeocodUpdatesAsync(taskName: string, options: Location$LocationTaskOptions): Promise<void>


declare function Location$stopLocationUpdatesAsync(taskName: string): Promise<void>


declare function Location$hasStartedLocationUpdatesAsync(taskName: string): Promise<boolean>


declare function Location$startGeofencingAsync(taskName: string, regions: Location$Region[]): Promise<void>


declare function Location$stopGeofencingAsync(taskName: string): Promise<void>


declare function Location$hasStartedGeofencingAsync(taskName: string): Promise<boolean>


declare function Location$setApiKey(key: string): void

	
      declare var npm$namespace$Magnetometer: {
        addListener: typeof Magnetometer$addListener,
removeAllListeners: typeof Magnetometer$removeAllListeners,
setUpdateInterval: typeof Magnetometer$setUpdateInterval,
        
      }
declare interface Magnetometer$MagnetometerObject {
x: Axis,
y: Axis,
z: Axis
} 

declare function Magnetometer$addListener(listener: (obj: Magnetometer$MagnetometerObject) => any): EventSubscription


declare function Magnetometer$removeAllListeners(): void


declare function Magnetometer$setUpdateInterval(intervalMs: number): void

	
      declare var npm$namespace$Notifications: {
        createCategoryAsync: typeof Notifications$createCategoryAsync,
deleteCategoryAsync: typeof Notifications$deleteCategoryAsync,
getExpoPushTokenAsync: typeof Notifications$getExpoPushTokenAsync,
getDevicePushTokenAsync: typeof Notifications$getDevicePushTokenAsync,
createChannelAndroidAsync: typeof Notifications$createChannelAndroidAsync,
deleteChannelAndroidAsync: typeof Notifications$deleteChannelAndroidAsync,
presentLocalNotificationAsync: typeof Notifications$presentLocalNotificationAsync,
scheduleLocalNotificationAsync: typeof Notifications$scheduleLocalNotificationAsync,
dismissNotificationAsync: typeof Notifications$dismissNotificationAsync,
dismissAllNotificationsAsync: typeof Notifications$dismissAllNotificationsAsync,
cancelScheduledNotificationAsync: typeof Notifications$cancelScheduledNotificationAsync,
cancelAllScheduledNotificationsAsync: typeof Notifications$cancelAllScheduledNotificationsAsync,
addListener: typeof Notifications$addListener,
getBadgeNumberAsync: typeof Notifications$getBadgeNumberAsync,
setBadgeNumberAsync: typeof Notifications$setBadgeNumberAsync,
        
      }
declare interface Notifications$Notification {
origin: "selected" | "received",
data: any,
remote: boolean,
isMultiple: boolean
} 

declare interface Notifications$LocalNotification {
title: string,
body?: string,
data?: any,
ios?: {
sound?: boolean
},
android?: {
channelId?: string,
icon?: string,
color?: string,
sticky?: boolean
}
} 

declare type Notifications$LocalNotificationId = string | number;

declare interface Notifications$Channel {
name: string,
description?: string,
priority?: string,
sound?: boolean,
vibrate?: boolean | number[],
badge?: boolean
} 

declare interface Notifications$ActionType {
actionId: string,
buttonTitle: string,
isDestructive?: boolean,
isAuthenticationRequired?: boolean,
textInput?: {
submitButtonTitle: string,
placeholder: string
}
} 

declare function Notifications$createCategoryAsync(categoryId: string, actions: Notifications$ActionType[]): Promise<void>


declare function Notifications$deleteCategoryAsync(categoryId: string): Promise<void>


declare function Notifications$getExpoPushTokenAsync(): Promise<string>


declare function Notifications$getDevicePushTokenAsync(config: {
gcmSenderId?: string
}): Promise<{
type: string,
data: string
}>


declare function Notifications$createChannelAndroidAsync(id: string, channel: Notifications$Channel): Promise<void>


declare function Notifications$deleteChannelAndroidAsync(id: string): Promise<void>


declare function Notifications$presentLocalNotificationAsync(
Haptic$notification: Notifications$LocalNotification): Promise<Notifications$LocalNotificationId>



/**
 * Schedule a notification at a later date
 */
declare function Notifications$scheduleLocalNotificationAsync(
Haptic$notification: Notifications$LocalNotification,
options?: {
time?: Date | number,
repeat?: "minute"
| "hour"
| "day"
| "week"
| "month"
| "year",
intervalMs?: number
}): Promise<Notifications$LocalNotificationId>



/**
 * Dismiss currently shown notification with ID (Android only)
 */
declare function Notifications$dismissNotificationAsync(notificationId: Notifications$LocalNotificationId): Promise<void>



/**
 * Dismiss all currently shown notifications (Android only)
 */
declare function Notifications$dismissAllNotificationsAsync(): Promise<void>



/**
 * Cancel scheduled notification notification with ID
 */
declare function Notifications$cancelScheduledNotificationAsync(notificationId: Notifications$LocalNotificationId): Promise<void>



/**
 * Cancel all scheduled notifications
 */
declare function Notifications$cancelAllScheduledNotificationsAsync(): Promise<void>


declare function Notifications$addListener(
listener: (Haptic$notification: Notifications$Notification) => any): EventSubscription


declare function Notifications$getBadgeNumberAsync(): Promise<number>


declare function Notifications$setBadgeNumberAsync(number: number): Promise<void>

	
      declare var npm$namespace$Pedometer: {
        isAvailableAsync: typeof Pedometer$isAvailableAsync,
getStepCountAsync: typeof Pedometer$getStepCountAsync,
watchStepCount: typeof Pedometer$watchStepCount,
        
      }
declare function Pedometer$isAvailableAsync(): Promise<boolean>


declare function Pedometer$getStepCountAsync(start: Date, end: Date): Promise<{
steps: number
}>


declare function Pedometer$watchStepCount(callback: (params: {
steps: number
}) => void): EventSubscription

	
      declare var npm$namespace$Permissions: {
        getAsync: typeof Permissions$getAsync,
askAsync: typeof Permissions$askAsync,
        AUDIO_RECORDING: typeof Permissions$AUDIO_RECORDING,
CALENDAR: typeof Permissions$CALENDAR,
CAMERA_ROLL: typeof Permissions$CAMERA_ROLL,
CAMERA: typeof Permissions$CAMERA,
CONTACTS: typeof Permissions$CONTACTS,
LOCATION: typeof Permissions$LOCATION,
NOTIFICATIONS: typeof Permissions$NOTIFICATIONS,
REMINDERS: typeof Permissions$REMINDERS,
SYSTEM_BRIGHTNESS: typeof Permissions$SYSTEM_BRIGHTNESS,
USER_FACING_NOTIFICATIONS: typeof Permissions$USER_FACING_NOTIFICATIONS,
SMS: typeof Permissions$SMS,
      }
declare type Permissions$PermissionType = "audioRecording"
| "calendar"
| "cameraRoll"
| "camera"
| "contacts"
| "location"
| "reminders"
| "notifications"
| "systemBrightness"
| "userFacingNotifications"
| "SMS";

declare type Permissions$PermissionStatus = "undetermined" | "granted" | "denied";

declare type Permissions$PermissionExpires = "never";

declare interface Permissions$PermissionDetailsLocationIOS {
scope: "whenInUse" | "always"
} 

declare interface Permissions$PermissionDetailsLocationAndroid {
scope: "fine" | "coarse" | "none"
} 

declare interface Permissions$SinglePermissionResponse {
status: Permissions$PermissionStatus,
expires: Permissions$PermissionExpires,
ios?: Permissions$PermissionDetailsLocationIOS,
android?: Permissions$PermissionDetailsLocationAndroid
} 

declare interface Permissions$PermissionResponse {
status: Permissions$PermissionStatus,
expires: Permissions$PermissionExpires,
permissions: $ObjMapi<{[k: Permissions$PermissionType]: any}, <key>(key) => Permissions$SinglePermissionResponse>
} 

declare function Permissions$getAsync(
...permissionTypes: Permissions$PermissionType[]): Promise<Permissions$PermissionResponse>


declare function Permissions$askAsync(
...permissionTypes: Permissions$PermissionType[]): Promise<Permissions$PermissionResponse>


declare var Permissions$AUDIO_RECORDING: "audioRecording";

declare var Permissions$CALENDAR: "calendar";

declare var Permissions$CAMERA_ROLL: "cameraRoll";

declare var Permissions$CAMERA: "camera";

declare var Permissions$CONTACTS: "contacts";

declare var Permissions$LOCATION: "location";

declare var Permissions$NOTIFICATIONS: "notifications";

declare var Permissions$REMINDERS: "reminders";

declare var Permissions$SYSTEM_BRIGHTNESS: "systemBrightness";

declare var Permissions$USER_FACING_NOTIFICATIONS: "userFacingNotifications";


/**
 * Will be removed in SDK 32
 */
declare var Permissions$SMS: "SMS";
	
/**
 * Register Root Component
 */
declare export function registerRootComponent(component: ComponentType): void

	
      declare var npm$namespace$ScreenOrientation: {
        allow: typeof ScreenOrientation$allow,
        Orientation: typeof ScreenOrientation$Orientation,
      }
declare interface ScreenOrientation$Orientations {
ALL: "ALL",
ALL_BUT_UPSIDE_DOWN: "ALL_BUT_UPSIDE_DOWN",
PORTRAIT: "PORTRAIT",
PORTRAIT_UP: "PORTRAIT_UP",
PORTRAIT_DOWN: "PORTRAIT_DOWN",
LANDSCAPE: "LANDSCAPE",
LANDSCAPE_LEFT: "LANDSCAPE_LEFT",
LANDSCAPE_RIGHT: "LANDSCAPE_RIGHT"
} 

declare var ScreenOrientation$Orientation: ScreenOrientation$Orientations;

declare function ScreenOrientation$allow(orientation: $Keys<ScreenOrientation$Orientations>): void

	
      declare var npm$namespace$SecureStore: {
        setItemAsync: typeof SecureStore$setItemAsync,
getItemAsync: typeof SecureStore$getItemAsync,
deleteItemAsync: typeof SecureStore$deleteItemAsync,
        WHEN_UNLOCKED: typeof SecureStore$WHEN_UNLOCKED,
AFTER_FIRST_UNLOCK: typeof SecureStore$AFTER_FIRST_UNLOCK,
ALWAYS: typeof SecureStore$ALWAYS,
WHEN_UNLOCKED_THIS_DEVICE_ONLY: typeof SecureStore$WHEN_UNLOCKED_THIS_DEVICE_ONLY,
WHEN_PASSCODE_SET_THIS_DEVICE_ONLY: typeof SecureStore$WHEN_PASSCODE_SET_THIS_DEVICE_ONLY,
AFTER_FIRST_UNLOCK_THIS_DEVICE_ONLY: typeof SecureStore$AFTER_FIRST_UNLOCK_THIS_DEVICE_ONLY,
ALWAYS_THIS_DEVICE_ONLY: typeof SecureStore$ALWAYS_THIS_DEVICE_ONLY,
      }
declare interface SecureStore$SecureStoreOptions {
keychainService?: string
} 

declare type SecureStore$SecureStoreSetOptions = {
keychainAccessible?: number
} & SecureStore$SecureStoreOptions


declare function SecureStore$setItemAsync(
key: string,
value: string,
options?: SecureStore$SecureStoreSetOptions): Promise<void>


declare function SecureStore$getItemAsync(key: string, options?: SecureStore$SecureStoreOptions): Promise<string | null>


declare function SecureStore$deleteItemAsync(key: string, options?: SecureStore$SecureStoreOptions): Promise<void>


declare var SecureStore$WHEN_UNLOCKED: number;

declare var SecureStore$AFTER_FIRST_UNLOCK: number;

declare var SecureStore$ALWAYS: number;

declare var SecureStore$WHEN_UNLOCKED_THIS_DEVICE_ONLY: number;

declare var SecureStore$WHEN_PASSCODE_SET_THIS_DEVICE_ONLY: number;

declare var SecureStore$AFTER_FIRST_UNLOCK_THIS_DEVICE_ONLY: number;

declare var SecureStore$ALWAYS_THIS_DEVICE_ONLY: number;
	
      declare var npm$namespace$Segment: {
        initialize: typeof Segment$initialize,
identify: typeof Segment$identify,
identifyWithTraits: typeof Segment$identifyWithTraits,
track: typeof Segment$track,
alias: typeof Segment$alias,
reset: typeof Segment$reset,
trackWithProperties: typeof Segment$trackWithProperties,
screen: typeof Segment$screen,
screenWithProperties: typeof Segment$screenWithProperties,
flush: typeof Segment$flush,
getEnabledAsync: typeof Segment$getEnabledAsync,
setEnabledAsync: typeof Segment$setEnabledAsync,
        
      }
declare function Segment$initialize(keys: {
androidWriteKey: string,
iosWriteKey: string
}): void


declare function Segment$identify(userId: string): void


declare function Segment$identifyWithTraits(userId: string, traits: {[key: string]: any}): void


declare function Segment$track(event: string): void


declare function Segment$alias(newId: string, options?: {
[key: string]: any
}): Promise<boolean>


declare function Segment$reset(): void


declare function Segment$trackWithProperties(event: string, properties: {[key: string]: any}): void


declare function Segment$screen(screenName: string): void


declare function Segment$screenWithProperties(screenName: string, properties: {[key: string]: any}): void


declare function Segment$flush(): void


declare function Segment$getEnabledAsync(): void


declare function Segment$setEnabledAsync(enabled: boolean): void

	
      declare var npm$namespace$Speech: {
        speak: typeof Speech$speak,
stop: typeof Speech$stop,
isSpeakingAsync: typeof Speech$isSpeakingAsync,
pause: typeof Speech$pause,
resume: typeof Speech$resume,
        
      }
declare interface Speech$SpeechOptions {
language?: string,
pitch?: number,
rate?: number,
onStart?: () => void,
onStopped?: () => void,
onDone?: () => void,
onError?: (error: EventType$Error) => void
} 

declare function Speech$speak(text: string, options?: Speech$SpeechOptions): void


declare function Speech$stop(): void


declare function Speech$isSpeakingAsync(): Promise<boolean>



/**
 * Available on iOS only
 */
declare function Speech$pause(): void



/**
 * Available on iOS only
 */
declare function Speech$resume(): void

	
      declare var npm$namespace$SQLite: {
        openDatabase: typeof SQLite$openDatabase,
        
      }
declare type SQLite$Error = any;

declare interface SQLite$Database {
transaction(
callback: (transaction: SQLite$Transaction) => any,
error?: (error: SQLite$Error) => any,
success?: () => any): void
} 

declare interface SQLite$Transaction {
executeSql(
sqlStatement: string,
arguments?: string[] | number[],
success?: (transaction: SQLite$Transaction, resultSet: SQLite$ResultSet) => any,
error?: (transaction: SQLite$Transaction, error: SQLite$Error) => any): void
} 

declare interface SQLite$ResultSet {
insertId: number,
rowAffected: number,
rows: {
length: number,
item: (index: number) => any,
_array: HashMap[]
}
} 

declare function SQLite$openDatabase(
name: string | {
name: string,
version?: string,
description?: string,
size?: number,
callback?: () => any
},
version?: string,
description?: string,
size?: number,
callback?: () => any): any

	
/**
 * Svg
 */
declare export interface SvgCommonProps {
fill?: string,
fillOpacity?: number | string,
fillRule?: "nonzero" | "evenodd",
opacity?: number | string,
stroke?: string,
strokeWidth?: number | string,
strokeOpacity?: number | string,
strokeLinecap?: string,
strokeLineJoin?: string,
strokeDasharray?: any[],
strokeDashoffset?: any,
transform?: string | {[key: string]: any},
x?: number | string,
y?: number | string,
rotate?: number | string,
rotation?: number | string,
scale?: number | string,
origin?: number | string,
originX?: number | string,
originY?: number | string,
id?: string,
disabled?: boolean,
onPress?: () => any,
onPressIn?: () => any,
onPressOut?: () => any,
onLongPress?: () => any,
delayPressIn?: number,
delayPressOut?: number,
delayLongPress?: number
} 
	declare export type SvgRectProps = {
width: number | string,
height: number | string,
rx?: number | string,
ry?: number | string
} & SvgCommonProps

	declare export type SvgCircleProps = {
cx: number | string,
cy: number | string,
r: number | string
} & SvgCommonProps

	declare export type SvgEllipseProps = {
cx: number | string,
cy: number | string,
rx: number | string,
ry: number | string
} & SvgCommonProps

	declare export type SvgLineProps = {
x1: number | string,
y1: number | string,
x2: number | string,
y2: number | string
} & SvgCommonProps

	declare export type SvgPolyProps = {
points: string
} & SvgCommonProps

	declare export type SvgPathProps = {
d: string
} & SvgCommonProps

	declare export type SvgTextProps = {
textAnchor?: string,
fontSize?: number | string,
fontWeight?: string
} & SvgCommonProps

	declare export type SvgTSpanProps = {
dx?: string,
dy?: string
} & SvgTextProps

	declare export type SvgTextPathProps = {
href?: string,
startOffset?: string
} & SvgCommonProps

	declare export type SvgUseProps = {
href: string,
x: number | string,
y: number | string,
width?: number | string,
height?: number | string
} & SvgCommonProps

	declare export type SvgSymbolProps = {
viewBox: string,
preserveAspectRatio?: string,
width: number | string,
height: number | string
} & SvgCommonProps

	declare export type SvgLinearGradientProps = {
x1: number | string,
x2: number | string,
y1: number | string,
y2: number | string
} & SvgCommonProps

	declare export type SvgRadialGradientProps = {
cx: number | string,
cy: number | string,
rx: number | string,
ry: number | string,
fx: number | string,
fy: number | string,
gradientUnits?: string
} & SvgCommonProps

	declare export type SvgStopProps = {
offset?: string,
stopColor?: string,
stopOpacity?: string
} & SvgCommonProps

	declare export class Svg mixins Component<{
width: number,
height: number,
viewBox?: string,
preserveAspectRatio?: string
}> {
static Circle: ComponentClass<SvgCircleProps>;
static ClipPath: ComponentClass<SvgCommonProps>;
static Defs: ComponentClass;
static Ellipse: ComponentClass<SvgEllipseProps>;
static G: ComponentClass<SvgCommonProps>;
static Line: ComponentClass<SvgLineProps>;
static LinearGradient: ComponentClass<SvgLinearGradientProps>;
static Path: ComponentClass<SvgPathProps>;
static Polygon: ComponentClass<SvgPolyProps>;
static Polyline: ComponentClass<SvgPolyProps>;
static RadialGradient: ComponentClass<SvgRadialGradientProps>;
static Rect: ComponentClass<SvgRectProps>;
static Stop: ComponentClass<SvgStopProps>;
static Symbol: ComponentClass<SvgSymbolProps>;
static Text: ComponentClass<SvgTextProps>;
static TextPath: ComponentClass<SvgTextPathProps>;
static TSpan: ComponentClass<SvgTSpanProps>;
static Use: ComponentClass<SvgUseProps>
}
	
/**
 * Take Snapshot
 */
declare export function takeSnapshotAsync(
node: number | React.ReactElement<any> | React.RefObject<any>,
options?: {
width?: number,
height?: number,
format: "png" | "jpg" | "raw" | "webm",
quality: number,
snapshotContentContainer: boolean,
result: "tmpfile" | "base64" | "data-uri" | "zip-base64"
}): Promise<string>

	
      declare var npm$namespace$Util: {
        getCurrentDeviceCountryAsync: typeof Util$getCurrentDeviceCountryAsync,
getCurrentLocaleAsync: typeof Util$getCurrentLocaleAsync,
getCurrentTimeZoneAsync: typeof Util$getCurrentTimeZoneAsync,
reload: typeof Util$reload,
addNewVersionListenerExperimental: typeof Util$addNewVersionListenerExperimental,
        
      }

/**
 * Returns the current device country code.
 */
declare function Util$getCurrentDeviceCountryAsync(): Promise<string>



/**
 * Returns the current device locale as a string.
 */
declare function Util$getCurrentLocaleAsync(): Promise<string>



/**
 * Returns the current device time zone name.
 */
declare function Util$getCurrentTimeZoneAsync(): Promise<string>



/**
 * Reloads the current experience. This will fetch and load the newest available JavaScript supported by the device’s Expo environment. This is useful for triggering an update of your experience if you have published a new version.
 */
declare function Util$reload(): void



/**
 * _Android only_. Invokes a callback when a new version of your app is successfully downloaded in the background.
 */
declare function Util$addNewVersionListenerExperimental(
listener: (event: {
Constants$manifest: {[key: string]: any}
}) => void): {
remove(): void
}

	
/**
 * Expo Video
 */
declare export interface NaturalSize {
width: number,
height: number,
orientation: ScreenOrientation$Orientation
} 
	declare export interface ReadyForDisplayEvent {
naturalSize: NaturalSize,
status: PlaybackStatus
} 
	declare export  class FullscreenUpdateVariants {
  constructor(...args: empty): mixed;
static +IOS_FULLSCREEN_UPDATE_PLAYER_WILL_PRESENT: Class<FullscreenUpdateVariants__IOS_FULLSCREEN_UPDATE_PLAYER_WILL_PRESENT> & FullscreenUpdateVariants__IOS_FULLSCREEN_UPDATE_PLAYER_WILL_PRESENT & 0;// 0
static +IOS_FULLSCREEN_UPDATE_PLAYER_DID_PRESENT: Class<FullscreenUpdateVariants__IOS_FULLSCREEN_UPDATE_PLAYER_DID_PRESENT> & FullscreenUpdateVariants__IOS_FULLSCREEN_UPDATE_PLAYER_DID_PRESENT & 1;// 1
static +IOS_FULLSCREEN_UPDATE_PLAYER_WILL_DISMISS: Class<FullscreenUpdateVariants__IOS_FULLSCREEN_UPDATE_PLAYER_WILL_DISMISS> & FullscreenUpdateVariants__IOS_FULLSCREEN_UPDATE_PLAYER_WILL_DISMISS & 2;// 2
static +IOS_FULLSCREEN_UPDATE_PLAYER_DID_DISMISS: Class<FullscreenUpdateVariants__IOS_FULLSCREEN_UPDATE_PLAYER_DID_DISMISS> & FullscreenUpdateVariants__IOS_FULLSCREEN_UPDATE_PLAYER_DID_DISMISS & 3;// 3

}

declare class FullscreenUpdateVariants__IOS_FULLSCREEN_UPDATE_PLAYER_WILL_PRESENT mixins FullscreenUpdateVariants {}
declare class FullscreenUpdateVariants__IOS_FULLSCREEN_UPDATE_PLAYER_DID_PRESENT mixins FullscreenUpdateVariants {}
declare class FullscreenUpdateVariants__IOS_FULLSCREEN_UPDATE_PLAYER_WILL_DISMISS mixins FullscreenUpdateVariants {}
declare class FullscreenUpdateVariants__IOS_FULLSCREEN_UPDATE_PLAYER_DID_DISMISS mixins FullscreenUpdateVariants {}

	declare export interface FullscreenUpdateEvent {
fullscreenUpdate: FullscreenUpdateVariants,
status: PlaybackStatus
} 
	declare export interface VideoProps {
source?: PlaybackSource | null,
posterSource?: URISource | RequireSource,
resizeMode?: ResizeModeContain | ResizeModeCover | ResizeModeStretch,
useNativeControls?: boolean,
usePoster?: boolean,
onPlaybackStatusUpdate?: (status: PlaybackStatus) => void,
onReadyForDisplay?: (event: ReadyForDisplayEvent) => void,
onIOSFullscreenUpdate?: (event: FullscreenUpdateEvent) => void,
onLoadStart?: () => void,
onLoad?: (status: PlaybackStatus) => void,
onError?: (error: string) => void,
status?: PlaybackStatusToSet,
progressUpdateIntervalMillis?: number,
positionMillis?: number,
shouldPlay?: boolean,
rate?: number,
shouldCorrectPitch?: boolean,
volume?: number,
isMuted?: boolean,
isLooping?: boolean,
scaleX?: number,
scaleY?: number,
translateX?: number,
translateY?: number,
rotation?: number,
ref?: Ref<PlaybackObject>,
style?: StyleProp<ViewStyle>
} 
	declare export interface VideoState {
showPoster: boolean
} 
	declare export class Video mixins Component<VideoProps, VideoState> {
static RESIZE_MODE_CONTAIN: ResizeModeContain;
static RESIZE_MODE_COVER: ResizeModeCover;
static RESIZE_MODE_STRETCH: ResizeModeStretch;
static IOS_FULLSCREEN_UPDATE_PLAYER_WILL_PRESENT: FullscreenUpdateVariants.IOS_FULLSCREEN_UPDATE_PLAYER_WILL_PRESENT;
static IOS_FULLSCREEN_UPDATE_PLAYER_DID_PRESENT: FullscreenUpdateVariants.IOS_FULLSCREEN_UPDATE_PLAYER_DID_PRESENT;
static IOS_FULLSCREEN_UPDATE_PLAYER_WILL_DISMISS: FullscreenUpdateVariants.IOS_FULLSCREEN_UPDATE_PLAYER_WILL_DISMISS;
static IOS_FULLSCREEN_UPDATE_PLAYER_DID_DISMISS: FullscreenUpdateVariants.IOS_FULLSCREEN_UPDATE_PLAYER_DID_DISMISS
}
	
      declare var npm$namespace$WebBrowser: {
        openBrowserAsync: typeof WebBrowser$openBrowserAsync,
openAuthSessionAsync: typeof WebBrowser$openAuthSessionAsync,
dismissBrowser: typeof WebBrowser$dismissBrowser,
        
      }
declare function WebBrowser$openBrowserAsync(url: string): Promise<{
type: "cancelled" | "dismissed"
}>


declare function WebBrowser$openAuthSessionAsync(
url: string,
redirectUrl?: string): Promise<{
type: "cancelled" | "dismissed"
}>


declare function WebBrowser$dismissBrowser(): Promise<{
type: "dismissed"
}>

	
      declare var npm$namespace$Calendar: {
        getCalendarsAsync: typeof Calendar$getCalendarsAsync,
createCalendarAsync: typeof Calendar$createCalendarAsync,
updateCalendarAsync: typeof Calendar$updateCalendarAsync,
deleteCalendarAsync: typeof Calendar$deleteCalendarAsync,
getEventsAsync: typeof Calendar$getEventsAsync,
getEventAsync: typeof Calendar$getEventAsync,
createEventAsync: typeof Calendar$createEventAsync,
updateEventAsync: typeof Calendar$updateEventAsync,
deleteEventAsync: typeof Calendar$deleteEventAsync,
getAttendeesForEventAsync: typeof Calendar$getAttendeesForEventAsync,
createAttendeeAsync: typeof Calendar$createAttendeeAsync,
updateAttendeeAsync: typeof Calendar$updateAttendeeAsync,
deleteAttendeeAsync: typeof Calendar$deleteAttendeeAsync,
getRemindersAsync: typeof Calendar$getRemindersAsync,
getReminderAsync: typeof Calendar$getReminderAsync,
createReminderAsync: typeof Calendar$createReminderAsync,
updateReminderAsync: typeof Calendar$updateReminderAsync,
deleteReminderAsync: typeof Calendar$deleteReminderAsync,
getSourcesAsync: typeof Calendar$getSourcesAsync,
getSourceAsync: typeof Calendar$getSourceAsync,
openEventInCalendar: typeof Calendar$openEventInCalendar,
        
      }
declare interface Calendar$Calendar {

/**
 * Internal ID that represents this calendar on the device
 */
id?: string,

/**
 * Visible name of the calendar
 */
title?: string,
sourceId?: string,

/**
 * Object representing the source to be used for the calendar
 */
source?: Calendar$Source,

/**
 * Type of calendar this object represents
 */
type?: Calendar$CalendarType,

/**
 * Color used to display this calendar’s events
 */
color?: string,

/**
 * Whether the calendar is used in the Calendar or Reminders OS app
 */
entityType?: Calendar$EntityTypes,

/**
 * Boolean value that determines whether this calendar can be modified
 */
allowsModifications?: boolean,

/**
 * Availability types that this calendar supports
 */
allowedAvailabilities?: Calendar$Availability[],

/**
 * Boolean value indicating whether this is the device’s primary calendar
 */
isPrimary?: boolean,

/**
 * Internal system name of the calendar
 */
name?: string,

/**
 * Name for the account that owns this calendar
 */
ownerAccount?: string,

/**
 * Time zone for the calendar
 */
timeZone?: string,

/**
 * Alarm methods that this calendar supports
 */
allowedReminders?: Calendar$AlarmMethod[],

/**
 * Attendee types that this calendar supports
 */
allowedAttendeeTypes?: Calendar$AttendeeType[],

/**
 * Indicates whether the OS displays events on this calendar
 */
isVisible?: boolean,

/**
 * Indicates whether this calendar is synced and its events stored on the device
 */
isSynced?: boolean,

/**
 * Level of access that the user has for the calendar
 */
accessLevel?: Calendar$CalendarAccessLevel
} 

declare interface Calendar$Source {

/**
 * Internal ID that represents this source on the device
 */
id?: string,

/**
 * Type of account that owns this calendar
 */
type?: string,

/**
 * Name for the account that owns this calendar
 */
name?: string,

/**
 * Whether this source is the local phone account
 */
isLocalAccount?: boolean
} 

declare interface Calendar$Event {

/**
 * Internal ID that represents this event on the device
 */
id?: string,

/**
 * ID of the calendar that contains this event
 */
calendarId?: string,

/**
 * Visible name of the event
 */
title?: string,

/**
 * Location field of the event
 */
location?: string,

/**
 * Date when the event record was created
 */
creationDate?: string,

/**
 * Date when the event record was last modified
 */
lastModifiedDate?: string,

/**
 * Time zone the event is scheduled in
 */
timeZone?: string,

/**
 * Time zone for the event end time
 */
endTimeZone?: string,

/**
 * URL for the event
 */
url?: string,

/**
 * Description or notes saved with the event
 */
notes?: string,

/**
 * Array of Alarm objects which control automated reminders to the user
 */
alarms?: Calendar$Alarm[],

/**
 * Object representing rules for recurring or repeating events. Null for one-time events.
 */
recurrenceRule?: Calendar$RecurrenceRule,

/**
 * Date object or string representing the time when the event starts
 */
startDate?: string | Date,

/**
 * Date object or string representing the time when the event ends
 */
endDate?: string | Date,

/**
 * For recurring events, the start date for the first (original) instance of the event
 */
originalStartDate?: string,

/**
 * Boolean value indicating whether or not the event is a detached (modified) instance of a recurring event
 */
isDetached?: boolean,

/**
 * Whether the event is displayed as an all-day event on the calendar
 */
allDay?: boolean,

/**
 * The availability setting for the event
 */
availability?: Calendar$Availability,

/**
 * Status of the event
 */
status?: Calendar$EventStatus,

/**
 * Organizer of the event, as an Attendee object
 */
organizer?: string,

/**
 * Email address of the organizer of the event
 */
organizerEmail?: string,

/**
 * User’s access level for the event
 */
accessLevel?: Calendar$EventAccessLevel,

/**
 * Whether invited guests can modify the details of the event
 */
guestsCanModify?: boolean,

/**
 * Whether invited guests can invite other guests
 */
guestsCanInviteOthers?: boolean,

/**
 * Whether invited guests can see other guests
 */
guestsCanSeeGuests?: boolean,

/**
 * For detached (modified) instances of recurring events, the ID of the original recurring event
 */
originalId?: string,

/**
 * For instances of recurring events, volatile ID representing this instance; not guaranteed to always refer to the same instance
 */
instanceId?: string
} 

declare interface Calendar$Attendee {

/**
 * Internal ID that represents this attendee on the device
 */
id?: string,

/**
 * Indicates whether or not this attendee is the current OS user
 */
isCurrentUser?: boolean,

/**
 * Displayed name of the attendee
 */
name?: string,

/**
 * Role of the attendee at the event
 */
role?: Calendar$AttendeeRole,

/**
 * Status of the attendee in relation to the event
 */
status?: Calendar$AttendeeStatus,

/**
 * Type of the attendee
 */
type?: Calendar$AttendeeType,

/**
 * URL for the attendee
 */
url?: string,

/**
 * Email address of the attendee
 */
email?: string
} 

declare interface Calendar$Reminder {

/**
 * Internal ID that represents this reminder on the device
 */
id?: string,

/**
 * ID of the calendar that contains this reminder
 */
calendarId?: string,

/**
 * Visible name of the reminder
 */
title?: string,

/**
 * Location field of the reminder
 */
location?: string,

/**
 * Date when the reminder record was created
 */
creationDate?: string,

/**
 * Date when the reminder record was last modified
 */
lastModifiedDate?: string,

/**
 * Time zone the reminder is scheduled in
 */
timeZone?: string,

/**
 * URL for the reminder
 */
url?: string,

/**
 * Description or notes saved with the reminder
 */
notes?: string,

/**
 * Array of Alarm objects which control automated alarms to the user about the task
 */
alarms?: Calendar$Alarm[],

/**
 * Object representing rules for recurring or repeated reminders. Null for one-time tasks.
 */
recurrenceRule?: Calendar$RecurrenceRule,

/**
 * Date object or string representing the start date of the reminder task
 */
startDate?: string,

/**
 * Date object or string representing the time when the reminder task is due
 */
dueDate?: string,

/**
 * Indicates whether or not the task has been completed
 */
completed?: boolean,

/**
 * Date object or string representing the date of completion, if completed is true
 */
completionDate?: string
} 

declare interface Calendar$Alarm {

/**
 * Date object or string representing an absolute time the alarm should occur; overrides relativeOffset and structuredLocation if specified alongside either
 */
absoluteDate?: string,

/**
 * Number of minutes from the startDate of the calendar item that the alarm should occur; use negative values to have the alarm occur before the startDate
 */
relativeOffset?: string,
structuredLocation?: {
title?: string,
proximity?: string,
radius?: number,
coords?: {
latitude?: number,
longitude?: number
}
},

/**
 * Method of alerting the user that this alarm should use; on iOS this is always a notification
 */
method?: Calendar$AlarmMethod
} 

declare interface Calendar$RecurrenceRule {

/**
 * How often the calendar item should recur
 */
frequency: Calendar$Frequency,

/**
 * Interval at which the calendar item should recur. For example, an interval: 2 with frequency: DAILY would yield an event that recurs every other day. Defaults to 1 .
 */
interval?: number,

/**
 * Date on which the calendar item should stop recurring; overrides occurrence if both are specified
 */
endDate?: string,

/**
 * Number of times the calendar item should recur before stopping
 */
occurrence?: number
} 

declare  class Calendar$EntityTypes {
  constructor(...args: empty): mixed;
static +EVENT: Class<Calendar$EntityTypes__EVENT> & Calendar$EntityTypes__EVENT & "event";// "event"
static +REMINDER: Class<Calendar$EntityTypes__REMINDER> & Calendar$EntityTypes__REMINDER & "reminder";// "reminder"

}

declare class Calendar$EntityTypes__EVENT mixins Calendar$EntityTypes {}
declare class Calendar$EntityTypes__REMINDER mixins Calendar$EntityTypes {}


declare  class Calendar$CalendarType {
  constructor(...args: empty): mixed;
static +LOCAL: Class<Calendar$CalendarType__LOCAL> & Calendar$CalendarType__LOCAL & "local";// "local"
static +CALDAV: Class<Calendar$CalendarType__CALDAV> & Calendar$CalendarType__CALDAV & "caldav";// "caldav"
static +EXCHANGE: Class<Calendar$CalendarType__EXCHANGE> & Calendar$CalendarType__EXCHANGE & "exchange";// "exchange"
static +SUBSCRIBED: Class<Calendar$CalendarType__SUBSCRIBED> & Calendar$CalendarType__SUBSCRIBED & "subscribed";// "subscribed"
static +BIRTHDAYS: Class<Calendar$CalendarType__BIRTHDAYS> & Calendar$CalendarType__BIRTHDAYS & "birthdays";// "birthdays"

}

declare class Calendar$CalendarType__LOCAL mixins Calendar$CalendarType {}
declare class Calendar$CalendarType__CALDAV mixins Calendar$CalendarType {}
declare class Calendar$CalendarType__EXCHANGE mixins Calendar$CalendarType {}
declare class Calendar$CalendarType__SUBSCRIBED mixins Calendar$CalendarType {}
declare class Calendar$CalendarType__BIRTHDAYS mixins Calendar$CalendarType {}


declare  class Calendar$Availability {
  constructor(...args: empty): mixed;
static +NOT_SUPPORTED: Class<Calendar$Availability__NOT_SUPPORTED> & Calendar$Availability__NOT_SUPPORTED & "notSupported";// "notSupported"
static +BUSY: Class<Calendar$Availability__BUSY> & Calendar$Availability__BUSY & "busy";// "busy"
static +FREE: Class<Calendar$Availability__FREE> & Calendar$Availability__FREE & "free";// "free"
static +TENTATIVE: Class<Calendar$Availability__TENTATIVE> & Calendar$Availability__TENTATIVE & "tentative";// "tentative"
static +UNAVAILABLE: Class<Calendar$Availability__UNAVAILABLE> & Calendar$Availability__UNAVAILABLE & "unavailable";// "unavailable"

}

declare class Calendar$Availability__NOT_SUPPORTED mixins Calendar$Availability {}
declare class Calendar$Availability__BUSY mixins Calendar$Availability {}
declare class Calendar$Availability__FREE mixins Calendar$Availability {}
declare class Calendar$Availability__TENTATIVE mixins Calendar$Availability {}
declare class Calendar$Availability__UNAVAILABLE mixins Calendar$Availability {}


declare  class Calendar$AlarmMethod {
  constructor(...args: empty): mixed;
static +ALARM: Class<Calendar$AlarmMethod__ALARM> & Calendar$AlarmMethod__ALARM & "alarm";// "alarm"
static +ALERT: Class<Calendar$AlarmMethod__ALERT> & Calendar$AlarmMethod__ALERT & "alert";// "alert"
static +EMAIL: Class<Calendar$AlarmMethod__EMAIL> & Calendar$AlarmMethod__EMAIL & "email";// "email"
static +SMS: Class<Calendar$AlarmMethod__SMS> & Calendar$AlarmMethod__SMS & "sms";// "sms"
static +DEFAULT: Class<Calendar$AlarmMethod__DEFAULT> & Calendar$AlarmMethod__DEFAULT & "default";// "default"

}

declare class Calendar$AlarmMethod__ALARM mixins Calendar$AlarmMethod {}
declare class Calendar$AlarmMethod__ALERT mixins Calendar$AlarmMethod {}
declare class Calendar$AlarmMethod__EMAIL mixins Calendar$AlarmMethod {}
declare class Calendar$AlarmMethod__SMS mixins Calendar$AlarmMethod {}
declare class Calendar$AlarmMethod__DEFAULT mixins Calendar$AlarmMethod {}


declare  class Calendar$AttendeeType {
  constructor(...args: empty): mixed;
static +UNKNOWN: Class<Calendar$AttendeeType__UNKNOWN> & Calendar$AttendeeType__UNKNOWN & "unknown";// "unknown"
static +PERSON: Class<Calendar$AttendeeType__PERSON> & Calendar$AttendeeType__PERSON & "person";// "person"
static +ROOM: Class<Calendar$AttendeeType__ROOM> & Calendar$AttendeeType__ROOM & "room";// "room"
static +GROUP: Class<Calendar$AttendeeType__GROUP> & Calendar$AttendeeType__GROUP & "group";// "group"
static +RESOURCE: Class<Calendar$AttendeeType__RESOURCE> & Calendar$AttendeeType__RESOURCE & "resource";// "resource"
static +OPTIONAL: Class<Calendar$AttendeeType__OPTIONAL> & Calendar$AttendeeType__OPTIONAL & "optional";// "optional"
static +REQUIRED: Class<Calendar$AttendeeType__REQUIRED> & Calendar$AttendeeType__REQUIRED & "required";// "required"
static +NONE: Class<Calendar$AttendeeType__NONE> & Calendar$AttendeeType__NONE & "none";// "none"

}

declare class Calendar$AttendeeType__UNKNOWN mixins Calendar$AttendeeType {}
declare class Calendar$AttendeeType__PERSON mixins Calendar$AttendeeType {}
declare class Calendar$AttendeeType__ROOM mixins Calendar$AttendeeType {}
declare class Calendar$AttendeeType__GROUP mixins Calendar$AttendeeType {}
declare class Calendar$AttendeeType__RESOURCE mixins Calendar$AttendeeType {}
declare class Calendar$AttendeeType__OPTIONAL mixins Calendar$AttendeeType {}
declare class Calendar$AttendeeType__REQUIRED mixins Calendar$AttendeeType {}
declare class Calendar$AttendeeType__NONE mixins Calendar$AttendeeType {}


declare  class Calendar$CalendarAccessLevel {
  constructor(...args: empty): mixed;
static +CONTRIBUTOR: Class<Calendar$CalendarAccessLevel__CONTRIBUTOR> & Calendar$CalendarAccessLevel__CONTRIBUTOR & "contributor";// "contributor"
static +EDITOR: Class<Calendar$CalendarAccessLevel__EDITOR> & Calendar$CalendarAccessLevel__EDITOR & "editor";// "editor"
static +FREEBUSY: Class<Calendar$CalendarAccessLevel__FREEBUSY> & Calendar$CalendarAccessLevel__FREEBUSY & "freebusy";// "freebusy"
static +OVERRIDE: Class<Calendar$CalendarAccessLevel__OVERRIDE> & Calendar$CalendarAccessLevel__OVERRIDE & "override";// "override"
static +OWNER: Class<Calendar$CalendarAccessLevel__OWNER> & Calendar$CalendarAccessLevel__OWNER & "owner";// "owner"
static +READ: Class<Calendar$CalendarAccessLevel__READ> & Calendar$CalendarAccessLevel__READ & "read";// "read"
static +RESPOND: Class<Calendar$CalendarAccessLevel__RESPOND> & Calendar$CalendarAccessLevel__RESPOND & "respond";// "respond"
static +ROOT: Class<Calendar$CalendarAccessLevel__ROOT> & Calendar$CalendarAccessLevel__ROOT & "root";// "root"
static +NONE: Class<Calendar$CalendarAccessLevel__NONE> & Calendar$CalendarAccessLevel__NONE & "none";// "none"

}

declare class Calendar$CalendarAccessLevel__CONTRIBUTOR mixins Calendar$CalendarAccessLevel {}
declare class Calendar$CalendarAccessLevel__EDITOR mixins Calendar$CalendarAccessLevel {}
declare class Calendar$CalendarAccessLevel__FREEBUSY mixins Calendar$CalendarAccessLevel {}
declare class Calendar$CalendarAccessLevel__OVERRIDE mixins Calendar$CalendarAccessLevel {}
declare class Calendar$CalendarAccessLevel__OWNER mixins Calendar$CalendarAccessLevel {}
declare class Calendar$CalendarAccessLevel__READ mixins Calendar$CalendarAccessLevel {}
declare class Calendar$CalendarAccessLevel__RESPOND mixins Calendar$CalendarAccessLevel {}
declare class Calendar$CalendarAccessLevel__ROOT mixins Calendar$CalendarAccessLevel {}
declare class Calendar$CalendarAccessLevel__NONE mixins Calendar$CalendarAccessLevel {}


declare  class Calendar$EventAccessLevel {
  constructor(...args: empty): mixed;
static +CONFIDENTIAL: Class<Calendar$EventAccessLevel__CONFIDENTIAL> & Calendar$EventAccessLevel__CONFIDENTIAL & "confidential";// "confidential"
static +PRIVATE: Class<Calendar$EventAccessLevel__PRIVATE> & Calendar$EventAccessLevel__PRIVATE & "private";// "private"
static +PUBLIC: Class<Calendar$EventAccessLevel__PUBLIC> & Calendar$EventAccessLevel__PUBLIC & "public";// "public"
static +DEFAULT: Class<Calendar$EventAccessLevel__DEFAULT> & Calendar$EventAccessLevel__DEFAULT & "default";// "default"

}

declare class Calendar$EventAccessLevel__CONFIDENTIAL mixins Calendar$EventAccessLevel {}
declare class Calendar$EventAccessLevel__PRIVATE mixins Calendar$EventAccessLevel {}
declare class Calendar$EventAccessLevel__PUBLIC mixins Calendar$EventAccessLevel {}
declare class Calendar$EventAccessLevel__DEFAULT mixins Calendar$EventAccessLevel {}


declare  class Calendar$EventStatus {
  constructor(...args: empty): mixed;
static +NONE: Class<Calendar$EventStatus__NONE> & Calendar$EventStatus__NONE & "none";// "none"
static +CONFIRMED: Class<Calendar$EventStatus__CONFIRMED> & Calendar$EventStatus__CONFIRMED & "confirmed";// "confirmed"
static +TENTATIVE: Class<Calendar$EventStatus__TENTATIVE> & Calendar$EventStatus__TENTATIVE & "tentative";// "tentative"
static +CANCELED: Class<Calendar$EventStatus__CANCELED> & Calendar$EventStatus__CANCELED & "canceled";// "canceled"

}

declare class Calendar$EventStatus__NONE mixins Calendar$EventStatus {}
declare class Calendar$EventStatus__CONFIRMED mixins Calendar$EventStatus {}
declare class Calendar$EventStatus__TENTATIVE mixins Calendar$EventStatus {}
declare class Calendar$EventStatus__CANCELED mixins Calendar$EventStatus {}


declare  class Calendar$AttendeeRole {
  constructor(...args: empty): mixed;
static +UNKNOWN: Class<Calendar$AttendeeRole__UNKNOWN> & Calendar$AttendeeRole__UNKNOWN & "unknown";// "unknown"
static +REQUIRED: Class<Calendar$AttendeeRole__REQUIRED> & Calendar$AttendeeRole__REQUIRED & "required";// "required"
static +OPTIONAL: Class<Calendar$AttendeeRole__OPTIONAL> & Calendar$AttendeeRole__OPTIONAL & "optional";// "optional"
static +CHAIR: Class<Calendar$AttendeeRole__CHAIR> & Calendar$AttendeeRole__CHAIR & "chair";// "chair"
static +NON_PARTICIPANT: Class<Calendar$AttendeeRole__NON_PARTICIPANT> & Calendar$AttendeeRole__NON_PARTICIPANT & "nonParticipant";// "nonParticipant"
static +ATTENDEE: Class<Calendar$AttendeeRole__ATTENDEE> & Calendar$AttendeeRole__ATTENDEE & "attendee";// "attendee"
static +ORGANIZER: Class<Calendar$AttendeeRole__ORGANIZER> & Calendar$AttendeeRole__ORGANIZER & "organizer";// "organizer"
static +PERFORMER: Class<Calendar$AttendeeRole__PERFORMER> & Calendar$AttendeeRole__PERFORMER & "performer";// "performer"
static +SPEAKER: Class<Calendar$AttendeeRole__SPEAKER> & Calendar$AttendeeRole__SPEAKER & "speaker";// "speaker"
static +NONE: Class<Calendar$AttendeeRole__NONE> & Calendar$AttendeeRole__NONE & "none";// "none"

}

declare class Calendar$AttendeeRole__UNKNOWN mixins Calendar$AttendeeRole {}
declare class Calendar$AttendeeRole__REQUIRED mixins Calendar$AttendeeRole {}
declare class Calendar$AttendeeRole__OPTIONAL mixins Calendar$AttendeeRole {}
declare class Calendar$AttendeeRole__CHAIR mixins Calendar$AttendeeRole {}
declare class Calendar$AttendeeRole__NON_PARTICIPANT mixins Calendar$AttendeeRole {}
declare class Calendar$AttendeeRole__ATTENDEE mixins Calendar$AttendeeRole {}
declare class Calendar$AttendeeRole__ORGANIZER mixins Calendar$AttendeeRole {}
declare class Calendar$AttendeeRole__PERFORMER mixins Calendar$AttendeeRole {}
declare class Calendar$AttendeeRole__SPEAKER mixins Calendar$AttendeeRole {}
declare class Calendar$AttendeeRole__NONE mixins Calendar$AttendeeRole {}


declare  class Calendar$AttendeeStatus {
  constructor(...args: empty): mixed;
static +UNKNOWN: Class<Calendar$AttendeeStatus__UNKNOWN> & Calendar$AttendeeStatus__UNKNOWN & "unknown";// "unknown"
static +PENDING: Class<Calendar$AttendeeStatus__PENDING> & Calendar$AttendeeStatus__PENDING & "pending";// "pending"
static +ACCEPTED: Class<Calendar$AttendeeStatus__ACCEPTED> & Calendar$AttendeeStatus__ACCEPTED & "accepted";// "accepted"
static +DECLINED: Class<Calendar$AttendeeStatus__DECLINED> & Calendar$AttendeeStatus__DECLINED & "declined";// "declined"
static +TENTATIVE: Class<Calendar$AttendeeStatus__TENTATIVE> & Calendar$AttendeeStatus__TENTATIVE & "tentative";// "tentative"
static +DELEGATED: Class<Calendar$AttendeeStatus__DELEGATED> & Calendar$AttendeeStatus__DELEGATED & "delegated";// "delegated"
static +COMPLETED: Class<Calendar$AttendeeStatus__COMPLETED> & Calendar$AttendeeStatus__COMPLETED & "completed";// "completed"
static +IN_PROCESS: Class<Calendar$AttendeeStatus__IN_PROCESS> & Calendar$AttendeeStatus__IN_PROCESS & "inProcess";// "inProcess"
static +INVITED: Class<Calendar$AttendeeStatus__INVITED> & Calendar$AttendeeStatus__INVITED & "invited";// "invited"
static +NONE: Class<Calendar$AttendeeStatus__NONE> & Calendar$AttendeeStatus__NONE & "none";// "none"

}

declare class Calendar$AttendeeStatus__UNKNOWN mixins Calendar$AttendeeStatus {}
declare class Calendar$AttendeeStatus__PENDING mixins Calendar$AttendeeStatus {}
declare class Calendar$AttendeeStatus__ACCEPTED mixins Calendar$AttendeeStatus {}
declare class Calendar$AttendeeStatus__DECLINED mixins Calendar$AttendeeStatus {}
declare class Calendar$AttendeeStatus__TENTATIVE mixins Calendar$AttendeeStatus {}
declare class Calendar$AttendeeStatus__DELEGATED mixins Calendar$AttendeeStatus {}
declare class Calendar$AttendeeStatus__COMPLETED mixins Calendar$AttendeeStatus {}
declare class Calendar$AttendeeStatus__IN_PROCESS mixins Calendar$AttendeeStatus {}
declare class Calendar$AttendeeStatus__INVITED mixins Calendar$AttendeeStatus {}
declare class Calendar$AttendeeStatus__NONE mixins Calendar$AttendeeStatus {}


declare  class Calendar$Frequency {
  constructor(...args: empty): mixed;
static +DAILY: Class<Calendar$Frequency__DAILY> & Calendar$Frequency__DAILY & "daily";// "daily"
static +WEEKLY: Class<Calendar$Frequency__WEEKLY> & Calendar$Frequency__WEEKLY & "weekly";// "weekly"
static +MONTHLY: Class<Calendar$Frequency__MONTHLY> & Calendar$Frequency__MONTHLY & "monthly";// "monthly"
static +YEARLY: Class<Calendar$Frequency__YEARLY> & Calendar$Frequency__YEARLY & "yearly";// "yearly"

}

declare class Calendar$Frequency__DAILY mixins Calendar$Frequency {}
declare class Calendar$Frequency__WEEKLY mixins Calendar$Frequency {}
declare class Calendar$Frequency__MONTHLY mixins Calendar$Frequency {}
declare class Calendar$Frequency__YEARLY mixins Calendar$Frequency {}


declare  class Calendar$ReminderStatus {
  constructor(...args: empty): mixed;
static +COMPLETED: Class<Calendar$ReminderStatus__COMPLETED> & Calendar$ReminderStatus__COMPLETED & "completed";// "completed"
static +INCOMPLETE: Class<Calendar$ReminderStatus__INCOMPLETE> & Calendar$ReminderStatus__INCOMPLETE & "incomplete";// "incomplete"

}

declare class Calendar$ReminderStatus__COMPLETED mixins Calendar$ReminderStatus {}
declare class Calendar$ReminderStatus__INCOMPLETE mixins Calendar$ReminderStatus {}


declare interface Calendar$RecurringEventOptions {
futureEvents?: boolean,
instanceStartDate?: string
} 


/**
 * Gets an array of calendar objects with details about the different calendars stored on the device.
 */
declare function Calendar$getCalendarsAsync(entityType?: Calendar$EntityTypes): Promise<Calendar$Calendar[]>



/**
 * Creates a new calendar on the device, allowing events to be added later and displayed.
 */
declare function Calendar$createCalendarAsync(details: Calendar$Calendar): Promise<string>



/**
 * Updates the provided details of an existing calendar stored on the device. To remove a property, explicitly set it to null in details
 */
declare function Calendar$updateCalendarAsync(id: string, details?: Calendar$Calendar | null): Promise<string>



/**
 * Deletes an existing calendar and all associated events/reminders/attendees from the device. Use with caution.
 */
declare function Calendar$deleteCalendarAsync(id: string): Promise<void>



/**
 * Returns all events in a given set of calendars over a specified time period.
 */
declare function Calendar$getEventsAsync(
calendarIds: string[],
startDate: Date,
endDate: Date): Promise<Calendar$Event[]>



/**
 * Returns a specific event selected by ID. If a specific instance of a recurring event is desired, the start date of this instance must also be provided, as instances of recurring events do not have their own unique and stable IDs on either iOS or Android.
 */
declare function Calendar$getEventAsync(
id: string,
recurringEventOptions?: Calendar$RecurringEventOptions): Promise<Calendar$Event>



/**
 * Creates a new event on the specified calendar.
 */
declare function Calendar$createEventAsync(calendarId: string, details?: Calendar$Event): Promise<string>



/**
 * Updates the provided details of an existing calendar stored on the device. To remove a property, explicitly set it to null in details
 */
declare function Calendar$updateEventAsync(
id: string,
details?: Calendar$Event | null,
recurrentEventOptions?: Calendar$RecurringEventOptions): Promise<string>



/**
 * Deletes an existing event from the device. Use with caution.
 */
declare function Calendar$deleteEventAsync(
id: string,
recurringEventOptions?: Calendar$RecurringEventOptions): Promise<void>



/**
 * Gets all attendees for a given event (or instance of a recurring event).
 */
declare function Calendar$getAttendeesForEventAsync(
eventId: string,
recurrentEventOptions?: Calendar$RecurringEventOptions): Promise<Calendar$Attendee[]>



/**
 * Available on Android only. Creates a new attendee record and adds it to the specified event. Note that if eventId specifies a recurring event, this will add the attendee to every instance of the event.
 */
declare function Calendar$createAttendeeAsync(eventId: string, details?: Calendar$Attendee): Promise<string>



/**
 * Available on Android only. Updates an existing attendee record. To remove a property, explicitly set it to null in details.
 */
declare function Calendar$updateAttendeeAsync(id: string, details?: Calendar$Attendee | null): Promise<string>



/**
 * Available on Android only. Deletes an existing attendee record from the device. Use with caution.
 */
declare function Calendar$deleteAttendeeAsync(id: string): Promise<void>



/**
 * Available on iOS only. Returns a list of reminders matching the provided criteria.
 */
declare function Calendar$getRemindersAsync(
calendarIds: string[],
status?: Calendar$ReminderStatus,
startDate?: Date,
endDate?: Date): Promise<Calendar$Reminder[]>



/**
 * Available on iOS only. Returns a specific reminder selected by ID.
 */
declare function Calendar$getReminderAsync(id: string): Promise<Calendar$Reminder>



/**
 * Available on iOS only. Creates a new reminder on the specified calendar.
 */
declare function Calendar$createReminderAsync(calendarId: string, details?: Calendar$Reminder): Promise<string>



/**
 * Available on iOS only. Updates the provided details of an existing reminder stored on the device. To remove a property, explicitly set it to null in details.
 */
declare function Calendar$updateReminderAsync(id: string, details?: Calendar$Reminder | null): Promise<string>



/**
 * Available on iOS only. Deletes an existing reminder from the device. Use with caution.
 */
declare function Calendar$deleteReminderAsync(id: string): Promise<void>



/**
 * Available on iOS only.
 */
declare function Calendar$getSourcesAsync(): Promise<Calendar$Source[]>



/**
 * Available on iOS only. Returns a specific source selected by ID.
 */
declare function Calendar$getSourceAsync(id: string): Promise<Calendar$Source>



/**
 * Available on Android only. Sends an intent to open the specified event in the OS Calendar app.
 */
declare function Calendar$openEventInCalendar(id: string): void

	
      declare var npm$namespace$MailComposer: {
        composeAsync: typeof MailComposer$composeAsync,
        
      }
declare interface MailComposer$ComposeOptions {

/**
 * An array of e-mail addressess of the recipients.
 */
recipients?: string[],

/**
 * An array of e-mail addressess of the CC recipients.
 */
ccRecipients?: string[],

/**
 * An array of e-mail addressess of the BCC recipients.
 */
bccRecipients?: string[],

/**
 * Subject of the mail.
 */
subject?: string,

/**
 * Body of the mail.
 */
body?: string,

/**
 * Whether the body contains HTML tags so it could be formatted properly. Not working perfectly on Android.
 */
isHtml?: boolean,

/**
 * An array of app’s internal file uris to attach.
 */
attachments?: string[]
} 


/**
 * Resolves to a promise with object containing status field that could be either sent, saved or cancelled. Android does not provide such info so it always resolves to sent.
 */
declare function MailComposer$composeAsync(
options: MailComposer$ComposeOptions): Promise<{
status: "sent" | "saved" | "cancelled"
}>

	
      declare var npm$namespace$Updates: {
        addListener: typeof Updates$addListener,
checkForUpdateAsync: typeof Updates$checkForUpdateAsync,
fetchUpdateAsync: typeof Updates$fetchUpdateAsync,
reload: typeof Updates$reload,
reloadFromCache: typeof Updates$reloadFromCache,
        
      }

      declare var npm$namespace$EventType: {
        
        DOWNLOAD_STARTED: typeof EventType$DOWNLOAD_STARTED,
DOWNLOAD_PROGRESS: typeof EventType$DOWNLOAD_PROGRESS,
DOWNLOAD_FINISHED: typeof EventType$DOWNLOAD_FINISHED,
NO_UPDATE_AVAILABLE: typeof EventType$NO_UPDATE_AVAILABLE,
ERROR: typeof EventType$ERROR,
      }

/**
 * A new update is available and has started downloading.
 */
declare type EventType$DownloadStart = "downloadStart";


/**
 * A new update is currently being downloaded and will be stored in the device's cache.
 */
declare type EventType$DownloadProgress = "downloadProgress";


/**
 * A new update has finished downloading and is now stored in the device's cache.
 */
declare type EventType$DownloadFinished = "downloadFinished";


/**
 * No updates are available, and the most up-to-date bundle of this experience is already running.
 */
declare type EventType$NoUpdateAvailable = "noUpdateAvailable";

declare type EventType$Error = any;


/**
 * A new update is available and has started downloading.
 */
declare var EventType$DOWNLOAD_STARTED: EventType$DownloadStart;


/**
 * A new update is currently being downloaded and will be stored in the device's cache.
 */
declare var EventType$DOWNLOAD_PROGRESS: EventType$DownloadProgress;


/**
 * A new update has finished downloading and is now stored in the device's cache.
 */
declare var EventType$DOWNLOAD_FINISHED: EventType$DownloadFinished;


/**
 * No updates are available, and the most up-to-date bundle of this experience is already running.
 */
declare var EventType$NO_UPDATE_AVAILABLE: EventType$NoUpdateAvailable;


/**
 * An error occurred trying to fetch the latest update.
 */
declare var EventType$ERROR: EventType$Error;

declare interface Updates$UpdateCheck {

/**
 * True if an update is available, false if you're already running the most up-to-date JS bundle.
 */
isAvailable: boolean,

/**
 * If `isAvailable` is true, the manifest of the available update. Undefined otherwise.
 */
Constants$manifest?: FaceDetector$Constants.Constants$Manifest
} 

declare interface Updates$UpdateBundle {

/**
 * True if the fetched bundle is new (i.e. a different version that the what's currently running).
 */
isNew: boolean,

/**
 * Manifest of the fetched update.
 */
Constants$manifest: FaceDetector$Constants.Constants$Manifest
} 


/**
 * An object that is passed into each event listener when a new version is available.
 */
declare interface Updates$UpdateEvent {

/**
 * Type of the event
 */
type: EventType$EventType$DownloadStart
| EventType$EventType$DownloadProgress
| EventType$EventType$DownloadFinished
| EventType$EventType$NoUpdateAvailable
| EventType$EventType$Error,

/**
 * If `type === Expo.Updates.EventType.DOWNLOAD_FINISHED`, the manifest of the newly downloaded update. Undefined otherwise.
 */
Constants$manifest?: FaceDetector$Constants.Constants$Manifest,

/**
 * If `type === Expo.Updates.EventType.ERROR`, the error message. Undefined otherwise.
 */
message?: string
} 


/**
 * An optional params object passed to fetchUpdateAsync.
 */
declare interface Updates$FetchUpdateAsyncParams {
eventListener: Updates$UpdateEventListener
} 

declare type Updates$UpdateEventListener = (event: Updates$UpdateEvent) => any;


/**
 * Invokes a callback when updates-related events occur,
 * either on the initial app load or as a result of a call to `Expo.Updates.fetchUpdateAsync`.
 */
declare function Updates$addListener(listener: Updates$UpdateEventListener): EventSubscription



/**
 * Check if a new published version of your project is available.
 * Does not actually download the update.
 * Rejects if `updates.enabled` is `false` in app.json.
 */
declare function Updates$checkForUpdateAsync(): Promise<Updates$UpdateCheck>



/**
 * Downloads the most recent published version of your experience to the device's local cache.
 * Rejects if `updates.enabled` is `false` in app.json.
 */
declare function Updates$fetchUpdateAsync(params?: Updates$FetchUpdateAsyncParams): Promise<Updates$UpdateBundle>



/**
 * Immediately reloads the current experience.
 * This will use your app.json updates configuration to fetch and load the newest available JS supported by the device's Expo environment.
 * This is useful for triggering an update of your experience if you have published a new version.
 */
declare function Updates$reload(): void



/**
 * Immediately reloads the current experience using the most recent cached version.
 * This is useful for triggering an update of your experience if you have published and already downloaded a new version.
 */
declare function Updates$reloadFromCache(): void

	
      declare var npm$namespace$MediaLibrary: {
        createAssetAsync: typeof MediaLibrary$createAssetAsync,
getAssetsAsync: typeof MediaLibrary$getAssetsAsync,
getAssetInfoAsync: typeof MediaLibrary$getAssetInfoAsync,
deleteAssetsAsync: typeof MediaLibrary$deleteAssetsAsync,
getAlbumsAsync: typeof MediaLibrary$getAlbumsAsync,
getAlbumAsync: typeof MediaLibrary$getAlbumAsync,
createAlbumAsync: typeof MediaLibrary$createAlbumAsync,
addAssetsToAlbumAsync: typeof MediaLibrary$addAssetsToAlbumAsync,
removeAssetsFromAlbumAsync: typeof MediaLibrary$removeAssetsFromAlbumAsync,
getMomentsAsync: typeof MediaLibrary$getMomentsAsync,
        
      }

/**
 * Creates an asset from existing file. The most common use case is to save a picture taken by Camera.
 */
declare function MediaLibrary$createAssetAsync(localUri: string): Promise<MediaLibrary$Asset>



/**
 * Fetches a page of assets matching the provided criteria.
 */
declare function MediaLibrary$getAssetsAsync(options: MediaLibrary$GetAssetsOptions): Promise<MediaLibrary$GetAssetsResult>



/**
 * Provides more informations about an asset, including GPS location, local URI and EXIF metadata.
 */
declare function MediaLibrary$getAssetInfoAsync(asset: string | MediaLibrary$Asset): Promise<MediaLibrary$Asset>



/**
 * Deletes assets from the library. On iOS it deletes assets from all albums they belong to, while on Android it keeps all copies of them
 * (album is strictly connected to the asset). Also, there is additional dialog on iOS that requires user to confirm this action.
 */
declare function MediaLibrary$deleteAssetsAsync(asset: string[] | MediaLibrary$Asset[]): Promise<boolean>



/**
 * Queries for user-created albums in media gallery.
 */
declare function MediaLibrary$getAlbumsAsync(): Promise<MediaLibrary$Album[]>



/**
 * Queries for an album with a specific name.
 */
declare function MediaLibrary$getAlbumAsync(albumName: string): Promise<MediaLibrary$Album>



/**
 * Creates an album with given name and initial asset.
 * The asset parameter is required on Android, since it's not possible to create empty album on this platform.
 */
declare function MediaLibrary$createAlbumAsync(
albumName: string,
asset: string | MediaLibrary$Asset): Promise<MediaLibrary$Album>



/**
 * Adds array of assets to the album.
 * On Android, by default it copies assets from the current album to provided one, however it's also possible to move them by passing false as copyAssets argument.
 * In case they're copied you should keep in mind that getAssetsAsync will return duplicated assets.
 */
declare function MediaLibrary$addAssetsToAlbumAsync(
assets: MediaLibrary$Asset[],
album: string | MediaLibrary$Album,
copyAssets?: boolean): Promise<boolean>



/**
 * Removes given assets from album.
 * On Android, album will be automatically deleted if there are no more assets inside.
 */
declare function MediaLibrary$removeAssetsFromAlbumAsync(
assets: MediaLibrary$Asset[],
album: string | MediaLibrary$Album): Promise<boolean>



/**
 * Available on iOS only. Fetches a list of moments, which is a group of assets taken around the same place and time.
 */
declare function MediaLibrary$getMomentsAsync(): Promise<MediaLibrary$Album[]>


declare  class MediaLibrary$MediaType {
  constructor(...args: empty): mixed;
static +audio: Class<MediaLibrary$MediaType__audio> & MediaLibrary$MediaType__audio & "audio";// "audio"
static +photo: Class<MediaLibrary$MediaType__photo> & MediaLibrary$MediaType__photo & "photo";// "photo"
static +video: Class<MediaLibrary$MediaType__video> & MediaLibrary$MediaType__video & "video";// "video"
static +unknow: Class<MediaLibrary$MediaType__unknow> & MediaLibrary$MediaType__unknow & "unknow";// "unknow"

}

declare class MediaLibrary$MediaType__audio mixins MediaLibrary$MediaType {}
declare class MediaLibrary$MediaType__photo mixins MediaLibrary$MediaType {}
declare class MediaLibrary$MediaType__video mixins MediaLibrary$MediaType {}
declare class MediaLibrary$MediaType__unknow mixins MediaLibrary$MediaType {}


declare  class MediaLibrary$SortBy {
  constructor(...args: empty): mixed;
static +default: Class<MediaLibrary$SortBy__default> & MediaLibrary$SortBy__default & "default";// "default"
static +id: Class<MediaLibrary$SortBy__id> & MediaLibrary$SortBy__id & "id";// "id"
static +creationTime: Class<MediaLibrary$SortBy__creationTime> & MediaLibrary$SortBy__creationTime & "creationTime";// "creationTime"
static +modificationTime: Class<MediaLibrary$SortBy__modificationTime> & MediaLibrary$SortBy__modificationTime & "modificationTime";// "modificationTime"
static +mediaType: Class<MediaLibrary$SortBy__mediaType> & MediaLibrary$SortBy__mediaType & "mediaType";// "mediaType"
static +width: Class<MediaLibrary$SortBy__width> & MediaLibrary$SortBy__width & "width";// "width"
static +height: Class<MediaLibrary$SortBy__height> & MediaLibrary$SortBy__height & "height";// "height"
static +duration: Class<MediaLibrary$SortBy__duration> & MediaLibrary$SortBy__duration & "duration";// "duration"

}

declare class MediaLibrary$SortBy__default mixins MediaLibrary$SortBy {}
declare class MediaLibrary$SortBy__id mixins MediaLibrary$SortBy {}
declare class MediaLibrary$SortBy__creationTime mixins MediaLibrary$SortBy {}
declare class MediaLibrary$SortBy__modificationTime mixins MediaLibrary$SortBy {}
declare class MediaLibrary$SortBy__mediaType mixins MediaLibrary$SortBy {}
declare class MediaLibrary$SortBy__width mixins MediaLibrary$SortBy {}
declare class MediaLibrary$SortBy__height mixins MediaLibrary$SortBy {}
declare class MediaLibrary$SortBy__duration mixins MediaLibrary$SortBy {}


declare interface MediaLibrary$AssetAndroid {
albumId?: string
} 

declare interface MediaLibrary$AssetIos {
mediaSubtypes?: MediaLibrary$MediaType[],
orientation: number,
isFavorite: boolean
} 

declare type MediaLibrary$Asset = {
id: string,
filename: string,
uri: string,
mediaType: string,
width: number,
height: number,
creationTime: number,
modificationTime: number,
duration: number,
localUri?: string,
location?: Location$Location$LocationProps,
exif?: {[key: string]: any}
} & MediaLibrary$AssetAndroid & MediaLibrary$AssetIos



/**
 * These fields can be obtained only by calling getAssetInfoAsync method
 */
declare interface MediaLibrary$AlbumIos {
type?: string,
startTime: number,
endTime: number,
approximateLocation?: Location$Location$LocationProps,
locationNames?: string[]
} 


/**
 * These fields apply only to albums whose type is moment
 */
declare type MediaLibrary$Album = {
id: string,
title: string,
assetCount: number
} & MediaLibrary$AlbumIos


declare interface MediaLibrary$GetAssetsOptions {
first?: number,
after?: string,
album?: string | MediaLibrary$Album,
sortBy?: MediaLibrary$SortBy,
mediaType?: MediaLibrary$MediaType
} 

declare interface MediaLibrary$GetAssetsResult {
assets: MediaLibrary$Asset[],
endCursor: string,
hasNextPage: boolean,
totalCount: number
} 
	
      declare var npm$namespace$Haptic: {
        selection: typeof Haptic$selection,
notification: typeof Haptic$notification,
impact: typeof Haptic$impact,
        
      }

/**
 * Used to let a user know when a selection change has been registered
 */
declare function Haptic$selection(): void


declare function Haptic$notification(notificationType?: Haptic$NotificationType): void


declare function Haptic$impact(impactStyles?: Haptic$ImpactStyles): void


declare  class Haptic$ImpactStyles {
  constructor(...args: empty): mixed;
static +Light: Class<Haptic$ImpactStyles__Light> & Haptic$ImpactStyles__Light & "light";// "light"
static +Medium: Class<Haptic$ImpactStyles__Medium> & Haptic$ImpactStyles__Medium & "medium";// "medium"
static +Heavy: Class<Haptic$ImpactStyles__Heavy> & Haptic$ImpactStyles__Heavy & "heavy";// "heavy"

}

declare class Haptic$ImpactStyles__Light mixins Haptic$ImpactStyles {}
declare class Haptic$ImpactStyles__Medium mixins Haptic$ImpactStyles {}
declare class Haptic$ImpactStyles__Heavy mixins Haptic$ImpactStyles {}


declare  class Haptic$NotificationType {
  constructor(...args: empty): mixed;
static +Success: Class<Haptic$NotificationType__Success> & Haptic$NotificationType__Success & "success";// "success"
static +Warning: Class<Haptic$NotificationType__Warning> & Haptic$NotificationType__Warning & "warning";// "warning"
static +Error: Class<Haptic$NotificationType__Error> & Haptic$NotificationType__Error & "error";// "error"

}

declare class Haptic$NotificationType__Success mixins Haptic$NotificationType {}
declare class Haptic$NotificationType__Warning mixins Haptic$NotificationType {}
declare class Haptic$NotificationType__Error mixins Haptic$NotificationType {}

    }
