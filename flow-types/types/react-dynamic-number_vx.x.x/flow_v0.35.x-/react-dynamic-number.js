declare module 'react-dynamic-number' {
        import typeof * as React from 'react';

	declare export type Omit<T, K: $Keys<T>> = Pick<T, $ElementType<($ObjMapi<T, <P>(P) => P> & $ObjMapi<{[k: K]: any}, <P>(P) => empty> & {
[x: string]: empty,
[x: number]: empty
}), $Keys<T>>>;
	declare export type BaseInputProps = $Shape<Omit<React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, "ref" | "value" | "onChange" | "placeholder">>;
	declare export type DynamicNumberProps = {
value?: number | "",
separator?: "." | ",",
thousand?: boolean | " ",
integer?: number,
fraction?: number,
positive?: boolean,
negative?: boolean,
placeholder?: string,
onChange?: (
event: React.ChangeEvent<HTMLInputElement>,
modelValue: number,
viewValue: string) => void
} & BaseInputProps

	declare export default class DynamicNumber mixins React.Component<DynamicNumberProps> {}
    }
