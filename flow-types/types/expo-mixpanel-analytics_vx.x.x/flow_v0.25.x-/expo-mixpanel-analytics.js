declare module "expo-mixpanel-analytics" {
  declare class ExpoMixpanelAnalytics {
    constructor(token: string): this;
    identify(userId: string): void;
    track(name: string, props: Props<>): void;
    people_set(props: Props<>): void;
    people_set_once(props: Props<>): void;
    people_unset(keys: string[]): void;
    people_increment(props: Props<number>): void;
    people_append(props: Props<>): void;
    people_union(props: Props<string[]>): void;
    people_delete_user(): void;
    reset(): void;
    token: string;
  }
  declare interface Props<T = any> {
    [key: string]: T;
  }
  declare export default typeof ExpoMixpanelAnalytics;
}
