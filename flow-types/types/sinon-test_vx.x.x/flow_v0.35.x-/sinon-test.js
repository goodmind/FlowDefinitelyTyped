declare module 'sinon-test' {
        import typeof * as Sinon from 'sinon';

	declare interface Configuration {
injectIntoThis?: boolean,
injectInto?: any,
properties?: Array<"spy"
| "stub"
| "mock"
| "clock"
| "server"
| "requests">,
useFakeTimers?: boolean,
useFakeServer?: boolean
} 
	declare interface sinonTest {
configureTest(sinon: Sinon.SinonStatic, config?: Configuration): any,
configureTestCase(sinon: Sinon.SinonStatic, config?: Configuration): any
} 
	declare var sinonTest: sinonTest;
	declare module.exports: typeof sinonTest

    }
