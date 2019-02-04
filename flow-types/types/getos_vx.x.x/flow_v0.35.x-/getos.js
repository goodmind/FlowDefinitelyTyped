declare module 'getos' {
        declare module.exports: typeof getos

	declare function getos(cb: (error: Error | null, os: getos$getos$Os) => void): string

	declare type getos$Os = getos$OtherOs | getos$LinuxOs;

declare interface getos$OtherOs {
os: "aix"
| "android"
| "darwin"
| "freebsd"
| "openbsd"
| "sunos"
| "win32"
| "cygwin"
} 

declare interface getos$LinuxOs {
os: "linux",
dist: string,
release: string,
codename?: string
} 
    }
