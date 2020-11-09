const express = require('express');
const router = express.Router();
const { authenticator } = require('../middlewares/auth');

const home = require('./modules/home');
const todos = require('./modules/todos');
const users = require('./modules/users');

router.use('/todos', authenticator ,todos);
router.use('/users', users);
router.use('/', authenticator, home);

module.exports = router;
