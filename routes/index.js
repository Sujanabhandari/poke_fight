var express = require("express");
var router = express.Router();

const { get_all_pokemon, get_all_pokemon_id, get_all_pokemon_id_info } = require("../controllers/pokemon");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.route("/pokemons").get(get_all_pokemon);

router.route("/pokemons/:id").get(get_all_pokemon_id);

router.route("/pokemons/:id/:info").get(get_all_pokemon_id_info);

module.exports = router;
