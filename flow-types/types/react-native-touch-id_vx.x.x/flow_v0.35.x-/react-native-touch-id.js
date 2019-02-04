declare module 'react-native-touch-id' {
        declare class TouchIDError  {
name: "LAErrorAuthenticationFailed"
| "LAErrorUserCancel"
| "LAErrorUserFallback"
| "LAErrorSystemCancel"
| "LAErrorPasscodeNotSet"
| "LAErrorTouchIDNotAvailable"
| "LAErrorTouchIDNotEnrolled"
| "LAErrorTouchIDNotEnrolled"
| "RCTTouchIDUnknownError"
| "RCTTouchIDNotSupported";
message: string;
details: any
}
	declare export interface AuthenticateConfig {
title?: string,
color?: string,
fallbackTitle: string
} 
	declare export var isSupported: () => Promise<boolean | string | TouchIDError>;
	declare export var authenticate: (reason: string, config?: AuthenticateConfig) => Promise<boolean | TouchIDError>;
    }
