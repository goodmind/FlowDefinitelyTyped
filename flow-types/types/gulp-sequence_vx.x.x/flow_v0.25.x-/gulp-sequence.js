declare module "gulp-sequence" {
  import type { Gulp, TaskFunction } from "gulp";

  declare var npm$namespace$seq: {
    use: typeof seq$use
  };
  declare type seq$Step = string | string[];

  declare type seq$Done = (error?: any) => void;

  declare function seq$use(gulp: Gulp): typeof seq;

  declare function seq(
    firstTask: seq$Step,
    ...additionalTasks: seq$Step[]
  ): TaskFunction;

  declare function seq(s1: seq$Step, done: seq$Done): void;

  declare function seq(s1: seq$Step, s2: seq$Step, done: seq$Done): void;

  declare function seq(
    s1: seq$Step,
    s2: seq$Step,
    s3: seq$Step,
    done: seq$Done
  ): void;

  declare function seq(
    s1: seq$Step,
    s2: seq$Step,
    s3: seq$Step,
    s4: seq$Step,
    done: seq$Done
  ): void;

  declare function seq(
    s1: seq$Step,
    s2: seq$Step,
    s3: seq$Step,
    s4: seq$Step,
    s5: seq$Step,
    done: seq$Done
  ): void;

  declare function seq(
    s1: seq$Step,
    s2: seq$Step,
    s3: seq$Step,
    s4: seq$Step,
    s5: seq$Step,
    s6: seq$Step,
    done: seq$Done
  ): void;

  declare function seq(
    s1: seq$Step,
    s2: seq$Step,
    s3: seq$Step,
    s4: seq$Step,
    s5: seq$Step,
    s6: seq$Step,
    s7: seq$Step,
    done: seq$Done
  ): void;

  declare function seq(
    s1: seq$Step,
    s2: seq$Step,
    s3: seq$Step,
    s4: seq$Step,
    s5: seq$Step,
    s6: seq$Step,
    s7: seq$Step,
    s8: seq$Step,
    done: seq$Done
  ): void;

  declare function seq(
    s1: seq$Step,
    s2: seq$Step,
    s3: seq$Step,
    s4: seq$Step,
    s5: seq$Step,
    s6: seq$Step,
    s7: seq$Step,
    s8: seq$Step,
    s9: seq$Step,
    done: seq$Done
  ): void;

  declare function seq(
    s1: seq$Step,
    s2: seq$Step,
    s3: seq$Step,
    s4: seq$Step,
    s5: seq$Step,
    s6: seq$Step,
    s7: seq$Step,
    s8: seq$Step,
    s9: seq$Step,
    s10: seq$Step,
    done: seq$Done
  ): void;

  declare function seq(
    s1: seq$Step,
    s2: seq$Step,
    s3: seq$Step,
    s4: seq$Step,
    s5: seq$Step,
    s6: seq$Step,
    s7: seq$Step,
    s8: seq$Step,
    s9: seq$Step,
    s10: seq$Step,
    s11: seq$Step,
    done: seq$Done
  ): void;

  declare function seq(
    s1: seq$Step,
    s2: seq$Step,
    s3: seq$Step,
    s4: seq$Step,
    s5: seq$Step,
    s6: seq$Step,
    s7: seq$Step,
    s8: seq$Step,
    s9: seq$Step,
    s10: seq$Step,
    s11: seq$Step,
    s12: seq$Step,
    done: seq$Done
  ): void;

  declare function seq(
    s1: seq$Step,
    s2: seq$Step,
    s3: seq$Step,
    s4: seq$Step,
    s5: seq$Step,
    s6: seq$Step,
    s7: seq$Step,
    s8: seq$Step,
    s9: seq$Step,
    s10: seq$Step,
    s11: seq$Step,
    s12: seq$Step,
    s13: seq$Step,
    done: seq$Done
  ): void;

  declare function seq(
    s1: seq$Step,
    s2: seq$Step,
    s3: seq$Step,
    s4: seq$Step,
    s5: seq$Step,
    s6: seq$Step,
    s7: seq$Step,
    s8: seq$Step,
    s9: seq$Step,
    s10: seq$Step,
    s11: seq$Step,
    s12: seq$Step,
    s13: seq$Step,
    s14: seq$Step,
    done: seq$Done
  ): void;

  declare function seq(
    s1: seq$Step,
    s2: seq$Step,
    s3: seq$Step,
    s4: seq$Step,
    s5: seq$Step,
    s6: seq$Step,
    s7: seq$Step,
    s8: seq$Step,
    s9: seq$Step,
    s10: seq$Step,
    s11: seq$Step,
    s12: seq$Step,
    s13: seq$Step,
    s14: seq$Step,
    s15: seq$Step,
    done: seq$Done
  ): void;

  declare function seq(
    s1: seq$Step,
    s2: seq$Step,
    s3: seq$Step,
    s4: seq$Step,
    s5: seq$Step,
    s6: seq$Step,
    s7: seq$Step,
    s8: seq$Step,
    s9: seq$Step,
    s10: seq$Step,
    s11: seq$Step,
    s12: seq$Step,
    s13: seq$Step,
    s14: seq$Step,
    s15: seq$Step,
    s16: seq$Step,
    done: seq$Done
  ): void;

  declare function seq(
    s1: seq$Step,
    s2: seq$Step,
    s3: seq$Step,
    s4: seq$Step,
    s5: seq$Step,
    s6: seq$Step,
    s7: seq$Step,
    s8: seq$Step,
    s9: seq$Step,
    s10: seq$Step,
    s11: seq$Step,
    s12: seq$Step,
    s13: seq$Step,
    s14: seq$Step,
    s15: seq$Step,
    s16: seq$Step,
    s17: seq$Step,
    done: seq$Done
  ): void;

  declare function seq(
    s1: seq$Step,
    s2: seq$Step,
    s3: seq$Step,
    s4: seq$Step,
    s5: seq$Step,
    s6: seq$Step,
    s7: seq$Step,
    s8: seq$Step,
    s9: seq$Step,
    s10: seq$Step,
    s11: seq$Step,
    s12: seq$Step,
    s13: seq$Step,
    s14: seq$Step,
    s15: seq$Step,
    s16: seq$Step,
    s17: seq$Step,
    s18: seq$Step,
    done: seq$Done
  ): void;

  declare function seq(
    s1: seq$Step,
    s2: seq$Step,
    s3: seq$Step,
    s4: seq$Step,
    s5: seq$Step,
    s6: seq$Step,
    s7: seq$Step,
    s8: seq$Step,
    s9: seq$Step,
    s10: seq$Step,
    s11: seq$Step,
    s12: seq$Step,
    s13: seq$Step,
    s14: seq$Step,
    s15: seq$Step,
    s16: seq$Step,
    s17: seq$Step,
    s18: seq$Step,
    s19: seq$Step,
    done: seq$Done
  ): void;

  declare function seq(
    s1: seq$Step,
    s2: seq$Step,
    s3: seq$Step,
    s4: seq$Step,
    s5: seq$Step,
    s6: seq$Step,
    s7: seq$Step,
    s8: seq$Step,
    s9: seq$Step,
    s10: seq$Step,
    s11: seq$Step,
    s12: seq$Step,
    s13: seq$Step,
    s14: seq$Step,
    s15: seq$Step,
    s16: seq$Step,
    s17: seq$Step,
    s18: seq$Step,
    s19: seq$Step,
    s20: seq$Step,
    done: seq$Done
  ): void;

  declare function seq(
    s1: seq$Step,
    s2: seq$Step,
    s3: seq$Step,
    s4: seq$Step,
    s5: seq$Step,
    s6: seq$Step,
    s7: seq$Step,
    s8: seq$Step,
    s9: seq$Step,
    s10: seq$Step,
    s11: seq$Step,
    s12: seq$Step,
    s13: seq$Step,
    s14: seq$Step,
    s15: seq$Step,
    s16: seq$Step,
    s17: seq$Step,
    s18: seq$Step,
    s19: seq$Step,
    s20: seq$Step,
    s21: seq$Step,
    done: seq$Done
  ): void;

  declare function seq(
    s1: seq$Step,
    s2: seq$Step,
    s3: seq$Step,
    s4: seq$Step,
    s5: seq$Step,
    s6: seq$Step,
    s7: seq$Step,
    s8: seq$Step,
    s9: seq$Step,
    s10: seq$Step,
    s11: seq$Step,
    s12: seq$Step,
    s13: seq$Step,
    s14: seq$Step,
    s15: seq$Step,
    s16: seq$Step,
    s17: seq$Step,
    s18: seq$Step,
    s19: seq$Step,
    s20: seq$Step,
    s21: seq$Step,
    s22: seq$Step,
    done: seq$Done
  ): void;

  declare function seq(
    s1: seq$Step,
    s2: seq$Step,
    s3: seq$Step,
    s4: seq$Step,
    s5: seq$Step,
    s6: seq$Step,
    s7: seq$Step,
    s8: seq$Step,
    s9: seq$Step,
    s10: seq$Step,
    s11: seq$Step,
    s12: seq$Step,
    s13: seq$Step,
    s14: seq$Step,
    s15: seq$Step,
    s16: seq$Step,
    s17: seq$Step,
    s18: seq$Step,
    s19: seq$Step,
    s20: seq$Step,
    s21: seq$Step,
    s22: seq$Step,
    s23: seq$Step,
    done: seq$Done
  ): void;

  declare function seq(
    s1: seq$Step,
    s2: seq$Step,
    s3: seq$Step,
    s4: seq$Step,
    s5: seq$Step,
    s6: seq$Step,
    s7: seq$Step,
    s8: seq$Step,
    s9: seq$Step,
    s10: seq$Step,
    s11: seq$Step,
    s12: seq$Step,
    s13: seq$Step,
    s14: seq$Step,
    s15: seq$Step,
    s16: seq$Step,
    s17: seq$Step,
    s18: seq$Step,
    s19: seq$Step,
    s20: seq$Step,
    s21: seq$Step,
    s22: seq$Step,
    s23: seq$Step,
    s24: seq$Step,
    done: seq$Done
  ): void;

  declare function seq(
    s1: seq$Step,
    s2: seq$Step,
    s3: seq$Step,
    s4: seq$Step,
    s5: seq$Step,
    s6: seq$Step,
    s7: seq$Step,
    s8: seq$Step,
    s9: seq$Step,
    s10: seq$Step,
    s11: seq$Step,
    s12: seq$Step,
    s13: seq$Step,
    s14: seq$Step,
    s15: seq$Step,
    s16: seq$Step,
    s17: seq$Step,
    s18: seq$Step,
    s19: seq$Step,
    s20: seq$Step,
    s21: seq$Step,
    s22: seq$Step,
    s23: seq$Step,
    s24: seq$Step,
    s25: seq$Step,
    done: seq$Done
  ): void;

  declare export default typeof seq;
}
