import pool from "./connect.js";

class FinanceService{
    async getUserFinance(id){
        if(!id){
            throw new Error('не указан ID');
        }
        const [finance] = await pool.query(`SELECT * FROM finance WHERE id_user = ${id}`);
        return finance;
    }
    
    async create(body){
        if(!body){
            throw new Error('не указан Body');
        }
        const createFinance = await pool.query(`INSERT INTO finance SET ?`,{id_user: body.id_user,value: body.value, text: body.text, date_create: body.date_create, date_update: body.date_update});
        console.log(body)
        return createFinance;
    }

    async update(body){
        if(!body){
            throw new Error('не указан Body');
        }
        const {id, id_user, value, text, date_create, date_update} = body;
        const updateFinance = await pool.query(`UPDATE finance SET id_user = ${id_user}, value = '${value}', text = '${text}', date_create = '${date_create}', date_update = '${date_update}' WHERE id = ${id}`);
        console.log(updateFinance)
        return createFinance;
    }

    async delete(id){
        if(!id){
            throw new Error('не указан id');
        }
        const deleteFinance = await pool.query(`DELETE FROM finance WHERE id = ${id}`);
        return deleteFinance;
    }

}
export default new FinanceService();