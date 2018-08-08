import { Router } from 'express';
import Table from '../table';

let router = Router();
let betTable = new Table('bets');

router.get('/', async (req, res) => {
    console.log(req.user);
    try {
        let bets = await betTable.hasWon()
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

// router.get('/:id', async (req, res) => {
//     try {
//         let foundClass = await classTable.getOne(req.params.id);
//         res.json(foundClass);
//     } catch (err) {
//         console.log(err);
//         res.sendStatus(500);
//     }
// });

// router.put('/:id', async (req, res) => {
//     try {
//         // not concerned about getting a value back, just waiting on update to finish
//         await classTable.update(req.params.id, req.body);
//         res.sendStatus(200);
//     } catch (err) {
//         console.log(err);
//         res.sendStatus(500);
//     }
// });

// router.delete('/:id', async (req, res) => {
//     try {
//         // not concerned about getting a value back, just waiting on delete to finish
//         await classTable.delete(req.params.id);
//         res.sendStatus(200);
//     } catch (err) {
//         console.log(err);
//         res.sendStatus(500);
//     }
// });

export default router;