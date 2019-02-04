declare module 'xsd-schema-validator' {
        declare export function validateXML(
xml: string | NodeJS.ReadableStream | {
file: string
},
pathToXsd: string,
callback: (
err: Error,
result: {
valid: boolean,
messages: string[],
result: string
}) => void): void

    }
