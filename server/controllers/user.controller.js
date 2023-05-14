import UserModel from "../models/user.model.js"
import UserService from "../services/user.service.js"

class UserController {
    async getAllUser(req, res) {
        try {
            const users = await UserService.getAllUser();
            return res.json(users);
        } catch (e) {
            res.status(500).json(e)
        }
    }
}

export default new UserController()