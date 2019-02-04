declare module "detect-passive-events" {
    declare interface detectPassiveEvents {
        hasSupport: boolean;
        update(): void;
    }
    declare var detectPassiveEvents: detectPassiveEvents;
    declare export default typeof detectPassiveEvents;
}
