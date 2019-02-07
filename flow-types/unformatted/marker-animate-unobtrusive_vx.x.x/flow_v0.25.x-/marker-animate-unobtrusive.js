declare module 'marker-animate-unobtrusive' {
        declare type easing$IEasingType = "swing"
| "easeInQuad"
| "easeOutQuad"
| "easeInOutQuad"
| "easeInCubic"
| "easeOutCubic"
| "easeInOutCubic"
| "easeInQuart"
| "easeOutQuart"
| "easeInOutQuart"
| "easeInQuint"
| "easeOutQuint"
| "easeInOutQuint"
| "easeInSine"
| "easeOutSine"
| "easeInOutSine"
| "easeInExpo"
| "easeOutExpo"
| "easeInOutExpo"
| "easeInCirc"
| "easeOutCirc"
| "easeInOutCirc"
| "easeInElastic"
| "easeOutElastic"
| "easeInOutElastic"
| "easeInBack"
| "easeOutBack"
| "easeInOutBack"
| "easeInBounce"
| "easeOutBounce"
| "easeInOutBounce";
	declare type SlidingMarkerOptions = {
easing?: jQuery$easing.easing$IEasingType,
duration?: number,
animateFunctionAdapter?: (
marker: google.maps.Marker,
destPoint: google.maps.LatLng,
easing: "linear" | jQuery$easing.easing$IEasingType,
duration: number) => void
} & undefined.MarkerOptions

	declare class SlidingMarker mixins undefined.Marker {
static initializeGlobally(): void;
constructor(opts?: SlidingMarkerOptions): this;
setDuration(duration: number): void;
getDuration(): number;
setEasing(easing: jQuery$easing.easing$IEasingType): void;
getEasing(): jQuery$easing.easing$IEasingType;
getAnimationPosition(): google.maps.LatLng;
setPositionNotAnimated(position: google.maps.LatLng | google.maps.LatLngLiteral): void
}
	declare class MarkerWithGhost mixins SlidingMarker {
setGhostPosition(ghostPosition: google.maps.LatLng | google.maps.LatLngLiteral): void;
getGhostPosition(): google.maps.LatLng;
getGhostAnimationPosition(): google.maps.LatLng
}
	declare module 'SlidingMarker' {
        declare module.exports: typeof SlidingMarker

    }

	declare module 'MarkerWithGhost' {
        declare module.exports: typeof MarkerWithGhost

    }

    }
