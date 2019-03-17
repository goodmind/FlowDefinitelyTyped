declare module "vue-chartkick" {
  import type { PluginObject } from "vue";

  declare type VueChartkickPlugin = {
    version: string,
    addAdapter: (library: any) => void
  } & PluginObject<{
    adapter: any
  }>;

  declare var VueChartkick: VueChartkickPlugin;
  declare export default typeof VueChartkick;
}
