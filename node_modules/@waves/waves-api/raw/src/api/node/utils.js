"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var request_1 = require("../../utils/request");
var fetch = request_1.createFetchWrapper(0 /* NODE */, 0 /* V1 */, request_1.processJSON);
exports.default = {
    time: function () {
        return fetch('/utils/time').then(function (t) { return t.system; });
    },
    script: {
        compile: function (code) {
            return fetch('/utils/script/compile', {
                method: 'POST',
                body: code
            }).then(function (response) {
                return response.script;
            });
        }
    }
};
//# sourceMappingURL=utils.js.map