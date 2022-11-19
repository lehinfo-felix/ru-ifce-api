import { Router, Request, Response } from "express";
import ConsultasController from "./controllers/ConsultasController";
import ReservaController from "./controllers/ReservaController";

const route = Router()

//Consultas
const CONSULTA = '/consulta'
route.get(`${CONSULTA}/almoco`, ConsultasController.consultaAlmoco)
route.get(`${CONSULTA}/lanche-manha`, ConsultasController.consultaLancheManha)
route.get(`${CONSULTA}/lanche-tarde`, ConsultasController.consultaLancheTarde)
route.get(`${CONSULTA}/lanche-noite`, ConsultasController.consultaLancheNoite)


//reservas

const RESERVA = 'reserva'

route.post(`${RESERVA}/almoco`, ReservaController.reservaAlmoco)
route.post(`${RESERVA}/lanche-manha`, ReservaController.reservaLancheManha)
route.post(`${RESERVA}/lanche-tarde`, ReservaController.reservaLancheTarde)
route.post(`${RESERVA}/lanche-noite`, ReservaController.reservaLancheNoite)


export default route