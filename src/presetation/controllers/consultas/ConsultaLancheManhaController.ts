import { IGetMenu } from "@/domain/useCases";
import { responseNotFoundMenu, responseServerError, sucessResponse } from "@/presetation/helpers";
import { Controller, HttpRequest } from "@/presetation/protocols"
import { ServerError } from "@/presetation/errors";

export class ConsultaLancheManhaController implements Controller {

  constructor(private readonly getMenu: IGetMenu){}

  async handle (HttpRequest: HttpRequest){
    try {
      const result = await this.getMenu.get('lm');
      if(!Object.keys(result).length) return responseNotFoundMenu('Lanche da manhã')
      return sucessResponse(result)
    } catch (error) {
      return  responseServerError(new ServerError() ) ;
    }

  }

}