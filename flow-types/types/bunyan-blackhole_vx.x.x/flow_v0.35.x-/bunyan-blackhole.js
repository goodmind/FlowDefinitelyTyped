declare module 'bunyan-blackhole' {
        import typeof * as Logger from 'bunyan';

	
/**
 * Constructor.
 * @param name name of the blackhole Logger
 * @return A bunyan logger .
 */
declare function bunyanBlackHole(name: string): Logger

	declare module.exports: typeof bunyanBlackHole

    }
