import { Router } from 'express';
import Table from '../table';

let router = Router();

router.get('/', async (req, res) => {
    console.log(req.user);
    try {
        let classes = await classTable.getAll()
        res.json(classes);
    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
});