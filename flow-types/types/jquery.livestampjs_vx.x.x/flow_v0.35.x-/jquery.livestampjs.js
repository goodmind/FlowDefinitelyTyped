declare module 'jquery.livestampjs' {
        import typeof * as moment from 'moment';

	declare module.exports: typeof LivestampGlobal

	declare interface LivestampGlobal {
update(): void,
pause(): void,
resume(): void,
interval(): number,
interval(interval: number): void
} 
	declare module 'global' {
        declare interface JQueryStatic {
livestamp: LivestampGlobal
} 
	declare interface JQuery {
livestamp(date: Date): JQuery,
livestamp(moment: moment.Moment): JQuery,
livestamp(timestamp: number): JQuery,
livestamp(timestamp: string): JQuery
} 
    }

    }
