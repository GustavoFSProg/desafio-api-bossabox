import { Router } from 'express'
import toolsController from '../controllers/toolsController'

const routes = new Router()
const ToolsRouteList = [
  routes.get('/', toolsController.getAll),
  routes.delete('/tools/:id', toolsController.deleteById),
  routes.get('/tools/:tags', toolsController.getByTag),
  routes.post('/tools', toolsController.create),
]

export default ToolsRouteList
