import {Request, Response} from  'express'

class ReservaController{
   reservaAlmoco(req: Request, res: Response){
      res.json('Almoço')
   }

   reservaLancheManha(req: Request, res: Response){
      res.json('lanche manhã')
   }

   reservaLancheTarde(req: Request, res: Response){
      res.json('lanche tarde')
   }

   reservaLancheNoite(req: Request, res: Response){
      res.json('lanche noite')
   }
}

export default new ReservaController();