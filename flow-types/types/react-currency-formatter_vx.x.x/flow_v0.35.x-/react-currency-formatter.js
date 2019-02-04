declare module 'react-currency-formatter' {
        import typeof * as React from 'react';

	declare interface CurrencyFormatterProps {
quantity: number,
currency?: string,
locale?: string,
pattern?: string,
decimal?: string,
group?: string
} 
	declare var reactCurrencyFormatter: React.ComponentClass<CurrencyFormatterProps>;
	declare module.exports: typeof reactCurrencyFormatter

    }
