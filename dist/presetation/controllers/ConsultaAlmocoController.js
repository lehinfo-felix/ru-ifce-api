"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConsultaAlmocoController = void 0;
const serverError_1 = require("../errors/serverError");
const responseServerError_1 = require("../helpers/responseServerError");
const getDateFormatedToday_1 = require("../utils/getDateFormatedToday");
const sucessResponse_1 = require("../helpers/sucessResponse");
const notFoundMenuResponse_1 = require("../helpers/notFoundMenuResponse");
class ConsultaAlmocoController {
    constructor(GetMenuOnJson, GetMenuByType) {
        this.getMenuOnJson = GetMenuOnJson;
        this.getMenuByType = GetMenuByType;
    }
    async handle(HttpRequest) {
        try {
            let result = {};
            const menus = await this.getMenuOnJson.handle();
            const today = (0, getDateFormatedToday_1.getTodayPtBr)();
            if (menus.updateAt === today)
                result = this.getMenuByType.handler('al', menus.data);
            if (!result)
                return (0, notFoundMenuResponse_1.notFoundMenuResponse)();
            return (0, sucessResponse_1.sucessResponse)(result);
        }
        catch (error) {
            return (0, responseServerError_1.responseServerError)(new serverError_1.ServerError());
        }
    }
    ;
}
exports.ConsultaAlmocoController = ConsultaAlmocoController;
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
exports.default = ConsultaAlmocoController;
//# sourceMappingURL=ConsultaAlmocoController.js.map