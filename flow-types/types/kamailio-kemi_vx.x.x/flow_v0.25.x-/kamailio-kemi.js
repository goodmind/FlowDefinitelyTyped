declare module "global" {
  declare var KSR: typeof KamailioKemi;
}
declare module "kamailio-kemi" {
  declare export {};

  declare var KamailioKemi: typeof npm$namespace$KamailioKemi;

  declare var npm$namespace$KamailioKemi: {
    dbg: typeof KamailioKemi$dbg,
    err: typeof KamailioKemi$err,
    info: typeof KamailioKemi$info,
    add_local_rport: typeof KamailioKemi$add_local_rport,
    add_tcp_alias: typeof KamailioKemi$add_tcp_alias,
    add_tcp_alias_via: typeof KamailioKemi$add_tcp_alias_via,
    force_rport: typeof KamailioKemi$force_rport,
    is_method: typeof KamailioKemi$is_method,
    is_method_in: typeof KamailioKemi$is_method_in,
    is_INVITE: typeof KamailioKemi$is_INVITE,
    is_ACK: typeof KamailioKemi$is_ACK,
    is_BYE: typeof KamailioKemi$is_BYE,
    is_CANCEL: typeof KamailioKemi$is_CANCEL,
    is_REGISTER: typeof KamailioKemi$is_REGISTER,
    is_MESSAGE: typeof KamailioKemi$is_MESSAGE,
    is_SUBSCRIBE: typeof KamailioKemi$is_SUBSCRIBE,
    is_PUBLISH: typeof KamailioKemi$is_PUBLISH,
    is_NOTIFY: typeof KamailioKemi$is_NOTIFY,
    is_OPTIONS: typeof KamailioKemi$is_OPTIONS,
    is_INFO: typeof KamailioKemi$is_INFO,
    is_UPDATE: typeof KamailioKemi$is_UPDATE,
    is_PRACK: typeof KamailioKemi$is_PRACK,
    is_myself: typeof KamailioKemi$is_myself,
    is_myself_furi: typeof KamailioKemi$is_myself_furi,
    is_myself_ruri: typeof KamailioKemi$is_myself_ruri,
    is_myself_turi: typeof KamailioKemi$is_myself_turi,
    log: typeof KamailioKemi$log,
    setflag: typeof KamailioKemi$setflag,
    resetflag: typeof KamailioKemi$resetflag,
    isflagset: typeof KamailioKemi$isflagset,
    setbflag: typeof KamailioKemi$setbflag,
    resetbflag: typeof KamailioKemi$resetbflag,
    isbflagset: typeof KamailioKemi$isbflagset,
    setbiflag: typeof KamailioKemi$setbiflag,
    resetbiflag: typeof KamailioKemi$resetbiflag,
    isbiflagset: typeof KamailioKemi$isbiflagset,
    setsflag: typeof KamailioKemi$setsflag,
    resetsflag: typeof KamailioKemi$resetsflag,
    issflagset: typeof KamailioKemi$issflagset,
    seturi: typeof KamailioKemi$seturi,
    setuser: typeof KamailioKemi$setuser,
    sethost: typeof KamailioKemi$sethost,
    setdsturi: typeof KamailioKemi$setdsturi,
    resetdsturi: typeof KamailioKemi$resetdsturi,
    isdsturiset: typeof KamailioKemi$isdsturiset,
    set_drop: typeof KamailioKemi$set_drop,
    set_advertised_address: typeof KamailioKemi$set_advertised_address,
    set_advertised_port: typeof KamailioKemi$set_advertised_port,
    set_forward_close: typeof KamailioKemi$set_forward_close,
    set_forward_no_connect: typeof KamailioKemi$set_forward_no_connect,
    set_reply_close: typeof KamailioKemi$set_reply_close,
    set_reply_no_connect: typeof KamailioKemi$set_reply_no_connect,
    forward: typeof KamailioKemi$forward,
    forward_uri: typeof KamailioKemi$forward_uri,

    _debugger: typeof npm$namespace$KamailioKemi$_debugger,
    _enum: typeof npm$namespace$KamailioKemi$_enum,
    pv: typeof npm$namespace$KamailioKemi$pv,
    hdr: typeof npm$namespace$KamailioKemi$hdr,
    x: typeof npm$namespace$KamailioKemi$x,
    acc: typeof npm$namespace$KamailioKemi$acc,
    acc_radius: typeof npm$namespace$KamailioKemi$acc_radius,
    alias_db: typeof npm$namespace$KamailioKemi$alias_db,
    app_jsdt: typeof npm$namespace$KamailioKemi$app_jsdt,
    app_lua: typeof npm$namespace$KamailioKemi$app_lua,
    app_python: typeof npm$namespace$KamailioKemi$app_python,
    app_python3: typeof npm$namespace$KamailioKemi$app_python3,
    app_ruby: typeof npm$namespace$KamailioKemi$app_ruby,
    app_sqlang: typeof npm$namespace$KamailioKemi$app_sqlang,
    async: typeof npm$namespace$KamailioKemi$async,
    auth: typeof npm$namespace$KamailioKemi$auth,
    auth_db: typeof npm$namespace$KamailioKemi$auth_db,
    auth_ephemeral: typeof npm$namespace$KamailioKemi$auth_ephemeral,
    auth_radius: typeof npm$namespace$KamailioKemi$auth_radius,
    auth_xkeys: typeof npm$namespace$KamailioKemi$auth_xkeys,
    benchmark: typeof npm$namespace$KamailioKemi$benchmark,
    blst: typeof npm$namespace$KamailioKemi$blst,
    call_control: typeof npm$namespace$KamailioKemi$call_control,
    cfgutils: typeof npm$namespace$KamailioKemi$cfgutils,
    cnxcc: typeof npm$namespace$KamailioKemi$cnxcc,
    corex: typeof npm$namespace$KamailioKemi$corex,
    counters: typeof npm$namespace$KamailioKemi$counters,
    crypto: typeof npm$namespace$KamailioKemi$crypto,
    dialog: typeof npm$namespace$KamailioKemi$dialog,
    dialplan: typeof npm$namespace$KamailioKemi$dialplan,
    dispatcher: typeof npm$namespace$KamailioKemi$dispatcher,
    diversion: typeof npm$namespace$KamailioKemi$diversion,
    dmq: typeof npm$namespace$KamailioKemi$dmq,
    domain: typeof npm$namespace$KamailioKemi$domain,
    drouting: typeof npm$namespace$KamailioKemi$drouting,
    evapi: typeof npm$namespace$KamailioKemi$evapi,
    exec: typeof npm$namespace$KamailioKemi$exec,
    geoip: typeof npm$namespace$KamailioKemi$geoip,
    geoip2: typeof npm$namespace$KamailioKemi$geoip2,
    group: typeof npm$namespace$KamailioKemi$group,
    htable: typeof npm$namespace$KamailioKemi$htable,
    http_async_client: typeof npm$namespace$KamailioKemi$http_async_client,
    http_client: typeof npm$namespace$KamailioKemi$http_client,
    imc: typeof npm$namespace$KamailioKemi$imc,
    ipops: typeof npm$namespace$KamailioKemi$ipops,
    jansson: typeof npm$namespace$KamailioKemi$jansson,
    jsonrpcs: typeof npm$namespace$KamailioKemi$jsonrpcs,
    keepalive: typeof npm$namespace$KamailioKemi$keepalive,
    kex: typeof npm$namespace$KamailioKemi$kex,
    lcr: typeof npm$namespace$KamailioKemi$lcr,
    log_custom: typeof npm$namespace$KamailioKemi$log_custom,
    log_systemd: typeof npm$namespace$KamailioKemi$log_systemd,
    maxfwd: typeof npm$namespace$KamailioKemi$maxfwd,
    mediaproxy: typeof npm$namespace$KamailioKemi$mediaproxy,
    misc_radius: typeof npm$namespace$KamailioKemi$misc_radius,
    mqueue: typeof npm$namespace$KamailioKemi$mqueue,
    msilo: typeof npm$namespace$KamailioKemi$msilo,
    msrp: typeof npm$namespace$KamailioKemi$msrp,
    mtree: typeof npm$namespace$KamailioKemi$mtree,
    nat_traversal: typeof npm$namespace$KamailioKemi$nat_traversal,
    nathelper: typeof npm$namespace$KamailioKemi$nathelper,
    ndb_mongodb: typeof npm$namespace$KamailioKemi$ndb_mongodb,
    ndb_redis: typeof npm$namespace$KamailioKemi$ndb_redis,
    path: typeof npm$namespace$KamailioKemi$path,
    pdt: typeof npm$namespace$KamailioKemi$pdt,
    permissions: typeof npm$namespace$KamailioKemi$permissions,
    phonenum: typeof npm$namespace$KamailioKemi$phonenum,
    pike: typeof npm$namespace$KamailioKemi$pike,
    pipelimit: typeof npm$namespace$KamailioKemi$pipelimit,
    prefix_route: typeof npm$namespace$KamailioKemi$prefix_route,
    presence: typeof npm$namespace$KamailioKemi$presence,
    presence_xml: typeof npm$namespace$KamailioKemi$presence_xml,
    pua: typeof npm$namespace$KamailioKemi$pua,
    pvx: typeof npm$namespace$KamailioKemi$pvx,
    rabbitmq: typeof npm$namespace$KamailioKemi$rabbitmq,
    regex: typeof npm$namespace$KamailioKemi$regex,
    registrar: typeof npm$namespace$KamailioKemi$registrar,
    rls: typeof npm$namespace$KamailioKemi$rls,
    rr: typeof npm$namespace$KamailioKemi$rr,
    rtjson: typeof npm$namespace$KamailioKemi$rtjson,
    rtpengine: typeof npm$namespace$KamailioKemi$rtpengine,
    rtpproxy: typeof npm$namespace$KamailioKemi$rtpproxy,
    sanity: typeof npm$namespace$KamailioKemi$sanity,
    sca: typeof npm$namespace$KamailioKemi$sca,
    sdpops: typeof npm$namespace$KamailioKemi$sdpops,
    sipcapture: typeof npm$namespace$KamailioKemi$sipcapture,
    sipdump: typeof npm$namespace$KamailioKemi$sipdump,
    sipjson: typeof npm$namespace$KamailioKemi$sipjson,
    siptrace: typeof npm$namespace$KamailioKemi$siptrace,
    siputils: typeof npm$namespace$KamailioKemi$siputils,
    sl: typeof npm$namespace$KamailioKemi$sl,
    speeddial: typeof npm$namespace$KamailioKemi$speeddial,
    sqlops: typeof npm$namespace$KamailioKemi$sqlops,
    ss7ops: typeof npm$namespace$KamailioKemi$ss7ops,
    sst: typeof npm$namespace$KamailioKemi$sst,
    statistics: typeof npm$namespace$KamailioKemi$statistics,
    statsc: typeof npm$namespace$KamailioKemi$statsc,
    statsd: typeof npm$namespace$KamailioKemi$statsd,
    tcpops: typeof npm$namespace$KamailioKemi$tcpops,
    textops: typeof npm$namespace$KamailioKemi$textops,
    textopsx: typeof npm$namespace$KamailioKemi$textopsx,
    tls: typeof npm$namespace$KamailioKemi$tls,
    tm: typeof npm$namespace$KamailioKemi$tm,
    tmrec: typeof npm$namespace$KamailioKemi$tmrec,
    tmx: typeof npm$namespace$KamailioKemi$tmx,
    tsilo: typeof npm$namespace$KamailioKemi$tsilo,
    uac: typeof npm$namespace$KamailioKemi$uac,
    uac_redirect: typeof npm$namespace$KamailioKemi$uac_redirect,
    uri_db: typeof npm$namespace$KamailioKemi$uri_db,
    userblacklist: typeof npm$namespace$KamailioKemi$userblacklist,
    utils: typeof npm$namespace$KamailioKemi$utils,
    websocket: typeof npm$namespace$KamailioKemi$websocket,
    xcap_server: typeof npm$namespace$KamailioKemi$xcap_server,
    xhttp: typeof npm$namespace$KamailioKemi$xhttp,
    xhttp_pi: typeof npm$namespace$KamailioKemi$xhttp_pi,
    xhttp_rpc: typeof npm$namespace$KamailioKemi$xhttp_rpc,
    xlog: typeof npm$namespace$KamailioKemi$xlog,
    xmlrpc: typeof npm$namespace$KamailioKemi$xmlrpc
  };
  declare type KamailioKemi$Flag =
    | 0
    | 1
    | 2
    | 3
    | 4
    | 5
    | 6
    | 7
    | 8
    | 9
    | 10
    | 11
    | 12
    | 13
    | 14
    | 15
    | 16
    | 17
    | 18
    | 19
    | 20
    | 21
    | 22
    | 23
    | 24
    | 25
    | 26
    | 27
    | 28
    | 29
    | 30
    | 31;

  declare export function KamailioKemi$dbg(logStr: string): void;

  declare export function KamailioKemi$err(logStr: string): void;

  declare export function KamailioKemi$info(logStr: string): void;

  declare export function KamailioKemi$add_local_rport(): boolean;

  declare export function KamailioKemi$add_tcp_alias(port: number): void;

  declare export function KamailioKemi$add_tcp_alias_via(): number;

  declare export function KamailioKemi$force_rport(): boolean;

  declare export function KamailioKemi$is_method(method: string): boolean;

  declare export function KamailioKemi$is_method_in(method: string): boolean;

  declare export function KamailioKemi$is_INVITE(): boolean;

  declare export function KamailioKemi$is_ACK(): boolean;

  declare export function KamailioKemi$is_BYE(): boolean;

  declare export function KamailioKemi$is_CANCEL(): boolean;

  declare export function KamailioKemi$is_REGISTER(): boolean;

  declare export function KamailioKemi$is_MESSAGE(): boolean;

  declare export function KamailioKemi$is_SUBSCRIBE(): boolean;

  declare export function KamailioKemi$is_PUBLISH(): boolean;

  declare export function KamailioKemi$is_NOTIFY(): boolean;

  declare export function KamailioKemi$is_OPTIONS(): boolean;

  declare export function KamailioKemi$is_INFO(): boolean;

  declare export function KamailioKemi$is_UPDATE(): boolean;

  declare export function KamailioKemi$is_PRACK(): boolean;

  declare export function KamailioKemi$is_myself(uri: string): boolean;

  declare export function KamailioKemi$is_myself_furi(): boolean;

  declare export function KamailioKemi$is_myself_ruri(): boolean;

  declare export function KamailioKemi$is_myself_turi(): boolean;

  declare export function KamailioKemi$log(
    level: "dbg" | "info" | "warn" | "crit" | "err",
    msg: string
  ): void;

  declare export function KamailioKemi$setflag(
    flag: KamailioKemi$Flag
  ): boolean;

  declare export function KamailioKemi$resetflag(
    flag: KamailioKemi$Flag
  ): boolean;

  declare export function KamailioKemi$isflagset(
    flag: KamailioKemi$Flag
  ): boolean;

  declare export function KamailioKemi$setbflag(
    flag: KamailioKemi$Flag
  ): boolean;

  declare export function KamailioKemi$resetbflag(
    flag: KamailioKemi$Flag
  ): boolean;

  declare export function KamailioKemi$isbflagset(
    flag: KamailioKemi$Flag
  ): boolean;

  declare export function KamailioKemi$setbiflag(
    flag: KamailioKemi$Flag,
    branch: number
  ): boolean;

  declare export function KamailioKemi$resetbiflag(
    flag: KamailioKemi$Flag,
    branch: number
  ): boolean;

  declare export function KamailioKemi$isbiflagset(
    flag: KamailioKemi$Flag,
    branch: number
  ): boolean;

  declare export function KamailioKemi$setsflag(
    flag: KamailioKemi$Flag
  ): boolean;

  declare export function KamailioKemi$resetsflag(
    flag: KamailioKemi$Flag
  ): boolean;

  declare export function KamailioKemi$issflagset(
    flag: KamailioKemi$Flag
  ): boolean;

  declare export function KamailioKemi$seturi(uri: string): boolean;

  declare export function KamailioKemi$setuser(usr: string): boolean;

  declare export function KamailioKemi$sethost(host: string): boolean;

  declare export function KamailioKemi$setdsturi(uri: string): boolean;

  declare export function KamailioKemi$resetdsturi(): boolean;

  declare export function KamailioKemi$isdsturiset(): boolean;

  declare export function KamailioKemi$set_drop(): void;

  declare export function KamailioKemi$set_advertised_address(
    addr: string
  ): number;

  declare export function KamailioKemi$set_advertised_port(
    port: string
  ): number;

  declare export function KamailioKemi$set_forward_close(): boolean;

  declare export function KamailioKemi$set_forward_no_connect(): boolean;

  declare export function KamailioKemi$set_reply_close(): boolean;

  declare export function KamailioKemi$set_reply_no_connect(): boolean;

  declare export function KamailioKemi$forward(): number;

  declare export function KamailioKemi$forward_uri(uri: string): number;

  declare var npm$namespace$KamailioKemi$_debugger: {
    dbg_pv_dump: typeof KamailioKemi$_debugger$dbg_pv_dump,
    dbg_pv_dump_ex: typeof KamailioKemi$_debugger$dbg_pv_dump_ex
  };
  declare function KamailioKemi$_debugger$dbg_pv_dump(): number;

  declare function KamailioKemi$_debugger$dbg_pv_dump_ex(
    mask: number,
    level: number
  ): number;

  declare var npm$namespace$KamailioKemi$_enum: {
    enum_i_query_suffix: typeof KamailioKemi$_enum$enum_i_query_suffix,
    enum_pv_query: typeof KamailioKemi$_enum$enum_pv_query,
    enum_pv_query_suffix: typeof KamailioKemi$_enum$enum_pv_query_suffix,
    enum_pv_query_suffix_service: typeof KamailioKemi$_enum$enum_pv_query_suffix_service,
    enum_query: typeof KamailioKemi$_enum$enum_query,
    enum_query_suffix: typeof KamailioKemi$_enum$enum_query_suffix,
    enum_query_suffix_service: typeof KamailioKemi$_enum$enum_query_suffix_service,
    i_enum_query: typeof KamailioKemi$_enum$i_enum_query,
    i_enum_query_suffix_service: typeof KamailioKemi$_enum$i_enum_query_suffix_service,
    is_from_user_enum: typeof KamailioKemi$_enum$is_from_user_enum,
    is_from_user_enum_suffix: typeof KamailioKemi$_enum$is_from_user_enum_suffix,
    is_from_user_enum_suffix_service: typeof KamailioKemi$_enum$is_from_user_enum_suffix_service
  };
  declare function KamailioKemi$_enum$enum_i_query_suffix(
    vsuffix: string
  ): number;

  declare function KamailioKemi$_enum$enum_pv_query(ve164: string): number;

  declare function KamailioKemi$_enum$enum_pv_query_suffix(
    ve164: string,
    vsuffix: string
  ): number;

  declare function KamailioKemi$_enum$enum_pv_query_suffix_service(
    ve164: string,
    vsuffix: string,
    vservice: string
  ): number;

  declare function KamailioKemi$_enum$enum_query(): number;

  declare function KamailioKemi$_enum$enum_query_suffix(
    vsuffix: string
  ): number;

  declare function KamailioKemi$_enum$enum_query_suffix_service(
    vsuffix: string,
    vservice: string
  ): number;

  declare function KamailioKemi$_enum$i_enum_query(): number;

  declare function KamailioKemi$_enum$i_enum_query_suffix_service(
    vsuffix: string,
    vservice: string
  ): number;

  declare function KamailioKemi$_enum$is_from_user_enum(): number;

  declare function KamailioKemi$_enum$is_from_user_enum_suffix(
    vsuffix: string
  ): number;

  declare function KamailioKemi$_enum$is_from_user_enum_suffix_service(
    vsuffix: string,
    vservice: string
  ): number;

  declare export { _debugger as debugger, _enum as enum };

  declare var npm$namespace$KamailioKemi$pv: {
    get: typeof KamailioKemi$pv$get,
    gete: typeof KamailioKemi$pv$gete,
    getvn: typeof KamailioKemi$pv$getvn,
    getvs: typeof KamailioKemi$pv$getvs,
    getw: typeof KamailioKemi$pv$getw,
    seti: typeof KamailioKemi$pv$seti,
    sets: typeof KamailioKemi$pv$sets,
    unset: typeof KamailioKemi$pv$unset,
    is_null: typeof KamailioKemi$pv$is_null
  };
  declare function KamailioKemi$pv$get(pvname: string): string | number | null;

  declare function KamailioKemi$pv$gete(pvname: string): string | number;

  declare function KamailioKemi$pv$getvn(
    pvname: string,
    vn: number
  ): string | number;

  declare function KamailioKemi$pv$getvs(
    pvname: string,
    vn: number
  ): string | number;

  declare function KamailioKemi$pv$getw(pvname: string): string | number;

  declare function KamailioKemi$pv$seti(pvname: string, val: number): void;

  declare function KamailioKemi$pv$sets(pvname: string, val: string): void;

  declare function KamailioKemi$pv$unset(pvname: string): void;

  declare function KamailioKemi$pv$is_null(pvname: string): boolean;

  declare var npm$namespace$KamailioKemi$hdr: {
    append: typeof KamailioKemi$hdr$append,
    append_after: typeof KamailioKemi$hdr$append_after,
    insert: typeof KamailioKemi$hdr$insert,
    insert_before: typeof KamailioKemi$hdr$insert_before,
    remove: typeof KamailioKemi$hdr$remove,
    is_present: typeof KamailioKemi$hdr$is_present,
    append_to_reply: typeof KamailioKemi$hdr$append_to_reply
  };
  declare function KamailioKemi$hdr$append(hdr: string): number;

  declare function KamailioKemi$hdr$append_after(
    hdr: string,
    hdrName: string
  ): number;

  declare function KamailioKemi$hdr$insert(hdr: string): number;

  declare function KamailioKemi$hdr$insert_before(
    hdr: string,
    hdrName: string
  ): number;

  declare function KamailioKemi$hdr$remove(hdrName: string): number;

  declare function KamailioKemi$hdr$is_present(hdrName: string): number;

  declare function KamailioKemi$hdr$append_to_reply(hdr: string): number;

  declare var npm$namespace$KamailioKemi$x: {
    modf: typeof KamailioKemi$x$modf,
    exit: typeof KamailioKemi$x$exit,
    drop: typeof KamailioKemi$x$drop
  };
  declare function KamailioKemi$x$modf(
    name: string,
    ...params: string[]
  ): number;

  declare function KamailioKemi$x$exit(): void;

  declare function KamailioKemi$x$drop(): void;

  declare var npm$namespace$KamailioKemi$acc: {
    acc_db_request: typeof KamailioKemi$acc$acc_db_request,
    acc_log_request: typeof KamailioKemi$acc$acc_log_request,
    acc_request: typeof KamailioKemi$acc$acc_request
  };
  declare function KamailioKemi$acc$acc_db_request(
    comment: string,
    dbtable: string
  ): number;

  declare function KamailioKemi$acc$acc_log_request(comment: string): number;

  declare function KamailioKemi$acc$acc_request(
    comment: string,
    dbtable: string
  ): number;

  declare var npm$namespace$KamailioKemi$acc_radius: {
    request: typeof KamailioKemi$acc_radius$request
  };
  declare function KamailioKemi$acc_radius$request(comment: string): number;

  declare var npm$namespace$KamailioKemi$alias_db: {
    lookup: typeof KamailioKemi$alias_db$lookup,
    lookup_ex: typeof KamailioKemi$alias_db$lookup_ex
  };
  declare function KamailioKemi$alias_db$lookup(stable: string): number;

  declare function KamailioKemi$alias_db$lookup_ex(
    stable: string,
    sflags: string
  ): number;

  declare var npm$namespace$KamailioKemi$app_jsdt: {
    dofile: typeof KamailioKemi$app_jsdt$dofile,
    dostring: typeof KamailioKemi$app_jsdt$dostring,
    run: typeof KamailioKemi$app_jsdt$run,
    run_p1: typeof KamailioKemi$app_jsdt$run_p1,
    run_p2: typeof KamailioKemi$app_jsdt$run_p2,
    run_p3: typeof KamailioKemi$app_jsdt$run_p3,
    runstring: typeof KamailioKemi$app_jsdt$runstring
  };
  declare function KamailioKemi$app_jsdt$dofile(script: string): number;

  declare function KamailioKemi$app_jsdt$dostring(script: string): number;

  declare function KamailioKemi$app_jsdt$run(func: string): number;

  declare function KamailioKemi$app_jsdt$run_p1(
    func: string,
    p1: string
  ): number;

  declare function KamailioKemi$app_jsdt$run_p2(
    func: string,
    p1: string,
    p2: string
  ): number;

  declare function KamailioKemi$app_jsdt$run_p3(
    func: string,
    p1: string,
    p2: string,
    p3: string
  ): number;

  declare function KamailioKemi$app_jsdt$runstring(script: string): number;

  declare var npm$namespace$KamailioKemi$app_lua: {
    dofile: typeof KamailioKemi$app_lua$dofile,
    dostring: typeof KamailioKemi$app_lua$dostring,
    run: typeof KamailioKemi$app_lua$run,
    run_p1: typeof KamailioKemi$app_lua$run_p1,
    run_p2: typeof KamailioKemi$app_lua$run_p2,
    run_p3: typeof KamailioKemi$app_lua$run_p3,
    runstring: typeof KamailioKemi$app_lua$runstring
  };
  declare function KamailioKemi$app_lua$dofile(script: string): number;

  declare function KamailioKemi$app_lua$dostring(script: string): number;

  declare function KamailioKemi$app_lua$run(func: string): number;

  declare function KamailioKemi$app_lua$run_p1(
    func: string,
    p1: string
  ): number;

  declare function KamailioKemi$app_lua$run_p2(
    func: string,
    p1: string,
    p2: string
  ): number;

  declare function KamailioKemi$app_lua$run_p3(
    func: string,
    p1: string,
    p2: string,
    p3: string
  ): number;

  declare function KamailioKemi$app_lua$runstring(script: string): number;

  declare var npm$namespace$KamailioKemi$app_python: {
    exec: typeof KamailioKemi$app_python$exec,
    exec_p1: typeof KamailioKemi$app_python$exec_p1
  };
  declare function KamailioKemi$app_python$exec(method: string): number;

  declare function KamailioKemi$app_python$exec_p1(
    method: string,
    p1: string
  ): number;

  declare var npm$namespace$KamailioKemi$app_python3: {
    exec: typeof KamailioKemi$app_python3$exec,
    exec_p1: typeof KamailioKemi$app_python3$exec_p1
  };
  declare function KamailioKemi$app_python3$exec(method: string): number;

  declare function KamailioKemi$app_python3$exec_p1(
    method: string,
    p1: string
  ): number;

  declare var npm$namespace$KamailioKemi$app_ruby: {
    run: typeof KamailioKemi$app_ruby$run,
    run_p1: typeof KamailioKemi$app_ruby$run_p1,
    run_p2: typeof KamailioKemi$app_ruby$run_p2,
    run_p3: typeof KamailioKemi$app_ruby$run_p3
  };
  declare function KamailioKemi$app_ruby$run(func: string): number;

  declare function KamailioKemi$app_ruby$run_p1(
    func: string,
    p1: string
  ): number;

  declare function KamailioKemi$app_ruby$run_p2(
    func: string,
    p1: string,
    p2: string
  ): number;

  declare function KamailioKemi$app_ruby$run_p3(
    func: string,
    p1: string,
    p2: string,
    p3: string
  ): number;

  declare var npm$namespace$KamailioKemi$app_sqlang: {
    dofile: typeof KamailioKemi$app_sqlang$dofile,
    dostring: typeof KamailioKemi$app_sqlang$dostring,
    run: typeof KamailioKemi$app_sqlang$run,
    run_p1: typeof KamailioKemi$app_sqlang$run_p1,
    run_p2: typeof KamailioKemi$app_sqlang$run_p2,
    run_p3: typeof KamailioKemi$app_sqlang$run_p3,
    runstring: typeof KamailioKemi$app_sqlang$runstring
  };
  declare function KamailioKemi$app_sqlang$dofile(script: string): number;

  declare function KamailioKemi$app_sqlang$dostring(script: string): number;

  declare function KamailioKemi$app_sqlang$run(func: string): number;

  declare function KamailioKemi$app_sqlang$run_p1(
    func: string,
    p1: string
  ): number;

  declare function KamailioKemi$app_sqlang$run_p2(
    func: string,
    p1: string,
    p2: string
  ): number;

  declare function KamailioKemi$app_sqlang$run_p3(
    func: string,
    p1: string,
    p2: string,
    p3: string
  ): number;

  declare function KamailioKemi$app_sqlang$runstring(script: string): number;

  declare var npm$namespace$KamailioKemi$async: {
    route: typeof KamailioKemi$async$route,
    task_route: typeof KamailioKemi$async$task_route
  };
  declare function KamailioKemi$async$route(rn: string, s: number): number;

  declare function KamailioKemi$async$task_route(rn: string): number;

  declare var npm$namespace$KamailioKemi$auth: {
    auth_challenge: typeof KamailioKemi$auth$auth_challenge,
    consume_credentials: typeof KamailioKemi$auth$consume_credentials,
    has_credentials: typeof KamailioKemi$auth$has_credentials,
    pv_auth_check: typeof KamailioKemi$auth$pv_auth_check
  };
  declare function KamailioKemi$auth$auth_challenge(
    realm: string,
    flags: number
  ): number;

  declare function KamailioKemi$auth$consume_credentials(): number;

  declare function KamailioKemi$auth$has_credentials(srealm: string): number;

  declare function KamailioKemi$auth$pv_auth_check(
    srealm: string,
    spasswd: string,
    vflags: number,
    vchecks: number
  ): number;

  declare var npm$namespace$KamailioKemi$auth_db: {
    auth_check: typeof KamailioKemi$auth_db$auth_check,
    is_subscriber: typeof KamailioKemi$auth_db$is_subscriber
  };
  declare function KamailioKemi$auth_db$auth_check(
    srealm: string,
    stable: string,
    iflags: number
  ): number;

  declare function KamailioKemi$auth_db$is_subscriber(
    suri: string,
    stable: string,
    iflags: number
  ): number;

  declare var npm$namespace$KamailioKemi$auth_ephemeral: {
    autheph_authenticate: typeof KamailioKemi$auth_ephemeral$autheph_authenticate,
    autheph_check: typeof KamailioKemi$auth_ephemeral$autheph_check,
    autheph_proxy: typeof KamailioKemi$auth_ephemeral$autheph_proxy,
    autheph_www: typeof KamailioKemi$auth_ephemeral$autheph_www,
    autheph_www_method: typeof KamailioKemi$auth_ephemeral$autheph_www_method
  };
  declare function KamailioKemi$auth_ephemeral$autheph_authenticate(
    susername: string,
    spassword: string
  ): number;

  declare function KamailioKemi$auth_ephemeral$autheph_check(
    srealm: string
  ): number;

  declare function KamailioKemi$auth_ephemeral$autheph_proxy(
    srealm: string
  ): number;

  declare function KamailioKemi$auth_ephemeral$autheph_www(
    srealm: string
  ): number;

  declare function KamailioKemi$auth_ephemeral$autheph_www_method(
    srealm: string,
    smethod: string
  ): number;

  declare var npm$namespace$KamailioKemi$auth_radius: {
    proxy_authorize: typeof KamailioKemi$auth_radius$proxy_authorize,
    proxy_authorize_user: typeof KamailioKemi$auth_radius$proxy_authorize_user,
    www_authorize: typeof KamailioKemi$auth_radius$www_authorize,
    www_authorize_user: typeof KamailioKemi$auth_radius$www_authorize_user
  };
  declare function KamailioKemi$auth_radius$proxy_authorize(
    srealm: string
  ): number;

  declare function KamailioKemi$auth_radius$proxy_authorize_user(
    srealm: string,
    suser: string
  ): number;

  declare function KamailioKemi$auth_radius$www_authorize(
    srealm: string
  ): number;

  declare function KamailioKemi$auth_radius$www_authorize_user(
    srealm: string,
    suser: string
  ): number;

  declare var npm$namespace$KamailioKemi$auth_xkeys: {
    auth_xkeys_add: typeof KamailioKemi$auth_xkeys$auth_xkeys_add,
    auth_xkeys_check: typeof KamailioKemi$auth_xkeys$auth_xkeys_check
  };
  declare function KamailioKemi$auth_xkeys$auth_xkeys_add(
    shdr: string,
    skey: string,
    salg: string,
    sdata: string
  ): number;

  declare function KamailioKemi$auth_xkeys$auth_xkeys_check(
    shdr: string,
    skey: string,
    salg: string,
    sdata: string
  ): number;

  declare var npm$namespace$KamailioKemi$benchmark: {
    bm_log_timer: typeof KamailioKemi$benchmark$bm_log_timer,
    bm_start_timer: typeof KamailioKemi$benchmark$bm_start_timer
  };
  declare function KamailioKemi$benchmark$bm_log_timer(tname: string): number;

  declare function KamailioKemi$benchmark$bm_start_timer(tname: string): number;

  declare var npm$namespace$KamailioKemi$blst: {
    blst_add: typeof KamailioKemi$blst$blst_add,
    blst_add_default: typeof KamailioKemi$blst$blst_add_default,
    blst_add_retry_after: typeof KamailioKemi$blst$blst_add_retry_after,
    blst_clear_ignore: typeof KamailioKemi$blst$blst_clear_ignore,
    blst_clear_ignore_all: typeof KamailioKemi$blst$blst_clear_ignore_all,
    blst_del: typeof KamailioKemi$blst$blst_del,
    blst_is_blacklisted: typeof KamailioKemi$blst$blst_is_blacklisted,
    blst_rpl_clear_ignore: typeof KamailioKemi$blst$blst_rpl_clear_ignore,
    blst_rpl_clear_ignore_all: typeof KamailioKemi$blst$blst_rpl_clear_ignore_all,
    blst_rpl_set_ignore: typeof KamailioKemi$blst$blst_rpl_set_ignore,
    blst_rpl_set_ignore_all: typeof KamailioKemi$blst$blst_rpl_set_ignore_all,
    blst_set_ignore: typeof KamailioKemi$blst$blst_set_ignore,
    blst_set_ignore_all: typeof KamailioKemi$blst$blst_set_ignore_all
  };
  declare function KamailioKemi$blst$blst_add(t: number): number;

  declare function KamailioKemi$blst$blst_add_default(): number;

  declare function KamailioKemi$blst$blst_add_retry_after(
    t_min: number,
    t_max: number
  ): number;

  declare function KamailioKemi$blst$blst_clear_ignore(mask: number): number;

  declare function KamailioKemi$blst$blst_clear_ignore_all(): number;

  declare function KamailioKemi$blst$blst_del(): number;

  declare function KamailioKemi$blst$blst_is_blacklisted(): number;

  declare function KamailioKemi$blst$blst_rpl_clear_ignore(
    mask: number
  ): number;

  declare function KamailioKemi$blst$blst_rpl_clear_ignore_all(): number;

  declare function KamailioKemi$blst$blst_rpl_set_ignore(mask: number): number;

  declare function KamailioKemi$blst$blst_rpl_set_ignore_all(): number;

  declare function KamailioKemi$blst$blst_set_ignore(mask: number): number;

  declare function KamailioKemi$blst$blst_set_ignore_all(): number;

  declare var npm$namespace$KamailioKemi$call_control: {
    call_control: typeof KamailioKemi$call_control$call_control
  };
  declare function KamailioKemi$call_control$call_control(): number;

  declare var npm$namespace$KamailioKemi$cfgutils: {
    abort: typeof KamailioKemi$cfgutils$abort,
    core_hash: typeof KamailioKemi$cfgutils$core_hash,
    lock: typeof KamailioKemi$cfgutils$lock,
    pkg_status: typeof KamailioKemi$cfgutils$pkg_status,
    pkg_summary: typeof KamailioKemi$cfgutils$pkg_summary,
    rand_event: typeof KamailioKemi$cfgutils$rand_event,
    rand_get_prob: typeof KamailioKemi$cfgutils$rand_get_prob,
    rand_reset_prob: typeof KamailioKemi$cfgutils$rand_reset_prob,
    rand_set_prob: typeof KamailioKemi$cfgutils$rand_set_prob,
    shm_status: typeof KamailioKemi$cfgutils$shm_status,
    shm_summary: typeof KamailioKemi$cfgutils$shm_summary,
    trylock: typeof KamailioKemi$cfgutils$trylock,
    unlock: typeof KamailioKemi$cfgutils$unlock
  };
  declare function KamailioKemi$cfgutils$abort(): number;

  declare function KamailioKemi$cfgutils$core_hash(
    s1: string,
    s2: string,
    sz: number
  ): number;

  declare function KamailioKemi$cfgutils$lock(lkey: string): number;

  declare function KamailioKemi$cfgutils$pkg_status(): number;

  declare function KamailioKemi$cfgutils$pkg_summary(): number;

  declare function KamailioKemi$cfgutils$rand_event(): number;

  declare function KamailioKemi$cfgutils$rand_get_prob(): number;

  declare function KamailioKemi$cfgutils$rand_reset_prob(): number;

  declare function KamailioKemi$cfgutils$rand_set_prob(
    percent_par: number
  ): number;

  declare function KamailioKemi$cfgutils$shm_status(): number;

  declare function KamailioKemi$cfgutils$shm_summary(): number;

  declare function KamailioKemi$cfgutils$trylock(lkey: string): number;

  declare function KamailioKemi$cfgutils$unlock(lkey: string): number;

  declare var npm$namespace$KamailioKemi$cnxcc: {
    get_channel_count: typeof KamailioKemi$cnxcc$get_channel_count,
    set_max_channels: typeof KamailioKemi$cnxcc$set_max_channels,
    set_max_credit: typeof KamailioKemi$cnxcc$set_max_credit,
    set_max_time: typeof KamailioKemi$cnxcc$set_max_time,
    terminate_all: typeof KamailioKemi$cnxcc$terminate_all,
    update_max_time: typeof KamailioKemi$cnxcc$update_max_time
  };
  declare function KamailioKemi$cnxcc$get_channel_count(
    sclient: string,
    pvname: string
  ): number;

  declare function KamailioKemi$cnxcc$set_max_channels(
    sclient: string,
    max_chan: number
  ): number;

  declare function KamailioKemi$cnxcc$set_max_credit(
    sclient: string,
    scredit: string,
    scps: string,
    initp: number,
    finishp: number
  ): number;

  declare function KamailioKemi$cnxcc$set_max_time(
    sclient: string,
    max_secs: number
  ): number;

  declare function KamailioKemi$cnxcc$terminate_all(sclient: string): number;

  declare function KamailioKemi$cnxcc$update_max_time(
    sclient: string,
    secs: number
  ): number;

  declare var npm$namespace$KamailioKemi$corex: {
    append_branch: typeof KamailioKemi$corex$append_branch,
    append_branch_uri: typeof KamailioKemi$corex$append_branch_uri,
    append_branch_uri_q: typeof KamailioKemi$corex$append_branch_uri_q,
    has_ruri_user: typeof KamailioKemi$corex$has_ruri_user,
    has_user_agent: typeof KamailioKemi$corex$has_user_agent,
    isxflagset: typeof KamailioKemi$corex$isxflagset,
    resetxflag: typeof KamailioKemi$corex$resetxflag,
    send_data: typeof KamailioKemi$corex$send_data,
    sendx: typeof KamailioKemi$corex$sendx,
    set_recv_socket: typeof KamailioKemi$corex$set_recv_socket,
    set_send_socket: typeof KamailioKemi$corex$set_send_socket,
    set_source_address: typeof KamailioKemi$corex$set_source_address,
    setxflag: typeof KamailioKemi$corex$setxflag,
    via_add_srvid: typeof KamailioKemi$corex$via_add_srvid,
    via_add_xavp_params: typeof KamailioKemi$corex$via_add_xavp_params,
    via_use_xavp_fields: typeof KamailioKemi$corex$via_use_xavp_fields
  };
  declare function KamailioKemi$corex$append_branch(): number;

  declare function KamailioKemi$corex$append_branch_uri(uri: string): number;

  declare function KamailioKemi$corex$append_branch_uri_q(
    uri: string,
    q: string
  ): number;

  declare function KamailioKemi$corex$has_ruri_user(): number;

  declare function KamailioKemi$corex$has_user_agent(): number;

  declare function KamailioKemi$corex$isxflagset(fval: number): number;

  declare function KamailioKemi$corex$resetxflag(fval: number): number;

  declare function KamailioKemi$corex$send_data(
    uri: string,
    data: string
  ): number;

  declare function KamailioKemi$corex$sendx(
    uri: string,
    sock: string,
    data: string
  ): number;

  declare function KamailioKemi$corex$set_recv_socket(ssock: string): number;

  declare function KamailioKemi$corex$set_send_socket(ssock: string): number;

  declare function KamailioKemi$corex$set_source_address(saddr: string): number;

  declare function KamailioKemi$corex$setxflag(fval: number): number;

  declare function KamailioKemi$corex$via_add_srvid(fval: number): number;

  declare function KamailioKemi$corex$via_add_xavp_params(fval: number): number;

  declare function KamailioKemi$corex$via_use_xavp_fields(fval: number): number;

  declare var npm$namespace$KamailioKemi$counters: {
    add: typeof KamailioKemi$counters$add,
    inc: typeof KamailioKemi$counters$inc,
    reset: typeof KamailioKemi$counters$reset
  };
  declare function KamailioKemi$counters$add(sname: string, v: number): number;

  declare function KamailioKemi$counters$inc(sname: string): number;

  declare function KamailioKemi$counters$reset(sname: string): number;

  declare var npm$namespace$KamailioKemi$crypto: {
    aes_decrypt: typeof KamailioKemi$crypto$aes_decrypt,
    aes_encrypt: typeof KamailioKemi$crypto$aes_encrypt
  };
  declare function KamailioKemi$crypto$aes_decrypt(
    ins: string,
    keys: string,
    dpv: string
  ): number;

  declare function KamailioKemi$crypto$aes_encrypt(
    ins: string,
    keys: string,
    dpv: string
  ): number;

  declare var npm$namespace$KamailioKemi$dialog: {
    dlg_bye: typeof KamailioKemi$dialog$dlg_bye,
    dlg_db_load_callid: typeof KamailioKemi$dialog$dlg_db_load_callid,
    dlg_db_load_extra: typeof KamailioKemi$dialog$dlg_db_load_extra,
    dlg_get: typeof KamailioKemi$dialog$dlg_get,
    dlg_isflagset: typeof KamailioKemi$dialog$dlg_isflagset,
    dlg_manage: typeof KamailioKemi$dialog$dlg_manage,
    dlg_resetflag: typeof KamailioKemi$dialog$dlg_resetflag,
    dlg_set_property: typeof KamailioKemi$dialog$dlg_set_property,
    dlg_set_timeout: typeof KamailioKemi$dialog$dlg_set_timeout,
    dlg_set_timeout_id: typeof KamailioKemi$dialog$dlg_set_timeout_id,
    dlg_setflag: typeof KamailioKemi$dialog$dlg_setflag,
    get_profile_size: typeof KamailioKemi$dialog$get_profile_size,
    get_profile_size_static: typeof KamailioKemi$dialog$get_profile_size_static,
    is_in_profile: typeof KamailioKemi$dialog$is_in_profile,
    is_in_profile_static: typeof KamailioKemi$dialog$is_in_profile_static,
    is_known_dlg: typeof KamailioKemi$dialog$is_known_dlg,
    set_dlg_profile: typeof KamailioKemi$dialog$set_dlg_profile,
    set_dlg_profile_static: typeof KamailioKemi$dialog$set_dlg_profile_static,
    unset_dlg_profile: typeof KamailioKemi$dialog$unset_dlg_profile,
    unset_dlg_profile_static: typeof KamailioKemi$dialog$unset_dlg_profile_static
  };
  declare function KamailioKemi$dialog$dlg_bye(side: string): number;

  declare function KamailioKemi$dialog$dlg_db_load_callid(
    callid: string
  ): number;

  declare function KamailioKemi$dialog$dlg_db_load_extra(): number;

  declare function KamailioKemi$dialog$dlg_get(
    sc: string,
    sf: string,
    st: string
  ): number;

  declare function KamailioKemi$dialog$dlg_isflagset(val: number): number;

  declare function KamailioKemi$dialog$dlg_manage(): number;

  declare function KamailioKemi$dialog$dlg_resetflag(val: number): number;

  declare function KamailioKemi$dialog$dlg_set_property(pval: string): number;

  declare function KamailioKemi$dialog$dlg_set_timeout(to: number): number;

  declare function KamailioKemi$dialog$dlg_set_timeout_id(
    to: number,
    he: number,
    hi: number
  ): number;

  declare function KamailioKemi$dialog$dlg_setflag(val: number): number;

  declare function KamailioKemi$dialog$get_profile_size(
    sprofile: string,
    svalue: string,
    spv: string
  ): number;

  declare function KamailioKemi$dialog$get_profile_size_static(
    sprofile: string,
    spv: string
  ): number;

  declare function KamailioKemi$dialog$is_in_profile(
    sprofile: string,
    svalue: string
  ): number;

  declare function KamailioKemi$dialog$is_in_profile_static(
    sprofile: string
  ): number;

  declare function KamailioKemi$dialog$is_known_dlg(): number;

  declare function KamailioKemi$dialog$set_dlg_profile(
    sprofile: string,
    svalue: string
  ): number;

  declare function KamailioKemi$dialog$set_dlg_profile_static(
    sprofile: string
  ): number;

  declare function KamailioKemi$dialog$unset_dlg_profile(
    sprofile: string,
    svalue: string
  ): number;

  declare function KamailioKemi$dialog$unset_dlg_profile_static(
    sprofile: string
  ): number;

  declare var npm$namespace$KamailioKemi$dialplan: {
    dp_match: typeof KamailioKemi$dialplan$dp_match,
    dp_replace: typeof KamailioKemi$dialplan$dp_replace
  };
  declare function KamailioKemi$dialplan$dp_match(
    dpid: number,
    src: string
  ): number;

  declare function KamailioKemi$dialplan$dp_replace(
    dpid: number,
    src: string,
    dst: string
  ): number;

  declare var npm$namespace$KamailioKemi$dispatcher: {
    ds_is_from_list: typeof KamailioKemi$dispatcher$ds_is_from_list,
    ds_is_from_list_mode: typeof KamailioKemi$dispatcher$ds_is_from_list_mode,
    ds_is_from_list_uri: typeof KamailioKemi$dispatcher$ds_is_from_list_uri,
    ds_is_from_lists: typeof KamailioKemi$dispatcher$ds_is_from_lists,
    ds_list_exists: typeof KamailioKemi$dispatcher$ds_list_exists,
    ds_load_unset: typeof KamailioKemi$dispatcher$ds_load_unset,
    ds_load_update: typeof KamailioKemi$dispatcher$ds_load_update,
    ds_mark_dst: typeof KamailioKemi$dispatcher$ds_mark_dst,
    ds_mark_dst_state: typeof KamailioKemi$dispatcher$ds_mark_dst_state,
    ds_next_domain: typeof KamailioKemi$dispatcher$ds_next_domain,
    ds_next_dst: typeof KamailioKemi$dispatcher$ds_next_dst,
    ds_reload: typeof KamailioKemi$dispatcher$ds_reload,
    ds_select: typeof KamailioKemi$dispatcher$ds_select,
    ds_select_domain: typeof KamailioKemi$dispatcher$ds_select_domain,
    ds_select_domain_limit: typeof KamailioKemi$dispatcher$ds_select_domain_limit,
    ds_select_dst: typeof KamailioKemi$dispatcher$ds_select_dst,
    ds_select_dst_limit: typeof KamailioKemi$dispatcher$ds_select_dst_limit,
    ds_select_limit: typeof KamailioKemi$dispatcher$ds_select_limit,
    ds_select_routes: typeof KamailioKemi$dispatcher$ds_select_routes,
    ds_select_routes_limit: typeof KamailioKemi$dispatcher$ds_select_routes_limit,
    ds_set_domain: typeof KamailioKemi$dispatcher$ds_set_domain,
    ds_set_dst: typeof KamailioKemi$dispatcher$ds_set_dst
  };
  declare function KamailioKemi$dispatcher$ds_is_from_list(
    group: number
  ): number;

  declare function KamailioKemi$dispatcher$ds_is_from_list_mode(
    vset: number,
    vmode: number
  ): number;

  declare function KamailioKemi$dispatcher$ds_is_from_list_uri(
    vset: number,
    vmode: number,
    vuri: string
  ): number;

  declare function KamailioKemi$dispatcher$ds_is_from_lists(): number;

  declare function KamailioKemi$dispatcher$ds_list_exists(set: number): number;

  declare function KamailioKemi$dispatcher$ds_load_unset(): number;

  declare function KamailioKemi$dispatcher$ds_load_update(): number;

  declare function KamailioKemi$dispatcher$ds_mark_dst(): number;

  declare function KamailioKemi$dispatcher$ds_mark_dst_state(
    sval: string
  ): number;

  declare function KamailioKemi$dispatcher$ds_next_domain(): number;

  declare function KamailioKemi$dispatcher$ds_next_dst(): number;

  declare function KamailioKemi$dispatcher$ds_reload(): number;

  declare function KamailioKemi$dispatcher$ds_select(
    set: number,
    alg: number
  ): number;

  declare function KamailioKemi$dispatcher$ds_select_domain(
    set: number,
    alg: number
  ): number;

  declare function KamailioKemi$dispatcher$ds_select_domain_limit(
    set: number,
    alg: number,
    limit: number
  ): number;

  declare function KamailioKemi$dispatcher$ds_select_dst(
    set: number,
    alg: number
  ): number;

  declare function KamailioKemi$dispatcher$ds_select_dst_limit(
    set: number,
    alg: number,
    limit: number
  ): number;

  declare function KamailioKemi$dispatcher$ds_select_limit(
    set: number,
    alg: number,
    limit: number
  ): number;

  declare function KamailioKemi$dispatcher$ds_select_routes(
    srules: string,
    smode: string
  ): number;

  declare function KamailioKemi$dispatcher$ds_select_routes_limit(
    srules: string,
    smode: string,
    rlimit: number
  ): number;

  declare function KamailioKemi$dispatcher$ds_set_domain(): number;

  declare function KamailioKemi$dispatcher$ds_set_dst(): number;

  declare var npm$namespace$KamailioKemi$diversion: {
    add_diversion: typeof KamailioKemi$diversion$add_diversion,
    add_diversion_uri: typeof KamailioKemi$diversion$add_diversion_uri
  };
  declare function KamailioKemi$diversion$add_diversion(reason: string): number;

  declare function KamailioKemi$diversion$add_diversion_uri(
    reason: string,
    uri: string
  ): number;

  declare var npm$namespace$KamailioKemi$dmq: {
    bcast_message: typeof KamailioKemi$dmq$bcast_message,
    handle_message: typeof KamailioKemi$dmq$handle_message,
    handle_message_rc: typeof KamailioKemi$dmq$handle_message_rc,
    is_from_node: typeof KamailioKemi$dmq$is_from_node,
    send_message: typeof KamailioKemi$dmq$send_message,
    t_replicate: typeof KamailioKemi$dmq$t_replicate,
    t_replicate_mode: typeof KamailioKemi$dmq$t_replicate_mode
  };
  declare function KamailioKemi$dmq$bcast_message(
    peer_str: string,
    body_str: string,
    ct_str: string
  ): number;

  declare function KamailioKemi$dmq$handle_message(): number;

  declare function KamailioKemi$dmq$handle_message_rc(
    returnval: number
  ): number;

  declare function KamailioKemi$dmq$is_from_node(): number;

  declare function KamailioKemi$dmq$send_message(
    peer_str: string,
    to_str: string,
    body_str: string,
    ct_str: string
  ): number;

  declare function KamailioKemi$dmq$t_replicate(): number;

  declare function KamailioKemi$dmq$t_replicate_mode(mode: number): number;

  declare var npm$namespace$KamailioKemi$domain: {
    is_domain_local: typeof KamailioKemi$domain$is_domain_local,
    is_from_local: typeof KamailioKemi$domain$is_from_local,
    is_uri_host_local: typeof KamailioKemi$domain$is_uri_host_local,
    lookup_domain: typeof KamailioKemi$domain$lookup_domain,
    lookup_domain_prefix: typeof KamailioKemi$domain$lookup_domain_prefix
  };
  declare function KamailioKemi$domain$is_domain_local(sdomain: string): number;

  declare function KamailioKemi$domain$is_from_local(): number;

  declare function KamailioKemi$domain$is_uri_host_local(): number;

  declare function KamailioKemi$domain$lookup_domain(_sdomain: string): number;

  declare function KamailioKemi$domain$lookup_domain_prefix(
    _sdomain: string,
    _sprefix: string
  ): number;

  declare var npm$namespace$KamailioKemi$drouting: {
    do_routing: typeof KamailioKemi$drouting$do_routing,
    do_routing_furi: typeof KamailioKemi$drouting$do_routing_furi,
    goes_to_gw: typeof KamailioKemi$drouting$goes_to_gw,
    goes_to_gw_type: typeof KamailioKemi$drouting$goes_to_gw_type,
    is_from_gw: typeof KamailioKemi$drouting$is_from_gw,
    is_from_gw_type: typeof KamailioKemi$drouting$is_from_gw_type,
    is_from_gw_type_flags: typeof KamailioKemi$drouting$is_from_gw_type_flags,
    next_routing: typeof KamailioKemi$drouting$next_routing,
    use_next_gw: typeof KamailioKemi$drouting$use_next_gw
  };
  declare function KamailioKemi$drouting$do_routing(grp_id: number): number;

  declare function KamailioKemi$drouting$do_routing_furi(): number;

  declare function KamailioKemi$drouting$goes_to_gw(): number;

  declare function KamailioKemi$drouting$goes_to_gw_type(type: number): number;

  declare function KamailioKemi$drouting$is_from_gw(): number;

  declare function KamailioKemi$drouting$is_from_gw_type(type: number): number;

  declare function KamailioKemi$drouting$is_from_gw_type_flags(
    type: number,
    flags: number
  ): number;

  declare function KamailioKemi$drouting$next_routing(): number;

  declare function KamailioKemi$drouting$use_next_gw(): number;

  declare var npm$namespace$KamailioKemi$evapi: {
    async_relay: typeof KamailioKemi$evapi$async_relay,
    close: typeof KamailioKemi$evapi$close,
    relay: typeof KamailioKemi$evapi$relay,
    relay_multicast: typeof KamailioKemi$evapi$relay_multicast,
    relay_unicast: typeof KamailioKemi$evapi$relay_unicast,
    set_tag: typeof KamailioKemi$evapi$set_tag
  };
  declare function KamailioKemi$evapi$async_relay(sdata: string): number;

  declare function KamailioKemi$evapi$close(): number;

  declare function KamailioKemi$evapi$relay(sdata: string): number;

  declare function KamailioKemi$evapi$relay_multicast(
    sdata: string,
    stag: string
  ): number;

  declare function KamailioKemi$evapi$relay_unicast(
    sdata: string,
    stag: string
  ): number;

  declare function KamailioKemi$evapi$set_tag(stag: string): number;

  declare var npm$namespace$KamailioKemi$exec: {
    exec_avp: typeof KamailioKemi$exec$exec_avp,
    exec_dset: typeof KamailioKemi$exec$exec_dset,
    exec_msg: typeof KamailioKemi$exec$exec_msg
  };
  declare function KamailioKemi$exec$exec_avp(cmd: string): number;

  declare function KamailioKemi$exec$exec_dset(cmd: string): number;

  declare function KamailioKemi$exec$exec_msg(cmd: string): number;

  declare var npm$namespace$KamailioKemi$geoip: {
    match: typeof KamailioKemi$geoip$match
  };
  declare function KamailioKemi$geoip$match(
    tomatch: string,
    pvclass: string
  ): number;

  declare var npm$namespace$KamailioKemi$geoip2: {
    match: typeof KamailioKemi$geoip2$match
  };
  declare function KamailioKemi$geoip2$match(
    tomatch: string,
    pvclass: string
  ): number;

  declare var npm$namespace$KamailioKemi$group: {
    is_user_in: typeof KamailioKemi$group$is_user_in
  };
  declare function KamailioKemi$group$is_user_in(
    uri: string,
    grp: string
  ): number;

  declare var npm$namespace$KamailioKemi$htable: {
    sht_has_name: typeof KamailioKemi$htable$sht_has_name,
    sht_has_str_value: typeof KamailioKemi$htable$sht_has_str_value,
    sht_iterator_end: typeof KamailioKemi$htable$sht_iterator_end,
    sht_iterator_next: typeof KamailioKemi$htable$sht_iterator_next,
    sht_iterator_start: typeof KamailioKemi$htable$sht_iterator_start,
    sht_lock: typeof KamailioKemi$htable$sht_lock,
    sht_reset: typeof KamailioKemi$htable$sht_reset,
    sht_rm: typeof KamailioKemi$htable$sht_rm,
    sht_rm_name: typeof KamailioKemi$htable$sht_rm_name,
    sht_rm_name_re: typeof KamailioKemi$htable$sht_rm_name_re,
    sht_rm_value: typeof KamailioKemi$htable$sht_rm_value,
    sht_rm_value_re: typeof KamailioKemi$htable$sht_rm_value_re,
    sht_setex: typeof KamailioKemi$htable$sht_setex,
    sht_seti: typeof KamailioKemi$htable$sht_seti,
    sht_sets: typeof KamailioKemi$htable$sht_sets,
    sht_setxi: typeof KamailioKemi$htable$sht_setxi,
    sht_setxs: typeof KamailioKemi$htable$sht_setxs,
    sht_unlock: typeof KamailioKemi$htable$sht_unlock
  };
  declare function KamailioKemi$htable$sht_has_name(
    sname: string,
    sop: string,
    sval: string
  ): number;

  declare function KamailioKemi$htable$sht_has_str_value(
    sname: string,
    sop: string,
    sval: string
  ): number;

  declare function KamailioKemi$htable$sht_iterator_end(iname: string): number;

  declare function KamailioKemi$htable$sht_iterator_next(iname: string): number;

  declare function KamailioKemi$htable$sht_iterator_start(
    iname: string,
    hname: string
  ): number;

  declare function KamailioKemi$htable$sht_lock(
    htname: string,
    skey: string
  ): number;

  declare function KamailioKemi$htable$sht_reset(hname: string): number;

  declare function KamailioKemi$htable$sht_rm(
    hname: string,
    iname: string
  ): number;

  declare function KamailioKemi$htable$sht_rm_name(
    sname: string,
    sop: string,
    sval: string
  ): number;

  declare function KamailioKemi$htable$sht_rm_name_re(
    htname: string,
    rexp: string
  ): number;

  declare function KamailioKemi$htable$sht_rm_value(
    sname: string,
    sop: string,
    sval: string
  ): number;

  declare function KamailioKemi$htable$sht_rm_value_re(
    htname: string,
    rexp: string
  ): number;

  declare function KamailioKemi$htable$sht_setex(
    htname: string,
    itname: string,
    itval: number
  ): number;

  declare function KamailioKemi$htable$sht_seti(
    htname: string,
    itname: string,
    itval: number
  ): number;

  declare function KamailioKemi$htable$sht_sets(
    htname: string,
    itname: string,
    itval: string
  ): number;

  declare function KamailioKemi$htable$sht_setxi(
    htname: string,
    itname: string,
    itval: number,
    exval: number
  ): number;

  declare function KamailioKemi$htable$sht_setxs(
    htname: string,
    itname: string,
    itval: string,
    exval: number
  ): number;

  declare function KamailioKemi$htable$sht_unlock(
    htname: string,
    skey: string
  ): number;

  declare var npm$namespace$KamailioKemi$http_async_client: {
    query: typeof KamailioKemi$http_async_client$query
  };
  declare function KamailioKemi$http_async_client$query(
    sdata: string,
    rn: string
  ): number;

  declare var npm$namespace$KamailioKemi$http_client: {
    curl_connect: typeof KamailioKemi$http_client$curl_connect,
    curl_connect_post: typeof KamailioKemi$http_client$curl_connect_post,
    query: typeof KamailioKemi$http_client$query,
    query_post: typeof KamailioKemi$http_client$query_post,
    query_post_hdrs: typeof KamailioKemi$http_client$query_post_hdrs
  };
  declare function KamailioKemi$http_client$curl_connect(
    con: string,
    url: string,
    dpv: string
  ): number;

  declare function KamailioKemi$http_client$curl_connect_post(
    con: string,
    url: string,
    ctype: string,
    data: string,
    dpv: string
  ): number;

  declare function KamailioKemi$http_client$query(
    url: string,
    dpv: string
  ): number;

  declare function KamailioKemi$http_client$query_post(
    url: string,
    post: string,
    dpv: string
  ): number;

  declare function KamailioKemi$http_client$query_post_hdrs(
    url: string,
    post: string,
    hdrs: string,
    dpv: string
  ): number;

  declare var npm$namespace$KamailioKemi$imc: {
    imc_manager: typeof KamailioKemi$imc$imc_manager
  };
  declare function KamailioKemi$imc$imc_manager(): number;

  declare var npm$namespace$KamailioKemi$ipops: {
    compare_ips: typeof KamailioKemi$ipops$compare_ips,
    compare_pure_ips: typeof KamailioKemi$ipops$compare_pure_ips,
    detailed_ip_type: typeof KamailioKemi$ipops$detailed_ip_type,
    detailed_ipv4_type: typeof KamailioKemi$ipops$detailed_ipv4_type,
    detailed_ipv6_type: typeof KamailioKemi$ipops$detailed_ipv6_type,
    dns_int_match_ip: typeof KamailioKemi$ipops$dns_int_match_ip,
    dns_query: typeof KamailioKemi$ipops$dns_query,
    dns_sys_match_ip: typeof KamailioKemi$ipops$dns_sys_match_ip,
    ip_is_in_subnet: typeof KamailioKemi$ipops$ip_is_in_subnet,
    ip_type: typeof KamailioKemi$ipops$ip_type,
    is_in_subnet: typeof KamailioKemi$ipops$is_in_subnet,
    is_ip: typeof KamailioKemi$ipops$is_ip,
    is_ip4: typeof KamailioKemi$ipops$is_ip4,
    is_ip6: typeof KamailioKemi$ipops$is_ip6,
    is_ip6_reference: typeof KamailioKemi$ipops$is_ip6_reference,
    is_ip_rfc1918: typeof KamailioKemi$ipops$is_ip_rfc1918,
    is_pure_ip: typeof KamailioKemi$ipops$is_pure_ip,
    naptr_query: typeof KamailioKemi$ipops$naptr_query,
    srv_query: typeof KamailioKemi$ipops$srv_query
  };
  declare function KamailioKemi$ipops$compare_ips(
    _sval1: string,
    _sval2: string
  ): number;

  declare function KamailioKemi$ipops$compare_pure_ips(
    _sval1: string,
    _sval2: string
  ): number;

  declare function KamailioKemi$ipops$detailed_ip_type(
    _sval: string,
    _dpv: string
  ): number;

  declare function KamailioKemi$ipops$detailed_ipv4_type(
    _sval: string,
    _dpv: string
  ): number;

  declare function KamailioKemi$ipops$detailed_ipv6_type(
    _sval: string,
    _dpv: string
  ): number;

  declare function KamailioKemi$ipops$dns_int_match_ip(
    vhn: string,
    vip: string
  ): number;

  declare function KamailioKemi$ipops$dns_query(
    naptrname: string,
    pvid: string
  ): number;

  declare function KamailioKemi$ipops$dns_sys_match_ip(
    vhn: string,
    vip: string
  ): number;

  declare function KamailioKemi$ipops$ip_is_in_subnet(
    _sval1: string,
    _sval2: string
  ): number;

  declare function KamailioKemi$ipops$ip_type(sval: string): number;

  declare function KamailioKemi$ipops$is_in_subnet(
    _sval1: string,
    _sval2: string
  ): number;

  declare function KamailioKemi$ipops$is_ip(sval: string): number;

  declare function KamailioKemi$ipops$is_ip4(sval: string): number;

  declare function KamailioKemi$ipops$is_ip6(sval: string): number;

  declare function KamailioKemi$ipops$is_ip6_reference(sval: string): number;

  declare function KamailioKemi$ipops$is_ip_rfc1918(sval: string): number;

  declare function KamailioKemi$ipops$is_pure_ip(sval: string): number;

  declare function KamailioKemi$ipops$naptr_query(
    naptrname: string,
    pvid: string
  ): number;

  declare function KamailioKemi$ipops$srv_query(
    naptrname: string,
    pvid: string
  ): number;

  declare var npm$namespace$KamailioKemi$jansson: {
    get: typeof KamailioKemi$jansson$get
  };
  declare function KamailioKemi$jansson$get(
    spath: string,
    sdoc: string,
    spv: string
  ): number;

  declare var npm$namespace$KamailioKemi$jsonrpcs: {
    exec: typeof KamailioKemi$jsonrpcs$exec
  };
  declare function KamailioKemi$jsonrpcs$exec(scmd: string): number;

  declare var npm$namespace$KamailioKemi$keepalive: {
    is_alive: typeof KamailioKemi$keepalive$is_alive
  };
  declare function KamailioKemi$keepalive$is_alive(dest: string): number;

  declare var npm$namespace$KamailioKemi$kex: {
    resetdebug: typeof KamailioKemi$kex$resetdebug,
    setdebug: typeof KamailioKemi$kex$setdebug
  };
  declare function KamailioKemi$kex$resetdebug(): number;

  declare function KamailioKemi$kex$setdebug(lval: number): number;

  declare var npm$namespace$KamailioKemi$lcr: {
    defunct_gw: typeof KamailioKemi$lcr$defunct_gw,
    from_any_gw: typeof KamailioKemi$lcr$from_any_gw,
    from_any_gw_addr: typeof KamailioKemi$lcr$from_any_gw_addr,
    from_gw: typeof KamailioKemi$lcr$from_gw,
    from_gw_addr: typeof KamailioKemi$lcr$from_gw_addr,
    inactivate_gw: typeof KamailioKemi$lcr$inactivate_gw,
    load_gws: typeof KamailioKemi$lcr$load_gws,
    load_gws_furi: typeof KamailioKemi$lcr$load_gws_furi,
    load_gws_ruser: typeof KamailioKemi$lcr$load_gws_ruser,
    next_gw: typeof KamailioKemi$lcr$next_gw,
    to_any_gw: typeof KamailioKemi$lcr$to_any_gw,
    to_any_gw_addr: typeof KamailioKemi$lcr$to_any_gw_addr,
    to_gw: typeof KamailioKemi$lcr$to_gw,
    to_gw_addr: typeof KamailioKemi$lcr$to_gw_addr
  };
  declare function KamailioKemi$lcr$defunct_gw(defunct_period: number): number;

  declare function KamailioKemi$lcr$from_any_gw(): number;

  declare function KamailioKemi$lcr$from_any_gw_addr(
    addr_str: string,
    transport: number
  ): number;

  declare function KamailioKemi$lcr$from_gw(lcr_id: number): number;

  declare function KamailioKemi$lcr$from_gw_addr(
    lcr_id: number,
    addr_str: string,
    transport: number
  ): number;

  declare function KamailioKemi$lcr$inactivate_gw(): number;

  declare function KamailioKemi$lcr$load_gws(lcr_id: number): number;

  declare function KamailioKemi$lcr$load_gws_furi(
    lcr_id: number,
    ruri_user: string,
    from_uri: string
  ): number;

  declare function KamailioKemi$lcr$load_gws_ruser(
    lcr_id: number,
    ruri_user: string
  ): number;

  declare function KamailioKemi$lcr$next_gw(): number;

  declare function KamailioKemi$lcr$to_any_gw(): number;

  declare function KamailioKemi$lcr$to_any_gw_addr(
    addr_str: string,
    transport: number
  ): number;

  declare function KamailioKemi$lcr$to_gw(lcr_id: number): number;

  declare function KamailioKemi$lcr$to_gw_addr(
    lcr_id: number,
    addr_str: string,
    transport: number
  ): number;

  declare var npm$namespace$KamailioKemi$log_custom: {
    log_udp: typeof KamailioKemi$log_custom$log_udp
  };
  declare function KamailioKemi$log_custom$log_udp(txt: string): number;

  declare var npm$namespace$KamailioKemi$log_systemd: {
    sd_journal_print: typeof KamailioKemi$log_systemd$sd_journal_print,
    sd_journal_send_xvap: typeof KamailioKemi$log_systemd$sd_journal_send_xvap
  };
  declare function KamailioKemi$log_systemd$sd_journal_print(
    slev: string,
    stxt: string
  ): number;

  declare function KamailioKemi$log_systemd$sd_journal_send_xvap(
    xname: string
  ): number;

  declare var npm$namespace$KamailioKemi$maxfwd: {
    is_maxfwd_lt: typeof KamailioKemi$maxfwd$is_maxfwd_lt,
    process_maxfwd: typeof KamailioKemi$maxfwd$process_maxfwd
  };
  declare function KamailioKemi$maxfwd$is_maxfwd_lt(limit: number): number;

  declare function KamailioKemi$maxfwd$process_maxfwd(limit: number): number;

  declare var npm$namespace$KamailioKemi$mediaproxy: {
    end_media_session: typeof KamailioKemi$mediaproxy$end_media_session,
    engage_media_proxy: typeof KamailioKemi$mediaproxy$engage_media_proxy,
    use_media_proxy: typeof KamailioKemi$mediaproxy$use_media_proxy
  };
  declare function KamailioKemi$mediaproxy$end_media_session(): number;

  declare function KamailioKemi$mediaproxy$engage_media_proxy(): number;

  declare function KamailioKemi$mediaproxy$use_media_proxy(): number;

  declare var npm$namespace$KamailioKemi$misc_radius: {
    does_uri_exist: typeof KamailioKemi$misc_radius$does_uri_exist,
    does_uri_exist_uval: typeof KamailioKemi$misc_radius$does_uri_exist_uval,
    does_uri_user_exist: typeof KamailioKemi$misc_radius$does_uri_user_exist,
    does_uri_user_exist_uval: typeof KamailioKemi$misc_radius$does_uri_user_exist_uval,
    is_user_in: typeof KamailioKemi$misc_radius$is_user_in,
    load_callee_avps: typeof KamailioKemi$misc_radius$load_callee_avps,
    load_caller_avps: typeof KamailioKemi$misc_radius$load_caller_avps
  };
  declare function KamailioKemi$misc_radius$does_uri_exist(): number;

  declare function KamailioKemi$misc_radius$does_uri_exist_uval(
    suri: string
  ): number;

  declare function KamailioKemi$misc_radius$does_uri_user_exist(): number;

  declare function KamailioKemi$misc_radius$does_uri_user_exist_uval(
    user: string
  ): number;

  declare function KamailioKemi$misc_radius$is_user_in(
    user: string,
    group: string
  ): number;

  declare function KamailioKemi$misc_radius$load_callee_avps(
    user: string
  ): number;

  declare function KamailioKemi$misc_radius$load_caller_avps(
    user: string
  ): number;

  declare var npm$namespace$KamailioKemi$mqueue: {
    mq_add: typeof KamailioKemi$mqueue$mq_add,
    mq_fetch: typeof KamailioKemi$mqueue$mq_fetch,
    mq_pv_free: typeof KamailioKemi$mqueue$mq_pv_free,
    mq_size: typeof KamailioKemi$mqueue$mq_size
  };
  declare function KamailioKemi$mqueue$mq_add(
    mq: string,
    key: string,
    val: string
  ): number;

  declare function KamailioKemi$mqueue$mq_fetch(mq: string): number;

  declare function KamailioKemi$mqueue$mq_pv_free(mq: string): number;

  declare function KamailioKemi$mqueue$mq_size(mq: string): number;

  declare var npm$namespace$KamailioKemi$msilo: {
    mdump: typeof KamailioKemi$msilo$mdump,
    mdump_uri: typeof KamailioKemi$msilo$mdump_uri,
    mstore: typeof KamailioKemi$msilo$mstore,
    mstore_uri: typeof KamailioKemi$msilo$mstore_uri
  };
  declare function KamailioKemi$msilo$mdump(): number;

  declare function KamailioKemi$msilo$mdump_uri(owner_s: string): number;

  declare function KamailioKemi$msilo$mstore(): number;

  declare function KamailioKemi$msilo$mstore_uri(owner_s: string): number;

  declare var npm$namespace$KamailioKemi$msrp: {
    cmap_lookup: typeof KamailioKemi$msrp$cmap_lookup,
    cmap_save: typeof KamailioKemi$msrp$cmap_save,
    is_reply: typeof KamailioKemi$msrp$is_reply,
    is_request: typeof KamailioKemi$msrp$is_request,
    relay: typeof KamailioKemi$msrp$relay,
    relay_flags: typeof KamailioKemi$msrp$relay_flags,
    reply: typeof KamailioKemi$msrp$reply,
    reply_flags: typeof KamailioKemi$msrp$reply_flags,
    set_dst: typeof KamailioKemi$msrp$set_dst
  };
  declare function KamailioKemi$msrp$cmap_lookup(): number;

  declare function KamailioKemi$msrp$cmap_save(): number;

  declare function KamailioKemi$msrp$is_reply(): number;

  declare function KamailioKemi$msrp$is_request(): number;

  declare function KamailioKemi$msrp$relay(): number;

  declare function KamailioKemi$msrp$relay_flags(rtflags: number): number;

  declare function KamailioKemi$msrp$reply(
    rcode: string,
    rtext: string,
    rhdrs: string
  ): number;

  declare function KamailioKemi$msrp$reply_flags(rtflags: number): number;

  declare function KamailioKemi$msrp$set_dst(
    rtaddr: string,
    rfsock: string
  ): number;

  declare var npm$namespace$KamailioKemi$mtree: {
    mt_match: typeof KamailioKemi$mtree$mt_match
  };
  declare function KamailioKemi$mtree$mt_match(
    tname: string,
    tomatch: string,
    mval: number
  ): number;

  declare var npm$namespace$KamailioKemi$nat_traversal: {
    client_nat_test: typeof KamailioKemi$nat_traversal$client_nat_test,
    fix_contact: typeof KamailioKemi$nat_traversal$fix_contact,
    nat_keepalive: typeof KamailioKemi$nat_traversal$nat_keepalive
  };
  declare function KamailioKemi$nat_traversal$client_nat_test(
    tests: number
  ): number;

  declare function KamailioKemi$nat_traversal$fix_contact(): number;

  declare function KamailioKemi$nat_traversal$nat_keepalive(): number;

  declare var npm$namespace$KamailioKemi$nathelper: {
    add_contact_alias: typeof KamailioKemi$nathelper$add_contact_alias,
    add_contact_alias_addr: typeof KamailioKemi$nathelper$add_contact_alias_addr,
    add_rcv_param: typeof KamailioKemi$nathelper$add_rcv_param,
    fix_nated_contact: typeof KamailioKemi$nathelper$fix_nated_contact,
    fix_nated_register: typeof KamailioKemi$nathelper$fix_nated_register,
    fix_nated_sdp: typeof KamailioKemi$nathelper$fix_nated_sdp,
    fix_nated_sdp_ip: typeof KamailioKemi$nathelper$fix_nated_sdp_ip,
    handle_ruri_alias: typeof KamailioKemi$nathelper$handle_ruri_alias,
    is_rfc1918: typeof KamailioKemi$nathelper$is_rfc1918,
    nat_uac_test: typeof KamailioKemi$nathelper$nat_uac_test,
    set_contact_alias: typeof KamailioKemi$nathelper$set_contact_alias
  };
  declare function KamailioKemi$nathelper$add_contact_alias(): number;

  declare function KamailioKemi$nathelper$add_contact_alias_addr(
    ip_str: string,
    port_str: string,
    proto_str: string
  ): number;

  declare function KamailioKemi$nathelper$add_rcv_param(upos: number): number;

  declare function KamailioKemi$nathelper$fix_nated_contact(): number;

  declare function KamailioKemi$nathelper$fix_nated_register(): number;

  declare function KamailioKemi$nathelper$fix_nated_sdp(level: number): number;

  declare function KamailioKemi$nathelper$fix_nated_sdp_ip(
    level: number,
    ip: string
  ): number;

  declare function KamailioKemi$nathelper$handle_ruri_alias(): number;

  declare function KamailioKemi$nathelper$is_rfc1918(address: string): number;

  declare function KamailioKemi$nathelper$nat_uac_test(tests: number): number;

  declare function KamailioKemi$nathelper$set_contact_alias(): number;

  declare var npm$namespace$KamailioKemi$ndb_mongodb: {
    exec: typeof KamailioKemi$ndb_mongodb$exec,
    exec_simple: typeof KamailioKemi$ndb_mongodb$exec_simple,
    find: typeof KamailioKemi$ndb_mongodb$find,
    find_one: typeof KamailioKemi$ndb_mongodb$find_one,
    free_reply: typeof KamailioKemi$ndb_mongodb$free_reply,
    next_reply: typeof KamailioKemi$ndb_mongodb$next_reply
  };
  declare function KamailioKemi$ndb_mongodb$exec(
    ssrv: string,
    sdname: string,
    scname: string,
    scmd: string,
    sres: string
  ): number;

  declare function KamailioKemi$ndb_mongodb$exec_simple(
    ssrv: string,
    sdname: string,
    scname: string,
    scmd: string,
    sres: string
  ): number;

  declare function KamailioKemi$ndb_mongodb$find(
    ssrv: string,
    sdname: string,
    scname: string,
    scmd: string,
    sres: string
  ): number;

  declare function KamailioKemi$ndb_mongodb$find_one(
    ssrv: string,
    sdname: string,
    scname: string,
    scmd: string,
    sres: string
  ): number;

  declare function KamailioKemi$ndb_mongodb$free_reply(name: string): number;

  declare function KamailioKemi$ndb_mongodb$next_reply(name: string): number;

  declare var npm$namespace$KamailioKemi$ndb_redis: {
    redis_cmd: typeof KamailioKemi$ndb_redis$redis_cmd,
    redis_cmd_p1: typeof KamailioKemi$ndb_redis$redis_cmd_p1,
    redis_cmd_p2: typeof KamailioKemi$ndb_redis$redis_cmd_p2,
    redis_cmd_p3: typeof KamailioKemi$ndb_redis$redis_cmd_p3,
    redis_free: typeof KamailioKemi$ndb_redis$redis_free
  };
  declare function KamailioKemi$ndb_redis$redis_cmd(
    srv: string,
    rcmd: string,
    sres: string
  ): number;

  declare function KamailioKemi$ndb_redis$redis_cmd_p1(
    srv: string,
    rcmd: string,
    p1: string,
    sres: string
  ): number;

  declare function KamailioKemi$ndb_redis$redis_cmd_p2(
    srv: string,
    rcmd: string,
    p1: string,
    p2: string,
    sres: string
  ): number;

  declare function KamailioKemi$ndb_redis$redis_cmd_p3(
    srv: string,
    rcmd: string,
    p1: string,
    p2: string,
    p3: string,
    sres: string
  ): number;

  declare function KamailioKemi$ndb_redis$redis_free(name: string): number;

  declare var npm$namespace$KamailioKemi$path: {
    add_path: typeof KamailioKemi$path$add_path,
    add_path_received: typeof KamailioKemi$path$add_path_received,
    add_path_received_user: typeof KamailioKemi$path$add_path_received_user,
    add_path_received_user_params: typeof KamailioKemi$path$add_path_received_user_params,
    add_path_user: typeof KamailioKemi$path$add_path_user,
    add_path_user_params: typeof KamailioKemi$path$add_path_user_params
  };
  declare function KamailioKemi$path$add_path(): number;

  declare function KamailioKemi$path$add_path_received(): number;

  declare function KamailioKemi$path$add_path_received_user(
    _user: string
  ): number;

  declare function KamailioKemi$path$add_path_received_user_params(
    _user: string,
    _params: string
  ): number;

  declare function KamailioKemi$path$add_path_user(_user: string): number;

  declare function KamailioKemi$path$add_path_user_params(
    _user: string,
    _params: string
  ): number;

  declare var npm$namespace$KamailioKemi$pdt: {
    pd_translate: typeof KamailioKemi$pdt$pd_translate,
    pprefix2domain: typeof KamailioKemi$pdt$pprefix2domain
  };
  declare function KamailioKemi$pdt$pd_translate(
    sd: string,
    md: number
  ): number;

  declare function KamailioKemi$pdt$pprefix2domain(
    m: number,
    s: number
  ): number;

  declare var npm$namespace$KamailioKemi$permissions: {
    allow_address: typeof KamailioKemi$permissions$allow_address,
    allow_address_group: typeof KamailioKemi$permissions$allow_address_group,
    allow_source_address: typeof KamailioKemi$permissions$allow_source_address,
    allow_source_address_group: typeof KamailioKemi$permissions$allow_source_address_group
  };
  declare function KamailioKemi$permissions$allow_address(
    addr_group: number,
    ips: string,
    port: number
  ): number;

  declare function KamailioKemi$permissions$allow_address_group(
    _addr: string,
    _port: number
  ): number;

  declare function KamailioKemi$permissions$allow_source_address(
    addr_group: number
  ): number;

  declare function KamailioKemi$permissions$allow_source_address_group(): number;

  declare var npm$namespace$KamailioKemi$phonenum: {
    match: typeof KamailioKemi$phonenum$match
  };
  declare function KamailioKemi$phonenum$match(
    tomatch: string,
    pvclass: string
  ): number;

  declare var npm$namespace$KamailioKemi$pike: {
    pike_check_req: typeof KamailioKemi$pike$pike_check_req
  };
  declare function KamailioKemi$pike$pike_check_req(): number;

  declare var npm$namespace$KamailioKemi$pipelimit: {
    pl_check: typeof KamailioKemi$pipelimit$pl_check,
    pl_check_limit: typeof KamailioKemi$pipelimit$pl_check_limit,
    pl_drop: typeof KamailioKemi$pipelimit$pl_drop,
    pl_drop_range: typeof KamailioKemi$pipelimit$pl_drop_range,
    pl_drop_retry: typeof KamailioKemi$pipelimit$pl_drop_retry
  };
  declare function KamailioKemi$pipelimit$pl_check(pipeid: string): number;

  declare function KamailioKemi$pipelimit$pl_check_limit(
    pipeid: string,
    alg: string,
    limit: number
  ): number;

  declare function KamailioKemi$pipelimit$pl_drop(): number;

  declare function KamailioKemi$pipelimit$pl_drop_range(
    rmin: number,
    rmax: number
  ): number;

  declare function KamailioKemi$pipelimit$pl_drop_retry(rafter: number): number;

  declare var npm$namespace$KamailioKemi$prefix_route: {
    prefix_route: typeof KamailioKemi$prefix_route$prefix_route,
    prefix_route_uri: typeof KamailioKemi$prefix_route$prefix_route_uri
  };
  declare function KamailioKemi$prefix_route$prefix_route(
    ruser: string
  ): number;

  declare function KamailioKemi$prefix_route$prefix_route_uri(): number;

  declare var npm$namespace$KamailioKemi$presence: {
    handle_publish: typeof KamailioKemi$presence$handle_publish,
    handle_publish_uri: typeof KamailioKemi$presence$handle_publish_uri,
    handle_subscribe: typeof KamailioKemi$presence$handle_subscribe,
    handle_subscribe_uri: typeof KamailioKemi$presence$handle_subscribe_uri,
    pres_auth_status: typeof KamailioKemi$presence$pres_auth_status,
    pres_has_subscribers: typeof KamailioKemi$presence$pres_has_subscribers,
    pres_refresh_watchers: typeof KamailioKemi$presence$pres_refresh_watchers,
    pres_refresh_watchers_file: typeof KamailioKemi$presence$pres_refresh_watchers_file,
    pres_update_watchers: typeof KamailioKemi$presence$pres_update_watchers
  };
  declare function KamailioKemi$presence$handle_publish(): number;

  declare function KamailioKemi$presence$handle_publish_uri(
    sender_uri: string
  ): number;

  declare function KamailioKemi$presence$handle_subscribe(): number;

  declare function KamailioKemi$presence$handle_subscribe_uri(
    wuri: string
  ): number;

  declare function KamailioKemi$presence$pres_auth_status(
    watcher_uri: string,
    presentity_uri: string
  ): number;

  declare function KamailioKemi$presence$pres_has_subscribers(
    pres_uri: string,
    wevent: string
  ): number;

  declare function KamailioKemi$presence$pres_refresh_watchers(
    pres: string,
    event: string,
    type: number
  ): number;

  declare function KamailioKemi$presence$pres_refresh_watchers_file(
    pres: string,
    event: string,
    type: number,
    file_uri: string,
    filename: string
  ): number;

  declare function KamailioKemi$presence$pres_update_watchers(
    pres_uri: string,
    event: string
  ): number;

  declare var npm$namespace$KamailioKemi$presence_xml: {
    pres_check_activities: typeof KamailioKemi$presence_xml$pres_check_activities,
    pres_check_basic: typeof KamailioKemi$presence_xml$pres_check_basic
  };
  declare function KamailioKemi$presence_xml$pres_check_activities(
    pres_uri: string,
    activity: string
  ): number;

  declare function KamailioKemi$presence_xml$pres_check_basic(
    pres_uri: string,
    status: string
  ): number;

  declare var npm$namespace$KamailioKemi$pua: {
    pua_set_publish: typeof KamailioKemi$pua$pua_set_publish,
    pua_update_contact: typeof KamailioKemi$pua$pua_update_contact
  };
  declare function KamailioKemi$pua$pua_set_publish(): number;

  declare function KamailioKemi$pua$pua_update_contact(): number;

  declare var npm$namespace$KamailioKemi$pvx: {
    evalx: typeof KamailioKemi$pvx$evalx,
    pv_var_to_xavp: typeof KamailioKemi$pvx$pv_var_to_xavp,
    pv_xavp_print: typeof KamailioKemi$pvx$pv_xavp_print,
    pv_xavp_to_var: typeof KamailioKemi$pvx$pv_xavp_to_var,
    sbranch_append: typeof KamailioKemi$pvx$sbranch_append,
    sbranch_reset: typeof KamailioKemi$pvx$sbranch_reset,
    sbranch_set_ruri: typeof KamailioKemi$pvx$sbranch_set_ruri,
    xavp_params_explode: typeof KamailioKemi$pvx$xavp_params_explode,
    xavp_params_implode: typeof KamailioKemi$pvx$xavp_params_implode
  };
  declare function KamailioKemi$pvx$evalx(dst: string, fmt: string): number;

  declare function KamailioKemi$pvx$pv_var_to_xavp(
    varname: string,
    xname: string
  ): number;

  declare function KamailioKemi$pvx$pv_xavp_print(): number;

  declare function KamailioKemi$pvx$pv_xavp_to_var(xname: string): number;

  declare function KamailioKemi$pvx$sbranch_append(): number;

  declare function KamailioKemi$pvx$sbranch_reset(): number;

  declare function KamailioKemi$pvx$sbranch_set_ruri(): number;

  declare function KamailioKemi$pvx$xavp_params_explode(
    sparams: string,
    sxname: string
  ): number;

  declare function KamailioKemi$pvx$xavp_params_implode(
    sxname: string,
    svname: string
  ): number;

  declare var npm$namespace$KamailioKemi$rabbitmq: {
    publish: typeof KamailioKemi$rabbitmq$publish,
    publish_consume: typeof KamailioKemi$rabbitmq$publish_consume
  };
  declare function KamailioKemi$rabbitmq$publish(
    exchange: string,
    routingkey: string,
    contenttype: string,
    messagebody: string
  ): number;

  declare function KamailioKemi$rabbitmq$publish_consume(
    exchange: string,
    routingkey: string,
    contenttype: string,
    messagebody: string,
    dpv: string
  ): number;

  declare var npm$namespace$KamailioKemi$regex: {
    pcre_match: typeof KamailioKemi$regex$pcre_match,
    pcre_match_group: typeof KamailioKemi$regex$pcre_match_group
  };
  declare function KamailioKemi$regex$pcre_match(
    string: string,
    regex: string
  ): number;

  declare function KamailioKemi$regex$pcre_match_group(
    string: string,
    num_pcre: number
  ): number;

  declare var npm$namespace$KamailioKemi$registrar: {
    add_sock_hdr: typeof KamailioKemi$registrar$add_sock_hdr,
    lookup: typeof KamailioKemi$registrar$lookup,
    lookup_branches: typeof KamailioKemi$registrar$lookup_branches,
    lookup_to_dset: typeof KamailioKemi$registrar$lookup_to_dset,
    lookup_uri: typeof KamailioKemi$registrar$lookup_uri,
    reg_fetch_contacts: typeof KamailioKemi$registrar$reg_fetch_contacts,
    reg_free_contacts: typeof KamailioKemi$registrar$reg_free_contacts,
    registered: typeof KamailioKemi$registrar$registered,
    registered_action: typeof KamailioKemi$registrar$registered_action,
    registered_flags: typeof KamailioKemi$registrar$registered_flags,
    registered_uri: typeof KamailioKemi$registrar$registered_uri,
    save: typeof KamailioKemi$registrar$save,
    save_uri: typeof KamailioKemi$registrar$save_uri,
    set_q_override: typeof KamailioKemi$registrar$set_q_override,
    unregister: typeof KamailioKemi$registrar$unregister,
    unregister_ruid: typeof KamailioKemi$registrar$unregister_ruid
  };
  declare function KamailioKemi$registrar$add_sock_hdr(
    hdr_name: string
  ): number;

  declare function KamailioKemi$registrar$lookup(table: string): number;

  declare function KamailioKemi$registrar$lookup_branches(
    _dtable: string
  ): number;

  declare function KamailioKemi$registrar$lookup_to_dset(
    table: string,
    uri: string
  ): number;

  declare function KamailioKemi$registrar$lookup_uri(
    table: string,
    uri: string
  ): number;

  declare function KamailioKemi$registrar$reg_fetch_contacts(
    dtable: string,
    uri: string,
    profile: string
  ): number;

  declare function KamailioKemi$registrar$reg_free_contacts(
    profile: string
  ): number;

  declare function KamailioKemi$registrar$registered(table: string): number;

  declare function KamailioKemi$registrar$registered_action(
    _dtable: string,
    _uri: string,
    _f: number,
    _aflags: number
  ): number;

  declare function KamailioKemi$registrar$registered_flags(
    _dtable: string,
    _uri: string,
    _f: number
  ): number;

  declare function KamailioKemi$registrar$registered_uri(
    _dtable: string,
    _uri: string
  ): number;

  declare function KamailioKemi$registrar$save(
    table: string,
    flags: number
  ): number;

  declare function KamailioKemi$registrar$save_uri(
    table: string,
    flags: number,
    uri: string
  ): number;

  declare function KamailioKemi$registrar$set_q_override(new_q: string): number;

  declare function KamailioKemi$registrar$unregister(
    _dtable: string,
    _uri: string
  ): number;

  declare function KamailioKemi$registrar$unregister_ruid(
    _dtable: string,
    _uri: string,
    _ruid: string
  ): number;

  declare var npm$namespace$KamailioKemi$rls: {
    handle_notify: typeof KamailioKemi$rls$handle_notify,
    handle_subscribe: typeof KamailioKemi$rls$handle_subscribe,
    handle_subscribe_uri: typeof KamailioKemi$rls$handle_subscribe_uri,
    update_subs: typeof KamailioKemi$rls$update_subs
  };
  declare function KamailioKemi$rls$handle_notify(): number;

  declare function KamailioKemi$rls$handle_subscribe(): number;

  declare function KamailioKemi$rls$handle_subscribe_uri(wuri: string): number;

  declare function KamailioKemi$rls$update_subs(
    uri: string,
    event: string
  ): number;

  declare var npm$namespace$KamailioKemi$rr: {
    add_rr_param: typeof KamailioKemi$rr$add_rr_param,
    check_route_param: typeof KamailioKemi$rr$check_route_param,
    is_direction: typeof KamailioKemi$rr$is_direction,
    loose_route: typeof KamailioKemi$rr$loose_route,
    record_route: typeof KamailioKemi$rr$record_route,
    record_route_params: typeof KamailioKemi$rr$record_route_params,
    remove_record_route: typeof KamailioKemi$rr$remove_record_route
  };
  declare function KamailioKemi$rr$add_rr_param(sparam: string): number;

  declare function KamailioKemi$rr$check_route_param(sre: string): number;

  declare function KamailioKemi$rr$is_direction(dir: string): number;

  declare function KamailioKemi$rr$loose_route(): number;

  declare function KamailioKemi$rr$record_route(): number;

  declare function KamailioKemi$rr$record_route_params(params: string): number;

  declare function KamailioKemi$rr$remove_record_route(): number;

  declare var npm$namespace$KamailioKemi$rtjson: {
    init_routes: typeof KamailioKemi$rtjson$init_routes,
    next_route: typeof KamailioKemi$rtjson$next_route,
    push_routes: typeof KamailioKemi$rtjson$push_routes,
    update_branch: typeof KamailioKemi$rtjson$update_branch
  };
  declare function KamailioKemi$rtjson$init_routes(rdoc: string): number;

  declare function KamailioKemi$rtjson$next_route(): number;

  declare function KamailioKemi$rtjson$push_routes(): number;

  declare function KamailioKemi$rtjson$update_branch(): number;

  declare var npm$namespace$KamailioKemi$rtpengine: {
    rtpengine_answer: typeof KamailioKemi$rtpengine$rtpengine_answer,
    rtpengine_answer0: typeof KamailioKemi$rtpengine$rtpengine_answer0,
    rtpengine_delete: typeof KamailioKemi$rtpengine$rtpengine_delete,
    rtpengine_delete0: typeof KamailioKemi$rtpengine$rtpengine_delete0,
    rtpengine_manage: typeof KamailioKemi$rtpengine$rtpengine_manage,
    rtpengine_manage0: typeof KamailioKemi$rtpengine$rtpengine_manage0,
    rtpengine_offer: typeof KamailioKemi$rtpengine$rtpengine_offer,
    rtpengine_offer0: typeof KamailioKemi$rtpengine$rtpengine_offer0,
    set_rtpengine_set: typeof KamailioKemi$rtpengine$set_rtpengine_set,
    set_rtpengine_set2: typeof KamailioKemi$rtpengine$set_rtpengine_set2,
    start_recording: typeof KamailioKemi$rtpengine$start_recording,
    stop_recording: typeof KamailioKemi$rtpengine$stop_recording
  };
  declare function KamailioKemi$rtpengine$rtpengine_answer(
    flags: string
  ): number;

  declare function KamailioKemi$rtpengine$rtpengine_answer0(): number;

  declare function KamailioKemi$rtpengine$rtpengine_delete(
    flags: string
  ): number;

  declare function KamailioKemi$rtpengine$rtpengine_delete0(): number;

  declare function KamailioKemi$rtpengine$rtpengine_manage(
    flags: string
  ): number;

  declare function KamailioKemi$rtpengine$rtpengine_manage0(): number;

  declare function KamailioKemi$rtpengine$rtpengine_offer(
    flags: string
  ): number;

  declare function KamailioKemi$rtpengine$rtpengine_offer0(): number;

  declare function KamailioKemi$rtpengine$set_rtpengine_set(r1: number): number;

  declare function KamailioKemi$rtpengine$set_rtpengine_set2(
    r1: number,
    r2: number
  ): number;

  declare function KamailioKemi$rtpengine$start_recording(): number;

  declare function KamailioKemi$rtpengine$stop_recording(): number;

  declare var npm$namespace$KamailioKemi$rtpproxy: {
    rtpproxy_answer: typeof KamailioKemi$rtpproxy$rtpproxy_answer,
    rtpproxy_answer0: typeof KamailioKemi$rtpproxy$rtpproxy_answer0,
    rtpproxy_answer_ip: typeof KamailioKemi$rtpproxy$rtpproxy_answer_ip,
    rtpproxy_destroy: typeof KamailioKemi$rtpproxy$rtpproxy_destroy,
    rtpproxy_destroy0: typeof KamailioKemi$rtpproxy$rtpproxy_destroy0,
    rtpproxy_manage: typeof KamailioKemi$rtpproxy$rtpproxy_manage,
    rtpproxy_manage0: typeof KamailioKemi$rtpproxy$rtpproxy_manage0,
    rtpproxy_manage_ip: typeof KamailioKemi$rtpproxy$rtpproxy_manage_ip,
    rtpproxy_offer: typeof KamailioKemi$rtpproxy$rtpproxy_offer,
    rtpproxy_offer0: typeof KamailioKemi$rtpproxy$rtpproxy_offer0,
    rtpproxy_offer_ip: typeof KamailioKemi$rtpproxy$rtpproxy_offer_ip,
    rtpproxy_stop_stream2uac: typeof KamailioKemi$rtpproxy$rtpproxy_stop_stream2uac,
    rtpproxy_stop_stream2uas: typeof KamailioKemi$rtpproxy$rtpproxy_stop_stream2uas,
    rtpproxy_stream2uac: typeof KamailioKemi$rtpproxy$rtpproxy_stream2uac,
    rtpproxy_stream2uas: typeof KamailioKemi$rtpproxy$rtpproxy_stream2uas,
    set_rtpproxy_set: typeof KamailioKemi$rtpproxy$set_rtpproxy_set,
    start_recording: typeof KamailioKemi$rtpproxy$start_recording
  };
  declare function KamailioKemi$rtpproxy$rtpproxy_answer(flags: string): number;

  declare function KamailioKemi$rtpproxy$rtpproxy_answer0(): number;

  declare function KamailioKemi$rtpproxy$rtpproxy_answer_ip(
    flags: string,
    mip: string
  ): number;

  declare function KamailioKemi$rtpproxy$rtpproxy_destroy(
    flags: string
  ): number;

  declare function KamailioKemi$rtpproxy$rtpproxy_destroy0(): number;

  declare function KamailioKemi$rtpproxy$rtpproxy_manage(flags: string): number;

  declare function KamailioKemi$rtpproxy$rtpproxy_manage0(): number;

  declare function KamailioKemi$rtpproxy$rtpproxy_manage_ip(
    flags: string,
    mip: string
  ): number;

  declare function KamailioKemi$rtpproxy$rtpproxy_offer(flags: string): number;

  declare function KamailioKemi$rtpproxy$rtpproxy_offer0(): number;

  declare function KamailioKemi$rtpproxy$rtpproxy_offer_ip(
    flags: string,
    mip: string
  ): number;

  declare function KamailioKemi$rtpproxy$rtpproxy_stop_stream2uac(): number;

  declare function KamailioKemi$rtpproxy$rtpproxy_stop_stream2uas(): number;

  declare function KamailioKemi$rtpproxy$rtpproxy_stream2uac(
    pname: string,
    count: number
  ): number;

  declare function KamailioKemi$rtpproxy$rtpproxy_stream2uas(
    pname: string,
    count: number
  ): number;

  declare function KamailioKemi$rtpproxy$set_rtpproxy_set(rset: number): number;

  declare function KamailioKemi$rtpproxy$start_recording(): number;

  declare var npm$namespace$KamailioKemi$sanity: {
    sanity_check: typeof KamailioKemi$sanity$sanity_check,
    sanity_check_defaults: typeof KamailioKemi$sanity$sanity_check_defaults,
    sanity_reply: typeof KamailioKemi$sanity$sanity_reply
  };
  declare function KamailioKemi$sanity$sanity_check(
    mflags: number,
    uflags: number
  ): number;

  declare function KamailioKemi$sanity$sanity_check_defaults(): number;

  declare function KamailioKemi$sanity$sanity_reply(): number;

  declare var npm$namespace$KamailioKemi$sca: {
    call_info_update: typeof KamailioKemi$sca$call_info_update,
    call_info_update_default: typeof KamailioKemi$sca$call_info_update_default,
    call_info_update_mask: typeof KamailioKemi$sca$call_info_update_mask,
    call_info_update_turi: typeof KamailioKemi$sca$call_info_update_turi,
    handle_subscribe: typeof KamailioKemi$sca$handle_subscribe
  };
  declare function KamailioKemi$sca$call_info_update(
    update_mask: number,
    uri_to: string,
    uri_from: string
  ): number;

  declare function KamailioKemi$sca$call_info_update_default(): number;

  declare function KamailioKemi$sca$call_info_update_mask(
    umask: number
  ): number;

  declare function KamailioKemi$sca$call_info_update_turi(
    umask: number,
    sto: string
  ): number;

  declare function KamailioKemi$sca$handle_subscribe(): number;

  declare var npm$namespace$KamailioKemi$sdpops: {
    keep_codecs_by_id: typeof KamailioKemi$sdpops$keep_codecs_by_id,
    keep_codecs_by_name: typeof KamailioKemi$sdpops$keep_codecs_by_name,
    remove_codecs_by_id: typeof KamailioKemi$sdpops$remove_codecs_by_id,
    remove_codecs_by_name: typeof KamailioKemi$sdpops$remove_codecs_by_name,
    remove_line_by_prefix: typeof KamailioKemi$sdpops$remove_line_by_prefix,
    remove_media: typeof KamailioKemi$sdpops$remove_media,
    sdp_content: typeof KamailioKemi$sdpops$sdp_content,
    sdp_content_flags: typeof KamailioKemi$sdpops$sdp_content_flags,
    sdp_get: typeof KamailioKemi$sdpops$sdp_get,
    sdp_get_line_startswith: typeof KamailioKemi$sdpops$sdp_get_line_startswith,
    sdp_print: typeof KamailioKemi$sdpops$sdp_print,
    sdp_transport: typeof KamailioKemi$sdpops$sdp_transport,
    sdp_with_active_media: typeof KamailioKemi$sdpops$sdp_with_active_media,
    sdp_with_ice: typeof KamailioKemi$sdpops$sdp_with_ice,
    sdp_with_media: typeof KamailioKemi$sdpops$sdp_with_media
  };
  declare function KamailioKemi$sdpops$keep_codecs_by_id(
    codecs: string,
    media: string
  ): number;

  declare function KamailioKemi$sdpops$keep_codecs_by_name(
    codecs: string,
    media: string
  ): number;

  declare function KamailioKemi$sdpops$remove_codecs_by_id(
    codecs: string,
    media: string
  ): number;

  declare function KamailioKemi$sdpops$remove_codecs_by_name(
    codecs: string,
    media: string
  ): number;

  declare function KamailioKemi$sdpops$remove_line_by_prefix(
    prefix: string,
    media: string
  ): number;

  declare function KamailioKemi$sdpops$remove_media(media: string): number;

  declare function KamailioKemi$sdpops$sdp_content(): number;

  declare function KamailioKemi$sdpops$sdp_content_flags(flags: number): number;

  declare function KamailioKemi$sdpops$sdp_get(avp: string): number;

  declare function KamailioKemi$sdpops$sdp_get_line_startswith(
    aname: string,
    sline: string
  ): number;

  declare function KamailioKemi$sdpops$sdp_print(llevel: number): number;

  declare function KamailioKemi$sdpops$sdp_transport(avp: string): number;

  declare function KamailioKemi$sdpops$sdp_with_active_media(
    media: string
  ): number;

  declare function KamailioKemi$sdpops$sdp_with_ice(): number;

  declare function KamailioKemi$sdpops$sdp_with_media(media: string): number;

  declare var npm$namespace$KamailioKemi$sipcapture: {
    float2int: typeof KamailioKemi$sipcapture$float2int,
    report_capture: typeof KamailioKemi$sipcapture$report_capture,
    report_capture_cid: typeof KamailioKemi$sipcapture$report_capture_cid,
    report_capture_data: typeof KamailioKemi$sipcapture$report_capture_data,
    sip_capture: typeof KamailioKemi$sipcapture$sip_capture,
    sip_capture_forward: typeof KamailioKemi$sipcapture$sip_capture_forward,
    sip_capture_mode: typeof KamailioKemi$sipcapture$sip_capture_mode,
    sip_capture_table: typeof KamailioKemi$sipcapture$sip_capture_table
  };
  declare function KamailioKemi$sipcapture$float2int(
    _val: string,
    _coof: string
  ): number;

  declare function KamailioKemi$sipcapture$report_capture(
    _table: string
  ): number;

  declare function KamailioKemi$sipcapture$report_capture_cid(
    _table: string,
    _cid: string
  ): number;

  declare function KamailioKemi$sipcapture$report_capture_data(
    _table: string,
    _cid: string,
    _data: string
  ): number;

  declare function KamailioKemi$sipcapture$sip_capture(): number;

  declare function KamailioKemi$sipcapture$sip_capture_forward(
    puri: string
  ): number;

  declare function KamailioKemi$sipcapture$sip_capture_mode(
    _table: string,
    _cmdata: string
  ): number;

  declare function KamailioKemi$sipcapture$sip_capture_table(
    _table: string
  ): number;

  declare var npm$namespace$KamailioKemi$sipdump: {
    send: typeof KamailioKemi$sipdump$send
  };
  declare function KamailioKemi$sipdump$send(stag: string): number;

  declare var npm$namespace$KamailioKemi$sipjson: {
    sj_serialize: typeof KamailioKemi$sipjson$sj_serialize
  };
  declare function KamailioKemi$sipjson$sj_serialize(
    smode: string,
    pvn: string
  ): number;

  declare var npm$namespace$KamailioKemi$siptrace: {
    hlog: typeof KamailioKemi$siptrace$hlog,
    hlog_cid: typeof KamailioKemi$siptrace$hlog_cid,
    sip_trace: typeof KamailioKemi$siptrace$sip_trace,
    sip_trace_dst: typeof KamailioKemi$siptrace$sip_trace_dst,
    sip_trace_dst_cid: typeof KamailioKemi$siptrace$sip_trace_dst_cid
  };
  declare function KamailioKemi$siptrace$hlog(message: string): number;

  declare function KamailioKemi$siptrace$hlog_cid(
    correlationid: string,
    message: string
  ): number;

  declare function KamailioKemi$siptrace$sip_trace(): number;

  declare function KamailioKemi$siptrace$sip_trace_dst(duri: string): number;

  declare function KamailioKemi$siptrace$sip_trace_dst_cid(
    duri: string,
    cid: string
  ): number;

  declare var npm$namespace$KamailioKemi$siputils: {
    has_totag: typeof KamailioKemi$siputils$has_totag,
    is_alphanum: typeof KamailioKemi$siputils$is_alphanum,
    is_alphanumex: typeof KamailioKemi$siputils$is_alphanumex,
    is_first_hop: typeof KamailioKemi$siputils$is_first_hop,
    is_numeric: typeof KamailioKemi$siputils$is_numeric,
    is_reply: typeof KamailioKemi$siputils$is_reply,
    is_request: typeof KamailioKemi$siputils$is_request,
    is_tel_number: typeof KamailioKemi$siputils$is_tel_number,
    is_uri: typeof KamailioKemi$siputils$is_uri,
    is_user: typeof KamailioKemi$siputils$is_user,
    uri_param: typeof KamailioKemi$siputils$uri_param,
    uri_param_value: typeof KamailioKemi$siputils$uri_param_value
  };
  declare function KamailioKemi$siputils$has_totag(): number;

  declare function KamailioKemi$siputils$is_alphanum(tval: string): number;

  declare function KamailioKemi$siputils$is_alphanumex(
    tval: string,
    eset: string
  ): number;

  declare function KamailioKemi$siputils$is_first_hop(): number;

  declare function KamailioKemi$siputils$is_numeric(tval: string): number;

  declare function KamailioKemi$siputils$is_reply(): number;

  declare function KamailioKemi$siputils$is_request(): number;

  declare function KamailioKemi$siputils$is_tel_number(tval: string): number;

  declare function KamailioKemi$siputils$is_uri(suri: string): number;

  declare function KamailioKemi$siputils$is_user(suser: string): number;

  declare function KamailioKemi$siputils$uri_param(sparam: string): number;

  declare function KamailioKemi$siputils$uri_param_value(
    sparam: string,
    svalue: string
  ): number;

  declare var npm$namespace$KamailioKemi$sl: {
    send_reply: typeof KamailioKemi$sl$send_reply,
    sl_forward_reply: typeof KamailioKemi$sl$sl_forward_reply,
    sl_reply_error: typeof KamailioKemi$sl$sl_reply_error,
    sl_send_reply: typeof KamailioKemi$sl$sl_send_reply
  };
  declare function KamailioKemi$sl$send_reply(
    code: number,
    reason: string
  ): number;

  declare function KamailioKemi$sl$sl_forward_reply(
    code: string,
    reason: string
  ): number;

  declare function KamailioKemi$sl$sl_reply_error(): number;

  declare function KamailioKemi$sl$sl_send_reply(
    code: number,
    reason: string
  ): number;

  declare var npm$namespace$KamailioKemi$speeddial: {
    lookup: typeof KamailioKemi$speeddial$lookup,
    lookup_owner: typeof KamailioKemi$speeddial$lookup_owner
  };
  declare function KamailioKemi$speeddial$lookup(stable: string): number;

  declare function KamailioKemi$speeddial$lookup_owner(
    stable: string,
    sowner: string
  ): number;

  declare var npm$namespace$KamailioKemi$sqlops: {
    sql_is_null: typeof KamailioKemi$sqlops$sql_is_null,
    sql_num_columns: typeof KamailioKemi$sqlops$sql_num_columns,
    sql_num_rows: typeof KamailioKemi$sqlops$sql_num_rows,
    sql_query: typeof KamailioKemi$sqlops$sql_query,
    sql_query_async: typeof KamailioKemi$sqlops$sql_query_async,
    sql_result_free: typeof KamailioKemi$sqlops$sql_result_free,
    sql_xquery: typeof KamailioKemi$sqlops$sql_xquery
  };
  declare function KamailioKemi$sqlops$sql_is_null(
    sres: string,
    i: number,
    j: number
  ): number;

  declare function KamailioKemi$sqlops$sql_num_columns(sres: string): number;

  declare function KamailioKemi$sqlops$sql_num_rows(sres: string): number;

  declare function KamailioKemi$sqlops$sql_query(
    scon: string,
    squery: string,
    sres: string
  ): number;

  declare function KamailioKemi$sqlops$sql_query_async(
    scon: string,
    squery: string
  ): number;

  declare function KamailioKemi$sqlops$sql_result_free(sres: string): number;

  declare function KamailioKemi$sqlops$sql_xquery(
    scon: string,
    squery: string,
    xavp: string
  ): number;

  declare var npm$namespace$KamailioKemi$ss7ops: {
    isup_to_json: typeof KamailioKemi$ss7ops$isup_to_json
  };
  declare function KamailioKemi$ss7ops$isup_to_json(proto: number): number;

  declare var npm$namespace$KamailioKemi$sst: {
    sst_check_min: typeof KamailioKemi$sst$sst_check_min
  };
  declare function KamailioKemi$sst$sst_check_min(flag: number): number;

  declare var npm$namespace$KamailioKemi$statistics: {
    reset_stat: typeof KamailioKemi$statistics$reset_stat,
    update_stat: typeof KamailioKemi$statistics$update_stat
  };
  declare function KamailioKemi$statistics$reset_stat(sname: string): number;

  declare function KamailioKemi$statistics$update_stat(
    sname: string,
    sval: number
  ): number;

  declare var npm$namespace$KamailioKemi$statsc: {
    statsc_reset: typeof KamailioKemi$statsc$statsc_reset
  };
  declare function KamailioKemi$statsc$statsc_reset(): number;

  declare var npm$namespace$KamailioKemi$statsd: {
    statsd_decr: typeof KamailioKemi$statsd$statsd_decr,
    statsd_gauge: typeof KamailioKemi$statsd$statsd_gauge,
    statsd_incr: typeof KamailioKemi$statsd$statsd_incr,
    statsd_set: typeof KamailioKemi$statsd$statsd_set,
    statsd_start: typeof KamailioKemi$statsd$statsd_start,
    statsd_stop: typeof KamailioKemi$statsd$statsd_stop
  };
  declare function KamailioKemi$statsd$statsd_decr(key: string): number;

  declare function KamailioKemi$statsd$statsd_gauge(
    key: string,
    val: string
  ): number;

  declare function KamailioKemi$statsd$statsd_incr(key: string): number;

  declare function KamailioKemi$statsd$statsd_set(
    key: string,
    val: string
  ): number;

  declare function KamailioKemi$statsd$statsd_start(key: string): number;

  declare function KamailioKemi$statsd$statsd_stop(key: string): number;

  declare var npm$namespace$KamailioKemi$tcpops: {
    tcp_conid_alive: typeof KamailioKemi$tcpops$tcp_conid_alive,
    tcp_conid_state: typeof KamailioKemi$tcpops$tcp_conid_state,
    tcp_enable_closed_event: typeof KamailioKemi$tcpops$tcp_enable_closed_event,
    tcp_enable_closed_event_cid: typeof KamailioKemi$tcpops$tcp_enable_closed_event_cid,
    tcp_keepalive_disable: typeof KamailioKemi$tcpops$tcp_keepalive_disable,
    tcp_keepalive_disable_cid: typeof KamailioKemi$tcpops$tcp_keepalive_disable_cid,
    tcp_keepalive_enable: typeof KamailioKemi$tcpops$tcp_keepalive_enable,
    tcp_keepalive_enable_cid: typeof KamailioKemi$tcpops$tcp_keepalive_enable_cid,
    tcp_set_connection_lifetime: typeof KamailioKemi$tcpops$tcp_set_connection_lifetime,
    tcp_set_connection_lifetime_cid: typeof KamailioKemi$tcpops$tcp_set_connection_lifetime_cid
  };
  declare function KamailioKemi$tcpops$tcp_conid_alive(i_conid: number): number;

  declare function KamailioKemi$tcpops$tcp_conid_state(i_conid: number): number;

  declare function KamailioKemi$tcpops$tcp_enable_closed_event(): number;

  declare function KamailioKemi$tcpops$tcp_enable_closed_event_cid(
    i_conid: number
  ): number;

  declare function KamailioKemi$tcpops$tcp_keepalive_disable(): number;

  declare function KamailioKemi$tcpops$tcp_keepalive_disable_cid(
    i_con: number
  ): number;

  declare function KamailioKemi$tcpops$tcp_keepalive_enable(
    i_idle: number,
    i_cnt: number,
    i_intvl: number
  ): number;

  declare function KamailioKemi$tcpops$tcp_keepalive_enable_cid(
    i_con: number,
    i_idle: number,
    i_cnt: number,
    i_intvl: number
  ): number;

  declare function KamailioKemi$tcpops$tcp_set_connection_lifetime(
    i_time: number
  ): number;

  declare function KamailioKemi$tcpops$tcp_set_connection_lifetime_cid(
    i_conid: number,
    i_time: number
  ): number;

  declare var npm$namespace$KamailioKemi$textops: {
    append_body_part: typeof KamailioKemi$textops$append_body_part,
    append_body_part_cd: typeof KamailioKemi$textops$append_body_part_cd,
    append_body_part_hex: typeof KamailioKemi$textops$append_body_part_hex,
    append_body_part_hex_cd: typeof KamailioKemi$textops$append_body_part_hex_cd,
    cmp_istr: typeof KamailioKemi$textops$cmp_istr,
    cmp_str: typeof KamailioKemi$textops$cmp_str,
    filter_body: typeof KamailioKemi$textops$filter_body,
    get_body_part: typeof KamailioKemi$textops$get_body_part,
    get_body_part_raw: typeof KamailioKemi$textops$get_body_part_raw,
    has_body: typeof KamailioKemi$textops$has_body,
    has_body_type: typeof KamailioKemi$textops$has_body_type,
    in_list: typeof KamailioKemi$textops$in_list,
    in_list_prefix: typeof KamailioKemi$textops$in_list_prefix,
    is_audio_on_hold: typeof KamailioKemi$textops$is_audio_on_hold,
    is_present_hf: typeof KamailioKemi$textops$is_present_hf,
    is_present_hf_re: typeof KamailioKemi$textops$is_present_hf_re,
    is_privacy: typeof KamailioKemi$textops$is_privacy,
    remove_body_part: typeof KamailioKemi$textops$remove_body_part,
    remove_hf_exp: typeof KamailioKemi$textops$remove_hf_exp,
    remove_hf_re: typeof KamailioKemi$textops$remove_hf_re,
    replace: typeof KamailioKemi$textops$replace,
    replace_all: typeof KamailioKemi$textops$replace_all,
    replace_body: typeof KamailioKemi$textops$replace_body,
    replace_body_all: typeof KamailioKemi$textops$replace_body_all,
    replace_body_atonce: typeof KamailioKemi$textops$replace_body_atonce,
    replace_body_str: typeof KamailioKemi$textops$replace_body_str,
    replace_hdrs: typeof KamailioKemi$textops$replace_hdrs,
    replace_hdrs_str: typeof KamailioKemi$textops$replace_hdrs_str,
    replace_str: typeof KamailioKemi$textops$replace_str,
    search: typeof KamailioKemi$textops$search,
    search_append: typeof KamailioKemi$textops$search_append,
    search_append_body: typeof KamailioKemi$textops$search_append_body,
    search_body: typeof KamailioKemi$textops$search_body,
    search_hf: typeof KamailioKemi$textops$search_hf,
    set_body: typeof KamailioKemi$textops$set_body,
    set_body_multipart: typeof KamailioKemi$textops$set_body_multipart,
    set_body_multipart_boundary: typeof KamailioKemi$textops$set_body_multipart_boundary,
    set_body_multipart_content: typeof KamailioKemi$textops$set_body_multipart_content,
    set_body_multipart_mode: typeof KamailioKemi$textops$set_body_multipart_mode,
    set_reply_body: typeof KamailioKemi$textops$set_reply_body,
    starts_with: typeof KamailioKemi$textops$starts_with,
    subst: typeof KamailioKemi$textops$subst,
    subst_body: typeof KamailioKemi$textops$subst_body,
    subst_hf: typeof KamailioKemi$textops$subst_hf,
    subst_uri: typeof KamailioKemi$textops$subst_uri,
    subst_user: typeof KamailioKemi$textops$subst_user
  };
  declare function KamailioKemi$textops$append_body_part(
    txt: string,
    ct: string
  ): number;

  declare function KamailioKemi$textops$append_body_part_cd(
    txt: string,
    ct: string,
    cd: string
  ): number;

  declare function KamailioKemi$textops$append_body_part_hex(
    txt: string,
    ct: string
  ): number;

  declare function KamailioKemi$textops$append_body_part_hex_cd(
    htxt: string,
    ct: string,
    cd: string
  ): number;

  declare function KamailioKemi$textops$cmp_istr(
    s1: string,
    s2: string
  ): number;

  declare function KamailioKemi$textops$cmp_str(s1: string, s2: string): number;

  declare function KamailioKemi$textops$filter_body(
    content_type: string
  ): number;

  declare function KamailioKemi$textops$get_body_part(
    ctype: string,
    pvname: string
  ): number;

  declare function KamailioKemi$textops$get_body_part_raw(
    ctype: string,
    pvname: string
  ): number;

  declare function KamailioKemi$textops$has_body(): number;

  declare function KamailioKemi$textops$has_body_type(ctype: string): number;

  declare function KamailioKemi$textops$in_list(
    subject: string,
    list: string,
    vsep: string
  ): number;

  declare function KamailioKemi$textops$in_list_prefix(
    subject: string,
    list: string,
    vsep: string
  ): number;

  declare function KamailioKemi$textops$is_audio_on_hold(): number;

  declare function KamailioKemi$textops$is_present_hf(hname: string): number;

  declare function KamailioKemi$textops$is_present_hf_re(
    ematch: string
  ): number;

  declare function KamailioKemi$textops$is_privacy(privacy: string): number;

  declare function KamailioKemi$textops$remove_body_part(
    content_type: string
  ): number;

  declare function KamailioKemi$textops$remove_hf_exp(
    ematch: string,
    eskip: string
  ): number;

  declare function KamailioKemi$textops$remove_hf_re(ematch: string): number;

  declare function KamailioKemi$textops$replace(
    sre: string,
    sval: string
  ): number;

  declare function KamailioKemi$textops$replace_all(
    sre: string,
    sval: string
  ): number;

  declare function KamailioKemi$textops$replace_body(
    sre: string,
    sval: string
  ): number;

  declare function KamailioKemi$textops$replace_body_all(
    sre: string,
    sval: string
  ): number;

  declare function KamailioKemi$textops$replace_body_atonce(
    sre: string,
    sval: string
  ): number;

  declare function KamailioKemi$textops$replace_body_str(
    mkey: string,
    rval: string,
    rmode: string
  ): number;

  declare function KamailioKemi$textops$replace_hdrs(
    sre: string,
    sval: string
  ): number;

  declare function KamailioKemi$textops$replace_hdrs_str(
    mkey: string,
    rval: string,
    rmode: string
  ): number;

  declare function KamailioKemi$textops$replace_str(
    mkey: string,
    rval: string,
    rmode: string
  ): number;

  declare function KamailioKemi$textops$search(sre: string): number;

  declare function KamailioKemi$textops$search_append(
    ematch: string,
    val: string
  ): number;

  declare function KamailioKemi$textops$search_append_body(
    ematch: string,
    val: string
  ): number;

  declare function KamailioKemi$textops$search_body(sre: string): number;

  declare function KamailioKemi$textops$search_hf(
    hname: string,
    sre: string,
    flags: string
  ): number;

  declare function KamailioKemi$textops$set_body(
    nb: string,
    nc: string
  ): number;

  declare function KamailioKemi$textops$set_body_multipart(
    nbody: string,
    ctype: string,
    boundary: string
  ): number;

  declare function KamailioKemi$textops$set_body_multipart_boundary(
    boundary: string
  ): number;

  declare function KamailioKemi$textops$set_body_multipart_content(
    nbody: string,
    ctype: string
  ): number;

  declare function KamailioKemi$textops$set_body_multipart_mode(): number;

  declare function KamailioKemi$textops$set_reply_body(
    nb: string,
    nc: string
  ): number;

  declare function KamailioKemi$textops$starts_with(
    s1: string,
    s2: string
  ): number;

  declare function KamailioKemi$textops$subst(subst: string): number;

  declare function KamailioKemi$textops$subst_body(subst: string): number;

  declare function KamailioKemi$textops$subst_hf(
    hname: string,
    subst: string,
    flags: string
  ): number;

  declare function KamailioKemi$textops$subst_uri(subst: string): number;

  declare function KamailioKemi$textops$subst_user(subst: string): number;

  declare var npm$namespace$KamailioKemi$textopsx: {
    append_hf_value: typeof KamailioKemi$textopsx$append_hf_value,
    assign_hf_value: typeof KamailioKemi$textopsx$assign_hf_value,
    assign_hf_value2: typeof KamailioKemi$textopsx$assign_hf_value2,
    change_reply_status: typeof KamailioKemi$textopsx$change_reply_status,
    exclude_hf_value: typeof KamailioKemi$textopsx$exclude_hf_value,
    fnmatch: typeof KamailioKemi$textopsx$fnmatch,
    fnmatch_ex: typeof KamailioKemi$textopsx$fnmatch_ex,
    hf_value_exists: typeof KamailioKemi$textopsx$hf_value_exists,
    include_hf_value: typeof KamailioKemi$textopsx$include_hf_value,
    insert_hf_value: typeof KamailioKemi$textopsx$insert_hf_value,
    keep_hf: typeof KamailioKemi$textopsx$keep_hf,
    keep_hf_re: typeof KamailioKemi$textopsx$keep_hf_re,
    msg_apply_changes: typeof KamailioKemi$textopsx$msg_apply_changes,
    msg_set_buffer: typeof KamailioKemi$textopsx$msg_set_buffer,
    remove_body: typeof KamailioKemi$textopsx$remove_body,
    remove_hf_value: typeof KamailioKemi$textopsx$remove_hf_value,
    remove_hf_value2: typeof KamailioKemi$textopsx$remove_hf_value2
  };
  declare function KamailioKemi$textopsx$append_hf_value(
    hexp: string,
    val: string
  ): number;

  declare function KamailioKemi$textopsx$assign_hf_value(
    hexp: string,
    val: string
  ): number;

  declare function KamailioKemi$textopsx$assign_hf_value2(
    hexp: string,
    val: string
  ): number;

  declare function KamailioKemi$textopsx$change_reply_status(
    code: number,
    reason: string
  ): number;

  declare function KamailioKemi$textopsx$exclude_hf_value(
    hexp: string,
    val: string
  ): number;

  declare function KamailioKemi$textopsx$fnmatch(
    val: string,
    match: string
  ): number;

  declare function KamailioKemi$textopsx$fnmatch_ex(
    val: string,
    match: string,
    flags: string
  ): number;

  declare function KamailioKemi$textopsx$hf_value_exists(
    hexp: string,
    val: string
  ): number;

  declare function KamailioKemi$textopsx$include_hf_value(
    hexp: string,
    val: string
  ): number;

  declare function KamailioKemi$textopsx$insert_hf_value(
    hexp: string,
    val: string
  ): number;

  declare function KamailioKemi$textopsx$keep_hf(): number;

  declare function KamailioKemi$textopsx$keep_hf_re(sre: string): number;

  declare function KamailioKemi$textopsx$msg_apply_changes(): number;

  declare function KamailioKemi$textopsx$msg_set_buffer(obuf: string): number;

  declare function KamailioKemi$textopsx$remove_body(): number;

  declare function KamailioKemi$textopsx$remove_hf_value(hexp: string): number;

  declare function KamailioKemi$textopsx$remove_hf_value2(
    hexp: string,
    val: string
  ): number;

  declare var npm$namespace$KamailioKemi$tls: {
    is_peer_verified: typeof KamailioKemi$tls$is_peer_verified
  };
  declare function KamailioKemi$tls$is_peer_verified(): number;

  declare var npm$namespace$KamailioKemi$tm: {
    t_any_replied: typeof KamailioKemi$tm$t_any_replied,
    t_any_timeout: typeof KamailioKemi$tm$t_any_timeout,
    t_branch_replied: typeof KamailioKemi$tm$t_branch_replied,
    t_branch_timeout: typeof KamailioKemi$tm$t_branch_timeout,
    t_check_status: typeof KamailioKemi$tm$t_check_status,
    t_check_trans: typeof KamailioKemi$tm$t_check_trans,
    t_drop_replies: typeof KamailioKemi$tm$t_drop_replies,
    t_drop_replies_all: typeof KamailioKemi$tm$t_drop_replies_all,
    t_grep_status: typeof KamailioKemi$tm$t_grep_status,
    t_is_canceled: typeof KamailioKemi$tm$t_is_canceled,
    t_is_expired: typeof KamailioKemi$tm$t_is_expired,
    t_is_retr_async_reply: typeof KamailioKemi$tm$t_is_retr_async_reply,
    t_is_set: typeof KamailioKemi$tm$t_is_set,
    t_load_contacts: typeof KamailioKemi$tm$t_load_contacts,
    t_lookup_cancel: typeof KamailioKemi$tm$t_lookup_cancel,
    t_lookup_cancel_flags: typeof KamailioKemi$tm$t_lookup_cancel_flags,
    t_lookup_request: typeof KamailioKemi$tm$t_lookup_request,
    t_newtran: typeof KamailioKemi$tm$t_newtran,
    t_next_contact_flow: typeof KamailioKemi$tm$t_next_contact_flow,
    t_next_contacts: typeof KamailioKemi$tm$t_next_contacts,
    t_on_branch: typeof KamailioKemi$tm$t_on_branch,
    t_on_branch_failure: typeof KamailioKemi$tm$t_on_branch_failure,
    t_on_failure: typeof KamailioKemi$tm$t_on_failure,
    t_on_reply: typeof KamailioKemi$tm$t_on_reply,
    t_relay: typeof KamailioKemi$tm$t_relay,
    t_release: typeof KamailioKemi$tm$t_release,
    t_replicate: typeof KamailioKemi$tm$t_replicate,
    t_reply: typeof KamailioKemi$tm$t_reply,
    t_reset_fr: typeof KamailioKemi$tm$t_reset_fr,
    t_reset_max_lifetime: typeof KamailioKemi$tm$t_reset_max_lifetime,
    t_reset_retr: typeof KamailioKemi$tm$t_reset_retr,
    t_retransmit_reply: typeof KamailioKemi$tm$t_retransmit_reply,
    t_save_lumps: typeof KamailioKemi$tm$t_save_lumps,
    t_send_reply: typeof KamailioKemi$tm$t_send_reply,
    t_set_auto_inv_100: typeof KamailioKemi$tm$t_set_auto_inv_100,
    t_set_disable_6xx: typeof KamailioKemi$tm$t_set_disable_6xx,
    t_set_disable_failover: typeof KamailioKemi$tm$t_set_disable_failover,
    t_set_disable_internal_reply: typeof KamailioKemi$tm$t_set_disable_internal_reply,
    t_set_fr: typeof KamailioKemi$tm$t_set_fr,
    t_set_fr_inv: typeof KamailioKemi$tm$t_set_fr_inv,
    t_set_max_lifetime: typeof KamailioKemi$tm$t_set_max_lifetime,
    t_set_no_e2e_cancel_reason: typeof KamailioKemi$tm$t_set_no_e2e_cancel_reason,
    t_set_retr: typeof KamailioKemi$tm$t_set_retr,
    t_uac_send: typeof KamailioKemi$tm$t_uac_send,
    t_use_uac_headers: typeof KamailioKemi$tm$t_use_uac_headers
  };
  declare function KamailioKemi$tm$t_any_replied(): number;

  declare function KamailioKemi$tm$t_any_timeout(): number;

  declare function KamailioKemi$tm$t_branch_replied(): number;

  declare function KamailioKemi$tm$t_branch_timeout(): number;

  declare function KamailioKemi$tm$t_check_status(sexp: string): number;

  declare function KamailioKemi$tm$t_check_trans(): number;

  declare function KamailioKemi$tm$t_drop_replies(mode: string): number;

  declare function KamailioKemi$tm$t_drop_replies_all(): number;

  declare function KamailioKemi$tm$t_grep_status(code: number): number;

  declare function KamailioKemi$tm$t_is_canceled(): number;

  declare function KamailioKemi$tm$t_is_expired(): number;

  declare function KamailioKemi$tm$t_is_retr_async_reply(): number;

  declare function KamailioKemi$tm$t_is_set(target: string): number;

  declare function KamailioKemi$tm$t_load_contacts(): number;

  declare function KamailioKemi$tm$t_lookup_cancel(): number;

  declare function KamailioKemi$tm$t_lookup_cancel_flags(flags: number): number;

  declare function KamailioKemi$tm$t_lookup_request(): number;

  declare function KamailioKemi$tm$t_newtran(): number;

  declare function KamailioKemi$tm$t_next_contact_flow(): number;

  declare function KamailioKemi$tm$t_next_contacts(): number;

  declare function KamailioKemi$tm$t_on_branch(rname: string): number;

  declare function KamailioKemi$tm$t_on_branch_failure(rname: string): number;

  declare function KamailioKemi$tm$t_on_failure(rname: string): number;

  declare function KamailioKemi$tm$t_on_reply(rname: string): number;

  declare function KamailioKemi$tm$t_relay(): number;

  declare function KamailioKemi$tm$t_release(): number;

  declare function KamailioKemi$tm$t_replicate(suri: string): number;

  declare function KamailioKemi$tm$t_reply(
    code: number,
    reason: string
  ): number;

  declare function KamailioKemi$tm$t_reset_fr(): number;

  declare function KamailioKemi$tm$t_reset_max_lifetime(): number;

  declare function KamailioKemi$tm$t_reset_retr(): number;

  declare function KamailioKemi$tm$t_retransmit_reply(): number;

  declare function KamailioKemi$tm$t_save_lumps(): number;

  declare function KamailioKemi$tm$t_send_reply(
    code: number,
    reason: string
  ): number;

  declare function KamailioKemi$tm$t_set_auto_inv_100(state: number): number;

  declare function KamailioKemi$tm$t_set_disable_6xx(state: number): number;

  declare function KamailioKemi$tm$t_set_disable_failover(
    state: number
  ): number;

  declare function KamailioKemi$tm$t_set_disable_internal_reply(
    state: number
  ): number;

  declare function KamailioKemi$tm$t_set_fr(fr_inv: number, fr: number): number;

  declare function KamailioKemi$tm$t_set_fr_inv(fr_inv: number): number;

  declare function KamailioKemi$tm$t_set_max_lifetime(
    t1: number,
    t2: number
  ): number;

  declare function KamailioKemi$tm$t_set_no_e2e_cancel_reason(
    state: number
  ): number;

  declare function KamailioKemi$tm$t_set_retr(t1: number, t2: number): number;

  declare function KamailioKemi$tm$t_uac_send(
    method: string,
    ruri: string,
    nexthop: string,
    ssock: string,
    hdrs: string,
    body: string
  ): number;

  declare function KamailioKemi$tm$t_use_uac_headers(): number;

  declare var npm$namespace$KamailioKemi$tmrec: {
    is_leap_year: typeof KamailioKemi$tmrec$is_leap_year,
    is_leap_year_now: typeof KamailioKemi$tmrec$is_leap_year_now,
    match: typeof KamailioKemi$tmrec$match,
    match_timestamp: typeof KamailioKemi$tmrec$match_timestamp,
    time_period_match: typeof KamailioKemi$tmrec$time_period_match,
    time_period_match_timestamp: typeof KamailioKemi$tmrec$time_period_match_timestamp
  };
  declare function KamailioKemi$tmrec$is_leap_year(y: number): number;

  declare function KamailioKemi$tmrec$is_leap_year_now(): number;

  declare function KamailioKemi$tmrec$match(rv: string): number;

  declare function KamailioKemi$tmrec$match_timestamp(
    rv: string,
    ti: number
  ): number;

  declare function KamailioKemi$tmrec$time_period_match(period: string): number;

  declare function KamailioKemi$tmrec$time_period_match_timestamp(
    period: string,
    ti: number
  ): number;

  declare var npm$namespace$KamailioKemi$tmx: {
    t_cancel_branches: typeof KamailioKemi$tmx$t_cancel_branches,
    t_cancel_callid: typeof KamailioKemi$tmx$t_cancel_callid,
    t_cancel_callid_reason: typeof KamailioKemi$tmx$t_cancel_callid_reason,
    t_continue: typeof KamailioKemi$tmx$t_continue,
    t_flush_flags: typeof KamailioKemi$tmx$t_flush_flags,
    t_flush_xflags: typeof KamailioKemi$tmx$t_flush_xflags,
    t_is_branch_route: typeof KamailioKemi$tmx$t_is_branch_route,
    t_is_failure_route: typeof KamailioKemi$tmx$t_is_failure_route,
    t_is_reply_route: typeof KamailioKemi$tmx$t_is_reply_route,
    t_is_request_route: typeof KamailioKemi$tmx$t_is_request_route,
    t_precheck_trans: typeof KamailioKemi$tmx$t_precheck_trans,
    t_reply_callid: typeof KamailioKemi$tmx$t_reply_callid,
    t_reuse_branch: typeof KamailioKemi$tmx$t_reuse_branch,
    t_suspend: typeof KamailioKemi$tmx$t_suspend
  };
  declare function KamailioKemi$tmx$t_cancel_branches(mode: string): number;

  declare function KamailioKemi$tmx$t_cancel_callid(
    callid_s: string,
    cseq_s: string,
    fl: number
  ): number;

  declare function KamailioKemi$tmx$t_cancel_callid_reason(
    callid_s: string,
    cseq_s: string,
    fl: number,
    rcode: number
  ): number;

  declare function KamailioKemi$tmx$t_continue(
    tindex: number,
    tlabel: number,
    cbname: string
  ): number;

  declare function KamailioKemi$tmx$t_flush_flags(): number;

  declare function KamailioKemi$tmx$t_flush_xflags(): number;

  declare function KamailioKemi$tmx$t_is_branch_route(): number;

  declare function KamailioKemi$tmx$t_is_failure_route(): number;

  declare function KamailioKemi$tmx$t_is_reply_route(): number;

  declare function KamailioKemi$tmx$t_is_request_route(): number;

  declare function KamailioKemi$tmx$t_precheck_trans(): number;

  declare function KamailioKemi$tmx$t_reply_callid(
    callid_s: string,
    cseq_s: string,
    code: number,
    status_s: string
  ): number;

  declare function KamailioKemi$tmx$t_reuse_branch(): number;

  declare function KamailioKemi$tmx$t_suspend(): number;

  declare var npm$namespace$KamailioKemi$tsilo: {
    ts_append: typeof KamailioKemi$tsilo$ts_append,
    ts_append_to: typeof KamailioKemi$tsilo$ts_append_to,
    ts_append_to_uri: typeof KamailioKemi$tsilo$ts_append_to_uri,
    ts_store: typeof KamailioKemi$tsilo$ts_store,
    ts_store_uri: typeof KamailioKemi$tsilo$ts_store_uri
  };
  declare function KamailioKemi$tsilo$ts_append(
    _table: string,
    _ruri: string
  ): number;

  declare function KamailioKemi$tsilo$ts_append_to(
    tindex: number,
    tlabel: number,
    _table: string
  ): number;

  declare function KamailioKemi$tsilo$ts_append_to_uri(
    tindex: number,
    tlabel: number,
    _table: string,
    _uri: string
  ): number;

  declare function KamailioKemi$tsilo$ts_store(): number;

  declare function KamailioKemi$tsilo$ts_store_uri(puri: string): number;

  declare var npm$namespace$KamailioKemi$uac: {
    uac_auth: typeof KamailioKemi$uac$uac_auth,
    uac_reg_disable: typeof KamailioKemi$uac$uac_reg_disable,
    uac_reg_enable: typeof KamailioKemi$uac$uac_reg_enable,
    uac_reg_lookup: typeof KamailioKemi$uac$uac_reg_lookup,
    uac_reg_refresh: typeof KamailioKemi$uac$uac_reg_refresh,
    uac_reg_request_to: typeof KamailioKemi$uac$uac_reg_request_to,
    uac_reg_status: typeof KamailioKemi$uac$uac_reg_status,
    uac_replace_from: typeof KamailioKemi$uac$uac_replace_from,
    uac_replace_from_uri: typeof KamailioKemi$uac$uac_replace_from_uri,
    uac_replace_to: typeof KamailioKemi$uac$uac_replace_to,
    uac_replace_to_uri: typeof KamailioKemi$uac$uac_replace_to_uri,
    uac_req_send: typeof KamailioKemi$uac$uac_req_send,
    uac_restore_from: typeof KamailioKemi$uac$uac_restore_from,
    uac_restore_to: typeof KamailioKemi$uac$uac_restore_to
  };
  declare function KamailioKemi$uac$uac_auth(): number;

  declare function KamailioKemi$uac$uac_reg_disable(
    attr: string,
    val: string
  ): number;

  declare function KamailioKemi$uac$uac_reg_enable(
    attr: string,
    val: string
  ): number;

  declare function KamailioKemi$uac$uac_reg_lookup(
    userid: string,
    sdst: string
  ): number;

  declare function KamailioKemi$uac$uac_reg_refresh(l_uuid: string): number;

  declare function KamailioKemi$uac$uac_reg_request_to(
    userid: string,
    imode: number
  ): number;

  declare function KamailioKemi$uac$uac_reg_status(sruuid: string): number;

  declare function KamailioKemi$uac$uac_replace_from(
    pdsp: string,
    puri: string
  ): number;

  declare function KamailioKemi$uac$uac_replace_from_uri(puri: string): number;

  declare function KamailioKemi$uac$uac_replace_to(
    pdsp: string,
    puri: string
  ): number;

  declare function KamailioKemi$uac$uac_replace_to_uri(puri: string): number;

  declare function KamailioKemi$uac$uac_req_send(): number;

  declare function KamailioKemi$uac$uac_restore_from(): number;

  declare function KamailioKemi$uac$uac_restore_to(): number;

  declare var npm$namespace$KamailioKemi$uac_redirect: {
    get_redirects: typeof KamailioKemi$uac_redirect$get_redirects,
    get_redirects_acc: typeof KamailioKemi$uac_redirect$get_redirects_acc,
    get_redirects_all: typeof KamailioKemi$uac_redirect$get_redirects_all
  };
  declare function KamailioKemi$uac_redirect$get_redirects(
    max_c: number,
    max_b: number
  ): number;

  declare function KamailioKemi$uac_redirect$get_redirects_acc(
    max_c: number,
    max_b: number,
    reason: string
  ): number;

  declare function KamailioKemi$uac_redirect$get_redirects_all(): number;

  declare var npm$namespace$KamailioKemi$uri_db: {
    check_from: typeof KamailioKemi$uri_db$check_from,
    check_to: typeof KamailioKemi$uri_db$check_to,
    check_uri: typeof KamailioKemi$uri_db$check_uri,
    check_uri_realm: typeof KamailioKemi$uri_db$check_uri_realm,
    does_uri_exist: typeof KamailioKemi$uri_db$does_uri_exist
  };
  declare function KamailioKemi$uri_db$check_from(): number;

  declare function KamailioKemi$uri_db$check_to(): number;

  declare function KamailioKemi$uri_db$check_uri(suri: string): number;

  declare function KamailioKemi$uri_db$check_uri_realm(
    suri: string,
    susername: string,
    srealm: string
  ): number;

  declare function KamailioKemi$uri_db$does_uri_exist(): number;

  declare var npm$namespace$KamailioKemi$userblacklist: {
    check_user_blacklist: typeof KamailioKemi$userblacklist$check_user_blacklist,
    check_user_blacklist_number: typeof KamailioKemi$userblacklist$check_user_blacklist_number,
    check_user_blacklist_table: typeof KamailioKemi$userblacklist$check_user_blacklist_table,
    check_user_whitelist: typeof KamailioKemi$userblacklist$check_user_whitelist,
    check_user_whitelist_number: typeof KamailioKemi$userblacklist$check_user_whitelist_number,
    check_user_whitelist_table: typeof KamailioKemi$userblacklist$check_user_whitelist_table
  };
  declare function KamailioKemi$userblacklist$check_user_blacklist(
    suser: string,
    sdomain: string
  ): number;

  declare function KamailioKemi$userblacklist$check_user_blacklist_number(
    suser: string,
    sdomain: string,
    snumber: string
  ): number;

  declare function KamailioKemi$userblacklist$check_user_blacklist_table(
    suser: string,
    sdomain: string,
    snumber: string,
    stable: string
  ): number;

  declare function KamailioKemi$userblacklist$check_user_whitelist(
    suser: string,
    sdomain: string
  ): number;

  declare function KamailioKemi$userblacklist$check_user_whitelist_number(
    suser: string,
    sdomain: string,
    snumber: string
  ): number;

  declare function KamailioKemi$userblacklist$check_user_whitelist_table(
    suser: string,
    sdomain: string,
    snumber: string,
    stable: string
  ): number;

  declare var npm$namespace$KamailioKemi$utils: {
    xcap_auth_status: typeof KamailioKemi$utils$xcap_auth_status
  };
  declare function KamailioKemi$utils$xcap_auth_status(
    watcher_uri: string,
    presentity_uri: string
  ): number;

  declare var npm$namespace$KamailioKemi$websocket: {
    close: typeof KamailioKemi$websocket$close,
    close_conid: typeof KamailioKemi$websocket$close_conid,
    close_reason: typeof KamailioKemi$websocket$close_reason,
    handle_handshake: typeof KamailioKemi$websocket$handle_handshake
  };
  declare function KamailioKemi$websocket$close(): number;

  declare function KamailioKemi$websocket$close_conid(
    status: number,
    reason: string,
    con: number
  ): number;

  declare function KamailioKemi$websocket$close_reason(
    status: number,
    reason: string
  ): number;

  declare function KamailioKemi$websocket$handle_handshake(): number;

  declare var npm$namespace$KamailioKemi$xcap_server: {
    xcaps_del: typeof KamailioKemi$xcap_server$xcaps_del,
    xcaps_get: typeof KamailioKemi$xcap_server$xcaps_get,
    xcaps_put: typeof KamailioKemi$xcap_server$xcaps_put
  };
  declare function KamailioKemi$xcap_server$xcaps_del(
    uri: string,
    path: string
  ): number;

  declare function KamailioKemi$xcap_server$xcaps_get(
    uri: string,
    path: string
  ): number;

  declare function KamailioKemi$xcap_server$xcaps_put(
    uri: string,
    path: string,
    pbody: string
  ): number;

  declare var npm$namespace$KamailioKemi$xhttp: {
    xhttp_reply: typeof KamailioKemi$xhttp$xhttp_reply
  };
  declare function KamailioKemi$xhttp$xhttp_reply(
    code: number,
    reason: string,
    ctype: string,
    body: string
  ): number;

  declare var npm$namespace$KamailioKemi$xhttp_pi: {
    dispatch: typeof KamailioKemi$xhttp_pi$dispatch
  };
  declare function KamailioKemi$xhttp_pi$dispatch(): number;

  declare var npm$namespace$KamailioKemi$xhttp_rpc: {
    dispatch: typeof KamailioKemi$xhttp_rpc$dispatch
  };
  declare function KamailioKemi$xhttp_rpc$dispatch(): number;

  declare var npm$namespace$KamailioKemi$xlog: {
    xalert: typeof KamailioKemi$xlog$xalert,
    xcrit: typeof KamailioKemi$xlog$xcrit,
    xdbg: typeof KamailioKemi$xlog$xdbg,
    xerr: typeof KamailioKemi$xlog$xerr,
    xinfo: typeof KamailioKemi$xlog$xinfo,
    xlog: typeof KamailioKemi$xlog$xlog,
    xnotice: typeof KamailioKemi$xlog$xnotice,
    xwarn: typeof KamailioKemi$xlog$xwarn
  };
  declare function KamailioKemi$xlog$xalert(lmsg: string): number;

  declare function KamailioKemi$xlog$xcrit(lmsg: string): number;

  declare function KamailioKemi$xlog$xdbg(lmsg: string): number;

  declare function KamailioKemi$xlog$xerr(lmsg: string): number;

  declare function KamailioKemi$xlog$xinfo(lmsg: string): number;

  declare function KamailioKemi$xlog$xlog(slevel: string, lmsg: string): number;

  declare function KamailioKemi$xlog$xnotice(lmsg: string): number;

  declare function KamailioKemi$xlog$xwarn(lmsg: string): number;

  declare var npm$namespace$KamailioKemi$xmlrpc: {
    dispatch_rpc: typeof KamailioKemi$xmlrpc$dispatch_rpc,
    xmlrpc_reply: typeof KamailioKemi$xmlrpc$xmlrpc_reply
  };
  declare function KamailioKemi$xmlrpc$dispatch_rpc(): number;

  declare function KamailioKemi$xmlrpc$xmlrpc_reply(
    rcode: number,
    reason: string
  ): number;
}
