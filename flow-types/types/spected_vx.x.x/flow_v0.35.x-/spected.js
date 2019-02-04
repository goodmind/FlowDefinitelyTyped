declare module 'spected' {
        declare function spected<ROOTINPUT, SPEC: SpecValue<ROOTINPUT, ROOTINPUT>>(
spec: SPEC,
input: ROOTINPUT): Result<ROOTINPUT, SPEC>

	declare type Predicate<INPUT, ROOTINPUT> = (value: INPUT, inputs: ROOTINPUT) => boolean;
	declare type ErrorMsg<INPUT> = (string
| number
| boolean
| Symbol
| null
| void
| {[key: string]: any}) | ((value: INPUT, field: string) => any);
	declare export type Spec<INPUT, ROOTINPUT> = [Predicate<INPUT, ROOTINPUT>, ErrorMsg<INPUT>];
	declare export type SpecArray<INPUT, ROOTINPUT> = Array<Spec<INPUT, ROOTINPUT>>;
	declare export type SpecFunction<INPUT, ROOTINPUT> = "There was Conditional Type, use $Call utility type";
	declare export type SpecObject<INPUT, ROOTINPUT> = $Shape<$ObjMapi<INPUT, <key>(key) => SpecValue<$ElementType<INPUT, key>, ROOTINPUT>>>;
	declare export type SpecValue<INPUT, ROOTINPUT> = "There was Conditional Type, use $Call utility type";
	declare export type Result<INPUT, SPEC> = $ObjMapi<INPUT, <key>(key) => true | any[] | Result<$ElementType<INPUT, key>, any>>;
	declare export default typeof spected

    }
