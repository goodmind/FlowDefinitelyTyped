declare module 'word-list-json' {
        declare interface Lengths {
[key: string]: number
} 
	declare export var lengths: Lengths;
	declare type wordsArray = string[];
	declare type Words = {
lengths: Lengths
} & wordsArray

	declare var words: Words;
	declare export default typeof words

    }
