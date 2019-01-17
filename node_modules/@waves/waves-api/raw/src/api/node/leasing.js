"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var request_1 = require("../../utils/request");
var fetch = request_1.createFetchWrapper(0 /* NODE */, 0 /* V1 */, request_1.processJSON);
exports.default = {
    getAllActiveLeases: function (address) {
        return fetch("/leasing/active/" + address).then(function (list) {
            return list.map(function (tx) {
                tx.status = 'active';
                return tx;
            });
        });
    }
};
//# sourceMappingURL=leasing.js.map