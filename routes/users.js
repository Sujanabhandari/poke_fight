var express = require('express');

var usersRouter = express.Router();

const {
  create_login_user
} = require("../controllers/user_input");

usersRouter.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


usersRouter.route('/connect').post(create_login_user);

module.exports = usersRouter;
