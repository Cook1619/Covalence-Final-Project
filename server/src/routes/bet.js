import { Router } from 'express';
import Table from '../table';

let router = Router();
let betTable = new Table('bets');

router.get('/:id', async (req, res) => {
    console.log(req.user);
    try {
        let id = req.params.id
        let bets = await betTable.getUserBets(id)
        res.json(bets);
    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
});




router.post('/', async (req, res) => {
    try {
        // idObj will look like { id: 7 }
        let amount = parseFloat(req.body.bet)
        let idObj = await betTable.insert({
            amount: amount,
            userid: req.body.userid,
            gameid: req.body.gameid,
            teamid: req.body.teamid,
        });
        res.status(201).json(idObj);
    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
});

export default router;