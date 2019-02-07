declare module "react-facebook-login" {
  import typeof * as React from "react";

  declare export interface ReactFacebookLoginProps {
    appId: string;
    callback(userInfo: ReactFacebookLoginInfo): void;
    onFailure?: (response: ReactFacebookFailureResponse) => void;
    autoLoad?: boolean;
    buttonStyle?: React.CSSProperties;
    containerStyle?: React.CSSProperties;
    cookie?: boolean;
    cssClass?: string;
    disableMobileRedirect?: boolean;
    fields?: string;
    icon?: React.ReactNode;
    isDisabled?: boolean;
    language?: string;
    onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
    reAuthenticate?: boolean;
    redirectUri?: string;
    scope?: string;
    size?: "small" | "medium" | "metro";
    textButton?: string;
    typeButton?: string;
    version?: string;
    xfbml?: boolean;
    isMobile?: boolean;
    tag?: Node | React.Component<any>;
    returnScopes?: boolean;
    state?: string;
    authType?: string;
    responseType?: string;
  }
  declare export interface ReactFacebookFailureResponse {
    status?: string;
  }
  declare export interface ReactFacebookLoginInfo {
    id: string;
    accessToken: string;
    name?: string;
    email?: string;
  }
  declare export interface ReactFacebookLoginState {
    isSdkLoaded?: boolean;
    isProcessing?: boolean;
  }
  declare export default class ReactFacebookLogin
    mixins React.Component<ReactFacebookLoginProps, ReactFacebookLoginState> {}
}
