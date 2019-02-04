declare module 'selectables' {
        declare module.exports: typeof Selectables

	declare class Selectables  {
options: Selectables$Selectables$Options;
constructor(options?: Selectables$Selectables$Options): this;
enable(): void;
disable(): void
}
	declare interface Selectables$Options {
zone?: string,
elements?: string,
selectedClass?: string,
key?: string | boolean,
moreUsing?: string,
enabled?: boolean,
start(e: Event): void,
stop(e: Event): void,
onSelect(el: Element): void,
onDeselect(el: Element): void
} 
    }
