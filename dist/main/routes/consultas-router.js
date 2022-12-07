"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_adapter_1 = require("../adpters/express-adapter");
const factories_1 = require("../factories");
exports.default = (router) => {
    router.get('/', () => console.log('pong'));
    router.get('/consulta/almoco', (0, express_adapter_1.AdpterRouter)((0, factories_1.makeConsultaAlmocoController)()));
};
//# sourceMappingURL=consultas-router.js.map