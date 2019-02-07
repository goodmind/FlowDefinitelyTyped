declare module "mdns" {
  declare var npm$namespace$MDNS: {
    tcp: typeof MDNS$tcp,
    udp: typeof MDNS$udp,
    makeServiceType: typeof MDNS$makeServiceType,
    createBrowser: typeof MDNS$createBrowser,
    createAdvertisement: typeof MDNS$createAdvertisement,
    resolve: typeof MDNS$resolve,
    browseThemAll: typeof MDNS$browseThemAll,
    loopbackInterface: typeof MDNS$loopbackInterface,
    Advertisement: typeof MDNS$Advertisement,
    Browser: typeof MDNS$Browser,
    ServiceType: typeof MDNS$ServiceType,
    rst: typeof MDNS$rst,
    isAvahi: typeof MDNS$isAvahi,
    _DNS_SD_H: typeof MDNS$_DNS_SD_H,
    kDNSServiceMaxDomainName: typeof MDNS$kDNSServiceMaxDomainName,
    kDNSServiceMaxServiceName: typeof MDNS$kDNSServiceMaxServiceName,
    kDNSServiceOutputFlags: typeof MDNS$kDNSServiceOutputFlags,
    kDNSServiceProperty_DaemonVersion: typeof MDNS$kDNSServiceProperty_DaemonVersion,
    kDNSServiceClass_IN: typeof MDNS$kDNSServiceClass_IN,
    kDNSServiceErr_NoError: typeof MDNS$kDNSServiceErr_NoError,
    kDNSServiceErr_Unknown: typeof MDNS$kDNSServiceErr_Unknown,
    kDNSServiceErr_NoSuchName: typeof MDNS$kDNSServiceErr_NoSuchName,
    kDNSServiceErr_NoMemory: typeof MDNS$kDNSServiceErr_NoMemory,
    kDNSServiceErr_BadParam: typeof MDNS$kDNSServiceErr_BadParam,
    kDNSServiceErr_BadReference: typeof MDNS$kDNSServiceErr_BadReference,
    kDNSServiceErr_BadState: typeof MDNS$kDNSServiceErr_BadState,
    kDNSServiceErr_BadFlags: typeof MDNS$kDNSServiceErr_BadFlags,
    kDNSServiceErr_Unsupported: typeof MDNS$kDNSServiceErr_Unsupported,
    kDNSServiceErr_NotInitialized: typeof MDNS$kDNSServiceErr_NotInitialized,
    kDNSServiceErr_AlreadyRegistered: typeof MDNS$kDNSServiceErr_AlreadyRegistered,
    kDNSServiceErr_NameConflict: typeof MDNS$kDNSServiceErr_NameConflict,
    kDNSServiceErr_Invalid: typeof MDNS$kDNSServiceErr_Invalid,
    kDNSServiceErr_Firewall: typeof MDNS$kDNSServiceErr_Firewall,
    kDNSServiceErr_Incompatible: typeof MDNS$kDNSServiceErr_Incompatible,
    kDNSServiceErr_BadInterfaceIndex: typeof MDNS$kDNSServiceErr_BadInterfaceIndex,
    kDNSServiceErr_Refused: typeof MDNS$kDNSServiceErr_Refused,
    kDNSServiceErr_NoSuchRecord: typeof MDNS$kDNSServiceErr_NoSuchRecord,
    kDNSServiceErr_NoAuth: typeof MDNS$kDNSServiceErr_NoAuth,
    kDNSServiceErr_NoSuchKey: typeof MDNS$kDNSServiceErr_NoSuchKey,
    kDNSServiceErr_NATTraversal: typeof MDNS$kDNSServiceErr_NATTraversal,
    kDNSServiceErr_DoubleNAT: typeof MDNS$kDNSServiceErr_DoubleNAT,
    kDNSServiceErr_BadTime: typeof MDNS$kDNSServiceErr_BadTime,
    kDNSServiceErr_BadSig: typeof MDNS$kDNSServiceErr_BadSig,
    kDNSServiceErr_BadKey: typeof MDNS$kDNSServiceErr_BadKey,
    kDNSServiceErr_Transient: typeof MDNS$kDNSServiceErr_Transient,
    kDNSServiceErr_ServiceNotRunning: typeof MDNS$kDNSServiceErr_ServiceNotRunning,
    kDNSServiceErr_NATPortMappingUnsupported: typeof MDNS$kDNSServiceErr_NATPortMappingUnsupported,
    kDNSServiceErr_NATPortMappingDisabled: typeof MDNS$kDNSServiceErr_NATPortMappingDisabled,
    kDNSServiceErr_NoRouter: typeof MDNS$kDNSServiceErr_NoRouter,
    kDNSServiceErr_PollingMode: typeof MDNS$kDNSServiceErr_PollingMode,
    kDNSServiceErr_Timeout: typeof MDNS$kDNSServiceErr_Timeout,
    kDNSServiceType_A: typeof MDNS$kDNSServiceType_A,
    kDNSServiceType_NS: typeof MDNS$kDNSServiceType_NS,
    kDNSServiceType_MD: typeof MDNS$kDNSServiceType_MD,
    kDNSServiceType_MF: typeof MDNS$kDNSServiceType_MF,
    kDNSServiceType_CNAME: typeof MDNS$kDNSServiceType_CNAME,
    kDNSServiceType_SOA: typeof MDNS$kDNSServiceType_SOA,
    kDNSServiceType_MB: typeof MDNS$kDNSServiceType_MB,
    kDNSServiceType_MG: typeof MDNS$kDNSServiceType_MG,
    kDNSServiceType_MR: typeof MDNS$kDNSServiceType_MR,
    kDNSServiceType_NULL: typeof MDNS$kDNSServiceType_NULL,
    kDNSServiceType_WKS: typeof MDNS$kDNSServiceType_WKS,
    kDNSServiceType_PTR: typeof MDNS$kDNSServiceType_PTR,
    kDNSServiceType_HINFO: typeof MDNS$kDNSServiceType_HINFO,
    kDNSServiceType_MINFO: typeof MDNS$kDNSServiceType_MINFO,
    kDNSServiceType_MX: typeof MDNS$kDNSServiceType_MX,
    kDNSServiceType_TXT: typeof MDNS$kDNSServiceType_TXT,
    kDNSServiceType_RP: typeof MDNS$kDNSServiceType_RP,
    kDNSServiceType_AFSDB: typeof MDNS$kDNSServiceType_AFSDB,
    kDNSServiceType_X25: typeof MDNS$kDNSServiceType_X25,
    kDNSServiceType_ISDN: typeof MDNS$kDNSServiceType_ISDN,
    kDNSServiceType_RT: typeof MDNS$kDNSServiceType_RT,
    kDNSServiceType_NSAP: typeof MDNS$kDNSServiceType_NSAP,
    kDNSServiceType_NSAP_PTR: typeof MDNS$kDNSServiceType_NSAP_PTR,
    kDNSServiceType_SIG: typeof MDNS$kDNSServiceType_SIG,
    kDNSServiceType_KEY: typeof MDNS$kDNSServiceType_KEY,
    kDNSServiceType_PX: typeof MDNS$kDNSServiceType_PX,
    kDNSServiceType_GPOS: typeof MDNS$kDNSServiceType_GPOS,
    kDNSServiceType_AAAA: typeof MDNS$kDNSServiceType_AAAA,
    kDNSServiceType_LOC: typeof MDNS$kDNSServiceType_LOC,
    kDNSServiceType_NXT: typeof MDNS$kDNSServiceType_NXT,
    kDNSServiceType_EID: typeof MDNS$kDNSServiceType_EID,
    kDNSServiceType_NIMLOC: typeof MDNS$kDNSServiceType_NIMLOC,
    kDNSServiceType_SRV: typeof MDNS$kDNSServiceType_SRV,
    kDNSServiceType_ATMA: typeof MDNS$kDNSServiceType_ATMA,
    kDNSServiceType_NAPTR: typeof MDNS$kDNSServiceType_NAPTR,
    kDNSServiceType_KX: typeof MDNS$kDNSServiceType_KX,
    kDNSServiceType_CERT: typeof MDNS$kDNSServiceType_CERT,
    kDNSServiceType_A6: typeof MDNS$kDNSServiceType_A6,
    kDNSServiceType_DNAME: typeof MDNS$kDNSServiceType_DNAME,
    kDNSServiceType_SINK: typeof MDNS$kDNSServiceType_SINK,
    kDNSServiceType_OPT: typeof MDNS$kDNSServiceType_OPT,
    kDNSServiceType_APL: typeof MDNS$kDNSServiceType_APL,
    kDNSServiceType_DS: typeof MDNS$kDNSServiceType_DS,
    kDNSServiceType_SSHFP: typeof MDNS$kDNSServiceType_SSHFP,
    kDNSServiceType_IPSECKEY: typeof MDNS$kDNSServiceType_IPSECKEY,
    kDNSServiceType_RRSIG: typeof MDNS$kDNSServiceType_RRSIG,
    kDNSServiceType_NSEC: typeof MDNS$kDNSServiceType_NSEC,
    kDNSServiceType_DNSKEY: typeof MDNS$kDNSServiceType_DNSKEY,
    kDNSServiceType_DHCID: typeof MDNS$kDNSServiceType_DHCID,
    kDNSServiceType_NSEC3: typeof MDNS$kDNSServiceType_NSEC3,
    kDNSServiceType_NSEC3PARAM: typeof MDNS$kDNSServiceType_NSEC3PARAM,
    kDNSServiceType_HIP: typeof MDNS$kDNSServiceType_HIP,
    kDNSServiceType_SPF: typeof MDNS$kDNSServiceType_SPF,
    kDNSServiceType_UINFO: typeof MDNS$kDNSServiceType_UINFO,
    kDNSServiceType_UID: typeof MDNS$kDNSServiceType_UID,
    kDNSServiceType_GID: typeof MDNS$kDNSServiceType_GID,
    kDNSServiceType_UNSPEC: typeof MDNS$kDNSServiceType_UNSPEC,
    kDNSServiceType_TKEY: typeof MDNS$kDNSServiceType_TKEY,
    kDNSServiceType_TSIG: typeof MDNS$kDNSServiceType_TSIG,
    kDNSServiceType_IXFR: typeof MDNS$kDNSServiceType_IXFR,
    kDNSServiceType_AXFR: typeof MDNS$kDNSServiceType_AXFR,
    kDNSServiceType_MAILB: typeof MDNS$kDNSServiceType_MAILB,
    kDNSServiceType_MAILA: typeof MDNS$kDNSServiceType_MAILA,
    kDNSServiceType_ANY: typeof MDNS$kDNSServiceType_ANY,
    kDNSServiceFlagsMoreComing: typeof MDNS$kDNSServiceFlagsMoreComing,
    kDNSServiceFlagsAdd: typeof MDNS$kDNSServiceFlagsAdd,
    kDNSServiceFlagsDefault: typeof MDNS$kDNSServiceFlagsDefault,
    kDNSServiceFlagsNoAutoRename: typeof MDNS$kDNSServiceFlagsNoAutoRename,
    kDNSServiceFlagsShared: typeof MDNS$kDNSServiceFlagsShared,
    kDNSServiceFlagsUnique: typeof MDNS$kDNSServiceFlagsUnique,
    kDNSServiceFlagsBrowseDomains: typeof MDNS$kDNSServiceFlagsBrowseDomains,
    kDNSServiceFlagsRegistrationDomains: typeof MDNS$kDNSServiceFlagsRegistrationDomains,
    kDNSServiceFlagsLongLivedQuery: typeof MDNS$kDNSServiceFlagsLongLivedQuery,
    kDNSServiceFlagsAllowRemoteQuery: typeof MDNS$kDNSServiceFlagsAllowRemoteQuery,
    kDNSServiceFlagsForceMulticast: typeof MDNS$kDNSServiceFlagsForceMulticast,
    kDNSServiceFlagsKnownUnique: typeof MDNS$kDNSServiceFlagsKnownUnique,
    kDNSServiceFlagsReturnIntermediates: typeof MDNS$kDNSServiceFlagsReturnIntermediates,
    kDNSServiceFlagsNonBrowsable: typeof MDNS$kDNSServiceFlagsNonBrowsable,
    kDNSServiceFlagsShareConnection: typeof MDNS$kDNSServiceFlagsShareConnection,
    kDNSServiceFlagsSuppressUnusable: typeof MDNS$kDNSServiceFlagsSuppressUnusable,
    kDNSServiceFlagsWakeOnResolve: typeof MDNS$kDNSServiceFlagsWakeOnResolve,
    kDNSServiceFlagsBackgroundTrafficClass: typeof MDNS$kDNSServiceFlagsBackgroundTrafficClass,
    kDNSServiceFlagsIncludeAWDL: typeof MDNS$kDNSServiceFlagsIncludeAWDL,
    kDNSServiceFlagsValidate: typeof MDNS$kDNSServiceFlagsValidate,
    kDNSServiceFlagsSecure: typeof MDNS$kDNSServiceFlagsSecure,
    kDNSServiceFlagsInsecure: typeof MDNS$kDNSServiceFlagsInsecure,
    kDNSServiceFlagsBogus: typeof MDNS$kDNSServiceFlagsBogus,
    kDNSServiceFlagsIndeterminate: typeof MDNS$kDNSServiceFlagsIndeterminate,
    kDNSServiceFlagsUnicastResponse: typeof MDNS$kDNSServiceFlagsUnicastResponse,
    kDNSServiceFlagsValidateOptional: typeof MDNS$kDNSServiceFlagsValidateOptional,
    kDNSServiceFlagsWakeOnlyService: typeof MDNS$kDNSServiceFlagsWakeOnlyService,
    kDNSServiceProtocol_IPv4: typeof MDNS$kDNSServiceProtocol_IPv4,
    kDNSServiceProtocol_IPv6: typeof MDNS$kDNSServiceProtocol_IPv6,
    kDNSServiceProtocol_UDP: typeof MDNS$kDNSServiceProtocol_UDP,
    kDNSServiceProtocol_TCP: typeof MDNS$kDNSServiceProtocol_TCP
  };
  declare type MDNS$DnsSdError = {
    errorCode?: number
  } & Error;

  declare interface MDNS$AdvertisementOptions {
    name?: string;
    interfaceIndex?: number;
    networkInterface?: string;
    txtRecord?: any;
    host?: any;
    domain?: any;
    flags?: any;
    context?: any;
  }

  declare interface MDNS$AdvertisementCreatable {
    new(
      serviceType: MDNS$ServiceType,
      port: number,
      options?: MDNS$AdvertisementOptions,
      callback?: (error: MDNS$DnsSdError, service: MDNS$Service) => void
    ): MDNS$Advertisement;
  }

  declare type MDNS$Advertisement = {
    start(): void,
    stop(): void
  } & NodeJS.EventEmitter;

  declare interface MDNS$BrowserOptions {
    resolverSequence?: Array<
      (service: MDNS$Service, next: () => void) => boolean
    >;
    interfaceIndex?: number;
    networkInterface?: string;
    domain?: any;
    context?: any;
    flags?: any;
  }

  declare type MDNS$Browser = {
    start(): any,
    stop(): any,
    on(event: string, listener: Function): this,
    on(event: "serviceUp", listener: (info: MDNS$Service) => void): this,
    on(event: "serviceDown", listener: (info: MDNS$Service) => void): this
  } & NodeJS.EventEmitter;

  declare interface MDNS$BrowserStatic {
    new(
      serviceType: MDNS$ServiceType,
      options?: MDNS$BrowserOptions
    ): MDNS$Browser;
    defaultResolverSequence: Array<
      (service: MDNS$Service, next: () => void) => boolean
    >;
  }

  declare interface MDNS$Service {
    addresses: Array<string>;
    flags: number;
    fullname: string;
    host: string;
    interfaceIndex: number;
    name?: string;
    rawTxtRecord?: Buffer;
    txtRecord?: any;
    networkInterface: string;
    port: number;
    replyDomain: string;
    type: MDNS$ServiceType;
  }

  declare interface MDNS$ServiceType {
    new(serviceTypeIdentifier: string): MDNS$ServiceType;
    new(
      name: string,
      protocol: string,
      ...subtypes: string[]
    ): MDNS$ServiceType;
    new(serviceTypeIdentifier: Array<string>): MDNS$ServiceType;
    new(serviceTypeIdentifier: {
      name: string,
      protocol: string,
      subtypes?: Array<string>
    }): MDNS$ServiceType;
    new(serviceType: MDNS$ServiceType): MDNS$ServiceType;
    fullyQualified: boolean;
    name: string;
    protocol: string;
    subtypes: Array<string>;
    toString(): string;
    fromString(serviceTypeIdentifier: string): MDNS$ServiceType;
    toArray(): Array<string>;
    fromArray(serviceTypeIdentifier: Array<string>): MDNS$ServiceType;
    fromJSON(serviceTypeIdentifier: {
      name: string,
      protocol: string,
      subtypes?: Array<string>
    }): MDNS$ServiceType;
    fromJSON(serviceType: MDNS$ServiceType): MDNS$ServiceType;
  }

  declare interface MDNS$MDNSResolverSequenceTasks {}

  declare type MDNS$DefaultResolverSequenceTasks = {
    DNSServiceResolve(options?: {
      flags: any
    }): (service: MDNS$Service, next: () => void) => boolean,
    DNSServiceGetAddrInfo(
      options?: any
    ): (service: MDNS$Service, next: () => void) => boolean,
    getaddrinfo(
      options?: any
    ): (service: MDNS$Service, next: () => void) => boolean,
    makeAddressesUnique(): (service: MDNS$Service, next: () => void) => boolean,
    filterAddresses(
      fn: (
        address: string,
        index?: number,
        addresses?: Array<string>
      ) => boolean
    ): void,
    logService(): void
  } & MDNS$MDNSResolverSequenceTasks;

  declare var MDNS$Advertisement: MDNS$AdvertisementCreatable;

  declare var MDNS$Browser: MDNS$BrowserStatic;

  declare var MDNS$ServiceType: MDNS$ServiceType;

  declare var MDNS$rst: MDNS$DefaultResolverSequenceTasks;

  declare function MDNS$tcp(
    name: string,
    ...subtypes: string[]
  ): MDNS$ServiceType;

  declare function MDNS$udp(
    name: string,
    ...subtypes: string[]
  ): MDNS$ServiceType;

  declare function MDNS$makeServiceType(
    name: string,
    protocol: string,
    ...subtypes: string[]
  ): MDNS$ServiceType;

  declare function MDNS$makeServiceType(
    serviceTypeIdentifier: string
  ): MDNS$ServiceType;

  declare function MDNS$makeServiceType(
    serviceTypeIdentifier: Array<string>
  ): MDNS$ServiceType;

  declare function MDNS$makeServiceType(serviceTypeIdentifier: {
    name: string,
    protocol: string,
    subtypes?: Array<string>
  }): MDNS$ServiceType;

  declare function MDNS$makeServiceType(
    serviceType: MDNS$ServiceType
  ): MDNS$ServiceType;

  declare function MDNS$createBrowser(
    serviceType: MDNS$ServiceType,
    options?: MDNS$BrowserOptions
  ): MDNS$Browser;

  declare function MDNS$createAdvertisement(
    serviceType: MDNS$ServiceType,
    port: number,
    options?: MDNS$AdvertisementOptions,
    callback?: (error: MDNS$DnsSdError, service: MDNS$Service) => void
  ): MDNS$Advertisement;

  declare function MDNS$resolve(
    service: MDNS$Service,
    sequence?: Array<(service: MDNS$Service, next: () => void) => boolean>,
    callback?: (error: MDNS$DnsSdError, service: MDNS$Service) => void
  ): void;

  declare function MDNS$browseThemAll(
    options: MDNS$BrowserOptions
  ): MDNS$Browser;

  declare function MDNS$loopbackInterface(): any;

  declare var MDNS$isAvahi: boolean;

  declare var MDNS$_DNS_SD_H: number;

  declare var MDNS$kDNSServiceMaxDomainName: string;

  declare var MDNS$kDNSServiceMaxServiceName: number;

  declare var MDNS$kDNSServiceOutputFlags: any;

  declare var MDNS$kDNSServiceProperty_DaemonVersion: number;

  declare var MDNS$kDNSServiceClass_IN: number;

  declare var MDNS$kDNSServiceErr_NoError: number;

  declare var MDNS$kDNSServiceErr_Unknown: number;

  declare var MDNS$kDNSServiceErr_NoSuchName: number;

  declare var MDNS$kDNSServiceErr_NoMemory: number;

  declare var MDNS$kDNSServiceErr_BadParam: number;

  declare var MDNS$kDNSServiceErr_BadReference: number;

  declare var MDNS$kDNSServiceErr_BadState: number;

  declare var MDNS$kDNSServiceErr_BadFlags: number;

  declare var MDNS$kDNSServiceErr_Unsupported: number;

  declare var MDNS$kDNSServiceErr_NotInitialized: number;

  declare var MDNS$kDNSServiceErr_AlreadyRegistered: number;

  declare var MDNS$kDNSServiceErr_NameConflict: number;

  declare var MDNS$kDNSServiceErr_Invalid: number;

  declare var MDNS$kDNSServiceErr_Firewall: number;

  declare var MDNS$kDNSServiceErr_Incompatible: number;

  declare var MDNS$kDNSServiceErr_BadInterfaceIndex: number;

  declare var MDNS$kDNSServiceErr_Refused: number;

  declare var MDNS$kDNSServiceErr_NoSuchRecord: number;

  declare var MDNS$kDNSServiceErr_NoAuth: number;

  declare var MDNS$kDNSServiceErr_NoSuchKey: number;

  declare var MDNS$kDNSServiceErr_NATTraversal: number;

  declare var MDNS$kDNSServiceErr_DoubleNAT: number;

  declare var MDNS$kDNSServiceErr_BadTime: number;

  declare var MDNS$kDNSServiceErr_BadSig: number;

  declare var MDNS$kDNSServiceErr_BadKey: number;

  declare var MDNS$kDNSServiceErr_Transient: number;

  declare var MDNS$kDNSServiceErr_ServiceNotRunning: number;

  declare var MDNS$kDNSServiceErr_NATPortMappingUnsupported: number;

  declare var MDNS$kDNSServiceErr_NATPortMappingDisabled: number;

  declare var MDNS$kDNSServiceErr_NoRouter: number;

  declare var MDNS$kDNSServiceErr_PollingMode: number;

  declare var MDNS$kDNSServiceErr_Timeout: number;

  declare var MDNS$kDNSServiceType_A: number;

  declare var MDNS$kDNSServiceType_NS: number;

  declare var MDNS$kDNSServiceType_MD: number;

  declare var MDNS$kDNSServiceType_MF: number;

  declare var MDNS$kDNSServiceType_CNAME: number;

  declare var MDNS$kDNSServiceType_SOA: number;

  declare var MDNS$kDNSServiceType_MB: number;

  declare var MDNS$kDNSServiceType_MG: number;

  declare var MDNS$kDNSServiceType_MR: number;

  declare var MDNS$kDNSServiceType_NULL: number;

  declare var MDNS$kDNSServiceType_WKS: number;

  declare var MDNS$kDNSServiceType_PTR: number;

  declare var MDNS$kDNSServiceType_HINFO: number;

  declare var MDNS$kDNSServiceType_MINFO: number;

  declare var MDNS$kDNSServiceType_MX: number;

  declare var MDNS$kDNSServiceType_TXT: number;

  declare var MDNS$kDNSServiceType_RP: number;

  declare var MDNS$kDNSServiceType_AFSDB: number;

  declare var MDNS$kDNSServiceType_X25: number;

  declare var MDNS$kDNSServiceType_ISDN: number;

  declare var MDNS$kDNSServiceType_RT: number;

  declare var MDNS$kDNSServiceType_NSAP: number;

  declare var MDNS$kDNSServiceType_NSAP_PTR: number;

  declare var MDNS$kDNSServiceType_SIG: number;

  declare var MDNS$kDNSServiceType_KEY: number;

  declare var MDNS$kDNSServiceType_PX: number;

  declare var MDNS$kDNSServiceType_GPOS: number;

  declare var MDNS$kDNSServiceType_AAAA: number;

  declare var MDNS$kDNSServiceType_LOC: number;

  declare var MDNS$kDNSServiceType_NXT: number;

  declare var MDNS$kDNSServiceType_EID: number;

  declare var MDNS$kDNSServiceType_NIMLOC: number;

  declare var MDNS$kDNSServiceType_SRV: number;

  declare var MDNS$kDNSServiceType_ATMA: number;

  declare var MDNS$kDNSServiceType_NAPTR: number;

  declare var MDNS$kDNSServiceType_KX: number;

  declare var MDNS$kDNSServiceType_CERT: number;

  declare var MDNS$kDNSServiceType_A6: number;

  declare var MDNS$kDNSServiceType_DNAME: number;

  declare var MDNS$kDNSServiceType_SINK: number;

  declare var MDNS$kDNSServiceType_OPT: number;

  declare var MDNS$kDNSServiceType_APL: number;

  declare var MDNS$kDNSServiceType_DS: number;

  declare var MDNS$kDNSServiceType_SSHFP: number;

  declare var MDNS$kDNSServiceType_IPSECKEY: number;

  declare var MDNS$kDNSServiceType_RRSIG: number;

  declare var MDNS$kDNSServiceType_NSEC: number;

  declare var MDNS$kDNSServiceType_DNSKEY: number;

  declare var MDNS$kDNSServiceType_DHCID: number;

  declare var MDNS$kDNSServiceType_NSEC3: number;

  declare var MDNS$kDNSServiceType_NSEC3PARAM: number;

  declare var MDNS$kDNSServiceType_HIP: number;

  declare var MDNS$kDNSServiceType_SPF: number;

  declare var MDNS$kDNSServiceType_UINFO: number;

  declare var MDNS$kDNSServiceType_UID: number;

  declare var MDNS$kDNSServiceType_GID: number;

  declare var MDNS$kDNSServiceType_UNSPEC: number;

  declare var MDNS$kDNSServiceType_TKEY: number;

  declare var MDNS$kDNSServiceType_TSIG: number;

  declare var MDNS$kDNSServiceType_IXFR: number;

  declare var MDNS$kDNSServiceType_AXFR: number;

  declare var MDNS$kDNSServiceType_MAILB: number;

  declare var MDNS$kDNSServiceType_MAILA: number;

  declare var MDNS$kDNSServiceType_ANY: number;

  declare var MDNS$kDNSServiceFlagsMoreComing: number;

  declare var MDNS$kDNSServiceFlagsAdd: number;

  declare var MDNS$kDNSServiceFlagsDefault: number;

  declare var MDNS$kDNSServiceFlagsNoAutoRename: number;

  declare var MDNS$kDNSServiceFlagsShared: number;

  declare var MDNS$kDNSServiceFlagsUnique: number;

  declare var MDNS$kDNSServiceFlagsBrowseDomains: number;

  declare var MDNS$kDNSServiceFlagsRegistrationDomains: number;

  declare var MDNS$kDNSServiceFlagsLongLivedQuery: number;

  declare var MDNS$kDNSServiceFlagsAllowRemoteQuery: number;

  declare var MDNS$kDNSServiceFlagsForceMulticast: number;

  declare var MDNS$kDNSServiceFlagsKnownUnique: number;

  declare var MDNS$kDNSServiceFlagsReturnIntermediates: number;

  declare var MDNS$kDNSServiceFlagsNonBrowsable: number;

  declare var MDNS$kDNSServiceFlagsShareConnection: number;

  declare var MDNS$kDNSServiceFlagsSuppressUnusable: number;

  declare var MDNS$kDNSServiceFlagsWakeOnResolve: number;

  declare var MDNS$kDNSServiceFlagsBackgroundTrafficClass: number;

  declare var MDNS$kDNSServiceFlagsIncludeAWDL: number;

  declare var MDNS$kDNSServiceFlagsValidate: number;

  declare var MDNS$kDNSServiceFlagsSecure: number;

  declare var MDNS$kDNSServiceFlagsInsecure: number;

  declare var MDNS$kDNSServiceFlagsBogus: number;

  declare var MDNS$kDNSServiceFlagsIndeterminate: number;

  declare var MDNS$kDNSServiceFlagsUnicastResponse: number;

  declare var MDNS$kDNSServiceFlagsValidateOptional: number;

  declare var MDNS$kDNSServiceFlagsWakeOnlyService: number;

  declare var MDNS$kDNSServiceProtocol_IPv4: number;

  declare var MDNS$kDNSServiceProtocol_IPv6: number;

  declare var MDNS$kDNSServiceProtocol_UDP: number;

  declare var MDNS$kDNSServiceProtocol_TCP: number;
  declare module.exports: typeof MDNS;
}
