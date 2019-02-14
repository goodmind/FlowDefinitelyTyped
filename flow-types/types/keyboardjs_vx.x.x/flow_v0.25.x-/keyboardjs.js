declare module "keyboardjs" {
  declare var npm$namespace$keyboardjs: {
    bind: typeof keyboardjs$bind,
    unbind: typeof keyboardjs$unbind,
    setContext: typeof keyboardjs$setContext,
    withContext: typeof keyboardjs$withContext,
    getContext: typeof keyboardjs$getContext,
    pause: typeof keyboardjs$pause,
    resume: typeof keyboardjs$resume,
    reset: typeof keyboardjs$reset,
    pressKey: typeof keyboardjs$pressKey,
    releaseKey: typeof keyboardjs$releaseKey,
    releaseAllKeys: typeof keyboardjs$releaseAllKeys,
    watch: typeof keyboardjs$watch,
    stop: typeof keyboardjs$stop
  };

  /**
   * Information and functions in the current callback.
   */
  declare type keyboardjs$KeyEvent = {
    preventRepeat(): void,
    pressedKeys: string[]
  } & KeyboardEvent;

  /**
   * Callback function when a keyCombo is triggered.
   * @see KeyEvent
   */
  declare interface keyboardjs$Callback {
    /**
     * Keyevent
     */
    (e?: keyboardjs$KeyEvent): void;
  }

  /**
   * Binds a keyCombo to specific callback functions.
   * @param keyCombo String of keys to be pressed to execute callbacks.
   * @param pressed Callback that gets executed when the keyComboState is 'pressed', can be null.
   * @param released Callback that gets executed when the keyComboState is 'released'
   * @param preventRepeatByDefault Whether or not to prevent repeat by default. Defaults to false.
   */
  declare export function keyboardjs$bind(
    keyCombo: string | string[],
    pressed: keyboardjs$Callback,
    released?: keyboardjs$Callback,
    preventRepeatByDefault?: boolean
  ): void;

  /**
   * Unbinds a keyCombo completely or only specific pressed & released callback combos.
   * @param keyCombo String of keys to be pressed to execute callbacks.
   * @param pressed Callback that gets executed when the keyComboState is 'pressed', can be null.
   * @param released Callback that gets executed when the keyComboState is 'released', can be null.
   */
  declare export function keyboardjs$unbind(
    keyCombo: string | string[],
    pressed?: keyboardjs$Callback,
    released?: keyboardjs$Callback
  ): void;

  /**
   * Sets the context KeyboardJS operates in. Default is global context.
   * Bindings in global context will execute in all contexts.
   * @param identifier The name of the context. If the context doesn't exists, it will be created.
   * Use 'global' to switch to global context.
   */
  declare export function keyboardjs$setContext(identifier: string): void;

  /**
   * Executes a Callback without loosing the current context.
   * @param identifier The name of the context the callback should be in. If the context doesn't exists, it will be created.
   * @param inContextCallBack The callback function. Will be executed in the given context.
   */
  declare export function keyboardjs$withContext(
    identifier: string,
    inContextCallBack: () => void
  ): void;

  /**
   * Returns the context KeyboardJS currently operates in.
   */
  declare export function keyboardjs$getContext(): string;

  /**
   * The keyboard will no longer trigger bindings.
   */
  declare export function keyboardjs$pause(): void;

  /**
   * The keyboard will once again trigger bindings.
   */
  declare export function keyboardjs$resume(): void;

  /**
   * All active bindings will released and unbound.
   */
  declare export function keyboardjs$reset(): void;

  /**
   * Triggers a key press. Stays in pressed state until released.
   * @param keyCombo String of keys or keyCode to be pressed to execute 'pressed' callbacks.
   * @param event The KeyEvent, can be null.
   */
  declare export function keyboardjs$pressKey(
    keyCombo: string | number,
    event?: keyboardjs$KeyEvent
  ): void;

  /**
   * Triggers a key release.
   * @param keyCombo String of keys or keyCode to be released to execute 'released' callbacks.
   * @param event The KeyEvent, can be null.
   */
  declare export function keyboardjs$releaseKey(
    keyCombo: string | number,
    event?: keyboardjs$KeyEvent
  ): void;

  /**
   * Releases all keys.
   */
  declare export function keyboardjs$releaseAllKeys(): void;

  /**
   * Attaches keyboardJS a specific window and a specific document or form.
   * @param myWin The window to attach to.
   * @param myDoc The document or form to attach to.
   */
  declare export function keyboardjs$watch(
    myWin: Window,
    myDoc: Document | HTMLFormElement
  ): void;

  /**
   * Attaches keyboardJS to the current window and a specific document or form.
   * @param myDoc The document or form to attach to.
   */
  declare export function keyboardjs$watch(
    myDoc: Document | HTMLFormElement
  ): void;

  /**
   * Attaches keyboardJS to the current window an document.
   */
  declare export function keyboardjs$watch(): void;

  /**
   * Detaches KeyboardJS from the window and document/element
   */
  declare export function keyboardjs$stop(): void;

  declare export default typeof keyboardjs;
}
