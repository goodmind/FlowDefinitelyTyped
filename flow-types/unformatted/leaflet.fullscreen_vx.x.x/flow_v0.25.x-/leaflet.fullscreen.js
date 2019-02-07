declare module 'leaflet.fullscreen' {
        import typeof * as L from 'leaflet';

	declare module 'leaflet' {
        declare class Control$Fullscreen mixins Control {
constructor(options?: Control$FullscreenOptions): this;
options: Control$FullscreenOptions
}

declare interface Control$FullscreenOptions {
content?: string,
position?: ControlPosition,
title?: string,
titleCancel?: string,
forceSeparateButton?: boolean,
forcePseudoFullscreen?: boolean,
pseudoFullscreen?: boolean
} 
	
      declare var npm$namespace$control: {
        fullscreen: typeof control$fullscreen,
        
      }

/**
 * Creates a fullscreen control.
 */
declare function control$fullscreen(options?: Control$Control$FullscreenOptions): Control$Control$Fullscreen

    }

    }
