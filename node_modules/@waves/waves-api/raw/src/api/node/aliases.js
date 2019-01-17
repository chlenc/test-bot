"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var request_1 = require("../../utils/request");
var fetch = request_1.createFetchWrapper(0 /* NODE */, 0 /* V1 */, request_1.processJSON);
exports.default = {
    byAlias: function (alias) {
        return fetch("/alias/by-alias/" + alias);
    },
    byAddress: function (address) {
        return fetch("/alias/by-address/" + address);
    }
};
//# sourceMappingURL=aliases.js.map