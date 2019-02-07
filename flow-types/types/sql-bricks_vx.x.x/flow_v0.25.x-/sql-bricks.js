declare module "sql-bricks" {
  /**
   * Statement is an abstract base class for all statements (SELECT, INSERT, UPDATE, DELETE)
   * and should never be instantiated directly. It is exposed because it can be used with the
   * instanceof operator to easily determine whether something is a SQL Bricks statement: my_var instanceof Statement.
   */
  declare interface SqlBricks$Statement {
    /**
     * Clones a statement so that subsequent modifications do not affect the original statement.
     */
    clone(): this;

    /**
     * Returns the non-parameterized SQL for the statement. This is called implicitly by Javascript when using a Statement anywhere that a string is expected (string concatenation, Array.join(), etc).
     * While toString() is easy to use, it is not recommended in most cases because:
     *     It doesn't provide robust protection against SQL injection attacks (it just does basic escaping)
     *     It doesn't provide as much support for complex data types (objects, arrays, etc, are "stringified" before being passed to your database driver, which then has to interpret them correctly)
     *     It does not provide the same level of detail in error messages (see this issue)
     * For the above reasons, it is usually better to use toParams().
     */
    toString(): string;

    /**
 * Returns an object with two properties: a parameterized text string and a values array. The values are populated with anything on the right-hand side
 * of a WHERE criteria,as well as any values passed into an insert() or update() (they can be passed explicitly with val() or opted out of with sql())
 * @param options A placeholder option of '?%d' can be passed to generate placeholders compatible with node-sqlite3 (%d is replaced with the parameter #):
 * @example update('person', {'first_name': 'Fred'}).where({'last_name': 'Flintstone'}).toParams({placeholder: '?%d'});
// {"text": "UPDATE person SET first_name = ?1 WHERE last_name = ?2", "values": ["Fred", "Flintstone"]}
 */
    toParams(options?: {
      placeholder: string
    }): SqlBricks$SqlBricksParam;
  }

  declare interface SqlBricks$SqlBricksParam {
    text: string;
    values: any[];
  }

  declare type SqlBricks$TableName = string | SqlBricks$SelectStatement;

  declare interface SqlBricks$OnCriteria {
    [column: string]: string;
  }

  declare interface SqlBricks$WhereObject {
    [column: string]: any;
  }

  declare interface SqlBricks$WhereGroup {
    op?: string;
    expressions: SqlBricks$WhereExpression[];
  }

  declare interface SqlBricks$WhereBinary {
    op: string;
    col: string | SqlBricks$SelectStatement;
    val: any;
    quantifier: string;
  }

  /**
   * When a non-expression object is passed somewhere a whereExpression is expected,
   * each key/value pair will be ANDed together:
   */
  declare type SqlBricks$WhereExpression =
    | SqlBricks$WhereGroup
    | SqlBricks$WhereBinary
    | SqlBricks$WhereObject
    | string;

  /**
   * A SELECT statement
   */
  declare type SqlBricks$SelectStatement = {
    /**
     * Appends additional columns to an existing query.
     * @param columns can be passed as multiple arguments, a comma-delimited string or an array.
     */
    select(
      ...columns: Array<string | SqlBricks$SelectStatement>
    ): SqlBricks$SelectStatement,

    /**
     * Appends additional columns to an existing query.
     * @param columns can be passed as multiple arguments, a comma-delimited string or an array.
     */
    select(
      columns: string[] | SqlBricks$SelectStatement[]
    ): SqlBricks$SelectStatement,
    as(alias: string): SqlBricks$SelectStatement,
    distinct(
      ...columns: Array<string | SqlBricks$SelectStatement>
    ): SqlBricks$SelectStatement,
    distinct(
      columns: string[] | SqlBricks$SelectStatement[]
    ): SqlBricks$SelectStatement,

    /**
     * Makes the query a SELECT ... INTO query (which creates a new table with the results of the query).
     * @alias intoTable
     * @param tbl new table to create
     */
    into(tbl: SqlBricks$TableName): SqlBricks$SelectStatement,

    /**
     * Makes the query a SELECT ... INTO query (which creates a new table with the results of the query).
     * @alias into
     * @param tbl new table to create
     */
    intoTable(tbl: SqlBricks$TableName): SqlBricks$SelectStatement,
    intoTemp(tbl: SqlBricks$TableName): SqlBricks$SelectStatement,
    intoTempTable(tbl: SqlBricks$TableName): SqlBricks$SelectStatement,

    /**
     * Table names can be passed in as multiple string arguments, a comma-delimited string or an array.
     * @param tbls table names
     */
    from(...tbls: SqlBricks$TableName[]): SqlBricks$SelectStatement,

    /**
     * Table names can be passed in as multiple string arguments, a comma-delimited string or an array.
     * @param tbls array of table names
     */
    from(tbls: SqlBricks$TableName[]): SqlBricks$SelectStatement,

    /**
     * Adds the specified join to the query.
     * @alias innerJoin
     * @param tbl can include an alias after a space or after the 'AS' keyword ('my_table my_alias').
     * @param onCriteria is optional if a joinCriteria function has been supplied.
     */
    join(
      tbl: string,
      criteria?: SqlBricks$OnCriteria | string[] | SqlBricks$WhereExpression
    ): SqlBricks$SelectStatement,
    join(
      tbl: string,
      onCol1: string,
      onCol2: string
    ): SqlBricks$SelectStatement,
    join(firstTbl: string, ...otherTbls: string[]): SqlBricks$SelectStatement,
    leftJoin(
      tbl: string,
      criteria?: SqlBricks$OnCriteria | string[] | SqlBricks$WhereExpression
    ): SqlBricks$SelectStatement,
    leftJoin(
      tbl: string,
      onCol1: string,
      onCol2: string
    ): SqlBricks$SelectStatement,
    leftJoin(
      firstTbl: string,
      ...otherTbls: string[]
    ): SqlBricks$SelectStatement,
    rightJoin(
      tbl: string,
      criteria?: SqlBricks$OnCriteria | string[] | SqlBricks$WhereExpression
    ): SqlBricks$SelectStatement,
    rightJoin(
      tbl: string,
      onCol1: string,
      onCol2: string
    ): SqlBricks$SelectStatement,
    rightJoin(
      firstTbl: string,
      ...otherTbls: string[]
    ): SqlBricks$SelectStatement,
    fullJoin(
      tbl: string,
      criteria?: SqlBricks$OnCriteria | string[] | SqlBricks$WhereExpression
    ): SqlBricks$SelectStatement,
    fullJoin(
      tbl: string,
      onCol1: string,
      onCol2: string
    ): SqlBricks$SelectStatement,
    fullJoin(
      firstTbl: string,
      ...otherTbls: string[]
    ): SqlBricks$SelectStatement,
    crossJoin(
      tbl: string,
      criteria?: SqlBricks$OnCriteria | string[] | SqlBricks$WhereExpression
    ): SqlBricks$SelectStatement,
    crossJoin(
      tbl: string,
      onCol1: string,
      onCol2: string
    ): SqlBricks$SelectStatement,
    crossJoin(
      firstTbl: string,
      ...otherTbls: string[]
    ): SqlBricks$SelectStatement,
    innerJoin(
      tbl: string,
      criteria?: SqlBricks$OnCriteria | string[] | SqlBricks$WhereExpression
    ): SqlBricks$SelectStatement,
    innerJoin(
      tbl: string,
      onCol1: string,
      onCol2: string
    ): SqlBricks$SelectStatement,
    innerJoin(
      firstTbl: string,
      ...otherTbls: string[]
    ): SqlBricks$SelectStatement,
    leftOuterJoin(
      tbl: string,
      criteria?: SqlBricks$OnCriteria | string[] | SqlBricks$WhereExpression
    ): SqlBricks$SelectStatement,
    leftOuterJoin(
      tbl: string,
      onCol1: string,
      onCol2: string
    ): SqlBricks$SelectStatement,
    leftOuterJoin(
      firstTbl: string,
      ...otherTbls: string[]
    ): SqlBricks$SelectStatement,
    rightOuterJoin(
      tbl: string,
      criteria?: SqlBricks$OnCriteria | string[] | SqlBricks$WhereExpression
    ): SqlBricks$SelectStatement,
    rightOuterJoin(
      tbl: string,
      onCol1: string,
      onCol2: string
    ): SqlBricks$SelectStatement,
    rightOuterJoin(
      firstTbl: string,
      ...otherTbls: string[]
    ): SqlBricks$SelectStatement,
    fullOuterJoin(
      tbl: string,
      criteria?: SqlBricks$OnCriteria | string[] | SqlBricks$WhereExpression
    ): SqlBricks$SelectStatement,
    fullOuterJoin(
      tbl: string,
      onCol1: string,
      onCol2: string
    ): SqlBricks$SelectStatement,
    fullOuterJoin(
      firstTbl: string,
      ...otherTbls: string[]
    ): SqlBricks$SelectStatement,
    on(
      onCriteria: SqlBricks$OnCriteria | SqlBricks$WhereExpression
    ): SqlBricks$SelectStatement,
    on(onCol1: string, onCol2: string): SqlBricks$SelectStatement,

    /**
 * Joins using USING instead of ON.
 * @param columnList columnList can be passed in as one or more string arguments, a comma-delimited string, or an array.
 * @example select('*').from('person').join('address').using('address_id', 'country_id');
// SELECT * FROM person INNER JOIN address USING (address_id, country_id)
 */
    using(...columnList: string[]): SqlBricks$SelectStatement,
    using(columnList: string[]): SqlBricks$SelectStatement,

    /**
     * Adds the specified natural join to the query.
     * @param tbl can include an alias after a space or after the 'AS' keyword ('my_table my_alias').
     */
    naturalJoin(tbl: string): SqlBricks$SelectStatement,
    naturalLeftJoin(tbl: string): SqlBricks$SelectStatement,
    naturalRightJoin(tbl: string): SqlBricks$SelectStatement,
    naturalFullJoin(tbl: string): SqlBricks$SelectStatement,
    naturalInnerJoin(tbl: string): SqlBricks$SelectStatement,
    naturalLeftOuterJoin(tbl: string): SqlBricks$SelectStatement,
    naturalRightOuterJoin(tbl: string): SqlBricks$SelectStatement,
    naturalFullOuterJoin(tbl: string): SqlBricks$SelectStatement,
    where(column?: string | null, value?: any): SqlBricks$SelectStatement,
    where(...whereExpr: SqlBricks$WhereExpression[]): SqlBricks$SelectStatement,
    and(...options: any[]): SqlBricks$SelectStatement,

    /**
     * Sets or extends the GROUP BY columns.
     * @param columns can take multiple arguments, a single comma-delimited string or an array.
     */
    groupBy(...columns: string[]): SqlBricks$SelectStatement,
    groupBy(columns: string[]): SqlBricks$SelectStatement,
    having(column: string, value: string): SqlBricks$SelectStatement,
    having(whereExpr: SqlBricks$WhereExpression): SqlBricks$SelectStatement,

    /**
     * Sets or extends the list of columns in the ORDER BY clause.
     * @param columns can be passed as multiple arguments, a single comma-delimited string or an array.
     */
    orderBy(...columns: string[]): SqlBricks$SelectStatement,
    orderBy(columns: string[]): SqlBricks$SelectStatement,
    order(...columns: string[]): SqlBricks$SelectStatement,
    order(columns: string[]): SqlBricks$SelectStatement,
    forUpdate(...tbls: string[]): SqlBricks$SelectStatement,
    of(tlb: string): SqlBricks$SelectStatement,
    noWait(): SqlBricks$SelectStatement,
    union(...stmt: SqlBricks$Statement[]): SqlBricks$SelectStatement,
    intersect(...stmt: SqlBricks$Statement[]): SqlBricks$SelectStatement,
    minus(...stmt: SqlBricks$Statement[]): SqlBricks$SelectStatement,
    except(...stmt: SqlBricks$Statement[]): SqlBricks$SelectStatement
  } & SqlBricks$Statement;

  /**
   * An INSERT statement
   */
  declare type SqlBricks$InsertStatement = {
    into(
      tbl: SqlBricks$TableName,
      ...columns: any[]
    ): SqlBricks$InsertStatement,
    intoTable(
      tbl: SqlBricks$TableName,
      ...columns: any[]
    ): SqlBricks$InsertStatement,
    select(
      ...columns: Array<string | SqlBricks$SelectStatement>
    ): SqlBricks$SelectStatement,
    select(
      columns: string[] | SqlBricks$SelectStatement[]
    ): SqlBricks$SelectStatement,
    values(...values: any[]): SqlBricks$InsertStatement
  } & SqlBricks$Statement;

  /**
   * An UPDATE statement
   */
  declare type SqlBricks$UpdateStatement = {
    values(...values: any[]): SqlBricks$UpdateStatement,
    set(...values: any[]): SqlBricks$UpdateStatement,
    where(column?: string | null, value?: any): SqlBricks$UpdateStatement,
    where(...whereExpr: SqlBricks$WhereExpression[]): SqlBricks$UpdateStatement,
    and(column?: string | null, value?: any): SqlBricks$UpdateStatement,
    and(...whereExpr: SqlBricks$WhereExpression[]): SqlBricks$UpdateStatement
  } & SqlBricks$Statement;

  /**
   * A DELETE statement
   */
  declare type SqlBricks$DeleteStatement = {
    from(...tbls: string[]): SqlBricks$DeleteStatement,
    using(...columnList: string[]): SqlBricks$SelectStatement,
    using(columnList: string[]): SqlBricks$SelectStatement,
    where(column?: string | null, value?: any): SqlBricks$SelectStatement,
    where(...whereExpr: SqlBricks$WhereExpression[]): SqlBricks$SelectStatement,
    and(column?: string | null, value?: any): SqlBricks$SelectStatement,
    and(...whereExpr: SqlBricks$WhereExpression[]): SqlBricks$SelectStatement
  } & SqlBricks$Statement;

  declare interface SqlBricksFn {
    (...params: any[]): any;

    /**
     * Wraps a value (user-supplied string, number, boolean, etc) so that it can be passed into SQL Bricks
     * anywhere that a column is expected (the left-hand side of WHERE criteria and many other SQL Bricks APIs)
     * @param value value to be wraped
     */
    val(value: any): any;

    /**
 * Returns a new INSERT statement. It can be used with or without the new operator.
 * @alias insertInto
 * @param tbl table name
 * @param values a values object or a columns list. Passing a set of columns (as multiple arguments, a comma-delimited string or an array)
will put the statement into split keys/values mode, where a matching array of values is expected in values()
 * @example insert('person', {'first_name': 'Fred', 'last_name': 'Flintstone'});
// INSERT INTO person (first_name, last_name) VALUES ('Fred', 'Flintstone')
 */
    insert(tbl?: string, ...values: any[]): SqlBricks$SqlBricks$InsertStatement;

    /**
 * Returns a new INSERT statement. It can be used with or without the new operator.
 * @alias insert
 * @param tbl table name
 * @param values a values object or a columns list. Passing a set of columns (as multiple arguments, a comma-delimited string or an array)
will put the statement into split keys/values mode, where a matching array of values is expected in values()
 * @example insert('person', {'first_name': 'Fred', 'last_name': 'Flintstone'});
// INSERT INTO person (first_name, last_name) VALUES ('Fred', 'Flintstone')
 */
    insertInto(
      tbl?: string,
      ...values: any[]
    ): SqlBricks$SqlBricks$InsertStatement;

    /**
 * Returns a new select statement, seeded with a set of columns. It can be used with or without the new keyword.
 * @param columns it can be passed in here (or appended later via sel.select() or sel.distinct()) via multiple arguments
or a comma-delimited string or an array. If no columns are specified, toString() will default to SELECT *.
 */
    select(
      ...columns: Array<string | SqlBricks$SqlBricks$SelectStatement>
    ): SqlBricks$SqlBricks$SelectStatement;
    select(
      columns: string[] | SqlBricks$SqlBricks$SelectStatement[]
    ): SqlBricks$SqlBricks$SelectStatement;

    /**
     * Returns a new UPDATE statement. It can be used with or without the new operator.
     * @param tbl table name
     * @param values
     */
    update(tbl: string, ...values: any[]): SqlBricks$SqlBricks$UpdateStatement;

    /**
     * Returns a new DELETE statement. It can be used with or without the new operator.
     * @alias deleteFrom
     * @param tbl table name
     */
    delete(tbl?: string): SqlBricks$SqlBricks$DeleteStatement;

    /**
     * Returns a new DELETE statement. It can be used with or without the new operator.
     * @alias delete
     * @param tbl table name
     */
    deleteFrom(tbl?: string): SqlBricks$SqlBricks$DeleteStatement;

    /**
 * Registers a set of frequently-used table aliases with SQL Bricks.
 * These table aliases can then be used by themselves in from(), join(), etc
 * and SQL Bricks will automatically expand them to include the table name as well as the alias.
 * @param expansions
 * @example sql.aliasExpansions({'psn': 'person', 'addr': 'address', 'zip': 'zipcode', 'usr': 'user'});
select().from('psn').join('addr', {'psn.addr_id': 'addr.id'});
// SELECT * FROM person psn INNER JOIN address addr ON psn.addr_id = addr.id
 */
    aliasExpansions(expansions: {
      [tbl: string]: string
    }): void;

    /**
     * Sets a user-supplied function to automatically generate the .on() criteria for joins whenever it is not supplied explicitly.
     * @param func
     */
    joinCriteria(
      func?: (...args: any[]) => SqlBricks$SqlBricks$OnCriteria
    ): any;
    _extension(): any;
    prop: number;
    conversions: any;

    /**
     * Joins the passed expressions with AND
     * @param whereExprs
     */
    and(
      ...whereExprs: SqlBricks$SqlBricks$WhereExpression[]
    ): SqlBricks$SqlBricks$WhereGroup;

    /**
     * Joins the passed expressions with OR:
     * @param whereExprs
     */
    or(
      ...whereExprs: SqlBricks$SqlBricks$WhereExpression[]
    ): SqlBricks$SqlBricks$WhereGroup;

    /**
     * Negates the expression by wrapping it in NOT (...)
     * (if it is at the top level, the parentheses are unnecessary and will be omitted)
     * @param whereExpr
     */
    not(
      whereExpr: SqlBricks$SqlBricks$WhereExpression
    ): SqlBricks$SqlBricks$WhereGroup;

    /**
     * Generates a BETWEEN
     * @param column
     * @param value1
     * @param value2
     */
    between(
      column: string,
      value1: any,
      value2: any
    ): SqlBricks$SqlBricks$WhereExpression;
    isNull(column: string): SqlBricks$SqlBricks$WhereExpression;
    isNotNull(column: string): SqlBricks$SqlBricks$WhereExpression;
    like(
      column: string,
      value: any,
      escapeStr?: string
    ): SqlBricks$SqlBricks$WhereExpression;
    exists(stmt: any): SqlBricks$SqlBricks$WhereExpression;
    in(
      column: string,
      stmt: SqlBricks$SqlBricks$SelectStatement
    ): SqlBricks$SqlBricks$WhereExpression;
    in(column: string, ...values: any[]): SqlBricks$SqlBricks$WhereExpression;

    /**
     * Generates the appropriate relational operator (=, <>, <, <=, > or >=).
     * @param column column name or query result
     * @param value column value
     */
    eq(
      column: string | SqlBricks$SqlBricks$SelectStatement,
      value?: any
    ): SqlBricks$SqlBricks$WhereBinary;
    equal(
      column: string | SqlBricks$SqlBricks$SelectStatement,
      value?: any
    ): SqlBricks$SqlBricks$WhereBinary;
    notEq(
      column: string | SqlBricks$SqlBricks$SelectStatement,
      value?: any
    ): SqlBricks$SqlBricks$WhereBinary;
    lt(
      column: string | SqlBricks$SqlBricks$SelectStatement,
      value?: any
    ): SqlBricks$SqlBricks$WhereBinary;
    lte(
      column: string | SqlBricks$SqlBricks$SelectStatement,
      value?: any
    ): SqlBricks$SqlBricks$WhereBinary;
    gt(
      column: string | SqlBricks$SqlBricks$SelectStatement,
      value?: any
    ): SqlBricks$SqlBricks$WhereBinary;
    gte(
      column: string | SqlBricks$SqlBricks$SelectStatement,
      value?: any
    ): SqlBricks$SqlBricks$WhereBinary;
    eqAll(
      column: string | SqlBricks$SqlBricks$SelectStatement,
      value?: any
    ): SqlBricks$SqlBricks$WhereBinary;
    notEqAll(
      column: string | SqlBricks$SqlBricks$SelectStatement,
      value?: any
    ): SqlBricks$SqlBricks$WhereBinary;
    ltAll(
      column: string | SqlBricks$SqlBricks$SelectStatement,
      value?: any
    ): SqlBricks$SqlBricks$WhereBinary;
    lteAll(
      column: string | SqlBricks$SqlBricks$SelectStatement,
      value?: any
    ): SqlBricks$SqlBricks$WhereBinary;
    gtAll(
      column: string | SqlBricks$SqlBricks$SelectStatement,
      value?: any
    ): SqlBricks$SqlBricks$WhereBinary;
    gteAll(
      column: string | SqlBricks$SqlBricks$SelectStatement,
      value?: any
    ): SqlBricks$SqlBricks$WhereBinary;
    eqAny(
      column: string | SqlBricks$SqlBricks$SelectStatement,
      value?: any
    ): SqlBricks$SqlBricks$WhereBinary;
    notEqAny(
      column: string | SqlBricks$SqlBricks$SelectStatement,
      value?: any
    ): SqlBricks$SqlBricks$WhereBinary;
    ltAny(
      column: string | SqlBricks$SqlBricks$SelectStatement,
      value?: any
    ): SqlBricks$SqlBricks$WhereBinary;
    lteAny(
      column: string | SqlBricks$SqlBricks$SelectStatement,
      value?: any
    ): SqlBricks$SqlBricks$WhereBinary;
    gtAny(
      column: string | SqlBricks$SqlBricks$SelectStatement,
      value?: any
    ): SqlBricks$SqlBricks$WhereBinary;
    gteAny(
      column: string | SqlBricks$SqlBricks$SelectStatement,
      value?: any
    ): SqlBricks$SqlBricks$WhereBinary;
    eqSome(
      column: string | SqlBricks$SqlBricks$SelectStatement,
      value?: any
    ): SqlBricks$SqlBricks$WhereBinary;
    notEqSome(
      column: string | SqlBricks$SqlBricks$SelectStatement,
      value?: any
    ): SqlBricks$SqlBricks$WhereBinary;
    ltSome(
      column: string | SqlBricks$SqlBricks$SelectStatement,
      value?: any
    ): SqlBricks$SqlBricks$WhereBinary;
    lteSome(
      column: string | SqlBricks$SqlBricks$SelectStatement,
      value?: any
    ): SqlBricks$SqlBricks$WhereBinary;
    gtSome(
      column: string | SqlBricks$SqlBricks$SelectStatement,
      value?: any
    ): SqlBricks$SqlBricks$WhereBinary;
    gteSome(
      column: string | SqlBricks$SqlBricks$SelectStatement,
      value?: any
    ): SqlBricks$SqlBricks$WhereBinary;
  }
  declare var SqlBricks: SqlBricksFn;
  declare module.exports: typeof SqlBricks;
}
