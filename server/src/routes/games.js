import { Router } from 'express';
import axios from 'axios';
import Table from '../table';


let router = Router();

const scores = new Table('pastgames');

router.post('/', async (req, res) => {
    try {
        let testData = await axios({
            method: 'get',
            url: `https://api.mysportsfeeds.com/v1.0/pull/mlb/2018-regular/scoreboard.json?fordate=20180804`,
            auth: {
                username: process.env.SPORTS_SK,
                password: process.env.SPORTS_PW
            }
        });

        let scoreData = testData.data.scoreboard.gameScore;
        console.log(scoreData)

        scoreData.forEach( async gameObj => {
            let idObj =  await scores.insertScoreboard({
                game_ID: gameObj.game.ID,
                game_date: gameObj.game.date,
                game_location: gameObj.game.location,
                homeTeam_ID: gameObj.game.homeTeam.ID,
                homeTeam_City: gameObj.game.homeTeam.City,
                homeTeam_Name: gameObj.game.homeTeam.Name,
                awayTeam_ID: gameObj.game.awayTeam.ID,
                awayTeam_City: gameObj.game.awayTeam.City,
                awayTeam_Name: gameObj.game.awayTeam.Name,
                homeScore: gameObj.homeScore,
                awayScore: gameObj.awayScore,
            });
        });
        console.log(idObj)
        res.sendStatus(200);
        } catch (err) {
            console.log(err);
            res.sendStatus(500);
        }
    });

export default router;