declare module "@babel/traverse" {
  import typeof * as t from "@babel/types";

  declare export type Node = t.Node;
  declare export default function traverse<S>(
    parent: Node | Node[],
    opts: TraverseOptions<S>,
    scope: Scope,
    state: S,
    parentPath?: NodePath
  ): void;

  declare export default function traverse(
    parent: Node | Node[],
    opts: TraverseOptions,
    scope?: Scope,
    state?: any,
    parentPath?: NodePath
  ): void;

  declare export type TraverseOptions<S = Node> = {
    scope?: Scope,
    noScope?: boolean
  } & Visitor<S>;

  declare export class Scope {
    constructor(path: NodePath, parentScope?: Scope): this;
    path: NodePath;
    block: Node;
    parentBlock: Node;
    parent: Scope;
    hub: Hub;
    bindings: {
      [name: string]: Binding
    };

    /**
     * Traverse node with current scope and path.
     */
    traverse<S>(node: Node | Node[], opts: TraverseOptions<S>, state: S): void;
    traverse(node: Node | Node[], opts?: TraverseOptions, state?: any): void;

    /**
     * Generate a unique identifier and add it to the current scope.
     */
    generateDeclaredUidIdentifier(name?: string): t.Identifier;

    /**
     * Generate a unique identifier.
     */
    generateUidIdentifier(name?: string): t.Identifier;

    /**
     * Generate a unique `_id1` binding.
     */
    generateUid(name?: string): string;

    /**
     * Generate a unique identifier based on a node.
     */
    generateUidIdentifierBasedOnNode(
      parent: Node,
      defaultName?: string
    ): t.Identifier;

    /**
     * Determine whether evaluating the specific input `node` is a consequenceless reference. ie.
     * evaluating it wont result in potentially arbitrary code from being ran. The following are
     * whitelisted and determined not to cause side effects:
     *
     *   - `this` expressions
     *   - `super` expressions
     *   - Bound identifiers
     */
    isStatic(node: Node): boolean;

    /**
     * Possibly generate a memoised identifier if it is not static and has consequences.
     */
    maybeGenerateMemoised(node: Node, dontPush?: boolean): t.Identifier;
    checkBlockScopedCollisions(
      local: Node,
      kind: string,
      name: string,
      id: { [key: string]: any }
    ): void;
    rename(oldName: string, newName?: string, block?: Node): void;
    dump(): void;
    toArray(node: Node, i?: number): Node;
    registerDeclaration(path: NodePath): void;
    buildUndefinedNode(): Node;
    registerConstantViolation(path: NodePath): void;
    registerBinding(kind: string, path: NodePath, bindingPath?: NodePath): void;
    addGlobal(node: Node): void;
    hasUid(name: string): boolean;
    hasGlobal(name: string): boolean;
    hasReference(name: string): boolean;
    isPure(node: Node, constantsOnly?: boolean): boolean;
    setData(key: string, val: any): any;
    getData(key: string): any;
    removeData(key: string): void;
    push(opts: {
      id: t.LVal,
      init?: t.Expression,
      unique?: boolean,
      kind?: "var" | "let" | "const"
    }): void;
    getProgramParent(): Scope;
    getFunctionParent(): Scope | null;
    getBlockParent(): Scope;

    /**
     * Walks the scope tree and gathers **all** bindings.
     */
    getAllBindings(...kinds: string[]): { [key: string]: any };
    bindingIdentifierEquals(name: string, node: Node): boolean;
    getBinding(name: string): Binding | void;
    getOwnBinding(name: string): Binding | void;
    getBindingIdentifier(name: string): t.Identifier;
    getOwnBindingIdentifier(name: string): t.Identifier;
    hasOwnBinding(name: string): boolean;
    hasBinding(name: string, noGlobals?: boolean): boolean;
    parentHasBinding(name: string, noGlobals?: boolean): boolean;

    /**
     * Move a binding of `name` to another `scope`.
     */
    moveBindingTo(name: string, scope: Scope): void;
    removeOwnBinding(name: string): void;
    removeBinding(name: string): void;
  }
  declare export class Binding {
    constructor(opts: {
      existing: Binding,
      identifier: t.Identifier,
      scope: Scope,
      path: NodePath,
      kind: "var" | "let" | "const"
    }): this;
    identifier: t.Identifier;
    scope: Scope;
    path: NodePath;
    kind: "var" | "let" | "const" | "module";
    referenced: boolean;
    references: number;
    referencePaths: NodePath[];
    constant: boolean;
    constantViolations: NodePath[];
  }
  declare export type Visitor<S = {}> = VisitNodeObject<S, Node> &
    $ObjMapi<
      { [k: $ElementType<Node, "type">]: any },
      <Type>(
        Type
      ) => VisitNode<
        S,
        Extract<
          Node,
          {
            type: Type
          }
        >
      >
    > &
    $ObjMapi<t.Aliases, <K>(K) => VisitNode<S, $ElementType<t.Aliases, K>>>;
  declare export type VisitNode<S, P> =
    | VisitNodeFunction<S, P>
    | VisitNodeObject<S, P>;
  declare export type VisitNodeFunction<S, P> = (
    path: NodePath<P>,
    state: S
  ) => void;
  declare export interface VisitNodeObject<S, P> {
    enter?: VisitNodeFunction<S, P>;
    exit?: VisitNodeFunction<S, P>;
  }
  declare export class NodePath<T = Node> {
    constructor(hub: Hub, parent: Node): this;
    parent: Node;
    hub: Hub;
    contexts: TraversalContext[];
    data: { [key: string]: any };
    shouldSkip: boolean;
    shouldStop: boolean;
    removed: boolean;
    state: any;
    opts: { [key: string]: any };
    skipKeys: { [key: string]: any };
    parentPath: NodePath;
    context: TraversalContext;
    container: { [key: string]: any } | { [key: string]: any }[];
    listKey: string;
    inList: boolean;
    parentKey: string;
    key: string | number;
    node: T;
    scope: Scope;
    type: "There was Conditional Type, use $Call utility type";
    typeAnnotation: { [key: string]: any };
    getScope(scope: Scope): Scope;
    setData(key: string, val: any): any;
    getData(key: string, def?: any): any;
    buildCodeFrameError<TError: Error>(
      msg: string,
      Error?: (msg: string) => TError
    ): TError;
    traverse<T>(visitor: Visitor<T>, state: T): void;
    traverse(visitor: Visitor): void;
    set(key: string, node: Node): void;
    getPathLocation(): string;
    debug(buildMessage: () => string): void;

    /**
     * Call the provided `callback` with the `NodePath`s of all the parents.
     * When the `callback` returns a truthy value, we return that node path.
     */
    findParent(callback: (path: NodePath) => boolean): NodePath;
    find(callback: (path: NodePath) => boolean): NodePath;

    /**
     * Get the parent function of the current path.
     */
    getFunctionParent(): NodePath<t.Function>;

    /**
     * Walk up the tree until we hit a parent node path in a list.
     */
    getStatementParent(): NodePath<t.Statement>;

    /**
     * Get the deepest common ancestor and then from it, get the earliest relationship path
     * to that ancestor.
     *
     * Earliest is defined as being "before" all the other nodes in terms of list container
     * position and visiting key.
     */
    getEarliestCommonAncestorFrom(paths: NodePath[]): NodePath[];

    /**
     * Get the earliest path in the tree where the provided `paths` intersect.
     */
    getDeepestCommonAncestorFrom(
      paths: NodePath[],
      filter?: (deepest: Node, i: number, ancestries: NodePath[]) => NodePath
    ): NodePath;

    /**
     * Build an array of node paths containing the entire ancestry of the current node path.
     *
     * NOTE: The current node path is included in this.
     */
    getAncestry(): NodePath[];
    inType(...candidateTypes: string[]): boolean;

    /**
     * Infer the type of the current `NodePath`.
     */
    getTypeAnnotation(): t.FlowType;
    isBaseType(baseName: string, soft?: boolean): boolean;
    couldBeBaseType(name: string): boolean;
    baseTypeStrictlyMatches(right: NodePath): boolean;
    isGenericType(genericName: string): boolean;

    /**
     * Replace a node with an array of multiple. This method performs the following steps:
     *
     *   - Inherit the comments of first provided node with that of the current node.
     *   - Insert the provided nodes after the current node.
     *   - Remove the current node.
     */
    replaceWithMultiple(nodes: Node[]): void;

    /**
     * Parse a string as an expression and replace the current node with the result.
     *
     * NOTE: This is typically not a good idea to use. Building source strings when
     * transforming ASTs is an antipattern and SHOULD NOT be encouraged. Even if it's
     * easier to use, your transforms will be extremely brittle.
     */
    replaceWithSourceString(replacement: any): void;

    /**
     * Replace the current node with another.
     */
    replaceWith(replacement: Node | NodePath): void;

    /**
     * This method takes an array of statements nodes and then explodes it
     * into expressions. This method retains completion records which is
     * extremely important to retain original semantics.
     */
    replaceExpressionWithStatements(nodes: Node[]): Node;
    replaceInline(nodes: Node | Node[]): void;

    /**
     * Walk the input `node` and statically evaluate if it's truthy.
     *
     * Returning `true` when we're sure that the expression will evaluate to a
     * truthy value, `false` if we're sure that it will evaluate to a falsy
     * value and `undefined` if we aren't sure. Because of this please do not
     * rely on coercion when using this method and check with === if it's false.
     */
    evaluateTruthy(): boolean;

    /**
     * Walk the input `node` and statically evaluate it.
     *
     * Returns an object in the form `{ confident, value }`. `confident` indicates
     * whether or not we had to drop out of evaluating the expression because of
     * hitting an unknown node that we couldn't confidently find the value of.
     *
     * Example:
     *
     *    t.evaluate(parse("5 + 5")) // { confident: true, value: 10 }
     *    t.evaluate(parse("!true")) // { confident: true, value: false }
     *    t.evaluate(parse("foo + foo")) // { confident: false, value: undefined }
     */
    evaluate(): {
      confident: boolean,
      value: any
    };

    /**
     * Match the current node if it matches the provided `pattern`.
     *
     * For example, given the match `React.createClass` it would match the
     * parsed nodes of `React.createClass` and `React["createClass"]`.
     */
    matchesPattern(pattern: string, allowPartial?: boolean): boolean;

    /**
     * Check whether we have the input `key`. If the `key` references an array then we check
     * if the array has any items, otherwise we just check if it's falsy.
     */
    has(key: string): boolean;
    isStatic(): boolean;

    /**
     * Alias of `has`.
     */
    is(key: string): boolean;

    /**
     * Opposite of `has`.
     */
    isnt(key: string): boolean;

    /**
     * Check whether the path node `key` strict equals `value`.
     */
    equals(key: string, value: any): boolean;

    /**
     * Check the type against our stored internal type of the node. This is handy when a node has
     * been removed yet we still internally know the type and need it to calculate node replacement.
     */
    isNodeType(type: string): boolean;

    /**
     * This checks whether or not we're in one of the following positions:
     *
     *    for (KEY in right);
     *    for (KEY;;);
     *
     * This is because these spots allow VariableDeclarations AND normal expressions so we need
     * to tell the path replacement that it's ok to replace this with an expression.
     */
    canHaveVariableDeclarationOrExpression(): boolean;

    /**
     * This checks whether we are swapping an arrow function's body between an
     * expression and a block statement (or vice versa).
     *
     * This is because arrow functions may implicitly return an expression, which
     * is the same as containing a block statement.
     */
    canSwapBetweenExpressionAndStatement(replacement: Node): boolean;

    /**
     * Check whether the current path references a completion record
     */
    isCompletionRecord(allowInsideFunction?: boolean): boolean;

    /**
     * Check whether or not the current `key` allows either a single statement or block statement
     * so we can explode it if necessary.
     */
    isStatementOrBlock(): boolean;

    /**
     * Check if the currently assigned path references the `importName` of `moduleSource`.
     */
    referencesImport(moduleSource: string, importName: string): boolean;

    /**
     * Get the source code associated with this node.
     */
    getSource(): string;

    /**
     * Check if the current path will maybe execute before another path
     */
    willIMaybeExecuteBefore(path: NodePath): boolean;
    call(key: string): boolean;
    isBlacklisted(): boolean;
    visit(): boolean;
    skip(): void;
    skipKey(key: string): void;
    stop(): void;
    setScope(): void;
    setContext(context: TraversalContext): NodePath<T>;
    popContext(): void;
    pushContext(context: TraversalContext): void;
    remove(): void;

    /**
     * Insert the provided nodes before the current one.
     */
    insertBefore(nodes: Node | Node[]): any;

    /**
     * Insert the provided nodes after the current one. When inserting nodes after an
     * expression, ensure that the completion record is correct by pushing the current node.
     */
    insertAfter(nodes: Node | Node[]): any;

    /**
     * Update all sibling node paths after `fromIndex` by `incrementBy`.
     */
    updateSiblingKeys(fromIndex: number, incrementBy: number): void;

    /**
     * Hoist the current node to the highest scope possible and return a UID referencing it.
     */
    hoist(scope: Scope): void;
    getOpposite(): NodePath;
    getCompletionRecords(): NodePath[];
    getSibling(key: string | number): NodePath;
    getAllPrevSiblings(): NodePath[];
    getAllNextSiblings(): NodePath[];
    get<K: $Keys<T>>(
      key: K,
      context?: boolean | TraversalContext
    ): "There was Conditional Type, use $Call utility type";
    get(
      key: string,
      context?: boolean | TraversalContext
    ): NodePath | NodePath[];
    getBindingIdentifiers(duplicates?: boolean): Node[];
    getOuterBindingIdentifiers(duplicates?: boolean): Node[];

    /**
     * Share comments amongst siblings.
     */
    shareCommentsWithSiblings(): void;
    addComment(type: string, content: string, line?: boolean): void;

    /**
     * Give node `comments` of the specified `type`.
     */
    addComments(type: string, comments: any[]): void;
    isArrayExpression(opts?: { [key: string]: any }): boolean;
    isAssignmentExpression(opts?: { [key: string]: any }): boolean;
    isBinaryExpression(opts?: { [key: string]: any }): boolean;
    isDirective(opts?: { [key: string]: any }): boolean;
    isDirectiveLiteral(opts?: { [key: string]: any }): boolean;
    isBlockStatement(opts?: { [key: string]: any }): boolean;
    isBreakStatement(opts?: { [key: string]: any }): boolean;
    isCallExpression(opts?: { [key: string]: any }): boolean;
    isCatchClause(opts?: { [key: string]: any }): boolean;
    isConditionalExpression(opts?: { [key: string]: any }): boolean;
    isContinueStatement(opts?: { [key: string]: any }): boolean;
    isDebuggerStatement(opts?: { [key: string]: any }): boolean;
    isDoWhileStatement(opts?: { [key: string]: any }): boolean;
    isEmptyStatement(opts?: { [key: string]: any }): boolean;
    isExpressionStatement(opts?: { [key: string]: any }): boolean;
    isFile(opts?: { [key: string]: any }): boolean;
    isForInStatement(opts?: { [key: string]: any }): boolean;
    isForStatement(opts?: { [key: string]: any }): boolean;
    isFunctionDeclaration(opts?: { [key: string]: any }): boolean;
    isFunctionExpression(opts?: { [key: string]: any }): boolean;
    isIdentifier(opts?: { [key: string]: any }): boolean;
    isIfStatement(opts?: { [key: string]: any }): boolean;
    isLabeledStatement(opts?: { [key: string]: any }): boolean;
    isStringLiteral(opts?: { [key: string]: any }): boolean;
    isNumericLiteral(opts?: { [key: string]: any }): boolean;
    isNullLiteral(opts?: { [key: string]: any }): boolean;
    isBooleanLiteral(opts?: { [key: string]: any }): boolean;
    isRegExpLiteral(opts?: { [key: string]: any }): boolean;
    isLogicalExpression(opts?: { [key: string]: any }): boolean;
    isMemberExpression(opts?: { [key: string]: any }): boolean;
    isNewExpression(opts?: { [key: string]: any }): boolean;
    isProgram(opts?: { [key: string]: any }): boolean;
    isObjectExpression(opts?: { [key: string]: any }): boolean;
    isObjectMethod(opts?: { [key: string]: any }): boolean;
    isObjectProperty(opts?: { [key: string]: any }): boolean;
    isRestElement(opts?: { [key: string]: any }): boolean;
    isReturnStatement(opts?: { [key: string]: any }): boolean;
    isSequenceExpression(opts?: { [key: string]: any }): boolean;
    isSwitchCase(opts?: { [key: string]: any }): boolean;
    isSwitchStatement(opts?: { [key: string]: any }): boolean;
    isThisExpression(opts?: { [key: string]: any }): boolean;
    isThrowStatement(opts?: { [key: string]: any }): boolean;
    isTryStatement(opts?: { [key: string]: any }): boolean;
    isUnaryExpression(opts?: { [key: string]: any }): boolean;
    isUpdateExpression(opts?: { [key: string]: any }): boolean;
    isVariableDeclaration(opts?: { [key: string]: any }): boolean;
    isVariableDeclarator(opts?: { [key: string]: any }): boolean;
    isWhileStatement(opts?: { [key: string]: any }): boolean;
    isWithStatement(opts?: { [key: string]: any }): boolean;
    isAssignmentPattern(opts?: { [key: string]: any }): boolean;
    isArrayPattern(opts?: { [key: string]: any }): boolean;
    isArrowFunctionExpression(opts?: { [key: string]: any }): boolean;
    isClassBody(opts?: { [key: string]: any }): boolean;
    isClassDeclaration(opts?: { [key: string]: any }): boolean;
    isClassExpression(opts?: { [key: string]: any }): boolean;
    isExportAllDeclaration(opts?: { [key: string]: any }): boolean;
    isExportDefaultDeclaration(opts?: { [key: string]: any }): boolean;
    isExportNamedDeclaration(opts?: { [key: string]: any }): boolean;
    isExportSpecifier(opts?: { [key: string]: any }): boolean;
    isForOfStatement(opts?: { [key: string]: any }): boolean;
    isImportDeclaration(opts?: { [key: string]: any }): boolean;
    isImportDefaultSpecifier(opts?: { [key: string]: any }): boolean;
    isImportNamespaceSpecifier(opts?: { [key: string]: any }): boolean;
    isImportSpecifier(opts?: { [key: string]: any }): boolean;
    isMetaProperty(opts?: { [key: string]: any }): boolean;
    isClassMethod(opts?: { [key: string]: any }): boolean;
    isObjectPattern(opts?: { [key: string]: any }): boolean;
    isSpreadElement(opts?: { [key: string]: any }): boolean;
    isSuper(opts?: { [key: string]: any }): boolean;
    isTaggedTemplateExpression(opts?: { [key: string]: any }): boolean;
    isTemplateElement(opts?: { [key: string]: any }): boolean;
    isTemplateLiteral(opts?: { [key: string]: any }): boolean;
    isYieldExpression(opts?: { [key: string]: any }): boolean;
    isAnyTypeAnnotation(opts?: { [key: string]: any }): boolean;
    isArrayTypeAnnotation(opts?: { [key: string]: any }): boolean;
    isBooleanTypeAnnotation(opts?: { [key: string]: any }): boolean;
    isBooleanLiteralTypeAnnotation(opts?: { [key: string]: any }): boolean;
    isNullLiteralTypeAnnotation(opts?: { [key: string]: any }): boolean;
    isClassImplements(opts?: { [key: string]: any }): boolean;
    isClassProperty(opts?: { [key: string]: any }): boolean;
    isDeclareClass(opts?: { [key: string]: any }): boolean;
    isDeclareFunction(opts?: { [key: string]: any }): boolean;
    isDeclareInterface(opts?: { [key: string]: any }): boolean;
    isDeclareModule(opts?: { [key: string]: any }): boolean;
    isDeclareTypeAlias(opts?: { [key: string]: any }): boolean;
    isDeclareVariable(opts?: { [key: string]: any }): boolean;
    isFunctionTypeAnnotation(opts?: { [key: string]: any }): boolean;
    isFunctionTypeParam(opts?: { [key: string]: any }): boolean;
    isGenericTypeAnnotation(opts?: { [key: string]: any }): boolean;
    isInterfaceExtends(opts?: { [key: string]: any }): boolean;
    isInterfaceDeclaration(opts?: { [key: string]: any }): boolean;
    isIntersectionTypeAnnotation(opts?: { [key: string]: any }): boolean;
    isMixedTypeAnnotation(opts?: { [key: string]: any }): boolean;
    isNullableTypeAnnotation(opts?: { [key: string]: any }): boolean;
    isNumberTypeAnnotation(opts?: { [key: string]: any }): boolean;
    isStringLiteralTypeAnnotation(opts?: { [key: string]: any }): boolean;
    isStringTypeAnnotation(opts?: { [key: string]: any }): boolean;
    isThisTypeAnnotation(opts?: { [key: string]: any }): boolean;
    isTupleTypeAnnotation(opts?: { [key: string]: any }): boolean;
    isTypeofTypeAnnotation(opts?: { [key: string]: any }): boolean;
    isTypeAlias(opts?: { [key: string]: any }): boolean;
    isTypeAnnotation(opts?: { [key: string]: any }): boolean;
    isTypeCastExpression(opts?: { [key: string]: any }): boolean;
    isTypeParameterDeclaration(opts?: { [key: string]: any }): boolean;
    isTypeParameterInstantiation(opts?: { [key: string]: any }): boolean;
    isObjectTypeAnnotation(opts?: { [key: string]: any }): boolean;
    isObjectTypeCallProperty(opts?: { [key: string]: any }): boolean;
    isObjectTypeIndexer(opts?: { [key: string]: any }): boolean;
    isObjectTypeProperty(opts?: { [key: string]: any }): boolean;
    isQualifiedTypeIdentifier(opts?: { [key: string]: any }): boolean;
    isUnionTypeAnnotation(opts?: { [key: string]: any }): boolean;
    isVoidTypeAnnotation(opts?: { [key: string]: any }): boolean;
    isJSXAttribute(opts?: { [key: string]: any }): boolean;
    isJSXClosingElement(opts?: { [key: string]: any }): boolean;
    isJSXElement(opts?: { [key: string]: any }): boolean;
    isJSXEmptyExpression(opts?: { [key: string]: any }): boolean;
    isJSXExpressionContainer(opts?: { [key: string]: any }): boolean;
    isJSXIdentifier(opts?: { [key: string]: any }): boolean;
    isJSXMemberExpression(opts?: { [key: string]: any }): boolean;
    isJSXNamespacedName(opts?: { [key: string]: any }): boolean;
    isJSXOpeningElement(opts?: { [key: string]: any }): boolean;
    isJSXSpreadAttribute(opts?: { [key: string]: any }): boolean;
    isJSXText(opts?: { [key: string]: any }): boolean;
    isNoop(opts?: { [key: string]: any }): boolean;
    isParenthesizedExpression(opts?: { [key: string]: any }): boolean;
    isAwaitExpression(opts?: { [key: string]: any }): boolean;
    isBindExpression(opts?: { [key: string]: any }): boolean;
    isDecorator(opts?: { [key: string]: any }): boolean;
    isDoExpression(opts?: { [key: string]: any }): boolean;
    isExportDefaultSpecifier(opts?: { [key: string]: any }): boolean;
    isExportNamespaceSpecifier(opts?: { [key: string]: any }): boolean;
    isRestProperty(opts?: { [key: string]: any }): boolean;
    isSpreadProperty(opts?: { [key: string]: any }): boolean;
    isExpression(opts?: { [key: string]: any }): boolean;
    isBinary(opts?: { [key: string]: any }): boolean;
    isScopable(opts?: { [key: string]: any }): boolean;
    isBlockParent(opts?: { [key: string]: any }): boolean;
    isBlock(opts?: { [key: string]: any }): boolean;
    isStatement(opts?: { [key: string]: any }): boolean;
    isTerminatorless(opts?: { [key: string]: any }): boolean;
    isCompletionStatement(opts?: { [key: string]: any }): boolean;
    isConditional(opts?: { [key: string]: any }): boolean;
    isLoop(opts?: { [key: string]: any }): boolean;
    isWhile(opts?: { [key: string]: any }): boolean;
    isExpressionWrapper(opts?: { [key: string]: any }): boolean;
    isFor(opts?: { [key: string]: any }): boolean;
    isForXStatement(opts?: { [key: string]: any }): boolean;
    isFunction(opts?: { [key: string]: any }): boolean;
    isFunctionParent(opts?: { [key: string]: any }): boolean;
    isPureish(opts?: { [key: string]: any }): boolean;
    isDeclaration(opts?: { [key: string]: any }): boolean;
    isLVal(opts?: { [key: string]: any }): boolean;
    isLiteral(opts?: { [key: string]: any }): boolean;
    isImmutable(opts?: { [key: string]: any }): boolean;
    isUserWhitespacable(opts?: { [key: string]: any }): boolean;
    isMethod(opts?: { [key: string]: any }): boolean;
    isObjectMember(opts?: { [key: string]: any }): boolean;
    isProperty(opts?: { [key: string]: any }): boolean;
    isUnaryLike(opts?: { [key: string]: any }): boolean;
    isPattern(opts?: { [key: string]: any }): boolean;
    isClass(opts?: { [key: string]: any }): boolean;
    isModuleDeclaration(opts?: { [key: string]: any }): boolean;
    isExportDeclaration(opts?: { [key: string]: any }): boolean;
    isModuleSpecifier(opts?: { [key: string]: any }): boolean;
    isFlow(opts?: { [key: string]: any }): boolean;
    isFlowBaseAnnotation(opts?: { [key: string]: any }): boolean;
    isFlowDeclaration(opts?: { [key: string]: any }): boolean;
    isJSX(opts?: { [key: string]: any }): boolean;
    isNumberLiteral(opts?: { [key: string]: any }): boolean;
    isRegexLiteral(opts?: { [key: string]: any }): boolean;
    isReferencedIdentifier(opts?: { [key: string]: any }): boolean;
    isReferencedMemberExpression(opts?: { [key: string]: any }): boolean;
    isBindingIdentifier(opts?: { [key: string]: any }): boolean;
    isScope(opts?: { [key: string]: any }): boolean;
    isReferenced(opts?: { [key: string]: any }): boolean;
    isBlockScoped(opts?: { [key: string]: any }): boolean;
    isVar(opts?: { [key: string]: any }): boolean;
    isUser(opts?: { [key: string]: any }): boolean;
    isGenerated(opts?: { [key: string]: any }): boolean;
    isPure(opts?: { [key: string]: any }): boolean;
    assertArrayExpression(opts?: { [key: string]: any }): void;
    assertAssignmentExpression(opts?: { [key: string]: any }): void;
    assertBinaryExpression(opts?: { [key: string]: any }): void;
    assertDirective(opts?: { [key: string]: any }): void;
    assertDirectiveLiteral(opts?: { [key: string]: any }): void;
    assertBlockStatement(opts?: { [key: string]: any }): void;
    assertBreakStatement(opts?: { [key: string]: any }): void;
    assertCallExpression(opts?: { [key: string]: any }): void;
    assertCatchClause(opts?: { [key: string]: any }): void;
    assertConditionalExpression(opts?: { [key: string]: any }): void;
    assertContinueStatement(opts?: { [key: string]: any }): void;
    assertDebuggerStatement(opts?: { [key: string]: any }): void;
    assertDoWhileStatement(opts?: { [key: string]: any }): void;
    assertEmptyStatement(opts?: { [key: string]: any }): void;
    assertExpressionStatement(opts?: { [key: string]: any }): void;
    assertFile(opts?: { [key: string]: any }): void;
    assertForInStatement(opts?: { [key: string]: any }): void;
    assertForStatement(opts?: { [key: string]: any }): void;
    assertFunctionDeclaration(opts?: { [key: string]: any }): void;
    assertFunctionExpression(opts?: { [key: string]: any }): void;
    assertIdentifier(opts?: { [key: string]: any }): void;
    assertIfStatement(opts?: { [key: string]: any }): void;
    assertLabeledStatement(opts?: { [key: string]: any }): void;
    assertStringLiteral(opts?: { [key: string]: any }): void;
    assertNumericLiteral(opts?: { [key: string]: any }): void;
    assertNullLiteral(opts?: { [key: string]: any }): void;
    assertBooleanLiteral(opts?: { [key: string]: any }): void;
    assertRegExpLiteral(opts?: { [key: string]: any }): void;
    assertLogicalExpression(opts?: { [key: string]: any }): void;
    assertMemberExpression(opts?: { [key: string]: any }): void;
    assertNewExpression(opts?: { [key: string]: any }): void;
    assertProgram(opts?: { [key: string]: any }): void;
    assertObjectExpression(opts?: { [key: string]: any }): void;
    assertObjectMethod(opts?: { [key: string]: any }): void;
    assertObjectProperty(opts?: { [key: string]: any }): void;
    assertRestElement(opts?: { [key: string]: any }): void;
    assertReturnStatement(opts?: { [key: string]: any }): void;
    assertSequenceExpression(opts?: { [key: string]: any }): void;
    assertSwitchCase(opts?: { [key: string]: any }): void;
    assertSwitchStatement(opts?: { [key: string]: any }): void;
    assertThisExpression(opts?: { [key: string]: any }): void;
    assertThrowStatement(opts?: { [key: string]: any }): void;
    assertTryStatement(opts?: { [key: string]: any }): void;
    assertUnaryExpression(opts?: { [key: string]: any }): void;
    assertUpdateExpression(opts?: { [key: string]: any }): void;
    assertVariableDeclaration(opts?: { [key: string]: any }): void;
    assertVariableDeclarator(opts?: { [key: string]: any }): void;
    assertWhileStatement(opts?: { [key: string]: any }): void;
    assertWithStatement(opts?: { [key: string]: any }): void;
    assertAssignmentPattern(opts?: { [key: string]: any }): void;
    assertArrayPattern(opts?: { [key: string]: any }): void;
    assertArrowFunctionExpression(opts?: { [key: string]: any }): void;
    assertClassBody(opts?: { [key: string]: any }): void;
    assertClassDeclaration(opts?: { [key: string]: any }): void;
    assertClassExpression(opts?: { [key: string]: any }): void;
    assertExportAllDeclaration(opts?: { [key: string]: any }): void;
    assertExportDefaultDeclaration(opts?: { [key: string]: any }): void;
    assertExportNamedDeclaration(opts?: { [key: string]: any }): void;
    assertExportSpecifier(opts?: { [key: string]: any }): void;
    assertForOfStatement(opts?: { [key: string]: any }): void;
    assertImportDeclaration(opts?: { [key: string]: any }): void;
    assertImportDefaultSpecifier(opts?: { [key: string]: any }): void;
    assertImportNamespaceSpecifier(opts?: { [key: string]: any }): void;
    assertImportSpecifier(opts?: { [key: string]: any }): void;
    assertMetaProperty(opts?: { [key: string]: any }): void;
    assertClassMethod(opts?: { [key: string]: any }): void;
    assertObjectPattern(opts?: { [key: string]: any }): void;
    assertSpreadElement(opts?: { [key: string]: any }): void;
    assertSuper(opts?: { [key: string]: any }): void;
    assertTaggedTemplateExpression(opts?: { [key: string]: any }): void;
    assertTemplateElement(opts?: { [key: string]: any }): void;
    assertTemplateLiteral(opts?: { [key: string]: any }): void;
    assertYieldExpression(opts?: { [key: string]: any }): void;
    assertAnyTypeAnnotation(opts?: { [key: string]: any }): void;
    assertArrayTypeAnnotation(opts?: { [key: string]: any }): void;
    assertBooleanTypeAnnotation(opts?: { [key: string]: any }): void;
    assertBooleanLiteralTypeAnnotation(opts?: { [key: string]: any }): void;
    assertNullLiteralTypeAnnotation(opts?: { [key: string]: any }): void;
    assertClassImplements(opts?: { [key: string]: any }): void;
    assertClassProperty(opts?: { [key: string]: any }): void;
    assertDeclareClass(opts?: { [key: string]: any }): void;
    assertDeclareFunction(opts?: { [key: string]: any }): void;
    assertDeclareInterface(opts?: { [key: string]: any }): void;
    assertDeclareModule(opts?: { [key: string]: any }): void;
    assertDeclareTypeAlias(opts?: { [key: string]: any }): void;
    assertDeclareVariable(opts?: { [key: string]: any }): void;
    assertExistentialTypeParam(opts?: { [key: string]: any }): void;
    assertFunctionTypeAnnotation(opts?: { [key: string]: any }): void;
    assertFunctionTypeParam(opts?: { [key: string]: any }): void;
    assertGenericTypeAnnotation(opts?: { [key: string]: any }): void;
    assertInterfaceExtends(opts?: { [key: string]: any }): void;
    assertInterfaceDeclaration(opts?: { [key: string]: any }): void;
    assertIntersectionTypeAnnotation(opts?: { [key: string]: any }): void;
    assertMixedTypeAnnotation(opts?: { [key: string]: any }): void;
    assertNullableTypeAnnotation(opts?: { [key: string]: any }): void;
    assertNumericLiteralTypeAnnotation(opts?: { [key: string]: any }): void;
    assertNumberTypeAnnotation(opts?: { [key: string]: any }): void;
    assertStringLiteralTypeAnnotation(opts?: { [key: string]: any }): void;
    assertStringTypeAnnotation(opts?: { [key: string]: any }): void;
    assertThisTypeAnnotation(opts?: { [key: string]: any }): void;
    assertTupleTypeAnnotation(opts?: { [key: string]: any }): void;
    assertTypeofTypeAnnotation(opts?: { [key: string]: any }): void;
    assertTypeAlias(opts?: { [key: string]: any }): void;
    assertTypeAnnotation(opts?: { [key: string]: any }): void;
    assertTypeCastExpression(opts?: { [key: string]: any }): void;
    assertTypeParameterDeclaration(opts?: { [key: string]: any }): void;
    assertTypeParameterInstantiation(opts?: { [key: string]: any }): void;
    assertObjectTypeAnnotation(opts?: { [key: string]: any }): void;
    assertObjectTypeCallProperty(opts?: { [key: string]: any }): void;
    assertObjectTypeIndexer(opts?: { [key: string]: any }): void;
    assertObjectTypeProperty(opts?: { [key: string]: any }): void;
    assertQualifiedTypeIdentifier(opts?: { [key: string]: any }): void;
    assertUnionTypeAnnotation(opts?: { [key: string]: any }): void;
    assertVoidTypeAnnotation(opts?: { [key: string]: any }): void;
    assertJSXAttribute(opts?: { [key: string]: any }): void;
    assertJSXClosingElement(opts?: { [key: string]: any }): void;
    assertJSXElement(opts?: { [key: string]: any }): void;
    assertJSXEmptyExpression(opts?: { [key: string]: any }): void;
    assertJSXExpressionContainer(opts?: { [key: string]: any }): void;
    assertJSXIdentifier(opts?: { [key: string]: any }): void;
    assertJSXMemberExpression(opts?: { [key: string]: any }): void;
    assertJSXNamespacedName(opts?: { [key: string]: any }): void;
    assertJSXOpeningElement(opts?: { [key: string]: any }): void;
    assertJSXSpreadAttribute(opts?: { [key: string]: any }): void;
    assertJSXText(opts?: { [key: string]: any }): void;
    assertNoop(opts?: { [key: string]: any }): void;
    assertParenthesizedExpression(opts?: { [key: string]: any }): void;
    assertAwaitExpression(opts?: { [key: string]: any }): void;
    assertBindExpression(opts?: { [key: string]: any }): void;
    assertDecorator(opts?: { [key: string]: any }): void;
    assertDoExpression(opts?: { [key: string]: any }): void;
    assertExportDefaultSpecifier(opts?: { [key: string]: any }): void;
    assertExportNamespaceSpecifier(opts?: { [key: string]: any }): void;
    assertRestProperty(opts?: { [key: string]: any }): void;
    assertSpreadProperty(opts?: { [key: string]: any }): void;
    assertExpression(opts?: { [key: string]: any }): void;
    assertBinary(opts?: { [key: string]: any }): void;
    assertScopable(opts?: { [key: string]: any }): void;
    assertBlockParent(opts?: { [key: string]: any }): void;
    assertBlock(opts?: { [key: string]: any }): void;
    assertStatement(opts?: { [key: string]: any }): void;
    assertTerminatorless(opts?: { [key: string]: any }): void;
    assertCompletionStatement(opts?: { [key: string]: any }): void;
    assertConditional(opts?: { [key: string]: any }): void;
    assertLoop(opts?: { [key: string]: any }): void;
    assertWhile(opts?: { [key: string]: any }): void;
    assertExpressionWrapper(opts?: { [key: string]: any }): void;
    assertFor(opts?: { [key: string]: any }): void;
    assertForXStatement(opts?: { [key: string]: any }): void;
    assertFunction(opts?: { [key: string]: any }): void;
    assertFunctionParent(opts?: { [key: string]: any }): void;
    assertPureish(opts?: { [key: string]: any }): void;
    assertDeclaration(opts?: { [key: string]: any }): void;
    assertLVal(opts?: { [key: string]: any }): void;
    assertLiteral(opts?: { [key: string]: any }): void;
    assertImmutable(opts?: { [key: string]: any }): void;
    assertUserWhitespacable(opts?: { [key: string]: any }): void;
    assertMethod(opts?: { [key: string]: any }): void;
    assertObjectMember(opts?: { [key: string]: any }): void;
    assertProperty(opts?: { [key: string]: any }): void;
    assertUnaryLike(opts?: { [key: string]: any }): void;
    assertPattern(opts?: { [key: string]: any }): void;
    assertClass(opts?: { [key: string]: any }): void;
    assertModuleDeclaration(opts?: { [key: string]: any }): void;
    assertExportDeclaration(opts?: { [key: string]: any }): void;
    assertModuleSpecifier(opts?: { [key: string]: any }): void;
    assertFlow(opts?: { [key: string]: any }): void;
    assertFlowBaseAnnotation(opts?: { [key: string]: any }): void;
    assertFlowDeclaration(opts?: { [key: string]: any }): void;
    assertJSX(opts?: { [key: string]: any }): void;
    assertNumberLiteral(opts?: { [key: string]: any }): void;
    assertRegexLiteral(opts?: { [key: string]: any }): void;
  }
  declare export class Hub {
    constructor(file: any, options: any): this;
    file: any;
    options: any;
  }
  declare export interface TraversalContext {
    parentPath: NodePath;
    scope: Scope;
    state: any;
    opts: any;
  }
}
