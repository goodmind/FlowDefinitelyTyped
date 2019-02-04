declare module 'merge-env' {
        declare module.exports: typeof mergeEnv

	declare function mergeEnv(target: {[key: string]: any}, ...sources: any[]): any

    }
