"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetMenuController = void 0;
const helpers_1 = require("../helpers");
const serverError_1 = require("../errors/serverError");
class GetMenuController {
    constructor(GetMenuOnJson) {
        this.getMenuOnJson = GetMenuOnJson;
    }
    async handle(HttpRequest) {
        try {
            if ((0, helpers_1.isWeekend)())
                return (0, helpers_1.timeResponse)();
            const menu = new this.getMenuOnJson().handle();
            return (0, helpers_1.sucessResponse)(menu);
        }
        catch (error) {
            return (0, helpers_1.responseServerError)(new serverError_1.ServerError());
        }
    }
    ;
}
exports.GetMenuController = GetMenuController;
//# sourceMappingURL=GetMenuController.js.map