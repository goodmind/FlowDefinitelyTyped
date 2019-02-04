declare module 'pigpio-dht' {
        declare module.exports: typeof dht

	
/**
 * Returns a new DHT object for accessing a DHT11 or DHT22/AM2302 via GPIO.
 * @param gpio an unsigned integer specifying the GPIO number
 * @param type 11 to initialize for reading a DHT11, 22 for DHT22/AM2302
 */
declare function dht(gpio: number, type: number): dht$dht$Dht

	declare type dht$Dht = {

/**
 * Starts reading the sensor value. Emits the 'start' event before starting,
 * the 'end' event on end whether or not an error occurred, the 'result'
 * event with a DhtResult on success, and the 'badChecksum' event on a
 * receive failure.
 * @returns false if a read is already underway, true if a new read was started.
 */
read(): boolean
} & NodeJS.EventEmitter



/**
 * Result from a successful sensor read.
 */
declare interface dht$DhtResult {

/**
 * The temperature value in degrees Celsius.
 */
temperature: number,

/**
 * The humidity value in percentage points.
 */
humidity: number
} 
    }
