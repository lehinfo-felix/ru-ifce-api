import {Request, Response} from  'express'
import { consultarAlmoco } from '../scripts'
class ConsultasController{
   async consultaAlmoco(req: Request, res: Response){
      await consultarAlmoco()
      res.json('Almoço')
   }

   consultaLancheManha(req: Request, res: Response){
      res.json('lanche manhã')
   }

   consultaLancheTarde(req: Request, res: Response){
      res.json('lanche tarde')
   }

   consultaLancheNoite(req: Request, res: Response){
      res.json('lanche noite')
   }
}

export default new ConsultasController();