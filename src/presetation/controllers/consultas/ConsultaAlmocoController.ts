
import {  Menu } from "../../protocols/dailyMenu";
import { ServerError } from "../../errors/serverError";
import { responseServerError } from "../../helpers/responseServerError";
import {getTodayPtBr} from '../../utils/getDateFormatedToday'
import { Controller } from "../../protocols/controller";
import { HttpRequest } from "../../protocols";

import {IGetMenuByType, IGetMenuOnJson} from '@/domain/useCases'
import { sucessResponse } from "../../helpers/sucessResponse";
import { notFoundMenuResponse } from "../../helpers/notFoundMenuResponse";


export  class ConsultaAlmocoController implements Controller{

  private readonly getMenuOnJson: IGetMenuOnJson;
  private readonly  getMenuByType: IGetMenuByType;
  constructor
  (
    GetMenuOnJson: IGetMenuOnJson,
    GetMenuByType: IGetMenuByType
    ){
    this.getMenuOnJson =  GetMenuOnJson;
    this.getMenuByType = GetMenuByType;
  }

 async handle (HttpRequest: HttpRequest){

  try {
    let result: Menu | {} = {};
    const menus = await this.getMenuOnJson.handle();
    console.log(menus)
    const today = getTodayPtBr();
    if(menus.updateAt !== today) result = this.getMenuByType.handler('al', menus.data);
    if(!result) return notFoundMenuResponse()
    return sucessResponse(result);

  } catch (error) {
     return  responseServerError(new ServerError());
  }

  };
}
// class ConsultasController {
//   async consultaAlmoco(req: Request, res: Response) {
//     try {
//       console.log('entrou no controle')
//       if (isWeekend()) return timeResponse();
//       const refeicoes: MenuReady = JSON.parse(fs.readFileSync('refeicoes.json').toString())
//       const today = new Date()
//       if(refeicoes.data.length > 0 ){
//         if(refeicoes.updateAt === getTodayPtBr()){
//         }else{
         
//         }
//        }

//     } catch (error) {
//       return responseServerError(new ServerError());
//     }
//   }

//   consultaLancheManha(req: Request, res: Response) {
//     if (isWeekend()) return timeResponse();
//     res.json("lanche manhã");
//   }

//   consultaLancheTarde(req: Request, res: Response) {
//     if (isWeekend()) return timeResponse();
//     res.json("lanche tarde");
//   }

//   consultaLancheNoite(req: Request, res: Response) {
//     if (isWeekend()) return timeResponse();
//     res.json("lanche noite");
//   }
// }


