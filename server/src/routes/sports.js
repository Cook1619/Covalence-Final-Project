import { Router } from 'express';
const MySportsFeeds = require('mysportsfeeds-node');
const msf = new MySportsFeeds('1.0', true);

msf.authenticate("db265894-6d32-4d76-b616-0a127c", "Kino81672141!");
var data = msf.getData('mlb', '2018-regular', 'scoreboard', 'json',{fordate:'20180519'});

let router = Router();

router.get('/', (req, res) => {
    res.json(req.body);
    console.log(req.body)
}, (err)=>{
    console.log(err);
} );

export default router;