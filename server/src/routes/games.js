import { Router } from 'express';
import axios from 'axios';
import { config } from '../config'
import Table from '../table';


let router = Router();

const scores = new Table('scoreboard');
let date = 1;

router.get('/', async (req, res) => {

    try {
        let testData = await axios({
            method: 'get',
            url: `https://api.mysportsfeeds.com/v1.0/pull/mlb/2018-regular/scoreboard.json?fordate=20180801`,
            auth: {
                username: config.SPORTS_SK,
                password: config.SPORTS_PW
            }
        });

        // console.log(testData.data);

        let scoreData = testData.data.scoreboard.gameScore;
        
        let gameArray = [];

        const getInfoWeNeed = () => {

            let gameData = {
                scoreboard: scoreData
            };

            gameArray.push(gameData);
            console.log(gameArray);
            return gameArray;

        };
        
        getInfoWeNeed()
        let scoreboardData = JSON.stringify(gameArray)
        // console.log(scoreboardData)
        
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