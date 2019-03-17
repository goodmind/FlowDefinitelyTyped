declare module "react-mailchimp-subscribe" {
  import type { Component, Node } from "react";

  declare export interface EmailFormFields {
    EMAIL: string;
  }
  declare export type NameFormFields = {
    FNAME: string,
    LNAME: string
  } & EmailFormFields;

  declare export type ClassicFormFields = {
    "BIRTHDAY[month]": number,
    "BIRTHDAY[day]": number
  } & NameFormFields;

  declare export type DefaultFormFields = EmailFormFields;
  declare export interface ResponseArgs {
    status: "success" | "error";
    message: string;
  }
  declare export interface PendingArgs {
    status: "sending" | null;
    message: null;
  }
  declare export interface SubscribeArg<FormFields> {
    subscribe: (data: FormFields) => void;
  }
  declare export type FormHooks<FormFields> = SubscribeArg<FormFields> &
    (ResponseArgs | PendingArgs);
  declare export interface Props<FormFields> {
    render?: (hooks: FormHooks<FormFields>) => Node;
    url: string;
  }
  declare export default class MailchimpSubscribe<
    FormFields = DefaultFormFields
  > mixins Component<Props<FormFields>> {}
}
