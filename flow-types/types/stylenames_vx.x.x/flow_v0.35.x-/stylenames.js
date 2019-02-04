declare module 'stylenames' {
        declare export type StyleValueConditionFunction = () => boolean | null | void;
	declare export type StyleValueObject = Record<string | number, boolean | StyleValueConditionFunction>;
	declare export type StyleValue = null | void | string | StyleValueObject;
	declare export type StyleObject = $Shape<Record<$Keys<CSSStyleDeclaration>, StyleValue>>;
	declare function styleNames(styles: StyleObject): string

	declare export default typeof styleNames

    }
