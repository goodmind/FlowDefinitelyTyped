declare type lineTagPropsFunction = (lineNumber: number) => React$DOMAttributes<HTMLElement>;declare interface SyntaxHighlighterProps {
language?: string,
style?: any,
customStyle?: any,
lineProps?: lineTagPropsFunction | React$DOMAttributes<HTMLElement>,
codeTagProps?: React$DOMAttributes<HTMLElement>,
useInlineStyles?: boolean,
showLineNumbers?: boolean,
startingLineNumber?: number,
lineNumberStyle?: any,
[spread: string]: any
} declare module 'react-syntax-highlighter' {
        import typeof SyntaxHighlighter from 'react-syntax-highlighter/light';

	declare export default typeof SyntaxHighlighter

    }
declare module 'react-syntax-highlighter/light' {
        import typeof * as React from 'react';

	declare export function registerLanguage(name: string, func: any): void

	declare export default class SyntaxHighlighter mixins React.Component<SyntaxHighlighterProps> {}
    }
declare module 'react-syntax-highlighter/prism' {
        import typeof SyntaxHighlighter from 'react-syntax-highlighter/prism-light';

	declare export default typeof SyntaxHighlighter

    }
declare module 'react-syntax-highlighter/prism-light' {
        import typeof * as React from 'react';

	declare export function registerLanguage(name: string, func: any): void

	declare export default class SyntaxHighlighter mixins React.Component<SyntaxHighlighterProps> {}
    }
declare module 'react-syntax-highlighter/dist/styles/hljs' {
        declare export {
        default as agate
      }from 'react-syntax-highlighter/dist/styles/hljs/agate';

	declare export {
        default as androidstudio
      }from 'react-syntax-highlighter/dist/styles/hljs/androidstudio';

	declare export {
        default as arduinoLight
      }from 'react-syntax-highlighter/dist/styles/hljs/arduino-light';

	declare export {
        default as arta
      }from 'react-syntax-highlighter/dist/styles/hljs/arta';

	declare export {
        default as ascetic
      }from 'react-syntax-highlighter/dist/styles/hljs/ascetic';

	declare export {
        default as atelierCaveDark
      }from 'react-syntax-highlighter/dist/styles/hljs/atelier-cave-dark';

	declare export {
        default as atelierCaveLight
      }from 'react-syntax-highlighter/dist/styles/hljs/atelier-cave-light';

	declare export {
        default as atelierDuneDark
      }from 'react-syntax-highlighter/dist/styles/hljs/atelier-dune-dark';

	declare export {
        default as atelierDuneLight
      }from 'react-syntax-highlighter/dist/styles/hljs/atelier-dune-light';

	declare export {
        default as atelierEstuaryDark
      }from 'react-syntax-highlighter/dist/styles/hljs/atelier-estuary-dark';

	declare export {
        default as atelierEstuaryLight
      }from 'react-syntax-highlighter/dist/styles/hljs/atelier-estuary-light';

	declare export {
        default as atelierForestDark
      }from 'react-syntax-highlighter/dist/styles/hljs/atelier-forest-dark';

	declare export {
        default as atelierForestLight
      }from 'react-syntax-highlighter/dist/styles/hljs/atelier-forest-light';

	declare export {
        default as atelierHeathDark
      }from 'react-syntax-highlighter/dist/styles/hljs/atelier-heath-dark';

	declare export {
        default as atelierHeathLight
      }from 'react-syntax-highlighter/dist/styles/hljs/atelier-heath-light';

	declare export {
        default as atelierLakesideDark
      }from 'react-syntax-highlighter/dist/styles/hljs/atelier-lakeside-dark';

	declare export {
        default as atelierLakesideLight
      }from 'react-syntax-highlighter/dist/styles/hljs/atelier-lakeside-light';

	declare export {
        default as atelierPlateauDark
      }from 'react-syntax-highlighter/dist/styles/hljs/atelier-plateau-dark';

	declare export {
        default as atelierPlateauLight
      }from 'react-syntax-highlighter/dist/styles/hljs/atelier-plateau-light';

	declare export {
        default as atelierSavannaDark
      }from 'react-syntax-highlighter/dist/styles/hljs/atelier-savanna-dark';

	declare export {
        default as atelierSavannaLight
      }from 'react-syntax-highlighter/dist/styles/hljs/atelier-savanna-light';

	declare export {
        default as atelierSeasideDark
      }from 'react-syntax-highlighter/dist/styles/hljs/atelier-seaside-dark';

	declare export {
        default as atelierSeasideLight
      }from 'react-syntax-highlighter/dist/styles/hljs/atelier-seaside-light';

	declare export {
        default as atelierSulphurpoolDark
      }from 'react-syntax-highlighter/dist/styles/hljs/atelier-sulphurpool-dark';

	declare export {
        default as atelierSulphurpoolLight
      }from 'react-syntax-highlighter/dist/styles/hljs/atelier-sulphurpool-light';

	declare export {
        default as atomOneDark
      }from 'react-syntax-highlighter/dist/styles/hljs/atom-one-dark';

	declare export {
        default as atomOneLight
      }from 'react-syntax-highlighter/dist/styles/hljs/atom-one-light';

	declare export {
        default as brownPaper
      }from 'react-syntax-highlighter/dist/styles/hljs/brown-paper';

	declare export {
        default as codepenEmbed
      }from 'react-syntax-highlighter/dist/styles/hljs/codepen-embed';

	declare export {
        default as colorBrewer
      }from 'react-syntax-highlighter/dist/styles/hljs/color-brewer';

	declare export {
        default as darcula
      }from 'react-syntax-highlighter/dist/styles/hljs/darcula';

	declare export {
        default as dark
      }from 'react-syntax-highlighter/dist/styles/hljs/dark';

	declare export {
        default as darkula
      }from 'react-syntax-highlighter/dist/styles/hljs/darkula';

	declare export {
        default as defaultStyle
      }from 'react-syntax-highlighter/dist/styles/hljs/default-style';

	declare export {
        default as docco
      }from 'react-syntax-highlighter/dist/styles/hljs/docco';

	declare export {
        default as dracula
      }from 'react-syntax-highlighter/dist/styles/hljs/dracula';

	declare export {
        default as far
      }from 'react-syntax-highlighter/dist/styles/hljs/far';

	declare export {
        default as foundation
      }from 'react-syntax-highlighter/dist/styles/hljs/foundation';

	declare export {
        default as githubGist
      }from 'react-syntax-highlighter/dist/styles/hljs/github-gist';

	declare export {
        default as github
      }from 'react-syntax-highlighter/dist/styles/hljs/github';

	declare export {
        default as googlecode
      }from 'react-syntax-highlighter/dist/styles/hljs/googlecode';

	declare export {
        default as grayscale
      }from 'react-syntax-highlighter/dist/styles/hljs/grayscale';

	declare export {
        default as gruvboxDark
      }from 'react-syntax-highlighter/dist/styles/hljs/gruvbox-dark';

	declare export {
        default as gruvboxLight
      }from 'react-syntax-highlighter/dist/styles/hljs/gruvbox-light';

	declare export {
        default as hopscotch
      }from 'react-syntax-highlighter/dist/styles/hljs/hopscotch';

	declare export {
        default as hybrid
      }from 'react-syntax-highlighter/dist/styles/hljs/hybrid';

	declare export {
        default as idea
      }from 'react-syntax-highlighter/dist/styles/hljs/idea';

	declare export {
        default as irBlack
      }from 'react-syntax-highlighter/dist/styles/hljs/ir-black';

	declare export {
        default as kimbieDark
      }from 'react-syntax-highlighter/dist/styles/hljs/kimbie.dark';

	declare export {
        default as kimbieLight
      }from 'react-syntax-highlighter/dist/styles/hljs/kimbie.light';

	declare export {
        default as magula
      }from 'react-syntax-highlighter/dist/styles/hljs/magula';

	declare export {
        default as monoBlue
      }from 'react-syntax-highlighter/dist/styles/hljs/mono-blue';

	declare export {
        default as monokaiSublime
      }from 'react-syntax-highlighter/dist/styles/hljs/monokai-sublime';

	declare export {
        default as monokai
      }from 'react-syntax-highlighter/dist/styles/hljs/monokai';

	declare export {
        default as obsidian
      }from 'react-syntax-highlighter/dist/styles/hljs/obsidian';

	declare export {
        default as ocean
      }from 'react-syntax-highlighter/dist/styles/hljs/ocean';

	declare export {
        default as paraisoDark
      }from 'react-syntax-highlighter/dist/styles/hljs/paraiso-dark';

	declare export {
        default as paraisoLight
      }from 'react-syntax-highlighter/dist/styles/hljs/paraiso-light';

	declare export {
        default as pojoaque
      }from 'react-syntax-highlighter/dist/styles/hljs/pojoaque';

	declare export {
        default as purebasic
      }from 'react-syntax-highlighter/dist/styles/hljs/purebasic';

	declare export {
        default as qtcreatorDark
      }from 'react-syntax-highlighter/dist/styles/hljs/qtcreator_dark';

	declare export {
        default as qtcreatorLight
      }from 'react-syntax-highlighter/dist/styles/hljs/qtcreator_light';

	declare export {
        default as railscasts
      }from 'react-syntax-highlighter/dist/styles/hljs/railscasts';

	declare export {
        default as rainbow
      }from 'react-syntax-highlighter/dist/styles/hljs/rainbow';

	declare export {
        default as routeros
      }from 'react-syntax-highlighter/dist/styles/hljs/routeros';

	declare export {
        default as schoolBook
      }from 'react-syntax-highlighter/dist/styles/hljs/school-book';

	declare export {
        default as solarizedDark
      }from 'react-syntax-highlighter/dist/styles/hljs/solarized-dark';

	declare export {
        default as solarizedLight
      }from 'react-syntax-highlighter/dist/styles/hljs/solarized-light';

	declare export {
        default as sunburst
      }from 'react-syntax-highlighter/dist/styles/hljs/sunburst';

	declare export {
        default as tomorrowNightBlue
      }from 'react-syntax-highlighter/dist/styles/hljs/tomorrow-night-blue';

	declare export {
        default as tomorrowNightBright
      }from 'react-syntax-highlighter/dist/styles/hljs/tomorrow-night-bright';

	declare export {
        default as tomorrowNightEighties
      }from 'react-syntax-highlighter/dist/styles/hljs/tomorrow-night-eighties';

	declare export {
        default as tomorrowNight
      }from 'react-syntax-highlighter/dist/styles/hljs/tomorrow-night';

	declare export {
        default as tomorrow
      }from 'react-syntax-highlighter/dist/styles/hljs/tomorrow';

	declare export {
        default as vs
      }from 'react-syntax-highlighter/dist/styles/hljs/vs';

	declare export {
        default as vs2015
      }from 'react-syntax-highlighter/dist/styles/hljs/vs2015';

	declare export {
        default as xcode
      }from 'react-syntax-highlighter/dist/styles/hljs/xcode';

	declare export {
        default as xt256
      }from 'react-syntax-highlighter/dist/styles/hljs/xt256';

	declare export {
        default as zenburn
      }from 'react-syntax-highlighter/dist/styles/hljs/zenburn';

    }
declare module 'react-syntax-highlighter/dist/styles/hljs/agate' {
        declare var style: any;
	declare export default typeof style

    }
declare module 'react-syntax-highlighter/dist/styles/hljs/androidstudio' {
        declare var style: any;
	declare export default typeof style

    }
declare module 'react-syntax-highlighter/dist/styles/hljs/arduino-light' {
        declare var style: any;
	declare export default typeof style

    }
declare module 'react-syntax-highlighter/dist/styles/hljs/arta' {
        declare var style: any;
	declare export default typeof style

    }
declare module 'react-syntax-highlighter/dist/styles/hljs/ascetic' {
        declare var style: any;
	declare export default typeof style

    }
declare module 'react-syntax-highlighter/dist/styles/hljs/atelier-cave-dark' {
        declare var style: any;
	declare export default typeof style

    }
declare module 'react-syntax-highlighter/dist/styles/hljs/atelier-cave-light' {
        declare var style: any;
	declare export default typeof style

    }
declare module 'react-syntax-highlighter/dist/styles/hljs/atelier-dune-dark' {
        declare var style: any;
	declare export default typeof style

    }
declare module 'react-syntax-highlighter/dist/styles/hljs/atelier-dune-light' {
        declare var style: any;
	declare export default typeof style

    }
declare module 'react-syntax-highlighter/dist/styles/hljs/atelier-estuary-dark' {
        declare var style: any;
	declare export default typeof style

    }
declare module 'react-syntax-highlighter/dist/styles/hljs/atelier-estuary-light' {
        declare var style: any;
	declare export default typeof style

    }
declare module 'react-syntax-highlighter/dist/styles/hljs/atelier-forest-dark' {
        declare var style: any;
	declare export default typeof style

    }
declare module 'react-syntax-highlighter/dist/styles/hljs/atelier-forest-light' {
        declare var style: any;
	declare export default typeof style

    }
declare module 'react-syntax-highlighter/dist/styles/hljs/atelier-heath-dark' {
        declare var style: any;
	declare export default typeof style

    }
declare module 'react-syntax-highlighter/dist/styles/hljs/atelier-heath-light' {
        declare var style: any;
	declare export default typeof style

    }
declare module 'react-syntax-highlighter/dist/styles/hljs/atelier-lakeside-dark' {
        declare var style: any;
	declare export default typeof style

    }
declare module 'react-syntax-highlighter/dist/styles/hljs/atelier-lakeside-light' {
        declare var style: any;
	declare export default typeof style

    }
declare module 'react-syntax-highlighter/dist/styles/hljs/atelier-plateau-dark' {
        declare var style: any;
	declare export default typeof style

    }
declare module 'react-syntax-highlighter/dist/styles/hljs/atelier-plateau-light' {
        declare var style: any;
	declare export default typeof style

    }
declare module 'react-syntax-highlighter/dist/styles/hljs/atelier-savanna-dark' {
        declare var style: any;
	declare export default typeof style

    }
declare module 'react-syntax-highlighter/dist/styles/hljs/atelier-savanna-light' {
        declare var style: any;
	declare export default typeof style

    }
declare module 'react-syntax-highlighter/dist/styles/hljs/atelier-seaside-dark' {
        declare var style: any;
	declare export default typeof style

    }
declare module 'react-syntax-highlighter/dist/styles/hljs/atelier-seaside-light' {
        declare var style: any;
	declare export default typeof style

    }
declare module 'react-syntax-highlighter/dist/styles/hljs/atelier-sulphurpool-dark' {
        declare var style: any;
	declare export default typeof style

    }
declare module 'react-syntax-highlighter/dist/styles/hljs/atelier-sulphurpool-light' {
        declare var style: any;
	declare export default typeof style

    }
declare module 'react-syntax-highlighter/dist/styles/hljs/atom-one-dark' {
        declare var style: any;
	declare export default typeof style

    }
declare module 'react-syntax-highlighter/dist/styles/hljs/atom-one-light' {
        declare var style: any;
	declare export default typeof style

    }
declare module 'react-syntax-highlighter/dist/styles/hljs/brown-paper' {
        declare var style: any;
	declare export default typeof style

    }
declare module 'react-syntax-highlighter/dist/styles/hljs/codepen-embed' {
        declare var style: any;
	declare export default typeof style

    }
declare module 'react-syntax-highlighter/dist/styles/hljs/color-brewer' {
        declare var style: any;
	declare export default typeof style

    }
declare module 'react-syntax-highlighter/dist/styles/hljs/darcula' {
        declare var style: any;
	declare export default typeof style

    }
declare module 'react-syntax-highlighter/dist/styles/hljs/dark' {
        declare var style: any;
	declare export default typeof style

    }
declare module 'react-syntax-highlighter/dist/styles/hljs/darkula' {
        declare var style: any;
	declare export default typeof style

    }
declare module 'react-syntax-highlighter/dist/styles/hljs/default-style' {
        declare var style: any;
	declare export default typeof style

    }
declare module 'react-syntax-highlighter/dist/styles/hljs/docco' {
        declare var style: any;
	declare export default typeof style

    }
declare module 'react-syntax-highlighter/dist/styles/hljs/dracula' {
        declare var style: any;
	declare export default typeof style

    }
declare module 'react-syntax-highlighter/dist/styles/hljs/far' {
        declare var style: any;
	declare export default typeof style

    }
declare module 'react-syntax-highlighter/dist/styles/hljs/foundation' {
        declare var style: any;
	declare export default typeof style

    }
declare module 'react-syntax-highlighter/dist/styles/hljs/github-gist' {
        declare var style: any;
	declare export default typeof style

    }
declare module 'react-syntax-highlighter/dist/styles/hljs/github' {
        declare var style: any;
	declare export default typeof style

    }
declare module 'react-syntax-highlighter/dist/styles/hljs/googlecode' {
        declare var style: any;
	declare export default typeof style

    }
declare module 'react-syntax-highlighter/dist/styles/hljs/grayscale' {
        declare var style: any;
	declare export default typeof style

    }
declare module 'react-syntax-highlighter/dist/styles/hljs/gruvbox-dark' {
        declare var style: any;
	declare export default typeof style

    }
declare module 'react-syntax-highlighter/dist/styles/hljs/gruvbox-light' {
        declare var style: any;
	declare export default typeof style

    }
declare module 'react-syntax-highlighter/dist/styles/hljs/hopscotch' {
        declare var style: any;
	declare export default typeof style

    }
declare module 'react-syntax-highlighter/dist/styles/hljs/hybrid' {
        declare var style: any;
	declare export default typeof style

    }
declare module 'react-syntax-highlighter/dist/styles/hljs/idea' {
        declare var style: any;
	declare export default typeof style

    }
declare module 'react-syntax-highlighter/dist/styles/hljs/ir-black' {
        declare var style: any;
	declare export default typeof style

    }
declare module 'react-syntax-highlighter/dist/styles/hljs/kimbie.dark' {
        declare var style: any;
	declare export default typeof style

    }
declare module 'react-syntax-highlighter/dist/styles/hljs/kimbie.light' {
        declare var style: any;
	declare export default typeof style

    }
declare module 'react-syntax-highlighter/dist/styles/hljs/magula' {
        declare var style: any;
	declare export default typeof style

    }
declare module 'react-syntax-highlighter/dist/styles/hljs/mono-blue' {
        declare var style: any;
	declare export default typeof style

    }
declare module 'react-syntax-highlighter/dist/styles/hljs/monokai-sublime' {
        declare var style: any;
	declare export default typeof style

    }
declare module 'react-syntax-highlighter/dist/styles/hljs/monokai' {
        declare var style: any;
	declare export default typeof style

    }
declare module 'react-syntax-highlighter/dist/styles/hljs/obsidian' {
        declare var style: any;
	declare export default typeof style

    }
declare module 'react-syntax-highlighter/dist/styles/hljs/ocean' {
        declare var style: any;
	declare export default typeof style

    }
declare module 'react-syntax-highlighter/dist/styles/hljs/paraiso-dark' {
        declare var style: any;
	declare export default typeof style

    }
declare module 'react-syntax-highlighter/dist/styles/hljs/paraiso-light' {
        declare var style: any;
	declare export default typeof style

    }
declare module 'react-syntax-highlighter/dist/styles/hljs/pojoaque' {
        declare var style: any;
	declare export default typeof style

    }
declare module 'react-syntax-highlighter/dist/styles/hljs/purebasic' {
        declare var style: any;
	declare export default typeof style

    }
declare module 'react-syntax-highlighter/dist/styles/hljs/qtcreator_dark' {
        declare var style: any;
	declare export default typeof style

    }
declare module 'react-syntax-highlighter/dist/styles/hljs/qtcreator_light' {
        declare var style: any;
	declare export default typeof style

    }
declare module 'react-syntax-highlighter/dist/styles/hljs/railscasts' {
        declare var style: any;
	declare export default typeof style

    }
declare module 'react-syntax-highlighter/dist/styles/hljs/rainbow' {
        declare var style: any;
	declare export default typeof style

    }
declare module 'react-syntax-highlighter/dist/styles/hljs/routeros' {
        declare var style: any;
	declare export default typeof style

    }
declare module 'react-syntax-highlighter/dist/styles/hljs/school-book' {
        declare var style: any;
	declare export default typeof style

    }
declare module 'react-syntax-highlighter/dist/styles/hljs/solarized-dark' {
        declare var style: any;
	declare export default typeof style

    }
declare module 'react-syntax-highlighter/dist/styles/hljs/solarized-light' {
        declare var style: any;
	declare export default typeof style

    }
declare module 'react-syntax-highlighter/dist/styles/hljs/sunburst' {
        declare var style: any;
	declare export default typeof style

    }
declare module 'react-syntax-highlighter/dist/styles/hljs/tomorrow-night-blue' {
        declare var style: any;
	declare export default typeof style

    }
declare module 'react-syntax-highlighter/dist/styles/hljs/tomorrow-night-bright' {
        declare var style: any;
	declare export default typeof style

    }
declare module 'react-syntax-highlighter/dist/styles/hljs/tomorrow-night-eighties' {
        declare var style: any;
	declare export default typeof style

    }
declare module 'react-syntax-highlighter/dist/styles/hljs/tomorrow-night' {
        declare var style: any;
	declare export default typeof style

    }
declare module 'react-syntax-highlighter/dist/styles/hljs/tomorrow' {
        declare var style: any;
	declare export default typeof style

    }
declare module 'react-syntax-highlighter/dist/styles/hljs/vs' {
        declare var style: any;
	declare export default typeof style

    }
declare module 'react-syntax-highlighter/dist/styles/hljs/vs2015' {
        declare var style: any;
	declare export default typeof style

    }
declare module 'react-syntax-highlighter/dist/styles/hljs/xcode' {
        declare var style: any;
	declare export default typeof style

    }
declare module 'react-syntax-highlighter/dist/styles/hljs/xt256' {
        declare var style: any;
	declare export default typeof style

    }
declare module 'react-syntax-highlighter/dist/styles/hljs/zenburn' {
        declare var style: any;
	declare export default typeof style

    }
declare module 'react-syntax-highlighter/dist/styles/prism' {
        declare export {
        default as atomDark
      }from 'react-syntax-highlighter/dist/styles/prism/atom-dark';

	declare export {
        default as base16AteliersulphurpoolLight
      }from 'react-syntax-highlighter/dist/styles/prism/base16-ateliersulphurpool.light';

	declare export {
        default as cb
      }from 'react-syntax-highlighter/dist/styles/prism/cb';

	declare export {
        default as coy
      }from 'react-syntax-highlighter/dist/styles/prism/coy';

	declare export {
        default as darcula
      }from 'react-syntax-highlighter/dist/styles/prism/darcula';

	declare export {
        default as dark
      }from 'react-syntax-highlighter/dist/styles/prism/dark';

	declare export {
        default as duotoneDark
      }from 'react-syntax-highlighter/dist/styles/prism/duotone-dark';

	declare export {
        default as duotoneEarth
      }from 'react-syntax-highlighter/dist/styles/prism/duotone-earth';

	declare export {
        default as duotoneForest
      }from 'react-syntax-highlighter/dist/styles/prism/duotone-forest';

	declare export {
        default as duotoneLight
      }from 'react-syntax-highlighter/dist/styles/prism/duotone-light';

	declare export {
        default as duotoneSea
      }from 'react-syntax-highlighter/dist/styles/prism/duotone-sea';

	declare export {
        default as duotoneSpace
      }from 'react-syntax-highlighter/dist/styles/prism/duotone-space';

	declare export {
        default as funky
      }from 'react-syntax-highlighter/dist/styles/prism/funky';

	declare export {
        default as ghcolors
      }from 'react-syntax-highlighter/dist/styles/prism/ghcolors';

	declare export {
        default as hopscotch
      }from 'react-syntax-highlighter/dist/styles/prism/hopscotch';

	declare export {
        default as okaidia
      }from 'react-syntax-highlighter/dist/styles/prism/okaidia';

	declare export {
        default as pojoaque
      }from 'react-syntax-highlighter/dist/styles/prism/pojoaque';

	declare export {
        default as prism
      }from 'react-syntax-highlighter/dist/styles/prism/prism';

	declare export {
        default as solarizedlight
      }from 'react-syntax-highlighter/dist/styles/prism/solarizedlight';

	declare export {
        default as tomorrow
      }from 'react-syntax-highlighter/dist/styles/prism/tomorrow';

	declare export {
        default as twilight
      }from 'react-syntax-highlighter/dist/styles/prism/twilight';

	declare export {
        default as vs
      }from 'react-syntax-highlighter/dist/styles/prism/vs';

	declare export {
        default as xonokai
      }from 'react-syntax-highlighter/dist/styles/prism/xonokai';

    }
declare module 'react-syntax-highlighter/dist/styles/prism/atom-dark' {
        declare var style: any;
	declare export default typeof style

    }
declare module 'react-syntax-highlighter/dist/styles/prism/base16-ateliersulphurpool.light' {
        declare var style: any;
	declare export default typeof style

    }
declare module 'react-syntax-highlighter/dist/styles/prism/cb' {
        declare var style: any;
	declare export default typeof style

    }
declare module 'react-syntax-highlighter/dist/styles/prism/coy' {
        declare var style: any;
	declare export default typeof style

    }
declare module 'react-syntax-highlighter/dist/styles/prism/darcula' {
        declare var style: any;
	declare export default typeof style

    }
declare module 'react-syntax-highlighter/dist/styles/prism/dark' {
        declare var style: any;
	declare export default typeof style

    }
declare module 'react-syntax-highlighter/dist/styles/prism/duotone-dark' {
        declare var style: any;
	declare export default typeof style

    }
declare module 'react-syntax-highlighter/dist/styles/prism/duotone-earth' {
        declare var style: any;
	declare export default typeof style

    }
declare module 'react-syntax-highlighter/dist/styles/prism/duotone-forest' {
        declare var style: any;
	declare export default typeof style

    }
declare module 'react-syntax-highlighter/dist/styles/prism/duotone-light' {
        declare var style: any;
	declare export default typeof style

    }
declare module 'react-syntax-highlighter/dist/styles/prism/duotone-sea' {
        declare var style: any;
	declare export default typeof style

    }
declare module 'react-syntax-highlighter/dist/styles/prism/duotone-space' {
        declare var style: any;
	declare export default typeof style

    }
declare module 'react-syntax-highlighter/dist/styles/prism/funky' {
        declare var style: any;
	declare export default typeof style

    }
declare module 'react-syntax-highlighter/dist/styles/prism/ghcolors' {
        declare var style: any;
	declare export default typeof style

    }
declare module 'react-syntax-highlighter/dist/styles/prism/hopscotch' {
        declare var style: any;
	declare export default typeof style

    }
declare module 'react-syntax-highlighter/dist/styles/prism/okaidia' {
        declare var style: any;
	declare export default typeof style

    }
declare module 'react-syntax-highlighter/dist/styles/prism/pojoaque' {
        declare var style: any;
	declare export default typeof style

    }
declare module 'react-syntax-highlighter/dist/styles/prism/prism' {
        declare var style: any;
	declare export default typeof style

    }
declare module 'react-syntax-highlighter/dist/styles/prism/solarizedlight' {
        declare var style: any;
	declare export default typeof style

    }
declare module 'react-syntax-highlighter/dist/styles/prism/tomorrow' {
        declare var style: any;
	declare export default typeof style

    }
declare module 'react-syntax-highlighter/dist/styles/prism/twilight' {
        declare var style: any;
	declare export default typeof style

    }
declare module 'react-syntax-highlighter/dist/styles/prism/vs' {
        declare var style: any;
	declare export default typeof style

    }
declare module 'react-syntax-highlighter/dist/styles/prism/xonokai' {
        declare var style: any;
	declare export default typeof style

    }
declare module 'react-syntax-highlighter/languages/prism/abap' {
        declare var language: any;
	declare export default typeof language

    }
declare module 'react-syntax-highlighter/languages/prism/actionscript' {
        declare var language: any;
	declare export default typeof language

    }
declare module 'react-syntax-highlighter/languages/prism/ada' {
        declare var language: any;
	declare export default typeof language

    }
declare module 'react-syntax-highlighter/languages/prism/apacheconf' {
        declare var language: any;
	declare export default typeof language

    }
declare module 'react-syntax-highlighter/languages/prism/apl' {
        declare var language: any;
	declare export default typeof language

    }
declare module 'react-syntax-highlighter/languages/prism/applescript' {
        declare var language: any;
	declare export default typeof language

    }
declare module 'react-syntax-highlighter/languages/prism/arduino' {
        declare var language: any;
	declare export default typeof language

    }
declare module 'react-syntax-highlighter/languages/prism/arff' {
        declare var language: any;
	declare export default typeof language

    }
declare module 'react-syntax-highlighter/languages/prism/asciidoc' {
        declare var language: any;
	declare export default typeof language

    }
declare module 'react-syntax-highlighter/languages/prism/asm6502' {
        declare var language: any;
	declare export default typeof language

    }
declare module 'react-syntax-highlighter/languages/prism/aspnet' {
        declare var language: any;
	declare export default typeof language

    }
declare module 'react-syntax-highlighter/languages/prism/autohotkey' {
        declare var language: any;
	declare export default typeof language

    }
declare module 'react-syntax-highlighter/languages/prism/autoit' {
        declare var language: any;
	declare export default typeof language

    }
declare module 'react-syntax-highlighter/languages/prism/bash' {
        declare var language: any;
	declare export default typeof language

    }
declare module 'react-syntax-highlighter/languages/prism/basic' {
        declare var language: any;
	declare export default typeof language

    }
declare module 'react-syntax-highlighter/languages/prism/batch' {
        declare var language: any;
	declare export default typeof language

    }
declare module 'react-syntax-highlighter/languages/prism/bison' {
        declare var language: any;
	declare export default typeof language

    }
declare module 'react-syntax-highlighter/languages/prism/brainfuck' {
        declare var language: any;
	declare export default typeof language

    }
declare module 'react-syntax-highlighter/languages/prism/bro' {
        declare var language: any;
	declare export default typeof language

    }
declare module 'react-syntax-highlighter/languages/prism/c' {
        declare var language: any;
	declare export default typeof language

    }
declare module 'react-syntax-highlighter/languages/prism/clike' {
        declare var language: any;
	declare export default typeof language

    }
declare module 'react-syntax-highlighter/languages/prism/clojure' {
        declare var language: any;
	declare export default typeof language

    }
declare module 'react-syntax-highlighter/languages/prism/coffeescript' {
        declare var language: any;
	declare export default typeof language

    }
declare module 'react-syntax-highlighter/languages/prism/cpp' {
        declare var language: any;
	declare export default typeof language

    }
declare module 'react-syntax-highlighter/languages/prism/crystal' {
        declare var language: any;
	declare export default typeof language

    }
declare module 'react-syntax-highlighter/languages/prism/csharp' {
        declare var language: any;
	declare export default typeof language

    }
declare module 'react-syntax-highlighter/languages/prism/csp' {
        declare var language: any;
	declare export default typeof language

    }
declare module 'react-syntax-highlighter/languages/prism/cssExtras' {
        declare var language: any;
	declare export default typeof language

    }
declare module 'react-syntax-highlighter/languages/prism/css' {
        declare var language: any;
	declare export default typeof language

    }
declare module 'react-syntax-highlighter/languages/prism/d' {
        declare var language: any;
	declare export default typeof language

    }
declare module 'react-syntax-highlighter/languages/prism/dart' {
        declare var language: any;
	declare export default typeof language

    }
declare module 'react-syntax-highlighter/languages/prism/diff' {
        declare var language: any;
	declare export default typeof language

    }
declare module 'react-syntax-highlighter/languages/prism/django' {
        declare var language: any;
	declare export default typeof language

    }
declare module 'react-syntax-highlighter/languages/prism/docker' {
        declare var language: any;
	declare export default typeof language

    }
declare module 'react-syntax-highlighter/languages/prism/eiffel' {
        declare var language: any;
	declare export default typeof language

    }
declare module 'react-syntax-highlighter/languages/prism/elixir' {
        declare var language: any;
	declare export default typeof language

    }
declare module 'react-syntax-highlighter/languages/prism/elm' {
        declare var language: any;
	declare export default typeof language

    }
declare module 'react-syntax-highlighter/languages/prism/erb' {
        declare var language: any;
	declare export default typeof language

    }
declare module 'react-syntax-highlighter/languages/prism/erlang' {
        declare var language: any;
	declare export default typeof language

    }
declare module 'react-syntax-highlighter/languages/prism/flow' {
        declare var language: any;
	declare export default typeof language

    }
declare module 'react-syntax-highlighter/languages/prism/fortran' {
        declare var language: any;
	declare export default typeof language

    }
declare module 'react-syntax-highlighter/languages/prism/fsharp' {
        declare var language: any;
	declare export default typeof language

    }
declare module 'react-syntax-highlighter/languages/prism/gedcom' {
        declare var language: any;
	declare export default typeof language

    }
declare module 'react-syntax-highlighter/languages/prism/gherkin' {
        declare var language: any;
	declare export default typeof language

    }
declare module 'react-syntax-highlighter/languages/prism/git' {
        declare var language: any;
	declare export default typeof language

    }
declare module 'react-syntax-highlighter/languages/prism/glsl' {
        declare var language: any;
	declare export default typeof language

    }
declare module 'react-syntax-highlighter/languages/prism/go' {
        declare var language: any;
	declare export default typeof language

    }
declare module 'react-syntax-highlighter/languages/prism/graphql' {
        declare var language: any;
	declare export default typeof language

    }
declare module 'react-syntax-highlighter/languages/prism/groovy' {
        declare var language: any;
	declare export default typeof language

    }
declare module 'react-syntax-highlighter/languages/prism/haml' {
        declare var language: any;
	declare export default typeof language

    }
declare module 'react-syntax-highlighter/languages/prism/handlebars' {
        declare var language: any;
	declare export default typeof language

    }
declare module 'react-syntax-highlighter/languages/prism/haskell' {
        declare var language: any;
	declare export default typeof language

    }
declare module 'react-syntax-highlighter/languages/prism/haxe' {
        declare var language: any;
	declare export default typeof language

    }
declare module 'react-syntax-highlighter/languages/prism/hpkp' {
        declare var language: any;
	declare export default typeof language

    }
declare module 'react-syntax-highlighter/languages/prism/hsts' {
        declare var language: any;
	declare export default typeof language

    }
declare module 'react-syntax-highlighter/languages/prism/http' {
        declare var language: any;
	declare export default typeof language

    }
declare module 'react-syntax-highlighter/languages/prism/ichigojam' {
        declare var language: any;
	declare export default typeof language

    }
declare module 'react-syntax-highlighter/languages/prism/icon' {
        declare var language: any;
	declare export default typeof language

    }
declare module 'react-syntax-highlighter/languages/prism/inform7' {
        declare var language: any;
	declare export default typeof language

    }
declare module 'react-syntax-highlighter/languages/prism/ini' {
        declare var language: any;
	declare export default typeof language

    }
declare module 'react-syntax-highlighter/languages/prism/io' {
        declare var language: any;
	declare export default typeof language

    }
declare module 'react-syntax-highlighter/languages/prism/j' {
        declare var language: any;
	declare export default typeof language

    }
declare module 'react-syntax-highlighter/languages/prism/java' {
        declare var language: any;
	declare export default typeof language

    }
declare module 'react-syntax-highlighter/languages/prism/javascript' {
        declare var language: any;
	declare export default typeof language

    }
declare module 'react-syntax-highlighter/languages/prism/jolie' {
        declare var language: any;
	declare export default typeof language

    }
declare module 'react-syntax-highlighter/languages/prism/json' {
        declare var language: any;
	declare export default typeof language

    }
declare module 'react-syntax-highlighter/languages/prism/jsx' {
        declare var language: any;
	declare export default typeof language

    }
declare module 'react-syntax-highlighter/languages/prism/julia' {
        declare var language: any;
	declare export default typeof language

    }
declare module 'react-syntax-highlighter/languages/prism/keyman' {
        declare var language: any;
	declare export default typeof language

    }
declare module 'react-syntax-highlighter/languages/prism/kotlin' {
        declare var language: any;
	declare export default typeof language

    }
declare module 'react-syntax-highlighter/languages/prism/latex' {
        declare var language: any;
	declare export default typeof language

    }
declare module 'react-syntax-highlighter/languages/prism/less' {
        declare var language: any;
	declare export default typeof language

    }
declare module 'react-syntax-highlighter/languages/prism/liquid' {
        declare var language: any;
	declare export default typeof language

    }
declare module 'react-syntax-highlighter/languages/prism/lisp' {
        declare var language: any;
	declare export default typeof language

    }
declare module 'react-syntax-highlighter/languages/prism/livescript' {
        declare var language: any;
	declare export default typeof language

    }
declare module 'react-syntax-highlighter/languages/prism/lolcode' {
        declare var language: any;
	declare export default typeof language

    }
declare module 'react-syntax-highlighter/languages/prism/lua' {
        declare var language: any;
	declare export default typeof language

    }
declare module 'react-syntax-highlighter/languages/prism/makefile' {
        declare var language: any;
	declare export default typeof language

    }
declare module 'react-syntax-highlighter/languages/prism/markdown' {
        declare var language: any;
	declare export default typeof language

    }
declare module 'react-syntax-highlighter/languages/prism/markupTemplating' {
        declare var language: any;
	declare export default typeof language

    }
declare module 'react-syntax-highlighter/languages/prism/markup' {
        declare var language: any;
	declare export default typeof language

    }
declare module 'react-syntax-highlighter/languages/prism/matlab' {
        declare var language: any;
	declare export default typeof language

    }
declare module 'react-syntax-highlighter/languages/prism/mel' {
        declare var language: any;
	declare export default typeof language

    }
declare module 'react-syntax-highlighter/languages/prism/mizar' {
        declare var language: any;
	declare export default typeof language

    }
declare module 'react-syntax-highlighter/languages/prism/monkey' {
        declare var language: any;
	declare export default typeof language

    }
declare module 'react-syntax-highlighter/languages/prism/n4js' {
        declare var language: any;
	declare export default typeof language

    }
declare module 'react-syntax-highlighter/languages/prism/nasm' {
        declare var language: any;
	declare export default typeof language

    }
declare module 'react-syntax-highlighter/languages/prism/nginx' {
        declare var language: any;
	declare export default typeof language

    }
declare module 'react-syntax-highlighter/languages/prism/nim' {
        declare var language: any;
	declare export default typeof language

    }
declare module 'react-syntax-highlighter/languages/prism/nix' {
        declare var language: any;
	declare export default typeof language

    }
declare module 'react-syntax-highlighter/languages/prism/nsis' {
        declare var language: any;
	declare export default typeof language

    }
declare module 'react-syntax-highlighter/languages/prism/objectivec' {
        declare var language: any;
	declare export default typeof language

    }
declare module 'react-syntax-highlighter/languages/prism/ocaml' {
        declare var language: any;
	declare export default typeof language

    }
declare module 'react-syntax-highlighter/languages/prism/opencl' {
        declare var language: any;
	declare export default typeof language

    }
declare module 'react-syntax-highlighter/languages/prism/oz' {
        declare var language: any;
	declare export default typeof language

    }
declare module 'react-syntax-highlighter/languages/prism/parigp' {
        declare var language: any;
	declare export default typeof language

    }
declare module 'react-syntax-highlighter/languages/prism/parser' {
        declare var language: any;
	declare export default typeof language

    }
declare module 'react-syntax-highlighter/languages/prism/pascal' {
        declare var language: any;
	declare export default typeof language

    }
declare module 'react-syntax-highlighter/languages/prism/perl' {
        declare var language: any;
	declare export default typeof language

    }
declare module 'react-syntax-highlighter/languages/prism/phpExtras' {
        declare var language: any;
	declare export default typeof language

    }
declare module 'react-syntax-highlighter/languages/prism/php' {
        declare var language: any;
	declare export default typeof language

    }
declare module 'react-syntax-highlighter/languages/prism/plsql' {
        declare var language: any;
	declare export default typeof language

    }
declare module 'react-syntax-highlighter/languages/prism/powershell' {
        declare var language: any;
	declare export default typeof language

    }
declare module 'react-syntax-highlighter/languages/prism/processing' {
        declare var language: any;
	declare export default typeof language

    }
declare module 'react-syntax-highlighter/languages/prism/prolog' {
        declare var language: any;
	declare export default typeof language

    }
declare module 'react-syntax-highlighter/languages/prism/properties' {
        declare var language: any;
	declare export default typeof language

    }
declare module 'react-syntax-highlighter/languages/prism/protobuf' {
        declare var language: any;
	declare export default typeof language

    }
declare module 'react-syntax-highlighter/languages/prism/pug' {
        declare var language: any;
	declare export default typeof language

    }
declare module 'react-syntax-highlighter/languages/prism/puppet' {
        declare var language: any;
	declare export default typeof language

    }
declare module 'react-syntax-highlighter/languages/prism/pure' {
        declare var language: any;
	declare export default typeof language

    }
declare module 'react-syntax-highlighter/languages/prism/python' {
        declare var language: any;
	declare export default typeof language

    }
declare module 'react-syntax-highlighter/languages/prism/q' {
        declare var language: any;
	declare export default typeof language

    }
declare module 'react-syntax-highlighter/languages/prism/qore' {
        declare var language: any;
	declare export default typeof language

    }
declare module 'react-syntax-highlighter/languages/prism/r' {
        declare var language: any;
	declare export default typeof language

    }
declare module 'react-syntax-highlighter/languages/prism/reason' {
        declare var language: any;
	declare export default typeof language

    }
declare module 'react-syntax-highlighter/languages/prism/renpy' {
        declare var language: any;
	declare export default typeof language

    }
declare module 'react-syntax-highlighter/languages/prism/rest' {
        declare var language: any;
	declare export default typeof language

    }
declare module 'react-syntax-highlighter/languages/prism/rip' {
        declare var language: any;
	declare export default typeof language

    }
declare module 'react-syntax-highlighter/languages/prism/roboconf' {
        declare var language: any;
	declare export default typeof language

    }
declare module 'react-syntax-highlighter/languages/prism/ruby' {
        declare var language: any;
	declare export default typeof language

    }
declare module 'react-syntax-highlighter/languages/prism/rust' {
        declare var language: any;
	declare export default typeof language

    }
declare module 'react-syntax-highlighter/languages/prism/sas' {
        declare var language: any;
	declare export default typeof language

    }
declare module 'react-syntax-highlighter/languages/prism/sass' {
        declare var language: any;
	declare export default typeof language

    }
declare module 'react-syntax-highlighter/languages/prism/scala' {
        declare var language: any;
	declare export default typeof language

    }
declare module 'react-syntax-highlighter/languages/prism/scheme' {
        declare var language: any;
	declare export default typeof language

    }
declare module 'react-syntax-highlighter/languages/prism/scss' {
        declare var language: any;
	declare export default typeof language

    }
declare module 'react-syntax-highlighter/languages/prism/smalltalk' {
        declare var language: any;
	declare export default typeof language

    }
declare module 'react-syntax-highlighter/languages/prism/smarty' {
        declare var language: any;
	declare export default typeof language

    }
declare module 'react-syntax-highlighter/languages/prism/soy' {
        declare var language: any;
	declare export default typeof language

    }
declare module 'react-syntax-highlighter/languages/prism/sql' {
        declare var language: any;
	declare export default typeof language

    }
declare module 'react-syntax-highlighter/languages/prism/stylus' {
        declare var language: any;
	declare export default typeof language

    }
declare module 'react-syntax-highlighter/languages/prism/swift' {
        declare var language: any;
	declare export default typeof language

    }
declare module 'react-syntax-highlighter/languages/prism/tcl' {
        declare var language: any;
	declare export default typeof language

    }
declare module 'react-syntax-highlighter/languages/prism/textile' {
        declare var language: any;
	declare export default typeof language

    }
declare module 'react-syntax-highlighter/languages/prism/tsx' {
        declare var language: any;
	declare export default typeof language

    }
declare module 'react-syntax-highlighter/languages/prism/twig' {
        declare var language: any;
	declare export default typeof language

    }
declare module 'react-syntax-highlighter/languages/prism/typescript' {
        declare var language: any;
	declare export default typeof language

    }
declare module 'react-syntax-highlighter/languages/prism/vbnet' {
        declare var language: any;
	declare export default typeof language

    }
declare module 'react-syntax-highlighter/languages/prism/velocity' {
        declare var language: any;
	declare export default typeof language

    }
declare module 'react-syntax-highlighter/languages/prism/verilog' {
        declare var language: any;
	declare export default typeof language

    }
declare module 'react-syntax-highlighter/languages/prism/vhdl' {
        declare var language: any;
	declare export default typeof language

    }
declare module 'react-syntax-highlighter/languages/prism/vim' {
        declare var language: any;
	declare export default typeof language

    }
declare module 'react-syntax-highlighter/languages/prism/visualBasic' {
        declare var language: any;
	declare export default typeof language

    }
declare module 'react-syntax-highlighter/languages/prism/wasm' {
        declare var language: any;
	declare export default typeof language

    }
declare module 'react-syntax-highlighter/languages/prism/wiki' {
        declare var language: any;
	declare export default typeof language

    }
declare module 'react-syntax-highlighter/languages/prism/xeora' {
        declare var language: any;
	declare export default typeof language

    }
declare module 'react-syntax-highlighter/languages/prism/xojo' {
        declare var language: any;
	declare export default typeof language

    }
declare module 'react-syntax-highlighter/languages/prism/yaml' {
        declare var language: any;
	declare export default typeof language

    }
