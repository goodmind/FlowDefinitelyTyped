declare interface Express$MakePartialInput {
model: any,
opts: {
limit: number,
skip: number
},
search: Object,
result: any
} 

declare interface Express$PartialInput {
limit?: number,
offset: number,
count: number,
data: any
} 

declare export interface Express$Response {
success(data?: any, status?: number): void,
fail(data: any, status?: number): void,
error(err: any, status?: number): void,
partial?: (data: Express$PartialInput, status?: number) => void,
makePartial?: (data: Express$MakePartialInput) => void
} declare module 'easy-jsend' {
        declare export function init(conf?: {
partial: boolean
}): void

    }
