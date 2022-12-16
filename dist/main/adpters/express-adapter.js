"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdpterRouter = void 0;
const AdpterRouter = (controller) => {
    return async (req, res) => {
        const request = {
            ...req.body,
            ...req.params
        };
        const httpResponse = await controller.handle(request);
        if (httpResponse.statusCode >= 200 && httpResponse.statusCode <= 299) {
            res.status(httpResponse.statusCode).json(httpResponse.body);
        }
        else {
            res.status(httpResponse.statusCode).json({
                error: httpResponse.body.message
            });
        }
    };
};
exports.AdpterRouter = AdpterRouter;
//# sourceMappingURL=express-adapter.js.map