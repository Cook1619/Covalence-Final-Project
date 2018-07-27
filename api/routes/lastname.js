const express = require('express');
let router = express.Router();

router.get('/', (req,res) => {
    res.send('lastname');
});

module.exports = router;