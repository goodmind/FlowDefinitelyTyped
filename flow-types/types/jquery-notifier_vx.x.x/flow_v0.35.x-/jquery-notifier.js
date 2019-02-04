declare module 'jquery-notifier' {
        
      declare var npm$namespace$notifier: {
        show: typeof notifier$show,
hide: typeof notifier$hide,
        
      }

/**
 * notifier.show(title, msg, type, icon, timeout);
 * {title} title
 * {msg} msg
 *   {type} type
 * {icon} icon
 * {timeout} timeout
 */
declare function notifier$show(
title: string,
msg: string,
type: string,
icon: string,
timeout?: number): string | number


declare function notifier$hide(notificationId: string | number): boolean

    }
