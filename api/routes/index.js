const express = require('express');
const nameRouter = require('./routes/name');
const emailRouter = require('./routes/email');
const firstnameRouter = require('./routes/firstname');
const lastnameRouter = require('./routes/lastname');


let router = express.Router();

router.use('/name', nameRouter);
router.use('/email', emailRouter);
router.use('/firstname', firstnameRouter);
router.use('/lastname', lastnameRouter);

module.exports = router;
