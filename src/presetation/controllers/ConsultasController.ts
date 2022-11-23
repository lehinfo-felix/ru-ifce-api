import { Request, Response } from "express";
import { consultaRefeicoes } from "../scripts/consultas/consultaAlmoco";
import { isWeekend } from "../helpers/isWeekend";
import { timeResponse } from "../helpers/timerResponse";
import { removeFirstName } from "../utils/removeFirstName";
import { Menu } from "../protocols/dailyMenu";
class ConsultasController {
  async consultaAlmoco(req: Request, res: Response) {
    if (isWeekend()) return timeResponse()

    function callbackDados(menu: Menu[]) {
      const menuReady = removeFirstName(menu)
      res.json(menuReady);
    }

    
    consultaRefeicoes(callbackDados)
   
  }

  consultaLancheManha(req: Request, res: Response) {
    if (isWeekend()) return timeResponse()
    res.json("lanche manhã");
  }

  consultaLancheTarde(req: Request, res: Response) {
    if (isWeekend()) {
      if (isWeekend()) return timeResponse()
    }
    res.json("lanche tarde");
  }

  consultaLancheNoite(req: Request, res: Response) {
    if (isWeekend()) return timeResponse()
    res.json("lanche noite");
  }
}

export default new ConsultasController();
