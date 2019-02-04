declare module 'passport-bnet' {
        import type {
          OAuth2Strategy,VerifyFunction,VerifyFunctionWithRequest,_StrategyOptionsBase
        } from 'passport-oauth2';

	declare class BnetStrategy mixins OAuth2Strategy {
constructor(options: BnetStrategy$BnetStrategy$StrategyOptions, verify: VerifyFunction): this;
constructor(options: BnetStrategy$BnetStrategy$StrategyOptionsWithRequest, verify: VerifyFunctionWithRequest): this
}
	
      declare var npm$namespace$BnetStrategy: {
        getHost: typeof BnetStrategy$getHost,
        Strategy: typeof BnetStrategy$Strategy,
      }
declare type BnetStrategy$_BaseBnetOptions = {
clientID: string,
clientSecret: string,
region?: string
} & $Shape<_StrategyOptionsBase>


declare type BnetStrategy$StrategyOptions = {
passReqToCallback?: false
} & BnetStrategy$_BaseBnetOptions


declare type BnetStrategy$StrategyOptionsWithRequest = {
passReqToCallback: true
} & BnetStrategy$_BaseBnetOptions


declare function BnetStrategy$getHost(region: string): string


declare type BnetStrategy$Strategy = BnetStrategy;

declare var BnetStrategy$Strategy: typeof BnetStrategy;
	declare module.exports: typeof BnetStrategy

    }
