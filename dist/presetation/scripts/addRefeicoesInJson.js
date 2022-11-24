"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.saveInJson = void 0;
const fs_1 = __importDefault(require("fs"));
const removeFirstName_1 = require("../utils/removeFirstName");
const consultaRefeicoes_1 = require("./consultas/consultaRefeicoes");
const getDateFormatedToday_1 = require("../utils/getDateFormatedToday");
const saveInJson = () => {
    function callbackDados(menu) {
        const menuReady = (0, removeFirstName_1.removeFirstName)(menu);
        fs_1.default.writeFileSync("refeicoes.json", JSON.stringify({
            data: JSON.stringify(menuReady),
            updateAt: (0, getDateFormatedToday_1.getTodayPtBr)()
        }));
    }
    (0, consultaRefeicoes_1.consultaRefeicoes)(callbackDados);
};
exports.saveInJson = saveInJson;
