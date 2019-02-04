declare module 'chalk-animation' {
        declare export var rainbow: AnimationFn;
	declare export var pulse: AnimationFn;
	declare export var glitch: AnimationFn;
	declare export var radar: AnimationFn;
	declare export var neon: AnimationFn;
	declare export var karaoke: AnimationFn;
	declare export type AnimationFn = (text: string, speed?: number) => Animation;
	declare export interface Animation {
start(): void,
stop(): void,
replace(text: string): void,
render(): void,
frame(): string
} 
    }
