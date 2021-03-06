declare module "java" {
  declare var NodeJavaCore: NodeJavaCore$NodeJavaCore$NodeAPI;
  declare module.exports: typeof NodeJavaCore;

  declare export interface NodeJavaCore$Callback<T> {
    (err?: Error, result?: T): void;
  }

  declare interface NodeJavaCore$Promisify {
    (funct: Function, receiver?: any): Function;
  }

  declare interface NodeJavaCore$AsyncOptions {
    syncSuffix: string;
    asyncSuffix?: string;
    promiseSuffix?: string;
    promisify?: NodeJavaCore$Promisify;
  }

  declare interface NodeJavaCore$ProxyFunctions {
    [index: string]: Function;
  }

  declare interface NodeJavaCore$NodeAPI {
    classpath: string[];
    options: string[];
    asyncOptions: NodeJavaCore$AsyncOptions;
    nativeBindingLocation: string;
    callMethod(
      instance: any,
      methodName: string,
      args: any[],
      callback: NodeJavaCore$Callback<any>
    ): void;
    callMethodSync(instance: any, methodName: string, ...args: any[]): any;
    callStaticMethod(
      className: string,
      methodName: string,
      ...args: Array<any | NodeJavaCore$Callback<any>>
    ): void;
    callStaticMethodSync(
      className: string,
      methodName: string,
      ...args: any[]
    ): any;
    getStaticFieldValue(className: string, fieldName: string): any;
    setStaticFieldValue(
      className: string,
      fieldName: string,
      newValue: any
    ): void;
    instanceOf(javaObject: any, className: string): boolean;
    registerClient(
      before: (cb: NodeJavaCore$Callback<void>) => void,
      after?: (cb: NodeJavaCore$Callback<void>) => void
    ): void;
    registerClientP(
      beforeP: () => Promise<void>,
      afterP?: () => Promise<void>
    ): void;
    ensureJvm(done: NodeJavaCore$Callback<void>): void;
    ensureJvm(): Promise<void>;
    isJvmCreated(): boolean;
    newByte(val: number): any;
    newChar(val: string | number): any;
    newDouble(val: number): any;
    newShort(val: number): any;
    newLong(val: number): any;
    newFloat(val: number): any;
    newDouble(val: number): any;
    import(className: string): any;
    newInstance(className: string, ...args: any[]): void;
    newInstanceSync(className: string, ...args: any[]): any;
    newInstanceP(className: string, ...args: any[]): Promise<any>;
    newArray<T>(className: string, arg: any[]): any;
    getClassLoader(): any;
    newProxy(
      interfaceName: string,
      functions: NodeJavaCore$ProxyFunctions
    ): any;
  }
}
