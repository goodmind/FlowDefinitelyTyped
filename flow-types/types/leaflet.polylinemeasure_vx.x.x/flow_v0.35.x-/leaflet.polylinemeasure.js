declare module 'leaflet.polylinemeasure' {
        import typeof * as L from 'leaflet';

	declare module 'leaflet' {
        declare type Control$PolylineMeasure = {
new (options?: Control$PolylineMeasureOptions): any
} & Control


declare interface Control$PolylineMeasureOptions {
position?: string,
unit?: string,
measureControlTitleOn?: string,
measureControlTitleOff?: string,
measureControlLabel?: string,
measureControlClasses?: any[],
backgroundColor?: string,
cursor?: string,
clearMeasurementsOnStop?: boolean,
showMeasurementsClearControl?: boolean,
clearControlTitle?: string,
clearControlLabel?: string,
clearControlClasses?: any[],
showUnitControl?: boolean,
tempLine?: any,
fixedLine?: any,
startCircle?: any,
intermedCircle?: any,
currentCircle?: any,
endCircle?: any
} 
	
      declare var npm$namespace$control: {
        polylineMeasure: typeof control$polylineMeasure,
        
      }
declare function control$polylineMeasure(
options?: Control$Control$PolylineMeasureOptions): Control$Control$PolylineMeasure

    }

    }
