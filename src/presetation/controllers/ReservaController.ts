// import {Request, Response} from  'express'
// import {isWeekend} from '../../data/useCases/utils/isWeekend'
// class ReservaController{
//    reservaAlmoco(req: Request, res: Response){
//       if(isWeekend()){
//          res.status(200).json({mensage: 'Olá, As reservas de refeições estão disponíveis apenas de segunda a sexta!'})
//          return
//       }
//       res.json('Almoço')
//    }

//    reservaLancheManha(req: Request, res: Response){
//       if(isWeekend()){
//          res.status(200).json({mensage: 'Olá, As reservas de refeições estão disponíveis apenas de segunda a sexta!'})
//          return
//       }
//       res.json('lanche manhã')
//    }

//    reservaLancheTarde(req: Request, res: Response){
//       if(isWeekend()){
//          res.status(200).json({mensage: 'Olá, As reservas de refeições estão disponíveis apenas de segunda a sexta!'})
//          return
//       }
//       res.json('lanche tarde')
//    }

//    reservaLancheNoite(req: Request, res: Response){
//       if(isWeekend()){
//          res.status(200).json({mensage: 'Olá, As reservas de refeições estão disponíveis apenas de segunda a sexta!'})
//          return
//       }
//       res.json('lanche noite')
//    }
// }

// export default new ReservaController();