declare module "@atlaskit/inline-edit" {
    import type { ReactElement, Component } from "react";

    declare export default class InlineEdit mixins Component<StatefulProps> {}
    declare export class InlineEditStateless mixins Component<StatelessProps> {}
    declare export interface BaseProps {
        /**
         * Label above the input.
         */
        label?: string;

        /**
         * Component to be shown when reading only
         */
        readView: ReactElement<any>;

        /**
         * Component to be shown when editing. Should be an @atlaskit/input.
         */
        editView?: ReactElement<any>;

        /**
         * Set whether the read view should fit width, most obvious when hovered.
         */
        isFitContainerWidthReadView?: boolean;

        /**
         * Greys out text and shows spinner. Does not disable input.
         */
        isWaiting?: boolean;

        /**
         * Sets yellow border with warning symbol at end of input. Removes confirm and cancel buttons.
         */
        isInvalid?: boolean;

        /**
         * Determine whether the label is shown.
         */
        isLabelHidden?: boolean;

        /**
         * Sets whether the checkmark and cross are displayed in the bottom right fo the field.
         */
        areActionButtonsHidden?: boolean;

        /**
         * Sets whether the confirm function is called when the input loses focus.
         */
        isConfirmOnBlurDisabled?: boolean;

        /**
         * Handler called when checkmark is clicked. Also by default called when the input loses focus.
         */
        onConfirm: () => void;

        /**
         * Handler called when the cross is clicked on.
         */
        onCancel: () => void;

        /**
         * html to pass down to the label htmlFor prop.
         */
        labelHtmlFor?: string;

        /**
         * Set whether onConfirm is called on pressing enter.
         */
        shouldConfirmOnEnter?: boolean;

        /**
         * Set whether default stylings should be disabled when editing.
         */
        disableEditViewFieldBase?: boolean;

        /**
         * Component to be shown in an @atlaskit/inline-dialog when edit view is open.
         */
        invalidMessage?: ReactElement<any>;
    }
    declare export type StatelessProps = {
        /**
         * Whether the component shows the readView or the editView.
         */
        isEditing: boolean,

        /**
         * Handler called when the wrapper or the label are clicked.
         */
        onEditRequested: () => void
    } & BaseProps;

    declare export type StatefulProps = BaseProps;
}
