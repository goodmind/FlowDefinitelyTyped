declare module 'angular-pdfjs-viewer' {
        import typeof * as angular from 'angular';

	declare module 'angular' {
        declare type pdfjsViewer$ConfigProvider = {
setWorkerSrc(src: string): void,
setCmapDir(dir: string): void,
setImageDir(dir: string): void,
disableWorker(): void,
setVerbosity(verbosity: "errors" | "warnings" | "infos"): void
} & IServiceProvider

    }

    }
