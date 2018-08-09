import { Router } from 'express';
import Table from '../table';

let router = Router();
let betTable = new Table('bets');

router.get('/:id', async (req, res) => {
    let id = req.params.id;
    try {
        let getBetsTest = await betTable.getOne(id);
        res.status(200).send(getBetsTest);
    } catch (error) {
        console.log(`Error getting bet details! ${error}`);
        res.status(500).send(`Error getting bet details! ${error}`);
    }
});

router.put('/:id', async (req, res) => {
    let id = req.params.id;
    let randomNum = Math.floor((Math.random() * 2) + 1);
    try {
        let updateABetRandomly = await betTable.updateBetRandomly(id, randomNum);
        console.log(updateABetRandomly);
        res.status(200).send(updateABetRandomly);
    } catch (error) {
        console.log(`Error updating bet details! ${error}`);
        res.status(500).send(`Error updating bet details! ${error}`);
    }
});

export default router;