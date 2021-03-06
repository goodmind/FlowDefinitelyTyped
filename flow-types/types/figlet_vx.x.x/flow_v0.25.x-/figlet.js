declare module "figlet" {
  declare var npm$namespace$figlet: {
    text: typeof figlet$text,
    textSync: typeof figlet$textSync,
    metadata: typeof figlet$metadata,
    defaults: typeof figlet$defaults,
    loadFont: typeof figlet$loadFont,
    loadFontSync: typeof figlet$loadFontSync,
    fonts: typeof figlet$fonts,
    fontsSync: typeof figlet$fontsSync
  };
  declare type figlet$Fonts =
    | "1Row"
    | "3-D"
    | "3D Diagonal"
    | "3D-ASCII"
    | "3x5"
    | "4Max"
    | "5 Line Oblique"
    | "AMC 3 Line"
    | "AMC 3 Liv1"
    | "AMC AAA01"
    | "AMC Neko"
    | "AMC Razor"
    | "AMC Razor2"
    | "AMC Slash"
    | "AMC Slider"
    | "AMC Thin"
    | "AMC Tubes"
    | "AMC Untitled"
    | "ANSI Shadow"
    | "ASCII New Roman"
    | "Acrobatic"
    | "Alligator"
    | "Alligator2"
    | "Alpha"
    | "Alphabet"
    | "Arrows"
    | "Avatar"
    | "B1FF"
    | "B1FF"
    | "Banner"
    | "Banner3-D"
    | "Banner3"
    | "Banner4"
    | "Barbwire"
    | "Basic"
    | "Bear"
    | "Bell"
    | "Benjamin"
    | "Big Chief"
    | "Big Money-ne"
    | "Big Money-nw"
    | "Big Money-se"
    | "Big Money-sw"
    | "Big"
    | "Bigfig"
    | "Binary"
    | "Block"
    | "Blocks"
    | "Bloody"
    | "Bolger"
    | "Braced"
    | "Bright"
    | "Broadway KB"
    | "Broadway"
    | "Bubble"
    | "Bulbhead"
    | "Caligraphy"
    | "Caligraphy2"
    | "Calvin S"
    | "Cards"
    | "Catwalk"
    | "Chiseled"
    | "Chunky"
    | "Coinstak"
    | "Cola"
    | "Colossal"
    | "Computer"
    | "Contessa"
    | "Contrast"
    | "Cosmike"
    | "Crawford"
    | "Crawford2"
    | "Crazy"
    | "Cricket"
    | "Cursive"
    | "Cyberlarge"
    | "Cybermedium"
    | "Cybersmall"
    | "Cygnet"
    | "DANC4"
    | "DOS Rebel"
    | "DWhistled"
    | "Dancing Font"
    | "Decimal"
    | "Def Leppard"
    | "Delta Corps Priest 1"
    | "Diamond"
    | "Diet Cola"
    | "Digital"
    | "Doh"
    | "Doom"
    | "Dot Matrix"
    | "Double Shorts"
    | "Double"
    | "Dr Pepper"
    | "Efti Chess"
    | "Efti Font"
    | "Efti Italic"
    | "Efti Piti"
    | "Efti Robot"
    | "Efti Wall"
    | "Efti Water"
    | "Electronic"
    | "Elite"
    | "Epic"
    | "Fender"
    | "Filter"
    | "Fire Font-k"
    | "Fire Font-s"
    | "Flipped"
    | "Flower Power"
    | "Four Tops"
    | "Fraktur"
    | "Fun Face"
    | "Fun Faces"
    | "Fuzzy"
    | "Georgi16"
    | "Georgia11"
    | "Ghost"
    | "Ghoulish"
    | "Glenyn"
    | "Goofy"
    | "Gothic"
    | "Graceful"
    | "Gradient"
    | "Graffiti"
    | "Greek"
    | "Heart Left"
    | "Heart Right"
    | "Henry 3D"
    | "Hex"
    | "Hieroglyphs"
    | "Hollywood"
    | "Horizontal Left"
    | "Horizontal Right"
    | "ICL-1900"
    | "Impossible"
    | "Invita"
    | "Isometric1"
    | "Isometric2"
    | "Isometric3"
    | "Isometric4"
    | "Italic"
    | "Ivrit"
    | "JS Block Letters"
    | "JS Bracket Letters"
    | "JS Capital Curves"
    | "JS Cursive"
    | "JS Stick Letters"
    | "Jacky"
    | "Jazmine"
    | "Jerusalem"
    | "Katakana"
    | "Kban"
    | "Keyboard"
    | "Knob"
    | "Konto Slant"
    | "Konto"
    | "LCD"
    | "Larry 3D 2"
    | "Larry 3D"
    | "Lean"
    | "Letters"
    | "Lil Devil"
    | "Line Blocks"
    | "Linux"
    | "Lockergnome"
    | "Madrid"
    | "Marquee"
    | "Maxfour"
    | "Merlin1"
    | "Merlin2"
    | "Mike"
    | "Mini"
    | "Mirror"
    | "Mnemonic"
    | "Modular"
    | "Morse"
    | "Morse2"
    | "Moscow"
    | "Mshebrew210"
    | "Muzzle"
    | "NScript"
    | "NT Greek"
    | "NV Script"
    | "Nancyj-Fancy"
    | "Nancyj-Improved"
    | "Nancyj-Underlined"
    | "Nancyj"
    | "Nipples"
    | "O8"
    | "OS2"
    | "Octal"
    | "Ogre"
    | "Old Banner"
    | "Patorjk's Cheese"
    | "Patorjk-HeX"
    | "Pawp"
    | "Peaks Slant"
    | "Peaks"
    | "Pebbles"
    | "Pepper"
    | "Poison"
    | "Puffy"
    | "Puzzle"
    | "Pyramid"
    | "Rammstein"
    | "Rectangles"
    | "Red Phoenix"
    | "Relief"
    | "Relief2"
    | "Reverse"
    | "Roman"
    | "Rot13"
    | "Rot13"
    | "Rotated"
    | "Rounded"
    | "Rowan Cap"
    | "Rozzo"
    | "Runic"
    | "Runyc"
    | "S Blood"
    | "SL Script"
    | "Santa Clara"
    | "Script"
    | "Serifcap"
    | "Shadow"
    | "Shimrod"
    | "Short"
    | "Slant Relief"
    | "Slant"
    | "Slide"
    | "Small Caps"
    | "Small Isometric1"
    | "Small Keyboard"
    | "Small Poison"
    | "Small Script"
    | "Small Shadow"
    | "Small Slant"
    | "Small Tengwar"
    | "Small"
    | "Soft"
    | "Speed"
    | "Spliff"
    | "Stacey"
    | "Stampate"
    | "Stampatello"
    | "Standard"
    | "Star Strips"
    | "Star Wars"
    | "Stellar"
    | "Stforek"
    | "Stick Letters"
    | "Stop"
    | "Straight"
    | "Stronger Than All"
    | "Sub-Zero"
    | "Swamp Land"
    | "Swan"
    | "Sweet"
    | "THIS"
    | "Tanja"
    | "Tengwar"
    | "Term"
    | "Test1"
    | "The Edge"
    | "Thick"
    | "Thin"
    | "Thorned"
    | "Three Point"
    | "Ticks Slant"
    | "Ticks"
    | "Tiles"
    | "Tinker-Toy"
    | "Tombstone"
    | "Train"
    | "Trek"
    | "Tsalagi"
    | "Tubular"
    | "Twisted"
    | "Two Point"
    | "USA Flag"
    | "Univers"
    | "Varsity"
    | "Wavy"
    | "Weird"
    | "Wet Letter"
    | "Whimsy"
    | "Wow";

  declare type figlet$KerningMethods =
    | "default"
    | "full"
    | "fitted"
    | "controlled smushing"
    | "universal smushing";

  declare type figlet$PrintDirection = number;

  declare interface figlet$FittingRules {
    vLayout: number;
    vRule5: boolean;
    vRule4: boolean;
    vRule3: boolean;
    vRule2: boolean;
    vRule1: boolean;
    hLayout: number;
    hRule6: boolean;
    hRule5: boolean;
    hRule4: boolean;
    hRule3: boolean;
    hRule2: boolean;
    hRule1: boolean;
  }

  declare interface figlet$Options {
    font?: figlet$Fonts;
    horizontalLayout?: figlet$KerningMethods;
    verticalLayout?: figlet$KerningMethods;
    printDirection?: figlet$PrintDirection;
    showHardBlanks?: boolean;
  }

  declare interface figlet$FontOptions {
    hardBlank: string;
    height: number;
    baseline: number;
    maxLength: number;
    oldLayout: number;
    numCommentLines: number;
    printDirection: figlet$PrintDirection;
    fullLayout: number | null;
    codeTagCount: number | null;
    fittingRules: figlet$FittingRules;
  }

  declare interface figlet$Defaults {
    font: figlet$Fonts;
    fontPath: string;
  }

  declare function figlet$text(
    txt: string,
    cb: (error: Error | null, result?: string) => void
  ): void;

  declare function figlet$text(
    txt: string,
    font: figlet$Fonts,
    cb: (error: Error | null, result?: string) => void
  ): void;

  /**
   * @desc This `unified-signatures` is disabled because `Fonts` type is too long
   */
  declare function figlet$text(
    txt: string,
    options: figlet$Options | void,
    cb: (error: Error | null, result?: string) => void
  ): void;

  declare function figlet$textSync(txt: string, font?: figlet$Fonts): string;

  /**
   * @desc This `unified-signatures` is disabled because `Fonts` type is too long
   */
  declare function figlet$textSync(
    txt: string,
    options: figlet$Options
  ): string;

  declare function figlet$metadata(
    font: figlet$Fonts,
    cb: (
      error: Error | null,
      fontOptions?: figlet$FontOptions,
      headerComment?: string
    ) => void
  ): void;

  declare function figlet$defaults(
    opt?: $Shape<figlet$Defaults>
  ): figlet$Defaults;

  declare function figlet$loadFont(
    font: figlet$Fonts,
    cb: (error: Error | null, fontOptions?: figlet$FontOptions) => void
  ): void;

  /**
   * @todo Use 'node' namespace to add following methods only in node environment.
   * @warn This method works in node environment only.
   * In browser environment, this method does not work.
   */
  declare function figlet$loadFontSync(font: figlet$Fonts): figlet$FontOptions;

  /**
   * @warn This method exists in node environment only.
   * In browser environment, this method does not exist.
   */
  declare function figlet$fonts(
    cb: (error: Error | null, fontList?: figlet$Fonts[]) => void
  ): void;

  /**
   * @warn This method exists in node environment only.
   * In browser environment, this method does not exist.
   */
  declare function figlet$fontsSync(): figlet$Fonts[];

  declare function figlet(
    txt: string,
    cb: (error: Error | null, result?: string) => void
  ): void;

  declare function figlet(
    txt: string,
    font: figlet$Fonts,
    cb: (error: Error | null, result?: string) => void
  ): void;

  /**
   * @desc This `unified-signatures` is disabled because `Fonts` type is too long
   */
  declare function figlet(
    txt: string,
    options: figlet$Options | void,
    cb: (error: Error | null, result?: string) => void
  ): void;

  declare export default typeof figlet;
}
