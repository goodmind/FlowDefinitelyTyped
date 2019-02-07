declare module "pseudo-audio-param" {
  declare module.exports: typeof PseudoAudioParam;

  declare interface PseudoAudioParamEvent {
    type: string;
    time: number;
  }

  /**
   * Simulate scheduled AudioParam values
   */
  declare class PseudoAudioParam {
    events: PseudoAudioParamEvent[];
    constructor(defaultValue: number): this;

    /**
     * Return scheduled value at time
     */
    getValueAtTime(time: number): number;

    /**
     * Apply scheduled methods to the provided audioParam. If reset is `true`,
     * cancel all events of AudioParam before applying
     */
    applyTo(audioParam: AudioParam, reset?: boolean): PseudoAudioParam;
    setValueAtTime(value: number, time: number): PseudoAudioParam;
    linearRampToValueAtTime(value: number, time: number): PseudoAudioParam;
    exponentialRampToValueAtTime(value: number, time: number): PseudoAudioParam;
    setTargetAtTime(
      value: number,
      time: number,
      timeConstant: number
    ): PseudoAudioParam;
    setValueCurveAtTime(
      values: number[],
      time: number,
      duration: number
    ): PseudoAudioParam;
    cancelScheduledValues(time: number): PseudoAudioParam;
    cancelAndHoldAtTime(time: number): PseudoAudioParam;
  }
}
