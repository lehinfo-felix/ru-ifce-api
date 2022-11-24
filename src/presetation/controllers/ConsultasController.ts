import { Request, Response } from "express";
import { isWeekend } from "../helpers/isWeekend";
import { timeResponse } from "../helpers/timerResponse";
import {  MenuReady } from "../protocols/dailyMenu";
import { ServerError } from "../errors/serverError";
import { responseServerError } from "../helpers/responseServerError";
import {getTodayPtBr} from '../utils/getDateFormatedToday'

import fs from 'fs'
class ConsultasController {
  async consultaAlmoco(req: Request, res: Response) {
    try {
      console.log('entrou no controle')
      if (isWeekend()) return timeResponse();
      const refeicoes: MenuReady = JSON.parse(fs.readFileSync('refeicoes.json').toString())
      const today = new Date()
      if(refeicoes.data.length > 0 ){
        if(refeicoes.updateAt === getTodayPtBr()){
        }else{
         
        }
       }

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
