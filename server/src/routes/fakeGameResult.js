import { Router } from 'express';
import Table from '../table';

let router = Router();
let betTable = new Table('bets');

router.put('/:betid', async (req, res) => {

    let betid = req.params.betid;
    let randomNum = Math.floor((Math.random() * 2) + 1);

    try {
        let updateABetRandomly = await betTable.updateBetRandomly(betid, randomNum);
        let getBet = await betTable.getSingleUserBet(betid);
        res.status(200).send(getBet);
    } catch (error) {
        console.log(`Error updating bet details! ${error}`);
        res.status(500).send(`Error updating bet details! ${error}`);
    }
});

export default router;