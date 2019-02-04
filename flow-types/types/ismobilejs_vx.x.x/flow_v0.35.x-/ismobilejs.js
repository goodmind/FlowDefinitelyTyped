declare module 'ismobilejs' {
        declare interface Apple {
phone: boolean,
ipod: boolean,
tablet: boolean,
device: boolean
} 
	declare interface Android {
phone: boolean,
tablet: boolean,
device: boolean
} 
	declare interface Amazon {
phone: boolean,
tablet: boolean,
device: boolean
} 
	declare interface Windows {
phone: boolean,
tablet: boolean,
device: boolean
} 
	declare interface Other {
blackberry_10: boolean,
blackberry: boolean,
opera: boolean,
firefox: boolean,
chrome: boolean,
device: boolean
} 
	declare interface IsMobile {
any: boolean,
phone: boolean,
tablet: boolean,
seven_inch: boolean,
apple: Apple,
android: Android,
amazon: Amazon,
windows: Windows,
other: Other,
(userAgent?: string): IsMobile
} 
	declare var isMobile: IsMobile;
	declare module.exports: typeof isMobile

    }
