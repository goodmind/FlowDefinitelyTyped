declare module 'passport-cognito' {
        declare export interface CognitoStrategyOptions {
userPoolId: string,
clientId: string,
region: string
} 
	declare export type CognitoVerifyFunction = (
accessToken: string,
idToken: string,
refreshToken: string,
user: {[key: string]: any},
done: (error: any, user?: any) => void) => any;
	declare export class Strategy mixins passport.Strategy {
constructor(options: CognitoStrategyOptions, verify: CognitoVerifyFunction): this;
name: string;
authenticate(req: express.Request, options?: {[key: string]: any}): void
}
    }
