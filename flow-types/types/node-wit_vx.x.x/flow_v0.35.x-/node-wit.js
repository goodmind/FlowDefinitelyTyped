declare module 'node-wit' {
        
      declare var npm$namespace$log: {
        
        DEBUG: typeof log$DEBUG,
INFO: typeof log$INFO,
WARN: typeof log$WARN,
ERROR: typeof log$ERROR,
      }
declare class log$Logger  {
constructor(level: string): this
}

declare var log$DEBUG: string;

declare var log$INFO: string;

declare var log$WARN: string;

declare var log$ERROR: string;
	declare export interface WitEntityValue {
value?: string,
expressions?: string[]
} 
	declare export interface WitEntity {
id?: string,
values?: WitEntityValue[]
} 
	declare export interface WitContext {
state?: string[],
reference_time?: string,
timezone?: string,
entities?: WitEntity[],
location?: string
} 
	declare export interface WitRequest {
sessionId?: string,
context?: WitContext,
text?: string,
entities?: WitEntity[]
} 
	declare export interface WitResponse {
text?: string,
quickReplies?: any
} 
	declare export interface WitOption {
accessToken: string,
actions?: any,
logger?: log$log$Logger
} 
	declare export interface MessageResponseEntity {
confidence?: number,
value?: string,
type?: string
} 
	declare export interface MessageResponse {
msg_id: string,
_text: string,
entities: any
} 
	declare export class Wit  {
constructor(option: WitOption): this;
message(message: string, context: WitContext): Promise<MessageResponse>;
converse(
sessionId: string,
message: string,
context: WitContext,
reset?: boolean): Promise<MessageResponse>;
runActions(
sessionId: string,
message: string,
context: WitContext,
maxSteps?: number): Promise<WitContext>
}
    }
