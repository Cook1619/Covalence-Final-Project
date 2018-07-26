const express = require('express');
const usersRouter = require('./routes/users');
const teamsRouter = require('./routes/teams');

let router = express.Router();

router.use('./api/users', usersRouter);
router.use('/api/teams', teamsRouter);
module.exports(router);