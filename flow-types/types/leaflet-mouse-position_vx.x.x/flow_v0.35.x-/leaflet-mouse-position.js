declare module 'leaflet-mouse-position' {
        import type {
          ControlOptions,LControl
        } from 'leaflet';

	declare module 'leaflet' {
        declare interface MapOptions {
positionControl?: boolean
} 
	
      declare var npm$namespace$control: {
        mousePosition: typeof control$mousePosition,
        
      }
declare function control$mousePosition(
options?: Control$Control$MousePositionControlOptions): Control$Control$MousePosition

	declare type Control$MousePositionControlOptions = {
separator?: string,
emptyString?: string,
lngFirst?: boolean,
numDigits?: number,
lngFormatter?: (lng: number) => string,
latFormatter?: (lat: number) => string,
prefix?: string
} & ControlOptions


declare class Control$MousePosition mixins LControl {
options: Control$MousePositionControlOptions;
constructor(options?: Control$MousePositionControlOptions): this
}
    }

    }
