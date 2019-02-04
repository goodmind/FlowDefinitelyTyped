declare module 'angular-growl-v2' {
        import typeof * as angular from 'angular';

	declare module 'angular' {
        
/**
 * Global Time-To-Leave configuration.
 */
declare interface growl$IGrowlTTLConfig {
success?: number,
error?: number,
warning?: number,
info?: number
} 


/**
 * Custom configuration used in single message call.
 */
declare interface growl$IGrowlMessageConfig {
title?: string,
ttl?: number,
disableCountDown?: boolean,
disableIcons?: boolean,
disableCloseButton?: boolean,
onclose?: Function,
onopen?: Function,
position?: string,
referenceId?: number,
translateMessage?: boolean,
variables?: {
[variable: string]: any
}
} 


/**
 * Growl message with configuration.
 */
declare type growl$IGrowlMessage = {
text: string,

/**
 * Destroy the message.
 */
destroy(): void,

/**
 * Update the message body.
 * @param newText new message body
 */
setText(newText: string): void
} & growl$IGrowlMessageConfig



/**
 * Growl service provider.
 */
declare type growl$IGrowlProvider = {

/**
 * Pre-defined server error interceptor.
 */
serverMessagesInterceptor: (string | IHttpInterceptorFactory)[],

/**
 * Set default TTL settings.
 * @param ttl configuration of TTL for different type of message
 */
globalTimeToLive(ttl: growl$IGrowlTTLConfig): growl$IGrowlProvider,

/**
 * Set default TTL settings.
 * @param ttl ttl in milliseconds
 */
globalTimeToLive(ttl: number): growl$IGrowlProvider,

/**
 * Set default setting for disabling close button.
 * @param disableCloseButton
 */
globalDisableCloseButton(disableCloseButton: boolean): growl$IGrowlProvider,

/**
 * Set default setting for disabling icons.
 * @param disableIcons
 */
globalDisableIcons(disableIcons: boolean): growl$IGrowlProvider,

/**
 * Set reversing order of displaying new messages.
 * @param reverseOrder
 */
globalReversedOrder(reverseOrder: boolean): growl$IGrowlProvider,

/**
 * Set default setting for displaying message disappear countdown.
 * @param disableCountDown
 */
globalDisableCountDown(disableCountDown: boolean): growl$IGrowlProvider,

/**
 * Set default allowance for inline messages.
 * @param inline
 */
globalInlineMessages(inline: boolean): growl$IGrowlProvider,

/**
 * Set default message position.
 * @param position
 */
globalPosition(position: string): growl$IGrowlProvider,

/**
 * Enable/disable displaying only unique messages.
 * @param onlyUniqueMessages
 */
onlyUniqueMessages(onlyUniqueMessages: boolean): growl$IGrowlProvider,

/**
 * Set key where messages are stored (for http interceptor).
 * @param messageVariableKey
 */
messagesKey(messageKey: string): growl$IGrowlProvider,

/**
 * Set key where message text is stored (for http interceptor).
 * @param messageVariableKey
 */
messageTextKey(messageTextKey: string): growl$IGrowlProvider,

/**
 * Set key where title of message is stored (for http interceptor).
 * @param messageVariableKey
 */
messageTitleKey(messageTitleKey: string): growl$IGrowlProvider,

/**
 * Set key where severity of message is stored (for http interceptor).
 * @param messageVariableKey
 */
messageSeverityKey(messageSeverityKey: string): growl$IGrowlProvider,

/**
 * Set key where variables for message are stored (for http interceptor).
 * @param messageVariableKey
 */
messageVariableKey(messageVariableKey: string): growl$IGrowlProvider
} & angular.IServiceProvider



/**
 * Growl service.
 */
declare interface growl$IGrowlService {

/**
 * Show warning message.
 * @param message text to display (or code for angular-translate)
 */
warning(message: string): growl$IGrowlMessage,

/**
 * Show warning message.
 * @param message text to display (or code for angular-translate)
 * @param config additional message configuration
 */
warning(message: string, config: growl$IGrowlMessageConfig): growl$IGrowlMessage,

/**
 * Show error message.
 * @param message text to display (or code for angular-translate)
 */
error(message: string): growl$IGrowlMessage,

/**
 * Show error message.
 * @param message text to display (or code for angular-translate)
 * @param config additional message configuration
 */
error(message: string, config: growl$IGrowlMessageConfig): growl$IGrowlMessage,

/**
 * Show information message.
 * @param message text to display (or code for angular-translate)
 */
info(message: string): growl$IGrowlMessage,

/**
 * Show information message.
 * @param message text to display (or code for angular-translate)
 * @param config additional message configuration
 */
info(message: string, config: growl$IGrowlMessageConfig): growl$IGrowlMessage,

/**
 * Show success message.
 * @param message text to display (or code for angular-translate)
 * @param config additional message configuration
 */
success(message: string): growl$IGrowlMessage,

/**
 * Show success message.
 * @param message text to display (or code for angular-translate)
 */
success(message: string, config: growl$IGrowlMessageConfig): growl$IGrowlMessage,

/**
 * Show message (generic).
 * @param message text to display (or code for angular-translate)
 */
general(message: string): growl$IGrowlMessage,

/**
 * Show message (generic).
 * @param message text to display (or code for angular-translate)
 * @param config additional message configuration
 */
general(message: string, config: growl$IGrowlMessageConfig): growl$IGrowlMessage,

/**
 * Show message (generic).
 * @param message text to display (or code for angular-translate)
 * @param config additional message configuration
 * @param severity message severity (error, warning, success, info).
 */
general(
message: string,
config: growl$IGrowlMessageConfig,
severity: string): growl$IGrowlMessage,

/**
 * Get current setting for displaying only unique messages.
 */
onlyUnique(): boolean,

/**
 * Get current setting for reversing messages order.
 */
reverseOrder(): boolean,

/**
 * Get current allowance for inline messages.
 */
inlineMessages(): boolean,

/**
 * Get current messages position.
 */
position(): string
} 


/**
 * GrowlMessages service.
 */
declare interface growl$IGrowlMessagesService {

/**
 * Initialize a directive
 * We look at the preloaded directive and use this else we
 * create a new blank object
 * @param referenceId
 * @param limitMessages
 */
initDirective(referenceId: number, limitMessages: number): angular.IDirective,

/**
 * Get current messages
 */
getAllMessages(referenceId?: number): growl$IGrowlMessage[],

/**
 * Destroy all messages
 */
destroyAllMessages(referenceId?: number): void,

/**
 * Add a message
 */
addMessage(message: growl$IGrowlMessage): growl$IGrowlMessage,

/**
 * Delete a message
 */
deleteMessage(message: growl$IGrowlMessage): void
} 
    }

    }
