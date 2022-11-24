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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const isWeekend_1 = require("../helpers/isWeekend");
const timerResponse_1 = require("../helpers/timerResponse");
const serverError_1 = require("../errors/serverError");
const responseServerError_1 = require("../helpers/responseServerError");
const getDateFormatedToday_1 = require("../utils/getDateFormatedToday");
const addRefeicoesInJson_1 = require("../scripts/addRefeicoesInJson");
const fs_1 = __importDefault(require("fs"));
class ConsultasController {
    consultaAlmoco(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log('entrou no controle');
                if ((0, isWeekend_1.isWeekend)())
                    return (0, timerResponse_1.timeResponse)();
                const refeicoes = JSON.parse(fs_1.default.readFileSync('refeicoes.json').toString());
                const today = new Date();
                if (refeicoes.data.length > 0) {
                    if (refeicoes.updateAt === (0, getDateFormatedToday_1.getTodayPtBr)()) {
                    }
                    else {
                        (0, addRefeicoesInJson_1.saveInJson)();
                    }
                }
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
