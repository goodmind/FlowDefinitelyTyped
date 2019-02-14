declare module "vue/types/vue" {
  declare interface Vue {
    $auth: {
      loginRedirect(
        fromUri?: string,
        additionalParams?: OktaVuePlugin$OktaOpenIDOptions
      ): void,
      logout(): Promise<void>,
      isAuthenticated(): Promise<boolean>,
      handleAuthentication(): Promise<void>,
      getFromUri(): string,
      getIdToken(): Promise<string>,
      getAccessToken(): Promise<string>,
      getUser(): Promise<any>,
      authRedirectGuardd(): Promise<NavigationGuard>
    };
  }
}
declare module "@okta/okta-vue" {
  import type { VueConstructor, PluginFunction } from "vue";

  import type { NavigationGuard } from "vue-router";

  declare var npm$namespace$OktaVuePlugin: {
    install: typeof OktaVuePlugin$install,
    handleCallback: typeof OktaVuePlugin$handleCallback
  };
  declare interface OktaVuePlugin$OktaVueOptions {
    issuer: string;
    client_id: string;
    redirect_uri: string;
    scope?: string;
    response_type?: string;
  }

  declare interface OktaVuePlugin$OktaOpenIDOptions {
    sessionToken?: string;
    responseMode?: string;
    responseType?: string | string[];
    scopes?: string[];
    state?: string;
    nonce?: string;
  }

  declare function OktaVuePlugin$install(
    vm: VueConstructor,
    options: OktaVuePlugin$OktaVueOptions
  ): PluginFunction<VueConstructor>;

  declare function OktaVuePlugin$handleCallback(): VueConstructor;

  declare function OktaVuePlugin(): PluginFunction<VueConstructor>;

  declare export default typeof OktaVuePlugin;
}
