import { Router } from 'express';
import axios from 'axios';
import Table from '../table';
import { config } from '../config';


let router = Router();

// const scores = new Table('scoreboard');
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

        console.log(testData.data);

        res.status(200).send('Ok');
    } catch (err) {
        res.status(500).send('YOU DONE MESSED UP AARON');
    }

});

export default router;