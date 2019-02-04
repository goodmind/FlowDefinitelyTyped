declare module 'ngreact' {
        declare type ReactDirective = (
reactComponentName: string | React.ComponentClass<any>,
propNames?: string[],
conf?: Object,
injectableProps?: Object) => angular.IDirective;
    }
