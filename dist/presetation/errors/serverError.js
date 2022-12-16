"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServerError = void 0;
class ServerError extends Error {
    constructor() {
        super("Internal Server Error");
        this.name = "Internal Error";
    }
}
exports.ServerError = ServerError;
//# sourceMappingURL=serverError.js.map