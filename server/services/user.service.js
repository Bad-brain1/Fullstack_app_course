import pool from "./connect.js";

class UserService {
    async getAllUser() {
        const [users] = await pool.query("SELECT * FROM users");
        return users;
    }
    
    async getUserData(email){
        const users = await pool.query(`SELECT id, email, name_first, name_last,token FROM users WHERE email = '${email}'`);
        return users;
    }

}
export default new UserService();