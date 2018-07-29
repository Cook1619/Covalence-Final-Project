const express = require('express');

const gamesStore = require('../gamesStore')

let router = express.Router();

router.get('/:id?', (req, res) => {
    let id = req.params.id
    if (id) {
        res.json(gamesStore.GetGame(id));
    } else {
        res.send(gamesStore.GetGames());
    }
});


module.exports = router;
