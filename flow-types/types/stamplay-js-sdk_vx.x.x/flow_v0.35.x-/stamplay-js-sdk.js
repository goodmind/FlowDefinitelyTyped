declare module 'stamplay-js-sdk' {
        
      declare var npm$namespace$Stamplay: {
        init: typeof Stamplay$init,
User: typeof Stamplay$User,
Cobject: typeof Stamplay$Cobject,
        
      }
declare function Stamplay$init(appId: string): void


declare function Stamplay$User(): Stamplay$StamplayObject


declare function Stamplay$Cobject(object: string): Stamplay$StamplayObject


declare interface Stamplay$Model {
signup(arg: any): Promise<any>,
new (): Stamplay$Model,
get(property: string): any,
set(property: string, value: any): void,
unset(property: string): void,
fetch(id: any): Promise<any>,
destroy(): Promise<any>,
save(arg?: any): Promise<any>,
upVote(): Promise<any>
} 

declare interface Stamplay$StamplayObject {
Stamplay$Model: Stamplay$Model,
Collection: any
} 
    }
