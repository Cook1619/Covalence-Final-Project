import { Router } from 'express';
import Table from '../table';
let router = Router();

let SportsData = new Table('pastgames');

router.get('/', async (req, res) => {
    let mlbdata = await SportsData.lastInning();
    res.json(mlbdata);
});

router.get('/:id', async (req, res) => {
    let id = req.params.id;
    console.log(id);
    let mlbdata = await SportsData.getOne(id);
    res.json(mlbdata);
});


export default router;