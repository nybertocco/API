const AppError = require("../utils/AppError")

class UserController {
    create(request, response) {
        const { name, email, password } = request.body

        if (!name) {
            throw new AppError("Nome é obrigatório")
        }

        response.status(201).json({ name, email, password })
    }
}

module.export = UsersController