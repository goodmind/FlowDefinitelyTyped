declare module "activedirectory2" {
  import type { Filter } from "ldapjs";

  declare interface ADProperties {
    url: string;
    baseDN: string;
    username: string;
    password: string;
    pageSize?: 1000;
    entryParser?: (
      entry: { [key: string]: any },
      raw: string,
      cb: (entry: { [key: string]: any }) => void
    ) => void;
    referrals?: {
      enabled: false,
      exclude: [
        "ldaps?://ForestDnsZones\\..*/.*",
        "ldaps?://DomainDnsZones\\..*/.*",
        "ldaps?://.*/CN=Configuration,.*"
      ]
    };
    attributes?: {
      user: [
        "dn",
        "distinguishedName",
        "userPrincipalName",
        "sAMAccountName",
        "mail",
        "lockoutTime",
        "whenCreated",
        "pwdLastSet",
        "userAccountControl",
        "employeeID",
        "sn",
        "givenName",
        "initials",
        "cn",
        "displayName",
        "comment",
        "description"
      ],
      group: ["dn", "cn", "description", "distinguishedName", "objectCategory"]
    };
  }
  declare interface LDAPjsReqProps {
    url: string;
    tlsOptions: {
      host?: string,
      key?: string,
      cert?: string,
      ca?: string,
      rejectUnauthorized: boolean
    };
    socketPath?: string;
    log?: any;
    timeout?: number;
    idleTimeout?: number;
    connectionTimeout?: number;
    strictDN?: boolean;
  }
  declare type MembershipType = "all" | "user" | "group";
  declare type ReqProps = {
    baseDN?: string,
    bindDN?: string,
    bindCredentials?: string,
    scope?: "base" | "one" | "sub",
    filter: string | Filter,
    attributes: AttributeSpec,
    sizeLimit: 0,
    timeLimit: 10,
    includeMembership: MembershipType[]
  } & LDAPjsReqProps;

  declare interface AttributeSpec {
    user: UserAttributes[];
    group: GroupAttributes[];
  }
  declare type GroupAttributes =
    | "distinguishedName"
    | "objectCategory"
    | "cn"
    | "description";
  declare type UserAttributes =
    | "distinguishedName"
    | "userPrincipalName"
    | "sAMAccountName"
    | "mail"
    | "lockoutTime"
    | "whenCreated"
    | "pwdLastSet"
    | "userAccountControl"
    | "employeeID"
    | "sn"
    | "givenName"
    | "initials"
    | "cn"
    | "displayName"
    | "comment"
    | "description";
  declare interface FindResult {
    groups: { [key: string]: any }[];
    users: { [key: string]: any }[];
    other: { [key: string]: any }[];
  }
  declare class ActiveDirectory {
    constructor(props: ADProperties): this;
    authenticate(
      username: string,
      password: string,
      callback: (err: string, authenticated: boolean) => void
    ): void;
    isUserMemberOf(
      opts: ReqProps,
      username: string,
      groupName: string,
      callback: (err: { [key: string]: any }, res: boolean) => void
    ): void;
    find(
      opts: string | ReqProps,
      callback: (err: { [key: string]: any }, results: FindResult) => void
    ): void;
    findDeletedObjects(
      opts: string | ReqProps,
      callback: (
        err: { [key: string]: any },
        results: { [key: string]: any }[]
      ) => void
    ): void;
    findUser(
      opts: string | ReqProps,
      username: string,
      callback: (
        err: { [key: string]: any },
        user: { [key: string]: any }
      ) => void
    ): void;
    findUsers(
      opts: string | ReqProps,
      callback: (
        err: { [key: string]: any },
        users: { [key: string]: any }[]
      ) => void
    ): void;
    findGroup(
      opts: string | ReqProps,
      groupName: string,
      callback: (
        err: { [key: string]: any },
        group: { [key: string]: any }
      ) => void
    ): void;
    findGroups(
      opts: string | ReqProps,
      groupName: string,
      callback: (
        err: { [key: string]: any },
        groups: { [key: string]: any }[]
      ) => void
    ): void;
    getRootDSE(
      url: string,
      attributes: string[],
      callback: (
        err: { [key: string]: any },
        result: { [key: string]: any }
      ) => void
    ): void;
  }
  declare module.exports: typeof ActiveDirectory;
}
