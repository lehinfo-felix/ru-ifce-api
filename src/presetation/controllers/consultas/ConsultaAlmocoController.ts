
import { ServerError } from "../../errors/serverError";
import { responseNotFoundMenu, responseServerError } from "../../helpers/";
import { Controller } from "../../protocols/controller";
import { HttpRequest } from "../../protocols";
import { IGetMenu } from "@/domain/useCases";
import { sucessResponse } from "@/presetation/helpers/";
export class ConsultaAlmocoController implements Controller {

  constructor(private readonly getMenu: IGetMenu) { }

  async handle(HttpRequest: HttpRequest) {
    try {
      const result = await this.getMenu.get("al");
      if (!Object.keys(result).length) return responseNotFoundMenu('Almoço');
      return sucessResponse(result);
    } catch (error) {
      console.error(error)
      return responseServerError(new ServerError());
    }
  };
}
