declare module 'passport-azure-ad' {
        declare export {
          ITokenPayload,VerifyCallback
        }from './common';

	declare export {
          BearerStrategy,IBearerStrategyOption,IBearerStrategyOptionWithRequest,VerifyBearerFunction,VerifyBearerFunctionWithReq
        }from './bearer-strategy';

	declare export {
          OIDCStrategy,IOIDCStrategyOption,IOIDCStrategyOptionWithRequest,IProfile,VerifyOIDCFunction,VerifyOIDCFunctionWithReq
        }from './oidc-strategy';

    }
