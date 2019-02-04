declare module 'inversify-devtools' {
        import typeof * as inversify from 'inversify';

	declare type ConnectKernel = {
(kernel: inversify.interfaces.Kernel): void
} & Function

	declare export default function render(container: string): ConnectKernel

    }
