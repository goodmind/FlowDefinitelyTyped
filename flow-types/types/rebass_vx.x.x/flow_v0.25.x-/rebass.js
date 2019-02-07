declare module "rebass" {
  import typeof * as React from "react";

  declare export type BaseProps<C> = {
    className?: string,
    as?: string
  } & React.ClassAttributes<C>;

  declare export type SpaceProps<C> = {
    m?: number | string | $ReadOnlyArray<number>,
    mt?: number | string | $ReadOnlyArray<number>,
    mr?: number | string | $ReadOnlyArray<number>,
    mb?: number | string | $ReadOnlyArray<number>,
    ml?: number | string | $ReadOnlyArray<number>,
    mx?: number | string | $ReadOnlyArray<number>,
    my?: number | string | $ReadOnlyArray<number>,
    p?: number | string | $ReadOnlyArray<number>,
    pt?: number | string | $ReadOnlyArray<number>,
    pr?: number | string | $ReadOnlyArray<number>,
    pb?: number | string | $ReadOnlyArray<number>,
    pl?: number | string | $ReadOnlyArray<number>,
    px?: number | string | $ReadOnlyArray<number>,
    py?: number | string | $ReadOnlyArray<number>
  } & BaseProps<C>;

  declare export type BoxProps = {
    className?: string,
    width?: number | string | $ReadOnlyArray<number>,
    fontSize?: number | $ReadOnlyArray<number>,
    css?: { [key: string]: any },
    color?: string,
    bg?: string
  } & SpaceProps<BoxClass>;

  declare type BoxClass = React.FunctionComponent<BoxProps>;
  declare export var Box: BoxClass;
  declare export type ButtonProps = {
    fontWeight?: string,
    border?: number | string,
    borderColor?: string,
    borderRadius?: number | string,
    variant?: string
  } & BoxProps;

  declare export var Button: React.FunctionComponent<ButtonProps>;
  declare export type CardProps = {
    border?: number | string,
    borderColor?: string,
    borderRadius?: number | string,
    boxShadow?: string,
    backgroundImage?: string,
    backgroundSize?: string,
    backgroundPosition?: string,
    backgroundRepeat?: string,
    opacity?: number,
    variant?: string
  } & BoxProps;

  declare export var Card: React.FunctionComponent<CardProps>;
  declare export type FlexProps = {
    alignItems?: string,
    justifyContent?: string,
    flexDirection?: string,
    flexWrap?: string
  } & BoxProps;

  declare export var Flex: React.FunctionComponent<FlexProps>;
  declare export type ImageProps = {
    height?: number | string,
    borderRadius?: number | string,
    src?: string,
    alt?: string
  } & BoxProps;

  declare export var Image: React.FunctionComponent<ImageProps>;
  declare export type LinkProps = {
    href?: string
  } & BoxProps;

  declare export var Link: React.FunctionComponent<LinkProps>;
  declare export type TextProps = {
    fontSize?: number | $ReadOnlyArray<number>,
    fontWeight?: string,
    color?: string,
    fontFamily?: string,
    textAlign?: string,
    lineHeight?: number | string,
    letterSpacing?: number | string
  } & BoxProps;

  declare export var Text: React.FunctionComponent<TextProps>;
  declare export type HeadingProps = TextProps;
  declare export var Heading: React.FunctionComponent<HeadingProps>;
}
