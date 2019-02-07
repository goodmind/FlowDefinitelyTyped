declare module 'ui-select' {
        import typeof * as angular from 'angular';

	declare module 'angular' {
        declare interface select$ISelectConfig {
appendToBody: boolean,
resetSearchInput: boolean,
theme: string
} 
    }

    }
