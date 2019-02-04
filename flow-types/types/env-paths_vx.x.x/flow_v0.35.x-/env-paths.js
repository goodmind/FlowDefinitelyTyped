declare module 'env-paths' {
        declare module.exports: typeof envPaths

	declare function envPaths(name: string, opts?: {
suffix: string | boolean
}): envPaths$envPaths$Paths

	declare interface envPaths$Paths {
+data: string,
+config: string,
+cache: string,
+log: string,
+temp: string
} 
    }
