declare module "oibackoff" {
  declare export function backoff(opts?: BackoffOptions): BackoffInstance;

  declare export interface BackoffOptions {
    maxTries?: number;
    algorithm?: "incremental" | "exponential" | "fibonacci";
    delayRatio?: number;
    maxDelay?: number;
  }
  declare export type BackoffIntermediate<A> = (
    err: A,
    tries: number,
    delay: number
  ) => boolean;
  declare export function incremental(n: number): number;

  declare export function exponential(n: number): number;

  declare export function fibonacci(n: number): number;

  declare export interface BackoffInstance {
    <A>(
      fn: (callback: (a: A) => void) => void,
      callback: (a: A, b: null, priorErrors: A[] | void) => void
    ): void;
    <A>(
      fn: (callback: (a: A) => void) => void,
      intermediate: BackoffIntermediate<A>,
      callback: (a: A, b: null, priorErrors: A[] | void) => void
    ): void;
    <A, P0>(
      fn: (p0: P0, callback: (a: A) => void) => void,
      p0: P0,
      callback: (a: A, b: null, priorErrors: A[] | void) => void
    ): void;
    <A, P0>(
      fn: (p0: P0, callback: (a: A) => void) => void,
      p0: P0,
      intermediate: BackoffIntermediate<A>,
      callback: (a: A, b: null, priorErrors: A[] | void) => void
    ): void;
    <A, P0, P1>(
      fn: (p0: P0, p1: P1, callback: (a: A) => void) => void,
      p0: P0,
      p1: P1,
      callback: (a: A, b: null, priorErrors: A[] | void) => void
    ): void;
    <A, P0, P1>(
      fn: (p0: P0, p1: P1, callback: (a: A) => void) => void,
      p0: P0,
      p1: P1,
      intermediate: BackoffIntermediate<A>,
      callback: (a: A, b: null, priorErrors: A[] | void) => void
    ): void;
    <A, P0, P1, P2>(
      fn: (p0: P0, p1: P1, p2: P2, callback: (a: A) => void) => void,
      p0: P0,
      p1: P1,
      p2: P2,
      callback: (a: A, b: null, priorErrors: A[] | void) => void
    ): void;
    <A, P0, P1, P2>(
      fn: (p0: P0, p1: P1, p2: P2, callback: (a: A) => void) => void,
      p0: P0,
      p1: P1,
      p2: P2,
      intermediate: BackoffIntermediate<A>,
      callback: (a: A, b: null, priorErrors: A[] | void) => void
    ): void;
    <A, B>(
      fn: (callback: (a: A, b: B) => void) => void,
      callback: (a: A, b: B | null | void, priorErrors: A[] | void) => void
    ): void;
    <A, B>(
      fn: (callback: (a: A, b: B) => void) => void,
      intermediate: BackoffIntermediate<A>,
      callback: (a: A, b: B | null | void, priorErrors: A[] | void) => void
    ): void;
    <A, B, P0>(
      fn: (p0: P0, callback: (a: A, b: B) => void) => void,
      p0: P0,
      callback: (a: A, b: B | null | void, priorErrors: A[] | void) => void
    ): void;
    <A, B, P0>(
      fn: (p0: P0, callback: (a: A, b: B) => void) => void,
      p0: P0,
      intermediate: BackoffIntermediate<A>,
      callback: (a: A, b: B | null | void, priorErrors: A[] | void) => void
    ): void;
    <A, B, P0, P1>(
      fn: (p0: P0, p1: P1, callback: (a: A, b: B) => void) => void,
      p0: P0,
      p1: P1,
      callback: (a: A, b: B | null | void, priorErrors: A[] | void) => void
    ): void;
    <A, B, P0, P1>(
      fn: (p0: P0, p1: P1, callback: (a: A, b: B) => void) => void,
      p0: P0,
      p1: P1,
      intermediate: BackoffIntermediate<A>,
      callback: (a: A, b: B | null | void, priorErrors: A[] | void) => void
    ): void;
    <A, B, P0, P1, P2>(
      fn: (p0: P0, p1: P1, p2: P2, callback: (a: A, b: B) => void) => void,
      p0: P0,
      p1: P1,
      p2: P2,
      callback: (a: A, b: B | null | void, priorErrors: A[] | void) => void
    ): void;
    <A, B, P0, P1, P2>(
      fn: (p0: P0, p1: P1, p2: P2, callback: (a: A, b: B) => void) => void,
      p0: P0,
      p1: P1,
      p2: P2,
      intermediate: BackoffIntermediate<A>,
      callback: (a: A, b: B | null | void, priorErrors: A[] | void) => void
    ): void;
    <A, B, C>(
      fn: (callback: (a: A, b: B, c: C) => void) => void,
      callback: (
        a: A,
        b: B | null | void,
        priorErrorsOrC: C | A[] | void
      ) => void
    ): void;
    <A, B, C>(
      fn: (callback: (a: A, b: B, c: C) => void) => void,
      intermediate: BackoffIntermediate<A>,
      callback: (
        a: A,
        b: B | null | void,
        priorErrorsOrC: C | A[] | void
      ) => void
    ): void;
    <A, B, C, P0>(
      fn: (p0: P0, callback: (a: A, b: B, c: C) => void) => void,
      p0: P0,
      callback: (
        a: A,
        b: B | null | void,
        priorErrorsOrC: C | A[] | void
      ) => void
    ): void;
    <A, B, C, P0>(
      fn: (p0: P0, callback: (a: A, b: B, c: C) => void) => void,
      p0: P0,
      intermediate: BackoffIntermediate<A>,
      callback: (
        a: A,
        b: B | null | void,
        priorErrorsOrC: C | A[] | void
      ) => void
    ): void;
    <A, B, C, P0, P1>(
      fn: (p0: P0, p1: P1, callback: (a: A, b: B, c: C) => void) => void,
      p0: P0,
      p1: P1,
      callback: (
        a: A,
        b: B | null | void,
        priorErrorsOrC: C | A[] | void
      ) => void
    ): void;
    <A, B, C, P0, P1>(
      fn: (p0: P0, p1: P1, callback: (a: A, b: B, c: C) => void) => void,
      p0: P0,
      p1: P1,
      intermediate: BackoffIntermediate<A>,
      callback: (
        a: A,
        b: B | null | void,
        priorErrorsOrC: C | A[] | void
      ) => void
    ): void;
    <A, B, C, P0, P1, P2>(
      fn: (
        p0: P0,
        p1: P1,
        p2: P2,
        callback: (a: A, b: B, c: C) => void
      ) => void,
      p0: P0,
      p1: P1,
      p2: P2,
      callback: (
        a: A,
        b: B | null | void,
        priorErrorsOrC: C | A[] | void
      ) => void
    ): void;
    <A, B, C, P0, P1, P2>(
      fn: (
        p0: P0,
        p1: P1,
        p2: P2,
        callback: (a: A, b: B, c: C) => void
      ) => void,
      p0: P0,
      p1: P1,
      p2: P2,
      intermediate: BackoffIntermediate<A>,
      callback: (
        a: A,
        b: B | null | void,
        priorErrorsOrC: C | A[] | void
      ) => void
    ): void;
    <A, B, C, D>(
      fn: (callback: (a: A, b: B, c: C, d: D) => void) => void,
      callback: (
        a: A,
        b: B | null | void,
        priorErrorsOrC: C | A[] | void,
        d: D | void
      ) => void
    ): void;
    <A, B, C, D>(
      fn: (callback: (a: A, b: B, c: C, d: D) => void) => void,
      intermediate: BackoffIntermediate<A>,
      callback: (
        a: A,
        b: B | null | void,
        priorErrorsOrC: C | A[] | void,
        d: D | void
      ) => void
    ): void;
    <A, B, C, D, P0>(
      fn: (p0: P0, callback: (a: A, b: B, c: C, d: D) => void) => void,
      p0: P0,
      callback: (
        a: A,
        b: B | null | void,
        priorErrorsOrC: C | A[] | void,
        d: D | void
      ) => void
    ): void;
    <A, B, C, D, P0>(
      fn: (p0: P0, callback: (a: A, b: B, c: C, d: D) => void) => void,
      p0: P0,
      intermediate: BackoffIntermediate<A>,
      callback: (
        a: A,
        b: B | null | void,
        priorErrorsOrC: C | A[] | void,
        d: D | void
      ) => void
    ): void;
    <A, B, C, D, P0, P1>(
      fn: (p0: P0, p1: P1, callback: (a: A, b: B, c: C, d: D) => void) => void,
      p0: P0,
      p1: P1,
      callback: (
        a: A,
        b: B | null | void,
        priorErrorsOrC: C | A[] | void,
        d: D | void
      ) => void
    ): void;
    <A, B, C, D, P0, P1>(
      fn: (p0: P0, p1: P1, callback: (a: A, b: B, c: C, d: D) => void) => void,
      p0: P0,
      p1: P1,
      intermediate: BackoffIntermediate<A>,
      callback: (
        a: A,
        b: B | null | void,
        priorErrorsOrC: C | A[] | void,
        d: D | void
      ) => void
    ): void;
    <A, B, C, D, P0, P1, P2>(
      fn: (
        p0: P0,
        p1: P1,
        p2: P2,
        callback: (a: A, b: B, c: C, d: D) => void
      ) => void,
      p0: P0,
      p1: P1,
      p2: P2,
      callback: (
        a: A,
        b: B | null | void,
        priorErrorsOrC: C | A[] | void,
        d: D | void
      ) => void
    ): void;
    <A, B, C, D, P0, P1, P2>(
      fn: (
        p0: P0,
        p1: P1,
        p2: P2,
        callback: (a: A, b: B, c: C, d: D) => void
      ) => void,
      p0: P0,
      p1: P1,
      p2: P2,
      intermediate: BackoffIntermediate<A>,
      callback: (
        a: A,
        b: B | null | void,
        priorErrorsOrC: C | A[] | void,
        d: D | void
      ) => void
    ): void;
  }
}
