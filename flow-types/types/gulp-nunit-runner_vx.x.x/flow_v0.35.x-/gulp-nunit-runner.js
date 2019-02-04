declare module 'gulp-nunit-runner' {
        declare type nunit$NUnit = (options?: nunit$Options) => NodeJS.ReadWriteStream;

declare interface nunit$ConsoleRunnerOptions {
test?: string[],
testist?: string,
run?: string[],
runlist?: string,
include?: string[],
exclude?: string[],
config?: string,
process?: string,
domain?: string,
framework?: string,
x86?: boolean,
"dispose-runners"?: boolean,
timeout?: number,
seed?: number,
workers?: number,
stoponerror?: boolean,
wait?: boolean,
pause?: boolean,
work?: string,
output?: string,
err?: string,
result?: string,
explore?: string,
noresult?: boolean,
labels?: boolean,
trace?: string,
shadowcopy?: boolean,
noshadow?: boolean,
teamcity?: boolean,
noheader?: boolean,
nocolor?: boolean,
verbose?: boolean,
nologo?: boolean,
nodots?: boolean,
apartment?: string,
nothread?: boolean,
basepath?: string,
privatebinpath?: string[],
cleanup?: boolean
} 

declare interface nunit$Options {
executable?: string,
platform?: string,
teamcity?: boolean,
options?: nunit$ConsoleRunnerOptions
} 
	declare var nunit: nunit$nunit$NUnit;
	declare module.exports: typeof nunit

    }
