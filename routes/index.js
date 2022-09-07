var express = require("express");
var router = express.Router();

const { get_all_pokemon, get_all_pokemon_id, get_all_pokemon_id_info } = require("../controllers/pokemon");
const { display_game_result, display_leaderboard } = require("../controllers/game");
/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.route("/pokemons").get(get_all_pokemon);

router.route("/pokemons/:id").get(get_all_pokemon_id);

router.route("/pokemons/:id/:info").get(get_all_pokemon_id_info);

router.route("/leaderboard").get(display_game_result);

router.route("/game/leaderboard").get(display_leaderboard);


module.exports = router;
