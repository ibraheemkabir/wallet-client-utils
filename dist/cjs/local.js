"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const misc_1 = require("./misc");
const async_storage_1 = tslib_1.__importDefault(require("@react-native-async-storage/async-storage"));
function setLocal(key, data) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const raw = misc_1.safeJsonStringify(data);
        try {
            yield async_storage_1.default.setItem(key, raw);
        }
        catch (e) {
            throw e;
        }
    });
}
exports.setLocal = setLocal;
function getLocal(key) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        let data = null;
        let raw = null;
        const local = async_storage_1.default;
        if (local) {
            raw = yield local.getItem(key);
        }
        data = misc_1.safeJsonParse(raw);
        return data;
    });
}
exports.getLocal = getLocal;
function removeLocal(key) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const local = async_storage_1.default;
        if (local) {
            yield local.removeItem(key);
        }
    });
}
exports.removeLocal = removeLocal;
//# sourceMappingURL=local.js.map