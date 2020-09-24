import { Router } from 'express'
import toolsController from '../controlers/toolsController'

const routes = new Router()
const routeList = [
  routes.get('/', toolsController.getAll),
  routes.delete('/tools/:id', toolsController.deleteById),
  routes.get('/tools/:tags', toolsController.getByTag),
  routes.post('/tools', toolsController.create),
]

export default routeList
