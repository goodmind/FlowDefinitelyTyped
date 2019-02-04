declare module 'event-kit' {
        declare export interface DisposableLike {
dispose(): void
} 
	
/**
 * A handle to a resource that can be disposed.
 */
declare export class Disposable mixins DisposableLike {
disposed: boolean;

/**
 * Ensure that Object correctly implements the Disposable contract.
 */
static isDisposable(object: {[key: string]: any}): boolean;

/**
 * Construct a Disposable.
 */
constructor(disposableAction?: () => void): this;

/**
 * A callback which will be called within dispose().
 */
disposalAction: () => void;

/**
 * Perform the disposal action, indicating that the resource associated
 * with this disposable is no longer needed.
 */
dispose(): void
}
	
/**
 * An object that aggregates multiple Disposable instances together into a
 * single disposable, so they can all be disposed as a group.
 */
declare export class CompositeDisposable mixins DisposableLike {
disposed: boolean;

/**
 * Construct an instance, optionally with one or more disposables.
 */
constructor(...disposables: DisposableLike[]): this;

/**
 * Dispose all disposables added to this composite disposable.
 * If this object has already been disposed, this method has no effect.
 */
dispose(): void;

/**
 * Add disposables to be disposed when the composite is disposed.
 * If this object has already been disposed, this method has no effect.
 */
add(...disposables: DisposableLike[]): void;

/**
 * Remove a previously added disposable.
 */
remove(disposable: DisposableLike): void;

/**
 * Alias to CompositeDisposable::remove.
 */
delete(disposable: DisposableLike): void;

/**
 * Clear all disposables. They will not be disposed by the next call to
 * dispose.
 */
clear(): void
}
	
/**
 * Utility class to be used when implementing event-based APIs that allows
 * for handlers registered via ::on to be invoked with calls to ::emit.
 */
declare export class Emitter<OptionalEmissions, RequiredEmissions> mixins DisposableLike {
disposed: boolean;

/**
 * Construct an emitter.
 */
constructor(): this;

/**
 * Clear out any existing subscribers.
 */
clear(): void;

/**
 * Unsubscribe all handlers.
 */
dispose(): boolean;

/**
 * Registers a handler to be invoked whenever the given event is emitted.
 */
on<T: $Keys<OptionalEmissions>>(
eventName: T,
handler: (value?: $ElementType<OptionalEmissions, T>) => void): Disposable;

/**
 * Registers a handler to be invoked whenever the given event is emitted.
 */
on<T: $Keys<RequiredEmissions>>(
eventName: T,
handler: (value: $ElementType<RequiredEmissions, T>) => void): Disposable;

/**
 * Register the given handler function to be invoked the next time an event
 * with the given name is emitted via ::emit.
 */
once<T: $Keys<OptionalEmissions>>(
eventName: T,
handler: (value?: $ElementType<OptionalEmissions, T>) => void): Disposable;

/**
 * Register the given handler function to be invoked the next time an event
 * with the given name is emitted via ::emit.
 */
once<T: $Keys<RequiredEmissions>>(
eventName: T,
handler: (value: $ElementType<RequiredEmissions, T>) => void): Disposable;

/**
 * Register the given handler function to be invoked before all other
 * handlers existing at the time of subscription whenever events by the
 * given name are emitted via ::emit.
 */
preempt<T: $Keys<OptionalEmissions>>(
eventName: T,
handler: (value?: $ElementType<OptionalEmissions, T>) => void): Disposable;

/**
 * Register the given handler function to be invoked before all other
 * handlers existing at the time of subscription whenever events by the
 * given name are emitted via ::emit.
 */
preempt<T: $Keys<RequiredEmissions>>(
eventName: T,
handler: (value: $ElementType<RequiredEmissions, T>) => void): Disposable;

/**
 * Invoke the handlers registered via ::on for the given event name.
 */
emit<T: $Keys<OptionalEmissions>>(
eventName: T,
value?: $ElementType<OptionalEmissions, T>): void;

/**
 * Invoke the handlers registered via ::on for the given event name.
 */
emit<T: $Keys<RequiredEmissions>>(
eventName: T,
value: $ElementType<RequiredEmissions, T>): void;

/**
 * Asynchronously invoke the handlers registered via ::on for the given event name.
 * @return A promise that will be fulfilled once all handlers have been invoked.
 */
emitAsync<T: $Keys<OptionalEmissions>>(
eventName: T,
value?: $ElementType<OptionalEmissions, T>): Promise<void>;

/**
 * Asynchronously invoke the handlers registered via ::on for the given event name.
 * @return A promise that will be fulfilled once all handlers have been invoked.
 */
emitAsync<T: $Keys<RequiredEmissions>>(
eventName: T,
value: $ElementType<RequiredEmissions, T>): Promise<void>
}
    }
