declare module 'react-jsonschema-form' {
        import typeof * as React from 'react';

	import type {
          JSONSchema6
        } from 'json-schema';

	declare export interface FormProps<T> {
schema: JSONSchema6,
disabled?: boolean,
uiSchema?: UiSchema,
formData?: T,
formContext?: any,
widgets?: {
[name: string]: Widget
},
fields?: {
[name: string]: Field
},
noValidate?: boolean,
noHtml5Validate?: boolean,
showErrorList?: boolean,
ErrorList?: React.StatelessComponent<ErrorListProps>,
validate?: (formData: T, errors: FormValidation) => FormValidation,
onChange?: (e: IChangeEvent<T>) => any,
onError?: (e: any) => any,
onSubmit?: (e: ISubmitEvent<T>) => any,
liveValidate?: boolean,
FieldTemplate?: React.StatelessComponent<FieldTemplateProps>,
ArrayFieldTemplate?: React.StatelessComponent<ArrayFieldTemplateProps>,
ObjectFieldTemplate?: React.StatelessComponent<ObjectFieldTemplateProps>,
safeRenderCompletion?: boolean,
transformErrors?: (errors: AjvError[]) => AjvError[],
idPrefix?: string,
id?: string,
className?: string,
name?: string,
method?: string,
target?: string,
action?: string,
autocomplete?: string,
enctype?: string,
acceptcharset?: string
} 
	declare export default class Form<T> mixins React.Component<FormProps<T>> {}
	declare export type UiSchema = {
"ui:field"?: Field | string,
"ui:widget"?: Widget | string,
"ui:options"?: {[key: string]: any},
"ui:order"?: string[],
[name: string]: any
};
	declare export type FieldId = {
$id: string
};
	declare export type IdSchema = FieldId & {
[key: string]: FieldId
};
	declare export type WidgetProps = {
id: string,
schema: JSONSchema6,
value: any,
required: boolean,
disabled: boolean,
readonly: boolean,
autofocus: boolean,
onChange: (value: any) => void,
options: {[key: string]: any},
formContext: any,
onBlur: (id: string, value: string) => void,
onFocus: (id: string, value: string) => void
} & Pick<React.HTMLAttributes<HTMLElement>, Exclude<$Keys<React.HTMLAttributes<HTMLElement>>, "onBlur" | "onFocus">>

	declare export type Widget = React.StatelessComponent<WidgetProps> | React.ComponentClass<WidgetProps>;
	declare export type FieldProps = {
schema: JSONSchema6,
uiSchema: UiSchema,
idSchema: IdSchema,
formData: any,
errorSchema: {[key: string]: any},
onChange: (value: any) => void,
registry: {
fields: {
[name: string]: Field
},
widgets: {
[name: string]: Widget
},
definitions: {[key: string]: any},
formContext: any
},
formContext: any,
autofocus: boolean,
disabled: boolean,
readonly: boolean,
required: boolean,
name: string,
[prop: string]: any
} & React.HTMLAttributes<HTMLElement>

	declare export type Field = React.StatelessComponent<FieldProps> | React.ComponentClass<FieldProps>;
	declare export type FieldTemplateProps = {
id: string,
classNames: string,
label: string,
description: React.ReactElement<any>,
rawDescription: string,
children: React.ReactElement<any>,
errors: React.ReactElement<any>,
rawErrors: string[],
help: React.ReactElement<any>,
rawHelp: string,
hidden: boolean,
required: boolean,
readonly: boolean,
disabled: boolean,
displayLabel: boolean,
fields: Field[],
schema: JSONSchema6,
uiSchema: UiSchema,
formContext: any
};
	declare export type ArrayFieldTemplateProps = {
DescriptionField: React.StatelessComponent<{
id: string,
description: string | React.ReactElement<any>
}>,
TitleField: React.StatelessComponent<{
id: string,
title: string,
required: boolean
}>,
canAdd: boolean,
className: string,
disabled: boolean,
idSchema: IdSchema,
items: {
children: React.ReactElement<any>,
className: string,
disabled: boolean,
hasMoveDown: boolean,
hasMoveUp: boolean,
hasRemove: boolean,
hasToolbar: boolean,
index: number,
onDropIndexClick: (index: number) => (event: any) => void,
onReorderClick: (index: number, newIndex: number) => (event: any) => void,
readonly: boolean
}[],
onAddClick: (event: any) => (event: any) => void,
readonly: boolean,
required: boolean,
schema: JSONSchema6,
uiSchema: UiSchema,
title: string,
formContext: any,
formData: any
};
	declare export type ObjectFieldTemplateProps = {
DescriptionField: React.StatelessComponent<{
id: string,
description: string | React.ReactElement<any>
}>,
TitleField: React.StatelessComponent<{
id: string,
title: string,
required: boolean
}>,
title: string,
description: string,
properties: {
content: React.ReactElement<any>,
name: string,
disabled: boolean,
readonly: boolean
}[],
required: boolean,
schema: JSONSchema6,
uiSchema: UiSchema,
idSchema: IdSchema,
formData: any,
formContext: any
};
	declare export type AjvError = {
message: string,
name: string,
params: any,
property: string,
stack: string
};
	declare export type ErrorListProps = {
errorSchema: FormValidation,
errors: AjvError[],
formContext: any,
schema: JSONSchema6,
uiSchema: UiSchema
};
	declare export interface IChangeEvent<T> {
edit: boolean,
formData: T,
errors: AjvError[],
errorSchema: FormValidation,
idSchema: IdSchema,
schema: JSONSchema6,
uiSchema: UiSchema,
status?: string
} 
	declare export type ISubmitEvent<T> = IChangeEvent<T>;
	declare export type FieldError = string;
	declare type FieldValidation = {
__errors: FieldError[],
addError: (message: string) => void
};
	declare type FormValidation = FieldValidation & {
[fieldName: string]: FieldValidation
};
	declare type FormSubmit<T> = {
formData: T
};
    }
declare module 'react-jsonschema-form/lib/utils' {
        import type {
          JSONSchema6
        } from 'json-schema';

	declare export interface IRangeSpec {
min?: number,
max?: number,
step?: number
} 
	declare export function rangeSpec(schema: JSONSchema6): IRangeSpec

    }
