import { Controller } from "../protocols/controller";
import { HttpRequest } from "../protocols/http";
import {sucessResponse } from '../helpers/sucessResponse'


class ConsultLunch implements Controller{
      async handle (HttpRequest: HttpRequest) {
      return await sucessResponse({})
         
      }; 
}