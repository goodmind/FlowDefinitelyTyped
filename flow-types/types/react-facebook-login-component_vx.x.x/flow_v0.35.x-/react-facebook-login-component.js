declare module 'react-facebook-login-component' {
        import typeof * as React from 'react';

	declare export interface FacebookLoginInfo {
id: string,
accessToken: string,
name?: string,
email?: string
} 
	declare export type FacebookLoginProps = {
socialId: string,
xfbml?: boolean,
version?: string,
fields?: string,
buttonText?: string,
responseHandler: (response: FacebookLoginInfo) => void
} & React.ButtonHTMLAttributes<HTMLButtonElement>

	declare export class FacebookLogin mixins React.Component<FacebookLoginProps> {}
    }
