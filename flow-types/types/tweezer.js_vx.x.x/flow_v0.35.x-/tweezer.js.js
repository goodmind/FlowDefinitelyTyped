declare module 'tweezer.js' {
        declare interface Options {
duration?: number,
easing(
currentTime: number,
beginningTime: number,
changeInValue: number,
duration: number): number,
start: number,
end: number
} 
	declare class Tweezer  {
constructor(opts: Options): this;
stop(): this;
on(name: "tick", handler: (v: number) => void): this;
on(name: "done", handler: () => void): this;
begin(): this
}
	declare export default typeof Tweezer

    }
