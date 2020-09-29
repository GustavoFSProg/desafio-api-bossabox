import { Router } from 'express'
import usersController from '../controllers/usersController'

const routes = new Router()
const UsersRouteList = [
  routes.get('/users/list', usersController.getAll),
  routes.post('/login', usersController.login),
  routes.post('/users', usersController.create),
  routes.delete('/users', usersController.deleteAll),
]

export default UsersRouteList
