declare module "@atlaskit/calendar" {
  import type { Component, HTMLAttributes, FocusEvent } from "react";

  declare export type ArrowKeys = "left" | "up" | "right" | "down";
  declare export interface DateObj {
    day: number;
    month: number;
    year: number;
  }
  declare export type ChangeEvent = {
    iso: string,
    type: "left" | "up" | "right" | "down" | "prev" | "next"
  } & DateObj;

  declare export type SelectEvent = {
    iso: string
  } & DateObj;

  declare export interface Props {
    /**
     * The number of the day currently focused. Places border around the date. 0 highlights no date.
     */
    day?: number;

    /**
     * Default for `day`.
     */
    defaultDay?: number;

    /**
     * Default for `disabled`.
     */
    defaultDisabled?: string[];

    /**
     * Default for `month`.
     */
    defaultMonth?: number;

    /**
     * Default for `previouslySelected`.
     */
    defaultPreviouslySelected?: string[];

    /**
     * Default for `selected`.
     */
    defaultSelected?: string[];

    /**
     * Default for `year`.
     */
    defaultYear?: number;

    /**
     * Takes an array of dates as string in the format 'YYYY-MM-DD'. All dates provided are greyed out.
     * This does not prevent these dates being selected.
     */
    disabled?: string[];

    /**
     * Props to apply to the container.
     */
    innerProps?: HTMLAttributes<HTMLDivElement>;

    /**
     * The number of the month (from 1 to 12) which the calendar should be on.
     */
    month?: number;

    /**
     * Function which is called when the calendar is no longer focused.
     */
    onBlur?: (e?: FocusEvent<HTMLDivElement>) => void;

    /**
     * Called when the calendar is navigated. This can be triggered by the keyboard, or by clicking the navigational buttons.
     * The 'type' property indicates the the direction the calendar was navigated whereas the 'iso' property is a string of the format YYYY-MM-DD.
     */
    onChange?: (e: ChangeEvent) => void;

    /**
     * Called when the calendar receives focus. This could be from a mouse event on the container by tabbing into it.
     */
    onFocus?: (e?: FocusEvent<HTMLDivElement>) => void;

    /**
     * Function called when a day is clicked on. Calls with an object that has
     * a day, month and week property as numbers, representing the date just clicked.
     * It also has an 'iso' property, which is a string of the selected date in the
     * format YYYY-MM-DD.
     */
    onSelect?: (e: SelectEvent) => void;

    /**
     * Takes an array of dates as string in the format 'YYYY-MM-DD'. All dates
     * provided are given a background color.
     */
    previouslySelected?: string[];

    /**
     * Takes an array of dates as string in the format 'YYYY-MM-DD'. All dates
     * provided are given a background color.
     */
    selected?: string[];

    /**
     * Value of current day, as a string in the format 'YYYY-MM-DD'.
     */
    today?: string;

    /**
     * Year to display the calendar for.
     */
    year?: number;
  }
  declare export default class Calendar mixins Component<Props> {}
}
