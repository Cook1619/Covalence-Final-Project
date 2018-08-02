import { Router } from 'express';
import axios from 'axios';
import Table from '../table';
const express = require('express');
let app = express();
const MySportsFeeds = require('mysportsfeeds-node');
const msf = new MySportsFeeds('1.0', true);


let router = Router();

const scores = new Table('scoreboard');

router.get('/', async(req, res) => {

    try {
        let testData = await axios({
            method: 'get',
            url: `https://api.mysportsfeeds.com/v1.0/pull/mlb/2018-regular/scoreboard.json?fordate=2018080${date}`,
            auth: {
                username: 'e91faac0-bac2-4f7e-afde-853ef7',
                password: 'Kino81672141!'
            }
        });
        
        console.log(testData.data);

        res.status(200).send('Ok');
    } catch (err) {
        res.status(500).send('YOU DONE MESSED UP AARON');
    }

});

export default router;