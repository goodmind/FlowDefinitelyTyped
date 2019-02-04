declare module 'qrcode.react' {
        declare interface qrcode$QRCodeProps {
value: string,
size?: number,
bgColor?: string,
fgColor?: string,
level?: "L" | "M" | "Q" | "H",
renderAs?: "svg" | "canvas"
} 

declare type qrcode$QRCode = React.ComponentClass<qrcode$QRCodeProps>;
	declare var qrcode: qrcode$qrcode$QRCode;
	declare module.exports: typeof qrcode

    }
