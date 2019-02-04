declare module 'react-native-huawei-protected-apps' {
        declare export interface HuaweiProtectedAppsConfig {
title: string,
text: string,
doNotShowAgainText: string,
positiveText: string,
negativeText: string
} 
	declare var HuaweiProtectedApps: {
AlertIfHuaweiDevice(config: HuaweiProtectedAppsConfig): void
};
	declare export default typeof HuaweiProtectedApps

    }
