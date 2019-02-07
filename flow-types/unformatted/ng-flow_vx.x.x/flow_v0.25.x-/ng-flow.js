declare module 'ng-flow' {
        import typeof * as angular from 'angular';

	declare module 'angular' {
        declare interface flow$IFlowFactory {
create(options?: flowjs.IFlowOptions): flowjs.IFlow
} 
    }

    }
