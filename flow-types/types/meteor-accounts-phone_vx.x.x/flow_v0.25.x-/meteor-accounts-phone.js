declare module "meteor/accounts-base" {
  declare var npm$namespace$Accounts: {
    createUserWithPhone: typeof Accounts$createUserWithPhone,
    requestPhoneVerification: typeof Accounts$requestPhoneVerification,
    verifyPhone: typeof Accounts$verifyPhone,
    isPhoneVerified: typeof Accounts$isPhoneVerified,
    onPhoneVerification: typeof Accounts$onPhoneVerification,
    _options: typeof Accounts$_options
  };
  declare var Accounts$_options: {
    verificationCodeLength?: number,
    verificationMaxRetries?: number,
    verificationRetriesWaitTime?: number,
    verificationWaitTime?: number,
    sendPhoneVerificationCodeOnCreation?: boolean,
    forbidClientAccountCreation?: boolean,
    phoneVerificationMasterCode?: Array<string>,
    adminPhoneNumbers?: Array<string>
  };

  declare function Accounts$createUserWithPhone(
    options: Object,
    callback?: Function
  ): void;

  declare function Accounts$requestPhoneVerification(
    phone: string,
    callback?: Function
  ): void;

  declare function Accounts$verifyPhone(
    phone: string,
    code: string,
    newPassword?: string | Function,
    callback?: Function
  ): void;

  declare function Accounts$isPhoneVerified(): boolean;

  declare function Accounts$onPhoneVerification(func: Function): void;
}
declare module "meteor/meteor" {
  declare var npm$namespace$Meteor: {
    loginWithPhoneAndPassword: typeof Meteor$loginWithPhoneAndPassword
  };
  declare function Meteor$loginWithPhoneAndPassword(
    selector: Object | String,
    password: String,
    callback?: Function
  ): void;
}
declare module "meteor-accounts-phone" {
  declare var npm$namespace$SMS: {
    send: typeof SMS$send,
    twilio: typeof SMS$twilio,
    phoneTemplate: typeof SMS$phoneTemplate
  };
  declare var SMS$twilio: {
    FROM?: string,
    ACCOUNT_SID?: string,
    AUTH_TOKEN?: string
  };

  declare var SMS$phoneTemplate: {
    from: string,
    text: Function
  };

  declare function SMS$send(options: Object, callback?: Function): void;

  declare var npm$namespace$Meteor: {
    loginWithPhoneAndPassword: typeof Meteor$loginWithPhoneAndPassword
  };
  declare function Meteor$loginWithPhoneAndPassword(
    selector: Object | String,
    password: String,
    callback?: Function
  ): void;

  declare var npm$namespace$Accounts: {
    createUserWithPhone: typeof Accounts$createUserWithPhone,
    requestPhoneVerification: typeof Accounts$requestPhoneVerification,
    verifyPhone: typeof Accounts$verifyPhone,
    isPhoneVerified: typeof Accounts$isPhoneVerified,
    onPhoneVerification: typeof Accounts$onPhoneVerification,
    _options: typeof Accounts$_options
  };
  declare var Accounts$_options: {
    verificationCodeLength?: number,
    verificationMaxRetries?: number,
    verificationRetriesWaitTime?: number,
    verificationWaitTime?: number,
    sendPhoneVerificationCodeOnCreation?: boolean,
    forbidClientAccountCreation?: boolean,
    phoneVerificationMasterCode?: Array<string>,
    adminPhoneNumbers?: Array<string>
  };

  declare function Accounts$createUserWithPhone(
    options: Object,
    callback?: Function
  ): void;

  declare function Accounts$requestPhoneVerification(
    phone: string,
    callback?: Function
  ): void;

  declare function Accounts$verifyPhone(
    phone: string,
    code: string,
    newPassword?: string | Function,
    callback?: Function
  ): void;

  declare function Accounts$isPhoneVerified(): boolean;

  declare function Accounts$onPhoneVerification(func: Function): void;
}
