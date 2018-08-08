import { Router } from 'express';
import Table from '../table';
let router = Router();

let SportsData = new Table('futuregames');
let teamData = new Table('teams')

router.get('/', async (req, res) => {
    let mlbdata = await SportsData.futureGame()
    let logos = await teamData.getLogos();
    let allData = ({mlbdata, logos})
    res.json(allData);
});

router.get('/:id', async (req, res) => {
    let id = req.params.id;
    let mlbdata = await SportsData.getOne(id);
    res.json(mlbdata);
});


export default router;
