"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function useMemoryCacheAdaptor(memoryCacheInstance = null) {
    let cacheInstance;
    const cacheHandler = async () => {
        if (cacheInstance) {
            return cacheInstance;
        }
        const { Cache } = await Promise.resolve().then(() => require('memory-cache'));
        cacheInstance = new Cache();
        return cacheInstance;
    };
    if (memoryCacheInstance) {
        cacheInstance = memoryCacheInstance;
    }
    return {
        get: async (k) => (await cacheHandler()).get(k),
        put: async (k, data, ageSeconds) => {
            (await cacheHandler()).put(k, data, ageSeconds * 1000);
        },
        delete: async (k) => {
            (await cacheHandler()).del(k);
        },
    };
}
exports.default = useMemoryCacheAdaptor;
//# sourceMappingURL=index.js.map