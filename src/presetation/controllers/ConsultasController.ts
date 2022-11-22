import {Request, Response} from  'express'
import { getRefeicoes } from '../../presetation/scripts/consultas/consultaAlmoco'
import {isWeekend} from '../helpers/isWeekend'
class ConsultasController{
   async consultaAlmoco(req: Request, res: Response){
      if(isWeekend()){
         res.status(200).json({mensage: 'Olá, As consultas de refeições estão disponíveis apenas de segunda a sexta!'})
         return
      }
      await getRefeicoes()
      res.json('Almoço')
   }

   consultaLancheManha(req: Request, res: Response){
      if(isWeekend()){
         res.status(200).json({mensage: 'Olá, As consultas de refeições estão disponíveis apenas de segunda a sexta!'})
      }
      res.json('lanche manhã')
   }

   consultaLancheTarde(req: Request, res: Response){
      if(isWeekend()){
         res.status(200).json({mensage: 'Olá, As consultas de refeições estão disponíveis apenas de segunda a sexta!'})
      }
      res.json('lanche tarde')
   }

   consultaLancheNoite(req: Request, res: Response){
      if(isWeekend()){
         res.status(200).json({mensage: 'Olá, As consultas de refeições estão disponíveis apenas de segunda a sexta!'})
      }
      res.json('lanche noite')
   }
}

export default new ConsultasController();