const express = require('express');
const usersStore = require('../filestore');

let router = express.Router();

router.get('/:id?', (req,res) => {
   let id = req.params.id
    if(id){
        res.json(usersStore.GetUser(id));
    }
    else{
    res.send(usersStore.GetUsers());
    }
});

router.post('/',(req, res)=>{
    usersStore.createUser(req.body);
    res.sendStatus(200);
});

module.exports = router;