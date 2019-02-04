declare module 'seedrandom' {
        declare export type seedrandom$seedrandomStateType = boolean | (() => seedrandom$prng);

declare interface seedrandom$prng {
new (
seed?: string,
options?: seedrandom$seedRandomOptions,
callback?: any): seedrandom$prng,
(): number,
quick(): number,
int32(): number,
double(): number,
state(): () => seedrandom$prng
} 

declare interface seedrandom$seedrandom_prng {
(seed?: string, options?: seedrandom$seedRandomOptions, callback?: any): seedrandom$prng,
alea: (
seed?: string,
options?: seedrandom$seedRandomOptions,
callback?: seedrandom$seedrandomCallback) => seedrandom$prng,
xor128: (
seed?: string,
options?: seedrandom$seedRandomOptions,
callback?: seedrandom$seedrandomCallback) => seedrandom$prng,
tychei: (
seed?: string,
options?: seedrandom$seedRandomOptions,
callback?: seedrandom$seedrandomCallback) => seedrandom$prng,
xorwow: (
seed?: string,
options?: seedrandom$seedRandomOptions,
callback?: seedrandom$seedrandomCallback) => seedrandom$prng,
xor4096: (
seed?: string,
options?: seedrandom$seedRandomOptions,
callback?: seedrandom$seedrandomCallback) => seedrandom$prng,
xorshift7: (
seed?: string,
options?: seedrandom$seedRandomOptions,
callback?: seedrandom$seedrandomCallback) => seedrandom$prng,
quick: (
seed?: string,
options?: seedrandom$seedRandomOptions,
callback?: seedrandom$seedrandomCallback) => seedrandom$prng
} 

declare interface seedrandom$seedrandomCallback {
(seedrandom$prng?: seedrandom$prng, shortseed?: string, global?: boolean, state?: seedrandom$seedrandomStateType): seedrandom$prng
} 

declare interface seedrandom$seedRandomOptions {
entropy?: boolean,
"global"?: boolean,
state?: seedrandom$seedrandomStateType,
pass?: seedrandom$seedrandomCallback
} 
	declare var seedrandom: seedrandom$seedrandom$seedrandom_prng;
	declare module.exports: typeof seedrandom

    }
