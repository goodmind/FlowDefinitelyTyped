declare module 'd' {
        declare module.exports: typeof d

	declare function d(value: any, options?: PropertyDescriptor): PropertyDescriptor

	declare function d(flags: d$d$Flags, value: any, options?: PropertyDescriptor): PropertyDescriptor

	
      declare var npm$namespace$d: {
        gs: typeof d$gs,
        
      }
declare function d$gs(flags: d$GetSetFlags, options: PropertyDescriptor): PropertyDescriptor


declare function d$gs(
flags: d$GetSetFlags,
get: (...args: any[]) => any,
options: PropertyDescriptor): PropertyDescriptor


declare function d$gs(
get: (...args: any[]) => any,
set?: ((...args: any[]) => any) | null,
options?: PropertyDescriptor): PropertyDescriptor


declare function d$gs(
get: ((...args: any[]) => any) | null | void,
set: (...args: any[]) => any,
options?: PropertyDescriptor): PropertyDescriptor


declare function d$gs(
flags: d$GetSetFlags,
get: (...args: any[]) => any,
set?: ((...args: any[]) => any) | null,
options?: PropertyDescriptor): PropertyDescriptor


declare function d$gs(
flags: d$GetSetFlags,
get: ((...args: any[]) => any) | null | void,
set: (...args: any[]) => any,
options?: PropertyDescriptor): PropertyDescriptor


declare type d$GetSetFlags = "c" | "e" | "ce";

declare type d$Flags = d$GetSetFlags
| "w"
| "cw"
| "ew"
| "cew";
    }
