import { IGetMenu } from "@/domain/useCases";
import { ServerError } from "@/presetation/errors";
import { responseNotFoundMenu, responseServerError, sucessResponse } from "@/presetation/helpers";
import { Controller, HttpRequest, HttpResponse } from "@/presetation/protocols";


export class ConsultaLancheTardeController implements Controller {

  constructor(private readonly getMenu: IGetMenu) { }

  async handle(HttpRequest: HttpRequest) {
    try {
      const result = await this.getMenu.get('lt');
      if (!Object.keys(result).length) return responseNotFoundMenu('Lanche da Tarde')
      return sucessResponse(result)
    } catch (error) {
      console.error(error)
      return responseServerError(new ServerError())
    }
  }

}