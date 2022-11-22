"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ConsultasController_1 = __importDefault(require("./presetation/controllers/ConsultasController"));
const ReservaController_1 = __importDefault(require("./presetation/controllers/ReservaController"));
const route = (0, express_1.Router)();
route.get(`/`, () => { console.log('Pong'); });
//Consultas
const CONSULTA = '/consulta';
route.get(`${CONSULTA}/almoco`, ConsultasController_1.default.consultaAlmoco);
route.get(`${CONSULTA}/lanche-manha`, ConsultasController_1.default.consultaLancheManha);
route.get(`${CONSULTA}/lanche-tarde`, ConsultasController_1.default.consultaLancheTarde);
route.get(`${CONSULTA}/lanche-noite`, ConsultasController_1.default.consultaLancheNoite);
//reservas
const RESERVA = 'reserva';
route.post(`${RESERVA}/almoco`, ReservaController_1.default.reservaAlmoco);
route.post(`${RESERVA}/lanche-manha`, ReservaController_1.default.reservaLancheManha);
route.post(`${RESERVA}/lanche-tarde`, ReservaController_1.default.reservaLancheTarde);
route.post(`${RESERVA}/lanche-noite`, ReservaController_1.default.reservaLancheNoite);
exports.default = route;
