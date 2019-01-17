"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var request_1 = require("../../utils/request");
var WavesError_1 = require("../../errors/WavesError");
var constants = require("../../constants");
var config_1 = require("../../config");
var requests = require("./transactions.x");
var fetch = request_1.createFetchWrapper(0 /* NODE */, 0 /* V1 */, request_1.processJSON);
exports.default = {
    get: function (id) {
        if (id === constants.WAVES) {
            return Promise.resolve(constants.WAVES_V1_ISSUE_TX);
        }
        else {
            return fetch("/transactions/info/" + id);
        }
    },
    getList: function (address, limit) {
        if (limit === void 0) { limit = config_1.default.getRequestParams().limit; }
        // In the end of the line a strange response artifact is handled
        return fetch("/transactions/address/" + address + "/limit/" + limit).then(function (array) { return array[0]; });
    },
    utxSize: function () {
        return fetch('/transactions/unconfirmed/size');
    },
    utxGet: function (id) {
        return fetch("/transactions/unconfirmed/info/" + id);
    },
    utxGetList: function () {
        return fetch('/transactions/unconfirmed');
    },
    broadcast: function (type, data, keys) {
        switch (type) {
            case constants.ISSUE_TX_NAME:
                return requests.sendIssueTx(data, keys);
            case constants.TRANSFER_TX_NAME:
                return requests.sendTransferTx(data, keys);
            case constants.REISSUE_TX_NAME:
                return requests.sendReissueTx(data, keys);
            case constants.BURN_TX_NAME:
                return requests.sendBurnTx(data, keys);
            case constants.LEASE_TX_NAME:
                return requests.sendLeaseTx(data, keys);
            case constants.CANCEL_LEASING_TX_NAME:
                return requests.sendCancelLeasingTx(data, keys);
            case constants.CREATE_ALIAS_TX_NAME:
                return requests.sendCreateAliasTx(data, keys);
            case constants.MASS_TRANSFER_TX_NAME:
                return requests.sendMassTransferTx(data, keys);
            case constants.DATA_TX_NAME:
                return requests.sendDataTx(data, keys);
            case constants.SET_SCRIPT_TX_NAME:
                return requests.sendSetScriptTx(data, keys);
            case constants.SPONSORSHIP_TX_NAME:
                return requests.sendSponsorshipTx(data, keys);
            default:
                throw new WavesError_1.default("Wrong transaction type: " + type, data);
        }
    },
    rawBroadcast: function (data) {
        return fetch(constants.BROADCAST_PATH, __assign({}, request_1.POST_TEMPLATE, { body: JSON.stringify(data) }));
    }
};
//# sourceMappingURL=transactions.js.map