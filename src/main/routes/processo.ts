import { Router } from 'express'
import { adaptRoute } from '../adapters/express/express-route-adapter'
import { makeProcessoController } from '../factories/processo-factory'

export default (router: Router): void => {
  router.get('/processo/:numero_processo/:cpf_usuario', adaptRoute(makeProcessoController()))
}
