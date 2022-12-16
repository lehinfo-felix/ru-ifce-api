"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const isWeekend_1 = require("../helpers/isWeekend");
class ReservaController {
    reservaAlmoco(req, res) {
        if ((0, isWeekend_1.isWeekend)()) {
            res.status(200).json({ mensage: 'Olá, As reservas de refeições estão disponíveis apenas de segunda a sexta!' });
            return;
        }
        res.json('Almoço');
    }
    reservaLancheManha(req, res) {
        if ((0, isWeekend_1.isWeekend)()) {
            res.status(200).json({ mensage: 'Olá, As reservas de refeições estão disponíveis apenas de segunda a sexta!' });
            return;
        }
        res.json('lanche manhã');
    }
    reservaLancheTarde(req, res) {
        if ((0, isWeekend_1.isWeekend)()) {
            res.status(200).json({ mensage: 'Olá, As reservas de refeições estão disponíveis apenas de segunda a sexta!' });
            return;
        }
        res.json('lanche tarde');
    }
    reservaLancheNoite(req, res) {
        if ((0, isWeekend_1.isWeekend)()) {
            res.status(200).json({ mensage: 'Olá, As reservas de refeições estão disponíveis apenas de segunda a sexta!' });
            return;
        }
        res.json('lanche noite');
    }
}
exports.default = new ReservaController();
//# sourceMappingURL=ReservaController.js.map