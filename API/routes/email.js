const express = require('express');
let router = express.Router();

router.get('/', (req,res) => {
    res.send('email');
});

module.exports = router;