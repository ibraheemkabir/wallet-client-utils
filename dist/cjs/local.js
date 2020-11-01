"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const misc_1 = require("./misc");
const react_native_1 = require("react-native");
function setLocal(key, data) {
    var _a;
    const raw = misc_1.safeJsonStringify(data);
    const local = react_native_1.AsyncStorage();
    if (local) {
        (_a = local) === null || _a === void 0 ? void 0 : _a.setItem(key, raw);
    }
}
exports.setLocal = setLocal;
function getLocal(key) {
    let data = null;
    let raw = null;
    const local = react_native_1.AsyncStorage();
    if (local) {
        raw = local.getItem(key);
    }
    data = misc_1.safeJsonParse(raw);
    return data;
}
exports.getLocal = getLocal;
function removeLocal(key) {
    const local = react_native_1.AsyncStorage();
    if (local) {
        local.removeItem(key);
    }
}
exports.removeLocal = removeLocal;
//# sourceMappingURL=local.js.map