import { Router } from 'express';
import Table from '../table';
import _ from 'lodash'
let router = Router();

let SportsData = new Table('futuregames');
let teamData = new Table('teams')

router.get('/', async (req, res) => {
    try {
        let mlbdata = await SportsData.futureGame()
        let logos = await teamData.getLogos();
        let allData = ({ mlbdata, logos })

        mlbdata.forEach(function (mlb) {
            logos.forEach(function (logo) {
                if (mlb.id === logo.id) {
                    _.assign(mlb, logo);
                }
            });
        });

        res.json(mlbdata);

    } catch (e) {
        console.log(e);
        res.status(500).send(`Error! ${e}`)
    }
});

router.get('/:id', async (req, res) => {
    try {
        let id = req.params.id;
        let mlbdata = await SportsData.getOne(id);
        let logos = await teamData.getLogos();

        mlbdata.forEach(function (mlb) {
            logos.forEach(function (logo) {
                if (mlb.id === logo.id) {
                    _.assign(mlb, logo);
                }
            });
        });

        res.json(mlbdata);

    } catch (e) {
        console.log(e);
        res.status(500).send(`Error! ${e}`)
    }
});


export default router;
