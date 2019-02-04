declare var layouts: {
[id: string]: layout
};declare var lang_layout: layout;declare var convert_layout: {
by: layout,
de: layout,
es: layout,
he: layout,
kk: layout,
ru: layout,
uk: layout
};declare module 'convert-layout' {
        declare module.exports: typeof convert_layout

    }
declare module 'convert-layout/by' {
        declare module.exports: typeof lang_layout

    }
declare module 'convert-layout/de' {
        declare module.exports: typeof lang_layout

    }
declare module 'convert-layout/es' {
        declare module.exports: typeof lang_layout

    }
declare module 'convert-layout/he' {
        declare module.exports: typeof lang_layout

    }
declare module 'convert-layout/kk' {
        declare module.exports: typeof lang_layout

    }
declare module 'convert-layout/ru' {
        declare module.exports: typeof lang_layout

    }
declare module 'convert-layout/uk' {
        declare module.exports: typeof lang_layout

    }
declare interface layout {
toEn(s: string): string,
fromEn(s: string): string
} 