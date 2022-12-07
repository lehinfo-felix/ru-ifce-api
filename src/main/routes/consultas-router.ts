import {AdpterRouter} from '../adpters/express-adapter'
import { makeConsultaAlmocoController } from '../factories'

import { Router } from 'express'

export default (router: Router): void => {
  router.get('/', () => console.log('pong'))
  router.get('/consulta/almoco', AdpterRouter(makeConsultaAlmocoController()))
}