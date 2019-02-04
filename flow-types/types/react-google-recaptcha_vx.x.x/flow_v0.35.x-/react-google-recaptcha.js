declare module 'react-google-recaptcha' {
        import typeof * as React from 'react';

	declare export default typeof ReCAPTCHA

	declare class ReCAPTCHA mixins React.Component<ReCAPTCHAProps> {

/**
 * Resets the reCAPTCHA widget
 */
reset(): void;

/**
 * Programatically invoke the reCAPTCHA check. Used if the invisible reCAPTCHA is on a div instead of a button
 */
execute(): void;

/**
 * Gets the response for the reCAPTCHA widget.
 * @return the response of the reCAPTCHA widget.
 */
getValue(): string | null;

/**
 * Gets the widgetId of reCAPTCHA widget
 * @return widgetId | null
 */
getWidgetId(): number | null
}
	declare type Theme = "light" | "dark";
	declare type Type = "image" | "audio";
	declare type Size = "compact" | "normal" | "invisible";
	declare type Badge = "bottomright" | "bottomleft" | "inline";
	declare export interface ReCAPTCHAProps {

/**
 * The API client key
 */
sitekey: string,

/**
 * The function to be called when the user successfully completes the normal or compat captcha.
 * It will also be called with null, when captcha expires
 * @param token string or null
 */
onChange?: (token: string | null) => void,

/**
 * Optional light or dark theme of the widget
 * @default "light"
 */
theme?: Theme,

/**
 * Optional image or audio The type of initial captcha
 * @default "image"
 */
type?: Type,

/**
 * Optional the tabindex of the element
 * @default 0
 */
tabindex?: number,

/**
 * Optional callback, called when a challenge expires and has to be redone by the user.
 */
onExpired?: () => void,

/**
 * Optional set the stoken parameter, which allows the captcha to be used from different domains,
 * @see reCAPTCHA secure-token
 */
stoken?: string,

/**
 * Optional compact, normal or invisible. This allows you to change the size or do an invisible captcha
 */
size?: Size,

/**
 * Optional. The badge location for g-recaptcha with size of "invisible".
 * @default "bottomright"
 */
badge?: Badge
} 
    }
