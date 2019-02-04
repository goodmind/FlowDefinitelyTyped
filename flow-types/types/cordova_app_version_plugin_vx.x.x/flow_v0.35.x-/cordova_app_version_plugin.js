declare module 'cordova_app_version_plugin' {
        declare interface CordovaPlugins {

/**
 * cordova_app_version_plugin interface
 */
version: CordovaAppVersionPlugin.CordovaAppVersionPlugin
} 
	declare module 'CordovaAppVersionPlugin' {
        declare interface CordovaAppVersionPlugin {

/**
 * App version from config.xml's version (e.g. <widget id="my.app.id" version="1.5.0">)
 * @example window.cordova.plugins.version.getAppVersion() // e.g: "1.5.0"
 */
getAppVersion(): string
} 
    }

    }
