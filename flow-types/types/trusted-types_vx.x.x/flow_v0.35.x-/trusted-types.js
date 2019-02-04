declare module 'trusted-types' {
        declare class TrustedHTML  {}
	declare class TrustedScript  {}
	declare class TrustedScriptURL  {}
	declare class TrustedURL  {}
	declare class TrustedTypePolicy  {
createHTML(s: string): TrustedHTML;
createScript(s: string): TrustedScript;
createScriptURL(s: string): TrustedScriptURL;
createURL(s: string): TrustedURL
}
	declare interface TrustedTypeInnerPolicy {
createHTML(s: string): string,
createScript(s: string): string,
createScriptURL(s: string): string,
createURL(s: string): string
} 
	declare class TrustedTypePolicyFactory  {
createPolicy(
name: string,
policy: TrustedTypeInnerPolicy,
expose?: boolean): TrustedTypePolicy;
getExposedPolicy(name: string): TrustedTypePolicy;
getPolicyNames(): string[]
}
	declare var TrustedTypes: TrustedTypePolicyFactory;
    }
