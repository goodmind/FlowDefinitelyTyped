declare interface Uniq {
(ip: Array<T>): Array<T>
} declare var uniq: Uniq;declare module 'uniq' {
        declare module.exports: typeof uniq

    }
