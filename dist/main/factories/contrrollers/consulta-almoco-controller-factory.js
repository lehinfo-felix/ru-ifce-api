"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeConsultaAlmocoController = void 0;
const controllers_1 = require("@/presetation/controllers");
const index_1 = require("../usecases/index");
const makeConsultaAlmocoController = () => {
    const controller = new controllers_1.ConsultaAlmocoController((0, index_1.makeGetMenuOnJson)(), (0, index_1.makeGetMenuByType)());
    return controller;
};
exports.makeConsultaAlmocoController = makeConsultaAlmocoController;
//# sourceMappingURL=consulta-almoco-controller-factory.js.map