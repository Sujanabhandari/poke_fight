var express = require('express');
var router = express.Router();

const {
  get_all_pokemon
} = require("../controllers/pokemon");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router
  .route("/pokemons")
  .get(get_all_pokemon);

module.exports = router;
