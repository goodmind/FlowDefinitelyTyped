declare module 'json2md' {
        declare module.exports: typeof json2md

	
/**
 * Converts a JSON input to markdown.
 * @param data The input JSON data.
 * @param prefix A snippet to add before each line.
 * @return The generated markdown result.
 */
declare function json2md(
data: json2md$json2md$DataObject | json2md$json2md$DataObject[] | string | string[],
prefix?: string): string

	declare type json2md = typeof json2md;
	
      declare var npm$namespace$json2md: {
        
        converters: typeof json2md$converters,
      }
declare var json2md$converters: json2md$ConvertersMethods;

declare interface DefaultConverters$Converters {
[converter: string]: any,
blockquote: string | string[],
code: DefaultConverters$CodeInput,
h1: string | string[],
h2: string | string[],
h3: string | string[],
h4: string | string[],
h5: string | string[],
h6: string | string[],
img: DefaultConverters$ImgInput | DefaultConverters$ImgInput[],
ol: string[],
p: string | string[],
table: DefaultConverters$TableInput,
ul: string[]
} 

declare interface DefaultConverters$ImgInput {
title: string,
source: string
} 

declare interface DefaultConverters$CodeInput {
language?: string,
content: string | string[]
} 

declare interface DefaultConverters$TableInput {
headers: string[],
rows: Array<{
[column: string]: string
}> | string[][]
} 

declare type json2md$DataObject = $ObjMapi<DefaultConverters$DefaultConverters$Converters, <TConverter>(TConverter) => $ElementType<DefaultConverters$DefaultConverters$Converters, TConverter>>;

declare type json2md$ConverterCallback<TInput> = (input: TInput, json2md: json2md) => string;

declare type json2md$ConvertersMethods = $ObjMapi<DefaultConverters$DefaultConverters$Converters, <TConverter>(TConverter) => json2md$ConverterCallback<$ElementType<DefaultConverters$DefaultConverters$Converters, TConverter>>>;
    }
