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
        //Sets up array for the response object
        let dataArray = [];
        //Returns an object
        let mlbdata = await SportsData.getOne(id);
        //Pushes object into array
        dataArray.push(mlbdata);
        //Gets array of objects
        let logos = await teamData.getLogos();

        //Same code now runs since it's two arrays and
        //not an object and an array
        dataArray.forEach(function (mlb) {
            logos.forEach(function (logo) {
                if (mlb.id === logo.id) {
                    _.assign(mlb, logo);
                }
            });
        });

        //Returns single game with appropriate logos.
        res.json(dataArray);

    } catch (e) {
        console.log(e);
        res.status(500).send(`Error! ${e}`)
    }
});


export default router;
