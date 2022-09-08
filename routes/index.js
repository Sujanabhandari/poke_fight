var express = require("express");
var router = express.Router();

const { get_all_pokemon, get_all_pokemon_id, get_all_pokemon_id_info } = require("../controllers/pokemon");

const {  get_result_of_game,
  get_leaderboard_info, get_previous_information } = require("../controllers/game_controller");

  const {
    create_new_user, update_field_of_self
  } = require("../controllers/users_controller");


  const { authorizeAdmin } =  require("../middlewares/authorizeAdmin")
  const {authenticate_self} = require("../controllers/auth");
  
/* GET home page. */

router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.route('/register').post(create_new_user);
router.route('/me').patch(update_field_of_self)


//Pokemons Routes
router.route("/pokemons").get(get_all_pokemon);

router.route("/pokemons/:id").get(get_all_pokemon_id);

router.route("/pokemons/:id/:info").get(get_all_pokemon_id_info);

router.route("/game/save").get(get_result_of_game);


router.route("/leaderboard").get(get_previous_information);

router.route("/game/leaderboard").get(get_leaderboard_info);

module.exports = router;
