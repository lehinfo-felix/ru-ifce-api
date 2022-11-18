import express from "express";
import ControllerConsultas from "./controllers/ControllerConsultas";
import ControllerReserva from "./controllers/ControllerReserva";
const router = express.Router();
router.use(express.Json());

//Consultas
router.get("consulta/almoco", ControllerConsultas.almoco);
router.get("consulta/lanche-manha", ControllerConsultas.lancheManha);
router.get("consulta/lanche-tarde", ControllerConsultas.lancheTarde);
router.get("consulta/lancha-noite", ControllerConsultas.lancheNoite);

export default router;
