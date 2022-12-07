"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.responseServerError = void 0;
const responseServerError = (error) => {
    return {
        statusCode: 500,
        body: error
    };
};
exports.responseServerError = responseServerError;
//# sourceMappingURL=responseServerError.js.map