import { Router } from 'express';
import Table from '../table';
let router = Router();

let SportsData = new Table('teams');

router.get('/', async (req, res) => {
    let teams = await SportsData.getAll();
    res.json(teams);
});

router.get('/:id', async (req, res) => {
    let id = req.params.id;
    let mlbdata = await SportsData.getOne(id);
    res.json(mlbdata);
});


export default router;