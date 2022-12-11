import { AdpterRouter } from '../adpters/express-adapter'
import { makeConsultaAlmocoController, makeConsultaLancheManhaController, makeConsultaLancheNoiteController, makeConsultaLancheTardeContrller } from '../factories'

import { Router } from 'express'

export default (router: Router): void => {
  router.get('/', () => console.log('pong'))
  router.get('/consulta/almoco', AdpterRouter(makeConsultaAlmocoController()))
  router.get('/consulta/lm', AdpterRouter(makeConsultaLancheManhaController()))
  router.get('/consulta/lt', AdpterRouter(makeConsultaLancheTardeContrller()))
  router.get('/consulta/ln', AdpterRouter(makeConsultaLancheNoiteController()))
}