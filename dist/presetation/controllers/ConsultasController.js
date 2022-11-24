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
const consultaAlmoco_1 = require("../scripts/consultas/consultaAlmoco");
const isWeekend_1 = require("../helpers/isWeekend");
const timerResponse_1 = require("../helpers/timerResponse");
const removeFirstName_1 = require("../utils/removeFirstName");
const serverError_1 = require("../errors/serverError");
const responseServerError_1 = require("../helpers/responseServerError");
const sucessResponse_1 = require("../helpers/sucessResponse");
class ConsultasController {
    consultaAlmoco(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log('entrou no controle');
                if ((0, isWeekend_1.isWeekend)())
                    return (0, timerResponse_1.timeResponse)();
                function callbackDados(menu) {
                    const menuReady = (0, removeFirstName_1.removeFirstName)(menu);
                    res.json((0, sucessResponse_1.sucessResponse)(menuReady));
                }
                (0, consultaAlmoco_1.consultaRefeicoes)(callbackDados);
            }
            catch (error) {
                return (0, responseServerError_1.responseServerError)(new serverError_1.ServerError());
            }
        });
    }
    consultaLancheManha(req, res) {
        if ((0, isWeekend_1.isWeekend)())
            return (0, timerResponse_1.timeResponse)();
        res.json("lanche manhã");
    }
    consultaLancheTarde(req, res) {
        if ((0, isWeekend_1.isWeekend)())
            return (0, timerResponse_1.timeResponse)();
        res.json("lanche tarde");
    }
    consultaLancheNoite(req, res) {
        if ((0, isWeekend_1.isWeekend)())
            return (0, timerResponse_1.timeResponse)();
        res.json("lanche noite");
    }
}
exports.default = new ConsultasController();
