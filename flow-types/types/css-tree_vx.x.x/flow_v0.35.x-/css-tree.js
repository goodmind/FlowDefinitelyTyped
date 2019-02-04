declare module "css-tree" {
    declare export interface CssLocation {
        source: string;
        start: {
            offset: number,
            line: number,
            column: number
        };
        end: {
            offset: number,
            line: number,
            column: number
        };
    }
    declare export interface ListItem<TData> {
        prev: ListItem<TData> | null;
        next: ListItem<TData> | null;
        data: TData;
    }
    declare export type IteratorFn<TData, TResult, TContext> = (
        item: TData,
        node: ListItem<TData>,
        list: List<TData>
    ) => TResult;
    declare export type FilterFn<TData, TResult: TData, TContext> = (
        item: TData,
        node: ListItem<TData>,
        list: List<TData>
    ) => boolean;
    declare export class List<TData> {
        constructor(): this;
        fromArray(array: TData[]): List<TData>;
        createItem(data: TData): ListItem<TData>;
        toArray(): TData[];
        toJSON(): TData[];
        getSize(): number;
        isEmpty(): boolean;
        first(): TData | null;
        last(): TData | null;
        each<TContext>(
            fn: IteratorFn<TData, void, TContext>,
            context: TContext
        ): void;
        each(fn: IteratorFn<TData, void>): void;
        forEach<TContext>(
            fn: IteratorFn<TData, void, TContext>,
            context: TContext
        ): void;
        forEach(fn: IteratorFn<TData, void>): void;
        eachRight<TContext>(
            fn: IteratorFn<TData, void, TContext>,
            context: TContext
        ): void;
        eachRight(fn: IteratorFn<TData, void>): void;
        forEachRight<TContext>(
            fn: IteratorFn<TData, void, TContext>,
            context: TContext
        ): void;
        forEachRight(fn: IteratorFn<TData, void>): void;
        nextUntil<TContext>(
            start: ListItem<TData>,
            fn: IteratorFn<TData, boolean, TContext>,
            context: TContext
        ): void;
        nextUntil(start: ListItem<TData>, fn: IteratorFn<TData, boolean>): void;
        prevUntil<TContext>(
            start: ListItem<TData>,
            fn: IteratorFn<TData, boolean, TContext>,
            context: TContext
        ): void;
        prevUntil(start: ListItem<TData>, fn: IteratorFn<TData, boolean>): void;
        some<TContext>(
            fn: IteratorFn<TData, boolean, TContext>,
            context: TContext
        ): void;
        some(fn: IteratorFn<TData, boolean>): void;
        map<TContext, TResult>(
            fn: IteratorFn<TData, TResult, TContext>,
            context: TContext
        ): List<TResult>;
        map<TResult>(fn: IteratorFn<TData, TResult>): List<TResult>;
        filter<TContext, TResult: TData>(
            fn: FilterFn<TData, TResult, TContext>,
            context: TContext
        ): List<TResult>;
        filter<TResult: TData>(fn: FilterFn<TData, TResult>): List<TResult>;
        filter<TContext>(
            fn: IteratorFn<TData, boolean, TContext>,
            context: TContext
        ): List<TData>;
        filter(fn: IteratorFn<TData, boolean>): List<TData>;
        clear(): void;
        copy(): List<TData>;
        prepend(item: ListItem<TData>): List<TData>;
        prependData(data: TData): List<TData>;
        append(item: ListItem<TData>): List<TData>;
        appendData(data: TData): List<TData>;
        insert(item: ListItem<TData>, before: ListItem<TData>): List<TData>;
        insertData(data: TData, before: ListItem<TData>): List<TData>;
        remove(item: ListItem<TData>): ListItem<TData>;
        push(item: TData): void;
        pop(): ListItem<TData> | void;
        unshift(data: TData): void;
        shift(): ListItem<TData> | void;
        prependList(list: List<TData>): List<TData>;
        appendList(list: List<TData>): List<TData>;
        insertList(list: List<TData>, before: ListItem<TData>): List<TData>;
        replace(
            oldItem: ListItem<TData>,
            newItemOrList: List<TData> | ListItem<TData>
        ): List<TData>;
    }
    declare export interface CssNodeCommon {
        type: string;
        loc?: CssLocation;
    }
    declare export type AnPlusB = {
        type: "AnPlusB",
        a: string | null,
        b: string | null
    } & CssNodeCommon;

    declare export type Atrule = {
        type: "Atrule",
        name: string,
        prelude: AtrulePrelude | Raw | null,
        block: Block | null
    } & CssNodeCommon;

    declare export type AtrulePlain = {
        type: "Atrule",
        name: string,
        prelude: AtrulePreludePlain | Raw | null,
        block: BlockPlain | null
    } & CssNodeCommon;

    declare export type AtrulePrelude = {
        type: "AtrulePrelude",
        children: List<CssNode>
    } & CssNodeCommon;

    declare export type AtrulePreludePlain = {
        type: "AtrulePrelude",
        children: CssNodePlain[]
    } & CssNodeCommon;

    declare export type AttributeSelector = {
        type: "AttributeSelector",
        name: Identifier,
        matcher: string | null,
        value: StringNode | Identifier | null,
        flags: string | null
    } & CssNodeCommon;

    declare export type Block = {
        type: "Block",
        children: List<CssNode>
    } & CssNodeCommon;

    declare export type BlockPlain = {
        type: "Block",
        children: CssNodePlain[]
    } & CssNodeCommon;

    declare export type Brackets = {
        type: "Brackets",
        children: List<CssNode>
    } & CssNodeCommon;

    declare export type BracketsPlain = {
        type: "Brackets",
        children: CssNodePlain[]
    } & CssNodeCommon;

    declare export type CDC = {
        type: "CDC"
    } & CssNodeCommon;

    declare export type CDO = {
        type: "CDO"
    } & CssNodeCommon;

    declare export type ClassSelector = {
        type: "ClassSelector",
        name: string
    } & CssNodeCommon;

    declare export type Combinator = {
        type: "Combinator",
        name: string
    } & CssNodeCommon;

    declare export type Comment = {
        type: "Comment",
        value: string
    } & CssNodeCommon;

    declare export type Declaration = {
        type: "Declaration",
        important: boolean | string,
        property: string,
        value: Value | Raw
    } & CssNodeCommon;

    declare export type DeclarationPlain = {
        type: "Declaration",
        important: boolean | string,
        property: string,
        value: ValuePlain | Raw
    } & CssNodeCommon;

    declare export type DeclarationList = {
        type: "DeclarationList",
        children: List<CssNode>
    } & CssNodeCommon;

    declare export type DeclarationListPlain = {
        type: "DeclarationList",
        children: CssNodePlain[]
    } & CssNodeCommon;

    declare export type Dimension = {
        type: "Dimension",
        value: string,
        unit: string
    } & CssNodeCommon;

    declare export type FunctionNode = {
        type: "Function",
        name: string,
        children: List<CssNode>
    } & CssNodeCommon;

    declare export type FunctionNodePlain = {
        type: "Function",
        name: string,
        children: CssNodePlain[]
    } & CssNodeCommon;

    declare export type HexColor = {
        type: "HexColor",
        value: string
    } & CssNodeCommon;

    declare export type IdSelector = {
        type: "IdSelector",
        name: string
    } & CssNodeCommon;

    declare export type Identifier = {
        type: "Identifier",
        name: string
    } & CssNodeCommon;

    declare export type MediaFeature = {
        type: "MediaFeature",
        name: string,
        value: Identifier | NumberNode | Dimension | Ratio | null
    } & CssNodeCommon;

    declare export type MediaQuery = {
        type: "MediaQuery",
        children: List<CssNode>
    } & CssNodeCommon;

    declare export type MediaQueryPlain = {
        type: "MediaQuery",
        children: CssNodePlain[]
    } & CssNodeCommon;

    declare export type MediaQueryList = {
        type: "MediaQueryList",
        children: List<CssNode>
    } & CssNodeCommon;

    declare export type MediaQueryListPlain = {
        type: "MediaQueryList",
        children: CssNodePlain[]
    } & CssNodeCommon;

    declare export type Nth = {
        type: "Nth",
        nth: AnPlusB | Identifier,
        selector: SelectorList | null
    } & CssNodeCommon;

    declare export type NthPlain = {
        type: "Nth",
        nth: AnPlusB | Identifier,
        selector: SelectorListPlain | null
    } & CssNodeCommon;

    declare export type NumberNode = {
        type: "Number",
        value: string
    } & CssNodeCommon;

    declare export type Operator = {
        type: "Operator",
        value: string
    } & CssNodeCommon;

    declare export type Parentheses = {
        type: "Parentheses",
        children: List<CssNode>
    } & CssNodeCommon;

    declare export type ParenthesesPlain = {
        type: "Parentheses",
        children: CssNodePlain[]
    } & CssNodeCommon;

    declare export type Percentage = {
        type: "Percentage",
        value: string
    } & CssNodeCommon;

    declare export type PseudoClassSelector = {
        type: "PseudoClassSelector",
        name: string,
        children: List<CssNode> | null
    } & CssNodeCommon;

    declare export type PseudoClassSelectorPlain = {
        type: "PseudoClassSelector",
        name: string,
        children: CssNodePlain[] | null
    } & CssNodeCommon;

    declare export type PseudoElementSelector = {
        type: "PseudoElementSelector",
        name: string,
        children: List<CssNode> | null
    } & CssNodeCommon;

    declare export type PseudoElementSelectorPlain = {
        type: "PseudoElementSelector",
        name: string,
        children: CssNodePlain[] | null
    } & CssNodeCommon;

    declare export type Ratio = {
        type: "Ratio",
        left: string,
        right: string
    } & CssNodeCommon;

    declare export type Raw = {
        type: "Raw",
        value: string
    } & CssNodeCommon;

    declare export type Rule = {
        type: "Rule",
        prelude: SelectorList | Raw,
        block: Block
    } & CssNodeCommon;

    declare export type RulePlain = {
        type: "Rule",
        prelude: SelectorListPlain | Raw,
        block: BlockPlain
    } & CssNodeCommon;

    declare export type Selector = {
        type: "Selector",
        children: List<CssNode>
    } & CssNodeCommon;

    declare export type SelectorPlain = {
        type: "Selector",
        children: CssNodePlain[]
    } & CssNodeCommon;

    declare export type SelectorList = {
        type: "SelectorList",
        children: List<CssNode>
    } & CssNodeCommon;

    declare export type SelectorListPlain = {
        type: "SelectorList",
        children: CssNodePlain[]
    } & CssNodeCommon;

    declare export type StringNode = {
        type: "String",
        value: string
    } & CssNodeCommon;

    declare export type StyleSheet = {
        type: "StyleSheet",
        children: List<CssNode>
    } & CssNodeCommon;

    declare export type StyleSheetPlain = {
        type: "StyleSheet",
        children: CssNodePlain[]
    } & CssNodeCommon;

    declare export type TypeSelector = {
        type: "TypeSelector",
        name: string
    } & CssNodeCommon;

    declare export type UnicodeRange = {
        type: "UnicodeRange",
        value: string
    } & CssNodeCommon;

    declare export type Url = {
        type: "Url",
        value: StringNode | Raw
    } & CssNodeCommon;

    declare export type Value = {
        type: "Value",
        children: List<CssNode>
    } & CssNodeCommon;

    declare export type ValuePlain = {
        type: "Value",
        children: CssNodePlain[]
    } & CssNodeCommon;

    declare export type WhiteSpace = {
        type: "WhiteSpace",
        value: string
    } & CssNodeCommon;

    declare export type CssNode =
        | AnPlusB
        | Atrule
        | AtrulePrelude
        | AttributeSelector
        | Block
        | Brackets
        | CDC
        | CDO
        | ClassSelector
        | Combinator
        | Comment
        | Declaration
        | DeclarationList
        | Dimension
        | FunctionNode
        | HexColor
        | IdSelector
        | Identifier
        | MediaFeature
        | MediaQuery
        | MediaQueryList
        | Nth
        | NumberNode
        | Operator
        | Parentheses
        | Percentage
        | PseudoClassSelector
        | PseudoElementSelector
        | Ratio
        | Raw
        | Rule
        | Selector
        | SelectorList
        | StringNode
        | StyleSheet
        | TypeSelector
        | UnicodeRange
        | Url
        | Value
        | WhiteSpace;
    declare export type CssNodePlain =
        | AnPlusB
        | AtrulePlain
        | AtrulePreludePlain
        | AttributeSelector
        | BlockPlain
        | BracketsPlain
        | CDC
        | CDO
        | ClassSelector
        | Combinator
        | Comment
        | DeclarationPlain
        | DeclarationListPlain
        | Dimension
        | FunctionNodePlain
        | HexColor
        | IdSelector
        | Identifier
        | MediaFeature
        | MediaQueryPlain
        | MediaQueryListPlain
        | NthPlain
        | NumberNode
        | Operator
        | ParenthesesPlain
        | Percentage
        | PseudoClassSelectorPlain
        | PseudoElementSelectorPlain
        | Ratio
        | Raw
        | RulePlain
        | SelectorPlain
        | SelectorListPlain
        | StringNode
        | StyleSheetPlain
        | TypeSelector
        | UnicodeRange
        | Url
        | ValuePlain
        | WhiteSpace;
    declare export type SyntaxParseError = {
        input: string,
        offset: number,
        rawMessage: string
    } & SyntaxError;

    declare export interface ParseOptions {
        context?: string;
        atrule?: string;
        positions?: boolean;
        onParseError?: (error: SyntaxParseError, fallbackNode: CssNode) => void;
        filename?: string;
        offset?: number;
        line?: number;
        column?: number;
        parseAtrulePrelude?: boolean;
        parseRulePrelude?: boolean;
        parseValue?: boolean;
        parseCustomProperty?: boolean;
    }
    declare export function parse(
        text: string,
        options?: ParseOptions
    ): CssNode;

    declare export interface GenerateHandlers {
        children: (node: CssNode, delimiter?: (node: CssNode) => void) => void;
        node: (node: CssNode) => void;
        chunk: (chunk: string) => void;
        result: () => string;
    }
    declare export interface GenerateOptions {
        sourceMap?: boolean;
        decorator?: (handlers: GenerateHandlers) => GenerateHandlers;
    }
    declare export function generate(
        ast: CssNode,
        options?: GenerateOptions
    ): string;

    declare export interface WalkContext {
        root: CssNode;
        stylesheet: StyleSheet;
        atrule: Atrule;
        atrulePrelude: AtrulePrelude;
        rule: Rule;
        selector: SelectorList;
        block: Block;
        declaration: Declaration;
        function: FunctionNode | PseudoClassSelector | PseudoElementSelector;
    }
    declare export type EnterOrLeaveFn = (
        node: CssNode,
        item: ListItem<CssNode>,
        list: List<CssNode>
    ) => void;
    declare export interface WalkOptions {
        enter?: EnterOrLeaveFn;
        leave?: EnterOrLeaveFn;
        visit?: string;
        reverse?: boolean;
    }
    declare export function walk(
        ast: CssNode,
        options: EnterOrLeaveFn | WalkOptions
    ): void;

    declare export interface Property {
        +basename: string;
        +name: string;
        +hack: string;
        +vendor: string;
        +prefix: string;
        +custom: boolean;
    }
    declare export function property(value: string): Property;

    declare export interface Keyword {
        +basename: string;
        +name: string;
        +vendor: string;
        +prefix: string;
        +custom: boolean;
    }
    declare export function keyword(value: string): Keyword;

    declare export function clone(node: CssNode): CssNode;

    declare export function fromPlainObject(node: CssNodePlain): CssNode;

    declare export function toPlainObject(node: CssNode): CssNodePlain;
}
