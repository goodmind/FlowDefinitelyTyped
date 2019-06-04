declare module "domelementtype" {
  declare var DomElementType: typeof npm$namespace$DomElementType;

  declare var npm$namespace$DomElementType: {
    isTag: typeof DomElementType$isTag,
    Text: typeof DomElementType$Text,
    Directive: typeof DomElementType$Directive,
    Comment: typeof DomElementType$Comment,
    Script: typeof DomElementType$Script,
    Style: typeof DomElementType$Style,
    Tag: typeof DomElementType$Tag,
    CDATA: typeof DomElementType$CDATA,
    Doctype: typeof DomElementType$Doctype
  };

  /**
   * *
   * Text
   */
  declare var DomElementType$Text: any; // "text";

  /**
   * *
   * <? ... ?>
   */
  declare var DomElementType$Directive: any; // "directive";

  /**
   * *
   * <!-- ... -->
   */
  declare var DomElementType$Comment: any; // "comment";

  /**
   * *
   * <script> tags
   */
  declare var DomElementType$Script: any; // "script";

  /**
   * *
   * <style> tags
   */
  declare var DomElementType$Style: any; // "style";

  /**
   * *
   * Any tag
   */
  declare var DomElementType$Tag: any; // "tag";

  /**
   * *
   * <![CDATA[ ... ]]>
   */
  declare var DomElementType$CDATA: any; // "cdata";

  /**
   * *
   * <!DOCTYPE ... >
   */
  declare var DomElementType$Doctype: any; // "doctype";

  /**
   * *
   * Checks whether element object is a tag
   */
  declare function DomElementType$isTag(elem: {
    type: string
  }): boolean;
}
