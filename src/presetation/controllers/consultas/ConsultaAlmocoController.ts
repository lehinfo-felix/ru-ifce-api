
import { ServerError } from "../../errors/serverError";
import { responseNotFoundMenuError, responseServerError } from "../../helpers/";
import { Controller } from "../../protocols/controller";
import { HttpRequest } from "../../protocols";
import { IGetMenu } from "@/domain/useCases";
import { sucessResponse } from "@/presetation/helpers/";
import { notFoundMenuResponse } from "@/presetation/errors";
export  class ConsultaAlmocoController implements Controller{

 constructor(private readonly getMenu: IGetMenu){}

 async handle (HttpRequest: HttpRequest){
  try {
     const result = await this.getMenu.get("al");
     if(!Object.keys(result).length) return  responseNotFoundMenuError(notFoundMenuResponse('Almoço'));
     if(result) return sucessResponse(result);
  } catch (error) {
   console.log('deu ruim')
     return  responseServerError(new ServerError());
  }
  };
}
