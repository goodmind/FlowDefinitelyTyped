declare module '@ember/polyfills' {
        import type {
          Mix,Mix3,Mix4
        } from './types';

	
/**
 * Copy properties from a source object to a target object.
 * @deprecated Use Object.assign
 */
declare export function assign<T: {[key: string]: any}, U: {[key: string]: any}>(
target: T,
source: U): Mix<T, U>

	declare export function assign<T: {[key: string]: any}, U: {[key: string]: any}, V: {[key: string]: any}>(
target: T,
source1: U,
source2: V): Mix3<T, U, V>

	declare export function assign<T: {[key: string]: any}, U: {[key: string]: any}, V: {[key: string]: any}, W: {[key: string]: any}>(
target: T,
source1: U,
source2: V,
source3: W): Mix4<T, U, V, W>

	declare export function assign(target: {[key: string]: any}, ...sources: {[key: string]: any}[]): any

	
/**
 * Merge the contents of two objects together into the first object.
 * @deprecated Use Object.assign
 */
declare export function merge<T: {[key: string]: any}, U: {[key: string]: any}>(
original: T,
updates: U): Mix<T, U>

    }
