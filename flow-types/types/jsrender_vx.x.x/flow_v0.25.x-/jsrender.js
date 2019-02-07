declare module "jsrender" {
  declare interface JsRender$Converters {
    (name: string, converterFn: (value: any) => any): any;
    (namedConverters: any, parentTemplate?: any): any;
    html(valueToEncode: string): string;
    attr(valueToEncode: string): string;
    url(valueToEncode: string): string;
  }

  declare interface JsRender$Views {
    converters: JsRender$Converters;
    tags(name: string, tagFn: (value: any) => any): any;
    tags(name: string, tagOptions: any): any;
    tags(namedTags: any): any;
    helpers(name: string, helper: any): any;
    helpers(namedHelpers: any, parentTemplate?: any): any;
  }

  declare interface JsRender$Template {
    render(data?: any): string;
  }

  declare interface JsRender$NamedTemplate {
    (data?: any): string;
  }

  declare interface JsRender$Render {
    (data?: any, helpersOrContext?: any): string;
  }

  declare interface JsRender$RenderStatic {
    [index: string]: JsRender$NamedTemplate;
  }
  declare interface JQuery {
    render: JsRender$JsRender$Render;
  }
  declare interface JQueryStatic {
    render: JsRender$JsRender$RenderStatic;
    views: JsRender$JsRender$Views;
    templates(markupOrSelector: string): JsRender$JsRender$Template;
    templates(
      name: string,
      markupOrSelector: string
    ): JsRender$JsRender$Template;
    templates(namedTemplates: any): any;
  }
}
