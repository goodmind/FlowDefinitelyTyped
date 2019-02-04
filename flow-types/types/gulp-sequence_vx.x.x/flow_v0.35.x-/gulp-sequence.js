declare module 'gulp-sequence' {
        import type {
          Gulp,TaskFunction
        } from 'gulp';

	
      declare var npm$namespace$seq: {
        use: typeof seq$use,
        
      }
declare type seq$Step = string | string[];

declare type seq$Done = (error?: any) => void;

declare function seq$use(gulp: Gulp): typeof seq

	declare function seq(firstTask: seq$seq$Step, ...additionalTasks: seq$seq$Step[]): TaskFunction

	declare function seq(s1: seq$seq$Step, done: seq$seq$Done): void

	declare function seq(s1: seq$seq$Step, s2: seq$seq$Step, done: seq$seq$Done): void

	declare function seq(s1: seq$seq$Step, s2: seq$seq$Step, s3: seq$seq$Step, done: seq$seq$Done): void

	declare function seq(
s1: seq$seq$Step,
s2: seq$seq$Step,
s3: seq$seq$Step,
s4: seq$seq$Step,
done: seq$seq$Done): void

	declare function seq(
s1: seq$seq$Step,
s2: seq$seq$Step,
s3: seq$seq$Step,
s4: seq$seq$Step,
s5: seq$seq$Step,
done: seq$seq$Done): void

	declare function seq(
s1: seq$seq$Step,
s2: seq$seq$Step,
s3: seq$seq$Step,
s4: seq$seq$Step,
s5: seq$seq$Step,
s6: seq$seq$Step,
done: seq$seq$Done): void

	declare function seq(
s1: seq$seq$Step,
s2: seq$seq$Step,
s3: seq$seq$Step,
s4: seq$seq$Step,
s5: seq$seq$Step,
s6: seq$seq$Step,
s7: seq$seq$Step,
done: seq$seq$Done): void

	declare function seq(
s1: seq$seq$Step,
s2: seq$seq$Step,
s3: seq$seq$Step,
s4: seq$seq$Step,
s5: seq$seq$Step,
s6: seq$seq$Step,
s7: seq$seq$Step,
s8: seq$seq$Step,
done: seq$seq$Done): void

	declare function seq(
s1: seq$seq$Step,
s2: seq$seq$Step,
s3: seq$seq$Step,
s4: seq$seq$Step,
s5: seq$seq$Step,
s6: seq$seq$Step,
s7: seq$seq$Step,
s8: seq$seq$Step,
s9: seq$seq$Step,
done: seq$seq$Done): void

	declare function seq(
s1: seq$seq$Step,
s2: seq$seq$Step,
s3: seq$seq$Step,
s4: seq$seq$Step,
s5: seq$seq$Step,
s6: seq$seq$Step,
s7: seq$seq$Step,
s8: seq$seq$Step,
s9: seq$seq$Step,
s10: seq$seq$Step,
done: seq$seq$Done): void

	declare function seq(
s1: seq$seq$Step,
s2: seq$seq$Step,
s3: seq$seq$Step,
s4: seq$seq$Step,
s5: seq$seq$Step,
s6: seq$seq$Step,
s7: seq$seq$Step,
s8: seq$seq$Step,
s9: seq$seq$Step,
s10: seq$seq$Step,
s11: seq$seq$Step,
done: seq$seq$Done): void

	declare function seq(
s1: seq$seq$Step,
s2: seq$seq$Step,
s3: seq$seq$Step,
s4: seq$seq$Step,
s5: seq$seq$Step,
s6: seq$seq$Step,
s7: seq$seq$Step,
s8: seq$seq$Step,
s9: seq$seq$Step,
s10: seq$seq$Step,
s11: seq$seq$Step,
s12: seq$seq$Step,
done: seq$seq$Done): void

	declare function seq(
s1: seq$seq$Step,
s2: seq$seq$Step,
s3: seq$seq$Step,
s4: seq$seq$Step,
s5: seq$seq$Step,
s6: seq$seq$Step,
s7: seq$seq$Step,
s8: seq$seq$Step,
s9: seq$seq$Step,
s10: seq$seq$Step,
s11: seq$seq$Step,
s12: seq$seq$Step,
s13: seq$seq$Step,
done: seq$seq$Done): void

	declare function seq(
s1: seq$seq$Step,
s2: seq$seq$Step,
s3: seq$seq$Step,
s4: seq$seq$Step,
s5: seq$seq$Step,
s6: seq$seq$Step,
s7: seq$seq$Step,
s8: seq$seq$Step,
s9: seq$seq$Step,
s10: seq$seq$Step,
s11: seq$seq$Step,
s12: seq$seq$Step,
s13: seq$seq$Step,
s14: seq$seq$Step,
done: seq$seq$Done): void

	declare function seq(
s1: seq$seq$Step,
s2: seq$seq$Step,
s3: seq$seq$Step,
s4: seq$seq$Step,
s5: seq$seq$Step,
s6: seq$seq$Step,
s7: seq$seq$Step,
s8: seq$seq$Step,
s9: seq$seq$Step,
s10: seq$seq$Step,
s11: seq$seq$Step,
s12: seq$seq$Step,
s13: seq$seq$Step,
s14: seq$seq$Step,
s15: seq$seq$Step,
done: seq$seq$Done): void

	declare function seq(
s1: seq$seq$Step,
s2: seq$seq$Step,
s3: seq$seq$Step,
s4: seq$seq$Step,
s5: seq$seq$Step,
s6: seq$seq$Step,
s7: seq$seq$Step,
s8: seq$seq$Step,
s9: seq$seq$Step,
s10: seq$seq$Step,
s11: seq$seq$Step,
s12: seq$seq$Step,
s13: seq$seq$Step,
s14: seq$seq$Step,
s15: seq$seq$Step,
s16: seq$seq$Step,
done: seq$seq$Done): void

	declare function seq(
s1: seq$seq$Step,
s2: seq$seq$Step,
s3: seq$seq$Step,
s4: seq$seq$Step,
s5: seq$seq$Step,
s6: seq$seq$Step,
s7: seq$seq$Step,
s8: seq$seq$Step,
s9: seq$seq$Step,
s10: seq$seq$Step,
s11: seq$seq$Step,
s12: seq$seq$Step,
s13: seq$seq$Step,
s14: seq$seq$Step,
s15: seq$seq$Step,
s16: seq$seq$Step,
s17: seq$seq$Step,
done: seq$seq$Done): void

	declare function seq(
s1: seq$seq$Step,
s2: seq$seq$Step,
s3: seq$seq$Step,
s4: seq$seq$Step,
s5: seq$seq$Step,
s6: seq$seq$Step,
s7: seq$seq$Step,
s8: seq$seq$Step,
s9: seq$seq$Step,
s10: seq$seq$Step,
s11: seq$seq$Step,
s12: seq$seq$Step,
s13: seq$seq$Step,
s14: seq$seq$Step,
s15: seq$seq$Step,
s16: seq$seq$Step,
s17: seq$seq$Step,
s18: seq$seq$Step,
done: seq$seq$Done): void

	declare function seq(
s1: seq$seq$Step,
s2: seq$seq$Step,
s3: seq$seq$Step,
s4: seq$seq$Step,
s5: seq$seq$Step,
s6: seq$seq$Step,
s7: seq$seq$Step,
s8: seq$seq$Step,
s9: seq$seq$Step,
s10: seq$seq$Step,
s11: seq$seq$Step,
s12: seq$seq$Step,
s13: seq$seq$Step,
s14: seq$seq$Step,
s15: seq$seq$Step,
s16: seq$seq$Step,
s17: seq$seq$Step,
s18: seq$seq$Step,
s19: seq$seq$Step,
done: seq$seq$Done): void

	declare function seq(
s1: seq$seq$Step,
s2: seq$seq$Step,
s3: seq$seq$Step,
s4: seq$seq$Step,
s5: seq$seq$Step,
s6: seq$seq$Step,
s7: seq$seq$Step,
s8: seq$seq$Step,
s9: seq$seq$Step,
s10: seq$seq$Step,
s11: seq$seq$Step,
s12: seq$seq$Step,
s13: seq$seq$Step,
s14: seq$seq$Step,
s15: seq$seq$Step,
s16: seq$seq$Step,
s17: seq$seq$Step,
s18: seq$seq$Step,
s19: seq$seq$Step,
s20: seq$seq$Step,
done: seq$seq$Done): void

	declare function seq(
s1: seq$seq$Step,
s2: seq$seq$Step,
s3: seq$seq$Step,
s4: seq$seq$Step,
s5: seq$seq$Step,
s6: seq$seq$Step,
s7: seq$seq$Step,
s8: seq$seq$Step,
s9: seq$seq$Step,
s10: seq$seq$Step,
s11: seq$seq$Step,
s12: seq$seq$Step,
s13: seq$seq$Step,
s14: seq$seq$Step,
s15: seq$seq$Step,
s16: seq$seq$Step,
s17: seq$seq$Step,
s18: seq$seq$Step,
s19: seq$seq$Step,
s20: seq$seq$Step,
s21: seq$seq$Step,
done: seq$seq$Done): void

	declare function seq(
s1: seq$seq$Step,
s2: seq$seq$Step,
s3: seq$seq$Step,
s4: seq$seq$Step,
s5: seq$seq$Step,
s6: seq$seq$Step,
s7: seq$seq$Step,
s8: seq$seq$Step,
s9: seq$seq$Step,
s10: seq$seq$Step,
s11: seq$seq$Step,
s12: seq$seq$Step,
s13: seq$seq$Step,
s14: seq$seq$Step,
s15: seq$seq$Step,
s16: seq$seq$Step,
s17: seq$seq$Step,
s18: seq$seq$Step,
s19: seq$seq$Step,
s20: seq$seq$Step,
s21: seq$seq$Step,
s22: seq$seq$Step,
done: seq$seq$Done): void

	declare function seq(
s1: seq$seq$Step,
s2: seq$seq$Step,
s3: seq$seq$Step,
s4: seq$seq$Step,
s5: seq$seq$Step,
s6: seq$seq$Step,
s7: seq$seq$Step,
s8: seq$seq$Step,
s9: seq$seq$Step,
s10: seq$seq$Step,
s11: seq$seq$Step,
s12: seq$seq$Step,
s13: seq$seq$Step,
s14: seq$seq$Step,
s15: seq$seq$Step,
s16: seq$seq$Step,
s17: seq$seq$Step,
s18: seq$seq$Step,
s19: seq$seq$Step,
s20: seq$seq$Step,
s21: seq$seq$Step,
s22: seq$seq$Step,
s23: seq$seq$Step,
done: seq$seq$Done): void

	declare function seq(
s1: seq$seq$Step,
s2: seq$seq$Step,
s3: seq$seq$Step,
s4: seq$seq$Step,
s5: seq$seq$Step,
s6: seq$seq$Step,
s7: seq$seq$Step,
s8: seq$seq$Step,
s9: seq$seq$Step,
s10: seq$seq$Step,
s11: seq$seq$Step,
s12: seq$seq$Step,
s13: seq$seq$Step,
s14: seq$seq$Step,
s15: seq$seq$Step,
s16: seq$seq$Step,
s17: seq$seq$Step,
s18: seq$seq$Step,
s19: seq$seq$Step,
s20: seq$seq$Step,
s21: seq$seq$Step,
s22: seq$seq$Step,
s23: seq$seq$Step,
s24: seq$seq$Step,
done: seq$seq$Done): void

	declare function seq(
s1: seq$seq$Step,
s2: seq$seq$Step,
s3: seq$seq$Step,
s4: seq$seq$Step,
s5: seq$seq$Step,
s6: seq$seq$Step,
s7: seq$seq$Step,
s8: seq$seq$Step,
s9: seq$seq$Step,
s10: seq$seq$Step,
s11: seq$seq$Step,
s12: seq$seq$Step,
s13: seq$seq$Step,
s14: seq$seq$Step,
s15: seq$seq$Step,
s16: seq$seq$Step,
s17: seq$seq$Step,
s18: seq$seq$Step,
s19: seq$seq$Step,
s20: seq$seq$Step,
s21: seq$seq$Step,
s22: seq$seq$Step,
s23: seq$seq$Step,
s24: seq$seq$Step,
s25: seq$seq$Step,
done: seq$seq$Done): void

	declare module.exports: typeof seq

    }
