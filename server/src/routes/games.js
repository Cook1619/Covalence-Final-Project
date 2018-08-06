import { Router } from 'express';
import axios from 'axios';
import { config } from '../config'
import Table from '../table';


let router = Router();

const scores = new Table('scoreboard');
let date = 1;


let gameArray = [];

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


        const getInfoWeNeed = () => {

            scoreData.forEach(function (games) {
                gameArray.push(games);

            });
        };
        getInfoWeNeed();
        let gameString = JSON.stringify(gameArray);
        let parsedData = JSON.parse(gameString);
        // console.log(gameArray);


        res.status(200).send('Ok');
    } catch (err) {
        res.status(500).send('SHIT');
    }

});

router.post('/', async (req, res) => {
    try {
        let i;
        for (i = 0; i < gameArray.length; i++) { 
            let idObj = await scores.insertScoreboard({
                post_game_ID: gameArray[i].game.ID,
                game_date: gameArray[i].game.date,
                homeScore: gameArray[i].homeScore,
                awayScore: gameArray[i].awayScore,
                isCompleted: gameArray[i].isCompleted
                
            });
            // console.log(idObj)
        res.status(201).json(idObj);
    }
    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
});

export default router;