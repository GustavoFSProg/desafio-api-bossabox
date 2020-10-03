import { Router } from 'express'
import toolsController from '../controllers/toolsController'
import isAuthorized from '../utils/auth'

const routes = new Router()
const ToolsRouteList = [
  routes.get('/', toolsController.getAll),
  routes.delete('/tools/:id', isAuthorized, toolsController.deleteById),
  routes.get('/tools/:tags', isAuthorized, toolsController.getByTag),
  routes.post('/tools', toolsController.create),
]

export default ToolsRouteList
