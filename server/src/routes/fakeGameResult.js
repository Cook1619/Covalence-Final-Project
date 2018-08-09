import { Router } from 'express';
import Table from '../table';

let router = Router();
let betTable = new Table('bets');

router.get('/', async (req, res) => {
    try {
        res.status(200).send('Basic route ok!');
    } catch (err) {
        console.log(`Error getting bet details! ${error}`);
        res.status(500).send(`Error getting bet details! ${error}`);
    }
});

export default router;