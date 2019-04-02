declare module "node-vault" {
  import typeof * as mustache from "mustache";

  import typeof * as request from "request";

  declare interface NodeVault$Option {
    [p: string]: any;
  }

  declare type NodeVault$RequestOption = {
    path: string,
    method: string
  } & NodeVault$Option;

  declare interface NodeVault$functionConf {
    method: string;
    path: string;
    schema?: {
      req?: NodeVault$Option,
      query?: NodeVault$Option,
      res?: NodeVault$Option
    };
  }

  declare interface NodeVault$client {
    handleVaultResponse(res?: {
      statusCode: number,
      request: NodeVault$Option,
      body: any
    }): Promise<any>;
    apiVersion: string;
    endpoint: string;
    token: string;
    request(requestOptions: NodeVault$RequestOption): Promise<any>;
    help(path: string, requestOptions?: NodeVault$Option): Promise<any>;
    write(
      path: string,
      data: any,
      requestOptions?: NodeVault$Option
    ): Promise<any>;
    read(path: string, requestOptions?: NodeVault$Option): Promise<any>;
    list(path: string, requestOptions?: NodeVault$Option): Promise<any>;
    delete(path: string, requestOptions?: NodeVault$Option): Promise<any>;
    generateFunction(name: string, conf: NodeVault$functionConf): void;
    status(options?: NodeVault$Option): Promise<any>;
    initialized(options?: NodeVault$Option): Promise<any>;
    init(options?: NodeVault$Option): Promise<any>;
    unseal(options?: NodeVault$Option): Promise<any>;
    seal(options?: NodeVault$Option): Promise<any>;
    generateRootStatus(options?: NodeVault$Option): Promise<any>;
    generateRootInit(options?: NodeVault$Option): Promise<any>;
    generateRootCancel(options?: NodeVault$Option): Promise<any>;
    generateRootUpdate(options?: NodeVault$Option): Promise<any>;
    mounts(options?: NodeVault$Option): Promise<any>;
    mount(options?: NodeVault$Option): Promise<any>;
    unmount(options?: NodeVault$Option): Promise<any>;
    remount(options?: NodeVault$Option): Promise<any>;
    policies(options?: NodeVault$Option): Promise<any>;
    addPolicy(options?: NodeVault$Option): Promise<any>;
    getPolicy(options?: NodeVault$Option): Promise<any>;
    removePolicy(options?: NodeVault$Option): Promise<any>;
    auths(options?: NodeVault$Option): Promise<any>;
    enableAuth(options?: NodeVault$Option): Promise<any>;
    disableAuth(options?: NodeVault$Option): Promise<any>;
    audits(options?: NodeVault$Option): Promise<any>;
    enableAudit(options?: NodeVault$Option): Promise<any>;
    disableAudit(options?: NodeVault$Option): Promise<any>;
    renew(options?: NodeVault$Option): Promise<any>;
    revoke(options?: NodeVault$Option): Promise<any>;
    revokePrefix(options?: NodeVault$Option): Promise<any>;
    rotate(options?: NodeVault$Option): Promise<any>;
    githubLogin(options?: NodeVault$Option): Promise<any>;
    userpassLogin(options?: NodeVault$Option): Promise<any>;
    tokenAccessors(options?: NodeVault$Option): Promise<any>;
    tokenCreate(options?: NodeVault$Option): Promise<any>;
    tokenCreateOrphan(options?: NodeVault$Option): Promise<any>;
    tokenCreateRole(options?: NodeVault$Option): Promise<any>;
    tokenLookup(options?: NodeVault$Option): Promise<any>;
    tokenLookupAccessor(options?: NodeVault$Option): Promise<any>;
    tokenLookupSelf(options?: NodeVault$Option): Promise<any>;
    tokenRenew(options?: NodeVault$Option): Promise<any>;
    tokenRenewSelf(options?: NodeVault$Option): Promise<any>;
    tokenRevoke(options?: NodeVault$Option): Promise<any>;
    tokenRevokeAccessor(options?: NodeVault$Option): Promise<any>;
    tokenRevokeOrphan(options?: NodeVault$Option): Promise<any>;
    tokenRevokeSelf(options?: NodeVault$Option): Promise<any>;
    tokenRoles(options?: NodeVault$Option): Promise<any>;
    addTokenRole(options?: NodeVault$Option): Promise<any>;
    getTokenRole(options?: NodeVault$Option): Promise<any>;
    removeTokenRole(options?: NodeVault$Option): Promise<any>;
    approleRoles(options?: NodeVault$Option): Promise<any>;
    addApproleRole(options?: NodeVault$Option): Promise<any>;
    getApproleRole(options?: NodeVault$Option): Promise<any>;
    deleteApproleRole(options?: NodeVault$Option): Promise<any>;
    getApproleRoleId(options?: NodeVault$Option): Promise<any>;
    updateApproleRoleId(options?: NodeVault$Option): Promise<any>;
    getApproleRoleSecret(options?: NodeVault$Option): Promise<any>;
    approleSecretAccessors(options?: NodeVault$Option): Promise<any>;
    approleSecretLookup(options?: NodeVault$Option): Promise<any>;
    approleSecretDestroy(options?: NodeVault$Option): Promise<any>;
    approleSecretAccessorLookup(options?: NodeVault$Option): Promise<any>;
    approleSecretAccessorDestroy(options?: NodeVault$Option): Promise<any>;
    approleLogin(options?: NodeVault$Option): Promise<any>;
    health(options?: NodeVault$Option): Promise<any>;
    leader(options?: NodeVault$Option): Promise<any>;
    stepDown(options?: NodeVault$Option): Promise<any>;
  }

  declare interface NodeVault$VaultOptions {
    debug?: (...args: any[]) => any;
    tv4?: (...args: any[]) => any;
    commands?: Array<{
      method: string,
      path: string,
      scheme: any
    }>;
    mustache?: typeof mustache;
    "request-promise"?: any;
    Promise?: PromiseConstructor;
    apiVersion?: string;
    endpoint?: string;
    token?: string;
    requestOptions?: request.CoreOptions;
  }
  declare function NodeVault(
    options?: NodeVault$VaultOptions
  ): NodeVault$client;

  declare export default typeof NodeVault;
}
