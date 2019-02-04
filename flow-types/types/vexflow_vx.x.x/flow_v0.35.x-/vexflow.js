declare function sanitizeDuration(duration: string): string

      declare var npm$namespace$Vex: {
        L: typeof Vex$L,
Merge: typeof Vex$Merge,
Min: typeof Vex$Min,
Max: typeof Vex$Max,
RoundN: typeof Vex$RoundN,
MidLine: typeof Vex$MidLine,
SortAndUnique: typeof Vex$SortAndUnique,
Contains: typeof Vex$Contains,
getCanvasContext: typeof Vex$getCanvasContext,
drawDot: typeof Vex$drawDot,
BM: typeof Vex$BM,
Inherit: typeof Vex$Inherit,
        
      }
declare function Vex$L(block: string, args: any[]): void


declare function Vex$Merge<T: Object>(destination: T, source: Object): T


declare function Vex$Min(a: number, b: number): number


declare function Vex$Max(a: number, b: number): number


declare function Vex$RoundN(x: number, n: number): number


declare function Vex$MidLine(a: number, b: number): number


declare function Vex$SortAndUnique<T: any[]>(arr: T, cmp: Function, eq: Function): T


declare function Vex$Contains(a: any[], obj: any): boolean


declare function Vex$getCanvasContext(canvas_sel: string): CanvasRenderingContext2D


declare function Vex$drawDot(ctx: Vex$IRenderContext, x: number, y: number, color?: string): void


declare function Vex$BM(s: number, f: Function): void


declare function Vex$Inherit<T: Object>(child: T, parent: Object, object: Object): T


declare class Vex$RuntimeError  {
constructor(code: string, message: string): this
}

declare class Vex$RERR  {
constructor(code: string, message: string): this
}


/**
 * Helper interface for handling the different rendering contexts (i.e. CanvasContext, RaphaelContext, SVGContext). Not part of VexFlow!
 */
declare interface Vex$IRenderContext {
clear(): void,
setFont(family: string, size: number, weight?: number): Vex$IRenderContext,
setRawFont(font: string): Vex$IRenderContext,
setFillStyle(style: string): Vex$IRenderContext,
setBackgroundFillStyle(style: string): Vex$IRenderContext,
setStrokeStyle(style: string): Vex$IRenderContext,
setShadowColor(color: string): Vex$IRenderContext,
setShadowBlur(blur: string): Vex$IRenderContext,
setLineWidth(width: number): Vex$IRenderContext,
setLineCap(cap_type: string): Vex$IRenderContext,
setLineDash(dash: string): Vex$IRenderContext,
scale(x: number, y: number): Vex$IRenderContext,
resize(width: number, height: number): Vex$IRenderContext,
fillRect(x: number, y: number, width: number, height: number): Vex$IRenderContext,
clearRect(x: number, y: number, width: number, height: number): Vex$IRenderContext,
beginPath(): Vex$IRenderContext,
moveTo(x: number, y: number): Vex$IRenderContext,
lineTo(x: number, y: number): Vex$IRenderContext,
bezierCurveToTo(
x1: number,
y1: number,
x2: number,
y2: number,
x: number,
y: number): Vex$IRenderContext,
quadraticCurveToTo(x1: number, y1: number, x2: number, y2: number): Vex$IRenderContext,
arc(
x: number,
y: number,
radius: number,
startAngle: number,
endAngle: number,
antiClockwise: boolean): Vex$IRenderContext,
glow(): Vex$IRenderContext,
fill(): Vex$IRenderContext,
stroke(): Vex$IRenderContext,
closePath(): Vex$IRenderContext,
fillText(text: string, x: number, y: number): Vex$IRenderContext,
save(): Vex$IRenderContext,
restore(): Vex$IRenderContext,

/**
 * canvas returns TextMetrics, SVG returns SVGRect, Raphael returns {width : number, height : number}. Only width is used throughout VexFlow.
 */
measureText(text: string): {
width: number
}
} 


/**
 * Helper interface for handling the Vex.Flow.Font object in Vex.Flow.Glyph. Not part of VexFlow!
 */
declare interface Vex$IFont {
glyphs: {
x_min: number,
x_max: number,
ha: number,
o: string[]
}[],
cssFontWeight: string,
ascender: number,
underlinePosition: number,
cssFontStyle: string,
boundingBox: {
yMin: number,
xMin: number,
yMax: number,
xMax: number
},
resolution: number,
descender: number,
familyName: string,
lineHeight: number,
underlineThickness: number,

/**
 * This property is missing in vexflow_font.js, but present in gonville_original.js and gonville_all.js.
 */
original_font_information?: {
postscript_name: string,
version_string: string,
vendor_url: string,
full_font_name: string,
font_family_name: string,
copyright: string,
description: string,
trademark: string,
designer: string,
designer_url: string,
unique_font_identifier: string,
license_url: string,
license_description: string,
manufacturer_name: string,
font_sub_family_name: string
}
} 


      declare var npm$namespace$Flow: {
        clefProperties: typeof Flow$clefProperties,
keyProperties: typeof Flow$keyProperties,
integerToNote: typeof Flow$integerToNote,
tabToGlyph: typeof Flow$tabToGlyph,
textWidth: typeof Flow$textWidth,
articulationCodes: typeof Flow$articulationCodes,
accidentalCodes: typeof Flow$accidentalCodes,
ornamentCodes: typeof Flow$ornamentCodes,
keySignature: typeof Flow$keySignature,
parseNoteDurationString: typeof Flow$parseNoteDurationString,
parseNoteData: typeof Flow$parseNoteData,
durationToFraction: typeof Flow$durationToFraction,
durationToNumber: typeof Flow$durationToNumber,
durationToTicks: typeof Flow$durationToTicks,
durationToGlyph: typeof Flow$durationToGlyph,
renderGlyph: typeof Flow$renderGlyph,
        RESOLUTION: typeof Flow$RESOLUTION,
STEM_WIDTH: typeof Flow$STEM_WIDTH,
STEM_HEIGHT: typeof Flow$STEM_HEIGHT,
STAVE_LINE_THICKNESS: typeof Flow$STAVE_LINE_THICKNESS,
TIME4_4: typeof Flow$TIME4_4,
unicode: typeof Flow$unicode,
Font: typeof Flow$Font,
      }
declare var Flow$RESOLUTION: number;

declare var Flow$STEM_WIDTH: number;

declare var Flow$STEM_HEIGHT: number;

declare var Flow$STAVE_LINE_THICKNESS: number;

declare var Flow$TIME4_4: {
num_beats: number,
beat_value: number,
resolution: number
};

declare var Flow$unicode: {
[name: string]: string
};

declare function Flow$clefProperties(clef: string): {
line_shift: number
}


declare function Flow$keyProperties(
key: string,
clef: string,
params: {
octave_shift?: number
}): {
key: string,
octave: number,
line: number,
int_value: number,
accidental: string,
code: number,
stroke: number,
shift_right: number,
displaced: boolean
}


declare function Flow$integerToNote(integer: number): string


declare function Flow$tabToGlyph(fret: string): {
text: string,
code: number,
width: number,
shift_y: number
}


declare function Flow$textWidth(text: string): number


declare function Flow$articulationCodes(
artic: string): {
code: string,
width: number,
shift_right: number,
shift_up: number,
shift_down: number,
between_lines: boolean
}


declare function Flow$accidentalCodes(
acc: string): {
code: string,
width: number,
gracenote_width: number,
shift_right: number,
shift_down: number
}


declare function Flow$ornamentCodes(
acc: string): {
code: string,
shift_right: number,
shift_up: number,
shift_down: number,
width: number
}


declare function Flow$keySignature(spec: string): {
Volta$type: string,
line: number
}[]


declare function Flow$parseNoteDurationString(durationString: string): {
duration: string,
dots: number,
Volta$type: string
}


declare function Flow$parseNoteData(
noteData: {
duration: string,
dots: number,
Volta$type: string
}): {
duration: string,
Volta$type: string,
dots: number,
ticks: number
}


declare function Flow$durationToFraction(duration: string): Flow$Fraction


declare function Flow$durationToNumber(duration: string): number


declare function Flow$durationToTicks(duration: string): number


declare function Flow$durationToGlyph(
duration: string,
Volta$type: string): {
head_width: number,
stem: boolean,
stem_offset: number,
flag: boolean,
stem_up_extension: number,
stem_down_extension: number,
gracenote_stem_up_extension: number,
gracenote_stem_down_extension: number,
tabnote_stem_up_extension: number,
tabnote_stem_down_extension: number,
dot_shiftY: number,
line_above: number,
line_below: number,
code_head?: string,
rest?: boolean,
position?: string
}


declare function Flow$renderGlyph(
ctx: Vex$IRenderContext,
x_pos: number,
y_pos: number,
point: number,
val: string,
nocache: boolean): void


declare var Flow$Font: {
glyphs: {
x_min: number,
x_max: number,
ha: number,
o: string[]
}[],
cssFontWeight: string,
ascender: number,
underlinePosition: number,
cssFontStyle: string,
boundingBox: {
yMin: number,
xMin: number,
yMax: number,
xMax: number
},
resolution: number,
descender: number,
familyName: string,
lineHeight: number,
underlineThickness: number,
original_font_information: {
postscript_name: string,
version_string: string,
vendor_url: string,
full_font_name: string,
font_family_name: string,
copyright: string,
description: string,
trademark: string,
designer: string,
designer_url: string,
unique_font_identifier: string,
license_url: string,
license_description: string,
manufacturer_name: string,
font_sub_family_name: string
}
};

declare class Flow$Accidental mixins Flow$Modifier {
setNote(note: Flow$Note): Flow$Modifier;
constructor(Volta$type: string): this;
static DEBUG: boolean;
static format(
accidentals: Flow$Accidental[],
state: {
left_shift: number,
right_shift: number,
text_line: number
}): void;
setNote(note: Flow$StaveNote): void;
setAsCautionary(): Flow$Accidental;
draw(): void;
static applyAccidentals(voices: Flow$Voice[], Flow$keySignature?: string): void
}


      declare var npm$namespace$Accidental: {
        
        CATEGORY: typeof Accidental$CATEGORY,
      }
declare var Accidental$CATEGORY: string;

declare class Flow$Annotation mixins Flow$Modifier {
constructor(text: string): this;
static DEBUG: boolean;
static format(
annotations: Flow$Annotation[],
state: {
left_shift: number,
right_shift: number,
text_line: number
}): boolean;
setTextLine(line: number): Flow$Annotation;
setFont(family: string, size: number, weight: string): Flow$Annotation;
setVerticalJustification(just: Flow$Annotation.Annotation$VerticalJustify): Flow$Annotation;
getJustification(): Flow$Annotation.Annotation$Justify;
setJustification(justification: Flow$Annotation.Annotation$Justify): Flow$Annotation;
draw(): void
}


      declare var npm$namespace$Annotation: {
        
        CATEGORY: typeof Annotation$CATEGORY,
      }
declare  class Annotation$Justify {
  constructor(...args: empty): mixed;
static +LEFT: Class<Annotation$Justify__LEFT> & Annotation$Justify__LEFT & 1;// 1
static +CENTER: Class<Annotation$Justify__CENTER> & Annotation$Justify__CENTER & 1;// 1
static +RIGHT: Class<Annotation$Justify__RIGHT> & Annotation$Justify__RIGHT & 2;// 2
static +CENTER_STEM: Class<Annotation$Justify__CENTER_STEM> & Annotation$Justify__CENTER_STEM & 3;// 3

}

declare class Annotation$Justify__LEFT mixins Annotation$Justify {}
declare class Annotation$Justify__CENTER mixins Annotation$Justify {}
declare class Annotation$Justify__RIGHT mixins Annotation$Justify {}
declare class Annotation$Justify__CENTER_STEM mixins Annotation$Justify {}


declare  class Annotation$VerticalJustify {
  constructor(...args: empty): mixed;
static +TOP: Class<Annotation$VerticalJustify__TOP> & Annotation$VerticalJustify__TOP & 1;// 1
static +CENTER: Class<Annotation$VerticalJustify__CENTER> & Annotation$VerticalJustify__CENTER & 1;// 1
static +BOTTOM: Class<Annotation$VerticalJustify__BOTTOM> & Annotation$VerticalJustify__BOTTOM & 2;// 2
static +CENTER_STEM: Class<Annotation$VerticalJustify__CENTER_STEM> & Annotation$VerticalJustify__CENTER_STEM & 3;// 3

}

declare class Annotation$VerticalJustify__TOP mixins Annotation$VerticalJustify {}
declare class Annotation$VerticalJustify__CENTER mixins Annotation$VerticalJustify {}
declare class Annotation$VerticalJustify__BOTTOM mixins Annotation$VerticalJustify {}
declare class Annotation$VerticalJustify__CENTER_STEM mixins Annotation$VerticalJustify {}


declare var Annotation$CATEGORY: string;

declare class Flow$Articulation mixins Flow$Modifier {
constructor(Volta$type: string): this;
static DEBUG: boolean;
static format(
articulations: Flow$Articulation[],
state: {
left_shift: number,
right_shift: number,
text_line: number
}): boolean;
draw(): void
}


      declare var npm$namespace$Articulation: {
        
        CATEGORY: typeof Articulation$CATEGORY,
      }
declare var Articulation$CATEGORY: string;

declare class Flow$BarNote mixins Flow$Note {
static DEBUG: boolean;
constructor(): this;
getType(): Flow$Barline.Volta$type;
setType(Volta$type: Flow$Barline.Volta$type): Flow$BarNote;
getBoundingBox(): Flow$BoundingBox;
addToModifierContext(): Flow$BarNote;
preFormat(): Flow$BarNote;
draw(): void
}

declare  class Barline$type {
  constructor(...args: empty): mixed;
static +SINGLE: Class<Barline$type__SINGLE> & Barline$type__SINGLE & 1;// 1
static +DOUBLE: Class<Barline$type__DOUBLE> & Barline$type__DOUBLE & 1;// 1
static +END: Class<Barline$type__END> & Barline$type__END & 2;// 2
static +REPEAT_BEGIN: Class<Barline$type__REPEAT_BEGIN> & Barline$type__REPEAT_BEGIN & 3;// 3
static +REPEAT_END: Class<Barline$type__REPEAT_END> & Barline$type__REPEAT_END & 4;// 4
static +REPEAT_BOTH: Class<Barline$type__REPEAT_BOTH> & Barline$type__REPEAT_BOTH & 5;// 5
static +NONE: Class<Barline$type__NONE> & Barline$type__NONE & 6;// 6

}

declare class Barline$type__SINGLE mixins Barline$type {}
declare class Barline$type__DOUBLE mixins Barline$type {}
declare class Barline$type__END mixins Barline$type {}
declare class Barline$type__REPEAT_BEGIN mixins Barline$type {}
declare class Barline$type__REPEAT_END mixins Barline$type {}
declare class Barline$type__REPEAT_BOTH mixins Barline$type {}
declare class Barline$type__NONE mixins Barline$type {}


declare class Flow$Barline mixins Flow$StaveModifier {
constructor(Barline$type: Flow$Barline.Barline$type, x: number): this;
getCategory(): string;
setX(x: number): Flow$Barline;
draw(stave: Flow$Stave, x_shift?: number): void;
drawVerticalBar(stave: Flow$Stave, x: number, double_bar?: boolean): void;
drawVerticalEndBar(stave: Flow$Stave, x: number): void;
drawRepeatBar(stave: Flow$Stave, x: number, begin: boolean): void
}

declare class Flow$Beam  {
constructor(notes: Flow$StemmableNote[], auto_stem?: boolean): this;
setContext(context: Vex$IRenderContext): Flow$Beam;
getNotes(): Flow$StemmableNote[];
getBeamCount(): number;
breakSecondaryAt(indices: number[]): Flow$Beam;
getSlopeY(): number;
calculateSlope(): void;
applyStemExtensions(): void;
getBeamLines(duration: string): {
start: number,
end: number
}[];
drawStems(): void;
drawBeamLines(): void;
preFormat(): Flow$Beam;
postFormat(): Flow$Beam;
draw(): boolean;
calculateStemDirection(notes: Flow$Note): number;
static getDefaultBeamGroups(time_sig: string): Flow$Fraction[];
static applyAndGetBeams(
voice: Flow$Voice,
stem_direction: number,
groups: Flow$Fraction[]): Flow$Beam[];
static generateBeams(
notes: Flow$StemmableNote[],
config?: {
groups?: Flow$Fraction[],
stem_direction?: number,
beam_rests?: boolean,
beam_middle_only?: boolean,
show_stemlets?: boolean,
maintain_stem_directions?: boolean
}): Flow$Beam[]
}

declare class Flow$Bend mixins Flow$Modifier {
constructor(text: string, release?: boolean, phrase?: {
Barline$type: number,
text: string,
width: number
}[]): this;
static UP: number;
static DOWN: number;
static format(
bends: Flow$Bend[],
state: {
left_shift: number,
right_shift: number,
text_line: number
}): boolean;
setXShift(value: number): void;
setFont(font: string): Flow$Bend;
getText(): string;
updateWidth(): Flow$Bend;
draw(): void
}


      declare var npm$namespace$Bend: {
        
        CATEGORY: typeof Bend$CATEGORY,
      }
declare var Bend$CATEGORY: string;

declare class Flow$BoundingBox  {
constructor(x: number, y: number, w: number, h: number): this;
static copy(that: Flow$BoundingBox): Flow$BoundingBox;
getX(): number;
getY(): number;
getW(): number;
getH(): number;
setX(x: number): Flow$BoundingBox;
setY(y: number): Flow$BoundingBox;
setW(w: number): Flow$BoundingBox;
setH(h: number): Flow$BoundingBox;
move(x: number, y: number): void;
clone(): Flow$BoundingBox;
mergeWith(boundingBox: Flow$BoundingBox, ctx?: Vex$IRenderContext): Flow$BoundingBox;
draw(ctx: Vex$IRenderContext, x: number, y: number): void
}

declare class Flow$CanvasContext mixins Vex$IRenderContext {
setLineDash(dash: string): Flow$CanvasContext;
scale(x: number, y: number): Flow$CanvasContext;
resize(width: number, height: number): Flow$CanvasContext;
fillRect(x: number, y: number, width: number, height: number): Flow$CanvasContext;
clearRect(x: number, y: number, width: number, height: number): Flow$CanvasContext;
beginPath(): Flow$CanvasContext;
moveTo(x: number, y: number): Flow$CanvasContext;
lineTo(x: number, y: number): Flow$CanvasContext;
bezierCurveToTo(
x1: number,
y1: number,
x2: number,
y2: number,
x: number,
y: number): Flow$CanvasContext;
quadraticCurveToTo(x1: number, y1: number, x2: number, y2: number): Flow$CanvasContext;
arc(
x: number,
y: number,
radius: number,
startAngle: number,
endAngle: number,
antiClockwise: boolean): Flow$CanvasContext;
glow(): Flow$CanvasContext;
fill(): Flow$CanvasContext;
stroke(): Flow$CanvasContext;
closePath(): Flow$CanvasContext;
fillText(text: string, x: number, y: number): Flow$CanvasContext;
save(): Flow$CanvasContext;
restore(): Flow$CanvasContext;
constructor(context: CanvasRenderingContext2D): this;
static WIDTH: number;
static HEIGHT: number;
clear(): void;
setFont(family: string, size: number, weight?: number): Flow$CanvasContext;
setRawFont(font: string): Flow$CanvasContext;
setFillStyle(style: string): Flow$CanvasContext;
setBackgroundFillStyle(style: string): Flow$CanvasContext;
setStrokeStyle(style: string): Flow$CanvasContext;
setShadowColor(style: string): Flow$CanvasContext;
setShadowBlur(blur: string): Flow$CanvasContext;
setLineWidth(width: number): Flow$CanvasContext;
setLineCap(cap_type: string): Flow$CanvasContext;
setLineDash(dash: string): void;
scale(x: number, y: number): void;
resize(width: number, height: number): void;
fillRect(x: number, y: number, width: number, height: number): void;
clearRect(x: number, y: number, width: number, height: number): void;
beginPath(): void;
moveTo(x: number, y: number): void;
lineTo(x: number, y: number): void;
bezierCurveToTo(x1: number, y1: number, x2: number, y2: number, x: number, y: number): void;
quadraticCurveToTo(x1: number, y1: number, x: number, y: number): void;
arc(
x: number,
y: number,
radius: number,
startAngle: number,
endAngle: number,
antiClockwise: boolean): void;
glow(): void;
fill(): void;
stroke(): void;
closePath(): void;
measureText(text: string): TextMetrics;
fillText(text: string, x: number, y: number): void;
save(): void;
restore(): void
}

declare class Flow$Clef mixins Flow$StaveModifier {
addModifier(): void;
addEndModifier(): void;
constructor(clef: string, size?: string, annotation?: string): this;
static DEBUG: boolean;
addModifier(stave: Flow$Stave): void;
addEndModifier(stave: Flow$Stave): void
}

declare class Flow$ClefNote mixins Flow$Note {
setStave(stave: Flow$Stave): Flow$Note;
constructor(clef: string, size?: string, annotation?: string): this;
setClef(clef: string, size?: string, annotation?: string): Flow$ClefNote;
getClef(): string;
setStave(stave: Flow$Stave): void;
getBoundingBox(): Flow$BoundingBox;
addToModifierContext(): Flow$ClefNote;
getCategory(): string;
preFormat(): Flow$ClefNote;
draw(): void
}

declare class Flow$Crescendo mixins Flow$Note {
constructor(note_struct: {
duration: number,
line?: number
}): this;
static DEBUG: boolean;
setLine(line: number): Flow$Crescendo;
setHeight(height: number): Flow$Crescendo;
setDecrescendo(decresc: boolean): Flow$Crescendo;
preFormat(): Flow$Crescendo;
draw(): void
}

declare class Flow$Curve  {
constructor(from: Flow$Note, to: Flow$Note, options?: {
spacing?: number,
thickness?: number,
x_shift?: number,
y_shift: number,
position: Flow$Curve.StaveModifier$Position,
invert: boolean,
cps?: {
x: number,
y: number
}[]
}): this;
static DEBUG: boolean;
setContext(context: Vex$IRenderContext): Flow$Curve;
setNotes(from: Flow$Note, to: Flow$Note): Flow$Curve;
isPartial(): boolean;
renderCurve(
params: {
first_x: number,
first_y: number,
last_x: number,
last_y: number,
direction: number
}): void;
draw(): boolean
}

declare  class Curve$Position {
  constructor(...args: empty): mixed;
static +NEAR_HEAD: Class<Curve$Position__NEAR_HEAD> & Curve$Position__NEAR_HEAD & 1;// 1
static +NEAR_TOP: Class<Curve$Position__NEAR_TOP> & Curve$Position__NEAR_TOP & 1;// 1

}

declare class Curve$Position__NEAR_HEAD mixins Curve$Position {}
declare class Curve$Position__NEAR_TOP mixins Curve$Position {}


declare class Flow$Dot mixins Flow$Modifier {
setNote(note: Flow$Note): Flow$Dot;
static format(
dots: number,
state: {
left_shift: number,
right_shift: number,
text_line: number
}): void;
setNote(note: Flow$Note): void;
setDotShiftY(y: number): Flow$Dot;
draw(): void
}


      declare var npm$namespace$Dot: {
        
        CATEGORY: typeof Dot$CATEGORY,
      }
declare var Dot$CATEGORY: string;

declare class Flow$Formatter  {
static DEBUG: boolean;
static FormatAndDraw(
ctx: Vex$IRenderContext,
stave: Flow$Stave,
notes: Flow$Note[],
params?: {
auto_beam: boolean,
align_rests: boolean
}): Flow$BoundingBox;
static FormatAndDraw(
ctx: Vex$IRenderContext,
stave: Flow$Stave,
notes: Flow$Note[],
params?: boolean): Flow$BoundingBox;
static FormatAndDrawTab(
ctx: Vex$IRenderContext,
tabstave: Flow$TabStave,
stave: Flow$Stave,
tabnotes: Flow$TabNote[],
notes: Flow$Note[],
autobeam?: boolean,
params?: {
auto_beam: boolean,
align_rests: boolean
}): void;
static FormatAndDrawTab(
ctx: Vex$IRenderContext,
tabstave: Flow$TabStave,
stave: Flow$Stave,
tabnotes: Flow$TabNote[],
notes: Flow$Note[],
autobeam?: boolean,
params?: boolean): void;
static AlignRestsToNotes(
notes: Flow$Note[],
align_all_notes?: boolean,
align_tuplets?: boolean): Flow$Formatter;
alignRests(voices: Flow$Voice[], align_all_notes: boolean): void;
preCalculateMinTotalWidth(voices: Flow$Voice[]): number;
getMinTotalWidth(): number;
createModifierContexts(voices: Flow$Voice[]): Flow$ModifierContext[];
createTickContexts(voices: Flow$Voice[]): Flow$TickContext[];
preFormat(
justifyWidth?: number,
rendering_context?: Vex$IRenderContext,
voices?: Flow$Voice[],
stave?: Flow$Stave): void;
postFormat(): Flow$Formatter;
joinVoices(voices: Flow$Voice[]): Flow$Formatter;
format(
voices: Flow$Voice[],
justifyWidth: number,
options?: {
align_rests?: boolean,
context: Vex$IRenderContext
}): Flow$Formatter;
formatToStave(
voices: Flow$Voice[],
stave: Flow$Stave,
options?: {
align_rests?: boolean,
context: Vex$IRenderContext
}): Flow$Formatter
}

declare class Flow$Fraction  {
constructor(numerator: number, denominator: number): this;
static GCD(a: number, b: number): number;
static LCM(a: number, b: number): number;
static LCMM(a: number, b: number): number;
set(numerator: number, denominator: number): Flow$Fraction;
value(): number;
simplify(): Flow$Fraction;
add(param1: Flow$Fraction, param2: Flow$Fraction): Flow$Fraction;
add(param1: number, param2: number): Flow$Fraction;
subtract(param1: Flow$Fraction, param2: Flow$Fraction): Flow$Fraction;
subtract(param1: number, param2: number): Flow$Fraction;
multiply(param1: Flow$Fraction, param2: Flow$Fraction): Flow$Fraction;
multiply(param1: number, param2: number): Flow$Fraction;
divide(param1: Flow$Fraction, param2: Flow$Fraction): Flow$Fraction;
divide(param1: number, param2: number): Flow$Fraction;
equals(compare: Flow$Fraction): boolean;
greaterThan(compare: Flow$Fraction): boolean;
greaterThanEquals(compare: Flow$Fraction): boolean;
lessThan(compare: Flow$Fraction): boolean;
lessThanEquals(compare: Flow$Fraction): boolean;
clone(): Flow$Fraction;
copy(copy: Flow$Fraction): Flow$Fraction;
quotient(): number;
fraction(): number;
abs(): Flow$Fraction;
toString(): string;
toSimplifiedString(): string;
toMixedString(): string;
parse(str: string): Flow$Fraction
}

declare class Flow$FretHandFinger mixins Flow$Modifier {
constructor(number: number): this;
static format(
nums: Flow$FretHandFinger[],
state: {
left_shift: number,
right_shift: number,
text_line: number
}): void;
getNote(): Flow$Note;
setNote(note: Flow$Note): Flow$FretHandFinger;
getIndex(): number;
setIndex(index: number): Flow$FretHandFinger;
getPosition(): Flow$Modifier.Curve$Position;
setPosition(position: Flow$Modifier.Curve$Position): Flow$FretHandFinger;
setFretHandFinger(number: number): Flow$FretHandFinger;
setOffsetX(x: number): Flow$FretHandFinger;
setOffsetY(y: number): Flow$FretHandFinger;
draw(): void
}


      declare var npm$namespace$FretHandFinger: {
        
        CATEGORY: typeof FretHandFinger$CATEGORY,
      }
declare var FretHandFinger$CATEGORY: string;

declare class Flow$GhostNote mixins Flow$StemmableNote {
setStave(stave: Flow$Stave): Flow$Note;
constructor(duration: string): this;
constructor(note_struct: {
Barline$type?: string,
dots?: number,
duration: string
}): this;
isRest(): boolean;
setStave(stave: Flow$Stave): void;
addToModifierContext(): Flow$GhostNote;
preFormat(): Flow$GhostNote;
draw(): void
}

declare class Flow$Glyph  {
constructor(code: string, point: number, options?: {
cache?: boolean,
font?: Vex$IFont
}): this;
setOptions(options: {
cache?: boolean,
font?: Vex$IFont
}): void;
setStave(stave: Flow$Stave): Flow$Glyph;
setXShift(x_shift: number): Flow$Glyph;
setYShift(y_shift: number): Flow$Glyph;
setContext(context: Vex$IRenderContext): Flow$Glyph;
getContext(): Vex$IRenderContext;
reset(): void;
setWidth(width: number): Flow$Glyph;
getMetrics(): {
x_min: number,
x_max: number,
width: number,
height: number
};
render(ctx: Vex$IRenderContext, x_pos: number, y_pos: number): void;
renderToStave(x: number): void;
static loadMetrics(
font: Vex$IFont,
code: string,
cache: boolean): {
x_min: number,
x_max: number,
ha: number,
outline: number[]
};
static renderOutline(
ctx: Vex$IRenderContext,
outline: number[],
scale: number,
x_pos: number,
y_pos: number): void
}

declare class Flow$GraceNote mixins Flow$StaveNote {
constructor(note_struct: {
slash?: boolean,
Barline$type?: string,
dots?: number,
duration: string,
clef?: string,
keys: string[],
octave_shift?: number,
auto_stem?: boolean,
stem_direction?: number
}): this;
getStemExtension(): number;
getCategory(): string;
draw(): void
}

declare class Flow$GraceNoteGroup mixins Flow$Modifier {
setWidth(width: number): Flow$Modifier;
setNote(note: Flow$StaveNote): Flow$Modifier;
constructor(grace_notes: Flow$GraceNote[], show_slur?: boolean): this;
static DEBUG: boolean;
static format(
gracenote_groups: Flow$GraceNoteGroup[],
state: {
left_shift: number,
right_shift: number,
text_line: number
}): boolean;
preFormat(): void;
beamNotes(): Flow$GraceNoteGroup;
setNote(note: Flow$Note): void;
setWidth(width: number): void;
getWidth(): number;
setXShift(x_shift: number): void;
draw(): void
}


      declare var npm$namespace$GraceNoteGroup: {
        
        CATEGORY: typeof GraceNoteGroup$CATEGORY,
      }
declare var GraceNoteGroup$CATEGORY: string;

declare class Flow$KeyManager  {
constructor(key: string): this;
setKey(key: string): Flow$KeyManager;
getKey(): string;
reset(): Flow$KeyManager;
getAccidental(key: string): {
note: string,
accidental: string
};
selectNote(note: string): {
note: string,
accidental: string,
change: boolean
}
}

declare class Flow$KeySignature mixins Flow$StaveModifier {
addModifier(): void;
constructor(key_spec: string): this;
addAccToStave(
stave: Flow$Stave,
acc: {
Barline$type: string,
line: number
},
next?: {
Barline$type: string,
line: number
}): void;
cancelKey(spec: string): Flow$KeySignature;
addModifier(stave: Flow$Stave): Flow$KeySignature;
addToStave(stave: Flow$Stave, firstGlyph?: boolean): Flow$KeySignature;
convertAccLines(clef: string, Barline$type: string): void
}

declare class Flow$Modifier  {
static DEBUG: boolean;
getCategory(): string;
getWidth(): number;
setWidth(width: number): Flow$Modifier;
getNote(): Flow$Note;
setNote(note: Flow$Note): Flow$Modifier;
getIndex(): number;
setIndex(index: number): Flow$Modifier;
getContext(): Vex$IRenderContext;
setContext(context: Vex$IRenderContext): Flow$Modifier;
getModifierContext(): Flow$ModifierContext;
setModifierContext(c: Flow$ModifierContext): Flow$Modifier;
getPosition(): Flow$Modifier.Curve$Position;
setPosition(position: Flow$Modifier.Curve$Position): Flow$Modifier;
setTextLine(line: number): Flow$Modifier;
setYShift(y: number): Flow$Modifier;
setXShift(x: number): void;
draw(): void;
alignSubNotesWithNote(subNotes: Flow$Note[], note: Flow$Note): void
}


      declare var npm$namespace$Modifier: {
        
        CATEGORY: typeof Modifier$CATEGORY,
      }
declare  class Modifier$Position {
  constructor(...args: empty): mixed;
static +LEFT: Class<Modifier$Position__LEFT> & Modifier$Position__LEFT & 1;// 1
static +RIGHT: Class<Modifier$Position__RIGHT> & Modifier$Position__RIGHT & 1;// 1
static +ABOVE: Class<Modifier$Position__ABOVE> & Modifier$Position__ABOVE & 2;// 2
static +BELOW: Class<Modifier$Position__BELOW> & Modifier$Position__BELOW & 3;// 3

}

declare class Modifier$Position__LEFT mixins Modifier$Position {}
declare class Modifier$Position__RIGHT mixins Modifier$Position {}
declare class Modifier$Position__ABOVE mixins Modifier$Position {}
declare class Modifier$Position__BELOW mixins Modifier$Position {}


declare var Modifier$CATEGORY: string;

declare class Flow$ModifierContext  {
static DEBUG: boolean;
addModifier(modifier: Flow$Modifier): Flow$ModifierContext;
getModifiers(Barline$type: string): Flow$Modifier[];
getWidth(): number;
getExtraLeftPx(): number;
getExtraRightPx(): number;
getState(): {
left_shift: number,
right_shift: number,
text_line: number
};
getMetrics(
): {
width: number,
spacing: number,
extra_left_px: number,
extra_right_px: number
};
preFormat(): void;
postFormat(): void
}

declare class Flow$Music  {
isValidNoteValue(note: number): boolean;
isValidIntervalValue(interval: number): boolean;
getNoteParts(noteString: string): {
root: string,
accidental: string
};
getKeyParts(noteString: string): {
root: string,
accidental: string,
Barline$type: string
};
getNoteValue(noteString: string): number;
getIntervalValue(intervalString: string): number;
getCanonicalNoteName(noteValue: number): string;
getCanonicalIntervalName(intervalValue: number): string;
getRelativeNoteValue(noteValue: number, intervalValue: number, direction?: number): number;
getRelativeNoteName(root: string, noteValue: number): string;
getScaleTones(key: string, intervals: number[]): number;
getIntervalBetween(note1: number, note2: number, direction?: number): number;
createScaleMap(Flow$keySignature: string): {
[rootName: string]: string
}
}


      declare var npm$namespace$Music: {
        
        NUM_TONES: typeof Music$NUM_TONES,
roots: typeof Music$roots,
root_values: typeof Music$root_values,
root_indices: typeof Music$root_indices,
canonical_notes: typeof Music$canonical_notes,
diatonic_intervals: typeof Music$diatonic_intervals,
diatonic_accidentals: typeof Music$diatonic_accidentals,
intervals: typeof Music$intervals,
scales: typeof Music$scales,
accidentals: typeof Music$accidentals,
noteValues: typeof Music$noteValues,
      }
declare var Music$NUM_TONES: number;

declare var Music$roots: string[];

declare var Music$root_values: number[];

declare var Music$root_indices: {
[root: string]: number
};

declare var Music$canonical_notes: string[];

declare var Music$diatonic_intervals: string[];

declare var Music$diatonic_accidentals: {
[diatonic_interval: string]: {
note: number,
accidental: number
}
};

declare var Music$intervals: {
[interval: string]: number
};

declare var Music$scales: {
[scale: string]: number[]
};

declare var Music$accidentals: string[];

declare var Music$noteValues: {
[value: string]: {
root_index: number,
int_val: number
}
};

declare class Flow$Note mixins Flow$Tickable {
getTicks(): Flow$Fraction;
getCenterXShift(): number;
isCenterAligned(): boolean;
setCenterAlignment(align_center: boolean): Flow$Note;
getTuplet(): Flow$Tuplet;
setTuplet(tuplet: Flow$Tuplet): Flow$Note;
addToModifierContext(mc: Flow$ModifierContext): void;
preFormat(): void;
postFormat(): Flow$Note;
getIntrinsicTicks(): Flow$Fraction;
setIntrinsicTicks(intrinsicTicks: Flow$Fraction): void;
getTickMultiplier(): Flow$Fraction;
applyTickMultiplier(numerator: number, denominator: number): void;
setDuration(duration: Flow$Fraction): void;
constructor(note_struct: {
Barline$type?: string,
dots?: number,
duration: string
}): this;
getPlayNote(): any;
setPlayNote(note: any): Flow$Note;
isRest(): boolean;
addStroke(index: number, stroke: Flow$Stroke): Flow$Note;
getStave(): Flow$Stave;
setStave(stave: Flow$Stave): Flow$Note;
getCategory(): string;
setContext(context: Vex$IRenderContext): Flow$Note;
getExtraLeftPx(): number;
getExtraRightPx(): number;
setExtraLeftPx(x: number): Flow$Note;
setExtraRightPx(x: number): Flow$Note;
shouldIgnoreTicks(): boolean;
getLineNumber(): number;
getLineForRest(): number;
getGlyph(): Flow$Glyph;
setYs(ys: number[]): Flow$Note;
getYs(): number[];
getYForTopText(text_line: number): number;
getBoundingBox(): Flow$BoundingBox;
getVoice(): Flow$Voice;
setVoice(voice: Flow$Voice): Flow$Note;
getTickContext(): Flow$TickContext;
setTickContext(tc: Flow$TickContext): Flow$Note;
getDuration(): string;
isDotted(): boolean;
hasStem(): boolean;
getDots(): number;
getNoteType(): string;
setBeam(): Flow$Note;
setModifierContext(mc: Flow$ModifierContext): Flow$Note;
addModifier(modifier: Flow$Modifier, index?: number): Flow$Note;
getModifierStartXY(): {
x: number,
y: number
};
getMetrics(
): {
width: number,
noteWidth: number,
left_shift: number,
modLeftPx: number,
modRightPx: number,
extraLeftPx: number,
extraRightPx: number
};
setWidth(width: number): void;
getWidth(): number;
setXShift(x: number): Flow$Note;
getX(): number;
getAbsoluteX(): number;
setPreFormatted(value: boolean): void
}


      declare var npm$namespace$Note: {
        
        CATEGORY: typeof Note$CATEGORY,
      }
declare var Note$CATEGORY: string;

declare class Flow$NoteHead mixins Flow$Note {
constructor(head_options: {
x?: number,
y?: number,
note_type?: string,
duration: string,
displaced?: boolean,
stem_direction?: number,
line: number,
x_shift: number,
custom_glyph_code?: string,
style?: string,
slashed?: boolean,
glyph_font_scale?: number
}): this;
static DEBUG: boolean;
getCategory(): string;
setContext(context: Vex$IRenderContext): Flow$NoteHead;
getWidth(): number;
isDisplaced(): boolean;
getStyle(
): {
shadowColor?: string,
shadowBlur?: string,
fillStyle?: string,
strokeStyle?: string
};
setStyle(
style: {
shadowColor?: string,
shadowBlur?: string,
fillStyle?: string,
strokeStyle?: string
}): Flow$NoteHead;
getGlyph(): Flow$Glyph;
setX(x: number): Flow$NoteHead;
getY(): number;
setY(y: number): Flow$NoteHead;
getLine(): number;
setLine(line: number): Flow$NoteHead;
getAbsoluteX(): number;
getBoundingBox(): Flow$BoundingBox;
applyStyle(context: Vex$IRenderContext): Flow$NoteHead;
setStave(stave: Flow$Stave): Flow$NoteHead;
preFormat(): Flow$NoteHead;
draw(): void
}

declare class Flow$NoteSubGroup mixins Flow$Modifier {
constructor(subnotes: Flow$Note[]): this;
preFormat(): void
}

declare class Flow$Ornament mixins Flow$Modifier {
constructor(Barline$type: string): this;
static DEBUG: boolean;
static format(
ornaments: Flow$Ornament[],
state: {
left_shift: number,
right_shift: number,
text_line: number
}): boolean;
setDelayed(delayed: boolean): Flow$Ornament;
setUpperAccidental(acc: string): Flow$Ornament;
setLowerAccidental(acc: string): Flow$Ornament;
draw(): void
}


      declare var npm$namespace$Ornament: {
        
        CATEGORY: typeof Ornament$CATEGORY,
      }
declare var Ornament$CATEGORY: string;

declare class Flow$PedalMarking  {
constructor(notes: Flow$Note[]): this;
static DEBUG: boolean;
static createSustain(notes: Flow$Note[]): Flow$PedalMarking;
static createSostenuto(notes: Flow$Note[]): Flow$PedalMarking;
static createUnaCorda(notes: Flow$Note[]): Flow$PedalMarking;
setCustomText(depress?: string, release?: string): Flow$PedalMarking;
setStyle(style: Flow$PedalMarking.PedalMarking$Styles): Flow$PedalMarking;
setLine(line: number): Flow$PedalMarking;
setContext(context: Vex$IRenderContext): Flow$PedalMarking;
drawBracketed(): void;
drawText(): void;
draw(): void
}


      declare var npm$namespace$PedalMarking: {
        
        GLYPHS: typeof PedalMarking$GLYPHS,
      }
declare  class PedalMarking$Styles {
  constructor(...args: empty): mixed;
static +TEXT: Class<PedalMarking$Styles__TEXT> & PedalMarking$Styles__TEXT & 1;// 1
static +BRACKET: Class<PedalMarking$Styles__BRACKET> & PedalMarking$Styles__BRACKET & 1;// 1
static +MIXED: Class<PedalMarking$Styles__MIXED> & PedalMarking$Styles__MIXED & 2;// 2

}

declare class PedalMarking$Styles__TEXT mixins PedalMarking$Styles {}
declare class PedalMarking$Styles__BRACKET mixins PedalMarking$Styles {}
declare class PedalMarking$Styles__MIXED mixins PedalMarking$Styles {}


declare var PedalMarking$GLYPHS: {
[name: string]: {
code: string,
x_shift: number,
y_shift: number
}
};

declare class Flow$RaphaelContext mixins Vex$IRenderContext {
setLineWidth(width: number): Flow$RaphaelContext;
glow(): Flow$RaphaelContext;
constructor(element: HTMLElement): this;
setFont(family: string, size: number, weight?: number): Flow$RaphaelContext;
setRawFont(font: string): Flow$RaphaelContext;
setFillStyle(style: string): Flow$RaphaelContext;
setBackgroundFillStyle(style: string): Flow$RaphaelContext;
setStrokeStyle(style: string): Flow$RaphaelContext;
setShadowColor(style: string): Flow$RaphaelContext;
setShadowBlur(blur: string): Flow$RaphaelContext;
setLineWidth(width: number): void;
setLineDash(dash: string): Flow$RaphaelContext;
setLineCap(cap_type: string): Flow$RaphaelContext;
scale(x: number, y: number): Flow$RaphaelContext;
clear(): void;
resize(width: number, height: number): Flow$RaphaelContext;
setViewBox(viewBox: string): void;
rect(x: number, y: number, width: number, height: number): void;
fillRect(x: number, y: number, width: number, height: number): Flow$RaphaelContext;
clearRect(x: number, y: number, width: number, height: number): Flow$RaphaelContext;
beginPath(): Flow$RaphaelContext;
moveTo(x: number, y: number): Flow$RaphaelContext;
lineTo(x: number, y: number): Flow$RaphaelContext;
bezierCurveToTo(
x1: number,
y1: number,
x2: number,
y2: number,
x: number,
y: number): Flow$RaphaelContext;
quadraticCurveToTo(x1: number, y1: number, x: number, y: number): Flow$RaphaelContext;
arc(
x: number,
y: number,
radius: number,
startAngle: number,
endAngle: number,
antiClockwise: boolean): Flow$RaphaelContext;
glow(
): {
width: number,
fill: boolean,
opacity: number,
offsetx: number,
offsety: number,
color: string
};
fill(): Flow$RaphaelContext;
stroke(): Flow$RaphaelContext;
closePath(): Flow$RaphaelContext;
measureText(text: string): {
width: number,
height: number
};
fillText(text: string, x: number, y: number): Flow$RaphaelContext;
save(): Flow$RaphaelContext;
restore(): Flow$RaphaelContext
}

declare class Flow$Renderer  {
constructor(sel: HTMLElement, backend: Flow$Renderer.Renderer$Backends): this;
static USE_CANVAS_PROXY: boolean;
static buildContext(
sel: HTMLElement,
backend: Flow$Renderer.Renderer$Backends,
width?: number,
height?: number,
background?: string): Vex$IRenderContext;
static getCanvasContext(
sel: HTMLElement,
backend: Flow$Renderer.Renderer$Backends,
width?: number,
height?: number,
background?: string): Flow$CanvasContext;
static getRaphaelContext(
sel: HTMLElement,
backend: Flow$Renderer.Renderer$Backends,
width?: number,
height?: number,
background?: string): Flow$RaphaelContext;
static getSVGContext(
sel: HTMLElement,
backend: Flow$Renderer.Renderer$Backends,
width?: number,
height?: number,
background?: string): Flow$SVGContext;
static bolsterCanvasContext(ctx: CanvasRenderingContext2D): Flow$CanvasContext;
static drawDashedLine(
context: Vex$IRenderContext,
fromX: number,
fromY: number,
toX: number,
toY: number,
dashPattern: number[]): void;
resize(width: number, height: number): Flow$Renderer;
getContext(): Vex$IRenderContext
}

declare  class Renderer$Backends {
  constructor(...args: empty): mixed;
static +CANVAS: Class<Renderer$Backends__CANVAS> & Renderer$Backends__CANVAS & 1;// 1
static +RAPHAEL: Class<Renderer$Backends__RAPHAEL> & Renderer$Backends__RAPHAEL & 1;// 1
static +SVG: Class<Renderer$Backends__SVG> & Renderer$Backends__SVG & 2;// 2
static +VML: Class<Renderer$Backends__VML> & Renderer$Backends__VML & 3;// 3

}

declare class Renderer$Backends__CANVAS mixins Renderer$Backends {}
declare class Renderer$Backends__RAPHAEL mixins Renderer$Backends {}
declare class Renderer$Backends__SVG mixins Renderer$Backends {}
declare class Renderer$Backends__VML mixins Renderer$Backends {}


declare  class Renderer$LineEndType {
  constructor(...args: empty): mixed;
static +NONE: Class<Renderer$LineEndType__NONE> & Renderer$LineEndType__NONE & 1;// 1
static +UP: Class<Renderer$LineEndType__UP> & Renderer$LineEndType__UP & 1;// 1
static +DOWN: Class<Renderer$LineEndType__DOWN> & Renderer$LineEndType__DOWN & 2;// 2

}

declare class Renderer$LineEndType__NONE mixins Renderer$LineEndType {}
declare class Renderer$LineEndType__UP mixins Renderer$LineEndType {}
declare class Renderer$LineEndType__DOWN mixins Renderer$LineEndType {}


declare class Flow$Repetition mixins Flow$StaveModifier {
constructor(Barline$type: Flow$Repetition.Barline$type, x: number, y_shift: number): this;
getCategory(): string;
setShiftX(x: number): Flow$Repetition;
setShiftY(y: number): Flow$Repetition;
draw(stave: Flow$Stave, x: number): Flow$Repetition;
drawCodaFixed(stave: Flow$Stave, x: number): Flow$Repetition;
drawSignoFixed(stave: Flow$Stave, x: number): Flow$Repetition;
drawSymbolText(
stave: Flow$Stave,
x: number,
text: string,
draw_coda: boolean): Flow$Repetition
}

declare  class Repetition$type {
  constructor(...args: empty): mixed;
static +NONE: Class<Repetition$type__NONE> & Repetition$type__NONE & 1;// 1
static +CODA_LEFT: Class<Repetition$type__CODA_LEFT> & Repetition$type__CODA_LEFT & 1;// 1
static +CODA_RIGHT: Class<Repetition$type__CODA_RIGHT> & Repetition$type__CODA_RIGHT & 2;// 2
static +SEGNO_LEFT: Class<Repetition$type__SEGNO_LEFT> & Repetition$type__SEGNO_LEFT & 3;// 3
static +SEGNO_RIGHT: Class<Repetition$type__SEGNO_RIGHT> & Repetition$type__SEGNO_RIGHT & 4;// 4
static +DC: Class<Repetition$type__DC> & Repetition$type__DC & 5;// 5
static +DC_AL_CODA: Class<Repetition$type__DC_AL_CODA> & Repetition$type__DC_AL_CODA & 6;// 6
static +DC_AL_FINE: Class<Repetition$type__DC_AL_FINE> & Repetition$type__DC_AL_FINE & 7;// 7
static +DS: Class<Repetition$type__DS> & Repetition$type__DS & 8;// 8
static +DS_AL_CODA: Class<Repetition$type__DS_AL_CODA> & Repetition$type__DS_AL_CODA & 9;// 9
static +DS_AL_FINE: Class<Repetition$type__DS_AL_FINE> & Repetition$type__DS_AL_FINE & 10;// 10
static +FINE: Class<Repetition$type__FINE> & Repetition$type__FINE & 11;// 11

}

declare class Repetition$type__NONE mixins Repetition$type {}
declare class Repetition$type__CODA_LEFT mixins Repetition$type {}
declare class Repetition$type__CODA_RIGHT mixins Repetition$type {}
declare class Repetition$type__SEGNO_LEFT mixins Repetition$type {}
declare class Repetition$type__SEGNO_RIGHT mixins Repetition$type {}
declare class Repetition$type__DC mixins Repetition$type {}
declare class Repetition$type__DC_AL_CODA mixins Repetition$type {}
declare class Repetition$type__DC_AL_FINE mixins Repetition$type {}
declare class Repetition$type__DS mixins Repetition$type {}
declare class Repetition$type__DS_AL_CODA mixins Repetition$type {}
declare class Repetition$type__DS_AL_FINE mixins Repetition$type {}
declare class Repetition$type__FINE mixins Repetition$type {}


declare class Flow$Stave  {
constructor(x: number, y: number, width: number, options?: {
vertical_bar_width?: number,
glyph_spacing_px?: number,
num_lines?: number,
fill_style?: string,
spacing_between_lines_px?: number,
space_above_staff_ln?: number,
space_below_staff_ln?: number,
top_text_position?: number
}): this;
resetLines(): void;
setNoteStartX(x: number): Flow$Stave;
getNoteStartX(): number;
getNoteEndX(): number;
getTieStartX(): number;
getTieEndX(): number;
setContext(context: Vex$IRenderContext): Flow$Stave;
getContext(): Vex$IRenderContext;
getX(): number;
getNumLines(): number;
setX(x: number): Flow$Stave;
setY(y: number): Flow$Stave;
setWidth(width: number): Flow$Stave;
getWidth(): number;
setMeasure(measure: number): Flow$Stave;
setBegBarType(Repetition$type: Flow$Barline.Repetition$type): Flow$Stave;
setEndBarType(Repetition$type: Flow$Barline.Repetition$type): Flow$Stave;
getModifierXShift(index: number): number;
setRepetitionTypeLeft(Repetition$type: Flow$Repetition.Repetition$type, y: number): Flow$Stave;
setRepetitionTypeRight(Repetition$type: Flow$Repetition.Repetition$type, y: number): Flow$Stave;
setVoltaType(
Repetition$type: Flow$Volta.Repetition$type,
number_t: number,
y: number): Flow$Stave;
setSection(section: string, y: number): Flow$Stave;
setTempo(
tempo: {
name?: string,
duration: string,
dots: number,
bpm: number
},
y: number): Flow$Stave;
setText(
text: string,
position: Flow$Modifier.Modifier$Position,
options?: {
shift_x?: number,
shift_y?: number,
justification?: Flow$TextNote.TextNote$Justification
}): Flow$Stave;
getHeight(): number;
getSpacingBetweenLines(): number;
getBoundingBix(): Flow$BoundingBox;
getBottomY(): number;
getBottomLineY(): number;
getYForLine(line: number): number;
getYForTopText(line?: number): number;
getYForBottomText(line?: number): number;
getYForNote(line?: number): number;
getYForGlyphs(): number;
addGlyph(glypg: Flow$Glyph): Flow$Stave;
addEndGlyph(glypg: Flow$Glyph): Flow$Stave;
addModifier(
modifier: Flow$StaveModifier,
position?: Flow$StaveModifier.Modifier$Position): Flow$Stave;
addEndModifier(modifier: Flow$StaveModifier): Flow$Stave;
addKeySignature(keySpec: string): Flow$Stave;
setKeySignature(
keySpec: string,
cancelKeySpec: string,
position?: Flow$StaveModifier.Modifier$Position): Flow$Stave;
addClef(
clef: string,
size?: string,
annotation?: string,
position?: Flow$StaveModifier.Modifier$Position): Flow$Stave;
addEndClef(clef: string, size?: string, annotation?: string): Flow$Stave;
setEndClef(clef: string, size?: string, annotation?: string): Flow$Stave;
addTimeSignature(timeSpec: string, customPadding?: number): void;
addTrebleGlyph(): Flow$Stave;
draw(): void;
drawVertical(x: number, isDouble: boolean): void;
drawVerticalFixed(x: number, isDouble: boolean): void;
drawVerticalBar(x: number): void;
drawVerticalBarFixed(x: number): void;
getConfigForLines(): {
visible: boolean
}[];
setConfigForLine(line_number: number, line_config: {
visible: boolean
}): Flow$Stave;
setConfigForLines(lines_configuration: {
visible: boolean
}[]): Flow$Stave
}

declare class Flow$StaveConnector  {
constructor(top_stave: Flow$Stave, bottom_stave: Flow$Stave): this;
setContext(ctx: Vex$IRenderContext): Flow$StaveConnector;
setType(Repetition$type: Flow$StaveConnector.Repetition$type): Flow$StaveConnector;
setText(
text: string,
text_options?: {
shift_x?: number,
shift_y?: number
}): Flow$StaveConnector;
setFont(font: {
family?: string,
size?: number,
weight?: string
}): void;
setXShift(x_shift: number): Flow$StaveConnector;
draw(): void;
drawBoldDoubleLine(
ctx: Object,
Repetition$type: Flow$StaveConnector.Repetition$type,
topX: number,
topY: number,
botY: number): void
}

declare  class StaveConnector$type {
  constructor(...args: empty): mixed;
static +SINGLE_RIGHT: Class<StaveConnector$type__SINGLE_RIGHT> & StaveConnector$type__SINGLE_RIGHT & 0;// 0
static +SINGLE_LEFT: Class<StaveConnector$type__SINGLE_LEFT> & StaveConnector$type__SINGLE_LEFT & 1;// 1
static +SINGLE: Class<StaveConnector$type__SINGLE> & StaveConnector$type__SINGLE & 1;// 1
static +DOUBLE: Class<StaveConnector$type__DOUBLE> & StaveConnector$type__DOUBLE & 2;// 2
static +BRACE: Class<StaveConnector$type__BRACE> & StaveConnector$type__BRACE & 3;// 3
static +BRACKET: Class<StaveConnector$type__BRACKET> & StaveConnector$type__BRACKET & 4;// 4
static +BOLD_DOUBLE_LEFT: Class<StaveConnector$type__BOLD_DOUBLE_LEFT> & StaveConnector$type__BOLD_DOUBLE_LEFT & 5;// 5
static +BOLD_DOUBLE_RIGHT: Class<StaveConnector$type__BOLD_DOUBLE_RIGHT> & StaveConnector$type__BOLD_DOUBLE_RIGHT & 6;// 6
static +THIN_DOUBLE: Class<StaveConnector$type__THIN_DOUBLE> & StaveConnector$type__THIN_DOUBLE & 7;// 7
static +NONE: Class<StaveConnector$type__NONE> & StaveConnector$type__NONE & 8;// 8

}

declare class StaveConnector$type__SINGLE_RIGHT mixins StaveConnector$type {}
declare class StaveConnector$type__SINGLE_LEFT mixins StaveConnector$type {}
declare class StaveConnector$type__SINGLE mixins StaveConnector$type {}
declare class StaveConnector$type__DOUBLE mixins StaveConnector$type {}
declare class StaveConnector$type__BRACE mixins StaveConnector$type {}
declare class StaveConnector$type__BRACKET mixins StaveConnector$type {}
declare class StaveConnector$type__BOLD_DOUBLE_LEFT mixins StaveConnector$type {}
declare class StaveConnector$type__BOLD_DOUBLE_RIGHT mixins StaveConnector$type {}
declare class StaveConnector$type__THIN_DOUBLE mixins StaveConnector$type {}
declare class StaveConnector$type__NONE mixins StaveConnector$type {}


declare class Flow$StaveHairpin  {
constructor(notes: {
first_note: Flow$Note,
last_note: Flow$Note
}, StaveConnector$type: Flow$StaveHairpin.StaveConnector$type): this;
static FormatByTicksAndDraw(
ctx: Vex$IRenderContext,
formatter: Flow$Formatter,
notes: {
first_note: Flow$Note,
last_note: Flow$Note
},
StaveConnector$type: Flow$StaveHairpin.StaveConnector$type,
position: Flow$Modifier.Modifier$Position,
options?: {
height: number,
y_shift: number,
left_shift_ticks: number,
right_shift_ticks: number
}): void;
setContext(context: Vex$IRenderContext): Flow$StaveHairpin;
setPosition(position: Flow$Modifier.Modifier$Position): Flow$StaveHairpin;
setRenderOptions(
options: {
height?: number,
y_shift: number,
left_shift_px: number,
right_shift_px: number
}): Flow$StaveHairpin;
setNotes(notes: {
first_note: Flow$Note,
last_note: Flow$Note
}): Flow$StaveHairpin;
renderHairpin(
params: {
first_x: number,
last_x: number,
first_y: number,
last_y: number,
staff_height: number
}): void;
draw(): boolean
}

declare  class StaveHairpin$type {
  constructor(...args: empty): mixed;
static +CRESC: Class<StaveHairpin$type__CRESC> & StaveHairpin$type__CRESC & 1;// 1
static +DECRESC: Class<StaveHairpin$type__DECRESC> & StaveHairpin$type__DECRESC & 1;// 1

}

declare class StaveHairpin$type__CRESC mixins StaveHairpin$type {}
declare class StaveHairpin$type__DECRESC mixins StaveHairpin$type {}


declare class Flow$StaveLine  {
constructor(notes: {
first_note: Flow$Note,
last_note: Flow$Note,
first_indices: number[],
last_indices: number[]
}): this;
setContext(context: Object): Flow$StaveLine;
setFont(font: {
family: string,
size: number,
weight: string
}): Flow$StaveLine;
setText(text: string): Flow$StaveLine;
setNotes(
notes: {
first_note: Flow$Note,
last_note: Flow$Note,
first_indices?: number[],
last_indices?: number[]
}): Flow$StaveLine;
applyLineStyle(): void;
applyFontStyle(): void;
draw(): Flow$StaveLine;
render_options: {
padding_left: number,
padding_right: number,
line_width: number,
line_dash: number[],
rounded_end: boolean,
color: string,
draw_start_arrow: boolean,
draw_end_arrow: boolean,
arrowhead_length: number,
arrowhead_angle: number,
text_position_vertical: Flow$StaveLine.StaveLine$TextVerticalPosition,
text_justification: Flow$StaveLine.StaveLine$TextJustification
}
}

declare  class StaveLine$TextVerticalPosition {
  constructor(...args: empty): mixed;
static +TOP: Class<StaveLine$TextVerticalPosition__TOP> & StaveLine$TextVerticalPosition__TOP & 1;// 1
static +BOTTOM: Class<StaveLine$TextVerticalPosition__BOTTOM> & StaveLine$TextVerticalPosition__BOTTOM & 1;// 1

}

declare class StaveLine$TextVerticalPosition__TOP mixins StaveLine$TextVerticalPosition {}
declare class StaveLine$TextVerticalPosition__BOTTOM mixins StaveLine$TextVerticalPosition {}


declare  class StaveLine$TextJustification {
  constructor(...args: empty): mixed;
static +LEFT: Class<StaveLine$TextJustification__LEFT> & StaveLine$TextJustification__LEFT & 1;// 1
static +CENTER: Class<StaveLine$TextJustification__CENTER> & StaveLine$TextJustification__CENTER & 1;// 1
static +RIGHT: Class<StaveLine$TextJustification__RIGHT> & StaveLine$TextJustification__RIGHT & 2;// 2

}

declare class StaveLine$TextJustification__LEFT mixins StaveLine$TextJustification {}
declare class StaveLine$TextJustification__CENTER mixins StaveLine$TextJustification {}
declare class StaveLine$TextJustification__RIGHT mixins StaveLine$TextJustification {}


declare class Flow$StaveModifier  {
getCategory(): string;
makeSpacer(
padding: number): {
getContext: Function,
setStave: Function,
renderToStave: Function,
getMetrics: Function
};
placeGlyphOnLine(glyph: Flow$Glyph, stave: Flow$Stave, line: number): void;
setPadding(padding: number): void;
addToStave(stave: Flow$Stave, firstGlyph: boolean): Flow$StaveModifier;
addToStaveEnd(stave: Flow$Stave, firstGlyph: boolean): Flow$StaveModifier;
addModifier(): void;
addEndModifier(): void
}

declare  class StaveModifier$Position {
  constructor(...args: empty): mixed;
static +LEFT: Class<StaveModifier$Position__LEFT> & StaveModifier$Position__LEFT & 1;// 1
static +RIGHT: Class<StaveModifier$Position__RIGHT> & StaveModifier$Position__RIGHT & 2;// 2
static +ABOVE: Class<StaveModifier$Position__ABOVE> & StaveModifier$Position__ABOVE & 3;// 3
static +BELOW: Class<StaveModifier$Position__BELOW> & StaveModifier$Position__BELOW & 4;// 4
static +BEGIN: Class<StaveModifier$Position__BEGIN> & StaveModifier$Position__BEGIN & 5;// 5
static +END: Class<StaveModifier$Position__END> & StaveModifier$Position__END & 6;// 6

}

declare class StaveModifier$Position__LEFT mixins StaveModifier$Position {}
declare class StaveModifier$Position__RIGHT mixins StaveModifier$Position {}
declare class StaveModifier$Position__ABOVE mixins StaveModifier$Position {}
declare class StaveModifier$Position__BELOW mixins StaveModifier$Position {}
declare class StaveModifier$Position__BEGIN mixins StaveModifier$Position {}
declare class StaveModifier$Position__END mixins StaveModifier$Position {}


declare class Flow$StaveNote mixins Flow$StemmableNote {
buildStem(): Flow$StemmableNote;
setStave(stave: Flow$Stave): Flow$Note;
addModifier(modifier: Flow$Modifier, index?: number): Flow$Note;
getModifierStartXY(): {
x: number,
y: number
};
getDots(): number;
constructor(note_struct: {
StaveHairpin$type?: string,
dots?: number,
duration: string,
clef?: string,
keys: string[],
octave_shift?: number,
auto_stem?: boolean,
stem_direction?: number
}): this;
static DEBUG: boolean;
static format(
notes: Flow$StaveNote[],
state: {
left_shift: number,
right_shift: number,
text_line: number
}): boolean;
static formatByY(
notes: Flow$StaveNote[],
state: {
left_shift: number,
right_shift: number,
text_line: number
}): void;
static postFormat(notes: Flow$StaveNote[]): boolean;
buildStem(): void;
buildNoteHeads(): void;
autoStem(): void;
calculateKeyProps(): void;
getBoundingBox(): Flow$BoundingBox;
getLineNumber(): number;
isRest(): boolean;
isChord(): boolean;
hasStem(): boolean;
getYForTopText(text_line: number): number;
getYForBottomText(text_line: number): number;
setStave(stave: Flow$Stave): Flow$StaveNote;
getKeys(): string[];
getKeyProps(
): {
key: string,
octave: number,
line: number,
int_value: number,
accidental: string,
code: number,
stroke: number,
shift_right: number,
displaced: boolean
}[];
isDisplaced(): boolean;
setNoteDisplaced(displaced: boolean): Flow$StaveNote;
getTieRightX(): number;
getTieLeftX(): number;
getLineForRest(): number;
getModifierStartXY(
position: Flow$Modifier.StaveModifier$Position,
index: number): {
x: number,
y: number
};
setStyle(
style: {
shadowColor?: string,
shadowBlur?: string,
fillStyle?: string,
strokeStyle?: string
}): void;
setKeyStyle(
index: number,
style: {
shadowColor?: string,
shadowBlur?: string,
fillStyle?: string,
strokeStyle?: string
}): Flow$StaveNote;
setKeyLine(index: number, line: number): Flow$StaveNote;
getKeyLine(index: number): number;
addToModifierContext(mContext: Flow$ModifierContext): Flow$StaveNote;
addModifier(index: number, modifier: Flow$Modifier): Flow$StaveNote;
addAccidental(index: number, accidental: Flow$Accidental): Flow$StaveNote;
addArticulation(index: number, articulation: Flow$Articulation): Flow$StaveNote;
addAnnotation(index: number, annotation: Flow$Annotation): Flow$StaveNote;
addDot(index: number): Flow$StaveNote;
addDotToAll(): Flow$StaveNote;
getAccidentals(): Flow$Accidental[];
getDots(): Flow$Dot[];
getVoiceShiftWidth(): number;
calcExtraPx(): void;
preFormat(): void;
getNoteHeadBounds(
): {
y_top: number,
y_bottom: number,
highest_line: number,
lowest_line: number
};
getNoteHeadBeginX(): number;
getNoteHeadEndX(): number;
drawLedgerLines(): void;
drawModifiers(): void;
drawFlag(): void;
drawNoteHeads(): void;
drawStem(
struct: {
x_begin?: number,
x_end?: number,
y_top?: number,
y_bottom?: number,
y_extend?: number,
stem_extension?: number,
stem_direction?: number
}): void;
draw(): void
}


      declare var npm$namespace$StaveNote: {
        
        STEM_UP: typeof StaveNote$STEM_UP,
STEM_DOWN: typeof StaveNote$STEM_DOWN,
CATEGORY: typeof StaveNote$CATEGORY,
      }
declare var StaveNote$STEM_UP: number;

declare var StaveNote$STEM_DOWN: number;

declare var StaveNote$CATEGORY: string;

declare class Flow$StaveSection mixins Flow$Modifier {
draw(): void;
constructor(section: string, x: number, shift_y: number): this;
getCategory(): string;
setStaveSection(section: string): Flow$StaveSection;
setShiftX(x: number): Flow$StaveSection;
setShiftY(y: number): Flow$StaveSection;
draw(stave: Flow$Stave, shift_x: number): Flow$StaveSection
}

declare class Flow$StaveTempo mixins Flow$StaveModifier {
constructor(tempo: {
name?: string,
duration: string,
dots: number,
bpm: number
}, x: number, shift_y: number): this;
getCategory(): string;
setTempo(
tempo: {
name?: string,
duration: string,
dots: number,
bpm: number
}): Flow$StaveTempo;
setShiftX(x: number): Flow$StaveTempo;
setShiftY(y: number): Flow$StaveTempo;
draw(stave: Flow$Stave, shift_x: number): Flow$StaveTempo
}

declare class Flow$StaveText mixins Flow$Modifier {
draw(): void;
constructor(text: string, position: Flow$Modifier.StaveModifier$Position, options?: {
shift_x?: number,
shift_y?: number,
justification?: Flow$TextNote.TextNote$Justification
}): this;
getCategory(): string;
setStaveText(text: string): Flow$StaveText;
setShiftX(x: number): Flow$StaveText;
setShiftY(y: number): Flow$StaveText;
setFont(font: {
family?: string,
size?: number,
weight?: number
}): void;
setText(text: string): void;
draw(stave: Flow$Stave): Flow$StaveText
}

declare class Flow$StaveTie  {

/**
 * @see https://github.com/0xfe/vexflow/blob/master/src/stavetie.js#L12

Notes is a struct that has:

{
first_note: Note,
last_note: Note,
first_indices: [n1, n2, n3],
last_indices: [n1, n2, n3]
}
All properties are optional, since ties can span line breaks in which case
two ties can be used, each with either "first_note" or "last_note" missing.
 */
constructor(notes: {
first_note?: Flow$Note,
last_note?: Flow$Note,
first_indices?: number[],
last_indices?: number[]
}, text?: string): this;
setContext(context: Vex$IRenderContext): Flow$StaveTie;
setFont(font: {
family: string,
size: number,
weight: string
}): Flow$StaveTie;
setNotes(
notes: {
first_note?: Flow$Note,
last_note?: Flow$Note,
first_indices?: number[],
last_indices?: number[]
}): Flow$StaveTie;
isPartial(): boolean;
renderTie(
params: {
first_ys: number[],
last_ys: number[],
last_x_px: number,
first_x_px: number,
direction: number
}): void;
renderText(first_x_px: number, last_x_px: number): void;
draw(): boolean
}

declare class Flow$Stem  {
constructor(options: {
x_begin?: number,
x_end?: number,
y_top?: number,
y_bottom?: number,
y_extend?: number,
stem_extension?: number,
stem_direction?: number
}): this;
static DEBUG: boolean;
setNoteHeadXBounds(x_begin: number, x_end: number): Flow$Stem;
setDirection(direction: number): void;
setExtension(extension: number): void;
setYBounds(y_top: number, y_bottom: number): void;
getCategory(): string;
setContext(context: Vex$IRenderContext): Flow$Stem;
getHeight(): number;
getBoundingBox(): Flow$BoundingBox;
getExtents(): {
topY: number,
baseY: number
};
setStyle(
style: {
shadowColor?: string,
shadowBlur?: string,
fillStyle?: string,
strokeStyle?: string
}): void;
getStyle(
): {
shadowColor?: string,
shadowBlur?: string,
fillStyle?: string,
strokeStyle?: string
};
applyStyle(context: Vex$IRenderContext): Flow$Stem;
draw(): void;
hide: boolean
}


      declare var npm$namespace$Stem: {
        
        UP: typeof Stem$UP,
DOWN: typeof Stem$DOWN,
      }
declare var Stem$UP: number;

declare var Stem$DOWN: number;

declare class Flow$StemmableNote mixins Flow$Note {
setBeam(): Flow$Note;
constructor(note_struct: {
StaveHairpin$type?: string,
dots?: number,
duration: string
}): this;
static DEBUG: boolean;
getStem(): Flow$Stem;
setStem(stem: Flow$Stem): Flow$StemmableNote;
buildStem(): Flow$StemmableNote;
getStemLength(): number;
getBeamCount(): number;
getStemMinumumLength(): number;
getStemDirection(): number;
setStemDirection(direction: number): Flow$StemmableNote;
getStemX(): number;
getCenterGlyphX(): number;
getStemExtension(): number;
setStemLength(): number;
getStemExtents(): {
topY: number,
baseY: number
};
setBeam(beam: Flow$Beam): Flow$StemmableNote;
getYForTopText(text_line: number): number;
getYForBottomText(text_line: number): number;
postFormat(): Flow$StemmableNote;
drawStem(
stem_struct: {
x_begin?: number,
x_end?: number,
y_top?: number,
y_bottom?: number,
y_extend?: number,
stem_extension?: number,
stem_direction?: number
}): void
}

declare class Flow$StringNumber mixins Flow$Modifier {
setNote(note: Flow$Note): Flow$StringNumber;
constructor(number: number): this;
static format(
nums: Flow$StringNumber[],
state: {
left_shift: number,
right_shift: number,
text_line: number
}): boolean;
getNote(): Flow$Note;
setNote(note: Flow$StemmableNote): Flow$StringNumber;
getIndex(): number;
setIndex(index: number): Flow$StringNumber;
setLineEndType(leg: Flow$Renderer.Renderer$LineEndType): Flow$StringNumber;
getPosition(): Flow$Modifier.StaveModifier$Position;
setPosition(position: Flow$Modifier.StaveModifier$Position): Flow$StringNumber;
setStringNumber(number: number): Flow$StringNumber;
setOffsetX(x: number): Flow$StringNumber;
setOffsetY(y: number): Flow$StringNumber;
setLastNote(note: Flow$StemmableNote): Flow$StringNumber;
setDashed(dashed: boolean): Flow$StringNumber;
draw(): void
}


      declare var npm$namespace$StringNumber: {
        
        CATEGORY: typeof StringNumber$CATEGORY,
      }
declare var StringNumber$CATEGORY: string;

declare class Flow$Stroke mixins Flow$Modifier {
constructor(StaveHairpin$type: Flow$Stroke.Stroke$Type, options: {
all_voices?: boolean
}): this;
static format(
strokes: Flow$Stroke[],
state: {
left_shift: number,
right_shift: number,
text_line: number
}): boolean;
getPosition(): Flow$Modifier.StaveModifier$Position;
addEndNote(note: Flow$Note): Flow$Stroke;
draw(): void
}


      declare var npm$namespace$Stroke: {
        
        CATEGORY: typeof Stroke$CATEGORY,
      }
declare  class Stroke$Type {
  constructor(...args: empty): mixed;
static +BRUSH_DOWN: Class<Stroke$Type__BRUSH_DOWN> & Stroke$Type__BRUSH_DOWN & 1;// 1
static +BRUSH_UP: Class<Stroke$Type__BRUSH_UP> & Stroke$Type__BRUSH_UP & 1;// 1
static +ROLL_DOWN: Class<Stroke$Type__ROLL_DOWN> & Stroke$Type__ROLL_DOWN & 2;// 2
static +ROLL_UP: Class<Stroke$Type__ROLL_UP> & Stroke$Type__ROLL_UP & 3;// 3
static +RASQUEDO_DOWN: Class<Stroke$Type__RASQUEDO_DOWN> & Stroke$Type__RASQUEDO_DOWN & 4;// 4
static +RASQUEDO_UP: Class<Stroke$Type__RASQUEDO_UP> & Stroke$Type__RASQUEDO_UP & 5;// 5

}

declare class Stroke$Type__BRUSH_DOWN mixins Stroke$Type {}
declare class Stroke$Type__BRUSH_UP mixins Stroke$Type {}
declare class Stroke$Type__ROLL_DOWN mixins Stroke$Type {}
declare class Stroke$Type__ROLL_UP mixins Stroke$Type {}
declare class Stroke$Type__RASQUEDO_DOWN mixins Stroke$Type {}
declare class Stroke$Type__RASQUEDO_UP mixins Stroke$Type {}


declare var Stroke$CATEGORY: string;

declare class Flow$SVGContext mixins Vex$IRenderContext {
constructor(element: HTMLElement): this;
iePolyfill(): boolean;
setFont(family: string, size: number, weight?: number): Flow$SVGContext;
setRawFont(font: string): Flow$SVGContext;
setFillStyle(style: string): Flow$SVGContext;
setBackgroundFillStyle(style: string): Flow$SVGContext;
setStrokeStyle(style: string): Flow$SVGContext;
setShadowColor(style: string): Flow$SVGContext;
setShadowBlur(blur: string): Flow$SVGContext;
setLineWidth(width: number): Flow$SVGContext;
setLineDash(dash: string): Flow$SVGContext;
setLineCap(cap_type: string): Flow$SVGContext;
resize(width: number, height: number): Flow$SVGContext;
scale(x: number, y: number): Flow$SVGContext;
setViewBox(xMin: number, yMin: number, width: number, height: number): void;
clear(): void;
rect(x: number, y: number, width: number, height: number): Flow$SVGContext;
fillRect(x: number, y: number, width: number, height: number): Flow$SVGContext;
clearRect(x: number, y: number, width: number, height: number): Flow$SVGContext;
beginPath(): Flow$SVGContext;
moveTo(x: number, y: number): Flow$SVGContext;
lineTo(x: number, y: number): Flow$SVGContext;
bezierCurveToTo(
x1: number,
y1: number,
x2: number,
y2: number,
x: number,
y: number): Flow$SVGContext;
quadraticCurveToTo(x1: number, y1: number, x: number, y: number): Flow$SVGContext;
arc(
x: number,
y: number,
radius: number,
startAngle: number,
endAngle: number,
antiClockwise: boolean): Flow$SVGContext;
closePath(): Flow$SVGContext;
glow(): Flow$SVGContext;
fill(): Flow$SVGContext;
stroke(): Flow$SVGContext;
measureText(text: string): SVGRect;
ieMeasureTextFix(
bbox: SVGRect,
text: string): {
x: number,
y: number,
width: number,
height: number
};
fillText(text: string, x: number, y: number): Flow$SVGContext;
save(): Flow$SVGContext;
restore(): Flow$SVGContext
}

declare class Flow$TabNote mixins Flow$StemmableNote {
setStave(stave: Flow$Stave): Flow$Note;
getModifierStartXY(): {
x: number,
y: number
};
constructor(tab_struct: {
positions: {
str: number,
fret: number
}[],
StaveHairpin$type?: string,
dots?: number,
duration: string,
stem_direction?: number
}, draw_stem?: boolean): this;
getCategory(): string;
setGhost(ghost: boolean): Flow$TabNote;
hasStem(): boolean;
getStemExtension(): number;
addDot(): Flow$TabNote;
updateWidth(): void;
setStave(stave: Flow$Stave): Flow$TabNote;
getPositions(): {
str: number,
fret: number
}[];
addToModifierContext(mc: Flow$ModifierContext): Flow$TabNote;
getTieRightX(): number;
getTieLeftX(): number;
getModifierStartXY(
position: Flow$Modifier.StaveModifier$Position,
index: number): {
x: number,
y: number
};
getLineForRest(): number;
preFormat(): void;
getStemX(): number;
getStemY(): number;
getStemExtents(): {
topY: number,
baseY: number
};
drawFlag(): void;
drawModifiers(): void;
drawStemThrough(): void;
draw(): void
}

declare class Flow$TabSlide mixins Flow$TabTie {
constructor(notes: {
first_note: Flow$Note,
last_note: Flow$Note,
first_indices: number[],
last_indices: number[]
}, direction?: number): this;
static createSlideUp(
notes: {
first_note: Flow$Note,
last_note: Flow$Note,
first_indices: number[],
last_indices: number[]
}): Flow$TabSlide;
static createSlideDown(
notes: {
first_note: Flow$Note,
last_note: Flow$Note,
first_indices: number[],
last_indices: number[]
}): Flow$TabSlide;
renderTie(
params: {
first_ys: number[],
last_ys: number[],
last_x_px: number,
first_x_px: number,
direction: number
}): void
}


      declare var npm$namespace$TabSlide: {
        
        SLIDE_UP: typeof TabSlide$SLIDE_UP,
SLIDE_DOWN: typeof TabSlide$SLIDE_DOWN,
      }
declare var TabSlide$SLIDE_UP: number;

declare var TabSlide$SLIDE_DOWN: number;

declare class Flow$TabStave mixins Flow$Stave {
constructor(x: number, y: number, width: number, options?: {
vertical_bar_width?: number,
glyph_spacing_px?: number,
num_lines?: number,
fill_style?: string,
spacing_between_lines_px?: number,
space_above_staff_ln?: number,
space_below_staff_ln?: number,
top_text_position?: number
}): this;
getYForGlyphs(): number;
addTabGlyph(): Flow$TabStave
}

declare class Flow$TabTie mixins Flow$StaveTie {
constructor(notes: {
first_note: Flow$Note,
last_note: Flow$Note,
first_indices: number[],
last_indices: number[]
}, text?: string): this;
createHammeron(
notes: {
first_note: Flow$Note,
last_note: Flow$Note,
first_indices: number[],
last_indices: number[]
}): Flow$TabTie;
createPulloff(
notes: {
first_note: Flow$Note,
last_note: Flow$Note,
first_indices: number[],
last_indices: number[]
}): Flow$TabTie;
draw(): boolean
}

declare class Flow$TextBracket  {
constructor(bracket_data: {
start: Flow$Note,
stop: Flow$Note,
text?: string,
superscript?: string,
position?: Flow$TextBracket.TextBracket$Positions
}): this;
static DEBUG: boolean;
applyStyle(context: Vex$IRenderContext): Flow$TextBracket;
setDashed(dashed: boolean, dash?: number[]): Flow$TextBracket;
setFont(font: {
family: string,
size: number,
weight: string
}): Flow$TextBracket;
setContext(context: Vex$IRenderContext): Flow$TextBracket;
setLine(line: number): Flow$TextBracket;
draw(): void
}

declare  class TextBracket$Positions {
  constructor(...args: empty): mixed;
static +TOP: Class<TextBracket$Positions__TOP> & TextBracket$Positions__TOP & 1;// 1
static +BOTTOM: Class<TextBracket$Positions__BOTTOM> & TextBracket$Positions__BOTTOM & -1;// -1

}

declare class TextBracket$Positions__TOP mixins TextBracket$Positions {}
declare class TextBracket$Positions__BOTTOM mixins TextBracket$Positions {}


declare class Flow$TextDynamics mixins Flow$Note {
constructor(text_struct: {
duration: string,
text: string,
line?: number
}): this;
static DEBUG: boolean;
setLine(line: number): Flow$TextDynamics;
preFormat(): Flow$TextDynamics;
draw(): void
}

declare class Flow$TextNote mixins Flow$Note {
constructor(text_struct: {
duration: string,
text?: string,
superscript?: boolean,
subscript?: boolean,
glyph?: string,
font?: {
family: string,
size: number,
weight: string
},
line?: number,
smooth?: boolean,
ignore_ticks?: boolean
}): this;
setJustification(just: Flow$TextNote.TextNote$Justification): Flow$TextNote;
setLine(line: number): Flow$TextNote;
preFormat(): void;
draw(): void
}


      declare var npm$namespace$TextNote: {
        
        GLYPHS: typeof TextNote$GLYPHS,
      }
declare  class TextNote$Justification {
  constructor(...args: empty): mixed;
static +LEFT: Class<TextNote$Justification__LEFT> & TextNote$Justification__LEFT & 1;// 1
static +CENTER: Class<TextNote$Justification__CENTER> & TextNote$Justification__CENTER & 1;// 1
static +RIGHT: Class<TextNote$Justification__RIGHT> & TextNote$Justification__RIGHT & 2;// 2

}

declare class TextNote$Justification__LEFT mixins TextNote$Justification {}
declare class TextNote$Justification__CENTER mixins TextNote$Justification {}
declare class TextNote$Justification__RIGHT mixins TextNote$Justification {}


declare var TextNote$GLYPHS: {
[name: string]: {
code: string,
point: number,
x_shift: number,
y_shift: number
}
};

declare interface Flow$Tickable {
setContext(context: Vex$IRenderContext): void,
getBoundingBox(): Flow$BoundingBox,
getTicks(): Flow$Fraction,
shouldIgnoreTicks(): boolean,
getWidth(): number,
setXShift(x: number): Flow$Tickable,
getCenterXShift(): number,
isCenterAligned(): boolean,
setCenterAlignment(align_center: boolean): Flow$Tickable,
getVoice(): Flow$Voice,
setVoice(voice: Flow$Voice): void,
getTuplet(): Flow$Tuplet,
setTuplet(tuplet: Flow$Tuplet): Flow$Tickable,
addToModifierContext(mc: Flow$ModifierContext): void,
addModifier(mod: Flow$Modifier): Flow$Tickable,
setTickContext(tc: Flow$TickContext): void,
preFormat(): void,
postFormat(): Flow$Tickable,
getIntrinsicTicks(): Flow$Fraction,
setIntrinsicTicks(intrinsicTicks: Flow$Fraction): void,
getTickMultiplier(): Flow$Fraction,
applyTickMultiplier(numerator: number, denominator: number): void,
setDuration(duration: Flow$Fraction): void
} 

declare class Flow$TickContext  {
setContext(context: Vex$IRenderContext): void;
getContext(): Vex$IRenderContext;
shouldIgnoreTicks(): boolean;
getWidth(): number;
getX(): number;
setX(x: number): Flow$TickContext;
getXBase(): number;
setXBase(xBase: number): void;
getXOffset(): number;
setXOffset(xOffset: number): void;
getPixelsUsed(): number;
setPixelsUsed(pixelsUsed: number): Flow$TickContext;
setPadding(padding: number): Flow$TickContext;
getMaxTicks(): number;
getMinTicks(): number;
getTickables(): Flow$Tickable[];
getCenterAlignedTickables(): Flow$Tickable[];
getMetrics(): {
width: number,
notePx: number,
extraLeftPx: number,
extraRightPx: number
};
getCurrentTick(): Flow$Fraction;
setCurrentTick(tick: Flow$Fraction): void;
getExtraPx(): {
left: number,
right: number,
extraLeft: number,
extraRight: number
};
addTickable(tickable: Flow$Tickable): Flow$TickContext;
preFormat(): Flow$TickContext;
postFormat(): Flow$TickContext;
static getNextContext(tContext: Flow$TickContext): Flow$TickContext
}

declare class Flow$TimeSignature mixins Flow$StaveModifier {
addModifier(): void;
addEndModifier(): void;
constructor(timeSpec: string, customPadding?: number): this;
parseTimeSpec(timeSpec: string): {
num: number,
glyph: Flow$Glyph
};
makeTimeSignatureGlyph(topNums: number[], botNums: number[]): Flow$Glyph;
getTimeSig(): {
num: number,
glyph: Flow$Glyph
};
addModifier(stave: Flow$Stave): void;
addEndModifier(stave: Flow$Stave): void
}


      declare var npm$namespace$TimeSignature: {
        
        glyphs: typeof TimeSignature$glyphs,
      }
declare var TimeSignature$glyphs: {
[name: string]: {
code: string,
point: number,
line: number
}
};

declare class Flow$TimeSigNote mixins Flow$Note {
setStave(stave: Flow$Stave): Flow$Note;
constructor(timeSpec: string, customPadding: number): this;
setStave(stave: Flow$Stave): void;
getBoundingBox(): Flow$BoundingBox;
addToModifierContext(): Flow$TimeSigNote;
preFormat(): Flow$TimeSigNote;
draw(): void
}

declare class Flow$Tremolo mixins Flow$Modifier {
constructor(num: number): this;
getCategory(): string;
draw(): void
}

declare class Flow$Tuning  {
constructor(tuningString?: string): this;
noteToInteger(noteString: string): number;
setTuning(tuningString: string): void;
getValueForString(stringNum: string): number;
getValueForFret(fretNum: string, stringNum: string): number;
getNoteForFret(fretNum: string, stringNum: string): string
}


      declare var npm$namespace$Tuning: {
        
        names: typeof Tuning$names,
      }
declare var Tuning$names: {
[name: string]: string
};

declare class Flow$Tuplet  {
constructor(notes: Flow$StaveNote[], options?: {
num_notes?: number,
beats_occupied?: number
}): this;
attach(): void;
detach(): void;
setContext(context: Vex$IRenderContext): Flow$Tuplet;
setBracketed(bracketed: boolean): Flow$Tuplet;
setRatioed(ratioed: boolean): Flow$Tuplet;
setTupletLocation(location: number): Flow$Tuplet;
getNotes(): Flow$StaveNote[];
getNoteCount(): number;
getBeatsOccupied(): number;
setBeatsOccupied(beats: number): void;
resolveGlyphs(): void;
draw(): void
}


      declare var npm$namespace$Tuplet: {
        
        LOCATION_TOP: typeof Tuplet$LOCATION_TOP,
LOCATION_BOTTOM: typeof Tuplet$LOCATION_BOTTOM,
      }
declare var Tuplet$LOCATION_TOP: number;

declare var Tuplet$LOCATION_BOTTOM: number;

declare class Flow$Vibrato mixins Flow$Modifier {
static format(
vibratos: Flow$Vibrato[],
state: {
left_shift: number,
right_shift: number,
text_line: number
},
context: Flow$ModifierContext): boolean;
setHarsh(harsh: boolean): Flow$Vibrato;
setVibratoWidth(width: number): Flow$Vibrato;
draw(): void
}


      declare var npm$namespace$Vibrato: {
        
        CATEGORY: typeof Vibrato$CATEGORY,
      }
declare var Vibrato$CATEGORY: string;

declare class Flow$Voice  {
constructor(time: {
num_beats?: number,
beat_value?: number,
resolution?: number
}): this;
getTotalTicks(): Flow$Fraction;
getTicksUsed(): Flow$Fraction;
getLargestTickWidth(): number;
getSmallestTickCount(): Flow$Fraction;
getTickables(): Flow$Tickable[];
getMode(): number;
setMode(mode: number): Flow$Voice;
getResolutionMultiplier(): number;
getActualResolution(): number;
setStave(stave: Flow$Stave): Flow$Voice;
getBoundingBox(): Flow$BoundingBox;
getVoiceGroup(): Flow$VoiceGroup;
setVoiceGroup(g: Flow$VoiceGroup): Flow$Voice;
setStrict(strict: boolean): Flow$Voice;
isComplete(): boolean;
addTickable(tickable: Flow$Tickable): Flow$Voice;
addTickables(tickables: Flow$Tickable[]): Flow$Voice;
preFormat(): Flow$Voice;
draw(context: Vex$IRenderContext, stave?: Flow$Stave): void
}

declare  class Voice$Mode {
  constructor(...args: empty): mixed;
static +STRICT: Class<Voice$Mode__STRICT> & Voice$Mode__STRICT & 1;// 1
static +SOFT: Class<Voice$Mode__SOFT> & Voice$Mode__SOFT & 1;// 1
static +FULL: Class<Voice$Mode__FULL> & Voice$Mode__FULL & 2;// 2

}

declare class Voice$Mode__STRICT mixins Voice$Mode {}
declare class Voice$Mode__SOFT mixins Voice$Mode {}
declare class Voice$Mode__FULL mixins Voice$Mode {}


declare class Flow$VoiceGroup  {
getVoices(): Flow$Voice[];
getModifierContexts(): Flow$ModifierContext[];
addVoice(voice: Flow$Voice): void
}

declare class Flow$Volta mixins Flow$StaveModifier {
constructor(StaveHairpin$type: Flow$Volta.StaveHairpin$type, number: number, x: number, y_shift: number): this;
getCategory(): string;
setShiftY(y: number): Flow$Volta;
draw(stave: Flow$Stave, x: number): Flow$Volta
}

declare  class Volta$type {
  constructor(...args: empty): mixed;
static +NONE: Class<Volta$type__NONE> & Volta$type__NONE & 1;// 1
static +BEGIN: Class<Volta$type__BEGIN> & Volta$type__BEGIN & 1;// 1
static +MID: Class<Volta$type__MID> & Volta$type__MID & 2;// 2
static +END: Class<Volta$type__END> & Volta$type__END & 3;// 3
static +BEGIN_END: Class<Volta$type__BEGIN_END> & Volta$type__BEGIN_END & 4;// 4

}

declare class Volta$type__NONE mixins Volta$type {}
declare class Volta$type__BEGIN mixins Volta$type {}
declare class Volta$type__MID mixins Volta$type {}
declare class Volta$type__END mixins Volta$type {}
declare class Volta$type__BEGIN_END mixins Volta$type {}
declare module 'vexflow' {
        declare module.exports: typeof Vex

    }
