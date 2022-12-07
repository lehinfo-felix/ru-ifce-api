import { Controller, HttpRequest } from "../protocols";
import { sucessResponse, isWeekend, responseServerError, timeResponse } from '../helpers'
import { IGetMenuOnJson } from "@/domain/useCases";
import {ServerError} from '../errors/serverError'

export class GetMenuController implements Controller {

      private readonly getMenuOnJson;
      constructor(GetMenuOnJson: IGetMenuOnJson) {
            this.getMenuOnJson = GetMenuOnJson
      }

      async handle(HttpRequest: HttpRequest) {
            try {
                  if (isWeekend()) return timeResponse();
                  const menu = new this.getMenuOnJson().handle();
                  return sucessResponse(menu);
                  

            } catch (error) {
                  return responseServerError(new ServerError());
            }

      };
}

