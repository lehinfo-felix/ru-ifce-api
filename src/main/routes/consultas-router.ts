import { AdpterRouter } from '../adpters/express-adapter'
import { makeConsultaAlmocoController, makeConsultaLancheManhaController, makeConsultaLancheNoiteController, makeConsultaLancheTardeContrller } from '../factories'

import { Router } from 'express'

export default (router: Router): void => {
  router.get('/', () => console.log('pong'))
  router.get('/consulta/almoco', AdpterRouter(makeConsultaAlmocoController()))
  router.get('/consulta/lanche/manha', AdpterRouter(makeConsultaLancheManhaController()))
  router.get('/consulta/lanhe/tarde', AdpterRouter(makeConsultaLancheTardeContrller()))
  router.get('/consulta/lanche/noite', AdpterRouter(makeConsultaLancheNoiteController()))
}