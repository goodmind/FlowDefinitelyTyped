declare module "activex-outlook" {
  declare class Outlook$OlAccountType {
    constructor(...args: empty): mixed;
    static +olExchange: Class<Outlook$OlAccountType__olExchange> &
      Outlook$OlAccountType__olExchange &
      0; // 0
    static +olHttp: Class<Outlook$OlAccountType__olHttp> &
      Outlook$OlAccountType__olHttp &
      3; // 3
    static +olImap: Class<Outlook$OlAccountType__olImap> &
      Outlook$OlAccountType__olImap &
      1; // 1
    static +olOtherAccount: Class<Outlook$OlAccountType__olOtherAccount> &
      Outlook$OlAccountType__olOtherAccount &
      5; // 5
    static +olPop3: Class<Outlook$OlAccountType__olPop3> &
      Outlook$OlAccountType__olPop3 &
      2; // 2
  }

  declare class Outlook$OlAccountType__olExchange
    mixins Outlook$OlAccountType {}
  declare class Outlook$OlAccountType__olHttp mixins Outlook$OlAccountType {}
  declare class Outlook$OlAccountType__olImap mixins Outlook$OlAccountType {}
  declare class Outlook$OlAccountType__olOtherAccount
    mixins Outlook$OlAccountType {}
  declare class Outlook$OlAccountType__olPop3 mixins Outlook$OlAccountType {}

  declare class Outlook$OlActionCopyLike {
    constructor(...args: empty): mixed;
    static +olForward: Class<Outlook$OlActionCopyLike__olForward> &
      Outlook$OlActionCopyLike__olForward &
      2; // 2
    static +olReply: Class<Outlook$OlActionCopyLike__olReply> &
      Outlook$OlActionCopyLike__olReply &
      0; // 0
    static +olReplyAll: Class<Outlook$OlActionCopyLike__olReplyAll> &
      Outlook$OlActionCopyLike__olReplyAll &
      1; // 1
    static +olReplyFolder: Class<Outlook$OlActionCopyLike__olReplyFolder> &
      Outlook$OlActionCopyLike__olReplyFolder &
      3; // 3
    static +olRespond: Class<Outlook$OlActionCopyLike__olRespond> &
      Outlook$OlActionCopyLike__olRespond &
      4; // 4
  }

  declare class Outlook$OlActionCopyLike__olForward
    mixins Outlook$OlActionCopyLike {}
  declare class Outlook$OlActionCopyLike__olReply
    mixins Outlook$OlActionCopyLike {}
  declare class Outlook$OlActionCopyLike__olReplyAll
    mixins Outlook$OlActionCopyLike {}
  declare class Outlook$OlActionCopyLike__olReplyFolder
    mixins Outlook$OlActionCopyLike {}
  declare class Outlook$OlActionCopyLike__olRespond
    mixins Outlook$OlActionCopyLike {}

  declare class Outlook$OlActionReplyStyle {
    constructor(...args: empty): mixed;
    static +olEmbedOriginalItem: Class<Outlook$OlActionReplyStyle__olEmbedOriginalItem> &
      Outlook$OlActionReplyStyle__olEmbedOriginalItem &
      1; // 1
    static +olIncludeOriginalText: Class<Outlook$OlActionReplyStyle__olIncludeOriginalText> &
      Outlook$OlActionReplyStyle__olIncludeOriginalText &
      2; // 2
    static +olIndentOriginalText: Class<Outlook$OlActionReplyStyle__olIndentOriginalText> &
      Outlook$OlActionReplyStyle__olIndentOriginalText &
      3; // 3
    static +olLinkOriginalItem: Class<Outlook$OlActionReplyStyle__olLinkOriginalItem> &
      Outlook$OlActionReplyStyle__olLinkOriginalItem &
      4; // 4
    static +olOmitOriginalText: Class<Outlook$OlActionReplyStyle__olOmitOriginalText> &
      Outlook$OlActionReplyStyle__olOmitOriginalText &
      0; // 0
    static +olReplyTickOriginalText: Class<Outlook$OlActionReplyStyle__olReplyTickOriginalText> &
      Outlook$OlActionReplyStyle__olReplyTickOriginalText &
      1000; // 1000
    static +olUserPreference: Class<Outlook$OlActionReplyStyle__olUserPreference> &
      Outlook$OlActionReplyStyle__olUserPreference &
      5; // 5
  }

  declare class Outlook$OlActionReplyStyle__olEmbedOriginalItem
    mixins Outlook$OlActionReplyStyle {}
  declare class Outlook$OlActionReplyStyle__olIncludeOriginalText
    mixins Outlook$OlActionReplyStyle {}
  declare class Outlook$OlActionReplyStyle__olIndentOriginalText
    mixins Outlook$OlActionReplyStyle {}
  declare class Outlook$OlActionReplyStyle__olLinkOriginalItem
    mixins Outlook$OlActionReplyStyle {}
  declare class Outlook$OlActionReplyStyle__olOmitOriginalText
    mixins Outlook$OlActionReplyStyle {}
  declare class Outlook$OlActionReplyStyle__olReplyTickOriginalText
    mixins Outlook$OlActionReplyStyle {}
  declare class Outlook$OlActionReplyStyle__olUserPreference
    mixins Outlook$OlActionReplyStyle {}

  declare class Outlook$OlActionResponseStyle {
    constructor(...args: empty): mixed;
    static +olOpen: Class<Outlook$OlActionResponseStyle__olOpen> &
      Outlook$OlActionResponseStyle__olOpen &
      0; // 0
    static +olPrompt: Class<Outlook$OlActionResponseStyle__olPrompt> &
      Outlook$OlActionResponseStyle__olPrompt &
      2; // 2
    static +olSend: Class<Outlook$OlActionResponseStyle__olSend> &
      Outlook$OlActionResponseStyle__olSend &
      1; // 1
  }

  declare class Outlook$OlActionResponseStyle__olOpen
    mixins Outlook$OlActionResponseStyle {}
  declare class Outlook$OlActionResponseStyle__olPrompt
    mixins Outlook$OlActionResponseStyle {}
  declare class Outlook$OlActionResponseStyle__olSend
    mixins Outlook$OlActionResponseStyle {}

  declare class Outlook$OlActionShowOn {
    constructor(...args: empty): mixed;
    static +olDontShow: Class<Outlook$OlActionShowOn__olDontShow> &
      Outlook$OlActionShowOn__olDontShow &
      0; // 0
    static +olMenu: Class<Outlook$OlActionShowOn__olMenu> &
      Outlook$OlActionShowOn__olMenu &
      1; // 1
    static +olMenuAndToolbar: Class<Outlook$OlActionShowOn__olMenuAndToolbar> &
      Outlook$OlActionShowOn__olMenuAndToolbar &
      2; // 2
  }

  declare class Outlook$OlActionShowOn__olDontShow
    mixins Outlook$OlActionShowOn {}
  declare class Outlook$OlActionShowOn__olMenu mixins Outlook$OlActionShowOn {}
  declare class Outlook$OlActionShowOn__olMenuAndToolbar
    mixins Outlook$OlActionShowOn {}

  declare class Outlook$OlAddressEntryUserType {
    constructor(...args: empty): mixed;
    static +olExchangeAgentAddressEntry: Class<Outlook$OlAddressEntryUserType__olExchangeAgentAddressEntry> &
      Outlook$OlAddressEntryUserType__olExchangeAgentAddressEntry &
      3; // 3
    static +olExchangeDistributionListAddressEntry: Class<Outlook$OlAddressEntryUserType__olExchangeDistributionListAddressEntry> &
      Outlook$OlAddressEntryUserType__olExchangeDistributionListAddressEntry &
      1; // 1
    static +olExchangeOrganizationAddressEntry: Class<Outlook$OlAddressEntryUserType__olExchangeOrganizationAddressEntry> &
      Outlook$OlAddressEntryUserType__olExchangeOrganizationAddressEntry &
      4; // 4
    static +olExchangePublicFolderAddressEntry: Class<Outlook$OlAddressEntryUserType__olExchangePublicFolderAddressEntry> &
      Outlook$OlAddressEntryUserType__olExchangePublicFolderAddressEntry &
      2; // 2
    static +olExchangeRemoteUserAddressEntry: Class<Outlook$OlAddressEntryUserType__olExchangeRemoteUserAddressEntry> &
      Outlook$OlAddressEntryUserType__olExchangeRemoteUserAddressEntry &
      5; // 5
    static +olExchangeUserAddressEntry: Class<Outlook$OlAddressEntryUserType__olExchangeUserAddressEntry> &
      Outlook$OlAddressEntryUserType__olExchangeUserAddressEntry &
      0; // 0
    static +olLdapAddressEntry: Class<Outlook$OlAddressEntryUserType__olLdapAddressEntry> &
      Outlook$OlAddressEntryUserType__olLdapAddressEntry &
      20; // 20
    static +olOtherAddressEntry: Class<Outlook$OlAddressEntryUserType__olOtherAddressEntry> &
      Outlook$OlAddressEntryUserType__olOtherAddressEntry &
      40; // 40
    static +olOutlookContactAddressEntry: Class<Outlook$OlAddressEntryUserType__olOutlookContactAddressEntry> &
      Outlook$OlAddressEntryUserType__olOutlookContactAddressEntry &
      10; // 10
    static +olOutlookDistributionListAddressEntry: Class<Outlook$OlAddressEntryUserType__olOutlookDistributionListAddressEntry> &
      Outlook$OlAddressEntryUserType__olOutlookDistributionListAddressEntry &
      11; // 11
    static +olSmtpAddressEntry: Class<Outlook$OlAddressEntryUserType__olSmtpAddressEntry> &
      Outlook$OlAddressEntryUserType__olSmtpAddressEntry &
      30; // 30
  }

  declare class Outlook$OlAddressEntryUserType__olExchangeAgentAddressEntry
    mixins Outlook$OlAddressEntryUserType {}
  declare class Outlook$OlAddressEntryUserType__olExchangeDistributionListAddressEntry
    mixins Outlook$OlAddressEntryUserType {}
  declare class Outlook$OlAddressEntryUserType__olExchangeOrganizationAddressEntry
    mixins Outlook$OlAddressEntryUserType {}
  declare class Outlook$OlAddressEntryUserType__olExchangePublicFolderAddressEntry
    mixins Outlook$OlAddressEntryUserType {}
  declare class Outlook$OlAddressEntryUserType__olExchangeRemoteUserAddressEntry
    mixins Outlook$OlAddressEntryUserType {}
  declare class Outlook$OlAddressEntryUserType__olExchangeUserAddressEntry
    mixins Outlook$OlAddressEntryUserType {}
  declare class Outlook$OlAddressEntryUserType__olLdapAddressEntry
    mixins Outlook$OlAddressEntryUserType {}
  declare class Outlook$OlAddressEntryUserType__olOtherAddressEntry
    mixins Outlook$OlAddressEntryUserType {}
  declare class Outlook$OlAddressEntryUserType__olOutlookContactAddressEntry
    mixins Outlook$OlAddressEntryUserType {}
  declare class Outlook$OlAddressEntryUserType__olOutlookDistributionListAddressEntry
    mixins Outlook$OlAddressEntryUserType {}
  declare class Outlook$OlAddressEntryUserType__olSmtpAddressEntry
    mixins Outlook$OlAddressEntryUserType {}

  declare class Outlook$OlAddressListType {
    constructor(...args: empty): mixed;
    static +olCustomAddressList: Class<Outlook$OlAddressListType__olCustomAddressList> &
      Outlook$OlAddressListType__olCustomAddressList &
      4; // 4
    static +olExchangeContainer: Class<Outlook$OlAddressListType__olExchangeContainer> &
      Outlook$OlAddressListType__olExchangeContainer &
      1; // 1
    static +olExchangeGlobalAddressList: Class<Outlook$OlAddressListType__olExchangeGlobalAddressList> &
      Outlook$OlAddressListType__olExchangeGlobalAddressList &
      0; // 0
    static +olOutlookAddressList: Class<Outlook$OlAddressListType__olOutlookAddressList> &
      Outlook$OlAddressListType__olOutlookAddressList &
      2; // 2
    static +olOutlookLdapAddressList: Class<Outlook$OlAddressListType__olOutlookLdapAddressList> &
      Outlook$OlAddressListType__olOutlookLdapAddressList &
      3; // 3
  }

  declare class Outlook$OlAddressListType__olCustomAddressList
    mixins Outlook$OlAddressListType {}
  declare class Outlook$OlAddressListType__olExchangeContainer
    mixins Outlook$OlAddressListType {}
  declare class Outlook$OlAddressListType__olExchangeGlobalAddressList
    mixins Outlook$OlAddressListType {}
  declare class Outlook$OlAddressListType__olOutlookAddressList
    mixins Outlook$OlAddressListType {}
  declare class Outlook$OlAddressListType__olOutlookLdapAddressList
    mixins Outlook$OlAddressListType {}

  declare class Outlook$OlAlign {
    constructor(...args: empty): mixed;
    static +olAlignCenter: Class<Outlook$OlAlign__olAlignCenter> &
      Outlook$OlAlign__olAlignCenter &
      1; // 1
    static +olAlignLeft: Class<Outlook$OlAlign__olAlignLeft> &
      Outlook$OlAlign__olAlignLeft &
      0; // 0
    static +olAlignRight: Class<Outlook$OlAlign__olAlignRight> &
      Outlook$OlAlign__olAlignRight &
      2; // 2
  }

  declare class Outlook$OlAlign__olAlignCenter mixins Outlook$OlAlign {}
  declare class Outlook$OlAlign__olAlignLeft mixins Outlook$OlAlign {}
  declare class Outlook$OlAlign__olAlignRight mixins Outlook$OlAlign {}

  declare class Outlook$OlAlignment {
    constructor(...args: empty): mixed;
    static +olAlignmentLeft: Class<Outlook$OlAlignment__olAlignmentLeft> &
      Outlook$OlAlignment__olAlignmentLeft &
      0; // 0
    static +olAlignmentRight: Class<Outlook$OlAlignment__olAlignmentRight> &
      Outlook$OlAlignment__olAlignmentRight &
      1; // 1
  }

  declare class Outlook$OlAlignment__olAlignmentLeft
    mixins Outlook$OlAlignment {}
  declare class Outlook$OlAlignment__olAlignmentRight
    mixins Outlook$OlAlignment {}

  declare class Outlook$OlAlwaysDeleteConversation {
    constructor(...args: empty): mixed;
    static +olAlwaysDelete: Class<Outlook$OlAlwaysDeleteConversation__olAlwaysDelete> &
      Outlook$OlAlwaysDeleteConversation__olAlwaysDelete &
      1; // 1
    static +olAlwaysDeleteUnsupported: Class<Outlook$OlAlwaysDeleteConversation__olAlwaysDeleteUnsupported> &
      Outlook$OlAlwaysDeleteConversation__olAlwaysDeleteUnsupported &
      2; // 2
    static +olDoNotDelete: Class<Outlook$OlAlwaysDeleteConversation__olDoNotDelete> &
      Outlook$OlAlwaysDeleteConversation__olDoNotDelete &
      0; // 0
  }

  declare class Outlook$OlAlwaysDeleteConversation__olAlwaysDelete
    mixins Outlook$OlAlwaysDeleteConversation {}
  declare class Outlook$OlAlwaysDeleteConversation__olAlwaysDeleteUnsupported
    mixins Outlook$OlAlwaysDeleteConversation {}
  declare class Outlook$OlAlwaysDeleteConversation__olDoNotDelete
    mixins Outlook$OlAlwaysDeleteConversation {}

  declare class Outlook$OlAppointmentCopyOptions {
    constructor(...args: empty): mixed;
    static +olCopyAsAccept: Class<Outlook$OlAppointmentCopyOptions__olCopyAsAccept> &
      Outlook$OlAppointmentCopyOptions__olCopyAsAccept &
      2; // 2
    static +olCreateAppointment: Class<Outlook$OlAppointmentCopyOptions__olCreateAppointment> &
      Outlook$OlAppointmentCopyOptions__olCreateAppointment &
      1; // 1
    static +olPromptUser: Class<Outlook$OlAppointmentCopyOptions__olPromptUser> &
      Outlook$OlAppointmentCopyOptions__olPromptUser &
      0; // 0
  }

  declare class Outlook$OlAppointmentCopyOptions__olCopyAsAccept
    mixins Outlook$OlAppointmentCopyOptions {}
  declare class Outlook$OlAppointmentCopyOptions__olCreateAppointment
    mixins Outlook$OlAppointmentCopyOptions {}
  declare class Outlook$OlAppointmentCopyOptions__olPromptUser
    mixins Outlook$OlAppointmentCopyOptions {}

  declare class Outlook$OlAppointmentTimeField {
    constructor(...args: empty): mixed;
    static +olAppointmentTimeFieldEnd: Class<Outlook$OlAppointmentTimeField__olAppointmentTimeFieldEnd> &
      Outlook$OlAppointmentTimeField__olAppointmentTimeFieldEnd &
      3; // 3
    static +olAppointmentTimeFieldNone: Class<Outlook$OlAppointmentTimeField__olAppointmentTimeFieldNone> &
      Outlook$OlAppointmentTimeField__olAppointmentTimeFieldNone &
      1; // 1
    static +olAppointmentTimeFieldStart: Class<Outlook$OlAppointmentTimeField__olAppointmentTimeFieldStart> &
      Outlook$OlAppointmentTimeField__olAppointmentTimeFieldStart &
      2; // 2
  }

  declare class Outlook$OlAppointmentTimeField__olAppointmentTimeFieldEnd
    mixins Outlook$OlAppointmentTimeField {}
  declare class Outlook$OlAppointmentTimeField__olAppointmentTimeFieldNone
    mixins Outlook$OlAppointmentTimeField {}
  declare class Outlook$OlAppointmentTimeField__olAppointmentTimeFieldStart
    mixins Outlook$OlAppointmentTimeField {}

  declare class Outlook$OlAttachmentBlockLevel {
    constructor(...args: empty): mixed;
    static +olAttachmentBlockLevelNone: Class<Outlook$OlAttachmentBlockLevel__olAttachmentBlockLevelNone> &
      Outlook$OlAttachmentBlockLevel__olAttachmentBlockLevelNone &
      0; // 0
    static +olAttachmentBlockLevelOpen: Class<Outlook$OlAttachmentBlockLevel__olAttachmentBlockLevelOpen> &
      Outlook$OlAttachmentBlockLevel__olAttachmentBlockLevelOpen &
      1; // 1
  }

  declare class Outlook$OlAttachmentBlockLevel__olAttachmentBlockLevelNone
    mixins Outlook$OlAttachmentBlockLevel {}
  declare class Outlook$OlAttachmentBlockLevel__olAttachmentBlockLevelOpen
    mixins Outlook$OlAttachmentBlockLevel {}

  declare class Outlook$OlAttachmentType {
    constructor(...args: empty): mixed;
    static +olByReference: Class<Outlook$OlAttachmentType__olByReference> &
      Outlook$OlAttachmentType__olByReference &
      4; // 4
    static +olByValue: Class<Outlook$OlAttachmentType__olByValue> &
      Outlook$OlAttachmentType__olByValue &
      1; // 1
    static +olEmbeddeditem: Class<Outlook$OlAttachmentType__olEmbeddeditem> &
      Outlook$OlAttachmentType__olEmbeddeditem &
      5; // 5
    static +olOLE: Class<Outlook$OlAttachmentType__olOLE> &
      Outlook$OlAttachmentType__olOLE &
      6; // 6
  }

  declare class Outlook$OlAttachmentType__olByReference
    mixins Outlook$OlAttachmentType {}
  declare class Outlook$OlAttachmentType__olByValue
    mixins Outlook$OlAttachmentType {}
  declare class Outlook$OlAttachmentType__olEmbeddeditem
    mixins Outlook$OlAttachmentType {}
  declare class Outlook$OlAttachmentType__olOLE
    mixins Outlook$OlAttachmentType {}

  declare class Outlook$OlAutoDiscoverConnectionMode {
    constructor(...args: empty): mixed;
    static +olAutoDiscoverConnectionExternal: Class<Outlook$OlAutoDiscoverConnectionMode__olAutoDiscoverConnectionExternal> &
      Outlook$OlAutoDiscoverConnectionMode__olAutoDiscoverConnectionExternal &
      1; // 1
    static +olAutoDiscoverConnectionInternal: Class<Outlook$OlAutoDiscoverConnectionMode__olAutoDiscoverConnectionInternal> &
      Outlook$OlAutoDiscoverConnectionMode__olAutoDiscoverConnectionInternal &
      2; // 2
    static +olAutoDiscoverConnectionInternalDomain: Class<Outlook$OlAutoDiscoverConnectionMode__olAutoDiscoverConnectionInternalDomain> &
      Outlook$OlAutoDiscoverConnectionMode__olAutoDiscoverConnectionInternalDomain &
      3; // 3
    static +olAutoDiscoverConnectionUnknown: Class<Outlook$OlAutoDiscoverConnectionMode__olAutoDiscoverConnectionUnknown> &
      Outlook$OlAutoDiscoverConnectionMode__olAutoDiscoverConnectionUnknown &
      0; // 0
  }

  declare class Outlook$OlAutoDiscoverConnectionMode__olAutoDiscoverConnectionExternal
    mixins Outlook$OlAutoDiscoverConnectionMode {}
  declare class Outlook$OlAutoDiscoverConnectionMode__olAutoDiscoverConnectionInternal
    mixins Outlook$OlAutoDiscoverConnectionMode {}
  declare class Outlook$OlAutoDiscoverConnectionMode__olAutoDiscoverConnectionInternalDomain
    mixins Outlook$OlAutoDiscoverConnectionMode {}
  declare class Outlook$OlAutoDiscoverConnectionMode__olAutoDiscoverConnectionUnknown
    mixins Outlook$OlAutoDiscoverConnectionMode {}

  declare class Outlook$OlAutoPreview {
    constructor(...args: empty): mixed;
    static +olAutoPreviewAll: Class<Outlook$OlAutoPreview__olAutoPreviewAll> &
      Outlook$OlAutoPreview__olAutoPreviewAll &
      0; // 0
    static +olAutoPreviewNone: Class<Outlook$OlAutoPreview__olAutoPreviewNone> &
      Outlook$OlAutoPreview__olAutoPreviewNone &
      2; // 2
    static +olAutoPreviewUnread: Class<Outlook$OlAutoPreview__olAutoPreviewUnread> &
      Outlook$OlAutoPreview__olAutoPreviewUnread &
      1; // 1
  }

  declare class Outlook$OlAutoPreview__olAutoPreviewAll
    mixins Outlook$OlAutoPreview {}
  declare class Outlook$OlAutoPreview__olAutoPreviewNone
    mixins Outlook$OlAutoPreview {}
  declare class Outlook$OlAutoPreview__olAutoPreviewUnread
    mixins Outlook$OlAutoPreview {}

  declare class Outlook$OlBackStyle {
    constructor(...args: empty): mixed;
    static +olBackStyleOpaque: Class<Outlook$OlBackStyle__olBackStyleOpaque> &
      Outlook$OlBackStyle__olBackStyleOpaque &
      1; // 1
    static +olBackStyleTransparent: Class<Outlook$OlBackStyle__olBackStyleTransparent> &
      Outlook$OlBackStyle__olBackStyleTransparent &
      0; // 0
  }

  declare class Outlook$OlBackStyle__olBackStyleOpaque
    mixins Outlook$OlBackStyle {}
  declare class Outlook$OlBackStyle__olBackStyleTransparent
    mixins Outlook$OlBackStyle {}

  declare class Outlook$OlBodyFormat {
    constructor(...args: empty): mixed;
    static +olFormatHTML: Class<Outlook$OlBodyFormat__olFormatHTML> &
      Outlook$OlBodyFormat__olFormatHTML &
      2; // 2
    static +olFormatPlain: Class<Outlook$OlBodyFormat__olFormatPlain> &
      Outlook$OlBodyFormat__olFormatPlain &
      1; // 1
    static +olFormatRichText: Class<Outlook$OlBodyFormat__olFormatRichText> &
      Outlook$OlBodyFormat__olFormatRichText &
      3; // 3
    static +olFormatUnspecified: Class<Outlook$OlBodyFormat__olFormatUnspecified> &
      Outlook$OlBodyFormat__olFormatUnspecified &
      0; // 0
  }

  declare class Outlook$OlBodyFormat__olFormatHTML
    mixins Outlook$OlBodyFormat {}
  declare class Outlook$OlBodyFormat__olFormatPlain
    mixins Outlook$OlBodyFormat {}
  declare class Outlook$OlBodyFormat__olFormatRichText
    mixins Outlook$OlBodyFormat {}
  declare class Outlook$OlBodyFormat__olFormatUnspecified
    mixins Outlook$OlBodyFormat {}

  declare class Outlook$OlBorderStyle {
    constructor(...args: empty): mixed;
    static +olBorderStyleNone: Class<Outlook$OlBorderStyle__olBorderStyleNone> &
      Outlook$OlBorderStyle__olBorderStyleNone &
      0; // 0
    static +olBorderStyleSingle: Class<Outlook$OlBorderStyle__olBorderStyleSingle> &
      Outlook$OlBorderStyle__olBorderStyleSingle &
      1; // 1
  }

  declare class Outlook$OlBorderStyle__olBorderStyleNone
    mixins Outlook$OlBorderStyle {}
  declare class Outlook$OlBorderStyle__olBorderStyleSingle
    mixins Outlook$OlBorderStyle {}

  declare class Outlook$OlBusinessCardType {
    constructor(...args: empty): mixed;
    static +olBusinessCardTypeInterConnect: Class<Outlook$OlBusinessCardType__olBusinessCardTypeInterConnect> &
      Outlook$OlBusinessCardType__olBusinessCardTypeInterConnect &
      1; // 1
    static +olBusinessCardTypeOutlook: Class<Outlook$OlBusinessCardType__olBusinessCardTypeOutlook> &
      Outlook$OlBusinessCardType__olBusinessCardTypeOutlook &
      0; // 0
  }

  declare class Outlook$OlBusinessCardType__olBusinessCardTypeInterConnect
    mixins Outlook$OlBusinessCardType {}
  declare class Outlook$OlBusinessCardType__olBusinessCardTypeOutlook
    mixins Outlook$OlBusinessCardType {}

  declare class Outlook$OlBusyStatus {
    constructor(...args: empty): mixed;
    static +olBusy: Class<Outlook$OlBusyStatus__olBusy> &
      Outlook$OlBusyStatus__olBusy &
      2; // 2
    static +olFree: Class<Outlook$OlBusyStatus__olFree> &
      Outlook$OlBusyStatus__olFree &
      0; // 0
    static +olOutOfOffice: Class<Outlook$OlBusyStatus__olOutOfOffice> &
      Outlook$OlBusyStatus__olOutOfOffice &
      3; // 3
    static +olTentative: Class<Outlook$OlBusyStatus__olTentative> &
      Outlook$OlBusyStatus__olTentative &
      1; // 1
  }

  declare class Outlook$OlBusyStatus__olBusy mixins Outlook$OlBusyStatus {}
  declare class Outlook$OlBusyStatus__olFree mixins Outlook$OlBusyStatus {}
  declare class Outlook$OlBusyStatus__olOutOfOffice
    mixins Outlook$OlBusyStatus {}
  declare class Outlook$OlBusyStatus__olTentative mixins Outlook$OlBusyStatus {}

  declare class Outlook$OlCalendarDetail {
    constructor(...args: empty): mixed;
    static +olFreeBusyAndSubject: Class<Outlook$OlCalendarDetail__olFreeBusyAndSubject> &
      Outlook$OlCalendarDetail__olFreeBusyAndSubject &
      1; // 1
    static +olFreeBusyOnly: Class<Outlook$OlCalendarDetail__olFreeBusyOnly> &
      Outlook$OlCalendarDetail__olFreeBusyOnly &
      0; // 0
    static +olFullDetails: Class<Outlook$OlCalendarDetail__olFullDetails> &
      Outlook$OlCalendarDetail__olFullDetails &
      2; // 2
  }

  declare class Outlook$OlCalendarDetail__olFreeBusyAndSubject
    mixins Outlook$OlCalendarDetail {}
  declare class Outlook$OlCalendarDetail__olFreeBusyOnly
    mixins Outlook$OlCalendarDetail {}
  declare class Outlook$OlCalendarDetail__olFullDetails
    mixins Outlook$OlCalendarDetail {}

  declare class Outlook$OlCalendarMailFormat {
    constructor(...args: empty): mixed;
    static +olCalendarMailFormatDailySchedule: Class<Outlook$OlCalendarMailFormat__olCalendarMailFormatDailySchedule> &
      Outlook$OlCalendarMailFormat__olCalendarMailFormatDailySchedule &
      0; // 0
    static +olCalendarMailFormatEventList: Class<Outlook$OlCalendarMailFormat__olCalendarMailFormatEventList> &
      Outlook$OlCalendarMailFormat__olCalendarMailFormatEventList &
      1; // 1
  }

  declare class Outlook$OlCalendarMailFormat__olCalendarMailFormatDailySchedule
    mixins Outlook$OlCalendarMailFormat {}
  declare class Outlook$OlCalendarMailFormat__olCalendarMailFormatEventList
    mixins Outlook$OlCalendarMailFormat {}

  declare class Outlook$OlCalendarViewMode {
    constructor(...args: empty): mixed;
    static +olCalendarView5DayWeek: Class<Outlook$OlCalendarViewMode__olCalendarView5DayWeek> &
      Outlook$OlCalendarViewMode__olCalendarView5DayWeek &
      4; // 4
    static +olCalendarViewDay: Class<Outlook$OlCalendarViewMode__olCalendarViewDay> &
      Outlook$OlCalendarViewMode__olCalendarViewDay &
      0; // 0
    static +olCalendarViewMonth: Class<Outlook$OlCalendarViewMode__olCalendarViewMonth> &
      Outlook$OlCalendarViewMode__olCalendarViewMonth &
      2; // 2
    static +olCalendarViewMultiDay: Class<Outlook$OlCalendarViewMode__olCalendarViewMultiDay> &
      Outlook$OlCalendarViewMode__olCalendarViewMultiDay &
      3; // 3
    static +olCalendarViewWeek: Class<Outlook$OlCalendarViewMode__olCalendarViewWeek> &
      Outlook$OlCalendarViewMode__olCalendarViewWeek &
      1; // 1
  }

  declare class Outlook$OlCalendarViewMode__olCalendarView5DayWeek
    mixins Outlook$OlCalendarViewMode {}
  declare class Outlook$OlCalendarViewMode__olCalendarViewDay
    mixins Outlook$OlCalendarViewMode {}
  declare class Outlook$OlCalendarViewMode__olCalendarViewMonth
    mixins Outlook$OlCalendarViewMode {}
  declare class Outlook$OlCalendarViewMode__olCalendarViewMultiDay
    mixins Outlook$OlCalendarViewMode {}
  declare class Outlook$OlCalendarViewMode__olCalendarViewWeek
    mixins Outlook$OlCalendarViewMode {}

  declare class Outlook$OlCategoryColor {
    constructor(...args: empty): mixed;
    static +olCategoryColorBlack: Class<Outlook$OlCategoryColor__olCategoryColorBlack> &
      Outlook$OlCategoryColor__olCategoryColorBlack &
      15; // 15
    static +olCategoryColorBlue: Class<Outlook$OlCategoryColor__olCategoryColorBlue> &
      Outlook$OlCategoryColor__olCategoryColorBlue &
      8; // 8
    static +olCategoryColorDarkBlue: Class<Outlook$OlCategoryColor__olCategoryColorDarkBlue> &
      Outlook$OlCategoryColor__olCategoryColorDarkBlue &
      23; // 23
    static +olCategoryColorDarkGray: Class<Outlook$OlCategoryColor__olCategoryColorDarkGray> &
      Outlook$OlCategoryColor__olCategoryColorDarkGray &
      14; // 14
    static +olCategoryColorDarkGreen: Class<Outlook$OlCategoryColor__olCategoryColorDarkGreen> &
      Outlook$OlCategoryColor__olCategoryColorDarkGreen &
      20; // 20
    static +olCategoryColorDarkMaroon: Class<Outlook$OlCategoryColor__olCategoryColorDarkMaroon> &
      Outlook$OlCategoryColor__olCategoryColorDarkMaroon &
      25; // 25
    static +olCategoryColorDarkOlive: Class<Outlook$OlCategoryColor__olCategoryColorDarkOlive> &
      Outlook$OlCategoryColor__olCategoryColorDarkOlive &
      22; // 22
    static +olCategoryColorDarkOrange: Class<Outlook$OlCategoryColor__olCategoryColorDarkOrange> &
      Outlook$OlCategoryColor__olCategoryColorDarkOrange &
      17; // 17
    static +olCategoryColorDarkPeach: Class<Outlook$OlCategoryColor__olCategoryColorDarkPeach> &
      Outlook$OlCategoryColor__olCategoryColorDarkPeach &
      18; // 18
    static +olCategoryColorDarkPurple: Class<Outlook$OlCategoryColor__olCategoryColorDarkPurple> &
      Outlook$OlCategoryColor__olCategoryColorDarkPurple &
      24; // 24
    static +olCategoryColorDarkRed: Class<Outlook$OlCategoryColor__olCategoryColorDarkRed> &
      Outlook$OlCategoryColor__olCategoryColorDarkRed &
      16; // 16
    static +olCategoryColorDarkSteel: Class<Outlook$OlCategoryColor__olCategoryColorDarkSteel> &
      Outlook$OlCategoryColor__olCategoryColorDarkSteel &
      12; // 12
    static +olCategoryColorDarkTeal: Class<Outlook$OlCategoryColor__olCategoryColorDarkTeal> &
      Outlook$OlCategoryColor__olCategoryColorDarkTeal &
      21; // 21
    static +olCategoryColorDarkYellow: Class<Outlook$OlCategoryColor__olCategoryColorDarkYellow> &
      Outlook$OlCategoryColor__olCategoryColorDarkYellow &
      19; // 19
    static +olCategoryColorGray: Class<Outlook$OlCategoryColor__olCategoryColorGray> &
      Outlook$OlCategoryColor__olCategoryColorGray &
      13; // 13
    static +olCategoryColorGreen: Class<Outlook$OlCategoryColor__olCategoryColorGreen> &
      Outlook$OlCategoryColor__olCategoryColorGreen &
      5; // 5
    static +olCategoryColorMaroon: Class<Outlook$OlCategoryColor__olCategoryColorMaroon> &
      Outlook$OlCategoryColor__olCategoryColorMaroon &
      10; // 10
    static +olCategoryColorNone: Class<Outlook$OlCategoryColor__olCategoryColorNone> &
      Outlook$OlCategoryColor__olCategoryColorNone &
      0; // 0
    static +olCategoryColorOlive: Class<Outlook$OlCategoryColor__olCategoryColorOlive> &
      Outlook$OlCategoryColor__olCategoryColorOlive &
      7; // 7
    static +olCategoryColorOrange: Class<Outlook$OlCategoryColor__olCategoryColorOrange> &
      Outlook$OlCategoryColor__olCategoryColorOrange &
      2; // 2
    static +olCategoryColorPeach: Class<Outlook$OlCategoryColor__olCategoryColorPeach> &
      Outlook$OlCategoryColor__olCategoryColorPeach &
      3; // 3
    static +olCategoryColorPurple: Class<Outlook$OlCategoryColor__olCategoryColorPurple> &
      Outlook$OlCategoryColor__olCategoryColorPurple &
      9; // 9
    static +olCategoryColorRed: Class<Outlook$OlCategoryColor__olCategoryColorRed> &
      Outlook$OlCategoryColor__olCategoryColorRed &
      1; // 1
    static +olCategoryColorSteel: Class<Outlook$OlCategoryColor__olCategoryColorSteel> &
      Outlook$OlCategoryColor__olCategoryColorSteel &
      11; // 11
    static +olCategoryColorTeal: Class<Outlook$OlCategoryColor__olCategoryColorTeal> &
      Outlook$OlCategoryColor__olCategoryColorTeal &
      6; // 6
    static +olCategoryColorYellow: Class<Outlook$OlCategoryColor__olCategoryColorYellow> &
      Outlook$OlCategoryColor__olCategoryColorYellow &
      4; // 4
  }

  declare class Outlook$OlCategoryColor__olCategoryColorBlack
    mixins Outlook$OlCategoryColor {}
  declare class Outlook$OlCategoryColor__olCategoryColorBlue
    mixins Outlook$OlCategoryColor {}
  declare class Outlook$OlCategoryColor__olCategoryColorDarkBlue
    mixins Outlook$OlCategoryColor {}
  declare class Outlook$OlCategoryColor__olCategoryColorDarkGray
    mixins Outlook$OlCategoryColor {}
  declare class Outlook$OlCategoryColor__olCategoryColorDarkGreen
    mixins Outlook$OlCategoryColor {}
  declare class Outlook$OlCategoryColor__olCategoryColorDarkMaroon
    mixins Outlook$OlCategoryColor {}
  declare class Outlook$OlCategoryColor__olCategoryColorDarkOlive
    mixins Outlook$OlCategoryColor {}
  declare class Outlook$OlCategoryColor__olCategoryColorDarkOrange
    mixins Outlook$OlCategoryColor {}
  declare class Outlook$OlCategoryColor__olCategoryColorDarkPeach
    mixins Outlook$OlCategoryColor {}
  declare class Outlook$OlCategoryColor__olCategoryColorDarkPurple
    mixins Outlook$OlCategoryColor {}
  declare class Outlook$OlCategoryColor__olCategoryColorDarkRed
    mixins Outlook$OlCategoryColor {}
  declare class Outlook$OlCategoryColor__olCategoryColorDarkSteel
    mixins Outlook$OlCategoryColor {}
  declare class Outlook$OlCategoryColor__olCategoryColorDarkTeal
    mixins Outlook$OlCategoryColor {}
  declare class Outlook$OlCategoryColor__olCategoryColorDarkYellow
    mixins Outlook$OlCategoryColor {}
  declare class Outlook$OlCategoryColor__olCategoryColorGray
    mixins Outlook$OlCategoryColor {}
  declare class Outlook$OlCategoryColor__olCategoryColorGreen
    mixins Outlook$OlCategoryColor {}
  declare class Outlook$OlCategoryColor__olCategoryColorMaroon
    mixins Outlook$OlCategoryColor {}
  declare class Outlook$OlCategoryColor__olCategoryColorNone
    mixins Outlook$OlCategoryColor {}
  declare class Outlook$OlCategoryColor__olCategoryColorOlive
    mixins Outlook$OlCategoryColor {}
  declare class Outlook$OlCategoryColor__olCategoryColorOrange
    mixins Outlook$OlCategoryColor {}
  declare class Outlook$OlCategoryColor__olCategoryColorPeach
    mixins Outlook$OlCategoryColor {}
  declare class Outlook$OlCategoryColor__olCategoryColorPurple
    mixins Outlook$OlCategoryColor {}
  declare class Outlook$OlCategoryColor__olCategoryColorRed
    mixins Outlook$OlCategoryColor {}
  declare class Outlook$OlCategoryColor__olCategoryColorSteel
    mixins Outlook$OlCategoryColor {}
  declare class Outlook$OlCategoryColor__olCategoryColorTeal
    mixins Outlook$OlCategoryColor {}
  declare class Outlook$OlCategoryColor__olCategoryColorYellow
    mixins Outlook$OlCategoryColor {}

  declare class Outlook$OlCategoryShortcutKey {
    constructor(...args: empty): mixed;
    static +olCategoryShortcutKeyCtrlF10: Class<Outlook$OlCategoryShortcutKey__olCategoryShortcutKeyCtrlF10> &
      Outlook$OlCategoryShortcutKey__olCategoryShortcutKeyCtrlF10 &
      9; // 9
    static +olCategoryShortcutKeyCtrlF11: Class<Outlook$OlCategoryShortcutKey__olCategoryShortcutKeyCtrlF11> &
      Outlook$OlCategoryShortcutKey__olCategoryShortcutKeyCtrlF11 &
      10; // 10
    static +olCategoryShortcutKeyCtrlF12: Class<Outlook$OlCategoryShortcutKey__olCategoryShortcutKeyCtrlF12> &
      Outlook$OlCategoryShortcutKey__olCategoryShortcutKeyCtrlF12 &
      11; // 11
    static +olCategoryShortcutKeyCtrlF2: Class<Outlook$OlCategoryShortcutKey__olCategoryShortcutKeyCtrlF2> &
      Outlook$OlCategoryShortcutKey__olCategoryShortcutKeyCtrlF2 &
      1; // 1
    static +olCategoryShortcutKeyCtrlF3: Class<Outlook$OlCategoryShortcutKey__olCategoryShortcutKeyCtrlF3> &
      Outlook$OlCategoryShortcutKey__olCategoryShortcutKeyCtrlF3 &
      2; // 2
    static +olCategoryShortcutKeyCtrlF4: Class<Outlook$OlCategoryShortcutKey__olCategoryShortcutKeyCtrlF4> &
      Outlook$OlCategoryShortcutKey__olCategoryShortcutKeyCtrlF4 &
      3; // 3
    static +olCategoryShortcutKeyCtrlF5: Class<Outlook$OlCategoryShortcutKey__olCategoryShortcutKeyCtrlF5> &
      Outlook$OlCategoryShortcutKey__olCategoryShortcutKeyCtrlF5 &
      4; // 4
    static +olCategoryShortcutKeyCtrlF6: Class<Outlook$OlCategoryShortcutKey__olCategoryShortcutKeyCtrlF6> &
      Outlook$OlCategoryShortcutKey__olCategoryShortcutKeyCtrlF6 &
      5; // 5
    static +olCategoryShortcutKeyCtrlF7: Class<Outlook$OlCategoryShortcutKey__olCategoryShortcutKeyCtrlF7> &
      Outlook$OlCategoryShortcutKey__olCategoryShortcutKeyCtrlF7 &
      6; // 6
    static +olCategoryShortcutKeyCtrlF8: Class<Outlook$OlCategoryShortcutKey__olCategoryShortcutKeyCtrlF8> &
      Outlook$OlCategoryShortcutKey__olCategoryShortcutKeyCtrlF8 &
      7; // 7
    static +olCategoryShortcutKeyCtrlF9: Class<Outlook$OlCategoryShortcutKey__olCategoryShortcutKeyCtrlF9> &
      Outlook$OlCategoryShortcutKey__olCategoryShortcutKeyCtrlF9 &
      8; // 8
    static +olCategoryShortcutKeyNone: Class<Outlook$OlCategoryShortcutKey__olCategoryShortcutKeyNone> &
      Outlook$OlCategoryShortcutKey__olCategoryShortcutKeyNone &
      0; // 0
  }

  declare class Outlook$OlCategoryShortcutKey__olCategoryShortcutKeyCtrlF10
    mixins Outlook$OlCategoryShortcutKey {}
  declare class Outlook$OlCategoryShortcutKey__olCategoryShortcutKeyCtrlF11
    mixins Outlook$OlCategoryShortcutKey {}
  declare class Outlook$OlCategoryShortcutKey__olCategoryShortcutKeyCtrlF12
    mixins Outlook$OlCategoryShortcutKey {}
  declare class Outlook$OlCategoryShortcutKey__olCategoryShortcutKeyCtrlF2
    mixins Outlook$OlCategoryShortcutKey {}
  declare class Outlook$OlCategoryShortcutKey__olCategoryShortcutKeyCtrlF3
    mixins Outlook$OlCategoryShortcutKey {}
  declare class Outlook$OlCategoryShortcutKey__olCategoryShortcutKeyCtrlF4
    mixins Outlook$OlCategoryShortcutKey {}
  declare class Outlook$OlCategoryShortcutKey__olCategoryShortcutKeyCtrlF5
    mixins Outlook$OlCategoryShortcutKey {}
  declare class Outlook$OlCategoryShortcutKey__olCategoryShortcutKeyCtrlF6
    mixins Outlook$OlCategoryShortcutKey {}
  declare class Outlook$OlCategoryShortcutKey__olCategoryShortcutKeyCtrlF7
    mixins Outlook$OlCategoryShortcutKey {}
  declare class Outlook$OlCategoryShortcutKey__olCategoryShortcutKeyCtrlF8
    mixins Outlook$OlCategoryShortcutKey {}
  declare class Outlook$OlCategoryShortcutKey__olCategoryShortcutKeyCtrlF9
    mixins Outlook$OlCategoryShortcutKey {}
  declare class Outlook$OlCategoryShortcutKey__olCategoryShortcutKeyNone
    mixins Outlook$OlCategoryShortcutKey {}

  declare class Outlook$OlColor {
    constructor(...args: empty): mixed;
    static +olAutoColor: Class<Outlook$OlColor__olAutoColor> &
      Outlook$OlColor__olAutoColor &
      0; // 0
    static +olColorAqua: Class<Outlook$OlColor__olColorAqua> &
      Outlook$OlColor__olColorAqua &
      15; // 15
    static +olColorBlack: Class<Outlook$OlColor__olColorBlack> &
      Outlook$OlColor__olColorBlack &
      1; // 1
    static +olColorBlue: Class<Outlook$OlColor__olColorBlue> &
      Outlook$OlColor__olColorBlue &
      13; // 13
    static +olColorFuchsia: Class<Outlook$OlColor__olColorFuchsia> &
      Outlook$OlColor__olColorFuchsia &
      14; // 14
    static +olColorGray: Class<Outlook$OlColor__olColorGray> &
      Outlook$OlColor__olColorGray &
      8; // 8
    static +olColorGreen: Class<Outlook$OlColor__olColorGreen> &
      Outlook$OlColor__olColorGreen &
      3; // 3
    static +olColorLime: Class<Outlook$OlColor__olColorLime> &
      Outlook$OlColor__olColorLime &
      11; // 11
    static +olColorMaroon: Class<Outlook$OlColor__olColorMaroon> &
      Outlook$OlColor__olColorMaroon &
      2; // 2
    static +olColorNavy: Class<Outlook$OlColor__olColorNavy> &
      Outlook$OlColor__olColorNavy &
      5; // 5
    static +olColorOlive: Class<Outlook$OlColor__olColorOlive> &
      Outlook$OlColor__olColorOlive &
      4; // 4
    static +olColorPurple: Class<Outlook$OlColor__olColorPurple> &
      Outlook$OlColor__olColorPurple &
      6; // 6
    static +olColorRed: Class<Outlook$OlColor__olColorRed> &
      Outlook$OlColor__olColorRed &
      10; // 10
    static +olColorSilver: Class<Outlook$OlColor__olColorSilver> &
      Outlook$OlColor__olColorSilver &
      9; // 9
    static +olColorTeal: Class<Outlook$OlColor__olColorTeal> &
      Outlook$OlColor__olColorTeal &
      7; // 7
    static +olColorWhite: Class<Outlook$OlColor__olColorWhite> &
      Outlook$OlColor__olColorWhite &
      16; // 16
    static +olColorYellow: Class<Outlook$OlColor__olColorYellow> &
      Outlook$OlColor__olColorYellow &
      12; // 12
  }

  declare class Outlook$OlColor__olAutoColor mixins Outlook$OlColor {}
  declare class Outlook$OlColor__olColorAqua mixins Outlook$OlColor {}
  declare class Outlook$OlColor__olColorBlack mixins Outlook$OlColor {}
  declare class Outlook$OlColor__olColorBlue mixins Outlook$OlColor {}
  declare class Outlook$OlColor__olColorFuchsia mixins Outlook$OlColor {}
  declare class Outlook$OlColor__olColorGray mixins Outlook$OlColor {}
  declare class Outlook$OlColor__olColorGreen mixins Outlook$OlColor {}
  declare class Outlook$OlColor__olColorLime mixins Outlook$OlColor {}
  declare class Outlook$OlColor__olColorMaroon mixins Outlook$OlColor {}
  declare class Outlook$OlColor__olColorNavy mixins Outlook$OlColor {}
  declare class Outlook$OlColor__olColorOlive mixins Outlook$OlColor {}
  declare class Outlook$OlColor__olColorPurple mixins Outlook$OlColor {}
  declare class Outlook$OlColor__olColorRed mixins Outlook$OlColor {}
  declare class Outlook$OlColor__olColorSilver mixins Outlook$OlColor {}
  declare class Outlook$OlColor__olColorTeal mixins Outlook$OlColor {}
  declare class Outlook$OlColor__olColorWhite mixins Outlook$OlColor {}
  declare class Outlook$OlColor__olColorYellow mixins Outlook$OlColor {}

  declare class Outlook$OlComboBoxStyle {
    constructor(...args: empty): mixed;
    static +olComboBoxStyleCombo: Class<Outlook$OlComboBoxStyle__olComboBoxStyleCombo> &
      Outlook$OlComboBoxStyle__olComboBoxStyleCombo &
      0; // 0
    static +olComboBoxStyleList: Class<Outlook$OlComboBoxStyle__olComboBoxStyleList> &
      Outlook$OlComboBoxStyle__olComboBoxStyleList &
      2; // 2
  }

  declare class Outlook$OlComboBoxStyle__olComboBoxStyleCombo
    mixins Outlook$OlComboBoxStyle {}
  declare class Outlook$OlComboBoxStyle__olComboBoxStyleList
    mixins Outlook$OlComboBoxStyle {}

  declare class Outlook$OlContactPhoneNumber {
    constructor(...args: empty): mixed;
    static +olContactPhoneAssistant: Class<Outlook$OlContactPhoneNumber__olContactPhoneAssistant> &
      Outlook$OlContactPhoneNumber__olContactPhoneAssistant &
      0; // 0
    static +olContactPhoneBusiness: Class<Outlook$OlContactPhoneNumber__olContactPhoneBusiness> &
      Outlook$OlContactPhoneNumber__olContactPhoneBusiness &
      1; // 1
    static +olContactPhoneBusiness2: Class<Outlook$OlContactPhoneNumber__olContactPhoneBusiness2> &
      Outlook$OlContactPhoneNumber__olContactPhoneBusiness2 &
      2; // 2
    static +olContactPhoneBusinessFax: Class<Outlook$OlContactPhoneNumber__olContactPhoneBusinessFax> &
      Outlook$OlContactPhoneNumber__olContactPhoneBusinessFax &
      3; // 3
    static +olContactPhoneCallback: Class<Outlook$OlContactPhoneNumber__olContactPhoneCallback> &
      Outlook$OlContactPhoneNumber__olContactPhoneCallback &
      4; // 4
    static +olContactPhoneCar: Class<Outlook$OlContactPhoneNumber__olContactPhoneCar> &
      Outlook$OlContactPhoneNumber__olContactPhoneCar &
      5; // 5
    static +olContactPhoneCompany: Class<Outlook$OlContactPhoneNumber__olContactPhoneCompany> &
      Outlook$OlContactPhoneNumber__olContactPhoneCompany &
      6; // 6
    static +olContactPhoneHome: Class<Outlook$OlContactPhoneNumber__olContactPhoneHome> &
      Outlook$OlContactPhoneNumber__olContactPhoneHome &
      7; // 7
    static +olContactPhoneHome2: Class<Outlook$OlContactPhoneNumber__olContactPhoneHome2> &
      Outlook$OlContactPhoneNumber__olContactPhoneHome2 &
      8; // 8
    static +olContactPhoneHomeFax: Class<Outlook$OlContactPhoneNumber__olContactPhoneHomeFax> &
      Outlook$OlContactPhoneNumber__olContactPhoneHomeFax &
      9; // 9
    static +olContactPhoneISDN: Class<Outlook$OlContactPhoneNumber__olContactPhoneISDN> &
      Outlook$OlContactPhoneNumber__olContactPhoneISDN &
      10; // 10
    static +olContactPhoneMobile: Class<Outlook$OlContactPhoneNumber__olContactPhoneMobile> &
      Outlook$OlContactPhoneNumber__olContactPhoneMobile &
      11; // 11
    static +olContactPhoneOther: Class<Outlook$OlContactPhoneNumber__olContactPhoneOther> &
      Outlook$OlContactPhoneNumber__olContactPhoneOther &
      12; // 12
    static +olContactPhoneOtherFax: Class<Outlook$OlContactPhoneNumber__olContactPhoneOtherFax> &
      Outlook$OlContactPhoneNumber__olContactPhoneOtherFax &
      13; // 13
    static +olContactPhonePager: Class<Outlook$OlContactPhoneNumber__olContactPhonePager> &
      Outlook$OlContactPhoneNumber__olContactPhonePager &
      14; // 14
    static +olContactPhonePrimary: Class<Outlook$OlContactPhoneNumber__olContactPhonePrimary> &
      Outlook$OlContactPhoneNumber__olContactPhonePrimary &
      15; // 15
    static +olContactPhoneRadio: Class<Outlook$OlContactPhoneNumber__olContactPhoneRadio> &
      Outlook$OlContactPhoneNumber__olContactPhoneRadio &
      16; // 16
    static +olContactPhoneTelex: Class<Outlook$OlContactPhoneNumber__olContactPhoneTelex> &
      Outlook$OlContactPhoneNumber__olContactPhoneTelex &
      17; // 17
    static +olContactPhoneTTYTTD: Class<Outlook$OlContactPhoneNumber__olContactPhoneTTYTTD> &
      Outlook$OlContactPhoneNumber__olContactPhoneTTYTTD &
      18; // 18
  }

  declare class Outlook$OlContactPhoneNumber__olContactPhoneAssistant
    mixins Outlook$OlContactPhoneNumber {}
  declare class Outlook$OlContactPhoneNumber__olContactPhoneBusiness
    mixins Outlook$OlContactPhoneNumber {}
  declare class Outlook$OlContactPhoneNumber__olContactPhoneBusiness2
    mixins Outlook$OlContactPhoneNumber {}
  declare class Outlook$OlContactPhoneNumber__olContactPhoneBusinessFax
    mixins Outlook$OlContactPhoneNumber {}
  declare class Outlook$OlContactPhoneNumber__olContactPhoneCallback
    mixins Outlook$OlContactPhoneNumber {}
  declare class Outlook$OlContactPhoneNumber__olContactPhoneCar
    mixins Outlook$OlContactPhoneNumber {}
  declare class Outlook$OlContactPhoneNumber__olContactPhoneCompany
    mixins Outlook$OlContactPhoneNumber {}
  declare class Outlook$OlContactPhoneNumber__olContactPhoneHome
    mixins Outlook$OlContactPhoneNumber {}
  declare class Outlook$OlContactPhoneNumber__olContactPhoneHome2
    mixins Outlook$OlContactPhoneNumber {}
  declare class Outlook$OlContactPhoneNumber__olContactPhoneHomeFax
    mixins Outlook$OlContactPhoneNumber {}
  declare class Outlook$OlContactPhoneNumber__olContactPhoneISDN
    mixins Outlook$OlContactPhoneNumber {}
  declare class Outlook$OlContactPhoneNumber__olContactPhoneMobile
    mixins Outlook$OlContactPhoneNumber {}
  declare class Outlook$OlContactPhoneNumber__olContactPhoneOther
    mixins Outlook$OlContactPhoneNumber {}
  declare class Outlook$OlContactPhoneNumber__olContactPhoneOtherFax
    mixins Outlook$OlContactPhoneNumber {}
  declare class Outlook$OlContactPhoneNumber__olContactPhonePager
    mixins Outlook$OlContactPhoneNumber {}
  declare class Outlook$OlContactPhoneNumber__olContactPhonePrimary
    mixins Outlook$OlContactPhoneNumber {}
  declare class Outlook$OlContactPhoneNumber__olContactPhoneRadio
    mixins Outlook$OlContactPhoneNumber {}
  declare class Outlook$OlContactPhoneNumber__olContactPhoneTelex
    mixins Outlook$OlContactPhoneNumber {}
  declare class Outlook$OlContactPhoneNumber__olContactPhoneTTYTTD
    mixins Outlook$OlContactPhoneNumber {}

  declare class Outlook$OlContextMenu {
    constructor(...args: empty): mixed;
    static +olAttachmentContextMenu: Class<Outlook$OlContextMenu__olAttachmentContextMenu> &
      Outlook$OlContextMenu__olAttachmentContextMenu &
      3; // 3
    static +olFolderContextMenu: Class<Outlook$OlContextMenu__olFolderContextMenu> &
      Outlook$OlContextMenu__olFolderContextMenu &
      2; // 2
    static +olItemContextMenu: Class<Outlook$OlContextMenu__olItemContextMenu> &
      Outlook$OlContextMenu__olItemContextMenu &
      0; // 0
    static +olShortcutContextMenu: Class<Outlook$OlContextMenu__olShortcutContextMenu> &
      Outlook$OlContextMenu__olShortcutContextMenu &
      5; // 5
    static +olStoreContextMenu: Class<Outlook$OlContextMenu__olStoreContextMenu> &
      Outlook$OlContextMenu__olStoreContextMenu &
      4; // 4
    static +olViewContextMenu: Class<Outlook$OlContextMenu__olViewContextMenu> &
      Outlook$OlContextMenu__olViewContextMenu &
      1; // 1
  }

  declare class Outlook$OlContextMenu__olAttachmentContextMenu
    mixins Outlook$OlContextMenu {}
  declare class Outlook$OlContextMenu__olFolderContextMenu
    mixins Outlook$OlContextMenu {}
  declare class Outlook$OlContextMenu__olItemContextMenu
    mixins Outlook$OlContextMenu {}
  declare class Outlook$OlContextMenu__olShortcutContextMenu
    mixins Outlook$OlContextMenu {}
  declare class Outlook$OlContextMenu__olStoreContextMenu
    mixins Outlook$OlContextMenu {}
  declare class Outlook$OlContextMenu__olViewContextMenu
    mixins Outlook$OlContextMenu {}

  declare class Outlook$OlDaysOfWeek {
    constructor(...args: empty): mixed;
    static +olFriday: Class<Outlook$OlDaysOfWeek__olFriday> &
      Outlook$OlDaysOfWeek__olFriday &
      32; // 32
    static +olMonday: Class<Outlook$OlDaysOfWeek__olMonday> &
      Outlook$OlDaysOfWeek__olMonday &
      2; // 2
    static +olSaturday: Class<Outlook$OlDaysOfWeek__olSaturday> &
      Outlook$OlDaysOfWeek__olSaturday &
      64; // 64
    static +olSunday: Class<Outlook$OlDaysOfWeek__olSunday> &
      Outlook$OlDaysOfWeek__olSunday &
      1; // 1
    static +olThursday: Class<Outlook$OlDaysOfWeek__olThursday> &
      Outlook$OlDaysOfWeek__olThursday &
      16; // 16
    static +olTuesday: Class<Outlook$OlDaysOfWeek__olTuesday> &
      Outlook$OlDaysOfWeek__olTuesday &
      4; // 4
    static +olWednesday: Class<Outlook$OlDaysOfWeek__olWednesday> &
      Outlook$OlDaysOfWeek__olWednesday &
      8; // 8
  }

  declare class Outlook$OlDaysOfWeek__olFriday mixins Outlook$OlDaysOfWeek {}
  declare class Outlook$OlDaysOfWeek__olMonday mixins Outlook$OlDaysOfWeek {}
  declare class Outlook$OlDaysOfWeek__olSaturday mixins Outlook$OlDaysOfWeek {}
  declare class Outlook$OlDaysOfWeek__olSunday mixins Outlook$OlDaysOfWeek {}
  declare class Outlook$OlDaysOfWeek__olThursday mixins Outlook$OlDaysOfWeek {}
  declare class Outlook$OlDaysOfWeek__olTuesday mixins Outlook$OlDaysOfWeek {}
  declare class Outlook$OlDaysOfWeek__olWednesday mixins Outlook$OlDaysOfWeek {}

  declare class Outlook$OlDayWeekTimeScale {
    constructor(...args: empty): mixed;
    static +olTimeScale10Minutes: Class<Outlook$OlDayWeekTimeScale__olTimeScale10Minutes> &
      Outlook$OlDayWeekTimeScale__olTimeScale10Minutes &
      2; // 2
    static +olTimeScale15Minutes: Class<Outlook$OlDayWeekTimeScale__olTimeScale15Minutes> &
      Outlook$OlDayWeekTimeScale__olTimeScale15Minutes &
      3; // 3
    static +olTimeScale30Minutes: Class<Outlook$OlDayWeekTimeScale__olTimeScale30Minutes> &
      Outlook$OlDayWeekTimeScale__olTimeScale30Minutes &
      4; // 4
    static +olTimeScale5Minutes: Class<Outlook$OlDayWeekTimeScale__olTimeScale5Minutes> &
      Outlook$OlDayWeekTimeScale__olTimeScale5Minutes &
      0; // 0
    static +olTimeScale60Minutes: Class<Outlook$OlDayWeekTimeScale__olTimeScale60Minutes> &
      Outlook$OlDayWeekTimeScale__olTimeScale60Minutes &
      5; // 5
    static +olTimeScale6Minutes: Class<Outlook$OlDayWeekTimeScale__olTimeScale6Minutes> &
      Outlook$OlDayWeekTimeScale__olTimeScale6Minutes &
      1; // 1
  }

  declare class Outlook$OlDayWeekTimeScale__olTimeScale10Minutes
    mixins Outlook$OlDayWeekTimeScale {}
  declare class Outlook$OlDayWeekTimeScale__olTimeScale15Minutes
    mixins Outlook$OlDayWeekTimeScale {}
  declare class Outlook$OlDayWeekTimeScale__olTimeScale30Minutes
    mixins Outlook$OlDayWeekTimeScale {}
  declare class Outlook$OlDayWeekTimeScale__olTimeScale5Minutes
    mixins Outlook$OlDayWeekTimeScale {}
  declare class Outlook$OlDayWeekTimeScale__olTimeScale60Minutes
    mixins Outlook$OlDayWeekTimeScale {}
  declare class Outlook$OlDayWeekTimeScale__olTimeScale6Minutes
    mixins Outlook$OlDayWeekTimeScale {}

  declare class Outlook$OlDefaultExpandCollapseSetting {
    constructor(...args: empty): mixed;
    static +olAllCollapsed: Class<Outlook$OlDefaultExpandCollapseSetting__olAllCollapsed> &
      Outlook$OlDefaultExpandCollapseSetting__olAllCollapsed &
      1; // 1
    static +olAllExpanded: Class<Outlook$OlDefaultExpandCollapseSetting__olAllExpanded> &
      Outlook$OlDefaultExpandCollapseSetting__olAllExpanded &
      0; // 0
    static +olLastViewed: Class<Outlook$OlDefaultExpandCollapseSetting__olLastViewed> &
      Outlook$OlDefaultExpandCollapseSetting__olLastViewed &
      2; // 2
  }

  declare class Outlook$OlDefaultExpandCollapseSetting__olAllCollapsed
    mixins Outlook$OlDefaultExpandCollapseSetting {}
  declare class Outlook$OlDefaultExpandCollapseSetting__olAllExpanded
    mixins Outlook$OlDefaultExpandCollapseSetting {}
  declare class Outlook$OlDefaultExpandCollapseSetting__olLastViewed
    mixins Outlook$OlDefaultExpandCollapseSetting {}

  declare class Outlook$OlDefaultFolders {
    constructor(...args: empty): mixed;
    static +olFolderCalendar: Class<Outlook$OlDefaultFolders__olFolderCalendar> &
      Outlook$OlDefaultFolders__olFolderCalendar &
      9; // 9
    static +olFolderConflicts: Class<Outlook$OlDefaultFolders__olFolderConflicts> &
      Outlook$OlDefaultFolders__olFolderConflicts &
      19; // 19
    static +olFolderContacts: Class<Outlook$OlDefaultFolders__olFolderContacts> &
      Outlook$OlDefaultFolders__olFolderContacts &
      10; // 10
    static +olFolderDeletedItems: Class<Outlook$OlDefaultFolders__olFolderDeletedItems> &
      Outlook$OlDefaultFolders__olFolderDeletedItems &
      3; // 3
    static +olFolderDrafts: Class<Outlook$OlDefaultFolders__olFolderDrafts> &
      Outlook$OlDefaultFolders__olFolderDrafts &
      16; // 16
    static +olFolderInbox: Class<Outlook$OlDefaultFolders__olFolderInbox> &
      Outlook$OlDefaultFolders__olFolderInbox &
      6; // 6
    static +olFolderJournal: Class<Outlook$OlDefaultFolders__olFolderJournal> &
      Outlook$OlDefaultFolders__olFolderJournal &
      11; // 11
    static +olFolderJunk: Class<Outlook$OlDefaultFolders__olFolderJunk> &
      Outlook$OlDefaultFolders__olFolderJunk &
      23; // 23
    static +olFolderLocalFailures: Class<Outlook$OlDefaultFolders__olFolderLocalFailures> &
      Outlook$OlDefaultFolders__olFolderLocalFailures &
      21; // 21
    static +olFolderManagedEmail: Class<Outlook$OlDefaultFolders__olFolderManagedEmail> &
      Outlook$OlDefaultFolders__olFolderManagedEmail &
      29; // 29
    static +olFolderNotes: Class<Outlook$OlDefaultFolders__olFolderNotes> &
      Outlook$OlDefaultFolders__olFolderNotes &
      12; // 12
    static +olFolderOutbox: Class<Outlook$OlDefaultFolders__olFolderOutbox> &
      Outlook$OlDefaultFolders__olFolderOutbox &
      4; // 4
    static +olFolderRssFeeds: Class<Outlook$OlDefaultFolders__olFolderRssFeeds> &
      Outlook$OlDefaultFolders__olFolderRssFeeds &
      25; // 25
    static +olFolderSentMail: Class<Outlook$OlDefaultFolders__olFolderSentMail> &
      Outlook$OlDefaultFolders__olFolderSentMail &
      5; // 5
    static +olFolderServerFailures: Class<Outlook$OlDefaultFolders__olFolderServerFailures> &
      Outlook$OlDefaultFolders__olFolderServerFailures &
      22; // 22
    static +olFolderSuggestedContacts: Class<Outlook$OlDefaultFolders__olFolderSuggestedContacts> &
      Outlook$OlDefaultFolders__olFolderSuggestedContacts &
      30; // 30
    static +olFolderSyncIssues: Class<Outlook$OlDefaultFolders__olFolderSyncIssues> &
      Outlook$OlDefaultFolders__olFolderSyncIssues &
      20; // 20
    static +olFolderTasks: Class<Outlook$OlDefaultFolders__olFolderTasks> &
      Outlook$OlDefaultFolders__olFolderTasks &
      13; // 13
    static +olFolderToDo: Class<Outlook$OlDefaultFolders__olFolderToDo> &
      Outlook$OlDefaultFolders__olFolderToDo &
      28; // 28
    static +olPublicFoldersAllPublicFolders: Class<Outlook$OlDefaultFolders__olPublicFoldersAllPublicFolders> &
      Outlook$OlDefaultFolders__olPublicFoldersAllPublicFolders &
      18; // 18
  }

  declare class Outlook$OlDefaultFolders__olFolderCalendar
    mixins Outlook$OlDefaultFolders {}
  declare class Outlook$OlDefaultFolders__olFolderConflicts
    mixins Outlook$OlDefaultFolders {}
  declare class Outlook$OlDefaultFolders__olFolderContacts
    mixins Outlook$OlDefaultFolders {}
  declare class Outlook$OlDefaultFolders__olFolderDeletedItems
    mixins Outlook$OlDefaultFolders {}
  declare class Outlook$OlDefaultFolders__olFolderDrafts
    mixins Outlook$OlDefaultFolders {}
  declare class Outlook$OlDefaultFolders__olFolderInbox
    mixins Outlook$OlDefaultFolders {}
  declare class Outlook$OlDefaultFolders__olFolderJournal
    mixins Outlook$OlDefaultFolders {}
  declare class Outlook$OlDefaultFolders__olFolderJunk
    mixins Outlook$OlDefaultFolders {}
  declare class Outlook$OlDefaultFolders__olFolderLocalFailures
    mixins Outlook$OlDefaultFolders {}
  declare class Outlook$OlDefaultFolders__olFolderManagedEmail
    mixins Outlook$OlDefaultFolders {}
  declare class Outlook$OlDefaultFolders__olFolderNotes
    mixins Outlook$OlDefaultFolders {}
  declare class Outlook$OlDefaultFolders__olFolderOutbox
    mixins Outlook$OlDefaultFolders {}
  declare class Outlook$OlDefaultFolders__olFolderRssFeeds
    mixins Outlook$OlDefaultFolders {}
  declare class Outlook$OlDefaultFolders__olFolderSentMail
    mixins Outlook$OlDefaultFolders {}
  declare class Outlook$OlDefaultFolders__olFolderServerFailures
    mixins Outlook$OlDefaultFolders {}
  declare class Outlook$OlDefaultFolders__olFolderSuggestedContacts
    mixins Outlook$OlDefaultFolders {}
  declare class Outlook$OlDefaultFolders__olFolderSyncIssues
    mixins Outlook$OlDefaultFolders {}
  declare class Outlook$OlDefaultFolders__olFolderTasks
    mixins Outlook$OlDefaultFolders {}
  declare class Outlook$OlDefaultFolders__olFolderToDo
    mixins Outlook$OlDefaultFolders {}
  declare class Outlook$OlDefaultFolders__olPublicFoldersAllPublicFolders
    mixins Outlook$OlDefaultFolders {}

  declare class Outlook$OlDefaultSelectNamesDisplayMode {
    constructor(...args: empty): mixed;
    static +olDefaultDelegates: Class<Outlook$OlDefaultSelectNamesDisplayMode__olDefaultDelegates> &
      Outlook$OlDefaultSelectNamesDisplayMode__olDefaultDelegates &
      6; // 6
    static +olDefaultMail: Class<Outlook$OlDefaultSelectNamesDisplayMode__olDefaultMail> &
      Outlook$OlDefaultSelectNamesDisplayMode__olDefaultMail &
      1; // 1
    static +olDefaultMeeting: Class<Outlook$OlDefaultSelectNamesDisplayMode__olDefaultMeeting> &
      Outlook$OlDefaultSelectNamesDisplayMode__olDefaultMeeting &
      2; // 2
    static +olDefaultMembers: Class<Outlook$OlDefaultSelectNamesDisplayMode__olDefaultMembers> &
      Outlook$OlDefaultSelectNamesDisplayMode__olDefaultMembers &
      5; // 5
    static +olDefaultPickRooms: Class<Outlook$OlDefaultSelectNamesDisplayMode__olDefaultPickRooms> &
      Outlook$OlDefaultSelectNamesDisplayMode__olDefaultPickRooms &
      8; // 8
    static +olDefaultSharingRequest: Class<Outlook$OlDefaultSelectNamesDisplayMode__olDefaultSharingRequest> &
      Outlook$OlDefaultSelectNamesDisplayMode__olDefaultSharingRequest &
      4; // 4
    static +olDefaultSingleName: Class<Outlook$OlDefaultSelectNamesDisplayMode__olDefaultSingleName> &
      Outlook$OlDefaultSelectNamesDisplayMode__olDefaultSingleName &
      7; // 7
    static +olDefaultTask: Class<Outlook$OlDefaultSelectNamesDisplayMode__olDefaultTask> &
      Outlook$OlDefaultSelectNamesDisplayMode__olDefaultTask &
      3; // 3
  }

  declare class Outlook$OlDefaultSelectNamesDisplayMode__olDefaultDelegates
    mixins Outlook$OlDefaultSelectNamesDisplayMode {}
  declare class Outlook$OlDefaultSelectNamesDisplayMode__olDefaultMail
    mixins Outlook$OlDefaultSelectNamesDisplayMode {}
  declare class Outlook$OlDefaultSelectNamesDisplayMode__olDefaultMeeting
    mixins Outlook$OlDefaultSelectNamesDisplayMode {}
  declare class Outlook$OlDefaultSelectNamesDisplayMode__olDefaultMembers
    mixins Outlook$OlDefaultSelectNamesDisplayMode {}
  declare class Outlook$OlDefaultSelectNamesDisplayMode__olDefaultPickRooms
    mixins Outlook$OlDefaultSelectNamesDisplayMode {}
  declare class Outlook$OlDefaultSelectNamesDisplayMode__olDefaultSharingRequest
    mixins Outlook$OlDefaultSelectNamesDisplayMode {}
  declare class Outlook$OlDefaultSelectNamesDisplayMode__olDefaultSingleName
    mixins Outlook$OlDefaultSelectNamesDisplayMode {}
  declare class Outlook$OlDefaultSelectNamesDisplayMode__olDefaultTask
    mixins Outlook$OlDefaultSelectNamesDisplayMode {}

  declare class Outlook$OlDisplayType {
    constructor(...args: empty): mixed;
    static +olAgent: Class<Outlook$OlDisplayType__olAgent> &
      Outlook$OlDisplayType__olAgent &
      3; // 3
    static +olDistList: Class<Outlook$OlDisplayType__olDistList> &
      Outlook$OlDisplayType__olDistList &
      1; // 1
    static +olForum: Class<Outlook$OlDisplayType__olForum> &
      Outlook$OlDisplayType__olForum &
      2; // 2
    static +olOrganization: Class<Outlook$OlDisplayType__olOrganization> &
      Outlook$OlDisplayType__olOrganization &
      4; // 4
    static +olPrivateDistList: Class<Outlook$OlDisplayType__olPrivateDistList> &
      Outlook$OlDisplayType__olPrivateDistList &
      5; // 5
    static +olRemoteUser: Class<Outlook$OlDisplayType__olRemoteUser> &
      Outlook$OlDisplayType__olRemoteUser &
      6; // 6
    static +olUser: Class<Outlook$OlDisplayType__olUser> &
      Outlook$OlDisplayType__olUser &
      0; // 0
  }

  declare class Outlook$OlDisplayType__olAgent mixins Outlook$OlDisplayType {}
  declare class Outlook$OlDisplayType__olDistList
    mixins Outlook$OlDisplayType {}
  declare class Outlook$OlDisplayType__olForum mixins Outlook$OlDisplayType {}
  declare class Outlook$OlDisplayType__olOrganization
    mixins Outlook$OlDisplayType {}
  declare class Outlook$OlDisplayType__olPrivateDistList
    mixins Outlook$OlDisplayType {}
  declare class Outlook$OlDisplayType__olRemoteUser
    mixins Outlook$OlDisplayType {}
  declare class Outlook$OlDisplayType__olUser mixins Outlook$OlDisplayType {}

  declare class Outlook$OlDownloadState {
    constructor(...args: empty): mixed;
    static +olFullItem: Class<Outlook$OlDownloadState__olFullItem> &
      Outlook$OlDownloadState__olFullItem &
      1; // 1
    static +olHeaderOnly: Class<Outlook$OlDownloadState__olHeaderOnly> &
      Outlook$OlDownloadState__olHeaderOnly &
      0; // 0
  }

  declare class Outlook$OlDownloadState__olFullItem
    mixins Outlook$OlDownloadState {}
  declare class Outlook$OlDownloadState__olHeaderOnly
    mixins Outlook$OlDownloadState {}

  declare class Outlook$OlDragBehavior {
    constructor(...args: empty): mixed;
    static +olDragBehaviorDisabled: Class<Outlook$OlDragBehavior__olDragBehaviorDisabled> &
      Outlook$OlDragBehavior__olDragBehaviorDisabled &
      0; // 0
    static +olDragBehaviorEnabled: Class<Outlook$OlDragBehavior__olDragBehaviorEnabled> &
      Outlook$OlDragBehavior__olDragBehaviorEnabled &
      1; // 1
  }

  declare class Outlook$OlDragBehavior__olDragBehaviorDisabled
    mixins Outlook$OlDragBehavior {}
  declare class Outlook$OlDragBehavior__olDragBehaviorEnabled
    mixins Outlook$OlDragBehavior {}

  declare class Outlook$OlEditorType {
    constructor(...args: empty): mixed;
    static +olEditorHTML: Class<Outlook$OlEditorType__olEditorHTML> &
      Outlook$OlEditorType__olEditorHTML &
      2; // 2
    static +olEditorRTF: Class<Outlook$OlEditorType__olEditorRTF> &
      Outlook$OlEditorType__olEditorRTF &
      3; // 3
    static +olEditorText: Class<Outlook$OlEditorType__olEditorText> &
      Outlook$OlEditorType__olEditorText &
      1; // 1
    static +olEditorWord: Class<Outlook$OlEditorType__olEditorWord> &
      Outlook$OlEditorType__olEditorWord &
      4; // 4
  }

  declare class Outlook$OlEditorType__olEditorHTML
    mixins Outlook$OlEditorType {}
  declare class Outlook$OlEditorType__olEditorRTF mixins Outlook$OlEditorType {}
  declare class Outlook$OlEditorType__olEditorText
    mixins Outlook$OlEditorType {}
  declare class Outlook$OlEditorType__olEditorWord
    mixins Outlook$OlEditorType {}

  declare class Outlook$OlEnterFieldBehavior {
    constructor(...args: empty): mixed;
    static +olEnterFieldBehaviorRecallSelection: Class<Outlook$OlEnterFieldBehavior__olEnterFieldBehaviorRecallSelection> &
      Outlook$OlEnterFieldBehavior__olEnterFieldBehaviorRecallSelection &
      1; // 1
    static +olEnterFieldBehaviorSelectAll: Class<Outlook$OlEnterFieldBehavior__olEnterFieldBehaviorSelectAll> &
      Outlook$OlEnterFieldBehavior__olEnterFieldBehaviorSelectAll &
      0; // 0
  }

  declare class Outlook$OlEnterFieldBehavior__olEnterFieldBehaviorRecallSelection
    mixins Outlook$OlEnterFieldBehavior {}
  declare class Outlook$OlEnterFieldBehavior__olEnterFieldBehaviorSelectAll
    mixins Outlook$OlEnterFieldBehavior {}

  declare class Outlook$OlExchangeConnectionMode {
    constructor(...args: empty): mixed;
    static +olCachedConnectedDrizzle: Class<Outlook$OlExchangeConnectionMode__olCachedConnectedDrizzle> &
      Outlook$OlExchangeConnectionMode__olCachedConnectedDrizzle &
      600; // 600
    static +olCachedConnectedFull: Class<Outlook$OlExchangeConnectionMode__olCachedConnectedFull> &
      Outlook$OlExchangeConnectionMode__olCachedConnectedFull &
      700; // 700
    static +olCachedConnectedHeaders: Class<Outlook$OlExchangeConnectionMode__olCachedConnectedHeaders> &
      Outlook$OlExchangeConnectionMode__olCachedConnectedHeaders &
      500; // 500
    static +olCachedDisconnected: Class<Outlook$OlExchangeConnectionMode__olCachedDisconnected> &
      Outlook$OlExchangeConnectionMode__olCachedDisconnected &
      400; // 400
    static +olCachedOffline: Class<Outlook$OlExchangeConnectionMode__olCachedOffline> &
      Outlook$OlExchangeConnectionMode__olCachedOffline &
      200; // 200
    static +olDisconnected: Class<Outlook$OlExchangeConnectionMode__olDisconnected> &
      Outlook$OlExchangeConnectionMode__olDisconnected &
      300; // 300
    static +olNoExchange: Class<Outlook$OlExchangeConnectionMode__olNoExchange> &
      Outlook$OlExchangeConnectionMode__olNoExchange &
      0; // 0
    static +olOffline: Class<Outlook$OlExchangeConnectionMode__olOffline> &
      Outlook$OlExchangeConnectionMode__olOffline &
      100; // 100
    static +olOnline: Class<Outlook$OlExchangeConnectionMode__olOnline> &
      Outlook$OlExchangeConnectionMode__olOnline &
      800; // 800
  }

  declare class Outlook$OlExchangeConnectionMode__olCachedConnectedDrizzle
    mixins Outlook$OlExchangeConnectionMode {}
  declare class Outlook$OlExchangeConnectionMode__olCachedConnectedFull
    mixins Outlook$OlExchangeConnectionMode {}
  declare class Outlook$OlExchangeConnectionMode__olCachedConnectedHeaders
    mixins Outlook$OlExchangeConnectionMode {}
  declare class Outlook$OlExchangeConnectionMode__olCachedDisconnected
    mixins Outlook$OlExchangeConnectionMode {}
  declare class Outlook$OlExchangeConnectionMode__olCachedOffline
    mixins Outlook$OlExchangeConnectionMode {}
  declare class Outlook$OlExchangeConnectionMode__olDisconnected
    mixins Outlook$OlExchangeConnectionMode {}
  declare class Outlook$OlExchangeConnectionMode__olNoExchange
    mixins Outlook$OlExchangeConnectionMode {}
  declare class Outlook$OlExchangeConnectionMode__olOffline
    mixins Outlook$OlExchangeConnectionMode {}
  declare class Outlook$OlExchangeConnectionMode__olOnline
    mixins Outlook$OlExchangeConnectionMode {}

  declare class Outlook$OlExchangeStoreType {
    constructor(...args: empty): mixed;
    static +olAdditionalExchangeMailbox: Class<Outlook$OlExchangeStoreType__olAdditionalExchangeMailbox> &
      Outlook$OlExchangeStoreType__olAdditionalExchangeMailbox &
      4; // 4
    static +olExchangeMailbox: Class<Outlook$OlExchangeStoreType__olExchangeMailbox> &
      Outlook$OlExchangeStoreType__olExchangeMailbox &
      1; // 1
    static +olExchangePublicFolder: Class<Outlook$OlExchangeStoreType__olExchangePublicFolder> &
      Outlook$OlExchangeStoreType__olExchangePublicFolder &
      2; // 2
    static +olNotExchange: Class<Outlook$OlExchangeStoreType__olNotExchange> &
      Outlook$OlExchangeStoreType__olNotExchange &
      3; // 3
    static +olPrimaryExchangeMailbox: Class<Outlook$OlExchangeStoreType__olPrimaryExchangeMailbox> &
      Outlook$OlExchangeStoreType__olPrimaryExchangeMailbox &
      0; // 0
  }

  declare class Outlook$OlExchangeStoreType__olAdditionalExchangeMailbox
    mixins Outlook$OlExchangeStoreType {}
  declare class Outlook$OlExchangeStoreType__olExchangeMailbox
    mixins Outlook$OlExchangeStoreType {}
  declare class Outlook$OlExchangeStoreType__olExchangePublicFolder
    mixins Outlook$OlExchangeStoreType {}
  declare class Outlook$OlExchangeStoreType__olNotExchange
    mixins Outlook$OlExchangeStoreType {}
  declare class Outlook$OlExchangeStoreType__olPrimaryExchangeMailbox
    mixins Outlook$OlExchangeStoreType {}

  declare class Outlook$OlFlagIcon {
    constructor(...args: empty): mixed;
    static +olBlueFlagIcon: Class<Outlook$OlFlagIcon__olBlueFlagIcon> &
      Outlook$OlFlagIcon__olBlueFlagIcon &
      5; // 5
    static +olGreenFlagIcon: Class<Outlook$OlFlagIcon__olGreenFlagIcon> &
      Outlook$OlFlagIcon__olGreenFlagIcon &
      3; // 3
    static +olNoFlagIcon: Class<Outlook$OlFlagIcon__olNoFlagIcon> &
      Outlook$OlFlagIcon__olNoFlagIcon &
      0; // 0
    static +olOrangeFlagIcon: Class<Outlook$OlFlagIcon__olOrangeFlagIcon> &
      Outlook$OlFlagIcon__olOrangeFlagIcon &
      2; // 2
    static +olPurpleFlagIcon: Class<Outlook$OlFlagIcon__olPurpleFlagIcon> &
      Outlook$OlFlagIcon__olPurpleFlagIcon &
      1; // 1
    static +olRedFlagIcon: Class<Outlook$OlFlagIcon__olRedFlagIcon> &
      Outlook$OlFlagIcon__olRedFlagIcon &
      6; // 6
    static +olYellowFlagIcon: Class<Outlook$OlFlagIcon__olYellowFlagIcon> &
      Outlook$OlFlagIcon__olYellowFlagIcon &
      4; // 4
  }

  declare class Outlook$OlFlagIcon__olBlueFlagIcon mixins Outlook$OlFlagIcon {}
  declare class Outlook$OlFlagIcon__olGreenFlagIcon mixins Outlook$OlFlagIcon {}
  declare class Outlook$OlFlagIcon__olNoFlagIcon mixins Outlook$OlFlagIcon {}
  declare class Outlook$OlFlagIcon__olOrangeFlagIcon
    mixins Outlook$OlFlagIcon {}
  declare class Outlook$OlFlagIcon__olPurpleFlagIcon
    mixins Outlook$OlFlagIcon {}
  declare class Outlook$OlFlagIcon__olRedFlagIcon mixins Outlook$OlFlagIcon {}
  declare class Outlook$OlFlagIcon__olYellowFlagIcon
    mixins Outlook$OlFlagIcon {}

  declare class Outlook$OlFlagStatus {
    constructor(...args: empty): mixed;
    static +olFlagComplete: Class<Outlook$OlFlagStatus__olFlagComplete> &
      Outlook$OlFlagStatus__olFlagComplete &
      1; // 1
    static +olFlagMarked: Class<Outlook$OlFlagStatus__olFlagMarked> &
      Outlook$OlFlagStatus__olFlagMarked &
      2; // 2
    static +olNoFlag: Class<Outlook$OlFlagStatus__olNoFlag> &
      Outlook$OlFlagStatus__olNoFlag &
      0; // 0
  }

  declare class Outlook$OlFlagStatus__olFlagComplete
    mixins Outlook$OlFlagStatus {}
  declare class Outlook$OlFlagStatus__olFlagMarked
    mixins Outlook$OlFlagStatus {}
  declare class Outlook$OlFlagStatus__olNoFlag mixins Outlook$OlFlagStatus {}

  declare class Outlook$OlFolderDisplayMode {
    constructor(...args: empty): mixed;
    static +olFolderDisplayFolderOnly: Class<Outlook$OlFolderDisplayMode__olFolderDisplayFolderOnly> &
      Outlook$OlFolderDisplayMode__olFolderDisplayFolderOnly &
      1; // 1
    static +olFolderDisplayNoNavigation: Class<Outlook$OlFolderDisplayMode__olFolderDisplayNoNavigation> &
      Outlook$OlFolderDisplayMode__olFolderDisplayNoNavigation &
      2; // 2
    static +olFolderDisplayNormal: Class<Outlook$OlFolderDisplayMode__olFolderDisplayNormal> &
      Outlook$OlFolderDisplayMode__olFolderDisplayNormal &
      0; // 0
  }

  declare class Outlook$OlFolderDisplayMode__olFolderDisplayFolderOnly
    mixins Outlook$OlFolderDisplayMode {}
  declare class Outlook$OlFolderDisplayMode__olFolderDisplayNoNavigation
    mixins Outlook$OlFolderDisplayMode {}
  declare class Outlook$OlFolderDisplayMode__olFolderDisplayNormal
    mixins Outlook$OlFolderDisplayMode {}

  declare class Outlook$OlFormatCurrency {
    constructor(...args: empty): mixed;
    static +olFormatCurrencyDecimal: Class<Outlook$OlFormatCurrency__olFormatCurrencyDecimal> &
      Outlook$OlFormatCurrency__olFormatCurrencyDecimal &
      1; // 1
    static +olFormatCurrencyNonDecimal: Class<Outlook$OlFormatCurrency__olFormatCurrencyNonDecimal> &
      Outlook$OlFormatCurrency__olFormatCurrencyNonDecimal &
      2; // 2
  }

  declare class Outlook$OlFormatCurrency__olFormatCurrencyDecimal
    mixins Outlook$OlFormatCurrency {}
  declare class Outlook$OlFormatCurrency__olFormatCurrencyNonDecimal
    mixins Outlook$OlFormatCurrency {}

  declare class Outlook$OlFormatDateTime {
    constructor(...args: empty): mixed;
    static +olFormatDateTimeBestFit: Class<Outlook$OlFormatDateTime__olFormatDateTimeBestFit> &
      Outlook$OlFormatDateTime__olFormatDateTimeBestFit &
      17; // 17
    static +olFormatDateTimeLongDate: Class<Outlook$OlFormatDateTime__olFormatDateTimeLongDate> &
      Outlook$OlFormatDateTime__olFormatDateTimeLongDate &
      6; // 6
    static +olFormatDateTimeLongDateReversed: Class<Outlook$OlFormatDateTime__olFormatDateTimeLongDateReversed> &
      Outlook$OlFormatDateTime__olFormatDateTimeLongDateReversed &
      7; // 7
    static +OlFormatDateTimeLongDayDate: Class<Outlook$OlFormatDateTime__OlFormatDateTimeLongDayDate> &
      Outlook$OlFormatDateTime__OlFormatDateTimeLongDayDate &
      5; // 5
    static +olFormatDateTimeLongDayDateTime: Class<Outlook$OlFormatDateTime__olFormatDateTimeLongDayDateTime> &
      Outlook$OlFormatDateTime__olFormatDateTimeLongDayDateTime &
      1; // 1
    static +olFormatDateTimeLongTime: Class<Outlook$OlFormatDateTime__olFormatDateTimeLongTime> &
      Outlook$OlFormatDateTime__olFormatDateTimeLongTime &
      15; // 15
    static +olFormatDateTimeShortDate: Class<Outlook$OlFormatDateTime__olFormatDateTimeShortDate> &
      Outlook$OlFormatDateTime__olFormatDateTimeShortDate &
      8; // 8
    static +olFormatDateTimeShortDateNumOnly: Class<Outlook$OlFormatDateTime__olFormatDateTimeShortDateNumOnly> &
      Outlook$OlFormatDateTime__olFormatDateTimeShortDateNumOnly &
      9; // 9
    static +olFormatDateTimeShortDateTime: Class<Outlook$OlFormatDateTime__olFormatDateTimeShortDateTime> &
      Outlook$OlFormatDateTime__olFormatDateTimeShortDateTime &
      2; // 2
    static +olFormatDateTimeShortDayDate: Class<Outlook$OlFormatDateTime__olFormatDateTimeShortDayDate> &
      Outlook$OlFormatDateTime__olFormatDateTimeShortDayDate &
      13; // 13
    static +olFormatDateTimeShortDayDateTime: Class<Outlook$OlFormatDateTime__olFormatDateTimeShortDayDateTime> &
      Outlook$OlFormatDateTime__olFormatDateTimeShortDayDateTime &
      3; // 3
    static +olFormatDateTimeShortDayMonth: Class<Outlook$OlFormatDateTime__olFormatDateTimeShortDayMonth> &
      Outlook$OlFormatDateTime__olFormatDateTimeShortDayMonth &
      10; // 10
    static +olFormatDateTimeShortDayMonthDateTime: Class<Outlook$OlFormatDateTime__olFormatDateTimeShortDayMonthDateTime> &
      Outlook$OlFormatDateTime__olFormatDateTimeShortDayMonthDateTime &
      4; // 4
    static +olFormatDateTimeShortMonthYear: Class<Outlook$OlFormatDateTime__olFormatDateTimeShortMonthYear> &
      Outlook$OlFormatDateTime__olFormatDateTimeShortMonthYear &
      11; // 11
    static +olFormatDateTimeShortMonthYearNumOnly: Class<Outlook$OlFormatDateTime__olFormatDateTimeShortMonthYearNumOnly> &
      Outlook$OlFormatDateTime__olFormatDateTimeShortMonthYearNumOnly &
      12; // 12
    static +olFormatDateTimeShortTime: Class<Outlook$OlFormatDateTime__olFormatDateTimeShortTime> &
      Outlook$OlFormatDateTime__olFormatDateTimeShortTime &
      16; // 16
  }

  declare class Outlook$OlFormatDateTime__olFormatDateTimeBestFit
    mixins Outlook$OlFormatDateTime {}
  declare class Outlook$OlFormatDateTime__olFormatDateTimeLongDate
    mixins Outlook$OlFormatDateTime {}
  declare class Outlook$OlFormatDateTime__olFormatDateTimeLongDateReversed
    mixins Outlook$OlFormatDateTime {}
  declare class Outlook$OlFormatDateTime__OlFormatDateTimeLongDayDate
    mixins Outlook$OlFormatDateTime {}
  declare class Outlook$OlFormatDateTime__olFormatDateTimeLongDayDateTime
    mixins Outlook$OlFormatDateTime {}
  declare class Outlook$OlFormatDateTime__olFormatDateTimeLongTime
    mixins Outlook$OlFormatDateTime {}
  declare class Outlook$OlFormatDateTime__olFormatDateTimeShortDate
    mixins Outlook$OlFormatDateTime {}
  declare class Outlook$OlFormatDateTime__olFormatDateTimeShortDateNumOnly
    mixins Outlook$OlFormatDateTime {}
  declare class Outlook$OlFormatDateTime__olFormatDateTimeShortDateTime
    mixins Outlook$OlFormatDateTime {}
  declare class Outlook$OlFormatDateTime__olFormatDateTimeShortDayDate
    mixins Outlook$OlFormatDateTime {}
  declare class Outlook$OlFormatDateTime__olFormatDateTimeShortDayDateTime
    mixins Outlook$OlFormatDateTime {}
  declare class Outlook$OlFormatDateTime__olFormatDateTimeShortDayMonth
    mixins Outlook$OlFormatDateTime {}
  declare class Outlook$OlFormatDateTime__olFormatDateTimeShortDayMonthDateTime
    mixins Outlook$OlFormatDateTime {}
  declare class Outlook$OlFormatDateTime__olFormatDateTimeShortMonthYear
    mixins Outlook$OlFormatDateTime {}
  declare class Outlook$OlFormatDateTime__olFormatDateTimeShortMonthYearNumOnly
    mixins Outlook$OlFormatDateTime {}
  declare class Outlook$OlFormatDateTime__olFormatDateTimeShortTime
    mixins Outlook$OlFormatDateTime {}

  declare class Outlook$OlFormatDuration {
    constructor(...args: empty): mixed;
    static +olFormatDurationLong: Class<Outlook$OlFormatDuration__olFormatDurationLong> &
      Outlook$OlFormatDuration__olFormatDurationLong &
      2; // 2
    static +olFormatDurationLongBusiness: Class<Outlook$OlFormatDuration__olFormatDurationLongBusiness> &
      Outlook$OlFormatDuration__olFormatDurationLongBusiness &
      4; // 4
    static +olFormatDurationShort: Class<Outlook$OlFormatDuration__olFormatDurationShort> &
      Outlook$OlFormatDuration__olFormatDurationShort &
      1; // 1
    static +olFormatDurationShortBusiness: Class<Outlook$OlFormatDuration__olFormatDurationShortBusiness> &
      Outlook$OlFormatDuration__olFormatDurationShortBusiness &
      3; // 3
  }

  declare class Outlook$OlFormatDuration__olFormatDurationLong
    mixins Outlook$OlFormatDuration {}
  declare class Outlook$OlFormatDuration__olFormatDurationLongBusiness
    mixins Outlook$OlFormatDuration {}
  declare class Outlook$OlFormatDuration__olFormatDurationShort
    mixins Outlook$OlFormatDuration {}
  declare class Outlook$OlFormatDuration__olFormatDurationShortBusiness
    mixins Outlook$OlFormatDuration {}

  declare class Outlook$OlFormatEnumeration {
    constructor(...args: empty): mixed;
    static +olFormatEnumBitmap: Class<Outlook$OlFormatEnumeration__olFormatEnumBitmap> &
      Outlook$OlFormatEnumeration__olFormatEnumBitmap &
      1; // 1
    static +olFormatEnumText: Class<Outlook$OlFormatEnumeration__olFormatEnumText> &
      Outlook$OlFormatEnumeration__olFormatEnumText &
      2; // 2
  }

  declare class Outlook$OlFormatEnumeration__olFormatEnumBitmap
    mixins Outlook$OlFormatEnumeration {}
  declare class Outlook$OlFormatEnumeration__olFormatEnumText
    mixins Outlook$OlFormatEnumeration {}

  declare class Outlook$OlFormatInteger {
    constructor(...args: empty): mixed;
    static +olFormatIntegerComputer1: Class<Outlook$OlFormatInteger__olFormatIntegerComputer1> &
      Outlook$OlFormatInteger__olFormatIntegerComputer1 &
      2; // 2
    static +olFormatIntegerComputer2: Class<Outlook$OlFormatInteger__olFormatIntegerComputer2> &
      Outlook$OlFormatInteger__olFormatIntegerComputer2 &
      3; // 3
    static +olFormatIntegerComputer3: Class<Outlook$OlFormatInteger__olFormatIntegerComputer3> &
      Outlook$OlFormatInteger__olFormatIntegerComputer3 &
      4; // 4
    static +olFormatIntegerPlain: Class<Outlook$OlFormatInteger__olFormatIntegerPlain> &
      Outlook$OlFormatInteger__olFormatIntegerPlain &
      1; // 1
  }

  declare class Outlook$OlFormatInteger__olFormatIntegerComputer1
    mixins Outlook$OlFormatInteger {}
  declare class Outlook$OlFormatInteger__olFormatIntegerComputer2
    mixins Outlook$OlFormatInteger {}
  declare class Outlook$OlFormatInteger__olFormatIntegerComputer3
    mixins Outlook$OlFormatInteger {}
  declare class Outlook$OlFormatInteger__olFormatIntegerPlain
    mixins Outlook$OlFormatInteger {}

  declare class Outlook$OlFormatKeywords {
    constructor(...args: empty): mixed;
    static +olFormatKeywordsText: Class<Outlook$OlFormatKeywords__olFormatKeywordsText> &
      Outlook$OlFormatKeywords__olFormatKeywordsText &
      1; // 1
  }

  declare class Outlook$OlFormatKeywords__olFormatKeywordsText
    mixins Outlook$OlFormatKeywords {}

  declare class Outlook$OlFormatNumber {
    constructor(...args: empty): mixed;
    static +olFormatNumber1Decimal: Class<Outlook$OlFormatNumber__olFormatNumber1Decimal> &
      Outlook$OlFormatNumber__olFormatNumber1Decimal &
      3; // 3
    static +olFormatNumber2Decimal: Class<Outlook$OlFormatNumber__olFormatNumber2Decimal> &
      Outlook$OlFormatNumber__olFormatNumber2Decimal &
      4; // 4
    static +olFormatNumberAllDigits: Class<Outlook$OlFormatNumber__olFormatNumberAllDigits> &
      Outlook$OlFormatNumber__olFormatNumberAllDigits &
      1; // 1
    static +olFormatNumberComputer1: Class<Outlook$OlFormatNumber__olFormatNumberComputer1> &
      Outlook$OlFormatNumber__olFormatNumberComputer1 &
      6; // 6
    static +olFormatNumberComputer2: Class<Outlook$OlFormatNumber__olFormatNumberComputer2> &
      Outlook$OlFormatNumber__olFormatNumberComputer2 &
      7; // 7
    static +olFormatNumberComputer3: Class<Outlook$OlFormatNumber__olFormatNumberComputer3> &
      Outlook$OlFormatNumber__olFormatNumberComputer3 &
      8; // 8
    static +olFormatNumberRaw: Class<Outlook$OlFormatNumber__olFormatNumberRaw> &
      Outlook$OlFormatNumber__olFormatNumberRaw &
      9; // 9
    static +olFormatNumberScientific: Class<Outlook$OlFormatNumber__olFormatNumberScientific> &
      Outlook$OlFormatNumber__olFormatNumberScientific &
      5; // 5
    static +olFormatNumberTruncated: Class<Outlook$OlFormatNumber__olFormatNumberTruncated> &
      Outlook$OlFormatNumber__olFormatNumberTruncated &
      2; // 2
  }

  declare class Outlook$OlFormatNumber__olFormatNumber1Decimal
    mixins Outlook$OlFormatNumber {}
  declare class Outlook$OlFormatNumber__olFormatNumber2Decimal
    mixins Outlook$OlFormatNumber {}
  declare class Outlook$OlFormatNumber__olFormatNumberAllDigits
    mixins Outlook$OlFormatNumber {}
  declare class Outlook$OlFormatNumber__olFormatNumberComputer1
    mixins Outlook$OlFormatNumber {}
  declare class Outlook$OlFormatNumber__olFormatNumberComputer2
    mixins Outlook$OlFormatNumber {}
  declare class Outlook$OlFormatNumber__olFormatNumberComputer3
    mixins Outlook$OlFormatNumber {}
  declare class Outlook$OlFormatNumber__olFormatNumberRaw
    mixins Outlook$OlFormatNumber {}
  declare class Outlook$OlFormatNumber__olFormatNumberScientific
    mixins Outlook$OlFormatNumber {}
  declare class Outlook$OlFormatNumber__olFormatNumberTruncated
    mixins Outlook$OlFormatNumber {}

  declare class Outlook$OlFormatPercent {
    constructor(...args: empty): mixed;
    static +olFormatPercent1Decimal: Class<Outlook$OlFormatPercent__olFormatPercent1Decimal> &
      Outlook$OlFormatPercent__olFormatPercent1Decimal &
      2; // 2
    static +olFormatPercent2Decimal: Class<Outlook$OlFormatPercent__olFormatPercent2Decimal> &
      Outlook$OlFormatPercent__olFormatPercent2Decimal &
      3; // 3
    static +olFormatPercentAllDigits: Class<Outlook$OlFormatPercent__olFormatPercentAllDigits> &
      Outlook$OlFormatPercent__olFormatPercentAllDigits &
      4; // 4
    static +olFormatPercentRounded: Class<Outlook$OlFormatPercent__olFormatPercentRounded> &
      Outlook$OlFormatPercent__olFormatPercentRounded &
      1; // 1
  }

  declare class Outlook$OlFormatPercent__olFormatPercent1Decimal
    mixins Outlook$OlFormatPercent {}
  declare class Outlook$OlFormatPercent__olFormatPercent2Decimal
    mixins Outlook$OlFormatPercent {}
  declare class Outlook$OlFormatPercent__olFormatPercentAllDigits
    mixins Outlook$OlFormatPercent {}
  declare class Outlook$OlFormatPercent__olFormatPercentRounded
    mixins Outlook$OlFormatPercent {}

  declare class Outlook$OlFormatSmartFrom {
    constructor(...args: empty): mixed;
    static +olFormatSmartFromFromOnly: Class<Outlook$OlFormatSmartFrom__olFormatSmartFromFromOnly> &
      Outlook$OlFormatSmartFrom__olFormatSmartFromFromOnly &
      2; // 2
    static +olFormatSmartFromFromTo: Class<Outlook$OlFormatSmartFrom__olFormatSmartFromFromTo> &
      Outlook$OlFormatSmartFrom__olFormatSmartFromFromTo &
      1; // 1
  }

  declare class Outlook$OlFormatSmartFrom__olFormatSmartFromFromOnly
    mixins Outlook$OlFormatSmartFrom {}
  declare class Outlook$OlFormatSmartFrom__olFormatSmartFromFromTo
    mixins Outlook$OlFormatSmartFrom {}

  declare class Outlook$OlFormatText {
    constructor(...args: empty): mixed;
    static +olFormatTextText: Class<Outlook$OlFormatText__olFormatTextText> &
      Outlook$OlFormatText__olFormatTextText &
      1; // 1
  }

  declare class Outlook$OlFormatText__olFormatTextText
    mixins Outlook$OlFormatText {}

  declare class Outlook$OlFormatYesNo {
    constructor(...args: empty): mixed;
    static +olFormatYesNoIcon: Class<Outlook$OlFormatYesNo__olFormatYesNoIcon> &
      Outlook$OlFormatYesNo__olFormatYesNoIcon &
      4; // 4
    static +olFormatYesNoOnOff: Class<Outlook$OlFormatYesNo__olFormatYesNoOnOff> &
      Outlook$OlFormatYesNo__olFormatYesNoOnOff &
      2; // 2
    static +olFormatYesNoTrueFalse: Class<Outlook$OlFormatYesNo__olFormatYesNoTrueFalse> &
      Outlook$OlFormatYesNo__olFormatYesNoTrueFalse &
      3; // 3
    static +olFormatYesNoYesNo: Class<Outlook$OlFormatYesNo__olFormatYesNoYesNo> &
      Outlook$OlFormatYesNo__olFormatYesNoYesNo &
      1; // 1
  }

  declare class Outlook$OlFormatYesNo__olFormatYesNoIcon
    mixins Outlook$OlFormatYesNo {}
  declare class Outlook$OlFormatYesNo__olFormatYesNoOnOff
    mixins Outlook$OlFormatYesNo {}
  declare class Outlook$OlFormatYesNo__olFormatYesNoTrueFalse
    mixins Outlook$OlFormatYesNo {}
  declare class Outlook$OlFormatYesNo__olFormatYesNoYesNo
    mixins Outlook$OlFormatYesNo {}

  declare class Outlook$OlFormRegionIcon {
    constructor(...args: empty): mixed;
    static +olFormRegionIconDefault: Class<Outlook$OlFormRegionIcon__olFormRegionIconDefault> &
      Outlook$OlFormRegionIcon__olFormRegionIconDefault &
      1; // 1
    static +olFormRegionIconEncrypted: Class<Outlook$OlFormRegionIcon__olFormRegionIconEncrypted> &
      Outlook$OlFormRegionIcon__olFormRegionIconEncrypted &
      9; // 9
    static +olFormRegionIconForwarded: Class<Outlook$OlFormRegionIcon__olFormRegionIconForwarded> &
      Outlook$OlFormRegionIcon__olFormRegionIconForwarded &
      5; // 5
    static +olFormRegionIconPage: Class<Outlook$OlFormRegionIcon__olFormRegionIconPage> &
      Outlook$OlFormRegionIcon__olFormRegionIconPage &
      11; // 11
    static +olFormRegionIconRead: Class<Outlook$OlFormRegionIcon__olFormRegionIconRead> &
      Outlook$OlFormRegionIcon__olFormRegionIconRead &
      3; // 3
    static +olFormRegionIconRecurring: Class<Outlook$OlFormRegionIcon__olFormRegionIconRecurring> &
      Outlook$OlFormRegionIcon__olFormRegionIconRecurring &
      12; // 12
    static +olFormRegionIconReplied: Class<Outlook$OlFormRegionIcon__olFormRegionIconReplied> &
      Outlook$OlFormRegionIcon__olFormRegionIconReplied &
      4; // 4
    static +olFormRegionIconSigned: Class<Outlook$OlFormRegionIcon__olFormRegionIconSigned> &
      Outlook$OlFormRegionIcon__olFormRegionIconSigned &
      8; // 8
    static +olFormRegionIconSubmitted: Class<Outlook$OlFormRegionIcon__olFormRegionIconSubmitted> &
      Outlook$OlFormRegionIcon__olFormRegionIconSubmitted &
      7; // 7
    static +olFormRegionIconUnread: Class<Outlook$OlFormRegionIcon__olFormRegionIconUnread> &
      Outlook$OlFormRegionIcon__olFormRegionIconUnread &
      2; // 2
    static +olFormRegionIconUnsent: Class<Outlook$OlFormRegionIcon__olFormRegionIconUnsent> &
      Outlook$OlFormRegionIcon__olFormRegionIconUnsent &
      6; // 6
    static +olFormRegionIconWindow: Class<Outlook$OlFormRegionIcon__olFormRegionIconWindow> &
      Outlook$OlFormRegionIcon__olFormRegionIconWindow &
      10; // 10
  }

  declare class Outlook$OlFormRegionIcon__olFormRegionIconDefault
    mixins Outlook$OlFormRegionIcon {}
  declare class Outlook$OlFormRegionIcon__olFormRegionIconEncrypted
    mixins Outlook$OlFormRegionIcon {}
  declare class Outlook$OlFormRegionIcon__olFormRegionIconForwarded
    mixins Outlook$OlFormRegionIcon {}
  declare class Outlook$OlFormRegionIcon__olFormRegionIconPage
    mixins Outlook$OlFormRegionIcon {}
  declare class Outlook$OlFormRegionIcon__olFormRegionIconRead
    mixins Outlook$OlFormRegionIcon {}
  declare class Outlook$OlFormRegionIcon__olFormRegionIconRecurring
    mixins Outlook$OlFormRegionIcon {}
  declare class Outlook$OlFormRegionIcon__olFormRegionIconReplied
    mixins Outlook$OlFormRegionIcon {}
  declare class Outlook$OlFormRegionIcon__olFormRegionIconSigned
    mixins Outlook$OlFormRegionIcon {}
  declare class Outlook$OlFormRegionIcon__olFormRegionIconSubmitted
    mixins Outlook$OlFormRegionIcon {}
  declare class Outlook$OlFormRegionIcon__olFormRegionIconUnread
    mixins Outlook$OlFormRegionIcon {}
  declare class Outlook$OlFormRegionIcon__olFormRegionIconUnsent
    mixins Outlook$OlFormRegionIcon {}
  declare class Outlook$OlFormRegionIcon__olFormRegionIconWindow
    mixins Outlook$OlFormRegionIcon {}

  declare class Outlook$OlFormRegionMode {
    constructor(...args: empty): mixed;
    static +olFormRegionCompose: Class<Outlook$OlFormRegionMode__olFormRegionCompose> &
      Outlook$OlFormRegionMode__olFormRegionCompose &
      1; // 1
    static +olFormRegionPreview: Class<Outlook$OlFormRegionMode__olFormRegionPreview> &
      Outlook$OlFormRegionMode__olFormRegionPreview &
      2; // 2
    static +olFormRegionRead: Class<Outlook$OlFormRegionMode__olFormRegionRead> &
      Outlook$OlFormRegionMode__olFormRegionRead &
      0; // 0
  }

  declare class Outlook$OlFormRegionMode__olFormRegionCompose
    mixins Outlook$OlFormRegionMode {}
  declare class Outlook$OlFormRegionMode__olFormRegionPreview
    mixins Outlook$OlFormRegionMode {}
  declare class Outlook$OlFormRegionMode__olFormRegionRead
    mixins Outlook$OlFormRegionMode {}

  declare class Outlook$OlFormRegionSize {
    constructor(...args: empty): mixed;
    static +olFormRegionTypeAdjoining: Class<Outlook$OlFormRegionSize__olFormRegionTypeAdjoining> &
      Outlook$OlFormRegionSize__olFormRegionTypeAdjoining &
      1; // 1
    static +olFormRegionTypeSeparate: Class<Outlook$OlFormRegionSize__olFormRegionTypeSeparate> &
      Outlook$OlFormRegionSize__olFormRegionTypeSeparate &
      0; // 0
  }

  declare class Outlook$OlFormRegionSize__olFormRegionTypeAdjoining
    mixins Outlook$OlFormRegionSize {}
  declare class Outlook$OlFormRegionSize__olFormRegionTypeSeparate
    mixins Outlook$OlFormRegionSize {}

  declare class Outlook$OlFormRegistry {
    constructor(...args: empty): mixed;
    static +olDefaultRegistry: Class<Outlook$OlFormRegistry__olDefaultRegistry> &
      Outlook$OlFormRegistry__olDefaultRegistry &
      0; // 0
    static +olFolderRegistry: Class<Outlook$OlFormRegistry__olFolderRegistry> &
      Outlook$OlFormRegistry__olFolderRegistry &
      3; // 3
    static +olOrganizationRegistry: Class<Outlook$OlFormRegistry__olOrganizationRegistry> &
      Outlook$OlFormRegistry__olOrganizationRegistry &
      4; // 4
    static +olPersonalRegistry: Class<Outlook$OlFormRegistry__olPersonalRegistry> &
      Outlook$OlFormRegistry__olPersonalRegistry &
      2; // 2
  }

  declare class Outlook$OlFormRegistry__olDefaultRegistry
    mixins Outlook$OlFormRegistry {}
  declare class Outlook$OlFormRegistry__olFolderRegistry
    mixins Outlook$OlFormRegistry {}
  declare class Outlook$OlFormRegistry__olOrganizationRegistry
    mixins Outlook$OlFormRegistry {}
  declare class Outlook$OlFormRegistry__olPersonalRegistry
    mixins Outlook$OlFormRegistry {}

  declare class Outlook$OlGender {
    constructor(...args: empty): mixed;
    static +olFemale: Class<Outlook$OlGender__olFemale> &
      Outlook$OlGender__olFemale &
      1; // 1
    static +olMale: Class<Outlook$OlGender__olMale> &
      Outlook$OlGender__olMale &
      2; // 2
    static +olUnspecified: Class<Outlook$OlGender__olUnspecified> &
      Outlook$OlGender__olUnspecified &
      0; // 0
  }

  declare class Outlook$OlGender__olFemale mixins Outlook$OlGender {}
  declare class Outlook$OlGender__olMale mixins Outlook$OlGender {}
  declare class Outlook$OlGender__olUnspecified mixins Outlook$OlGender {}

  declare class Outlook$OlGridLineStyle {
    constructor(...args: empty): mixed;
    static +olGridLineDashes: Class<Outlook$OlGridLineStyle__olGridLineDashes> &
      Outlook$OlGridLineStyle__olGridLineDashes &
      3; // 3
    static +olGridLineLargeDots: Class<Outlook$OlGridLineStyle__olGridLineLargeDots> &
      Outlook$OlGridLineStyle__olGridLineLargeDots &
      2; // 2
    static +olGridLineNone: Class<Outlook$OlGridLineStyle__olGridLineNone> &
      Outlook$OlGridLineStyle__olGridLineNone &
      0; // 0
    static +olGridLineSmallDots: Class<Outlook$OlGridLineStyle__olGridLineSmallDots> &
      Outlook$OlGridLineStyle__olGridLineSmallDots &
      1; // 1
    static +olGridLineSolid: Class<Outlook$OlGridLineStyle__olGridLineSolid> &
      Outlook$OlGridLineStyle__olGridLineSolid &
      4; // 4
  }

  declare class Outlook$OlGridLineStyle__olGridLineDashes
    mixins Outlook$OlGridLineStyle {}
  declare class Outlook$OlGridLineStyle__olGridLineLargeDots
    mixins Outlook$OlGridLineStyle {}
  declare class Outlook$OlGridLineStyle__olGridLineNone
    mixins Outlook$OlGridLineStyle {}
  declare class Outlook$OlGridLineStyle__olGridLineSmallDots
    mixins Outlook$OlGridLineStyle {}
  declare class Outlook$OlGridLineStyle__olGridLineSolid
    mixins Outlook$OlGridLineStyle {}

  declare class Outlook$OlGroupType {
    constructor(...args: empty): mixed;
    static +olCustomFoldersGroup: Class<Outlook$OlGroupType__olCustomFoldersGroup> &
      Outlook$OlGroupType__olCustomFoldersGroup &
      0; // 0
    static +olFavoriteFoldersGroup: Class<Outlook$OlGroupType__olFavoriteFoldersGroup> &
      Outlook$OlGroupType__olFavoriteFoldersGroup &
      4; // 4
    static +olMyFoldersGroup: Class<Outlook$OlGroupType__olMyFoldersGroup> &
      Outlook$OlGroupType__olMyFoldersGroup &
      1; // 1
    static +olOtherFoldersGroup: Class<Outlook$OlGroupType__olOtherFoldersGroup> &
      Outlook$OlGroupType__olOtherFoldersGroup &
      3; // 3
    static +olPeopleFoldersGroup: Class<Outlook$OlGroupType__olPeopleFoldersGroup> &
      Outlook$OlGroupType__olPeopleFoldersGroup &
      2; // 2
    static +olReadOnlyGroup: Class<Outlook$OlGroupType__olReadOnlyGroup> &
      Outlook$OlGroupType__olReadOnlyGroup &
      6; // 6
    static +olRoomsGroup: Class<Outlook$OlGroupType__olRoomsGroup> &
      Outlook$OlGroupType__olRoomsGroup &
      5; // 5
  }

  declare class Outlook$OlGroupType__olCustomFoldersGroup
    mixins Outlook$OlGroupType {}
  declare class Outlook$OlGroupType__olFavoriteFoldersGroup
    mixins Outlook$OlGroupType {}
  declare class Outlook$OlGroupType__olMyFoldersGroup
    mixins Outlook$OlGroupType {}
  declare class Outlook$OlGroupType__olOtherFoldersGroup
    mixins Outlook$OlGroupType {}
  declare class Outlook$OlGroupType__olPeopleFoldersGroup
    mixins Outlook$OlGroupType {}
  declare class Outlook$OlGroupType__olReadOnlyGroup
    mixins Outlook$OlGroupType {}
  declare class Outlook$OlGroupType__olRoomsGroup mixins Outlook$OlGroupType {}

  declare class Outlook$OlHorizontalLayout {
    constructor(...args: empty): mixed;
    static +olHorizontalLayoutAlignCenter: Class<Outlook$OlHorizontalLayout__olHorizontalLayoutAlignCenter> &
      Outlook$OlHorizontalLayout__olHorizontalLayoutAlignCenter &
      1; // 1
    static +olHorizontalLayoutAlignLeft: Class<Outlook$OlHorizontalLayout__olHorizontalLayoutAlignLeft> &
      Outlook$OlHorizontalLayout__olHorizontalLayoutAlignLeft &
      0; // 0
    static +olHorizontalLayoutAlignRight: Class<Outlook$OlHorizontalLayout__olHorizontalLayoutAlignRight> &
      Outlook$OlHorizontalLayout__olHorizontalLayoutAlignRight &
      2; // 2
    static +olHorizontalLayoutGrow: Class<Outlook$OlHorizontalLayout__olHorizontalLayoutGrow> &
      Outlook$OlHorizontalLayout__olHorizontalLayoutGrow &
      3; // 3
  }

  declare class Outlook$OlHorizontalLayout__olHorizontalLayoutAlignCenter
    mixins Outlook$OlHorizontalLayout {}
  declare class Outlook$OlHorizontalLayout__olHorizontalLayoutAlignLeft
    mixins Outlook$OlHorizontalLayout {}
  declare class Outlook$OlHorizontalLayout__olHorizontalLayoutAlignRight
    mixins Outlook$OlHorizontalLayout {}
  declare class Outlook$OlHorizontalLayout__olHorizontalLayoutGrow
    mixins Outlook$OlHorizontalLayout {}

  declare class Outlook$OlIconViewPlacement {
    constructor(...args: empty): mixed;
    static +olIconAutoArrange: Class<Outlook$OlIconViewPlacement__olIconAutoArrange> &
      Outlook$OlIconViewPlacement__olIconAutoArrange &
      2; // 2
    static +olIconDoNotArrange: Class<Outlook$OlIconViewPlacement__olIconDoNotArrange> &
      Outlook$OlIconViewPlacement__olIconDoNotArrange &
      0; // 0
    static +olIconLineUp: Class<Outlook$OlIconViewPlacement__olIconLineUp> &
      Outlook$OlIconViewPlacement__olIconLineUp &
      1; // 1
    static +olIconSortAndAutoArrange: Class<Outlook$OlIconViewPlacement__olIconSortAndAutoArrange> &
      Outlook$OlIconViewPlacement__olIconSortAndAutoArrange &
      3; // 3
  }

  declare class Outlook$OlIconViewPlacement__olIconAutoArrange
    mixins Outlook$OlIconViewPlacement {}
  declare class Outlook$OlIconViewPlacement__olIconDoNotArrange
    mixins Outlook$OlIconViewPlacement {}
  declare class Outlook$OlIconViewPlacement__olIconLineUp
    mixins Outlook$OlIconViewPlacement {}
  declare class Outlook$OlIconViewPlacement__olIconSortAndAutoArrange
    mixins Outlook$OlIconViewPlacement {}

  declare class Outlook$OlIconViewType {
    constructor(...args: empty): mixed;
    static +olIconViewLarge: Class<Outlook$OlIconViewType__olIconViewLarge> &
      Outlook$OlIconViewType__olIconViewLarge &
      0; // 0
    static +olIconViewList: Class<Outlook$OlIconViewType__olIconViewList> &
      Outlook$OlIconViewType__olIconViewList &
      2; // 2
    static +olIconViewSmall: Class<Outlook$OlIconViewType__olIconViewSmall> &
      Outlook$OlIconViewType__olIconViewSmall &
      1; // 1
  }

  declare class Outlook$OlIconViewType__olIconViewLarge
    mixins Outlook$OlIconViewType {}
  declare class Outlook$OlIconViewType__olIconViewList
    mixins Outlook$OlIconViewType {}
  declare class Outlook$OlIconViewType__olIconViewSmall
    mixins Outlook$OlIconViewType {}

  declare class Outlook$OlImportance {
    constructor(...args: empty): mixed;
    static +olImportanceHigh: Class<Outlook$OlImportance__olImportanceHigh> &
      Outlook$OlImportance__olImportanceHigh &
      2; // 2
    static +olImportanceLow: Class<Outlook$OlImportance__olImportanceLow> &
      Outlook$OlImportance__olImportanceLow &
      0; // 0
    static +olImportanceNormal: Class<Outlook$OlImportance__olImportanceNormal> &
      Outlook$OlImportance__olImportanceNormal &
      1; // 1
  }

  declare class Outlook$OlImportance__olImportanceHigh
    mixins Outlook$OlImportance {}
  declare class Outlook$OlImportance__olImportanceLow
    mixins Outlook$OlImportance {}
  declare class Outlook$OlImportance__olImportanceNormal
    mixins Outlook$OlImportance {}

  declare class Outlook$OlInspectorClose {
    constructor(...args: empty): mixed;
    static +olDiscard: Class<Outlook$OlInspectorClose__olDiscard> &
      Outlook$OlInspectorClose__olDiscard &
      1; // 1
    static +olPromptForSave: Class<Outlook$OlInspectorClose__olPromptForSave> &
      Outlook$OlInspectorClose__olPromptForSave &
      2; // 2
    static +olSave: Class<Outlook$OlInspectorClose__olSave> &
      Outlook$OlInspectorClose__olSave &
      0; // 0
  }

  declare class Outlook$OlInspectorClose__olDiscard
    mixins Outlook$OlInspectorClose {}
  declare class Outlook$OlInspectorClose__olPromptForSave
    mixins Outlook$OlInspectorClose {}
  declare class Outlook$OlInspectorClose__olSave
    mixins Outlook$OlInspectorClose {}

  declare class Outlook$OlItemType {
    constructor(...args: empty): mixed;
    static +olAppointmentItem: Class<Outlook$OlItemType__olAppointmentItem> &
      Outlook$OlItemType__olAppointmentItem &
      1; // 1
    static +olContactItem: Class<Outlook$OlItemType__olContactItem> &
      Outlook$OlItemType__olContactItem &
      2; // 2
    static +olDistributionListItem: Class<Outlook$OlItemType__olDistributionListItem> &
      Outlook$OlItemType__olDistributionListItem &
      7; // 7
    static +olJournalItem: Class<Outlook$OlItemType__olJournalItem> &
      Outlook$OlItemType__olJournalItem &
      4; // 4
    static +olMailItem: Class<Outlook$OlItemType__olMailItem> &
      Outlook$OlItemType__olMailItem &
      0; // 0
    static +olMobileItemMMS: Class<Outlook$OlItemType__olMobileItemMMS> &
      Outlook$OlItemType__olMobileItemMMS &
      12; // 12
    static +olMobileItemSMS: Class<Outlook$OlItemType__olMobileItemSMS> &
      Outlook$OlItemType__olMobileItemSMS &
      11; // 11
    static +olNoteItem: Class<Outlook$OlItemType__olNoteItem> &
      Outlook$OlItemType__olNoteItem &
      5; // 5
    static +olPostItem: Class<Outlook$OlItemType__olPostItem> &
      Outlook$OlItemType__olPostItem &
      6; // 6
    static +olTaskItem: Class<Outlook$OlItemType__olTaskItem> &
      Outlook$OlItemType__olTaskItem &
      3; // 3
  }

  declare class Outlook$OlItemType__olAppointmentItem
    mixins Outlook$OlItemType {}
  declare class Outlook$OlItemType__olContactItem mixins Outlook$OlItemType {}
  declare class Outlook$OlItemType__olDistributionListItem
    mixins Outlook$OlItemType {}
  declare class Outlook$OlItemType__olJournalItem mixins Outlook$OlItemType {}
  declare class Outlook$OlItemType__olMailItem mixins Outlook$OlItemType {}
  declare class Outlook$OlItemType__olMobileItemMMS mixins Outlook$OlItemType {}
  declare class Outlook$OlItemType__olMobileItemSMS mixins Outlook$OlItemType {}
  declare class Outlook$OlItemType__olNoteItem mixins Outlook$OlItemType {}
  declare class Outlook$OlItemType__olPostItem mixins Outlook$OlItemType {}
  declare class Outlook$OlItemType__olTaskItem mixins Outlook$OlItemType {}

  declare class Outlook$OlJournalRecipientType {
    constructor(...args: empty): mixed;
    static +olAssociatedContact: Class<Outlook$OlJournalRecipientType__olAssociatedContact> &
      Outlook$OlJournalRecipientType__olAssociatedContact &
      1; // 1
  }

  declare class Outlook$OlJournalRecipientType__olAssociatedContact
    mixins Outlook$OlJournalRecipientType {}

  declare class Outlook$OlMailingAddress {
    constructor(...args: empty): mixed;
    static +olBusiness: Class<Outlook$OlMailingAddress__olBusiness> &
      Outlook$OlMailingAddress__olBusiness &
      2; // 2
    static +olHome: Class<Outlook$OlMailingAddress__olHome> &
      Outlook$OlMailingAddress__olHome &
      1; // 1
    static +olNone: Class<Outlook$OlMailingAddress__olNone> &
      Outlook$OlMailingAddress__olNone &
      0; // 0
    static +olOther: Class<Outlook$OlMailingAddress__olOther> &
      Outlook$OlMailingAddress__olOther &
      3; // 3
  }

  declare class Outlook$OlMailingAddress__olBusiness
    mixins Outlook$OlMailingAddress {}
  declare class Outlook$OlMailingAddress__olHome
    mixins Outlook$OlMailingAddress {}
  declare class Outlook$OlMailingAddress__olNone
    mixins Outlook$OlMailingAddress {}
  declare class Outlook$OlMailingAddress__olOther
    mixins Outlook$OlMailingAddress {}

  declare class Outlook$OlMailRecipientType {
    constructor(...args: empty): mixed;
    static +olBCC: Class<Outlook$OlMailRecipientType__olBCC> &
      Outlook$OlMailRecipientType__olBCC &
      3; // 3
    static +olCC: Class<Outlook$OlMailRecipientType__olCC> &
      Outlook$OlMailRecipientType__olCC &
      2; // 2
    static +olOriginator: Class<Outlook$OlMailRecipientType__olOriginator> &
      Outlook$OlMailRecipientType__olOriginator &
      0; // 0
    static +olTo: Class<Outlook$OlMailRecipientType__olTo> &
      Outlook$OlMailRecipientType__olTo &
      1; // 1
  }

  declare class Outlook$OlMailRecipientType__olBCC
    mixins Outlook$OlMailRecipientType {}
  declare class Outlook$OlMailRecipientType__olCC
    mixins Outlook$OlMailRecipientType {}
  declare class Outlook$OlMailRecipientType__olOriginator
    mixins Outlook$OlMailRecipientType {}
  declare class Outlook$OlMailRecipientType__olTo
    mixins Outlook$OlMailRecipientType {}

  declare class Outlook$OlMarkInterval {
    constructor(...args: empty): mixed;
    static +olMarkComplete: Class<Outlook$OlMarkInterval__olMarkComplete> &
      Outlook$OlMarkInterval__olMarkComplete &
      5; // 5
    static +olMarkNextWeek: Class<Outlook$OlMarkInterval__olMarkNextWeek> &
      Outlook$OlMarkInterval__olMarkNextWeek &
      3; // 3
    static +olMarkNoDate: Class<Outlook$OlMarkInterval__olMarkNoDate> &
      Outlook$OlMarkInterval__olMarkNoDate &
      4; // 4
    static +olMarkThisWeek: Class<Outlook$OlMarkInterval__olMarkThisWeek> &
      Outlook$OlMarkInterval__olMarkThisWeek &
      2; // 2
    static +olMarkToday: Class<Outlook$OlMarkInterval__olMarkToday> &
      Outlook$OlMarkInterval__olMarkToday &
      0; // 0
    static +olMarkTomorrow: Class<Outlook$OlMarkInterval__olMarkTomorrow> &
      Outlook$OlMarkInterval__olMarkTomorrow &
      1; // 1
  }

  declare class Outlook$OlMarkInterval__olMarkComplete
    mixins Outlook$OlMarkInterval {}
  declare class Outlook$OlMarkInterval__olMarkNextWeek
    mixins Outlook$OlMarkInterval {}
  declare class Outlook$OlMarkInterval__olMarkNoDate
    mixins Outlook$OlMarkInterval {}
  declare class Outlook$OlMarkInterval__olMarkThisWeek
    mixins Outlook$OlMarkInterval {}
  declare class Outlook$OlMarkInterval__olMarkToday
    mixins Outlook$OlMarkInterval {}
  declare class Outlook$OlMarkInterval__olMarkTomorrow
    mixins Outlook$OlMarkInterval {}

  declare class Outlook$OlMatchEntry {
    constructor(...args: empty): mixed;
    static +olMatchEntryComplete: Class<Outlook$OlMatchEntry__olMatchEntryComplete> &
      Outlook$OlMatchEntry__olMatchEntryComplete &
      1; // 1
    static +olMatchEntryFirstLetter: Class<Outlook$OlMatchEntry__olMatchEntryFirstLetter> &
      Outlook$OlMatchEntry__olMatchEntryFirstLetter &
      0; // 0
    static +olMatchEntryNone: Class<Outlook$OlMatchEntry__olMatchEntryNone> &
      Outlook$OlMatchEntry__olMatchEntryNone &
      2; // 2
  }

  declare class Outlook$OlMatchEntry__olMatchEntryComplete
    mixins Outlook$OlMatchEntry {}
  declare class Outlook$OlMatchEntry__olMatchEntryFirstLetter
    mixins Outlook$OlMatchEntry {}
  declare class Outlook$OlMatchEntry__olMatchEntryNone
    mixins Outlook$OlMatchEntry {}

  declare class Outlook$OlMeetingRecipientType {
    constructor(...args: empty): mixed;
    static +olOptional: Class<Outlook$OlMeetingRecipientType__olOptional> &
      Outlook$OlMeetingRecipientType__olOptional &
      2; // 2
    static +olOrganizer: Class<Outlook$OlMeetingRecipientType__olOrganizer> &
      Outlook$OlMeetingRecipientType__olOrganizer &
      0; // 0
    static +olRequired: Class<Outlook$OlMeetingRecipientType__olRequired> &
      Outlook$OlMeetingRecipientType__olRequired &
      1; // 1
    static +olResource: Class<Outlook$OlMeetingRecipientType__olResource> &
      Outlook$OlMeetingRecipientType__olResource &
      3; // 3
  }

  declare class Outlook$OlMeetingRecipientType__olOptional
    mixins Outlook$OlMeetingRecipientType {}
  declare class Outlook$OlMeetingRecipientType__olOrganizer
    mixins Outlook$OlMeetingRecipientType {}
  declare class Outlook$OlMeetingRecipientType__olRequired
    mixins Outlook$OlMeetingRecipientType {}
  declare class Outlook$OlMeetingRecipientType__olResource
    mixins Outlook$OlMeetingRecipientType {}

  declare class Outlook$OlMeetingResponse {
    constructor(...args: empty): mixed;
    static +olMeetingAccepted: Class<Outlook$OlMeetingResponse__olMeetingAccepted> &
      Outlook$OlMeetingResponse__olMeetingAccepted &
      3; // 3
    static +olMeetingDeclined: Class<Outlook$OlMeetingResponse__olMeetingDeclined> &
      Outlook$OlMeetingResponse__olMeetingDeclined &
      4; // 4
    static +olMeetingTentative: Class<Outlook$OlMeetingResponse__olMeetingTentative> &
      Outlook$OlMeetingResponse__olMeetingTentative &
      2; // 2
  }

  declare class Outlook$OlMeetingResponse__olMeetingAccepted
    mixins Outlook$OlMeetingResponse {}
  declare class Outlook$OlMeetingResponse__olMeetingDeclined
    mixins Outlook$OlMeetingResponse {}
  declare class Outlook$OlMeetingResponse__olMeetingTentative
    mixins Outlook$OlMeetingResponse {}

  declare class Outlook$OlMeetingStatus {
    constructor(...args: empty): mixed;
    static +olMeeting: Class<Outlook$OlMeetingStatus__olMeeting> &
      Outlook$OlMeetingStatus__olMeeting &
      1; // 1
    static +olMeetingCanceled: Class<Outlook$OlMeetingStatus__olMeetingCanceled> &
      Outlook$OlMeetingStatus__olMeetingCanceled &
      5; // 5
    static +olMeetingReceived: Class<Outlook$OlMeetingStatus__olMeetingReceived> &
      Outlook$OlMeetingStatus__olMeetingReceived &
      3; // 3
    static +olMeetingReceivedAndCanceled: Class<Outlook$OlMeetingStatus__olMeetingReceivedAndCanceled> &
      Outlook$OlMeetingStatus__olMeetingReceivedAndCanceled &
      7; // 7
    static +olNonMeeting: Class<Outlook$OlMeetingStatus__olNonMeeting> &
      Outlook$OlMeetingStatus__olNonMeeting &
      0; // 0
  }

  declare class Outlook$OlMeetingStatus__olMeeting
    mixins Outlook$OlMeetingStatus {}
  declare class Outlook$OlMeetingStatus__olMeetingCanceled
    mixins Outlook$OlMeetingStatus {}
  declare class Outlook$OlMeetingStatus__olMeetingReceived
    mixins Outlook$OlMeetingStatus {}
  declare class Outlook$OlMeetingStatus__olMeetingReceivedAndCanceled
    mixins Outlook$OlMeetingStatus {}
  declare class Outlook$OlMeetingStatus__olNonMeeting
    mixins Outlook$OlMeetingStatus {}

  declare class Outlook$OlMobileFormat {
    constructor(...args: empty): mixed;
    static +olMMS: Class<Outlook$OlMobileFormat__olMMS> &
      Outlook$OlMobileFormat__olMMS &
      1; // 1
    static +olSMS: Class<Outlook$OlMobileFormat__olSMS> &
      Outlook$OlMobileFormat__olSMS &
      0; // 0
  }

  declare class Outlook$OlMobileFormat__olMMS mixins Outlook$OlMobileFormat {}
  declare class Outlook$OlMobileFormat__olSMS mixins Outlook$OlMobileFormat {}

  declare class Outlook$OlMouseButton {
    constructor(...args: empty): mixed;
    static +olMouseButtonLeft: Class<Outlook$OlMouseButton__olMouseButtonLeft> &
      Outlook$OlMouseButton__olMouseButtonLeft &
      1; // 1
    static +olMouseButtonMiddle: Class<Outlook$OlMouseButton__olMouseButtonMiddle> &
      Outlook$OlMouseButton__olMouseButtonMiddle &
      4; // 4
    static +olMouseButtonRight: Class<Outlook$OlMouseButton__olMouseButtonRight> &
      Outlook$OlMouseButton__olMouseButtonRight &
      2; // 2
  }

  declare class Outlook$OlMouseButton__olMouseButtonLeft
    mixins Outlook$OlMouseButton {}
  declare class Outlook$OlMouseButton__olMouseButtonMiddle
    mixins Outlook$OlMouseButton {}
  declare class Outlook$OlMouseButton__olMouseButtonRight
    mixins Outlook$OlMouseButton {}

  declare class Outlook$OlMousePointer {
    constructor(...args: empty): mixed;
    static +olMousePointerAppStarting: Class<Outlook$OlMousePointer__olMousePointerAppStarting> &
      Outlook$OlMousePointer__olMousePointerAppStarting &
      13; // 13
    static +olMousePointerArrow: Class<Outlook$OlMousePointer__olMousePointerArrow> &
      Outlook$OlMousePointer__olMousePointerArrow &
      1; // 1
    static +olMousePointerCross: Class<Outlook$OlMousePointer__olMousePointerCross> &
      Outlook$OlMousePointer__olMousePointerCross &
      2; // 2
    static +olMousePointerCustom: Class<Outlook$OlMousePointer__olMousePointerCustom> &
      Outlook$OlMousePointer__olMousePointerCustom &
      99; // 99
    static +olMousePointerDefault: Class<Outlook$OlMousePointer__olMousePointerDefault> &
      Outlook$OlMousePointer__olMousePointerDefault &
      0; // 0
    static +olMousePointerHelp: Class<Outlook$OlMousePointer__olMousePointerHelp> &
      Outlook$OlMousePointer__olMousePointerHelp &
      14; // 14
    static +olMousePointerHourGlass: Class<Outlook$OlMousePointer__olMousePointerHourGlass> &
      Outlook$OlMousePointer__olMousePointerHourGlass &
      11; // 11
    static +olMousePointerIBeam: Class<Outlook$OlMousePointer__olMousePointerIBeam> &
      Outlook$OlMousePointer__olMousePointerIBeam &
      3; // 3
    static +olMousePointerNoDrop: Class<Outlook$OlMousePointer__olMousePointerNoDrop> &
      Outlook$OlMousePointer__olMousePointerNoDrop &
      12; // 12
    static +olMousePointerSizeAll: Class<Outlook$OlMousePointer__olMousePointerSizeAll> &
      Outlook$OlMousePointer__olMousePointerSizeAll &
      15; // 15
    static +olMousePointerSizeNESW: Class<Outlook$OlMousePointer__olMousePointerSizeNESW> &
      Outlook$OlMousePointer__olMousePointerSizeNESW &
      6; // 6
    static +olMousePointerSizeNS: Class<Outlook$OlMousePointer__olMousePointerSizeNS> &
      Outlook$OlMousePointer__olMousePointerSizeNS &
      7; // 7
    static +olMousePointerSizeNWSE: Class<Outlook$OlMousePointer__olMousePointerSizeNWSE> &
      Outlook$OlMousePointer__olMousePointerSizeNWSE &
      8; // 8
    static +olMousePointerSizeWE: Class<Outlook$OlMousePointer__olMousePointerSizeWE> &
      Outlook$OlMousePointer__olMousePointerSizeWE &
      9; // 9
    static +olMousePointerUpArrow: Class<Outlook$OlMousePointer__olMousePointerUpArrow> &
      Outlook$OlMousePointer__olMousePointerUpArrow &
      10; // 10
  }

  declare class Outlook$OlMousePointer__olMousePointerAppStarting
    mixins Outlook$OlMousePointer {}
  declare class Outlook$OlMousePointer__olMousePointerArrow
    mixins Outlook$OlMousePointer {}
  declare class Outlook$OlMousePointer__olMousePointerCross
    mixins Outlook$OlMousePointer {}
  declare class Outlook$OlMousePointer__olMousePointerCustom
    mixins Outlook$OlMousePointer {}
  declare class Outlook$OlMousePointer__olMousePointerDefault
    mixins Outlook$OlMousePointer {}
  declare class Outlook$OlMousePointer__olMousePointerHelp
    mixins Outlook$OlMousePointer {}
  declare class Outlook$OlMousePointer__olMousePointerHourGlass
    mixins Outlook$OlMousePointer {}
  declare class Outlook$OlMousePointer__olMousePointerIBeam
    mixins Outlook$OlMousePointer {}
  declare class Outlook$OlMousePointer__olMousePointerNoDrop
    mixins Outlook$OlMousePointer {}
  declare class Outlook$OlMousePointer__olMousePointerSizeAll
    mixins Outlook$OlMousePointer {}
  declare class Outlook$OlMousePointer__olMousePointerSizeNESW
    mixins Outlook$OlMousePointer {}
  declare class Outlook$OlMousePointer__olMousePointerSizeNS
    mixins Outlook$OlMousePointer {}
  declare class Outlook$OlMousePointer__olMousePointerSizeNWSE
    mixins Outlook$OlMousePointer {}
  declare class Outlook$OlMousePointer__olMousePointerSizeWE
    mixins Outlook$OlMousePointer {}
  declare class Outlook$OlMousePointer__olMousePointerUpArrow
    mixins Outlook$OlMousePointer {}

  declare class Outlook$OlMultiLine {
    constructor(...args: empty): mixed;
    static +olAlwaysMultiLine: Class<Outlook$OlMultiLine__olAlwaysMultiLine> &
      Outlook$OlMultiLine__olAlwaysMultiLine &
      2; // 2
    static +olAlwaysSingleLine: Class<Outlook$OlMultiLine__olAlwaysSingleLine> &
      Outlook$OlMultiLine__olAlwaysSingleLine &
      1; // 1
    static +olWidthMultiLine: Class<Outlook$OlMultiLine__olWidthMultiLine> &
      Outlook$OlMultiLine__olWidthMultiLine &
      0; // 0
  }

  declare class Outlook$OlMultiLine__olAlwaysMultiLine
    mixins Outlook$OlMultiLine {}
  declare class Outlook$OlMultiLine__olAlwaysSingleLine
    mixins Outlook$OlMultiLine {}
  declare class Outlook$OlMultiLine__olWidthMultiLine
    mixins Outlook$OlMultiLine {}

  declare class Outlook$OlMultiSelect {
    constructor(...args: empty): mixed;
    static +olMultiSelectExtended: Class<Outlook$OlMultiSelect__olMultiSelectExtended> &
      Outlook$OlMultiSelect__olMultiSelectExtended &
      2; // 2
    static +olMultiSelectMulti: Class<Outlook$OlMultiSelect__olMultiSelectMulti> &
      Outlook$OlMultiSelect__olMultiSelectMulti &
      1; // 1
    static +olMultiSelectSingle: Class<Outlook$OlMultiSelect__olMultiSelectSingle> &
      Outlook$OlMultiSelect__olMultiSelectSingle &
      0; // 0
  }

  declare class Outlook$OlMultiSelect__olMultiSelectExtended
    mixins Outlook$OlMultiSelect {}
  declare class Outlook$OlMultiSelect__olMultiSelectMulti
    mixins Outlook$OlMultiSelect {}
  declare class Outlook$OlMultiSelect__olMultiSelectSingle
    mixins Outlook$OlMultiSelect {}

  declare class Outlook$OlNavigationModuleType {
    constructor(...args: empty): mixed;
    static +olModuleCalendar: Class<Outlook$OlNavigationModuleType__olModuleCalendar> &
      Outlook$OlNavigationModuleType__olModuleCalendar &
      1; // 1
    static +olModuleContacts: Class<Outlook$OlNavigationModuleType__olModuleContacts> &
      Outlook$OlNavigationModuleType__olModuleContacts &
      2; // 2
    static +olModuleFolderList: Class<Outlook$OlNavigationModuleType__olModuleFolderList> &
      Outlook$OlNavigationModuleType__olModuleFolderList &
      6; // 6
    static +olModuleJournal: Class<Outlook$OlNavigationModuleType__olModuleJournal> &
      Outlook$OlNavigationModuleType__olModuleJournal &
      4; // 4
    static +olModuleMail: Class<Outlook$OlNavigationModuleType__olModuleMail> &
      Outlook$OlNavigationModuleType__olModuleMail &
      0; // 0
    static +olModuleNotes: Class<Outlook$OlNavigationModuleType__olModuleNotes> &
      Outlook$OlNavigationModuleType__olModuleNotes &
      5; // 5
    static +olModuleShortcuts: Class<Outlook$OlNavigationModuleType__olModuleShortcuts> &
      Outlook$OlNavigationModuleType__olModuleShortcuts &
      7; // 7
    static +olModuleSolutions: Class<Outlook$OlNavigationModuleType__olModuleSolutions> &
      Outlook$OlNavigationModuleType__olModuleSolutions &
      8; // 8
    static +olModuleTasks: Class<Outlook$OlNavigationModuleType__olModuleTasks> &
      Outlook$OlNavigationModuleType__olModuleTasks &
      3; // 3
  }

  declare class Outlook$OlNavigationModuleType__olModuleCalendar
    mixins Outlook$OlNavigationModuleType {}
  declare class Outlook$OlNavigationModuleType__olModuleContacts
    mixins Outlook$OlNavigationModuleType {}
  declare class Outlook$OlNavigationModuleType__olModuleFolderList
    mixins Outlook$OlNavigationModuleType {}
  declare class Outlook$OlNavigationModuleType__olModuleJournal
    mixins Outlook$OlNavigationModuleType {}
  declare class Outlook$OlNavigationModuleType__olModuleMail
    mixins Outlook$OlNavigationModuleType {}
  declare class Outlook$OlNavigationModuleType__olModuleNotes
    mixins Outlook$OlNavigationModuleType {}
  declare class Outlook$OlNavigationModuleType__olModuleShortcuts
    mixins Outlook$OlNavigationModuleType {}
  declare class Outlook$OlNavigationModuleType__olModuleSolutions
    mixins Outlook$OlNavigationModuleType {}
  declare class Outlook$OlNavigationModuleType__olModuleTasks
    mixins Outlook$OlNavigationModuleType {}

  declare class Outlook$OlNetMeetingType {
    constructor(...args: empty): mixed;
    static +olExchangeConferencing: Class<Outlook$OlNetMeetingType__olExchangeConferencing> &
      Outlook$OlNetMeetingType__olExchangeConferencing &
      2; // 2
    static +olNetMeeting: Class<Outlook$OlNetMeetingType__olNetMeeting> &
      Outlook$OlNetMeetingType__olNetMeeting &
      0; // 0
    static +olNetShow: Class<Outlook$OlNetMeetingType__olNetShow> &
      Outlook$OlNetMeetingType__olNetShow &
      1; // 1
  }

  declare class Outlook$OlNetMeetingType__olExchangeConferencing
    mixins Outlook$OlNetMeetingType {}
  declare class Outlook$OlNetMeetingType__olNetMeeting
    mixins Outlook$OlNetMeetingType {}
  declare class Outlook$OlNetMeetingType__olNetShow
    mixins Outlook$OlNetMeetingType {}

  declare class Outlook$OlNoteColor {
    constructor(...args: empty): mixed;
    static +olBlue: Class<Outlook$OlNoteColor__olBlue> &
      Outlook$OlNoteColor__olBlue &
      0; // 0
    static +olGreen: Class<Outlook$OlNoteColor__olGreen> &
      Outlook$OlNoteColor__olGreen &
      1; // 1
    static +olPink: Class<Outlook$OlNoteColor__olPink> &
      Outlook$OlNoteColor__olPink &
      2; // 2
    static +olWhite: Class<Outlook$OlNoteColor__olWhite> &
      Outlook$OlNoteColor__olWhite &
      4; // 4
    static +olYellow: Class<Outlook$OlNoteColor__olYellow> &
      Outlook$OlNoteColor__olYellow &
      3; // 3
  }

  declare class Outlook$OlNoteColor__olBlue mixins Outlook$OlNoteColor {}
  declare class Outlook$OlNoteColor__olGreen mixins Outlook$OlNoteColor {}
  declare class Outlook$OlNoteColor__olPink mixins Outlook$OlNoteColor {}
  declare class Outlook$OlNoteColor__olWhite mixins Outlook$OlNoteColor {}
  declare class Outlook$OlNoteColor__olYellow mixins Outlook$OlNoteColor {}

  declare class Outlook$OlObjectClass {
    constructor(...args: empty): mixed;
    static +olAccount: Class<Outlook$OlObjectClass__olAccount> &
      Outlook$OlObjectClass__olAccount &
      105; // 105
    static +olAccountRuleCondition: Class<Outlook$OlObjectClass__olAccountRuleCondition> &
      Outlook$OlObjectClass__olAccountRuleCondition &
      135; // 135
    static +olAccounts: Class<Outlook$OlObjectClass__olAccounts> &
      Outlook$OlObjectClass__olAccounts &
      106; // 106
    static +olAction: Class<Outlook$OlObjectClass__olAction> &
      Outlook$OlObjectClass__olAction &
      32; // 32
    static +olActions: Class<Outlook$OlObjectClass__olActions> &
      Outlook$OlObjectClass__olActions &
      33; // 33
    static +olAddressEntries: Class<Outlook$OlObjectClass__olAddressEntries> &
      Outlook$OlObjectClass__olAddressEntries &
      21; // 21
    static +olAddressEntry: Class<Outlook$OlObjectClass__olAddressEntry> &
      Outlook$OlObjectClass__olAddressEntry &
      8; // 8
    static +olAddressList: Class<Outlook$OlObjectClass__olAddressList> &
      Outlook$OlObjectClass__olAddressList &
      7; // 7
    static +olAddressLists: Class<Outlook$OlObjectClass__olAddressLists> &
      Outlook$OlObjectClass__olAddressLists &
      20; // 20
    static +olAddressRuleCondition: Class<Outlook$OlObjectClass__olAddressRuleCondition> &
      Outlook$OlObjectClass__olAddressRuleCondition &
      170; // 170
    static +olApplication: Class<Outlook$OlObjectClass__olApplication> &
      Outlook$OlObjectClass__olApplication &
      0; // 0
    static +olAppointment: Class<Outlook$OlObjectClass__olAppointment> &
      Outlook$OlObjectClass__olAppointment &
      26; // 26
    static +olAssignToCategoryRuleAction: Class<Outlook$OlObjectClass__olAssignToCategoryRuleAction> &
      Outlook$OlObjectClass__olAssignToCategoryRuleAction &
      122; // 122
    static +olAttachment: Class<Outlook$OlObjectClass__olAttachment> &
      Outlook$OlObjectClass__olAttachment &
      5; // 5
    static +olAttachments: Class<Outlook$OlObjectClass__olAttachments> &
      Outlook$OlObjectClass__olAttachments &
      18; // 18
    static +olAttachmentSelection: Class<Outlook$OlObjectClass__olAttachmentSelection> &
      Outlook$OlObjectClass__olAttachmentSelection &
      169; // 169
    static +olAutoFormatRule: Class<Outlook$OlObjectClass__olAutoFormatRule> &
      Outlook$OlObjectClass__olAutoFormatRule &
      147; // 147
    static +olAutoFormatRules: Class<Outlook$OlObjectClass__olAutoFormatRules> &
      Outlook$OlObjectClass__olAutoFormatRules &
      148; // 148
    static +olCalendarModule: Class<Outlook$OlObjectClass__olCalendarModule> &
      Outlook$OlObjectClass__olCalendarModule &
      159; // 159
    static +olCalendarSharing: Class<Outlook$OlObjectClass__olCalendarSharing> &
      Outlook$OlObjectClass__olCalendarSharing &
      151; // 151
    static +olCategories: Class<Outlook$OlObjectClass__olCategories> &
      Outlook$OlObjectClass__olCategories &
      153; // 153
    static +olCategory: Class<Outlook$OlObjectClass__olCategory> &
      Outlook$OlObjectClass__olCategory &
      152; // 152
    static +olCategoryRuleCondition: Class<Outlook$OlObjectClass__olCategoryRuleCondition> &
      Outlook$OlObjectClass__olCategoryRuleCondition &
      130; // 130
    static +olClassBusinessCardView: Class<Outlook$OlObjectClass__olClassBusinessCardView> &
      Outlook$OlObjectClass__olClassBusinessCardView &
      168; // 168
    static +olClassCalendarView: Class<Outlook$OlObjectClass__olClassCalendarView> &
      Outlook$OlObjectClass__olClassCalendarView &
      139; // 139
    static +olClassCardView: Class<Outlook$OlObjectClass__olClassCardView> &
      Outlook$OlObjectClass__olClassCardView &
      138; // 138
    static +olClassIconView: Class<Outlook$OlObjectClass__olClassIconView> &
      Outlook$OlObjectClass__olClassIconView &
      137; // 137
    static +olClassNavigationPane: Class<Outlook$OlObjectClass__olClassNavigationPane> &
      Outlook$OlObjectClass__olClassNavigationPane &
      155; // 155
    static +olClassTableView: Class<Outlook$OlObjectClass__olClassTableView> &
      Outlook$OlObjectClass__olClassTableView &
      136; // 136
    static +olClassTimeLineView: Class<Outlook$OlObjectClass__olClassTimeLineView> &
      Outlook$OlObjectClass__olClassTimeLineView &
      140; // 140
    static +olClassTimeZone: Class<Outlook$OlObjectClass__olClassTimeZone> &
      Outlook$OlObjectClass__olClassTimeZone &
      174; // 174
    static +olClassTimeZones: Class<Outlook$OlObjectClass__olClassTimeZones> &
      Outlook$OlObjectClass__olClassTimeZones &
      175; // 175
    static +olColumn: Class<Outlook$OlObjectClass__olColumn> &
      Outlook$OlObjectClass__olColumn &
      154; // 154
    static +olColumnFormat: Class<Outlook$OlObjectClass__olColumnFormat> &
      Outlook$OlObjectClass__olColumnFormat &
      149; // 149
    static +olColumns: Class<Outlook$OlObjectClass__olColumns> &
      Outlook$OlObjectClass__olColumns &
      150; // 150
    static +olConflict: Class<Outlook$OlObjectClass__olConflict> &
      Outlook$OlObjectClass__olConflict &
      102; // 102
    static +olConflicts: Class<Outlook$OlObjectClass__olConflicts> &
      Outlook$OlObjectClass__olConflicts &
      103; // 103
    static +olContact: Class<Outlook$OlObjectClass__olContact> &
      Outlook$OlObjectClass__olContact &
      40; // 40
    static +olContactsModule: Class<Outlook$OlObjectClass__olContactsModule> &
      Outlook$OlObjectClass__olContactsModule &
      160; // 160
    static +olConversation: Class<Outlook$OlObjectClass__olConversation> &
      Outlook$OlObjectClass__olConversation &
      178; // 178
    static +olConversationHeader: Class<Outlook$OlObjectClass__olConversationHeader> &
      Outlook$OlObjectClass__olConversationHeader &
      182; // 182
    static +olDistributionList: Class<Outlook$OlObjectClass__olDistributionList> &
      Outlook$OlObjectClass__olDistributionList &
      69; // 69
    static +olDocument: Class<Outlook$OlObjectClass__olDocument> &
      Outlook$OlObjectClass__olDocument &
      41; // 41
    static +olException: Class<Outlook$OlObjectClass__olException> &
      Outlook$OlObjectClass__olException &
      30; // 30
    static +olExceptions: Class<Outlook$OlObjectClass__olExceptions> &
      Outlook$OlObjectClass__olExceptions &
      29; // 29
    static +olExchangeDistributionList: Class<Outlook$OlObjectClass__olExchangeDistributionList> &
      Outlook$OlObjectClass__olExchangeDistributionList &
      111; // 111
    static +olExchangeUser: Class<Outlook$OlObjectClass__olExchangeUser> &
      Outlook$OlObjectClass__olExchangeUser &
      110; // 110
    static +olExplorer: Class<Outlook$OlObjectClass__olExplorer> &
      Outlook$OlObjectClass__olExplorer &
      34; // 34
    static +olExplorers: Class<Outlook$OlObjectClass__olExplorers> &
      Outlook$OlObjectClass__olExplorers &
      60; // 60
    static +olFolder: Class<Outlook$OlObjectClass__olFolder> &
      Outlook$OlObjectClass__olFolder &
      2; // 2
    static +olFolders: Class<Outlook$OlObjectClass__olFolders> &
      Outlook$OlObjectClass__olFolders &
      15; // 15
    static +olFormDescription: Class<Outlook$OlObjectClass__olFormDescription> &
      Outlook$OlObjectClass__olFormDescription &
      37; // 37
    static +olFormNameRuleCondition: Class<Outlook$OlObjectClass__olFormNameRuleCondition> &
      Outlook$OlObjectClass__olFormNameRuleCondition &
      131; // 131
    static +olFormRegion: Class<Outlook$OlObjectClass__olFormRegion> &
      Outlook$OlObjectClass__olFormRegion &
      129; // 129
    static +olFromRssFeedRuleCondition: Class<Outlook$OlObjectClass__olFromRssFeedRuleCondition> &
      Outlook$OlObjectClass__olFromRssFeedRuleCondition &
      173; // 173
    static +olFromRuleCondition: Class<Outlook$OlObjectClass__olFromRuleCondition> &
      Outlook$OlObjectClass__olFromRuleCondition &
      132; // 132
    static +olImportanceRuleCondition: Class<Outlook$OlObjectClass__olImportanceRuleCondition> &
      Outlook$OlObjectClass__olImportanceRuleCondition &
      128; // 128
    static +olInspector: Class<Outlook$OlObjectClass__olInspector> &
      Outlook$OlObjectClass__olInspector &
      35; // 35
    static +olInspectors: Class<Outlook$OlObjectClass__olInspectors> &
      Outlook$OlObjectClass__olInspectors &
      61; // 61
    static +olItemProperties: Class<Outlook$OlObjectClass__olItemProperties> &
      Outlook$OlObjectClass__olItemProperties &
      98; // 98
    static +olItemProperty: Class<Outlook$OlObjectClass__olItemProperty> &
      Outlook$OlObjectClass__olItemProperty &
      99; // 99
    static +olItems: Class<Outlook$OlObjectClass__olItems> &
      Outlook$OlObjectClass__olItems &
      16; // 16
    static +olJournal: Class<Outlook$OlObjectClass__olJournal> &
      Outlook$OlObjectClass__olJournal &
      42; // 42
    static +olJournalModule: Class<Outlook$OlObjectClass__olJournalModule> &
      Outlook$OlObjectClass__olJournalModule &
      162; // 162
    static +olLink: Class<Outlook$OlObjectClass__olLink> &
      Outlook$OlObjectClass__olLink &
      75; // 75
    static +olLinks: Class<Outlook$OlObjectClass__olLinks> &
      Outlook$OlObjectClass__olLinks &
      76; // 76
    static +olMail: Class<Outlook$OlObjectClass__olMail> &
      Outlook$OlObjectClass__olMail &
      43; // 43
    static +olMailModule: Class<Outlook$OlObjectClass__olMailModule> &
      Outlook$OlObjectClass__olMailModule &
      158; // 158
    static +olMarkAsTaskRuleAction: Class<Outlook$OlObjectClass__olMarkAsTaskRuleAction> &
      Outlook$OlObjectClass__olMarkAsTaskRuleAction &
      124; // 124
    static +olMeetingCancellation: Class<Outlook$OlObjectClass__olMeetingCancellation> &
      Outlook$OlObjectClass__olMeetingCancellation &
      54; // 54
    static +olMeetingForwardNotification: Class<Outlook$OlObjectClass__olMeetingForwardNotification> &
      Outlook$OlObjectClass__olMeetingForwardNotification &
      181; // 181
    static +olMeetingRequest: Class<Outlook$OlObjectClass__olMeetingRequest> &
      Outlook$OlObjectClass__olMeetingRequest &
      53; // 53
    static +olMeetingResponseNegative: Class<Outlook$OlObjectClass__olMeetingResponseNegative> &
      Outlook$OlObjectClass__olMeetingResponseNegative &
      55; // 55
    static +olMeetingResponsePositive: Class<Outlook$OlObjectClass__olMeetingResponsePositive> &
      Outlook$OlObjectClass__olMeetingResponsePositive &
      56; // 56
    static +olMeetingResponseTentative: Class<Outlook$OlObjectClass__olMeetingResponseTentative> &
      Outlook$OlObjectClass__olMeetingResponseTentative &
      57; // 57
    static +olMobile: Class<Outlook$OlObjectClass__olMobile> &
      Outlook$OlObjectClass__olMobile &
      176; // 176
    static +olMoveOrCopyRuleAction: Class<Outlook$OlObjectClass__olMoveOrCopyRuleAction> &
      Outlook$OlObjectClass__olMoveOrCopyRuleAction &
      118; // 118
    static +olNamespace: Class<Outlook$OlObjectClass__olNamespace> &
      Outlook$OlObjectClass__olNamespace &
      1; // 1
    static +olNavigationFolder: Class<Outlook$OlObjectClass__olNavigationFolder> &
      Outlook$OlObjectClass__olNavigationFolder &
      167; // 167
    static +olNavigationFolders: Class<Outlook$OlObjectClass__olNavigationFolders> &
      Outlook$OlObjectClass__olNavigationFolders &
      166; // 166
    static +olNavigationGroup: Class<Outlook$OlObjectClass__olNavigationGroup> &
      Outlook$OlObjectClass__olNavigationGroup &
      165; // 165
    static +olNavigationGroups: Class<Outlook$OlObjectClass__olNavigationGroups> &
      Outlook$OlObjectClass__olNavigationGroups &
      164; // 164
    static +olNavigationModule: Class<Outlook$OlObjectClass__olNavigationModule> &
      Outlook$OlObjectClass__olNavigationModule &
      157; // 157
    static +olNavigationModules: Class<Outlook$OlObjectClass__olNavigationModules> &
      Outlook$OlObjectClass__olNavigationModules &
      156; // 156
    static +olNewItemAlertRuleAction: Class<Outlook$OlObjectClass__olNewItemAlertRuleAction> &
      Outlook$OlObjectClass__olNewItemAlertRuleAction &
      125; // 125
    static +olNote: Class<Outlook$OlObjectClass__olNote> &
      Outlook$OlObjectClass__olNote &
      44; // 44
    static +olNotesModule: Class<Outlook$OlObjectClass__olNotesModule> &
      Outlook$OlObjectClass__olNotesModule &
      163; // 163
    static +olOrderField: Class<Outlook$OlObjectClass__olOrderField> &
      Outlook$OlObjectClass__olOrderField &
      144; // 144
    static +olOrderFields: Class<Outlook$OlObjectClass__olOrderFields> &
      Outlook$OlObjectClass__olOrderFields &
      145; // 145
    static +olOutlookBarGroup: Class<Outlook$OlObjectClass__olOutlookBarGroup> &
      Outlook$OlObjectClass__olOutlookBarGroup &
      66; // 66
    static +olOutlookBarGroups: Class<Outlook$OlObjectClass__olOutlookBarGroups> &
      Outlook$OlObjectClass__olOutlookBarGroups &
      65; // 65
    static +olOutlookBarPane: Class<Outlook$OlObjectClass__olOutlookBarPane> &
      Outlook$OlObjectClass__olOutlookBarPane &
      63; // 63
    static +olOutlookBarShortcut: Class<Outlook$OlObjectClass__olOutlookBarShortcut> &
      Outlook$OlObjectClass__olOutlookBarShortcut &
      68; // 68
    static +olOutlookBarShortcuts: Class<Outlook$OlObjectClass__olOutlookBarShortcuts> &
      Outlook$OlObjectClass__olOutlookBarShortcuts &
      67; // 67
    static +olOutlookBarStorage: Class<Outlook$OlObjectClass__olOutlookBarStorage> &
      Outlook$OlObjectClass__olOutlookBarStorage &
      64; // 64
    static +olOutspace: Class<Outlook$OlObjectClass__olOutspace> &
      Outlook$OlObjectClass__olOutspace &
      180; // 180
    static +olPages: Class<Outlook$OlObjectClass__olPages> &
      Outlook$OlObjectClass__olPages &
      36; // 36
    static +olPanes: Class<Outlook$OlObjectClass__olPanes> &
      Outlook$OlObjectClass__olPanes &
      62; // 62
    static +olPlaySoundRuleAction: Class<Outlook$OlObjectClass__olPlaySoundRuleAction> &
      Outlook$OlObjectClass__olPlaySoundRuleAction &
      123; // 123
    static +olPost: Class<Outlook$OlObjectClass__olPost> &
      Outlook$OlObjectClass__olPost &
      45; // 45
    static +olPropertyAccessor: Class<Outlook$OlObjectClass__olPropertyAccessor> &
      Outlook$OlObjectClass__olPropertyAccessor &
      112; // 112
    static +olPropertyPages: Class<Outlook$OlObjectClass__olPropertyPages> &
      Outlook$OlObjectClass__olPropertyPages &
      71; // 71
    static +olPropertyPageSite: Class<Outlook$OlObjectClass__olPropertyPageSite> &
      Outlook$OlObjectClass__olPropertyPageSite &
      70; // 70
    static +olRecipient: Class<Outlook$OlObjectClass__olRecipient> &
      Outlook$OlObjectClass__olRecipient &
      4; // 4
    static +olRecipients: Class<Outlook$OlObjectClass__olRecipients> &
      Outlook$OlObjectClass__olRecipients &
      17; // 17
    static +olRecurrencePattern: Class<Outlook$OlObjectClass__olRecurrencePattern> &
      Outlook$OlObjectClass__olRecurrencePattern &
      28; // 28
    static +olReminder: Class<Outlook$OlObjectClass__olReminder> &
      Outlook$OlObjectClass__olReminder &
      101; // 101
    static +olReminders: Class<Outlook$OlObjectClass__olReminders> &
      Outlook$OlObjectClass__olReminders &
      100; // 100
    static +olRemote: Class<Outlook$OlObjectClass__olRemote> &
      Outlook$OlObjectClass__olRemote &
      47; // 47
    static +olReport: Class<Outlook$OlObjectClass__olReport> &
      Outlook$OlObjectClass__olReport &
      46; // 46
    static +olResults: Class<Outlook$OlObjectClass__olResults> &
      Outlook$OlObjectClass__olResults &
      78; // 78
    static +olRow: Class<Outlook$OlObjectClass__olRow> &
      Outlook$OlObjectClass__olRow &
      121; // 121
    static +olRule: Class<Outlook$OlObjectClass__olRule> &
      Outlook$OlObjectClass__olRule &
      115; // 115
    static +olRuleAction: Class<Outlook$OlObjectClass__olRuleAction> &
      Outlook$OlObjectClass__olRuleAction &
      117; // 117
    static +olRuleActions: Class<Outlook$OlObjectClass__olRuleActions> &
      Outlook$OlObjectClass__olRuleActions &
      116; // 116
    static +olRuleCondition: Class<Outlook$OlObjectClass__olRuleCondition> &
      Outlook$OlObjectClass__olRuleCondition &
      127; // 127
    static +olRuleConditions: Class<Outlook$OlObjectClass__olRuleConditions> &
      Outlook$OlObjectClass__olRuleConditions &
      126; // 126
    static +olRules: Class<Outlook$OlObjectClass__olRules> &
      Outlook$OlObjectClass__olRules &
      114; // 114
    static +olSearch: Class<Outlook$OlObjectClass__olSearch> &
      Outlook$OlObjectClass__olSearch &
      77; // 77
    static +olSelection: Class<Outlook$OlObjectClass__olSelection> &
      Outlook$OlObjectClass__olSelection &
      74; // 74
    static +olSelectNamesDialog: Class<Outlook$OlObjectClass__olSelectNamesDialog> &
      Outlook$OlObjectClass__olSelectNamesDialog &
      109; // 109
    static +olSenderInAddressListRuleCondition: Class<Outlook$OlObjectClass__olSenderInAddressListRuleCondition> &
      Outlook$OlObjectClass__olSenderInAddressListRuleCondition &
      133; // 133
    static +olSendRuleAction: Class<Outlook$OlObjectClass__olSendRuleAction> &
      Outlook$OlObjectClass__olSendRuleAction &
      119; // 119
    static +olSharing: Class<Outlook$OlObjectClass__olSharing> &
      Outlook$OlObjectClass__olSharing &
      104; // 104
    static +olSimpleItems: Class<Outlook$OlObjectClass__olSimpleItems> &
      Outlook$OlObjectClass__olSimpleItems &
      179; // 179
    static +olSolutionsModule: Class<Outlook$OlObjectClass__olSolutionsModule> &
      Outlook$OlObjectClass__olSolutionsModule &
      177; // 177
    static +olStorageItem: Class<Outlook$OlObjectClass__olStorageItem> &
      Outlook$OlObjectClass__olStorageItem &
      113; // 113
    static +olStore: Class<Outlook$OlObjectClass__olStore> &
      Outlook$OlObjectClass__olStore &
      107; // 107
    static +olStores: Class<Outlook$OlObjectClass__olStores> &
      Outlook$OlObjectClass__olStores &
      108; // 108
    static +olSyncObject: Class<Outlook$OlObjectClass__olSyncObject> &
      Outlook$OlObjectClass__olSyncObject &
      72; // 72
    static +olSyncObjects: Class<Outlook$OlObjectClass__olSyncObjects> &
      Outlook$OlObjectClass__olSyncObjects &
      73; // 73
    static +olTable: Class<Outlook$OlObjectClass__olTable> &
      Outlook$OlObjectClass__olTable &
      120; // 120
    static +olTask: Class<Outlook$OlObjectClass__olTask> &
      Outlook$OlObjectClass__olTask &
      48; // 48
    static +olTaskRequest: Class<Outlook$OlObjectClass__olTaskRequest> &
      Outlook$OlObjectClass__olTaskRequest &
      49; // 49
    static +olTaskRequestAccept: Class<Outlook$OlObjectClass__olTaskRequestAccept> &
      Outlook$OlObjectClass__olTaskRequestAccept &
      51; // 51
    static +olTaskRequestDecline: Class<Outlook$OlObjectClass__olTaskRequestDecline> &
      Outlook$OlObjectClass__olTaskRequestDecline &
      52; // 52
    static +olTaskRequestUpdate: Class<Outlook$OlObjectClass__olTaskRequestUpdate> &
      Outlook$OlObjectClass__olTaskRequestUpdate &
      50; // 50
    static +olTasksModule: Class<Outlook$OlObjectClass__olTasksModule> &
      Outlook$OlObjectClass__olTasksModule &
      161; // 161
    static +olTextRuleCondition: Class<Outlook$OlObjectClass__olTextRuleCondition> &
      Outlook$OlObjectClass__olTextRuleCondition &
      134; // 134
    static +olUserDefinedProperties: Class<Outlook$OlObjectClass__olUserDefinedProperties> &
      Outlook$OlObjectClass__olUserDefinedProperties &
      172; // 172
    static +olUserDefinedProperty: Class<Outlook$OlObjectClass__olUserDefinedProperty> &
      Outlook$OlObjectClass__olUserDefinedProperty &
      171; // 171
    static +olUserProperties: Class<Outlook$OlObjectClass__olUserProperties> &
      Outlook$OlObjectClass__olUserProperties &
      38; // 38
    static +olUserProperty: Class<Outlook$OlObjectClass__olUserProperty> &
      Outlook$OlObjectClass__olUserProperty &
      39; // 39
    static +olView: Class<Outlook$OlObjectClass__olView> &
      Outlook$OlObjectClass__olView &
      80; // 80
    static +olViewField: Class<Outlook$OlObjectClass__olViewField> &
      Outlook$OlObjectClass__olViewField &
      142; // 142
    static +olViewFields: Class<Outlook$OlObjectClass__olViewFields> &
      Outlook$OlObjectClass__olViewFields &
      141; // 141
    static +olViewFont: Class<Outlook$OlObjectClass__olViewFont> &
      Outlook$OlObjectClass__olViewFont &
      146; // 146
    static +olViews: Class<Outlook$OlObjectClass__olViews> &
      Outlook$OlObjectClass__olViews &
      79; // 79
  }

  declare class Outlook$OlObjectClass__olAccount mixins Outlook$OlObjectClass {}
  declare class Outlook$OlObjectClass__olAccountRuleCondition
    mixins Outlook$OlObjectClass {}
  declare class Outlook$OlObjectClass__olAccounts
    mixins Outlook$OlObjectClass {}
  declare class Outlook$OlObjectClass__olAction mixins Outlook$OlObjectClass {}
  declare class Outlook$OlObjectClass__olActions mixins Outlook$OlObjectClass {}
  declare class Outlook$OlObjectClass__olAddressEntries
    mixins Outlook$OlObjectClass {}
  declare class Outlook$OlObjectClass__olAddressEntry
    mixins Outlook$OlObjectClass {}
  declare class Outlook$OlObjectClass__olAddressList
    mixins Outlook$OlObjectClass {}
  declare class Outlook$OlObjectClass__olAddressLists
    mixins Outlook$OlObjectClass {}
  declare class Outlook$OlObjectClass__olAddressRuleCondition
    mixins Outlook$OlObjectClass {}
  declare class Outlook$OlObjectClass__olApplication
    mixins Outlook$OlObjectClass {}
  declare class Outlook$OlObjectClass__olAppointment
    mixins Outlook$OlObjectClass {}
  declare class Outlook$OlObjectClass__olAssignToCategoryRuleAction
    mixins Outlook$OlObjectClass {}
  declare class Outlook$OlObjectClass__olAttachment
    mixins Outlook$OlObjectClass {}
  declare class Outlook$OlObjectClass__olAttachments
    mixins Outlook$OlObjectClass {}
  declare class Outlook$OlObjectClass__olAttachmentSelection
    mixins Outlook$OlObjectClass {}
  declare class Outlook$OlObjectClass__olAutoFormatRule
    mixins Outlook$OlObjectClass {}
  declare class Outlook$OlObjectClass__olAutoFormatRules
    mixins Outlook$OlObjectClass {}
  declare class Outlook$OlObjectClass__olCalendarModule
    mixins Outlook$OlObjectClass {}
  declare class Outlook$OlObjectClass__olCalendarSharing
    mixins Outlook$OlObjectClass {}
  declare class Outlook$OlObjectClass__olCategories
    mixins Outlook$OlObjectClass {}
  declare class Outlook$OlObjectClass__olCategory
    mixins Outlook$OlObjectClass {}
  declare class Outlook$OlObjectClass__olCategoryRuleCondition
    mixins Outlook$OlObjectClass {}
  declare class Outlook$OlObjectClass__olClassBusinessCardView
    mixins Outlook$OlObjectClass {}
  declare class Outlook$OlObjectClass__olClassCalendarView
    mixins Outlook$OlObjectClass {}
  declare class Outlook$OlObjectClass__olClassCardView
    mixins Outlook$OlObjectClass {}
  declare class Outlook$OlObjectClass__olClassIconView
    mixins Outlook$OlObjectClass {}
  declare class Outlook$OlObjectClass__olClassNavigationPane
    mixins Outlook$OlObjectClass {}
  declare class Outlook$OlObjectClass__olClassTableView
    mixins Outlook$OlObjectClass {}
  declare class Outlook$OlObjectClass__olClassTimeLineView
    mixins Outlook$OlObjectClass {}
  declare class Outlook$OlObjectClass__olClassTimeZone
    mixins Outlook$OlObjectClass {}
  declare class Outlook$OlObjectClass__olClassTimeZones
    mixins Outlook$OlObjectClass {}
  declare class Outlook$OlObjectClass__olColumn mixins Outlook$OlObjectClass {}
  declare class Outlook$OlObjectClass__olColumnFormat
    mixins Outlook$OlObjectClass {}
  declare class Outlook$OlObjectClass__olColumns mixins Outlook$OlObjectClass {}
  declare class Outlook$OlObjectClass__olConflict
    mixins Outlook$OlObjectClass {}
  declare class Outlook$OlObjectClass__olConflicts
    mixins Outlook$OlObjectClass {}
  declare class Outlook$OlObjectClass__olContact mixins Outlook$OlObjectClass {}
  declare class Outlook$OlObjectClass__olContactsModule
    mixins Outlook$OlObjectClass {}
  declare class Outlook$OlObjectClass__olConversation
    mixins Outlook$OlObjectClass {}
  declare class Outlook$OlObjectClass__olConversationHeader
    mixins Outlook$OlObjectClass {}
  declare class Outlook$OlObjectClass__olDistributionList
    mixins Outlook$OlObjectClass {}
  declare class Outlook$OlObjectClass__olDocument
    mixins Outlook$OlObjectClass {}
  declare class Outlook$OlObjectClass__olException
    mixins Outlook$OlObjectClass {}
  declare class Outlook$OlObjectClass__olExceptions
    mixins Outlook$OlObjectClass {}
  declare class Outlook$OlObjectClass__olExchangeDistributionList
    mixins Outlook$OlObjectClass {}
  declare class Outlook$OlObjectClass__olExchangeUser
    mixins Outlook$OlObjectClass {}
  declare class Outlook$OlObjectClass__olExplorer
    mixins Outlook$OlObjectClass {}
  declare class Outlook$OlObjectClass__olExplorers
    mixins Outlook$OlObjectClass {}
  declare class Outlook$OlObjectClass__olFolder mixins Outlook$OlObjectClass {}
  declare class Outlook$OlObjectClass__olFolders mixins Outlook$OlObjectClass {}
  declare class Outlook$OlObjectClass__olFormDescription
    mixins Outlook$OlObjectClass {}
  declare class Outlook$OlObjectClass__olFormNameRuleCondition
    mixins Outlook$OlObjectClass {}
  declare class Outlook$OlObjectClass__olFormRegion
    mixins Outlook$OlObjectClass {}
  declare class Outlook$OlObjectClass__olFromRssFeedRuleCondition
    mixins Outlook$OlObjectClass {}
  declare class Outlook$OlObjectClass__olFromRuleCondition
    mixins Outlook$OlObjectClass {}
  declare class Outlook$OlObjectClass__olImportanceRuleCondition
    mixins Outlook$OlObjectClass {}
  declare class Outlook$OlObjectClass__olInspector
    mixins Outlook$OlObjectClass {}
  declare class Outlook$OlObjectClass__olInspectors
    mixins Outlook$OlObjectClass {}
  declare class Outlook$OlObjectClass__olItemProperties
    mixins Outlook$OlObjectClass {}
  declare class Outlook$OlObjectClass__olItemProperty
    mixins Outlook$OlObjectClass {}
  declare class Outlook$OlObjectClass__olItems mixins Outlook$OlObjectClass {}
  declare class Outlook$OlObjectClass__olJournal mixins Outlook$OlObjectClass {}
  declare class Outlook$OlObjectClass__olJournalModule
    mixins Outlook$OlObjectClass {}
  declare class Outlook$OlObjectClass__olLink mixins Outlook$OlObjectClass {}
  declare class Outlook$OlObjectClass__olLinks mixins Outlook$OlObjectClass {}
  declare class Outlook$OlObjectClass__olMail mixins Outlook$OlObjectClass {}
  declare class Outlook$OlObjectClass__olMailModule
    mixins Outlook$OlObjectClass {}
  declare class Outlook$OlObjectClass__olMarkAsTaskRuleAction
    mixins Outlook$OlObjectClass {}
  declare class Outlook$OlObjectClass__olMeetingCancellation
    mixins Outlook$OlObjectClass {}
  declare class Outlook$OlObjectClass__olMeetingForwardNotification
    mixins Outlook$OlObjectClass {}
  declare class Outlook$OlObjectClass__olMeetingRequest
    mixins Outlook$OlObjectClass {}
  declare class Outlook$OlObjectClass__olMeetingResponseNegative
    mixins Outlook$OlObjectClass {}
  declare class Outlook$OlObjectClass__olMeetingResponsePositive
    mixins Outlook$OlObjectClass {}
  declare class Outlook$OlObjectClass__olMeetingResponseTentative
    mixins Outlook$OlObjectClass {}
  declare class Outlook$OlObjectClass__olMobile mixins Outlook$OlObjectClass {}
  declare class Outlook$OlObjectClass__olMoveOrCopyRuleAction
    mixins Outlook$OlObjectClass {}
  declare class Outlook$OlObjectClass__olNamespace
    mixins Outlook$OlObjectClass {}
  declare class Outlook$OlObjectClass__olNavigationFolder
    mixins Outlook$OlObjectClass {}
  declare class Outlook$OlObjectClass__olNavigationFolders
    mixins Outlook$OlObjectClass {}
  declare class Outlook$OlObjectClass__olNavigationGroup
    mixins Outlook$OlObjectClass {}
  declare class Outlook$OlObjectClass__olNavigationGroups
    mixins Outlook$OlObjectClass {}
  declare class Outlook$OlObjectClass__olNavigationModule
    mixins Outlook$OlObjectClass {}
  declare class Outlook$OlObjectClass__olNavigationModules
    mixins Outlook$OlObjectClass {}
  declare class Outlook$OlObjectClass__olNewItemAlertRuleAction
    mixins Outlook$OlObjectClass {}
  declare class Outlook$OlObjectClass__olNote mixins Outlook$OlObjectClass {}
  declare class Outlook$OlObjectClass__olNotesModule
    mixins Outlook$OlObjectClass {}
  declare class Outlook$OlObjectClass__olOrderField
    mixins Outlook$OlObjectClass {}
  declare class Outlook$OlObjectClass__olOrderFields
    mixins Outlook$OlObjectClass {}
  declare class Outlook$OlObjectClass__olOutlookBarGroup
    mixins Outlook$OlObjectClass {}
  declare class Outlook$OlObjectClass__olOutlookBarGroups
    mixins Outlook$OlObjectClass {}
  declare class Outlook$OlObjectClass__olOutlookBarPane
    mixins Outlook$OlObjectClass {}
  declare class Outlook$OlObjectClass__olOutlookBarShortcut
    mixins Outlook$OlObjectClass {}
  declare class Outlook$OlObjectClass__olOutlookBarShortcuts
    mixins Outlook$OlObjectClass {}
  declare class Outlook$OlObjectClass__olOutlookBarStorage
    mixins Outlook$OlObjectClass {}
  declare class Outlook$OlObjectClass__olOutspace
    mixins Outlook$OlObjectClass {}
  declare class Outlook$OlObjectClass__olPages mixins Outlook$OlObjectClass {}
  declare class Outlook$OlObjectClass__olPanes mixins Outlook$OlObjectClass {}
  declare class Outlook$OlObjectClass__olPlaySoundRuleAction
    mixins Outlook$OlObjectClass {}
  declare class Outlook$OlObjectClass__olPost mixins Outlook$OlObjectClass {}
  declare class Outlook$OlObjectClass__olPropertyAccessor
    mixins Outlook$OlObjectClass {}
  declare class Outlook$OlObjectClass__olPropertyPages
    mixins Outlook$OlObjectClass {}
  declare class Outlook$OlObjectClass__olPropertyPageSite
    mixins Outlook$OlObjectClass {}
  declare class Outlook$OlObjectClass__olRecipient
    mixins Outlook$OlObjectClass {}
  declare class Outlook$OlObjectClass__olRecipients
    mixins Outlook$OlObjectClass {}
  declare class Outlook$OlObjectClass__olRecurrencePattern
    mixins Outlook$OlObjectClass {}
  declare class Outlook$OlObjectClass__olReminder
    mixins Outlook$OlObjectClass {}
  declare class Outlook$OlObjectClass__olReminders
    mixins Outlook$OlObjectClass {}
  declare class Outlook$OlObjectClass__olRemote mixins Outlook$OlObjectClass {}
  declare class Outlook$OlObjectClass__olReport mixins Outlook$OlObjectClass {}
  declare class Outlook$OlObjectClass__olResults mixins Outlook$OlObjectClass {}
  declare class Outlook$OlObjectClass__olRow mixins Outlook$OlObjectClass {}
  declare class Outlook$OlObjectClass__olRule mixins Outlook$OlObjectClass {}
  declare class Outlook$OlObjectClass__olRuleAction
    mixins Outlook$OlObjectClass {}
  declare class Outlook$OlObjectClass__olRuleActions
    mixins Outlook$OlObjectClass {}
  declare class Outlook$OlObjectClass__olRuleCondition
    mixins Outlook$OlObjectClass {}
  declare class Outlook$OlObjectClass__olRuleConditions
    mixins Outlook$OlObjectClass {}
  declare class Outlook$OlObjectClass__olRules mixins Outlook$OlObjectClass {}
  declare class Outlook$OlObjectClass__olSearch mixins Outlook$OlObjectClass {}
  declare class Outlook$OlObjectClass__olSelection
    mixins Outlook$OlObjectClass {}
  declare class Outlook$OlObjectClass__olSelectNamesDialog
    mixins Outlook$OlObjectClass {}
  declare class Outlook$OlObjectClass__olSenderInAddressListRuleCondition
    mixins Outlook$OlObjectClass {}
  declare class Outlook$OlObjectClass__olSendRuleAction
    mixins Outlook$OlObjectClass {}
  declare class Outlook$OlObjectClass__olSharing mixins Outlook$OlObjectClass {}
  declare class Outlook$OlObjectClass__olSimpleItems
    mixins Outlook$OlObjectClass {}
  declare class Outlook$OlObjectClass__olSolutionsModule
    mixins Outlook$OlObjectClass {}
  declare class Outlook$OlObjectClass__olStorageItem
    mixins Outlook$OlObjectClass {}
  declare class Outlook$OlObjectClass__olStore mixins Outlook$OlObjectClass {}
  declare class Outlook$OlObjectClass__olStores mixins Outlook$OlObjectClass {}
  declare class Outlook$OlObjectClass__olSyncObject
    mixins Outlook$OlObjectClass {}
  declare class Outlook$OlObjectClass__olSyncObjects
    mixins Outlook$OlObjectClass {}
  declare class Outlook$OlObjectClass__olTable mixins Outlook$OlObjectClass {}
  declare class Outlook$OlObjectClass__olTask mixins Outlook$OlObjectClass {}
  declare class Outlook$OlObjectClass__olTaskRequest
    mixins Outlook$OlObjectClass {}
  declare class Outlook$OlObjectClass__olTaskRequestAccept
    mixins Outlook$OlObjectClass {}
  declare class Outlook$OlObjectClass__olTaskRequestDecline
    mixins Outlook$OlObjectClass {}
  declare class Outlook$OlObjectClass__olTaskRequestUpdate
    mixins Outlook$OlObjectClass {}
  declare class Outlook$OlObjectClass__olTasksModule
    mixins Outlook$OlObjectClass {}
  declare class Outlook$OlObjectClass__olTextRuleCondition
    mixins Outlook$OlObjectClass {}
  declare class Outlook$OlObjectClass__olUserDefinedProperties
    mixins Outlook$OlObjectClass {}
  declare class Outlook$OlObjectClass__olUserDefinedProperty
    mixins Outlook$OlObjectClass {}
  declare class Outlook$OlObjectClass__olUserProperties
    mixins Outlook$OlObjectClass {}
  declare class Outlook$OlObjectClass__olUserProperty
    mixins Outlook$OlObjectClass {}
  declare class Outlook$OlObjectClass__olView mixins Outlook$OlObjectClass {}
  declare class Outlook$OlObjectClass__olViewField
    mixins Outlook$OlObjectClass {}
  declare class Outlook$OlObjectClass__olViewFields
    mixins Outlook$OlObjectClass {}
  declare class Outlook$OlObjectClass__olViewFont
    mixins Outlook$OlObjectClass {}
  declare class Outlook$OlObjectClass__olViews mixins Outlook$OlObjectClass {}

  declare class Outlook$OlOfficeDocItemsType {
    constructor(...args: empty): mixed;
    static +olExcelWorkSheetItem: Class<Outlook$OlOfficeDocItemsType__olExcelWorkSheetItem> &
      Outlook$OlOfficeDocItemsType__olExcelWorkSheetItem &
      8; // 8
    static +olPowerPointShowItem: Class<Outlook$OlOfficeDocItemsType__olPowerPointShowItem> &
      Outlook$OlOfficeDocItemsType__olPowerPointShowItem &
      10; // 10
    static +olWordDocumentItem: Class<Outlook$OlOfficeDocItemsType__olWordDocumentItem> &
      Outlook$OlOfficeDocItemsType__olWordDocumentItem &
      9; // 9
  }

  declare class Outlook$OlOfficeDocItemsType__olExcelWorkSheetItem
    mixins Outlook$OlOfficeDocItemsType {}
  declare class Outlook$OlOfficeDocItemsType__olPowerPointShowItem
    mixins Outlook$OlOfficeDocItemsType {}
  declare class Outlook$OlOfficeDocItemsType__olWordDocumentItem
    mixins Outlook$OlOfficeDocItemsType {}

  declare class Outlook$OlOutlookBarViewType {
    constructor(...args: empty): mixed;
    static +olLargeIcon: Class<Outlook$OlOutlookBarViewType__olLargeIcon> &
      Outlook$OlOutlookBarViewType__olLargeIcon &
      0; // 0
    static +olSmallIcon: Class<Outlook$OlOutlookBarViewType__olSmallIcon> &
      Outlook$OlOutlookBarViewType__olSmallIcon &
      1; // 1
  }

  declare class Outlook$OlOutlookBarViewType__olLargeIcon
    mixins Outlook$OlOutlookBarViewType {}
  declare class Outlook$OlOutlookBarViewType__olSmallIcon
    mixins Outlook$OlOutlookBarViewType {}

  declare class Outlook$OlPageType {
    constructor(...args: empty): mixed;
    static +olPageTypePlanner: Class<Outlook$OlPageType__olPageTypePlanner> &
      Outlook$OlPageType__olPageTypePlanner &
      0; // 0
    static +olPageTypeTracker: Class<Outlook$OlPageType__olPageTypeTracker> &
      Outlook$OlPageType__olPageTypeTracker &
      1; // 1
  }

  declare class Outlook$OlPageType__olPageTypePlanner
    mixins Outlook$OlPageType {}
  declare class Outlook$OlPageType__olPageTypeTracker
    mixins Outlook$OlPageType {}

  declare class Outlook$OlPane {
    constructor(...args: empty): mixed;
    static +olFolderList: Class<Outlook$OlPane__olFolderList> &
      Outlook$OlPane__olFolderList &
      2; // 2
    static +olNavigationPane: Class<Outlook$OlPane__olNavigationPane> &
      Outlook$OlPane__olNavigationPane &
      4; // 4
    static +olOutlookBar: Class<Outlook$OlPane__olOutlookBar> &
      Outlook$OlPane__olOutlookBar &
      1; // 1
    static +olPreview: Class<Outlook$OlPane__olPreview> &
      Outlook$OlPane__olPreview &
      3; // 3
    static +olToDoBar: Class<Outlook$OlPane__olToDoBar> &
      Outlook$OlPane__olToDoBar &
      5; // 5
  }

  declare class Outlook$OlPane__olFolderList mixins Outlook$OlPane {}
  declare class Outlook$OlPane__olNavigationPane mixins Outlook$OlPane {}
  declare class Outlook$OlPane__olOutlookBar mixins Outlook$OlPane {}
  declare class Outlook$OlPane__olPreview mixins Outlook$OlPane {}
  declare class Outlook$OlPane__olToDoBar mixins Outlook$OlPane {}

  declare class Outlook$OlPermission {
    constructor(...args: empty): mixed;
    static +olDoNotForward: Class<Outlook$OlPermission__olDoNotForward> &
      Outlook$OlPermission__olDoNotForward &
      1; // 1
    static +olPermissionTemplate: Class<Outlook$OlPermission__olPermissionTemplate> &
      Outlook$OlPermission__olPermissionTemplate &
      2; // 2
    static +olUnrestricted: Class<Outlook$OlPermission__olUnrestricted> &
      Outlook$OlPermission__olUnrestricted &
      0; // 0
  }

  declare class Outlook$OlPermission__olDoNotForward
    mixins Outlook$OlPermission {}
  declare class Outlook$OlPermission__olPermissionTemplate
    mixins Outlook$OlPermission {}
  declare class Outlook$OlPermission__olUnrestricted
    mixins Outlook$OlPermission {}

  declare class Outlook$OlPermissionService {
    constructor(...args: empty): mixed;
    static +olPassport: Class<Outlook$OlPermissionService__olPassport> &
      Outlook$OlPermissionService__olPassport &
      2; // 2
    static +olUnknown: Class<Outlook$OlPermissionService__olUnknown> &
      Outlook$OlPermissionService__olUnknown &
      0; // 0
    static +olWindows: Class<Outlook$OlPermissionService__olWindows> &
      Outlook$OlPermissionService__olWindows &
      1; // 1
  }

  declare class Outlook$OlPermissionService__olPassport
    mixins Outlook$OlPermissionService {}
  declare class Outlook$OlPermissionService__olUnknown
    mixins Outlook$OlPermissionService {}
  declare class Outlook$OlPermissionService__olWindows
    mixins Outlook$OlPermissionService {}

  declare class Outlook$OlPictureAlignment {
    constructor(...args: empty): mixed;
    static +olPictureAlignmentLeft: Class<Outlook$OlPictureAlignment__olPictureAlignmentLeft> &
      Outlook$OlPictureAlignment__olPictureAlignmentLeft &
      0; // 0
    static +olPictureAlignmentTop: Class<Outlook$OlPictureAlignment__olPictureAlignmentTop> &
      Outlook$OlPictureAlignment__olPictureAlignmentTop &
      1; // 1
  }

  declare class Outlook$OlPictureAlignment__olPictureAlignmentLeft
    mixins Outlook$OlPictureAlignment {}
  declare class Outlook$OlPictureAlignment__olPictureAlignmentTop
    mixins Outlook$OlPictureAlignment {}

  declare class Outlook$OlRecipientSelectors {
    constructor(...args: empty): mixed;
    static +olShowNone: Class<Outlook$OlRecipientSelectors__olShowNone> &
      Outlook$OlRecipientSelectors__olShowNone &
      0; // 0
    static +olShowTo: Class<Outlook$OlRecipientSelectors__olShowTo> &
      Outlook$OlRecipientSelectors__olShowTo &
      1; // 1
    static +olShowToCc: Class<Outlook$OlRecipientSelectors__olShowToCc> &
      Outlook$OlRecipientSelectors__olShowToCc &
      2; // 2
    static +olShowToCcBcc: Class<Outlook$OlRecipientSelectors__olShowToCcBcc> &
      Outlook$OlRecipientSelectors__olShowToCcBcc &
      3; // 3
  }

  declare class Outlook$OlRecipientSelectors__olShowNone
    mixins Outlook$OlRecipientSelectors {}
  declare class Outlook$OlRecipientSelectors__olShowTo
    mixins Outlook$OlRecipientSelectors {}
  declare class Outlook$OlRecipientSelectors__olShowToCc
    mixins Outlook$OlRecipientSelectors {}
  declare class Outlook$OlRecipientSelectors__olShowToCcBcc
    mixins Outlook$OlRecipientSelectors {}

  declare class Outlook$OlRecurrenceState {
    constructor(...args: empty): mixed;
    static +olApptException: Class<Outlook$OlRecurrenceState__olApptException> &
      Outlook$OlRecurrenceState__olApptException &
      3; // 3
    static +olApptMaster: Class<Outlook$OlRecurrenceState__olApptMaster> &
      Outlook$OlRecurrenceState__olApptMaster &
      1; // 1
    static +olApptNotRecurring: Class<Outlook$OlRecurrenceState__olApptNotRecurring> &
      Outlook$OlRecurrenceState__olApptNotRecurring &
      0; // 0
    static +olApptOccurrence: Class<Outlook$OlRecurrenceState__olApptOccurrence> &
      Outlook$OlRecurrenceState__olApptOccurrence &
      2; // 2
  }

  declare class Outlook$OlRecurrenceState__olApptException
    mixins Outlook$OlRecurrenceState {}
  declare class Outlook$OlRecurrenceState__olApptMaster
    mixins Outlook$OlRecurrenceState {}
  declare class Outlook$OlRecurrenceState__olApptNotRecurring
    mixins Outlook$OlRecurrenceState {}
  declare class Outlook$OlRecurrenceState__olApptOccurrence
    mixins Outlook$OlRecurrenceState {}

  declare class Outlook$OlRecurrenceType {
    constructor(...args: empty): mixed;
    static +olRecursDaily: Class<Outlook$OlRecurrenceType__olRecursDaily> &
      Outlook$OlRecurrenceType__olRecursDaily &
      0; // 0
    static +olRecursMonthly: Class<Outlook$OlRecurrenceType__olRecursMonthly> &
      Outlook$OlRecurrenceType__olRecursMonthly &
      2; // 2
    static +olRecursMonthNth: Class<Outlook$OlRecurrenceType__olRecursMonthNth> &
      Outlook$OlRecurrenceType__olRecursMonthNth &
      3; // 3
    static +olRecursWeekly: Class<Outlook$OlRecurrenceType__olRecursWeekly> &
      Outlook$OlRecurrenceType__olRecursWeekly &
      1; // 1
    static +olRecursYearly: Class<Outlook$OlRecurrenceType__olRecursYearly> &
      Outlook$OlRecurrenceType__olRecursYearly &
      5; // 5
    static +olRecursYearNth: Class<Outlook$OlRecurrenceType__olRecursYearNth> &
      Outlook$OlRecurrenceType__olRecursYearNth &
      6; // 6
  }

  declare class Outlook$OlRecurrenceType__olRecursDaily
    mixins Outlook$OlRecurrenceType {}
  declare class Outlook$OlRecurrenceType__olRecursMonthly
    mixins Outlook$OlRecurrenceType {}
  declare class Outlook$OlRecurrenceType__olRecursMonthNth
    mixins Outlook$OlRecurrenceType {}
  declare class Outlook$OlRecurrenceType__olRecursWeekly
    mixins Outlook$OlRecurrenceType {}
  declare class Outlook$OlRecurrenceType__olRecursYearly
    mixins Outlook$OlRecurrenceType {}
  declare class Outlook$OlRecurrenceType__olRecursYearNth
    mixins Outlook$OlRecurrenceType {}

  declare class Outlook$OlReferenceType {
    constructor(...args: empty): mixed;
    static +olStrong: Class<Outlook$OlReferenceType__olStrong> &
      Outlook$OlReferenceType__olStrong &
      1; // 1
    static +olWeak: Class<Outlook$OlReferenceType__olWeak> &
      Outlook$OlReferenceType__olWeak &
      0; // 0
  }

  declare class Outlook$OlReferenceType__olStrong
    mixins Outlook$OlReferenceType {}
  declare class Outlook$OlReferenceType__olWeak
    mixins Outlook$OlReferenceType {}

  declare class Outlook$OlRemoteStatus {
    constructor(...args: empty): mixed;
    static +olMarkedForCopy: Class<Outlook$OlRemoteStatus__olMarkedForCopy> &
      Outlook$OlRemoteStatus__olMarkedForCopy &
      3; // 3
    static +olMarkedForDelete: Class<Outlook$OlRemoteStatus__olMarkedForDelete> &
      Outlook$OlRemoteStatus__olMarkedForDelete &
      4; // 4
    static +olMarkedForDownload: Class<Outlook$OlRemoteStatus__olMarkedForDownload> &
      Outlook$OlRemoteStatus__olMarkedForDownload &
      2; // 2
    static +olRemoteStatusNone: Class<Outlook$OlRemoteStatus__olRemoteStatusNone> &
      Outlook$OlRemoteStatus__olRemoteStatusNone &
      0; // 0
    static +olUnMarked: Class<Outlook$OlRemoteStatus__olUnMarked> &
      Outlook$OlRemoteStatus__olUnMarked &
      1; // 1
  }

  declare class Outlook$OlRemoteStatus__olMarkedForCopy
    mixins Outlook$OlRemoteStatus {}
  declare class Outlook$OlRemoteStatus__olMarkedForDelete
    mixins Outlook$OlRemoteStatus {}
  declare class Outlook$OlRemoteStatus__olMarkedForDownload
    mixins Outlook$OlRemoteStatus {}
  declare class Outlook$OlRemoteStatus__olRemoteStatusNone
    mixins Outlook$OlRemoteStatus {}
  declare class Outlook$OlRemoteStatus__olUnMarked
    mixins Outlook$OlRemoteStatus {}

  declare class Outlook$OlResponseStatus {
    constructor(...args: empty): mixed;
    static +olResponseAccepted: Class<Outlook$OlResponseStatus__olResponseAccepted> &
      Outlook$OlResponseStatus__olResponseAccepted &
      3; // 3
    static +olResponseDeclined: Class<Outlook$OlResponseStatus__olResponseDeclined> &
      Outlook$OlResponseStatus__olResponseDeclined &
      4; // 4
    static +olResponseNone: Class<Outlook$OlResponseStatus__olResponseNone> &
      Outlook$OlResponseStatus__olResponseNone &
      0; // 0
    static +olResponseNotResponded: Class<Outlook$OlResponseStatus__olResponseNotResponded> &
      Outlook$OlResponseStatus__olResponseNotResponded &
      5; // 5
    static +olResponseOrganized: Class<Outlook$OlResponseStatus__olResponseOrganized> &
      Outlook$OlResponseStatus__olResponseOrganized &
      1; // 1
    static +olResponseTentative: Class<Outlook$OlResponseStatus__olResponseTentative> &
      Outlook$OlResponseStatus__olResponseTentative &
      2; // 2
  }

  declare class Outlook$OlResponseStatus__olResponseAccepted
    mixins Outlook$OlResponseStatus {}
  declare class Outlook$OlResponseStatus__olResponseDeclined
    mixins Outlook$OlResponseStatus {}
  declare class Outlook$OlResponseStatus__olResponseNone
    mixins Outlook$OlResponseStatus {}
  declare class Outlook$OlResponseStatus__olResponseNotResponded
    mixins Outlook$OlResponseStatus {}
  declare class Outlook$OlResponseStatus__olResponseOrganized
    mixins Outlook$OlResponseStatus {}
  declare class Outlook$OlResponseStatus__olResponseTentative
    mixins Outlook$OlResponseStatus {}

  declare class Outlook$OlRuleActionType {
    constructor(...args: empty): mixed;
    static +olRuleActionAssignToCategory: Class<Outlook$OlRuleActionType__olRuleActionAssignToCategory> &
      Outlook$OlRuleActionType__olRuleActionAssignToCategory &
      2; // 2
    static +olRuleActionCcMessage: Class<Outlook$OlRuleActionType__olRuleActionCcMessage> &
      Outlook$OlRuleActionType__olRuleActionCcMessage &
      27; // 27
    static +olRuleActionClearCategories: Class<Outlook$OlRuleActionType__olRuleActionClearCategories> &
      Outlook$OlRuleActionType__olRuleActionClearCategories &
      30; // 30
    static +olRuleActionCopyToFolder: Class<Outlook$OlRuleActionType__olRuleActionCopyToFolder> &
      Outlook$OlRuleActionType__olRuleActionCopyToFolder &
      5; // 5
    static +olRuleActionCustomAction: Class<Outlook$OlRuleActionType__olRuleActionCustomAction> &
      Outlook$OlRuleActionType__olRuleActionCustomAction &
      22; // 22
    static +olRuleActionDefer: Class<Outlook$OlRuleActionType__olRuleActionDefer> &
      Outlook$OlRuleActionType__olRuleActionDefer &
      28; // 28
    static +olRuleActionDelete: Class<Outlook$OlRuleActionType__olRuleActionDelete> &
      Outlook$OlRuleActionType__olRuleActionDelete &
      3; // 3
    static +olRuleActionDeletePermanently: Class<Outlook$OlRuleActionType__olRuleActionDeletePermanently> &
      Outlook$OlRuleActionType__olRuleActionDeletePermanently &
      4; // 4
    static +olRuleActionDesktopAlert: Class<Outlook$OlRuleActionType__olRuleActionDesktopAlert> &
      Outlook$OlRuleActionType__olRuleActionDesktopAlert &
      24; // 24
    static +olRuleActionFlagClear: Class<Outlook$OlRuleActionType__olRuleActionFlagClear> &
      Outlook$OlRuleActionType__olRuleActionFlagClear &
      13; // 13
    static +olRuleActionFlagColor: Class<Outlook$OlRuleActionType__olRuleActionFlagColor> &
      Outlook$OlRuleActionType__olRuleActionFlagColor &
      12; // 12
    static +olRuleActionFlagForActionInDays: Class<Outlook$OlRuleActionType__olRuleActionFlagForActionInDays> &
      Outlook$OlRuleActionType__olRuleActionFlagForActionInDays &
      11; // 11
    static +olRuleActionForward: Class<Outlook$OlRuleActionType__olRuleActionForward> &
      Outlook$OlRuleActionType__olRuleActionForward &
      6; // 6
    static +olRuleActionForwardAsAttachment: Class<Outlook$OlRuleActionType__olRuleActionForwardAsAttachment> &
      Outlook$OlRuleActionType__olRuleActionForwardAsAttachment &
      7; // 7
    static +olRuleActionImportance: Class<Outlook$OlRuleActionType__olRuleActionImportance> &
      Outlook$OlRuleActionType__olRuleActionImportance &
      14; // 14
    static +olRuleActionMarkAsTask: Class<Outlook$OlRuleActionType__olRuleActionMarkAsTask> &
      Outlook$OlRuleActionType__olRuleActionMarkAsTask &
      29; // 29
    static +olRuleActionMarkRead: Class<Outlook$OlRuleActionType__olRuleActionMarkRead> &
      Outlook$OlRuleActionType__olRuleActionMarkRead &
      19; // 19
    static +olRuleActionMoveToFolder: Class<Outlook$OlRuleActionType__olRuleActionMoveToFolder> &
      Outlook$OlRuleActionType__olRuleActionMoveToFolder &
      1; // 1
    static +olRuleActionNewItemAlert: Class<Outlook$OlRuleActionType__olRuleActionNewItemAlert> &
      Outlook$OlRuleActionType__olRuleActionNewItemAlert &
      23; // 23
    static +olRuleActionNotifyDelivery: Class<Outlook$OlRuleActionType__olRuleActionNotifyDelivery> &
      Outlook$OlRuleActionType__olRuleActionNotifyDelivery &
      26; // 26
    static +olRuleActionNotifyRead: Class<Outlook$OlRuleActionType__olRuleActionNotifyRead> &
      Outlook$OlRuleActionType__olRuleActionNotifyRead &
      25; // 25
    static +olRuleActionPlaySound: Class<Outlook$OlRuleActionType__olRuleActionPlaySound> &
      Outlook$OlRuleActionType__olRuleActionPlaySound &
      17; // 17
    static +olRuleActionPrint: Class<Outlook$OlRuleActionType__olRuleActionPrint> &
      Outlook$OlRuleActionType__olRuleActionPrint &
      16; // 16
    static +olRuleActionRedirect: Class<Outlook$OlRuleActionType__olRuleActionRedirect> &
      Outlook$OlRuleActionType__olRuleActionRedirect &
      8; // 8
    static +olRuleActionRunScript: Class<Outlook$OlRuleActionType__olRuleActionRunScript> &
      Outlook$OlRuleActionType__olRuleActionRunScript &
      20; // 20
    static +olRuleActionSensitivity: Class<Outlook$OlRuleActionType__olRuleActionSensitivity> &
      Outlook$OlRuleActionType__olRuleActionSensitivity &
      15; // 15
    static +olRuleActionServerReply: Class<Outlook$OlRuleActionType__olRuleActionServerReply> &
      Outlook$OlRuleActionType__olRuleActionServerReply &
      9; // 9
    static +olRuleActionStartApplication: Class<Outlook$OlRuleActionType__olRuleActionStartApplication> &
      Outlook$OlRuleActionType__olRuleActionStartApplication &
      18; // 18
    static +olRuleActionStop: Class<Outlook$OlRuleActionType__olRuleActionStop> &
      Outlook$OlRuleActionType__olRuleActionStop &
      21; // 21
    static +olRuleActionTemplate: Class<Outlook$OlRuleActionType__olRuleActionTemplate> &
      Outlook$OlRuleActionType__olRuleActionTemplate &
      10; // 10
    static +olRuleActionUnknown: Class<Outlook$OlRuleActionType__olRuleActionUnknown> &
      Outlook$OlRuleActionType__olRuleActionUnknown &
      0; // 0
  }

  declare class Outlook$OlRuleActionType__olRuleActionAssignToCategory
    mixins Outlook$OlRuleActionType {}
  declare class Outlook$OlRuleActionType__olRuleActionCcMessage
    mixins Outlook$OlRuleActionType {}
  declare class Outlook$OlRuleActionType__olRuleActionClearCategories
    mixins Outlook$OlRuleActionType {}
  declare class Outlook$OlRuleActionType__olRuleActionCopyToFolder
    mixins Outlook$OlRuleActionType {}
  declare class Outlook$OlRuleActionType__olRuleActionCustomAction
    mixins Outlook$OlRuleActionType {}
  declare class Outlook$OlRuleActionType__olRuleActionDefer
    mixins Outlook$OlRuleActionType {}
  declare class Outlook$OlRuleActionType__olRuleActionDelete
    mixins Outlook$OlRuleActionType {}
  declare class Outlook$OlRuleActionType__olRuleActionDeletePermanently
    mixins Outlook$OlRuleActionType {}
  declare class Outlook$OlRuleActionType__olRuleActionDesktopAlert
    mixins Outlook$OlRuleActionType {}
  declare class Outlook$OlRuleActionType__olRuleActionFlagClear
    mixins Outlook$OlRuleActionType {}
  declare class Outlook$OlRuleActionType__olRuleActionFlagColor
    mixins Outlook$OlRuleActionType {}
  declare class Outlook$OlRuleActionType__olRuleActionFlagForActionInDays
    mixins Outlook$OlRuleActionType {}
  declare class Outlook$OlRuleActionType__olRuleActionForward
    mixins Outlook$OlRuleActionType {}
  declare class Outlook$OlRuleActionType__olRuleActionForwardAsAttachment
    mixins Outlook$OlRuleActionType {}
  declare class Outlook$OlRuleActionType__olRuleActionImportance
    mixins Outlook$OlRuleActionType {}
  declare class Outlook$OlRuleActionType__olRuleActionMarkAsTask
    mixins Outlook$OlRuleActionType {}
  declare class Outlook$OlRuleActionType__olRuleActionMarkRead
    mixins Outlook$OlRuleActionType {}
  declare class Outlook$OlRuleActionType__olRuleActionMoveToFolder
    mixins Outlook$OlRuleActionType {}
  declare class Outlook$OlRuleActionType__olRuleActionNewItemAlert
    mixins Outlook$OlRuleActionType {}
  declare class Outlook$OlRuleActionType__olRuleActionNotifyDelivery
    mixins Outlook$OlRuleActionType {}
  declare class Outlook$OlRuleActionType__olRuleActionNotifyRead
    mixins Outlook$OlRuleActionType {}
  declare class Outlook$OlRuleActionType__olRuleActionPlaySound
    mixins Outlook$OlRuleActionType {}
  declare class Outlook$OlRuleActionType__olRuleActionPrint
    mixins Outlook$OlRuleActionType {}
  declare class Outlook$OlRuleActionType__olRuleActionRedirect
    mixins Outlook$OlRuleActionType {}
  declare class Outlook$OlRuleActionType__olRuleActionRunScript
    mixins Outlook$OlRuleActionType {}
  declare class Outlook$OlRuleActionType__olRuleActionSensitivity
    mixins Outlook$OlRuleActionType {}
  declare class Outlook$OlRuleActionType__olRuleActionServerReply
    mixins Outlook$OlRuleActionType {}
  declare class Outlook$OlRuleActionType__olRuleActionStartApplication
    mixins Outlook$OlRuleActionType {}
  declare class Outlook$OlRuleActionType__olRuleActionStop
    mixins Outlook$OlRuleActionType {}
  declare class Outlook$OlRuleActionType__olRuleActionTemplate
    mixins Outlook$OlRuleActionType {}
  declare class Outlook$OlRuleActionType__olRuleActionUnknown
    mixins Outlook$OlRuleActionType {}

  declare class Outlook$OlRuleConditionType {
    constructor(...args: empty): mixed;
    static +olConditionAccount: Class<Outlook$OlRuleConditionType__olConditionAccount> &
      Outlook$OlRuleConditionType__olConditionAccount &
      3; // 3
    static +olConditionAnyCategory: Class<Outlook$OlRuleConditionType__olConditionAnyCategory> &
      Outlook$OlRuleConditionType__olConditionAnyCategory &
      29; // 29
    static +olConditionBody: Class<Outlook$OlRuleConditionType__olConditionBody> &
      Outlook$OlRuleConditionType__olConditionBody &
      13; // 13
    static +olConditionBodyOrSubject: Class<Outlook$OlRuleConditionType__olConditionBodyOrSubject> &
      Outlook$OlRuleConditionType__olConditionBodyOrSubject &
      14; // 14
    static +olConditionCategory: Class<Outlook$OlRuleConditionType__olConditionCategory> &
      Outlook$OlRuleConditionType__olConditionCategory &
      18; // 18
    static +olConditionCc: Class<Outlook$OlRuleConditionType__olConditionCc> &
      Outlook$OlRuleConditionType__olConditionCc &
      9; // 9
    static +olConditionDateRange: Class<Outlook$OlRuleConditionType__olConditionDateRange> &
      Outlook$OlRuleConditionType__olConditionDateRange &
      22; // 22
    static +olConditionFlaggedForAction: Class<Outlook$OlRuleConditionType__olConditionFlaggedForAction> &
      Outlook$OlRuleConditionType__olConditionFlaggedForAction &
      8; // 8
    static +olConditionFormName: Class<Outlook$OlRuleConditionType__olConditionFormName> &
      Outlook$OlRuleConditionType__olConditionFormName &
      23; // 23
    static +olConditionFrom: Class<Outlook$OlRuleConditionType__olConditionFrom> &
      Outlook$OlRuleConditionType__olConditionFrom &
      1; // 1
    static +olConditionFromAnyRssFeed: Class<Outlook$OlRuleConditionType__olConditionFromAnyRssFeed> &
      Outlook$OlRuleConditionType__olConditionFromAnyRssFeed &
      31; // 31
    static +olConditionFromRssFeed: Class<Outlook$OlRuleConditionType__olConditionFromRssFeed> &
      Outlook$OlRuleConditionType__olConditionFromRssFeed &
      30; // 30
    static +olConditionHasAttachment: Class<Outlook$OlRuleConditionType__olConditionHasAttachment> &
      Outlook$OlRuleConditionType__olConditionHasAttachment &
      20; // 20
    static +olConditionImportance: Class<Outlook$OlRuleConditionType__olConditionImportance> &
      Outlook$OlRuleConditionType__olConditionImportance &
      6; // 6
    static +olConditionLocalMachineOnly: Class<Outlook$OlRuleConditionType__olConditionLocalMachineOnly> &
      Outlook$OlRuleConditionType__olConditionLocalMachineOnly &
      27; // 27
    static +olConditionMeetingInviteOrUpdate: Class<Outlook$OlRuleConditionType__olConditionMeetingInviteOrUpdate> &
      Outlook$OlRuleConditionType__olConditionMeetingInviteOrUpdate &
      26; // 26
    static +olConditionMessageHeader: Class<Outlook$OlRuleConditionType__olConditionMessageHeader> &
      Outlook$OlRuleConditionType__olConditionMessageHeader &
      15; // 15
    static +olConditionNotTo: Class<Outlook$OlRuleConditionType__olConditionNotTo> &
      Outlook$OlRuleConditionType__olConditionNotTo &
      11; // 11
    static +olConditionOnlyToMe: Class<Outlook$OlRuleConditionType__olConditionOnlyToMe> &
      Outlook$OlRuleConditionType__olConditionOnlyToMe &
      4; // 4
    static +olConditionOOF: Class<Outlook$OlRuleConditionType__olConditionOOF> &
      Outlook$OlRuleConditionType__olConditionOOF &
      19; // 19
    static +olConditionOtherMachine: Class<Outlook$OlRuleConditionType__olConditionOtherMachine> &
      Outlook$OlRuleConditionType__olConditionOtherMachine &
      28; // 28
    static +olConditionProperty: Class<Outlook$OlRuleConditionType__olConditionProperty> &
      Outlook$OlRuleConditionType__olConditionProperty &
      24; // 24
    static +olConditionRecipientAddress: Class<Outlook$OlRuleConditionType__olConditionRecipientAddress> &
      Outlook$OlRuleConditionType__olConditionRecipientAddress &
      16; // 16
    static +olConditionSenderAddress: Class<Outlook$OlRuleConditionType__olConditionSenderAddress> &
      Outlook$OlRuleConditionType__olConditionSenderAddress &
      17; // 17
    static +olConditionSenderInAddressBook: Class<Outlook$OlRuleConditionType__olConditionSenderInAddressBook> &
      Outlook$OlRuleConditionType__olConditionSenderInAddressBook &
      25; // 25
    static +olConditionSensitivity: Class<Outlook$OlRuleConditionType__olConditionSensitivity> &
      Outlook$OlRuleConditionType__olConditionSensitivity &
      7; // 7
    static +olConditionSentTo: Class<Outlook$OlRuleConditionType__olConditionSentTo> &
      Outlook$OlRuleConditionType__olConditionSentTo &
      12; // 12
    static +olConditionSizeRange: Class<Outlook$OlRuleConditionType__olConditionSizeRange> &
      Outlook$OlRuleConditionType__olConditionSizeRange &
      21; // 21
    static +olConditionSubject: Class<Outlook$OlRuleConditionType__olConditionSubject> &
      Outlook$OlRuleConditionType__olConditionSubject &
      2; // 2
    static +olConditionTo: Class<Outlook$OlRuleConditionType__olConditionTo> &
      Outlook$OlRuleConditionType__olConditionTo &
      5; // 5
    static +olConditionToOrCc: Class<Outlook$OlRuleConditionType__olConditionToOrCc> &
      Outlook$OlRuleConditionType__olConditionToOrCc &
      10; // 10
    static +olConditionUnknown: Class<Outlook$OlRuleConditionType__olConditionUnknown> &
      Outlook$OlRuleConditionType__olConditionUnknown &
      0; // 0
  }

  declare class Outlook$OlRuleConditionType__olConditionAccount
    mixins Outlook$OlRuleConditionType {}
  declare class Outlook$OlRuleConditionType__olConditionAnyCategory
    mixins Outlook$OlRuleConditionType {}
  declare class Outlook$OlRuleConditionType__olConditionBody
    mixins Outlook$OlRuleConditionType {}
  declare class Outlook$OlRuleConditionType__olConditionBodyOrSubject
    mixins Outlook$OlRuleConditionType {}
  declare class Outlook$OlRuleConditionType__olConditionCategory
    mixins Outlook$OlRuleConditionType {}
  declare class Outlook$OlRuleConditionType__olConditionCc
    mixins Outlook$OlRuleConditionType {}
  declare class Outlook$OlRuleConditionType__olConditionDateRange
    mixins Outlook$OlRuleConditionType {}
  declare class Outlook$OlRuleConditionType__olConditionFlaggedForAction
    mixins Outlook$OlRuleConditionType {}
  declare class Outlook$OlRuleConditionType__olConditionFormName
    mixins Outlook$OlRuleConditionType {}
  declare class Outlook$OlRuleConditionType__olConditionFrom
    mixins Outlook$OlRuleConditionType {}
  declare class Outlook$OlRuleConditionType__olConditionFromAnyRssFeed
    mixins Outlook$OlRuleConditionType {}
  declare class Outlook$OlRuleConditionType__olConditionFromRssFeed
    mixins Outlook$OlRuleConditionType {}
  declare class Outlook$OlRuleConditionType__olConditionHasAttachment
    mixins Outlook$OlRuleConditionType {}
  declare class Outlook$OlRuleConditionType__olConditionImportance
    mixins Outlook$OlRuleConditionType {}
  declare class Outlook$OlRuleConditionType__olConditionLocalMachineOnly
    mixins Outlook$OlRuleConditionType {}
  declare class Outlook$OlRuleConditionType__olConditionMeetingInviteOrUpdate
    mixins Outlook$OlRuleConditionType {}
  declare class Outlook$OlRuleConditionType__olConditionMessageHeader
    mixins Outlook$OlRuleConditionType {}
  declare class Outlook$OlRuleConditionType__olConditionNotTo
    mixins Outlook$OlRuleConditionType {}
  declare class Outlook$OlRuleConditionType__olConditionOnlyToMe
    mixins Outlook$OlRuleConditionType {}
  declare class Outlook$OlRuleConditionType__olConditionOOF
    mixins Outlook$OlRuleConditionType {}
  declare class Outlook$OlRuleConditionType__olConditionOtherMachine
    mixins Outlook$OlRuleConditionType {}
  declare class Outlook$OlRuleConditionType__olConditionProperty
    mixins Outlook$OlRuleConditionType {}
  declare class Outlook$OlRuleConditionType__olConditionRecipientAddress
    mixins Outlook$OlRuleConditionType {}
  declare class Outlook$OlRuleConditionType__olConditionSenderAddress
    mixins Outlook$OlRuleConditionType {}
  declare class Outlook$OlRuleConditionType__olConditionSenderInAddressBook
    mixins Outlook$OlRuleConditionType {}
  declare class Outlook$OlRuleConditionType__olConditionSensitivity
    mixins Outlook$OlRuleConditionType {}
  declare class Outlook$OlRuleConditionType__olConditionSentTo
    mixins Outlook$OlRuleConditionType {}
  declare class Outlook$OlRuleConditionType__olConditionSizeRange
    mixins Outlook$OlRuleConditionType {}
  declare class Outlook$OlRuleConditionType__olConditionSubject
    mixins Outlook$OlRuleConditionType {}
  declare class Outlook$OlRuleConditionType__olConditionTo
    mixins Outlook$OlRuleConditionType {}
  declare class Outlook$OlRuleConditionType__olConditionToOrCc
    mixins Outlook$OlRuleConditionType {}
  declare class Outlook$OlRuleConditionType__olConditionUnknown
    mixins Outlook$OlRuleConditionType {}

  declare class Outlook$OlRuleExecuteOption {
    constructor(...args: empty): mixed;
    static +olRuleExecuteAllMessages: Class<Outlook$OlRuleExecuteOption__olRuleExecuteAllMessages> &
      Outlook$OlRuleExecuteOption__olRuleExecuteAllMessages &
      0; // 0
    static +olRuleExecuteReadMessages: Class<Outlook$OlRuleExecuteOption__olRuleExecuteReadMessages> &
      Outlook$OlRuleExecuteOption__olRuleExecuteReadMessages &
      1; // 1
    static +olRuleExecuteUnreadMessages: Class<Outlook$OlRuleExecuteOption__olRuleExecuteUnreadMessages> &
      Outlook$OlRuleExecuteOption__olRuleExecuteUnreadMessages &
      2; // 2
  }

  declare class Outlook$OlRuleExecuteOption__olRuleExecuteAllMessages
    mixins Outlook$OlRuleExecuteOption {}
  declare class Outlook$OlRuleExecuteOption__olRuleExecuteReadMessages
    mixins Outlook$OlRuleExecuteOption {}
  declare class Outlook$OlRuleExecuteOption__olRuleExecuteUnreadMessages
    mixins Outlook$OlRuleExecuteOption {}

  declare class Outlook$OlRuleType {
    constructor(...args: empty): mixed;
    static +olRuleReceive: Class<Outlook$OlRuleType__olRuleReceive> &
      Outlook$OlRuleType__olRuleReceive &
      0; // 0
    static +olRuleSend: Class<Outlook$OlRuleType__olRuleSend> &
      Outlook$OlRuleType__olRuleSend &
      1; // 1
  }

  declare class Outlook$OlRuleType__olRuleReceive mixins Outlook$OlRuleType {}
  declare class Outlook$OlRuleType__olRuleSend mixins Outlook$OlRuleType {}

  declare class Outlook$OlSaveAsType {
    constructor(...args: empty): mixed;
    static +olDoc: Class<Outlook$OlSaveAsType__olDoc> &
      Outlook$OlSaveAsType__olDoc &
      4; // 4
    static +olHTML: Class<Outlook$OlSaveAsType__olHTML> &
      Outlook$OlSaveAsType__olHTML &
      5; // 5
    static +olICal: Class<Outlook$OlSaveAsType__olICal> &
      Outlook$OlSaveAsType__olICal &
      8; // 8
    static +olMHTML: Class<Outlook$OlSaveAsType__olMHTML> &
      Outlook$OlSaveAsType__olMHTML &
      10; // 10
    static +olMSG: Class<Outlook$OlSaveAsType__olMSG> &
      Outlook$OlSaveAsType__olMSG &
      3; // 3
    static +olMSGUnicode: Class<Outlook$OlSaveAsType__olMSGUnicode> &
      Outlook$OlSaveAsType__olMSGUnicode &
      9; // 9
    static +olRTF: Class<Outlook$OlSaveAsType__olRTF> &
      Outlook$OlSaveAsType__olRTF &
      1; // 1
    static +olTemplate: Class<Outlook$OlSaveAsType__olTemplate> &
      Outlook$OlSaveAsType__olTemplate &
      2; // 2
    static +olTXT: Class<Outlook$OlSaveAsType__olTXT> &
      Outlook$OlSaveAsType__olTXT &
      0; // 0
    static +olVCal: Class<Outlook$OlSaveAsType__olVCal> &
      Outlook$OlSaveAsType__olVCal &
      7; // 7
    static +olVCard: Class<Outlook$OlSaveAsType__olVCard> &
      Outlook$OlSaveAsType__olVCard &
      6; // 6
  }

  declare class Outlook$OlSaveAsType__olDoc mixins Outlook$OlSaveAsType {}
  declare class Outlook$OlSaveAsType__olHTML mixins Outlook$OlSaveAsType {}
  declare class Outlook$OlSaveAsType__olICal mixins Outlook$OlSaveAsType {}
  declare class Outlook$OlSaveAsType__olMHTML mixins Outlook$OlSaveAsType {}
  declare class Outlook$OlSaveAsType__olMSG mixins Outlook$OlSaveAsType {}
  declare class Outlook$OlSaveAsType__olMSGUnicode
    mixins Outlook$OlSaveAsType {}
  declare class Outlook$OlSaveAsType__olRTF mixins Outlook$OlSaveAsType {}
  declare class Outlook$OlSaveAsType__olTemplate mixins Outlook$OlSaveAsType {}
  declare class Outlook$OlSaveAsType__olTXT mixins Outlook$OlSaveAsType {}
  declare class Outlook$OlSaveAsType__olVCal mixins Outlook$OlSaveAsType {}
  declare class Outlook$OlSaveAsType__olVCard mixins Outlook$OlSaveAsType {}

  declare class Outlook$OlScrollBars {
    constructor(...args: empty): mixed;
    static +olScrollBarsBoth: Class<Outlook$OlScrollBars__olScrollBarsBoth> &
      Outlook$OlScrollBars__olScrollBarsBoth &
      3; // 3
    static +olScrollBarsHorizontal: Class<Outlook$OlScrollBars__olScrollBarsHorizontal> &
      Outlook$OlScrollBars__olScrollBarsHorizontal &
      1; // 1
    static +olScrollBarsNone: Class<Outlook$OlScrollBars__olScrollBarsNone> &
      Outlook$OlScrollBars__olScrollBarsNone &
      0; // 0
    static +olScrollBarsVertical: Class<Outlook$OlScrollBars__olScrollBarsVertical> &
      Outlook$OlScrollBars__olScrollBarsVertical &
      2; // 2
  }

  declare class Outlook$OlScrollBars__olScrollBarsBoth
    mixins Outlook$OlScrollBars {}
  declare class Outlook$OlScrollBars__olScrollBarsHorizontal
    mixins Outlook$OlScrollBars {}
  declare class Outlook$OlScrollBars__olScrollBarsNone
    mixins Outlook$OlScrollBars {}
  declare class Outlook$OlScrollBars__olScrollBarsVertical
    mixins Outlook$OlScrollBars {}

  declare class Outlook$OlSearchScope {
    constructor(...args: empty): mixed;
    static +olSearchScopeAllFolders: Class<Outlook$OlSearchScope__olSearchScopeAllFolders> &
      Outlook$OlSearchScope__olSearchScopeAllFolders &
      1; // 1
    static +olSearchScopeAllOutlookItems: Class<Outlook$OlSearchScope__olSearchScopeAllOutlookItems> &
      Outlook$OlSearchScope__olSearchScopeAllOutlookItems &
      2; // 2
    static +olSearchScopeCurrentFolder: Class<Outlook$OlSearchScope__olSearchScopeCurrentFolder> &
      Outlook$OlSearchScope__olSearchScopeCurrentFolder &
      0; // 0
    static +olSearchScopeSubfolders: Class<Outlook$OlSearchScope__olSearchScopeSubfolders> &
      Outlook$OlSearchScope__olSearchScopeSubfolders &
      3; // 3
  }

  declare class Outlook$OlSearchScope__olSearchScopeAllFolders
    mixins Outlook$OlSearchScope {}
  declare class Outlook$OlSearchScope__olSearchScopeAllOutlookItems
    mixins Outlook$OlSearchScope {}
  declare class Outlook$OlSearchScope__olSearchScopeCurrentFolder
    mixins Outlook$OlSearchScope {}
  declare class Outlook$OlSearchScope__olSearchScopeSubfolders
    mixins Outlook$OlSearchScope {}

  declare class Outlook$OlSelectionContents {
    constructor(...args: empty): mixed;
    static +olConversationHeaders: Class<Outlook$OlSelectionContents__olConversationHeaders> &
      Outlook$OlSelectionContents__olConversationHeaders &
      1; // 1
  }

  declare class Outlook$OlSelectionContents__olConversationHeaders
    mixins Outlook$OlSelectionContents {}

  declare class Outlook$OlSelectionLocation {
    constructor(...args: empty): mixed;
    static +olAttachmentWell: Class<Outlook$OlSelectionLocation__olAttachmentWell> &
      Outlook$OlSelectionLocation__olAttachmentWell &
      4; // 4
    static +olDailyTaskList: Class<Outlook$OlSelectionLocation__olDailyTaskList> &
      Outlook$OlSelectionLocation__olDailyTaskList &
      3; // 3
    static +olToDoBarAppointmentList: Class<Outlook$OlSelectionLocation__olToDoBarAppointmentList> &
      Outlook$OlSelectionLocation__olToDoBarAppointmentList &
      2; // 2
    static +olToDoBarTaskList: Class<Outlook$OlSelectionLocation__olToDoBarTaskList> &
      Outlook$OlSelectionLocation__olToDoBarTaskList &
      1; // 1
    static +olViewList: Class<Outlook$OlSelectionLocation__olViewList> &
      Outlook$OlSelectionLocation__olViewList &
      0; // 0
  }

  declare class Outlook$OlSelectionLocation__olAttachmentWell
    mixins Outlook$OlSelectionLocation {}
  declare class Outlook$OlSelectionLocation__olDailyTaskList
    mixins Outlook$OlSelectionLocation {}
  declare class Outlook$OlSelectionLocation__olToDoBarAppointmentList
    mixins Outlook$OlSelectionLocation {}
  declare class Outlook$OlSelectionLocation__olToDoBarTaskList
    mixins Outlook$OlSelectionLocation {}
  declare class Outlook$OlSelectionLocation__olViewList
    mixins Outlook$OlSelectionLocation {}

  declare class Outlook$OlSensitivity {
    constructor(...args: empty): mixed;
    static +olConfidential: Class<Outlook$OlSensitivity__olConfidential> &
      Outlook$OlSensitivity__olConfidential &
      3; // 3
    static +olNormal: Class<Outlook$OlSensitivity__olNormal> &
      Outlook$OlSensitivity__olNormal &
      0; // 0
    static +olPersonal: Class<Outlook$OlSensitivity__olPersonal> &
      Outlook$OlSensitivity__olPersonal &
      1; // 1
    static +olPrivate: Class<Outlook$OlSensitivity__olPrivate> &
      Outlook$OlSensitivity__olPrivate &
      2; // 2
  }

  declare class Outlook$OlSensitivity__olConfidential
    mixins Outlook$OlSensitivity {}
  declare class Outlook$OlSensitivity__olNormal mixins Outlook$OlSensitivity {}
  declare class Outlook$OlSensitivity__olPersonal
    mixins Outlook$OlSensitivity {}
  declare class Outlook$OlSensitivity__olPrivate mixins Outlook$OlSensitivity {}

  declare class Outlook$OlSharingMsgType {
    constructor(...args: empty): mixed;
    static +olSharingMsgTypeInvite: Class<Outlook$OlSharingMsgType__olSharingMsgTypeInvite> &
      Outlook$OlSharingMsgType__olSharingMsgTypeInvite &
      2; // 2
    static +olSharingMsgTypeInviteAndRequest: Class<Outlook$OlSharingMsgType__olSharingMsgTypeInviteAndRequest> &
      Outlook$OlSharingMsgType__olSharingMsgTypeInviteAndRequest &
      3; // 3
    static +olSharingMsgTypeRequest: Class<Outlook$OlSharingMsgType__olSharingMsgTypeRequest> &
      Outlook$OlSharingMsgType__olSharingMsgTypeRequest &
      1; // 1
    static +olSharingMsgTypeResponseAllow: Class<Outlook$OlSharingMsgType__olSharingMsgTypeResponseAllow> &
      Outlook$OlSharingMsgType__olSharingMsgTypeResponseAllow &
      4; // 4
    static +olSharingMsgTypeResponseDeny: Class<Outlook$OlSharingMsgType__olSharingMsgTypeResponseDeny> &
      Outlook$OlSharingMsgType__olSharingMsgTypeResponseDeny &
      5; // 5
    static +olSharingMsgTypeUnknown: Class<Outlook$OlSharingMsgType__olSharingMsgTypeUnknown> &
      Outlook$OlSharingMsgType__olSharingMsgTypeUnknown &
      0; // 0
  }

  declare class Outlook$OlSharingMsgType__olSharingMsgTypeInvite
    mixins Outlook$OlSharingMsgType {}
  declare class Outlook$OlSharingMsgType__olSharingMsgTypeInviteAndRequest
    mixins Outlook$OlSharingMsgType {}
  declare class Outlook$OlSharingMsgType__olSharingMsgTypeRequest
    mixins Outlook$OlSharingMsgType {}
  declare class Outlook$OlSharingMsgType__olSharingMsgTypeResponseAllow
    mixins Outlook$OlSharingMsgType {}
  declare class Outlook$OlSharingMsgType__olSharingMsgTypeResponseDeny
    mixins Outlook$OlSharingMsgType {}
  declare class Outlook$OlSharingMsgType__olSharingMsgTypeUnknown
    mixins Outlook$OlSharingMsgType {}

  declare class Outlook$OlSharingProvider {
    constructor(...args: empty): mixed;
    static +olProviderExchange: Class<Outlook$OlSharingProvider__olProviderExchange> &
      Outlook$OlSharingProvider__olProviderExchange &
      1; // 1
    static +olProviderFederate: Class<Outlook$OlSharingProvider__olProviderFederate> &
      Outlook$OlSharingProvider__olProviderFederate &
      7; // 7
    static +olProviderICal: Class<Outlook$OlSharingProvider__olProviderICal> &
      Outlook$OlSharingProvider__olProviderICal &
      4; // 4
    static +olProviderPubCal: Class<Outlook$OlSharingProvider__olProviderPubCal> &
      Outlook$OlSharingProvider__olProviderPubCal &
      3; // 3
    static +olProviderRSS: Class<Outlook$OlSharingProvider__olProviderRSS> &
      Outlook$OlSharingProvider__olProviderRSS &
      6; // 6
    static +olProviderSharePoint: Class<Outlook$OlSharingProvider__olProviderSharePoint> &
      Outlook$OlSharingProvider__olProviderSharePoint &
      5; // 5
    static +olProviderUnknown: Class<Outlook$OlSharingProvider__olProviderUnknown> &
      Outlook$OlSharingProvider__olProviderUnknown &
      0; // 0
    static +olProviderWebCal: Class<Outlook$OlSharingProvider__olProviderWebCal> &
      Outlook$OlSharingProvider__olProviderWebCal &
      2; // 2
  }

  declare class Outlook$OlSharingProvider__olProviderExchange
    mixins Outlook$OlSharingProvider {}
  declare class Outlook$OlSharingProvider__olProviderFederate
    mixins Outlook$OlSharingProvider {}
  declare class Outlook$OlSharingProvider__olProviderICal
    mixins Outlook$OlSharingProvider {}
  declare class Outlook$OlSharingProvider__olProviderPubCal
    mixins Outlook$OlSharingProvider {}
  declare class Outlook$OlSharingProvider__olProviderRSS
    mixins Outlook$OlSharingProvider {}
  declare class Outlook$OlSharingProvider__olProviderSharePoint
    mixins Outlook$OlSharingProvider {}
  declare class Outlook$OlSharingProvider__olProviderUnknown
    mixins Outlook$OlSharingProvider {}
  declare class Outlook$OlSharingProvider__olProviderWebCal
    mixins Outlook$OlSharingProvider {}

  declare class Outlook$OlShiftState {
    constructor(...args: empty): mixed;
    static +olShiftStateAltMask: Class<Outlook$OlShiftState__olShiftStateAltMask> &
      Outlook$OlShiftState__olShiftStateAltMask &
      4; // 4
    static +olShiftStateCtrlMask: Class<Outlook$OlShiftState__olShiftStateCtrlMask> &
      Outlook$OlShiftState__olShiftStateCtrlMask &
      2; // 2
    static +olShiftStateShiftMask: Class<Outlook$OlShiftState__olShiftStateShiftMask> &
      Outlook$OlShiftState__olShiftStateShiftMask &
      1; // 1
  }

  declare class Outlook$OlShiftState__olShiftStateAltMask
    mixins Outlook$OlShiftState {}
  declare class Outlook$OlShiftState__olShiftStateCtrlMask
    mixins Outlook$OlShiftState {}
  declare class Outlook$OlShiftState__olShiftStateShiftMask
    mixins Outlook$OlShiftState {}

  declare class Outlook$OlShowItemCount {
    constructor(...args: empty): mixed;
    static +olNoItemCount: Class<Outlook$OlShowItemCount__olNoItemCount> &
      Outlook$OlShowItemCount__olNoItemCount &
      0; // 0
    static +olShowTotalItemCount: Class<Outlook$OlShowItemCount__olShowTotalItemCount> &
      Outlook$OlShowItemCount__olShowTotalItemCount &
      2; // 2
    static +olShowUnreadItemCount: Class<Outlook$OlShowItemCount__olShowUnreadItemCount> &
      Outlook$OlShowItemCount__olShowUnreadItemCount &
      1; // 1
  }

  declare class Outlook$OlShowItemCount__olNoItemCount
    mixins Outlook$OlShowItemCount {}
  declare class Outlook$OlShowItemCount__olShowTotalItemCount
    mixins Outlook$OlShowItemCount {}
  declare class Outlook$OlShowItemCount__olShowUnreadItemCount
    mixins Outlook$OlShowItemCount {}

  declare class Outlook$OlSolutionScope {
    constructor(...args: empty): mixed;
    static +olHideInDefaultModules: Class<Outlook$OlSolutionScope__olHideInDefaultModules> &
      Outlook$OlSolutionScope__olHideInDefaultModules &
      0; // 0
    static +olShowInDefaultModules: Class<Outlook$OlSolutionScope__olShowInDefaultModules> &
      Outlook$OlSolutionScope__olShowInDefaultModules &
      1; // 1
  }

  declare class Outlook$OlSolutionScope__olHideInDefaultModules
    mixins Outlook$OlSolutionScope {}
  declare class Outlook$OlSolutionScope__olShowInDefaultModules
    mixins Outlook$OlSolutionScope {}

  declare class Outlook$OlSortOrder {
    constructor(...args: empty): mixed;
    static +olAscending: Class<Outlook$OlSortOrder__olAscending> &
      Outlook$OlSortOrder__olAscending &
      1; // 1
    static +olDescending: Class<Outlook$OlSortOrder__olDescending> &
      Outlook$OlSortOrder__olDescending &
      2; // 2
    static +olSortNone: Class<Outlook$OlSortOrder__olSortNone> &
      Outlook$OlSortOrder__olSortNone &
      0; // 0
  }

  declare class Outlook$OlSortOrder__olAscending mixins Outlook$OlSortOrder {}
  declare class Outlook$OlSortOrder__olDescending mixins Outlook$OlSortOrder {}
  declare class Outlook$OlSortOrder__olSortNone mixins Outlook$OlSortOrder {}

  declare class Outlook$OlSpecialFolders {
    constructor(...args: empty): mixed;
    static +olSpecialFolderAllTasks: Class<Outlook$OlSpecialFolders__olSpecialFolderAllTasks> &
      Outlook$OlSpecialFolders__olSpecialFolderAllTasks &
      0; // 0
    static +olSpecialFolderReminders: Class<Outlook$OlSpecialFolders__olSpecialFolderReminders> &
      Outlook$OlSpecialFolders__olSpecialFolderReminders &
      1; // 1
  }

  declare class Outlook$OlSpecialFolders__olSpecialFolderAllTasks
    mixins Outlook$OlSpecialFolders {}
  declare class Outlook$OlSpecialFolders__olSpecialFolderReminders
    mixins Outlook$OlSpecialFolders {}

  declare class Outlook$OlStorageIdentifierType {
    constructor(...args: empty): mixed;
    static +olIdentifyByEntryID: Class<Outlook$OlStorageIdentifierType__olIdentifyByEntryID> &
      Outlook$OlStorageIdentifierType__olIdentifyByEntryID &
      1; // 1
    static +olIdentifyByMessageClass: Class<Outlook$OlStorageIdentifierType__olIdentifyByMessageClass> &
      Outlook$OlStorageIdentifierType__olIdentifyByMessageClass &
      2; // 2
    static +olIdentifyBySubject: Class<Outlook$OlStorageIdentifierType__olIdentifyBySubject> &
      Outlook$OlStorageIdentifierType__olIdentifyBySubject &
      0; // 0
  }

  declare class Outlook$OlStorageIdentifierType__olIdentifyByEntryID
    mixins Outlook$OlStorageIdentifierType {}
  declare class Outlook$OlStorageIdentifierType__olIdentifyByMessageClass
    mixins Outlook$OlStorageIdentifierType {}
  declare class Outlook$OlStorageIdentifierType__olIdentifyBySubject
    mixins Outlook$OlStorageIdentifierType {}

  declare class Outlook$OlStoreType {
    constructor(...args: empty): mixed;
    static +olStoreANSI: Class<Outlook$OlStoreType__olStoreANSI> &
      Outlook$OlStoreType__olStoreANSI &
      3; // 3
    static +olStoreDefault: Class<Outlook$OlStoreType__olStoreDefault> &
      Outlook$OlStoreType__olStoreDefault &
      1; // 1
    static +olStoreUnicode: Class<Outlook$OlStoreType__olStoreUnicode> &
      Outlook$OlStoreType__olStoreUnicode &
      2; // 2
  }

  declare class Outlook$OlStoreType__olStoreANSI mixins Outlook$OlStoreType {}
  declare class Outlook$OlStoreType__olStoreDefault
    mixins Outlook$OlStoreType {}
  declare class Outlook$OlStoreType__olStoreUnicode
    mixins Outlook$OlStoreType {}

  declare class Outlook$OlSyncState {
    constructor(...args: empty): mixed;
    static +olSyncStarted: Class<Outlook$OlSyncState__olSyncStarted> &
      Outlook$OlSyncState__olSyncStarted &
      1; // 1
    static +olSyncStopped: Class<Outlook$OlSyncState__olSyncStopped> &
      Outlook$OlSyncState__olSyncStopped &
      0; // 0
  }

  declare class Outlook$OlSyncState__olSyncStarted mixins Outlook$OlSyncState {}
  declare class Outlook$OlSyncState__olSyncStopped mixins Outlook$OlSyncState {}

  declare class Outlook$OlTableContents {
    constructor(...args: empty): mixed;
    static +olHiddenItems: Class<Outlook$OlTableContents__olHiddenItems> &
      Outlook$OlTableContents__olHiddenItems &
      1; // 1
    static +olUserItems: Class<Outlook$OlTableContents__olUserItems> &
      Outlook$OlTableContents__olUserItems &
      0; // 0
  }

  declare class Outlook$OlTableContents__olHiddenItems
    mixins Outlook$OlTableContents {}
  declare class Outlook$OlTableContents__olUserItems
    mixins Outlook$OlTableContents {}

  declare class Outlook$OlTaskDelegationState {
    constructor(...args: empty): mixed;
    static +olTaskDelegationAccepted: Class<Outlook$OlTaskDelegationState__olTaskDelegationAccepted> &
      Outlook$OlTaskDelegationState__olTaskDelegationAccepted &
      2; // 2
    static +olTaskDelegationDeclined: Class<Outlook$OlTaskDelegationState__olTaskDelegationDeclined> &
      Outlook$OlTaskDelegationState__olTaskDelegationDeclined &
      3; // 3
    static +olTaskDelegationUnknown: Class<Outlook$OlTaskDelegationState__olTaskDelegationUnknown> &
      Outlook$OlTaskDelegationState__olTaskDelegationUnknown &
      1; // 1
    static +olTaskNotDelegated: Class<Outlook$OlTaskDelegationState__olTaskNotDelegated> &
      Outlook$OlTaskDelegationState__olTaskNotDelegated &
      0; // 0
  }

  declare class Outlook$OlTaskDelegationState__olTaskDelegationAccepted
    mixins Outlook$OlTaskDelegationState {}
  declare class Outlook$OlTaskDelegationState__olTaskDelegationDeclined
    mixins Outlook$OlTaskDelegationState {}
  declare class Outlook$OlTaskDelegationState__olTaskDelegationUnknown
    mixins Outlook$OlTaskDelegationState {}
  declare class Outlook$OlTaskDelegationState__olTaskNotDelegated
    mixins Outlook$OlTaskDelegationState {}

  declare class Outlook$OlTaskOwnership {
    constructor(...args: empty): mixed;
    static +olDelegatedTask: Class<Outlook$OlTaskOwnership__olDelegatedTask> &
      Outlook$OlTaskOwnership__olDelegatedTask &
      1; // 1
    static +olNewTask: Class<Outlook$OlTaskOwnership__olNewTask> &
      Outlook$OlTaskOwnership__olNewTask &
      0; // 0
    static +olOwnTask: Class<Outlook$OlTaskOwnership__olOwnTask> &
      Outlook$OlTaskOwnership__olOwnTask &
      2; // 2
  }

  declare class Outlook$OlTaskOwnership__olDelegatedTask
    mixins Outlook$OlTaskOwnership {}
  declare class Outlook$OlTaskOwnership__olNewTask
    mixins Outlook$OlTaskOwnership {}
  declare class Outlook$OlTaskOwnership__olOwnTask
    mixins Outlook$OlTaskOwnership {}

  declare class Outlook$OlTaskRecipientType {
    constructor(...args: empty): mixed;
    static +olFinalStatus: Class<Outlook$OlTaskRecipientType__olFinalStatus> &
      Outlook$OlTaskRecipientType__olFinalStatus &
      3; // 3
    static +olUpdate: Class<Outlook$OlTaskRecipientType__olUpdate> &
      Outlook$OlTaskRecipientType__olUpdate &
      2; // 2
  }

  declare class Outlook$OlTaskRecipientType__olFinalStatus
    mixins Outlook$OlTaskRecipientType {}
  declare class Outlook$OlTaskRecipientType__olUpdate
    mixins Outlook$OlTaskRecipientType {}

  declare class Outlook$OlTaskResponse {
    constructor(...args: empty): mixed;
    static +olTaskAccept: Class<Outlook$OlTaskResponse__olTaskAccept> &
      Outlook$OlTaskResponse__olTaskAccept &
      2; // 2
    static +olTaskAssign: Class<Outlook$OlTaskResponse__olTaskAssign> &
      Outlook$OlTaskResponse__olTaskAssign &
      1; // 1
    static +olTaskDecline: Class<Outlook$OlTaskResponse__olTaskDecline> &
      Outlook$OlTaskResponse__olTaskDecline &
      3; // 3
    static +olTaskSimple: Class<Outlook$OlTaskResponse__olTaskSimple> &
      Outlook$OlTaskResponse__olTaskSimple &
      0; // 0
  }

  declare class Outlook$OlTaskResponse__olTaskAccept
    mixins Outlook$OlTaskResponse {}
  declare class Outlook$OlTaskResponse__olTaskAssign
    mixins Outlook$OlTaskResponse {}
  declare class Outlook$OlTaskResponse__olTaskDecline
    mixins Outlook$OlTaskResponse {}
  declare class Outlook$OlTaskResponse__olTaskSimple
    mixins Outlook$OlTaskResponse {}

  declare class Outlook$OlTaskStatus {
    constructor(...args: empty): mixed;
    static +olTaskComplete: Class<Outlook$OlTaskStatus__olTaskComplete> &
      Outlook$OlTaskStatus__olTaskComplete &
      2; // 2
    static +olTaskDeferred: Class<Outlook$OlTaskStatus__olTaskDeferred> &
      Outlook$OlTaskStatus__olTaskDeferred &
      4; // 4
    static +olTaskInProgress: Class<Outlook$OlTaskStatus__olTaskInProgress> &
      Outlook$OlTaskStatus__olTaskInProgress &
      1; // 1
    static +olTaskNotStarted: Class<Outlook$OlTaskStatus__olTaskNotStarted> &
      Outlook$OlTaskStatus__olTaskNotStarted &
      0; // 0
    static +olTaskWaiting: Class<Outlook$OlTaskStatus__olTaskWaiting> &
      Outlook$OlTaskStatus__olTaskWaiting &
      3; // 3
  }

  declare class Outlook$OlTaskStatus__olTaskComplete
    mixins Outlook$OlTaskStatus {}
  declare class Outlook$OlTaskStatus__olTaskDeferred
    mixins Outlook$OlTaskStatus {}
  declare class Outlook$OlTaskStatus__olTaskInProgress
    mixins Outlook$OlTaskStatus {}
  declare class Outlook$OlTaskStatus__olTaskNotStarted
    mixins Outlook$OlTaskStatus {}
  declare class Outlook$OlTaskStatus__olTaskWaiting
    mixins Outlook$OlTaskStatus {}

  declare class Outlook$OlTextAlign {
    constructor(...args: empty): mixed;
    static +olTextAlignCenter: Class<Outlook$OlTextAlign__olTextAlignCenter> &
      Outlook$OlTextAlign__olTextAlignCenter &
      2; // 2
    static +olTextAlignLeft: Class<Outlook$OlTextAlign__olTextAlignLeft> &
      Outlook$OlTextAlign__olTextAlignLeft &
      1; // 1
    static +olTextAlignRight: Class<Outlook$OlTextAlign__olTextAlignRight> &
      Outlook$OlTextAlign__olTextAlignRight &
      3; // 3
  }

  declare class Outlook$OlTextAlign__olTextAlignCenter
    mixins Outlook$OlTextAlign {}
  declare class Outlook$OlTextAlign__olTextAlignLeft
    mixins Outlook$OlTextAlign {}
  declare class Outlook$OlTextAlign__olTextAlignRight
    mixins Outlook$OlTextAlign {}

  declare class Outlook$OlTimelineViewMode {
    constructor(...args: empty): mixed;
    static +olTimelineViewDay: Class<Outlook$OlTimelineViewMode__olTimelineViewDay> &
      Outlook$OlTimelineViewMode__olTimelineViewDay &
      0; // 0
    static +olTimelineViewMonth: Class<Outlook$OlTimelineViewMode__olTimelineViewMonth> &
      Outlook$OlTimelineViewMode__olTimelineViewMonth &
      2; // 2
    static +olTimelineViewWeek: Class<Outlook$OlTimelineViewMode__olTimelineViewWeek> &
      Outlook$OlTimelineViewMode__olTimelineViewWeek &
      1; // 1
  }

  declare class Outlook$OlTimelineViewMode__olTimelineViewDay
    mixins Outlook$OlTimelineViewMode {}
  declare class Outlook$OlTimelineViewMode__olTimelineViewMonth
    mixins Outlook$OlTimelineViewMode {}
  declare class Outlook$OlTimelineViewMode__olTimelineViewWeek
    mixins Outlook$OlTimelineViewMode {}

  declare class Outlook$OlTimeStyle {
    constructor(...args: empty): mixed;
    static +olTimeStyleShortDuration: Class<Outlook$OlTimeStyle__olTimeStyleShortDuration> &
      Outlook$OlTimeStyle__olTimeStyleShortDuration &
      4; // 4
    static +olTimeStyleTimeDuration: Class<Outlook$OlTimeStyle__olTimeStyleTimeDuration> &
      Outlook$OlTimeStyle__olTimeStyleTimeDuration &
      1; // 1
    static +olTimeStyleTimeOnly: Class<Outlook$OlTimeStyle__olTimeStyleTimeOnly> &
      Outlook$OlTimeStyle__olTimeStyleTimeOnly &
      0; // 0
  }

  declare class Outlook$OlTimeStyle__olTimeStyleShortDuration
    mixins Outlook$OlTimeStyle {}
  declare class Outlook$OlTimeStyle__olTimeStyleTimeDuration
    mixins Outlook$OlTimeStyle {}
  declare class Outlook$OlTimeStyle__olTimeStyleTimeOnly
    mixins Outlook$OlTimeStyle {}

  declare class Outlook$OlTrackingStatus {
    constructor(...args: empty): mixed;
    static +olTrackingDelivered: Class<Outlook$OlTrackingStatus__olTrackingDelivered> &
      Outlook$OlTrackingStatus__olTrackingDelivered &
      1; // 1
    static +olTrackingNone: Class<Outlook$OlTrackingStatus__olTrackingNone> &
      Outlook$OlTrackingStatus__olTrackingNone &
      0; // 0
    static +olTrackingNotDelivered: Class<Outlook$OlTrackingStatus__olTrackingNotDelivered> &
      Outlook$OlTrackingStatus__olTrackingNotDelivered &
      2; // 2
    static +olTrackingNotRead: Class<Outlook$OlTrackingStatus__olTrackingNotRead> &
      Outlook$OlTrackingStatus__olTrackingNotRead &
      3; // 3
    static +olTrackingRead: Class<Outlook$OlTrackingStatus__olTrackingRead> &
      Outlook$OlTrackingStatus__olTrackingRead &
      6; // 6
    static +olTrackingRecallFailure: Class<Outlook$OlTrackingStatus__olTrackingRecallFailure> &
      Outlook$OlTrackingStatus__olTrackingRecallFailure &
      4; // 4
    static +olTrackingRecallSuccess: Class<Outlook$OlTrackingStatus__olTrackingRecallSuccess> &
      Outlook$OlTrackingStatus__olTrackingRecallSuccess &
      5; // 5
    static +olTrackingReplied: Class<Outlook$OlTrackingStatus__olTrackingReplied> &
      Outlook$OlTrackingStatus__olTrackingReplied &
      7; // 7
  }

  declare class Outlook$OlTrackingStatus__olTrackingDelivered
    mixins Outlook$OlTrackingStatus {}
  declare class Outlook$OlTrackingStatus__olTrackingNone
    mixins Outlook$OlTrackingStatus {}
  declare class Outlook$OlTrackingStatus__olTrackingNotDelivered
    mixins Outlook$OlTrackingStatus {}
  declare class Outlook$OlTrackingStatus__olTrackingNotRead
    mixins Outlook$OlTrackingStatus {}
  declare class Outlook$OlTrackingStatus__olTrackingRead
    mixins Outlook$OlTrackingStatus {}
  declare class Outlook$OlTrackingStatus__olTrackingRecallFailure
    mixins Outlook$OlTrackingStatus {}
  declare class Outlook$OlTrackingStatus__olTrackingRecallSuccess
    mixins Outlook$OlTrackingStatus {}
  declare class Outlook$OlTrackingStatus__olTrackingReplied
    mixins Outlook$OlTrackingStatus {}

  declare class Outlook$OlUserPropertyType {
    constructor(...args: empty): mixed;
    static +olCombination: Class<Outlook$OlUserPropertyType__olCombination> &
      Outlook$OlUserPropertyType__olCombination &
      19; // 19
    static +olCurrency: Class<Outlook$OlUserPropertyType__olCurrency> &
      Outlook$OlUserPropertyType__olCurrency &
      14; // 14
    static +olDateTime: Class<Outlook$OlUserPropertyType__olDateTime> &
      Outlook$OlUserPropertyType__olDateTime &
      5; // 5
    static +olDuration: Class<Outlook$OlUserPropertyType__olDuration> &
      Outlook$OlUserPropertyType__olDuration &
      7; // 7
    static +olEnumeration: Class<Outlook$OlUserPropertyType__olEnumeration> &
      Outlook$OlUserPropertyType__olEnumeration &
      21; // 21
    static +olFormula: Class<Outlook$OlUserPropertyType__olFormula> &
      Outlook$OlUserPropertyType__olFormula &
      18; // 18
    static +olInteger: Class<Outlook$OlUserPropertyType__olInteger> &
      Outlook$OlUserPropertyType__olInteger &
      20; // 20
    static +olKeywords: Class<Outlook$OlUserPropertyType__olKeywords> &
      Outlook$OlUserPropertyType__olKeywords &
      11; // 11
    static +olNumber: Class<Outlook$OlUserPropertyType__olNumber> &
      Outlook$OlUserPropertyType__olNumber &
      3; // 3
    static +olOutlookInternal: Class<Outlook$OlUserPropertyType__olOutlookInternal> &
      Outlook$OlUserPropertyType__olOutlookInternal &
      0; // 0
    static +olPercent: Class<Outlook$OlUserPropertyType__olPercent> &
      Outlook$OlUserPropertyType__olPercent &
      12; // 12
    static +olSmartFrom: Class<Outlook$OlUserPropertyType__olSmartFrom> &
      Outlook$OlUserPropertyType__olSmartFrom &
      22; // 22
    static +olText: Class<Outlook$OlUserPropertyType__olText> &
      Outlook$OlUserPropertyType__olText &
      1; // 1
    static +olYesNo: Class<Outlook$OlUserPropertyType__olYesNo> &
      Outlook$OlUserPropertyType__olYesNo &
      6; // 6
  }

  declare class Outlook$OlUserPropertyType__olCombination
    mixins Outlook$OlUserPropertyType {}
  declare class Outlook$OlUserPropertyType__olCurrency
    mixins Outlook$OlUserPropertyType {}
  declare class Outlook$OlUserPropertyType__olDateTime
    mixins Outlook$OlUserPropertyType {}
  declare class Outlook$OlUserPropertyType__olDuration
    mixins Outlook$OlUserPropertyType {}
  declare class Outlook$OlUserPropertyType__olEnumeration
    mixins Outlook$OlUserPropertyType {}
  declare class Outlook$OlUserPropertyType__olFormula
    mixins Outlook$OlUserPropertyType {}
  declare class Outlook$OlUserPropertyType__olInteger
    mixins Outlook$OlUserPropertyType {}
  declare class Outlook$OlUserPropertyType__olKeywords
    mixins Outlook$OlUserPropertyType {}
  declare class Outlook$OlUserPropertyType__olNumber
    mixins Outlook$OlUserPropertyType {}
  declare class Outlook$OlUserPropertyType__olOutlookInternal
    mixins Outlook$OlUserPropertyType {}
  declare class Outlook$OlUserPropertyType__olPercent
    mixins Outlook$OlUserPropertyType {}
  declare class Outlook$OlUserPropertyType__olSmartFrom
    mixins Outlook$OlUserPropertyType {}
  declare class Outlook$OlUserPropertyType__olText
    mixins Outlook$OlUserPropertyType {}
  declare class Outlook$OlUserPropertyType__olYesNo
    mixins Outlook$OlUserPropertyType {}

  declare class Outlook$OlVerticalLayout {
    constructor(...args: empty): mixed;
    static +olVerticalLayoutAlignBottom: Class<Outlook$OlVerticalLayout__olVerticalLayoutAlignBottom> &
      Outlook$OlVerticalLayout__olVerticalLayoutAlignBottom &
      2; // 2
    static +olVerticalLayoutAlignMiddle: Class<Outlook$OlVerticalLayout__olVerticalLayoutAlignMiddle> &
      Outlook$OlVerticalLayout__olVerticalLayoutAlignMiddle &
      1; // 1
    static +olVerticalLayoutAlignTop: Class<Outlook$OlVerticalLayout__olVerticalLayoutAlignTop> &
      Outlook$OlVerticalLayout__olVerticalLayoutAlignTop &
      0; // 0
    static +olVerticalLayoutGrow: Class<Outlook$OlVerticalLayout__olVerticalLayoutGrow> &
      Outlook$OlVerticalLayout__olVerticalLayoutGrow &
      3; // 3
  }

  declare class Outlook$OlVerticalLayout__olVerticalLayoutAlignBottom
    mixins Outlook$OlVerticalLayout {}
  declare class Outlook$OlVerticalLayout__olVerticalLayoutAlignMiddle
    mixins Outlook$OlVerticalLayout {}
  declare class Outlook$OlVerticalLayout__olVerticalLayoutAlignTop
    mixins Outlook$OlVerticalLayout {}
  declare class Outlook$OlVerticalLayout__olVerticalLayoutGrow
    mixins Outlook$OlVerticalLayout {}

  declare class Outlook$OlViewSaveOption {
    constructor(...args: empty): mixed;
    static +olViewSaveOptionAllFoldersOfType: Class<Outlook$OlViewSaveOption__olViewSaveOptionAllFoldersOfType> &
      Outlook$OlViewSaveOption__olViewSaveOptionAllFoldersOfType &
      2; // 2
    static +olViewSaveOptionThisFolderEveryone: Class<Outlook$OlViewSaveOption__olViewSaveOptionThisFolderEveryone> &
      Outlook$OlViewSaveOption__olViewSaveOptionThisFolderEveryone &
      0; // 0
    static +olViewSaveOptionThisFolderOnlyMe: Class<Outlook$OlViewSaveOption__olViewSaveOptionThisFolderOnlyMe> &
      Outlook$OlViewSaveOption__olViewSaveOptionThisFolderOnlyMe &
      1; // 1
  }

  declare class Outlook$OlViewSaveOption__olViewSaveOptionAllFoldersOfType
    mixins Outlook$OlViewSaveOption {}
  declare class Outlook$OlViewSaveOption__olViewSaveOptionThisFolderEveryone
    mixins Outlook$OlViewSaveOption {}
  declare class Outlook$OlViewSaveOption__olViewSaveOptionThisFolderOnlyMe
    mixins Outlook$OlViewSaveOption {}

  declare class Outlook$OlViewType {
    constructor(...args: empty): mixed;
    static +olBusinessCardView: Class<Outlook$OlViewType__olBusinessCardView> &
      Outlook$OlViewType__olBusinessCardView &
      5; // 5
    static +olCalendarView: Class<Outlook$OlViewType__olCalendarView> &
      Outlook$OlViewType__olCalendarView &
      2; // 2
    static +olCardView: Class<Outlook$OlViewType__olCardView> &
      Outlook$OlViewType__olCardView &
      1; // 1
    static +olDailyTaskListView: Class<Outlook$OlViewType__olDailyTaskListView> &
      Outlook$OlViewType__olDailyTaskListView &
      6; // 6
    static +olIconView: Class<Outlook$OlViewType__olIconView> &
      Outlook$OlViewType__olIconView &
      3; // 3
    static +olTableView: Class<Outlook$OlViewType__olTableView> &
      Outlook$OlViewType__olTableView &
      0; // 0
    static +olTimelineView: Class<Outlook$OlViewType__olTimelineView> &
      Outlook$OlViewType__olTimelineView &
      4; // 4
  }

  declare class Outlook$OlViewType__olBusinessCardView
    mixins Outlook$OlViewType {}
  declare class Outlook$OlViewType__olCalendarView mixins Outlook$OlViewType {}
  declare class Outlook$OlViewType__olCardView mixins Outlook$OlViewType {}
  declare class Outlook$OlViewType__olDailyTaskListView
    mixins Outlook$OlViewType {}
  declare class Outlook$OlViewType__olIconView mixins Outlook$OlViewType {}
  declare class Outlook$OlViewType__olTableView mixins Outlook$OlViewType {}
  declare class Outlook$OlViewType__olTimelineView mixins Outlook$OlViewType {}

  declare class Outlook$OlWindowState {
    constructor(...args: empty): mixed;
    static +olMaximized: Class<Outlook$OlWindowState__olMaximized> &
      Outlook$OlWindowState__olMaximized &
      0; // 0
    static +olMinimized: Class<Outlook$OlWindowState__olMinimized> &
      Outlook$OlWindowState__olMinimized &
      1; // 1
    static +olNormalWindow: Class<Outlook$OlWindowState__olNormalWindow> &
      Outlook$OlWindowState__olNormalWindow &
      2; // 2
  }

  declare class Outlook$OlWindowState__olMaximized
    mixins Outlook$OlWindowState {}
  declare class Outlook$OlWindowState__olMinimized
    mixins Outlook$OlWindowState {}
  declare class Outlook$OlWindowState__olNormalWindow
    mixins Outlook$OlWindowState {}

  declare class Outlook$_DocSiteControl {
    constructor(): this;
    ReadOnly: number;
    SuppressAttachments: number;
  }

  declare class Outlook$_RecipientControl {
    constructor(): this;
    BackColor: number;
    Enabled: number;
    Font: any;
    ForeColor: number;
    ReadOnly: number;
    SpecialEffect: number;
  }

  declare class Outlook$Account {
    constructor(): this;
    AccountType: Outlook$OlAccountType;
    Outlook$Application: Outlook$Application;
    AutoDiscoverConnectionMode: Outlook$OlAutoDiscoverConnectionMode;
    AutoDiscoverXml: string;
    Class: Outlook$OlObjectClass;
    CurrentUser: Outlook$Recipient;
    DeliveryStore: Outlook$Store;
    DisplayName: string;
    ExchangeConnectionMode: Outlook$OlExchangeConnectionMode;
    ExchangeMailboxServerName: string;
    ExchangeMailboxServerVersion: string;
    GetAddressEntryFromID(ID: string): Outlook$AddressEntry;
    GetRecipientFromID(EntryID: string): Outlook$Recipient;
    Parent: any;
    Session: Outlook$NameSpace;
    SmtpAddress: string;
    UserName: string;
  }

  declare class Outlook$AccountRuleCondition {
    constructor(): this;
    Outlook$Account: Outlook$Account;
    Outlook$Application: Outlook$Application;
    Class: Outlook$OlObjectClass;
    ConditionType: Outlook$OlRuleConditionType;
    Enabled: boolean;
    Parent: any;
    Session: Outlook$NameSpace;
  }

  declare class Outlook$Accounts {
    constructor(): this;
    Outlook$Application: Outlook$Application;
    Class: Outlook$OlObjectClass;
    Count: number;
    Item(Index: any): Outlook$Account;
    Parent: any;
    Session: Outlook$NameSpace;
  }

  declare class Outlook$AccountSelector {
    constructor(): this;
    Outlook$Application: Outlook$Application;
    Class: Outlook$OlObjectClass;
    Parent: any;
    SelectedAccount: Outlook$Account;
    Session: Outlook$NameSpace;
  }

  declare class Outlook$Action {
    constructor(): this;
    Outlook$Application: Outlook$Application;
    Class: Outlook$OlObjectClass;
    CopyLike: Outlook$OlActionCopyLike;
    Delete(): void;
    Enabled: boolean;
    Execute(): any;
    MessageClass: string;
    Name: string;
    Parent: any;
    Prefix: string;
    ReplyStyle: Outlook$OlActionReplyStyle;
    ResponseStyle: Outlook$OlActionResponseStyle;
    Session: Outlook$NameSpace;
    ShowOn: Outlook$OlActionShowOn;
  }

  declare class Outlook$Actions {
    constructor(): this;
    Add(): Outlook$Action;
    Outlook$Application: Outlook$Application;
    Class: Outlook$OlObjectClass;
    Count: number;
    Item(Index: any): Outlook$Action;
    Parent: any;
    Remove(Index: number): void;
    Session: Outlook$NameSpace;
  }

  declare class Outlook$AddressEntries {
    constructor(): this;
    Add(Type: string, Name?: any, Address?: any): Outlook$AddressEntry;
    Outlook$Application: Outlook$Application;
    Class: Outlook$OlObjectClass;
    Count: number;
    GetFirst(): Outlook$AddressEntry;
    GetLast(): Outlook$AddressEntry;
    GetNext(): Outlook$AddressEntry;
    GetPrevious(): Outlook$AddressEntry;
    Item(Index: any): Outlook$AddressEntry;
    Parent: any;
    RawTable: any;
    Session: Outlook$NameSpace;
    Sort(Property?: any, Order?: any): void;
  }

  declare class Outlook$AddressEntry {
    constructor(): this;
    Address: string;
    AddressEntryUserType: Outlook$OlAddressEntryUserType;
    Outlook$Application: Outlook$Application;
    Class: Outlook$OlObjectClass;
    Delete(): void;
    Details(HWnd?: any): void;
    DisplayType: Outlook$OlDisplayType;
    GetContact(): Outlook$ContactItem;
    GetExchangeDistributionList(): Outlook$ExchangeDistributionList;
    GetExchangeUser(): Outlook$ExchangeUser;
    GetFreeBusy(
      Start: VarDate,
      MinPerChar: number,
      CompleteFormat?: any
    ): string;
    ID: string;
    Manager: Outlook$AddressEntry;
    MAPIOBJECT: any;
    Members: Outlook$AddressEntries;
    Name: string;
    Parent: any;
    Outlook$PropertyAccessor: Outlook$PropertyAccessor;
    Session: Outlook$NameSpace;
    Type: string;
    Update(MakePermanent?: any, Refresh?: any): void;
    UpdateFreeBusy(): void;
  }

  declare class Outlook$AddressList {
    constructor(): this;
    Outlook$AddressEntries: Outlook$AddressEntries;
    AddressListType: Outlook$OlAddressListType;
    Outlook$Application: Outlook$Application;
    Class: Outlook$OlObjectClass;
    GetContactsFolder(): Outlook$Folder;
    ID: string;
    Index: number;
    IsInitialAddressList: boolean;
    IsReadOnly: boolean;
    Name: string;
    Parent: any;
    Outlook$PropertyAccessor: Outlook$PropertyAccessor;
    ResolutionOrder: number;
    Session: Outlook$NameSpace;
  }

  declare class Outlook$AddressLists {
    constructor(): this;
    Outlook$Application: Outlook$Application;
    Class: Outlook$OlObjectClass;
    Count: number;
    Item(Index: any): Outlook$AddressList;
    Parent: any;
    Session: Outlook$NameSpace;
  }

  declare class Outlook$AddressRuleCondition {
    constructor(): this;
    Address: any;
    Outlook$Application: Outlook$Application;
    Class: Outlook$OlObjectClass;
    ConditionType: Outlook$OlRuleConditionType;
    Enabled: boolean;
    Parent: any;
    Session: Outlook$NameSpace;
  }

  declare class Outlook$Application {
    constructor(): this;
    ActiveExplorer(): Outlook$Explorer;
    ActiveInspector(): Outlook$Inspector;
    ActiveWindow(): any;
    AdvancedSearch(
      Scope: string,
      Filter?: any,
      SearchSubFolders?: any,
      Tag?: any
    ): Outlook$Search;
    AnswerWizard: Office.AnswerWizard;
    Outlook$Application: Outlook$Application;
    Assistance: Office.IAssistance;
    Assistant: Office.Assistant;
    Class: Outlook$OlObjectClass;
    COMAddIns: Office.COMAddIns;
    CopyFile(FilePath: string, DestFolderPath: string): any;
    CreateItem(
      ItemType: Outlook$OlItemType.olAppointmentItem
    ): Outlook$AppointmentItem;
    CreateItem(ItemType: Outlook$OlItemType.olContactItem): Outlook$ContactItem;
    CreateItem(
      ItemType: Outlook$OlItemType.olDistributionListItem
    ): Outlook$DistListItem;
    CreateItem(ItemType: Outlook$OlItemType.olJournalItem): Outlook$JournalItem;
    CreateItem(ItemType: Outlook$OlItemType.olMailItem): Outlook$MailItem;
    CreateItem(
      ItemType:
        | Outlook$OlItemType.olMobileItemMMS
        | Outlook$OlItemType.olMobileItemSMS
    ): Outlook$MobileItem;
    CreateItem(ItemType: Outlook$OlItemType.olNoteItem): Outlook$NoteItem;
    CreateItem(ItemType: Outlook$OlItemType.olPostItem): Outlook$PostItem;
    CreateItem(ItemType: Outlook$OlItemType.olTaskItem): Outlook$TaskItem;
    CreateItemFromTemplate(TemplatePath: string, InFolder?: any): any;
    CreateObject(ObjectName: string): any;
    DefaultProfileName: string;
    Outlook$Explorers: Outlook$Explorers;
    FeatureInstall: Office.MsoFeatureInstall;
    GetNamespace(Type: string): Outlook$NameSpace;
    GetNewNickNames(pvar: any): void;
    GetObjectReference(Item: any, ReferenceType: Outlook$OlReferenceType): any;
    Outlook$Inspectors: Outlook$Inspectors;
    IsSearchSynchronous(LookInFolders: string): boolean;
    IsTrusted: boolean;
    LanguageSettings: Office.LanguageSettings;
    Name: string;
    Parent: any;
    PickerDialog: Office.PickerDialog;
    ProductCode: string;
    Quit(): void;
    RefreshFormRegionDefinition(RegionName: string): void;
    Outlook$Reminders: Outlook$Reminders;
    Session: Outlook$NameSpace;
    Outlook$TimeZones: Outlook$TimeZones;
    Version: string;
  }

  declare class Outlook$AppointmentItem {
    constructor(): this;
    Outlook$Actions: Outlook$Actions;
    AllDayEvent: boolean;
    Outlook$Application: Outlook$Application;
    Outlook$Attachments: Outlook$Attachments;
    AutoResolvedWinner: boolean;
    BillingInformation: string;
    Body: string;
    BusyStatus: Outlook$OlBusyStatus;
    Outlook$Categories: string;
    Class: Outlook$OlObjectClass;
    ClearRecurrencePattern(): void;
    Close(SaveMode: Outlook$OlInspectorClose): void;
    Companies: string;
    ConferenceServerAllowExternal: boolean;
    ConferenceServerPassword: string;
    Outlook$Conflicts: Outlook$Conflicts;
    ConversationID: string;
    ConversationIndex: string;
    ConversationTopic: string;
    Copy(): any;
    CopyTo(
      DestinationFolder: Outlook$Folder,
      CopyOptions: Outlook$OlAppointmentCopyOptions
    ): Outlook$AppointmentItem;
    CreationTime: VarDate;
    Delete(): void;
    Display(Modal?: any): void;
    DownloadState: Outlook$OlDownloadState;
    Duration: number;
    End: VarDate;
    EndInEndTimeZone: VarDate;
    EndTimeZone: Outlook$TimeZone;
    EndUTC: VarDate;
    EntryID: string;
    ForceUpdateToAllAttendees: boolean;
    Outlook$FormDescription: Outlook$FormDescription;
    ForwardAsVcal(): Outlook$MailItem;
    GetConversation(): Outlook$Conversation;
    GetInspector: Outlook$Inspector;
    GetOrganizer(): Outlook$AddressEntry;
    GetRecurrencePattern(): Outlook$RecurrencePattern;
    GlobalAppointmentID: string;
    Importance: Outlook$OlImportance;
    InternetCodepage: number;
    IsConflict: boolean;
    IsOnlineMeeting: boolean;
    IsRecurring: boolean;
    Outlook$ItemProperties: Outlook$ItemProperties;
    LastModificationTime: VarDate;
    Outlook$Links: Outlook$Links;
    Location: string;
    MAPIOBJECT: any;
    MarkForDownload: Outlook$OlRemoteStatus;
    MeetingStatus: Outlook$OlMeetingStatus;
    MeetingWorkspaceURL: string;
    MessageClass: string;
    Mileage: string;
    Move(DestFldr: Outlook$Folder): any;
    NetMeetingAutoStart: boolean;
    NetMeetingDocPathName: string;
    NetMeetingOrganizerAlias: string;
    NetMeetingServer: string;
    NetMeetingType: Outlook$OlNetMeetingType;
    NetShowURL: string;
    NoAging: boolean;
    OptionalAttendees: string;
    Organizer: string;
    OutlookInternalVersion: number;
    OutlookVersion: string;
    Parent: any;
    PrintOut(): void;
    Outlook$PropertyAccessor: Outlook$PropertyAccessor;
    Outlook$Recipients: Outlook$Recipients;
    RecurrenceState: Outlook$OlRecurrenceState;
    ReminderMinutesBeforeStart: number;
    ReminderOverrideDefault: boolean;
    ReminderPlaySound: boolean;
    ReminderSet: boolean;
    ReminderSoundFile: string;
    ReplyTime: VarDate;
    RequiredAttendees: string;
    Resources: string;
    Respond(
      Response: Outlook$OlMeetingResponse,
      fNoUI?: any,
      fAdditionalTextDialog?: any
    ): Outlook$MeetingItem;
    ResponseRequested: boolean;
    ResponseStatus: Outlook$OlResponseStatus;
    RTFBody: any;
    Save(): void;
    SaveAs(Path: string, Type?: any): void;
    Saved: boolean;
    Send(): void;
    SendUsingAccount: Outlook$Account;
    Sensitivity: Outlook$OlSensitivity;
    Session: Outlook$NameSpace;
    ShowCategoriesDialog(): void;
    Size: number;
    Start: VarDate;
    StartInStartTimeZone: VarDate;
    StartTimeZone: Outlook$TimeZone;
    StartUTC: VarDate;
    Subject: string;
    UnRead: boolean;
    Outlook$UserProperties: Outlook$UserProperties;
  }

  declare class Outlook$AssignToCategoryRuleAction {
    constructor(): this;
    ActionType: Outlook$OlRuleActionType;
    Outlook$Application: Outlook$Application;
    Outlook$Categories: any;
    Class: Outlook$OlObjectClass;
    Enabled: boolean;
    Parent: any;
    Session: Outlook$NameSpace;
  }

  declare class Outlook$Attachment {
    constructor(): this;
    Outlook$Application: Outlook$Application;
    BlockLevel: Outlook$OlAttachmentBlockLevel;
    Class: Outlook$OlObjectClass;
    Delete(): void;
    DisplayName: string;
    FileName: string;
    GetTemporaryFilePath(): string;
    Index: number;
    MAPIOBJECT: any;
    Parent: any;
    PathName: string;
    Position: number;
    Outlook$PropertyAccessor: Outlook$PropertyAccessor;
    SaveAsFile(Path: string): void;
    Session: Outlook$NameSpace;
    Size: number;
    Type: Outlook$OlAttachmentType;
  }

  declare class Outlook$Attachments {
    constructor(): this;
    Add(
      Source: any,
      Type?: any,
      Position?: any,
      DisplayName?: any
    ): Outlook$Attachment;
    Outlook$Application: Outlook$Application;
    Class: Outlook$OlObjectClass;
    Count: number;
    Item(Index: any): Outlook$Attachment;
    Parent: any;
    Remove(Index: number): void;
    Session: Outlook$NameSpace;
  }

  declare class Outlook$AttachmentSelection {
    constructor(): this;
    Outlook$Application: Outlook$Application;
    Class: Outlook$OlObjectClass;
    Count: number;
    GetSelection(
      SelectionContents: Outlook$OlSelectionContents
    ): Outlook$Selection;
    Item(Index: any): Outlook$Attachment;
    Location: Outlook$OlSelectionLocation;
    Parent: any;
    Session: Outlook$NameSpace;
  }

  declare class Outlook$AutoFormatRule {
    constructor(): this;
    Outlook$Application: Outlook$Application;
    Class: Outlook$OlObjectClass;
    Enabled: boolean;
    Filter: string;
    Font: Outlook$ViewFont;
    Name: string;
    Parent: any;
    Session: Outlook$NameSpace;
    Standard: boolean;
  }

  declare class Outlook$AutoFormatRules {
    constructor(): this;
    Add(Name: string): Outlook$AutoFormatRule;
    Outlook$Application: Outlook$Application;
    Class: Outlook$OlObjectClass;
    Count: number;
    Insert(Name: string, Index: any): Outlook$AutoFormatRule;
    Item(Index: any): Outlook$AutoFormatRule;
    Parent: any;
    Remove(Index: any): void;
    RemoveAll(): void;
    Save(): void;
    Session: Outlook$NameSpace;
  }

  declare class Outlook$BusinessCardView {
    constructor(): this;
    Outlook$Application: Outlook$Application;
    Apply(): void;
    CardSize: number;
    Class: Outlook$OlObjectClass;
    Copy(Name: string, SaveOption: Outlook$OlViewSaveOption): Outlook$View;
    Delete(): void;
    Filter: string;
    GoToDate(Date: VarDate): void;
    HeadingsFont: Outlook$ViewFont;
    Language: string;
    LockUserChanges: boolean;
    Name: string;
    Parent: any;
    Reset(): void;
    Save(): void;
    SaveOption: Outlook$OlViewSaveOption;
    Session: Outlook$NameSpace;
    SortFields: Outlook$OrderFields;
    Standard: boolean;
    ViewType: Outlook$OlViewType;
    XML: string;
  }

  declare class Outlook$CalendarModule {
    constructor(): this;
    Outlook$Application: Outlook$Application;
    Class: Outlook$OlObjectClass;
    Name: string;
    Outlook$NavigationGroups: Outlook$NavigationGroups;
    NavigationModuleType: Outlook$OlNavigationModuleType;
    Parent: any;
    Position: number;
    Session: Outlook$NameSpace;
    Visible: boolean;
  }

  declare class Outlook$CalendarSharing {
    constructor(): this;
    Outlook$Application: Outlook$Application;
    CalendarDetail: Outlook$OlCalendarDetail;
    Class: Outlook$OlObjectClass;
    EndDate: VarDate;
    Outlook$Folder: Outlook$Folder;
    ForwardAsICal(MailFormat: Outlook$OlCalendarMailFormat): Outlook$MailItem;
    IncludeAttachments: boolean;
    IncludePrivateDetails: boolean;
    IncludeWholeCalendar: boolean;
    Parent: any;
    RestrictToWorkingHours: boolean;
    SaveAsICal(Path: string): void;
    Session: Outlook$NameSpace;
    StartDate: VarDate;
  }

  declare class Outlook$CalendarView {
    constructor(): this;
    Outlook$Application: Outlook$Application;
    Apply(): void;
    Outlook$AutoFormatRules: Outlook$AutoFormatRules;
    BoldDatesWithItems: boolean;
    BoldSubjects: boolean;
    CalendarViewMode: Outlook$OlCalendarViewMode;
    Class: Outlook$OlObjectClass;
    Copy(Name: string, SaveOption: Outlook$OlViewSaveOption): Outlook$View;
    DaysInMultiDayMode: number;
    DayWeekFont: Outlook$ViewFont;
    DayWeekTimeFont: Outlook$ViewFont;
    DayWeekTimeScale: Outlook$OlDayWeekTimeScale;
    Delete(): void;
    DisplayedDates: any;
    EndField: string;
    Filter: string;
    GoToDate(Date: VarDate): void;
    Language: string;
    LockUserChanges: boolean;
    MonthFont: Outlook$ViewFont;
    MonthShowEndTime: boolean;
    Name: string;
    Parent: any;
    Reset(): void;
    Save(): void;
    SaveOption: Outlook$OlViewSaveOption;
    SelectedEndTime: VarDate;
    SelectedStartTime: VarDate;
    Session: Outlook$NameSpace;
    Standard: boolean;
    StartField: string;
    ViewType: Outlook$OlViewType;
    XML: string;
  }

  declare class Outlook$CardView {
    constructor(): this;
    AllowInCellEditing: boolean;
    Outlook$Application: Outlook$Application;
    Apply(): void;
    Outlook$AutoFormatRules: Outlook$AutoFormatRules;
    BodyFont: Outlook$ViewFont;
    Class: Outlook$OlObjectClass;
    Copy(Name: string, SaveOption: Outlook$OlViewSaveOption): Outlook$View;
    Delete(): void;
    Filter: string;
    GoToDate(Date: VarDate): void;
    HeadingsFont: Outlook$ViewFont;
    Language: string;
    LockUserChanges: boolean;
    MultiLineFieldHeight: number;
    Name: string;
    Parent: any;
    Reset(): void;
    Save(): void;
    SaveOption: Outlook$OlViewSaveOption;
    Session: Outlook$NameSpace;
    ShowEmptyFields: boolean;
    SortFields: Outlook$OrderFields;
    Standard: boolean;
    Outlook$ViewFields: Outlook$ViewFields;
    ViewType: Outlook$OlViewType;
    Width: number;
    XML: string;
  }

  declare class Outlook$Categories {
    constructor(): this;
    Add(Name: string, Color?: any, ShortcutKey?: any): Outlook$Category;
    Outlook$Application: Outlook$Application;
    Class: Outlook$OlObjectClass;
    Count: number;
    Item(Index: any): Outlook$Category;
    Parent: any;
    Remove(Index: any): void;
    Session: Outlook$NameSpace;
  }

  declare class Outlook$Category {
    constructor(): this;
    Outlook$Application: Outlook$Application;
    CategoryBorderColor: stdole.OLE_COLOR;
    CategoryGradientBottomColor: stdole.OLE_COLOR;
    CategoryGradientTopColor: stdole.OLE_COLOR;
    CategoryID: string;
    Class: Outlook$OlObjectClass;
    Color: Outlook$OlCategoryColor;
    Name: string;
    Parent: any;
    Session: Outlook$NameSpace;
    ShortcutKey: Outlook$OlCategoryShortcutKey;
  }

  declare class Outlook$CategoryRuleCondition {
    constructor(): this;
    Outlook$Application: Outlook$Application;
    Outlook$Categories: any;
    Class: Outlook$OlObjectClass;
    ConditionType: Outlook$OlRuleConditionType;
    Enabled: boolean;
    Parent: any;
    Session: Outlook$NameSpace;
  }

  declare class Outlook$Column {
    constructor(): this;
    Outlook$Application: Outlook$Application;
    Class: Outlook$OlObjectClass;
    Name: string;
    Parent: any;
    Session: Outlook$NameSpace;
  }

  declare class Outlook$ColumnFormat {
    constructor(): this;
    Align: Outlook$OlAlign;
    Outlook$Application: Outlook$Application;
    Class: Outlook$OlObjectClass;
    FieldFormat: number;
    FieldType: Outlook$OlUserPropertyType;
    Label: string;
    Parent: any;
    Session: Outlook$NameSpace;
    Width: number;
  }

  declare class Outlook$Columns {
    constructor(): this;
    Add(Name: string): Outlook$Column;
    Outlook$Application: Outlook$Application;
    Class: Outlook$OlObjectClass;
    Count: number;
    Item(Index: any): Outlook$Column;
    Parent: any;
    Remove(Index: any): void;
    RemoveAll(): void;
    Session: Outlook$NameSpace;
  }

  declare class Outlook$Conflict {
    constructor(): this;
    Outlook$Application: Outlook$Application;
    Class: Outlook$OlObjectClass;
    Item: any;
    Name: string;
    Parent: any;
    Session: Outlook$NameSpace;
    Type: Outlook$OlObjectClass;
  }

  declare class Outlook$Conflicts {
    constructor(): this;
    Outlook$Application: Outlook$Application;
    Class: Outlook$OlObjectClass;
    Count: number;
    GetFirst(): Outlook$Conflict;
    GetLast(): Outlook$Conflict;
    GetNext(): Outlook$Conflict;
    GetPrevious(): Outlook$Conflict;
    Item(Index: any): Outlook$Conflict;
    Parent: any;
    Session: Outlook$NameSpace;
  }

  declare class Outlook$ContactItem {
    constructor(): this;
    Outlook$Account: string;
    Outlook$Actions: Outlook$Actions;
    AddBusinessCardLogoPicture(Path: string): void;
    AddPicture(Path: string): void;
    Anniversary: VarDate;
    Outlook$Application: Outlook$Application;
    AssistantName: string;
    AssistantTelephoneNumber: string;
    Outlook$Attachments: Outlook$Attachments;
    AutoResolvedWinner: boolean;
    BillingInformation: string;
    Birthday: VarDate;
    Body: string;
    Business2TelephoneNumber: string;
    BusinessAddress: string;
    BusinessAddressCity: string;
    BusinessAddressCountry: string;
    BusinessAddressPostalCode: string;
    BusinessAddressPostOfficeBox: string;
    BusinessAddressState: string;
    BusinessAddressStreet: string;
    BusinessCardLayoutXml: string;
    BusinessCardType: Outlook$OlBusinessCardType;
    BusinessFaxNumber: string;
    BusinessHomePage: string;
    BusinessTelephoneNumber: string;
    CallbackTelephoneNumber: string;
    CarTelephoneNumber: string;
    Outlook$Categories: string;
    Children: string;
    Class: Outlook$OlObjectClass;
    ClearTaskFlag(): void;
    Close(SaveMode: Outlook$OlInspectorClose): void;
    Companies: string;
    CompanyAndFullName: string;
    CompanyLastFirstNoSpace: string;
    CompanyLastFirstSpaceOnly: string;
    CompanyMainTelephoneNumber: string;
    CompanyName: string;
    ComputerNetworkName: string;
    Outlook$Conflicts: Outlook$Conflicts;
    ConversationID: string;
    ConversationIndex: string;
    ConversationTopic: string;
    Copy(): any;
    CreationTime: VarDate;
    CustomerID: string;
    Delete(): void;
    Department: string;
    Display(Modal?: any): void;
    DownloadState: Outlook$OlDownloadState;
    Email1Address: string;
    Email1AddressType: string;
    Email1DisplayName: string;
    Email1EntryID: string;
    Email2Address: string;
    Email2AddressType: string;
    Email2DisplayName: string;
    Email2EntryID: string;
    Email3Address: string;
    Email3AddressType: string;
    Email3DisplayName: string;
    Email3EntryID: string;
    EntryID: string;
    FileAs: string;
    FirstName: string;
    Outlook$FormDescription: Outlook$FormDescription;
    ForwardAsBusinessCard(): Outlook$MailItem;
    ForwardAsVcard(): Outlook$MailItem;
    FTPSite: string;
    FullName: string;
    FullNameAndCompany: string;
    Gender: Outlook$OlGender;
    GetConversation(): Outlook$Conversation;
    GetInspector: Outlook$Inspector;
    GovernmentIDNumber: string;
    HasPicture: boolean;
    Hobby: string;
    Home2TelephoneNumber: string;
    HomeAddress: string;
    HomeAddressCity: string;
    HomeAddressCountry: string;
    HomeAddressPostalCode: string;
    HomeAddressPostOfficeBox: string;
    HomeAddressState: string;
    HomeAddressStreet: string;
    HomeFaxNumber: string;
    HomeTelephoneNumber: string;
    IMAddress: string;
    Importance: Outlook$OlImportance;
    Initials: string;
    InternetFreeBusyAddress: string;
    IsConflict: boolean;
    ISDNNumber: string;
    IsMarkedAsTask: boolean;
    Outlook$ItemProperties: Outlook$ItemProperties;
    JobTitle: string;
    Journal: boolean;
    Language: string;
    LastFirstAndSuffix: string;
    LastFirstNoSpace: string;
    LastFirstNoSpaceAndSuffix: string;
    LastFirstNoSpaceCompany: string;
    LastFirstSpaceOnly: string;
    LastFirstSpaceOnlyCompany: string;
    LastModificationTime: VarDate;
    LastName: string;
    LastNameAndFirstName: string;
    Outlook$Links: Outlook$Links;
    MailingAddress: string;
    MailingAddressCity: string;
    MailingAddressCountry: string;
    MailingAddressPostalCode: string;
    MailingAddressPostOfficeBox: string;
    MailingAddressState: string;
    MailingAddressStreet: string;
    ManagerName: string;
    MAPIOBJECT: any;
    MarkAsTask(MarkInterval: Outlook$OlMarkInterval): void;
    MarkForDownload: Outlook$OlRemoteStatus;
    MessageClass: string;
    MiddleName: string;
    Mileage: string;
    MobileTelephoneNumber: string;
    Move(DestFldr: Outlook$Folder): any;
    NetMeetingAlias: string;
    NetMeetingServer: string;
    NickName: string;
    NoAging: boolean;
    OfficeLocation: string;
    OrganizationalIDNumber: string;
    OtherAddress: string;
    OtherAddressCity: string;
    OtherAddressCountry: string;
    OtherAddressPostalCode: string;
    OtherAddressPostOfficeBox: string;
    OtherAddressState: string;
    OtherAddressStreet: string;
    OtherFaxNumber: string;
    OtherTelephoneNumber: string;
    OutlookInternalVersion: number;
    OutlookVersion: string;
    PagerNumber: string;
    Parent: any;
    PersonalHomePage: string;
    PrimaryTelephoneNumber: string;
    PrintOut(): void;
    Profession: string;
    Outlook$PropertyAccessor: Outlook$PropertyAccessor;
    RadioTelephoneNumber: string;
    ReferredBy: string;
    ReminderOverrideDefault: boolean;
    ReminderPlaySound: boolean;
    ReminderSet: boolean;
    ReminderSoundFile: string;
    ReminderTime: VarDate;
    RemovePicture(): void;
    ResetBusinessCard(): void;
    RTFBody: any;
    Save(): void;
    SaveAs(Path: string, Type?: any): void;
    SaveBusinessCardImage(Path: string): void;
    Saved: boolean;
    SelectedMailingAddress: Outlook$OlMailingAddress;
    Sensitivity: Outlook$OlSensitivity;
    Session: Outlook$NameSpace;
    ShowBusinessCardEditor(): void;
    ShowCategoriesDialog(): void;
    ShowCheckPhoneDialog(PhoneNumber: Outlook$OlContactPhoneNumber): void;
    Size: number;
    Spouse: string;
    Subject: string;
    Suffix: string;
    TaskCompletedDate: VarDate;
    TaskDueDate: VarDate;
    TaskStartDate: VarDate;
    TaskSubject: string;
    TelexNumber: string;
    Title: string;
    ToDoTaskOrdinal: VarDate;
    TTYTDDTelephoneNumber: string;
    UnRead: boolean;
    User1: string;
    User2: string;
    User3: string;
    User4: string;
    UserCertificate: string;
    Outlook$UserProperties: Outlook$UserProperties;
    WebPage: string;
    YomiCompanyName: string;
    YomiFirstName: string;
    YomiLastName: string;
  }

  declare class Outlook$ContactsModule {
    constructor(): this;
    Outlook$Application: Outlook$Application;
    Class: Outlook$OlObjectClass;
    Name: string;
    Outlook$NavigationGroups: Outlook$NavigationGroups;
    NavigationModuleType: Outlook$OlNavigationModuleType;
    Parent: any;
    Position: number;
    Session: Outlook$NameSpace;
    Visible: boolean;
  }

  declare class Outlook$Conversation {
    constructor(): this;
    Outlook$Application: Outlook$Application;
    Class: Outlook$OlObjectClass;
    ClearAlwaysAssignCategories(Outlook$Store: Outlook$Store): void;
    ConversationID: string;
    GetAlwaysAssignCategories(Outlook$Store: Outlook$Store): string;
    GetAlwaysDelete(
      Outlook$Store: Outlook$Store
    ): Outlook$OlAlwaysDeleteConversation;
    GetAlwaysMoveToFolder(Outlook$Store: Outlook$Store): Outlook$Folder;
    GetChildren(Item: any): Outlook$SimpleItems;
    GetParent(Item: any): any;
    GetRootItems(): Outlook$SimpleItems;
    GetTable(): Outlook$Table;
    MarkAsRead(): void;
    MarkAsUnread(): void;
    Parent: any;
    Session: Outlook$NameSpace;
    SetAlwaysAssignCategories(
      Outlook$Categories: string,
      Outlook$Store: Outlook$Store
    ): void;
    SetAlwaysDelete(
      AlwaysDelete: Outlook$OlAlwaysDeleteConversation,
      Outlook$Store: Outlook$Store
    ): void;
    SetAlwaysMoveToFolder(
      MoveToFolder: Outlook$Folder,
      Outlook$Store: Outlook$Store
    ): void;
    StopAlwaysDelete(Outlook$Store: Outlook$Store): void;
    StopAlwaysMoveToFolder(Outlook$Store: Outlook$Store): void;
  }

  declare class Outlook$ConversationHeader {
    constructor(): this;
    Outlook$Application: Outlook$Application;
    Class: Outlook$OlObjectClass;
    ConversationID: string;
    ConversationTopic: string;
    GetConversation(): Outlook$Conversation;
    GetItems(): Outlook$SimpleItems;
    Parent: any;
    Session: Outlook$NameSpace;
  }

  declare class Outlook$DistListItem {
    constructor(): this;
    Outlook$Actions: Outlook$Actions;
    AddMember(Outlook$Recipient: Outlook$Recipient): void;
    AddMembers(Outlook$Recipients: Outlook$Recipients): void;
    Outlook$Application: Outlook$Application;
    Outlook$Attachments: Outlook$Attachments;
    AutoResolvedWinner: boolean;
    BillingInformation: string;
    Body: string;
    Outlook$Categories: string;
    CheckSum: number;
    Class: Outlook$OlObjectClass;
    ClearTaskFlag(): void;
    Close(SaveMode: Outlook$OlInspectorClose): void;
    Companies: string;
    Outlook$Conflicts: Outlook$Conflicts;
    ConversationID: string;
    ConversationIndex: string;
    ConversationTopic: string;
    Copy(): any;
    CreationTime: VarDate;
    Delete(): void;
    Display(Modal?: any): void;
    DLName: string;
    DownloadState: Outlook$OlDownloadState;
    EntryID: string;
    Outlook$FormDescription: Outlook$FormDescription;
    GetConversation(): Outlook$Conversation;
    GetInspector: Outlook$Inspector;
    GetMember(Index: number): Outlook$Recipient;
    Importance: Outlook$OlImportance;
    IsConflict: boolean;
    IsMarkedAsTask: boolean;
    Outlook$ItemProperties: Outlook$ItemProperties;
    LastModificationTime: VarDate;
    Outlook$Links: Outlook$Links;
    MAPIOBJECT: any;
    MarkAsTask(MarkInterval: Outlook$OlMarkInterval): void;
    MarkForDownload: Outlook$OlRemoteStatus;
    MemberCount: number;
    Members: any;
    MessageClass: string;
    Mileage: string;
    Move(DestFldr: Outlook$Folder): any;
    NoAging: boolean;
    OneOffMembers: any;
    OutlookInternalVersion: number;
    OutlookVersion: string;
    Parent: any;
    PrintOut(): void;
    Outlook$PropertyAccessor: Outlook$PropertyAccessor;
    ReminderOverrideDefault: boolean;
    ReminderPlaySound: boolean;
    ReminderSet: boolean;
    ReminderSoundFile: string;
    ReminderTime: VarDate;
    RemoveMember(Outlook$Recipient: Outlook$Recipient): void;
    RemoveMembers(Outlook$Recipients: Outlook$Recipients): void;
    RTFBody: any;
    Save(): void;
    SaveAs(Path: string, Type?: any): void;
    Saved: boolean;
    Sensitivity: Outlook$OlSensitivity;
    Session: Outlook$NameSpace;
    ShowCategoriesDialog(): void;
    Size: number;
    Subject: string;
    TaskCompletedDate: VarDate;
    TaskDueDate: VarDate;
    TaskStartDate: VarDate;
    TaskSubject: string;
    ToDoTaskOrdinal: VarDate;
    UnRead: boolean;
    Outlook$UserProperties: Outlook$UserProperties;
  }

  declare class Outlook$DocumentItem {
    constructor(): this;
    Outlook$Actions: Outlook$Actions;
    Outlook$Application: Outlook$Application;
    Outlook$Attachments: Outlook$Attachments;
    AutoResolvedWinner: boolean;
    BillingInformation: string;
    Body: string;
    Outlook$Categories: string;
    Class: Outlook$OlObjectClass;
    Close(SaveMode: Outlook$OlInspectorClose): void;
    Companies: string;
    Outlook$Conflicts: Outlook$Conflicts;
    ConversationIndex: string;
    ConversationTopic: string;
    Copy(): any;
    CreationTime: VarDate;
    Delete(): void;
    Display(Modal?: any): void;
    DownloadState: Outlook$OlDownloadState;
    EntryID: string;
    Outlook$FormDescription: Outlook$FormDescription;
    GetInspector: Outlook$Inspector;
    Importance: Outlook$OlImportance;
    IsConflict: boolean;
    Outlook$ItemProperties: Outlook$ItemProperties;
    LastModificationTime: VarDate;
    Outlook$Links: Outlook$Links;
    MAPIOBJECT: any;
    MarkForDownload: Outlook$OlRemoteStatus;
    MessageClass: string;
    Mileage: string;
    Move(DestFldr: Outlook$Folder): any;
    NoAging: boolean;
    OutlookInternalVersion: number;
    OutlookVersion: string;
    Parent: any;
    PrintOut(): void;
    Outlook$PropertyAccessor: Outlook$PropertyAccessor;
    Save(): void;
    SaveAs(Path: string, Type?: any): void;
    Saved: boolean;
    Sensitivity: Outlook$OlSensitivity;
    Session: Outlook$NameSpace;
    ShowCategoriesDialog(): void;
    Size: number;
    Subject: string;
    UnRead: boolean;
    Outlook$UserProperties: Outlook$UserProperties;
  }

  declare class Outlook$DoNotUseMeFolder {
    constructor(): this;
    AddressBookName: string;
    AddToFavorites(fNoUI?: any, Name?: any): void;
    AddToPFFavorites(): void;
    Outlook$Application: Outlook$Application;
    Class: Outlook$OlObjectClass;
    CopyTo(DestinationFolder: Outlook$Folder): Outlook$Folder;
    CurrentView: Outlook$View;
    CustomViewsOnly: boolean;
    DefaultItemType: Outlook$OlItemType;
    DefaultMessageClass: string;
    Delete(): void;
    Description: string;
    Display(): void;
    EntryID: string;
    FolderPath: string;
    Outlook$Folders: Outlook$Folders;
    FullFolderPath: string;
    GetCalendarExporter(): Outlook$CalendarSharing;
    GetCustomIcon(): stdole.StdPicture;
    GetExplorer(DisplayMode?: any): Outlook$Explorer;
    GetStorage(
      StorageIdentifier: string,
      StorageIdentifierType: Outlook$OlStorageIdentifierType
    ): Outlook$StorageItem;
    GetTable(Filter?: any, TableContents?: any): Outlook$Table;
    InAppFolderSyncObject: boolean;
    IsSharePointFolder: boolean;
    Outlook$Items: Outlook$Items;
    MAPIOBJECT: any;
    MoveTo(DestinationFolder: Outlook$Folder): void;
    Name: string;
    Parent: any;
    Outlook$PropertyAccessor: Outlook$PropertyAccessor;
    Session: Outlook$NameSpace;
    SetCustomIcon(Picture: stdole.StdPicture): void;
    ShowAsOutlookAB: boolean;
    ShowItemCount: Outlook$OlShowItemCount;
    Outlook$Store: Outlook$Store;
    StoreID: string;
    UnReadItemCount: number;
    Outlook$UserDefinedProperties: Outlook$UserDefinedProperties;
    UserPermissions: any;
    Outlook$Views: Outlook$Views;
    WebViewAllowNavigation: boolean;
    WebViewOn: boolean;
    WebViewURL: string;
  }

  declare class Outlook$Exception {
    constructor(): this;
    Outlook$Application: Outlook$Application;
    Outlook$AppointmentItem: Outlook$AppointmentItem;
    Class: Outlook$OlObjectClass;
    Deleted: boolean;
    Outlook$ItemProperties: Outlook$ItemProperties;
    OriginalDate: VarDate;
    Parent: any;
    Session: Outlook$NameSpace;
  }

  declare class Outlook$Exceptions {
    constructor(): this;
    Outlook$Application: Outlook$Application;
    Class: Outlook$OlObjectClass;
    Count: number;
    Item(Index: any): Outlook$Exception;
    Parent: any;
    Session: Outlook$NameSpace;
  }

  declare class Outlook$ExchangeDistributionList {
    constructor(): this;
    Address: string;
    AddressEntryUserType: Outlook$OlAddressEntryUserType;
    Alias: string;
    Outlook$Application: Outlook$Application;
    Class: Outlook$OlObjectClass;
    Comments: string;
    Delete(): void;
    Details(HWnd?: any): void;
    DisplayType: Outlook$OlDisplayType;
    GetContact(): Outlook$ContactItem;
    GetExchangeDistributionList(): Outlook$ExchangeDistributionList;
    GetExchangeDistributionListMembers(): Outlook$AddressEntries;
    GetExchangeUser(): Outlook$ExchangeUser;
    GetFreeBusy(
      Start: VarDate,
      MinPerChar: number,
      CompleteFormat?: any
    ): string;
    GetMemberOfList(): Outlook$AddressEntries;
    GetOwners(): Outlook$AddressEntries;
    ID: string;
    Manager: Outlook$AddressEntry;
    MAPIOBJECT: any;
    Members: Outlook$AddressEntries;
    Name: string;
    Parent: any;
    PrimarySmtpAddress: string;
    Outlook$PropertyAccessor: Outlook$PropertyAccessor;
    Session: Outlook$NameSpace;
    Type: string;
    Update(MakePermanent?: any, Refresh?: any): void;
    UpdateFreeBusy(): void;
  }

  declare class Outlook$ExchangeUser {
    constructor(): this;
    Address: string;
    AddressEntryUserType: Outlook$OlAddressEntryUserType;
    Alias: string;
    Outlook$Application: Outlook$Application;
    AssistantName: string;
    BusinessTelephoneNumber: string;
    City: string;
    Class: Outlook$OlObjectClass;
    Comments: string;
    CompanyName: string;
    Delete(): void;
    Department: string;
    Details(HWnd?: any): void;
    DisplayType: Outlook$OlDisplayType;
    FirstName: string;
    GetContact(): Outlook$ContactItem;
    GetDirectReports(): Outlook$AddressEntries;
    GetExchangeDistributionList(): Outlook$ExchangeDistributionList;
    GetExchangeUser(): Outlook$ExchangeUser;
    GetExchangeUserManager(): Outlook$ExchangeUser;
    GetFreeBusy(
      Start: VarDate,
      MinPerChar: number,
      CompleteFormat?: any
    ): string;
    GetMemberOfList(): Outlook$AddressEntries;
    GetPicture(): stdole.StdPicture;
    ID: string;
    JobTitle: string;
    LastName: string;
    Manager: Outlook$AddressEntry;
    MAPIOBJECT: any;
    Members: Outlook$AddressEntries;
    MobileTelephoneNumber: string;
    Name: string;
    OfficeLocation: string;
    Parent: any;
    PostalCode: string;
    PrimarySmtpAddress: string;
    Outlook$PropertyAccessor: Outlook$PropertyAccessor;
    Session: Outlook$NameSpace;
    StateOrProvince: string;
    StreetAddress: string;
    Type: string;
    Update(MakePermanent?: any, Refresh?: any): void;
    UpdateFreeBusy(): void;
    YomiCompanyName: string;
    YomiDepartment: string;
    YomiDisplayName: string;
    YomiFirstName: string;
    YomiLastName: string;
  }

  declare class Outlook$Explorer {
    constructor(): this;
    Outlook$AccountSelector: Outlook$AccountSelector;
    Activate(): void;
    AddToSelection(Item: any): void;
    Outlook$Application: Outlook$Application;
    Outlook$AttachmentSelection: Outlook$AttachmentSelection;
    Caption: string;
    Class: Outlook$OlObjectClass;
    ClearSearch(): void;
    ClearSelection(): void;
    Close(): void;
    CommandBars: Office.CommandBars;
    CurrentFolder: Outlook$Folder;
    CurrentView: any;
    DeselectFolder(Outlook$Folder: Outlook$Folder): void;
    Display(): void;
    Height: number;
    HTMLDocument: any;
    IsFolderSelected(Outlook$Folder: Outlook$Folder): boolean;
    IsItemSelectableInView(Item: any): boolean;
    IsPaneVisible(Pane: Outlook$OlPane): boolean;
    Left: number;
    Outlook$NavigationPane: Outlook$NavigationPane;
    Outlook$Panes: Outlook$Panes;
    Parent: any;
    RemoveFromSelection(Item: any): void;
    Search(Query: string, SearchScope: Outlook$OlSearchScope): void;
    SelectAllItems(): void;
    SelectFolder(Outlook$Folder: Outlook$Folder): void;
    Outlook$Selection: Outlook$Selection;
    Session: Outlook$NameSpace;
    ShowPane(Pane: Outlook$OlPane, Visible: boolean): void;
    Top: number;
    Outlook$Views: any;
    Width: number;
    WindowState: Outlook$OlWindowState;
  }

  declare class Outlook$Explorers {
    constructor(): this;
    Add(
      Outlook$Folder: any,
      DisplayMode: Outlook$OlFolderDisplayMode
    ): Outlook$Explorer;
    Outlook$Application: Outlook$Application;
    Class: Outlook$OlObjectClass;
    Count: number;
    Item(Index: any): Outlook$Explorer;
    Parent: any;
    Session: Outlook$NameSpace;
  }

  declare class Outlook$Folder {
    constructor(): this;
    AddressBookName: string;
    AddToFavorites(fNoUI?: any, Name?: any): void;
    AddToPFFavorites(): void;
    Outlook$Application: Outlook$Application;
    Class: Outlook$OlObjectClass;
    CopyTo(DestinationFolder: Outlook$Folder): Outlook$Folder;
    CurrentView: Outlook$View;
    CustomViewsOnly: boolean;
    DefaultItemType: Outlook$OlItemType;
    DefaultMessageClass: string;
    Delete(): void;
    Description: string;
    Display(): void;
    EntryID: string;
    FolderPath: string;
    Outlook$Folders: Outlook$Folders;
    FullFolderPath: string;
    GetCalendarExporter(): Outlook$CalendarSharing;
    GetCustomIcon(): stdole.StdPicture;
    GetExplorer(DisplayMode?: any): Outlook$Explorer;
    GetStorage(
      StorageIdentifier: string,
      StorageIdentifierType: Outlook$OlStorageIdentifierType
    ): Outlook$StorageItem;
    GetTable(Filter?: any, TableContents?: any): Outlook$Table;
    InAppFolderSyncObject: boolean;
    IsSharePointFolder: boolean;
    Outlook$Items: Outlook$Items;
    MAPIOBJECT: any;
    MoveTo(DestinationFolder: Outlook$Folder): void;
    Name: string;
    Parent: any;
    Outlook$PropertyAccessor: Outlook$PropertyAccessor;
    Session: Outlook$NameSpace;
    SetCustomIcon(Picture: stdole.StdPicture): void;
    ShowAsOutlookAB: boolean;
    ShowItemCount: Outlook$OlShowItemCount;
    Outlook$Store: Outlook$Store;
    StoreID: string;
    UnReadItemCount: number;
    Outlook$UserDefinedProperties: Outlook$UserDefinedProperties;
    UserPermissions: any;
    Outlook$Views: Outlook$Views;
    WebViewAllowNavigation: boolean;
    WebViewOn: boolean;
    WebViewURL: string;
  }

  declare class Outlook$Folders {
    constructor(): this;
    Add(Name: string, Type?: any): Outlook$Folder;
    Outlook$Application: Outlook$Application;
    Class: Outlook$OlObjectClass;
    Count: number;
    GetFirst(): Outlook$Folder;
    GetLast(): Outlook$Folder;
    GetNext(): Outlook$Folder;
    GetPrevious(): Outlook$Folder;
    Item(Index: any): Outlook$Folder;
    Parent: any;
    RawTable: any;
    Remove(Index: number): void;
    Session: Outlook$NameSpace;
  }

  declare class Outlook$FormDescription {
    constructor(): this;
    Outlook$Application: Outlook$Application;
    Outlook$Category: string;
    CategorySub: string;
    Class: Outlook$OlObjectClass;
    Comment: string;
    ContactName: string;
    DisplayName: string;
    Hidden: boolean;
    Icon: string;
    Locked: boolean;
    MessageClass: string;
    MiniIcon: string;
    Name: string;
    Number: string;
    OneOff: boolean;
    Parent: any;
    Password: string;
    PublishForm(Registry: Outlook$OlFormRegistry, Outlook$Folder?: any): void;
    ScriptText: string;
    Session: Outlook$NameSpace;
    Template: string;
    UseWordMail: boolean;
    Version: string;
  }

  declare class Outlook$FormNameRuleCondition {
    constructor(): this;
    Outlook$Application: Outlook$Application;
    Class: Outlook$OlObjectClass;
    ConditionType: Outlook$OlRuleConditionType;
    Enabled: boolean;
    FormName: any;
    Parent: any;
    Session: Outlook$NameSpace;
  }

  declare class Outlook$FormRegion {
    constructor(): this;
    Outlook$Application: Outlook$Application;
    Class: Outlook$OlObjectClass;
    Detail: string;
    DisplayName: string;
    EnableAutoLayout: boolean;
    Form: any;
    FormRegionMode: Outlook$OlFormRegionMode;
    Outlook$Inspector: Outlook$Inspector;
    InternalName: string;
    IsExpanded: boolean;
    Item: any;
    Language: number;
    Parent: any;
    Reflow(): void;
    Select(): void;
    Session: Outlook$NameSpace;
    SetControlItemProperty(Control: any, PropertyName: string): void;
    SuppressControlReplacement: boolean;
    Visible: boolean;
  }

  declare class Outlook$FormRegionStartup {
    constructor(): this;
    BeforeFormRegionShow(Outlook$FormRegion: Outlook$FormRegion): void;
    GetFormRegionIcon(
      FormRegionName: string,
      LCID: number,
      Icon: Outlook$OlFormRegionIcon
    ): any;
    GetFormRegionManifest(FormRegionName: string, LCID: number): any;
    GetFormRegionStorage(
      FormRegionName: string,
      Item: any,
      LCID: number,
      FormRegionMode: Outlook$OlFormRegionMode,
      FormRegionSize: Outlook$OlFormRegionSize
    ): any;
  }

  declare class Outlook$FromRssFeedRuleCondition {
    constructor(): this;
    Outlook$Application: Outlook$Application;
    Class: Outlook$OlObjectClass;
    ConditionType: Outlook$OlRuleConditionType;
    Enabled: boolean;
    FromRssFeed: any;
    Parent: any;
    Session: Outlook$NameSpace;
  }

  declare class Outlook$IconView {
    constructor(): this;
    Outlook$Application: Outlook$Application;
    Apply(): void;
    Class: Outlook$OlObjectClass;
    Copy(Name: string, SaveOption: Outlook$OlViewSaveOption): Outlook$View;
    Delete(): void;
    Filter: string;
    GoToDate(Date: VarDate): void;
    IconPlacement: Outlook$OlIconViewPlacement;
    IconViewType: Outlook$OlIconViewType;
    Language: string;
    LockUserChanges: boolean;
    Name: string;
    Parent: any;
    Reset(): void;
    Save(): void;
    SaveOption: Outlook$OlViewSaveOption;
    Session: Outlook$NameSpace;
    SortFields: Outlook$OrderFields;
    Standard: boolean;
    ViewType: Outlook$OlViewType;
    XML: string;
  }

  declare class Outlook$ImportanceRuleCondition {
    constructor(): this;
    Outlook$Application: Outlook$Application;
    Class: Outlook$OlObjectClass;
    ConditionType: Outlook$OlRuleConditionType;
    Enabled: boolean;
    Importance: Outlook$OlImportance;
    Parent: any;
    Session: Outlook$NameSpace;
  }

  declare class Outlook$Inspector {
    constructor(): this;
    Activate(): void;
    Outlook$Application: Outlook$Application;
    Outlook$AttachmentSelection: Outlook$AttachmentSelection;
    Caption: string;
    Class: Outlook$OlObjectClass;
    Close(SaveMode: Outlook$OlInspectorClose): void;
    CommandBars: Office.CommandBars;
    CurrentItem: any;
    Display(Modal?: any): void;
    EditorType: Outlook$OlEditorType;
    Height: number;
    HideFormPage(PageName: string): void;
    HTMLEditor: any;
    IsWordMail(): boolean;
    Left: number;
    ModifiedFormPages: any;
    NewFormRegion(): any;
    OpenFormRegion(Path: string): any;
    Parent: any;
    SaveFormRegion(Page: any, FileName: string): void;
    Session: Outlook$NameSpace;
    SetControlItemProperty(Control: any, PropertyName: string): void;
    SetCurrentFormPage(PageName: string): void;
    SetSchedulingStartTime(Start: VarDate): void;
    ShowFormPage(PageName: string): void;
    Top: number;
    Width: number;
    WindowState: Outlook$OlWindowState;
    WordEditor: any;
  }

  declare class Outlook$Inspectors {
    constructor(): this;
    Add(Item: any): Outlook$Inspector;
    Outlook$Application: Outlook$Application;
    Class: Outlook$OlObjectClass;
    Count: number;
    Item(Index: any): Outlook$Inspector;
    Parent: any;
    Session: Outlook$NameSpace;
  }

  declare class Outlook$ItemProperties {
    constructor(): this;
    Add(
      Name: string,
      Type: Outlook$OlUserPropertyType,
      AddToFolderFields?: any,
      DisplayFormat?: any
    ): Outlook$ItemProperty;
    Outlook$Application: Outlook$Application;
    Class: Outlook$OlObjectClass;
    Count: number;
    Item(Index: any): Outlook$ItemProperty;
    Parent: any;
    Remove(Index: number): void;
    Session: Outlook$NameSpace;
  }

  declare class Outlook$ItemProperty {
    constructor(): this;
    Outlook$Application: Outlook$Application;
    Class: Outlook$OlObjectClass;
    Delete(): void;
    Formula: string;
    IsUserProperty: boolean;
    Name: string;
    Parent: any;
    Session: Outlook$NameSpace;
    Type: Outlook$OlUserPropertyType;
    ValidationFormula: string;
    ValidationText: string;
    Value: any;
  }

  declare class Outlook$Items {
    constructor(): this;
    Add(Type?: any): any;
    Outlook$Application: Outlook$Application;
    Class: Outlook$OlObjectClass;
    Count: number;
    Find(Filter: string): any;
    FindNext(): any;
    GetFirst(): any;
    GetLast(): any;
    GetNext(): any;
    GetPrevious(): any;
    IncludeRecurrences: boolean;
    Item(Index: any): any;
    Parent: any;
    RawTable: any;
    Remove(Index: number): void;
    ResetColumns(): void;
    Restrict(Filter: string): Outlook$Items;
    Session: Outlook$NameSpace;
    SetColumns(Outlook$Columns: string): void;
    Sort(Property: string, Descending?: any): void;
  }

  declare class Outlook$JournalItem {
    constructor(): this;
    Outlook$Actions: Outlook$Actions;
    Outlook$Application: Outlook$Application;
    Outlook$Attachments: Outlook$Attachments;
    AutoResolvedWinner: boolean;
    BillingInformation: string;
    Body: string;
    Outlook$Categories: string;
    Class: Outlook$OlObjectClass;
    Close(SaveMode: Outlook$OlInspectorClose): void;
    Companies: string;
    Outlook$Conflicts: Outlook$Conflicts;
    ContactNames: string;
    ConversationID: string;
    ConversationIndex: string;
    ConversationTopic: string;
    Copy(): any;
    CreationTime: VarDate;
    Delete(): void;
    Display(Modal?: any): void;
    DocPosted: boolean;
    DocPrinted: boolean;
    DocRouted: boolean;
    DocSaved: boolean;
    DownloadState: Outlook$OlDownloadState;
    Duration: number;
    End: VarDate;
    EntryID: string;
    Outlook$FormDescription: Outlook$FormDescription;
    Forward(): Outlook$MailItem;
    GetConversation(): Outlook$Conversation;
    GetInspector: Outlook$Inspector;
    Importance: Outlook$OlImportance;
    IsConflict: boolean;
    Outlook$ItemProperties: Outlook$ItemProperties;
    LastModificationTime: VarDate;
    Outlook$Links: Outlook$Links;
    MAPIOBJECT: any;
    MarkForDownload: Outlook$OlRemoteStatus;
    MessageClass: string;
    Mileage: string;
    Move(DestFldr: Outlook$Folder): any;
    NoAging: boolean;
    OutlookInternalVersion: number;
    OutlookVersion: string;
    Parent: any;
    PrintOut(): void;
    Outlook$PropertyAccessor: Outlook$PropertyAccessor;
    Outlook$Recipients: Outlook$Recipients;
    Reply(): Outlook$MailItem;
    ReplyAll(): Outlook$MailItem;
    Save(): void;
    SaveAs(Path: string, Type?: any): void;
    Saved: boolean;
    Sensitivity: Outlook$OlSensitivity;
    Session: Outlook$NameSpace;
    ShowCategoriesDialog(): void;
    Size: number;
    Start: VarDate;
    StartTimer(): void;
    StopTimer(): void;
    Subject: string;
    Type: string;
    UnRead: boolean;
    Outlook$UserProperties: Outlook$UserProperties;
  }

  declare class Outlook$JournalModule {
    constructor(): this;
    Outlook$Application: Outlook$Application;
    Class: Outlook$OlObjectClass;
    Name: string;
    Outlook$NavigationGroups: Outlook$NavigationGroups;
    NavigationModuleType: Outlook$OlNavigationModuleType;
    Parent: any;
    Position: number;
    Session: Outlook$NameSpace;
    Visible: boolean;
  }

  declare class Outlook$Link {
    constructor(): this;
    Outlook$Application: Outlook$Application;
    Class: Outlook$OlObjectClass;
    Item: any;
    Name: string;
    Parent: any;
    Session: Outlook$NameSpace;
    Type: Outlook$OlObjectClass;
  }

  declare class Outlook$Links {
    constructor(): this;
    Add(Item: any): Outlook$Link;
    Outlook$Application: Outlook$Application;
    Class: Outlook$OlObjectClass;
    Count: number;
    Item(Index: any): Outlook$Link;
    Parent: any;
    Remove(Index: any): void;
    Session: Outlook$NameSpace;
  }

  declare class Outlook$MailItem {
    constructor(): this;
    Outlook$Actions: Outlook$Actions;
    AddBusinessCard(contact: Outlook$ContactItem): void;
    AlternateRecipientAllowed: boolean;
    Outlook$Application: Outlook$Application;
    Outlook$Attachments: Outlook$Attachments;
    AutoForwarded: boolean;
    AutoResolvedWinner: boolean;
    BCC: string;
    BillingInformation: string;
    Body: string;
    BodyFormat: Outlook$OlBodyFormat;
    Outlook$Categories: string;
    CC: string;
    Class: Outlook$OlObjectClass;
    ClearConversationIndex(): void;
    ClearTaskFlag(): void;
    Close(SaveMode: Outlook$OlInspectorClose): void;
    Companies: string;
    Outlook$Conflicts: Outlook$Conflicts;
    ConversationID: string;
    ConversationIndex: string;
    ConversationTopic: string;
    Copy(): any;
    CreationTime: VarDate;
    DeferredDeliveryTime: VarDate;
    Delete(): void;
    DeleteAfterSubmit: boolean;
    Display(Modal?: boolean): void;
    DownloadState: Outlook$OlDownloadState;
    EnableSharedAttachments: boolean;
    EntryID: string;
    ExpiryTime: VarDate;
    FlagDueBy: VarDate;
    FlagIcon: Outlook$OlFlagIcon;
    FlagRequest: string;
    FlagStatus: Outlook$OlFlagStatus;
    Outlook$FormDescription: Outlook$FormDescription;
    Forward(): Outlook$MailItem;
    GetConversation(): Outlook$Conversation;
    GetInspector: Outlook$Inspector;
    HasCoverSheet: boolean;
    HTMLBody: string;
    Importance: Outlook$OlImportance;
    InternetCodepage: number;
    IsConflict: boolean;
    IsIPFax: boolean;
    IsMarkedAsTask: boolean;
    Outlook$ItemProperties: Outlook$ItemProperties;
    LastModificationTime: VarDate;
    Outlook$Links: Outlook$Links;
    MAPIOBJECT: any;
    MarkAsTask(MarkInterval: Outlook$OlMarkInterval): void;
    MarkForDownload: Outlook$OlRemoteStatus;
    MessageClass: string;
    Mileage: string;
    Move(DestFldr: Outlook$Folder): any;
    NoAging: boolean;
    OriginatorDeliveryReportRequested: boolean;
    OutlookInternalVersion: number;
    OutlookVersion: string;
    Parent: any;
    Permission: Outlook$OlPermission;
    PermissionService: Outlook$OlPermissionService;
    PermissionTemplateGuid: string;
    PrintOut(): void;
    Outlook$PropertyAccessor: Outlook$PropertyAccessor;
    ReadReceiptRequested: boolean;
    ReceivedByEntryID: string;
    ReceivedByName: string;
    ReceivedOnBehalfOfEntryID: string;
    ReceivedOnBehalfOfName: string;
    ReceivedTime: VarDate;
    RecipientReassignmentProhibited: boolean;
    Outlook$Recipients: Outlook$Recipients;
    ReminderOverrideDefault: boolean;
    ReminderPlaySound: boolean;
    ReminderSet: boolean;
    ReminderSoundFile: string;
    ReminderTime: VarDate;
    RemoteStatus: Outlook$OlRemoteStatus;
    Reply(): Outlook$MailItem;
    ReplyAll(): Outlook$MailItem;
    ReplyRecipientNames: string;
    ReplyRecipients: Outlook$Recipients;
    RetentionExpirationDate: VarDate;
    RetentionPolicyName: string;
    RTFBody: any;
    Save(): void;
    SaveAs(Path: string, Type?: any): void;
    Saved: boolean;
    SaveSentMessageFolder: Outlook$Folder;
    Send(): void;
    Sender: Outlook$AddressEntry;
    SenderEmailAddress: string;
    SenderEmailType: string;
    SenderName: string;
    SendUsingAccount: Outlook$Account;
    Sensitivity: Outlook$OlSensitivity;
    Sent: boolean;
    SentOn: VarDate;
    SentOnBehalfOfName: string;
    Session: Outlook$NameSpace;
    ShowCategoriesDialog(): void;
    Size: number;
    Subject: string;
    Submitted: boolean;
    TaskCompletedDate: VarDate;
    TaskDueDate: VarDate;
    TaskStartDate: VarDate;
    TaskSubject: string;
    To: string;
    ToDoTaskOrdinal: VarDate;
    UnRead: boolean;
    Outlook$UserProperties: Outlook$UserProperties;
    VotingOptions: string;
    VotingResponse: string;
  }

  declare class Outlook$MailModule {
    constructor(): this;
    Outlook$Application: Outlook$Application;
    Class: Outlook$OlObjectClass;
    Name: string;
    Outlook$NavigationGroups: Outlook$NavigationGroups;
    NavigationModuleType: Outlook$OlNavigationModuleType;
    Parent: any;
    Position: number;
    Session: Outlook$NameSpace;
    Visible: boolean;
  }

  declare class Outlook$MarkAsTaskRuleAction {
    constructor(): this;
    ActionType: Outlook$OlRuleActionType;
    Outlook$Application: Outlook$Application;
    Class: Outlook$OlObjectClass;
    Enabled: boolean;
    FlagTo: string;
    MarkInterval: Outlook$OlMarkInterval;
    Parent: any;
    Session: Outlook$NameSpace;
  }

  declare class Outlook$MeetingItem {
    constructor(): this;
    Outlook$Actions: Outlook$Actions;
    Outlook$Application: Outlook$Application;
    Outlook$Attachments: Outlook$Attachments;
    AutoForwarded: boolean;
    AutoResolvedWinner: boolean;
    BillingInformation: string;
    Body: string;
    Outlook$Categories: string;
    Class: Outlook$OlObjectClass;
    Close(SaveMode: Outlook$OlInspectorClose): void;
    Companies: string;
    Outlook$Conflicts: Outlook$Conflicts;
    ConversationID: string;
    ConversationIndex: string;
    ConversationTopic: string;
    Copy(): any;
    CreationTime: VarDate;
    DeferredDeliveryTime: VarDate;
    Delete(): void;
    DeleteAfterSubmit: boolean;
    Display(Modal?: any): void;
    DownloadState: Outlook$OlDownloadState;
    EntryID: string;
    ExpiryTime: VarDate;
    FlagDueBy: VarDate;
    FlagIcon: Outlook$OlFlagIcon;
    FlagRequest: string;
    FlagStatus: Outlook$OlFlagStatus;
    Outlook$FormDescription: Outlook$FormDescription;
    Forward(): Outlook$MeetingItem;
    GetAssociatedAppointment(AddToCalendar: boolean): Outlook$AppointmentItem;
    GetConversation(): Outlook$Conversation;
    GetInspector: Outlook$Inspector;
    Importance: Outlook$OlImportance;
    IsConflict: boolean;
    IsLatestVersion: boolean;
    Outlook$ItemProperties: Outlook$ItemProperties;
    LastModificationTime: VarDate;
    Outlook$Links: Outlook$Links;
    MAPIOBJECT: any;
    MarkForDownload: Outlook$OlRemoteStatus;
    MeetingWorkspaceURL: string;
    MessageClass: string;
    Mileage: string;
    Move(DestFldr: Outlook$Folder): any;
    NoAging: boolean;
    OriginatorDeliveryReportRequested: boolean;
    OutlookInternalVersion: number;
    OutlookVersion: string;
    Parent: any;
    PrintOut(): void;
    Outlook$PropertyAccessor: Outlook$PropertyAccessor;
    ReceivedTime: VarDate;
    Outlook$Recipients: Outlook$Recipients;
    ReminderSet: boolean;
    ReminderTime: VarDate;
    Reply(): Outlook$MailItem;
    ReplyAll(): Outlook$MailItem;
    ReplyRecipients: Outlook$Recipients;
    RetentionExpirationDate: VarDate;
    RetentionPolicyName: string;
    RTFBody: any;
    Save(): void;
    SaveAs(Path: string, Type?: any): void;
    Saved: boolean;
    SaveSentMessageFolder: Outlook$Folder;
    Send(): void;
    SenderEmailAddress: string;
    SenderEmailType: string;
    SenderName: string;
    SendUsingAccount: Outlook$Account;
    Sensitivity: Outlook$OlSensitivity;
    Sent: boolean;
    SentOn: VarDate;
    Session: Outlook$NameSpace;
    ShowCategoriesDialog(): void;
    Size: number;
    Subject: string;
    Submitted: boolean;
    UnRead: boolean;
    Outlook$UserProperties: Outlook$UserProperties;
  }

  declare class Outlook$MobileItem {
    constructor(): this;
    Outlook$Actions: Outlook$Actions;
    Outlook$Application: Outlook$Application;
    Outlook$Attachments: Outlook$Attachments;
    BillingInformation: string;
    Body: string;
    Outlook$Categories: string;
    Class: Outlook$OlObjectClass;
    Close(SaveMode: Outlook$OlInspectorClose): void;
    Companies: string;
    ConversationIndex: string;
    ConversationTopic: string;
    Copy(): any;
    Count: number;
    CreationTime: VarDate;
    Delete(): void;
    Display(Modal?: any): void;
    EntryID: string;
    Outlook$FormDescription: Outlook$FormDescription;
    Forward(): Outlook$MobileItem;
    GetInspector: Outlook$Inspector;
    HTMLBody: string;
    Importance: Outlook$OlImportance;
    Outlook$ItemProperties: Outlook$ItemProperties;
    LastModificationTime: VarDate;
    MAPIOBJECT: any;
    MessageClass: string;
    Mileage: string;
    MobileFormat: Outlook$OlMobileFormat;
    Move(DestFldr: Outlook$Folder): any;
    NoAging: boolean;
    OutlookInternalVersion: number;
    OutlookVersion: string;
    Parent: any;
    PrintOut(): void;
    Outlook$PropertyAccessor: Outlook$PropertyAccessor;
    ReceivedByEntryID: string;
    ReceivedByName: string;
    ReceivedTime: VarDate;
    Outlook$Recipients: Outlook$Recipients;
    Reply(): Outlook$MobileItem;
    ReplyAll(): Outlook$MobileItem;
    ReplyRecipientNames: string;
    ReplyRecipients: Outlook$Recipients;
    Save(): void;
    SaveAs(Path: string, Type?: any): void;
    Saved: boolean;
    Send(ForceSend: boolean): void;
    SenderEmailAddress: string;
    SenderEmailType: string;
    SenderName: string;
    SendUsingAccount: Outlook$Account;
    Sensitivity: Outlook$OlSensitivity;
    Sent: boolean;
    SentOn: VarDate;
    Session: Outlook$NameSpace;
    Size: number;
    SMILBody: string;
    Subject: string;
    Submitted: boolean;
    To: string;
    UnRead: boolean;
    Outlook$UserProperties: Outlook$UserProperties;
  }

  declare class Outlook$MoveOrCopyRuleAction {
    constructor(): this;
    ActionType: Outlook$OlRuleActionType;
    Outlook$Application: Outlook$Application;
    Class: Outlook$OlObjectClass;
    Enabled: boolean;
    Outlook$Folder: Outlook$Folder;
    Parent: any;
    Session: Outlook$NameSpace;
  }

  declare class Outlook$NameSpace {
    constructor(): this;
    Outlook$Accounts: Outlook$Accounts;
    Outlook$AddressLists: Outlook$AddressLists;
    AddStore(Outlook$Store: any): void;
    AddStoreEx(Outlook$Store: any, Type: Outlook$OlStoreType): void;
    Outlook$Application: Outlook$Application;
    AutoDiscoverConnectionMode: Outlook$OlAutoDiscoverConnectionMode;
    AutoDiscoverXml: string;
    Outlook$Categories: Outlook$Categories;
    Class: Outlook$OlObjectClass;
    CompareEntryIDs(FirstEntryID: string, SecondEntryID: string): boolean;
    CreateContactCard(
      Outlook$AddressEntry: Outlook$AddressEntry
    ): Office.ContactCard;
    CreateRecipient(RecipientName: string): Outlook$Recipient;
    CreateSharingItem(Context: any, Provider?: any): Outlook$SharingItem;
    CurrentProfileName: string;
    CurrentUser: Outlook$Recipient;
    DefaultStore: Outlook$Store;
    Dial(Outlook$ContactItem?: any): void;
    ExchangeConnectionMode: Outlook$OlExchangeConnectionMode;
    ExchangeMailboxServerName: string;
    ExchangeMailboxServerVersion: string;
    Outlook$Folders: Outlook$Folders;
    GetAddressEntryFromID(ID: string): Outlook$AddressEntry;
    GetDefaultFolder(FolderType: Outlook$OlDefaultFolders): Outlook$Folder;
    GetFolderFromID(EntryIDFolder: string, EntryIDStore?: any): Outlook$Folder;
    GetGlobalAddressList(): Outlook$AddressList;
    GetItemFromID(EntryIDItem: string, EntryIDStore?: any): any;
    GetRecipientFromID(EntryID: string): Outlook$Recipient;
    GetSelectNamesDialog(): Outlook$SelectNamesDialog;
    GetSharedDefaultFolder(
      Outlook$Recipient: Outlook$Recipient,
      FolderType: Outlook$OlDefaultFolders
    ): Outlook$Folder;
    GetStoreFromID(ID: string): Outlook$Store;
    Logoff(): void;
    Logon(
      Profile?: any,
      Password?: any,
      ShowDialog?: any,
      NewSession?: any
    ): void;
    MAPIOBJECT: any;
    Offline: boolean;
    OpenSharedFolder(
      Path: string,
      Name?: any,
      DownloadAttachments?: any,
      UseTTL?: any
    ): Outlook$Folder;
    OpenSharedItem(Path: string): any;
    Parent: any;
    PickFolder(): Outlook$Folder;
    RefreshRemoteHeaders(): void;
    RemoveStore(Outlook$Folder: Outlook$Folder): void;
    SendAndReceive(showProgressDialog: boolean): void;
    Session: Outlook$NameSpace;
    Outlook$Stores: Outlook$Stores;
    Outlook$SyncObjects: Outlook$SyncObjects;
    Type: string;
  }

  declare class Outlook$NavigationFolder {
    constructor(): this;
    Outlook$Application: Outlook$Application;
    Class: Outlook$OlObjectClass;
    DisplayName: string;
    Outlook$Folder: Outlook$Folder;
    IsRemovable: boolean;
    IsSelected: boolean;
    IsSideBySide: boolean;
    Parent: any;
    Position: number;
    Session: Outlook$NameSpace;
  }

  declare class Outlook$NavigationFolders {
    constructor(): this;
    Add(Outlook$Folder: Outlook$Folder): Outlook$NavigationFolder;
    Outlook$Application: Outlook$Application;
    Class: Outlook$OlObjectClass;
    Count: number;
    Item(Index: any): Outlook$NavigationFolder;
    Parent: any;
    Remove(RemovableFolder: Outlook$NavigationFolder): void;
    Session: Outlook$NameSpace;
  }

  declare class Outlook$NavigationGroup {
    constructor(): this;
    Outlook$Application: Outlook$Application;
    Class: Outlook$OlObjectClass;
    GroupType: Outlook$OlGroupType;
    Name: string;
    Outlook$NavigationFolders: Outlook$NavigationFolders;
    Parent: any;
    Position: number;
    Session: Outlook$NameSpace;
  }

  declare class Outlook$NavigationGroups {
    constructor(): this;
    Outlook$Application: Outlook$Application;
    Class: Outlook$OlObjectClass;
    Count: number;
    Create(GroupDisplayName: string): Outlook$NavigationGroup;
    Delete(Group: Outlook$NavigationGroup): void;
    GetDefaultNavigationGroup(
      DefaultFolderGroup: Outlook$OlGroupType
    ): Outlook$NavigationGroup;
    Item(Index: any): Outlook$NavigationGroup;
    Parent: any;
    Session: Outlook$NameSpace;
  }

  declare class Outlook$NavigationModule {
    constructor(): this;
    Outlook$Application: Outlook$Application;
    Class: Outlook$OlObjectClass;
    Name: string;
    NavigationModuleType: Outlook$OlNavigationModuleType;
    Parent: any;
    Position: number;
    Session: Outlook$NameSpace;
    Visible: boolean;
  }

  declare class Outlook$NavigationModules {
    constructor(): this;
    Outlook$Application: Outlook$Application;
    Class: Outlook$OlObjectClass;
    Count: number;
    GetNavigationModule(
      ModuleType: Outlook$OlNavigationModuleType
    ): Outlook$NavigationModule;
    Item(Index: any): Outlook$NavigationModule;
    Parent: any;
    Session: Outlook$NameSpace;
  }

  declare class Outlook$NavigationPane {
    constructor(): this;
    Outlook$Application: Outlook$Application;
    Class: Outlook$OlObjectClass;
    CurrentModule: Outlook$NavigationModule;
    DisplayedModuleCount: number;
    IsCollapsed: boolean;
    Modules: Outlook$NavigationModules;
    Parent: any;
    Session: Outlook$NameSpace;
  }

  declare class Outlook$NewItemAlertRuleAction {
    constructor(): this;
    ActionType: Outlook$OlRuleActionType;
    Outlook$Application: Outlook$Application;
    Class: Outlook$OlObjectClass;
    Enabled: boolean;
    Parent: any;
    Session: Outlook$NameSpace;
    Text: string;
  }

  declare class Outlook$NoteItem {
    constructor(): this;
    Outlook$Application: Outlook$Application;
    AutoResolvedWinner: boolean;
    Body: string;
    Outlook$Categories: string;
    Class: Outlook$OlObjectClass;
    Close(SaveMode: Outlook$OlInspectorClose): void;
    Color: Outlook$OlNoteColor;
    Outlook$Conflicts: Outlook$Conflicts;
    Copy(): any;
    CreationTime: VarDate;
    Delete(): void;
    Display(Modal?: any): void;
    DownloadState: Outlook$OlDownloadState;
    EntryID: string;
    GetInspector: Outlook$Inspector;
    Height: number;
    IsConflict: boolean;
    Outlook$ItemProperties: Outlook$ItemProperties;
    LastModificationTime: VarDate;
    Left: number;
    Outlook$Links: Outlook$Links;
    MarkForDownload: Outlook$OlRemoteStatus;
    MessageClass: string;
    Move(DestFldr: Outlook$Folder): any;
    Parent: any;
    PrintOut(): void;
    Outlook$PropertyAccessor: Outlook$PropertyAccessor;
    Save(): void;
    SaveAs(Path: string, Type?: any): void;
    Saved: boolean;
    Session: Outlook$NameSpace;
    Size: number;
    Subject: string;
    Top: number;
    Width: number;
  }

  declare class Outlook$NotesModule {
    constructor(): this;
    Outlook$Application: Outlook$Application;
    Class: Outlook$OlObjectClass;
    Name: string;
    Outlook$NavigationGroups: Outlook$NavigationGroups;
    NavigationModuleType: Outlook$OlNavigationModuleType;
    Parent: any;
    Position: number;
    Session: Outlook$NameSpace;
    Visible: boolean;
  }

  declare class Outlook$OlkBusinessCardControl {
    constructor(): this;
    MouseIcon: stdole.StdPicture;
    MousePointer: Outlook$OlMousePointer;
  }

  declare class Outlook$OlkCategory {
    constructor(): this;
    AutoSize: boolean;
    BackColor: stdole.OLE_COLOR;
    BackStyle: Outlook$OlBackStyle;
    Enabled: boolean;
    ForeColor: stdole.OLE_COLOR;
    MouseIcon: stdole.StdPicture;
    MousePointer: Outlook$OlMousePointer;
  }

  declare class Outlook$OlkCheckBox {
    constructor(): this;
    Accelerator: string;
    Alignment: Outlook$OlAlignment;
    BackColor: stdole.OLE_COLOR;
    BackStyle: Outlook$OlBackStyle;
    Caption: string;
    Enabled: boolean;
    Font: stdole.StdFont;
    ForeColor: stdole.OLE_COLOR;
    MouseIcon: stdole.StdPicture;
    MousePointer: Outlook$OlMousePointer;
    TripleState: boolean;
    Value: any;
    WordWrap: boolean;
  }

  declare class Outlook$OlkComboBox {
    constructor(): this;
    AddItem(ItemText: string, Index?: any): void;
    AutoSize: boolean;
    AutoTab: boolean;
    AutoWordSelect: boolean;
    BackColor: stdole.OLE_COLOR;
    BorderStyle: Outlook$OlBorderStyle;
    Clear(): void;
    Copy(): void;
    Cut(): void;
    DragBehavior: Outlook$OlDragBehavior;
    DropDown(): void;
    Enabled: boolean;
    EnterFieldBehavior: Outlook$OlEnterFieldBehavior;
    Font: stdole.StdFont;
    ForeColor: stdole.OLE_COLOR;
    GetItem(Index: number): string;
    HideSelection: boolean;
    ListCount: number;
    ListIndex: number;
    Locked: boolean;
    MaxLength: number;
    MouseIcon: stdole.StdPicture;
    MousePointer: Outlook$OlMousePointer;
    Paste(): void;
    RemoveItem(Index: number): void;
    SelectionMargin: boolean;
    SelLength: number;
    SelStart: number;
    SelText: string;
    SetItem(Index: number, Item: string): void;
    Style: Outlook$OlComboBoxStyle;
    Text: string;
    TextAlign: Outlook$OlTextAlign;
    TopIndex: number;
    Value: any;
  }

  declare class Outlook$OlkCommandButton {
    constructor(): this;
    Accelerator: string;
    AutoSize: boolean;
    Caption: string;
    DisplayDropArrow: boolean;
    Enabled: boolean;
    Font: stdole.StdFont;
    MouseIcon: stdole.StdPicture;
    MousePointer: Outlook$OlMousePointer;
    Picture: stdole.StdPicture;
    PictureAlignment: Outlook$OlPictureAlignment;
    TextAlign: Outlook$OlTextAlign;
    WordWrap: boolean;
  }

  declare class Outlook$OlkContactPhoto {
    constructor(): this;
    Enabled: boolean;
    MouseIcon: stdole.StdPicture;
    MousePointer: Outlook$OlMousePointer;
  }

  declare class Outlook$OlkDateControl {
    constructor(): this;
    AutoSize: boolean;
    AutoWordSelect: boolean;
    BackColor: stdole.OLE_COLOR;
    BackStyle: Outlook$OlBackStyle;
    Date: VarDate;
    DropDown(): void;
    Enabled: boolean;
    EnterFieldBehavior: Outlook$OlEnterFieldBehavior;
    Font: stdole.StdFont;
    ForeColor: stdole.OLE_COLOR;
    HideSelection: boolean;
    Locked: boolean;
    MouseIcon: stdole.StdPicture;
    MousePointer: Outlook$OlMousePointer;
    ShowNoneButton: boolean;
    Text: string;
    TextAlign: Outlook$OlTextAlign;
    Value: any;
  }

  declare class Outlook$OlkFrameHeader {
    constructor(): this;
    Alignment: Outlook$OlAlignment;
    Caption: string;
    Enabled: boolean;
    Font: stdole.StdFont;
    ForeColor: stdole.OLE_COLOR;
    MouseIcon: stdole.StdPicture;
    MousePointer: Outlook$OlMousePointer;
  }

  declare class Outlook$OlkInfoBar {
    constructor(): this;
    MouseIcon: stdole.StdPicture;
    MousePointer: Outlook$OlMousePointer;
  }

  declare class Outlook$OlkLabel {
    constructor(): this;
    Accelerator: string;
    AutoSize: boolean;
    BackColor: stdole.OLE_COLOR;
    BackStyle: Outlook$OlBackStyle;
    BorderStyle: Outlook$OlBorderStyle;
    Caption: string;
    Enabled: boolean;
    Font: stdole.StdFont;
    ForeColor: stdole.OLE_COLOR;
    MouseIcon: stdole.StdPicture;
    MousePointer: Outlook$OlMousePointer;
    TextAlign: Outlook$OlTextAlign;
    UseHeaderColor: boolean;
    Value: any;
    WordWrap: boolean;
  }

  declare class Outlook$OlkListBox {
    constructor(): this;
    AddItem(ItemText: string, Index?: any): void;
    BackColor: stdole.OLE_COLOR;
    BorderStyle: Outlook$OlBorderStyle;
    Clear(): void;
    Copy(): void;
    Enabled: boolean;
    Font: stdole.StdFont;
    ForeColor: stdole.OLE_COLOR;
    GetItem(Index: number): string;
    GetSelected(Index: number): boolean;
    ListCount: number;
    ListIndex: number;
    Locked: boolean;
    MatchEntry: Outlook$OlMatchEntry;
    MouseIcon: stdole.StdPicture;
    MousePointer: Outlook$OlMousePointer;
    MultiSelect: Outlook$OlMultiSelect;
    RemoveItem(Index: number): void;
    SetItem(Index: number, Item: string): void;
    SetSelected(Index: number, Selected: boolean): void;
    Text: string;
    TextAlign: Outlook$OlTextAlign;
    TopIndex: number;
    Value: any;
  }

  declare class Outlook$OlkOptionButton {
    constructor(): this;
    Accelerator: string;
    Alignment: Outlook$OlAlignment;
    BackColor: stdole.OLE_COLOR;
    BackStyle: Outlook$OlBackStyle;
    Caption: string;
    Enabled: boolean;
    Font: stdole.StdFont;
    ForeColor: stdole.OLE_COLOR;
    GroupName: string;
    MouseIcon: stdole.StdPicture;
    MousePointer: Outlook$OlMousePointer;
    Value: any;
    WordWrap: boolean;
  }

  declare class Outlook$OlkPageControl {
    constructor(): this;
    Page: Outlook$OlPageType;
  }

  declare class Outlook$OlkSenderPhoto {
    constructor(): this;
    Enabled: boolean;
    MouseIcon: stdole.StdPicture;
    MousePointer: Outlook$OlMousePointer;
    PreferredHeight: number;
    PreferredWidth: number;
  }

  /**
   * Outlook TextBox
   */
  declare class Outlook$OlkTextBox {
    constructor(): this;
    AutoSize: boolean;
    AutoTab: boolean;
    AutoWordSelect: boolean;
    BackColor: stdole.OLE_COLOR;
    BorderStyle: Outlook$OlBorderStyle;
    Clear(): void;
    Copy(): void;
    Cut(): void;
    DragBehavior: Outlook$OlDragBehavior;
    Enabled: boolean;
    EnableRichText: boolean;
    EnterFieldBehavior: Outlook$OlEnterFieldBehavior;
    EnterKeyBehavior: boolean;
    Font: stdole.StdFont;
    ForeColor: stdole.OLE_COLOR;
    HideSelection: boolean;
    IntegralHeight: boolean;
    Locked: boolean;
    MaxLength: number;
    MouseIcon: stdole.StdPicture;
    MousePointer: Outlook$OlMousePointer;
    MultiLine: boolean;
    PasswordChar: string;
    Paste(): void;
    Scrollbars: Outlook$OlScrollBars;
    SelectionMargin: boolean;
    SelLength: number;
    SelStart: number;
    SelText: string;
    TabKeyBehavior: boolean;
    Text: string;
    TextAlign: Outlook$OlTextAlign;
    Value: any;
    WordWrap: boolean;
  }

  declare class Outlook$OlkTimeControl {
    constructor(): this;
    AutoSize: boolean;
    AutoWordSelect: boolean;
    BackColor: stdole.OLE_COLOR;
    BackStyle: Outlook$OlBackStyle;
    DropDown(): void;
    Enabled: boolean;
    EnterFieldBehavior: Outlook$OlEnterFieldBehavior;
    Font: stdole.StdFont;
    ForeColor: stdole.OLE_COLOR;
    HideSelection: boolean;
    IntervalTime: VarDate;
    Locked: boolean;
    MouseIcon: stdole.StdPicture;
    MousePointer: Outlook$OlMousePointer;
    ReferenceTime: VarDate;
    Style: Outlook$OlTimeStyle;
    Text: string;
    TextAlign: Outlook$OlTextAlign;
    Time: VarDate;
    Value: any;
  }

  declare class Outlook$OlkTimeZoneControl {
    constructor(): this;
    AppointmentTimeField: Outlook$OlAppointmentTimeField;
    BorderStyle: Outlook$OlBorderStyle;
    DropDown(): void;
    Enabled: boolean;
    Locked: boolean;
    MouseIcon: stdole.StdPicture;
    MousePointer: Outlook$OlMousePointer;
    SelectedTimeZoneIndex: number;
    Value: any;
  }

  declare class Outlook$OrderField {
    constructor(): this;
    Outlook$Application: Outlook$Application;
    Class: Outlook$OlObjectClass;
    IsDescending: boolean;
    Parent: any;
    Session: Outlook$NameSpace;
    ViewXMLSchemaName: string;
  }

  declare class Outlook$OrderFields {
    constructor(): this;
    Add(PropertyName: string, IsDescending?: any): Outlook$OrderField;
    Outlook$Application: Outlook$Application;
    Class: Outlook$OlObjectClass;
    Count: number;
    Insert(
      PropertyName: string,
      Index: any,
      IsDescending?: any
    ): Outlook$OrderField;
    Item(Index: any): Outlook$OrderField;
    Parent: any;
    Remove(Index: any): void;
    RemoveAll(): void;
    Session: Outlook$NameSpace;
  }

  declare class Outlook$OutlookBarGroup {
    constructor(): this;
    Outlook$Application: Outlook$Application;
    Class: Outlook$OlObjectClass;
    Name: string;
    Parent: any;
    Session: Outlook$NameSpace;
    Shortcuts: Outlook$OutlookBarShortcuts;
    ViewType: Outlook$OlOutlookBarViewType;
  }

  declare class Outlook$OutlookBarGroups {
    constructor(): this;
    Add(Name: string, Index?: any): Outlook$OutlookBarGroup;
    Outlook$Application: Outlook$Application;
    Class: Outlook$OlObjectClass;
    Count: number;
    Item(Index: any): Outlook$OutlookBarGroup;
    Parent: any;
    Remove(Index: any): void;
    Session: Outlook$NameSpace;
  }

  declare class Outlook$OutlookBarPane {
    constructor(): this;
    Outlook$Application: Outlook$Application;
    Class: Outlook$OlObjectClass;
    Contents: Outlook$OutlookBarStorage;
    CurrentGroup: Outlook$OutlookBarGroup;
    Name: string;
    Parent: any;
    Session: Outlook$NameSpace;
    Visible: boolean;
  }

  declare class Outlook$OutlookBarShortcut {
    constructor(): this;
    Outlook$Application: Outlook$Application;
    Class: Outlook$OlObjectClass;
    Name: string;
    Parent: any;
    Session: Outlook$NameSpace;
    SetIcon(Icon: any): void;
    Target: any;
  }

  declare class Outlook$OutlookBarShortcuts {
    constructor(): this;
    Add(Target: any, Name: string, Index?: any): Outlook$OutlookBarShortcut;
    Outlook$Application: Outlook$Application;
    Class: Outlook$OlObjectClass;
    Count: number;
    Item(Index: any): Outlook$OutlookBarShortcut;
    Parent: any;
    Remove(Index: any): void;
    Session: Outlook$NameSpace;
  }

  declare class Outlook$OutlookBarStorage {
    constructor(): this;
    Outlook$Application: Outlook$Application;
    Class: Outlook$OlObjectClass;
    Groups: Outlook$OutlookBarGroups;
    Parent: any;
    Session: Outlook$NameSpace;
  }

  declare class Outlook$Panes {
    constructor(): this;
    Outlook$Application: Outlook$Application;
    Class: Outlook$OlObjectClass;
    Count: number;
    Item(Index: any): any;
    Parent: any;
    Session: Outlook$NameSpace;
  }

  declare class Outlook$PlaySoundRuleAction {
    constructor(): this;
    ActionType: Outlook$OlRuleActionType;
    Outlook$Application: Outlook$Application;
    Class: Outlook$OlObjectClass;
    Enabled: boolean;
    FilePath: string;
    Parent: any;
    Session: Outlook$NameSpace;
  }

  declare class Outlook$PostItem {
    constructor(): this;
    Outlook$Actions: Outlook$Actions;
    Outlook$Application: Outlook$Application;
    Outlook$Attachments: Outlook$Attachments;
    AutoResolvedWinner: boolean;
    BillingInformation: string;
    Body: string;
    BodyFormat: Outlook$OlBodyFormat;
    Outlook$Categories: string;
    Class: Outlook$OlObjectClass;
    ClearConversationIndex(): void;
    ClearTaskFlag(): void;
    Close(SaveMode: Outlook$OlInspectorClose): void;
    Companies: string;
    Outlook$Conflicts: Outlook$Conflicts;
    ConversationID: string;
    ConversationIndex: string;
    ConversationTopic: string;
    Copy(): any;
    CreationTime: VarDate;
    Delete(): void;
    Display(Modal?: any): void;
    DownloadState: Outlook$OlDownloadState;
    EntryID: string;
    ExpiryTime: VarDate;
    Outlook$FormDescription: Outlook$FormDescription;
    Forward(): Outlook$MailItem;
    GetConversation(): Outlook$Conversation;
    GetInspector: Outlook$Inspector;
    HTMLBody: string;
    Importance: Outlook$OlImportance;
    InternetCodepage: number;
    IsConflict: boolean;
    IsMarkedAsTask: boolean;
    Outlook$ItemProperties: Outlook$ItemProperties;
    LastModificationTime: VarDate;
    Outlook$Links: Outlook$Links;
    MAPIOBJECT: any;
    MarkAsTask(MarkInterval: Outlook$OlMarkInterval): void;
    MarkForDownload: Outlook$OlRemoteStatus;
    MessageClass: string;
    Mileage: string;
    Move(DestFldr: Outlook$Folder): any;
    NoAging: boolean;
    OutlookInternalVersion: number;
    OutlookVersion: string;
    Parent: any;
    Post(): void;
    PrintOut(): void;
    Outlook$PropertyAccessor: Outlook$PropertyAccessor;
    ReceivedTime: VarDate;
    ReminderOverrideDefault: boolean;
    ReminderPlaySound: boolean;
    ReminderSet: boolean;
    ReminderSoundFile: string;
    ReminderTime: VarDate;
    Reply(): Outlook$MailItem;
    RTFBody: any;
    Save(): void;
    SaveAs(Path: string, Type?: any): void;
    Saved: boolean;
    SenderEmailAddress: string;
    SenderEmailType: string;
    SenderName: string;
    Sensitivity: Outlook$OlSensitivity;
    SentOn: VarDate;
    Session: Outlook$NameSpace;
    SetACLs(): boolean;
    ShowCategoriesDialog(): void;
    Size: number;
    Subject: string;
    TaskCompletedDate: VarDate;
    TaskDueDate: VarDate;
    TaskStartDate: VarDate;
    TaskSubject: string;
    ToDoTaskOrdinal: VarDate;
    UnRead: boolean;
    Outlook$UserProperties: Outlook$UserProperties;
  }

  declare class Outlook$PropertyAccessor {
    constructor(): this;
    Outlook$Application: Outlook$Application;
    BinaryToString(Value: any): string;
    Class: Outlook$OlObjectClass;
    DeleteProperties(SchemaNames: any): any;
    DeleteProperty(SchemaName: string): void;
    GetProperties(SchemaNames: any): any;
    GetProperty(SchemaName: string): any;
    LocalTimeToUTC(Value: VarDate): VarDate;
    Parent: any;
    Session: Outlook$NameSpace;
    SetProperties(SchemaNames: any, Values: any): any;
    SetProperty(SchemaName: string, Value: any): void;
    StringToBinary(Value: string): any;
    UTCToLocalTime(Value: VarDate): VarDate;
  }

  declare class Outlook$PropertyPages {
    constructor(): this;
    Add(Page: any, Title: string): void;
    Outlook$Application: Outlook$Application;
    Class: Outlook$OlObjectClass;
    Count: number;
    Item(Index: any): any;
    Parent: any;
    Remove(Index: any): void;
    Session: Outlook$NameSpace;
  }

  declare class Outlook$Recipient {
    constructor(): this;
    Address: string;
    Outlook$AddressEntry: Outlook$AddressEntry;
    Outlook$Application: Outlook$Application;
    AutoResponse: string;
    Class: Outlook$OlObjectClass;
    Delete(): void;
    DisplayType: Outlook$OlDisplayType;
    EntryID: string;
    FreeBusy(Start: VarDate, MinPerChar: number, CompleteFormat?: any): string;
    Index: number;
    MeetingResponseStatus: Outlook$OlResponseStatus;
    Name: string;
    Parent: any;
    Outlook$PropertyAccessor: Outlook$PropertyAccessor;
    Resolve(): boolean;
    Resolved: boolean;
    Sendable: boolean;
    Session: Outlook$NameSpace;
    TrackingStatus: Outlook$OlTrackingStatus;
    TrackingStatusTime: VarDate;
    Type: number;
  }

  declare class Outlook$Recipients {
    constructor(): this;
    Add(Name: string): Outlook$Recipient;
    Outlook$Application: Outlook$Application;
    Class: Outlook$OlObjectClass;
    Count: number;
    Item(Index: any): Outlook$Recipient;
    Parent: any;
    Remove(Index: number): void;
    ResolveAll(): boolean;
    Session: Outlook$NameSpace;
  }

  declare class Outlook$RecurrencePattern {
    constructor(): this;
    Outlook$Application: Outlook$Application;
    Class: Outlook$OlObjectClass;
    DayOfMonth: number;
    DayOfWeekMask: Outlook$OlDaysOfWeek;
    Duration: number;
    EndTime: VarDate;
    Outlook$Exceptions: Outlook$Exceptions;
    GetOccurrence(StartDate: VarDate): Outlook$AppointmentItem;
    Instance: number;
    Interval: number;
    MonthOfYear: number;
    NoEndDate: boolean;
    Occurrences: number;
    Parent: any;
    PatternEndDate: VarDate;
    PatternStartDate: VarDate;
    RecurrenceType: Outlook$OlRecurrenceType;
    Regenerate: boolean;
    Session: Outlook$NameSpace;
    StartTime: VarDate;
  }

  declare class Outlook$Reminder {
    constructor(): this;
    Outlook$Application: Outlook$Application;
    Caption: string;
    Class: Outlook$OlObjectClass;
    Dismiss(): void;
    IsVisible: boolean;
    Item: any;
    NextReminderDate: VarDate;
    OriginalReminderDate: VarDate;
    Parent: any;
    Session: Outlook$NameSpace;
    Snooze(SnoozeTime?: any): void;
  }

  declare class Outlook$Reminders {
    constructor(): this;
    Outlook$Application: Outlook$Application;
    Class: Outlook$OlObjectClass;
    Count: number;
    Item(Index: any): Outlook$Reminder;
    Parent: any;
    Remove(Index: any): void;
    Session: Outlook$NameSpace;
  }

  declare class Outlook$RemoteItem {
    constructor(): this;
    Outlook$Actions: Outlook$Actions;
    Outlook$Application: Outlook$Application;
    Outlook$Attachments: Outlook$Attachments;
    AutoResolvedWinner: boolean;
    BillingInformation: string;
    Body: string;
    Outlook$Categories: string;
    Class: Outlook$OlObjectClass;
    Close(SaveMode: Outlook$OlInspectorClose): void;
    Companies: string;
    Outlook$Conflicts: Outlook$Conflicts;
    ConversationID: string;
    ConversationIndex: string;
    ConversationTopic: string;
    Copy(): any;
    CreationTime: VarDate;
    Delete(): void;
    Display(Modal?: any): void;
    DownloadState: Outlook$OlDownloadState;
    EntryID: string;
    Outlook$FormDescription: Outlook$FormDescription;
    GetConversation(): Outlook$Conversation;
    GetInspector: Outlook$Inspector;
    HasAttachment: boolean;
    Importance: Outlook$OlImportance;
    IsConflict: boolean;
    Outlook$ItemProperties: Outlook$ItemProperties;
    LastModificationTime: VarDate;
    Outlook$Links: Outlook$Links;
    MAPIOBJECT: any;
    MarkForDownload: Outlook$OlRemoteStatus;
    MessageClass: string;
    Mileage: string;
    Move(DestFldr: Outlook$Folder): any;
    NoAging: boolean;
    OutlookInternalVersion: number;
    OutlookVersion: string;
    Parent: any;
    PrintOut(): void;
    Outlook$PropertyAccessor: Outlook$PropertyAccessor;
    RemoteMessageClass: string;
    Save(): void;
    SaveAs(Path: string, Type?: any): void;
    Saved: boolean;
    Sensitivity: Outlook$OlSensitivity;
    Session: Outlook$NameSpace;
    ShowCategoriesDialog(): void;
    Size: number;
    Subject: string;
    TransferSize: number;
    TransferTime: number;
    UnRead: boolean;
    Outlook$UserProperties: Outlook$UserProperties;
  }

  declare class Outlook$ReportItem {
    constructor(): this;
    Outlook$Actions: Outlook$Actions;
    Outlook$Application: Outlook$Application;
    Outlook$Attachments: Outlook$Attachments;
    AutoResolvedWinner: boolean;
    BillingInformation: string;
    Body: string;
    Outlook$Categories: string;
    Class: Outlook$OlObjectClass;
    Close(SaveMode: Outlook$OlInspectorClose): void;
    Companies: string;
    Outlook$Conflicts: Outlook$Conflicts;
    ConversationID: string;
    ConversationIndex: string;
    ConversationTopic: string;
    Copy(): any;
    CreationTime: VarDate;
    Delete(): void;
    Display(Modal?: any): void;
    DownloadState: Outlook$OlDownloadState;
    EntryID: string;
    Outlook$FormDescription: Outlook$FormDescription;
    GetConversation(): Outlook$Conversation;
    GetInspector: Outlook$Inspector;
    Importance: Outlook$OlImportance;
    IsConflict: boolean;
    Outlook$ItemProperties: Outlook$ItemProperties;
    LastModificationTime: VarDate;
    Outlook$Links: Outlook$Links;
    MAPIOBJECT: any;
    MarkForDownload: Outlook$OlRemoteStatus;
    MessageClass: string;
    Mileage: string;
    Move(DestFldr: Outlook$Folder): any;
    NoAging: boolean;
    OutlookInternalVersion: number;
    OutlookVersion: string;
    Parent: any;
    PrintOut(): void;
    Outlook$PropertyAccessor: Outlook$PropertyAccessor;
    RetentionExpirationDate: VarDate;
    RetentionPolicyName: string;
    Save(): void;
    SaveAs(Path: string, Type?: any): void;
    Saved: boolean;
    Sensitivity: Outlook$OlSensitivity;
    Session: Outlook$NameSpace;
    ShowCategoriesDialog(): void;
    Size: number;
    Subject: string;
    UnRead: boolean;
    Outlook$UserProperties: Outlook$UserProperties;
  }

  declare class Outlook$Results {
    constructor(): this;
    Outlook$Application: Outlook$Application;
    Class: Outlook$OlObjectClass;
    Count: number;
    DefaultItemType: Outlook$OlItemType;
    GetFirst(): any;
    GetLast(): any;
    GetNext(): any;
    GetPrevious(): any;
    Item(Index: any): any;
    Parent: any;
    RawTable: any;
    ResetColumns(): void;
    Session: Outlook$NameSpace;
    SetColumns(Outlook$Columns: string): void;
    Sort(Property: string, Descending?: any): void;
  }

  declare class Outlook$Row {
    constructor(): this;
    Outlook$Application: Outlook$Application;
    BinaryToString(Index: any): string;
    Class: Outlook$OlObjectClass;
    GetValues(): any;
    Item(Index: any): any;
    LocalTimeToUTC(Index: any): VarDate;
    Parent: any;
    Session: Outlook$NameSpace;
    UTCToLocalTime(Index: any): VarDate;
  }

  declare class Outlook$Rule {
    constructor(): this;
    Outlook$Actions: Outlook$RuleActions;
    Outlook$Application: Outlook$Application;
    Class: Outlook$OlObjectClass;
    Conditions: Outlook$RuleConditions;
    Enabled: boolean;
    Outlook$Exceptions: Outlook$RuleConditions;
    Execute(
      ShowProgress?: any,
      Outlook$Folder?: any,
      IncludeSubfolders?: any,
      RuleExecuteOption?: any
    ): void;
    ExecutionOrder: number;
    IsLocalRule: boolean;
    Name: string;
    Parent: any;
    RuleType: Outlook$OlRuleType;
    Session: Outlook$NameSpace;
  }

  declare class Outlook$RuleAction {
    constructor(): this;
    ActionType: Outlook$OlRuleActionType;
    Outlook$Application: Outlook$Application;
    Class: Outlook$OlObjectClass;
    Enabled: boolean;
    Parent: any;
    Session: Outlook$NameSpace;
  }

  declare class Outlook$RuleActions {
    constructor(): this;
    Outlook$Application: Outlook$Application;
    AssignToCategory: Outlook$AssignToCategoryRuleAction;
    CC: Outlook$SendRuleAction;
    Class: Outlook$OlObjectClass;
    ClearCategories: Outlook$RuleAction;
    CopyToFolder: Outlook$MoveOrCopyRuleAction;
    Count: number;
    Delete: Outlook$RuleAction;
    DeletePermanently: Outlook$RuleAction;
    DesktopAlert: Outlook$RuleAction;
    Forward: Outlook$SendRuleAction;
    ForwardAsAttachment: Outlook$SendRuleAction;
    Item(Index: number): Outlook$RuleAction;
    MarkAsTask: Outlook$MarkAsTaskRuleAction;
    MoveToFolder: Outlook$MoveOrCopyRuleAction;
    NewItemAlert: Outlook$NewItemAlertRuleAction;
    NotifyDelivery: Outlook$RuleAction;
    NotifyRead: Outlook$RuleAction;
    Parent: any;
    PlaySound: Outlook$PlaySoundRuleAction;
    Redirect: Outlook$SendRuleAction;
    Session: Outlook$NameSpace;
    Stop: Outlook$RuleAction;
  }

  declare class Outlook$RuleCondition {
    constructor(): this;
    Outlook$Application: Outlook$Application;
    Class: Outlook$OlObjectClass;
    ConditionType: Outlook$OlRuleConditionType;
    Enabled: boolean;
    Parent: any;
    Session: Outlook$NameSpace;
  }

  declare class Outlook$RuleConditions {
    constructor(): this;
    Outlook$Account: Outlook$AccountRuleCondition;
    AnyCategory: Outlook$RuleCondition;
    Outlook$Application: Outlook$Application;
    Body: Outlook$TextRuleCondition;
    BodyOrSubject: Outlook$TextRuleCondition;
    Outlook$Category: Outlook$CategoryRuleCondition;
    CC: Outlook$RuleCondition;
    Class: Outlook$OlObjectClass;
    Count: number;
    FormName: Outlook$FormNameRuleCondition;
    From: Outlook$ToOrFromRuleCondition;
    FromAnyRSSFeed: Outlook$RuleCondition;
    FromRssFeed: Outlook$FromRssFeedRuleCondition;
    HasAttachment: Outlook$RuleCondition;
    Importance: Outlook$ImportanceRuleCondition;
    Item(Index: number): Outlook$RuleCondition;
    MeetingInviteOrUpdate: Outlook$RuleCondition;
    MessageHeader: Outlook$TextRuleCondition;
    NotTo: Outlook$RuleCondition;
    OnLocalMachine: Outlook$RuleCondition;
    OnlyToMe: Outlook$RuleCondition;
    OnOtherMachine: Outlook$RuleCondition;
    Parent: any;
    RecipientAddress: Outlook$AddressRuleCondition;
    SenderAddress: Outlook$AddressRuleCondition;
    SenderInAddressList: Outlook$SenderInAddressListRuleCondition;
    SentTo: Outlook$ToOrFromRuleCondition;
    Session: Outlook$NameSpace;
    Subject: Outlook$TextRuleCondition;
    ToMe: Outlook$RuleCondition;
    ToOrCc: Outlook$RuleCondition;
  }

  declare class Outlook$Rules {
    constructor(): this;
    Outlook$Application: Outlook$Application;
    Class: Outlook$OlObjectClass;
    Count: number;
    Create(Name: string, RuleType: Outlook$OlRuleType): Outlook$Rule;
    IsRssRulesProcessingEnabled: boolean;
    Item(Index: any): Outlook$Rule;
    Parent: any;
    Remove(Index: any): void;
    Save(ShowProgress?: any): void;
    Session: Outlook$NameSpace;
  }

  declare class Outlook$Search {
    constructor(): this;
    Outlook$Application: Outlook$Application;
    Class: Outlook$OlObjectClass;
    Filter: string;
    GetTable(): Outlook$Table;
    IsSynchronous: boolean;
    Parent: any;
    Outlook$Results: Outlook$Results;
    Save(Name: string): Outlook$Folder;
    Scope: string;
    SearchSubFolders: boolean;
    Session: Outlook$NameSpace;
    Stop(): void;
    Tag: string;
  }

  declare class Outlook$Selection {
    constructor(): this;
    Outlook$Application: Outlook$Application;
    Class: Outlook$OlObjectClass;
    Count: number;
    GetSelection(
      SelectionContents: Outlook$OlSelectionContents
    ): Outlook$Selection;
    Item(Index: any): any;
    Location: Outlook$OlSelectionLocation;
    Parent: any;
    Session: Outlook$NameSpace;
  }

  declare class Outlook$SelectNamesDialog {
    constructor(): this;
    AllowMultipleSelection: boolean;
    Outlook$Application: Outlook$Application;
    BccLabel: string;
    Caption: string;
    CcLabel: string;
    Class: Outlook$OlObjectClass;
    Display(): boolean;
    ForceResolution: boolean;
    InitialAddressList: Outlook$AddressList;
    NumberOfRecipientSelectors: Outlook$OlRecipientSelectors;
    Parent: any;
    Outlook$Recipients: Outlook$Recipients;
    Session: Outlook$NameSpace;
    SetDefaultDisplayMode(
      defaultMode: Outlook$OlDefaultSelectNamesDisplayMode
    ): void;
    ShowOnlyInitialAddressList: boolean;
    ToLabel: string;
  }

  declare class Outlook$SenderInAddressListRuleCondition {
    constructor(): this;
    Outlook$AddressList: Outlook$AddressList;
    Outlook$Application: Outlook$Application;
    Class: Outlook$OlObjectClass;
    ConditionType: Outlook$OlRuleConditionType;
    Enabled: boolean;
    Parent: any;
    Session: Outlook$NameSpace;
  }

  declare class Outlook$SendRuleAction {
    constructor(): this;
    ActionType: Outlook$OlRuleActionType;
    Outlook$Application: Outlook$Application;
    Class: Outlook$OlObjectClass;
    Enabled: boolean;
    Parent: any;
    Outlook$Recipients: Outlook$Recipients;
    Session: Outlook$NameSpace;
  }

  declare class Outlook$SharingItem {
    constructor(): this;
    Outlook$Actions: Outlook$Actions;
    AddBusinessCard(contact: Outlook$ContactItem): void;
    Allow(): void;
    AllowWriteAccess: boolean;
    AlternateRecipientAllowed: boolean;
    Outlook$Application: Outlook$Application;
    Outlook$Attachments: Outlook$Attachments;
    AutoForwarded: boolean;
    BCC: string;
    BillingInformation: string;
    Body: string;
    BodyFormat: Outlook$OlBodyFormat;
    Outlook$Categories: string;
    CC: string;
    Class: Outlook$OlObjectClass;
    ClearConversationIndex(): void;
    ClearTaskFlag(): void;
    Close(SaveMode: Outlook$OlInspectorClose): void;
    Companies: string;
    Outlook$Conflicts: Outlook$Conflicts;
    ConversationID: string;
    ConversationIndex: string;
    ConversationTopic: string;
    Copy(): any;
    CreationTime: VarDate;
    DeferredDeliveryTime: VarDate;
    Delete(): void;
    DeleteAfterSubmit: boolean;
    Deny(): Outlook$SharingItem;
    Display(Modal?: any): void;
    DownloadState: Outlook$OlDownloadState;
    EnableSharedAttachments: boolean;
    EntryID: string;
    ExpiryTime: VarDate;
    FlagDueBy: VarDate;
    FlagIcon: Outlook$OlFlagIcon;
    FlagRequest: string;
    FlagStatus: Outlook$OlFlagStatus;
    Outlook$FormDescription: Outlook$FormDescription;
    Forward(): Outlook$SharingItem;
    GetConversation(): Outlook$Conversation;
    GetInspector: Outlook$Inspector;
    HTMLBody: string;
    Importance: Outlook$OlImportance;
    InternetCodepage: number;
    IsConflict: boolean;
    IsMarkedAsTask: boolean;
    Outlook$ItemProperties: Outlook$ItemProperties;
    LastModificationTime: VarDate;
    MAPIOBJECT: any;
    MarkAsTask(MarkInterval: Outlook$OlMarkInterval): void;
    MarkForDownload: Outlook$OlRemoteStatus;
    MessageClass: string;
    Mileage: string;
    Move(DestFldr: Outlook$Folder): any;
    NoAging: boolean;
    OpenSharedFolder(): Outlook$Folder;
    OriginatorDeliveryReportRequested: boolean;
    OutlookInternalVersion: number;
    OutlookVersion: string;
    Parent: any;
    Permission: Outlook$OlPermission;
    PermissionService: Outlook$OlPermissionService;
    PermissionTemplateGuid: string;
    PrintOut(): void;
    Outlook$PropertyAccessor: Outlook$PropertyAccessor;
    ReadReceiptRequested: boolean;
    ReceivedByEntryID: string;
    ReceivedByName: string;
    ReceivedOnBehalfOfEntryID: string;
    ReceivedOnBehalfOfName: string;
    ReceivedTime: VarDate;
    RecipientReassignmentProhibited: boolean;
    Outlook$Recipients: Outlook$Recipients;
    ReminderOverrideDefault: boolean;
    ReminderPlaySound: boolean;
    ReminderSet: boolean;
    ReminderSoundFile: string;
    ReminderTime: VarDate;
    RemoteID: string;
    RemoteName: string;
    RemotePath: string;
    RemoteStatus: Outlook$OlRemoteStatus;
    Reply(): Outlook$MailItem;
    ReplyAll(): Outlook$MailItem;
    ReplyRecipientNames: string;
    ReplyRecipients: Outlook$Recipients;
    RequestedFolder: Outlook$OlDefaultFolders;
    RetentionExpirationDate: VarDate;
    RetentionPolicyName: string;
    RTFBody: any;
    Save(): void;
    SaveAs(Path: string, Type?: any): void;
    Saved: boolean;
    SaveSentMessageFolder: Outlook$Folder;
    Send(): void;
    SenderEmailAddress: string;
    SenderEmailType: string;
    SenderName: string;
    SendUsingAccount: Outlook$Account;
    Sensitivity: Outlook$OlSensitivity;
    Sent: boolean;
    SentOn: VarDate;
    SentOnBehalfOfName: string;
    Session: Outlook$NameSpace;
    SharingProvider: Outlook$OlSharingProvider;
    SharingProviderGuid: string;
    ShowCategoriesDialog(): void;
    Size: number;
    Subject: string;
    Submitted: boolean;
    TaskCompletedDate: VarDate;
    TaskDueDate: VarDate;
    TaskStartDate: VarDate;
    TaskSubject: string;
    To: string;
    ToDoTaskOrdinal: VarDate;
    Type: Outlook$OlSharingMsgType;
    UnRead: boolean;
    Outlook$UserProperties: Outlook$UserProperties;
  }

  declare class Outlook$SimpleItems {
    constructor(): this;
    Outlook$Application: Outlook$Application;
    Class: Outlook$OlObjectClass;
    Count: number;
    Item(Index: any): any;
    Parent: any;
    Session: Outlook$NameSpace;
  }

  declare class Outlook$SolutionsModule {
    constructor(): this;
    AddSolution(Solution: Outlook$Folder, Scope: Outlook$OlSolutionScope): void;
    Outlook$Application: Outlook$Application;
    Class: Outlook$OlObjectClass;
    Name: string;
    NavigationModuleType: Outlook$OlNavigationModuleType;
    Parent: any;
    Position: number;
    Session: Outlook$NameSpace;
    Visible: boolean;
  }

  declare class Outlook$StorageItem {
    constructor(): this;
    Outlook$Application: Outlook$Application;
    Outlook$Attachments: Outlook$Attachments;
    Body: string;
    Class: Outlook$OlObjectClass;
    CreationTime: VarDate;
    Creator: string;
    Delete(): void;
    EntryID: string;
    LastModificationTime: VarDate;
    Parent: any;
    Outlook$PropertyAccessor: Outlook$PropertyAccessor;
    Save(): void;
    Session: Outlook$NameSpace;
    Size: number;
    Subject: string;
    Outlook$UserProperties: Outlook$UserProperties;
  }

  declare class Outlook$Store {
    constructor(): this;
    Outlook$Application: Outlook$Application;
    Outlook$Categories: Outlook$Categories;
    Class: Outlook$OlObjectClass;
    DisplayName: string;
    ExchangeStoreType: Outlook$OlExchangeStoreType;
    FilePath: string;
    GetDefaultFolder(FolderType: Outlook$OlDefaultFolders): Outlook$Folder;
    GetRootFolder(): Outlook$Folder;
    GetRules(): Outlook$Rules;
    GetSearchFolders(): Outlook$Folders;
    GetSpecialFolder(FolderType: Outlook$OlSpecialFolders): Outlook$Folder;
    IsCachedExchange: boolean;
    IsConversationEnabled: boolean;
    IsDataFileStore: boolean;
    IsInstantSearchEnabled: boolean;
    IsOpen: boolean;
    MAPIOBJECT: any;
    Parent: any;
    Outlook$PropertyAccessor: Outlook$PropertyAccessor;
    RefreshQuotaDisplay(): void;
    Session: Outlook$NameSpace;
    StoreID: string;
  }

  declare class Outlook$Stores {
    constructor(): this;
    Outlook$Application: Outlook$Application;
    Class: Outlook$OlObjectClass;
    Count: number;
    Item(Index: any): Outlook$Store;
    Parent: any;
    Session: Outlook$NameSpace;
  }

  declare class Outlook$SyncObject {
    constructor(): this;
    Outlook$Application: Outlook$Application;
    Class: Outlook$OlObjectClass;
    Name: string;
    Parent: any;
    Session: Outlook$NameSpace;
    Start(): void;
    Stop(): void;
  }

  declare class Outlook$SyncObjects {
    constructor(): this;
    AppFolders: Outlook$SyncObject;
    Outlook$Application: Outlook$Application;
    Class: Outlook$OlObjectClass;
    Count: number;
    Item(Index: any): Outlook$SyncObject;
    Parent: any;
    Session: Outlook$NameSpace;
  }

  declare class Outlook$Table {
    constructor(): this;
    Outlook$Application: Outlook$Application;
    Class: Outlook$OlObjectClass;
    Outlook$Columns: Outlook$Columns;
    EndOfTable: boolean;
    FindNextRow(): Outlook$Row;
    FindRow(Filter: string): Outlook$Row;
    GetArray(MaxRows: number): any;
    GetNextRow(): Outlook$Row;
    GetRowCount(): number;
    MoveToStart(): void;
    Parent: any;
    Restrict(Filter: string): Outlook$Table;
    Session: Outlook$NameSpace;
    Sort(SortProperty: string, Descending?: any): void;
  }

  declare class Outlook$TableView {
    constructor(): this;
    AllowInCellEditing: boolean;
    AlwaysExpandConversation: boolean;
    Outlook$Application: Outlook$Application;
    Apply(): void;
    Outlook$AutoFormatRules: Outlook$AutoFormatRules;
    AutomaticColumnSizing: boolean;
    AutomaticGrouping: boolean;
    AutoPreview: Outlook$OlAutoPreview;
    AutoPreviewFont: Outlook$ViewFont;
    Class: Outlook$OlObjectClass;
    ColumnFont: Outlook$ViewFont;
    Copy(Name: string, SaveOption: Outlook$OlViewSaveOption): Outlook$View;
    DefaultExpandCollapseSetting: Outlook$OlDefaultExpandCollapseSetting;
    Delete(): void;
    Filter: string;
    GetTable(): Outlook$Table;
    GoToDate(Date: VarDate): void;
    GridLineStyle: Outlook$OlGridLineStyle;
    GroupByFields: Outlook$OrderFields;
    HideReadingPaneHeaderInfo: boolean;
    Language: string;
    LockUserChanges: boolean;
    MaxLinesInMultiLineView: number;
    MultiLine: Outlook$OlMultiLine;
    MultiLineWidth: number;
    Name: string;
    Parent: any;
    Reset(): void;
    RowFont: Outlook$ViewFont;
    Save(): void;
    SaveOption: Outlook$OlViewSaveOption;
    Session: Outlook$NameSpace;
    ShowConversationByDate: boolean;
    ShowConversationSendersAboveSubject: boolean;
    ShowFullConversations: boolean;
    ShowItemsInGroups: boolean;
    ShowNewItemRow: boolean;
    ShowReadingPane: boolean;
    ShowUnreadAndFlaggedMessages: boolean;
    SortFields: Outlook$OrderFields;
    Standard: boolean;
    Outlook$ViewFields: Outlook$ViewFields;
    ViewType: Outlook$OlViewType;
    XML: string;
  }

  declare class Outlook$TaskItem {
    constructor(): this;
    Outlook$Actions: Outlook$Actions;
    ActualWork: number;
    Outlook$Application: Outlook$Application;
    Assign(): Outlook$TaskItem;
    Outlook$Attachments: Outlook$Attachments;
    AutoResolvedWinner: boolean;
    BillingInformation: string;
    Body: string;
    CancelResponseState(): void;
    CardData: string;
    Outlook$Categories: string;
    Class: Outlook$OlObjectClass;
    ClearRecurrencePattern(): void;
    Close(SaveMode: Outlook$OlInspectorClose): void;
    Companies: string;
    Complete: boolean;
    Outlook$Conflicts: Outlook$Conflicts;
    ContactNames: string;
    Contacts: string;
    ConversationID: string;
    ConversationIndex: string;
    ConversationTopic: string;
    Copy(): any;
    CreationTime: VarDate;
    DateCompleted: VarDate;
    DelegationState: Outlook$OlTaskDelegationState;
    Delegator: string;
    Delete(): void;
    Display(Modal?: any): void;
    DownloadState: Outlook$OlDownloadState;
    DueDate: VarDate;
    EntryID: string;
    Outlook$FormDescription: Outlook$FormDescription;
    GetConversation(): Outlook$Conversation;
    GetInspector: Outlook$Inspector;
    GetRecurrencePattern(): Outlook$RecurrencePattern;
    Importance: Outlook$OlImportance;
    InternetCodepage: number;
    IsConflict: boolean;
    IsRecurring: boolean;
    Outlook$ItemProperties: Outlook$ItemProperties;
    LastModificationTime: VarDate;
    Outlook$Links: Outlook$Links;
    MAPIOBJECT: any;
    MarkComplete(): void;
    MarkForDownload: Outlook$OlRemoteStatus;
    MessageClass: string;
    Mileage: string;
    Move(DestFldr: Outlook$Folder): any;
    NoAging: boolean;
    Ordinal: number;
    OutlookInternalVersion: number;
    OutlookVersion: string;
    Owner: string;
    Ownership: Outlook$OlTaskOwnership;
    Parent: any;
    PercentComplete: number;
    PrintOut(): void;
    Outlook$PropertyAccessor: Outlook$PropertyAccessor;
    Outlook$Recipients: Outlook$Recipients;
    ReminderOverrideDefault: boolean;
    ReminderPlaySound: boolean;
    ReminderSet: boolean;
    ReminderSoundFile: string;
    ReminderTime: VarDate;
    Respond(
      Response: Outlook$OlTaskResponse,
      fNoUI: any,
      fAdditionalTextDialog: any
    ): Outlook$TaskItem;
    ResponseState: Outlook$OlTaskResponse;
    Role: string;
    RTFBody: any;
    Save(): void;
    SaveAs(Path: string, Type?: any): void;
    Saved: boolean;
    SchedulePlusPriority: string;
    Send(): void;
    SendUsingAccount: Outlook$Account;
    Sensitivity: Outlook$OlSensitivity;
    Session: Outlook$NameSpace;
    ShowCategoriesDialog(): void;
    Size: number;
    SkipRecurrence(): boolean;
    StartDate: VarDate;
    Status: Outlook$OlTaskStatus;
    StatusOnCompletionRecipients: string;
    StatusReport(): any;
    StatusUpdateRecipients: string;
    Subject: string;
    TeamTask: boolean;
    ToDoTaskOrdinal: VarDate;
    TotalWork: number;
    UnRead: boolean;
    Outlook$UserProperties: Outlook$UserProperties;
  }

  declare class Outlook$TaskRequestAcceptItem {
    constructor(): this;
    Outlook$Actions: Outlook$Actions;
    Outlook$Application: Outlook$Application;
    Outlook$Attachments: Outlook$Attachments;
    AutoResolvedWinner: boolean;
    BillingInformation: string;
    Body: string;
    Outlook$Categories: string;
    Class: Outlook$OlObjectClass;
    Close(SaveMode: Outlook$OlInspectorClose): void;
    Companies: string;
    Outlook$Conflicts: Outlook$Conflicts;
    ConversationID: string;
    ConversationIndex: string;
    ConversationTopic: string;
    Copy(): any;
    CreationTime: VarDate;
    Delete(): void;
    Display(Modal?: any): void;
    DownloadState: Outlook$OlDownloadState;
    EntryID: string;
    Outlook$FormDescription: Outlook$FormDescription;
    GetAssociatedTask(AddToTaskList: boolean): Outlook$TaskItem;
    GetConversation(): Outlook$Conversation;
    GetInspector: Outlook$Inspector;
    Importance: Outlook$OlImportance;
    IsConflict: boolean;
    Outlook$ItemProperties: Outlook$ItemProperties;
    LastModificationTime: VarDate;
    Outlook$Links: Outlook$Links;
    MAPIOBJECT: any;
    MarkForDownload: Outlook$OlRemoteStatus;
    MessageClass: string;
    Mileage: string;
    Move(DestFldr: Outlook$Folder): any;
    NoAging: boolean;
    OutlookInternalVersion: number;
    OutlookVersion: string;
    Parent: any;
    PrintOut(): void;
    Outlook$PropertyAccessor: Outlook$PropertyAccessor;
    RTFBody: any;
    Save(): void;
    SaveAs(Path: string, Type?: any): void;
    Saved: boolean;
    Sensitivity: Outlook$OlSensitivity;
    Session: Outlook$NameSpace;
    ShowCategoriesDialog(): void;
    Size: number;
    Subject: string;
    UnRead: boolean;
    Outlook$UserProperties: Outlook$UserProperties;
  }

  declare class Outlook$TaskRequestDeclineItem {
    constructor(): this;
    Outlook$Actions: Outlook$Actions;
    Outlook$Application: Outlook$Application;
    Outlook$Attachments: Outlook$Attachments;
    AutoResolvedWinner: boolean;
    BillingInformation: string;
    Body: string;
    Outlook$Categories: string;
    Class: Outlook$OlObjectClass;
    Close(SaveMode: Outlook$OlInspectorClose): void;
    Companies: string;
    Outlook$Conflicts: Outlook$Conflicts;
    ConversationID: string;
    ConversationIndex: string;
    ConversationTopic: string;
    Copy(): any;
    CreationTime: VarDate;
    Delete(): void;
    Display(Modal?: any): void;
    DownloadState: Outlook$OlDownloadState;
    EntryID: string;
    Outlook$FormDescription: Outlook$FormDescription;
    GetAssociatedTask(AddToTaskList: boolean): Outlook$TaskItem;
    GetConversation(): Outlook$Conversation;
    GetInspector: Outlook$Inspector;
    Importance: Outlook$OlImportance;
    IsConflict: boolean;
    Outlook$ItemProperties: Outlook$ItemProperties;
    LastModificationTime: VarDate;
    Outlook$Links: Outlook$Links;
    MAPIOBJECT: any;
    MarkForDownload: Outlook$OlRemoteStatus;
    MessageClass: string;
    Mileage: string;
    Move(DestFldr: Outlook$Folder): any;
    NoAging: boolean;
    OutlookInternalVersion: number;
    OutlookVersion: string;
    Parent: any;
    PrintOut(): void;
    Outlook$PropertyAccessor: Outlook$PropertyAccessor;
    RTFBody: any;
    Save(): void;
    SaveAs(Path: string, Type?: any): void;
    Saved: boolean;
    Sensitivity: Outlook$OlSensitivity;
    Session: Outlook$NameSpace;
    ShowCategoriesDialog(): void;
    Size: number;
    Subject: string;
    UnRead: boolean;
    Outlook$UserProperties: Outlook$UserProperties;
  }

  declare class Outlook$TaskRequestItem {
    constructor(): this;
    Outlook$Actions: Outlook$Actions;
    Outlook$Application: Outlook$Application;
    Outlook$Attachments: Outlook$Attachments;
    AutoResolvedWinner: boolean;
    BillingInformation: string;
    Body: string;
    Outlook$Categories: string;
    Class: Outlook$OlObjectClass;
    Close(SaveMode: Outlook$OlInspectorClose): void;
    Companies: string;
    Outlook$Conflicts: Outlook$Conflicts;
    ConversationID: string;
    ConversationIndex: string;
    ConversationTopic: string;
    Copy(): any;
    CreationTime: VarDate;
    Delete(): void;
    Display(Modal?: any): void;
    DownloadState: Outlook$OlDownloadState;
    EntryID: string;
    Outlook$FormDescription: Outlook$FormDescription;
    GetAssociatedTask(AddToTaskList: boolean): Outlook$TaskItem;
    GetConversation(): Outlook$Conversation;
    GetInspector: Outlook$Inspector;
    Importance: Outlook$OlImportance;
    IsConflict: boolean;
    Outlook$ItemProperties: Outlook$ItemProperties;
    LastModificationTime: VarDate;
    Outlook$Links: Outlook$Links;
    MAPIOBJECT: any;
    MarkForDownload: Outlook$OlRemoteStatus;
    MessageClass: string;
    Mileage: string;
    Move(DestFldr: Outlook$Folder): any;
    NoAging: boolean;
    OutlookInternalVersion: number;
    OutlookVersion: string;
    Parent: any;
    PrintOut(): void;
    Outlook$PropertyAccessor: Outlook$PropertyAccessor;
    RTFBody: any;
    Save(): void;
    SaveAs(Path: string, Type?: any): void;
    Saved: boolean;
    Sensitivity: Outlook$OlSensitivity;
    Session: Outlook$NameSpace;
    ShowCategoriesDialog(): void;
    Size: number;
    Subject: string;
    UnRead: boolean;
    Outlook$UserProperties: Outlook$UserProperties;
  }

  declare class Outlook$TaskRequestUpdateItem {
    constructor(): this;
    Outlook$Actions: Outlook$Actions;
    Outlook$Application: Outlook$Application;
    Outlook$Attachments: Outlook$Attachments;
    AutoResolvedWinner: boolean;
    BillingInformation: string;
    Body: string;
    Outlook$Categories: string;
    Class: Outlook$OlObjectClass;
    Close(SaveMode: Outlook$OlInspectorClose): void;
    Companies: string;
    Outlook$Conflicts: Outlook$Conflicts;
    ConversationID: string;
    ConversationIndex: string;
    ConversationTopic: string;
    Copy(): any;
    CreationTime: VarDate;
    Delete(): void;
    Display(Modal?: any): void;
    DownloadState: Outlook$OlDownloadState;
    EntryID: string;
    Outlook$FormDescription: Outlook$FormDescription;
    GetAssociatedTask(AddToTaskList: boolean): Outlook$TaskItem;
    GetConversation(): Outlook$Conversation;
    GetInspector: Outlook$Inspector;
    Importance: Outlook$OlImportance;
    IsConflict: boolean;
    Outlook$ItemProperties: Outlook$ItemProperties;
    LastModificationTime: VarDate;
    Outlook$Links: Outlook$Links;
    MAPIOBJECT: any;
    MarkForDownload: Outlook$OlRemoteStatus;
    MessageClass: string;
    Mileage: string;
    Move(DestFldr: Outlook$Folder): any;
    NoAging: boolean;
    OutlookInternalVersion: number;
    OutlookVersion: string;
    Parent: any;
    PrintOut(): void;
    Outlook$PropertyAccessor: Outlook$PropertyAccessor;
    RTFBody: any;
    Save(): void;
    SaveAs(Path: string, Type?: any): void;
    Saved: boolean;
    Sensitivity: Outlook$OlSensitivity;
    Session: Outlook$NameSpace;
    ShowCategoriesDialog(): void;
    Size: number;
    Subject: string;
    UnRead: boolean;
    Outlook$UserProperties: Outlook$UserProperties;
  }

  declare class Outlook$TasksModule {
    constructor(): this;
    Outlook$Application: Outlook$Application;
    Class: Outlook$OlObjectClass;
    Name: string;
    Outlook$NavigationGroups: Outlook$NavigationGroups;
    NavigationModuleType: Outlook$OlNavigationModuleType;
    Parent: any;
    Position: number;
    Session: Outlook$NameSpace;
    Visible: boolean;
  }

  declare class Outlook$TextRuleCondition {
    constructor(): this;
    Outlook$Application: Outlook$Application;
    Class: Outlook$OlObjectClass;
    ConditionType: Outlook$OlRuleConditionType;
    Enabled: boolean;
    Parent: any;
    Session: Outlook$NameSpace;
    Text: any;
  }

  declare class Outlook$TimelineView {
    constructor(): this;
    Outlook$Application: Outlook$Application;
    Apply(): void;
    Class: Outlook$OlObjectClass;
    Copy(Name: string, SaveOption: Outlook$OlViewSaveOption): Outlook$View;
    DefaultExpandCollapseSetting: Outlook$OlDefaultExpandCollapseSetting;
    Delete(): void;
    EndField: string;
    Filter: string;
    GoToDate(Date: VarDate): void;
    GroupByFields: Outlook$OrderFields;
    ItemFont: Outlook$ViewFont;
    Language: string;
    LockUserChanges: boolean;
    LowerScaleFont: Outlook$ViewFont;
    MaxLabelWidth: number;
    Name: string;
    Parent: any;
    Reset(): void;
    Save(): void;
    SaveOption: Outlook$OlViewSaveOption;
    Session: Outlook$NameSpace;
    ShowLabelWhenViewingByMonth: boolean;
    ShowWeekNumbers: boolean;
    Standard: boolean;
    StartField: string;
    TimelineViewMode: Outlook$OlTimelineViewMode;
    UpperScaleFont: Outlook$ViewFont;
    ViewType: Outlook$OlViewType;
    XML: string;
  }

  declare class Outlook$TimeZone {
    constructor(): this;
    Outlook$Application: Outlook$Application;
    Bias: number;
    Class: Outlook$OlObjectClass;
    DaylightBias: number;
    DaylightDate: VarDate;
    DaylightDesignation: string;
    ID: string;
    Name: string;
    Parent: any;
    Session: Outlook$NameSpace;
    StandardBias: number;
    StandardDate: VarDate;
    StandardDesignation: string;
  }

  declare class Outlook$TimeZones {
    constructor(): this;
    Outlook$Application: Outlook$Application;
    Class: Outlook$OlObjectClass;
    ConvertTime(
      SourceDateTime: VarDate,
      SourceTimeZone: Outlook$TimeZone,
      DestinationTimeZone: Outlook$TimeZone
    ): VarDate;
    Count: number;
    CurrentTimeZone: Outlook$TimeZone;
    Item(Index: any): Outlook$TimeZone;
    Parent: any;
    Session: Outlook$NameSpace;
  }

  declare class Outlook$ToOrFromRuleCondition {
    constructor(): this;
    Outlook$Application: Outlook$Application;
    Class: Outlook$OlObjectClass;
    ConditionType: Outlook$OlRuleConditionType;
    Enabled: boolean;
    Parent: any;
    Outlook$Recipients: Outlook$Recipients;
    Session: Outlook$NameSpace;
  }

  declare class Outlook$UserDefinedProperties {
    constructor(): this;
    Add(
      Name: string,
      Type: Outlook$OlUserPropertyType,
      DisplayFormat?: any,
      Formula?: any
    ): Outlook$UserDefinedProperty;
    Outlook$Application: Outlook$Application;
    Class: Outlook$OlObjectClass;
    Count: number;
    Find(Name: string): Outlook$UserDefinedProperty;
    Item(Index: any): Outlook$UserDefinedProperty;
    Parent: any;
    Refresh(): void;
    Remove(Index: number): void;
    Session: Outlook$NameSpace;
  }

  declare class Outlook$UserDefinedProperty {
    constructor(): this;
    Outlook$Application: Outlook$Application;
    Class: Outlook$OlObjectClass;
    Delete(): void;
    DisplayFormat: number;
    Formula: string;
    Name: string;
    Parent: any;
    Session: Outlook$NameSpace;
    Type: Outlook$OlUserPropertyType;
  }

  declare class Outlook$UserProperties {
    constructor(): this;
    Add(
      Name: string,
      Type: Outlook$OlUserPropertyType,
      AddToFolderFields?: any,
      DisplayFormat?: any
    ): Outlook$UserProperty;
    Outlook$Application: Outlook$Application;
    Class: Outlook$OlObjectClass;
    Count: number;
    Find(Name: string, Custom?: any): Outlook$UserProperty;
    Item(Index: any): Outlook$UserProperty;
    Parent: any;
    Remove(Index: number): void;
    Session: Outlook$NameSpace;
  }

  declare class Outlook$UserProperty {
    constructor(): this;
    Outlook$Application: Outlook$Application;
    Class: Outlook$OlObjectClass;
    Delete(): void;
    Formula: string;
    IsUserProperty: boolean;
    Name: string;
    Parent: any;
    Session: Outlook$NameSpace;
    Type: Outlook$OlUserPropertyType;
    ValidationFormula: string;
    ValidationText: string;
    Value: any;
  }

  declare class Outlook$View {
    constructor(): this;
    Outlook$Application: Outlook$Application;
    Apply(): void;
    Class: Outlook$OlObjectClass;
    Copy(Name: string, SaveOption: Outlook$OlViewSaveOption): Outlook$View;
    Delete(): void;
    Filter: string;
    GoToDate(Date: VarDate): void;
    Language: string;
    LockUserChanges: boolean;
    Name: string;
    Parent: any;
    Reset(): void;
    Save(): void;
    SaveOption: Outlook$OlViewSaveOption;
    Session: Outlook$NameSpace;
    Standard: boolean;
    ViewType: Outlook$OlViewType;
    XML: string;
  }

  declare class Outlook$ViewField {
    constructor(): this;
    Outlook$Application: Outlook$Application;
    Class: Outlook$OlObjectClass;
    Outlook$ColumnFormat: Outlook$ColumnFormat;
    Parent: any;
    Session: Outlook$NameSpace;
    ViewXMLSchemaName: string;
  }

  declare class Outlook$ViewFields {
    constructor(): this;
    Add(PropertyName: string): Outlook$ViewField;
    Outlook$Application: Outlook$Application;
    Class: Outlook$OlObjectClass;
    Count: number;
    Insert(PropertyName: string, Index: any): Outlook$ViewField;
    Item(Index: any): Outlook$ViewField;
    Parent: any;
    Remove(Index: any): void;
    Session: Outlook$NameSpace;
  }

  declare class Outlook$ViewFont {
    constructor(): this;
    Outlook$Application: Outlook$Application;
    Bold: boolean;
    Class: Outlook$OlObjectClass;
    Color: Outlook$OlColor;
    ExtendedColor: Outlook$OlCategoryColor;
    Italic: boolean;
    Name: string;
    Parent: any;
    Session: Outlook$NameSpace;
    Size: number;
    Strikethrough: boolean;
    Underline: boolean;
  }

  declare class Outlook$Views {
    constructor(): this;
    Add(
      Name: string,
      ViewType: Outlook$OlViewType,
      SaveOption: Outlook$OlViewSaveOption
    ): Outlook$View;
    Outlook$Application: Outlook$Application;
    Class: Outlook$OlObjectClass;
    Count: number;
    Item(Index: any): Outlook$View;
    Parent: any;
    Remove(Index: any): void;
    Session: Outlook$NameSpace;
  }
  declare interface ActiveXObject {
    on(
      obj: Outlook$Outlook$Accounts,
      event: "AutoDiscoverComplete",
      argNames: ["Account"],
      handler: (parameter: {
        +Outlook$Account: Outlook$Outlook$Account
      }) => void
    ): void;
    on(
      obj: Outlook$Outlook$AccountSelector,
      event: "SelectedAccountChange",
      argNames: ["SelectedAccount"],
      handler: (parameter: {
        +SelectedAccount: Outlook$Outlook$Account
      }) => void
    ): void;
    on(
      obj: Outlook$Outlook$Application,
      event: "AdvancedSearchComplete" | "AdvancedSearchStopped",
      argNames: ["SearchObject"],
      handler: (parameter: {
        +SearchObject: Outlook$Outlook$Search
      }) => void
    ): void;
    on(
      obj: Outlook$Outlook$Application,
      event: "AttachmentContextMenuDisplay",
      argNames: ["CommandBar", "Attachments"],
      handler: (parameter: {
        +CommandBar: Office.CommandBar,
        +Outlook$Attachments: Outlook$Outlook$AttachmentSelection
      }) => void
    ): void;
    on(
      obj: Outlook$Outlook$Application,
      event: "BeforeFolderSharingDialog",
      argNames: ["FolderToShare", "Cancel"],
      handler: (parameter: {
        +FolderToShare: Outlook$Outlook$Folder,
        Cancel: boolean
      }) => void
    ): void;
    on(
      obj: Outlook$Outlook$Application,
      event: "ContextMenuClose",
      argNames: ["ContextMenu"],
      handler: (parameter: {
        +ContextMenu: Outlook$Outlook$OlContextMenu
      }) => void
    ): void;
    on(
      obj: Outlook$Outlook$Application,
      event: "FolderContextMenuDisplay",
      argNames: ["CommandBar", "Folder"],
      handler: (parameter: {
        +CommandBar: Office.CommandBar,
        +Outlook$Folder: Outlook$Outlook$Folder
      }) => void
    ): void;
    on(
      obj: Outlook$Outlook$Application,
      event: "ItemContextMenuDisplay",
      argNames: ["CommandBar", "Selection"],
      handler: (parameter: {
        +CommandBar: Office.CommandBar,
        +Outlook$Selection: Outlook$Outlook$Selection
      }) => void
    ): void;
    on(
      obj: Outlook$Outlook$Application,
      event: "ItemLoad" | "Reminder",
      argNames: ["Item"],
      handler: (parameter: {
        +Item: any
      }) => void
    ): void;
    on(
      obj: Outlook$Outlook$Application,
      event: "ItemSend",
      argNames: ["Item", "Cancel"],
      handler: (parameter: {
        +Item: any,
        Cancel: boolean
      }) => void
    ): void;
    on(
      obj: Outlook$Outlook$Application,
      event: "NewMailEx",
      argNames: ["EntryIDCollection"],
      handler: (parameter: {
        +EntryIDCollection: string
      }) => void
    ): void;
    on(
      obj: Outlook$Outlook$Application,
      event: "OptionsPagesAdd",
      argNames: ["Pages"],
      handler: (parameter: {
        +Pages: Outlook$Outlook$PropertyPages
      }) => void
    ): void;
    on(
      obj: Outlook$Outlook$Application,
      event: "ShortcutContextMenuDisplay",
      argNames: ["CommandBar", "Shortcut"],
      handler: (parameter: {
        +CommandBar: Office.CommandBar,
        +Shortcut: Outlook$Outlook$OutlookBarShortcut
      }) => void
    ): void;
    on(
      obj: Outlook$Outlook$Application,
      event: "StoreContextMenuDisplay",
      argNames: ["CommandBar", "Store"],
      handler: (parameter: {
        +CommandBar: Office.CommandBar,
        +Outlook$Store: Outlook$Outlook$Store
      }) => void
    ): void;
    on(
      obj: Outlook$Outlook$Application,
      event: "ViewContextMenuDisplay",
      argNames: ["CommandBar", "View"],
      handler: (parameter: {
        +CommandBar: Office.CommandBar,
        +Outlook$View: Outlook$Outlook$View
      }) => void
    ): void;
    on(
      obj: Outlook$Outlook$AppointmentItem,
      event: "AttachmentAdd" | "AttachmentRead" | "AttachmentRemove",
      argNames: ["Attachment"],
      handler: (parameter: {
        +Outlook$Attachment: Outlook$Outlook$Attachment
      }) => void
    ): void;
    on(
      obj: Outlook$Outlook$AppointmentItem,
      event:
        | "BeforeAttachmentAdd"
        | "BeforeAttachmentPreview"
        | "BeforeAttachmentRead"
        | "BeforeAttachmentSave"
        | "BeforeAttachmentWriteToTempFile",
      argNames: ["Attachment", "Cancel"],
      handler: (parameter: {
        +Outlook$Attachment: Outlook$Outlook$Attachment,
        Cancel: boolean
      }) => void
    ): void;
    on(
      obj: Outlook$Outlook$AppointmentItem,
      event:
        | "BeforeAutoSave"
        | "BeforeCheckNames"
        | "Close"
        | "Open"
        | "Send"
        | "Write",
      argNames: ["Cancel"],
      handler: (parameter: {
        Cancel: boolean
      }) => void
    ): void;
    on(
      obj: Outlook$Outlook$AppointmentItem,
      event: "BeforeDelete",
      argNames: ["Item", "Cancel"],
      handler: (parameter: {
        +Item: any,
        Cancel: boolean
      }) => void
    ): void;
    on(
      obj: Outlook$Outlook$AppointmentItem,
      event: "CustomAction",
      argNames: ["Action", "Response", "Cancel"],
      handler: (parameter: {
        +Outlook$Action: any,
        +Response: any,
        Cancel: boolean
      }) => void
    ): void;
    on(
      obj: Outlook$Outlook$AppointmentItem,
      event: "CustomPropertyChange" | "PropertyChange",
      argNames: ["Name"],
      handler: (parameter: {
        +Name: string
      }) => void
    ): void;
    on(
      obj: Outlook$Outlook$AppointmentItem,
      event: "Forward",
      argNames: ["Forward", "Cancel"],
      handler: (parameter: {
        +Forward: any,
        Cancel: boolean
      }) => void
    ): void;
    on(
      obj: Outlook$Outlook$AppointmentItem,
      event: "Reply" | "ReplyAll",
      argNames: ["Response", "Cancel"],
      handler: (parameter: {
        +Response: any,
        Cancel: boolean
      }) => void
    ): void;
    on(
      obj: Outlook$Outlook$ContactItem,
      event: "AttachmentAdd" | "AttachmentRead" | "AttachmentRemove",
      argNames: ["Attachment"],
      handler: (parameter: {
        +Outlook$Attachment: Outlook$Outlook$Attachment
      }) => void
    ): void;
    on(
      obj: Outlook$Outlook$ContactItem,
      event:
        | "BeforeAttachmentAdd"
        | "BeforeAttachmentPreview"
        | "BeforeAttachmentRead"
        | "BeforeAttachmentSave"
        | "BeforeAttachmentWriteToTempFile",
      argNames: ["Attachment", "Cancel"],
      handler: (parameter: {
        +Outlook$Attachment: Outlook$Outlook$Attachment,
        Cancel: boolean
      }) => void
    ): void;
    on(
      obj: Outlook$Outlook$ContactItem,
      event:
        | "BeforeAutoSave"
        | "BeforeCheckNames"
        | "Close"
        | "Open"
        | "Send"
        | "Write",
      argNames: ["Cancel"],
      handler: (parameter: {
        Cancel: boolean
      }) => void
    ): void;
    on(
      obj: Outlook$Outlook$ContactItem,
      event: "BeforeDelete",
      argNames: ["Item", "Cancel"],
      handler: (parameter: {
        +Item: any,
        Cancel: boolean
      }) => void
    ): void;
    on(
      obj: Outlook$Outlook$ContactItem,
      event: "CustomAction",
      argNames: ["Action", "Response", "Cancel"],
      handler: (parameter: {
        +Outlook$Action: any,
        +Response: any,
        Cancel: boolean
      }) => void
    ): void;
    on(
      obj: Outlook$Outlook$ContactItem,
      event: "CustomPropertyChange" | "PropertyChange",
      argNames: ["Name"],
      handler: (parameter: {
        +Name: string
      }) => void
    ): void;
    on(
      obj: Outlook$Outlook$ContactItem,
      event: "Forward",
      argNames: ["Forward", "Cancel"],
      handler: (parameter: {
        +Forward: any,
        Cancel: boolean
      }) => void
    ): void;
    on(
      obj: Outlook$Outlook$ContactItem,
      event: "Reply" | "ReplyAll",
      argNames: ["Response", "Cancel"],
      handler: (parameter: {
        +Response: any,
        Cancel: boolean
      }) => void
    ): void;
    on(
      obj: Outlook$Outlook$DistListItem,
      event: "AttachmentAdd" | "AttachmentRead" | "AttachmentRemove",
      argNames: ["Attachment"],
      handler: (parameter: {
        +Outlook$Attachment: Outlook$Outlook$Attachment
      }) => void
    ): void;
    on(
      obj: Outlook$Outlook$DistListItem,
      event:
        | "BeforeAttachmentAdd"
        | "BeforeAttachmentPreview"
        | "BeforeAttachmentRead"
        | "BeforeAttachmentSave"
        | "BeforeAttachmentWriteToTempFile",
      argNames: ["Attachment", "Cancel"],
      handler: (parameter: {
        +Outlook$Attachment: Outlook$Outlook$Attachment,
        Cancel: boolean
      }) => void
    ): void;
    on(
      obj: Outlook$Outlook$DistListItem,
      event:
        | "BeforeAutoSave"
        | "BeforeCheckNames"
        | "Close"
        | "Open"
        | "Send"
        | "Write",
      argNames: ["Cancel"],
      handler: (parameter: {
        Cancel: boolean
      }) => void
    ): void;
    on(
      obj: Outlook$Outlook$DistListItem,
      event: "BeforeDelete",
      argNames: ["Item", "Cancel"],
      handler: (parameter: {
        +Item: any,
        Cancel: boolean
      }) => void
    ): void;
    on(
      obj: Outlook$Outlook$DistListItem,
      event: "CustomAction",
      argNames: ["Action", "Response", "Cancel"],
      handler: (parameter: {
        +Outlook$Action: any,
        +Response: any,
        Cancel: boolean
      }) => void
    ): void;
    on(
      obj: Outlook$Outlook$DistListItem,
      event: "CustomPropertyChange" | "PropertyChange",
      argNames: ["Name"],
      handler: (parameter: {
        +Name: string
      }) => void
    ): void;
    on(
      obj: Outlook$Outlook$DistListItem,
      event: "Forward",
      argNames: ["Forward", "Cancel"],
      handler: (parameter: {
        +Forward: any,
        Cancel: boolean
      }) => void
    ): void;
    on(
      obj: Outlook$Outlook$DistListItem,
      event: "Reply" | "ReplyAll",
      argNames: ["Response", "Cancel"],
      handler: (parameter: {
        +Response: any,
        Cancel: boolean
      }) => void
    ): void;
    on(
      obj: Outlook$Outlook$DocumentItem,
      event: "AttachmentAdd" | "AttachmentRead" | "AttachmentRemove",
      argNames: ["Attachment"],
      handler: (parameter: {
        +Outlook$Attachment: Outlook$Outlook$Attachment
      }) => void
    ): void;
    on(
      obj: Outlook$Outlook$DocumentItem,
      event:
        | "BeforeAttachmentAdd"
        | "BeforeAttachmentPreview"
        | "BeforeAttachmentRead"
        | "BeforeAttachmentSave"
        | "BeforeAttachmentWriteToTempFile",
      argNames: ["Attachment", "Cancel"],
      handler: (parameter: {
        +Outlook$Attachment: Outlook$Outlook$Attachment,
        Cancel: boolean
      }) => void
    ): void;
    on(
      obj: Outlook$Outlook$DocumentItem,
      event:
        | "BeforeAutoSave"
        | "BeforeCheckNames"
        | "Close"
        | "Open"
        | "Send"
        | "Write",
      argNames: ["Cancel"],
      handler: (parameter: {
        Cancel: boolean
      }) => void
    ): void;
    on(
      obj: Outlook$Outlook$DocumentItem,
      event: "BeforeDelete",
      argNames: ["Item", "Cancel"],
      handler: (parameter: {
        +Item: any,
        Cancel: boolean
      }) => void
    ): void;
    on(
      obj: Outlook$Outlook$DocumentItem,
      event: "CustomAction",
      argNames: ["Action", "Response", "Cancel"],
      handler: (parameter: {
        +Outlook$Action: any,
        +Response: any,
        Cancel: boolean
      }) => void
    ): void;
    on(
      obj: Outlook$Outlook$DocumentItem,
      event: "CustomPropertyChange" | "PropertyChange",
      argNames: ["Name"],
      handler: (parameter: {
        +Name: string
      }) => void
    ): void;
    on(
      obj: Outlook$Outlook$DocumentItem,
      event: "Forward",
      argNames: ["Forward", "Cancel"],
      handler: (parameter: {
        +Forward: any,
        Cancel: boolean
      }) => void
    ): void;
    on(
      obj: Outlook$Outlook$DocumentItem,
      event: "Reply" | "ReplyAll",
      argNames: ["Response", "Cancel"],
      handler: (parameter: {
        +Response: any,
        Cancel: boolean
      }) => void
    ): void;
    on(
      obj: Outlook$Outlook$Explorer,
      event: "BeforeFolderSwitch",
      argNames: ["NewFolder", "Cancel"],
      handler: (parameter: {
        +NewFolder: any,
        Cancel: boolean
      }) => void
    ): void;
    on(
      obj: Outlook$Outlook$Explorer,
      event:
        | "BeforeItemCopy"
        | "BeforeItemCut"
        | "BeforeMaximize"
        | "BeforeMinimize"
        | "BeforeMove"
        | "BeforeSize",
      argNames: ["Cancel"],
      handler: (parameter: {
        Cancel: boolean
      }) => void
    ): void;
    on(
      obj: Outlook$Outlook$Explorer,
      event: "BeforeItemPaste",
      argNames: ["ClipboardContent", "Target", "Cancel"],
      handler: (parameter: {
        +ClipboardContent: any,
        +Target: Outlook$Outlook$Folder,
        Cancel: boolean
      }) => void
    ): void;
    on(
      obj: Outlook$Outlook$Explorer,
      event: "BeforeViewSwitch",
      argNames: ["NewView", "Cancel"],
      handler: (parameter: {
        +NewView: any,
        Cancel: boolean
      }) => void
    ): void;
    on(
      obj: Outlook$Outlook$Explorers,
      event: "NewExplorer",
      argNames: ["Explorer"],
      handler: (parameter: {
        +Outlook$Explorer: Outlook$Outlook$Explorer
      }) => void
    ): void;
    on(
      obj: Outlook$Outlook$Folder,
      event: "BeforeFolderMove",
      argNames: ["MoveTo", "Cancel"],
      handler: (parameter: {
        +MoveTo: Outlook$Outlook$Folder,
        Cancel: boolean
      }) => void
    ): void;
    on(
      obj: Outlook$Outlook$Folder,
      event: "BeforeItemMove",
      argNames: ["Item", "MoveTo", "Cancel"],
      handler: (parameter: {
        +Item: any,
        +MoveTo: Outlook$Outlook$Folder,
        Cancel: boolean
      }) => void
    ): void;
    on(
      obj: Outlook$Outlook$Folders,
      event: "FolderAdd" | "FolderChange",
      argNames: ["Folder"],
      handler: (parameter: {
        +Outlook$Folder: Outlook$Outlook$Folder
      }) => void
    ): void;
    on(
      obj: Outlook$Outlook$FormRegion,
      event: "Expanded",
      argNames: ["Expand"],
      handler: (parameter: {
        +Expand: boolean
      }) => void
    ): void;
    on(
      obj: Outlook$Outlook$Inspector,
      event: "BeforeMaximize" | "BeforeMinimize" | "BeforeMove" | "BeforeSize",
      argNames: ["Cancel"],
      handler: (parameter: {
        Cancel: boolean
      }) => void
    ): void;
    on(
      obj: Outlook$Outlook$Inspector,
      event: "PageChange",
      argNames: ["ActivePageName"],
      handler: (parameter: {
        +ActivePageName: string
      }) => void
    ): void;
    on(
      obj: Outlook$Outlook$Inspectors,
      event: "NewInspector",
      argNames: ["Inspector"],
      handler: (parameter: {
        +Outlook$Inspector: Outlook$Outlook$Inspector
      }) => void
    ): void;
    on(
      obj: Outlook$Outlook$Items,
      event: "ItemAdd" | "ItemChange",
      argNames: ["Item"],
      handler: (parameter: {
        +Item: any
      }) => void
    ): void;
    on(
      obj: Outlook$Outlook$JournalItem,
      event: "AttachmentAdd" | "AttachmentRead" | "AttachmentRemove",
      argNames: ["Attachment"],
      handler: (parameter: {
        +Outlook$Attachment: Outlook$Outlook$Attachment
      }) => void
    ): void;
    on(
      obj: Outlook$Outlook$JournalItem,
      event:
        | "BeforeAttachmentAdd"
        | "BeforeAttachmentPreview"
        | "BeforeAttachmentRead"
        | "BeforeAttachmentSave"
        | "BeforeAttachmentWriteToTempFile",
      argNames: ["Attachment", "Cancel"],
      handler: (parameter: {
        +Outlook$Attachment: Outlook$Outlook$Attachment,
        Cancel: boolean
      }) => void
    ): void;
    on(
      obj: Outlook$Outlook$JournalItem,
      event:
        | "BeforeAutoSave"
        | "BeforeCheckNames"
        | "Close"
        | "Open"
        | "Send"
        | "Write",
      argNames: ["Cancel"],
      handler: (parameter: {
        Cancel: boolean
      }) => void
    ): void;
    on(
      obj: Outlook$Outlook$JournalItem,
      event: "BeforeDelete",
      argNames: ["Item", "Cancel"],
      handler: (parameter: {
        +Item: any,
        Cancel: boolean
      }) => void
    ): void;
    on(
      obj: Outlook$Outlook$JournalItem,
      event: "CustomAction",
      argNames: ["Action", "Response", "Cancel"],
      handler: (parameter: {
        +Outlook$Action: any,
        +Response: any,
        Cancel: boolean
      }) => void
    ): void;
    on(
      obj: Outlook$Outlook$JournalItem,
      event: "CustomPropertyChange" | "PropertyChange",
      argNames: ["Name"],
      handler: (parameter: {
        +Name: string
      }) => void
    ): void;
    on(
      obj: Outlook$Outlook$JournalItem,
      event: "Forward",
      argNames: ["Forward", "Cancel"],
      handler: (parameter: {
        +Forward: any,
        Cancel: boolean
      }) => void
    ): void;
    on(
      obj: Outlook$Outlook$JournalItem,
      event: "Reply" | "ReplyAll",
      argNames: ["Response", "Cancel"],
      handler: (parameter: {
        +Response: any,
        Cancel: boolean
      }) => void
    ): void;
    on(
      obj: Outlook$Outlook$MailItem,
      event: "AttachmentAdd" | "AttachmentRead" | "AttachmentRemove",
      argNames: ["Attachment"],
      handler: (parameter: {
        +Outlook$Attachment: Outlook$Outlook$Attachment
      }) => void
    ): void;
    on(
      obj: Outlook$Outlook$MailItem,
      event:
        | "BeforeAttachmentAdd"
        | "BeforeAttachmentPreview"
        | "BeforeAttachmentRead"
        | "BeforeAttachmentSave"
        | "BeforeAttachmentWriteToTempFile",
      argNames: ["Attachment", "Cancel"],
      handler: (parameter: {
        +Outlook$Attachment: Outlook$Outlook$Attachment,
        Cancel: boolean
      }) => void
    ): void;
    on(
      obj: Outlook$Outlook$MailItem,
      event:
        | "BeforeAutoSave"
        | "BeforeCheckNames"
        | "Close"
        | "Open"
        | "Send"
        | "Write",
      argNames: ["Cancel"],
      handler: (parameter: {
        Cancel: boolean
      }) => void
    ): void;
    on(
      obj: Outlook$Outlook$MailItem,
      event: "BeforeDelete",
      argNames: ["Item", "Cancel"],
      handler: (parameter: {
        +Item: any,
        Cancel: boolean
      }) => void
    ): void;
    on(
      obj: Outlook$Outlook$MailItem,
      event: "CustomAction",
      argNames: ["Action", "Response", "Cancel"],
      handler: (parameter: {
        +Outlook$Action: any,
        +Response: any,
        Cancel: boolean
      }) => void
    ): void;
    on(
      obj: Outlook$Outlook$MailItem,
      event: "CustomPropertyChange" | "PropertyChange",
      argNames: ["Name"],
      handler: (parameter: {
        +Name: string
      }) => void
    ): void;
    on(
      obj: Outlook$Outlook$MailItem,
      event: "Forward",
      argNames: ["Forward", "Cancel"],
      handler: (parameter: {
        +Forward: any,
        Cancel: boolean
      }) => void
    ): void;
    on(
      obj: Outlook$Outlook$MailItem,
      event: "Reply" | "ReplyAll",
      argNames: ["Response", "Cancel"],
      handler: (parameter: {
        +Response: any,
        Cancel: boolean
      }) => void
    ): void;
    on(
      obj: Outlook$Outlook$MeetingItem,
      event: "AttachmentAdd" | "AttachmentRead" | "AttachmentRemove",
      argNames: ["Attachment"],
      handler: (parameter: {
        +Outlook$Attachment: Outlook$Outlook$Attachment
      }) => void
    ): void;
    on(
      obj: Outlook$Outlook$MeetingItem,
      event:
        | "BeforeAttachmentAdd"
        | "BeforeAttachmentPreview"
        | "BeforeAttachmentRead"
        | "BeforeAttachmentSave"
        | "BeforeAttachmentWriteToTempFile",
      argNames: ["Attachment", "Cancel"],
      handler: (parameter: {
        +Outlook$Attachment: Outlook$Outlook$Attachment,
        Cancel: boolean
      }) => void
    ): void;
    on(
      obj: Outlook$Outlook$MeetingItem,
      event:
        | "BeforeAutoSave"
        | "BeforeCheckNames"
        | "Close"
        | "Open"
        | "Send"
        | "Write",
      argNames: ["Cancel"],
      handler: (parameter: {
        Cancel: boolean
      }) => void
    ): void;
    on(
      obj: Outlook$Outlook$MeetingItem,
      event: "BeforeDelete",
      argNames: ["Item", "Cancel"],
      handler: (parameter: {
        +Item: any,
        Cancel: boolean
      }) => void
    ): void;
    on(
      obj: Outlook$Outlook$MeetingItem,
      event: "CustomAction",
      argNames: ["Action", "Response", "Cancel"],
      handler: (parameter: {
        +Outlook$Action: any,
        +Response: any,
        Cancel: boolean
      }) => void
    ): void;
    on(
      obj: Outlook$Outlook$MeetingItem,
      event: "CustomPropertyChange" | "PropertyChange",
      argNames: ["Name"],
      handler: (parameter: {
        +Name: string
      }) => void
    ): void;
    on(
      obj: Outlook$Outlook$MeetingItem,
      event: "Forward",
      argNames: ["Forward", "Cancel"],
      handler: (parameter: {
        +Forward: any,
        Cancel: boolean
      }) => void
    ): void;
    on(
      obj: Outlook$Outlook$MeetingItem,
      event: "Reply" | "ReplyAll",
      argNames: ["Response", "Cancel"],
      handler: (parameter: {
        +Response: any,
        Cancel: boolean
      }) => void
    ): void;
    on(
      obj: Outlook$Outlook$MobileItem,
      event: "AttachmentAdd" | "AttachmentRead" | "AttachmentRemove",
      argNames: ["Attachment"],
      handler: (parameter: {
        +Outlook$Attachment: Outlook$Outlook$Attachment
      }) => void
    ): void;
    on(
      obj: Outlook$Outlook$MobileItem,
      event:
        | "BeforeAttachmentAdd"
        | "BeforeAttachmentPreview"
        | "BeforeAttachmentRead"
        | "BeforeAttachmentSave"
        | "BeforeAttachmentWriteToTempFile",
      argNames: ["Attachment", "Cancel"],
      handler: (parameter: {
        +Outlook$Attachment: Outlook$Outlook$Attachment,
        Cancel: boolean
      }) => void
    ): void;
    on(
      obj: Outlook$Outlook$MobileItem,
      event:
        | "BeforeAutoSave"
        | "BeforeCheckNames"
        | "Close"
        | "Open"
        | "Send"
        | "Write",
      argNames: ["Cancel"],
      handler: (parameter: {
        Cancel: boolean
      }) => void
    ): void;
    on(
      obj: Outlook$Outlook$MobileItem,
      event: "BeforeDelete",
      argNames: ["Item", "Cancel"],
      handler: (parameter: {
        +Item: any,
        Cancel: boolean
      }) => void
    ): void;
    on(
      obj: Outlook$Outlook$MobileItem,
      event: "CustomAction",
      argNames: ["Action", "Response", "Cancel"],
      handler: (parameter: {
        +Outlook$Action: any,
        +Response: any,
        Cancel: boolean
      }) => void
    ): void;
    on(
      obj: Outlook$Outlook$MobileItem,
      event: "CustomPropertyChange" | "PropertyChange",
      argNames: ["Name"],
      handler: (parameter: {
        +Name: string
      }) => void
    ): void;
    on(
      obj: Outlook$Outlook$MobileItem,
      event: "Forward",
      argNames: ["Forward", "Cancel"],
      handler: (parameter: {
        +Forward: any,
        Cancel: boolean
      }) => void
    ): void;
    on(
      obj: Outlook$Outlook$MobileItem,
      event: "Reply" | "ReplyAll",
      argNames: ["Response", "Cancel"],
      handler: (parameter: {
        +Response: any,
        Cancel: boolean
      }) => void
    ): void;
    on(
      obj: Outlook$Outlook$NameSpace,
      event: "OptionsPagesAdd",
      argNames: ["Pages", "Folder"],
      handler: (parameter: {
        +Pages: Outlook$Outlook$PropertyPages,
        +Outlook$Folder: Outlook$Outlook$Folder
      }) => void
    ): void;
    on(
      obj: Outlook$Outlook$NavigationGroups,
      event: "NavigationFolderAdd" | "SelectedChange",
      argNames: ["NavigationFolder"],
      handler: (parameter: {
        +Outlook$NavigationFolder: Outlook$Outlook$NavigationFolder
      }) => void
    ): void;
    on(
      obj: Outlook$Outlook$NavigationPane,
      event: "ModuleSwitch",
      argNames: ["CurrentModule"],
      handler: (parameter: {
        +CurrentModule: Outlook$Outlook$NavigationModule
      }) => void
    ): void;
    on(
      obj: Outlook$Outlook$OlkBusinessCardControl,
      event: "MouseDown" | "MouseMove" | "MouseUp",
      argNames: ["Button", "Shift", "X", "Y"],
      handler: (parameter: {
        +Button: Outlook$Outlook$OlMouseButton,
        +Shift: Outlook$Outlook$OlShiftState,
        +X: stdole.OLE_XPOS_CONTAINER,
        +Y: stdole.OLE_YPOS_CONTAINER
      }) => void
    ): void;
    on(
      obj: Outlook$Outlook$OlkCategory,
      event: "Exit",
      argNames: ["Cancel"],
      handler: (parameter: {
        +Cancel: boolean
      }) => void
    ): void;
    on(
      obj: Outlook$Outlook$OlkCategory,
      event: "KeyDown" | "KeyUp",
      argNames: ["KeyCode", "Shift"],
      handler: (parameter: {
        +KeyCode: number,
        +Shift: Outlook$Outlook$OlShiftState
      }) => void
    ): void;
    on(
      obj: Outlook$Outlook$OlkCategory,
      event: "KeyPress",
      argNames: ["KeyAscii"],
      handler: (parameter: {
        +KeyAscii: number
      }) => void
    ): void;
    on(
      obj: Outlook$Outlook$OlkCategory,
      event: "MouseDown" | "MouseMove" | "MouseUp",
      argNames: ["Button", "Shift", "X", "Y"],
      handler: (parameter: {
        +Button: Outlook$Outlook$OlMouseButton,
        +Shift: Outlook$Outlook$OlShiftState,
        +X: stdole.OLE_XPOS_CONTAINER,
        +Y: stdole.OLE_YPOS_CONTAINER
      }) => void
    ): void;
    on(
      obj: Outlook$Outlook$OlkCheckBox,
      event: "BeforeUpdate" | "Exit",
      argNames: ["Cancel"],
      handler: (parameter: {
        +Cancel: boolean
      }) => void
    ): void;
    on(
      obj: Outlook$Outlook$OlkCheckBox,
      event: "KeyDown" | "KeyUp",
      argNames: ["KeyCode", "Shift"],
      handler: (parameter: {
        +KeyCode: number,
        +Shift: Outlook$Outlook$OlShiftState
      }) => void
    ): void;
    on(
      obj: Outlook$Outlook$OlkCheckBox,
      event: "KeyPress",
      argNames: ["KeyAscii"],
      handler: (parameter: {
        +KeyAscii: number
      }) => void
    ): void;
    on(
      obj: Outlook$Outlook$OlkCheckBox,
      event: "MouseDown" | "MouseMove" | "MouseUp",
      argNames: ["Button", "Shift", "X", "Y"],
      handler: (parameter: {
        +Button: Outlook$Outlook$OlMouseButton,
        +Shift: Outlook$Outlook$OlShiftState,
        +X: stdole.OLE_XPOS_CONTAINER,
        +Y: stdole.OLE_YPOS_CONTAINER
      }) => void
    ): void;
    on(
      obj: Outlook$Outlook$OlkComboBox,
      event: "BeforeUpdate" | "Exit",
      argNames: ["Cancel"],
      handler: (parameter: {
        +Cancel: boolean
      }) => void
    ): void;
    on(
      obj: Outlook$Outlook$OlkComboBox,
      event: "KeyDown" | "KeyUp",
      argNames: ["KeyCode", "Shift"],
      handler: (parameter: {
        +KeyCode: number,
        +Shift: Outlook$Outlook$OlShiftState
      }) => void
    ): void;
    on(
      obj: Outlook$Outlook$OlkComboBox,
      event: "KeyPress",
      argNames: ["KeyAscii"],
      handler: (parameter: {
        +KeyAscii: number
      }) => void
    ): void;
    on(
      obj: Outlook$Outlook$OlkComboBox,
      event: "MouseDown" | "MouseMove" | "MouseUp",
      argNames: ["Button", "Shift", "X", "Y"],
      handler: (parameter: {
        +Button: Outlook$Outlook$OlMouseButton,
        +Shift: Outlook$Outlook$OlShiftState,
        +X: stdole.OLE_XPOS_CONTAINER,
        +Y: stdole.OLE_YPOS_CONTAINER
      }) => void
    ): void;
    on(
      obj: Outlook$Outlook$OlkCommandButton,
      event: "BeforeUpdate" | "Exit",
      argNames: ["Cancel"],
      handler: (parameter: {
        +Cancel: boolean
      }) => void
    ): void;
    on(
      obj: Outlook$Outlook$OlkCommandButton,
      event: "KeyDown" | "KeyUp",
      argNames: ["KeyCode", "Shift"],
      handler: (parameter: {
        +KeyCode: number,
        +Shift: Outlook$Outlook$OlShiftState
      }) => void
    ): void;
    on(
      obj: Outlook$Outlook$OlkCommandButton,
      event: "KeyPress",
      argNames: ["KeyAscii"],
      handler: (parameter: {
        +KeyAscii: number
      }) => void
    ): void;
    on(
      obj: Outlook$Outlook$OlkCommandButton,
      event: "MouseDown" | "MouseMove" | "MouseUp",
      argNames: ["Button", "Shift", "X", "Y"],
      handler: (parameter: {
        +Button: Outlook$Outlook$OlMouseButton,
        +Shift: Outlook$Outlook$OlShiftState,
        +X: stdole.OLE_XPOS_CONTAINER,
        +Y: stdole.OLE_YPOS_CONTAINER
      }) => void
    ): void;
    on(
      obj: Outlook$Outlook$OlkContactPhoto,
      event: "Exit",
      argNames: ["Cancel"],
      handler: (parameter: {
        +Cancel: boolean
      }) => void
    ): void;
    on(
      obj: Outlook$Outlook$OlkContactPhoto,
      event: "KeyDown" | "KeyUp",
      argNames: ["KeyCode", "Shift"],
      handler: (parameter: {
        +KeyCode: number,
        +Shift: Outlook$Outlook$OlShiftState
      }) => void
    ): void;
    on(
      obj: Outlook$Outlook$OlkContactPhoto,
      event: "KeyPress",
      argNames: ["KeyAscii"],
      handler: (parameter: {
        +KeyAscii: number
      }) => void
    ): void;
    on(
      obj: Outlook$Outlook$OlkContactPhoto,
      event: "MouseDown" | "MouseMove" | "MouseUp",
      argNames: ["Button", "Shift", "X", "Y"],
      handler: (parameter: {
        +Button: Outlook$Outlook$OlMouseButton,
        +Shift: Outlook$Outlook$OlShiftState,
        +X: stdole.OLE_XPOS_CONTAINER,
        +Y: stdole.OLE_YPOS_CONTAINER
      }) => void
    ): void;
    on(
      obj: Outlook$Outlook$OlkDateControl,
      event: "BeforeUpdate" | "Exit",
      argNames: ["Cancel"],
      handler: (parameter: {
        +Cancel: boolean
      }) => void
    ): void;
    on(
      obj: Outlook$Outlook$OlkDateControl,
      event: "KeyDown" | "KeyUp",
      argNames: ["KeyCode", "Shift"],
      handler: (parameter: {
        +KeyCode: number,
        +Shift: Outlook$Outlook$OlShiftState
      }) => void
    ): void;
    on(
      obj: Outlook$Outlook$OlkDateControl,
      event: "KeyPress",
      argNames: ["KeyAscii"],
      handler: (parameter: {
        +KeyAscii: number
      }) => void
    ): void;
    on(
      obj: Outlook$Outlook$OlkDateControl,
      event: "MouseDown" | "MouseMove" | "MouseUp",
      argNames: ["Button", "Shift", "X", "Y"],
      handler: (parameter: {
        +Button: Outlook$Outlook$OlMouseButton,
        +Shift: Outlook$Outlook$OlShiftState,
        +X: stdole.OLE_XPOS_CONTAINER,
        +Y: stdole.OLE_YPOS_CONTAINER
      }) => void
    ): void;
    on(
      obj: Outlook$Outlook$OlkInfoBar,
      event: "MouseDown" | "MouseMove" | "MouseUp",
      argNames: ["Button", "Shift", "X", "Y"],
      handler: (parameter: {
        +Button: Outlook$Outlook$OlMouseButton,
        +Shift: Outlook$Outlook$OlShiftState,
        +X: stdole.OLE_XPOS_CONTAINER,
        +Y: stdole.OLE_YPOS_CONTAINER
      }) => void
    ): void;
    on(
      obj: Outlook$Outlook$OlkLabel,
      event: "MouseDown" | "MouseMove" | "MouseUp",
      argNames: ["Button", "Shift", "X", "Y"],
      handler: (parameter: {
        +Button: Outlook$Outlook$OlMouseButton,
        +Shift: Outlook$Outlook$OlShiftState,
        +X: stdole.OLE_XPOS_CONTAINER,
        +Y: stdole.OLE_YPOS_CONTAINER
      }) => void
    ): void;
    on(
      obj: Outlook$Outlook$OlkListBox,
      event: "BeforeUpdate" | "Exit",
      argNames: ["Cancel"],
      handler: (parameter: {
        +Cancel: boolean
      }) => void
    ): void;
    on(
      obj: Outlook$Outlook$OlkListBox,
      event: "KeyDown" | "KeyUp",
      argNames: ["KeyCode", "Shift"],
      handler: (parameter: {
        +KeyCode: number,
        +Shift: Outlook$Outlook$OlShiftState
      }) => void
    ): void;
    on(
      obj: Outlook$Outlook$OlkListBox,
      event: "KeyPress",
      argNames: ["KeyAscii"],
      handler: (parameter: {
        +KeyAscii: number
      }) => void
    ): void;
    on(
      obj: Outlook$Outlook$OlkListBox,
      event: "MouseDown" | "MouseMove" | "MouseUp",
      argNames: ["Button", "Shift", "X", "Y"],
      handler: (parameter: {
        +Button: Outlook$Outlook$OlMouseButton,
        +Shift: Outlook$Outlook$OlShiftState,
        +X: stdole.OLE_XPOS_CONTAINER,
        +Y: stdole.OLE_YPOS_CONTAINER
      }) => void
    ): void;
    on(
      obj: Outlook$Outlook$OlkOptionButton,
      event: "BeforeUpdate" | "Exit",
      argNames: ["Cancel"],
      handler: (parameter: {
        +Cancel: boolean
      }) => void
    ): void;
    on(
      obj: Outlook$Outlook$OlkOptionButton,
      event: "KeyDown" | "KeyUp",
      argNames: ["KeyCode", "Shift"],
      handler: (parameter: {
        +KeyCode: number,
        +Shift: Outlook$Outlook$OlShiftState
      }) => void
    ): void;
    on(
      obj: Outlook$Outlook$OlkOptionButton,
      event: "KeyPress",
      argNames: ["KeyAscii"],
      handler: (parameter: {
        +KeyAscii: number
      }) => void
    ): void;
    on(
      obj: Outlook$Outlook$OlkOptionButton,
      event: "MouseDown" | "MouseMove" | "MouseUp",
      argNames: ["Button", "Shift", "X", "Y"],
      handler: (parameter: {
        +Button: Outlook$Outlook$OlMouseButton,
        +Shift: Outlook$Outlook$OlShiftState,
        +X: stdole.OLE_XPOS_CONTAINER,
        +Y: stdole.OLE_YPOS_CONTAINER
      }) => void
    ): void;
    on(
      obj: Outlook$Outlook$OlkSenderPhoto,
      event: "MouseDown" | "MouseMove" | "MouseUp",
      argNames: ["Button", "Shift", "X", "Y"],
      handler: (parameter: {
        +Button: Outlook$Outlook$OlMouseButton,
        +Shift: Outlook$Outlook$OlShiftState,
        +X: stdole.OLE_XPOS_CONTAINER,
        +Y: stdole.OLE_YPOS_CONTAINER
      }) => void
    ): void;
    on(
      obj: Outlook$Outlook$OlkTextBox,
      event: "BeforeUpdate" | "Exit",
      argNames: ["Cancel"],
      handler: (parameter: {
        +Cancel: boolean
      }) => void
    ): void;
    on(
      obj: Outlook$Outlook$OlkTextBox,
      event: "KeyDown" | "KeyUp",
      argNames: ["KeyCode", "Shift"],
      handler: (parameter: {
        +KeyCode: number,
        +Shift: Outlook$Outlook$OlShiftState
      }) => void
    ): void;
    on(
      obj: Outlook$Outlook$OlkTextBox,
      event: "KeyPress",
      argNames: ["KeyAscii"],
      handler: (parameter: {
        +KeyAscii: number
      }) => void
    ): void;
    on(
      obj: Outlook$Outlook$OlkTextBox,
      event: "MouseDown" | "MouseMove" | "MouseUp",
      argNames: ["Button", "Shift", "X", "Y"],
      handler: (parameter: {
        +Button: Outlook$Outlook$OlMouseButton,
        +Shift: Outlook$Outlook$OlShiftState,
        +X: stdole.OLE_XPOS_CONTAINER,
        +Y: stdole.OLE_YPOS_CONTAINER
      }) => void
    ): void;
    on(
      obj: Outlook$Outlook$OlkTimeControl,
      event: "BeforeUpdate" | "Exit",
      argNames: ["Cancel"],
      handler: (parameter: {
        +Cancel: boolean
      }) => void
    ): void;
    on(
      obj: Outlook$Outlook$OlkTimeControl,
      event: "KeyDown" | "KeyUp",
      argNames: ["KeyCode", "Shift"],
      handler: (parameter: {
        +KeyCode: number,
        +Shift: Outlook$Outlook$OlShiftState
      }) => void
    ): void;
    on(
      obj: Outlook$Outlook$OlkTimeControl,
      event: "KeyPress",
      argNames: ["KeyAscii"],
      handler: (parameter: {
        +KeyAscii: number
      }) => void
    ): void;
    on(
      obj: Outlook$Outlook$OlkTimeControl,
      event: "MouseDown" | "MouseMove" | "MouseUp",
      argNames: ["Button", "Shift", "X", "Y"],
      handler: (parameter: {
        +Button: Outlook$Outlook$OlMouseButton,
        +Shift: Outlook$Outlook$OlShiftState,
        +X: stdole.OLE_XPOS_CONTAINER,
        +Y: stdole.OLE_YPOS_CONTAINER
      }) => void
    ): void;
    on(
      obj: Outlook$Outlook$OlkTimeZoneControl,
      event: "BeforeUpdate" | "Exit",
      argNames: ["Cancel"],
      handler: (parameter: {
        +Cancel: boolean
      }) => void
    ): void;
    on(
      obj: Outlook$Outlook$OlkTimeZoneControl,
      event: "KeyDown" | "KeyUp",
      argNames: ["KeyCode", "Shift"],
      handler: (parameter: {
        +KeyCode: number,
        +Shift: Outlook$Outlook$OlShiftState
      }) => void
    ): void;
    on(
      obj: Outlook$Outlook$OlkTimeZoneControl,
      event: "KeyPress",
      argNames: ["KeyAscii"],
      handler: (parameter: {
        +KeyAscii: number
      }) => void
    ): void;
    on(
      obj: Outlook$Outlook$OlkTimeZoneControl,
      event: "MouseDown" | "MouseMove" | "MouseUp",
      argNames: ["Button", "Shift", "X", "Y"],
      handler: (parameter: {
        +Button: Outlook$Outlook$OlMouseButton,
        +Shift: Outlook$Outlook$OlShiftState,
        +X: stdole.OLE_XPOS_CONTAINER,
        +Y: stdole.OLE_YPOS_CONTAINER
      }) => void
    ): void;
    on(
      obj: Outlook$Outlook$OutlookBarGroups,
      event: "BeforeGroupAdd",
      argNames: ["Cancel"],
      handler: (parameter: {
        Cancel: boolean
      }) => void
    ): void;
    on(
      obj: Outlook$Outlook$OutlookBarGroups,
      event: "BeforeGroupRemove",
      argNames: ["Group", "Cancel"],
      handler: (parameter: {
        +Group: Outlook$Outlook$OutlookBarGroup,
        Cancel: boolean
      }) => void
    ): void;
    on(
      obj: Outlook$Outlook$OutlookBarGroups,
      event: "GroupAdd",
      argNames: ["NewGroup"],
      handler: (parameter: {
        +NewGroup: Outlook$Outlook$OutlookBarGroup
      }) => void
    ): void;
    on(
      obj: Outlook$Outlook$OutlookBarPane,
      event: "BeforeGroupSwitch",
      argNames: ["ToGroup", "Cancel"],
      handler: (parameter: {
        +ToGroup: Outlook$Outlook$OutlookBarGroup,
        Cancel: boolean
      }) => void
    ): void;
    on(
      obj: Outlook$Outlook$OutlookBarPane,
      event: "BeforeNavigate",
      argNames: ["Shortcut", "Cancel"],
      handler: (parameter: {
        +Shortcut: Outlook$Outlook$OutlookBarShortcut,
        Cancel: boolean
      }) => void
    ): void;
    on(
      obj: Outlook$Outlook$OutlookBarShortcuts,
      event: "BeforeShortcutAdd",
      argNames: ["Cancel"],
      handler: (parameter: {
        Cancel: boolean
      }) => void
    ): void;
    on(
      obj: Outlook$Outlook$OutlookBarShortcuts,
      event: "BeforeShortcutRemove",
      argNames: ["Shortcut", "Cancel"],
      handler: (parameter: {
        +Shortcut: Outlook$Outlook$OutlookBarShortcut,
        Cancel: boolean
      }) => void
    ): void;
    on(
      obj: Outlook$Outlook$OutlookBarShortcuts,
      event: "ShortcutAdd",
      argNames: ["NewShortcut"],
      handler: (parameter: {
        +NewShortcut: Outlook$Outlook$OutlookBarShortcut
      }) => void
    ): void;
    on(
      obj: Outlook$Outlook$PostItem,
      event: "AttachmentAdd" | "AttachmentRead" | "AttachmentRemove",
      argNames: ["Attachment"],
      handler: (parameter: {
        +Outlook$Attachment: Outlook$Outlook$Attachment
      }) => void
    ): void;
    on(
      obj: Outlook$Outlook$PostItem,
      event:
        | "BeforeAttachmentAdd"
        | "BeforeAttachmentPreview"
        | "BeforeAttachmentRead"
        | "BeforeAttachmentSave"
        | "BeforeAttachmentWriteToTempFile",
      argNames: ["Attachment", "Cancel"],
      handler: (parameter: {
        +Outlook$Attachment: Outlook$Outlook$Attachment,
        Cancel: boolean
      }) => void
    ): void;
    on(
      obj: Outlook$Outlook$PostItem,
      event:
        | "BeforeAutoSave"
        | "BeforeCheckNames"
        | "Close"
        | "Open"
        | "Send"
        | "Write",
      argNames: ["Cancel"],
      handler: (parameter: {
        Cancel: boolean
      }) => void
    ): void;
    on(
      obj: Outlook$Outlook$PostItem,
      event: "BeforeDelete",
      argNames: ["Item", "Cancel"],
      handler: (parameter: {
        +Item: any,
        Cancel: boolean
      }) => void
    ): void;
    on(
      obj: Outlook$Outlook$PostItem,
      event: "CustomAction",
      argNames: ["Action", "Response", "Cancel"],
      handler: (parameter: {
        +Outlook$Action: any,
        +Response: any,
        Cancel: boolean
      }) => void
    ): void;
    on(
      obj: Outlook$Outlook$PostItem,
      event: "CustomPropertyChange" | "PropertyChange",
      argNames: ["Name"],
      handler: (parameter: {
        +Name: string
      }) => void
    ): void;
    on(
      obj: Outlook$Outlook$PostItem,
      event: "Forward",
      argNames: ["Forward", "Cancel"],
      handler: (parameter: {
        +Forward: any,
        Cancel: boolean
      }) => void
    ): void;
    on(
      obj: Outlook$Outlook$PostItem,
      event: "Reply" | "ReplyAll",
      argNames: ["Response", "Cancel"],
      handler: (parameter: {
        +Response: any,
        Cancel: boolean
      }) => void
    ): void;
    on(
      obj: Outlook$Outlook$Reminders,
      event: "BeforeReminderShow",
      argNames: ["Cancel"],
      handler: (parameter: {
        Cancel: boolean
      }) => void
    ): void;
    on(
      obj: Outlook$Outlook$Reminders,
      event: "ReminderAdd" | "ReminderChange" | "ReminderFire" | "Snooze",
      argNames: ["ReminderObject"],
      handler: (parameter: {
        +ReminderObject: Outlook$Outlook$Reminder
      }) => void
    ): void;
    on(
      obj: Outlook$Outlook$RemoteItem,
      event: "AttachmentAdd" | "AttachmentRead" | "AttachmentRemove",
      argNames: ["Attachment"],
      handler: (parameter: {
        +Outlook$Attachment: Outlook$Outlook$Attachment
      }) => void
    ): void;
    on(
      obj: Outlook$Outlook$RemoteItem,
      event:
        | "BeforeAttachmentAdd"
        | "BeforeAttachmentPreview"
        | "BeforeAttachmentRead"
        | "BeforeAttachmentSave"
        | "BeforeAttachmentWriteToTempFile",
      argNames: ["Attachment", "Cancel"],
      handler: (parameter: {
        +Outlook$Attachment: Outlook$Outlook$Attachment,
        Cancel: boolean
      }) => void
    ): void;
    on(
      obj: Outlook$Outlook$RemoteItem,
      event:
        | "BeforeAutoSave"
        | "BeforeCheckNames"
        | "Close"
        | "Open"
        | "Send"
        | "Write",
      argNames: ["Cancel"],
      handler: (parameter: {
        Cancel: boolean
      }) => void
    ): void;
    on(
      obj: Outlook$Outlook$RemoteItem,
      event: "BeforeDelete",
      argNames: ["Item", "Cancel"],
      handler: (parameter: {
        +Item: any,
        Cancel: boolean
      }) => void
    ): void;
    on(
      obj: Outlook$Outlook$RemoteItem,
      event: "CustomAction",
      argNames: ["Action", "Response", "Cancel"],
      handler: (parameter: {
        +Outlook$Action: any,
        +Response: any,
        Cancel: boolean
      }) => void
    ): void;
    on(
      obj: Outlook$Outlook$RemoteItem,
      event: "CustomPropertyChange" | "PropertyChange",
      argNames: ["Name"],
      handler: (parameter: {
        +Name: string
      }) => void
    ): void;
    on(
      obj: Outlook$Outlook$RemoteItem,
      event: "Forward",
      argNames: ["Forward", "Cancel"],
      handler: (parameter: {
        +Forward: any,
        Cancel: boolean
      }) => void
    ): void;
    on(
      obj: Outlook$Outlook$RemoteItem,
      event: "Reply" | "ReplyAll",
      argNames: ["Response", "Cancel"],
      handler: (parameter: {
        +Response: any,
        Cancel: boolean
      }) => void
    ): void;
    on(
      obj: Outlook$Outlook$ReportItem,
      event: "AttachmentAdd" | "AttachmentRead" | "AttachmentRemove",
      argNames: ["Attachment"],
      handler: (parameter: {
        +Outlook$Attachment: Outlook$Outlook$Attachment
      }) => void
    ): void;
    on(
      obj: Outlook$Outlook$ReportItem,
      event:
        | "BeforeAttachmentAdd"
        | "BeforeAttachmentPreview"
        | "BeforeAttachmentRead"
        | "BeforeAttachmentSave"
        | "BeforeAttachmentWriteToTempFile",
      argNames: ["Attachment", "Cancel"],
      handler: (parameter: {
        +Outlook$Attachment: Outlook$Outlook$Attachment,
        Cancel: boolean
      }) => void
    ): void;
    on(
      obj: Outlook$Outlook$ReportItem,
      event:
        | "BeforeAutoSave"
        | "BeforeCheckNames"
        | "Close"
        | "Open"
        | "Send"
        | "Write",
      argNames: ["Cancel"],
      handler: (parameter: {
        Cancel: boolean
      }) => void
    ): void;
    on(
      obj: Outlook$Outlook$ReportItem,
      event: "BeforeDelete",
      argNames: ["Item", "Cancel"],
      handler: (parameter: {
        +Item: any,
        Cancel: boolean
      }) => void
    ): void;
    on(
      obj: Outlook$Outlook$ReportItem,
      event: "CustomAction",
      argNames: ["Action", "Response", "Cancel"],
      handler: (parameter: {
        +Outlook$Action: any,
        +Response: any,
        Cancel: boolean
      }) => void
    ): void;
    on(
      obj: Outlook$Outlook$ReportItem,
      event: "CustomPropertyChange" | "PropertyChange",
      argNames: ["Name"],
      handler: (parameter: {
        +Name: string
      }) => void
    ): void;
    on(
      obj: Outlook$Outlook$ReportItem,
      event: "Forward",
      argNames: ["Forward", "Cancel"],
      handler: (parameter: {
        +Forward: any,
        Cancel: boolean
      }) => void
    ): void;
    on(
      obj: Outlook$Outlook$ReportItem,
      event: "Reply" | "ReplyAll",
      argNames: ["Response", "Cancel"],
      handler: (parameter: {
        +Response: any,
        Cancel: boolean
      }) => void
    ): void;
    on(
      obj: Outlook$Outlook$Results,
      event: "ItemAdd" | "ItemChange",
      argNames: ["Item"],
      handler: (parameter: {
        +Item: any
      }) => void
    ): void;
    on(
      obj: Outlook$Outlook$SharingItem,
      event: "AttachmentAdd" | "AttachmentRead" | "AttachmentRemove",
      argNames: ["Attachment"],
      handler: (parameter: {
        +Outlook$Attachment: Outlook$Outlook$Attachment
      }) => void
    ): void;
    on(
      obj: Outlook$Outlook$SharingItem,
      event:
        | "BeforeAttachmentAdd"
        | "BeforeAttachmentPreview"
        | "BeforeAttachmentRead"
        | "BeforeAttachmentSave"
        | "BeforeAttachmentWriteToTempFile",
      argNames: ["Attachment", "Cancel"],
      handler: (parameter: {
        +Outlook$Attachment: Outlook$Outlook$Attachment,
        Cancel: boolean
      }) => void
    ): void;
    on(
      obj: Outlook$Outlook$SharingItem,
      event:
        | "BeforeAutoSave"
        | "BeforeCheckNames"
        | "Close"
        | "Open"
        | "Send"
        | "Write",
      argNames: ["Cancel"],
      handler: (parameter: {
        Cancel: boolean
      }) => void
    ): void;
    on(
      obj: Outlook$Outlook$SharingItem,
      event: "BeforeDelete",
      argNames: ["Item", "Cancel"],
      handler: (parameter: {
        +Item: any,
        Cancel: boolean
      }) => void
    ): void;
    on(
      obj: Outlook$Outlook$SharingItem,
      event: "CustomAction",
      argNames: ["Action", "Response", "Cancel"],
      handler: (parameter: {
        +Outlook$Action: any,
        +Response: any,
        Cancel: boolean
      }) => void
    ): void;
    on(
      obj: Outlook$Outlook$SharingItem,
      event: "CustomPropertyChange" | "PropertyChange",
      argNames: ["Name"],
      handler: (parameter: {
        +Name: string
      }) => void
    ): void;
    on(
      obj: Outlook$Outlook$SharingItem,
      event: "Forward",
      argNames: ["Forward", "Cancel"],
      handler: (parameter: {
        +Forward: any,
        Cancel: boolean
      }) => void
    ): void;
    on(
      obj: Outlook$Outlook$SharingItem,
      event: "Reply" | "ReplyAll",
      argNames: ["Response", "Cancel"],
      handler: (parameter: {
        +Response: any,
        Cancel: boolean
      }) => void
    ): void;
    on(
      obj: Outlook$Outlook$Stores,
      event: "BeforeStoreRemove",
      argNames: ["Store", "Cancel"],
      handler: (parameter: {
        +Outlook$Store: Outlook$Outlook$Store,
        Cancel: boolean
      }) => void
    ): void;
    on(
      obj: Outlook$Outlook$Stores,
      event: "StoreAdd",
      argNames: ["Store"],
      handler: (parameter: {
        +Outlook$Store: Outlook$Outlook$Store
      }) => void
    ): void;
    on(
      obj: Outlook$Outlook$SyncObject,
      event: "OnError",
      argNames: ["Code", "Description"],
      handler: (parameter: {
        +Code: number,
        +Description: string
      }) => void
    ): void;
    on(
      obj: Outlook$Outlook$SyncObject,
      event: "Progress",
      argNames: ["State", "Description", "Value", "Max"],
      handler: (parameter: {
        +State: Outlook$Outlook$OlSyncState,
        +Description: string,
        +Value: number,
        +Max: number
      }) => void
    ): void;
    on(
      obj: Outlook$Outlook$TaskItem,
      event: "AttachmentAdd" | "AttachmentRead" | "AttachmentRemove",
      argNames: ["Attachment"],
      handler: (parameter: {
        +Outlook$Attachment: Outlook$Outlook$Attachment
      }) => void
    ): void;
    on(
      obj: Outlook$Outlook$TaskItem,
      event:
        | "BeforeAttachmentAdd"
        | "BeforeAttachmentPreview"
        | "BeforeAttachmentRead"
        | "BeforeAttachmentSave"
        | "BeforeAttachmentWriteToTempFile",
      argNames: ["Attachment", "Cancel"],
      handler: (parameter: {
        +Outlook$Attachment: Outlook$Outlook$Attachment,
        Cancel: boolean
      }) => void
    ): void;
    on(
      obj: Outlook$Outlook$TaskItem,
      event:
        | "BeforeAutoSave"
        | "BeforeCheckNames"
        | "Close"
        | "Open"
        | "Send"
        | "Write",
      argNames: ["Cancel"],
      handler: (parameter: {
        Cancel: boolean
      }) => void
    ): void;
    on(
      obj: Outlook$Outlook$TaskItem,
      event: "BeforeDelete",
      argNames: ["Item", "Cancel"],
      handler: (parameter: {
        +Item: any,
        Cancel: boolean
      }) => void
    ): void;
    on(
      obj: Outlook$Outlook$TaskItem,
      event: "CustomAction",
      argNames: ["Action", "Response", "Cancel"],
      handler: (parameter: {
        +Outlook$Action: any,
        +Response: any,
        Cancel: boolean
      }) => void
    ): void;
    on(
      obj: Outlook$Outlook$TaskItem,
      event: "CustomPropertyChange" | "PropertyChange",
      argNames: ["Name"],
      handler: (parameter: {
        +Name: string
      }) => void
    ): void;
    on(
      obj: Outlook$Outlook$TaskItem,
      event: "Forward",
      argNames: ["Forward", "Cancel"],
      handler: (parameter: {
        +Forward: any,
        Cancel: boolean
      }) => void
    ): void;
    on(
      obj: Outlook$Outlook$TaskItem,
      event: "Reply" | "ReplyAll",
      argNames: ["Response", "Cancel"],
      handler: (parameter: {
        +Response: any,
        Cancel: boolean
      }) => void
    ): void;
    on(
      obj: Outlook$Outlook$TaskRequestAcceptItem,
      event: "AttachmentAdd" | "AttachmentRead" | "AttachmentRemove",
      argNames: ["Attachment"],
      handler: (parameter: {
        +Outlook$Attachment: Outlook$Outlook$Attachment
      }) => void
    ): void;
    on(
      obj: Outlook$Outlook$TaskRequestAcceptItem,
      event:
        | "BeforeAttachmentAdd"
        | "BeforeAttachmentPreview"
        | "BeforeAttachmentRead"
        | "BeforeAttachmentSave"
        | "BeforeAttachmentWriteToTempFile",
      argNames: ["Attachment", "Cancel"],
      handler: (parameter: {
        +Outlook$Attachment: Outlook$Outlook$Attachment,
        Cancel: boolean
      }) => void
    ): void;
    on(
      obj: Outlook$Outlook$TaskRequestAcceptItem,
      event:
        | "BeforeAutoSave"
        | "BeforeCheckNames"
        | "Close"
        | "Open"
        | "Send"
        | "Write",
      argNames: ["Cancel"],
      handler: (parameter: {
        Cancel: boolean
      }) => void
    ): void;
    on(
      obj: Outlook$Outlook$TaskRequestAcceptItem,
      event: "BeforeDelete",
      argNames: ["Item", "Cancel"],
      handler: (parameter: {
        +Item: any,
        Cancel: boolean
      }) => void
    ): void;
    on(
      obj: Outlook$Outlook$TaskRequestAcceptItem,
      event: "CustomAction",
      argNames: ["Action", "Response", "Cancel"],
      handler: (parameter: {
        +Outlook$Action: any,
        +Response: any,
        Cancel: boolean
      }) => void
    ): void;
    on(
      obj: Outlook$Outlook$TaskRequestAcceptItem,
      event: "CustomPropertyChange" | "PropertyChange",
      argNames: ["Name"],
      handler: (parameter: {
        +Name: string
      }) => void
    ): void;
    on(
      obj: Outlook$Outlook$TaskRequestAcceptItem,
      event: "Forward",
      argNames: ["Forward", "Cancel"],
      handler: (parameter: {
        +Forward: any,
        Cancel: boolean
      }) => void
    ): void;
    on(
      obj: Outlook$Outlook$TaskRequestAcceptItem,
      event: "Reply" | "ReplyAll",
      argNames: ["Response", "Cancel"],
      handler: (parameter: {
        +Response: any,
        Cancel: boolean
      }) => void
    ): void;
    on(
      obj: Outlook$Outlook$TaskRequestDeclineItem,
      event: "AttachmentAdd" | "AttachmentRead" | "AttachmentRemove",
      argNames: ["Attachment"],
      handler: (parameter: {
        +Outlook$Attachment: Outlook$Outlook$Attachment
      }) => void
    ): void;
    on(
      obj: Outlook$Outlook$TaskRequestDeclineItem,
      event:
        | "BeforeAttachmentAdd"
        | "BeforeAttachmentPreview"
        | "BeforeAttachmentRead"
        | "BeforeAttachmentSave"
        | "BeforeAttachmentWriteToTempFile",
      argNames: ["Attachment", "Cancel"],
      handler: (parameter: {
        +Outlook$Attachment: Outlook$Outlook$Attachment,
        Cancel: boolean
      }) => void
    ): void;
    on(
      obj: Outlook$Outlook$TaskRequestDeclineItem,
      event:
        | "BeforeAutoSave"
        | "BeforeCheckNames"
        | "Close"
        | "Open"
        | "Send"
        | "Write",
      argNames: ["Cancel"],
      handler: (parameter: {
        Cancel: boolean
      }) => void
    ): void;
    on(
      obj: Outlook$Outlook$TaskRequestDeclineItem,
      event: "BeforeDelete",
      argNames: ["Item", "Cancel"],
      handler: (parameter: {
        +Item: any,
        Cancel: boolean
      }) => void
    ): void;
    on(
      obj: Outlook$Outlook$TaskRequestDeclineItem,
      event: "CustomAction",
      argNames: ["Action", "Response", "Cancel"],
      handler: (parameter: {
        +Outlook$Action: any,
        +Response: any,
        Cancel: boolean
      }) => void
    ): void;
    on(
      obj: Outlook$Outlook$TaskRequestDeclineItem,
      event: "CustomPropertyChange" | "PropertyChange",
      argNames: ["Name"],
      handler: (parameter: {
        +Name: string
      }) => void
    ): void;
    on(
      obj: Outlook$Outlook$TaskRequestDeclineItem,
      event: "Forward",
      argNames: ["Forward", "Cancel"],
      handler: (parameter: {
        +Forward: any,
        Cancel: boolean
      }) => void
    ): void;
    on(
      obj: Outlook$Outlook$TaskRequestDeclineItem,
      event: "Reply" | "ReplyAll",
      argNames: ["Response", "Cancel"],
      handler: (parameter: {
        +Response: any,
        Cancel: boolean
      }) => void
    ): void;
    on(
      obj: Outlook$Outlook$TaskRequestItem,
      event: "AttachmentAdd" | "AttachmentRead" | "AttachmentRemove",
      argNames: ["Attachment"],
      handler: (parameter: {
        +Outlook$Attachment: Outlook$Outlook$Attachment
      }) => void
    ): void;
    on(
      obj: Outlook$Outlook$TaskRequestItem,
      event:
        | "BeforeAttachmentAdd"
        | "BeforeAttachmentPreview"
        | "BeforeAttachmentRead"
        | "BeforeAttachmentSave"
        | "BeforeAttachmentWriteToTempFile",
      argNames: ["Attachment", "Cancel"],
      handler: (parameter: {
        +Outlook$Attachment: Outlook$Outlook$Attachment,
        Cancel: boolean
      }) => void
    ): void;
    on(
      obj: Outlook$Outlook$TaskRequestItem,
      event:
        | "BeforeAutoSave"
        | "BeforeCheckNames"
        | "Close"
        | "Open"
        | "Send"
        | "Write",
      argNames: ["Cancel"],
      handler: (parameter: {
        Cancel: boolean
      }) => void
    ): void;
    on(
      obj: Outlook$Outlook$TaskRequestItem,
      event: "BeforeDelete",
      argNames: ["Item", "Cancel"],
      handler: (parameter: {
        +Item: any,
        Cancel: boolean
      }) => void
    ): void;
    on(
      obj: Outlook$Outlook$TaskRequestItem,
      event: "CustomAction",
      argNames: ["Action", "Response", "Cancel"],
      handler: (parameter: {
        +Outlook$Action: any,
        +Response: any,
        Cancel: boolean
      }) => void
    ): void;
    on(
      obj: Outlook$Outlook$TaskRequestItem,
      event: "CustomPropertyChange" | "PropertyChange",
      argNames: ["Name"],
      handler: (parameter: {
        +Name: string
      }) => void
    ): void;
    on(
      obj: Outlook$Outlook$TaskRequestItem,
      event: "Forward",
      argNames: ["Forward", "Cancel"],
      handler: (parameter: {
        +Forward: any,
        Cancel: boolean
      }) => void
    ): void;
    on(
      obj: Outlook$Outlook$TaskRequestItem,
      event: "Reply" | "ReplyAll",
      argNames: ["Response", "Cancel"],
      handler: (parameter: {
        +Response: any,
        Cancel: boolean
      }) => void
    ): void;
    on(
      obj: Outlook$Outlook$TaskRequestUpdateItem,
      event: "AttachmentAdd" | "AttachmentRead" | "AttachmentRemove",
      argNames: ["Attachment"],
      handler: (parameter: {
        +Outlook$Attachment: Outlook$Outlook$Attachment
      }) => void
    ): void;
    on(
      obj: Outlook$Outlook$TaskRequestUpdateItem,
      event:
        | "BeforeAttachmentAdd"
        | "BeforeAttachmentPreview"
        | "BeforeAttachmentRead"
        | "BeforeAttachmentSave"
        | "BeforeAttachmentWriteToTempFile",
      argNames: ["Attachment", "Cancel"],
      handler: (parameter: {
        +Outlook$Attachment: Outlook$Outlook$Attachment,
        Cancel: boolean
      }) => void
    ): void;
    on(
      obj: Outlook$Outlook$TaskRequestUpdateItem,
      event:
        | "BeforeAutoSave"
        | "BeforeCheckNames"
        | "Close"
        | "Open"
        | "Send"
        | "Write",
      argNames: ["Cancel"],
      handler: (parameter: {
        Cancel: boolean
      }) => void
    ): void;
    on(
      obj: Outlook$Outlook$TaskRequestUpdateItem,
      event: "BeforeDelete",
      argNames: ["Item", "Cancel"],
      handler: (parameter: {
        +Item: any,
        Cancel: boolean
      }) => void
    ): void;
    on(
      obj: Outlook$Outlook$TaskRequestUpdateItem,
      event: "CustomAction",
      argNames: ["Action", "Response", "Cancel"],
      handler: (parameter: {
        +Outlook$Action: any,
        +Response: any,
        Cancel: boolean
      }) => void
    ): void;
    on(
      obj: Outlook$Outlook$TaskRequestUpdateItem,
      event: "CustomPropertyChange" | "PropertyChange",
      argNames: ["Name"],
      handler: (parameter: {
        +Name: string
      }) => void
    ): void;
    on(
      obj: Outlook$Outlook$TaskRequestUpdateItem,
      event: "Forward",
      argNames: ["Forward", "Cancel"],
      handler: (parameter: {
        +Forward: any,
        Cancel: boolean
      }) => void
    ): void;
    on(
      obj: Outlook$Outlook$TaskRequestUpdateItem,
      event: "Reply" | "ReplyAll",
      argNames: ["Response", "Cancel"],
      handler: (parameter: {
        +Response: any,
        Cancel: boolean
      }) => void
    ): void;
    on(
      obj: Outlook$Outlook$Views,
      event: "ViewAdd" | "ViewRemove",
      argNames: ["View"],
      handler: (parameter: {
        +Outlook$View: Outlook$Outlook$View
      }) => void
    ): void;
    on(
      obj: Outlook$Outlook$Application,
      event: "MAPILogonComplete" | "NewMail" | "Quit" | "Startup",
      handler: (parameter: {}) => void
    ): void;
    on(
      obj: Outlook$Outlook$AppointmentItem,
      event: "AfterWrite" | "BeforeRead" | "Read" | "Unload",
      handler: (parameter: {}) => void
    ): void;
    on(
      obj: Outlook$Outlook$ContactItem,
      event: "AfterWrite" | "BeforeRead" | "Read" | "Unload",
      handler: (parameter: {}) => void
    ): void;
    on(
      obj: Outlook$Outlook$DistListItem,
      event: "AfterWrite" | "BeforeRead" | "Read" | "Unload",
      handler: (parameter: {}) => void
    ): void;
    on(
      obj: Outlook$Outlook$DocumentItem,
      event: "AfterWrite" | "BeforeRead" | "Read" | "Unload",
      handler: (parameter: {}) => void
    ): void;
    on(
      obj: Outlook$Outlook$Explorer,
      event:
        | "Activate"
        | "AttachmentSelectionChange"
        | "Close"
        | "Deactivate"
        | "FolderSwitch"
        | "SelectionChange"
        | "ViewSwitch",
      handler: (parameter: {}) => void
    ): void;
    on(
      obj: Outlook$Outlook$Folders,
      event: "FolderRemove",
      handler: (parameter: {}) => void
    ): void;
    on(
      obj: Outlook$Outlook$FormRegion,
      event: "Close",
      handler: (parameter: {}) => void
    ): void;
    on(
      obj: Outlook$Outlook$Inspector,
      event: "Activate" | "AttachmentSelectionChange" | "Close" | "Deactivate",
      handler: (parameter: {}) => void
    ): void;
    on(
      obj: Outlook$Outlook$Items,
      event: "ItemRemove",
      handler: (parameter: {}) => void
    ): void;
    on(
      obj: Outlook$Outlook$JournalItem,
      event: "AfterWrite" | "BeforeRead" | "Read" | "Unload",
      handler: (parameter: {}) => void
    ): void;
    on(
      obj: Outlook$Outlook$MailItem,
      event: "AfterWrite" | "BeforeRead" | "Read" | "Unload",
      handler: (parameter: {}) => void
    ): void;
    on(
      obj: Outlook$Outlook$MeetingItem,
      event: "AfterWrite" | "BeforeRead" | "Read" | "Unload",
      handler: (parameter: {}) => void
    ): void;
    on(
      obj: Outlook$Outlook$MobileItem,
      event: "AfterWrite" | "BeforeRead" | "Read" | "Unload",
      handler: (parameter: {}) => void
    ): void;
    on(
      obj: Outlook$Outlook$NameSpace,
      event: "AutoDiscoverComplete",
      handler: (parameter: {}) => void
    ): void;
    on(
      obj: Outlook$Outlook$NavigationGroups,
      event: "NavigationFolderRemove",
      handler: (parameter: {}) => void
    ): void;
    on(
      obj: Outlook$Outlook$OlkBusinessCardControl,
      event: "Click" | "DoubleClick",
      handler: (parameter: {}) => void
    ): void;
    on(
      obj: Outlook$Outlook$OlkCategory,
      event: "Change" | "Click" | "DoubleClick" | "Enter",
      handler: (parameter: {}) => void
    ): void;
    on(
      obj: Outlook$Outlook$OlkCheckBox,
      event: "AfterUpdate" | "Change" | "Click" | "DoubleClick" | "Enter",
      handler: (parameter: {}) => void
    ): void;
    on(
      obj: Outlook$Outlook$OlkComboBox,
      event:
        | "AfterUpdate"
        | "Change"
        | "Click"
        | "DoubleClick"
        | "DropButtonClick"
        | "Enter",
      handler: (parameter: {}) => void
    ): void;
    on(
      obj: Outlook$Outlook$OlkCommandButton,
      event: "AfterUpdate" | "Click" | "DoubleClick" | "Enter",
      handler: (parameter: {}) => void
    ): void;
    on(
      obj: Outlook$Outlook$OlkContactPhoto,
      event: "Change" | "Click" | "DoubleClick" | "Enter",
      handler: (parameter: {}) => void
    ): void;
    on(
      obj: Outlook$Outlook$OlkDateControl,
      event:
        | "AfterUpdate"
        | "Change"
        | "Click"
        | "DoubleClick"
        | "DropButtonClick"
        | "Enter",
      handler: (parameter: {}) => void
    ): void;
    on(
      obj: Outlook$Outlook$OlkInfoBar,
      event: "Click" | "DoubleClick",
      handler: (parameter: {}) => void
    ): void;
    on(
      obj: Outlook$Outlook$OlkLabel,
      event: "Click" | "DoubleClick",
      handler: (parameter: {}) => void
    ): void;
    on(
      obj: Outlook$Outlook$OlkListBox,
      event: "AfterUpdate" | "Change" | "Click" | "DoubleClick" | "Enter",
      handler: (parameter: {}) => void
    ): void;
    on(
      obj: Outlook$Outlook$OlkOptionButton,
      event: "AfterUpdate" | "Change" | "Click" | "DoubleClick" | "Enter",
      handler: (parameter: {}) => void
    ): void;
    on(
      obj: Outlook$Outlook$OlkSenderPhoto,
      event: "Change" | "Click" | "DoubleClick",
      handler: (parameter: {}) => void
    ): void;
    on(
      obj: Outlook$Outlook$OlkTextBox,
      event: "AfterUpdate" | "Change" | "Click" | "DoubleClick" | "Enter",
      handler: (parameter: {}) => void
    ): void;
    on(
      obj: Outlook$Outlook$OlkTimeControl,
      event:
        | "AfterUpdate"
        | "Change"
        | "Click"
        | "DoubleClick"
        | "DropButtonClick"
        | "Enter",
      handler: (parameter: {}) => void
    ): void;
    on(
      obj: Outlook$Outlook$OlkTimeZoneControl,
      event:
        | "AfterUpdate"
        | "Change"
        | "Click"
        | "DoubleClick"
        | "DropButtonClick"
        | "Enter",
      handler: (parameter: {}) => void
    ): void;
    on(
      obj: Outlook$Outlook$PostItem,
      event: "AfterWrite" | "BeforeRead" | "Read" | "Unload",
      handler: (parameter: {}) => void
    ): void;
    on(
      obj: Outlook$Outlook$Reminders,
      event: "ReminderRemove",
      handler: (parameter: {}) => void
    ): void;
    on(
      obj: Outlook$Outlook$RemoteItem,
      event: "AfterWrite" | "BeforeRead" | "Read" | "Unload",
      handler: (parameter: {}) => void
    ): void;
    on(
      obj: Outlook$Outlook$ReportItem,
      event: "AfterWrite" | "BeforeRead" | "Read" | "Unload",
      handler: (parameter: {}) => void
    ): void;
    on(
      obj: Outlook$Outlook$Results,
      event: "ItemRemove",
      handler: (parameter: {}) => void
    ): void;
    on(
      obj: Outlook$Outlook$SharingItem,
      event: "AfterWrite" | "BeforeRead" | "Read" | "Unload",
      handler: (parameter: {}) => void
    ): void;
    on(
      obj: Outlook$Outlook$SyncObject,
      event: "SyncEnd" | "SyncStart",
      handler: (parameter: {}) => void
    ): void;
    on(
      obj: Outlook$Outlook$TaskItem,
      event: "AfterWrite" | "BeforeRead" | "Read" | "Unload",
      handler: (parameter: {}) => void
    ): void;
    on(
      obj: Outlook$Outlook$TaskRequestAcceptItem,
      event: "AfterWrite" | "BeforeRead" | "Read" | "Unload",
      handler: (parameter: {}) => void
    ): void;
    on(
      obj: Outlook$Outlook$TaskRequestDeclineItem,
      event: "AfterWrite" | "BeforeRead" | "Read" | "Unload",
      handler: (parameter: {}) => void
    ): void;
    on(
      obj: Outlook$Outlook$TaskRequestItem,
      event: "AfterWrite" | "BeforeRead" | "Read" | "Unload",
      handler: (parameter: {}) => void
    ): void;
    on(
      obj: Outlook$Outlook$TaskRequestUpdateItem,
      event: "AfterWrite" | "BeforeRead" | "Read" | "Unload",
      handler: (parameter: {}) => void
    ): void;
  }
  declare interface ActiveXObjectNameMap {
    "DOCSITE.DocSiteControl": Outlook$Outlook$_DocSiteControl;
    "Outlook.Application": Outlook$Outlook$Application;
    "Outlook.OlkBusinessCardControl": Outlook$Outlook$OlkBusinessCardControl;
    "Outlook.OlkCategoryStrip": Outlook$Outlook$OlkCategory;
    "Outlook.OlkCheckBox": Outlook$Outlook$OlkCheckBox;
    "Outlook.OlkComboBox": Outlook$Outlook$OlkComboBox;
    "Outlook.OlkCommandButton": Outlook$Outlook$OlkCommandButton;
    "Outlook.OlkContactPhoto": Outlook$Outlook$OlkContactPhoto;
    "Outlook.OlkDateControl": Outlook$Outlook$OlkDateControl;
    "Outlook.OlkFrameHeader": Outlook$Outlook$OlkFrameHeader;
    "Outlook.OlkInfoBar": Outlook$Outlook$OlkInfoBar;
    "Outlook.OlkLabel": Outlook$Outlook$OlkLabel;
    "Outlook.OlkListBox": Outlook$Outlook$OlkListBox;
    "Outlook.OlkOptionButton": Outlook$Outlook$OlkOptionButton;
    "Outlook.OlkPageControl": Outlook$Outlook$OlkPageControl;
    "Outlook.OlkSenderPhoto": Outlook$Outlook$OlkSenderPhoto;
    "Outlook.OlkTextBox": Outlook$Outlook$OlkTextBox;
    "Outlook.OlkTimeControl": Outlook$Outlook$OlkTimeControl;
    "Outlook.OlkTimeZone": Outlook$Outlook$OlkTimeZoneControl;
    "RECIP.RecipCtl": Outlook$Outlook$_RecipientControl;
  }
  declare interface EnumeratorConstructor {
    new(
      col: Outlook$Outlook$ItemProperties
    ): Enumerator<Outlook$Outlook$ItemProperty>;
    new(col: Outlook$Outlook$Reminders): Enumerator<Outlook$Outlook$Reminder>;
    new(col: Outlook$Outlook$Views): Enumerator<Outlook$Outlook$View>;
  }
}
