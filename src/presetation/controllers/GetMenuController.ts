import { Controller } from "../protocols/controller";
import { HttpRequest } from "../protocols/http";
import { sucessResponse } from '../helpers/sucessResponse'
import { isWeekend } from "../helpers/isWeekend";
import { timeResponse } from "../helpers/timerResponse";
import { IGetMenuOnJson } from "src/domain/useCases/GetMenuOnJson";
import { responseServerError } from "../helpers/responseServerError";
import {ServerError} from '../errors/serverError'


export class GetMenuController implements Controller {

      private readonly getMenuOnJson;
      constructor(GetMenuOnJson: IGetMenuOnJson) {
            this.getMenuOnJson = GetMenuOnJson
      }

      async handle(HttpRequest: HttpRequest, res) {
            try {
                  if (isWeekend()) return timeResponse();
                  const menu = new this.getMenuOnJson().handle()
                  return res.json(menu)
                  

            } catch (error) {
                  return responseServerError(new ServerError());
            }

      };
}

W