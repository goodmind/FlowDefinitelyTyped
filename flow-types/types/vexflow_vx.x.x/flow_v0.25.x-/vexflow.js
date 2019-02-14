declare function sanitizeDuration(duration: string): string;

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

  RuntimeError: typeof Vex$RuntimeError,
  RERR: typeof Vex$RERR,
  Flow: typeof npm$namespace$Vex$Flow
};
declare function Vex$L(block: string, args: any[]): void;

declare function Vex$Merge<T: Object>(destination: T, source: Object): T;

declare function Vex$Min(a: number, b: number): number;

declare function Vex$Max(a: number, b: number): number;

declare function Vex$RoundN(x: number, n: number): number;

declare function Vex$MidLine(a: number, b: number): number;

declare function Vex$SortAndUnique<T: any[]>(
  arr: T,
  cmp: Function,
  eq: Function
): T;

declare function Vex$Contains(a: any[], obj: any): boolean;

declare function Vex$getCanvasContext(
  canvas_sel: string
): CanvasRenderingContext2D;

declare function Vex$drawDot(
  ctx: Vex$IRenderContext,
  x: number,
  y: number,
  color?: string
): void;

declare function Vex$BM(s: number, f: Function): void;

declare function Vex$Inherit<T: Object>(
  child: T,
  parent: Object,
  object: Object
): T;

declare class Vex$RuntimeError {
  constructor(code: string, message: string): this;
}

declare class Vex$RERR {
  constructor(code: string, message: string): this;
}

/**
 * Helper interface for handling the different rendering contexts (i.e. CanvasContext, RaphaelContext, SVGContext). Not part of VexFlow!
 */
declare interface Vex$IRenderContext {
  clear(): void;
  setFont(family: string, size: number, weight?: number): Vex$IRenderContext;
  setRawFont(font: string): Vex$IRenderContext;
  setFillStyle(style: string): Vex$IRenderContext;
  setBackgroundFillStyle(style: string): Vex$IRenderContext;
  setStrokeStyle(style: string): Vex$IRenderContext;
  setShadowColor(color: string): Vex$IRenderContext;
  setShadowBlur(blur: string): Vex$IRenderContext;
  setLineWidth(width: number): Vex$IRenderContext;
  setLineCap(cap_type: string): Vex$IRenderContext;
  setLineDash(dash: string): Vex$IRenderContext;
  scale(x: number, y: number): Vex$IRenderContext;
  resize(width: number, height: number): Vex$IRenderContext;
  fillRect(
    x: number,
    y: number,
    width: number,
    height: number
  ): Vex$IRenderContext;
  clearRect(
    x: number,
    y: number,
    width: number,
    height: number
  ): Vex$IRenderContext;
  beginPath(): Vex$IRenderContext;
  moveTo(x: number, y: number): Vex$IRenderContext;
  lineTo(x: number, y: number): Vex$IRenderContext;
  bezierCurveToTo(
    x1: number,
    y1: number,
    x2: number,
    y2: number,
    x: number,
    y: number
  ): Vex$IRenderContext;
  quadraticCurveToTo(
    x1: number,
    y1: number,
    x2: number,
    y2: number
  ): Vex$IRenderContext;
  arc(
    x: number,
    y: number,
    radius: number,
    startAngle: number,
    endAngle: number,
    antiClockwise: boolean
  ): Vex$IRenderContext;
  glow(): Vex$IRenderContext;
  fill(): Vex$IRenderContext;
  stroke(): Vex$IRenderContext;
  closePath(): Vex$IRenderContext;
  fillText(text: string, x: number, y: number): Vex$IRenderContext;
  save(): Vex$IRenderContext;
  restore(): Vex$IRenderContext;

  /**
   * canvas returns TextMetrics, SVG returns SVGRect, Raphael returns {width : number, height : number}. Only width is used throughout VexFlow.
   */
  measureText(
    text: string
  ): {
    width: number
  };
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
  }[];
  cssFontWeight: string;
  ascender: number;
  underlinePosition: number;
  cssFontStyle: string;
  boundingBox: {
    yMin: number,
    xMin: number,
    yMax: number,
    xMax: number
  };
  resolution: number;
  descender: number;
  familyName: string;
  lineHeight: number;
  underlineThickness: number;

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
  };
}

declare var npm$namespace$Vex$Flow: {
  clefProperties: typeof Vex$Flow$clefProperties,
  keyProperties: typeof Vex$Flow$keyProperties,
  integerToNote: typeof Vex$Flow$integerToNote,
  tabToGlyph: typeof Vex$Flow$tabToGlyph,
  textWidth: typeof Vex$Flow$textWidth,
  articulationCodes: typeof Vex$Flow$articulationCodes,
  accidentalCodes: typeof Vex$Flow$accidentalCodes,
  ornamentCodes: typeof Vex$Flow$ornamentCodes,
  keySignature: typeof Vex$Flow$keySignature,
  parseNoteDurationString: typeof Vex$Flow$parseNoteDurationString,
  parseNoteData: typeof Vex$Flow$parseNoteData,
  durationToFraction: typeof Vex$Flow$durationToFraction,
  durationToNumber: typeof Vex$Flow$durationToNumber,
  durationToTicks: typeof Vex$Flow$durationToTicks,
  durationToGlyph: typeof Vex$Flow$durationToGlyph,
  renderGlyph: typeof Vex$Flow$renderGlyph,
  RESOLUTION: typeof Vex$Flow$RESOLUTION,
  STEM_WIDTH: typeof Vex$Flow$STEM_WIDTH,
  STEM_HEIGHT: typeof Vex$Flow$STEM_HEIGHT,
  STAVE_LINE_THICKNESS: typeof Vex$Flow$STAVE_LINE_THICKNESS,
  TIME4_4: typeof Vex$Flow$TIME4_4,
  unicode: typeof Vex$Flow$unicode,
  Font: typeof Vex$Flow$Font,

  Accidental: typeof Vex$Flow$Accidental,
  Annotation: typeof Vex$Flow$Annotation,
  Articulation: typeof Vex$Flow$Articulation,
  BarNote: typeof Vex$Flow$BarNote,
  Barline: typeof Vex$Flow$Barline,
  Beam: typeof Vex$Flow$Beam,
  Bend: typeof Vex$Flow$Bend,
  BoundingBox: typeof Vex$Flow$BoundingBox,
  CanvasContext: typeof Vex$Flow$CanvasContext,
  Clef: typeof Vex$Flow$Clef,
  ClefNote: typeof Vex$Flow$ClefNote,
  Crescendo: typeof Vex$Flow$Crescendo,
  Curve: typeof Vex$Flow$Curve,
  Dot: typeof Vex$Flow$Dot,
  Formatter: typeof Vex$Flow$Formatter,
  Fraction: typeof Vex$Flow$Fraction,
  FretHandFinger: typeof Vex$Flow$FretHandFinger,
  GhostNote: typeof Vex$Flow$GhostNote,
  Glyph: typeof Vex$Flow$Glyph,
  GraceNote: typeof Vex$Flow$GraceNote,
  GraceNoteGroup: typeof Vex$Flow$GraceNoteGroup,
  KeyManager: typeof Vex$Flow$KeyManager,
  KeySignature: typeof Vex$Flow$KeySignature,
  Modifier: typeof Vex$Flow$Modifier,
  ModifierContext: typeof Vex$Flow$ModifierContext,
  Music: typeof Vex$Flow$Music,
  Note: typeof Vex$Flow$Note,
  NoteHead: typeof Vex$Flow$NoteHead,
  NoteSubGroup: typeof Vex$Flow$NoteSubGroup,
  Ornament: typeof Vex$Flow$Ornament,
  PedalMarking: typeof Vex$Flow$PedalMarking,
  RaphaelContext: typeof Vex$Flow$RaphaelContext,
  Renderer: typeof Vex$Flow$Renderer,
  Repetition: typeof Vex$Flow$Repetition,
  Stave: typeof Vex$Flow$Stave,
  StaveConnector: typeof Vex$Flow$StaveConnector,
  StaveHairpin: typeof Vex$Flow$StaveHairpin,
  StaveLine: typeof Vex$Flow$StaveLine,
  StaveModifier: typeof Vex$Flow$StaveModifier,
  StaveNote: typeof Vex$Flow$StaveNote,
  StaveSection: typeof Vex$Flow$StaveSection,
  StaveTempo: typeof Vex$Flow$StaveTempo,
  StaveText: typeof Vex$Flow$StaveText,
  StaveTie: typeof Vex$Flow$StaveTie,
  Stem: typeof Vex$Flow$Stem,
  StemmableNote: typeof Vex$Flow$StemmableNote,
  StringNumber: typeof Vex$Flow$StringNumber,
  Stroke: typeof Vex$Flow$Stroke,
  SVGContext: typeof Vex$Flow$SVGContext,
  TabNote: typeof Vex$Flow$TabNote,
  TabSlide: typeof Vex$Flow$TabSlide,
  TabStave: typeof Vex$Flow$TabStave,
  TabTie: typeof Vex$Flow$TabTie,
  TextBracket: typeof Vex$Flow$TextBracket,
  TextDynamics: typeof Vex$Flow$TextDynamics,
  TextNote: typeof Vex$Flow$TextNote,
  TickContext: typeof Vex$Flow$TickContext,
  TimeSignature: typeof Vex$Flow$TimeSignature,
  TimeSigNote: typeof Vex$Flow$TimeSigNote,
  Tremolo: typeof Vex$Flow$Tremolo,
  Tuning: typeof Vex$Flow$Tuning,
  Tuplet: typeof Vex$Flow$Tuplet,
  Vibrato: typeof Vex$Flow$Vibrato,
  Voice: typeof Vex$Flow$Voice,
  VoiceGroup: typeof Vex$Flow$VoiceGroup,
  Volta: typeof Vex$Flow$Volta,
  Accidental: typeof npm$namespace$Vex$Flow$Accidental,
  Annotation: typeof npm$namespace$Vex$Flow$Annotation,
  Articulation: typeof npm$namespace$Vex$Flow$Articulation,
  Barline: typeof npm$namespace$Vex$Flow$Barline,
  Bend: typeof npm$namespace$Vex$Flow$Bend,
  Curve: typeof npm$namespace$Vex$Flow$Curve,
  Dot: typeof npm$namespace$Vex$Flow$Dot,
  FretHandFinger: typeof npm$namespace$Vex$Flow$FretHandFinger,
  GraceNoteGroup: typeof npm$namespace$Vex$Flow$GraceNoteGroup,
  Modifier: typeof npm$namespace$Vex$Flow$Modifier,
  Music: typeof npm$namespace$Vex$Flow$Music,
  Note: typeof npm$namespace$Vex$Flow$Note,
  Ornament: typeof npm$namespace$Vex$Flow$Ornament,
  PedalMarking: typeof npm$namespace$Vex$Flow$PedalMarking,
  Renderer: typeof npm$namespace$Vex$Flow$Renderer,
  Repetition: typeof npm$namespace$Vex$Flow$Repetition,
  StaveConnector: typeof npm$namespace$Vex$Flow$StaveConnector,
  StaveHairpin: typeof npm$namespace$Vex$Flow$StaveHairpin,
  StaveLine: typeof npm$namespace$Vex$Flow$StaveLine,
  StaveModifier: typeof npm$namespace$Vex$Flow$StaveModifier,
  StaveNote: typeof npm$namespace$Vex$Flow$StaveNote,
  Stem: typeof npm$namespace$Vex$Flow$Stem,
  StringNumber: typeof npm$namespace$Vex$Flow$StringNumber,
  Stroke: typeof npm$namespace$Vex$Flow$Stroke,
  TabSlide: typeof npm$namespace$Vex$Flow$TabSlide,
  TextBracket: typeof npm$namespace$Vex$Flow$TextBracket,
  TextNote: typeof npm$namespace$Vex$Flow$TextNote,
  TimeSignature: typeof npm$namespace$Vex$Flow$TimeSignature,
  Tuning: typeof npm$namespace$Vex$Flow$Tuning,
  Tuplet: typeof npm$namespace$Vex$Flow$Tuplet,
  Vibrato: typeof npm$namespace$Vex$Flow$Vibrato,
  Voice: typeof npm$namespace$Vex$Flow$Voice,
  Volta: typeof npm$namespace$Vex$Flow$Volta
};
declare var Vex$Flow$RESOLUTION: number;

declare var Vex$Flow$STEM_WIDTH: number;

declare var Vex$Flow$STEM_HEIGHT: number;

declare var Vex$Flow$STAVE_LINE_THICKNESS: number;

declare var Vex$Flow$TIME4_4: {
  num_beats: number,
  beat_value: number,
  resolution: number
};

declare var Vex$Flow$unicode: {
  [name: string]: string
};

declare function Vex$Flow$clefProperties(
  clef: string
): {
  line_shift: number
};

declare function Vex$Flow$keyProperties(
  key: string,
  clef: string,
  params: {
    octave_shift?: number
  }
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
};

declare function Vex$Flow$integerToNote(integer: number): string;

declare function Vex$Flow$tabToGlyph(
  fret: string
): {
  text: string,
  code: number,
  width: number,
  shift_y: number
};

declare function Vex$Flow$textWidth(text: string): number;

declare function Vex$Flow$articulationCodes(
  artic: string
): {
  code: string,
  width: number,
  shift_right: number,
  shift_up: number,
  shift_down: number,
  between_lines: boolean
};

declare function Vex$Flow$accidentalCodes(
  acc: string
): {
  code: string,
  width: number,
  gracenote_width: number,
  shift_right: number,
  shift_down: number
};

declare function Vex$Flow$ornamentCodes(
  acc: string
): {
  code: string,
  shift_right: number,
  shift_up: number,
  shift_down: number,
  width: number
};

declare function Vex$Flow$keySignature(
  spec: string
): {
  type: string,
  line: number
}[];

declare function Vex$Flow$parseNoteDurationString(
  durationString: string
): {
  duration: string,
  dots: number,
  type: string
};

declare function Vex$Flow$parseNoteData(noteData: {
  duration: string,
  dots: number,
  type: string
}): {
  duration: string,
  type: string,
  dots: number,
  ticks: number
};

declare function Vex$Flow$durationToFraction(duration: string): Flow$Fraction;

declare function Vex$Flow$durationToNumber(duration: string): number;

declare function Vex$Flow$durationToTicks(duration: string): number;

declare function Vex$Flow$durationToGlyph(
  duration: string,
  type: string
): {
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
};

declare function Vex$Flow$renderGlyph(
  ctx: Vex$IRenderContext,
  x_pos: number,
  y_pos: number,
  point: number,
  val: string,
  nocache: boolean
): void;

declare var Vex$Flow$Font: {
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

declare class Vex$Flow$Accidental mixins Modifier {
  setNote(note: Flow$Note): Flow$Modifier;
  constructor(type: string): this;
  static DEBUG: boolean;
  static format(
    accidentals: Vex$Flow$Accidental[],
    state: {
      left_shift: number,
      right_shift: number,
      text_line: number
    }
  ): void;
  setNote(note: Flow$StaveNote): void;
  setAsCautionary(): Vex$Flow$Accidental;
  draw(): void;
  static applyAccidentals(voices: Flow$Voice[], keySignature?: string): void;
}

declare var npm$namespace$Vex$Flow$Accidental: {
  CATEGORY: typeof Vex$Flow$Accidental$CATEGORY
};
declare var Vex$Flow$Accidental$CATEGORY: string;

declare class Vex$Flow$Annotation mixins Modifier {
  constructor(text: string): this;
  static DEBUG: boolean;
  static format(
    annotations: Vex$Flow$Annotation[],
    state: {
      left_shift: number,
      right_shift: number,
      text_line: number
    }
  ): boolean;
  setTextLine(line: number): Vex$Flow$Annotation;
  setFont(family: string, size: number, weight: string): Vex$Flow$Annotation;
  setVerticalJustification(
    just: Annotation$VerticalJustify
  ): Vex$Flow$Annotation;
  getJustification(): Annotation$Justify;
  setJustification(justification: Annotation$Justify): Vex$Flow$Annotation;
  draw(): void;
}

declare var npm$namespace$Vex$Flow$Annotation: {
  CATEGORY: typeof Vex$Flow$Annotation$CATEGORY,
  Justify: typeof Vex$Flow$Annotation$Justify,
  VerticalJustify: typeof Vex$Flow$Annotation$VerticalJustify
};

declare var Vex$Flow$Annotation$Justify: {|
  +LEFT: 1, // 1
  +CENTER: 1, // 1
  +RIGHT: 2, // 2
  +CENTER_STEM: 3 // 3
|};

declare var Vex$Flow$Annotation$VerticalJustify: {|
  +TOP: 1, // 1
  +CENTER: 1, // 1
  +BOTTOM: 2, // 2
  +CENTER_STEM: 3 // 3
|};

declare var Vex$Flow$Annotation$CATEGORY: string;

declare class Vex$Flow$Articulation mixins Modifier {
  constructor(type: string): this;
  static DEBUG: boolean;
  static format(
    articulations: Vex$Flow$Articulation[],
    state: {
      left_shift: number,
      right_shift: number,
      text_line: number
    }
  ): boolean;
  draw(): void;
}

declare var npm$namespace$Vex$Flow$Articulation: {
  CATEGORY: typeof Vex$Flow$Articulation$CATEGORY
};
declare var Vex$Flow$Articulation$CATEGORY: string;

declare class Vex$Flow$BarNote mixins Note {
  static DEBUG: boolean;
  constructor(): this;
  getType(): Barline$type;
  setType(type: Barline$type): Vex$Flow$BarNote;
  getBoundingBox(): Flow$BoundingBox;
  addToModifierContext(): Vex$Flow$BarNote;
  preFormat(): Vex$Flow$BarNote;
  draw(): void;
}

declare var npm$namespace$Vex$Flow$Barline: {
  type: typeof Vex$Flow$Barline$type
};

declare var Vex$Flow$Barline$type: {|
  +SINGLE: 1, // 1
  +DOUBLE: 1, // 1
  +END: 2, // 2
  +REPEAT_BEGIN: 3, // 3
  +REPEAT_END: 4, // 4
  +REPEAT_BOTH: 5, // 5
  +NONE: 6 // 6
|};

declare class Vex$Flow$Barline mixins StaveModifier {
  constructor(type: Barline$type, x: number): this;
  getCategory(): string;
  setX(x: number): Vex$Flow$Barline;
  draw(stave: Flow$Stave, x_shift?: number): void;
  drawVerticalBar(stave: Flow$Stave, x: number, double_bar?: boolean): void;
  drawVerticalEndBar(stave: Flow$Stave, x: number): void;
  drawRepeatBar(stave: Flow$Stave, x: number, begin: boolean): void;
}

declare class Vex$Flow$Beam {
  constructor(notes: Flow$StemmableNote[], auto_stem?: boolean): this;
  setContext(context: Vex$IRenderContext): Vex$Flow$Beam;
  getNotes(): Flow$StemmableNote[];
  getBeamCount(): number;
  breakSecondaryAt(indices: number[]): Vex$Flow$Beam;
  getSlopeY(): number;
  calculateSlope(): void;
  applyStemExtensions(): void;
  getBeamLines(
    duration: string
  ): {
    start: number,
    end: number
  }[];
  drawStems(): void;
  drawBeamLines(): void;
  preFormat(): Vex$Flow$Beam;
  postFormat(): Vex$Flow$Beam;
  draw(): boolean;
  calculateStemDirection(notes: Flow$Note): number;
  static getDefaultBeamGroups(time_sig: string): Flow$Fraction[];
  static applyAndGetBeams(
    voice: Flow$Voice,
    stem_direction: number,
    groups: Flow$Fraction[]
  ): Vex$Flow$Beam[];
  static generateBeams(
    notes: Flow$StemmableNote[],
    config?: {
      groups?: Flow$Fraction[],
      stem_direction?: number,
      beam_rests?: boolean,
      beam_middle_only?: boolean,
      show_stemlets?: boolean,
      maintain_stem_directions?: boolean
    }
  ): Vex$Flow$Beam[];
}

declare class Vex$Flow$Bend mixins Modifier {
  constructor(
    text: string,
    release?: boolean,
    phrase?: {
      type: number,
      text: string,
      width: number
    }[]
  ): this;
  static UP: number;
  static DOWN: number;
  static format(
    bends: Vex$Flow$Bend[],
    state: {
      left_shift: number,
      right_shift: number,
      text_line: number
    }
  ): boolean;
  setXShift(value: number): void;
  setFont(font: string): Vex$Flow$Bend;
  getText(): string;
  updateWidth(): Vex$Flow$Bend;
  draw(): void;
}

declare var npm$namespace$Vex$Flow$Bend: {
  CATEGORY: typeof Vex$Flow$Bend$CATEGORY
};
declare var Vex$Flow$Bend$CATEGORY: string;

declare class Vex$Flow$BoundingBox {
  constructor(x: number, y: number, w: number, h: number): this;
  static copy(that: Vex$Flow$BoundingBox): Vex$Flow$BoundingBox;
  getX(): number;
  getY(): number;
  getW(): number;
  getH(): number;
  setX(x: number): Vex$Flow$BoundingBox;
  setY(y: number): Vex$Flow$BoundingBox;
  setW(w: number): Vex$Flow$BoundingBox;
  setH(h: number): Vex$Flow$BoundingBox;
  move(x: number, y: number): void;
  clone(): Vex$Flow$BoundingBox;
  mergeWith(
    boundingBox: Vex$Flow$BoundingBox,
    ctx?: Vex$IRenderContext
  ): Vex$Flow$BoundingBox;
  draw(ctx: Vex$IRenderContext, x: number, y: number): void;
}

declare class Vex$Flow$CanvasContext mixins IRenderContext {
  setLineDash(dash: string): Vex$Flow$CanvasContext;
  scale(x: number, y: number): Vex$Flow$CanvasContext;
  resize(width: number, height: number): Vex$Flow$CanvasContext;
  fillRect(
    x: number,
    y: number,
    width: number,
    height: number
  ): Vex$Flow$CanvasContext;
  clearRect(
    x: number,
    y: number,
    width: number,
    height: number
  ): Vex$Flow$CanvasContext;
  beginPath(): Vex$Flow$CanvasContext;
  moveTo(x: number, y: number): Vex$Flow$CanvasContext;
  lineTo(x: number, y: number): Vex$Flow$CanvasContext;
  bezierCurveToTo(
    x1: number,
    y1: number,
    x2: number,
    y2: number,
    x: number,
    y: number
  ): Vex$Flow$CanvasContext;
  quadraticCurveToTo(
    x1: number,
    y1: number,
    x2: number,
    y2: number
  ): Vex$Flow$CanvasContext;
  arc(
    x: number,
    y: number,
    radius: number,
    startAngle: number,
    endAngle: number,
    antiClockwise: boolean
  ): Vex$Flow$CanvasContext;
  glow(): Vex$Flow$CanvasContext;
  fill(): Vex$Flow$CanvasContext;
  stroke(): Vex$Flow$CanvasContext;
  closePath(): Vex$Flow$CanvasContext;
  fillText(text: string, x: number, y: number): Vex$Flow$CanvasContext;
  save(): Vex$Flow$CanvasContext;
  restore(): Vex$Flow$CanvasContext;
  constructor(context: CanvasRenderingContext2D): this;
  static WIDTH: number;
  static HEIGHT: number;
  clear(): void;
  setFont(
    family: string,
    size: number,
    weight?: number
  ): Vex$Flow$CanvasContext;
  setRawFont(font: string): Vex$Flow$CanvasContext;
  setFillStyle(style: string): Vex$Flow$CanvasContext;
  setBackgroundFillStyle(style: string): Vex$Flow$CanvasContext;
  setStrokeStyle(style: string): Vex$Flow$CanvasContext;
  setShadowColor(style: string): Vex$Flow$CanvasContext;
  setShadowBlur(blur: string): Vex$Flow$CanvasContext;
  setLineWidth(width: number): Vex$Flow$CanvasContext;
  setLineCap(cap_type: string): Vex$Flow$CanvasContext;
  setLineDash(dash: string): void;
  scale(x: number, y: number): void;
  resize(width: number, height: number): void;
  fillRect(x: number, y: number, width: number, height: number): void;
  clearRect(x: number, y: number, width: number, height: number): void;
  beginPath(): void;
  moveTo(x: number, y: number): void;
  lineTo(x: number, y: number): void;
  bezierCurveToTo(
    x1: number,
    y1: number,
    x2: number,
    y2: number,
    x: number,
    y: number
  ): void;
  quadraticCurveToTo(x1: number, y1: number, x: number, y: number): void;
  arc(
    x: number,
    y: number,
    radius: number,
    startAngle: number,
    endAngle: number,
    antiClockwise: boolean
  ): void;
  glow(): void;
  fill(): void;
  stroke(): void;
  closePath(): void;
  measureText(text: string): TextMetrics;
  fillText(text: string, x: number, y: number): void;
  save(): void;
  restore(): void;
}

declare class Vex$Flow$Clef mixins StaveModifier {
  addModifier(): void;
  addEndModifier(): void;
  constructor(clef: string, size?: string, annotation?: string): this;
  static DEBUG: boolean;
  addModifier(stave: Flow$Stave): void;
  addEndModifier(stave: Flow$Stave): void;
}

declare class Vex$Flow$ClefNote mixins Note {
  setStave(stave: Flow$Stave): Flow$Note;
  constructor(clef: string, size?: string, annotation?: string): this;
  setClef(clef: string, size?: string, annotation?: string): Vex$Flow$ClefNote;
  getClef(): string;
  setStave(stave: Flow$Stave): void;
  getBoundingBox(): Vex$Flow$BoundingBox;
  addToModifierContext(): Vex$Flow$ClefNote;
  getCategory(): string;
  preFormat(): Vex$Flow$ClefNote;
  draw(): void;
}

declare class Vex$Flow$Crescendo mixins Note {
  constructor(note_struct: {
    duration: number,
    line?: number
  }): this;
  static DEBUG: boolean;
  setLine(line: number): Vex$Flow$Crescendo;
  setHeight(height: number): Vex$Flow$Crescendo;
  setDecrescendo(decresc: boolean): Vex$Flow$Crescendo;
  preFormat(): Vex$Flow$Crescendo;
  draw(): void;
}

declare class Vex$Flow$Curve {
  constructor(
    from: Flow$Note,
    to: Flow$Note,
    options?: {
      spacing?: number,
      thickness?: number,
      x_shift?: number,
      y_shift: number,
      position: Curve$Position,
      invert: boolean,
      cps?: {
        x: number,
        y: number
      }[]
    }
  ): this;
  static DEBUG: boolean;
  setContext(context: Vex$IRenderContext): Vex$Flow$Curve;
  setNotes(from: Flow$Note, to: Flow$Note): Vex$Flow$Curve;
  isPartial(): boolean;
  renderCurve(params: {
    first_x: number,
    first_y: number,
    last_x: number,
    last_y: number,
    direction: number
  }): void;
  draw(): boolean;
}

declare var npm$namespace$Vex$Flow$Curve: {
  Position: typeof Vex$Flow$Curve$Position
};

declare var Vex$Flow$Curve$Position: {|
  +NEAR_HEAD: 1, // 1
  +NEAR_TOP: 1 // 1
|};

declare class Vex$Flow$Dot mixins Modifier {
  setNote(note: Flow$Note): Vex$Flow$Dot;
  static format(
    dots: number,
    state: {
      left_shift: number,
      right_shift: number,
      text_line: number
    }
  ): void;
  setNote(note: Flow$Note): void;
  setDotShiftY(y: number): Vex$Flow$Dot;
  draw(): void;
}

declare var npm$namespace$Vex$Flow$Dot: {
  CATEGORY: typeof Vex$Flow$Dot$CATEGORY
};
declare var Vex$Flow$Dot$CATEGORY: string;

declare class Vex$Flow$Formatter {
  static DEBUG: boolean;
  static FormatAndDraw(
    ctx: Vex$IRenderContext,
    stave: Flow$Stave,
    notes: Flow$Note[],
    params?: {
      auto_beam: boolean,
      align_rests: boolean
    }
  ): Vex$Flow$BoundingBox;
  static FormatAndDraw(
    ctx: Vex$IRenderContext,
    stave: Flow$Stave,
    notes: Flow$Note[],
    params?: boolean
  ): Vex$Flow$BoundingBox;
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
    }
  ): void;
  static FormatAndDrawTab(
    ctx: Vex$IRenderContext,
    tabstave: Flow$TabStave,
    stave: Flow$Stave,
    tabnotes: Flow$TabNote[],
    notes: Flow$Note[],
    autobeam?: boolean,
    params?: boolean
  ): void;
  static AlignRestsToNotes(
    notes: Flow$Note[],
    align_all_notes?: boolean,
    align_tuplets?: boolean
  ): Vex$Flow$Formatter;
  alignRests(voices: Flow$Voice[], align_all_notes: boolean): void;
  preCalculateMinTotalWidth(voices: Flow$Voice[]): number;
  getMinTotalWidth(): number;
  createModifierContexts(voices: Flow$Voice[]): Flow$ModifierContext[];
  createTickContexts(voices: Flow$Voice[]): Flow$TickContext[];
  preFormat(
    justifyWidth?: number,
    rendering_context?: Vex$IRenderContext,
    voices?: Flow$Voice[],
    stave?: Flow$Stave
  ): void;
  postFormat(): Vex$Flow$Formatter;
  joinVoices(voices: Flow$Voice[]): Vex$Flow$Formatter;
  format(
    voices: Flow$Voice[],
    justifyWidth: number,
    options?: {
      align_rests?: boolean,
      context: Vex$IRenderContext
    }
  ): Vex$Flow$Formatter;
  formatToStave(
    voices: Flow$Voice[],
    stave: Flow$Stave,
    options?: {
      align_rests?: boolean,
      context: Vex$IRenderContext
    }
  ): Vex$Flow$Formatter;
}

declare class Vex$Flow$Fraction {
  constructor(numerator: number, denominator: number): this;
  static GCD(a: number, b: number): number;
  static LCM(a: number, b: number): number;
  static LCMM(a: number, b: number): number;
  set(numerator: number, denominator: number): Vex$Flow$Fraction;
  value(): number;
  simplify(): Vex$Flow$Fraction;
  add(param1: Vex$Flow$Fraction, param2: Vex$Flow$Fraction): Vex$Flow$Fraction;
  add(param1: number, param2: number): Vex$Flow$Fraction;
  subtract(
    param1: Vex$Flow$Fraction,
    param2: Vex$Flow$Fraction
  ): Vex$Flow$Fraction;
  subtract(param1: number, param2: number): Vex$Flow$Fraction;
  multiply(
    param1: Vex$Flow$Fraction,
    param2: Vex$Flow$Fraction
  ): Vex$Flow$Fraction;
  multiply(param1: number, param2: number): Vex$Flow$Fraction;
  divide(
    param1: Vex$Flow$Fraction,
    param2: Vex$Flow$Fraction
  ): Vex$Flow$Fraction;
  divide(param1: number, param2: number): Vex$Flow$Fraction;
  equals(compare: Vex$Flow$Fraction): boolean;
  greaterThan(compare: Vex$Flow$Fraction): boolean;
  greaterThanEquals(compare: Vex$Flow$Fraction): boolean;
  lessThan(compare: Vex$Flow$Fraction): boolean;
  lessThanEquals(compare: Vex$Flow$Fraction): boolean;
  clone(): Vex$Flow$Fraction;
  copy(copy: Vex$Flow$Fraction): Vex$Flow$Fraction;
  quotient(): number;
  fraction(): number;
  abs(): Vex$Flow$Fraction;
  toString(): string;
  toSimplifiedString(): string;
  toMixedString(): string;
  parse(str: string): Vex$Flow$Fraction;
}

declare class Vex$Flow$FretHandFinger mixins Modifier {
  constructor(number: number): this;
  static format(
    nums: Vex$Flow$FretHandFinger[],
    state: {
      left_shift: number,
      right_shift: number,
      text_line: number
    }
  ): void;
  getNote(): Flow$Note;
  setNote(note: Flow$Note): Vex$Flow$FretHandFinger;
  getIndex(): number;
  setIndex(index: number): Vex$Flow$FretHandFinger;
  getPosition(): Modifier$Position;
  setPosition(position: Modifier$Position): Vex$Flow$FretHandFinger;
  setFretHandFinger(number: number): Vex$Flow$FretHandFinger;
  setOffsetX(x: number): Vex$Flow$FretHandFinger;
  setOffsetY(y: number): Vex$Flow$FretHandFinger;
  draw(): void;
}

declare var npm$namespace$Vex$Flow$FretHandFinger: {
  CATEGORY: typeof Vex$Flow$FretHandFinger$CATEGORY
};
declare var Vex$Flow$FretHandFinger$CATEGORY: string;

declare class Vex$Flow$GhostNote mixins StemmableNote {
  setStave(stave: Flow$Stave): Flow$Note;
  constructor(duration: string): this;
  constructor(note_struct: {
    type?: string,
    dots?: number,
    duration: string
  }): this;
  isRest(): boolean;
  setStave(stave: Flow$Stave): void;
  addToModifierContext(): Vex$Flow$GhostNote;
  preFormat(): Vex$Flow$GhostNote;
  draw(): void;
}

declare class Vex$Flow$Glyph {
  constructor(
    code: string,
    point: number,
    options?: {
      cache?: boolean,
      font?: Vex$IFont
    }
  ): this;
  setOptions(options: {
    cache?: boolean,
    font?: Vex$IFont
  }): void;
  setStave(stave: Flow$Stave): Vex$Flow$Glyph;
  setXShift(x_shift: number): Vex$Flow$Glyph;
  setYShift(y_shift: number): Vex$Flow$Glyph;
  setContext(context: Vex$IRenderContext): Vex$Flow$Glyph;
  getContext(): Vex$IRenderContext;
  reset(): void;
  setWidth(width: number): Vex$Flow$Glyph;
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
    cache: boolean
  ): {
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
    y_pos: number
  ): void;
}

declare class Vex$Flow$GraceNote mixins StaveNote {
  constructor(note_struct: {
    slash?: boolean,
    type?: string,
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
  draw(): void;
}

declare class Vex$Flow$GraceNoteGroup mixins Modifier {
  setWidth(width: number): Flow$Modifier;
  setNote(note: Flow$StaveNote): Flow$Modifier;
  constructor(grace_notes: Vex$Flow$GraceNote[], show_slur?: boolean): this;
  static DEBUG: boolean;
  static format(
    gracenote_groups: Vex$Flow$GraceNoteGroup[],
    state: {
      left_shift: number,
      right_shift: number,
      text_line: number
    }
  ): boolean;
  preFormat(): void;
  beamNotes(): Vex$Flow$GraceNoteGroup;
  setNote(note: Flow$Note): void;
  setWidth(width: number): void;
  getWidth(): number;
  setXShift(x_shift: number): void;
  draw(): void;
}

declare var npm$namespace$Vex$Flow$GraceNoteGroup: {
  CATEGORY: typeof Vex$Flow$GraceNoteGroup$CATEGORY
};
declare var Vex$Flow$GraceNoteGroup$CATEGORY: string;

declare class Vex$Flow$KeyManager {
  constructor(key: string): this;
  setKey(key: string): Vex$Flow$KeyManager;
  getKey(): string;
  reset(): Vex$Flow$KeyManager;
  getAccidental(
    key: string
  ): {
    note: string,
    accidental: string
  };
  selectNote(
    note: string
  ): {
    note: string,
    accidental: string,
    change: boolean
  };
}

declare class Vex$Flow$KeySignature mixins StaveModifier {
  addModifier(): void;
  constructor(key_spec: string): this;
  addAccToStave(
    stave: Flow$Stave,
    acc: {
      type: string,
      line: number
    },
    next?: {
      type: string,
      line: number
    }
  ): void;
  cancelKey(spec: string): Vex$Flow$KeySignature;
  addModifier(stave: Flow$Stave): Vex$Flow$KeySignature;
  addToStave(stave: Flow$Stave, firstGlyph?: boolean): Vex$Flow$KeySignature;
  convertAccLines(clef: string, type: string): void;
}

declare class Vex$Flow$Modifier {
  static DEBUG: boolean;
  getCategory(): string;
  getWidth(): number;
  setWidth(width: number): Vex$Flow$Modifier;
  getNote(): Flow$Note;
  setNote(note: Flow$Note): Vex$Flow$Modifier;
  getIndex(): number;
  setIndex(index: number): Vex$Flow$Modifier;
  getContext(): Vex$IRenderContext;
  setContext(context: Vex$IRenderContext): Vex$Flow$Modifier;
  getModifierContext(): Flow$ModifierContext;
  setModifierContext(c: Flow$ModifierContext): Vex$Flow$Modifier;
  getPosition(): Modifier$Position;
  setPosition(position: Modifier$Position): Vex$Flow$Modifier;
  setTextLine(line: number): Vex$Flow$Modifier;
  setYShift(y: number): Vex$Flow$Modifier;
  setXShift(x: number): void;
  draw(): void;
  alignSubNotesWithNote(subNotes: Flow$Note[], note: Flow$Note): void;
}

declare var npm$namespace$Vex$Flow$Modifier: {
  CATEGORY: typeof Vex$Flow$Modifier$CATEGORY,
  Position: typeof Vex$Flow$Modifier$Position
};

declare var Vex$Flow$Modifier$Position: {|
  +LEFT: 1, // 1
  +RIGHT: 1, // 1
  +ABOVE: 2, // 2
  +BELOW: 3 // 3
|};

declare var Vex$Flow$Modifier$CATEGORY: string;

declare class Vex$Flow$ModifierContext {
  static DEBUG: boolean;
  addModifier(modifier: Vex$Flow$Modifier): Vex$Flow$ModifierContext;
  getModifiers(type: string): Vex$Flow$Modifier[];
  getWidth(): number;
  getExtraLeftPx(): number;
  getExtraRightPx(): number;
  getState(): {
    left_shift: number,
    right_shift: number,
    text_line: number
  };
  getMetrics(): {
    width: number,
    spacing: number,
    extra_left_px: number,
    extra_right_px: number
  };
  preFormat(): void;
  postFormat(): void;
}

declare class Vex$Flow$Music {
  isValidNoteValue(note: number): boolean;
  isValidIntervalValue(interval: number): boolean;
  getNoteParts(
    noteString: string
  ): {
    root: string,
    accidental: string
  };
  getKeyParts(
    noteString: string
  ): {
    root: string,
    accidental: string,
    type: string
  };
  getNoteValue(noteString: string): number;
  getIntervalValue(intervalString: string): number;
  getCanonicalNoteName(noteValue: number): string;
  getCanonicalIntervalName(intervalValue: number): string;
  getRelativeNoteValue(
    noteValue: number,
    intervalValue: number,
    direction?: number
  ): number;
  getRelativeNoteName(root: string, noteValue: number): string;
  getScaleTones(key: string, intervals: number[]): number;
  getIntervalBetween(note1: number, note2: number, direction?: number): number;
  createScaleMap(
    keySignature: string
  ): {
    [rootName: string]: string
  };
}

declare var npm$namespace$Vex$Flow$Music: {
  NUM_TONES: typeof Vex$Flow$Music$NUM_TONES,
  roots: typeof Vex$Flow$Music$roots,
  root_values: typeof Vex$Flow$Music$root_values,
  root_indices: typeof Vex$Flow$Music$root_indices,
  canonical_notes: typeof Vex$Flow$Music$canonical_notes,
  diatonic_intervals: typeof Vex$Flow$Music$diatonic_intervals,
  diatonic_accidentals: typeof Vex$Flow$Music$diatonic_accidentals,
  intervals: typeof Vex$Flow$Music$intervals,
  scales: typeof Vex$Flow$Music$scales,
  accidentals: typeof Vex$Flow$Music$accidentals,
  noteValues: typeof Vex$Flow$Music$noteValues
};
declare var Vex$Flow$Music$NUM_TONES: number;

declare var Vex$Flow$Music$roots: string[];

declare var Vex$Flow$Music$root_values: number[];

declare var Vex$Flow$Music$root_indices: {
  [root: string]: number
};

declare var Vex$Flow$Music$canonical_notes: string[];

declare var Vex$Flow$Music$diatonic_intervals: string[];

declare var Vex$Flow$Music$diatonic_accidentals: {
  [diatonic_interval: string]: {
    note: number,
    accidental: number
  }
};

declare var Vex$Flow$Music$intervals: {
  [interval: string]: number
};

declare var Vex$Flow$Music$scales: {
  [scale: string]: number[]
};

declare var Vex$Flow$Music$accidentals: string[];

declare var Vex$Flow$Music$noteValues: {
  [value: string]: {
    root_index: number,
    int_val: number
  }
};

declare class Vex$Flow$Note mixins Tickable {
  getTicks(): Vex$Flow$Fraction;
  getCenterXShift(): number;
  isCenterAligned(): boolean;
  setCenterAlignment(align_center: boolean): Vex$Flow$Note;
  getTuplet(): Flow$Tuplet;
  setTuplet(tuplet: Flow$Tuplet): Vex$Flow$Note;
  addToModifierContext(mc: Vex$Flow$ModifierContext): void;
  preFormat(): void;
  postFormat(): Vex$Flow$Note;
  getIntrinsicTicks(): Vex$Flow$Fraction;
  setIntrinsicTicks(intrinsicTicks: Vex$Flow$Fraction): void;
  getTickMultiplier(): Vex$Flow$Fraction;
  applyTickMultiplier(numerator: number, denominator: number): void;
  setDuration(duration: Vex$Flow$Fraction): void;
  constructor(note_struct: {
    type?: string,
    dots?: number,
    duration: string
  }): this;
  getPlayNote(): any;
  setPlayNote(note: any): Vex$Flow$Note;
  isRest(): boolean;
  addStroke(index: number, stroke: Flow$Stroke): Vex$Flow$Note;
  getStave(): Flow$Stave;
  setStave(stave: Flow$Stave): Vex$Flow$Note;
  getCategory(): string;
  setContext(context: Vex$IRenderContext): Vex$Flow$Note;
  getExtraLeftPx(): number;
  getExtraRightPx(): number;
  setExtraLeftPx(x: number): Vex$Flow$Note;
  setExtraRightPx(x: number): Vex$Flow$Note;
  shouldIgnoreTicks(): boolean;
  getLineNumber(): number;
  getLineForRest(): number;
  getGlyph(): Vex$Flow$Glyph;
  setYs(ys: number[]): Vex$Flow$Note;
  getYs(): number[];
  getYForTopText(text_line: number): number;
  getBoundingBox(): Vex$Flow$BoundingBox;
  getVoice(): Flow$Voice;
  setVoice(voice: Flow$Voice): Vex$Flow$Note;
  getTickContext(): Flow$TickContext;
  setTickContext(tc: Flow$TickContext): Vex$Flow$Note;
  getDuration(): string;
  isDotted(): boolean;
  hasStem(): boolean;
  getDots(): number;
  getNoteType(): string;
  setBeam(): Vex$Flow$Note;
  setModifierContext(mc: Vex$Flow$ModifierContext): Vex$Flow$Note;
  addModifier(modifier: Vex$Flow$Modifier, index?: number): Vex$Flow$Note;
  getModifierStartXY(): {
    x: number,
    y: number
  };
  getMetrics(): {
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
  setXShift(x: number): Vex$Flow$Note;
  getX(): number;
  getAbsoluteX(): number;
  setPreFormatted(value: boolean): void;
}

declare var npm$namespace$Vex$Flow$Note: {
  CATEGORY: typeof Vex$Flow$Note$CATEGORY
};
declare var Vex$Flow$Note$CATEGORY: string;

declare class Vex$Flow$NoteHead mixins Note {
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
  setContext(context: Vex$IRenderContext): Vex$Flow$NoteHead;
  getWidth(): number;
  isDisplaced(): boolean;
  getStyle(): {
    shadowColor?: string,
    shadowBlur?: string,
    fillStyle?: string,
    strokeStyle?: string
  };
  setStyle(style: {
    shadowColor?: string,
    shadowBlur?: string,
    fillStyle?: string,
    strokeStyle?: string
  }): Vex$Flow$NoteHead;
  getGlyph(): Vex$Flow$Glyph;
  setX(x: number): Vex$Flow$NoteHead;
  getY(): number;
  setY(y: number): Vex$Flow$NoteHead;
  getLine(): number;
  setLine(line: number): Vex$Flow$NoteHead;
  getAbsoluteX(): number;
  getBoundingBox(): Vex$Flow$BoundingBox;
  applyStyle(context: Vex$IRenderContext): Vex$Flow$NoteHead;
  setStave(stave: Flow$Stave): Vex$Flow$NoteHead;
  preFormat(): Vex$Flow$NoteHead;
  draw(): void;
}

declare class Vex$Flow$NoteSubGroup mixins Modifier {
  constructor(subnotes: Vex$Flow$Note[]): this;
  preFormat(): void;
}

declare class Vex$Flow$Ornament mixins Modifier {
  constructor(type: string): this;
  static DEBUG: boolean;
  static format(
    ornaments: Vex$Flow$Ornament[],
    state: {
      left_shift: number,
      right_shift: number,
      text_line: number
    }
  ): boolean;
  setDelayed(delayed: boolean): Vex$Flow$Ornament;
  setUpperAccidental(acc: string): Vex$Flow$Ornament;
  setLowerAccidental(acc: string): Vex$Flow$Ornament;
  draw(): void;
}

declare var npm$namespace$Vex$Flow$Ornament: {
  CATEGORY: typeof Vex$Flow$Ornament$CATEGORY
};
declare var Vex$Flow$Ornament$CATEGORY: string;

declare class Vex$Flow$PedalMarking {
  constructor(notes: Vex$Flow$Note[]): this;
  static DEBUG: boolean;
  static createSustain(notes: Vex$Flow$Note[]): Vex$Flow$PedalMarking;
  static createSostenuto(notes: Vex$Flow$Note[]): Vex$Flow$PedalMarking;
  static createUnaCorda(notes: Vex$Flow$Note[]): Vex$Flow$PedalMarking;
  setCustomText(depress?: string, release?: string): Vex$Flow$PedalMarking;
  setStyle(style: PedalMarking$Styles): Vex$Flow$PedalMarking;
  setLine(line: number): Vex$Flow$PedalMarking;
  setContext(context: Vex$IRenderContext): Vex$Flow$PedalMarking;
  drawBracketed(): void;
  drawText(): void;
  draw(): void;
}

declare var npm$namespace$Vex$Flow$PedalMarking: {
  GLYPHS: typeof Vex$Flow$PedalMarking$GLYPHS,
  Styles: typeof Vex$Flow$PedalMarking$Styles
};

declare var Vex$Flow$PedalMarking$Styles: {|
  +TEXT: 1, // 1
  +BRACKET: 1, // 1
  +MIXED: 2 // 2
|};

declare var Vex$Flow$PedalMarking$GLYPHS: {
  [name: string]: {
    code: string,
    x_shift: number,
    y_shift: number
  }
};

declare class Vex$Flow$RaphaelContext mixins IRenderContext {
  setLineWidth(width: number): Vex$Flow$RaphaelContext;
  glow(): Vex$Flow$RaphaelContext;
  constructor(element: HTMLElement): this;
  setFont(
    family: string,
    size: number,
    weight?: number
  ): Vex$Flow$RaphaelContext;
  setRawFont(font: string): Vex$Flow$RaphaelContext;
  setFillStyle(style: string): Vex$Flow$RaphaelContext;
  setBackgroundFillStyle(style: string): Vex$Flow$RaphaelContext;
  setStrokeStyle(style: string): Vex$Flow$RaphaelContext;
  setShadowColor(style: string): Vex$Flow$RaphaelContext;
  setShadowBlur(blur: string): Vex$Flow$RaphaelContext;
  setLineWidth(width: number): void;
  setLineDash(dash: string): Vex$Flow$RaphaelContext;
  setLineCap(cap_type: string): Vex$Flow$RaphaelContext;
  scale(x: number, y: number): Vex$Flow$RaphaelContext;
  clear(): void;
  resize(width: number, height: number): Vex$Flow$RaphaelContext;
  setViewBox(viewBox: string): void;
  rect(x: number, y: number, width: number, height: number): void;
  fillRect(
    x: number,
    y: number,
    width: number,
    height: number
  ): Vex$Flow$RaphaelContext;
  clearRect(
    x: number,
    y: number,
    width: number,
    height: number
  ): Vex$Flow$RaphaelContext;
  beginPath(): Vex$Flow$RaphaelContext;
  moveTo(x: number, y: number): Vex$Flow$RaphaelContext;
  lineTo(x: number, y: number): Vex$Flow$RaphaelContext;
  bezierCurveToTo(
    x1: number,
    y1: number,
    x2: number,
    y2: number,
    x: number,
    y: number
  ): Vex$Flow$RaphaelContext;
  quadraticCurveToTo(
    x1: number,
    y1: number,
    x: number,
    y: number
  ): Vex$Flow$RaphaelContext;
  arc(
    x: number,
    y: number,
    radius: number,
    startAngle: number,
    endAngle: number,
    antiClockwise: boolean
  ): Vex$Flow$RaphaelContext;
  glow(): {
    width: number,
    fill: boolean,
    opacity: number,
    offsetx: number,
    offsety: number,
    color: string
  };
  fill(): Vex$Flow$RaphaelContext;
  stroke(): Vex$Flow$RaphaelContext;
  closePath(): Vex$Flow$RaphaelContext;
  measureText(
    text: string
  ): {
    width: number,
    height: number
  };
  fillText(text: string, x: number, y: number): Vex$Flow$RaphaelContext;
  save(): Vex$Flow$RaphaelContext;
  restore(): Vex$Flow$RaphaelContext;
}

declare class Vex$Flow$Renderer {
  constructor(sel: HTMLElement, backend: Renderer$Backends): this;
  static USE_CANVAS_PROXY: boolean;
  static buildContext(
    sel: HTMLElement,
    backend: Renderer$Backends,
    width?: number,
    height?: number,
    background?: string
  ): Vex$IRenderContext;
  static getCanvasContext(
    sel: HTMLElement,
    backend: Renderer$Backends,
    width?: number,
    height?: number,
    background?: string
  ): Vex$Flow$CanvasContext;
  static getRaphaelContext(
    sel: HTMLElement,
    backend: Renderer$Backends,
    width?: number,
    height?: number,
    background?: string
  ): Vex$Flow$RaphaelContext;
  static getSVGContext(
    sel: HTMLElement,
    backend: Renderer$Backends,
    width?: number,
    height?: number,
    background?: string
  ): Flow$SVGContext;
  static bolsterCanvasContext(
    ctx: CanvasRenderingContext2D
  ): Vex$Flow$CanvasContext;
  static drawDashedLine(
    context: Vex$IRenderContext,
    fromX: number,
    fromY: number,
    toX: number,
    toY: number,
    dashPattern: number[]
  ): void;
  resize(width: number, height: number): Vex$Flow$Renderer;
  getContext(): Vex$IRenderContext;
}

declare var npm$namespace$Vex$Flow$Renderer: {
  Backends: typeof Vex$Flow$Renderer$Backends,
  LineEndType: typeof Vex$Flow$Renderer$LineEndType
};

declare var Vex$Flow$Renderer$Backends: {|
  +CANVAS: 1, // 1
  +RAPHAEL: 1, // 1
  +SVG: 2, // 2
  +VML: 3 // 3
|};

declare var Vex$Flow$Renderer$LineEndType: {|
  +NONE: 1, // 1
  +UP: 1, // 1
  +DOWN: 2 // 2
|};

declare class Vex$Flow$Repetition mixins StaveModifier {
  constructor(type: Repetition$type, x: number, y_shift: number): this;
  getCategory(): string;
  setShiftX(x: number): Vex$Flow$Repetition;
  setShiftY(y: number): Vex$Flow$Repetition;
  draw(stave: Flow$Stave, x: number): Vex$Flow$Repetition;
  drawCodaFixed(stave: Flow$Stave, x: number): Vex$Flow$Repetition;
  drawSignoFixed(stave: Flow$Stave, x: number): Vex$Flow$Repetition;
  drawSymbolText(
    stave: Flow$Stave,
    x: number,
    text: string,
    draw_coda: boolean
  ): Vex$Flow$Repetition;
}

declare var npm$namespace$Vex$Flow$Repetition: {
  type: typeof Vex$Flow$Repetition$type
};

declare var Vex$Flow$Repetition$type: {|
  +NONE: 1, // 1
  +CODA_LEFT: 1, // 1
  +CODA_RIGHT: 2, // 2
  +SEGNO_LEFT: 3, // 3
  +SEGNO_RIGHT: 4, // 4
  +DC: 5, // 5
  +DC_AL_CODA: 6, // 6
  +DC_AL_FINE: 7, // 7
  +DS: 8, // 8
  +DS_AL_CODA: 9, // 9
  +DS_AL_FINE: 10, // 10
  +FINE: 11 // 11
|};

declare class Vex$Flow$Stave {
  constructor(
    x: number,
    y: number,
    width: number,
    options?: {
      vertical_bar_width?: number,
      glyph_spacing_px?: number,
      num_lines?: number,
      fill_style?: string,
      spacing_between_lines_px?: number,
      space_above_staff_ln?: number,
      space_below_staff_ln?: number,
      top_text_position?: number
    }
  ): this;
  resetLines(): void;
  setNoteStartX(x: number): Vex$Flow$Stave;
  getNoteStartX(): number;
  getNoteEndX(): number;
  getTieStartX(): number;
  getTieEndX(): number;
  setContext(context: Vex$IRenderContext): Vex$Flow$Stave;
  getContext(): Vex$IRenderContext;
  getX(): number;
  getNumLines(): number;
  setX(x: number): Vex$Flow$Stave;
  setY(y: number): Vex$Flow$Stave;
  setWidth(width: number): Vex$Flow$Stave;
  getWidth(): number;
  setMeasure(measure: number): Vex$Flow$Stave;
  setBegBarType(type: Barline$type): Vex$Flow$Stave;
  setEndBarType(type: Barline$type): Vex$Flow$Stave;
  getModifierXShift(index: number): number;
  setRepetitionTypeLeft(type: Repetition$type, y: number): Vex$Flow$Stave;
  setRepetitionTypeRight(type: Repetition$type, y: number): Vex$Flow$Stave;
  setVoltaType(type: Volta$type, number_t: number, y: number): Vex$Flow$Stave;
  setSection(section: string, y: number): Vex$Flow$Stave;
  setTempo(
    tempo: {
      name?: string,
      duration: string,
      dots: number,
      bpm: number
    },
    y: number
  ): Vex$Flow$Stave;
  setText(
    text: string,
    position: Modifier$Position,
    options?: {
      shift_x?: number,
      shift_y?: number,
      justification?: TextNote$Justification
    }
  ): Vex$Flow$Stave;
  getHeight(): number;
  getSpacingBetweenLines(): number;
  getBoundingBix(): Vex$Flow$BoundingBox;
  getBottomY(): number;
  getBottomLineY(): number;
  getYForLine(line: number): number;
  getYForTopText(line?: number): number;
  getYForBottomText(line?: number): number;
  getYForNote(line?: number): number;
  getYForGlyphs(): number;
  addGlyph(glypg: Vex$Flow$Glyph): Vex$Flow$Stave;
  addEndGlyph(glypg: Vex$Flow$Glyph): Vex$Flow$Stave;
  addModifier(
    modifier: Flow$StaveModifier,
    position?: StaveModifier$Position
  ): Vex$Flow$Stave;
  addEndModifier(modifier: Flow$StaveModifier): Vex$Flow$Stave;
  addKeySignature(keySpec: string): Vex$Flow$Stave;
  setKeySignature(
    keySpec: string,
    cancelKeySpec: string,
    position?: StaveModifier$Position
  ): Vex$Flow$Stave;
  addClef(
    clef: string,
    size?: string,
    annotation?: string,
    position?: StaveModifier$Position
  ): Vex$Flow$Stave;
  addEndClef(clef: string, size?: string, annotation?: string): Vex$Flow$Stave;
  setEndClef(clef: string, size?: string, annotation?: string): Vex$Flow$Stave;
  addTimeSignature(timeSpec: string, customPadding?: number): void;
  addTrebleGlyph(): Vex$Flow$Stave;
  draw(): void;
  drawVertical(x: number, isDouble: boolean): void;
  drawVerticalFixed(x: number, isDouble: boolean): void;
  drawVerticalBar(x: number): void;
  drawVerticalBarFixed(x: number): void;
  getConfigForLines(): {
    visible: boolean
  }[];
  setConfigForLine(
    line_number: number,
    line_config: {
      visible: boolean
    }
  ): Vex$Flow$Stave;
  setConfigForLines(
    lines_configuration: {
      visible: boolean
    }[]
  ): Vex$Flow$Stave;
}

declare class Vex$Flow$StaveConnector {
  constructor(top_stave: Vex$Flow$Stave, bottom_stave: Vex$Flow$Stave): this;
  setContext(ctx: Vex$IRenderContext): Vex$Flow$StaveConnector;
  setType(type: StaveConnector$type): Vex$Flow$StaveConnector;
  setText(
    text: string,
    text_options?: {
      shift_x?: number,
      shift_y?: number
    }
  ): Vex$Flow$StaveConnector;
  setFont(font: {
    family?: string,
    size?: number,
    weight?: string
  }): void;
  setXShift(x_shift: number): Vex$Flow$StaveConnector;
  draw(): void;
  drawBoldDoubleLine(
    ctx: Object,
    type: StaveConnector$type,
    topX: number,
    topY: number,
    botY: number
  ): void;
}

declare var npm$namespace$Vex$Flow$StaveConnector: {
  type: typeof Vex$Flow$StaveConnector$type
};

declare var Vex$Flow$StaveConnector$type: {|
  +SINGLE_RIGHT: 0, // 0
  +SINGLE_LEFT: 1, // 1
  +SINGLE: 1, // 1
  +DOUBLE: 2, // 2
  +BRACE: 3, // 3
  +BRACKET: 4, // 4
  +BOLD_DOUBLE_LEFT: 5, // 5
  +BOLD_DOUBLE_RIGHT: 6, // 6
  +THIN_DOUBLE: 7, // 7
  +NONE: 8 // 8
|};

declare class Vex$Flow$StaveHairpin {
  constructor(
    notes: {
      first_note: Vex$Flow$Note,
      last_note: Vex$Flow$Note
    },
    type: StaveHairpin$type
  ): this;
  static FormatByTicksAndDraw(
    ctx: Vex$IRenderContext,
    formatter: Vex$Flow$Formatter,
    notes: {
      first_note: Vex$Flow$Note,
      last_note: Vex$Flow$Note
    },
    type: StaveHairpin$type,
    position: Modifier$Position,
    options?: {
      height: number,
      y_shift: number,
      left_shift_ticks: number,
      right_shift_ticks: number
    }
  ): void;
  setContext(context: Vex$IRenderContext): Vex$Flow$StaveHairpin;
  setPosition(position: Modifier$Position): Vex$Flow$StaveHairpin;
  setRenderOptions(options: {
    height?: number,
    y_shift: number,
    left_shift_px: number,
    right_shift_px: number
  }): Vex$Flow$StaveHairpin;
  setNotes(notes: {
    first_note: Vex$Flow$Note,
    last_note: Vex$Flow$Note
  }): Vex$Flow$StaveHairpin;
  renderHairpin(params: {
    first_x: number,
    last_x: number,
    first_y: number,
    last_y: number,
    staff_height: number
  }): void;
  draw(): boolean;
}

declare var npm$namespace$Vex$Flow$StaveHairpin: {
  type: typeof Vex$Flow$StaveHairpin$type
};

declare var Vex$Flow$StaveHairpin$type: {|
  +CRESC: 1, // 1
  +DECRESC: 1 // 1
|};

declare class Vex$Flow$StaveLine {
  constructor(notes: {
    first_note: Vex$Flow$Note,
    last_note: Vex$Flow$Note,
    first_indices: number[],
    last_indices: number[]
  }): this;
  setContext(context: Object): Vex$Flow$StaveLine;
  setFont(font: {
    family: string,
    size: number,
    weight: string
  }): Vex$Flow$StaveLine;
  setText(text: string): Vex$Flow$StaveLine;
  setNotes(notes: {
    first_note: Vex$Flow$Note,
    last_note: Vex$Flow$Note,
    first_indices?: number[],
    last_indices?: number[]
  }): Vex$Flow$StaveLine;
  applyLineStyle(): void;
  applyFontStyle(): void;
  draw(): Vex$Flow$StaveLine;
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
    text_position_vertical: StaveLine$TextVerticalPosition,
    text_justification: StaveLine$TextJustification
  };
}

declare var npm$namespace$Vex$Flow$StaveLine: {
  TextVerticalPosition: typeof Vex$Flow$StaveLine$TextVerticalPosition,
  TextJustification: typeof Vex$Flow$StaveLine$TextJustification
};

declare var Vex$Flow$StaveLine$TextVerticalPosition: {|
  +TOP: 1, // 1
  +BOTTOM: 1 // 1
|};

declare var Vex$Flow$StaveLine$TextJustification: {|
  +LEFT: 1, // 1
  +CENTER: 1, // 1
  +RIGHT: 2 // 2
|};

declare class Vex$Flow$StaveModifier {
  getCategory(): string;
  makeSpacer(
    padding: number
  ): {
    getContext: Function,
    setStave: Function,
    renderToStave: Function,
    getMetrics: Function
  };
  placeGlyphOnLine(
    glyph: Vex$Flow$Glyph,
    stave: Vex$Flow$Stave,
    line: number
  ): void;
  setPadding(padding: number): void;
  addToStave(
    stave: Vex$Flow$Stave,
    firstGlyph: boolean
  ): Vex$Flow$StaveModifier;
  addToStaveEnd(
    stave: Vex$Flow$Stave,
    firstGlyph: boolean
  ): Vex$Flow$StaveModifier;
  addModifier(): void;
  addEndModifier(): void;
}

declare var npm$namespace$Vex$Flow$StaveModifier: {
  Position: typeof Vex$Flow$StaveModifier$Position
};

declare var Vex$Flow$StaveModifier$Position: {|
  +LEFT: 1, // 1
  +RIGHT: 2, // 2
  +ABOVE: 3, // 3
  +BELOW: 4, // 4
  +BEGIN: 5, // 5
  +END: 6 // 6
|};

declare class Vex$Flow$StaveNote mixins StemmableNote {
  buildStem(): Flow$StemmableNote;
  setStave(stave: Vex$Flow$Stave): Vex$Flow$Note;
  addModifier(modifier: Vex$Flow$Modifier, index?: number): Vex$Flow$Note;
  getModifierStartXY(): {
    x: number,
    y: number
  };
  getDots(): number;
  constructor(note_struct: {
    type?: string,
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
    notes: Vex$Flow$StaveNote[],
    state: {
      left_shift: number,
      right_shift: number,
      text_line: number
    }
  ): boolean;
  static formatByY(
    notes: Vex$Flow$StaveNote[],
    state: {
      left_shift: number,
      right_shift: number,
      text_line: number
    }
  ): void;
  static postFormat(notes: Vex$Flow$StaveNote[]): boolean;
  buildStem(): void;
  buildNoteHeads(): void;
  autoStem(): void;
  calculateKeyProps(): void;
  getBoundingBox(): Vex$Flow$BoundingBox;
  getLineNumber(): number;
  isRest(): boolean;
  isChord(): boolean;
  hasStem(): boolean;
  getYForTopText(text_line: number): number;
  getYForBottomText(text_line: number): number;
  setStave(stave: Vex$Flow$Stave): Vex$Flow$StaveNote;
  getKeys(): string[];
  getKeyProps(): {
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
  setNoteDisplaced(displaced: boolean): Vex$Flow$StaveNote;
  getTieRightX(): number;
  getTieLeftX(): number;
  getLineForRest(): number;
  getModifierStartXY(
    position: Modifier$Position,
    index: number
  ): {
    x: number,
    y: number
  };
  setStyle(style: {
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
    }
  ): Vex$Flow$StaveNote;
  setKeyLine(index: number, line: number): Vex$Flow$StaveNote;
  getKeyLine(index: number): number;
  addToModifierContext(mContext: Vex$Flow$ModifierContext): Vex$Flow$StaveNote;
  addModifier(index: number, modifier: Vex$Flow$Modifier): Vex$Flow$StaveNote;
  addAccidental(
    index: number,
    accidental: Vex$Flow$Accidental
  ): Vex$Flow$StaveNote;
  addArticulation(
    index: number,
    articulation: Vex$Flow$Articulation
  ): Vex$Flow$StaveNote;
  addAnnotation(
    index: number,
    annotation: Vex$Flow$Annotation
  ): Vex$Flow$StaveNote;
  addDot(index: number): Vex$Flow$StaveNote;
  addDotToAll(): Vex$Flow$StaveNote;
  getAccidentals(): Vex$Flow$Accidental[];
  getDots(): Vex$Flow$Dot[];
  getVoiceShiftWidth(): number;
  calcExtraPx(): void;
  preFormat(): void;
  getNoteHeadBounds(): {
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
  drawStem(struct: {
    x_begin?: number,
    x_end?: number,
    y_top?: number,
    y_bottom?: number,
    y_extend?: number,
    stem_extension?: number,
    stem_direction?: number
  }): void;
  draw(): void;
}

declare var npm$namespace$Vex$Flow$StaveNote: {
  STEM_UP: typeof Vex$Flow$StaveNote$STEM_UP,
  STEM_DOWN: typeof Vex$Flow$StaveNote$STEM_DOWN,
  CATEGORY: typeof Vex$Flow$StaveNote$CATEGORY
};
declare var Vex$Flow$StaveNote$STEM_UP: number;

declare var Vex$Flow$StaveNote$STEM_DOWN: number;

declare var Vex$Flow$StaveNote$CATEGORY: string;

declare class Vex$Flow$StaveSection mixins Modifier {
  draw(): void;
  constructor(section: string, x: number, shift_y: number): this;
  getCategory(): string;
  setStaveSection(section: string): Vex$Flow$StaveSection;
  setShiftX(x: number): Vex$Flow$StaveSection;
  setShiftY(y: number): Vex$Flow$StaveSection;
  draw(stave: Vex$Flow$Stave, shift_x: number): Vex$Flow$StaveSection;
}

declare class Vex$Flow$StaveTempo mixins StaveModifier {
  constructor(
    tempo: {
      name?: string,
      duration: string,
      dots: number,
      bpm: number
    },
    x: number,
    shift_y: number
  ): this;
  getCategory(): string;
  setTempo(tempo: {
    name?: string,
    duration: string,
    dots: number,
    bpm: number
  }): Vex$Flow$StaveTempo;
  setShiftX(x: number): Vex$Flow$StaveTempo;
  setShiftY(y: number): Vex$Flow$StaveTempo;
  draw(stave: Vex$Flow$Stave, shift_x: number): Vex$Flow$StaveTempo;
}

declare class Vex$Flow$StaveText mixins Modifier {
  draw(): void;
  constructor(
    text: string,
    position: Modifier$Position,
    options?: {
      shift_x?: number,
      shift_y?: number,
      justification?: TextNote$Justification
    }
  ): this;
  getCategory(): string;
  setStaveText(text: string): Vex$Flow$StaveText;
  setShiftX(x: number): Vex$Flow$StaveText;
  setShiftY(y: number): Vex$Flow$StaveText;
  setFont(font: {
    family?: string,
    size?: number,
    weight?: number
  }): void;
  setText(text: string): void;
  draw(stave: Vex$Flow$Stave): Vex$Flow$StaveText;
}

declare class Vex$Flow$StaveTie {
  /**
   * @see https://github.com/0xfe/vexflow/blob/master/src/stavetie.js#L12
   *
   * Notes is a struct that has:
   *
   * {
   * first_note: Note,
   * last_note: Note,
   * first_indices: [n1, n2, n3],
   * last_indices: [n1, n2, n3]
   * }
   * All properties are optional, since ties can span line breaks in which case
   * two ties can be used, each with either "first_note" or "last_note" missing.
   */
  constructor(
    notes: {
      first_note?: Vex$Flow$Note,
      last_note?: Vex$Flow$Note,
      first_indices?: number[],
      last_indices?: number[]
    },
    text?: string
  ): this;
  setContext(context: Vex$IRenderContext): Vex$Flow$StaveTie;
  setFont(font: {
    family: string,
    size: number,
    weight: string
  }): Vex$Flow$StaveTie;
  setNotes(notes: {
    first_note?: Vex$Flow$Note,
    last_note?: Vex$Flow$Note,
    first_indices?: number[],
    last_indices?: number[]
  }): Vex$Flow$StaveTie;
  isPartial(): boolean;
  renderTie(params: {
    first_ys: number[],
    last_ys: number[],
    last_x_px: number,
    first_x_px: number,
    direction: number
  }): void;
  renderText(first_x_px: number, last_x_px: number): void;
  draw(): boolean;
}

declare class Vex$Flow$Stem {
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
  setNoteHeadXBounds(x_begin: number, x_end: number): Vex$Flow$Stem;
  setDirection(direction: number): void;
  setExtension(extension: number): void;
  setYBounds(y_top: number, y_bottom: number): void;
  getCategory(): string;
  setContext(context: Vex$IRenderContext): Vex$Flow$Stem;
  getHeight(): number;
  getBoundingBox(): Vex$Flow$BoundingBox;
  getExtents(): {
    topY: number,
    baseY: number
  };
  setStyle(style: {
    shadowColor?: string,
    shadowBlur?: string,
    fillStyle?: string,
    strokeStyle?: string
  }): void;
  getStyle(): {
    shadowColor?: string,
    shadowBlur?: string,
    fillStyle?: string,
    strokeStyle?: string
  };
  applyStyle(context: Vex$IRenderContext): Vex$Flow$Stem;
  draw(): void;
  hide: boolean;
}

declare var npm$namespace$Vex$Flow$Stem: {
  UP: typeof Vex$Flow$Stem$UP,
  DOWN: typeof Vex$Flow$Stem$DOWN
};
declare var Vex$Flow$Stem$UP: number;

declare var Vex$Flow$Stem$DOWN: number;

declare class Vex$Flow$StemmableNote mixins Note {
  setBeam(): Vex$Flow$Note;
  constructor(note_struct: {
    type?: string,
    dots?: number,
    duration: string
  }): this;
  static DEBUG: boolean;
  getStem(): Vex$Flow$Stem;
  setStem(stem: Vex$Flow$Stem): Vex$Flow$StemmableNote;
  buildStem(): Vex$Flow$StemmableNote;
  getStemLength(): number;
  getBeamCount(): number;
  getStemMinumumLength(): number;
  getStemDirection(): number;
  setStemDirection(direction: number): Vex$Flow$StemmableNote;
  getStemX(): number;
  getCenterGlyphX(): number;
  getStemExtension(): number;
  setStemLength(): number;
  getStemExtents(): {
    topY: number,
    baseY: number
  };
  setBeam(beam: Vex$Flow$Beam): Vex$Flow$StemmableNote;
  getYForTopText(text_line: number): number;
  getYForBottomText(text_line: number): number;
  postFormat(): Vex$Flow$StemmableNote;
  drawStem(stem_struct: {
    x_begin?: number,
    x_end?: number,
    y_top?: number,
    y_bottom?: number,
    y_extend?: number,
    stem_extension?: number,
    stem_direction?: number
  }): void;
}

declare class Vex$Flow$StringNumber mixins Modifier {
  setNote(note: Vex$Flow$Note): Vex$Flow$StringNumber;
  constructor(number: number): this;
  static format(
    nums: Vex$Flow$StringNumber[],
    state: {
      left_shift: number,
      right_shift: number,
      text_line: number
    }
  ): boolean;
  getNote(): Vex$Flow$Note;
  setNote(note: Vex$Flow$StemmableNote): Vex$Flow$StringNumber;
  getIndex(): number;
  setIndex(index: number): Vex$Flow$StringNumber;
  setLineEndType(leg: Renderer$LineEndType): Vex$Flow$StringNumber;
  getPosition(): Modifier$Position;
  setPosition(position: Modifier$Position): Vex$Flow$StringNumber;
  setStringNumber(number: number): Vex$Flow$StringNumber;
  setOffsetX(x: number): Vex$Flow$StringNumber;
  setOffsetY(y: number): Vex$Flow$StringNumber;
  setLastNote(note: Vex$Flow$StemmableNote): Vex$Flow$StringNumber;
  setDashed(dashed: boolean): Vex$Flow$StringNumber;
  draw(): void;
}

declare var npm$namespace$Vex$Flow$StringNumber: {
  CATEGORY: typeof Vex$Flow$StringNumber$CATEGORY
};
declare var Vex$Flow$StringNumber$CATEGORY: string;

declare class Vex$Flow$Stroke mixins Modifier {
  constructor(
    type: Stroke$Type,
    options: {
      all_voices?: boolean
    }
  ): this;
  static format(
    strokes: Vex$Flow$Stroke[],
    state: {
      left_shift: number,
      right_shift: number,
      text_line: number
    }
  ): boolean;
  getPosition(): Modifier$Position;
  addEndNote(note: Vex$Flow$Note): Vex$Flow$Stroke;
  draw(): void;
}

declare var npm$namespace$Vex$Flow$Stroke: {
  CATEGORY: typeof Vex$Flow$Stroke$CATEGORY,
  Type: typeof Vex$Flow$Stroke$Type
};

declare var Vex$Flow$Stroke$Type: {|
  +BRUSH_DOWN: 1, // 1
  +BRUSH_UP: 1, // 1
  +ROLL_DOWN: 2, // 2
  +ROLL_UP: 3, // 3
  +RASQUEDO_DOWN: 4, // 4
  +RASQUEDO_UP: 5 // 5
|};

declare var Vex$Flow$Stroke$CATEGORY: string;

declare class Vex$Flow$SVGContext mixins IRenderContext {
  constructor(element: HTMLElement): this;
  iePolyfill(): boolean;
  setFont(family: string, size: number, weight?: number): Vex$Flow$SVGContext;
  setRawFont(font: string): Vex$Flow$SVGContext;
  setFillStyle(style: string): Vex$Flow$SVGContext;
  setBackgroundFillStyle(style: string): Vex$Flow$SVGContext;
  setStrokeStyle(style: string): Vex$Flow$SVGContext;
  setShadowColor(style: string): Vex$Flow$SVGContext;
  setShadowBlur(blur: string): Vex$Flow$SVGContext;
  setLineWidth(width: number): Vex$Flow$SVGContext;
  setLineDash(dash: string): Vex$Flow$SVGContext;
  setLineCap(cap_type: string): Vex$Flow$SVGContext;
  resize(width: number, height: number): Vex$Flow$SVGContext;
  scale(x: number, y: number): Vex$Flow$SVGContext;
  setViewBox(xMin: number, yMin: number, width: number, height: number): void;
  clear(): void;
  rect(
    x: number,
    y: number,
    width: number,
    height: number
  ): Vex$Flow$SVGContext;
  fillRect(
    x: number,
    y: number,
    width: number,
    height: number
  ): Vex$Flow$SVGContext;
  clearRect(
    x: number,
    y: number,
    width: number,
    height: number
  ): Vex$Flow$SVGContext;
  beginPath(): Vex$Flow$SVGContext;
  moveTo(x: number, y: number): Vex$Flow$SVGContext;
  lineTo(x: number, y: number): Vex$Flow$SVGContext;
  bezierCurveToTo(
    x1: number,
    y1: number,
    x2: number,
    y2: number,
    x: number,
    y: number
  ): Vex$Flow$SVGContext;
  quadraticCurveToTo(
    x1: number,
    y1: number,
    x: number,
    y: number
  ): Vex$Flow$SVGContext;
  arc(
    x: number,
    y: number,
    radius: number,
    startAngle: number,
    endAngle: number,
    antiClockwise: boolean
  ): Vex$Flow$SVGContext;
  closePath(): Vex$Flow$SVGContext;
  glow(): Vex$Flow$SVGContext;
  fill(): Vex$Flow$SVGContext;
  stroke(): Vex$Flow$SVGContext;
  measureText(text: string): SVGRect;
  ieMeasureTextFix(
    bbox: SVGRect,
    text: string
  ): {
    x: number,
    y: number,
    width: number,
    height: number
  };
  fillText(text: string, x: number, y: number): Vex$Flow$SVGContext;
  save(): Vex$Flow$SVGContext;
  restore(): Vex$Flow$SVGContext;
}

declare class Vex$Flow$TabNote mixins StemmableNote {
  setStave(stave: Vex$Flow$Stave): Vex$Flow$Note;
  getModifierStartXY(): {
    x: number,
    y: number
  };
  constructor(
    tab_struct: {
      positions: {
        str: number,
        fret: number
      }[],
      type?: string,
      dots?: number,
      duration: string,
      stem_direction?: number
    },
    draw_stem?: boolean
  ): this;
  getCategory(): string;
  setGhost(ghost: boolean): Vex$Flow$TabNote;
  hasStem(): boolean;
  getStemExtension(): number;
  addDot(): Vex$Flow$TabNote;
  updateWidth(): void;
  setStave(stave: Vex$Flow$Stave): Vex$Flow$TabNote;
  getPositions(): {
    str: number,
    fret: number
  }[];
  addToModifierContext(mc: Vex$Flow$ModifierContext): Vex$Flow$TabNote;
  getTieRightX(): number;
  getTieLeftX(): number;
  getModifierStartXY(
    position: Modifier$Position,
    index: number
  ): {
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
  draw(): void;
}

declare class Vex$Flow$TabSlide mixins TabTie {
  constructor(
    notes: {
      first_note: Vex$Flow$Note,
      last_note: Vex$Flow$Note,
      first_indices: number[],
      last_indices: number[]
    },
    direction?: number
  ): this;
  static createSlideUp(notes: {
    first_note: Vex$Flow$Note,
    last_note: Vex$Flow$Note,
    first_indices: number[],
    last_indices: number[]
  }): Vex$Flow$TabSlide;
  static createSlideDown(notes: {
    first_note: Vex$Flow$Note,
    last_note: Vex$Flow$Note,
    first_indices: number[],
    last_indices: number[]
  }): Vex$Flow$TabSlide;
  renderTie(params: {
    first_ys: number[],
    last_ys: number[],
    last_x_px: number,
    first_x_px: number,
    direction: number
  }): void;
}

declare var npm$namespace$Vex$Flow$TabSlide: {
  SLIDE_UP: typeof Vex$Flow$TabSlide$SLIDE_UP,
  SLIDE_DOWN: typeof Vex$Flow$TabSlide$SLIDE_DOWN
};
declare var Vex$Flow$TabSlide$SLIDE_UP: number;

declare var Vex$Flow$TabSlide$SLIDE_DOWN: number;

declare class Vex$Flow$TabStave mixins Stave {
  constructor(
    x: number,
    y: number,
    width: number,
    options?: {
      vertical_bar_width?: number,
      glyph_spacing_px?: number,
      num_lines?: number,
      fill_style?: string,
      spacing_between_lines_px?: number,
      space_above_staff_ln?: number,
      space_below_staff_ln?: number,
      top_text_position?: number
    }
  ): this;
  getYForGlyphs(): number;
  addTabGlyph(): Vex$Flow$TabStave;
}

declare class Vex$Flow$TabTie mixins StaveTie {
  constructor(
    notes: {
      first_note: Vex$Flow$Note,
      last_note: Vex$Flow$Note,
      first_indices: number[],
      last_indices: number[]
    },
    text?: string
  ): this;
  createHammeron(notes: {
    first_note: Vex$Flow$Note,
    last_note: Vex$Flow$Note,
    first_indices: number[],
    last_indices: number[]
  }): Vex$Flow$TabTie;
  createPulloff(notes: {
    first_note: Vex$Flow$Note,
    last_note: Vex$Flow$Note,
    first_indices: number[],
    last_indices: number[]
  }): Vex$Flow$TabTie;
  draw(): boolean;
}

declare class Vex$Flow$TextBracket {
  constructor(bracket_data: {
    start: Vex$Flow$Note,
    stop: Vex$Flow$Note,
    text?: string,
    superscript?: string,
    position?: TextBracket$Positions
  }): this;
  static DEBUG: boolean;
  applyStyle(context: Vex$IRenderContext): Vex$Flow$TextBracket;
  setDashed(dashed: boolean, dash?: number[]): Vex$Flow$TextBracket;
  setFont(font: {
    family: string,
    size: number,
    weight: string
  }): Vex$Flow$TextBracket;
  setContext(context: Vex$IRenderContext): Vex$Flow$TextBracket;
  setLine(line: number): Vex$Flow$TextBracket;
  draw(): void;
}

declare var npm$namespace$Vex$Flow$TextBracket: {
  Positions: typeof Vex$Flow$TextBracket$Positions
};

declare var Vex$Flow$TextBracket$Positions: {|
  +TOP: 1, // 1
  +BOTTOM: -1 // -1
|};

declare class Vex$Flow$TextDynamics mixins Note {
  constructor(text_struct: {
    duration: string,
    text: string,
    line?: number
  }): this;
  static DEBUG: boolean;
  setLine(line: number): Vex$Flow$TextDynamics;
  preFormat(): Vex$Flow$TextDynamics;
  draw(): void;
}

declare class Vex$Flow$TextNote mixins Note {
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
  setJustification(just: TextNote$Justification): Vex$Flow$TextNote;
  setLine(line: number): Vex$Flow$TextNote;
  preFormat(): void;
  draw(): void;
}

declare var npm$namespace$Vex$Flow$TextNote: {
  GLYPHS: typeof Vex$Flow$TextNote$GLYPHS,
  Justification: typeof Vex$Flow$TextNote$Justification
};

declare var Vex$Flow$TextNote$Justification: {|
  +LEFT: 1, // 1
  +CENTER: 1, // 1
  +RIGHT: 2 // 2
|};

declare var Vex$Flow$TextNote$GLYPHS: {
  [name: string]: {
    code: string,
    point: number,
    x_shift: number,
    y_shift: number
  }
};

declare interface Vex$Flow$Tickable {
  setContext(context: Vex$IRenderContext): void;
  getBoundingBox(): Vex$Flow$BoundingBox;
  getTicks(): Vex$Flow$Fraction;
  shouldIgnoreTicks(): boolean;
  getWidth(): number;
  setXShift(x: number): Vex$Flow$Tickable;
  getCenterXShift(): number;
  isCenterAligned(): boolean;
  setCenterAlignment(align_center: boolean): Vex$Flow$Tickable;
  getVoice(): Flow$Voice;
  setVoice(voice: Flow$Voice): void;
  getTuplet(): Flow$Tuplet;
  setTuplet(tuplet: Flow$Tuplet): Vex$Flow$Tickable;
  addToModifierContext(mc: Vex$Flow$ModifierContext): void;
  addModifier(mod: Vex$Flow$Modifier): Vex$Flow$Tickable;
  setTickContext(tc: Flow$TickContext): void;
  preFormat(): void;
  postFormat(): Vex$Flow$Tickable;
  getIntrinsicTicks(): Vex$Flow$Fraction;
  setIntrinsicTicks(intrinsicTicks: Vex$Flow$Fraction): void;
  getTickMultiplier(): Vex$Flow$Fraction;
  applyTickMultiplier(numerator: number, denominator: number): void;
  setDuration(duration: Vex$Flow$Fraction): void;
}

declare class Vex$Flow$TickContext {
  setContext(context: Vex$IRenderContext): void;
  getContext(): Vex$IRenderContext;
  shouldIgnoreTicks(): boolean;
  getWidth(): number;
  getX(): number;
  setX(x: number): Vex$Flow$TickContext;
  getXBase(): number;
  setXBase(xBase: number): void;
  getXOffset(): number;
  setXOffset(xOffset: number): void;
  getPixelsUsed(): number;
  setPixelsUsed(pixelsUsed: number): Vex$Flow$TickContext;
  setPadding(padding: number): Vex$Flow$TickContext;
  getMaxTicks(): number;
  getMinTicks(): number;
  getTickables(): Vex$Flow$Tickable[];
  getCenterAlignedTickables(): Vex$Flow$Tickable[];
  getMetrics(): {
    width: number,
    notePx: number,
    extraLeftPx: number,
    extraRightPx: number
  };
  getCurrentTick(): Vex$Flow$Fraction;
  setCurrentTick(tick: Vex$Flow$Fraction): void;
  getExtraPx(): {
    left: number,
    right: number,
    extraLeft: number,
    extraRight: number
  };
  addTickable(tickable: Vex$Flow$Tickable): Vex$Flow$TickContext;
  preFormat(): Vex$Flow$TickContext;
  postFormat(): Vex$Flow$TickContext;
  static getNextContext(tContext: Vex$Flow$TickContext): Vex$Flow$TickContext;
}

declare class Vex$Flow$TimeSignature mixins StaveModifier {
  addModifier(): void;
  addEndModifier(): void;
  constructor(timeSpec: string, customPadding?: number): this;
  parseTimeSpec(
    timeSpec: string
  ): {
    num: number,
    glyph: Vex$Flow$Glyph
  };
  makeTimeSignatureGlyph(topNums: number[], botNums: number[]): Vex$Flow$Glyph;
  getTimeSig(): {
    num: number,
    glyph: Vex$Flow$Glyph
  };
  addModifier(stave: Vex$Flow$Stave): void;
  addEndModifier(stave: Vex$Flow$Stave): void;
}

declare var npm$namespace$Vex$Flow$TimeSignature: {
  glyphs: typeof Vex$Flow$TimeSignature$glyphs
};
declare var Vex$Flow$TimeSignature$glyphs: {
  [name: string]: {
    code: string,
    point: number,
    line: number
  }
};

declare class Vex$Flow$TimeSigNote mixins Note {
  setStave(stave: Vex$Flow$Stave): Vex$Flow$Note;
  constructor(timeSpec: string, customPadding: number): this;
  setStave(stave: Vex$Flow$Stave): void;
  getBoundingBox(): Vex$Flow$BoundingBox;
  addToModifierContext(): Vex$Flow$TimeSigNote;
  preFormat(): Vex$Flow$TimeSigNote;
  draw(): void;
}

declare class Vex$Flow$Tremolo mixins Modifier {
  constructor(num: number): this;
  getCategory(): string;
  draw(): void;
}

declare class Vex$Flow$Tuning {
  constructor(tuningString?: string): this;
  noteToInteger(noteString: string): number;
  setTuning(tuningString: string): void;
  getValueForString(stringNum: string): number;
  getValueForFret(fretNum: string, stringNum: string): number;
  getNoteForFret(fretNum: string, stringNum: string): string;
}

declare var npm$namespace$Vex$Flow$Tuning: {
  names: typeof Vex$Flow$Tuning$names
};
declare var Vex$Flow$Tuning$names: {
  [name: string]: string
};

declare class Vex$Flow$Tuplet {
  constructor(
    notes: Vex$Flow$StaveNote[],
    options?: {
      num_notes?: number,
      beats_occupied?: number
    }
  ): this;
  attach(): void;
  detach(): void;
  setContext(context: Vex$IRenderContext): Vex$Flow$Tuplet;
  setBracketed(bracketed: boolean): Vex$Flow$Tuplet;
  setRatioed(ratioed: boolean): Vex$Flow$Tuplet;
  setTupletLocation(location: number): Vex$Flow$Tuplet;
  getNotes(): Vex$Flow$StaveNote[];
  getNoteCount(): number;
  getBeatsOccupied(): number;
  setBeatsOccupied(beats: number): void;
  resolveGlyphs(): void;
  draw(): void;
}

declare var npm$namespace$Vex$Flow$Tuplet: {
  LOCATION_TOP: typeof Vex$Flow$Tuplet$LOCATION_TOP,
  LOCATION_BOTTOM: typeof Vex$Flow$Tuplet$LOCATION_BOTTOM
};
declare var Vex$Flow$Tuplet$LOCATION_TOP: number;

declare var Vex$Flow$Tuplet$LOCATION_BOTTOM: number;

declare class Vex$Flow$Vibrato mixins Modifier {
  static format(
    vibratos: Vex$Flow$Vibrato[],
    state: {
      left_shift: number,
      right_shift: number,
      text_line: number
    },
    context: Vex$Flow$ModifierContext
  ): boolean;
  setHarsh(harsh: boolean): Vex$Flow$Vibrato;
  setVibratoWidth(width: number): Vex$Flow$Vibrato;
  draw(): void;
}

declare var npm$namespace$Vex$Flow$Vibrato: {
  CATEGORY: typeof Vex$Flow$Vibrato$CATEGORY
};
declare var Vex$Flow$Vibrato$CATEGORY: string;

declare class Vex$Flow$Voice {
  constructor(time: {
    num_beats?: number,
    beat_value?: number,
    resolution?: number
  }): this;
  getTotalTicks(): Vex$Flow$Fraction;
  getTicksUsed(): Vex$Flow$Fraction;
  getLargestTickWidth(): number;
  getSmallestTickCount(): Vex$Flow$Fraction;
  getTickables(): Vex$Flow$Tickable[];
  getMode(): number;
  setMode(mode: number): Vex$Flow$Voice;
  getResolutionMultiplier(): number;
  getActualResolution(): number;
  setStave(stave: Vex$Flow$Stave): Vex$Flow$Voice;
  getBoundingBox(): Vex$Flow$BoundingBox;
  getVoiceGroup(): Flow$VoiceGroup;
  setVoiceGroup(g: Flow$VoiceGroup): Vex$Flow$Voice;
  setStrict(strict: boolean): Vex$Flow$Voice;
  isComplete(): boolean;
  addTickable(tickable: Vex$Flow$Tickable): Vex$Flow$Voice;
  addTickables(tickables: Vex$Flow$Tickable[]): Vex$Flow$Voice;
  preFormat(): Vex$Flow$Voice;
  draw(context: Vex$IRenderContext, stave?: Vex$Flow$Stave): void;
}

declare var npm$namespace$Vex$Flow$Voice: {
  Mode: typeof Vex$Flow$Voice$Mode
};

declare var Vex$Flow$Voice$Mode: {|
  +STRICT: 1, // 1
  +SOFT: 1, // 1
  +FULL: 2 // 2
|};

declare class Vex$Flow$VoiceGroup {
  getVoices(): Vex$Flow$Voice[];
  getModifierContexts(): Vex$Flow$ModifierContext[];
  addVoice(voice: Vex$Flow$Voice): void;
}

declare class Vex$Flow$Volta mixins StaveModifier {
  constructor(
    type: Volta$type,
    number: number,
    x: number,
    y_shift: number
  ): this;
  getCategory(): string;
  setShiftY(y: number): Vex$Flow$Volta;
  draw(stave: Vex$Flow$Stave, x: number): Vex$Flow$Volta;
}

declare var npm$namespace$Vex$Flow$Volta: {
  type: typeof Vex$Flow$Volta$type
};

declare var Vex$Flow$Volta$type: {|
  +NONE: 1, // 1
  +BEGIN: 1, // 1
  +MID: 2, // 2
  +END: 3, // 3
  +BEGIN_END: 4 // 4
|};
declare module "vexflow" {
  declare export default typeof Vex;
}
