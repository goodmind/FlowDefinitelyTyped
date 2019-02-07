declare module "discourse-sso" {
  declare class DiscourseSSO {
    constructor(ssoSecret: string): this;
    validate(payload: string, sig: string): boolean;
    getNonce(payload: string): string;
    buildLoginString(params: DiscourseSSO$DiscourseSSO$UserParams): string;
  }
  declare interface DiscourseSSO$UserParams {
    nonce: string;
    external_id: string;
    email: string;
    admin?: boolean;
    moderator?: boolean;
    username?: string;
    name?: string;
    avatar_url?: string;
    add_groups?: string[];
    remove_groups?: string[];
  }
  declare module.exports: typeof DiscourseSSO;
}
