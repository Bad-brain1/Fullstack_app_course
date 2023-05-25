import Router from 'express'
import UserController from "./controllers/user.controller.js";
import FinanceController from './controllers/finance.controller.js';
import AuthController from './controllers/auth.controller.js'

const router = new Router();

router.post('/auth/register', AuthController.register)
router.post('/auth/login', AuthController.login)
router.post('/auth/logout', AuthController.logout)

router.get('/users', UserController.getAllUser);

router.get('/finance/:id/year/:year', FinanceController.getUserFinance);
router.get('/finance/:id/month/:month', FinanceController.getUserFinanceToMonth);
router.post('/finance', FinanceController.createFinance);
router.put('/finance', FinanceController.updateFinance);
router.delete('/finance/:id', FinanceController.deleteFinance);

export default router;