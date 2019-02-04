declare module 'johnny-five' {
        declare export interface AccelerometerOption {
controller: string
} 
	declare export interface AccelerometerGeneralOption {
controller?: string
} 
	declare export type AccelerometerAnalogOption = {
pins: Array<string>,
sensitivity?: number,
aref?: number,
zeroV?: number | Array<number>,
autoCalibrate?: boolean
} & AccelerometerGeneralOption

	declare export type AccelerometerMPU6050Option = {
sensitivity?: number
} & AccelerometerGeneralOption

	declare export type AccelerometerMMA7361Option = {
sleepPin?: number | string
} & AccelerometerGeneralOption

	declare export class Accelerometer  {
constructor(option: AccelerometerGeneralOption | AccelerometerAnalogOption | AccelerometerMPU6050Option | AccelerometerMMA7361Option): this;
id: string;
zeroV: number;
pins: Array<string>;
pitch: number;
roll: number;
x: number;
y: number;
z: number;
acceleration: number;
inclination: number;
orientation: number;
on(event: string, cb: () => void): this;
on(event: "change", cb: () => void): this;
on(event: "data", cb: (freq: any) => void): this;
hasAxis(name: string): void;
enable(): void;
disable(): void
}
	declare export interface AltimeterOption {
controller: string,
address?: number,
freq?: number,
elevation?: number
} 
	declare export class Altimeter  {
constructor(option: AltimeterOption): this;
id: string;
feet: number;
meters: number;
on(event: string, cb: () => void): this;
on(event: "change", cb: () => void): this;
on(event: "data", cb: (data: any) => void): this
}
	declare export class Animation  {
constructor(option: Servo | Array<Servo>): this;
target: number;
duration: number;
cuePoints: Array<number>;
keyFrames: number;
easing: string;
loop: boolean;
loopback: number;
metronomic: boolean;
progress: number;
currentSpeed: number;
fps: number;
enqueue(segment: any): void;
play(): void;
pause(): void;
stop(): void;
next(): void;
speed(speed: Array<number>): void
}
	declare export interface BoardOption {
id?: number | string,
port?: string | any,
repl?: boolean,
debug?: boolean,
timeout?: number,
io?: any
} 
	declare export class Board  {
constructor(option?: BoardOption): this;
io: any;
id: string;
repl: Repl;
isReady: boolean;
pins: Array<Pin>;
port: string;
on(event: string, cb: () => void): this;
on(event: "ready", cb: () => void): this;
on(event: "connect", cb: () => void): this;
pinMode(pin: number, mode: number): void;
analogWrite(pin: number, value: number): void;
analogRead(pin: number, cb: (item: number) => void): void;
digitalWrite(pin: number, value: number): void;
digitalRead(pin: number, cb: (item: number) => void): void;
servoWrite(pin: number, angle: number): void;
shiftOut(dataPin: Pin, clockPin: Pin, isBigEndian: boolean, value: number): void;
wait(ms: number, cb: () => void): void;
loop(ms: number, cb: () => void): void;
samplingInterval(ms: number): void
}
	declare export interface ButtonOption {
pin: number | string,
invert?: boolean,
isPullup?: boolean,
isPulldown?: boolean,
holdtime?: number
} 
	declare export class Button  {
constructor(pin: number | string | ButtonOption): this;
id: string;
pin: number | string;
downValue: number;
upValue: number;
holdtime: number;
on(event: string, cb: () => void): this;
on(event: "hold", cb: (holdTime: number) => void): this;
on(event: "down", cb: () => void): this;
on(event: "press", cb: () => void): this;
on(event: "up", cb: () => void): this;
on(event: "release", cb: () => void): this
}
	declare export interface CompassOption {
controller: string,
gauss?: number
} 
	declare export class Compass  {
constructor(option: CompassOption): this;
heading: number;
bearing: {
name: string,
abbr: string,
low: number,
high: number,
heading: number
};
on(event: string, cb: () => void): this;
on(event: "change", cb: () => void): this;
on(event: "data", cb: (data: any) => void): this
}
	declare export interface ESCOption {
pin: number | string,
range?: Array<number>,
startAt?: number,
controller?: string,
device?: string,
neutral?: number
} 
	declare export class ESC  {
constructor(option: number | string | ESCOption): this;
id: string;
pin: number | string;
range: Array<number>;
value: number;
speed(value: number): void;
min(): void;
max(): void;
stop(): void
}
	declare export class Fn  {
static constrain(value: number, lower: number, upper: number): number;
static inRange(value: number, lower: number, upper: number): boolean;
static map(
value: number,
fromLow: number,
fromHigh: number,
toLow: number,
toHigh: number): number;
static fmap(
value: number,
fromLow: number,
fromHigh: number,
toLow: number,
toHigh: number): number;
static range(lower: number, upper: number, tick: number): Array<number>;
static scale(
value: number,
fromLow: number,
fromHigh: number,
toLow: number,
toHigh: number): number;
static fscale(
value: number,
fromLow: number,
fromHigh: number,
toLow: number,
toHigh: number): number;
static sum(values: Array<number>): number;
static toFixed(number: number, digits: number): number;
static uid(): string;
static bitSize(n: number): number;
static bitValue(bit: number): number;
static int16(msb: number, lsb: number): number;
static uint16(msb: number, lsb: number): number;
static int24(b16: number, b8: number, b0: number): number;
static uint24(b16: number, b8: number, b0: number): number;
static int32(b24: number, b16: number, b8: number, b0: number): number;
static uint32(b24: number, b16: number, b8: number, b0: number): number
}
	declare export interface GyroGeneralOption {
controller?: string
} 
	declare export type GyroAnalogOption = {
pins: Array<string>,
sensitivity: number,
resolution?: number
} & GyroGeneralOption

	declare export type GyroMPU6050Option = {
sensitivity: number
} & GyroGeneralOption

	declare export class Gyro  {
constructor(option: GyroGeneralOption | GyroAnalogOption | GyroMPU6050Option): this;
id: string;
pins: Array<string>;
isCalibrated: boolean;
pitch: any;
roll: any;
yaw: any;
rate: any;
x: number;
y: number;
z: number;
on(event: string, cb: () => void): this;
on(event: "change", cb: () => void): this;
on(event: "data", cb: (data: any) => void): this;
recalibrate(): void
}
	declare export interface HygrometerOption {
controller?: string,
freq?: number
} 
	declare export class Hygrometer  {
constructor(option: HygrometerOption): this;
id: string;
relativeHumidity: number;
RH: number;
on(event: string, cb: () => void): this;
on(event: "change", cb: () => void): this;
on(event: "data", cb: (data: any) => void): this
}
	declare export interface IMUGeneralOption {
controller?: string,
freq?: number
} 
	declare export type IMUMPU6050Option = {
address: number
} & IMUGeneralOption

	declare export class IMU  {
constructor(option: IMUGeneralOption | IMUMPU6050Option): this;
accelerometer: Accelerometer;
compass: Compass;
gyro: Gyro;
orientation: Orientiation;
thermometer: Thermometer;
on(event: string, cb: () => void): this;
on(event: "change", cb: () => void): this;
on(event: "data", cb: (data: any) => void): this;
on(event: "calibrated", cb: () => void): this
}
	declare module 'IR' {
        declare export interface ArrayOption {
pins: Array<number> | Array<string>,
emitter: number | string,
freq?: number
} 
	declare export interface LoadCalibrationOption {
min: Array<number>,
max: Array<number>
} 
	declare module 'Reflect' {
        declare export class Array  {
constructor(option: ArrayOption): this;
enable(): void;
disable(): void;
calibrate(): void;
calibrateUntil(predicate: () => void): void;
loadCalibration(option: LoadCalibrationOption): void;
on(event: string, cb: () => void): this;
on(event: "data", cb: (data: any) => void): this;
on(event: "calibratedData", cb: (data: any) => void): this;
on(event: "line", cb: (data: any) => void): this
}
    }

    }

	declare export interface JoystickOption {
pins: Array<string>,
invert?: boolean,
invertX?: boolean,
invertY?: boolean
} 
	declare export class Joystick  {
constructor(option: JoystickOption): this;
id: string;
x: number;
y: number;
axis: Array<number>;
raw: Array<number>;
on(event: string, cb: () => void): this;
on(event: "data", cb: (data: any) => void): this;
on(event: "change", cb: () => void): this;
on(event: "axismove", cb: (error: Error, date: Date) => void): this
}
	declare export interface LCDGeneralOption {
rows?: number,
cols?: number
} 
	declare export type LCDI2COption = {
controller: string,
backlight?: number
} & LCDGeneralOption

	declare export type LCDParallelOption = {
pins: Array<any>,
backlight?: number
} & LCDGeneralOption

	declare export class LCD  {
constructor(option: LCDGeneralOption | LCDI2COption | LCDParallelOption): this;
id: string;
rows: number;
cols: number;
print(message: string): this;
useChar(char: string): this;
clear(): this;
cursor(row: number, col: number): this;
home(): this;
on(): this;
off(): this;
display(): this;
noDisplay(): this;
blink(): this;
noBlink(): this;
autoscroll(): this;
noAutoscroll(): this;
bgColor(color: any): this;
noBacklight(): this;
backlight(): this
}
	declare export interface LedOption {
pin: number,
type?: string,
controller?: string,
address?: number,
isAnode?: boolean
} 
	declare export class Led  {
constructor(option: number | LedOption): this;
id: string;
pin: number;
on(): void;
off(): void;
toggle(): void;
strobe(ms: number): void;
blink(): void;
blink(ms: number): void;
brightness(val: number): void;
fade(brightness: number, ms: number): void;
fadeIn(ms: number): void;
fadeOut(ms: number): void;
pulse(ms: number): void;
stop(ms: number): void
}
	declare module 'Led' {
        declare export interface DigitsOption {
pins: any,
devices?: number,
controller?: string
} 
	declare export class Digits  {
constructor(option: DigitsOption): this;
isMatrix: boolean;
devices: number;
digitOrder: number;
on(): void;
on(index: number): void;
off(): void;
off(index: number): void;
clear(): void;
clear(index: number): void;
brightness(value: number): void;
brightness(index: number, value: number): void;
draw(position: number, character: number): void;
draw(index: number, position: number, character: number): void
}
	declare export interface MatrixOption {
pins: any,
devices?: number
} 
	declare export interface MatrixIC2Option {
controller: string,
addresses?: Array<any>,
isBicolor?: boolean,
dims?: any,
rotation?: number
} 
	declare export class Matrix  {
constructor(option: MatrixOption | MatrixIC2Option): this;
isMatrix: boolean;
devices: number;
on(): void;
on(index: number): void;
off(): void;
off(index: number): void;
clear(): void;
clear(index: number): void;
brightness(value: number): void;
brightness(index: number, value: number): void;
led(row: number, col: number, state: any): void;
led(index: number, row: number, col: number, state: any): void;
row(row: number, val: number): void;
row(index: number, row: number, val: number): void;
column(row: number, val: number): void;
column(index: number, row: number, val: number): void;
draw(position: number, character: number): void;
draw(index: number, position: number, character: number): void
}
	declare export interface RGBOption {
pins: Array<number>,
isAnode?: boolean,
controller?: string
} 
	declare export class RGB  {
constructor(option: RGBOption): this;
red: Led;
green: Led;
blue: Led;
isAnode: boolean;
on(): void;
off(): void;
color(value: string): void;
toggle(): void;
strobe(ms: number): void;
intensity(value: number): void;
fadeIn(ms: number): void;
fadeOut(ms: number): void;
pulse(ms: number): void;
stop(ms: number): void
}
    }

	declare export interface MotionOption {
pin: number | string
} 
	declare export class Motion  {
constructor(option: number | MotionOption): this;
on(event: string, cb: () => void): this;
on(event: "data", cb: (data: any) => void): this;
on(event: "motionstart", cb: () => void): this;
on(event: "motionend", cb: () => void): this;
on(event: "calibrated", cb: () => void): this
}
	declare export interface MotorPins {
pwm: number,
dir: number,
cdir?: number,
brake?: number
} 
	declare export interface MotorOption {
pins: MotorPins,
current?: SensorOption,
invertPWM?: boolean,
address?: number,
controller?: string,
register?: any,
bits?: any
} 
	declare export class Motor  {
constructor(option: number[] | MotorOption): this;
isOn: boolean;
forward(speed: number): void;
fwd(speed: number): void;
reverse(speed: number): void;
rev(speed: number): void;
start(speed?: number): void;
stop(): void;
brake(): void;
release(): void
}
	declare export class Motors  {
constructor(option: number[] | MotorOption[]): this;
isOn: boolean;
forward(speed: number): void;
fwd(speed: number): void;
reverse(speed: number): void;
rev(speed: number): void;
start(speed?: number): void;
stop(): void;
brake(): void;
release(): void
}
	declare export interface OrientiationOption {
controller?: string,
freq?: number
} 
	declare export class Orientiation  {
constructor(option: OrientiationOption): this;
euler: any;
quarternion: any;
on(event: string, cb: () => void): this;
on(event: "change", cb: () => void): this;
on(event: "data", cb: (data: any) => void): this;
on(event: "calibrated", cb: () => void): this
}
	declare export interface PiezoOption {
pin: number
} 
	declare export class Piezo  {
constructor(option: number | PiezoOption): this;
id: string;
pin: number;
mode: number;
isPlaying: boolean;
frequency(frequency: number, duration: number): void;
play(tune: any, cb?: () => void): void;
tone(frequency: number, duration: number): void;
noTone(): void;
off(): void
}
	declare export interface PinOption {
id?: number | string,
pin: number | string,
type?: string
} 
	declare export interface PinState {
supportedModes: Array<number>,
mode: number,
value: number,
report: number,
analogChannel: number
} 
	declare export class Pin  {
constructor(option: number | string | PinOption): this;
id: number | string;
pin: number | string;
type: "digital" | "analog";
value: number;
mode: number;
static write(pin: number, value: number): void;
static read(pin: number, cb: (error: Error, data: number) => void): void;
query(cb: (pin: PinState) => void): void;
high(): void;
low(): void;
write(value: number): void;
read(cb: (error: Error, value: number) => void): void;
on(event: string, cb: () => void): this;
on(event: "high", cb: () => void): this;
on(event: "low", cb: () => void): this;
on(event: "data", cb: (data: any) => void): this
}
	declare export interface PingOption {
pin: number | string,
freq?: number,
pulse?: number
} 
	declare export class Ping  {
constructor(option: number | PingOption): this
}
	declare export interface ProximityOption {
pin: number | string,
controller: string
} 
	declare export interface ProximityData {
cm: number,
in: number
} 
	declare export class Proximity  {
constructor(option: number | ProximityOption): this;
on(event: string, cb: () => void): this;
on(event: "data", cb: (data: ProximityData) => void): this;
on(event: "change", cb: () => void): this
}
	declare export interface RelayOption {
pin: number | string,
type?: string
} 
	declare export class Relay  {
constructor(option: number | RelayOption): this;
id: string;
pin: number | string;
isOn: boolean;
type: string;
open(): void;
close(): void;
toggle(): void
}
	declare export interface Repl {
inject(object: any): void
} 
	declare export interface SensorOption {
pin: number | string,
freq?: boolean,
threshold?: number,
enabled?: boolean
} 
	declare export class Sensor  {
constructor(option: number | string | SensorOption): this;
id: string;
pin: number | string;
threshold: number;
boolean: boolean;
raw: number;
analog: number;
constrained: number;
value: number;
scaleTo(low: number, high: number): number;
fscaleTo(low: number, high: number): number;
scaleTo(range: Array<number>): number;
fscaleTo(range: Array<number>): number;
booleanAt(barrier: number): boolean;
within(range: Array<number>, cb: () => void): void;
on(event: string, cb: () => void): this;
on(event: "change", cb: () => void): this;
on(event: "data", cb: (data: any) => void): this
}
	declare export interface ServoGeneralOption {
pin: number | string,
range?: Array<number>,
type?: string,
startAt?: number,
isInverted?: boolean,
center?: boolean,
controller?: string
} 
	declare export type ServoPCA9685Option = {
address?: number
} & ServoGeneralOption

	declare export interface ServoSweepOpts {
range: Array<number>,
interval?: number,
step?: number
} 
	declare export class Servo  {
constructor(option: number | string | ServoGeneralOption): this;
id: string;
pin: number | string;
range: Array<number>;
invert: boolean;
history: Array<any>;
interval: number;
isMoving: boolean;
last: any;
position: number;
value: number;
startAt: number;
to(degrees: number, ms?: number, rage?: number): void;
min(): void;
max(): void;
center(): void;
home(): void;
sweep(): void;
sweep(range: Array<number>): void;
sweep(opt: ServoSweepOpts): void;
stop(): void;
cw(speed: number): void;
ccw(speed: number): void;
on(event: string, cb: () => void): this;
on(event: "move:complete", cb: () => void): this
}
	declare export interface ShiftRegisterOption {
pins: any,
isAnode?: boolean
} 
	declare export class ShiftRegister  {
constructor(option: ShiftRegisterOption): this;
id: string;
pins: any;
value: any;
isAnode: boolean;
clear(): void;
display(number: number | string): void;
reset(): void;
send(...value: Array<number>): void
}
	declare export interface SonarOption {
pin: number | string,
device: string,
freq?: number,
threshold?: number
} 
	declare export class Sonar  {
constructor(option: number | string | SonarOption): this;
within(range: Array<number>, cb: () => void): void;
within(range: Array<number>, unit: string, cb: () => void): void;
on(event: string, cb: () => void): this;
on(event: "change", cb: () => void): this;
on(event: "data", cb: (data: any) => void): this
}
	declare export interface StepperOption {
pins: any,
stepsPerRev: number,
type: number,
rpm?: number,
direction?: number
} 
	declare module 'Stepper' {
        declare export class TYPE  {
static DRIVER: number;
static TWO_WIRE: number;
static FOUR_WIRE: number
}
    }

	declare export class Stepper  {
constructor(option: number | string | StepperOption): this;
step(stepsOrOpts: any, cb: () => void): void;
rpm(): Stepper;
rpm(value: number): Stepper;
speed(): Stepper;
speed(value: number): Stepper;
direction(): Stepper;
direction(value: number): Stepper;
accel(): Stepper;
accel(value: number): Stepper;
decel(): Stepper;
decel(value: number): Stepper;
cw(): Stepper;
ccw(): Stepper;
within(range: Array<number>, cb: () => void): void;
within(range: Array<number>, unit: string, cb: () => void): void;
on(event: string, cb: () => void): this;
on(event: "change", cb: () => void): this;
on(event: "data", cb: (data: any) => void): this
}
	declare export interface SwitchOption {
pin: number | string,
type?: "NO" | "NC"
} 
	declare export class Switch  {
constructor(option: number | string | SwitchOption): this;
id: string;
pin: number | string;
isClosed: boolean;
isOpen: boolean;
on(event: "open", cb: () => void): this;
on(event: "close", cb: () => void): this
}
	declare export interface ThermometerOption {
controller?: string,
pin: string | number,
toCelsius?: (val: number) => number,
freq?: number
} 
	declare export class Thermometer  {
constructor(option: ThermometerOption): this;
id: string;
pin: number | string;
celsius: number;
fahrenheit: number;
kelvin: number;
C: number;
F: number;
K: number;
on(event: string, cb: () => void): this;
on(event: "data", cb: (data: any) => void): this;
on(event: "change", cb: () => void): this
}
    }
