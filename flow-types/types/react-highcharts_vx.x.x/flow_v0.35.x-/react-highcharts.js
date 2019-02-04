declare module 'react-highcharts' {
        import typeof * as Highcharts from 'highcharts';

	import typeof * as React from 'react';

	
/**
 * Props for ReactHighcharts component.
 */
declare interface ReactHighchartsProps {

/**
 * Highcharts configuration options.
 */
config: Highcharts.Options,

/**
 * @param after -render callback.
 */
callback(chart: Highcharts.ChartObject): void
} 
	
/**
 * React interface for highcharts.
 */
declare class ReactHighcharts mixins React.Component<ReactHighchartsProps> {
static Highcharts: Highcharts.Static
}
	declare export default typeof ReactHighcharts

    }
