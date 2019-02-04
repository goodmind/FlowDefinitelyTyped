declare module 'moment-business-time' {
        import typeof * as moment from 'moment';

	declare module 'moment' {
        declare interface Moment {
nextWorkingDay: () => Moment,
nextWorkingTime: () => Moment,
lastWorkingDay: () => Moment,
lastWorkingTime: () => Moment,
addWorkingTime: (...args: Array<number | unitOfTime.Base>) => Moment,
subtractWorkingTime: (...args: Array<number | unitOfTime.Base>) => Moment,
workingDiff: (moment: Moment, unit: unitOfTime.Base, fractions?: boolean) => Moment,
isWorkingDay: () => boolean,
isWorkingTime: () => boolean
} 
	declare interface WorkingHoursMap {
0: string[] | null,
1: string[] | null,
2: string[] | null,
3: string[] | null,
4: string[] | null,
5: string[] | null,
6: string[] | null
} 
	declare interface LocaleSpecification {
workinghours?: WorkingHoursMap,
holidays?: string[]
} 
    }

    }
