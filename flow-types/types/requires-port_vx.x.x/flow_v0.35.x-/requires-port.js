declare module 'requires-port' {
        declare module.exports: typeof requiresPort

	declare function requiresPort(port: string | number, protocol: requiresPort$requiresPort$Protocol): boolean

	declare function requiresPort(port: string | number, protocol: string): boolean

	declare type requiresPort$Protocol = "http"
| "https"
| "ws"
| "wss"
| "ftp"
| "gopher"
| "file";
    }
