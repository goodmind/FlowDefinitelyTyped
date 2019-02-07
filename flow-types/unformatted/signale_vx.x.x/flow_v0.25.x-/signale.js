declare module 'signale' {
        declare type signale$DefaultMethods = "await"
| "complete"
| "error"
| "debug"
| "fatal"
| "fav"
| "info"
| "note"
| "pause"
| "pending"
| "star"
| "start"
| "success"
| "warn"
| "watch"
| "log";

declare interface signale$CommandType {

/**
 * The icon corresponding to the logger.
 */
badge: string,

/**
 * The color of the label, can be any of the foreground colors supported by
 * [chalk](https://github.com/chalk/chalk#colors).
 */
color: string,

/**
 * The label used to identify the type of the logger.
 */
label: string
} 

declare interface signale$SignaleConfig {

/**
 * Display the scope name of the logger.
 */
displayScope?: boolean,

/**
 * Display the badge of the logger.
 */
displayBadge?: boolean,

/**
 * Display the current local date in `YYYY-MM-DD` format.
 */
displayDate?: boolean,

/**
 * Display the name of the file that the logger is reporting from.
 */
displayFilename?: boolean,

/**
 * Display the label of the logger.
 */
displayLabel?: boolean,

/**
 * Display the current local time in `HH:MM:SS` format.
 */
displayTimestamp?: boolean,

/**
 * Underline the logger label.
 */
underlineLabel?: boolean,

/**
 * Underline the logger message.
 */
underlineMessage?: boolean,
underlinePrefix?: boolean,
underlineSuffix?: boolean,
uppercaseLabel?: boolean
} 

declare interface signale$SignaleOptions<TTypes: string= signale$DefaultMethods> {

/**
 * Sets the configuration of an instance overriding any existing global or local configuration.
 */
config?: signale$SignaleConfig,
disabled?: boolean,

/**
 * Name of the scope.
 */
scope?: string,

/**
 * Holds the configuration of the custom and default loggers.
 */
types?: $Shape<Record<TTypes, signale$CommandType>>,
interactive?: boolean,
timers?: Map<string, Date>,

/**
 * Destination to which the data is written, can be any valid
 * [Writable stream](https://nodejs.org/api/stream.html#stream_writable_streams).
 */
stream?: NodeJS.WriteStream
} 

declare interface signale$SignaleConstructor {
new <TTypes: string= signale$DefaultMethods>(
options?: signale$SignaleOptions<TTypes>): signale$Signale<TTypes>
} 

declare interface signale$SignaleBase<TTypes: string= signale$DefaultMethods> {

/**
 * Sets the configuration of an instance overriding any existing global or local configuration.
 * @param configObj Can hold any of the documented options.
 */
config(configObj: signale$SignaleConfig): signale$Signale<TTypes>,

/**
 * Defines the scope name of the logger.
 * @param name Can be one or more comma delimited strings.
 */
scope(...name: string[]): signale$Signale<TTypes>,

/**
 * Clears the scope name of the logger.
 */
unscope(): void,

/**
 * Sets a timers and accepts an optional label. If none provided the timer will receive a unique label automatically.
 * @param label Label corresponding to the timer. Each timer must have its own unique label.
 * @returns a string corresponding to the timer label.
 */
time(label?: string): string,

/**
 * Deactivates the timer to which the given label corresponds. If no label
 * is provided the most recent timer, that was created without providing a
 * label, will be deactivated.
 * @param label Label corresponding to the timer, each timer has its own unique label.
 * @param span Total running time.
 */
timeEnd(label?: string, span?: number): {
label: string,
span?: number
}
} 

declare type signale$LoggerFunc = (message?: any, ...optionalArgs: any[]) => void;

declare type signale$Signale<TTypes: string= signale$DefaultMethods> = signale$SignaleBase<TTypes> & Record<TTypes, signale$LoggerFunc> & Record<signale$DefaultMethods, signale$LoggerFunc>;
	declare var signale: signale$signale$Signale<signale$signale$DefaultMethods> & {
signale$Signale: signale$signale$SignaleConstructor,
signale$SignaleConfig: signale$signale$SignaleConfig,
signale$SignaleOptions: signale$signale$SignaleOptions,
signale$DefaultMethods: signale$signale$DefaultMethods
};
	declare module.exports: typeof signale

    }
