import FinanceService from "../services/finance.service.js";

class FinanceController{
    async getUserFinance(req, res){
        try{
            const finance = await FinanceService.getUserFinance(req.params.id, req.params.year);
            return res.status(200).json(finance);
        }catch(e){
            res.status(500).json(e)
        }
    }

    async getUserFinanceToMonth(req,res){
        try{
            const finance = await FinanceService.getUserFinanceToMonth(req.params.id,req.params.month);
            return res.status(200).json(finance);
        }catch(e){
            res.status(500).json(e)
        }
    }


    async createFinance(req, res){
        try{
            const createFinance = await FinanceService.create(req.body);
            return res.status(200).json(createFinance);
        }catch(e){
            res.status(500).json(e)
        }
    }

    async updateFinance(req, res){
        try{
            const updateFinance = await FinanceService.update(req.body);
            return res.status(200).json(updateFinance);
        }catch(e){
            res.status(500).json(e)
        }
    }

    async deleteFinance(req, res){
        try{
            const deleteFinance = await FinanceService.delete(req.params.id);
            return res.status(200).json(deleteFinance);
        }catch(e){
            res.status(500).json(e)
        }
    }
}
export default new FinanceController();