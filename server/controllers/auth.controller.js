import AuthService from "../services/auth.service.js"

class AuthController {
    async register(req, res) {
        try {
            const register = await AuthService.register(req.body);
            if(!register){
                res.status(409).json('Пользователь уже зарегистрирован');
            }

            return res.status(200).json(register);
        } catch (e) {
            res.status(500).json(e)
        }
    }
    async login(req, res) {
        try {
            const login = await AuthService.login(req.body);
            if(!login){
                res.status(409).json('Неверные данные');
            }
            return res.status(200).json(login[0]);
        } catch (e) {
            res.status(500).json(e)
        }
    }
    async logout(req, res) {
        try {
            const logout = await AuthService.logout(req.body);
            return res.status(200).json(logout);
        } catch (e) {
            res.status(500).json(e)
        }
    }
}

export default new AuthController()