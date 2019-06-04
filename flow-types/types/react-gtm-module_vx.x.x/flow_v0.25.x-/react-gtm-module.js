declare module "react-gtm-module" {
  declare var TagManager: {
    dataLayer: (dataLayerArgs: DataLayerArgs) => void,
    initialize: (tagManagerArgs: TagManagerArgs) => void
  };
  declare export type TagManagerArgs = {
    /**
     * GTM id, must be something like GTM-000000.
     */
    gtmId: string,

    /**
     * Additional events such as 'gtm.start': new Date().getTime(),event:'gtm.js'.
     */
    events?: { [key: string]: any },

    /**
     * Used to set environments.
     */
    auth?: string,

    /**
     * Used to set environments, something like env-00.
     */
    preview?: string
  } & DataLayerArgs;

  declare export interface DataLayerArgs {
    /**
     * Object that contains all of the information that you want to pass to Google Tag Manager.
     */
    dataLayer?: { [key: string]: any };

    /**
     * Custom name for dataLayer object.
     */
    dataLayerName?: string;
  }
  declare export default typeof TagManager;
}
