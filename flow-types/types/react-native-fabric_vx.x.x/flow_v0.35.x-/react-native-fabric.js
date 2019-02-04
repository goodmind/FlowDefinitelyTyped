declare module 'react-native-fabric' {
        declare export interface CustomAttributes {
[key: string]: any
} 
	
      declare var npm$namespace$Answers: {
        logCustom: typeof Answers$logCustom,
logInvite: typeof Answers$logInvite,
logLevelStart: typeof Answers$logLevelStart,
logLevelEnd: typeof Answers$logLevelEnd,
logLogin: typeof Answers$logLogin,
logSearch: typeof Answers$logSearch,
logSignUp: typeof Answers$logSignUp,
logShare: typeof Answers$logShare,
logStartCheckout: typeof Answers$logStartCheckout,
logAddToCart: typeof Answers$logAddToCart,
logPurchase: typeof Answers$logPurchase,
logContentView: typeof Answers$logContentView,
logRating: typeof Answers$logRating,
        
      }
declare function Answers$logCustom(eventName: string, customAttributes?: CustomAttributes): void


declare function Answers$logInvite(method: string, customAttributes?: CustomAttributes): void


declare function Answers$logLevelStart(levelName: string, customAttributes?: CustomAttributes): void


declare function Answers$logLevelEnd(levelName: string, customAttributes?: CustomAttributes): void


declare function Answers$logLogin(method: string, success: boolean, customAttributes?: CustomAttributes): void


declare function Answers$logSearch(query: string, customAttributes?: CustomAttributes): void


declare function Answers$logSignUp(method: string, success: boolean, customAttributes?: CustomAttributes): void


declare function Answers$logShare(
method: string,
contentName: string,
contentType: string,
contentId: string,
customAttributes?: CustomAttributes): void


declare function Answers$logStartCheckout(
totalPrice: number,
count: number,
currency: string,
customAttributes?: CustomAttributes): void


declare function Answers$logAddToCart(
itemPrice: number,
currency: string,
itemName: string,
itemType: string,
itemId: string,
customAttributes?: CustomAttributes): void


declare function Answers$logPurchase(
itemPrice: number,
currency: string,
success: boolean,
itemName: string,
itemType: string,
itemId: string,
customAttributes?: CustomAttributes): void


declare function Answers$logContentView(
contentName: string,
contentType: string,
contentId: string,
customAttributes?: CustomAttributes): void


declare function Answers$logRating(
rating: number,
contentId: string,
contentType: string,
contentName: string,
customAttributes?: CustomAttributes): void

	
      declare var npm$namespace$Crashlytics: {
        crash: typeof Crashlytics$crash,
throwException: typeof Crashlytics$throwException,
recordError: typeof Crashlytics$recordError,
logException: typeof Crashlytics$logException,
log: typeof Crashlytics$log,
setUserEmail: typeof Crashlytics$setUserEmail,
setUserIdentifier: typeof Crashlytics$setUserIdentifier,
setUserName: typeof Crashlytics$setUserName,
setBool: typeof Crashlytics$setBool,
setNumber: typeof Crashlytics$setNumber,
setString: typeof Crashlytics$setString,
recordCustomExceptionName: typeof Crashlytics$recordCustomExceptionName,
        
      }
declare function Crashlytics$crash(): void


declare function Crashlytics$throwException(): void


declare function Crashlytics$recordError(error: any): void


declare function Crashlytics$logException(value: string): void


declare function Crashlytics$log(message: string): void


declare function Crashlytics$setUserEmail(email: string): void


declare function Crashlytics$setUserIdentifier(id: string): void


declare function Crashlytics$setUserName(userName: string): void


declare function Crashlytics$setBool(key: string, value: boolean): void


declare function Crashlytics$setNumber(key: string, value: number): void


declare function Crashlytics$setString(key: string, value: string): void


declare function Crashlytics$recordCustomExceptionName(name: string, reason: string, stack?: any[]): void

    }
