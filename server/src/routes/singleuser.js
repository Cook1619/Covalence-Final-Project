import { Router } from 'express';
import { tokenMiddleware, isLoggedIn } from '../middleware/auth.mw';
import Table from "../table";


let router = Router();

let singleUser = new Table('users');

//Originally received undefined 'me' in where clause 
router.get('/:id', async (req, res) => {
    try {
        let myAccount = await singleUser.getOne(req.params.id);
        res.json(myAccount);
    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
});
export default router;

