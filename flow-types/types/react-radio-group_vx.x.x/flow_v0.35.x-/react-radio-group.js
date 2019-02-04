declare module 'react-radio-group' {
        import typeof * as React from 'react';

	declare export type Omit<T, K: $Keys<T>> = Pick<T, $ElementType<($ObjMapi<T, <P>(P) => P> & $ObjMapi<{[k: K]: any}, <P>(P) => empty> & {
[x: string]: empty,
[x: number]: empty
}), $Keys<T>>>;
	declare type Radio$RadioProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, "value"
| "name"
| "role"
| "type"
| "aria-checked"> & {
value: any
};
	declare export var Radio: React.ComponentClass<Radio$Radio$RadioProps>;
	declare type RadioGroup$RadioGroupProps = Omit<React.HTMLProps<any>, "onChange"> & {
selectedValue?: any,
onChange?: (value: any) => void,
Component?: React.ReactType<Omit<React.HTMLProps<any>, "onChange" | "role">>
};
	declare export var RadioGroup: React.ComponentClass<RadioGroup$RadioGroup$RadioGroupProps>;
    }
