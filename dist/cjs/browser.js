"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const Device = tslib_1.__importStar(require("expo-device"));
function detectOS() {
    const env = Device;
    return env && env.osName ? env.osName : undefined;
}
exports.detectOS = detectOS;
function isIOS() {
    const os = detectOS();
    return os ? os.toLowerCase().includes("ios") : false;
}
exports.isIOS = isIOS;
function isMobile() {
    const os = detectOS();
    return os ? os.toLowerCase().includes("android") || os.toLowerCase().includes("ios") : false;
}
exports.isMobile = isMobile;
function isNode() {
    return false;
}
exports.isNode = isNode;
function isBrowser() {
    const os = detectOS();
    let browser = os ? os.toLowerCase().includes("web") : false;
    const result = !isNode() && !!browser;
    return result;
}
exports.isBrowser = isBrowser;
function getWindow() {
    return undefined;
}
exports.getWindow = getWindow;
exports.getFromWindow = getWindow;
exports.getFromWindowOrThrow = getWindow;
exports.getDocumentOrThrow = getWindow;
exports.getDocument = getWindow;
exports.getNavigatorOrThrow = getWindow;
exports.getNavigator = getWindow;
exports.getLocationOrThrow = getWindow;
exports.getLocation = getWindow;
exports.getCryptoOrThrow = getWindow;
exports.getCrypto = getWindow;
exports.getLocalStorageOrThrow = getWindow;
exports.getLocalStorage = getWindow;
function getClientMeta() {
    return undefined;
}
exports.getClientMeta = getClientMeta;
//# sourceMappingURL=browser.js.map