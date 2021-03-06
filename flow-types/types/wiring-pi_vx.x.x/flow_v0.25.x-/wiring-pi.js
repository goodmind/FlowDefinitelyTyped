declare module "wiring-pi" {
  declare export function wiringPiSetup(): number;

  declare export function wiringPiSetupGpio(): number;

  declare export function wiringPiSetupPhys(): number;

  declare export function wiringPiSetupSys(): number;

  declare export function setup(mode: string): number;

  declare export function pinModeAlt(pin: number, mode: number): void;

  declare export function pinMode(pin: number, mode: number): void;

  declare export function pullUpDnControl(pin: number, pud: number): void;

  declare export function digitalRead(pin: number): number;

  declare export function digitalWrite(pin: number, state: number): void;

  declare export function pwmWrite(pin: number, value: number): void;

  declare export function analogRead(pin: number): number;

  declare export function analogWrite(pin: number, value: number): void;

  declare export function pulseIn(pin: number, state: number): number;

  declare export function delay(ms: number): void;

  declare export function delayMicroseconds(us: number): void;

  declare export function millis(): number;

  declare export function micros(): number;

  declare export function wiringPiISR(
    pin: number,
    edgeType: number,
    callback: (delta: number) => void
  ): void;

  declare export function wiringPiISRCancel(pin: number): void;

  declare export var INT_EDGE_FALLING: number;
  declare export var INT_EDGE_RISING: number;
  declare export var INT_EDGE_BOTH: number;
  declare export var INT_EDGE_SETUP: number;
  declare export function piBoardRev(): number;

  declare export interface PiBoardId {
    model: number;
    rev: number;
    mem: number;
    maker: number;
    overvolted: number;
  }
  declare export function piBoardId(): PiBoardId;

  declare export function wpiPinToGpio(pin: number): number;

  declare export function physPinToGpio(pin: number): number;

  declare export function setPadDrive(group: number, value: number): void;

  declare export function getAlt(pin: number): number;

  declare export function digitalWriteByte(byte: number): void;

  declare export function pwmSetMode(mode: number): void;

  declare export function pwmSetRange(range: number): void;

  declare export function pwmSetClock(divisor: number): void;

  declare export function pwmToneWrite(pin: number, frequency: number): void;

  declare export function gpioClockSet(pin: number, frequency: number): void;

  declare export var WPI_MODE_PINS: number;
  declare export var WPI_MODE_PHYS: number;
  declare export var WPI_MODE_GPIO: number;
  declare export var WPI_MODE_GPIO_SYS: number;
  declare export var WPI_MODE_PIFACE: number;
  declare export var WPI_MODE_UNINITIALISED: number;
  declare export var INPUT: number;
  declare export var OUTPUT: number;
  declare export var PWM_OUTPUT: number;
  declare export var GPIO_CLOCK: number;
  declare export var SOFT_PWM_OUTPUT: number;
  declare export var SOFT_TONE_OUTPUT: number;
  declare export var PUD_OFF: number;
  declare export var PUD_DOWN: number;
  declare export var PUD_UP: number;
  declare export var HIGH: number;
  declare export var LOW: number;
  declare export var PWM_MODE_BAL: number;
  declare export var PWM_MODE_MS: number;
  declare export var PI_MODEL_UNKNOWN: number;
  declare export var PI_MODEL_A: number;
  declare export var PI_MODEL_B: number;
  declare export var PI_MODEL_BP: number;
  declare export var PI_MODEL_CM: number;
  declare export var PI_MODEL_AP: number;
  declare export var PI_MODEL_2: number;
  declare export var PI_VERSION_UNKNOWN: number;
  declare export var PI_VERSION_1: number;
  declare export var PI_VERSION_1_1: number;
  declare export var PI_VERSION_1_2: number;
  declare export var PI_VERSION_2: number;
  declare export var PI_MAKER_UNKNOWN: number;
  declare export var PI_MAKER_EGOMAN: number;
  declare export var PI_MAKER_SONY: number;
  declare export var PI_MAKER_QISDA: number;
  declare export var PI_MAKER_MBEST: number;
  declare export var PI_MODEL_NAMES: string[];
  declare export var PI_REVISION_NAMES: string[];
  declare export var PI_MAKER_NAMES: string[];
  declare export var FSEL_INPT: number;
  declare export var FSEL_OUTP: number;
  declare export var FSEL_ALT0: number;
  declare export var FSEL_ALT1: number;
  declare export var FSEL_ALT2: number;
  declare export var FSEL_ALT3: number;
  declare export var FSEL_ALT4: number;
  declare export var FSEL_ALT5: number;
  declare export function wiringPiI2CSetup(devId: number): number;

  declare export function wiringPiI2CSetupInterface(
    device: string,
    devId: number
  ): number;

  declare export function wiringPiI2CClose(fd: number): void;

  declare export function wiringPiI2CRead(fd: number): number;

  declare export function wiringPiI2CReadReg8(fd: number, reg: number): number;

  declare export function wiringPiI2CReadReg16(fd: number, reg: number): number;

  declare export function wiringPiI2CWrite(fd: number, data: number): number;

  declare export function wiringPiI2CWriteReg8(
    fd: number,
    reg: number,
    data: number
  ): number;

  declare export function wiringPiI2CWriteReg16(
    fd: number,
    reg: number,
    data: number
  ): number;

  declare export function wiringPiSPIGetFd(channel: number): number;

  declare export function wiringPiSPIDataRW(
    channel: number,
    data: Buffer
  ): number;

  declare export function wiringPiSPISetup(
    channel: number,
    speed: number
  ): number;

  declare export function wiringPiSPISetupMode(
    channel: number,
    speed: number,
    mode: number
  ): number;

  declare export function wiringPiSPIClose(fd: number): void;

  declare export function serialOpen(device: string, baudrate: number): number;

  declare export function serialClose(fd: number): void;

  declare export function serialFlush(fd: number): void;

  declare export function serialPutChar(fd: number, character: number): void;

  declare export function serialPuts(fd: number, data: string): void;

  declare export function serialPrintf(fd: number, data: string): void;

  declare export function serialDataAvail(fd: number): number;

  declare export function serialGetchar(fd: number): number;

  declare export function shiftIn(
    dPin: number,
    cPin: number,
    order: number
  ): number;

  declare export function shiftOut(
    dPin: number,
    cPin: number,
    order: number,
    value: number
  ): void;

  declare export var LSBFIRST: number;
  declare export var MSBFIRST: number;
  declare export function softPwmCreate(
    pin: number,
    value: number,
    range: number
  ): number;

  declare export function softPwmWrite(pin: number, value: number): void;

  declare export function softPwmStop(pin: number): void;

  declare export function softServoWrite(pin: number, value: number): void;

  declare export function softServoSetup(
    p0: number,
    p1: number,
    p2: number,
    p3: number,
    p4: number,
    p5: number,
    p6: number,
    p7: number
  ): number;

  declare export function softToneCreate(pin: number): number;

  declare export function softToneWrite(pin: number, frequency: number): void;

  declare export function softToneStop(pin: number): void;

  declare export function dac7678Setup(
    pinBase: number,
    i2cAddress: number,
    vrefMode: number
  ): number;

  declare export var DAC7678_VREF_MODE_STATIC_ON: number;
  declare export var DAC7678_VREF_MODE_STATIC_OFF: number;
  declare export var DAC7678_VREF_MODE_FLEXIBLE_ON: number;
  declare export var DAC7678_VREF_MODE_FLEXIBLE_ALWAYS_ON: number;
  declare export var DAC7678_VREF_MODE_FLEXIBLE_ALWAYS_OFF: number;
  declare export function drcSerialSetup(
    pinBase: number,
    numPins: number,
    device: string,
    baudrate: number
  ): number;

  declare export function max31855Setup(
    pinBase: number,
    spiChannel: number
  ): number;

  declare export function max5322Setup(
    pinBase: number,
    spiChannel: number
  ): number;

  declare export function mcp23008Setup(
    pinBase: number,
    i2cAddress: number
  ): number;

  declare export function mpc23016Setup(
    pinBase: number,
    i2cAddress: number
  ): number;

  declare export function mpc23017Setup(
    pinBase: number,
    i2cAddress: number
  ): number;

  declare export function mcp23s08Setup(
    pinBase: number,
    spiChannel: number,
    devId: number
  ): number;

  declare export function mcp23s17Setup(
    pinBase: number,
    spiChannel: number,
    devId: number
  ): number;

  declare export function mcp3002Setup(
    pinBase: number,
    spiChannel: number
  ): number;

  declare export function mcp3004Setup(
    pinBase: number,
    spiChannel: number
  ): number;

  declare export function mcp3422Setup(
    pinBase: number,
    i2cAddress: number,
    sampleRate: number,
    gain: number
  ): number;

  declare export var MCP3422_SR_3_75: number;
  declare export var MCP3422_SR_15: number;
  declare export var MCP3422_SR_60: number;
  declare export var MCP3422_SR_240: number;
  declare export var MCP3422_GAIN_1: number;
  declare export var MCP3422_GAIN_2: number;
  declare export var MCP3422_GAIN_4: number;
  declare export var MCP3422_GAIN_8: number;
  declare export function mcp4802Setup(
    pinBase: number,
    spiChannel: number
  ): number;

  declare export function pca9685Setuo(
    pinBase: number,
    i2cAddress: number,
    frequency: number
  ): number;

  declare export function pcf8574Setup(
    pinBase: number,
    i2cAddress: number
  ): number;

  declare export function pcf8591Setup(
    pinBase: number,
    i2cAddress: number
  ): number;

  declare export function sn3218Setup(pinBase: number): number;

  declare export function sr595Setup(
    pinBase: number,
    numPins: number,
    dataPin: number,
    clockPin: number,
    latchPin: number
  ): number;

  declare export function ds1302setup(
    clockPin: number,
    dataPin: number,
    csPin: number
  ): void;

  declare export function ds1302rtcRead(reg: number): number;

  declare export function ds1302rtcWrite(reg: number, data: number): void;

  declare export function ds1302ramRead(address: number): number;

  declare export function ds1302ramWrite(address: number, data: number): void;

  declare export function ds1302clockRead(): number[];

  declare export function ds1302clockWrite(clcokData: number[]): void;

  declare export function ds1302trickleCharge(
    diodes: number,
    resistors: number
  ): void;

  declare export function gertboardAnalogSetup(pinBase: number): number;

  declare export function lcdInit(
    rows: number,
    cols: number,
    bits: number,
    rs: number,
    strb: number,
    d0: number,
    d1: number,
    d2: number,
    d3: number,
    d4: number,
    d5: number,
    d6: number,
    d7: number
  ): number;

  declare export function lcdHome(fd: number): void;

  declare export function lcdClear(fd: number): void;

  declare export function lcdDisplay(fd: number, state: number): void;

  declare export function lcdCursor(fd: number, state: number): void;

  declare export function lcdCursorBlink(fd: number, state: number): void;

  declare export function lcdSendCommand(fd: number, command: number): void;

  declare export function lcdPosition(fd: number, x: number, y: number): void;

  declare export function lcdCharDef(
    fd: number,
    index: number,
    data: number[]
  ): void;

  declare export function lcdPutchar(fd: number, data: number): void;

  declare export function lcdPuts(fd: number, data: string): void;

  declare export function lcdPrintf(fd: number, data: string): void;

  declare export var MAX_LCDS: number;
  declare export function lcd128x64setup(): number;

  declare export function lcd128x64setOrigin(x: number, y: number): void;

  declare export function lcd128x64setOrientation(orientation: number): void;

  declare export function lcd128x64orientCoordinates(): number[];

  declare export function lcd128x64getScreenSize(): number[];

  declare export function lcd128x64point(
    x: number,
    y: number,
    color: number
  ): void;

  declare export function lcd128x64line(
    x0: number,
    y0: number,
    x1: number,
    y1: number,
    color: number
  ): void;

  declare export function lcd128x64lineTo(
    x: number,
    y: number,
    color: number
  ): void;

  declare export function lcd128x64rectangle(
    x1: number,
    y1: number,
    x2: number,
    y2: number,
    color: number,
    filled: number
  ): void;

  declare export function lcd128x64circle(
    x: number,
    y: number,
    r: number,
    color: number,
    filled: number
  ): void;

  declare export function lcd128x64ellipse(
    cx: number,
    cy: number,
    xRadius: number,
    yRadius: number,
    color: number,
    filled: number
  ): void;

  declare export function lcd128x64putchar(
    x: number,
    y: number,
    c: number,
    bgColor: number,
    fgColor: number
  ): void;

  declare export function lcd128x64puts(
    x: number,
    y: number,
    data: string,
    bgColor: number,
    fgColor: number
  ): void;

  declare export function lcd128x64update(): void;

  declare export function lcd128x64clear(color: number): void;

  declare export function maxDetectRead(pin: number): number[];

  declare export function readRHT03(pin: number): number[];

  declare export function piFaceSetup(pinBase: number): number;

  declare export function piGlowSetup(clear: number): void;

  declare export function piGlow1(
    leg: number,
    ring: number,
    intensity: number
  ): void;

  declare export function piGlowLeg(leg: number, intensity: number): void;

  declare export function piGlowRing(ring: number, intensity: number): void;

  declare export var PIGLOW_RED: number;
  declare export var PIGLOW_YELLOW: number;
  declare export var PIGLOW_ORANGE: number;
  declare export var PIGLOW_GREEN: number;
  declare export var PIGLOW_BLUE: number;
  declare export var PIGLOW_WHITE: number;
  declare export function setupNesJoystick(
    dPin: number,
    cPin: number,
    lPin: number
  ): number;

  declare export function readNesJoystick(joystick: number): number;

  declare export var MAX_NES_JOYSTICKS: number;
  declare export var NES_RIGHT: number;
  declare export var NES_LEFT: number;
  declare export var NES_DOWN: number;
  declare export var NES_UP: number;
  declare export var NES_START: number;
  declare export var NES_SELECT: number;
  declare export var NES_A: number;
  declare export var NES_B: number;
  declare export function tcs34725Setup(
    i2cAddress: number,
    integrationTime: number,
    gain: number
  ): number;

  declare export interface tcs34725RGBC {
    r: number;
    g: number;
    b: number;
    c: number;
  }
  declare export function tcs34725ReadRGBC(id: number): tcs34725RGBC;

  declare export interface tcs34725HSV {
    h: number;
    s: number;
    v: number;
  }
  declare export function tcs34725ReadHSV(id: number): tcs34725HSV;

  declare export function tcs34725GetCorrelatedColorTemperature(
    r: number,
    g: number,
    b: number
  ): void;

  declare export function tcs34725GetIlluminance(
    r: number,
    g: number,
    b: number
  ): void;

  declare export function tcs34725SetInterrupt(id: number, aien: number): void;

  declare export function tcs34725ClearInterrupt(id: number): void;

  declare export function tcs34725SetInterruptLimits(
    id: number,
    low: number,
    high: number
  ): void;

  declare export function tcs34725Enable(id: number): void;

  declare export function tcs34725Disable(id: number): void;

  declare export var TCS34725_ATIME_2_4MS: number;
  declare export var TCS34725_ATIME_24MS: number;
  declare export var TCS34725_ATIME_50MS: number;
  declare export var TCS34725_ATIME_101MS: number;
  declare export var TCS34725_ATIME_154MS: number;
  declare export var TCS34725_ATIME_700MS: number;
  declare export var TCS34725_GAIN_1: number;
  declare export var TCS34725_GAIN_4: number;
  declare export var TCS34725_GAIN_16: number;
  declare export var TCS34725_GAIN_60: number;
  declare export var TCS34725_MAX_TCS34725: number;
  declare export var VERSION: string;
}
