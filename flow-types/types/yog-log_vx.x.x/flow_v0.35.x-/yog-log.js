declare module 'yog-log' {
        import type {
          Request,Response,NextFunction
        } from 'express';

	declare interface LEVELS {
0: "ACCESS",
3: "ACCESS_ERROR",
1: "FATAL",
2: "WARNING",
4: "NOTICE",
8: "TRACE",
16: "DEBUG"
} 
	declare type LevelInt = $Keys<LEVELS>
| 0
| 3
| 1
| 2
| 4
| 8
| 16;
	declare type LevelName = $ElementType<LEVELS, LevelInt>;
	declare type LogReturn = void | false;
	declare interface LogConfig {
LogIdName?: string,
data_path?: string,
log_path?: string,
debug?: 0 | 1,
intLevel?: 16,
auto_rotate?: 0 | 1,
use_sub_dir?: 0 | 1,
IS_ODP?: boolean,
IS_OMP?: 0 | 1,
access_log_path?: string,
access_error_log_path?: string,
access?: string,
format_wf?: string
} 
	declare interface WriteLogConfig {
filename_suffix: string,
errno: number,
escape_msg: boolean
} 
	declare interface LogInfo {
msg: string,
custom: {}
} 
	declare type LogInput = string | LogInfo | Error;
	declare function yog_log(
config?: LogConfig): ((req: Request, resp: Response, next: NextFunction) => any)

	
      declare var npm$namespace$yog_log: {
        getLogger: typeof yog_log$getLogger,
        
      }
declare class yog_log$Logger  {
constructor(opts: LogConfig, req: Request): this;
extend(destination: {}, source: {}): {};
log(level: string, obj: string | {}): void | false;
notice(info: LogInput): void | false;
debug(info: LogInput): void | false;
fatal(info: LogInput): void | false;
trace(info: LogInput): void | false;
warning(info: LogInput): void | false;
getCookie(name: string): string | false;
getLogFile(intLevel: LevelInt): string;
getLogFormat(level: LevelName): string | false;
getLogID(req: Request, logIDName: string): string;
getLogLevelInt(level: LevelName): LevelInt | -1;
getLogPrefix(): string;
getLogString(format: string): string;
getParams(name: string): string;
md5(data: string | Buffer, len: number): string;
parseCustomLog(obj: {}): void;
parseFormat(format: string): string;
parseReqParams(req: Request, res: Response): void | false;
parseStackInfo(info: LogInfo | Error): void;
setParams(name: string, value: any): void;
writeLog(intLevel: LevelInt, options: WriteLogConfig, log_format: string): void | false
}

declare function yog_log$getLogger(config?: LogConfig): yog_log$Logger

	declare module.exports: typeof yog_log

    }
