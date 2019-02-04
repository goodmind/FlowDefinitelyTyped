declare module 'slate-base64-serializer' {
        import type {
          Value,Node
        } from 'slate';

	declare export function deserialize(string: string, options?: {[key: string]: any}): Value

	declare export function deserializeNode(string: string, options?: {[key: string]: any}): Node

	declare export function serialize(value: Value, options?: {[key: string]: any}): string

	declare export function serializeNode(node: Node, options?: {[key: string]: any}): string

    }
