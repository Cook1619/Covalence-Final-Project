import { Router } from 'express';
import Table from '../table';

let router = Router();
let betTable = new Table('bets');

router.get('/:id', async (req, res) => {
    let id = req.params.id;
    try {
        let getBetsTest = await betTable.getOne(id);
        console.log(getBetsTest);
        res.status(200).send(getBetsTest);
    } catch (err) {
        console.log(`Error getting bet details! ${error}`);
        res.status(500).send(`Error getting bet details! ${error}`);
    }
});

router.put('/:id', async (req, res) => {
    let id = req.params.id;
    try {
        let getBetsTest = await betTable.getAll();
        console.log(getBetsTest);
        res.status(200).send(getBetsTest);
    } catch (err) {
        console.log(`Error getting bet details! ${error}`);
        res.status(500).send(`Error getting bet details! ${error}`);
    }
});

export default router;