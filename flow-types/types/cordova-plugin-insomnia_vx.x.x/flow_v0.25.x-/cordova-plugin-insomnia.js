declare module "cordova-plugin-insomnia" {
  declare interface Window {
    plugins: Plugins;
  }
  declare interface Plugins {
    insomnia: InsomniaPlugin$InsomniaPlugin$Insomnia;
  }
  declare export interface InsomniaPlugin$Insomnia {
    /**
     * Prevent the screen of the mobile device from falling asleep.
     */
    keepAwake(success?: () => any, fail?: () => any): void;

    /**
     * After making your app practically a zombie, you can allow it to sleep again by calling allowSleepAgain.
     */
    allowSleepAgain(success?: () => any, fail?: () => any): void;
  }
}
