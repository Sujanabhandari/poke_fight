var express = require('express');

var router = express.Router();

const {
  get_all_pokemon
} = require("../controllers/pokemon");


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});




module.exports = router;
