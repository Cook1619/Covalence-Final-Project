// import { Router } from 'express';
// const express =  require('express');
// let app = express();
// const path = require('path');
// const MySportsFeeds = require('mysportsfeeds-node');
// const msf = new MySportsFeeds('1.0', true);

// msf.authenticate("db265894-6d32-4d76-b616-0a127c", "Kino81672141!");
// var data = msf.getData('mlb', '2018-regular', 'scoreboard', 'json',{'for-date':'20180527'});

// let router = Router();

// router.get('/', (req, res) => {
//     res.json(req.body);
//     console.log(req.body)
// }, (err)=>{
//     console.log(err);
// } );
// // app.use('/sports', express.static(path.join(__dirname, '../../client/src/components/DisplayGames.jsx')));

// export default router;

import { Router } from 'express';
import Table from '../table';
let router = Router();

let SportsData = new Table('scoreboard');

router.get('/', async (req, res) => {
    let mlbdata = await SportsData.futureGame();
    res.json(mlbdata);
});

router.get('/:id', async (req, res) => {
    let id = req.params.id;
    console.log(id);
    let mlbdata = await SportsData.getOne(id);
    res.json(mlbdata);
});


export default router;