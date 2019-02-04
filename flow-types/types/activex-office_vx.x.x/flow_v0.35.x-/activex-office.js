declare module 'activex-office' {
        declare type Office$MsoRGBType = number;

declare type Office$ByteArray = SafeArray<number>;

declare  class Office$BackstageGroupStyle {
  constructor(...args: empty): mixed;
static +BackstageGroupStyleError: Class<Office$BackstageGroupStyle__BackstageGroupStyleError> & Office$BackstageGroupStyle__BackstageGroupStyleError & 2;// 2
static +BackstageGroupStyleNormal: Class<Office$BackstageGroupStyle__BackstageGroupStyleNormal> & Office$BackstageGroupStyle__BackstageGroupStyleNormal & 0;// 0
static +BackstageGroupStyleWarning: Class<Office$BackstageGroupStyle__BackstageGroupStyleWarning> & Office$BackstageGroupStyle__BackstageGroupStyleWarning & 1;// 1

}

declare class Office$BackstageGroupStyle__BackstageGroupStyleError mixins Office$BackstageGroupStyle {}
declare class Office$BackstageGroupStyle__BackstageGroupStyleNormal mixins Office$BackstageGroupStyle {}
declare class Office$BackstageGroupStyle__BackstageGroupStyleWarning mixins Office$BackstageGroupStyle {}


declare  class Office$CertificateDetail {
  constructor(...args: empty): mixed;
static +certdetAvailable: Class<Office$CertificateDetail__certdetAvailable> & Office$CertificateDetail__certdetAvailable & 0;// 0
static +certdetExpirationDate: Class<Office$CertificateDetail__certdetExpirationDate> & Office$CertificateDetail__certdetExpirationDate & 3;// 3
static +certdetIssuer: Class<Office$CertificateDetail__certdetIssuer> & Office$CertificateDetail__certdetIssuer & 2;// 2
static +certdetSubject: Class<Office$CertificateDetail__certdetSubject> & Office$CertificateDetail__certdetSubject & 1;// 1
static +certdetThumbprint: Class<Office$CertificateDetail__certdetThumbprint> & Office$CertificateDetail__certdetThumbprint & 4;// 4

}

declare class Office$CertificateDetail__certdetAvailable mixins Office$CertificateDetail {}
declare class Office$CertificateDetail__certdetExpirationDate mixins Office$CertificateDetail {}
declare class Office$CertificateDetail__certdetIssuer mixins Office$CertificateDetail {}
declare class Office$CertificateDetail__certdetSubject mixins Office$CertificateDetail {}
declare class Office$CertificateDetail__certdetThumbprint mixins Office$CertificateDetail {}


declare  class Office$CertificateVerificationResults {
  constructor(...args: empty): mixed;
static +certverresError: Class<Office$CertificateVerificationResults__certverresError> & Office$CertificateVerificationResults__certverresError & 0;// 0
static +certverresExpired: Class<Office$CertificateVerificationResults__certverresExpired> & Office$CertificateVerificationResults__certverresExpired & 5;// 5
static +certverresInvalid: Class<Office$CertificateVerificationResults__certverresInvalid> & Office$CertificateVerificationResults__certverresInvalid & 4;// 4
static +certverresRevoked: Class<Office$CertificateVerificationResults__certverresRevoked> & Office$CertificateVerificationResults__certverresRevoked & 6;// 6
static +certverresUntrusted: Class<Office$CertificateVerificationResults__certverresUntrusted> & Office$CertificateVerificationResults__certverresUntrusted & 7;// 7
static +certverresUnverified: Class<Office$CertificateVerificationResults__certverresUnverified> & Office$CertificateVerificationResults__certverresUnverified & 2;// 2
static +certverresValid: Class<Office$CertificateVerificationResults__certverresValid> & Office$CertificateVerificationResults__certverresValid & 3;// 3
static +certverresVerifying: Class<Office$CertificateVerificationResults__certverresVerifying> & Office$CertificateVerificationResults__certverresVerifying & 1;// 1

}

declare class Office$CertificateVerificationResults__certverresError mixins Office$CertificateVerificationResults {}
declare class Office$CertificateVerificationResults__certverresExpired mixins Office$CertificateVerificationResults {}
declare class Office$CertificateVerificationResults__certverresInvalid mixins Office$CertificateVerificationResults {}
declare class Office$CertificateVerificationResults__certverresRevoked mixins Office$CertificateVerificationResults {}
declare class Office$CertificateVerificationResults__certverresUntrusted mixins Office$CertificateVerificationResults {}
declare class Office$CertificateVerificationResults__certverresUnverified mixins Office$CertificateVerificationResults {}
declare class Office$CertificateVerificationResults__certverresValid mixins Office$CertificateVerificationResults {}
declare class Office$CertificateVerificationResults__certverresVerifying mixins Office$CertificateVerificationResults {}


declare  class Office$ContentVerificationResults {
  constructor(...args: empty): mixed;
static +contverresError: Class<Office$ContentVerificationResults__contverresError> & Office$ContentVerificationResults__contverresError & 0;// 0
static +contverresModified: Class<Office$ContentVerificationResults__contverresModified> & Office$ContentVerificationResults__contverresModified & 4;// 4
static +contverresUnverified: Class<Office$ContentVerificationResults__contverresUnverified> & Office$ContentVerificationResults__contverresUnverified & 2;// 2
static +contverresValid: Class<Office$ContentVerificationResults__contverresValid> & Office$ContentVerificationResults__contverresValid & 3;// 3
static +contverresVerifying: Class<Office$ContentVerificationResults__contverresVerifying> & Office$ContentVerificationResults__contverresVerifying & 1;// 1

}

declare class Office$ContentVerificationResults__contverresError mixins Office$ContentVerificationResults {}
declare class Office$ContentVerificationResults__contverresModified mixins Office$ContentVerificationResults {}
declare class Office$ContentVerificationResults__contverresUnverified mixins Office$ContentVerificationResults {}
declare class Office$ContentVerificationResults__contverresValid mixins Office$ContentVerificationResults {}
declare class Office$ContentVerificationResults__contverresVerifying mixins Office$ContentVerificationResults {}


declare  class Office$DocProperties {
  constructor(...args: empty): mixed;
static +offPropertyTypeBoolean: Class<Office$DocProperties__offPropertyTypeBoolean> & Office$DocProperties__offPropertyTypeBoolean & 2;// 2
static +offPropertyTypeDate: Class<Office$DocProperties__offPropertyTypeDate> & Office$DocProperties__offPropertyTypeDate & 3;// 3
static +offPropertyTypeFloat: Class<Office$DocProperties__offPropertyTypeFloat> & Office$DocProperties__offPropertyTypeFloat & 5;// 5
static +offPropertyTypeNumber: Class<Office$DocProperties__offPropertyTypeNumber> & Office$DocProperties__offPropertyTypeNumber & 1;// 1
static +offPropertyTypeString: Class<Office$DocProperties__offPropertyTypeString> & Office$DocProperties__offPropertyTypeString & 4;// 4

}

declare class Office$DocProperties__offPropertyTypeBoolean mixins Office$DocProperties {}
declare class Office$DocProperties__offPropertyTypeDate mixins Office$DocProperties {}
declare class Office$DocProperties__offPropertyTypeFloat mixins Office$DocProperties {}
declare class Office$DocProperties__offPropertyTypeNumber mixins Office$DocProperties {}
declare class Office$DocProperties__offPropertyTypeString mixins Office$DocProperties {}


declare  class Office$EncryptionCipherMode {
  constructor(...args: empty): mixed;
static +cipherModeCBC: Class<Office$EncryptionCipherMode__cipherModeCBC> & Office$EncryptionCipherMode__cipherModeCBC & 1;// 1
static +cipherModeECB: Class<Office$EncryptionCipherMode__cipherModeECB> & Office$EncryptionCipherMode__cipherModeECB & 0;// 0

}

declare class Office$EncryptionCipherMode__cipherModeCBC mixins Office$EncryptionCipherMode {}
declare class Office$EncryptionCipherMode__cipherModeECB mixins Office$EncryptionCipherMode {}


declare  class Office$EncryptionProviderDetail {
  constructor(...args: empty): mixed;
static +encprovdetAlgorithm: Class<Office$EncryptionProviderDetail__encprovdetAlgorithm> & Office$EncryptionProviderDetail__encprovdetAlgorithm & 1;// 1
static +encprovdetBlockCipher: Class<Office$EncryptionProviderDetail__encprovdetBlockCipher> & Office$EncryptionProviderDetail__encprovdetBlockCipher & 2;// 2
static +encprovdetCipherBlockSize: Class<Office$EncryptionProviderDetail__encprovdetCipherBlockSize> & Office$EncryptionProviderDetail__encprovdetCipherBlockSize & 3;// 3
static +encprovdetCipherMode: Class<Office$EncryptionProviderDetail__encprovdetCipherMode> & Office$EncryptionProviderDetail__encprovdetCipherMode & 4;// 4
static +encprovdetUrl: Class<Office$EncryptionProviderDetail__encprovdetUrl> & Office$EncryptionProviderDetail__encprovdetUrl & 0;// 0

}

declare class Office$EncryptionProviderDetail__encprovdetAlgorithm mixins Office$EncryptionProviderDetail {}
declare class Office$EncryptionProviderDetail__encprovdetBlockCipher mixins Office$EncryptionProviderDetail {}
declare class Office$EncryptionProviderDetail__encprovdetCipherBlockSize mixins Office$EncryptionProviderDetail {}
declare class Office$EncryptionProviderDetail__encprovdetCipherMode mixins Office$EncryptionProviderDetail {}
declare class Office$EncryptionProviderDetail__encprovdetUrl mixins Office$EncryptionProviderDetail {}


declare  class Office$MailFormat {
  constructor(...args: empty): mixed;
static +mfHTML: Class<Office$MailFormat__mfHTML> & Office$MailFormat__mfHTML & 2;// 2
static +mfPlainText: Class<Office$MailFormat__mfPlainText> & Office$MailFormat__mfPlainText & 1;// 1
static +mfRTF: Class<Office$MailFormat__mfRTF> & Office$MailFormat__mfRTF & 3;// 3

}

declare class Office$MailFormat__mfHTML mixins Office$MailFormat {}
declare class Office$MailFormat__mfPlainText mixins Office$MailFormat {}
declare class Office$MailFormat__mfRTF mixins Office$MailFormat {}


declare  class Office$MsoAlertButtonType {
  constructor(...args: empty): mixed;
static +msoAlertButtonAbortRetryIgnore: Class<Office$MsoAlertButtonType__msoAlertButtonAbortRetryIgnore> & Office$MsoAlertButtonType__msoAlertButtonAbortRetryIgnore & 2;// 2
static +msoAlertButtonOK: Class<Office$MsoAlertButtonType__msoAlertButtonOK> & Office$MsoAlertButtonType__msoAlertButtonOK & 0;// 0
static +msoAlertButtonOKCancel: Class<Office$MsoAlertButtonType__msoAlertButtonOKCancel> & Office$MsoAlertButtonType__msoAlertButtonOKCancel & 1;// 1
static +msoAlertButtonRetryCancel: Class<Office$MsoAlertButtonType__msoAlertButtonRetryCancel> & Office$MsoAlertButtonType__msoAlertButtonRetryCancel & 5;// 5
static +msoAlertButtonYesAllNoCancel: Class<Office$MsoAlertButtonType__msoAlertButtonYesAllNoCancel> & Office$MsoAlertButtonType__msoAlertButtonYesAllNoCancel & 6;// 6
static +msoAlertButtonYesNo: Class<Office$MsoAlertButtonType__msoAlertButtonYesNo> & Office$MsoAlertButtonType__msoAlertButtonYesNo & 4;// 4
static +msoAlertButtonYesNoCancel: Class<Office$MsoAlertButtonType__msoAlertButtonYesNoCancel> & Office$MsoAlertButtonType__msoAlertButtonYesNoCancel & 3;// 3

}

declare class Office$MsoAlertButtonType__msoAlertButtonAbortRetryIgnore mixins Office$MsoAlertButtonType {}
declare class Office$MsoAlertButtonType__msoAlertButtonOK mixins Office$MsoAlertButtonType {}
declare class Office$MsoAlertButtonType__msoAlertButtonOKCancel mixins Office$MsoAlertButtonType {}
declare class Office$MsoAlertButtonType__msoAlertButtonRetryCancel mixins Office$MsoAlertButtonType {}
declare class Office$MsoAlertButtonType__msoAlertButtonYesAllNoCancel mixins Office$MsoAlertButtonType {}
declare class Office$MsoAlertButtonType__msoAlertButtonYesNo mixins Office$MsoAlertButtonType {}
declare class Office$MsoAlertButtonType__msoAlertButtonYesNoCancel mixins Office$MsoAlertButtonType {}


declare  class Office$MsoAlertCancelType {
  constructor(...args: empty): mixed;
static +msoAlertCancelDefault: Class<Office$MsoAlertCancelType__msoAlertCancelDefault> & Office$MsoAlertCancelType__msoAlertCancelDefault & -1;// -1
static +msoAlertCancelFifth: Class<Office$MsoAlertCancelType__msoAlertCancelFifth> & Office$MsoAlertCancelType__msoAlertCancelFifth & 4;// 4
static +msoAlertCancelFirst: Class<Office$MsoAlertCancelType__msoAlertCancelFirst> & Office$MsoAlertCancelType__msoAlertCancelFirst & 0;// 0
static +msoAlertCancelFourth: Class<Office$MsoAlertCancelType__msoAlertCancelFourth> & Office$MsoAlertCancelType__msoAlertCancelFourth & 3;// 3
static +msoAlertCancelSecond: Class<Office$MsoAlertCancelType__msoAlertCancelSecond> & Office$MsoAlertCancelType__msoAlertCancelSecond & 1;// 1
static +msoAlertCancelThird: Class<Office$MsoAlertCancelType__msoAlertCancelThird> & Office$MsoAlertCancelType__msoAlertCancelThird & 2;// 2

}

declare class Office$MsoAlertCancelType__msoAlertCancelDefault mixins Office$MsoAlertCancelType {}
declare class Office$MsoAlertCancelType__msoAlertCancelFifth mixins Office$MsoAlertCancelType {}
declare class Office$MsoAlertCancelType__msoAlertCancelFirst mixins Office$MsoAlertCancelType {}
declare class Office$MsoAlertCancelType__msoAlertCancelFourth mixins Office$MsoAlertCancelType {}
declare class Office$MsoAlertCancelType__msoAlertCancelSecond mixins Office$MsoAlertCancelType {}
declare class Office$MsoAlertCancelType__msoAlertCancelThird mixins Office$MsoAlertCancelType {}


declare  class Office$MsoAlertDefaultType {
  constructor(...args: empty): mixed;
static +msoAlertDefaultFifth: Class<Office$MsoAlertDefaultType__msoAlertDefaultFifth> & Office$MsoAlertDefaultType__msoAlertDefaultFifth & 4;// 4
static +msoAlertDefaultFirst: Class<Office$MsoAlertDefaultType__msoAlertDefaultFirst> & Office$MsoAlertDefaultType__msoAlertDefaultFirst & 0;// 0
static +msoAlertDefaultFourth: Class<Office$MsoAlertDefaultType__msoAlertDefaultFourth> & Office$MsoAlertDefaultType__msoAlertDefaultFourth & 3;// 3
static +msoAlertDefaultSecond: Class<Office$MsoAlertDefaultType__msoAlertDefaultSecond> & Office$MsoAlertDefaultType__msoAlertDefaultSecond & 1;// 1
static +msoAlertDefaultThird: Class<Office$MsoAlertDefaultType__msoAlertDefaultThird> & Office$MsoAlertDefaultType__msoAlertDefaultThird & 2;// 2

}

declare class Office$MsoAlertDefaultType__msoAlertDefaultFifth mixins Office$MsoAlertDefaultType {}
declare class Office$MsoAlertDefaultType__msoAlertDefaultFirst mixins Office$MsoAlertDefaultType {}
declare class Office$MsoAlertDefaultType__msoAlertDefaultFourth mixins Office$MsoAlertDefaultType {}
declare class Office$MsoAlertDefaultType__msoAlertDefaultSecond mixins Office$MsoAlertDefaultType {}
declare class Office$MsoAlertDefaultType__msoAlertDefaultThird mixins Office$MsoAlertDefaultType {}


declare  class Office$MsoAlertIconType {
  constructor(...args: empty): mixed;
static +msoAlertIconCritical: Class<Office$MsoAlertIconType__msoAlertIconCritical> & Office$MsoAlertIconType__msoAlertIconCritical & 1;// 1
static +msoAlertIconInfo: Class<Office$MsoAlertIconType__msoAlertIconInfo> & Office$MsoAlertIconType__msoAlertIconInfo & 4;// 4
static +msoAlertIconNoIcon: Class<Office$MsoAlertIconType__msoAlertIconNoIcon> & Office$MsoAlertIconType__msoAlertIconNoIcon & 0;// 0
static +msoAlertIconQuery: Class<Office$MsoAlertIconType__msoAlertIconQuery> & Office$MsoAlertIconType__msoAlertIconQuery & 2;// 2
static +msoAlertIconWarning: Class<Office$MsoAlertIconType__msoAlertIconWarning> & Office$MsoAlertIconType__msoAlertIconWarning & 3;// 3

}

declare class Office$MsoAlertIconType__msoAlertIconCritical mixins Office$MsoAlertIconType {}
declare class Office$MsoAlertIconType__msoAlertIconInfo mixins Office$MsoAlertIconType {}
declare class Office$MsoAlertIconType__msoAlertIconNoIcon mixins Office$MsoAlertIconType {}
declare class Office$MsoAlertIconType__msoAlertIconQuery mixins Office$MsoAlertIconType {}
declare class Office$MsoAlertIconType__msoAlertIconWarning mixins Office$MsoAlertIconType {}


declare  class Office$MsoAlignCmd {
  constructor(...args: empty): mixed;
static +msoAlignBottoms: Class<Office$MsoAlignCmd__msoAlignBottoms> & Office$MsoAlignCmd__msoAlignBottoms & 5;// 5
static +msoAlignCenters: Class<Office$MsoAlignCmd__msoAlignCenters> & Office$MsoAlignCmd__msoAlignCenters & 1;// 1
static +msoAlignLefts: Class<Office$MsoAlignCmd__msoAlignLefts> & Office$MsoAlignCmd__msoAlignLefts & 0;// 0
static +msoAlignMiddles: Class<Office$MsoAlignCmd__msoAlignMiddles> & Office$MsoAlignCmd__msoAlignMiddles & 4;// 4
static +msoAlignRights: Class<Office$MsoAlignCmd__msoAlignRights> & Office$MsoAlignCmd__msoAlignRights & 2;// 2
static +msoAlignTops: Class<Office$MsoAlignCmd__msoAlignTops> & Office$MsoAlignCmd__msoAlignTops & 3;// 3

}

declare class Office$MsoAlignCmd__msoAlignBottoms mixins Office$MsoAlignCmd {}
declare class Office$MsoAlignCmd__msoAlignCenters mixins Office$MsoAlignCmd {}
declare class Office$MsoAlignCmd__msoAlignLefts mixins Office$MsoAlignCmd {}
declare class Office$MsoAlignCmd__msoAlignMiddles mixins Office$MsoAlignCmd {}
declare class Office$MsoAlignCmd__msoAlignRights mixins Office$MsoAlignCmd {}
declare class Office$MsoAlignCmd__msoAlignTops mixins Office$MsoAlignCmd {}


declare  class Office$MsoAnimationType {
  constructor(...args: empty): mixed;
static +msoAnimationAppear: Class<Office$MsoAnimationType__msoAnimationAppear> & Office$MsoAnimationType__msoAnimationAppear & 32;// 32
static +msoAnimationBeginSpeaking: Class<Office$MsoAnimationType__msoAnimationBeginSpeaking> & Office$MsoAnimationType__msoAnimationBeginSpeaking & 4;// 4
static +msoAnimationCharacterSuccessMajor: Class<Office$MsoAnimationType__msoAnimationCharacterSuccessMajor> & Office$MsoAnimationType__msoAnimationCharacterSuccessMajor & 6;// 6
static +msoAnimationCheckingSomething: Class<Office$MsoAnimationType__msoAnimationCheckingSomething> & Office$MsoAnimationType__msoAnimationCheckingSomething & 103;// 103
static +msoAnimationDisappear: Class<Office$MsoAnimationType__msoAnimationDisappear> & Office$MsoAnimationType__msoAnimationDisappear & 31;// 31
static +msoAnimationEmptyTrash: Class<Office$MsoAnimationType__msoAnimationEmptyTrash> & Office$MsoAnimationType__msoAnimationEmptyTrash & 116;// 116
static +msoAnimationGestureDown: Class<Office$MsoAnimationType__msoAnimationGestureDown> & Office$MsoAnimationType__msoAnimationGestureDown & 113;// 113
static +msoAnimationGestureLeft: Class<Office$MsoAnimationType__msoAnimationGestureLeft> & Office$MsoAnimationType__msoAnimationGestureLeft & 114;// 114
static +msoAnimationGestureRight: Class<Office$MsoAnimationType__msoAnimationGestureRight> & Office$MsoAnimationType__msoAnimationGestureRight & 19;// 19
static +msoAnimationGestureUp: Class<Office$MsoAnimationType__msoAnimationGestureUp> & Office$MsoAnimationType__msoAnimationGestureUp & 115;// 115
static +msoAnimationGetArtsy: Class<Office$MsoAnimationType__msoAnimationGetArtsy> & Office$MsoAnimationType__msoAnimationGetArtsy & 100;// 100
static +msoAnimationGetAttentionMajor: Class<Office$MsoAnimationType__msoAnimationGetAttentionMajor> & Office$MsoAnimationType__msoAnimationGetAttentionMajor & 11;// 11
static +msoAnimationGetAttentionMinor: Class<Office$MsoAnimationType__msoAnimationGetAttentionMinor> & Office$MsoAnimationType__msoAnimationGetAttentionMinor & 12;// 12
static +msoAnimationGetTechy: Class<Office$MsoAnimationType__msoAnimationGetTechy> & Office$MsoAnimationType__msoAnimationGetTechy & 101;// 101
static +msoAnimationGetWizardy: Class<Office$MsoAnimationType__msoAnimationGetWizardy> & Office$MsoAnimationType__msoAnimationGetWizardy & 102;// 102
static +msoAnimationGoodbye: Class<Office$MsoAnimationType__msoAnimationGoodbye> & Office$MsoAnimationType__msoAnimationGoodbye & 3;// 3
static +msoAnimationGreeting: Class<Office$MsoAnimationType__msoAnimationGreeting> & Office$MsoAnimationType__msoAnimationGreeting & 2;// 2
static +msoAnimationIdle: Class<Office$MsoAnimationType__msoAnimationIdle> & Office$MsoAnimationType__msoAnimationIdle & 1;// 1
static +msoAnimationListensToComputer: Class<Office$MsoAnimationType__msoAnimationListensToComputer> & Office$MsoAnimationType__msoAnimationListensToComputer & 26;// 26
static +msoAnimationLookDown: Class<Office$MsoAnimationType__msoAnimationLookDown> & Office$MsoAnimationType__msoAnimationLookDown & 104;// 104
static +msoAnimationLookDownLeft: Class<Office$MsoAnimationType__msoAnimationLookDownLeft> & Office$MsoAnimationType__msoAnimationLookDownLeft & 105;// 105
static +msoAnimationLookDownRight: Class<Office$MsoAnimationType__msoAnimationLookDownRight> & Office$MsoAnimationType__msoAnimationLookDownRight & 106;// 106
static +msoAnimationLookLeft: Class<Office$MsoAnimationType__msoAnimationLookLeft> & Office$MsoAnimationType__msoAnimationLookLeft & 107;// 107
static +msoAnimationLookRight: Class<Office$MsoAnimationType__msoAnimationLookRight> & Office$MsoAnimationType__msoAnimationLookRight & 108;// 108
static +msoAnimationLookUp: Class<Office$MsoAnimationType__msoAnimationLookUp> & Office$MsoAnimationType__msoAnimationLookUp & 109;// 109
static +msoAnimationLookUpLeft: Class<Office$MsoAnimationType__msoAnimationLookUpLeft> & Office$MsoAnimationType__msoAnimationLookUpLeft & 110;// 110
static +msoAnimationLookUpRight: Class<Office$MsoAnimationType__msoAnimationLookUpRight> & Office$MsoAnimationType__msoAnimationLookUpRight & 111;// 111
static +msoAnimationPrinting: Class<Office$MsoAnimationType__msoAnimationPrinting> & Office$MsoAnimationType__msoAnimationPrinting & 18;// 18
static +msoAnimationRestPose: Class<Office$MsoAnimationType__msoAnimationRestPose> & Office$MsoAnimationType__msoAnimationRestPose & 5;// 5
static +msoAnimationSaving: Class<Office$MsoAnimationType__msoAnimationSaving> & Office$MsoAnimationType__msoAnimationSaving & 112;// 112
static +msoAnimationSearching: Class<Office$MsoAnimationType__msoAnimationSearching> & Office$MsoAnimationType__msoAnimationSearching & 13;// 13
static +msoAnimationSendingMail: Class<Office$MsoAnimationType__msoAnimationSendingMail> & Office$MsoAnimationType__msoAnimationSendingMail & 25;// 25
static +msoAnimationThinking: Class<Office$MsoAnimationType__msoAnimationThinking> & Office$MsoAnimationType__msoAnimationThinking & 24;// 24
static +msoAnimationWorkingAtSomething: Class<Office$MsoAnimationType__msoAnimationWorkingAtSomething> & Office$MsoAnimationType__msoAnimationWorkingAtSomething & 23;// 23
static +msoAnimationWritingNotingSomething: Class<Office$MsoAnimationType__msoAnimationWritingNotingSomething> & Office$MsoAnimationType__msoAnimationWritingNotingSomething & 22;// 22

}

declare class Office$MsoAnimationType__msoAnimationAppear mixins Office$MsoAnimationType {}
declare class Office$MsoAnimationType__msoAnimationBeginSpeaking mixins Office$MsoAnimationType {}
declare class Office$MsoAnimationType__msoAnimationCharacterSuccessMajor mixins Office$MsoAnimationType {}
declare class Office$MsoAnimationType__msoAnimationCheckingSomething mixins Office$MsoAnimationType {}
declare class Office$MsoAnimationType__msoAnimationDisappear mixins Office$MsoAnimationType {}
declare class Office$MsoAnimationType__msoAnimationEmptyTrash mixins Office$MsoAnimationType {}
declare class Office$MsoAnimationType__msoAnimationGestureDown mixins Office$MsoAnimationType {}
declare class Office$MsoAnimationType__msoAnimationGestureLeft mixins Office$MsoAnimationType {}
declare class Office$MsoAnimationType__msoAnimationGestureRight mixins Office$MsoAnimationType {}
declare class Office$MsoAnimationType__msoAnimationGestureUp mixins Office$MsoAnimationType {}
declare class Office$MsoAnimationType__msoAnimationGetArtsy mixins Office$MsoAnimationType {}
declare class Office$MsoAnimationType__msoAnimationGetAttentionMajor mixins Office$MsoAnimationType {}
declare class Office$MsoAnimationType__msoAnimationGetAttentionMinor mixins Office$MsoAnimationType {}
declare class Office$MsoAnimationType__msoAnimationGetTechy mixins Office$MsoAnimationType {}
declare class Office$MsoAnimationType__msoAnimationGetWizardy mixins Office$MsoAnimationType {}
declare class Office$MsoAnimationType__msoAnimationGoodbye mixins Office$MsoAnimationType {}
declare class Office$MsoAnimationType__msoAnimationGreeting mixins Office$MsoAnimationType {}
declare class Office$MsoAnimationType__msoAnimationIdle mixins Office$MsoAnimationType {}
declare class Office$MsoAnimationType__msoAnimationListensToComputer mixins Office$MsoAnimationType {}
declare class Office$MsoAnimationType__msoAnimationLookDown mixins Office$MsoAnimationType {}
declare class Office$MsoAnimationType__msoAnimationLookDownLeft mixins Office$MsoAnimationType {}
declare class Office$MsoAnimationType__msoAnimationLookDownRight mixins Office$MsoAnimationType {}
declare class Office$MsoAnimationType__msoAnimationLookLeft mixins Office$MsoAnimationType {}
declare class Office$MsoAnimationType__msoAnimationLookRight mixins Office$MsoAnimationType {}
declare class Office$MsoAnimationType__msoAnimationLookUp mixins Office$MsoAnimationType {}
declare class Office$MsoAnimationType__msoAnimationLookUpLeft mixins Office$MsoAnimationType {}
declare class Office$MsoAnimationType__msoAnimationLookUpRight mixins Office$MsoAnimationType {}
declare class Office$MsoAnimationType__msoAnimationPrinting mixins Office$MsoAnimationType {}
declare class Office$MsoAnimationType__msoAnimationRestPose mixins Office$MsoAnimationType {}
declare class Office$MsoAnimationType__msoAnimationSaving mixins Office$MsoAnimationType {}
declare class Office$MsoAnimationType__msoAnimationSearching mixins Office$MsoAnimationType {}
declare class Office$MsoAnimationType__msoAnimationSendingMail mixins Office$MsoAnimationType {}
declare class Office$MsoAnimationType__msoAnimationThinking mixins Office$MsoAnimationType {}
declare class Office$MsoAnimationType__msoAnimationWorkingAtSomething mixins Office$MsoAnimationType {}
declare class Office$MsoAnimationType__msoAnimationWritingNotingSomething mixins Office$MsoAnimationType {}


declare  class Office$MsoAppLanguageID {
  constructor(...args: empty): mixed;
static +msoLanguageIDExeMode: Class<Office$MsoAppLanguageID__msoLanguageIDExeMode> & Office$MsoAppLanguageID__msoLanguageIDExeMode & 4;// 4
static +msoLanguageIDHelp: Class<Office$MsoAppLanguageID__msoLanguageIDHelp> & Office$MsoAppLanguageID__msoLanguageIDHelp & 3;// 3
static +msoLanguageIDInstall: Class<Office$MsoAppLanguageID__msoLanguageIDInstall> & Office$MsoAppLanguageID__msoLanguageIDInstall & 1;// 1
static +msoLanguageIDUI: Class<Office$MsoAppLanguageID__msoLanguageIDUI> & Office$MsoAppLanguageID__msoLanguageIDUI & 2;// 2
static +msoLanguageIDUIPrevious: Class<Office$MsoAppLanguageID__msoLanguageIDUIPrevious> & Office$MsoAppLanguageID__msoLanguageIDUIPrevious & 5;// 5

}

declare class Office$MsoAppLanguageID__msoLanguageIDExeMode mixins Office$MsoAppLanguageID {}
declare class Office$MsoAppLanguageID__msoLanguageIDHelp mixins Office$MsoAppLanguageID {}
declare class Office$MsoAppLanguageID__msoLanguageIDInstall mixins Office$MsoAppLanguageID {}
declare class Office$MsoAppLanguageID__msoLanguageIDUI mixins Office$MsoAppLanguageID {}
declare class Office$MsoAppLanguageID__msoLanguageIDUIPrevious mixins Office$MsoAppLanguageID {}


declare  class Office$MsoArrowheadLength {
  constructor(...args: empty): mixed;
static +msoArrowheadLengthMedium: Class<Office$MsoArrowheadLength__msoArrowheadLengthMedium> & Office$MsoArrowheadLength__msoArrowheadLengthMedium & 2;// 2
static +msoArrowheadLengthMixed: Class<Office$MsoArrowheadLength__msoArrowheadLengthMixed> & Office$MsoArrowheadLength__msoArrowheadLengthMixed & -2;// -2
static +msoArrowheadLong: Class<Office$MsoArrowheadLength__msoArrowheadLong> & Office$MsoArrowheadLength__msoArrowheadLong & 3;// 3
static +msoArrowheadShort: Class<Office$MsoArrowheadLength__msoArrowheadShort> & Office$MsoArrowheadLength__msoArrowheadShort & 1;// 1

}

declare class Office$MsoArrowheadLength__msoArrowheadLengthMedium mixins Office$MsoArrowheadLength {}
declare class Office$MsoArrowheadLength__msoArrowheadLengthMixed mixins Office$MsoArrowheadLength {}
declare class Office$MsoArrowheadLength__msoArrowheadLong mixins Office$MsoArrowheadLength {}
declare class Office$MsoArrowheadLength__msoArrowheadShort mixins Office$MsoArrowheadLength {}


declare  class Office$MsoArrowheadStyle {
  constructor(...args: empty): mixed;
static +msoArrowheadDiamond: Class<Office$MsoArrowheadStyle__msoArrowheadDiamond> & Office$MsoArrowheadStyle__msoArrowheadDiamond & 5;// 5
static +msoArrowheadNone: Class<Office$MsoArrowheadStyle__msoArrowheadNone> & Office$MsoArrowheadStyle__msoArrowheadNone & 1;// 1
static +msoArrowheadOpen: Class<Office$MsoArrowheadStyle__msoArrowheadOpen> & Office$MsoArrowheadStyle__msoArrowheadOpen & 3;// 3
static +msoArrowheadOval: Class<Office$MsoArrowheadStyle__msoArrowheadOval> & Office$MsoArrowheadStyle__msoArrowheadOval & 6;// 6
static +msoArrowheadStealth: Class<Office$MsoArrowheadStyle__msoArrowheadStealth> & Office$MsoArrowheadStyle__msoArrowheadStealth & 4;// 4
static +msoArrowheadStyleMixed: Class<Office$MsoArrowheadStyle__msoArrowheadStyleMixed> & Office$MsoArrowheadStyle__msoArrowheadStyleMixed & -2;// -2
static +msoArrowheadTriangle: Class<Office$MsoArrowheadStyle__msoArrowheadTriangle> & Office$MsoArrowheadStyle__msoArrowheadTriangle & 2;// 2

}

declare class Office$MsoArrowheadStyle__msoArrowheadDiamond mixins Office$MsoArrowheadStyle {}
declare class Office$MsoArrowheadStyle__msoArrowheadNone mixins Office$MsoArrowheadStyle {}
declare class Office$MsoArrowheadStyle__msoArrowheadOpen mixins Office$MsoArrowheadStyle {}
declare class Office$MsoArrowheadStyle__msoArrowheadOval mixins Office$MsoArrowheadStyle {}
declare class Office$MsoArrowheadStyle__msoArrowheadStealth mixins Office$MsoArrowheadStyle {}
declare class Office$MsoArrowheadStyle__msoArrowheadStyleMixed mixins Office$MsoArrowheadStyle {}
declare class Office$MsoArrowheadStyle__msoArrowheadTriangle mixins Office$MsoArrowheadStyle {}


declare  class Office$MsoArrowheadWidth {
  constructor(...args: empty): mixed;
static +msoArrowheadNarrow: Class<Office$MsoArrowheadWidth__msoArrowheadNarrow> & Office$MsoArrowheadWidth__msoArrowheadNarrow & 1;// 1
static +msoArrowheadWide: Class<Office$MsoArrowheadWidth__msoArrowheadWide> & Office$MsoArrowheadWidth__msoArrowheadWide & 3;// 3
static +msoArrowheadWidthMedium: Class<Office$MsoArrowheadWidth__msoArrowheadWidthMedium> & Office$MsoArrowheadWidth__msoArrowheadWidthMedium & 2;// 2
static +msoArrowheadWidthMixed: Class<Office$MsoArrowheadWidth__msoArrowheadWidthMixed> & Office$MsoArrowheadWidth__msoArrowheadWidthMixed & -2;// -2

}

declare class Office$MsoArrowheadWidth__msoArrowheadNarrow mixins Office$MsoArrowheadWidth {}
declare class Office$MsoArrowheadWidth__msoArrowheadWide mixins Office$MsoArrowheadWidth {}
declare class Office$MsoArrowheadWidth__msoArrowheadWidthMedium mixins Office$MsoArrowheadWidth {}
declare class Office$MsoArrowheadWidth__msoArrowheadWidthMixed mixins Office$MsoArrowheadWidth {}


declare  class Office$MsoAutomationSecurity {
  constructor(...args: empty): mixed;
static +msoAutomationSecurityByUI: Class<Office$MsoAutomationSecurity__msoAutomationSecurityByUI> & Office$MsoAutomationSecurity__msoAutomationSecurityByUI & 2;// 2
static +msoAutomationSecurityForceDisable: Class<Office$MsoAutomationSecurity__msoAutomationSecurityForceDisable> & Office$MsoAutomationSecurity__msoAutomationSecurityForceDisable & 3;// 3
static +msoAutomationSecurityLow: Class<Office$MsoAutomationSecurity__msoAutomationSecurityLow> & Office$MsoAutomationSecurity__msoAutomationSecurityLow & 1;// 1

}

declare class Office$MsoAutomationSecurity__msoAutomationSecurityByUI mixins Office$MsoAutomationSecurity {}
declare class Office$MsoAutomationSecurity__msoAutomationSecurityForceDisable mixins Office$MsoAutomationSecurity {}
declare class Office$MsoAutomationSecurity__msoAutomationSecurityLow mixins Office$MsoAutomationSecurity {}


declare  class Office$MsoAutoShapeType {
  constructor(...args: empty): mixed;
static +msoShape10pointStar: Class<Office$MsoAutoShapeType__msoShape10pointStar> & Office$MsoAutoShapeType__msoShape10pointStar & 149;// 149
static +msoShape12pointStar: Class<Office$MsoAutoShapeType__msoShape12pointStar> & Office$MsoAutoShapeType__msoShape12pointStar & 150;// 150
static +msoShape16pointStar: Class<Office$MsoAutoShapeType__msoShape16pointStar> & Office$MsoAutoShapeType__msoShape16pointStar & 94;// 94
static +msoShape24pointStar: Class<Office$MsoAutoShapeType__msoShape24pointStar> & Office$MsoAutoShapeType__msoShape24pointStar & 95;// 95
static +msoShape32pointStar: Class<Office$MsoAutoShapeType__msoShape32pointStar> & Office$MsoAutoShapeType__msoShape32pointStar & 96;// 96
static +msoShape4pointStar: Class<Office$MsoAutoShapeType__msoShape4pointStar> & Office$MsoAutoShapeType__msoShape4pointStar & 91;// 91
static +msoShape5pointStar: Class<Office$MsoAutoShapeType__msoShape5pointStar> & Office$MsoAutoShapeType__msoShape5pointStar & 92;// 92
static +msoShape6pointStar: Class<Office$MsoAutoShapeType__msoShape6pointStar> & Office$MsoAutoShapeType__msoShape6pointStar & 147;// 147
static +msoShape7pointStar: Class<Office$MsoAutoShapeType__msoShape7pointStar> & Office$MsoAutoShapeType__msoShape7pointStar & 148;// 148
static +msoShape8pointStar: Class<Office$MsoAutoShapeType__msoShape8pointStar> & Office$MsoAutoShapeType__msoShape8pointStar & 93;// 93
static +msoShapeActionButtonBackorPrevious: Class<Office$MsoAutoShapeType__msoShapeActionButtonBackorPrevious> & Office$MsoAutoShapeType__msoShapeActionButtonBackorPrevious & 129;// 129
static +msoShapeActionButtonBeginning: Class<Office$MsoAutoShapeType__msoShapeActionButtonBeginning> & Office$MsoAutoShapeType__msoShapeActionButtonBeginning & 131;// 131
static +msoShapeActionButtonCustom: Class<Office$MsoAutoShapeType__msoShapeActionButtonCustom> & Office$MsoAutoShapeType__msoShapeActionButtonCustom & 125;// 125
static +msoShapeActionButtonDocument: Class<Office$MsoAutoShapeType__msoShapeActionButtonDocument> & Office$MsoAutoShapeType__msoShapeActionButtonDocument & 134;// 134
static +msoShapeActionButtonEnd: Class<Office$MsoAutoShapeType__msoShapeActionButtonEnd> & Office$MsoAutoShapeType__msoShapeActionButtonEnd & 132;// 132
static +msoShapeActionButtonForwardorNext: Class<Office$MsoAutoShapeType__msoShapeActionButtonForwardorNext> & Office$MsoAutoShapeType__msoShapeActionButtonForwardorNext & 130;// 130
static +msoShapeActionButtonHelp: Class<Office$MsoAutoShapeType__msoShapeActionButtonHelp> & Office$MsoAutoShapeType__msoShapeActionButtonHelp & 127;// 127
static +msoShapeActionButtonHome: Class<Office$MsoAutoShapeType__msoShapeActionButtonHome> & Office$MsoAutoShapeType__msoShapeActionButtonHome & 126;// 126
static +msoShapeActionButtonInformation: Class<Office$MsoAutoShapeType__msoShapeActionButtonInformation> & Office$MsoAutoShapeType__msoShapeActionButtonInformation & 128;// 128
static +msoShapeActionButtonMovie: Class<Office$MsoAutoShapeType__msoShapeActionButtonMovie> & Office$MsoAutoShapeType__msoShapeActionButtonMovie & 136;// 136
static +msoShapeActionButtonReturn: Class<Office$MsoAutoShapeType__msoShapeActionButtonReturn> & Office$MsoAutoShapeType__msoShapeActionButtonReturn & 133;// 133
static +msoShapeActionButtonSound: Class<Office$MsoAutoShapeType__msoShapeActionButtonSound> & Office$MsoAutoShapeType__msoShapeActionButtonSound & 135;// 135
static +msoShapeArc: Class<Office$MsoAutoShapeType__msoShapeArc> & Office$MsoAutoShapeType__msoShapeArc & 25;// 25
static +msoShapeBalloon: Class<Office$MsoAutoShapeType__msoShapeBalloon> & Office$MsoAutoShapeType__msoShapeBalloon & 137;// 137
static +msoShapeBentArrow: Class<Office$MsoAutoShapeType__msoShapeBentArrow> & Office$MsoAutoShapeType__msoShapeBentArrow & 41;// 41
static +msoShapeBentUpArrow: Class<Office$MsoAutoShapeType__msoShapeBentUpArrow> & Office$MsoAutoShapeType__msoShapeBentUpArrow & 44;// 44
static +msoShapeBevel: Class<Office$MsoAutoShapeType__msoShapeBevel> & Office$MsoAutoShapeType__msoShapeBevel & 15;// 15
static +msoShapeBlockArc: Class<Office$MsoAutoShapeType__msoShapeBlockArc> & Office$MsoAutoShapeType__msoShapeBlockArc & 20;// 20
static +msoShapeCan: Class<Office$MsoAutoShapeType__msoShapeCan> & Office$MsoAutoShapeType__msoShapeCan & 13;// 13
static +msoShapeChartPlus: Class<Office$MsoAutoShapeType__msoShapeChartPlus> & Office$MsoAutoShapeType__msoShapeChartPlus & 182;// 182
static +msoShapeChartStar: Class<Office$MsoAutoShapeType__msoShapeChartStar> & Office$MsoAutoShapeType__msoShapeChartStar & 181;// 181
static +msoShapeChartX: Class<Office$MsoAutoShapeType__msoShapeChartX> & Office$MsoAutoShapeType__msoShapeChartX & 180;// 180
static +msoShapeChevron: Class<Office$MsoAutoShapeType__msoShapeChevron> & Office$MsoAutoShapeType__msoShapeChevron & 52;// 52
static +msoShapeChord: Class<Office$MsoAutoShapeType__msoShapeChord> & Office$MsoAutoShapeType__msoShapeChord & 161;// 161
static +msoShapeCircularArrow: Class<Office$MsoAutoShapeType__msoShapeCircularArrow> & Office$MsoAutoShapeType__msoShapeCircularArrow & 60;// 60
static +msoShapeCloud: Class<Office$MsoAutoShapeType__msoShapeCloud> & Office$MsoAutoShapeType__msoShapeCloud & 179;// 179
static +msoShapeCloudCallout: Class<Office$MsoAutoShapeType__msoShapeCloudCallout> & Office$MsoAutoShapeType__msoShapeCloudCallout & 108;// 108
static +msoShapeCorner: Class<Office$MsoAutoShapeType__msoShapeCorner> & Office$MsoAutoShapeType__msoShapeCorner & 162;// 162
static +msoShapeCornerTabs: Class<Office$MsoAutoShapeType__msoShapeCornerTabs> & Office$MsoAutoShapeType__msoShapeCornerTabs & 169;// 169
static +msoShapeCross: Class<Office$MsoAutoShapeType__msoShapeCross> & Office$MsoAutoShapeType__msoShapeCross & 11;// 11
static +msoShapeCube: Class<Office$MsoAutoShapeType__msoShapeCube> & Office$MsoAutoShapeType__msoShapeCube & 14;// 14
static +msoShapeCurvedDownArrow: Class<Office$MsoAutoShapeType__msoShapeCurvedDownArrow> & Office$MsoAutoShapeType__msoShapeCurvedDownArrow & 48;// 48
static +msoShapeCurvedDownRibbon: Class<Office$MsoAutoShapeType__msoShapeCurvedDownRibbon> & Office$MsoAutoShapeType__msoShapeCurvedDownRibbon & 100;// 100
static +msoShapeCurvedLeftArrow: Class<Office$MsoAutoShapeType__msoShapeCurvedLeftArrow> & Office$MsoAutoShapeType__msoShapeCurvedLeftArrow & 46;// 46
static +msoShapeCurvedRightArrow: Class<Office$MsoAutoShapeType__msoShapeCurvedRightArrow> & Office$MsoAutoShapeType__msoShapeCurvedRightArrow & 45;// 45
static +msoShapeCurvedUpArrow: Class<Office$MsoAutoShapeType__msoShapeCurvedUpArrow> & Office$MsoAutoShapeType__msoShapeCurvedUpArrow & 47;// 47
static +msoShapeCurvedUpRibbon: Class<Office$MsoAutoShapeType__msoShapeCurvedUpRibbon> & Office$MsoAutoShapeType__msoShapeCurvedUpRibbon & 99;// 99
static +msoShapeDecagon: Class<Office$MsoAutoShapeType__msoShapeDecagon> & Office$MsoAutoShapeType__msoShapeDecagon & 144;// 144
static +msoShapeDiagonalStripe: Class<Office$MsoAutoShapeType__msoShapeDiagonalStripe> & Office$MsoAutoShapeType__msoShapeDiagonalStripe & 141;// 141
static +msoShapeDiamond: Class<Office$MsoAutoShapeType__msoShapeDiamond> & Office$MsoAutoShapeType__msoShapeDiamond & 4;// 4
static +msoShapeDodecagon: Class<Office$MsoAutoShapeType__msoShapeDodecagon> & Office$MsoAutoShapeType__msoShapeDodecagon & 146;// 146
static +msoShapeDonut: Class<Office$MsoAutoShapeType__msoShapeDonut> & Office$MsoAutoShapeType__msoShapeDonut & 18;// 18
static +msoShapeDoubleBrace: Class<Office$MsoAutoShapeType__msoShapeDoubleBrace> & Office$MsoAutoShapeType__msoShapeDoubleBrace & 27;// 27
static +msoShapeDoubleBracket: Class<Office$MsoAutoShapeType__msoShapeDoubleBracket> & Office$MsoAutoShapeType__msoShapeDoubleBracket & 26;// 26
static +msoShapeDoubleWave: Class<Office$MsoAutoShapeType__msoShapeDoubleWave> & Office$MsoAutoShapeType__msoShapeDoubleWave & 104;// 104
static +msoShapeDownArrow: Class<Office$MsoAutoShapeType__msoShapeDownArrow> & Office$MsoAutoShapeType__msoShapeDownArrow & 36;// 36
static +msoShapeDownArrowCallout: Class<Office$MsoAutoShapeType__msoShapeDownArrowCallout> & Office$MsoAutoShapeType__msoShapeDownArrowCallout & 56;// 56
static +msoShapeDownRibbon: Class<Office$MsoAutoShapeType__msoShapeDownRibbon> & Office$MsoAutoShapeType__msoShapeDownRibbon & 98;// 98
static +msoShapeExplosion1: Class<Office$MsoAutoShapeType__msoShapeExplosion1> & Office$MsoAutoShapeType__msoShapeExplosion1 & 89;// 89
static +msoShapeExplosion2: Class<Office$MsoAutoShapeType__msoShapeExplosion2> & Office$MsoAutoShapeType__msoShapeExplosion2 & 90;// 90
static +msoShapeFlowchartAlternateProcess: Class<Office$MsoAutoShapeType__msoShapeFlowchartAlternateProcess> & Office$MsoAutoShapeType__msoShapeFlowchartAlternateProcess & 62;// 62
static +msoShapeFlowchartCard: Class<Office$MsoAutoShapeType__msoShapeFlowchartCard> & Office$MsoAutoShapeType__msoShapeFlowchartCard & 75;// 75
static +msoShapeFlowchartCollate: Class<Office$MsoAutoShapeType__msoShapeFlowchartCollate> & Office$MsoAutoShapeType__msoShapeFlowchartCollate & 79;// 79
static +msoShapeFlowchartConnector: Class<Office$MsoAutoShapeType__msoShapeFlowchartConnector> & Office$MsoAutoShapeType__msoShapeFlowchartConnector & 73;// 73
static +msoShapeFlowchartData: Class<Office$MsoAutoShapeType__msoShapeFlowchartData> & Office$MsoAutoShapeType__msoShapeFlowchartData & 64;// 64
static +msoShapeFlowchartDecision: Class<Office$MsoAutoShapeType__msoShapeFlowchartDecision> & Office$MsoAutoShapeType__msoShapeFlowchartDecision & 63;// 63
static +msoShapeFlowchartDelay: Class<Office$MsoAutoShapeType__msoShapeFlowchartDelay> & Office$MsoAutoShapeType__msoShapeFlowchartDelay & 84;// 84
static +msoShapeFlowchartDirectAccessStorage: Class<Office$MsoAutoShapeType__msoShapeFlowchartDirectAccessStorage> & Office$MsoAutoShapeType__msoShapeFlowchartDirectAccessStorage & 87;// 87
static +msoShapeFlowchartDisplay: Class<Office$MsoAutoShapeType__msoShapeFlowchartDisplay> & Office$MsoAutoShapeType__msoShapeFlowchartDisplay & 88;// 88
static +msoShapeFlowchartDocument: Class<Office$MsoAutoShapeType__msoShapeFlowchartDocument> & Office$MsoAutoShapeType__msoShapeFlowchartDocument & 67;// 67
static +msoShapeFlowchartExtract: Class<Office$MsoAutoShapeType__msoShapeFlowchartExtract> & Office$MsoAutoShapeType__msoShapeFlowchartExtract & 81;// 81
static +msoShapeFlowchartInternalStorage: Class<Office$MsoAutoShapeType__msoShapeFlowchartInternalStorage> & Office$MsoAutoShapeType__msoShapeFlowchartInternalStorage & 66;// 66
static +msoShapeFlowchartMagneticDisk: Class<Office$MsoAutoShapeType__msoShapeFlowchartMagneticDisk> & Office$MsoAutoShapeType__msoShapeFlowchartMagneticDisk & 86;// 86
static +msoShapeFlowchartManualInput: Class<Office$MsoAutoShapeType__msoShapeFlowchartManualInput> & Office$MsoAutoShapeType__msoShapeFlowchartManualInput & 71;// 71
static +msoShapeFlowchartManualOperation: Class<Office$MsoAutoShapeType__msoShapeFlowchartManualOperation> & Office$MsoAutoShapeType__msoShapeFlowchartManualOperation & 72;// 72
static +msoShapeFlowchartMerge: Class<Office$MsoAutoShapeType__msoShapeFlowchartMerge> & Office$MsoAutoShapeType__msoShapeFlowchartMerge & 82;// 82
static +msoShapeFlowchartMultidocument: Class<Office$MsoAutoShapeType__msoShapeFlowchartMultidocument> & Office$MsoAutoShapeType__msoShapeFlowchartMultidocument & 68;// 68
static +msoShapeFlowchartOfflineStorage: Class<Office$MsoAutoShapeType__msoShapeFlowchartOfflineStorage> & Office$MsoAutoShapeType__msoShapeFlowchartOfflineStorage & 139;// 139
static +msoShapeFlowchartOffpageConnector: Class<Office$MsoAutoShapeType__msoShapeFlowchartOffpageConnector> & Office$MsoAutoShapeType__msoShapeFlowchartOffpageConnector & 74;// 74
static +msoShapeFlowchartOr: Class<Office$MsoAutoShapeType__msoShapeFlowchartOr> & Office$MsoAutoShapeType__msoShapeFlowchartOr & 78;// 78
static +msoShapeFlowchartPredefinedProcess: Class<Office$MsoAutoShapeType__msoShapeFlowchartPredefinedProcess> & Office$MsoAutoShapeType__msoShapeFlowchartPredefinedProcess & 65;// 65
static +msoShapeFlowchartPreparation: Class<Office$MsoAutoShapeType__msoShapeFlowchartPreparation> & Office$MsoAutoShapeType__msoShapeFlowchartPreparation & 70;// 70
static +msoShapeFlowchartProcess: Class<Office$MsoAutoShapeType__msoShapeFlowchartProcess> & Office$MsoAutoShapeType__msoShapeFlowchartProcess & 61;// 61
static +msoShapeFlowchartPunchedTape: Class<Office$MsoAutoShapeType__msoShapeFlowchartPunchedTape> & Office$MsoAutoShapeType__msoShapeFlowchartPunchedTape & 76;// 76
static +msoShapeFlowchartSequentialAccessStorage: Class<Office$MsoAutoShapeType__msoShapeFlowchartSequentialAccessStorage> & Office$MsoAutoShapeType__msoShapeFlowchartSequentialAccessStorage & 85;// 85
static +msoShapeFlowchartSort: Class<Office$MsoAutoShapeType__msoShapeFlowchartSort> & Office$MsoAutoShapeType__msoShapeFlowchartSort & 80;// 80
static +msoShapeFlowchartStoredData: Class<Office$MsoAutoShapeType__msoShapeFlowchartStoredData> & Office$MsoAutoShapeType__msoShapeFlowchartStoredData & 83;// 83
static +msoShapeFlowchartSummingJunction: Class<Office$MsoAutoShapeType__msoShapeFlowchartSummingJunction> & Office$MsoAutoShapeType__msoShapeFlowchartSummingJunction & 77;// 77
static +msoShapeFlowchartTerminator: Class<Office$MsoAutoShapeType__msoShapeFlowchartTerminator> & Office$MsoAutoShapeType__msoShapeFlowchartTerminator & 69;// 69
static +msoShapeFoldedCorner: Class<Office$MsoAutoShapeType__msoShapeFoldedCorner> & Office$MsoAutoShapeType__msoShapeFoldedCorner & 16;// 16
static +msoShapeFrame: Class<Office$MsoAutoShapeType__msoShapeFrame> & Office$MsoAutoShapeType__msoShapeFrame & 158;// 158
static +msoShapeFunnel: Class<Office$MsoAutoShapeType__msoShapeFunnel> & Office$MsoAutoShapeType__msoShapeFunnel & 174;// 174
static +msoShapeGear6: Class<Office$MsoAutoShapeType__msoShapeGear6> & Office$MsoAutoShapeType__msoShapeGear6 & 172;// 172
static +msoShapeGear9: Class<Office$MsoAutoShapeType__msoShapeGear9> & Office$MsoAutoShapeType__msoShapeGear9 & 173;// 173
static +msoShapeHalfFrame: Class<Office$MsoAutoShapeType__msoShapeHalfFrame> & Office$MsoAutoShapeType__msoShapeHalfFrame & 159;// 159
static +msoShapeHeart: Class<Office$MsoAutoShapeType__msoShapeHeart> & Office$MsoAutoShapeType__msoShapeHeart & 21;// 21
static +msoShapeHeptagon: Class<Office$MsoAutoShapeType__msoShapeHeptagon> & Office$MsoAutoShapeType__msoShapeHeptagon & 145;// 145
static +msoShapeHexagon: Class<Office$MsoAutoShapeType__msoShapeHexagon> & Office$MsoAutoShapeType__msoShapeHexagon & 10;// 10
static +msoShapeHorizontalScroll: Class<Office$MsoAutoShapeType__msoShapeHorizontalScroll> & Office$MsoAutoShapeType__msoShapeHorizontalScroll & 102;// 102
static +msoShapeIsoscelesTriangle: Class<Office$MsoAutoShapeType__msoShapeIsoscelesTriangle> & Office$MsoAutoShapeType__msoShapeIsoscelesTriangle & 7;// 7
static +msoShapeLeftArrow: Class<Office$MsoAutoShapeType__msoShapeLeftArrow> & Office$MsoAutoShapeType__msoShapeLeftArrow & 34;// 34
static +msoShapeLeftArrowCallout: Class<Office$MsoAutoShapeType__msoShapeLeftArrowCallout> & Office$MsoAutoShapeType__msoShapeLeftArrowCallout & 54;// 54
static +msoShapeLeftBrace: Class<Office$MsoAutoShapeType__msoShapeLeftBrace> & Office$MsoAutoShapeType__msoShapeLeftBrace & 31;// 31
static +msoShapeLeftBracket: Class<Office$MsoAutoShapeType__msoShapeLeftBracket> & Office$MsoAutoShapeType__msoShapeLeftBracket & 29;// 29
static +msoShapeLeftCircularArrow: Class<Office$MsoAutoShapeType__msoShapeLeftCircularArrow> & Office$MsoAutoShapeType__msoShapeLeftCircularArrow & 176;// 176
static +msoShapeLeftRightArrow: Class<Office$MsoAutoShapeType__msoShapeLeftRightArrow> & Office$MsoAutoShapeType__msoShapeLeftRightArrow & 37;// 37
static +msoShapeLeftRightArrowCallout: Class<Office$MsoAutoShapeType__msoShapeLeftRightArrowCallout> & Office$MsoAutoShapeType__msoShapeLeftRightArrowCallout & 57;// 57
static +msoShapeLeftRightCircularArrow: Class<Office$MsoAutoShapeType__msoShapeLeftRightCircularArrow> & Office$MsoAutoShapeType__msoShapeLeftRightCircularArrow & 177;// 177
static +msoShapeLeftRightRibbon: Class<Office$MsoAutoShapeType__msoShapeLeftRightRibbon> & Office$MsoAutoShapeType__msoShapeLeftRightRibbon & 140;// 140
static +msoShapeLeftRightUpArrow: Class<Office$MsoAutoShapeType__msoShapeLeftRightUpArrow> & Office$MsoAutoShapeType__msoShapeLeftRightUpArrow & 40;// 40
static +msoShapeLeftUpArrow: Class<Office$MsoAutoShapeType__msoShapeLeftUpArrow> & Office$MsoAutoShapeType__msoShapeLeftUpArrow & 43;// 43
static +msoShapeLightningBolt: Class<Office$MsoAutoShapeType__msoShapeLightningBolt> & Office$MsoAutoShapeType__msoShapeLightningBolt & 22;// 22
static +msoShapeLineCallout1: Class<Office$MsoAutoShapeType__msoShapeLineCallout1> & Office$MsoAutoShapeType__msoShapeLineCallout1 & 109;// 109
static +msoShapeLineCallout1AccentBar: Class<Office$MsoAutoShapeType__msoShapeLineCallout1AccentBar> & Office$MsoAutoShapeType__msoShapeLineCallout1AccentBar & 113;// 113
static +msoShapeLineCallout1BorderandAccentBar: Class<Office$MsoAutoShapeType__msoShapeLineCallout1BorderandAccentBar> & Office$MsoAutoShapeType__msoShapeLineCallout1BorderandAccentBar & 121;// 121
static +msoShapeLineCallout1NoBorder: Class<Office$MsoAutoShapeType__msoShapeLineCallout1NoBorder> & Office$MsoAutoShapeType__msoShapeLineCallout1NoBorder & 117;// 117
static +msoShapeLineCallout2: Class<Office$MsoAutoShapeType__msoShapeLineCallout2> & Office$MsoAutoShapeType__msoShapeLineCallout2 & 110;// 110
static +msoShapeLineCallout2AccentBar: Class<Office$MsoAutoShapeType__msoShapeLineCallout2AccentBar> & Office$MsoAutoShapeType__msoShapeLineCallout2AccentBar & 114;// 114
static +msoShapeLineCallout2BorderandAccentBar: Class<Office$MsoAutoShapeType__msoShapeLineCallout2BorderandAccentBar> & Office$MsoAutoShapeType__msoShapeLineCallout2BorderandAccentBar & 122;// 122
static +msoShapeLineCallout2NoBorder: Class<Office$MsoAutoShapeType__msoShapeLineCallout2NoBorder> & Office$MsoAutoShapeType__msoShapeLineCallout2NoBorder & 118;// 118
static +msoShapeLineCallout3: Class<Office$MsoAutoShapeType__msoShapeLineCallout3> & Office$MsoAutoShapeType__msoShapeLineCallout3 & 111;// 111
static +msoShapeLineCallout3AccentBar: Class<Office$MsoAutoShapeType__msoShapeLineCallout3AccentBar> & Office$MsoAutoShapeType__msoShapeLineCallout3AccentBar & 115;// 115
static +msoShapeLineCallout3BorderandAccentBar: Class<Office$MsoAutoShapeType__msoShapeLineCallout3BorderandAccentBar> & Office$MsoAutoShapeType__msoShapeLineCallout3BorderandAccentBar & 123;// 123
static +msoShapeLineCallout3NoBorder: Class<Office$MsoAutoShapeType__msoShapeLineCallout3NoBorder> & Office$MsoAutoShapeType__msoShapeLineCallout3NoBorder & 119;// 119
static +msoShapeLineCallout4: Class<Office$MsoAutoShapeType__msoShapeLineCallout4> & Office$MsoAutoShapeType__msoShapeLineCallout4 & 112;// 112
static +msoShapeLineCallout4AccentBar: Class<Office$MsoAutoShapeType__msoShapeLineCallout4AccentBar> & Office$MsoAutoShapeType__msoShapeLineCallout4AccentBar & 116;// 116
static +msoShapeLineCallout4BorderandAccentBar: Class<Office$MsoAutoShapeType__msoShapeLineCallout4BorderandAccentBar> & Office$MsoAutoShapeType__msoShapeLineCallout4BorderandAccentBar & 124;// 124
static +msoShapeLineCallout4NoBorder: Class<Office$MsoAutoShapeType__msoShapeLineCallout4NoBorder> & Office$MsoAutoShapeType__msoShapeLineCallout4NoBorder & 120;// 120
static +msoShapeLineInverse: Class<Office$MsoAutoShapeType__msoShapeLineInverse> & Office$MsoAutoShapeType__msoShapeLineInverse & 183;// 183
static +msoShapeMathDivide: Class<Office$MsoAutoShapeType__msoShapeMathDivide> & Office$MsoAutoShapeType__msoShapeMathDivide & 166;// 166
static +msoShapeMathEqual: Class<Office$MsoAutoShapeType__msoShapeMathEqual> & Office$MsoAutoShapeType__msoShapeMathEqual & 167;// 167
static +msoShapeMathMinus: Class<Office$MsoAutoShapeType__msoShapeMathMinus> & Office$MsoAutoShapeType__msoShapeMathMinus & 164;// 164
static +msoShapeMathMultiply: Class<Office$MsoAutoShapeType__msoShapeMathMultiply> & Office$MsoAutoShapeType__msoShapeMathMultiply & 165;// 165
static +msoShapeMathNotEqual: Class<Office$MsoAutoShapeType__msoShapeMathNotEqual> & Office$MsoAutoShapeType__msoShapeMathNotEqual & 168;// 168
static +msoShapeMathPlus: Class<Office$MsoAutoShapeType__msoShapeMathPlus> & Office$MsoAutoShapeType__msoShapeMathPlus & 163;// 163
static +msoShapeMixed: Class<Office$MsoAutoShapeType__msoShapeMixed> & Office$MsoAutoShapeType__msoShapeMixed & -2;// -2
static +msoShapeMoon: Class<Office$MsoAutoShapeType__msoShapeMoon> & Office$MsoAutoShapeType__msoShapeMoon & 24;// 24
static +msoShapeNonIsoscelesTrapezoid: Class<Office$MsoAutoShapeType__msoShapeNonIsoscelesTrapezoid> & Office$MsoAutoShapeType__msoShapeNonIsoscelesTrapezoid & 143;// 143
static +msoShapeNoSymbol: Class<Office$MsoAutoShapeType__msoShapeNoSymbol> & Office$MsoAutoShapeType__msoShapeNoSymbol & 19;// 19
static +msoShapeNotchedRightArrow: Class<Office$MsoAutoShapeType__msoShapeNotchedRightArrow> & Office$MsoAutoShapeType__msoShapeNotchedRightArrow & 50;// 50
static +msoShapeNotPrimitive: Class<Office$MsoAutoShapeType__msoShapeNotPrimitive> & Office$MsoAutoShapeType__msoShapeNotPrimitive & 138;// 138
static +msoShapeOctagon: Class<Office$MsoAutoShapeType__msoShapeOctagon> & Office$MsoAutoShapeType__msoShapeOctagon & 6;// 6
static +msoShapeOval: Class<Office$MsoAutoShapeType__msoShapeOval> & Office$MsoAutoShapeType__msoShapeOval & 9;// 9
static +msoShapeOvalCallout: Class<Office$MsoAutoShapeType__msoShapeOvalCallout> & Office$MsoAutoShapeType__msoShapeOvalCallout & 107;// 107
static +msoShapeParallelogram: Class<Office$MsoAutoShapeType__msoShapeParallelogram> & Office$MsoAutoShapeType__msoShapeParallelogram & 2;// 2
static +msoShapePentagon: Class<Office$MsoAutoShapeType__msoShapePentagon> & Office$MsoAutoShapeType__msoShapePentagon & 51;// 51
static +msoShapePie: Class<Office$MsoAutoShapeType__msoShapePie> & Office$MsoAutoShapeType__msoShapePie & 142;// 142
static +msoShapePieWedge: Class<Office$MsoAutoShapeType__msoShapePieWedge> & Office$MsoAutoShapeType__msoShapePieWedge & 175;// 175
static +msoShapePlaque: Class<Office$MsoAutoShapeType__msoShapePlaque> & Office$MsoAutoShapeType__msoShapePlaque & 28;// 28
static +msoShapePlaqueTabs: Class<Office$MsoAutoShapeType__msoShapePlaqueTabs> & Office$MsoAutoShapeType__msoShapePlaqueTabs & 171;// 171
static +msoShapeQuadArrow: Class<Office$MsoAutoShapeType__msoShapeQuadArrow> & Office$MsoAutoShapeType__msoShapeQuadArrow & 39;// 39
static +msoShapeQuadArrowCallout: Class<Office$MsoAutoShapeType__msoShapeQuadArrowCallout> & Office$MsoAutoShapeType__msoShapeQuadArrowCallout & 59;// 59
static +msoShapeRectangle: Class<Office$MsoAutoShapeType__msoShapeRectangle> & Office$MsoAutoShapeType__msoShapeRectangle & 1;// 1
static +msoShapeRectangularCallout: Class<Office$MsoAutoShapeType__msoShapeRectangularCallout> & Office$MsoAutoShapeType__msoShapeRectangularCallout & 105;// 105
static +msoShapeRegularPentagon: Class<Office$MsoAutoShapeType__msoShapeRegularPentagon> & Office$MsoAutoShapeType__msoShapeRegularPentagon & 12;// 12
static +msoShapeRightArrow: Class<Office$MsoAutoShapeType__msoShapeRightArrow> & Office$MsoAutoShapeType__msoShapeRightArrow & 33;// 33
static +msoShapeRightArrowCallout: Class<Office$MsoAutoShapeType__msoShapeRightArrowCallout> & Office$MsoAutoShapeType__msoShapeRightArrowCallout & 53;// 53
static +msoShapeRightBrace: Class<Office$MsoAutoShapeType__msoShapeRightBrace> & Office$MsoAutoShapeType__msoShapeRightBrace & 32;// 32
static +msoShapeRightBracket: Class<Office$MsoAutoShapeType__msoShapeRightBracket> & Office$MsoAutoShapeType__msoShapeRightBracket & 30;// 30
static +msoShapeRightTriangle: Class<Office$MsoAutoShapeType__msoShapeRightTriangle> & Office$MsoAutoShapeType__msoShapeRightTriangle & 8;// 8
static +msoShapeRound1Rectangle: Class<Office$MsoAutoShapeType__msoShapeRound1Rectangle> & Office$MsoAutoShapeType__msoShapeRound1Rectangle & 151;// 151
static +msoShapeRound2DiagRectangle: Class<Office$MsoAutoShapeType__msoShapeRound2DiagRectangle> & Office$MsoAutoShapeType__msoShapeRound2DiagRectangle & 153;// 153
static +msoShapeRound2SameRectangle: Class<Office$MsoAutoShapeType__msoShapeRound2SameRectangle> & Office$MsoAutoShapeType__msoShapeRound2SameRectangle & 152;// 152
static +msoShapeRoundedRectangle: Class<Office$MsoAutoShapeType__msoShapeRoundedRectangle> & Office$MsoAutoShapeType__msoShapeRoundedRectangle & 5;// 5
static +msoShapeRoundedRectangularCallout: Class<Office$MsoAutoShapeType__msoShapeRoundedRectangularCallout> & Office$MsoAutoShapeType__msoShapeRoundedRectangularCallout & 106;// 106
static +msoShapeSmileyFace: Class<Office$MsoAutoShapeType__msoShapeSmileyFace> & Office$MsoAutoShapeType__msoShapeSmileyFace & 17;// 17
static +msoShapeSnip1Rectangle: Class<Office$MsoAutoShapeType__msoShapeSnip1Rectangle> & Office$MsoAutoShapeType__msoShapeSnip1Rectangle & 155;// 155
static +msoShapeSnip2DiagRectangle: Class<Office$MsoAutoShapeType__msoShapeSnip2DiagRectangle> & Office$MsoAutoShapeType__msoShapeSnip2DiagRectangle & 157;// 157
static +msoShapeSnip2SameRectangle: Class<Office$MsoAutoShapeType__msoShapeSnip2SameRectangle> & Office$MsoAutoShapeType__msoShapeSnip2SameRectangle & 156;// 156
static +msoShapeSnipRoundRectangle: Class<Office$MsoAutoShapeType__msoShapeSnipRoundRectangle> & Office$MsoAutoShapeType__msoShapeSnipRoundRectangle & 154;// 154
static +msoShapeSquareTabs: Class<Office$MsoAutoShapeType__msoShapeSquareTabs> & Office$MsoAutoShapeType__msoShapeSquareTabs & 170;// 170
static +msoShapeStripedRightArrow: Class<Office$MsoAutoShapeType__msoShapeStripedRightArrow> & Office$MsoAutoShapeType__msoShapeStripedRightArrow & 49;// 49
static +msoShapeSun: Class<Office$MsoAutoShapeType__msoShapeSun> & Office$MsoAutoShapeType__msoShapeSun & 23;// 23
static +msoShapeSwooshArrow: Class<Office$MsoAutoShapeType__msoShapeSwooshArrow> & Office$MsoAutoShapeType__msoShapeSwooshArrow & 178;// 178
static +msoShapeTear: Class<Office$MsoAutoShapeType__msoShapeTear> & Office$MsoAutoShapeType__msoShapeTear & 160;// 160
static +msoShapeTrapezoid: Class<Office$MsoAutoShapeType__msoShapeTrapezoid> & Office$MsoAutoShapeType__msoShapeTrapezoid & 3;// 3
static +msoShapeUpArrow: Class<Office$MsoAutoShapeType__msoShapeUpArrow> & Office$MsoAutoShapeType__msoShapeUpArrow & 35;// 35
static +msoShapeUpArrowCallout: Class<Office$MsoAutoShapeType__msoShapeUpArrowCallout> & Office$MsoAutoShapeType__msoShapeUpArrowCallout & 55;// 55
static +msoShapeUpDownArrow: Class<Office$MsoAutoShapeType__msoShapeUpDownArrow> & Office$MsoAutoShapeType__msoShapeUpDownArrow & 38;// 38
static +msoShapeUpDownArrowCallout: Class<Office$MsoAutoShapeType__msoShapeUpDownArrowCallout> & Office$MsoAutoShapeType__msoShapeUpDownArrowCallout & 58;// 58
static +msoShapeUpRibbon: Class<Office$MsoAutoShapeType__msoShapeUpRibbon> & Office$MsoAutoShapeType__msoShapeUpRibbon & 97;// 97
static +msoShapeUTurnArrow: Class<Office$MsoAutoShapeType__msoShapeUTurnArrow> & Office$MsoAutoShapeType__msoShapeUTurnArrow & 42;// 42
static +msoShapeVerticalScroll: Class<Office$MsoAutoShapeType__msoShapeVerticalScroll> & Office$MsoAutoShapeType__msoShapeVerticalScroll & 101;// 101
static +msoShapeWave: Class<Office$MsoAutoShapeType__msoShapeWave> & Office$MsoAutoShapeType__msoShapeWave & 103;// 103

}

declare class Office$MsoAutoShapeType__msoShape10pointStar mixins Office$MsoAutoShapeType {}
declare class Office$MsoAutoShapeType__msoShape12pointStar mixins Office$MsoAutoShapeType {}
declare class Office$MsoAutoShapeType__msoShape16pointStar mixins Office$MsoAutoShapeType {}
declare class Office$MsoAutoShapeType__msoShape24pointStar mixins Office$MsoAutoShapeType {}
declare class Office$MsoAutoShapeType__msoShape32pointStar mixins Office$MsoAutoShapeType {}
declare class Office$MsoAutoShapeType__msoShape4pointStar mixins Office$MsoAutoShapeType {}
declare class Office$MsoAutoShapeType__msoShape5pointStar mixins Office$MsoAutoShapeType {}
declare class Office$MsoAutoShapeType__msoShape6pointStar mixins Office$MsoAutoShapeType {}
declare class Office$MsoAutoShapeType__msoShape7pointStar mixins Office$MsoAutoShapeType {}
declare class Office$MsoAutoShapeType__msoShape8pointStar mixins Office$MsoAutoShapeType {}
declare class Office$MsoAutoShapeType__msoShapeActionButtonBackorPrevious mixins Office$MsoAutoShapeType {}
declare class Office$MsoAutoShapeType__msoShapeActionButtonBeginning mixins Office$MsoAutoShapeType {}
declare class Office$MsoAutoShapeType__msoShapeActionButtonCustom mixins Office$MsoAutoShapeType {}
declare class Office$MsoAutoShapeType__msoShapeActionButtonDocument mixins Office$MsoAutoShapeType {}
declare class Office$MsoAutoShapeType__msoShapeActionButtonEnd mixins Office$MsoAutoShapeType {}
declare class Office$MsoAutoShapeType__msoShapeActionButtonForwardorNext mixins Office$MsoAutoShapeType {}
declare class Office$MsoAutoShapeType__msoShapeActionButtonHelp mixins Office$MsoAutoShapeType {}
declare class Office$MsoAutoShapeType__msoShapeActionButtonHome mixins Office$MsoAutoShapeType {}
declare class Office$MsoAutoShapeType__msoShapeActionButtonInformation mixins Office$MsoAutoShapeType {}
declare class Office$MsoAutoShapeType__msoShapeActionButtonMovie mixins Office$MsoAutoShapeType {}
declare class Office$MsoAutoShapeType__msoShapeActionButtonReturn mixins Office$MsoAutoShapeType {}
declare class Office$MsoAutoShapeType__msoShapeActionButtonSound mixins Office$MsoAutoShapeType {}
declare class Office$MsoAutoShapeType__msoShapeArc mixins Office$MsoAutoShapeType {}
declare class Office$MsoAutoShapeType__msoShapeBalloon mixins Office$MsoAutoShapeType {}
declare class Office$MsoAutoShapeType__msoShapeBentArrow mixins Office$MsoAutoShapeType {}
declare class Office$MsoAutoShapeType__msoShapeBentUpArrow mixins Office$MsoAutoShapeType {}
declare class Office$MsoAutoShapeType__msoShapeBevel mixins Office$MsoAutoShapeType {}
declare class Office$MsoAutoShapeType__msoShapeBlockArc mixins Office$MsoAutoShapeType {}
declare class Office$MsoAutoShapeType__msoShapeCan mixins Office$MsoAutoShapeType {}
declare class Office$MsoAutoShapeType__msoShapeChartPlus mixins Office$MsoAutoShapeType {}
declare class Office$MsoAutoShapeType__msoShapeChartStar mixins Office$MsoAutoShapeType {}
declare class Office$MsoAutoShapeType__msoShapeChartX mixins Office$MsoAutoShapeType {}
declare class Office$MsoAutoShapeType__msoShapeChevron mixins Office$MsoAutoShapeType {}
declare class Office$MsoAutoShapeType__msoShapeChord mixins Office$MsoAutoShapeType {}
declare class Office$MsoAutoShapeType__msoShapeCircularArrow mixins Office$MsoAutoShapeType {}
declare class Office$MsoAutoShapeType__msoShapeCloud mixins Office$MsoAutoShapeType {}
declare class Office$MsoAutoShapeType__msoShapeCloudCallout mixins Office$MsoAutoShapeType {}
declare class Office$MsoAutoShapeType__msoShapeCorner mixins Office$MsoAutoShapeType {}
declare class Office$MsoAutoShapeType__msoShapeCornerTabs mixins Office$MsoAutoShapeType {}
declare class Office$MsoAutoShapeType__msoShapeCross mixins Office$MsoAutoShapeType {}
declare class Office$MsoAutoShapeType__msoShapeCube mixins Office$MsoAutoShapeType {}
declare class Office$MsoAutoShapeType__msoShapeCurvedDownArrow mixins Office$MsoAutoShapeType {}
declare class Office$MsoAutoShapeType__msoShapeCurvedDownRibbon mixins Office$MsoAutoShapeType {}
declare class Office$MsoAutoShapeType__msoShapeCurvedLeftArrow mixins Office$MsoAutoShapeType {}
declare class Office$MsoAutoShapeType__msoShapeCurvedRightArrow mixins Office$MsoAutoShapeType {}
declare class Office$MsoAutoShapeType__msoShapeCurvedUpArrow mixins Office$MsoAutoShapeType {}
declare class Office$MsoAutoShapeType__msoShapeCurvedUpRibbon mixins Office$MsoAutoShapeType {}
declare class Office$MsoAutoShapeType__msoShapeDecagon mixins Office$MsoAutoShapeType {}
declare class Office$MsoAutoShapeType__msoShapeDiagonalStripe mixins Office$MsoAutoShapeType {}
declare class Office$MsoAutoShapeType__msoShapeDiamond mixins Office$MsoAutoShapeType {}
declare class Office$MsoAutoShapeType__msoShapeDodecagon mixins Office$MsoAutoShapeType {}
declare class Office$MsoAutoShapeType__msoShapeDonut mixins Office$MsoAutoShapeType {}
declare class Office$MsoAutoShapeType__msoShapeDoubleBrace mixins Office$MsoAutoShapeType {}
declare class Office$MsoAutoShapeType__msoShapeDoubleBracket mixins Office$MsoAutoShapeType {}
declare class Office$MsoAutoShapeType__msoShapeDoubleWave mixins Office$MsoAutoShapeType {}
declare class Office$MsoAutoShapeType__msoShapeDownArrow mixins Office$MsoAutoShapeType {}
declare class Office$MsoAutoShapeType__msoShapeDownArrowCallout mixins Office$MsoAutoShapeType {}
declare class Office$MsoAutoShapeType__msoShapeDownRibbon mixins Office$MsoAutoShapeType {}
declare class Office$MsoAutoShapeType__msoShapeExplosion1 mixins Office$MsoAutoShapeType {}
declare class Office$MsoAutoShapeType__msoShapeExplosion2 mixins Office$MsoAutoShapeType {}
declare class Office$MsoAutoShapeType__msoShapeFlowchartAlternateProcess mixins Office$MsoAutoShapeType {}
declare class Office$MsoAutoShapeType__msoShapeFlowchartCard mixins Office$MsoAutoShapeType {}
declare class Office$MsoAutoShapeType__msoShapeFlowchartCollate mixins Office$MsoAutoShapeType {}
declare class Office$MsoAutoShapeType__msoShapeFlowchartConnector mixins Office$MsoAutoShapeType {}
declare class Office$MsoAutoShapeType__msoShapeFlowchartData mixins Office$MsoAutoShapeType {}
declare class Office$MsoAutoShapeType__msoShapeFlowchartDecision mixins Office$MsoAutoShapeType {}
declare class Office$MsoAutoShapeType__msoShapeFlowchartDelay mixins Office$MsoAutoShapeType {}
declare class Office$MsoAutoShapeType__msoShapeFlowchartDirectAccessStorage mixins Office$MsoAutoShapeType {}
declare class Office$MsoAutoShapeType__msoShapeFlowchartDisplay mixins Office$MsoAutoShapeType {}
declare class Office$MsoAutoShapeType__msoShapeFlowchartDocument mixins Office$MsoAutoShapeType {}
declare class Office$MsoAutoShapeType__msoShapeFlowchartExtract mixins Office$MsoAutoShapeType {}
declare class Office$MsoAutoShapeType__msoShapeFlowchartInternalStorage mixins Office$MsoAutoShapeType {}
declare class Office$MsoAutoShapeType__msoShapeFlowchartMagneticDisk mixins Office$MsoAutoShapeType {}
declare class Office$MsoAutoShapeType__msoShapeFlowchartManualInput mixins Office$MsoAutoShapeType {}
declare class Office$MsoAutoShapeType__msoShapeFlowchartManualOperation mixins Office$MsoAutoShapeType {}
declare class Office$MsoAutoShapeType__msoShapeFlowchartMerge mixins Office$MsoAutoShapeType {}
declare class Office$MsoAutoShapeType__msoShapeFlowchartMultidocument mixins Office$MsoAutoShapeType {}
declare class Office$MsoAutoShapeType__msoShapeFlowchartOfflineStorage mixins Office$MsoAutoShapeType {}
declare class Office$MsoAutoShapeType__msoShapeFlowchartOffpageConnector mixins Office$MsoAutoShapeType {}
declare class Office$MsoAutoShapeType__msoShapeFlowchartOr mixins Office$MsoAutoShapeType {}
declare class Office$MsoAutoShapeType__msoShapeFlowchartPredefinedProcess mixins Office$MsoAutoShapeType {}
declare class Office$MsoAutoShapeType__msoShapeFlowchartPreparation mixins Office$MsoAutoShapeType {}
declare class Office$MsoAutoShapeType__msoShapeFlowchartProcess mixins Office$MsoAutoShapeType {}
declare class Office$MsoAutoShapeType__msoShapeFlowchartPunchedTape mixins Office$MsoAutoShapeType {}
declare class Office$MsoAutoShapeType__msoShapeFlowchartSequentialAccessStorage mixins Office$MsoAutoShapeType {}
declare class Office$MsoAutoShapeType__msoShapeFlowchartSort mixins Office$MsoAutoShapeType {}
declare class Office$MsoAutoShapeType__msoShapeFlowchartStoredData mixins Office$MsoAutoShapeType {}
declare class Office$MsoAutoShapeType__msoShapeFlowchartSummingJunction mixins Office$MsoAutoShapeType {}
declare class Office$MsoAutoShapeType__msoShapeFlowchartTerminator mixins Office$MsoAutoShapeType {}
declare class Office$MsoAutoShapeType__msoShapeFoldedCorner mixins Office$MsoAutoShapeType {}
declare class Office$MsoAutoShapeType__msoShapeFrame mixins Office$MsoAutoShapeType {}
declare class Office$MsoAutoShapeType__msoShapeFunnel mixins Office$MsoAutoShapeType {}
declare class Office$MsoAutoShapeType__msoShapeGear6 mixins Office$MsoAutoShapeType {}
declare class Office$MsoAutoShapeType__msoShapeGear9 mixins Office$MsoAutoShapeType {}
declare class Office$MsoAutoShapeType__msoShapeHalfFrame mixins Office$MsoAutoShapeType {}
declare class Office$MsoAutoShapeType__msoShapeHeart mixins Office$MsoAutoShapeType {}
declare class Office$MsoAutoShapeType__msoShapeHeptagon mixins Office$MsoAutoShapeType {}
declare class Office$MsoAutoShapeType__msoShapeHexagon mixins Office$MsoAutoShapeType {}
declare class Office$MsoAutoShapeType__msoShapeHorizontalScroll mixins Office$MsoAutoShapeType {}
declare class Office$MsoAutoShapeType__msoShapeIsoscelesTriangle mixins Office$MsoAutoShapeType {}
declare class Office$MsoAutoShapeType__msoShapeLeftArrow mixins Office$MsoAutoShapeType {}
declare class Office$MsoAutoShapeType__msoShapeLeftArrowCallout mixins Office$MsoAutoShapeType {}
declare class Office$MsoAutoShapeType__msoShapeLeftBrace mixins Office$MsoAutoShapeType {}
declare class Office$MsoAutoShapeType__msoShapeLeftBracket mixins Office$MsoAutoShapeType {}
declare class Office$MsoAutoShapeType__msoShapeLeftCircularArrow mixins Office$MsoAutoShapeType {}
declare class Office$MsoAutoShapeType__msoShapeLeftRightArrow mixins Office$MsoAutoShapeType {}
declare class Office$MsoAutoShapeType__msoShapeLeftRightArrowCallout mixins Office$MsoAutoShapeType {}
declare class Office$MsoAutoShapeType__msoShapeLeftRightCircularArrow mixins Office$MsoAutoShapeType {}
declare class Office$MsoAutoShapeType__msoShapeLeftRightRibbon mixins Office$MsoAutoShapeType {}
declare class Office$MsoAutoShapeType__msoShapeLeftRightUpArrow mixins Office$MsoAutoShapeType {}
declare class Office$MsoAutoShapeType__msoShapeLeftUpArrow mixins Office$MsoAutoShapeType {}
declare class Office$MsoAutoShapeType__msoShapeLightningBolt mixins Office$MsoAutoShapeType {}
declare class Office$MsoAutoShapeType__msoShapeLineCallout1 mixins Office$MsoAutoShapeType {}
declare class Office$MsoAutoShapeType__msoShapeLineCallout1AccentBar mixins Office$MsoAutoShapeType {}
declare class Office$MsoAutoShapeType__msoShapeLineCallout1BorderandAccentBar mixins Office$MsoAutoShapeType {}
declare class Office$MsoAutoShapeType__msoShapeLineCallout1NoBorder mixins Office$MsoAutoShapeType {}
declare class Office$MsoAutoShapeType__msoShapeLineCallout2 mixins Office$MsoAutoShapeType {}
declare class Office$MsoAutoShapeType__msoShapeLineCallout2AccentBar mixins Office$MsoAutoShapeType {}
declare class Office$MsoAutoShapeType__msoShapeLineCallout2BorderandAccentBar mixins Office$MsoAutoShapeType {}
declare class Office$MsoAutoShapeType__msoShapeLineCallout2NoBorder mixins Office$MsoAutoShapeType {}
declare class Office$MsoAutoShapeType__msoShapeLineCallout3 mixins Office$MsoAutoShapeType {}
declare class Office$MsoAutoShapeType__msoShapeLineCallout3AccentBar mixins Office$MsoAutoShapeType {}
declare class Office$MsoAutoShapeType__msoShapeLineCallout3BorderandAccentBar mixins Office$MsoAutoShapeType {}
declare class Office$MsoAutoShapeType__msoShapeLineCallout3NoBorder mixins Office$MsoAutoShapeType {}
declare class Office$MsoAutoShapeType__msoShapeLineCallout4 mixins Office$MsoAutoShapeType {}
declare class Office$MsoAutoShapeType__msoShapeLineCallout4AccentBar mixins Office$MsoAutoShapeType {}
declare class Office$MsoAutoShapeType__msoShapeLineCallout4BorderandAccentBar mixins Office$MsoAutoShapeType {}
declare class Office$MsoAutoShapeType__msoShapeLineCallout4NoBorder mixins Office$MsoAutoShapeType {}
declare class Office$MsoAutoShapeType__msoShapeLineInverse mixins Office$MsoAutoShapeType {}
declare class Office$MsoAutoShapeType__msoShapeMathDivide mixins Office$MsoAutoShapeType {}
declare class Office$MsoAutoShapeType__msoShapeMathEqual mixins Office$MsoAutoShapeType {}
declare class Office$MsoAutoShapeType__msoShapeMathMinus mixins Office$MsoAutoShapeType {}
declare class Office$MsoAutoShapeType__msoShapeMathMultiply mixins Office$MsoAutoShapeType {}
declare class Office$MsoAutoShapeType__msoShapeMathNotEqual mixins Office$MsoAutoShapeType {}
declare class Office$MsoAutoShapeType__msoShapeMathPlus mixins Office$MsoAutoShapeType {}
declare class Office$MsoAutoShapeType__msoShapeMixed mixins Office$MsoAutoShapeType {}
declare class Office$MsoAutoShapeType__msoShapeMoon mixins Office$MsoAutoShapeType {}
declare class Office$MsoAutoShapeType__msoShapeNonIsoscelesTrapezoid mixins Office$MsoAutoShapeType {}
declare class Office$MsoAutoShapeType__msoShapeNoSymbol mixins Office$MsoAutoShapeType {}
declare class Office$MsoAutoShapeType__msoShapeNotchedRightArrow mixins Office$MsoAutoShapeType {}
declare class Office$MsoAutoShapeType__msoShapeNotPrimitive mixins Office$MsoAutoShapeType {}
declare class Office$MsoAutoShapeType__msoShapeOctagon mixins Office$MsoAutoShapeType {}
declare class Office$MsoAutoShapeType__msoShapeOval mixins Office$MsoAutoShapeType {}
declare class Office$MsoAutoShapeType__msoShapeOvalCallout mixins Office$MsoAutoShapeType {}
declare class Office$MsoAutoShapeType__msoShapeParallelogram mixins Office$MsoAutoShapeType {}
declare class Office$MsoAutoShapeType__msoShapePentagon mixins Office$MsoAutoShapeType {}
declare class Office$MsoAutoShapeType__msoShapePie mixins Office$MsoAutoShapeType {}
declare class Office$MsoAutoShapeType__msoShapePieWedge mixins Office$MsoAutoShapeType {}
declare class Office$MsoAutoShapeType__msoShapePlaque mixins Office$MsoAutoShapeType {}
declare class Office$MsoAutoShapeType__msoShapePlaqueTabs mixins Office$MsoAutoShapeType {}
declare class Office$MsoAutoShapeType__msoShapeQuadArrow mixins Office$MsoAutoShapeType {}
declare class Office$MsoAutoShapeType__msoShapeQuadArrowCallout mixins Office$MsoAutoShapeType {}
declare class Office$MsoAutoShapeType__msoShapeRectangle mixins Office$MsoAutoShapeType {}
declare class Office$MsoAutoShapeType__msoShapeRectangularCallout mixins Office$MsoAutoShapeType {}
declare class Office$MsoAutoShapeType__msoShapeRegularPentagon mixins Office$MsoAutoShapeType {}
declare class Office$MsoAutoShapeType__msoShapeRightArrow mixins Office$MsoAutoShapeType {}
declare class Office$MsoAutoShapeType__msoShapeRightArrowCallout mixins Office$MsoAutoShapeType {}
declare class Office$MsoAutoShapeType__msoShapeRightBrace mixins Office$MsoAutoShapeType {}
declare class Office$MsoAutoShapeType__msoShapeRightBracket mixins Office$MsoAutoShapeType {}
declare class Office$MsoAutoShapeType__msoShapeRightTriangle mixins Office$MsoAutoShapeType {}
declare class Office$MsoAutoShapeType__msoShapeRound1Rectangle mixins Office$MsoAutoShapeType {}
declare class Office$MsoAutoShapeType__msoShapeRound2DiagRectangle mixins Office$MsoAutoShapeType {}
declare class Office$MsoAutoShapeType__msoShapeRound2SameRectangle mixins Office$MsoAutoShapeType {}
declare class Office$MsoAutoShapeType__msoShapeRoundedRectangle mixins Office$MsoAutoShapeType {}
declare class Office$MsoAutoShapeType__msoShapeRoundedRectangularCallout mixins Office$MsoAutoShapeType {}
declare class Office$MsoAutoShapeType__msoShapeSmileyFace mixins Office$MsoAutoShapeType {}
declare class Office$MsoAutoShapeType__msoShapeSnip1Rectangle mixins Office$MsoAutoShapeType {}
declare class Office$MsoAutoShapeType__msoShapeSnip2DiagRectangle mixins Office$MsoAutoShapeType {}
declare class Office$MsoAutoShapeType__msoShapeSnip2SameRectangle mixins Office$MsoAutoShapeType {}
declare class Office$MsoAutoShapeType__msoShapeSnipRoundRectangle mixins Office$MsoAutoShapeType {}
declare class Office$MsoAutoShapeType__msoShapeSquareTabs mixins Office$MsoAutoShapeType {}
declare class Office$MsoAutoShapeType__msoShapeStripedRightArrow mixins Office$MsoAutoShapeType {}
declare class Office$MsoAutoShapeType__msoShapeSun mixins Office$MsoAutoShapeType {}
declare class Office$MsoAutoShapeType__msoShapeSwooshArrow mixins Office$MsoAutoShapeType {}
declare class Office$MsoAutoShapeType__msoShapeTear mixins Office$MsoAutoShapeType {}
declare class Office$MsoAutoShapeType__msoShapeTrapezoid mixins Office$MsoAutoShapeType {}
declare class Office$MsoAutoShapeType__msoShapeUpArrow mixins Office$MsoAutoShapeType {}
declare class Office$MsoAutoShapeType__msoShapeUpArrowCallout mixins Office$MsoAutoShapeType {}
declare class Office$MsoAutoShapeType__msoShapeUpDownArrow mixins Office$MsoAutoShapeType {}
declare class Office$MsoAutoShapeType__msoShapeUpDownArrowCallout mixins Office$MsoAutoShapeType {}
declare class Office$MsoAutoShapeType__msoShapeUpRibbon mixins Office$MsoAutoShapeType {}
declare class Office$MsoAutoShapeType__msoShapeUTurnArrow mixins Office$MsoAutoShapeType {}
declare class Office$MsoAutoShapeType__msoShapeVerticalScroll mixins Office$MsoAutoShapeType {}
declare class Office$MsoAutoShapeType__msoShapeWave mixins Office$MsoAutoShapeType {}


declare  class Office$MsoAutoSize {
  constructor(...args: empty): mixed;
static +msoAutoSizeMixed: Class<Office$MsoAutoSize__msoAutoSizeMixed> & Office$MsoAutoSize__msoAutoSizeMixed & -2;// -2
static +msoAutoSizeNone: Class<Office$MsoAutoSize__msoAutoSizeNone> & Office$MsoAutoSize__msoAutoSizeNone & 0;// 0
static +msoAutoSizeShapeToFitText: Class<Office$MsoAutoSize__msoAutoSizeShapeToFitText> & Office$MsoAutoSize__msoAutoSizeShapeToFitText & 1;// 1
static +msoAutoSizeTextToFitShape: Class<Office$MsoAutoSize__msoAutoSizeTextToFitShape> & Office$MsoAutoSize__msoAutoSizeTextToFitShape & 2;// 2

}

declare class Office$MsoAutoSize__msoAutoSizeMixed mixins Office$MsoAutoSize {}
declare class Office$MsoAutoSize__msoAutoSizeNone mixins Office$MsoAutoSize {}
declare class Office$MsoAutoSize__msoAutoSizeShapeToFitText mixins Office$MsoAutoSize {}
declare class Office$MsoAutoSize__msoAutoSizeTextToFitShape mixins Office$MsoAutoSize {}


declare  class Office$MsoBackgroundStyleIndex {
  constructor(...args: empty): mixed;
static +msoBackgroundStyleMixed: Class<Office$MsoBackgroundStyleIndex__msoBackgroundStyleMixed> & Office$MsoBackgroundStyleIndex__msoBackgroundStyleMixed & -2;// -2
static +msoBackgroundStyleNotAPreset: Class<Office$MsoBackgroundStyleIndex__msoBackgroundStyleNotAPreset> & Office$MsoBackgroundStyleIndex__msoBackgroundStyleNotAPreset & 0;// 0
static +msoBackgroundStylePreset1: Class<Office$MsoBackgroundStyleIndex__msoBackgroundStylePreset1> & Office$MsoBackgroundStyleIndex__msoBackgroundStylePreset1 & 1;// 1
static +msoBackgroundStylePreset10: Class<Office$MsoBackgroundStyleIndex__msoBackgroundStylePreset10> & Office$MsoBackgroundStyleIndex__msoBackgroundStylePreset10 & 10;// 10
static +msoBackgroundStylePreset11: Class<Office$MsoBackgroundStyleIndex__msoBackgroundStylePreset11> & Office$MsoBackgroundStyleIndex__msoBackgroundStylePreset11 & 11;// 11
static +msoBackgroundStylePreset12: Class<Office$MsoBackgroundStyleIndex__msoBackgroundStylePreset12> & Office$MsoBackgroundStyleIndex__msoBackgroundStylePreset12 & 12;// 12
static +msoBackgroundStylePreset2: Class<Office$MsoBackgroundStyleIndex__msoBackgroundStylePreset2> & Office$MsoBackgroundStyleIndex__msoBackgroundStylePreset2 & 2;// 2
static +msoBackgroundStylePreset3: Class<Office$MsoBackgroundStyleIndex__msoBackgroundStylePreset3> & Office$MsoBackgroundStyleIndex__msoBackgroundStylePreset3 & 3;// 3
static +msoBackgroundStylePreset4: Class<Office$MsoBackgroundStyleIndex__msoBackgroundStylePreset4> & Office$MsoBackgroundStyleIndex__msoBackgroundStylePreset4 & 4;// 4
static +msoBackgroundStylePreset5: Class<Office$MsoBackgroundStyleIndex__msoBackgroundStylePreset5> & Office$MsoBackgroundStyleIndex__msoBackgroundStylePreset5 & 5;// 5
static +msoBackgroundStylePreset6: Class<Office$MsoBackgroundStyleIndex__msoBackgroundStylePreset6> & Office$MsoBackgroundStyleIndex__msoBackgroundStylePreset6 & 6;// 6
static +msoBackgroundStylePreset7: Class<Office$MsoBackgroundStyleIndex__msoBackgroundStylePreset7> & Office$MsoBackgroundStyleIndex__msoBackgroundStylePreset7 & 7;// 7
static +msoBackgroundStylePreset8: Class<Office$MsoBackgroundStyleIndex__msoBackgroundStylePreset8> & Office$MsoBackgroundStyleIndex__msoBackgroundStylePreset8 & 8;// 8
static +msoBackgroundStylePreset9: Class<Office$MsoBackgroundStyleIndex__msoBackgroundStylePreset9> & Office$MsoBackgroundStyleIndex__msoBackgroundStylePreset9 & 9;// 9

}

declare class Office$MsoBackgroundStyleIndex__msoBackgroundStyleMixed mixins Office$MsoBackgroundStyleIndex {}
declare class Office$MsoBackgroundStyleIndex__msoBackgroundStyleNotAPreset mixins Office$MsoBackgroundStyleIndex {}
declare class Office$MsoBackgroundStyleIndex__msoBackgroundStylePreset1 mixins Office$MsoBackgroundStyleIndex {}
declare class Office$MsoBackgroundStyleIndex__msoBackgroundStylePreset10 mixins Office$MsoBackgroundStyleIndex {}
declare class Office$MsoBackgroundStyleIndex__msoBackgroundStylePreset11 mixins Office$MsoBackgroundStyleIndex {}
declare class Office$MsoBackgroundStyleIndex__msoBackgroundStylePreset12 mixins Office$MsoBackgroundStyleIndex {}
declare class Office$MsoBackgroundStyleIndex__msoBackgroundStylePreset2 mixins Office$MsoBackgroundStyleIndex {}
declare class Office$MsoBackgroundStyleIndex__msoBackgroundStylePreset3 mixins Office$MsoBackgroundStyleIndex {}
declare class Office$MsoBackgroundStyleIndex__msoBackgroundStylePreset4 mixins Office$MsoBackgroundStyleIndex {}
declare class Office$MsoBackgroundStyleIndex__msoBackgroundStylePreset5 mixins Office$MsoBackgroundStyleIndex {}
declare class Office$MsoBackgroundStyleIndex__msoBackgroundStylePreset6 mixins Office$MsoBackgroundStyleIndex {}
declare class Office$MsoBackgroundStyleIndex__msoBackgroundStylePreset7 mixins Office$MsoBackgroundStyleIndex {}
declare class Office$MsoBackgroundStyleIndex__msoBackgroundStylePreset8 mixins Office$MsoBackgroundStyleIndex {}
declare class Office$MsoBackgroundStyleIndex__msoBackgroundStylePreset9 mixins Office$MsoBackgroundStyleIndex {}


declare  class Office$MsoBalloonButtonType {
  constructor(...args: empty): mixed;
static +msoBalloonButtonAbort: Class<Office$MsoBalloonButtonType__msoBalloonButtonAbort> & Office$MsoBalloonButtonType__msoBalloonButtonAbort & -8;// -8
static +msoBalloonButtonBack: Class<Office$MsoBalloonButtonType__msoBalloonButtonBack> & Office$MsoBalloonButtonType__msoBalloonButtonBack & -5;// -5
static +msoBalloonButtonCancel: Class<Office$MsoBalloonButtonType__msoBalloonButtonCancel> & Office$MsoBalloonButtonType__msoBalloonButtonCancel & -2;// -2
static +msoBalloonButtonClose: Class<Office$MsoBalloonButtonType__msoBalloonButtonClose> & Office$MsoBalloonButtonType__msoBalloonButtonClose & -12;// -12
static +msoBalloonButtonIgnore: Class<Office$MsoBalloonButtonType__msoBalloonButtonIgnore> & Office$MsoBalloonButtonType__msoBalloonButtonIgnore & -9;// -9
static +msoBalloonButtonNext: Class<Office$MsoBalloonButtonType__msoBalloonButtonNext> & Office$MsoBalloonButtonType__msoBalloonButtonNext & -6;// -6
static +msoBalloonButtonNo: Class<Office$MsoBalloonButtonType__msoBalloonButtonNo> & Office$MsoBalloonButtonType__msoBalloonButtonNo & -4;// -4
static +msoBalloonButtonNull: Class<Office$MsoBalloonButtonType__msoBalloonButtonNull> & Office$MsoBalloonButtonType__msoBalloonButtonNull & 0;// 0
static +msoBalloonButtonOK: Class<Office$MsoBalloonButtonType__msoBalloonButtonOK> & Office$MsoBalloonButtonType__msoBalloonButtonOK & -1;// -1
static +msoBalloonButtonOptions: Class<Office$MsoBalloonButtonType__msoBalloonButtonOptions> & Office$MsoBalloonButtonType__msoBalloonButtonOptions & -14;// -14
static +msoBalloonButtonRetry: Class<Office$MsoBalloonButtonType__msoBalloonButtonRetry> & Office$MsoBalloonButtonType__msoBalloonButtonRetry & -7;// -7
static +msoBalloonButtonSearch: Class<Office$MsoBalloonButtonType__msoBalloonButtonSearch> & Office$MsoBalloonButtonType__msoBalloonButtonSearch & -10;// -10
static +msoBalloonButtonSnooze: Class<Office$MsoBalloonButtonType__msoBalloonButtonSnooze> & Office$MsoBalloonButtonType__msoBalloonButtonSnooze & -11;// -11
static +msoBalloonButtonTips: Class<Office$MsoBalloonButtonType__msoBalloonButtonTips> & Office$MsoBalloonButtonType__msoBalloonButtonTips & -13;// -13
static +msoBalloonButtonYes: Class<Office$MsoBalloonButtonType__msoBalloonButtonYes> & Office$MsoBalloonButtonType__msoBalloonButtonYes & -3;// -3
static +msoBalloonButtonYesToAll: Class<Office$MsoBalloonButtonType__msoBalloonButtonYesToAll> & Office$MsoBalloonButtonType__msoBalloonButtonYesToAll & -15;// -15

}

declare class Office$MsoBalloonButtonType__msoBalloonButtonAbort mixins Office$MsoBalloonButtonType {}
declare class Office$MsoBalloonButtonType__msoBalloonButtonBack mixins Office$MsoBalloonButtonType {}
declare class Office$MsoBalloonButtonType__msoBalloonButtonCancel mixins Office$MsoBalloonButtonType {}
declare class Office$MsoBalloonButtonType__msoBalloonButtonClose mixins Office$MsoBalloonButtonType {}
declare class Office$MsoBalloonButtonType__msoBalloonButtonIgnore mixins Office$MsoBalloonButtonType {}
declare class Office$MsoBalloonButtonType__msoBalloonButtonNext mixins Office$MsoBalloonButtonType {}
declare class Office$MsoBalloonButtonType__msoBalloonButtonNo mixins Office$MsoBalloonButtonType {}
declare class Office$MsoBalloonButtonType__msoBalloonButtonNull mixins Office$MsoBalloonButtonType {}
declare class Office$MsoBalloonButtonType__msoBalloonButtonOK mixins Office$MsoBalloonButtonType {}
declare class Office$MsoBalloonButtonType__msoBalloonButtonOptions mixins Office$MsoBalloonButtonType {}
declare class Office$MsoBalloonButtonType__msoBalloonButtonRetry mixins Office$MsoBalloonButtonType {}
declare class Office$MsoBalloonButtonType__msoBalloonButtonSearch mixins Office$MsoBalloonButtonType {}
declare class Office$MsoBalloonButtonType__msoBalloonButtonSnooze mixins Office$MsoBalloonButtonType {}
declare class Office$MsoBalloonButtonType__msoBalloonButtonTips mixins Office$MsoBalloonButtonType {}
declare class Office$MsoBalloonButtonType__msoBalloonButtonYes mixins Office$MsoBalloonButtonType {}
declare class Office$MsoBalloonButtonType__msoBalloonButtonYesToAll mixins Office$MsoBalloonButtonType {}


declare  class Office$MsoBalloonErrorType {
  constructor(...args: empty): mixed;
static +msoBalloonErrorBadCharacter: Class<Office$MsoBalloonErrorType__msoBalloonErrorBadCharacter> & Office$MsoBalloonErrorType__msoBalloonErrorBadCharacter & 8;// 8
static +msoBalloonErrorBadPictureRef: Class<Office$MsoBalloonErrorType__msoBalloonErrorBadPictureRef> & Office$MsoBalloonErrorType__msoBalloonErrorBadPictureRef & 4;// 4
static +msoBalloonErrorBadReference: Class<Office$MsoBalloonErrorType__msoBalloonErrorBadReference> & Office$MsoBalloonErrorType__msoBalloonErrorBadReference & 5;// 5
static +msoBalloonErrorButtonlessModal: Class<Office$MsoBalloonErrorType__msoBalloonErrorButtonlessModal> & Office$MsoBalloonErrorType__msoBalloonErrorButtonlessModal & 6;// 6
static +msoBalloonErrorButtonModeless: Class<Office$MsoBalloonErrorType__msoBalloonErrorButtonModeless> & Office$MsoBalloonErrorType__msoBalloonErrorButtonModeless & 7;// 7
static +msoBalloonErrorCharNotTopmostForModal: Class<Office$MsoBalloonErrorType__msoBalloonErrorCharNotTopmostForModal> & Office$MsoBalloonErrorType__msoBalloonErrorCharNotTopmostForModal & 10;// 10
static +msoBalloonErrorCOMFailure: Class<Office$MsoBalloonErrorType__msoBalloonErrorCOMFailure> & Office$MsoBalloonErrorType__msoBalloonErrorCOMFailure & 9;// 9
static +msoBalloonErrorNone: Class<Office$MsoBalloonErrorType__msoBalloonErrorNone> & Office$MsoBalloonErrorType__msoBalloonErrorNone & 0;// 0
static +msoBalloonErrorOther: Class<Office$MsoBalloonErrorType__msoBalloonErrorOther> & Office$MsoBalloonErrorType__msoBalloonErrorOther & 1;// 1
static +msoBalloonErrorOutOfMemory: Class<Office$MsoBalloonErrorType__msoBalloonErrorOutOfMemory> & Office$MsoBalloonErrorType__msoBalloonErrorOutOfMemory & 3;// 3
static +msoBalloonErrorTooBig: Class<Office$MsoBalloonErrorType__msoBalloonErrorTooBig> & Office$MsoBalloonErrorType__msoBalloonErrorTooBig & 2;// 2
static +msoBalloonErrorTooManyControls: Class<Office$MsoBalloonErrorType__msoBalloonErrorTooManyControls> & Office$MsoBalloonErrorType__msoBalloonErrorTooManyControls & 11;// 11

}

declare class Office$MsoBalloonErrorType__msoBalloonErrorBadCharacter mixins Office$MsoBalloonErrorType {}
declare class Office$MsoBalloonErrorType__msoBalloonErrorBadPictureRef mixins Office$MsoBalloonErrorType {}
declare class Office$MsoBalloonErrorType__msoBalloonErrorBadReference mixins Office$MsoBalloonErrorType {}
declare class Office$MsoBalloonErrorType__msoBalloonErrorButtonlessModal mixins Office$MsoBalloonErrorType {}
declare class Office$MsoBalloonErrorType__msoBalloonErrorButtonModeless mixins Office$MsoBalloonErrorType {}
declare class Office$MsoBalloonErrorType__msoBalloonErrorCharNotTopmostForModal mixins Office$MsoBalloonErrorType {}
declare class Office$MsoBalloonErrorType__msoBalloonErrorCOMFailure mixins Office$MsoBalloonErrorType {}
declare class Office$MsoBalloonErrorType__msoBalloonErrorNone mixins Office$MsoBalloonErrorType {}
declare class Office$MsoBalloonErrorType__msoBalloonErrorOther mixins Office$MsoBalloonErrorType {}
declare class Office$MsoBalloonErrorType__msoBalloonErrorOutOfMemory mixins Office$MsoBalloonErrorType {}
declare class Office$MsoBalloonErrorType__msoBalloonErrorTooBig mixins Office$MsoBalloonErrorType {}
declare class Office$MsoBalloonErrorType__msoBalloonErrorTooManyControls mixins Office$MsoBalloonErrorType {}


declare  class Office$MsoBalloonType {
  constructor(...args: empty): mixed;
static +msoBalloonTypeBullets: Class<Office$MsoBalloonType__msoBalloonTypeBullets> & Office$MsoBalloonType__msoBalloonTypeBullets & 1;// 1
static +msoBalloonTypeButtons: Class<Office$MsoBalloonType__msoBalloonTypeButtons> & Office$MsoBalloonType__msoBalloonTypeButtons & 0;// 0
static +msoBalloonTypeNumbers: Class<Office$MsoBalloonType__msoBalloonTypeNumbers> & Office$MsoBalloonType__msoBalloonTypeNumbers & 2;// 2

}

declare class Office$MsoBalloonType__msoBalloonTypeBullets mixins Office$MsoBalloonType {}
declare class Office$MsoBalloonType__msoBalloonTypeButtons mixins Office$MsoBalloonType {}
declare class Office$MsoBalloonType__msoBalloonTypeNumbers mixins Office$MsoBalloonType {}


declare  class Office$MsoBarPosition {
  constructor(...args: empty): mixed;
static +msoBarBottom: Class<Office$MsoBarPosition__msoBarBottom> & Office$MsoBarPosition__msoBarBottom & 3;// 3
static +msoBarFloating: Class<Office$MsoBarPosition__msoBarFloating> & Office$MsoBarPosition__msoBarFloating & 4;// 4
static +msoBarLeft: Class<Office$MsoBarPosition__msoBarLeft> & Office$MsoBarPosition__msoBarLeft & 0;// 0
static +msoBarMenuBar: Class<Office$MsoBarPosition__msoBarMenuBar> & Office$MsoBarPosition__msoBarMenuBar & 6;// 6
static +msoBarPopup: Class<Office$MsoBarPosition__msoBarPopup> & Office$MsoBarPosition__msoBarPopup & 5;// 5
static +msoBarRight: Class<Office$MsoBarPosition__msoBarRight> & Office$MsoBarPosition__msoBarRight & 2;// 2
static +msoBarTop: Class<Office$MsoBarPosition__msoBarTop> & Office$MsoBarPosition__msoBarTop & 1;// 1

}

declare class Office$MsoBarPosition__msoBarBottom mixins Office$MsoBarPosition {}
declare class Office$MsoBarPosition__msoBarFloating mixins Office$MsoBarPosition {}
declare class Office$MsoBarPosition__msoBarLeft mixins Office$MsoBarPosition {}
declare class Office$MsoBarPosition__msoBarMenuBar mixins Office$MsoBarPosition {}
declare class Office$MsoBarPosition__msoBarPopup mixins Office$MsoBarPosition {}
declare class Office$MsoBarPosition__msoBarRight mixins Office$MsoBarPosition {}
declare class Office$MsoBarPosition__msoBarTop mixins Office$MsoBarPosition {}


declare  class Office$MsoBarProtection {
  constructor(...args: empty): mixed;
static +msoBarNoChangeDock: Class<Office$MsoBarProtection__msoBarNoChangeDock> & Office$MsoBarProtection__msoBarNoChangeDock & 16;// 16
static +msoBarNoChangeVisible: Class<Office$MsoBarProtection__msoBarNoChangeVisible> & Office$MsoBarProtection__msoBarNoChangeVisible & 8;// 8
static +msoBarNoCustomize: Class<Office$MsoBarProtection__msoBarNoCustomize> & Office$MsoBarProtection__msoBarNoCustomize & 1;// 1
static +msoBarNoHorizontalDock: Class<Office$MsoBarProtection__msoBarNoHorizontalDock> & Office$MsoBarProtection__msoBarNoHorizontalDock & 64;// 64
static +msoBarNoMove: Class<Office$MsoBarProtection__msoBarNoMove> & Office$MsoBarProtection__msoBarNoMove & 4;// 4
static +msoBarNoProtection: Class<Office$MsoBarProtection__msoBarNoProtection> & Office$MsoBarProtection__msoBarNoProtection & 0;// 0
static +msoBarNoResize: Class<Office$MsoBarProtection__msoBarNoResize> & Office$MsoBarProtection__msoBarNoResize & 2;// 2
static +msoBarNoVerticalDock: Class<Office$MsoBarProtection__msoBarNoVerticalDock> & Office$MsoBarProtection__msoBarNoVerticalDock & 32;// 32

}

declare class Office$MsoBarProtection__msoBarNoChangeDock mixins Office$MsoBarProtection {}
declare class Office$MsoBarProtection__msoBarNoChangeVisible mixins Office$MsoBarProtection {}
declare class Office$MsoBarProtection__msoBarNoCustomize mixins Office$MsoBarProtection {}
declare class Office$MsoBarProtection__msoBarNoHorizontalDock mixins Office$MsoBarProtection {}
declare class Office$MsoBarProtection__msoBarNoMove mixins Office$MsoBarProtection {}
declare class Office$MsoBarProtection__msoBarNoProtection mixins Office$MsoBarProtection {}
declare class Office$MsoBarProtection__msoBarNoResize mixins Office$MsoBarProtection {}
declare class Office$MsoBarProtection__msoBarNoVerticalDock mixins Office$MsoBarProtection {}


declare  class Office$MsoBarRow {
  constructor(...args: empty): mixed;
static +msoBarRowFirst: Class<Office$MsoBarRow__msoBarRowFirst> & Office$MsoBarRow__msoBarRowFirst & 0;// 0
static +msoBarRowLast: Class<Office$MsoBarRow__msoBarRowLast> & Office$MsoBarRow__msoBarRowLast & -1;// -1

}

declare class Office$MsoBarRow__msoBarRowFirst mixins Office$MsoBarRow {}
declare class Office$MsoBarRow__msoBarRowLast mixins Office$MsoBarRow {}


declare  class Office$MsoBarType {
  constructor(...args: empty): mixed;
static +msoBarTypeMenuBar: Class<Office$MsoBarType__msoBarTypeMenuBar> & Office$MsoBarType__msoBarTypeMenuBar & 1;// 1
static +msoBarTypeNormal: Class<Office$MsoBarType__msoBarTypeNormal> & Office$MsoBarType__msoBarTypeNormal & 0;// 0
static +msoBarTypePopup: Class<Office$MsoBarType__msoBarTypePopup> & Office$MsoBarType__msoBarTypePopup & 2;// 2

}

declare class Office$MsoBarType__msoBarTypeMenuBar mixins Office$MsoBarType {}
declare class Office$MsoBarType__msoBarTypeNormal mixins Office$MsoBarType {}
declare class Office$MsoBarType__msoBarTypePopup mixins Office$MsoBarType {}


declare  class Office$MsoBaselineAlignment {
  constructor(...args: empty): mixed;
static +msoBaselineAlignAuto: Class<Office$MsoBaselineAlignment__msoBaselineAlignAuto> & Office$MsoBaselineAlignment__msoBaselineAlignAuto & 5;// 5
static +msoBaselineAlignBaseline: Class<Office$MsoBaselineAlignment__msoBaselineAlignBaseline> & Office$MsoBaselineAlignment__msoBaselineAlignBaseline & 1;// 1
static +msoBaselineAlignCenter: Class<Office$MsoBaselineAlignment__msoBaselineAlignCenter> & Office$MsoBaselineAlignment__msoBaselineAlignCenter & 3;// 3
static +msoBaselineAlignFarEast50: Class<Office$MsoBaselineAlignment__msoBaselineAlignFarEast50> & Office$MsoBaselineAlignment__msoBaselineAlignFarEast50 & 4;// 4
static +msoBaselineAlignMixed: Class<Office$MsoBaselineAlignment__msoBaselineAlignMixed> & Office$MsoBaselineAlignment__msoBaselineAlignMixed & -2;// -2
static +msoBaselineAlignTop: Class<Office$MsoBaselineAlignment__msoBaselineAlignTop> & Office$MsoBaselineAlignment__msoBaselineAlignTop & 2;// 2

}

declare class Office$MsoBaselineAlignment__msoBaselineAlignAuto mixins Office$MsoBaselineAlignment {}
declare class Office$MsoBaselineAlignment__msoBaselineAlignBaseline mixins Office$MsoBaselineAlignment {}
declare class Office$MsoBaselineAlignment__msoBaselineAlignCenter mixins Office$MsoBaselineAlignment {}
declare class Office$MsoBaselineAlignment__msoBaselineAlignFarEast50 mixins Office$MsoBaselineAlignment {}
declare class Office$MsoBaselineAlignment__msoBaselineAlignMixed mixins Office$MsoBaselineAlignment {}
declare class Office$MsoBaselineAlignment__msoBaselineAlignTop mixins Office$MsoBaselineAlignment {}


declare  class Office$MsoBevelType {
  constructor(...args: empty): mixed;
static +msoBevelAngle: Class<Office$MsoBevelType__msoBevelAngle> & Office$MsoBevelType__msoBevelAngle & 6;// 6
static +msoBevelArtDeco: Class<Office$MsoBevelType__msoBevelArtDeco> & Office$MsoBevelType__msoBevelArtDeco & 13;// 13
static +msoBevelCircle: Class<Office$MsoBevelType__msoBevelCircle> & Office$MsoBevelType__msoBevelCircle & 3;// 3
static +msoBevelConvex: Class<Office$MsoBevelType__msoBevelConvex> & Office$MsoBevelType__msoBevelConvex & 8;// 8
static +msoBevelCoolSlant: Class<Office$MsoBevelType__msoBevelCoolSlant> & Office$MsoBevelType__msoBevelCoolSlant & 9;// 9
static +msoBevelCross: Class<Office$MsoBevelType__msoBevelCross> & Office$MsoBevelType__msoBevelCross & 5;// 5
static +msoBevelDivot: Class<Office$MsoBevelType__msoBevelDivot> & Office$MsoBevelType__msoBevelDivot & 10;// 10
static +msoBevelHardEdge: Class<Office$MsoBevelType__msoBevelHardEdge> & Office$MsoBevelType__msoBevelHardEdge & 12;// 12
static +msoBevelNone: Class<Office$MsoBevelType__msoBevelNone> & Office$MsoBevelType__msoBevelNone & 1;// 1
static +msoBevelRelaxedInset: Class<Office$MsoBevelType__msoBevelRelaxedInset> & Office$MsoBevelType__msoBevelRelaxedInset & 2;// 2
static +msoBevelRiblet: Class<Office$MsoBevelType__msoBevelRiblet> & Office$MsoBevelType__msoBevelRiblet & 11;// 11
static +msoBevelSlope: Class<Office$MsoBevelType__msoBevelSlope> & Office$MsoBevelType__msoBevelSlope & 4;// 4
static +msoBevelSoftRound: Class<Office$MsoBevelType__msoBevelSoftRound> & Office$MsoBevelType__msoBevelSoftRound & 7;// 7
static +msoBevelTypeMixed: Class<Office$MsoBevelType__msoBevelTypeMixed> & Office$MsoBevelType__msoBevelTypeMixed & -2;// -2

}

declare class Office$MsoBevelType__msoBevelAngle mixins Office$MsoBevelType {}
declare class Office$MsoBevelType__msoBevelArtDeco mixins Office$MsoBevelType {}
declare class Office$MsoBevelType__msoBevelCircle mixins Office$MsoBevelType {}
declare class Office$MsoBevelType__msoBevelConvex mixins Office$MsoBevelType {}
declare class Office$MsoBevelType__msoBevelCoolSlant mixins Office$MsoBevelType {}
declare class Office$MsoBevelType__msoBevelCross mixins Office$MsoBevelType {}
declare class Office$MsoBevelType__msoBevelDivot mixins Office$MsoBevelType {}
declare class Office$MsoBevelType__msoBevelHardEdge mixins Office$MsoBevelType {}
declare class Office$MsoBevelType__msoBevelNone mixins Office$MsoBevelType {}
declare class Office$MsoBevelType__msoBevelRelaxedInset mixins Office$MsoBevelType {}
declare class Office$MsoBevelType__msoBevelRiblet mixins Office$MsoBevelType {}
declare class Office$MsoBevelType__msoBevelSlope mixins Office$MsoBevelType {}
declare class Office$MsoBevelType__msoBevelSoftRound mixins Office$MsoBevelType {}
declare class Office$MsoBevelType__msoBevelTypeMixed mixins Office$MsoBevelType {}


declare  class Office$MsoBlackWhiteMode {
  constructor(...args: empty): mixed;
static +msoBlackWhiteAutomatic: Class<Office$MsoBlackWhiteMode__msoBlackWhiteAutomatic> & Office$MsoBlackWhiteMode__msoBlackWhiteAutomatic & 1;// 1
static +msoBlackWhiteBlack: Class<Office$MsoBlackWhiteMode__msoBlackWhiteBlack> & Office$MsoBlackWhiteMode__msoBlackWhiteBlack & 8;// 8
static +msoBlackWhiteBlackTextAndLine: Class<Office$MsoBlackWhiteMode__msoBlackWhiteBlackTextAndLine> & Office$MsoBlackWhiteMode__msoBlackWhiteBlackTextAndLine & 6;// 6
static +msoBlackWhiteDontShow: Class<Office$MsoBlackWhiteMode__msoBlackWhiteDontShow> & Office$MsoBlackWhiteMode__msoBlackWhiteDontShow & 10;// 10
static +msoBlackWhiteGrayOutline: Class<Office$MsoBlackWhiteMode__msoBlackWhiteGrayOutline> & Office$MsoBlackWhiteMode__msoBlackWhiteGrayOutline & 5;// 5
static +msoBlackWhiteGrayScale: Class<Office$MsoBlackWhiteMode__msoBlackWhiteGrayScale> & Office$MsoBlackWhiteMode__msoBlackWhiteGrayScale & 2;// 2
static +msoBlackWhiteHighContrast: Class<Office$MsoBlackWhiteMode__msoBlackWhiteHighContrast> & Office$MsoBlackWhiteMode__msoBlackWhiteHighContrast & 7;// 7
static +msoBlackWhiteInverseGrayScale: Class<Office$MsoBlackWhiteMode__msoBlackWhiteInverseGrayScale> & Office$MsoBlackWhiteMode__msoBlackWhiteInverseGrayScale & 4;// 4
static +msoBlackWhiteLightGrayScale: Class<Office$MsoBlackWhiteMode__msoBlackWhiteLightGrayScale> & Office$MsoBlackWhiteMode__msoBlackWhiteLightGrayScale & 3;// 3
static +msoBlackWhiteMixed: Class<Office$MsoBlackWhiteMode__msoBlackWhiteMixed> & Office$MsoBlackWhiteMode__msoBlackWhiteMixed & -2;// -2
static +msoBlackWhiteWhite: Class<Office$MsoBlackWhiteMode__msoBlackWhiteWhite> & Office$MsoBlackWhiteMode__msoBlackWhiteWhite & 9;// 9

}

declare class Office$MsoBlackWhiteMode__msoBlackWhiteAutomatic mixins Office$MsoBlackWhiteMode {}
declare class Office$MsoBlackWhiteMode__msoBlackWhiteBlack mixins Office$MsoBlackWhiteMode {}
declare class Office$MsoBlackWhiteMode__msoBlackWhiteBlackTextAndLine mixins Office$MsoBlackWhiteMode {}
declare class Office$MsoBlackWhiteMode__msoBlackWhiteDontShow mixins Office$MsoBlackWhiteMode {}
declare class Office$MsoBlackWhiteMode__msoBlackWhiteGrayOutline mixins Office$MsoBlackWhiteMode {}
declare class Office$MsoBlackWhiteMode__msoBlackWhiteGrayScale mixins Office$MsoBlackWhiteMode {}
declare class Office$MsoBlackWhiteMode__msoBlackWhiteHighContrast mixins Office$MsoBlackWhiteMode {}
declare class Office$MsoBlackWhiteMode__msoBlackWhiteInverseGrayScale mixins Office$MsoBlackWhiteMode {}
declare class Office$MsoBlackWhiteMode__msoBlackWhiteLightGrayScale mixins Office$MsoBlackWhiteMode {}
declare class Office$MsoBlackWhiteMode__msoBlackWhiteMixed mixins Office$MsoBlackWhiteMode {}
declare class Office$MsoBlackWhiteMode__msoBlackWhiteWhite mixins Office$MsoBlackWhiteMode {}


declare  class Office$MsoBlogCategorySupport {
  constructor(...args: empty): mixed;
static +msoBlogMultipleCategories: Class<Office$MsoBlogCategorySupport__msoBlogMultipleCategories> & Office$MsoBlogCategorySupport__msoBlogMultipleCategories & 2;// 2
static +msoBlogNoCategories: Class<Office$MsoBlogCategorySupport__msoBlogNoCategories> & Office$MsoBlogCategorySupport__msoBlogNoCategories & 0;// 0
static +msoBlogOneCategory: Class<Office$MsoBlogCategorySupport__msoBlogOneCategory> & Office$MsoBlogCategorySupport__msoBlogOneCategory & 1;// 1

}

declare class Office$MsoBlogCategorySupport__msoBlogMultipleCategories mixins Office$MsoBlogCategorySupport {}
declare class Office$MsoBlogCategorySupport__msoBlogNoCategories mixins Office$MsoBlogCategorySupport {}
declare class Office$MsoBlogCategorySupport__msoBlogOneCategory mixins Office$MsoBlogCategorySupport {}


declare  class Office$MsoBlogImageType {
  constructor(...args: empty): mixed;
static +msoblogImageTypeGIF: Class<Office$MsoBlogImageType__msoblogImageTypeGIF> & Office$MsoBlogImageType__msoblogImageTypeGIF & 2;// 2
static +msoblogImageTypeJPEG: Class<Office$MsoBlogImageType__msoblogImageTypeJPEG> & Office$MsoBlogImageType__msoblogImageTypeJPEG & 1;// 1
static +msoblogImageTypePNG: Class<Office$MsoBlogImageType__msoblogImageTypePNG> & Office$MsoBlogImageType__msoblogImageTypePNG & 3;// 3

}

declare class Office$MsoBlogImageType__msoblogImageTypeGIF mixins Office$MsoBlogImageType {}
declare class Office$MsoBlogImageType__msoblogImageTypeJPEG mixins Office$MsoBlogImageType {}
declare class Office$MsoBlogImageType__msoblogImageTypePNG mixins Office$MsoBlogImageType {}


declare  class Office$MsoBroadcastCapabilities {
  constructor(...args: empty): mixed;
static +BroadcastCapFileSizeLimited: Class<Office$MsoBroadcastCapabilities__BroadcastCapFileSizeLimited> & Office$MsoBroadcastCapabilities__BroadcastCapFileSizeLimited & 1;// 1
static +BroadcastCapSupportsMeetingNotes: Class<Office$MsoBroadcastCapabilities__BroadcastCapSupportsMeetingNotes> & Office$MsoBroadcastCapabilities__BroadcastCapSupportsMeetingNotes & 2;// 2
static +BroadcastCapSupportsUpdateDoc: Class<Office$MsoBroadcastCapabilities__BroadcastCapSupportsUpdateDoc> & Office$MsoBroadcastCapabilities__BroadcastCapSupportsUpdateDoc & 4;// 4

}

declare class Office$MsoBroadcastCapabilities__BroadcastCapFileSizeLimited mixins Office$MsoBroadcastCapabilities {}
declare class Office$MsoBroadcastCapabilities__BroadcastCapSupportsMeetingNotes mixins Office$MsoBroadcastCapabilities {}
declare class Office$MsoBroadcastCapabilities__BroadcastCapSupportsUpdateDoc mixins Office$MsoBroadcastCapabilities {}


declare  class Office$MsoBroadcastState {
  constructor(...args: empty): mixed;
static +BroadcastPaused: Class<Office$MsoBroadcastState__BroadcastPaused> & Office$MsoBroadcastState__BroadcastPaused & 2;// 2
static +BroadcastStarted: Class<Office$MsoBroadcastState__BroadcastStarted> & Office$MsoBroadcastState__BroadcastStarted & 1;// 1
static +NoBroadcast: Class<Office$MsoBroadcastState__NoBroadcast> & Office$MsoBroadcastState__NoBroadcast & 0;// 0

}

declare class Office$MsoBroadcastState__BroadcastPaused mixins Office$MsoBroadcastState {}
declare class Office$MsoBroadcastState__BroadcastStarted mixins Office$MsoBroadcastState {}
declare class Office$MsoBroadcastState__NoBroadcast mixins Office$MsoBroadcastState {}


declare  class Office$MsoBulletType {
  constructor(...args: empty): mixed;
static +msoBulletMixed: Class<Office$MsoBulletType__msoBulletMixed> & Office$MsoBulletType__msoBulletMixed & -2;// -2
static +msoBulletNone: Class<Office$MsoBulletType__msoBulletNone> & Office$MsoBulletType__msoBulletNone & 0;// 0
static +msoBulletNumbered: Class<Office$MsoBulletType__msoBulletNumbered> & Office$MsoBulletType__msoBulletNumbered & 2;// 2
static +msoBulletPicture: Class<Office$MsoBulletType__msoBulletPicture> & Office$MsoBulletType__msoBulletPicture & 3;// 3
static +msoBulletUnnumbered: Class<Office$MsoBulletType__msoBulletUnnumbered> & Office$MsoBulletType__msoBulletUnnumbered & 1;// 1

}

declare class Office$MsoBulletType__msoBulletMixed mixins Office$MsoBulletType {}
declare class Office$MsoBulletType__msoBulletNone mixins Office$MsoBulletType {}
declare class Office$MsoBulletType__msoBulletNumbered mixins Office$MsoBulletType {}
declare class Office$MsoBulletType__msoBulletPicture mixins Office$MsoBulletType {}
declare class Office$MsoBulletType__msoBulletUnnumbered mixins Office$MsoBulletType {}


declare  class Office$MsoButtonSetType {
  constructor(...args: empty): mixed;
static +msoButtonSetAbortRetryIgnore: Class<Office$MsoButtonSetType__msoButtonSetAbortRetryIgnore> & Office$MsoButtonSetType__msoButtonSetAbortRetryIgnore & 10;// 10
static +msoButtonSetBackClose: Class<Office$MsoButtonSetType__msoButtonSetBackClose> & Office$MsoButtonSetType__msoButtonSetBackClose & 6;// 6
static +msoButtonSetBackNextClose: Class<Office$MsoButtonSetType__msoButtonSetBackNextClose> & Office$MsoButtonSetType__msoButtonSetBackNextClose & 8;// 8
static +msoButtonSetBackNextSnooze: Class<Office$MsoButtonSetType__msoButtonSetBackNextSnooze> & Office$MsoButtonSetType__msoButtonSetBackNextSnooze & 12;// 12
static +msoButtonSetCancel: Class<Office$MsoButtonSetType__msoButtonSetCancel> & Office$MsoButtonSetType__msoButtonSetCancel & 2;// 2
static +msoButtonSetNextClose: Class<Office$MsoButtonSetType__msoButtonSetNextClose> & Office$MsoButtonSetType__msoButtonSetNextClose & 7;// 7
static +msoButtonSetNone: Class<Office$MsoButtonSetType__msoButtonSetNone> & Office$MsoButtonSetType__msoButtonSetNone & 0;// 0
static +msoButtonSetOK: Class<Office$MsoButtonSetType__msoButtonSetOK> & Office$MsoButtonSetType__msoButtonSetOK & 1;// 1
static +msoButtonSetOkCancel: Class<Office$MsoButtonSetType__msoButtonSetOkCancel> & Office$MsoButtonSetType__msoButtonSetOkCancel & 3;// 3
static +msoButtonSetRetryCancel: Class<Office$MsoButtonSetType__msoButtonSetRetryCancel> & Office$MsoButtonSetType__msoButtonSetRetryCancel & 9;// 9
static +msoButtonSetSearchClose: Class<Office$MsoButtonSetType__msoButtonSetSearchClose> & Office$MsoButtonSetType__msoButtonSetSearchClose & 11;// 11
static +msoButtonSetTipsOptionsClose: Class<Office$MsoButtonSetType__msoButtonSetTipsOptionsClose> & Office$MsoButtonSetType__msoButtonSetTipsOptionsClose & 13;// 13
static +msoButtonSetYesAllNoCancel: Class<Office$MsoButtonSetType__msoButtonSetYesAllNoCancel> & Office$MsoButtonSetType__msoButtonSetYesAllNoCancel & 14;// 14
static +msoButtonSetYesNo: Class<Office$MsoButtonSetType__msoButtonSetYesNo> & Office$MsoButtonSetType__msoButtonSetYesNo & 4;// 4
static +msoButtonSetYesNoCancel: Class<Office$MsoButtonSetType__msoButtonSetYesNoCancel> & Office$MsoButtonSetType__msoButtonSetYesNoCancel & 5;// 5

}

declare class Office$MsoButtonSetType__msoButtonSetAbortRetryIgnore mixins Office$MsoButtonSetType {}
declare class Office$MsoButtonSetType__msoButtonSetBackClose mixins Office$MsoButtonSetType {}
declare class Office$MsoButtonSetType__msoButtonSetBackNextClose mixins Office$MsoButtonSetType {}
declare class Office$MsoButtonSetType__msoButtonSetBackNextSnooze mixins Office$MsoButtonSetType {}
declare class Office$MsoButtonSetType__msoButtonSetCancel mixins Office$MsoButtonSetType {}
declare class Office$MsoButtonSetType__msoButtonSetNextClose mixins Office$MsoButtonSetType {}
declare class Office$MsoButtonSetType__msoButtonSetNone mixins Office$MsoButtonSetType {}
declare class Office$MsoButtonSetType__msoButtonSetOK mixins Office$MsoButtonSetType {}
declare class Office$MsoButtonSetType__msoButtonSetOkCancel mixins Office$MsoButtonSetType {}
declare class Office$MsoButtonSetType__msoButtonSetRetryCancel mixins Office$MsoButtonSetType {}
declare class Office$MsoButtonSetType__msoButtonSetSearchClose mixins Office$MsoButtonSetType {}
declare class Office$MsoButtonSetType__msoButtonSetTipsOptionsClose mixins Office$MsoButtonSetType {}
declare class Office$MsoButtonSetType__msoButtonSetYesAllNoCancel mixins Office$MsoButtonSetType {}
declare class Office$MsoButtonSetType__msoButtonSetYesNo mixins Office$MsoButtonSetType {}
declare class Office$MsoButtonSetType__msoButtonSetYesNoCancel mixins Office$MsoButtonSetType {}


declare  class Office$MsoButtonState {
  constructor(...args: empty): mixed;
static +msoButtonDown: Class<Office$MsoButtonState__msoButtonDown> & Office$MsoButtonState__msoButtonDown & -1;// -1
static +msoButtonMixed: Class<Office$MsoButtonState__msoButtonMixed> & Office$MsoButtonState__msoButtonMixed & 2;// 2
static +msoButtonUp: Class<Office$MsoButtonState__msoButtonUp> & Office$MsoButtonState__msoButtonUp & 0;// 0

}

declare class Office$MsoButtonState__msoButtonDown mixins Office$MsoButtonState {}
declare class Office$MsoButtonState__msoButtonMixed mixins Office$MsoButtonState {}
declare class Office$MsoButtonState__msoButtonUp mixins Office$MsoButtonState {}


declare  class Office$MsoButtonStyle {
  constructor(...args: empty): mixed;
static +msoButtonAutomatic: Class<Office$MsoButtonStyle__msoButtonAutomatic> & Office$MsoButtonStyle__msoButtonAutomatic & 0;// 0
static +msoButtonCaption: Class<Office$MsoButtonStyle__msoButtonCaption> & Office$MsoButtonStyle__msoButtonCaption & 2;// 2
static +msoButtonIcon: Class<Office$MsoButtonStyle__msoButtonIcon> & Office$MsoButtonStyle__msoButtonIcon & 1;// 1
static +msoButtonIconAndCaption: Class<Office$MsoButtonStyle__msoButtonIconAndCaption> & Office$MsoButtonStyle__msoButtonIconAndCaption & 3;// 3
static +msoButtonIconAndCaptionBelow: Class<Office$MsoButtonStyle__msoButtonIconAndCaptionBelow> & Office$MsoButtonStyle__msoButtonIconAndCaptionBelow & 11;// 11
static +msoButtonIconAndWrapCaption: Class<Office$MsoButtonStyle__msoButtonIconAndWrapCaption> & Office$MsoButtonStyle__msoButtonIconAndWrapCaption & 7;// 7
static +msoButtonIconAndWrapCaptionBelow: Class<Office$MsoButtonStyle__msoButtonIconAndWrapCaptionBelow> & Office$MsoButtonStyle__msoButtonIconAndWrapCaptionBelow & 15;// 15
static +msoButtonWrapCaption: Class<Office$MsoButtonStyle__msoButtonWrapCaption> & Office$MsoButtonStyle__msoButtonWrapCaption & 14;// 14

}

declare class Office$MsoButtonStyle__msoButtonAutomatic mixins Office$MsoButtonStyle {}
declare class Office$MsoButtonStyle__msoButtonCaption mixins Office$MsoButtonStyle {}
declare class Office$MsoButtonStyle__msoButtonIcon mixins Office$MsoButtonStyle {}
declare class Office$MsoButtonStyle__msoButtonIconAndCaption mixins Office$MsoButtonStyle {}
declare class Office$MsoButtonStyle__msoButtonIconAndCaptionBelow mixins Office$MsoButtonStyle {}
declare class Office$MsoButtonStyle__msoButtonIconAndWrapCaption mixins Office$MsoButtonStyle {}
declare class Office$MsoButtonStyle__msoButtonIconAndWrapCaptionBelow mixins Office$MsoButtonStyle {}
declare class Office$MsoButtonStyle__msoButtonWrapCaption mixins Office$MsoButtonStyle {}


declare  class Office$MsoButtonStyleHidden {
  constructor(...args: empty): mixed;
static +msoButtonTextBelow: Class<Office$MsoButtonStyleHidden__msoButtonTextBelow> & Office$MsoButtonStyleHidden__msoButtonTextBelow & 8;// 8
static +msoButtonWrapText: Class<Office$MsoButtonStyleHidden__msoButtonWrapText> & Office$MsoButtonStyleHidden__msoButtonWrapText & 4;// 4

}

declare class Office$MsoButtonStyleHidden__msoButtonTextBelow mixins Office$MsoButtonStyleHidden {}
declare class Office$MsoButtonStyleHidden__msoButtonWrapText mixins Office$MsoButtonStyleHidden {}


declare  class Office$MsoCalloutAngleType {
  constructor(...args: empty): mixed;
static +msoCalloutAngle30: Class<Office$MsoCalloutAngleType__msoCalloutAngle30> & Office$MsoCalloutAngleType__msoCalloutAngle30 & 2;// 2
static +msoCalloutAngle45: Class<Office$MsoCalloutAngleType__msoCalloutAngle45> & Office$MsoCalloutAngleType__msoCalloutAngle45 & 3;// 3
static +msoCalloutAngle60: Class<Office$MsoCalloutAngleType__msoCalloutAngle60> & Office$MsoCalloutAngleType__msoCalloutAngle60 & 4;// 4
static +msoCalloutAngle90: Class<Office$MsoCalloutAngleType__msoCalloutAngle90> & Office$MsoCalloutAngleType__msoCalloutAngle90 & 5;// 5
static +msoCalloutAngleAutomatic: Class<Office$MsoCalloutAngleType__msoCalloutAngleAutomatic> & Office$MsoCalloutAngleType__msoCalloutAngleAutomatic & 1;// 1
static +msoCalloutAngleMixed: Class<Office$MsoCalloutAngleType__msoCalloutAngleMixed> & Office$MsoCalloutAngleType__msoCalloutAngleMixed & -2;// -2

}

declare class Office$MsoCalloutAngleType__msoCalloutAngle30 mixins Office$MsoCalloutAngleType {}
declare class Office$MsoCalloutAngleType__msoCalloutAngle45 mixins Office$MsoCalloutAngleType {}
declare class Office$MsoCalloutAngleType__msoCalloutAngle60 mixins Office$MsoCalloutAngleType {}
declare class Office$MsoCalloutAngleType__msoCalloutAngle90 mixins Office$MsoCalloutAngleType {}
declare class Office$MsoCalloutAngleType__msoCalloutAngleAutomatic mixins Office$MsoCalloutAngleType {}
declare class Office$MsoCalloutAngleType__msoCalloutAngleMixed mixins Office$MsoCalloutAngleType {}


declare  class Office$MsoCalloutDropType {
  constructor(...args: empty): mixed;
static +msoCalloutDropBottom: Class<Office$MsoCalloutDropType__msoCalloutDropBottom> & Office$MsoCalloutDropType__msoCalloutDropBottom & 4;// 4
static +msoCalloutDropCenter: Class<Office$MsoCalloutDropType__msoCalloutDropCenter> & Office$MsoCalloutDropType__msoCalloutDropCenter & 3;// 3
static +msoCalloutDropCustom: Class<Office$MsoCalloutDropType__msoCalloutDropCustom> & Office$MsoCalloutDropType__msoCalloutDropCustom & 1;// 1
static +msoCalloutDropMixed: Class<Office$MsoCalloutDropType__msoCalloutDropMixed> & Office$MsoCalloutDropType__msoCalloutDropMixed & -2;// -2
static +msoCalloutDropTop: Class<Office$MsoCalloutDropType__msoCalloutDropTop> & Office$MsoCalloutDropType__msoCalloutDropTop & 2;// 2

}

declare class Office$MsoCalloutDropType__msoCalloutDropBottom mixins Office$MsoCalloutDropType {}
declare class Office$MsoCalloutDropType__msoCalloutDropCenter mixins Office$MsoCalloutDropType {}
declare class Office$MsoCalloutDropType__msoCalloutDropCustom mixins Office$MsoCalloutDropType {}
declare class Office$MsoCalloutDropType__msoCalloutDropMixed mixins Office$MsoCalloutDropType {}
declare class Office$MsoCalloutDropType__msoCalloutDropTop mixins Office$MsoCalloutDropType {}


declare  class Office$MsoCalloutType {
  constructor(...args: empty): mixed;
static +msoCalloutFour: Class<Office$MsoCalloutType__msoCalloutFour> & Office$MsoCalloutType__msoCalloutFour & 4;// 4
static +msoCalloutMixed: Class<Office$MsoCalloutType__msoCalloutMixed> & Office$MsoCalloutType__msoCalloutMixed & -2;// -2
static +msoCalloutOne: Class<Office$MsoCalloutType__msoCalloutOne> & Office$MsoCalloutType__msoCalloutOne & 1;// 1
static +msoCalloutThree: Class<Office$MsoCalloutType__msoCalloutThree> & Office$MsoCalloutType__msoCalloutThree & 3;// 3
static +msoCalloutTwo: Class<Office$MsoCalloutType__msoCalloutTwo> & Office$MsoCalloutType__msoCalloutTwo & 2;// 2

}

declare class Office$MsoCalloutType__msoCalloutFour mixins Office$MsoCalloutType {}
declare class Office$MsoCalloutType__msoCalloutMixed mixins Office$MsoCalloutType {}
declare class Office$MsoCalloutType__msoCalloutOne mixins Office$MsoCalloutType {}
declare class Office$MsoCalloutType__msoCalloutThree mixins Office$MsoCalloutType {}
declare class Office$MsoCalloutType__msoCalloutTwo mixins Office$MsoCalloutType {}


declare  class Office$MsoCharacterSet {
  constructor(...args: empty): mixed;
static +msoCharacterSetArabic: Class<Office$MsoCharacterSet__msoCharacterSetArabic> & Office$MsoCharacterSet__msoCharacterSetArabic & 1;// 1
static +msoCharacterSetCyrillic: Class<Office$MsoCharacterSet__msoCharacterSetCyrillic> & Office$MsoCharacterSet__msoCharacterSetCyrillic & 2;// 2
static +msoCharacterSetEnglishWesternEuropeanOtherLatinScript: Class<Office$MsoCharacterSet__msoCharacterSetEnglishWesternEuropeanOtherLatinScript> & Office$MsoCharacterSet__msoCharacterSetEnglishWesternEuropeanOtherLatinScript & 3;// 3
static +msoCharacterSetGreek: Class<Office$MsoCharacterSet__msoCharacterSetGreek> & Office$MsoCharacterSet__msoCharacterSetGreek & 4;// 4
static +msoCharacterSetHebrew: Class<Office$MsoCharacterSet__msoCharacterSetHebrew> & Office$MsoCharacterSet__msoCharacterSetHebrew & 5;// 5
static +msoCharacterSetJapanese: Class<Office$MsoCharacterSet__msoCharacterSetJapanese> & Office$MsoCharacterSet__msoCharacterSetJapanese & 6;// 6
static +msoCharacterSetKorean: Class<Office$MsoCharacterSet__msoCharacterSetKorean> & Office$MsoCharacterSet__msoCharacterSetKorean & 7;// 7
static +msoCharacterSetMultilingualUnicode: Class<Office$MsoCharacterSet__msoCharacterSetMultilingualUnicode> & Office$MsoCharacterSet__msoCharacterSetMultilingualUnicode & 8;// 8
static +msoCharacterSetSimplifiedChinese: Class<Office$MsoCharacterSet__msoCharacterSetSimplifiedChinese> & Office$MsoCharacterSet__msoCharacterSetSimplifiedChinese & 9;// 9
static +msoCharacterSetThai: Class<Office$MsoCharacterSet__msoCharacterSetThai> & Office$MsoCharacterSet__msoCharacterSetThai & 10;// 10
static +msoCharacterSetTraditionalChinese: Class<Office$MsoCharacterSet__msoCharacterSetTraditionalChinese> & Office$MsoCharacterSet__msoCharacterSetTraditionalChinese & 11;// 11
static +msoCharacterSetVietnamese: Class<Office$MsoCharacterSet__msoCharacterSetVietnamese> & Office$MsoCharacterSet__msoCharacterSetVietnamese & 12;// 12

}

declare class Office$MsoCharacterSet__msoCharacterSetArabic mixins Office$MsoCharacterSet {}
declare class Office$MsoCharacterSet__msoCharacterSetCyrillic mixins Office$MsoCharacterSet {}
declare class Office$MsoCharacterSet__msoCharacterSetEnglishWesternEuropeanOtherLatinScript mixins Office$MsoCharacterSet {}
declare class Office$MsoCharacterSet__msoCharacterSetGreek mixins Office$MsoCharacterSet {}
declare class Office$MsoCharacterSet__msoCharacterSetHebrew mixins Office$MsoCharacterSet {}
declare class Office$MsoCharacterSet__msoCharacterSetJapanese mixins Office$MsoCharacterSet {}
declare class Office$MsoCharacterSet__msoCharacterSetKorean mixins Office$MsoCharacterSet {}
declare class Office$MsoCharacterSet__msoCharacterSetMultilingualUnicode mixins Office$MsoCharacterSet {}
declare class Office$MsoCharacterSet__msoCharacterSetSimplifiedChinese mixins Office$MsoCharacterSet {}
declare class Office$MsoCharacterSet__msoCharacterSetThai mixins Office$MsoCharacterSet {}
declare class Office$MsoCharacterSet__msoCharacterSetTraditionalChinese mixins Office$MsoCharacterSet {}
declare class Office$MsoCharacterSet__msoCharacterSetVietnamese mixins Office$MsoCharacterSet {}


declare  class Office$MsoChartElementType {
  constructor(...args: empty): mixed;
static +msoElementChartFloorNone: Class<Office$MsoChartElementType__msoElementChartFloorNone> & Office$MsoChartElementType__msoElementChartFloorNone & 1200;// 1200
static +msoElementChartFloorShow: Class<Office$MsoChartElementType__msoElementChartFloorShow> & Office$MsoChartElementType__msoElementChartFloorShow & 1201;// 1201
static +msoElementChartTitleAboveChart: Class<Office$MsoChartElementType__msoElementChartTitleAboveChart> & Office$MsoChartElementType__msoElementChartTitleAboveChart & 2;// 2
static +msoElementChartTitleCenteredOverlay: Class<Office$MsoChartElementType__msoElementChartTitleCenteredOverlay> & Office$MsoChartElementType__msoElementChartTitleCenteredOverlay & 1;// 1
static +msoElementChartTitleNone: Class<Office$MsoChartElementType__msoElementChartTitleNone> & Office$MsoChartElementType__msoElementChartTitleNone & 0;// 0
static +msoElementChartWallNone: Class<Office$MsoChartElementType__msoElementChartWallNone> & Office$MsoChartElementType__msoElementChartWallNone & 1100;// 1100
static +msoElementChartWallShow: Class<Office$MsoChartElementType__msoElementChartWallShow> & Office$MsoChartElementType__msoElementChartWallShow & 1101;// 1101
static +msoElementDataLabelBestFit: Class<Office$MsoChartElementType__msoElementDataLabelBestFit> & Office$MsoChartElementType__msoElementDataLabelBestFit & 210;// 210
static +msoElementDataLabelBottom: Class<Office$MsoChartElementType__msoElementDataLabelBottom> & Office$MsoChartElementType__msoElementDataLabelBottom & 209;// 209
static +msoElementDataLabelCallout: Class<Office$MsoChartElementType__msoElementDataLabelCallout> & Office$MsoChartElementType__msoElementDataLabelCallout & 211;// 211
static +msoElementDataLabelCenter: Class<Office$MsoChartElementType__msoElementDataLabelCenter> & Office$MsoChartElementType__msoElementDataLabelCenter & 202;// 202
static +msoElementDataLabelInsideBase: Class<Office$MsoChartElementType__msoElementDataLabelInsideBase> & Office$MsoChartElementType__msoElementDataLabelInsideBase & 204;// 204
static +msoElementDataLabelInsideEnd: Class<Office$MsoChartElementType__msoElementDataLabelInsideEnd> & Office$MsoChartElementType__msoElementDataLabelInsideEnd & 203;// 203
static +msoElementDataLabelLeft: Class<Office$MsoChartElementType__msoElementDataLabelLeft> & Office$MsoChartElementType__msoElementDataLabelLeft & 206;// 206
static +msoElementDataLabelNone: Class<Office$MsoChartElementType__msoElementDataLabelNone> & Office$MsoChartElementType__msoElementDataLabelNone & 200;// 200
static +msoElementDataLabelOutSideEnd: Class<Office$MsoChartElementType__msoElementDataLabelOutSideEnd> & Office$MsoChartElementType__msoElementDataLabelOutSideEnd & 205;// 205
static +msoElementDataLabelRight: Class<Office$MsoChartElementType__msoElementDataLabelRight> & Office$MsoChartElementType__msoElementDataLabelRight & 207;// 207
static +msoElementDataLabelShow: Class<Office$MsoChartElementType__msoElementDataLabelShow> & Office$MsoChartElementType__msoElementDataLabelShow & 201;// 201
static +msoElementDataLabelTop: Class<Office$MsoChartElementType__msoElementDataLabelTop> & Office$MsoChartElementType__msoElementDataLabelTop & 208;// 208
static +msoElementDataTableNone: Class<Office$MsoChartElementType__msoElementDataTableNone> & Office$MsoChartElementType__msoElementDataTableNone & 500;// 500
static +msoElementDataTableShow: Class<Office$MsoChartElementType__msoElementDataTableShow> & Office$MsoChartElementType__msoElementDataTableShow & 501;// 501
static +msoElementDataTableWithLegendKeys: Class<Office$MsoChartElementType__msoElementDataTableWithLegendKeys> & Office$MsoChartElementType__msoElementDataTableWithLegendKeys & 502;// 502
static +msoElementErrorBarNone: Class<Office$MsoChartElementType__msoElementErrorBarNone> & Office$MsoChartElementType__msoElementErrorBarNone & 700;// 700
static +msoElementErrorBarPercentage: Class<Office$MsoChartElementType__msoElementErrorBarPercentage> & Office$MsoChartElementType__msoElementErrorBarPercentage & 702;// 702
static +msoElementErrorBarStandardDeviation: Class<Office$MsoChartElementType__msoElementErrorBarStandardDeviation> & Office$MsoChartElementType__msoElementErrorBarStandardDeviation & 703;// 703
static +msoElementErrorBarStandardError: Class<Office$MsoChartElementType__msoElementErrorBarStandardError> & Office$MsoChartElementType__msoElementErrorBarStandardError & 701;// 701
static +msoElementLegendBottom: Class<Office$MsoChartElementType__msoElementLegendBottom> & Office$MsoChartElementType__msoElementLegendBottom & 104;// 104
static +msoElementLegendLeft: Class<Office$MsoChartElementType__msoElementLegendLeft> & Office$MsoChartElementType__msoElementLegendLeft & 103;// 103
static +msoElementLegendLeftOverlay: Class<Office$MsoChartElementType__msoElementLegendLeftOverlay> & Office$MsoChartElementType__msoElementLegendLeftOverlay & 106;// 106
static +msoElementLegendNone: Class<Office$MsoChartElementType__msoElementLegendNone> & Office$MsoChartElementType__msoElementLegendNone & 100;// 100
static +msoElementLegendRight: Class<Office$MsoChartElementType__msoElementLegendRight> & Office$MsoChartElementType__msoElementLegendRight & 101;// 101
static +msoElementLegendRightOverlay: Class<Office$MsoChartElementType__msoElementLegendRightOverlay> & Office$MsoChartElementType__msoElementLegendRightOverlay & 105;// 105
static +msoElementLegendTop: Class<Office$MsoChartElementType__msoElementLegendTop> & Office$MsoChartElementType__msoElementLegendTop & 102;// 102
static +msoElementLineDropHiLoLine: Class<Office$MsoChartElementType__msoElementLineDropHiLoLine> & Office$MsoChartElementType__msoElementLineDropHiLoLine & 804;// 804
static +msoElementLineDropLine: Class<Office$MsoChartElementType__msoElementLineDropLine> & Office$MsoChartElementType__msoElementLineDropLine & 801;// 801
static +msoElementLineHiLoLine: Class<Office$MsoChartElementType__msoElementLineHiLoLine> & Office$MsoChartElementType__msoElementLineHiLoLine & 802;// 802
static +msoElementLineNone: Class<Office$MsoChartElementType__msoElementLineNone> & Office$MsoChartElementType__msoElementLineNone & 800;// 800
static +msoElementLineSeriesLine: Class<Office$MsoChartElementType__msoElementLineSeriesLine> & Office$MsoChartElementType__msoElementLineSeriesLine & 803;// 803
static +msoElementPlotAreaNone: Class<Office$MsoChartElementType__msoElementPlotAreaNone> & Office$MsoChartElementType__msoElementPlotAreaNone & 1000;// 1000
static +msoElementPlotAreaShow: Class<Office$MsoChartElementType__msoElementPlotAreaShow> & Office$MsoChartElementType__msoElementPlotAreaShow & 1001;// 1001
static +msoElementPrimaryCategoryAxisBillions: Class<Office$MsoChartElementType__msoElementPrimaryCategoryAxisBillions> & Office$MsoChartElementType__msoElementPrimaryCategoryAxisBillions & 374;// 374
static +msoElementPrimaryCategoryAxisLogScale: Class<Office$MsoChartElementType__msoElementPrimaryCategoryAxisLogScale> & Office$MsoChartElementType__msoElementPrimaryCategoryAxisLogScale & 375;// 375
static +msoElementPrimaryCategoryAxisMillions: Class<Office$MsoChartElementType__msoElementPrimaryCategoryAxisMillions> & Office$MsoChartElementType__msoElementPrimaryCategoryAxisMillions & 373;// 373
static +msoElementPrimaryCategoryAxisNone: Class<Office$MsoChartElementType__msoElementPrimaryCategoryAxisNone> & Office$MsoChartElementType__msoElementPrimaryCategoryAxisNone & 348;// 348
static +msoElementPrimaryCategoryAxisReverse: Class<Office$MsoChartElementType__msoElementPrimaryCategoryAxisReverse> & Office$MsoChartElementType__msoElementPrimaryCategoryAxisReverse & 351;// 351
static +msoElementPrimaryCategoryAxisShow: Class<Office$MsoChartElementType__msoElementPrimaryCategoryAxisShow> & Office$MsoChartElementType__msoElementPrimaryCategoryAxisShow & 349;// 349
static +msoElementPrimaryCategoryAxisThousands: Class<Office$MsoChartElementType__msoElementPrimaryCategoryAxisThousands> & Office$MsoChartElementType__msoElementPrimaryCategoryAxisThousands & 372;// 372
static +msoElementPrimaryCategoryAxisTitleAdjacentToAxis: Class<Office$MsoChartElementType__msoElementPrimaryCategoryAxisTitleAdjacentToAxis> & Office$MsoChartElementType__msoElementPrimaryCategoryAxisTitleAdjacentToAxis & 301;// 301
static +msoElementPrimaryCategoryAxisTitleBelowAxis: Class<Office$MsoChartElementType__msoElementPrimaryCategoryAxisTitleBelowAxis> & Office$MsoChartElementType__msoElementPrimaryCategoryAxisTitleBelowAxis & 302;// 302
static +msoElementPrimaryCategoryAxisTitleHorizontal: Class<Office$MsoChartElementType__msoElementPrimaryCategoryAxisTitleHorizontal> & Office$MsoChartElementType__msoElementPrimaryCategoryAxisTitleHorizontal & 305;// 305
static +msoElementPrimaryCategoryAxisTitleNone: Class<Office$MsoChartElementType__msoElementPrimaryCategoryAxisTitleNone> & Office$MsoChartElementType__msoElementPrimaryCategoryAxisTitleNone & 300;// 300
static +msoElementPrimaryCategoryAxisTitleRotated: Class<Office$MsoChartElementType__msoElementPrimaryCategoryAxisTitleRotated> & Office$MsoChartElementType__msoElementPrimaryCategoryAxisTitleRotated & 303;// 303
static +msoElementPrimaryCategoryAxisTitleVertical: Class<Office$MsoChartElementType__msoElementPrimaryCategoryAxisTitleVertical> & Office$MsoChartElementType__msoElementPrimaryCategoryAxisTitleVertical & 304;// 304
static +msoElementPrimaryCategoryAxisWithoutLabels: Class<Office$MsoChartElementType__msoElementPrimaryCategoryAxisWithoutLabels> & Office$MsoChartElementType__msoElementPrimaryCategoryAxisWithoutLabels & 350;// 350
static +msoElementPrimaryCategoryGridLinesMajor: Class<Office$MsoChartElementType__msoElementPrimaryCategoryGridLinesMajor> & Office$MsoChartElementType__msoElementPrimaryCategoryGridLinesMajor & 334;// 334
static +msoElementPrimaryCategoryGridLinesMinor: Class<Office$MsoChartElementType__msoElementPrimaryCategoryGridLinesMinor> & Office$MsoChartElementType__msoElementPrimaryCategoryGridLinesMinor & 333;// 333
static +msoElementPrimaryCategoryGridLinesMinorMajor: Class<Office$MsoChartElementType__msoElementPrimaryCategoryGridLinesMinorMajor> & Office$MsoChartElementType__msoElementPrimaryCategoryGridLinesMinorMajor & 335;// 335
static +msoElementPrimaryCategoryGridLinesNone: Class<Office$MsoChartElementType__msoElementPrimaryCategoryGridLinesNone> & Office$MsoChartElementType__msoElementPrimaryCategoryGridLinesNone & 332;// 332
static +msoElementPrimaryValueAxisBillions: Class<Office$MsoChartElementType__msoElementPrimaryValueAxisBillions> & Office$MsoChartElementType__msoElementPrimaryValueAxisBillions & 356;// 356
static +msoElementPrimaryValueAxisLogScale: Class<Office$MsoChartElementType__msoElementPrimaryValueAxisLogScale> & Office$MsoChartElementType__msoElementPrimaryValueAxisLogScale & 357;// 357
static +msoElementPrimaryValueAxisMillions: Class<Office$MsoChartElementType__msoElementPrimaryValueAxisMillions> & Office$MsoChartElementType__msoElementPrimaryValueAxisMillions & 355;// 355
static +msoElementPrimaryValueAxisNone: Class<Office$MsoChartElementType__msoElementPrimaryValueAxisNone> & Office$MsoChartElementType__msoElementPrimaryValueAxisNone & 352;// 352
static +msoElementPrimaryValueAxisShow: Class<Office$MsoChartElementType__msoElementPrimaryValueAxisShow> & Office$MsoChartElementType__msoElementPrimaryValueAxisShow & 353;// 353
static +msoElementPrimaryValueAxisThousands: Class<Office$MsoChartElementType__msoElementPrimaryValueAxisThousands> & Office$MsoChartElementType__msoElementPrimaryValueAxisThousands & 354;// 354
static +msoElementPrimaryValueAxisTitleAdjacentToAxis: Class<Office$MsoChartElementType__msoElementPrimaryValueAxisTitleAdjacentToAxis> & Office$MsoChartElementType__msoElementPrimaryValueAxisTitleAdjacentToAxis & 306;// 306
static +msoElementPrimaryValueAxisTitleBelowAxis: Class<Office$MsoChartElementType__msoElementPrimaryValueAxisTitleBelowAxis> & Office$MsoChartElementType__msoElementPrimaryValueAxisTitleBelowAxis & 308;// 308
static +msoElementPrimaryValueAxisTitleHorizontal: Class<Office$MsoChartElementType__msoElementPrimaryValueAxisTitleHorizontal> & Office$MsoChartElementType__msoElementPrimaryValueAxisTitleHorizontal & 311;// 311
static +msoElementPrimaryValueAxisTitleNone: Class<Office$MsoChartElementType__msoElementPrimaryValueAxisTitleNone> & Office$MsoChartElementType__msoElementPrimaryValueAxisTitleNone & 306;// 306
static +msoElementPrimaryValueAxisTitleRotated: Class<Office$MsoChartElementType__msoElementPrimaryValueAxisTitleRotated> & Office$MsoChartElementType__msoElementPrimaryValueAxisTitleRotated & 309;// 309
static +msoElementPrimaryValueAxisTitleVertical: Class<Office$MsoChartElementType__msoElementPrimaryValueAxisTitleVertical> & Office$MsoChartElementType__msoElementPrimaryValueAxisTitleVertical & 310;// 310
static +msoElementPrimaryValueGridLinesMajor: Class<Office$MsoChartElementType__msoElementPrimaryValueGridLinesMajor> & Office$MsoChartElementType__msoElementPrimaryValueGridLinesMajor & 330;// 330
static +msoElementPrimaryValueGridLinesMinor: Class<Office$MsoChartElementType__msoElementPrimaryValueGridLinesMinor> & Office$MsoChartElementType__msoElementPrimaryValueGridLinesMinor & 329;// 329
static +msoElementPrimaryValueGridLinesMinorMajor: Class<Office$MsoChartElementType__msoElementPrimaryValueGridLinesMinorMajor> & Office$MsoChartElementType__msoElementPrimaryValueGridLinesMinorMajor & 331;// 331
static +msoElementPrimaryValueGridLinesNone: Class<Office$MsoChartElementType__msoElementPrimaryValueGridLinesNone> & Office$MsoChartElementType__msoElementPrimaryValueGridLinesNone & 328;// 328
static +msoElementSecondaryCategoryAxisBillions: Class<Office$MsoChartElementType__msoElementSecondaryCategoryAxisBillions> & Office$MsoChartElementType__msoElementSecondaryCategoryAxisBillions & 378;// 378
static +msoElementSecondaryCategoryAxisLogScale: Class<Office$MsoChartElementType__msoElementSecondaryCategoryAxisLogScale> & Office$MsoChartElementType__msoElementSecondaryCategoryAxisLogScale & 379;// 379
static +msoElementSecondaryCategoryAxisMillions: Class<Office$MsoChartElementType__msoElementSecondaryCategoryAxisMillions> & Office$MsoChartElementType__msoElementSecondaryCategoryAxisMillions & 377;// 377
static +msoElementSecondaryCategoryAxisNone: Class<Office$MsoChartElementType__msoElementSecondaryCategoryAxisNone> & Office$MsoChartElementType__msoElementSecondaryCategoryAxisNone & 358;// 358
static +msoElementSecondaryCategoryAxisReverse: Class<Office$MsoChartElementType__msoElementSecondaryCategoryAxisReverse> & Office$MsoChartElementType__msoElementSecondaryCategoryAxisReverse & 361;// 361
static +msoElementSecondaryCategoryAxisShow: Class<Office$MsoChartElementType__msoElementSecondaryCategoryAxisShow> & Office$MsoChartElementType__msoElementSecondaryCategoryAxisShow & 359;// 359
static +msoElementSecondaryCategoryAxisThousands: Class<Office$MsoChartElementType__msoElementSecondaryCategoryAxisThousands> & Office$MsoChartElementType__msoElementSecondaryCategoryAxisThousands & 376;// 376
static +msoElementSecondaryCategoryAxisTitleAdjacentToAxis: Class<Office$MsoChartElementType__msoElementSecondaryCategoryAxisTitleAdjacentToAxis> & Office$MsoChartElementType__msoElementSecondaryCategoryAxisTitleAdjacentToAxis & 313;// 313
static +msoElementSecondaryCategoryAxisTitleBelowAxis: Class<Office$MsoChartElementType__msoElementSecondaryCategoryAxisTitleBelowAxis> & Office$MsoChartElementType__msoElementSecondaryCategoryAxisTitleBelowAxis & 314;// 314
static +msoElementSecondaryCategoryAxisTitleHorizontal: Class<Office$MsoChartElementType__msoElementSecondaryCategoryAxisTitleHorizontal> & Office$MsoChartElementType__msoElementSecondaryCategoryAxisTitleHorizontal & 317;// 317
static +msoElementSecondaryCategoryAxisTitleNone: Class<Office$MsoChartElementType__msoElementSecondaryCategoryAxisTitleNone> & Office$MsoChartElementType__msoElementSecondaryCategoryAxisTitleNone & 312;// 312
static +msoElementSecondaryCategoryAxisTitleRotated: Class<Office$MsoChartElementType__msoElementSecondaryCategoryAxisTitleRotated> & Office$MsoChartElementType__msoElementSecondaryCategoryAxisTitleRotated & 315;// 315
static +msoElementSecondaryCategoryAxisTitleVertical: Class<Office$MsoChartElementType__msoElementSecondaryCategoryAxisTitleVertical> & Office$MsoChartElementType__msoElementSecondaryCategoryAxisTitleVertical & 316;// 316
static +msoElementSecondaryCategoryAxisWithoutLabels: Class<Office$MsoChartElementType__msoElementSecondaryCategoryAxisWithoutLabels> & Office$MsoChartElementType__msoElementSecondaryCategoryAxisWithoutLabels & 360;// 360
static +msoElementSecondaryCategoryGridLinesMajor: Class<Office$MsoChartElementType__msoElementSecondaryCategoryGridLinesMajor> & Office$MsoChartElementType__msoElementSecondaryCategoryGridLinesMajor & 342;// 342
static +msoElementSecondaryCategoryGridLinesMinor: Class<Office$MsoChartElementType__msoElementSecondaryCategoryGridLinesMinor> & Office$MsoChartElementType__msoElementSecondaryCategoryGridLinesMinor & 341;// 341
static +msoElementSecondaryCategoryGridLinesMinorMajor: Class<Office$MsoChartElementType__msoElementSecondaryCategoryGridLinesMinorMajor> & Office$MsoChartElementType__msoElementSecondaryCategoryGridLinesMinorMajor & 343;// 343
static +msoElementSecondaryCategoryGridLinesNone: Class<Office$MsoChartElementType__msoElementSecondaryCategoryGridLinesNone> & Office$MsoChartElementType__msoElementSecondaryCategoryGridLinesNone & 340;// 340
static +msoElementSecondaryValueAxisBillions: Class<Office$MsoChartElementType__msoElementSecondaryValueAxisBillions> & Office$MsoChartElementType__msoElementSecondaryValueAxisBillions & 366;// 366
static +msoElementSecondaryValueAxisLogScale: Class<Office$MsoChartElementType__msoElementSecondaryValueAxisLogScale> & Office$MsoChartElementType__msoElementSecondaryValueAxisLogScale & 367;// 367
static +msoElementSecondaryValueAxisMillions: Class<Office$MsoChartElementType__msoElementSecondaryValueAxisMillions> & Office$MsoChartElementType__msoElementSecondaryValueAxisMillions & 365;// 365
static +msoElementSecondaryValueAxisNone: Class<Office$MsoChartElementType__msoElementSecondaryValueAxisNone> & Office$MsoChartElementType__msoElementSecondaryValueAxisNone & 362;// 362
static +msoElementSecondaryValueAxisShow: Class<Office$MsoChartElementType__msoElementSecondaryValueAxisShow> & Office$MsoChartElementType__msoElementSecondaryValueAxisShow & 363;// 363
static +msoElementSecondaryValueAxisThousands: Class<Office$MsoChartElementType__msoElementSecondaryValueAxisThousands> & Office$MsoChartElementType__msoElementSecondaryValueAxisThousands & 364;// 364
static +msoElementSecondaryValueAxisTitleAdjacentToAxis: Class<Office$MsoChartElementType__msoElementSecondaryValueAxisTitleAdjacentToAxis> & Office$MsoChartElementType__msoElementSecondaryValueAxisTitleAdjacentToAxis & 319;// 319
static +msoElementSecondaryValueAxisTitleBelowAxis: Class<Office$MsoChartElementType__msoElementSecondaryValueAxisTitleBelowAxis> & Office$MsoChartElementType__msoElementSecondaryValueAxisTitleBelowAxis & 320;// 320
static +msoElementSecondaryValueAxisTitleHorizontal: Class<Office$MsoChartElementType__msoElementSecondaryValueAxisTitleHorizontal> & Office$MsoChartElementType__msoElementSecondaryValueAxisTitleHorizontal & 323;// 323
static +msoElementSecondaryValueAxisTitleNone: Class<Office$MsoChartElementType__msoElementSecondaryValueAxisTitleNone> & Office$MsoChartElementType__msoElementSecondaryValueAxisTitleNone & 318;// 318
static +msoElementSecondaryValueAxisTitleRotated: Class<Office$MsoChartElementType__msoElementSecondaryValueAxisTitleRotated> & Office$MsoChartElementType__msoElementSecondaryValueAxisTitleRotated & 321;// 321
static +msoElementSecondaryValueAxisTitleVertical: Class<Office$MsoChartElementType__msoElementSecondaryValueAxisTitleVertical> & Office$MsoChartElementType__msoElementSecondaryValueAxisTitleVertical & 322;// 322
static +msoElementSecondaryValueGridLinesMajor: Class<Office$MsoChartElementType__msoElementSecondaryValueGridLinesMajor> & Office$MsoChartElementType__msoElementSecondaryValueGridLinesMajor & 338;// 338
static +msoElementSecondaryValueGridLinesMinor: Class<Office$MsoChartElementType__msoElementSecondaryValueGridLinesMinor> & Office$MsoChartElementType__msoElementSecondaryValueGridLinesMinor & 337;// 337
static +msoElementSecondaryValueGridLinesMinorMajor: Class<Office$MsoChartElementType__msoElementSecondaryValueGridLinesMinorMajor> & Office$MsoChartElementType__msoElementSecondaryValueGridLinesMinorMajor & 339;// 339
static +msoElementSecondaryValueGridLinesNone: Class<Office$MsoChartElementType__msoElementSecondaryValueGridLinesNone> & Office$MsoChartElementType__msoElementSecondaryValueGridLinesNone & 336;// 336
static +msoElementSeriesAxisGridLinesMajor: Class<Office$MsoChartElementType__msoElementSeriesAxisGridLinesMajor> & Office$MsoChartElementType__msoElementSeriesAxisGridLinesMajor & 346;// 346
static +msoElementSeriesAxisGridLinesMinor: Class<Office$MsoChartElementType__msoElementSeriesAxisGridLinesMinor> & Office$MsoChartElementType__msoElementSeriesAxisGridLinesMinor & 345;// 345
static +msoElementSeriesAxisGridLinesMinorMajor: Class<Office$MsoChartElementType__msoElementSeriesAxisGridLinesMinorMajor> & Office$MsoChartElementType__msoElementSeriesAxisGridLinesMinorMajor & 347;// 347
static +msoElementSeriesAxisGridLinesNone: Class<Office$MsoChartElementType__msoElementSeriesAxisGridLinesNone> & Office$MsoChartElementType__msoElementSeriesAxisGridLinesNone & 344;// 344
static +msoElementSeriesAxisNone: Class<Office$MsoChartElementType__msoElementSeriesAxisNone> & Office$MsoChartElementType__msoElementSeriesAxisNone & 368;// 368
static +msoElementSeriesAxisReverse: Class<Office$MsoChartElementType__msoElementSeriesAxisReverse> & Office$MsoChartElementType__msoElementSeriesAxisReverse & 371;// 371
static +msoElementSeriesAxisShow: Class<Office$MsoChartElementType__msoElementSeriesAxisShow> & Office$MsoChartElementType__msoElementSeriesAxisShow & 369;// 369
static +msoElementSeriesAxisTitleHorizontal: Class<Office$MsoChartElementType__msoElementSeriesAxisTitleHorizontal> & Office$MsoChartElementType__msoElementSeriesAxisTitleHorizontal & 327;// 327
static +msoElementSeriesAxisTitleNone: Class<Office$MsoChartElementType__msoElementSeriesAxisTitleNone> & Office$MsoChartElementType__msoElementSeriesAxisTitleNone & 324;// 324
static +msoElementSeriesAxisTitleRotated: Class<Office$MsoChartElementType__msoElementSeriesAxisTitleRotated> & Office$MsoChartElementType__msoElementSeriesAxisTitleRotated & 325;// 325
static +msoElementSeriesAxisTitleVertical: Class<Office$MsoChartElementType__msoElementSeriesAxisTitleVertical> & Office$MsoChartElementType__msoElementSeriesAxisTitleVertical & 326;// 326
static +msoElementSeriesAxisWithoutLabeling: Class<Office$MsoChartElementType__msoElementSeriesAxisWithoutLabeling> & Office$MsoChartElementType__msoElementSeriesAxisWithoutLabeling & 370;// 370
static +msoElementTrendlineAddExponential: Class<Office$MsoChartElementType__msoElementTrendlineAddExponential> & Office$MsoChartElementType__msoElementTrendlineAddExponential & 602;// 602
static +msoElementTrendlineAddLinear: Class<Office$MsoChartElementType__msoElementTrendlineAddLinear> & Office$MsoChartElementType__msoElementTrendlineAddLinear & 601;// 601
static +msoElementTrendlineAddLinearForecast: Class<Office$MsoChartElementType__msoElementTrendlineAddLinearForecast> & Office$MsoChartElementType__msoElementTrendlineAddLinearForecast & 603;// 603
static +msoElementTrendlineAddTwoPeriodMovingAverage: Class<Office$MsoChartElementType__msoElementTrendlineAddTwoPeriodMovingAverage> & Office$MsoChartElementType__msoElementTrendlineAddTwoPeriodMovingAverage & 604;// 604
static +msoElementTrendlineNone: Class<Office$MsoChartElementType__msoElementTrendlineNone> & Office$MsoChartElementType__msoElementTrendlineNone & 600;// 600
static +msoElementUpDownBarsNone: Class<Office$MsoChartElementType__msoElementUpDownBarsNone> & Office$MsoChartElementType__msoElementUpDownBarsNone & 900;// 900
static +msoElementUpDownBarsShow: Class<Office$MsoChartElementType__msoElementUpDownBarsShow> & Office$MsoChartElementType__msoElementUpDownBarsShow & 901;// 901

}

declare class Office$MsoChartElementType__msoElementChartFloorNone mixins Office$MsoChartElementType {}
declare class Office$MsoChartElementType__msoElementChartFloorShow mixins Office$MsoChartElementType {}
declare class Office$MsoChartElementType__msoElementChartTitleAboveChart mixins Office$MsoChartElementType {}
declare class Office$MsoChartElementType__msoElementChartTitleCenteredOverlay mixins Office$MsoChartElementType {}
declare class Office$MsoChartElementType__msoElementChartTitleNone mixins Office$MsoChartElementType {}
declare class Office$MsoChartElementType__msoElementChartWallNone mixins Office$MsoChartElementType {}
declare class Office$MsoChartElementType__msoElementChartWallShow mixins Office$MsoChartElementType {}
declare class Office$MsoChartElementType__msoElementDataLabelBestFit mixins Office$MsoChartElementType {}
declare class Office$MsoChartElementType__msoElementDataLabelBottom mixins Office$MsoChartElementType {}
declare class Office$MsoChartElementType__msoElementDataLabelCallout mixins Office$MsoChartElementType {}
declare class Office$MsoChartElementType__msoElementDataLabelCenter mixins Office$MsoChartElementType {}
declare class Office$MsoChartElementType__msoElementDataLabelInsideBase mixins Office$MsoChartElementType {}
declare class Office$MsoChartElementType__msoElementDataLabelInsideEnd mixins Office$MsoChartElementType {}
declare class Office$MsoChartElementType__msoElementDataLabelLeft mixins Office$MsoChartElementType {}
declare class Office$MsoChartElementType__msoElementDataLabelNone mixins Office$MsoChartElementType {}
declare class Office$MsoChartElementType__msoElementDataLabelOutSideEnd mixins Office$MsoChartElementType {}
declare class Office$MsoChartElementType__msoElementDataLabelRight mixins Office$MsoChartElementType {}
declare class Office$MsoChartElementType__msoElementDataLabelShow mixins Office$MsoChartElementType {}
declare class Office$MsoChartElementType__msoElementDataLabelTop mixins Office$MsoChartElementType {}
declare class Office$MsoChartElementType__msoElementDataTableNone mixins Office$MsoChartElementType {}
declare class Office$MsoChartElementType__msoElementDataTableShow mixins Office$MsoChartElementType {}
declare class Office$MsoChartElementType__msoElementDataTableWithLegendKeys mixins Office$MsoChartElementType {}
declare class Office$MsoChartElementType__msoElementErrorBarNone mixins Office$MsoChartElementType {}
declare class Office$MsoChartElementType__msoElementErrorBarPercentage mixins Office$MsoChartElementType {}
declare class Office$MsoChartElementType__msoElementErrorBarStandardDeviation mixins Office$MsoChartElementType {}
declare class Office$MsoChartElementType__msoElementErrorBarStandardError mixins Office$MsoChartElementType {}
declare class Office$MsoChartElementType__msoElementLegendBottom mixins Office$MsoChartElementType {}
declare class Office$MsoChartElementType__msoElementLegendLeft mixins Office$MsoChartElementType {}
declare class Office$MsoChartElementType__msoElementLegendLeftOverlay mixins Office$MsoChartElementType {}
declare class Office$MsoChartElementType__msoElementLegendNone mixins Office$MsoChartElementType {}
declare class Office$MsoChartElementType__msoElementLegendRight mixins Office$MsoChartElementType {}
declare class Office$MsoChartElementType__msoElementLegendRightOverlay mixins Office$MsoChartElementType {}
declare class Office$MsoChartElementType__msoElementLegendTop mixins Office$MsoChartElementType {}
declare class Office$MsoChartElementType__msoElementLineDropHiLoLine mixins Office$MsoChartElementType {}
declare class Office$MsoChartElementType__msoElementLineDropLine mixins Office$MsoChartElementType {}
declare class Office$MsoChartElementType__msoElementLineHiLoLine mixins Office$MsoChartElementType {}
declare class Office$MsoChartElementType__msoElementLineNone mixins Office$MsoChartElementType {}
declare class Office$MsoChartElementType__msoElementLineSeriesLine mixins Office$MsoChartElementType {}
declare class Office$MsoChartElementType__msoElementPlotAreaNone mixins Office$MsoChartElementType {}
declare class Office$MsoChartElementType__msoElementPlotAreaShow mixins Office$MsoChartElementType {}
declare class Office$MsoChartElementType__msoElementPrimaryCategoryAxisBillions mixins Office$MsoChartElementType {}
declare class Office$MsoChartElementType__msoElementPrimaryCategoryAxisLogScale mixins Office$MsoChartElementType {}
declare class Office$MsoChartElementType__msoElementPrimaryCategoryAxisMillions mixins Office$MsoChartElementType {}
declare class Office$MsoChartElementType__msoElementPrimaryCategoryAxisNone mixins Office$MsoChartElementType {}
declare class Office$MsoChartElementType__msoElementPrimaryCategoryAxisReverse mixins Office$MsoChartElementType {}
declare class Office$MsoChartElementType__msoElementPrimaryCategoryAxisShow mixins Office$MsoChartElementType {}
declare class Office$MsoChartElementType__msoElementPrimaryCategoryAxisThousands mixins Office$MsoChartElementType {}
declare class Office$MsoChartElementType__msoElementPrimaryCategoryAxisTitleAdjacentToAxis mixins Office$MsoChartElementType {}
declare class Office$MsoChartElementType__msoElementPrimaryCategoryAxisTitleBelowAxis mixins Office$MsoChartElementType {}
declare class Office$MsoChartElementType__msoElementPrimaryCategoryAxisTitleHorizontal mixins Office$MsoChartElementType {}
declare class Office$MsoChartElementType__msoElementPrimaryCategoryAxisTitleNone mixins Office$MsoChartElementType {}
declare class Office$MsoChartElementType__msoElementPrimaryCategoryAxisTitleRotated mixins Office$MsoChartElementType {}
declare class Office$MsoChartElementType__msoElementPrimaryCategoryAxisTitleVertical mixins Office$MsoChartElementType {}
declare class Office$MsoChartElementType__msoElementPrimaryCategoryAxisWithoutLabels mixins Office$MsoChartElementType {}
declare class Office$MsoChartElementType__msoElementPrimaryCategoryGridLinesMajor mixins Office$MsoChartElementType {}
declare class Office$MsoChartElementType__msoElementPrimaryCategoryGridLinesMinor mixins Office$MsoChartElementType {}
declare class Office$MsoChartElementType__msoElementPrimaryCategoryGridLinesMinorMajor mixins Office$MsoChartElementType {}
declare class Office$MsoChartElementType__msoElementPrimaryCategoryGridLinesNone mixins Office$MsoChartElementType {}
declare class Office$MsoChartElementType__msoElementPrimaryValueAxisBillions mixins Office$MsoChartElementType {}
declare class Office$MsoChartElementType__msoElementPrimaryValueAxisLogScale mixins Office$MsoChartElementType {}
declare class Office$MsoChartElementType__msoElementPrimaryValueAxisMillions mixins Office$MsoChartElementType {}
declare class Office$MsoChartElementType__msoElementPrimaryValueAxisNone mixins Office$MsoChartElementType {}
declare class Office$MsoChartElementType__msoElementPrimaryValueAxisShow mixins Office$MsoChartElementType {}
declare class Office$MsoChartElementType__msoElementPrimaryValueAxisThousands mixins Office$MsoChartElementType {}
declare class Office$MsoChartElementType__msoElementPrimaryValueAxisTitleAdjacentToAxis mixins Office$MsoChartElementType {}
declare class Office$MsoChartElementType__msoElementPrimaryValueAxisTitleBelowAxis mixins Office$MsoChartElementType {}
declare class Office$MsoChartElementType__msoElementPrimaryValueAxisTitleHorizontal mixins Office$MsoChartElementType {}
declare class Office$MsoChartElementType__msoElementPrimaryValueAxisTitleNone mixins Office$MsoChartElementType {}
declare class Office$MsoChartElementType__msoElementPrimaryValueAxisTitleRotated mixins Office$MsoChartElementType {}
declare class Office$MsoChartElementType__msoElementPrimaryValueAxisTitleVertical mixins Office$MsoChartElementType {}
declare class Office$MsoChartElementType__msoElementPrimaryValueGridLinesMajor mixins Office$MsoChartElementType {}
declare class Office$MsoChartElementType__msoElementPrimaryValueGridLinesMinor mixins Office$MsoChartElementType {}
declare class Office$MsoChartElementType__msoElementPrimaryValueGridLinesMinorMajor mixins Office$MsoChartElementType {}
declare class Office$MsoChartElementType__msoElementPrimaryValueGridLinesNone mixins Office$MsoChartElementType {}
declare class Office$MsoChartElementType__msoElementSecondaryCategoryAxisBillions mixins Office$MsoChartElementType {}
declare class Office$MsoChartElementType__msoElementSecondaryCategoryAxisLogScale mixins Office$MsoChartElementType {}
declare class Office$MsoChartElementType__msoElementSecondaryCategoryAxisMillions mixins Office$MsoChartElementType {}
declare class Office$MsoChartElementType__msoElementSecondaryCategoryAxisNone mixins Office$MsoChartElementType {}
declare class Office$MsoChartElementType__msoElementSecondaryCategoryAxisReverse mixins Office$MsoChartElementType {}
declare class Office$MsoChartElementType__msoElementSecondaryCategoryAxisShow mixins Office$MsoChartElementType {}
declare class Office$MsoChartElementType__msoElementSecondaryCategoryAxisThousands mixins Office$MsoChartElementType {}
declare class Office$MsoChartElementType__msoElementSecondaryCategoryAxisTitleAdjacentToAxis mixins Office$MsoChartElementType {}
declare class Office$MsoChartElementType__msoElementSecondaryCategoryAxisTitleBelowAxis mixins Office$MsoChartElementType {}
declare class Office$MsoChartElementType__msoElementSecondaryCategoryAxisTitleHorizontal mixins Office$MsoChartElementType {}
declare class Office$MsoChartElementType__msoElementSecondaryCategoryAxisTitleNone mixins Office$MsoChartElementType {}
declare class Office$MsoChartElementType__msoElementSecondaryCategoryAxisTitleRotated mixins Office$MsoChartElementType {}
declare class Office$MsoChartElementType__msoElementSecondaryCategoryAxisTitleVertical mixins Office$MsoChartElementType {}
declare class Office$MsoChartElementType__msoElementSecondaryCategoryAxisWithoutLabels mixins Office$MsoChartElementType {}
declare class Office$MsoChartElementType__msoElementSecondaryCategoryGridLinesMajor mixins Office$MsoChartElementType {}
declare class Office$MsoChartElementType__msoElementSecondaryCategoryGridLinesMinor mixins Office$MsoChartElementType {}
declare class Office$MsoChartElementType__msoElementSecondaryCategoryGridLinesMinorMajor mixins Office$MsoChartElementType {}
declare class Office$MsoChartElementType__msoElementSecondaryCategoryGridLinesNone mixins Office$MsoChartElementType {}
declare class Office$MsoChartElementType__msoElementSecondaryValueAxisBillions mixins Office$MsoChartElementType {}
declare class Office$MsoChartElementType__msoElementSecondaryValueAxisLogScale mixins Office$MsoChartElementType {}
declare class Office$MsoChartElementType__msoElementSecondaryValueAxisMillions mixins Office$MsoChartElementType {}
declare class Office$MsoChartElementType__msoElementSecondaryValueAxisNone mixins Office$MsoChartElementType {}
declare class Office$MsoChartElementType__msoElementSecondaryValueAxisShow mixins Office$MsoChartElementType {}
declare class Office$MsoChartElementType__msoElementSecondaryValueAxisThousands mixins Office$MsoChartElementType {}
declare class Office$MsoChartElementType__msoElementSecondaryValueAxisTitleAdjacentToAxis mixins Office$MsoChartElementType {}
declare class Office$MsoChartElementType__msoElementSecondaryValueAxisTitleBelowAxis mixins Office$MsoChartElementType {}
declare class Office$MsoChartElementType__msoElementSecondaryValueAxisTitleHorizontal mixins Office$MsoChartElementType {}
declare class Office$MsoChartElementType__msoElementSecondaryValueAxisTitleNone mixins Office$MsoChartElementType {}
declare class Office$MsoChartElementType__msoElementSecondaryValueAxisTitleRotated mixins Office$MsoChartElementType {}
declare class Office$MsoChartElementType__msoElementSecondaryValueAxisTitleVertical mixins Office$MsoChartElementType {}
declare class Office$MsoChartElementType__msoElementSecondaryValueGridLinesMajor mixins Office$MsoChartElementType {}
declare class Office$MsoChartElementType__msoElementSecondaryValueGridLinesMinor mixins Office$MsoChartElementType {}
declare class Office$MsoChartElementType__msoElementSecondaryValueGridLinesMinorMajor mixins Office$MsoChartElementType {}
declare class Office$MsoChartElementType__msoElementSecondaryValueGridLinesNone mixins Office$MsoChartElementType {}
declare class Office$MsoChartElementType__msoElementSeriesAxisGridLinesMajor mixins Office$MsoChartElementType {}
declare class Office$MsoChartElementType__msoElementSeriesAxisGridLinesMinor mixins Office$MsoChartElementType {}
declare class Office$MsoChartElementType__msoElementSeriesAxisGridLinesMinorMajor mixins Office$MsoChartElementType {}
declare class Office$MsoChartElementType__msoElementSeriesAxisGridLinesNone mixins Office$MsoChartElementType {}
declare class Office$MsoChartElementType__msoElementSeriesAxisNone mixins Office$MsoChartElementType {}
declare class Office$MsoChartElementType__msoElementSeriesAxisReverse mixins Office$MsoChartElementType {}
declare class Office$MsoChartElementType__msoElementSeriesAxisShow mixins Office$MsoChartElementType {}
declare class Office$MsoChartElementType__msoElementSeriesAxisTitleHorizontal mixins Office$MsoChartElementType {}
declare class Office$MsoChartElementType__msoElementSeriesAxisTitleNone mixins Office$MsoChartElementType {}
declare class Office$MsoChartElementType__msoElementSeriesAxisTitleRotated mixins Office$MsoChartElementType {}
declare class Office$MsoChartElementType__msoElementSeriesAxisTitleVertical mixins Office$MsoChartElementType {}
declare class Office$MsoChartElementType__msoElementSeriesAxisWithoutLabeling mixins Office$MsoChartElementType {}
declare class Office$MsoChartElementType__msoElementTrendlineAddExponential mixins Office$MsoChartElementType {}
declare class Office$MsoChartElementType__msoElementTrendlineAddLinear mixins Office$MsoChartElementType {}
declare class Office$MsoChartElementType__msoElementTrendlineAddLinearForecast mixins Office$MsoChartElementType {}
declare class Office$MsoChartElementType__msoElementTrendlineAddTwoPeriodMovingAverage mixins Office$MsoChartElementType {}
declare class Office$MsoChartElementType__msoElementTrendlineNone mixins Office$MsoChartElementType {}
declare class Office$MsoChartElementType__msoElementUpDownBarsNone mixins Office$MsoChartElementType {}
declare class Office$MsoChartElementType__msoElementUpDownBarsShow mixins Office$MsoChartElementType {}


declare  class Office$MsoChartFieldType {
  constructor(...args: empty): mixed;
static +msoChartFieldBubbleSize: Class<Office$MsoChartFieldType__msoChartFieldBubbleSize> & Office$MsoChartFieldType__msoChartFieldBubbleSize & 1;// 1
static +msoChartFieldCategoryName: Class<Office$MsoChartFieldType__msoChartFieldCategoryName> & Office$MsoChartFieldType__msoChartFieldCategoryName & 2;// 2
static +msoChartFieldFormula: Class<Office$MsoChartFieldType__msoChartFieldFormula> & Office$MsoChartFieldType__msoChartFieldFormula & 6;// 6
static +msoChartFieldPercentage: Class<Office$MsoChartFieldType__msoChartFieldPercentage> & Office$MsoChartFieldType__msoChartFieldPercentage & 3;// 3
static +msoChartFieldRange: Class<Office$MsoChartFieldType__msoChartFieldRange> & Office$MsoChartFieldType__msoChartFieldRange & 7;// 7
static +msoChartFieldSeriesName: Class<Office$MsoChartFieldType__msoChartFieldSeriesName> & Office$MsoChartFieldType__msoChartFieldSeriesName & 4;// 4
static +msoChartFieldValue: Class<Office$MsoChartFieldType__msoChartFieldValue> & Office$MsoChartFieldType__msoChartFieldValue & 5;// 5

}

declare class Office$MsoChartFieldType__msoChartFieldBubbleSize mixins Office$MsoChartFieldType {}
declare class Office$MsoChartFieldType__msoChartFieldCategoryName mixins Office$MsoChartFieldType {}
declare class Office$MsoChartFieldType__msoChartFieldFormula mixins Office$MsoChartFieldType {}
declare class Office$MsoChartFieldType__msoChartFieldPercentage mixins Office$MsoChartFieldType {}
declare class Office$MsoChartFieldType__msoChartFieldRange mixins Office$MsoChartFieldType {}
declare class Office$MsoChartFieldType__msoChartFieldSeriesName mixins Office$MsoChartFieldType {}
declare class Office$MsoChartFieldType__msoChartFieldValue mixins Office$MsoChartFieldType {}


declare  class Office$MsoClipboardFormat {
  constructor(...args: empty): mixed;
static +msoClipboardFormatHTML: Class<Office$MsoClipboardFormat__msoClipboardFormatHTML> & Office$MsoClipboardFormat__msoClipboardFormatHTML & 2;// 2
static +msoClipboardFormatMixed: Class<Office$MsoClipboardFormat__msoClipboardFormatMixed> & Office$MsoClipboardFormat__msoClipboardFormatMixed & -2;// -2
static +msoClipboardFormatNative: Class<Office$MsoClipboardFormat__msoClipboardFormatNative> & Office$MsoClipboardFormat__msoClipboardFormatNative & 1;// 1
static +msoClipboardFormatPlainText: Class<Office$MsoClipboardFormat__msoClipboardFormatPlainText> & Office$MsoClipboardFormat__msoClipboardFormatPlainText & 4;// 4
static +msoClipboardFormatRTF: Class<Office$MsoClipboardFormat__msoClipboardFormatRTF> & Office$MsoClipboardFormat__msoClipboardFormatRTF & 3;// 3

}

declare class Office$MsoClipboardFormat__msoClipboardFormatHTML mixins Office$MsoClipboardFormat {}
declare class Office$MsoClipboardFormat__msoClipboardFormatMixed mixins Office$MsoClipboardFormat {}
declare class Office$MsoClipboardFormat__msoClipboardFormatNative mixins Office$MsoClipboardFormat {}
declare class Office$MsoClipboardFormat__msoClipboardFormatPlainText mixins Office$MsoClipboardFormat {}
declare class Office$MsoClipboardFormat__msoClipboardFormatRTF mixins Office$MsoClipboardFormat {}


declare  class Office$MsoColorType {
  constructor(...args: empty): mixed;
static +msoColorTypeCMS: Class<Office$MsoColorType__msoColorTypeCMS> & Office$MsoColorType__msoColorTypeCMS & 4;// 4
static +msoColorTypeCMYK: Class<Office$MsoColorType__msoColorTypeCMYK> & Office$MsoColorType__msoColorTypeCMYK & 3;// 3
static +msoColorTypeInk: Class<Office$MsoColorType__msoColorTypeInk> & Office$MsoColorType__msoColorTypeInk & 5;// 5
static +msoColorTypeMixed: Class<Office$MsoColorType__msoColorTypeMixed> & Office$MsoColorType__msoColorTypeMixed & -2;// -2
static +msoColorTypeRGB: Class<Office$MsoColorType__msoColorTypeRGB> & Office$MsoColorType__msoColorTypeRGB & 1;// 1
static +msoColorTypeScheme: Class<Office$MsoColorType__msoColorTypeScheme> & Office$MsoColorType__msoColorTypeScheme & 2;// 2

}

declare class Office$MsoColorType__msoColorTypeCMS mixins Office$MsoColorType {}
declare class Office$MsoColorType__msoColorTypeCMYK mixins Office$MsoColorType {}
declare class Office$MsoColorType__msoColorTypeInk mixins Office$MsoColorType {}
declare class Office$MsoColorType__msoColorTypeMixed mixins Office$MsoColorType {}
declare class Office$MsoColorType__msoColorTypeRGB mixins Office$MsoColorType {}
declare class Office$MsoColorType__msoColorTypeScheme mixins Office$MsoColorType {}


declare  class Office$MsoComboStyle {
  constructor(...args: empty): mixed;
static +msoComboLabel: Class<Office$MsoComboStyle__msoComboLabel> & Office$MsoComboStyle__msoComboLabel & 1;// 1
static +msoComboNormal: Class<Office$MsoComboStyle__msoComboNormal> & Office$MsoComboStyle__msoComboNormal & 0;// 0

}

declare class Office$MsoComboStyle__msoComboLabel mixins Office$MsoComboStyle {}
declare class Office$MsoComboStyle__msoComboNormal mixins Office$MsoComboStyle {}


declare  class Office$MsoCommandBarButtonHyperlinkType {
  constructor(...args: empty): mixed;
static +msoCommandBarButtonHyperlinkInsertPicture: Class<Office$MsoCommandBarButtonHyperlinkType__msoCommandBarButtonHyperlinkInsertPicture> & Office$MsoCommandBarButtonHyperlinkType__msoCommandBarButtonHyperlinkInsertPicture & 2;// 2
static +msoCommandBarButtonHyperlinkNone: Class<Office$MsoCommandBarButtonHyperlinkType__msoCommandBarButtonHyperlinkNone> & Office$MsoCommandBarButtonHyperlinkType__msoCommandBarButtonHyperlinkNone & 0;// 0
static +msoCommandBarButtonHyperlinkOpen: Class<Office$MsoCommandBarButtonHyperlinkType__msoCommandBarButtonHyperlinkOpen> & Office$MsoCommandBarButtonHyperlinkType__msoCommandBarButtonHyperlinkOpen & 1;// 1

}

declare class Office$MsoCommandBarButtonHyperlinkType__msoCommandBarButtonHyperlinkInsertPicture mixins Office$MsoCommandBarButtonHyperlinkType {}
declare class Office$MsoCommandBarButtonHyperlinkType__msoCommandBarButtonHyperlinkNone mixins Office$MsoCommandBarButtonHyperlinkType {}
declare class Office$MsoCommandBarButtonHyperlinkType__msoCommandBarButtonHyperlinkOpen mixins Office$MsoCommandBarButtonHyperlinkType {}


declare  class Office$MsoCondition {
  constructor(...args: empty): mixed;
static +msoConditionAnyNumberBetween: Class<Office$MsoCondition__msoConditionAnyNumberBetween> & Office$MsoCondition__msoConditionAnyNumberBetween & 34;// 34
static +msoConditionAnytime: Class<Office$MsoCondition__msoConditionAnytime> & Office$MsoCondition__msoConditionAnytime & 25;// 25
static +msoConditionAnytimeBetween: Class<Office$MsoCondition__msoConditionAnytimeBetween> & Office$MsoCondition__msoConditionAnytimeBetween & 26;// 26
static +msoConditionAtLeast: Class<Office$MsoCondition__msoConditionAtLeast> & Office$MsoCondition__msoConditionAtLeast & 36;// 36
static +msoConditionAtMost: Class<Office$MsoCondition__msoConditionAtMost> & Office$MsoCondition__msoConditionAtMost & 35;// 35
static +msoConditionBeginsWith: Class<Office$MsoCondition__msoConditionBeginsWith> & Office$MsoCondition__msoConditionBeginsWith & 11;// 11
static +msoConditionDoesNotEqual: Class<Office$MsoCondition__msoConditionDoesNotEqual> & Office$MsoCondition__msoConditionDoesNotEqual & 33;// 33
static +msoConditionEndsWith: Class<Office$MsoCondition__msoConditionEndsWith> & Office$MsoCondition__msoConditionEndsWith & 12;// 12
static +msoConditionEquals: Class<Office$MsoCondition__msoConditionEquals> & Office$MsoCondition__msoConditionEquals & 32;// 32
static +msoConditionEqualsCompleted: Class<Office$MsoCondition__msoConditionEqualsCompleted> & Office$MsoCondition__msoConditionEqualsCompleted & 66;// 66
static +msoConditionEqualsDeferred: Class<Office$MsoCondition__msoConditionEqualsDeferred> & Office$MsoCondition__msoConditionEqualsDeferred & 68;// 68
static +msoConditionEqualsHigh: Class<Office$MsoCondition__msoConditionEqualsHigh> & Office$MsoCondition__msoConditionEqualsHigh & 60;// 60
static +msoConditionEqualsInProgress: Class<Office$MsoCondition__msoConditionEqualsInProgress> & Office$MsoCondition__msoConditionEqualsInProgress & 65;// 65
static +msoConditionEqualsLow: Class<Office$MsoCondition__msoConditionEqualsLow> & Office$MsoCondition__msoConditionEqualsLow & 58;// 58
static +msoConditionEqualsNormal: Class<Office$MsoCondition__msoConditionEqualsNormal> & Office$MsoCondition__msoConditionEqualsNormal & 59;// 59
static +msoConditionEqualsNotStarted: Class<Office$MsoCondition__msoConditionEqualsNotStarted> & Office$MsoCondition__msoConditionEqualsNotStarted & 64;// 64
static +msoConditionEqualsWaitingForSomeoneElse: Class<Office$MsoCondition__msoConditionEqualsWaitingForSomeoneElse> & Office$MsoCondition__msoConditionEqualsWaitingForSomeoneElse & 67;// 67
static +msoConditionFileTypeAllFiles: Class<Office$MsoCondition__msoConditionFileTypeAllFiles> & Office$MsoCondition__msoConditionFileTypeAllFiles & 1;// 1
static +msoConditionFileTypeBinders: Class<Office$MsoCondition__msoConditionFileTypeBinders> & Office$MsoCondition__msoConditionFileTypeBinders & 6;// 6
static +msoConditionFileTypeCalendarItem: Class<Office$MsoCondition__msoConditionFileTypeCalendarItem> & Office$MsoCondition__msoConditionFileTypeCalendarItem & 45;// 45
static +msoConditionFileTypeContactItem: Class<Office$MsoCondition__msoConditionFileTypeContactItem> & Office$MsoCondition__msoConditionFileTypeContactItem & 46;// 46
static +msoConditionFileTypeDatabases: Class<Office$MsoCondition__msoConditionFileTypeDatabases> & Office$MsoCondition__msoConditionFileTypeDatabases & 7;// 7
static +msoConditionFileTypeDataConnectionFiles: Class<Office$MsoCondition__msoConditionFileTypeDataConnectionFiles> & Office$MsoCondition__msoConditionFileTypeDataConnectionFiles & 51;// 51
static +msoConditionFileTypeDesignerFiles: Class<Office$MsoCondition__msoConditionFileTypeDesignerFiles> & Office$MsoCondition__msoConditionFileTypeDesignerFiles & 56;// 56
static +msoConditionFileTypeDocumentImagingFiles: Class<Office$MsoCondition__msoConditionFileTypeDocumentImagingFiles> & Office$MsoCondition__msoConditionFileTypeDocumentImagingFiles & 54;// 54
static +msoConditionFileTypeExcelWorkbooks: Class<Office$MsoCondition__msoConditionFileTypeExcelWorkbooks> & Office$MsoCondition__msoConditionFileTypeExcelWorkbooks & 4;// 4
static +msoConditionFileTypeJournalItem: Class<Office$MsoCondition__msoConditionFileTypeJournalItem> & Office$MsoCondition__msoConditionFileTypeJournalItem & 48;// 48
static +msoConditionFileTypeMailItem: Class<Office$MsoCondition__msoConditionFileTypeMailItem> & Office$MsoCondition__msoConditionFileTypeMailItem & 44;// 44
static +msoConditionFileTypeNoteItem: Class<Office$MsoCondition__msoConditionFileTypeNoteItem> & Office$MsoCondition__msoConditionFileTypeNoteItem & 47;// 47
static +msoConditionFileTypeOfficeFiles: Class<Office$MsoCondition__msoConditionFileTypeOfficeFiles> & Office$MsoCondition__msoConditionFileTypeOfficeFiles & 2;// 2
static +msoConditionFileTypeOutlookItems: Class<Office$MsoCondition__msoConditionFileTypeOutlookItems> & Office$MsoCondition__msoConditionFileTypeOutlookItems & 43;// 43
static +msoConditionFileTypePhotoDrawFiles: Class<Office$MsoCondition__msoConditionFileTypePhotoDrawFiles> & Office$MsoCondition__msoConditionFileTypePhotoDrawFiles & 50;// 50
static +msoConditionFileTypePowerPointPresentations: Class<Office$MsoCondition__msoConditionFileTypePowerPointPresentations> & Office$MsoCondition__msoConditionFileTypePowerPointPresentations & 5;// 5
static +msoConditionFileTypeProjectFiles: Class<Office$MsoCondition__msoConditionFileTypeProjectFiles> & Office$MsoCondition__msoConditionFileTypeProjectFiles & 53;// 53
static +msoConditionFileTypePublisherFiles: Class<Office$MsoCondition__msoConditionFileTypePublisherFiles> & Office$MsoCondition__msoConditionFileTypePublisherFiles & 52;// 52
static +msoConditionFileTypeTaskItem: Class<Office$MsoCondition__msoConditionFileTypeTaskItem> & Office$MsoCondition__msoConditionFileTypeTaskItem & 49;// 49
static +msoConditionFileTypeTemplates: Class<Office$MsoCondition__msoConditionFileTypeTemplates> & Office$MsoCondition__msoConditionFileTypeTemplates & 8;// 8
static +msoConditionFileTypeVisioFiles: Class<Office$MsoCondition__msoConditionFileTypeVisioFiles> & Office$MsoCondition__msoConditionFileTypeVisioFiles & 55;// 55
static +msoConditionFileTypeWebPages: Class<Office$MsoCondition__msoConditionFileTypeWebPages> & Office$MsoCondition__msoConditionFileTypeWebPages & 57;// 57
static +msoConditionFileTypeWordDocuments: Class<Office$MsoCondition__msoConditionFileTypeWordDocuments> & Office$MsoCondition__msoConditionFileTypeWordDocuments & 3;// 3
static +msoConditionFreeText: Class<Office$MsoCondition__msoConditionFreeText> & Office$MsoCondition__msoConditionFreeText & 42;// 42
static +msoConditionIncludes: Class<Office$MsoCondition__msoConditionIncludes> & Office$MsoCondition__msoConditionIncludes & 9;// 9
static +msoConditionIncludesFormsOf: Class<Office$MsoCondition__msoConditionIncludesFormsOf> & Office$MsoCondition__msoConditionIncludesFormsOf & 41;// 41
static +msoConditionIncludesNearEachOther: Class<Office$MsoCondition__msoConditionIncludesNearEachOther> & Office$MsoCondition__msoConditionIncludesNearEachOther & 13;// 13
static +msoConditionIncludesPhrase: Class<Office$MsoCondition__msoConditionIncludesPhrase> & Office$MsoCondition__msoConditionIncludesPhrase & 10;// 10
static +msoConditionInTheLast: Class<Office$MsoCondition__msoConditionInTheLast> & Office$MsoCondition__msoConditionInTheLast & 31;// 31
static +msoConditionInTheNext: Class<Office$MsoCondition__msoConditionInTheNext> & Office$MsoCondition__msoConditionInTheNext & 30;// 30
static +msoConditionIsExactly: Class<Office$MsoCondition__msoConditionIsExactly> & Office$MsoCondition__msoConditionIsExactly & 14;// 14
static +msoConditionIsNo: Class<Office$MsoCondition__msoConditionIsNo> & Office$MsoCondition__msoConditionIsNo & 40;// 40
static +msoConditionIsNot: Class<Office$MsoCondition__msoConditionIsNot> & Office$MsoCondition__msoConditionIsNot & 15;// 15
static +msoConditionIsYes: Class<Office$MsoCondition__msoConditionIsYes> & Office$MsoCondition__msoConditionIsYes & 39;// 39
static +msoConditionLastMonth: Class<Office$MsoCondition__msoConditionLastMonth> & Office$MsoCondition__msoConditionLastMonth & 22;// 22
static +msoConditionLastWeek: Class<Office$MsoCondition__msoConditionLastWeek> & Office$MsoCondition__msoConditionLastWeek & 19;// 19
static +msoConditionLessThan: Class<Office$MsoCondition__msoConditionLessThan> & Office$MsoCondition__msoConditionLessThan & 38;// 38
static +msoConditionMoreThan: Class<Office$MsoCondition__msoConditionMoreThan> & Office$MsoCondition__msoConditionMoreThan & 37;// 37
static +msoConditionNextMonth: Class<Office$MsoCondition__msoConditionNextMonth> & Office$MsoCondition__msoConditionNextMonth & 24;// 24
static +msoConditionNextWeek: Class<Office$MsoCondition__msoConditionNextWeek> & Office$MsoCondition__msoConditionNextWeek & 21;// 21
static +msoConditionNotEqualToCompleted: Class<Office$MsoCondition__msoConditionNotEqualToCompleted> & Office$MsoCondition__msoConditionNotEqualToCompleted & 71;// 71
static +msoConditionNotEqualToDeferred: Class<Office$MsoCondition__msoConditionNotEqualToDeferred> & Office$MsoCondition__msoConditionNotEqualToDeferred & 73;// 73
static +msoConditionNotEqualToHigh: Class<Office$MsoCondition__msoConditionNotEqualToHigh> & Office$MsoCondition__msoConditionNotEqualToHigh & 63;// 63
static +msoConditionNotEqualToInProgress: Class<Office$MsoCondition__msoConditionNotEqualToInProgress> & Office$MsoCondition__msoConditionNotEqualToInProgress & 70;// 70
static +msoConditionNotEqualToLow: Class<Office$MsoCondition__msoConditionNotEqualToLow> & Office$MsoCondition__msoConditionNotEqualToLow & 61;// 61
static +msoConditionNotEqualToNormal: Class<Office$MsoCondition__msoConditionNotEqualToNormal> & Office$MsoCondition__msoConditionNotEqualToNormal & 62;// 62
static +msoConditionNotEqualToNotStarted: Class<Office$MsoCondition__msoConditionNotEqualToNotStarted> & Office$MsoCondition__msoConditionNotEqualToNotStarted & 69;// 69
static +msoConditionNotEqualToWaitingForSomeoneElse: Class<Office$MsoCondition__msoConditionNotEqualToWaitingForSomeoneElse> & Office$MsoCondition__msoConditionNotEqualToWaitingForSomeoneElse & 72;// 72
static +msoConditionOn: Class<Office$MsoCondition__msoConditionOn> & Office$MsoCondition__msoConditionOn & 27;// 27
static +msoConditionOnOrAfter: Class<Office$MsoCondition__msoConditionOnOrAfter> & Office$MsoCondition__msoConditionOnOrAfter & 28;// 28
static +msoConditionOnOrBefore: Class<Office$MsoCondition__msoConditionOnOrBefore> & Office$MsoCondition__msoConditionOnOrBefore & 29;// 29
static +msoConditionThisMonth: Class<Office$MsoCondition__msoConditionThisMonth> & Office$MsoCondition__msoConditionThisMonth & 23;// 23
static +msoConditionThisWeek: Class<Office$MsoCondition__msoConditionThisWeek> & Office$MsoCondition__msoConditionThisWeek & 20;// 20
static +msoConditionToday: Class<Office$MsoCondition__msoConditionToday> & Office$MsoCondition__msoConditionToday & 17;// 17
static +msoConditionTomorrow: Class<Office$MsoCondition__msoConditionTomorrow> & Office$MsoCondition__msoConditionTomorrow & 18;// 18
static +msoConditionYesterday: Class<Office$MsoCondition__msoConditionYesterday> & Office$MsoCondition__msoConditionYesterday & 16;// 16

}

declare class Office$MsoCondition__msoConditionAnyNumberBetween mixins Office$MsoCondition {}
declare class Office$MsoCondition__msoConditionAnytime mixins Office$MsoCondition {}
declare class Office$MsoCondition__msoConditionAnytimeBetween mixins Office$MsoCondition {}
declare class Office$MsoCondition__msoConditionAtLeast mixins Office$MsoCondition {}
declare class Office$MsoCondition__msoConditionAtMost mixins Office$MsoCondition {}
declare class Office$MsoCondition__msoConditionBeginsWith mixins Office$MsoCondition {}
declare class Office$MsoCondition__msoConditionDoesNotEqual mixins Office$MsoCondition {}
declare class Office$MsoCondition__msoConditionEndsWith mixins Office$MsoCondition {}
declare class Office$MsoCondition__msoConditionEquals mixins Office$MsoCondition {}
declare class Office$MsoCondition__msoConditionEqualsCompleted mixins Office$MsoCondition {}
declare class Office$MsoCondition__msoConditionEqualsDeferred mixins Office$MsoCondition {}
declare class Office$MsoCondition__msoConditionEqualsHigh mixins Office$MsoCondition {}
declare class Office$MsoCondition__msoConditionEqualsInProgress mixins Office$MsoCondition {}
declare class Office$MsoCondition__msoConditionEqualsLow mixins Office$MsoCondition {}
declare class Office$MsoCondition__msoConditionEqualsNormal mixins Office$MsoCondition {}
declare class Office$MsoCondition__msoConditionEqualsNotStarted mixins Office$MsoCondition {}
declare class Office$MsoCondition__msoConditionEqualsWaitingForSomeoneElse mixins Office$MsoCondition {}
declare class Office$MsoCondition__msoConditionFileTypeAllFiles mixins Office$MsoCondition {}
declare class Office$MsoCondition__msoConditionFileTypeBinders mixins Office$MsoCondition {}
declare class Office$MsoCondition__msoConditionFileTypeCalendarItem mixins Office$MsoCondition {}
declare class Office$MsoCondition__msoConditionFileTypeContactItem mixins Office$MsoCondition {}
declare class Office$MsoCondition__msoConditionFileTypeDatabases mixins Office$MsoCondition {}
declare class Office$MsoCondition__msoConditionFileTypeDataConnectionFiles mixins Office$MsoCondition {}
declare class Office$MsoCondition__msoConditionFileTypeDesignerFiles mixins Office$MsoCondition {}
declare class Office$MsoCondition__msoConditionFileTypeDocumentImagingFiles mixins Office$MsoCondition {}
declare class Office$MsoCondition__msoConditionFileTypeExcelWorkbooks mixins Office$MsoCondition {}
declare class Office$MsoCondition__msoConditionFileTypeJournalItem mixins Office$MsoCondition {}
declare class Office$MsoCondition__msoConditionFileTypeMailItem mixins Office$MsoCondition {}
declare class Office$MsoCondition__msoConditionFileTypeNoteItem mixins Office$MsoCondition {}
declare class Office$MsoCondition__msoConditionFileTypeOfficeFiles mixins Office$MsoCondition {}
declare class Office$MsoCondition__msoConditionFileTypeOutlookItems mixins Office$MsoCondition {}
declare class Office$MsoCondition__msoConditionFileTypePhotoDrawFiles mixins Office$MsoCondition {}
declare class Office$MsoCondition__msoConditionFileTypePowerPointPresentations mixins Office$MsoCondition {}
declare class Office$MsoCondition__msoConditionFileTypeProjectFiles mixins Office$MsoCondition {}
declare class Office$MsoCondition__msoConditionFileTypePublisherFiles mixins Office$MsoCondition {}
declare class Office$MsoCondition__msoConditionFileTypeTaskItem mixins Office$MsoCondition {}
declare class Office$MsoCondition__msoConditionFileTypeTemplates mixins Office$MsoCondition {}
declare class Office$MsoCondition__msoConditionFileTypeVisioFiles mixins Office$MsoCondition {}
declare class Office$MsoCondition__msoConditionFileTypeWebPages mixins Office$MsoCondition {}
declare class Office$MsoCondition__msoConditionFileTypeWordDocuments mixins Office$MsoCondition {}
declare class Office$MsoCondition__msoConditionFreeText mixins Office$MsoCondition {}
declare class Office$MsoCondition__msoConditionIncludes mixins Office$MsoCondition {}
declare class Office$MsoCondition__msoConditionIncludesFormsOf mixins Office$MsoCondition {}
declare class Office$MsoCondition__msoConditionIncludesNearEachOther mixins Office$MsoCondition {}
declare class Office$MsoCondition__msoConditionIncludesPhrase mixins Office$MsoCondition {}
declare class Office$MsoCondition__msoConditionInTheLast mixins Office$MsoCondition {}
declare class Office$MsoCondition__msoConditionInTheNext mixins Office$MsoCondition {}
declare class Office$MsoCondition__msoConditionIsExactly mixins Office$MsoCondition {}
declare class Office$MsoCondition__msoConditionIsNo mixins Office$MsoCondition {}
declare class Office$MsoCondition__msoConditionIsNot mixins Office$MsoCondition {}
declare class Office$MsoCondition__msoConditionIsYes mixins Office$MsoCondition {}
declare class Office$MsoCondition__msoConditionLastMonth mixins Office$MsoCondition {}
declare class Office$MsoCondition__msoConditionLastWeek mixins Office$MsoCondition {}
declare class Office$MsoCondition__msoConditionLessThan mixins Office$MsoCondition {}
declare class Office$MsoCondition__msoConditionMoreThan mixins Office$MsoCondition {}
declare class Office$MsoCondition__msoConditionNextMonth mixins Office$MsoCondition {}
declare class Office$MsoCondition__msoConditionNextWeek mixins Office$MsoCondition {}
declare class Office$MsoCondition__msoConditionNotEqualToCompleted mixins Office$MsoCondition {}
declare class Office$MsoCondition__msoConditionNotEqualToDeferred mixins Office$MsoCondition {}
declare class Office$MsoCondition__msoConditionNotEqualToHigh mixins Office$MsoCondition {}
declare class Office$MsoCondition__msoConditionNotEqualToInProgress mixins Office$MsoCondition {}
declare class Office$MsoCondition__msoConditionNotEqualToLow mixins Office$MsoCondition {}
declare class Office$MsoCondition__msoConditionNotEqualToNormal mixins Office$MsoCondition {}
declare class Office$MsoCondition__msoConditionNotEqualToNotStarted mixins Office$MsoCondition {}
declare class Office$MsoCondition__msoConditionNotEqualToWaitingForSomeoneElse mixins Office$MsoCondition {}
declare class Office$MsoCondition__msoConditionOn mixins Office$MsoCondition {}
declare class Office$MsoCondition__msoConditionOnOrAfter mixins Office$MsoCondition {}
declare class Office$MsoCondition__msoConditionOnOrBefore mixins Office$MsoCondition {}
declare class Office$MsoCondition__msoConditionThisMonth mixins Office$MsoCondition {}
declare class Office$MsoCondition__msoConditionThisWeek mixins Office$MsoCondition {}
declare class Office$MsoCondition__msoConditionToday mixins Office$MsoCondition {}
declare class Office$MsoCondition__msoConditionTomorrow mixins Office$MsoCondition {}
declare class Office$MsoCondition__msoConditionYesterday mixins Office$MsoCondition {}


declare  class Office$MsoConnector {
  constructor(...args: empty): mixed;
static +msoConnectorAnd: Class<Office$MsoConnector__msoConnectorAnd> & Office$MsoConnector__msoConnectorAnd & 1;// 1
static +msoConnectorOr: Class<Office$MsoConnector__msoConnectorOr> & Office$MsoConnector__msoConnectorOr & 2;// 2

}

declare class Office$MsoConnector__msoConnectorAnd mixins Office$MsoConnector {}
declare class Office$MsoConnector__msoConnectorOr mixins Office$MsoConnector {}


declare  class Office$MsoConnectorType {
  constructor(...args: empty): mixed;
static +msoConnectorCurve: Class<Office$MsoConnectorType__msoConnectorCurve> & Office$MsoConnectorType__msoConnectorCurve & 3;// 3
static +msoConnectorElbow: Class<Office$MsoConnectorType__msoConnectorElbow> & Office$MsoConnectorType__msoConnectorElbow & 2;// 2
static +msoConnectorStraight: Class<Office$MsoConnectorType__msoConnectorStraight> & Office$MsoConnectorType__msoConnectorStraight & 1;// 1
static +msoConnectorTypeMixed: Class<Office$MsoConnectorType__msoConnectorTypeMixed> & Office$MsoConnectorType__msoConnectorTypeMixed & -2;// -2

}

declare class Office$MsoConnectorType__msoConnectorCurve mixins Office$MsoConnectorType {}
declare class Office$MsoConnectorType__msoConnectorElbow mixins Office$MsoConnectorType {}
declare class Office$MsoConnectorType__msoConnectorStraight mixins Office$MsoConnectorType {}
declare class Office$MsoConnectorType__msoConnectorTypeMixed mixins Office$MsoConnectorType {}


declare  class Office$MsoContactCardAddressType {
  constructor(...args: empty): mixed;
static +msoContactCardAddressTypeIM: Class<Office$MsoContactCardAddressType__msoContactCardAddressTypeIM> & Office$MsoContactCardAddressType__msoContactCardAddressTypeIM & 3;// 3
static +msoContactCardAddressTypeOutlook: Class<Office$MsoContactCardAddressType__msoContactCardAddressTypeOutlook> & Office$MsoContactCardAddressType__msoContactCardAddressTypeOutlook & 1;// 1
static +msoContactCardAddressTypeSMTP: Class<Office$MsoContactCardAddressType__msoContactCardAddressTypeSMTP> & Office$MsoContactCardAddressType__msoContactCardAddressTypeSMTP & 2;// 2
static +msoContactCardAddressTypeUnknown: Class<Office$MsoContactCardAddressType__msoContactCardAddressTypeUnknown> & Office$MsoContactCardAddressType__msoContactCardAddressTypeUnknown & 0;// 0

}

declare class Office$MsoContactCardAddressType__msoContactCardAddressTypeIM mixins Office$MsoContactCardAddressType {}
declare class Office$MsoContactCardAddressType__msoContactCardAddressTypeOutlook mixins Office$MsoContactCardAddressType {}
declare class Office$MsoContactCardAddressType__msoContactCardAddressTypeSMTP mixins Office$MsoContactCardAddressType {}
declare class Office$MsoContactCardAddressType__msoContactCardAddressTypeUnknown mixins Office$MsoContactCardAddressType {}


declare  class Office$MsoContactCardStyle {
  constructor(...args: empty): mixed;
static +msoContactCardFull: Class<Office$MsoContactCardStyle__msoContactCardFull> & Office$MsoContactCardStyle__msoContactCardFull & 1;// 1
static +msoContactCardHover: Class<Office$MsoContactCardStyle__msoContactCardHover> & Office$MsoContactCardStyle__msoContactCardHover & 0;// 0

}

declare class Office$MsoContactCardStyle__msoContactCardFull mixins Office$MsoContactCardStyle {}
declare class Office$MsoContactCardStyle__msoContactCardHover mixins Office$MsoContactCardStyle {}


declare  class Office$MsoContactCardType {
  constructor(...args: empty): mixed;
static +msoContactCardTypeEnterpriseContact: Class<Office$MsoContactCardType__msoContactCardTypeEnterpriseContact> & Office$MsoContactCardType__msoContactCardTypeEnterpriseContact & 0;// 0
static +msoContactCardTypeEnterpriseGroup: Class<Office$MsoContactCardType__msoContactCardTypeEnterpriseGroup> & Office$MsoContactCardType__msoContactCardTypeEnterpriseGroup & 3;// 3
static +msoContactCardTypePersonalContact: Class<Office$MsoContactCardType__msoContactCardTypePersonalContact> & Office$MsoContactCardType__msoContactCardTypePersonalContact & 1;// 1
static +msoContactCardTypePersonalDistributionList: Class<Office$MsoContactCardType__msoContactCardTypePersonalDistributionList> & Office$MsoContactCardType__msoContactCardTypePersonalDistributionList & 4;// 4
static +msoContactCardTypeUnknownContact: Class<Office$MsoContactCardType__msoContactCardTypeUnknownContact> & Office$MsoContactCardType__msoContactCardTypeUnknownContact & 2;// 2

}

declare class Office$MsoContactCardType__msoContactCardTypeEnterpriseContact mixins Office$MsoContactCardType {}
declare class Office$MsoContactCardType__msoContactCardTypeEnterpriseGroup mixins Office$MsoContactCardType {}
declare class Office$MsoContactCardType__msoContactCardTypePersonalContact mixins Office$MsoContactCardType {}
declare class Office$MsoContactCardType__msoContactCardTypePersonalDistributionList mixins Office$MsoContactCardType {}
declare class Office$MsoContactCardType__msoContactCardTypeUnknownContact mixins Office$MsoContactCardType {}


declare  class Office$MsoControlOLEUsage {
  constructor(...args: empty): mixed;
static +msoControlOLEUsageBoth: Class<Office$MsoControlOLEUsage__msoControlOLEUsageBoth> & Office$MsoControlOLEUsage__msoControlOLEUsageBoth & 3;// 3
static +msoControlOLEUsageClient: Class<Office$MsoControlOLEUsage__msoControlOLEUsageClient> & Office$MsoControlOLEUsage__msoControlOLEUsageClient & 2;// 2
static +msoControlOLEUsageNeither: Class<Office$MsoControlOLEUsage__msoControlOLEUsageNeither> & Office$MsoControlOLEUsage__msoControlOLEUsageNeither & 0;// 0
static +msoControlOLEUsageServer: Class<Office$MsoControlOLEUsage__msoControlOLEUsageServer> & Office$MsoControlOLEUsage__msoControlOLEUsageServer & 1;// 1

}

declare class Office$MsoControlOLEUsage__msoControlOLEUsageBoth mixins Office$MsoControlOLEUsage {}
declare class Office$MsoControlOLEUsage__msoControlOLEUsageClient mixins Office$MsoControlOLEUsage {}
declare class Office$MsoControlOLEUsage__msoControlOLEUsageNeither mixins Office$MsoControlOLEUsage {}
declare class Office$MsoControlOLEUsage__msoControlOLEUsageServer mixins Office$MsoControlOLEUsage {}


declare  class Office$MsoControlType {
  constructor(...args: empty): mixed;
static +msoControlActiveX: Class<Office$MsoControlType__msoControlActiveX> & Office$MsoControlType__msoControlActiveX & 22;// 22
static +msoControlAutoCompleteCombo: Class<Office$MsoControlType__msoControlAutoCompleteCombo> & Office$MsoControlType__msoControlAutoCompleteCombo & 26;// 26
static +msoControlButton: Class<Office$MsoControlType__msoControlButton> & Office$MsoControlType__msoControlButton & 1;// 1
static +msoControlButtonDropdown: Class<Office$MsoControlType__msoControlButtonDropdown> & Office$MsoControlType__msoControlButtonDropdown & 5;// 5
static +msoControlButtonPopup: Class<Office$MsoControlType__msoControlButtonPopup> & Office$MsoControlType__msoControlButtonPopup & 12;// 12
static +msoControlComboBox: Class<Office$MsoControlType__msoControlComboBox> & Office$MsoControlType__msoControlComboBox & 4;// 4
static +msoControlCustom: Class<Office$MsoControlType__msoControlCustom> & Office$MsoControlType__msoControlCustom & 0;// 0
static +msoControlDropdown: Class<Office$MsoControlType__msoControlDropdown> & Office$MsoControlType__msoControlDropdown & 3;// 3
static +msoControlEdit: Class<Office$MsoControlType__msoControlEdit> & Office$MsoControlType__msoControlEdit & 2;// 2
static +msoControlExpandingGrid: Class<Office$MsoControlType__msoControlExpandingGrid> & Office$MsoControlType__msoControlExpandingGrid & 16;// 16
static +msoControlGauge: Class<Office$MsoControlType__msoControlGauge> & Office$MsoControlType__msoControlGauge & 19;// 19
static +msoControlGenericDropdown: Class<Office$MsoControlType__msoControlGenericDropdown> & Office$MsoControlType__msoControlGenericDropdown & 8;// 8
static +msoControlGraphicCombo: Class<Office$MsoControlType__msoControlGraphicCombo> & Office$MsoControlType__msoControlGraphicCombo & 20;// 20
static +msoControlGraphicDropdown: Class<Office$MsoControlType__msoControlGraphicDropdown> & Office$MsoControlType__msoControlGraphicDropdown & 9;// 9
static +msoControlGraphicPopup: Class<Office$MsoControlType__msoControlGraphicPopup> & Office$MsoControlType__msoControlGraphicPopup & 11;// 11
static +msoControlGrid: Class<Office$MsoControlType__msoControlGrid> & Office$MsoControlType__msoControlGrid & 18;// 18
static +msoControlLabel: Class<Office$MsoControlType__msoControlLabel> & Office$MsoControlType__msoControlLabel & 15;// 15
static +msoControlLabelEx: Class<Office$MsoControlType__msoControlLabelEx> & Office$MsoControlType__msoControlLabelEx & 24;// 24
static +msoControlOCXDropdown: Class<Office$MsoControlType__msoControlOCXDropdown> & Office$MsoControlType__msoControlOCXDropdown & 7;// 7
static +msoControlPane: Class<Office$MsoControlType__msoControlPane> & Office$MsoControlType__msoControlPane & 21;// 21
static +msoControlPopup: Class<Office$MsoControlType__msoControlPopup> & Office$MsoControlType__msoControlPopup & 10;// 10
static +msoControlSpinner: Class<Office$MsoControlType__msoControlSpinner> & Office$MsoControlType__msoControlSpinner & 23;// 23
static +msoControlSplitButtonMRUPopup: Class<Office$MsoControlType__msoControlSplitButtonMRUPopup> & Office$MsoControlType__msoControlSplitButtonMRUPopup & 14;// 14
static +msoControlSplitButtonPopup: Class<Office$MsoControlType__msoControlSplitButtonPopup> & Office$MsoControlType__msoControlSplitButtonPopup & 13;// 13
static +msoControlSplitDropdown: Class<Office$MsoControlType__msoControlSplitDropdown> & Office$MsoControlType__msoControlSplitDropdown & 6;// 6
static +msoControlSplitExpandingGrid: Class<Office$MsoControlType__msoControlSplitExpandingGrid> & Office$MsoControlType__msoControlSplitExpandingGrid & 17;// 17
static +msoControlWorkPane: Class<Office$MsoControlType__msoControlWorkPane> & Office$MsoControlType__msoControlWorkPane & 25;// 25

}

declare class Office$MsoControlType__msoControlActiveX mixins Office$MsoControlType {}
declare class Office$MsoControlType__msoControlAutoCompleteCombo mixins Office$MsoControlType {}
declare class Office$MsoControlType__msoControlButton mixins Office$MsoControlType {}
declare class Office$MsoControlType__msoControlButtonDropdown mixins Office$MsoControlType {}
declare class Office$MsoControlType__msoControlButtonPopup mixins Office$MsoControlType {}
declare class Office$MsoControlType__msoControlComboBox mixins Office$MsoControlType {}
declare class Office$MsoControlType__msoControlCustom mixins Office$MsoControlType {}
declare class Office$MsoControlType__msoControlDropdown mixins Office$MsoControlType {}
declare class Office$MsoControlType__msoControlEdit mixins Office$MsoControlType {}
declare class Office$MsoControlType__msoControlExpandingGrid mixins Office$MsoControlType {}
declare class Office$MsoControlType__msoControlGauge mixins Office$MsoControlType {}
declare class Office$MsoControlType__msoControlGenericDropdown mixins Office$MsoControlType {}
declare class Office$MsoControlType__msoControlGraphicCombo mixins Office$MsoControlType {}
declare class Office$MsoControlType__msoControlGraphicDropdown mixins Office$MsoControlType {}
declare class Office$MsoControlType__msoControlGraphicPopup mixins Office$MsoControlType {}
declare class Office$MsoControlType__msoControlGrid mixins Office$MsoControlType {}
declare class Office$MsoControlType__msoControlLabel mixins Office$MsoControlType {}
declare class Office$MsoControlType__msoControlLabelEx mixins Office$MsoControlType {}
declare class Office$MsoControlType__msoControlOCXDropdown mixins Office$MsoControlType {}
declare class Office$MsoControlType__msoControlPane mixins Office$MsoControlType {}
declare class Office$MsoControlType__msoControlPopup mixins Office$MsoControlType {}
declare class Office$MsoControlType__msoControlSpinner mixins Office$MsoControlType {}
declare class Office$MsoControlType__msoControlSplitButtonMRUPopup mixins Office$MsoControlType {}
declare class Office$MsoControlType__msoControlSplitButtonPopup mixins Office$MsoControlType {}
declare class Office$MsoControlType__msoControlSplitDropdown mixins Office$MsoControlType {}
declare class Office$MsoControlType__msoControlSplitExpandingGrid mixins Office$MsoControlType {}
declare class Office$MsoControlType__msoControlWorkPane mixins Office$MsoControlType {}


declare  class Office$MsoCTPDockPosition {
  constructor(...args: empty): mixed;
static +msoCTPDockPositionBottom: Class<Office$MsoCTPDockPosition__msoCTPDockPositionBottom> & Office$MsoCTPDockPosition__msoCTPDockPositionBottom & 3;// 3
static +msoCTPDockPositionFloating: Class<Office$MsoCTPDockPosition__msoCTPDockPositionFloating> & Office$MsoCTPDockPosition__msoCTPDockPositionFloating & 4;// 4
static +msoCTPDockPositionLeft: Class<Office$MsoCTPDockPosition__msoCTPDockPositionLeft> & Office$MsoCTPDockPosition__msoCTPDockPositionLeft & 0;// 0
static +msoCTPDockPositionRight: Class<Office$MsoCTPDockPosition__msoCTPDockPositionRight> & Office$MsoCTPDockPosition__msoCTPDockPositionRight & 2;// 2
static +msoCTPDockPositionTop: Class<Office$MsoCTPDockPosition__msoCTPDockPositionTop> & Office$MsoCTPDockPosition__msoCTPDockPositionTop & 1;// 1

}

declare class Office$MsoCTPDockPosition__msoCTPDockPositionBottom mixins Office$MsoCTPDockPosition {}
declare class Office$MsoCTPDockPosition__msoCTPDockPositionFloating mixins Office$MsoCTPDockPosition {}
declare class Office$MsoCTPDockPosition__msoCTPDockPositionLeft mixins Office$MsoCTPDockPosition {}
declare class Office$MsoCTPDockPosition__msoCTPDockPositionRight mixins Office$MsoCTPDockPosition {}
declare class Office$MsoCTPDockPosition__msoCTPDockPositionTop mixins Office$MsoCTPDockPosition {}


declare  class Office$MsoCTPDockPositionRestrict {
  constructor(...args: empty): mixed;
static +msoCTPDockPositionRestrictNoChange: Class<Office$MsoCTPDockPositionRestrict__msoCTPDockPositionRestrictNoChange> & Office$MsoCTPDockPositionRestrict__msoCTPDockPositionRestrictNoChange & 1;// 1
static +msoCTPDockPositionRestrictNoHorizontal: Class<Office$MsoCTPDockPositionRestrict__msoCTPDockPositionRestrictNoHorizontal> & Office$MsoCTPDockPositionRestrict__msoCTPDockPositionRestrictNoHorizontal & 2;// 2
static +msoCTPDockPositionRestrictNone: Class<Office$MsoCTPDockPositionRestrict__msoCTPDockPositionRestrictNone> & Office$MsoCTPDockPositionRestrict__msoCTPDockPositionRestrictNone & 0;// 0
static +msoCTPDockPositionRestrictNoVertical: Class<Office$MsoCTPDockPositionRestrict__msoCTPDockPositionRestrictNoVertical> & Office$MsoCTPDockPositionRestrict__msoCTPDockPositionRestrictNoVertical & 3;// 3

}

declare class Office$MsoCTPDockPositionRestrict__msoCTPDockPositionRestrictNoChange mixins Office$MsoCTPDockPositionRestrict {}
declare class Office$MsoCTPDockPositionRestrict__msoCTPDockPositionRestrictNoHorizontal mixins Office$MsoCTPDockPositionRestrict {}
declare class Office$MsoCTPDockPositionRestrict__msoCTPDockPositionRestrictNone mixins Office$MsoCTPDockPositionRestrict {}
declare class Office$MsoCTPDockPositionRestrict__msoCTPDockPositionRestrictNoVertical mixins Office$MsoCTPDockPositionRestrict {}


declare  class Office$MsoCustomXMLNodeType {
  constructor(...args: empty): mixed;
static +msoCustomXMLNodeAttribute: Class<Office$MsoCustomXMLNodeType__msoCustomXMLNodeAttribute> & Office$MsoCustomXMLNodeType__msoCustomXMLNodeAttribute & 2;// 2
static +msoCustomXMLNodeCData: Class<Office$MsoCustomXMLNodeType__msoCustomXMLNodeCData> & Office$MsoCustomXMLNodeType__msoCustomXMLNodeCData & 4;// 4
static +msoCustomXMLNodeComment: Class<Office$MsoCustomXMLNodeType__msoCustomXMLNodeComment> & Office$MsoCustomXMLNodeType__msoCustomXMLNodeComment & 8;// 8
static +msoCustomXMLNodeDocument: Class<Office$MsoCustomXMLNodeType__msoCustomXMLNodeDocument> & Office$MsoCustomXMLNodeType__msoCustomXMLNodeDocument & 9;// 9
static +msoCustomXMLNodeElement: Class<Office$MsoCustomXMLNodeType__msoCustomXMLNodeElement> & Office$MsoCustomXMLNodeType__msoCustomXMLNodeElement & 1;// 1
static +msoCustomXMLNodeProcessingInstruction: Class<Office$MsoCustomXMLNodeType__msoCustomXMLNodeProcessingInstruction> & Office$MsoCustomXMLNodeType__msoCustomXMLNodeProcessingInstruction & 7;// 7
static +msoCustomXMLNodeText: Class<Office$MsoCustomXMLNodeType__msoCustomXMLNodeText> & Office$MsoCustomXMLNodeType__msoCustomXMLNodeText & 3;// 3

}

declare class Office$MsoCustomXMLNodeType__msoCustomXMLNodeAttribute mixins Office$MsoCustomXMLNodeType {}
declare class Office$MsoCustomXMLNodeType__msoCustomXMLNodeCData mixins Office$MsoCustomXMLNodeType {}
declare class Office$MsoCustomXMLNodeType__msoCustomXMLNodeComment mixins Office$MsoCustomXMLNodeType {}
declare class Office$MsoCustomXMLNodeType__msoCustomXMLNodeDocument mixins Office$MsoCustomXMLNodeType {}
declare class Office$MsoCustomXMLNodeType__msoCustomXMLNodeElement mixins Office$MsoCustomXMLNodeType {}
declare class Office$MsoCustomXMLNodeType__msoCustomXMLNodeProcessingInstruction mixins Office$MsoCustomXMLNodeType {}
declare class Office$MsoCustomXMLNodeType__msoCustomXMLNodeText mixins Office$MsoCustomXMLNodeType {}


declare  class Office$MsoCustomXMLValidationErrorType {
  constructor(...args: empty): mixed;
static +msoCustomXMLValidationErrorAutomaticallyCleared: Class<Office$MsoCustomXMLValidationErrorType__msoCustomXMLValidationErrorAutomaticallyCleared> & Office$MsoCustomXMLValidationErrorType__msoCustomXMLValidationErrorAutomaticallyCleared & 1;// 1
static +msoCustomXMLValidationErrorManual: Class<Office$MsoCustomXMLValidationErrorType__msoCustomXMLValidationErrorManual> & Office$MsoCustomXMLValidationErrorType__msoCustomXMLValidationErrorManual & 2;// 2
static +msoCustomXMLValidationErrorSchemaGenerated: Class<Office$MsoCustomXMLValidationErrorType__msoCustomXMLValidationErrorSchemaGenerated> & Office$MsoCustomXMLValidationErrorType__msoCustomXMLValidationErrorSchemaGenerated & 0;// 0

}

declare class Office$MsoCustomXMLValidationErrorType__msoCustomXMLValidationErrorAutomaticallyCleared mixins Office$MsoCustomXMLValidationErrorType {}
declare class Office$MsoCustomXMLValidationErrorType__msoCustomXMLValidationErrorManual mixins Office$MsoCustomXMLValidationErrorType {}
declare class Office$MsoCustomXMLValidationErrorType__msoCustomXMLValidationErrorSchemaGenerated mixins Office$MsoCustomXMLValidationErrorType {}


declare  class Office$MsoDateTimeFormat {
  constructor(...args: empty): mixed;
static +msoDateTimeddddMMMMddyyyy: Class<Office$MsoDateTimeFormat__msoDateTimeddddMMMMddyyyy> & Office$MsoDateTimeFormat__msoDateTimeddddMMMMddyyyy & 2;// 2
static +msoDateTimedMMMMyyyy: Class<Office$MsoDateTimeFormat__msoDateTimedMMMMyyyy> & Office$MsoDateTimeFormat__msoDateTimedMMMMyyyy & 3;// 3
static +msoDateTimedMMMyy: Class<Office$MsoDateTimeFormat__msoDateTimedMMMyy> & Office$MsoDateTimeFormat__msoDateTimedMMMyy & 5;// 5
static +msoDateTimeFigureOut: Class<Office$MsoDateTimeFormat__msoDateTimeFigureOut> & Office$MsoDateTimeFormat__msoDateTimeFigureOut & 14;// 14
static +msoDateTimeFormatMixed: Class<Office$MsoDateTimeFormat__msoDateTimeFormatMixed> & Office$MsoDateTimeFormat__msoDateTimeFormatMixed & -2;// -2
static +msoDateTimeHmm: Class<Office$MsoDateTimeFormat__msoDateTimeHmm> & Office$MsoDateTimeFormat__msoDateTimeHmm & 10;// 10
static +msoDateTimehmmAMPM: Class<Office$MsoDateTimeFormat__msoDateTimehmmAMPM> & Office$MsoDateTimeFormat__msoDateTimehmmAMPM & 12;// 12
static +msoDateTimeHmmss: Class<Office$MsoDateTimeFormat__msoDateTimeHmmss> & Office$MsoDateTimeFormat__msoDateTimeHmmss & 11;// 11
static +msoDateTimehmmssAMPM: Class<Office$MsoDateTimeFormat__msoDateTimehmmssAMPM> & Office$MsoDateTimeFormat__msoDateTimehmmssAMPM & 13;// 13
static +msoDateTimeMdyy: Class<Office$MsoDateTimeFormat__msoDateTimeMdyy> & Office$MsoDateTimeFormat__msoDateTimeMdyy & 1;// 1
static +msoDateTimeMMddyyHmm: Class<Office$MsoDateTimeFormat__msoDateTimeMMddyyHmm> & Office$MsoDateTimeFormat__msoDateTimeMMddyyHmm & 8;// 8
static +msoDateTimeMMddyyhmmAMPM: Class<Office$MsoDateTimeFormat__msoDateTimeMMddyyhmmAMPM> & Office$MsoDateTimeFormat__msoDateTimeMMddyyhmmAMPM & 9;// 9
static +msoDateTimeMMMMdyyyy: Class<Office$MsoDateTimeFormat__msoDateTimeMMMMdyyyy> & Office$MsoDateTimeFormat__msoDateTimeMMMMdyyyy & 4;// 4
static +msoDateTimeMMMMyy: Class<Office$MsoDateTimeFormat__msoDateTimeMMMMyy> & Office$MsoDateTimeFormat__msoDateTimeMMMMyy & 6;// 6
static +msoDateTimeMMyy: Class<Office$MsoDateTimeFormat__msoDateTimeMMyy> & Office$MsoDateTimeFormat__msoDateTimeMMyy & 7;// 7

}

declare class Office$MsoDateTimeFormat__msoDateTimeddddMMMMddyyyy mixins Office$MsoDateTimeFormat {}
declare class Office$MsoDateTimeFormat__msoDateTimedMMMMyyyy mixins Office$MsoDateTimeFormat {}
declare class Office$MsoDateTimeFormat__msoDateTimedMMMyy mixins Office$MsoDateTimeFormat {}
declare class Office$MsoDateTimeFormat__msoDateTimeFigureOut mixins Office$MsoDateTimeFormat {}
declare class Office$MsoDateTimeFormat__msoDateTimeFormatMixed mixins Office$MsoDateTimeFormat {}
declare class Office$MsoDateTimeFormat__msoDateTimeHmm mixins Office$MsoDateTimeFormat {}
declare class Office$MsoDateTimeFormat__msoDateTimehmmAMPM mixins Office$MsoDateTimeFormat {}
declare class Office$MsoDateTimeFormat__msoDateTimeHmmss mixins Office$MsoDateTimeFormat {}
declare class Office$MsoDateTimeFormat__msoDateTimehmmssAMPM mixins Office$MsoDateTimeFormat {}
declare class Office$MsoDateTimeFormat__msoDateTimeMdyy mixins Office$MsoDateTimeFormat {}
declare class Office$MsoDateTimeFormat__msoDateTimeMMddyyHmm mixins Office$MsoDateTimeFormat {}
declare class Office$MsoDateTimeFormat__msoDateTimeMMddyyhmmAMPM mixins Office$MsoDateTimeFormat {}
declare class Office$MsoDateTimeFormat__msoDateTimeMMMMdyyyy mixins Office$MsoDateTimeFormat {}
declare class Office$MsoDateTimeFormat__msoDateTimeMMMMyy mixins Office$MsoDateTimeFormat {}
declare class Office$MsoDateTimeFormat__msoDateTimeMMyy mixins Office$MsoDateTimeFormat {}


declare  class Office$MsoDiagramNodeType {
  constructor(...args: empty): mixed;
static +msoDiagramAssistant: Class<Office$MsoDiagramNodeType__msoDiagramAssistant> & Office$MsoDiagramNodeType__msoDiagramAssistant & 2;// 2
static +msoDiagramNode: Class<Office$MsoDiagramNodeType__msoDiagramNode> & Office$MsoDiagramNodeType__msoDiagramNode & 1;// 1

}

declare class Office$MsoDiagramNodeType__msoDiagramAssistant mixins Office$MsoDiagramNodeType {}
declare class Office$MsoDiagramNodeType__msoDiagramNode mixins Office$MsoDiagramNodeType {}


declare  class Office$MsoDiagramType {
  constructor(...args: empty): mixed;
static +msoDiagramCycle: Class<Office$MsoDiagramType__msoDiagramCycle> & Office$MsoDiagramType__msoDiagramCycle & 2;// 2
static +msoDiagramMixed: Class<Office$MsoDiagramType__msoDiagramMixed> & Office$MsoDiagramType__msoDiagramMixed & -2;// -2
static +msoDiagramOrgChart: Class<Office$MsoDiagramType__msoDiagramOrgChart> & Office$MsoDiagramType__msoDiagramOrgChart & 1;// 1
static +msoDiagramPyramid: Class<Office$MsoDiagramType__msoDiagramPyramid> & Office$MsoDiagramType__msoDiagramPyramid & 4;// 4
static +msoDiagramRadial: Class<Office$MsoDiagramType__msoDiagramRadial> & Office$MsoDiagramType__msoDiagramRadial & 3;// 3
static +msoDiagramTarget: Class<Office$MsoDiagramType__msoDiagramTarget> & Office$MsoDiagramType__msoDiagramTarget & 6;// 6
static +msoDiagramVenn: Class<Office$MsoDiagramType__msoDiagramVenn> & Office$MsoDiagramType__msoDiagramVenn & 5;// 5

}

declare class Office$MsoDiagramType__msoDiagramCycle mixins Office$MsoDiagramType {}
declare class Office$MsoDiagramType__msoDiagramMixed mixins Office$MsoDiagramType {}
declare class Office$MsoDiagramType__msoDiagramOrgChart mixins Office$MsoDiagramType {}
declare class Office$MsoDiagramType__msoDiagramPyramid mixins Office$MsoDiagramType {}
declare class Office$MsoDiagramType__msoDiagramRadial mixins Office$MsoDiagramType {}
declare class Office$MsoDiagramType__msoDiagramTarget mixins Office$MsoDiagramType {}
declare class Office$MsoDiagramType__msoDiagramVenn mixins Office$MsoDiagramType {}


declare  class Office$MsoDistributeCmd {
  constructor(...args: empty): mixed;
static +msoDistributeHorizontally: Class<Office$MsoDistributeCmd__msoDistributeHorizontally> & Office$MsoDistributeCmd__msoDistributeHorizontally & 0;// 0
static +msoDistributeVertically: Class<Office$MsoDistributeCmd__msoDistributeVertically> & Office$MsoDistributeCmd__msoDistributeVertically & 1;// 1

}

declare class Office$MsoDistributeCmd__msoDistributeHorizontally mixins Office$MsoDistributeCmd {}
declare class Office$MsoDistributeCmd__msoDistributeVertically mixins Office$MsoDistributeCmd {}


declare  class Office$MsoDocInspectorStatus {
  constructor(...args: empty): mixed;
static +msoDocInspectorStatusDocOk: Class<Office$MsoDocInspectorStatus__msoDocInspectorStatusDocOk> & Office$MsoDocInspectorStatus__msoDocInspectorStatusDocOk & 0;// 0
static +msoDocInspectorStatusError: Class<Office$MsoDocInspectorStatus__msoDocInspectorStatusError> & Office$MsoDocInspectorStatus__msoDocInspectorStatusError & 2;// 2
static +msoDocInspectorStatusIssueFound: Class<Office$MsoDocInspectorStatus__msoDocInspectorStatusIssueFound> & Office$MsoDocInspectorStatus__msoDocInspectorStatusIssueFound & 1;// 1

}

declare class Office$MsoDocInspectorStatus__msoDocInspectorStatusDocOk mixins Office$MsoDocInspectorStatus {}
declare class Office$MsoDocInspectorStatus__msoDocInspectorStatusError mixins Office$MsoDocInspectorStatus {}
declare class Office$MsoDocInspectorStatus__msoDocInspectorStatusIssueFound mixins Office$MsoDocInspectorStatus {}


declare  class Office$MsoDocProperties {
  constructor(...args: empty): mixed;
static +msoPropertyTypeBoolean: Class<Office$MsoDocProperties__msoPropertyTypeBoolean> & Office$MsoDocProperties__msoPropertyTypeBoolean & 2;// 2
static +msoPropertyTypeDate: Class<Office$MsoDocProperties__msoPropertyTypeDate> & Office$MsoDocProperties__msoPropertyTypeDate & 3;// 3
static +msoPropertyTypeFloat: Class<Office$MsoDocProperties__msoPropertyTypeFloat> & Office$MsoDocProperties__msoPropertyTypeFloat & 5;// 5
static +msoPropertyTypeNumber: Class<Office$MsoDocProperties__msoPropertyTypeNumber> & Office$MsoDocProperties__msoPropertyTypeNumber & 1;// 1
static +msoPropertyTypeString: Class<Office$MsoDocProperties__msoPropertyTypeString> & Office$MsoDocProperties__msoPropertyTypeString & 4;// 4

}

declare class Office$MsoDocProperties__msoPropertyTypeBoolean mixins Office$MsoDocProperties {}
declare class Office$MsoDocProperties__msoPropertyTypeDate mixins Office$MsoDocProperties {}
declare class Office$MsoDocProperties__msoPropertyTypeFloat mixins Office$MsoDocProperties {}
declare class Office$MsoDocProperties__msoPropertyTypeNumber mixins Office$MsoDocProperties {}
declare class Office$MsoDocProperties__msoPropertyTypeString mixins Office$MsoDocProperties {}


declare  class Office$MsoEditingType {
  constructor(...args: empty): mixed;
static +msoEditingAuto: Class<Office$MsoEditingType__msoEditingAuto> & Office$MsoEditingType__msoEditingAuto & 0;// 0
static +msoEditingCorner: Class<Office$MsoEditingType__msoEditingCorner> & Office$MsoEditingType__msoEditingCorner & 1;// 1
static +msoEditingSmooth: Class<Office$MsoEditingType__msoEditingSmooth> & Office$MsoEditingType__msoEditingSmooth & 2;// 2
static +msoEditingSymmetric: Class<Office$MsoEditingType__msoEditingSymmetric> & Office$MsoEditingType__msoEditingSymmetric & 3;// 3

}

declare class Office$MsoEditingType__msoEditingAuto mixins Office$MsoEditingType {}
declare class Office$MsoEditingType__msoEditingCorner mixins Office$MsoEditingType {}
declare class Office$MsoEditingType__msoEditingSmooth mixins Office$MsoEditingType {}
declare class Office$MsoEditingType__msoEditingSymmetric mixins Office$MsoEditingType {}


declare  class Office$MsoEncoding {
  constructor(...args: empty): mixed;
static +msoEncodingArabic: Class<Office$MsoEncoding__msoEncodingArabic> & Office$MsoEncoding__msoEncodingArabic & 1256;// 1256
static +msoEncodingArabicASMO: Class<Office$MsoEncoding__msoEncodingArabicASMO> & Office$MsoEncoding__msoEncodingArabicASMO & 708;// 708
static +msoEncodingArabicAutoDetect: Class<Office$MsoEncoding__msoEncodingArabicAutoDetect> & Office$MsoEncoding__msoEncodingArabicAutoDetect & 51256;// 51256
static +msoEncodingArabicTransparentASMO: Class<Office$MsoEncoding__msoEncodingArabicTransparentASMO> & Office$MsoEncoding__msoEncodingArabicTransparentASMO & 720;// 720
static +msoEncodingAutoDetect: Class<Office$MsoEncoding__msoEncodingAutoDetect> & Office$MsoEncoding__msoEncodingAutoDetect & 50001;// 50001
static +msoEncodingBaltic: Class<Office$MsoEncoding__msoEncodingBaltic> & Office$MsoEncoding__msoEncodingBaltic & 1257;// 1257
static +msoEncodingCentralEuropean: Class<Office$MsoEncoding__msoEncodingCentralEuropean> & Office$MsoEncoding__msoEncodingCentralEuropean & 1250;// 1250
static +msoEncodingCyrillic: Class<Office$MsoEncoding__msoEncodingCyrillic> & Office$MsoEncoding__msoEncodingCyrillic & 1251;// 1251
static +msoEncodingCyrillicAutoDetect: Class<Office$MsoEncoding__msoEncodingCyrillicAutoDetect> & Office$MsoEncoding__msoEncodingCyrillicAutoDetect & 51251;// 51251
static +msoEncodingEBCDICArabic: Class<Office$MsoEncoding__msoEncodingEBCDICArabic> & Office$MsoEncoding__msoEncodingEBCDICArabic & 20420;// 20420
static +msoEncodingEBCDICDenmarkNorway: Class<Office$MsoEncoding__msoEncodingEBCDICDenmarkNorway> & Office$MsoEncoding__msoEncodingEBCDICDenmarkNorway & 20277;// 20277
static +msoEncodingEBCDICFinlandSweden: Class<Office$MsoEncoding__msoEncodingEBCDICFinlandSweden> & Office$MsoEncoding__msoEncodingEBCDICFinlandSweden & 20278;// 20278
static +msoEncodingEBCDICFrance: Class<Office$MsoEncoding__msoEncodingEBCDICFrance> & Office$MsoEncoding__msoEncodingEBCDICFrance & 20297;// 20297
static +msoEncodingEBCDICGermany: Class<Office$MsoEncoding__msoEncodingEBCDICGermany> & Office$MsoEncoding__msoEncodingEBCDICGermany & 20273;// 20273
static +msoEncodingEBCDICGreek: Class<Office$MsoEncoding__msoEncodingEBCDICGreek> & Office$MsoEncoding__msoEncodingEBCDICGreek & 20423;// 20423
static +msoEncodingEBCDICGreekModern: Class<Office$MsoEncoding__msoEncodingEBCDICGreekModern> & Office$MsoEncoding__msoEncodingEBCDICGreekModern & 875;// 875
static +msoEncodingEBCDICHebrew: Class<Office$MsoEncoding__msoEncodingEBCDICHebrew> & Office$MsoEncoding__msoEncodingEBCDICHebrew & 20424;// 20424
static +msoEncodingEBCDICIcelandic: Class<Office$MsoEncoding__msoEncodingEBCDICIcelandic> & Office$MsoEncoding__msoEncodingEBCDICIcelandic & 20871;// 20871
static +msoEncodingEBCDICInternational: Class<Office$MsoEncoding__msoEncodingEBCDICInternational> & Office$MsoEncoding__msoEncodingEBCDICInternational & 500;// 500
static +msoEncodingEBCDICItaly: Class<Office$MsoEncoding__msoEncodingEBCDICItaly> & Office$MsoEncoding__msoEncodingEBCDICItaly & 20280;// 20280
static +msoEncodingEBCDICJapaneseKatakanaExtended: Class<Office$MsoEncoding__msoEncodingEBCDICJapaneseKatakanaExtended> & Office$MsoEncoding__msoEncodingEBCDICJapaneseKatakanaExtended & 20290;// 20290
static +msoEncodingEBCDICJapaneseKatakanaExtendedAndJapanese: Class<Office$MsoEncoding__msoEncodingEBCDICJapaneseKatakanaExtendedAndJapanese> & Office$MsoEncoding__msoEncodingEBCDICJapaneseKatakanaExtendedAndJapanese & 50930;// 50930
static +msoEncodingEBCDICJapaneseLatinExtendedAndJapanese: Class<Office$MsoEncoding__msoEncodingEBCDICJapaneseLatinExtendedAndJapanese> & Office$MsoEncoding__msoEncodingEBCDICJapaneseLatinExtendedAndJapanese & 50939;// 50939
static +msoEncodingEBCDICKoreanExtended: Class<Office$MsoEncoding__msoEncodingEBCDICKoreanExtended> & Office$MsoEncoding__msoEncodingEBCDICKoreanExtended & 20833;// 20833
static +msoEncodingEBCDICKoreanExtendedAndKorean: Class<Office$MsoEncoding__msoEncodingEBCDICKoreanExtendedAndKorean> & Office$MsoEncoding__msoEncodingEBCDICKoreanExtendedAndKorean & 50933;// 50933
static +msoEncodingEBCDICLatinAmericaSpain: Class<Office$MsoEncoding__msoEncodingEBCDICLatinAmericaSpain> & Office$MsoEncoding__msoEncodingEBCDICLatinAmericaSpain & 20284;// 20284
static +msoEncodingEBCDICMultilingualROECELatin2: Class<Office$MsoEncoding__msoEncodingEBCDICMultilingualROECELatin2> & Office$MsoEncoding__msoEncodingEBCDICMultilingualROECELatin2 & 870;// 870
static +msoEncodingEBCDICRussian: Class<Office$MsoEncoding__msoEncodingEBCDICRussian> & Office$MsoEncoding__msoEncodingEBCDICRussian & 20880;// 20880
static +msoEncodingEBCDICSerbianBulgarian: Class<Office$MsoEncoding__msoEncodingEBCDICSerbianBulgarian> & Office$MsoEncoding__msoEncodingEBCDICSerbianBulgarian & 21025;// 21025
static +msoEncodingEBCDICSimplifiedChineseExtendedAndSimplifiedChinese: Class<Office$MsoEncoding__msoEncodingEBCDICSimplifiedChineseExtendedAndSimplifiedChinese> & Office$MsoEncoding__msoEncodingEBCDICSimplifiedChineseExtendedAndSimplifiedChinese & 50935;// 50935
static +msoEncodingEBCDICThai: Class<Office$MsoEncoding__msoEncodingEBCDICThai> & Office$MsoEncoding__msoEncodingEBCDICThai & 20838;// 20838
static +msoEncodingEBCDICTurkish: Class<Office$MsoEncoding__msoEncodingEBCDICTurkish> & Office$MsoEncoding__msoEncodingEBCDICTurkish & 20905;// 20905
static +msoEncodingEBCDICTurkishLatin5: Class<Office$MsoEncoding__msoEncodingEBCDICTurkishLatin5> & Office$MsoEncoding__msoEncodingEBCDICTurkishLatin5 & 1026;// 1026
static +msoEncodingEBCDICUnitedKingdom: Class<Office$MsoEncoding__msoEncodingEBCDICUnitedKingdom> & Office$MsoEncoding__msoEncodingEBCDICUnitedKingdom & 20285;// 20285
static +msoEncodingEBCDICUSCanada: Class<Office$MsoEncoding__msoEncodingEBCDICUSCanada> & Office$MsoEncoding__msoEncodingEBCDICUSCanada & 37;// 37
static +msoEncodingEBCDICUSCanadaAndJapanese: Class<Office$MsoEncoding__msoEncodingEBCDICUSCanadaAndJapanese> & Office$MsoEncoding__msoEncodingEBCDICUSCanadaAndJapanese & 50931;// 50931
static +msoEncodingEBCDICUSCanadaAndTraditionalChinese: Class<Office$MsoEncoding__msoEncodingEBCDICUSCanadaAndTraditionalChinese> & Office$MsoEncoding__msoEncodingEBCDICUSCanadaAndTraditionalChinese & 50937;// 50937
static +msoEncodingEUCChineseSimplifiedChinese: Class<Office$MsoEncoding__msoEncodingEUCChineseSimplifiedChinese> & Office$MsoEncoding__msoEncodingEUCChineseSimplifiedChinese & 51936;// 51936
static +msoEncodingEUCJapanese: Class<Office$MsoEncoding__msoEncodingEUCJapanese> & Office$MsoEncoding__msoEncodingEUCJapanese & 51932;// 51932
static +msoEncodingEUCKorean: Class<Office$MsoEncoding__msoEncodingEUCKorean> & Office$MsoEncoding__msoEncodingEUCKorean & 51949;// 51949
static +msoEncodingEUCTaiwaneseTraditionalChinese: Class<Office$MsoEncoding__msoEncodingEUCTaiwaneseTraditionalChinese> & Office$MsoEncoding__msoEncodingEUCTaiwaneseTraditionalChinese & 51950;// 51950
static +msoEncodingEuropa3: Class<Office$MsoEncoding__msoEncodingEuropa3> & Office$MsoEncoding__msoEncodingEuropa3 & 29001;// 29001
static +msoEncodingExtAlphaLowercase: Class<Office$MsoEncoding__msoEncodingExtAlphaLowercase> & Office$MsoEncoding__msoEncodingExtAlphaLowercase & 21027;// 21027
static +msoEncodingGreek: Class<Office$MsoEncoding__msoEncodingGreek> & Office$MsoEncoding__msoEncodingGreek & 1253;// 1253
static +msoEncodingGreekAutoDetect: Class<Office$MsoEncoding__msoEncodingGreekAutoDetect> & Office$MsoEncoding__msoEncodingGreekAutoDetect & 51253;// 51253
static +msoEncodingHebrew: Class<Office$MsoEncoding__msoEncodingHebrew> & Office$MsoEncoding__msoEncodingHebrew & 1255;// 1255
static +msoEncodingHZGBSimplifiedChinese: Class<Office$MsoEncoding__msoEncodingHZGBSimplifiedChinese> & Office$MsoEncoding__msoEncodingHZGBSimplifiedChinese & 52936;// 52936
static +msoEncodingIA5German: Class<Office$MsoEncoding__msoEncodingIA5German> & Office$MsoEncoding__msoEncodingIA5German & 20106;// 20106
static +msoEncodingIA5IRV: Class<Office$MsoEncoding__msoEncodingIA5IRV> & Office$MsoEncoding__msoEncodingIA5IRV & 20105;// 20105
static +msoEncodingIA5Norwegian: Class<Office$MsoEncoding__msoEncodingIA5Norwegian> & Office$MsoEncoding__msoEncodingIA5Norwegian & 20108;// 20108
static +msoEncodingIA5Swedish: Class<Office$MsoEncoding__msoEncodingIA5Swedish> & Office$MsoEncoding__msoEncodingIA5Swedish & 20107;// 20107
static +msoEncodingISCIIAssamese: Class<Office$MsoEncoding__msoEncodingISCIIAssamese> & Office$MsoEncoding__msoEncodingISCIIAssamese & 57006;// 57006
static +msoEncodingISCIIBengali: Class<Office$MsoEncoding__msoEncodingISCIIBengali> & Office$MsoEncoding__msoEncodingISCIIBengali & 57003;// 57003
static +msoEncodingISCIIDevanagari: Class<Office$MsoEncoding__msoEncodingISCIIDevanagari> & Office$MsoEncoding__msoEncodingISCIIDevanagari & 57002;// 57002
static +msoEncodingISCIIGujarati: Class<Office$MsoEncoding__msoEncodingISCIIGujarati> & Office$MsoEncoding__msoEncodingISCIIGujarati & 57010;// 57010
static +msoEncodingISCIIKannada: Class<Office$MsoEncoding__msoEncodingISCIIKannada> & Office$MsoEncoding__msoEncodingISCIIKannada & 57008;// 57008
static +msoEncodingISCIIMalayalam: Class<Office$MsoEncoding__msoEncodingISCIIMalayalam> & Office$MsoEncoding__msoEncodingISCIIMalayalam & 57009;// 57009
static +msoEncodingISCIIOriya: Class<Office$MsoEncoding__msoEncodingISCIIOriya> & Office$MsoEncoding__msoEncodingISCIIOriya & 57007;// 57007
static +msoEncodingISCIIPunjabi: Class<Office$MsoEncoding__msoEncodingISCIIPunjabi> & Office$MsoEncoding__msoEncodingISCIIPunjabi & 57011;// 57011
static +msoEncodingISCIITamil: Class<Office$MsoEncoding__msoEncodingISCIITamil> & Office$MsoEncoding__msoEncodingISCIITamil & 57004;// 57004
static +msoEncodingISCIITelugu: Class<Office$MsoEncoding__msoEncodingISCIITelugu> & Office$MsoEncoding__msoEncodingISCIITelugu & 57005;// 57005
static +msoEncodingISO2022CNSimplifiedChinese: Class<Office$MsoEncoding__msoEncodingISO2022CNSimplifiedChinese> & Office$MsoEncoding__msoEncodingISO2022CNSimplifiedChinese & 50229;// 50229
static +msoEncodingISO2022CNTraditionalChinese: Class<Office$MsoEncoding__msoEncodingISO2022CNTraditionalChinese> & Office$MsoEncoding__msoEncodingISO2022CNTraditionalChinese & 50227;// 50227
static +msoEncodingISO2022JPJISX02011989: Class<Office$MsoEncoding__msoEncodingISO2022JPJISX02011989> & Office$MsoEncoding__msoEncodingISO2022JPJISX02011989 & 50222;// 50222
static +msoEncodingISO2022JPJISX02021984: Class<Office$MsoEncoding__msoEncodingISO2022JPJISX02021984> & Office$MsoEncoding__msoEncodingISO2022JPJISX02021984 & 50221;// 50221
static +msoEncodingISO2022JPNoHalfwidthKatakana: Class<Office$MsoEncoding__msoEncodingISO2022JPNoHalfwidthKatakana> & Office$MsoEncoding__msoEncodingISO2022JPNoHalfwidthKatakana & 50220;// 50220
static +msoEncodingISO2022KR: Class<Office$MsoEncoding__msoEncodingISO2022KR> & Office$MsoEncoding__msoEncodingISO2022KR & 50225;// 50225
static +msoEncodingISO6937NonSpacingAccent: Class<Office$MsoEncoding__msoEncodingISO6937NonSpacingAccent> & Office$MsoEncoding__msoEncodingISO6937NonSpacingAccent & 20269;// 20269
static +msoEncodingISO885915Latin9: Class<Office$MsoEncoding__msoEncodingISO885915Latin9> & Office$MsoEncoding__msoEncodingISO885915Latin9 & 28605;// 28605
static +msoEncodingISO88591Latin1: Class<Office$MsoEncoding__msoEncodingISO88591Latin1> & Office$MsoEncoding__msoEncodingISO88591Latin1 & 28591;// 28591
static +msoEncodingISO88592CentralEurope: Class<Office$MsoEncoding__msoEncodingISO88592CentralEurope> & Office$MsoEncoding__msoEncodingISO88592CentralEurope & 28592;// 28592
static +msoEncodingISO88593Latin3: Class<Office$MsoEncoding__msoEncodingISO88593Latin3> & Office$MsoEncoding__msoEncodingISO88593Latin3 & 28593;// 28593
static +msoEncodingISO88594Baltic: Class<Office$MsoEncoding__msoEncodingISO88594Baltic> & Office$MsoEncoding__msoEncodingISO88594Baltic & 28594;// 28594
static +msoEncodingISO88595Cyrillic: Class<Office$MsoEncoding__msoEncodingISO88595Cyrillic> & Office$MsoEncoding__msoEncodingISO88595Cyrillic & 28595;// 28595
static +msoEncodingISO88596Arabic: Class<Office$MsoEncoding__msoEncodingISO88596Arabic> & Office$MsoEncoding__msoEncodingISO88596Arabic & 28596;// 28596
static +msoEncodingISO88597Greek: Class<Office$MsoEncoding__msoEncodingISO88597Greek> & Office$MsoEncoding__msoEncodingISO88597Greek & 28597;// 28597
static +msoEncodingISO88598Hebrew: Class<Office$MsoEncoding__msoEncodingISO88598Hebrew> & Office$MsoEncoding__msoEncodingISO88598Hebrew & 28598;// 28598
static +msoEncodingISO88598HebrewLogical: Class<Office$MsoEncoding__msoEncodingISO88598HebrewLogical> & Office$MsoEncoding__msoEncodingISO88598HebrewLogical & 38598;// 38598
static +msoEncodingISO88599Turkish: Class<Office$MsoEncoding__msoEncodingISO88599Turkish> & Office$MsoEncoding__msoEncodingISO88599Turkish & 28599;// 28599
static +msoEncodingJapaneseAutoDetect: Class<Office$MsoEncoding__msoEncodingJapaneseAutoDetect> & Office$MsoEncoding__msoEncodingJapaneseAutoDetect & 50932;// 50932
static +msoEncodingJapaneseShiftJIS: Class<Office$MsoEncoding__msoEncodingJapaneseShiftJIS> & Office$MsoEncoding__msoEncodingJapaneseShiftJIS & 932;// 932
static +msoEncodingKOI8R: Class<Office$MsoEncoding__msoEncodingKOI8R> & Office$MsoEncoding__msoEncodingKOI8R & 20866;// 20866
static +msoEncodingKOI8U: Class<Office$MsoEncoding__msoEncodingKOI8U> & Office$MsoEncoding__msoEncodingKOI8U & 21866;// 21866
static +msoEncodingKorean: Class<Office$MsoEncoding__msoEncodingKorean> & Office$MsoEncoding__msoEncodingKorean & 949;// 949
static +msoEncodingKoreanAutoDetect: Class<Office$MsoEncoding__msoEncodingKoreanAutoDetect> & Office$MsoEncoding__msoEncodingKoreanAutoDetect & 50949;// 50949
static +msoEncodingKoreanJohab: Class<Office$MsoEncoding__msoEncodingKoreanJohab> & Office$MsoEncoding__msoEncodingKoreanJohab & 1361;// 1361
static +msoEncodingMacArabic: Class<Office$MsoEncoding__msoEncodingMacArabic> & Office$MsoEncoding__msoEncodingMacArabic & 10004;// 10004
static +msoEncodingMacCroatia: Class<Office$MsoEncoding__msoEncodingMacCroatia> & Office$MsoEncoding__msoEncodingMacCroatia & 10082;// 10082
static +msoEncodingMacCyrillic: Class<Office$MsoEncoding__msoEncodingMacCyrillic> & Office$MsoEncoding__msoEncodingMacCyrillic & 10007;// 10007
static +msoEncodingMacGreek1: Class<Office$MsoEncoding__msoEncodingMacGreek1> & Office$MsoEncoding__msoEncodingMacGreek1 & 10006;// 10006
static +msoEncodingMacHebrew: Class<Office$MsoEncoding__msoEncodingMacHebrew> & Office$MsoEncoding__msoEncodingMacHebrew & 10005;// 10005
static +msoEncodingMacIcelandic: Class<Office$MsoEncoding__msoEncodingMacIcelandic> & Office$MsoEncoding__msoEncodingMacIcelandic & 10079;// 10079
static +msoEncodingMacJapanese: Class<Office$MsoEncoding__msoEncodingMacJapanese> & Office$MsoEncoding__msoEncodingMacJapanese & 10001;// 10001
static +msoEncodingMacKorean: Class<Office$MsoEncoding__msoEncodingMacKorean> & Office$MsoEncoding__msoEncodingMacKorean & 10003;// 10003
static +msoEncodingMacLatin2: Class<Office$MsoEncoding__msoEncodingMacLatin2> & Office$MsoEncoding__msoEncodingMacLatin2 & 10029;// 10029
static +msoEncodingMacRoman: Class<Office$MsoEncoding__msoEncodingMacRoman> & Office$MsoEncoding__msoEncodingMacRoman & 10000;// 10000
static +msoEncodingMacRomania: Class<Office$MsoEncoding__msoEncodingMacRomania> & Office$MsoEncoding__msoEncodingMacRomania & 10010;// 10010
static +msoEncodingMacSimplifiedChineseGB2312: Class<Office$MsoEncoding__msoEncodingMacSimplifiedChineseGB2312> & Office$MsoEncoding__msoEncodingMacSimplifiedChineseGB2312 & 10008;// 10008
static +msoEncodingMacTraditionalChineseBig5: Class<Office$MsoEncoding__msoEncodingMacTraditionalChineseBig5> & Office$MsoEncoding__msoEncodingMacTraditionalChineseBig5 & 10002;// 10002
static +msoEncodingMacTurkish: Class<Office$MsoEncoding__msoEncodingMacTurkish> & Office$MsoEncoding__msoEncodingMacTurkish & 10081;// 10081
static +msoEncodingMacUkraine: Class<Office$MsoEncoding__msoEncodingMacUkraine> & Office$MsoEncoding__msoEncodingMacUkraine & 10017;// 10017
static +msoEncodingOEMArabic: Class<Office$MsoEncoding__msoEncodingOEMArabic> & Office$MsoEncoding__msoEncodingOEMArabic & 864;// 864
static +msoEncodingOEMBaltic: Class<Office$MsoEncoding__msoEncodingOEMBaltic> & Office$MsoEncoding__msoEncodingOEMBaltic & 775;// 775
static +msoEncodingOEMCanadianFrench: Class<Office$MsoEncoding__msoEncodingOEMCanadianFrench> & Office$MsoEncoding__msoEncodingOEMCanadianFrench & 863;// 863
static +msoEncodingOEMCyrillic: Class<Office$MsoEncoding__msoEncodingOEMCyrillic> & Office$MsoEncoding__msoEncodingOEMCyrillic & 855;// 855
static +msoEncodingOEMCyrillicII: Class<Office$MsoEncoding__msoEncodingOEMCyrillicII> & Office$MsoEncoding__msoEncodingOEMCyrillicII & 866;// 866
static +msoEncodingOEMGreek437G: Class<Office$MsoEncoding__msoEncodingOEMGreek437G> & Office$MsoEncoding__msoEncodingOEMGreek437G & 737;// 737
static +msoEncodingOEMHebrew: Class<Office$MsoEncoding__msoEncodingOEMHebrew> & Office$MsoEncoding__msoEncodingOEMHebrew & 862;// 862
static +msoEncodingOEMIcelandic: Class<Office$MsoEncoding__msoEncodingOEMIcelandic> & Office$MsoEncoding__msoEncodingOEMIcelandic & 861;// 861
static +msoEncodingOEMModernGreek: Class<Office$MsoEncoding__msoEncodingOEMModernGreek> & Office$MsoEncoding__msoEncodingOEMModernGreek & 869;// 869
static +msoEncodingOEMMultilingualLatinI: Class<Office$MsoEncoding__msoEncodingOEMMultilingualLatinI> & Office$MsoEncoding__msoEncodingOEMMultilingualLatinI & 850;// 850
static +msoEncodingOEMMultilingualLatinII: Class<Office$MsoEncoding__msoEncodingOEMMultilingualLatinII> & Office$MsoEncoding__msoEncodingOEMMultilingualLatinII & 852;// 852
static +msoEncodingOEMNordic: Class<Office$MsoEncoding__msoEncodingOEMNordic> & Office$MsoEncoding__msoEncodingOEMNordic & 865;// 865
static +msoEncodingOEMPortuguese: Class<Office$MsoEncoding__msoEncodingOEMPortuguese> & Office$MsoEncoding__msoEncodingOEMPortuguese & 860;// 860
static +msoEncodingOEMTurkish: Class<Office$MsoEncoding__msoEncodingOEMTurkish> & Office$MsoEncoding__msoEncodingOEMTurkish & 857;// 857
static +msoEncodingOEMUnitedStates: Class<Office$MsoEncoding__msoEncodingOEMUnitedStates> & Office$MsoEncoding__msoEncodingOEMUnitedStates & 437;// 437
static +msoEncodingSimplifiedChineseAutoDetect: Class<Office$MsoEncoding__msoEncodingSimplifiedChineseAutoDetect> & Office$MsoEncoding__msoEncodingSimplifiedChineseAutoDetect & 50936;// 50936
static +msoEncodingSimplifiedChineseGB18030: Class<Office$MsoEncoding__msoEncodingSimplifiedChineseGB18030> & Office$MsoEncoding__msoEncodingSimplifiedChineseGB18030 & 54936;// 54936
static +msoEncodingSimplifiedChineseGBK: Class<Office$MsoEncoding__msoEncodingSimplifiedChineseGBK> & Office$MsoEncoding__msoEncodingSimplifiedChineseGBK & 936;// 936
static +msoEncodingT61: Class<Office$MsoEncoding__msoEncodingT61> & Office$MsoEncoding__msoEncodingT61 & 20261;// 20261
static +msoEncodingTaiwanCNS: Class<Office$MsoEncoding__msoEncodingTaiwanCNS> & Office$MsoEncoding__msoEncodingTaiwanCNS & 20000;// 20000
static +msoEncodingTaiwanEten: Class<Office$MsoEncoding__msoEncodingTaiwanEten> & Office$MsoEncoding__msoEncodingTaiwanEten & 20002;// 20002
static +msoEncodingTaiwanIBM5550: Class<Office$MsoEncoding__msoEncodingTaiwanIBM5550> & Office$MsoEncoding__msoEncodingTaiwanIBM5550 & 20003;// 20003
static +msoEncodingTaiwanTCA: Class<Office$MsoEncoding__msoEncodingTaiwanTCA> & Office$MsoEncoding__msoEncodingTaiwanTCA & 20001;// 20001
static +msoEncodingTaiwanTeleText: Class<Office$MsoEncoding__msoEncodingTaiwanTeleText> & Office$MsoEncoding__msoEncodingTaiwanTeleText & 20004;// 20004
static +msoEncodingTaiwanWang: Class<Office$MsoEncoding__msoEncodingTaiwanWang> & Office$MsoEncoding__msoEncodingTaiwanWang & 20005;// 20005
static +msoEncodingThai: Class<Office$MsoEncoding__msoEncodingThai> & Office$MsoEncoding__msoEncodingThai & 874;// 874
static +msoEncodingTraditionalChineseAutoDetect: Class<Office$MsoEncoding__msoEncodingTraditionalChineseAutoDetect> & Office$MsoEncoding__msoEncodingTraditionalChineseAutoDetect & 50950;// 50950
static +msoEncodingTraditionalChineseBig5: Class<Office$MsoEncoding__msoEncodingTraditionalChineseBig5> & Office$MsoEncoding__msoEncodingTraditionalChineseBig5 & 950;// 950
static +msoEncodingTurkish: Class<Office$MsoEncoding__msoEncodingTurkish> & Office$MsoEncoding__msoEncodingTurkish & 1254;// 1254
static +msoEncodingUnicodeBigEndian: Class<Office$MsoEncoding__msoEncodingUnicodeBigEndian> & Office$MsoEncoding__msoEncodingUnicodeBigEndian & 1201;// 1201
static +msoEncodingUnicodeLittleEndian: Class<Office$MsoEncoding__msoEncodingUnicodeLittleEndian> & Office$MsoEncoding__msoEncodingUnicodeLittleEndian & 1200;// 1200
static +msoEncodingUSASCII: Class<Office$MsoEncoding__msoEncodingUSASCII> & Office$MsoEncoding__msoEncodingUSASCII & 20127;// 20127
static +msoEncodingUTF7: Class<Office$MsoEncoding__msoEncodingUTF7> & Office$MsoEncoding__msoEncodingUTF7 & 65000;// 65000
static +msoEncodingUTF8: Class<Office$MsoEncoding__msoEncodingUTF8> & Office$MsoEncoding__msoEncodingUTF8 & 65001;// 65001
static +msoEncodingVietnamese: Class<Office$MsoEncoding__msoEncodingVietnamese> & Office$MsoEncoding__msoEncodingVietnamese & 1258;// 1258
static +msoEncodingWestern: Class<Office$MsoEncoding__msoEncodingWestern> & Office$MsoEncoding__msoEncodingWestern & 1252;// 1252

}

declare class Office$MsoEncoding__msoEncodingArabic mixins Office$MsoEncoding {}
declare class Office$MsoEncoding__msoEncodingArabicASMO mixins Office$MsoEncoding {}
declare class Office$MsoEncoding__msoEncodingArabicAutoDetect mixins Office$MsoEncoding {}
declare class Office$MsoEncoding__msoEncodingArabicTransparentASMO mixins Office$MsoEncoding {}
declare class Office$MsoEncoding__msoEncodingAutoDetect mixins Office$MsoEncoding {}
declare class Office$MsoEncoding__msoEncodingBaltic mixins Office$MsoEncoding {}
declare class Office$MsoEncoding__msoEncodingCentralEuropean mixins Office$MsoEncoding {}
declare class Office$MsoEncoding__msoEncodingCyrillic mixins Office$MsoEncoding {}
declare class Office$MsoEncoding__msoEncodingCyrillicAutoDetect mixins Office$MsoEncoding {}
declare class Office$MsoEncoding__msoEncodingEBCDICArabic mixins Office$MsoEncoding {}
declare class Office$MsoEncoding__msoEncodingEBCDICDenmarkNorway mixins Office$MsoEncoding {}
declare class Office$MsoEncoding__msoEncodingEBCDICFinlandSweden mixins Office$MsoEncoding {}
declare class Office$MsoEncoding__msoEncodingEBCDICFrance mixins Office$MsoEncoding {}
declare class Office$MsoEncoding__msoEncodingEBCDICGermany mixins Office$MsoEncoding {}
declare class Office$MsoEncoding__msoEncodingEBCDICGreek mixins Office$MsoEncoding {}
declare class Office$MsoEncoding__msoEncodingEBCDICGreekModern mixins Office$MsoEncoding {}
declare class Office$MsoEncoding__msoEncodingEBCDICHebrew mixins Office$MsoEncoding {}
declare class Office$MsoEncoding__msoEncodingEBCDICIcelandic mixins Office$MsoEncoding {}
declare class Office$MsoEncoding__msoEncodingEBCDICInternational mixins Office$MsoEncoding {}
declare class Office$MsoEncoding__msoEncodingEBCDICItaly mixins Office$MsoEncoding {}
declare class Office$MsoEncoding__msoEncodingEBCDICJapaneseKatakanaExtended mixins Office$MsoEncoding {}
declare class Office$MsoEncoding__msoEncodingEBCDICJapaneseKatakanaExtendedAndJapanese mixins Office$MsoEncoding {}
declare class Office$MsoEncoding__msoEncodingEBCDICJapaneseLatinExtendedAndJapanese mixins Office$MsoEncoding {}
declare class Office$MsoEncoding__msoEncodingEBCDICKoreanExtended mixins Office$MsoEncoding {}
declare class Office$MsoEncoding__msoEncodingEBCDICKoreanExtendedAndKorean mixins Office$MsoEncoding {}
declare class Office$MsoEncoding__msoEncodingEBCDICLatinAmericaSpain mixins Office$MsoEncoding {}
declare class Office$MsoEncoding__msoEncodingEBCDICMultilingualROECELatin2 mixins Office$MsoEncoding {}
declare class Office$MsoEncoding__msoEncodingEBCDICRussian mixins Office$MsoEncoding {}
declare class Office$MsoEncoding__msoEncodingEBCDICSerbianBulgarian mixins Office$MsoEncoding {}
declare class Office$MsoEncoding__msoEncodingEBCDICSimplifiedChineseExtendedAndSimplifiedChinese mixins Office$MsoEncoding {}
declare class Office$MsoEncoding__msoEncodingEBCDICThai mixins Office$MsoEncoding {}
declare class Office$MsoEncoding__msoEncodingEBCDICTurkish mixins Office$MsoEncoding {}
declare class Office$MsoEncoding__msoEncodingEBCDICTurkishLatin5 mixins Office$MsoEncoding {}
declare class Office$MsoEncoding__msoEncodingEBCDICUnitedKingdom mixins Office$MsoEncoding {}
declare class Office$MsoEncoding__msoEncodingEBCDICUSCanada mixins Office$MsoEncoding {}
declare class Office$MsoEncoding__msoEncodingEBCDICUSCanadaAndJapanese mixins Office$MsoEncoding {}
declare class Office$MsoEncoding__msoEncodingEBCDICUSCanadaAndTraditionalChinese mixins Office$MsoEncoding {}
declare class Office$MsoEncoding__msoEncodingEUCChineseSimplifiedChinese mixins Office$MsoEncoding {}
declare class Office$MsoEncoding__msoEncodingEUCJapanese mixins Office$MsoEncoding {}
declare class Office$MsoEncoding__msoEncodingEUCKorean mixins Office$MsoEncoding {}
declare class Office$MsoEncoding__msoEncodingEUCTaiwaneseTraditionalChinese mixins Office$MsoEncoding {}
declare class Office$MsoEncoding__msoEncodingEuropa3 mixins Office$MsoEncoding {}
declare class Office$MsoEncoding__msoEncodingExtAlphaLowercase mixins Office$MsoEncoding {}
declare class Office$MsoEncoding__msoEncodingGreek mixins Office$MsoEncoding {}
declare class Office$MsoEncoding__msoEncodingGreekAutoDetect mixins Office$MsoEncoding {}
declare class Office$MsoEncoding__msoEncodingHebrew mixins Office$MsoEncoding {}
declare class Office$MsoEncoding__msoEncodingHZGBSimplifiedChinese mixins Office$MsoEncoding {}
declare class Office$MsoEncoding__msoEncodingIA5German mixins Office$MsoEncoding {}
declare class Office$MsoEncoding__msoEncodingIA5IRV mixins Office$MsoEncoding {}
declare class Office$MsoEncoding__msoEncodingIA5Norwegian mixins Office$MsoEncoding {}
declare class Office$MsoEncoding__msoEncodingIA5Swedish mixins Office$MsoEncoding {}
declare class Office$MsoEncoding__msoEncodingISCIIAssamese mixins Office$MsoEncoding {}
declare class Office$MsoEncoding__msoEncodingISCIIBengali mixins Office$MsoEncoding {}
declare class Office$MsoEncoding__msoEncodingISCIIDevanagari mixins Office$MsoEncoding {}
declare class Office$MsoEncoding__msoEncodingISCIIGujarati mixins Office$MsoEncoding {}
declare class Office$MsoEncoding__msoEncodingISCIIKannada mixins Office$MsoEncoding {}
declare class Office$MsoEncoding__msoEncodingISCIIMalayalam mixins Office$MsoEncoding {}
declare class Office$MsoEncoding__msoEncodingISCIIOriya mixins Office$MsoEncoding {}
declare class Office$MsoEncoding__msoEncodingISCIIPunjabi mixins Office$MsoEncoding {}
declare class Office$MsoEncoding__msoEncodingISCIITamil mixins Office$MsoEncoding {}
declare class Office$MsoEncoding__msoEncodingISCIITelugu mixins Office$MsoEncoding {}
declare class Office$MsoEncoding__msoEncodingISO2022CNSimplifiedChinese mixins Office$MsoEncoding {}
declare class Office$MsoEncoding__msoEncodingISO2022CNTraditionalChinese mixins Office$MsoEncoding {}
declare class Office$MsoEncoding__msoEncodingISO2022JPJISX02011989 mixins Office$MsoEncoding {}
declare class Office$MsoEncoding__msoEncodingISO2022JPJISX02021984 mixins Office$MsoEncoding {}
declare class Office$MsoEncoding__msoEncodingISO2022JPNoHalfwidthKatakana mixins Office$MsoEncoding {}
declare class Office$MsoEncoding__msoEncodingISO2022KR mixins Office$MsoEncoding {}
declare class Office$MsoEncoding__msoEncodingISO6937NonSpacingAccent mixins Office$MsoEncoding {}
declare class Office$MsoEncoding__msoEncodingISO885915Latin9 mixins Office$MsoEncoding {}
declare class Office$MsoEncoding__msoEncodingISO88591Latin1 mixins Office$MsoEncoding {}
declare class Office$MsoEncoding__msoEncodingISO88592CentralEurope mixins Office$MsoEncoding {}
declare class Office$MsoEncoding__msoEncodingISO88593Latin3 mixins Office$MsoEncoding {}
declare class Office$MsoEncoding__msoEncodingISO88594Baltic mixins Office$MsoEncoding {}
declare class Office$MsoEncoding__msoEncodingISO88595Cyrillic mixins Office$MsoEncoding {}
declare class Office$MsoEncoding__msoEncodingISO88596Arabic mixins Office$MsoEncoding {}
declare class Office$MsoEncoding__msoEncodingISO88597Greek mixins Office$MsoEncoding {}
declare class Office$MsoEncoding__msoEncodingISO88598Hebrew mixins Office$MsoEncoding {}
declare class Office$MsoEncoding__msoEncodingISO88598HebrewLogical mixins Office$MsoEncoding {}
declare class Office$MsoEncoding__msoEncodingISO88599Turkish mixins Office$MsoEncoding {}
declare class Office$MsoEncoding__msoEncodingJapaneseAutoDetect mixins Office$MsoEncoding {}
declare class Office$MsoEncoding__msoEncodingJapaneseShiftJIS mixins Office$MsoEncoding {}
declare class Office$MsoEncoding__msoEncodingKOI8R mixins Office$MsoEncoding {}
declare class Office$MsoEncoding__msoEncodingKOI8U mixins Office$MsoEncoding {}
declare class Office$MsoEncoding__msoEncodingKorean mixins Office$MsoEncoding {}
declare class Office$MsoEncoding__msoEncodingKoreanAutoDetect mixins Office$MsoEncoding {}
declare class Office$MsoEncoding__msoEncodingKoreanJohab mixins Office$MsoEncoding {}
declare class Office$MsoEncoding__msoEncodingMacArabic mixins Office$MsoEncoding {}
declare class Office$MsoEncoding__msoEncodingMacCroatia mixins Office$MsoEncoding {}
declare class Office$MsoEncoding__msoEncodingMacCyrillic mixins Office$MsoEncoding {}
declare class Office$MsoEncoding__msoEncodingMacGreek1 mixins Office$MsoEncoding {}
declare class Office$MsoEncoding__msoEncodingMacHebrew mixins Office$MsoEncoding {}
declare class Office$MsoEncoding__msoEncodingMacIcelandic mixins Office$MsoEncoding {}
declare class Office$MsoEncoding__msoEncodingMacJapanese mixins Office$MsoEncoding {}
declare class Office$MsoEncoding__msoEncodingMacKorean mixins Office$MsoEncoding {}
declare class Office$MsoEncoding__msoEncodingMacLatin2 mixins Office$MsoEncoding {}
declare class Office$MsoEncoding__msoEncodingMacRoman mixins Office$MsoEncoding {}
declare class Office$MsoEncoding__msoEncodingMacRomania mixins Office$MsoEncoding {}
declare class Office$MsoEncoding__msoEncodingMacSimplifiedChineseGB2312 mixins Office$MsoEncoding {}
declare class Office$MsoEncoding__msoEncodingMacTraditionalChineseBig5 mixins Office$MsoEncoding {}
declare class Office$MsoEncoding__msoEncodingMacTurkish mixins Office$MsoEncoding {}
declare class Office$MsoEncoding__msoEncodingMacUkraine mixins Office$MsoEncoding {}
declare class Office$MsoEncoding__msoEncodingOEMArabic mixins Office$MsoEncoding {}
declare class Office$MsoEncoding__msoEncodingOEMBaltic mixins Office$MsoEncoding {}
declare class Office$MsoEncoding__msoEncodingOEMCanadianFrench mixins Office$MsoEncoding {}
declare class Office$MsoEncoding__msoEncodingOEMCyrillic mixins Office$MsoEncoding {}
declare class Office$MsoEncoding__msoEncodingOEMCyrillicII mixins Office$MsoEncoding {}
declare class Office$MsoEncoding__msoEncodingOEMGreek437G mixins Office$MsoEncoding {}
declare class Office$MsoEncoding__msoEncodingOEMHebrew mixins Office$MsoEncoding {}
declare class Office$MsoEncoding__msoEncodingOEMIcelandic mixins Office$MsoEncoding {}
declare class Office$MsoEncoding__msoEncodingOEMModernGreek mixins Office$MsoEncoding {}
declare class Office$MsoEncoding__msoEncodingOEMMultilingualLatinI mixins Office$MsoEncoding {}
declare class Office$MsoEncoding__msoEncodingOEMMultilingualLatinII mixins Office$MsoEncoding {}
declare class Office$MsoEncoding__msoEncodingOEMNordic mixins Office$MsoEncoding {}
declare class Office$MsoEncoding__msoEncodingOEMPortuguese mixins Office$MsoEncoding {}
declare class Office$MsoEncoding__msoEncodingOEMTurkish mixins Office$MsoEncoding {}
declare class Office$MsoEncoding__msoEncodingOEMUnitedStates mixins Office$MsoEncoding {}
declare class Office$MsoEncoding__msoEncodingSimplifiedChineseAutoDetect mixins Office$MsoEncoding {}
declare class Office$MsoEncoding__msoEncodingSimplifiedChineseGB18030 mixins Office$MsoEncoding {}
declare class Office$MsoEncoding__msoEncodingSimplifiedChineseGBK mixins Office$MsoEncoding {}
declare class Office$MsoEncoding__msoEncodingT61 mixins Office$MsoEncoding {}
declare class Office$MsoEncoding__msoEncodingTaiwanCNS mixins Office$MsoEncoding {}
declare class Office$MsoEncoding__msoEncodingTaiwanEten mixins Office$MsoEncoding {}
declare class Office$MsoEncoding__msoEncodingTaiwanIBM5550 mixins Office$MsoEncoding {}
declare class Office$MsoEncoding__msoEncodingTaiwanTCA mixins Office$MsoEncoding {}
declare class Office$MsoEncoding__msoEncodingTaiwanTeleText mixins Office$MsoEncoding {}
declare class Office$MsoEncoding__msoEncodingTaiwanWang mixins Office$MsoEncoding {}
declare class Office$MsoEncoding__msoEncodingThai mixins Office$MsoEncoding {}
declare class Office$MsoEncoding__msoEncodingTraditionalChineseAutoDetect mixins Office$MsoEncoding {}
declare class Office$MsoEncoding__msoEncodingTraditionalChineseBig5 mixins Office$MsoEncoding {}
declare class Office$MsoEncoding__msoEncodingTurkish mixins Office$MsoEncoding {}
declare class Office$MsoEncoding__msoEncodingUnicodeBigEndian mixins Office$MsoEncoding {}
declare class Office$MsoEncoding__msoEncodingUnicodeLittleEndian mixins Office$MsoEncoding {}
declare class Office$MsoEncoding__msoEncodingUSASCII mixins Office$MsoEncoding {}
declare class Office$MsoEncoding__msoEncodingUTF7 mixins Office$MsoEncoding {}
declare class Office$MsoEncoding__msoEncodingUTF8 mixins Office$MsoEncoding {}
declare class Office$MsoEncoding__msoEncodingVietnamese mixins Office$MsoEncoding {}
declare class Office$MsoEncoding__msoEncodingWestern mixins Office$MsoEncoding {}


declare  class Office$MsoExtraInfoMethod {
  constructor(...args: empty): mixed;
static +msoMethodGet: Class<Office$MsoExtraInfoMethod__msoMethodGet> & Office$MsoExtraInfoMethod__msoMethodGet & 0;// 0
static +msoMethodPost: Class<Office$MsoExtraInfoMethod__msoMethodPost> & Office$MsoExtraInfoMethod__msoMethodPost & 1;// 1

}

declare class Office$MsoExtraInfoMethod__msoMethodGet mixins Office$MsoExtraInfoMethod {}
declare class Office$MsoExtraInfoMethod__msoMethodPost mixins Office$MsoExtraInfoMethod {}


declare  class Office$MsoExtrusionColorType {
  constructor(...args: empty): mixed;
static +msoExtrusionColorAutomatic: Class<Office$MsoExtrusionColorType__msoExtrusionColorAutomatic> & Office$MsoExtrusionColorType__msoExtrusionColorAutomatic & 1;// 1
static +msoExtrusionColorCustom: Class<Office$MsoExtrusionColorType__msoExtrusionColorCustom> & Office$MsoExtrusionColorType__msoExtrusionColorCustom & 2;// 2
static +msoExtrusionColorTypeMixed: Class<Office$MsoExtrusionColorType__msoExtrusionColorTypeMixed> & Office$MsoExtrusionColorType__msoExtrusionColorTypeMixed & -2;// -2

}

declare class Office$MsoExtrusionColorType__msoExtrusionColorAutomatic mixins Office$MsoExtrusionColorType {}
declare class Office$MsoExtrusionColorType__msoExtrusionColorCustom mixins Office$MsoExtrusionColorType {}
declare class Office$MsoExtrusionColorType__msoExtrusionColorTypeMixed mixins Office$MsoExtrusionColorType {}


declare  class Office$MsoFarEastLineBreakLanguageID {
  constructor(...args: empty): mixed;
static +MsoFarEastLineBreakLanguageJapanese: Class<Office$MsoFarEastLineBreakLanguageID__MsoFarEastLineBreakLanguageJapanese> & Office$MsoFarEastLineBreakLanguageID__MsoFarEastLineBreakLanguageJapanese & 1041;// 1041
static +MsoFarEastLineBreakLanguageKorean: Class<Office$MsoFarEastLineBreakLanguageID__MsoFarEastLineBreakLanguageKorean> & Office$MsoFarEastLineBreakLanguageID__MsoFarEastLineBreakLanguageKorean & 1042;// 1042
static +MsoFarEastLineBreakLanguageSimplifiedChinese: Class<Office$MsoFarEastLineBreakLanguageID__MsoFarEastLineBreakLanguageSimplifiedChinese> & Office$MsoFarEastLineBreakLanguageID__MsoFarEastLineBreakLanguageSimplifiedChinese & 2052;// 2052
static +MsoFarEastLineBreakLanguageTraditionalChinese: Class<Office$MsoFarEastLineBreakLanguageID__MsoFarEastLineBreakLanguageTraditionalChinese> & Office$MsoFarEastLineBreakLanguageID__MsoFarEastLineBreakLanguageTraditionalChinese & 1028;// 1028

}

declare class Office$MsoFarEastLineBreakLanguageID__MsoFarEastLineBreakLanguageJapanese mixins Office$MsoFarEastLineBreakLanguageID {}
declare class Office$MsoFarEastLineBreakLanguageID__MsoFarEastLineBreakLanguageKorean mixins Office$MsoFarEastLineBreakLanguageID {}
declare class Office$MsoFarEastLineBreakLanguageID__MsoFarEastLineBreakLanguageSimplifiedChinese mixins Office$MsoFarEastLineBreakLanguageID {}
declare class Office$MsoFarEastLineBreakLanguageID__MsoFarEastLineBreakLanguageTraditionalChinese mixins Office$MsoFarEastLineBreakLanguageID {}


declare  class Office$MsoFeatureInstall {
  constructor(...args: empty): mixed;
static +msoFeatureInstallNone: Class<Office$MsoFeatureInstall__msoFeatureInstallNone> & Office$MsoFeatureInstall__msoFeatureInstallNone & 0;// 0
static +msoFeatureInstallOnDemand: Class<Office$MsoFeatureInstall__msoFeatureInstallOnDemand> & Office$MsoFeatureInstall__msoFeatureInstallOnDemand & 1;// 1
static +msoFeatureInstallOnDemandWithUI: Class<Office$MsoFeatureInstall__msoFeatureInstallOnDemandWithUI> & Office$MsoFeatureInstall__msoFeatureInstallOnDemandWithUI & 2;// 2

}

declare class Office$MsoFeatureInstall__msoFeatureInstallNone mixins Office$MsoFeatureInstall {}
declare class Office$MsoFeatureInstall__msoFeatureInstallOnDemand mixins Office$MsoFeatureInstall {}
declare class Office$MsoFeatureInstall__msoFeatureInstallOnDemandWithUI mixins Office$MsoFeatureInstall {}


declare  class Office$MsoFileDialogType {
  constructor(...args: empty): mixed;
static +msoFileDialogFilePicker: Class<Office$MsoFileDialogType__msoFileDialogFilePicker> & Office$MsoFileDialogType__msoFileDialogFilePicker & 3;// 3
static +msoFileDialogFolderPicker: Class<Office$MsoFileDialogType__msoFileDialogFolderPicker> & Office$MsoFileDialogType__msoFileDialogFolderPicker & 4;// 4
static +msoFileDialogOpen: Class<Office$MsoFileDialogType__msoFileDialogOpen> & Office$MsoFileDialogType__msoFileDialogOpen & 1;// 1
static +msoFileDialogSaveAs: Class<Office$MsoFileDialogType__msoFileDialogSaveAs> & Office$MsoFileDialogType__msoFileDialogSaveAs & 2;// 2

}

declare class Office$MsoFileDialogType__msoFileDialogFilePicker mixins Office$MsoFileDialogType {}
declare class Office$MsoFileDialogType__msoFileDialogFolderPicker mixins Office$MsoFileDialogType {}
declare class Office$MsoFileDialogType__msoFileDialogOpen mixins Office$MsoFileDialogType {}
declare class Office$MsoFileDialogType__msoFileDialogSaveAs mixins Office$MsoFileDialogType {}


declare  class Office$MsoFileDialogView {
  constructor(...args: empty): mixed;
static +msoFileDialogViewDetails: Class<Office$MsoFileDialogView__msoFileDialogViewDetails> & Office$MsoFileDialogView__msoFileDialogViewDetails & 2;// 2
static +msoFileDialogViewLargeIcons: Class<Office$MsoFileDialogView__msoFileDialogViewLargeIcons> & Office$MsoFileDialogView__msoFileDialogViewLargeIcons & 6;// 6
static +msoFileDialogViewList: Class<Office$MsoFileDialogView__msoFileDialogViewList> & Office$MsoFileDialogView__msoFileDialogViewList & 1;// 1
static +msoFileDialogViewPreview: Class<Office$MsoFileDialogView__msoFileDialogViewPreview> & Office$MsoFileDialogView__msoFileDialogViewPreview & 4;// 4
static +msoFileDialogViewProperties: Class<Office$MsoFileDialogView__msoFileDialogViewProperties> & Office$MsoFileDialogView__msoFileDialogViewProperties & 3;// 3
static +msoFileDialogViewSmallIcons: Class<Office$MsoFileDialogView__msoFileDialogViewSmallIcons> & Office$MsoFileDialogView__msoFileDialogViewSmallIcons & 7;// 7
static +msoFileDialogViewThumbnail: Class<Office$MsoFileDialogView__msoFileDialogViewThumbnail> & Office$MsoFileDialogView__msoFileDialogViewThumbnail & 5;// 5
static +msoFileDialogViewTiles: Class<Office$MsoFileDialogView__msoFileDialogViewTiles> & Office$MsoFileDialogView__msoFileDialogViewTiles & 9;// 9
static +msoFileDialogViewWebView: Class<Office$MsoFileDialogView__msoFileDialogViewWebView> & Office$MsoFileDialogView__msoFileDialogViewWebView & 8;// 8

}

declare class Office$MsoFileDialogView__msoFileDialogViewDetails mixins Office$MsoFileDialogView {}
declare class Office$MsoFileDialogView__msoFileDialogViewLargeIcons mixins Office$MsoFileDialogView {}
declare class Office$MsoFileDialogView__msoFileDialogViewList mixins Office$MsoFileDialogView {}
declare class Office$MsoFileDialogView__msoFileDialogViewPreview mixins Office$MsoFileDialogView {}
declare class Office$MsoFileDialogView__msoFileDialogViewProperties mixins Office$MsoFileDialogView {}
declare class Office$MsoFileDialogView__msoFileDialogViewSmallIcons mixins Office$MsoFileDialogView {}
declare class Office$MsoFileDialogView__msoFileDialogViewThumbnail mixins Office$MsoFileDialogView {}
declare class Office$MsoFileDialogView__msoFileDialogViewTiles mixins Office$MsoFileDialogView {}
declare class Office$MsoFileDialogView__msoFileDialogViewWebView mixins Office$MsoFileDialogView {}


declare  class Office$MsoFileFindListBy {
  constructor(...args: empty): mixed;
static +msoListbyName: Class<Office$MsoFileFindListBy__msoListbyName> & Office$MsoFileFindListBy__msoListbyName & 1;// 1
static +msoListbyTitle: Class<Office$MsoFileFindListBy__msoListbyTitle> & Office$MsoFileFindListBy__msoListbyTitle & 2;// 2

}

declare class Office$MsoFileFindListBy__msoListbyName mixins Office$MsoFileFindListBy {}
declare class Office$MsoFileFindListBy__msoListbyTitle mixins Office$MsoFileFindListBy {}


declare  class Office$MsoFileFindOptions {
  constructor(...args: empty): mixed;
static +msoOptionsAdd: Class<Office$MsoFileFindOptions__msoOptionsAdd> & Office$MsoFileFindOptions__msoOptionsAdd & 2;// 2
static +msoOptionsNew: Class<Office$MsoFileFindOptions__msoOptionsNew> & Office$MsoFileFindOptions__msoOptionsNew & 1;// 1
static +msoOptionsWithin: Class<Office$MsoFileFindOptions__msoOptionsWithin> & Office$MsoFileFindOptions__msoOptionsWithin & 3;// 3

}

declare class Office$MsoFileFindOptions__msoOptionsAdd mixins Office$MsoFileFindOptions {}
declare class Office$MsoFileFindOptions__msoOptionsNew mixins Office$MsoFileFindOptions {}
declare class Office$MsoFileFindOptions__msoOptionsWithin mixins Office$MsoFileFindOptions {}


declare  class Office$MsoFileFindSortBy {
  constructor(...args: empty): mixed;
static +msoFileFindSortbyAuthor: Class<Office$MsoFileFindSortBy__msoFileFindSortbyAuthor> & Office$MsoFileFindSortBy__msoFileFindSortbyAuthor & 1;// 1
static +msoFileFindSortbyDateCreated: Class<Office$MsoFileFindSortBy__msoFileFindSortbyDateCreated> & Office$MsoFileFindSortBy__msoFileFindSortbyDateCreated & 2;// 2
static +msoFileFindSortbyDateSaved: Class<Office$MsoFileFindSortBy__msoFileFindSortbyDateSaved> & Office$MsoFileFindSortBy__msoFileFindSortbyDateSaved & 4;// 4
static +msoFileFindSortbyFileName: Class<Office$MsoFileFindSortBy__msoFileFindSortbyFileName> & Office$MsoFileFindSortBy__msoFileFindSortbyFileName & 5;// 5
static +msoFileFindSortbyLastSavedBy: Class<Office$MsoFileFindSortBy__msoFileFindSortbyLastSavedBy> & Office$MsoFileFindSortBy__msoFileFindSortbyLastSavedBy & 3;// 3
static +msoFileFindSortbySize: Class<Office$MsoFileFindSortBy__msoFileFindSortbySize> & Office$MsoFileFindSortBy__msoFileFindSortbySize & 6;// 6
static +msoFileFindSortbyTitle: Class<Office$MsoFileFindSortBy__msoFileFindSortbyTitle> & Office$MsoFileFindSortBy__msoFileFindSortbyTitle & 7;// 7

}

declare class Office$MsoFileFindSortBy__msoFileFindSortbyAuthor mixins Office$MsoFileFindSortBy {}
declare class Office$MsoFileFindSortBy__msoFileFindSortbyDateCreated mixins Office$MsoFileFindSortBy {}
declare class Office$MsoFileFindSortBy__msoFileFindSortbyDateSaved mixins Office$MsoFileFindSortBy {}
declare class Office$MsoFileFindSortBy__msoFileFindSortbyFileName mixins Office$MsoFileFindSortBy {}
declare class Office$MsoFileFindSortBy__msoFileFindSortbyLastSavedBy mixins Office$MsoFileFindSortBy {}
declare class Office$MsoFileFindSortBy__msoFileFindSortbySize mixins Office$MsoFileFindSortBy {}
declare class Office$MsoFileFindSortBy__msoFileFindSortbyTitle mixins Office$MsoFileFindSortBy {}


declare  class Office$MsoFileFindView {
  constructor(...args: empty): mixed;
static +msoViewFileInfo: Class<Office$MsoFileFindView__msoViewFileInfo> & Office$MsoFileFindView__msoViewFileInfo & 1;// 1
static +msoViewPreview: Class<Office$MsoFileFindView__msoViewPreview> & Office$MsoFileFindView__msoViewPreview & 2;// 2
static +msoViewSummaryInfo: Class<Office$MsoFileFindView__msoViewSummaryInfo> & Office$MsoFileFindView__msoViewSummaryInfo & 3;// 3

}

declare class Office$MsoFileFindView__msoViewFileInfo mixins Office$MsoFileFindView {}
declare class Office$MsoFileFindView__msoViewPreview mixins Office$MsoFileFindView {}
declare class Office$MsoFileFindView__msoViewSummaryInfo mixins Office$MsoFileFindView {}


declare  class Office$MsoFileNewAction {
  constructor(...args: empty): mixed;
static +msoCreateNewFile: Class<Office$MsoFileNewAction__msoCreateNewFile> & Office$MsoFileNewAction__msoCreateNewFile & 1;// 1
static +msoEditFile: Class<Office$MsoFileNewAction__msoEditFile> & Office$MsoFileNewAction__msoEditFile & 0;// 0
static +msoOpenFile: Class<Office$MsoFileNewAction__msoOpenFile> & Office$MsoFileNewAction__msoOpenFile & 2;// 2

}

declare class Office$MsoFileNewAction__msoCreateNewFile mixins Office$MsoFileNewAction {}
declare class Office$MsoFileNewAction__msoEditFile mixins Office$MsoFileNewAction {}
declare class Office$MsoFileNewAction__msoOpenFile mixins Office$MsoFileNewAction {}


declare  class Office$MsoFileNewSection {
  constructor(...args: empty): mixed;
static +msoBottomSection: Class<Office$MsoFileNewSection__msoBottomSection> & Office$MsoFileNewSection__msoBottomSection & 4;// 4
static +msoNew: Class<Office$MsoFileNewSection__msoNew> & Office$MsoFileNewSection__msoNew & 1;// 1
static +msoNewfromExistingFile: Class<Office$MsoFileNewSection__msoNewfromExistingFile> & Office$MsoFileNewSection__msoNewfromExistingFile & 2;// 2
static +msoNewfromTemplate: Class<Office$MsoFileNewSection__msoNewfromTemplate> & Office$MsoFileNewSection__msoNewfromTemplate & 3;// 3
static +msoOpenDocument: Class<Office$MsoFileNewSection__msoOpenDocument> & Office$MsoFileNewSection__msoOpenDocument & 0;// 0

}

declare class Office$MsoFileNewSection__msoBottomSection mixins Office$MsoFileNewSection {}
declare class Office$MsoFileNewSection__msoNew mixins Office$MsoFileNewSection {}
declare class Office$MsoFileNewSection__msoNewfromExistingFile mixins Office$MsoFileNewSection {}
declare class Office$MsoFileNewSection__msoNewfromTemplate mixins Office$MsoFileNewSection {}
declare class Office$MsoFileNewSection__msoOpenDocument mixins Office$MsoFileNewSection {}


declare  class Office$MsoFileType {
  constructor(...args: empty): mixed;
static +msoFileTypeAllFiles: Class<Office$MsoFileType__msoFileTypeAllFiles> & Office$MsoFileType__msoFileTypeAllFiles & 1;// 1
static +msoFileTypeBinders: Class<Office$MsoFileType__msoFileTypeBinders> & Office$MsoFileType__msoFileTypeBinders & 6;// 6
static +msoFileTypeCalendarItem: Class<Office$MsoFileType__msoFileTypeCalendarItem> & Office$MsoFileType__msoFileTypeCalendarItem & 11;// 11
static +msoFileTypeContactItem: Class<Office$MsoFileType__msoFileTypeContactItem> & Office$MsoFileType__msoFileTypeContactItem & 12;// 12
static +msoFileTypeDatabases: Class<Office$MsoFileType__msoFileTypeDatabases> & Office$MsoFileType__msoFileTypeDatabases & 7;// 7
static +msoFileTypeDataConnectionFiles: Class<Office$MsoFileType__msoFileTypeDataConnectionFiles> & Office$MsoFileType__msoFileTypeDataConnectionFiles & 17;// 17
static +msoFileTypeDesignerFiles: Class<Office$MsoFileType__msoFileTypeDesignerFiles> & Office$MsoFileType__msoFileTypeDesignerFiles & 22;// 22
static +msoFileTypeDocumentImagingFiles: Class<Office$MsoFileType__msoFileTypeDocumentImagingFiles> & Office$MsoFileType__msoFileTypeDocumentImagingFiles & 20;// 20
static +msoFileTypeExcelWorkbooks: Class<Office$MsoFileType__msoFileTypeExcelWorkbooks> & Office$MsoFileType__msoFileTypeExcelWorkbooks & 4;// 4
static +msoFileTypeJournalItem: Class<Office$MsoFileType__msoFileTypeJournalItem> & Office$MsoFileType__msoFileTypeJournalItem & 14;// 14
static +msoFileTypeMailItem: Class<Office$MsoFileType__msoFileTypeMailItem> & Office$MsoFileType__msoFileTypeMailItem & 10;// 10
static +msoFileTypeNoteItem: Class<Office$MsoFileType__msoFileTypeNoteItem> & Office$MsoFileType__msoFileTypeNoteItem & 13;// 13
static +msoFileTypeOfficeFiles: Class<Office$MsoFileType__msoFileTypeOfficeFiles> & Office$MsoFileType__msoFileTypeOfficeFiles & 2;// 2
static +msoFileTypeOutlookItems: Class<Office$MsoFileType__msoFileTypeOutlookItems> & Office$MsoFileType__msoFileTypeOutlookItems & 9;// 9
static +msoFileTypePhotoDrawFiles: Class<Office$MsoFileType__msoFileTypePhotoDrawFiles> & Office$MsoFileType__msoFileTypePhotoDrawFiles & 16;// 16
static +msoFileTypePowerPointPresentations: Class<Office$MsoFileType__msoFileTypePowerPointPresentations> & Office$MsoFileType__msoFileTypePowerPointPresentations & 5;// 5
static +msoFileTypeProjectFiles: Class<Office$MsoFileType__msoFileTypeProjectFiles> & Office$MsoFileType__msoFileTypeProjectFiles & 19;// 19
static +msoFileTypePublisherFiles: Class<Office$MsoFileType__msoFileTypePublisherFiles> & Office$MsoFileType__msoFileTypePublisherFiles & 18;// 18
static +msoFileTypeTaskItem: Class<Office$MsoFileType__msoFileTypeTaskItem> & Office$MsoFileType__msoFileTypeTaskItem & 15;// 15
static +msoFileTypeTemplates: Class<Office$MsoFileType__msoFileTypeTemplates> & Office$MsoFileType__msoFileTypeTemplates & 8;// 8
static +msoFileTypeVisioFiles: Class<Office$MsoFileType__msoFileTypeVisioFiles> & Office$MsoFileType__msoFileTypeVisioFiles & 21;// 21
static +msoFileTypeWebPages: Class<Office$MsoFileType__msoFileTypeWebPages> & Office$MsoFileType__msoFileTypeWebPages & 23;// 23
static +msoFileTypeWordDocuments: Class<Office$MsoFileType__msoFileTypeWordDocuments> & Office$MsoFileType__msoFileTypeWordDocuments & 3;// 3

}

declare class Office$MsoFileType__msoFileTypeAllFiles mixins Office$MsoFileType {}
declare class Office$MsoFileType__msoFileTypeBinders mixins Office$MsoFileType {}
declare class Office$MsoFileType__msoFileTypeCalendarItem mixins Office$MsoFileType {}
declare class Office$MsoFileType__msoFileTypeContactItem mixins Office$MsoFileType {}
declare class Office$MsoFileType__msoFileTypeDatabases mixins Office$MsoFileType {}
declare class Office$MsoFileType__msoFileTypeDataConnectionFiles mixins Office$MsoFileType {}
declare class Office$MsoFileType__msoFileTypeDesignerFiles mixins Office$MsoFileType {}
declare class Office$MsoFileType__msoFileTypeDocumentImagingFiles mixins Office$MsoFileType {}
declare class Office$MsoFileType__msoFileTypeExcelWorkbooks mixins Office$MsoFileType {}
declare class Office$MsoFileType__msoFileTypeJournalItem mixins Office$MsoFileType {}
declare class Office$MsoFileType__msoFileTypeMailItem mixins Office$MsoFileType {}
declare class Office$MsoFileType__msoFileTypeNoteItem mixins Office$MsoFileType {}
declare class Office$MsoFileType__msoFileTypeOfficeFiles mixins Office$MsoFileType {}
declare class Office$MsoFileType__msoFileTypeOutlookItems mixins Office$MsoFileType {}
declare class Office$MsoFileType__msoFileTypePhotoDrawFiles mixins Office$MsoFileType {}
declare class Office$MsoFileType__msoFileTypePowerPointPresentations mixins Office$MsoFileType {}
declare class Office$MsoFileType__msoFileTypeProjectFiles mixins Office$MsoFileType {}
declare class Office$MsoFileType__msoFileTypePublisherFiles mixins Office$MsoFileType {}
declare class Office$MsoFileType__msoFileTypeTaskItem mixins Office$MsoFileType {}
declare class Office$MsoFileType__msoFileTypeTemplates mixins Office$MsoFileType {}
declare class Office$MsoFileType__msoFileTypeVisioFiles mixins Office$MsoFileType {}
declare class Office$MsoFileType__msoFileTypeWebPages mixins Office$MsoFileType {}
declare class Office$MsoFileType__msoFileTypeWordDocuments mixins Office$MsoFileType {}


declare  class Office$MsoFileValidationMode {
  constructor(...args: empty): mixed;
static +msoFileValidationDefault: Class<Office$MsoFileValidationMode__msoFileValidationDefault> & Office$MsoFileValidationMode__msoFileValidationDefault & 0;// 0
static +msoFileValidationSkip: Class<Office$MsoFileValidationMode__msoFileValidationSkip> & Office$MsoFileValidationMode__msoFileValidationSkip & 1;// 1

}

declare class Office$MsoFileValidationMode__msoFileValidationDefault mixins Office$MsoFileValidationMode {}
declare class Office$MsoFileValidationMode__msoFileValidationSkip mixins Office$MsoFileValidationMode {}


declare  class Office$MsoFillType {
  constructor(...args: empty): mixed;
static +msoFillBackground: Class<Office$MsoFillType__msoFillBackground> & Office$MsoFillType__msoFillBackground & 5;// 5
static +msoFillGradient: Class<Office$MsoFillType__msoFillGradient> & Office$MsoFillType__msoFillGradient & 3;// 3
static +msoFillMixed: Class<Office$MsoFillType__msoFillMixed> & Office$MsoFillType__msoFillMixed & -2;// -2
static +msoFillPatterned: Class<Office$MsoFillType__msoFillPatterned> & Office$MsoFillType__msoFillPatterned & 2;// 2
static +msoFillPicture: Class<Office$MsoFillType__msoFillPicture> & Office$MsoFillType__msoFillPicture & 6;// 6
static +msoFillSolid: Class<Office$MsoFillType__msoFillSolid> & Office$MsoFillType__msoFillSolid & 1;// 1
static +msoFillTextured: Class<Office$MsoFillType__msoFillTextured> & Office$MsoFillType__msoFillTextured & 4;// 4

}

declare class Office$MsoFillType__msoFillBackground mixins Office$MsoFillType {}
declare class Office$MsoFillType__msoFillGradient mixins Office$MsoFillType {}
declare class Office$MsoFillType__msoFillMixed mixins Office$MsoFillType {}
declare class Office$MsoFillType__msoFillPatterned mixins Office$MsoFillType {}
declare class Office$MsoFillType__msoFillPicture mixins Office$MsoFillType {}
declare class Office$MsoFillType__msoFillSolid mixins Office$MsoFillType {}
declare class Office$MsoFillType__msoFillTextured mixins Office$MsoFillType {}


declare  class Office$MsoFilterComparison {
  constructor(...args: empty): mixed;
static +msoFilterComparisonContains: Class<Office$MsoFilterComparison__msoFilterComparisonContains> & Office$MsoFilterComparison__msoFilterComparisonContains & 8;// 8
static +msoFilterComparisonEqual: Class<Office$MsoFilterComparison__msoFilterComparisonEqual> & Office$MsoFilterComparison__msoFilterComparisonEqual & 0;// 0
static +msoFilterComparisonGreaterThan: Class<Office$MsoFilterComparison__msoFilterComparisonGreaterThan> & Office$MsoFilterComparison__msoFilterComparisonGreaterThan & 3;// 3
static +msoFilterComparisonGreaterThanEqual: Class<Office$MsoFilterComparison__msoFilterComparisonGreaterThanEqual> & Office$MsoFilterComparison__msoFilterComparisonGreaterThanEqual & 5;// 5
static +msoFilterComparisonIsBlank: Class<Office$MsoFilterComparison__msoFilterComparisonIsBlank> & Office$MsoFilterComparison__msoFilterComparisonIsBlank & 6;// 6
static +msoFilterComparisonIsNotBlank: Class<Office$MsoFilterComparison__msoFilterComparisonIsNotBlank> & Office$MsoFilterComparison__msoFilterComparisonIsNotBlank & 7;// 7
static +msoFilterComparisonLessThan: Class<Office$MsoFilterComparison__msoFilterComparisonLessThan> & Office$MsoFilterComparison__msoFilterComparisonLessThan & 2;// 2
static +msoFilterComparisonLessThanEqual: Class<Office$MsoFilterComparison__msoFilterComparisonLessThanEqual> & Office$MsoFilterComparison__msoFilterComparisonLessThanEqual & 4;// 4
static +msoFilterComparisonNotContains: Class<Office$MsoFilterComparison__msoFilterComparisonNotContains> & Office$MsoFilterComparison__msoFilterComparisonNotContains & 9;// 9
static +msoFilterComparisonNotEqual: Class<Office$MsoFilterComparison__msoFilterComparisonNotEqual> & Office$MsoFilterComparison__msoFilterComparisonNotEqual & 1;// 1

}

declare class Office$MsoFilterComparison__msoFilterComparisonContains mixins Office$MsoFilterComparison {}
declare class Office$MsoFilterComparison__msoFilterComparisonEqual mixins Office$MsoFilterComparison {}
declare class Office$MsoFilterComparison__msoFilterComparisonGreaterThan mixins Office$MsoFilterComparison {}
declare class Office$MsoFilterComparison__msoFilterComparisonGreaterThanEqual mixins Office$MsoFilterComparison {}
declare class Office$MsoFilterComparison__msoFilterComparisonIsBlank mixins Office$MsoFilterComparison {}
declare class Office$MsoFilterComparison__msoFilterComparisonIsNotBlank mixins Office$MsoFilterComparison {}
declare class Office$MsoFilterComparison__msoFilterComparisonLessThan mixins Office$MsoFilterComparison {}
declare class Office$MsoFilterComparison__msoFilterComparisonLessThanEqual mixins Office$MsoFilterComparison {}
declare class Office$MsoFilterComparison__msoFilterComparisonNotContains mixins Office$MsoFilterComparison {}
declare class Office$MsoFilterComparison__msoFilterComparisonNotEqual mixins Office$MsoFilterComparison {}


declare  class Office$MsoFilterConjunction {
  constructor(...args: empty): mixed;
static +msoFilterConjunctionAnd: Class<Office$MsoFilterConjunction__msoFilterConjunctionAnd> & Office$MsoFilterConjunction__msoFilterConjunctionAnd & 0;// 0
static +msoFilterConjunctionOr: Class<Office$MsoFilterConjunction__msoFilterConjunctionOr> & Office$MsoFilterConjunction__msoFilterConjunctionOr & 1;// 1

}

declare class Office$MsoFilterConjunction__msoFilterConjunctionAnd mixins Office$MsoFilterConjunction {}
declare class Office$MsoFilterConjunction__msoFilterConjunctionOr mixins Office$MsoFilterConjunction {}


declare  class Office$MsoFlipCmd {
  constructor(...args: empty): mixed;
static +msoFlipHorizontal: Class<Office$MsoFlipCmd__msoFlipHorizontal> & Office$MsoFlipCmd__msoFlipHorizontal & 0;// 0
static +msoFlipVertical: Class<Office$MsoFlipCmd__msoFlipVertical> & Office$MsoFlipCmd__msoFlipVertical & 1;// 1

}

declare class Office$MsoFlipCmd__msoFlipHorizontal mixins Office$MsoFlipCmd {}
declare class Office$MsoFlipCmd__msoFlipVertical mixins Office$MsoFlipCmd {}


declare  class Office$MsoFontLanguageIndex {
  constructor(...args: empty): mixed;
static +msoThemeComplexScript: Class<Office$MsoFontLanguageIndex__msoThemeComplexScript> & Office$MsoFontLanguageIndex__msoThemeComplexScript & 2;// 2
static +msoThemeEastAsian: Class<Office$MsoFontLanguageIndex__msoThemeEastAsian> & Office$MsoFontLanguageIndex__msoThemeEastAsian & 3;// 3
static +msoThemeLatin: Class<Office$MsoFontLanguageIndex__msoThemeLatin> & Office$MsoFontLanguageIndex__msoThemeLatin & 1;// 1

}

declare class Office$MsoFontLanguageIndex__msoThemeComplexScript mixins Office$MsoFontLanguageIndex {}
declare class Office$MsoFontLanguageIndex__msoThemeEastAsian mixins Office$MsoFontLanguageIndex {}
declare class Office$MsoFontLanguageIndex__msoThemeLatin mixins Office$MsoFontLanguageIndex {}


declare  class Office$MsoGradientColorType {
  constructor(...args: empty): mixed;
static +msoGradientColorMixed: Class<Office$MsoGradientColorType__msoGradientColorMixed> & Office$MsoGradientColorType__msoGradientColorMixed & -2;// -2
static +msoGradientMultiColor: Class<Office$MsoGradientColorType__msoGradientMultiColor> & Office$MsoGradientColorType__msoGradientMultiColor & 4;// 4
static +msoGradientOneColor: Class<Office$MsoGradientColorType__msoGradientOneColor> & Office$MsoGradientColorType__msoGradientOneColor & 1;// 1
static +msoGradientPresetColors: Class<Office$MsoGradientColorType__msoGradientPresetColors> & Office$MsoGradientColorType__msoGradientPresetColors & 3;// 3
static +msoGradientTwoColors: Class<Office$MsoGradientColorType__msoGradientTwoColors> & Office$MsoGradientColorType__msoGradientTwoColors & 2;// 2

}

declare class Office$MsoGradientColorType__msoGradientColorMixed mixins Office$MsoGradientColorType {}
declare class Office$MsoGradientColorType__msoGradientMultiColor mixins Office$MsoGradientColorType {}
declare class Office$MsoGradientColorType__msoGradientOneColor mixins Office$MsoGradientColorType {}
declare class Office$MsoGradientColorType__msoGradientPresetColors mixins Office$MsoGradientColorType {}
declare class Office$MsoGradientColorType__msoGradientTwoColors mixins Office$MsoGradientColorType {}


declare  class Office$MsoGradientStyle {
  constructor(...args: empty): mixed;
static +msoGradientDiagonalDown: Class<Office$MsoGradientStyle__msoGradientDiagonalDown> & Office$MsoGradientStyle__msoGradientDiagonalDown & 4;// 4
static +msoGradientDiagonalUp: Class<Office$MsoGradientStyle__msoGradientDiagonalUp> & Office$MsoGradientStyle__msoGradientDiagonalUp & 3;// 3
static +msoGradientFromCenter: Class<Office$MsoGradientStyle__msoGradientFromCenter> & Office$MsoGradientStyle__msoGradientFromCenter & 7;// 7
static +msoGradientFromCorner: Class<Office$MsoGradientStyle__msoGradientFromCorner> & Office$MsoGradientStyle__msoGradientFromCorner & 5;// 5
static +msoGradientFromTitle: Class<Office$MsoGradientStyle__msoGradientFromTitle> & Office$MsoGradientStyle__msoGradientFromTitle & 6;// 6
static +msoGradientHorizontal: Class<Office$MsoGradientStyle__msoGradientHorizontal> & Office$MsoGradientStyle__msoGradientHorizontal & 1;// 1
static +msoGradientMixed: Class<Office$MsoGradientStyle__msoGradientMixed> & Office$MsoGradientStyle__msoGradientMixed & -2;// -2
static +msoGradientVertical: Class<Office$MsoGradientStyle__msoGradientVertical> & Office$MsoGradientStyle__msoGradientVertical & 2;// 2

}

declare class Office$MsoGradientStyle__msoGradientDiagonalDown mixins Office$MsoGradientStyle {}
declare class Office$MsoGradientStyle__msoGradientDiagonalUp mixins Office$MsoGradientStyle {}
declare class Office$MsoGradientStyle__msoGradientFromCenter mixins Office$MsoGradientStyle {}
declare class Office$MsoGradientStyle__msoGradientFromCorner mixins Office$MsoGradientStyle {}
declare class Office$MsoGradientStyle__msoGradientFromTitle mixins Office$MsoGradientStyle {}
declare class Office$MsoGradientStyle__msoGradientHorizontal mixins Office$MsoGradientStyle {}
declare class Office$MsoGradientStyle__msoGradientMixed mixins Office$MsoGradientStyle {}
declare class Office$MsoGradientStyle__msoGradientVertical mixins Office$MsoGradientStyle {}


declare  class Office$MsoHorizontalAnchor {
  constructor(...args: empty): mixed;
static +msoAnchorCenter: Class<Office$MsoHorizontalAnchor__msoAnchorCenter> & Office$MsoHorizontalAnchor__msoAnchorCenter & 2;// 2
static +msoAnchorNone: Class<Office$MsoHorizontalAnchor__msoAnchorNone> & Office$MsoHorizontalAnchor__msoAnchorNone & 1;// 1
static +msoHorizontalAnchorMixed: Class<Office$MsoHorizontalAnchor__msoHorizontalAnchorMixed> & Office$MsoHorizontalAnchor__msoHorizontalAnchorMixed & -2;// -2

}

declare class Office$MsoHorizontalAnchor__msoAnchorCenter mixins Office$MsoHorizontalAnchor {}
declare class Office$MsoHorizontalAnchor__msoAnchorNone mixins Office$MsoHorizontalAnchor {}
declare class Office$MsoHorizontalAnchor__msoHorizontalAnchorMixed mixins Office$MsoHorizontalAnchor {}


declare  class Office$MsoHTMLProjectOpen {
  constructor(...args: empty): mixed;
static +msoHTMLProjectOpenSourceView: Class<Office$MsoHTMLProjectOpen__msoHTMLProjectOpenSourceView> & Office$MsoHTMLProjectOpen__msoHTMLProjectOpenSourceView & 1;// 1
static +msoHTMLProjectOpenTextView: Class<Office$MsoHTMLProjectOpen__msoHTMLProjectOpenTextView> & Office$MsoHTMLProjectOpen__msoHTMLProjectOpenTextView & 2;// 2

}

declare class Office$MsoHTMLProjectOpen__msoHTMLProjectOpenSourceView mixins Office$MsoHTMLProjectOpen {}
declare class Office$MsoHTMLProjectOpen__msoHTMLProjectOpenTextView mixins Office$MsoHTMLProjectOpen {}


declare  class Office$MsoHTMLProjectState {
  constructor(...args: empty): mixed;
static +msoHTMLProjectStateDocumentLocked: Class<Office$MsoHTMLProjectState__msoHTMLProjectStateDocumentLocked> & Office$MsoHTMLProjectState__msoHTMLProjectStateDocumentLocked & 1;// 1
static +msoHTMLProjectStateDocumentProjectUnlocked: Class<Office$MsoHTMLProjectState__msoHTMLProjectStateDocumentProjectUnlocked> & Office$MsoHTMLProjectState__msoHTMLProjectStateDocumentProjectUnlocked & 3;// 3
static +msoHTMLProjectStateProjectLocked: Class<Office$MsoHTMLProjectState__msoHTMLProjectStateProjectLocked> & Office$MsoHTMLProjectState__msoHTMLProjectStateProjectLocked & 2;// 2

}

declare class Office$MsoHTMLProjectState__msoHTMLProjectStateDocumentLocked mixins Office$MsoHTMLProjectState {}
declare class Office$MsoHTMLProjectState__msoHTMLProjectStateDocumentProjectUnlocked mixins Office$MsoHTMLProjectState {}
declare class Office$MsoHTMLProjectState__msoHTMLProjectStateProjectLocked mixins Office$MsoHTMLProjectState {}


declare  class Office$MsoHyperlinkType {
  constructor(...args: empty): mixed;
static +msoHyperlinkInlineShape: Class<Office$MsoHyperlinkType__msoHyperlinkInlineShape> & Office$MsoHyperlinkType__msoHyperlinkInlineShape & 2;// 2
static +msoHyperlinkRange: Class<Office$MsoHyperlinkType__msoHyperlinkRange> & Office$MsoHyperlinkType__msoHyperlinkRange & 0;// 0
static +msoHyperlinkShape: Class<Office$MsoHyperlinkType__msoHyperlinkShape> & Office$MsoHyperlinkType__msoHyperlinkShape & 1;// 1

}

declare class Office$MsoHyperlinkType__msoHyperlinkInlineShape mixins Office$MsoHyperlinkType {}
declare class Office$MsoHyperlinkType__msoHyperlinkRange mixins Office$MsoHyperlinkType {}
declare class Office$MsoHyperlinkType__msoHyperlinkShape mixins Office$MsoHyperlinkType {}


declare  class Office$MsoIconType {
  constructor(...args: empty): mixed;
static +msoIconAlert: Class<Office$MsoIconType__msoIconAlert> & Office$MsoIconType__msoIconAlert & 2;// 2
static +msoIconAlertCritical: Class<Office$MsoIconType__msoIconAlertCritical> & Office$MsoIconType__msoIconAlertCritical & 7;// 7
static +msoIconAlertInfo: Class<Office$MsoIconType__msoIconAlertInfo> & Office$MsoIconType__msoIconAlertInfo & 4;// 4
static +msoIconAlertQuery: Class<Office$MsoIconType__msoIconAlertQuery> & Office$MsoIconType__msoIconAlertQuery & 6;// 6
static +msoIconAlertWarning: Class<Office$MsoIconType__msoIconAlertWarning> & Office$MsoIconType__msoIconAlertWarning & 5;// 5
static +msoIconNone: Class<Office$MsoIconType__msoIconNone> & Office$MsoIconType__msoIconNone & 0;// 0
static +msoIconTip: Class<Office$MsoIconType__msoIconTip> & Office$MsoIconType__msoIconTip & 3;// 3

}

declare class Office$MsoIconType__msoIconAlert mixins Office$MsoIconType {}
declare class Office$MsoIconType__msoIconAlertCritical mixins Office$MsoIconType {}
declare class Office$MsoIconType__msoIconAlertInfo mixins Office$MsoIconType {}
declare class Office$MsoIconType__msoIconAlertQuery mixins Office$MsoIconType {}
declare class Office$MsoIconType__msoIconAlertWarning mixins Office$MsoIconType {}
declare class Office$MsoIconType__msoIconNone mixins Office$MsoIconType {}
declare class Office$MsoIconType__msoIconTip mixins Office$MsoIconType {}


declare  class Office$MsoIodGroup {
  constructor(...args: empty): mixed;
static +msoIodGroupPIAs: Class<Office$MsoIodGroup__msoIodGroupPIAs> & Office$MsoIodGroup__msoIodGroupPIAs & 0;// 0
static +msoIodGroupVSTOR35Mgd: Class<Office$MsoIodGroup__msoIodGroupVSTOR35Mgd> & Office$MsoIodGroup__msoIodGroupVSTOR35Mgd & 1;// 1
static +msoIodGroupVSTOR40Mgd: Class<Office$MsoIodGroup__msoIodGroupVSTOR40Mgd> & Office$MsoIodGroup__msoIodGroupVSTOR40Mgd & 2;// 2

}

declare class Office$MsoIodGroup__msoIodGroupPIAs mixins Office$MsoIodGroup {}
declare class Office$MsoIodGroup__msoIodGroupVSTOR35Mgd mixins Office$MsoIodGroup {}
declare class Office$MsoIodGroup__msoIodGroupVSTOR40Mgd mixins Office$MsoIodGroup {}


declare  class Office$MsoLanguageID {
  constructor(...args: empty): mixed;
static +msoLanguageIDAfrikaans: Class<Office$MsoLanguageID__msoLanguageIDAfrikaans> & Office$MsoLanguageID__msoLanguageIDAfrikaans & 1078;// 1078
static +msoLanguageIDAlbanian: Class<Office$MsoLanguageID__msoLanguageIDAlbanian> & Office$MsoLanguageID__msoLanguageIDAlbanian & 1052;// 1052
static +msoLanguageIDAmharic: Class<Office$MsoLanguageID__msoLanguageIDAmharic> & Office$MsoLanguageID__msoLanguageIDAmharic & 1118;// 1118
static +msoLanguageIDArabic: Class<Office$MsoLanguageID__msoLanguageIDArabic> & Office$MsoLanguageID__msoLanguageIDArabic & 1025;// 1025
static +msoLanguageIDArabicAlgeria: Class<Office$MsoLanguageID__msoLanguageIDArabicAlgeria> & Office$MsoLanguageID__msoLanguageIDArabicAlgeria & 5121;// 5121
static +msoLanguageIDArabicBahrain: Class<Office$MsoLanguageID__msoLanguageIDArabicBahrain> & Office$MsoLanguageID__msoLanguageIDArabicBahrain & 15361;// 15361
static +msoLanguageIDArabicEgypt: Class<Office$MsoLanguageID__msoLanguageIDArabicEgypt> & Office$MsoLanguageID__msoLanguageIDArabicEgypt & 3073;// 3073
static +msoLanguageIDArabicIraq: Class<Office$MsoLanguageID__msoLanguageIDArabicIraq> & Office$MsoLanguageID__msoLanguageIDArabicIraq & 2049;// 2049
static +msoLanguageIDArabicJordan: Class<Office$MsoLanguageID__msoLanguageIDArabicJordan> & Office$MsoLanguageID__msoLanguageIDArabicJordan & 11265;// 11265
static +msoLanguageIDArabicKuwait: Class<Office$MsoLanguageID__msoLanguageIDArabicKuwait> & Office$MsoLanguageID__msoLanguageIDArabicKuwait & 13313;// 13313
static +msoLanguageIDArabicLebanon: Class<Office$MsoLanguageID__msoLanguageIDArabicLebanon> & Office$MsoLanguageID__msoLanguageIDArabicLebanon & 12289;// 12289
static +msoLanguageIDArabicLibya: Class<Office$MsoLanguageID__msoLanguageIDArabicLibya> & Office$MsoLanguageID__msoLanguageIDArabicLibya & 4097;// 4097
static +msoLanguageIDArabicMorocco: Class<Office$MsoLanguageID__msoLanguageIDArabicMorocco> & Office$MsoLanguageID__msoLanguageIDArabicMorocco & 6145;// 6145
static +msoLanguageIDArabicOman: Class<Office$MsoLanguageID__msoLanguageIDArabicOman> & Office$MsoLanguageID__msoLanguageIDArabicOman & 8193;// 8193
static +msoLanguageIDArabicQatar: Class<Office$MsoLanguageID__msoLanguageIDArabicQatar> & Office$MsoLanguageID__msoLanguageIDArabicQatar & 16385;// 16385
static +msoLanguageIDArabicSyria: Class<Office$MsoLanguageID__msoLanguageIDArabicSyria> & Office$MsoLanguageID__msoLanguageIDArabicSyria & 10241;// 10241
static +msoLanguageIDArabicTunisia: Class<Office$MsoLanguageID__msoLanguageIDArabicTunisia> & Office$MsoLanguageID__msoLanguageIDArabicTunisia & 7169;// 7169
static +msoLanguageIDArabicUAE: Class<Office$MsoLanguageID__msoLanguageIDArabicUAE> & Office$MsoLanguageID__msoLanguageIDArabicUAE & 14337;// 14337
static +msoLanguageIDArabicYemen: Class<Office$MsoLanguageID__msoLanguageIDArabicYemen> & Office$MsoLanguageID__msoLanguageIDArabicYemen & 9217;// 9217
static +msoLanguageIDArmenian: Class<Office$MsoLanguageID__msoLanguageIDArmenian> & Office$MsoLanguageID__msoLanguageIDArmenian & 1067;// 1067
static +msoLanguageIDAssamese: Class<Office$MsoLanguageID__msoLanguageIDAssamese> & Office$MsoLanguageID__msoLanguageIDAssamese & 1101;// 1101
static +msoLanguageIDAzeriCyrillic: Class<Office$MsoLanguageID__msoLanguageIDAzeriCyrillic> & Office$MsoLanguageID__msoLanguageIDAzeriCyrillic & 2092;// 2092
static +msoLanguageIDAzeriLatin: Class<Office$MsoLanguageID__msoLanguageIDAzeriLatin> & Office$MsoLanguageID__msoLanguageIDAzeriLatin & 1068;// 1068
static +msoLanguageIDBasque: Class<Office$MsoLanguageID__msoLanguageIDBasque> & Office$MsoLanguageID__msoLanguageIDBasque & 1069;// 1069
static +msoLanguageIDBelgianDutch: Class<Office$MsoLanguageID__msoLanguageIDBelgianDutch> & Office$MsoLanguageID__msoLanguageIDBelgianDutch & 2067;// 2067
static +msoLanguageIDBelgianFrench: Class<Office$MsoLanguageID__msoLanguageIDBelgianFrench> & Office$MsoLanguageID__msoLanguageIDBelgianFrench & 2060;// 2060
static +msoLanguageIDBengali: Class<Office$MsoLanguageID__msoLanguageIDBengali> & Office$MsoLanguageID__msoLanguageIDBengali & 1093;// 1093
static +msoLanguageIDBosnian: Class<Office$MsoLanguageID__msoLanguageIDBosnian> & Office$MsoLanguageID__msoLanguageIDBosnian & 4122;// 4122
static +msoLanguageIDBosnianBosniaHerzegovinaCyrillic: Class<Office$MsoLanguageID__msoLanguageIDBosnianBosniaHerzegovinaCyrillic> & Office$MsoLanguageID__msoLanguageIDBosnianBosniaHerzegovinaCyrillic & 8218;// 8218
static +msoLanguageIDBosnianBosniaHerzegovinaLatin: Class<Office$MsoLanguageID__msoLanguageIDBosnianBosniaHerzegovinaLatin> & Office$MsoLanguageID__msoLanguageIDBosnianBosniaHerzegovinaLatin & 5146;// 5146
static +msoLanguageIDBrazilianPortuguese: Class<Office$MsoLanguageID__msoLanguageIDBrazilianPortuguese> & Office$MsoLanguageID__msoLanguageIDBrazilianPortuguese & 1046;// 1046
static +msoLanguageIDBulgarian: Class<Office$MsoLanguageID__msoLanguageIDBulgarian> & Office$MsoLanguageID__msoLanguageIDBulgarian & 1026;// 1026
static +msoLanguageIDBurmese: Class<Office$MsoLanguageID__msoLanguageIDBurmese> & Office$MsoLanguageID__msoLanguageIDBurmese & 1109;// 1109
static +msoLanguageIDByelorussian: Class<Office$MsoLanguageID__msoLanguageIDByelorussian> & Office$MsoLanguageID__msoLanguageIDByelorussian & 1059;// 1059
static +msoLanguageIDCatalan: Class<Office$MsoLanguageID__msoLanguageIDCatalan> & Office$MsoLanguageID__msoLanguageIDCatalan & 1027;// 1027
static +msoLanguageIDCherokee: Class<Office$MsoLanguageID__msoLanguageIDCherokee> & Office$MsoLanguageID__msoLanguageIDCherokee & 1116;// 1116
static +msoLanguageIDChineseHongKongSAR: Class<Office$MsoLanguageID__msoLanguageIDChineseHongKongSAR> & Office$MsoLanguageID__msoLanguageIDChineseHongKongSAR & 3076;// 3076
static +msoLanguageIDChineseMacaoSAR: Class<Office$MsoLanguageID__msoLanguageIDChineseMacaoSAR> & Office$MsoLanguageID__msoLanguageIDChineseMacaoSAR & 5124;// 5124
static +msoLanguageIDChineseSingapore: Class<Office$MsoLanguageID__msoLanguageIDChineseSingapore> & Office$MsoLanguageID__msoLanguageIDChineseSingapore & 4100;// 4100
static +msoLanguageIDCroatian: Class<Office$MsoLanguageID__msoLanguageIDCroatian> & Office$MsoLanguageID__msoLanguageIDCroatian & 1050;// 1050
static +msoLanguageIDCzech: Class<Office$MsoLanguageID__msoLanguageIDCzech> & Office$MsoLanguageID__msoLanguageIDCzech & 1029;// 1029
static +msoLanguageIDDanish: Class<Office$MsoLanguageID__msoLanguageIDDanish> & Office$MsoLanguageID__msoLanguageIDDanish & 1030;// 1030
static +msoLanguageIDDivehi: Class<Office$MsoLanguageID__msoLanguageIDDivehi> & Office$MsoLanguageID__msoLanguageIDDivehi & 1125;// 1125
static +msoLanguageIDDutch: Class<Office$MsoLanguageID__msoLanguageIDDutch> & Office$MsoLanguageID__msoLanguageIDDutch & 1043;// 1043
static +msoLanguageIDDzongkhaBhutan: Class<Office$MsoLanguageID__msoLanguageIDDzongkhaBhutan> & Office$MsoLanguageID__msoLanguageIDDzongkhaBhutan & 2129;// 2129
static +msoLanguageIDEdo: Class<Office$MsoLanguageID__msoLanguageIDEdo> & Office$MsoLanguageID__msoLanguageIDEdo & 1126;// 1126
static +msoLanguageIDEnglishAUS: Class<Office$MsoLanguageID__msoLanguageIDEnglishAUS> & Office$MsoLanguageID__msoLanguageIDEnglishAUS & 3081;// 3081
static +msoLanguageIDEnglishBelize: Class<Office$MsoLanguageID__msoLanguageIDEnglishBelize> & Office$MsoLanguageID__msoLanguageIDEnglishBelize & 10249;// 10249
static +msoLanguageIDEnglishCanadian: Class<Office$MsoLanguageID__msoLanguageIDEnglishCanadian> & Office$MsoLanguageID__msoLanguageIDEnglishCanadian & 4105;// 4105
static +msoLanguageIDEnglishCaribbean: Class<Office$MsoLanguageID__msoLanguageIDEnglishCaribbean> & Office$MsoLanguageID__msoLanguageIDEnglishCaribbean & 9225;// 9225
static +msoLanguageIDEnglishIndonesia: Class<Office$MsoLanguageID__msoLanguageIDEnglishIndonesia> & Office$MsoLanguageID__msoLanguageIDEnglishIndonesia & 14345;// 14345
static +msoLanguageIDEnglishIreland: Class<Office$MsoLanguageID__msoLanguageIDEnglishIreland> & Office$MsoLanguageID__msoLanguageIDEnglishIreland & 6153;// 6153
static +msoLanguageIDEnglishJamaica: Class<Office$MsoLanguageID__msoLanguageIDEnglishJamaica> & Office$MsoLanguageID__msoLanguageIDEnglishJamaica & 8201;// 8201
static +msoLanguageIDEnglishNewZealand: Class<Office$MsoLanguageID__msoLanguageIDEnglishNewZealand> & Office$MsoLanguageID__msoLanguageIDEnglishNewZealand & 5129;// 5129
static +msoLanguageIDEnglishPhilippines: Class<Office$MsoLanguageID__msoLanguageIDEnglishPhilippines> & Office$MsoLanguageID__msoLanguageIDEnglishPhilippines & 13321;// 13321
static +msoLanguageIDEnglishSouthAfrica: Class<Office$MsoLanguageID__msoLanguageIDEnglishSouthAfrica> & Office$MsoLanguageID__msoLanguageIDEnglishSouthAfrica & 7177;// 7177
static +msoLanguageIDEnglishTrinidadTobago: Class<Office$MsoLanguageID__msoLanguageIDEnglishTrinidadTobago> & Office$MsoLanguageID__msoLanguageIDEnglishTrinidadTobago & 11273;// 11273
static +msoLanguageIDEnglishUK: Class<Office$MsoLanguageID__msoLanguageIDEnglishUK> & Office$MsoLanguageID__msoLanguageIDEnglishUK & 2057;// 2057
static +msoLanguageIDEnglishUS: Class<Office$MsoLanguageID__msoLanguageIDEnglishUS> & Office$MsoLanguageID__msoLanguageIDEnglishUS & 1033;// 1033
static +msoLanguageIDEnglishZimbabwe: Class<Office$MsoLanguageID__msoLanguageIDEnglishZimbabwe> & Office$MsoLanguageID__msoLanguageIDEnglishZimbabwe & 12297;// 12297
static +msoLanguageIDEstonian: Class<Office$MsoLanguageID__msoLanguageIDEstonian> & Office$MsoLanguageID__msoLanguageIDEstonian & 1061;// 1061
static +msoLanguageIDFaeroese: Class<Office$MsoLanguageID__msoLanguageIDFaeroese> & Office$MsoLanguageID__msoLanguageIDFaeroese & 1080;// 1080
static +msoLanguageIDFarsi: Class<Office$MsoLanguageID__msoLanguageIDFarsi> & Office$MsoLanguageID__msoLanguageIDFarsi & 1065;// 1065
static +msoLanguageIDFilipino: Class<Office$MsoLanguageID__msoLanguageIDFilipino> & Office$MsoLanguageID__msoLanguageIDFilipino & 1124;// 1124
static +msoLanguageIDFinnish: Class<Office$MsoLanguageID__msoLanguageIDFinnish> & Office$MsoLanguageID__msoLanguageIDFinnish & 1035;// 1035
static +msoLanguageIDFrench: Class<Office$MsoLanguageID__msoLanguageIDFrench> & Office$MsoLanguageID__msoLanguageIDFrench & 1036;// 1036
static +msoLanguageIDFrenchCameroon: Class<Office$MsoLanguageID__msoLanguageIDFrenchCameroon> & Office$MsoLanguageID__msoLanguageIDFrenchCameroon & 11276;// 11276
static +msoLanguageIDFrenchCanadian: Class<Office$MsoLanguageID__msoLanguageIDFrenchCanadian> & Office$MsoLanguageID__msoLanguageIDFrenchCanadian & 3084;// 3084
static +msoLanguageIDFrenchCongoDRC: Class<Office$MsoLanguageID__msoLanguageIDFrenchCongoDRC> & Office$MsoLanguageID__msoLanguageIDFrenchCongoDRC & 9228;// 9228
static +msoLanguageIDFrenchCotedIvoire: Class<Office$MsoLanguageID__msoLanguageIDFrenchCotedIvoire> & Office$MsoLanguageID__msoLanguageIDFrenchCotedIvoire & 12300;// 12300
static +msoLanguageIDFrenchHaiti: Class<Office$MsoLanguageID__msoLanguageIDFrenchHaiti> & Office$MsoLanguageID__msoLanguageIDFrenchHaiti & 15372;// 15372
static +msoLanguageIDFrenchLuxembourg: Class<Office$MsoLanguageID__msoLanguageIDFrenchLuxembourg> & Office$MsoLanguageID__msoLanguageIDFrenchLuxembourg & 5132;// 5132
static +msoLanguageIDFrenchMali: Class<Office$MsoLanguageID__msoLanguageIDFrenchMali> & Office$MsoLanguageID__msoLanguageIDFrenchMali & 13324;// 13324
static +msoLanguageIDFrenchMonaco: Class<Office$MsoLanguageID__msoLanguageIDFrenchMonaco> & Office$MsoLanguageID__msoLanguageIDFrenchMonaco & 6156;// 6156
static +msoLanguageIDFrenchMorocco: Class<Office$MsoLanguageID__msoLanguageIDFrenchMorocco> & Office$MsoLanguageID__msoLanguageIDFrenchMorocco & 14348;// 14348
static +msoLanguageIDFrenchReunion: Class<Office$MsoLanguageID__msoLanguageIDFrenchReunion> & Office$MsoLanguageID__msoLanguageIDFrenchReunion & 8204;// 8204
static +msoLanguageIDFrenchSenegal: Class<Office$MsoLanguageID__msoLanguageIDFrenchSenegal> & Office$MsoLanguageID__msoLanguageIDFrenchSenegal & 10252;// 10252
static +msoLanguageIDFrenchWestIndies: Class<Office$MsoLanguageID__msoLanguageIDFrenchWestIndies> & Office$MsoLanguageID__msoLanguageIDFrenchWestIndies & 7180;// 7180
static +msoLanguageIDFrenchZaire: Class<Office$MsoLanguageID__msoLanguageIDFrenchZaire> & Office$MsoLanguageID__msoLanguageIDFrenchZaire & 9228;// 9228
static +msoLanguageIDFrisianNetherlands: Class<Office$MsoLanguageID__msoLanguageIDFrisianNetherlands> & Office$MsoLanguageID__msoLanguageIDFrisianNetherlands & 1122;// 1122
static +msoLanguageIDFulfulde: Class<Office$MsoLanguageID__msoLanguageIDFulfulde> & Office$MsoLanguageID__msoLanguageIDFulfulde & 1127;// 1127
static +msoLanguageIDGaelicIreland: Class<Office$MsoLanguageID__msoLanguageIDGaelicIreland> & Office$MsoLanguageID__msoLanguageIDGaelicIreland & 2108;// 2108
static +msoLanguageIDGaelicScotland: Class<Office$MsoLanguageID__msoLanguageIDGaelicScotland> & Office$MsoLanguageID__msoLanguageIDGaelicScotland & 1084;// 1084
static +msoLanguageIDGalician: Class<Office$MsoLanguageID__msoLanguageIDGalician> & Office$MsoLanguageID__msoLanguageIDGalician & 1110;// 1110
static +msoLanguageIDGeorgian: Class<Office$MsoLanguageID__msoLanguageIDGeorgian> & Office$MsoLanguageID__msoLanguageIDGeorgian & 1079;// 1079
static +msoLanguageIDGerman: Class<Office$MsoLanguageID__msoLanguageIDGerman> & Office$MsoLanguageID__msoLanguageIDGerman & 1031;// 1031
static +msoLanguageIDGermanAustria: Class<Office$MsoLanguageID__msoLanguageIDGermanAustria> & Office$MsoLanguageID__msoLanguageIDGermanAustria & 3079;// 3079
static +msoLanguageIDGermanLiechtenstein: Class<Office$MsoLanguageID__msoLanguageIDGermanLiechtenstein> & Office$MsoLanguageID__msoLanguageIDGermanLiechtenstein & 5127;// 5127
static +msoLanguageIDGermanLuxembourg: Class<Office$MsoLanguageID__msoLanguageIDGermanLuxembourg> & Office$MsoLanguageID__msoLanguageIDGermanLuxembourg & 4103;// 4103
static +msoLanguageIDGreek: Class<Office$MsoLanguageID__msoLanguageIDGreek> & Office$MsoLanguageID__msoLanguageIDGreek & 1032;// 1032
static +msoLanguageIDGuarani: Class<Office$MsoLanguageID__msoLanguageIDGuarani> & Office$MsoLanguageID__msoLanguageIDGuarani & 1140;// 1140
static +msoLanguageIDGujarati: Class<Office$MsoLanguageID__msoLanguageIDGujarati> & Office$MsoLanguageID__msoLanguageIDGujarati & 1095;// 1095
static +msoLanguageIDHausa: Class<Office$MsoLanguageID__msoLanguageIDHausa> & Office$MsoLanguageID__msoLanguageIDHausa & 1128;// 1128
static +msoLanguageIDHawaiian: Class<Office$MsoLanguageID__msoLanguageIDHawaiian> & Office$MsoLanguageID__msoLanguageIDHawaiian & 1141;// 1141
static +msoLanguageIDHebrew: Class<Office$MsoLanguageID__msoLanguageIDHebrew> & Office$MsoLanguageID__msoLanguageIDHebrew & 1037;// 1037
static +msoLanguageIDHindi: Class<Office$MsoLanguageID__msoLanguageIDHindi> & Office$MsoLanguageID__msoLanguageIDHindi & 1081;// 1081
static +msoLanguageIDHungarian: Class<Office$MsoLanguageID__msoLanguageIDHungarian> & Office$MsoLanguageID__msoLanguageIDHungarian & 1038;// 1038
static +msoLanguageIDIbibio: Class<Office$MsoLanguageID__msoLanguageIDIbibio> & Office$MsoLanguageID__msoLanguageIDIbibio & 1129;// 1129
static +msoLanguageIDIcelandic: Class<Office$MsoLanguageID__msoLanguageIDIcelandic> & Office$MsoLanguageID__msoLanguageIDIcelandic & 1039;// 1039
static +msoLanguageIDIgbo: Class<Office$MsoLanguageID__msoLanguageIDIgbo> & Office$MsoLanguageID__msoLanguageIDIgbo & 1136;// 1136
static +msoLanguageIDIndonesian: Class<Office$MsoLanguageID__msoLanguageIDIndonesian> & Office$MsoLanguageID__msoLanguageIDIndonesian & 1057;// 1057
static +msoLanguageIDInuktitut: Class<Office$MsoLanguageID__msoLanguageIDInuktitut> & Office$MsoLanguageID__msoLanguageIDInuktitut & 1117;// 1117
static +msoLanguageIDItalian: Class<Office$MsoLanguageID__msoLanguageIDItalian> & Office$MsoLanguageID__msoLanguageIDItalian & 1040;// 1040
static +msoLanguageIDJapanese: Class<Office$MsoLanguageID__msoLanguageIDJapanese> & Office$MsoLanguageID__msoLanguageIDJapanese & 1041;// 1041
static +msoLanguageIDKannada: Class<Office$MsoLanguageID__msoLanguageIDKannada> & Office$MsoLanguageID__msoLanguageIDKannada & 1099;// 1099
static +msoLanguageIDKanuri: Class<Office$MsoLanguageID__msoLanguageIDKanuri> & Office$MsoLanguageID__msoLanguageIDKanuri & 1137;// 1137
static +msoLanguageIDKashmiri: Class<Office$MsoLanguageID__msoLanguageIDKashmiri> & Office$MsoLanguageID__msoLanguageIDKashmiri & 1120;// 1120
static +msoLanguageIDKashmiriDevanagari: Class<Office$MsoLanguageID__msoLanguageIDKashmiriDevanagari> & Office$MsoLanguageID__msoLanguageIDKashmiriDevanagari & 2144;// 2144
static +msoLanguageIDKazakh: Class<Office$MsoLanguageID__msoLanguageIDKazakh> & Office$MsoLanguageID__msoLanguageIDKazakh & 1087;// 1087
static +msoLanguageIDKhmer: Class<Office$MsoLanguageID__msoLanguageIDKhmer> & Office$MsoLanguageID__msoLanguageIDKhmer & 1107;// 1107
static +msoLanguageIDKirghiz: Class<Office$MsoLanguageID__msoLanguageIDKirghiz> & Office$MsoLanguageID__msoLanguageIDKirghiz & 1088;// 1088
static +msoLanguageIDKonkani: Class<Office$MsoLanguageID__msoLanguageIDKonkani> & Office$MsoLanguageID__msoLanguageIDKonkani & 1111;// 1111
static +msoLanguageIDKorean: Class<Office$MsoLanguageID__msoLanguageIDKorean> & Office$MsoLanguageID__msoLanguageIDKorean & 1042;// 1042
static +msoLanguageIDKyrgyz: Class<Office$MsoLanguageID__msoLanguageIDKyrgyz> & Office$MsoLanguageID__msoLanguageIDKyrgyz & 1088;// 1088
static +msoLanguageIDLao: Class<Office$MsoLanguageID__msoLanguageIDLao> & Office$MsoLanguageID__msoLanguageIDLao & 1108;// 1108
static +msoLanguageIDLatin: Class<Office$MsoLanguageID__msoLanguageIDLatin> & Office$MsoLanguageID__msoLanguageIDLatin & 1142;// 1142
static +msoLanguageIDLatvian: Class<Office$MsoLanguageID__msoLanguageIDLatvian> & Office$MsoLanguageID__msoLanguageIDLatvian & 1062;// 1062
static +msoLanguageIDLithuanian: Class<Office$MsoLanguageID__msoLanguageIDLithuanian> & Office$MsoLanguageID__msoLanguageIDLithuanian & 1063;// 1063
static +msoLanguageIDMacedonian: Class<Office$MsoLanguageID__msoLanguageIDMacedonian> & Office$MsoLanguageID__msoLanguageIDMacedonian & 1071;// 1071
static +msoLanguageIDMacedonianFYROM: Class<Office$MsoLanguageID__msoLanguageIDMacedonianFYROM> & Office$MsoLanguageID__msoLanguageIDMacedonianFYROM & 1071;// 1071
static +msoLanguageIDMalayalam: Class<Office$MsoLanguageID__msoLanguageIDMalayalam> & Office$MsoLanguageID__msoLanguageIDMalayalam & 1100;// 1100
static +msoLanguageIDMalayBruneiDarussalam: Class<Office$MsoLanguageID__msoLanguageIDMalayBruneiDarussalam> & Office$MsoLanguageID__msoLanguageIDMalayBruneiDarussalam & 2110;// 2110
static +msoLanguageIDMalaysian: Class<Office$MsoLanguageID__msoLanguageIDMalaysian> & Office$MsoLanguageID__msoLanguageIDMalaysian & 1086;// 1086
static +msoLanguageIDMaltese: Class<Office$MsoLanguageID__msoLanguageIDMaltese> & Office$MsoLanguageID__msoLanguageIDMaltese & 1082;// 1082
static +msoLanguageIDManipuri: Class<Office$MsoLanguageID__msoLanguageIDManipuri> & Office$MsoLanguageID__msoLanguageIDManipuri & 1112;// 1112
static +msoLanguageIDMaori: Class<Office$MsoLanguageID__msoLanguageIDMaori> & Office$MsoLanguageID__msoLanguageIDMaori & 1153;// 1153
static +msoLanguageIDMarathi: Class<Office$MsoLanguageID__msoLanguageIDMarathi> & Office$MsoLanguageID__msoLanguageIDMarathi & 1102;// 1102
static +msoLanguageIDMexicanSpanish: Class<Office$MsoLanguageID__msoLanguageIDMexicanSpanish> & Office$MsoLanguageID__msoLanguageIDMexicanSpanish & 2058;// 2058
static +msoLanguageIDMixed: Class<Office$MsoLanguageID__msoLanguageIDMixed> & Office$MsoLanguageID__msoLanguageIDMixed & -2;// -2
static +msoLanguageIDMongolian: Class<Office$MsoLanguageID__msoLanguageIDMongolian> & Office$MsoLanguageID__msoLanguageIDMongolian & 1104;// 1104
static +msoLanguageIDNepali: Class<Office$MsoLanguageID__msoLanguageIDNepali> & Office$MsoLanguageID__msoLanguageIDNepali & 1121;// 1121
static +msoLanguageIDNone: Class<Office$MsoLanguageID__msoLanguageIDNone> & Office$MsoLanguageID__msoLanguageIDNone & 0;// 0
static +msoLanguageIDNoProofing: Class<Office$MsoLanguageID__msoLanguageIDNoProofing> & Office$MsoLanguageID__msoLanguageIDNoProofing & 1024;// 1024
static +msoLanguageIDNorwegianBokmol: Class<Office$MsoLanguageID__msoLanguageIDNorwegianBokmol> & Office$MsoLanguageID__msoLanguageIDNorwegianBokmol & 1044;// 1044
static +msoLanguageIDNorwegianNynorsk: Class<Office$MsoLanguageID__msoLanguageIDNorwegianNynorsk> & Office$MsoLanguageID__msoLanguageIDNorwegianNynorsk & 2068;// 2068
static +msoLanguageIDOriya: Class<Office$MsoLanguageID__msoLanguageIDOriya> & Office$MsoLanguageID__msoLanguageIDOriya & 1096;// 1096
static +msoLanguageIDOromo: Class<Office$MsoLanguageID__msoLanguageIDOromo> & Office$MsoLanguageID__msoLanguageIDOromo & 1138;// 1138
static +msoLanguageIDPashto: Class<Office$MsoLanguageID__msoLanguageIDPashto> & Office$MsoLanguageID__msoLanguageIDPashto & 1123;// 1123
static +msoLanguageIDPolish: Class<Office$MsoLanguageID__msoLanguageIDPolish> & Office$MsoLanguageID__msoLanguageIDPolish & 1045;// 1045
static +msoLanguageIDPortuguese: Class<Office$MsoLanguageID__msoLanguageIDPortuguese> & Office$MsoLanguageID__msoLanguageIDPortuguese & 2070;// 2070
static +msoLanguageIDPunjabi: Class<Office$MsoLanguageID__msoLanguageIDPunjabi> & Office$MsoLanguageID__msoLanguageIDPunjabi & 1094;// 1094
static +msoLanguageIDQuechuaBolivia: Class<Office$MsoLanguageID__msoLanguageIDQuechuaBolivia> & Office$MsoLanguageID__msoLanguageIDQuechuaBolivia & 1131;// 1131
static +msoLanguageIDQuechuaEcuador: Class<Office$MsoLanguageID__msoLanguageIDQuechuaEcuador> & Office$MsoLanguageID__msoLanguageIDQuechuaEcuador & 2155;// 2155
static +msoLanguageIDQuechuaPeru: Class<Office$MsoLanguageID__msoLanguageIDQuechuaPeru> & Office$MsoLanguageID__msoLanguageIDQuechuaPeru & 3179;// 3179
static +msoLanguageIDRhaetoRomanic: Class<Office$MsoLanguageID__msoLanguageIDRhaetoRomanic> & Office$MsoLanguageID__msoLanguageIDRhaetoRomanic & 1047;// 1047
static +msoLanguageIDRomanian: Class<Office$MsoLanguageID__msoLanguageIDRomanian> & Office$MsoLanguageID__msoLanguageIDRomanian & 1048;// 1048
static +msoLanguageIDRomanianMoldova: Class<Office$MsoLanguageID__msoLanguageIDRomanianMoldova> & Office$MsoLanguageID__msoLanguageIDRomanianMoldova & 2072;// 2072
static +msoLanguageIDRussian: Class<Office$MsoLanguageID__msoLanguageIDRussian> & Office$MsoLanguageID__msoLanguageIDRussian & 1049;// 1049
static +msoLanguageIDRussianMoldova: Class<Office$MsoLanguageID__msoLanguageIDRussianMoldova> & Office$MsoLanguageID__msoLanguageIDRussianMoldova & 2073;// 2073
static +msoLanguageIDSamiLappish: Class<Office$MsoLanguageID__msoLanguageIDSamiLappish> & Office$MsoLanguageID__msoLanguageIDSamiLappish & 1083;// 1083
static +msoLanguageIDSanskrit: Class<Office$MsoLanguageID__msoLanguageIDSanskrit> & Office$MsoLanguageID__msoLanguageIDSanskrit & 1103;// 1103
static +msoLanguageIDSepedi: Class<Office$MsoLanguageID__msoLanguageIDSepedi> & Office$MsoLanguageID__msoLanguageIDSepedi & 1132;// 1132
static +msoLanguageIDSerbianBosniaHerzegovinaCyrillic: Class<Office$MsoLanguageID__msoLanguageIDSerbianBosniaHerzegovinaCyrillic> & Office$MsoLanguageID__msoLanguageIDSerbianBosniaHerzegovinaCyrillic & 7194;// 7194
static +msoLanguageIDSerbianBosniaHerzegovinaLatin: Class<Office$MsoLanguageID__msoLanguageIDSerbianBosniaHerzegovinaLatin> & Office$MsoLanguageID__msoLanguageIDSerbianBosniaHerzegovinaLatin & 6170;// 6170
static +msoLanguageIDSerbianCyrillic: Class<Office$MsoLanguageID__msoLanguageIDSerbianCyrillic> & Office$MsoLanguageID__msoLanguageIDSerbianCyrillic & 3098;// 3098
static +msoLanguageIDSerbianLatin: Class<Office$MsoLanguageID__msoLanguageIDSerbianLatin> & Office$MsoLanguageID__msoLanguageIDSerbianLatin & 2074;// 2074
static +msoLanguageIDSesotho: Class<Office$MsoLanguageID__msoLanguageIDSesotho> & Office$MsoLanguageID__msoLanguageIDSesotho & 1072;// 1072
static +msoLanguageIDSimplifiedChinese: Class<Office$MsoLanguageID__msoLanguageIDSimplifiedChinese> & Office$MsoLanguageID__msoLanguageIDSimplifiedChinese & 2052;// 2052
static +msoLanguageIDSindhi: Class<Office$MsoLanguageID__msoLanguageIDSindhi> & Office$MsoLanguageID__msoLanguageIDSindhi & 1113;// 1113
static +msoLanguageIDSindhiPakistan: Class<Office$MsoLanguageID__msoLanguageIDSindhiPakistan> & Office$MsoLanguageID__msoLanguageIDSindhiPakistan & 2137;// 2137
static +msoLanguageIDSinhalese: Class<Office$MsoLanguageID__msoLanguageIDSinhalese> & Office$MsoLanguageID__msoLanguageIDSinhalese & 1115;// 1115
static +msoLanguageIDSlovak: Class<Office$MsoLanguageID__msoLanguageIDSlovak> & Office$MsoLanguageID__msoLanguageIDSlovak & 1051;// 1051
static +msoLanguageIDSlovenian: Class<Office$MsoLanguageID__msoLanguageIDSlovenian> & Office$MsoLanguageID__msoLanguageIDSlovenian & 1060;// 1060
static +msoLanguageIDSomali: Class<Office$MsoLanguageID__msoLanguageIDSomali> & Office$MsoLanguageID__msoLanguageIDSomali & 1143;// 1143
static +msoLanguageIDSorbian: Class<Office$MsoLanguageID__msoLanguageIDSorbian> & Office$MsoLanguageID__msoLanguageIDSorbian & 1070;// 1070
static +msoLanguageIDSpanish: Class<Office$MsoLanguageID__msoLanguageIDSpanish> & Office$MsoLanguageID__msoLanguageIDSpanish & 1034;// 1034
static +msoLanguageIDSpanishArgentina: Class<Office$MsoLanguageID__msoLanguageIDSpanishArgentina> & Office$MsoLanguageID__msoLanguageIDSpanishArgentina & 11274;// 11274
static +msoLanguageIDSpanishBolivia: Class<Office$MsoLanguageID__msoLanguageIDSpanishBolivia> & Office$MsoLanguageID__msoLanguageIDSpanishBolivia & 16394;// 16394
static +msoLanguageIDSpanishChile: Class<Office$MsoLanguageID__msoLanguageIDSpanishChile> & Office$MsoLanguageID__msoLanguageIDSpanishChile & 13322;// 13322
static +msoLanguageIDSpanishColombia: Class<Office$MsoLanguageID__msoLanguageIDSpanishColombia> & Office$MsoLanguageID__msoLanguageIDSpanishColombia & 9226;// 9226
static +msoLanguageIDSpanishCostaRica: Class<Office$MsoLanguageID__msoLanguageIDSpanishCostaRica> & Office$MsoLanguageID__msoLanguageIDSpanishCostaRica & 5130;// 5130
static +msoLanguageIDSpanishDominicanRepublic: Class<Office$MsoLanguageID__msoLanguageIDSpanishDominicanRepublic> & Office$MsoLanguageID__msoLanguageIDSpanishDominicanRepublic & 7178;// 7178
static +msoLanguageIDSpanishEcuador: Class<Office$MsoLanguageID__msoLanguageIDSpanishEcuador> & Office$MsoLanguageID__msoLanguageIDSpanishEcuador & 12298;// 12298
static +msoLanguageIDSpanishElSalvador: Class<Office$MsoLanguageID__msoLanguageIDSpanishElSalvador> & Office$MsoLanguageID__msoLanguageIDSpanishElSalvador & 17418;// 17418
static +msoLanguageIDSpanishGuatemala: Class<Office$MsoLanguageID__msoLanguageIDSpanishGuatemala> & Office$MsoLanguageID__msoLanguageIDSpanishGuatemala & 4106;// 4106
static +msoLanguageIDSpanishHonduras: Class<Office$MsoLanguageID__msoLanguageIDSpanishHonduras> & Office$MsoLanguageID__msoLanguageIDSpanishHonduras & 18442;// 18442
static +msoLanguageIDSpanishModernSort: Class<Office$MsoLanguageID__msoLanguageIDSpanishModernSort> & Office$MsoLanguageID__msoLanguageIDSpanishModernSort & 3082;// 3082
static +msoLanguageIDSpanishNicaragua: Class<Office$MsoLanguageID__msoLanguageIDSpanishNicaragua> & Office$MsoLanguageID__msoLanguageIDSpanishNicaragua & 19466;// 19466
static +msoLanguageIDSpanishPanama: Class<Office$MsoLanguageID__msoLanguageIDSpanishPanama> & Office$MsoLanguageID__msoLanguageIDSpanishPanama & 6154;// 6154
static +msoLanguageIDSpanishParaguay: Class<Office$MsoLanguageID__msoLanguageIDSpanishParaguay> & Office$MsoLanguageID__msoLanguageIDSpanishParaguay & 15370;// 15370
static +msoLanguageIDSpanishPeru: Class<Office$MsoLanguageID__msoLanguageIDSpanishPeru> & Office$MsoLanguageID__msoLanguageIDSpanishPeru & 10250;// 10250
static +msoLanguageIDSpanishPuertoRico: Class<Office$MsoLanguageID__msoLanguageIDSpanishPuertoRico> & Office$MsoLanguageID__msoLanguageIDSpanishPuertoRico & 20490;// 20490
static +msoLanguageIDSpanishUruguay: Class<Office$MsoLanguageID__msoLanguageIDSpanishUruguay> & Office$MsoLanguageID__msoLanguageIDSpanishUruguay & 14346;// 14346
static +msoLanguageIDSpanishVenezuela: Class<Office$MsoLanguageID__msoLanguageIDSpanishVenezuela> & Office$MsoLanguageID__msoLanguageIDSpanishVenezuela & 8202;// 8202
static +msoLanguageIDSutu: Class<Office$MsoLanguageID__msoLanguageIDSutu> & Office$MsoLanguageID__msoLanguageIDSutu & 1072;// 1072
static +msoLanguageIDSwahili: Class<Office$MsoLanguageID__msoLanguageIDSwahili> & Office$MsoLanguageID__msoLanguageIDSwahili & 1089;// 1089
static +msoLanguageIDSwedish: Class<Office$MsoLanguageID__msoLanguageIDSwedish> & Office$MsoLanguageID__msoLanguageIDSwedish & 1053;// 1053
static +msoLanguageIDSwedishFinland: Class<Office$MsoLanguageID__msoLanguageIDSwedishFinland> & Office$MsoLanguageID__msoLanguageIDSwedishFinland & 2077;// 2077
static +msoLanguageIDSwissFrench: Class<Office$MsoLanguageID__msoLanguageIDSwissFrench> & Office$MsoLanguageID__msoLanguageIDSwissFrench & 4108;// 4108
static +msoLanguageIDSwissGerman: Class<Office$MsoLanguageID__msoLanguageIDSwissGerman> & Office$MsoLanguageID__msoLanguageIDSwissGerman & 2055;// 2055
static +msoLanguageIDSwissItalian: Class<Office$MsoLanguageID__msoLanguageIDSwissItalian> & Office$MsoLanguageID__msoLanguageIDSwissItalian & 2064;// 2064
static +msoLanguageIDSyriac: Class<Office$MsoLanguageID__msoLanguageIDSyriac> & Office$MsoLanguageID__msoLanguageIDSyriac & 1114;// 1114
static +msoLanguageIDTajik: Class<Office$MsoLanguageID__msoLanguageIDTajik> & Office$MsoLanguageID__msoLanguageIDTajik & 1064;// 1064
static +msoLanguageIDTamazight: Class<Office$MsoLanguageID__msoLanguageIDTamazight> & Office$MsoLanguageID__msoLanguageIDTamazight & 1119;// 1119
static +msoLanguageIDTamazightLatin: Class<Office$MsoLanguageID__msoLanguageIDTamazightLatin> & Office$MsoLanguageID__msoLanguageIDTamazightLatin & 2143;// 2143
static +msoLanguageIDTamil: Class<Office$MsoLanguageID__msoLanguageIDTamil> & Office$MsoLanguageID__msoLanguageIDTamil & 1097;// 1097
static +msoLanguageIDTatar: Class<Office$MsoLanguageID__msoLanguageIDTatar> & Office$MsoLanguageID__msoLanguageIDTatar & 1092;// 1092
static +msoLanguageIDTelugu: Class<Office$MsoLanguageID__msoLanguageIDTelugu> & Office$MsoLanguageID__msoLanguageIDTelugu & 1098;// 1098
static +msoLanguageIDThai: Class<Office$MsoLanguageID__msoLanguageIDThai> & Office$MsoLanguageID__msoLanguageIDThai & 1054;// 1054
static +msoLanguageIDTibetan: Class<Office$MsoLanguageID__msoLanguageIDTibetan> & Office$MsoLanguageID__msoLanguageIDTibetan & 1105;// 1105
static +msoLanguageIDTigrignaEritrea: Class<Office$MsoLanguageID__msoLanguageIDTigrignaEritrea> & Office$MsoLanguageID__msoLanguageIDTigrignaEritrea & 2163;// 2163
static +msoLanguageIDTigrignaEthiopic: Class<Office$MsoLanguageID__msoLanguageIDTigrignaEthiopic> & Office$MsoLanguageID__msoLanguageIDTigrignaEthiopic & 1139;// 1139
static +msoLanguageIDTraditionalChinese: Class<Office$MsoLanguageID__msoLanguageIDTraditionalChinese> & Office$MsoLanguageID__msoLanguageIDTraditionalChinese & 1028;// 1028
static +msoLanguageIDTsonga: Class<Office$MsoLanguageID__msoLanguageIDTsonga> & Office$MsoLanguageID__msoLanguageIDTsonga & 1073;// 1073
static +msoLanguageIDTswana: Class<Office$MsoLanguageID__msoLanguageIDTswana> & Office$MsoLanguageID__msoLanguageIDTswana & 1074;// 1074
static +msoLanguageIDTurkish: Class<Office$MsoLanguageID__msoLanguageIDTurkish> & Office$MsoLanguageID__msoLanguageIDTurkish & 1055;// 1055
static +msoLanguageIDTurkmen: Class<Office$MsoLanguageID__msoLanguageIDTurkmen> & Office$MsoLanguageID__msoLanguageIDTurkmen & 1090;// 1090
static +msoLanguageIDUkrainian: Class<Office$MsoLanguageID__msoLanguageIDUkrainian> & Office$MsoLanguageID__msoLanguageIDUkrainian & 1058;// 1058
static +msoLanguageIDUrdu: Class<Office$MsoLanguageID__msoLanguageIDUrdu> & Office$MsoLanguageID__msoLanguageIDUrdu & 1056;// 1056
static +msoLanguageIDUzbekCyrillic: Class<Office$MsoLanguageID__msoLanguageIDUzbekCyrillic> & Office$MsoLanguageID__msoLanguageIDUzbekCyrillic & 2115;// 2115
static +msoLanguageIDUzbekLatin: Class<Office$MsoLanguageID__msoLanguageIDUzbekLatin> & Office$MsoLanguageID__msoLanguageIDUzbekLatin & 1091;// 1091
static +msoLanguageIDVenda: Class<Office$MsoLanguageID__msoLanguageIDVenda> & Office$MsoLanguageID__msoLanguageIDVenda & 1075;// 1075
static +msoLanguageIDVietnamese: Class<Office$MsoLanguageID__msoLanguageIDVietnamese> & Office$MsoLanguageID__msoLanguageIDVietnamese & 1066;// 1066
static +msoLanguageIDWelsh: Class<Office$MsoLanguageID__msoLanguageIDWelsh> & Office$MsoLanguageID__msoLanguageIDWelsh & 1106;// 1106
static +msoLanguageIDXhosa: Class<Office$MsoLanguageID__msoLanguageIDXhosa> & Office$MsoLanguageID__msoLanguageIDXhosa & 1076;// 1076
static +msoLanguageIDYi: Class<Office$MsoLanguageID__msoLanguageIDYi> & Office$MsoLanguageID__msoLanguageIDYi & 1144;// 1144
static +msoLanguageIDYiddish: Class<Office$MsoLanguageID__msoLanguageIDYiddish> & Office$MsoLanguageID__msoLanguageIDYiddish & 1085;// 1085
static +msoLanguageIDYoruba: Class<Office$MsoLanguageID__msoLanguageIDYoruba> & Office$MsoLanguageID__msoLanguageIDYoruba & 1130;// 1130
static +msoLanguageIDZulu: Class<Office$MsoLanguageID__msoLanguageIDZulu> & Office$MsoLanguageID__msoLanguageIDZulu & 1077;// 1077

}

declare class Office$MsoLanguageID__msoLanguageIDAfrikaans mixins Office$MsoLanguageID {}
declare class Office$MsoLanguageID__msoLanguageIDAlbanian mixins Office$MsoLanguageID {}
declare class Office$MsoLanguageID__msoLanguageIDAmharic mixins Office$MsoLanguageID {}
declare class Office$MsoLanguageID__msoLanguageIDArabic mixins Office$MsoLanguageID {}
declare class Office$MsoLanguageID__msoLanguageIDArabicAlgeria mixins Office$MsoLanguageID {}
declare class Office$MsoLanguageID__msoLanguageIDArabicBahrain mixins Office$MsoLanguageID {}
declare class Office$MsoLanguageID__msoLanguageIDArabicEgypt mixins Office$MsoLanguageID {}
declare class Office$MsoLanguageID__msoLanguageIDArabicIraq mixins Office$MsoLanguageID {}
declare class Office$MsoLanguageID__msoLanguageIDArabicJordan mixins Office$MsoLanguageID {}
declare class Office$MsoLanguageID__msoLanguageIDArabicKuwait mixins Office$MsoLanguageID {}
declare class Office$MsoLanguageID__msoLanguageIDArabicLebanon mixins Office$MsoLanguageID {}
declare class Office$MsoLanguageID__msoLanguageIDArabicLibya mixins Office$MsoLanguageID {}
declare class Office$MsoLanguageID__msoLanguageIDArabicMorocco mixins Office$MsoLanguageID {}
declare class Office$MsoLanguageID__msoLanguageIDArabicOman mixins Office$MsoLanguageID {}
declare class Office$MsoLanguageID__msoLanguageIDArabicQatar mixins Office$MsoLanguageID {}
declare class Office$MsoLanguageID__msoLanguageIDArabicSyria mixins Office$MsoLanguageID {}
declare class Office$MsoLanguageID__msoLanguageIDArabicTunisia mixins Office$MsoLanguageID {}
declare class Office$MsoLanguageID__msoLanguageIDArabicUAE mixins Office$MsoLanguageID {}
declare class Office$MsoLanguageID__msoLanguageIDArabicYemen mixins Office$MsoLanguageID {}
declare class Office$MsoLanguageID__msoLanguageIDArmenian mixins Office$MsoLanguageID {}
declare class Office$MsoLanguageID__msoLanguageIDAssamese mixins Office$MsoLanguageID {}
declare class Office$MsoLanguageID__msoLanguageIDAzeriCyrillic mixins Office$MsoLanguageID {}
declare class Office$MsoLanguageID__msoLanguageIDAzeriLatin mixins Office$MsoLanguageID {}
declare class Office$MsoLanguageID__msoLanguageIDBasque mixins Office$MsoLanguageID {}
declare class Office$MsoLanguageID__msoLanguageIDBelgianDutch mixins Office$MsoLanguageID {}
declare class Office$MsoLanguageID__msoLanguageIDBelgianFrench mixins Office$MsoLanguageID {}
declare class Office$MsoLanguageID__msoLanguageIDBengali mixins Office$MsoLanguageID {}
declare class Office$MsoLanguageID__msoLanguageIDBosnian mixins Office$MsoLanguageID {}
declare class Office$MsoLanguageID__msoLanguageIDBosnianBosniaHerzegovinaCyrillic mixins Office$MsoLanguageID {}
declare class Office$MsoLanguageID__msoLanguageIDBosnianBosniaHerzegovinaLatin mixins Office$MsoLanguageID {}
declare class Office$MsoLanguageID__msoLanguageIDBrazilianPortuguese mixins Office$MsoLanguageID {}
declare class Office$MsoLanguageID__msoLanguageIDBulgarian mixins Office$MsoLanguageID {}
declare class Office$MsoLanguageID__msoLanguageIDBurmese mixins Office$MsoLanguageID {}
declare class Office$MsoLanguageID__msoLanguageIDByelorussian mixins Office$MsoLanguageID {}
declare class Office$MsoLanguageID__msoLanguageIDCatalan mixins Office$MsoLanguageID {}
declare class Office$MsoLanguageID__msoLanguageIDCherokee mixins Office$MsoLanguageID {}
declare class Office$MsoLanguageID__msoLanguageIDChineseHongKongSAR mixins Office$MsoLanguageID {}
declare class Office$MsoLanguageID__msoLanguageIDChineseMacaoSAR mixins Office$MsoLanguageID {}
declare class Office$MsoLanguageID__msoLanguageIDChineseSingapore mixins Office$MsoLanguageID {}
declare class Office$MsoLanguageID__msoLanguageIDCroatian mixins Office$MsoLanguageID {}
declare class Office$MsoLanguageID__msoLanguageIDCzech mixins Office$MsoLanguageID {}
declare class Office$MsoLanguageID__msoLanguageIDDanish mixins Office$MsoLanguageID {}
declare class Office$MsoLanguageID__msoLanguageIDDivehi mixins Office$MsoLanguageID {}
declare class Office$MsoLanguageID__msoLanguageIDDutch mixins Office$MsoLanguageID {}
declare class Office$MsoLanguageID__msoLanguageIDDzongkhaBhutan mixins Office$MsoLanguageID {}
declare class Office$MsoLanguageID__msoLanguageIDEdo mixins Office$MsoLanguageID {}
declare class Office$MsoLanguageID__msoLanguageIDEnglishAUS mixins Office$MsoLanguageID {}
declare class Office$MsoLanguageID__msoLanguageIDEnglishBelize mixins Office$MsoLanguageID {}
declare class Office$MsoLanguageID__msoLanguageIDEnglishCanadian mixins Office$MsoLanguageID {}
declare class Office$MsoLanguageID__msoLanguageIDEnglishCaribbean mixins Office$MsoLanguageID {}
declare class Office$MsoLanguageID__msoLanguageIDEnglishIndonesia mixins Office$MsoLanguageID {}
declare class Office$MsoLanguageID__msoLanguageIDEnglishIreland mixins Office$MsoLanguageID {}
declare class Office$MsoLanguageID__msoLanguageIDEnglishJamaica mixins Office$MsoLanguageID {}
declare class Office$MsoLanguageID__msoLanguageIDEnglishNewZealand mixins Office$MsoLanguageID {}
declare class Office$MsoLanguageID__msoLanguageIDEnglishPhilippines mixins Office$MsoLanguageID {}
declare class Office$MsoLanguageID__msoLanguageIDEnglishSouthAfrica mixins Office$MsoLanguageID {}
declare class Office$MsoLanguageID__msoLanguageIDEnglishTrinidadTobago mixins Office$MsoLanguageID {}
declare class Office$MsoLanguageID__msoLanguageIDEnglishUK mixins Office$MsoLanguageID {}
declare class Office$MsoLanguageID__msoLanguageIDEnglishUS mixins Office$MsoLanguageID {}
declare class Office$MsoLanguageID__msoLanguageIDEnglishZimbabwe mixins Office$MsoLanguageID {}
declare class Office$MsoLanguageID__msoLanguageIDEstonian mixins Office$MsoLanguageID {}
declare class Office$MsoLanguageID__msoLanguageIDFaeroese mixins Office$MsoLanguageID {}
declare class Office$MsoLanguageID__msoLanguageIDFarsi mixins Office$MsoLanguageID {}
declare class Office$MsoLanguageID__msoLanguageIDFilipino mixins Office$MsoLanguageID {}
declare class Office$MsoLanguageID__msoLanguageIDFinnish mixins Office$MsoLanguageID {}
declare class Office$MsoLanguageID__msoLanguageIDFrench mixins Office$MsoLanguageID {}
declare class Office$MsoLanguageID__msoLanguageIDFrenchCameroon mixins Office$MsoLanguageID {}
declare class Office$MsoLanguageID__msoLanguageIDFrenchCanadian mixins Office$MsoLanguageID {}
declare class Office$MsoLanguageID__msoLanguageIDFrenchCongoDRC mixins Office$MsoLanguageID {}
declare class Office$MsoLanguageID__msoLanguageIDFrenchCotedIvoire mixins Office$MsoLanguageID {}
declare class Office$MsoLanguageID__msoLanguageIDFrenchHaiti mixins Office$MsoLanguageID {}
declare class Office$MsoLanguageID__msoLanguageIDFrenchLuxembourg mixins Office$MsoLanguageID {}
declare class Office$MsoLanguageID__msoLanguageIDFrenchMali mixins Office$MsoLanguageID {}
declare class Office$MsoLanguageID__msoLanguageIDFrenchMonaco mixins Office$MsoLanguageID {}
declare class Office$MsoLanguageID__msoLanguageIDFrenchMorocco mixins Office$MsoLanguageID {}
declare class Office$MsoLanguageID__msoLanguageIDFrenchReunion mixins Office$MsoLanguageID {}
declare class Office$MsoLanguageID__msoLanguageIDFrenchSenegal mixins Office$MsoLanguageID {}
declare class Office$MsoLanguageID__msoLanguageIDFrenchWestIndies mixins Office$MsoLanguageID {}
declare class Office$MsoLanguageID__msoLanguageIDFrenchZaire mixins Office$MsoLanguageID {}
declare class Office$MsoLanguageID__msoLanguageIDFrisianNetherlands mixins Office$MsoLanguageID {}
declare class Office$MsoLanguageID__msoLanguageIDFulfulde mixins Office$MsoLanguageID {}
declare class Office$MsoLanguageID__msoLanguageIDGaelicIreland mixins Office$MsoLanguageID {}
declare class Office$MsoLanguageID__msoLanguageIDGaelicScotland mixins Office$MsoLanguageID {}
declare class Office$MsoLanguageID__msoLanguageIDGalician mixins Office$MsoLanguageID {}
declare class Office$MsoLanguageID__msoLanguageIDGeorgian mixins Office$MsoLanguageID {}
declare class Office$MsoLanguageID__msoLanguageIDGerman mixins Office$MsoLanguageID {}
declare class Office$MsoLanguageID__msoLanguageIDGermanAustria mixins Office$MsoLanguageID {}
declare class Office$MsoLanguageID__msoLanguageIDGermanLiechtenstein mixins Office$MsoLanguageID {}
declare class Office$MsoLanguageID__msoLanguageIDGermanLuxembourg mixins Office$MsoLanguageID {}
declare class Office$MsoLanguageID__msoLanguageIDGreek mixins Office$MsoLanguageID {}
declare class Office$MsoLanguageID__msoLanguageIDGuarani mixins Office$MsoLanguageID {}
declare class Office$MsoLanguageID__msoLanguageIDGujarati mixins Office$MsoLanguageID {}
declare class Office$MsoLanguageID__msoLanguageIDHausa mixins Office$MsoLanguageID {}
declare class Office$MsoLanguageID__msoLanguageIDHawaiian mixins Office$MsoLanguageID {}
declare class Office$MsoLanguageID__msoLanguageIDHebrew mixins Office$MsoLanguageID {}
declare class Office$MsoLanguageID__msoLanguageIDHindi mixins Office$MsoLanguageID {}
declare class Office$MsoLanguageID__msoLanguageIDHungarian mixins Office$MsoLanguageID {}
declare class Office$MsoLanguageID__msoLanguageIDIbibio mixins Office$MsoLanguageID {}
declare class Office$MsoLanguageID__msoLanguageIDIcelandic mixins Office$MsoLanguageID {}
declare class Office$MsoLanguageID__msoLanguageIDIgbo mixins Office$MsoLanguageID {}
declare class Office$MsoLanguageID__msoLanguageIDIndonesian mixins Office$MsoLanguageID {}
declare class Office$MsoLanguageID__msoLanguageIDInuktitut mixins Office$MsoLanguageID {}
declare class Office$MsoLanguageID__msoLanguageIDItalian mixins Office$MsoLanguageID {}
declare class Office$MsoLanguageID__msoLanguageIDJapanese mixins Office$MsoLanguageID {}
declare class Office$MsoLanguageID__msoLanguageIDKannada mixins Office$MsoLanguageID {}
declare class Office$MsoLanguageID__msoLanguageIDKanuri mixins Office$MsoLanguageID {}
declare class Office$MsoLanguageID__msoLanguageIDKashmiri mixins Office$MsoLanguageID {}
declare class Office$MsoLanguageID__msoLanguageIDKashmiriDevanagari mixins Office$MsoLanguageID {}
declare class Office$MsoLanguageID__msoLanguageIDKazakh mixins Office$MsoLanguageID {}
declare class Office$MsoLanguageID__msoLanguageIDKhmer mixins Office$MsoLanguageID {}
declare class Office$MsoLanguageID__msoLanguageIDKirghiz mixins Office$MsoLanguageID {}
declare class Office$MsoLanguageID__msoLanguageIDKonkani mixins Office$MsoLanguageID {}
declare class Office$MsoLanguageID__msoLanguageIDKorean mixins Office$MsoLanguageID {}
declare class Office$MsoLanguageID__msoLanguageIDKyrgyz mixins Office$MsoLanguageID {}
declare class Office$MsoLanguageID__msoLanguageIDLao mixins Office$MsoLanguageID {}
declare class Office$MsoLanguageID__msoLanguageIDLatin mixins Office$MsoLanguageID {}
declare class Office$MsoLanguageID__msoLanguageIDLatvian mixins Office$MsoLanguageID {}
declare class Office$MsoLanguageID__msoLanguageIDLithuanian mixins Office$MsoLanguageID {}
declare class Office$MsoLanguageID__msoLanguageIDMacedonian mixins Office$MsoLanguageID {}
declare class Office$MsoLanguageID__msoLanguageIDMacedonianFYROM mixins Office$MsoLanguageID {}
declare class Office$MsoLanguageID__msoLanguageIDMalayalam mixins Office$MsoLanguageID {}
declare class Office$MsoLanguageID__msoLanguageIDMalayBruneiDarussalam mixins Office$MsoLanguageID {}
declare class Office$MsoLanguageID__msoLanguageIDMalaysian mixins Office$MsoLanguageID {}
declare class Office$MsoLanguageID__msoLanguageIDMaltese mixins Office$MsoLanguageID {}
declare class Office$MsoLanguageID__msoLanguageIDManipuri mixins Office$MsoLanguageID {}
declare class Office$MsoLanguageID__msoLanguageIDMaori mixins Office$MsoLanguageID {}
declare class Office$MsoLanguageID__msoLanguageIDMarathi mixins Office$MsoLanguageID {}
declare class Office$MsoLanguageID__msoLanguageIDMexicanSpanish mixins Office$MsoLanguageID {}
declare class Office$MsoLanguageID__msoLanguageIDMixed mixins Office$MsoLanguageID {}
declare class Office$MsoLanguageID__msoLanguageIDMongolian mixins Office$MsoLanguageID {}
declare class Office$MsoLanguageID__msoLanguageIDNepali mixins Office$MsoLanguageID {}
declare class Office$MsoLanguageID__msoLanguageIDNone mixins Office$MsoLanguageID {}
declare class Office$MsoLanguageID__msoLanguageIDNoProofing mixins Office$MsoLanguageID {}
declare class Office$MsoLanguageID__msoLanguageIDNorwegianBokmol mixins Office$MsoLanguageID {}
declare class Office$MsoLanguageID__msoLanguageIDNorwegianNynorsk mixins Office$MsoLanguageID {}
declare class Office$MsoLanguageID__msoLanguageIDOriya mixins Office$MsoLanguageID {}
declare class Office$MsoLanguageID__msoLanguageIDOromo mixins Office$MsoLanguageID {}
declare class Office$MsoLanguageID__msoLanguageIDPashto mixins Office$MsoLanguageID {}
declare class Office$MsoLanguageID__msoLanguageIDPolish mixins Office$MsoLanguageID {}
declare class Office$MsoLanguageID__msoLanguageIDPortuguese mixins Office$MsoLanguageID {}
declare class Office$MsoLanguageID__msoLanguageIDPunjabi mixins Office$MsoLanguageID {}
declare class Office$MsoLanguageID__msoLanguageIDQuechuaBolivia mixins Office$MsoLanguageID {}
declare class Office$MsoLanguageID__msoLanguageIDQuechuaEcuador mixins Office$MsoLanguageID {}
declare class Office$MsoLanguageID__msoLanguageIDQuechuaPeru mixins Office$MsoLanguageID {}
declare class Office$MsoLanguageID__msoLanguageIDRhaetoRomanic mixins Office$MsoLanguageID {}
declare class Office$MsoLanguageID__msoLanguageIDRomanian mixins Office$MsoLanguageID {}
declare class Office$MsoLanguageID__msoLanguageIDRomanianMoldova mixins Office$MsoLanguageID {}
declare class Office$MsoLanguageID__msoLanguageIDRussian mixins Office$MsoLanguageID {}
declare class Office$MsoLanguageID__msoLanguageIDRussianMoldova mixins Office$MsoLanguageID {}
declare class Office$MsoLanguageID__msoLanguageIDSamiLappish mixins Office$MsoLanguageID {}
declare class Office$MsoLanguageID__msoLanguageIDSanskrit mixins Office$MsoLanguageID {}
declare class Office$MsoLanguageID__msoLanguageIDSepedi mixins Office$MsoLanguageID {}
declare class Office$MsoLanguageID__msoLanguageIDSerbianBosniaHerzegovinaCyrillic mixins Office$MsoLanguageID {}
declare class Office$MsoLanguageID__msoLanguageIDSerbianBosniaHerzegovinaLatin mixins Office$MsoLanguageID {}
declare class Office$MsoLanguageID__msoLanguageIDSerbianCyrillic mixins Office$MsoLanguageID {}
declare class Office$MsoLanguageID__msoLanguageIDSerbianLatin mixins Office$MsoLanguageID {}
declare class Office$MsoLanguageID__msoLanguageIDSesotho mixins Office$MsoLanguageID {}
declare class Office$MsoLanguageID__msoLanguageIDSimplifiedChinese mixins Office$MsoLanguageID {}
declare class Office$MsoLanguageID__msoLanguageIDSindhi mixins Office$MsoLanguageID {}
declare class Office$MsoLanguageID__msoLanguageIDSindhiPakistan mixins Office$MsoLanguageID {}
declare class Office$MsoLanguageID__msoLanguageIDSinhalese mixins Office$MsoLanguageID {}
declare class Office$MsoLanguageID__msoLanguageIDSlovak mixins Office$MsoLanguageID {}
declare class Office$MsoLanguageID__msoLanguageIDSlovenian mixins Office$MsoLanguageID {}
declare class Office$MsoLanguageID__msoLanguageIDSomali mixins Office$MsoLanguageID {}
declare class Office$MsoLanguageID__msoLanguageIDSorbian mixins Office$MsoLanguageID {}
declare class Office$MsoLanguageID__msoLanguageIDSpanish mixins Office$MsoLanguageID {}
declare class Office$MsoLanguageID__msoLanguageIDSpanishArgentina mixins Office$MsoLanguageID {}
declare class Office$MsoLanguageID__msoLanguageIDSpanishBolivia mixins Office$MsoLanguageID {}
declare class Office$MsoLanguageID__msoLanguageIDSpanishChile mixins Office$MsoLanguageID {}
declare class Office$MsoLanguageID__msoLanguageIDSpanishColombia mixins Office$MsoLanguageID {}
declare class Office$MsoLanguageID__msoLanguageIDSpanishCostaRica mixins Office$MsoLanguageID {}
declare class Office$MsoLanguageID__msoLanguageIDSpanishDominicanRepublic mixins Office$MsoLanguageID {}
declare class Office$MsoLanguageID__msoLanguageIDSpanishEcuador mixins Office$MsoLanguageID {}
declare class Office$MsoLanguageID__msoLanguageIDSpanishElSalvador mixins Office$MsoLanguageID {}
declare class Office$MsoLanguageID__msoLanguageIDSpanishGuatemala mixins Office$MsoLanguageID {}
declare class Office$MsoLanguageID__msoLanguageIDSpanishHonduras mixins Office$MsoLanguageID {}
declare class Office$MsoLanguageID__msoLanguageIDSpanishModernSort mixins Office$MsoLanguageID {}
declare class Office$MsoLanguageID__msoLanguageIDSpanishNicaragua mixins Office$MsoLanguageID {}
declare class Office$MsoLanguageID__msoLanguageIDSpanishPanama mixins Office$MsoLanguageID {}
declare class Office$MsoLanguageID__msoLanguageIDSpanishParaguay mixins Office$MsoLanguageID {}
declare class Office$MsoLanguageID__msoLanguageIDSpanishPeru mixins Office$MsoLanguageID {}
declare class Office$MsoLanguageID__msoLanguageIDSpanishPuertoRico mixins Office$MsoLanguageID {}
declare class Office$MsoLanguageID__msoLanguageIDSpanishUruguay mixins Office$MsoLanguageID {}
declare class Office$MsoLanguageID__msoLanguageIDSpanishVenezuela mixins Office$MsoLanguageID {}
declare class Office$MsoLanguageID__msoLanguageIDSutu mixins Office$MsoLanguageID {}
declare class Office$MsoLanguageID__msoLanguageIDSwahili mixins Office$MsoLanguageID {}
declare class Office$MsoLanguageID__msoLanguageIDSwedish mixins Office$MsoLanguageID {}
declare class Office$MsoLanguageID__msoLanguageIDSwedishFinland mixins Office$MsoLanguageID {}
declare class Office$MsoLanguageID__msoLanguageIDSwissFrench mixins Office$MsoLanguageID {}
declare class Office$MsoLanguageID__msoLanguageIDSwissGerman mixins Office$MsoLanguageID {}
declare class Office$MsoLanguageID__msoLanguageIDSwissItalian mixins Office$MsoLanguageID {}
declare class Office$MsoLanguageID__msoLanguageIDSyriac mixins Office$MsoLanguageID {}
declare class Office$MsoLanguageID__msoLanguageIDTajik mixins Office$MsoLanguageID {}
declare class Office$MsoLanguageID__msoLanguageIDTamazight mixins Office$MsoLanguageID {}
declare class Office$MsoLanguageID__msoLanguageIDTamazightLatin mixins Office$MsoLanguageID {}
declare class Office$MsoLanguageID__msoLanguageIDTamil mixins Office$MsoLanguageID {}
declare class Office$MsoLanguageID__msoLanguageIDTatar mixins Office$MsoLanguageID {}
declare class Office$MsoLanguageID__msoLanguageIDTelugu mixins Office$MsoLanguageID {}
declare class Office$MsoLanguageID__msoLanguageIDThai mixins Office$MsoLanguageID {}
declare class Office$MsoLanguageID__msoLanguageIDTibetan mixins Office$MsoLanguageID {}
declare class Office$MsoLanguageID__msoLanguageIDTigrignaEritrea mixins Office$MsoLanguageID {}
declare class Office$MsoLanguageID__msoLanguageIDTigrignaEthiopic mixins Office$MsoLanguageID {}
declare class Office$MsoLanguageID__msoLanguageIDTraditionalChinese mixins Office$MsoLanguageID {}
declare class Office$MsoLanguageID__msoLanguageIDTsonga mixins Office$MsoLanguageID {}
declare class Office$MsoLanguageID__msoLanguageIDTswana mixins Office$MsoLanguageID {}
declare class Office$MsoLanguageID__msoLanguageIDTurkish mixins Office$MsoLanguageID {}
declare class Office$MsoLanguageID__msoLanguageIDTurkmen mixins Office$MsoLanguageID {}
declare class Office$MsoLanguageID__msoLanguageIDUkrainian mixins Office$MsoLanguageID {}
declare class Office$MsoLanguageID__msoLanguageIDUrdu mixins Office$MsoLanguageID {}
declare class Office$MsoLanguageID__msoLanguageIDUzbekCyrillic mixins Office$MsoLanguageID {}
declare class Office$MsoLanguageID__msoLanguageIDUzbekLatin mixins Office$MsoLanguageID {}
declare class Office$MsoLanguageID__msoLanguageIDVenda mixins Office$MsoLanguageID {}
declare class Office$MsoLanguageID__msoLanguageIDVietnamese mixins Office$MsoLanguageID {}
declare class Office$MsoLanguageID__msoLanguageIDWelsh mixins Office$MsoLanguageID {}
declare class Office$MsoLanguageID__msoLanguageIDXhosa mixins Office$MsoLanguageID {}
declare class Office$MsoLanguageID__msoLanguageIDYi mixins Office$MsoLanguageID {}
declare class Office$MsoLanguageID__msoLanguageIDYiddish mixins Office$MsoLanguageID {}
declare class Office$MsoLanguageID__msoLanguageIDYoruba mixins Office$MsoLanguageID {}
declare class Office$MsoLanguageID__msoLanguageIDZulu mixins Office$MsoLanguageID {}


declare  class Office$MsoLanguageIDHidden {
  constructor(...args: empty): mixed;
static +msoLanguageIDChineseHongKong: Class<Office$MsoLanguageIDHidden__msoLanguageIDChineseHongKong> & Office$MsoLanguageIDHidden__msoLanguageIDChineseHongKong & 3076;// 3076
static +msoLanguageIDChineseMacao: Class<Office$MsoLanguageIDHidden__msoLanguageIDChineseMacao> & Office$MsoLanguageIDHidden__msoLanguageIDChineseMacao & 5124;// 5124
static +msoLanguageIDEnglishTrinidad: Class<Office$MsoLanguageIDHidden__msoLanguageIDEnglishTrinidad> & Office$MsoLanguageIDHidden__msoLanguageIDEnglishTrinidad & 11273;// 11273

}

declare class Office$MsoLanguageIDHidden__msoLanguageIDChineseHongKong mixins Office$MsoLanguageIDHidden {}
declare class Office$MsoLanguageIDHidden__msoLanguageIDChineseMacao mixins Office$MsoLanguageIDHidden {}
declare class Office$MsoLanguageIDHidden__msoLanguageIDEnglishTrinidad mixins Office$MsoLanguageIDHidden {}


declare  class Office$MsoLastModified {
  constructor(...args: empty): mixed;
static +msoLastModifiedAnyTime: Class<Office$MsoLastModified__msoLastModifiedAnyTime> & Office$MsoLastModified__msoLastModifiedAnyTime & 7;// 7
static +msoLastModifiedLastMonth: Class<Office$MsoLastModified__msoLastModifiedLastMonth> & Office$MsoLastModified__msoLastModifiedLastMonth & 5;// 5
static +msoLastModifiedLastWeek: Class<Office$MsoLastModified__msoLastModifiedLastWeek> & Office$MsoLastModified__msoLastModifiedLastWeek & 3;// 3
static +msoLastModifiedThisMonth: Class<Office$MsoLastModified__msoLastModifiedThisMonth> & Office$MsoLastModified__msoLastModifiedThisMonth & 6;// 6
static +msoLastModifiedThisWeek: Class<Office$MsoLastModified__msoLastModifiedThisWeek> & Office$MsoLastModified__msoLastModifiedThisWeek & 4;// 4
static +msoLastModifiedToday: Class<Office$MsoLastModified__msoLastModifiedToday> & Office$MsoLastModified__msoLastModifiedToday & 2;// 2
static +msoLastModifiedYesterday: Class<Office$MsoLastModified__msoLastModifiedYesterday> & Office$MsoLastModified__msoLastModifiedYesterday & 1;// 1

}

declare class Office$MsoLastModified__msoLastModifiedAnyTime mixins Office$MsoLastModified {}
declare class Office$MsoLastModified__msoLastModifiedLastMonth mixins Office$MsoLastModified {}
declare class Office$MsoLastModified__msoLastModifiedLastWeek mixins Office$MsoLastModified {}
declare class Office$MsoLastModified__msoLastModifiedThisMonth mixins Office$MsoLastModified {}
declare class Office$MsoLastModified__msoLastModifiedThisWeek mixins Office$MsoLastModified {}
declare class Office$MsoLastModified__msoLastModifiedToday mixins Office$MsoLastModified {}
declare class Office$MsoLastModified__msoLastModifiedYesterday mixins Office$MsoLastModified {}


declare  class Office$MsoLightRigType {
  constructor(...args: empty): mixed;
static +msoLightRigBalanced: Class<Office$MsoLightRigType__msoLightRigBalanced> & Office$MsoLightRigType__msoLightRigBalanced & 14;// 14
static +msoLightRigBrightRoom: Class<Office$MsoLightRigType__msoLightRigBrightRoom> & Office$MsoLightRigType__msoLightRigBrightRoom & 27;// 27
static +msoLightRigChilly: Class<Office$MsoLightRigType__msoLightRigChilly> & Office$MsoLightRigType__msoLightRigChilly & 22;// 22
static +msoLightRigContrasting: Class<Office$MsoLightRigType__msoLightRigContrasting> & Office$MsoLightRigType__msoLightRigContrasting & 18;// 18
static +msoLightRigFlat: Class<Office$MsoLightRigType__msoLightRigFlat> & Office$MsoLightRigType__msoLightRigFlat & 24;// 24
static +msoLightRigFlood: Class<Office$MsoLightRigType__msoLightRigFlood> & Office$MsoLightRigType__msoLightRigFlood & 17;// 17
static +msoLightRigFreezing: Class<Office$MsoLightRigType__msoLightRigFreezing> & Office$MsoLightRigType__msoLightRigFreezing & 23;// 23
static +msoLightRigGlow: Class<Office$MsoLightRigType__msoLightRigGlow> & Office$MsoLightRigType__msoLightRigGlow & 26;// 26
static +msoLightRigHarsh: Class<Office$MsoLightRigType__msoLightRigHarsh> & Office$MsoLightRigType__msoLightRigHarsh & 16;// 16
static +msoLightRigLegacyFlat1: Class<Office$MsoLightRigType__msoLightRigLegacyFlat1> & Office$MsoLightRigType__msoLightRigLegacyFlat1 & 1;// 1
static +msoLightRigLegacyFlat2: Class<Office$MsoLightRigType__msoLightRigLegacyFlat2> & Office$MsoLightRigType__msoLightRigLegacyFlat2 & 2;// 2
static +msoLightRigLegacyFlat3: Class<Office$MsoLightRigType__msoLightRigLegacyFlat3> & Office$MsoLightRigType__msoLightRigLegacyFlat3 & 3;// 3
static +msoLightRigLegacyFlat4: Class<Office$MsoLightRigType__msoLightRigLegacyFlat4> & Office$MsoLightRigType__msoLightRigLegacyFlat4 & 4;// 4
static +msoLightRigLegacyHarsh1: Class<Office$MsoLightRigType__msoLightRigLegacyHarsh1> & Office$MsoLightRigType__msoLightRigLegacyHarsh1 & 9;// 9
static +msoLightRigLegacyHarsh2: Class<Office$MsoLightRigType__msoLightRigLegacyHarsh2> & Office$MsoLightRigType__msoLightRigLegacyHarsh2 & 10;// 10
static +msoLightRigLegacyHarsh3: Class<Office$MsoLightRigType__msoLightRigLegacyHarsh3> & Office$MsoLightRigType__msoLightRigLegacyHarsh3 & 11;// 11
static +msoLightRigLegacyHarsh4: Class<Office$MsoLightRigType__msoLightRigLegacyHarsh4> & Office$MsoLightRigType__msoLightRigLegacyHarsh4 & 12;// 12
static +msoLightRigLegacyNormal1: Class<Office$MsoLightRigType__msoLightRigLegacyNormal1> & Office$MsoLightRigType__msoLightRigLegacyNormal1 & 5;// 5
static +msoLightRigLegacyNormal2: Class<Office$MsoLightRigType__msoLightRigLegacyNormal2> & Office$MsoLightRigType__msoLightRigLegacyNormal2 & 6;// 6
static +msoLightRigLegacyNormal3: Class<Office$MsoLightRigType__msoLightRigLegacyNormal3> & Office$MsoLightRigType__msoLightRigLegacyNormal3 & 7;// 7
static +msoLightRigLegacyNormal4: Class<Office$MsoLightRigType__msoLightRigLegacyNormal4> & Office$MsoLightRigType__msoLightRigLegacyNormal4 & 8;// 8
static +msoLightRigMixed: Class<Office$MsoLightRigType__msoLightRigMixed> & Office$MsoLightRigType__msoLightRigMixed & -2;// -2
static +msoLightRigMorning: Class<Office$MsoLightRigType__msoLightRigMorning> & Office$MsoLightRigType__msoLightRigMorning & 19;// 19
static +msoLightRigSoft: Class<Office$MsoLightRigType__msoLightRigSoft> & Office$MsoLightRigType__msoLightRigSoft & 15;// 15
static +msoLightRigSunrise: Class<Office$MsoLightRigType__msoLightRigSunrise> & Office$MsoLightRigType__msoLightRigSunrise & 20;// 20
static +msoLightRigSunset: Class<Office$MsoLightRigType__msoLightRigSunset> & Office$MsoLightRigType__msoLightRigSunset & 21;// 21
static +msoLightRigThreePoint: Class<Office$MsoLightRigType__msoLightRigThreePoint> & Office$MsoLightRigType__msoLightRigThreePoint & 13;// 13
static +msoLightRigTwoPoint: Class<Office$MsoLightRigType__msoLightRigTwoPoint> & Office$MsoLightRigType__msoLightRigTwoPoint & 25;// 25

}

declare class Office$MsoLightRigType__msoLightRigBalanced mixins Office$MsoLightRigType {}
declare class Office$MsoLightRigType__msoLightRigBrightRoom mixins Office$MsoLightRigType {}
declare class Office$MsoLightRigType__msoLightRigChilly mixins Office$MsoLightRigType {}
declare class Office$MsoLightRigType__msoLightRigContrasting mixins Office$MsoLightRigType {}
declare class Office$MsoLightRigType__msoLightRigFlat mixins Office$MsoLightRigType {}
declare class Office$MsoLightRigType__msoLightRigFlood mixins Office$MsoLightRigType {}
declare class Office$MsoLightRigType__msoLightRigFreezing mixins Office$MsoLightRigType {}
declare class Office$MsoLightRigType__msoLightRigGlow mixins Office$MsoLightRigType {}
declare class Office$MsoLightRigType__msoLightRigHarsh mixins Office$MsoLightRigType {}
declare class Office$MsoLightRigType__msoLightRigLegacyFlat1 mixins Office$MsoLightRigType {}
declare class Office$MsoLightRigType__msoLightRigLegacyFlat2 mixins Office$MsoLightRigType {}
declare class Office$MsoLightRigType__msoLightRigLegacyFlat3 mixins Office$MsoLightRigType {}
declare class Office$MsoLightRigType__msoLightRigLegacyFlat4 mixins Office$MsoLightRigType {}
declare class Office$MsoLightRigType__msoLightRigLegacyHarsh1 mixins Office$MsoLightRigType {}
declare class Office$MsoLightRigType__msoLightRigLegacyHarsh2 mixins Office$MsoLightRigType {}
declare class Office$MsoLightRigType__msoLightRigLegacyHarsh3 mixins Office$MsoLightRigType {}
declare class Office$MsoLightRigType__msoLightRigLegacyHarsh4 mixins Office$MsoLightRigType {}
declare class Office$MsoLightRigType__msoLightRigLegacyNormal1 mixins Office$MsoLightRigType {}
declare class Office$MsoLightRigType__msoLightRigLegacyNormal2 mixins Office$MsoLightRigType {}
declare class Office$MsoLightRigType__msoLightRigLegacyNormal3 mixins Office$MsoLightRigType {}
declare class Office$MsoLightRigType__msoLightRigLegacyNormal4 mixins Office$MsoLightRigType {}
declare class Office$MsoLightRigType__msoLightRigMixed mixins Office$MsoLightRigType {}
declare class Office$MsoLightRigType__msoLightRigMorning mixins Office$MsoLightRigType {}
declare class Office$MsoLightRigType__msoLightRigSoft mixins Office$MsoLightRigType {}
declare class Office$MsoLightRigType__msoLightRigSunrise mixins Office$MsoLightRigType {}
declare class Office$MsoLightRigType__msoLightRigSunset mixins Office$MsoLightRigType {}
declare class Office$MsoLightRigType__msoLightRigThreePoint mixins Office$MsoLightRigType {}
declare class Office$MsoLightRigType__msoLightRigTwoPoint mixins Office$MsoLightRigType {}


declare  class Office$MsoLineCapStyle {
  constructor(...args: empty): mixed;
static +msoLineCapFlat: Class<Office$MsoLineCapStyle__msoLineCapFlat> & Office$MsoLineCapStyle__msoLineCapFlat & 3;// 3
static +msoLineCapMixed: Class<Office$MsoLineCapStyle__msoLineCapMixed> & Office$MsoLineCapStyle__msoLineCapMixed & -2;// -2
static +msoLineCapRound: Class<Office$MsoLineCapStyle__msoLineCapRound> & Office$MsoLineCapStyle__msoLineCapRound & 2;// 2
static +msoLineCapSquare: Class<Office$MsoLineCapStyle__msoLineCapSquare> & Office$MsoLineCapStyle__msoLineCapSquare & 1;// 1

}

declare class Office$MsoLineCapStyle__msoLineCapFlat mixins Office$MsoLineCapStyle {}
declare class Office$MsoLineCapStyle__msoLineCapMixed mixins Office$MsoLineCapStyle {}
declare class Office$MsoLineCapStyle__msoLineCapRound mixins Office$MsoLineCapStyle {}
declare class Office$MsoLineCapStyle__msoLineCapSquare mixins Office$MsoLineCapStyle {}


declare  class Office$MsoLineDashStyle {
  constructor(...args: empty): mixed;
static +msoLineDash: Class<Office$MsoLineDashStyle__msoLineDash> & Office$MsoLineDashStyle__msoLineDash & 4;// 4
static +msoLineDashDot: Class<Office$MsoLineDashStyle__msoLineDashDot> & Office$MsoLineDashStyle__msoLineDashDot & 5;// 5
static +msoLineDashDotDot: Class<Office$MsoLineDashStyle__msoLineDashDotDot> & Office$MsoLineDashStyle__msoLineDashDotDot & 6;// 6
static +msoLineDashStyleMixed: Class<Office$MsoLineDashStyle__msoLineDashStyleMixed> & Office$MsoLineDashStyle__msoLineDashStyleMixed & -2;// -2
static +msoLineLongDash: Class<Office$MsoLineDashStyle__msoLineLongDash> & Office$MsoLineDashStyle__msoLineLongDash & 7;// 7
static +msoLineLongDashDot: Class<Office$MsoLineDashStyle__msoLineLongDashDot> & Office$MsoLineDashStyle__msoLineLongDashDot & 8;// 8
static +msoLineLongDashDotDot: Class<Office$MsoLineDashStyle__msoLineLongDashDotDot> & Office$MsoLineDashStyle__msoLineLongDashDotDot & 9;// 9
static +msoLineRoundDot: Class<Office$MsoLineDashStyle__msoLineRoundDot> & Office$MsoLineDashStyle__msoLineRoundDot & 3;// 3
static +msoLineSolid: Class<Office$MsoLineDashStyle__msoLineSolid> & Office$MsoLineDashStyle__msoLineSolid & 1;// 1
static +msoLineSquareDot: Class<Office$MsoLineDashStyle__msoLineSquareDot> & Office$MsoLineDashStyle__msoLineSquareDot & 2;// 2
static +msoLineSysDash: Class<Office$MsoLineDashStyle__msoLineSysDash> & Office$MsoLineDashStyle__msoLineSysDash & 10;// 10
static +msoLineSysDashDot: Class<Office$MsoLineDashStyle__msoLineSysDashDot> & Office$MsoLineDashStyle__msoLineSysDashDot & 12;// 12
static +msoLineSysDot: Class<Office$MsoLineDashStyle__msoLineSysDot> & Office$MsoLineDashStyle__msoLineSysDot & 11;// 11

}

declare class Office$MsoLineDashStyle__msoLineDash mixins Office$MsoLineDashStyle {}
declare class Office$MsoLineDashStyle__msoLineDashDot mixins Office$MsoLineDashStyle {}
declare class Office$MsoLineDashStyle__msoLineDashDotDot mixins Office$MsoLineDashStyle {}
declare class Office$MsoLineDashStyle__msoLineDashStyleMixed mixins Office$MsoLineDashStyle {}
declare class Office$MsoLineDashStyle__msoLineLongDash mixins Office$MsoLineDashStyle {}
declare class Office$MsoLineDashStyle__msoLineLongDashDot mixins Office$MsoLineDashStyle {}
declare class Office$MsoLineDashStyle__msoLineLongDashDotDot mixins Office$MsoLineDashStyle {}
declare class Office$MsoLineDashStyle__msoLineRoundDot mixins Office$MsoLineDashStyle {}
declare class Office$MsoLineDashStyle__msoLineSolid mixins Office$MsoLineDashStyle {}
declare class Office$MsoLineDashStyle__msoLineSquareDot mixins Office$MsoLineDashStyle {}
declare class Office$MsoLineDashStyle__msoLineSysDash mixins Office$MsoLineDashStyle {}
declare class Office$MsoLineDashStyle__msoLineSysDashDot mixins Office$MsoLineDashStyle {}
declare class Office$MsoLineDashStyle__msoLineSysDot mixins Office$MsoLineDashStyle {}


declare  class Office$MsoLineFillType {
  constructor(...args: empty): mixed;
static +msoLineFillBackground: Class<Office$MsoLineFillType__msoLineFillBackground> & Office$MsoLineFillType__msoLineFillBackground & 5;// 5
static +msoLineFillGradient: Class<Office$MsoLineFillType__msoLineFillGradient> & Office$MsoLineFillType__msoLineFillGradient & 3;// 3
static +msoLineFillMixed: Class<Office$MsoLineFillType__msoLineFillMixed> & Office$MsoLineFillType__msoLineFillMixed & -2;// -2
static +msoLineFillNone: Class<Office$MsoLineFillType__msoLineFillNone> & Office$MsoLineFillType__msoLineFillNone & 0;// 0
static +msoLineFillPatterned: Class<Office$MsoLineFillType__msoLineFillPatterned> & Office$MsoLineFillType__msoLineFillPatterned & 2;// 2
static +msoLineFillPicture: Class<Office$MsoLineFillType__msoLineFillPicture> & Office$MsoLineFillType__msoLineFillPicture & 6;// 6
static +msoLineFillSolid: Class<Office$MsoLineFillType__msoLineFillSolid> & Office$MsoLineFillType__msoLineFillSolid & 1;// 1
static +msoLineFillTextured: Class<Office$MsoLineFillType__msoLineFillTextured> & Office$MsoLineFillType__msoLineFillTextured & 4;// 4

}

declare class Office$MsoLineFillType__msoLineFillBackground mixins Office$MsoLineFillType {}
declare class Office$MsoLineFillType__msoLineFillGradient mixins Office$MsoLineFillType {}
declare class Office$MsoLineFillType__msoLineFillMixed mixins Office$MsoLineFillType {}
declare class Office$MsoLineFillType__msoLineFillNone mixins Office$MsoLineFillType {}
declare class Office$MsoLineFillType__msoLineFillPatterned mixins Office$MsoLineFillType {}
declare class Office$MsoLineFillType__msoLineFillPicture mixins Office$MsoLineFillType {}
declare class Office$MsoLineFillType__msoLineFillSolid mixins Office$MsoLineFillType {}
declare class Office$MsoLineFillType__msoLineFillTextured mixins Office$MsoLineFillType {}


declare  class Office$MsoLineJoinStyle {
  constructor(...args: empty): mixed;
static +msoLineJoinBevel: Class<Office$MsoLineJoinStyle__msoLineJoinBevel> & Office$MsoLineJoinStyle__msoLineJoinBevel & 2;// 2
static +msoLineJoinMiter: Class<Office$MsoLineJoinStyle__msoLineJoinMiter> & Office$MsoLineJoinStyle__msoLineJoinMiter & 3;// 3
static +msoLineJoinMixed: Class<Office$MsoLineJoinStyle__msoLineJoinMixed> & Office$MsoLineJoinStyle__msoLineJoinMixed & -2;// -2
static +msoLineJoinRound: Class<Office$MsoLineJoinStyle__msoLineJoinRound> & Office$MsoLineJoinStyle__msoLineJoinRound & 1;// 1

}

declare class Office$MsoLineJoinStyle__msoLineJoinBevel mixins Office$MsoLineJoinStyle {}
declare class Office$MsoLineJoinStyle__msoLineJoinMiter mixins Office$MsoLineJoinStyle {}
declare class Office$MsoLineJoinStyle__msoLineJoinMixed mixins Office$MsoLineJoinStyle {}
declare class Office$MsoLineJoinStyle__msoLineJoinRound mixins Office$MsoLineJoinStyle {}


declare  class Office$MsoLineStyle {
  constructor(...args: empty): mixed;
static +msoLineSingle: Class<Office$MsoLineStyle__msoLineSingle> & Office$MsoLineStyle__msoLineSingle & 1;// 1
static +msoLineStyleMixed: Class<Office$MsoLineStyle__msoLineStyleMixed> & Office$MsoLineStyle__msoLineStyleMixed & -2;// -2
static +msoLineThickBetweenThin: Class<Office$MsoLineStyle__msoLineThickBetweenThin> & Office$MsoLineStyle__msoLineThickBetweenThin & 5;// 5
static +msoLineThickThin: Class<Office$MsoLineStyle__msoLineThickThin> & Office$MsoLineStyle__msoLineThickThin & 4;// 4
static +msoLineThinThick: Class<Office$MsoLineStyle__msoLineThinThick> & Office$MsoLineStyle__msoLineThinThick & 3;// 3
static +msoLineThinThin: Class<Office$MsoLineStyle__msoLineThinThin> & Office$MsoLineStyle__msoLineThinThin & 2;// 2

}

declare class Office$MsoLineStyle__msoLineSingle mixins Office$MsoLineStyle {}
declare class Office$MsoLineStyle__msoLineStyleMixed mixins Office$MsoLineStyle {}
declare class Office$MsoLineStyle__msoLineThickBetweenThin mixins Office$MsoLineStyle {}
declare class Office$MsoLineStyle__msoLineThickThin mixins Office$MsoLineStyle {}
declare class Office$MsoLineStyle__msoLineThinThick mixins Office$MsoLineStyle {}
declare class Office$MsoLineStyle__msoLineThinThin mixins Office$MsoLineStyle {}


declare  class Office$MsoMenuAnimation {
  constructor(...args: empty): mixed;
static +msoMenuAnimationNone: Class<Office$MsoMenuAnimation__msoMenuAnimationNone> & Office$MsoMenuAnimation__msoMenuAnimationNone & 0;// 0
static +msoMenuAnimationRandom: Class<Office$MsoMenuAnimation__msoMenuAnimationRandom> & Office$MsoMenuAnimation__msoMenuAnimationRandom & 1;// 1
static +msoMenuAnimationSlide: Class<Office$MsoMenuAnimation__msoMenuAnimationSlide> & Office$MsoMenuAnimation__msoMenuAnimationSlide & 3;// 3
static +msoMenuAnimationUnfold: Class<Office$MsoMenuAnimation__msoMenuAnimationUnfold> & Office$MsoMenuAnimation__msoMenuAnimationUnfold & 2;// 2

}

declare class Office$MsoMenuAnimation__msoMenuAnimationNone mixins Office$MsoMenuAnimation {}
declare class Office$MsoMenuAnimation__msoMenuAnimationRandom mixins Office$MsoMenuAnimation {}
declare class Office$MsoMenuAnimation__msoMenuAnimationSlide mixins Office$MsoMenuAnimation {}
declare class Office$MsoMenuAnimation__msoMenuAnimationUnfold mixins Office$MsoMenuAnimation {}


declare  class Office$MsoMergeCmd {
  constructor(...args: empty): mixed;
static +msoMergeCombine: Class<Office$MsoMergeCmd__msoMergeCombine> & Office$MsoMergeCmd__msoMergeCombine & 2;// 2
static +msoMergeFragment: Class<Office$MsoMergeCmd__msoMergeFragment> & Office$MsoMergeCmd__msoMergeFragment & 5;// 5
static +msoMergeIntersect: Class<Office$MsoMergeCmd__msoMergeIntersect> & Office$MsoMergeCmd__msoMergeIntersect & 3;// 3
static +msoMergeSubtract: Class<Office$MsoMergeCmd__msoMergeSubtract> & Office$MsoMergeCmd__msoMergeSubtract & 4;// 4
static +msoMergeUnion: Class<Office$MsoMergeCmd__msoMergeUnion> & Office$MsoMergeCmd__msoMergeUnion & 1;// 1

}

declare class Office$MsoMergeCmd__msoMergeCombine mixins Office$MsoMergeCmd {}
declare class Office$MsoMergeCmd__msoMergeFragment mixins Office$MsoMergeCmd {}
declare class Office$MsoMergeCmd__msoMergeIntersect mixins Office$MsoMergeCmd {}
declare class Office$MsoMergeCmd__msoMergeSubtract mixins Office$MsoMergeCmd {}
declare class Office$MsoMergeCmd__msoMergeUnion mixins Office$MsoMergeCmd {}


declare  class Office$MsoMetaPropertyType {
  constructor(...args: empty): mixed;
static +msoMetaPropertyTypeBoolean: Class<Office$MsoMetaPropertyType__msoMetaPropertyTypeBoolean> & Office$MsoMetaPropertyType__msoMetaPropertyTypeBoolean & 1;// 1
static +msoMetaPropertyTypeBusinessData: Class<Office$MsoMetaPropertyType__msoMetaPropertyTypeBusinessData> & Office$MsoMetaPropertyType__msoMetaPropertyTypeBusinessData & 20;// 20
static +msoMetaPropertyTypeBusinessDataSecondary: Class<Office$MsoMetaPropertyType__msoMetaPropertyTypeBusinessDataSecondary> & Office$MsoMetaPropertyType__msoMetaPropertyTypeBusinessDataSecondary & 21;// 21
static +msoMetaPropertyTypeCalculated: Class<Office$MsoMetaPropertyType__msoMetaPropertyTypeCalculated> & Office$MsoMetaPropertyType__msoMetaPropertyTypeCalculated & 3;// 3
static +msoMetaPropertyTypeChoice: Class<Office$MsoMetaPropertyType__msoMetaPropertyTypeChoice> & Office$MsoMetaPropertyType__msoMetaPropertyTypeChoice & 2;// 2
static +msoMetaPropertyTypeComputed: Class<Office$MsoMetaPropertyType__msoMetaPropertyTypeComputed> & Office$MsoMetaPropertyType__msoMetaPropertyTypeComputed & 4;// 4
static +msoMetaPropertyTypeCurrency: Class<Office$MsoMetaPropertyType__msoMetaPropertyTypeCurrency> & Office$MsoMetaPropertyType__msoMetaPropertyTypeCurrency & 5;// 5
static +msoMetaPropertyTypeDateTime: Class<Office$MsoMetaPropertyType__msoMetaPropertyTypeDateTime> & Office$MsoMetaPropertyType__msoMetaPropertyTypeDateTime & 6;// 6
static +msoMetaPropertyTypeFillInChoice: Class<Office$MsoMetaPropertyType__msoMetaPropertyTypeFillInChoice> & Office$MsoMetaPropertyType__msoMetaPropertyTypeFillInChoice & 7;// 7
static +msoMetaPropertyTypeGuid: Class<Office$MsoMetaPropertyType__msoMetaPropertyTypeGuid> & Office$MsoMetaPropertyType__msoMetaPropertyTypeGuid & 8;// 8
static +msoMetaPropertyTypeInteger: Class<Office$MsoMetaPropertyType__msoMetaPropertyTypeInteger> & Office$MsoMetaPropertyType__msoMetaPropertyTypeInteger & 9;// 9
static +msoMetaPropertyTypeLookup: Class<Office$MsoMetaPropertyType__msoMetaPropertyTypeLookup> & Office$MsoMetaPropertyType__msoMetaPropertyTypeLookup & 10;// 10
static +msoMetaPropertyTypeMax: Class<Office$MsoMetaPropertyType__msoMetaPropertyTypeMax> & Office$MsoMetaPropertyType__msoMetaPropertyTypeMax & 22;// 22
static +msoMetaPropertyTypeMultiChoice: Class<Office$MsoMetaPropertyType__msoMetaPropertyTypeMultiChoice> & Office$MsoMetaPropertyType__msoMetaPropertyTypeMultiChoice & 12;// 12
static +msoMetaPropertyTypeMultiChoiceFillIn: Class<Office$MsoMetaPropertyType__msoMetaPropertyTypeMultiChoiceFillIn> & Office$MsoMetaPropertyType__msoMetaPropertyTypeMultiChoiceFillIn & 13;// 13
static +msoMetaPropertyTypeMultiChoiceLookup: Class<Office$MsoMetaPropertyType__msoMetaPropertyTypeMultiChoiceLookup> & Office$MsoMetaPropertyType__msoMetaPropertyTypeMultiChoiceLookup & 11;// 11
static +msoMetaPropertyTypeNote: Class<Office$MsoMetaPropertyType__msoMetaPropertyTypeNote> & Office$MsoMetaPropertyType__msoMetaPropertyTypeNote & 14;// 14
static +msoMetaPropertyTypeNumber: Class<Office$MsoMetaPropertyType__msoMetaPropertyTypeNumber> & Office$MsoMetaPropertyType__msoMetaPropertyTypeNumber & 15;// 15
static +msoMetaPropertyTypeText: Class<Office$MsoMetaPropertyType__msoMetaPropertyTypeText> & Office$MsoMetaPropertyType__msoMetaPropertyTypeText & 16;// 16
static +msoMetaPropertyTypeUnknown: Class<Office$MsoMetaPropertyType__msoMetaPropertyTypeUnknown> & Office$MsoMetaPropertyType__msoMetaPropertyTypeUnknown & 0;// 0
static +msoMetaPropertyTypeUrl: Class<Office$MsoMetaPropertyType__msoMetaPropertyTypeUrl> & Office$MsoMetaPropertyType__msoMetaPropertyTypeUrl & 17;// 17
static +msoMetaPropertyTypeUser: Class<Office$MsoMetaPropertyType__msoMetaPropertyTypeUser> & Office$MsoMetaPropertyType__msoMetaPropertyTypeUser & 18;// 18
static +msoMetaPropertyTypeUserMulti: Class<Office$MsoMetaPropertyType__msoMetaPropertyTypeUserMulti> & Office$MsoMetaPropertyType__msoMetaPropertyTypeUserMulti & 19;// 19

}

declare class Office$MsoMetaPropertyType__msoMetaPropertyTypeBoolean mixins Office$MsoMetaPropertyType {}
declare class Office$MsoMetaPropertyType__msoMetaPropertyTypeBusinessData mixins Office$MsoMetaPropertyType {}
declare class Office$MsoMetaPropertyType__msoMetaPropertyTypeBusinessDataSecondary mixins Office$MsoMetaPropertyType {}
declare class Office$MsoMetaPropertyType__msoMetaPropertyTypeCalculated mixins Office$MsoMetaPropertyType {}
declare class Office$MsoMetaPropertyType__msoMetaPropertyTypeChoice mixins Office$MsoMetaPropertyType {}
declare class Office$MsoMetaPropertyType__msoMetaPropertyTypeComputed mixins Office$MsoMetaPropertyType {}
declare class Office$MsoMetaPropertyType__msoMetaPropertyTypeCurrency mixins Office$MsoMetaPropertyType {}
declare class Office$MsoMetaPropertyType__msoMetaPropertyTypeDateTime mixins Office$MsoMetaPropertyType {}
declare class Office$MsoMetaPropertyType__msoMetaPropertyTypeFillInChoice mixins Office$MsoMetaPropertyType {}
declare class Office$MsoMetaPropertyType__msoMetaPropertyTypeGuid mixins Office$MsoMetaPropertyType {}
declare class Office$MsoMetaPropertyType__msoMetaPropertyTypeInteger mixins Office$MsoMetaPropertyType {}
declare class Office$MsoMetaPropertyType__msoMetaPropertyTypeLookup mixins Office$MsoMetaPropertyType {}
declare class Office$MsoMetaPropertyType__msoMetaPropertyTypeMax mixins Office$MsoMetaPropertyType {}
declare class Office$MsoMetaPropertyType__msoMetaPropertyTypeMultiChoice mixins Office$MsoMetaPropertyType {}
declare class Office$MsoMetaPropertyType__msoMetaPropertyTypeMultiChoiceFillIn mixins Office$MsoMetaPropertyType {}
declare class Office$MsoMetaPropertyType__msoMetaPropertyTypeMultiChoiceLookup mixins Office$MsoMetaPropertyType {}
declare class Office$MsoMetaPropertyType__msoMetaPropertyTypeNote mixins Office$MsoMetaPropertyType {}
declare class Office$MsoMetaPropertyType__msoMetaPropertyTypeNumber mixins Office$MsoMetaPropertyType {}
declare class Office$MsoMetaPropertyType__msoMetaPropertyTypeText mixins Office$MsoMetaPropertyType {}
declare class Office$MsoMetaPropertyType__msoMetaPropertyTypeUnknown mixins Office$MsoMetaPropertyType {}
declare class Office$MsoMetaPropertyType__msoMetaPropertyTypeUrl mixins Office$MsoMetaPropertyType {}
declare class Office$MsoMetaPropertyType__msoMetaPropertyTypeUser mixins Office$MsoMetaPropertyType {}
declare class Office$MsoMetaPropertyType__msoMetaPropertyTypeUserMulti mixins Office$MsoMetaPropertyType {}


declare  class Office$MsoMixedType {
  constructor(...args: empty): mixed;
static +msoIntegerMixed: Class<Office$MsoMixedType__msoIntegerMixed> & Office$MsoMixedType__msoIntegerMixed & 32768;// 32768
static +msoSingleMixed: Class<Office$MsoMixedType__msoSingleMixed> & Office$MsoMixedType__msoSingleMixed & -2147483648;// -2147483648

}

declare class Office$MsoMixedType__msoIntegerMixed mixins Office$MsoMixedType {}
declare class Office$MsoMixedType__msoSingleMixed mixins Office$MsoMixedType {}


declare  class Office$MsoModeType {
  constructor(...args: empty): mixed;
static +msoModeAutoDown: Class<Office$MsoModeType__msoModeAutoDown> & Office$MsoModeType__msoModeAutoDown & 1;// 1
static +msoModeModal: Class<Office$MsoModeType__msoModeModal> & Office$MsoModeType__msoModeModal & 0;// 0
static +msoModeModeless: Class<Office$MsoModeType__msoModeModeless> & Office$MsoModeType__msoModeModeless & 2;// 2

}

declare class Office$MsoModeType__msoModeAutoDown mixins Office$MsoModeType {}
declare class Office$MsoModeType__msoModeModal mixins Office$MsoModeType {}
declare class Office$MsoModeType__msoModeModeless mixins Office$MsoModeType {}


declare  class Office$MsoMoveRow {
  constructor(...args: empty): mixed;
static +msoMoveRowFirst: Class<Office$MsoMoveRow__msoMoveRowFirst> & Office$MsoMoveRow__msoMoveRowFirst & -4;// -4
static +msoMoveRowNbr: Class<Office$MsoMoveRow__msoMoveRowNbr> & Office$MsoMoveRow__msoMoveRowNbr & -1;// -1
static +msoMoveRowNext: Class<Office$MsoMoveRow__msoMoveRowNext> & Office$MsoMoveRow__msoMoveRowNext & -2;// -2
static +msoMoveRowPrev: Class<Office$MsoMoveRow__msoMoveRowPrev> & Office$MsoMoveRow__msoMoveRowPrev & -3;// -3

}

declare class Office$MsoMoveRow__msoMoveRowFirst mixins Office$MsoMoveRow {}
declare class Office$MsoMoveRow__msoMoveRowNbr mixins Office$MsoMoveRow {}
declare class Office$MsoMoveRow__msoMoveRowNext mixins Office$MsoMoveRow {}
declare class Office$MsoMoveRow__msoMoveRowPrev mixins Office$MsoMoveRow {}


declare  class Office$MsoNumberedBulletStyle {
  constructor(...args: empty): mixed;
static +msoBulletAlphaLCParenBoth: Class<Office$MsoNumberedBulletStyle__msoBulletAlphaLCParenBoth> & Office$MsoNumberedBulletStyle__msoBulletAlphaLCParenBoth & 8;// 8
static +msoBulletAlphaLCParenRight: Class<Office$MsoNumberedBulletStyle__msoBulletAlphaLCParenRight> & Office$MsoNumberedBulletStyle__msoBulletAlphaLCParenRight & 9;// 9
static +msoBulletAlphaLCPeriod: Class<Office$MsoNumberedBulletStyle__msoBulletAlphaLCPeriod> & Office$MsoNumberedBulletStyle__msoBulletAlphaLCPeriod & 0;// 0
static +msoBulletAlphaUCParenBoth: Class<Office$MsoNumberedBulletStyle__msoBulletAlphaUCParenBoth> & Office$MsoNumberedBulletStyle__msoBulletAlphaUCParenBoth & 10;// 10
static +msoBulletAlphaUCParenRight: Class<Office$MsoNumberedBulletStyle__msoBulletAlphaUCParenRight> & Office$MsoNumberedBulletStyle__msoBulletAlphaUCParenRight & 11;// 11
static +msoBulletAlphaUCPeriod: Class<Office$MsoNumberedBulletStyle__msoBulletAlphaUCPeriod> & Office$MsoNumberedBulletStyle__msoBulletAlphaUCPeriod & 1;// 1
static +msoBulletArabicAbjadDash: Class<Office$MsoNumberedBulletStyle__msoBulletArabicAbjadDash> & Office$MsoNumberedBulletStyle__msoBulletArabicAbjadDash & 24;// 24
static +msoBulletArabicAlphaDash: Class<Office$MsoNumberedBulletStyle__msoBulletArabicAlphaDash> & Office$MsoNumberedBulletStyle__msoBulletArabicAlphaDash & 23;// 23
static +msoBulletArabicDBPeriod: Class<Office$MsoNumberedBulletStyle__msoBulletArabicDBPeriod> & Office$MsoNumberedBulletStyle__msoBulletArabicDBPeriod & 29;// 29
static +msoBulletArabicDBPlain: Class<Office$MsoNumberedBulletStyle__msoBulletArabicDBPlain> & Office$MsoNumberedBulletStyle__msoBulletArabicDBPlain & 28;// 28
static +msoBulletArabicParenBoth: Class<Office$MsoNumberedBulletStyle__msoBulletArabicParenBoth> & Office$MsoNumberedBulletStyle__msoBulletArabicParenBoth & 12;// 12
static +msoBulletArabicParenRight: Class<Office$MsoNumberedBulletStyle__msoBulletArabicParenRight> & Office$MsoNumberedBulletStyle__msoBulletArabicParenRight & 2;// 2
static +msoBulletArabicPeriod: Class<Office$MsoNumberedBulletStyle__msoBulletArabicPeriod> & Office$MsoNumberedBulletStyle__msoBulletArabicPeriod & 3;// 3
static +msoBulletArabicPlain: Class<Office$MsoNumberedBulletStyle__msoBulletArabicPlain> & Office$MsoNumberedBulletStyle__msoBulletArabicPlain & 13;// 13
static +msoBulletCircleNumDBPlain: Class<Office$MsoNumberedBulletStyle__msoBulletCircleNumDBPlain> & Office$MsoNumberedBulletStyle__msoBulletCircleNumDBPlain & 18;// 18
static +msoBulletCircleNumWDBlackPlain: Class<Office$MsoNumberedBulletStyle__msoBulletCircleNumWDBlackPlain> & Office$MsoNumberedBulletStyle__msoBulletCircleNumWDBlackPlain & 20;// 20
static +msoBulletCircleNumWDWhitePlain: Class<Office$MsoNumberedBulletStyle__msoBulletCircleNumWDWhitePlain> & Office$MsoNumberedBulletStyle__msoBulletCircleNumWDWhitePlain & 19;// 19
static +msoBulletHebrewAlphaDash: Class<Office$MsoNumberedBulletStyle__msoBulletHebrewAlphaDash> & Office$MsoNumberedBulletStyle__msoBulletHebrewAlphaDash & 25;// 25
static +msoBulletHindiAlpha1Period: Class<Office$MsoNumberedBulletStyle__msoBulletHindiAlpha1Period> & Office$MsoNumberedBulletStyle__msoBulletHindiAlpha1Period & 40;// 40
static +msoBulletHindiAlphaPeriod: Class<Office$MsoNumberedBulletStyle__msoBulletHindiAlphaPeriod> & Office$MsoNumberedBulletStyle__msoBulletHindiAlphaPeriod & 36;// 36
static +msoBulletHindiNumParenRight: Class<Office$MsoNumberedBulletStyle__msoBulletHindiNumParenRight> & Office$MsoNumberedBulletStyle__msoBulletHindiNumParenRight & 39;// 39
static +msoBulletHindiNumPeriod: Class<Office$MsoNumberedBulletStyle__msoBulletHindiNumPeriod> & Office$MsoNumberedBulletStyle__msoBulletHindiNumPeriod & 37;// 37
static +msoBulletKanjiKoreanPeriod: Class<Office$MsoNumberedBulletStyle__msoBulletKanjiKoreanPeriod> & Office$MsoNumberedBulletStyle__msoBulletKanjiKoreanPeriod & 27;// 27
static +msoBulletKanjiKoreanPlain: Class<Office$MsoNumberedBulletStyle__msoBulletKanjiKoreanPlain> & Office$MsoNumberedBulletStyle__msoBulletKanjiKoreanPlain & 26;// 26
static +msoBulletKanjiSimpChinDBPeriod: Class<Office$MsoNumberedBulletStyle__msoBulletKanjiSimpChinDBPeriod> & Office$MsoNumberedBulletStyle__msoBulletKanjiSimpChinDBPeriod & 38;// 38
static +msoBulletRomanLCParenBoth: Class<Office$MsoNumberedBulletStyle__msoBulletRomanLCParenBoth> & Office$MsoNumberedBulletStyle__msoBulletRomanLCParenBoth & 4;// 4
static +msoBulletRomanLCParenRight: Class<Office$MsoNumberedBulletStyle__msoBulletRomanLCParenRight> & Office$MsoNumberedBulletStyle__msoBulletRomanLCParenRight & 5;// 5
static +msoBulletRomanLCPeriod: Class<Office$MsoNumberedBulletStyle__msoBulletRomanLCPeriod> & Office$MsoNumberedBulletStyle__msoBulletRomanLCPeriod & 6;// 6
static +msoBulletRomanUCParenBoth: Class<Office$MsoNumberedBulletStyle__msoBulletRomanUCParenBoth> & Office$MsoNumberedBulletStyle__msoBulletRomanUCParenBoth & 14;// 14
static +msoBulletRomanUCParenRight: Class<Office$MsoNumberedBulletStyle__msoBulletRomanUCParenRight> & Office$MsoNumberedBulletStyle__msoBulletRomanUCParenRight & 15;// 15
static +msoBulletRomanUCPeriod: Class<Office$MsoNumberedBulletStyle__msoBulletRomanUCPeriod> & Office$MsoNumberedBulletStyle__msoBulletRomanUCPeriod & 7;// 7
static +msoBulletSimpChinPeriod: Class<Office$MsoNumberedBulletStyle__msoBulletSimpChinPeriod> & Office$MsoNumberedBulletStyle__msoBulletSimpChinPeriod & 17;// 17
static +msoBulletSimpChinPlain: Class<Office$MsoNumberedBulletStyle__msoBulletSimpChinPlain> & Office$MsoNumberedBulletStyle__msoBulletSimpChinPlain & 16;// 16
static +msoBulletStyleMixed: Class<Office$MsoNumberedBulletStyle__msoBulletStyleMixed> & Office$MsoNumberedBulletStyle__msoBulletStyleMixed & -2;// -2
static +msoBulletThaiAlphaParenBoth: Class<Office$MsoNumberedBulletStyle__msoBulletThaiAlphaParenBoth> & Office$MsoNumberedBulletStyle__msoBulletThaiAlphaParenBoth & 32;// 32
static +msoBulletThaiAlphaParenRight: Class<Office$MsoNumberedBulletStyle__msoBulletThaiAlphaParenRight> & Office$MsoNumberedBulletStyle__msoBulletThaiAlphaParenRight & 31;// 31
static +msoBulletThaiAlphaPeriod: Class<Office$MsoNumberedBulletStyle__msoBulletThaiAlphaPeriod> & Office$MsoNumberedBulletStyle__msoBulletThaiAlphaPeriod & 30;// 30
static +msoBulletThaiNumParenBoth: Class<Office$MsoNumberedBulletStyle__msoBulletThaiNumParenBoth> & Office$MsoNumberedBulletStyle__msoBulletThaiNumParenBoth & 35;// 35
static +msoBulletThaiNumParenRight: Class<Office$MsoNumberedBulletStyle__msoBulletThaiNumParenRight> & Office$MsoNumberedBulletStyle__msoBulletThaiNumParenRight & 34;// 34
static +msoBulletThaiNumPeriod: Class<Office$MsoNumberedBulletStyle__msoBulletThaiNumPeriod> & Office$MsoNumberedBulletStyle__msoBulletThaiNumPeriod & 33;// 33
static +msoBulletTradChinPeriod: Class<Office$MsoNumberedBulletStyle__msoBulletTradChinPeriod> & Office$MsoNumberedBulletStyle__msoBulletTradChinPeriod & 22;// 22
static +msoBulletTradChinPlain: Class<Office$MsoNumberedBulletStyle__msoBulletTradChinPlain> & Office$MsoNumberedBulletStyle__msoBulletTradChinPlain & 21;// 21

}

declare class Office$MsoNumberedBulletStyle__msoBulletAlphaLCParenBoth mixins Office$MsoNumberedBulletStyle {}
declare class Office$MsoNumberedBulletStyle__msoBulletAlphaLCParenRight mixins Office$MsoNumberedBulletStyle {}
declare class Office$MsoNumberedBulletStyle__msoBulletAlphaLCPeriod mixins Office$MsoNumberedBulletStyle {}
declare class Office$MsoNumberedBulletStyle__msoBulletAlphaUCParenBoth mixins Office$MsoNumberedBulletStyle {}
declare class Office$MsoNumberedBulletStyle__msoBulletAlphaUCParenRight mixins Office$MsoNumberedBulletStyle {}
declare class Office$MsoNumberedBulletStyle__msoBulletAlphaUCPeriod mixins Office$MsoNumberedBulletStyle {}
declare class Office$MsoNumberedBulletStyle__msoBulletArabicAbjadDash mixins Office$MsoNumberedBulletStyle {}
declare class Office$MsoNumberedBulletStyle__msoBulletArabicAlphaDash mixins Office$MsoNumberedBulletStyle {}
declare class Office$MsoNumberedBulletStyle__msoBulletArabicDBPeriod mixins Office$MsoNumberedBulletStyle {}
declare class Office$MsoNumberedBulletStyle__msoBulletArabicDBPlain mixins Office$MsoNumberedBulletStyle {}
declare class Office$MsoNumberedBulletStyle__msoBulletArabicParenBoth mixins Office$MsoNumberedBulletStyle {}
declare class Office$MsoNumberedBulletStyle__msoBulletArabicParenRight mixins Office$MsoNumberedBulletStyle {}
declare class Office$MsoNumberedBulletStyle__msoBulletArabicPeriod mixins Office$MsoNumberedBulletStyle {}
declare class Office$MsoNumberedBulletStyle__msoBulletArabicPlain mixins Office$MsoNumberedBulletStyle {}
declare class Office$MsoNumberedBulletStyle__msoBulletCircleNumDBPlain mixins Office$MsoNumberedBulletStyle {}
declare class Office$MsoNumberedBulletStyle__msoBulletCircleNumWDBlackPlain mixins Office$MsoNumberedBulletStyle {}
declare class Office$MsoNumberedBulletStyle__msoBulletCircleNumWDWhitePlain mixins Office$MsoNumberedBulletStyle {}
declare class Office$MsoNumberedBulletStyle__msoBulletHebrewAlphaDash mixins Office$MsoNumberedBulletStyle {}
declare class Office$MsoNumberedBulletStyle__msoBulletHindiAlpha1Period mixins Office$MsoNumberedBulletStyle {}
declare class Office$MsoNumberedBulletStyle__msoBulletHindiAlphaPeriod mixins Office$MsoNumberedBulletStyle {}
declare class Office$MsoNumberedBulletStyle__msoBulletHindiNumParenRight mixins Office$MsoNumberedBulletStyle {}
declare class Office$MsoNumberedBulletStyle__msoBulletHindiNumPeriod mixins Office$MsoNumberedBulletStyle {}
declare class Office$MsoNumberedBulletStyle__msoBulletKanjiKoreanPeriod mixins Office$MsoNumberedBulletStyle {}
declare class Office$MsoNumberedBulletStyle__msoBulletKanjiKoreanPlain mixins Office$MsoNumberedBulletStyle {}
declare class Office$MsoNumberedBulletStyle__msoBulletKanjiSimpChinDBPeriod mixins Office$MsoNumberedBulletStyle {}
declare class Office$MsoNumberedBulletStyle__msoBulletRomanLCParenBoth mixins Office$MsoNumberedBulletStyle {}
declare class Office$MsoNumberedBulletStyle__msoBulletRomanLCParenRight mixins Office$MsoNumberedBulletStyle {}
declare class Office$MsoNumberedBulletStyle__msoBulletRomanLCPeriod mixins Office$MsoNumberedBulletStyle {}
declare class Office$MsoNumberedBulletStyle__msoBulletRomanUCParenBoth mixins Office$MsoNumberedBulletStyle {}
declare class Office$MsoNumberedBulletStyle__msoBulletRomanUCParenRight mixins Office$MsoNumberedBulletStyle {}
declare class Office$MsoNumberedBulletStyle__msoBulletRomanUCPeriod mixins Office$MsoNumberedBulletStyle {}
declare class Office$MsoNumberedBulletStyle__msoBulletSimpChinPeriod mixins Office$MsoNumberedBulletStyle {}
declare class Office$MsoNumberedBulletStyle__msoBulletSimpChinPlain mixins Office$MsoNumberedBulletStyle {}
declare class Office$MsoNumberedBulletStyle__msoBulletStyleMixed mixins Office$MsoNumberedBulletStyle {}
declare class Office$MsoNumberedBulletStyle__msoBulletThaiAlphaParenBoth mixins Office$MsoNumberedBulletStyle {}
declare class Office$MsoNumberedBulletStyle__msoBulletThaiAlphaParenRight mixins Office$MsoNumberedBulletStyle {}
declare class Office$MsoNumberedBulletStyle__msoBulletThaiAlphaPeriod mixins Office$MsoNumberedBulletStyle {}
declare class Office$MsoNumberedBulletStyle__msoBulletThaiNumParenBoth mixins Office$MsoNumberedBulletStyle {}
declare class Office$MsoNumberedBulletStyle__msoBulletThaiNumParenRight mixins Office$MsoNumberedBulletStyle {}
declare class Office$MsoNumberedBulletStyle__msoBulletThaiNumPeriod mixins Office$MsoNumberedBulletStyle {}
declare class Office$MsoNumberedBulletStyle__msoBulletTradChinPeriod mixins Office$MsoNumberedBulletStyle {}
declare class Office$MsoNumberedBulletStyle__msoBulletTradChinPlain mixins Office$MsoNumberedBulletStyle {}


declare  class Office$MsoOLEMenuGroup {
  constructor(...args: empty): mixed;
static +msoOLEMenuGroupContainer: Class<Office$MsoOLEMenuGroup__msoOLEMenuGroupContainer> & Office$MsoOLEMenuGroup__msoOLEMenuGroupContainer & 2;// 2
static +msoOLEMenuGroupEdit: Class<Office$MsoOLEMenuGroup__msoOLEMenuGroupEdit> & Office$MsoOLEMenuGroup__msoOLEMenuGroupEdit & 1;// 1
static +msoOLEMenuGroupFile: Class<Office$MsoOLEMenuGroup__msoOLEMenuGroupFile> & Office$MsoOLEMenuGroup__msoOLEMenuGroupFile & 0;// 0
static +msoOLEMenuGroupHelp: Class<Office$MsoOLEMenuGroup__msoOLEMenuGroupHelp> & Office$MsoOLEMenuGroup__msoOLEMenuGroupHelp & 5;// 5
static +msoOLEMenuGroupNone: Class<Office$MsoOLEMenuGroup__msoOLEMenuGroupNone> & Office$MsoOLEMenuGroup__msoOLEMenuGroupNone & -1;// -1
static +msoOLEMenuGroupObject: Class<Office$MsoOLEMenuGroup__msoOLEMenuGroupObject> & Office$MsoOLEMenuGroup__msoOLEMenuGroupObject & 3;// 3
static +msoOLEMenuGroupWindow: Class<Office$MsoOLEMenuGroup__msoOLEMenuGroupWindow> & Office$MsoOLEMenuGroup__msoOLEMenuGroupWindow & 4;// 4

}

declare class Office$MsoOLEMenuGroup__msoOLEMenuGroupContainer mixins Office$MsoOLEMenuGroup {}
declare class Office$MsoOLEMenuGroup__msoOLEMenuGroupEdit mixins Office$MsoOLEMenuGroup {}
declare class Office$MsoOLEMenuGroup__msoOLEMenuGroupFile mixins Office$MsoOLEMenuGroup {}
declare class Office$MsoOLEMenuGroup__msoOLEMenuGroupHelp mixins Office$MsoOLEMenuGroup {}
declare class Office$MsoOLEMenuGroup__msoOLEMenuGroupNone mixins Office$MsoOLEMenuGroup {}
declare class Office$MsoOLEMenuGroup__msoOLEMenuGroupObject mixins Office$MsoOLEMenuGroup {}
declare class Office$MsoOLEMenuGroup__msoOLEMenuGroupWindow mixins Office$MsoOLEMenuGroup {}


declare  class Office$MsoOrgChartLayoutType {
  constructor(...args: empty): mixed;
static +msoOrgChartLayoutBothHanging: Class<Office$MsoOrgChartLayoutType__msoOrgChartLayoutBothHanging> & Office$MsoOrgChartLayoutType__msoOrgChartLayoutBothHanging & 2;// 2
static +msoOrgChartLayoutDefault: Class<Office$MsoOrgChartLayoutType__msoOrgChartLayoutDefault> & Office$MsoOrgChartLayoutType__msoOrgChartLayoutDefault & 5;// 5
static +msoOrgChartLayoutLeftHanging: Class<Office$MsoOrgChartLayoutType__msoOrgChartLayoutLeftHanging> & Office$MsoOrgChartLayoutType__msoOrgChartLayoutLeftHanging & 3;// 3
static +msoOrgChartLayoutMixed: Class<Office$MsoOrgChartLayoutType__msoOrgChartLayoutMixed> & Office$MsoOrgChartLayoutType__msoOrgChartLayoutMixed & -2;// -2
static +msoOrgChartLayoutRightHanging: Class<Office$MsoOrgChartLayoutType__msoOrgChartLayoutRightHanging> & Office$MsoOrgChartLayoutType__msoOrgChartLayoutRightHanging & 4;// 4
static +msoOrgChartLayoutStandard: Class<Office$MsoOrgChartLayoutType__msoOrgChartLayoutStandard> & Office$MsoOrgChartLayoutType__msoOrgChartLayoutStandard & 1;// 1

}

declare class Office$MsoOrgChartLayoutType__msoOrgChartLayoutBothHanging mixins Office$MsoOrgChartLayoutType {}
declare class Office$MsoOrgChartLayoutType__msoOrgChartLayoutDefault mixins Office$MsoOrgChartLayoutType {}
declare class Office$MsoOrgChartLayoutType__msoOrgChartLayoutLeftHanging mixins Office$MsoOrgChartLayoutType {}
declare class Office$MsoOrgChartLayoutType__msoOrgChartLayoutMixed mixins Office$MsoOrgChartLayoutType {}
declare class Office$MsoOrgChartLayoutType__msoOrgChartLayoutRightHanging mixins Office$MsoOrgChartLayoutType {}
declare class Office$MsoOrgChartLayoutType__msoOrgChartLayoutStandard mixins Office$MsoOrgChartLayoutType {}


declare  class Office$MsoOrgChartOrientation {
  constructor(...args: empty): mixed;
static +msoOrgChartOrientationMixed: Class<Office$MsoOrgChartOrientation__msoOrgChartOrientationMixed> & Office$MsoOrgChartOrientation__msoOrgChartOrientationMixed & -2;// -2
static +msoOrgChartOrientationVertical: Class<Office$MsoOrgChartOrientation__msoOrgChartOrientationVertical> & Office$MsoOrgChartOrientation__msoOrgChartOrientationVertical & 1;// 1

}

declare class Office$MsoOrgChartOrientation__msoOrgChartOrientationMixed mixins Office$MsoOrgChartOrientation {}
declare class Office$MsoOrgChartOrientation__msoOrgChartOrientationVertical mixins Office$MsoOrgChartOrientation {}


declare  class Office$MsoOrientation {
  constructor(...args: empty): mixed;
static +msoOrientationHorizontal: Class<Office$MsoOrientation__msoOrientationHorizontal> & Office$MsoOrientation__msoOrientationHorizontal & 1;// 1
static +msoOrientationMixed: Class<Office$MsoOrientation__msoOrientationMixed> & Office$MsoOrientation__msoOrientationMixed & -2;// -2
static +msoOrientationVertical: Class<Office$MsoOrientation__msoOrientationVertical> & Office$MsoOrientation__msoOrientationVertical & 2;// 2

}

declare class Office$MsoOrientation__msoOrientationHorizontal mixins Office$MsoOrientation {}
declare class Office$MsoOrientation__msoOrientationMixed mixins Office$MsoOrientation {}
declare class Office$MsoOrientation__msoOrientationVertical mixins Office$MsoOrientation {}


declare  class Office$MsoParagraphAlignment {
  constructor(...args: empty): mixed;
static +msoAlignCenter: Class<Office$MsoParagraphAlignment__msoAlignCenter> & Office$MsoParagraphAlignment__msoAlignCenter & 2;// 2
static +msoAlignDistribute: Class<Office$MsoParagraphAlignment__msoAlignDistribute> & Office$MsoParagraphAlignment__msoAlignDistribute & 5;// 5
static +msoAlignJustify: Class<Office$MsoParagraphAlignment__msoAlignJustify> & Office$MsoParagraphAlignment__msoAlignJustify & 4;// 4
static +msoAlignJustifyLow: Class<Office$MsoParagraphAlignment__msoAlignJustifyLow> & Office$MsoParagraphAlignment__msoAlignJustifyLow & 7;// 7
static +msoAlignLeft: Class<Office$MsoParagraphAlignment__msoAlignLeft> & Office$MsoParagraphAlignment__msoAlignLeft & 1;// 1
static +msoAlignMixed: Class<Office$MsoParagraphAlignment__msoAlignMixed> & Office$MsoParagraphAlignment__msoAlignMixed & -2;// -2
static +msoAlignRight: Class<Office$MsoParagraphAlignment__msoAlignRight> & Office$MsoParagraphAlignment__msoAlignRight & 3;// 3
static +msoAlignThaiDistribute: Class<Office$MsoParagraphAlignment__msoAlignThaiDistribute> & Office$MsoParagraphAlignment__msoAlignThaiDistribute & 6;// 6

}

declare class Office$MsoParagraphAlignment__msoAlignCenter mixins Office$MsoParagraphAlignment {}
declare class Office$MsoParagraphAlignment__msoAlignDistribute mixins Office$MsoParagraphAlignment {}
declare class Office$MsoParagraphAlignment__msoAlignJustify mixins Office$MsoParagraphAlignment {}
declare class Office$MsoParagraphAlignment__msoAlignJustifyLow mixins Office$MsoParagraphAlignment {}
declare class Office$MsoParagraphAlignment__msoAlignLeft mixins Office$MsoParagraphAlignment {}
declare class Office$MsoParagraphAlignment__msoAlignMixed mixins Office$MsoParagraphAlignment {}
declare class Office$MsoParagraphAlignment__msoAlignRight mixins Office$MsoParagraphAlignment {}
declare class Office$MsoParagraphAlignment__msoAlignThaiDistribute mixins Office$MsoParagraphAlignment {}


declare  class Office$MsoPathFormat {
  constructor(...args: empty): mixed;
static +msoPathType1: Class<Office$MsoPathFormat__msoPathType1> & Office$MsoPathFormat__msoPathType1 & 1;// 1
static +msoPathType2: Class<Office$MsoPathFormat__msoPathType2> & Office$MsoPathFormat__msoPathType2 & 2;// 2
static +msoPathType3: Class<Office$MsoPathFormat__msoPathType3> & Office$MsoPathFormat__msoPathType3 & 3;// 3
static +msoPathType4: Class<Office$MsoPathFormat__msoPathType4> & Office$MsoPathFormat__msoPathType4 & 4;// 4
static +msoPathTypeMixed: Class<Office$MsoPathFormat__msoPathTypeMixed> & Office$MsoPathFormat__msoPathTypeMixed & -2;// -2
static +msoPathTypeNone: Class<Office$MsoPathFormat__msoPathTypeNone> & Office$MsoPathFormat__msoPathTypeNone & 0;// 0

}

declare class Office$MsoPathFormat__msoPathType1 mixins Office$MsoPathFormat {}
declare class Office$MsoPathFormat__msoPathType2 mixins Office$MsoPathFormat {}
declare class Office$MsoPathFormat__msoPathType3 mixins Office$MsoPathFormat {}
declare class Office$MsoPathFormat__msoPathType4 mixins Office$MsoPathFormat {}
declare class Office$MsoPathFormat__msoPathTypeMixed mixins Office$MsoPathFormat {}
declare class Office$MsoPathFormat__msoPathTypeNone mixins Office$MsoPathFormat {}


declare  class Office$MsoPatternType {
  constructor(...args: empty): mixed;
static +msoPattern10Percent: Class<Office$MsoPatternType__msoPattern10Percent> & Office$MsoPatternType__msoPattern10Percent & 2;// 2
static +msoPattern20Percent: Class<Office$MsoPatternType__msoPattern20Percent> & Office$MsoPatternType__msoPattern20Percent & 3;// 3
static +msoPattern25Percent: Class<Office$MsoPatternType__msoPattern25Percent> & Office$MsoPatternType__msoPattern25Percent & 4;// 4
static +msoPattern30Percent: Class<Office$MsoPatternType__msoPattern30Percent> & Office$MsoPatternType__msoPattern30Percent & 5;// 5
static +msoPattern40Percent: Class<Office$MsoPatternType__msoPattern40Percent> & Office$MsoPatternType__msoPattern40Percent & 6;// 6
static +msoPattern50Percent: Class<Office$MsoPatternType__msoPattern50Percent> & Office$MsoPatternType__msoPattern50Percent & 7;// 7
static +msoPattern5Percent: Class<Office$MsoPatternType__msoPattern5Percent> & Office$MsoPatternType__msoPattern5Percent & 1;// 1
static +msoPattern60Percent: Class<Office$MsoPatternType__msoPattern60Percent> & Office$MsoPatternType__msoPattern60Percent & 8;// 8
static +msoPattern70Percent: Class<Office$MsoPatternType__msoPattern70Percent> & Office$MsoPatternType__msoPattern70Percent & 9;// 9
static +msoPattern75Percent: Class<Office$MsoPatternType__msoPattern75Percent> & Office$MsoPatternType__msoPattern75Percent & 10;// 10
static +msoPattern80Percent: Class<Office$MsoPatternType__msoPattern80Percent> & Office$MsoPatternType__msoPattern80Percent & 11;// 11
static +msoPattern90Percent: Class<Office$MsoPatternType__msoPattern90Percent> & Office$MsoPatternType__msoPattern90Percent & 12;// 12
static +msoPatternCross: Class<Office$MsoPatternType__msoPatternCross> & Office$MsoPatternType__msoPatternCross & 51;// 51
static +msoPatternDarkDownwardDiagonal: Class<Office$MsoPatternType__msoPatternDarkDownwardDiagonal> & Office$MsoPatternType__msoPatternDarkDownwardDiagonal & 15;// 15
static +msoPatternDarkHorizontal: Class<Office$MsoPatternType__msoPatternDarkHorizontal> & Office$MsoPatternType__msoPatternDarkHorizontal & 13;// 13
static +msoPatternDarkUpwardDiagonal: Class<Office$MsoPatternType__msoPatternDarkUpwardDiagonal> & Office$MsoPatternType__msoPatternDarkUpwardDiagonal & 16;// 16
static +msoPatternDarkVertical: Class<Office$MsoPatternType__msoPatternDarkVertical> & Office$MsoPatternType__msoPatternDarkVertical & 14;// 14
static +msoPatternDashedDownwardDiagonal: Class<Office$MsoPatternType__msoPatternDashedDownwardDiagonal> & Office$MsoPatternType__msoPatternDashedDownwardDiagonal & 28;// 28
static +msoPatternDashedHorizontal: Class<Office$MsoPatternType__msoPatternDashedHorizontal> & Office$MsoPatternType__msoPatternDashedHorizontal & 32;// 32
static +msoPatternDashedUpwardDiagonal: Class<Office$MsoPatternType__msoPatternDashedUpwardDiagonal> & Office$MsoPatternType__msoPatternDashedUpwardDiagonal & 27;// 27
static +msoPatternDashedVertical: Class<Office$MsoPatternType__msoPatternDashedVertical> & Office$MsoPatternType__msoPatternDashedVertical & 31;// 31
static +msoPatternDiagonalBrick: Class<Office$MsoPatternType__msoPatternDiagonalBrick> & Office$MsoPatternType__msoPatternDiagonalBrick & 40;// 40
static +msoPatternDiagonalCross: Class<Office$MsoPatternType__msoPatternDiagonalCross> & Office$MsoPatternType__msoPatternDiagonalCross & 54;// 54
static +msoPatternDivot: Class<Office$MsoPatternType__msoPatternDivot> & Office$MsoPatternType__msoPatternDivot & 46;// 46
static +msoPatternDottedDiamond: Class<Office$MsoPatternType__msoPatternDottedDiamond> & Office$MsoPatternType__msoPatternDottedDiamond & 24;// 24
static +msoPatternDottedGrid: Class<Office$MsoPatternType__msoPatternDottedGrid> & Office$MsoPatternType__msoPatternDottedGrid & 45;// 45
static +msoPatternDownwardDiagonal: Class<Office$MsoPatternType__msoPatternDownwardDiagonal> & Office$MsoPatternType__msoPatternDownwardDiagonal & 52;// 52
static +msoPatternHorizontal: Class<Office$MsoPatternType__msoPatternHorizontal> & Office$MsoPatternType__msoPatternHorizontal & 49;// 49
static +msoPatternHorizontalBrick: Class<Office$MsoPatternType__msoPatternHorizontalBrick> & Office$MsoPatternType__msoPatternHorizontalBrick & 35;// 35
static +msoPatternLargeCheckerBoard: Class<Office$MsoPatternType__msoPatternLargeCheckerBoard> & Office$MsoPatternType__msoPatternLargeCheckerBoard & 36;// 36
static +msoPatternLargeConfetti: Class<Office$MsoPatternType__msoPatternLargeConfetti> & Office$MsoPatternType__msoPatternLargeConfetti & 33;// 33
static +msoPatternLargeGrid: Class<Office$MsoPatternType__msoPatternLargeGrid> & Office$MsoPatternType__msoPatternLargeGrid & 34;// 34
static +msoPatternLightDownwardDiagonal: Class<Office$MsoPatternType__msoPatternLightDownwardDiagonal> & Office$MsoPatternType__msoPatternLightDownwardDiagonal & 21;// 21
static +msoPatternLightHorizontal: Class<Office$MsoPatternType__msoPatternLightHorizontal> & Office$MsoPatternType__msoPatternLightHorizontal & 19;// 19
static +msoPatternLightUpwardDiagonal: Class<Office$MsoPatternType__msoPatternLightUpwardDiagonal> & Office$MsoPatternType__msoPatternLightUpwardDiagonal & 22;// 22
static +msoPatternLightVertical: Class<Office$MsoPatternType__msoPatternLightVertical> & Office$MsoPatternType__msoPatternLightVertical & 20;// 20
static +msoPatternMixed: Class<Office$MsoPatternType__msoPatternMixed> & Office$MsoPatternType__msoPatternMixed & -2;// -2
static +msoPatternNarrowHorizontal: Class<Office$MsoPatternType__msoPatternNarrowHorizontal> & Office$MsoPatternType__msoPatternNarrowHorizontal & 30;// 30
static +msoPatternNarrowVertical: Class<Office$MsoPatternType__msoPatternNarrowVertical> & Office$MsoPatternType__msoPatternNarrowVertical & 29;// 29
static +msoPatternOutlinedDiamond: Class<Office$MsoPatternType__msoPatternOutlinedDiamond> & Office$MsoPatternType__msoPatternOutlinedDiamond & 41;// 41
static +msoPatternPlaid: Class<Office$MsoPatternType__msoPatternPlaid> & Office$MsoPatternType__msoPatternPlaid & 42;// 42
static +msoPatternShingle: Class<Office$MsoPatternType__msoPatternShingle> & Office$MsoPatternType__msoPatternShingle & 47;// 47
static +msoPatternSmallCheckerBoard: Class<Office$MsoPatternType__msoPatternSmallCheckerBoard> & Office$MsoPatternType__msoPatternSmallCheckerBoard & 17;// 17
static +msoPatternSmallConfetti: Class<Office$MsoPatternType__msoPatternSmallConfetti> & Office$MsoPatternType__msoPatternSmallConfetti & 37;// 37
static +msoPatternSmallGrid: Class<Office$MsoPatternType__msoPatternSmallGrid> & Office$MsoPatternType__msoPatternSmallGrid & 23;// 23
static +msoPatternSolidDiamond: Class<Office$MsoPatternType__msoPatternSolidDiamond> & Office$MsoPatternType__msoPatternSolidDiamond & 39;// 39
static +msoPatternSphere: Class<Office$MsoPatternType__msoPatternSphere> & Office$MsoPatternType__msoPatternSphere & 43;// 43
static +msoPatternTrellis: Class<Office$MsoPatternType__msoPatternTrellis> & Office$MsoPatternType__msoPatternTrellis & 18;// 18
static +msoPatternUpwardDiagonal: Class<Office$MsoPatternType__msoPatternUpwardDiagonal> & Office$MsoPatternType__msoPatternUpwardDiagonal & 53;// 53
static +msoPatternVertical: Class<Office$MsoPatternType__msoPatternVertical> & Office$MsoPatternType__msoPatternVertical & 50;// 50
static +msoPatternWave: Class<Office$MsoPatternType__msoPatternWave> & Office$MsoPatternType__msoPatternWave & 48;// 48
static +msoPatternWeave: Class<Office$MsoPatternType__msoPatternWeave> & Office$MsoPatternType__msoPatternWeave & 44;// 44
static +msoPatternWideDownwardDiagonal: Class<Office$MsoPatternType__msoPatternWideDownwardDiagonal> & Office$MsoPatternType__msoPatternWideDownwardDiagonal & 25;// 25
static +msoPatternWideUpwardDiagonal: Class<Office$MsoPatternType__msoPatternWideUpwardDiagonal> & Office$MsoPatternType__msoPatternWideUpwardDiagonal & 26;// 26
static +msoPatternZigZag: Class<Office$MsoPatternType__msoPatternZigZag> & Office$MsoPatternType__msoPatternZigZag & 38;// 38

}

declare class Office$MsoPatternType__msoPattern10Percent mixins Office$MsoPatternType {}
declare class Office$MsoPatternType__msoPattern20Percent mixins Office$MsoPatternType {}
declare class Office$MsoPatternType__msoPattern25Percent mixins Office$MsoPatternType {}
declare class Office$MsoPatternType__msoPattern30Percent mixins Office$MsoPatternType {}
declare class Office$MsoPatternType__msoPattern40Percent mixins Office$MsoPatternType {}
declare class Office$MsoPatternType__msoPattern50Percent mixins Office$MsoPatternType {}
declare class Office$MsoPatternType__msoPattern5Percent mixins Office$MsoPatternType {}
declare class Office$MsoPatternType__msoPattern60Percent mixins Office$MsoPatternType {}
declare class Office$MsoPatternType__msoPattern70Percent mixins Office$MsoPatternType {}
declare class Office$MsoPatternType__msoPattern75Percent mixins Office$MsoPatternType {}
declare class Office$MsoPatternType__msoPattern80Percent mixins Office$MsoPatternType {}
declare class Office$MsoPatternType__msoPattern90Percent mixins Office$MsoPatternType {}
declare class Office$MsoPatternType__msoPatternCross mixins Office$MsoPatternType {}
declare class Office$MsoPatternType__msoPatternDarkDownwardDiagonal mixins Office$MsoPatternType {}
declare class Office$MsoPatternType__msoPatternDarkHorizontal mixins Office$MsoPatternType {}
declare class Office$MsoPatternType__msoPatternDarkUpwardDiagonal mixins Office$MsoPatternType {}
declare class Office$MsoPatternType__msoPatternDarkVertical mixins Office$MsoPatternType {}
declare class Office$MsoPatternType__msoPatternDashedDownwardDiagonal mixins Office$MsoPatternType {}
declare class Office$MsoPatternType__msoPatternDashedHorizontal mixins Office$MsoPatternType {}
declare class Office$MsoPatternType__msoPatternDashedUpwardDiagonal mixins Office$MsoPatternType {}
declare class Office$MsoPatternType__msoPatternDashedVertical mixins Office$MsoPatternType {}
declare class Office$MsoPatternType__msoPatternDiagonalBrick mixins Office$MsoPatternType {}
declare class Office$MsoPatternType__msoPatternDiagonalCross mixins Office$MsoPatternType {}
declare class Office$MsoPatternType__msoPatternDivot mixins Office$MsoPatternType {}
declare class Office$MsoPatternType__msoPatternDottedDiamond mixins Office$MsoPatternType {}
declare class Office$MsoPatternType__msoPatternDottedGrid mixins Office$MsoPatternType {}
declare class Office$MsoPatternType__msoPatternDownwardDiagonal mixins Office$MsoPatternType {}
declare class Office$MsoPatternType__msoPatternHorizontal mixins Office$MsoPatternType {}
declare class Office$MsoPatternType__msoPatternHorizontalBrick mixins Office$MsoPatternType {}
declare class Office$MsoPatternType__msoPatternLargeCheckerBoard mixins Office$MsoPatternType {}
declare class Office$MsoPatternType__msoPatternLargeConfetti mixins Office$MsoPatternType {}
declare class Office$MsoPatternType__msoPatternLargeGrid mixins Office$MsoPatternType {}
declare class Office$MsoPatternType__msoPatternLightDownwardDiagonal mixins Office$MsoPatternType {}
declare class Office$MsoPatternType__msoPatternLightHorizontal mixins Office$MsoPatternType {}
declare class Office$MsoPatternType__msoPatternLightUpwardDiagonal mixins Office$MsoPatternType {}
declare class Office$MsoPatternType__msoPatternLightVertical mixins Office$MsoPatternType {}
declare class Office$MsoPatternType__msoPatternMixed mixins Office$MsoPatternType {}
declare class Office$MsoPatternType__msoPatternNarrowHorizontal mixins Office$MsoPatternType {}
declare class Office$MsoPatternType__msoPatternNarrowVertical mixins Office$MsoPatternType {}
declare class Office$MsoPatternType__msoPatternOutlinedDiamond mixins Office$MsoPatternType {}
declare class Office$MsoPatternType__msoPatternPlaid mixins Office$MsoPatternType {}
declare class Office$MsoPatternType__msoPatternShingle mixins Office$MsoPatternType {}
declare class Office$MsoPatternType__msoPatternSmallCheckerBoard mixins Office$MsoPatternType {}
declare class Office$MsoPatternType__msoPatternSmallConfetti mixins Office$MsoPatternType {}
declare class Office$MsoPatternType__msoPatternSmallGrid mixins Office$MsoPatternType {}
declare class Office$MsoPatternType__msoPatternSolidDiamond mixins Office$MsoPatternType {}
declare class Office$MsoPatternType__msoPatternSphere mixins Office$MsoPatternType {}
declare class Office$MsoPatternType__msoPatternTrellis mixins Office$MsoPatternType {}
declare class Office$MsoPatternType__msoPatternUpwardDiagonal mixins Office$MsoPatternType {}
declare class Office$MsoPatternType__msoPatternVertical mixins Office$MsoPatternType {}
declare class Office$MsoPatternType__msoPatternWave mixins Office$MsoPatternType {}
declare class Office$MsoPatternType__msoPatternWeave mixins Office$MsoPatternType {}
declare class Office$MsoPatternType__msoPatternWideDownwardDiagonal mixins Office$MsoPatternType {}
declare class Office$MsoPatternType__msoPatternWideUpwardDiagonal mixins Office$MsoPatternType {}
declare class Office$MsoPatternType__msoPatternZigZag mixins Office$MsoPatternType {}


declare  class Office$MsoPermission {
  constructor(...args: empty): mixed;
static +msoPermissionAllCommon: Class<Office$MsoPermission__msoPermissionAllCommon> & Office$MsoPermission__msoPermissionAllCommon & 127;// 127
static +msoPermissionChange: Class<Office$MsoPermission__msoPermissionChange> & Office$MsoPermission__msoPermissionChange & 15;// 15
static +msoPermissionEdit: Class<Office$MsoPermission__msoPermissionEdit> & Office$MsoPermission__msoPermissionEdit & 2;// 2
static +msoPermissionExtract: Class<Office$MsoPermission__msoPermissionExtract> & Office$MsoPermission__msoPermissionExtract & 8;// 8
static +msoPermissionFullControl: Class<Office$MsoPermission__msoPermissionFullControl> & Office$MsoPermission__msoPermissionFullControl & 64;// 64
static +msoPermissionObjModel: Class<Office$MsoPermission__msoPermissionObjModel> & Office$MsoPermission__msoPermissionObjModel & 32;// 32
static +msoPermissionPrint: Class<Office$MsoPermission__msoPermissionPrint> & Office$MsoPermission__msoPermissionPrint & 16;// 16
static +msoPermissionRead: Class<Office$MsoPermission__msoPermissionRead> & Office$MsoPermission__msoPermissionRead & 1;// 1
static +msoPermissionSave: Class<Office$MsoPermission__msoPermissionSave> & Office$MsoPermission__msoPermissionSave & 4;// 4
static +msoPermissionView: Class<Office$MsoPermission__msoPermissionView> & Office$MsoPermission__msoPermissionView & 1;// 1

}

declare class Office$MsoPermission__msoPermissionAllCommon mixins Office$MsoPermission {}
declare class Office$MsoPermission__msoPermissionChange mixins Office$MsoPermission {}
declare class Office$MsoPermission__msoPermissionEdit mixins Office$MsoPermission {}
declare class Office$MsoPermission__msoPermissionExtract mixins Office$MsoPermission {}
declare class Office$MsoPermission__msoPermissionFullControl mixins Office$MsoPermission {}
declare class Office$MsoPermission__msoPermissionObjModel mixins Office$MsoPermission {}
declare class Office$MsoPermission__msoPermissionPrint mixins Office$MsoPermission {}
declare class Office$MsoPermission__msoPermissionRead mixins Office$MsoPermission {}
declare class Office$MsoPermission__msoPermissionSave mixins Office$MsoPermission {}
declare class Office$MsoPermission__msoPermissionView mixins Office$MsoPermission {}


declare  class Office$MsoPickerField {
  constructor(...args: empty): mixed;
static +msoPickerFieldDateTime: Class<Office$MsoPickerField__msoPickerFieldDateTime> & Office$MsoPickerField__msoPickerFieldDateTime & 1;// 1
static +msoPickerFieldMax: Class<Office$MsoPickerField__msoPickerFieldMax> & Office$MsoPickerField__msoPickerFieldMax & 5;// 5
static +msoPickerFieldNumber: Class<Office$MsoPickerField__msoPickerFieldNumber> & Office$MsoPickerField__msoPickerFieldNumber & 2;// 2
static +msoPickerFieldText: Class<Office$MsoPickerField__msoPickerFieldText> & Office$MsoPickerField__msoPickerFieldText & 3;// 3
static +msoPickerFieldUnknown: Class<Office$MsoPickerField__msoPickerFieldUnknown> & Office$MsoPickerField__msoPickerFieldUnknown & 0;// 0
static +msoPickerFieldUser: Class<Office$MsoPickerField__msoPickerFieldUser> & Office$MsoPickerField__msoPickerFieldUser & 4;// 4

}

declare class Office$MsoPickerField__msoPickerFieldDateTime mixins Office$MsoPickerField {}
declare class Office$MsoPickerField__msoPickerFieldMax mixins Office$MsoPickerField {}
declare class Office$MsoPickerField__msoPickerFieldNumber mixins Office$MsoPickerField {}
declare class Office$MsoPickerField__msoPickerFieldText mixins Office$MsoPickerField {}
declare class Office$MsoPickerField__msoPickerFieldUnknown mixins Office$MsoPickerField {}
declare class Office$MsoPickerField__msoPickerFieldUser mixins Office$MsoPickerField {}


declare  class Office$MsoPictureColorType {
  constructor(...args: empty): mixed;
static +msoPictureAutomatic: Class<Office$MsoPictureColorType__msoPictureAutomatic> & Office$MsoPictureColorType__msoPictureAutomatic & 1;// 1
static +msoPictureBlackAndWhite: Class<Office$MsoPictureColorType__msoPictureBlackAndWhite> & Office$MsoPictureColorType__msoPictureBlackAndWhite & 3;// 3
static +msoPictureGrayscale: Class<Office$MsoPictureColorType__msoPictureGrayscale> & Office$MsoPictureColorType__msoPictureGrayscale & 2;// 2
static +msoPictureMixed: Class<Office$MsoPictureColorType__msoPictureMixed> & Office$MsoPictureColorType__msoPictureMixed & -2;// -2
static +msoPictureWatermark: Class<Office$MsoPictureColorType__msoPictureWatermark> & Office$MsoPictureColorType__msoPictureWatermark & 4;// 4

}

declare class Office$MsoPictureColorType__msoPictureAutomatic mixins Office$MsoPictureColorType {}
declare class Office$MsoPictureColorType__msoPictureBlackAndWhite mixins Office$MsoPictureColorType {}
declare class Office$MsoPictureColorType__msoPictureGrayscale mixins Office$MsoPictureColorType {}
declare class Office$MsoPictureColorType__msoPictureMixed mixins Office$MsoPictureColorType {}
declare class Office$MsoPictureColorType__msoPictureWatermark mixins Office$MsoPictureColorType {}


declare  class Office$MsoPictureCompress {
  constructor(...args: empty): mixed;
static +msoPictureCompressDocDefault: Class<Office$MsoPictureCompress__msoPictureCompressDocDefault> & Office$MsoPictureCompress__msoPictureCompressDocDefault & -1;// -1
static +msoPictureCompressFalse: Class<Office$MsoPictureCompress__msoPictureCompressFalse> & Office$MsoPictureCompress__msoPictureCompressFalse & 0;// 0
static +msoPictureCompressTrue: Class<Office$MsoPictureCompress__msoPictureCompressTrue> & Office$MsoPictureCompress__msoPictureCompressTrue & 1;// 1

}

declare class Office$MsoPictureCompress__msoPictureCompressDocDefault mixins Office$MsoPictureCompress {}
declare class Office$MsoPictureCompress__msoPictureCompressFalse mixins Office$MsoPictureCompress {}
declare class Office$MsoPictureCompress__msoPictureCompressTrue mixins Office$MsoPictureCompress {}


declare  class Office$MsoPictureEffectType {
  constructor(...args: empty): mixed;
static +msoEffectBackgroundRemoval: Class<Office$MsoPictureEffectType__msoEffectBackgroundRemoval> & Office$MsoPictureEffectType__msoEffectBackgroundRemoval & 1;// 1
static +msoEffectBlur: Class<Office$MsoPictureEffectType__msoEffectBlur> & Office$MsoPictureEffectType__msoEffectBlur & 2;// 2
static +msoEffectBrightnessContrast: Class<Office$MsoPictureEffectType__msoEffectBrightnessContrast> & Office$MsoPictureEffectType__msoEffectBrightnessContrast & 3;// 3
static +msoEffectCement: Class<Office$MsoPictureEffectType__msoEffectCement> & Office$MsoPictureEffectType__msoEffectCement & 4;// 4
static +msoEffectChalkSketch: Class<Office$MsoPictureEffectType__msoEffectChalkSketch> & Office$MsoPictureEffectType__msoEffectChalkSketch & 6;// 6
static +msoEffectColorTemperature: Class<Office$MsoPictureEffectType__msoEffectColorTemperature> & Office$MsoPictureEffectType__msoEffectColorTemperature & 7;// 7
static +msoEffectCrisscrossEtching: Class<Office$MsoPictureEffectType__msoEffectCrisscrossEtching> & Office$MsoPictureEffectType__msoEffectCrisscrossEtching & 5;// 5
static +msoEffectCutout: Class<Office$MsoPictureEffectType__msoEffectCutout> & Office$MsoPictureEffectType__msoEffectCutout & 8;// 8
static +msoEffectFilmGrain: Class<Office$MsoPictureEffectType__msoEffectFilmGrain> & Office$MsoPictureEffectType__msoEffectFilmGrain & 9;// 9
static +msoEffectGlass: Class<Office$MsoPictureEffectType__msoEffectGlass> & Office$MsoPictureEffectType__msoEffectGlass & 10;// 10
static +msoEffectGlowDiffused: Class<Office$MsoPictureEffectType__msoEffectGlowDiffused> & Office$MsoPictureEffectType__msoEffectGlowDiffused & 11;// 11
static +msoEffectGlowEdges: Class<Office$MsoPictureEffectType__msoEffectGlowEdges> & Office$MsoPictureEffectType__msoEffectGlowEdges & 12;// 12
static +msoEffectLightScreen: Class<Office$MsoPictureEffectType__msoEffectLightScreen> & Office$MsoPictureEffectType__msoEffectLightScreen & 13;// 13
static +msoEffectLineDrawing: Class<Office$MsoPictureEffectType__msoEffectLineDrawing> & Office$MsoPictureEffectType__msoEffectLineDrawing & 14;// 14
static +msoEffectMarker: Class<Office$MsoPictureEffectType__msoEffectMarker> & Office$MsoPictureEffectType__msoEffectMarker & 15;// 15
static +msoEffectMosiaicBubbles: Class<Office$MsoPictureEffectType__msoEffectMosiaicBubbles> & Office$MsoPictureEffectType__msoEffectMosiaicBubbles & 16;// 16
static +msoEffectNone: Class<Office$MsoPictureEffectType__msoEffectNone> & Office$MsoPictureEffectType__msoEffectNone & 0;// 0
static +msoEffectPaintBrush: Class<Office$MsoPictureEffectType__msoEffectPaintBrush> & Office$MsoPictureEffectType__msoEffectPaintBrush & 17;// 17
static +msoEffectPaintStrokes: Class<Office$MsoPictureEffectType__msoEffectPaintStrokes> & Office$MsoPictureEffectType__msoEffectPaintStrokes & 18;// 18
static +msoEffectPastelsSmooth: Class<Office$MsoPictureEffectType__msoEffectPastelsSmooth> & Office$MsoPictureEffectType__msoEffectPastelsSmooth & 19;// 19
static +msoEffectPencilGrayscale: Class<Office$MsoPictureEffectType__msoEffectPencilGrayscale> & Office$MsoPictureEffectType__msoEffectPencilGrayscale & 20;// 20
static +msoEffectPencilSketch: Class<Office$MsoPictureEffectType__msoEffectPencilSketch> & Office$MsoPictureEffectType__msoEffectPencilSketch & 21;// 21
static +msoEffectPhotocopy: Class<Office$MsoPictureEffectType__msoEffectPhotocopy> & Office$MsoPictureEffectType__msoEffectPhotocopy & 22;// 22
static +msoEffectPlasticWrap: Class<Office$MsoPictureEffectType__msoEffectPlasticWrap> & Office$MsoPictureEffectType__msoEffectPlasticWrap & 23;// 23
static +msoEffectSaturation: Class<Office$MsoPictureEffectType__msoEffectSaturation> & Office$MsoPictureEffectType__msoEffectSaturation & 24;// 24
static +msoEffectSharpenSoften: Class<Office$MsoPictureEffectType__msoEffectSharpenSoften> & Office$MsoPictureEffectType__msoEffectSharpenSoften & 25;// 25
static +msoEffectTexturizer: Class<Office$MsoPictureEffectType__msoEffectTexturizer> & Office$MsoPictureEffectType__msoEffectTexturizer & 26;// 26
static +msoEffectWatercolorSponge: Class<Office$MsoPictureEffectType__msoEffectWatercolorSponge> & Office$MsoPictureEffectType__msoEffectWatercolorSponge & 27;// 27

}

declare class Office$MsoPictureEffectType__msoEffectBackgroundRemoval mixins Office$MsoPictureEffectType {}
declare class Office$MsoPictureEffectType__msoEffectBlur mixins Office$MsoPictureEffectType {}
declare class Office$MsoPictureEffectType__msoEffectBrightnessContrast mixins Office$MsoPictureEffectType {}
declare class Office$MsoPictureEffectType__msoEffectCement mixins Office$MsoPictureEffectType {}
declare class Office$MsoPictureEffectType__msoEffectChalkSketch mixins Office$MsoPictureEffectType {}
declare class Office$MsoPictureEffectType__msoEffectColorTemperature mixins Office$MsoPictureEffectType {}
declare class Office$MsoPictureEffectType__msoEffectCrisscrossEtching mixins Office$MsoPictureEffectType {}
declare class Office$MsoPictureEffectType__msoEffectCutout mixins Office$MsoPictureEffectType {}
declare class Office$MsoPictureEffectType__msoEffectFilmGrain mixins Office$MsoPictureEffectType {}
declare class Office$MsoPictureEffectType__msoEffectGlass mixins Office$MsoPictureEffectType {}
declare class Office$MsoPictureEffectType__msoEffectGlowDiffused mixins Office$MsoPictureEffectType {}
declare class Office$MsoPictureEffectType__msoEffectGlowEdges mixins Office$MsoPictureEffectType {}
declare class Office$MsoPictureEffectType__msoEffectLightScreen mixins Office$MsoPictureEffectType {}
declare class Office$MsoPictureEffectType__msoEffectLineDrawing mixins Office$MsoPictureEffectType {}
declare class Office$MsoPictureEffectType__msoEffectMarker mixins Office$MsoPictureEffectType {}
declare class Office$MsoPictureEffectType__msoEffectMosiaicBubbles mixins Office$MsoPictureEffectType {}
declare class Office$MsoPictureEffectType__msoEffectNone mixins Office$MsoPictureEffectType {}
declare class Office$MsoPictureEffectType__msoEffectPaintBrush mixins Office$MsoPictureEffectType {}
declare class Office$MsoPictureEffectType__msoEffectPaintStrokes mixins Office$MsoPictureEffectType {}
declare class Office$MsoPictureEffectType__msoEffectPastelsSmooth mixins Office$MsoPictureEffectType {}
declare class Office$MsoPictureEffectType__msoEffectPencilGrayscale mixins Office$MsoPictureEffectType {}
declare class Office$MsoPictureEffectType__msoEffectPencilSketch mixins Office$MsoPictureEffectType {}
declare class Office$MsoPictureEffectType__msoEffectPhotocopy mixins Office$MsoPictureEffectType {}
declare class Office$MsoPictureEffectType__msoEffectPlasticWrap mixins Office$MsoPictureEffectType {}
declare class Office$MsoPictureEffectType__msoEffectSaturation mixins Office$MsoPictureEffectType {}
declare class Office$MsoPictureEffectType__msoEffectSharpenSoften mixins Office$MsoPictureEffectType {}
declare class Office$MsoPictureEffectType__msoEffectTexturizer mixins Office$MsoPictureEffectType {}
declare class Office$MsoPictureEffectType__msoEffectWatercolorSponge mixins Office$MsoPictureEffectType {}


declare  class Office$MsoPresetCamera {
  constructor(...args: empty): mixed;
static +msoCameraIsometricBottomDown: Class<Office$MsoPresetCamera__msoCameraIsometricBottomDown> & Office$MsoPresetCamera__msoCameraIsometricBottomDown & 23;// 23
static +msoCameraIsometricBottomUp: Class<Office$MsoPresetCamera__msoCameraIsometricBottomUp> & Office$MsoPresetCamera__msoCameraIsometricBottomUp & 22;// 22
static +msoCameraIsometricLeftDown: Class<Office$MsoPresetCamera__msoCameraIsometricLeftDown> & Office$MsoPresetCamera__msoCameraIsometricLeftDown & 25;// 25
static +msoCameraIsometricLeftUp: Class<Office$MsoPresetCamera__msoCameraIsometricLeftUp> & Office$MsoPresetCamera__msoCameraIsometricLeftUp & 24;// 24
static +msoCameraIsometricOffAxis1Left: Class<Office$MsoPresetCamera__msoCameraIsometricOffAxis1Left> & Office$MsoPresetCamera__msoCameraIsometricOffAxis1Left & 28;// 28
static +msoCameraIsometricOffAxis1Right: Class<Office$MsoPresetCamera__msoCameraIsometricOffAxis1Right> & Office$MsoPresetCamera__msoCameraIsometricOffAxis1Right & 29;// 29
static +msoCameraIsometricOffAxis1Top: Class<Office$MsoPresetCamera__msoCameraIsometricOffAxis1Top> & Office$MsoPresetCamera__msoCameraIsometricOffAxis1Top & 30;// 30
static +msoCameraIsometricOffAxis2Left: Class<Office$MsoPresetCamera__msoCameraIsometricOffAxis2Left> & Office$MsoPresetCamera__msoCameraIsometricOffAxis2Left & 31;// 31
static +msoCameraIsometricOffAxis2Right: Class<Office$MsoPresetCamera__msoCameraIsometricOffAxis2Right> & Office$MsoPresetCamera__msoCameraIsometricOffAxis2Right & 32;// 32
static +msoCameraIsometricOffAxis2Top: Class<Office$MsoPresetCamera__msoCameraIsometricOffAxis2Top> & Office$MsoPresetCamera__msoCameraIsometricOffAxis2Top & 33;// 33
static +msoCameraIsometricOffAxis3Bottom: Class<Office$MsoPresetCamera__msoCameraIsometricOffAxis3Bottom> & Office$MsoPresetCamera__msoCameraIsometricOffAxis3Bottom & 36;// 36
static +msoCameraIsometricOffAxis3Left: Class<Office$MsoPresetCamera__msoCameraIsometricOffAxis3Left> & Office$MsoPresetCamera__msoCameraIsometricOffAxis3Left & 34;// 34
static +msoCameraIsometricOffAxis3Right: Class<Office$MsoPresetCamera__msoCameraIsometricOffAxis3Right> & Office$MsoPresetCamera__msoCameraIsometricOffAxis3Right & 35;// 35
static +msoCameraIsometricOffAxis4Bottom: Class<Office$MsoPresetCamera__msoCameraIsometricOffAxis4Bottom> & Office$MsoPresetCamera__msoCameraIsometricOffAxis4Bottom & 39;// 39
static +msoCameraIsometricOffAxis4Left: Class<Office$MsoPresetCamera__msoCameraIsometricOffAxis4Left> & Office$MsoPresetCamera__msoCameraIsometricOffAxis4Left & 37;// 37
static +msoCameraIsometricOffAxis4Right: Class<Office$MsoPresetCamera__msoCameraIsometricOffAxis4Right> & Office$MsoPresetCamera__msoCameraIsometricOffAxis4Right & 38;// 38
static +msoCameraIsometricRightDown: Class<Office$MsoPresetCamera__msoCameraIsometricRightDown> & Office$MsoPresetCamera__msoCameraIsometricRightDown & 27;// 27
static +msoCameraIsometricRightUp: Class<Office$MsoPresetCamera__msoCameraIsometricRightUp> & Office$MsoPresetCamera__msoCameraIsometricRightUp & 26;// 26
static +msoCameraIsometricTopDown: Class<Office$MsoPresetCamera__msoCameraIsometricTopDown> & Office$MsoPresetCamera__msoCameraIsometricTopDown & 21;// 21
static +msoCameraIsometricTopUp: Class<Office$MsoPresetCamera__msoCameraIsometricTopUp> & Office$MsoPresetCamera__msoCameraIsometricTopUp & 20;// 20
static +msoCameraLegacyObliqueBottom: Class<Office$MsoPresetCamera__msoCameraLegacyObliqueBottom> & Office$MsoPresetCamera__msoCameraLegacyObliqueBottom & 8;// 8
static +msoCameraLegacyObliqueBottomLeft: Class<Office$MsoPresetCamera__msoCameraLegacyObliqueBottomLeft> & Office$MsoPresetCamera__msoCameraLegacyObliqueBottomLeft & 7;// 7
static +msoCameraLegacyObliqueBottomRight: Class<Office$MsoPresetCamera__msoCameraLegacyObliqueBottomRight> & Office$MsoPresetCamera__msoCameraLegacyObliqueBottomRight & 9;// 9
static +msoCameraLegacyObliqueFront: Class<Office$MsoPresetCamera__msoCameraLegacyObliqueFront> & Office$MsoPresetCamera__msoCameraLegacyObliqueFront & 5;// 5
static +msoCameraLegacyObliqueLeft: Class<Office$MsoPresetCamera__msoCameraLegacyObliqueLeft> & Office$MsoPresetCamera__msoCameraLegacyObliqueLeft & 4;// 4
static +msoCameraLegacyObliqueRight: Class<Office$MsoPresetCamera__msoCameraLegacyObliqueRight> & Office$MsoPresetCamera__msoCameraLegacyObliqueRight & 6;// 6
static +msoCameraLegacyObliqueTop: Class<Office$MsoPresetCamera__msoCameraLegacyObliqueTop> & Office$MsoPresetCamera__msoCameraLegacyObliqueTop & 2;// 2
static +msoCameraLegacyObliqueTopLeft: Class<Office$MsoPresetCamera__msoCameraLegacyObliqueTopLeft> & Office$MsoPresetCamera__msoCameraLegacyObliqueTopLeft & 1;// 1
static +msoCameraLegacyObliqueTopRight: Class<Office$MsoPresetCamera__msoCameraLegacyObliqueTopRight> & Office$MsoPresetCamera__msoCameraLegacyObliqueTopRight & 3;// 3
static +msoCameraLegacyPerspectiveBottom: Class<Office$MsoPresetCamera__msoCameraLegacyPerspectiveBottom> & Office$MsoPresetCamera__msoCameraLegacyPerspectiveBottom & 17;// 17
static +msoCameraLegacyPerspectiveBottomLeft: Class<Office$MsoPresetCamera__msoCameraLegacyPerspectiveBottomLeft> & Office$MsoPresetCamera__msoCameraLegacyPerspectiveBottomLeft & 16;// 16
static +msoCameraLegacyPerspectiveBottomRight: Class<Office$MsoPresetCamera__msoCameraLegacyPerspectiveBottomRight> & Office$MsoPresetCamera__msoCameraLegacyPerspectiveBottomRight & 18;// 18
static +msoCameraLegacyPerspectiveFront: Class<Office$MsoPresetCamera__msoCameraLegacyPerspectiveFront> & Office$MsoPresetCamera__msoCameraLegacyPerspectiveFront & 14;// 14
static +msoCameraLegacyPerspectiveLeft: Class<Office$MsoPresetCamera__msoCameraLegacyPerspectiveLeft> & Office$MsoPresetCamera__msoCameraLegacyPerspectiveLeft & 13;// 13
static +msoCameraLegacyPerspectiveRight: Class<Office$MsoPresetCamera__msoCameraLegacyPerspectiveRight> & Office$MsoPresetCamera__msoCameraLegacyPerspectiveRight & 15;// 15
static +msoCameraLegacyPerspectiveTop: Class<Office$MsoPresetCamera__msoCameraLegacyPerspectiveTop> & Office$MsoPresetCamera__msoCameraLegacyPerspectiveTop & 11;// 11
static +msoCameraLegacyPerspectiveTopLeft: Class<Office$MsoPresetCamera__msoCameraLegacyPerspectiveTopLeft> & Office$MsoPresetCamera__msoCameraLegacyPerspectiveTopLeft & 10;// 10
static +msoCameraLegacyPerspectiveTopRight: Class<Office$MsoPresetCamera__msoCameraLegacyPerspectiveTopRight> & Office$MsoPresetCamera__msoCameraLegacyPerspectiveTopRight & 12;// 12
static +msoCameraObliqueBottom: Class<Office$MsoPresetCamera__msoCameraObliqueBottom> & Office$MsoPresetCamera__msoCameraObliqueBottom & 46;// 46
static +msoCameraObliqueBottomLeft: Class<Office$MsoPresetCamera__msoCameraObliqueBottomLeft> & Office$MsoPresetCamera__msoCameraObliqueBottomLeft & 45;// 45
static +msoCameraObliqueBottomRight: Class<Office$MsoPresetCamera__msoCameraObliqueBottomRight> & Office$MsoPresetCamera__msoCameraObliqueBottomRight & 47;// 47
static +msoCameraObliqueLeft: Class<Office$MsoPresetCamera__msoCameraObliqueLeft> & Office$MsoPresetCamera__msoCameraObliqueLeft & 43;// 43
static +msoCameraObliqueRight: Class<Office$MsoPresetCamera__msoCameraObliqueRight> & Office$MsoPresetCamera__msoCameraObliqueRight & 44;// 44
static +msoCameraObliqueTop: Class<Office$MsoPresetCamera__msoCameraObliqueTop> & Office$MsoPresetCamera__msoCameraObliqueTop & 41;// 41
static +msoCameraObliqueTopLeft: Class<Office$MsoPresetCamera__msoCameraObliqueTopLeft> & Office$MsoPresetCamera__msoCameraObliqueTopLeft & 40;// 40
static +msoCameraObliqueTopRight: Class<Office$MsoPresetCamera__msoCameraObliqueTopRight> & Office$MsoPresetCamera__msoCameraObliqueTopRight & 42;// 42
static +msoCameraOrthographicFront: Class<Office$MsoPresetCamera__msoCameraOrthographicFront> & Office$MsoPresetCamera__msoCameraOrthographicFront & 19;// 19
static +msoCameraPerspectiveAbove: Class<Office$MsoPresetCamera__msoCameraPerspectiveAbove> & Office$MsoPresetCamera__msoCameraPerspectiveAbove & 51;// 51
static +msoCameraPerspectiveAboveLeftFacing: Class<Office$MsoPresetCamera__msoCameraPerspectiveAboveLeftFacing> & Office$MsoPresetCamera__msoCameraPerspectiveAboveLeftFacing & 53;// 53
static +msoCameraPerspectiveAboveRightFacing: Class<Office$MsoPresetCamera__msoCameraPerspectiveAboveRightFacing> & Office$MsoPresetCamera__msoCameraPerspectiveAboveRightFacing & 54;// 54
static +msoCameraPerspectiveBelow: Class<Office$MsoPresetCamera__msoCameraPerspectiveBelow> & Office$MsoPresetCamera__msoCameraPerspectiveBelow & 52;// 52
static +msoCameraPerspectiveContrastingLeftFacing: Class<Office$MsoPresetCamera__msoCameraPerspectiveContrastingLeftFacing> & Office$MsoPresetCamera__msoCameraPerspectiveContrastingLeftFacing & 55;// 55
static +msoCameraPerspectiveContrastingRightFacing: Class<Office$MsoPresetCamera__msoCameraPerspectiveContrastingRightFacing> & Office$MsoPresetCamera__msoCameraPerspectiveContrastingRightFacing & 56;// 56
static +msoCameraPerspectiveFront: Class<Office$MsoPresetCamera__msoCameraPerspectiveFront> & Office$MsoPresetCamera__msoCameraPerspectiveFront & 48;// 48
static +msoCameraPerspectiveHeroicExtremeLeftFacing: Class<Office$MsoPresetCamera__msoCameraPerspectiveHeroicExtremeLeftFacing> & Office$MsoPresetCamera__msoCameraPerspectiveHeroicExtremeLeftFacing & 59;// 59
static +msoCameraPerspectiveHeroicExtremeRightFacing: Class<Office$MsoPresetCamera__msoCameraPerspectiveHeroicExtremeRightFacing> & Office$MsoPresetCamera__msoCameraPerspectiveHeroicExtremeRightFacing & 60;// 60
static +msoCameraPerspectiveHeroicLeftFacing: Class<Office$MsoPresetCamera__msoCameraPerspectiveHeroicLeftFacing> & Office$MsoPresetCamera__msoCameraPerspectiveHeroicLeftFacing & 57;// 57
static +msoCameraPerspectiveHeroicRightFacing: Class<Office$MsoPresetCamera__msoCameraPerspectiveHeroicRightFacing> & Office$MsoPresetCamera__msoCameraPerspectiveHeroicRightFacing & 58;// 58
static +msoCameraPerspectiveLeft: Class<Office$MsoPresetCamera__msoCameraPerspectiveLeft> & Office$MsoPresetCamera__msoCameraPerspectiveLeft & 49;// 49
static +msoCameraPerspectiveRelaxed: Class<Office$MsoPresetCamera__msoCameraPerspectiveRelaxed> & Office$MsoPresetCamera__msoCameraPerspectiveRelaxed & 61;// 61
static +msoCameraPerspectiveRelaxedModerately: Class<Office$MsoPresetCamera__msoCameraPerspectiveRelaxedModerately> & Office$MsoPresetCamera__msoCameraPerspectiveRelaxedModerately & 62;// 62
static +msoCameraPerspectiveRight: Class<Office$MsoPresetCamera__msoCameraPerspectiveRight> & Office$MsoPresetCamera__msoCameraPerspectiveRight & 50;// 50
static +msoPresetCameraMixed: Class<Office$MsoPresetCamera__msoPresetCameraMixed> & Office$MsoPresetCamera__msoPresetCameraMixed & -2;// -2

}

declare class Office$MsoPresetCamera__msoCameraIsometricBottomDown mixins Office$MsoPresetCamera {}
declare class Office$MsoPresetCamera__msoCameraIsometricBottomUp mixins Office$MsoPresetCamera {}
declare class Office$MsoPresetCamera__msoCameraIsometricLeftDown mixins Office$MsoPresetCamera {}
declare class Office$MsoPresetCamera__msoCameraIsometricLeftUp mixins Office$MsoPresetCamera {}
declare class Office$MsoPresetCamera__msoCameraIsometricOffAxis1Left mixins Office$MsoPresetCamera {}
declare class Office$MsoPresetCamera__msoCameraIsometricOffAxis1Right mixins Office$MsoPresetCamera {}
declare class Office$MsoPresetCamera__msoCameraIsometricOffAxis1Top mixins Office$MsoPresetCamera {}
declare class Office$MsoPresetCamera__msoCameraIsometricOffAxis2Left mixins Office$MsoPresetCamera {}
declare class Office$MsoPresetCamera__msoCameraIsometricOffAxis2Right mixins Office$MsoPresetCamera {}
declare class Office$MsoPresetCamera__msoCameraIsometricOffAxis2Top mixins Office$MsoPresetCamera {}
declare class Office$MsoPresetCamera__msoCameraIsometricOffAxis3Bottom mixins Office$MsoPresetCamera {}
declare class Office$MsoPresetCamera__msoCameraIsometricOffAxis3Left mixins Office$MsoPresetCamera {}
declare class Office$MsoPresetCamera__msoCameraIsometricOffAxis3Right mixins Office$MsoPresetCamera {}
declare class Office$MsoPresetCamera__msoCameraIsometricOffAxis4Bottom mixins Office$MsoPresetCamera {}
declare class Office$MsoPresetCamera__msoCameraIsometricOffAxis4Left mixins Office$MsoPresetCamera {}
declare class Office$MsoPresetCamera__msoCameraIsometricOffAxis4Right mixins Office$MsoPresetCamera {}
declare class Office$MsoPresetCamera__msoCameraIsometricRightDown mixins Office$MsoPresetCamera {}
declare class Office$MsoPresetCamera__msoCameraIsometricRightUp mixins Office$MsoPresetCamera {}
declare class Office$MsoPresetCamera__msoCameraIsometricTopDown mixins Office$MsoPresetCamera {}
declare class Office$MsoPresetCamera__msoCameraIsometricTopUp mixins Office$MsoPresetCamera {}
declare class Office$MsoPresetCamera__msoCameraLegacyObliqueBottom mixins Office$MsoPresetCamera {}
declare class Office$MsoPresetCamera__msoCameraLegacyObliqueBottomLeft mixins Office$MsoPresetCamera {}
declare class Office$MsoPresetCamera__msoCameraLegacyObliqueBottomRight mixins Office$MsoPresetCamera {}
declare class Office$MsoPresetCamera__msoCameraLegacyObliqueFront mixins Office$MsoPresetCamera {}
declare class Office$MsoPresetCamera__msoCameraLegacyObliqueLeft mixins Office$MsoPresetCamera {}
declare class Office$MsoPresetCamera__msoCameraLegacyObliqueRight mixins Office$MsoPresetCamera {}
declare class Office$MsoPresetCamera__msoCameraLegacyObliqueTop mixins Office$MsoPresetCamera {}
declare class Office$MsoPresetCamera__msoCameraLegacyObliqueTopLeft mixins Office$MsoPresetCamera {}
declare class Office$MsoPresetCamera__msoCameraLegacyObliqueTopRight mixins Office$MsoPresetCamera {}
declare class Office$MsoPresetCamera__msoCameraLegacyPerspectiveBottom mixins Office$MsoPresetCamera {}
declare class Office$MsoPresetCamera__msoCameraLegacyPerspectiveBottomLeft mixins Office$MsoPresetCamera {}
declare class Office$MsoPresetCamera__msoCameraLegacyPerspectiveBottomRight mixins Office$MsoPresetCamera {}
declare class Office$MsoPresetCamera__msoCameraLegacyPerspectiveFront mixins Office$MsoPresetCamera {}
declare class Office$MsoPresetCamera__msoCameraLegacyPerspectiveLeft mixins Office$MsoPresetCamera {}
declare class Office$MsoPresetCamera__msoCameraLegacyPerspectiveRight mixins Office$MsoPresetCamera {}
declare class Office$MsoPresetCamera__msoCameraLegacyPerspectiveTop mixins Office$MsoPresetCamera {}
declare class Office$MsoPresetCamera__msoCameraLegacyPerspectiveTopLeft mixins Office$MsoPresetCamera {}
declare class Office$MsoPresetCamera__msoCameraLegacyPerspectiveTopRight mixins Office$MsoPresetCamera {}
declare class Office$MsoPresetCamera__msoCameraObliqueBottom mixins Office$MsoPresetCamera {}
declare class Office$MsoPresetCamera__msoCameraObliqueBottomLeft mixins Office$MsoPresetCamera {}
declare class Office$MsoPresetCamera__msoCameraObliqueBottomRight mixins Office$MsoPresetCamera {}
declare class Office$MsoPresetCamera__msoCameraObliqueLeft mixins Office$MsoPresetCamera {}
declare class Office$MsoPresetCamera__msoCameraObliqueRight mixins Office$MsoPresetCamera {}
declare class Office$MsoPresetCamera__msoCameraObliqueTop mixins Office$MsoPresetCamera {}
declare class Office$MsoPresetCamera__msoCameraObliqueTopLeft mixins Office$MsoPresetCamera {}
declare class Office$MsoPresetCamera__msoCameraObliqueTopRight mixins Office$MsoPresetCamera {}
declare class Office$MsoPresetCamera__msoCameraOrthographicFront mixins Office$MsoPresetCamera {}
declare class Office$MsoPresetCamera__msoCameraPerspectiveAbove mixins Office$MsoPresetCamera {}
declare class Office$MsoPresetCamera__msoCameraPerspectiveAboveLeftFacing mixins Office$MsoPresetCamera {}
declare class Office$MsoPresetCamera__msoCameraPerspectiveAboveRightFacing mixins Office$MsoPresetCamera {}
declare class Office$MsoPresetCamera__msoCameraPerspectiveBelow mixins Office$MsoPresetCamera {}
declare class Office$MsoPresetCamera__msoCameraPerspectiveContrastingLeftFacing mixins Office$MsoPresetCamera {}
declare class Office$MsoPresetCamera__msoCameraPerspectiveContrastingRightFacing mixins Office$MsoPresetCamera {}
declare class Office$MsoPresetCamera__msoCameraPerspectiveFront mixins Office$MsoPresetCamera {}
declare class Office$MsoPresetCamera__msoCameraPerspectiveHeroicExtremeLeftFacing mixins Office$MsoPresetCamera {}
declare class Office$MsoPresetCamera__msoCameraPerspectiveHeroicExtremeRightFacing mixins Office$MsoPresetCamera {}
declare class Office$MsoPresetCamera__msoCameraPerspectiveHeroicLeftFacing mixins Office$MsoPresetCamera {}
declare class Office$MsoPresetCamera__msoCameraPerspectiveHeroicRightFacing mixins Office$MsoPresetCamera {}
declare class Office$MsoPresetCamera__msoCameraPerspectiveLeft mixins Office$MsoPresetCamera {}
declare class Office$MsoPresetCamera__msoCameraPerspectiveRelaxed mixins Office$MsoPresetCamera {}
declare class Office$MsoPresetCamera__msoCameraPerspectiveRelaxedModerately mixins Office$MsoPresetCamera {}
declare class Office$MsoPresetCamera__msoCameraPerspectiveRight mixins Office$MsoPresetCamera {}
declare class Office$MsoPresetCamera__msoPresetCameraMixed mixins Office$MsoPresetCamera {}


declare  class Office$MsoPresetExtrusionDirection {
  constructor(...args: empty): mixed;
static +msoExtrusionBottom: Class<Office$MsoPresetExtrusionDirection__msoExtrusionBottom> & Office$MsoPresetExtrusionDirection__msoExtrusionBottom & 2;// 2
static +msoExtrusionBottomLeft: Class<Office$MsoPresetExtrusionDirection__msoExtrusionBottomLeft> & Office$MsoPresetExtrusionDirection__msoExtrusionBottomLeft & 3;// 3
static +msoExtrusionBottomRight: Class<Office$MsoPresetExtrusionDirection__msoExtrusionBottomRight> & Office$MsoPresetExtrusionDirection__msoExtrusionBottomRight & 1;// 1
static +msoExtrusionLeft: Class<Office$MsoPresetExtrusionDirection__msoExtrusionLeft> & Office$MsoPresetExtrusionDirection__msoExtrusionLeft & 6;// 6
static +msoExtrusionNone: Class<Office$MsoPresetExtrusionDirection__msoExtrusionNone> & Office$MsoPresetExtrusionDirection__msoExtrusionNone & 5;// 5
static +msoExtrusionRight: Class<Office$MsoPresetExtrusionDirection__msoExtrusionRight> & Office$MsoPresetExtrusionDirection__msoExtrusionRight & 4;// 4
static +msoExtrusionTop: Class<Office$MsoPresetExtrusionDirection__msoExtrusionTop> & Office$MsoPresetExtrusionDirection__msoExtrusionTop & 8;// 8
static +msoExtrusionTopLeft: Class<Office$MsoPresetExtrusionDirection__msoExtrusionTopLeft> & Office$MsoPresetExtrusionDirection__msoExtrusionTopLeft & 9;// 9
static +msoExtrusionTopRight: Class<Office$MsoPresetExtrusionDirection__msoExtrusionTopRight> & Office$MsoPresetExtrusionDirection__msoExtrusionTopRight & 7;// 7
static +msoPresetExtrusionDirectionMixed: Class<Office$MsoPresetExtrusionDirection__msoPresetExtrusionDirectionMixed> & Office$MsoPresetExtrusionDirection__msoPresetExtrusionDirectionMixed & -2;// -2

}

declare class Office$MsoPresetExtrusionDirection__msoExtrusionBottom mixins Office$MsoPresetExtrusionDirection {}
declare class Office$MsoPresetExtrusionDirection__msoExtrusionBottomLeft mixins Office$MsoPresetExtrusionDirection {}
declare class Office$MsoPresetExtrusionDirection__msoExtrusionBottomRight mixins Office$MsoPresetExtrusionDirection {}
declare class Office$MsoPresetExtrusionDirection__msoExtrusionLeft mixins Office$MsoPresetExtrusionDirection {}
declare class Office$MsoPresetExtrusionDirection__msoExtrusionNone mixins Office$MsoPresetExtrusionDirection {}
declare class Office$MsoPresetExtrusionDirection__msoExtrusionRight mixins Office$MsoPresetExtrusionDirection {}
declare class Office$MsoPresetExtrusionDirection__msoExtrusionTop mixins Office$MsoPresetExtrusionDirection {}
declare class Office$MsoPresetExtrusionDirection__msoExtrusionTopLeft mixins Office$MsoPresetExtrusionDirection {}
declare class Office$MsoPresetExtrusionDirection__msoExtrusionTopRight mixins Office$MsoPresetExtrusionDirection {}
declare class Office$MsoPresetExtrusionDirection__msoPresetExtrusionDirectionMixed mixins Office$MsoPresetExtrusionDirection {}


declare  class Office$MsoPresetGradientType {
  constructor(...args: empty): mixed;
static +msoGradientBrass: Class<Office$MsoPresetGradientType__msoGradientBrass> & Office$MsoPresetGradientType__msoGradientBrass & 20;// 20
static +msoGradientCalmWater: Class<Office$MsoPresetGradientType__msoGradientCalmWater> & Office$MsoPresetGradientType__msoGradientCalmWater & 8;// 8
static +msoGradientChrome: Class<Office$MsoPresetGradientType__msoGradientChrome> & Office$MsoPresetGradientType__msoGradientChrome & 21;// 21
static +msoGradientChromeII: Class<Office$MsoPresetGradientType__msoGradientChromeII> & Office$MsoPresetGradientType__msoGradientChromeII & 22;// 22
static +msoGradientDaybreak: Class<Office$MsoPresetGradientType__msoGradientDaybreak> & Office$MsoPresetGradientType__msoGradientDaybreak & 4;// 4
static +msoGradientDesert: Class<Office$MsoPresetGradientType__msoGradientDesert> & Office$MsoPresetGradientType__msoGradientDesert & 6;// 6
static +msoGradientEarlySunset: Class<Office$MsoPresetGradientType__msoGradientEarlySunset> & Office$MsoPresetGradientType__msoGradientEarlySunset & 1;// 1
static +msoGradientFire: Class<Office$MsoPresetGradientType__msoGradientFire> & Office$MsoPresetGradientType__msoGradientFire & 9;// 9
static +msoGradientFog: Class<Office$MsoPresetGradientType__msoGradientFog> & Office$MsoPresetGradientType__msoGradientFog & 10;// 10
static +msoGradientGold: Class<Office$MsoPresetGradientType__msoGradientGold> & Office$MsoPresetGradientType__msoGradientGold & 18;// 18
static +msoGradientGoldII: Class<Office$MsoPresetGradientType__msoGradientGoldII> & Office$MsoPresetGradientType__msoGradientGoldII & 19;// 19
static +msoGradientHorizon: Class<Office$MsoPresetGradientType__msoGradientHorizon> & Office$MsoPresetGradientType__msoGradientHorizon & 5;// 5
static +msoGradientLateSunset: Class<Office$MsoPresetGradientType__msoGradientLateSunset> & Office$MsoPresetGradientType__msoGradientLateSunset & 2;// 2
static +msoGradientMahogany: Class<Office$MsoPresetGradientType__msoGradientMahogany> & Office$MsoPresetGradientType__msoGradientMahogany & 15;// 15
static +msoGradientMoss: Class<Office$MsoPresetGradientType__msoGradientMoss> & Office$MsoPresetGradientType__msoGradientMoss & 11;// 11
static +msoGradientNightfall: Class<Office$MsoPresetGradientType__msoGradientNightfall> & Office$MsoPresetGradientType__msoGradientNightfall & 3;// 3
static +msoGradientOcean: Class<Office$MsoPresetGradientType__msoGradientOcean> & Office$MsoPresetGradientType__msoGradientOcean & 7;// 7
static +msoGradientParchment: Class<Office$MsoPresetGradientType__msoGradientParchment> & Office$MsoPresetGradientType__msoGradientParchment & 14;// 14
static +msoGradientPeacock: Class<Office$MsoPresetGradientType__msoGradientPeacock> & Office$MsoPresetGradientType__msoGradientPeacock & 12;// 12
static +msoGradientRainbow: Class<Office$MsoPresetGradientType__msoGradientRainbow> & Office$MsoPresetGradientType__msoGradientRainbow & 16;// 16
static +msoGradientRainbowII: Class<Office$MsoPresetGradientType__msoGradientRainbowII> & Office$MsoPresetGradientType__msoGradientRainbowII & 17;// 17
static +msoGradientSapphire: Class<Office$MsoPresetGradientType__msoGradientSapphire> & Office$MsoPresetGradientType__msoGradientSapphire & 24;// 24
static +msoGradientSilver: Class<Office$MsoPresetGradientType__msoGradientSilver> & Office$MsoPresetGradientType__msoGradientSilver & 23;// 23
static +msoGradientWheat: Class<Office$MsoPresetGradientType__msoGradientWheat> & Office$MsoPresetGradientType__msoGradientWheat & 13;// 13
static +msoPresetGradientMixed: Class<Office$MsoPresetGradientType__msoPresetGradientMixed> & Office$MsoPresetGradientType__msoPresetGradientMixed & -2;// -2

}

declare class Office$MsoPresetGradientType__msoGradientBrass mixins Office$MsoPresetGradientType {}
declare class Office$MsoPresetGradientType__msoGradientCalmWater mixins Office$MsoPresetGradientType {}
declare class Office$MsoPresetGradientType__msoGradientChrome mixins Office$MsoPresetGradientType {}
declare class Office$MsoPresetGradientType__msoGradientChromeII mixins Office$MsoPresetGradientType {}
declare class Office$MsoPresetGradientType__msoGradientDaybreak mixins Office$MsoPresetGradientType {}
declare class Office$MsoPresetGradientType__msoGradientDesert mixins Office$MsoPresetGradientType {}
declare class Office$MsoPresetGradientType__msoGradientEarlySunset mixins Office$MsoPresetGradientType {}
declare class Office$MsoPresetGradientType__msoGradientFire mixins Office$MsoPresetGradientType {}
declare class Office$MsoPresetGradientType__msoGradientFog mixins Office$MsoPresetGradientType {}
declare class Office$MsoPresetGradientType__msoGradientGold mixins Office$MsoPresetGradientType {}
declare class Office$MsoPresetGradientType__msoGradientGoldII mixins Office$MsoPresetGradientType {}
declare class Office$MsoPresetGradientType__msoGradientHorizon mixins Office$MsoPresetGradientType {}
declare class Office$MsoPresetGradientType__msoGradientLateSunset mixins Office$MsoPresetGradientType {}
declare class Office$MsoPresetGradientType__msoGradientMahogany mixins Office$MsoPresetGradientType {}
declare class Office$MsoPresetGradientType__msoGradientMoss mixins Office$MsoPresetGradientType {}
declare class Office$MsoPresetGradientType__msoGradientNightfall mixins Office$MsoPresetGradientType {}
declare class Office$MsoPresetGradientType__msoGradientOcean mixins Office$MsoPresetGradientType {}
declare class Office$MsoPresetGradientType__msoGradientParchment mixins Office$MsoPresetGradientType {}
declare class Office$MsoPresetGradientType__msoGradientPeacock mixins Office$MsoPresetGradientType {}
declare class Office$MsoPresetGradientType__msoGradientRainbow mixins Office$MsoPresetGradientType {}
declare class Office$MsoPresetGradientType__msoGradientRainbowII mixins Office$MsoPresetGradientType {}
declare class Office$MsoPresetGradientType__msoGradientSapphire mixins Office$MsoPresetGradientType {}
declare class Office$MsoPresetGradientType__msoGradientSilver mixins Office$MsoPresetGradientType {}
declare class Office$MsoPresetGradientType__msoGradientWheat mixins Office$MsoPresetGradientType {}
declare class Office$MsoPresetGradientType__msoPresetGradientMixed mixins Office$MsoPresetGradientType {}


declare  class Office$MsoPresetLightingDirection {
  constructor(...args: empty): mixed;
static +msoLightingBottom: Class<Office$MsoPresetLightingDirection__msoLightingBottom> & Office$MsoPresetLightingDirection__msoLightingBottom & 8;// 8
static +msoLightingBottomLeft: Class<Office$MsoPresetLightingDirection__msoLightingBottomLeft> & Office$MsoPresetLightingDirection__msoLightingBottomLeft & 7;// 7
static +msoLightingBottomRight: Class<Office$MsoPresetLightingDirection__msoLightingBottomRight> & Office$MsoPresetLightingDirection__msoLightingBottomRight & 9;// 9
static +msoLightingLeft: Class<Office$MsoPresetLightingDirection__msoLightingLeft> & Office$MsoPresetLightingDirection__msoLightingLeft & 4;// 4
static +msoLightingNone: Class<Office$MsoPresetLightingDirection__msoLightingNone> & Office$MsoPresetLightingDirection__msoLightingNone & 5;// 5
static +msoLightingRight: Class<Office$MsoPresetLightingDirection__msoLightingRight> & Office$MsoPresetLightingDirection__msoLightingRight & 6;// 6
static +msoLightingTop: Class<Office$MsoPresetLightingDirection__msoLightingTop> & Office$MsoPresetLightingDirection__msoLightingTop & 2;// 2
static +msoLightingTopLeft: Class<Office$MsoPresetLightingDirection__msoLightingTopLeft> & Office$MsoPresetLightingDirection__msoLightingTopLeft & 1;// 1
static +msoLightingTopRight: Class<Office$MsoPresetLightingDirection__msoLightingTopRight> & Office$MsoPresetLightingDirection__msoLightingTopRight & 3;// 3
static +msoPresetLightingDirectionMixed: Class<Office$MsoPresetLightingDirection__msoPresetLightingDirectionMixed> & Office$MsoPresetLightingDirection__msoPresetLightingDirectionMixed & -2;// -2

}

declare class Office$MsoPresetLightingDirection__msoLightingBottom mixins Office$MsoPresetLightingDirection {}
declare class Office$MsoPresetLightingDirection__msoLightingBottomLeft mixins Office$MsoPresetLightingDirection {}
declare class Office$MsoPresetLightingDirection__msoLightingBottomRight mixins Office$MsoPresetLightingDirection {}
declare class Office$MsoPresetLightingDirection__msoLightingLeft mixins Office$MsoPresetLightingDirection {}
declare class Office$MsoPresetLightingDirection__msoLightingNone mixins Office$MsoPresetLightingDirection {}
declare class Office$MsoPresetLightingDirection__msoLightingRight mixins Office$MsoPresetLightingDirection {}
declare class Office$MsoPresetLightingDirection__msoLightingTop mixins Office$MsoPresetLightingDirection {}
declare class Office$MsoPresetLightingDirection__msoLightingTopLeft mixins Office$MsoPresetLightingDirection {}
declare class Office$MsoPresetLightingDirection__msoLightingTopRight mixins Office$MsoPresetLightingDirection {}
declare class Office$MsoPresetLightingDirection__msoPresetLightingDirectionMixed mixins Office$MsoPresetLightingDirection {}


declare  class Office$MsoPresetLightingSoftness {
  constructor(...args: empty): mixed;
static +msoLightingBright: Class<Office$MsoPresetLightingSoftness__msoLightingBright> & Office$MsoPresetLightingSoftness__msoLightingBright & 3;// 3
static +msoLightingDim: Class<Office$MsoPresetLightingSoftness__msoLightingDim> & Office$MsoPresetLightingSoftness__msoLightingDim & 1;// 1
static +msoLightingNormal: Class<Office$MsoPresetLightingSoftness__msoLightingNormal> & Office$MsoPresetLightingSoftness__msoLightingNormal & 2;// 2
static +msoPresetLightingSoftnessMixed: Class<Office$MsoPresetLightingSoftness__msoPresetLightingSoftnessMixed> & Office$MsoPresetLightingSoftness__msoPresetLightingSoftnessMixed & -2;// -2

}

declare class Office$MsoPresetLightingSoftness__msoLightingBright mixins Office$MsoPresetLightingSoftness {}
declare class Office$MsoPresetLightingSoftness__msoLightingDim mixins Office$MsoPresetLightingSoftness {}
declare class Office$MsoPresetLightingSoftness__msoLightingNormal mixins Office$MsoPresetLightingSoftness {}
declare class Office$MsoPresetLightingSoftness__msoPresetLightingSoftnessMixed mixins Office$MsoPresetLightingSoftness {}


declare  class Office$MsoPresetMaterial {
  constructor(...args: empty): mixed;
static +msoMaterialClear: Class<Office$MsoPresetMaterial__msoMaterialClear> & Office$MsoPresetMaterial__msoMaterialClear & 13;// 13
static +msoMaterialDarkEdge: Class<Office$MsoPresetMaterial__msoMaterialDarkEdge> & Office$MsoPresetMaterial__msoMaterialDarkEdge & 11;// 11
static +msoMaterialFlat: Class<Office$MsoPresetMaterial__msoMaterialFlat> & Office$MsoPresetMaterial__msoMaterialFlat & 14;// 14
static +msoMaterialMatte: Class<Office$MsoPresetMaterial__msoMaterialMatte> & Office$MsoPresetMaterial__msoMaterialMatte & 1;// 1
static +msoMaterialMatte2: Class<Office$MsoPresetMaterial__msoMaterialMatte2> & Office$MsoPresetMaterial__msoMaterialMatte2 & 5;// 5
static +msoMaterialMetal: Class<Office$MsoPresetMaterial__msoMaterialMetal> & Office$MsoPresetMaterial__msoMaterialMetal & 3;// 3
static +msoMaterialMetal2: Class<Office$MsoPresetMaterial__msoMaterialMetal2> & Office$MsoPresetMaterial__msoMaterialMetal2 & 7;// 7
static +msoMaterialPlastic: Class<Office$MsoPresetMaterial__msoMaterialPlastic> & Office$MsoPresetMaterial__msoMaterialPlastic & 2;// 2
static +msoMaterialPlastic2: Class<Office$MsoPresetMaterial__msoMaterialPlastic2> & Office$MsoPresetMaterial__msoMaterialPlastic2 & 6;// 6
static +msoMaterialPowder: Class<Office$MsoPresetMaterial__msoMaterialPowder> & Office$MsoPresetMaterial__msoMaterialPowder & 10;// 10
static +msoMaterialSoftEdge: Class<Office$MsoPresetMaterial__msoMaterialSoftEdge> & Office$MsoPresetMaterial__msoMaterialSoftEdge & 12;// 12
static +msoMaterialSoftMetal: Class<Office$MsoPresetMaterial__msoMaterialSoftMetal> & Office$MsoPresetMaterial__msoMaterialSoftMetal & 15;// 15
static +msoMaterialTranslucentPowder: Class<Office$MsoPresetMaterial__msoMaterialTranslucentPowder> & Office$MsoPresetMaterial__msoMaterialTranslucentPowder & 9;// 9
static +msoMaterialWarmMatte: Class<Office$MsoPresetMaterial__msoMaterialWarmMatte> & Office$MsoPresetMaterial__msoMaterialWarmMatte & 8;// 8
static +msoMaterialWireFrame: Class<Office$MsoPresetMaterial__msoMaterialWireFrame> & Office$MsoPresetMaterial__msoMaterialWireFrame & 4;// 4
static +msoPresetMaterialMixed: Class<Office$MsoPresetMaterial__msoPresetMaterialMixed> & Office$MsoPresetMaterial__msoPresetMaterialMixed & -2;// -2

}

declare class Office$MsoPresetMaterial__msoMaterialClear mixins Office$MsoPresetMaterial {}
declare class Office$MsoPresetMaterial__msoMaterialDarkEdge mixins Office$MsoPresetMaterial {}
declare class Office$MsoPresetMaterial__msoMaterialFlat mixins Office$MsoPresetMaterial {}
declare class Office$MsoPresetMaterial__msoMaterialMatte mixins Office$MsoPresetMaterial {}
declare class Office$MsoPresetMaterial__msoMaterialMatte2 mixins Office$MsoPresetMaterial {}
declare class Office$MsoPresetMaterial__msoMaterialMetal mixins Office$MsoPresetMaterial {}
declare class Office$MsoPresetMaterial__msoMaterialMetal2 mixins Office$MsoPresetMaterial {}
declare class Office$MsoPresetMaterial__msoMaterialPlastic mixins Office$MsoPresetMaterial {}
declare class Office$MsoPresetMaterial__msoMaterialPlastic2 mixins Office$MsoPresetMaterial {}
declare class Office$MsoPresetMaterial__msoMaterialPowder mixins Office$MsoPresetMaterial {}
declare class Office$MsoPresetMaterial__msoMaterialSoftEdge mixins Office$MsoPresetMaterial {}
declare class Office$MsoPresetMaterial__msoMaterialSoftMetal mixins Office$MsoPresetMaterial {}
declare class Office$MsoPresetMaterial__msoMaterialTranslucentPowder mixins Office$MsoPresetMaterial {}
declare class Office$MsoPresetMaterial__msoMaterialWarmMatte mixins Office$MsoPresetMaterial {}
declare class Office$MsoPresetMaterial__msoMaterialWireFrame mixins Office$MsoPresetMaterial {}
declare class Office$MsoPresetMaterial__msoPresetMaterialMixed mixins Office$MsoPresetMaterial {}


declare  class Office$MsoPresetTextEffect {
  constructor(...args: empty): mixed;
static +msoTextEffect1: Class<Office$MsoPresetTextEffect__msoTextEffect1> & Office$MsoPresetTextEffect__msoTextEffect1 & 0;// 0
static +msoTextEffect10: Class<Office$MsoPresetTextEffect__msoTextEffect10> & Office$MsoPresetTextEffect__msoTextEffect10 & 9;// 9
static +msoTextEffect11: Class<Office$MsoPresetTextEffect__msoTextEffect11> & Office$MsoPresetTextEffect__msoTextEffect11 & 10;// 10
static +msoTextEffect12: Class<Office$MsoPresetTextEffect__msoTextEffect12> & Office$MsoPresetTextEffect__msoTextEffect12 & 11;// 11
static +msoTextEffect13: Class<Office$MsoPresetTextEffect__msoTextEffect13> & Office$MsoPresetTextEffect__msoTextEffect13 & 12;// 12
static +msoTextEffect14: Class<Office$MsoPresetTextEffect__msoTextEffect14> & Office$MsoPresetTextEffect__msoTextEffect14 & 13;// 13
static +msoTextEffect15: Class<Office$MsoPresetTextEffect__msoTextEffect15> & Office$MsoPresetTextEffect__msoTextEffect15 & 14;// 14
static +msoTextEffect16: Class<Office$MsoPresetTextEffect__msoTextEffect16> & Office$MsoPresetTextEffect__msoTextEffect16 & 15;// 15
static +msoTextEffect17: Class<Office$MsoPresetTextEffect__msoTextEffect17> & Office$MsoPresetTextEffect__msoTextEffect17 & 16;// 16
static +msoTextEffect18: Class<Office$MsoPresetTextEffect__msoTextEffect18> & Office$MsoPresetTextEffect__msoTextEffect18 & 17;// 17
static +msoTextEffect19: Class<Office$MsoPresetTextEffect__msoTextEffect19> & Office$MsoPresetTextEffect__msoTextEffect19 & 18;// 18
static +msoTextEffect2: Class<Office$MsoPresetTextEffect__msoTextEffect2> & Office$MsoPresetTextEffect__msoTextEffect2 & 1;// 1
static +msoTextEffect20: Class<Office$MsoPresetTextEffect__msoTextEffect20> & Office$MsoPresetTextEffect__msoTextEffect20 & 19;// 19
static +msoTextEffect21: Class<Office$MsoPresetTextEffect__msoTextEffect21> & Office$MsoPresetTextEffect__msoTextEffect21 & 20;// 20
static +msoTextEffect22: Class<Office$MsoPresetTextEffect__msoTextEffect22> & Office$MsoPresetTextEffect__msoTextEffect22 & 21;// 21
static +msoTextEffect23: Class<Office$MsoPresetTextEffect__msoTextEffect23> & Office$MsoPresetTextEffect__msoTextEffect23 & 22;// 22
static +msoTextEffect24: Class<Office$MsoPresetTextEffect__msoTextEffect24> & Office$MsoPresetTextEffect__msoTextEffect24 & 23;// 23
static +msoTextEffect25: Class<Office$MsoPresetTextEffect__msoTextEffect25> & Office$MsoPresetTextEffect__msoTextEffect25 & 24;// 24
static +msoTextEffect26: Class<Office$MsoPresetTextEffect__msoTextEffect26> & Office$MsoPresetTextEffect__msoTextEffect26 & 25;// 25
static +msoTextEffect27: Class<Office$MsoPresetTextEffect__msoTextEffect27> & Office$MsoPresetTextEffect__msoTextEffect27 & 26;// 26
static +msoTextEffect28: Class<Office$MsoPresetTextEffect__msoTextEffect28> & Office$MsoPresetTextEffect__msoTextEffect28 & 27;// 27
static +msoTextEffect29: Class<Office$MsoPresetTextEffect__msoTextEffect29> & Office$MsoPresetTextEffect__msoTextEffect29 & 28;// 28
static +msoTextEffect3: Class<Office$MsoPresetTextEffect__msoTextEffect3> & Office$MsoPresetTextEffect__msoTextEffect3 & 2;// 2
static +msoTextEffect30: Class<Office$MsoPresetTextEffect__msoTextEffect30> & Office$MsoPresetTextEffect__msoTextEffect30 & 29;// 29
static +msoTextEffect31: Class<Office$MsoPresetTextEffect__msoTextEffect31> & Office$MsoPresetTextEffect__msoTextEffect31 & 30;// 30
static +msoTextEffect32: Class<Office$MsoPresetTextEffect__msoTextEffect32> & Office$MsoPresetTextEffect__msoTextEffect32 & 31;// 31
static +msoTextEffect33: Class<Office$MsoPresetTextEffect__msoTextEffect33> & Office$MsoPresetTextEffect__msoTextEffect33 & 32;// 32
static +msoTextEffect34: Class<Office$MsoPresetTextEffect__msoTextEffect34> & Office$MsoPresetTextEffect__msoTextEffect34 & 33;// 33
static +msoTextEffect35: Class<Office$MsoPresetTextEffect__msoTextEffect35> & Office$MsoPresetTextEffect__msoTextEffect35 & 34;// 34
static +msoTextEffect36: Class<Office$MsoPresetTextEffect__msoTextEffect36> & Office$MsoPresetTextEffect__msoTextEffect36 & 35;// 35
static +msoTextEffect37: Class<Office$MsoPresetTextEffect__msoTextEffect37> & Office$MsoPresetTextEffect__msoTextEffect37 & 36;// 36
static +msoTextEffect38: Class<Office$MsoPresetTextEffect__msoTextEffect38> & Office$MsoPresetTextEffect__msoTextEffect38 & 37;// 37
static +msoTextEffect39: Class<Office$MsoPresetTextEffect__msoTextEffect39> & Office$MsoPresetTextEffect__msoTextEffect39 & 38;// 38
static +msoTextEffect4: Class<Office$MsoPresetTextEffect__msoTextEffect4> & Office$MsoPresetTextEffect__msoTextEffect4 & 3;// 3
static +msoTextEffect40: Class<Office$MsoPresetTextEffect__msoTextEffect40> & Office$MsoPresetTextEffect__msoTextEffect40 & 39;// 39
static +msoTextEffect41: Class<Office$MsoPresetTextEffect__msoTextEffect41> & Office$MsoPresetTextEffect__msoTextEffect41 & 40;// 40
static +msoTextEffect42: Class<Office$MsoPresetTextEffect__msoTextEffect42> & Office$MsoPresetTextEffect__msoTextEffect42 & 41;// 41
static +msoTextEffect43: Class<Office$MsoPresetTextEffect__msoTextEffect43> & Office$MsoPresetTextEffect__msoTextEffect43 & 42;// 42
static +msoTextEffect44: Class<Office$MsoPresetTextEffect__msoTextEffect44> & Office$MsoPresetTextEffect__msoTextEffect44 & 43;// 43
static +msoTextEffect45: Class<Office$MsoPresetTextEffect__msoTextEffect45> & Office$MsoPresetTextEffect__msoTextEffect45 & 44;// 44
static +msoTextEffect46: Class<Office$MsoPresetTextEffect__msoTextEffect46> & Office$MsoPresetTextEffect__msoTextEffect46 & 45;// 45
static +msoTextEffect47: Class<Office$MsoPresetTextEffect__msoTextEffect47> & Office$MsoPresetTextEffect__msoTextEffect47 & 46;// 46
static +msoTextEffect48: Class<Office$MsoPresetTextEffect__msoTextEffect48> & Office$MsoPresetTextEffect__msoTextEffect48 & 47;// 47
static +msoTextEffect49: Class<Office$MsoPresetTextEffect__msoTextEffect49> & Office$MsoPresetTextEffect__msoTextEffect49 & 48;// 48
static +msoTextEffect5: Class<Office$MsoPresetTextEffect__msoTextEffect5> & Office$MsoPresetTextEffect__msoTextEffect5 & 4;// 4
static +msoTextEffect50: Class<Office$MsoPresetTextEffect__msoTextEffect50> & Office$MsoPresetTextEffect__msoTextEffect50 & 49;// 49
static +msoTextEffect6: Class<Office$MsoPresetTextEffect__msoTextEffect6> & Office$MsoPresetTextEffect__msoTextEffect6 & 5;// 5
static +msoTextEffect7: Class<Office$MsoPresetTextEffect__msoTextEffect7> & Office$MsoPresetTextEffect__msoTextEffect7 & 6;// 6
static +msoTextEffect8: Class<Office$MsoPresetTextEffect__msoTextEffect8> & Office$MsoPresetTextEffect__msoTextEffect8 & 7;// 7
static +msoTextEffect9: Class<Office$MsoPresetTextEffect__msoTextEffect9> & Office$MsoPresetTextEffect__msoTextEffect9 & 8;// 8
static +msoTextEffectMixed: Class<Office$MsoPresetTextEffect__msoTextEffectMixed> & Office$MsoPresetTextEffect__msoTextEffectMixed & -2;// -2

}

declare class Office$MsoPresetTextEffect__msoTextEffect1 mixins Office$MsoPresetTextEffect {}
declare class Office$MsoPresetTextEffect__msoTextEffect10 mixins Office$MsoPresetTextEffect {}
declare class Office$MsoPresetTextEffect__msoTextEffect11 mixins Office$MsoPresetTextEffect {}
declare class Office$MsoPresetTextEffect__msoTextEffect12 mixins Office$MsoPresetTextEffect {}
declare class Office$MsoPresetTextEffect__msoTextEffect13 mixins Office$MsoPresetTextEffect {}
declare class Office$MsoPresetTextEffect__msoTextEffect14 mixins Office$MsoPresetTextEffect {}
declare class Office$MsoPresetTextEffect__msoTextEffect15 mixins Office$MsoPresetTextEffect {}
declare class Office$MsoPresetTextEffect__msoTextEffect16 mixins Office$MsoPresetTextEffect {}
declare class Office$MsoPresetTextEffect__msoTextEffect17 mixins Office$MsoPresetTextEffect {}
declare class Office$MsoPresetTextEffect__msoTextEffect18 mixins Office$MsoPresetTextEffect {}
declare class Office$MsoPresetTextEffect__msoTextEffect19 mixins Office$MsoPresetTextEffect {}
declare class Office$MsoPresetTextEffect__msoTextEffect2 mixins Office$MsoPresetTextEffect {}
declare class Office$MsoPresetTextEffect__msoTextEffect20 mixins Office$MsoPresetTextEffect {}
declare class Office$MsoPresetTextEffect__msoTextEffect21 mixins Office$MsoPresetTextEffect {}
declare class Office$MsoPresetTextEffect__msoTextEffect22 mixins Office$MsoPresetTextEffect {}
declare class Office$MsoPresetTextEffect__msoTextEffect23 mixins Office$MsoPresetTextEffect {}
declare class Office$MsoPresetTextEffect__msoTextEffect24 mixins Office$MsoPresetTextEffect {}
declare class Office$MsoPresetTextEffect__msoTextEffect25 mixins Office$MsoPresetTextEffect {}
declare class Office$MsoPresetTextEffect__msoTextEffect26 mixins Office$MsoPresetTextEffect {}
declare class Office$MsoPresetTextEffect__msoTextEffect27 mixins Office$MsoPresetTextEffect {}
declare class Office$MsoPresetTextEffect__msoTextEffect28 mixins Office$MsoPresetTextEffect {}
declare class Office$MsoPresetTextEffect__msoTextEffect29 mixins Office$MsoPresetTextEffect {}
declare class Office$MsoPresetTextEffect__msoTextEffect3 mixins Office$MsoPresetTextEffect {}
declare class Office$MsoPresetTextEffect__msoTextEffect30 mixins Office$MsoPresetTextEffect {}
declare class Office$MsoPresetTextEffect__msoTextEffect31 mixins Office$MsoPresetTextEffect {}
declare class Office$MsoPresetTextEffect__msoTextEffect32 mixins Office$MsoPresetTextEffect {}
declare class Office$MsoPresetTextEffect__msoTextEffect33 mixins Office$MsoPresetTextEffect {}
declare class Office$MsoPresetTextEffect__msoTextEffect34 mixins Office$MsoPresetTextEffect {}
declare class Office$MsoPresetTextEffect__msoTextEffect35 mixins Office$MsoPresetTextEffect {}
declare class Office$MsoPresetTextEffect__msoTextEffect36 mixins Office$MsoPresetTextEffect {}
declare class Office$MsoPresetTextEffect__msoTextEffect37 mixins Office$MsoPresetTextEffect {}
declare class Office$MsoPresetTextEffect__msoTextEffect38 mixins Office$MsoPresetTextEffect {}
declare class Office$MsoPresetTextEffect__msoTextEffect39 mixins Office$MsoPresetTextEffect {}
declare class Office$MsoPresetTextEffect__msoTextEffect4 mixins Office$MsoPresetTextEffect {}
declare class Office$MsoPresetTextEffect__msoTextEffect40 mixins Office$MsoPresetTextEffect {}
declare class Office$MsoPresetTextEffect__msoTextEffect41 mixins Office$MsoPresetTextEffect {}
declare class Office$MsoPresetTextEffect__msoTextEffect42 mixins Office$MsoPresetTextEffect {}
declare class Office$MsoPresetTextEffect__msoTextEffect43 mixins Office$MsoPresetTextEffect {}
declare class Office$MsoPresetTextEffect__msoTextEffect44 mixins Office$MsoPresetTextEffect {}
declare class Office$MsoPresetTextEffect__msoTextEffect45 mixins Office$MsoPresetTextEffect {}
declare class Office$MsoPresetTextEffect__msoTextEffect46 mixins Office$MsoPresetTextEffect {}
declare class Office$MsoPresetTextEffect__msoTextEffect47 mixins Office$MsoPresetTextEffect {}
declare class Office$MsoPresetTextEffect__msoTextEffect48 mixins Office$MsoPresetTextEffect {}
declare class Office$MsoPresetTextEffect__msoTextEffect49 mixins Office$MsoPresetTextEffect {}
declare class Office$MsoPresetTextEffect__msoTextEffect5 mixins Office$MsoPresetTextEffect {}
declare class Office$MsoPresetTextEffect__msoTextEffect50 mixins Office$MsoPresetTextEffect {}
declare class Office$MsoPresetTextEffect__msoTextEffect6 mixins Office$MsoPresetTextEffect {}
declare class Office$MsoPresetTextEffect__msoTextEffect7 mixins Office$MsoPresetTextEffect {}
declare class Office$MsoPresetTextEffect__msoTextEffect8 mixins Office$MsoPresetTextEffect {}
declare class Office$MsoPresetTextEffect__msoTextEffect9 mixins Office$MsoPresetTextEffect {}
declare class Office$MsoPresetTextEffect__msoTextEffectMixed mixins Office$MsoPresetTextEffect {}


declare  class Office$MsoPresetTextEffectShape {
  constructor(...args: empty): mixed;
static +msoTextEffectShapeArchDownCurve: Class<Office$MsoPresetTextEffectShape__msoTextEffectShapeArchDownCurve> & Office$MsoPresetTextEffectShape__msoTextEffectShapeArchDownCurve & 10;// 10
static +msoTextEffectShapeArchDownPour: Class<Office$MsoPresetTextEffectShape__msoTextEffectShapeArchDownPour> & Office$MsoPresetTextEffectShape__msoTextEffectShapeArchDownPour & 14;// 14
static +msoTextEffectShapeArchUpCurve: Class<Office$MsoPresetTextEffectShape__msoTextEffectShapeArchUpCurve> & Office$MsoPresetTextEffectShape__msoTextEffectShapeArchUpCurve & 9;// 9
static +msoTextEffectShapeArchUpPour: Class<Office$MsoPresetTextEffectShape__msoTextEffectShapeArchUpPour> & Office$MsoPresetTextEffectShape__msoTextEffectShapeArchUpPour & 13;// 13
static +msoTextEffectShapeButtonCurve: Class<Office$MsoPresetTextEffectShape__msoTextEffectShapeButtonCurve> & Office$MsoPresetTextEffectShape__msoTextEffectShapeButtonCurve & 12;// 12
static +msoTextEffectShapeButtonPour: Class<Office$MsoPresetTextEffectShape__msoTextEffectShapeButtonPour> & Office$MsoPresetTextEffectShape__msoTextEffectShapeButtonPour & 16;// 16
static +msoTextEffectShapeCanDown: Class<Office$MsoPresetTextEffectShape__msoTextEffectShapeCanDown> & Office$MsoPresetTextEffectShape__msoTextEffectShapeCanDown & 20;// 20
static +msoTextEffectShapeCanUp: Class<Office$MsoPresetTextEffectShape__msoTextEffectShapeCanUp> & Office$MsoPresetTextEffectShape__msoTextEffectShapeCanUp & 19;// 19
static +msoTextEffectShapeCascadeDown: Class<Office$MsoPresetTextEffectShape__msoTextEffectShapeCascadeDown> & Office$MsoPresetTextEffectShape__msoTextEffectShapeCascadeDown & 40;// 40
static +msoTextEffectShapeCascadeUp: Class<Office$MsoPresetTextEffectShape__msoTextEffectShapeCascadeUp> & Office$MsoPresetTextEffectShape__msoTextEffectShapeCascadeUp & 39;// 39
static +msoTextEffectShapeChevronDown: Class<Office$MsoPresetTextEffectShape__msoTextEffectShapeChevronDown> & Office$MsoPresetTextEffectShape__msoTextEffectShapeChevronDown & 6;// 6
static +msoTextEffectShapeChevronUp: Class<Office$MsoPresetTextEffectShape__msoTextEffectShapeChevronUp> & Office$MsoPresetTextEffectShape__msoTextEffectShapeChevronUp & 5;// 5
static +msoTextEffectShapeCircleCurve: Class<Office$MsoPresetTextEffectShape__msoTextEffectShapeCircleCurve> & Office$MsoPresetTextEffectShape__msoTextEffectShapeCircleCurve & 11;// 11
static +msoTextEffectShapeCirclePour: Class<Office$MsoPresetTextEffectShape__msoTextEffectShapeCirclePour> & Office$MsoPresetTextEffectShape__msoTextEffectShapeCirclePour & 15;// 15
static +msoTextEffectShapeCurveDown: Class<Office$MsoPresetTextEffectShape__msoTextEffectShapeCurveDown> & Office$MsoPresetTextEffectShape__msoTextEffectShapeCurveDown & 18;// 18
static +msoTextEffectShapeCurveUp: Class<Office$MsoPresetTextEffectShape__msoTextEffectShapeCurveUp> & Office$MsoPresetTextEffectShape__msoTextEffectShapeCurveUp & 17;// 17
static +msoTextEffectShapeDeflate: Class<Office$MsoPresetTextEffectShape__msoTextEffectShapeDeflate> & Office$MsoPresetTextEffectShape__msoTextEffectShapeDeflate & 26;// 26
static +msoTextEffectShapeDeflateBottom: Class<Office$MsoPresetTextEffectShape__msoTextEffectShapeDeflateBottom> & Office$MsoPresetTextEffectShape__msoTextEffectShapeDeflateBottom & 28;// 28
static +msoTextEffectShapeDeflateInflate: Class<Office$MsoPresetTextEffectShape__msoTextEffectShapeDeflateInflate> & Office$MsoPresetTextEffectShape__msoTextEffectShapeDeflateInflate & 31;// 31
static +msoTextEffectShapeDeflateInflateDeflate: Class<Office$MsoPresetTextEffectShape__msoTextEffectShapeDeflateInflateDeflate> & Office$MsoPresetTextEffectShape__msoTextEffectShapeDeflateInflateDeflate & 32;// 32
static +msoTextEffectShapeDeflateTop: Class<Office$MsoPresetTextEffectShape__msoTextEffectShapeDeflateTop> & Office$MsoPresetTextEffectShape__msoTextEffectShapeDeflateTop & 30;// 30
static +msoTextEffectShapeDoubleWave1: Class<Office$MsoPresetTextEffectShape__msoTextEffectShapeDoubleWave1> & Office$MsoPresetTextEffectShape__msoTextEffectShapeDoubleWave1 & 23;// 23
static +msoTextEffectShapeDoubleWave2: Class<Office$MsoPresetTextEffectShape__msoTextEffectShapeDoubleWave2> & Office$MsoPresetTextEffectShape__msoTextEffectShapeDoubleWave2 & 24;// 24
static +msoTextEffectShapeFadeDown: Class<Office$MsoPresetTextEffectShape__msoTextEffectShapeFadeDown> & Office$MsoPresetTextEffectShape__msoTextEffectShapeFadeDown & 36;// 36
static +msoTextEffectShapeFadeLeft: Class<Office$MsoPresetTextEffectShape__msoTextEffectShapeFadeLeft> & Office$MsoPresetTextEffectShape__msoTextEffectShapeFadeLeft & 34;// 34
static +msoTextEffectShapeFadeRight: Class<Office$MsoPresetTextEffectShape__msoTextEffectShapeFadeRight> & Office$MsoPresetTextEffectShape__msoTextEffectShapeFadeRight & 33;// 33
static +msoTextEffectShapeFadeUp: Class<Office$MsoPresetTextEffectShape__msoTextEffectShapeFadeUp> & Office$MsoPresetTextEffectShape__msoTextEffectShapeFadeUp & 35;// 35
static +msoTextEffectShapeInflate: Class<Office$MsoPresetTextEffectShape__msoTextEffectShapeInflate> & Office$MsoPresetTextEffectShape__msoTextEffectShapeInflate & 25;// 25
static +msoTextEffectShapeInflateBottom: Class<Office$MsoPresetTextEffectShape__msoTextEffectShapeInflateBottom> & Office$MsoPresetTextEffectShape__msoTextEffectShapeInflateBottom & 27;// 27
static +msoTextEffectShapeInflateTop: Class<Office$MsoPresetTextEffectShape__msoTextEffectShapeInflateTop> & Office$MsoPresetTextEffectShape__msoTextEffectShapeInflateTop & 29;// 29
static +msoTextEffectShapeMixed: Class<Office$MsoPresetTextEffectShape__msoTextEffectShapeMixed> & Office$MsoPresetTextEffectShape__msoTextEffectShapeMixed & -2;// -2
static +msoTextEffectShapePlainText: Class<Office$MsoPresetTextEffectShape__msoTextEffectShapePlainText> & Office$MsoPresetTextEffectShape__msoTextEffectShapePlainText & 1;// 1
static +msoTextEffectShapeRingInside: Class<Office$MsoPresetTextEffectShape__msoTextEffectShapeRingInside> & Office$MsoPresetTextEffectShape__msoTextEffectShapeRingInside & 7;// 7
static +msoTextEffectShapeRingOutside: Class<Office$MsoPresetTextEffectShape__msoTextEffectShapeRingOutside> & Office$MsoPresetTextEffectShape__msoTextEffectShapeRingOutside & 8;// 8
static +msoTextEffectShapeSlantDown: Class<Office$MsoPresetTextEffectShape__msoTextEffectShapeSlantDown> & Office$MsoPresetTextEffectShape__msoTextEffectShapeSlantDown & 38;// 38
static +msoTextEffectShapeSlantUp: Class<Office$MsoPresetTextEffectShape__msoTextEffectShapeSlantUp> & Office$MsoPresetTextEffectShape__msoTextEffectShapeSlantUp & 37;// 37
static +msoTextEffectShapeStop: Class<Office$MsoPresetTextEffectShape__msoTextEffectShapeStop> & Office$MsoPresetTextEffectShape__msoTextEffectShapeStop & 2;// 2
static +msoTextEffectShapeTriangleDown: Class<Office$MsoPresetTextEffectShape__msoTextEffectShapeTriangleDown> & Office$MsoPresetTextEffectShape__msoTextEffectShapeTriangleDown & 4;// 4
static +msoTextEffectShapeTriangleUp: Class<Office$MsoPresetTextEffectShape__msoTextEffectShapeTriangleUp> & Office$MsoPresetTextEffectShape__msoTextEffectShapeTriangleUp & 3;// 3
static +msoTextEffectShapeWave1: Class<Office$MsoPresetTextEffectShape__msoTextEffectShapeWave1> & Office$MsoPresetTextEffectShape__msoTextEffectShapeWave1 & 21;// 21
static +msoTextEffectShapeWave2: Class<Office$MsoPresetTextEffectShape__msoTextEffectShapeWave2> & Office$MsoPresetTextEffectShape__msoTextEffectShapeWave2 & 22;// 22

}

declare class Office$MsoPresetTextEffectShape__msoTextEffectShapeArchDownCurve mixins Office$MsoPresetTextEffectShape {}
declare class Office$MsoPresetTextEffectShape__msoTextEffectShapeArchDownPour mixins Office$MsoPresetTextEffectShape {}
declare class Office$MsoPresetTextEffectShape__msoTextEffectShapeArchUpCurve mixins Office$MsoPresetTextEffectShape {}
declare class Office$MsoPresetTextEffectShape__msoTextEffectShapeArchUpPour mixins Office$MsoPresetTextEffectShape {}
declare class Office$MsoPresetTextEffectShape__msoTextEffectShapeButtonCurve mixins Office$MsoPresetTextEffectShape {}
declare class Office$MsoPresetTextEffectShape__msoTextEffectShapeButtonPour mixins Office$MsoPresetTextEffectShape {}
declare class Office$MsoPresetTextEffectShape__msoTextEffectShapeCanDown mixins Office$MsoPresetTextEffectShape {}
declare class Office$MsoPresetTextEffectShape__msoTextEffectShapeCanUp mixins Office$MsoPresetTextEffectShape {}
declare class Office$MsoPresetTextEffectShape__msoTextEffectShapeCascadeDown mixins Office$MsoPresetTextEffectShape {}
declare class Office$MsoPresetTextEffectShape__msoTextEffectShapeCascadeUp mixins Office$MsoPresetTextEffectShape {}
declare class Office$MsoPresetTextEffectShape__msoTextEffectShapeChevronDown mixins Office$MsoPresetTextEffectShape {}
declare class Office$MsoPresetTextEffectShape__msoTextEffectShapeChevronUp mixins Office$MsoPresetTextEffectShape {}
declare class Office$MsoPresetTextEffectShape__msoTextEffectShapeCircleCurve mixins Office$MsoPresetTextEffectShape {}
declare class Office$MsoPresetTextEffectShape__msoTextEffectShapeCirclePour mixins Office$MsoPresetTextEffectShape {}
declare class Office$MsoPresetTextEffectShape__msoTextEffectShapeCurveDown mixins Office$MsoPresetTextEffectShape {}
declare class Office$MsoPresetTextEffectShape__msoTextEffectShapeCurveUp mixins Office$MsoPresetTextEffectShape {}
declare class Office$MsoPresetTextEffectShape__msoTextEffectShapeDeflate mixins Office$MsoPresetTextEffectShape {}
declare class Office$MsoPresetTextEffectShape__msoTextEffectShapeDeflateBottom mixins Office$MsoPresetTextEffectShape {}
declare class Office$MsoPresetTextEffectShape__msoTextEffectShapeDeflateInflate mixins Office$MsoPresetTextEffectShape {}
declare class Office$MsoPresetTextEffectShape__msoTextEffectShapeDeflateInflateDeflate mixins Office$MsoPresetTextEffectShape {}
declare class Office$MsoPresetTextEffectShape__msoTextEffectShapeDeflateTop mixins Office$MsoPresetTextEffectShape {}
declare class Office$MsoPresetTextEffectShape__msoTextEffectShapeDoubleWave1 mixins Office$MsoPresetTextEffectShape {}
declare class Office$MsoPresetTextEffectShape__msoTextEffectShapeDoubleWave2 mixins Office$MsoPresetTextEffectShape {}
declare class Office$MsoPresetTextEffectShape__msoTextEffectShapeFadeDown mixins Office$MsoPresetTextEffectShape {}
declare class Office$MsoPresetTextEffectShape__msoTextEffectShapeFadeLeft mixins Office$MsoPresetTextEffectShape {}
declare class Office$MsoPresetTextEffectShape__msoTextEffectShapeFadeRight mixins Office$MsoPresetTextEffectShape {}
declare class Office$MsoPresetTextEffectShape__msoTextEffectShapeFadeUp mixins Office$MsoPresetTextEffectShape {}
declare class Office$MsoPresetTextEffectShape__msoTextEffectShapeInflate mixins Office$MsoPresetTextEffectShape {}
declare class Office$MsoPresetTextEffectShape__msoTextEffectShapeInflateBottom mixins Office$MsoPresetTextEffectShape {}
declare class Office$MsoPresetTextEffectShape__msoTextEffectShapeInflateTop mixins Office$MsoPresetTextEffectShape {}
declare class Office$MsoPresetTextEffectShape__msoTextEffectShapeMixed mixins Office$MsoPresetTextEffectShape {}
declare class Office$MsoPresetTextEffectShape__msoTextEffectShapePlainText mixins Office$MsoPresetTextEffectShape {}
declare class Office$MsoPresetTextEffectShape__msoTextEffectShapeRingInside mixins Office$MsoPresetTextEffectShape {}
declare class Office$MsoPresetTextEffectShape__msoTextEffectShapeRingOutside mixins Office$MsoPresetTextEffectShape {}
declare class Office$MsoPresetTextEffectShape__msoTextEffectShapeSlantDown mixins Office$MsoPresetTextEffectShape {}
declare class Office$MsoPresetTextEffectShape__msoTextEffectShapeSlantUp mixins Office$MsoPresetTextEffectShape {}
declare class Office$MsoPresetTextEffectShape__msoTextEffectShapeStop mixins Office$MsoPresetTextEffectShape {}
declare class Office$MsoPresetTextEffectShape__msoTextEffectShapeTriangleDown mixins Office$MsoPresetTextEffectShape {}
declare class Office$MsoPresetTextEffectShape__msoTextEffectShapeTriangleUp mixins Office$MsoPresetTextEffectShape {}
declare class Office$MsoPresetTextEffectShape__msoTextEffectShapeWave1 mixins Office$MsoPresetTextEffectShape {}
declare class Office$MsoPresetTextEffectShape__msoTextEffectShapeWave2 mixins Office$MsoPresetTextEffectShape {}


declare  class Office$MsoPresetTexture {
  constructor(...args: empty): mixed;
static +msoPresetTextureMixed: Class<Office$MsoPresetTexture__msoPresetTextureMixed> & Office$MsoPresetTexture__msoPresetTextureMixed & -2;// -2
static +msoTextureBlueTissuePaper: Class<Office$MsoPresetTexture__msoTextureBlueTissuePaper> & Office$MsoPresetTexture__msoTextureBlueTissuePaper & 17;// 17
static +msoTextureBouquet: Class<Office$MsoPresetTexture__msoTextureBouquet> & Office$MsoPresetTexture__msoTextureBouquet & 20;// 20
static +msoTextureBrownMarble: Class<Office$MsoPresetTexture__msoTextureBrownMarble> & Office$MsoPresetTexture__msoTextureBrownMarble & 11;// 11
static +msoTextureCanvas: Class<Office$MsoPresetTexture__msoTextureCanvas> & Office$MsoPresetTexture__msoTextureCanvas & 2;// 2
static +msoTextureCork: Class<Office$MsoPresetTexture__msoTextureCork> & Office$MsoPresetTexture__msoTextureCork & 21;// 21
static +msoTextureDenim: Class<Office$MsoPresetTexture__msoTextureDenim> & Office$MsoPresetTexture__msoTextureDenim & 3;// 3
static +msoTextureFishFossil: Class<Office$MsoPresetTexture__msoTextureFishFossil> & Office$MsoPresetTexture__msoTextureFishFossil & 7;// 7
static +msoTextureGranite: Class<Office$MsoPresetTexture__msoTextureGranite> & Office$MsoPresetTexture__msoTextureGranite & 12;// 12
static +msoTextureGreenMarble: Class<Office$MsoPresetTexture__msoTextureGreenMarble> & Office$MsoPresetTexture__msoTextureGreenMarble & 9;// 9
static +msoTextureMediumWood: Class<Office$MsoPresetTexture__msoTextureMediumWood> & Office$MsoPresetTexture__msoTextureMediumWood & 24;// 24
static +msoTextureNewsprint: Class<Office$MsoPresetTexture__msoTextureNewsprint> & Office$MsoPresetTexture__msoTextureNewsprint & 13;// 13
static +msoTextureOak: Class<Office$MsoPresetTexture__msoTextureOak> & Office$MsoPresetTexture__msoTextureOak & 23;// 23
static +msoTexturePaperBag: Class<Office$MsoPresetTexture__msoTexturePaperBag> & Office$MsoPresetTexture__msoTexturePaperBag & 6;// 6
static +msoTexturePapyrus: Class<Office$MsoPresetTexture__msoTexturePapyrus> & Office$MsoPresetTexture__msoTexturePapyrus & 1;// 1
static +msoTextureParchment: Class<Office$MsoPresetTexture__msoTextureParchment> & Office$MsoPresetTexture__msoTextureParchment & 15;// 15
static +msoTexturePinkTissuePaper: Class<Office$MsoPresetTexture__msoTexturePinkTissuePaper> & Office$MsoPresetTexture__msoTexturePinkTissuePaper & 18;// 18
static +msoTexturePurpleMesh: Class<Office$MsoPresetTexture__msoTexturePurpleMesh> & Office$MsoPresetTexture__msoTexturePurpleMesh & 19;// 19
static +msoTextureRecycledPaper: Class<Office$MsoPresetTexture__msoTextureRecycledPaper> & Office$MsoPresetTexture__msoTextureRecycledPaper & 14;// 14
static +msoTextureSand: Class<Office$MsoPresetTexture__msoTextureSand> & Office$MsoPresetTexture__msoTextureSand & 8;// 8
static +msoTextureStationery: Class<Office$MsoPresetTexture__msoTextureStationery> & Office$MsoPresetTexture__msoTextureStationery & 16;// 16
static +msoTextureWalnut: Class<Office$MsoPresetTexture__msoTextureWalnut> & Office$MsoPresetTexture__msoTextureWalnut & 22;// 22
static +msoTextureWaterDroplets: Class<Office$MsoPresetTexture__msoTextureWaterDroplets> & Office$MsoPresetTexture__msoTextureWaterDroplets & 5;// 5
static +msoTextureWhiteMarble: Class<Office$MsoPresetTexture__msoTextureWhiteMarble> & Office$MsoPresetTexture__msoTextureWhiteMarble & 10;// 10
static +msoTextureWovenMat: Class<Office$MsoPresetTexture__msoTextureWovenMat> & Office$MsoPresetTexture__msoTextureWovenMat & 4;// 4

}

declare class Office$MsoPresetTexture__msoPresetTextureMixed mixins Office$MsoPresetTexture {}
declare class Office$MsoPresetTexture__msoTextureBlueTissuePaper mixins Office$MsoPresetTexture {}
declare class Office$MsoPresetTexture__msoTextureBouquet mixins Office$MsoPresetTexture {}
declare class Office$MsoPresetTexture__msoTextureBrownMarble mixins Office$MsoPresetTexture {}
declare class Office$MsoPresetTexture__msoTextureCanvas mixins Office$MsoPresetTexture {}
declare class Office$MsoPresetTexture__msoTextureCork mixins Office$MsoPresetTexture {}
declare class Office$MsoPresetTexture__msoTextureDenim mixins Office$MsoPresetTexture {}
declare class Office$MsoPresetTexture__msoTextureFishFossil mixins Office$MsoPresetTexture {}
declare class Office$MsoPresetTexture__msoTextureGranite mixins Office$MsoPresetTexture {}
declare class Office$MsoPresetTexture__msoTextureGreenMarble mixins Office$MsoPresetTexture {}
declare class Office$MsoPresetTexture__msoTextureMediumWood mixins Office$MsoPresetTexture {}
declare class Office$MsoPresetTexture__msoTextureNewsprint mixins Office$MsoPresetTexture {}
declare class Office$MsoPresetTexture__msoTextureOak mixins Office$MsoPresetTexture {}
declare class Office$MsoPresetTexture__msoTexturePaperBag mixins Office$MsoPresetTexture {}
declare class Office$MsoPresetTexture__msoTexturePapyrus mixins Office$MsoPresetTexture {}
declare class Office$MsoPresetTexture__msoTextureParchment mixins Office$MsoPresetTexture {}
declare class Office$MsoPresetTexture__msoTexturePinkTissuePaper mixins Office$MsoPresetTexture {}
declare class Office$MsoPresetTexture__msoTexturePurpleMesh mixins Office$MsoPresetTexture {}
declare class Office$MsoPresetTexture__msoTextureRecycledPaper mixins Office$MsoPresetTexture {}
declare class Office$MsoPresetTexture__msoTextureSand mixins Office$MsoPresetTexture {}
declare class Office$MsoPresetTexture__msoTextureStationery mixins Office$MsoPresetTexture {}
declare class Office$MsoPresetTexture__msoTextureWalnut mixins Office$MsoPresetTexture {}
declare class Office$MsoPresetTexture__msoTextureWaterDroplets mixins Office$MsoPresetTexture {}
declare class Office$MsoPresetTexture__msoTextureWhiteMarble mixins Office$MsoPresetTexture {}
declare class Office$MsoPresetTexture__msoTextureWovenMat mixins Office$MsoPresetTexture {}


declare  class Office$MsoPresetThreeDFormat {
  constructor(...args: empty): mixed;
static +msoPresetThreeDFormatMixed: Class<Office$MsoPresetThreeDFormat__msoPresetThreeDFormatMixed> & Office$MsoPresetThreeDFormat__msoPresetThreeDFormatMixed & -2;// -2
static +msoThreeD1: Class<Office$MsoPresetThreeDFormat__msoThreeD1> & Office$MsoPresetThreeDFormat__msoThreeD1 & 1;// 1
static +msoThreeD10: Class<Office$MsoPresetThreeDFormat__msoThreeD10> & Office$MsoPresetThreeDFormat__msoThreeD10 & 10;// 10
static +msoThreeD11: Class<Office$MsoPresetThreeDFormat__msoThreeD11> & Office$MsoPresetThreeDFormat__msoThreeD11 & 11;// 11
static +msoThreeD12: Class<Office$MsoPresetThreeDFormat__msoThreeD12> & Office$MsoPresetThreeDFormat__msoThreeD12 & 12;// 12
static +msoThreeD13: Class<Office$MsoPresetThreeDFormat__msoThreeD13> & Office$MsoPresetThreeDFormat__msoThreeD13 & 13;// 13
static +msoThreeD14: Class<Office$MsoPresetThreeDFormat__msoThreeD14> & Office$MsoPresetThreeDFormat__msoThreeD14 & 14;// 14
static +msoThreeD15: Class<Office$MsoPresetThreeDFormat__msoThreeD15> & Office$MsoPresetThreeDFormat__msoThreeD15 & 15;// 15
static +msoThreeD16: Class<Office$MsoPresetThreeDFormat__msoThreeD16> & Office$MsoPresetThreeDFormat__msoThreeD16 & 16;// 16
static +msoThreeD17: Class<Office$MsoPresetThreeDFormat__msoThreeD17> & Office$MsoPresetThreeDFormat__msoThreeD17 & 17;// 17
static +msoThreeD18: Class<Office$MsoPresetThreeDFormat__msoThreeD18> & Office$MsoPresetThreeDFormat__msoThreeD18 & 18;// 18
static +msoThreeD19: Class<Office$MsoPresetThreeDFormat__msoThreeD19> & Office$MsoPresetThreeDFormat__msoThreeD19 & 19;// 19
static +msoThreeD2: Class<Office$MsoPresetThreeDFormat__msoThreeD2> & Office$MsoPresetThreeDFormat__msoThreeD2 & 2;// 2
static +msoThreeD20: Class<Office$MsoPresetThreeDFormat__msoThreeD20> & Office$MsoPresetThreeDFormat__msoThreeD20 & 20;// 20
static +msoThreeD3: Class<Office$MsoPresetThreeDFormat__msoThreeD3> & Office$MsoPresetThreeDFormat__msoThreeD3 & 3;// 3
static +msoThreeD4: Class<Office$MsoPresetThreeDFormat__msoThreeD4> & Office$MsoPresetThreeDFormat__msoThreeD4 & 4;// 4
static +msoThreeD5: Class<Office$MsoPresetThreeDFormat__msoThreeD5> & Office$MsoPresetThreeDFormat__msoThreeD5 & 5;// 5
static +msoThreeD6: Class<Office$MsoPresetThreeDFormat__msoThreeD6> & Office$MsoPresetThreeDFormat__msoThreeD6 & 6;// 6
static +msoThreeD7: Class<Office$MsoPresetThreeDFormat__msoThreeD7> & Office$MsoPresetThreeDFormat__msoThreeD7 & 7;// 7
static +msoThreeD8: Class<Office$MsoPresetThreeDFormat__msoThreeD8> & Office$MsoPresetThreeDFormat__msoThreeD8 & 8;// 8
static +msoThreeD9: Class<Office$MsoPresetThreeDFormat__msoThreeD9> & Office$MsoPresetThreeDFormat__msoThreeD9 & 9;// 9

}

declare class Office$MsoPresetThreeDFormat__msoPresetThreeDFormatMixed mixins Office$MsoPresetThreeDFormat {}
declare class Office$MsoPresetThreeDFormat__msoThreeD1 mixins Office$MsoPresetThreeDFormat {}
declare class Office$MsoPresetThreeDFormat__msoThreeD10 mixins Office$MsoPresetThreeDFormat {}
declare class Office$MsoPresetThreeDFormat__msoThreeD11 mixins Office$MsoPresetThreeDFormat {}
declare class Office$MsoPresetThreeDFormat__msoThreeD12 mixins Office$MsoPresetThreeDFormat {}
declare class Office$MsoPresetThreeDFormat__msoThreeD13 mixins Office$MsoPresetThreeDFormat {}
declare class Office$MsoPresetThreeDFormat__msoThreeD14 mixins Office$MsoPresetThreeDFormat {}
declare class Office$MsoPresetThreeDFormat__msoThreeD15 mixins Office$MsoPresetThreeDFormat {}
declare class Office$MsoPresetThreeDFormat__msoThreeD16 mixins Office$MsoPresetThreeDFormat {}
declare class Office$MsoPresetThreeDFormat__msoThreeD17 mixins Office$MsoPresetThreeDFormat {}
declare class Office$MsoPresetThreeDFormat__msoThreeD18 mixins Office$MsoPresetThreeDFormat {}
declare class Office$MsoPresetThreeDFormat__msoThreeD19 mixins Office$MsoPresetThreeDFormat {}
declare class Office$MsoPresetThreeDFormat__msoThreeD2 mixins Office$MsoPresetThreeDFormat {}
declare class Office$MsoPresetThreeDFormat__msoThreeD20 mixins Office$MsoPresetThreeDFormat {}
declare class Office$MsoPresetThreeDFormat__msoThreeD3 mixins Office$MsoPresetThreeDFormat {}
declare class Office$MsoPresetThreeDFormat__msoThreeD4 mixins Office$MsoPresetThreeDFormat {}
declare class Office$MsoPresetThreeDFormat__msoThreeD5 mixins Office$MsoPresetThreeDFormat {}
declare class Office$MsoPresetThreeDFormat__msoThreeD6 mixins Office$MsoPresetThreeDFormat {}
declare class Office$MsoPresetThreeDFormat__msoThreeD7 mixins Office$MsoPresetThreeDFormat {}
declare class Office$MsoPresetThreeDFormat__msoThreeD8 mixins Office$MsoPresetThreeDFormat {}
declare class Office$MsoPresetThreeDFormat__msoThreeD9 mixins Office$MsoPresetThreeDFormat {}


declare  class Office$MsoReflectionType {
  constructor(...args: empty): mixed;
static +msoReflectionType1: Class<Office$MsoReflectionType__msoReflectionType1> & Office$MsoReflectionType__msoReflectionType1 & 1;// 1
static +msoReflectionType2: Class<Office$MsoReflectionType__msoReflectionType2> & Office$MsoReflectionType__msoReflectionType2 & 2;// 2
static +msoReflectionType3: Class<Office$MsoReflectionType__msoReflectionType3> & Office$MsoReflectionType__msoReflectionType3 & 3;// 3
static +msoReflectionType4: Class<Office$MsoReflectionType__msoReflectionType4> & Office$MsoReflectionType__msoReflectionType4 & 4;// 4
static +msoReflectionType5: Class<Office$MsoReflectionType__msoReflectionType5> & Office$MsoReflectionType__msoReflectionType5 & 5;// 5
static +msoReflectionType6: Class<Office$MsoReflectionType__msoReflectionType6> & Office$MsoReflectionType__msoReflectionType6 & 6;// 6
static +msoReflectionType7: Class<Office$MsoReflectionType__msoReflectionType7> & Office$MsoReflectionType__msoReflectionType7 & 7;// 7
static +msoReflectionType8: Class<Office$MsoReflectionType__msoReflectionType8> & Office$MsoReflectionType__msoReflectionType8 & 8;// 8
static +msoReflectionType9: Class<Office$MsoReflectionType__msoReflectionType9> & Office$MsoReflectionType__msoReflectionType9 & 9;// 9
static +msoReflectionTypeMixed: Class<Office$MsoReflectionType__msoReflectionTypeMixed> & Office$MsoReflectionType__msoReflectionTypeMixed & -2;// -2
static +msoReflectionTypeNone: Class<Office$MsoReflectionType__msoReflectionTypeNone> & Office$MsoReflectionType__msoReflectionTypeNone & 0;// 0

}

declare class Office$MsoReflectionType__msoReflectionType1 mixins Office$MsoReflectionType {}
declare class Office$MsoReflectionType__msoReflectionType2 mixins Office$MsoReflectionType {}
declare class Office$MsoReflectionType__msoReflectionType3 mixins Office$MsoReflectionType {}
declare class Office$MsoReflectionType__msoReflectionType4 mixins Office$MsoReflectionType {}
declare class Office$MsoReflectionType__msoReflectionType5 mixins Office$MsoReflectionType {}
declare class Office$MsoReflectionType__msoReflectionType6 mixins Office$MsoReflectionType {}
declare class Office$MsoReflectionType__msoReflectionType7 mixins Office$MsoReflectionType {}
declare class Office$MsoReflectionType__msoReflectionType8 mixins Office$MsoReflectionType {}
declare class Office$MsoReflectionType__msoReflectionType9 mixins Office$MsoReflectionType {}
declare class Office$MsoReflectionType__msoReflectionTypeMixed mixins Office$MsoReflectionType {}
declare class Office$MsoReflectionType__msoReflectionTypeNone mixins Office$MsoReflectionType {}


declare  class Office$MsoRelativeNodePosition {
  constructor(...args: empty): mixed;
static +msoAfterLastSibling: Class<Office$MsoRelativeNodePosition__msoAfterLastSibling> & Office$MsoRelativeNodePosition__msoAfterLastSibling & 4;// 4
static +msoAfterNode: Class<Office$MsoRelativeNodePosition__msoAfterNode> & Office$MsoRelativeNodePosition__msoAfterNode & 2;// 2
static +msoBeforeFirstSibling: Class<Office$MsoRelativeNodePosition__msoBeforeFirstSibling> & Office$MsoRelativeNodePosition__msoBeforeFirstSibling & 3;// 3
static +msoBeforeNode: Class<Office$MsoRelativeNodePosition__msoBeforeNode> & Office$MsoRelativeNodePosition__msoBeforeNode & 1;// 1

}

declare class Office$MsoRelativeNodePosition__msoAfterLastSibling mixins Office$MsoRelativeNodePosition {}
declare class Office$MsoRelativeNodePosition__msoAfterNode mixins Office$MsoRelativeNodePosition {}
declare class Office$MsoRelativeNodePosition__msoBeforeFirstSibling mixins Office$MsoRelativeNodePosition {}
declare class Office$MsoRelativeNodePosition__msoBeforeNode mixins Office$MsoRelativeNodePosition {}


declare  class Office$MsoScaleFrom {
  constructor(...args: empty): mixed;
static +msoScaleFromBottomRight: Class<Office$MsoScaleFrom__msoScaleFromBottomRight> & Office$MsoScaleFrom__msoScaleFromBottomRight & 2;// 2
static +msoScaleFromMiddle: Class<Office$MsoScaleFrom__msoScaleFromMiddle> & Office$MsoScaleFrom__msoScaleFromMiddle & 1;// 1
static +msoScaleFromTopLeft: Class<Office$MsoScaleFrom__msoScaleFromTopLeft> & Office$MsoScaleFrom__msoScaleFromTopLeft & 0;// 0

}

declare class Office$MsoScaleFrom__msoScaleFromBottomRight mixins Office$MsoScaleFrom {}
declare class Office$MsoScaleFrom__msoScaleFromMiddle mixins Office$MsoScaleFrom {}
declare class Office$MsoScaleFrom__msoScaleFromTopLeft mixins Office$MsoScaleFrom {}


declare  class Office$MsoScreenSize {
  constructor(...args: empty): mixed;
static +msoScreenSize1024x768: Class<Office$MsoScreenSize__msoScreenSize1024x768> & Office$MsoScreenSize__msoScreenSize1024x768 & 4;// 4
static +msoScreenSize1152x882: Class<Office$MsoScreenSize__msoScreenSize1152x882> & Office$MsoScreenSize__msoScreenSize1152x882 & 5;// 5
static +msoScreenSize1152x900: Class<Office$MsoScreenSize__msoScreenSize1152x900> & Office$MsoScreenSize__msoScreenSize1152x900 & 6;// 6
static +msoScreenSize1280x1024: Class<Office$MsoScreenSize__msoScreenSize1280x1024> & Office$MsoScreenSize__msoScreenSize1280x1024 & 7;// 7
static +msoScreenSize1600x1200: Class<Office$MsoScreenSize__msoScreenSize1600x1200> & Office$MsoScreenSize__msoScreenSize1600x1200 & 8;// 8
static +msoScreenSize1800x1440: Class<Office$MsoScreenSize__msoScreenSize1800x1440> & Office$MsoScreenSize__msoScreenSize1800x1440 & 9;// 9
static +msoScreenSize1920x1200: Class<Office$MsoScreenSize__msoScreenSize1920x1200> & Office$MsoScreenSize__msoScreenSize1920x1200 & 10;// 10
static +msoScreenSize544x376: Class<Office$MsoScreenSize__msoScreenSize544x376> & Office$MsoScreenSize__msoScreenSize544x376 & 0;// 0
static +msoScreenSize640x480: Class<Office$MsoScreenSize__msoScreenSize640x480> & Office$MsoScreenSize__msoScreenSize640x480 & 1;// 1
static +msoScreenSize720x512: Class<Office$MsoScreenSize__msoScreenSize720x512> & Office$MsoScreenSize__msoScreenSize720x512 & 2;// 2
static +msoScreenSize800x600: Class<Office$MsoScreenSize__msoScreenSize800x600> & Office$MsoScreenSize__msoScreenSize800x600 & 3;// 3

}

declare class Office$MsoScreenSize__msoScreenSize1024x768 mixins Office$MsoScreenSize {}
declare class Office$MsoScreenSize__msoScreenSize1152x882 mixins Office$MsoScreenSize {}
declare class Office$MsoScreenSize__msoScreenSize1152x900 mixins Office$MsoScreenSize {}
declare class Office$MsoScreenSize__msoScreenSize1280x1024 mixins Office$MsoScreenSize {}
declare class Office$MsoScreenSize__msoScreenSize1600x1200 mixins Office$MsoScreenSize {}
declare class Office$MsoScreenSize__msoScreenSize1800x1440 mixins Office$MsoScreenSize {}
declare class Office$MsoScreenSize__msoScreenSize1920x1200 mixins Office$MsoScreenSize {}
declare class Office$MsoScreenSize__msoScreenSize544x376 mixins Office$MsoScreenSize {}
declare class Office$MsoScreenSize__msoScreenSize640x480 mixins Office$MsoScreenSize {}
declare class Office$MsoScreenSize__msoScreenSize720x512 mixins Office$MsoScreenSize {}
declare class Office$MsoScreenSize__msoScreenSize800x600 mixins Office$MsoScreenSize {}


declare  class Office$MsoScriptLanguage {
  constructor(...args: empty): mixed;
static +msoScriptLanguageASP: Class<Office$MsoScriptLanguage__msoScriptLanguageASP> & Office$MsoScriptLanguage__msoScriptLanguageASP & 3;// 3
static +msoScriptLanguageJava: Class<Office$MsoScriptLanguage__msoScriptLanguageJava> & Office$MsoScriptLanguage__msoScriptLanguageJava & 1;// 1
static +msoScriptLanguageOther: Class<Office$MsoScriptLanguage__msoScriptLanguageOther> & Office$MsoScriptLanguage__msoScriptLanguageOther & 4;// 4
static +msoScriptLanguageVisualBasic: Class<Office$MsoScriptLanguage__msoScriptLanguageVisualBasic> & Office$MsoScriptLanguage__msoScriptLanguageVisualBasic & 2;// 2

}

declare class Office$MsoScriptLanguage__msoScriptLanguageASP mixins Office$MsoScriptLanguage {}
declare class Office$MsoScriptLanguage__msoScriptLanguageJava mixins Office$MsoScriptLanguage {}
declare class Office$MsoScriptLanguage__msoScriptLanguageOther mixins Office$MsoScriptLanguage {}
declare class Office$MsoScriptLanguage__msoScriptLanguageVisualBasic mixins Office$MsoScriptLanguage {}


declare  class Office$MsoScriptLocation {
  constructor(...args: empty): mixed;
static +msoScriptLocationInBody: Class<Office$MsoScriptLocation__msoScriptLocationInBody> & Office$MsoScriptLocation__msoScriptLocationInBody & 2;// 2
static +msoScriptLocationInHead: Class<Office$MsoScriptLocation__msoScriptLocationInHead> & Office$MsoScriptLocation__msoScriptLocationInHead & 1;// 1

}

declare class Office$MsoScriptLocation__msoScriptLocationInBody mixins Office$MsoScriptLocation {}
declare class Office$MsoScriptLocation__msoScriptLocationInHead mixins Office$MsoScriptLocation {}


declare  class Office$MsoSearchIn {
  constructor(...args: empty): mixed;
static +msoSearchInCustom: Class<Office$MsoSearchIn__msoSearchInCustom> & Office$MsoSearchIn__msoSearchInCustom & 3;// 3
static +msoSearchInMyComputer: Class<Office$MsoSearchIn__msoSearchInMyComputer> & Office$MsoSearchIn__msoSearchInMyComputer & 0;// 0
static +msoSearchInMyNetworkPlaces: Class<Office$MsoSearchIn__msoSearchInMyNetworkPlaces> & Office$MsoSearchIn__msoSearchInMyNetworkPlaces & 2;// 2
static +msoSearchInOutlook: Class<Office$MsoSearchIn__msoSearchInOutlook> & Office$MsoSearchIn__msoSearchInOutlook & 1;// 1

}

declare class Office$MsoSearchIn__msoSearchInCustom mixins Office$MsoSearchIn {}
declare class Office$MsoSearchIn__msoSearchInMyComputer mixins Office$MsoSearchIn {}
declare class Office$MsoSearchIn__msoSearchInMyNetworkPlaces mixins Office$MsoSearchIn {}
declare class Office$MsoSearchIn__msoSearchInOutlook mixins Office$MsoSearchIn {}


declare  class Office$MsoSegmentType {
  constructor(...args: empty): mixed;
static +msoSegmentCurve: Class<Office$MsoSegmentType__msoSegmentCurve> & Office$MsoSegmentType__msoSegmentCurve & 1;// 1
static +msoSegmentLine: Class<Office$MsoSegmentType__msoSegmentLine> & Office$MsoSegmentType__msoSegmentLine & 0;// 0

}

declare class Office$MsoSegmentType__msoSegmentCurve mixins Office$MsoSegmentType {}
declare class Office$MsoSegmentType__msoSegmentLine mixins Office$MsoSegmentType {}


declare  class Office$MsoShadowStyle {
  constructor(...args: empty): mixed;
static +msoShadowStyleInnerShadow: Class<Office$MsoShadowStyle__msoShadowStyleInnerShadow> & Office$MsoShadowStyle__msoShadowStyleInnerShadow & 1;// 1
static +msoShadowStyleMixed: Class<Office$MsoShadowStyle__msoShadowStyleMixed> & Office$MsoShadowStyle__msoShadowStyleMixed & -2;// -2
static +msoShadowStyleOuterShadow: Class<Office$MsoShadowStyle__msoShadowStyleOuterShadow> & Office$MsoShadowStyle__msoShadowStyleOuterShadow & 2;// 2

}

declare class Office$MsoShadowStyle__msoShadowStyleInnerShadow mixins Office$MsoShadowStyle {}
declare class Office$MsoShadowStyle__msoShadowStyleMixed mixins Office$MsoShadowStyle {}
declare class Office$MsoShadowStyle__msoShadowStyleOuterShadow mixins Office$MsoShadowStyle {}


declare  class Office$MsoShadowType {
  constructor(...args: empty): mixed;
static +msoShadow1: Class<Office$MsoShadowType__msoShadow1> & Office$MsoShadowType__msoShadow1 & 1;// 1
static +msoShadow10: Class<Office$MsoShadowType__msoShadow10> & Office$MsoShadowType__msoShadow10 & 10;// 10
static +msoShadow11: Class<Office$MsoShadowType__msoShadow11> & Office$MsoShadowType__msoShadow11 & 11;// 11
static +msoShadow12: Class<Office$MsoShadowType__msoShadow12> & Office$MsoShadowType__msoShadow12 & 12;// 12
static +msoShadow13: Class<Office$MsoShadowType__msoShadow13> & Office$MsoShadowType__msoShadow13 & 13;// 13
static +msoShadow14: Class<Office$MsoShadowType__msoShadow14> & Office$MsoShadowType__msoShadow14 & 14;// 14
static +msoShadow15: Class<Office$MsoShadowType__msoShadow15> & Office$MsoShadowType__msoShadow15 & 15;// 15
static +msoShadow16: Class<Office$MsoShadowType__msoShadow16> & Office$MsoShadowType__msoShadow16 & 16;// 16
static +msoShadow17: Class<Office$MsoShadowType__msoShadow17> & Office$MsoShadowType__msoShadow17 & 17;// 17
static +msoShadow18: Class<Office$MsoShadowType__msoShadow18> & Office$MsoShadowType__msoShadow18 & 18;// 18
static +msoShadow19: Class<Office$MsoShadowType__msoShadow19> & Office$MsoShadowType__msoShadow19 & 19;// 19
static +msoShadow2: Class<Office$MsoShadowType__msoShadow2> & Office$MsoShadowType__msoShadow2 & 2;// 2
static +msoShadow20: Class<Office$MsoShadowType__msoShadow20> & Office$MsoShadowType__msoShadow20 & 20;// 20
static +msoShadow21: Class<Office$MsoShadowType__msoShadow21> & Office$MsoShadowType__msoShadow21 & 21;// 21
static +msoShadow22: Class<Office$MsoShadowType__msoShadow22> & Office$MsoShadowType__msoShadow22 & 22;// 22
static +msoShadow23: Class<Office$MsoShadowType__msoShadow23> & Office$MsoShadowType__msoShadow23 & 23;// 23
static +msoShadow24: Class<Office$MsoShadowType__msoShadow24> & Office$MsoShadowType__msoShadow24 & 24;// 24
static +msoShadow25: Class<Office$MsoShadowType__msoShadow25> & Office$MsoShadowType__msoShadow25 & 25;// 25
static +msoShadow26: Class<Office$MsoShadowType__msoShadow26> & Office$MsoShadowType__msoShadow26 & 26;// 26
static +msoShadow27: Class<Office$MsoShadowType__msoShadow27> & Office$MsoShadowType__msoShadow27 & 27;// 27
static +msoShadow28: Class<Office$MsoShadowType__msoShadow28> & Office$MsoShadowType__msoShadow28 & 28;// 28
static +msoShadow29: Class<Office$MsoShadowType__msoShadow29> & Office$MsoShadowType__msoShadow29 & 29;// 29
static +msoShadow3: Class<Office$MsoShadowType__msoShadow3> & Office$MsoShadowType__msoShadow3 & 3;// 3
static +msoShadow30: Class<Office$MsoShadowType__msoShadow30> & Office$MsoShadowType__msoShadow30 & 30;// 30
static +msoShadow31: Class<Office$MsoShadowType__msoShadow31> & Office$MsoShadowType__msoShadow31 & 31;// 31
static +msoShadow32: Class<Office$MsoShadowType__msoShadow32> & Office$MsoShadowType__msoShadow32 & 32;// 32
static +msoShadow33: Class<Office$MsoShadowType__msoShadow33> & Office$MsoShadowType__msoShadow33 & 33;// 33
static +msoShadow34: Class<Office$MsoShadowType__msoShadow34> & Office$MsoShadowType__msoShadow34 & 34;// 34
static +msoShadow35: Class<Office$MsoShadowType__msoShadow35> & Office$MsoShadowType__msoShadow35 & 35;// 35
static +msoShadow36: Class<Office$MsoShadowType__msoShadow36> & Office$MsoShadowType__msoShadow36 & 36;// 36
static +msoShadow37: Class<Office$MsoShadowType__msoShadow37> & Office$MsoShadowType__msoShadow37 & 37;// 37
static +msoShadow38: Class<Office$MsoShadowType__msoShadow38> & Office$MsoShadowType__msoShadow38 & 38;// 38
static +msoShadow39: Class<Office$MsoShadowType__msoShadow39> & Office$MsoShadowType__msoShadow39 & 39;// 39
static +msoShadow4: Class<Office$MsoShadowType__msoShadow4> & Office$MsoShadowType__msoShadow4 & 4;// 4
static +msoShadow40: Class<Office$MsoShadowType__msoShadow40> & Office$MsoShadowType__msoShadow40 & 40;// 40
static +msoShadow41: Class<Office$MsoShadowType__msoShadow41> & Office$MsoShadowType__msoShadow41 & 41;// 41
static +msoShadow42: Class<Office$MsoShadowType__msoShadow42> & Office$MsoShadowType__msoShadow42 & 42;// 42
static +msoShadow43: Class<Office$MsoShadowType__msoShadow43> & Office$MsoShadowType__msoShadow43 & 43;// 43
static +msoShadow5: Class<Office$MsoShadowType__msoShadow5> & Office$MsoShadowType__msoShadow5 & 5;// 5
static +msoShadow6: Class<Office$MsoShadowType__msoShadow6> & Office$MsoShadowType__msoShadow6 & 6;// 6
static +msoShadow7: Class<Office$MsoShadowType__msoShadow7> & Office$MsoShadowType__msoShadow7 & 7;// 7
static +msoShadow8: Class<Office$MsoShadowType__msoShadow8> & Office$MsoShadowType__msoShadow8 & 8;// 8
static +msoShadow9: Class<Office$MsoShadowType__msoShadow9> & Office$MsoShadowType__msoShadow9 & 9;// 9
static +msoShadowMixed: Class<Office$MsoShadowType__msoShadowMixed> & Office$MsoShadowType__msoShadowMixed & -2;// -2

}

declare class Office$MsoShadowType__msoShadow1 mixins Office$MsoShadowType {}
declare class Office$MsoShadowType__msoShadow10 mixins Office$MsoShadowType {}
declare class Office$MsoShadowType__msoShadow11 mixins Office$MsoShadowType {}
declare class Office$MsoShadowType__msoShadow12 mixins Office$MsoShadowType {}
declare class Office$MsoShadowType__msoShadow13 mixins Office$MsoShadowType {}
declare class Office$MsoShadowType__msoShadow14 mixins Office$MsoShadowType {}
declare class Office$MsoShadowType__msoShadow15 mixins Office$MsoShadowType {}
declare class Office$MsoShadowType__msoShadow16 mixins Office$MsoShadowType {}
declare class Office$MsoShadowType__msoShadow17 mixins Office$MsoShadowType {}
declare class Office$MsoShadowType__msoShadow18 mixins Office$MsoShadowType {}
declare class Office$MsoShadowType__msoShadow19 mixins Office$MsoShadowType {}
declare class Office$MsoShadowType__msoShadow2 mixins Office$MsoShadowType {}
declare class Office$MsoShadowType__msoShadow20 mixins Office$MsoShadowType {}
declare class Office$MsoShadowType__msoShadow21 mixins Office$MsoShadowType {}
declare class Office$MsoShadowType__msoShadow22 mixins Office$MsoShadowType {}
declare class Office$MsoShadowType__msoShadow23 mixins Office$MsoShadowType {}
declare class Office$MsoShadowType__msoShadow24 mixins Office$MsoShadowType {}
declare class Office$MsoShadowType__msoShadow25 mixins Office$MsoShadowType {}
declare class Office$MsoShadowType__msoShadow26 mixins Office$MsoShadowType {}
declare class Office$MsoShadowType__msoShadow27 mixins Office$MsoShadowType {}
declare class Office$MsoShadowType__msoShadow28 mixins Office$MsoShadowType {}
declare class Office$MsoShadowType__msoShadow29 mixins Office$MsoShadowType {}
declare class Office$MsoShadowType__msoShadow3 mixins Office$MsoShadowType {}
declare class Office$MsoShadowType__msoShadow30 mixins Office$MsoShadowType {}
declare class Office$MsoShadowType__msoShadow31 mixins Office$MsoShadowType {}
declare class Office$MsoShadowType__msoShadow32 mixins Office$MsoShadowType {}
declare class Office$MsoShadowType__msoShadow33 mixins Office$MsoShadowType {}
declare class Office$MsoShadowType__msoShadow34 mixins Office$MsoShadowType {}
declare class Office$MsoShadowType__msoShadow35 mixins Office$MsoShadowType {}
declare class Office$MsoShadowType__msoShadow36 mixins Office$MsoShadowType {}
declare class Office$MsoShadowType__msoShadow37 mixins Office$MsoShadowType {}
declare class Office$MsoShadowType__msoShadow38 mixins Office$MsoShadowType {}
declare class Office$MsoShadowType__msoShadow39 mixins Office$MsoShadowType {}
declare class Office$MsoShadowType__msoShadow4 mixins Office$MsoShadowType {}
declare class Office$MsoShadowType__msoShadow40 mixins Office$MsoShadowType {}
declare class Office$MsoShadowType__msoShadow41 mixins Office$MsoShadowType {}
declare class Office$MsoShadowType__msoShadow42 mixins Office$MsoShadowType {}
declare class Office$MsoShadowType__msoShadow43 mixins Office$MsoShadowType {}
declare class Office$MsoShadowType__msoShadow5 mixins Office$MsoShadowType {}
declare class Office$MsoShadowType__msoShadow6 mixins Office$MsoShadowType {}
declare class Office$MsoShadowType__msoShadow7 mixins Office$MsoShadowType {}
declare class Office$MsoShadowType__msoShadow8 mixins Office$MsoShadowType {}
declare class Office$MsoShadowType__msoShadow9 mixins Office$MsoShadowType {}
declare class Office$MsoShadowType__msoShadowMixed mixins Office$MsoShadowType {}


declare  class Office$MsoShapeStyleIndex {
  constructor(...args: empty): mixed;
static +msoLineStylePreset1: Class<Office$MsoShapeStyleIndex__msoLineStylePreset1> & Office$MsoShapeStyleIndex__msoLineStylePreset1 & 10001;// 10001
static +msoLineStylePreset10: Class<Office$MsoShapeStyleIndex__msoLineStylePreset10> & Office$MsoShapeStyleIndex__msoLineStylePreset10 & 10010;// 10010
static +msoLineStylePreset11: Class<Office$MsoShapeStyleIndex__msoLineStylePreset11> & Office$MsoShapeStyleIndex__msoLineStylePreset11 & 10011;// 10011
static +msoLineStylePreset12: Class<Office$MsoShapeStyleIndex__msoLineStylePreset12> & Office$MsoShapeStyleIndex__msoLineStylePreset12 & 10012;// 10012
static +msoLineStylePreset13: Class<Office$MsoShapeStyleIndex__msoLineStylePreset13> & Office$MsoShapeStyleIndex__msoLineStylePreset13 & 10013;// 10013
static +msoLineStylePreset14: Class<Office$MsoShapeStyleIndex__msoLineStylePreset14> & Office$MsoShapeStyleIndex__msoLineStylePreset14 & 10014;// 10014
static +msoLineStylePreset15: Class<Office$MsoShapeStyleIndex__msoLineStylePreset15> & Office$MsoShapeStyleIndex__msoLineStylePreset15 & 10015;// 10015
static +msoLineStylePreset16: Class<Office$MsoShapeStyleIndex__msoLineStylePreset16> & Office$MsoShapeStyleIndex__msoLineStylePreset16 & 10016;// 10016
static +msoLineStylePreset17: Class<Office$MsoShapeStyleIndex__msoLineStylePreset17> & Office$MsoShapeStyleIndex__msoLineStylePreset17 & 10017;// 10017
static +msoLineStylePreset18: Class<Office$MsoShapeStyleIndex__msoLineStylePreset18> & Office$MsoShapeStyleIndex__msoLineStylePreset18 & 10018;// 10018
static +msoLineStylePreset19: Class<Office$MsoShapeStyleIndex__msoLineStylePreset19> & Office$MsoShapeStyleIndex__msoLineStylePreset19 & 10019;// 10019
static +msoLineStylePreset2: Class<Office$MsoShapeStyleIndex__msoLineStylePreset2> & Office$MsoShapeStyleIndex__msoLineStylePreset2 & 10002;// 10002
static +msoLineStylePreset20: Class<Office$MsoShapeStyleIndex__msoLineStylePreset20> & Office$MsoShapeStyleIndex__msoLineStylePreset20 & 10020;// 10020
static +msoLineStylePreset21: Class<Office$MsoShapeStyleIndex__msoLineStylePreset21> & Office$MsoShapeStyleIndex__msoLineStylePreset21 & 10021;// 10021
static +msoLineStylePreset22: Class<Office$MsoShapeStyleIndex__msoLineStylePreset22> & Office$MsoShapeStyleIndex__msoLineStylePreset22 & 10022;// 10022
static +msoLineStylePreset23: Class<Office$MsoShapeStyleIndex__msoLineStylePreset23> & Office$MsoShapeStyleIndex__msoLineStylePreset23 & 10023;// 10023
static +msoLineStylePreset24: Class<Office$MsoShapeStyleIndex__msoLineStylePreset24> & Office$MsoShapeStyleIndex__msoLineStylePreset24 & 10024;// 10024
static +msoLineStylePreset25: Class<Office$MsoShapeStyleIndex__msoLineStylePreset25> & Office$MsoShapeStyleIndex__msoLineStylePreset25 & 10025;// 10025
static +msoLineStylePreset26: Class<Office$MsoShapeStyleIndex__msoLineStylePreset26> & Office$MsoShapeStyleIndex__msoLineStylePreset26 & 10026;// 10026
static +msoLineStylePreset27: Class<Office$MsoShapeStyleIndex__msoLineStylePreset27> & Office$MsoShapeStyleIndex__msoLineStylePreset27 & 10027;// 10027
static +msoLineStylePreset28: Class<Office$MsoShapeStyleIndex__msoLineStylePreset28> & Office$MsoShapeStyleIndex__msoLineStylePreset28 & 10028;// 10028
static +msoLineStylePreset29: Class<Office$MsoShapeStyleIndex__msoLineStylePreset29> & Office$MsoShapeStyleIndex__msoLineStylePreset29 & 10029;// 10029
static +msoLineStylePreset3: Class<Office$MsoShapeStyleIndex__msoLineStylePreset3> & Office$MsoShapeStyleIndex__msoLineStylePreset3 & 10003;// 10003
static +msoLineStylePreset30: Class<Office$MsoShapeStyleIndex__msoLineStylePreset30> & Office$MsoShapeStyleIndex__msoLineStylePreset30 & 10030;// 10030
static +msoLineStylePreset31: Class<Office$MsoShapeStyleIndex__msoLineStylePreset31> & Office$MsoShapeStyleIndex__msoLineStylePreset31 & 10031;// 10031
static +msoLineStylePreset32: Class<Office$MsoShapeStyleIndex__msoLineStylePreset32> & Office$MsoShapeStyleIndex__msoLineStylePreset32 & 10032;// 10032
static +msoLineStylePreset33: Class<Office$MsoShapeStyleIndex__msoLineStylePreset33> & Office$MsoShapeStyleIndex__msoLineStylePreset33 & 10033;// 10033
static +msoLineStylePreset34: Class<Office$MsoShapeStyleIndex__msoLineStylePreset34> & Office$MsoShapeStyleIndex__msoLineStylePreset34 & 10034;// 10034
static +msoLineStylePreset35: Class<Office$MsoShapeStyleIndex__msoLineStylePreset35> & Office$MsoShapeStyleIndex__msoLineStylePreset35 & 10035;// 10035
static +msoLineStylePreset36: Class<Office$MsoShapeStyleIndex__msoLineStylePreset36> & Office$MsoShapeStyleIndex__msoLineStylePreset36 & 10036;// 10036
static +msoLineStylePreset37: Class<Office$MsoShapeStyleIndex__msoLineStylePreset37> & Office$MsoShapeStyleIndex__msoLineStylePreset37 & 10037;// 10037
static +msoLineStylePreset38: Class<Office$MsoShapeStyleIndex__msoLineStylePreset38> & Office$MsoShapeStyleIndex__msoLineStylePreset38 & 10038;// 10038
static +msoLineStylePreset39: Class<Office$MsoShapeStyleIndex__msoLineStylePreset39> & Office$MsoShapeStyleIndex__msoLineStylePreset39 & 10039;// 10039
static +msoLineStylePreset4: Class<Office$MsoShapeStyleIndex__msoLineStylePreset4> & Office$MsoShapeStyleIndex__msoLineStylePreset4 & 10004;// 10004
static +msoLineStylePreset40: Class<Office$MsoShapeStyleIndex__msoLineStylePreset40> & Office$MsoShapeStyleIndex__msoLineStylePreset40 & 10040;// 10040
static +msoLineStylePreset41: Class<Office$MsoShapeStyleIndex__msoLineStylePreset41> & Office$MsoShapeStyleIndex__msoLineStylePreset41 & 10041;// 10041
static +msoLineStylePreset42: Class<Office$MsoShapeStyleIndex__msoLineStylePreset42> & Office$MsoShapeStyleIndex__msoLineStylePreset42 & 10042;// 10042
static +msoLineStylePreset5: Class<Office$MsoShapeStyleIndex__msoLineStylePreset5> & Office$MsoShapeStyleIndex__msoLineStylePreset5 & 10005;// 10005
static +msoLineStylePreset6: Class<Office$MsoShapeStyleIndex__msoLineStylePreset6> & Office$MsoShapeStyleIndex__msoLineStylePreset6 & 10006;// 10006
static +msoLineStylePreset7: Class<Office$MsoShapeStyleIndex__msoLineStylePreset7> & Office$MsoShapeStyleIndex__msoLineStylePreset7 & 10007;// 10007
static +msoLineStylePreset8: Class<Office$MsoShapeStyleIndex__msoLineStylePreset8> & Office$MsoShapeStyleIndex__msoLineStylePreset8 & 10008;// 10008
static +msoLineStylePreset9: Class<Office$MsoShapeStyleIndex__msoLineStylePreset9> & Office$MsoShapeStyleIndex__msoLineStylePreset9 & 10009;// 10009
static +msoShapeStyleMixed: Class<Office$MsoShapeStyleIndex__msoShapeStyleMixed> & Office$MsoShapeStyleIndex__msoShapeStyleMixed & -2;// -2
static +msoShapeStyleNotAPreset: Class<Office$MsoShapeStyleIndex__msoShapeStyleNotAPreset> & Office$MsoShapeStyleIndex__msoShapeStyleNotAPreset & 0;// 0
static +msoShapeStylePreset1: Class<Office$MsoShapeStyleIndex__msoShapeStylePreset1> & Office$MsoShapeStyleIndex__msoShapeStylePreset1 & 1;// 1
static +msoShapeStylePreset10: Class<Office$MsoShapeStyleIndex__msoShapeStylePreset10> & Office$MsoShapeStyleIndex__msoShapeStylePreset10 & 10;// 10
static +msoShapeStylePreset11: Class<Office$MsoShapeStyleIndex__msoShapeStylePreset11> & Office$MsoShapeStyleIndex__msoShapeStylePreset11 & 11;// 11
static +msoShapeStylePreset12: Class<Office$MsoShapeStyleIndex__msoShapeStylePreset12> & Office$MsoShapeStyleIndex__msoShapeStylePreset12 & 12;// 12
static +msoShapeStylePreset13: Class<Office$MsoShapeStyleIndex__msoShapeStylePreset13> & Office$MsoShapeStyleIndex__msoShapeStylePreset13 & 13;// 13
static +msoShapeStylePreset14: Class<Office$MsoShapeStyleIndex__msoShapeStylePreset14> & Office$MsoShapeStyleIndex__msoShapeStylePreset14 & 14;// 14
static +msoShapeStylePreset15: Class<Office$MsoShapeStyleIndex__msoShapeStylePreset15> & Office$MsoShapeStyleIndex__msoShapeStylePreset15 & 15;// 15
static +msoShapeStylePreset16: Class<Office$MsoShapeStyleIndex__msoShapeStylePreset16> & Office$MsoShapeStyleIndex__msoShapeStylePreset16 & 16;// 16
static +msoShapeStylePreset17: Class<Office$MsoShapeStyleIndex__msoShapeStylePreset17> & Office$MsoShapeStyleIndex__msoShapeStylePreset17 & 17;// 17
static +msoShapeStylePreset18: Class<Office$MsoShapeStyleIndex__msoShapeStylePreset18> & Office$MsoShapeStyleIndex__msoShapeStylePreset18 & 18;// 18
static +msoShapeStylePreset19: Class<Office$MsoShapeStyleIndex__msoShapeStylePreset19> & Office$MsoShapeStyleIndex__msoShapeStylePreset19 & 19;// 19
static +msoShapeStylePreset2: Class<Office$MsoShapeStyleIndex__msoShapeStylePreset2> & Office$MsoShapeStyleIndex__msoShapeStylePreset2 & 2;// 2
static +msoShapeStylePreset20: Class<Office$MsoShapeStyleIndex__msoShapeStylePreset20> & Office$MsoShapeStyleIndex__msoShapeStylePreset20 & 20;// 20
static +msoShapeStylePreset21: Class<Office$MsoShapeStyleIndex__msoShapeStylePreset21> & Office$MsoShapeStyleIndex__msoShapeStylePreset21 & 21;// 21
static +msoShapeStylePreset22: Class<Office$MsoShapeStyleIndex__msoShapeStylePreset22> & Office$MsoShapeStyleIndex__msoShapeStylePreset22 & 22;// 22
static +msoShapeStylePreset23: Class<Office$MsoShapeStyleIndex__msoShapeStylePreset23> & Office$MsoShapeStyleIndex__msoShapeStylePreset23 & 23;// 23
static +msoShapeStylePreset24: Class<Office$MsoShapeStyleIndex__msoShapeStylePreset24> & Office$MsoShapeStyleIndex__msoShapeStylePreset24 & 24;// 24
static +msoShapeStylePreset25: Class<Office$MsoShapeStyleIndex__msoShapeStylePreset25> & Office$MsoShapeStyleIndex__msoShapeStylePreset25 & 25;// 25
static +msoShapeStylePreset26: Class<Office$MsoShapeStyleIndex__msoShapeStylePreset26> & Office$MsoShapeStyleIndex__msoShapeStylePreset26 & 26;// 26
static +msoShapeStylePreset27: Class<Office$MsoShapeStyleIndex__msoShapeStylePreset27> & Office$MsoShapeStyleIndex__msoShapeStylePreset27 & 27;// 27
static +msoShapeStylePreset28: Class<Office$MsoShapeStyleIndex__msoShapeStylePreset28> & Office$MsoShapeStyleIndex__msoShapeStylePreset28 & 28;// 28
static +msoShapeStylePreset29: Class<Office$MsoShapeStyleIndex__msoShapeStylePreset29> & Office$MsoShapeStyleIndex__msoShapeStylePreset29 & 29;// 29
static +msoShapeStylePreset3: Class<Office$MsoShapeStyleIndex__msoShapeStylePreset3> & Office$MsoShapeStyleIndex__msoShapeStylePreset3 & 3;// 3
static +msoShapeStylePreset30: Class<Office$MsoShapeStyleIndex__msoShapeStylePreset30> & Office$MsoShapeStyleIndex__msoShapeStylePreset30 & 30;// 30
static +msoShapeStylePreset31: Class<Office$MsoShapeStyleIndex__msoShapeStylePreset31> & Office$MsoShapeStyleIndex__msoShapeStylePreset31 & 31;// 31
static +msoShapeStylePreset32: Class<Office$MsoShapeStyleIndex__msoShapeStylePreset32> & Office$MsoShapeStyleIndex__msoShapeStylePreset32 & 32;// 32
static +msoShapeStylePreset33: Class<Office$MsoShapeStyleIndex__msoShapeStylePreset33> & Office$MsoShapeStyleIndex__msoShapeStylePreset33 & 33;// 33
static +msoShapeStylePreset34: Class<Office$MsoShapeStyleIndex__msoShapeStylePreset34> & Office$MsoShapeStyleIndex__msoShapeStylePreset34 & 34;// 34
static +msoShapeStylePreset35: Class<Office$MsoShapeStyleIndex__msoShapeStylePreset35> & Office$MsoShapeStyleIndex__msoShapeStylePreset35 & 35;// 35
static +msoShapeStylePreset36: Class<Office$MsoShapeStyleIndex__msoShapeStylePreset36> & Office$MsoShapeStyleIndex__msoShapeStylePreset36 & 36;// 36
static +msoShapeStylePreset37: Class<Office$MsoShapeStyleIndex__msoShapeStylePreset37> & Office$MsoShapeStyleIndex__msoShapeStylePreset37 & 37;// 37
static +msoShapeStylePreset38: Class<Office$MsoShapeStyleIndex__msoShapeStylePreset38> & Office$MsoShapeStyleIndex__msoShapeStylePreset38 & 38;// 38
static +msoShapeStylePreset39: Class<Office$MsoShapeStyleIndex__msoShapeStylePreset39> & Office$MsoShapeStyleIndex__msoShapeStylePreset39 & 39;// 39
static +msoShapeStylePreset4: Class<Office$MsoShapeStyleIndex__msoShapeStylePreset4> & Office$MsoShapeStyleIndex__msoShapeStylePreset4 & 4;// 4
static +msoShapeStylePreset40: Class<Office$MsoShapeStyleIndex__msoShapeStylePreset40> & Office$MsoShapeStyleIndex__msoShapeStylePreset40 & 40;// 40
static +msoShapeStylePreset41: Class<Office$MsoShapeStyleIndex__msoShapeStylePreset41> & Office$MsoShapeStyleIndex__msoShapeStylePreset41 & 41;// 41
static +msoShapeStylePreset42: Class<Office$MsoShapeStyleIndex__msoShapeStylePreset42> & Office$MsoShapeStyleIndex__msoShapeStylePreset42 & 42;// 42
static +msoShapeStylePreset43: Class<Office$MsoShapeStyleIndex__msoShapeStylePreset43> & Office$MsoShapeStyleIndex__msoShapeStylePreset43 & 43;// 43
static +msoShapeStylePreset44: Class<Office$MsoShapeStyleIndex__msoShapeStylePreset44> & Office$MsoShapeStyleIndex__msoShapeStylePreset44 & 44;// 44
static +msoShapeStylePreset45: Class<Office$MsoShapeStyleIndex__msoShapeStylePreset45> & Office$MsoShapeStyleIndex__msoShapeStylePreset45 & 45;// 45
static +msoShapeStylePreset46: Class<Office$MsoShapeStyleIndex__msoShapeStylePreset46> & Office$MsoShapeStyleIndex__msoShapeStylePreset46 & 46;// 46
static +msoShapeStylePreset47: Class<Office$MsoShapeStyleIndex__msoShapeStylePreset47> & Office$MsoShapeStyleIndex__msoShapeStylePreset47 & 47;// 47
static +msoShapeStylePreset48: Class<Office$MsoShapeStyleIndex__msoShapeStylePreset48> & Office$MsoShapeStyleIndex__msoShapeStylePreset48 & 48;// 48
static +msoShapeStylePreset49: Class<Office$MsoShapeStyleIndex__msoShapeStylePreset49> & Office$MsoShapeStyleIndex__msoShapeStylePreset49 & 49;// 49
static +msoShapeStylePreset5: Class<Office$MsoShapeStyleIndex__msoShapeStylePreset5> & Office$MsoShapeStyleIndex__msoShapeStylePreset5 & 5;// 5
static +msoShapeStylePreset50: Class<Office$MsoShapeStyleIndex__msoShapeStylePreset50> & Office$MsoShapeStyleIndex__msoShapeStylePreset50 & 50;// 50
static +msoShapeStylePreset51: Class<Office$MsoShapeStyleIndex__msoShapeStylePreset51> & Office$MsoShapeStyleIndex__msoShapeStylePreset51 & 51;// 51
static +msoShapeStylePreset52: Class<Office$MsoShapeStyleIndex__msoShapeStylePreset52> & Office$MsoShapeStyleIndex__msoShapeStylePreset52 & 52;// 52
static +msoShapeStylePreset53: Class<Office$MsoShapeStyleIndex__msoShapeStylePreset53> & Office$MsoShapeStyleIndex__msoShapeStylePreset53 & 53;// 53
static +msoShapeStylePreset54: Class<Office$MsoShapeStyleIndex__msoShapeStylePreset54> & Office$MsoShapeStyleIndex__msoShapeStylePreset54 & 54;// 54
static +msoShapeStylePreset55: Class<Office$MsoShapeStyleIndex__msoShapeStylePreset55> & Office$MsoShapeStyleIndex__msoShapeStylePreset55 & 55;// 55
static +msoShapeStylePreset56: Class<Office$MsoShapeStyleIndex__msoShapeStylePreset56> & Office$MsoShapeStyleIndex__msoShapeStylePreset56 & 56;// 56
static +msoShapeStylePreset57: Class<Office$MsoShapeStyleIndex__msoShapeStylePreset57> & Office$MsoShapeStyleIndex__msoShapeStylePreset57 & 57;// 57
static +msoShapeStylePreset58: Class<Office$MsoShapeStyleIndex__msoShapeStylePreset58> & Office$MsoShapeStyleIndex__msoShapeStylePreset58 & 58;// 58
static +msoShapeStylePreset59: Class<Office$MsoShapeStyleIndex__msoShapeStylePreset59> & Office$MsoShapeStyleIndex__msoShapeStylePreset59 & 59;// 59
static +msoShapeStylePreset6: Class<Office$MsoShapeStyleIndex__msoShapeStylePreset6> & Office$MsoShapeStyleIndex__msoShapeStylePreset6 & 6;// 6
static +msoShapeStylePreset60: Class<Office$MsoShapeStyleIndex__msoShapeStylePreset60> & Office$MsoShapeStyleIndex__msoShapeStylePreset60 & 60;// 60
static +msoShapeStylePreset61: Class<Office$MsoShapeStyleIndex__msoShapeStylePreset61> & Office$MsoShapeStyleIndex__msoShapeStylePreset61 & 61;// 61
static +msoShapeStylePreset62: Class<Office$MsoShapeStyleIndex__msoShapeStylePreset62> & Office$MsoShapeStyleIndex__msoShapeStylePreset62 & 62;// 62
static +msoShapeStylePreset63: Class<Office$MsoShapeStyleIndex__msoShapeStylePreset63> & Office$MsoShapeStyleIndex__msoShapeStylePreset63 & 63;// 63
static +msoShapeStylePreset64: Class<Office$MsoShapeStyleIndex__msoShapeStylePreset64> & Office$MsoShapeStyleIndex__msoShapeStylePreset64 & 64;// 64
static +msoShapeStylePreset65: Class<Office$MsoShapeStyleIndex__msoShapeStylePreset65> & Office$MsoShapeStyleIndex__msoShapeStylePreset65 & 65;// 65
static +msoShapeStylePreset66: Class<Office$MsoShapeStyleIndex__msoShapeStylePreset66> & Office$MsoShapeStyleIndex__msoShapeStylePreset66 & 66;// 66
static +msoShapeStylePreset67: Class<Office$MsoShapeStyleIndex__msoShapeStylePreset67> & Office$MsoShapeStyleIndex__msoShapeStylePreset67 & 67;// 67
static +msoShapeStylePreset68: Class<Office$MsoShapeStyleIndex__msoShapeStylePreset68> & Office$MsoShapeStyleIndex__msoShapeStylePreset68 & 68;// 68
static +msoShapeStylePreset69: Class<Office$MsoShapeStyleIndex__msoShapeStylePreset69> & Office$MsoShapeStyleIndex__msoShapeStylePreset69 & 69;// 69
static +msoShapeStylePreset7: Class<Office$MsoShapeStyleIndex__msoShapeStylePreset7> & Office$MsoShapeStyleIndex__msoShapeStylePreset7 & 7;// 7
static +msoShapeStylePreset70: Class<Office$MsoShapeStyleIndex__msoShapeStylePreset70> & Office$MsoShapeStyleIndex__msoShapeStylePreset70 & 70;// 70
static +msoShapeStylePreset71: Class<Office$MsoShapeStyleIndex__msoShapeStylePreset71> & Office$MsoShapeStyleIndex__msoShapeStylePreset71 & 71;// 71
static +msoShapeStylePreset72: Class<Office$MsoShapeStyleIndex__msoShapeStylePreset72> & Office$MsoShapeStyleIndex__msoShapeStylePreset72 & 72;// 72
static +msoShapeStylePreset73: Class<Office$MsoShapeStyleIndex__msoShapeStylePreset73> & Office$MsoShapeStyleIndex__msoShapeStylePreset73 & 73;// 73
static +msoShapeStylePreset74: Class<Office$MsoShapeStyleIndex__msoShapeStylePreset74> & Office$MsoShapeStyleIndex__msoShapeStylePreset74 & 74;// 74
static +msoShapeStylePreset75: Class<Office$MsoShapeStyleIndex__msoShapeStylePreset75> & Office$MsoShapeStyleIndex__msoShapeStylePreset75 & 75;// 75
static +msoShapeStylePreset76: Class<Office$MsoShapeStyleIndex__msoShapeStylePreset76> & Office$MsoShapeStyleIndex__msoShapeStylePreset76 & 76;// 76
static +msoShapeStylePreset77: Class<Office$MsoShapeStyleIndex__msoShapeStylePreset77> & Office$MsoShapeStyleIndex__msoShapeStylePreset77 & 77;// 77
static +msoShapeStylePreset8: Class<Office$MsoShapeStyleIndex__msoShapeStylePreset8> & Office$MsoShapeStyleIndex__msoShapeStylePreset8 & 8;// 8
static +msoShapeStylePreset9: Class<Office$MsoShapeStyleIndex__msoShapeStylePreset9> & Office$MsoShapeStyleIndex__msoShapeStylePreset9 & 9;// 9

}

declare class Office$MsoShapeStyleIndex__msoLineStylePreset1 mixins Office$MsoShapeStyleIndex {}
declare class Office$MsoShapeStyleIndex__msoLineStylePreset10 mixins Office$MsoShapeStyleIndex {}
declare class Office$MsoShapeStyleIndex__msoLineStylePreset11 mixins Office$MsoShapeStyleIndex {}
declare class Office$MsoShapeStyleIndex__msoLineStylePreset12 mixins Office$MsoShapeStyleIndex {}
declare class Office$MsoShapeStyleIndex__msoLineStylePreset13 mixins Office$MsoShapeStyleIndex {}
declare class Office$MsoShapeStyleIndex__msoLineStylePreset14 mixins Office$MsoShapeStyleIndex {}
declare class Office$MsoShapeStyleIndex__msoLineStylePreset15 mixins Office$MsoShapeStyleIndex {}
declare class Office$MsoShapeStyleIndex__msoLineStylePreset16 mixins Office$MsoShapeStyleIndex {}
declare class Office$MsoShapeStyleIndex__msoLineStylePreset17 mixins Office$MsoShapeStyleIndex {}
declare class Office$MsoShapeStyleIndex__msoLineStylePreset18 mixins Office$MsoShapeStyleIndex {}
declare class Office$MsoShapeStyleIndex__msoLineStylePreset19 mixins Office$MsoShapeStyleIndex {}
declare class Office$MsoShapeStyleIndex__msoLineStylePreset2 mixins Office$MsoShapeStyleIndex {}
declare class Office$MsoShapeStyleIndex__msoLineStylePreset20 mixins Office$MsoShapeStyleIndex {}
declare class Office$MsoShapeStyleIndex__msoLineStylePreset21 mixins Office$MsoShapeStyleIndex {}
declare class Office$MsoShapeStyleIndex__msoLineStylePreset22 mixins Office$MsoShapeStyleIndex {}
declare class Office$MsoShapeStyleIndex__msoLineStylePreset23 mixins Office$MsoShapeStyleIndex {}
declare class Office$MsoShapeStyleIndex__msoLineStylePreset24 mixins Office$MsoShapeStyleIndex {}
declare class Office$MsoShapeStyleIndex__msoLineStylePreset25 mixins Office$MsoShapeStyleIndex {}
declare class Office$MsoShapeStyleIndex__msoLineStylePreset26 mixins Office$MsoShapeStyleIndex {}
declare class Office$MsoShapeStyleIndex__msoLineStylePreset27 mixins Office$MsoShapeStyleIndex {}
declare class Office$MsoShapeStyleIndex__msoLineStylePreset28 mixins Office$MsoShapeStyleIndex {}
declare class Office$MsoShapeStyleIndex__msoLineStylePreset29 mixins Office$MsoShapeStyleIndex {}
declare class Office$MsoShapeStyleIndex__msoLineStylePreset3 mixins Office$MsoShapeStyleIndex {}
declare class Office$MsoShapeStyleIndex__msoLineStylePreset30 mixins Office$MsoShapeStyleIndex {}
declare class Office$MsoShapeStyleIndex__msoLineStylePreset31 mixins Office$MsoShapeStyleIndex {}
declare class Office$MsoShapeStyleIndex__msoLineStylePreset32 mixins Office$MsoShapeStyleIndex {}
declare class Office$MsoShapeStyleIndex__msoLineStylePreset33 mixins Office$MsoShapeStyleIndex {}
declare class Office$MsoShapeStyleIndex__msoLineStylePreset34 mixins Office$MsoShapeStyleIndex {}
declare class Office$MsoShapeStyleIndex__msoLineStylePreset35 mixins Office$MsoShapeStyleIndex {}
declare class Office$MsoShapeStyleIndex__msoLineStylePreset36 mixins Office$MsoShapeStyleIndex {}
declare class Office$MsoShapeStyleIndex__msoLineStylePreset37 mixins Office$MsoShapeStyleIndex {}
declare class Office$MsoShapeStyleIndex__msoLineStylePreset38 mixins Office$MsoShapeStyleIndex {}
declare class Office$MsoShapeStyleIndex__msoLineStylePreset39 mixins Office$MsoShapeStyleIndex {}
declare class Office$MsoShapeStyleIndex__msoLineStylePreset4 mixins Office$MsoShapeStyleIndex {}
declare class Office$MsoShapeStyleIndex__msoLineStylePreset40 mixins Office$MsoShapeStyleIndex {}
declare class Office$MsoShapeStyleIndex__msoLineStylePreset41 mixins Office$MsoShapeStyleIndex {}
declare class Office$MsoShapeStyleIndex__msoLineStylePreset42 mixins Office$MsoShapeStyleIndex {}
declare class Office$MsoShapeStyleIndex__msoLineStylePreset5 mixins Office$MsoShapeStyleIndex {}
declare class Office$MsoShapeStyleIndex__msoLineStylePreset6 mixins Office$MsoShapeStyleIndex {}
declare class Office$MsoShapeStyleIndex__msoLineStylePreset7 mixins Office$MsoShapeStyleIndex {}
declare class Office$MsoShapeStyleIndex__msoLineStylePreset8 mixins Office$MsoShapeStyleIndex {}
declare class Office$MsoShapeStyleIndex__msoLineStylePreset9 mixins Office$MsoShapeStyleIndex {}
declare class Office$MsoShapeStyleIndex__msoShapeStyleMixed mixins Office$MsoShapeStyleIndex {}
declare class Office$MsoShapeStyleIndex__msoShapeStyleNotAPreset mixins Office$MsoShapeStyleIndex {}
declare class Office$MsoShapeStyleIndex__msoShapeStylePreset1 mixins Office$MsoShapeStyleIndex {}
declare class Office$MsoShapeStyleIndex__msoShapeStylePreset10 mixins Office$MsoShapeStyleIndex {}
declare class Office$MsoShapeStyleIndex__msoShapeStylePreset11 mixins Office$MsoShapeStyleIndex {}
declare class Office$MsoShapeStyleIndex__msoShapeStylePreset12 mixins Office$MsoShapeStyleIndex {}
declare class Office$MsoShapeStyleIndex__msoShapeStylePreset13 mixins Office$MsoShapeStyleIndex {}
declare class Office$MsoShapeStyleIndex__msoShapeStylePreset14 mixins Office$MsoShapeStyleIndex {}
declare class Office$MsoShapeStyleIndex__msoShapeStylePreset15 mixins Office$MsoShapeStyleIndex {}
declare class Office$MsoShapeStyleIndex__msoShapeStylePreset16 mixins Office$MsoShapeStyleIndex {}
declare class Office$MsoShapeStyleIndex__msoShapeStylePreset17 mixins Office$MsoShapeStyleIndex {}
declare class Office$MsoShapeStyleIndex__msoShapeStylePreset18 mixins Office$MsoShapeStyleIndex {}
declare class Office$MsoShapeStyleIndex__msoShapeStylePreset19 mixins Office$MsoShapeStyleIndex {}
declare class Office$MsoShapeStyleIndex__msoShapeStylePreset2 mixins Office$MsoShapeStyleIndex {}
declare class Office$MsoShapeStyleIndex__msoShapeStylePreset20 mixins Office$MsoShapeStyleIndex {}
declare class Office$MsoShapeStyleIndex__msoShapeStylePreset21 mixins Office$MsoShapeStyleIndex {}
declare class Office$MsoShapeStyleIndex__msoShapeStylePreset22 mixins Office$MsoShapeStyleIndex {}
declare class Office$MsoShapeStyleIndex__msoShapeStylePreset23 mixins Office$MsoShapeStyleIndex {}
declare class Office$MsoShapeStyleIndex__msoShapeStylePreset24 mixins Office$MsoShapeStyleIndex {}
declare class Office$MsoShapeStyleIndex__msoShapeStylePreset25 mixins Office$MsoShapeStyleIndex {}
declare class Office$MsoShapeStyleIndex__msoShapeStylePreset26 mixins Office$MsoShapeStyleIndex {}
declare class Office$MsoShapeStyleIndex__msoShapeStylePreset27 mixins Office$MsoShapeStyleIndex {}
declare class Office$MsoShapeStyleIndex__msoShapeStylePreset28 mixins Office$MsoShapeStyleIndex {}
declare class Office$MsoShapeStyleIndex__msoShapeStylePreset29 mixins Office$MsoShapeStyleIndex {}
declare class Office$MsoShapeStyleIndex__msoShapeStylePreset3 mixins Office$MsoShapeStyleIndex {}
declare class Office$MsoShapeStyleIndex__msoShapeStylePreset30 mixins Office$MsoShapeStyleIndex {}
declare class Office$MsoShapeStyleIndex__msoShapeStylePreset31 mixins Office$MsoShapeStyleIndex {}
declare class Office$MsoShapeStyleIndex__msoShapeStylePreset32 mixins Office$MsoShapeStyleIndex {}
declare class Office$MsoShapeStyleIndex__msoShapeStylePreset33 mixins Office$MsoShapeStyleIndex {}
declare class Office$MsoShapeStyleIndex__msoShapeStylePreset34 mixins Office$MsoShapeStyleIndex {}
declare class Office$MsoShapeStyleIndex__msoShapeStylePreset35 mixins Office$MsoShapeStyleIndex {}
declare class Office$MsoShapeStyleIndex__msoShapeStylePreset36 mixins Office$MsoShapeStyleIndex {}
declare class Office$MsoShapeStyleIndex__msoShapeStylePreset37 mixins Office$MsoShapeStyleIndex {}
declare class Office$MsoShapeStyleIndex__msoShapeStylePreset38 mixins Office$MsoShapeStyleIndex {}
declare class Office$MsoShapeStyleIndex__msoShapeStylePreset39 mixins Office$MsoShapeStyleIndex {}
declare class Office$MsoShapeStyleIndex__msoShapeStylePreset4 mixins Office$MsoShapeStyleIndex {}
declare class Office$MsoShapeStyleIndex__msoShapeStylePreset40 mixins Office$MsoShapeStyleIndex {}
declare class Office$MsoShapeStyleIndex__msoShapeStylePreset41 mixins Office$MsoShapeStyleIndex {}
declare class Office$MsoShapeStyleIndex__msoShapeStylePreset42 mixins Office$MsoShapeStyleIndex {}
declare class Office$MsoShapeStyleIndex__msoShapeStylePreset43 mixins Office$MsoShapeStyleIndex {}
declare class Office$MsoShapeStyleIndex__msoShapeStylePreset44 mixins Office$MsoShapeStyleIndex {}
declare class Office$MsoShapeStyleIndex__msoShapeStylePreset45 mixins Office$MsoShapeStyleIndex {}
declare class Office$MsoShapeStyleIndex__msoShapeStylePreset46 mixins Office$MsoShapeStyleIndex {}
declare class Office$MsoShapeStyleIndex__msoShapeStylePreset47 mixins Office$MsoShapeStyleIndex {}
declare class Office$MsoShapeStyleIndex__msoShapeStylePreset48 mixins Office$MsoShapeStyleIndex {}
declare class Office$MsoShapeStyleIndex__msoShapeStylePreset49 mixins Office$MsoShapeStyleIndex {}
declare class Office$MsoShapeStyleIndex__msoShapeStylePreset5 mixins Office$MsoShapeStyleIndex {}
declare class Office$MsoShapeStyleIndex__msoShapeStylePreset50 mixins Office$MsoShapeStyleIndex {}
declare class Office$MsoShapeStyleIndex__msoShapeStylePreset51 mixins Office$MsoShapeStyleIndex {}
declare class Office$MsoShapeStyleIndex__msoShapeStylePreset52 mixins Office$MsoShapeStyleIndex {}
declare class Office$MsoShapeStyleIndex__msoShapeStylePreset53 mixins Office$MsoShapeStyleIndex {}
declare class Office$MsoShapeStyleIndex__msoShapeStylePreset54 mixins Office$MsoShapeStyleIndex {}
declare class Office$MsoShapeStyleIndex__msoShapeStylePreset55 mixins Office$MsoShapeStyleIndex {}
declare class Office$MsoShapeStyleIndex__msoShapeStylePreset56 mixins Office$MsoShapeStyleIndex {}
declare class Office$MsoShapeStyleIndex__msoShapeStylePreset57 mixins Office$MsoShapeStyleIndex {}
declare class Office$MsoShapeStyleIndex__msoShapeStylePreset58 mixins Office$MsoShapeStyleIndex {}
declare class Office$MsoShapeStyleIndex__msoShapeStylePreset59 mixins Office$MsoShapeStyleIndex {}
declare class Office$MsoShapeStyleIndex__msoShapeStylePreset6 mixins Office$MsoShapeStyleIndex {}
declare class Office$MsoShapeStyleIndex__msoShapeStylePreset60 mixins Office$MsoShapeStyleIndex {}
declare class Office$MsoShapeStyleIndex__msoShapeStylePreset61 mixins Office$MsoShapeStyleIndex {}
declare class Office$MsoShapeStyleIndex__msoShapeStylePreset62 mixins Office$MsoShapeStyleIndex {}
declare class Office$MsoShapeStyleIndex__msoShapeStylePreset63 mixins Office$MsoShapeStyleIndex {}
declare class Office$MsoShapeStyleIndex__msoShapeStylePreset64 mixins Office$MsoShapeStyleIndex {}
declare class Office$MsoShapeStyleIndex__msoShapeStylePreset65 mixins Office$MsoShapeStyleIndex {}
declare class Office$MsoShapeStyleIndex__msoShapeStylePreset66 mixins Office$MsoShapeStyleIndex {}
declare class Office$MsoShapeStyleIndex__msoShapeStylePreset67 mixins Office$MsoShapeStyleIndex {}
declare class Office$MsoShapeStyleIndex__msoShapeStylePreset68 mixins Office$MsoShapeStyleIndex {}
declare class Office$MsoShapeStyleIndex__msoShapeStylePreset69 mixins Office$MsoShapeStyleIndex {}
declare class Office$MsoShapeStyleIndex__msoShapeStylePreset7 mixins Office$MsoShapeStyleIndex {}
declare class Office$MsoShapeStyleIndex__msoShapeStylePreset70 mixins Office$MsoShapeStyleIndex {}
declare class Office$MsoShapeStyleIndex__msoShapeStylePreset71 mixins Office$MsoShapeStyleIndex {}
declare class Office$MsoShapeStyleIndex__msoShapeStylePreset72 mixins Office$MsoShapeStyleIndex {}
declare class Office$MsoShapeStyleIndex__msoShapeStylePreset73 mixins Office$MsoShapeStyleIndex {}
declare class Office$MsoShapeStyleIndex__msoShapeStylePreset74 mixins Office$MsoShapeStyleIndex {}
declare class Office$MsoShapeStyleIndex__msoShapeStylePreset75 mixins Office$MsoShapeStyleIndex {}
declare class Office$MsoShapeStyleIndex__msoShapeStylePreset76 mixins Office$MsoShapeStyleIndex {}
declare class Office$MsoShapeStyleIndex__msoShapeStylePreset77 mixins Office$MsoShapeStyleIndex {}
declare class Office$MsoShapeStyleIndex__msoShapeStylePreset8 mixins Office$MsoShapeStyleIndex {}
declare class Office$MsoShapeStyleIndex__msoShapeStylePreset9 mixins Office$MsoShapeStyleIndex {}


declare  class Office$MsoShapeType {
  constructor(...args: empty): mixed;
static +msoAutoShape: Class<Office$MsoShapeType__msoAutoShape> & Office$MsoShapeType__msoAutoShape & 1;// 1
static +msoCallout: Class<Office$MsoShapeType__msoCallout> & Office$MsoShapeType__msoCallout & 2;// 2
static +msoCanvas: Class<Office$MsoShapeType__msoCanvas> & Office$MsoShapeType__msoCanvas & 20;// 20
static +msoChart: Class<Office$MsoShapeType__msoChart> & Office$MsoShapeType__msoChart & 3;// 3
static +msoComment: Class<Office$MsoShapeType__msoComment> & Office$MsoShapeType__msoComment & 4;// 4
static +msoContentApp: Class<Office$MsoShapeType__msoContentApp> & Office$MsoShapeType__msoContentApp & 27;// 27
static +msoDiagram: Class<Office$MsoShapeType__msoDiagram> & Office$MsoShapeType__msoDiagram & 21;// 21
static +msoEmbeddedOLEObject: Class<Office$MsoShapeType__msoEmbeddedOLEObject> & Office$MsoShapeType__msoEmbeddedOLEObject & 7;// 7
static +msoFormControl: Class<Office$MsoShapeType__msoFormControl> & Office$MsoShapeType__msoFormControl & 8;// 8
static +msoFreeform: Class<Office$MsoShapeType__msoFreeform> & Office$MsoShapeType__msoFreeform & 5;// 5
static +msoGroup: Class<Office$MsoShapeType__msoGroup> & Office$MsoShapeType__msoGroup & 6;// 6
static +msoInk: Class<Office$MsoShapeType__msoInk> & Office$MsoShapeType__msoInk & 22;// 22
static +msoInkComment: Class<Office$MsoShapeType__msoInkComment> & Office$MsoShapeType__msoInkComment & 23;// 23
static +msoLine: Class<Office$MsoShapeType__msoLine> & Office$MsoShapeType__msoLine & 9;// 9
static +msoLinkedOLEObject: Class<Office$MsoShapeType__msoLinkedOLEObject> & Office$MsoShapeType__msoLinkedOLEObject & 10;// 10
static +msoLinkedPicture: Class<Office$MsoShapeType__msoLinkedPicture> & Office$MsoShapeType__msoLinkedPicture & 11;// 11
static +msoMedia: Class<Office$MsoShapeType__msoMedia> & Office$MsoShapeType__msoMedia & 16;// 16
static +msoOLEControlObject: Class<Office$MsoShapeType__msoOLEControlObject> & Office$MsoShapeType__msoOLEControlObject & 12;// 12
static +msoPicture: Class<Office$MsoShapeType__msoPicture> & Office$MsoShapeType__msoPicture & 13;// 13
static +msoPlaceholder: Class<Office$MsoShapeType__msoPlaceholder> & Office$MsoShapeType__msoPlaceholder & 14;// 14
static +msoScriptAnchor: Class<Office$MsoShapeType__msoScriptAnchor> & Office$MsoShapeType__msoScriptAnchor & 18;// 18
static +msoShapeTypeMixed: Class<Office$MsoShapeType__msoShapeTypeMixed> & Office$MsoShapeType__msoShapeTypeMixed & -2;// -2
static +msoSlicer: Class<Office$MsoShapeType__msoSlicer> & Office$MsoShapeType__msoSlicer & 25;// 25
static +msoSmartArt: Class<Office$MsoShapeType__msoSmartArt> & Office$MsoShapeType__msoSmartArt & 24;// 24
static +msoTable: Class<Office$MsoShapeType__msoTable> & Office$MsoShapeType__msoTable & 19;// 19
static +msoTextBox: Class<Office$MsoShapeType__msoTextBox> & Office$MsoShapeType__msoTextBox & 17;// 17
static +msoTextEffect: Class<Office$MsoShapeType__msoTextEffect> & Office$MsoShapeType__msoTextEffect & 15;// 15
static +msoWebVideo: Class<Office$MsoShapeType__msoWebVideo> & Office$MsoShapeType__msoWebVideo & 26;// 26

}

declare class Office$MsoShapeType__msoAutoShape mixins Office$MsoShapeType {}
declare class Office$MsoShapeType__msoCallout mixins Office$MsoShapeType {}
declare class Office$MsoShapeType__msoCanvas mixins Office$MsoShapeType {}
declare class Office$MsoShapeType__msoChart mixins Office$MsoShapeType {}
declare class Office$MsoShapeType__msoComment mixins Office$MsoShapeType {}
declare class Office$MsoShapeType__msoContentApp mixins Office$MsoShapeType {}
declare class Office$MsoShapeType__msoDiagram mixins Office$MsoShapeType {}
declare class Office$MsoShapeType__msoEmbeddedOLEObject mixins Office$MsoShapeType {}
declare class Office$MsoShapeType__msoFormControl mixins Office$MsoShapeType {}
declare class Office$MsoShapeType__msoFreeform mixins Office$MsoShapeType {}
declare class Office$MsoShapeType__msoGroup mixins Office$MsoShapeType {}
declare class Office$MsoShapeType__msoInk mixins Office$MsoShapeType {}
declare class Office$MsoShapeType__msoInkComment mixins Office$MsoShapeType {}
declare class Office$MsoShapeType__msoLine mixins Office$MsoShapeType {}
declare class Office$MsoShapeType__msoLinkedOLEObject mixins Office$MsoShapeType {}
declare class Office$MsoShapeType__msoLinkedPicture mixins Office$MsoShapeType {}
declare class Office$MsoShapeType__msoMedia mixins Office$MsoShapeType {}
declare class Office$MsoShapeType__msoOLEControlObject mixins Office$MsoShapeType {}
declare class Office$MsoShapeType__msoPicture mixins Office$MsoShapeType {}
declare class Office$MsoShapeType__msoPlaceholder mixins Office$MsoShapeType {}
declare class Office$MsoShapeType__msoScriptAnchor mixins Office$MsoShapeType {}
declare class Office$MsoShapeType__msoShapeTypeMixed mixins Office$MsoShapeType {}
declare class Office$MsoShapeType__msoSlicer mixins Office$MsoShapeType {}
declare class Office$MsoShapeType__msoSmartArt mixins Office$MsoShapeType {}
declare class Office$MsoShapeType__msoTable mixins Office$MsoShapeType {}
declare class Office$MsoShapeType__msoTextBox mixins Office$MsoShapeType {}
declare class Office$MsoShapeType__msoTextEffect mixins Office$MsoShapeType {}
declare class Office$MsoShapeType__msoWebVideo mixins Office$MsoShapeType {}


declare  class Office$MsoSharedWorkspaceTaskPriority {
  constructor(...args: empty): mixed;
static +msoSharedWorkspaceTaskPriorityHigh: Class<Office$MsoSharedWorkspaceTaskPriority__msoSharedWorkspaceTaskPriorityHigh> & Office$MsoSharedWorkspaceTaskPriority__msoSharedWorkspaceTaskPriorityHigh & 1;// 1
static +msoSharedWorkspaceTaskPriorityLow: Class<Office$MsoSharedWorkspaceTaskPriority__msoSharedWorkspaceTaskPriorityLow> & Office$MsoSharedWorkspaceTaskPriority__msoSharedWorkspaceTaskPriorityLow & 3;// 3
static +msoSharedWorkspaceTaskPriorityNormal: Class<Office$MsoSharedWorkspaceTaskPriority__msoSharedWorkspaceTaskPriorityNormal> & Office$MsoSharedWorkspaceTaskPriority__msoSharedWorkspaceTaskPriorityNormal & 2;// 2

}

declare class Office$MsoSharedWorkspaceTaskPriority__msoSharedWorkspaceTaskPriorityHigh mixins Office$MsoSharedWorkspaceTaskPriority {}
declare class Office$MsoSharedWorkspaceTaskPriority__msoSharedWorkspaceTaskPriorityLow mixins Office$MsoSharedWorkspaceTaskPriority {}
declare class Office$MsoSharedWorkspaceTaskPriority__msoSharedWorkspaceTaskPriorityNormal mixins Office$MsoSharedWorkspaceTaskPriority {}


declare  class Office$MsoSharedWorkspaceTaskStatus {
  constructor(...args: empty): mixed;
static +msoSharedWorkspaceTaskStatusCompleted: Class<Office$MsoSharedWorkspaceTaskStatus__msoSharedWorkspaceTaskStatusCompleted> & Office$MsoSharedWorkspaceTaskStatus__msoSharedWorkspaceTaskStatusCompleted & 3;// 3
static +msoSharedWorkspaceTaskStatusDeferred: Class<Office$MsoSharedWorkspaceTaskStatus__msoSharedWorkspaceTaskStatusDeferred> & Office$MsoSharedWorkspaceTaskStatus__msoSharedWorkspaceTaskStatusDeferred & 4;// 4
static +msoSharedWorkspaceTaskStatusInProgress: Class<Office$MsoSharedWorkspaceTaskStatus__msoSharedWorkspaceTaskStatusInProgress> & Office$MsoSharedWorkspaceTaskStatus__msoSharedWorkspaceTaskStatusInProgress & 2;// 2
static +msoSharedWorkspaceTaskStatusNotStarted: Class<Office$MsoSharedWorkspaceTaskStatus__msoSharedWorkspaceTaskStatusNotStarted> & Office$MsoSharedWorkspaceTaskStatus__msoSharedWorkspaceTaskStatusNotStarted & 1;// 1
static +msoSharedWorkspaceTaskStatusWaiting: Class<Office$MsoSharedWorkspaceTaskStatus__msoSharedWorkspaceTaskStatusWaiting> & Office$MsoSharedWorkspaceTaskStatus__msoSharedWorkspaceTaskStatusWaiting & 5;// 5

}

declare class Office$MsoSharedWorkspaceTaskStatus__msoSharedWorkspaceTaskStatusCompleted mixins Office$MsoSharedWorkspaceTaskStatus {}
declare class Office$MsoSharedWorkspaceTaskStatus__msoSharedWorkspaceTaskStatusDeferred mixins Office$MsoSharedWorkspaceTaskStatus {}
declare class Office$MsoSharedWorkspaceTaskStatus__msoSharedWorkspaceTaskStatusInProgress mixins Office$MsoSharedWorkspaceTaskStatus {}
declare class Office$MsoSharedWorkspaceTaskStatus__msoSharedWorkspaceTaskStatusNotStarted mixins Office$MsoSharedWorkspaceTaskStatus {}
declare class Office$MsoSharedWorkspaceTaskStatus__msoSharedWorkspaceTaskStatusWaiting mixins Office$MsoSharedWorkspaceTaskStatus {}


declare  class Office$MsoSignatureSubset {
  constructor(...args: empty): mixed;
static +msoSignatureSubsetAll: Class<Office$MsoSignatureSubset__msoSignatureSubsetAll> & Office$MsoSignatureSubset__msoSignatureSubsetAll & 5;// 5
static +msoSignatureSubsetSignatureLines: Class<Office$MsoSignatureSubset__msoSignatureSubsetSignatureLines> & Office$MsoSignatureSubset__msoSignatureSubsetSignatureLines & 2;// 2
static +msoSignatureSubsetSignatureLinesSigned: Class<Office$MsoSignatureSubset__msoSignatureSubsetSignatureLinesSigned> & Office$MsoSignatureSubset__msoSignatureSubsetSignatureLinesSigned & 3;// 3
static +msoSignatureSubsetSignatureLinesUnsigned: Class<Office$MsoSignatureSubset__msoSignatureSubsetSignatureLinesUnsigned> & Office$MsoSignatureSubset__msoSignatureSubsetSignatureLinesUnsigned & 4;// 4
static +msoSignatureSubsetSignaturesAllSigs: Class<Office$MsoSignatureSubset__msoSignatureSubsetSignaturesAllSigs> & Office$MsoSignatureSubset__msoSignatureSubsetSignaturesAllSigs & 0;// 0
static +msoSignatureSubsetSignaturesNonVisible: Class<Office$MsoSignatureSubset__msoSignatureSubsetSignaturesNonVisible> & Office$MsoSignatureSubset__msoSignatureSubsetSignaturesNonVisible & 1;// 1

}

declare class Office$MsoSignatureSubset__msoSignatureSubsetAll mixins Office$MsoSignatureSubset {}
declare class Office$MsoSignatureSubset__msoSignatureSubsetSignatureLines mixins Office$MsoSignatureSubset {}
declare class Office$MsoSignatureSubset__msoSignatureSubsetSignatureLinesSigned mixins Office$MsoSignatureSubset {}
declare class Office$MsoSignatureSubset__msoSignatureSubsetSignatureLinesUnsigned mixins Office$MsoSignatureSubset {}
declare class Office$MsoSignatureSubset__msoSignatureSubsetSignaturesAllSigs mixins Office$MsoSignatureSubset {}
declare class Office$MsoSignatureSubset__msoSignatureSubsetSignaturesNonVisible mixins Office$MsoSignatureSubset {}


declare  class Office$MsoSmartArtNodePosition {
  constructor(...args: empty): mixed;
static +msoSmartArtNodeAbove: Class<Office$MsoSmartArtNodePosition__msoSmartArtNodeAbove> & Office$MsoSmartArtNodePosition__msoSmartArtNodeAbove & 4;// 4
static +msoSmartArtNodeAfter: Class<Office$MsoSmartArtNodePosition__msoSmartArtNodeAfter> & Office$MsoSmartArtNodePosition__msoSmartArtNodeAfter & 2;// 2
static +msoSmartArtNodeBefore: Class<Office$MsoSmartArtNodePosition__msoSmartArtNodeBefore> & Office$MsoSmartArtNodePosition__msoSmartArtNodeBefore & 3;// 3
static +msoSmartArtNodeBelow: Class<Office$MsoSmartArtNodePosition__msoSmartArtNodeBelow> & Office$MsoSmartArtNodePosition__msoSmartArtNodeBelow & 5;// 5
static +msoSmartArtNodeDefault: Class<Office$MsoSmartArtNodePosition__msoSmartArtNodeDefault> & Office$MsoSmartArtNodePosition__msoSmartArtNodeDefault & 1;// 1

}

declare class Office$MsoSmartArtNodePosition__msoSmartArtNodeAbove mixins Office$MsoSmartArtNodePosition {}
declare class Office$MsoSmartArtNodePosition__msoSmartArtNodeAfter mixins Office$MsoSmartArtNodePosition {}
declare class Office$MsoSmartArtNodePosition__msoSmartArtNodeBefore mixins Office$MsoSmartArtNodePosition {}
declare class Office$MsoSmartArtNodePosition__msoSmartArtNodeBelow mixins Office$MsoSmartArtNodePosition {}
declare class Office$MsoSmartArtNodePosition__msoSmartArtNodeDefault mixins Office$MsoSmartArtNodePosition {}


declare  class Office$MsoSmartArtNodeType {
  constructor(...args: empty): mixed;
static +msoSmartArtNodeTypeAssistant: Class<Office$MsoSmartArtNodeType__msoSmartArtNodeTypeAssistant> & Office$MsoSmartArtNodeType__msoSmartArtNodeTypeAssistant & 2;// 2
static +msoSmartArtNodeTypeDefault: Class<Office$MsoSmartArtNodeType__msoSmartArtNodeTypeDefault> & Office$MsoSmartArtNodeType__msoSmartArtNodeTypeDefault & 1;// 1

}

declare class Office$MsoSmartArtNodeType__msoSmartArtNodeTypeAssistant mixins Office$MsoSmartArtNodeType {}
declare class Office$MsoSmartArtNodeType__msoSmartArtNodeTypeDefault mixins Office$MsoSmartArtNodeType {}


declare  class Office$MsoSoftEdgeType {
  constructor(...args: empty): mixed;
static +msoSoftEdgeType1: Class<Office$MsoSoftEdgeType__msoSoftEdgeType1> & Office$MsoSoftEdgeType__msoSoftEdgeType1 & 1;// 1
static +msoSoftEdgeType2: Class<Office$MsoSoftEdgeType__msoSoftEdgeType2> & Office$MsoSoftEdgeType__msoSoftEdgeType2 & 2;// 2
static +msoSoftEdgeType3: Class<Office$MsoSoftEdgeType__msoSoftEdgeType3> & Office$MsoSoftEdgeType__msoSoftEdgeType3 & 3;// 3
static +msoSoftEdgeType4: Class<Office$MsoSoftEdgeType__msoSoftEdgeType4> & Office$MsoSoftEdgeType__msoSoftEdgeType4 & 4;// 4
static +msoSoftEdgeType5: Class<Office$MsoSoftEdgeType__msoSoftEdgeType5> & Office$MsoSoftEdgeType__msoSoftEdgeType5 & 5;// 5
static +msoSoftEdgeType6: Class<Office$MsoSoftEdgeType__msoSoftEdgeType6> & Office$MsoSoftEdgeType__msoSoftEdgeType6 & 6;// 6
static +msoSoftEdgeTypeMixed: Class<Office$MsoSoftEdgeType__msoSoftEdgeTypeMixed> & Office$MsoSoftEdgeType__msoSoftEdgeTypeMixed & -2;// -2
static +msoSoftEdgeTypeNone: Class<Office$MsoSoftEdgeType__msoSoftEdgeTypeNone> & Office$MsoSoftEdgeType__msoSoftEdgeTypeNone & 0;// 0

}

declare class Office$MsoSoftEdgeType__msoSoftEdgeType1 mixins Office$MsoSoftEdgeType {}
declare class Office$MsoSoftEdgeType__msoSoftEdgeType2 mixins Office$MsoSoftEdgeType {}
declare class Office$MsoSoftEdgeType__msoSoftEdgeType3 mixins Office$MsoSoftEdgeType {}
declare class Office$MsoSoftEdgeType__msoSoftEdgeType4 mixins Office$MsoSoftEdgeType {}
declare class Office$MsoSoftEdgeType__msoSoftEdgeType5 mixins Office$MsoSoftEdgeType {}
declare class Office$MsoSoftEdgeType__msoSoftEdgeType6 mixins Office$MsoSoftEdgeType {}
declare class Office$MsoSoftEdgeType__msoSoftEdgeTypeMixed mixins Office$MsoSoftEdgeType {}
declare class Office$MsoSoftEdgeType__msoSoftEdgeTypeNone mixins Office$MsoSoftEdgeType {}


declare  class Office$MsoSortBy {
  constructor(...args: empty): mixed;
static +msoSortByFileName: Class<Office$MsoSortBy__msoSortByFileName> & Office$MsoSortBy__msoSortByFileName & 1;// 1
static +msoSortByFileType: Class<Office$MsoSortBy__msoSortByFileType> & Office$MsoSortBy__msoSortByFileType & 3;// 3
static +msoSortByLastModified: Class<Office$MsoSortBy__msoSortByLastModified> & Office$MsoSortBy__msoSortByLastModified & 4;// 4
static +msoSortByNone: Class<Office$MsoSortBy__msoSortByNone> & Office$MsoSortBy__msoSortByNone & 5;// 5
static +msoSortBySize: Class<Office$MsoSortBy__msoSortBySize> & Office$MsoSortBy__msoSortBySize & 2;// 2

}

declare class Office$MsoSortBy__msoSortByFileName mixins Office$MsoSortBy {}
declare class Office$MsoSortBy__msoSortByFileType mixins Office$MsoSortBy {}
declare class Office$MsoSortBy__msoSortByLastModified mixins Office$MsoSortBy {}
declare class Office$MsoSortBy__msoSortByNone mixins Office$MsoSortBy {}
declare class Office$MsoSortBy__msoSortBySize mixins Office$MsoSortBy {}


declare  class Office$MsoSortOrder {
  constructor(...args: empty): mixed;
static +msoSortOrderAscending: Class<Office$MsoSortOrder__msoSortOrderAscending> & Office$MsoSortOrder__msoSortOrderAscending & 1;// 1
static +msoSortOrderDescending: Class<Office$MsoSortOrder__msoSortOrderDescending> & Office$MsoSortOrder__msoSortOrderDescending & 2;// 2

}

declare class Office$MsoSortOrder__msoSortOrderAscending mixins Office$MsoSortOrder {}
declare class Office$MsoSortOrder__msoSortOrderDescending mixins Office$MsoSortOrder {}


declare  class Office$MsoSyncAvailableType {
  constructor(...args: empty): mixed;
static +msoSyncAvailableAnywhere: Class<Office$MsoSyncAvailableType__msoSyncAvailableAnywhere> & Office$MsoSyncAvailableType__msoSyncAvailableAnywhere & 2;// 2
static +msoSyncAvailableNone: Class<Office$MsoSyncAvailableType__msoSyncAvailableNone> & Office$MsoSyncAvailableType__msoSyncAvailableNone & 0;// 0
static +msoSyncAvailableOffline: Class<Office$MsoSyncAvailableType__msoSyncAvailableOffline> & Office$MsoSyncAvailableType__msoSyncAvailableOffline & 1;// 1

}

declare class Office$MsoSyncAvailableType__msoSyncAvailableAnywhere mixins Office$MsoSyncAvailableType {}
declare class Office$MsoSyncAvailableType__msoSyncAvailableNone mixins Office$MsoSyncAvailableType {}
declare class Office$MsoSyncAvailableType__msoSyncAvailableOffline mixins Office$MsoSyncAvailableType {}


declare  class Office$MsoSyncCompareType {
  constructor(...args: empty): mixed;
static +msoSyncCompareAndMerge: Class<Office$MsoSyncCompareType__msoSyncCompareAndMerge> & Office$MsoSyncCompareType__msoSyncCompareAndMerge & 0;// 0
static +msoSyncCompareSideBySide: Class<Office$MsoSyncCompareType__msoSyncCompareSideBySide> & Office$MsoSyncCompareType__msoSyncCompareSideBySide & 1;// 1

}

declare class Office$MsoSyncCompareType__msoSyncCompareAndMerge mixins Office$MsoSyncCompareType {}
declare class Office$MsoSyncCompareType__msoSyncCompareSideBySide mixins Office$MsoSyncCompareType {}


declare  class Office$MsoSyncConflictResolutionType {
  constructor(...args: empty): mixed;
static +msoSyncConflictClientWins: Class<Office$MsoSyncConflictResolutionType__msoSyncConflictClientWins> & Office$MsoSyncConflictResolutionType__msoSyncConflictClientWins & 0;// 0
static +msoSyncConflictMerge: Class<Office$MsoSyncConflictResolutionType__msoSyncConflictMerge> & Office$MsoSyncConflictResolutionType__msoSyncConflictMerge & 2;// 2
static +msoSyncConflictServerWins: Class<Office$MsoSyncConflictResolutionType__msoSyncConflictServerWins> & Office$MsoSyncConflictResolutionType__msoSyncConflictServerWins & 1;// 1

}

declare class Office$MsoSyncConflictResolutionType__msoSyncConflictClientWins mixins Office$MsoSyncConflictResolutionType {}
declare class Office$MsoSyncConflictResolutionType__msoSyncConflictMerge mixins Office$MsoSyncConflictResolutionType {}
declare class Office$MsoSyncConflictResolutionType__msoSyncConflictServerWins mixins Office$MsoSyncConflictResolutionType {}


declare  class Office$MsoSyncErrorType {
  constructor(...args: empty): mixed;
static +msoSyncErrorCouldNotCompare: Class<Office$MsoSyncErrorType__msoSyncErrorCouldNotCompare> & Office$MsoSyncErrorType__msoSyncErrorCouldNotCompare & 13;// 13
static +msoSyncErrorCouldNotConnect: Class<Office$MsoSyncErrorType__msoSyncErrorCouldNotConnect> & Office$MsoSyncErrorType__msoSyncErrorCouldNotConnect & 2;// 2
static +msoSyncErrorCouldNotOpen: Class<Office$MsoSyncErrorType__msoSyncErrorCouldNotOpen> & Office$MsoSyncErrorType__msoSyncErrorCouldNotOpen & 11;// 11
static +msoSyncErrorCouldNotResolve: Class<Office$MsoSyncErrorType__msoSyncErrorCouldNotResolve> & Office$MsoSyncErrorType__msoSyncErrorCouldNotResolve & 14;// 14
static +msoSyncErrorCouldNotUpdate: Class<Office$MsoSyncErrorType__msoSyncErrorCouldNotUpdate> & Office$MsoSyncErrorType__msoSyncErrorCouldNotUpdate & 12;// 12
static +msoSyncErrorFileInUse: Class<Office$MsoSyncErrorType__msoSyncErrorFileInUse> & Office$MsoSyncErrorType__msoSyncErrorFileInUse & 6;// 6
static +msoSyncErrorFileNotFound: Class<Office$MsoSyncErrorType__msoSyncErrorFileNotFound> & Office$MsoSyncErrorType__msoSyncErrorFileNotFound & 4;// 4
static +msoSyncErrorFileTooLarge: Class<Office$MsoSyncErrorType__msoSyncErrorFileTooLarge> & Office$MsoSyncErrorType__msoSyncErrorFileTooLarge & 5;// 5
static +msoSyncErrorNone: Class<Office$MsoSyncErrorType__msoSyncErrorNone> & Office$MsoSyncErrorType__msoSyncErrorNone & 0;// 0
static +msoSyncErrorNoNetwork: Class<Office$MsoSyncErrorType__msoSyncErrorNoNetwork> & Office$MsoSyncErrorType__msoSyncErrorNoNetwork & 15;// 15
static +msoSyncErrorOutOfSpace: Class<Office$MsoSyncErrorType__msoSyncErrorOutOfSpace> & Office$MsoSyncErrorType__msoSyncErrorOutOfSpace & 3;// 3
static +msoSyncErrorUnauthorizedUser: Class<Office$MsoSyncErrorType__msoSyncErrorUnauthorizedUser> & Office$MsoSyncErrorType__msoSyncErrorUnauthorizedUser & 1;// 1
static +msoSyncErrorUnknown: Class<Office$MsoSyncErrorType__msoSyncErrorUnknown> & Office$MsoSyncErrorType__msoSyncErrorUnknown & 16;// 16
static +msoSyncErrorUnknownDownload: Class<Office$MsoSyncErrorType__msoSyncErrorUnknownDownload> & Office$MsoSyncErrorType__msoSyncErrorUnknownDownload & 10;// 10
static +msoSyncErrorUnknownUpload: Class<Office$MsoSyncErrorType__msoSyncErrorUnknownUpload> & Office$MsoSyncErrorType__msoSyncErrorUnknownUpload & 9;// 9
static +msoSyncErrorVirusDownload: Class<Office$MsoSyncErrorType__msoSyncErrorVirusDownload> & Office$MsoSyncErrorType__msoSyncErrorVirusDownload & 8;// 8
static +msoSyncErrorVirusUpload: Class<Office$MsoSyncErrorType__msoSyncErrorVirusUpload> & Office$MsoSyncErrorType__msoSyncErrorVirusUpload & 7;// 7

}

declare class Office$MsoSyncErrorType__msoSyncErrorCouldNotCompare mixins Office$MsoSyncErrorType {}
declare class Office$MsoSyncErrorType__msoSyncErrorCouldNotConnect mixins Office$MsoSyncErrorType {}
declare class Office$MsoSyncErrorType__msoSyncErrorCouldNotOpen mixins Office$MsoSyncErrorType {}
declare class Office$MsoSyncErrorType__msoSyncErrorCouldNotResolve mixins Office$MsoSyncErrorType {}
declare class Office$MsoSyncErrorType__msoSyncErrorCouldNotUpdate mixins Office$MsoSyncErrorType {}
declare class Office$MsoSyncErrorType__msoSyncErrorFileInUse mixins Office$MsoSyncErrorType {}
declare class Office$MsoSyncErrorType__msoSyncErrorFileNotFound mixins Office$MsoSyncErrorType {}
declare class Office$MsoSyncErrorType__msoSyncErrorFileTooLarge mixins Office$MsoSyncErrorType {}
declare class Office$MsoSyncErrorType__msoSyncErrorNone mixins Office$MsoSyncErrorType {}
declare class Office$MsoSyncErrorType__msoSyncErrorNoNetwork mixins Office$MsoSyncErrorType {}
declare class Office$MsoSyncErrorType__msoSyncErrorOutOfSpace mixins Office$MsoSyncErrorType {}
declare class Office$MsoSyncErrorType__msoSyncErrorUnauthorizedUser mixins Office$MsoSyncErrorType {}
declare class Office$MsoSyncErrorType__msoSyncErrorUnknown mixins Office$MsoSyncErrorType {}
declare class Office$MsoSyncErrorType__msoSyncErrorUnknownDownload mixins Office$MsoSyncErrorType {}
declare class Office$MsoSyncErrorType__msoSyncErrorUnknownUpload mixins Office$MsoSyncErrorType {}
declare class Office$MsoSyncErrorType__msoSyncErrorVirusDownload mixins Office$MsoSyncErrorType {}
declare class Office$MsoSyncErrorType__msoSyncErrorVirusUpload mixins Office$MsoSyncErrorType {}


declare  class Office$MsoSyncEventType {
  constructor(...args: empty): mixed;
static +msoSyncEventDownloadFailed: Class<Office$MsoSyncEventType__msoSyncEventDownloadFailed> & Office$MsoSyncEventType__msoSyncEventDownloadFailed & 2;// 2
static +msoSyncEventDownloadInitiated: Class<Office$MsoSyncEventType__msoSyncEventDownloadInitiated> & Office$MsoSyncEventType__msoSyncEventDownloadInitiated & 0;// 0
static +msoSyncEventDownloadNoChange: Class<Office$MsoSyncEventType__msoSyncEventDownloadNoChange> & Office$MsoSyncEventType__msoSyncEventDownloadNoChange & 6;// 6
static +msoSyncEventDownloadSucceeded: Class<Office$MsoSyncEventType__msoSyncEventDownloadSucceeded> & Office$MsoSyncEventType__msoSyncEventDownloadSucceeded & 1;// 1
static +msoSyncEventOffline: Class<Office$MsoSyncEventType__msoSyncEventOffline> & Office$MsoSyncEventType__msoSyncEventOffline & 7;// 7
static +msoSyncEventUploadFailed: Class<Office$MsoSyncEventType__msoSyncEventUploadFailed> & Office$MsoSyncEventType__msoSyncEventUploadFailed & 5;// 5
static +msoSyncEventUploadInitiated: Class<Office$MsoSyncEventType__msoSyncEventUploadInitiated> & Office$MsoSyncEventType__msoSyncEventUploadInitiated & 3;// 3
static +msoSyncEventUploadSucceeded: Class<Office$MsoSyncEventType__msoSyncEventUploadSucceeded> & Office$MsoSyncEventType__msoSyncEventUploadSucceeded & 4;// 4

}

declare class Office$MsoSyncEventType__msoSyncEventDownloadFailed mixins Office$MsoSyncEventType {}
declare class Office$MsoSyncEventType__msoSyncEventDownloadInitiated mixins Office$MsoSyncEventType {}
declare class Office$MsoSyncEventType__msoSyncEventDownloadNoChange mixins Office$MsoSyncEventType {}
declare class Office$MsoSyncEventType__msoSyncEventDownloadSucceeded mixins Office$MsoSyncEventType {}
declare class Office$MsoSyncEventType__msoSyncEventOffline mixins Office$MsoSyncEventType {}
declare class Office$MsoSyncEventType__msoSyncEventUploadFailed mixins Office$MsoSyncEventType {}
declare class Office$MsoSyncEventType__msoSyncEventUploadInitiated mixins Office$MsoSyncEventType {}
declare class Office$MsoSyncEventType__msoSyncEventUploadSucceeded mixins Office$MsoSyncEventType {}


declare  class Office$MsoSyncStatusType {
  constructor(...args: empty): mixed;
static +msoSyncStatusConflict: Class<Office$MsoSyncStatusType__msoSyncStatusConflict> & Office$MsoSyncStatusType__msoSyncStatusConflict & 4;// 4
static +msoSyncStatusError: Class<Office$MsoSyncStatusType__msoSyncStatusError> & Office$MsoSyncStatusType__msoSyncStatusError & 6;// 6
static +msoSyncStatusLatest: Class<Office$MsoSyncStatusType__msoSyncStatusLatest> & Office$MsoSyncStatusType__msoSyncStatusLatest & 1;// 1
static +msoSyncStatusLocalChanges: Class<Office$MsoSyncStatusType__msoSyncStatusLocalChanges> & Office$MsoSyncStatusType__msoSyncStatusLocalChanges & 3;// 3
static +msoSyncStatusNewerAvailable: Class<Office$MsoSyncStatusType__msoSyncStatusNewerAvailable> & Office$MsoSyncStatusType__msoSyncStatusNewerAvailable & 2;// 2
static +msoSyncStatusNoSharedWorkspace: Class<Office$MsoSyncStatusType__msoSyncStatusNoSharedWorkspace> & Office$MsoSyncStatusType__msoSyncStatusNoSharedWorkspace & 0;// 0
static +msoSyncStatusNotRoaming: Class<Office$MsoSyncStatusType__msoSyncStatusNotRoaming> & Office$MsoSyncStatusType__msoSyncStatusNotRoaming & 0;// 0
static +msoSyncStatusSuspended: Class<Office$MsoSyncStatusType__msoSyncStatusSuspended> & Office$MsoSyncStatusType__msoSyncStatusSuspended & 5;// 5

}

declare class Office$MsoSyncStatusType__msoSyncStatusConflict mixins Office$MsoSyncStatusType {}
declare class Office$MsoSyncStatusType__msoSyncStatusError mixins Office$MsoSyncStatusType {}
declare class Office$MsoSyncStatusType__msoSyncStatusLatest mixins Office$MsoSyncStatusType {}
declare class Office$MsoSyncStatusType__msoSyncStatusLocalChanges mixins Office$MsoSyncStatusType {}
declare class Office$MsoSyncStatusType__msoSyncStatusNewerAvailable mixins Office$MsoSyncStatusType {}
declare class Office$MsoSyncStatusType__msoSyncStatusNoSharedWorkspace mixins Office$MsoSyncStatusType {}
declare class Office$MsoSyncStatusType__msoSyncStatusNotRoaming mixins Office$MsoSyncStatusType {}
declare class Office$MsoSyncStatusType__msoSyncStatusSuspended mixins Office$MsoSyncStatusType {}


declare  class Office$MsoSyncVersionType {
  constructor(...args: empty): mixed;
static +msoSyncVersionLastViewed: Class<Office$MsoSyncVersionType__msoSyncVersionLastViewed> & Office$MsoSyncVersionType__msoSyncVersionLastViewed & 0;// 0
static +msoSyncVersionServer: Class<Office$MsoSyncVersionType__msoSyncVersionServer> & Office$MsoSyncVersionType__msoSyncVersionServer & 1;// 1

}

declare class Office$MsoSyncVersionType__msoSyncVersionLastViewed mixins Office$MsoSyncVersionType {}
declare class Office$MsoSyncVersionType__msoSyncVersionServer mixins Office$MsoSyncVersionType {}


declare  class Office$MsoTabStopType {
  constructor(...args: empty): mixed;
static +msoTabStopCenter: Class<Office$MsoTabStopType__msoTabStopCenter> & Office$MsoTabStopType__msoTabStopCenter & 2;// 2
static +msoTabStopDecimal: Class<Office$MsoTabStopType__msoTabStopDecimal> & Office$MsoTabStopType__msoTabStopDecimal & 4;// 4
static +msoTabStopLeft: Class<Office$MsoTabStopType__msoTabStopLeft> & Office$MsoTabStopType__msoTabStopLeft & 1;// 1
static +msoTabStopMixed: Class<Office$MsoTabStopType__msoTabStopMixed> & Office$MsoTabStopType__msoTabStopMixed & -2;// -2
static +msoTabStopRight: Class<Office$MsoTabStopType__msoTabStopRight> & Office$MsoTabStopType__msoTabStopRight & 3;// 3

}

declare class Office$MsoTabStopType__msoTabStopCenter mixins Office$MsoTabStopType {}
declare class Office$MsoTabStopType__msoTabStopDecimal mixins Office$MsoTabStopType {}
declare class Office$MsoTabStopType__msoTabStopLeft mixins Office$MsoTabStopType {}
declare class Office$MsoTabStopType__msoTabStopMixed mixins Office$MsoTabStopType {}
declare class Office$MsoTabStopType__msoTabStopRight mixins Office$MsoTabStopType {}


declare  class Office$MsoTargetBrowser {
  constructor(...args: empty): mixed;
static +msoTargetBrowserIE4: Class<Office$MsoTargetBrowser__msoTargetBrowserIE4> & Office$MsoTargetBrowser__msoTargetBrowserIE4 & 2;// 2
static +msoTargetBrowserIE5: Class<Office$MsoTargetBrowser__msoTargetBrowserIE5> & Office$MsoTargetBrowser__msoTargetBrowserIE5 & 3;// 3
static +msoTargetBrowserIE6: Class<Office$MsoTargetBrowser__msoTargetBrowserIE6> & Office$MsoTargetBrowser__msoTargetBrowserIE6 & 4;// 4
static +msoTargetBrowserV3: Class<Office$MsoTargetBrowser__msoTargetBrowserV3> & Office$MsoTargetBrowser__msoTargetBrowserV3 & 0;// 0
static +msoTargetBrowserV4: Class<Office$MsoTargetBrowser__msoTargetBrowserV4> & Office$MsoTargetBrowser__msoTargetBrowserV4 & 1;// 1

}

declare class Office$MsoTargetBrowser__msoTargetBrowserIE4 mixins Office$MsoTargetBrowser {}
declare class Office$MsoTargetBrowser__msoTargetBrowserIE5 mixins Office$MsoTargetBrowser {}
declare class Office$MsoTargetBrowser__msoTargetBrowserIE6 mixins Office$MsoTargetBrowser {}
declare class Office$MsoTargetBrowser__msoTargetBrowserV3 mixins Office$MsoTargetBrowser {}
declare class Office$MsoTargetBrowser__msoTargetBrowserV4 mixins Office$MsoTargetBrowser {}


declare  class Office$MsoTextCaps {
  constructor(...args: empty): mixed;
static +msoAllCaps: Class<Office$MsoTextCaps__msoAllCaps> & Office$MsoTextCaps__msoAllCaps & 2;// 2
static +msoCapsMixed: Class<Office$MsoTextCaps__msoCapsMixed> & Office$MsoTextCaps__msoCapsMixed & -2;// -2
static +msoNoCaps: Class<Office$MsoTextCaps__msoNoCaps> & Office$MsoTextCaps__msoNoCaps & 0;// 0
static +msoSmallCaps: Class<Office$MsoTextCaps__msoSmallCaps> & Office$MsoTextCaps__msoSmallCaps & 1;// 1

}

declare class Office$MsoTextCaps__msoAllCaps mixins Office$MsoTextCaps {}
declare class Office$MsoTextCaps__msoCapsMixed mixins Office$MsoTextCaps {}
declare class Office$MsoTextCaps__msoNoCaps mixins Office$MsoTextCaps {}
declare class Office$MsoTextCaps__msoSmallCaps mixins Office$MsoTextCaps {}


declare  class Office$MsoTextChangeCase {
  constructor(...args: empty): mixed;
static +msoCaseLower: Class<Office$MsoTextChangeCase__msoCaseLower> & Office$MsoTextChangeCase__msoCaseLower & 2;// 2
static +msoCaseSentence: Class<Office$MsoTextChangeCase__msoCaseSentence> & Office$MsoTextChangeCase__msoCaseSentence & 1;// 1
static +msoCaseTitle: Class<Office$MsoTextChangeCase__msoCaseTitle> & Office$MsoTextChangeCase__msoCaseTitle & 4;// 4
static +msoCaseToggle: Class<Office$MsoTextChangeCase__msoCaseToggle> & Office$MsoTextChangeCase__msoCaseToggle & 5;// 5
static +msoCaseUpper: Class<Office$MsoTextChangeCase__msoCaseUpper> & Office$MsoTextChangeCase__msoCaseUpper & 3;// 3

}

declare class Office$MsoTextChangeCase__msoCaseLower mixins Office$MsoTextChangeCase {}
declare class Office$MsoTextChangeCase__msoCaseSentence mixins Office$MsoTextChangeCase {}
declare class Office$MsoTextChangeCase__msoCaseTitle mixins Office$MsoTextChangeCase {}
declare class Office$MsoTextChangeCase__msoCaseToggle mixins Office$MsoTextChangeCase {}
declare class Office$MsoTextChangeCase__msoCaseUpper mixins Office$MsoTextChangeCase {}


declare  class Office$MsoTextCharWrap {
  constructor(...args: empty): mixed;
static +msoCharWrapMixed: Class<Office$MsoTextCharWrap__msoCharWrapMixed> & Office$MsoTextCharWrap__msoCharWrapMixed & -2;// -2
static +msoCustomCharWrap: Class<Office$MsoTextCharWrap__msoCustomCharWrap> & Office$MsoTextCharWrap__msoCustomCharWrap & 3;// 3
static +msoNoCharWrap: Class<Office$MsoTextCharWrap__msoNoCharWrap> & Office$MsoTextCharWrap__msoNoCharWrap & 0;// 0
static +msoStandardCharWrap: Class<Office$MsoTextCharWrap__msoStandardCharWrap> & Office$MsoTextCharWrap__msoStandardCharWrap & 1;// 1
static +msoStrictCharWrap: Class<Office$MsoTextCharWrap__msoStrictCharWrap> & Office$MsoTextCharWrap__msoStrictCharWrap & 2;// 2

}

declare class Office$MsoTextCharWrap__msoCharWrapMixed mixins Office$MsoTextCharWrap {}
declare class Office$MsoTextCharWrap__msoCustomCharWrap mixins Office$MsoTextCharWrap {}
declare class Office$MsoTextCharWrap__msoNoCharWrap mixins Office$MsoTextCharWrap {}
declare class Office$MsoTextCharWrap__msoStandardCharWrap mixins Office$MsoTextCharWrap {}
declare class Office$MsoTextCharWrap__msoStrictCharWrap mixins Office$MsoTextCharWrap {}


declare  class Office$MsoTextDirection {
  constructor(...args: empty): mixed;
static +msoTextDirectionLeftToRight: Class<Office$MsoTextDirection__msoTextDirectionLeftToRight> & Office$MsoTextDirection__msoTextDirectionLeftToRight & 1;// 1
static +msoTextDirectionMixed: Class<Office$MsoTextDirection__msoTextDirectionMixed> & Office$MsoTextDirection__msoTextDirectionMixed & -2;// -2
static +msoTextDirectionRightToLeft: Class<Office$MsoTextDirection__msoTextDirectionRightToLeft> & Office$MsoTextDirection__msoTextDirectionRightToLeft & 2;// 2

}

declare class Office$MsoTextDirection__msoTextDirectionLeftToRight mixins Office$MsoTextDirection {}
declare class Office$MsoTextDirection__msoTextDirectionMixed mixins Office$MsoTextDirection {}
declare class Office$MsoTextDirection__msoTextDirectionRightToLeft mixins Office$MsoTextDirection {}


declare  class Office$MsoTextEffectAlignment {
  constructor(...args: empty): mixed;
static +msoTextEffectAlignmentCentered: Class<Office$MsoTextEffectAlignment__msoTextEffectAlignmentCentered> & Office$MsoTextEffectAlignment__msoTextEffectAlignmentCentered & 2;// 2
static +msoTextEffectAlignmentLeft: Class<Office$MsoTextEffectAlignment__msoTextEffectAlignmentLeft> & Office$MsoTextEffectAlignment__msoTextEffectAlignmentLeft & 1;// 1
static +msoTextEffectAlignmentLetterJustify: Class<Office$MsoTextEffectAlignment__msoTextEffectAlignmentLetterJustify> & Office$MsoTextEffectAlignment__msoTextEffectAlignmentLetterJustify & 4;// 4
static +msoTextEffectAlignmentMixed: Class<Office$MsoTextEffectAlignment__msoTextEffectAlignmentMixed> & Office$MsoTextEffectAlignment__msoTextEffectAlignmentMixed & -2;// -2
static +msoTextEffectAlignmentRight: Class<Office$MsoTextEffectAlignment__msoTextEffectAlignmentRight> & Office$MsoTextEffectAlignment__msoTextEffectAlignmentRight & 3;// 3
static +msoTextEffectAlignmentStretchJustify: Class<Office$MsoTextEffectAlignment__msoTextEffectAlignmentStretchJustify> & Office$MsoTextEffectAlignment__msoTextEffectAlignmentStretchJustify & 6;// 6
static +msoTextEffectAlignmentWordJustify: Class<Office$MsoTextEffectAlignment__msoTextEffectAlignmentWordJustify> & Office$MsoTextEffectAlignment__msoTextEffectAlignmentWordJustify & 5;// 5

}

declare class Office$MsoTextEffectAlignment__msoTextEffectAlignmentCentered mixins Office$MsoTextEffectAlignment {}
declare class Office$MsoTextEffectAlignment__msoTextEffectAlignmentLeft mixins Office$MsoTextEffectAlignment {}
declare class Office$MsoTextEffectAlignment__msoTextEffectAlignmentLetterJustify mixins Office$MsoTextEffectAlignment {}
declare class Office$MsoTextEffectAlignment__msoTextEffectAlignmentMixed mixins Office$MsoTextEffectAlignment {}
declare class Office$MsoTextEffectAlignment__msoTextEffectAlignmentRight mixins Office$MsoTextEffectAlignment {}
declare class Office$MsoTextEffectAlignment__msoTextEffectAlignmentStretchJustify mixins Office$MsoTextEffectAlignment {}
declare class Office$MsoTextEffectAlignment__msoTextEffectAlignmentWordJustify mixins Office$MsoTextEffectAlignment {}


declare  class Office$MsoTextFontAlign {
  constructor(...args: empty): mixed;
static +msoFontAlignAuto: Class<Office$MsoTextFontAlign__msoFontAlignAuto> & Office$MsoTextFontAlign__msoFontAlignAuto & 0;// 0
static +msoFontAlignBaseline: Class<Office$MsoTextFontAlign__msoFontAlignBaseline> & Office$MsoTextFontAlign__msoFontAlignBaseline & 3;// 3
static +msoFontAlignBottom: Class<Office$MsoTextFontAlign__msoFontAlignBottom> & Office$MsoTextFontAlign__msoFontAlignBottom & 4;// 4
static +msoFontAlignCenter: Class<Office$MsoTextFontAlign__msoFontAlignCenter> & Office$MsoTextFontAlign__msoFontAlignCenter & 2;// 2
static +msoFontAlignMixed: Class<Office$MsoTextFontAlign__msoFontAlignMixed> & Office$MsoTextFontAlign__msoFontAlignMixed & -2;// -2
static +msoFontAlignTop: Class<Office$MsoTextFontAlign__msoFontAlignTop> & Office$MsoTextFontAlign__msoFontAlignTop & 1;// 1

}

declare class Office$MsoTextFontAlign__msoFontAlignAuto mixins Office$MsoTextFontAlign {}
declare class Office$MsoTextFontAlign__msoFontAlignBaseline mixins Office$MsoTextFontAlign {}
declare class Office$MsoTextFontAlign__msoFontAlignBottom mixins Office$MsoTextFontAlign {}
declare class Office$MsoTextFontAlign__msoFontAlignCenter mixins Office$MsoTextFontAlign {}
declare class Office$MsoTextFontAlign__msoFontAlignMixed mixins Office$MsoTextFontAlign {}
declare class Office$MsoTextFontAlign__msoFontAlignTop mixins Office$MsoTextFontAlign {}


declare  class Office$MsoTextOrientation {
  constructor(...args: empty): mixed;
static +msoTextOrientationDownward: Class<Office$MsoTextOrientation__msoTextOrientationDownward> & Office$MsoTextOrientation__msoTextOrientationDownward & 3;// 3
static +msoTextOrientationHorizontal: Class<Office$MsoTextOrientation__msoTextOrientationHorizontal> & Office$MsoTextOrientation__msoTextOrientationHorizontal & 1;// 1
static +msoTextOrientationHorizontalRotatedFarEast: Class<Office$MsoTextOrientation__msoTextOrientationHorizontalRotatedFarEast> & Office$MsoTextOrientation__msoTextOrientationHorizontalRotatedFarEast & 6;// 6
static +msoTextOrientationMixed: Class<Office$MsoTextOrientation__msoTextOrientationMixed> & Office$MsoTextOrientation__msoTextOrientationMixed & -2;// -2
static +msoTextOrientationUpward: Class<Office$MsoTextOrientation__msoTextOrientationUpward> & Office$MsoTextOrientation__msoTextOrientationUpward & 2;// 2
static +msoTextOrientationVertical: Class<Office$MsoTextOrientation__msoTextOrientationVertical> & Office$MsoTextOrientation__msoTextOrientationVertical & 5;// 5
static +msoTextOrientationVerticalFarEast: Class<Office$MsoTextOrientation__msoTextOrientationVerticalFarEast> & Office$MsoTextOrientation__msoTextOrientationVerticalFarEast & 4;// 4

}

declare class Office$MsoTextOrientation__msoTextOrientationDownward mixins Office$MsoTextOrientation {}
declare class Office$MsoTextOrientation__msoTextOrientationHorizontal mixins Office$MsoTextOrientation {}
declare class Office$MsoTextOrientation__msoTextOrientationHorizontalRotatedFarEast mixins Office$MsoTextOrientation {}
declare class Office$MsoTextOrientation__msoTextOrientationMixed mixins Office$MsoTextOrientation {}
declare class Office$MsoTextOrientation__msoTextOrientationUpward mixins Office$MsoTextOrientation {}
declare class Office$MsoTextOrientation__msoTextOrientationVertical mixins Office$MsoTextOrientation {}
declare class Office$MsoTextOrientation__msoTextOrientationVerticalFarEast mixins Office$MsoTextOrientation {}


declare  class Office$MsoTextStrike {
  constructor(...args: empty): mixed;
static +msoDoubleStrike: Class<Office$MsoTextStrike__msoDoubleStrike> & Office$MsoTextStrike__msoDoubleStrike & 2;// 2
static +msoNoStrike: Class<Office$MsoTextStrike__msoNoStrike> & Office$MsoTextStrike__msoNoStrike & 0;// 0
static +msoSingleStrike: Class<Office$MsoTextStrike__msoSingleStrike> & Office$MsoTextStrike__msoSingleStrike & 1;// 1
static +msoStrikeMixed: Class<Office$MsoTextStrike__msoStrikeMixed> & Office$MsoTextStrike__msoStrikeMixed & -2;// -2

}

declare class Office$MsoTextStrike__msoDoubleStrike mixins Office$MsoTextStrike {}
declare class Office$MsoTextStrike__msoNoStrike mixins Office$MsoTextStrike {}
declare class Office$MsoTextStrike__msoSingleStrike mixins Office$MsoTextStrike {}
declare class Office$MsoTextStrike__msoStrikeMixed mixins Office$MsoTextStrike {}


declare  class Office$MsoTextTabAlign {
  constructor(...args: empty): mixed;
static +msoTabAlignCenter: Class<Office$MsoTextTabAlign__msoTabAlignCenter> & Office$MsoTextTabAlign__msoTabAlignCenter & 1;// 1
static +msoTabAlignDecimal: Class<Office$MsoTextTabAlign__msoTabAlignDecimal> & Office$MsoTextTabAlign__msoTabAlignDecimal & 3;// 3
static +msoTabAlignLeft: Class<Office$MsoTextTabAlign__msoTabAlignLeft> & Office$MsoTextTabAlign__msoTabAlignLeft & 0;// 0
static +msoTabAlignMixed: Class<Office$MsoTextTabAlign__msoTabAlignMixed> & Office$MsoTextTabAlign__msoTabAlignMixed & -2;// -2
static +msoTabAlignRight: Class<Office$MsoTextTabAlign__msoTabAlignRight> & Office$MsoTextTabAlign__msoTabAlignRight & 2;// 2

}

declare class Office$MsoTextTabAlign__msoTabAlignCenter mixins Office$MsoTextTabAlign {}
declare class Office$MsoTextTabAlign__msoTabAlignDecimal mixins Office$MsoTextTabAlign {}
declare class Office$MsoTextTabAlign__msoTabAlignLeft mixins Office$MsoTextTabAlign {}
declare class Office$MsoTextTabAlign__msoTabAlignMixed mixins Office$MsoTextTabAlign {}
declare class Office$MsoTextTabAlign__msoTabAlignRight mixins Office$MsoTextTabAlign {}


declare  class Office$MsoTextUnderlineType {
  constructor(...args: empty): mixed;
static +msoNoUnderline: Class<Office$MsoTextUnderlineType__msoNoUnderline> & Office$MsoTextUnderlineType__msoNoUnderline & 0;// 0
static +msoUnderlineDashHeavyLine: Class<Office$MsoTextUnderlineType__msoUnderlineDashHeavyLine> & Office$MsoTextUnderlineType__msoUnderlineDashHeavyLine & 8;// 8
static +msoUnderlineDashLine: Class<Office$MsoTextUnderlineType__msoUnderlineDashLine> & Office$MsoTextUnderlineType__msoUnderlineDashLine & 7;// 7
static +msoUnderlineDashLongHeavyLine: Class<Office$MsoTextUnderlineType__msoUnderlineDashLongHeavyLine> & Office$MsoTextUnderlineType__msoUnderlineDashLongHeavyLine & 10;// 10
static +msoUnderlineDashLongLine: Class<Office$MsoTextUnderlineType__msoUnderlineDashLongLine> & Office$MsoTextUnderlineType__msoUnderlineDashLongLine & 9;// 9
static +msoUnderlineDotDashHeavyLine: Class<Office$MsoTextUnderlineType__msoUnderlineDotDashHeavyLine> & Office$MsoTextUnderlineType__msoUnderlineDotDashHeavyLine & 12;// 12
static +msoUnderlineDotDashLine: Class<Office$MsoTextUnderlineType__msoUnderlineDotDashLine> & Office$MsoTextUnderlineType__msoUnderlineDotDashLine & 11;// 11
static +msoUnderlineDotDotDashHeavyLine: Class<Office$MsoTextUnderlineType__msoUnderlineDotDotDashHeavyLine> & Office$MsoTextUnderlineType__msoUnderlineDotDotDashHeavyLine & 14;// 14
static +msoUnderlineDotDotDashLine: Class<Office$MsoTextUnderlineType__msoUnderlineDotDotDashLine> & Office$MsoTextUnderlineType__msoUnderlineDotDotDashLine & 13;// 13
static +msoUnderlineDottedHeavyLine: Class<Office$MsoTextUnderlineType__msoUnderlineDottedHeavyLine> & Office$MsoTextUnderlineType__msoUnderlineDottedHeavyLine & 6;// 6
static +msoUnderlineDottedLine: Class<Office$MsoTextUnderlineType__msoUnderlineDottedLine> & Office$MsoTextUnderlineType__msoUnderlineDottedLine & 5;// 5
static +msoUnderlineDoubleLine: Class<Office$MsoTextUnderlineType__msoUnderlineDoubleLine> & Office$MsoTextUnderlineType__msoUnderlineDoubleLine & 3;// 3
static +msoUnderlineHeavyLine: Class<Office$MsoTextUnderlineType__msoUnderlineHeavyLine> & Office$MsoTextUnderlineType__msoUnderlineHeavyLine & 4;// 4
static +msoUnderlineMixed: Class<Office$MsoTextUnderlineType__msoUnderlineMixed> & Office$MsoTextUnderlineType__msoUnderlineMixed & -2;// -2
static +msoUnderlineSingleLine: Class<Office$MsoTextUnderlineType__msoUnderlineSingleLine> & Office$MsoTextUnderlineType__msoUnderlineSingleLine & 2;// 2
static +msoUnderlineWavyDoubleLine: Class<Office$MsoTextUnderlineType__msoUnderlineWavyDoubleLine> & Office$MsoTextUnderlineType__msoUnderlineWavyDoubleLine & 17;// 17
static +msoUnderlineWavyHeavyLine: Class<Office$MsoTextUnderlineType__msoUnderlineWavyHeavyLine> & Office$MsoTextUnderlineType__msoUnderlineWavyHeavyLine & 16;// 16
static +msoUnderlineWavyLine: Class<Office$MsoTextUnderlineType__msoUnderlineWavyLine> & Office$MsoTextUnderlineType__msoUnderlineWavyLine & 15;// 15
static +msoUnderlineWords: Class<Office$MsoTextUnderlineType__msoUnderlineWords> & Office$MsoTextUnderlineType__msoUnderlineWords & 1;// 1

}

declare class Office$MsoTextUnderlineType__msoNoUnderline mixins Office$MsoTextUnderlineType {}
declare class Office$MsoTextUnderlineType__msoUnderlineDashHeavyLine mixins Office$MsoTextUnderlineType {}
declare class Office$MsoTextUnderlineType__msoUnderlineDashLine mixins Office$MsoTextUnderlineType {}
declare class Office$MsoTextUnderlineType__msoUnderlineDashLongHeavyLine mixins Office$MsoTextUnderlineType {}
declare class Office$MsoTextUnderlineType__msoUnderlineDashLongLine mixins Office$MsoTextUnderlineType {}
declare class Office$MsoTextUnderlineType__msoUnderlineDotDashHeavyLine mixins Office$MsoTextUnderlineType {}
declare class Office$MsoTextUnderlineType__msoUnderlineDotDashLine mixins Office$MsoTextUnderlineType {}
declare class Office$MsoTextUnderlineType__msoUnderlineDotDotDashHeavyLine mixins Office$MsoTextUnderlineType {}
declare class Office$MsoTextUnderlineType__msoUnderlineDotDotDashLine mixins Office$MsoTextUnderlineType {}
declare class Office$MsoTextUnderlineType__msoUnderlineDottedHeavyLine mixins Office$MsoTextUnderlineType {}
declare class Office$MsoTextUnderlineType__msoUnderlineDottedLine mixins Office$MsoTextUnderlineType {}
declare class Office$MsoTextUnderlineType__msoUnderlineDoubleLine mixins Office$MsoTextUnderlineType {}
declare class Office$MsoTextUnderlineType__msoUnderlineHeavyLine mixins Office$MsoTextUnderlineType {}
declare class Office$MsoTextUnderlineType__msoUnderlineMixed mixins Office$MsoTextUnderlineType {}
declare class Office$MsoTextUnderlineType__msoUnderlineSingleLine mixins Office$MsoTextUnderlineType {}
declare class Office$MsoTextUnderlineType__msoUnderlineWavyDoubleLine mixins Office$MsoTextUnderlineType {}
declare class Office$MsoTextUnderlineType__msoUnderlineWavyHeavyLine mixins Office$MsoTextUnderlineType {}
declare class Office$MsoTextUnderlineType__msoUnderlineWavyLine mixins Office$MsoTextUnderlineType {}
declare class Office$MsoTextUnderlineType__msoUnderlineWords mixins Office$MsoTextUnderlineType {}


declare  class Office$MsoTextureAlignment {
  constructor(...args: empty): mixed;
static +msoTextureAlignmentMixed: Class<Office$MsoTextureAlignment__msoTextureAlignmentMixed> & Office$MsoTextureAlignment__msoTextureAlignmentMixed & -2;// -2
static +msoTextureBottom: Class<Office$MsoTextureAlignment__msoTextureBottom> & Office$MsoTextureAlignment__msoTextureBottom & 7;// 7
static +msoTextureBottomLeft: Class<Office$MsoTextureAlignment__msoTextureBottomLeft> & Office$MsoTextureAlignment__msoTextureBottomLeft & 6;// 6
static +msoTextureBottomRight: Class<Office$MsoTextureAlignment__msoTextureBottomRight> & Office$MsoTextureAlignment__msoTextureBottomRight & 8;// 8
static +msoTextureCenter: Class<Office$MsoTextureAlignment__msoTextureCenter> & Office$MsoTextureAlignment__msoTextureCenter & 4;// 4
static +msoTextureLeft: Class<Office$MsoTextureAlignment__msoTextureLeft> & Office$MsoTextureAlignment__msoTextureLeft & 3;// 3
static +msoTextureRight: Class<Office$MsoTextureAlignment__msoTextureRight> & Office$MsoTextureAlignment__msoTextureRight & 5;// 5
static +msoTextureTop: Class<Office$MsoTextureAlignment__msoTextureTop> & Office$MsoTextureAlignment__msoTextureTop & 1;// 1
static +msoTextureTopLeft: Class<Office$MsoTextureAlignment__msoTextureTopLeft> & Office$MsoTextureAlignment__msoTextureTopLeft & 0;// 0
static +msoTextureTopRight: Class<Office$MsoTextureAlignment__msoTextureTopRight> & Office$MsoTextureAlignment__msoTextureTopRight & 2;// 2

}

declare class Office$MsoTextureAlignment__msoTextureAlignmentMixed mixins Office$MsoTextureAlignment {}
declare class Office$MsoTextureAlignment__msoTextureBottom mixins Office$MsoTextureAlignment {}
declare class Office$MsoTextureAlignment__msoTextureBottomLeft mixins Office$MsoTextureAlignment {}
declare class Office$MsoTextureAlignment__msoTextureBottomRight mixins Office$MsoTextureAlignment {}
declare class Office$MsoTextureAlignment__msoTextureCenter mixins Office$MsoTextureAlignment {}
declare class Office$MsoTextureAlignment__msoTextureLeft mixins Office$MsoTextureAlignment {}
declare class Office$MsoTextureAlignment__msoTextureRight mixins Office$MsoTextureAlignment {}
declare class Office$MsoTextureAlignment__msoTextureTop mixins Office$MsoTextureAlignment {}
declare class Office$MsoTextureAlignment__msoTextureTopLeft mixins Office$MsoTextureAlignment {}
declare class Office$MsoTextureAlignment__msoTextureTopRight mixins Office$MsoTextureAlignment {}


declare  class Office$MsoTextureType {
  constructor(...args: empty): mixed;
static +msoTexturePreset: Class<Office$MsoTextureType__msoTexturePreset> & Office$MsoTextureType__msoTexturePreset & 1;// 1
static +msoTextureTypeMixed: Class<Office$MsoTextureType__msoTextureTypeMixed> & Office$MsoTextureType__msoTextureTypeMixed & -2;// -2
static +msoTextureUserDefined: Class<Office$MsoTextureType__msoTextureUserDefined> & Office$MsoTextureType__msoTextureUserDefined & 2;// 2

}

declare class Office$MsoTextureType__msoTexturePreset mixins Office$MsoTextureType {}
declare class Office$MsoTextureType__msoTextureTypeMixed mixins Office$MsoTextureType {}
declare class Office$MsoTextureType__msoTextureUserDefined mixins Office$MsoTextureType {}


declare  class Office$MsoThemeColorIndex {
  constructor(...args: empty): mixed;
static +msoNotThemeColor: Class<Office$MsoThemeColorIndex__msoNotThemeColor> & Office$MsoThemeColorIndex__msoNotThemeColor & 0;// 0
static +msoThemeColorAccent1: Class<Office$MsoThemeColorIndex__msoThemeColorAccent1> & Office$MsoThemeColorIndex__msoThemeColorAccent1 & 5;// 5
static +msoThemeColorAccent2: Class<Office$MsoThemeColorIndex__msoThemeColorAccent2> & Office$MsoThemeColorIndex__msoThemeColorAccent2 & 6;// 6
static +msoThemeColorAccent3: Class<Office$MsoThemeColorIndex__msoThemeColorAccent3> & Office$MsoThemeColorIndex__msoThemeColorAccent3 & 7;// 7
static +msoThemeColorAccent4: Class<Office$MsoThemeColorIndex__msoThemeColorAccent4> & Office$MsoThemeColorIndex__msoThemeColorAccent4 & 8;// 8
static +msoThemeColorAccent5: Class<Office$MsoThemeColorIndex__msoThemeColorAccent5> & Office$MsoThemeColorIndex__msoThemeColorAccent5 & 9;// 9
static +msoThemeColorAccent6: Class<Office$MsoThemeColorIndex__msoThemeColorAccent6> & Office$MsoThemeColorIndex__msoThemeColorAccent6 & 10;// 10
static +msoThemeColorBackground1: Class<Office$MsoThemeColorIndex__msoThemeColorBackground1> & Office$MsoThemeColorIndex__msoThemeColorBackground1 & 14;// 14
static +msoThemeColorBackground2: Class<Office$MsoThemeColorIndex__msoThemeColorBackground2> & Office$MsoThemeColorIndex__msoThemeColorBackground2 & 16;// 16
static +msoThemeColorDark1: Class<Office$MsoThemeColorIndex__msoThemeColorDark1> & Office$MsoThemeColorIndex__msoThemeColorDark1 & 1;// 1
static +msoThemeColorDark2: Class<Office$MsoThemeColorIndex__msoThemeColorDark2> & Office$MsoThemeColorIndex__msoThemeColorDark2 & 3;// 3
static +msoThemeColorFollowedHyperlink: Class<Office$MsoThemeColorIndex__msoThemeColorFollowedHyperlink> & Office$MsoThemeColorIndex__msoThemeColorFollowedHyperlink & 12;// 12
static +msoThemeColorHyperlink: Class<Office$MsoThemeColorIndex__msoThemeColorHyperlink> & Office$MsoThemeColorIndex__msoThemeColorHyperlink & 11;// 11
static +msoThemeColorLight1: Class<Office$MsoThemeColorIndex__msoThemeColorLight1> & Office$MsoThemeColorIndex__msoThemeColorLight1 & 2;// 2
static +msoThemeColorLight2: Class<Office$MsoThemeColorIndex__msoThemeColorLight2> & Office$MsoThemeColorIndex__msoThemeColorLight2 & 4;// 4
static +msoThemeColorMixed: Class<Office$MsoThemeColorIndex__msoThemeColorMixed> & Office$MsoThemeColorIndex__msoThemeColorMixed & -2;// -2
static +msoThemeColorText1: Class<Office$MsoThemeColorIndex__msoThemeColorText1> & Office$MsoThemeColorIndex__msoThemeColorText1 & 13;// 13
static +msoThemeColorText2: Class<Office$MsoThemeColorIndex__msoThemeColorText2> & Office$MsoThemeColorIndex__msoThemeColorText2 & 15;// 15

}

declare class Office$MsoThemeColorIndex__msoNotThemeColor mixins Office$MsoThemeColorIndex {}
declare class Office$MsoThemeColorIndex__msoThemeColorAccent1 mixins Office$MsoThemeColorIndex {}
declare class Office$MsoThemeColorIndex__msoThemeColorAccent2 mixins Office$MsoThemeColorIndex {}
declare class Office$MsoThemeColorIndex__msoThemeColorAccent3 mixins Office$MsoThemeColorIndex {}
declare class Office$MsoThemeColorIndex__msoThemeColorAccent4 mixins Office$MsoThemeColorIndex {}
declare class Office$MsoThemeColorIndex__msoThemeColorAccent5 mixins Office$MsoThemeColorIndex {}
declare class Office$MsoThemeColorIndex__msoThemeColorAccent6 mixins Office$MsoThemeColorIndex {}
declare class Office$MsoThemeColorIndex__msoThemeColorBackground1 mixins Office$MsoThemeColorIndex {}
declare class Office$MsoThemeColorIndex__msoThemeColorBackground2 mixins Office$MsoThemeColorIndex {}
declare class Office$MsoThemeColorIndex__msoThemeColorDark1 mixins Office$MsoThemeColorIndex {}
declare class Office$MsoThemeColorIndex__msoThemeColorDark2 mixins Office$MsoThemeColorIndex {}
declare class Office$MsoThemeColorIndex__msoThemeColorFollowedHyperlink mixins Office$MsoThemeColorIndex {}
declare class Office$MsoThemeColorIndex__msoThemeColorHyperlink mixins Office$MsoThemeColorIndex {}
declare class Office$MsoThemeColorIndex__msoThemeColorLight1 mixins Office$MsoThemeColorIndex {}
declare class Office$MsoThemeColorIndex__msoThemeColorLight2 mixins Office$MsoThemeColorIndex {}
declare class Office$MsoThemeColorIndex__msoThemeColorMixed mixins Office$MsoThemeColorIndex {}
declare class Office$MsoThemeColorIndex__msoThemeColorText1 mixins Office$MsoThemeColorIndex {}
declare class Office$MsoThemeColorIndex__msoThemeColorText2 mixins Office$MsoThemeColorIndex {}


declare  class Office$MsoThemeColorSchemeIndex {
  constructor(...args: empty): mixed;
static +msoThemeAccent1: Class<Office$MsoThemeColorSchemeIndex__msoThemeAccent1> & Office$MsoThemeColorSchemeIndex__msoThemeAccent1 & 5;// 5
static +msoThemeAccent2: Class<Office$MsoThemeColorSchemeIndex__msoThemeAccent2> & Office$MsoThemeColorSchemeIndex__msoThemeAccent2 & 6;// 6
static +msoThemeAccent3: Class<Office$MsoThemeColorSchemeIndex__msoThemeAccent3> & Office$MsoThemeColorSchemeIndex__msoThemeAccent3 & 7;// 7
static +msoThemeAccent4: Class<Office$MsoThemeColorSchemeIndex__msoThemeAccent4> & Office$MsoThemeColorSchemeIndex__msoThemeAccent4 & 8;// 8
static +msoThemeAccent5: Class<Office$MsoThemeColorSchemeIndex__msoThemeAccent5> & Office$MsoThemeColorSchemeIndex__msoThemeAccent5 & 9;// 9
static +msoThemeAccent6: Class<Office$MsoThemeColorSchemeIndex__msoThemeAccent6> & Office$MsoThemeColorSchemeIndex__msoThemeAccent6 & 10;// 10
static +msoThemeDark1: Class<Office$MsoThemeColorSchemeIndex__msoThemeDark1> & Office$MsoThemeColorSchemeIndex__msoThemeDark1 & 1;// 1
static +msoThemeDark2: Class<Office$MsoThemeColorSchemeIndex__msoThemeDark2> & Office$MsoThemeColorSchemeIndex__msoThemeDark2 & 3;// 3
static +msoThemeFollowedHyperlink: Class<Office$MsoThemeColorSchemeIndex__msoThemeFollowedHyperlink> & Office$MsoThemeColorSchemeIndex__msoThemeFollowedHyperlink & 12;// 12
static +msoThemeHyperlink: Class<Office$MsoThemeColorSchemeIndex__msoThemeHyperlink> & Office$MsoThemeColorSchemeIndex__msoThemeHyperlink & 11;// 11
static +msoThemeLight1: Class<Office$MsoThemeColorSchemeIndex__msoThemeLight1> & Office$MsoThemeColorSchemeIndex__msoThemeLight1 & 2;// 2
static +msoThemeLight2: Class<Office$MsoThemeColorSchemeIndex__msoThemeLight2> & Office$MsoThemeColorSchemeIndex__msoThemeLight2 & 4;// 4

}

declare class Office$MsoThemeColorSchemeIndex__msoThemeAccent1 mixins Office$MsoThemeColorSchemeIndex {}
declare class Office$MsoThemeColorSchemeIndex__msoThemeAccent2 mixins Office$MsoThemeColorSchemeIndex {}
declare class Office$MsoThemeColorSchemeIndex__msoThemeAccent3 mixins Office$MsoThemeColorSchemeIndex {}
declare class Office$MsoThemeColorSchemeIndex__msoThemeAccent4 mixins Office$MsoThemeColorSchemeIndex {}
declare class Office$MsoThemeColorSchemeIndex__msoThemeAccent5 mixins Office$MsoThemeColorSchemeIndex {}
declare class Office$MsoThemeColorSchemeIndex__msoThemeAccent6 mixins Office$MsoThemeColorSchemeIndex {}
declare class Office$MsoThemeColorSchemeIndex__msoThemeDark1 mixins Office$MsoThemeColorSchemeIndex {}
declare class Office$MsoThemeColorSchemeIndex__msoThemeDark2 mixins Office$MsoThemeColorSchemeIndex {}
declare class Office$MsoThemeColorSchemeIndex__msoThemeFollowedHyperlink mixins Office$MsoThemeColorSchemeIndex {}
declare class Office$MsoThemeColorSchemeIndex__msoThemeHyperlink mixins Office$MsoThemeColorSchemeIndex {}
declare class Office$MsoThemeColorSchemeIndex__msoThemeLight1 mixins Office$MsoThemeColorSchemeIndex {}
declare class Office$MsoThemeColorSchemeIndex__msoThemeLight2 mixins Office$MsoThemeColorSchemeIndex {}


declare  class Office$MsoTriState {
  constructor(...args: empty): mixed;
static +msoCTrue: Class<Office$MsoTriState__msoCTrue> & Office$MsoTriState__msoCTrue & 1;// 1
static +msoFalse: Class<Office$MsoTriState__msoFalse> & Office$MsoTriState__msoFalse & 0;// 0
static +msoTriStateMixed: Class<Office$MsoTriState__msoTriStateMixed> & Office$MsoTriState__msoTriStateMixed & -2;// -2
static +msoTriStateToggle: Class<Office$MsoTriState__msoTriStateToggle> & Office$MsoTriState__msoTriStateToggle & -3;// -3
static +msoTrue: Class<Office$MsoTriState__msoTrue> & Office$MsoTriState__msoTrue & -1;// -1

}

declare class Office$MsoTriState__msoCTrue mixins Office$MsoTriState {}
declare class Office$MsoTriState__msoFalse mixins Office$MsoTriState {}
declare class Office$MsoTriState__msoTriStateMixed mixins Office$MsoTriState {}
declare class Office$MsoTriState__msoTriStateToggle mixins Office$MsoTriState {}
declare class Office$MsoTriState__msoTrue mixins Office$MsoTriState {}


declare  class Office$MsoVerticalAnchor {
  constructor(...args: empty): mixed;
static +msoAnchorBottom: Class<Office$MsoVerticalAnchor__msoAnchorBottom> & Office$MsoVerticalAnchor__msoAnchorBottom & 4;// 4
static +msoAnchorBottomBaseLine: Class<Office$MsoVerticalAnchor__msoAnchorBottomBaseLine> & Office$MsoVerticalAnchor__msoAnchorBottomBaseLine & 5;// 5
static +msoAnchorMiddle: Class<Office$MsoVerticalAnchor__msoAnchorMiddle> & Office$MsoVerticalAnchor__msoAnchorMiddle & 3;// 3
static +msoAnchorTop: Class<Office$MsoVerticalAnchor__msoAnchorTop> & Office$MsoVerticalAnchor__msoAnchorTop & 1;// 1
static +msoAnchorTopBaseline: Class<Office$MsoVerticalAnchor__msoAnchorTopBaseline> & Office$MsoVerticalAnchor__msoAnchorTopBaseline & 2;// 2
static +msoVerticalAnchorMixed: Class<Office$MsoVerticalAnchor__msoVerticalAnchorMixed> & Office$MsoVerticalAnchor__msoVerticalAnchorMixed & -2;// -2

}

declare class Office$MsoVerticalAnchor__msoAnchorBottom mixins Office$MsoVerticalAnchor {}
declare class Office$MsoVerticalAnchor__msoAnchorBottomBaseLine mixins Office$MsoVerticalAnchor {}
declare class Office$MsoVerticalAnchor__msoAnchorMiddle mixins Office$MsoVerticalAnchor {}
declare class Office$MsoVerticalAnchor__msoAnchorTop mixins Office$MsoVerticalAnchor {}
declare class Office$MsoVerticalAnchor__msoAnchorTopBaseline mixins Office$MsoVerticalAnchor {}
declare class Office$MsoVerticalAnchor__msoVerticalAnchorMixed mixins Office$MsoVerticalAnchor {}


declare  class Office$MsoWarpFormat {
  constructor(...args: empty): mixed;
static +msoWarpFormat1: Class<Office$MsoWarpFormat__msoWarpFormat1> & Office$MsoWarpFormat__msoWarpFormat1 & 0;// 0
static +msoWarpFormat10: Class<Office$MsoWarpFormat__msoWarpFormat10> & Office$MsoWarpFormat__msoWarpFormat10 & 9;// 9
static +msoWarpFormat11: Class<Office$MsoWarpFormat__msoWarpFormat11> & Office$MsoWarpFormat__msoWarpFormat11 & 10;// 10
static +msoWarpFormat12: Class<Office$MsoWarpFormat__msoWarpFormat12> & Office$MsoWarpFormat__msoWarpFormat12 & 11;// 11
static +msoWarpFormat13: Class<Office$MsoWarpFormat__msoWarpFormat13> & Office$MsoWarpFormat__msoWarpFormat13 & 12;// 12
static +msoWarpFormat14: Class<Office$MsoWarpFormat__msoWarpFormat14> & Office$MsoWarpFormat__msoWarpFormat14 & 13;// 13
static +msoWarpFormat15: Class<Office$MsoWarpFormat__msoWarpFormat15> & Office$MsoWarpFormat__msoWarpFormat15 & 14;// 14
static +msoWarpFormat16: Class<Office$MsoWarpFormat__msoWarpFormat16> & Office$MsoWarpFormat__msoWarpFormat16 & 15;// 15
static +msoWarpFormat17: Class<Office$MsoWarpFormat__msoWarpFormat17> & Office$MsoWarpFormat__msoWarpFormat17 & 16;// 16
static +msoWarpFormat18: Class<Office$MsoWarpFormat__msoWarpFormat18> & Office$MsoWarpFormat__msoWarpFormat18 & 17;// 17
static +msoWarpFormat19: Class<Office$MsoWarpFormat__msoWarpFormat19> & Office$MsoWarpFormat__msoWarpFormat19 & 18;// 18
static +msoWarpFormat2: Class<Office$MsoWarpFormat__msoWarpFormat2> & Office$MsoWarpFormat__msoWarpFormat2 & 1;// 1
static +msoWarpFormat20: Class<Office$MsoWarpFormat__msoWarpFormat20> & Office$MsoWarpFormat__msoWarpFormat20 & 19;// 19
static +msoWarpFormat21: Class<Office$MsoWarpFormat__msoWarpFormat21> & Office$MsoWarpFormat__msoWarpFormat21 & 20;// 20
static +msoWarpFormat22: Class<Office$MsoWarpFormat__msoWarpFormat22> & Office$MsoWarpFormat__msoWarpFormat22 & 21;// 21
static +msoWarpFormat23: Class<Office$MsoWarpFormat__msoWarpFormat23> & Office$MsoWarpFormat__msoWarpFormat23 & 22;// 22
static +msoWarpFormat24: Class<Office$MsoWarpFormat__msoWarpFormat24> & Office$MsoWarpFormat__msoWarpFormat24 & 23;// 23
static +msoWarpFormat25: Class<Office$MsoWarpFormat__msoWarpFormat25> & Office$MsoWarpFormat__msoWarpFormat25 & 24;// 24
static +msoWarpFormat26: Class<Office$MsoWarpFormat__msoWarpFormat26> & Office$MsoWarpFormat__msoWarpFormat26 & 25;// 25
static +msoWarpFormat27: Class<Office$MsoWarpFormat__msoWarpFormat27> & Office$MsoWarpFormat__msoWarpFormat27 & 26;// 26
static +msoWarpFormat28: Class<Office$MsoWarpFormat__msoWarpFormat28> & Office$MsoWarpFormat__msoWarpFormat28 & 27;// 27
static +msoWarpFormat29: Class<Office$MsoWarpFormat__msoWarpFormat29> & Office$MsoWarpFormat__msoWarpFormat29 & 28;// 28
static +msoWarpFormat3: Class<Office$MsoWarpFormat__msoWarpFormat3> & Office$MsoWarpFormat__msoWarpFormat3 & 2;// 2
static +msoWarpFormat30: Class<Office$MsoWarpFormat__msoWarpFormat30> & Office$MsoWarpFormat__msoWarpFormat30 & 29;// 29
static +msoWarpFormat31: Class<Office$MsoWarpFormat__msoWarpFormat31> & Office$MsoWarpFormat__msoWarpFormat31 & 30;// 30
static +msoWarpFormat32: Class<Office$MsoWarpFormat__msoWarpFormat32> & Office$MsoWarpFormat__msoWarpFormat32 & 31;// 31
static +msoWarpFormat33: Class<Office$MsoWarpFormat__msoWarpFormat33> & Office$MsoWarpFormat__msoWarpFormat33 & 32;// 32
static +msoWarpFormat34: Class<Office$MsoWarpFormat__msoWarpFormat34> & Office$MsoWarpFormat__msoWarpFormat34 & 33;// 33
static +msoWarpFormat35: Class<Office$MsoWarpFormat__msoWarpFormat35> & Office$MsoWarpFormat__msoWarpFormat35 & 34;// 34
static +msoWarpFormat36: Class<Office$MsoWarpFormat__msoWarpFormat36> & Office$MsoWarpFormat__msoWarpFormat36 & 35;// 35
static +msoWarpFormat37: Class<Office$MsoWarpFormat__msoWarpFormat37> & Office$MsoWarpFormat__msoWarpFormat37 & 36;// 36
static +msoWarpFormat4: Class<Office$MsoWarpFormat__msoWarpFormat4> & Office$MsoWarpFormat__msoWarpFormat4 & 3;// 3
static +msoWarpFormat5: Class<Office$MsoWarpFormat__msoWarpFormat5> & Office$MsoWarpFormat__msoWarpFormat5 & 4;// 4
static +msoWarpFormat6: Class<Office$MsoWarpFormat__msoWarpFormat6> & Office$MsoWarpFormat__msoWarpFormat6 & 5;// 5
static +msoWarpFormat7: Class<Office$MsoWarpFormat__msoWarpFormat7> & Office$MsoWarpFormat__msoWarpFormat7 & 6;// 6
static +msoWarpFormat8: Class<Office$MsoWarpFormat__msoWarpFormat8> & Office$MsoWarpFormat__msoWarpFormat8 & 7;// 7
static +msoWarpFormat9: Class<Office$MsoWarpFormat__msoWarpFormat9> & Office$MsoWarpFormat__msoWarpFormat9 & 8;// 8
static +msoWarpFormatMixed: Class<Office$MsoWarpFormat__msoWarpFormatMixed> & Office$MsoWarpFormat__msoWarpFormatMixed & -2;// -2

}

declare class Office$MsoWarpFormat__msoWarpFormat1 mixins Office$MsoWarpFormat {}
declare class Office$MsoWarpFormat__msoWarpFormat10 mixins Office$MsoWarpFormat {}
declare class Office$MsoWarpFormat__msoWarpFormat11 mixins Office$MsoWarpFormat {}
declare class Office$MsoWarpFormat__msoWarpFormat12 mixins Office$MsoWarpFormat {}
declare class Office$MsoWarpFormat__msoWarpFormat13 mixins Office$MsoWarpFormat {}
declare class Office$MsoWarpFormat__msoWarpFormat14 mixins Office$MsoWarpFormat {}
declare class Office$MsoWarpFormat__msoWarpFormat15 mixins Office$MsoWarpFormat {}
declare class Office$MsoWarpFormat__msoWarpFormat16 mixins Office$MsoWarpFormat {}
declare class Office$MsoWarpFormat__msoWarpFormat17 mixins Office$MsoWarpFormat {}
declare class Office$MsoWarpFormat__msoWarpFormat18 mixins Office$MsoWarpFormat {}
declare class Office$MsoWarpFormat__msoWarpFormat19 mixins Office$MsoWarpFormat {}
declare class Office$MsoWarpFormat__msoWarpFormat2 mixins Office$MsoWarpFormat {}
declare class Office$MsoWarpFormat__msoWarpFormat20 mixins Office$MsoWarpFormat {}
declare class Office$MsoWarpFormat__msoWarpFormat21 mixins Office$MsoWarpFormat {}
declare class Office$MsoWarpFormat__msoWarpFormat22 mixins Office$MsoWarpFormat {}
declare class Office$MsoWarpFormat__msoWarpFormat23 mixins Office$MsoWarpFormat {}
declare class Office$MsoWarpFormat__msoWarpFormat24 mixins Office$MsoWarpFormat {}
declare class Office$MsoWarpFormat__msoWarpFormat25 mixins Office$MsoWarpFormat {}
declare class Office$MsoWarpFormat__msoWarpFormat26 mixins Office$MsoWarpFormat {}
declare class Office$MsoWarpFormat__msoWarpFormat27 mixins Office$MsoWarpFormat {}
declare class Office$MsoWarpFormat__msoWarpFormat28 mixins Office$MsoWarpFormat {}
declare class Office$MsoWarpFormat__msoWarpFormat29 mixins Office$MsoWarpFormat {}
declare class Office$MsoWarpFormat__msoWarpFormat3 mixins Office$MsoWarpFormat {}
declare class Office$MsoWarpFormat__msoWarpFormat30 mixins Office$MsoWarpFormat {}
declare class Office$MsoWarpFormat__msoWarpFormat31 mixins Office$MsoWarpFormat {}
declare class Office$MsoWarpFormat__msoWarpFormat32 mixins Office$MsoWarpFormat {}
declare class Office$MsoWarpFormat__msoWarpFormat33 mixins Office$MsoWarpFormat {}
declare class Office$MsoWarpFormat__msoWarpFormat34 mixins Office$MsoWarpFormat {}
declare class Office$MsoWarpFormat__msoWarpFormat35 mixins Office$MsoWarpFormat {}
declare class Office$MsoWarpFormat__msoWarpFormat36 mixins Office$MsoWarpFormat {}
declare class Office$MsoWarpFormat__msoWarpFormat37 mixins Office$MsoWarpFormat {}
declare class Office$MsoWarpFormat__msoWarpFormat4 mixins Office$MsoWarpFormat {}
declare class Office$MsoWarpFormat__msoWarpFormat5 mixins Office$MsoWarpFormat {}
declare class Office$MsoWarpFormat__msoWarpFormat6 mixins Office$MsoWarpFormat {}
declare class Office$MsoWarpFormat__msoWarpFormat7 mixins Office$MsoWarpFormat {}
declare class Office$MsoWarpFormat__msoWarpFormat8 mixins Office$MsoWarpFormat {}
declare class Office$MsoWarpFormat__msoWarpFormat9 mixins Office$MsoWarpFormat {}
declare class Office$MsoWarpFormat__msoWarpFormatMixed mixins Office$MsoWarpFormat {}


declare  class Office$MsoWizardActType {
  constructor(...args: empty): mixed;
static +msoWizardActActive: Class<Office$MsoWizardActType__msoWizardActActive> & Office$MsoWizardActType__msoWizardActActive & 1;// 1
static +msoWizardActInactive: Class<Office$MsoWizardActType__msoWizardActInactive> & Office$MsoWizardActType__msoWizardActInactive & 0;// 0
static +msoWizardActResume: Class<Office$MsoWizardActType__msoWizardActResume> & Office$MsoWizardActType__msoWizardActResume & 3;// 3
static +msoWizardActSuspend: Class<Office$MsoWizardActType__msoWizardActSuspend> & Office$MsoWizardActType__msoWizardActSuspend & 2;// 2

}

declare class Office$MsoWizardActType__msoWizardActActive mixins Office$MsoWizardActType {}
declare class Office$MsoWizardActType__msoWizardActInactive mixins Office$MsoWizardActType {}
declare class Office$MsoWizardActType__msoWizardActResume mixins Office$MsoWizardActType {}
declare class Office$MsoWizardActType__msoWizardActSuspend mixins Office$MsoWizardActType {}


declare  class Office$MsoWizardMsgType {
  constructor(...args: empty): mixed;
static +msoWizardMsgLocalStateOff: Class<Office$MsoWizardMsgType__msoWizardMsgLocalStateOff> & Office$MsoWizardMsgType__msoWizardMsgLocalStateOff & 2;// 2
static +msoWizardMsgLocalStateOn: Class<Office$MsoWizardMsgType__msoWizardMsgLocalStateOn> & Office$MsoWizardMsgType__msoWizardMsgLocalStateOn & 1;// 1
static +msoWizardMsgResuming: Class<Office$MsoWizardMsgType__msoWizardMsgResuming> & Office$MsoWizardMsgType__msoWizardMsgResuming & 5;// 5
static +msoWizardMsgShowHelp: Class<Office$MsoWizardMsgType__msoWizardMsgShowHelp> & Office$MsoWizardMsgType__msoWizardMsgShowHelp & 3;// 3
static +msoWizardMsgSuspending: Class<Office$MsoWizardMsgType__msoWizardMsgSuspending> & Office$MsoWizardMsgType__msoWizardMsgSuspending & 4;// 4

}

declare class Office$MsoWizardMsgType__msoWizardMsgLocalStateOff mixins Office$MsoWizardMsgType {}
declare class Office$MsoWizardMsgType__msoWizardMsgLocalStateOn mixins Office$MsoWizardMsgType {}
declare class Office$MsoWizardMsgType__msoWizardMsgResuming mixins Office$MsoWizardMsgType {}
declare class Office$MsoWizardMsgType__msoWizardMsgShowHelp mixins Office$MsoWizardMsgType {}
declare class Office$MsoWizardMsgType__msoWizardMsgSuspending mixins Office$MsoWizardMsgType {}


declare  class Office$MsoZOrderCmd {
  constructor(...args: empty): mixed;
static +msoBringForward: Class<Office$MsoZOrderCmd__msoBringForward> & Office$MsoZOrderCmd__msoBringForward & 2;// 2
static +msoBringInFrontOfText: Class<Office$MsoZOrderCmd__msoBringInFrontOfText> & Office$MsoZOrderCmd__msoBringInFrontOfText & 4;// 4
static +msoBringToFront: Class<Office$MsoZOrderCmd__msoBringToFront> & Office$MsoZOrderCmd__msoBringToFront & 0;// 0
static +msoSendBackward: Class<Office$MsoZOrderCmd__msoSendBackward> & Office$MsoZOrderCmd__msoSendBackward & 3;// 3
static +msoSendBehindText: Class<Office$MsoZOrderCmd__msoSendBehindText> & Office$MsoZOrderCmd__msoSendBehindText & 5;// 5
static +msoSendToBack: Class<Office$MsoZOrderCmd__msoSendToBack> & Office$MsoZOrderCmd__msoSendToBack & 1;// 1

}

declare class Office$MsoZOrderCmd__msoBringForward mixins Office$MsoZOrderCmd {}
declare class Office$MsoZOrderCmd__msoBringInFrontOfText mixins Office$MsoZOrderCmd {}
declare class Office$MsoZOrderCmd__msoBringToFront mixins Office$MsoZOrderCmd {}
declare class Office$MsoZOrderCmd__msoSendBackward mixins Office$MsoZOrderCmd {}
declare class Office$MsoZOrderCmd__msoSendBehindText mixins Office$MsoZOrderCmd {}
declare class Office$MsoZOrderCmd__msoSendToBack mixins Office$MsoZOrderCmd {}


declare  class Office$RibbonControlSize {
  constructor(...args: empty): mixed;
static +RibbonControlSizeLarge: Class<Office$RibbonControlSize__RibbonControlSizeLarge> & Office$RibbonControlSize__RibbonControlSizeLarge & 1;// 1
static +RibbonControlSizeRegular: Class<Office$RibbonControlSize__RibbonControlSizeRegular> & Office$RibbonControlSize__RibbonControlSizeRegular & 0;// 0

}

declare class Office$RibbonControlSize__RibbonControlSizeLarge mixins Office$RibbonControlSize {}
declare class Office$RibbonControlSize__RibbonControlSizeRegular mixins Office$RibbonControlSize {}


declare  class Office$SignatureDetail {
  constructor(...args: empty): mixed;
static +sigdetApplicationName: Class<Office$SignatureDetail__sigdetApplicationName> & Office$SignatureDetail__sigdetApplicationName & 1;// 1
static +sigdetApplicationVersion: Class<Office$SignatureDetail__sigdetApplicationVersion> & Office$SignatureDetail__sigdetApplicationVersion & 2;// 2
static +sigdetColorDepth: Class<Office$SignatureDetail__sigdetColorDepth> & Office$SignatureDetail__sigdetColorDepth & 8;// 8
static +sigdetDelSuggSigner: Class<Office$SignatureDetail__sigdetDelSuggSigner> & Office$SignatureDetail__sigdetDelSuggSigner & 16;// 16
static +sigdetDelSuggSignerEmail: Class<Office$SignatureDetail__sigdetDelSuggSignerEmail> & Office$SignatureDetail__sigdetDelSuggSignerEmail & 20;// 20
static +sigdetDelSuggSignerEmailSet: Class<Office$SignatureDetail__sigdetDelSuggSignerEmailSet> & Office$SignatureDetail__sigdetDelSuggSignerEmailSet & 21;// 21
static +sigdetDelSuggSignerLine2: Class<Office$SignatureDetail__sigdetDelSuggSignerLine2> & Office$SignatureDetail__sigdetDelSuggSignerLine2 & 18;// 18
static +sigdetDelSuggSignerLine2Set: Class<Office$SignatureDetail__sigdetDelSuggSignerLine2Set> & Office$SignatureDetail__sigdetDelSuggSignerLine2Set & 19;// 19
static +sigdetDelSuggSignerSet: Class<Office$SignatureDetail__sigdetDelSuggSignerSet> & Office$SignatureDetail__sigdetDelSuggSignerSet & 17;// 17
static +sigdetDocPreviewImg: Class<Office$SignatureDetail__sigdetDocPreviewImg> & Office$SignatureDetail__sigdetDocPreviewImg & 10;// 10
static +sigdetHashAlgorithm: Class<Office$SignatureDetail__sigdetHashAlgorithm> & Office$SignatureDetail__sigdetHashAlgorithm & 14;// 14
static +sigdetHorizResolution: Class<Office$SignatureDetail__sigdetHorizResolution> & Office$SignatureDetail__sigdetHorizResolution & 6;// 6
static +sigdetIPCurrentView: Class<Office$SignatureDetail__sigdetIPCurrentView> & Office$SignatureDetail__sigdetIPCurrentView & 12;// 12
static +sigdetIPFormHash: Class<Office$SignatureDetail__sigdetIPFormHash> & Office$SignatureDetail__sigdetIPFormHash & 11;// 11
static +sigdetLocalSigningTime: Class<Office$SignatureDetail__sigdetLocalSigningTime> & Office$SignatureDetail__sigdetLocalSigningTime & 0;// 0
static +sigdetNumberOfMonitors: Class<Office$SignatureDetail__sigdetNumberOfMonitors> & Office$SignatureDetail__sigdetNumberOfMonitors & 5;// 5
static +sigdetOfficeVersion: Class<Office$SignatureDetail__sigdetOfficeVersion> & Office$SignatureDetail__sigdetOfficeVersion & 3;// 3
static +sigdetShouldShowViewWarning: Class<Office$SignatureDetail__sigdetShouldShowViewWarning> & Office$SignatureDetail__sigdetShouldShowViewWarning & 15;// 15
static +sigdetSignatureType: Class<Office$SignatureDetail__sigdetSignatureType> & Office$SignatureDetail__sigdetSignatureType & 13;// 13
static +sigdetSignedData: Class<Office$SignatureDetail__sigdetSignedData> & Office$SignatureDetail__sigdetSignedData & 9;// 9
static +sigdetVertResolution: Class<Office$SignatureDetail__sigdetVertResolution> & Office$SignatureDetail__sigdetVertResolution & 7;// 7
static +sigdetWindowsVersion: Class<Office$SignatureDetail__sigdetWindowsVersion> & Office$SignatureDetail__sigdetWindowsVersion & 4;// 4

}

declare class Office$SignatureDetail__sigdetApplicationName mixins Office$SignatureDetail {}
declare class Office$SignatureDetail__sigdetApplicationVersion mixins Office$SignatureDetail {}
declare class Office$SignatureDetail__sigdetColorDepth mixins Office$SignatureDetail {}
declare class Office$SignatureDetail__sigdetDelSuggSigner mixins Office$SignatureDetail {}
declare class Office$SignatureDetail__sigdetDelSuggSignerEmail mixins Office$SignatureDetail {}
declare class Office$SignatureDetail__sigdetDelSuggSignerEmailSet mixins Office$SignatureDetail {}
declare class Office$SignatureDetail__sigdetDelSuggSignerLine2 mixins Office$SignatureDetail {}
declare class Office$SignatureDetail__sigdetDelSuggSignerLine2Set mixins Office$SignatureDetail {}
declare class Office$SignatureDetail__sigdetDelSuggSignerSet mixins Office$SignatureDetail {}
declare class Office$SignatureDetail__sigdetDocPreviewImg mixins Office$SignatureDetail {}
declare class Office$SignatureDetail__sigdetHashAlgorithm mixins Office$SignatureDetail {}
declare class Office$SignatureDetail__sigdetHorizResolution mixins Office$SignatureDetail {}
declare class Office$SignatureDetail__sigdetIPCurrentView mixins Office$SignatureDetail {}
declare class Office$SignatureDetail__sigdetIPFormHash mixins Office$SignatureDetail {}
declare class Office$SignatureDetail__sigdetLocalSigningTime mixins Office$SignatureDetail {}
declare class Office$SignatureDetail__sigdetNumberOfMonitors mixins Office$SignatureDetail {}
declare class Office$SignatureDetail__sigdetOfficeVersion mixins Office$SignatureDetail {}
declare class Office$SignatureDetail__sigdetShouldShowViewWarning mixins Office$SignatureDetail {}
declare class Office$SignatureDetail__sigdetSignatureType mixins Office$SignatureDetail {}
declare class Office$SignatureDetail__sigdetSignedData mixins Office$SignatureDetail {}
declare class Office$SignatureDetail__sigdetVertResolution mixins Office$SignatureDetail {}
declare class Office$SignatureDetail__sigdetWindowsVersion mixins Office$SignatureDetail {}


declare  class Office$SignatureLineImage {
  constructor(...args: empty): mixed;
static +siglnimgSigned: Class<Office$SignatureLineImage__siglnimgSigned> & Office$SignatureLineImage__siglnimgSigned & 4;// 4
static +siglnimgSignedInvalid: Class<Office$SignatureLineImage__siglnimgSignedInvalid> & Office$SignatureLineImage__siglnimgSignedInvalid & 3;// 3
static +siglnimgSignedValid: Class<Office$SignatureLineImage__siglnimgSignedValid> & Office$SignatureLineImage__siglnimgSignedValid & 2;// 2
static +siglnimgSoftwareRequired: Class<Office$SignatureLineImage__siglnimgSoftwareRequired> & Office$SignatureLineImage__siglnimgSoftwareRequired & 0;// 0
static +siglnimgUnsigned: Class<Office$SignatureLineImage__siglnimgUnsigned> & Office$SignatureLineImage__siglnimgUnsigned & 1;// 1

}

declare class Office$SignatureLineImage__siglnimgSigned mixins Office$SignatureLineImage {}
declare class Office$SignatureLineImage__siglnimgSignedInvalid mixins Office$SignatureLineImage {}
declare class Office$SignatureLineImage__siglnimgSignedValid mixins Office$SignatureLineImage {}
declare class Office$SignatureLineImage__siglnimgSoftwareRequired mixins Office$SignatureLineImage {}
declare class Office$SignatureLineImage__siglnimgUnsigned mixins Office$SignatureLineImage {}


declare  class Office$SignatureProviderDetail {
  constructor(...args: empty): mixed;
static +sigprovdetHashAlgorithm: Class<Office$SignatureProviderDetail__sigprovdetHashAlgorithm> & Office$SignatureProviderDetail__sigprovdetHashAlgorithm & 1;// 1
static +sigprovdetUIOnly: Class<Office$SignatureProviderDetail__sigprovdetUIOnly> & Office$SignatureProviderDetail__sigprovdetUIOnly & 2;// 2
static +sigprovdetUrl: Class<Office$SignatureProviderDetail__sigprovdetUrl> & Office$SignatureProviderDetail__sigprovdetUrl & 0;// 0
static +sigprovdetUseOfficeStampUI: Class<Office$SignatureProviderDetail__sigprovdetUseOfficeStampUI> & Office$SignatureProviderDetail__sigprovdetUseOfficeStampUI & 4;// 4
static +sigprovdetUseOfficeUI: Class<Office$SignatureProviderDetail__sigprovdetUseOfficeUI> & Office$SignatureProviderDetail__sigprovdetUseOfficeUI & 3;// 3

}

declare class Office$SignatureProviderDetail__sigprovdetHashAlgorithm mixins Office$SignatureProviderDetail {}
declare class Office$SignatureProviderDetail__sigprovdetUIOnly mixins Office$SignatureProviderDetail {}
declare class Office$SignatureProviderDetail__sigprovdetUrl mixins Office$SignatureProviderDetail {}
declare class Office$SignatureProviderDetail__sigprovdetUseOfficeStampUI mixins Office$SignatureProviderDetail {}
declare class Office$SignatureProviderDetail__sigprovdetUseOfficeUI mixins Office$SignatureProviderDetail {}


declare  class Office$SignatureType {
  constructor(...args: empty): mixed;
static +sigtypeMax: Class<Office$SignatureType__sigtypeMax> & Office$SignatureType__sigtypeMax & 3;// 3
static +sigtypeNonVisible: Class<Office$SignatureType__sigtypeNonVisible> & Office$SignatureType__sigtypeNonVisible & 1;// 1
static +sigtypeSignatureLine: Class<Office$SignatureType__sigtypeSignatureLine> & Office$SignatureType__sigtypeSignatureLine & 2;// 2
static +sigtypeUnknown: Class<Office$SignatureType__sigtypeUnknown> & Office$SignatureType__sigtypeUnknown & 0;// 0

}

declare class Office$SignatureType__sigtypeMax mixins Office$SignatureType {}
declare class Office$SignatureType__sigtypeNonVisible mixins Office$SignatureType {}
declare class Office$SignatureType__sigtypeSignatureLine mixins Office$SignatureType {}
declare class Office$SignatureType__sigtypeUnknown mixins Office$SignatureType {}


declare  class Office$XlAxisCrosses {
  constructor(...args: empty): mixed;
static +xlAxisCrossesAutomatic: Class<Office$XlAxisCrosses__xlAxisCrossesAutomatic> & Office$XlAxisCrosses__xlAxisCrossesAutomatic & -4105;// -4105
static +xlAxisCrossesCustom: Class<Office$XlAxisCrosses__xlAxisCrossesCustom> & Office$XlAxisCrosses__xlAxisCrossesCustom & -4114;// -4114
static +xlAxisCrossesMaximum: Class<Office$XlAxisCrosses__xlAxisCrossesMaximum> & Office$XlAxisCrosses__xlAxisCrossesMaximum & 2;// 2
static +xlAxisCrossesMinimum: Class<Office$XlAxisCrosses__xlAxisCrossesMinimum> & Office$XlAxisCrosses__xlAxisCrossesMinimum & 4;// 4

}

declare class Office$XlAxisCrosses__xlAxisCrossesAutomatic mixins Office$XlAxisCrosses {}
declare class Office$XlAxisCrosses__xlAxisCrossesCustom mixins Office$XlAxisCrosses {}
declare class Office$XlAxisCrosses__xlAxisCrossesMaximum mixins Office$XlAxisCrosses {}
declare class Office$XlAxisCrosses__xlAxisCrossesMinimum mixins Office$XlAxisCrosses {}


declare  class Office$XlAxisGroup {
  constructor(...args: empty): mixed;
static +xlPrimary: Class<Office$XlAxisGroup__xlPrimary> & Office$XlAxisGroup__xlPrimary & 1;// 1
static +xlSecondary: Class<Office$XlAxisGroup__xlSecondary> & Office$XlAxisGroup__xlSecondary & 2;// 2

}

declare class Office$XlAxisGroup__xlPrimary mixins Office$XlAxisGroup {}
declare class Office$XlAxisGroup__xlSecondary mixins Office$XlAxisGroup {}


declare  class Office$XlAxisType {
  constructor(...args: empty): mixed;
static +xlCategory: Class<Office$XlAxisType__xlCategory> & Office$XlAxisType__xlCategory & 1;// 1
static +xlSeriesAxis: Class<Office$XlAxisType__xlSeriesAxis> & Office$XlAxisType__xlSeriesAxis & 3;// 3
static +xlValue: Class<Office$XlAxisType__xlValue> & Office$XlAxisType__xlValue & 2;// 2

}

declare class Office$XlAxisType__xlCategory mixins Office$XlAxisType {}
declare class Office$XlAxisType__xlSeriesAxis mixins Office$XlAxisType {}
declare class Office$XlAxisType__xlValue mixins Office$XlAxisType {}


declare  class Office$XlBarShape {
  constructor(...args: empty): mixed;
static +xlBox: Class<Office$XlBarShape__xlBox> & Office$XlBarShape__xlBox & 0;// 0
static +xlConeToMax: Class<Office$XlBarShape__xlConeToMax> & Office$XlBarShape__xlConeToMax & 5;// 5
static +xlConeToPoint: Class<Office$XlBarShape__xlConeToPoint> & Office$XlBarShape__xlConeToPoint & 4;// 4
static +xlCylinder: Class<Office$XlBarShape__xlCylinder> & Office$XlBarShape__xlCylinder & 3;// 3
static +xlPyramidToMax: Class<Office$XlBarShape__xlPyramidToMax> & Office$XlBarShape__xlPyramidToMax & 2;// 2
static +xlPyramidToPoint: Class<Office$XlBarShape__xlPyramidToPoint> & Office$XlBarShape__xlPyramidToPoint & 1;// 1

}

declare class Office$XlBarShape__xlBox mixins Office$XlBarShape {}
declare class Office$XlBarShape__xlConeToMax mixins Office$XlBarShape {}
declare class Office$XlBarShape__xlConeToPoint mixins Office$XlBarShape {}
declare class Office$XlBarShape__xlCylinder mixins Office$XlBarShape {}
declare class Office$XlBarShape__xlPyramidToMax mixins Office$XlBarShape {}
declare class Office$XlBarShape__xlPyramidToPoint mixins Office$XlBarShape {}


declare  class Office$XlBinsType {
  constructor(...args: empty): mixed;
static +xlBinsTypeAutomatic: Class<Office$XlBinsType__xlBinsTypeAutomatic> & Office$XlBinsType__xlBinsTypeAutomatic & 0;// 0
static +xlBinsTypeBinCount: Class<Office$XlBinsType__xlBinsTypeBinCount> & Office$XlBinsType__xlBinsTypeBinCount & 4;// 4
static +xlBinsTypeBinSize: Class<Office$XlBinsType__xlBinsTypeBinSize> & Office$XlBinsType__xlBinsTypeBinSize & 3;// 3
static +xlBinsTypeCategorical: Class<Office$XlBinsType__xlBinsTypeCategorical> & Office$XlBinsType__xlBinsTypeCategorical & 1;// 1
static +xlBinsTypeManual: Class<Office$XlBinsType__xlBinsTypeManual> & Office$XlBinsType__xlBinsTypeManual & 2;// 2

}

declare class Office$XlBinsType__xlBinsTypeAutomatic mixins Office$XlBinsType {}
declare class Office$XlBinsType__xlBinsTypeBinCount mixins Office$XlBinsType {}
declare class Office$XlBinsType__xlBinsTypeBinSize mixins Office$XlBinsType {}
declare class Office$XlBinsType__xlBinsTypeCategorical mixins Office$XlBinsType {}
declare class Office$XlBinsType__xlBinsTypeManual mixins Office$XlBinsType {}


declare  class Office$XlBorderWeight {
  constructor(...args: empty): mixed;
static +xlHairline: Class<Office$XlBorderWeight__xlHairline> & Office$XlBorderWeight__xlHairline & 1;// 1
static +xlMedium: Class<Office$XlBorderWeight__xlMedium> & Office$XlBorderWeight__xlMedium & -4138;// -4138
static +xlThick: Class<Office$XlBorderWeight__xlThick> & Office$XlBorderWeight__xlThick & 4;// 4
static +xlThin: Class<Office$XlBorderWeight__xlThin> & Office$XlBorderWeight__xlThin & 2;// 2

}

declare class Office$XlBorderWeight__xlHairline mixins Office$XlBorderWeight {}
declare class Office$XlBorderWeight__xlMedium mixins Office$XlBorderWeight {}
declare class Office$XlBorderWeight__xlThick mixins Office$XlBorderWeight {}
declare class Office$XlBorderWeight__xlThin mixins Office$XlBorderWeight {}


declare  class Office$XlCategoryLabelLevel {
  constructor(...args: empty): mixed;
static +xlCategoryLabelLevelAll: Class<Office$XlCategoryLabelLevel__xlCategoryLabelLevelAll> & Office$XlCategoryLabelLevel__xlCategoryLabelLevelAll & -1;// -1
static +xlCategoryLabelLevelCustom: Class<Office$XlCategoryLabelLevel__xlCategoryLabelLevelCustom> & Office$XlCategoryLabelLevel__xlCategoryLabelLevelCustom & -2;// -2
static +xlCategoryLabelLevelNone: Class<Office$XlCategoryLabelLevel__xlCategoryLabelLevelNone> & Office$XlCategoryLabelLevel__xlCategoryLabelLevelNone & -3;// -3

}

declare class Office$XlCategoryLabelLevel__xlCategoryLabelLevelAll mixins Office$XlCategoryLabelLevel {}
declare class Office$XlCategoryLabelLevel__xlCategoryLabelLevelCustom mixins Office$XlCategoryLabelLevel {}
declare class Office$XlCategoryLabelLevel__xlCategoryLabelLevelNone mixins Office$XlCategoryLabelLevel {}


declare  class Office$XlCategoryType {
  constructor(...args: empty): mixed;
static +xlAutomaticScale: Class<Office$XlCategoryType__xlAutomaticScale> & Office$XlCategoryType__xlAutomaticScale & -4105;// -4105
static +xlCategoryScale: Class<Office$XlCategoryType__xlCategoryScale> & Office$XlCategoryType__xlCategoryScale & 2;// 2
static +xlTimeScale: Class<Office$XlCategoryType__xlTimeScale> & Office$XlCategoryType__xlTimeScale & 3;// 3

}

declare class Office$XlCategoryType__xlAutomaticScale mixins Office$XlCategoryType {}
declare class Office$XlCategoryType__xlCategoryScale mixins Office$XlCategoryType {}
declare class Office$XlCategoryType__xlTimeScale mixins Office$XlCategoryType {}


declare  class Office$XlChartElementPosition {
  constructor(...args: empty): mixed;
static +xlChartElementPositionAutomatic: Class<Office$XlChartElementPosition__xlChartElementPositionAutomatic> & Office$XlChartElementPosition__xlChartElementPositionAutomatic & -4105;// -4105
static +xlChartElementPositionCustom: Class<Office$XlChartElementPosition__xlChartElementPositionCustom> & Office$XlChartElementPosition__xlChartElementPositionCustom & -4114;// -4114

}

declare class Office$XlChartElementPosition__xlChartElementPositionAutomatic mixins Office$XlChartElementPosition {}
declare class Office$XlChartElementPosition__xlChartElementPositionCustom mixins Office$XlChartElementPosition {}


declare  class Office$XlChartItem {
  constructor(...args: empty): mixed;
static +xlAxis: Class<Office$XlChartItem__xlAxis> & Office$XlChartItem__xlAxis & 21;// 21
static +xlAxisTitle: Class<Office$XlChartItem__xlAxisTitle> & Office$XlChartItem__xlAxisTitle & 17;// 17
static +xlChartArea: Class<Office$XlChartItem__xlChartArea> & Office$XlChartItem__xlChartArea & 2;// 2
static +xlChartTitle: Class<Office$XlChartItem__xlChartTitle> & Office$XlChartItem__xlChartTitle & 4;// 4
static +xlCorners: Class<Office$XlChartItem__xlCorners> & Office$XlChartItem__xlCorners & 6;// 6
static +xlDataLabel: Class<Office$XlChartItem__xlDataLabel> & Office$XlChartItem__xlDataLabel & 0;// 0
static +xlDataTable: Class<Office$XlChartItem__xlDataTable> & Office$XlChartItem__xlDataTable & 7;// 7
static +xlDisplayUnitLabel: Class<Office$XlChartItem__xlDisplayUnitLabel> & Office$XlChartItem__xlDisplayUnitLabel & 30;// 30
static +xlDownBars: Class<Office$XlChartItem__xlDownBars> & Office$XlChartItem__xlDownBars & 20;// 20
static +xlDropLines: Class<Office$XlChartItem__xlDropLines> & Office$XlChartItem__xlDropLines & 26;// 26
static +xlErrorBars: Class<Office$XlChartItem__xlErrorBars> & Office$XlChartItem__xlErrorBars & 9;// 9
static +xlFloor: Class<Office$XlChartItem__xlFloor> & Office$XlChartItem__xlFloor & 23;// 23
static +xlHiLoLines: Class<Office$XlChartItem__xlHiLoLines> & Office$XlChartItem__xlHiLoLines & 25;// 25
static +xlLeaderLines: Class<Office$XlChartItem__xlLeaderLines> & Office$XlChartItem__xlLeaderLines & 29;// 29
static +xlLegend: Class<Office$XlChartItem__xlLegend> & Office$XlChartItem__xlLegend & 24;// 24
static +xlLegendEntry: Class<Office$XlChartItem__xlLegendEntry> & Office$XlChartItem__xlLegendEntry & 12;// 12
static +xlLegendKey: Class<Office$XlChartItem__xlLegendKey> & Office$XlChartItem__xlLegendKey & 13;// 13
static +xlMajorGridlines: Class<Office$XlChartItem__xlMajorGridlines> & Office$XlChartItem__xlMajorGridlines & 15;// 15
static +xlMinorGridlines: Class<Office$XlChartItem__xlMinorGridlines> & Office$XlChartItem__xlMinorGridlines & 16;// 16
static +xlNothing: Class<Office$XlChartItem__xlNothing> & Office$XlChartItem__xlNothing & 28;// 28
static +xlPivotChartCollapseEntireFieldButton: Class<Office$XlChartItem__xlPivotChartCollapseEntireFieldButton> & Office$XlChartItem__xlPivotChartCollapseEntireFieldButton & 34;// 34
static +xlPivotChartDropZone: Class<Office$XlChartItem__xlPivotChartDropZone> & Office$XlChartItem__xlPivotChartDropZone & 32;// 32
static +xlPivotChartExpandEntireFieldButton: Class<Office$XlChartItem__xlPivotChartExpandEntireFieldButton> & Office$XlChartItem__xlPivotChartExpandEntireFieldButton & 33;// 33
static +xlPivotChartFieldButton: Class<Office$XlChartItem__xlPivotChartFieldButton> & Office$XlChartItem__xlPivotChartFieldButton & 31;// 31
static +xlPlotArea: Class<Office$XlChartItem__xlPlotArea> & Office$XlChartItem__xlPlotArea & 19;// 19
static +xlRadarAxisLabels: Class<Office$XlChartItem__xlRadarAxisLabels> & Office$XlChartItem__xlRadarAxisLabels & 27;// 27
static +xlSeries: Class<Office$XlChartItem__xlSeries> & Office$XlChartItem__xlSeries & 3;// 3
static +xlSeriesLines: Class<Office$XlChartItem__xlSeriesLines> & Office$XlChartItem__xlSeriesLines & 22;// 22
static +xlShape: Class<Office$XlChartItem__xlShape> & Office$XlChartItem__xlShape & 14;// 14
static +xlTrendline: Class<Office$XlChartItem__xlTrendline> & Office$XlChartItem__xlTrendline & 8;// 8
static +xlUpBars: Class<Office$XlChartItem__xlUpBars> & Office$XlChartItem__xlUpBars & 18;// 18
static +xlWalls: Class<Office$XlChartItem__xlWalls> & Office$XlChartItem__xlWalls & 5;// 5
static +xlXErrorBars: Class<Office$XlChartItem__xlXErrorBars> & Office$XlChartItem__xlXErrorBars & 10;// 10
static +xlYErrorBars: Class<Office$XlChartItem__xlYErrorBars> & Office$XlChartItem__xlYErrorBars & 11;// 11

}

declare class Office$XlChartItem__xlAxis mixins Office$XlChartItem {}
declare class Office$XlChartItem__xlAxisTitle mixins Office$XlChartItem {}
declare class Office$XlChartItem__xlChartArea mixins Office$XlChartItem {}
declare class Office$XlChartItem__xlChartTitle mixins Office$XlChartItem {}
declare class Office$XlChartItem__xlCorners mixins Office$XlChartItem {}
declare class Office$XlChartItem__xlDataLabel mixins Office$XlChartItem {}
declare class Office$XlChartItem__xlDataTable mixins Office$XlChartItem {}
declare class Office$XlChartItem__xlDisplayUnitLabel mixins Office$XlChartItem {}
declare class Office$XlChartItem__xlDownBars mixins Office$XlChartItem {}
declare class Office$XlChartItem__xlDropLines mixins Office$XlChartItem {}
declare class Office$XlChartItem__xlErrorBars mixins Office$XlChartItem {}
declare class Office$XlChartItem__xlFloor mixins Office$XlChartItem {}
declare class Office$XlChartItem__xlHiLoLines mixins Office$XlChartItem {}
declare class Office$XlChartItem__xlLeaderLines mixins Office$XlChartItem {}
declare class Office$XlChartItem__xlLegend mixins Office$XlChartItem {}
declare class Office$XlChartItem__xlLegendEntry mixins Office$XlChartItem {}
declare class Office$XlChartItem__xlLegendKey mixins Office$XlChartItem {}
declare class Office$XlChartItem__xlMajorGridlines mixins Office$XlChartItem {}
declare class Office$XlChartItem__xlMinorGridlines mixins Office$XlChartItem {}
declare class Office$XlChartItem__xlNothing mixins Office$XlChartItem {}
declare class Office$XlChartItem__xlPivotChartCollapseEntireFieldButton mixins Office$XlChartItem {}
declare class Office$XlChartItem__xlPivotChartDropZone mixins Office$XlChartItem {}
declare class Office$XlChartItem__xlPivotChartExpandEntireFieldButton mixins Office$XlChartItem {}
declare class Office$XlChartItem__xlPivotChartFieldButton mixins Office$XlChartItem {}
declare class Office$XlChartItem__xlPlotArea mixins Office$XlChartItem {}
declare class Office$XlChartItem__xlRadarAxisLabels mixins Office$XlChartItem {}
declare class Office$XlChartItem__xlSeries mixins Office$XlChartItem {}
declare class Office$XlChartItem__xlSeriesLines mixins Office$XlChartItem {}
declare class Office$XlChartItem__xlShape mixins Office$XlChartItem {}
declare class Office$XlChartItem__xlTrendline mixins Office$XlChartItem {}
declare class Office$XlChartItem__xlUpBars mixins Office$XlChartItem {}
declare class Office$XlChartItem__xlWalls mixins Office$XlChartItem {}
declare class Office$XlChartItem__xlXErrorBars mixins Office$XlChartItem {}
declare class Office$XlChartItem__xlYErrorBars mixins Office$XlChartItem {}


declare  class Office$XlChartOrientation {
  constructor(...args: empty): mixed;
static +xlDownward: Class<Office$XlChartOrientation__xlDownward> & Office$XlChartOrientation__xlDownward & -4170;// -4170
static +xlHorizontal: Class<Office$XlChartOrientation__xlHorizontal> & Office$XlChartOrientation__xlHorizontal & -4128;// -4128
static +xlUpward: Class<Office$XlChartOrientation__xlUpward> & Office$XlChartOrientation__xlUpward & -4171;// -4171
static +xlVertical: Class<Office$XlChartOrientation__xlVertical> & Office$XlChartOrientation__xlVertical & -4166;// -4166

}

declare class Office$XlChartOrientation__xlDownward mixins Office$XlChartOrientation {}
declare class Office$XlChartOrientation__xlHorizontal mixins Office$XlChartOrientation {}
declare class Office$XlChartOrientation__xlUpward mixins Office$XlChartOrientation {}
declare class Office$XlChartOrientation__xlVertical mixins Office$XlChartOrientation {}


declare  class Office$XlChartPictureType {
  constructor(...args: empty): mixed;
static +xlStack: Class<Office$XlChartPictureType__xlStack> & Office$XlChartPictureType__xlStack & 2;// 2
static +xlStackScale: Class<Office$XlChartPictureType__xlStackScale> & Office$XlChartPictureType__xlStackScale & 3;// 3
static +xlStretch: Class<Office$XlChartPictureType__xlStretch> & Office$XlChartPictureType__xlStretch & 1;// 1

}

declare class Office$XlChartPictureType__xlStack mixins Office$XlChartPictureType {}
declare class Office$XlChartPictureType__xlStackScale mixins Office$XlChartPictureType {}
declare class Office$XlChartPictureType__xlStretch mixins Office$XlChartPictureType {}


declare  class Office$XlChartSplitType {
  constructor(...args: empty): mixed;
static +xlSplitByCustomSplit: Class<Office$XlChartSplitType__xlSplitByCustomSplit> & Office$XlChartSplitType__xlSplitByCustomSplit & 4;// 4
static +xlSplitByPercentValue: Class<Office$XlChartSplitType__xlSplitByPercentValue> & Office$XlChartSplitType__xlSplitByPercentValue & 3;// 3
static +xlSplitByPosition: Class<Office$XlChartSplitType__xlSplitByPosition> & Office$XlChartSplitType__xlSplitByPosition & 1;// 1
static +xlSplitByValue: Class<Office$XlChartSplitType__xlSplitByValue> & Office$XlChartSplitType__xlSplitByValue & 2;// 2

}

declare class Office$XlChartSplitType__xlSplitByCustomSplit mixins Office$XlChartSplitType {}
declare class Office$XlChartSplitType__xlSplitByPercentValue mixins Office$XlChartSplitType {}
declare class Office$XlChartSplitType__xlSplitByPosition mixins Office$XlChartSplitType {}
declare class Office$XlChartSplitType__xlSplitByValue mixins Office$XlChartSplitType {}


declare  class Office$XlChartType {
  constructor(...args: empty): mixed;
static +xl3DArea: Class<Office$XlChartType__xl3DArea> & Office$XlChartType__xl3DArea & -4098;// -4098
static +xl3DAreaStacked: Class<Office$XlChartType__xl3DAreaStacked> & Office$XlChartType__xl3DAreaStacked & 78;// 78
static +xl3DAreaStacked100: Class<Office$XlChartType__xl3DAreaStacked100> & Office$XlChartType__xl3DAreaStacked100 & 79;// 79
static +xl3DBarClustered: Class<Office$XlChartType__xl3DBarClustered> & Office$XlChartType__xl3DBarClustered & 60;// 60
static +xl3DBarStacked: Class<Office$XlChartType__xl3DBarStacked> & Office$XlChartType__xl3DBarStacked & 61;// 61
static +xl3DBarStacked100: Class<Office$XlChartType__xl3DBarStacked100> & Office$XlChartType__xl3DBarStacked100 & 62;// 62
static +xl3DColumn: Class<Office$XlChartType__xl3DColumn> & Office$XlChartType__xl3DColumn & -4100;// -4100
static +xl3DColumnClustered: Class<Office$XlChartType__xl3DColumnClustered> & Office$XlChartType__xl3DColumnClustered & 54;// 54
static +xl3DColumnStacked: Class<Office$XlChartType__xl3DColumnStacked> & Office$XlChartType__xl3DColumnStacked & 55;// 55
static +xl3DColumnStacked100: Class<Office$XlChartType__xl3DColumnStacked100> & Office$XlChartType__xl3DColumnStacked100 & 56;// 56
static +xl3DLine: Class<Office$XlChartType__xl3DLine> & Office$XlChartType__xl3DLine & -4101;// -4101
static +xl3DPie: Class<Office$XlChartType__xl3DPie> & Office$XlChartType__xl3DPie & -4102;// -4102
static +xl3DPieExploded: Class<Office$XlChartType__xl3DPieExploded> & Office$XlChartType__xl3DPieExploded & 70;// 70
static +xlArea: Class<Office$XlChartType__xlArea> & Office$XlChartType__xlArea & 1;// 1
static +xlAreaStacked: Class<Office$XlChartType__xlAreaStacked> & Office$XlChartType__xlAreaStacked & 76;// 76
static +xlAreaStacked100: Class<Office$XlChartType__xlAreaStacked100> & Office$XlChartType__xlAreaStacked100 & 77;// 77
static +xlBarClustered: Class<Office$XlChartType__xlBarClustered> & Office$XlChartType__xlBarClustered & 57;// 57
static +xlBarOfPie: Class<Office$XlChartType__xlBarOfPie> & Office$XlChartType__xlBarOfPie & 71;// 71
static +xlBarStacked: Class<Office$XlChartType__xlBarStacked> & Office$XlChartType__xlBarStacked & 58;// 58
static +xlBarStacked100: Class<Office$XlChartType__xlBarStacked100> & Office$XlChartType__xlBarStacked100 & 59;// 59
static +xlBoxwhisker: Class<Office$XlChartType__xlBoxwhisker> & Office$XlChartType__xlBoxwhisker & 121;// 121
static +xlBubble: Class<Office$XlChartType__xlBubble> & Office$XlChartType__xlBubble & 15;// 15
static +xlBubble3DEffect: Class<Office$XlChartType__xlBubble3DEffect> & Office$XlChartType__xlBubble3DEffect & 87;// 87
static +xlColumnClustered: Class<Office$XlChartType__xlColumnClustered> & Office$XlChartType__xlColumnClustered & 51;// 51
static +xlColumnStacked: Class<Office$XlChartType__xlColumnStacked> & Office$XlChartType__xlColumnStacked & 52;// 52
static +xlColumnStacked100: Class<Office$XlChartType__xlColumnStacked100> & Office$XlChartType__xlColumnStacked100 & 53;// 53
static +xlCombo: Class<Office$XlChartType__xlCombo> & Office$XlChartType__xlCombo & -4152;// -4152
static +xlComboAreaStackedColumnClustered: Class<Office$XlChartType__xlComboAreaStackedColumnClustered> & Office$XlChartType__xlComboAreaStackedColumnClustered & 115;// 115
static +xlComboColumnClusteredLine: Class<Office$XlChartType__xlComboColumnClusteredLine> & Office$XlChartType__xlComboColumnClusteredLine & 113;// 113
static +xlComboColumnClusteredLineSecondaryAxis: Class<Office$XlChartType__xlComboColumnClusteredLineSecondaryAxis> & Office$XlChartType__xlComboColumnClusteredLineSecondaryAxis & 114;// 114
static +xlConeBarClustered: Class<Office$XlChartType__xlConeBarClustered> & Office$XlChartType__xlConeBarClustered & 102;// 102
static +xlConeBarStacked: Class<Office$XlChartType__xlConeBarStacked> & Office$XlChartType__xlConeBarStacked & 103;// 103
static +xlConeBarStacked100: Class<Office$XlChartType__xlConeBarStacked100> & Office$XlChartType__xlConeBarStacked100 & 104;// 104
static +xlConeCol: Class<Office$XlChartType__xlConeCol> & Office$XlChartType__xlConeCol & 105;// 105
static +xlConeColClustered: Class<Office$XlChartType__xlConeColClustered> & Office$XlChartType__xlConeColClustered & 99;// 99
static +xlConeColStacked: Class<Office$XlChartType__xlConeColStacked> & Office$XlChartType__xlConeColStacked & 100;// 100
static +xlConeColStacked100: Class<Office$XlChartType__xlConeColStacked100> & Office$XlChartType__xlConeColStacked100 & 101;// 101
static +xlCylinderBarClustered: Class<Office$XlChartType__xlCylinderBarClustered> & Office$XlChartType__xlCylinderBarClustered & 95;// 95
static +xlCylinderBarStacked: Class<Office$XlChartType__xlCylinderBarStacked> & Office$XlChartType__xlCylinderBarStacked & 96;// 96
static +xlCylinderBarStacked100: Class<Office$XlChartType__xlCylinderBarStacked100> & Office$XlChartType__xlCylinderBarStacked100 & 97;// 97
static +xlCylinderCol: Class<Office$XlChartType__xlCylinderCol> & Office$XlChartType__xlCylinderCol & 98;// 98
static +xlCylinderColClustered: Class<Office$XlChartType__xlCylinderColClustered> & Office$XlChartType__xlCylinderColClustered & 92;// 92
static +xlCylinderColStacked: Class<Office$XlChartType__xlCylinderColStacked> & Office$XlChartType__xlCylinderColStacked & 93;// 93
static +xlCylinderColStacked100: Class<Office$XlChartType__xlCylinderColStacked100> & Office$XlChartType__xlCylinderColStacked100 & 94;// 94
static +xlDoughnut: Class<Office$XlChartType__xlDoughnut> & Office$XlChartType__xlDoughnut & -4120;// -4120
static +xlDoughnutExploded: Class<Office$XlChartType__xlDoughnutExploded> & Office$XlChartType__xlDoughnutExploded & 80;// 80
static +xlHistogram: Class<Office$XlChartType__xlHistogram> & Office$XlChartType__xlHistogram & 118;// 118
static +xlLine: Class<Office$XlChartType__xlLine> & Office$XlChartType__xlLine & 4;// 4
static +xlLineMarkers: Class<Office$XlChartType__xlLineMarkers> & Office$XlChartType__xlLineMarkers & 65;// 65
static +xlLineMarkersStacked: Class<Office$XlChartType__xlLineMarkersStacked> & Office$XlChartType__xlLineMarkersStacked & 66;// 66
static +xlLineMarkersStacked100: Class<Office$XlChartType__xlLineMarkersStacked100> & Office$XlChartType__xlLineMarkersStacked100 & 67;// 67
static +xlLineStacked: Class<Office$XlChartType__xlLineStacked> & Office$XlChartType__xlLineStacked & 63;// 63
static +xlLineStacked100: Class<Office$XlChartType__xlLineStacked100> & Office$XlChartType__xlLineStacked100 & 64;// 64
static +xlOtherCombinations: Class<Office$XlChartType__xlOtherCombinations> & Office$XlChartType__xlOtherCombinations & 116;// 116
static +xlPareto: Class<Office$XlChartType__xlPareto> & Office$XlChartType__xlPareto & 122;// 122
static +xlPie: Class<Office$XlChartType__xlPie> & Office$XlChartType__xlPie & 5;// 5
static +xlPieExploded: Class<Office$XlChartType__xlPieExploded> & Office$XlChartType__xlPieExploded & 69;// 69
static +xlPieOfPie: Class<Office$XlChartType__xlPieOfPie> & Office$XlChartType__xlPieOfPie & 68;// 68
static +xlPyramidBarClustered: Class<Office$XlChartType__xlPyramidBarClustered> & Office$XlChartType__xlPyramidBarClustered & 109;// 109
static +xlPyramidBarStacked: Class<Office$XlChartType__xlPyramidBarStacked> & Office$XlChartType__xlPyramidBarStacked & 110;// 110
static +xlPyramidBarStacked100: Class<Office$XlChartType__xlPyramidBarStacked100> & Office$XlChartType__xlPyramidBarStacked100 & 111;// 111
static +xlPyramidCol: Class<Office$XlChartType__xlPyramidCol> & Office$XlChartType__xlPyramidCol & 112;// 112
static +xlPyramidColClustered: Class<Office$XlChartType__xlPyramidColClustered> & Office$XlChartType__xlPyramidColClustered & 106;// 106
static +xlPyramidColStacked: Class<Office$XlChartType__xlPyramidColStacked> & Office$XlChartType__xlPyramidColStacked & 107;// 107
static +xlPyramidColStacked100: Class<Office$XlChartType__xlPyramidColStacked100> & Office$XlChartType__xlPyramidColStacked100 & 108;// 108
static +xlRadar: Class<Office$XlChartType__xlRadar> & Office$XlChartType__xlRadar & -4151;// -4151
static +xlRadarFilled: Class<Office$XlChartType__xlRadarFilled> & Office$XlChartType__xlRadarFilled & 82;// 82
static +xlRadarMarkers: Class<Office$XlChartType__xlRadarMarkers> & Office$XlChartType__xlRadarMarkers & 81;// 81
static +xlStockHLC: Class<Office$XlChartType__xlStockHLC> & Office$XlChartType__xlStockHLC & 88;// 88
static +xlStockOHLC: Class<Office$XlChartType__xlStockOHLC> & Office$XlChartType__xlStockOHLC & 89;// 89
static +xlStockVHLC: Class<Office$XlChartType__xlStockVHLC> & Office$XlChartType__xlStockVHLC & 90;// 90
static +xlStockVOHLC: Class<Office$XlChartType__xlStockVOHLC> & Office$XlChartType__xlStockVOHLC & 91;// 91
static +xlSuggestedChart: Class<Office$XlChartType__xlSuggestedChart> & Office$XlChartType__xlSuggestedChart & -2;// -2
static +xlSunburst: Class<Office$XlChartType__xlSunburst> & Office$XlChartType__xlSunburst & 120;// 120
static +xlSurface: Class<Office$XlChartType__xlSurface> & Office$XlChartType__xlSurface & 83;// 83
static +xlSurfaceTopView: Class<Office$XlChartType__xlSurfaceTopView> & Office$XlChartType__xlSurfaceTopView & 85;// 85
static +xlSurfaceTopViewWireframe: Class<Office$XlChartType__xlSurfaceTopViewWireframe> & Office$XlChartType__xlSurfaceTopViewWireframe & 86;// 86
static +xlSurfaceWireframe: Class<Office$XlChartType__xlSurfaceWireframe> & Office$XlChartType__xlSurfaceWireframe & 84;// 84
static +xlTreemap: Class<Office$XlChartType__xlTreemap> & Office$XlChartType__xlTreemap & 117;// 117
static +xlWaterfall: Class<Office$XlChartType__xlWaterfall> & Office$XlChartType__xlWaterfall & 119;// 119
static +xlXYScatter: Class<Office$XlChartType__xlXYScatter> & Office$XlChartType__xlXYScatter & -4169;// -4169
static +xlXYScatterLines: Class<Office$XlChartType__xlXYScatterLines> & Office$XlChartType__xlXYScatterLines & 74;// 74
static +xlXYScatterLinesNoMarkers: Class<Office$XlChartType__xlXYScatterLinesNoMarkers> & Office$XlChartType__xlXYScatterLinesNoMarkers & 75;// 75
static +xlXYScatterSmooth: Class<Office$XlChartType__xlXYScatterSmooth> & Office$XlChartType__xlXYScatterSmooth & 72;// 72
static +xlXYScatterSmoothNoMarkers: Class<Office$XlChartType__xlXYScatterSmoothNoMarkers> & Office$XlChartType__xlXYScatterSmoothNoMarkers & 73;// 73

}

declare class Office$XlChartType__xl3DArea mixins Office$XlChartType {}
declare class Office$XlChartType__xl3DAreaStacked mixins Office$XlChartType {}
declare class Office$XlChartType__xl3DAreaStacked100 mixins Office$XlChartType {}
declare class Office$XlChartType__xl3DBarClustered mixins Office$XlChartType {}
declare class Office$XlChartType__xl3DBarStacked mixins Office$XlChartType {}
declare class Office$XlChartType__xl3DBarStacked100 mixins Office$XlChartType {}
declare class Office$XlChartType__xl3DColumn mixins Office$XlChartType {}
declare class Office$XlChartType__xl3DColumnClustered mixins Office$XlChartType {}
declare class Office$XlChartType__xl3DColumnStacked mixins Office$XlChartType {}
declare class Office$XlChartType__xl3DColumnStacked100 mixins Office$XlChartType {}
declare class Office$XlChartType__xl3DLine mixins Office$XlChartType {}
declare class Office$XlChartType__xl3DPie mixins Office$XlChartType {}
declare class Office$XlChartType__xl3DPieExploded mixins Office$XlChartType {}
declare class Office$XlChartType__xlArea mixins Office$XlChartType {}
declare class Office$XlChartType__xlAreaStacked mixins Office$XlChartType {}
declare class Office$XlChartType__xlAreaStacked100 mixins Office$XlChartType {}
declare class Office$XlChartType__xlBarClustered mixins Office$XlChartType {}
declare class Office$XlChartType__xlBarOfPie mixins Office$XlChartType {}
declare class Office$XlChartType__xlBarStacked mixins Office$XlChartType {}
declare class Office$XlChartType__xlBarStacked100 mixins Office$XlChartType {}
declare class Office$XlChartType__xlBoxwhisker mixins Office$XlChartType {}
declare class Office$XlChartType__xlBubble mixins Office$XlChartType {}
declare class Office$XlChartType__xlBubble3DEffect mixins Office$XlChartType {}
declare class Office$XlChartType__xlColumnClustered mixins Office$XlChartType {}
declare class Office$XlChartType__xlColumnStacked mixins Office$XlChartType {}
declare class Office$XlChartType__xlColumnStacked100 mixins Office$XlChartType {}
declare class Office$XlChartType__xlCombo mixins Office$XlChartType {}
declare class Office$XlChartType__xlComboAreaStackedColumnClustered mixins Office$XlChartType {}
declare class Office$XlChartType__xlComboColumnClusteredLine mixins Office$XlChartType {}
declare class Office$XlChartType__xlComboColumnClusteredLineSecondaryAxis mixins Office$XlChartType {}
declare class Office$XlChartType__xlConeBarClustered mixins Office$XlChartType {}
declare class Office$XlChartType__xlConeBarStacked mixins Office$XlChartType {}
declare class Office$XlChartType__xlConeBarStacked100 mixins Office$XlChartType {}
declare class Office$XlChartType__xlConeCol mixins Office$XlChartType {}
declare class Office$XlChartType__xlConeColClustered mixins Office$XlChartType {}
declare class Office$XlChartType__xlConeColStacked mixins Office$XlChartType {}
declare class Office$XlChartType__xlConeColStacked100 mixins Office$XlChartType {}
declare class Office$XlChartType__xlCylinderBarClustered mixins Office$XlChartType {}
declare class Office$XlChartType__xlCylinderBarStacked mixins Office$XlChartType {}
declare class Office$XlChartType__xlCylinderBarStacked100 mixins Office$XlChartType {}
declare class Office$XlChartType__xlCylinderCol mixins Office$XlChartType {}
declare class Office$XlChartType__xlCylinderColClustered mixins Office$XlChartType {}
declare class Office$XlChartType__xlCylinderColStacked mixins Office$XlChartType {}
declare class Office$XlChartType__xlCylinderColStacked100 mixins Office$XlChartType {}
declare class Office$XlChartType__xlDoughnut mixins Office$XlChartType {}
declare class Office$XlChartType__xlDoughnutExploded mixins Office$XlChartType {}
declare class Office$XlChartType__xlHistogram mixins Office$XlChartType {}
declare class Office$XlChartType__xlLine mixins Office$XlChartType {}
declare class Office$XlChartType__xlLineMarkers mixins Office$XlChartType {}
declare class Office$XlChartType__xlLineMarkersStacked mixins Office$XlChartType {}
declare class Office$XlChartType__xlLineMarkersStacked100 mixins Office$XlChartType {}
declare class Office$XlChartType__xlLineStacked mixins Office$XlChartType {}
declare class Office$XlChartType__xlLineStacked100 mixins Office$XlChartType {}
declare class Office$XlChartType__xlOtherCombinations mixins Office$XlChartType {}
declare class Office$XlChartType__xlPareto mixins Office$XlChartType {}
declare class Office$XlChartType__xlPie mixins Office$XlChartType {}
declare class Office$XlChartType__xlPieExploded mixins Office$XlChartType {}
declare class Office$XlChartType__xlPieOfPie mixins Office$XlChartType {}
declare class Office$XlChartType__xlPyramidBarClustered mixins Office$XlChartType {}
declare class Office$XlChartType__xlPyramidBarStacked mixins Office$XlChartType {}
declare class Office$XlChartType__xlPyramidBarStacked100 mixins Office$XlChartType {}
declare class Office$XlChartType__xlPyramidCol mixins Office$XlChartType {}
declare class Office$XlChartType__xlPyramidColClustered mixins Office$XlChartType {}
declare class Office$XlChartType__xlPyramidColStacked mixins Office$XlChartType {}
declare class Office$XlChartType__xlPyramidColStacked100 mixins Office$XlChartType {}
declare class Office$XlChartType__xlRadar mixins Office$XlChartType {}
declare class Office$XlChartType__xlRadarFilled mixins Office$XlChartType {}
declare class Office$XlChartType__xlRadarMarkers mixins Office$XlChartType {}
declare class Office$XlChartType__xlStockHLC mixins Office$XlChartType {}
declare class Office$XlChartType__xlStockOHLC mixins Office$XlChartType {}
declare class Office$XlChartType__xlStockVHLC mixins Office$XlChartType {}
declare class Office$XlChartType__xlStockVOHLC mixins Office$XlChartType {}
declare class Office$XlChartType__xlSuggestedChart mixins Office$XlChartType {}
declare class Office$XlChartType__xlSunburst mixins Office$XlChartType {}
declare class Office$XlChartType__xlSurface mixins Office$XlChartType {}
declare class Office$XlChartType__xlSurfaceTopView mixins Office$XlChartType {}
declare class Office$XlChartType__xlSurfaceTopViewWireframe mixins Office$XlChartType {}
declare class Office$XlChartType__xlSurfaceWireframe mixins Office$XlChartType {}
declare class Office$XlChartType__xlTreemap mixins Office$XlChartType {}
declare class Office$XlChartType__xlWaterfall mixins Office$XlChartType {}
declare class Office$XlChartType__xlXYScatter mixins Office$XlChartType {}
declare class Office$XlChartType__xlXYScatterLines mixins Office$XlChartType {}
declare class Office$XlChartType__xlXYScatterLinesNoMarkers mixins Office$XlChartType {}
declare class Office$XlChartType__xlXYScatterSmooth mixins Office$XlChartType {}
declare class Office$XlChartType__xlXYScatterSmoothNoMarkers mixins Office$XlChartType {}


declare  class Office$XlColorIndex {
  constructor(...args: empty): mixed;
static +xlColorIndexAutomatic: Class<Office$XlColorIndex__xlColorIndexAutomatic> & Office$XlColorIndex__xlColorIndexAutomatic & -4105;// -4105
static +xlColorIndexNone: Class<Office$XlColorIndex__xlColorIndexNone> & Office$XlColorIndex__xlColorIndexNone & -4142;// -4142

}

declare class Office$XlColorIndex__xlColorIndexAutomatic mixins Office$XlColorIndex {}
declare class Office$XlColorIndex__xlColorIndexNone mixins Office$XlColorIndex {}


declare  class Office$XlConstants {
  constructor(...args: empty): mixed;
static +xl3DBar: Class<Office$XlConstants__xl3DBar> & Office$XlConstants__xl3DBar & -4099;// -4099
static +xl3DSurface: Class<Office$XlConstants__xl3DSurface> & Office$XlConstants__xl3DSurface & -4103;// -4103
static +xlAbove: Class<Office$XlConstants__xlAbove> & Office$XlConstants__xlAbove & 0;// 0
static +xlAutomatic: Class<Office$XlConstants__xlAutomatic> & Office$XlConstants__xlAutomatic & -4105;// -4105
static +xlBar: Class<Office$XlConstants__xlBar> & Office$XlConstants__xlBar & 2;// 2
static +xlBelow: Class<Office$XlConstants__xlBelow> & Office$XlConstants__xlBelow & 1;// 1
static +xlBoth: Class<Office$XlConstants__xlBoth> & Office$XlConstants__xlBoth & 1;// 1
static +xlBottom: Class<Office$XlConstants__xlBottom> & Office$XlConstants__xlBottom & -4107;// -4107
static +xlCenter: Class<Office$XlConstants__xlCenter> & Office$XlConstants__xlCenter & -4108;// -4108
static +xlChecker: Class<Office$XlConstants__xlChecker> & Office$XlConstants__xlChecker & 9;// 9
static +xlCircle: Class<Office$XlConstants__xlCircle> & Office$XlConstants__xlCircle & 8;// 8
static +xlColumn: Class<Office$XlConstants__xlColumn> & Office$XlConstants__xlColumn & 3;// 3
static +xlCombination: Class<Office$XlConstants__xlCombination> & Office$XlConstants__xlCombination & -4111;// -4111
static +xlCorner: Class<Office$XlConstants__xlCorner> & Office$XlConstants__xlCorner & 2;// 2
static +xlCrissCross: Class<Office$XlConstants__xlCrissCross> & Office$XlConstants__xlCrissCross & 16;// 16
static +xlCross: Class<Office$XlConstants__xlCross> & Office$XlConstants__xlCross & 4;// 4
static +xlCustom: Class<Office$XlConstants__xlCustom> & Office$XlConstants__xlCustom & -4114;// -4114
static +xlDefaultAutoFormat: Class<Office$XlConstants__xlDefaultAutoFormat> & Office$XlConstants__xlDefaultAutoFormat & -1;// -1
static +xlDiamond: Class<Office$XlConstants__xlDiamond> & Office$XlConstants__xlDiamond & 2;// 2
static +xlDistributed: Class<Office$XlConstants__xlDistributed> & Office$XlConstants__xlDistributed & -4117;// -4117
static +xlFill: Class<Office$XlConstants__xlFill> & Office$XlConstants__xlFill & 5;// 5
static +xlFixedValue: Class<Office$XlConstants__xlFixedValue> & Office$XlConstants__xlFixedValue & 1;// 1
static +xlGeneral: Class<Office$XlConstants__xlGeneral> & Office$XlConstants__xlGeneral & 1;// 1
static +xlGray16: Class<Office$XlConstants__xlGray16> & Office$XlConstants__xlGray16 & 17;// 17
static +xlGray25: Class<Office$XlConstants__xlGray25> & Office$XlConstants__xlGray25 & -4124;// -4124
static +xlGray50: Class<Office$XlConstants__xlGray50> & Office$XlConstants__xlGray50 & -4125;// -4125
static +xlGray75: Class<Office$XlConstants__xlGray75> & Office$XlConstants__xlGray75 & -4126;// -4126
static +xlGray8: Class<Office$XlConstants__xlGray8> & Office$XlConstants__xlGray8 & 18;// 18
static +xlGrid: Class<Office$XlConstants__xlGrid> & Office$XlConstants__xlGrid & 15;// 15
static +xlHigh: Class<Office$XlConstants__xlHigh> & Office$XlConstants__xlHigh & -4127;// -4127
static +xlInside: Class<Office$XlConstants__xlInside> & Office$XlConstants__xlInside & 2;// 2
static +xlJustify: Class<Office$XlConstants__xlJustify> & Office$XlConstants__xlJustify & -4130;// -4130
static +xlLeft: Class<Office$XlConstants__xlLeft> & Office$XlConstants__xlLeft & -4131;// -4131
static +xlLightDown: Class<Office$XlConstants__xlLightDown> & Office$XlConstants__xlLightDown & 13;// 13
static +xlLightHorizontal: Class<Office$XlConstants__xlLightHorizontal> & Office$XlConstants__xlLightHorizontal & 11;// 11
static +xlLightUp: Class<Office$XlConstants__xlLightUp> & Office$XlConstants__xlLightUp & 14;// 14
static +xlLightVertical: Class<Office$XlConstants__xlLightVertical> & Office$XlConstants__xlLightVertical & 12;// 12
static +xlLow: Class<Office$XlConstants__xlLow> & Office$XlConstants__xlLow & -4134;// -4134
static +xlMaximum: Class<Office$XlConstants__xlMaximum> & Office$XlConstants__xlMaximum & 2;// 2
static +xlMinimum: Class<Office$XlConstants__xlMinimum> & Office$XlConstants__xlMinimum & 4;// 4
static +xlMinusValues: Class<Office$XlConstants__xlMinusValues> & Office$XlConstants__xlMinusValues & 3;// 3
static +xlNextToAxis: Class<Office$XlConstants__xlNextToAxis> & Office$XlConstants__xlNextToAxis & 4;// 4
static +xlNone: Class<Office$XlConstants__xlNone> & Office$XlConstants__xlNone & -4142;// -4142
static +xlOpaque: Class<Office$XlConstants__xlOpaque> & Office$XlConstants__xlOpaque & 3;// 3
static +xlOutside: Class<Office$XlConstants__xlOutside> & Office$XlConstants__xlOutside & 3;// 3
static +xlPercent: Class<Office$XlConstants__xlPercent> & Office$XlConstants__xlPercent & 2;// 2
static +xlPlus: Class<Office$XlConstants__xlPlus> & Office$XlConstants__xlPlus & 9;// 9
static +xlPlusValues: Class<Office$XlConstants__xlPlusValues> & Office$XlConstants__xlPlusValues & 2;// 2
static +xlRight: Class<Office$XlConstants__xlRight> & Office$XlConstants__xlRight & -4152;// -4152
static +xlScale: Class<Office$XlConstants__xlScale> & Office$XlConstants__xlScale & 3;// 3
static +xlSemiGray75: Class<Office$XlConstants__xlSemiGray75> & Office$XlConstants__xlSemiGray75 & 10;// 10
static +xlShowLabel: Class<Office$XlConstants__xlShowLabel> & Office$XlConstants__xlShowLabel & 4;// 4
static +xlShowLabelAndPercent: Class<Office$XlConstants__xlShowLabelAndPercent> & Office$XlConstants__xlShowLabelAndPercent & 5;// 5
static +xlShowPercent: Class<Office$XlConstants__xlShowPercent> & Office$XlConstants__xlShowPercent & 3;// 3
static +xlShowValue: Class<Office$XlConstants__xlShowValue> & Office$XlConstants__xlShowValue & 2;// 2
static +xlSingle: Class<Office$XlConstants__xlSingle> & Office$XlConstants__xlSingle & 2;// 2
static +xlSolid: Class<Office$XlConstants__xlSolid> & Office$XlConstants__xlSolid & 1;// 1
static +xlSquare: Class<Office$XlConstants__xlSquare> & Office$XlConstants__xlSquare & 1;// 1
static +xlStar: Class<Office$XlConstants__xlStar> & Office$XlConstants__xlStar & 5;// 5
static +xlStError: Class<Office$XlConstants__xlStError> & Office$XlConstants__xlStError & 4;// 4
static +xlTop: Class<Office$XlConstants__xlTop> & Office$XlConstants__xlTop & -4160;// -4160
static +xlTransparent: Class<Office$XlConstants__xlTransparent> & Office$XlConstants__xlTransparent & 2;// 2
static +xlTriangle: Class<Office$XlConstants__xlTriangle> & Office$XlConstants__xlTriangle & 3;// 3

}

declare class Office$XlConstants__xl3DBar mixins Office$XlConstants {}
declare class Office$XlConstants__xl3DSurface mixins Office$XlConstants {}
declare class Office$XlConstants__xlAbove mixins Office$XlConstants {}
declare class Office$XlConstants__xlAutomatic mixins Office$XlConstants {}
declare class Office$XlConstants__xlBar mixins Office$XlConstants {}
declare class Office$XlConstants__xlBelow mixins Office$XlConstants {}
declare class Office$XlConstants__xlBoth mixins Office$XlConstants {}
declare class Office$XlConstants__xlBottom mixins Office$XlConstants {}
declare class Office$XlConstants__xlCenter mixins Office$XlConstants {}
declare class Office$XlConstants__xlChecker mixins Office$XlConstants {}
declare class Office$XlConstants__xlCircle mixins Office$XlConstants {}
declare class Office$XlConstants__xlColumn mixins Office$XlConstants {}
declare class Office$XlConstants__xlCombination mixins Office$XlConstants {}
declare class Office$XlConstants__xlCorner mixins Office$XlConstants {}
declare class Office$XlConstants__xlCrissCross mixins Office$XlConstants {}
declare class Office$XlConstants__xlCross mixins Office$XlConstants {}
declare class Office$XlConstants__xlCustom mixins Office$XlConstants {}
declare class Office$XlConstants__xlDefaultAutoFormat mixins Office$XlConstants {}
declare class Office$XlConstants__xlDiamond mixins Office$XlConstants {}
declare class Office$XlConstants__xlDistributed mixins Office$XlConstants {}
declare class Office$XlConstants__xlFill mixins Office$XlConstants {}
declare class Office$XlConstants__xlFixedValue mixins Office$XlConstants {}
declare class Office$XlConstants__xlGeneral mixins Office$XlConstants {}
declare class Office$XlConstants__xlGray16 mixins Office$XlConstants {}
declare class Office$XlConstants__xlGray25 mixins Office$XlConstants {}
declare class Office$XlConstants__xlGray50 mixins Office$XlConstants {}
declare class Office$XlConstants__xlGray75 mixins Office$XlConstants {}
declare class Office$XlConstants__xlGray8 mixins Office$XlConstants {}
declare class Office$XlConstants__xlGrid mixins Office$XlConstants {}
declare class Office$XlConstants__xlHigh mixins Office$XlConstants {}
declare class Office$XlConstants__xlInside mixins Office$XlConstants {}
declare class Office$XlConstants__xlJustify mixins Office$XlConstants {}
declare class Office$XlConstants__xlLeft mixins Office$XlConstants {}
declare class Office$XlConstants__xlLightDown mixins Office$XlConstants {}
declare class Office$XlConstants__xlLightHorizontal mixins Office$XlConstants {}
declare class Office$XlConstants__xlLightUp mixins Office$XlConstants {}
declare class Office$XlConstants__xlLightVertical mixins Office$XlConstants {}
declare class Office$XlConstants__xlLow mixins Office$XlConstants {}
declare class Office$XlConstants__xlMaximum mixins Office$XlConstants {}
declare class Office$XlConstants__xlMinimum mixins Office$XlConstants {}
declare class Office$XlConstants__xlMinusValues mixins Office$XlConstants {}
declare class Office$XlConstants__xlNextToAxis mixins Office$XlConstants {}
declare class Office$XlConstants__xlNone mixins Office$XlConstants {}
declare class Office$XlConstants__xlOpaque mixins Office$XlConstants {}
declare class Office$XlConstants__xlOutside mixins Office$XlConstants {}
declare class Office$XlConstants__xlPercent mixins Office$XlConstants {}
declare class Office$XlConstants__xlPlus mixins Office$XlConstants {}
declare class Office$XlConstants__xlPlusValues mixins Office$XlConstants {}
declare class Office$XlConstants__xlRight mixins Office$XlConstants {}
declare class Office$XlConstants__xlScale mixins Office$XlConstants {}
declare class Office$XlConstants__xlSemiGray75 mixins Office$XlConstants {}
declare class Office$XlConstants__xlShowLabel mixins Office$XlConstants {}
declare class Office$XlConstants__xlShowLabelAndPercent mixins Office$XlConstants {}
declare class Office$XlConstants__xlShowPercent mixins Office$XlConstants {}
declare class Office$XlConstants__xlShowValue mixins Office$XlConstants {}
declare class Office$XlConstants__xlSingle mixins Office$XlConstants {}
declare class Office$XlConstants__xlSolid mixins Office$XlConstants {}
declare class Office$XlConstants__xlSquare mixins Office$XlConstants {}
declare class Office$XlConstants__xlStar mixins Office$XlConstants {}
declare class Office$XlConstants__xlStError mixins Office$XlConstants {}
declare class Office$XlConstants__xlTop mixins Office$XlConstants {}
declare class Office$XlConstants__xlTransparent mixins Office$XlConstants {}
declare class Office$XlConstants__xlTriangle mixins Office$XlConstants {}


declare  class Office$XlDataLabelPosition {
  constructor(...args: empty): mixed;
static +xlLabelPositionAbove: Class<Office$XlDataLabelPosition__xlLabelPositionAbove> & Office$XlDataLabelPosition__xlLabelPositionAbove & 0;// 0
static +xlLabelPositionBelow: Class<Office$XlDataLabelPosition__xlLabelPositionBelow> & Office$XlDataLabelPosition__xlLabelPositionBelow & 1;// 1
static +xlLabelPositionBestFit: Class<Office$XlDataLabelPosition__xlLabelPositionBestFit> & Office$XlDataLabelPosition__xlLabelPositionBestFit & 5;// 5
static +xlLabelPositionCenter: Class<Office$XlDataLabelPosition__xlLabelPositionCenter> & Office$XlDataLabelPosition__xlLabelPositionCenter & -4108;// -4108
static +xlLabelPositionCustom: Class<Office$XlDataLabelPosition__xlLabelPositionCustom> & Office$XlDataLabelPosition__xlLabelPositionCustom & 7;// 7
static +xlLabelPositionInsideBase: Class<Office$XlDataLabelPosition__xlLabelPositionInsideBase> & Office$XlDataLabelPosition__xlLabelPositionInsideBase & 4;// 4
static +xlLabelPositionInsideEnd: Class<Office$XlDataLabelPosition__xlLabelPositionInsideEnd> & Office$XlDataLabelPosition__xlLabelPositionInsideEnd & 3;// 3
static +xlLabelPositionLeft: Class<Office$XlDataLabelPosition__xlLabelPositionLeft> & Office$XlDataLabelPosition__xlLabelPositionLeft & -4131;// -4131
static +xlLabelPositionMixed: Class<Office$XlDataLabelPosition__xlLabelPositionMixed> & Office$XlDataLabelPosition__xlLabelPositionMixed & 6;// 6
static +xlLabelPositionOutsideEnd: Class<Office$XlDataLabelPosition__xlLabelPositionOutsideEnd> & Office$XlDataLabelPosition__xlLabelPositionOutsideEnd & 2;// 2
static +xlLabelPositionRight: Class<Office$XlDataLabelPosition__xlLabelPositionRight> & Office$XlDataLabelPosition__xlLabelPositionRight & -4152;// -4152

}

declare class Office$XlDataLabelPosition__xlLabelPositionAbove mixins Office$XlDataLabelPosition {}
declare class Office$XlDataLabelPosition__xlLabelPositionBelow mixins Office$XlDataLabelPosition {}
declare class Office$XlDataLabelPosition__xlLabelPositionBestFit mixins Office$XlDataLabelPosition {}
declare class Office$XlDataLabelPosition__xlLabelPositionCenter mixins Office$XlDataLabelPosition {}
declare class Office$XlDataLabelPosition__xlLabelPositionCustom mixins Office$XlDataLabelPosition {}
declare class Office$XlDataLabelPosition__xlLabelPositionInsideBase mixins Office$XlDataLabelPosition {}
declare class Office$XlDataLabelPosition__xlLabelPositionInsideEnd mixins Office$XlDataLabelPosition {}
declare class Office$XlDataLabelPosition__xlLabelPositionLeft mixins Office$XlDataLabelPosition {}
declare class Office$XlDataLabelPosition__xlLabelPositionMixed mixins Office$XlDataLabelPosition {}
declare class Office$XlDataLabelPosition__xlLabelPositionOutsideEnd mixins Office$XlDataLabelPosition {}
declare class Office$XlDataLabelPosition__xlLabelPositionRight mixins Office$XlDataLabelPosition {}


declare  class Office$XlDataLabelsType {
  constructor(...args: empty): mixed;
static +xlDataLabelsShowBubbleSizes: Class<Office$XlDataLabelsType__xlDataLabelsShowBubbleSizes> & Office$XlDataLabelsType__xlDataLabelsShowBubbleSizes & 6;// 6
static +xlDataLabelsShowLabel: Class<Office$XlDataLabelsType__xlDataLabelsShowLabel> & Office$XlDataLabelsType__xlDataLabelsShowLabel & 4;// 4
static +xlDataLabelsShowLabelAndPercent: Class<Office$XlDataLabelsType__xlDataLabelsShowLabelAndPercent> & Office$XlDataLabelsType__xlDataLabelsShowLabelAndPercent & 5;// 5
static +xlDataLabelsShowNone: Class<Office$XlDataLabelsType__xlDataLabelsShowNone> & Office$XlDataLabelsType__xlDataLabelsShowNone & -4142;// -4142
static +xlDataLabelsShowPercent: Class<Office$XlDataLabelsType__xlDataLabelsShowPercent> & Office$XlDataLabelsType__xlDataLabelsShowPercent & 3;// 3
static +xlDataLabelsShowValue: Class<Office$XlDataLabelsType__xlDataLabelsShowValue> & Office$XlDataLabelsType__xlDataLabelsShowValue & 2;// 2

}

declare class Office$XlDataLabelsType__xlDataLabelsShowBubbleSizes mixins Office$XlDataLabelsType {}
declare class Office$XlDataLabelsType__xlDataLabelsShowLabel mixins Office$XlDataLabelsType {}
declare class Office$XlDataLabelsType__xlDataLabelsShowLabelAndPercent mixins Office$XlDataLabelsType {}
declare class Office$XlDataLabelsType__xlDataLabelsShowNone mixins Office$XlDataLabelsType {}
declare class Office$XlDataLabelsType__xlDataLabelsShowPercent mixins Office$XlDataLabelsType {}
declare class Office$XlDataLabelsType__xlDataLabelsShowValue mixins Office$XlDataLabelsType {}


declare  class Office$XlDisplayBlanksAs {
  constructor(...args: empty): mixed;
static +xlInterpolated: Class<Office$XlDisplayBlanksAs__xlInterpolated> & Office$XlDisplayBlanksAs__xlInterpolated & 3;// 3
static +xlNotPlotted: Class<Office$XlDisplayBlanksAs__xlNotPlotted> & Office$XlDisplayBlanksAs__xlNotPlotted & 1;// 1
static +xlZero: Class<Office$XlDisplayBlanksAs__xlZero> & Office$XlDisplayBlanksAs__xlZero & 2;// 2

}

declare class Office$XlDisplayBlanksAs__xlInterpolated mixins Office$XlDisplayBlanksAs {}
declare class Office$XlDisplayBlanksAs__xlNotPlotted mixins Office$XlDisplayBlanksAs {}
declare class Office$XlDisplayBlanksAs__xlZero mixins Office$XlDisplayBlanksAs {}


declare  class Office$XlDisplayUnit {
  constructor(...args: empty): mixed;
static +xlDisplayUnitCustom: Class<Office$XlDisplayUnit__xlDisplayUnitCustom> & Office$XlDisplayUnit__xlDisplayUnitCustom & -4114;// -4114
static +xlDisplayUnitNone: Class<Office$XlDisplayUnit__xlDisplayUnitNone> & Office$XlDisplayUnit__xlDisplayUnitNone & -4142;// -4142
static +xlHundredMillions: Class<Office$XlDisplayUnit__xlHundredMillions> & Office$XlDisplayUnit__xlHundredMillions & -8;// -8
static +xlHundreds: Class<Office$XlDisplayUnit__xlHundreds> & Office$XlDisplayUnit__xlHundreds & -2;// -2
static +xlHundredThousands: Class<Office$XlDisplayUnit__xlHundredThousands> & Office$XlDisplayUnit__xlHundredThousands & -5;// -5
static +xlMillionMillions: Class<Office$XlDisplayUnit__xlMillionMillions> & Office$XlDisplayUnit__xlMillionMillions & -10;// -10
static +xlMillions: Class<Office$XlDisplayUnit__xlMillions> & Office$XlDisplayUnit__xlMillions & -6;// -6
static +xlTenMillions: Class<Office$XlDisplayUnit__xlTenMillions> & Office$XlDisplayUnit__xlTenMillions & -7;// -7
static +xlTenThousands: Class<Office$XlDisplayUnit__xlTenThousands> & Office$XlDisplayUnit__xlTenThousands & -4;// -4
static +xlThousandMillions: Class<Office$XlDisplayUnit__xlThousandMillions> & Office$XlDisplayUnit__xlThousandMillions & -9;// -9
static +xlThousands: Class<Office$XlDisplayUnit__xlThousands> & Office$XlDisplayUnit__xlThousands & -3;// -3

}

declare class Office$XlDisplayUnit__xlDisplayUnitCustom mixins Office$XlDisplayUnit {}
declare class Office$XlDisplayUnit__xlDisplayUnitNone mixins Office$XlDisplayUnit {}
declare class Office$XlDisplayUnit__xlHundredMillions mixins Office$XlDisplayUnit {}
declare class Office$XlDisplayUnit__xlHundreds mixins Office$XlDisplayUnit {}
declare class Office$XlDisplayUnit__xlHundredThousands mixins Office$XlDisplayUnit {}
declare class Office$XlDisplayUnit__xlMillionMillions mixins Office$XlDisplayUnit {}
declare class Office$XlDisplayUnit__xlMillions mixins Office$XlDisplayUnit {}
declare class Office$XlDisplayUnit__xlTenMillions mixins Office$XlDisplayUnit {}
declare class Office$XlDisplayUnit__xlTenThousands mixins Office$XlDisplayUnit {}
declare class Office$XlDisplayUnit__xlThousandMillions mixins Office$XlDisplayUnit {}
declare class Office$XlDisplayUnit__xlThousands mixins Office$XlDisplayUnit {}


declare  class Office$XlEndStyleCap {
  constructor(...args: empty): mixed;
static +xlCap: Class<Office$XlEndStyleCap__xlCap> & Office$XlEndStyleCap__xlCap & 1;// 1
static +xlNoCap: Class<Office$XlEndStyleCap__xlNoCap> & Office$XlEndStyleCap__xlNoCap & 2;// 2

}

declare class Office$XlEndStyleCap__xlCap mixins Office$XlEndStyleCap {}
declare class Office$XlEndStyleCap__xlNoCap mixins Office$XlEndStyleCap {}


declare  class Office$XlErrorBarDirection {
  constructor(...args: empty): mixed;
static +xlChartX: Class<Office$XlErrorBarDirection__xlChartX> & Office$XlErrorBarDirection__xlChartX & -4168;// -4168
static +xlChartY: Class<Office$XlErrorBarDirection__xlChartY> & Office$XlErrorBarDirection__xlChartY & 1;// 1

}

declare class Office$XlErrorBarDirection__xlChartX mixins Office$XlErrorBarDirection {}
declare class Office$XlErrorBarDirection__xlChartY mixins Office$XlErrorBarDirection {}


declare  class Office$XlErrorBarInclude {
  constructor(...args: empty): mixed;
static +xlErrorBarIncludeBoth: Class<Office$XlErrorBarInclude__xlErrorBarIncludeBoth> & Office$XlErrorBarInclude__xlErrorBarIncludeBoth & 1;// 1
static +xlErrorBarIncludeMinusValues: Class<Office$XlErrorBarInclude__xlErrorBarIncludeMinusValues> & Office$XlErrorBarInclude__xlErrorBarIncludeMinusValues & 3;// 3
static +xlErrorBarIncludeNone: Class<Office$XlErrorBarInclude__xlErrorBarIncludeNone> & Office$XlErrorBarInclude__xlErrorBarIncludeNone & -4142;// -4142
static +xlErrorBarIncludePlusValues: Class<Office$XlErrorBarInclude__xlErrorBarIncludePlusValues> & Office$XlErrorBarInclude__xlErrorBarIncludePlusValues & 2;// 2

}

declare class Office$XlErrorBarInclude__xlErrorBarIncludeBoth mixins Office$XlErrorBarInclude {}
declare class Office$XlErrorBarInclude__xlErrorBarIncludeMinusValues mixins Office$XlErrorBarInclude {}
declare class Office$XlErrorBarInclude__xlErrorBarIncludeNone mixins Office$XlErrorBarInclude {}
declare class Office$XlErrorBarInclude__xlErrorBarIncludePlusValues mixins Office$XlErrorBarInclude {}


declare  class Office$XlErrorBarType {
  constructor(...args: empty): mixed;
static +xlErrorBarTypeCustom: Class<Office$XlErrorBarType__xlErrorBarTypeCustom> & Office$XlErrorBarType__xlErrorBarTypeCustom & -4114;// -4114
static +xlErrorBarTypeFixedValue: Class<Office$XlErrorBarType__xlErrorBarTypeFixedValue> & Office$XlErrorBarType__xlErrorBarTypeFixedValue & 1;// 1
static +xlErrorBarTypePercent: Class<Office$XlErrorBarType__xlErrorBarTypePercent> & Office$XlErrorBarType__xlErrorBarTypePercent & 2;// 2
static +xlErrorBarTypeStDev: Class<Office$XlErrorBarType__xlErrorBarTypeStDev> & Office$XlErrorBarType__xlErrorBarTypeStDev & -4155;// -4155
static +xlErrorBarTypeStError: Class<Office$XlErrorBarType__xlErrorBarTypeStError> & Office$XlErrorBarType__xlErrorBarTypeStError & 4;// 4

}

declare class Office$XlErrorBarType__xlErrorBarTypeCustom mixins Office$XlErrorBarType {}
declare class Office$XlErrorBarType__xlErrorBarTypeFixedValue mixins Office$XlErrorBarType {}
declare class Office$XlErrorBarType__xlErrorBarTypePercent mixins Office$XlErrorBarType {}
declare class Office$XlErrorBarType__xlErrorBarTypeStDev mixins Office$XlErrorBarType {}
declare class Office$XlErrorBarType__xlErrorBarTypeStError mixins Office$XlErrorBarType {}


declare  class Office$XlHAlign {
  constructor(...args: empty): mixed;
static +xlHAlignCenter: Class<Office$XlHAlign__xlHAlignCenter> & Office$XlHAlign__xlHAlignCenter & -4108;// -4108
static +xlHAlignCenterAcrossSelection: Class<Office$XlHAlign__xlHAlignCenterAcrossSelection> & Office$XlHAlign__xlHAlignCenterAcrossSelection & 7;// 7
static +xlHAlignDistributed: Class<Office$XlHAlign__xlHAlignDistributed> & Office$XlHAlign__xlHAlignDistributed & -4117;// -4117
static +xlHAlignFill: Class<Office$XlHAlign__xlHAlignFill> & Office$XlHAlign__xlHAlignFill & 5;// 5
static +xlHAlignGeneral: Class<Office$XlHAlign__xlHAlignGeneral> & Office$XlHAlign__xlHAlignGeneral & 1;// 1
static +xlHAlignJustify: Class<Office$XlHAlign__xlHAlignJustify> & Office$XlHAlign__xlHAlignJustify & -4130;// -4130
static +xlHAlignLeft: Class<Office$XlHAlign__xlHAlignLeft> & Office$XlHAlign__xlHAlignLeft & -4131;// -4131
static +xlHAlignRight: Class<Office$XlHAlign__xlHAlignRight> & Office$XlHAlign__xlHAlignRight & -4152;// -4152

}

declare class Office$XlHAlign__xlHAlignCenter mixins Office$XlHAlign {}
declare class Office$XlHAlign__xlHAlignCenterAcrossSelection mixins Office$XlHAlign {}
declare class Office$XlHAlign__xlHAlignDistributed mixins Office$XlHAlign {}
declare class Office$XlHAlign__xlHAlignFill mixins Office$XlHAlign {}
declare class Office$XlHAlign__xlHAlignGeneral mixins Office$XlHAlign {}
declare class Office$XlHAlign__xlHAlignJustify mixins Office$XlHAlign {}
declare class Office$XlHAlign__xlHAlignLeft mixins Office$XlHAlign {}
declare class Office$XlHAlign__xlHAlignRight mixins Office$XlHAlign {}


declare  class Office$XlLegendPosition {
  constructor(...args: empty): mixed;
static +xlLegendPositionBottom: Class<Office$XlLegendPosition__xlLegendPositionBottom> & Office$XlLegendPosition__xlLegendPositionBottom & -4107;// -4107
static +xlLegendPositionCorner: Class<Office$XlLegendPosition__xlLegendPositionCorner> & Office$XlLegendPosition__xlLegendPositionCorner & 2;// 2
static +xlLegendPositionCustom: Class<Office$XlLegendPosition__xlLegendPositionCustom> & Office$XlLegendPosition__xlLegendPositionCustom & -4161;// -4161
static +xlLegendPositionLeft: Class<Office$XlLegendPosition__xlLegendPositionLeft> & Office$XlLegendPosition__xlLegendPositionLeft & -4131;// -4131
static +xlLegendPositionRight: Class<Office$XlLegendPosition__xlLegendPositionRight> & Office$XlLegendPosition__xlLegendPositionRight & -4152;// -4152
static +xlLegendPositionTop: Class<Office$XlLegendPosition__xlLegendPositionTop> & Office$XlLegendPosition__xlLegendPositionTop & -4160;// -4160

}

declare class Office$XlLegendPosition__xlLegendPositionBottom mixins Office$XlLegendPosition {}
declare class Office$XlLegendPosition__xlLegendPositionCorner mixins Office$XlLegendPosition {}
declare class Office$XlLegendPosition__xlLegendPositionCustom mixins Office$XlLegendPosition {}
declare class Office$XlLegendPosition__xlLegendPositionLeft mixins Office$XlLegendPosition {}
declare class Office$XlLegendPosition__xlLegendPositionRight mixins Office$XlLegendPosition {}
declare class Office$XlLegendPosition__xlLegendPositionTop mixins Office$XlLegendPosition {}


declare  class Office$XlMarkerStyle {
  constructor(...args: empty): mixed;
static +xlMarkerStyleAutomatic: Class<Office$XlMarkerStyle__xlMarkerStyleAutomatic> & Office$XlMarkerStyle__xlMarkerStyleAutomatic & -4105;// -4105
static +xlMarkerStyleCircle: Class<Office$XlMarkerStyle__xlMarkerStyleCircle> & Office$XlMarkerStyle__xlMarkerStyleCircle & 8;// 8
static +xlMarkerStyleDash: Class<Office$XlMarkerStyle__xlMarkerStyleDash> & Office$XlMarkerStyle__xlMarkerStyleDash & -4115;// -4115
static +xlMarkerStyleDiamond: Class<Office$XlMarkerStyle__xlMarkerStyleDiamond> & Office$XlMarkerStyle__xlMarkerStyleDiamond & 2;// 2
static +xlMarkerStyleDot: Class<Office$XlMarkerStyle__xlMarkerStyleDot> & Office$XlMarkerStyle__xlMarkerStyleDot & -4118;// -4118
static +xlMarkerStyleNone: Class<Office$XlMarkerStyle__xlMarkerStyleNone> & Office$XlMarkerStyle__xlMarkerStyleNone & -4142;// -4142
static +xlMarkerStylePicture: Class<Office$XlMarkerStyle__xlMarkerStylePicture> & Office$XlMarkerStyle__xlMarkerStylePicture & -4147;// -4147
static +xlMarkerStylePlus: Class<Office$XlMarkerStyle__xlMarkerStylePlus> & Office$XlMarkerStyle__xlMarkerStylePlus & 9;// 9
static +xlMarkerStyleSquare: Class<Office$XlMarkerStyle__xlMarkerStyleSquare> & Office$XlMarkerStyle__xlMarkerStyleSquare & 1;// 1
static +xlMarkerStyleStar: Class<Office$XlMarkerStyle__xlMarkerStyleStar> & Office$XlMarkerStyle__xlMarkerStyleStar & 5;// 5
static +xlMarkerStyleTriangle: Class<Office$XlMarkerStyle__xlMarkerStyleTriangle> & Office$XlMarkerStyle__xlMarkerStyleTriangle & 3;// 3
static +xlMarkerStyleX: Class<Office$XlMarkerStyle__xlMarkerStyleX> & Office$XlMarkerStyle__xlMarkerStyleX & -4168;// -4168

}

declare class Office$XlMarkerStyle__xlMarkerStyleAutomatic mixins Office$XlMarkerStyle {}
declare class Office$XlMarkerStyle__xlMarkerStyleCircle mixins Office$XlMarkerStyle {}
declare class Office$XlMarkerStyle__xlMarkerStyleDash mixins Office$XlMarkerStyle {}
declare class Office$XlMarkerStyle__xlMarkerStyleDiamond mixins Office$XlMarkerStyle {}
declare class Office$XlMarkerStyle__xlMarkerStyleDot mixins Office$XlMarkerStyle {}
declare class Office$XlMarkerStyle__xlMarkerStyleNone mixins Office$XlMarkerStyle {}
declare class Office$XlMarkerStyle__xlMarkerStylePicture mixins Office$XlMarkerStyle {}
declare class Office$XlMarkerStyle__xlMarkerStylePlus mixins Office$XlMarkerStyle {}
declare class Office$XlMarkerStyle__xlMarkerStyleSquare mixins Office$XlMarkerStyle {}
declare class Office$XlMarkerStyle__xlMarkerStyleStar mixins Office$XlMarkerStyle {}
declare class Office$XlMarkerStyle__xlMarkerStyleTriangle mixins Office$XlMarkerStyle {}
declare class Office$XlMarkerStyle__xlMarkerStyleX mixins Office$XlMarkerStyle {}


declare  class Office$XlParentDataLabelOptions {
  constructor(...args: empty): mixed;
static +xlParentDataLabelOptionsBanner: Class<Office$XlParentDataLabelOptions__xlParentDataLabelOptionsBanner> & Office$XlParentDataLabelOptions__xlParentDataLabelOptionsBanner & 1;// 1
static +xlParentDataLabelOptionsNone: Class<Office$XlParentDataLabelOptions__xlParentDataLabelOptionsNone> & Office$XlParentDataLabelOptions__xlParentDataLabelOptionsNone & 0;// 0
static +xlParentDataLabelOptionsOverlapping: Class<Office$XlParentDataLabelOptions__xlParentDataLabelOptionsOverlapping> & Office$XlParentDataLabelOptions__xlParentDataLabelOptionsOverlapping & 2;// 2

}

declare class Office$XlParentDataLabelOptions__xlParentDataLabelOptionsBanner mixins Office$XlParentDataLabelOptions {}
declare class Office$XlParentDataLabelOptions__xlParentDataLabelOptionsNone mixins Office$XlParentDataLabelOptions {}
declare class Office$XlParentDataLabelOptions__xlParentDataLabelOptionsOverlapping mixins Office$XlParentDataLabelOptions {}


declare  class Office$XlPieSliceIndex {
  constructor(...args: empty): mixed;
static +xlCenterPoint: Class<Office$XlPieSliceIndex__xlCenterPoint> & Office$XlPieSliceIndex__xlCenterPoint & 5;// 5
static +xlInnerCenterPoint: Class<Office$XlPieSliceIndex__xlInnerCenterPoint> & Office$XlPieSliceIndex__xlInnerCenterPoint & 8;// 8
static +xlInnerClockwisePoint: Class<Office$XlPieSliceIndex__xlInnerClockwisePoint> & Office$XlPieSliceIndex__xlInnerClockwisePoint & 7;// 7
static +xlInnerCounterClockwisePoint: Class<Office$XlPieSliceIndex__xlInnerCounterClockwisePoint> & Office$XlPieSliceIndex__xlInnerCounterClockwisePoint & 9;// 9
static +xlMidClockwiseRadiusPoint: Class<Office$XlPieSliceIndex__xlMidClockwiseRadiusPoint> & Office$XlPieSliceIndex__xlMidClockwiseRadiusPoint & 4;// 4
static +xlMidCounterClockwiseRadiusPoint: Class<Office$XlPieSliceIndex__xlMidCounterClockwiseRadiusPoint> & Office$XlPieSliceIndex__xlMidCounterClockwiseRadiusPoint & 6;// 6
static +xlOuterCenterPoint: Class<Office$XlPieSliceIndex__xlOuterCenterPoint> & Office$XlPieSliceIndex__xlOuterCenterPoint & 2;// 2
static +xlOuterClockwisePoint: Class<Office$XlPieSliceIndex__xlOuterClockwisePoint> & Office$XlPieSliceIndex__xlOuterClockwisePoint & 3;// 3
static +xlOuterCounterClockwisePoint: Class<Office$XlPieSliceIndex__xlOuterCounterClockwisePoint> & Office$XlPieSliceIndex__xlOuterCounterClockwisePoint & 1;// 1

}

declare class Office$XlPieSliceIndex__xlCenterPoint mixins Office$XlPieSliceIndex {}
declare class Office$XlPieSliceIndex__xlInnerCenterPoint mixins Office$XlPieSliceIndex {}
declare class Office$XlPieSliceIndex__xlInnerClockwisePoint mixins Office$XlPieSliceIndex {}
declare class Office$XlPieSliceIndex__xlInnerCounterClockwisePoint mixins Office$XlPieSliceIndex {}
declare class Office$XlPieSliceIndex__xlMidClockwiseRadiusPoint mixins Office$XlPieSliceIndex {}
declare class Office$XlPieSliceIndex__xlMidCounterClockwiseRadiusPoint mixins Office$XlPieSliceIndex {}
declare class Office$XlPieSliceIndex__xlOuterCenterPoint mixins Office$XlPieSliceIndex {}
declare class Office$XlPieSliceIndex__xlOuterClockwisePoint mixins Office$XlPieSliceIndex {}
declare class Office$XlPieSliceIndex__xlOuterCounterClockwisePoint mixins Office$XlPieSliceIndex {}


declare  class Office$XlPieSliceLocation {
  constructor(...args: empty): mixed;
static +xlHorizontalCoordinate: Class<Office$XlPieSliceLocation__xlHorizontalCoordinate> & Office$XlPieSliceLocation__xlHorizontalCoordinate & 1;// 1
static +xlVerticalCoordinate: Class<Office$XlPieSliceLocation__xlVerticalCoordinate> & Office$XlPieSliceLocation__xlVerticalCoordinate & 2;// 2

}

declare class Office$XlPieSliceLocation__xlHorizontalCoordinate mixins Office$XlPieSliceLocation {}
declare class Office$XlPieSliceLocation__xlVerticalCoordinate mixins Office$XlPieSliceLocation {}


declare  class Office$XlPivotFieldOrientation {
  constructor(...args: empty): mixed;
static +xlColumnField: Class<Office$XlPivotFieldOrientation__xlColumnField> & Office$XlPivotFieldOrientation__xlColumnField & 2;// 2
static +xlDataField: Class<Office$XlPivotFieldOrientation__xlDataField> & Office$XlPivotFieldOrientation__xlDataField & 4;// 4
static +xlHidden: Class<Office$XlPivotFieldOrientation__xlHidden> & Office$XlPivotFieldOrientation__xlHidden & 0;// 0
static +xlPageField: Class<Office$XlPivotFieldOrientation__xlPageField> & Office$XlPivotFieldOrientation__xlPageField & 3;// 3
static +xlRowField: Class<Office$XlPivotFieldOrientation__xlRowField> & Office$XlPivotFieldOrientation__xlRowField & 1;// 1

}

declare class Office$XlPivotFieldOrientation__xlColumnField mixins Office$XlPivotFieldOrientation {}
declare class Office$XlPivotFieldOrientation__xlDataField mixins Office$XlPivotFieldOrientation {}
declare class Office$XlPivotFieldOrientation__xlHidden mixins Office$XlPivotFieldOrientation {}
declare class Office$XlPivotFieldOrientation__xlPageField mixins Office$XlPivotFieldOrientation {}
declare class Office$XlPivotFieldOrientation__xlRowField mixins Office$XlPivotFieldOrientation {}


declare  class Office$XlReadingOrder {
  constructor(...args: empty): mixed;
static +xlContext: Class<Office$XlReadingOrder__xlContext> & Office$XlReadingOrder__xlContext & -5002;// -5002
static +xlLTR: Class<Office$XlReadingOrder__xlLTR> & Office$XlReadingOrder__xlLTR & -5003;// -5003
static +xlRTL: Class<Office$XlReadingOrder__xlRTL> & Office$XlReadingOrder__xlRTL & -5004;// -5004

}

declare class Office$XlReadingOrder__xlContext mixins Office$XlReadingOrder {}
declare class Office$XlReadingOrder__xlLTR mixins Office$XlReadingOrder {}
declare class Office$XlReadingOrder__xlRTL mixins Office$XlReadingOrder {}


declare  class Office$XlRowCol {
  constructor(...args: empty): mixed;
static +xlColumns: Class<Office$XlRowCol__xlColumns> & Office$XlRowCol__xlColumns & 2;// 2
static +xlRows: Class<Office$XlRowCol__xlRows> & Office$XlRowCol__xlRows & 1;// 1

}

declare class Office$XlRowCol__xlColumns mixins Office$XlRowCol {}
declare class Office$XlRowCol__xlRows mixins Office$XlRowCol {}


declare  class Office$XlScaleType {
  constructor(...args: empty): mixed;
static +xlScaleLinear: Class<Office$XlScaleType__xlScaleLinear> & Office$XlScaleType__xlScaleLinear & -4132;// -4132
static +xlScaleLogarithmic: Class<Office$XlScaleType__xlScaleLogarithmic> & Office$XlScaleType__xlScaleLogarithmic & -4133;// -4133

}

declare class Office$XlScaleType__xlScaleLinear mixins Office$XlScaleType {}
declare class Office$XlScaleType__xlScaleLogarithmic mixins Office$XlScaleType {}


declare  class Office$XlSeriesNameLevel {
  constructor(...args: empty): mixed;
static +xlSeriesNameLevelAll: Class<Office$XlSeriesNameLevel__xlSeriesNameLevelAll> & Office$XlSeriesNameLevel__xlSeriesNameLevelAll & -1;// -1
static +xlSeriesNameLevelCustom: Class<Office$XlSeriesNameLevel__xlSeriesNameLevelCustom> & Office$XlSeriesNameLevel__xlSeriesNameLevelCustom & -2;// -2
static +xlSeriesNameLevelNone: Class<Office$XlSeriesNameLevel__xlSeriesNameLevelNone> & Office$XlSeriesNameLevel__xlSeriesNameLevelNone & -3;// -3

}

declare class Office$XlSeriesNameLevel__xlSeriesNameLevelAll mixins Office$XlSeriesNameLevel {}
declare class Office$XlSeriesNameLevel__xlSeriesNameLevelCustom mixins Office$XlSeriesNameLevel {}
declare class Office$XlSeriesNameLevel__xlSeriesNameLevelNone mixins Office$XlSeriesNameLevel {}


declare  class Office$XlSizeRepresents {
  constructor(...args: empty): mixed;
static +xlSizeIsArea: Class<Office$XlSizeRepresents__xlSizeIsArea> & Office$XlSizeRepresents__xlSizeIsArea & 1;// 1
static +xlSizeIsWidth: Class<Office$XlSizeRepresents__xlSizeIsWidth> & Office$XlSizeRepresents__xlSizeIsWidth & 2;// 2

}

declare class Office$XlSizeRepresents__xlSizeIsArea mixins Office$XlSizeRepresents {}
declare class Office$XlSizeRepresents__xlSizeIsWidth mixins Office$XlSizeRepresents {}


declare  class Office$XlTickLabelOrientation {
  constructor(...args: empty): mixed;
static +xlTickLabelOrientationAutomatic: Class<Office$XlTickLabelOrientation__xlTickLabelOrientationAutomatic> & Office$XlTickLabelOrientation__xlTickLabelOrientationAutomatic & -4105;// -4105
static +xlTickLabelOrientationDownward: Class<Office$XlTickLabelOrientation__xlTickLabelOrientationDownward> & Office$XlTickLabelOrientation__xlTickLabelOrientationDownward & -4170;// -4170
static +xlTickLabelOrientationHorizontal: Class<Office$XlTickLabelOrientation__xlTickLabelOrientationHorizontal> & Office$XlTickLabelOrientation__xlTickLabelOrientationHorizontal & -4128;// -4128
static +xlTickLabelOrientationUpward: Class<Office$XlTickLabelOrientation__xlTickLabelOrientationUpward> & Office$XlTickLabelOrientation__xlTickLabelOrientationUpward & -4171;// -4171
static +xlTickLabelOrientationVertical: Class<Office$XlTickLabelOrientation__xlTickLabelOrientationVertical> & Office$XlTickLabelOrientation__xlTickLabelOrientationVertical & -4166;// -4166

}

declare class Office$XlTickLabelOrientation__xlTickLabelOrientationAutomatic mixins Office$XlTickLabelOrientation {}
declare class Office$XlTickLabelOrientation__xlTickLabelOrientationDownward mixins Office$XlTickLabelOrientation {}
declare class Office$XlTickLabelOrientation__xlTickLabelOrientationHorizontal mixins Office$XlTickLabelOrientation {}
declare class Office$XlTickLabelOrientation__xlTickLabelOrientationUpward mixins Office$XlTickLabelOrientation {}
declare class Office$XlTickLabelOrientation__xlTickLabelOrientationVertical mixins Office$XlTickLabelOrientation {}


declare  class Office$XlTickLabelPosition {
  constructor(...args: empty): mixed;
static +xlTickLabelPositionHigh: Class<Office$XlTickLabelPosition__xlTickLabelPositionHigh> & Office$XlTickLabelPosition__xlTickLabelPositionHigh & -4127;// -4127
static +xlTickLabelPositionLow: Class<Office$XlTickLabelPosition__xlTickLabelPositionLow> & Office$XlTickLabelPosition__xlTickLabelPositionLow & -4134;// -4134
static +xlTickLabelPositionNextToAxis: Class<Office$XlTickLabelPosition__xlTickLabelPositionNextToAxis> & Office$XlTickLabelPosition__xlTickLabelPositionNextToAxis & 4;// 4
static +xlTickLabelPositionNone: Class<Office$XlTickLabelPosition__xlTickLabelPositionNone> & Office$XlTickLabelPosition__xlTickLabelPositionNone & -4142;// -4142

}

declare class Office$XlTickLabelPosition__xlTickLabelPositionHigh mixins Office$XlTickLabelPosition {}
declare class Office$XlTickLabelPosition__xlTickLabelPositionLow mixins Office$XlTickLabelPosition {}
declare class Office$XlTickLabelPosition__xlTickLabelPositionNextToAxis mixins Office$XlTickLabelPosition {}
declare class Office$XlTickLabelPosition__xlTickLabelPositionNone mixins Office$XlTickLabelPosition {}


declare  class Office$XlTickMark {
  constructor(...args: empty): mixed;
static +xlTickMarkCross: Class<Office$XlTickMark__xlTickMarkCross> & Office$XlTickMark__xlTickMarkCross & 4;// 4
static +xlTickMarkInside: Class<Office$XlTickMark__xlTickMarkInside> & Office$XlTickMark__xlTickMarkInside & 2;// 2
static +xlTickMarkNone: Class<Office$XlTickMark__xlTickMarkNone> & Office$XlTickMark__xlTickMarkNone & -4142;// -4142
static +xlTickMarkOutside: Class<Office$XlTickMark__xlTickMarkOutside> & Office$XlTickMark__xlTickMarkOutside & 3;// 3

}

declare class Office$XlTickMark__xlTickMarkCross mixins Office$XlTickMark {}
declare class Office$XlTickMark__xlTickMarkInside mixins Office$XlTickMark {}
declare class Office$XlTickMark__xlTickMarkNone mixins Office$XlTickMark {}
declare class Office$XlTickMark__xlTickMarkOutside mixins Office$XlTickMark {}


declare  class Office$XlTimeUnit {
  constructor(...args: empty): mixed;
static +xlDays: Class<Office$XlTimeUnit__xlDays> & Office$XlTimeUnit__xlDays & 0;// 0
static +xlMonths: Class<Office$XlTimeUnit__xlMonths> & Office$XlTimeUnit__xlMonths & 1;// 1
static +xlYears: Class<Office$XlTimeUnit__xlYears> & Office$XlTimeUnit__xlYears & 2;// 2

}

declare class Office$XlTimeUnit__xlDays mixins Office$XlTimeUnit {}
declare class Office$XlTimeUnit__xlMonths mixins Office$XlTimeUnit {}
declare class Office$XlTimeUnit__xlYears mixins Office$XlTimeUnit {}


declare  class Office$XlTrendlineType {
  constructor(...args: empty): mixed;
static +xlExponential: Class<Office$XlTrendlineType__xlExponential> & Office$XlTrendlineType__xlExponential & 5;// 5
static +xlLinear: Class<Office$XlTrendlineType__xlLinear> & Office$XlTrendlineType__xlLinear & -4132;// -4132
static +xlLogarithmic: Class<Office$XlTrendlineType__xlLogarithmic> & Office$XlTrendlineType__xlLogarithmic & -4133;// -4133
static +xlMovingAvg: Class<Office$XlTrendlineType__xlMovingAvg> & Office$XlTrendlineType__xlMovingAvg & 6;// 6
static +xlPolynomial: Class<Office$XlTrendlineType__xlPolynomial> & Office$XlTrendlineType__xlPolynomial & 3;// 3
static +xlPower: Class<Office$XlTrendlineType__xlPower> & Office$XlTrendlineType__xlPower & 4;// 4

}

declare class Office$XlTrendlineType__xlExponential mixins Office$XlTrendlineType {}
declare class Office$XlTrendlineType__xlLinear mixins Office$XlTrendlineType {}
declare class Office$XlTrendlineType__xlLogarithmic mixins Office$XlTrendlineType {}
declare class Office$XlTrendlineType__xlMovingAvg mixins Office$XlTrendlineType {}
declare class Office$XlTrendlineType__xlPolynomial mixins Office$XlTrendlineType {}
declare class Office$XlTrendlineType__xlPower mixins Office$XlTrendlineType {}


declare  class Office$XlUnderlineStyle {
  constructor(...args: empty): mixed;
static +xlUnderlineStyleDouble: Class<Office$XlUnderlineStyle__xlUnderlineStyleDouble> & Office$XlUnderlineStyle__xlUnderlineStyleDouble & -4119;// -4119
static +xlUnderlineStyleDoubleAccounting: Class<Office$XlUnderlineStyle__xlUnderlineStyleDoubleAccounting> & Office$XlUnderlineStyle__xlUnderlineStyleDoubleAccounting & 5;// 5
static +xlUnderlineStyleNone: Class<Office$XlUnderlineStyle__xlUnderlineStyleNone> & Office$XlUnderlineStyle__xlUnderlineStyleNone & -4142;// -4142
static +xlUnderlineStyleSingle: Class<Office$XlUnderlineStyle__xlUnderlineStyleSingle> & Office$XlUnderlineStyle__xlUnderlineStyleSingle & 2;// 2
static +xlUnderlineStyleSingleAccounting: Class<Office$XlUnderlineStyle__xlUnderlineStyleSingleAccounting> & Office$XlUnderlineStyle__xlUnderlineStyleSingleAccounting & 4;// 4

}

declare class Office$XlUnderlineStyle__xlUnderlineStyleDouble mixins Office$XlUnderlineStyle {}
declare class Office$XlUnderlineStyle__xlUnderlineStyleDoubleAccounting mixins Office$XlUnderlineStyle {}
declare class Office$XlUnderlineStyle__xlUnderlineStyleNone mixins Office$XlUnderlineStyle {}
declare class Office$XlUnderlineStyle__xlUnderlineStyleSingle mixins Office$XlUnderlineStyle {}
declare class Office$XlUnderlineStyle__xlUnderlineStyleSingleAccounting mixins Office$XlUnderlineStyle {}


declare  class Office$XlVAlign {
  constructor(...args: empty): mixed;
static +xlVAlignBottom: Class<Office$XlVAlign__xlVAlignBottom> & Office$XlVAlign__xlVAlignBottom & -4107;// -4107
static +xlVAlignCenter: Class<Office$XlVAlign__xlVAlignCenter> & Office$XlVAlign__xlVAlignCenter & -4108;// -4108
static +xlVAlignDistributed: Class<Office$XlVAlign__xlVAlignDistributed> & Office$XlVAlign__xlVAlignDistributed & -4117;// -4117
static +xlVAlignJustify: Class<Office$XlVAlign__xlVAlignJustify> & Office$XlVAlign__xlVAlignJustify & -4130;// -4130
static +xlVAlignTop: Class<Office$XlVAlign__xlVAlignTop> & Office$XlVAlign__xlVAlignTop & -4160;// -4160

}

declare class Office$XlVAlign__xlVAlignBottom mixins Office$XlVAlign {}
declare class Office$XlVAlign__xlVAlignCenter mixins Office$XlVAlign {}
declare class Office$XlVAlign__xlVAlignDistributed mixins Office$XlVAlign {}
declare class Office$XlVAlign__xlVAlignJustify mixins Office$XlVAlign {}
declare class Office$XlVAlign__xlVAlignTop mixins Office$XlVAlign {}


declare interface Office$Adjustments {
+Application: any,
+Count: number,
+Creator: number,
Item(Index: number): number,
+Parent: any,
(Index: number): number
} 

declare class Office$AnswerWizard  {
constructor(): this;
Application: any;
ClearFileList(): void;
Creator: number;
Files: Office$AnswerWizardFiles;
Parent: any;
ResetFileList(): void
}

declare interface Office$AnswerWizardFiles {
Add(FileName: string): void,
+Application: any,
+Count: number,
+Creator: number,
Delete(FileName: string): void,
Item(Index: number): string,
+Parent: any,
(Index: number): string
} 

declare class Office$Assistant  {
constructor(): this;
ActivateWizard(
WizardID: number,
act: Office$MsoWizardActType,
Animation?: Office$MsoAnimationType): void;
Animation: Office$MsoAnimationType;
Application: any;
AssistWithAlerts: boolean;
AssistWithHelp: boolean;
AssistWithWizards: boolean;
BalloonError: Office$MsoBalloonErrorType;
Creator: number;
DoAlert(
bstrAlertTitle: string,
bstrAlertText: string,
alb: Office$MsoAlertButtonType,
alc: Office$MsoAlertIconType,
ald: Office$MsoAlertDefaultType,
alq: Office$MsoAlertCancelType,
varfSysAlert: boolean): number;
EndWizard(
WizardID: number,
varfSuccess: boolean,
Animation?: Office$MsoAnimationType): void;
FeatureTips: boolean;
FileName: string;
GuessHelp: boolean;
Help(): void;
HighPriorityTips: boolean;
Item: string;
KeyboardShortcutTips: boolean;
Left: number;
MouseTips: boolean;
Move(xLeft: number, yTop: number): void;
MoveWhenInTheWay: boolean;
Name: string;
NewBalloon: Office$Balloon;
On: boolean;
Parent: any;
Reduced: boolean;
ResetTips(): void;
SearchWhenProgramming: boolean;
Sounds: boolean;
StartWizard(
On: boolean,
Callback: string,
PrivateX: number,
Animation?: Office$MsoAnimationType,
CustomTeaser?: any,
Top?: number,
Left?: number,
Bottom?: number,
Right?: number): number;
TipOfDay: boolean;
Top: number;
Visible: boolean
}

declare class Office$Balloon  {
constructor(): this;
Animation: Office$MsoAnimationType;
Application: any;
BalloonType: Office$MsoBalloonType;
Button: Office$MsoButtonSetType;
Callback: string;
Checkboxes: Office$BalloonCheckboxes;
Close(): void;
Creator: number;
Heading: string;
Icon: Office$MsoIconType;
Labels: Office$BalloonLabels;
Mode: Office$MsoModeType;
Name: string;
Parent: any;
Private: number;
SetAvoidRectangle(Left: number, Top: number, Right: number, Bottom: number): void;
Show(): Office$MsoBalloonButtonType;
Text: string
}

declare class Office$BalloonCheckbox  {
constructor(): this;
Application: any;
Checked: boolean;
Creator: number;
Item: string;
Name: string;
Parent: any;
Text: string
}

declare interface Office$BalloonCheckboxes {
+Application: any,
Count: number,
+Creator: number,
Item(Index: number): Office$BalloonCheckbox,
+Name: string,
+Parent: any,
(Index: number): Office$BalloonCheckbox
} 

declare class Office$BalloonLabel  {
constructor(): this;
Application: any;
Creator: number;
Item: string;
Name: string;
Parent: any;
Text: string
}

declare interface Office$BalloonLabels {
+Application: any,
Count: number,
+Creator: number,
Item(Index: number): Office$BalloonLabel,
+Name: string,
+Parent: any,
(Index: number): Office$BalloonLabel
} 

declare class Office$BulletFormat2  {
constructor(): this;
Application: any;
Character: number;
Creator: number;
Font: Office$Font2;
Number: number;
Parent: any;
Picture(FileName: string): void;
RelativeSize: number;
StartValue: number;
Style: Office$MsoNumberedBulletStyle;
Type: Office$MsoBulletType;
UseTextColor: Office$MsoTriState;
UseTextFont: Office$MsoTriState;
Visible: Office$MsoTriState
}

declare class Office$CalloutFormat  {
constructor(): this;
Accent: Office$MsoTriState;
Angle: Office$MsoCalloutAngleType;
Application: any;
AutoAttach: Office$MsoTriState;
AutoLength: Office$MsoTriState;
AutomaticLength(): void;
Border: Office$MsoTriState;
Creator: number;
CustomDrop(Drop: number): void;
CustomLength(Length: number): void;
Drop: number;
DropType: Office$MsoCalloutDropType;
Gap: number;
Length: number;
Parent: any;
PresetDrop(DropType: Office$MsoCalloutDropType): void;
Type: Office$MsoCalloutType
}

declare interface Office$CanvasShapes {
AddCallout(
Type: Office$MsoCalloutType,
Left: number,
Top: number,
Width: number,
Height: number): Office$Shape,
AddConnector(
Type: Office$MsoConnectorType,
BeginX: number,
BeginY: number,
EndX: number,
EndY: number): Office$Shape,
AddCurve(SafeArrayOfPoints: SafeArray<number>): Office$Shape,
AddLabel(
Orientation: Office$MsoTextOrientation,
Left: number,
Top: number,
Width: number,
Height: number): Office$Shape,
AddLine(BeginX: number, BeginY: number, EndX: number, EndY: number): Office$Shape,

/**
 * @param Width [Width=-1]
 * @param Height [Height=-1]
 */
AddPicture(
FileName: string,
LinkToFile: Office$MsoTriState,
SaveWithDocument: Office$MsoTriState,
Left: number,
Top: number,
Width?: number,
Height?: number): Office$Shape,
AddPolyline(SafeArrayOfPoints: SafeArray<number>): Office$Shape,
AddShape(
Type: Office$MsoAutoShapeType,
Left: number,
Top: number,
Width: number,
Height: number): Office$Shape,
AddTextbox(
Orientation: Office$MsoTextOrientation,
Left: number,
Top: number,
Width: number,
Height: number): Office$Shape,
AddTextEffect(
PresetTextEffect: Office$MsoPresetTextEffect,
Text: string,
FontName: string,
FontSize: number,
FontBold: Office$MsoTriState,
FontItalic: Office$MsoTriState,
Left: number,
Top: number): Office$Shape,
+Application: any,
+Background: Office$Shape,
BuildFreeform(
EditingType: Office$MsoEditingType,
X1: number,
Y1: number): Office$FreeformBuilder,
+Count: number,
+Creator: number,
Item(Index: number | string): Office$Shape,
+Parent: any,
Range(Index: any): Office$ShapeRange,
SelectAll(): void,
(Index: number | string): Office$Shape
} 

declare class Office$ChartColorFormat  {
constructor(): this;
_Default: number;
Application: any;
Creator: number;
Parent: any;
RGB: number;
SchemeColor: number;
Type: number
}

declare class Office$ChartFillFormat  {
constructor(): this;
Application: any;
BackColor: Office$ChartColorFormat;
Creator: number;
ForeColor: Office$ChartColorFormat;
GradientColorType: number;
GradientDegree: number;
GradientStyle: number;
GradientVariant: number;
OneColorGradient(Style: number, Variant: number, Degree: number): void;
Parent: any;
Pattern: number;
Patterned(Pattern: number): void;
PresetGradient(Style: number, Variant: number, PresetGradientType: number): void;
PresetGradientType: number;
PresetTexture: number;
PresetTextured(PresetTexture: number): void;
Solid(): void;
TextureName: string;
TextureType: number;
TwoColorGradient(Style: number, Variant: number): void;
Type: number;
UserPicture(
PictureFile: string,
Office$PictureFormat: any,
PictureStackUnit: any,
PicturePlacement: any): void;
UserTextured(TextureFile: string): void;
Visible: number
}

declare class Office$ChartFont  {
constructor(): this;
Application: any;
Background: any;
Bold: any;
Color: any;
ColorIndex: any;
Creator: number;
FontStyle: any;
Italic: any;
Name: any;
OutlineFont: any;
Parent: any;
Shadow: any;
Size: any;
StrikeThrough: any;
Subscript: any;
Superscript: any;
Underline: any
}

declare class Office$ColorFormat  {
constructor(): this;
Application: any;
Brightness: number;
Creator: number;
ObjectThemeColor: Office$MsoThemeColorIndex;
Parent: any;
RGB: number;
SchemeColor: number;
TintAndShade: number;
Type: Office$MsoColorType
}

declare class Office$COMAddIn  {
constructor(): this;
Application: any;
Connect: boolean;
Creator: number;
Description: string;
Guid: string;
Object: any;
Parent: any;
ProgId: string
}

declare interface Office$COMAddIns {
+Application: any,
+Count: number,
+Creator: number,
Item(Index: number | string): Office$COMAddIn,
+Parent: any,
SetAppModal(varfModal: boolean): void,
Update(): void,
(Index: number | string): Office$COMAddIn
} 

declare class Office$CommandBar  {
constructor(): this;
accChild(varChild: any): any;
accChildCount: number;
accDefaultAction(varChild?: any): string;
accDescription(varChild?: any): string;
accDoDefaultAction(varChild?: any): void;
accFocus: any;
accHelp(varChild?: any): string;
accHelpTopic(pszHelpFile: string, varChild?: any): number;
accHitTest(xLeft: number, yTop: number): any;
accKeyboardShortcut(varChild?: any): string;
accLocation(
pxLeft: number,
pyTop: number,
pcxWidth: number,
pcyHeight: number,
varChild?: any): void;
accName(varChild?: any): string;
accNavigate(navDir: number, varStart?: any): any;
accParent: any;
accRole(varChild?: any): any;
accSelect(flagsSelect: number, varChild?: any): void;
accSelection: any;
accState(varChild?: any): any;
accValue(varChild?: any): string;
AdaptiveMenu: boolean;
Application: any;
BuiltIn: boolean;
Context: string;
Controls: Office$CommandBarControls;
Creator: number;
Delete(): void;
Enabled: boolean;
FindControl(
Type?: any,
Id?: any,
Tag?: any,
Visible?: boolean,
Recursive?: boolean): Office$CommandBarControl;
Height: number;
Id: number;
Index: number;
InstanceId: number;
InstanceIdPtr: any;
Left: number;
Name: string;
NameLocal: string;
Parent: any;
Position: Office$MsoBarPosition;
Protection: Office$MsoBarProtection;
Reset(): void;
RowIndex: number;
ShowPopup(x?: number, y?: number): void;
Top: number;
Type: Office$MsoBarType;
Visible: boolean;
Width: number
}

declare class Office$CommandBarButton  {
constructor(): this;
accChild(varChild: any): any;
accChildCount: number;
accDefaultAction(varChild?: any): string;
accDescription(varChild?: any): string;
accDoDefaultAction(varChild?: any): void;
accFocus: any;
accHelp(varChild?: any): string;
accHelpTopic(pszHelpFile: string, varChild?: any): number;
accHitTest(xLeft: number, yTop: number): any;
accKeyboardShortcut(varChild?: any): string;
accLocation(
pxLeft: number,
pyTop: number,
pcxWidth: number,
pcyHeight: number,
varChild?: any): void;
accName(varChild?: any): string;
accNavigate(navDir: number, varStart?: any): any;
accParent: any;
accRole(varChild?: any): any;
accSelect(flagsSelect: number, varChild?: any): void;
accSelection: any;
accState(varChild?: any): any;
accValue(varChild?: any): string;
Application: any;
BeginGroup: boolean;
BuiltIn: boolean;
BuiltInFace: boolean;
Caption: string;
Control: any;
Copy(Bar?: Office$CommandBar, Before?: number): Office$CommandBarControl;
CopyFace(): void;
Creator: number;
Delete(Temporary?: boolean): void;
DescriptionText: string;
Enabled: boolean;
Execute(): void;
FaceId: number;
Height: number;
HelpContextId: number;
HelpFile: string;
HyperlinkType: Office$MsoCommandBarButtonHyperlinkType;
Id: number;
Index: number;
InstanceId: number;
InstanceIdPtr: any;
IsPriorityDropped: boolean;
Left: number;
Mask: stdole.IPictureDisp;
Move(Bar?: Office$CommandBar, Before?: number): Office$CommandBarControl;
OLEUsage: Office$MsoControlOLEUsage;
OnAction: string;
Parameter: string;
Parent: Office$CommandBar;
PasteFace(): void;
Picture: stdole.IPictureDisp;
Priority: number;
Reserved1(): void;
Reserved2(): void;
Reserved3(): void;
Reserved4(): void;
Reserved5(): void;
Reserved6(): void;
Reserved7(): void;
Reset(): void;
SetFocus(): void;
ShortcutText: string;
State: Office$MsoButtonState;
Style: Office$MsoButtonStyle;
Tag: string;
TooltipText: string;
Top: number;
Type: Office$MsoControlType;
Visible: boolean;
Width: number
}

declare class Office$CommandBarComboBox  {
constructor(): this;
accChild(varChild: any): any;
accChildCount: number;
accDefaultAction(varChild?: any): string;
accDescription(varChild?: any): string;
accDoDefaultAction(varChild?: any): void;
accFocus: any;
accHelp(varChild?: any): string;
accHelpTopic(pszHelpFile: string, varChild?: any): number;
accHitTest(xLeft: number, yTop: number): any;
accKeyboardShortcut(varChild?: any): string;
accLocation(
pxLeft: number,
pyTop: number,
pcxWidth: number,
pcyHeight: number,
varChild?: any): void;
accName(varChild?: any): string;
accNavigate(navDir: number, varStart?: any): any;
accParent: any;
accRole(varChild?: any): any;
accSelect(flagsSelect: number, varChild?: any): void;
accSelection: any;
accState(varChild?: any): any;
accValue(varChild?: any): string;
AddItem(Text: string, Index?: any): void;
Application: any;
BeginGroup: boolean;
BuiltIn: boolean;
Caption: string;
Clear(): void;
Control: any;
Copy(Bar?: Office$CommandBar, Before?: number): Office$CommandBarControl;
Creator: number;
Delete(Temporary?: boolean): void;
DescriptionText: string;
DropDownLines: number;
DropDownWidth: number;
Enabled: boolean;
Execute(): void;
Height: number;
HelpContextId: number;
HelpFile: string;
Id: number;
Index: number;
InstanceId: number;
InstanceIdPtr: any;
IsPriorityDropped: boolean;
Left: number;
List(Index: number): string;
ListCount: number;
ListHeaderCount: number;
ListIndex: number;
Move(Bar?: Office$CommandBar, Before?: number): Office$CommandBarControl;
OLEUsage: Office$MsoControlOLEUsage;
OnAction: string;
Parameter: string;
Parent: Office$CommandBar;
Priority: number;
RemoveItem(Index: number): void;
Reserved1(): void;
Reserved2(): void;
Reserved3(): void;
Reserved4(): void;
Reserved5(): void;
Reserved6(): void;
Reserved7(): void;
Reset(): void;
SetFocus(): void;
Style: Office$MsoComboStyle;
Tag: string;
Text: string;
TooltipText: string;
Top: number;
Type: Office$MsoControlType;
Visible: boolean;
Width: number
}

declare class Office$CommandBarControl  {
constructor(): this;
accChild(varChild: any): any;
accChildCount: number;
accDefaultAction(varChild?: any): string;
accDescription(varChild?: any): string;
accDoDefaultAction(varChild?: any): void;
accFocus: any;
accHelp(varChild?: any): string;
accHelpTopic(pszHelpFile: string, varChild?: any): number;
accHitTest(xLeft: number, yTop: number): any;
accKeyboardShortcut(varChild?: any): string;
accLocation(
pxLeft: number,
pyTop: number,
pcxWidth: number,
pcyHeight: number,
varChild?: any): void;
accName(varChild?: any): string;
accNavigate(navDir: number, varStart?: any): any;
accParent: any;
accRole(varChild?: any): any;
accSelect(flagsSelect: number, varChild?: any): void;
accSelection: any;
accState(varChild?: any): any;
accValue(varChild?: any): string;
Application: any;
BeginGroup: boolean;
BuiltIn: boolean;
Caption: string;
Control: any;
Copy(Bar?: Office$CommandBar, Before?: number): Office$CommandBarControl;
Creator: number;
Delete(Temporary?: boolean): void;
DescriptionText: string;
Enabled: boolean;
Execute(): void;
Height: number;
HelpContextId: number;
HelpFile: string;
Id: number;
Index: number;
InstanceId: number;
IsPriorityDropped: boolean;
Left: number;
Move(Bar?: Office$CommandBar, Before?: number): Office$CommandBarControl;
OLEUsage: Office$MsoControlOLEUsage;
OnAction: string;
Parameter: string;
Parent: Office$CommandBar;
Priority: number;
Reserved1(): void;
Reserved2(): void;
Reserved3(): void;
Reserved4(): void;
Reserved5(): void;
Reserved6(): void;
Reserved7(): void;
Reset(): void;
SetFocus(): void;
Tag: string;
TooltipText: string;
Top: number;
Type: Office$MsoControlType;
Visible: boolean;
Width: number
}

declare interface Office$CommandBarControls {
Add(
Type?: Office$MsoControlType.msoControlButton
| Office$MsoControlType.msoControlEdit
| Office$MsoControlType.msoControlDropdown
| Office$MsoControlType.msoControlComboBox
| Office$MsoControlType.msoControlPopup,
Id?: number,
Parameter?: any,
Before?: number,
Temporary?: boolean): Office$CommandBarControl,
+Application: any,
+Count: number,
+Creator: number,
Item(Index: number | string): Office$CommandBarControl,
+Parent: Office$CommandBar,
(Index: number | string): Office$CommandBarControl
} 

declare interface Office$CommandBars {
+ActionControl: Office$CommandBarControl,
+ActiveMenuBar: Office$CommandBar,
AdaptiveMenus: boolean,
Add(
Name?: string,
Position?: Office$MsoBarPosition,
MenuBar?: boolean,
Temporary?: boolean): Office$CommandBar,
AddEx(
TbidOrName?: any,
Position?: any,
MenuBar?: any,
Temporary?: any,
TbtrProtection?: any): Office$CommandBar,
+Application: any,
CommitRenderingTransaction(hwnd: number): void,
+Count: number,
+Creator: number,
DisableAskAQuestionDropdown: boolean,
DisableCustomize: boolean,
DisplayFonts: boolean,
DisplayKeysInTooltips: boolean,
DisplayTooltips: boolean,
ExecuteMso(idMso: string): void,
FindControl(
Type?: Office$MsoControlType,
Id?: any,
Tag?: any,
Visible?: boolean): Office$CommandBarControl | null,
FindControls(
Type?: Office$MsoControlType,
Id?: any,
Tag?: any,
Visible?: boolean): Office$CommandBarControls | null,
GetEnabledMso(idMso: string): boolean,
GetImageMso(idMso: string, Width: number, Height: number): stdole.IPictureDisp,
GetLabelMso(idMso: string): string,
GetPressedMso(idMso: string): boolean,
GetScreentipMso(idMso: string): string,
GetSupertipMso(idMso: string): string,
GetVisibleMso(idMso: string): boolean,
IdsString(ids: number, pbstrName: string): number,
Item(Index: number | string): Office$CommandBar,
LargeButtons: boolean,
MenuAnimationStyle: Office$MsoMenuAnimation,
+Parent: any,
ReleaseFocus(): void,
TmcGetName(tmc: number, pbstrName: string): number,
(Index: number | string): Office$CommandBar
} 

declare class Office$ConnectorFormat  {
constructor(): this;
Application: any;
BeginConnect(ConnectedShape: Office$Shape, ConnectionSite: number): void;
BeginConnected: Office$MsoTriState;
BeginConnectedShape: Office$Shape;
BeginConnectionSite: number;
BeginDisconnect(): void;
Creator: number;
EndConnect(ConnectedShape: Office$Shape, ConnectionSite: number): void;
EndConnected: Office$MsoTriState;
EndConnectedShape: Office$Shape;
EndConnectionSite: number;
EndDisconnect(): void;
Parent: any;
Type: Office$MsoConnectorType
}

declare class Office$ContactCard  {
constructor(): this;
Application: any;
Close(): void;
Creator: number;

/**
 * @param boolean [ShowWithDelay=false]
 */
Show(
CardStyle: Office$MsoContactCardStyle,
RectangleLeft: number,
RectangleRight: number,
RectangleTop: number,
RectangleBottom: number,
HorizontalPosition: number,
ShowWithDelay?: boolean): void
}

declare class Office$Crop  {
constructor(): this;
Application: any;
Creator: number;
PictureHeight: number;
PictureOffsetX: number;
PictureOffsetY: number;
PictureWidth: number;
ShapeHeight: number;
ShapeLeft: number;
ShapeTop: number;
ShapeWidth: number
}

declare class Office$CustomTaskPane  {
constructor(): this;
Application: any;
ContentControl: any;
Delete(): void;
DockPosition: Office$MsoCTPDockPosition;
DockPositionRestrict: Office$MsoCTPDockPositionRestrict;
Height: number;
Title: string;
Visible: boolean;
Width: number;
Window: any
}

declare class Office$CustomXMLNode  {
constructor(): this;

/**
 * @param Name [Name='']
 * @param NamespaceURI [NamespaceURI='']
 * @param NodeType [NodeType=1]
 * @param NodeValue [NodeValue='']
 */
AppendChildNode(
Name?: string,
NamespaceURI?: string,
NodeType?: Office$MsoCustomXMLNodeType,
NodeValue?: string): void;
AppendChildSubtree(XML: string): void;
Application: any;
Attributes: Office$CustomXMLNodes;
BaseName: string;
ChildNodes: Office$CustomXMLNodes;
Creator: number;
Delete(): void;
FirstChild: Office$CustomXMLNode;
HasChildNodes(): boolean;

/**
 * @param Name [Name='']
 * @param NamespaceURI [NamespaceURI='']
 * @param NodeType [NodeType=1]
 * @param NodeValue [NodeValue='']
 * @param NextSibling [NextSibling=0]
 */
InsertNodeBefore(
Name?: string,
NamespaceURI?: string,
NodeType?: Office$MsoCustomXMLNodeType,
NodeValue?: string,
NextSibling?: Office$CustomXMLNode): void;

/**
 * @param NextSibling [NextSibling=0]
 */
InsertSubtreeBefore(XML: string, NextSibling?: Office$CustomXMLNode): void;
LastChild: Office$CustomXMLNode;
NamespaceURI: string;
NextSibling: Office$CustomXMLNode;
NodeType: Office$MsoCustomXMLNodeType;
NodeValue: string;
OwnerDocument: any;
OwnerPart: Office$CustomXMLPart;
Parent: any;
ParentNode: Office$CustomXMLNode;
PreviousSibling: Office$CustomXMLNode;
RemoveChild(Child: Office$CustomXMLNode): void;

/**
 * @param Name [Name='']
 * @param NamespaceURI [NamespaceURI='']
 * @param NodeType [NodeType=1]
 * @param NodeValue [NodeValue='']
 */
ReplaceChildNode(
OldNode: Office$CustomXMLNode,
Name?: string,
NamespaceURI?: string,
NodeType?: Office$MsoCustomXMLNodeType,
NodeValue?: string): void;
ReplaceChildSubtree(XML: string, OldNode: Office$CustomXMLNode): void;
SelectNodes(XPath: string): Office$CustomXMLNodes;
SelectSingleNode(XPath: string): Office$CustomXMLNode;
Text: string;
XML: string;
XPath: string
}

declare interface Office$CustomXMLNodes {
+Application: any,
+Count: number,
+Creator: number,
Item(Index: number): Office$CustomXMLNode,
+Parent: any,
(Index: number): Office$CustomXMLNode
} 

declare class Office$CustomXMLPart  {
constructor(): this;

/**
 * @param Name [Name='']
 * @param NamespaceURI [NamespaceURI='']
 * @param NextSibling [NextSibling=0]
 * @param NodeType [NodeType=1]
 * @param NodeValue [NodeValue='']
 */
AddNode(
Parent: Office$CustomXMLNode,
Name?: string,
NamespaceURI?: string,
NextSibling?: Office$CustomXMLNode,
NodeType?: Office$MsoCustomXMLNodeType,
NodeValue?: string): void;
Application: any;
BuiltIn: boolean;
Creator: number;
Delete(): void;
DocumentElement: Office$CustomXMLNode;
Errors: Office$CustomXMLValidationErrors;
Id: string;
Load(FilePath: string): boolean;
LoadXML(XML: string): boolean;
NamespaceManager: Office$CustomXMLPrefixMappings;
NamespaceURI: string;
Parent: any;
SchemaCollection: Office$CustomXMLSchemaCollection;
SelectNodes(XPath: string): Office$CustomXMLNodes;
SelectSingleNode(XPath: string): Office$CustomXMLNode;
XML: string
}

declare interface Office$CustomXMLParts {

/**
 * @param XML [XML='']
 */
Add(
XML?: string,
SchemaCollection?: Office$CustomXMLSchemaCollection): Office$CustomXMLPart,
+Application: any,
+Count: number,
+Creator: number,
Item(Index: number | string): Office$CustomXMLPart,
+Parent: any,
SelectByID(Id: string): Office$CustomXMLPart,
SelectByNamespace(NamespaceURI: string): Office$CustomXMLParts,
(Index: number | string): Office$CustomXMLPart
} 

declare class Office$CustomXMLPrefixMapping  {
constructor(): this;
Application: any;
Creator: number;
NamespaceURI: string;
Parent: any;
Prefix: string
}

declare interface Office$CustomXMLPrefixMappings {
AddNamespace(Prefix: string, NamespaceURI: string): void,
+Application: any,
+Count: number,
+Creator: number,
Item(Index: number | string): Office$CustomXMLPrefixMapping,
LookupNamespace(Prefix: string): string,
LookupPrefix(NamespaceURI: string): string,
+Parent: any,
(Index: number | string): Office$CustomXMLPrefixMapping
} 

declare class Office$CustomXMLSchema  {
constructor(): this;
Application: any;
Creator: number;
Delete(): void;
Location: string;
NamespaceURI: string;
Parent: any;
Reload(): void
}

declare interface Office$CustomXMLSchemaCollection {

/**
 * @param NamespaceURI [NamespaceURI='']
 * @param Alias [Alias='']
 * @param FileName [FileName='']
 * @param InstallForAllUsers [InstallForAllUsers=false]
 */
Add(
NamespaceURI?: string,
Alias?: string,
FileName?: string,
InstallForAllUsers?: boolean): Office$CustomXMLSchema,
AddCollection(SchemaCollection: Office$CustomXMLSchemaCollection): void,
+Application: any,
+Count: number,
+Creator: number,
Item(Index: number | string): Office$CustomXMLSchema,
NamespaceURI(Index: number): string,
+Parent: any,
Validate(): boolean,
(Index: number | string): Office$CustomXMLSchema
} 

declare class Office$CustomXMLValidationError  {
constructor(): this;
Application: any;
Creator: number;
Delete(): void;
ErrorCode: number;
Name: string;
Node: Office$CustomXMLNode;
Parent: any;
Text: string;
Type: Office$MsoCustomXMLValidationErrorType
}

declare interface Office$CustomXMLValidationErrors {

/**
 * @param ErrorText [ErrorText='']
 * @param ClearedOnUpdate [ClearedOnUpdate=true]
 */
Add(
Node: Office$CustomXMLNode,
ErrorName: string,
ErrorText?: string,
ClearedOnUpdate?: boolean): void,
+Application: any,
+Count: number,
+Creator: number,
Item(Index: number): Office$CustomXMLValidationError,
+Parent: any,
(Index: number): Office$CustomXMLValidationError
} 

declare class Office$DiagramNode  {
constructor(): this;

/**
 * @param Pos [Pos=2]
 * @param NodeType [NodeType=1]
 */
AddNode(
Pos?: Office$MsoRelativeNodePosition,
NodeType?: Office$MsoDiagramNodeType): Office$DiagramNode;
Application: any;
Children: Office$DiagramNodeChildren;

/**
 * @param Pos [Pos=2]
 */
CloneNode(
CopyChildren: boolean,
TargetNode: Office$DiagramNode,
Pos?: Office$MsoRelativeNodePosition): Office$DiagramNode;
Creator: number;
Delete(): void;
Diagram: Office$IMsoDiagram;
Layout: Office$MsoOrgChartLayoutType;
MoveNode(TargetNode: Office$DiagramNode, Pos: Office$MsoRelativeNodePosition): void;
NextNode(): Office$DiagramNode;
Parent: any;
PrevNode(): Office$DiagramNode;
ReplaceNode(TargetNode: Office$DiagramNode): void;
Root: Office$DiagramNode;
Office$Shape: Office$Shape;

/**
 * @param SwapChildren [SwapChildren=true]
 */
SwapNode(TargetNode: Office$DiagramNode, SwapChildren?: boolean): void;
TextShape: Office$Shape;
TransferChildren(ReceivingNode: Office$DiagramNode): void
}

declare interface Office$DiagramNodeChildren {

/**
 * @param Index [Index=-1]
 * @param NodeType [NodeType=1]
 */
AddNode(Index?: any, NodeType?: Office$MsoDiagramNodeType): Office$DiagramNode,
+Application: any,
+Count: number,
+Creator: number,
+FirstChild: Office$DiagramNode,
Item(Index: any): Office$DiagramNode,
+LastChild: Office$DiagramNode,
+Parent: any,
SelectAll(): void,
(Index: any): Office$DiagramNode
} 

declare interface Office$DiagramNodes {
+Application: any,
+Count: number,
+Creator: number,
Item(Index: any): Office$DiagramNode,
+Parent: any,
SelectAll(): void,
(Index: any): Office$DiagramNode
} 

declare class Office$DocumentInspector  {
constructor(): this;
Application: any;
Creator: number;
Description: string;
Fix(Status: Office$MsoDocInspectorStatus, Results: string): void;
Inspect(Status: Office$MsoDocInspectorStatus, Results: string): void;
Name: string;
Parent: any
}

declare interface Office$DocumentInspectors {
+Application: any,
+Count: number,
+Creator: number,
Item(Index: number): Office$DocumentInspector,
+Parent: any,
(Index: number): Office$DocumentInspector
} 

declare interface Office$DocumentProperties<TApplication> {
Add(
Name: string,
LinkToContent: boolean,
Type?: Office$MsoDocProperties,
Value?: any,
LinkSource?: string): Office$DocumentProperty,
Application: TApplication,
Count: number,
Creator: number,
Item(index: string | number): Office$DocumentProperty<TApplication>,
Parent: any,
(index: string | number): Office$DocumentProperty<TApplication>
} 

declare class Office$DocumentProperty<TApplication>  {
constructor(): this;
Application: TApplication;
Creator: number;
Delete(): void;
LinkSource: string;
LinkToContent: boolean;
Name: string;
Parent: any;
Type: Office$MsoDocProperties;
Value: any
}

declare class Office$DocumentLibraryVersion  {
constructor(): this;
Application: any;
Comments: string;
Creator: number;
Delete(): void;
Index: number;
Modified: VarDate;
ModifiedBy: string;
Open(): any;
Parent: any;
Restore(): any
}

declare interface Office$DocumentLibraryVersions {
+Application: any,
+Count: number,
+Creator: number,
+IsVersioningEnabled: boolean,
Item(lIndex: number): Office$DocumentLibraryVersion,
+Parent: any,
(lIndex: number): Office$DocumentLibraryVersion
} 

declare class Office$EffectParameter  {
constructor(): this;
Application: any;
Creator: number;
Name: string;
Value: any
}

declare interface Office$EffectParameters {
+Application: any,
+Count: number,
+Creator: number,
Item(Index: string | number): Office$EffectParameter,
(Index: string | number): Office$EffectParameter
} 

declare class Office$FileDialog  {
constructor(): this;
AllowMultiSelect: boolean;
Application: any;
ButtonName: string;
Creator: number;
DialogType: Office$MsoFileDialogType;
Execute(): void;
FilterIndex: number;
Filters: Office$FileDialogFilters;
InitialFileName: string;
InitialView: Office$MsoFileDialogView;
Item: string;
Parent: any;
SelectedItems: Office$FileDialogSelectedItems;
Show(): number;
Title: string
}

declare class Office$FileDialogFilter  {
constructor(): this;
Application: any;
Creator: number;
Description: string;
Extensions: string;
Parent: any
}

declare interface Office$FileDialogFilters {
Add(
Description: string,
Extensions: string,
Position?: number): Office$FileDialogFilter,
+Application: any,
Clear(): void,
+Count: number,
+Creator: number,
Delete(filter?: any): void,
Item(Index: number): Office$FileDialogFilter,
+Parent: any,
(Index: number): Office$FileDialogFilter
} 

declare interface Office$FileDialogSelectedItems {
+Application: any,
+Count: number,
+Creator: number,
Item(Index: number): string,
+Parent: any,
(Index: number): string
} 

declare class Office$FileSearch  {
constructor(): this;
Application: any;
Creator: number;

/**
 * @param SortBy [SortBy=1]
 * @param SortOrder [SortOrder=1]
 * @param AlwaysAccurate [AlwaysAccurate=true]
 */
Execute(
SortBy?: Office$MsoSortBy,
SortOrder?: Office$MsoSortOrder,
AlwaysAccurate?: boolean): number;
FileName: string;
FileType: Office$MsoFileType;
Office$FileTypes: Office$FileTypes;
Office$FoundFiles: Office$FoundFiles;
LastModified: Office$MsoLastModified;
LookIn: string;
MatchAllWordForms: boolean;
MatchTextExactly: boolean;
NewSearch(): void;
Office$PropertyTests: Office$PropertyTests;
RefreshScopes(): void;
Office$SearchFolders: Office$SearchFolders;
Office$SearchScopes: Office$SearchScopes;
SearchSubFolders: boolean;
TextOrProperty: string
}

declare interface Office$FileTypes {
Add(FileType: Office$MsoFileType): void,
+Application: any,
+Count: number,
+Creator: number,
Item(Index: number): Office$MsoFileType,
Remove(Index: number): void,
(Index: number): Office$MsoFileType
} 

declare class Office$FillFormat  {
constructor(): this;
Application: any;
BackColor: Office$ColorFormat;
Background(): void;
Creator: number;
ForeColor: Office$ColorFormat;
GradientAngle: number;
GradientColorType: Office$MsoGradientColorType;
GradientDegree: number;
Office$GradientStops: Office$GradientStops;
GradientStyle: Office$MsoGradientStyle;
GradientVariant: number;
OneColorGradient(Style: Office$MsoGradientStyle, Variant: number, Degree: number): void;
Parent: any;
Pattern: Office$MsoPatternType;
Patterned(Pattern: Office$MsoPatternType): void;
Office$PictureEffects: Office$PictureEffects;
PresetGradient(
Style: Office$MsoGradientStyle,
Variant: number,
PresetGradientType: Office$MsoPresetGradientType): void;
PresetGradientType: Office$MsoPresetGradientType;
PresetTexture: Office$MsoPresetTexture;
PresetTextured(PresetTexture: Office$MsoPresetTexture): void;
RotateWithObject: Office$MsoTriState;
Solid(): void;
TextureAlignment: Office$MsoTextureAlignment;
TextureHorizontalScale: number;
TextureName: string;
TextureOffsetX: number;
TextureOffsetY: number;
TextureTile: Office$MsoTriState;
TextureType: Office$MsoTextureType;
TextureVerticalScale: number;
Transparency: number;
TwoColorGradient(Style: Office$MsoGradientStyle, Variant: number): void;
Type: Office$MsoFillType;
UserPicture(PictureFile: string): void;
UserTextured(TextureFile: string): void;
Visible: Office$MsoTriState
}

declare class Office$Font2  {
constructor(): this;
Allcaps: Office$MsoTriState;
Application: any;
AutorotateNumbers: Office$MsoTriState;
BaselineOffset: number;
Bold: Office$MsoTriState;
Caps: Office$MsoTextCaps;
Creator: number;
DoubleStrikeThrough: Office$MsoTriState;
Embeddable: Office$MsoTriState;
Embedded: Office$MsoTriState;
Equalize: Office$MsoTriState;
Fill: Office$FillFormat;
Glow: Office$GlowFormat;
Highlight: Office$ColorFormat;
Italic: Office$MsoTriState;
Kerning: number;
Line: Office$LineFormat;
Name: string;
NameAscii: string;
NameComplexScript: string;
NameFarEast: string;
NameOther: string;
Parent: any;
Reflection: Office$ReflectionFormat;
Shadow: Office$ShadowFormat;
Size: number;
Smallcaps: Office$MsoTriState;
Office$SoftEdgeFormat: Office$MsoSoftEdgeType;
Spacing: number;
Strike: Office$MsoTextStrike;
StrikeThrough: Office$MsoTriState;
Subscript: Office$MsoTriState;
Superscript: Office$MsoTriState;
UnderlineColor: Office$ColorFormat;
UnderlineStyle: Office$MsoTextUnderlineType;
WordArtformat: Office$MsoPresetTextEffect
}

declare interface Office$FoundFiles {
+Application: any,
+Count: number,
+Creator: number,
Item(Index: number): string,
(Index: number): string
} 

declare class Office$FreeformBuilder  {
constructor(): this;

/**
 * @param X2 [X2=0]
 * @param Y2 [Y2=0]
 * @param X3 [X3=0]
 * @param Y3 [Y3=0]
 */
AddNodes(
SegmentType: Office$MsoSegmentType,
EditingType: Office$MsoEditingType,
X1: number,
Y1: number,
X2?: number,
Y2?: number,
X3?: number,
Y3?: number): void;
Application: any;
ConvertToShape(): Office$Shape;
Creator: number;
Parent: any
}

declare class Office$GlowFormat  {
constructor(): this;
Application: any;
Color: Office$ColorFormat;
Creator: number;
Radius: number;
Transparency: number
}

declare class Office$GradientStop  {
constructor(): this;
Application: any;
Color: Office$ColorFormat;
Creator: number;
Position: number;
Transparency: number
}

declare interface Office$GradientStops {
+Application: any,
+Count: number,
+Creator: number,

/**
 * @param Index [Index=-1]
 */
Delete(Index?: number): void,

/**
 * @param Transparency [Transparency=0]
 * @param Index [Index=-1]
 */
Insert(RGB: number, Position: number, Transparency?: number, Index?: number): void,

/**
 * @param Transparency [Transparency=0]
 * @param Index [Index=-1]
 * @param Brightness [Brightness=0]
 */
Insert2(
RGB: number,
Position: number,
Transparency?: number,
Index?: number,
Brightness?: number): void,
Item(Index: number): Office$GradientStop,
(Index: number): Office$GradientStop
} 

declare interface Office$GroupShapes {
+Application: any,
+Count: number,
+Creator: number,
Item(Index: any): Office$Shape,
+Parent: any,
Range(Index: any): Office$ShapeRange,
(Index: any): Office$Shape
} 

declare class Office$HTMLProject  {
constructor(): this;
Application: any;
Creator: number;
Office$HTMLProjectItems: Office$HTMLProjectItems;

/**
 * @param OpenKind [OpenKind=0]
 */
Open(OpenKind?: Office$MsoHTMLProjectOpen): void;
Parent: any;

/**
 * @param Refresh [Refresh=true]
 */
RefreshDocument(Refresh?: boolean): void;

/**
 * @param Refresh [Refresh=true]
 */
RefreshProject(Refresh?: boolean): void;
State: Office$MsoHTMLProjectState
}

declare class Office$HTMLProjectItem  {
constructor(): this;
Application: any;
Creator: number;
IsOpen: boolean;
LoadFromFile(FileName: string): void;
Name: string;

/**
 * @param OpenKind [OpenKind=0]
 */
Open(OpenKind?: Office$MsoHTMLProjectOpen): void;
Parent: any;
SaveCopyAs(FileName: string): void;
Text: string
}

declare interface Office$HTMLProjectItems {
+Application: any,
+Count: number,
+Creator: number,
Item(Index: any): Office$HTMLProjectItem,
+Parent: any,
(Index: any): Office$HTMLProjectItem
} 

declare class Office$IAssistance  {
constructor(): this;

/**
 * ClearDefaultContext Method
 */
ClearDefaultContext(HelpId: string): void;

/**
 * SearchHelp Method
 * @param Scope [Scope='']
 */
SearchHelp(Query: string, Scope?: string): void;

/**
 * SetDefaultContext Method
 */
SetDefaultContext(HelpId: string): void;

/**
 * ShowHelp Method
 * @param HelpId [HelpId='']
 * @param Scope [Scope='']
 */
ShowHelp(HelpId?: string, Scope?: string): void
}


/**
 * For Macintosh only
 */
declare class Office$IFind  {
constructor(): this;
Author: string;
DateCreatedFrom: any;
DateCreatedTo: any;
DateSavedFrom: any;
DateSavedTo: any;
Delete(bstrQueryName: string): void;
Execute(): void;
FileType: number;
Keywords: string;
ListBy: Office$MsoFileFindListBy;
Load(bstrQueryName: string): void;
MatchCase: boolean;
Name: string;
Options: Office$MsoFileFindOptions;
PatternMatch: boolean;
Results: Office$IFoundFiles;
Save(bstrQueryName: string): void;
SavedBy: string;
SearchPath: string;
SelectedFile: number;
Show(): number;
SortBy: Office$MsoFileFindSortBy;
SubDir: boolean;
Subject: string;
Text: string;
Title: string;
View: Office$MsoFileFindView
}


/**
 * For Macintosh only
 */
declare interface Office$IFoundFiles {
+Count: number,
Item(Index: number): string,
(Index: number): string
} 

declare class Office$IMsoBorder  {
constructor(): this;
Application: any;
Color: any;
ColorIndex: any;
Creator: number;
LineStyle: any;
Parent: any;
Weight: any
}

declare class Office$IMsoCharacters  {
constructor(): this;
Application: any;
Caption: string;
Count: number;
Creator: number;
Delete(): any;
Font: Office$ChartFont;
Insert(bstr: string): any;
Parent: any;
PhoneticCharacters: string;
Text: string
}

declare class Office$IMsoChart  {
constructor(): this;

/**
 * @param Type [Type=2]
 */
_ApplyDataLabels(
Type?: Office$XlDataLabelsType,
IMsoLegendKey?: any,
AutoText?: any,
HasLeaderLines?: any): void;
Application: any;
ApplyChartTemplate(bstrFileName: string): void;
ApplyCustomType(ChartType: Office$XlChartType, TypeName?: any): void;

/**
 * @param Type [Type=2]
 */
ApplyDataLabels(
Type?: Office$XlDataLabelsType,
IMsoLegendKey?: any,
AutoText?: any,
HasLeaderLines?: any,
ShowSeriesName?: any,
ShowCategoryName?: any,
ShowValue?: any,
ShowPercentage?: any,
ShowBubbleSize?: any,
Separator?: any): void;
ApplyLayout(Layout: number, varChartType?: any): void;
Area3DGroup: Office$IMsoChartGroup;
AreaGroups(Index?: any): any;
AutoFormat(rGallery: number, varFormat?: any): void;
AutoScaling: boolean;

/**
 * @param AxisGroup [AxisGroup=1]
 */
Axes(Type: any, AxisGroup?: Office$XlAxisGroup): any;
BackWall: Office$IMsoWalls;
Bar3DGroup: Office$IMsoChartGroup;
BarGroups(Index?: any): any;
BarShape: Office$XlBarShape;
CategoryLabelLevel: Office$XlCategoryLabelLevel;
ChartArea: Office$IMsoChartArea;
ChartColor: any;
ChartData: Office$IMsoChartData;
ChartGroups(pvarIndex?: any, varIgallery?: any): any;
ChartStyle: any;
ChartTitle: Office$IMsoChartTitle;
ChartType: Office$XlChartType;
ChartWizard(
varSource?: any,
varGallery?: any,
varFormat?: any,
varPlotBy?: any,
varCategoryLabels?: any,
varSeriesLabels?: any,
varHasLegend?: any,
varTitle?: any,
varCategoryTitle?: any,
varValueTitle?: any,
varExtraTitle?: any): void;
ClearToMatchColorStyle(): void;
ClearToMatchStyle(): void;
Column3DGroup: Office$IMsoChartGroup;
ColumnGroups(Index?: any): any;
Copy(): any;

/**
 * @param Appearance [Appearance=1]
 * @param Format [Format=-4147]
 * @param Size [Size=2]
 */
CopyPicture(Appearance?: number, Format?: number, Size?: number): void;
Corners: Office$IMsoCorners;
Creator: number;
DataTable: Office$IMsoDataTable;
Delete(): any;
DeleteHiddenContent(): void;
DepthPercent: number;
DisplayBlanksAs: Office$XlDisplayBlanksAs;
DoughnutGroups(Index?: any): any;
Elevation: number;
Export(bstr: string, varFilterName?: any, varInteractive?: any): boolean;
Floor: Office$IMsoFloor;
Format: Office$IMsoChartFormat;
FullSeriesCollection(Index?: any): any;
GapDepth: number;
GetChartElement(x: number, y: number, ElementID: number, Arg1: number, Arg2: number): void;
HasAxis(axisType?: any, AxisGroup?: any): any;
HasDataTable: boolean;
HasHiddenContent: boolean;
HasLegend: boolean;
HasPivotFields: boolean;
HasTitle: boolean;
HeightPercent: number;
Legend: Office$IMsoLegend;
Line3DGroup: Office$IMsoChartGroup;
LineGroups(Index?: any): any;
Parent: any;
Perspective: number;
Pie3DGroup: Office$IMsoChartGroup;
PieGroups(Index?: any): any;
PivotLayout: any;
PlotArea: Office$IMsoPlotArea;
PlotBy: Office$XlRowCol;
PlotVisibleOnly: boolean;
RadarGroups(Index?: any): any;
Refresh(): void;
RefreshPivotTable(): void;
RightAngleAxes: any;
Rotation: any;
SaveChartTemplate(bstrFileName: string): void;
Select(Replace?: any): any;
SeriesCollection(Index?: any): any;
SeriesNameLevel: Office$XlSeriesNameLevel;
SetDefaultChart(varName: any): void;
SetElement(RHS: Office$MsoChartElementType): void;
SetSourceData(Source: string, PlotBy?: any): void;
Office$Shapes: Office$Shapes;
ShowAllFieldButtons: boolean;
ShowAxisFieldButtons: boolean;
ShowDataLabelsOverMaximum: boolean;
ShowExpandCollapseEntireFieldButtons: boolean;
ShowLegendFieldButtons: boolean;
ShowReportFilterFieldButtons: boolean;
ShowValueFieldButtons: boolean;
SideWall: Office$IMsoWalls;
SubType: number;
SurfaceGroup: Office$IMsoChartGroup;
Type: number;

/**
 * @param fBackWall [fBackWall=true]
 */
Walls(fBackWall?: boolean): Office$IMsoWalls;
XYGroups(Index?: any): any
}

declare class Office$IMsoChartArea  {
constructor(): this;
Application: any;
AutoScaleFont: any;
Border: Office$IMsoBorder;
Clear(): any;
ClearContents(): any;
ClearFormats(): any;
Copy(): any;
Creator: number;
Fill: Office$ChartFillFormat;
Font: Office$ChartFont;
Format: Office$IMsoChartFormat;
Height: number;
Interior: Office$IMsoInterior;
Left: number;
Name: string;
Parent: any;
RoundedCorners: boolean;
Select(): any;
Shadow: boolean;
Top: number;
Width: number
}

declare class Office$IMsoChartData  {
constructor(): this;
Activate(): void;
ActivateChartDataWindow(): void;
BreakLink(): void;
IsLinked: boolean;
Workbook: any
}

declare class Office$IMsoChartFormat  {
constructor(): this;
Office$Adjustments: Office$Adjustments;
Application: any;
AutoShapeType: Office$MsoAutoShapeType;
Creator: number;
Fill: Office$FillFormat;
Glow: Office$GlowFormat;
Line: Office$LineFormat;
Parent: any;
Office$PictureFormat: Office$PictureFormat;
Shadow: Office$ShadowFormat;
SoftEdge: Office$SoftEdgeFormat;
Office$TextFrame2: Office$TextFrame2;
ThreeD: Office$ThreeDFormat
}

declare class Office$IMsoChartGroup  {
constructor(): this;
Application: any;
AxisGroup: number;
BinsCountValue: number;
BinsOverflowEnabled: boolean;
BinsOverflowValue: number;
BinsType: Office$XlBinsType;
BinsUnderflowEnabled: boolean;
BinsUnderflowValue: number;
BinWidthValue: number;
BubbleScale: number;
CategoryCollection(Index?: any): any;
Creator: number;
DoughnutHoleSize: number;
DownBars: Office$IMsoDownBars;
DropLines: Office$IMsoDropLines;
FirstSliceAngle: number;
FullCategoryCollection(Index?: any): any;
GapWidth: number;
Has3DShading: boolean;
HasDropLines: boolean;
HasHiLoLines: boolean;
HasRadarAxisLabels: boolean;
HasSeriesLines: boolean;
HasUpDownBars: boolean;
HiLoLines: Office$IMsoHiLoLines;
Index: number;
Overlap: number;
Parent: any;
RadarAxisLabels: any;
SecondPlotSize: number;
SeriesCollection(Index?: any): any;
SeriesLines: Office$IMsoSeriesLines;
ShowNegativeBubbles: boolean;
SizeRepresents: Office$XlSizeRepresents;
SplitType: Office$XlChartSplitType;
SplitValue: any;
SubType: number;
Type: number;
UpBars: Office$IMsoUpBars;
VaryByCategories: boolean
}

declare class Office$IMsoChartTitle  {
constructor(): this;
Application: any;
AutoScaleFont: any;
Border: Office$IMsoBorder;
Caption: string;
Characters(Start?: any, Length?: any): Office$IMsoCharacters;
Creator: number;
Delete(): any;
Fill: Office$ChartFillFormat;
Font: Office$ChartFont;
Format: Office$IMsoChartFormat;
Formula: string;
FormulaLocal: string;
FormulaR1C1: string;
FormulaR1C1Local: string;
Height: number;
HorizontalAlignment: any;
IncludeInLayout: boolean;
Interior: Office$IMsoInterior;
Left: number;
Name: string;
Orientation: any;
Parent: any;
Position: Office$XlChartElementPosition;
ReadingOrder: number;
Select(): any;
Shadow: boolean;
Text: string;
Top: number;
VerticalAlignment: any;
Width: number
}

declare class Office$IMsoCorners  {
constructor(): this;
Application: any;
Creator: number;
Name: string;
Parent: any;
Select(): any
}

declare class Office$IMsoDataTable  {
constructor(): this;
Application: any;
AutoScaleFont: any;
Border: Office$IMsoBorder;
Creator: number;
Delete(): void;
Font: Office$ChartFont;
Format: Office$IMsoChartFormat;
HasBorderHorizontal: boolean;
HasBorderOutline: boolean;
HasBorderVertical: boolean;
Parent: any;
Select(): void;
ShowLegendKey: boolean
}

declare class Office$IMsoDiagram  {
constructor(): this;
Application: any;
AutoFormat: Office$MsoTriState;
AutoLayout: Office$MsoTriState;
Convert(Type: Office$MsoDiagramType): void;
Creator: number;
FitText(): void;
Nodes: Office$DiagramNodes;
Parent: any;
Reverse: Office$MsoTriState;
Type: Office$MsoDiagramType
}

declare class Office$IMsoDownBars  {
constructor(): this;
Application: any;
Border: Office$IMsoBorder;
Creator: number;
Delete(): any;
Fill: Office$ChartFillFormat;
Format: Office$IMsoChartFormat;
Interior: Office$IMsoInterior;
Name: string;
Parent: any;
Select(): any
}

declare class Office$IMsoDropLines  {
constructor(): this;
Application: any;
Border: Office$IMsoBorder;
Creator: number;
Delete(): void;
Format: Office$IMsoChartFormat;
Name: string;
Parent: any;
Select(): void
}

declare class Office$IMsoFloor  {
constructor(): this;
Application: any;
Border: Office$IMsoBorder;
ClearFormats(): any;
Creator: number;
Fill: Office$ChartFillFormat;
Format: Office$IMsoChartFormat;
Interior: Office$IMsoInterior;
Name: string;
Parent: any;
Paste(): void;
PictureType: any;
Select(): any;
Thickness: number
}

declare class Office$IMsoHiLoLines  {
constructor(): this;
Application: any;
Border: Office$IMsoBorder;
Creator: number;
Delete(): void;
Format: Office$IMsoChartFormat;
Name: string;
Parent: any;
Select(): void
}

declare class Office$IMsoInterior  {
constructor(): this;
Application: any;
Color: any;
ColorIndex: any;
Creator: number;
InvertIfNegative: any;
Parent: any;
Pattern: any;
PatternColor: any;
PatternColorIndex: any
}

declare class Office$IMsoLegend  {
constructor(): this;
Application: any;
AutoScaleFont: any;
Border: Office$IMsoBorder;
Clear(): any;
Creator: number;
Delete(): any;
Fill: Office$ChartFillFormat;
Font: Office$ChartFont;
Format: Office$IMsoChartFormat;
Height: number;
IncludeInLayout: boolean;
Interior: Office$IMsoInterior;
Left: number;
LegendEntries(Index?: any): any;
Name: string;
Parent: any;
Position: Office$XlLegendPosition;
Select(): any;
Shadow: boolean;
Top: number;
Width: number
}

declare class Office$IMsoPlotArea  {
constructor(): this;
Application: any;
Border: Office$IMsoBorder;
ClearFormats(): any;
Creator: number;
Fill: Office$ChartFillFormat;
Format: Office$IMsoChartFormat;
Height: number;
InsideHeight: number;
InsideLeft: number;
InsideTop: number;
InsideWidth: number;
Interior: Office$IMsoInterior;
Left: number;
Name: string;
Parent: any;
Position: Office$XlChartElementPosition;
Select(): any;
Top: number;
Width: number
}

declare class Office$IMsoSeriesLines  {
constructor(): this;
Application: any;
Border: Office$IMsoBorder;
Creator: number;
Delete(): any;
Format: Office$IMsoChartFormat;
Name: string;
Parent: any;
Select(): any
}

declare class Office$IMsoUpBars  {
constructor(): this;
Application: any;
Border: Office$IMsoBorder;
Creator: number;
Delete(): any;
Fill: Office$ChartFillFormat;
Format: Office$IMsoChartFormat;
Interior: Office$IMsoInterior;
Name: string;
Parent: any;
Select(): any
}

declare class Office$IMsoWalls  {
constructor(): this;
Application: any;
Border: Office$IMsoBorder;
ClearFormats(): any;
Creator: number;
Fill: Office$ChartFillFormat;
Format: Office$IMsoChartFormat;
Interior: Office$IMsoInterior;
Name: string;
Parent: any;
Paste(): void;
PictureType: any;
PictureUnit: any;
Select(): any;
Thickness: number
}

declare class Office$LanguageSettings  {
constructor(): this;
Application: any;
Creator: number;
LanguageID(Id: Office$MsoAppLanguageID): number;
LanguagePreferredForEditing(lid: Office$MsoLanguageID): boolean;
Parent: any
}

declare class Office$LineFormat  {
constructor(): this;
Application: any;
BackColor: Office$ColorFormat;
BeginArrowheadLength: Office$MsoArrowheadLength;
BeginArrowheadStyle: Office$MsoArrowheadStyle;
BeginArrowheadWidth: Office$MsoArrowheadWidth;
Creator: number;
DashStyle: Office$MsoLineDashStyle;
EndArrowheadLength: Office$MsoArrowheadLength;
EndArrowheadStyle: Office$MsoArrowheadStyle;
EndArrowheadWidth: Office$MsoArrowheadWidth;
ForeColor: Office$ColorFormat;
InsetPen: Office$MsoTriState;
Parent: any;
Pattern: Office$MsoPatternType;
Style: Office$MsoLineStyle;
Transparency: number;
Visible: Office$MsoTriState;
Weight: number
}

declare interface Office$MetaProperties {
+Application: any,
+Count: number,
+Creator: number,
GetItemByInternalName(InternalName: string): Office$MetaProperty,
Item(Index: number | string): Office$MetaProperty,
+Parent: any,
+SchemaXml: string,
Validate(): string,
+ValidationError: string,
(Index: number | string): Office$MetaProperty
} 

declare class Office$MetaProperty  {
constructor(): this;
Application: any;
Creator: number;
Id: string;
IsReadOnly: boolean;
IsRequired: boolean;
Name: string;
Parent: any;
Type: Office$MsoMetaPropertyType;
Validate(): string;
ValidationError: string;
Value: any
}

declare class Office$MsoDebugOptions  {
constructor(): this;
AddIgnoredAssertTag(bstrTagToIgnore: string): void;
Application: any;
Creator: number;
FeatureReports: number;
OutputToDebugger: boolean;
OutputToFile: boolean;
OutputToMessageBox: boolean;
RemoveIgnoredAssertTag(bstrTagToIgnore: string): void;
UnitTestManager: any
}

declare class Office$MsoEnvelope  {
constructor(): this;
Office$CommandBars: Office$CommandBars;
Introduction: string;
Item: Outlook.MailItem;
Parent: any
}

declare class Office$NewFile  {
constructor(): this;
Add(
FileName: string,
Section?: Office$MsoFileNewSection,
DisplayName?: string,
Action?: Office$MsoFileNewAction): boolean;
Application: any;
Creator: number;
Remove(
FileName: string,
Section?: Office$MsoFileNewSection,
DisplayName?: string,
Action?: Office$MsoFileNewAction): boolean
}

declare class Office$OfficeTheme  {
constructor(): this;
Application: any;
Creator: number;
Parent: any;
Office$ThemeColorScheme: Office$ThemeColorScheme;
Office$ThemeEffectScheme: Office$ThemeEffectScheme;
Office$ThemeFontScheme: Office$ThemeFontScheme
}

declare class Office$ParagraphFormat2  {
constructor(): this;
Alignment: Office$MsoParagraphAlignment;
Application: any;
BaselineAlignment: Office$MsoBaselineAlignment;
Bullet: Office$BulletFormat2;
Creator: number;
FarEastLineBreakLevel: Office$MsoTriState;
FirstLineIndent: number;
HangingPunctuation: Office$MsoTriState;
IndentLevel: number;
LeftIndent: number;
LineRuleAfter: Office$MsoTriState;
LineRuleBefore: Office$MsoTriState;
LineRuleWithin: Office$MsoTriState;
Parent: any;
RightIndent: number;
SpaceAfter: number;
SpaceBefore: number;
SpaceWithin: number;
TabStops: Office$TabStops2;
TextDirection: Office$MsoTextDirection;
WordWrap: Office$MsoTriState
}

declare interface Office$Permission {
Add(
UserId: string,
Office$Permission?: Office$MsoPermission,
ExpirationDate?: VarDate): Office$UserPermission,
+Application: any,
ApplyPolicy(FileName: string): void,
+Count: number,
+Creator: number,
DocumentAuthor: string,
Enabled: boolean,
EnableTrustedBrowser: boolean,
Item(Index: any): Office$UserPermission,
+Parent: any,
+PermissionFromPolicy: boolean,
+PolicyDescription: string,
+PolicyName: string,
RemoveAll(): void,
RequestPermissionURL: string,
StoreLicenses: boolean,
(Index: any): Office$UserPermission
} 

declare class Office$PickerDialog  {
constructor(): this;
Application: any;
CreatePickerResults(): Office$PickerResults;
Creator: number;
DataHandlerId: string;
Properties: Office$PickerProperties;
Resolve(TokenText: string, duplicateDlgMode: number): Office$PickerResults;

/**
 * @param IsMultiSelect [IsMultiSelect=true]
 * @param ExistingResults [ExistingResults=0]
 */
Show(
IsMultiSelect?: boolean,
ExistingResults?: Office$PickerResults): Office$PickerResults;
Title: string
}

declare class Office$PickerField  {
constructor(): this;
Application: any;
Creator: number;
IsHidden: boolean;
Name: string;
Type: Office$MsoPickerField
}

declare interface Office$PickerFields {
+Application: any,
+Count: number,
+Creator: number,
Item(Index: number): Office$PickerField,
(Index: number): Office$PickerField
} 

declare interface Office$PickerProperties {
Add(Id: string, Value: string, Type: Office$MsoPickerField): Office$PickerProperty,
+Application: any,
+Count: number,
+Creator: number,
Item(Index: number): Office$PickerProperty,
Remove(Id: string): void,
(Index: number): Office$PickerProperty
} 

declare class Office$PickerProperty  {
constructor(): this;
Application: any;
Creator: number;
Id: string;
Type: Office$MsoPickerField;
Value: any
}

declare class Office$PickerResult  {
constructor(): this;
Application: any;
Creator: number;
DisplayName: string;
DuplicateResults: any;
Fields: Office$PickerFields;
Id: string;
ItemData: any;
SIPId: string;
SubItems: any;
Type: string
}

declare interface Office$PickerResults {

/**
 * @param SIPId [SIPId='']
 */
Add(
Id: string,
DisplayName: string,
Type: string,
SIPId?: string,
ItemData?: any,
SubItems?: any): Office$PickerResult,
+Application: any,
+Count: number,
+Creator: number,
Item(Index: number): Office$PickerResult,
(Index: number): Office$PickerResult
} 

declare class Office$PictureEffect  {
constructor(): this;
Application: any;
Creator: number;
Delete(): void;
Office$EffectParameters: Office$EffectParameters;
Position: number;
Type: Office$MsoPictureEffectType;
Visible: Office$MsoTriState
}

declare interface Office$PictureEffects {
+Application: any,
+Count: number,
+Creator: number,

/**
 * @param Index [Index=-1]
 */
Delete(Index?: number): void,

/**
 * @param Position [Position=-1]
 */
Insert(
EffectType: Office$MsoPictureEffectType,
Position?: number): Office$PictureEffect,
Item(Index: number): Office$PictureEffect,
(Index: number): Office$PictureEffect
} 

declare class Office$PictureFormat  {
constructor(): this;
Application: any;
Brightness: number;
ColorType: Office$MsoPictureColorType;
Contrast: number;
Creator: number;
Office$Crop: Office$Crop;
CropBottom: number;
CropLeft: number;
CropRight: number;
CropTop: number;
IncrementBrightness(Increment: number): void;
IncrementContrast(Increment: number): void;
Parent: any;
TransparencyColor: number;
TransparentBackground: Office$MsoTriState
}

declare class Office$PolicyItem  {
constructor(): this;
Application: any;
Creator: number;
Data: string;
Description: string;
Id: string;
Name: string;
Parent: any
}

declare class Office$PropertyTest  {
constructor(): this;
Application: any;
Condition: Office$MsoCondition;
Connector: Office$MsoConnector;
Creator: number;
Name: string;
SecondValue: any;
Value: any
}

declare interface Office$PropertyTests {

/**
 * @param Connector [Connector=1]
 */
Add(
Name: string,
Condition: Office$MsoCondition,
Value: any,
SecondValue: any,
Connector?: Office$MsoConnector): void,
+Application: any,
+Count: number,
+Creator: number,
Item(Index: number): Office$PropertyTest,
Remove(Index: number): void,
(Index: number): Office$PropertyTest
} 

declare class Office$ReflectionFormat  {
constructor(): this;
Application: any;
Blur: number;
Creator: number;
Offset: number;
Size: number;
Transparency: number;
Type: Office$MsoReflectionType
}

declare class Office$Ruler2  {
constructor(): this;
Application: any;
Creator: number;
Levels: Office$RulerLevels2;
Parent: any;
TabStops: Office$TabStops2
}

declare class Office$RulerLevel2  {
constructor(): this;
Application: any;
Creator: number;
FirstMargin: number;
LeftMargin: number;
Parent: any
}

declare interface Office$RulerLevels2 {
+Application: any,
+Count: number,
+Creator: number,
Item(Index: 1
| 2
| 3
| 4
| 5): Office$RulerLevel2,
+Parent: any,
(Index: 1
| 2
| 3
| 4
| 5): Office$RulerLevel2
} 

declare class Office$ScopeFolder  {
constructor(): this;
AddToSearchFolders(): void;
Application: any;
Creator: number;
Name: string;
Path: string;
Office$ScopeFolders: Office$ScopeFolders
}

declare interface Office$ScopeFolders {
+Application: any,
+Count: number,
+Creator: number,
Item(Index: number): Office$ScopeFolder,
(Index: number): Office$ScopeFolder
} 

declare class Office$Script  {
constructor(): this;
Application: any;
Creator: number;
Delete(): void;
Extended: string;
Id: string;
Language: Office$MsoScriptLanguage;
Location: Office$MsoScriptLocation;
Parent: any;
ScriptText: string;
Office$Shape: any
}

declare interface Office$Scripts {

/**
 * @param Location [Location=2]
 * @param Language [Language=2]
 * @param Id [Id='']
 * @param Extended [Extended='']
 * @param ScriptText [ScriptText='']
 */
Add(
Anchor?: any,
Location?: Office$MsoScriptLocation,
Language?: Office$MsoScriptLanguage,
Id?: string,
Extended?: string,
ScriptText?: string): Office$Script,
+Application: any,
+Count: number,
+Creator: number,
Delete(): void,
Item(Index: any): Office$Script,
+Parent: any,
(Index: any): Office$Script
} 

declare interface Office$SearchFolders {
Add(Office$ScopeFolder: Office$ScopeFolder): void,
+Application: any,
+Count: number,
+Creator: number,
Item(Index: number): Office$ScopeFolder,
Remove(Index: number): void,
(Index: number): Office$ScopeFolder
} 

declare class Office$SearchScope  {
constructor(): this;
Application: any;
Creator: number;
Office$ScopeFolder: Office$ScopeFolder;
Type: Office$MsoSearchIn
}

declare interface Office$SearchScopes {
+Application: any,
+Count: number,
+Creator: number,
Item(Index: number): Office$SearchScope,
(Index: number): Office$SearchScope
} 

declare interface Office$ServerPolicy {
+Application: any,
+BlockPreview: boolean,
+Count: number,
+Creator: number,
+Description: string,
+Id: string,
Item(Index: number | string): Office$PolicyItem,
+Name: string,
+Parent: any,
+Statement: string,
(Index: number | string): Office$PolicyItem
} 

declare class Office$ShadowFormat  {
constructor(): this;
Application: any;
Blur: number;
Creator: number;
ForeColor: Office$ColorFormat;
IncrementOffsetX(Increment: number): void;
IncrementOffsetY(Increment: number): void;
Obscured: Office$MsoTriState;
OffsetX: number;
OffsetY: number;
Parent: any;
RotateWithShape: Office$MsoTriState;
Size: number;
Style: Office$MsoShadowStyle;
Transparency: number;
Type: Office$MsoShadowType;
Visible: Office$MsoTriState
}

declare class Office$Shape  {
constructor(): this;
Office$Adjustments: Office$Adjustments;
AlternativeText: string;
Application: any;
Apply(): void;
AutoShapeType: Office$MsoAutoShapeType;
BackgroundStyle: Office$MsoBackgroundStyleIndex;
BlackWhiteMode: Office$MsoBlackWhiteMode;
Callout: Office$CalloutFormat;
CanvasCropBottom(Increment: number): void;
CanvasCropLeft(Increment: number): void;
CanvasCropRight(Increment: number): void;
CanvasCropTop(Increment: number): void;
CanvasItems: Office$CanvasShapes;
Chart: Office$IMsoChart;
Child: Office$MsoTriState;
ConnectionSiteCount: number;
Connector: Office$MsoTriState;
Office$ConnectorFormat: Office$ConnectorFormat;
ConvertTextToSmartArt(Layout: Office$SmartArtLayout): void;
Copy(): void;
Creator: number;
Cut(): void;
Delete(): void;
Diagram: Office$IMsoDiagram;
Office$DiagramNode: Office$DiagramNode;
Duplicate(): Office$Shape;
Fill: Office$FillFormat;
Flip(FlipCmd: Office$MsoFlipCmd): void;
Glow: Office$GlowFormat;
GroupItems: Office$GroupShapes;
HasChart: Office$MsoTriState;
HasDiagram: Office$MsoTriState;
HasDiagramNode: Office$MsoTriState;
HasSmartArt: Office$MsoTriState;
Height: number;
HorizontalFlip: Office$MsoTriState;
Id: number;
IncrementLeft(Increment: number): void;
IncrementRotation(Increment: number): void;
IncrementTop(Increment: number): void;
Left: number;
Line: Office$LineFormat;
LockAspectRatio: Office$MsoTriState;
Name: string;
Nodes: Office$ShapeNodes;
Parent: any;
ParentGroup: Office$Shape;
PickUp(): void;
Office$PictureFormat: Office$PictureFormat;
Reflection: Office$ReflectionFormat;
RerouteConnections(): void;
Rotation: number;
RTF: string;

/**
 * @param fScale [fScale=0]
 */
ScaleHeight(
Factor: number,
RelativeToOriginalSize: Office$MsoTriState,
fScale?: Office$MsoScaleFrom): void;

/**
 * @param fScale [fScale=0]
 */
ScaleWidth(
Factor: number,
RelativeToOriginalSize: Office$MsoTriState,
fScale?: Office$MsoScaleFrom): void;
Office$Script: Office$Script;
Select(Replace?: any): void;
SetShapesDefaultProperties(): void;
Shadow: Office$ShadowFormat;
ShapeStyle: Office$MsoShapeStyleIndex;
Office$SmartArt: Office$SmartArt;
SoftEdge: Office$SoftEdgeFormat;
TextEffect: Office$TextEffectFormat;
Office$TextFrame: Office$TextFrame;
Office$TextFrame2: Office$TextFrame2;
ThreeD: Office$ThreeDFormat;
Title: string;
Top: number;
Type: Office$MsoShapeType;
Ungroup(): Office$ShapeRange;
VerticalFlip: Office$MsoTriState;
Vertices: any;
Visible: Office$MsoTriState;
Width: number;
ZOrder(ZOrderCmd: Office$MsoZOrderCmd): void;
ZOrderPosition: number
}

declare class Office$ShapeNode  {
constructor(): this;
Application: any;
Creator: number;
EditingType: Office$MsoEditingType;
Parent: any;
Points: any;
SegmentType: Office$MsoSegmentType
}

declare interface Office$ShapeNodes {
+Application: any,
+Count: number,
+Creator: number,
Delete(Index: number): void,

/**
 * @param X2 [X2=0]
 * @param Y2 [Y2=0]
 * @param X3 [X3=0]
 * @param Y3 [Y3=0]
 */
Insert(
Index: number,
SegmentType: Office$MsoSegmentType,
EditingType: Office$MsoEditingType,
X1: number,
Y1: number,
X2?: number,
Y2?: number,
X3?: number,
Y3?: number): void,
Item(Index: any): Office$ShapeNode,
+Parent: any,
SetEditingType(Index: number, EditingType: Office$MsoEditingType): void,
SetPosition(Index: number, X1: number, Y1: number): void,
SetSegmentType(Index: number, SegmentType: Office$MsoSegmentType): void,
(Index: any): Office$ShapeNode
} 

declare interface Office$ShapeRange {
+Office$Adjustments: Office$Adjustments,
Align(AlignCmd: Office$MsoAlignCmd, RelativeTo: Office$MsoTriState): void,
AlternativeText: string,
+Application: any,
Apply(): void,
AutoShapeType: Office$MsoAutoShapeType,
BackgroundStyle: Office$MsoBackgroundStyleIndex,
BlackWhiteMode: Office$MsoBlackWhiteMode,
+Callout: Office$CalloutFormat,
CanvasCropBottom(Increment: number): void,
CanvasCropLeft(Increment: number): void,
CanvasCropRight(Increment: number): void,
CanvasCropTop(Increment: number): void,
+CanvasItems: Office$CanvasShapes,
+Chart: Office$IMsoChart,
+Child: Office$MsoTriState,
+ConnectionSiteCount: number,
+Connector: Office$MsoTriState,
+Office$ConnectorFormat: Office$ConnectorFormat,
Copy(): void,
+Count: number,
+Creator: number,
Cut(): void,
Delete(): void,
+Diagram: Office$IMsoDiagram,
+Office$DiagramNode: Office$DiagramNode,
Distribute(DistributeCmd: Office$MsoDistributeCmd, RelativeTo: Office$MsoTriState): void,
Duplicate(): Office$ShapeRange,
+Fill: Office$FillFormat,
Flip(FlipCmd: Office$MsoFlipCmd): void,
+Glow: Office$GlowFormat,
Group(): Office$Shape,
+GroupItems: Office$GroupShapes,
+HasChart: Office$MsoTriState,
+HasDiagram: Office$MsoTriState,
+HasDiagramNode: Office$MsoTriState,
Height: number,
+HorizontalFlip: Office$MsoTriState,
+Id: number,
IncrementLeft(Increment: number): void,
IncrementRotation(Increment: number): void,
IncrementTop(Increment: number): void,
Item(Index: any): Office$Shape,
Left: number,
+Line: Office$LineFormat,
LockAspectRatio: Office$MsoTriState,

/**
 * @param PrimaryShape [PrimaryShape=0]
 */
MergeShapes(MergeCmd: Office$MsoMergeCmd, PrimaryShape?: Office$Shape): void,
Name: string,
+Nodes: Office$ShapeNodes,
+Parent: any,
+ParentGroup: Office$Shape,
PickUp(): void,
+Office$PictureFormat: Office$PictureFormat,
+Reflection: Office$ReflectionFormat,
Regroup(): Office$Shape,
RerouteConnections(): void,
Rotation: number,
+RTF: string,

/**
 * @param fScale [fScale=0]
 */
ScaleHeight(
Factor: number,
RelativeToOriginalSize: Office$MsoTriState,
fScale?: Office$MsoScaleFrom): void,

/**
 * @param fScale [fScale=0]
 */
ScaleWidth(
Factor: number,
RelativeToOriginalSize: Office$MsoTriState,
fScale?: Office$MsoScaleFrom): void,
+Office$Script: Office$Script,
Select(Replace?: any): void,
SetShapesDefaultProperties(): void,
+Shadow: Office$ShadowFormat,
ShapeStyle: Office$MsoShapeStyleIndex,
+SoftEdge: Office$SoftEdgeFormat,
+TextEffect: Office$TextEffectFormat,
+Office$TextFrame: Office$TextFrame,
+Office$TextFrame2: Office$TextFrame2,
+ThreeD: Office$ThreeDFormat,
Title: string,
Top: number,
+Type: Office$MsoShapeType,
Ungroup(): Office$ShapeRange,
+VerticalFlip: Office$MsoTriState,
+Vertices: any,
Visible: Office$MsoTriState,
Width: number,
ZOrder(ZOrderCmd: Office$MsoZOrderCmd): void,
+ZOrderPosition: number,
(Index: any): Office$Shape
} 

declare interface Office$Shapes {
AddCallout(
Type: Office$MsoCalloutType,
Left: number,
Top: number,
Width: number,
Height: number): Office$Shape,
AddCanvas(Left: number, Top: number, Width: number, Height: number): Office$Shape,

/**
 * @param Type [Type=-1]
 * @param Left [Left=-1]
 * @param Top [Top=-1]
 * @param Width [Width=-1]
 * @param Height [Height=-1]
 */
AddChart(
Type?: Office$XlChartType,
Left?: number,
Top?: number,
Width?: number,
Height?: number): Office$Shape,

/**
 * @param Style [Style=-1]
 * @param Type [Type=-1]
 * @param Left [Left=-1]
 * @param Top [Top=-1]
 * @param Width [Width=-1]
 * @param Height [Height=-1]
 * @param NewLayout [NewLayout=true]
 */
AddChart2(
Style?: number,
Type?: Office$XlChartType,
Left?: number,
Top?: number,
Width?: number,
Height?: number,
NewLayout?: boolean): Office$Shape,
AddConnector(
Type: Office$MsoConnectorType,
BeginX: number,
BeginY: number,
EndX: number,
EndY: number): Office$Shape,
AddCurve(SafeArrayOfPoints: any): Office$Shape,
AddDiagram(
Type: Office$MsoDiagramType,
Left: number,
Top: number,
Width: number,
Height: number): Office$Shape,
AddLabel(
Orientation: Office$MsoTextOrientation,
Left: number,
Top: number,
Width: number,
Height: number): Office$Shape,
AddLine(BeginX: number, BeginY: number, EndX: number, EndY: number): Office$Shape,

/**
 * @param Width [Width=-1]
 * @param Height [Height=-1]
 */
AddPicture(
FileName: string,
LinkToFile: Office$MsoTriState,
SaveWithDocument: Office$MsoTriState,
Left: number,
Top: number,
Width?: number,
Height?: number): Office$Shape,
AddPolyline(SafeArrayOfPoints: any): Office$Shape,
AddShape(
Type: Office$MsoAutoShapeType,
Left: number,
Top: number,
Width: number,
Height: number): Office$Shape,

/**
 * @param Left [Left=-1]
 * @param Top [Top=-1]
 * @param Width [Width=-1]
 * @param Height [Height=-1]
 */
AddSmartArt(
Layout: Office$SmartArtLayout,
Left?: number,
Top?: number,
Width?: number,
Height?: number): Office$Shape,
AddTable(
NumRows: number,
NumColumns: number,
Left: number,
Top: number,
Width: number,
Height: number): Office$Shape,
AddTextbox(
Orientation: Office$MsoTextOrientation,
Left: number,
Top: number,
Width: number,
Height: number): Office$Shape,
AddTextEffect(
PresetTextEffect: Office$MsoPresetTextEffect,
Text: string,
FontName: string,
FontSize: number,
FontBold: Office$MsoTriState,
FontItalic: Office$MsoTriState,
Left: number,
Top: number): Office$Shape,
+Application: any,
+Background: Office$Shape,
BuildFreeform(
EditingType: Office$MsoEditingType,
X1: number,
Y1: number): Office$FreeformBuilder,
+Count: number,
+Creator: number,
+Default: Office$Shape,
Item(Index: any): Office$Shape,
+Parent: any,
Range(Index: any): Office$ShapeRange,
SelectAll(): void,
(Index: any): Office$Shape
} 

declare class Office$SharedWorkspace  {
constructor(): this;
Application: any;
Connected: boolean;
CreateNew(URL?: string, Name?: string): void;
Creator: number;
Delete(): void;
Disconnect(): void;
Files: Office$SharedWorkspaceFiles;
Folders: Office$SharedWorkspaceFolders;
LastRefreshed: VarDate;
Links: Office$SharedWorkspaceLinks;
Members: Office$SharedWorkspaceMembers;
Name: string;
Parent: any;
Refresh(): void;
RemoveDocument(): void;
SourceURL: string;
Tasks: Office$SharedWorkspaceTasks;
URL: string
}

declare class Office$SharedWorkspaceFile  {
constructor(): this;
Application: any;
CreatedBy: string;
CreatedDate: VarDate;
Creator: number;
Delete(): void;
ModifiedBy: string;
ModifiedDate: VarDate;
Parent: any;
URL: string
}

declare interface Office$SharedWorkspaceFiles {
Add(
FileName: string,
ParentFolder?: Office$SharedWorkspaceFolder,
OverwriteIfFileAlreadyExists?: boolean,
KeepInSync?: boolean): Office$SharedWorkspaceFile,
+Application: any,
+Count: number,
+Creator: number,
Item(Index: number): Office$SharedWorkspaceFile,
+ItemCountExceeded: boolean,
+Parent: any,
(Index: number): Office$SharedWorkspaceFile
} 

declare class Office$SharedWorkspaceFolder  {
constructor(): this;
Application: any;
Creator: number;
Delete(DeleteEventIfFolderContainsFiles?: boolean): void;
FolderName: string;
Parent: any
}

declare interface Office$SharedWorkspaceFolders {
Add(
FolderName: string,
ParentFolder?: Office$SharedWorkspaceFolder): Office$SharedWorkspaceFolder,
+Application: any,
+Count: number,
+Creator: number,
Item(Index: number): Office$SharedWorkspaceFolder,
+ItemCountExceeded: boolean,
+Parent: any,
(Index: number): Office$SharedWorkspaceFolder
} 

declare class Office$SharedWorkspaceLink  {
constructor(): this;
Application: any;
CreatedBy: string;
CreatedDate: VarDate;
Creator: number;
Delete(): void;
Description: string;
ModifiedBy: string;
ModifiedDate: VarDate;
Notes: string;
Parent: any;
Save(): void;
URL: string
}

declare interface Office$SharedWorkspaceLinks {
Add(URL: string, Description?: string, Notes?: string): Office$SharedWorkspaceLink,
+Application: any,
+Count: number,
+Creator: number,
Item(Index: number): Office$SharedWorkspaceLink,
+ItemCountExceeded: boolean,
+Parent: any,
(Index: number): Office$SharedWorkspaceLink
} 

declare class Office$SharedWorkspaceMember  {
constructor(): this;
Application: any;
Creator: number;
Delete(): void;
DomainName: string;
Email: string;
Id: string;
Name: string;
Parent: any
}

declare interface Office$SharedWorkspaceMembers {
Add(
Email: string,
DomainName: string,
DisplayName: string,
Role?: string): Office$SharedWorkspaceMember,
+Application: any,
+Count: number,
+Creator: number,
Item(Index: number): Office$SharedWorkspaceMember,
+ItemCountExceeded: boolean,
+Parent: any,
(Index: number): Office$SharedWorkspaceMember
} 

declare class Office$SharedWorkspaceTask  {
constructor(): this;
Application: any;
AssignedTo: string;
CreatedBy: string;
CreatedDate: VarDate;
Creator: number;
Delete(): void;
Description: string;
DueDate: VarDate;
ModifiedBy: string;
ModifiedDate: VarDate;
Parent: any;
Priority: Office$MsoSharedWorkspaceTaskPriority;
Save(): void;
Status: Office$MsoSharedWorkspaceTaskStatus;
Title: string
}

declare interface Office$SharedWorkspaceTasks {
Add(
Title: string,
Status?: Office$MsoSharedWorkspaceTaskStatus,
Priority?: Office$MsoSharedWorkspaceTaskPriority,
Assignee?: Office$SharedWorkspaceMember,
Description?: string,
DueDate?: VarDate): Office$SharedWorkspaceTask,
+Application: any,
+Count: number,
+Creator: number,
Item(Index: number): Office$SharedWorkspaceTask,
+ItemCountExceeded: boolean,
+Parent: any,
(Index: number): Office$SharedWorkspaceTask
} 

declare class Office$Signature  {
constructor(): this;
Application: any;
AttachCertificate: boolean;
CanSetup: boolean;
Creator: number;
Delete(): void;
Details: Office$SignatureInfo;
ExpireDate: VarDate;
IsCertificateExpired: boolean;
IsCertificateRevoked: boolean;
IsSignatureLine: boolean;
IsSigned: boolean;
Issuer: string;
IsValid: boolean;
Parent: any;
Setup: Office$SignatureSetup;
ShowDetails(): void;
Sign(
varSigImg?: any,
varDelSuggSigner?: any,
varDelSuggSignerLine2?: any,
varDelSuggSignerEmail?: any): void;
SignatureLineShape: Office$Shape;
SignDate: VarDate;
Signer: string;
SortHint: number
}

declare class Office$SignatureInfo  {
constructor(): this;
Application: any;
Office$CertificateVerificationResults: Office$CertificateVerificationResults;
Office$ContentVerificationResults: Office$ContentVerificationResults;
Creator: number;
GetCertificateDetail(certdet: Office$CertificateDetail): any;
GetSignatureDetail(sigdet: Office$SignatureDetail): any;
IsCertificateExpired: boolean;
IsCertificateRevoked: boolean;
IsCertificateUntrusted: boolean;
IsValid: boolean;
ReadOnly: boolean;
SelectCertificateDetailByThumbprint(bstrThumbprint: string): void;
SelectSignatureCertificate(ParentWindow: any): void;
ShowSignatureCertificate(ParentWindow: any): void;
SignatureComment: string;
SignatureImage: stdole.IPictureDisp;
SignatureProvider: string;
SignatureText: string
}

declare interface Office$SignatureSet {
Add(): Office$Signature,
AddNonVisibleSignature(varSigProv?: any): Office$Signature,
AddSignatureLine(varSigProv?: any): Office$Signature,
+Application: any,
+CanAddSignatureLine: boolean,
Commit(): void,
+Count: number,
+Creator: number,
Item(iSig: number): Office$Signature,
+Parent: any,
+ShowSignaturesPane: boolean,
Subset: Office$MsoSignatureSubset,
(iSig: number): Office$Signature
} 

declare class Office$SignatureSetup  {
constructor(): this;
AdditionalXml: string;
AllowComments: boolean;
Application: any;
Creator: number;
Id: string;
ReadOnly: boolean;
ShowSignDate: boolean;
SignatureProvider: string;
SigningInstructions: string;
SuggestedSigner: string;
SuggestedSignerEmail: string;
SuggestedSignerLine2: string
}

declare class Office$SmartArt  {
constructor(): this;
AllNodes: Office$SmartArtNodes;
Application: any;
Color: Office$SmartArtColor;
Creator: number;
Layout: Office$SmartArtLayout;
Nodes: Office$SmartArtNodes;
Parent: any;
QuickStyle: Office$SmartArtQuickStyle;
Reset(): void;
Reverse: Office$MsoTriState
}

declare class Office$SmartArtColor  {
constructor(): this;
Application: any;
Category: string;
Creator: number;
Description: string;
Id: string;
Name: string;
Parent: any
}

declare interface Office$SmartArtColors {
+Application: any,
+Count: number,
+Creator: number,
Item(Index: number | string): Office$SmartArtColor,
+Parent: any,
(Index: number | string): Office$SmartArtColor
} 

declare class Office$SmartArtLayout  {
constructor(): this;
Application: any;
Category: string;
Creator: number;
Description: string;
Id: string;
Name: string;
Parent: any
}

declare interface Office$SmartArtLayouts {
+Application: any,
+Count: number,
+Creator: number,
Item(Index: number | string): Office$SmartArtLayout,
+Parent: any,
(Index: number | string): Office$SmartArtLayout
} 

declare class Office$SmartArtNode  {
constructor(): this;

/**
 * @param Position [Position=1]
 * @param Type [Type=1]
 */
AddNode(
Position?: Office$MsoSmartArtNodePosition,
Type?: Office$MsoSmartArtNodeType): Office$SmartArtNode;
Application: any;
Creator: number;
Delete(): void;
Demote(): void;
Hidden: Office$MsoTriState;
Larger(): void;
Level: number;
Nodes: Office$SmartArtNodes;
OrgChartLayout: Office$MsoOrgChartLayoutType;
Parent: any;
ParentNode: Office$SmartArtNode;
Promote(): void;
ReorderDown(): void;
ReorderUp(): void;
Office$Shapes: Office$ShapeRange;
Smaller(): void;
Office$TextFrame2: Office$TextFrame2;
Type: Office$MsoSmartArtNodeType
}

declare interface Office$SmartArtNodes {
Add(): Office$SmartArtNode,
+Application: any,
+Count: number,
+Creator: number,
Item(Index: number | string): Office$SmartArtNode,
+Parent: any,
(Index: number | string): Office$SmartArtNode
} 

declare class Office$SmartArtQuickStyle  {
constructor(): this;
Application: any;
Category: string;
Creator: number;
Description: string;
Id: string;
Name: string;
Parent: any
}

declare interface Office$SmartArtQuickStyles {
+Application: any,
+Count: number,
+Creator: number,
Item(Index: number | string): Office$SmartArtQuickStyle,
+Parent: any,
(Index: number | string): Office$SmartArtQuickStyle
} 

declare class Office$SmartDocument  {
constructor(): this;
Application: any;
Creator: number;

/**
 * @param ConsiderAllSchemas [ConsiderAllSchemas=false]
 */
PickSolution(ConsiderAllSchemas?: boolean): void;
RefreshPane(): void;
SolutionID: string;
SolutionURL: string
}

declare class Office$SoftEdgeFormat  {
constructor(): this;
Application: any;
Creator: number;
Radius: number;
Type: Office$MsoSoftEdgeType
}

declare class Office$Sync  {
constructor(): this;
Application: any;
Creator: number;
ErrorType: Office$MsoSyncErrorType;
GetUpdate(): void;
LastSyncTime: VarDate;
OpenVersion(SyncVersionType: Office$MsoSyncVersionType): void;
Parent: any;
PutUpdate(): void;
ResolveConflict(SyncConflictResolution: Office$MsoSyncConflictResolutionType): void;
Status: Office$MsoSyncStatusType;
Unsuspend(): void;
WorkspaceLastChangedBy: string
}

declare class Office$TabStop2  {
constructor(): this;
Application: any;
Clear(): void;
Creator: number;
Parent: any;
Position: number;
Type: Office$MsoTabStopType
}

declare interface Office$TabStops2 {
Add(Type: Office$MsoTabStopType, Position: number): Office$TabStop2,
+Application: any,
+Count: number,
+Creator: number,
DefaultSpacing: number,
Item(Index: number): Office$TabStop2,
+Parent: any,
(Index: number): Office$TabStop2
} 

declare class Office$TextColumn2  {
constructor(): this;
Application: any;
Creator: number;
Number: number;
Spacing: number;
TextDirection: Office$MsoTextDirection
}

declare class Office$TextEffectFormat  {
constructor(): this;
Alignment: Office$MsoTextEffectAlignment;
Application: any;
Creator: number;
FontBold: Office$MsoTriState;
FontItalic: Office$MsoTriState;
FontName: string;
FontSize: number;
KernedPairs: Office$MsoTriState;
NormalizedHeight: Office$MsoTriState;
Parent: any;
PresetShape: Office$MsoPresetTextEffectShape;
PresetTextEffect: Office$MsoPresetTextEffect;
RotatedChars: Office$MsoTriState;
Text: string;
ToggleVerticalText(): void;
Tracking: number
}

declare class Office$TextFrame  {
constructor(): this;
Application: any;
Creator: number;
MarginBottom: number;
MarginLeft: number;
MarginRight: number;
MarginTop: number;
Orientation: Office$MsoTextOrientation;
Parent: any
}

declare class Office$TextFrame2  {
constructor(): this;
Application: any;
AutoSize: Office$MsoAutoSize;
Column: Office$TextColumn2;
Creator: number;
DeleteText(): void;
HasText: Office$MsoTriState;
HorizontalAnchor: Office$MsoHorizontalAnchor;
MarginBottom: number;
MarginLeft: number;
MarginRight: number;
MarginTop: number;
NoTextRotation: Office$MsoTriState;
Orientation: Office$MsoTextOrientation;
Parent: any;
PathFormat: Office$MsoPathFormat;
Ruler: Office$Ruler2;
TextRange: Office$TextRange2;
ThreeD: Office$ThreeDFormat;
VerticalAnchor: Office$MsoVerticalAnchor;
WarpFormat: Office$MsoWarpFormat;
WordArtformat: Office$MsoPresetTextEffect;
WordWrap: Office$MsoTriState
}

declare class Office$TextRange2  {
constructor(): this;
AddPeriods(): void;
Application: any;
BoundHeight: number;
BoundLeft: number;
BoundTop: number;
BoundWidth: number;
ChangeCase(Type: Office$MsoTextChangeCase): void;

/**
 * @param Start [Start=-1]
 * @param Length [Length=-1]
 */
Characters(Start?: number, Length?: number): Office$TextRange2;
Copy(): void;
Count: number;
Creator: number;
Cut(): void;
Delete(): void;

/**
 * @param After [After=0]
 * @param MatchCase [MatchCase=0]
 * @param WholeWords [WholeWords=0]
 */
Find(
FindWhat: string,
After?: number,
MatchCase?: Office$MsoTriState,
WholeWords?: Office$MsoTriState): Office$TextRange2;
Font: Office$Font2;

/**
 * @param NewText [NewText='']
 */
InsertAfter(NewText?: string): Office$TextRange2;

/**
 * @param NewText [NewText='']
 */
InsertBefore(NewText?: string): Office$TextRange2;

/**
 * @param Formula [Formula='']
 * @param Position [Position=-1]
 */
InsertChartField(
ChartFieldType: Office$MsoChartFieldType,
Formula?: string,
Position?: number): Office$TextRange2;

/**
 * @param Unicode [Unicode=0]
 */
InsertSymbol(
FontName: string,
CharNumber: number,
Unicode?: Office$MsoTriState): Office$TextRange2;
Item(Index: number): Office$TextRange2;
LanguageID: Office$MsoLanguageID;
Length: number;

/**
 * @param Start [Start=-1]
 * @param Length [Length=-1]
 */
Lines(Start?: number, Length?: number): Office$TextRange2;
LtrRun(): void;

/**
 * @param Start [Start=-1]
 * @param Length [Length=-1]
 */
MathZones(Start?: number, Length?: number): Office$TextRange2;
ParagraphFormat: Office$ParagraphFormat2;

/**
 * @param Start [Start=-1]
 * @param Length [Length=-1]
 */
Paragraphs(Start?: number, Length?: number): Office$TextRange2;
Parent: any;
Paste(): Office$TextRange2;
PasteSpecial(Format: Office$MsoClipboardFormat): Office$TextRange2;
RemovePeriods(): void;

/**
 * @param After [After=0]
 * @param MatchCase [MatchCase=0]
 * @param WholeWords [WholeWords=0]
 */
Replace(
FindWhat: string,
ReplaceWhat: string,
After?: number,
MatchCase?: Office$MsoTriState,
WholeWords?: Office$MsoTriState): Office$TextRange2;
RotatedBounds(
X1: number,
Y1: number,
X2: number,
Y2: number,
X3: number,
Y3: number,
x4: number,
y4: number): void;
RtlRun(): void;

/**
 * @param Start [Start=-1]
 * @param Length [Length=-1]
 */
Runs(Start?: number, Length?: number): Office$TextRange2;
Select(): void;

/**
 * @param Start [Start=-1]
 * @param Length [Length=-1]
 */
Sentences(Start?: number, Length?: number): Office$TextRange2;
Start: number;
Text: string;
TrimText(): Office$TextRange2;

/**
 * @param Start [Start=-1]
 * @param Length [Length=-1]
 */
Words(Start?: number, Length?: number): Office$TextRange2
}

declare class Office$ThemeColor  {
constructor(): this;
Application: any;
Creator: number;
Parent: any;
RGB: number;
ThemeColorSchemeIndex: Office$MsoThemeColorSchemeIndex
}

declare interface Office$ThemeColorScheme {
+Application: any,
Colors(Index: Office$MsoThemeColorSchemeIndex): Office$ThemeColor,
+Count: number,
+Creator: number,
GetCustomColor(Name: string): number,
Load(FileName: string): void,
+Parent: any,
Save(FileName: string): void,
(Index: Office$MsoThemeColorSchemeIndex): Office$ThemeColor
} 

declare class Office$ThemeEffectScheme  {
constructor(): this;
Application: any;
Creator: number;
Load(FileName: string): void;
Parent: any
}

declare class Office$ThemeFont  {
constructor(): this;
Application: any;
Creator: number;
Name: string;
Parent: any
}

declare interface Office$ThemeFonts {
+Application: any,
+Count: number,
+Creator: number,
Item(Index: Office$MsoFontLanguageIndex): Office$ThemeFont,
+Parent: any,
(Index: Office$MsoFontLanguageIndex): Office$ThemeFont
} 

declare class Office$ThemeFontScheme  {
constructor(): this;
Application: any;
Creator: number;
Load(FileName: string): void;
MajorFont: Office$ThemeFonts;
MinorFont: Office$ThemeFonts;
Parent: any;
Save(FileName: string): void
}

declare class Office$ThreeDFormat  {
constructor(): this;
Application: any;
BevelBottomDepth: number;
BevelBottomInset: number;
BevelBottomType: Office$MsoBevelType;
BevelTopDepth: number;
BevelTopInset: number;
BevelTopType: Office$MsoBevelType;
ContourColor: Office$ColorFormat;
ContourWidth: number;
Creator: number;
Depth: number;
ExtrusionColor: Office$ColorFormat;
ExtrusionColorType: Office$MsoExtrusionColorType;
FieldOfView: number;
IncrementRotationHorizontal(Increment: number): void;
IncrementRotationVertical(Increment: number): void;
IncrementRotationX(Increment: number): void;
IncrementRotationY(Increment: number): void;
IncrementRotationZ(Increment: number): void;
LightAngle: number;
Parent: any;
Perspective: Office$MsoTriState;
PresetCamera: Office$MsoPresetCamera;
PresetExtrusionDirection: Office$MsoPresetExtrusionDirection;
PresetLighting: Office$MsoLightRigType;
PresetLightingDirection: Office$MsoPresetLightingDirection;
PresetLightingSoftness: Office$MsoPresetLightingSoftness;
PresetMaterial: Office$MsoPresetMaterial;
PresetThreeDFormat: Office$MsoPresetThreeDFormat;
ProjectText: Office$MsoTriState;
ResetRotation(): void;
RotationX: number;
RotationY: number;
RotationZ: number;
SetExtrusionDirection(PresetExtrusionDirection: Office$MsoPresetExtrusionDirection): void;
SetPresetCamera(PresetCamera: Office$MsoPresetCamera): void;
SetThreeDFormat(PresetThreeDFormat: Office$MsoPresetThreeDFormat): void;
Visible: Office$MsoTriState;
Z: number
}

declare class Office$UserPermission  {
constructor(): this;
Application: any;
Creator: number;
ExpirationDate: VarDate;
Parent: any;
Office$Permission: number;
Remove(): void;
UserId: string
}

declare class Office$WebPageFont  {
constructor(): this;
Application: any;
Creator: number;
FixedWidthFont: string;
FixedWidthFontSize: number;
ProportionalFont: string;
ProportionalFontSize: number
}

declare interface Office$WebPageFonts {
+Application: any,
+Count: number,
+Creator: number,
Item(Index: Office$MsoCharacterSet): Office$WebPageFont,
(Index: Office$MsoCharacterSet): Office$WebPageFont
} 

declare class Office$WorkflowTask  {
constructor(): this;
Application: any;
AssignedTo: string;
CreatedBy: string;
CreatedDate: VarDate;
Creator: number;
Description: string;
DueDate: VarDate;
Id: string;
ListID: string;
Name: string;
Show(): number;
WorkflowID: string
}

declare interface Office$WorkflowTasks {
+Application: any,
+Count: number,
+Creator: number,
Item(Index: number): Office$WorkflowTask,
(Index: number): Office$WorkflowTask
} 

declare class Office$WorkflowTemplate  {
constructor(): this;
Application: any;
Creator: number;
Description: string;
DocumentLibraryName: string;
DocumentLibraryURL: string;
Id: string;
Name: string;
Show(): number
}

declare interface Office$WorkflowTemplates {
+Application: any,
+Count: number,
+Creator: number,
Item(Index: number): Office$WorkflowTemplate,
(Index: number): Office$WorkflowTemplate
} 

declare type EventHelperTypes$CommandBarButton_Invoke_ArgNames = ["dispidMember", "riid", "lcid", "wFlags", "pdispparams", "pvarResult", "pexcepinfo", "puArgErr"];

declare type EventHelperTypes$CommandBarComboBox_Invoke_ArgNames = ["dispidMember", "riid", "lcid", "wFlags", "pdispparams", "pvarResult", "pexcepinfo", "puArgErr"];

declare type EventHelperTypes$CommandBars_Invoke_ArgNames = ["dispidMember", "riid", "lcid", "wFlags", "pdispparams", "pvarResult", "pexcepinfo", "puArgErr"];

declare type EventHelperTypes$CustomTaskPane_Invoke_ArgNames = ["dispidMember", "riid", "lcid", "wFlags", "pdispparams", "pvarResult", "pexcepinfo", "puArgErr"];

declare type EventHelperTypes$CustomXMLPart_Invoke_ArgNames = ["dispidMember", "riid", "lcid", "wFlags", "pdispparams", "pvarResult", "pexcepinfo", "puArgErr"];

declare type EventHelperTypes$CustomXMLParts_Invoke_ArgNames = ["dispidMember", "riid", "lcid", "wFlags", "pdispparams", "pvarResult", "pexcepinfo", "puArgErr"];

declare interface EventHelperTypes$CommandBarButton_Invoke_Parameter {
+dispidMember: number,
+lcid: number,
+pdispparams: stdole.DISPPARAMS,
pexcepinfo: stdole.EXCEPINFO,
puArgErr: number,
pvarResult: any,
+riid: stdole.GUID,
+wFlags: number
} 

declare interface EventHelperTypes$CommandBarComboBox_Invoke_Parameter {
+dispidMember: number,
+lcid: number,
+pdispparams: stdole.DISPPARAMS,
pexcepinfo: stdole.EXCEPINFO,
puArgErr: number,
pvarResult: any,
+riid: stdole.GUID,
+wFlags: number
} 

declare interface EventHelperTypes$CommandBars_Invoke_Parameter {
+dispidMember: number,
+lcid: number,
+pdispparams: stdole.DISPPARAMS,
pexcepinfo: stdole.EXCEPINFO,
puArgErr: number,
pvarResult: any,
+riid: stdole.GUID,
+wFlags: number
} 

declare interface EventHelperTypes$CustomTaskPane_Invoke_Parameter {
+dispidMember: number,
+lcid: number,
+pdispparams: stdole.DISPPARAMS,
pexcepinfo: stdole.EXCEPINFO,
puArgErr: number,
pvarResult: any,
+riid: stdole.GUID,
+wFlags: number
} 

declare interface EventHelperTypes$CustomXMLPart_Invoke_Parameter {
+dispidMember: number,
+lcid: number,
+pdispparams: stdole.DISPPARAMS,
pexcepinfo: stdole.EXCEPINFO,
puArgErr: number,
pvarResult: any,
+riid: stdole.GUID,
+wFlags: number
} 

declare interface EventHelperTypes$CustomXMLParts_Invoke_Parameter {
+dispidMember: number,
+lcid: number,
+pdispparams: stdole.DISPPARAMS,
pexcepinfo: stdole.EXCEPINFO,
puArgErr: number,
pvarResult: any,
+riid: stdole.GUID,
+wFlags: number
} 
	declare interface ActiveXObject {
on(
obj: Office$Office$CommandBarButton,
event: "Click",
argNames: ["Ctrl", "CancelDefault"],
handler: (
parameter: {
+Ctrl: Office$Office$CommandBarButton,
CancelDefault: boolean
}) => void): void,
on(
obj: Office$Office$CommandBarButton,
event: "GetIDsOfNames",
argNames: ["riid", "rgszNames", "cNames", "lcid", "rgdispid"],
handler: (
parameter: {
+riid: stdole.GUID,
+rgszNames: number,
+cNames: number,
+lcid: number,
rgdispid: number
}) => void): void,
on(
obj: Office$Office$CommandBarButton,
event: "GetTypeInfo",
argNames: ["itinfo", "lcid", "pptinfo"],
handler: (parameter: {
+itinfo: number,
+lcid: number,
pptinfo: void
}) => void): void,
on(
obj: Office$Office$CommandBarButton,
event: "GetTypeInfoCount",
argNames: ["pctinfo"],
handler: (parameter: {
pctinfo: number
}) => void): void,
on(
obj: Office$Office$CommandBarButton,
event: "Invoke",
argNames: Office$EventHelperTypes.EventHelperTypes$CommandBarButton_Invoke_ArgNames,
handler: (
parameter: Office$EventHelperTypes.EventHelperTypes$CommandBarButton_Invoke_Parameter) => void): void,
on(
obj: Office$Office$CommandBarButton,
event: "QueryInterface",
argNames: ["riid", "ppvObj"],
handler: (parameter: {
+riid: stdole.GUID,
ppvObj: void
}) => void): void,
on(
obj: Office$Office$CommandBarComboBox,
event: "Change",
argNames: ["Ctrl"],
handler: (parameter: {
+Ctrl: Office$Office$CommandBarComboBox
}) => void): void,
on(
obj: Office$Office$CommandBarComboBox,
event: "GetIDsOfNames",
argNames: ["riid", "rgszNames", "cNames", "lcid", "rgdispid"],
handler: (
parameter: {
+riid: stdole.GUID,
+rgszNames: number,
+cNames: number,
+lcid: number,
rgdispid: number
}) => void): void,
on(
obj: Office$Office$CommandBarComboBox,
event: "GetTypeInfo",
argNames: ["itinfo", "lcid", "pptinfo"],
handler: (parameter: {
+itinfo: number,
+lcid: number,
pptinfo: void
}) => void): void,
on(
obj: Office$Office$CommandBarComboBox,
event: "GetTypeInfoCount",
argNames: ["pctinfo"],
handler: (parameter: {
pctinfo: number
}) => void): void,
on(
obj: Office$Office$CommandBarComboBox,
event: "Invoke",
argNames: Office$EventHelperTypes.EventHelperTypes$CommandBarComboBox_Invoke_ArgNames,
handler: (
parameter: Office$EventHelperTypes.EventHelperTypes$CommandBarComboBox_Invoke_Parameter) => void): void,
on(
obj: Office$Office$CommandBarComboBox,
event: "QueryInterface",
argNames: ["riid", "ppvObj"],
handler: (parameter: {
+riid: stdole.GUID,
ppvObj: void
}) => void): void,
on(
obj: Office$Office$CommandBars,
event: "GetIDsOfNames",
argNames: ["riid", "rgszNames", "cNames", "lcid", "rgdispid"],
handler: (
parameter: {
+riid: stdole.GUID,
+rgszNames: number,
+cNames: number,
+lcid: number,
rgdispid: number
}) => void): void,
on(
obj: Office$Office$CommandBars,
event: "GetTypeInfo",
argNames: ["itinfo", "lcid", "pptinfo"],
handler: (parameter: {
+itinfo: number,
+lcid: number,
pptinfo: void
}) => void): void,
on(
obj: Office$Office$CommandBars,
event: "GetTypeInfoCount",
argNames: ["pctinfo"],
handler: (parameter: {
pctinfo: number
}) => void): void,
on(
obj: Office$Office$CommandBars,
event: "Invoke",
argNames: Office$EventHelperTypes.EventHelperTypes$CommandBars_Invoke_ArgNames,
handler: (
parameter: Office$EventHelperTypes.EventHelperTypes$CommandBars_Invoke_Parameter) => void): void,
on(
obj: Office$Office$CommandBars,
event: "QueryInterface",
argNames: ["riid", "ppvObj"],
handler: (parameter: {
+riid: stdole.GUID,
ppvObj: void
}) => void): void,
on(
obj: Office$Office$CustomTaskPane,
event: "DockPositionStateChange" | "VisibleStateChange",
argNames: ["CustomTaskPaneInst"],
handler: (parameter: {
+CustomTaskPaneInst: Office$Office$CustomTaskPane
}) => void): void,
on(
obj: Office$Office$CustomTaskPane,
event: "GetIDsOfNames",
argNames: ["riid", "rgszNames", "cNames", "lcid", "rgdispid"],
handler: (
parameter: {
+riid: stdole.GUID,
+rgszNames: number,
+cNames: number,
+lcid: number,
rgdispid: number
}) => void): void,
on(
obj: Office$Office$CustomTaskPane,
event: "GetTypeInfo",
argNames: ["itinfo", "lcid", "pptinfo"],
handler: (parameter: {
+itinfo: number,
+lcid: number,
pptinfo: void
}) => void): void,
on(
obj: Office$Office$CustomTaskPane,
event: "GetTypeInfoCount",
argNames: ["pctinfo"],
handler: (parameter: {
pctinfo: number
}) => void): void,
on(
obj: Office$Office$CustomTaskPane,
event: "Invoke",
argNames: Office$EventHelperTypes.EventHelperTypes$CustomTaskPane_Invoke_ArgNames,
handler: (
parameter: Office$EventHelperTypes.EventHelperTypes$CustomTaskPane_Invoke_Parameter) => void): void,
on(
obj: Office$Office$CustomTaskPane,
event: "QueryInterface",
argNames: ["riid", "ppvObj"],
handler: (parameter: {
+riid: stdole.GUID,
ppvObj: void
}) => void): void,
on(
obj: Office$Office$CustomXMLPart,
event: "GetIDsOfNames",
argNames: ["riid", "rgszNames", "cNames", "lcid", "rgdispid"],
handler: (
parameter: {
+riid: stdole.GUID,
+rgszNames: number,
+cNames: number,
+lcid: number,
rgdispid: number
}) => void): void,
on(
obj: Office$Office$CustomXMLPart,
event: "GetTypeInfo",
argNames: ["itinfo", "lcid", "pptinfo"],
handler: (parameter: {
+itinfo: number,
+lcid: number,
pptinfo: void
}) => void): void,
on(
obj: Office$Office$CustomXMLPart,
event: "GetTypeInfoCount",
argNames: ["pctinfo"],
handler: (parameter: {
pctinfo: number
}) => void): void,
on(
obj: Office$Office$CustomXMLPart,
event: "Invoke",
argNames: Office$EventHelperTypes.EventHelperTypes$CustomXMLPart_Invoke_ArgNames,
handler: (
parameter: Office$EventHelperTypes.EventHelperTypes$CustomXMLPart_Invoke_Parameter) => void): void,
on(
obj: Office$Office$CustomXMLPart,
event: "NodeAfterDelete",
argNames: ["OldNode", "OldParentNode", "OldNextSibling", "InUndoRedo"],
handler: (
parameter: {
+OldNode: Office$Office$CustomXMLNode,
+OldParentNode: Office$Office$CustomXMLNode,
+OldNextSibling: Office$Office$CustomXMLNode,
+InUndoRedo: boolean
}) => void): void,
on(
obj: Office$Office$CustomXMLPart,
event: "NodeAfterInsert",
argNames: ["NewNode", "InUndoRedo"],
handler: (
parameter: {
+NewNode: Office$Office$CustomXMLNode,
+InUndoRedo: boolean
}) => void): void,
on(
obj: Office$Office$CustomXMLPart,
event: "NodeAfterReplace",
argNames: ["OldNode", "NewNode", "InUndoRedo"],
handler: (
parameter: {
+OldNode: Office$Office$CustomXMLNode,
+NewNode: Office$Office$CustomXMLNode,
+InUndoRedo: boolean
}) => void): void,
on(
obj: Office$Office$CustomXMLPart,
event: "QueryInterface",
argNames: ["riid", "ppvObj"],
handler: (parameter: {
+riid: stdole.GUID,
ppvObj: void
}) => void): void,
on(
obj: Office$Office$CustomXMLParts,
event: "GetIDsOfNames",
argNames: ["riid", "rgszNames", "cNames", "lcid", "rgdispid"],
handler: (
parameter: {
+riid: stdole.GUID,
+rgszNames: number,
+cNames: number,
+lcid: number,
rgdispid: number
}) => void): void,
on(
obj: Office$Office$CustomXMLParts,
event: "GetTypeInfo",
argNames: ["itinfo", "lcid", "pptinfo"],
handler: (parameter: {
+itinfo: number,
+lcid: number,
pptinfo: void
}) => void): void,
on(
obj: Office$Office$CustomXMLParts,
event: "GetTypeInfoCount",
argNames: ["pctinfo"],
handler: (parameter: {
pctinfo: number
}) => void): void,
on(
obj: Office$Office$CustomXMLParts,
event: "Invoke",
argNames: Office$EventHelperTypes.EventHelperTypes$CustomXMLParts_Invoke_ArgNames,
handler: (
parameter: Office$EventHelperTypes.EventHelperTypes$CustomXMLParts_Invoke_Parameter) => void): void,
on(
obj: Office$Office$CustomXMLParts,
event: "PartAfterAdd",
argNames: ["NewPart"],
handler: (parameter: {
+NewPart: Office$Office$CustomXMLPart
}) => void): void,
on(
obj: Office$Office$CustomXMLParts,
event: "PartAfterLoad",
argNames: ["Part"],
handler: (parameter: {
+Part: Office$Office$CustomXMLPart
}) => void): void,
on(
obj: Office$Office$CustomXMLParts,
event: "PartBeforeDelete",
argNames: ["OldPart"],
handler: (parameter: {
+OldPart: Office$Office$CustomXMLPart
}) => void): void,
on(
obj: Office$Office$CustomXMLParts,
event: "QueryInterface",
argNames: ["riid", "ppvObj"],
handler: (parameter: {
+riid: stdole.GUID,
ppvObj: void
}) => void): void,
on(
obj: Office$Office$CommandBarButton,
event: "AddRef" | "Release",
handler: (parameter: {}) => void): void,
on(
obj: Office$Office$CommandBarComboBox,
event: "AddRef" | "Release",
handler: (parameter: {}) => void): void,
on(
obj: Office$Office$CommandBars,
event: "AddRef" | "OnUpdate" | "Release",
handler: (parameter: {}) => void): void,
on(
obj: Office$Office$CustomTaskPane,
event: "AddRef" | "Release",
handler: (parameter: {}) => void): void,
on(
obj: Office$Office$CustomXMLPart,
event: "AddRef" | "Release",
handler: (parameter: {}) => void): void,
on(
obj: Office$Office$CustomXMLParts,
event: "AddRef" | "Release",
handler: (parameter: {}) => void): void,
on(
obj: Office$Office$MsoEnvelope,
event: "EnvelopeHide" | "EnvelopeShow",
handler: (parameter: {}) => void): void,
set(
obj: Office$Office$CommandBarButton | Office$Office$CommandBarComboBox,
propertyName: "accName" | "accValue",
parameterTypes: [any],
newValue: string): void,
set(
obj: Office$Office$CommandBarComboBox,
propertyName: "List",
parameterTypes: [number],
newValue: string): void
} 
    }
