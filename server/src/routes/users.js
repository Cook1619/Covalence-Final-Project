import { Router } from 'express';
import { tokenMiddleware, isLoggedIn } from '../middleware/auth.mw';
// import { generateHash } from '../utils/hash';
import Table from "../table";

let router = Router();

let newUser = new Table('users');


//comment

router.post('/addnew', async (req,res) => {
    let body = {
        name: req.body.name,
        email: req.body.email,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        password: req.body.password
    }
    let id = await newUser.insert(body);
    res.json(id);
})

router.get('/me', tokenMiddleware, isLoggedIn, (req, res) => {
    res.json(req.user);
});


export default router;