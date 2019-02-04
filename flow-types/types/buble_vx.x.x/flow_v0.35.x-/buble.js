declare module 'buble' {
        declare export interface TransformOptions {
target?: {
chrome?: 48
| 49
| 50
| 51
| 52
| 53
| 54
| 55
| 56
| 57
| 58
| 59
| 60
| 61
| 62
| 63
| 64
| 65
| 66
| 67
| 68
| 69
| 70
| 71,
firefox?: 43
| 44
| 45
| 46
| 47
| 48
| 49
| 50
| 51
| 52
| 53
| 54
| 55
| 56
| 57
| 58
| 59
| 60
| 61
| 62
| 63
| 64,
safari?: 8
| 9
| 10
| 10.1
| 11
| 11.1
| 12,
ie?: 8 | 9 | 10 | 11,
edge?: 12
| 13
| 14
| 15
| 16
| 17
| 18
| 19,
node?: 0.1
| 0.12
| 4
| 5
| 6
| 8
| 8.3
| 8.7
| 8.1
},
source?: string,
file?: string,
includeContent?: boolean,
jsx?: string,
objectAssign?: string | boolean,
transforms?: {
arrow?: boolean,
classes?: boolean,
collections?: boolean,
computedProperty?: boolean,
conciseMethodProperty?: boolean,
constLoop?: boolean,
dangerousForOf?: boolean,
dangerousTaggedTemplateString?: boolean,
defaultParameter?: boolean,
destructuring?: boolean,
forOf?: boolean,
generator?: boolean,
letConst?: boolean,
modules?: boolean,
numericLiteral?: boolean,
parameterDestructuring?: boolean,
reservedProperties?: boolean,
spreadRest?: boolean,
stickyRegExp?: boolean,
templateString?: boolean,
unicodeRegExp?: boolean
},
namedFunctionExpressions?: boolean
} 
	declare export interface TransformOutput {
code: string,
map: {
toString(): string,
toUrl(): string
}
} 
	declare export function transform(content: string, options?: TransformOptions): TransformOutput

    }
