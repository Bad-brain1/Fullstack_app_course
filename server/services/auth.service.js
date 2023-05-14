import pool from "./connect.js";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import UserService from "./user.service.js"

class AuthService {
    async register(body) {
        const { email, password, name_first, name_last } = body;
        const hashPassword = await bcrypt.hash(password, 8);
        const checkUser = await pool.query(`SELECT * FROM users WHERE email = '${email}'`);
        if (checkUser[0].length > 0 ){
            return false;
        }
        const token = jwt.sign({name_first:name_first,email},'secret',{expiresIn:2});
        const reg = await pool.query(`INSERT INTO users SET ?`, { email: email, password: hashPassword, name_first: name_first, name_last: name_last,token:token});
        return reg;
    }

    async login(body) {
        const { email, password } = body;
        const userData = await pool.query(`SELECT * FROM users WHERE email = '${email}'`);
        if(await this.checkPassword(password, userData[0][0].password)){
            const token = jwt.sign({name_first:userData[0][0].name_first,email},'secret',{expiresIn:2});
            const updateToken = await pool.query(`UPDATE users SET token = '${token}' WHERE email = '${email}'`)
            const login = await UserService.getUserData(email);
            return login[0];
        }
        return false;
    }

    async logout(body) {
        const { id } = body;
        const logout = await pool.query(`UPDATE users SET token = NULL WHERE id = '${id}'`)
        return logout
    }

    async checkPassword(password, hash){
        const res = await  bcrypt.compare(password, hash);
        return res;
    }
}
export default new AuthService();
