import { Router } from 'express';
import axios from 'axios';
import Table from '../table';


let router = Router();

const scores = new Table('scoreboard');

router.get('/', async(req, res) => {

    try {
        let testData = await axios({
            method: 'get',
            url: `https://api.mysportsfeeds.com/v1.0/pull/mlb/2018-regular/scoreboard.json?fordate=20180801`,
            auth: {
                username: process.env.SPORTS_SK,
                password: process.env.SPORTS_PW
            }
        });
        
         let scoreData = testData.data.scoreboard.gameScore.game.awayScore;
        console.log(scoreData);

        // scores.insert(scoreData);

        // scores.insert(scoreboard);

        res.status(200).send('Ok');
    } catch (err) {
        res.status(500).send('SHIT');
    }

});

export default router;

// router.post('/addnew', async (req,res) => {
//
//     let body = {
//         name: req.body.name,
//         email: req.body.email,
//         firstname: req.body.firstname,
//         lastname: req.body.lastname,
//         hash
//     }
//     let id = await newUser.insert(body);
//     res.json(id);
// })