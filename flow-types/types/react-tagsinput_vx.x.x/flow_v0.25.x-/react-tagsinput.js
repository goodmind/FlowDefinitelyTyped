declare module "react-tagsinput" {
  import typeof * as React from "react";

  declare export default typeof TagsInput;

  declare type Tag = any;
  declare class TagsInput
    mixins React.Component<TagsInput$ReactTagsInputProps> {
    accept(): any;
    addTag(tag: Tag): any;
    blur(): void;
    clearInput(): void;
    focus(): void;
  }
  declare interface TagsInput$InputProps {
    [prop: string]: any;
  }

  declare type TagsInput$RenderInputProps = {
    +addTag: (tag: Tag) => void,
    +onChange: (
      e: React.ChangeEvent<{
        +value: string
      }>
    ) => void,
    +ref: (r: any) => void,
    +value: Tag
  } & TagsInput$InputProps;

  declare interface TagsInput$TagProps {
    [prop: string]: any;
  }

  declare type TagsInput$RenderTagProps = {
    +disabled: boolean,
    +getTagDisplayValue: (tag: Tag) => string,
    +onRemove: (tagIndex: number) => void,
    +tag: Tag
  } & TagsInput$TagProps;

  declare type TagsInput$ReactTagsInputProps = {
    value: Tag[],
    onChange: (tags: Tag[], changed: Tag[], changedIndexes: number[]) => void,
    onChangeInput?: (value: string) => void,
    addKeys?: number[],
    currentValue?: string,
    inputValue?: string,
    onlyUnique?: boolean,
    validationRegex?: RegExp,
    onValidationReject?: (tags: string[]) => void,
    disabled?: boolean,
    maxTags?: number,
    addOnBlur?: boolean,
    addOnPaste?: boolean,
    pasteSplit?: (data: string) => string[],
    removeKeys?: number[],
    className?: string,
    focusedClassName?: string,
    tagProps?: TagsInput$TagProps,
    inputProps?: TagsInput$InputProps,
    tagDisplayProp?: string | null,
    renderTag?: (props: TagsInput$RenderTagProps) => React.Node,
    renderInput?: (props: TagsInput$RenderInputProps) => React.Node,
    renderLayout?: (
      tagComponents: React.Component<>[],
      inputComponent: React.Component<>
    ) => React.ReactChild,
    preventSubmit?: boolean
  } & React.Props<TagsInput>;
}
