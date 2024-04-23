const { Router } = require("express")

const UserController = require("../src/controllers/UsersController")

const userRoutes = Router()

const UserController = new UserController()

usersRoutes.post("/", usersController.create)

module.exports = usersRoutes