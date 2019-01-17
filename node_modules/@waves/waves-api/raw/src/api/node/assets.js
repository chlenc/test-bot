"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var request_1 = require("../../utils/request");
var addresses_1 = require("./addresses");
var constants = require("../../constants");
var fetch = request_1.createFetchWrapper(0 /* NODE */, 0 /* V1 */, request_1.processJSON);
exports.default = {
    balances: function (address) {
        return fetch("/assets/balance/" + address);
    },
    balance: function (address, assetId) {
        if (assetId === constants.WAVES) {
            return addresses_1.default.balance(address);
        }
        else {
            return fetch("/assets/balance/" + address + "/" + assetId);
        }
    },
    distribution: function (assetId) {
        return fetch("/assets/" + assetId + "/distribution");
    }
};
//# sourceMappingURL=assets.js.map