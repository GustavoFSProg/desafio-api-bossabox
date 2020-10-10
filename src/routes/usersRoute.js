import { Router } from 'express'
import usersController from '../controllers/usersController'

const routes = new Router()
const UsersRouteList = [
  routes.get('/users/list', usersController.getAll),
  routes.delete('/users/:id', usersController.deleteOne),
  routes.post('/login', usersController.login),
  routes.post('/users', usersController.create),
]

export default UsersRouteList
