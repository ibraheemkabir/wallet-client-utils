"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const encUtils = tslib_1.__importStar(require("enc-utils"));
const safeJsonUtils = tslib_1.__importStar(require("safe-json-utils"));
const rpcPayloadId = tslib_1.__importStar(require("rpc-payload-id"));
function sanitizeHex(hex) {
    return encUtils.sanitizeHex(hex);
}
exports.sanitizeHex = sanitizeHex;
function addHexPrefix(hex) {
    return encUtils.addHexPrefix(hex);
}
exports.addHexPrefix = addHexPrefix;
function removeHexPrefix(hex) {
    return encUtils.removeHexPrefix(hex);
}
exports.removeHexPrefix = removeHexPrefix;
function removeHexLeadingZeros(hex) {
    return encUtils.removeHexLeadingZeros(encUtils.addHexPrefix(hex));
}
exports.removeHexLeadingZeros = removeHexLeadingZeros;
exports.safeJsonParse = safeJsonUtils.safeJsonParse;
exports.safeJsonStringify = safeJsonUtils.safeJsonStringify;
exports.payloadId = rpcPayloadId.payloadId;
function uuid() {
    const result = ((a, b) => {
        for (b = a = ""; a++ < 36; b += (a * 51) & 52 ? (a ^ 15 ? 8 ^ (Math.random() * (a ^ 20 ? 16 : 4)) : 4).toString(16) : "-") {
        }
        return b;
    })();
    return result;
}
exports.uuid = uuid;
function logDeprecationWarning() {
    console.warn("DEPRECATION WARNING: This WalletConnect client library will be deprecated in favor of @walletconnect/client. Please check docs.walletconnect.org to learn more about this migration!");
}
exports.logDeprecationWarning = logDeprecationWarning;
//# sourceMappingURL=misc.js.map