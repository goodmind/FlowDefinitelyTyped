declare module "@storybook/react-native" {
  import typeof * as React from "react";

  declare export interface StorybookUIOptions {
    /**
     * display navigator and addons on the device
     * @default true
     */
    onDeviceUI?: boolean;

    /**
     * allows to display stories without running storybook server. Should be used with onDeviceUI
     * @default false
     */
    disableWebsockets?: boolean;

    /**
     * use wss/https instead of ws/http
     * @default false
     */
    secured?: boolean;

    /**
     * host to use
     * @default NativeModules.SourceCode.scriptURL
     */
    host?: string;

    /**
     * port to use
     * @default 7007
     */
    port?: number;

    /**
     * additional query string to pass to websockets
     * @default ""
     */
    query?: string;

    /**
     * should the ui be closed initialy.
     * @default false
     */
    isUIHidden?: boolean;

    /**
     * which tab should be open. -1 Navigator, 0 Preview, 1 Addons
     * @default 0
     */
    tabOpen?: number;

    /**
     * initialize storybook with a specific story.
     * In case a valid object is passed, it will take precedence over `shouldPersistSelection`.
     * ex: `{ kind: 'Knobs', story: 'with knobs' }`
     * @default null
     */
    initialSelection?: { [key: string]: any };

    /**
     * initialize storybook with the last selected story.
     * @default true
     */
    shouldPersistSelection?: boolean;

    /**
     * disable KeyboardAvoidingView wrapping Storybook's view
     * @default false
     */
    shouldDisableKeyboardAvoidingView?: boolean;

    /**
     * this will set the keyboardverticaloffset (https://facebook.github.io/react-native/docs/keyboardavoidingview#keyboardverticaloffset) value for KeyboardAvoidingView wrapping Storybook's view
     * @default 0
     */
    keyboardAvoidingViewVerticalOffset?: number;
  }
  declare export function getStorybookUI(
    options: StorybookUIOptions
  ): React.ComponentClass;

  declare export * from "@storybook/react"
}
