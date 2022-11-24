import { Controller } from "../protocols/controller";
import { HttpRequest } from "../protocols/http";
import {sucessResponse } from '../helpers/sucessResponse'
import { isWeekend } from "../helpers/isWeekend";
import { timeResponse } from "../helpers/timerResponse";
import { IGetMenuOnJson } from "src/domain/useCases/GetMenuOnJson";


class ConsultLunch implements Controller{

      private readonly getMenuOnJson;
      constructor(GetMenuOnJson: IGetMenuOnJson){
            this.getMenuOnJson =  GetMenuOnJson
      }

      async handle (HttpRequest: HttpRequest) {
            try {
                  if (isWeekend()) return timeResponse();
                new this.getMenuOnJson()

                
                  const today = new Date()
                  if(refeicoes.data.length > 0 ){
                    if(refeicoes.updateAt === getTodayPtBr()){
                    }else{
                     
                    }
                   }
            
                } catch (error) {
                  return responseServerError(new ServerError());
                }
         
      }; 
}