declare module 'leaflet.pancontrol' {
        import type {
          ControlOptions,LControl
        } from 'leaflet';

	declare module 'leaflet' {
        declare interface MapOptions {
panControl?: boolean
} 
	
      declare var npm$namespace$control: {
        pan: typeof control$pan,
        
      }
declare function control$pan(options?: Control$Control$PanControlOptions): Control$Control$Pan

	declare type Control$PanControlOptions = {
panOffset?: number
} & ControlOptions


declare class Control$Pan mixins LControl {
options: Control$PanControlOptions;
constructor(options?: Control$PanControlOptions): this
}
    }

    }
