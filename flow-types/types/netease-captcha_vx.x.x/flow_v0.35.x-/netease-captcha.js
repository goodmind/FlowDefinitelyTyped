declare module 'netease-captcha' {
        declare interface Window {
initNECaptcha?: NeteaseCaptcha$NeteaseCaptcha$InitFunction
} 
	declare type NeteaseCaptcha$InitFunction = (
config: NeteaseCaptcha$Config,
NeteaseCaptcha$onLoad?: NeteaseCaptcha$onLoad,
NeteaseCaptcha$onError?: NeteaseCaptcha$onError) => void;

declare interface NeteaseCaptcha$Config {

/**
 * Verification code id
 */
captchaId: string,

/**
 * Selector string or HTMLElement to render widget into
 */
element: string | HTMLElement,

/**
 * Defaults to 'float' on desktop, and 'popup' on mobile
 */
mode?: "float" | "embed" | "popup",

/**
 * Defaults to page protocol
 */
protocol?: "http" | "https",

/**
 * Defaults to 'auto'
 */
width?: number | string,

/**
 * Defaults to 'zh-CN'
 */
lang?: "zh-CN" | "en",
onReady(instance: NeteaseCaptcha$Instance): void,
onVerify(error: any, data: NeteaseCaptcha$Data): void
} 

declare interface NeteaseCaptcha$Instance {

/**
 * Refresh the instance to get new verification information
 */
refresh(): void,

/**
 * Destroy the current instance
 */
destroy(): void,

/**
 * Available when the mode is set to 'popup' - opens the popup to accept verification
 */
popUp(): void
} 

declare interface NeteaseCaptcha$Data {
validate: string
} 

declare type NeteaseCaptcha$onLoad = (instance: NeteaseCaptcha$Instance) => void;

declare type NeteaseCaptcha$onError = (error: any) => void;
    }
