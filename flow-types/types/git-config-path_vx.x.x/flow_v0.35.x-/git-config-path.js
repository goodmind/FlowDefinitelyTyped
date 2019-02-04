declare module 'git-config-path' {
        declare module.exports: typeof gitConfigPath

	declare function gitConfigPath(global?: "global"): string

    }
