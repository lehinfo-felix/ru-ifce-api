"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const consultaAlmoco_1 = require("../../presetation/scripts/consultas/consultaAlmoco");
const isWeekend_1 = require("../helpers/isWeekend");
class ConsultasController {
    consultaAlmoco(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            if ((0, isWeekend_1.isWeekend)()) {
                res.status(200).json({ mensage: 'Olá, As consultas de refeições estão disponíveis apenas de segunda a sexta!' });
                return;
            }
            const almoco = yield (0, consultaAlmoco_1.getRefeicoes)();
            res.status(200).json(almoco);
        });
    }
    consultaLancheManha(req, res) {
        if ((0, isWeekend_1.isWeekend)()) {
            res.status(200).json({ mensage: 'Olá, As consultas de refeições estão disponíveis apenas de segunda a sexta!' });
        }
        res.json('lanche manhã');
    }
    consultaLancheTarde(req, res) {
        if ((0, isWeekend_1.isWeekend)()) {
            res.status(200).json({ mensage: 'Olá, As consultas de refeições estão disponíveis apenas de segunda a sexta!' });
        }
        res.json('lanche tarde');
    }
    consultaLancheNoite(req, res) {
        if ((0, isWeekend_1.isWeekend)()) {
            res.status(200).json({ mensage: 'Olá, As consultas de refeições estão disponíveis apenas de segunda a sexta!' });
        }
        res.json('lanche noite');
    }
}
exports.default = new ConsultasController();
