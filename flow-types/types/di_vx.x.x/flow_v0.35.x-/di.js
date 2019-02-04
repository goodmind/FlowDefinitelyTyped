declare module 'di' {
        declare export class Injector  {
get(dep: string): {};
invoke(fn: (context: {}, deps: Array<{}>) => {}, context: {}): {};
instantiate({}: <<UNKNOWN PARAM FORMAT>>): {};
createChild(modules: Array<{}>): Injector;
constructor(modules?: Array<{}>, parent?: Injector): this
}
    }
