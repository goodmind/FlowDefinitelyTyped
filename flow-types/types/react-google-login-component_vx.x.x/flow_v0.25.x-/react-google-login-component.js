declare module "react-google-login-component" {
  import typeof * as React from "react";

  declare export interface GoogleLoginInfo {
    getAuthResponse: () => {
      access_token: string
    };
  }
  declare export type GoogleLoginProps = {
    socialId: string,
    scope?: string,
    fetchBasicProfile?: boolean,
    buttonText?: string,
    prompt?: string,
    responseHandler: (response: GoogleLoginInfo) => void
  } & React.ButtonHTMLAttributes<HTMLButtonElement>;

  declare export class GoogleLogin mixins React.Component<GoogleLoginProps> {}
}
