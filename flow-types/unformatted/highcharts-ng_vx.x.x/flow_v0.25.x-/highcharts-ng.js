declare module 'highcharts-ng' {
        import type {
          ChartObject,IndividualSeriesOptions,Options
        } from 'highcharts';

	declare module 'global' {
        declare interface HighChartsNGConfig {
options: Options,
series?: IndividualSeriesOptions[],
title?: {
text?: string
},
loading?: boolean | string,
xAxis?: {
currentMin?: number,
currentMax?: number,
title?: {
text?: string
}
},
useHighStocks?: boolean,
size?: {
width?: number,
height?: number
},
func?: (chart: ChartObject) => void,
noData?: string
} 
	declare type HighChartsNGChart = {
getHighcharts(): ChartObject
} & HighChartsNGConfig

    }

    }
