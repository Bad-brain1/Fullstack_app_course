import pool from "./connect.js";

class FinanceService{
    async getUserFinance(id,year){
        if(!id){
            throw new Error('не указан ID');
        }
        const [finance] = await pool.query(`SELECT * FROM finance WHERE id_user = ${id} and YEAR(date_create) = ${year}`);
        return finance;
    }

    async getUserFinanceToMonth(id,month){
        if(!id){
            throw new Error('не указан ID');
        }
        let year = new Date().getFullYear();
        const [finance] = await pool.query(`SELECT * FROM finance WHERE id_user = ${id} and MONTH(date_create) = ${month} and YEAR(date_create) = ${year}`);
        return finance;
    }
    


    async create(body){
        if(!body){
            throw new Error('не указан Body');
        }
        const createFinance = await pool.query(`INSERT INTO finance SET ?`,{id_user: body.id_user,value: body.value, text: body.text, date_create: body.date_create});
        console.log(body)
        return createFinance;
    }

    async update(body){
        if(!body){
            throw new Error('не указан Body');
        }
        const {id, id_user, value, text, date_create} = body;
        const updateFinance = await pool.query(`UPDATE finance SET id_user = ${id_user}, value = '${value}', text = '${text}', date_create = '${date_create}' WHERE id = ${id}`);
        console.log(updateFinance)
        return updateFinance;
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