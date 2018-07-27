import { Router } from 'express';
import { tokenMiddleware, isLoggedIn } from '../middleware/auth.mw';
// import { generateHash } from '../utils/hash';
import Table from "../table";
import { generateHash } from '../utils/hash';

let router = Router();

let newUser = new Table('users');


//comment

router.post('/addnew', async (req,res) => {
    let hash = await generateHash(req.body.password)
    let body = {
        name: req.body.name,
        email: req.body.email,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        hash
    }
    let id = await newUser.insert(body);
    res.json(id);
})

router.get('/me', tokenMiddleware, isLoggedIn, (req, res) => {
    res.json(req.user);
});


export default router;