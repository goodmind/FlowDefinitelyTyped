declare module 'moment-round' {
        import typeof * as moment from 'moment';

	declare module.exports: typeof moment

	declare module 'moment' {
        declare interface Moment {
round(precision: number, key: string, direction?: "round" | "ceil" | "floor"): Moment,
ceil(precision: number, key: string): Moment,
floor(precision: number, key: string): Moment
} 
    }

    }
