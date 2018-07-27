import { Router } from 'express';
import { tokenMiddleware, isLoggedIn } from '../middleware/auth.mw';
import { generateHash } from '../utils/hash';
import Table from "../table";

let router = Router();

let newUser = new Table('users');

router.get('/me', tokenMiddleware, isLoggedIn, (req, res) => {
    res.json(req.user);
});

router.post('/users/', (req, res) => {

    let password = generateHash(req.body.password);
    newUser.insert({
        name: req.body.name,
        email: req.body.email,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        password
    }).then(user => {
        res.json(user)
    });
})

export default router;