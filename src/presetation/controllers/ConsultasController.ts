import { Request, Response } from "express";
import { consultaRefeicoes } from "../scripts/consultas/consultaAlmoco";
import { isWeekend } from "../helpers/isWeekend";
import { timeResponse } from "../helpers/timerResponse";
import { removeFirstName } from "../utils/removeFirstName";
import { Menu } from "../protocols/dailyMenu";
import { ServerError } from "../errors/serverError";
import { responseServerError } from "../helpers/responseServerError";
import { sucessResponse } from "../helpers/sucessResponse";
class ConsultasController {
  async consultaAlmoco(req: Request, res: Response) {
    try {
      console.log('entrou no controle')
      if (isWeekend()) return timeResponse();

      function callbackDados(menu: Menu[]) {
        const menuReady = removeFirstName(menu);
        
        res.json(sucessResponse(menuReady));
      }
      consultaRefeicoes(callbackDados);
    } catch (error) {
      return responseServerError(new ServerError());
    }
  }

  consultaLancheManha(req: Request, res: Response) {
    if (isWeekend()) return timeResponse();
    res.json("lanche manhã");
  }

  consultaLancheTarde(req: Request, res: Response) {
    if (isWeekend()) return timeResponse();
    res.json("lanche tarde");
  }

  consultaLancheNoite(req: Request, res: Response) {
    if (isWeekend()) return timeResponse();
    res.json("lanche noite");
  }
}

export default new ConsultasController();
