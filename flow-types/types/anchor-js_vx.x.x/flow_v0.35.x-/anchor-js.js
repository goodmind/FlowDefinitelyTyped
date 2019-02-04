declare module 'anchor-js' {
        declare interface anchorjs$Anchor {
options: anchorjs$AnchorOptions,
add(selector?: string): anchorjs$Anchor,
remove(selector?: string): anchorjs$Anchor,
removeAll(): void
} 

declare type anchorjs$AnchorPlacement = "left" | "right";

declare type anchorjs$AnchorVisibility = "always" | "hover" | "touch";

declare interface anchorjs$AnchorOptions {
arialabel?: string,
class?: string,
icons?: string,
placement?: anchorjs$AnchorPlacement,
truncate?: number,
visible?: anchorjs$AnchorVisibility
} 

declare interface anchorjs$AnchorStatic {
new (options?: anchorjs$AnchorOptions): anchorjs$Anchor
} 
	declare var anchors: anchorjs$anchorjs$Anchor;
	declare var AnchorJS: anchorjs$anchorjs$AnchorStatic;
	declare module.exports: typeof AnchorJS

	declare module 'global' {
        declare var anchors: anchorjs$anchorjs$Anchor;
    }

    }
