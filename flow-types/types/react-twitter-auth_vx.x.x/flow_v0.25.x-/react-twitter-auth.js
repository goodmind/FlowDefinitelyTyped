declare module "react-twitter-auth" {
  declare interface TwitterLoginProps {
    tag?: React.ReactType;
    text?: string;
    loginUrl: string;
    requestTokenUrl: string;
    onFailure: (msg: string) => void;
    onSuccess: (response: string) => void;
    disabled?: boolean;
    style?: React.CSSProperties;
    dialogWidth?: number;
    dialogHeight?: number;
    showIcon?: boolean;
    credentials?: "omit" | "same-origin" | "include";
    customHeaders?: HeadersInit;
    children?: React.ReactNode;
    forceLogin?: boolean;
  }
  declare var TwitterLogin: React.StatelessComponent<TwitterLoginProps>;
  declare export default typeof TwitterLogin;
}
