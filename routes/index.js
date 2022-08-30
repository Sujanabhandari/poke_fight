var express = require("express");
var router = express.Router();

const { get_all_pokemon, get_all_pokemon_id } = require("../controllers/pokemon");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.route("/pokemons").get(get_all_pokemon);

router.route("/pokemons/:id").get(get_all_pokemon_id);

module.exports = router;
